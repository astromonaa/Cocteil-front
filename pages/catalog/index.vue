<script setup lang="ts">

import ProductItem from "~/components/products/ProductItem.vue";
import {useSidebarStore} from "~/store/sidebarStore";
import {storeToRefs} from 'pinia'
import type {IProduct} from "~/types/types";
import {useAsyncData} from "nuxt/app";

const {$app} = useNuxtApp()

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())

const {isMobile} = useDevice()


const { data: productsResponse } = await useAsyncData('catalog', async () => {
  const {rows, count} = await $app._apiPack._productsApi.fetchProducts()
  return {products: rows, maxCount: count}
})

definePageMeta({
  layout: 'without-footer-layout',
})

const showMoreBtn = computed(() => productsResponse.value?.products?.length !== productsResponse.value?.maxCount)

</script>

<template>
  <main>
    <div :class="['catalog-page', {translate: isOpen, full: fullOpen}]" v-if="!isMobile">
      <span class="breadcrumbs">Главная/ Женщинам / Блузки и рубашки</span>
      <h1>Блузки и рубашки для женщин</h1>
      <LazyCatalogSortBlock/>
      <section>
        <LazyCatalogFilters :products="productsResponse?.products"/>
        <div class="products-grid">
          <ProductItem
              v-for="product in productsResponse?.products"
              :key="product.id"
              :product="product"
          />
        </div>
      </section>
      <LazyUILoadMoreBtn v-if="showMoreBtn"/>
    </div>
    <div v-else>
      <div class="mobile-catalog start-pos" v-showBlock>
        <ProductItem v-for="product in productsResponse?.products" :key="product.id" :product="product"/>
      </div>
      <LazyUICircleDecoration
        v-if="showMoreBtn"
        class="to-up"
        size="small"
        decoration="arrow"
        direction="up"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  overflow-x: hidden;

  .mobile-catalog {
    margin-top: 20px;
    padding: 0 8px
  }
}

.catalog-page {
  padding: 0 135px;
  margin-top: 60px;
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;

  section {
    margin-top: 60px;
    display: flex;
    gap: 60px;
  }
}

.breadcrumbs {
  color: #7D7D7D;
  font-size: 20px;
  font-weight: 400;
}

h1 {
  color: #121212;
  font-size: 40px;
  margin: 60px 0;
}
.to-up {
  position: fixed;
  right: 8px;
  bottom: 120px;
  z-index: 2;
}
</style>