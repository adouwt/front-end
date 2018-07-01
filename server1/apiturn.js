var express = require("express");
var app = express();
var path = require("path");
var formidable = require("formidable");
var request = require('request');
// var router = require("./router/router.js");
var session = require('express-session');
var config = require("./config.js");
//socket.io 公式
var http = require('http').Server(app);
var io = require('socket.io')(http);

//使用session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   genid: function(req){
// 	var form = new formidable.IncomingForm();
// 	var re = "";
// 	form.parse(req, function(err, fields, files) {
// 		var username = fields.username;
// 		re = username;
// 	});
// 	console.log(re);
// 	return re;
//   }
  //cookie: { secure: true }//不能要
  //将此设置为true时，如果浏览器没有使用HTTPS连接，客户端将不会将cookie发送回服务器。
}));

//设置跨域访问
app.all('*', function(req, res, next) {
  res.set('Content-Type', 'text/plain');
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8001");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'unknown')
  res.header("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  next();
});


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./assets"));

//路由转发的 转发nodejs 提供的接口
exports.apiturntest = function (req,res,next) {
  res.set('Content-Type', 'text/plain');
  request('http://127.0.0.1:8008/api/essayNote', (error, response, body) => {
    // res.send(res);
    res.json(body);
  })
}
app.get("/api/apiturntest",this.apiturntest);
// 生成404错误
// app.use(function gen404Error(req, res, next) {
//   var err = new error('EClientNotFound', 'routerNotFound', {
//     method: req.method,
//     url   : req.originalUrl
//   });

//   next(err);
// });

app.listen(8009, function () {
	console.log("项目启动成功: " + 8009);
});
