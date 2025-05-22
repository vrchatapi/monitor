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
                a = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, o, a]
            }, t.faCircleMinus = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = o, t.svgPathData = a, t.aliases = r
        },
        213: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "circle-plus",
                r = ["plus-circle"],
                o = "f055",
                a = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, o, a]
            }, t.faCirclePlus = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = o, t.svgPathData = a, t.aliases = r
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
                a = n(27003),
                i = n(67294),
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
                    E = i.useState(t || !1),
                    g = (0, r.Z)(E, 2),
                    v = g[0],
                    y = g[1];
                i.useEffect((function() {
                    y(t)
                }), [t]);
                return i.createElement("div", null, i.createElement("h3", null, i.createElement(l.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        n ? n() : (h(!v), y(!v))
                    },
                    color: v ? "primary" : "secondary"
                }, v && i.createElement(c.Z, {
                    icon: a.uM
                }), !v && i.createElement(c.Z, {
                    icon: o.Kt
                })), " ", u), i.createElement(s.Z, {
                    isOpen: v
                }, f), "sm" !== d && i.createElement("br", null))
            }
        },
        81362: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(67294),
                o = n(53637),
                a = n(95305);
            const i = function(e) {
                var t = e.error,
                    n = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var i = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return r.createElement(o.Z, null, r.createElement(a.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, r.createElement("h2", null, "VRChat"), r.createElement("p", null, "An error has occurred. To continue: "), r.createElement("p", null, "Press the F5 to refresh the website, or "), r.createElement("p", null, "Press the back button to leave the website, or "), r.createElement("p", null, "Check our ", r.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), r.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * i.length)], "! ", i[Math.floor(Math.random() * i.length)], ")"), r.createElement("code", null, n, " ", t)))
            }
        },
        98185: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(67294),
                o = n(81362),
                a = n(43862);
            const i = function(e) {
                var t = e.reducer,
                    n = e.loading,
                    i = e.loadingList,
                    l = e.error,
                    s = e.statusCode,
                    c = e.children,
                    u = e.className,
                    p = !1;
                return i && i.forEach((function(e) {
                    e && (p = !0)
                })), null != s && 200 !== s && "200" !== s ? r.createElement(o.Z, {
                    error: l,
                    statusCode: s
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? r.createElement(o.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : l ? r.createElement(o.Z, {
                    error: l
                }) : null != t && t.error ? r.createElement(o.Z, {
                    error: t.error
                }) : n || p || null != t && t.fetching || null != t && t.loading ? r.createElement(a.Z, {
                    className: "tw-mx-auto"
                }) : r.createElement("div", {
                    className: u
                }, c)
            }
        },
        44907: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => w
            });
            var r = n(54546),
                o = n(4965),
                a = n(40098),
                i = n(67294),
                l = n(89250),
                s = n(79655),
                c = n(37463),
                u = n(73670),
                p = n(35773),
                d = n(95305),
                f = n(22202),
                m = n(37599),
                h = n(83505),
                E = n(93261),
                g = n(98185),
                v = n(78666);
            const y = function(e) {
                    var t = e.userId,
                        n = e.owned,
                        o = void 0 !== n && n,
                        a = e.invited,
                        l = void 0 !== a && a,
                        s = e.groupResults,
                        c = e.isBlocked,
                        u = void 0 !== c && c,
                        p = (0, i.useState)([]),
                        d = (0, r.Z)(p, 2),
                        f = d[0],
                        m = d[1],
                        y = (0, E.dj)({
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
                        Z = (0, E.G_)({
                            userId: t,
                            membershipStatus: "userblocked"
                        }, {
                            skip: !u
                        }),
                        S = Z.data,
                        k = Z.isError,
                        N = Z.error,
                        C = Z.isSuccess,
                        R = (0, E.G_)({
                            userId: t,
                            membershipStatus: "invited"
                        }, {
                            skip: !l
                        }),
                        D = R.data,
                        _ = R.isError,
                        I = R.error,
                        M = R.isSuccess;
                    i.useEffect((function() {
                        !s && x && m(o ? O.filter((function(e) {
                            return e.ownerId === t
                        })) : O.filter((function(e) {
                            return e.ownerId !== t
                        }))), u && C && m(S), l && M && m(D)
                    }), [O, S, D]);
                    var z, G = (null != s ? s : f).map((function(e) {
                            var n, r, o;
                            return i.createElement(v.Z, {
                                key: null !== (n = null == e || null === (r = e.group) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : e.id,
                                group: null !== (o = null == e ? void 0 : e.group) && void 0 !== o ? o : e,
                                isBlocked: u,
                                userId: t
                            })
                        })),
                        X = (0, h.iv)({
                            name: "7h3c47",
                            styles: "display:grid;grid-template-columns:repeat(3, 1fr);gap:10px"
                        });
                    return P || k || _ ? i.createElement("div", null, i.createElement("p", null, "Oops, something went wrong. Please try again later."), i.createElement("code", null, null === (z = j || N || I) || void 0 === z || null === (z = z.data) || void 0 === z || null === (z = z.error) || void 0 === z ? void 0 : z.message)) : i.createElement(g.Z, {
                        loading: w
                    }, i.createElement("div", {
                        className: X
                    }, G))
                },
                b = function() {
                    var e = (0, f.XC)().data;
                    return i.createElement("div", null, i.createElement(p.Z, null, i.createElement(d.Z, {
                        xs: "12"
                    }, i.createElement(m.Z, {
                        title: "Owned Groups",
                        collapseOpen: !0
                    }, i.createElement(y, {
                        userId: e.id,
                        owned: !0
                    })))), i.createElement(p.Z, null, i.createElement(d.Z, {
                        xs: "12"
                    }, i.createElement(m.Z, {
                        title: "Joined Groups"
                    }, i.createElement(y, {
                        userId: e.id
                    })))), i.createElement(p.Z, null, i.createElement(d.Z, {
                        xs: "12"
                    }, i.createElement(m.Z, {
                        title: "Group Invites"
                    }, i.createElement(y, {
                        userId: e.id,
                        invited: !0
                    })))), i.createElement(p.Z, null, i.createElement(d.Z, {
                        xs: "12"
                    }, i.createElement(m.Z, {
                        title: "Blocked Groups"
                    }, i.createElement(y, {
                        userId: e.id,
                        isBlocked: !0
                    })))))
                };
            var O = n(17219);
            const w = function() {
                var e = (0, l.s0)(),
                    t = (0, l.UO)().query,
                    n = (0, f.XC)().data,
                    o = i.useState(""),
                    p = (0, r.Z)(o, 2),
                    d = p[0],
                    m = p[1],
                    h = i.useState(3),
                    g = (0, r.Z)(h, 2),
                    v = g[0],
                    w = g[1],
                    P = (0, f.XC)().data,
                    j = (void 0 === P ? {} : P).id,
                    Z = (0, E.dj)({
                        userId: j
                    }, {
                        skip: !j
                    }),
                    S = Z.data,
                    k = Z.isLoading,
                    N = Z.isSuccess,
                    C = (0, E.xS)(),
                    R = (0, r.Z)(C, 2),
                    D = R[0],
                    _ = R[1],
                    I = _.data,
                    M = (_.error, _.isLoading),
                    z = (0, O.y)(),
                    G = z.data,
                    X = z.isLoading,
                    T = 0,
                    U = 0;
                if (z.isSuccess && (T = G.constants.GROUPS.MAX_JOINED_PLUS, U = G.constants.GROUPS.MAX_OWNED), (0, i.useEffect)((function() {
                        t && D({
                            query: t
                        })
                    }), [t]), (0, i.useEffect)((function() {
                        N && w(S.filter((function(e) {
                            return e.ownerId === j
                        })).length)
                    }), [N]), M || k || X) return i.createElement(c.X2, null, i.createElement(c.JX, {
                    className: "mt-5 w-100 text-center"
                }, i.createElement(c.UU, null)));
                var A = n.tagsSet.has("system_supporter") ? "You can only have ".concat(U, " groups at a time. Please delete one of your existing groups to create a new one.") : "You must be a VRC+ supporter to create a group.";
                return i.createElement("div", null, i.createElement(c.$4, null, "Groups"), i.createElement(c.X2, null, i.createElement(c.JX, {
                    className: "w-100"
                }, i.createElement(x, null, i.createElement("h2", null, "Groups"), v < U && n.tagsSet.has("system_supporter") && S.length < T || n.tagsSet.has("admin_uncap_owned_groups") ? i.createElement(s.rU, {
                    to: "/home/groups/create"
                }, i.createElement(c.zx, null, i.createElement(c.$1, {
                    icon: a.r8
                }), " Create Group")) : i.createElement(c.zx, {
                    disabled: !0,
                    title: A
                }, i.createElement(c.$1, {
                    icon: a.r8
                }), " Create Group")), i.createElement("form", {
                    onSubmit: function(t) {
                        null == t || t.preventDefault(), "" === d ? e("/home/groups/search") : d.startsWith("https://vrc.group/") || d.startsWith("vrc.group/") ? e("/home/groups/search/".concat(d.split("/").pop())) : e("/home/groups/search/".concat(d))
                    }
                }, i.createElement(u.Z, {
                    searchString: m,
                    defaultValue: t,
                    placeholder: "Enter a group short code, name or url to join"
                })))), i.createElement("br", null), t ? (null == I ? void 0 : I.length) > 0 ? i.createElement(c.X2, null, i.createElement(c.JX, {
                    className: "w-100"
                }, i.createElement("h3", null, 'Results for "', t, '"'), i.createElement(y, {
                    groupResults: I
                }))) : i.createElement(c.X2, null, i.createElement(c.JX, {
                    className: "mt-5 w-100 text-center"
                }, i.createElement("h4", null, 'Looks like "', t, "\" didn't bring back any groups!"), i.createElement("h6", null, "Try searching again, or ", i.createElement(s.rU, {
                    to: "/home/groups"
                }, "Go Back"), "!"))) : i.createElement(b, null))
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
                Z: () => S
            });
            var r = n(67294),
                o = n(45697),
                a = n.n(o),
                i = n(94184),
                l = n.n(i),
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function E(e, t) {
                return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, E(e, t)
            }

            function g(e) {
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
                    horizontal: a().bool,
                    isOpen: a().bool,
                    children: a().oneOfType([a().arrayOf(a().node), a().node]),
                    tag: c.iC,
                    className: a().node,
                    navbar: a().bool,
                    cssModule: a().object,
                    innerRef: a().shape({
                        current: a().object
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
            var Z = function(e) {
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
                    }), t && E(e, t)
                }(i, e);
                var t, n, o, a = g(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = a.call(this, e)).state = {
                        dimension: null
                    }, t.nodeRef = e.innerRef || r.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function(e) {
                        t[e] = t[e].bind(v(t))
                    })), t
                }
                return t = i, (n = [{
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
                            a = t.isOpen,
                            i = t.className,
                            u = t.navbar,
                            p = t.cssModule,
                            h = t.children,
                            E = (t.innerRef, m(t, d)),
                            g = this.state.dimension,
                            v = (0, c.ei)(E, c.rb),
                            y = (0, c.CE)(E, c.rb);
                        return r.createElement(s.ZP, f({}, v, {
                            in: a,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), (function(t) {
                            var a = function(e) {
                                    return j[e] || "collapse"
                                }(t),
                                s = (0, c.mx)(l()(i, o && "collapse-horizontal", a, u && "navbar-collapse"), p),
                                d = null === g ? null : w({}, o ? "width" : "height", g);
                            return r.createElement(n, f({}, y, {
                                style: O(O({}, y.style), d),
                                className: s,
                                ref: e.nodeRef
                            }), h)
                        }))
                    }
                }]) && h(t.prototype, n), o && h(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(r.Component);
            Z.propTypes = x, Z.defaultProps = P;
            const S = Z
        }
    }
]);
//# sourceMappingURL=b7e2289a53da91240e395366ae0f9d76e6dca208ecf7272ea9116d3e0116b1aa.js.map