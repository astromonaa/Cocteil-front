import useApiService from "~/services/ApiService";
import {useUserStore} from "~/store/user";
import {saveToLocalStorage} from '~/utils/useLocalStorage'



const useAuth = () => {
	const {$app} = useNuxtApp()
	const userStore = useUserStore()
	const auth = async () => {
		try {
			userStore.setIsLoading(true)
			const data = await $app._apiPack._authApi.auth()
			userStore.setUser(data)
			saveToLocalStorage('token', data.accessToken)
		}catch (e) {
			userStore.setUser(null)
			throw new Error(e.message)
		}finally {
			userStore.setIsLoading(false)
		}
	}

	return {auth}
}

export default useAuth