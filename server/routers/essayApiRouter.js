/** 首页API */

'use strict'

/* 第三方模块 */
var router = require('express').Router();

/* 项目模块 */
var essayApiCtr = require('../controllers/essayApiCtr.js');

/** PUBLIC
测试接口

返回
  <json> 详细如下：
    {
      <公共返回值>,
      data: "Hello World!"
    }
*/
router.get('/api/essayNote',
  essayApiCtr.essayNote
);

module.exports = router;
