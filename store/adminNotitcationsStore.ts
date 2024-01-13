import { defineStore } from "pinia";
import type { INotification } from "~/types/types";


export const useAdminNotificationsStore = defineStore('adminNotitficationsStore', () => {
  const state = ref<INotification[]>([])

  const addNotification = (notification:INotification) => {
    state.value = [{...notification, id: performance.now()}]
  }


  return {
    state,
    addNotification
  }
})