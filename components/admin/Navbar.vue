
<script setup lang="ts">
  import Button from '~/components/UI/Button.vue';

  const navigation = [
    {
      name: 'Категории',
      query: 'category'
    },
    {
      name: 'Продукты',
      query: 'products'
    },
    {
      name: 'Пользователи',
      query: 'users'
    },
    {
      name: 'Чаты',
      query: 'chats'
    }
  ]
</script>


<template>
  <nav class="navbar">
    <NuxtLink
        v-for="link in navigation"
        :key="link.query"
        :to="{name: 'Admin', query: { section: link.query }}">
      <Button>{{link.name}}</Button>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  button {
    width: 100%;
  }
}

</style>