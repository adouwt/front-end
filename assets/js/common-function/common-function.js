$(function(){
    window.common = {};
    common.errArr = [];
    //事件格式化
    common.FormatDate = function FormatDate (strTime) {
        var date = new Date(strTime);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate() + "-" +date.getHours() + "：" +date.getMinutes();
    }
    //表单验证
    common.isNothing = function isNothing (dom) {
			var domValue = dom.val();
			if(domValue.length<1) {
			dom.addClass("err-border").next(".err-msg").addClass("err-fadeIn");
			common.errArr.push("error");
			return false;
			}
    }
    //电话号码的验证
    common.isPhone = function isPhone(dom) {
        var domValue = dom.val();
        if(domValue.length>1 && !(/^1[34578]\d{9}$/.test(domValue))){
            dom.addClass("error-border").parent("div").next().next(".error-msg-formate").addClass("error-fadeIn");
             common.errArr.push("error");
            return false;
        }
    }

    
    //判断不为空
    common.notEmpty = function(arr){
      // if(arr == undefined) return false;
			if(arr.length>0) {
				return true;
			} else {
				return ;
			}
		}
		
    //判断数组的个数是4
    common.notFour = function (arr){
			if(arr.length>4 || arr.length< 1) {
				$(".error-img-file").fadeIn();
				common.errArr.push("error");
				return false;
			} else {
				return;
			}
    }
    //判断是6-8 的密码
    common.ispwd = function(str){
			var patrn=/^(\w){6,20}$/;
			if(!patrn.test(str)) { 
				common.errArr.push("error");
				$(".true-pwd-msg").fadeIn();
				return false;
			}
    }

    //处理图片base64-压缩base字符串的长度
    common.handelbase = function(width, height, ratio, file){
        var canvas = document.getElementById("uploadImg");
        var cxt = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        var img = new Image();
        img.src = file;
        cxt.drawImage(img, 0, 0, width, height);
        var imgBase = canvas.toDataURL("image/jpeg", ratio);

        common.imgBase64Arr.push(imgBase);
    }

    common.decodeChinese = function utf16to8(str) {  //生成二维码乱码 的解码
        var out, i, len, c;    
        out = "";    
        len = str.length;    
        for(i = 0; i < len; i++) {    
        c = str.charCodeAt(i);    
        if ((c >= 0x0001) && (c <= 0x007F)) {    
            out += str.charAt(i);    
        } else if (c > 0x07FF) {    
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        } else {    
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        }    
        }    
        return out;    
    }  

    return common;
})