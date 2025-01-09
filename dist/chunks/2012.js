"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2012, 3642], {
        33642: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => C
            });
            var n = r(15861),
                o = r(4942),
                a = r(54546),
                s = r(76553),
                i = r(6811),
                u = r(64687),
                d = r.n(u),
                c = r(64258),
                l = r(14411),
                p = r(95896),
                m = r(22202),
                w = r(16869),
                g = r(67978),
                f = r(36183),
                y = r(64358),
                v = r(45697),
                b = r.n(v),
                S = r(67294),
                I = r(32981),
                h = r(9401),
                x = r(99878);

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    o = e.listing,
                    u = e.onClose,
                    v = void 0 === u ? function() {} : u,
                    b = e.onDelete,
                    E = void 0 === b ? function() {} : b,
                    P = (0, I.I0)(),
                    C = (0, m.XC)().data,
                    O = (0, S.useState)(0),
                    k = (0, a.Z)(O, 2),
                    j = k[0],
                    N = k[1],
                    D = (0, S.useState)(o),
                    L = (0, a.Z)(D, 2),
                    q = L[0],
                    Z = L[1],
                    G = (0, S.useState)({}),
                    M = (0, a.Z)(G, 2),
                    U = M[0],
                    z = M[1],
                    F = (0, g.x3)({
                        userId: C.id,
                        archived: !1
                    }, {
                        skip: !C
                    }),
                    X = F.data,
                    _ = F.isLoading,
                    A = (F.isError, F.error, (0, f.Ci)({
                        sellerId: C.id,
                        managementPov: !0
                    }, {
                        skip: !C
                    })),
                    H = A.data,
                    Q = (A.isLoading, A.isError, A.error, (0, w.Ij)()),
                    R = (0, a.Z)(Q, 2),
                    W = R[0],
                    Y = R[1],
                    J = (Y.isLoading, Y.isSuccess, Y.isError, Y.error, function(e) {
                        Z(T(T({}, q), e)), z(T(T({}, U), e))
                    }),
                    B = function() {
                        var e = (0, n.Z)(d().mark((function e() {
                            var t, r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            P((0, c.d)({
                                                title: "Listing updated successfully!",
                                                icon: i.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), v()
                                        }, e.prev = 1, e.next = 4, W(T({
                                            listingId: o.id
                                        }, U)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), P((0, c.d)({
                                            title: "Failed to update listing!",
                                            icon: s.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = (0, S.useMemo)((function() {
                        if ("duration" === q.listingType) {
                            var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(q.durationType),
                                t = (0, y.qG)(o.durationType, o.duration) && Number.isInteger(parseFloat(q.duration));
                            return e && t
                        }
                        var r = q.displayName.length >= 3,
                            n = q.priceTokens >= 100 && q.priceTokens <= 1e4 && Number.isInteger(parseFloat(q.priceTokens)),
                            a = q.products.length > 0 && q.products.length <= p._1;
                        return r && n && a
                    }), [q]);
                return S.createElement(l.JX, {
                    className: "tw-w-full tw-relative"
                }, S.createElement(l.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, S.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return N(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === j ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Listing Information"), S.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return N(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === j ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Store Availability")), S.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === j && S.createElement(h.Z, {
                    currentListing: q,
                    onDataChange: J,
                    isEditing: !0,
                    products: X,
                    listingType: q.listingType,
                    productsLoading: _
                }), 1 === j && S.createElement(x.Z, {
                    activeListing: q,
                    onDataChange: J,
                    stores: H,
                    activeStore: r
                })), S.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, S.createElement("div", {
                    className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-1"
                }, S.createElement(l.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: v,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), S.createElement(l.zx, {
                    type: "button",
                    onClick: function() {
                        return E(o)
                    },
                    danger: !0,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Delete Listing")), S.createElement(l.zx, {
                    type: "button",
                    onClick: B,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                    disabled: !K
                }, "Save")))
            };
            P.propTypes = {
                listing: b().object.isRequired,
                stores: b().array,
                onCancel: b().func,
                onDelete: b().func
            };
            const C = P
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => u,
                j6: () => d,
                md: () => i,
                mt: () => c
            });
            var n = r(45987),
                o = r(61509),
                a = ["storeId"],
                s = o.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        o = e.n,
                                        a = void 0 === o ? 50 : o,
                                        s = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: a,
                                            offset: void 0 === s ? 0 : s
                                        }
                                    }
                                },
                                providesTags: ["Stores"]
                            }),
                            getStore: e.query({
                                query: function(e) {
                                    var t = e.storeId,
                                        r = e.worldId,
                                        n = e.groupId,
                                        o = e.creatorId,
                                        a = e.hydrateListings,
                                        s = void 0 !== a && a,
                                        i = e.hydrateProducts,
                                        u = void 0 !== i && i,
                                        d = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: o,
                                            hydrateListings: s,
                                            hydrateProducts: u,
                                            managementPov: void 0 !== d && d
                                        }
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
                                    }]
                                }
                            }),
                            createStore: e.mutation({
                                query: function(e) {
                                    var t = e.displayName,
                                        r = e.storeType,
                                        n = e.worldId,
                                        o = e.groupId,
                                        a = e.tags,
                                        s = void 0 === a ? [] : a,
                                        i = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: o,
                                            tags: s,
                                            description: void 0 === i ? "" : i
                                        }
                                    }
                                },
                                invalidatesTags: function() {
                                    return ["Stores", "Worlds"]
                                }
                            }),
                            updateStore: e.mutation({
                                query: function(e) {
                                    var t = e.storeId,
                                        r = (0, n.Z)(e, a);
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "PUT",
                                        body: r
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
                                    }, "Stores", {
                                        type: "UserGroups",
                                        id: e.sellerId
                                    }, "Worlds"]
                                }
                            }),
                            deleteStore: e.mutation({
                                query: function(e) {
                                    var t = e.storeId;
                                    return {
                                        url: "economy/store/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "Store",
                                        id: r.storeId
                                    }, "Stores"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Stores", "Store", "UserGroups"]
                }),
                i = s.useGetStoreQuery,
                u = s.useGetStoresQuery,
                d = s.useCreateStoreMutation,
                c = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=d40994546e4c5a9ef58e0dcd52362b2791d369ad720f07bd4f7120c26d5cce21.js.map