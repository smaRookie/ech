// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(animate)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
