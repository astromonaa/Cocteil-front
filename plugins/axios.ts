import axios from "axios";
import {getFromLocaleStorage} from '~/utils/useLocalStorage'


const getToken = () => {
  try {
    return JSON.parse(getFromLocaleStorage('token') || '')
  }catch {
    return null
  }
}
export default defineNuxtPlugin(({vueApp, $config}) => {
  const baseURL = $config.public.apiUrl as string
  const token = process.client ? getToken() : null

  const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  // $api.interceptors.response.use(config => {
  //   if (config.status === 404) {
  //     config.request()
  //   }
  // })

  return {
    provide: {
      api
    }
  }

})