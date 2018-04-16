// import 相关组件
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import loginRegist from '@/page/login-regist'

import blogDraft from '@/page/blog-draft'
import blogNote from '@/page/blog-note'
import userCenter from '@/page/user-center'

import article from '@/page/common-catagory-article'
import articleList from '@/page/catagory-article-list'
import wtAdmin from '@/page/admin'
import travel from '@/page/travel'
import errorPage from '@/page/error'
import noAuthority from '@/page/no-authority'

// import 登录权限组件
import {isLogin, isAdmin} from '../utils/authService'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login-regist',
      name: 'loginRegist',
      component: loginRegist
    },
    {
      path: '/draft/:userId',
      name: 'blogDraft',
      component: blogDraft
    },
    {
      path: '/catagory-article/:articleId',
      name: 'article',
      component: article
    },
    {
      path: '/travel-diary/:diaryId',
      name: 'travel',
      component: travel
    },
    {
      path: '/catagory-article-list/:catagoryId',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/blog-note',
      name: 'blogNote',
      component: blogNote,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user-center',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/wtadmin',
      name: 'wtAdmin',
      component: wtAdmin,
      meta: {
        isAdmin: true
      }
    },
    {
      path: '/error',
      name: 'errorPage',
      component: errorPage
    },
    {
      path: '/no-authority',
      name: 'noAuthority',
      component: noAuthority
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => {  // 先判断进入这个路由
    if (record.meta.requiresAuth) {
      localStorage.setItem('nexturl', record.path);
    }
    return record.meta.requiresAuth 
    })
  ) { 
    if (!isLogin()) { // 在判断是否登录
      return next({path: '/login-regist'})
    } 
  } 
  
  if (to.matched.some(record => record.meta.isAdmin)) {
    if (!isAdmin()) {
      return next({path: '/no-authority'})
    }
  }
  next()
})
export default router
