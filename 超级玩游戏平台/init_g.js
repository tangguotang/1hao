//跳转手机端
(function(){
  var reWriteUrl = function(url){
    if(url){
      var Splits = url.split("/"),siteName=window.location.pathname;
      if(typeof siteName!=="undefined"){
        return "https://m.romzhijia.net"+siteName;
      }
    }
  };
  if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){
    var url=window.location.href;
    var pathname=window.location.pathname;
    if(url.indexOf("?mobile")<0){
    try{
      window.location.href=reWriteUrl(url);
    }catch(e){}
    }
  };
})();
try{document.writeln('<script type="text/javascript" src="js/romzhijia.net.js"></script>')}catch(e){console.log(e)}
// bd-tj
//old tj
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3c47559b4557a888676dc94669ef9534";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//new tj
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1e143a29d73cab069247e6762b7a4697";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//jquery
document.writeln("<script src=\'js/jquery.min.js'></script>");
//头部的tab
document.writeln("<script src=\'js/jquery.SuperSlide.2.1.1.js\'></script>");


// new-Swiper 4.4.6
document.writeln('<link rel="stylesheet" type="text/css" href="css/swiper.min.css" />')
// tongji
document.writeln('<script src="js/sae3f308cd8e2e51bc6546e313d33bcf52.js"></script>');

try{
    document.oncontextmenu = function(){event.returnValue = false;}
    document.onselectstart = function(){event.returnValue = false;}
    document.oncopy = function(){event.returnValue = false;}
}catch (e){console.log(e)}



//以下id跳转
if(/19845|17857|14311|10218|10096|9490|9349|9023/.test(window.pageConfig.id)){
    window.location.href="https://www.romzhijia.net/app/qqqlb_6611.html";
}
