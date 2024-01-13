import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";


export interface ICartApiModuleInterface {
	readonly _name: string;
	readonly _adapter: IRestModuleInterface;

	addToCartAsync: (id: number, data: object) => Promise<any>
	updateCartProductAsync: (data: any) => Promise<any>
	deleteCartProductAsync: (id: number) => Promise<any>
}