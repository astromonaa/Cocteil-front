<script setup lang="ts">

  const svg = ref('')

  const props = defineProps({
    width: String,
    height: String,
    iconName: String,
  })
  const domain = computed(() => process.client ? `${window?.location?.protocol}//${window?.location?.hostname}:${window?.location?.port}` : '')
  const url = computed(() => `/img/svg/${props.width}x${props.height}/${props.iconName}.svg`)

  const cacheName = `${domain.value}-svg-cache`

  const useCache = async () => {
    const fullUrl = domain.value + url.value

    const cached = await caches.open(cacheName)
    const cachedResponse = await cached.match(fullUrl)

    if (cachedResponse && cachedResponse.ok) {
      return await cachedResponse.text()
    }

    const response = await fetch(fullUrl)

    let data = await response?.text()
    data = data?.replace(/<svg\b([\s\S]*?)>/g, '')
    data = data?.slice(0, data.length - 7)

    const cachesStorage = await caches.open(cacheName)
    await cachesStorage.put(fullUrl, new Response(data))

    return data
  }

  onMounted(async () => {
    if (!process.client) return
    svg.value = await useCache()
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