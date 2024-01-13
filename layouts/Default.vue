<script setup lang="ts">

const {isMobile} = useDevice()


</script>

<template>
  <div class="container">
    <LazyHeaderDesktop v-if="!isMobile"/>
    <LazyHeaderMobile v-else/>
    <slot/>
    <LazyFooterDesktop v-if="!isMobile"/>
    <LazyFooterMobile v-else />
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

</style>