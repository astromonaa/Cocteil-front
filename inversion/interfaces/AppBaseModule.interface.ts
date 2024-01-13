import type {IApiPackModuleInterface} from "~/inversion/interfaces/apiPackModule.interface";

export interface IAppBaseModuleInterface {
	readonly _name: string;
	readonly _apiPack: IApiPackModuleInterface
}