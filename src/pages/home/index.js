/* eslint-disable */
//import 'http://hfdzhg.cn/cdyCommon/js/jquery-3.4.1.min.js'
import './index.css'
import '../../common/css/footer.css'
import '../../common/css/header.css'
import '../../common/js/config'
//import '../../common/js/myfocus-2.0.4.min.js'
import '../head/head.css'
	//设置
	myFocus.set({
		id: 'myFocus', //ID
		pattern: 'mF_fancy', //风格
		time: 3,
	});

//引入公共头部
var data = {
    title:'<div class="home_title"><div class="home_top"><img style="margin:7px 10px 0 0" src="' + publicSrc + '/img/cdyHome/index1/logo.png"><span>娄山云</span></div></div>'
   };
   var html = template("home_box",data);
   $('#home_box').html(html);
//banner自动轮播效果
	var bn_id = 0;
	var bn_id2= 1;
	var speed33=3000;
	var qhjg = 1;
	var MyMar33;
	$("#banner_image .d1").hide();
	$("#banner_image .d1").eq(0).fadeIn("1000");
	$(".banner-title .row").hide().first().show();
	if($("#banner_image .d1").length>1)
	{
		$("#banner_id span").eq(0).css("background","#D9534F");
		function Marquee33(){
			bn_id2 = bn_id+1;
			if(bn_id2>$("#banner_image .d1").length-1)
			{
				bn_id2 = 0;
			}
			$("#banner_image .d1").eq(bn_id).css("z-index","2");
			$("#banner_image .d1").eq(bn_id2).css("z-index","1");
			$("#banner_image .d1").eq(bn_id2).fadeIn("1000");
			$("#banner_image .d1").eq(bn_id).fadeOut("500");
			$("#banner_id span").css("background","#fff");
			$("#banner_id span").eq(bn_id2).css("background","#D9534F");
			$(".banner-title .row").eq(bn_id2).fadeIn("1000").siblings().fadeOut("500");
			bn_id=bn_id2;
		};
		
		MyMar33=setInterval(Marquee33,speed33);
		
		$("#banner_id span").click(function(){
			var bn_id3 = $("#banner_id span").index(this);
			if(bn_id3!=bn_id&&qhjg==1)
			{
				qhjg = 0;
				$("#banner_image .d1").eq(bn_id).css("z-index","2");
				$("#banner_image .d1").eq(bn_id3).css("z-index","1");
				$("#banner_image .d1").eq(bn_id3).show();
				$("#banner_image .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
				$("#banner_id span").css("background","#fff");
				$("#banner_id span").eq(bn_id3).css("background","#D9534F");
				$(".banner-title .row").eq(bn_id3).fadeIn("1000").siblings().fadeOut("500");
				bn_id=bn_id3;
			}
		});
		$("#banner_id").hover(
				function(){
					clearInterval(MyMar33);
				}
				,
				function(){
					MyMar33=setInterval(Marquee33,speed33);
				}
		);	
	}
	else
	{
		$("#banner_id").hide();
	}
