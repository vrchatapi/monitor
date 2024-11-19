"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8413], {
        68335: (e, t) => {
            var r = "store",
                n = [],
                o = "f54e",
                a = "M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, n, o, a]
            }, t.vJ = t.DF
        },
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
                C = r(95896),
                O = r(74205);
            const j = r.p + "11f3732a3ff50a45dcd540a65f0f2a813f760e739e604675aa46732e189d9fe8.png",
                L = r.p + "82ba25de48489ff56beccb326f25bf9bb6c87914269ecb1bf48898efa2d7d95c.png";
            var D = function(e) {
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
                    x = (0, g.useState)(C.Bk.WORLDS),
                    D = (0, a.Z)(x, 2),
                    P = D[0],
                    T = D[1],
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
                    G = (t = {}, (0, n.Z)(t, C.Bk.WORLDS, {
                        list: Z.worlds,
                        key: "id",
                        label: "World",
                        thumbSrc: L,
                        icon: O.rr
                    }), (0, n.Z)(t, C.Bk.GROUPS, {
                        list: Z.groups,
                        key: "groupId",
                        label: "Group",
                        thumbSrc: j,
                        icon: O.Yj
                    }), t),
                    J = function(e) {
                        var t = G[P].list,
                            r = G[P].key,
                            n = t.find((function(t) {
                                return t[r] === e
                            }));
                        W(n[r]), b({
                            type: P,
                            baseObj: n
                        })
                    },
                    U = function(e) {
                        T(e), b(null), W("")
                    };
                return g.createElement(d.JX, {
                    className: "tw-gap-6"
                }, g.createElement(d.X2, {
                    className: "tw-gap-5"
                }, g.createElement("div", {
                    className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                    onClick: function() {
                        return U(C.Bk.WORLDS)
                    }
                }, g.createElement(d.JX, {
                    className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(P === C.Bk.WORLDS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                }, g.createElement("span", {
                    className: "".concat(P === C.Bk.WORLDS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6  tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                }, P === C.Bk.WORLDS ? g.createElement(d.$1, {
                    icon: I.LE
                }) : null), g.createElement(d.JX, null, g.createElement(d.$1, {
                    icon: O.rr,
                    width: 36,
                    className: "tw-mb-2"
                }), g.createElement("h4", null, "World Store"))), g.createElement("div", {
                    className: "tw-relative"
                }, g.createElement("div", {
                    className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                }), g.createElement("img", {
                    src: L,
                    alt: "",
                    role: "presentation",
                    className: "tw-object-cover tw-rounded-lg"
                }))), g.createElement("div", {
                    className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                    onClick: function() {
                        return U(C.Bk.GROUPS)
                    }
                }, g.createElement(d.JX, {
                    className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(P === C.Bk.GROUPS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                }, g.createElement("span", {
                    className: "".concat(P === C.Bk.GROUPS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                }, P === C.Bk.GROUPS ? g.createElement(d.$1, {
                    icon: I.LE
                }) : null), g.createElement(d.JX, null, g.createElement(d.$1, {
                    icon: O.Yj,
                    width: 36,
                    className: "tw-mb-2"
                }), g.createElement("h4", null, "Group Store"))), g.createElement("div", {
                    className: "tw-relative"
                }, g.createElement("div", {
                    className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                }), g.createElement("img", {
                    src: j,
                    alt: "",
                    role: "presentation",
                    className: "tw-object-cover tw-rounded-lg"
                })))), g.createElement(d.JX, null, g.createElement("label", {
                    htmlFor: P === C.Bk.WORLDS ? "world-select" : "group-select",
                    className: "tw-mb-2"
                }, "Select ", P === C.Bk.WORLDS ? "World" : "Group"), (o = (r = G[P]).list, l = r.label, 0 === (s = o.map((function(e) {
                    return {
                        label: e.name,
                        value: e[G[P].key]
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
            D.propTypes = {
                user: h().object.isRequired,
                groups: h().array,
                worlds: h().array
            };
            const P = D;
            var T = r(68335);
            const R = function(e) {
                var t = e.createStore,
                    r = void 0 === t ? function() {} : t;
                return g.createElement(d.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, g.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, g.createElement(d.$1, {
                    icon: T.vJ,
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
                    C = k[1],
                    O = (0, g.useState)([]),
                    j = (0, a.Z)(O, 2),
                    L = j[0],
                    D = j[1],
                    T = (0, p.Ci)({
                        sellerId: null == n ? void 0 : n.id,
                        managementPov: !0
                    }, {
                        skip: !n
                    }),
                    B = T.data,
                    W = T.isFetching,
                    Z = (T.isSuccess, T.isError, T.error, (0, m.dj)({
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !n
                    })),
                    G = Z.data,
                    J = void 0 === G ? [] : G,
                    U = (Z.isLoading, Z.isError, Z.error, (0, f.g9)({
                        userId: null == n ? void 0 : n.id,
                        releaseStatus: "all"
                    }, {
                        skip: !n
                    })),
                    q = U.data,
                    M = void 0 === q ? [] : q,
                    z = (U.isLoading, U.isError, U.error, (0, p.j6)()),
                    $ = (0, a.Z)(z, 2),
                    _ = $[0],
                    F = $[1];
                F.isLoading, F.isSuccess, F.isError, F.error;
                (0, g.useEffect)((function() {
                    J.length > 0 && n && D(J.filter((function(e) {
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
                                        }), t.prev = 2, t.next = 5, _(X({}, o)).unwrap();
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
                        h(!1), C({
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
                    slim: !0
                }, g.createElement(P, {
                    worlds: M,
                    groups: L,
                    stores: B,
                    user: n,
                    onDataChange: function(e) {
                        return C(e)
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
//# sourceMappingURL=3aee9f86b5ff78213b48bf05549ebfe1e6a5fa81a004e1decd120e994ef0456d.js.map