<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSidebarStore} from "~/store/sidebarStore";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import LoadMoreBtn from "~/components/UI/LoadMoreBtn.vue";
import useMobileToolbar from "~/hooks/useMobileToolbar";

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())
const route = useRoute()

const pageHead = computed(() => route.path === '/viewed' ? 'Просмотренные товары' : 'Избранное')

const {isMobile} = useDevice()

const toolbar = useMobileToolbar()
</script>

<template>
  <div class="container">
    <LazyHeaderDesktop v-if="!isMobile"/>
    <LazyHeaderMobile v-if="isMobile"/>
    <LazyMobileToolbar
        v-if="isMobile"
        is-back-icon
       :title="toolbar.title.value"
       :title-size="toolbar.titleSize.value"
       :is-search-input="toolbar.isSearchInput.value"
    />
    <div :class="['tagged-wrapper',{translate: isOpen, full: fullOpen}]">
      <h1 v-if="!isMobile">{{ pageHead }}</h1>
      <div :class="isMobile ? 'px-10' : 'content-block'">
        <LazyUserMenu v-if="!isMobile" position="left"/>
        <LazyUICircleDecoration v-if="!isMobile" decoration="arrow" class="to-up" size="large"/>
        <slot/>
        <LazyUILoadMoreBtn v-if="!isMobile"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  overflow-x: hidden;
}

.content-block {
  padding: 0 135px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
}

h1 {
  margin: 60px 135px;
}

.tagged-wrapper {
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;
}

.to-up {
  position: fixed;
  bottom: 250px;
}

.load-more {
  grid-column: 2/3;
}
</style>