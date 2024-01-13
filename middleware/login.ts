import {useUserStore} from "~/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const userStore = useUserStore()
	watch(() => userStore.isAuth, n => {
		if (n) return navigateTo('/')
	})
})