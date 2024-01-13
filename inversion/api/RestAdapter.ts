import {injectable} from "inversify";
import type {IRequestData, IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import type {Axios, AxiosResponse} from "axios";
import axios from "axios";
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

	return axios.create({
		baseURL: apiUrl,
		withCredentials: true,
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}


@injectable()
export class RestAdapter implements IRestModuleInterface {
	readonly _name = '_api'
	_api: Axios
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
		const {data} = await this._api.get<IRequestData, AxiosResponse>(inputData.url)
		return data
	}

	async post(inputData: IRequestData) {
		const {data} = await this._api.post<IRequestData, AxiosResponse>(inputData.url, inputData.data)
		return data
	}

	async put(inputData: IRequestData) {
		const {data} = await this._api.put<IRequestData, AxiosResponse>(inputData.url, inputData.data)
		return data
	}

	async delete(inputData: IRequestData) {
		const {data} = await this._api.delete<IRequestData, AxiosResponse>(inputData.url)
		return data
	}
}