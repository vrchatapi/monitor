"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [217], {
        45123(e, t, r) {
            r.d(t, {
                A: () => q
            });
            var a = r(10467),
                n = r(64467),
                o = r(82544),
                u = r(34496),
                s = r(42217),
                i = r(54756),
                c = r.n(i),
                l = r(96540),
                v = r(6376),
                d = r(65950),
                p = r(71661),
                f = r(31069),
                y = r(78502),
                m = r(77596),
                g = r(13951),
                b = r(6457),
                A = r(89661),
                w = r(75171),
                h = r.n(w),
                O = r(84976);
            const S = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    a = (0, v.d4)(function(e) {
                        return e.productFlow
                    }).currentProduct;
                if (!a) return null;
                var n = a.product,
                    o = a.file;
                return l.createElement(p.fv, {
                    className: "tw-items-center tw-text-center tw-gap-5"
                }, l.createElement(p.Oo, {
                    imageId: n.imageId || o || null,
                    alt: n.displayName,
                    fallbackSrc: h(),
                    className: "tw-w-[150px] tw-h-[150px]",
                    fitToCover: !0
                }), l.createElement(p.fv, {
                    className: "tw-max-w-[500px]"
                }, l.createElement("h4", null, "Product Created!"), l.createElement("p", null, "Your udon product is all set! Continue in your Unity project. You will see this product available in your Udon products manager.")), l.createElement(p.fI, {
                    className: "tw-gap-3 tw-w-full"
                }, l.createElement(p.$n, {
                    neutral: !0,
                    containerClasses: "tw-flex-1"
                }, l.createElement(O.N_, {
                    to: "https://docs.vrchat.com/docs",
                    target: "_blank"
                }, "View Docs")), l.createElement(p.$n, {
                    onClick: r,
                    containerClasses: "tw-flex-1"
                }, "Done")))
            };

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var x = (0, l.lazy)(function() {
                    return r.e(2177).then(r.bind(r, 22177))
                }),
                I = (0, l.lazy)(function() {
                    return r.e(5771).then(r.bind(r, 15771))
                }),
                j = (0, l.lazy)(function() {
                    return r.e(9488).then(r.bind(r, 89488))
                }),
                T = (0, l.lazy)(function() {
                    return r.e(3986).then(r.bind(r, 3986))
                }),
                D = (0, l.lazy)(function() {
                    return r.e(172).then(r.bind(r, 60172))
                }),
                k = {
                    productDetails: "Create Product",
                    productReviewSumbit: "Submit for Review",
                    productCreated: "Product Created",
                    productReviewSubmitted: null
                };
            const q = function(e) {
                var t = e.onClose,
                    r = void 0 === t ? function() {} : t,
                    n = (0, v.wA)(),
                    i = (0, y.a$)().user,
                    w = (0, v.d4)(function(e) {
                        return e.productFlow
                    }),
                    h = w.currentStep,
                    O = w.productType,
                    P = w.currentProduct,
                    q = (0, l.useState)(P || {}),
                    R = (0, o.A)(q, 2),
                    C = R[0],
                    L = R[1];
                (0, l.useEffect)(function() {
                    h || n((0, A.EY)("productType"))
                }, []);
                var F = (0, g.w_)({
                        skip: !i
                    }),
                    V = F.data,
                    U = F.isLoading,
                    N = F.isSuccess,
                    G = (0, m.jy)(),
                    M = (0, o.A)(G, 2),
                    Q = M[0],
                    z = M[1],
                    W = (z.isLoading, z.isError, z.error),
                    Y = (0, b.Q$)(),
                    _ = (0, o.A)(Y, 2),
                    $ = _[0],
                    Z = _[1],
                    X = (Z.isSuccess, Z.isLoading, Z.isError, Z.error, (0, l.useMemo)(function() {
                        return !(U || !N) && (null == V ? void 0 : V.includes("permission-sell-avatar-products"))
                    }, [U])),
                    B = function() {
                        var e, t = (e = f.P7[O].indexOf(h), f.P7[O][e + 1] || h);
                        n((0, A.D6)(k[t])), n((0, A.EY)(t))
                    },
                    H = function() {
                        var e, t = (e = f.P7[O].indexOf(h), {
                                immediateStep: f.P7[O][e - 1] || null,
                                nextStep: f.P7[O][e - 2] || null
                            }),
                            r = t.immediateStep,
                            a = t.nextStep;
                        if (!r) return n((0, A.EY)("productType")), void n((0, A.ac)(null));
                        n((0, A.D6)(k[r])), n((0, A.EY)(r)), n((0, A.ac)(a))
                    },
                    J = function(e) {
                        n((0, A.xl)(e)), L(E(E({}, C), e))
                    },
                    K = function() {
                        var e = (0, a.A)(c().mark(function e(t) {
                            var r, a, o, i, l, v, p, f, y;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.productData, a = void 0 === r ? {} : r, o = t.image, i = void 0 === o ? void 0 : o, l = function() {
                                            n((0, d.X)({
                                                title: "Product created successfully!",
                                                icon: s.SG,
                                                message: "Your product has been created successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), B()
                                        }, e.prev = 2, e.next = 5, $(E(E({}, i && {
                                            file: i,
                                            tag: "product"
                                        }), a)).unwrap();
                                    case 5:
                                        return v = e.sent, n((0, A.xl)(v)), e.abrupt("return", l());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), console.log("error", null === e.t0 || void 0 === e.t0 || null === (p = e.t0.data) || void 0 === p || null === (p = p.error) || void 0 === p ? void 0 : p.message), n((0, d.X)({
                                            title: "Failed to create product!",
                                            icon: u.zp,
                                            message: null !== (f = null === e.t0 || void 0 === e.t0 || null === (y = e.t0.data) || void 0 === y || null === (y = y.error) || void 0 === y ? void 0 : y.message) && void 0 !== f ? f : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 10]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function() {
                        var e = (0, a.A)(c().mark(function e() {
                            var t;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != C && C.id.startsWith("avtr_")) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ("public" !== (null == C ? void 0 : C.releaseStatus)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, Q({
                                            avatarId: C.id,
                                            submitNotes: ""
                                        }).unwrap();
                                    case 7:
                                        return e.abrupt("return", B());
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(4), n((0, d.X)({
                                            title: "Error",
                                            icon: u.zp,
                                            message: (null == W || null === (t = W.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "An error occurred while submitting your avatar for review.",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        n((0, A.f6)()), r()
                    };
                return l.createElement(p.fv, {
                    className: "tw-w-full"
                }, l.createElement(l.Suspense, {
                    fallback: l.createElement("div", null, "Loading...")
                }, function() {
                    switch (h) {
                        case "productType":
                            return l.createElement(x, {
                                onNext: B,
                                onClose: te,
                                hasAvatarSellerPermission: X
                            });
                        case "productDetails":
                            return "avatar" === O ? l.createElement(j, {
                                disabled: !0,
                                type: O,
                                onDataChange: J,
                                user: i,
                                onNext: function(e) {
                                    return B()
                                },
                                onPrevious: function(e) {
                                    return H()
                                },
                                onClose: te
                            }) : l.createElement(I, {
                                type: O,
                                onDataChange: J,
                                user: i,
                                onSubmit: K,
                                onClose: te
                            });
                        case "productReviewSumbit":
                            return l.createElement(T, {
                                onPrevious: H,
                                avatar: C,
                                onSubmit: ee
                            });
                        case "productReviewSubmitted":
                            return l.createElement(D, {
                                onClose: te
                            });
                        case "productCreated":
                            return l.createElement(S, {
                                onClose: te
                            });
                        default:
                            return null
                    }
                }()))
            }
        },
        77596(e, t, r) {
            r.d(t, {
                jy: () => c,
                zs: () => i
            });
            var a = r(64467),
                n = r(91069);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        (0, a.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var s = r(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAssetReviewsList: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 100 : t,
                                        a = e.pageValue,
                                        o = void 0 === a ? 1 : a,
                                        s = e.hydrateAsset,
                                        i = void 0 !== s && s,
                                        c = e.reviewStatus;
                                    return {
                                        url: "assetReviews",
                                        params: u({
                                            authorId: e.authorId,
                                            hydrateAsset: i,
                                            reviewStatus: c
                                        }, (0, n.Hx)({
                                            n: r,
                                            pageValue: o
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
        95583(e, t, r) {
            r.d(t, {
                EP: () => m,
                GP: () => h,
                Pb: () => f,
                RM: () => w,
                RR: () => A,
                UH: () => y,
                oV: () => O,
                pl: () => P,
                tS: () => g,
                vG: () => S,
                wx: () => b
            });
            var a = r(10467),
                n = r(66911),
                o = r(64467),
                u = r(54756),
                s = r.n(u),
                i = r(89483);

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
                var o, u = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        (0, o.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var p = i.m.injectEndpoints({
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
                                    var t, r, a, n, o = e.avatarId,
                                        u = e.data;
                                    return {
                                        url: "/avatars/".concat(o),
                                        method: "PUT",
                                        body: d(d(d(d({}, u), null != u && null !== (t = u.styles) && void 0 !== t && t.primary ? {
                                            primaryStyle: null == u || null === (r = u.styles) || void 0 === r ? void 0 : r.primary
                                        } : {}), null != u && null !== (a = u.styles) && void 0 !== a && a.secondary ? {
                                            secondaryStyle: null == u || null === (n = u.styles) || void 0 === n ? void 0 : n.secondary
                                        } : {}), null != u && u.acknowledgements ? {
                                            acknowledgements: null == u ? void 0 : u.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, i.Z)(function(e) {
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
                                invalidatesTags: (0, i.Z)(function(e) {
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
                                invalidatesTags: (0, i.Z)(function(e) {
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
                                invalidatesTags: (0, i.Z)(function(e) {
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
                                queryFn: (r = (0, a.A)(s().mark(function e(t, r, a, o) {
                                    var u, i, c, l, v, d, p, f, y, m, g, b, A, w, h, O, S, P, E, x, I, j, T, D, k, q, R;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                u = t.sort, i = void 0 === u ? "updated" : u, c = t.order, l = void 0 === c ? "descending" : c, v = t.releaseStatus, d = void 0 === v ? "all" : v, p = t.user, f = void 0 === p ? "me" : p, y = t.organization, m = void 0 === y ? "vrchat" : y, g = t.n, b = void 0 === g ? 20 : g, A = t.featured, w = t.userId, h = t.search, O = t.tag, S = t.notag, P = t.platform, E = t.maxUnityVersion, x = t.minUnityVersion, I = t.exactUnityVersion, j = t.minAssetVersion, T = t.maxAssetVersion, D = t.exactAssetVersion, k = [], q = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: D,
                                                        exactUnityVersion: I,
                                                        featured: A,
                                                        maxAssetVersion: T,
                                                        maxUnityVersion: E,
                                                        minAssetVersion: j,
                                                        minUnityVersion: x,
                                                        n: b,
                                                        notag: S,
                                                        offset: q,
                                                        order: l,
                                                        organization: m,
                                                        platform: P,
                                                        releaseStatus: d,
                                                        search: h,
                                                        sort: i,
                                                        tag: O,
                                                        user: f,
                                                        userId: w
                                                    }
                                                });
                                            case 6:
                                                if (!(R = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: R.error
                                                });
                                            case 9:
                                                if (!(R.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return k.push.apply(k, (0, n.A)(R.data)), q += b, e.abrupt("continue", 3);
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
                                    }, e)
                                })), function(e, t, a, n) {
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
                                queryFn: (t = (0, a.A)(s().mark(function e() {
                                    var t, r, a, o, u, i, l, v, d, p, f, y, m, g = arguments;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                r = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, a = t.tags, o = t.userId, u = t.groups, i = void 0 === u ? [] : u, l = g.length > 3 ? g[3] : void 0, v = [], d = c(r ? [r] : i), e.prev = 7, d.s();
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
                                                        userId: o
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
                                                return v.push.apply(v, (0, n.A)(m.data)), y += 50, e.abrupt("continue", 12);
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
                f = p.useDeleteAvatarMutation,
                y = p.useDeleteImpostorsMutation,
                m = p.useEnqueueImpostorMutation,
                g = p.useGetAllAvatarsQuery,
                b = p.useGetAllAvatarStylesQuery,
                A = (p.useGetAllFavoriteAvatarsQuery, p.useGetAvatarQuery),
                w = (p.useGetFavoriteAvatarsQuery, p.useGetImpostorQueueStatsQuery),
                h = p.useSelectAvatarMutation,
                O = p.useSelectFallbackAvatarMutation,
                S = p.useSetAvatarTagsMutation,
                P = p.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=2cc00c2ac31f6dfa1fe7185d39ae87e2a8cb64d608324c1f7a15a8a1a8347559.js.map