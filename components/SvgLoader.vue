<script setup lang="ts">

  const svg = ref('')

  const props = defineProps({
    width: String,
    height: String,
    iconName: String,
  })
  const url = computed(() => `/img/svg/${props.width}x${props.height}/${props.iconName}.svg`)

  onMounted(async () => {
    const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
    const response = await fetch(domain + url.value)
    let data = await response?.text()
    data = data?.replace(/<svg\b([\s\S]*?)>/g, '')
    svg.value = data?.slice(0, data.length - 7)
  })



</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    xmlns="http://www.w3.org/2000/svg"
    v-html="svg"
  >
  </svg>
</template>

<style scoped>

</style>