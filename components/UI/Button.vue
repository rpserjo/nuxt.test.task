<script setup>
  const props = defineProps(['outline']);
</script>

<template>
  <button class="btn" :class="{'outline' : props.outline}">
    <slot />
  </button>
</template>

<style lang="less" scoped>
  .btn{
    width: 100%;
    padding: 0;
    height: 54px;
    background-color: var(--primary-color);
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: var(--white-color);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    cursor: pointer;

    &.outline{
      color: var(--primary-color) !important;
      background-color: var(--white-color) !important;
    }
  }
</style>
