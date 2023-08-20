<script setup lang="ts">

import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import ProductPageGallery from "~/components/products/ProductPageGallery.vue";
import Button from "~/components/UI/Button.vue";
import ProductRecommendationSystem from "~/components/products/ProductRecommendationSystem.vue";

import {useSidebarStore} from "~/store/sidebarStore";
import {storeToRefs} from 'pinia'

const {isOpen, fullOpen} = storeToRefs(useSidebarStore())

const {back} = useRouter()
const {isMobile} = useDevice()

definePageMeta({
  layout: 'without-footer-layout',
})


</script>

<template>
  <main>
    <div :class="['product-page-wrapper',{translate: isOpen, full: fullOpen}]" v-if="!isMobile">
      <div class="product-page">
        <div class="product-page-top">
          <CircleDecoration decoration="arrow" direction="left" @click="back"/>
          <span>Главная/ Женщинам /Блузки и рубашки </span>
        </div>
        <div class="product-name">
          <h1>Блузка женская</h1>
          <span>Арт 06578990-086</span>
        </div>
        <div class="product-info">
          <ProductPageGallery/>
          <div class="product-meta">
            <span class="product-price">50.00 б.р.</span>
            <span class="title">Цвета</span>
            <section class="colors">
              <div class="colors-item"></div>
              <div class="colors-item"></div>
              <div class="colors-item"></div>
              <div class="colors-item"></div>
              <div class="colors-item"></div>
            </section>
            <span class="title">Размер</span>
            <section class="sizes">
              <div class="sizes-item">
                <span>S</span>
                <small>42</small>
              </div>
              <div class="sizes-item">
                <span>M</span>
                <small>44</small>
              </div>
              <div class="sizes-item">
                <span>L</span>
                <small>46</small>
              </div>
              <div class="sizes-item">
                <span>XL</span>
                <small>48</small>
              </div>
            </section>
            <NuxtLink to="/sizestable" class="link">Таблица размеров</NuxtLink>
            <div class="control-btns">
              <Button is-mini>
                <span>В корзину</span>
                <template #icon>
                  <LazySvgLoader width="20" height="20" icon-name="cart-white"/>
                </template>
              </Button>
              <SvgLoader class="like" width="20" height="20" icon-name="like"/>
            </div>
            <div class="rating">
              <LazySvgLoader width="10" height="10" icon-name="star"/>
              <LazySvgLoader width="10" height="10" icon-name="star"/>
              <LazySvgLoader width="10" height="10" icon-name="star"/>
              <LazySvgLoader width="10" height="10" icon-name="star"/>
              <LazySvgLoader width="10" height="10" icon-name="star"/>
            </div>
            <div class="more-info-links">
              <NuxtLink class="link" to="#">Смотреть все отзывы</NuxtLink>
              <NuxtLink class="link" to="#">Добавить отзыв</NuxtLink>
            </div>
            <span class="title">Описание</span>
            <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, corporis
              delectus enim expedita fuga obcaecati repudiandae saepe sit unde!</p>
          </div>
        </div>
        <Reviews class="reviews" title="Отзывы о товаре"/>
      </div>
      <ProductRecommendationSystem
          hide-arrows
          title="С этим товаром также покупают"
          style="margin-left: 135px; margin-top: 60px"
      />
    </div>

    <!-- MOBILE-->
    <div class="mobile-product-page" v-else>
      <ProductPageGallery/>
      <div class="product-meta">
        <div class="name product-meta-item">
          <span>Платье женское </span>
          <small>Арт 09456784</small>
        </div>
        <div class="price product-meta-item">
          <span class="mobile-title">Стоимость</span>
          <strong>50.00</strong>
        </div>
        <div class="colors product-meta-item">
          <span class="mobile-title">Цвета</span>
          <div class="colors">
            <div class="colors-item"></div>
            <div class="colors-item"></div>
            <div class="colors-item"></div>
            <div class="colors-item"></div>
            <div class="colors-item"></div>
          </div>
        </div>
        <div class="sizes product-meta-item">
          <span class="mobile-title">Размер</span>
          <div class="sizes-item">
            <span>S</span>
            <small>42</small>
          </div>
          <div class="sizes-item">
            <span>M</span>
            <small>44</small>
          </div>
          <div class="sizes-item">
            <span>L</span>
            <small>46</small>
          </div>
          <div class="sizes-item">
            <span>XL</span>
            <small>48</small>
          </div>
        </div>
        <LazyNuxtLink to="/sizestable" class="link">Таблица размеров</LazyNuxtLink>
        <div class="description">
          <span class="mobile-title">Описание</span>
          <p>
            Здесь будет какое-то неболшое описание о вещи
            Здесь будет какое-то неболшое описание о вещи
          </p>
        </div>
        <div class="stars">
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
          <SvgLoader width="10" height="10" icon-name="star"/>
        </div>
        <div class="more-info-links">
          <LazyNuxtLink class="link" to="#">Смотреть все отзывы</LazyNuxtLink>
          <LazyNuxtLink class="link" to="#">Добавить отзыв</LazyNuxtLink>
        </div>
        <div class="btns">
          <Button is-mini style="padding: 8px 0; width: 45%">
            Купить сейчас
          </Button>
          <Button is-mini style="padding: 8px 0; width: 45%">
            <span>В корзину</span>
            <template #icon>
              <LazySvgLoader width="20" height="20" icon-name="cart-white"/>
            </template>
          </Button>
        </div>
      </div>
      <ProductRecommendationSystem title="С этим товаром покупают" hide-arrows/>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  overflow-x: hidden;
}

.product-page {
  padding: 30px 135px 0;
  margin-bottom: 150px;

  &-wrapper {
    transform-origin: 0 50% 0;
    transform-style: preserve-3d;
    transition: all 0.5s ease 0s;
    padding-bottom: 100px;
  }

  &-top {
    display: flex;
    align-items: flex-end;
    gap: 56px;
  }
}

.product-name {
  margin: 60px 0;
  display: flex;
  gap: 11px;
  align-items: flex-end;

  h1 {
    color: #121212;
    font-size: 40px;
  }

  span {
    color: #7D7D7D;
    font-size: 20px;
    font-weight: 400;
  }
}

.product-info {
  display: flex;
  justify-content: space-between;
  gap: calc(var(--index) * 4);
  margin-bottom: 180px;
}

.product-meta {
  width: 100%;

  .colors {
    display: flex;
    align-items: center;
    gap: 20px;

    &-item {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      &:first-child {
        border: 0.5px solid #000000;
        background: #fff;
      }

      &:nth-child(2) {
        background: #000000;
      }

      &:nth-child(3) {
        background: #1FA68E;
      }

      &:nth-child(4) {
        background: #DC39CC;
      }

      &:nth-child(5) {
        background: #FFF385;
      }

    }
  }

  .product-price {
    color: #121212;
    font-size: 40px;
  }

  .title {
    display: block;
    color: #121212;
    font-size: 20px;
    font-weight: 400;
    margin: 40px 0 20px;
  }

  .sizes {
    display: flex;
    gap: 14px;

    &-item {
      border: 0.3px solid #514A7E;
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        color: #514A7E;
        font-size: 16px;
      }

      small {
        color: #7D7D7D;
        font-size: 8px;
      }
    }
  }

  .link {
    display: inline-block;
    margin: 20px 0 40px;
    border-bottom: 1px solid #514A7E;
    text-decoration: none;
    color: #514A7E;
    font-size: 18px;
    font-weight: 400;
  }

  .control-btns {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .like {
    width: 37px;
    height: 37px;
  }

  .rating {
    display: flex;
    margin: 40px 0 20px;
    gap: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .more-info-links {
    display: flex;
    justify-content: space-between;
  }

  .product-description {
    color: #7D7D7D;
    font-size: 16px;
  }
}

.reviews {
  padding: 0;
}


.mobile-product-page {
  padding: 20px 10px;
  .colors {
    gap: 8px;
    &-item {
      width: 10px;
      height: 10px;
    }
  }
  .sizes-item {
    width: 25px;
    height: 25px;
    span {
      font-size: 12px;
    }
    small {
      font-size: 8px;
    }
  }
  .link {
    font-size: 12px;
    margin: 15px 0 30px;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    button {
      -webkit-box-shadow: 0px 3px 8px 3px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 3px 8px 3px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 3px 8px 3px rgba(34, 60, 80, 0.2);
    }
  }
}
.mobile-title {
  color: #121212;
  font-size: 12px;
  font-weight: 400;
}

.product-meta {
  &-item {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
  .name {
    span {
      color: #121212;
      font-weight: 400;
    }
    small {
      color: #7D7D7D;
      font-size: 10px;
    }
  }
  .description {
    p {
      margin: 15px 0 30px;
      color: #7D7D7D;
      font-size: 12px;
    }
  }
  .more-info-links {
    margin: 15px 0;
    .link {
      margin: 0;
    }
  }
}
</style>