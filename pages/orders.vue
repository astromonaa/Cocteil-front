<script setup lang="ts">
import OrdersList from "../components/orders/OrdersList.vue";

const { fetchOrders, orders } = useOrders()

definePageMeta({
  layout: ''
})

onMounted(fetchOrders)
</script>

<template>
  <h1>Мои заказы</h1>
  <OrdersList :orders="orders" />
</template>

<style scoped lang="scss">

</style>