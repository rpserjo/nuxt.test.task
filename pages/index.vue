<script setup>
  import { useCart } from '../store/cart';
  import Summary from '../components/Cart/Summary';

  useHead({
    title: 'Basket'
  });

  const cartStore = useCart();
</script>

<template>
  <main class="container">
    <Bread-crumbs />
    <div class="cart-wrapper">
      <div class="cart">
        <CartHead />
        <CartElement  v-for="product in cartStore.cart" :key="product" :product="product" />
        <CartInstallation />
      </div>
      <Summary />
    </div>
    <CartRecent />
  </main>
</template>

<style>
.cart-wrapper{
  display: flex;
}
.cart{
  width: 800px;
}
</style>
