import type {IApiPackModuleInterface} from "./apiPackModule.interface";

export interface IAppBaseModuleInterface {
  readonly _name: string;
  readonly _apiPack: IApiPackModuleInterface
}