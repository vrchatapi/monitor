(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3424], {
        13887: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
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
            const s = function(e) {
                var t = e.children,
                    r = e.showCredits,
                    n = (0, c.useState)(null),
                    s = (0, a.Z)(n, 2),
                    g = s[0],
                    u = s[1],
                    l = (0, c.useState)(null),
                    h = (0, a.Z)(l, 2),
                    d = h[0],
                    f = h[1],
                    m = (0, c.useMemo)((function() {
                        return o()(w, 6)
                    }), []);
                (0, c.useEffect)((function() {
                    if (null === g) u(m[0]);
                    else {
                        var e = b(g);
                        setTimeout((function() {
                            return u(e)
                        }), 1e4), f(e)
                    }
                }), [g]);
                var b = function(e) {
                    var t = m.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === m.length - 1 ? m[0] : m[t + 1]
                };
                return c.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === g ? "none" : "url(".concat(g.image, ")")
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
                }, t), (null == g ? void 0 : g.worldName) && r && c.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, c.createElement(i.Z, {
                    icon: p.default,
                    title: "World",
                    size: "2x"
                }), c.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, g.worldName, c.createElement("br", null), c.createElement("small", null, "by ", g.authorName))))
            }
        },
        13424: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => w
            });
            var a = r(20495),
                n = r(67294),
                o = r(86646),
                c = r(85533),
                i = r(60006),
                p = r(13887);
            const w = function() {
                return n.createElement(p.Z, null, n.createElement(c.Z, null, "Verification Failed"), n.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-px-2 tw-py-20 md:tw-px-[100px] tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, n.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, n.createElement("div", {
                    className: "tw-mb-5"
                }, n.createElement(o.Z, {
                    icon: a.faCircleExclamation,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), n.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Verification Failed"), n.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "The link you followed is either invalid, or you are already verified. Please log in and request a new verification link if prompted."), n.createElement(i.Qj, {
                    to: "/home/login",
                    className: "tw-mt-9 tw-w-60"
                }, "Back to login"))))
            }
        },
        14636: (e, t, r) => {
            var a = r(22545),
                n = r(35694),
                o = r(1469),
                c = r(44144),
                i = r(65776),
                p = r(36719),
                w = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = o(e),
                    s = !r && n(e),
                    g = !r && !s && c(e),
                    u = !r && !s && !g && p(e),
                    l = r || s || g || u,
                    h = l ? a(e.length, String) : [],
                    d = h.length;
                for (var f in e) !t && !w.call(e, f) || l && ("length" == f || g && ("offset" == f || "parent" == f) || u && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || i(f, d)) || h.push(f);
                return h
            }
        },
        29932: e => {
            e.exports = function(e, t) {
                for (var r = -1, a = null == e ? 0 : e.length, n = Array(a); ++r < a;) n[r] = t(e[r], r, e);
                return n
            }
        },
        26891: (e, t, r) => {
            var a = r(29750),
                n = r(278),
                o = r(73480);
            e.exports = function(e, t) {
                return o(n(e), a(t, 0, e.length))
            }
        },
        29750: e => {
            e.exports = function(e, t, r) {
                return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
            }
        },
        9454: (e, t, r) => {
            var a = r(44239),
                n = r(37005);
            e.exports = function(e) {
                return n(e) && "[object Arguments]" == a(e)
            }
        },
        38749: (e, t, r) => {
            var a = r(44239),
                n = r(41780),
                o = r(37005),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, e.exports = function(e) {
                return o(e) && n(e.length) && !!c[a(e)]
            }
        },
        280: (e, t, r) => {
            var a = r(25726),
                n = r(86916),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!a(e)) return n(e);
                var t = [];
                for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        69877: e => {
            var t = Math.floor,
                r = Math.random;
            e.exports = function(e, a) {
                return e + t(r() * (a - e + 1))
            }
        },
        60726: (e, t, r) => {
            var a = r(29750),
                n = r(73480),
                o = r(61312);
            e.exports = function(e, t) {
                var r = o(e);
                return n(r, a(t, 0, r.length))
            }
        },
        22545: e => {
            e.exports = function(e, t) {
                for (var r = -1, a = Array(e); ++r < e;) a[r] = t(r);
                return a
            }
        },
        7518: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        47415: (e, t, r) => {
            var a = r(29932);
            e.exports = function(e, t) {
                return a(t, (function(t) {
                    return e[t]
                }))
            }
        },
        278: e => {
            e.exports = function(e, t) {
                var r = -1,
                    a = e.length;
                for (t || (t = Array(a)); ++r < a;) t[r] = e[r];
                return t
            }
        },
        25726: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t)
            }
        },
        86916: (e, t, r) => {
            var a = r(5569)(Object.keys, Object);
            e.exports = a
        },
        31167: (e, t, r) => {
            e = r.nmd(e);
            var a = r(31957),
                n = t && !t.nodeType && t,
                o = n && e && !e.nodeType && e,
                c = o && o.exports === n && a.process,
                i = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        return e || c && c.binding && c.binding("util")
                    } catch (e) {}
                }();
            e.exports = i
        },
        5569: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        },
        73480: (e, t, r) => {
            var a = r(69877);
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length,
                    o = n - 1;
                for (t = void 0 === t ? n : t; ++r < t;) {
                    var c = a(r, o),
                        i = e[c];
                    e[c] = e[r], e[r] = i
                }
                return e.length = t, e
            }
        },
        35694: (e, t, r) => {
            var a = r(9454),
                n = r(37005),
                o = Object.prototype,
                c = o.hasOwnProperty,
                i = o.propertyIsEnumerable,
                p = a(function() {
                    return arguments
                }()) ? a : function(e) {
                    return n(e) && c.call(e, "callee") && !i.call(e, "callee")
                };
            e.exports = p
        },
        1469: e => {
            var t = Array.isArray;
            e.exports = t
        },
        44144: (e, t, r) => {
            e = r.nmd(e);
            var a = r(55639),
                n = r(95062),
                o = t && !t.nodeType && t,
                c = o && e && !e.nodeType && e,
                i = c && c.exports === o ? a.Buffer : void 0,
                p = (i ? i.isBuffer : void 0) || n;
            e.exports = p
        },
        36719: (e, t, r) => {
            var a = r(38749),
                n = r(7518),
                o = r(31167),
                c = o && o.isTypedArray,
                i = c ? n(c) : a;
            e.exports = i
        },
        3674: (e, t, r) => {
            var a = r(14636),
                n = r(280),
                o = r(98612);
            e.exports = function(e) {
                return o(e) ? a(e) : n(e)
            }
        },
        42404: (e, t, r) => {
            var a = r(26891),
                n = r(60726),
                o = r(1469),
                c = r(16612),
                i = r(40554);
            e.exports = function(e, t, r) {
                return t = (r ? c(e, t, r) : void 0 === t) ? 1 : i(t), (o(e) ? a : n)(e, t)
            }
        },
        95062: e => {
            e.exports = function() {
                return !1
            }
        },
        40554: (e, t, r) => {
            var a = r(18601);
            e.exports = function(e) {
                var t = a(e),
                    r = t % 1;
                return t == t ? r ? t - r : t : 0
            }
        },
        61312: (e, t, r) => {
            var a = r(47415),
                n = r(3674);
            e.exports = function(e) {
                return null == e ? [] : a(e, n(e))
            }
        },
        92610: (e, t, r) => {
            e.exports = {
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
        14420: (e, t, r) => {
            e.exports = {
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
        38325: (e, t, r) => {
            e.exports = {
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
        25623: (e, t, r) => {
            e.exports = {
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
        5171: (e, t, r) => {
            e.exports = {
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
        38239: (e, t, r) => {
            e.exports = {
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
        81592: (e, t, r) => {
            e.exports = {
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
        42665: (e, t, r) => {
            e.exports = {
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
        96253: (e, t, r) => {
            e.exports = {
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
        40533: (e, t, r) => {
            e.exports = {
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
        30599: (e, t, r) => {
            e.exports = {
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
        35883: (e, t, r) => {
            e.exports = {
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
        55074: (e, t, r) => {
            e.exports = {
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
        34414: (e, t, r) => {
            e.exports = {
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
        47218: (e, t, r) => {
            e.exports = {
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
        50749: (e, t, r) => {
            e.exports = {
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
//# sourceMappingURL=e15e8d5637a999c588a1d9bb0c66b64975791fe29c899969961f4db0abdbeae0.js.map