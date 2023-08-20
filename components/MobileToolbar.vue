<script setup lang="ts">

interface Props {
  isBackIcon?: boolean;
  backText?: string;
  title?: string;
  isSortIcon?: boolean;
  isFiltersIcon?: boolean
  isShareIcon?: boolean;
  isSearchInput?: boolean;
  titleSize: string
}

const props = withDefaults(defineProps<Props>(), {
  isBackIcon: false,
  backText: '',
  title: '',
  isSortIcon: false,
  isFiltersIcon: false,
  isShareIcon: false,
  isSearchInput: false,
  titleSize: ''
})


const {back} = useRouter()

const isNested = computed(() => props.title?.split('/').length > 1)

</script>

<template>
  <section class="toolbar-wrapper">
    <div class="toolbar">
      <ClientOnly>
        <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;" v-if="isBackIcon" @click="back" />
        <span style="display: block; margin-left: 10px">{{backText}}</span>
        <div class="title">
          <span :class="{nested: isNested}" :style="{fontSize: titleSize}">{{title?.split('/')[0]}}</span>
          <span v-if="isNested">/{{title?.split('/')[1]}}</span>
        </div>
        <font-awesome-icon :icon="['fas', 'arrow-down-wide-short']" style="color: #ffffff;" v-if="isSortIcon" />
        <font-awesome-icon :icon="['fas', 'sliders']" style="color: #ffffff; display: block; margin-left: 18px" v-if="isFiltersIcon"/>
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" style="color: #ffffff; display: block; margin-left: 18px" v-if="isShareIcon"/>
      </ClientOnly>
    </div>
    <div class="search-input" v-if="isSearchInput">
      <SvgLoader width="20" height="20" icon-name="search" />
      <input type="search" placeholder="Поиск">
    </div>
  </section>
</template>

<style scoped lang="scss">
  .toolbar-wrapper {
    color: #FFFDF5;
    padding: 12px 10px;
    min-height: 63px;
    background: #514A7E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .toolbar {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .title {
    margin: 0 auto;
    span {
      font-weight: 400;
    }
  }
  .nested {
    color: rgba(255, 253, 245, 0.40);
  }
  .search-input {
    padding: 8px;
    border-radius: 10px;
    background: #FFFDF5;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 6px;
    gap: 8px;
    input {
      width: 100%;
      border: none;
      outline: none;
    }
  }
</style>