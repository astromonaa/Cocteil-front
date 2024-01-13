import { storeToRefs } from "pinia"
import useApiService from "~/services/ApiService"
import { useAdminNotificationsStore } from "~/store/adminNotitcationsStore"

export default function () {

  const ApiService = useApiService()

  const store = useAdminNotificationsStore()
  const {addNotification} = store


  const email = ref('')
  const password = ref('')
  const refetch = ref(false)
  const isLoading = ref(false)
  const successNotification = { success: true, message: 'Пользователь успешно добавлен' }


  const addUser = async () => {
    try {
      if (!email.value || !password.value) return
      isLoading.value = true;
      const user = await ApiService.registration(email.value, password.value)
      isLoading.value = false;
      refetch.value=true
      addNotification(successNotification)
      return user
    }catch(e) {
      console.log(e);
      addNotification({ success: false, message: e.response.data.message || e.message })
    }finally{
      isLoading.value = false
      setTimeout(() => (refetch.value = false), 1000)
    }
  }


  return {
    email,
    password,
    addUser,
    refetch,
    isLoading
  }
}