import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const {user, isLoading} = storeToRefs(useUserStore())
  watch(() => user.value, n => {
    if (!isLoading && !n || n?.role !== 'ADMIN') {
      return navigateTo('/404')
    }
  }, {deep: true, immediate: true})
})