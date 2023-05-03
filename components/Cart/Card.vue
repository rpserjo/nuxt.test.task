<script setup>
  import {toRefs} from 'vue';

  const props = defineProps(['item']);

  const { item } = toRefs(props);
</script>

<template>
  <div class="recent-card">
    <div class="recent-card__img">
      <img :src="item.image.src" />
    </div>
    <div class="recent-card__description">
      <h3>{{ item.short_name }}</h3>
      <p>{{ item.description }}</p>
    </div>
    <div class="recent-card__prices">
      <h3>6 848 &#8381; - 56 584 &#8381;</h3>
      <h4>77.60 &euro; - 643.86 &euro;</h4>
    </div>
    <div class="recent-card__btn">
      <UIButton>Подробнее</UIButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .recent-card{
    width: 305px;
    background-color: var(--recent-card-background);
    padding: 25px;
    display: flex;
    flex-direction: column;

    &__img{
      width: 245px;
      height: 245px;

      img{
        width: 100%;
      }
    }

    &__description{

      h3{
        line-height: 120%;
        font-size: 22px;
        margin-bottom: 10px;
      }

      p{
        font-size: 14px;
        height: 99px;
      }
    }

    &__prices{
      margin-top: 59px;

      h3{
        font-size: 22px;
        line-height: 130%;
      }

      h4{
        font-size: 16px;
        line-height: 145%;
        color: var(--color-lightgray);
      }
    }

    &__btn{
      margin-top: 20px;

      button{
        font-size: 16px;
      }
    }
  }
</style>