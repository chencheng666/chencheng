import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import userInfo from './modules/userInfo.js';//引入userInfo store对象

export default new vuex.Store({
    modules: {
        userInfo: userInfo
    }
})