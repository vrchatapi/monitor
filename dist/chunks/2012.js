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
                g = r(16869),
                f = r(67978),
                w = r(36183),
                y = r(39270),
                v = r(64358),
                b = r(45697),
                I = r.n(b),
                S = r(67294),
                h = r(32981),
                E = r(68420),
                x = r(99878);

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var k = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    o = e.listingId,
                    u = e.onClose,
                    b = void 0 === u ? function() {} : u,
                    I = e.onDelete,
                    T = void 0 === I ? function() {} : I,
                    k = (0, h.I0)(),
                    C = (0, m.XC)().data,
                    O = (0, S.useState)(0),
                    j = (0, a.Z)(O, 2),
                    L = j[0],
                    N = j[1],
                    D = (0, S.useState)(null),
                    q = (0, a.Z)(D, 2),
                    Z = q[0],
                    G = q[1],
                    M = (0, S.useState)({}),
                    U = (0, a.Z)(M, 2),
                    F = U[0],
                    X = U[1],
                    z = (0, g.mr)({
                        listingId: o,
                        hydrateProducts: !0,
                        hydrateStores: !0
                    }, {
                        skip: !o
                    }),
                    Y = z.data,
                    _ = z.isLoading,
                    A = (z.isError, z.error, (0, f.x3)({
                        userId: C.id,
                        archived: !1
                    }, {
                        skip: !C
                    })),
                    H = A.data,
                    Q = A.isLoading,
                    R = (A.isError, A.error, (0, w.Ci)({
                        sellerId: C.id,
                        managementPov: !0
                    }, {
                        skip: !C
                    })),
                    W = R.data,
                    J = R.isLoading,
                    B = (R.isError, R.error, (0, g.Ij)()),
                    K = (0, a.Z)(B, 2),
                    V = K[0],
                    $ = K[1];
                $.isLoading, $.isSuccess, $.isError, $.error;
                (0, S.useEffect)((function() {
                    return function() {
                        k((0, y.rk)())
                    }
                }), []), (0, S.useEffect)((function() {
                    Y && (G(Y), k((0, y.fX)(Y.products)), k((0, y.TY)(Y.listingType)))
                }), [Y]);
                var ee = function(e) {
                        G(P(P({}, Z), e)), X(P(P({}, F), e))
                    },
                    te = function() {
                        var e = (0, n.Z)(d().mark((function e() {
                            var t, r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = function() {
                                            k((0, c.d)({
                                                title: "Listing updated successfully!",
                                                icon: i.f8,
                                                message: "Your listing has been updated successfully!",
                                                color: "success",
                                                timeout: 3e3
                                            })), b()
                                        }, e.prev = 1, e.next = 4, V(P({
                                            listingId: Y.id
                                        }, F)).unwrap();
                                    case 4:
                                        t(), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), console.error("error", e.t0), k((0, c.d)({
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
                    re = (0, S.useMemo)((function() {
                        if (!Z) return !1;
                        if ("duration" === Z.listingType) {
                            var e = [p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(Z.durationType),
                                t = (0, v.qG)(Y.durationType, Y.duration) && Number.isInteger(parseFloat(Z.duration));
                            return e && t
                        }
                        var r = Z.displayName.length >= 3,
                            n = Z.priceTokens >= 100 && Z.priceTokens <= 1e4 && Number.isInteger(parseFloat(Z.priceTokens)),
                            o = Z.products.length > 0 && Z.products.length <= p._1;
                        return r && n && o
                    }), [Z]),
                    ne = _ || Q || J;
                return S.createElement(S.Fragment, null, ne && S.createElement("div", null, "Loading..."), !ne && Z && S.createElement(l.JX, {
                    className: "tw-w-full tw-relative"
                }, S.createElement(l.X2, {
                    className: "tw-gap-5 tw-mb-6"
                }, S.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return N(0)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(0 === L ? "tw-border-teal-accent" : "tw-border-transparent")
                }, "Listing Information"), S.createElement("button", {
                    type: "button",
                    onClick: function() {
                        return N(1)
                    },
                    className: "tw-bg-transparent tw-py-2 tw-px-0 tw-border-0 tw-border-b-2 tw-border-solid ".concat(1 === L ? "tw-border-solid tw-border-teal-accent" : "tw-border-transparent")
                }, "Store Availability")), S.createElement("div", {
                    className: "tw-w-full tw-relative"
                }, 0 === L && S.createElement(E.Z, {
                    originalListing: Y,
                    editedListing: Z,
                    onDataChange: ee,
                    isEditing: !0,
                    products: H,
                    listingType: Z.listingType,
                    productsLoading: Q
                }), 1 === L && S.createElement(x.Z, {
                    activeListing: Z,
                    onDataChange: ee,
                    stores: W,
                    activeStore: r
                })), S.createElement("div", {
                    className: "tw-mt-8 tw-justify-between tw-gap-3 tw-flex-col sm:tw-flex-row tw-flex tw-flex-wrap"
                }, S.createElement("div", {
                    className: "tw-gap-3 tw-flex tw-flex-col sm:tw-flex-row sm:tw-max-w-1/2 tw-flex-1"
                }, S.createElement(l.zx, {
                    neutral: !0,
                    type: "button",
                    onClick: b,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Cancel"), S.createElement(l.zx, {
                    type: "button",
                    onClick: function() {
                        return T(Y)
                    },
                    danger: !0,
                    containerClasses: "md:tw-max-w-[170px] tw-flex-auto"
                }, "Delete Listing")), S.createElement(l.zx, {
                    type: "button",
                    onClick: te,
                    containerClasses: "sm:tw-max-w-[240px] tw-flex-1",
                    disabled: !re
                }, "Save"))))
            };
            k.propTypes = {
                listingId: I().string.isRequired,
                stores: I().array,
                onCancel: I().func,
                onDelete: I().func
            };
            const C = k
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
//# sourceMappingURL=128eeef56fec33d0b1d591e5254849099230f15c672fe10469ad4064bd92f075.js.map