// 定义全局变量
publicSrc = "http://hfdzhg.cn"  //测试环境

headerNode = {
    title:'<div class="home_title"><div class="home_top"><img style="margin:7px 10px 0 0" src="' + publicSrc + '/img/cdyHome/index1/logo.png"><span>娄山云</span></div></div>'
};
//引入公共头部
var html = template("home_box",headerNode);
$('#home_box').html(html);