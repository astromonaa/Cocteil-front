<script setup lang="ts">
import InputSearch from "~/components/UI/InputSearch.vue";
import SideBar from "~/components/SideBar.vue";
import UserMenu from "~/components/UserMenu.vue";


</script>

<template>
  <header class="header">
    <SideBar/>
    <InputSearch class="search-input"/>
    <div class="header-icons">
      <input type="checkbox" id="user-info-check">
      <label for="user-info-check">
        <SvgLoader width="20" height="20" icon-name="user"/>
      </label>
      <SvgLoader width="20" height="20" icon-name="like"/>
      <SvgLoader width="20" height="20" icon-name="cart"/>
      <div class="menu-container">
        <UserMenu show-avatar/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  padding: 50px 135px 0 135px;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  position: relative;

  &-icons {
    margin-left: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
    grid-column: 3/4;
    position: relative;

    svg {
      cursor: pointer;
    }

    input[type='checkbox'] {
      display: none;

      &:checked {
        & ~ .menu-container {
          display: flex;
        }
      }
    }
  }

  .search-input {
    grid-column: 2/3;
  }
  .menu-container {
    position: absolute;
    right: 0;
    top: 44px;
    z-index: 2;
    display: none;
    transition: opacity 0.3s;
    will-change: opacity;
    box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
  }
}
</style>