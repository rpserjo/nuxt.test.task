<script setup>
  const path = [
    {
      title: 'Главная',
      to: '#index'
    },
    {
      title: 'Корзина',
      to: '#cart'
    },
  ];
</script>
<template>
  <ul class="breadcrumbs">
    <li v-for="link in path" :key="link.to">
      <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="less">
.breadcrumbs{
  list-style: none;
  display: flex;

  li{
    display: flex;

    a {
      font-size: 14px;
      text-decoration: none;
    }

    &:not(:last-child){
      padding-right: 15px;
      margin-right: 10px;
      position: relative;

      &::before{
        border-width: 4px 0 4px 4px;
        content: '';
        position: absolute;
        top: 45%;
        -webkit-transform: translateY(-32%);
        -ms-transform: translateY(-32%);
        transform: translateY(-32%);
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent transparent transparent var(--color-dark4);
      }
    }
  }
}
</style>
