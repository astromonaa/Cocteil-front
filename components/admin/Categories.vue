<script setup lang="ts">
  import InputText from '~/components/UI/InputText.vue';
  import Button from '../UI/Button.vue';
  import TableBase from './TableBase.vue';

  const categoryName = ref()
</script>


<template>
  <div class="container">
    <h1>Добавить категорию</h1>
    <form @submit.prevent>
      <InputText v-model="categoryName" id="category-add-input" label="Название категории" placeholder=""  />
      <Button>Добавить</Button>
    </form>
    <h2>Список категорий</h2>
     <TableBase name="category"/>
  </div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    button {
      width: min-content;
    }
  }
}
</style>