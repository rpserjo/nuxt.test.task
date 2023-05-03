<script setup>

</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="less">
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  @dark: #1f2432;
  @gray: #797b86;
  @light: #e5e5e5;
  @white: #fff;
  @gray2: #aeb0b6;
  @gray3: #f6f8fA;
  @lightgray: #797b86;
  @lightgray2: #90a2b5;
  @primary: #0069b4;
  @dark2: #212121;
  @light2: #f6f8fa;
  @dark3: #c4c4c4;
  @dark4: #c4c4c4;

  :root{
    --text-color: @dark;
    --gray-color: @gray;
    --background-color: @light;
    --image-background-color: @white;
    --total-border-color: @gray2;
    --recent-card-background: @gray3;
    --color-gray3: @gray3;
    --primary-color: @primary;
    --white-color: @white;
    --color-lightgray: @lightgray;
    --color-light: @light2;
    --swiper-pagination-color: @lightgray2;
    --color-dark: @dark2;
    --color-dark3: @dark3;
    --color-dark4: @dark4;
  }
  *{
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: var(--text-color);
    box-sizing: border-box;
  }

  .container{
    /*width: 100%;*/
    width: 1280px;
    max-width: 1280px;
    position: relative;
    margin: 0 auto;
    padding: 5px;
  }

  .text16{
    font-size: 16px;
    font-weight: 600;
  }
  .text18{
    font-size: 18px;
    font-weight: 700;
  }

  .text14{
    font-size: 14px;
  }

  .text-gray{
    color: var(--gray-color);
  }
</style>
