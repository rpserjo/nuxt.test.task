<script setup>
  import { useCart } from '../../store/cart';
  import { computed } from 'vue';

  const cartStore = useCart();
  
  const priceTotal = computed(() => {
    return cartStore.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  const orderHandle = () => {
    const order = cartStore.cart.map(el => {
      return { id: el.id, count: el.quantity };
    });
    
    const data = { order, installation: cartStore.installation };
    
    console.log(data);
  }
</script>

<template>
  <div class="summary">
    <h2>Итого</h2>
    <p>Сумма заказа <span>{{ priceTotal.toLocaleString('ru') }} &#8381;</span></p>
    <p>Количество <span>{{ cartStore.cartQuantity }} шт.</span></p>
    <p>Установка <span>{{ cartStore.installation ? 'да' : 'нет' }}</span></p>
    <div class="summary__total">
      <p>Стоимость товаров <span>{{ priceTotal.toLocaleString('ru') }} &#8381;</span></p>
    </div>
    <div class="summary__buttons">
      <UIButton @click="navigateTo('#order')">Оформить заказ</UIButton>
      <UIButton @click="orderHandle" :outline="true">Купить в 1 клик</UIButton>
    </div>
  </div>
</template>

<style lang="less">
  .summary{
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    background-color: #F6F8FA;
    border-radius: 5px;
    margin-top: 163px;
    margin-left: 55px;
    width: 100%;
    height: fit-content;
    max-width: 425px;

    h2{
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
      margin-bottom: 31px;
    }

    p{
      font-weight: 500;
      font-size: 16px;
      line-height: 145%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 17px;

      &:last-of-type{
        margin-bottom: 0;
      }

      span{
        font-size: 16px;
      }
    }

    &__total{
      border-top: 1px solid var(--total-border-color);
      margin-top: 28px;
      padding: 10px 0;

      p{
        line-height: 145%;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        span{
          font-size: 26px;
          font-weight: 700;
        }
      }
    }

    &__buttons{
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
