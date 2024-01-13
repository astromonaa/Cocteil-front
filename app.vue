<script setup lang="ts">
  import MetaTag from "~/components/MetaTag.vue";
  import useListenMenuChecker from "~/hooks/useListenMenuChecker";
  import useAuth from "~/hooks/useAuth";

  const {init} = useListenMenuChecker()
  const {auth} = useAuth()

  onMounted(async () => {
    init()
    await auth()
  })

</script>

<template>
  <NuxtLayout>
    <MetaTag/>
    <NuxtPage/>
  </NuxtLayout>
</template>