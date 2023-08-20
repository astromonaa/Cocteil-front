<script setup lang="ts">

import SvgLoader from "~/components/SvgLoader.vue";

interface IProps {
  isFull?: boolean;
}

const props = defineProps<IProps>()

const {isMobile} = useDevice()

const cardMaxWidth = computed(() => props.isFull ? 'auto' : isMobile ? '65%' : '460px')
</script>

<template>
  <section :class="['review', {'mobile-review': isMobile}]">
    <div class="image">
      <img src="/img/review.png" alt="">
    </div>
    <ClientOnly>
      <div class="rating">
        <SvgLoader width="10" height="10" icon-name="star" />
        <SvgLoader width="10" height="10" icon-name="star" />
        <SvgLoader width="10" height="10" icon-name="star" />
        <SvgLoader width="10" height="10" icon-name="star" />
        <SvgLoader width="10" height="10" icon-name="star" />
      </div>
    </ClientOnly>
    <p>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. </p>
    <div class="reviewer-info">
      <span>Анна Котлова</span>
      <span>23.05.2021</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .review {
    background: #FFFDF5;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    padding: 40px 24px;
    display: grid;
    grid-template-columns: min-content 1fr;
    max-width: v-bind(cardMaxWidth);
    column-gap: 30px;
    font-size: 12px;
    line-height: 170%;
    align-items: center;
    border-radius: 10px;
    &>.rating {
      grid-column: 2/3;
      display: flex;
      gap: 5px;
    }
    &>p {
      grid-column: 2/3;
      font-size: inherit;
      color: #7D7D7D;
      text-align: left;
    }
    &>.reviewer-info {
      grid-column: 2/3;
      display: grid;
      align-items: flex-end;
      grid-template-columns: repeat(2, 1fr);
      &>span {
        font-weight: 400;
        &:first-child {
          color: #121212;
        }
        &:last-child {
          color: #514A7E;
          display: flex;
          justify-self: flex-end;
        }

      }
    }
    &>.image {
      grid-row: 1/4;
      width: 64px;
      height: 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }


  .mobile-review {
    padding: 10px 12px;
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.20);
    min-width: 216px;
    max-width: v-bind(cardMaxWidth);
    column-gap: 10px;
    row-gap: 15px;
    .image {
      width: 35px;
      height: 35px;
    }
    p {
      font-size: 10px;
      line-height: 130%; /* 13px */
      letter-spacing: -0.45px;
    }
    .reviewer-info span {
      font-size: 8px;
    }
  }

</style>