import type {IRequestData, IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";

export interface IChatsApiModuleInterface {
    readonly _name: string;
    readonly _adapter: IRestModuleInterface;

    getChatsList: () => Promise<any>

}