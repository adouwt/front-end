var express = require("express");
var app = express();
var path = require("path");
var router = require("./router/router.js");
var routerSearch = require("./router/search.js");
var formidable = require("formidable");

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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'unknown')
  res.header("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  next();
});


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./assets"));

app.get("/",router.index);

//我的发布
// app.get("/mypost", routerUser.list);
//search
// app.get("/search",routerSearch.list);

//执行登陆业务
app.post("/doLogin",router.doLogin);

//生成电影院相关数据接口
app.post("/doCinemaSubmit",router.doCinemaSubmit);

//个人中心页
// app.get("/usercenter",router.showUserCenter);

app.get("/cinema/:targetId/ticket",router.showSelectPage);

app.post('/seatHandle', router.seatHandle)
//退出
app.get("/user_exit",router.logout);

//提交修改密码
app.post("/reviseMyMsg",router.reviseMyMsg);
//test
app.get("/hello",router.hello);


app.listen(config.port, function () {
	console.log("项目启动成功: " + config.port);
});
