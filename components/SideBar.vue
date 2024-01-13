<script setup lang="ts">
import {ref} from 'vue'
import SvgLoader from "~/components/SvgLoader.vue";
import {useSidebarStore} from "~/store/sidebarStore";
import {categories} from "~/utils/utils";
import type {Category} from "~/types/types";
import Close from "~/components/UI/Close.vue";

const {isMobile} = useDevice()
const openedMenuWidth = computed(() => isMobile ? '100vw!important' : 'auto')

const {push} = useRouter()

const sideBarStore = useSidebarStore()

const {toggleOpen} = sideBarStore
const chosenCategory = ref()

const open = ref(false)
const mobileOpen = ref(false)
const checkboxRef = ref()


const choseCategory = async (category:Category) => {
  chosenCategory.value = category
  toggleOpen(true, !!category.subcategories?.length)
}
const toggleSidebar = () => {
  chosenCategory.value = {}
  const checked = checkboxRef.value.checked;
  toggleOpen(checked, false)
  checked
      ? setTimeout(() => open.value = checked, 300)
      : open.value = checked
}

const navigateToMain = () => {
  chosenCategory.value = {}
  toggleOpen(false, false)
  open.value = false
  checkboxRef.value.checked = false
  push('/')
}

const toggleMenuOpen = () => {
  mobileOpen.value = !mobileOpen.value
  chosenCategory.value = {}
}

defineExpose({toggleMenuOpen})


</script>

<template>
  <div :class="['sidebar-wrapper', {'mobile-sidebar': isMobile}]">
    <Close v-if="isMobile" style="position: absolute; right: 15px; top: 15px" @click="toggleMenuOpen"/>
    <input ref="checkboxRef" type="checkbox" id="sidebar-check" @change="toggleSidebar">
    <label for="sidebar-check" v-if="!isMobile">
      <SvgLoader width="36" height="36" icon-name="burger-menu"/>
    </label>
    <div :class="['sidebar', {open: open, 'mobile-open': mobileOpen}]">
      <img src="/img/logo.png" alt="Логотип" @click="navigateToMain">
      <section class="categories">
        <ul>
          <li
              v-for="category in categories"
              :key="category.id"
              @click="choseCategory(category as Category)"
          >{{ category.name }}</li>
        </ul>
        <ul :class="['subcategories', {opened: chosenCategory?.subcategories?.length}]">
          <li v-for="subcategory in chosenCategory?.subcategories" :key="subcategory.id">{{ subcategory.name }}</li>
        </ul>
      </section>

    </div>
  </div>
</template>

<style scoped lang="scss">
$sidebar-width: 280px;
$opened-subcategories-width: 195px;

.sidebar-wrapper {
  position: absolute;
  height: 100vh;
  max-height: 855px;
  left: 9.5%;
  top: 66.5%;
  width: min-content;

  .sidebar {
    height: 100%;
    background: #121212;
    transition: all 0.4s;
    color: #FFFDF5;
    width: 0;
    min-width: 0;
    overflow: hidden;
    will-change: width, box-shadow;
    img {
      cursor: pointer;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        white-space: nowrap;
      }
    }
  }
  .open {
    width: v-bind(openedMenuWidth);
  }
}

label {
  width: 36px;
  height: 36px;
  position: absolute;
  left: 100%;
  top: -6px;
}

input {
  display: none;
  &:checked ~ .sidebar {
    min-width: 280px;
    box-shadow: 0 4px 20px 0 rgba(51, 51, 51, 0.05);
  }
}

.categories {
  display: flex;
  padding-left: 18px;
  ul:first-child {
    width: 195px;
  }
}
.subcategories {
  width: 0;
  overflow: hidden;
  transition: width 0.4s;
}
.opened {
  width: $opened-subcategories-width;
}

.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  max-height: 100%;
}
.mobile-open {
  width: 100vw!important;
}

</style>