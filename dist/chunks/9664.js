"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9664], {
        41727: (e, t, r) => {
            r.d(t, {
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

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var w = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAssetReviewsList: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 100 : t,
                                        a = e.pageValue,
                                        n = void 0 === a ? 1 : a,
                                        u = e.hydrateAsset;
                                    return {
                                        url: "assetReviews",
                                        params: b({
                                            hydrateAsset: void 0 !== u && u,
                                            reviewStatus: e.reviewStatus
                                        }, (0, m.ue)({
                                            n: r,
                                            pageValue: n
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
                h = (w.useGetAssetReviewsListQuery, w.useSubmitAvatarForAssetReviewMutation),
                A = (w.useGetAssetReviewByIdQuery, r(22202)),
                O = r(67978),
                S = r(43683),
                x = r(67263),
                I = r(79655);
            const T = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    a = (0, v.v9)((function(e) {
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
                    fallbackSrc: x,
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

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var j = (0, l.lazy)((function() {
                    return r.e(8536).then(r.bind(r, 18536))
                })),
                q = (0, l.lazy)((function() {
                    return Promise.all([r.e(3261), r.e(2621)]).then(r.bind(r, 72621))
                })),
                k = (0, l.lazy)((function() {
                    return r.e(2172).then(r.bind(r, 42172))
                })),
                D = (0, l.lazy)((function() {
                    return r.e(1899).then(r.bind(r, 71899))
                })),
                C = (0, l.lazy)((function() {
                    return r.e(3871).then(r.bind(r, 3871))
                })),
                R = {
                    productDetails: "Create Product",
                    productReviewSumbit: "Submit for Review",
                    productCreated: "Product Created",
                    productReviewSubmitted: null
                };
            const F = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    n = (0, v.I0)(),
                    i = (0, y.Tu)().user,
                    m = (0, v.v9)((function(e) {
                        return e.productFlow
                    })),
                    g = m.currentStep,
                    b = m.productType,
                    w = m.currentProduct,
                    x = (0, l.useState)(w || {}),
                    I = (0, u.Z)(x, 2),
                    E = I[0],
                    F = I[1];
                (0, l.useEffect)((function() {
                    g || n((0, S.Bq)("productType"))
                }), []);
                var L = (0, A.q7)({
                        skip: !i
                    }),
                    U = L.data,
                    V = L.isLoading,
                    Z = L.isSuccess,
                    N = h(),
                    Q = (0, u.Z)(N, 2),
                    G = Q[0],
                    M = Q[1],
                    z = (M.isLoading, M.isError, M.error),
                    _ = (0, O.qX)(),
                    W = (0, u.Z)(_, 2),
                    B = W[0],
                    X = W[1],
                    J = (X.isSuccess, X.isLoading, X.isError, X.error, (0, l.useMemo)((function() {
                        return !(V || !Z) && (null == U ? void 0 : U.includes("permission-sell-avatar-products"))
                    }), [V])),
                    Y = function() {
                        var e, t = (e = f.F_[b].indexOf(g), f.F_[b][e + 1] || g);
                        n((0, S.Td)(R[t])), n((0, S.Bq)(t))
                    },
                    H = function() {
                        var e, t = (e = f.F_[b].indexOf(g), {
                                immediateStep: f.F_[b][e - 1] || null,
                                nextStep: f.F_[b][e - 2] || null
                            }),
                            r = t.immediateStep,
                            a = t.nextStep;
                        if (!r) return n((0, S.Bq)("productType")), void n((0, S.IT)(null));
                        n((0, S.Td)(R[r])), n((0, S.Bq)(r)), n((0, S.IT)(a))
                    },
                    $ = function(e) {
                        n((0, S.IR)(e)), F(P(P({}, E), e))
                    },
                    K = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, a, u, i, l, v, p, f, y;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.productData, a = void 0 === r ? {} : r, u = t.image, i = void 0 === u ? void 0 : u, l = function() {
                                            n((0, d.d)({
                                                title: "Product created successfully!",
                                                icon: s.f8,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), Y()
                                        }, e.prev = 2, e.next = 5, B(P(P({}, i && {
                                            file: i,
                                            tag: "product"
                                        }), a)).unwrap();
                                    case 5:
                                        return v = e.sent, n((0, S.IR)(v)), e.abrupt("return", l());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), console.log("error", null === e.t0 || void 0 === e.t0 || null === (p = e.t0.data) || void 0 === p || null === (p = p.error) || void 0 === p ? void 0 : p.message), n((0, d.d)({
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
                                        if (null != E && E.id.startsWith("avtr_")) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ("public" !== (null == E ? void 0 : E.releaseStatus)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, G({
                                            avatarId: E.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 7:
                                        return e.abrupt("return", Y());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(4), n((0, d.d)({
                                            title: "Error",
                                            icon: o.eH,
                                            message: (null == z || null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "An error occurred while submitting your avatar for review.",
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
                                onNext: Y,
                                onClose: te,
                                hasAvatarSellerPermission: J
                            });
                        case "productDetails":
                            return "avatar" === b ? l.createElement(k, {
                                disabled: !0,
                                type: b,
                                onDataChange: $,
                                user: i,
                                onNext: function(e) {
                                    return Y()
                                },
                                onPrevious: function(e) {
                                    return H()
                                },
                                onClose: te
                            }) : l.createElement(q, {
                                type: b,
                                onDataChange: $,
                                user: i,
                                onSubmit: K,
                                onClose: te
                            });
                        case "productReviewSumbit":
                            return l.createElement(D, {
                                onPrevious: H,
                                avatar: E,
                                onSubmit: ee
                            });
                        case "productReviewSubmitted":
                            return l.createElement(C, {
                                onClose: te
                            });
                        case "productCreated":
                            return l.createElement(T, {
                                onClose: te
                            });
                        default:
                            return null
                    }
                }()))
            }
        },
        21538: (e, t, r) => {
            r.d(t, {
                C0: () => I,
                CO: () => b,
                Cm: () => x,
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

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        (0, u.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
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
                                        body: d(d(d(d({}, o), null != o && null !== (t = o.styles) && void 0 !== t && t.primary ? {
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
                                    var o, i, c, l, v, d, p, f, y, m, g, b, w, h, A, O, S, x, I, T, E, P, j, q, k, D, C;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.sort, i = void 0 === o ? "updated" : o, c = t.order, l = void 0 === c ? "descending" : c, v = t.releaseStatus, d = void 0 === v ? "all" : v, p = t.user, f = void 0 === p ? "me" : p, y = t.organization, m = void 0 === y ? "vrchat" : y, g = t.n, b = void 0 === g ? 20 : g, w = t.featured, h = t.userId, A = t.search, O = t.tag, S = t.notag, x = t.platform, I = t.maxUnityVersion, T = t.minUnityVersion, E = t.exactUnityVersion, P = t.minAssetVersion, j = t.maxAssetVersion, q = t.exactAssetVersion, k = [], D = 0;
                                            case 3:
                                                return e.next = 6, u({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: q,
                                                        exactUnityVersion: E,
                                                        featured: w,
                                                        maxAssetVersion: j,
                                                        maxUnityVersion: I,
                                                        minAssetVersion: P,
                                                        minUnityVersion: T,
                                                        n: b,
                                                        notag: S,
                                                        offset: D,
                                                        order: l,
                                                        organization: m,
                                                        platform: x,
                                                        releaseStatus: d,
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
                                    var t, r, a, u, o, i, l, v, d, p, f, y, m, g = arguments;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, a = t.tags, u = t.userId, o = t.groups, i = void 0 === o ? [] : o, l = g.length > 3 ? g[3] : void 0, v = [], d = c(r ? [r] : i), e.prev = 7, d.s();
                                            case 9:
                                                if ((p = d.n()).done) {
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
                                                return v.push.apply(v, (0, n.Z)(m.data)), y += 50, e.abrupt("continue", 12);
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
                                                    data: v
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
                x = p.useSetAvatarTagsMutation,
                I = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=2194c80a0b9cd105895a5aa2981cf555754a5ebcd52da4970c65c00fc6757efc.js.map