<script setup lang="ts">

import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import type {IProductData} from "~/types/types";

interface IProps {
  products: IProductData[]
}

const props = defineProps<IProps>()


const minPrice = ref(0)
const isSizesOpened = ref(false)
const isColorsOpened = ref(false)

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', 'Универсальный']
const colors = ['#fff', '#000', '#A61F1F', '#3D7B52', '#EAD943', '#296297', '#C4C4C4']
</script>

<template>
  <div class="filters">
    <span>Цена, б.р</span>
    <div class="range-block">
      <span>От</span>
      <span>До</span>
      <input v-model="minPrice" type="range" min="2000" max="150000">
    </div>
    <small>{{ (+minPrice).toLocaleString() }} &#8381;</small>
    <div class="flex justify-between items-center pointer" @click="isSizesOpened = !isSizesOpened">
      <ClientOnly>
        <span class="filter-label">Размер</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: #213454; transition: all 0.3s" :class="{rotate: isSizesOpened}"/>
      </ClientOnly>
    </div>
    <ul v-if="isSizesOpened" class="sizes-list">
      <li v-for="(size, idx) in sizes" :key="idx" class="flex gap-20 items-center">
        <div></div>
        <span>{{ size }}</span>
      </li>
    </ul>
    <div class="flex justify-between items-center pointer" @click="isColorsOpened = !isColorsOpened">
      <ClientOnly>
        <span class="filter-label">Цвета</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: #213454; transition: all 0.3s" :class="{rotate: isColorsOpened}"/>
      </ClientOnly>
    </div>
    <div class="flex gap-10 flex-wrap" v-if="isColorsOpened">
      <div class="colors-item" v-for="color in colors" :key="color" :style="{background: color}"></div>
    </div>
    <CircleDecoration v-if="products?.length > 10" decoration="arrow" class="to-up" size="large"/>
  </div>
</template>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 163px;
  position: relative;

  .range-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    row-gap: 7px;

    span {
      color: #7D7D7D;
      font-size: 10px;
      text-align: left;

      &:nth-child(2) {
        text-align: right;
      }
    }
  }

  small {
    font-size: 12px;
  }

  .to-up {
    position: fixed;
    bottom: 250px;
  }

  .filter-label {
    color: #121212;
    font-size: 20px;
    font-weight: 400;
  }

  input[type=range] {
    height: 2px;
    grid-row: 3/2;
    grid-column: 1/3;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 7px;
      width: 7px;
      cursor: pointer;
    }
  }
}


ul {
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    span {
      font-size: 14px;
      font-weight: 300;
      color: #7D7D7D;
    }
    div {
      width: 7px;
      height: 7px;
      background: #fff;
      border: 1px solid #000;
      border-radius: 50%;
    }
  }
}

.rotate {
  transform: rotate(-180deg);
}

.colors-item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.1px solid #333;
  cursor: pointer;
}
</style>