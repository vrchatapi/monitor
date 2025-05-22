"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4372, 4363], {
        14363: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => E
            });
            var n = r(15861),
                o = r(54546),
                a = r(53359),
                s = r(76553),
                l = r(6811),
                i = r(64687),
                c = r.n(i),
                d = r(64258),
                u = r(37463),
                m = (r(22202), r(16869)),
                w = r(45697),
                p = r.n(w),
                f = r(67294),
                g = r(32981),
                v = r(92332),
                y = r(36183),
                h = (r(95896), function(e) {
                    var t = e.storeId,
                        r = e.className,
                        n = void 0 === r ? "" : r,
                        o = (0, y.md)({
                            storeId: t,
                            managementPov: !0
                        }, {
                            skip: !t
                        }),
                        a = o.data,
                        s = o.isFetching,
                        l = o.isSuccess,
                        i = o.isError;
                    return s && (u.$1, v.LM), l ? f.createElement("div", {
                        className: "".concat(n)
                    }, f.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, null == a ? void 0 : a.displayName)) : i ? f.createElement("div", {
                        className: "".concat(n)
                    }, f.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, t)) : null
                });
            h.propTypes = {
                storeId: p().string.isRequired,
                className: p().string
            };
            const x = h;
            var I = function(e) {
                var t = e.listing,
                    r = e.onCancelCallback,
                    i = void 0 === r ? function() {} : r;
                if (!t) return null;
                var w = null == t ? void 0 : t.active,
                    p = (0, g.I0)(),
                    v = (0, m.Cb)(),
                    y = (0, o.Z)(v, 2),
                    h = y[0],
                    I = y[1],
                    E = I.isLoading,
                    b = (I.isError, I.error, I.reset),
                    S = (null == t ? void 0 : t.storeIds.length) > 0,
                    N = function() {
                        i(), b()
                    },
                    T = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, h({
                                            listingId: t.id
                                        }).unwrap();
                                    case 3:
                                        p((0, d.d)({
                                            title: "Listing deleted",
                                            icon: l.f8,
                                            message: "".concat(t.displayName, " has been deleted."),
                                            color: "success",
                                            timeout: 3e3
                                        })), N(), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), p((0, d.d)({
                                            title: "Failed to delete listing",
                                            icon: s.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 9e3
                                        })), e.abrupt("return");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return w ? f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, f.createElement(u.$1, {
                    icon: a.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), f.createElement("h4", {
                    className: "tw-text-lg"
                }, "This listing is currently published. Please set it to draft before deleting.")), f.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, f.createElement(u.zx, {
                    type: "button",
                    onClick: N,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Close"))) : f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, f.createElement(u.$1, {
                    icon: a.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), S && f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                }, f.createElement("p", {
                    className: "tw-mb-0"
                }, "This listing is availalbe in the following ", (null == t ? void 0 : t.storeIds.length) || 0, " ", 1 === (null == t ? void 0 : t.storeIds.length) ? "store" : "stores", ":"), null == t ? void 0 : t.storeIds.map((function(e) {
                    return f.createElement(x, {
                        key: e,
                        storeId: e
                    })
                }))), f.createElement("h4", {
                    className: "tw-text-lg"
                }, "Are you sure you want to delete? This cannot be undone.")), f.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, f.createElement(u.zx, {
                    type: "button",
                    onClick: N,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Cancel"), f.createElement(u.zx, {
                    type: "button",
                    onClick: T,
                    loading: E,
                    containerClasses: "tw-flex-1",
                    danger: !0
                }, "Delete")))
            };
            I.propTypes = {
                listing: p().object.isRequired,
                onCancelCallback: p().func
            };
            const E = I
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => i,
                j6: () => c,
                md: () => l,
                mt: () => d
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
                l = s.useGetStoreQuery,
                i = s.useGetStoresQuery,
                c = s.useCreateStoreMutation,
                d = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=3f41a9ca8abf2251a1aa5d5233ff5ffe1eb21edef09f03dd831f6acd2e642fc5.js.map