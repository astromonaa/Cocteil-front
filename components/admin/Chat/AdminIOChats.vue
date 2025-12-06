<script setup lang="ts">

import ChatList from "~/components/admin/Chat/ChatList.vue";
</script>

<template>
  <section class="wrapper">
    <div>
      <ChatList/>
    </div>
    <div></div>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  min-height: 100vh;
  div:first-child {
    flex-grow: 1;
  }
  div:last-child {
    flex-grow: 3;
  }
}
</style>