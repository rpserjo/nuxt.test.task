<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import mockCatalog from '../../store/mockCatalog';
    
    const recentItems = [...mockCatalog, ...mockCatalog];
</script>

<template>
    <div class="cart-recent">
      <h1>Просмотренные товары</h1>
        <Swiper
            :modules="[Pagination, Navigation]"
            :slides-per-view="4"
            :space-between="20"
            :pagination="{
                type: 'fraction',
            }"
            :navigation="true"
        >
            <SwiperSlide v-for="(item, index) in recentItems" :key="index">
              <CartCard :item="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="less">
    .cart-recent{
        margin-top: 95px;

        h1{
          font-size: 30px;
          font-weight: 700;
          line-height: 120%;
        }
    }
    
    .swiper{
        position: relative;
        top: -47px;
        padding-top: 97px;
    }
    
    .swiper-pagination-current{
        font-size: 24px;
        line-height: 150%;
        font-weight: 500;
        color: var(--color-dark);
    }

    .swiper-pagination-total{
      font-size: 18px;
      line-height: 150%;
      color: var(--color-lightgray);
    }
    
    .swiper-pagination-fraction{
        top: 0;
        bottom: auto;
        width: auto;
        right: 0;
        left: auto;
    }
    
    .swiper-button-next{
        width: 50px;
        height: 50px;
        top: 25px;
        background: var(--swiper-pagination-color);
        border-radius: 50%;
        
        &::after{
            color: var(--white-color);
            font-size: 20px;
        }
    }
    
    .swiper-button-prev{
        width: 50px;
        height: 50px;
        top: 25px;
        left: auto;
        right: 130px;
        background: var(--swiper-pagination-color);
        border-radius: 50%;
        
        &::after{
            color: var(--white-color);
            font-size: 20px;
        }
    }
    
    .swiper-pagination{
        font-size: 18px;
        color: var(--color-lightgray);
        top: 10px;
        right: 70px;
    }
</style>
