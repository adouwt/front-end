'use strict'

/* 内建模块 */
/* 第三方模块 */

/* 项目模块 */
var registApiMod     = require('../models/registApiMod.js');

/* 基础模块 */

/**
Hello World
*/
exports.regist = function (req,res,next) {
  res.send('hello regist')
}