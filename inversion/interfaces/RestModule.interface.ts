import type {Axios, AxiosResponse} from "axios";

export interface IRequestData {
	url: string;
	data?: any
	id?: number
}
export interface IRestModuleInterface {
	readonly _name: string;
	_api: Axios
	readonly _apiUrl: string

	get: (data: IRequestData) => Promise<AxiosResponse<IRequestData, any>>,
	post: (data: IRequestData) => Promise<AxiosResponse<IRequestData, any>>,
	delete: (data: IRequestData) => Promise<AxiosResponse>,
	put: (data: IRequestData) => Promise<AxiosResponse>,
	updateApi: () => void;
}