<script setup lang="ts">
import Close from "~/components/UI/Close.vue";
import InputText from "~/components/UI/InputText.vue";
import TextArea from "~/components/UI/TextArea.vue";
import PersonalDataAgree from "~/components/atom/PersonalDataAgree.vue";
import CircleButtonBig from "~/components/UI/CircleButtonBig.vue";

const {back} = useRouter()

definePageMeta({
  layout: 'base-layout'
})

const {isMobile} = useDevice()

</script>

<template>
  <div :class="isMobile? 'mobile-wrapper' : 'wrapper'">
    <header>
      <h1 :class="{'mobile-title': isMobile}">Оформление заказа</h1>
      <Close @click="back"/>
    </header>
    <h2>Ваши данные</h2>
    <form :class="{'mobile-form': isMobile}">
      <InputText id="name" placeholder="ФИО" label="ФИО"/>
      <InputText id="tel" type="tel" placeholder="Контактный телефон" label="Контактный телефон"/>
      <InputText id="index" placeholder="Индекс" label="Индекс"/>
      <InputText id="address"  placeholder="Ваш полный адрес (только РБ)" label="Ваш полный адрес (только РБ)"/>
      <InputText id="email" type="email" placeholder="Электронная почта" label="Электронная почта"/>
      <TextArea id="comment" placeholder="Комментарий" label="Комментарий" :class="{'mt-22': isMobile}"/>
      <PersonalDataAgree :style="{position: 'absolute', left: 0, bottom: isMobile ? 0 : '85px'}"/>
    </form>
    <h2>Выберите способ доставки</h2>
    <div :class="['delivery-types', {'gap-20 mobile-types': isMobile}]">
      <div :class="['delivery-item', {'delivery-card-s': isMobile}]">
        <img src="/img/russian-post.png" alt="Почта России">
        <p>Почта России</p>
      </div>
      <div :class="['delivery-item', {'delivery-card-s': isMobile}]">
        <img src="/img/european-post.png" alt="Европочта">
        <p>Европочта</p>
      </div>
      <div :class="['delivery-item', {'delivery-card-s': isMobile}]">
        <img src="/img/european-courier.png" alt="Европочта + курьер">
        <p>Европочта + курьер</p>
      </div>
    </div>
    <div class="warning">
      <SvgLoader width="20" height="20" icon-name="warning" />
      <NuxtLink to="/deliveryterms" :class="{'font-12': isMobile}">Сроки доставки указаны при условии наличия товара. Заказ, сделанный со вт по чт отправляется в пн. Заказ, сделанный с пт по вс отправляется в пт</NuxtLink>
    </div>
    <h2>Выберите способ оплаты</h2>
    <div :class="['payment-types', {'mobile-payment-types': isMobile}]">
      <div class="payment-item">
        <img src="/img/bank-card.png" alt="Оплата банковской картой">
      </div>
      <div class="payment-item">
        <img src="/img/pay-pall.png" alt="Оплата через Pay Pall">
      </div>
    </div>
    <CircleButtonBig  label="Подтвердить" :is-pink="false" centered :style="{margin: isMobile ? '50px auto 20px' : '0 auto'}"/>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    margin: 56px 40px 68px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    margin: 60px 0 40px;
    color: #121212;
    font-size: 20px;
    font-weight: 400;
    line-height: 87.305%;
    display: block;
  }
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 125px;
    position: relative;
    textarea {
      grid-row: 4/5;
      grid-column: 2/3;
      transform: translateY(-33px);
    }
  }
  .delivery-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 50px;
    .delivery-item {
      border-radius: 20px;
      overflow: hidden;
      transition: box-shadow 0.3s;
      will-change: box-shadow;
      cursor: pointer;
      position: relative;
      &:hover {
        box-shadow: 0px 0px 19px 0px #514A7E;
        -webkit-box-shadow: 0px 0px 19px 0px #514A7E;
        -moz-box-shadow: 0px 0px 19px 0px #514A7E;
        -o-box-shadow: 0px 0px 19px 0px #514A7E;
        &>p {
          transform: scale(1.05);
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      position: absolute;
      padding: calc(var(--index) * 0.5);
      text-align: center;
      font-weight: 600;
      color: #514A7E;
      font-size: calc(var(--index) * 0.7);
      font-family: 'Bad Script', cursive;
      border-radius: 15px;
      background: #FFFDF5;
      left: 30px;
      right: 30px;
      bottom: 30px;
      transition: transform 0.3s;
    }
  }
  .warning {
    display: flex;
    align-items: center;
    gap: 27px;
    margin: 60px 0;
    svg {
      min-width: 20px;
    }
  }
  .payment-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    .payment-item {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: box-shadow 0.3s;
      will-change: box-shadow;
      &:hover {
        box-shadow: 0px 0px 19px 0px #514A7E;
        -webkit-box-shadow: 0px 0px 19px 0px #514A7E;
        -moz-box-shadow: 0px 0px 19px 0px #514A7E;
        -o-box-shadow: 0px 0px 19px 0px #514A7E;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:first-child {
        justify-self: flex-start;
      }
      &:last-child {
        justify-self: flex-end;
      }
    }
  }



  .mobile-title {
    font-size: 25px;
  }
  .mobile-wrapper {
    padding: 40px 10px 50px;
  }
  .mobile-form {
    display: flex;
    flex-direction: column;
  }
  .mobile-types {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 10px;
  }
  .delivery-types .delivery-card-s {
    overflow: visible;
    &:hover {
      box-shadow: none;
      &>p {
        transform: none;
      }
    }
    p {
      font-size: calc(var(--index) * 1.2);
      left: 0;
      right: 0;
      bottom: -30px;
      padding: 0;
      background: none;
    }
    img {
      border-radius: inherit;
    }
  }

  .mobile-payment-types {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 10px;
    .payment-item {
      &:hover {
        box-shadow: none;
      }
    }
  }
</style>