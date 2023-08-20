<script setup lang="ts">

import InputText from "~/components/UI/InputText.vue";
</script>

<template>
  <div class="search">
    <SvgLoader width="20" height="20" icon-name="search" />
    <InputText label="Поиск" placeholder="Поиск" type="search" id="search" />
  </div>
</template>

<style scoped>
  .search {
    display: flex;
    align-items: center;
    gap: 19px;
  }
</style>