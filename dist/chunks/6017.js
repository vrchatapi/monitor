"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6017], {
        66770: (t, a, r) => {
            r.d(a, {
                Z: () => v
            });
            var e = r(87462),
                n = r(67294),
                s = r(45697),
                i = r.n(s),
                u = r(14411),
                o = function(t) {
                    var a;
                    return n.createElement(u.uW, (0, e.Z)({
                        fieldsList: ["updated_at"],
                        contentType: "avatar",
                        showAuthor: !0,
                        data: null !== (a = t.avatar) && void 0 !== a ? a : t.data
                    }, t))
                };
            o.propTypes = {
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
            const v = o
        },
        21538: (t, a, r) => {
            r.d(a, {
                C0: () => k,
                CO: () => m,
                Cm: () => x,
                EA: () => g,
                F6: () => A,
                GG: () => y,
                LQ: () => b,
                X8: () => f,
                ak: () => O,
                cq: () => q,
                eP: () => S,
                lx: () => h,
                ve: () => T,
                x8: () => I
            });
            var e = r(15861),
                n = r(42138),
                s = r(4942),
                i = r(64687),
                u = r.n(i),
                o = r(61509);

            function v(t, a) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, a) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, a);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, a)
                        }(t)) || a && t && "number" == typeof t.length) {
                        r && (t = r);
                        var e = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return e >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[e++]
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
                var s, i = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        u = !0, s = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                }
            }

            function c(t, a) {
                (null == a || a > t.length) && (a = t.length);
                for (var r = 0, e = new Array(a); r < a; r++) e[r] = t[r];
                return e
            }

            function d(t, a) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    a && (e = e.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(t, a).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function l(t) {
                for (var a = 1; a < arguments.length; a++) {
                    var r = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? d(Object(r), !0).forEach((function(a) {
                        (0, s.Z)(t, a, r[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(a) {
                        Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a))
                    }))
                }
                return t
            }
            var p = o.S.injectEndpoints({
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
                                    var a = t.avatarId,
                                        r = t.data;
                                    return {
                                        url: "/avatars/".concat(a),
                                        method: "PUT",
                                        body: l(l(l({}, r), null !== r.styles.primary ? {
                                            primaryStyle: r.styles.primary
                                        } : {}), null !== r.styles.secondary ? {
                                            secondaryStyle: r.styles.secondary
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            selectAvatar: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            selectFallbackAvatar: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a, "/selectfallback"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            getAvatar: t.query({
                                query: function(t) {
                                    var a = t.avatarId,
                                        r = t.getListingData,
                                        e = void 0 !== r && r;
                                    return {
                                        url: "/avatars/".concat(a),
                                        params: {
                                            getListingData: e
                                        }
                                    }
                                },
                                providesTags: function(t, a, r) {
                                    var e = r.avatarId,
                                        s = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }].concat((0, n.Z)(s ? [{
                                        type: "AvatarWithListingData",
                                        id: e
                                    }] : []))
                                }
                            }),
                            setAvatarPublic: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "public"
                                        }
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            setAvatarPrivate: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "private"
                                        }
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            setAvatarTags: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId,
                                        r = t.tags;
                                    return {
                                        url: "/avatars/".concat(a),
                                        method: "PUT",
                                        body: {
                                            tags: r
                                        }
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            deleteAvatar: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar", "Avatar"]
                            }),
                            enqueueImpostor: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            deleteImpostors: t.mutation({
                                query: function(t) {
                                    var a = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(a, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, o.T)((function(t) {
                                    var a = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: a
                                    }]
                                }))
                            }),
                            getImpostorQueueStats: t.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: t.query({
                                queryFn: (r = (0, e.Z)(u().mark((function t(a, r, e, s) {
                                    var i, o, v, c, d, l, p, y, f, g, A, m, h, b, T, I, S, q, O, x, k, P, w, D, L, j, E;
                                    return u().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                i = a.sort, o = void 0 === i ? "updated" : i, v = a.order, c = void 0 === v ? "descending" : v, d = a.releaseStatus, l = void 0 === d ? "all" : d, p = a.user, y = void 0 === p ? "me" : p, f = a.organization, g = void 0 === f ? "vrchat" : f, A = a.n, m = void 0 === A ? 20 : A, h = a.featured, b = a.userId, T = a.search, I = a.tag, S = a.notag, q = a.platform, O = a.maxUnityVersion, x = a.minUnityVersion, k = a.exactUnityVersion, P = a.minAssetVersion, w = a.maxAssetVersion, D = a.exactAssetVersion, L = [], j = 0;
                                            case 3:
                                                return t.next = 6, s({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: D,
                                                        exactUnityVersion: k,
                                                        featured: h,
                                                        maxAssetVersion: w,
                                                        maxUnityVersion: O,
                                                        minAssetVersion: P,
                                                        minUnityVersion: x,
                                                        n: m,
                                                        notag: S,
                                                        offset: j,
                                                        order: c,
                                                        organization: g,
                                                        platform: q,
                                                        releaseStatus: l,
                                                        search: T,
                                                        sort: o,
                                                        tag: I,
                                                        user: y,
                                                        userId: b
                                                    }
                                                });
                                            case 6:
                                                if (!(E = t.sent).error) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: E.error
                                                });
                                            case 9:
                                                if (!(E.data.length > 0)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return L.push.apply(L, (0, n.Z)(E.data)), j += m, t.abrupt("continue", 3);
                                            case 13:
                                                return t.abrupt("break", 16);
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: L
                                                });
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), function(t, a, e, n) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(t, a) {
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
                                providesTags: function(t, a, r) {
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: r.tag
                                    }]
                                }
                            }),
                            getAllFavoriteAvatars: t.query({
                                queryFn: (a = (0, e.Z)(u().mark((function t() {
                                    var a, r, e, s, i, o, c, d, l, p, y, f, g, A = arguments;
                                    return u().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = (a = A.length > 0 && void 0 !== A[0] ? A[0] : {}).tag, e = a.tags, s = a.userId, i = a.groups, o = void 0 === i ? [] : i, c = A.length > 3 ? A[3] : void 0, d = [], l = v(r ? [r] : o), t.prev = 7, l.s();
                                            case 9:
                                                if ((p = l.n()).done) {
                                                    t.next = 27;
                                                    break
                                                }
                                                y = p.value, f = 0;
                                            case 12:
                                                return t.next = 15, c({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: f,
                                                        tag: null != r ? r : y,
                                                        tags: e,
                                                        userId: s
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
                                                return d.push.apply(d, (0, n.Z)(g.data)), f += 50, t.abrupt("continue", 12);
                                            case 22:
                                                return t.abrupt("break", 25);
                                            case 25:
                                                t.next = 9;
                                                break;
                                            case 27:
                                                t.next = 32;
                                                break;
                                            case 29:
                                                t.prev = 29, t.t0 = t.catch(7), l.e(t.t0);
                                            case 32:
                                                return t.prev = 32, l.f(), t.finish(32);
                                            case 35:
                                                return t.abrupt("return", {
                                                    data: d
                                                });
                                            case 36:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [7, 29, 32, 35]
                                    ])
                                }))), function() {
                                    return a.apply(this, arguments)
                                }),
                                providesTags: function(t, a) {
                                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).tag;
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: null != r ? r : "all"
                                    }]
                                }
                            })
                        };
                        var a, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Avatar", "AvatarWithListingData", "FavoriteAvatars"]
                }),
                y = p.useDeleteAvatarMutation,
                f = p.useDeleteImpostorsMutation,
                g = p.useEnqueueImpostorMutation,
                A = p.useGetAllAvatarsQuery,
                m = p.useGetAllAvatarStylesQuery,
                h = p.useGetAllFavoriteAvatarsQuery,
                b = p.useGetAvatarQuery,
                T = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                I = p.useSelectAvatarMutation,
                S = p.useSelectFallbackAvatarMutation,
                q = p.useSetAvatarPrivateMutation,
                O = p.useSetAvatarPublicMutation,
                x = p.useSetAvatarTagsMutation,
                k = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=04b181ed9caa3cc1591e1e48deb54520e6e0fcd7938e35b8371688e1da8110f7.js.map