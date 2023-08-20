<script setup lang="ts">
interface IProps {
  id: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  cols?: number
}

const props = withDefaults(defineProps<IProps>(), {
  label: 'Input',
  placeholder: 'placeholder',
  rows: 3,
  cols: 3
})
</script>

<template>
  <textarea :placeholder="placeholder" :rows="rows" style="width: 100%;"></textarea>
</template>

<style scoped lang="scss">
textarea {
  resize: none;
  background: #FFFDF5;
  box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.20);
  border: none;
  outline: none;
  padding: 12px 8px;
}

</style>