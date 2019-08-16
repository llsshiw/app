import Vue from 'vue'
import Router from 'vue-router'
import shopcar from '@/components/tabbar/shopcar'
import home from '@/components/tabbar/home'
import search from '@/components/tabbar/search'
import number from '@/components/tabbar/number'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/number',
      component: number
    }
  ],
  linkActiveClass: 'mui-active'
})
