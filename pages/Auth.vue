<script setup lang="ts">
import InputText from "~/components/UI/InputText.vue";
import Button from "~/components/UI/Button.vue";

const {isMobile} = useDevice()

definePageMeta({
  layout: 'auth-layout'
})
</script>

<template>
  <div>
    <h1 :class="isMobile ? 't-m' : 'title'">Вход в личный кабинет</h1>
    <InputText id="login_email" type="email" label="Электронная почта" placeholder="Электронная почта" :centered="isMobile"/>
    <InputText class="password" id="login_password" type="password" label="Пароль" placeholder="Пароль" :centered="isMobile"/>
    <NuxtLink>Не помню пароль</NuxtLink>
    <div :class="['btns', isMobile ? 'mobile-btns' : '']">
      <Button :is-mini="isMobile">Войти в кабинет</Button>
      <NuxtLink to="/registration">
        <Button :is-mini="isMobile" :is-pink="false" :style="{width: isMobile ? '100%' : 'auto'}">Регистрация</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #121212;
  margin-bottom: 60px;
}

.btns {
  display: flex;
  gap: 50px;
  margin-top: 25px;
}
.mobile-btns {
  flex-direction: column;
  gap: 20px;
}

.password {
  margin: 34px 0 25px;
}
</style>