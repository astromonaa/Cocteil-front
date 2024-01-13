<script setup lang="ts">
import MainPageBannerTop from "~/components/MainPageBannerTop.vue";
import HuryToBuy from "~/components/HurryToBuy.vue";
import Reviews from "~/components/reviews/Reviews.vue"
import FAQ from "~/components/FAQ.vue";


</script>

<template>
  <main>
    <MainPageBannerTop/>
    <WhyChooseUs/>
    <HuryToBuy/>
    <Reviews title="Отзывы наших покупателей"/>
    <FAQ/>
    <Cooperation/>
    <InviteForm/>
    <Chat/>
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
  flex: 1 1 auto;
}

</style>