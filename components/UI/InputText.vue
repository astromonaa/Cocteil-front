<script setup lang="ts">

import {computed, watch} from "vue";

interface IProps {
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'search';
  label?: string;
  placeholder?: string;
  centered?: boolean
  modelValue: string;
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  label: 'Input',
  placeholder: '',
  centered: false,
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event:Event<HTMLInputElement>) => emit('update:modelValue', event.target.value) 

const {isMobile} = useDevice()

const labelWidth = computed(() => props.centered ? '100%' : 'auto')
const labelSize = computed(() => isMobile ? '10px' : '16px')

const isValid = ref(false)


watch(() => props.modelValue, n => {
  isValid.value = props.type !== 'email' ? n.trim().length > 0 : n.trim().includes('@')
})
</script>

<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      :data-valid="isValid"
      autocomplete="new-password"
      v-bind="$attrs"
      @input="onInput"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
  .input-wrapper {
    width: 100%;
    position: relative;
    border-bottom: 0.5px solid #7D7D7D;
    padding-bottom: 7px;
    &>input {
      border: none;
      outline: none;
      width: 100%;
      opacity: 0;
      background: transparent;
      &::placeholder {
        font-size: v-bind(labelSize);
      }
    }
    &>label {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: v-bind(labelSize);
      line-height: 118%;
      transition: transform 0.3s;
      text-align: center;
      width: v-bind(labelWidth);
    }
  }
  .input-wrapper>input:focus~label,
  .input-wrapper>input:valid~label
  {
    transform: translateY(-30px) scale(0.7);
  }
  .input-wrapper>input:focus,
  .input-wrapper>input:valid
  {
    opacity: 1;
  }
</style>