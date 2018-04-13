import Vue from 'vue'
import App from './App'
import router from './router/router.js'

// 引入 状态管理 vuex
import store from './store'

// 引入elementUI
import ElementUI from 'element-ui'
// 引入element的css
import 'element-ui/lib/theme-chalk/index.css'
// 引入font-awesome的css
import 'font-awesome/css/font-awesome.css'

// 引入自己的css
import './assets/css/custom-styles.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
