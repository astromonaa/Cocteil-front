<script setup lang="ts">

import InputText from "~/components/UI/InputText.vue";
import Button from "~/components/UI/Button.vue";
import PersonalDataAgree from "~/components/atom/PersonalDataAgree.vue";

import {useFormValidation} from "~/hooks/useFormValidation";
import useApiService from "~/services/ApiService";
import {useUserStore} from "~/store/user";
import {saveToLocalStorage} from "~/utils/useLocalStorage";
import {useRouter} from "vue-router";

const {isMobile} = useDevice()
const ApiService = useApiService()

const userStore = useUserStore()

const router = useRouter()


definePageMeta({
  layout: 'auth-layout',
  middleware: ['login']
})
const form = ref()

const email = ref('')
const password = ref('')
const errorMsg = ref()
const isLoading = ref(false)

const handleRegister = async () => {
  errorMsg.value = ''
  try {
    isLoading.value = true
    const valid = useFormValidation(form.value)
    if (!valid) return
    const data = await ApiService.registration(email.value, password.value)
    userStore.setUser(data)
    saveToLocalStorage('token', data.accessToken)
    await router.push('/')
  }catch(e:Error) {
    errorMsg.value = e.message;
  }finally {
    isLoading.value = false
  }
}


</script>

<template>
  <div
    ref="form"
    :class="isMobile ? 'flex flex-column' : ''"
  >
    <h1 :class="isMobile ? 't-m' : 'title'">Регистрация</h1>
    <div :class="['flex flex-column', isMobile ? 'gap-20' : 'gap-34']">
      <InputText
        v-model="email"
        id="email"
        type="email"
        label="Электронная почта"
        :centered="isMobile"
        required
      />
      <InputText
        v-model="password"
        class="password"
        id="login_password"
        type="password"
        label="Пароль"
        :centered="isMobile"
        required
      />
    </div>
    <PersonalDataAgree :class="isMobile ? 'flex justify-center' : ''"/>
    <div :class="[isMobile ? 'mobile-btns' : 'btns']">
      <Button
        is-arrow
        compress
        style="min-width: 235px"
        :is-loading="isLoading"
        :is-mini="isMobile"
        @click="handleRegister"
      >
        Зарегистрироваться
      </Button>
      <NuxtLink to="/auth">
        <Button
          :is-pink="false"
          :is-mini="isMobile"
          :style="{width: isMobile ? '100%' : 'auto'}"
        >
          Войти в кабинет
        </Button>
      </NuxtLink>
    </div>
    <small class="error auth-error">{{errorMsg}}</small>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #121212;
  font-size: 40px;
  margin-bottom: 60px;
}
.inputs {
}
.btns {
  margin-top: 75px;
  display: flex;
  gap: 50px;
  &:first-child {
    min-width: 235px;
  }
}
.mobile-btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}
</style>