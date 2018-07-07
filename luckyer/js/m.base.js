//******** 2017-7-27 ********//
$(document).ready(function(){
	onStyleReady();
	navHoverStyle();
	erweimaShow();
	// uiBannerStyle();
	if(abouta != null && abouta != ""){
		navClickLink(abouta);
   	}
	if(aboutb != null && aboutb != ""){
		navClickLink(aboutb);
   	}
	if(aboutc != null && aboutc != ""){
		navClickLink(aboutc);
   	}
	if(aboutd != null && aboutd != ""){
		navClickLink(aboutd);
   	}
	if(aboute != null && aboute != ""){
		navClickLink(aboute);
   	}
//	exh
	if(exha != null && exha != ""){
		navClickLink(exha);
   	}
	if(exhb != null && exhb != ""){
		navClickLink(exhb);
   	}
	if(exhc != null && exhc != ""){
		navClickLink(exhc);
   	}
	if(exhd != null && exhd != ""){
		navClickLink(exhd);
   	}
	if(exhe != null && exhe != ""){
		navClickLink(exhe);
   	}
	if(exhf != null && exhf != ""){
		navClickLink(exhf);
   }
//vist
	if(visa != null && visa != ""){
		navClickLink(visa);
   	}
	if(visb != null && visb != ""){
		navClickLink(visb);
   	}
	if(visc != null && visc != ""){
		navClickLink(visc);
   	}
//act
	if(acta != null && acta != ""){
		navClickLink(acta);
   	}
	if(actb != null && actb != ""){
		navClickLink(actb);
   	}
//ser
	if(sera != null && sera != ""){
		navClickLink(sera);
   	}
	if(serb != null && serb != ""){
		navClickLink(serb);
   	}
	if(serc != null && serc != ""){
		navClickLink(serc);
   	}
	if(serd != null && serd != ""){
		navClickLink(serd);
   	}
//med
	if(meda != null && meda != ""){
		navClickLink(meda);
   	}
	if(medb != null && medb != ""){
		navClickLink(medb);
   	}
	if(medc != null && medc != ""){
		navClickLink(medc);
   	}
	if(medd != null && medd != ""){
		navClickLink(medd);
   	}
});
var grade;
function onStyleReady(){
	grade = "S";
	$("#granTags li").click(function(){
		$(this).addClass("TabsAction");
		$(this).siblings().removeClass("TabsAction");
		
		var gradeVal = $(".TabsAction").children("input");
		grade = gradeVal.val();
		
//		alert(grade);
		
	})
	
}
function navHoverStyle(){
	var $navLength = $("#menuNav ul li");
	var $navClass = $("#navClass ul");
	$("#menuNav ul li").mousemove(function(event){
		$(this).children('ul').css("z-index","666666").stop().show();
	}).mouseleave(function(event){
		$(this).children('ul').css("z-index","666666").stop().hide();
	});

	// $("#menuNav ul li").hover(function() {
	// 	$(this).children('ul').stop().slideDown("fast");
	// }, function() {
	// 	$(this).children('ul').stop().slideUp("fast");
	// });
	
}

function navClickLink(aboutId){
//	alert(aboutId);
//	about ent
	if(aboutId == 0){
		window.location.href = "m.about.html?abouta=abouta";
	}
	if(aboutId == 1){
		window.location.href = "m.about.html?aboutb=aboutb";
	}
	if(aboutId == 2){
		window.location.href = "m.about.html?aboutc=aboutc";
	}
	if(aboutId == 3){
		window.location.href = "m.about.html?aboutd=aboutd";
	}
	if(aboutId == 4){
		window.location.href = "m.about.html?aboute=aboute";
	}
	if(aboutId == "abouta"){
		$("#abouta").show();
	}
	if(aboutId == "aboutb"){
		$("#aboutb").show();
	}
	if(aboutId == "aboutc"){
		$("#aboutc").show();
	}
	if(aboutId == "aboutd"){
		$("#aboutd").show();
	}
	if(aboutId == "aboute"){
		$("#aboute").show();
	}
//about end
//exh ent
	if(aboutId == 5){
		window.location.href = "m.exhibition.html?exha=exha";
	}
	if(aboutId == 6){
		window.location.href = "m.exhibition.html?exhb=exhb";
	}
	if(aboutId == 7){
		window.location.href = "m.exhibition.html?exhc=exhc";
	}
	if(aboutId == 8){
		window.location.href = "m.exhibition.html?exhd=exhd";
	}
	if(aboutId == 9){
		window.location.href = "m.exhibition.html?exhe=exhe";
	}
	if(aboutId == 10){
		window.location.href = "m.exhibition.html?exhf=exhf";
	}
	
	if(aboutId == "exha"){
		$("#exha").show();
	}
	if(aboutId == "exhb"){
		$("#exhb").show();
	}
	if(aboutId == "exhc"){
		$("#exhc").show();
	}
	if(aboutId == "exhd"){
		$("#exhd").show();
	}
	if(aboutId == "exhe"){
		$("#exhe").show();
	}
	if(aboutId == "exhf"){
		$("#exhf").show();
	}
//vist
	if(aboutId == 11){
		window.location.href = "m.visit.html?visa=visa";
	}
	if(aboutId == 12){
		window.location.href = "m.visit.html?visb=visb";
	}
	if(aboutId == 13){
		window.location.href = "m.visit.html?visc=visc";
	}
	if(aboutId == "visa"){
		$("#visa").show();
	}
	if(aboutId == "visb"){
		$("#visb").show();
	}
	if(aboutId == "visc"){
		$("#visc").show();
	}
//act
	if(aboutId == 14){
		window.location.href = "m.activity.html?acta=acta";
	}
	if(aboutId == 15){
		window.location.href = "m.activity.html?actb=actb";
	}
	if(aboutId == "acta"){
		$("#acta").show();
	}
	if(aboutId == "actb"){
		$("#actb").show();
	}
//ser
	if(aboutId == 16){
		window.location.href = "m.service.html?sera=sera";
	}
	if(aboutId == 17){
		window.location.href = "m.service.html?serb=serb";
	}
	if(aboutId == 18){
		window.location.href = "m.service.html?serc=serc";
	}
	if(aboutId == 19){
		window.location.href = "m.service.html?serd=serd";
	}
	if(aboutId == "sera"){
		$("#sera").show();
	}
	if(aboutId == "serb"){
		$("#serb").show();
	}
	if(aboutId == "serc"){
		$("#serc").show();
	}
	if(aboutId == "serd"){
		$("#serd").show();
	}
//ser
	if(aboutId == 20){
		window.location.href = "m.mediaCenter.html?meda=meda";
	}
	if(aboutId == 21){
		window.location.href = "m.mediaCenter.html?medb=medb";
	}
	if(aboutId == 22){
		window.location.href = "m.mediaCenter.html?medc=medc";
	}
	if(aboutId == 23){
		window.location.href = "m.mediaCenter.html?medd=medd";
	}
	if(aboutId == "meda"){
		$("#meda").show();
	}
	if(aboutId == "medb"){
		$("#medb").show();
	}
	if(aboutId == "medc"){
		$("#medc").show();
	}
	if(aboutId == "medd"){
		$("#medd").show();
	}
}
// function uiBannerStyle(){
// 	var $key = 0;
// 	var $OlLength = $("#autoBanner ul li");
// 	var str = "";
// 	//轮播图的小图标点击切换
// 	for(var i = 0; i < $OlLength.length; i++){
// 		str += '<li>' + i + '</li>>'
// 	}
// 	$("#i").html(str);
// 	// right
// 	$("#currentRight").on('click', function(event) {
// 		setAutoBanner();
// 	});
// 	//left
// 	$("#currentLeft").on('click', function(event) {
// 		$($OlLength).stop().fadeOut(600);
// 		$key--;
// 		$key = $key%$OlLength.length;

// 		$OlLength.eq($key).stop().fadeIn(600);
// 		$OlLength.eq($key).addClass('current').siblings().removeClass('current');
// 	});
// 	// setinterval
// 	var setBanner = setInterval(setAutoBanner, 5000);
// 	function setAutoBanner(){
// 		$OlLength.stop().fadeOut(600);
// 		$key++;
// 		$key = $key%$OlLength.length;

// 		$OlLength.eq($key).stop().fadeIn(600);
// 		$OlLength.eq($key).addClass('current').siblings().removeClass('current');
// 	}

// 	$("#autoBanner").hover(function() {
// 		/* Stuff to do when the mouse enters the element */
// 		$("#currentLeft,#currentRight").show();
// 		clearTimeout(setBanner);
// 	}, function() {
// 		/* Stuff to do when the mouse leaves the element */
// 		$("#currentLeft,#currentRight").hide();
// 		clearInterval(setBanner);
// 		setBanner = setInterval(setAutoBanner, 5000);
// 	});
// }
function erweimaShow(){
	var showtel = false;
	var er = false;
	$(".contact").hover(function(event){
		$(".erweima").stop().fadeIn(600);
	},function(event){
		$(".erweima").stop().fadeOut(600);
	})
	
	
	$("#showTel").click(function(){
//		alert(showtel);
		if(showtel == true){
			
//			$(".tel113").show();
			$(".tel113").slideUp(200);
			showtel = false;
			
		}else{
			
			$(".tel113").slideDown(200);
			showtel = true;
//			$(".tel113").hide();

		}
		
	})
	
	$("#er").click(function(){
//		alert(showtel);
		if(er == false){
			$(".erweim").show(200);
			er = true;
			
		}else{
			
			$(".erweim").hide(200);
			er = false;

		}
		
	})
	
	
}
