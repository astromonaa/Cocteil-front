import type {$Fetch} from "nitropack";

export interface IRequestData {
	url: string;
	data?: any
	id?: number
}
export interface IRestModuleInterface {
	readonly _name: string;
	_api: $Fetch
	readonly _apiUrl: string

	get: <T>(data: IRequestData) => Promise<T>,
	post: <T>(data: IRequestData) => Promise<T>,
	delete: (data: IRequestData) => Promise<void>,
	put: (data: IRequestData) => Promise<void>,
	updateApi: () => void;
}