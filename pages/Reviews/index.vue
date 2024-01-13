<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSidebarStore} from "~/store/sidebarStore";

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())
</script>

<template>
  <main>
    <div :class="['wrapper', {translate: isOpen, full: fullOpen}]">
      <h1 class="not-found">Перейдите на страницу товара <br> для оставления отзыва</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
  main {
    overflow-x: hidden;
  }
</style>