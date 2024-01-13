<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSidebarStore} from "~/store/sidebarStore";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import LoadMoreBtn from "~/components/UI/LoadMoreBtn.vue";
import useMobileToolbar from "~/hooks/useMobileToolbar";
import {computed} from "vue";

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())
const route = useRoute()

const getPageHead = () => ({
  '/viewed': 'Просмотренные товары',
  '/favorites': 'Избранное',
  '/bonuses': 'Бонусы'
}[route.path])

const {isMobile} = useDevice()

const isBonusesPage = computed(() => route.path === '/bonuses')

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
      <h1 v-if="!isMobile" class="start-pos" v-showBlock>{{ getPageHead() }}</h1>
      <div :class="isMobile ? 'px-10 start-pos' : 'content-block start-pos'" v-showBlock>
        <LazyUserMenu v-if="!isMobile" position="left"/>
<!--        <LazyUICircleDecoration v-if="!isMobile && !isBonusesPage" decoration="arrow" class="to-up" size="large"/>-->
        <slot/>
<!--        <LazyUILoadMoreBtn v-if="!isMobile && !isBonusesPage"/>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  overflow: hidden;
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