// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // vue 引入
import App from './App' // 入口组件
import FsNav from '@/components/common/fs-nav' // 导航组件
import FsFooter from '@/components/common/fs-footer' // 底部组件
import router from './router' // 路由引入
import '@/assets/css/common.css' // 引入公共样式
import iView from 'iview'; // 引入iview ui
import 'iview/dist/styles/iview.css'; // 引入iview ui css
Vue.config.productionTip = false;

// 全局组件注册
Vue.component('fs-nav', FsNav);
Vue.component('fs-footer', FsFooter);

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
