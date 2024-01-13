<script setup lang="ts">
import Close from "~/components/UI/Close.vue";
import type {Ref} from "vue";
import CircleDecoration from "~/components/UI/CircleDecoration.vue";

const inputRef = ref<Ref>()
const text = ref<string>()
const isChatOpen = ref<boolean>(false)

const messages = ref([
  { id: 1, text: 'Здравствуйте! Чем я могу Вам помочь?', isAssistant: true },
  { id: 2, text: 'У меня есть вопрос!)', isAssistant: false },
  { id: 3, text: 'Хочу сделать возврат', isAssistant: false },
])

const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

const sendMessage = () => {
  if (!text.value?.trim().length) return
  const lastId = (messages.value.at(-1)?.id + 1) || 1
  messages.value.push({id: lastId, text: text.value, isAssistant: false})
  text.value = ''
}

</script>

<template>
  <div class="container">
    <Close class="close" v-if="isChatOpen" @click="isChatOpen = false"/>
    <CircleDecoration v-else decoration="message" direction="up" size="regular" class="open" @click="isChatOpen = true"/>
    <div :class="['wrapper', {opened: isChatOpen}]">
      <div class="helper">
        <div class="avatar"></div>
        <div class="flex flex-column">
          <span class="font-20">Анастасия</span>
          <small class="font-12">Консультант</small>
        </div>
      </div>
      <div class="line"></div>
      <section class="messages">
        <div class="message-item" v-for="message in messages" :key="message.id" :class="{right: !message.isAssistant}">
          <div class="message-avatar" v-if="message.isAssistant"></div>
          <section>
            <div class="text">{{message.text}}</div>
            <div class="time" v-if="message.isAssistant">{{getTime()}}</div>
          </section>
        </div>
      </section>
      <div class="line"></div>
      <form @click="inputRef.focus" @submit.prevent="sendMessage">
        <label for="chat-file">
          <SvgLoader width="18" height="18" icon-name="attachment" @click.stop/>
          <input type="file" name="" id="chat-file" style="display: none">
        </label>
        <input v-model="text" ref="inputRef" type="text" placeholder="Введите сообщение">
        <SvgLoader width="20" height="20" icon-name="smile" @click.stop/>
        <SvgLoader width="20" height="20" icon-name="send" @click.stop/>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  bottom: 0;
  right: 15px;
  z-index: 2;
}
  .wrapper {
    width: 332px;
    border-radius: 15px;
    //position: fixed;
    //bottom: 0;
    //right: 15px;
    box-shadow: 0px 4px 20px 0px rgba(51, 51, 51, 0.05);
    background: #fff;
    height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s;
  }
  .opened {
    height: 620px;
  }
  .helper {
    padding: 14px;
    display: flex;
    gap: 10px;
    align-items: center;
    .avatar {
      width: 55px;
      height: 55px;
      background: #514A7E;
      border-radius: 50%;
    }
    small {
      color: #7D7D7D;
    }
  }
  .messages {
    padding: 36px 25px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 13px;
    overflow: hidden;
    overflow-y: auto;
  }
  .line {
    height: 0.5px;
    background: #7D7D7D;
  }
  form {
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      width: 100%;
      border: none;
      outline: none;
    }
  }

  .message-item {
    display: flex;
    gap: 12px;
    align-items: center;
    .message-avatar {
      width: 40px;
      height: 40px;
      background-color: #514A7E;
      border-radius: 50%;
    }
    section {
      box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.20);
      border-radius: 15px;
      padding: 9px 14px;
      color: #7D7D7D;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text {
        font-size: 12px;
        word-break: break-word;
      }
      .time {
        font-size: 8px;
        align-self: flex-end;
      }
    }
  }

  .right {
    align-self: flex-end;
  }

  .close {
    position: absolute;
    right: -15px;
    top: -15px;
  }
  .open {
    position: absolute;
    right: 0px;
    top: -50px;
  }

</style>