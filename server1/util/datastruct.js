exports.ds = {
    USER:"users",
    MSGBOX:"msgbox",
    NOTE:"note",
    SEND:"send",
    EVENT:"event",
    EXCHANGE:"exchange",
    SALE:"sale",
    DONATE:"donate",
    HELP:"help",
    TOPK:"topk",
    SHARECODE:"sharecode",
    SUPERUSER:"superuser"
};
exports.detailrouter = {
    USER:"",
    MSGBOX:"",
    NOTE:"/note/getdetail",
    SEND:"/send/getdetail",
    EVENT:"/event/getdetail",
    EXCHANGE:"/exchange/getdetail",
    SALE:"/sale/getdetail",
    DONATE:"/donate/getdetail",
    HELP:"/help/getdetail"
};
var nullcb = function(err, result){}
var db = require("./db.js");
var mongo = require('mongodb');
exports.incview = function(cname, idstr){
    db.updateMany(cname,{"_id":mongo.ObjectID(idstr)},{
        "$inc" : {
            view : 1
        }
    }, nullcb);
};
