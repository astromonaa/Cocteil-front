<script setup lang="ts">
import {ref} from 'vue'

interface IFAQ {
  open: boolean;
  title: string;
  text: string;
}
const faq= ref<IFAQ[] >([
  {
    open: false,
    title: "Как сделать заказ?",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Способы оплаты",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Доставка",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Сроки доставки",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Как сделать обмен?",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Как сделать возврат?",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
  {
    open: false,
    title: "Куда и когда вернутся деньги за возвращённый товар?",
    text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
  },
])

const openFaq = (faqItem:IFAQ) => {
  faqItem.open = !faqItem.open
}

const {isMobile} = useDevice()
</script>

<template>
  <div :class="['wrapper start-pos', {'mobile-wrapper': isMobile}]" v-showBlock>
    <h2>Часто задаваемые вопросы</h2>
    <span class="cursive subtitle">FAQ</span>
    <div
        v-for="faq in faq" :key="faq.title"
        :class="[{open: faq.open}, 'detail']"
        @click="openFaq(faq)"
    >
      <div class="detail-top">
        <span>{{ faq.title }}</span>
      </div>
      <div class="detail-bottom">{{ faq.text }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 150px;
  padding: 0 135px;
}

.subtitle {
  margin-left: 46%;
  margin-top: -25px;
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 26px;
  //max-height: 200px;
}

.detail-bottom {
  height: 0;
  overflow: hidden;
  border-bottom: 1px solid #7D7D7D;
  transition: all 0.3s;
  padding-left: 0;
  padding-right: 40px;
  color: #7D7D7D;
  font-size: 16px;
  line-height: 118%;
  margin-top: 17px;
}

.detail-top {
  position: relative;
  height: 24px;
  cursor: pointer;
  &>span {
    color: #121212;
    font-size: 20px;
    font-weight: 400;
  }

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    background: url(/img/svg/20x20/plus.svg);
    right: 0;
    transition: transform 0.3s;
    will-change: transform;
  }
}

.open {
  .detail-bottom {
    height: 170px;
    padding: 40px 40px 40px 0;
    margin-top: 0;
  }
  &>.detail-top:after {
    transform: rotate(45deg);
  }
}



.mobile-wrapper {
  margin-top: 60px;
  padding: 0 10px;
  h2 {
    font-size: 25px;
    & ~ .subtitle {
      font-size: 25px;
      margin-left: 80%;
      margin-top: 0;
      margin-bottom: 30px;
    }
  }

  .detail:last-child > .detail-bottom {
    margin-top: 40px;
  }


  .detail-bottom {
    padding-right: 10px;
  }

  .open {
    .detail-bottom {
      height: 370px;
      padding: 10px 10px 10px 0;
    }
  }
}
</style>