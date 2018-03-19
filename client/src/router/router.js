import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import backManage from '@/page/backManage'
import cinemaData from '@/page/cinemaData'
import countRecord from '@/page/countRecord'
import deleteData from '@/page/deleteData'

import ticket from '@/page/ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/manage',
      name: 'backManage',
      component: backManage
    },
    {
      path: '/cinemadata',
      name: 'cinemaData',
      component: cinemaData
    },
    {
      path: '/countrecord',
      name: 'countRecord',
      component: countRecord
    },
    {
      path: '/deleteData',
      name: 'deleteData',
      component: deleteData
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      component: index
    },
    {
      path: '/cinema/:id/ticket',
      name: 'ticket',
      component: ticket
    }
  ]
})
