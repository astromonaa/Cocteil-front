import type {ISocketModuleInterface} from "~/inversion/interfaces/SocketModule.interface";

export interface ISocketApiModuleInterface {
    readonly _name: string;
    readonly _adapter: ISocketModuleInterface;

    subscribeToReceiveMessage: (callback: () => void) => void;
    emitSendMessage: (data: any, roomId?: string) => void;
    listenChatInitEvents: () => void;
    unsubscribe: () => void;
}