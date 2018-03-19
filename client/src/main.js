// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import VueResource from 'vue-resource'

// 引用API文件
import api from './api/api.js'
// 引用utils工具方法
import utils from './util/utils.js'
// 引入elementUI
import ElementUI from 'element-ui'
// 引入element的css
import 'element-ui/lib/theme-chalk/index.css'
// 引入自己的css
import './assets/css/custom-styles.css'
// 将API方法绑定到全局
Vue.prototype.$api = api
// 引用utils工具方法绑定全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
