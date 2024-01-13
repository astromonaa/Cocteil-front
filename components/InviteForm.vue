<script setup lang="ts">

import InputText from "~/components/UI/InputText.vue";
import Button from "~/components/UI/Button.vue";

const{isMobile} = useDevice()
</script>

<template>
  <div :class="['wrapper start-pos', {'mobile-wrapper': isMobile}]" v-showBlock>
    <form action="#" class="form">
      <h3>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</h3>
      <InputText class="form-input" label="Ваше имя" placeholder="Ваше имя" id="name" :centered="isMobile"/>
      <InputText class="form-input" type="tel" label="Номер телефона" placeholder="Номер телефона" id="tel" :centered="isMobile"/>
      <InputText class="form-input" type="email" label="Электронная почта" placeholder="Электронная почта" id="email" :centered="isMobile"/>
      <div class="terms">
        <input type="checkbox">
        <span>Даю согласие на обработку персональных данных</span>
      </div>
      <Button is-arrow>Отправить</Button>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    background: #514A7E;
    box-shadow: 0 4px 20px 0 rgba(51, 51, 51, 0.05);
    padding: 40px 122px 40px 135px;
    margin-top: 150px;
    width: 67%;
    min-width: 830px;
  }
  .form {
    background: #FFFDF5;
    box-shadow: 0 4px 20px 0 rgba(51, 51, 51, 0.05);
    padding: 35px 52px;
    width: 100%;
    h3 {
      font-size: 20px;
      font-weight: 400;
      line-height: 118%;
    }
    &-input {
      margin-top: 24px;
      color: #7D7D7D;
      font-size: 12px;
      font-weight: 100;
      line-height: 118%;
      &:nth-child(2) {
        margin-top: 40px;
      }
    }
    .terms {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 40px;
      gap: 4px;
      span {
        color: #7D7D7D;
        font-size: 8px;
        font-weight: 100;
        line-height: 118%;
      }
      input {
        width: 7px;
        height: 7px;
        flex-shrink: 0;
      }
    }
  }

  .mobile-wrapper {
    margin-top: 60px;
    padding: 35px 10px;
    min-width: auto;
    width: 100%;
    .form {
      padding: 33px;
      h3 {
        text-align: center;
        font-size: 12px;
      }
      &-input {
        margin-top: 20px;
        &:nth-child(2) {
          margin-top: 30px;
        }
      }
    }
    button {
      margin: 0 auto;
    }
  }
</style>