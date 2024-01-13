import type {ICartApiModuleInterface} from "~/inversion/interfaces/cartApiModule.interface";
import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import {injectable, inject} from "inversify";
import {TYPES} from "~/inversion/types/types";

// function methodInterceptor(target:object, key:any, descriptor:object) {
// 	const originalMethod = descriptor.value;
//
// 	descriptor.value = async function (...args) {
// 		this._isLoading = true
// 		const r = await originalMethod.apply(this, args);
// 		this._isLoading = false
// 		return r
// 	};
//
// 	return descriptor;
// }


@injectable()
export class CartApiModule implements ICartApiModuleInterface {
	_name = 'cart-api'
	_adapter: IRestModuleInterface

	constructor(
		@inject(TYPES._restAdapter) _adapter: IRestModuleInterface
	) {
		this._adapter = _adapter
	}

	// @methodInterceptor
	async getCartProductsAsync() {
		try {
			return this._adapter.get({
				url: `/api/cart/`
			})
		}catch(e) {
			await Promise.reject(e)
		}
	}

	async addToCartAsync(id: number, data: object) {
		try {
			return this._adapter.post({
				url: `/api/cart/${id}`,
				data
			})
		}catch (e){
			await Promise.reject()
		}
	}


	async updateCartProductAsync(){}
	async deleteCartProductAsync(){}
}