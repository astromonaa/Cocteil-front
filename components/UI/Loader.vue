<template>
  <span class="loader"></span>
</template>


<script setup lang="ts">

interface IProps {
  isSmall?: boolean
}

const props = defineProps<IProps>()

const margin = computed(() => props.isSmall ?  0 : '15px auto')
</script>

<style scoped>
.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: v-bind(margin);
  position: relative;
  color: #000;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -38px -6px, -14px 6px,  14px -6px;
  }
  33% {
    box-shadow: -38px 6px, -14px -6px,  14px 6px;
  }
  66% {
    box-shadow: -38px -6px, -14px 6px, 14px -6px;
  }
  100% {
    box-shadow: -38px 6px, -14px -6px, 14px 6px;
  }
}

</style>