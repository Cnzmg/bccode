//http 请求获取数据接口地址
var httpUpImg = "http://120.79.53.95/";
var httpUpData = "http://120.79.53.95/";
var wxUri = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx71c7dc4f5208bb07&redirect_uri='+ window.location.href +'&response_type=code&scope=snsapi_userinfo&state=wx';
var wxUribase = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx71c7dc4f5208bb07&redirect_uri='+ window.location.href +'&response_type=code&scope=snsapi_base&state=wx';
var jzm = {};
// var httpUpData = "http://10.0.0.25:80/" //http://120.79.53.95/";
//微信登录
function getQueryString(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
  var rCouponId = getQueryString("rCouponId");   //分享出去的优惠卷id
  var machineNumber = getQueryString("machinenumber"); //机器端扫码抽奖
  var TokenObj = ""; // setToken
  if (!rCouponId)
    {
      rCouponId = 0;
    };
  var utoken = JSON.parse(localStorage.getItem("token"));   //用户权限指令
  var code = getQueryString("code");  //微信登录code
  if(utoken && machineNumber)
    {
      luckdrawer(utoken.token,utoken.userid);
    };
  if (!utoken)
  {
      if (!code)
          {
            window.location.href = wxUri;
          }
      else
          {
              getUserToken();
          };
  };
  if(rCouponId && utoken)
  {
    if (!code)
      {
        window.location.href = wxUribase;
      }
  else
      {
          getUserToken();
      };
  };
function getUserToken()
{
  $.ajax({
      url: httpUpData + 'WeChat_login',
      type: 'GET',
      async: false,
      dataType: 'json',
      data: {code: code,rCouponId: rCouponId}
    })
    .done(function(reg) {
        if (reg.statusCode.status == 1000)
          {
              TokenObj = {token:reg.user_token,userid:reg.user_id};
              localStorage.setItem("token",JSON.stringify(TokenObj));
              if(reg.type == 1)
                {
                  //获取首次登录坐标
                  var geolocation = new BMap.Geolocation();
                  geolocation.getCurrentPosition(function(r){
                      var longitude = r.longitude;   //当前位置 经纬度
                      var latitude = r.latitude;  //当前位置 经纬度
                      $.get(httpUpData + 'save_user_location?userId=' + reg.user_id + "&userToken=" + reg.user_token +"&longitude=" +longitude + "&latitude="+latitude,function(reg) {
                          $("#tipie").html('<a style="color:#ccc;font-size:1.2rem;" href="http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html">收到1张优惠券  点击到我的优惠券查看详情→</a>').fadeIn(100);
                          window.location.href="./HTMLactivity/my_activity4-5.html";
                        });
                  });
                };
                if(machineNumber)
                  {
                    luckdrawer(reg.user_token,reg.user_id);
                  };
          }
          else if (reg.statusCode.status == 1035)
          {
            TokenObj = {token:reg.user_token,userid:reg.user_id};
            localStorage.setItem("token",JSON.stringify(TokenObj));
            if(reg.type == 1)
              {
                //获取首次登录坐标
                  var geolocation = new BMap.Geolocation();
                  geolocation.getCurrentPosition(function(r){
                  var longitude = r.longitude;   //当前位置 经纬度
                  var latitude = r.latitude;  //当前位置 经纬度
                  $.get(httpUpData + 'save_user_location?userId=' + reg.user_id + "&userToken=" + reg.user_token +"&longitude=" +longitude + "&latitude="+latitude,function(reg) {
                      $("#tipie").html('<a style="color:#ccc;font-size:1.2rem;" href="http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html">收到1张优惠券    点击到我的优惠券查看详情→</a>').fadeIn(100);
                    });
                  });
              };
            alert(reg.statusCode.msg);
          }
        else if (reg.statusCode.status == 1036)
          {
            TokenObj = {token:reg.user_token,userid:reg.user_id};
            localStorage.setItem("token",JSON.stringify(TokenObj));
            if(reg.type == 1)
              {
                //获取首次登录坐标
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                var longitude = r.longitude;   //当前位置 经纬度
                var latitude = r.latitude;  //当前位置 经纬度
                $.get(httpUpData + 'save_user_location?userId=' + reg.user_id + "&userToken=" + reg.user_token +"&longitude=" +longitude + "&latitude="+latitude,function(reg) {
                    $("#tipie").html('<a style="color:#ccc;font-size:1.2rem;" href="http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html">收到1张优惠券    点击到我的优惠券查看详情→</a>').fadeIn(100);
                  });
                });
              };
            setTimeout(function()
              {
                alert(reg.statusCode.msg);
                window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html';
              }, 2000);
          }
          else if (reg.statusCode.status == 1037)
          {
            TokenObj = {token:reg.user_token,userid:reg.user_id};
            localStorage.setItem("token",JSON.stringify(TokenObj));
            if(reg.type == 1)
              {
                //获取首次登录坐标
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                var longitude = r.longitude;   //当前位置 经纬度
                var latitude = r.latitude;  //当前位置 经纬度
                $.get(httpUpData + 'save_user_location?userId=' + reg.user_id + "&userToken=" + reg.user_token +"&longitude=" +longitude + "&latitude="+latitude,function(reg) {
                    $("#tipie").html('<a style="color:#ccc;font-size:1.2rem;" href="http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html">收到1张优惠券    点击到我的优惠券查看详情→</a>').fadeIn(100);
                  });
                });
              };
            alert(reg.statusCode.msg);
          }
          else if (reg.statusCode.status == 1038)
          {
            TokenObj = {token:reg.user_token,userid:reg.user_id};
            localStorage.setItem("token",JSON.stringify(TokenObj));
            if(reg.type == 1)
              {
                //获取首次登录坐标
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                var longitude = r.longitude;   //当前位置 经纬度
                var latitude = r.latitude;  //当前位置 经纬度
                $.get(httpUpData + 'save_user_location?userId=' + reg.user_id + "&userToken=" + reg.user_token +"&longitude=" +longitude + "&latitude="+latitude,function(reg) {
                    $("#tipie").html('<a style="color:#ccc;font-size:1.2rem;" href="http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html">收到1张优惠券    点击到我的优惠券查看详情→</a>').fadeIn(100);
                  });
                });
              };
            setTimeout(function()
              {
                alert(reg.statusCode.msg);
                window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/html/my_coupon.html';
              }, 2000);
          }
          else
          {
               console.log(reg.statusCode.msg);
               window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/index.html';
          };
    });
};

//往页面中添加公共底部
function add_foot(htmstr){
    var Div = '<div class="row navbar-fixed-bottom" style="border-top: 1px solid #8c8c8c;color:#fff; text-align: center; padding-left:6.3%; padding-right:6.3%;  background-color: #000; height:8%;">'+
      '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style=" height:100%; " >'+
         '<a href="http://www.cbcoffee.cn/sharedcoffee/index.html" style="display: block; color:#fff; height:100%; padding-top:6%;" id="foot_first" >'+
            '<span class="action" style="display: block;"><img style="width:30%;" src="http://www.cbcoffee.cn/sharedcoffee/image/coffee_action.png" /></span>'+
            '<span style="font-size:1rem;">咖啡菜单</span>'+
          '</a>'+
      '</div>'+
      '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style=" height:100%; ">'+
          '<a href="http://www.cbcoffee.cn/sharedcoffee/html/near.html"  style="display: block; color:#fff; height:100%; padding-top:6%;" id="foot_second" >'+
           '<span style="display: block;"><img style="width:30%;" src="http://www.cbcoffee.cn/sharedcoffee/image/location.png" /></span>'+
            '<span style="font-size:1rem;">附近寻机</span>'+
          '</a>'+
      '</div>'+
      '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style=" height:100%; ">'+
          '<a href="http://www.cbcoffee.cn/sharedcoffee/html/my.html"  style="display: block; color:#fff; height:100%; padding-top:6%;" id="foot_third">'+
            '<span style="display: block;"><i class="msg"></i><img style="width:30%;" src="http://www.cbcoffee.cn/sharedcoffee/image/Home.png" /></span>'+
            '<span style="font-size:1rem;">会员中心</span>'+
          '</a>'+
      '</div>'+
'</div>';
htmstr.append(Div);
JSON.parse(localStorage.getItem("token")).type == 1 ? $(".msg").show() : null;
};

var UserIdToken = JSON.parse(localStorage.getItem("token"));  //获取共用的userid token
var us_userid = UserIdToken.userid;  //用户id
var us_token = UserIdToken.token;  // 用户令牌

if(UserIdToken)
  {
    sharedLoaw(us_token,us_userid);
  };
function luckdrawer(token,id) {  //机器端抽奖
  $.ajax({
    url: httpUpData + 'raffle_init',
    type: 'get',
    dataType: 'json',
    async:false,
    data: {userId: id,userToken:token,machineNumber:machineNumber,type:1},
  })
  .done(function(reg) {
    if(reg.statusCode.status == 6666)
      {

        setTimeout(function(){
          if(reg.type == 2)
          {
            alert(reg.statusCode.msg);
            window.location.href = './html/my_coupon.html';
          }
        else if(reg.type == 3)
          {
            alert(reg.statusCode.msg);
            window.location.href = './html/my_redeemCode.html';
          }
          else
          {
            alert(reg.statusCode.msg);
          };
        }, 5000);
      }
    else if(reg.statusCode.status == 1051 || reg.statusCode.status == 1005)
      {
        alert(reg.statusCode.msg);
        window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/index.html';
      }
    else
      {
        alert(reg.statusCode.msg);
      }
  })
};
function sharedLoaw(){
//**************微信分享函数****************
  $.get(httpUpData + 'share_coupon_verification?userId='+ us_userid +'&userToken='+ us_token +'&url='+encodeURIComponent(location.href.split('#')[0]),function(data,status){
      wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wx71c7dc4f5208bb07', // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature,// 必填，签名，见附录1
          jsApiList: ['onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function (){

          wx.onMenuShareAppMessage({ //微信分享朋友
          title: "咖啡蜗", // 分享标题
          desc: "接纳每一颗热衷共享的种子，一同繁衍它的“城市大共享”", // 分享描述
          link: "http://www.cbcoffee.cn/sharedcoffee/index.html", // 分享链接
          imgUrl: "http://www.cbcoffee.cn/sharedcoffee/coffee.png", // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
              // 用户确认分享后执行的回调函数
              console.log("分享成功");
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
              console.log("取消分享");
          }
      });

      });

  });
};

//时间戳转换方法
function getDateTime(data)
{
    // var time = new Date(data).toLocaleString();
    // return time;
    var date = new Date(data);   //如果date为10位不需要乘1000
    var Y = date.getFullYear() + '/';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());

    return Y+M+D+h+m+s;
}
// 日期格式化
Date.prototype.Format = function (time) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(time)) time = time.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(time)) time = time.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return time;
}

//待办事项
function messager(){
  $.ajax({
      url: httpUpData + 'verify_user_warm',
      type: 'GET',
      dataType: 'json',
      data: {userId: us_userid,userToken:us_token,type: 2}
    })
    .done(function(reg){
        reg.warmList == null ? $(".msg").hide() : (function(){
          $(".msg").show();
          var i = 0;
          for(; i < reg.warmList.length; i++){
              reg.warmList[i].type == 1 ? (reg.warmList[i].num != 0 ? $('.phmessage').show() : null ) : (reg.warmList[i].type == 2 ? (reg.warmList[i].num != 0 ? $('.redeem_msg').show().text(reg.warmList[i].num) : null ) : ( reg.warmList[i].type == 3 ? (reg.warmList[i].num != 0 ? $('.coupon_msg').show().text(reg.warmList[i].num) : null ) : (reg.warmList[i].num != 0 ? $('.order_msg').show().text(reg.warmList[i].num) : null ) ));
          };
        })();
    })
};
messager();
