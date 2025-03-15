"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [852], {
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
        45528: (e, t) => {
            var n = "user-clock",
                r = [],
                o = "f4fd",
                i = "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, r, o, i]
            }, t.hn = t.DF
        },
        411: (e, t, n) => {
            n.d(t, {
                U$: () => c,
                Vj: () => a,
                dt: () => i,
                rS: () => s
            });
            var r = n(9669),
                o = n.n(r),
                i = function(e) {
                    var t = e.type;
                    return {
                        type: "LOAD_FAVORITE_GROUP_TYPE",
                        payload: o().get(window.apiUrl("/api/1/favorite/groups?n=50&type=".concat(t)), {}),
                        meta: {
                            type: t
                        }
                    }
                },
                a = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_AVATARS",
                        payload: o().get(window.apiUrl("/api/1/avatars/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                c = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_WORLDS",
                        payload: o().get(window.apiUrl("/api/1/worlds/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                s = function(e) {
                    var t = e.favoriteId,
                        n = e.type,
                        r = e.group;
                    return {
                        type: "REMOVE_FAVORITE",
                        payload: o().delete(window.apiUrl("/api/1/favorites/".concat(t)), {}),
                        meta: {
                            favoriteId: t,
                            type: n,
                            group: r
                        }
                    }
                }
        },
        36418: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => S
            });
            var r = n(15861),
                o = n(15671),
                i = n(43144),
                a = n(60136),
                c = n(82963),
                s = n(61120),
                l = n(64687),
                u = n.n(l),
                f = n(67294),
                p = n(32981),
                d = n(79655),
                v = n(35773),
                h = n(95305),
                y = n(9669),
                m = n.n(y),
                g = n(85533),
                b = n(14411),
                E = n(7826),
                O = n(54546),
                w = n(45528),
                j = n(66770),
                x = n(64258),
                P = n(62437),
                Z = n(21538),
                R = n(17219),
                N = n(22202);
            const k = function() {
                var e, t, n = (0, p.I0)(),
                    r = (0, N.XC)().data,
                    o = (0, P.DD)(null == r ? void 0 : r.id, {
                        skip: !(null != r && r.id)
                    }),
                    i = o.data,
                    a = o.isFetching,
                    c = o.error,
                    s = o.isError,
                    l = (0, R.y)().data,
                    u = (void 0 === l ? {} : l).defaultAvatar,
                    d = (0, Z.x8)(),
                    y = (0, O.Z)(d, 2),
                    m = y[0],
                    g = y[1],
                    E = g.isLoading,
                    k = g.isError,
                    D = g.error;
                return f.createElement("div", null, f.createElement(v.Z, null, f.createElement(h.Z, {
                    xs: "12"
                }, f.createElement("h2", null, "Current Avatar"))), f.createElement(v.Z, null, f.createElement(h.Z, {
                    xs: "4",
                    xl: "3"
                }, a ? f.createElement(b.UU, {
                    width: "100%",
                    height: "160px",
                    className: "my-2"
                }) : !s && i && f.createElement(j.Z, {
                    data: i
                }), s && f.createElement(b.qX, {
                    type: "error",
                    title: "Failed to load avatar",
                    message: null === (e = c.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                })), f.createElement(h.Z, {
                    xs: "8",
                    xl: "9"
                }, f.createElement(b.zx, {
                    onClick: function() {
                        r && u && (m({
                            avatarId: u
                        }), n((0, x.d)({
                            title: "Avatar reset",
                            icon: w.hn,
                            message: "You've reset your avatar to default! You'll see this change next time you load into a world.",
                            color: "success"
                        })))
                    },
                    loading: a || E,
                    neutral: !0
                }, f.createElement(b.$1, {
                    icon: w.hn
                }), " Reset to Default Avatar"), k && f.createElement(b.qX, {
                    type: "error",
                    title: "Failed to reset avatar",
                    message: null === (t = D.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message
                }))))
            };

            function D(e) {
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
                    var n, r = (0, s.Z)(e);
                    if (t) {
                        var o = (0, s.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var C = function(e) {
                (0, a.Z)(c, e);
                var t, n = D(c);

                function c(e) {
                    var t;
                    return (0, o.Z)(this, c), (t = n.call(this, e)).state = {
                        licences: []
                    }, t
                }
                return (0, i.Z)(c, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getLicences()
                    }
                }, {
                    key: "getLicences",
                    value: (t = (0, r.Z)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, m().get(window.apiUrl("/api/1/licenses?licenseHolder=me"));
                                case 2:
                                    200 !== (t = e.sent).status ? console.error("Failed to get licenses for user!") : this.setState({
                                        licences: t.data
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return f.createElement(v.Z, null, f.createElement(h.Z, {
                            xs: "12"
                        }, f.createElement(g.Z, null, "Avatars"), f.createElement(k, null), f.createElement(b.qX, {
                            type: "success",
                            title: "Favorite Avatars have moved!",
                            className: "my-4",
                            hideIcon: !0
                        }, "They now have a new and improved home ", f.createElement(d.rU, {
                            to: "/home/favorites/avatar"
                        }, "here")), f.createElement(E.Z, {
                            title: "My Avatars",
                            releaseStatus: "all",
                            user: "me",
                            sort: "updated",
                            order: "descending",
                            hideAuthor: !0
                        }), this.state.licences.length > 0 && f.createElement(E.Z, {
                            title: "Granted Avatars",
                            releaseStatus: "all",
                            sort: "updated",
                            order: "descending",
                            user: "me",
                            licenses: this.state.licences,
                            hideAuthor: !0
                        }), f.createElement(E.Z, {
                            title: "Featured Avatars",
                            releaseStatus: "public",
                            featured: "true",
                            sort: "updated",
                            order: "descending"
                        })))
                    }
                }]), c
            }(f.Component);
            const S = (0, p.$j)((function(e) {
                return {}
            }))(C)
        },
        11e3: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(67294),
                o = n(39886),
                i = n(56599),
                a = n(54610),
                c = n(34698),
                s = n(89421);
            const l = function(e) {
                var t = e.confirmLink,
                    n = e.cancelLink,
                    l = e.prompt,
                    u = function(e) {
                        return n(e)
                    };
                return r.createElement(o.Z, {
                    outline: !0
                }, r.createElement(i.Z, {
                    tag: "h4"
                }, "Confirm", r.createElement(s.Z, {
                    onClick: u
                })), r.createElement(a.Z, null, r.createElement("p", null, l), r.createElement(c.Z, {
                    onClick: function(e) {
                        return t(e)
                    },
                    color: "primary"
                }, " Ok"), " ", r.createElement(c.Z, {
                    onClick: u,
                    color: "secondary"
                }, " Cancel")))
            }
        },
        12611: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(92332),
                o = n(67294),
                i = n(34698),
                a = n(86646);
            const c = function(e) {
                var t = e.loading,
                    n = e.className,
                    c = e.onClick,
                    s = e.color,
                    l = e.children,
                    u = e.hidden,
                    f = e.disabled;
                return o.createElement(i.Z, {
                    className: n,
                    onClick: c,
                    color: s,
                    hidden: u,
                    disabled: f
                }, o.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, l), o.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, o.createElement(a.Z, {
                    icon: r.LM,
                    spin: !0
                })))
            }
        },
        55694: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(15671),
                o = n(43144),
                i = n(97326),
                a = n(60136),
                c = n(82963),
                s = n(61120),
                l = n(42619),
                u = n(67294),
                f = n(32981),
                p = n(34698),
                d = n(14411),
                v = n(411);

            function h(e) {
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
                    var n, r = (0, s.Z)(e);
                    if (t) {
                        var o = (0, s.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var y = function(e) {
                (0, a.Z)(n, e);
                var t = h(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), (o = t.call(this, e)).unFavorite = o.unFavorite.bind((0, i.Z)(o)), o
                }
                return (0, o.Z)(n, [{
                    key: "unFavorite",
                    value: function() {
                        this.props.dispatch((0, v.rS)({
                            favoriteId: this.props.thing.favoriteId,
                            type: this.props.type,
                            group: this.props.thing.favoriteGroup
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.thing,
                            r = t.type,
                            o = t.assets;
                        try {
                            e = o[r][n.favoriteGroup].filter((function(e) {
                                return e.id === n.id || e.favoriteId === n.favoriteId
                            })).length > 0
                        } catch (t) {
                            console.error(t), e = !1
                        }
                        return e ? u.createElement(p.Z, {
                            color: "primary",
                            title: "Remove Favorite",
                            onClick: this.unFavorite
                        }, u.createElement(d.$1, {
                            icon: l.$
                        }), " Remove Favorite") : null
                    }
                }]), n
            }(u.Component);
            const m = (0, f.$j)((function(e) {
                return {
                    assets: e.favorites.assets
                }
            }))(y)
        },
        54610: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(67294),
                o = n(45697),
                i = n.n(o),
                a = n(94184),
                c = n.n(a),
                s = n(22040),
                l = ["className", "cssModule", "innerRef", "tag"];

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function f(e, t) {
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
            var p = {
                className: i().string,
                cssModule: i().object,
                innerRef: i().oneOfType([i().object, i().string, i().func]),
                tag: s.iC
            };

            function d(e) {
                var t = e.className,
                    n = e.cssModule,
                    o = e.innerRef,
                    i = e.tag,
                    a = void 0 === i ? "div" : i,
                    p = f(e, l),
                    d = (0, s.mx)(c()(t, "card-body"), n);
                return r.createElement(a, u({}, p, {
                    className: d,
                    ref: o
                }))
            }
            d.propTypes = p;
            const v = d
        },
        56599: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(67294),
                o = n(45697),
                i = n.n(o),
                a = n(94184),
                c = n.n(a),
                s = n(22040),
                l = ["className", "cssModule", "tag"];

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function f(e, t) {
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
            var p = {
                className: i().string,
                cssModule: i().object,
                tag: s.iC
            };

            function d(e) {
                var t = e.className,
                    n = e.cssModule,
                    o = e.tag,
                    i = void 0 === o ? "div" : o,
                    a = f(e, l),
                    p = (0, s.mx)(c()(t, "card-header"), n);
                return r.createElement(i, u({}, a, {
                    className: p
                }))
            }
            d.propTypes = p;
            const v = d
        },
        65706: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r = n(67294),
                o = n(45697),
                i = n.n(o),
                a = n(94184),
                c = n.n(a),
                s = n(8246),
                l = n(22040);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }
            var f, p = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, d.apply(this, arguments)
            }

            function v(e, t) {
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

            function y(e, t) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function m(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === u(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return g(e)
                    }(this, n)
                }
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function E(e, t) {
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
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        w(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
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
            var j = O(O({}, s.ZP.propTypes), {}, {
                    horizontal: i().bool,
                    isOpen: i().bool,
                    children: i().oneOfType([i().arrayOf(i().node), i().node]),
                    tag: l.iC,
                    className: i().node,
                    navbar: i().bool,
                    cssModule: i().object,
                    innerRef: i().shape({
                        current: i().object
                    })
                }),
                x = O(O({}, s.ZP.defaultProps), {}, {
                    horizontal: !1,
                    isOpen: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    tag: "div",
                    timeout: l.wF.Collapse
                }),
                P = (w(f = {}, l.E5.ENTERING, "collapsing"), w(f, l.E5.ENTERED, "collapse show"), w(f, l.E5.EXITING, "collapsing"), w(f, l.E5.EXITED, "collapse"), f);
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
                    }), t && y(e, t)
                }(a, e);
                var t, n, o, i = m(a);

                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (t = i.call(this, e)).state = {
                        dimension: null
                    }, t.nodeRef = e.innerRef || r.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function(e) {
                        t[e] = t[e].bind(g(t))
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
                            f = t.cssModule,
                            h = t.children,
                            y = (t.innerRef, v(t, p)),
                            m = this.state.dimension,
                            g = (0, l.ei)(y, l.rb),
                            b = (0, l.CE)(y, l.rb);
                        return r.createElement(s.ZP, d({}, g, {
                            in: i,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), (function(t) {
                            var i = function(e) {
                                    return P[e] || "collapse"
                                }(t),
                                s = (0, l.mx)(c()(a, o && "collapse-horizontal", i, u && "navbar-collapse"), f),
                                p = null === m ? null : w({}, o ? "width" : "height", m);
                            return r.createElement(n, d({}, b, {
                                style: O(O({}, b.style), p),
                                className: s,
                                ref: e.nodeRef
                            }), h)
                        }))
                    }
                }]) && h(t.prototype, n), o && h(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), a
            }(r.Component);
            Z.propTypes = j, Z.defaultProps = x;
            const R = Z
        }
    }
]);
//# sourceMappingURL=dc22ea811e11f2489ad31637888788b0e50da376532a1be790b5336e478a54de.js.map