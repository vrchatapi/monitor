"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2789, 5170], {
        85170(e, t, r) {
            r.r(t), r.d(t, {
                default: () => I
            });
            var n = r(10467),
                o = r(82544),
                a = r(82628),
                s = r(34496),
                l = r(42217),
                i = r(54756),
                c = r.n(i),
                d = r(65950),
                u = r(15033),
                m = (r(13951), r(72784)),
                w = r(5556),
                p = r.n(w),
                g = r(96540),
                f = r(6376),
                v = r(7612),
                y = r(97087),
                h = (r(31069), function(e) {
                    var t = e.storeId,
                        r = e.className,
                        n = void 0 === r ? "" : r,
                        o = (0, y.rg)({
                            storeId: t,
                            managementPov: !0
                        }, {
                            skip: !t
                        }),
                        a = o.data,
                        s = o.isFetching,
                        l = o.isSuccess,
                        i = o.isError;
                    return s && (u.M2, v.z1), l ? g.createElement("div", {
                        className: "".concat(n)
                    }, g.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, null == a ? void 0 : a.displayName)) : i ? g.createElement("div", {
                        className: "".concat(n)
                    }, g.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, t)) : null
                });
            h.propTypes = {
                storeId: p().string.isRequired,
                className: p().string
            };
            const x = h;
            var E = function(e) {
                var t = e.listing,
                    r = e.onCancelCallback,
                    i = void 0 === r ? function() {} : r;
                if (!t) return null;
                var w = null == t ? void 0 : t.active,
                    p = (0, f.wA)(),
                    v = (0, m.Qy)(),
                    y = (0, o.A)(v, 2),
                    h = y[0],
                    E = y[1],
                    I = E.isLoading,
                    b = (E.isError, E.error, E.reset),
                    S = (null == t ? void 0 : t.storeIds.length) > 0,
                    N = function() {
                        i(), b()
                    },
                    T = function() {
                        var e = (0, n.A)(c().mark(function e() {
                            var r, n;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, h({
                                            listingId: t.id
                                        }).unwrap();
                                    case 3:
                                        p((0, d.X)({
                                            title: "Listing deleted",
                                            icon: l.SG,
                                            message: "".concat(t.displayName, " has been deleted."),
                                            color: "success",
                                            timeout: 3e3
                                        })), N(), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), p((0, d.X)({
                                            title: "Failed to delete listing",
                                            icon: s.zp,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 9e3
                                        })), e.abrupt("return");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 7]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return w ? g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, g.createElement(u.M2, {
                    icon: a.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "This listing is currently published. Please set it to draft before deleting.")), g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, g.createElement(u.$n, {
                    type: "button",
                    onClick: N,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Close"))) : g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, g.createElement(u.M2, {
                    icon: a.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), S && g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                }, g.createElement("p", {
                    className: "tw-mb-0"
                }, "This listing is availalbe in the following ", (null == t ? void 0 : t.storeIds.length) || 0, " ", 1 === (null == t ? void 0 : t.storeIds.length) ? "store" : "stores", ":"), null == t ? void 0 : t.storeIds.map(function(e) {
                    return g.createElement(x, {
                        key: e,
                        storeId: e
                    })
                })), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "Are you sure you want to delete? This cannot be undone.")), g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, g.createElement(u.$n, {
                    type: "button",
                    onClick: N,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Cancel"), g.createElement(u.$n, {
                    type: "button",
                    onClick: T,
                    loading: I,
                    containerClasses: "tw-flex-1",
                    danger: !0
                }, "Delete")))
            };
            E.propTypes = {
                listing: p().object.isRequired,
                onCancelCallback: p().func
            };
            const I = E
        },
        97087(e, t, r) {
            r.d(t, {
                HP: () => d,
                ST: () => c,
                _N: () => i,
                rg: () => l
            });
            var n = r(80045),
                o = r(89483),
                a = ["storeId"],
                s = o.m.injectEndpoints({
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
                                        l = e.hydrateProducts,
                                        i = void 0 !== l && l,
                                        c = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: o,
                                            hydrateListings: s,
                                            hydrateProducts: i,
                                            managementPov: void 0 !== c && c
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
                                        l = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: o,
                                            tags: s,
                                            description: void 0 === l ? "" : l
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
                                        r = (0, n.A)(e, a);
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
                l = s.useGetStoreQuery,
                i = s.useGetStoresQuery,
                c = s.useCreateStoreMutation,
                d = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=0d6b58ad50395a1991488e1d08464b343c6b321a7d9f61d1497eb3b2d56d57b6.js.map