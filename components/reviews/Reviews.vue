<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, Pagination} from 'swiper/modules'
import {IReview} from "~/types/types";
import ReviewItem from "~/components/reviews/ReviewItem.vue";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import Button from "~/components/UI/Button.vue";

import 'swiper/css';

import 'swiper/css/pagination';
import {computed} from "vue";
interface IProps {
  reviews?: IReview[],
  title: string;
}
const navigation = {
  nextEl: '.next-review',
}

const {isMobile} = useDevice()

const modules = computed(() => isMobile ? [Navigation, Pagination] : [Navigation])


defineProps<IProps>()

const slider = shallowRef()

onMounted(() => {
  setTimeout(() => slider.value = Swiper, 500)
})


</script>

<template>

  <div :class="['wrapper', {'mobile-wrapper': isMobile}]">
    <h2>{{ title || 'Отзывы'}}</h2>
    <div class="slider-container">
      <component
          :is="slider"
          :modules="modules"
          :slides-per-view="isMobile ? 'auto' : 2"
          :space-between="isMobile ? -100 : 10"
          :navigation="navigation"
          :pagination="{
            dynamicBullets: true,
            clickable: true
          }"
          loop
      >
        <swiper-slide>
          <ReviewItem/>
        </swiper-slide>
        <swiper-slide>
          <ReviewItem/>
        </swiper-slide>
        <swiper-slide>
          <ReviewItem/>
        </swiper-slide>
        <swiper-slide>
          <ReviewItem/>
        </swiper-slide>
        <swiper-slide>
          <ReviewItem/>
        </swiper-slide>
      </component>
      <CircleDecoration class="switch-arrow next-review" :is-pink="false" decoration="arrow" size="large" direction="right" />
    </div>
    <LazyNuxtLink to="/reviews">
      <Button compress>Добавить отзыв</Button>
    </LazyNuxtLink>
  </div>

</template>

<style scoped lang="scss">
  .wrapper {
    margin-top: 150px;
    padding: 0 135px;
    .swiper-slide {
      padding: 10px 0;
    }
    button {
      margin-top: 30px;
    }
  }
  h2{
    margin-bottom: 60px;
  }
  .slider-container {
    display: flex;
    position: relative;
    align-items: center;
  }
  .switch-arrow {
    position: absolute;
    right: 0;
    z-index: 2;
  }

  .mobile-wrapper {
    margin-top: 60px;
    text-align: center;
    padding: 0 10px;
    h2 {
      font-size: 25px;
    }
    button, .switch-arrow {
      display: none;
    }
    .swiper {
      padding-bottom: 30px;
    }
  }
</style>