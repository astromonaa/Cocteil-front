<script setup lang="ts">

</script>

<template>
  <label class="terms" for="terms-checkbox">
    <input type="checkbox" id="terms-checkbox">
    <small>Даю согласие на обработку персональных данных</small>
  </label>
</template>

<style scoped lang="scss">
.terms {
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 12px;
  small {
    color: #7D7D7D;
    font-size: 8px;
    font-weight: 100;
  }
  input {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
}
</style>