  // 生成二维码乱码 的解码
function utf16to8 (str) {
    var out, i, len, c;
    out = '';
    len = str.length;
    for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
    }
    return out;
  }
  // 判断设备是 pc的还是移动的
function os () {
  let ua = navigator.userAgent;
  let isWindowsPhone = /(?:Windows Phone)/.test(ua);
  let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  let isAndroid = /(?:Android)/.test(ua);
  let isFireFox = /(?:Firefox)/.test(ua);
  let isChrome = /(?:Chrome|CriOS)/.test(ua);
  let isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
  let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  let isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isChrome: isChrome
  }
}

export default {
  os: function () {
    return os()
  },
  utf16to8: function (str) {
    return utf16to8(str)
  }
}
  // if(os.isAndroid || os.isPhone){
  //   alert("-----");
  // }

  /**
 * 字符串拼接模版函数
 */
export function strFormat () {
  var args = Array.prototype.slice.call(arguments)
  if (args.length === 0) {
    return ''
  }

  var patten = args.shift().toString()
  return patten.replace(/\{(\d+)\}/g, function replaceFunc (m, i) {
    return args[i]
  })
}

/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export function queryToParse (url) {
  if (!url) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
};

/**
 * [包含Query的URL地址]
 * @param  {[type]} srcUrl [description]
 * @param  {[type]} query  [description]
 * @return {[type]}        [description]
 */
export function pickQuery (srcUrl, query) {
  if (!query) query = {};

  var queryStringInUrl = srcUrl.split('?')[1];
  if (queryStringInUrl) {
    var queryExprList = queryStringInUrl.split('&');
    for (var i in queryExprList) {
      var queryParts = queryExprList[i].split('=');
      var k = queryParts[0];
      var v = queryParts[1];

      query[k] = v;
    }
  }
  return query;
};

/**
 *
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
export function paramToQuery (obj) {
  if (!obj) return ''
  let pairs = []

  for (let key in obj) {
    let value = obj[key]
    if (value instanceof Array) {
      for (let i = 0; i < value.length; i++) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]))
      }
      continue
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  return pairs.join('&')
}

/**
 * 存储localStorage
 */
export function setStore (name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export function getStore (name) {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export function removeStore (name) {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 删除数组指定值
 */
export function removeArrItem (arr, name) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    return
  }
  // 找对数值对应下标，删除
  let index = arr.indexOf(name);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

/**
 * 域名拼接
 */
export function getDomain () {
  // 三级域名切换
  var baseUrl = process.env.API_ROOT
  var alias = getStore('alias') || 'www'

  return strFormat(baseUrl, alias)
}

/**
 * 课程url
 */
export function getCourseLogoUrl (str) {
  let imageUrl = str
  const re = /\/files\/courses\/[a-z0-9]+\/logo\/images\/[a-z0-9]+/g
  if (typeof str === 'string') {
    imageUrl = str.replace(re, function (value) {
      return getDomain() + value
    })
  }
  return imageUrl
}

/**
 * 课程简介图片url
 */
export function getCourseIntroUrl (str) {
  let imageUrl = str
  const re = /\/files\/courses\/[a-zA-Z0-9]+\/intro\/images\/[a-zA-Z0-9]+/g
  if (typeof str === 'string') {
    imageUrl = str.replace(re, function (value) {
      return getDomain() + value
    })
  }
  return imageUrl
}

/**
 * 课程内容图片url
 */
export function getCourseContentUrl (str) {
  let imageUrl = str
  const re = /\/files\/courses\/[a-zA-Z0-9]+\/sections\/[a-zA-Z0-9]+\/content\/images\/[a-zA-Z0-9]+/g
  if (typeof str === 'string') {
    imageUrl = str.replace(re, function (value) {
      return getDomain() + value
    })
  }
  return imageUrl
}


