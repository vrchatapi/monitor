"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6869], {
        16869: (t, e, r) => {
            r.d(e, {
                Cb: () => b,
                G4: () => v,
                Ij: () => f,
                Ul: () => l,
                ft: () => y,
                mr: () => g
            });
            var i = r(15861),
                n = r(42138),
                a = r(4942),
                s = r(64687),
                o = r.n(s),
                u = r(64358);

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        (0, a.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var p = r(61509).S.injectEndpoints({
                    endpoints: function(t) {
                        return {
                            getUserListings: t.query({
                                query: function(t) {
                                    var e = t.userId,
                                        r = t.n,
                                        i = void 0 === r ? 50 : r,
                                        n = (t.offset, t.groupId),
                                        a = t.active,
                                        s = t.archived,
                                        o = t.hydrate,
                                        d = t.listingType,
                                        p = t.pageValue,
                                        l = void 0 === p ? 1 : p;
                                    return {
                                        url: "user/".concat(e, "/listings"),
                                        params: c({
                                            groupId: n,
                                            listingType: d,
                                            active: a,
                                            archived: s,
                                            hydrate: o
                                        }, (0, u.ue)({
                                            n: i,
                                            pageValue: l
                                        }))
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    var i = r.userId;
                                    return [].concat((0, n.Z)(t ? t.map((function(t) {
                                        return {
                                            type: "Listing",
                                            id: t.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: i
                                    }])
                                }
                            }),
                            getListing: t.query({
                                query: function(t) {
                                    var e = t.listingId,
                                        r = t.hydrate,
                                        i = t.hydrateProducts,
                                        n = void 0 !== i && i,
                                        a = t.hydrateStores,
                                        s = void 0 !== a && a;
                                    return {
                                        url: "listing/".concat(e),
                                        params: {
                                            hydrate: r,
                                            hydrateProducts: n,
                                            hydrateStores: s
                                        }
                                    }
                                },
                                providesTags: function(t, e, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }]
                                }
                            }),
                            createListing: t.mutation({
                                queryFn: (r = (0, i.Z)(o().mark((function t(e, r, i, n) {
                                    var a, s, u, d, p, l, g, y, v, f, b, I, L, m, T, h, P, k, S, w, O, U, x, j, q;
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (s = e.file, u = void 0 === s ? null : s, d = e.tag, p = void 0 === d ? "product" : d, l = e.displayName, g = e.description, y = e.tags, v = e.listingVariants, f = e.imageId, b = e.listingType, I = e.productType, L = e.products, m = e.priceTokens, T = e.duration, h = e.durationType, P = e.active, k = e.groupId, S = e.permanent, w = e.instant, O = e.stackable, U = e.storeIds, x = e.recurrable, !u) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.next = 4, n({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", u), r.append("tag", p), r)
                                                });
                                            case 4:
                                                t.t0 = t.sent, t.next = 8;
                                                break;
                                            case 7:
                                                t.t0 = null;
                                            case 8:
                                                if (null == (j = t.t0) || !j.error) {
                                                    t.next = 11;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: j.error
                                                });
                                            case 11:
                                                return t.next = 13, n({
                                                    url: "listing",
                                                    method: "POST",
                                                    body: {
                                                        imageId: j ? null == j || null === (a = j.data) || void 0 === a ? void 0 : a.id : f,
                                                        displayName: l,
                                                        description: g,
                                                        tags: y,
                                                        listingVariants: v,
                                                        listingType: b,
                                                        productType: I,
                                                        products: L,
                                                        priceTokens: m,
                                                        duration: T,
                                                        durationType: h,
                                                        active: P,
                                                        groupId: k,
                                                        permanent: S,
                                                        instant: w,
                                                        stackable: O,
                                                        recurrable: x,
                                                        storeIds: U
                                                    }
                                                });
                                            case 13:
                                                if (!(q = t.sent).error) {
                                                    t.next = 16;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: q.error
                                                });
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: c({
                                                        listing: q.data
                                                    }, (null == j ? void 0 : j.data) && {
                                                        file: j.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                        var r
                                    }), t)
                                }))), function(t, e, i, n) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(t, e, r) {
                                    var i = r.ownerId,
                                        a = r.tag;
                                    r.storeIds;
                                    return [].concat((0, n.Z)(t ? [{
                                        type: "Listing",
                                        id: t.id
                                    }] : []), [{
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserListings",
                                        id: i
                                    }, "Stores", "Store", "UserProducts", "Product"])
                                }
                            }),
                            updateListing: t.mutation({
                                queryFn: (e = (0, i.Z)(o().mark((function t(e, r, i, n) {
                                    var a, s, u, d, p, l, g, y, v, f, b, I, L, m, T, h, P, k, S, w, O, U, x, j, q;
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (s = e.file, u = void 0 === s ? null : s, d = e.tag, p = void 0 === d ? "product" : d, l = e.listingId, g = e.displayName, y = e.description, v = e.tags, f = e.listingVariants, b = e.imageId, I = e.products, L = e.priceTokens, m = e.duration, T = e.durationType, h = e.active, P = e.groupId, k = e.archive, S = e.permanent, w = e.instant, O = e.stackable, U = e.recurrable, x = e.storeIds, !u) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.next = 4, n({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (r = void 0, r = new FormData, r.append("file", u), r.append("tag", p), r)
                                                });
                                            case 4:
                                                t.t0 = t.sent, t.next = 8;
                                                break;
                                            case 7:
                                                t.t0 = null;
                                            case 8:
                                                if (null == (j = t.t0) || !j.error) {
                                                    t.next = 11;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: j.error
                                                });
                                            case 11:
                                                return t.next = 13, n({
                                                    url: "listing/".concat(l),
                                                    method: "PUT",
                                                    body: {
                                                        displayName: g,
                                                        description: y,
                                                        tags: v,
                                                        listingVariants: f,
                                                        imageId: j ? null == j || null === (a = j.data) || void 0 === a ? void 0 : a.id : b,
                                                        products: I,
                                                        priceTokens: L,
                                                        duration: m,
                                                        durationType: T,
                                                        active: h,
                                                        groupId: P,
                                                        archive: k,
                                                        permanent: S,
                                                        instant: w,
                                                        stackable: O,
                                                        recurrable: U,
                                                        storeIds: x
                                                    }
                                                });
                                            case 13:
                                                if (!(q = t.sent).error) {
                                                    t.next = 16;
                                                    break
                                                }
                                                return t.abrupt("return", {
                                                    error: q.error
                                                });
                                            case 16:
                                                return t.abrupt("return", {
                                                    data: c({
                                                        listing: q.data
                                                    }, (null == j ? void 0 : j.data) && {
                                                        file: j.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                        var r
                                    }), t)
                                }))), function(t, r, i, n) {
                                    return e.apply(this, arguments)
                                }),
                                invalidatesTags: function(t, e, r) {
                                    var i = r.listingId,
                                        n = r.ownerId,
                                        a = r.tag;
                                    r.storeIds;
                                    return [{
                                        type: "Listing",
                                        id: i
                                    }, {
                                        type: "UserListings",
                                        id: n
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "Purchases",
                                        id: "PARTIAL-LIST"
                                    }, "Purchase", "Store", "Stores", "UserProducts", "Product"]
                                }
                            }),
                            activateListing: t.mutation({
                                query: function(t) {
                                    var e = t.listingId;
                                    return {
                                        url: "listing/".concat(e, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(t, e, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deactivateListing: t.mutation({
                                query: function(t) {
                                    var e = t.listingId;
                                    return {
                                        url: "listing/".concat(e, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(t, e, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, {
                                        type: "UserListings",
                                        id: r.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deleteListing: t.mutation({
                                query: function(t) {
                                    var e = t.listingId,
                                        r = t.force;
                                    return {
                                        url: "listing/".concat(e),
                                        method: "DELETE",
                                        params: {
                                            force: r
                                        }
                                    }
                                },
                                invalidatesTags: function(t, e, r) {
                                    return [{
                                        type: "Listing",
                                        id: r.listingId
                                    }, "UserListings", "ListingProducts", "Product", "UserProducts", "Stores", "Store"]
                                }
                            })
                        };
                        var e, r
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                l = p.useGetUserListingsQuery,
                g = p.useGetListingQuery,
                y = p.useLazyGetListingQuery,
                v = p.useCreateListingMutation,
                f = p.useUpdateListingMutation,
                b = (p.useActivateListingMutation, p.useDeactivateListingMutation, p.useDeleteListingMutation)
        }
    }
]);
//# sourceMappingURL=29e717544605d8dbda4a9f2d63d4f419066907adcda14fa059b699d309fdabe2.js.map