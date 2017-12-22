<template>
  <div class="infoleft">
    <div class="item"></div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  .infoleft {
    position: absolute;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .item {
      width: 100%;
      min-width: 200px;
      height: 240px;
      border: 1px solid #3c3c3c;
    }
  }
</style>

