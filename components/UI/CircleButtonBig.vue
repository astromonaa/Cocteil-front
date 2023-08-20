<script setup lang="ts">

interface IProps {
  label?: string,
  isPink?: boolean,
  centered?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  label: 'Каталог',
  isPink: true,
  isMobile: false
})

const translate = computed(() => props.centered ? '-18%' : '-55%')

const {isMobile} = useDevice()

</script>

<template>
  <div :class="['btn', {'btn-pink': isPink, 'btn-white': !isPink, mobile: isMobile}]">
    <div>{{label}}</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="8" viewBox="0 0 80 8" fill="none" :class="{white: isPink}">
      <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z"/>
    </svg>
  </div>
</template>

<style scoped lang="scss">
  .btn {
    width: 193px;
    height: 193px;
    border: 1px solid #514A7E;
    border-radius: 50%;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    gap: 16px;
    cursor: pointer;
  }
  .btn-pink {
    color:  #FFFDF5;
    background: #514A7E;
  }
  .btn-white {
    color:  #514A7E;
    background: #FFFDF5;
  }
  .btn svg path {
    fill: #514A7E;
  }
  .btn:hover {
    background: #514A7E;
    color: #FFFDF5;
    filter: drop-shadow(0px 4px 10px rgba(81, 74, 126, 0.40));
    &>svg>path {
      fill: #FFFDF5;
    }
  }
  .btn div {
    transform: translateX(v-bind(translate));
  }
  .btn svg {
    transform: translateX(15%);
  }
  .white {
    transition: all 0.3s;
    &>path {
      fill: #FFFDF5!important;
    }
  }
  .mobile {
    width: 135px;
    height: 135px;
    gap: 6px;
    &>div {
      transform: translateX(-18%);
    }
    &>svg {
      width: 41%;
      transform: translateX(33%);
    }
  }
</style>