$(function(){

  //查找数组中的val 的下标
  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
    }
    return -1;
  }
  //找对数值对应下标，删除
  Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
  };


  //搜索框
  $(document).on("click", ".sec-show-search-logo" ,function() {
    $(this).hide().siblings().show();
  })

  $(document).on("click", "#search-submit" ,function() { 
    var searchGoods = $("#search-title").val();
    console.log(searchGoods)
    window.location ="/search?keywords="  +searchGoods
  })

 //返回上一页
 $(".return-last").click(function(){
   window.history.go(-1)
 })

  // 当填写表单的取消红色标记
  $(document).on('propertychange input', '.form-good-submit input', function() {
    $(this).removeClass('err-border')
    .next(".err-msg").removeClass("err-fadeIn");
  });


  //所有页面提交的时候，表单数值的验证
  function formVertify () {
    common.isNothing($("#cinemaName"));
    common.isNothing($("#cinemaAddress"));
    common.isNothing($("#movieName"));
    common.isNothing($("#moviePrice"));

    common.isNothing($("#seatRow"));
    common.isNothing($("#seatCol"));
    common.isNothing($(".play-time"));
    common.isNothing($("#notice"));
    console.log(33)
  }
  
  
  //分页条获得分页数字,然后跳转到拼接字符串的页面
  function getPage(page) {
    var window_href   = location.pathname;
    var newWindowHref =  window_href + "?page=" + page;
    window.location = newWindowHref;
  }

  // 给分页条追加active
  function addActive () {
    var window_href = window.location.href;
    window_href = window_href.split("=");
    var pageNumber = parseInt(window_href[1])+1;
    $(".pagination li a:contains(" + pageNumber +")").addClass("active");
  }

  //分页查询
  //函数封装，将请求分页条的数据进行封装
  function pageReq (reqUrl,ele) {
    $.get("/"+reqUrl,function (result) {
      var amount = parseInt(result);
        //总页数
        var pageamount = Math.ceil(amount /10);//返回的是 与它相近的大1数值
        for (var i = 0; i < pageamount; i++) {
          $("."+ele).append("<li ><a href='javascript:void(0);'>" +(i+1)+ "</a></li>");
        }
        addActive();
        //监听
        $(".pagination li").click(function () {
            var page = $(this).index();
            getPage(page);
        });
    })
  }


  //index 的表单提交
  $('#cinemaSubmit').click(function(){
    $('#ticket-code').html('');
    common.errArr=[]
    formVertify ()

    if(common.notEmpty(common.errArr)){
      return ;
    };
    var dataPlayTime = [];
    var playTime = $('.play-time');
    console.log()
    $.each(playTime,function(){
      dataPlayTime.push($(this).val())
    })
    var dataPlayTime = dataPlayTime.toString();
    console.log(dataPlayTime)
    var emptySeat     = $('.empty-seat').val()
    var cinemaName    = $('#cinemaName').val()
    var cinemaAddress = $('#cinemaAddress').val()
    var movieName     = $('#movieName').val()
    var moviePrice    = $('#moviePrice').val()
    var seatCol       = $('#seatCol').val()
    var seatRow       = $('#seatRow').val()
    var notice        = $('#notice').val();
    $.post('/doCinemaSubmit',{
      'cinemaName':cinemaName,
      'cinemaAddress':cinemaAddress,
      'movieName':movieName,
      'seatRow':seatRow,
      'seatCol':seatCol,
      'playTime':dataPlayTime,
      'notice':notice,
      'moviePrice':moviePrice,
      'emptySeat':emptySeat
    },function (result) {
     if(result.success) {
      $('.show-link').modal('show');
      var link= window.location.origin + '/cinema/'+result.success[0]._id;
      $('.genorate-link').attr('href','/cinema/'+result.success[0]._id)
      $('#ticket-code').qrcode(link)
      $('input').val('')
     }
     if(result.err) {
       alert('服务器故障，请稍后重试')
     }
    })
    .fail(function(){
      console.log('err')
    })
  })

  //选座页面抓table的宽度 赋值与body
  var tableWidth = $('.movie-seat-select-table').css('width');
  $('body').css('width',tableWidth)
})


