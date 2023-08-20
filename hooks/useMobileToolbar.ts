const useMobileToolbar = () => {
  const {isMobile} = useDevice()

  if (!isMobile) return

  const route = useRoute()
  const isCategoryPage = computed(() => route.query.categoryId)
  const isProductPage = computed(() => route.path.match(/\/product\/[0-9]/g))
  const titleSize = computed(() => (isCategoryPage.value || isProductPage.value) ? '14px' : '20px')

  const title = computed(() => isCategoryPage.value ? 'Женщинам / Блузки и рубашки' : ({
    'Catalog': 'Каталог',
    'Cart': 'Корзина',
    'Auth': 'Войти',
    'Registration': 'Регистрация',
    'Favorites': 'Избранное',
    'Viewed': 'Просмотренные',
    'Product-id': 'Платье женское',
    'Reviews': 'отзывы'
  }[route.name as string]))

  const isSearchInput = computed(() => route.name === 'Catalog')

  return {
    title, titleSize,
    isSearchInput,
    isShareIcon: isProductPage
  }
}
export default useMobileToolbar
