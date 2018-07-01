'use strict'

/* 内建模块 */
/* 第三方模块 */

/* 项目模块 */
var loginApiMod     = require('../models/loginApiMod.js');

/* 基础模块 */

/**
Hello World
*/
exports.login = function(req, res, next) {
  res.send('hello login');
};

exports.logout = function(req, res, next) {
  res.send('hello logout');
};