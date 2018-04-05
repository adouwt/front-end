import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import loginRegist from '@/page/login-regist'

import blogDraft from '@/page/blog-draft'
import blogNote from '@/page/blog-note'
import userCenter from '@/page/user-center'

import article from '@/page/common-catagory-article'
import articleList from '@/page/catagory-article-list'
import errorPage from '@/page/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
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
      path: '/catagory-article-list/:catagoryId',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/blog-note',
      name: 'blogNote',
      component: blogNote
    },
    {
      path: '/user-center',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/error',
      name: 'errorPage',
      component: errorPage
    },
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
