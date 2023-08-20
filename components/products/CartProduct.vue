<script setup lang="ts">

</script>

<template>
  <div class="cart-product">
    <div class="img-wrapper" @click="$router.push('/product/1')">
      <img src="/img/product2.jpg" alt="product card">
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
      <div class="controls">
        <div>
          <SvgLoader width="20" height="20" icon-name="like"/>
          <span>В избранное</span>
        </div>
        <div>
          <SvgLoader width="20" height="20" icon-name="trash"/>
          <span>Удалить</span>
        </div>
      </div>
    </div>
    <div class="price">
      <span>Стоимость</span>
      <strong>50.00</strong>
      <div>Информация о доставке <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cart-product {
    display: flex;
    gap: 50px;
    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .controls {
        display: flex;
        align-items: center;
        gap: 30px;
        div {
          display: flex;
          align-items: center;
          gap: 7px;
          position: relative;
          cursor: pointer;
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #514A7E;
            border-radius: 5px;
            left: 0;
            bottom: -6px;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.3s;
          }
          &:hover:after {
            transform: scale(1);
            transform-origin: left;
          }
        }
      }
    }
    .img-wrapper {
      width: 178px;
      height: 165px;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;
        will-change: transform;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .product-name {
    display: flex;
    gap: 14px;
    align-items: center;
    span {
      color: #121212;
      font-size: 20px;
      font-weight: 400;
    }
    small {
      color: #7D7D7D;
      line-height: 118%
    }
  }
  .characteristics {
    display: flex;
    align-items: center;
    gap: 20px;
    small {
      color: #7D7D7D;
      line-height: 118%;
    }
  }
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 22px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      color: #514A7E;
      font-size: 20px;
      cursor: pointer;
    }
    span {
      width: 20px;
      height: 20px;
      font-size: 20px;
      color: #514A7E;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 206px;
    span {
      color: #121212;
      font-size: 20px;
      font-weight: 400;
    }
    strong {
      color: #514A7E;
      font-size: 40px;
      font-weight: 400;
      line-height: 118%;
    }
    div {
      margin-top: auto;
      color: #514A7E;
      line-height: 118%;
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
</style>