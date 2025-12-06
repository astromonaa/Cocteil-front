import type {IProductApiModuleInterface} from "~/inversion/interfaces/productsApiModule.interface";
import type {ICategoryApiModuleInterface} from "~/inversion/interfaces/categoryApiModule.interface";
import type {IUsersApiModuleInterface} from "~/inversion/interfaces/usersApiModule.interface";
import type {ICartApiModuleInterface} from "~/inversion/interfaces/cartApiModule.interface";
import type IAuthApiModuleInterface from "~/inversion/interfaces/AuthApiModule.interface";
import type {IChatsApiModuleInterface} from "~/inversion/interfaces/chatsApiModuleInterface";
import type {IOrderApiModuleInterface} from "~/inversion/interfaces/OrdersApiModule.interface";

export interface IApiPackModuleInterface {
	readonly _name: string;
	readonly _productsApi: IProductApiModuleInterface
	readonly _authApi: IAuthApiModuleInterface
	// readonly _categoriesApi: ICategoryApiModuleInterface
	// readonly _usersApi: IUsersApiModuleInterface
	readonly _cartApi: ICartApiModuleInterface
	readonly _chatsApi: IChatsApiModuleInterface;
	readonly _ordersApi: IOrderApiModuleInterface;
}