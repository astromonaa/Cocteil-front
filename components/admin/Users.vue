<script setup lang="ts">
  import InputText from '../UI/InputText.vue';
  import Button from '../UI/Button.vue';
  import TableBase from './TableBase.vue';
  import useUsers from '~/hooks/admin/useUsers'


  const {email, password, addUser, refetch, isLoading} = useUsers()
</script>


<template>
 <div class="container">
    <h1>Добавить пользователя</h1>
    <form>
      <InputText id=" email-input" label=" email" v-model="email"/>
      <InputText id="password-input" label="password" v-model="password" />
      <label for="rolechose">
        Выберите роль
        <select name="" id="rolechose">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </label>
      <Button @click.prevent="addUser">Добавить</Button>
    </form>
    <h2>Список пользователей</h2>
    <TableBase name="users" :refetch="refetch" :isLoading="isLoading"/>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}
</style>