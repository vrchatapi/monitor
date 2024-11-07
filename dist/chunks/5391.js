(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5391], {
        78989: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => w
            });
            var a = r(87462),
                n = r(4965),
                o = r(67294),
                c = r(45697),
                s = r.n(c),
                l = r(34226);
            var u = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                i = (0, o.forwardRef)((function(t, e) {
                    var r = t.isError,
                        n = void 0 !== r && r,
                        c = u;
                    return o.createElement(p, (0, a.Z)({
                        ref: e
                    }, t, {
                        inputStyle: n ? c : ""
                    }))
                }));
            i.propTypes = {
                isError: s().bool
            };
            var p = (0, n.Z)(l.II, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const w = i
        },
        36678: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => c
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
            const c = function(t) {
                var e = t.children,
                    r = t.showCredits,
                    c = (0, n.useState)(null),
                    s = (0, a.Z)(c, 2),
                    l = s[0],
                    u = s[1],
                    i = (0, n.useState)(null),
                    p = (0, a.Z)(i, 2),
                    w = p[0],
                    m = p[1];
                (0, n.useEffect)((function() {
                    if (null === l) u(o[0]);
                    else {
                        var t = h(l);
                        setTimeout((function() {
                            return u(t)
                        }), 1e4), m(t)
                    }
                }), [l]);
                var h = function(t) {
                    var e = o.findIndex((function(e) {
                        return e.imagePath === t.imagePath
                    }));
                    return e === o.length - 1 ? o[0] : o[e + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === l ? "none" : "url(".concat(l.imagePath, ")")
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
                    src: null == w ? void 0 : w.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, e), (null == l ? void 0 : l.worldName) && r && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", l.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", l.authorName)))
            }
        },
        14636: (t, e, r) => {
            var a = r(22545),
                n = r(35694),
                o = r(1469),
                c = r(44144),
                s = r(65776),
                l = r(36719),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = o(t),
                    i = !r && n(t),
                    p = !r && !i && c(t),
                    w = !r && !i && !p && l(t),
                    m = r || i || p || w,
                    h = m ? a(t.length, String) : [],
                    f = h.length;
                for (var b in t) !e && !u.call(t, b) || m && ("length" == b || p && ("offset" == b || "parent" == b) || w && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, f)) || h.push(b);
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
                c = o && o.exports === n && a.process,
                s = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            t.exports = s
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
                c = o.hasOwnProperty,
                s = o.propertyIsEnumerable,
                l = a(function() {
                    return arguments
                }()) ? a : function(t) {
                    return n(t) && c.call(t, "callee") && !s.call(t, "callee")
                };
            t.exports = l
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
                c = o && t && !t.nodeType && t,
                s = c && c.exports === o ? a.Buffer : void 0,
                l = (s ? s.isBuffer : void 0) || n;
            t.exports = l
        },
        36719: (t, e, r) => {
            var a = r(38749),
                n = r(7518),
                o = r(31167),
                c = o && o.isTypedArray,
                s = c ? n(c) : a;
            t.exports = s
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
//# sourceMappingURL=52e61d6e3f53f454c826e413dff8aa1bf3a9fc3266a5cec2460fc799a3f5ae53.js.map