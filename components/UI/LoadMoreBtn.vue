<script setup lang="ts">

import Button from "~/components/UI/Button.vue";
</script>

<template>
  <Button is-arrow :is-pink="false" direction="bottom" class="load-more">Ещё</Button>
</template>

<style scoped lang="scss">
.load-more {
  margin: 60px auto 45px;
  height: 148px;
  border-radius: 50%;
  justify-content: center;
  font-size: 20px;
  padding: 0 0 0 29px!important;
  svg {
    transform: rotate(90deg) translate(-5px, 19px);
  }
}
</style>