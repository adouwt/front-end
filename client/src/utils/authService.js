import Cookies from 'universal-cookie'
import { CookieDomain } from '../config.js'
const cookies = new Cookies()
let cookieConfig = {}
if (CookieDomain !== '') {
  cookieConfig = { domain: CookieDomain } // path:'/',maxAge:365*24*60*60
}

export function saveCookie (name, value) {
  cookies.set(name, value, cookieConfig)
}

export function getCookie (name) {
  return cookies.get(name)
}

export function removeCookie (name) {
  cookies.remove(name, cookieConfig)
}

export function signOut () {
  cookies.remove('token', cookieConfig)
}

export function isLogin () {
  return !!cookies.get('token') // !! 转成布尔值
}

// 验证是否是超管
export function isAdmin () {
  let isadmin = cookies.get('isadmin') === 'isadmin';
  console.log(isadmin, 'isadmin')
  if (isLogin() && isadmin) {
    return true
  }
}
