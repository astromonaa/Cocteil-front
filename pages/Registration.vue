<script setup lang="ts">

import InputText from "~/components/UI/InputText.vue";
import Button from "~/components/UI/Button.vue";
import PersonalDataAgree from "~/components/atom/PersonalDataAgree.vue";

const {isMobile} = useDevice()

definePageMeta({
  layout: 'auth-layout'
})
</script>

<template>
  <div :class="isMobile ? 'flex flex-column' : ''">
    <h1 :class="isMobile ? 't-m' : 'title'">Регистрация</h1>
    <div :class="[isMobile ? 'flex flex-column gap-20' : 'inputs']">
      <InputText :centered="isMobile" id="name" placeholder="ФИО" label="ФИО"/>
      <InputText :centered="isMobile" id="tel" type="tel" placeholder="Контактный телефон" label="Контактный телефон"/>
      <InputText :centered="isMobile" id="index" placeholder="Индекс" label="Индекс"/>
      <InputText :centered="isMobile" id="address"  placeholder="Ваш полный адрес (только РБ)" label="Ваш полный адрес (только РБ)"/>
      <InputText :centered="isMobile" id="email" type="email" placeholder="Электронная почта" label="Электронная почта"/>
      <InputText :centered="isMobile" id="comment" placeholder="Комментарий" label="Комментарий"/>
    </div>
    <PersonalDataAgree :class="isMobile ? 'flex justify-center' : ''"/>
    <div :class="[isMobile ? 'mobile-btns' : 'btns']">
      <Button is-arrow compress :is-mini="isMobile">Отправить</Button>
      <NuxtLink to="/auth">
        <Button :is-pink="false" :is-mini="isMobile" :style="{width: isMobile ? '100%' : 'auto'}">Войти в кабинет</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #121212;
  font-size: 40px;
  margin-bottom: 60px;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(2, 370px);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 125px;
  row-gap: 30px;
}
.btns {
  margin-top: 75px;
  display: flex;
  gap: 50px;
}
.mobile-btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}
</style>