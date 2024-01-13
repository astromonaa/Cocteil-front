<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation} from 'swiper/modules'

import CircleDecoration from "~/components/UI/CircleDecoration.vue";

const {isMobile} = useDevice()
const modules = [Navigation]

const navigation = {
  nextEl: '.mobile-swiper-next',
}

const sliderItems = [
  {
    id: 1,
    text: 'Скидки постоянным <br/> клиентам от 5%'
  },
  {
    id: 2,
    text: 'Предлагаем самые <br/> выгодные цены'
  },
  {
    id: 3,
    text: 'Наши покупатели всегда <br/> остаются довольны'
  },
  {
    id: 4,
    text: 'Широкий ассортимент <br/> товаров для всей семьи'
  },
  {
    id: 5,
    text: 'Возможность доставки в <br/> любой город Беларуси'
  },
  {
    id: 6,
    text: 'Пункты выдачи заказов <br/> рядом с домом'
  }
]

const slider = shallowRef()

onMounted(() => {
  setTimeout(() => slider.value = Swiper,500)
})

</script>

<template>
  <div :class="['wrapper start-pos', {'mobile-wrapper': isMobile}]" v-showBlock>
    <h2 :class="{'mobile-title': isMobile}">Почему выбирают нас?</h2>
    <section class="mobile-swiper" v-if="isMobile">
      <component
          :is="slider"
          :modules="modules"
          :slides-per-view="2"
          :navigation="navigation"
          loop
      >
        <swiper-slide v-for="slide in sliderItems" :key="slide.id">
          <div class="mobile-swiper-item">{{ slide.text?.replaceAll('<br/>', '') }}</div>
        </swiper-slide>
      </component>
      <SvgLoader class="mobile-swiper-next" width="20" height="20" icon-name="arrow-right"/>
      <CircleDecoration decoration="message" size="small" class="message"/>
    </section>
    <section v-else>
      <div class="item" v-for="(item, idx) in sliderItems" :key="item.id">
        <span v-html="item.text"></span>
        <CircleDecoration
            v-if="idx !== 1 && idx !== 3"
            class="circle"
            :size="idx === 0 || idx === sliderItems.length - 1 ? 'small' : 'regular'"
        />
      </div>
      <CircleDecoration class="left" decoration="arrow" size="large"/>
      <CircleDecoration class="right" decoration="message" size="large"/>
    </section>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 0 135px;
  margin-top: 150px;

  & > section {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    margin-top: 100px;
    position: relative;
    padding-bottom: 55px;

    .left {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .right {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    & > .item {
      width: 184px;
      margin: 0 auto;
      position: relative;

      .circle {
        position: absolute;
      }

      &:first-child {
        margin: 0;

        .circle {
          right: 25%;
          bottom: -32%;
        }
      }

      &:nth-child(3) {
        .circle {
          right: -35px;
          top: -28px;
        }
      }

      &:nth-child(5) {
        .circle {
          right: -23px;
          top: 18px;
        }
      }

      &:nth-child(6) {
        .circle {
          right: -9px;
          top: -6px;
        }
      }
    }
  }
}

.mobile-wrapper {
  padding: 0;
  margin-top: 60px;

  .mobile-title {
    font-size: 25px;
    text-align: center;
  }
  &>section {
    padding-bottom: 0;
  }

  .mobile-swiper {
    margin-top: 30px;
    padding-left: 10px;
    position: relative;

    .mobile-swiper-item {
      border-radius: 10px;
      background: #514A7E;
      box-shadow: 0 4px 10px 0 rgba(81, 74, 126, 0.40);
      padding: 27px 12px;
      color: #FFFDF5;
      text-align: center;
      line-height: 118%;
      width: 45%;
      min-width: 150px;
      height: 121px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-next {
      position: absolute;
      right: 10px;
      top: 42%;
      z-index: 2;
    }

    .message {
      position: absolute;
      right: 10px;
      bottom: -60px;
    }
  }
}
</style>