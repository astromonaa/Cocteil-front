import {useUserStore} from "~/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
	const userStore = useUserStore()
	watch(() => userStore.isLoading, n => {
		if (!n && !userStore.isAuth) return navigateTo('/auth')
	})
})