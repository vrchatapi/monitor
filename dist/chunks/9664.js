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
                            getAvatarAssetReviewsById: e.query({
                                query: function(e) {
                                    return {
                                        url: "/assetReviews/avatarProduct",
                                        params: {
                                            avatarId: e.avatarId
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "AssetReviewsAvatar",
                                        id: r.avatarId
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
                h = (w.useGetAssetReviewsListQuery, w.useGetAvatarAssetReviewsByIdQuery, w.useSubmitAvatarForAssetReviewMutation),
                A = r(22202),
                O = r(67978),
                S = r(43683),
                T = r(67263),
                I = r(79655);
            const P = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    a = (0, v.v9)((function(e) {
                        return e.productFlow
                    })).currentProduct;
                return a ? l.createElement(p.JX, {
                    className: "tw-items-center tw-text-center tw-gap-5"
                }, l.createElement(p.pw, {
                    imageId: a.imageId,
                    alt: a.displayName,
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
                }, "Done"))) : null
            };

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
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
                    T = (0, l.useState)(w || {}),
                    I = (0, u.Z)(T, 2),
                    x = I[0],
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
                    M = h(),
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
                        var e, t = (e = f.F_[b].indexOf(g), f.F_[b][e + 1] || g);
                        n((0, S.Td)(R[t])), n((0, S.Bq)(t))
                    },
                    W = function() {
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
                        n((0, S.IR)(e)), F(E(E({}, x), e))
                    },
                    K = function() {
                        var e = (0, a.Z)(c().mark((function e() {
                            var t, r, a, u, i, l, v, p = arguments;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = p.length > 0 && void 0 !== p[0] ? p[0] : {}, r = p.length > 1 && void 0 !== p[1] ? p[1] : void 0, a = function() {
                                            n((0, d.d)({
                                                title: "Product created successfully!",
                                                icon: s.f8,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), H()
                                        }, e.prev = 3, e.next = 6, X(E(E({}, null !== r ? {
                                            file: r,
                                            tag: "product"
                                        } : {}), t)).unwrap();
                                    case 6:
                                        return u = e.sent, n((0, S.IR)(u)), e.abrupt("return", a());
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(3), console.log("error", null === (i = z.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), n((0, d.d)({
                                            title: "Failed to create product!",
                                            icon: o.eH,
                                            message: null !== (l = null === (v = z.data) || void 0 === v || null === (v = v.error) || void 0 === v ? void 0 : v.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 11]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function() {
                        var e = (0, a.Z)(c().mark((function e() {
                            var t;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != x && x.id.startsWith("avtr_")) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, N({
                                            avatarId: x.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 5:
                                        return e.abrupt("return", H());
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2), n((0, d.d)({
                                            title: "Error",
                                            icon: o.eH,
                                            message: (null == z || null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "An error occurred while submitting your avatar for review.",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 8]
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
                                onNext: H,
                                onClose: te,
                                hasAvatarSellerPermission: Y
                            });
                        case "productDetails":
                            return "avatar" === b ? l.createElement(C, {
                                disabled: !0,
                                type: b,
                                onDataChange: $,
                                user: i,
                                onNext: function(e) {
                                    return H()
                                },
                                onPrevious: function(e) {
                                    return W()
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
                            return l.createElement(k, {
                                onPrevious: W,
                                avatar: x,
                                onSubmit: ee
                            });
                        case "productReviewSubmitted":
                            return l.createElement(D, {
                                onClose: te
                            });
                        case "productCreated":
                            return l.createElement(P, {
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
                C0: () => x,
                CO: () => b,
                Cm: () => I,
                EA: () => m,
                F6: () => g,
                GG: () => f,
                Gy: () => P,
                LQ: () => h,
                X8: () => y,
                ak: () => T,
                cq: () => S,
                lx: () => w,
                ve: () => A,
                x8: () => O
            });
            var a = r(42138),
                n = r(15861),
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
                                    var t = e.avatarId,
                                        r = e.data;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: d(d(d({}, r), null !== r.styles.primary ? {
                                            primaryStyle: r.styles.primary
                                        } : {}), null !== r.styles.secondary ? {
                                            secondaryStyle: r.styles.secondary
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(e) {
                                    e.avatarId;
                                    return [{
                                        type: "Avatar"
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
                                        n = r.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: "".concat(a, "-").concat(n ? "withListingData" : "")
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
                                invalidatesTags: (0, i.T)((function(e) {
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
                                invalidatesTags: (0, i.T)((function(e) {
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
                                invalidatesTags: (0, i.T)((function(e) {
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
                                invalidatesTags: ["CurrentAvatar", "Avatar"]
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
                                invalidatesTags: (0, i.T)((function(e) {
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
                                invalidatesTags: (0, i.T)((function(e) {
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
                                queryFn: (r = (0, n.Z)(s().mark((function e(t, r, n, u) {
                                    var o, i, c, l, v, d, p, f, y, m, g, b, w, h, A, O, S, T, I, P, x, E, j, q, C, k, D;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.sort, i = void 0 === o ? "updated" : o, c = t.order, l = void 0 === c ? "descending" : c, v = t.releaseStatus, d = void 0 === v ? "all" : v, p = t.user, f = void 0 === p ? "me" : p, y = t.organization, m = void 0 === y ? "vrchat" : y, g = t.n, b = void 0 === g ? 20 : g, w = t.featured, h = t.userId, A = t.search, O = t.tag, S = t.notag, T = t.platform, I = t.maxUnityVersion, P = t.minUnityVersion, x = t.exactUnityVersion, E = t.minAssetVersion, j = t.maxAssetVersion, q = t.exactAssetVersion, C = [], k = 0;
                                            case 3:
                                                return e.next = 6, u({
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
                                                        search: A,
                                                        sort: i,
                                                        tag: O,
                                                        user: f,
                                                        userId: h
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
                                                return C.push.apply(C, (0, a.Z)(D.data)), k += b, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: C
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
                                queryFn: (t = (0, n.Z)(s().mark((function e() {
                                    var t, r, n, u, o, i, l, v, d, p, f, y, m, g = arguments;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, n = t.tags, u = t.userId, o = t.groups, i = void 0 === o ? [] : o, l = g.length > 3 ? g[3] : void 0, v = [], d = c(r ? [r] : i), e.prev = 7, d.s();
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
                                                        tags: n,
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
                                                return v.push.apply(v, (0, a.Z)(m.data)), y += 50, e.abrupt("continue", 12);
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
                    addTagTypes: ["Avatars", "FavoriteAvatars"]
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
                S = p.useSetAvatarPrivateMutation,
                T = p.useSetAvatarPublicMutation,
                I = p.useSetAvatarTagsMutation,
                P = p.useWearAvatarMutation,
                x = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=d80768089f74d729fba2053a0e020c23d36855bfe49c25986195736110eee869.js.map