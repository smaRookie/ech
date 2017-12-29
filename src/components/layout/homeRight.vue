<template>
    <div class="right">
        <div class="right_con">
            <p class="title">2017年Top5销售额排名</p>
            <div class="mybar"></div>
        </div>
        <div class="right_con">
            <p class="title">2017年Top5产品</p>
            <div class="myline"></div>
        </div>
        <div class="right_con">
            <p class="title">2017年Top5下单次数分布</p>
            <div class="splashes"></div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'vright',
  data () {
    return {
      title: '态势感知',
      abar: '',
      asplashes: '',
      apie: '',
      flag: false,
      barDataY: ['建设银行', '工商银行', '中国邮政', '农业银行', '成都银行'],
      barDataX: [123, 553, 434, 543, 351],
      pieData: [{value: 3244, name: 'NF'}, {value: 1718, name: 'RSAS'}, {value: 1347, name: 'IPS'}, {value: 1071, name: 'WAF'}, {value: 904, name: 'SAS'}],
      // 销售额排名 名称
      bank: ['所有银行', '建设银行', '邮政', '工商银行', '民生银行', '成都银行']
    }
  },
  props: {
    record: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  mounted () {
      this.drawBar()
      this.drawPie(this.xData, this.yData)
      this.drawSplashes()
  },
  watch: {
    record () {
      this.abar.hideLoading()
      this.apie.hideLoading()
      this.asplashes.hideLoading()
    }
  },
  methods: {
    // 格式时间
    formatDate (val) {
      let _val = []
      let _all = []
      let _month, _perday
      val.forEach(function (res, index) {
        _val = []
        _month = res[0].getMonth() + 1
        _perday = (res[0].getDate() / 32).toFixed(2).substr(2)
        _val.push(`${_month}.${_perday}`)
        _val.push(res[1])
        _all.push(_val)
      })
      return _all
    },
    drawBar () {
      let bar1 = this.$echarts.init(document.getElementsByClassName('mybar')[0])
      this.abar = bar1
      bar1.showLoading({
          text: 'loading',
          color: '#c23531',
          textColor: '#fff',
          maskColor: 'rgba(255, 255, 255, 0)',
          zlevel: 0
        })
      bar1.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{a}</br>{b}销售额: {c}'
        },
        color: ['#68B92E'],
        grid: {
          left: '0',
          right: '20%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          name: '( 万元 )',
          nameTextStyle: {
            fontStyle: 'italic'
          },
          nameLocation: 'end',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 10,
            fontStyle: 'italic'
            // rotate: 20
          }
        },
        yAxis: {
          type: 'category',
          data: this.barDataY,
          axisLabel: {
            color: '#fff',
            fontSize: 10
          }
        },
        series: [
          {
            name: '2017年TOP5',
            type: 'bar',
            data: this.barDataX.sort(),
            itemStyle: {  
              normal: {  
                label: {  
                  show: true,//是否展示  
                  textStyle: {  
                    fontWeight:'bolder',  
                    fontSize : '12',  
                    fontFamily : '微软雅黑' 
                  }  
                }  
              }  
            }
          }
        ]
      })
    },
    drawPie (xData, yData) {
      let pie = this.$echarts.init(document.getElementsByClassName('myline')[0])
      this.apie = pie
      pie.showLoading({
          text: 'loading',
          color: '#c23531',
          textColor: '#fff',
          maskColor: 'rgba(255, 255, 255, 0)',
          zlevel: 0
        })
      pie.setOption({
          legend: {
            type: 'scroll',
            pageTextStyle: {
              color: '#fff'
            },
            // orient: 'vertical',
            x: 'left',
            color: 'red',
            // y: 'bottom',
            data: ['NF', 'RSAS', 'IPS', 'WAF', 'SAS'],
            textStyle: {
              color: '#fff',
              fontSize: 10
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a}</br>{b} : {c} ({d}%)'
          },
          series: {
            type: 'pie',
            name: '17年Top5产品分布',
            radius: ['20%', '70%'],
            center: ['50%', '60%'],
            color:['#667AB3', '#0093DD','#3BB3C2','#68B92E', '#F8C300'],
            hoverOffset: 8,
            label: {
              normal: {
                show: true
              }
            },
            labelLine: {
              normal: {
               length: 2
              }
            },
            data: this.pieData,
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 300;
            }
          }
      })
    },
    drawSplashes () {
      let splashesEcharts = this.$echarts.init(document.getElementsByClassName('splashes')[0])
      splashesEcharts.showLoading({
          text: 'loading',
          color: '#c23531',
          textColor: '#fff',
          maskColor: 'rgba(255, 255, 255, 0)',
          zlevel: 0
        })
      this.asplashes = splashesEcharts
      splashesEcharts.setOption({
        grid: {
          x: '5%', 
          y: '25%', 
          width: '80%', 
          height: '75%',
          show: false,
          containLabel: true,
          tooltip: {

          }
        },
        legend: {
          data: ['建设银行', '工商银行'],
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          formatter: (name) => {
            let value = name.value
            let _month = parseInt(value[0], 10)
            // 格式化天数 乘以32是因为先前格式化日期时是除以32的
            let _day = Math.round((value[0] - _month) * 32)
            return `${_month}月${_day}日</br>${name.value[1]}次`
          }
        },
        xAxis: {
          type: 'value',
          splitNumber: 10,
          splitLine: {
            show: false
          },
          name: '月份',
          nameTextStyle: {
            color: '#fff'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          // 格式时间只显示月份 
          min: new Date('2017-01').getMonth() + 1,
          max: 12.9
        },
        dataZoom: [
          {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              bottom: '20%',
              start: 0,
              end: 100
          }
        ],
        yAxis: {
          show: false,
          name: '(万元)',
          splitLine: false,
          yAxisIndex: 1,
          nameLocation: 'end',
          nameTextStyle: {
            fontStyle: 'italic',
            color: '#fff'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          type: 'value',
          show: true,
          gridIndex: 0,
          min: 1000,
          max: 15000,
          splitNumber: 3,
          minInterval: 1300,
          // splitNumber: 3,
          // interval: 2,
          axisLabel: {
            color: '#fff',
            interval: 5
          }
        },
        series: [{
          xAxisIndex: 0,
          yAxisIndex: 0,
          name: '建设银行',
          type: 'scatter',
          data: this.formatDate([
            [new Date('2017-02-28'), 4005],
            [new Date('2017-01-11'), 5005],
            [new Date('2017-02-1'), 6500],
            [new Date('2017-04-7'), 11300],
            [new Date('2017-04-16'), 4681],
            [new Date('2017-04-18'), 7496],
            [new Date('2017-05-20'), 4456],
            [new Date('2017-07-5'), 7824],
            [new Date('2017-11-5'), 6945],
            [new Date('2017-10-31'), 6945],
            [new Date('2017-11-30'), 9945]
          ])
        },
        {
          name: '工商银行',
          type: 'scatter',
          data: this.formatDate([
            [new Date('2017-03-1'), 4864],
            [new Date('2017-06-11'), 4752],
            [new Date('2017-01-14'), 7514],
            [new Date('2017-03-16'), 4254],
            [new Date('2017-06-4'), 11165],
            [new Date('2017-02-7'), 12216],
            [new Date('2017-02-16'), 5421],
            [new Date('2017-02-18'), 4221],
            [new Date('2017-02-20'), 7143],
            [new Date('2017-03-4'), 12000],
            [new Date('2017-03-5'), 4594]
          ])
        }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import './../../common/less/index.less';
    li {
      list-style: none;
    }
    .right {
        position: absolute;
        z-index: 200;
        right: 10px;
        top: 120px;
        // width: 360px;
        width: 26%;
        box-sizing: border-box;
        padding: 15px;
        height: calc(~'100% - 120px');
        display: flex;
        flex-direction: column;
        justify-content: center;
        .right_con {
            width: 100%;
            height: 240px;
            // flex-grow: 1;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #3c3c3c;
            background-color: #28282C;
            position: relative;
            .bank {
              z-index: 1000;
              position: absolute;
              width: 100%;
              top: 35px;
              left: 0;
              box-sizing: border-box;
              padding-left: 10px;
            }
            .bank_con {
              display: inline-block;
              border-radius: 5px;
              background-color: #fff;
              width: 60px;
              height: 20px;
              line-height: 20px;
              margin-left: 10px;
              font-size: 12px;
              text-align: center;
              color: black;
              cursor: pointer;
            }
            .active {
              color: #fff;
              background-color: #409EFF;
            }
            .title {
                color: #fff;
                font-size: 0.875rem;
                font-family: '微软雅黑';
                height: 30px;
                line-height: 30px;
                padding-left: 5px;
                letter-spacing: 1px;
                background-color: #2F3B49;
                border-bottom: 1px solid #535356;
            }
            .mybar, .myline, .splashes {
              height: 188px;
              width: 100%;
              padding-left: -10px;
            }
        }
    }
</style>