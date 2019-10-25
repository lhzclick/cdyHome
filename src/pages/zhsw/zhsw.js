import './zhsw.css'
import '../../common/css/head.css'
import '../../common/js/jquery-1.9.1.min.js'
import '../../common/js/config'
//轮播图插件
TouchSlide({ 
    slideCell:"#slideBox",
    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell:".bd ul", 
    effect:"leftLoop", 
    autoPage:true,//自动分页
    autoPlay:true, //自动播放
    interTime:7000,
});
$(".cpqyCont li").hover(function(){
    $(this).children("img").css("visibility","visible");
},function(){
    $(this).children("img").css("visibility","hidden");
})