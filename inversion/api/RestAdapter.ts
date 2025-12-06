import {injectable} from "inversify";
import type {IRequestData, IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import {getFromLocaleStorage} from "~/utils/useLocalStorage";


const getToken = () => {
	try {
		return JSON.parse(getFromLocaleStorage('token') || '')
	}catch {
		return null
	}
}
const createApi = (apiUrl:string) => {
	const token = process.client ? getToken() : null

	return $fetch.create({
		baseURL: apiUrl,
		credentials: 'include',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}


@injectable()
export class RestAdapter implements IRestModuleInterface {
	readonly _name = '_api'
	_api: any
	readonly _apiUrl: string

	constructor() {
		const {public: {apiUrl}} = useRuntimeConfig()
		this._apiUrl = apiUrl
		this._api = createApi(this._apiUrl)
	}

	updateApi() {
		this._api = createApi(this._apiUrl)
	}

	async get(inputData: IRequestData) {
		return this._api(inputData.url)
	}

	async post(inputData: IRequestData) {
		const data = await this._api(inputData.url, {
			method: 'POST',
			body: inputData.data
		})
		return data
	}

	async put(inputData: IRequestData) {
		const data = await this._api(inputData.url, {
			method: 'PUT',
			body: inputData.data
		})
		return data
	}

	async delete(inputData: IRequestData) {
		return this._api(inputData.url, {
			method: 'DELETE'
		})
	}
}