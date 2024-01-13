<script setup lang="ts">
import Navbar from '~/components/admin/Navbar.vue';
import Categories from '~/components/admin/Categories.vue'
import Products from "~/components/admin/Products.vue";
import Users from '~/components/admin/Users.vue';
import Notification from '~/components/UI/Notification.vue';
import { useAdminNotificationsStore } from '~/store/adminNotitcationsStore';
import { storeToRefs } from 'pinia';
import {useUserStore} from "~/store/user";
import Loader from "~/components/UI/Loader.vue";

definePageMeta({
  layout: 'base-layout',
  middleware: ['is-admin'],
})
const {isLoading} = storeToRefs(useUserStore())
const {state:notifications} = storeToRefs(useAdminNotificationsStore())
const route = useRoute()


const section = ref()

const isCategories = computed(() => section.value === 'category')
const isProducts = computed(() => section.value === 'products')
const isUsers = computed(() => section.value === 'users')

watch(() => route.query, n => {
  section.value = n.section
}, {deep: true, immediate: true})

</script>


<template>
  <div v-if="!isLoading">
    <Navbar/>
    <div>
      <Notification v-for="n in notifications.reverse()" :key="n.id" :notification="n"/>
    </div>
    <section class="base-section">
      <Categories v-if="isCategories" />
      <Products v-if="isProducts" />
      <Users v-if="isUsers"/>

    </section>
  </div>
  <Loader v-else/>
</template>

<style>
.base-section {
  margin-top: 50px;
}
</style>