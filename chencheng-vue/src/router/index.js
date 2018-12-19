import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detail from '@/components/detail'
import write from '@/components/write'
import my from '@/components/my/index'
import tool from '@/components/tool/index'
import toolList from '@/components/tool/list'
import picCrawler from '@/components/tool/pic-crawler'

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
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
	  path: '/tool',
	  redirect: '/tool/list',
	  name: 'tool',
	  component: tool,
      children: [
        { path: 'list', name: 'tool-list', component: toolList},
        { path: 'pic-crawler', name: 'pic-crawler', component: picCrawler},
      ]
    }
  ]
})
