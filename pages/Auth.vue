<script setup lang="ts">
import InputText from "~/components/UI/InputText.vue";
import Button from "~/components/UI/Button.vue";

import {useFormValidation} from "~/hooks/useFormValidation";
import {useUserStore} from "~/store/user";
import {saveToLocalStorage} from "~/utils/useLocalStorage";
import {useRouter} from 'vue-router'

const userStore = useUserStore()
const {isMobile} = useDevice()
const router = useRouter()
const {$app} = useNuxtApp()

const form = ref()

const email = ref('')
const password = ref('')
const errorMsg = ref()
const isLoading = ref(false)

definePageMeta({
  layout: 'auth-layout',
  middleware: ['login']
})

const handleLogin = async () => {
  errorMsg.value = ''
  try {
    isLoading.value = true;
    const isValid = useFormValidation(form.value)
    if (!isValid) return;
    const data = await $app._apiPack._authApi.login(email.value, password.value)
    userStore.setUser(data)
    saveToLocalStorage('token', data.accessToken)
    await router.push('/')
    window?.location.reload()
  }catch (e:Error) {
    errorMsg.value = e.message
  }finally {
    isLoading.value = false;
  }

}
</script>

<template>
  <div
    ref="form"
  >
    <h1 :class="isMobile ? 't-m' : 'title'">Вход в личный кабинет</h1>
    <InputText
      v-model="email"
      id="login_email"
      type="email"
      label="Электронная почта"
      placeholder="Электронная почта"
      required
      :centered="isMobile"
    />
    <InputText
      v-model="password"
      class="password"
      id="login_password"
      type="password"
      label="Пароль" placeholder="Пароль"
      required
      :centered="isMobile"
    />
    <NuxtLink>Не помню пароль</NuxtLink>
    <div :class="['btns', isMobile ? 'mobile-btns' : '']">
      <Button
        :is-mini="isMobile"
        :is-loading="isLoading"
        style="min-width: 170px"
        @click="handleLogin"
      >
        Войти в кабинет
      </Button>
      <NuxtLink to="/registration">
        <Button :is-mini="isMobile" :is-pink="false" :style="{width: isMobile ? '100%' : 'auto'}">Регистрация</Button>
      </NuxtLink>
    </div>
    <span class="error auth-error">{{errorMsg}}</span>
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