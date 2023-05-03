<script setup>
  import { useCart } from '../../store/cart';
  import { computed, toRefs } from 'vue';

  const props = defineProps(['product']);

  const { product } = toRefs(props);
  
  const cartStore = useCart();
  
  const updateQuantity = (item, quantity) => {
    if(quantity < 1) return;
    cartStore.updateQuantity(item, quantity);
  }

  const total = computed(() => props.product.price * props.product.quantity);

  const handleRemove = () => {
    cartStore.removeItem(product.id);
  }
</script>
<template>
  <div class="cart-element">
    <div
        class="cart-element__image"
        :title="product.image.title"
        :style="{backgroundImage: `url('${product.image.src}')`}"
    ></div>
    <div class="cart-element__description">
      <div class="text16">
        {{ product.product_name }}
      </div>
      <div>
        {{ product.product_description }}
      </div>
      <div class="text14 text-gray">
        Артикул: {{ product.part_number }}
      </div>
    </div>
    <div class="amount">
      <div class="amount__buttons">
        <button class="amount__button" @click="updateQuantity(product, product.quantity - 1)">-</button>
        <div class="amount__count">{{ product.quantity }}</div>
        <button class="amount__button" @click="updateQuantity(product, product.quantity + 1)">+</button>
      </div>
      <div v-if="product.quantity > 1" class="product__price">{{ product.price.toLocaleString('ru') }} &#8381; /шт.</div>
    </div>
    <div class="cart-element__total">
      <div class="text18">
        {{ total.toLocaleString('ru') }} &#8381;
      </div>
    </div>
    <div class="cart-element__remove" @click="handleRemove">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5"/>
        <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5"/>
      </svg>
    </div>
  </div>
</template>

<style lang="less">
  .cart-element{
    width: 800px;
    margin-bottom: 25px;
    display: flex;
    height: 120px;
    padding-bottom: 20px;
    position: relative;

    &__remove{
      position: absolute;
      right: 6px;
      top: 1px;
      cursor: pointer;
    }

    &__image{
      width: 100px;
      height: 100px;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: var(--image-background-color);
      margin: 0 30px 20px 15px;
    }

    &__description{
      width: 263px;
      margin-right: 25px;

      div{
        margin: 9px 0;
      }
    }

    &__amount{

    }

    &__total{
      flex-shrink: 1;
      align-items: center;
      display: flex;
      margin-left: 80px;
    }
  }
  .cart-element:not(:last-of-type){
    border-bottom: 1px solid var(--color-dark3);
  }

  .amount{
    display: flex;
    flex-shrink: 1;
    align-items: center;
    position: relative;
    margin-left: 80px;

    &__buttons{
      display: flex;
      gap: 2px;
    }

    &__button{
      width: 34px;
      height: 34px;
      background-color: var(--color-gray3);
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      line-height: 34px;
      border: none;
    }

    &__button:first-of-type{
      border-radius: 4px 0 0 4px;
    }

    &__button:last-of-type{
      border-radius: 0 4px 4px 0;
    }

    &__count{
      font-size: 14px;
      width: 34px;
      height: 34px;
      line-height: 34px;
      background-color: var(--color-gray3);
      text-align: center;
    }

    .product__price{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
</style>

