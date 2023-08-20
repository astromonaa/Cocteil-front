<script setup lang="ts">
import ProductItem from "~/components/products/ProductItem.vue";
import Button from "~/components/UI/Button.vue";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";
import ProductRecommendationSystem from "~/components/products/ProductRecommendationSystem.vue";

const {isMobile} = useDevice()


</script>

<template>
  <div v-if="isMobile" class="mobile-wrapper">
    <h2>Успей купить!</h2>
    <span class="cursive">Акции</span>
    <section class="mobile-catalog" style="margin-top: 60px">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </section>
    <Button is-arrow compress style="margin: 30px auto 0">Смотреть еще</Button>
    <CircleDecoration size="small" decoration="arrow" class="to-up" />
  </div>
  <div v-else class="wrapper">
    <h2>Успей купить!</h2>
    <span class="cursive">Акции</span>
    <ProductRecommendationSystem style="margin-top: 60px"/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 128px;
  padding-left: 135px;

  & > span {
    margin-left: 20%;
    line-height: 70%;
  }
}


.mobile-wrapper {
  margin-top: 60px;
  text-align: center;
  padding: 0 10px;
  h2, span {
    font-size: 25px;
  }
  span {
    margin-left: 41%;
  }
  .to-up {
    margin-left: auto;
    transform: translateY(-14px);
  }
}
</style>