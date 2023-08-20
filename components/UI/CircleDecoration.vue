<script setup lang="ts">

import SvgLoader from "~/components/SvgLoader.vue";
import {computed} from "vue";

interface IProps {
  size?: 'small' | 'regular' | 'large',
  decoration?: 'arrow' | 'message' | null;
  isPink?: boolean;
  direction?: 'right' | 'left' | 'up' | 'down' | null
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'regular',
  decoration: null,
  isPink: true,
  direction: 'up'
})

const isArrow = computed(() => props.decoration === 'arrow')
const isMessage = computed(() => props.decoration === 'message')

</script>

<template>
  <div
      :class="[
          'circle',
          {
            small: size==='small',
            regular: size==='regular',
            large: size==='large',
            pink: isPink
          }
          ]"
  >
    <ClientOnly>
        <font-awesome-icon
            v-if="isArrow"
            :icon="['fas', `arrow-${props.direction || 'right'}-long`]"
            :class="{white: isPink}"
        />
    </ClientOnly>
    <SvgLoader v-if="isMessage" width="36" height="36" icon-name="message"/>
  </div>
</template>

<style scoped lang="scss">

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border-radius: 50%;
  cursor: pointer;
  background: #FFFDF5;
  border: 1px solid #514A7E;
  svg {
    color: #514A7E;
  }

  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(81, 74, 126, 0.40));
    background: #514A7E;
  }
  &:hover svg {
    color: #FFFDF5;
  }
}

.small {
  width: 28px;
  height: 28px;
  svg {
    width: 15px;
  }
}

.regular {
  width: 47px;
  height: 47px;
}

.large {
  width: 72px;
  height: 72px;
}

.pink {
  background: #514A7E;
  svg {
    color: #FFFDF5;
  }
}
</style>