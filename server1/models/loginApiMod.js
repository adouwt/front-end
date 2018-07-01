// 基础模块包
var path = require("path");
var fs = require("fs");

// 第三方包
//表单提交
var formidable = require("formidable");
var mongo = require('mongodb');
var Ob = mongo.ObjectID;

// 自己封装的方法
var db = require("../util/db.js");
var ds = require("../util/datastruct.js").ds;
var md5 = require("../util/md5.js");
var util = require("../util/util.js");

// 执行登录
exports.login = function (req,res,next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    //表单数据
    var username = fields.username;
    var userpassword = fields.userpassword;
    userpassword_handel= md5(md5(userpassword)+"202");
    db.find("users",{"username" : username},function(err,result){

      if(err){
          res.send("-5");//随便去，服务器错误
          return;
      }
      if(result.length == 0){
          res.send("-1");//用户名不存在
          return;
      }
      if(userpassword_handel == result[0].userpassword){
          req.session.login = "1";
          req.session.username= username;
          req.session.uid = result[0]._id;
          console.log(req.session.uid, "login", Math.floor(new Date().getTime()/1000));
          res.send("1");
          return;
      }else{
          res.send("-2");//密码错误
          return;
      }
    });
  })
}

//退出登录  
exports.logout= function (req,res,next) {
  req.session.login=false;
  req.session.username=false;
  res.render("index", {
    userdata:{}
  });
}