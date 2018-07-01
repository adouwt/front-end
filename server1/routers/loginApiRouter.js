/** 首页API */

'use strict'

/* 第三方模块 */
var router = require('express').Router();

/* 项目模块 */
var loginApiCtr = require('../controllers/loginApiCtr');

/** PUBLIC
测试接口
返回
  <json> 详细如下：
    {
      <公共返回值>,
      data: "Hello World!"
    }
*/
router.post('/api/login',
  loginApiCtr.login
);

router.post('/api/logout',
  loginApiCtr.logout
);

module.exports = router;
