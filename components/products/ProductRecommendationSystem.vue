<script setup lang="ts">

import Button from "~/components/UI/Button.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import ProductItem from "~/components/products/ProductItem.vue";
import {Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

const {isMobile} = useDevice()

const modules = [Navigation]
const navigation = {
  nextEl: '.next',
  prevEl: '.prev'
}

interface Props {
  title?: string;
  hideArrows?: boolean;
}
const slider = shallowRef<any>('div')

defineProps<Props>()

onMounted(() => {
  setTimeout(() => slider.value = Swiper,500)
})

</script>

<template>
  <section :class="['slider', {'mobile-slider': isMobile}]">
    <h2 v-if="title" :class="{'title-mobile': isMobile}">{{title}}</h2>
    <button v-if="!hideArrows" class="slider-btn prev">
      <SvgLoader width="85" height="47" icon-name="arrow-right" />
    </button>
    <component
        :is="slider"
        :modules="modules"
        :slides-per-view="isMobile ? 'auto' : 4"
        :space-between="isMobile ? 20 : 200"
        :navigation="navigation"
    >
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
      <swiper-slide>
        <ProductItem/>
      </swiper-slide>
    </component>
    <button v-if="!hideArrows" class="slider-btn next">
      <SvgLoader width="85" height="47" icon-name="arrow-right" />
    </button>
  </section>
</template>

<style scoped lang="scss">
.slider {
  position: relative;
  h2 {
    margin-bottom: 60px;
  }
  .title-mobile {
    margin-bottom: 30px;
    font-size: 25px;
  }
}
.slider-btn{
  width: 85px;
  height: 47px;
  border: none;
  outline: none;
  position: absolute;
  bottom: 28%;
  background: #FFFDF5;
  z-index: 2;
}
.next {
  right: 0;
}
.prev {
  left: 0;
  transform: rotate(-180deg);
}
.swiper-button-disabled {
  display: none;
}
.mobile-slider .swiper-slide {
  width: 20%;
  min-width: 130px;
}
</style>