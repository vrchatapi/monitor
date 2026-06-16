"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7288], {
        86637(e, t) {
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
        62613(e, t) {
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
        6077(e, t, n) {
            var r = n(86637);
            t.mw = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.Ip = t.mw, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        59221(e, t, n) {
            var r = n(62613);
            t.mw = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.OQ = t.mw, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        7563(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(82544),
                o = n(59221),
                i = n(6077),
                a = n(96540),
                l = n(30104),
                s = n(21247),
                c = n(6324);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    p = e.size,
                    f = void 0 === p ? "md" : p,
                    d = e.children,
                    m = e.onToggleCallback,
                    h = void 0 === m ? function() {} : m,
                    g = a.useState(t || !1),
                    E = (0, r.A)(g, 2),
                    v = E[0],
                    y = E[1];
                a.useEffect(function() {
                    y(t)
                }, [t]);
                return a.createElement("div", null, a.createElement("h3", null, a.createElement(l.A, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: f,
                    onClick: function() {
                        n ? n() : (h(!v), y(!v))
                    },
                    color: v ? "primary" : "secondary"
                }, v && a.createElement(c.A, {
                    icon: i.Ip
                }), !v && a.createElement(c.A, {
                    icon: o.OQ
                })), " ", u), a.createElement(s.A, {
                    isOpen: v
                }, d), "sm" !== f && a.createElement("br", null))
            }
        },
        57288(e, t, n) {
            n.r(t), n.d(t, {
                default: () => O
            });
            var r = n(82544),
                o = n(70129),
                i = n(28045),
                a = n(96540),
                l = n(47767),
                s = n(84976),
                c = n(15033),
                u = n(15002),
                p = n(5826),
                f = n(39704),
                d = n(13951),
                m = n(7563),
                h = n(56822),
                g = n(40085),
                E = n(71853),
                v = n(54734);
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
                        f = (0, r.A)(p, 2),
                        d = f[0],
                        m = f[1],
                        y = (0, g.Yj)({
                            userId: t
                        }, {
                            skip: !!s,
                            refetchOnMountOrArgChange: !0
                        }),
                        b = y.data,
                        w = void 0 === b ? [] : b,
                        O = y.isLoading,
                        x = y.isSuccess,
                        P = y.isError,
                        j = y.error,
                        N = (0, g.wp)({
                            userId: t,
                            membershipStatus: "userblocked"
                        }, {
                            skip: !u
                        }),
                        A = N.data,
                        S = N.isError,
                        k = N.error,
                        I = N.isSuccess,
                        R = (0, g.wp)({
                            userId: t,
                            membershipStatus: "invited"
                        }, {
                            skip: !l
                        }),
                        _ = R.data,
                        D = R.isError,
                        M = R.error,
                        G = R.isSuccess;
                    a.useEffect(function() {
                        !s && x && m(o ? w.filter(function(e) {
                            return e.ownerId === t
                        }) : w.filter(function(e) {
                            return e.ownerId !== t
                        })), u && I && m(A), l && G && m(_)
                    }, [w, A, _]);
                    var C, T = (null != s ? s : d).map(function(e) {
                            var n, r, o;
                            return a.createElement(v.A, {
                                key: null !== (n = null == e || null === (r = e.group) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : e.id,
                                group: null !== (o = null == e ? void 0 : e.group) && void 0 !== o ? o : e,
                                isBlocked: u,
                                userId: t
                            })
                        }),
                        z = (0, h.AH)({
                            name: "1l03awk",
                            styles: "display:grid;gap:10px;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                        });
                    return P || S || D ? a.createElement("div", null, a.createElement("p", null, "Oops, something went wrong. Please try again later."), a.createElement("code", null, null === (C = j || k || M) || void 0 === C || null === (C = C.data) || void 0 === C || null === (C = C.error) || void 0 === C ? void 0 : C.message)) : a.createElement(E.A, {
                        loading: O
                    }, a.createElement("div", {
                        className: z
                    }, T))
                },
                b = function() {
                    var e = (0, d.P2)().data;
                    return a.createElement("div", null, a.createElement(p.A, null, a.createElement(f.A, {
                        xs: "12"
                    }, a.createElement(m.A, {
                        title: "Owned Groups",
                        collapseOpen: !0
                    }, a.createElement(y, {
                        userId: e.id,
                        owned: !0
                    })))), a.createElement(p.A, null, a.createElement(f.A, {
                        xs: "12"
                    }, a.createElement(m.A, {
                        title: "Joined Groups"
                    }, a.createElement(y, {
                        userId: e.id
                    })))), a.createElement(p.A, null, a.createElement(f.A, {
                        xs: "12"
                    }, a.createElement(m.A, {
                        title: "Group Invites"
                    }, a.createElement(y, {
                        userId: e.id,
                        invited: !0
                    })))), a.createElement(p.A, null, a.createElement(f.A, {
                        xs: "12"
                    }, a.createElement(m.A, {
                        title: "Blocked Groups"
                    }, a.createElement(y, {
                        userId: e.id,
                        isBlocked: !0
                    })))))
                };
            n.dn(b);
            var w = n(50779);
            const O = function() {
                var e = (0, l.Zp)(),
                    t = (0, l.g)().query,
                    n = (0, d.P2)().data,
                    o = a.useState(""),
                    p = (0, r.A)(o, 2),
                    f = p[0],
                    m = p[1],
                    h = a.useState(3),
                    E = (0, r.A)(h, 2),
                    v = E[0],
                    O = E[1],
                    P = (0, d.P2)().data,
                    j = (void 0 === P ? {} : P).id,
                    N = (0, g.Yj)({
                        userId: j
                    }, {
                        skip: !j
                    }),
                    A = N.data,
                    S = void 0 === A ? [] : A,
                    k = N.isLoading,
                    I = N.isSuccess,
                    R = (0, g.we)(),
                    _ = (0, r.A)(R, 2),
                    D = _[0],
                    M = _[1],
                    G = M.data,
                    C = (M.error, M.isLoading),
                    T = (0, w.G)(),
                    z = T.data,
                    L = T.isLoading,
                    B = 0,
                    J = 0;
                if (T.isSuccess && (B = z.constants.GROUPS.MAX_JOINED_PLUS, J = z.constants.GROUPS.MAX_OWNED), (0, a.useEffect)(function() {
                        t && D({
                            query: t
                        })
                    }, [t]), (0, a.useEffect)(function() {
                        I && O(S.filter(function(e) {
                            return e.ownerId === j
                        }).length)
                    }, [I]), C || k || L) return a.createElement(c.fI, null, a.createElement(c.fv, {
                    className: "mt-5 w-100 text-center"
                }, a.createElement(c.fy, null)));
                var Q = n.tagsSet.has("system_supporter") ? "You can only have ".concat(J, " groups at a time. Please delete one of your existing groups to create a new one.") : "You must be a VRC+ supporter to create a group.";
                return a.createElement("div", null, a.createElement(c.Qc, null, "Groups"), a.createElement(c.fI, null, a.createElement(c.fv, {
                    className: "w-100"
                }, a.createElement(x, null, a.createElement("h2", null, "Groups")), a.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3"
                }, v < J && n.tagsSet.has("system_supporter") && S.length < B || n.tagsSet.has("admin_uncap_owned_groups") ? a.createElement(s.N_, {
                    to: "/home/groups/create",
                    className: "tw-w-fit"
                }, a.createElement(c.$n, null, a.createElement(c.M2, {
                    icon: i.QL
                }), " Create Group")) : a.createElement(c.$n, {
                    disabled: !0,
                    title: Q,
                    className: "tw-w-fit"
                }, a.createElement(c.M2, {
                    icon: i.QL
                }), " Create Group"), a.createElement("form", {
                    onSubmit: function(t) {
                        null == t || t.preventDefault(), "" === f ? e("/home/groups/search") : f.startsWith("https://vrc.group/") || f.startsWith("vrc.group/") ? e("/home/groups/search/".concat(f.split("/").pop())) : e("/home/groups/search/".concat(f))
                    },
                    className: "tw-flex-1"
                }, a.createElement(u.A, {
                    searchString: m,
                    defaultValue: t,
                    placeholder: "Enter a group short code, name or url to join"
                }))))), a.createElement("br", null), t ? (null == G ? void 0 : G.length) > 0 ? a.createElement(c.fI, null, a.createElement(c.fv, {
                    className: "w-100"
                }, a.createElement("h3", null, 'Results for "', t, '"'), a.createElement(y, {
                    groupResults: G
                }))) : a.createElement(c.fI, null, a.createElement(c.fv, {
                    className: "mt-5 w-100 text-center"
                }, a.createElement("h4", null, 'Looks like "', t, "\" didn't bring back any groups!"), a.createElement("h6", null, "Try searching again, or ", a.createElement(s.N_, {
                    to: "/home/groups"
                }, "Go Back"), "!"))) : a.createElement(b, null))
            };
            var x = (0, o.A)("div", {
                target: "e1nppl7n0"
            })({
                name: "bffhyr",
                styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:8px"
            })
        },
        21247(e, t, n) {
            n.d(t, {
                A: () => A
            });
            var r = n(96540),
                o = n(5556),
                i = n.n(o),
                a = n(32485),
                l = n.n(a),
                s = n(91249),
                c = n(56331);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }
            var p, f = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, d.apply(this, arguments)
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
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
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
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach(function(t) {
                        O(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = w(w({}, s.Ay.propTypes), {}, {
                    horizontal: i().bool,
                    isOpen: i().bool,
                    children: i().oneOfType([i().arrayOf(i().node), i().node]),
                    tag: c.Wx,
                    className: i().node,
                    navbar: i().bool,
                    cssModule: i().object,
                    innerRef: i().shape({
                        current: i().object
                    })
                }),
                P = w(w({}, s.Ay.defaultProps), {}, {
                    horizontal: !1,
                    isOpen: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    tag: "div",
                    timeout: c.Q6.Collapse
                }),
                j = (O(p = {}, c.MJ.ENTERING, "collapsing"), O(p, c.MJ.ENTERED, "collapse show"), O(p, c.MJ.EXITING, "collapsing"), O(p, c.MJ.EXITED, "collapse"), p);
            var N = function(e) {
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
                    }, t.nodeRef = e.innerRef || r.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach(function(e) {
                        t[e] = t[e].bind(v(t))
                    }), t
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
                            g = (t.innerRef, m(t, f)),
                            E = this.state.dimension,
                            v = (0, c.Up)(g, c.PS),
                            y = (0, c.cJ)(g, c.PS);
                        return r.createElement(s.Ay, d({}, v, {
                            in: i,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), function(t) {
                            var i = function(e) {
                                    return j[e] || "collapse"
                                }(t),
                                s = (0, c.qO)(l()(a, o && "collapse-horizontal", i, u && "navbar-collapse"), p),
                                f = null === E ? null : O({}, o ? "width" : "height", E);
                            return r.createElement(n, d({}, y, {
                                style: w(w({}, y.style), f),
                                className: s,
                                ref: e.nodeRef
                            }), h)
                        })
                    }
                }]) && h(t.prototype, n), o && h(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), a
            }(r.Component);
            N.propTypes = x, N.defaultProps = P;
            const A = N
        }
    }
]);
//# sourceMappingURL=eeeaeb788c3d972024ac73fa1bb530f519304058e97238a9793b4a8e1c5203bd.js.map