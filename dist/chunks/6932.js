"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6932], {
        86637(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "circle-minus",
                n = ["minus-circle"],
                a = "f056",
                o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.faCircleMinus = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n
        },
        62613(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "circle-plus",
                n = ["plus-circle"],
                a = "f055",
                o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, o]
            }, t.faCirclePlus = t.definition, t.prefix = "fas", t.iconName = r, t.width = 512, t.height = 512, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n
        },
        6077(e, t, r) {
            var n = r(86637);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.Ip = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        59221(e, t, r) {
            var n = r(62613);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.OQ = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        55690(e, t) {
            var r = "user-clock",
                n = [],
                a = "f4fd",
                o = "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, n, a, o]
            }, t.ld = t.mw
        },
        44741(e, t, r) {
            r.d(t, {
                F2: () => i,
                IO: () => u,
                Uf: () => s,
                Wm: () => o
            });
            var n = r(72505),
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
        5256(e, t, r) {
            r.d(t, {
                A: () => l
            });
            var n = r(58168),
                a = r(5556),
                o = r.n(a),
                i = r(96540),
                s = r(15033),
                u = r(95583),
                c = function(e) {
                    var t, r, a, o = !("hidden" === (null === (t = e.data) || void 0 === t ? void 0 : t.releaseStatus)),
                        c = (0, u.RR)({
                            avatarId: null === (r = e.data) || void 0 === r ? void 0 : r.id
                        }, {
                            skip: o
                        }).data;
                    return i.createElement(s.mI, (0, n.A)({}, e, {
                        fieldsList: ["updated_at"],
                        contentType: "avatar",
                        showAuthor: !0,
                        data: null !== (a = null != c ? c : e.avatar) && void 0 !== a ? a : e.data
                    }))
                };
            c.propTypes = {
                data: o().shape({
                    id: o().string,
                    authorName: o().string,
                    authorId: o().string,
                    name: o().string,
                    releaseStatus: o().oneOf(["public", "private", "hidden"]),
                    updated_at: o().string,
                    tags: o().arrayOf(o().string),
                    unityPackages: o().arrayOf(o().shape({
                        platform: o().string
                    }))
                }).isRequired,
                fieldsList: o().arrayOf(o().string)
            };
            const l = c
        },
        23793(e, t, r) {
            r.r(t), r.d(t, {
                default: () => N
            });
            var n = r(10467),
                a = r(23029),
                o = r(92901),
                i = r(85501),
                s = r(34441),
                u = r(53954),
                c = r(54756),
                l = r.n(c),
                d = r(96540),
                f = r(6376),
                p = r(72505),
                v = r.n(p),
                y = r(5826),
                g = r(39704),
                h = r(45662),
                m = r(12996),
                b = r(15902),
                A = r(55690),
                O = r(15033),
                E = r(5256),
                w = r(65950),
                x = r(71957),
                j = r(95583),
                P = r(50779),
                k = r(13951);
            const I = function() {
                var e, t, r = (0, f.wA)(),
                    n = (0, k.P2)().data,
                    a = (0, x.Ki)(null == n ? void 0 : n.id, {
                        skip: !(null != n && n.id)
                    }),
                    o = a.data,
                    i = a.isFetching,
                    s = a.error,
                    u = a.isError,
                    c = (0, P.G)().data,
                    l = (void 0 === c ? {} : c).defaultAvatar,
                    p = (0, j.GP)(),
                    v = (0, b.A)(p, 2),
                    h = v[0],
                    m = v[1],
                    I = m.isLoading,
                    S = m.isError,
                    T = m.error;
                return d.createElement("div", null, d.createElement(y.A, null, d.createElement(g.A, {
                    xs: "12"
                }, d.createElement("h2", null, "Current Avatar"))), d.createElement(y.A, null, d.createElement(g.A, {
                    xs: "4",
                    xl: "3"
                }, i ? d.createElement(O.fy, {
                    width: "100%",
                    height: "160px",
                    className: "my-2"
                }) : !u && o && d.createElement(E.A, {
                    data: o
                }), u && d.createElement(O.$T, {
                    type: "error",
                    title: "Failed to load avatar",
                    message: null === (e = s.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                })), d.createElement(g.A, {
                    xs: "8",
                    xl: "9"
                }, d.createElement(O.$n, {
                    onClick: function() {
                        n && l && (h({
                            avatarId: l
                        }), r((0, w.X)({
                            title: "Avatar reset",
                            icon: A.ld,
                            message: "You've reset your avatar to default! You'll see this change next time you load into a world.",
                            color: "success"
                        })))
                    },
                    loading: i || I,
                    neutral: !0
                }, d.createElement(O.M2, {
                    icon: A.ld
                }), " Reset to Default Avatar"), S && d.createElement(O.$T, {
                    type: "error",
                    title: "Failed to reset avatar",
                    message: null === (t = T.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message
                }))))
            };

            function S(e) {
                var t = T();
                return function() {
                    var r, n = (0, u.A)(e);
                    if (t) {
                        var a = (0, u.A)(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return (0, s.A)(this, r)
                }
            }

            function T() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (T = function() {
                    return !!e
                })()
            }
            var R = function(e) {
                (0, i.A)(s, e);
                var t, r = S(s);

                function s(e) {
                    var t;
                    return (0, a.A)(this, s), (t = r.call(this, e)).state = {
                        licences: []
                    }, t
                }
                return (0, o.A)(s, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getLicences()
                    }
                }, {
                    key: "getLicences",
                    value: (t = (0, n.A)(l().mark(function e() {
                        var t;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v().get(window.apiUrl("/api/1/licenses?licenseHolder=me&forType=avatar&n=100"));
                                case 2:
                                    200 !== (t = e.sent).status ? console.error("Failed to get licenses for user!") : this.setState({
                                        licences: t.data
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return d.createElement(y.A, null, d.createElement(g.A, {
                            xs: "12"
                        }, d.createElement(h.A, null, "Avatars"), d.createElement(I, null), d.createElement(m.A, {
                            title: "My Avatars",
                            releaseStatus: "all",
                            user: "me",
                            sort: "updated",
                            order: "descending",
                            hideAuthor: !0
                        }), this.state.licences.length > 0 && d.createElement(m.A, {
                            title: "Purchased Avatars",
                            releaseStatus: "all",
                            sort: "updated",
                            order: "descending",
                            user: "me",
                            licenses: this.state.licences,
                            hideAuthor: !0
                        }), d.createElement(m.A, {
                            title: "Featured Avatars",
                            releaseStatus: "public",
                            featured: "true",
                            sort: "updated",
                            order: "descending"
                        })))
                    }
                }]), s
            }(d.Component);
            const N = (0, f.Ng)(function(e) {
                return {}
            })(R)
        },
        47486(e, t, r) {
            r.d(t, {
                A: () => c
            });
            var n = r(96540),
                a = r(30104),
                o = r(74758),
                i = r(55606),
                s = r(87959),
                u = r(51055);
            const c = function(e) {
                var t = e.confirmLink,
                    r = e.cancelLink,
                    c = e.prompt,
                    l = function(e) {
                        return r(e)
                    };
                return n.createElement(o.A, {
                    outline: !0
                }, n.createElement(s.A, {
                    tag: "h4"
                }, "Confirm", n.createElement(u.A, {
                    onClick: l
                })), n.createElement(i.A, null, n.createElement("p", null, c), n.createElement(a.A, {
                    onClick: function(e) {
                        return t(e)
                    },
                    color: "primary"
                }, " Ok"), " ", n.createElement(a.A, {
                    onClick: l,
                    color: "secondary"
                }, " Cancel")))
            }
        },
        75255(e, t, r) {
            r.d(t, {
                A: () => s
            });
            var n = r(7612),
                a = r(96540),
                o = r(30104),
                i = r(6324);
            const s = function(e) {
                var t = e.loading,
                    r = e.className,
                    s = e.onClick,
                    u = e.color,
                    c = e.children,
                    l = e.hidden,
                    d = e.disabled;
                return a.createElement(o.A, {
                    className: r,
                    onClick: s,
                    color: u,
                    hidden: l,
                    disabled: d
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, c), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(i.A, {
                    icon: n.z1,
                    spin: !0
                })))
            };
            r.dn(s)
        },
        2525(e, t, r) {
            r.d(t, {
                A: () => m
            });
            var n = r(23029),
                a = r(92901),
                o = r(9417),
                i = r(85501),
                s = r(34441),
                u = r(53954),
                c = r(38275),
                l = r(96540),
                d = r(6376),
                f = r(30104),
                p = r(15033),
                v = r(44741);

            function y(e) {
                var t = g();
                return function() {
                    var r, n = (0, u.A)(e);
                    if (t) {
                        var a = (0, u.A)(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return (0, s.A)(this, r)
                }
            }

            function g() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (g = function() {
                    return !!e
                })()
            }
            var h = function(e) {
                (0, i.A)(r, e);
                var t = y(r);

                function r(e) {
                    var a;
                    return (0, n.A)(this, r), (a = t.call(this, e)).unFavorite = a.unFavorite.bind((0, o.A)(a)), a
                }
                return (0, a.A)(r, [{
                    key: "unFavorite",
                    value: function() {
                        this.props.dispatch((0, v.IO)({
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
                            e = a[n][r.favoriteGroup].filter(function(e) {
                                return e.id === r.id || e.favoriteId === r.favoriteId
                            }).length > 0
                        } catch (t) {
                            console.error(t), e = !1
                        }
                        return e ? l.createElement(f.A, {
                            color: "primary",
                            title: "Remove Favorite",
                            onClick: this.unFavorite
                        }, l.createElement(p.M2, {
                            icon: c.yL
                        }), " Remove Favorite") : null
                    }
                }]), r
            }(l.Component);
            const m = (0, d.Ng)(function(e) {
                return {
                    assets: e.favorites.assets
                }
            })(h)
        },
        95583(e, t, r) {
            r.d(t, {
                EP: () => g,
                GP: () => O,
                Pb: () => v,
                RM: () => A,
                RR: () => b,
                UH: () => y,
                oV: () => E,
                pl: () => x,
                tS: () => h,
                vG: () => w,
                wx: () => m
            });
            var n = r(10467),
                a = r(15184),
                o = r(64467),
                i = r(54756),
                s = r.n(i),
                u = r(89483);

            function c(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return l(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
                            }
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

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach(function(t) {
                        (0, o.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var p = u.m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllAvatarStyles: e.query({
                                query: function() {
                                    return {
                                        url: "/avatarStyles"
                                    }
                                },
                                providesTags: ["AvatarStyles"]
                            }),
                            updateAvatar: e.mutation({
                                query: function(e) {
                                    var t, r, n, a, o = e.avatarId,
                                        i = e.data;
                                    return {
                                        url: "/avatars/".concat(o),
                                        method: "PUT",
                                        body: f(f(f(f({}, i), null != i && null !== (t = i.styles) && void 0 !== t && t.primary ? {
                                            primaryStyle: null == i || null === (r = i.styles) || void 0 === r ? void 0 : r.primary
                                        } : {}), null != i && null !== (n = i.styles) && void 0 !== n && n.secondary ? {
                                            secondaryStyle: null == i || null === (a = i.styles) || void 0 === a ? void 0 : a.secondary
                                        } : {}), null != i && i.acknowledgements ? {
                                            acknowledgements: null == i ? void 0 : i.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
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
                            selectFallbackAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/selectfallback"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            getAvatar: e.query({
                                query: function(e) {
                                    var t = e.avatarId,
                                        r = e.getListingData,
                                        n = void 0 !== r && r;
                                    return {
                                        url: "/avatars/".concat(t),
                                        params: {
                                            getListingData: n
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.avatarId,
                                        o = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: n
                                    }].concat((0, a.A)(o ? [{
                                        type: "AvatarWithListingData",
                                        id: n
                                    }] : []))
                                }
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
                                invalidatesTags: (0, u.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
                            deleteAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar", "Avatar"]
                            }),
                            enqueueImpostor: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
                            deleteImpostors: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
                            getImpostorQueueStats: e.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: e.query({
                                queryFn: (r = (0, n.A)(s().mark(function e(t, r, n, o) {
                                    var i, u, c, l, d, f, p, v, y, g, h, m, b, A, O, E, w, x, j, P, k, I, S, T, R, N, D;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                i = t.sort, u = void 0 === i ? "updated" : i, c = t.order, l = void 0 === c ? "descending" : c, d = t.releaseStatus, f = void 0 === d ? "all" : d, p = t.user, v = void 0 === p ? "me" : p, y = t.organization, g = void 0 === y ? "vrchat" : y, h = t.n, m = void 0 === h ? 20 : h, b = t.featured, A = t.userId, O = t.search, E = t.tag, w = t.notag, x = t.platform, j = t.maxUnityVersion, P = t.minUnityVersion, k = t.exactUnityVersion, I = t.minAssetVersion, S = t.maxAssetVersion, T = t.exactAssetVersion, R = [], N = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: T,
                                                        exactUnityVersion: k,
                                                        featured: b,
                                                        maxAssetVersion: S,
                                                        maxUnityVersion: j,
                                                        minAssetVersion: I,
                                                        minUnityVersion: P,
                                                        n: m,
                                                        notag: w,
                                                        offset: N,
                                                        order: l,
                                                        organization: g,
                                                        platform: x,
                                                        releaseStatus: f,
                                                        search: O,
                                                        sort: u,
                                                        tag: E,
                                                        user: v,
                                                        userId: A
                                                    }
                                                });
                                            case 6:
                                                if (!(D = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: D.error
                                                });
                                            case 9:
                                                if (!(D.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return R.push.apply(R, (0, a.A)(D.data)), N += m, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: R
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(e, t) {
                                    return [{
                                        type: "Avatars",
                                        id: "LIST"
                                    }]
                                }
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
                                queryFn: (t = (0, n.A)(s().mark(function e() {
                                    var t, r, n, o, i, u, l, d, f, p, v, y, g, h = arguments;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = h.length > 0 && void 0 !== h[0] ? h[0] : {}).tag, n = t.tags, o = t.userId, i = t.groups, u = void 0 === i ? [] : i, l = h.length > 3 ? h[3] : void 0, d = [], f = c(r ? [r] : u), e.prev = 7, f.s();
                                            case 9:
                                                if ((p = f.n()).done) {
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
                                                        tags: n,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(g = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: g.error
                                                });
                                            case 18:
                                                if (!(g.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return d.push.apply(d, (0, a.A)(g.data)), y += 50, e.abrupt("continue", 12);
                                            case 22:
                                                return e.abrupt("break", 25);
                                            case 25:
                                                e.next = 9;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(7), f.e(e.t0);
                                            case 32:
                                                return e.prev = 32, f.f(), e.finish(32);
                                            case 35:
                                                return e.abrupt("return", {
                                                    data: d
                                                });
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [7, 29, 32, 35]
                                    ])
                                })), function() {
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
                    addTagTypes: ["Avatar", "AvatarWithListingData", "FavoriteAvatars"]
                }),
                v = p.useDeleteAvatarMutation,
                y = p.useDeleteImpostorsMutation,
                g = p.useEnqueueImpostorMutation,
                h = p.useGetAllAvatarsQuery,
                m = p.useGetAllAvatarStylesQuery,
                b = (p.useGetAllFavoriteAvatarsQuery, p.useGetAvatarQuery),
                A = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                O = p.useSelectAvatarMutation,
                E = p.useSelectFallbackAvatarMutation,
                w = p.useSetAvatarTagsMutation,
                x = p.useUpdateAvatarMutation
        },
        55606(e, t, r) {
            r.d(t, {
                A: () => v
            });
            var n = r(96540),
                a = r(5556),
                o = r.n(a),
                i = r(32485),
                s = r.n(i),
                u = r(56331),
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

            function d(e, t) {
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
            var f = {
                className: o().string,
                cssModule: o().object,
                innerRef: o().oneOfType([o().object, o().string, o().func]),
                tag: u.Wx
            };

            function p(e) {
                var t = e.className,
                    r = e.cssModule,
                    a = e.innerRef,
                    o = e.tag,
                    i = void 0 === o ? "div" : o,
                    f = d(e, c),
                    p = (0, u.qO)(s()(t, "card-body"), r);
                return n.createElement(i, l({}, f, {
                    className: p,
                    ref: a
                }))
            }
            p.propTypes = f;
            const v = p
        },
        87959(e, t, r) {
            r.d(t, {
                A: () => v
            });
            var n = r(96540),
                a = r(5556),
                o = r.n(a),
                i = r(32485),
                s = r.n(i),
                u = r(56331),
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

            function d(e, t) {
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
            var f = {
                className: o().string,
                cssModule: o().object,
                tag: u.Wx
            };

            function p(e) {
                var t = e.className,
                    r = e.cssModule,
                    a = e.tag,
                    o = void 0 === a ? "div" : a,
                    i = d(e, c),
                    f = (0, u.qO)(s()(t, "card-header"), r);
                return n.createElement(o, l({}, i, {
                    className: f
                }))
            }
            p.propTypes = f;
            const v = p
        },
        21247(e, t, r) {
            r.d(t, {
                A: () => k
            });
            var n = r(96540),
                a = r(5556),
                o = r.n(a),
                i = r(32485),
                s = r.n(i),
                u = r(91249),
                c = r(56331);

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            var d, f = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

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

            function g(e, t) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function h(e) {
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
                    var r, n = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === l(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return m(e)
                    }(this, r)
                }
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function A(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(r), !0).forEach(function(t) {
                        E(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function E(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var w = O(O({}, u.Ay.propTypes), {}, {
                    horizontal: o().bool,
                    isOpen: o().bool,
                    children: o().oneOfType([o().arrayOf(o().node), o().node]),
                    tag: c.Wx,
                    className: o().node,
                    navbar: o().bool,
                    cssModule: o().object,
                    innerRef: o().shape({
                        current: o().object
                    })
                }),
                x = O(O({}, u.Ay.defaultProps), {}, {
                    horizontal: !1,
                    isOpen: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    tag: "div",
                    timeout: c.Q6.Collapse
                }),
                j = (E(d = {}, c.MJ.ENTERING, "collapsing"), E(d, c.MJ.ENTERED, "collapse show"), E(d, c.MJ.EXITING, "collapsing"), E(d, c.MJ.EXITED, "collapse"), d);
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
                    }), t && g(e, t)
                }(i, e);
                var t, r, a, o = h(i);

                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (t = o.call(this, e)).state = {
                        dimension: null
                    }, t.nodeRef = e.innerRef || n.createRef(), ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach(function(e) {
                        t[e] = t[e].bind(m(t))
                    }), t
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
                            d = t.cssModule,
                            y = t.children,
                            g = (t.innerRef, v(t, f)),
                            h = this.state.dimension,
                            m = (0, c.Up)(g, c.PS),
                            b = (0, c.cJ)(g, c.PS);
                        return n.createElement(u.Ay, p({}, m, {
                            in: o,
                            nodeRef: this.nodeRef,
                            onEntering: this.onEntering,
                            onEntered: this.onEntered,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }), function(t) {
                            var o = function(e) {
                                    return j[e] || "collapse"
                                }(t),
                                u = (0, c.qO)(s()(i, a && "collapse-horizontal", o, l && "navbar-collapse"), d),
                                f = null === h ? null : E({}, a ? "width" : "height", h);
                            return n.createElement(r, p({}, b, {
                                style: O(O({}, b.style), f),
                                className: u,
                                ref: e.nodeRef
                            }), y)
                        })
                    }
                }]) && y(t.prototype, r), a && y(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(n.Component);
            P.propTypes = w, P.defaultProps = x;
            const k = P
        }
    }
]);
//# sourceMappingURL=3d367c779e64979fdd868e6aca59290bd597aff4ac8eecf466eb9a1214e9b16a.js.map