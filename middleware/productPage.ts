export default defineNuxtRouteMiddleware(async (to, from) => {
	if (to.params.id.match(/\D/g)) {
		return navigateTo('/404')
	}
})