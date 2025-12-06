import {getFromLocaleStorage} from '~/utils/useLocalStorage'


export const getToken = () => {
  try {
    return JSON.parse(getFromLocaleStorage('token') || '')
  }catch {
    return null
  }
}
export default defineNuxtPlugin(({$config}) => {
  const baseURL = `http://${$config.public.apiUrl}`;
  const token = process.client ? getToken() : null

  const api = $fetch.create({
    baseURL,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


  return {
    provide: {
      api
    }
  }

})