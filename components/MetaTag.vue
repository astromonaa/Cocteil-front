<script setup lang="ts">
interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  viewport?: string
  canonical?: string;
  author?: string;
  ogTitle?: string;
}

withDefaults(defineProps<IProps>(), {
  title: 'Магазин модной одежды и обуви - Cocteil',
  description: 'Купите стильную одежду и обувь по выгодным ценам в нашем магазине модной одежды. Широкий ассортимент товаров для всех возрастов и стилей.',
  keywords: 'мода, одежда, интернет-магазин, стиль, покупки, обувь',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  canonical: 'https://cocteil.com',
  author: 'Abdullah Shirinov',
  ogTitle: 'Магазин модной одежды и обуви - Cocteil'
})

</script>

<template>
  <Head>
    <Title>{{title}}</Title>
    <Meta name="description" :content="description"/>
    <Meta name="keywords" :content="keywords"/>
    <Meta name="robots" :content="robots"/>
    <Meta name="viewport" :content="viewport"/>
    <Meta name="author" :content="author"/>
    <Meta name="ogTitle" :content="ogTitle"/>
    <Meta name="language" content="ru"/>
    <Meta name="og:image" content="/img/logo.png"/>
    <Link rel="canonical" :href="canonical"/>
    <Link rel="icon" href="/img/logo.png" />
  </Head>
</template>
