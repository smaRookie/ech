<template>
  <div class="main">
    <div>
      <h1 class="info_title">金融</h1>
    </div>
    <div class="seclect">
      <el-select v-model="value" placeholder="请选择" class="seclect_1">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择" class="seclect_2">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="main_con">
    </div>
    <div class="content">
      <h1></h1>
      <p></p>
    </div>
    <!-- <inforight></inforight> -->
    <tbottom></tbottom>
    <!-- <div class="pro_all">
    </div>
    <!-- <div class="liner"></div> -->
  </div>
</template>
<script>
/* eslint-disable */
  import tright from './layout/timeHisRight.vue'
  import tleft from './layout/timeHisLeft.vue'
  import tbottom from './layout/timeBottom.vue'
  import inforight from './layout/inforight.vue'
  import 'jquery'
  export default {
    name: 'homeHis',
    data () {
      return {
        pros: [{name: 'canping1', count: 8}, {name: 'canping2',  count: 6}],
        str: '字符串',
        out: false,
        value: '成都',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    mounted () {
      this.a()
    },
    methods: {

    },
    methods: {
      add (obj) {

      },
      mousedown (params) {
        console.log(params)
          this.pros = [{name: 'aaa', count: 8}, {name: 'dfsads',  count: 4}]
          let n = 0
          for (let j = 0; j < this.pros.length; j++) {
            for(let i = 0; i < this.pros[j].count; i++) {
              (function($this,i){
                setTimeout(function(){
                  $this.addClass('slip');
                },i*80)
              })($($(".ani")[n-1]),i);
            }
          }
      },
      proBar () {
        let proecharts = this.$echarts.init(document.getElementsByClassName('pro_all')[0])
        proecharts.setOption({
          

        })
      },
      a () {
          let lineEcharts = this.$echarts.init(document.getElementsByClassName('main_con')[0])
          lineEcharts.on('click', (params) => {
            // document.getElementsByClassName('content')[0].style.top = (params.event.event.offsetY + 20) + 'px'
            document.getElementsByClassName('content')[0].style.left = (params.event.event.offsetX - 100) + 'px'
            document.getElementsByClassName('content')[0].style.display = 'inline-block'
            document.getElementsByClassName('content')[0].style.opacity = 1
            document.getElementsByClassName('content')[0].style.height = '300px'
          })
          lineEcharts.on('mouseout', (params) => {
            let time = setTimeout(() => {
              if (!this.out) {
                document.getElementsByClassName('content')[0].style.opacity = 0
                document.getElementsByClassName('content')[0].style.height = '0px'
              } else {
                clearTimeout(time)
              }
            },300)
            
          })
          document.getElementsByClassName('content')[0].addEventListener('mouseover', () => {
            this.out = true
          })
          document.getElementsByClassName('content')[0].addEventListener('mouseout', () => {
            document.getElementsByClassName('content')[0].style.opacity = 0
            document.getElementsByClassName('content')[0].style.height = '0px'
            this.out = false
          })
          lineEcharts.setOption({
              tooltip: {
                  formatter: (params) => {
                      // return `${this.str}</br>{b}</br>{c}`
                  }
              },
              xAxis: {
                  type: 'value',
                  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                  show: false,
                  splitLine: {
                      show: false
                  }
                //   min: new Date('2017-01'),
                //   max: new Date('2017-12')
              },
              yAxis: {
                type: 'value',
                min: 1,
                max: 100,
                show: false,
                splitLine: {
                    show: false
                },
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              series: {
                  name: 'a',
                  type: 'line',
                  symbolSize: 18,
                  data:[
                      [1, 55],
                      [1.5, 55],
                      [2, 55],
                      [3, 55],
                      [4, 55],
                      [5, 55],
                      [6, 55],
                      [7, 55],
                      [8, 55]
                    ]
              }
          })
      }
    },
    components: {
      tright,
      tleft,
      tbottom,
      inforight
    }
  }
</script>
<style lang="less" scoped>
  .liner {
    width: 80%;
    height: 5px;
    position: absolute;
    background-color: #3c3c3c;
    bottom: 50px;
    margin: 0 auto;
  }
  .content {
    position: absolute;
    width: 200px;
    height: 0;
    top: 35%;
    background-color: #fff;
    // display: none;
    opacity: 0;
    transition: opacity .3s;
    transition: height .3s;
    border-radius: 10px;
  }
  .main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('./../common/img/bj.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .info_title {
      color: #fff;
      font-size: 2.5rem;
      text-align: center;
      height: 56px;
      line-height: 56px;
      margin-bottom: 10px;
    }
    .seclect_1, .seclect_2 {
      margin-left: 20px;
      margin-bottom: 10px;
      display: block;
      width: 200px;
      z-index: 200;
    }
  }
  .main_con {
    width: 65%;
    height: 65%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .pro_all {
    width: 65%;
    height: 30%;
    position: absolute;
    top: 30%;
    left: 0;
    .pro1 {
      color: #fff;
      width: 100%;
      height: 20px;
      line-height: 20px;
      margin-top: 10px;
      vertical-align: middle;
      em {
        width: 100px;
        text-align: center;
        display: inline-block;
      }
      span {
        display: inline-block;
        width: 30px;
        height: 20px;
        margin-left: 10px;
        border-radius: 10px;
        background-color: #3c3c3c;
      }
      span:first-child {
        margin-left: 20px;
      }
      p {
        height: 20px;
        line-height: 20px;
        width: 100%;
        display: flex;
        align-items: center;/*垂直居中*/
      }
      .slip {
        background-color: #61A0A8;
      }
    }
  }
</style>

