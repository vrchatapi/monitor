(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3609], {
        25272: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(54546),
                o = r(67294),
                a = r(32981),
                c = r(89250),
                l = r(79655),
                s = r(53637),
                i = r(95305),
                u = r(35773),
                f = r(23138),
                p = r(37463),
                b = r(41400),
                m = r(47716);
            const d = function(e) {
                var t, r = e.getTokenAction,
                    d = e.ssoDataSelector,
                    y = e.entityName,
                    v = e.permsList,
                    g = e.urlWhitelist,
                    h = e.badUrlText,
                    j = e.ssoTokenParamName,
                    O = void 0 === j ? "ssoToken" : j,
                    x = (0, a.I0)(),
                    E = (0, c.s0)(),
                    w = o.useState(!1),
                    A = (0, n.Z)(w, 2),
                    P = A[0],
                    Z = A[1],
                    k = o.useState(!1),
                    N = (0, n.Z)(k, 2),
                    T = N[0],
                    C = N[1],
                    U = (0, a.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    R = null !== (t = (0, a.v9)(d)) && void 0 !== t ? t : {},
                    S = R.token,
                    L = R.error;
                (0, o.useEffect)((function() {
                    D(), I()
                }), []), (0, o.useEffect)((function() {
                    if (!P && S) {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        M(e)
                    }
                }), [P, S]), (0, o.useEffect)((function() {
                    L && (Z(!0), C(L))
                }), [L]);
                var D = function() {
                        "true" === new URL(window.location.href).searchParams.get("badUrl") && (Z(!0), C(h))
                    },
                    I = function() {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        e && (g.some((function(t) {
                            return e.startsWith(t)
                        })) || (window.location = "/home/sso/canny?badUrl=true"))
                    },
                    M = function(e) {
                        if (!P && !T) {
                            I();
                            var t = new URL(e);
                            t.searchParams.set(O, S), window.location = t
                        }
                    };
                return o.createElement(s.Z, null, o.createElement(i.Z, {
                    lg: {
                        offset: 3,
                        size: 6
                    },
                    style: {
                        marginTop: "50px"
                    }
                }, o.createElement(u.Z, {
                    className: "justify-content-center"
                }, o.createElement(b.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), o.createElement(p.oI, null, o.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Authorize ", y)), o.createElement(p.Ao, null, P && o.createElement(f.Z, {
                    color: "warning"
                }, T), o.createElement(u.Z, {
                    className: "mb-2"
                }, o.createElement(i.Z, {
                    sm: "4",
                    md: "5"
                }, o.createElement(m.Z, {
                    size: "slim",
                    userId: U.id
                }), o.createElement(l.rU, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    }
                }, o.createElement("small", null, "That's not me!"))), o.createElement(i.Z, {
                    sm: "8",
                    md: "7"
                }, o.createElement(u.Z, null, o.createElement(i.Z, null, o.createElement("p", null, o.createElement("b", null, y), " wants read-only access to:"), o.createElement("ul", null, v.map((function(e) {
                    return o.createElement("li", {
                        key: e
                    }, "Your ", o.createElement("b", null, e))
                }))))))), o.createElement(u.Z, null, o.createElement(i.Z, {
                    className: "d-flex",
                    style: {
                        margin: "0 -0.25rem",
                        width: "auto",
                        maxWidth: "none"
                    }
                }, o.createElement("div", {
                    className: "mx-1",
                    style: {
                        flex: "1 1 45px"
                    }
                }, o.createElement(b.Gh, {
                    neutral: !0,
                    onClick: function() {
                        E("/home")
                    }
                }, "Cancel")), o.createElement("div", {
                    className: "mx-1",
                    style: {
                        flex: "1 1 45px"
                    }
                }, o.createElement(b.p, {
                    disabled: P,
                    onClick: function() {
                        x(r())
                    }
                }, "Authorize")))))))
            }
        },
        14636: (e, t, r) => {
            var n = r(22545),
                o = r(35694),
                a = r(1469),
                c = r(44144),
                l = r(65776),
                s = r(36719),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = a(e),
                    u = !r && o(e),
                    f = !r && !u && c(e),
                    p = !r && !u && !f && s(e),
                    b = r || u || f || p,
                    m = b ? n(e.length, String) : [],
                    d = m.length;
                for (var y in e) !t && !i.call(e, y) || b && ("length" == y || f && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || l(y, d)) || m.push(y);
                return m
            }
        },
        29932: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                return o
            }
        },
        94311: (e, t, r) => {
            var n = r(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[n(0, t - 1)] : void 0
            }
        },
        38749: (e, t, r) => {
            var n = r(44239),
                o = r(41780),
                a = r(37005),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, e.exports = function(e) {
                return a(e) && o(e.length) && !!c[n(e)]
            }
        },
        280: (e, t, r) => {
            var n = r(25726),
                o = r(86916),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return o(e);
                var t = [];
                for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        69877: e => {
            var t = Math.floor,
                r = Math.random;
            e.exports = function(e, n) {
                return e + t(r() * (n - e + 1))
            }
        },
        84992: (e, t, r) => {
            var n = r(94311),
                o = r(61312);
            e.exports = function(e) {
                return n(o(e))
            }
        },
        22545: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
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
            var n = r(29932);
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return e[t]
                }))
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
            var n = r(5569)(Object.keys, Object);
            e.exports = n
        },
        31167: (e, t, r) => {
            e = r.nmd(e);
            var n = r(31957),
                o = t && !t.nodeType && t,
                a = o && e && !e.nodeType && e,
                c = a && a.exports === o && n.process,
                l = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || c && c.binding && c.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        5569: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        },
        44144: (e, t, r) => {
            e = r.nmd(e);
            var n = r(55639),
                o = r(95062),
                a = t && !t.nodeType && t,
                c = a && e && !e.nodeType && e,
                l = c && c.exports === a ? n.Buffer : void 0,
                s = (l ? l.isBuffer : void 0) || o;
            e.exports = s
        },
        36719: (e, t, r) => {
            var n = r(38749),
                o = r(7518),
                a = r(31167),
                c = a && a.isTypedArray,
                l = c ? o(c) : n;
            e.exports = l
        },
        3674: (e, t, r) => {
            var n = r(14636),
                o = r(280),
                a = r(98612);
            e.exports = function(e) {
                return a(e) ? n(e) : o(e)
            }
        },
        95534: (e, t, r) => {
            var n = r(94311),
                o = r(84992),
                a = r(1469);
            e.exports = function(e) {
                return (a(e) ? n : o)(e)
            }
        },
        95062: e => {
            e.exports = function() {
                return !1
            }
        },
        61312: (e, t, r) => {
            var n = r(47415),
                o = r(3674);
            e.exports = function(e) {
                return null == e ? [] : n(e, o(e))
            }
        },
        23138: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => g
            });
            var n = r(67294),
                o = r(45697),
                a = r.n(o),
                c = r(94184),
                l = r.n(c),
                s = r(22040),
                i = r(19434),
                u = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];

            function f() {
                return f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        m(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            var y = {
                children: a().node,
                className: a().string,
                closeClassName: a().string,
                closeAriaLabel: a().string,
                color: a().string,
                cssModule: a().object,
                fade: a().bool,
                innerRef: a().oneOfType([a().object, a().string, a().func]),
                isOpen: a().bool,
                tag: s.iC,
                toggle: a().func,
                transition: a().shape(i.Z.propTypes)
            };

            function v(e) {
                var t = e.className,
                    r = e.closeClassName,
                    o = e.closeAriaLabel,
                    a = void 0 === o ? "Close" : o,
                    c = e.cssModule,
                    p = e.tag,
                    m = void 0 === p ? "div" : p,
                    y = e.color,
                    v = void 0 === y ? "success" : y,
                    g = e.isOpen,
                    h = void 0 === g || g,
                    j = e.toggle,
                    O = e.children,
                    x = e.transition,
                    E = void 0 === x ? b(b({}, i.Z.defaultProps), {}, {
                        unmountOnExit: !0
                    }) : x,
                    w = e.fade,
                    A = void 0 === w || w,
                    P = e.innerRef,
                    Z = d(e, u),
                    k = (0, s.mx)(l()(t, "alert", "alert-".concat(v), {
                        "alert-dismissible": j
                    }), c),
                    N = (0, s.mx)(l()("btn-close", r), c),
                    T = b(b(b({}, i.Z.defaultProps), E), {}, {
                        baseClass: A ? E.baseClass : "",
                        timeout: A ? E.timeout : 0
                    });
                return n.createElement(i.Z, f({}, Z, T, {
                    tag: m,
                    className: k,
                    in: h,
                    role: "alert",
                    innerRef: P
                }), j ? n.createElement("button", {
                    type: "button",
                    className: N,
                    "aria-label": a,
                    onClick: j
                }) : null, O)
            }
            v.propTypes = y;
            const g = v
        }
    }
]);
//# sourceMappingURL=5b34805cb3aeb3bb92d039d31439c311fe317f2df44ad962bc7530f8ff438eb7.js.map