(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3171], {
        13887: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => g
            });
            var a = r(54546),
                n = r(42404),
                o = r.n(n),
                c = r(67294),
                i = r(86646),
                p = r(62427);
            const w = [{
                worldName: "Horse Mountain",
                authorName: "nprowler",
                image: r(92610)
            }, {
                worldName: "Instagib Tournament",
                authorName: "ville672",
                image: r(14420)
            }, {
                worldName: "Gumball Lounge",
                authorName: "screamingcolor",
                image: r(38325)
            }, {
                worldName: "Exoplanet Journey",
                authorName: "Niko*",
                image: r(25623)
            }, {
                worldName: "Dusk",
                authorName: "Lucifer MStar",
                image: r(5171)
            }, {
                worldName: "Amber Glade - Winter",
                authorName: "Mankey",
                image: r(38239)
            }, {
                worldName: "Luminous Hotel",
                authorName: "Lura_",
                image: r(81592)
            }, {
                worldName: "Shoegaze Night",
                authorName: "VVolfly",
                image: r(42665)
            }, {
                worldName: "Singularity Echo",
                authorName: "Lavryou",
                image: r(96253)
            }, {
                worldName: "CORRIDOR ABANDONNED․․․",
                authorName: "TontonDemon",
                image: r(40533)
            }, {
                worldName: "Atelier",
                authorName: "amanek",
                image: r(30599)
            }, {
                worldName: "记忆中的花海⁄The Sea of Flowers in Memory",
                authorName: "ぃLuxRIAぅ",
                image: r(35883)
            }, {
                worldName: "BOTANICA",
                authorName: "TakeTake-たけたけ-",
                image: r(55074)
            }, {
                worldName: "Lazy Sunday",
                authorName: "Mochie",
                image: r(34414)
            }, {
                worldName: "Angels Hideout",
                authorName: "樹-Itsuki-",
                image: r(47218)
            }, {
                worldName: "Forest of Eternity",
                authorName: "chu-ri",
                image: r(50749)
            }];
            const g = function(t) {
                var e = t.children,
                    r = t.showCredits,
                    n = (0, c.useState)(null),
                    g = (0, a.Z)(n, 2),
                    s = g[0],
                    h = g[1],
                    u = (0, c.useState)(null),
                    l = (0, a.Z)(u, 2),
                    d = l[0],
                    f = l[1],
                    m = (0, c.useMemo)((function() {
                        return o()(w, 6)
                    }), []);
                (0, c.useEffect)((function() {
                    if (null === s) h(m[0]);
                    else {
                        var t = b(s);
                        setTimeout((function() {
                            return h(t)
                        }), 1e4), f(t)
                    }
                }), [s]);
                var b = function(t) {
                    var e = m.findIndex((function(e) {
                        return e.image.toString() === t.image.toString()
                    }));
                    return e === m.length - 1 ? m[0] : m[e + 1]
                };
                return c.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === s ? "none" : "url(".concat(s.image, ")")
                    }
                }, c.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, c.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, c.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), c.createElement("img", {
                    className: "tw-hidden",
                    src: null == d ? void 0 : d.image,
                    alt: "VRChat"
                }))), c.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, e), (null == s ? void 0 : s.worldName) && r && c.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, c.createElement(i.Z, {
                    icon: p.default,
                    title: "World",
                    size: "2x"
                }), c.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, s.worldName, c.createElement("br", null), c.createElement("small", null, "by ", s.authorName))))
            }
        },
        53171: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => w
            });
            var a = r(16686),
                n = r(67294),
                o = r(60006),
                c = r(86646),
                i = r(85533),
                p = r(13887);
            const w = function() {
                return n.createElement(p.Z, null, n.createElement(i.Z, null, "Verification Success"), n.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-py-20 tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, n.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, n.createElement("div", {
                    className: "tw-mb-5"
                }, n.createElement(c.Z, {
                    icon: a.faCircleCheck,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), n.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Verification Success"), n.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "You can now try logging in again with the VRChat Client, or head over to the website homepage."), n.createElement(o.Qj, {
                    to: "/home",
                    className: "tw-mt-9 tw-w-60"
                }, "Back to home"))))
            }
        },
        14636: (t, e, r) => {
            var a = r(22545),
                n = r(35694),
                o = r(1469),
                c = r(44144),
                i = r(65776),
                p = r(36719),
                w = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = o(t),
                    g = !r && n(t),
                    s = !r && !g && c(t),
                    h = !r && !g && !s && p(t),
                    u = r || g || s || h,
                    l = u ? a(t.length, String) : [],
                    d = l.length;
                for (var f in t) !e && !w.call(t, f) || u && ("length" == f || s && ("offset" == f || "parent" == f) || h && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || i(f, d)) || l.push(f);
                return l
            }
        },
        29932: t => {
            t.exports = function(t, e) {
                for (var r = -1, a = null == t ? 0 : t.length, n = Array(a); ++r < a;) n[r] = e(t[r], r, t);
                return n
            }
        },
        26891: (t, e, r) => {
            var a = r(29750),
                n = r(278),
                o = r(73480);
            t.exports = function(t, e) {
                return o(n(t), a(e, 0, t.length))
            }
        },
        29750: t => {
            t.exports = function(t, e, r) {
                return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== e && (t = t >= e ? t : e)), t
            }
        },
        38749: (t, e, r) => {
            var a = r(44239),
                n = r(41780),
                o = r(37005),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function(t) {
                return o(t) && n(t.length) && !!c[a(t)]
            }
        },
        280: (t, e, r) => {
            var a = r(25726),
                n = r(86916),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!a(t)) return n(t);
                var e = [];
                for (var r in Object(t)) o.call(t, r) && "constructor" != r && e.push(r);
                return e
            }
        },
        69877: t => {
            var e = Math.floor,
                r = Math.random;
            t.exports = function(t, a) {
                return t + e(r() * (a - t + 1))
            }
        },
        60726: (t, e, r) => {
            var a = r(29750),
                n = r(73480),
                o = r(61312);
            t.exports = function(t, e) {
                var r = o(t);
                return n(r, a(e, 0, r.length))
            }
        },
        22545: t => {
            t.exports = function(t, e) {
                for (var r = -1, a = Array(t); ++r < t;) a[r] = e(r);
                return a
            }
        },
        7518: t => {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        47415: (t, e, r) => {
            var a = r(29932);
            t.exports = function(t, e) {
                return a(e, (function(e) {
                    return t[e]
                }))
            }
        },
        278: t => {
            t.exports = function(t, e) {
                var r = -1,
                    a = t.length;
                for (e || (e = Array(a)); ++r < a;) e[r] = t[r];
                return e
            }
        },
        25726: t => {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        86916: (t, e, r) => {
            var a = r(5569)(Object.keys, Object);
            t.exports = a
        },
        31167: (t, e, r) => {
            t = r.nmd(t);
            var a = r(31957),
                n = e && !e.nodeType && e,
                o = n && t && !t.nodeType && t,
                c = o && o.exports === n && a.process,
                i = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            t.exports = i
        },
        5569: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }
        },
        73480: (t, e, r) => {
            var a = r(69877);
            t.exports = function(t, e) {
                var r = -1,
                    n = t.length,
                    o = n - 1;
                for (e = void 0 === e ? n : e; ++r < e;) {
                    var c = a(r, o),
                        i = t[c];
                    t[c] = t[r], t[r] = i
                }
                return t.length = e, t
            }
        },
        44144: (t, e, r) => {
            t = r.nmd(t);
            var a = r(55639),
                n = r(95062),
                o = e && !e.nodeType && e,
                c = o && t && !t.nodeType && t,
                i = c && c.exports === o ? a.Buffer : void 0,
                p = (i ? i.isBuffer : void 0) || n;
            t.exports = p
        },
        36719: (t, e, r) => {
            var a = r(38749),
                n = r(7518),
                o = r(31167),
                c = o && o.isTypedArray,
                i = c ? n(c) : a;
            t.exports = i
        },
        3674: (t, e, r) => {
            var a = r(14636),
                n = r(280),
                o = r(98612);
            t.exports = function(t) {
                return o(t) ? a(t) : n(t)
            }
        },
        42404: (t, e, r) => {
            var a = r(26891),
                n = r(60726),
                o = r(1469),
                c = r(16612),
                i = r(40554);
            t.exports = function(t, e, r) {
                return e = (r ? c(t, e, r) : void 0 === e) ? 1 : i(e), (o(t) ? a : n)(t, e)
            }
        },
        95062: t => {
            t.exports = function() {
                return !1
            }
        },
        40554: (t, e, r) => {
            var a = r(18601);
            t.exports = function(t) {
                var e = a(t),
                    r = e % 1;
                return e == e ? r ? e - r : e : 0
            }
        },
        61312: (t, e, r) => {
            var a = r(47415),
                n = r(3674);
            t.exports = function(t) {
                return null == t ? [] : a(t, n(t))
            }
        },
        92610: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "12ce1bda863d50d0-1980w.jpg 1980w",
                images: [{
                    path: r.p + "12ce1bda863d50d0-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "12ce1bda863d50d0-1980w.jpg",
                toString: function() {
                    return r.p + "12ce1bda863d50d0-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        14420: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "19cf5ea4873534e6-1980w.jpg 1980w",
                images: [{
                    path: r.p + "19cf5ea4873534e6-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "19cf5ea4873534e6-1980w.jpg",
                toString: function() {
                    return r.p + "19cf5ea4873534e6-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38325: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "a15004cb78587aea-1980w.jpg 1980w",
                images: [{
                    path: r.p + "a15004cb78587aea-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "a15004cb78587aea-1980w.jpg",
                toString: function() {
                    return r.p + "a15004cb78587aea-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        25623: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "5ac33cecd162656c-1980w.jpg 1980w",
                images: [{
                    path: r.p + "5ac33cecd162656c-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "5ac33cecd162656c-1980w.jpg",
                toString: function() {
                    return r.p + "5ac33cecd162656c-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        5171: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "f2fe59d11df55cf4-1980w.jpg 1980w",
                images: [{
                    path: r.p + "f2fe59d11df55cf4-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "f2fe59d11df55cf4-1980w.jpg",
                toString: function() {
                    return r.p + "f2fe59d11df55cf4-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38239: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "6760e1bc722c437b-1980w.jpg 1980w",
                images: [{
                    path: r.p + "6760e1bc722c437b-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "6760e1bc722c437b-1980w.jpg",
                toString: function() {
                    return r.p + "6760e1bc722c437b-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        81592: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "027202d759d2cf17-1920w.jpg 1920w",
                images: [{
                    path: r.p + "027202d759d2cf17-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "027202d759d2cf17-1920w.jpg",
                toString: function() {
                    return r.p + "027202d759d2cf17-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        42665: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "942180c1c931b9b9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "942180c1c931b9b9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "942180c1c931b9b9-1920w.jpg",
                toString: function() {
                    return r.p + "942180c1c931b9b9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        96253: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "3bb6219038a6eb91-1920w.jpg 1920w",
                images: [{
                    path: r.p + "3bb6219038a6eb91-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "3bb6219038a6eb91-1920w.jpg",
                toString: function() {
                    return r.p + "3bb6219038a6eb91-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        40533: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "5844853cd4177f64-1920w.jpg 1920w",
                images: [{
                    path: r.p + "5844853cd4177f64-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "5844853cd4177f64-1920w.jpg",
                toString: function() {
                    return r.p + "5844853cd4177f64-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        30599: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "c6455c52c3c108ef-1920w.jpg 1920w",
                images: [{
                    path: r.p + "c6455c52c3c108ef-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "c6455c52c3c108ef-1920w.jpg",
                toString: function() {
                    return r.p + "c6455c52c3c108ef-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        35883: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "e7e30361f928fa1f-1920w.jpg 1920w",
                images: [{
                    path: r.p + "e7e30361f928fa1f-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "e7e30361f928fa1f-1920w.jpg",
                toString: function() {
                    return r.p + "e7e30361f928fa1f-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        55074: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "960324bdaa4dd770-1920w.jpg 1920w",
                images: [{
                    path: r.p + "960324bdaa4dd770-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "960324bdaa4dd770-1920w.jpg",
                toString: function() {
                    return r.p + "960324bdaa4dd770-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        34414: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "802b4af19623d031-1920w.jpg 1920w",
                images: [{
                    path: r.p + "802b4af19623d031-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "802b4af19623d031-1920w.jpg",
                toString: function() {
                    return r.p + "802b4af19623d031-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        47218: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "0848895a9717ee5a-1920w.jpg 1920w",
                images: [{
                    path: r.p + "0848895a9717ee5a-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "0848895a9717ee5a-1920w.jpg",
                toString: function() {
                    return r.p + "0848895a9717ee5a-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        50749: (t, e, r) => {
            t.exports = {
                srcSet: r.p + "2a36acbdc7592ce9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "2a36acbdc7592ce9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "2a36acbdc7592ce9-1920w.jpg",
                toString: function() {
                    return r.p + "2a36acbdc7592ce9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        }
    }
]);
//# sourceMappingURL=a631f275fbc4dd877ae4780084f23cd10fc0a2c5c3b36da77848c4316ad8dc5d.js.map