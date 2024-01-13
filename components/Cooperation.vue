<script setup lang="ts">

const {isMobile} = useDevice()

</script>

<template>
  <div :class="['wrapper start-pos', {'mobile-wrapper': isMobile}]" v-showBlock>
    <h2>Сотрудничество с нами</h2>
    <p>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем
      новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </p>
    <section class="cooperation-items">
      <div>
        <span>Становитесь партнёром</span>
        <small>
          Регистрируйтесь и
          переходите в свой кабинет
        </small>
      </div>
      <div>
        <span>Рекламируйте товары</span>
        <small>
          Рекламируйте наши товары
          на форумах, сайтах, в социальных сетях
        </small>
      </div>
      <div>
        <span>Приводите покупателей</span>
        <small>
          Приводите покупателей на
          наш сайт по уникальной ссылке
        </small>
      </div>
      <div>
        <span>Получайте бонусы</span>
        <small>
          Копите бонусы от каждого оплаченного заказа
        </small>
      </div>
    </section>
    <h3>{{isMobile ? '' : 'Это выгодно.'}} Какие преимущества?</h3>
    <section class="advantages-items">
      <div>
        <ClientOnly>
          <SvgLoader width="30" height="30" icon-name="setting"/>
        </ClientOnly>
        <span>Автоматизация процессов</span>
      </div>
      <div>
        <ClientOnly>
          <SvgLoader width="30" height="30" icon-name="list"/>
        </ClientOnly>
        <span>Пополнение ассортимента</span>
      </div>
      <div>
        <ClientOnly>
          <SvgLoader width="30" height="30" icon-name="employee"/>
        </ClientOnly>
        <span>Поддержка и обучение</span>
      </div>
      <div>
        <ClientOnly>
          <SvgLoader width="30" height="30" icon-name="coin-bag"/>
        </ClientOnly>
        <span>Бонусы за новых клиентов</span>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@mixin gridWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 80px;
}

.wrapper {
  margin-top: 150px;
  padding: 0 135px;
  line-height: 118%;

  p {
    color: #7D7D7D;
    font-size: 16px;
    margin-top: 73px;
    margin-bottom: 60px;
    line-height: inherit;
  }

  h3 {
    margin-top: 60px;
    margin-bottom: 60px;
    color: #121212;
    font-size: 20px;
  }
}

.cooperation-items {
  @include gridWrapper();

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    span {
      color: #121212;
      font-size: 20px;
      font-weight: 400;
      line-height: inherit;
    }

    small {
      line-height: inherit;
      color: #7D7D7D;
      font-size: 12px;
    }
  }
}

.advantages-items {
  @include gridWrapper();

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}


.mobile-wrapper {
  margin-top: 60px;
  padding: 0 10px;
  text-align: center;

  h2 {
    font-size: 25px;
  }
  h3 {
    margin: 60px 0 30px;
    font-size: 25px;
  }

  p {
    margin: 30px 0;
    font-size: 12px;
  }

  .cooperation-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 25px;

    div {
      padding: 31px;
      background-color: #514A7E;
      border-radius: 10px;
      span {
        color: #FFFDF5;
        text-align: center;
        font-size: 12px;
      }

      small {
        display: none;
      }
    }
  }
  .advantages-items {
    row-gap: 38px;
  }
}
</style>