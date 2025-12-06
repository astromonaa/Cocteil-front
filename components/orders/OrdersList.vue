<template>
  <div class="orders">
    <div v-if="orders.length" class="orders__list">
      <div v-for="order in orders" :key="order.order.id" class="order-card">
        <div class="order-card__header">
          <div>
            <div class="order-card__id">Заказ #{{ order.order.id }}</div>
            <div class="order-card__date">
              {{ new Date(order.order.created_at).toLocaleDateString() }}
            </div>
          </div>

          <div class="order-card__status" :class="`order-card__status--${order.order.status.toLowerCase()}`">
            {{ getStatusText(order.order.status) }}
          </div>
        </div>

        <div class="order-card__details">
          <div class="order-card__info">
            <p><strong>Сумма:</strong> {{ order.order.total_amount }} {{ order.order.currency }}</p>
            <p><strong>Адрес доставки:</strong> {{ order.order.shipping_address }}</p>
            <p><strong>Метод оплаты:</strong> {{ order.order.payment_method }}</p>
          </div>
        </div>

        <div class="order-items">
          <h4 class="order-items__title">Товары в заказе</h4>
          <div class="order-items__grid">
            <div v-for="item in order.items" :key="item.id" class="item-card">
              <div class="item-card__image">
                <img :src="buildImagesPaths([item.images[0]])[0]" :alt="item.name" />
              </div>
              <div class="item-card__info">
                <h5 class="item-card__name">{{ item.name }}</h5>
                <p class="item-card__desc">{{ truncate(item.description, 80) }}</p>
                <p class="item-card__meta">
                  <span>Размер: {{ item.size }}</span> ·
                  <span>Кол-во: {{ item.quantity }}</span>
                </p>

                <div class="item-card__color">
                  <span class="item-card__color-dot" :style="{ backgroundColor: item.color }"></span>
                  <span class="item-card__color-code">Цвет</span>
                </div>

                <div class="item-card__price">{{ item.price }} ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="orders__empty">У вас пока нет заказов.</p>
  </div>
</template>

<script setup lang="ts">

import {buildImagesPaths} from "../../utils/utils";

interface IProps {
  orders: any[];
}

defineProps<IProps>();

function getStatusText(status: string) {
  switch (status) {
    case 'Paid': return 'Оплачен'
    case 'Pending': return 'Ожидает оплаты'
    case 'Canceled': return 'Отменён'
    default: return status
  }
}

function truncate(text: string, limit = 100) {
  return text.length > limit ? text.slice(0, limit) + '…' : text
}

</script>

<style scoped lang="scss">
.orders {
  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #111827;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__empty {
    font-size: 1rem;
    color: #777;
    text-align: center;
  }
}

.order-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  &__id {
    font-weight: 600;
    font-size: 1rem;
  }

  &__date {
    font-size: 0.875rem;
    color: #6b7280;
  }

  &__status {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 4px 10px;
    border-radius: 6px;
    text-transform: capitalize;

    &--paid {
      color: #166534;
      background-color: #dcfce7;
    }

    &--pending {
      color: #854d0e;
      background-color: #fef9c3;
    }

    &--canceled {
      color: #991b1b;
      background-color: #fee2e2;
    }
  }

  &__details {
    margin-bottom: 1rem;
    color: #374151;
  }
}

.order-items {
  &__title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }
}

.item-card {
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &__image {
    width: 100%;
    height: 160px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__info {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__name {
    font-weight: 600;
    font-size: 0.95rem;
  }

  &__desc {
    font-size: 0.875rem;
    color: #6b7280;
  }

  &__meta {
    font-size: 0.875rem;
    color: #4b5563;
  }

  &__price {
    font-weight: 700;
    margin-top: 0.25rem;
  }

  &__color {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;

    &-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #d1d5db;
    }

    &-code {
      font-size: 0.85rem;
      color: #4b5563;
    }
  }
}

/* 🌙 Тёмная тема */
@media (prefers-color-scheme: dark) {
  .orders__title {
    color: #f3f4f6;
  }

  .order-card {
    background-color: #1f2937;
    border-color: #374151;
    color: #e5e7eb;

    &__date {
      color: #9ca3af;
    }

    &__details {
      color: #e5e7eb;
    }
  }

  .item-card {
    background-color: #111827;
    border-color: #374151;

    &__desc,
    &__meta {
      color: #9ca3af;
    }

    &__color-code {
      color: #9ca3af;
    }

    &__color-dot {
      border-color: #6b7280;
    }
  }
}

/* 📱 Адаптивность */
@media (max-width: 600px) {
  .order-card {
    padding: 1rem;
  }

  .order-items__grid {
    grid-template-columns: 1fr;
  }
}
</style>
