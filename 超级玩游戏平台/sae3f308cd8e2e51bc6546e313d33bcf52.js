;(function() {
    window.eysa = window.eysa || {
        v: "1.3.1",
        type: 0,
        id: 0,
        surl: null,
        url: null,
        title: null,
        domain: null,
        referrer: null,
        sh: 0,
        sw: 0,
        cd: 0,
        nl: null,
        t: 0,
        init: function(options, callback) {
            eysa.config(options, this);
            if (typeof $ysa != "undefined") {
                eysa.cfg = $ysa;
            }
            if (document) {
                this.url = document.URL || null;
                this.title = document.title || null;
                this.domain = document.domain || null;
                this.referrer = document.referrer || null;
            }
            if (window && window.screen) {
                this.sh = window.screen.height || 0;
                this.sw = window.screen.width || 0;
                this.cd = window.screen.colorDepth || 0;
            }
            if (navigator) {
                this.nl = navigator.language || "";
            }
            if (this.autoTrack) {}
            this.t = 1 * new Date();
        },
        extend: function(target, source) {
            if (source != undefined) {
                for (var pt in source) {
                    if (source.hasOwnProperty(pt))
                        target[pt] = source[pt];
                }
            }
            return target;
        },
        clone: function(source, resetatts, target) {
            target = target || {};
            eysa.extend(eysa.extend(target, source), resetatts || {});
            return target;
        },
        convert: {
            atob: function(atob) {},
            btoa: function(btoa) {}
        },
        request: {
            get: function(name, nval) {
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return decodeURIComponent(arr[2]);
                } else {
                    return nval || null;
                }
            }
        },
        config: function(config, target) {
            target = target || eysa;
            return eysa.extend(target, config),
            target
        },
        action: {
            url: null,
            sdata: null,
            send: function(p, c) {
                if (p.ekeyid > 0) {
                    var args = '';
                    if ("object" === typeof JSON) {
                        if (Object.keys(p.properties).length > 0) {
                            try {
                                args = encodeURIComponent(window.btoa(JSON.stringify(p.properties)));
                            } catch (e) {}
                        }
                    }
                    var img = new Image(1,1);
                    var _surl = eysa.surl + "?";
                    img.src = _surl + '$e=' + p.event + '&$k=' + encodeURIComponent(p.keyid) + '&$ek=' + p.ekeyid + '&$kt=' + p.ktype + '&$dt=' + encodeURIComponent(eysa.title) + "&$du=" + encodeURIComponent(eysa.url) + '&$dr=' + encodeURIComponent(eysa.referrer) + "&$cd=" + args + "&t=" + Math.random();
                }
                if ("function" === typeof c) {
                    c(p);
                }
            }
        },
        track: function(e, p, c) {
            var _ekeyid = 0;
            if ("object" === typeof this.ets) {
                if (this.ets.hasOwnProperty(e)) {
                    _ekeyid = this.ets[e];
                }
            }
            var _keyid = 0;
            var _ktype = "";
            if ("number" === typeof p) {
                p = {
                    id: p,
                    kt: typeof p
                };
            } else if ("string" === typeof p) {
                p = {
                    id: p,
                    kt: typeof p
                };
            }
            if ("object" === typeof p) {
                if (p.hasOwnProperty("id")) {
                    _keyid = p.id;
                    delete p.id;
                }
                if (p.hasOwnProperty("kt")) {
                    _ktype = p.kt;
                    delete p.kt;
                }
            }
            eysa.action.send({
                type: 'track',
                event: e,
                ekeyid: _ekeyid,
                ktype: _ktype,
                keyid: _keyid,
                properties: p
            }, c);
        }
    };
    if (window.eysa.t === 0) {
        window.eysa.init({
            surl: "//hm.vipfinal.com/gsa52/e3f308cd8e2e51bc6546e313d33bcf52.gif",
            vt: 202550.27308,
            ets: {
                d: 0,
                soft: 1,
                news: 2,
                topic: 3,
                list: 4,
                other: 5,
                index: 6,
                softlist: 7,
                zt: 8,
                down: 9,
                fbcate: 13
            }
        });
    }
    window.ysa = window.ysa || window.eysa || {};
}
)();
