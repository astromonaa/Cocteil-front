import type {ISocketApiModuleInterface} from "~/inversion/interfaces/socketApiModule.interface";
import type {ISocketModuleInterface} from "~/inversion/interfaces/SocketModule.interface";
import {injectable, inject} from "inversify";
import {saveToLocalStorage} from "~/utils/useLocalStorage";
import {TYPES} from "../types/types";

const STORAGE_ROOM_KEY = 'chatRoomId'


@injectable()
export class SocketApiModule implements ISocketApiModuleInterface {
  readonly _name = 'socket-module'
  readonly _adapter: ISocketModuleInterface;

  constructor(
    @inject(TYPES._websocketAdapter) _adapter: ISocketModuleInterface,
  ) {
    this._adapter = _adapter
  }

  emitSendMessage(data: any) {
    const roomId = getFromLocaleStorage(STORAGE_ROOM_KEY);
    if (!roomId) {
      console.log('Возникла ошибка, перезагрузите страницу')
      return;
    }
    this._adapter.emit('message', data, roomId);
  }

  subscribeToReceiveMessage(callback: () => void) {
    this._adapter.subscribe('message', callback)
  }

  listenChatInitEvents() {
    this._adapter.subscribe('connect', () => {
      if (getFromLocaleStorage(STORAGE_ROOM_KEY)) return;
      saveToLocalStorage(STORAGE_ROOM_KEY, this._adapter._socket.id)
    })
    this._adapter.subscribe('get-roomId', () => {
      this._adapter.emit('get-roomId', getFromLocaleStorage(STORAGE_ROOM_KEY))
    })
  }

  unsubscribe() {
    this._adapter.unsubscribe()
  }

}