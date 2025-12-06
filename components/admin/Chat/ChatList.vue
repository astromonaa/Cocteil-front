<script setup lang="ts">
import {useNuxtApp} from "nuxt/app";
import type {IChatItem} from "~/types/types";

const { $app } = useNuxtApp()
const chatsList = ref<IChatItem[]>()

const fetchChats = async () => {
  const {count, rows} = await $app._apiPack._chatsApi.getChatsList()
  chatsList.value = rows;
}

onMounted(fetchChats)
</script>

<template>
  <ul class="list">
    <NuxtLink
      v-for="chatItem in chatsList"
      :key="chatItem.id"
      :to="{name: 'Admin', query: { ...$route.query, room: chatItem.roomId }}"
      class="chat-list-item"
    >{{chatItem.id}}</NuxtLink>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.chat-list-item {
  padding: 10px 15px;
  border: 1px solid lightgray;
}
</style>