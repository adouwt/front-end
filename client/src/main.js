// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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


// function filter (fullPath, user) {

// }
// let user = sessionStorage.getItem('user');
// if (user) {
//     user = JSON.parse(user);
//     // 筛选得到实际路由
//     let fullPath = require('./router/router.js');
//     let routes = filter(fullPath, user.menus);
//     // 创建路由对象
//     let router = new Router({routes});
//     // 生成Vue实例
//     new Vue({
//       el: '#app',
//       router,
//       template: '<App/>',
//       components: { App }
//     })
// } else {
//     new Vue({
//       el: '#app',
//       Router,
//       template: '<App/>',
//       components: { App }
//     })
//     location.href = '/index';
// }
