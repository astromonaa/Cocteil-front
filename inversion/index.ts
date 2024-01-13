import {injectable, inject} from "inversify";
import type {IAppBaseModuleInterface} from "~/inversion/interfaces/AppBaseModule.interface";
import type {IApiPackModuleInterface} from "~/inversion/interfaces/apiPackModule.interface";
import {TYPES} from './types/types'

@injectable()
export class App implements IAppBaseModuleInterface {
	readonly _name = 'app'
	readonly _apiPack: IApiPackModuleInterface

	constructor(
		@inject(TYPES._apiPack) _apiPack: IApiPackModuleInterface
	) {
		this._apiPack = _apiPack
	}
}