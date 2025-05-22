(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5460], {
        39395: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => s
            });
            var a = r(67294),
                n = r(89250),
                o = r(37463),
                l = r(41400),
                c = r(36678);
            const s = function() {
                var t = (0, n.s0)();
                return a.createElement(c.Z, null, a.createElement(o.$4, null, "Bad Email Verification"), a.createElement(l.W2, null, a.createElement(l.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, a.createElement(l.X2, {
                    className: "justify-content-center"
                }, a.createElement(l.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), a.createElement(l.im, null, a.createElement(o.qX, {
                    type: "error",
                    title: "Bad Email Verification",
                    message: "The link you followed is either invalid, or you are already verified!\n\nPlease log in and request a new verification link if prompted."
                }), a.createElement(o.zx, {
                    role: "link",
                    neutral: !0,
                    onClick: function() {
                        t("/home/login", {
                            state: {
                                logout: !0
                            }
                        })
                    }
                }, "Back To Login")))))
            }
        },
        36678: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => l
            });
            var a = r(54546),
                n = r(67294),
                o = [{
                    worldName: "Horse Mountain",
                    authorName: "nprowler",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_1.png"
                }, {
                    worldName: "Instagib Tournament",
                    authorName: "ville672",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_2.png"
                }, {
                    worldName: "Gumball Lounge",
                    authorName: "screamingcolor",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_3.png"
                }, {
                    worldName: "Exoplanet Journey",
                    authorName: "Niko*",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_4.png"
                }, {
                    worldName: "Dusk",
                    authorName: "Lucifer MStar",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_5.png"
                }, {
                    worldName: "Amber Glade - Winter",
                    authorName: "Mankey",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_6.png"
                }].sort((function() {
                    return Math.random() - .5
                }));
            const l = function(t) {
                var e = t.children,
                    r = t.showCredits,
                    l = (0, n.useState)(null),
                    c = (0, a.Z)(l, 2),
                    s = c[0],
                    i = c[1],
                    u = (0, n.useState)(null),
                    p = (0, a.Z)(u, 2),
                    m = p[0],
                    w = p[1];
                (0, n.useEffect)((function() {
                    if (null === s) i(o[0]);
                    else {
                        var t = h(s);
                        setTimeout((function() {
                            return i(t)
                        }), 1e4), w(t)
                    }
                }), [s]);
                var h = function(t) {
                    var e = o.findIndex((function(e) {
                        return e.imagePath === t.imagePath
                    }));
                    return e === o.length - 1 ? o[0] : o[e + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === s ? "none" : "url(".concat(s.imagePath, ")")
                    }
                }, n.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, n.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, n.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), n.createElement("img", {
                    className: "tw-hidden",
                    src: null == m ? void 0 : m.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, e), (null == s ? void 0 : s.worldName) && r && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", s.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", s.authorName)))
            }
        },
        14636: (t, e, r) => {
            var a = r(22545),
                n = r(35694),
                o = r(1469),
                l = r(44144),
                c = r(65776),
                s = r(36719),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = o(t),
                    u = !r && n(t),
                    p = !r && !u && l(t),
                    m = !r && !u && !p && s(t),
                    w = r || u || p || m,
                    h = w ? a(t.length, String) : [],
                    f = h.length;
                for (var d in t) !e && !i.call(t, d) || w && ("length" == d || p && ("offset" == d || "parent" == d) || m && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || c(d, f)) || h.push(d);
                return h
            }
        },
        29932: t => {
            t.exports = function(t, e) {
                for (var r = -1, a = null == t ? 0 : t.length, n = Array(a); ++r < a;) n[r] = e(t[r], r, t);
                return n
            }
        },
        94311: (t, e, r) => {
            var a = r(69877);
            t.exports = function(t) {
                var e = t.length;
                return e ? t[a(0, e - 1)] : void 0
            }
        },
        9454: (t, e, r) => {
            var a = r(44239),
                n = r(37005);
            t.exports = function(t) {
                return n(t) && "[object Arguments]" == a(t)
            }
        },
        38749: (t, e, r) => {
            var a = r(44239),
                n = r(41780),
                o = r(37005),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1, t.exports = function(t) {
                return o(t) && n(t.length) && !!l[a(t)]
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
        84992: (t, e, r) => {
            var a = r(94311),
                n = r(61312);
            t.exports = function(t) {
                return a(n(t))
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
                l = o && o.exports === n && a.process,
                c = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || l && l.binding && l.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        5569: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }
        },
        35694: (t, e, r) => {
            var a = r(9454),
                n = r(37005),
                o = Object.prototype,
                l = o.hasOwnProperty,
                c = o.propertyIsEnumerable,
                s = a(function() {
                    return arguments
                }()) ? a : function(t) {
                    return n(t) && l.call(t, "callee") && !c.call(t, "callee")
                };
            t.exports = s
        },
        1469: t => {
            var e = Array.isArray;
            t.exports = e
        },
        44144: (t, e, r) => {
            t = r.nmd(t);
            var a = r(55639),
                n = r(95062),
                o = e && !e.nodeType && e,
                l = o && t && !t.nodeType && t,
                c = l && l.exports === o ? a.Buffer : void 0,
                s = (c ? c.isBuffer : void 0) || n;
            t.exports = s
        },
        36719: (t, e, r) => {
            var a = r(38749),
                n = r(7518),
                o = r(31167),
                l = o && o.isTypedArray,
                c = l ? n(l) : a;
            t.exports = c
        },
        3674: (t, e, r) => {
            var a = r(14636),
                n = r(280),
                o = r(98612);
            t.exports = function(t) {
                return o(t) ? a(t) : n(t)
            }
        },
        95534: (t, e, r) => {
            var a = r(94311),
                n = r(84992),
                o = r(1469);
            t.exports = function(t) {
                return (o(t) ? a : n)(t)
            }
        },
        95062: t => {
            t.exports = function() {
                return !1
            }
        },
        61312: (t, e, r) => {
            var a = r(47415),
                n = r(3674);
            t.exports = function(t) {
                return null == t ? [] : a(t, n(t))
            }
        }
    }
]);
//# sourceMappingURL=69dc1744d5cc704e45f1e99a00212c48cf62f80e366e893b8749c301c183a980.js.map