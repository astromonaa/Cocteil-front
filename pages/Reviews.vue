<script setup lang="ts">

import ReviewItem from "~/components/reviews/ReviewItem.vue";
import {storeToRefs} from "pinia";
import {useSidebarStore} from "~/store/sidebarStore";
import ModalBase from "~/components/UI/ModalBase.vue";
import Button from "~/components/UI/Button.vue";
import InputText from "~/components/UI/InputText.vue";
import TextArea from "~/components/UI/TextArea.vue";

definePageMeta({
  layout: 'without-footer-layout'
})

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())

const {isMobile} = useDevice()

const isModal = ref(false)
</script>

<template>

  <main :class="isMobile ? 'px-10' : 'px-135'">
    <div :class="['reviews', {translate: isOpen, full: fullOpen}]">
      <div :class="['flex gap-20 items-center', isMobile ? 'mt-22' : 'mt-30']">
        <span>13 отзывов</span>
        <div class="flex gap-5">
          <SvgLoader height="10" width="10" icon-name="star"/>
          <SvgLoader height="10" width="10" icon-name="star"/>
          <SvgLoader height="10" width="10" icon-name="star"/>
          <SvgLoader height="10" width="10" icon-name="star"/>
          <SvgLoader height="10" width="10" icon-name="star"/>
        </div>
      </div>

      <section class="flex flex-column gap-30 mt-30 reviews-content mb-100">
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
        <ReviewItem :is-full="!isMobile"/>
      </section>
    </div>
    <Button compress :is-mini="isMobile" :class="isMobile ? 'btn-m' : 'btn-d'" @click="isModal = true">Добавить отзыв</Button>
    <ModalBase v-if="isModal" @close="isModal = false" :content-style="{width: isMobile ? '90%' : '50%'}">
      <h2 :class="{'title-s': isMobile}">Ваш отзыв</h2>
      <InputText id="review-author" placeholder="Фамилия и имя" label="Фамилия и имя" class="mt-30"/>
      <TextArea label="Отзыв" placeholder="Отзыв" id="review-text" class="mt-22" />
      <label for="review-file" class="flex items-center mt-22 pointer">
        <span>Прикрепить фото</span>
        <SvgLoader width="18" height="18" icon-name="attachment" />
        <input type="file" id="review-file" style="display: none" accept="image/*">
      </label>
      <div class="flex gap-5 mt-15">
        <SvgLoader width="10" height="10" icon-name="star-def" />
        <SvgLoader width="10" height="10" icon-name="star-def" />
        <SvgLoader width="10" height="10" icon-name="star-def" />
        <SvgLoader width="10" height="10" icon-name="star-def" />
        <SvgLoader width="10" height="10" icon-name="star-def" />
      </div>
      <Button is-arrow compress :is-mini="isMobile" class="mt-22">Сохранить</Button>
    </ModalBase>
  </main>
</template>

<style scoped lang="scss">
  main {
    overflow-x: hidden;
    padding-bottom: 50px;
  }
  .reviews {
    transform-origin: 0 50% 0;
    transform-style: preserve-3d;
    transition: all 0.5s ease 0s;
  }
  .reviews-content .review:nth-child(even) {
    align-self: flex-end;
  }
  .reviews-content .review:nth-child(odd) {
    align-self: flex-start;
  }

  .btn-m {
    position: fixed;
    bottom: 75px;
    right: 10px;
  }
  .btn-d {
    margin-left: auto;
  }
  .title-s {
    font-size: 25px;
  }
</style>