<template>
  <div class="timebottom">
      <div class="item1">
          <h1>安全事件</h1>
          <p>
              <span>时间</span>
              <span>虚拟机</span>
              <span>安全事件描述</span>
            </p>
            <p>
              <span>2017-12</span>
              <span>win32</span>
              <span>描述信息</span>
            </p>
      </div>
      <!-- <div class="item2">
          <h1>发展趋势</h1>
      </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='less'>
    .timebottom {
        width: 100%;
        position: absolute;
        bottom: 0;
        // height: 35%;
        height: 30%;
        box-sizing: border-box;
        background-color: #1e1e1e;
        display: flex;
        justify-content: space-between;
        .item1 {
            width: 100%;
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            // margin-right: 4%;
            font-size: 0;
            border-right: 1px solid #3c3c3c;
            border-left: 1px solid #3c3c3c;
            h1 {
                width: 100%;
                height: 40px;
                background-color: rgba(51, 153, 204, .2);
                font-size: 16px;
                box-sizing: border-box;
                padding-left: 20px;
                line-height: 40px;
                color: #fff;
                display: inline-block;
            }
            p {
                width: 100%;
                height: 30px;
                line-height: 30px;
                display: inline-block;
                span {
                    display: inline-block;
                    width: calc(~'100% / 3');
                    height: 30px;
                    text-align: center;
                    color: #fff;
                    font-size: 18px;
                }
            }
        }
        .item2 {
            width: calc(~'100% - 53%');
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            font-size: 0;
            border-right: 1px solid #3c3c3c;
            border-left: 1px solid #3c3c3c;
            h1 {
                width: 100%;
                height: 40px;
                background-color: rgba(51, 153, 204, .2);
                font-size: 16px;
                box-sizing: border-box;
                padding-left: 20px;
                line-height: 40px;
                color: #fff;
                display: inline-block;
            }
        }
    }
</style>


