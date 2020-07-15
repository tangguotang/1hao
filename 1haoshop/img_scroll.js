;(function(){
	var soft = {
//      截图悬浮
		img_scrol : function(){
		    $('.slide_box a').lightBox({
			    fixedNavigation: true,
			    imageLoading: 'http://static.shouji56.com/pc/images/lightbox-ico-loading.gif',
			    imageBtnClose: 'http://static.shouji56.com/pc/images/lightbox-btn-close.gif',
			    imageBtnPrev: 'http://static.shouji56.com/pc/images/lightbox-btn-prev.gif',
			    imageBtnNext: 'http://static.shouji56.com/pc/images/lightbox-btn-next.gif'
			});
		},
// 		截图轮播
		slide_img : function(){
			var Banner=function(){
				var t=this;
				t.move=false;
				t.banner=$("#img_list");
				t.left=parseInt(t.banner.css("left"));
				t.ul=$(".img_list");
				t.w=t.ul.width();
				t.li=$("#img_list li")
				t.lw=t.li.width();
				t.length=t.li.length;
				t.h=t.banner.height();
				t.p=$("#prev");
				t.n=$("#next");
				t.n.bind("click",function(){ if(t.move==false){ t.next();}});
				t.p.bind("click",function(){ if(t.move==false){ t.prev();}});
				t.init();
			},
			notOver=true,
			index=0;
			Banner.prototype={
				init:function(){
					var t=this;
					if(notOver){
						t.banner.css("top","0px");
					};
				},
				next:function(){
					var t=this,
					moveLeft=0,
					mainWidth=0,
					otherWidth=0;
					t.move=true;

					for(var i=index;i<t.length;i++){
						mainWidth+=t.li.eq(i).width();
						if(mainWidth>=640){
							moveLeft=mainWidth-t.li.eq(i).width();
							index=i;
							break;
						}
					}
					t.banner.animate({"left":t.left-moveLeft},function(){ t.move=false;});
					t.left-=moveLeft;
				},
				prev:function(){
					var t=this,
					moveLeft=0,
					mainWidth=0;
					t.move=true;

					for(var i=index;i>=0;i--){
						mainWidth+=t.li.eq(i-1).width();
						if(mainWidth>640){
							moveLeft=mainWidth-t.li.eq(i-1).width();
							index=i;
							break;
						}else{

						}
					}
					t.banner.animate({"left":t.left+moveLeft},function(){ t.move=false;});
					t.left+=moveLeft;
				}
			};
			var banner=new Banner();
		},

		invoke : function(){ //调用函数
			soft.img_scrol();
			soft.slide_img();
		}
	}
	soft.invoke();
})();

