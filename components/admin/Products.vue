<script setup lang="ts">
import InputText from '~/components/UI/InputText.vue';
import Button from '../UI/Button.vue';
import TableBase from './TableBase.vue';
import TextArea from "~/components/UI/TextArea.vue";
import useProducts from '~/hooks/admin/useProducts';
import SizesChoose from "~/components/admin/UI/SizesChoose.vue";
import ColorsChoose from "~/components/admin/UI/ColorsChoose.vue";

const {productData, setFile, categories, handleAddProduct, chosenCategory, refetch, isLoading} = useProducts()

</script>


<template>
  <div class="container">
    <h1>Добавить товар</h1>
    <form>
      <InputText v-model="productData.name" id="product-name-input" label="Название товара" />
      <TextArea v-model="productData.description" id="product-desc-input" placeholder="Описание товара"  />
      <InputText v-model="productData.price" id="product-price-input" label="Цена"  />
      <label for="product-rating-input">
        <span>Рейтинг товара</span>
        <input v-model="productData.rating" type="range" id="product-rating-input" min="1" max="5">
        <span>{{productData.rating}}</span>
      </label>
      <label for="file">
        <span>Прикрепите фото товара</span>
        <input @change="setFile" type="file" id="file" multiple>
      </label>
      <SizesChoose v-model="productData.sizes"/>
      <ColorsChoose v-model="productData.colors" />
      <div class="flex gap-20">
        <label for="select">
          <span>Выберите категорию товара</span>
          <select v-model="productData.CategoryId" id="select">
            <option v-for="category in categories" :value="category.id">{{category.name}}</option>
          </select>
        </label>
        <label v-if="chosenCategory?.SubCategories.length" for="subSelect">
          <span>Выберите подкатегорию товара</span>
          <select v-model="productData.SubCategoryId" id="subSelect">
            <option v-for="sub in chosenCategory.SubCategories" :value="sub.id">{{sub.name}}</option>
          </select>
        </label>
      </div>
      <Button @click.prevent="handleAddProduct">Добавить</Button>
    </form>
    <h2>Список товаров</h2>
    <TableBase name="products" :isLoading="isLoading" :refetch="refetch"/>
  </div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    button {
      width: min-content;
    }
    label {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }
}
</style>