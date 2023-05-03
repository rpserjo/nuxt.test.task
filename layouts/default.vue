<template>
    <div class="wrapper">
        <Header/>
        <slot/>
    </div>
</template>

<style lang="less">
  .wrapper{
    display: flex;
    flex-direction: column;
  }
</style>