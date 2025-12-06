import type {ISocketModuleInterface, ISocketConnection} from "~/inversion/interfaces/SocketModule.interface";
import {Socket} from "socket.io-client";
import {injectable} from "inversify";
import { io } from "socket.io-client";

@injectable()
export class SocketIOAdapter implements ISocketModuleInterface{
    readonly _name = 'socket-io-adapter';
    readonly _socket: ISocketConnection & Socket;
    constructor() {
        const { public: { apiUrl } } = useRuntimeConfig()
        this._socket = io(apiUrl) as ISocketConnection & Socket;
    }

    emit(channel: string, data: any) {
        this._socket.emit(channel, data)
    }

    subscribe(channel: string, callback: () => void) {
        this._socket.on(channel, callback)
    }

    unsubscribe() {
        this._socket.disconnect()
    }
}