<script setup lang="ts">

interface IProps {
  modelValue: []
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

const sizes = computed({
  get: () => props.modelValue,
  set: (value: string[]) => emit('update:modelValue', value)
})

</script>

<template>
  <div class="flex gap-10">
    <label>Размеры</label>
    <label for="46">46</label>
    <input type="checkbox" value="46" id="46" v-model="sizes">
    <label for="48">48</label>
    <input type="checkbox" value="48" id="48" v-model="sizes">
    <label for="50">50</label>
    <input type="checkbox" value="50" id="50" v-model="sizes">
    <label for="52">52</label>
    <input type="checkbox" value="52" id="52" v-model="sizes">
  </div>
</template>

<style scoped lang="scss">

</style>