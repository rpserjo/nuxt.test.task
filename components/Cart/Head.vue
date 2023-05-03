<script setup>
import { numWord } from '../../utils/numWord';
import { useCart } from '../../store/cart';
import { computed } from 'vue';

const cartStore = useCart();

const itemsTotal = computed(() => {
  return `${cartStore.cartQuantity} ${numWord(cartStore.cartQuantity, ['товар', 'товара', 'товаров'])}`;
});

const resetCart = () => {
  cartStore.resetCart();
}

const addRandomElement = () => {
  cartStore.addRandomElement();
}

</script>
<template>
  <div class="cart-head">
    <h1>Ваша корзина</h1>
    <p class="cart-head__total">{{ itemsTotal }}</p>
    <span class="cart-head__reset" @click="addRandomElement">Добавить</span>
    <span class="cart-head__reset" @click="resetCart">Очистить корзину</span>
  </div>
</template>

<style lang="less" scoped>
  .cart-head{
    margin-top: 60px;
    margin-bottom: 50px;
    display: flex;
    align-items: baseline;
    gap: 22px;

    h1{
      font-size: 44px;
    }

    &__total{
      font-size: 18px;
      color: var(--gray-color);
      flex-grow: 1;
    }

    &__reset{
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
      color: var(--gray-color);
    }
  }
</style>
