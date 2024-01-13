import type {IUser} from "~/types/types";
import {AxiosError} from 'axios'
const getError = (e:AxiosError) => new Error(e?.response?.data?.message || e.message)

export default function useApiService () {
	const {$api} = useNuxtApp()

	const getAll = async (tableName: string) => {
		const {data: {count, rows}} = await $api.get(`/api/${tableName}`)
		return {count, rows}
	}
	const getAttrs = async (tableName:string) => {
		const {data} = await $api.get(`/api/${tableName}/attrs`)
		return data
	}

	const registration = async (email:string, password: string) =>  {
		try {
			const {data} = await $api.post<IUser>('/api/users/registration', {email, password})
			return data
		}catch (e:AxiosError) {
			throw getError(e)
		}
	}

	const login = async (email:string, password: string) => {
		try {
			const {data} = await $api.post<IUser>('/api/users/login', {email, password})
			return data;
		}catch (e:AxiosError){
			throw getError(e)
		}
	}

	const auth = async () => {
		try {
			const {data} = await $api.get<IUser>('/api/users/auth')
			return data;
		}catch (e:AxiosError){
			throw getError(e)
		}
	}

	const addProduct = async (productData: FormData) => {
		try {
			const {data} = await $api.post<any>('/api/products/create', productData)
			return data;
		}catch (e:AxiosError){
			throw getError(e)
		}
	}


	return {
		getAttrs,
		getAll,
		registration,
		login,
		auth,
		addProduct
	}
}