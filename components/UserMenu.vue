<script setup lang="ts">
import {useUserStore} from "~/store/user";
import Button from "~/components/UI/Button.vue";
import {computed} from "vue";
import {storeToRefs} from "pinia";

import {removeFromLocalStorage} from "~/utils/useLocalStorage";
import {EUserRoles} from "~/types/types";

interface IProps {
  showAvatar?: boolean;
  position?: 'center' | 'left'
}

const {$app} = useNuxtApp()
const userStore = useUserStore()

const {isAuth, user} = storeToRefs(userStore)

const props = withDefaults(defineProps<IProps>(), {
  position: 'center'
})

const logout = async () => {
  try {
    await $app._apiPack._authApi.logout()
    removeFromLocalStorage('token')
    userStore.setUser(null)
    window.location.reload()
  }catch(e) {
    console.log(e)
  }
}

const margin = computed(() => props.position === 'center' ? '0 24px' : 0)
</script>

<template>
  <div class="user-menu">
    <template v-if="showAvatar">
      <img src="/img/svg/40x40/avatar-default.svg" alt="avatar" data-not-lazy>

      <NuxtLink v-if="!isAuth" to="/auth">
        <Button is-mini>Войти</Button>
      </NuxtLink>
      <NuxtLink v-if="isAuth" to="#">
        <Button is-mini>Профиль</Button>
      </NuxtLink>
    </template>
    <ul v-if="isAuth">
      <li v-if="user.role === EUserRoles.ADMIN" class="flex justify-center">
        <LazyNuxtLink to="/admin">
          <span>Admin</span>
        </LazyNuxtLink>
      </li>
      <li>
        <LazyNuxtLink to="/cart">
          <SvgLoader width="20" height="20" icon-name="cart"/>
          <span>Корзина</span>
        </LazyNuxtLink>
      </li>
      <hr>
      <li>
        <LazyNuxtLink to="/favorites">
          <SvgLoader width="20" height="20" icon-name="like"/>
          <span>Избранное</span>
        </LazyNuxtLink>
      </li>
      <li>
        <LazyNuxtLink to="/viewed">
          <SvgLoader width="20" height="20" icon-name="eye"/>
          <span>Просмотренные</span>
        </LazyNuxtLink>
      </li>
      <hr>
      <li>
        <LazyNuxtLink to="/bonuses">
          <SvgLoader width="20" height="20" icon-name="money"/>
          <span>Бонусы</span>
        </LazyNuxtLink>
      </li>
      <li>
        <SvgLoader width="20" height="20" icon-name="user"/>
        <span>Личные данные</span>
      </li>
      <li>
        <SvgLoader width="20" height="20" icon-name="list"/>
        <span>История покупок</span>
      </li>
      <hr>
      <li @click="logout">
        <SvgLoader width="20" height="20" icon-name="logout"/>
        <span>Выйти</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@mixin listItem() {
  display: flex;
  align-items: center;
  gap: 11px;
}

.user-menu {
  padding: 18px 0;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-width: 210px;
  display: flex;
  background: #FFFDF5;

  button {
    -webkit-box-shadow: 0 0 8px 0 rgba(81, 74, 126, 0.2);
    -moz-box-shadow: 0 0 8px 0 rgba(81, 74, 126, 0.2);
    box-shadow: 0 0 8px 0 rgba(81, 74, 126, 0.2);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    li {
      @include listItem();
      margin: v-bind(margin);

      a {
        @include listItem()
      }

      span {
        color: #121212;
        line-height: 118%;
      }
    }
  }
}
</style>