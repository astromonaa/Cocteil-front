<script setup lang="ts">

import Close from "~/components/UI/Close.vue";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";

definePageMeta({
  layout: 'base-layout'
})
const {back} = useRouter()
const {data} = await useFetch('/api/terms')

</script>

<template>
  <div class="wrapper">
    <header>
      <h1>Условия доставки и оплаты</h1>
      <Close @click="back"/>
    </header>
    <ClientOnly>
      <component v-for="term in data" :key="term.text" :is="term.title ? 'h2' : 'p'" v-html="term.text || term.title"/>
    </ClientOnly>
  <CircleDecoration direction="up" decoration="arrow" style="position: fixed; right: 40px; bottom: 60px"/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 30px 40px 60px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

p {
  color: #7D7D7D;
  font-size: 16px;
}
h2 {
  color: #121212;
  font-size: 20px;
  font-weight: 400;
  margin: 60px 0 40px;
}
</style>