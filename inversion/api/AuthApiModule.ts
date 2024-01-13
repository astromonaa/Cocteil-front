import type IAuthApiModuleInterface from "~/inversion/interfaces/AuthApiModule.interface";
import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import {injectable, inject} from "inversify";
import {TYPES} from "~/inversion/types/types";
import {AxiosError} from "axios";


const getError = (e:AxiosError) => new Error(e?.response?.data?.message || e.message)

@injectable()
export class AuthApiModule implements IAuthApiModuleInterface {
	readonly _name = 'auth-api'
	readonly _adapter: IRestModuleInterface

	constructor(
		@inject(TYPES._restAdapter) _adapter: IRestModuleInterface
	) {
		this._adapter = _adapter
	}

	async registration(email:string, password: string)  {
		try {
			return this._adapter.post({
				url: '/api/users/registration',
				data: {email, password}
			})
		}catch {
			await Promise.reject()
		}
	}

	async login (email:string, password: string){
		try {
			return this._adapter.post({
				url: '/api/users/login',
				data: {email, password}
			})
		}catch(e:AxiosError) {
			await Promise.reject(getError(e))
		}
	}

	async logout() {
		try {
			return this._adapter.post({
				url: '/api/users/logout'
			})
		}catch{
			await Promise.reject()
		}
	}

	async auth (){
		try {
			return this._adapter.get({
				url: '/api/users/auth'
			})
		}catch{
			await Promise.reject()
		}
	}

}