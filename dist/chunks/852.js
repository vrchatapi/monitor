"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [852], {
        90524: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "circle-minus",
                n = ["minus-circle"],
                a = "f056",
                o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.faCircleMinus = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n
        },
        213: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "circle-plus",
                n = ["plus-circle"],
                a = "f055",
                o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.faCirclePlus = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n
        },
        27003: (e, t, r) => {
            var n = r(90524);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.uM = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        45573: (e, t, r) => {
            var n = r(213);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.Kt = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        45528: (e, t) => {
            var r = "user-clock",
                n = [],
                a = "f4fd",
                o = "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304c0-8.8-7.2-16-16-16z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, n, a, o]
            }, t.hn = t.DF
        },
        411: (e, t, r) => {
            r.d(t, {
                U$: () => s,
                Vj: () => i,
                dt: () => o,
                rS: () => u
            });
            var n = r(9669),
                a = r.n(n),
                o = function(e) {
                    var t = e.type;
                    return {
                        type: "LOAD_FAVORITE_GROUP_TYPE",
                        payload: a().get(window.apiUrl("/api/1/favorite/groups?n=50&type=".concat(t)), {}),
                        meta: {
                            type: t
                        }
                    }
                },
                i = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_AVATARS",
                        payload: a().get(window.apiUrl("/api/1/avatars/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                s = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_WORLDS",
                        payload: a().get(window.apiUrl("/api/1/worlds/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                u = function(e) {
                    var t = e.favoriteId,
                        r = e.type,
                        n = e.group;
                    return {
                        type: "REMOVE_FAVORITE",
                        payload: a().delete(window.apiUrl("/api/1/favorites/".concat(t)), {}),
                        meta: {
                            favoriteId: t,
                            type: r,
                            group: n
                        }
                    }
                }
        },
        66770: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(87462),
                a = r(67294),
                o = r(45697),
                i = r.n(o),
                s = r(34226),
                u = function(e) {
                    var t;
                    return a.createElement(s.uW, (0, n.Z)({
                        fieldsList: ["updated_at"],
                        contentType: "avatar",
                        showAuthor: !0,
                        data: null !== (t = e.avatar) && void 0 !== t ? t : e.data
                    }, e))
                };
            u.propTypes = {
                data: i().shape({
                    id: i().string,
                    authorName: i().string,
                    authorId: i().string,
                    name: i().string,
                    releaseStatus: i().oneOf(["public", "private"]),
                    updated_at: i().string,
                    tags: i().arrayOf(i().string),
                    unityPackages: i().arrayOf(i().shape({
                        platform: i().string
                    }))
                }).isRequired,
                fieldsList: i().arrayOf(i().string)
            };
            const c = u
        },
        36418: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => R
            });
            var n = r(15861),
                a = r(15671),
                o = r(43144),
                i = r(60136),
                s = r(82963),
                u = r(61120),
                c = r(64687),
                l = r.n(c),
                f = r(67294),
                d = r(32981),
                p = r(79655),
                v = r(35773),
                y = r(95305),
                h = r(9669),
                m = r.n(h),
                g = r(85533),
                b = r(34226),
                E = r(7826),
                O = r(54546),
                x = r(45528),
                A = r(66770),
                w = r(64258),
                j = r(62437),
                P = r(21538),
                T = r(17219),
                I = r(22202);
            const Z = function() {
                var e, t, r = (0, d.I0)(),
                    n = (0, I.XC)().data,
                    a = (0, j.DD)(null == n ? void 0 : n.id, {
                        skip: !(null != n && n.id)
                    }),
                    o = a.data,
                    i = a.isFetching,
                    s = a.error,
                    u = a.isError,
                    c = (0, T.y)().data,
                    l = (void 0 === c ? {} : c).defaultAvatar,
                    p = (0, P.x8)(),
                    h = (0, O.Z)(p, 2),
                    m = h[0],
                    g = h[1],
                    E = g.isLoading,
                    Z = g.isError,
                    k = g.error;
                return f.createElement("div", null, f.createElement(v.Z, null, f.createElement(y.Z, {
                    xs: "12"
                }, f.createElement("h2", null, "Current Avatar"))), f.createElement(v.Z, null, f.createElement(y.Z, {
                    xs: "4",
                    xl: "3"
                }, i ? f.createElement(b.UU, {
                    width: "100%",
                    height: "160px",
                    className: "my-2"
                }) : !u && o && f.createElement(A.Z, {
                    data: o
                }), u && f.createElement(b.qX, {
                    type: "error",
                    title: "Failed to load avatar",
                    message: null === (e = s.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                })), f.createElement(y.Z, {
                    xs: "8",
                    xl: "9"
                }, f.createElement(b.zx, {
                    onClick: function() {
                        n && l && (m({
                            avatarId: l
                        }), r((0, w.d)({
                            title: "Avatar reset",
                            icon: x.hn,
                            message: "You've reset your avatar to default! You'll see this change next time you load into a world.",
                            color: "success"
                        })))
                    },
                    loading: i || E,
                    neutral: !0
                }, f.createElement(b.$1, {
                    icon: x.hn
                }), " Reset to Default Avatar"), Z && f.createElement(b.qX, {
                    type: "error",
                    title: "Failed to reset avatar",
                    message: null === (t = k.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message
                }))))
            };

            function k(e) {
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
                    var r, n = (0, u.Z)(e);
                    if (t) {
                        var a = (0, u.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return (0, s.Z)(this, r)
                }
            }
            var S = function(e) {
                (0, i.Z)(s, e);
                var t, r = k(s);

                function s(e) {
                    var t;
                    return (0, a.Z)(this, s), (t = r.call(this, e)).state = {
                        licences: []
                    }, t
                }
                return (0, o.Z)(s, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getLicences()
                    }
                }, {
                    key: "getLicences",
                    value: (t = (0, n.Z)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
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
                        return f.createElement(v.Z, null, f.createElement(y.Z, {
                            xs: "12"
                        }, f.createElement(g.Z, null, "Avatars"), f.createElement(Z, null), f.createElement(b.qX, {
                            type: "success",
                            title: "Favorite Avatars have moved!",
                            className: "my-4",
                            hideIcon: !0
                        }, "They now have a new and improved home ", f.createElement(p.rU, {
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
                }]), s
            }(f.Component);
            const R = (0, d.$j)((function(e) {
                return {}
            }))(S)
        },
        11e3: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(67294),
                a = r(39886),
                o = r(56599),
                i = r(54610),
                s = r(34698),
                u = r(89421);
            const c = function(e) {
                var t = e.confirmLink,
                    r = e.cancelLink,
                    c = e.prompt,
                    l = function(e) {
                        return r(e)
                    };
                return n.createElement(a.Z, {
                    outline: !0
                }, n.createElement(o.Z, {
                    tag: "h4"
                }, "Confirm", n.createElement(u.Z, {
                    onClick: l
                })), n.createElement(i.Z, null, n.createElement("p", null, c), n.createElement(s.Z, {
                    onClick: function(e) {
                        return t(e)
                    },
                    color: "primary"
                }, " Ok"), " ", n.createElement(s.Z, {
                    onClick: l,
                    color: "secondary"
                }, " Cancel")))
            }
        },
        12611: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(92332),
                a = r(67294),
                o = r(34698),
                i = r(86646);
            const s = function(e) {
                var t = e.loading,
                    r = e.className,
                    s = e.onClick,
                    u = e.color,
                    c = e.children,
                    l = e.hidden,
                    f = e.disabled;
                return a.createElement(o.Z, {
                    className: r,
                    onClick: s,
                    color: u,
                    hidden: l,
                    disabled: f
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, c), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(i.Z, {
                    icon: n.LM,
                    spin: !0
                })))
            }
        },
        55694: (e, t, r) => {
            r.d(t, {
                Z: () => m
            });
            var n = r(15671),
                a = r(43144),
                o = r(97326),
                i = r(60136),
                s = r(82963),
                u = r(61120),
                c = r(42619),
                l = r(67294),
                f = r(32981),
                d = r(34698),
                p = r(34226),
                v = r(411);

            function y(e) {
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
                    var r, n = (0, u.Z)(e);
                    if (t) {
                        var a = (0, u.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return (0, s.Z)(this, r)
                }
            }
            var h = function(e) {
                (0, i.Z)(r, e);
                var t = y(r);

                function r(e) {
                    var a;
                    return (0, n.Z)(this, r), (a = t.call(this, e)).unFavorite = a.unFavorite.bind((0, o.Z)(a)), a
                }
                return (0, a.Z)(r, [{
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
                            r = t.thing,
                            n = t.type,
                            a = t.assets;
                        try {
                            e = a[n][r.favoriteGroup].filter((function(e) {
                                return e.id === r.id || e.favoriteId === r.favoriteId
                            })).length > 0
                        } catch (t) {
                            console.error(t), e = !1
                        }
                        return e ? l.createElement(d.Z, {
                            color: "primary",
                            title: "Remove Favorite",
                            onClick: this.unFavorite
                        }, l.createElement(p.$1, {
                            icon: c.$
                        }), " Remove Favorite") : null
                    }
                }]), r
            }(l.Component);
            const m = (0, f.$j)((function(e) {
                return {
                    assets: e.favorites.assets
                }
            }))(h)
        },
        21538: (e, t, r) => {
            r.d(t, {
                Cm: () => g,
                EA: () => O,
                F6: () => f,
                GG: () => b,
                Gy: () => E,
                LQ: () => p,
                X8: () => x,
                ak: () => m,
                cq: () => h,
                lx: () => d,
                ve: () => v,
                x8: () => y
            });
            var n = r(42138),
                a = r(15861),
                o = r(64687),
                i = r.n(o),
                s = r(61509);

            function u(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var l = s.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            selectAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            getAvatar: e.query({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Avatar",
                                        id: r.avatarId
                                    }]
                                }
                            }),
                            setAvatarPublic: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "public"
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            setAvatarPrivate: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "private"
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            setAvatarTags: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId,
                                        r = e.tags;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            tags: r
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            deleteAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            wearAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            enqueueImpostor: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            deleteImpostors: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            getImpostorQueueStats: e.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: e.query({
                                queryFn: (r = (0, a.Z)(i().mark((function e(t, r, a, o) {
                                    var s, u, c, l, f, d, p, v, y, h, m, g, b, E, O, x, A, w, j, P, T, I, Z, k, S, R, N;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                s = t.sort, u = void 0 === s ? "updated" : s, c = t.order, l = void 0 === c ? "descending" : c, f = t.releaseStatus, d = void 0 === f ? "all" : f, p = t.user, v = void 0 === p ? "me" : p, y = t.organization, h = void 0 === y ? "vrchat" : y, m = t.n, g = void 0 === m ? 20 : m, b = t.featured, E = t.userId, O = t.search, x = t.tag, A = t.notag, w = t.platform, j = t.maxUnityVersion, P = t.minUnityVersion, T = t.exactUnityVersion, I = t.minAssetVersion, Z = t.maxAssetVersion, k = t.exactAssetVersion, S = [], R = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: k,
                                                        exactUnityVersion: T,
                                                        featured: b,
                                                        maxAssetVersion: Z,
                                                        maxUnityVersion: j,
                                                        minAssetVersion: I,
                                                        minUnityVersion: P,
                                                        n: g,
                                                        notag: A,
                                                        offset: R,
                                                        order: l,
                                                        organization: h,
                                                        platform: w,
                                                        releaseStatus: d,
                                                        search: O,
                                                        sort: u,
                                                        tag: x,
                                                        user: v,
                                                        userId: E
                                                    }
                                                });
                                            case 6:
                                                if (!(N = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: N.error
                                                });
                                            case 9:
                                                if (!(N.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return S.push.apply(S, (0, n.Z)(N.data)), R += g, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: S
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                })
                            }),
                            getFavoriteAvatars: e.query({
                                query: function(e) {
                                    return {
                                        url: "avatars/favorites",
                                        params: {
                                            userId: e.userId,
                                            n: e.n,
                                            offset: e.offset,
                                            tag: e.tag,
                                            tags: e.tags
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: r.tag
                                    }]
                                }
                            }),
                            getAllFavoriteAvatars: e.query({
                                queryFn: (t = (0, a.Z)(i().mark((function e() {
                                    var t, r, a, o, s, c, l, f, d, p, v, y, h, m = arguments;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = m.length > 0 && void 0 !== m[0] ? m[0] : {}).tag, a = t.tags, o = t.userId, s = t.groups, c = void 0 === s ? [] : s, l = m.length > 3 ? m[3] : void 0, f = [], d = u(r ? [r] : c), e.prev = 7, d.s();
                                            case 9:
                                                if ((p = d.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                v = p.value, y = 0;
                                            case 12:
                                                return e.next = 15, l({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: y,
                                                        tag: null != r ? r : v,
                                                        tags: a,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(h = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: h.error
                                                });
                                            case 18:
                                                if (!(h.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return f.push.apply(f, (0, n.Z)(h.data)), y += 50, e.abrupt("continue", 12);
                                            case 22:
                                                return e.abrupt("break", 25);
                                            case 25:
                                                e.next = 9;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(7), d.e(e.t0);
                                            case 32:
                                                return e.prev = 32, d.f(), e.finish(32);
                                            case 35:
                                                return e.abrupt("return", {
                                                    data: f
                                                });
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [7, 29, 32, 35]
                                    ])
                                }))), function() {
                                    return t.apply(this, arguments)
                                }),
                                providesTags: function(e, t) {
                                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).tag;
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: null != r ? r : "all"
                                    }]
                                }
                            })
                        };
                        var t, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["FavoriteAvatars"]
                }),
                f = l.useGetAllAvatarsQuery,
                d = l.useGetAllFavoriteAvatarsQuery,
                p = l.useGetAvatarQuery,
                v = (l.useGetFavoriteAvatarsQuery, l.useGetImpostorQueueStatsQuery),
                y = l.useSelectAvatarMutation,
                h = l.useSetAvatarPrivateMutation,
                m = l.useSetAvatarPublicMutation,
                g = l.useSetAvatarTagsMutation,
                b = l.useDeleteAvatarMutation,
                E = l.useWearAvatarMutation,
                O = l.useEnqueueImpostorMutation,
                x = l.useDeleteImpostorsMutation
        },
        54610: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(67294),
                a = r(45697),
                o = r.n(a),
                i = r(94184),
                s = r.n(i),
                u = r(22040),
                c = ["className", "cssModule", "innerRef", "tag"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var d = {
                className: o().string,
                cssModule: o().object,
                innerRef: o().oneOfType([o().object, o().string, o().func]),
                tag: u.iC
            };

            function p(e) {
                var t = e.className,
                    r = e.cssModule,
                    a = e.innerRef,
                    o = e.tag,
                    i = void 0 === o ? "div" : o,
                    d = f(e, c),
                    p = (0, u.mx)(s()(t, "card-body"), r);
                return n.createElement(i, l({}, d, {
                    className: p,
                    ref: a
                }))
            }
            p.propTypes = d;
            const v = p
        },
        56599: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(67294),
                a = r(45697),
                o = r.n(a),
                i = r(94184),
                s = r.n(i),
                u = r(22040),
                c = ["className", "cssModule", "tag"];

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var d = {
                className: o().string,
                cssModule: o().object,
                tag: u.iC
            };

            function p(e) {
                var t = e.className,
                    r = e.cssModule,
                    a = e.tag,
                    o = void 0 === a ? "div" : a,
                    i = f(e, c),
                    d = (0, u.mx)(s()(t, "card-header"), r);
                return n.createElement(o, l({}, i, {
                    className: d
                }))
            }
            p.propTypes = d;
            const v = p
        },
        65706: (e, t, r) => {
            r.d(t, {
                Z: () => T
            });
            var n = r(67294),
                a = r(45697),
                o = r.n(a),
                i = r(94184),
                s = r.n(i),
                u = r(8246),
                c = r(22040);

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            var f, d = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, p.apply(this, arguments)
            }

            function v(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }

            function y(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function h(e, t) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
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
                    var r, n = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === l(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return g(e)
                    }(this, r)
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
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach((function(t) {
                        x(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function x(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var A = O(O({}, u.ZP.propTypes), {}, {
                    horizontal: o().bool,
                    isOpen: o().bool,
                    children: o().oneOfType([o().arrayOf(o().node), o().node]),
                    tag: c.iC,
                    className: o().node,
                    navbar: o().bool,
                    cssModule: o().object,
                    innerRef: o().shape({
                        current: o().object
                    })
                }),
                w = O(O({}, u.ZP.defaultProps), {}, {
                    horizontal: !1,
                    isOpen: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    tag: "div",
                    timeout: c.wF.Collapse
                }),
                j = (x(f = {}, c.E5.ENTERING, "collapsing"), x(f, c.E5.ENTERED, "collapse show"), x(f, c.E5.EXITING, "collapsing"), x(f, c.E5.EXITED, "collapse"), f);
            var P = function(e) {
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
                    }), t && h(e, t)
                }(i, e);
                var t, r, a, o = m(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = o.call(this, e)).state = {
                        dimension: null
                    }, t.nodeRef = e.innerRef || n.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function(e) {
                        t[e] = t[e].bind(g(t))
                    })), t
                }
                return t = i, (r = [{
                    key: "onEntering",
                    value: function(e, t) {
                        var r = this.getNode();
                        this.setState({
                            dimension: this.getDimension(r)
                        }), this.props.onEntering(r, t)
                    }
                }, {
                    key: "onEntered",
                    value: function(e, t) {
                        var r = this.getNode();
                        this.setState({
                            dimension: null
                        }), this.props.onEntered(r, t)
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
                            r = t.tag,
                            a = t.horizontal,
                            o = t.isOpen,
                            i = t.className,
                            l = t.navbar,
                            f = t.cssModule,
                            y = t.children,
                            h = (t.innerRef, v(t, d)),
                            m = this.state.dimension,
                            g = (0, c.ei)(h, c.rb),
                            b = (0, c.CE)(h, c.rb);
                        return n.createElement(u.ZP, p({}, g, {
                            in: o,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), (function(t) {
                            var o = function(e) {
                                    return j[e] || "collapse"
                                }(t),
                                u = (0, c.mx)(s()(i, a && "collapse-horizontal", o, l && "navbar-collapse"), f),
                                d = null === m ? null : x({}, a ? "width" : "height", m);
                            return n.createElement(r, p({}, b, {
                                style: O(O({}, b.style), d),
                                className: u,
                                ref: e.nodeRef
                            }), y)
                        }))
                    }
                }]) && y(t.prototype, r), a && y(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(n.Component);
            P.propTypes = A, P.defaultProps = w;
            const T = P
        }
    }
]);
//# sourceMappingURL=16ff709d3b2b1f0101e6d5d7bc90f8b91e3bbf154ecde13968ed5b4fdca45fe8.js.map