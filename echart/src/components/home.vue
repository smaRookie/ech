<template>
  <div class="main">
    <!-- <vleft></vleft> -->
    <h1 class="title" v-show="this.record">绿盟科技行业销售TOP5</h1>
    <div class="tap">
      <span v-for="(tapitem, index) in tapList" ref="tap" @click="select(tapitem, index)">{{tapitem}}</span>
    </div>
    <vright :record="this.record"></vright>
    <div class="con_2" >
      <div class="con_2_1"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
 import map from './../../node_modules/echarts/map/js/china.js'
 import vright from './layout/homeRight'
 import {getDate} from './../common/js/com'
  export default {
    name: 'home',
    data () {
      return {
        // 副标题 存对象有名称 接口地址
        tapList: ['金融', '企业', '运营商', '政府', '分销'],
        // 地图的5个名称值
        map1: [{name: 'ssss', data: [{name: '地点', value: '值'}]}],
        record: {}
      }
    },
    components: {
      vright
    },
    mounted () {
      this.$refs.tap[0].className = 'active'
      this.other()
      
    },
    methods: {
      changeDot (val) {
        // 根据val的值的大小来控制地图上点的大小
        let _val = val / 2
        let fill = Math.max(5, _val)
        fill = Math.min(35, _val)
        return fill
      },
      // 副标签选择时高亮
      select (item, index) {
        for (let i = 0; i < this.$refs.tap.length; i++) {
          this.$refs.tap[i].className = ''
        }
        this.$refs.tap[index].className = 'active'
      },
      other () {
        let china = this.$echarts.init(document.getElementsByClassName('con_2_1')[0])
        china.showLoading({
          text: 'loading',
          color: '#c23531',
          textColor: '#fff',
          maskColor: 'rgba(255, 255, 255, 0)',
          zlevel: 0
        })
        getDate('http://rap.taobao.org/mockjs/30352/d').then((res) => {
          console.log(res, 'res')
          china.hideLoading()
          this.record = res.data
        }).catch((err) => {
          console.log(err)
        })
        this.$axios.interceptors.request.use((res) => {
          console.log('请求之前----')
        }, (err) => {
          console.log(err)
        })
        var geoCoordMap = {
          '上海': [121.4648,31.2891],
          '东莞': [113.8953,22.901],
          '东营': [118.7073,37.5513],
          '中山': [113.4229,22.478],
          '临汾': [111.4783,36.1615],
          '临沂': [118.3118,35.2936],
          '丹东': [124.541,40.4242],
          '丽水': [119.5642,28.1854],
          '乌鲁木齐': [87.9236,43.5883],
          '佛山': [112.8955,23.1097],
          '保定': [115.0488,39.0948],
          '兰州': [103.5901,36.3043],
          '包头': [110.3467,41.4899],
          '北京': [116.4551,40.2539],
          '北海': [109.314,21.6211],
          '南京': [118.8062,31.9208],
          '南宁': [108.479,23.1152],
          '南昌': [116.0046,28.6633],
          '南通': [121.1023,32.1625],
          '厦门': [118.1689,24.6478],
          '台州': [121.1353,28.6688],
          '合肥': [117.29,32.0581],
          '呼和浩特': [111.4124,40.4901],
          '咸阳': [108.4131,34.8706],
          '哈尔滨': [127.9688,45.368],
          '唐山': [118.4766,39.6826],
          '嘉兴': [120.9155,30.6354],
          '大同': [113.7854,39.8035],
          '大连': [122.2229,39.4409],
          '天津': [117.4219,39.4189],
          '太原': [112.3352,37.9413],
          '威海': [121.9482,37.1393],
          '宁波': [121.5967,29.6466],
          '宝鸡': [107.1826,34.3433],
          '宿迁': [118.5535,33.7775],
          '常州': [119.4543,31.5582],
          '广州': [113.5107,23.2196],
          '廊坊': [116.521,39.0509],
          '延安': [109.1052,36.4252],
          '张家口': [115.1477,40.8527],
          '徐州': [117.5208,34.3268],
          '德州': [116.6858,37.2107],
          '惠州': [114.6204,23.1647],
          '成都': [103.9526,30.7617],
          '扬州': [119.4653,32.8162],
          '承德': [117.5757,41.4075],
          '拉萨': [91.1865,30.1465],
          '无锡': [120.3442,31.5527],
          '日照': [119.2786,35.5023],
          '昆明': [102.9199,25.4663],
          '杭州': [119.5313,29.8773],
          '枣庄': [117.323,34.8926],
          '柳州': [109.3799,24.9774],
          '株洲': [113.5327,27.0319],
          '武汉': [114.3896,30.6628],
          '汕头': [117.1692,23.3405],
          '江门': [112.6318,22.1484],
          '沈阳': [123.1238,42.1216],
          '沧州': [116.8286,38.2104],
          '河源': [114.917,23.9722],
          '泉州': [118.3228,25.1147],
          '泰安': [117.0264,36.0516],
          '泰州': [120.0586,32.5525],
          '济南': [117.1582,36.8701],
          '济宁': [116.8286,35.3375],
          '海口': [110.3893,19.8516],
          '淄博': [118.0371,36.6064],
          '淮安': [118.927,33.4039],
          '深圳': [114.5435,22.5439],
          '清远': [112.9175,24.3292],
          '温州': [120.498,27.8119],
          '渭南': [109.7864,35.0299],
          '湖州': [119.8608,30.7782],
          '湘潭': [112.5439,27.7075],
          '滨州': [117.8174,37.4963],
          '潍坊': [119.0918,36.524],
          '烟台': [120.7397,37.5128],
          '玉溪': [101.9312,23.8898],
          '珠海': [113.7305,22.1155],
          '盐城': [120.2234,33.5577],
          '盘锦': [121.9482,41.0449],
          '石家庄': [114.4995,38.1006],
          '福州': [119.4543,25.9222],
          '秦皇岛': [119.2126,40.0232],
          '绍兴': [120.564,29.7565],
          '聊城': [115.9167,36.4032],
          '肇庆': [112.1265,23.5822],
          '舟山': [122.2559,30.2234],
          '苏州': [120.6519,31.3989],
          '莱芜': [117.6526,36.2714],
          '菏泽': [115.6201,35.2057],
          '营口': [122.4316,40.4297],
          '葫芦岛': [120.1575,40.578],
          '衡水': [115.8838,37.7161],
          '衢州': [118.6853,28.8666],
          '西宁': [101.4038,36.8207],
          '西安': [109.1162,34.2004],
          '贵阳': [106.6992,26.7682],
          '连云港': [119.1248,34.552],
          '邢台': [114.8071,37.2821],
          '邯郸': [114.4775,36.535],
          '郑州': [113.4668,34.6234],
          '鄂尔多斯': [108.9734,39.2487],
          '重庆': [107.7539,30.1904],
          '金华': [120.0037,29.1028],
          '铜川': [109.0393,35.1947],
          '银川': [106.3586,38.1775],
          '镇江': [119.4763,31.9702],
          '长春': [125.8154,44.2584],
          '长沙': [113.0823,28.2568],
          '长治': [112.8625,36.4746],
          '阳泉': [113.4778,38.0951],
          '青岛': [120.4651,36.3373],
          '韶关': [113.7964,24.7028]
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        let op = {
          backgroundColor: '#404a59',
          title: {
            x:'center',
            y: '10%',
            textStyle: {
                color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            // 传入的数据有省份 银行名 数量
            formatter: function (params) {
                return params.name + '</br>' + '中国建设银行'+ ' : ' + params.value[2];
            }
          },
          // 控制图例的颜色
          // color:['red','blue','#fff','#ffdf33','#968ade'],
          legend: {
            orient: 'vertical',
            y: '80%',
            x: '10%',
            data:[{
              name: '中国建设银行',
              textStyle: {
                color: '#fff'
              }
            }, {
              name: '中国工商银行',
              textStyle: {
                color: '#fff'
              }
            }, {
              name: '中国民生银行',
              textStyle: {
                color: '#fff'
              }
            }, {
              name: '中国邮政',
              textStyle: {
                color: '#fff'
              }
            }, {
              name: '成都银行',
              textStyle: {
                color: '#fff'
              }
            } ]
          },
          geo: {
            map: 'china',
            zoom: 1.2,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 10 
                }
              },
              emphasis: {
                  textStyle: {
                  color: '#6ab0b8',
                  fontSize: 12 
                }
              }
            },
            itemStyle: {
              normal: {
                // 地图区域颜色
                areaColor: '#3c3c3c',
                borderColor: '#111'
              },
              // 地图高亮时区域颜色
              emphasis: {
                areaColor: ''
              }
            }
          },
          series: [
            {
              name: '中国建设银行',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                scale: 2,
                brushType: 'stroke'
              },
              // 图形的颜色
              // color: ['red'], 
              data: convertData([
                {name: "海门", value: 9},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 320},
                {name: "昆山", value: 33},
                {name: "成都", value: 518},
                {name: "大同", value: 858},
                {name: "镇江", value: 659},
                {name: "桂林", value: 159},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61}
            ]),
            // 控制地图上点的大小
            symbolSize: function (val) {
              let _val = val[2] / 10
              // 控制值在5到35之间
                return Math.max(5, Math.min(35, _val))
              },
            label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: false
              }
            }
          },
            {
              name: '中国工商银行',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              rippleEffect: {
                scale: 2,
                brushType: 'stroke'
              },
              data: convertData([
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37}
            ]),
              symbolSize: function (val) {
              let _val = val[2] / 10
              // 控制值在5到35之间
                return Math.max(5, Math.min(35, _val))
              },
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              }
            },
            {
              name: '中国民生银行',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              rippleEffect: {
                scale: 2,
                brushType: 'stroke'
              },
              data: convertData([
                {name: "金昌", value: 59},
                {name: "泉州", value: 21},
                {name: "莱西", value: 61},
                {name: "日照", value: 11},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31}
            ]),
              symbolSize: 5,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              }
            },
            {
              name: '中国邮政',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              rippleEffect: {
                scale: 2,
                brushType: 'stroke'
              },
              data: convertData([
                {name: "云浮", value: 214},
                {name: "梅州", value: 215},
                {name: "文登", value: 125},
                {name: "上海", value: 215},
                {name: "攀枝花", value: 25}
            ]),
              symbolSize: function (val) {
              let _val = val[2] / 10
              // 控制值在5到35之间
                return Math.max(5, Math.min(35, _val))
              },
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              }
            },
            {
              name: '成都银行',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              rippleEffect: {
                scale: 2,
                brushType: 'stroke'
              },
              data: convertData([
                {name: "云浮", value: 214},
                {name: "梅州", value: 215},
                {name: "文登", value: 125},
                {name: "上海", value: 215},
                {name: "攀枝花", value: 25}
            ]),
              symbolSize: function (val) {
                return val[2] / 10;
            },
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              }
            }
          ]
        }
        // 点击地图上的点执行函数
        china.on('click', (params) => {
          console.log(params)
        })
        china.setOption(op)
        window.onresize = function(){
          china.resize()
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .main:after{
    content: '';
    display: block;
    clear: both;
  }
  .main {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url('./../common/img/bj.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .title {
      // position: absolute;
      font-size: 2.5rem;
      height: 66px;
      width: 100%;
      line-height: 66px;
      text-align: center;
      color: #fff;
      letter-spacing: 1px;
    }
    .tap {
      // position: absolute;
      // top: 84px;
      // left: 50%;
      // margin-left: -150px;
      margin: 10px auto 0;
      width: 300px;
      height: 30px;
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      overflow: hidden;
      border-radius: 10px;
      font-size: 0.875rem;
      .active {
        background-color: #61A0A8;

      }
      span {
        display: inline-block;
        flex-grow: 1;
        color: #fff;
        text-align: center;
        height: 100%;
        line-height: 30px;
        border-right: 1px solid #ccc;
        cursor: pointer;
      }
      span:last-child {
        border-right: none;
      }
    }
  }
  .con_2 {
    position: absolute;
    left: 0;
    // top: 0;
    height: 100%;
    top: 100px;
    height: calc(~'100% - 120px');
    // width: calc(~'100% - 260px');
    width: 73%;
    box-sizing: border-box;
  }
  .con_2_1 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    transform: translate3d(-50%, -50%, 0);
    background-color: rgba(0, 0, 0, 0)!important;
  }
</style>
