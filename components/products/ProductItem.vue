<script setup lang="ts">
import Button from "~/components/UI/Button.vue";
import type {IProduct} from "~/types/types";
import useProductItem from "~/hooks/useProductItem";

interface IProps {
  product: IProduct;
}

const props = defineProps<IProps>()

const {isMobile} = useDevice()

const {price, images} = useProductItem(props.product)

</script>

<template>
  <div
    :class="['product-item-wrapper', {'mobile-product': isMobile}]"
    @click="isMobile && $router.push(`/product/${product.id}`)"
  >
    <img
      :src="images[0]"
      :alt="product?.name"
    >
    <div v-if="isMobile" class="mobile-info">
      <div>
        <span>{{price}} р</span>
        <s>65000.00 р</s>
      </div>
      <span class="mobile-product-name">{{product?.name}}</span>
      <ClientOnly>
        <div class="mobile-info-last-block">
          <section>
            <SvgLoader width="10" height="10" icon-name="star"/>
            <SvgLoader width="10" height="10" icon-name="star"/>
            <SvgLoader width="10" height="10" icon-name="star"/>
            <SvgLoader width="10" height="10" icon-name="star"/>
          </section>
          <SvgLoader width="20" height="20" icon-name="cart"/>
        </div>
        <SvgLoader width="20" height="20" icon-name="like" class="like"/>
      </ClientOnly>
    </div>
    <div v-else class="info">
      <div class="description">
        <span>{{price}} р</span>
        <s>65000.00 р</s>
        <p>{{product?.name}}</p>
      </div>
      <ClientOnly>
        <div class="product-controls">
          <SvgLoader width="20" height="20" icon-name="like"/>
          <SvgLoader width="20" height="20" icon-name="cart"/>
        </div>
        <NuxtLink :to="{path: `/catalog/${product.id}`}" v-if="!isMobile">
          <Button class="product-btn" is-arrow compress :is-pink="false">Подробнее</Button>
        </NuxtLink>
        <section class="rating">
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
        </section>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item-wrapper {
  width: 278px;

  img {
    width: 100%;
    height: 385px;
    object-fit: cover;
  }
}

.mobile-product {
  width: 100%;
  position: relative;

  img {
    border-radius: 10px;
  }

  .like {
    position: absolute;
    top: 6px;
    right: 8px;
  }
}

.info {
  display: grid;
  grid-template-columns: 1fr min-content 1fr min-content;
  row-gap: 13px;

}

.description {
  & > span {
    display: inline-block;
    font-weight: 400;
    margin-right: 12px;
  }

  & > p {
    font-weight: 400;
    color: #7D7D7D;
    margin-top: 13px;
    white-space: nowrap;
    max-width: 155px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > s {
    color: #7D7D7D;
    font-size: 12px;
  }
}

.product-controls {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  grid-column: 7;
}

.product-btn {
  color: #121212;
  font-weight: 400;
  grid-row: 2/3;
}

.rating {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  grid-row: 2/3;
  grid-column: 7;
}

.mobile-info {
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 10px;
  justify-items: flex-start;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;

    section {
      display: flex;
      gap: 5px;
    }
  }

  .mobile-product-name {
    font-size: 10px;
    color: #7D7D7D;
  }

  &-last-block {
    justify-content: space-between;
  }
}

</style>