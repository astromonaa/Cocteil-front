
<script setup lang="ts">
  import Button from '~/components/UI/Button.vue';
</script>


<template>
  <nav class="navbar">
    <NuxtLink to="/admin?section=category">
      <Button>Категории</Button>
    </NuxtLink>
    <NuxtLink to="/admin?section=products">
      <Button>Продукты</Button>
    </NuxtLink>
    <NuxtLink to="/admin?section=users">
      <Button>Пользователи</Button>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  button {
    width: 100%;
  }
}

</style>