<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-item">
      <b>Информация</b>
      <ul>
        <li>Главная</li>
        <li>Акции</li>
        <li>Каталог</li>
        <li>Возврат</li>
        <li>Доставка</li>
        <li>Партнёрам</li>
        <li>Способы оплаты</li>
        <li>Как сделать заказ?</li>
      </ul>
    </div>
    <div class="footer-item">
      <b>Мой кабинет</b>
      <ul>
        <li>Мои заказы</li>
        <li>Мои адреса</li>
        <li>Мои скидки</li>
        <li>Моя информация</li>
      </ul>
    </div>
    <div class="footer-item">
      <b>Контактная информация</b>
      <p>ИП Вишневский Иван Сергеевич
        государственная регистрация №690867884 от 31.07.2020.
        Логойским горисполкомом
        Защита прав потребителей +375259990755</p>
    </div>
    <div class="footer-item">
      <b>Соц. сети</b>
      <ul>
        <li class="social-links">
          <SvgLoader width="15" height="15" icon-name="telegram"/>
          <SvgLoader width="15" height="15" icon-name="instagram"/>
          <SvgLoader width="15" height="15" icon-name="mail"/>
          <SvgLoader width="15" height="15" icon-name="phone"/>
        </li>
        <li>+375255990755</li>
        <li>круглосуточно, без выходных</li>
      </ul>
    </div>
    <div class="logo">
      <img src="/img/logo.png" alt="Логотип">
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  padding: 80px 250px 80px 135px;
  background: rgba(81, 74, 126, 1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, auto));
  margin-top: 150px;
  color: #FFFDF5;
  font-weight: 400;

  b {
    font-size: 20px;
    margin-bottom: 20px;
    display: inline-block;
  }

  ul, p {
    max-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: inherit;
  }

  p {
    font-weight: 300;
    font-size: 12px;
  }
  .logo {
    position: absolute;
    right: 133px;
    bottom: 87px;
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(81, 74, 126, .3);

    }
  }

}

.social-links {
  display: flex;
  align-items: center;
  gap: 15px;

  & ~ li {
    font-size: 12px;
  }
}
</style>