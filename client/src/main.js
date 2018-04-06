// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

// 引入elementUI
import ElementUI from 'element-ui'
// 引入element的css
import 'element-ui/lib/theme-chalk/index.css'
// 引入自己的css
import './assets/css/custom-styles.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
