//MR Chen 2017-8-3
$(document).ready(function(){
	MVideoPlayer();
})
function MVideoPlayer(){
//	$("#currentLeft,#currentRight").hide();
//	
//	$(".posiretive").hover(function(event){
//		$("#currentLeft,#currentRight").show();
//	},function(event){
//		$("#currentLeft,#currentRight").hide();
//	});
	var play = false;
	var scollTopall = document.body.scrollTop;
//	alert(scollTopall);
	$(".liplay").click(function(){
//		alert(play);
		if(play == true){
			$('video').get(0).pause();
			$("#play").show();
			play = false;
//			$("#vTitle").fadeIn(300);
		}else{
			$('video').get(0).play();
			$("#play").hide();
			play = true;
//			$("#vTitle").fadeOut(300);
		}
	});
//	
//	if(document.body.scrollTop){
//		alert(scollTopall);
//		$("#fixTop").show();
//	}
//	else{
//		$("#fixTop").hide();
//	}
	$("#fixTop").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
	
	
	
//navShow  class
	var navShow = false;
	var navList = false;
	var h = $(document).height();
//	$(".showNav").css("height",h);
//	$(".model").css("height",h);
	
// 	$("#navShow").css("display","block");
 	$(".model").hide();
 	$("#showRight").click(function(){
// 		alert(navShow);
 		if(navShow == false){
//			$("#navShow").animate({width:"30%"}, 100);
			$("#navShow").css("display","block");
			$("#showRight").hide(100);
			$("#modelIco").show();
			$(".model").show();
			$('html,body').css("overflow","hidden");
			navShow = true;
 		}else{
// 			$("#navShow").animate({width:"0"}, 100);
			$("#navShow").css("display","none");
			$("#showRight").show(100);
			$(".model").hide();
			$('html,body').css("overflow","auto");
			navShow = false;
 		}
 	})
 	$(".model").click(function(){
// 		alert(navShow);
//		$("#navShow").animate({width:"0"}, 100);
		$("#navShow").css("display","none");
//		$(".nav").animate({paddingRight:"0"}, 100);
		$("#showRight").show(100);
		$(".model").hide();
		$('html,body').css("overflow","auto");
		navShow = false;
 	})
 	
 	
 	$("#navShow ul li ul").hide();
 	
 	$("#navShow ul li").click(function(event){
 		
 		if(navList == false){
 			$(this).children('ul').slideDown(200);
 			navList = true;
 		}else{
			$(this).children('ul').slideUp(200);
			navList = false;
		}
	});
	
	
}

