<template>
  <div class="details">
      <h1 class="details_title">{{title}}</h1>
      <button @click="get()">dianji</button>
      <div class="details_content">
        <div class="content_describe">
          <!-- <transition enter-active-class="bounceIn" live-active-class="bounceIn"> -->
          <transition enter-active-class="bounceIn" leave-active-class="fadeOut">
            <div class="con animated" v-show="show">
              <h1>{{contentTitle}}</h1>
              <p>{{contentDetails}}</p>
            </div>
          </transition>
        </div>
        <div class="content_right" id="grid">
          <div class="chart"></div>
        </div>
      </div>
      <div class="axis">
          <div class="axis_step"  v-for="(item, index) in this.num">
            <div class="step_time" @click="add(item, index)" ref="step_time" :class="{'step_time_active': timeShow, 'active': index === 0}">
              {{item.date}}
            </div>
            <div class="step_title" ref="step_title" v-show="timeShow" :class="{'ac': index === 0}">
              {{item.title}}
            </div>
          </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import animate from 'animate.css'
import {getDate} from './../common/js/com'
export default {
  data () {
    return {
      title: '详情',
      contentTitle: '标题1',
      contentDetails:　'内容1111111111111',
      show: false,
      timeShow: false,
      num: [
        {'date': '05/01', 'title': '标题1', 'content': '内容1111111111111111111111'},
        {'date': '06/01', 'title': '标题2', 'content': '内容2222222222222222222222'},
        {'date': '07/01', 'title': '标题3', 'content': '内容3333333333333333333333'},
        {'date': '08/01', 'title': '标题4', 'content': '内容4444444444444444444444'},
        {'date': '09/01', 'title': '标题5', 'content': '内容5555555555555555555555'},
        {'date': '10/01', 'title': '标题6', 'content': '内容6666666666666666666666'},
        {'date': '11/01', 'title': '标题7', 'content': '内容77777777777777777777777'}
      ],
      da: '',
      d: [
        [12, 32, 26, 41],
        [22, 32, 46, 11],
        [26, 22, 36, 31],
        [16, 12, 66, 11],
        [36, 42, 56, 41],
        [26, 29, 76, 91],
        [36, 49, 16, 61]
      ]
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    removeClass () {
      let tep_time = this.$refs.step_time
      let tep_title = this.$refs.step_title
      for (let i =0; i< tep_time.length; i++) {
        tep_time[i].classList.remove('active')
        tep_title[i].classList.remove('ac')
      }
    },
    add (item, index) {
      let tep_time = this.$refs.step_time
      let tep_title = this.$refs.step_title
      if (tep_time[index].classList.contains('active')) {
        return
      } else {
        this.show = false
        this.removeClass()
        tep_time[index].classList.add('active')
        this.da = this.d[index]
        setTimeout(() => {
          tep_title[index].classList.add('ac')
          this.contentTitle = item['title']
          this.contentDetails = item['content']
          this.show = true
          this.drawChart ()
        }, 200)
      }
    },
    get () {
      this.timeShow = false
      this.show = false
      this.removeClass()
      getDate('http://rap.taobao.org/mockjs/30352/d1').then(() => {
        setTimeout(() => {
          let tep_time = this.$refs.step_time
          let tep_title = this.$refs.step_title
          tep_time[0].classList.add('active')
          tep_title[0].classList.add('ac')
          this.da = this.d[0]
          this.drawChart ()
          this.contentTitle = this.num[0]['title']
          this.contentDetails = this.num[0]['content']
          this.timeShow = true
          this.show = true
        }, 300);
      }).catch((err) => {
        console.log(err)
      })
    },
    drawChart () {
      let chart = this.$echarts.init(document.getElementsByClassName('chart')[0])
      chart.setOption({
        series: [{
          type: 'pie',
          radius: ['20%', '70%'],
          center: ['50%', '50%'],
          color:['#667AB3', '#0093DD','#3BB3C2','#68B92E', '#F8C300'],
          itemStyle: {  
            normal: {  
              label: {  
                show: false,//是否展示
                textStyle: {  
                  fontWeight:'bolder',  
                  fontSize : '12',  
                  fontFamily : '微软雅黑'
                }  
              }  
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          labelLine: {
            normal: {
              length: 4
            }
          },
          data: this.da,
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 300;
          }
        }]
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .details {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('./../common/img/bj.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      .details_content {
        display: flex;
        flex-direction: row;
        .content_describe {
          flex-grow: 2;
        }
        .content_right {
          flex-grow: 1;
        }
      }
      &_title {
        height: 60px;
        font-size: 2.5rem;
        text-align: center;
        line-height: 60px;
        color: #fff;
      }
      &_content {
        width: 100%;
        height: 250px;
        font-size: 0;
        margin-top: 100px;
      }
      .content_describe {
        display: inline-block;
        width: 60%;
        height: 100%;
        color: #fff;
        .con {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 20px;
          h1 {
            height: 20px;
            width: 100%;
            box-sizing: border-box;
            margin-top: 20px;
            margin-bottom: 20px;
            padding-left: 100px;
            font-size: 16px;
            color: #fff;
          }
          p {
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: #fff;
            font-size: 16px; 
            box-sizing: border-box;
            padding-left: 80px;
          }
        }
      }
      .content_right {
        display: inline-block;
        width: 40%;
        height: 100%;
        .chart {
          width: 100%;
          height: 100%;
        }
      }
      .axis {
        position: absolute;
        bottom: 200px;
        width: 1000px;
        height: 5px;
        left: 50%;
        display: flex;
        z-index: 999;
        transform: transLateX(-50%);
        background-color: #3c3c3c;
        &_step {
          width: 100px;
          height: 64px;
          position: relative;
          display: inline-block;
          flex-grow: 1;
          .step_time {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            line-height: 46px;
            text-align: center;
            transform: translateY(-50%) scale(0);
            transform-origin:50% 50%;
            font-size: 0.75rem;
            border: 4px solid #fff;
            color: #fff;
            background-color: #3c3c3c;
            transition: all .8s;
            cursor: pointer;
          }
          .step_title {
            width: 100px;
            text-align: center;
            color: #fff;
            font-size: 1rem;
            top: 25px;
            left: -70px;
            transform: rotate(-45deg);
            position: absolute;
            transition: all .8s;
          }
          .ac {
            top: -60px;
            transform: rotate(0deg);
            text-align: left;
            left: 0;
          }
          .active {
            width: 56px;
            height: 56px;
            line-height: 56px;
            background-clip: padding-box;
            font-size: 1rem;
            background-color: #F86B12;
          }
          .aa {
            opacity: 0;
          }
        }
      }
    }
    .grid.effect-4 {
    perspective: 1300px;
    }
      
    .grid.effect-4 .chart {
        transform-style: preserve-3d;
    }
      
    .grid.effect-4 .animate {
        transform: translateZ(400px) translateY(300px) rotateX(-90deg);
        animation: fallPerspective .8s ease-in-out forwards;
    }
    .step_time {
      transition: all .4s;
      transform: translateY(-50%) scale(0);
      &_active {
        transform: translateY(-50%) scale(1) !important;
      }
    }
    @keyframes fallPerspective {
        100% { transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
    }
</style>
