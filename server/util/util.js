var ds = require("../model/datastruct.js").ds;
var detailrouter = require("../model/datastruct.js").detailrouter;
var db = require("../model/db.js");
var mongo = require('mongodb');
var ob = mongo.ObjectID;
function getLoginUser(req, cb){
    var re = {};
    re.username = "";
    re.login = false;
    re.uid = "";
    if (req.session.login == "1") {
        re.username  = req.session.username;
        re.login     = true;
        re.uid = req.session.uid;
    }
    return re;
};
exports.getLoginUser = getLoginUser;
// 通过 detail 中 router 得到表 entry
exports.getCentryByRouter = function(router){
    return router.split("/")[1].toUpperCase();
}
// // 通过表 entry 得到 detail 中的 router
// exports.getRouterByCentry = function(centry){
//     return detailrouter[centry];
// }
//0～9 a~z A~Z 的随机不重复字符串

exports.randomStr = function randomStr (length, str) {
    if (!length) {
      len = 32;
    }

    var samples = str || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var randString = ''
    for (var i = 0; i < len; i++) {
      var randIndex = Math.floor(Math.random() * samples.length);
      randString += samples[randIndex];
    }
    return randString;

};

function GetDateStrFromTS(ts){
    var newDate = new Date();
    newDate.setTime(ts);
    return newDate.toLocaleDateString() + " "+ newDate.toLocaleTimeString();
};
exports.GetDateStrFromTS = GetDateStrFromTS;
exports.GetNowTS = function(){
    return Date.parse(new Date());
}
exports.isgoodid = function(idstr){
    return ob.isValid(idstr);
}

function getTitleAndContent(cname, item){
    var titlecontent = [];
    if (cname==ds.DONATE){
        titlecontent.push("捐助");
        titlecontent.push(item.userGoodsName);
        return titlecontent;
    }
    if (cname==ds.EVENT){
        titlecontent.push(item.eventTitle);
        titlecontent.push(item.eventContent);
        return titlecontent;
    }
    if (cname==ds.EXCHANGE){
        titlecontent.push("互换");
        titlecontent.push(item.userGoodsName);
        return titlecontent;
    }
    if (cname==ds.HELP){
        titlecontent.push("求助");
        titlecontent.push(item.userGoodsName);
        return titlecontent;
    }
    if (cname==ds.NOTE){
        titlecontent.push(item.noteTitle);
        titlecontent.push(item.noteContent);
        return titlecontent;
    }
    if (cname==ds.SALE){
        titlecontent.push("变卖");
        titlecontent.push(item.userGoodsName);
        return titlecontent;
    }
    if (cname==ds.SEND){
        titlecontent.push("福利");
        titlecontent.push(item.userGoodsName);
        return titlecontent;
    }
}
// mongo 
exports.list = function(req, res, next, cname){
    console.log("[list] --", cname);
    var userinfo = getLoginUser(req);
    if (userinfo.uid == ""){
        needlogin(res);
        return;
    }
    //这个页面接收一个参数，页面
    var page = req.query.page;
    db.find(cname,{},{"pageamount":10,"page":page,"sort":{"publicTime":-1}},function(err,result){
        for (var idx in result){
            var titlecontent = getTitleAndContent(cname, result[idx]);
            result[idx]["title"] = titlecontent[0];
            result[idx]["content"] = titlecontent[1];
            result[idx]["publicTime"] = GetDateStrFromTS(result[idx]["publicTime"]);            
        }
        var whichview = {};
        whichview[cname] = true;
        console.log("[list] -- ", result);
        res.render("common-list",{
            userdata:userinfo,
            pagedata:{
              result:result,
              renderactive:whichview
            }
        });
    });
};
function needlogin (res) {
    res.render("index", {
        userdata:{}
    });
}
exports.needlogin = needlogin;