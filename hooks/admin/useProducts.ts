import useApiService from "~/services/ApiService";
import {computed, type Ref} from "vue";
import type {ICategory, IProductData} from "~/types/types";
import {useAdminNotificationsStore} from "~/store/adminNotitcationsStore";

export default function () {
	const ApiService = useApiService()
	const store = useAdminNotificationsStore()

	const {addNotification} = store

	const isLoading = ref(false)
	const refetch = ref(false)

	const productData = ref<Ref<IProductData>>({
		name: '',
		description: '',
		price: '0',
		rating: '1',
		sizes: ['46'],
		CategoryId: '',
		SubCategoryId: null,
		colors: ['#fff'],
		files: []
	})

	const successNotification = { success: true, message: 'Товар успешно добавлен' }

	const CATEGORY_TABLE = 'category'
	const categories = ref<ICategory[]>([])

	const chosenCategory = computed(() => categories.value.find(i => i.id === +productData.value.CategoryId))
	const setFile = (event:Event<HTMLInputElement>) => {
		productData.value.files = event.target.files
	}

	const setInitialProductData = () => {
		productData.value = {
			name: '',
			description: '',
			price: '0',
			rating: '1',
			sizes: ['46'],
			CategoryId: categories.value[0]?.id || '',
			SubCategoryId: categories.value[0]?.SubCategories?.[0]?.id || '',
			colors: ['#fff'],
			files: []
		}
	}

	const fetchCategories = async () => {
		try {
			const {rows} = await ApiService.getAll(CATEGORY_TABLE)
			categories.value = rows
			productData.value.CategoryId = categories.value[0].id
			productData.value.SubCategoryId = categories.value[0].SubCategories?.[0].id
		}catch (e) {
			console.log(e)
		}
	}

	const handleAddProduct = async () => {
		try {
			isLoading.value = true
			const formData = new FormData()
			formData.append('name', productData.value.name)
			formData.append('description', productData.value.description)
			formData.append('price', productData.value.price.toString())
			formData.append('rating', productData.value.rating.toString())
			formData.append('sizes', JSON.stringify(productData.value.sizes))
			formData.append('CategoryId', productData.value.CategoryId.toString())
			formData.append('SubCategoryId', productData.value.SubCategoryId?.toString() || '')
			formData.append('colors', JSON.stringify(productData.value.colors))
			for (const file of productData.value.files) {
				formData.append('images', file)
			}

			const product = await ApiService.addProduct(formData)

			isLoading.value = false;
			refetch.value = true
			setInitialProductData()
			addNotification(successNotification)
			return product

		}catch (e) {
			addNotification({ success: false, message: e?.response?.data?.message || e.message })
		}finally {
			isLoading.value = false
			setTimeout(() => (refetch.value = false), 1000)
		}
	}

	onMounted(async () => {
		setInitialProductData()
		await fetchCategories()
	})


	return {
		productData,
		setFile,
		categories,
		handleAddProduct,
		chosenCategory,
		isLoading,
		refetch
	}
}