import http from './common.js'
// import {paramToQuery} from '@/utils'

// 用户登录
export const signIn = (data) => {
  return http.fetchPost('/api/auth/sign-in', data)
}

// 用户注册
export const regist = (data) => {
  return http.fetchPost('/api/auth/regist', data)
}

// 获取用户信息
export const userInfo = (params) => {
  return http.fetchGet('/api/auth/user-msg/get', {})
}

// 一级分类列表
export const firstCategoriesList = (params) => {
  return http.fetchGet('/api/firstCategories/list', {})
}

// 二级分类列表
export const secondCategoriesList = (params) => {
  return http.fetchGet(`/api/${params.firstCatagoryId}/secondCategories/${params.secondCatagoryId}/list`, {})
}

// 分类文章列表
export const articleList = (params) => {
  return http.fetchGet(`/api/articlelist/${params.secondCategoriesId}/do/get`, {})
}

// 获取文章详情
export const articleDetail = (params) => {
  return http.fetchGet(`/api/article/${params.articleId}/do/get`, {})
}

// 首页平台数据
export const indexData = (params) => {
  return http.fetchGet('/api/article/index/do/get', {})
}


// blog 录入
export const blogNote = (data) => {
  return http.fetchPost('/api/blognote', data)
}

// blog 存入草稿
export const blogDraft = (data) => {
  return http.fetchPost('/api/blogdraft', data)
}
