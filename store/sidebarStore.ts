import {ref} from 'vue'
import {defineStore} from "pinia";

export const useSidebarStore = defineStore('sidebarStore', () => {
    const isOpen = ref(false)
    const fullOpen = ref(false)

    const toggleOpen = (checked:boolean, full:boolean) => {
        isOpen.value = checked
        fullOpen.value = full
    }

    return { isOpen, fullOpen, toggleOpen }
})