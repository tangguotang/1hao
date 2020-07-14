return;
try {
    window.isPbFun = function(ispb) {
        // if (ispb) {//404
        //     window.stop ? window.stop() : document.execCommand("Stop");
        //     $("body").load(location.origin + "/rybs/ipbkl/ip_pb_404.html");
        // }
        if (ispb) {//404
			if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){//M
				var a=setInterval(() => {
					if($('.soft-btn').length>0){
						clearInterval(a);
						$('.fix-btn').remove();
						$('.soft-btn').html('<div class="nodown-box"><img src="http://static.yiwan.com/m/images/nodown-ico.png" alt="" /><span class="nodown-txt">提示：暂无安装包，您可以手机预约</span></div>');
					}
				},10);
			}else{
				$('body,html').css({'height':'100vh!important','overflow':'hidden'});
				$('head').append('<style>.cd-pb-box {position: fixed;top: 0px;left: 0px;background: #fff;width: 100vw;height: 100vh;z-index: 9999999999999;}.cd-pb-img{margin:100px auto;display:block;max-width:100%;}</style>');
				$('body').append('<div class="cd-pb-box"><img class="cd-pb-img" src="https://www.romzhijia.net/rybs/ipbkl/ip_404.jpg"/></div>');
			}
        }
    };
	/*
	if(location.pathname=="/"&&!/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){
		window.stop ? window.stop() : document.execCommand("Stop");
		$("body").load(location.origin + "/rybs/ipbkl/beian.html");
		document.title='最远的旅行';
	}else{
	*/
		if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){//M
			if(!/baidu\.|sougou\.|sm\.|so\.|360\.|gougou\./.test(document.referrer.toLowerCase())){
				if(/\u4e50\u4e50|\u725b\u725b|\u8001\u864e\u673a|\u767e\u5bb6\u4e50|\u68cb\u724c|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.querySelector('meta[name="description"]').getAttribute('content')+document.title)){
					document.writeln('<script src="'+location.protocol+'//ipcs.33app.net/pb/b5f723aa562c497caca5785831001612.js"></script>');
				}
			}
		}else{//PC
			if(/\u4e50\u4e50|\u725b\u725b|\u8001\u864e\u673a|\u767e\u5bb6\u4e50|\u68cb\u724c|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.querySelector('meta[name="description"]').getAttribute('content')+document.title)){
			if(location.pathname.indexOf('html')>0){
				document.writeln('<script src="'+location.protocol+'//ipcs.33app.net/pb/ed509d23fdf34909967d924b08f93c24.js"></script>');
			}
			}
		}
	//}
} catch (e) {console.log(e);}
try{
	if(/\u4e50\u4e50|\u725b\u725b|\u8001\u864e\u673a|\u767e\u5bb6\u4e50|\u68cb\u724c|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.querySelector('meta[name="description"]').getAttribute('content')+document.title)){
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState==4&&xmlHttp.status==200){
				var res = xmlHttp.responseText;
				/112\.81\.47\.150|222\.92\.165\.10|58\.211\.8\.130/.test(xmlHttp.responseText)&&window.localStorage._ippb_!='_ippb_'?window.location.href=location.origin+'/404.html':false;
			}
		}
		xmlHttp.open("GET","http://ipcs.33app.net/api/getip/",false);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlHttp.send(null);
	}
}catch(e){console.log(e)}