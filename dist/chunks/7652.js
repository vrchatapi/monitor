"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7652], {
        19933: (e, r, t) => {
            t.d(r, {
                Z: () => T
            });
            var n = t(4942),
                a = t(15861),
                o = t(54546),
                u = t(68055),
                c = t(76553),
                i = t(64687),
                s = t.n(i),
                d = t(14411),
                p = t(22202),
                l = t(6655),
                f = t(64358),
                y = t(45697),
                b = t.n(y),
                v = t(67294),
                w = t(89250);

            function g(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function m(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? g(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var P = function(e) {
                var r, t = e.isTiliaTOSAccepted,
                    n = void 0 === t || t,
                    i = e.returnPath,
                    y = e.termsOfServiceMessage,
                    b = (0, w.TH)(),
                    g = (0, p.XC)(),
                    P = g.data,
                    T = g.isLoading,
                    h = null == P ? void 0 : P.id,
                    O = (0, v.useState)(!1),
                    x = (0, o.Z)(O, 2),
                    I = x[0],
                    j = x[1],
                    L = (0, l.gI)(),
                    k = (0, o.Z)(L, 2),
                    S = k[0],
                    E = k[1],
                    U = (0, w.oQ)("".concat(i).concat(null != b && null !== (r = b.state) && void 0 !== r && r.redirectTo ? "?redirectTo=".concat(encodeURIComponent(b.state.redirectTo)) : ""));
                if (n) return null;
                var Z = function() {
                    var e = (0, a.Z)(s().mark((function e(r) {
                        var t, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r.preventDefault(), j(!0), t = new URL(U, window.location.href), e.next = 5, S(m(m({}, f.$Z.TOS), {}, {
                                        userId: h,
                                        returnUrl: t
                                    })).unwrap();
                                case 5:
                                    n = e.sent, a = n.redirect, window.location.assign(a);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, v.useEffect)((function() {
                    (null != E && E.isLoading || T) && j(!0), null != E && E.isError && j(!1)
                }), [E, T]), v.createElement("div", {
                    className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                }, v.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, v.createElement(d.$1, {
                    icon: c.eH,
                    size: "1x",
                    className: "tw-text-orange tw-mt-1 tw-mr-2"
                }), v.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                }, v.createElement("h2", {
                    className: "tw-text-xl"
                }, "Update to the Tilia Terms of Service"), v.createElement("p", {
                    className: "tw-mb-0 tw-text-base"
                }, y))), v.createElement("div", {
                    className: "tw-h-full tw-flex tw-flex-col tw-justify-center tw-mt-4 sm:tw-mt-0"
                }, v.createElement(d.zx, {
                    icon: u.LE,
                    onClick: function(e) {
                        return Z(e)
                    },
                    className: "tw-bg-white tw-border-white tw-text-[#1A2026]",
                    loading: I,
                    disabled: I
                }, "Review Tilia's Terms")))
            };
            P.propTypes = {
                isTiliaTOSAccepted: b().bool,
                returnPath: b().string,
                termsOfServiceMessage: b().string.isRequired
            };
            const T = P
        },
        67978: (e, r, t) => {
            t.d(r, {
                As: () => y,
                RM: () => v,
                lZ: () => b,
                qX: () => w,
                rP: () => l,
                wE: () => g,
                x3: () => f,
                xq: () => m
            });
            var n = t(15861),
                a = t(42138),
                o = t(4942),
                u = t(64687),
                c = t.n(u),
                i = t(64358);

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function d(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? s(Object(t), !0).forEach((function(r) {
                        (0, o.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var p = t(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var r = e.userId,
                                        t = e.n,
                                        n = void 0 === t ? 100 : t,
                                        a = (e.offset, e.archived),
                                        o = e.pageValue,
                                        u = void 0 === o ? 1 : o;
                                    return {
                                        url: "user/".concat(r, "/products"),
                                        params: d({
                                            archived: a
                                        }, (0, i.ue)({
                                            n,
                                            pageValue: u
                                        }))
                                    }
                                },
                                providesTags: function(e, r, t) {
                                    var n = t.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (o = (0, n.Z)(c().mark((function e(r, t, n, o) {
                                    var u, i, s, d, p;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                u = r.userId, i = r.archived, s = [], d = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "user/".concat(u, "/products"),
                                                    params: {
                                                        archived: i,
                                                        n: 100,
                                                        offset: d
                                                    }
                                                });
                                            case 6:
                                                if (!(p = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: p.error
                                                });
                                            case 9:
                                                if (!(p.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return s.push.apply(s, (0, a.Z)(p.data)), d += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: s
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, t, n) {
                                    return o.apply(this, arguments)
                                }),
                                providesTags: function(e, r, t) {
                                    var n = t.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "FULL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var r = e.listingId;
                                    return "listing/".concat(r, "/products")
                                },
                                providesTags: function(e, r, t) {
                                    var n = t.listingId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: n
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var r = e.productId;
                                    return "products/".concat(r)
                                },
                                providesTags: function(e, r, t) {
                                    return [{
                                        type: "Product",
                                        id: t.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                queryFn: (t = (0, n.Z)(c().mark((function e(r, t, a, o) {
                                    var u, i, s, p, l, f, y, b, v, w, g, m, P, T, h, O, x, I, j, L, k, S, E, U;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = r.file, s = void 0 === i ? null : i, p = r.tag, l = void 0 === p ? "product" : p, f = r.displayName, y = r.description, b = void 0 === y ? "" : y, v = r.tags, w = void 0 === v ? [] : v, g = r.imageId, m = void 0 === g ? null : g, P = r.productType, T = r.useForSubscriberList, h = void 0 !== T && T, O = r.generateListing, x = r.priceTokens, I = r.duration, j = r.durationType, L = r.permanent, k = r.instant, null === s) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, n.Z)(c().mark((function e() {
                                                    var r, t;
                                                    return c().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (r = new FormData).append("file", s), r.append("tag", l), e.next = 5, o({
                                                                    url: "file/image",
                                                                    method: "POST",
                                                                    body: r
                                                                });
                                                            case 5:
                                                                if (!(t = e.sent).error) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.abrupt("return", {
                                                                    error: t.error
                                                                });
                                                            case 8:
                                                                return e.abrupt("return", t);
                                                            case 9:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))();
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (S = e.t0) || !S.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 11:
                                                return E = (null == S || null === (u = S.data) || void 0 === u ? void 0 : u.id) || m, e.next = 14, o({
                                                    url: "products",
                                                    method: "POST",
                                                    body: d({
                                                        displayName: f,
                                                        description: b,
                                                        tags: w,
                                                        productType: P,
                                                        useForSubscriberList: h,
                                                        generateListing: O,
                                                        priceTokens: x,
                                                        duration: I,
                                                        durationType: j,
                                                        permanent: L,
                                                        instant: k
                                                    }, E && {
                                                        imageId: E
                                                    })
                                                });
                                            case 14:
                                                if (!(U = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: U.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: d({
                                                        product: U.data
                                                    }, (null == S ? void 0 : S.data) && {
                                                        file: S.data
                                                    })
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, r, t) {
                                    var n = t.ownerId,
                                        o = t.tag;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), ["UserProducts", {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(o)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: n
                                    }], (0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            updateProduct: e.mutation({
                                queryFn: (r = (0, n.Z)(c().mark((function e(r, t, n, a) {
                                    var o, u, i, s, p, l, f, y, b, v, w, g, m, P, T, h, O, x;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = r.file, s = void 0 === i ? null : i, p = r.tag, l = void 0 === p ? "product" : p, f = r.productId, y = r.displayName, b = r.description, v = r.tags, w = void 0 === v ? null : v, g = r.imageId, m = r.groupAccess, P = r.groupAccessRemove, T = r.useForSubscriberList, h = null, null === s) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return (O = new FormData).append("file", s), O.append("tag", l), e.next = 8, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: O
                                                });
                                            case 8:
                                                if (!(h = e.sent).error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: h.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "products/".concat(f),
                                                    method: "PUT",
                                                    body: d(d({
                                                        displayName: y,
                                                        description: b
                                                    }, null !== w ? w : {}), {}, {
                                                        groupAccess: m,
                                                        groupAccessRemove: P,
                                                        useForSubscriberList: T,
                                                        imageId: h ? null === (o = h) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.id : g
                                                    })
                                                });
                                            case 13:
                                                if (!(x = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: x.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: d({
                                                        product: x.data
                                                    }, (null === (u = h) || void 0 === u ? void 0 : u.data) && {
                                                        file: h.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, r, t) {
                                    var n = t.productId,
                                        o = t.ownerId,
                                        u = t.tag;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", {
                                        type: "GroupRoles"
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(u)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: o
                                    }].concat((0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var r = e.productId,
                                        t = e.force;
                                    return {
                                        url: "products/".concat(r),
                                        method: "DELETE",
                                        params: {
                                            force: t
                                        }
                                    }
                                },
                                invalidatesTags: function(e, r, t) {
                                    var n = t.productId;
                                    t.ownerId;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", "Stores", {
                                        type: "Store"
                                    }]
                                }
                            })
                        };
                        var r, t, o
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                l = p.useGetUserProductsQuery,
                f = p.useGetAllUserProductsQuery,
                y = p.useLazyGetAllUserProductsQuery,
                b = (p.useGetListingProductsQuery, p.useGetProductQuery),
                v = p.useLazyGetProductQuery,
                w = p.useCreateProductMutation,
                g = p.useUpdateProductMutation,
                m = p.useDeleteProductMutation
        }
    }
]);
//# sourceMappingURL=9f41ae455b0984d5fa2a0d1923f355ed57318b5e22dcf45f8be846976f99d9b5.js.map