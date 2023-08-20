<script setup lang="ts">
import {ref} from 'vue'
import CircleDecoration from "~/components/UI/CircleDecoration.vue";
const contactInfo = ref([
  {
    id: 1,
    open: false,
    title: 'Информация',
    subtitles: [
      {name: 'Главная'},
      {name: 'Акции'},
      {name: 'Каталог'},
      {name: 'Возврат'},
      {name: 'Доставка'},
      {name: 'Партнёрам'},
      {name: 'Способы оплаты'},
      {name: 'Как сделать заказ?'}
    ]
  },
  {
    id: 2,
    open: false,
    title: 'Мой кабинет',
    subtitles: [
      {name: 'Мои заказы'},
      {name: 'Мои адреса'},
      {name: 'Мои скидки'},
      {name: 'Моя информация'},
    ]
  },
  {
    id: 3,
    open: false,
    title: 'Сотрудничество',
    subtitles: [
      {
        name: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga fugit labore magnam necessitatibus nobis
          non odit, placeat quas recusandae repellat repudiandae saepe sapiente sint sunt tempora veniam voluptate
          voluptatibus?`
      }
    ]
  },
  {
    id: 4,
    open: false,
    title: 'Контакты',
    subtitles: [
      {
        name: `ИП Вишневский Иван Сергеевич
          государственная регистрация №690867884 от 31.07.2020.
          Логойским горисполкомом
          Защита прав потребителей +375259990755`
      }
    ]
  }
])
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <div
          v-for="item in contactInfo"
          :key="item.id"
          :class="['footer-left-item', {open: item.open}]"
          @click="item.open = !item.open"
      >
        <div>
          <span>{{item.title}}</span>
          <ClientOnly>
            <font-awesome-icon :icon="['fas', 'chevron-down']" style="color: #ffffff;" />
          </ClientOnly>
        </div>
        <ul v-if="item.id === 1 || item.id === 2">
          <li
              v-for="(subItem, idx) in item.subtitles"
              :key="idx"
              @click.stop
          >
            {{subItem.name}}
          </li>
        </ul>
        <template v-else>
          <p
              v-for="(subItem, idx) in item.subtitles"
             :key="idx"
          >{{subItem.name}}</p>
        </template>

      </div>
    </div>
    <div class="footer-right">
      <span>Мы в соц. сетях</span>
      <ul>
        <ClientOnly>
          <li class="social-links">
            <SvgLoader width="15" height="15" icon-name="telegram"/>
            <SvgLoader width="15" height="15" icon-name="instagram"/>
            <SvgLoader width="15" height="15" icon-name="mail"/>
            <SvgLoader width="15" height="15" icon-name="phone"/>
          </li>
        </ClientOnly>
        <li>+375255990755</li>
        <li>круглосуточно, без выходных</li>
      </ul>
    </div>
    <CircleDecoration :is-pink="false" decoration="arrow" direction="up" class="arrow-up"/>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    position: relative;
    background-color: #514A7E;
    padding: 43px 10px 200px 10px;
    display: flex;
    gap: 44px;
    &-left {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: rgba(255, 253, 245, 0.80);
      font-size: 10px;
      width: min-content;
      &-item {
        border-bottom: 0.5px solid #FFFDF5;
        ul, p {
          height: 0;
          overflow: hidden;
          transition: all 0.3s;
          will-change: height;
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 10px;
          li {
            font-size: 10px;
          }
        }
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
          span {
            font-size: 10px;
          }
          svg {
            transition: all 0.3s;
            will-change: transform;
          }
        }
      }
      .open {
        ul, p {
          height: 225px;
          padding: 15px 10px;
        }
        &>div svg {
          transform: rotate(-180deg);
        }
      }
    }
    &-right {
      color: rgba(255, 253, 245, 0.80);
      font-size: 10px;

      .social-links {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      span {
        font-size: inherit;
      }
      ul {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: inherit;
        li {
          font-size: inherit;
        }
      }
    }
  }
  .arrow-up {
    position: absolute;
    right: 10px;
    bottom: 202px;
  }
</style>