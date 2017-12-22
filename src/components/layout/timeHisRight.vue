<template>
  <div class="timeright">
    <!-- <p class="righttitle">最近一小时</p> -->
    <div class="right_items">
      <div class="right_item" v-for="item in dataList" ref="itemecharts">

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'timeright',
    data () {
      return {
        dataList: [
          {'title': '用户行为分析', 'name': ['移动端', '客户端', '其他'], 'value': ['20', '36', '12']},
          {'title': '用户行为分析', 'name': ['移动端', '客户端', '其他'], 'value': ['20', '36', '12']},
          {'title': '用户行为分析', 'name': ['移动端', '客户端', '其他'], 'value': ['20', '36', '12']}
        ]
      }
    },
    mounted () {
      console.log(this.$refs.itemecharts)
      this.rightEcharts()
    },
    methods: {
      rightEcharts () {
        let elitem = this.$refs.itemecharts
        let itemecharts1 = this.$echarts.init(elitem[0])
        let itemecharts2 = this.$echarts.init(elitem[1])
        let itemecharts3 = this.$echarts.init(elitem[2])
        itemecharts1.setOption({
          title: {
            text: 'dd',
            left: 'center',
            top: 10,
            textStyle: {
              color: '#fff'
            }
          },
          series: [{
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎'}
            ]
          }]
        })
        itemecharts2.setOption({
          title: {
            text: 'dw',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#fff'
            }
          },
          series: [{
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎'}
            ]
          }]
        })
        itemecharts3.setOption({
          title: {
            text: 'dw',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#fff'
            }
          },
          series: [{
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎'}
            ]
          }]
        })
      }
    },
    components: {
    }
  }
</script>
<style lang='less' scoped>
    .timeright {
      position: absolute;
      right: 0;
      width: 35%;
      height: 100%;
      box-sizing: border-box;
      .righttitle {
        width: 100%;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 0 10px;
      }
      .right_items {
        height: calc(~'100% - 35%');
      }
      .right_item {
        width: 100%;
        height: calc(~'100% / 3');
        box-sizing: border-box;
        padding: 5px;
        border-bottom: 1px solid #3c3c3c;
        border-left: 1px solid #3c3c3c;
      }
      .right_item:last-child {
        border-bottom: none;
      }
    }
</style>

