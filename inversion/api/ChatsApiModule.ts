import {inject, injectable} from "inversify";
import type {IChatsApiModuleInterface} from "~/inversion/interfaces/chatsApiModuleInterface";
import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import {TYPES} from "~/inversion/types/types";
import type {Socket} from "socket.io-client";

@injectable()
export class ChatsApiModule implements IChatsApiModuleInterface {
    readonly _name = 'chats-api'
    readonly _adapter: IRestModuleInterface;

    constructor(
        @inject(TYPES._restAdapter) _adapter: IRestModuleInterface
    ) {
        this._adapter = _adapter;
    }

    async getChatsList() {
        try {
            return this._adapter.get({ url: '/api/chats' })
        }catch (e) {
            await Promise.reject(e)
        }
    }
}