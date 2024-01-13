<script setup lang="ts">

import Button from "~/components/UI/Button.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import useGallery from "~/hooks/useGallery";


import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import {FreeMode, Navigation, Thumbs, Pagination} from 'swiper/modules';


interface IProps {
  images: string[] | undefined
  name: string;
}


const props = defineProps<IProps>()

const images = props.images?.map(i => ({src: i, thumbSrc: i}))

const {isMobile} = useDevice()
const {show} = useGallery(images)


const modules = computed(() => isMobile ? [FreeMode, Navigation, Pagination] : [FreeMode, Navigation, Thumbs])

const thumbsSwiper = ref();

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
}

const navigation = ref({
  nextEl: '.product-item-next',
})

const slider = shallowRef<any>('div')

onMounted(() => {
  setTimeout(() => slider.value = Swiper, 400)
})

</script>

<template>
  <div :class="['product-gallery', {'mobile-product-gallery': isMobile}]" data-not-lazy>
    <component
        :is="slider"
        :slides-per-view="1"
        :spaceBetween="isMobile ? 15 : 0"
        :modules="modules"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="navigation"
        :init="false"
        loop
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        class="mySwiper2"
    >
      <SwiperSlide :class="{'mobile-slide': isMobile}" v-for="(slide, idx) in images" :key="slide.src">
        <img :src="slide.src" :alt="name" @click="show(idx)" :title="name">
      </SwiperSlide>
      <button class="slider-btn product-item-next" v-if="!isMobile">
        <SvgLoader width="85" height="47" icon-name="arrow-right"/>
      </button>
    </component>
    <component
        v-if="!isMobile"
        :is="slider"
        @swiper="setThumbsSwiper"
        :space-between="17"
        :slides-per-view="4"
        free-mode
        watch-slides-progress
        :modules="modules"
        class="mySwiper"
    >
      <SwiperSlide v-for="slide in images" :key="slide.src">
        <img :src="slide.src" :alt="name" :title="name">
      </SwiperSlide>
    </component>
  </div>
</template>

<style scoped lang="scss">
.product-gallery {
  width: 575px;
  height: 572px;
  position: relative;

  .mySwiper2 {
    width: 100%;
    height: 100%;
    margin-bottom: 60px;

    img {
      width: 100%;
    }
  }

  .slider-btn {
    width: 85px;
    height: 47px;
    border: none;
    outline: none;
    position: absolute;
    background: #FFFDF5;
    z-index: 2;
    right: 0;
    bottom: 0;
  }

  .swiper-thumbs {
    .swiper-slide {
      width: 130px;
      height: 110px;

      img {
        width: 100%;
      }
    }
  }

  .swiper-slide-visible {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .swiper-slide-thumb-active:before {
    background: none;
  }
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.mobile-product-gallery {
  width: 100%;
  height: auto;

  .mySwiper2 {
    margin: 0;
    padding-bottom: 30px;
  }
}

.mobile-slide {
  height: 403px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(81, 74, 126, 0.20);
  border-radius: 10px;
  img {
    height: 100%;
    object-fit: cover;
  }
}
</style>