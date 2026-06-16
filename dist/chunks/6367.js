"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6367], {
        77761(t, e, r) {
            r.d(e, {
                A: () => l
            });
            var a = r(82544),
                n = r(70129),
                o = r(43594),
                i = r(15033),
                s = r(66955),
                u = r(96540),
                c = r(11634);
            const l = function(t) {
                var e = t.favoriteGroups,
                    r = t.selectedGroup,
                    n = t.onGroupClick,
                    l = t.placeholder,
                    p = void 0 === l ? "Select Group" : l,
                    f = t.className,
                    y = void 0 === f ? "" : f,
                    g = t.type,
                    m = t.ignoreDisable,
                    A = void 0 !== m && m,
                    b = u.useState(!1),
                    h = (0, a.A)(b, 2),
                    w = h[0],
                    x = h[1],
                    k = u.useRef(null),
                    I = u.useCallback(function(t) {
                        var e;
                        null !== (e = k.current) && void 0 !== e && e.contains(t.target) || x(!1)
                    }, []);
                return u.useEffect(function() {
                    if (w) return window.addEventListener("click", I),
                        function() {
                            return window.removeEventListener("click", I)
                        }
                }, [w, I]), u.createElement(v, {
                    ref: k,
                    className: y
                }, u.createElement(d, {
                    type: "button",
                    onClick: function() {
                        x(!w)
                    },
                    className: "tw-flex tw-items-center tw-justify-between tw-w-full tw-px-3 tw-py-2 tw-text-white",
                    "aria-label": "Favorite Collection Selector"
                }, u.createElement("span", {
                    className: "tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap"
                }, (0, c.Mn)({
                    group: null == e ? void 0 : e.find(function(t) {
                        return t.name === r
                    }),
                    type: g,
                    placeholder: p
                })), u.createElement(i.M2, {
                    icon: o.xB,
                    className: "tw-transition-transform ".concat(w ? "tw-rotate-180" : "")
                })), u.createElement(s.A, {
                    favoriteGroups: e,
                    selectedGroup: r,
                    onGroupClick: function(t) {
                        x(!1), n(t.name)
                    },
                    isOpen: w,
                    className: "tw-absolute tw-z-50 tw-rounded-t-none tw-rounded-b-md",
                    ignoreDisable: A,
                    type: g
                }))
            };
            var v = (0, n.A)("div", {
                    target: "e18hijzj1"
                })("width:100%;position:relative;z-index:20;border-radius:", function(t) {
                    return t.expanded ? "3px 3px 0 0" : 3
                }, "px;"),
                d = (0, n.A)("button", {
                    target: "e18hijzj0"
                })({
                    name: "d1gdej",
                    styles: "background:#064b5c;border:2px solid #064b5c;color:white;border-radius:4px;padding:0.5rem 0.75rem;width:100%;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all 0.2s ease;&:hover{border:solid 2px #086c84;}&:focus{outline:none;border-color:#086c84;}"
                })
        },
        95583(t, e, r) {
            r.d(e, {
                EP: () => g,
                GP: () => w,
                Pb: () => f,
                RM: () => h,
                RR: () => b,
                UH: () => y,
                oV: () => x,
                pl: () => I,
                tS: () => m,
                vG: () => k,
                wx: () => A
            });
            var a = r(10467),
                n = r(66911),
                o = r(64467),
                i = r(54756),
                s = r.n(i),
                u = r(89483);

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return l(t, e);
                                var r = {}.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
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

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = Array(e); r < e; r++) a[r] = t[r];
                return a
            }

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(r), !0).forEach(function(e) {
                        (0, o.A)(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var p = u.m.injectEndpoints({
                    endpoints: function(t) {
                        return {
                            getAllAvatarStyles: t.query({
                                query: function() {
                                    return {
                                        url: "/avatarStyles"
                                    }
                                },
                                providesTags: ["AvatarStyles"]
                            }),
                            updateAvatar: t.mutation({
                                query: function(t) {
                                    var e, r, a, n, o = t.avatarId,
                                        i = t.data;
                                    return {
                                        url: "/avatars/".concat(o),
                                        method: "PUT",
                                        body: d(d(d(d({}, i), null != i && null !== (e = i.styles) && void 0 !== e && e.primary ? {
                                            primaryStyle: null == i || null === (r = i.styles) || void 0 === r ? void 0 : r.primary
                                        } : {}), null != i && null !== (a = i.styles) && void 0 !== a && a.secondary ? {
                                            secondaryStyle: null == i || null === (n = i.styles) || void 0 === n ? void 0 : n.secondary
                                        } : {}), null != i && i.acknowledgements ? {
                                            acknowledgements: null == i ? void 0 : i.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
                                    }]
                                })
                            }),
                            selectAvatar: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            selectFallbackAvatar: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/selectfallback"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            getAvatar: t.query({
                                query: function(t) {
                                    var e = t.avatarId,
                                        r = t.getListingData,
                                        a = void 0 !== r && r;
                                    return {
                                        url: "/avatars/".concat(e),
                                        params: {
                                            getListingData: a
                                        }
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    var a = r.avatarId,
                                        o = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }].concat((0, n.A)(o ? [{
                                        type: "AvatarWithListingData",
                                        id: a
                                    }] : []))
                                }
                            }),
                            setAvatarTags: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId,
                                        r = t.tags;
                                    return {
                                        url: "/avatars/".concat(e),
                                        method: "PUT",
                                        body: {
                                            tags: r
                                        }
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
                                    }]
                                })
                            }),
                            deleteAvatar: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar", "Avatar"]
                            }),
                            enqueueImpostor: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
                                    }]
                                })
                            }),
                            deleteImpostors: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, u.Z)(function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
                                    }]
                                })
                            }),
                            getImpostorQueueStats: t.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: t.query({
                                queryFn: (r = (0, a.A)(s().mark(function t(e, r, a, o) {
                                    var i, u, c, l, v, d, p, f, y, g, m, A, b, h, w, x, k, I, S, T, q, E, j, O, D, P, G;
                                    return s().wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                i = e.sort, u = void 0 === i ? "updated" : i, c = e.order, l = void 0 === c ? "descending" : c, v = e.releaseStatus, d = void 0 === v ? "all" : v, p = e.user, f = void 0 === p ? "me" : p, y = e.organization, g = void 0 === y ? "vrchat" : y, m = e.n, A = void 0 === m ? 20 : m, b = e.featured, h = e.userId, w = e.search, x = e.tag, k = e.notag, I = e.platform, S = e.maxUnityVersion, T = e.minUnityVersion, q = e.exactUnityVersion, E = e.minAssetVersion, j = e.maxAssetVersion, O = e.exactAssetVersion, D = [], P = 0;
                                            case 3:
                                                return t.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: O,
                                                        exactUnityVersion: q,
                                                        featured: b,
                                                        maxAssetVersion: j,
                                                        maxUnityVersion: S,
                                                        minAssetVersion: E,
                                                        minUnityVersion: T,
                                                        n: A,
                                                        notag: k,
                                                        offset: P,
                                                        order: l,
                                                        organization: g,
                                                        platform: I,
                                                        releaseStatus: d,
                                                        search: w,
                                                        sort: u,
                                                        tag: x,
                                                        user: f,
                                                        userId: h
                                                    }
                                                });
                                            case 6:
                                                if (!(G = t.sent).error) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: G.error
                                                });
                                            case 9:
                                                if (!(G.data.length > 0)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return D.push.apply(D, (0, n.A)(G.data)), P += A, t.abrupt("continue", 3);
                                            case 13:
                                                return t.abrupt("break", 16);
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: D
                                                });
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                })), function(t, e, a, n) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(t, e) {
                                    return [{
                                        type: "Avatars",
                                        id: "LIST"
                                    }]
                                }
                            }),
                            getFavoriteAvatars: t.query({
                                query: function(t) {
                                    return {
                                        url: "avatars/favorites",
                                        params: {
                                            userId: t.userId,
                                            n: t.n,
                                            offset: t.offset,
                                            tag: t.tag,
                                            tags: t.tags
                                        }
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: r.tag
                                    }]
                                }
                            }),
                            getAllFavoriteAvatars: t.query({
                                queryFn: (e = (0, a.A)(s().mark(function t() {
                                    var e, r, a, o, i, u, l, v, d, p, f, y, g, m = arguments;
                                    return s().wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = (e = m.length > 0 && void 0 !== m[0] ? m[0] : {}).tag, a = e.tags, o = e.userId, i = e.groups, u = void 0 === i ? [] : i, l = m.length > 3 ? m[3] : void 0, v = [], d = c(r ? [r] : u), t.prev = 7, d.s();
                                            case 9:
                                                if ((p = d.n()).done) {
                                                    t.next = 27;
                                                    break
                                                }
                                                f = p.value, y = 0;
                                            case 12:
                                                return t.next = 15, l({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: y,
                                                        tag: null != r ? r : f,
                                                        tags: a,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(g = t.sent).error) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: g.error
                                                });
                                            case 18:
                                                if (!(g.data.length > 0)) {
                                                    t.next = 22;
                                                    break
                                                }
                                                return v.push.apply(v, (0, n.A)(g.data)), y += 50, t.abrupt("continue", 12);
                                            case 22:
                                                return t.abrupt("break", 25);
                                            case 25:
                                                t.next = 9;
                                                break;
                                            case 27:
                                                t.next = 32;
                                                break;
                                            case 29:
                                                t.prev = 29, t.t0 = t.catch(7), d.e(t.t0);
                                            case 32:
                                                return t.prev = 32, d.f(), t.finish(32);
                                            case 35:
                                                return t.abrupt("return", {
                                                    data: v
                                                });
                                            case 36:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, null, [
                                        [7, 29, 32, 35]
                                    ])
                                })), function() {
                                    return e.apply(this, arguments)
                                }),
                                providesTags: function(t, e) {
                                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).tag;
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: null != r ? r : "all"
                                    }]
                                }
                            })
                        };
                        var e, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Avatar", "AvatarWithListingData", "FavoriteAvatars"]
                }),
                f = p.useDeleteAvatarMutation,
                y = p.useDeleteImpostorsMutation,
                g = p.useEnqueueImpostorMutation,
                m = p.useGetAllAvatarsQuery,
                A = p.useGetAllAvatarStylesQuery,
                b = (p.useGetAllFavoriteAvatarsQuery, p.useGetAvatarQuery),
                h = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                w = p.useSelectAvatarMutation,
                x = p.useSelectFallbackAvatarMutation,
                k = p.useSetAvatarTagsMutation,
                I = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=43e8fba548018de2dba7b586b6ba24c2d3ecf92b9778825e49f0637f2a6ccce5.js.map