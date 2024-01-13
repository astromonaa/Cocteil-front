<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSidebarStore} from "~/store/sidebarStore";
import MobileCartProduct from "~/components/products/MobileCartProduct.vue";
import type {IProduct} from "~/types/types";

const {back} = useRouter()
const {isOpen, fullOpen} = storeToRefs(useSidebarStore())
const {isMobile} = useDevice()

const {$app} = useNuxtApp()

definePageMeta({
  layout: 'without-footer-layout'
})


const cartProducts = ref<IProduct[]>([])
const cartPrice = ref(0)
const isLoading = ref(false)

const fetchCartProducts = async () => {
  try {
    isLoading.value = true
    const {products, totalPrice} = await $app._apiPack._cartApi.getCartProductsAsync()
    cartProducts.value = products
    cartPrice.value = totalPrice
  }catch (e) {
    console.log(e)
  }finally {
    isLoading.value = false
  }
}

onMounted(fetchCartProducts)
</script>

<template>
  <main>
    <div :class="['cart', {translate: isOpen, full: fullOpen}]" v-if="!isMobile">
      <div class="cart-page-top start-pos" v-showBlock>
        <LazyUICircleDecoration decoration="arrow" direction="left" @click="back"/>
        <h1>Корзина</h1>
        <div>
          <LazySvgLoader width="34" height="34" icon-name="cart"/>
          <small>2</small>
        </div>
      </div>
      <section class="products-list start-pos" v-showBlock>
        <LazyProductsCartProduct
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
        />
      </section>
      <div class="total start-pos" v-showBlock>
        <span>Итого:</span>
        <div>{{cartPrice}}</div>
        <small>Товары, {{cartProducts.length}} шт.</small>
      </div>
      <LazyNuxtLink to="/createoffer" class="start-pos" v-showBlock>
        <LazyUIButton compress style="margin: 50px 0 10px">Заказать</LazyUIButton>
      </LazyNuxtLink>
      <div class="terms start-pos" v-showBlock>
        <input type="checkbox">
        <span>Согласен с условиями правил пользования торговой площадкой и правилами возврата</span>
      </div>
      <LazyUICircleDecoration decoration="arrow" direction="up" size="large" style="margin-top: 55px"/>
<!--      <LazyProductsProductRecommendationSystem-->
<!--          v-showBlock-->
<!--          title="Может, что-то еще"-->
<!--          hide-arrows style="margin-top: 23px"-->
<!--          class="start-pos"-->
<!--      />-->
    </div>
    <!-- MOBILE-->
    <div class="mobile-cart" v-else>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>
      <LazyProductsMobileCartProduct/>

      <LazyNuxtLink to="/createoffer">
        <span class="total">
          К оформлению {{cartProducts.length}} шт, {{ cartPrice }} р.
        </span>
      </LazyNuxtLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  overflow: hidden;
}

.cart {
  margin: 37px 135px 0;
  transform-origin: 0 50% 0;
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;
}

.cart-page-top {
  display: flex;
  align-items: flex-end;

  h1 {
    margin-left: 50px;
    margin-right: 12px;
  }

  div {
    position: relative;

    small {
      position: absolute;
      right: -9px;
    }
  }
}

.products-list {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.total {
  margin-top: 48px;
  display: flex;
  align-items: flex-end;
  gap: 11px;

  span {
    color: #121212;
    font-size: 20px;
    font-weight: 400;
    line-height: 118%;
  }

  div {
    color: #514A7E;
    font-size: 40px;
    font-weight: 400;
    line-height: 90%;
  }

  small {
    display: block;
    margin-left: 50px;
  }
}

.terms {
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #7D7D7D;
    font-size: 8px;
  }

  input {
    width: 7px;
    height: 7px;
  }
}

.mobile-cart {
  padding: 18px 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .total {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 68px;
    left: 0;
    right: 0;
    background: #514A7E;
    padding: 12px 0;
    color: #FFFDF5;
    font-size: 12px;
    font-weight: 400;
  }
}
</style>