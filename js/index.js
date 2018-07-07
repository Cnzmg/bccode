//加载banner图片
function find_banner()
{
    var user = JSON.parse(localStorage.getItem("token"));
    $.ajax({
        url: httpUpData + 'find_advertisement',
        type: 'GET',
        dataType: 'json',
        async: false,
        // data: {userId: user.userid,userToken: user.token}
        data: {userId: us_userid,userToken: us_token}
    })
    .done(function(reg) {
        if (reg.statusCode.status == 1005) 
            {
                localStorage.clear();
                window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/index.html';
            };
        console.log("success");
        var str = "";
        for(var i = 0; i < reg.list.length; i++)
        {
            if (reg.list[i].adType == 1) 
            {
                str += '<li style="width:100%;position:relative;"><a href="'+ reg.list[i].adUrl +'" title="'+ reg.list[i].adTitle +'"><img src="'+ reg.list[i].adShowUrl +'" alt='+ reg.list[i].adOrder +' ></a><span style="display:inline-block;position:absolute;bottom:0;left:0;z-index:9999999999;color:#fff;width:100%;line-height:30px;background:rgba(0,0,0,0.5);text-align:center;">'+ reg.list[i].adTitle +'</span></li>';
            };
            
        };
        $("#banner").html(str);

        TouchSlide({
        slideCell:"#focus",
        //titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"leftLoop", 
        autoPlay:true,//自动播放
        //autoPage:true //自动分页
        });

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
}

//动态加载咖啡名称和咖啡价格
function find_product()
{
    var productPrice = $(".productPrice");
    var productName = $(".productName");
    var user = JSON.parse(localStorage.getItem("token"));
    var str = "";
    $.ajax({
        url: httpUpData + 'find_product',
        type: 'GET',
        async: false,
        dataType: 'json',
        data: {userId: us_userid,userToken: us_token}
    })
    .done(function(reg) {
        console.log("success");
        if (reg.statusCode.status == 1005) 
            {
                localStorage.clear();
                window.location.href = 'http://www.cbcoffee.cn/sharedcoffee/index.html';
            };
        for(var i = 0; i < reg.list.length; i++)
        {
            str += '<li style="width:49%;margin-left:0.65%;margin-top:0.65%;float:left;position:relative;" onclick="gotobakc('+ reg.list[i].productId +')">'+
                      '<div style="width:100%;position:relative;">'+
                        '<img src="'+ reg.list[i].productPicurl +'" alt="'+ reg.list[i].productName +'" style="width:100%;" />'+
                      '</div>'+
                      '<div class="span_bg">'+
                          '<p class="productName">'+ reg.list[i].productName.split(',')[0] + '</p>'+
                            '<p>' + reg.list[i].productName.split(',')[1] +'</p>'+
                          '<p  class="productPrice">'+
                            '￥'+ parseFloat((reg.list[i].productPrice != null ? reg.list[i].productPrice : 0) / 100).toFixed(2) +
                          '</p>'+
                        '</div>'+
                    '</li>';
            if (reg.list[i].operateType == 1) 
                {
                    $(".coffee li").eq(i + ($(".coffee li").length)).append('<img class="hoticon" src="image/lb/new.png"  style="width:40%;" alt="" />');
                };
            if (reg.list[i].operateType == 2) 
                {
                    $(".coffee li").eq(i + ($(".coffee li").length)).append('<img class="hoticon" src="image/lb/hot.png"  style="width:40%;" alt="" />');
                };
        }
        $(".coffee").html(str);

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
}