"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2520], {
        81362: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(67294),
                i = r(53637),
                a = r(95305);
            const s = function(e) {
                var t = e.error,
                    r = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var s = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return n.createElement(i.Z, null, n.createElement(a.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, n.createElement("h2", null, "VRChat"), n.createElement("p", null, "An error has occurred. To continue: "), n.createElement("p", null, "Press the F5 to refresh the website, or "), n.createElement("p", null, "Press the back button to leave the website, or "), n.createElement("p", null, "Check our ", n.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), n.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * s.length)], "! ", s[Math.floor(Math.random() * s.length)], ")"), n.createElement("code", null, r, " ", t)))
            }
        },
        98185: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(67294),
                i = r(81362),
                a = r(43862);
            const s = function(e) {
                var t = e.reducer,
                    r = e.loading,
                    s = e.loadingList,
                    o = e.error,
                    u = e.statusCode,
                    d = e.children,
                    c = e.className,
                    l = !1;
                return s && s.forEach((function(e) {
                    e && (l = !0)
                })), null != u && 200 !== u && "200" !== u ? n.createElement(i.Z, {
                    error: o,
                    statusCode: u
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? n.createElement(i.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : o ? n.createElement(i.Z, {
                    error: o
                }) : null != t && t.error ? n.createElement(i.Z, {
                    error: t.error
                }) : r || l || null != t && t.fetching || null != t && t.loading ? n.createElement(a.Z, {
                    className: "tw-mx-auto"
                }) : n.createElement("div", {
                    className: c
                }, d)
            }
        },
        16869: (e, t, r) => {
            r.d(t, {
                Cb: () => h,
                G4: () => y,
                Ij: () => v,
                Ul: () => p,
                ft: () => f,
                mr: () => g
            });
            var n = r(15861),
                i = r(42138),
                a = r(4942),
                s = r(64687),
                o = r.n(s),
                u = r(64358);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserListings: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = void 0 === r ? 50 : r,
                                        i = (e.offset, e.groupId),
                                        a = e.active,
                                        s = e.archived,
                                        o = e.hydrate,
                                        d = e.listingType,
                                        l = e.pageValue,
                                        p = void 0 === l ? 1 : l;
                                    return {
                                        url: "user/".concat(t, "/listings"),
                                        params: c({
                                            groupId: i,
                                            listingType: d,
                                            active: a,
                                            archived: s,
                                            hydrate: o
                                        }, (0, u.ue)({
                                            n,
                                            pageValue: p
                                        }))
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, i.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Listing",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: n
                                    }])
                                }
                            }),
                            getListing: e.query({
                                query: function(e) {
                                    var t = e.listingId,
                                        r = e.hydrate,
                                        n = e.hydrateProducts,
                                        i = void 0 !== n && n,
                                        a = e.hydrateStores,
                                        s = void 0 !== a && a;
                                    return {
                                        url: "listing/".concat(t),
                                        params: {
                                            hydrate: r,
                                            hydrateProducts: i,
                                            hydrateStores: s
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }]
                                }
                            }),
                            createListing: e.mutation({
                                queryFn: (r = (0, n.Z)(o().mark((function e(t, r, n, i) {
                                    var a, s, u, d, l, p, g, f, y, v, h, m, b, I, L, T, w, P, E, k, S, O, x, U, C;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (s = t.file, u = void 0 === s ? null : s, d = t.tag, l = void 0 === d ? "product" : d, p = t.displayName, g = t.description, f = t.tags, y = t.listingVariants, v = t.imageId, h = t.listingType, m = t.productType, b = t.products, I = t.priceTokens, L = t.duration, T = t.durationType, w = t.active, P = t.groupId, E = t.permanent, k = t.instant, S = t.stackable, O = t.storeIds, x = t.recurrable, !u) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, i({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", u), r.append("tag", l), r)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (U = e.t0) || !U.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: U.error
                                                });
                                            case 11:
                                                return e.next = 13, i({
                                                    url: "listing",
                                                    method: "POST",
                                                    body: {
                                                        imageId: U ? null == U || null === (a = U.data) || void 0 === a ? void 0 : a.id : v,
                                                        displayName: p,
                                                        description: g,
                                                        tags: f,
                                                        listingVariants: y,
                                                        listingType: h,
                                                        productType: m,
                                                        products: b,
                                                        priceTokens: I,
                                                        duration: L,
                                                        durationType: T,
                                                        active: w,
                                                        groupId: P,
                                                        permanent: E,
                                                        instant: k,
                                                        stackable: S,
                                                        recurrable: x,
                                                        storeIds: O
                                                    }
                                                });
                                            case 13:
                                                if (!(C = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: C.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: c({
                                                        listing: C.data
                                                    }, (null == U ? void 0 : U.data) && {
                                                        file: U.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var r
                                    }), e)
                                }))), function(e, t, n, i) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.ownerId,
                                        a = r.tag;
                                    r.storeIds;
                                    return [].concat((0, i.Z)(e ? [{
                                        type: "Listing",
                                        id: e.id
                                    }] : []), [{
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserListings",
                                        id: n
                                    }, "Stores", "Store", "UserProducts", "Product"])
                                }
                            }),
                            updateListing: e.mutation({
                                queryFn: (t = (0, n.Z)(o().mark((function e(t, r, n, i) {
                                    var a, s, u, d, l, p, g, f, y, v, h, m, b, I, L, T, w, P, E, k, S, O, x, U, C;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (s = t.file, u = void 0 === s ? null : s, d = t.tag, l = void 0 === d ? "product" : d, p = t.listingId, g = t.displayName, f = t.description, y = t.tags, v = t.listingVariants, h = t.imageId, m = t.products, b = t.priceTokens, I = t.duration, L = t.durationType, T = t.active, w = t.groupId, P = t.archive, E = t.permanent, k = t.instant, S = t.stackable, O = t.recurrable, x = t.storeIds, !u) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, i({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", u), r.append("tag", l), r)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (U = e.t0) || !U.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: U.error
                                                });
                                            case 11:
                                                return e.next = 13, i({
                                                    url: "listing/".concat(p),
                                                    method: "PUT",
                                                    body: {
                                                        displayName: g,
                                                        description: f,
                                                        tags: y,
                                                        listingVariants: v,
                                                        imageId: U ? null == U || null === (a = U.data) || void 0 === a ? void 0 : a.id : h,
                                                        products: m,
                                                        priceTokens: b,
                                                        duration: I,
                                                        durationType: L,
                                                        active: T,
                                                        groupId: w,
                                                        archive: P,
                                                        permanent: E,
                                                        instant: k,
                                                        stackable: S,
                                                        recurrable: O,
                                                        storeIds: x
                                                    }
                                                });
                                            case 13:
                                                if (!(C = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: C.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: c({
                                                        listing: C.data
                                                    }, (null == U ? void 0 : U.data) && {
                                                        file: U.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var r
                                    }), e)
                                }))), function(e, r, n, i) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.listingId,
                                        i = r.ownerId,
                                        a = r.tag;
                                    r.storeIds;
                                    return [{
                                        type: "Listing",
                                        id: n
                                    }, {
                                        type: "UserListings",
                                        id: i
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "Purchases",
                                        id: "PARTIAL-LIST"
                                    }, "Purchase", "Store", "Stores", "UserProducts", "Product"]
                                }
                            }),
                            activateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deactivateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deleteListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        r = e.force;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, "UserListings", "ListingProducts", "Product", "UserProducts", "Stores", "Store"]
                                }
                            })
                        };
                        var t, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                p = l.useGetUserListingsQuery,
                g = l.useGetListingQuery,
                f = l.useLazyGetListingQuery,
                y = l.useCreateListingMutation,
                v = l.useUpdateListingMutation,
                h = (l.useActivateListingMutation, l.useDeactivateListingMutation, l.useDeleteListingMutation)
        },
        67263: (e, t, r) => {
            e.exports = r.p + "b42ff4cbb4e7012a20aa17c9311521f1c9346698fce51c44e30a12a4fdb6127d.png"
        }
    }
]);
//# sourceMappingURL=14cb3354eb32eb929a15db8053f8e1e8475117461b6436ed419178903b92b0b8.js.map