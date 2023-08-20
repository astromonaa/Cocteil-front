<script setup lang="ts">

</script>

<template>
  <header class="header-mobile">
    <div v-if="$route.path === '/'">
      <span class="chosen-category">Женщинам</span>
      <span>Мужчинам</span>
      <span>Детям</span>
    </div>
    <section>
      <LazyNuxtLink to="/">
        <SvgLoader width="25" height="25" icon-name="home"/>
      </LazyNuxtLink>
      <LazyNuxtLink to="/favorites">
        <SvgLoader width="25" height="25" icon-name="like"/>
      </LazyNuxtLink>
      <LazyNuxtLink to="/auth">
        <SvgLoader width="25" height="25" icon-name="profile"/>
      </LazyNuxtLink>
      <LazyNuxtLink to="/cart">
        <SvgLoader width="25" height="25" icon-name="shopping"/>
      </LazyNuxtLink>
      <LazyNuxtLink to="/">
        <SvgLoader width="25" height="25" icon-name="menu"/>
      </LazyNuxtLink>
    </section>
  </header>
</template>

<style scoped lang="scss">
.header-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #7D7D7D;
    font-size: 12px;
    line-height: 118%;
    background: #FFFDF5;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 10px 0 rgba(81, 74, 126, 0.20);
    span {
      padding: 13px 0;
      text-align: center;
    }
  }
  section {
    padding: 22px 32px 16px 32px;
    display: flex;
    justify-content: space-between;
    background: #514A7E;
  }
}
.chosen-category {
  border-radius: 10px 10px 0 0px;
  box-shadow: 0 4px 10px 0 rgba(81, 74, 126, 0.20);

}
</style>