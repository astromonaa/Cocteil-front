// Абстрактный интерфейс для socket-подключения
export interface ISocketConnection {
    readonly id: string;
}

export interface ISocketModuleInterface {
    readonly _name: string;
    readonly _socket: ISocketConnection;

    subscribe: (channel: string, callback: () => void) => void;
    emit: (channel: string, data: any, roomId?: string) => void;
    unsubscribe: () => void;
}