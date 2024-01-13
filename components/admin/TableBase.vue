<script setup lang="ts">
import Loader from "../UI/Loader.vue";
import useApiService from "~/services/ApiService";

const ApiService = useApiService()

interface IProps {
  name: 'category' | 'users' | 'products'
  refetch: boolean;
  isLoading: boolean
}

const props = defineProps<IProps>()

const attributes = ref([])
const data = ref([])
const isLoadingLocal = ref(props.isLoading)

const formatAttrs = computed(() => Object.keys(attributes.value).filter(i => i !== 'createdAt' && i !== 'updatedAt'))

const computedData = computed(() => data.value.map(i => {
  delete i.createdAt
  delete i.updatedAt
  delete i.SubCategories
  return i
}))

const attrsLength = computed(() => formatAttrs.value.length || 2)


const setIsLoading = (state:boolean) => (isLoadingLocal.value = state)

onMounted(async () => {
  setIsLoading(true)
  attributes.value = await ApiService.getAttrs(props.name)
  const {rows} = await ApiService.getAll(props.name)
  data.value = rows
  setIsLoading(false)
})

watch(() => props.refetch, async n => {
  if (n) {
    setIsLoading(true)
    const {rows} = await ApiService.getAll(props.name)
    data.value = rows
    setIsLoading(false)
  }
})

watch(() => props.isLoading, n => {
  isLoadingLocal.value = n
})


</script>

<template>
  <div class="table">
    <div class="loading-view" v-if="isLoadingLocal">
      <div class="blur"></div>
      <Loader class="loader"/>
    </div>

    <div :class="['head', attrsLength ? 'grid' : 'flex']">
      <div v-for="item in formatAttrs" class="word-break td">{{item}}</div>
    </div>
    <div :class="['line', attrsLength ? 'grid' : 'flex']" v-for="dataItem in computedData">
      <div v-for="field in Object.values(dataItem)" class="word-break td">{{field}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.table {
  position: relative;

  .loading-view, .loading-view > .blur {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .loader {
    position: absolute;
    top: 50%;
    right: 50%;
  }
  .blur {
    background-color: #ccc;
    opacity: 0.5;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(v-bind(attrsLength), minmax(100px, 400px));
}


.head {
  font-weight: bold;
	background: #ffd300;
	border: none;
	text-align: left;
	font-size: 15px;
	border-top: 3px solid #fff;
	border-bottom: 3px solid #ffd300;
  border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
}
.line {
  text-align: left;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	font-size: 14px;
	vertical-align: top;
  
}
.line:nth-child(even){
	background: #f3f3f3;
}
.td {
	padding: 7px;
  border-right: 0.1px solid #000;
}
.td:last-child {
  border: none;
}
</style>