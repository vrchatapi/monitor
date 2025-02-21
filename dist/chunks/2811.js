"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2811], {
        81362: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(67294),
                a = t(53637),
                o = t(95305);
            const u = function(e) {
                var r = e.error,
                    t = e.statusCode;
                null == r && (r = "Something bad happened!"), "string" != typeof r && (console.error(r), r = r.message);
                var u = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return n.createElement(a.Z, null, n.createElement(o.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, n.createElement("h2", null, "VRChat"), n.createElement("p", null, "An error has occurred. To continue: "), n.createElement("p", null, "Press the F5 to refresh the website, or "), n.createElement("p", null, "Press the back button to leave the website, or "), n.createElement("p", null, "Check our ", n.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), n.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * u.length)], "! ", u[Math.floor(Math.random() * u.length)], ")"), n.createElement("code", null, t, " ", r)))
            }
        },
        98185: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(67294),
                a = t(81362),
                o = t(43862);
            const u = function(e) {
                var r = e.reducer,
                    t = e.loading,
                    u = e.loadingList,
                    s = e.error,
                    c = e.statusCode,
                    i = e.children,
                    d = e.className,
                    l = !1;
                return u && u.forEach((function(e) {
                    e && (l = !0)
                })), null != c && 200 !== c && "200" !== c ? n.createElement(a.Z, {
                    error: s,
                    statusCode: c
                }) : null != r && null != r.statusCode && 200 !== r.statusCode && "200" !== r.statusCode ? n.createElement(a.Z, {
                    error: r.error,
                    statusCode: r.statusCode
                }) : s ? n.createElement(a.Z, {
                    error: s
                }) : null != r && r.error ? n.createElement(a.Z, {
                    error: r.error
                }) : t || l || null != r && r.fetching || null != r && r.loading ? n.createElement(o.Z, {
                    className: "tw-mx-auto"
                }) : n.createElement("div", {
                    className: d
                }, i)
            }
        },
        67978: (e, r, t) => {
            t.d(r, {
                As: () => y,
                DM: () => g,
                RM: () => b,
                lZ: () => v,
                qX: () => m,
                rP: () => p,
                wE: () => h,
                x3: () => f,
                xq: () => P
            });
            var n = t(15861),
                a = t(42138),
                o = t(4942),
                u = t(64687),
                s = t.n(u),
                c = t(64358);

            function i(e, r) {
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
                    r % 2 ? i(Object(t), !0).forEach((function(r) {
                        (0, o.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var l = t(61509).S.injectEndpoints({
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
                                        }, (0, c.ue)({
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
                                queryFn: (o = (0, n.Z)(s().mark((function e(r, t, n, o) {
                                    var u, c, i, d, l;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                u = r.userId, c = r.archived, i = [], d = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "user/".concat(u, "/products"),
                                                    params: {
                                                        archived: c,
                                                        n: 100,
                                                        offset: d
                                                    }
                                                });
                                            case 6:
                                                if (!(l = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: l.error
                                                });
                                            case 9:
                                                if (!(l.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return i.push.apply(i, (0, a.Z)(l.data)), d += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: i
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
                                queryFn: (t = (0, n.Z)(s().mark((function e(r, t, a, o) {
                                    var u, c, i, l, p, f, y, g, v, b, m, h, P, w, T, I, E, x, k, L, Z, O, F, S, A;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = r.avatarId, i = r.description, l = void 0 === i ? "" : i, p = r.displayName, f = r.duration, y = r.durationType, g = r.file, v = void 0 === g ? null : g, b = r.generateListing, m = r.imageId, h = void 0 === m ? null : m, P = r.instant, w = r.permanent, T = r.priceTokens, I = r.productType, E = r.tag, x = void 0 === E ? "product" : E, k = r.tags, L = void 0 === k ? [] : k, Z = r.useForSubscriberList, O = void 0 !== Z && Z, null === v) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, n.Z)(s().mark((function e() {
                                                    var r, t;
                                                    return s().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (r = new FormData).append("file", v), r.append("tag", x), e.next = 5, o({
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
                                                if (null == (F = e.t0) || !F.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: F.error
                                                });
                                            case 11:
                                                return S = (null == F || null === (u = F.data) || void 0 === u ? void 0 : u.id) || h, e.next = 14, o({
                                                    url: "products",
                                                    method: "POST",
                                                    body: d(d({
                                                        description: l,
                                                        displayName: p,
                                                        duration: f,
                                                        durationType: y,
                                                        generateListing: b,
                                                        instant: P,
                                                        permanent: w,
                                                        priceTokens: T,
                                                        productType: I,
                                                        tags: L,
                                                        useForSubscriberList: O
                                                    }, c && {
                                                        avatarId: c
                                                    }), S && {
                                                        imageId: S
                                                    })
                                                });
                                            case 14:
                                                if (!(A = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: A.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: d({
                                                        product: A.data
                                                    }, (null == F ? void 0 : F.data) && {
                                                        file: F.data
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
                                queryFn: (r = (0, n.Z)(s().mark((function e(r, t, n, a) {
                                    var o, u, c, i, l, p, f, y, g, v, b, m, h, P, w, T, I, E;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = r.file, i = void 0 === c ? null : c, l = r.tag, p = void 0 === l ? "product" : l, f = r.productId, y = r.displayName, g = r.description, v = r.tags, b = void 0 === v ? null : v, m = r.imageId, h = r.groupAccess, P = r.groupAccessRemove, w = r.useForSubscriberList, T = null, null === i) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return (I = new FormData).append("file", i), I.append("tag", p), e.next = 8, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: I
                                                });
                                            case 8:
                                                if (!(T = e.sent).error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: T.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "products/".concat(f),
                                                    method: "PUT",
                                                    body: d(d({
                                                        displayName: y,
                                                        description: g
                                                    }, null !== b ? b : {}), {}, {
                                                        groupAccess: h,
                                                        groupAccessRemove: P,
                                                        useForSubscriberList: w,
                                                        imageId: T ? null === (o = T) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.id : m
                                                    })
                                                });
                                            case 13:
                                                if (!(E = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: E.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: d({
                                                        product: E.data
                                                    }, (null === (u = T) || void 0 === u ? void 0 : u.data) && {
                                                        file: T.data
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
                p = l.useGetUserProductsQuery,
                f = l.useGetAllUserProductsQuery,
                y = l.useLazyGetAllUserProductsQuery,
                g = l.useGetListingProductsQuery,
                v = l.useGetProductQuery,
                b = l.useLazyGetProductQuery,
                m = l.useCreateProductMutation,
                h = l.useUpdateProductMutation,
                P = l.useDeleteProductMutation
        },
        67263: (e, r, t) => {
            e.exports = t.p + "b42ff4cbb4e7012a20aa17c9311521f1c9346698fce51c44e30a12a4fdb6127d.png"
        }
    }
]);
//# sourceMappingURL=04aabab1b8c6f508754e480c218786ae661bf9fd1524e08f0a8bbe135805a8f9.js.map