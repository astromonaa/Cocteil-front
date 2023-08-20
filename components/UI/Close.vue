<script setup lang="ts">
const {isMobile} = useDevice()
</script>

<template>
  <div :class="['rounded', isMobile ? 'small' : '']">
    <SvgLoader width="20" height="20" icon-name="close" />
  </div>
</template>

<style scoped lang="scss">
.rounded {
  border-radius: 50%;
  background: #514A7E;
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  will-change: filter;
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.10));
  }
}
.small {
  width: 30px;
  height: 30px;
}

</style>