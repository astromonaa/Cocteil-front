<script setup lang="ts">
import ProductItem from "~/components/products/ProductItem.vue";

definePageMeta({
  layout: 'tagged-layout'
})

const {isMobile} = useDevice()
</script>

<template>
  <div :class="[isMobile ? 'mobile-catalog mt-30' : 'products-grid']">
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
  </div>
</template>

<style scoped lang="scss">

</style>