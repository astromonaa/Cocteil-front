import {defineStore} from "pinia";
import type {IUser} from "~/types/types";


export const useUserStore = defineStore('userStore', () => {
	const user = ref<IUser | null>()
	const isLoading = ref(false)


	const setUser = (userData:IUser | null) => {
		user.value = userData
	}
	const setIsLoading = (value: boolean) => isLoading.value = value

	const isAuth = computed(() => !!user.value?.id)

	return {
		user, setUser, isAuth, isLoading, setIsLoading
	}

})