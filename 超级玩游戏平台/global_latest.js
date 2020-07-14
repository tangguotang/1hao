//下载页需要用到
document.writeln("<script src=\'js/lightbox.js\'></script>");
document.writeln("<script src=\'js/img_scroll.js\'></script>");
// new-Swiper 4.4.6
document.writeln('<script type="text/javascript" src="js/swiper.min.js"></script>');

//二维码手机查看
document.writeln("<script src=\'js/jquery.qrcode.min.js\'></script>");

;(function() {
    if (window.pageConfig.stype != undefined) {
        if (window.pageConfig.stype == "soft" || window.pageConfig.stype == "game") {
            ysa.track("soft", window.pageConfig.id);
        } else if (window.pageConfig.stype == "news") {
            ysa.track("news", window.pageConfig.id);
        } else if (window.pageConfig.type == 'topic' && window.pageConfig.stype != "list") {
            ysa.track("topic", window.pageConfig.id);
        }
    }
    if ($('.tabs').length > 0) {
        $('.tabs a').each(function() {
            /棋牌|彩票|系统安全|金融理财|cp|卡牌|竞彩|QP/.test($(this).text()) ? $(this).hide() : false;
        })
    }
    if ($('.nav').length > 0) {
        $('.nav li').each(function() {
            /棋牌|彩票|系统安全|金融理财|cp|卡牌|专题/.test($(this).text()) ? $(this).hide() : false;
        })
    }
}
)();
;(function() {
    jQuery._globalFn = {
        fixedLR: function(a, d) {
            if ($(a).length > 0 && $(d).length > 0) {
                var e = $(a)
                  , c = $(d)
                  , b = c.offset().top;
                function f() {
                    var m = $(window).scrollLeft()
                      , n = $(window).scrollTop()
                      , k = $(document).height()
                      , h = $(window).height()
                      , g = e.height()
                      , j = c.height()
                      , l = e.offset().left + e.outerWidth(true) - m
                      , i = parseInt(g - h) - parseInt(j - h);
                    if (k < h || j > g || n < b || n <= j - h + b) {
                        c.removeAttr("style")
                    } else {
                        if (h > j && (n - b) >= i || h < j && (n - b) >= (g - h)) {
                            c.attr("style", "margin-top:" + i + "px;")
                        } else {
                            c.attr("style", "_margin-top:" + (n - b) + "px;position:fixed;left:" + l + "px;" + (h > j ? "top" : "bottom") + ":0;")
                        }
                    }
                }
                $(window).resize(f).scroll(f).trigger("resize")
            }
        },
        tabFn: function(a, b, c) {
            $(document).on(c, a, function() {
                if (c == 'click') {
                    $(b).eq($(this).index()).addClass('active').siblings().removeClass('active');
                }
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        scrollTopFn: function(a) {
            $(window).scroll(function(event) {
                $(this).scrollTop() > $(this).height() * 0.33 ? $(a).parent().fadeIn(200) : $(a).parent().fadeOut(200);
            });
            $(a).click(function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 300);
            })
        }
    }
}
)();

/*棋牌|斗地主|麻将|扑克|金花|捕鱼|掼蛋|梭哈|斗牛|记牌器|拖拉机|推倒胡|透视器|水果机|老虎机|赢三张|三张牌|AAA|跑胡子|炸翻天|六合彩|开奖|彩票|购彩|体彩|福彩|双色球|贷款|小贷|口子|黑户|网贷|借钱|借贷|小额贷|借款|随借随还|征信|抵押|担保|手机贷款|下款口子|下款快*/
if (/\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403|\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb/.test($('[name=description]').attr('content') + $('[name=keywords]').attr('content') + $('title').html())) {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?94703012f070ca9a8fb1376f0964adc6";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    }
    )();
}
