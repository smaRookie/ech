<template>
  <div class="details">
      <h1 class="details_title">{{title}}</h1>
      <div class="pro_info">
        <p>行业: {{subhead}}</p>
        <p>17年累计采购金额: {{money}}元</p>
      </div>
      <div class="seclect">
        <div>
          <span class="sle_dec">分支机构</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <span class="sle_dec">产品</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value2"
              :label="item.label2"
              :value="item.value2">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="details_content">
        <div class="lenged" v-show="arrSet.length">
          <span class="lengedItem" v-for="(item, index) in arrSet" @click="selectLenged(item, $event, index)"><span class="aim" :class="`light${index}`"></span>{{item}}</span>
        </div>
        <div class="content_describe">
          <div class="axis">
            <div class="axis_step"  v-for="(item, index) in this.num" ref="step" :data-title="item.title">
              <div class="step_title" ref="step_title" v-show="timeShow" :class="{'titleac': index === 0}">
                {{item.title}}
              </div>
              <!-- :data-title="item.title" 动态绑定根据不同的支行显示不同的颜色 -->
              <div class="step_time" @click="add(item, index)" ref="step_time" :data-title="item.title" :class="[{'step_time_active': timeShow, 'active': index === 0}, `light${item.character}`]">
                {{item.date}}
              </div>
            </div>
          </div>
          <!-- <transition enter-active-class="bounceIn" live-active-class="bounceIn"> -->
        </div>
        <!-- <div class="content_right" id="grid">
          <div class="chart"></div>
        </div> -->
      </div>
      <transition enter-active-class="zoomIn" leave-active-class="fadeOut">
            <div class="con animated" v-show="show">
              <el-table
                class="tablecon"
                :data="tableData"
                @cell-mouse-enter="test"
                border
                :stripe= 'stripe'
                height='530'
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="采购日期"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="分支客户名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="proId"
                  label="项目ID">
                </el-table-column>
                <el-table-column
                  prop="pro"
                  label="产品">
                </el-table-column>
                <el-table-column
                  prop="number"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="money"
                  label="金额">
                </el-table-column>
              </el-table>
            </div>
          </transition>
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
      title: '中国建设银行股份有限公司',
      subhead: '金融',
      money: 8408627,
      arrSet: [],
      contentTitle: '标题1',
      contentDetails:　'内容1111111111111',
      stripe: false,
      show: false,
      timeShow: false,
      // 传入的数据需要不同分支的标识
      num: [
        {'date': '16/9/22', 'title': 'NF', 'content': '内容1111111111111111111111', 'character': 0},
        {'date': '17/8/21', 'title': 'RSAS', 'content': '内容2222222222222222222222', 'character': 1},
        {'date': '17/8/21', 'title': 'IPS', 'content': '内容3333333333333333333333', 'character': 2},
        {'date': '17/8/2', 'title': 'NF', 'content': '内容4444444444444444444444', 'character': 0},
        {'date': '16/9/22', 'title': 'NF', 'content': '内容1111111111111111111111', 'character': 0},
        {'date': '17/8/21', 'title': 'RSAS', 'content': '内容2222222222222222222222', 'character': 1},
        {'date': '17/8/21', 'title': 'IPS', 'content': '内容3333333333333333333333', 'character': 2},
        {'date': '17/8/2', 'title': 'NF', 'content': '内容4444444444444444444444', 'character': 0}
      ],
      // da: '',
      // d: [
      //   [12, 32, 26, 41],
      //   [22, 32, 46, 11],
      //   [26, 22, 36, 31],
      //   [16, 12, 66, 11],
      //   [36, 42, 56, 41],
      //   [26, 29, 76, 91],
      //   [36, 49, 16, 61]
      // ],
      // 表格
      tableData: [{
          date: '2016/9/22',
          name: '中国建设银行股份有限公司',
          proId: '20162100058531',
          pro: 'NF',
          number: 1,
          money: 15123
        }, {
          date: '2017/8/21',
          name: '中国建设银行股份有限公司',
          proId: '20170001078961',
          pro: 'NF',
          number: 2,
          money: 30246
        }, {
          date: '2017/8/21',
          name: '中国建设银行股份有限公司',
          proId: '20170001079262',
          pro: 'NF',
          number: 1,
          money: 15123
        }, {
          date: '2017/8/2',
          name: '中国建设银行股份有限公司',
          proId: '20170001078960',
          pro: 'NF',
          number: 1,
          money: 15123
        }, {
          date: '2017/7/5',
          name: '中国建设银行股份有限公司',
          proId: '20170001085893',
          pro: 'NF',
          number: 2,
          money: 30246
        }, {
          date: '2015/12/7',
          name: '中国建设银行股份有限公司',
          proId: '20142201028975',
          pro: 'NF',
          number: 2,
          money: 30246
        }, {
          date: '2016-05-02',
          name: '中国建设银行股份有限公司',
          proId: '20142201028975',
          pro: 'NF',
          number: 20,
          money: 1512
        }, {
          date: '2013/10/31',
          name: '中国建设银行股份有限公司',
          proId: '20132101006375',
          pro: 'NF',
          number: 1,
          money: 15123
        }, {
          date: '2017/7/5',
          name: '中国建设银行股份有限公司',
          proId: '20170001085893',
          pro: 'NF',
          number: 2,
          money: 30246
        }, {
          date: '2015/12/7',
          name: '中国建设银行股份有限公司',
          proId: '20142201028975',
          pro: 'NF',
          number: 2,
          money: 30246
        }, {
          date: '2017/8/21',
          name: '中国建设银行股份有限公司',
          proId: '20170001079262',
          pro: 'NF',
          number: 1,
          money: 15123
        }, {
          date: '2017/8/2',
          name: '中国建设银行股份有限公司',
          proId: '20170001078960',
          pro: 'NF',
          number: 1,
          money: 15123
        }],
        // 下拉框
      options: [{
          value: '选项1',
          label: '中国建设银行股份有限公司甘肃省分行'
        }, {
          value: '选项2',
          label: '中国建设银行股份有限公司安徽省分行'
        }, {
          value: '选项3',
          label: '中国建设银行股份有限公司甘肃省分行'
        }, {
          value: '选项4',
          label: '中国建设银行股份有限公司广东省分行'
        }, {
          value: '选项5',
          label: '中国建设银行股份有限公司河南省分行'
        }, {
          value: '选项6',
          label: '中国建设银行股份有限公司黑龙江省分行'
        }, {
          value: '选项7',
          label: '中国建设银行股份有限公司吉林省分行'
        }, {
          value: '选项8',
          label: '中国建设银行股份有限公司江苏省分行'
        }, {
          value: '选项9',
          label: '中国建设银行股份有限公司青岛市分行'
        }, {
          value: '选项10',
          label: '中国建设银行股份有限公司厦门市分行'
        }, {
          value: '选项11',
          label: '中国建设银行股份有限公司上海市分行'
        }, {
          value: '选项12',
          label: '中国建设银行股份有限公司深证市分行'
        }, {
          value: '选项13',
          label: '中国建设银行股份有限公司信用卡中心'
        }, {
          value: '选项14',
          label: '中国建设银行股份有限公司云南省分行'
        }, {
          value: '选项15',
          label: '所有'
        }],
        options2: [{
          value2: '选项1',
          label2: 'NF'
        }, {
          value2: '选项2',
          label2: 'RSAS'
        }, {
          value2: '选项3',
          label2: 'IPS'
        }, {
          value2: '选项4',
          label2: 'WAF'
        }, {
          value2: '选项5',
          label2: 'SAS'
        }],
        value: '所有',
        value2: 'NF'
    }
  },
  mounted () {
    this.get()
    // $('.content_describe').scroll((e) => {
    //   let s = $('.content_describe').scrollLeft()
    //   let sx = $('.axis').width()
    //   let w = s + sx
    //   $('.axis').width(w)
    //   console.log($('.axis').width())
    // })
  },
  methods: {
    test (event, cell, row) {
      console.log('test')
    },
    selectLenged (item, event, index) {
      let step = this.$refs.step
      event.target.classList.toggle( `light${index}`)
      step.forEach((m) => {
        if (item == m.getAttribute('data-title')) {
          m.classList.toggle('change')
          m.classList.contains('change') ? $(m).fadeOut(1000) : $(m).fadeIn(1000)
        }
      })
      console.log(step)
    },
    lightColor () {
      let tep_time = this.$refs.step_time
      // 所有的标题
      let dataTitle = []
      let titleSet = new Set()
      tep_time.forEach((item) => {
        // 取得不同的分行名称 根据名称添加不同的颜色
        dataTitle.push(item.getAttribute('data-title'))
        titleSet.add(item.getAttribute('data-title'))
      })
      this.arrSet = Array.from(titleSet)
      console.log('arrSet', this.arrSet)
      tep_time.forEach((item) => {
        for (let i = 0; i < this.arrSet.length; i++) {
          if (item.getAttribute('data-title') === this.arrSet[i]) {
            item.classList.add(`light${i}`)
          }
        }
      })
    },
    removeClass () {
      let tep_time = this.$refs.step_time
      let tep_title = this.$refs.step_title
      for (let i =0; i< tep_time.length; i++) {
        tep_time[i].classList.remove('active')
        tep_title[i].classList.remove('titleac')
      }
    },
    add (item, index) {
      let tep_time = this.$refs.step_time
      let tep_title = this.$refs.step_title
      this.lightColor()
      if (tep_time[index].classList.contains('active')) {
        return
      } else {
        this.show = false
        this.removeClass()
        tep_time[index].classList.add('active')
        // this.da = this.d[index]
        setTimeout(() => {
          tep_title[index].classList.add('titleac')
          this.contentTitle = item['title']
          this.contentDetails = item['content']
          this.show = true
          // this.drawChart ()
        }, 200)
      }
    },
    get () {
      this.timeShow = false
      this.show = false
      let tep_time = this.$refs.step_time
      let tep_title = this.$refs.step_title
      this.removeClass(tep_time, tep_title)
      this.lightColor(tep_time, tep_title)
      tep_time[0].classList.add('active')
      tep_title[0].classList.add('titleac')
      // tep_time[0].classList.add('active')
      // tep_title[0].classList.add('titleac')
      // this.da = this.d[0]
      // this.drawChart ()
      // 新增的 接口有问题 下次代码删了
      this.timeShow = true
      this.show = true
      // getDate('http://rap.taobao.org/mockjs/30352/d1').then(() => {
      //   this.lightColor()
      //   setTimeout(() => {
      //     let tep_time = this.$refs.step_time
      //     let tep_title = this.$refs.step_title
      //     tep_time[0].classList.add('active')
      //     tep_title[0].classList.add('titleac')
      //     // this.da = this.d[0]
      //     // this.drawChart ()
      //     this.contentTitle = this.num[0]['title']
      //     this.contentDetails = this.num[0]['content']
      //     this.timeShow = true
      //     this.show = true
          
      //   }, 300);
      // }).catch((err) => {
      //   console.log('err')
      // })
    }
    // drawChart () {
    //   let chart = this.$echarts.init(document.getElementsByClassName('chart')[0])
    //   chart.setOption({
    //     series: [{
    //       type: 'pie',
    //       radius: ['20%', '70%'],
    //       center: ['50%', '50%'],
    //       color:['#667AB3', '#0093DD','#3BB3C2','#68B92E', '#F8C300'],
    //       itemStyle: {  
    //         normal: {  
    //           label: {  
    //             show: false,//是否展示
    //             textStyle: {  
    //               fontWeight:'bolder',  
    //               fontSize : '12',  
    //               fontFamily : '微软雅黑'
    //             }  
    //           }  
    //         },
    //         emphasis: {
    //           label: {
    //             show: true
    //           }
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           length: 4
    //         }
    //       },
    //       data: this.da,
    //       roseType: 'radius',
    //       animationType: 'scale',
    //       animationEasing: 'elasticOut',
    //       animationDelay: function (idx) {
    //         return Math.random() * 300;
    //       }
    //     }]
    //   })
    // }
  }
}
</script>
<style lang="less">
    .details {
      // position: absolute;
      // top: 0;
      // bottom: 0;
      // left: 0;
      // right: 0;
      width: 100%;
      height: 100%;
      min-height: 1300px;
      background-image: url('./../common/img/bj.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      // overflow: hidden;
      .pro_info {
        width: 100%;
        height: 80px;
        margin: 10px auto;
        p {
          width: 100%;
          height: 40px;
          color: #fff;
          text-align: center;
        }
      }
      .seclect {
        box-sizing: border-box;
        padding-left: 20px;
        .sle_dec {
          color: #fff;
          display: inline-block;
          width: 80px;

        }
        .el-select {
          display: inline-block;
          width: 200px;
          margin-bottom: 10px;
        }
      }
      .details_content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        // .content_right {
        //   flex-grow: 1;
        // }
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
        // height: 250px;
        font-size: 0;
        // margin-top: 100px;
        margin: 50px auto 0;
      }
      .content_describe {
        display: inline-block;
        position: relative;
        width: 80%;
        min-width: 1000px;
        margin: 0 auto;
        height: 140px;
        overflow: auto;
        color: #fff;
      }
      .con {
          margin: 20px auto 0;
          // width: 100%;
          // height: 100%;
          width: 80%;
          min-width: 1000px;
          // border: 2px solid #3c3c3c;
          box-sizing: border-box;
          // padding: 20px;
          .tablecon {
            // 表格缝隙样式
            .el-table__row td, th.is-leaf {
              border-bottom: 1px solid #B1B8BF !important;
              border-right: 1px solid #B1B8BF !important;
            }
            // 表格头部样式
            .has-gutter tr {
              // background-color: #409EFF;
              color: black;
            }
            // 表格边框样式
            .el-table--border {
              
            }
            .el-table tr {
              background-color: #E3E3E3 !important;
            }
            .el-table--border, .el-table--group {
              border: none;
            }
            tbody {
              .el-table__row--striped {
                
              }
              // 单行表格
              .el-table__row {
                color: black !important;
              }
              // .el-table__row:hover {
              //   background-color: #8acdf4;
              // }
            }
          }
        }
      // .content_right {
      //   display: inline-block;
      //   width: 40%;
      //   height: 100%;
      //   .chart {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
      .axis {
        margin: 40px auto 0;
        height: 4px;
        width: 100%;
        position: absolute;
        top: 50%;
        margin-top: -2px;
        display: flex;
        z-index: 999;
        background-color: #3c3c3c;
        &_step {
          min-width: 100px;
          height: 64px;
          box-sizing: border-box;
          position: relative;
          display: inline-block;
          display: flex;
          justify-content: center;
          top: 50%;
          margin-top: -32px;
          flex-grow: 1;
          .step_time {
            min-width: 56px;
            min-height: 56px;
            border-radius: 50%;
            line-height: 56px;
            text-align: center;
            transform: scale(0);
            font-size: 0.75rem;
            border: 4px solid #fff;
            color: #fff;
            background-color: #3c3c3c;
            transition: all .8s;
            cursor: pointer;
          }
          .step_title {
            width: 72px;
            height: 20px;
            text-align: center;
            color: #fff;
            font-size: 1rem;
            top: 40px;
            left: 0;
            transform: rotate(-45deg);
            position: relative;
            transition: all .8s;
          }
          .active {
            min-width: 64px;
            min-height: 64px;
            line-height: 64px;
            background-clip: padding-box;
            font-size: 1rem;
            background-color: #F86B12;
          }
          .titleac {
            top: -30px;
            left: 50%;
            transform: rotate(0deg);
            text-align: left;
            transform: translateX(-50%);
          }
          .aa {
            opacity: 0;
          }
        }
      }
      .lenged {
        // position: absolute;
        // top: -30px;
        box-sizing: border-box;
        padding-left: 100px;
        .lengedItem {
          display: inline-block;
          height: 15px;
          line-height: 15px;
          color: #fff;
          font-size: 1rem;
          margin-right: 20px;
          cursor: pointer;
          .aim {
            display: inline-block;
            height: 100%;
            width: 20px;
            border-radius: 2px;
            vertical-align: top;
            margin-right: 10px;
            background-color: #fff;
          }
          // background: red;
        }
      }
      .light0 {
      background-color: #D97373 !important;
      }
      .light1 {
        background-color: #C7E019 !important;
      }
      .light2 {
        background-color: #13B642 !important;
      }
      .light3 {
        background-color: #7A9381 !important;
      }
      .light4 {
        background-color: #20B0AE !important;
      }
      .light5 {
        background-color: #0B5C7E !important;
      }
      .light6 {
        background-color: #A4E2A2 !important;
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
        transform: scale(0);
        &_active {
          transform: scale(1) !important;
        }
      }
      @keyframes fallPerspective {
          100% { transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
      }
    }
</style>
