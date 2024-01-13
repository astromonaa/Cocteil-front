import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";


export interface IProductApiModuleInterface {
	readonly _name: string;
	readonly _adapter: IRestModuleInterface;

	fetchProducts: () => any;
	fetchOneProduct: (id: string) => Promise<any>;
	createProductAsync: (data: any) => Promise<any>
	updateProductAsync: (data: any) => Promise<any>
	deleteProductAsync: (id: string) => Promise<any>
	addToFavoritesAsync: (id: number) => Promise<any>
	fetchFavorites: () => Promise<any>
}