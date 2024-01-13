import type {IProduct, ISize} from "~/types/types";
import {useRoute} from "nuxt/app";
import {getSignFromSize} from "~/utils/useSizes";
import {useUserStore} from "~/store/user";

export default function (product?: IProduct | undefined) {

	const {public: {apiUrl}} = useRuntimeConfig()
	const {$app} = useNuxtApp()
	const route = useRoute()

	const isLoading = ref(!product)
	const chosenSize = ref()
	const chosenColor = ref()

	const userStore = useUserStore()

	const localProduct = ref(product)

	const price = computed(() => localProduct.value?.price?.toLocaleString() + ' ₽')

	const images = computed(() => localProduct.value?.images.reduce((acc:string[], i) => {
		acc.push(`${apiUrl}/${i}`)
		return acc
	}, []))


	const sizes = computed<ISize[] | undefined>(() => localProduct.value?.sizes.map(size => ({
		size,
		sign: getSignFromSize(size)
	})))


	const handleAddToCart = async () => {
		if (!userStore.isAuth) return navigateTo('/auth')
		try {
			await $app._apiPack._cartApi.addToCartAsync(route.params.id, {color: chosenColor.value, size: chosenSize.value})
			await fetchOneProduct()
			chosenSize.value = null;
			chosenColor.value = null;
		}catch (e) {
			await Promise.reject(e)
		}
	}

	const handleLike = async () => {
		if (!userStore.isAuth) return navigateTo('/auth')
		try {
			await $app._apiPack._productsApi.addToFavoritesAsync(route.params.id)
			await fetchOneProduct()
		}catch (e) {
			Promise.reject(e)
		}
	}


	const fetchOneProduct = async () => {
		try {
			isLoading.value = true
			localProduct.value = await $app._apiPack._productsApi.fetchOneProduct(route.params.id)
		}catch (e) {
			await Promise.reject(e)
		}finally {
			isLoading.value = false
		}
	}

	onMounted(async () => {
		if (!product) await fetchOneProduct()
	})


	return {
		price,
		images,
		product: localProduct,
		sizes,
		handleAddToCart,
		handleLike,
		isLoading,
		chosenSize,
		chosenColor
	}
}