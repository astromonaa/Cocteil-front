import type {IProductApiModuleInterface} from "~/inversion/interfaces/productsApiModule.interface";
import type {ICategoryApiModuleInterface} from "~/inversion/interfaces/categoryApiModule.interface";
import type {IUsersApiModuleInterface} from "~/inversion/interfaces/usersApiModule.interface";
import type {ICartApiModuleInterface} from "~/inversion/interfaces/cartApiModule.interface";
import IAuthApiModuleInterface from "~/inversion/interfaces/AuthApiModule.interface";

export interface IApiPackModuleInterface {
	readonly _name: string;
	readonly _productsApi: IProductApiModuleInterface
	readonly _authApi: IAuthApiModuleInterface
	// readonly _categoriesApi: ICategoryApiModuleInterface
	// readonly _usersApi: IUsersApiModuleInterface
	readonly _cartApi: ICartApiModuleInterface
}