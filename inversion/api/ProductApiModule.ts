import type {IProductApiModuleInterface} from "~/inversion/interfaces/productsApiModule.interface";
import type {IRequestData, IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import {injectable, inject} from "inversify";
import {TYPES} from '../types/types'

@injectable()
export class ProductApiModule implements IProductApiModuleInterface {
	readonly _name = 'product-api'
	readonly _adapter: IRestModuleInterface;

	constructor(
		@inject(TYPES._restAdapter) _adapter: IRestModuleInterface
	) {
		this._adapter = _adapter
	}

	async fetchProducts() {
		try {
			return this._adapter.get({
				url: '/api/products'
			})
		}catch (e) {
			await Promise.reject()
		}
	}

	async fetchOneProduct(id: string) {
		try {
			return this._adapter.get({
				url: `/api/products/${id}`
			})
		}catch (e) {
			await Promise.reject(e)
		}
	}
	async createProductAsync(data:any) {
		try {
			return await this._adapter.post({
				url: '/api/products/create',
				data
			})
		}catch (e) {
			await Promise.reject(e)
		}
	}
	async updateProductAsync(data: IRequestData) {
		try {
			return this._adapter.put({
				url: `/api/products/${data.id}`,
				data
			})
		}catch (e) {
			 await Promise.reject(e)
		}
	}

	async deleteProductAsync(id: string) {
		try {
			return this._adapter.delete({
				url: `/api/products/${id}`
			})
		}catch(e) {
			await Promise.reject(e)
		}
	}

	async addToFavoritesAsync(id: number) {
		try {
			return this._adapter.post({
				url: `/api/favorites/${id}`
			})
		}catch (e) {
			await Promise.reject(e)
		}
	}

	async fetchFavorites() {
		try {
			return this._adapter.get({
				url: '/api/favorites/'
			})
		}catch (e) {
			await Promise.reject(e)
		}
	}
}