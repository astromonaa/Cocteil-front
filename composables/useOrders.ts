import {useCartStore} from "~/store/cartStore";
import type {IOrderData, IOrderItemData} from "~/types/types";


export const useOrders = () => {
  const { $app } = useNuxtApp()
  const orders = ref([]);
  const { cartProducts } = storeToRefs(useCartStore())

  const form = ref({
    name: '',
    tel: '',
    postIndex: '',
    address: '',
    email: '',
    comment: '',
  });

  const hasProducts = computed(() => cartProducts.value.length > 0);


  const getProductsInOrderFormat = (): IOrderItemData[] => {
    return cartProducts.value.map(({ id, quantity, size, color }) => ({
      product_id: id,
      quantity,
      size,
      color
    }))
  }

  const prepareOrderData = (): IOrderData => ({
    items: getProductsInOrderFormat(),
    shipping_address: form.value.address,
    billing_address: form.value.address,
    payment_method: "YooKassa",
    currency: "RUB",
    notes: form.value.comment,
  });

  const createOrder = async () => {
    const ordersData = prepareOrderData();
    try {
      const response = await $app._apiPack._ordersApi.createOrder(ordersData);
      if (response.confirmation_url) {
        window.open(response.confirmation_url);
      }
    }catch (error) {
      console.log(error);
    }
  }

  const fetchOrders = async () => {
    try {
      orders.value = await $app._apiPack._ordersApi.fetchOrders();
    }catch (error) {
      console.log(error);
    }
  }

  return {
    form,
    hasProducts,
    orders,
    createOrder,
    fetchOrders,
  }
}