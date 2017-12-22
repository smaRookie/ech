import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./../components/home.vue')), 'home')
const timeHis = r => require.ensure([], () => r(require('./../components/timeHis.vue'), 'timeHis'))
const details = r => require.ensure([], () => r(require('./../components/details.vue'), 'details'))
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/timeinfo',
      name: 'timeinfo',
      component: timeHis
    },
    {
      path: '/details',
      component: details
    }
  ]
})
export default router
