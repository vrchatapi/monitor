"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8413], {
        53734: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(14411),
                o = r(95896),
                a = r(74205),
                l = r(45697),
                s = r.n(l),
                c = r(67294),
                i = function(e) {
                    var t = e.storeType,
                        r = void 0 === t ? null : t,
                        l = e.className;
                    e.style;
                    if (null === r) return null;
                    var s = (0, c.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = o.HH.find((function(e) {
                            return e.value === r
                        }))) || void 0 === t ? void 0 : t.label) && void 0 !== e ? e : "Unknown"
                    }), [r]);
                    return c.createElement("div", {
                        className: "".concat(l, " tw-px-2 tw-py-1 tw-bg-[#575757] tw-rounded-full tw-text-white tw-text-xs")
                    }, c.createElement(n.$1, {
                        icon: "world" === r ? a.rr : a.Yj,
                        className: "tw-mr-1"
                    }), s)
                };
            i.propTypes = {
                storeType: s().string.isRequired
            };
            const u = i
        },
        69026: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => W
            });
            var n = r(4942),
                o = r(15861),
                a = r(54546),
                l = r(76553),
                s = r(6811),
                c = r(64687),
                i = r.n(c),
                u = r(64258),
                d = r(14411),
                w = r(12752),
                m = r(93261),
                p = r(36183),
                f = r(1208),
                g = r(67294),
                v = r(32981),
                b = r(89250),
                y = r(17319),
                E = r(67263),
                S = r(45697),
                h = r.n(S),
                N = r(53734),
                k = function(e) {
                    var t = e.storeData,
                        r = void 0 === t ? null : t,
                        n = e.onSelect,
                        o = void 0 === n ? function() {} : n,
                        a = e.className;
                    if (null === r) return null;
                    var l = r.listingIds,
                        s = void 0 === l ? [] : l,
                        c = r.displayName,
                        i = r.storeType,
                        u = r.storeStatus,
                        w = r.storeContext,
                        m = r.id;
                    return g.createElement("button", {
                        type: "button",
                        className: "".concat(a, " tw-group tw-text-left tw-appearance-none tw-rounded-md tw-border-none tw-p-0 tw-bg-transparent"),
                        onClick: function() {
                            return o(m)
                        }
                    }, g.createElement("div", {
                        className: "tw-bg-grey tw-p-1 tw-rounded-md"
                    }, g.createElement("div", {
                        className: "tw-relative"
                    }, g.createElement(d.X2, {
                        className: "tw-absolute tw-p-3 tw-w-full tw-justify-between"
                    }, g.createElement(N.Z, {
                        storeType: i
                    }), g.createElement(d.$1, {
                        icon: y.di,
                        className: "".concat("published" === u ? "tw-text-green" : "tw-text-placeholder-text")
                    })), g.createElement(d.pw, {
                        className: "tw-rounded-md tw-h-36 tw-w-full",
                        imageId: null == w ? void 0 : w.imageUrl,
                        fallbackSrc: E,
                        fitToCover: !0
                    })), g.createElement("div", {
                        className: "tw-p-3"
                    }, g.createElement("p", {
                        className: "tw-text-ellipsis tw-mb-1 tw-block tw-overflow-hidden tw-whitespace-nowrap group-hover:tw-underline"
                    }, c), g.createElement("small", {
                        className: "tw-text-placeholder-text"
                    }, s.length || "0", " Listings"))))
                };
            k.propTypes = {
                storeData: h().object.isRequired,
                isDetailedView: h().bool
            };
            const x = k;
            var I = r(68055),
                O = r(95896),
                j = r(74205);
            const C = r.p + "11f3732a3ff50a45dcd540a65f0f2a813f760e739e604675aa46732e189d9fe8.png",
                P = r.p + "82ba25de48489ff56beccb326f25bf9bb6c87914269ecb1bf48898efa2d7d95c.png";
            var T = function(e) {
                var t, r, o, l, s, c = e.groups,
                    i = void 0 === c ? [] : c,
                    u = e.worlds,
                    w = void 0 === u ? [] : u,
                    m = e.stores,
                    p = void 0 === m ? [] : m,
                    f = e.user,
                    v = e.onDataChange,
                    b = void 0 === v ? function() {} : v,
                    y = e.onCancel,
                    E = void 0 === y ? function() {} : y,
                    S = e.onSubmit,
                    h = void 0 === S ? function() {} : S,
                    N = e.canSubmit,
                    k = void 0 !== N && N,
                    x = (0, g.useState)(O.Bk.WORLDS),
                    T = (0, a.Z)(x, 2),
                    D = T[0],
                    L = T[1],
                    R = (0, g.useState)(""),
                    B = (0, a.Z)(R, 2),
                    X = B[0],
                    W = B[1],
                    Z = g.useMemo((function() {
                        return f ? {
                            groups: (null == i ? void 0 : i.filter((function(e) {
                                return !p.some((function(t) {
                                    return t.groupId === e.groupId
                                }))
                            }))) || [],
                            worlds: (null == w ? void 0 : w.filter((function(e) {
                                return !p.some((function(t) {
                                    return t.worldId === e.id
                                }))
                            }))) || []
                        } : {
                            groups: [],
                            worlds: []
                        }
                    }), [i, w, f]),
                    G = (t = {}, (0, n.Z)(t, O.Bk.WORLDS, {
                        list: Z.worlds,
                        key: "id",
                        label: "World",
                        thumbSrc: P,
                        icon: j.rr
                    }), (0, n.Z)(t, O.Bk.GROUPS, {
                        list: Z.groups,
                        key: "groupId",
                        label: "Group",
                        thumbSrc: C,
                        icon: j.Yj
                    }), t),
                    J = function(e) {
                        var t = G[D].list,
                            r = G[D].key,
                            n = t.find((function(t) {
                                return t[r] === e
                            }));
                        W(n[r]), b({
                            type: D,
                            baseObj: n
                        })
                    },
                    U = function(e) {
                        L(e), b(null), W("")
                    };
                return g.createElement(d.JX, {
                    className: "tw-gap-6"
                }, g.createElement(d.JX, {
                    className: "tw-gap-5 sm:tw-flex-row"
                }, g.createElement("div", {
                    className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                    onClick: function() {
                        return U(O.Bk.WORLDS)
                    }
                }, g.createElement(d.JX, {
                    className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(D === O.Bk.WORLDS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                }, g.createElement("span", {
                    className: "".concat(D === O.Bk.WORLDS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6  tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                }, D === O.Bk.WORLDS ? g.createElement(d.$1, {
                    icon: I.LE
                }) : null), g.createElement(d.JX, null, g.createElement(d.$1, {
                    icon: j.rr,
                    width: 36,
                    className: "tw-mb-2"
                }), g.createElement("h4", null, "World Store"))), g.createElement("div", {
                    className: "tw-relative"
                }, g.createElement("div", {
                    className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                }), g.createElement("img", {
                    src: P,
                    alt: "",
                    role: "presentation",
                    className: "tw-object-cover tw-rounded-lg"
                }))), g.createElement("div", {
                    className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                    onClick: function() {
                        return U(O.Bk.GROUPS)
                    }
                }, g.createElement(d.JX, {
                    className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(D === O.Bk.GROUPS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                }, g.createElement("span", {
                    className: "".concat(D === O.Bk.GROUPS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                }, D === O.Bk.GROUPS ? g.createElement(d.$1, {
                    icon: I.LE
                }) : null), g.createElement(d.JX, null, g.createElement(d.$1, {
                    icon: j.Yj,
                    width: 36,
                    className: "tw-mb-2"
                }), g.createElement("h4", null, "Group Store"))), g.createElement("div", {
                    className: "tw-relative"
                }, g.createElement("div", {
                    className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                }), g.createElement("img", {
                    src: C,
                    alt: "",
                    role: "presentation",
                    className: "tw-object-cover tw-rounded-lg"
                })))), g.createElement(d.JX, null, g.createElement("label", {
                    htmlFor: D === O.Bk.WORLDS ? "world-select" : "group-select",
                    className: "tw-mb-2"
                }, "Select ", D === O.Bk.WORLDS ? "World" : "Group"), (o = (r = G[D]).list, l = r.label, 0 === (s = o.map((function(e) {
                    return {
                        label: e.name,
                        value: e[G[D].key]
                    }
                }))).length ? g.createElement(d.Lt, {
                    label: "No ".concat(l, "s found"),
                    disabled: !0,
                    options: [],
                    onChange: function() {}
                }) : g.createElement(d.Lt, {
                    value: X,
                    name: "".concat(l, "-select"),
                    options: s,
                    onChange: J
                }))), g.createElement(d.X2, {
                    className: "tw-gap-3 tw-w-full"
                }, g.createElement(d.zx, {
                    onClick: function(e) {
                        e.preventDefault(), E()
                    },
                    type: "button",
                    neutral: !0,
                    containerClasses: "tw-flex-1"
                }, "Cancel"), g.createElement(d.zx, {
                    onClick: function() {
                        return h()
                    },
                    type: "button",
                    containerClasses: "tw-flex-1",
                    disabled: !k
                }, "Create")))
            };
            T.propTypes = {
                user: h().object.isRequired,
                groups: h().array,
                worlds: h().array
            };
            const D = T;
            var L = r(68335);
            const R = function(e) {
                var t = e.createStore,
                    r = void 0 === t ? function() {} : t;
                return g.createElement(d.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, g.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, g.createElement(d.$1, {
                    icon: L.vJ,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start Connecting with Buyers"), g.createElement(d.JX, {
                    className: "tw-items-center"
                }, g.createElement(d.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: r
                }, "Setup a Store")))
            };

            function B(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const W = function() {
                var e = (0, v.I0)(),
                    t = (0, b.s0)(),
                    r = (0, w.Tu)(),
                    n = r.user,
                    c = r.isLoading,
                    y = (0, g.useState)(!1),
                    E = (0, a.Z)(y, 2),
                    S = E[0],
                    h = E[1],
                    N = (0, g.useState)(null),
                    k = (0, a.Z)(N, 2),
                    I = k[0],
                    O = k[1],
                    j = (0, g.useState)([]),
                    C = (0, a.Z)(j, 2),
                    P = C[0],
                    T = C[1],
                    L = (0, p.Ci)({
                        sellerId: null == n ? void 0 : n.id,
                        managementPov: !0
                    }, {
                        skip: !n
                    }),
                    B = L.data,
                    W = L.isFetching,
                    Z = (L.isSuccess, L.isError, L.error, (0, m.dj)({
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !n
                    })),
                    G = Z.data,
                    J = void 0 === G ? [] : G,
                    U = (Z.isLoading, Z.isError, Z.error, (0, f.g9)({
                        userId: null == n ? void 0 : n.id,
                        releaseStatus: "all",
                        n: 100
                    }, {
                        skip: !n
                    })),
                    q = U.data,
                    $ = void 0 === q ? [] : q,
                    M = (U.isLoading, U.isError, U.error, (0, p.j6)()),
                    _ = (0, a.Z)(M, 2),
                    z = _[0],
                    F = _[1];
                F.isLoading, F.isSuccess, F.isError, F.error;
                (0, g.useEffect)((function() {
                    J.length > 0 && n && T(J.filter((function(e) {
                        return e.ownerId === n.id
                    })))
                }), [J]);
                var Y = function() {
                        var t = (0, o.Z)(i().mark((function t() {
                            var r, n, o, a, c;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = I.type, n = I.baseObj, o = X(X(X({
                                            storeType: r
                                        }, "world" === r && {
                                            worldId: n.id
                                        }), "group" === r && {
                                            groupId: n.groupId
                                        }), {}, {
                                            displayName: n.name
                                        }), t.prev = 2, t.next = 5, z(X({}, o)).unwrap();
                                    case 5:
                                        e((0, u.d)({
                                            title: "Store Created!",
                                            icon: s.f8,
                                            message: "Your store has been created successfully!",
                                            color: "success",
                                            timeout: 3e3
                                        })), A(), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), e((0, u.d)({
                                            title: "Failed to create store!",
                                            icon: l.eH,
                                            message: null !== (a = null === (c = t.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    H = function(e) {
                        t("/home/marketplace/storefront/stores/".concat(e))
                    },
                    A = function() {
                        h(!1), O({
                            type: null,
                            baseObj: null
                        })
                    },
                    Q = c || W;
                return g.createElement(g.Fragment, null, g.createElement(d.$4, null, "Store Manager"), g.createElement(d.JX, {
                    className: "tw-@container/stores tw-w-full tw-gap-5"
                }, g.createElement(d.X2, {
                    className: "tw-w-full tw-justify-between tw-items-center"
                }, g.createElement("h4", {
                    className: "tw-mr-2"
                }, "Store Manager"), !Q && 0 !== (null == B ? void 0 : B.length) && g.createElement(d.zx, {
                    onClick: function() {
                        return h(!0)
                    },
                    className: "tw-px-3 tw-py-2"
                }, "Setup New Store")), g.createElement(d.X2, {
                    className: "tw-w-full"
                }, !Q && 0 === (null == B ? void 0 : B.length) && g.createElement(R, {
                    createStore: function() {
                        return h(!0)
                    }
                }), !Q && 0 !== (null == B ? void 0 : B.length) && g.createElement("div", {
                    className: "tw-grid tw-gap-4 tw-w-full tw-grid-cols-1 @xs/stores:tw-grid-cols-2 @sm/stores:tw-grid-cols-3 @md/stores:tw-grid-cols-4"
                }, B.map((function(e) {
                    return g.createElement(x, {
                        key: e.id,
                        storeData: e,
                        onSelect: H
                    })
                }))))), g.createElement(d.u_, {
                    isVisible: S,
                    onClose: A,
                    title: "Create Storefront",
                    slim: !0,
                    disableBackdropClick: !0
                }, g.createElement(D, {
                    worlds: $,
                    groups: P,
                    stores: B,
                    user: n,
                    onDataChange: function(e) {
                        return O(e)
                    },
                    onCancel: A,
                    onSubmit: Y,
                    canSubmit: null !== I
                })))
            }
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => c,
                j6: () => i,
                md: () => s,
                mt: () => u
            });
            var n = r(45987),
                o = r(61509),
                a = ["storeId"],
                l = o.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        o = e.n,
                                        a = void 0 === o ? 50 : o,
                                        l = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: a,
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
                                        a = e.hydrateListings,
                                        l = void 0 !== a && a,
                                        s = e.hydrateProducts,
                                        c = void 0 !== s && s,
                                        i = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: o,
                                            hydrateListings: l,
                                            hydrateProducts: c,
                                            managementPov: void 0 !== i && i
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
                                        l = void 0 === a ? [] : a,
                                        s = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: o,
                                            tags: l,
                                            description: void 0 === s ? "" : s
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
                s = l.useGetStoreQuery,
                c = l.useGetStoresQuery,
                i = l.useCreateStoreMutation,
                u = l.useUpdateStoreMutation;
            l.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=a65050c984b5aa4902e24a3e466938fd598775a3cff6ee9512c3e584d24c915b.js.map