<script setup lang="ts">

const {isMobile} = useDevice()

</script>

<template>
  <div class="container">
    <LazyHeaderMobile v-if="isMobile"/>
    <LazyHeaderDesktop v-else/>
    <div>
      <slot/>
    </div>
    <LazyFooterMobile v-if="isMobile" />
    <LazyFooterDesktop v-else />
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