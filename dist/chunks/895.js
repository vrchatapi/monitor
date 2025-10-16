(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [895], {
        25272: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(54546),
                a = n(67294),
                l = n(32981),
                o = n(89250),
                s = n(79655),
                c = n(53637),
                i = n(95305),
                u = n(35773),
                m = n(23138),
                f = n(96985),
                d = n(41400),
                p = n(47716);
            const b = function(e) {
                var t, n = e.getTokenAction,
                    b = e.ssoDataSelector,
                    h = e.entityName,
                    v = e.permsList,
                    g = e.urlWhitelist,
                    y = e.badUrlText,
                    E = e.ssoTokenParamName,
                    O = void 0 === E ? "ssoToken" : E,
                    w = (0, l.I0)(),
                    j = (0, o.s0)(),
                    Z = a.useState(!1),
                    k = (0, r.Z)(Z, 2),
                    N = k[0],
                    P = k[1],
                    x = a.useState(!1),
                    C = (0, r.Z)(x, 2),
                    T = C[0],
                    U = C[1],
                    R = (0, l.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    A = null !== (t = (0, l.v9)(b)) && void 0 !== t ? t : {},
                    L = A.token,
                    D = A.error;
                (0, a.useEffect)((function() {
                    S(), I()
                }), []), (0, a.useEffect)((function() {
                    if (!N && L) {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        z(e)
                    }
                }), [N, L]), (0, a.useEffect)((function() {
                    D && (P(!0), U(D))
                }), [D]);
                var S = function() {
                        "true" === new URL(window.location.href).searchParams.get("badUrl") && (P(!0), U(y))
                    },
                    I = function() {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        e && (g.some((function(t) {
                            return e.startsWith(t)
                        })) || (window.location = "/home/sso/canny?badUrl=true"))
                    },
                    z = function(e) {
                        if (!N && !T) {
                            I();
                            var t = new URL(e);
                            t.searchParams.set(O, L), window.location = t
                        }
                    };
                return a.createElement(c.Z, null, a.createElement(i.Z, {
                    lg: {
                        offset: 3,
                        size: 6
                    },
                    style: {
                        marginTop: "50px"
                    }
                }, a.createElement(u.Z, {
                    className: "justify-content-center"
                }, a.createElement(d.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), a.createElement(f.oI, null, a.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Authorize ", h)), a.createElement(f.Ao, null, N && a.createElement(m.Z, {
                    color: "warning"
                }, T), a.createElement(u.Z, {
                    className: "mb-2"
                }, a.createElement(i.Z, {
                    sm: "4",
                    md: "5"
                }, a.createElement(p.Z, {
                    size: "slim",
                    userId: R.id
                }), a.createElement(s.rU, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    }
                }, a.createElement("small", null, "That's not me!"))), a.createElement(i.Z, {
                    sm: "8",
                    md: "7"
                }, a.createElement(u.Z, null, a.createElement(i.Z, null, a.createElement("p", null, a.createElement("b", null, h), " wants read-only access to:"), a.createElement("ul", null, v.map((function(e) {
                    return a.createElement("li", {
                        key: e
                    }, "Your ", a.createElement("b", null, e))
                }))))))), a.createElement(u.Z, null, a.createElement(i.Z, {
                    className: "d-flex",
                    style: {
                        margin: "0 -0.25rem",
                        width: "auto",
                        maxWidth: "none"
                    }
                }, a.createElement("div", {
                    className: "mx-1",
                    style: {
                        flex: "1 1 45px"
                    }
                }, a.createElement(d.Gh, {
                    neutral: !0,
                    onClick: function() {
                        j("/home")
                    }
                }, "Cancel")), a.createElement("div", {
                    className: "mx-1",
                    style: {
                        flex: "1 1 45px"
                    }
                }, a.createElement(d.p, {
                    disabled: N,
                    onClick: function() {
                        w(n())
                    }
                }, "Authorize")))))))
            }
        },
        81310: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(67294),
                a = n(25272),
                l = n(5513);
            const o = function() {
                var e = {
                    getTokenAction: l.vN,
                    ssoDataSelector: function(e) {
                        return e.currentUser.furalitySsoData
                    },
                    entityName: "Furality",
                    permsList: ["VRChat User ID", "Display Name", "Email Address", "Current Avatar Thumbnail"],
                    urlWhitelist: ["https://furality.online/login"],
                    ssoTokenParamName: "token",
                    badUrlText: "The link you followed contained an incorrect redirect URL. \n                    If you followed the official link from Furality\n                    and believe this is an error, please contact support@vrchat.com"
                };
                return r.createElement(a.Z, e)
            }
        },
        94311: (e, t, n) => {
            var r = n(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[r(0, t - 1)] : void 0
            }
        },
        84992: (e, t, n) => {
            var r = n(94311),
                a = n(61312);
            e.exports = function(e) {
                return r(a(e))
            }
        },
        95534: (e, t, n) => {
            var r = n(94311),
                a = n(84992),
                l = n(1469);
            e.exports = function(e) {
                return (l(e) ? r : a)(e)
            }
        },
        23138: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(67294),
                a = n(45697),
                l = n.n(a),
                o = n(94184),
                s = n.n(o),
                c = n(22040),
                i = n(19434),
                u = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];

            function m() {
                return m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, m.apply(this, arguments)
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        p(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var h = {
                children: l().node,
                className: l().string,
                closeClassName: l().string,
                closeAriaLabel: l().string,
                color: l().string,
                cssModule: l().object,
                fade: l().bool,
                innerRef: l().oneOfType([l().object, l().string, l().func]),
                isOpen: l().bool,
                tag: c.iC,
                toggle: l().func,
                transition: l().shape(i.Z.propTypes)
            };

            function v(e) {
                var t = e.className,
                    n = e.closeClassName,
                    a = e.closeAriaLabel,
                    l = void 0 === a ? "Close" : a,
                    o = e.cssModule,
                    f = e.tag,
                    p = void 0 === f ? "div" : f,
                    h = e.color,
                    v = void 0 === h ? "success" : h,
                    g = e.isOpen,
                    y = void 0 === g || g,
                    E = e.toggle,
                    O = e.children,
                    w = e.transition,
                    j = void 0 === w ? d(d({}, i.Z.defaultProps), {}, {
                        unmountOnExit: !0
                    }) : w,
                    Z = e.fade,
                    k = void 0 === Z || Z,
                    N = e.innerRef,
                    P = b(e, u),
                    x = (0, c.mx)(s()(t, "alert", "alert-".concat(v), {
                        "alert-dismissible": E
                    }), o),
                    C = (0, c.mx)(s()("btn-close", n), o),
                    T = d(d(d({}, i.Z.defaultProps), j), {}, {
                        baseClass: k ? j.baseClass : "",
                        timeout: k ? j.timeout : 0
                    });
                return r.createElement(i.Z, m({}, P, T, {
                    tag: p,
                    className: x,
                    in: y,
                    role: "alert",
                    innerRef: N
                }), E ? r.createElement("button", {
                    type: "button",
                    className: C,
                    "aria-label": l,
                    onClick: E
                }) : null, O)
            }
            v.propTypes = h;
            const g = v
        }
    }
]);
//# sourceMappingURL=ca064ba2ea7223c59a845de9ec331c59f13444a2519d36a49ba7580b8920f031.js.map