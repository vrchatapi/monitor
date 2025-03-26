"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9664], {
        41727: (t, e, r) => {
            r.d(e, {
                Z: () => R
            });
            var a = r(15861),
                n = r(4942),
                u = r(54546),
                o = r(76553),
                i = r(6811),
                s = r(64687),
                c = r.n(s),
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
                            getAssetReviewById: t.query({
                                query: function(t) {
                                    var e = t.assetReviewId;
                                    return {
                                        url: "/assetReview/".concat(e)
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    return [{
                                        type: "AssetReview",
                                        id: r.assetReviewId
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
                h = (w.useGetAssetReviewsListQuery, w.useSubmitAvatarForAssetReviewMutation),
                A = (w.useGetAssetReviewByIdQuery, r(22202)),
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
                L = {
                    productDetails: "Create Product",
                    productReviewSumbit: "Submit for Review",
                    productCreated: "Product Created",
                    productReviewSubmitted: null
                };
            const R = function(t) {
                var e = t.onClose,
                    r = void 0 === e ? function() {} : e,
                    n = (0, v.I0)(),
                    s = (0, y.Tu)().user,
                    m = (0, v.v9)((function(t) {
                        return t.productFlow
                    })),
                    g = m.currentStep,
                    b = m.productType,
                    w = m.currentProduct,
                    T = (0, l.useState)(w || {}),
                    I = (0, u.Z)(T, 2),
                    x = I[0],
                    R = I[1];
                (0, l.useEffect)((function() {
                    g || n((0, S.Bq)("productType"))
                }), []);
                var F = (0, A.q7)({
                        skip: !s
                    }),
                    U = F.data,
                    V = F.isLoading,
                    Z = F.isSuccess,
                    M = h(),
                    N = (0, u.Z)(M, 2),
                    Q = N[0],
                    G = N[1],
                    z = (G.isLoading, G.isError, G.error),
                    W = (0, O.qX)(),
                    _ = (0, u.Z)(W, 2),
                    B = _[0],
                    X = _[1],
                    J = (X.isSuccess, X.isLoading, X.isError, X.error, (0, l.useMemo)((function() {
                        return !(V || !Z) && (null == U ? void 0 : U.includes("permission-sell-avatar-products"))
                    }), [V])),
                    Y = function() {
                        var t, e = (t = f.F_[b].indexOf(g), f.F_[b][t + 1] || g);
                        n((0, S.Td)(L[e])), n((0, S.Bq)(e))
                    },
                    H = function() {
                        var t, e = (t = f.F_[b].indexOf(g), {
                                immediateStep: f.F_[b][t - 1] || null,
                                nextStep: f.F_[b][t - 2] || null
                            }),
                            r = e.immediateStep,
                            a = e.nextStep;
                        if (!r) return n((0, S.Bq)("productType")), void n((0, S.IT)(null));
                        n((0, S.Td)(L[r])), n((0, S.Bq)(r)), n((0, S.IT)(a))
                    },
                    $ = function(t) {
                        n((0, S.IR)(t)), R(E(E({}, x), t))
                    },
                    K = function() {
                        var t = (0, a.Z)(c().mark((function t(e) {
                            var r, a, u, s, l, v, p, f, y;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.productData, a = void 0 === r ? {} : r, u = e.image, s = void 0 === u ? void 0 : u, l = function() {
                                            n((0, d.d)({
                                                title: "Product created successfully!",
                                                icon: i.f8,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), Y()
                                        }, t.prev = 2, t.next = 5, B(E(E({}, s && {
                                            file: s,
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
                                        if ("public" !== (null == x ? void 0 : x.releaseStatus)) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.prev = 4, t.next = 7, Q({
                                            avatarId: x.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 7:
                                        return t.abrupt("return", Y());
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(4), n((0, d.d)({
                                            title: "Error",
                                            icon: o.eH,
                                            message: (null == z || null === (e = z.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) || "An error occurred while submitting your avatar for review.",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [4, 10]
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
                                onNext: Y,
                                onClose: et,
                                hasAvatarSellerPermission: J
                            });
                        case "productDetails":
                            return "avatar" === b ? l.createElement(k, {
                                disabled: !0,
                                type: b,
                                onDataChange: $,
                                user: s,
                                onNext: function(t) {
                                    return Y()
                                },
                                onPrevious: function(t) {
                                    return H()
                                },
                                onClose: et
                            }) : l.createElement(q, {
                                type: b,
                                onDataChange: $,
                                user: s,
                                onSubmit: K,
                                onClose: et
                            });
                        case "productReviewSumbit":
                            return l.createElement(D, {
                                onPrevious: H,
                                avatar: x,
                                onSubmit: tt
                            });
                        case "productReviewSubmitted":
                            return l.createElement(C, {
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
                Cm: () => P,
                EA: () => m,
                F6: () => g,
                GG: () => f,
                LQ: () => h,
                X8: () => y,
                ak: () => I,
                cq: () => T,
                eP: () => S,
                lx: () => w,
                ve: () => A,
                x8: () => O
            });
            var a = r(15861),
                n = r(42138),
                u = r(4942),
                o = r(64687),
                i = r.n(o),
                s = r(61509);

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
                    i = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        i = !0, u = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (i) throw u
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
            var p = s.S.injectEndpoints({
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
                                        body: d(d(d(d({}, r), null !== r.styles.primary ? {
                                            primaryStyle: r.styles.primary
                                        } : {}), null !== r.styles.secondary ? {
                                            secondaryStyle: r.styles.secondary
                                        } : {}), null !== r.acknowledgements ? {
                                            acknowledgements: r.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                            enqueueImpostor: t.mutation({
                                query: function(t) {
                                    var e = t.avatarId;
                                    return {
                                        url: "/avatars/".concat(e, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                                invalidatesTags: (0, s.T)((function(t) {
                                    var e = t.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: e
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: e
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
                                queryFn: (r = (0, a.Z)(i().mark((function t(e, r, a, u) {
                                    var o, s, c, l, v, d, p, f, y, m, g, b, w, h, A, O, S, T, I, P, x, E, j, q, k, D, C;
                                    return i().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                o = e.sort, s = void 0 === o ? "updated" : o, c = e.order, l = void 0 === c ? "descending" : c, v = e.releaseStatus, d = void 0 === v ? "all" : v, p = e.user, f = void 0 === p ? "me" : p, y = e.organization, m = void 0 === y ? "vrchat" : y, g = e.n, b = void 0 === g ? 20 : g, w = e.featured, h = e.userId, A = e.search, O = e.tag, S = e.notag, T = e.platform, I = e.maxUnityVersion, P = e.minUnityVersion, x = e.exactUnityVersion, E = e.minAssetVersion, j = e.maxAssetVersion, q = e.exactAssetVersion, k = [], D = 0;
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
                                                        offset: D,
                                                        order: l,
                                                        organization: m,
                                                        platform: T,
                                                        releaseStatus: d,
                                                        search: A,
                                                        sort: s,
                                                        tag: O,
                                                        user: f,
                                                        userId: h
                                                    }
                                                });
                                            case 6:
                                                if (!(C = t.sent).error) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: C.error
                                                });
                                            case 9:
                                                if (!(C.data.length > 0)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return k.push.apply(k, (0, n.Z)(C.data)), D += b, t.abrupt("continue", 3);
                                            case 13:
                                                return t.abrupt("break", 16);
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: k
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
                                queryFn: (e = (0, a.Z)(i().mark((function t() {
                                    var e, r, a, u, o, s, l, v, d, p, f, y, m, g = arguments;
                                    return i().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = (e = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, a = e.tags, u = e.userId, o = e.groups, s = void 0 === o ? [] : o, l = g.length > 3 ? g[3] : void 0, v = [], d = c(r ? [r] : s), t.prev = 7, d.s();
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
                                                return v.push.apply(v, (0, n.Z)(m.data)), y += 50, t.abrupt("continue", 12);
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
                T = p.useSetAvatarPrivateMutation,
                I = p.useSetAvatarPublicMutation,
                P = p.useSetAvatarTagsMutation,
                x = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=477f8eba390724fdc52db798821ad33f5aef99a70264b101365d8978cd01212a.js.map