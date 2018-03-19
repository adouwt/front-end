var formidable = require("formidable");
var db = require("../model/db.js");
var ds = require("../model/datastruct.js").ds;
var util = require("../util/util.js");
var mongo = require('mongodb');

var SEARCHFIELD = {};
SEARCHFIELD[ds.DONATE] = ["userGoodsName", "userGoodsaddText", "userName"];
SEARCHFIELD[ds.EXCHANGE] = ["userGoodsName", "userGoodsaddText", "userName"];
SEARCHFIELD[ds.HELP] = ["userGoodsName", "userGoodsaddText", "userName"];
SEARCHFIELD[ds.NOTE] = ["username", "noteTitle", "noteContent"];
SEARCHFIELD[ds.SALE] = ["userGoodsName", "userGoodsaddText", "userName"];
SEARCHFIELD[ds.SEND] =  ["userGoodsName", "userGoodsaddText", "userName"];
SEARCHFIELD[ds.EVENT] = ["eventTitle", "eventContent"];
function getCon(collection, regObj){
    var orr = [];
    for (var idx in SEARCHFIELD[collection]){
        var orrele = {};
        orrele[SEARCHFIELD[collection][idx]] = regObj;
        orr.push(orrele);
    }
    return {"$or":orr};
}
exports.list = function(req,res,next){
    console.log("router :[/search]:exports.list", req.query);
    var userinfo = util.getLoginUser(req);
    if (userinfo.uid == ""){ // 没有登录
        util.needlogin(res);
        return;
    }
    var keywords = req.query.keywords;
    var searchPattern = new RegExp(keywords);
    var reall = [];
    db.find(ds.DONATE,getCon(ds.DONATE, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
        if (!err){
            for (var idx in result){
              result[idx]["title"] = "捐助";
              result[idx]["content"] = result[idx]["userGoodsName"];
              reall.push(result[idx]);
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////
        db.find(ds.EXCHANGE,getCon(ds.EXCHANGE, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
            if (!err){
                for (var idx in result){
                  result[idx]["title"] = "二手互换";
                  result[idx]["content"] = result[idx]["userGoodsName"];
                  reall.push(result[idx]);                  
                }
            }
            ////////////////////////////////////////////////////////////////////////////////////////////////
            db.find(ds.HELP,getCon(ds.HELP, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
                if (!err){
                    for (var idx in result){
                      result[idx]["title"] = "求助";
                      result[idx]["content"] = result[idx]["userGoodsName"]; 
                      reall.push(result[idx]);                      
                    }
                }
                ////////////////////////////////////////////////////////////////////////////////////////////////
                db.find(ds.NOTE,getCon(ds.NOTE, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
                    if (!err){
                        for (var idx in result){
                          result[idx]["title"] = result[idx]["noteTitle"];
                          result[idx]["content"] = result[idx]["noteContent"];
                          reall.push(result[idx]);                          
                        }
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////
                    db.find(ds.SALE,getCon(ds.SALE, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
                        if (!err){
                            for (var idx in result){
                              result[idx]["title"] = "变卖";
                              result[idx]["content"] = result[idx]["userGoodsName"];
                              reall.push(result[idx]);                              
                            }
                        }
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        db.find(ds.SEND,getCon(ds.SEND, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
                            if (!err){
                                for (var idx in result){
                                  result[idx]["title"] = "福利";
                                  result[idx]["content"] = result[idx]["userGoodsName"];
                                  reall.push(result[idx]);                                  
                                }
                            }
                            ////////////////////////////////////////////////////////////////////////////////////////////////
                            db.find(ds.EVENT,getCon(ds.EVENT, searchPattern),{"sort":{"publicTime":-1}},function(err,result){
                                if (!err){
                                    for (var idx in result){
                                      result[idx]["title"] = result[idx]["eventTitle"];
                                      result[idx]["content"] = result[idx]["eventContent"];
                                      reall.push(result[idx]);                                      
                                    }
                                }
                                for (var idx in reall){
                                    reall[idx]["publicTime"] = util.GetDateStrFromTS(reall[idx]["publicTime"]);
                                }
                                reall.sort(function(a, b){
                                    return b.publicTime - a.publicTime;
                                })
                                res.render("search-result",{
                                    userdata:userinfo,
                                    pagedata:{
                                      result:reall
                                    }
                                });
                            });
                        });
    
                    });
        
                });
            });

        });
    
    });
  
};