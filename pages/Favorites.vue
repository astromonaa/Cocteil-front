<script setup lang="ts">
import ProductItem from "~/components/products/ProductItem.vue";
import type {IProduct} from "~/types/types";
import Loader from "~/components/UI/Loader.vue";

definePageMeta({
  layout: 'tagged-layout',
  middleware: ['is-auth']
})

const {isMobile} = useDevice()
const favorites = ref<IProduct[]>([])
const isLoading = ref(false)

const {$app} = useNuxtApp()

const fetchFavorites = async () => {
  try {
    isLoading.value = true
    const data = await $app._apiPack._productsApi.fetchFavorites()
    favorites.value = data
  }catch (e) {

  }finally {
    isLoading.value = false
  }
}

onMounted(fetchFavorites)

</script>

<template>
  <div :class="[isMobile ? 'mobile-catalog mt-30' : 'products-grid']">
    <template v-if="!isLoading">
      <ProductItem
        v-for="product in favorites"
        :key="product.id"
        :product="product"
      />
    </template>
    <template v-else>
      <Loader/>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>