import type {ISocketModuleInterface, ISocketConnection} from "~/inversion/interfaces/SocketModule.interface";
import {injectable} from "inversify";
import {getToken} from "../../../plugins/axios";
import {getDeviceFingerprint} from "../../../utils/deviceFingerprint";

interface WebSocketMessage {
    channel: string;
    data: any;
    roomId?: string;
}

@injectable()
export class WebSocketAdapter implements ISocketModuleInterface {
    readonly _name = 'websocket-adapter';
    readonly _socket!: ISocketConnection & WebSocket;
    private messageHandlers: Map<string, Set<(data?: string) => void>> = new Map();
    private connectionId: string | null = null;
    private isConnected: boolean = false;
    private connectResolvers: Array<() => void> = [];
    private messagesQueue: Array<WebSocketMessage> = [];

    constructor() {
      if (!process.client) return;

      const config = useRuntimeConfig();
      const { public: { apiUrl } } = config;
      const token = getToken();
      
      // Генерируем или получаем fingerprint устройства
      const fingerprint = getDeviceFingerprint();

      const wsUrl = `${apiUrl.replace(/^http/, 'ws')}/ws?token=${token}&fingerprint=${fingerprint}`;
      const ws = new WebSocket(wsUrl);
      // Создаем прокси-объект для совместимости с интерфейсом
      this._socket = this.createSocketProxy(ws);

      this.initWsConnection();
    }

    initWsConnection() {
      this._socket.addEventListener('open', () => {
        // Генерируем уникальный ID для подключения
        this.connectionId = this.generateConnectionId();
        this.isConnected = true;

        // Обрабатываем все отложенные колбэки подключения
        this.processConnectCallbacks();

        this.processMessagesQueue()

        // Эмулируем событие 'connect' как в socket.io
        this.triggerChannelHandlers('connect');
      });

      this._socket.addEventListener('message', (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.triggerChannelHandlers(message.channel, message.data);
        } catch (error) {
          console.error('Ошибка при парсинге WebSocket сообщения:', error);
        }
      });

      this._socket.addEventListener('error', (error) => {
        console.error('WebSocket ошибка:', error);
      });

      this._socket.addEventListener('close', () => {
        this.messageHandlers.clear();
        this.connectionId = null;
      });
    }

    private createSocketProxy(ws: WebSocket): ISocketConnection & WebSocket {
        const self = this;
        Object.defineProperty(ws, 'id', {
            get: () => self.connectionId || '',
            enumerable: true,
            configurable: true
        });
        return ws as ISocketConnection & WebSocket;
    }

    emit(channel: string, data: any, roomId?: string) {
        const message: WebSocketMessage = {
          channel,
          data,
          roomId
        };

        if (this._socket.readyState !== WebSocket.OPEN) {
          this.messagesQueue.push(message)
          return;
        }

        this._socket.send(JSON.stringify(message));
    }

    private async processConnectCallbacks() {
        // Создаем копию массива и очищаем оригинал
        const callbacks = [...this.connectResolvers];
        this.connectResolvers = [];

        // Выполняем все колбэки асинхронно
        for (const callback of callbacks) {
            try {
                await Promise.resolve().then(() => callback());
            } catch (error) {
                console.error('Ошибка в обработчике подключения:', error);
            }
        }
    }

    private processMessagesQueue() {
      for (const { channel, data, roomId } of this.messagesQueue) {
        this.emit(channel, data, roomId);
      }
    }

    subscribe(channel: string, callback: () => void) {
        if (!this.messageHandlers.has(channel)) {
            this.messageHandlers.set(channel, new Set());
        }

        // Специальная обработка для события 'connect'
        if (channel === 'connect') {
            if (this.isConnected) {
                // Если уже подключены, вызываем колбэк асинхронно
                Promise.resolve().then(() => callback());
            } else {
                // Иначе добавляем в очередь
                this.connectResolvers.push(callback);
            }
        }

        this.messageHandlers.get(channel)!.add(callback);
    }

    unsubscribe() {
        this.messageHandlers.clear();
        if (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING) {
            this._socket.close();
        }
    }

    private triggerChannelHandlers(channel: string, data?: string) {
        const handlers = this.messageHandlers.get(channel);
        if (handlers) {
            handlers.forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error('Ошибка при выполнении обработчика канала:', error);
                }
            });
        }
    }

    private generateConnectionId(): string {
        return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }
}

