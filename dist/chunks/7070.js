"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7070], {
        25272: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(54546),
                a = n(67294),
                l = n(32981),
                o = n(89250),
                c = n(79655),
                s = n(53637),
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
                    y = e.permsList,
                    g = e.urlWhitelist,
                    v = e.badUrlText,
                    E = e.ssoTokenParamName,
                    O = void 0 === E ? "ssoToken" : E,
                    w = (0, l.I0)(),
                    j = (0, o.s0)(),
                    Z = a.useState(!1),
                    k = (0, r.Z)(Z, 2),
                    P = k[0],
                    N = k[1],
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
                    if (!P && L) {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        z(e)
                    }
                }), [P, L]), (0, a.useEffect)((function() {
                    D && (N(!0), U(D))
                }), [D]);
                var S = function() {
                        "true" === new URL(window.location.href).searchParams.get("badUrl") && (N(!0), U(v))
                    },
                    I = function() {
                        var e = new URL(window.location.href).searchParams.get("redirect");
                        e && (g.some((function(t) {
                            return e.startsWith(t)
                        })) || (window.location = "/home/sso/canny?badUrl=true"))
                    },
                    z = function(e) {
                        if (!P && !T) {
                            I();
                            var t = new URL(e);
                            t.searchParams.set(O, L), window.location = t
                        }
                    };
                return a.createElement(s.Z, null, a.createElement(i.Z, {
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
                }, "Authorize ", h)), a.createElement(f.Ao, null, P && a.createElement(m.Z, {
                    color: "warning"
                }, T), a.createElement(u.Z, {
                    className: "mb-2"
                }, a.createElement(i.Z, {
                    sm: "4",
                    md: "5"
                }, a.createElement(p.Z, {
                    size: "slim",
                    userId: R.id
                }), a.createElement(c.rU, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    }
                }, a.createElement("small", null, "That's not me!"))), a.createElement(i.Z, {
                    sm: "8",
                    md: "7"
                }, a.createElement(u.Z, null, a.createElement(i.Z, null, a.createElement("p", null, a.createElement("b", null, h), " wants read-only access to:"), a.createElement("ul", null, y.map((function(e) {
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
                    disabled: P,
                    onClick: function() {
                        w(n())
                    }
                }, "Authorize")))))))
            }
        },
        27070: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(67294),
                a = n(25272),
                l = n(5513);
            const o = function() {
                var e = {
                    getTokenAction: l.zV,
                    ssoDataSelector: function(e) {
                        return e.currentUser.cannySsoData
                    },
                    entityName: "Canny",
                    permsList: ["VRChat User ID", "Display Name", "Email Address", "Avatar Thumbnail"],
                    urlWhitelist: ["https://canny.io/", "https://vrchat.canny.io/", "https://feedback.vrchat.com/"],
                    badUrlText: "The link you followed contained an incorrect redirect URL. \n                    If you followed the official login link on our Canny board \n                    and believe this is an error, please contact support@vrchat.com"
                };
                return r.createElement(a.Z, e)
            }
        },
        23138: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(67294),
                a = n(45697),
                l = n.n(a),
                o = n(94184),
                c = n.n(o),
                s = n(22040),
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
                tag: s.iC,
                toggle: l().func,
                transition: l().shape(i.Z.propTypes)
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
                    j = void 0 === w ? d(d({}, i.Z.defaultProps), {}, {
                        unmountOnExit: !0
                    }) : w,
                    Z = e.fade,
                    k = void 0 === Z || Z,
                    P = e.innerRef,
                    N = b(e, u),
                    x = (0, s.mx)(c()(t, "alert", "alert-".concat(y), {
                        "alert-dismissible": E
                    }), o),
                    C = (0, s.mx)(c()("btn-close", n), o),
                    T = d(d(d({}, i.Z.defaultProps), j), {}, {
                        baseClass: k ? j.baseClass : "",
                        timeout: k ? j.timeout : 0
                    });
                return r.createElement(i.Z, m({}, N, T, {
                    tag: p,
                    className: x,
                    in: v,
                    role: "alert",
                    innerRef: P
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
//# sourceMappingURL=051e3d8b5418d44af37b8cddced181dc06d0b35c9a0d2fcc0d08047af09fcb4e.js.map