<script setup lang="ts">
import CircleButtonBig from "~/components/UI/CircleButtonBig.vue";
import {useSidebarStore} from "~/store/sidebarStore";
import {storeToRefs} from 'pinia'

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())

const {isMobile} = useDevice()
</script>

<template>
  <div v-if="isMobile" class="mobile-banner-top">
    <h1>Добро пожаловать <br/> в <span>Cocteil</span></h1>
    <p>
      Экономим Ваше время! <br/>
      Предлагаем лучшие цены! <br/>
      Доставляем в кратчайшие сроки!
    </p>
    <CircleButtonBig
        class="main-page-big-button"
        is-mobile
        is-pink
        @click="$router.push('/Catalog')"
    />
  </div>
  <div :class="['banner', {translate: isOpen, full: fullOpen}]" v-else>
    <div class="wrapper">
      <div class="left">
        <img src="/img/jeans-small.png" alt="Jeans">
        <h1>Добро пожаловать <br/> в <span>Cocteil</span></h1>
        <p>
          Экономим Ваше время! <br/>
          Предлагаем лучшие цены! <br/>
          Доставляем в кратчайшие сроки!
        </p>
      </div>
      <div class="right">
        <img src="/img/jeans-big.png" alt="Jeans">
      </div>
    </div>
    <CircleButtonBig
        class="main-page-big-button"
        :is-pink="false"
        @click="$router.push('/Catalog')"
    />
  </div>
</template>

<style scoped lang="scss">
.banner {
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  width: 1170px;

  .left {
    & > h1 {
      //font-size: 60px;
      font-size: calc(var(--index) * 2.1);
      line-height: 125.305%;

      & > span {
        font-family: 'Bad Script', cursive;
        font-size: inherit;
        line-height: inherit;
        color: #514A7E;
      }
    }

    & > p {
      font-size: 16px;
      line-height: 118%;
    }
  }
}

.main-page-big-button {
  margin: 0 auto;
}

.mobile-banner-top {
  background: url(/img/mobile-top-bg.png) no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 37px;
    font-weight: 400;
    line-height: 87.305%;
    color: #FFFDF5;
    margin-top: 210px;
    text-align: center;

    & > span {
      font-family: 'Bad Script', cursive;
      font-size: 40px;
      line-height: 170.406%;
    }
  }

  p {
    font-size: 14px;
    line-height: 118%;
    color: #FFFDF5;
    text-align: center;
  }
}
</style>