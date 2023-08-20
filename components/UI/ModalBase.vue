<script setup lang="ts">

import Close from "~/components/UI/Close.vue";

interface IProps {
  contentStyle?: object
}

const isActive = ref(false)

const emit = defineEmits(['close'])
defineProps<IProps>()


onMounted(() => new Promise(() => setTimeout(() => isActive.value = true, 100)))

const close = () => {
  new Promise((resolve, _) => {
    resolve(isActive.value = false)
  }).then(() => setTimeout(() => emit('close'), 300))
}
</script>

<template>
  <div :class="['modal-wrapper', {'active-wrapper': isActive}]" @click="close">
    <div :class="['modal-content', {'active-content': isActive}]" @click.stop :style="contentStyle">
      <Close class="close" @click="close"/>
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.3s;
  }
  .modal-content {
    background: #FFFDF5;
    position: relative;
    transition: all 0.3s;
    transform: scale(0);
    padding: 80px 45px;
    min-width: 320px;
  }
  .close {
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .active-wrapper {
    background: rgba(0, 0, 0, 0.5);
  }
  .active-content {
    transform: scale(1);
  }
</style>