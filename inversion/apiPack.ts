import {inject, injectable} from 'inversify'
import type {IApiPackModuleInterface} from "~/inversion/interfaces/apiPackModule.interface";
import type {IProductApiModuleInterface} from "~/inversion/interfaces/productsApiModule.interface";
import type {ICategoryApiModuleInterface} from "~/inversion/interfaces/categoryApiModule.interface";
import type {IUsersApiModuleInterface} from "~/inversion/interfaces/usersApiModule.interface";
import type {ICartApiModuleInterface} from "~/inversion/interfaces/cartApiModule.interface";

import {TYPES} from './types/types'
import type IAuthApiModuleInterface from "~/inversion/interfaces/AuthApiModule.interface";
import type {IChatsApiModuleInterface} from "~/inversion/interfaces/chatsApiModuleInterface";
import type {ISocketApiModuleInterface} from "~/inversion/interfaces/socketApiModule.interface";
import type {IOrderApiModuleInterface} from "~/inversion/interfaces/OrdersApiModule.interface";

@injectable()
export class ApiPack implements IApiPackModuleInterface {
	readonly _name = 'api-pack'
	readonly _productsApi: IProductApiModuleInterface
	// readonly _categoriesApi: ICategoryApiModuleInterface
	// readonly _usersApi: IUsersApiModuleInterface
	readonly _cartApi: ICartApiModuleInterface
	readonly _authApi: IAuthApiModuleInterface
	readonly _chatsApi: IChatsApiModuleInterface;
	readonly _socketApi: ISocketApiModuleInterface;
	readonly _ordersApi: IOrderApiModuleInterface;


	constructor(
		@inject(TYPES._productsApi) _productsApi: IProductApiModuleInterface,
		// @inject(TYPES._categoriesApi) _categoriesApi: ICategoryApiModuleInterface,
		// @inject(TYPES._usersApi) _usersApi: IUsersApiModuleInterface,
		@inject(TYPES._cartApi) _cartApi: ICartApiModuleInterface,
		@inject(TYPES._authApi) _authApi: IAuthApiModuleInterface,
		@inject(TYPES._chatsApi) _chatsApi: IChatsApiModuleInterface,
		@inject(TYPES._socketApi) _socketApi: ISocketApiModuleInterface,
		@inject(TYPES._ordersApi) _ordersApi: IOrderApiModuleInterface,
	) {
		this._productsApi = _productsApi;
		// this._categoriesApi = _categoriesApi;
		// this._usersApi = _usersApi
		this._cartApi = _cartApi
		this._authApi = _authApi
		this._chatsApi = _chatsApi
		this._socketApi = _socketApi
		this._ordersApi = _ordersApi
	}
}