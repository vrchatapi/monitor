"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2789, 5170], {
        85170(e, t, r) {
            r.r(t), r.d(t, {
                default: () => b
            });
            var n = r(10467),
                o = r(82544),
                s = r(82628),
                l = r(34496),
                a = r(42217),
                i = r(54756),
                d = r.n(i),
                c = r(65950),
                u = r(71661),
                m = (r(13951), r(72784)),
                w = r(5556),
                p = r.n(w),
                g = r(96540),
                v = r(6376),
                f = r(7612),
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
                        s = o.data,
                        l = o.isFetching,
                        a = o.isSuccess,
                        i = o.isError;
                    return l && (u.M2, f.z1), a ? g.createElement("div", {
                        className: "".concat(n)
                    }, g.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, null == s ? void 0 : s.displayName)) : i ? g.createElement("div", {
                        className: "".concat(n)
                    }, g.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, t)) : null
                });
            h.propTypes = {
                storeId: p().string.isRequired,
                className: p().string
            };
            const E = h;
            var x = function(e) {
                var t, r, i, w = e.listing,
                    p = e.onCancelCallback,
                    f = void 0 === p ? function() {} : p;
                if (!w) return null;
                var y = null == w ? void 0 : w.active,
                    h = (0, v.wA)(),
                    x = (0, m.Qy)(),
                    b = (0, o.A)(x, 2),
                    I = b[0],
                    S = b[1],
                    N = S.isLoading,
                    T = (S.isError, S.error, S.reset),
                    k = (null == w || null === (t = w.storeIds) || void 0 === t ? void 0 : t.length) > 0,
                    C = function() {
                        f(), T()
                    },
                    q = function() {
                        var e = (0, n.A)(d().mark(function e() {
                            var t, r;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, I({
                                            listingId: w.id
                                        }).unwrap();
                                    case 3:
                                        h((0, c.X)({
                                            title: "Listing deleted",
                                            icon: a.SG,
                                            message: "".concat(w.displayName, " has been deleted."),
                                            color: "success",
                                            timeout: 3e3
                                        })), C(), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), h((0, c.X)({
                                            title: "Failed to delete listing",
                                            icon: l.zp,
                                            message: null !== (t = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== t ? t : "Something went wrong",
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
                return y ? g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, g.createElement(u.M2, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "This listing is currently published. Please set it to draft before deleting.")), g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, g.createElement(u.$n, {
                    type: "button",
                    onClick: C,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Close"))) : g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, g.createElement(u.M2, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), k && g.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                }, g.createElement("p", {
                    className: "tw-mb-0"
                }, "This listing is available in the following ", (null == w || null === (r = w.storeIds) || void 0 === r ? void 0 : r.length) || 0, " ", 1 === (null == w || null === (i = w.storeIds) || void 0 === i ? void 0 : i.length) ? "store" : "stores", ":"), null == w ? void 0 : w.storeIds.map(function(e) {
                    return g.createElement(E, {
                        key: e,
                        storeId: e
                    })
                })), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "Are you sure you want to delete? This cannot be undone.")), g.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, g.createElement(u.$n, {
                    type: "button",
                    onClick: C,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Cancel"), g.createElement(u.$n, {
                    type: "button",
                    onClick: q,
                    loading: N,
                    containerClasses: "tw-flex-1",
                    danger: !0
                }, "Delete")))
            };
            x.propTypes = {
                listing: p().object.isRequired,
                onCancelCallback: p().func
            };
            const b = x
        },
        97087(e, t, r) {
            r.d(t, {
                HP: () => c,
                ST: () => d,
                _N: () => i,
                rg: () => a,
                s7: () => u
            });
            var n = r(80045),
                o = r(89483),
                s = ["storeId"],
                l = o.m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        o = e.n,
                                        s = void 0 === o ? 50 : o,
                                        l = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: s,
                                            offset: void 0 === l ? 0 : l
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
                                        s = e.hydrateListings,
                                        l = void 0 !== s && s,
                                        a = e.hydrateProducts,
                                        i = void 0 !== a && a,
                                        d = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: o,
                                            hydrateListings: l,
                                            hydrateProducts: i,
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
                                        s = e.tags,
                                        l = void 0 === s ? [] : s,
                                        a = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: o,
                                            tags: l,
                                            description: void 0 === a ? "" : a
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
                                        r = (0, n.A)(e, s);
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
                            }),
                            getEligibleWorlds: e.query({
                                query: function() {
                                    return {
                                        url: "economy/stores/eligibleWorlds",
                                        method: "GET"
                                    }
                                },
                                providesTags: ["Stores"]
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Stores", "Store", "UserGroups"]
                }),
                a = l.useGetStoreQuery,
                i = l.useGetStoresQuery,
                d = l.useCreateStoreMutation,
                c = l.useUpdateStoreMutation,
                u = (l.useDeleteStoreMutation, l.useGetEligibleWorldsQuery)
        }
    }
]);
//# sourceMappingURL=257fe04a8075e035b3c9ffa7f46b8b739020d9186d9c7fff63f5f1202a9b73a7.js.map