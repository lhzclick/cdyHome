/* eslint-disable */
//import 'http://hfdzhg.cn/cdyCommon/js/jquery-3.4.1.min.js'
import './index.css'
import '../../common/js/config'
var data = {
    title:"<img style='margin-top: 7px' src='" + publicSrc + "/img/cdyHome/index1/logo.png' alt=''>"
   };
   var html = template("imgLogo",data);
   console.log(html)
   $('#imgLogo').html(html)