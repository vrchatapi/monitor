"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6770], {
        66770: (t, a, r) => {
            r.d(a, {
                Z: () => l
            });
            var e = r(87462),
                n = r(45697),
                s = r.n(n),
                i = r(67294),
                u = r(96985),
                o = r(21538),
                v = function(t) {
                    var a, r, n, s = !("hidden" === (null === (a = t.data) || void 0 === a ? void 0 : a.releaseStatus)),
                        v = (0, o.LQ)({
                            avatarId: null === (r = t.data) || void 0 === r ? void 0 : r.id
                        }, {
                            skip: s
                        }).data;
                    return i.createElement(u.uW, (0, e.Z)({}, t, {
                        fieldsList: ["updated_at"],
                        contentType: "avatar",
                        showAuthor: !0,
                        data: null !== (n = null != v ? v : t.avatar) && void 0 !== n ? n : t.data
                    }))
                };
            v.propTypes = {
                data: s().shape({
                    id: s().string,
                    authorName: s().string,
                    authorId: s().string,
                    name: s().string,
                    releaseStatus: s().oneOf(["public", "private", "hidden"]),
                    updated_at: s().string,
                    tags: s().arrayOf(s().string),
                    unityPackages: s().arrayOf(s().shape({
                        platform: s().string
                    }))
                }).isRequired,
                fieldsList: s().arrayOf(s().string)
            };
            const l = v
        },
        21538: (t, a, r) => {
            r.d(a, {
                C0: () => S,
                CO: () => A,
                Cm: () => O,
                EA: () => g,
                F6: () => m,
                GG: () => y,
                LQ: () => h,
                X8: () => f,
                eP: () => T,
                ve: () => b,
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
                            if ("string" == typeof t) return l(t, a);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, a)
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

            function l(t, a) {
                (null == a || a > t.length) && (a = t.length);
                for (var r = 0, e = new Array(a); r < a; r++) e[r] = t[r];
                return e
            }

            function c(t, a) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    a && (e = e.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(t, a).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function d(t) {
                for (var a = 1; a < arguments.length; a++) {
                    var r = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? c(Object(r), !0).forEach((function(a) {
                        (0, s.Z)(t, a, r[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(a) {
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
                                    var a, r, e, n, s = t.avatarId,
                                        i = t.data;
                                    return {
                                        url: "/avatars/".concat(s),
                                        method: "PUT",
                                        body: d(d(d(d({}, i), null != i && null !== (a = i.styles) && void 0 !== a && a.primary ? {
                                            primaryStyle: null == i || null === (r = i.styles) || void 0 === r ? void 0 : r.primary
                                        } : {}), null != i && null !== (e = i.styles) && void 0 !== e && e.secondary ? {
                                            secondaryStyle: null == i || null === (n = i.styles) || void 0 === n ? void 0 : n.secondary
                                        } : {}), null != i && i.acknowledgements ? {
                                            acknowledgements: null == i ? void 0 : i.acknowledgements
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
                                    var i, o, v, l, c, d, p, y, f, g, m, A, h, b, I, T, O, S, k, q, w, x, D, L, j, E, P;
                                    return u().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                i = a.sort, o = void 0 === i ? "updated" : i, v = a.order, l = void 0 === v ? "descending" : v, c = a.releaseStatus, d = void 0 === c ? "all" : c, p = a.user, y = void 0 === p ? "me" : p, f = a.organization, g = void 0 === f ? "vrchat" : f, m = a.n, A = void 0 === m ? 20 : m, h = a.featured, b = a.userId, I = a.search, T = a.tag, O = a.notag, S = a.platform, k = a.maxUnityVersion, q = a.minUnityVersion, w = a.exactUnityVersion, x = a.minAssetVersion, D = a.maxAssetVersion, L = a.exactAssetVersion, j = [], E = 0;
                                            case 3:
                                                return t.next = 6, s({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: L,
                                                        exactUnityVersion: w,
                                                        featured: h,
                                                        maxAssetVersion: D,
                                                        maxUnityVersion: k,
                                                        minAssetVersion: x,
                                                        minUnityVersion: q,
                                                        n: A,
                                                        notag: O,
                                                        offset: E,
                                                        order: l,
                                                        organization: g,
                                                        platform: S,
                                                        releaseStatus: d,
                                                        search: I,
                                                        sort: o,
                                                        tag: T,
                                                        user: y,
                                                        userId: b
                                                    }
                                                });
                                            case 6:
                                                if (!(P = t.sent).error) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: P.error
                                                });
                                            case 9:
                                                if (!(P.data.length > 0)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return j.push.apply(j, (0, n.Z)(P.data)), E += A, t.abrupt("continue", 3);
                                            case 13:
                                                return t.abrupt("break", 16);
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: j
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
                                    var a, r, e, s, i, o, l, c, d, p, y, f, g, m = arguments;
                                    return u().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = (a = m.length > 0 && void 0 !== m[0] ? m[0] : {}).tag, e = a.tags, s = a.userId, i = a.groups, o = void 0 === i ? [] : i, l = m.length > 3 ? m[3] : void 0, c = [], d = v(r ? [r] : o), t.prev = 7, d.s();
                                            case 9:
                                                if ((p = d.n()).done) {
                                                    t.next = 27;
                                                    break
                                                }
                                                y = p.value, f = 0;
                                            case 12:
                                                return t.next = 15, l({
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
                                                return c.push.apply(c, (0, n.Z)(g.data)), f += 50, t.abrupt("continue", 12);
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
                                                    data: c
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
                m = p.useGetAllAvatarsQuery,
                A = p.useGetAllAvatarStylesQuery,
                h = (p.useGetAllFavoriteAvatarsQuery, p.useGetAvatarQuery),
                b = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                I = p.useSelectAvatarMutation,
                T = p.useSelectFallbackAvatarMutation,
                O = p.useSetAvatarTagsMutation,
                S = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=db35fedba518ba844f202f7f5fa59d731efbaee631582ad0caaa64c7b46bf0d9.js.map