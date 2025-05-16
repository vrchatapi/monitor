"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5842], {
        19637: (e, t, r) => {
            r.d(t, {
                Z: () => k
            });
            var a = r(15861),
                n = r(4942),
                u = r(54546),
                o = r(76553),
                s = r(6811),
                i = r(64687),
                c = r.n(i),
                l = r(67294),
                d = r(32981),
                v = r(64258),
                p = r(14411),
                f = r(95896),
                y = r(17383),
                m = r(96882),
                g = r(22202),
                b = r(67978),
                w = r(43683),
                h = r(67263),
                A = r(79655);
            const O = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    a = (0, d.v9)((function(e) {
                        return e.productFlow
                    })).currentProduct;
                if (!a) return null;
                var n = a.product,
                    u = a.file;
                return l.createElement(p.JX, {
                    className: "tw-items-center tw-text-center tw-gap-5"
                }, l.createElement(p.pw, {
                    imageId: n.imageId || u || null,
                    alt: n.displayName,
                    fallbackSrc: h,
                    className: "tw-w-[150px] tw-h-[150px]",
                    fitToCover: !0
                }), l.createElement(p.JX, {
                    className: "tw-max-w-[500px]"
                }, l.createElement("h4", null, "Product Created!"), l.createElement("p", null, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), l.createElement(p.X2, {
                    className: "tw-gap-3 tw-w-full"
                }, l.createElement(p.zx, {
                    neutral: !0,
                    containerClasses: "tw-flex-1"
                }, l.createElement(A.rU, {
                    to: "https://docs.vrchat.com/docs",
                    target: "_blank"
                }, "View Docs")), l.createElement(p.zx, {
                    onClick: r,
                    containerClasses: "tw-flex-1"
                }, "Done")))
            };

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x = (0, l.lazy)((function() {
                    return r.e(8536).then(r.bind(r, 18536))
                })),
                T = (0, l.lazy)((function() {
                    return Promise.all([r.e(3261), r.e(2621)]).then(r.bind(r, 72621))
                })),
                E = (0, l.lazy)((function() {
                    return r.e(2172).then(r.bind(r, 42172))
                })),
                P = (0, l.lazy)((function() {
                    return r.e(1899).then(r.bind(r, 71899))
                })),
                j = (0, l.lazy)((function() {
                    return r.e(3871).then(r.bind(r, 3871))
                })),
                q = {
                    productDetails: "Create Product",
                    productReviewSumbit: "Submit for Review",
                    productCreated: "Product Created",
                    productReviewSubmitted: null
                };
            const k = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    n = (0, d.I0)(),
                    i = (0, y.Tu)().user,
                    h = (0, d.v9)((function(e) {
                        return e.productFlow
                    })),
                    A = h.currentStep,
                    S = h.productType,
                    k = h.currentProduct,
                    D = (0, l.useState)(k || {}),
                    C = (0, u.Z)(D, 2),
                    R = C[0],
                    F = C[1];
                (0, l.useEffect)((function() {
                    A || n((0, w.Bq)("productType"))
                }), []);
                var L = (0, g.q7)({
                        skip: !i
                    }),
                    U = L.data,
                    V = L.isLoading,
                    Z = L.isSuccess,
                    N = (0, m.h_)(),
                    Q = (0, u.Z)(N, 2),
                    _ = Q[0],
                    G = Q[1],
                    M = (G.isLoading, G.isError, G.error),
                    z = (0, b.qX)(),
                    W = (0, u.Z)(z, 2),
                    B = W[0],
                    X = W[1],
                    J = (X.isSuccess, X.isLoading, X.isError, X.error, (0, l.useMemo)((function() {
                        return !(V || !Z) && (null == U ? void 0 : U.includes("permission-sell-avatar-products"))
                    }), [V])),
                    Y = function() {
                        var e, t = (e = f.F_[S].indexOf(A), f.F_[S][e + 1] || A);
                        n((0, w.Td)(q[t])), n((0, w.Bq)(t))
                    },
                    H = function() {
                        var e, t = (e = f.F_[S].indexOf(A), {
                                immediateStep: f.F_[S][e - 1] || null,
                                nextStep: f.F_[S][e - 2] || null
                            }),
                            r = t.immediateStep,
                            a = t.nextStep;
                        if (!r) return n((0, w.Bq)("productType")), void n((0, w.IT)(null));
                        n((0, w.Td)(q[r])), n((0, w.Bq)(r)), n((0, w.IT)(a))
                    },
                    $ = function(e) {
                        n((0, w.IR)(e)), F(I(I({}, R), e))
                    },
                    K = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, a, u, i, l, d, p, f, y;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.productData, a = void 0 === r ? {} : r, u = t.image, i = void 0 === u ? void 0 : u, l = function() {
                                            n((0, v.d)({
                                                title: "Product created successfully!",
                                                icon: s.f8,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), Y()
                                        }, e.prev = 2, e.next = 5, B(I(I({}, i && {
                                            file: i,
                                            tag: "product"
                                        }), a)).unwrap();
                                    case 5:
                                        return d = e.sent, n((0, w.IR)(d)), e.abrupt("return", l());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), console.log("error", null === e.t0 || void 0 === e.t0 || null === (p = e.t0.data) || void 0 === p || null === (p = p.error) || void 0 === p ? void 0 : p.message), n((0, v.d)({
                                            title: "Failed to create product!",
                                            icon: o.eH,
                                            message: null !== (f = null === e.t0 || void 0 === e.t0 || null === (y = e.t0.data) || void 0 === y || null === (y = y.error) || void 0 === y ? void 0 : y.message) && void 0 !== f ? f : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function() {
                        var e = (0, a.Z)(c().mark((function e() {
                            var t;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != R && R.id.startsWith("avtr_")) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ("public" !== (null == R ? void 0 : R.releaseStatus)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, _({
                                            avatarId: R.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 7:
                                        return e.abrupt("return", Y());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(4), n((0, v.d)({
                                            title: "Error",
                                            icon: o.eH,
                                            message: (null == M || null === (t = M.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "An error occurred while submitting your avatar for review.",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        n((0, w.bi)()), r()
                    };
                return l.createElement(p.JX, {
                    className: "tw-w-full"
                }, l.createElement(l.Suspense, {
                    fallback: l.createElement("div", null, "Loading...")
                }, function() {
                    switch (A) {
                        case "productType":
                            return l.createElement(x, {
                                onNext: Y,
                                onClose: te,
                                hasAvatarSellerPermission: J
                            });
                        case "productDetails":
                            return "avatar" === S ? l.createElement(E, {
                                disabled: !0,
                                type: S,
                                onDataChange: $,
                                user: i,
                                onNext: function(e) {
                                    return Y()
                                },
                                onPrevious: function(e) {
                                    return H()
                                },
                                onClose: te
                            }) : l.createElement(T, {
                                type: S,
                                onDataChange: $,
                                user: i,
                                onSubmit: K,
                                onClose: te
                            });
                        case "productReviewSumbit":
                            return l.createElement(P, {
                                onPrevious: H,
                                avatar: R,
                                onSubmit: ee
                            });
                        case "productReviewSubmitted":
                            return l.createElement(j, {
                                onClose: te
                            });
                        case "productCreated":
                            return l.createElement(O, {
                                onClose: te
                            });
                        default:
                            return null
                    }
                }()))
            }
        },
        96882: (e, t, r) => {
            r.d(t, {
                h_: () => c,
                i4: () => i
            });
            var a = r(4942),
                n = r(64358);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var s = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAssetReviewsList: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 100 : t,
                                        a = e.pageValue,
                                        u = void 0 === a ? 1 : a,
                                        s = e.hydrateAsset,
                                        i = void 0 !== s && s,
                                        c = e.reviewStatus;
                                    return {
                                        url: "assetReviews",
                                        params: o({
                                            authorId: e.authorId,
                                            hydrateAsset: i,
                                            reviewStatus: c
                                        }, (0, n.ue)({
                                            n: r,
                                            pageValue: u
                                        }))
                                    }
                                },
                                providesTags: ["AssetReviewsList"]
                            }),
                            getAssetReviewById: e.query({
                                query: function(e) {
                                    var t = e.assetReviewId;
                                    return {
                                        url: "/assetReview/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "AssetReview",
                                        id: r.assetReviewId
                                    }]
                                }
                            }),
                            submitAvatarForAssetReview: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId,
                                        r = e.submitNotes;
                                    return {
                                        url: "/assetReviews/avatarProduct",
                                        body: {
                                            avatarId: t,
                                            submitNotes: void 0 === r ? "" : r
                                        },
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
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
                i = s.useGetAssetReviewsListQuery,
                c = s.useSubmitAvatarForAssetReviewMutation;
            s.useGetAssetReviewByIdQuery
        },
        21538: (e, t, r) => {
            r.d(t, {
                C0: () => x,
                CO: () => b,
                Cm: () => I,
                EA: () => m,
                F6: () => g,
                GG: () => f,
                LQ: () => h,
                X8: () => y,
                eP: () => S,
                lx: () => w,
                ve: () => A,
                x8: () => O
            });
            var a = r(15861),
                n = r(42138),
                u = r(4942),
                o = r(64687),
                s = r.n(o),
                i = r(61509);

            function c(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return l(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
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
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, u = e
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

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, u.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var p = i.S.injectEndpoints({
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
                                    var t, r, a, n, u = e.avatarId,
                                        o = e.data;
                                    return {
                                        url: "/avatars/".concat(u),
                                        method: "PUT",
                                        body: v(v(v(v({}, o), null != o && null !== (t = o.styles) && void 0 !== t && t.primary ? {
                                            primaryStyle: null == o || null === (r = o.styles) || void 0 === r ? void 0 : r.primary
                                        } : {}), null != o && null !== (a = o.styles) && void 0 !== a && a.secondary ? {
                                            secondaryStyle: null == o || null === (n = o.styles) || void 0 === n ? void 0 : n.secondary
                                        } : {}), null != o && o.acknowledgements ? {
                                            acknowledgements: null == o ? void 0 : o.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                }))
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
                                        a = void 0 !== r && r;
                                    return {
                                        url: "/avatars/".concat(t),
                                        params: {
                                            getListingData: a
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var a = r.avatarId,
                                        u = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: a
                                    }].concat((0, n.Z)(u ? [{
                                        type: "AvatarWithListingData",
                                        id: a
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
                                invalidatesTags: (0, i.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
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
                                invalidatesTags: (0, i.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
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
                                invalidatesTags: (0, i.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
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
                                queryFn: (r = (0, a.Z)(s().mark((function e(t, r, a, u) {
                                    var o, i, c, l, d, v, p, f, y, m, g, b, w, h, A, O, S, I, x, T, E, P, j, q, k, D, C;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.sort, i = void 0 === o ? "updated" : o, c = t.order, l = void 0 === c ? "descending" : c, d = t.releaseStatus, v = void 0 === d ? "all" : d, p = t.user, f = void 0 === p ? "me" : p, y = t.organization, m = void 0 === y ? "vrchat" : y, g = t.n, b = void 0 === g ? 20 : g, w = t.featured, h = t.userId, A = t.search, O = t.tag, S = t.notag, I = t.platform, x = t.maxUnityVersion, T = t.minUnityVersion, E = t.exactUnityVersion, P = t.minAssetVersion, j = t.maxAssetVersion, q = t.exactAssetVersion, k = [], D = 0;
                                            case 3:
                                                return e.next = 6, u({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: q,
                                                        exactUnityVersion: E,
                                                        featured: w,
                                                        maxAssetVersion: j,
                                                        maxUnityVersion: x,
                                                        minAssetVersion: P,
                                                        minUnityVersion: T,
                                                        n: b,
                                                        notag: S,
                                                        offset: D,
                                                        order: l,
                                                        organization: m,
                                                        platform: I,
                                                        releaseStatus: v,
                                                        search: A,
                                                        sort: i,
                                                        tag: O,
                                                        user: f,
                                                        userId: h
                                                    }
                                                });
                                            case 6:
                                                if (!(C = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: C.error
                                                });
                                            case 9:
                                                if (!(C.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return k.push.apply(k, (0, n.Z)(C.data)), D += b, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: k
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, a, n) {
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
                                queryFn: (t = (0, a.Z)(s().mark((function e() {
                                    var t, r, a, u, o, i, l, d, v, p, f, y, m, g = arguments;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, a = t.tags, u = t.userId, o = t.groups, i = void 0 === o ? [] : o, l = g.length > 3 ? g[3] : void 0, d = [], v = c(r ? [r] : i), e.prev = 7, v.s();
                                            case 9:
                                                if ((p = v.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                f = p.value, y = 0;
                                            case 12:
                                                return e.next = 15, l({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: y,
                                                        tag: null != r ? r : f,
                                                        tags: a,
                                                        userId: u
                                                    }
                                                });
                                            case 15:
                                                if (!(m = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: m.error
                                                });
                                            case 18:
                                                if (!(m.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return d.push.apply(d, (0, n.Z)(m.data)), y += 50, e.abrupt("continue", 12);
                                            case 22:
                                                return e.abrupt("break", 25);
                                            case 25:
                                                e.next = 9;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(7), v.e(e.t0);
                                            case 32:
                                                return e.prev = 32, v.f(), e.finish(32);
                                            case 35:
                                                return e.abrupt("return", {
                                                    data: d
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
                    addTagTypes: ["Avatar", "AvatarWithListingData", "FavoriteAvatars"]
                }),
                f = p.useDeleteAvatarMutation,
                y = p.useDeleteImpostorsMutation,
                m = p.useEnqueueImpostorMutation,
                g = p.useGetAllAvatarsQuery,
                b = p.useGetAllAvatarStylesQuery,
                w = p.useGetAllFavoriteAvatarsQuery,
                h = p.useGetAvatarQuery,
                A = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                O = p.useSelectAvatarMutation,
                S = p.useSelectFallbackAvatarMutation,
                I = p.useSetAvatarTagsMutation,
                x = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=5815895063a053aa9910198f5b30baac73a8215d3124e9ca3205a7b73312071c.js.map