"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9664], {
        41727: (t, e, r) => {
            r.d(e, {
                Z: () => F
            });
            var a = r(15861),
                n = r(4942),
                u = r(54546),
                o = r(76553),
                s = r(6811),
                i = r(64687),
                c = r.n(i),
                l = r(67294),
                v = r(32981),
                d = r(64258),
                p = r(14411),
                f = r(95896),
                y = r(12752),
                m = r(64358);

            function g(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(r), !0).forEach((function(e) {
                        (0, n.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var w = r(61509).S.injectEndpoints({
                    endpoints: function(t) {
                        return {
                            getAssetReviewsList: t.query({
                                query: function(t) {
                                    var e = t.n,
                                        r = void 0 === e ? 100 : e,
                                        a = t.pageValue,
                                        n = void 0 === a ? 1 : a,
                                        u = t.hydrateAsset;
                                    return {
                                        url: "assetReviews",
                                        params: b({
                                            hydrateAsset: void 0 !== u && u,
                                            reviewStatus: t.reviewStatus
                                        }, (0, m.ue)({
                                            n: r,
                                            pageValue: n
                                        }))
                                    }
                                },
                                providesTags: ["AssetReviewsList"]
                            }),
                            getAvatarAssetReviewsById: t.query({
                                query: function(t) {
                                    return {
                                        url: "/assetReviews/avatarProduct",
                                        params: {
                                            avatarId: t.avatarId
                                        }
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    return [{
                                        type: "AssetReviewsAvatar",
                                        id: r.avatarId
                                    }]
                                }
                            }),
                            submitAvatarForAssetReview: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId,
                                        r = t.submitNotes;
                                    return {
                                        url: "/assetReviews/avatarProduct",
                                        body: {
                                            avatarId: e,
                                            submitNotes: void 0 === r ? "" : r
                                        },
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: function(t, e, r) {
                                    return [{
                                        type: "AssetReviewsAvatar",
                                        id: r.avatarId
                                    }, "AssetReviewsList"]
                                }
                            })
                        }
                    }
                }).enhanceEndpoints({
                    addTagTypes: ["AssetReviewsAvatar", "AssetReviewsList"]
                }),
                A = (w.useGetAssetReviewsListQuery, w.useGetAvatarAssetReviewsByIdQuery, w.useSubmitAvatarForAssetReviewMutation),
                h = r(22202),
                O = r(67978),
                S = r(43683),
                T = r(67263),
                I = r(79655);
            const P = function(t) {
                var e = t.onClose,
                    r = void 0 === e ? function() {} : e,
                    a = (0, v.v9)((function(t) {
                        return t.productFlow
                    })).currentProduct;
                if (!a) return null;
                var n = a.product,
                    u = a.file;
                return l.createElement(p.JX, {
                    className: "tw-items-center tw-text-center tw-gap-5"
                }, l.createElement(p.pw, {
                    imageId: n.imageId || u || null,
                    alt: n.displayName,
                    fallbackSrc: T,
                    className: "tw-w-[150px] tw-h-[150px]",
                    fitToCover: !0
                }), l.createElement(p.JX, {
                    className: "tw-max-w-[500px]"
                }, l.createElement("h4", null, "Product Created!"), l.createElement("p", null, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), l.createElement(p.X2, {
                    className: "tw-gap-3 tw-w-full"
                }, l.createElement(p.zx, {
                    neutral: !0,
                    containerClasses: "tw-flex-1"
                }, l.createElement(I.rU, {
                    to: "https://docs.vrchat.com/docs",
                    target: "_blank"
                }, "View Docs")), l.createElement(p.zx, {
                    onClick: r,
                    containerClasses: "tw-flex-1"
                }, "Done")))
            };

            function x(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(r), !0).forEach((function(e) {
                        (0, n.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var j = (0, l.lazy)((function() {
                    return r.e(8536).then(r.bind(r, 18536))
                })),
                q = (0, l.lazy)((function() {
                    return Promise.all([r.e(3261), r.e(2621), r.e(6869)]).then(r.bind(r, 72621))
                })),
                C = (0, l.lazy)((function() {
                    return r.e(2172).then(r.bind(r, 42172))
                })),
                k = (0, l.lazy)((function() {
                    return r.e(1899).then(r.bind(r, 71899))
                })),
                D = (0, l.lazy)((function() {
                    return r.e(3871).then(r.bind(r, 3871))
                })),
                R = {
                    productDetails: "Create Product",
                    productReviewSumbit: "Submit for Review",
                    productCreated: "Product Created",
                    productReviewSubmitted: null
                };
            const F = function(t) {
                var e = t.onClose,
                    r = void 0 === e ? function() {} : e,
                    n = (0, v.I0)(),
                    i = (0, y.Tu)().user,
                    m = (0, v.v9)((function(t) {
                        return t.productFlow
                    })),
                    g = m.currentStep,
                    b = m.productType,
                    w = m.currentProduct,
                    T = (0, l.useState)(w || {}),
                    I = (0, u.Z)(T, 2),
                    x = I[0],
                    F = I[1];
                (0, l.useEffect)((function() {
                    g || n((0, S.Bq)("productType"))
                }), []);
                var L = (0, h.q7)({
                        skip: !i
                    }),
                    U = L.data,
                    V = L.isLoading,
                    Z = L.isSuccess,
                    M = A(),
                    G = (0, u.Z)(M, 2),
                    N = G[0],
                    Q = G[1],
                    z = (Q.isLoading, Q.isError, Q.error),
                    _ = (0, O.qX)(),
                    B = (0, u.Z)(_, 2),
                    X = B[0],
                    J = B[1],
                    Y = (J.isSuccess, J.isLoading, J.isError, J.error, (0, l.useMemo)((function() {
                        return !(V || !Z) && (null == U ? void 0 : U.includes("permission-sell-avatar-products"))
                    }), [V])),
                    H = function() {
                        var t, e = (t = f.F_[b].indexOf(g), f.F_[b][t + 1] || g);
                        n((0, S.Td)(R[e])), n((0, S.Bq)(e))
                    },
                    W = function() {
                        var t, e = (t = f.F_[b].indexOf(g), {
                                immediateStep: f.F_[b][t - 1] || null,
                                nextStep: f.F_[b][t - 2] || null
                            }),
                            r = e.immediateStep,
                            a = e.nextStep;
                        if (!r) return n((0, S.Bq)("productType")), void n((0, S.IT)(null));
                        n((0, S.Td)(R[r])), n((0, S.Bq)(r)), n((0, S.IT)(a))
                    },
                    $ = function(t) {
                        n((0, S.IR)(t)), F(E(E({}, x), t))
                    },
                    K = function() {
                        var t = (0, a.Z)(c().mark((function t(e) {
                            var r, a, u, i, l, v, p, f, y;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.productData, a = void 0 === r ? {} : r, u = e.image, i = void 0 === u ? void 0 : u, l = function() {
                                            n((0, d.d)({
                                                title: "Product created successfully!",
                                                icon: s.f8,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), H()
                                        }, t.prev = 2, t.next = 5, X(E(E({}, i && {
                                            file: i,
                                            tag: "product"
                                        }), a)).unwrap();
                                    case 5:
                                        return v = t.sent, n((0, S.IR)(v)), t.abrupt("return", l());
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(2), console.log("error", null === t.t0 || void 0 === t.t0 || null === (p = t.t0.data) || void 0 === p || null === (p = p.error) || void 0 === p ? void 0 : p.message), n((0, d.d)({
                                            title: "Failed to create product!",
                                            icon: o.eH,
                                            message: null !== (f = null === t.t0 || void 0 === t.t0 || null === (y = t.t0.data) || void 0 === y || null === (y = y.error) || void 0 === y ? void 0 : y.message) && void 0 !== f ? f : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 10]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    tt = function() {
                        var t = (0, a.Z)(c().mark((function t() {
                            var e;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (null != x && x.id.startsWith("avtr_")) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.prev = 2, t.next = 5, N({
                                            avatarId: x.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 5:
                                        return t.abrupt("return", H());
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(2), n((0, d.d)({
                                            title: "Error",
                                            icon: o.eH,
                                            message: (null == z || null === (e = z.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) || "An error occurred while submitting your avatar for review.",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 8]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    et = function() {
                        n((0, S.bi)()), r()
                    };
                return l.createElement(p.JX, {
                    className: "tw-w-full"
                }, l.createElement(l.Suspense, {
                    fallback: l.createElement("div", null, "Loading...")
                }, function() {
                    switch (g) {
                        case "productType":
                            return l.createElement(j, {
                                onNext: H,
                                onClose: et,
                                hasAvatarSellerPermission: Y
                            });
                        case "productDetails":
                            return "avatar" === b ? l.createElement(C, {
                                disabled: !0,
                                type: b,
                                onDataChange: $,
                                user: i,
                                onNext: function(t) {
                                    return H()
                                },
                                onPrevious: function(t) {
                                    return W()
                                },
                                onClose: et
                            }) : l.createElement(q, {
                                type: b,
                                onDataChange: $,
                                user: i,
                                onSubmit: K,
                                onClose: et
                            });
                        case "productReviewSumbit":
                            return l.createElement(k, {
                                onPrevious: W,
                                avatar: x,
                                onSubmit: tt
                            });
                        case "productReviewSubmitted":
                            return l.createElement(D, {
                                onClose: et
                            });
                        case "productCreated":
                            return l.createElement(P, {
                                onClose: et
                            });
                        default:
                            return null
                    }
                }()))
            }
        },
        21538: (t, e, r) => {
            r.d(e, {
                C0: () => x,
                CO: () => b,
                Cm: () => I,
                EA: () => m,
                F6: () => g,
                GG: () => f,
                Gy: () => P,
                LQ: () => A,
                X8: () => y,
                ak: () => T,
                cq: () => S,
                lx: () => w,
                ve: () => h,
                x8: () => O
            });
            var a = r(42138),
                n = r(15861),
                u = r(4942),
                o = r(64687),
                s = r.n(o),
                i = r(61509);

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return l(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
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
                var u, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, u = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw u
                        }
                    }
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a
            }

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(r), !0).forEach((function(e) {
                        (0, u.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var p = i.S.injectEndpoints({
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
                                    var e = t.avatarId,
                                        r = t.data;
                                    return {
                                        url: "/avatars/".concat(e),
                                        method: "PUT",
                                        body: d(d(d({}, r), null !== r.styles.primary ? {
                                            primaryStyle: r.styles.primary
                                        } : {}), null !== r.styles.secondary ? {
                                            secondaryStyle: r.styles.secondary
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(t) {
                                    t.avatarId;
                                    return [{
                                        type: "Avatar"
                                    }]
                                }))
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
                                        n = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: "".concat(a, "-").concat(n ? "withListingData" : "")
                                    }]
                                }
                            }),
                            setAvatarPublic: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "public"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(t) {
                                    return [{
                                        type: "Avatar",
                                        id: t.avatarId
                                    }]
                                }))
                            }),
                            setAvatarPrivate: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "private"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(t) {
                                    return [{
                                        type: "Avatar",
                                        id: t.avatarId
                                    }]
                                }))
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
                                invalidatesTags: (0, i.T)((function(t) {
                                    return [{
                                        type: "Avatar",
                                        id: t.avatarId
                                    }]
                                }))
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
                            wearAvatar: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            enqueueImpostor: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(t) {
                                    return [{
                                        type: "Avatar",
                                        id: t.avatarId
                                    }]
                                }))
                            }),
                            deleteImpostors: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(t) {
                                    return [{
                                        type: "Avatar",
                                        id: t.avatarId
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
                                queryFn: (r = (0, n.Z)(s().mark((function t(e, r, n, u) {
                                    var o, i, c, l, v, d, p, f, y, m, g, b, w, A, h, O, S, T, I, P, x, E, j, q, C, k, D;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                o = e.sort, i = void 0 === o ? "updated" : o, c = e.order, l = void 0 === c ? "descending" : c, v = e.releaseStatus, d = void 0 === v ? "all" : v, p = e.user, f = void 0 === p ? "me" : p, y = e.organization, m = void 0 === y ? "vrchat" : y, g = e.n, b = void 0 === g ? 20 : g, w = e.featured, A = e.userId, h = e.search, O = e.tag, S = e.notag, T = e.platform, I = e.maxUnityVersion, P = e.minUnityVersion, x = e.exactUnityVersion, E = e.minAssetVersion, j = e.maxAssetVersion, q = e.exactAssetVersion, C = [], k = 0;
                                            case 3:
                                                return t.next = 6, u({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: q,
                                                        exactUnityVersion: x,
                                                        featured: w,
                                                        maxAssetVersion: j,
                                                        maxUnityVersion: I,
                                                        minAssetVersion: E,
                                                        minUnityVersion: P,
                                                        n: b,
                                                        notag: S,
                                                        offset: k,
                                                        order: l,
                                                        organization: m,
                                                        platform: T,
                                                        releaseStatus: d,
                                                        search: h,
                                                        sort: i,
                                                        tag: O,
                                                        user: f,
                                                        userId: A
                                                    }
                                                });
                                            case 6:
                                                if (!(D = t.sent).error) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: D.error
                                                });
                                            case 9:
                                                if (!(D.data.length > 0)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return C.push.apply(C, (0, a.Z)(D.data)), k += b, t.abrupt("continue", 3);
                                            case 13:
                                                return t.abrupt("break", 16);
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: C
                                                });
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), function(t, e, a, n) {
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
                                queryFn: (e = (0, n.Z)(s().mark((function t() {
                                    var e, r, n, u, o, i, l, v, d, p, f, y, m, g = arguments;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = (e = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, n = e.tags, u = e.userId, o = e.groups, i = void 0 === o ? [] : o, l = g.length > 3 ? g[3] : void 0, v = [], d = c(r ? [r] : i), t.prev = 7, d.s();
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
                                                        tags: n,
                                                        userId: u
                                                    }
                                                });
                                            case 15:
                                                if (!(m = t.sent).error) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: m.error
                                                });
                                            case 18:
                                                if (!(m.data.length > 0)) {
                                                    t.next = 22;
                                                    break
                                                }
                                                return v.push.apply(v, (0, a.Z)(m.data)), y += 50, t.abrupt("continue", 12);
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
                                    }), t, null, [
                                        [7, 29, 32, 35]
                                    ])
                                }))), function() {
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
                    addTagTypes: ["Avatars", "FavoriteAvatars"]
                }),
                f = p.useDeleteAvatarMutation,
                y = p.useDeleteImpostorsMutation,
                m = p.useEnqueueImpostorMutation,
                g = p.useGetAllAvatarsQuery,
                b = p.useGetAllAvatarStylesQuery,
                w = p.useGetAllFavoriteAvatarsQuery,
                A = p.useGetAvatarQuery,
                h = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                O = p.useSelectAvatarMutation,
                S = p.useSetAvatarPrivateMutation,
                T = p.useSetAvatarPublicMutation,
                I = p.useSetAvatarTagsMutation,
                P = p.useWearAvatarMutation,
                x = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=1006004243ce7574cc21306740c9c94fe5eefa4f8d12c48c413279824ebd3be1.js.map