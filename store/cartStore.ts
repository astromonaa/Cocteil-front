import type {ICartProduct} from "~/types/types";

export const useCartStore = defineStore('cartStore', () => {
  const cartProducts = ref<ICartProduct[]>([])
  const cartPrice = ref(0)
  const isLoading = ref(true)
  const {$app} = useNuxtApp()

  const fetchCartProducts = async () => {
    try {
      const {products, total_price} = await $app._apiPack._cartApi.getCartProductsAsync()
      cartProducts.value = products
      cartPrice.value = total_price
    }catch (e) {
      console.log(e)
    }finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    if (!cartProducts.value.length) {
      fetchCartProducts()
    }
  })

  return {
    cartProducts,
    isLoading,
    cartPrice,
  }
});