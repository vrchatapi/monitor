"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4907], {
        90524: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "circle-minus",
                r = ["minus-circle"],
                o = "f056",
                i = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, o, i]
            }, t.faCircleMinus = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = o, t.svgPathData = i, t.aliases = r
        },
        213: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "circle-plus",
                r = ["plus-circle"],
                o = "f055",
                i = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, o, i]
            }, t.faCirclePlus = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = o, t.svgPathData = i, t.aliases = r
        },
        27003: (e, t, n) => {
            var r = n(90524);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.uM = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        45573: (e, t, n) => {
            var r = n(213);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.Kt = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        37599: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(54546),
                o = n(45573),
                i = n(27003),
                a = n(67294),
                l = n(34698),
                s = n(65706),
                c = n(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    p = e.size,
                    d = void 0 === p ? "md" : p,
                    f = e.children,
                    m = e.onToggleCallback,
                    h = void 0 === m ? function() {} : m,
                    g = a.useState(t || !1),
                    E = (0, r.Z)(g, 2),
                    v = E[0],
                    y = E[1];
                a.useEffect((function() {
                    y(t)
                }), [t]);
                return a.createElement("div", null, a.createElement("h3", null, a.createElement(l.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        n ? n() : (h(!v), y(!v))
                    },
                    color: v ? "primary" : "secondary"
                }, v && a.createElement(c.Z, {
                    icon: i.uM
                }), !v && a.createElement(c.Z, {
                    icon: o.Kt
                })), " ", u), a.createElement(s.Z, {
                    isOpen: v
                }, f), "sm" !== d && a.createElement("br", null))
            }
        },
        44907: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => w
            });
            var r = n(54546),
                o = n(4965),
                i = n(40098),
                a = n(67294),
                l = n(89250),
                s = n(79655),
                c = n(96985),
                u = n(73670),
                p = n(35773),
                d = n(95305),
                f = n(22202),
                m = n(37599),
                h = n(83505),
                g = n(93261),
                E = n(98185),
                v = n(78666);
            const y = function(e) {
                    var t = e.userId,
                        n = e.owned,
                        o = void 0 !== n && n,
                        i = e.invited,
                        l = void 0 !== i && i,
                        s = e.groupResults,
                        c = e.isBlocked,
                        u = void 0 !== c && c,
                        p = (0, a.useState)([]),
                        d = (0, r.Z)(p, 2),
                        f = d[0],
                        m = d[1],
                        y = (0, g.dj)({
                            userId: t
                        }, {
                            skip: !!s,
                            refetchOnMountOrArgChange: !0
                        }),
                        b = y.data,
                        O = void 0 === b ? [] : b,
                        w = y.isLoading,
                        x = y.isSuccess,
                        P = y.isError,
                        j = y.error,
                        S = (0, g.G_)({
                            userId: t,
                            membershipStatus: "userblocked"
                        }, {
                            skip: !u
                        }),
                        k = S.data,
                        N = S.isError,
                        Z = S.error,
                        D = S.isSuccess,
                        R = (0, g.G_)({
                            userId: t,
                            membershipStatus: "invited"
                        }, {
                            skip: !l
                        }),
                        _ = R.data,
                        I = R.isError,
                        C = R.error,
                        G = R.isSuccess;
                    a.useEffect((function() {
                        !s && x && m(o ? O.filter((function(e) {
                            return e.ownerId === t
                        })) : O.filter((function(e) {
                            return e.ownerId !== t
                        }))), u && D && m(k), l && G && m(_)
                    }), [O, k, _]);
                    var M, X = (null != s ? s : f).map((function(e) {
                            var n, r, o;
                            return a.createElement(v.Z, {
                                key: null !== (n = null == e || null === (r = e.group) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : e.id,
                                group: null !== (o = null == e ? void 0 : e.group) && void 0 !== o ? o : e,
                                isBlocked: u,
                                userId: t
                            })
                        })),
                        z = (0, h.iv)({
                            name: "1l03awk",
                            styles: "display:grid;gap:10px;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                        });
                    return P || N || I ? a.createElement("div", null, a.createElement("p", null, "Oops, something went wrong. Please try again later."), a.createElement("code", null, null === (M = j || Z || C) || void 0 === M || null === (M = M.data) || void 0 === M || null === (M = M.error) || void 0 === M ? void 0 : M.message)) : a.createElement(E.Z, {
                        loading: w
                    }, a.createElement("div", {
                        className: z
                    }, X))
                },
                b = function() {
                    var e = (0, f.XC)().data;
                    return a.createElement("div", null, a.createElement(p.Z, null, a.createElement(d.Z, {
                        xs: "12"
                    }, a.createElement(m.Z, {
                        title: "Owned Groups",
                        collapseOpen: !0
                    }, a.createElement(y, {
                        userId: e.id,
                        owned: !0
                    })))), a.createElement(p.Z, null, a.createElement(d.Z, {
                        xs: "12"
                    }, a.createElement(m.Z, {
                        title: "Joined Groups"
                    }, a.createElement(y, {
                        userId: e.id
                    })))), a.createElement(p.Z, null, a.createElement(d.Z, {
                        xs: "12"
                    }, a.createElement(m.Z, {
                        title: "Group Invites"
                    }, a.createElement(y, {
                        userId: e.id,
                        invited: !0
                    })))), a.createElement(p.Z, null, a.createElement(d.Z, {
                        xs: "12"
                    }, a.createElement(m.Z, {
                        title: "Blocked Groups"
                    }, a.createElement(y, {
                        userId: e.id,
                        isBlocked: !0
                    })))))
                };
            var O = n(17219);
            const w = function() {
                var e = (0, l.s0)(),
                    t = (0, l.UO)().query,
                    n = (0, f.XC)().data,
                    o = a.useState(""),
                    p = (0, r.Z)(o, 2),
                    d = p[0],
                    m = p[1],
                    h = a.useState(3),
                    E = (0, r.Z)(h, 2),
                    v = E[0],
                    w = E[1],
                    P = (0, f.XC)().data,
                    j = (void 0 === P ? {} : P).id,
                    S = (0, g.dj)({
                        userId: j
                    }, {
                        skip: !j
                    }),
                    k = S.data,
                    N = S.isLoading,
                    Z = S.isSuccess,
                    D = (0, g.xS)(),
                    R = (0, r.Z)(D, 2),
                    _ = R[0],
                    I = R[1],
                    C = I.data,
                    G = (I.error, I.isLoading),
                    M = (0, O.y)(),
                    X = M.data,
                    z = M.isLoading,
                    T = 0,
                    U = 0;
                if (M.isSuccess && (T = X.constants.GROUPS.MAX_JOINED_PLUS, U = X.constants.GROUPS.MAX_OWNED), (0, a.useEffect)((function() {
                        t && _({
                            query: t
                        })
                    }), [t]), (0, a.useEffect)((function() {
                        Z && w(k.filter((function(e) {
                            return e.ownerId === j
                        })).length)
                    }), [Z]), G || N || z) return a.createElement(c.X2, null, a.createElement(c.JX, {
                    className: "mt-5 w-100 text-center"
                }, a.createElement(c.UU, null)));
                var B = n.tagsSet.has("system_supporter") ? "You can only have ".concat(U, " groups at a time. Please delete one of your existing groups to create a new one.") : "You must be a VRC+ supporter to create a group.";
                return a.createElement("div", null, a.createElement(c.$4, null, "Groups"), a.createElement(c.X2, null, a.createElement(c.JX, {
                    className: "w-100"
                }, a.createElement(x, null, a.createElement("h2", null, "Groups"), v < U && n.tagsSet.has("system_supporter") && k.length < T || n.tagsSet.has("admin_uncap_owned_groups") ? a.createElement(s.rU, {
                    to: "/home/groups/create"
                }, a.createElement(c.zx, null, a.createElement(c.$1, {
                    icon: i.r8
                }), " Create Group")) : a.createElement(c.zx, {
                    disabled: !0,
                    title: B
                }, a.createElement(c.$1, {
                    icon: i.r8
                }), " Create Group")), a.createElement("form", {
                    onSubmit: function(t) {
                        null == t || t.preventDefault(), "" === d ? e("/home/groups/search") : d.startsWith("https://vrc.group/") || d.startsWith("vrc.group/") ? e("/home/groups/search/".concat(d.split("/").pop())) : e("/home/groups/search/".concat(d))
                    }
                }, a.createElement(u.Z, {
                    searchString: m,
                    defaultValue: t,
                    placeholder: "Enter a group short code, name or url to join"
                })))), a.createElement("br", null), t ? (null == C ? void 0 : C.length) > 0 ? a.createElement(c.X2, null, a.createElement(c.JX, {
                    className: "w-100"
                }, a.createElement("h3", null, 'Results for "', t, '"'), a.createElement(y, {
                    groupResults: C
                }))) : a.createElement(c.X2, null, a.createElement(c.JX, {
                    className: "mt-5 w-100 text-center"
                }, a.createElement("h4", null, 'Looks like "', t, "\" didn't bring back any groups!"), a.createElement("h6", null, "Try searching again, or ", a.createElement(s.rU, {
                    to: "/home/groups"
                }, "Go Back"), "!"))) : a.createElement(b, null))
            };
            var x = (0, o.Z)("div", {
                target: "e1nppl7n0"
            })({
                name: "bffhyr",
                styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:8px"
            })
        },
        65706: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var r = n(67294),
                o = n(45697),
                i = n.n(o),
                a = n(94184),
                l = n.n(a),
                s = n(8246),
                c = n(22040);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }
            var p, d = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

            function f() {
                return f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === u(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return v(e)
                    }(this, n)
                }
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, y(e)
            }

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        w(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = O(O({}, s.ZP.propTypes), {}, {
                    horizontal: i().bool,
                    isOpen: i().bool,
                    children: i().oneOfType([i().arrayOf(i().node), i().node]),
                    tag: c.iC,
                    className: i().node,
                    navbar: i().bool,
                    cssModule: i().object,
                    innerRef: i().shape({
                        current: i().object
                    })
                }),
                P = O(O({}, s.ZP.defaultProps), {}, {
                    horizontal: !1,
                    isOpen: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    tag: "div",
                    timeout: c.wF.Collapse
                }),
                j = (w(p = {}, c.E5.ENTERING, "collapsing"), w(p, c.E5.ENTERED, "collapse show"), w(p, c.E5.EXITING, "collapsing"), w(p, c.E5.EXITED, "collapse"), p);
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && g(e, t)
                }(a, e);
                var t, n, o, i = E(a);

                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (t = i.call(this, e)).state = {
                        dimension: null
                    }, t.nodeRef = e.innerRef || r.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function(e) {
                        t[e] = t[e].bind(v(t))
                    })), t
                }
                return t = a, (n = [{
                    key: "onEntering",
                    value: function(e, t) {
                        var n = this.getNode();
                        this.setState({
                            dimension: this.getDimension(n)
                        }), this.props.onEntering(n, t)
                    }
                }, {
                    key: "onEntered",
                    value: function(e, t) {
                        var n = this.getNode();
                        this.setState({
                            dimension: null
                        }), this.props.onEntered(n, t)
                    }
                }, {
                    key: "onExit",
                    value: function() {
                        var e = this.getNode();
                        this.setState({
                            dimension: this.getDimension(e)
                        }), this.props.onExit(e)
                    }
                }, {
                    key: "onExiting",
                    value: function() {
                        var e = this.getNode();
                        this.getDimension(e), this.setState({
                            dimension: 0
                        }), this.props.onExiting(e)
                    }
                }, {
                    key: "onExited",
                    value: function() {
                        var e = this.getNode();
                        this.setState({
                            dimension: null
                        }), this.props.onExited(e)
                    }
                }, {
                    key: "getNode",
                    value: function() {
                        return this.nodeRef.current
                    }
                }, {
                    key: "getDimension",
                    value: function(e) {
                        return this.props.horizontal ? e.scrollWidth : e.scrollHeight
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.tag,
                            o = t.horizontal,
                            i = t.isOpen,
                            a = t.className,
                            u = t.navbar,
                            p = t.cssModule,
                            h = t.children,
                            g = (t.innerRef, m(t, d)),
                            E = this.state.dimension,
                            v = (0, c.ei)(g, c.rb),
                            y = (0, c.CE)(g, c.rb);
                        return r.createElement(s.ZP, f({}, v, {
                            in: i,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), (function(t) {
                            var i = function(e) {
                                    return j[e] || "collapse"
                                }(t),
                                s = (0, c.mx)(l()(a, o && "collapse-horizontal", i, u && "navbar-collapse"), p),
                                d = null === E ? null : w({}, o ? "width" : "height", E);
                            return r.createElement(n, f({}, y, {
                                style: O(O({}, y.style), d),
                                className: s,
                                ref: e.nodeRef
                            }), h)
                        }))
                    }
                }]) && h(t.prototype, n), o && h(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), a
            }(r.Component);
            S.propTypes = x, S.defaultProps = P;
            const k = S
        }
    }
]);
//# sourceMappingURL=990b46919a74dee1037ebf7ff7ac67afd4a9d1d334f7e9490cbf4d422f446ceb.js.map