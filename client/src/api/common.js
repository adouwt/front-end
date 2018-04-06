import axios from 'axios'
import {getDomain, getStore, setStore, pickQuery} from '@/utils'
import router from '../router/router.js';

axios.defaults.timeout = 5000

// 设置三级域名和token
let baseUrlStr = location.hash.substring(1)
let baseUrlHash = baseUrlStr.split('?')[0]

if (baseUrlHash === '/loading') {
  setStore('wwwXAuthToken', pickQuery(baseUrlStr).xAuthToken)
  setStore('alias', pickQuery(baseUrlStr).alias)
}

axios.defaults.baseURL = getDomain()

// http request 拦截器
axios.interceptors.request.use(config => {
  const token = getStore('wwwXAuthToken')
  config.headers = {
    'Content-Type': 'application/json'
  }

  // header设置认证token
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config
}, error => {
  alert(error)
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  // 系统报错
  if (response.data && response.data.err !== 0) {
    router.push({name: 'err', query: {code: response.data.err}});
  }

  return response
}, error => {
  if (error && error.response) {
    if (error.response.status === 404) {
      router.push({name: 'err', query: {code: error.response.status}})
    }
    if (error.response.status === 401) {
      router.push({name: 'err', query: {code: error.response.status}});
    }
    if (error.response.status === 500) {
      router.push({name: 'err', query: {code: error.response.status}});
    }
  } else {
    const code = 504
    router.push({name: 'err', query: {code: code}});
  }
  return Promise.resolve(error.response)
})

/**
* get 请求方法
* @param url
* @param params
* @returns {Promise}
*/
export default {
  // get请求
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res && res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
  * post 请求方法
  * @param url
  * @param data
  * @returns {Promise}
  */
  fetchPost (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(res => {
        resolve(res && res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
