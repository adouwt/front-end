//又提交，引入formidable
var formidable = require("formidable");
//引入封装好的db.js，从setting走
var db = require("../util/db.js");
var ds = require("../util/datastruct.js").ds;

var md5 = require("../util/md5.js");

var path = require("path");

var fs = require("fs");

var file = require("../util/file.js");

var util = require("../util/util.js");
var mongo = require('mongodb');
var Ob = mongo.ObjectID;
var userData = {};

//注册业务
exports.doRegist = function (req,res,next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var username = fields.username;
    var userpassword = fields.userpassword;
    var sharecode = fields.sharecode;
    // 邀请码
    if (!sharecode){
      res.send("-11");
      return;
    }
    if (!Ob.isValid(sharecode)){
      res.send("-11");
      return;
    }
    // sharecode = "59ac32bbab6a439ed60ebb74"; 测试用
    db.find(ds.SHARECODE, {"_id":mongo.ObjectID(sharecode)}, function(err, result){
      if (err){
        res.send("-11");
        return;
      }
      if (result.length == 0){
        res.send("-11");
        return;
      }
      db.find("users",{"username": username},function (err,result) {
        if(err) {
          res.send("-3");
          return;
        }
        if(result.length !=0) {//数据库查询到有数据占用
          res.send("-1");//被占用
          return;
        }
        //设置MD5加密
        userpassword = md5(md5(userpassword)+"adou");
        //返回result.length的长度为０，说明数据库中没有此名字
        db.insertOne("users",{
          "msgnum" : 0,
          "username" :  username,
          "userpassword" :  userpassword,
          "nickname" :  '',
          "avatar" : "/user/default.jpg"
        },function(err,result){
          if(err){
            res.send("-3");//服务器错误
            return;
          }
          refresh(req,res,username);
          // 删除此邀请码
          db.deleteMany(ds.SHARECODE, {"_id":mongo.ObjectID(sharecode)}, function(err, result){});
        });
      });  
    });
  });
}
function refresh(req,res,username){
  db.find("users",{"username" : username},function(err,result){
    if(err){
      res.send("-5");//随便去，服务器错误
      return;
    }
    if(result.length == 0){
        res.send("-1");//用户名不存在
        return;
    }
    req.session.login = "1";
    req.session.username= username;
    req.session.nickname = result[0].nickname || "";
    req.session.avatar = result[0].avatar;
    req.session.uid = result[0]._id;
    req.session.msgnum = result[0].msgnum;
    req.session.issuper = "";
    res.send("1");
  });
}
// //执行登录
exports.doLogin = function (req,res,next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    //表单数据
    var username = fields.username;
    var userpassword = fields.userpassword;
    userpassword_handel= md5(md5(userpassword)+"adou");
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

// //退出登录  
exports.logout= function (req,res,next) {
    req.session.login=false;
    req.session.username=false;
    res.render("index", {
      userdata:{}
    });
}


//生成电影院数据接口
exports.doCinemaSubmit = function (req,res,next) {
  var form = new formidable.IncomingForm();
  console.log('有人在调用这个接口了')
  form.parse(req, function(err, fields, files) {
    var cinemaName = fields.cinemaName;
    // var cinemaAddress = fields.cinemaAddress;
    // var movieName = fields.movieName;
    // var seatRow = fields.seatRow;
    // var seatCol = fields.seatCol;
    // var playTime = fields.playTime;
    // var notice = fields.notice;
    // var moviePrice = fields.moviePrice;
    // var emptySeat = fields.emptySeat;
    var returnData = {};
    // playTime       = playTime.split(',') //后端接受不了前端传来的数组，以后重新寻找form 包替换
    // emptySeat      = emptySeat.split('-') //后端结束不了前端传来的数组，以后重新寻找form 包替换
    db.insertOne("cinema",{//将相关数据插入collection 中
      // 'seatOrdered':[],
      'cinemaName':cinemaName,
      // 'cinemaAddress':cinemaAddress,
      // 'movieName':movieName,
      // 'seat':{'seatRow': Number(seatRow),'seatCol':Number(seatCol)},
      // 'playTime':playTime,
      // 'emptySeat':emptySeat,
      // 'notice':notice,
      // 'moviePrice':moviePrice
    },function(err,success){
      if(err) {
        returnData= {'err':'-3'}
        res.send("-3");//服务器错误
      }
      returnData = {'success':success.ops,'seatOrdered':[]};//返回提交的数据给前端
      res.send(returnData)
    });
  });
}

//访问选座位数据页面
exports.showSelectPage = function (req,res,next) {
  console.log('router:///showSelectPage')
  objId = req.params.targetId;
  db.find('cinema',{"_id":mongo.ObjectID(objId)},function(err,pageData){
    res.send(pageData[0])
  })
}

//访问首页
exports.index = function (req,res,next) {
  console.log("router: [/]:exports.index");
  var login    = req.session.login;
  var username = req.session.username;
  // var userinfo = util.getLoginUser(req);
  var userinfo = {'login':login,'username':username}
	res.send(userinfo)
}


//修改我的密码
exports.reviseMyMsg = function (req,res,next) {

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

      //表单数据
      var username = fields.username;

      var nickname = fields.nickname;

      var userpassword = fields.oldPwd;

      var userNewPwd = fields.newPwd;

      var useravatar = fields.useravatar;
      var uid        = fields.uid;

      userNewPwd_handel= md5(md5(userNewPwd)+"adou");

      userpassword_handel= md5(md5(userpassword)+"adou");

       
      
      if(useravatar.length>1000) {
        var avatar     = 'avatar/user/'+ uid + '.jpg';
        var base64     = useravatar.replace(/data:image\/([^;]+);base64,/,'');//去掉图片base64码前面部分data:image/png;base64
        var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
        
        fs.writeFile(avatar,dataBuffer,function(err){//用fs写入文件
            if(err){
                console.log(err);
            }else{
                console.log('头像修改成功！');
            }
        })
        avatar = avatar.replace("avatar/user/", "/user/");
      } else {
        var avatar = "/user/default.jpg"
      }
      
      db.find("users",{"_id":mongo.ObjectID(uid)},function(err,result){


          if(err){
              res.send("-5");//随便去，服务器错误
              return;
          }

          if(result[0].userpassword == userpassword_handel) {

          } else {

            // console.log("原密码不正确");
            res.send("4");//
            return;
          }


          db.updateMany("users",{"_id":mongo.ObjectID(uid)},{
            $set : {
              "userpassword" : userNewPwd_handel,
              "nickname"     : nickname,
              "avatar"       : avatar
            }
          },function (err,result) {

            // console.log(result)
            if(err) {
              // console.log(err);
              res.send("-4");
              return;
            }
            req.session.avatar = "";
            req.session.avatar = avatar;
            req.session.nickname = nickname;
            res.send("1");//发布成功
          })    
      })
    })
}

//处理前端传来的座位数据

exports.seatHandle = function(req, res, next) {
  console.log('api:seatHandle++///选座订票接口')
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var cinemaId = fields.cinemaId;
    var cinemaName = fields.cinemaName;
    var movieName = fields.movieName;
    var moviePrice = fields.moviePrice;
    var cinemaAddress = fields.cinemaAddress;
    var playTime = fields.playTime;
    var seatOrdered = fields.orderSeatArr;
    var returnData = {};
    var repeatSeat = [];
    var seatOrderedHandel = seatOrdered.split(',');
    //查找数据库，根据电影院的id
    db.find('cinema',{
      "_id":mongo.ObjectID(cinemaId)
    },function(seatErr,seatSucc){
      if(seatErr) {
        //查表错误，不存在此id
        returnData = {'notCinema':'-510'};
        res.send(returnData);
        return;
      }
      
      var DataSeatArr = seatSucc[0].seatOrdered;
      for(var i=0;i<DataSeatArr.length;i++) {
        for(var j=0;j<seatOrderedHandel.length;j++) {
          if(DataSeatArr[i] == seatOrderedHandel[j]){
            repeatSeat.push(seatOrderedHandel[j])
            returnData = {'seatOredered':'-511','currentSeat':repeatSeat};
          }
        }
      }
      if(repeatSeat.length>0) {
        res.send(returnData);
        return;
      }
      //如果数组中不存在此数据，表示此座位没有订购，更新订票的数组内容
      db.updateMany("cinema",
      {"_id":mongo.ObjectID(cinemaId)},//查找方式id
      {$push: {seatOrdered:{$each:seatOrderedHandel } }},//将数据push  数组
      function(err,succ){
        if(err) {
          console.log(err);//系统错误
          return 
        }
        //并给用户的电影院的选座collection 增加数据
        db.insertOne("usermoviedata",{
          'cinemaName':cinemaName,
          'movieName':movieName,
          'cinemaAddress':cinemaAddress,
          'seat':seatOrderedHandel,
          'playTime':playTime,
          'moviePrice':moviePrice
        },function(err,success){
          if(err) {
            returnData = {'sysErr':'-001'}
            res.send(returnData);//服务器错误
            return;
          }
          returnData = {'success':success.ops};
          res.send(returnData);
          return;
        });
      })
    })
  })
}

exports.hello = function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({'ddd': '234'});
}




