<script setup lang="ts">

</script>

<template>
  <div class="sort-block">
    <span>Сортировать по:</span>
    <ul>
      <li>Популярности</li>
      <li>Рейтингу</li>
      <li>Цене</li>
      <li>Скидке</li>
      <li>Обновлению</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sort-block {
  display: flex;
  gap: 35px;

  span {
    color: #7D7D7D;
    font-size: 20px;
    font-weight: 400;
  }

  ul {
    display: flex;
    gap: 35px;

    li {
      color: #121212;
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>