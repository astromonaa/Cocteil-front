<script setup lang="ts">


definePageMeta({
  layout: 'tagged-layout'
})
</script>

<template>
  <div class="container">
    <div>
      <span>0.00 </span>
      <small>Бонусных баллов</small>
    </div>
    <div>
      <span>3%</span>
      <small>Бонусов от суммы покупок</small>
    </div>
    <div>
      <span>325, 00 р.</span>
      <small>Сумма покупок</small>
    </div>
    <LazyNuxtLink to="#">Как получить больше?
      <ClientOnly>
        <font-awesome-icon :icon="['fas', 'arrow-right-long']"/>
      </ClientOnly>
    </LazyNuxtLink>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 50px;
  margin-left: 120px;
  height: min-content;
  padding-top: 10px;
  & > div {
    display: flex;
    flex-direction: column;

    span {
      color: #121212;
      font-size: 40px;
    }

    small {
      color: #7D7D7D;
      font-size: 16px;
    }
  }
}
a {
  align-self: flex-end;
}
</style>