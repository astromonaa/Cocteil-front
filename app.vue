<script setup lang="ts">
  import MetaTag from "~/components/MetaTag.vue";
  import useListenMenuChecker from "~/hooks/useListenMenuChecker";
  import useAuth from "~/hooks/useAuth";
  import {useAsyncData} from "nuxt/app";

  const {init} = useListenMenuChecker()
  const {auth} = useAuth()

  await useAsyncData('auth', auth, { server: false })

  onMounted(init)

</script>

<template>
  <NuxtLayout>
    <MetaTag/>
    <NuxtPage/>
  </NuxtLayout>
</template>