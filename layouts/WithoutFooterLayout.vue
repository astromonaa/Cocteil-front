<script setup lang="ts">

import useMobileToolbar from "~/hooks/useMobileToolbar";

const {isMobile} = useDevice()

const toolbar = useMobileToolbar()


</script>

<template>
  <div class="container">
    <LazyMobileToolbar
        :title="toolbar.title.value"
        :title-size="toolbar.titleSize.value"
        v-if="isMobile"
        is-back-icon
        back-text="Back"
        :is-sort-icon="!toolbar.isShareIcon.value"
        :is-filters-icon="!toolbar.isShareIcon.value"
        :is-share-icon="toolbar.isShareIcon.value"
        :is-search-input="toolbar.isSearchInput.value"
    />
    <LazyHeaderDesktop v-if="!isMobile"/>
    <LazyHeaderMobile v-else/>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>