<script setup lang="ts">
import Close from "~/components/UI/Close.vue";
import useMobileToolbar from "~/hooks/useMobileToolbar";

const {isMobile} = useDevice()
const router = useRouter()

const formPadding = computed(() => isMobile ? '30px 20px' : '85px 113px')
const minWidth = computed(() => isMobile ? 'auto' : '0')

const toolbar = useMobileToolbar()

</script>

<template>
  <div :class="['form', {'mobile-form': isMobile}]">
    <LazyMobileToolbar
        v-if="isMobile"
        :title="toolbar.title.value"
        :titleSize="toolbar.titleSize.value"
        :isSearchInput="toolbar.isSearchInput.value"
        is-back-icon
    />
    <form @submit.prevent>
      <Close v-if="!isMobile" @click="router.push('/')" class="close"/>
      <slot/>
    </form>
    <LazyHeaderMobile v-if="isMobile"/>
  </div>
</template>

<style scoped lang="scss">
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .close {
    position: fixed;
    top: 38px;
    right: -6%;
  }
}

form {
  min-width: v-bind(minWidth);
  padding: v-bind(formPadding);
}

.mobile-form {
  position: static;
  transform: none;
  form {
    width: 98%;
    box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.40);
    margin: 20% auto 40%;
  }
}
</style>