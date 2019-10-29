
import './allindex.css'
import '../../common/js/jquery-1.9.1.min.js'
import '../../common/js/config'
import '../../common/css/head.css'

var img_src1 = 'http://hfdzhg.cn/img/cdyHome/index2/wisdom_water.jpg'
var img_src2 = 'http://hfdzhg.cn/img/cdyHome/index2/zhinengjianzu.png'
window.next = function () {
    $('.img_left').attr('src', img_src2);
    $('.img_right').attr('src', img_src1);
    $('.data_box').hide();
    $('.data_box').eq(1).show();
}
window.prev = function () {
    $('.img_left').attr('src', img_src1);
    $('.img_right').attr('src', img_src2);
    $('.data_box').hide();
    $('.data_box').eq(0).show();

}
//鼠标移入大数据板块
$('.choise_box').on({
    mouseover: function () {
        $('.choise_tab').hide();
        $('.choise_tab').eq(1).show();
    },
    mouseout: function () {
        $('.choise_tab').hide();
        $('.choise_tab').eq(0).show();
    }
});
//点击app下载
$('.service-app-icon').on('click',function(){
    $('.scanCode').slideDown();
})
$('.codeColse').on('click',function(event){
    $('.scanCode').slideUp();
    event.stopPropagation(); 
})
