<script setup lang="ts">

interface IProps {
  modelValue: string[]
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

const colors = ['#fff', '#000000', '#1FA68E', '#DC39CC', '#FFF385']

const chosenColors = computed({
  get: () => props.modelValue,
  set: (value: string[]) => emit('update:modelValue', value)
})

</script>

<template>
  <section class="flex gap-10 items-center">
    <label>Цвета</label>
    <label
      v-for="color in colors"
      :key="color" class="color"
      :style="{background: color}"
    >
      <input type="checkbox" :value="color" id="color" v-model="chosenColors">
      <span></span>
    </label>
  </section>
</template>

<style scoped lang="scss">
  .color {
    width: 24px;
    height: 24px;
    border: 1px solid black;
    position: relative;
  }
  input[type="checkbox"] {
    display: none;
  }
  input:checked ~ span {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('../../../public/img/svg/25x25/check.svg');
    background-size: cover;
    background-position: center;
  }
</style>