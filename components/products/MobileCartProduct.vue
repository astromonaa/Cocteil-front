<script setup lang="ts">

</script>

<template>
  <div class="cart-product-item">
    <section>
      <div class="img-wrapper">
        <img src="/img/product4.jpg" alt="Product Item">
      </div>
      <div class="description">
        <div class="product-name">
          <span>Платье женское </span>
          <small>Арт 09456784</small>
        </div>
        <div class="characteristics">
          <small>Цвет: синий</small>
          <small>Размер: 34</small>
        </div>
        <div class="quantity-controls">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span class="price-label">Стоимость</span>
        <div class="price">
          <strong>50.00</strong>
          <div>
            <SvgLoader width="15" height="15" icon-name="like"/>
            <span>В избранное</span>
          </div>
        </div>
      </div>
    </section>
    <div class="cart-bottom">
      <div>
        <SvgLoader width="15" height="15" icon-name="trash"/>
        <span>Удалить</span>
      </div>
      <div>Информация о доставке <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-product-item {
  padding: 25px 10px;
  border-radius: 10px;
  background: #FFFDF5;
  box-shadow: 0px 4px 10px 0px rgba(81, 74, 126, 0.20);
  section {
    display: grid;
    grid-template-columns: minmax(100px, 124px) 1fr;
    column-gap: 17px;
  }
}
.img-wrapper {
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.product-name {
  display: flex;
  gap: 14px;
  align-items: center;
  span {
    color: #121212;
    font-size: 12px;
    font-weight: 400;
  }
  small {
    font-size: 10px;
    color: #7D7D7D;
    line-height: 118%
  }
}

.characteristics {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 8px;
  small {
    font-size: 10px;
    color: #7D7D7D;
    line-height: 118%;
  }
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    color: #514A7E;
    font-size: 14px;
    cursor: pointer;
  }
  span {
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #514A7E;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
}
.price-label {
  font-size: 12px;
  font-weight: 400;
}
.price {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  strong {
    color: #514A7E;
    font-size: 18px;
    font-weight: 400;
    line-height: 118%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 7px;
    span {
      font-size: 12px;
    }
  }
}

.cart-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  div {
    display: flex;
    align-items: flex-end;
    gap: 7px;
    color: #514A7E;
    font-size: 12px;
    span {
      font-size: 12px;
    }
  }
}
</style>