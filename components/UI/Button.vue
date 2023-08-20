<script setup lang="ts">

import SvgLoader from "~/components/SvgLoader.vue";

interface IProps {
  isArrow?: boolean;
  isPink?: boolean
  compress?: boolean;
  isMini?: boolean;
  direction?: 'up' | 'right' | 'bottom' | 'left'
}

withDefaults(defineProps<IProps>(), {
  isArrow: false,
  isPink: true,
  isMini: false
})


</script>

<template>
  <button
      :class="{pink: isPink, white: !isPink}"
      :style="{padding: isMini ? '8px 34px' : compress ? '14px' : '16px', minWidth: isMini ? 'auto' : '148px'}"
      class="arrow-right"
  >
    <slot>Button</slot>
    <svg v-if="isArrow" xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none" :class="[{'white-arrow': isPink}, [direction]]">
      <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"/>
    </svg>

    <slot v-if="!isArrow" name="icon"></slot>
  </button>
</template>

<style scoped lang="scss">
  .arrow-right {
    border: 0.5px solid #121212;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    will-change: background, color;
    transition: all 0.3s;
    gap: 9px;
    letter-spacing: 2px;
    &:hover {
      background: #514A7E;
      color: #FFFDF5;
      border-color: transparent;
      &>svg>path {
        fill: #FFFDF5;
      }
    }
  }
  .pink {
    color: #FFFDF5;
    background: #514A7E;
    border: none;
  }
  .white {
    color: #514A7E;
    background: #FFFDF5;
  }
  .white-arrow {
    transition: all 0.3s;
    &>path {
      fill: #FFFDF5!important;
    }
  }
  .arrow-right svg path {
    fill: #514A7E;
  }
  .bottom {
    transform: rotate(90deg) translate(-5px, 19px);
  }
</style>