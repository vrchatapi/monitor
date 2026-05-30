"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6585], {
        52831(e, t, n) {
            n.d(t, {
                A: () => b
            });
            var r = n(15902),
                a = n(96540),
                l = n(6376),
                o = n(84976),
                c = n(47767),
                s = n(35169),
                i = n(5826),
                u = n(39704),
                m = n(85052),
                f = n(15033),
                d = n(82030),
                p = n(59362);
            const b = function(e) {
                var t, n = e.getTokenAction,
                    b = e.ssoDataSelector,
                    h = e.entityName,
                    y = e.permsList,
                    g = e.urlWhitelist,
                    v = e.badUrlText,
                    E = e.ssoTokenParamName,
                    O = void 0 === E ? "ssoToken" : E,
                    w = (0, l.wA)(),
                    A = (0, c.Zp)(),
                    j = a.useState(!1),
                    N = (0, r.A)(j, 2),
                    k = N[0],
                    P = N[1],
                    x = a.useState(!1),
                    C = (0, r.A)(x, 2),
                    U = C[0],
                    T = C[1],
                    L = (0, l.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }),
                    R = null !== (t = (0, l.d4)(b)) && void 0 !== t ? t : {},
                    D = R.token,
                    S = R.error;
                (0, a.useEffect)(function() {
                    W(), z()
                }, []), (0, a.useEffect)(function() {
                    if (!k && D) {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        I(e)
                    }
                }, [k, D]), (0, a.useEffect)(function() {
                    S && (P(!0), T(S))
                }, [S]);
                var W = function() {
                        "true" === new URL(window.location.href).searchParams.get("badUrl") && (P(!0), T(v))
                    },
                    z = function() {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        e && (g.some(function(t) {
                            return e.startsWith(t)
                        }) || (window.location = "/home/sso/canny?badUrl=true"))
                    },
                    I = function(e) {
                        if (!k && !U) {
                            z();
                            var t = new URL(e);
                            t.searchParams.set(O, D), window.location = t
                        }
                    };
                return a.createElement(s.A, null, a.createElement(u.A, {
                    lg: {
                        offset: 3,
                        size: 6
                    },
                    style: {
                        marginTop: "50px"
                    }
                }, a.createElement(i.A, {
                    className: "justify-content-center"
                }, a.createElement(d.gu, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), a.createElement(f.N3, null, a.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Authorize ", h)), a.createElement(f.BW, null, k && a.createElement(m.A, {
                    color: "warning"
                }, U), a.createElement(i.A, {
                    className: "mb-2"
                }, a.createElement(u.A, {
                    sm: "4",
                    md: "5"
                }, a.createElement(p.A, {
                    size: "slim",
                    userId: L.id
                }), a.createElement(o.N_, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    }
                }, a.createElement("small", null, "That's not me!"))), a.createElement(u.A, {
                    sm: "8",
                    md: "7"
                }, a.createElement(i.A, null, a.createElement(u.A, null, a.createElement("p", null, a.createElement("b", null, h), " wants read-only access to:"), a.createElement("ul", null, y.map(function(e) {
                    return a.createElement("li", {
                        key: e
                    }, "Your ", a.createElement("b", null, e))
                })))))), a.createElement(i.A, null, a.createElement(u.A, {
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
                }, a.createElement(d.UZ, {
                    neutral: !0,
                    onClick: function() {
                        A("/home")
                    }
                }, "Cancel")), a.createElement("div", {
                    className: "mx-1",
                    style: {
                        flex: "1 1 45px"
                    }
                }, a.createElement(d.py, {
                    disabled: k,
                    onClick: function() {
                        w(n())
                    }
                }, "Authorize")))))))
            }
        },
        46585(e, t, n) {
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(96540),
                a = n(52831),
                l = n(558);
            const o = function() {
                var e = {
                    getTokenAction: l.Ey,
                    ssoDataSelector: function(e) {
                        return e.currentUser.cannySsoData
                    },
                    entityName: "Canny",
                    permsList: ["VRChat User ID", "Display Name", "Email Address", "Avatar Thumbnail"],
                    urlWhitelist: ["https://canny.io/", "https://vrchat.canny.io/", "https://feedback.vrchat.com/"],
                    badUrlText: "The link you followed contained an incorrect redirect URL. \n                    If you followed the official login link on our Canny board \n                    and believe this is an error, please contact support@vrchat.com"
                };
                return r.createElement(a.A, e)
            }
        },
        85052(e, t, n) {
            n.d(t, {
                A: () => g
            });
            var r = n(96540),
                a = n(5556),
                l = n.n(a),
                o = n(32485),
                c = n.n(o),
                s = n(56331),
                i = n(60014),
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
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        p(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                tag: s.Wx,
                toggle: l().func,
                transition: l().shape(i.A.propTypes)
            };

            function y(e) {
                var t = e.className,
                    n = e.closeClassName,
                    a = e.closeAriaLabel,
                    l = void 0 === a ? "Close" : a,
                    o = e.cssModule,
                    f = e.tag,
                    p = void 0 === f ? "div" : f,
                    h = e.color,
                    y = void 0 === h ? "success" : h,
                    g = e.isOpen,
                    v = void 0 === g || g,
                    E = e.toggle,
                    O = e.children,
                    w = e.transition,
                    A = void 0 === w ? d(d({}, i.A.defaultProps), {}, {
                        unmountOnExit: !0
                    }) : w,
                    j = e.fade,
                    N = void 0 === j || j,
                    k = e.innerRef,
                    P = b(e, u),
                    x = (0, s.qO)(c()(t, "alert", "alert-".concat(y), {
                        "alert-dismissible": E
                    }), o),
                    C = (0, s.qO)(c()("btn-close", n), o),
                    U = d(d(d({}, i.A.defaultProps), A), {}, {
                        baseClass: N ? A.baseClass : "",
                        timeout: N ? A.timeout : 0
                    });
                return r.createElement(i.A, m({}, P, U, {
                    tag: p,
                    className: x,
                    in: v,
                    role: "alert",
                    innerRef: k
                }), E ? r.createElement("button", {
                    type: "button",
                    className: C,
                    "aria-label": l,
                    onClick: E
                }) : null, O)
            }
            y.propTypes = h;
            const g = y
        }
    }
]);
//# sourceMappingURL=0656ca16d0e4fb44aa838f3ba1b8498f62c4f0114767841198539947ffa8395d.js.map