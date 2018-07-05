import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detail from '@/components/detail'
import write from '@/components/write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/detail',
      name: 'contentDetail',
      component: detail
    },{
      path: '/write',
      name: 'contentWrite',
      component: write
    },
  ]
})
