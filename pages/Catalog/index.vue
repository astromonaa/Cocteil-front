<script setup lang="ts">

import ProductItem from "~/components/products/ProductItem.vue";
import {useSidebarStore} from "~/store/sidebarStore";
import {storeToRefs} from 'pinia'
import CircleDecoration from "~/components/UI/CircleDecoration.vue";

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())

const {isMobile} = useDevice()

definePageMeta({
  layout: 'without-footer-layout',
})

</script>

<template>
  <main>
    <div :class="['catalog-page', {translate: isOpen, full: fullOpen}]" v-if="!isMobile">
      <span class="breadcrumbs">Главная/ Женщинам / Блузки и рубашки</span>
      <h1>Блузки и рубашки для женщин</h1>
      <LazyCatalogSortBlock/>
      <section>
        <LazyCatalogFilters/>
        <div class="products-grid">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </section>
      <LazyUILoadMoreBtn/>
    </div>
    <div v-else>
      <div class="mobile-catalog">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </div>
      <LazyUICircleDecoration class="to-up" size="small" decoration="arrow" direction="up"/>
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