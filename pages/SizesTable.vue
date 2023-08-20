<script setup lang="ts">

import CircleDecoration from "~/components/UI/CircleDecoration.vue";

definePageMeta({
  layout: 'base-layout'
})
const {back} = useRouter()

</script>

<template>
  <div class="table-wrapper">
    <CircleDecoration decoration="arrow" direction="left" @click="back"/>
    <h1>Таблица для определения женских размеров</h1>

    <img src="/img/sizes-table.png" alt="Таблица размеров">
    <p>
      Все модели, предоставленные на страницах чаще соответсвуют размерам
      <br/>
      <br/>
      т.к. замеров для каждой модели у нас нет, мы предоставляем размерную таблицу поставщика,
      но по ней могут быть минимальные расхождени, она не 100% идёт под модель
      <br/>
      <br/>

      Маркировка S, M, L, XL у каждого поставщика своя, у кого-то 42-S, у кого-то 42-M
    </p>
  </div>
</template>

<style scoped lang="scss">
  .table-wrapper {
    padding: 40px 140px 80px;
    h1 {
      margin: 54px 0 60px;
      text-align: center;
      color: #121212;
      font-size: 40px;
    }
  }
  img {
    margin: 0 auto;
    display: block;
  }
  p {
    color: #7D7D7D;
    font-size: 20px;
    margin-top: 60px;
  }
</style>