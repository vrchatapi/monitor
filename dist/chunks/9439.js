(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9439], {
        16465(e, t, r) {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r(15033),
                o = r(31069),
                a = r(27070),
                l = r(5556),
                s = r.n(l),
                c = r(96540),
                i = function(e) {
                    var t = e.storeType,
                        r = void 0 === t ? null : t,
                        l = e.className;
                    e.style;
                    if (null === r) return null;
                    var s = (0, c.useMemo)(function() {
                        var e, t;
                        return null !== (e = null === (t = o.Td.find(function(e) {
                            return e.value === r
                        })) || void 0 === t ? void 0 : t.label) && void 0 !== e ? e : "Unknown"
                    }, [r]);
                    return c.createElement("div", {
                        className: "".concat(l, " tw-px-2 tw-py-1 tw-bg-[#575757] tw-opacity-90 tw-rounded-full tw-text-white tw-text-xs")
                    }, c.createElement(n.M2, {
                        icon: "world" === r ? a.vrcWorld : a.vrcGroup,
                        className: "tw-mr-1"
                    }), s, " Store")
                };
            i.propTypes = {
                storeType: s().string.isRequired
            };
            const u = i
        },
        79439(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => q
            });
            var n = r(64467),
                o = r(10467),
                a = r(15902),
                l = r(34496),
                s = r(42217),
                c = r(54756),
                i = r.n(c),
                u = r(65950),
                d = r(15033),
                w = r(194),
                m = r(40085),
                p = r(97087),
                f = r(60188),
                g = r(96540),
                v = r(6376),
                b = r(47767),
                y = r(53065),
                h = r(75171),
                S = r.n(h),
                E = r(5556),
                N = r.n(E),
                I = r(16465),
                x = function(e) {
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
                    }, g.createElement(d.fI, {
                        className: "tw-absolute tw-p-3 tw-w-full tw-justify-between tw-z-10"
                    }, g.createElement(I.A, {
                        storeType: i
                    }), g.createElement(d.M2, {
                        icon: y.GE,
                        className: "".concat("published" === u ? "tw-text-green" : "tw-text-placeholder-text")
                    })), g.createElement(d.Oo, {
                        className: "tw-rounded-md tw-h-36 tw-w-full",
                        imageId: null == w ? void 0 : w.imageUrl,
                        fallbackSrc: S(),
                        fitToCover: !0,
                        gradientOverlayClassName: "tw-bg-gradient-to-b"
                    })), g.createElement("div", {
                        className: "tw-p-3"
                    }, g.createElement("p", {
                        className: "tw-text-ellipsis tw-mb-1 tw-block tw-overflow-hidden tw-whitespace-nowrap group-hover:tw-underline"
                    }, c), g.createElement("small", {
                        className: "tw-text-light-grey"
                    }, s.length || "0", " Listings"))))
                };
            x.propTypes = {
                storeData: N().object.isRequired,
                isDetailedView: N().bool
            };
            const O = x;
            var C = r(81617),
                j = r(31069),
                k = r(27070),
                T = r(36371),
                P = r.n(T),
                D = r(60644),
                G = r.n(D),
                A = function(e) {
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
                        h = void 0 === y ? function() {} : y,
                        S = e.onSubmit,
                        E = void 0 === S ? function() {} : S,
                        N = e.canSubmit,
                        I = void 0 !== N && N,
                        x = (0, g.useState)(j.y.WORLDS),
                        O = (0, a.A)(x, 2),
                        T = O[0],
                        D = O[1],
                        A = (0, g.useState)(""),
                        L = (0, a.A)(A, 2),
                        R = L[0],
                        W = L[1],
                        M = g.useMemo(function() {
                            return f ? {
                                groups: (null == i ? void 0 : i.filter(function(e) {
                                    return !p.some(function(t) {
                                        return t.groupId === e.groupId
                                    })
                                })) || [],
                                worlds: (null == w ? void 0 : w.filter(function(e) {
                                    return !p.some(function(t) {
                                        return t.worldId === e.id
                                    })
                                })) || []
                            } : {
                                groups: [],
                                worlds: []
                            }
                        }, [i, w, f]),
                        U = (t = {}, (0, n.A)(t, j.y.WORLDS, {
                            list: M.worlds,
                            key: "id",
                            label: "World",
                            thumbSrc: G(),
                            icon: k.vrcWorld
                        }), (0, n.A)(t, j.y.GROUPS, {
                            list: M.groups,
                            key: "groupId",
                            label: "Group",
                            thumbSrc: P(),
                            icon: k.vrcGroup
                        }), t),
                        q = function(e) {
                            var t = U[T].list,
                                r = U[T].key,
                                n = t.find(function(t) {
                                    return t[r] === e
                                });
                            W(n[r]), b({
                                type: T,
                                baseObj: n
                            })
                        },
                        _ = function(e) {
                            D(e), b(null), W("")
                        };
                    return g.createElement(d.fv, {
                        className: "tw-gap-6"
                    }, g.createElement(d.fv, {
                        className: "tw-gap-5 sm:tw-flex-row"
                    }, g.createElement("div", {
                        className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                        onClick: function() {
                            return _(j.y.WORLDS)
                        }
                    }, g.createElement(d.fv, {
                        className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(T === j.y.WORLDS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                    }, g.createElement("span", {
                        className: "".concat(T === j.y.WORLDS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6  tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, T === j.y.WORLDS ? g.createElement(d.M2, {
                        icon: C.e6
                    }) : null), g.createElement(d.fv, null, g.createElement(d.M2, {
                        icon: k.vrcWorld,
                        width: 36,
                        className: "tw-mb-2"
                    }), g.createElement("h4", null, "World Store"))), g.createElement("div", {
                        className: "tw-relative"
                    }, g.createElement("div", {
                        className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                    }), g.createElement("img", {
                        src: G(),
                        alt: "",
                        role: "presentation",
                        className: "tw-object-cover tw-rounded-lg"
                    }))), g.createElement("div", {
                        className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                        onClick: function() {
                            return _(j.y.GROUPS)
                        }
                    }, g.createElement(d.fv, {
                        className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(T === j.y.GROUPS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                    }, g.createElement("span", {
                        className: "".concat(T === j.y.GROUPS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, T === j.y.GROUPS ? g.createElement(d.M2, {
                        icon: C.e6
                    }) : null), g.createElement(d.fv, null, g.createElement(d.M2, {
                        icon: k.vrcGroup,
                        width: 36,
                        className: "tw-mb-2"
                    }), g.createElement("h4", null, "Group Store"))), g.createElement("div", {
                        className: "tw-relative"
                    }, g.createElement("div", {
                        className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                    }), g.createElement("img", {
                        src: P(),
                        alt: "",
                        role: "presentation",
                        className: "tw-object-cover tw-rounded-lg"
                    })))), g.createElement(d.fv, null, g.createElement("label", {
                        htmlFor: T === j.y.WORLDS ? "world-select" : "group-select",
                        className: "tw-mb-2"
                    }, "Select ", T === j.y.WORLDS ? "World" : "Group"), (o = (r = U[T]).list, l = r.label, 0 === (s = o.map(function(e) {
                        return {
                            label: e.name,
                            value: e[U[T].key]
                        }
                    })).length ? g.createElement(d.ms, {
                        label: "No ".concat(l, "s found"),
                        disabled: !0,
                        options: [],
                        onChange: function() {}
                    }) : g.createElement(d.ms, {
                        value: R,
                        name: "".concat(l, "-select"),
                        options: s,
                        onChange: q
                    }))), g.createElement(d.fI, {
                        className: "tw-gap-3 tw-w-full"
                    }, g.createElement(d.$n, {
                        onClick: function(e) {
                            e.preventDefault(), h()
                        },
                        type: "button",
                        neutral: !0,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), g.createElement(d.$n, {
                        onClick: function() {
                            return E()
                        },
                        type: "button",
                        containerClasses: "tw-flex-1",
                        disabled: !I
                    }, "Create")))
                };
            A.propTypes = {
                user: N().object.isRequired,
                groups: N().array,
                worlds: N().array
            };
            const L = A;
            var R = r(78244);
            const W = function(e) {
                var t = e.createStore,
                    r = void 0 === t ? function() {} : t;
                return g.createElement(d.fv, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, g.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, g.createElement(d.M2, {
                    icon: R.H3,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), g.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start Connecting with Buyers"), g.createElement(d.fv, {
                    className: "tw-items-center"
                }, g.createElement(d.$n, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: r
                }, "Setup a Store")))
            };

            function M(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const q = function() {
                var e = (0, v.wA)(),
                    t = (0, b.Zp)(),
                    r = (0, w.a$)(),
                    n = r.user,
                    c = r.isLoading,
                    y = (0, g.useState)(!1),
                    h = (0, a.A)(y, 2),
                    S = h[0],
                    E = h[1],
                    N = (0, g.useState)(null),
                    I = (0, a.A)(N, 2),
                    x = I[0],
                    C = I[1],
                    j = (0, g.useState)([]),
                    k = (0, a.A)(j, 2),
                    T = k[0],
                    P = k[1],
                    D = (0, p._N)({
                        sellerId: null == n ? void 0 : n.id,
                        managementPov: !0
                    }, {
                        skip: !n
                    }),
                    G = D.data,
                    A = D.isFetching,
                    R = (D.isSuccess, D.isError, D.error, (0, m.Yj)({
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !n
                    })),
                    M = R.data,
                    q = void 0 === M ? [] : M,
                    _ = (R.isLoading, R.isError, R.error, (0, f.u7)({
                        userId: null == n ? void 0 : n.id,
                        releaseStatus: "all",
                        n: 100
                    }, {
                        skip: !n
                    })),
                    $ = _.data,
                    F = void 0 === $ ? [] : $,
                    z = (_.isLoading, _.isError, _.error, (0, p.ST)()),
                    Q = (0, a.A)(z, 2),
                    B = Q[0],
                    H = Q[1];
                H.isLoading, H.isSuccess, H.isError, H.error;
                (0, g.useEffect)(function() {
                    q.length > 0 && n && P(q.filter(function(e) {
                        return e.ownerId === n.id
                    }))
                }, [q]);
                var V = null == G ? void 0 : G.some(function(e) {
                        return "unpublished" === e.storeStatus
                    }),
                    X = function() {
                        var t = (0, o.A)(i().mark(function t() {
                            var r, n, o, a, c;
                            return i().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = x.type, n = x.baseObj, o = U(U(U({
                                            storeType: r
                                        }, "world" === r && {
                                            worldId: n.id
                                        }), "group" === r && {
                                            groupId: n.groupId
                                        }), {}, {
                                            displayName: n.name
                                        }), t.prev = 2, t.next = 5, B(U({}, o)).unwrap();
                                    case 5:
                                        e((0, u.X)({
                                            title: "Store Created!",
                                            icon: s.SG,
                                            message: "Your store has been created successfully!",
                                            color: "success",
                                            timeout: 3e3
                                        })), Z(), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), e((0, u.X)({
                                            title: "Failed to create store!",
                                            icon: l.zp,
                                            message: null !== (a = null === (c = t.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [2, 9]
                            ])
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    Y = function(e) {
                        t("/home/marketplace/storefront/stores/".concat(e))
                    },
                    Z = function() {
                        E(!1), C({
                            type: null,
                            baseObj: null
                        })
                    },
                    J = c || A;
                return g.createElement(g.Fragment, null, g.createElement(d.Qc, null, "Store Manager"), g.createElement(d.fv, {
                    className: "tw-@container/stores tw-w-full tw-gap-5"
                }, g.createElement(d.fI, {
                    className: "tw-w-full tw-justify-between tw-items-center"
                }, g.createElement("h4", {
                    className: "tw-mr-2"
                }, "Store Manager"), !J && 0 !== (null == G ? void 0 : G.length) && g.createElement(d.$n, {
                    onClick: function() {
                        return E(!0)
                    },
                    className: "tw-px-3 tw-py-2"
                }, "Setup New Store")), V && !A && g.createElement(d.$T, {
                    type: "warn",
                    className: "tw-mt-2 tw-flex-row"
                }, "Some of your stores are disabled. Enable them so users can browse and purchase your listings."), g.createElement(d.fI, {
                    className: "tw-w-full"
                }, !J && 0 === (null == G ? void 0 : G.length) && g.createElement(W, {
                    createStore: function() {
                        return E(!0)
                    }
                }), !J && 0 !== (null == G ? void 0 : G.length) && g.createElement("div", {
                    className: "tw-grid tw-gap-4 tw-w-full tw-grid-cols-1 @xs/stores:tw-grid-cols-2 @sm/stores:tw-grid-cols-3 @md/stores:tw-grid-cols-4"
                }, G.map(function(e) {
                    return g.createElement(O, {
                        key: e.id,
                        storeData: e,
                        onSelect: Y
                    })
                })))), g.createElement(d.aF, {
                    isVisible: S,
                    onClose: Z,
                    title: "Create Storefront",
                    slim: !0,
                    disableBackdropClick: !0
                }, g.createElement(L, {
                    worlds: F,
                    groups: T,
                    stores: G,
                    user: n,
                    onDataChange: function(e) {
                        return C(e)
                    },
                    onCancel: Z,
                    onSubmit: X,
                    canSubmit: null !== x
                })))
            }
        },
        97087(e, t, r) {
            "use strict";
            r.d(t, {
                HP: () => u,
                ST: () => i,
                _N: () => c,
                rg: () => s
            });
            var n = r(80045),
                o = r(89483),
                a = ["storeId"],
                l = o.m.injectEndpoints({
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
                s = l.useGetStoreQuery,
                c = l.useGetStoresQuery,
                i = l.useCreateStoreMutation,
                u = l.useUpdateStoreMutation;
            l.useDeleteStoreMutation
        },
        36371(e, t, r) {
            e.exports = {
                srcSet: r.p + "cb8d96944023eced-540w.png 540w",
                images: [{
                    path: r.p + "cb8d96944023eced-540w.png",
                    width: 540,
                    height: 541
                }],
                src: r.p + "cb8d96944023eced-540w.png",
                toString: function() {
                    return r.p + "cb8d96944023eced-540w.png"
                },
                width: 540,
                height: 541
            }
        },
        60644(e, t, r) {
            e.exports = {
                srcSet: r.p + "56f4e6868d4bb940-540w.png 540w",
                images: [{
                    path: r.p + "56f4e6868d4bb940-540w.png",
                    width: 540,
                    height: 540
                }],
                src: r.p + "56f4e6868d4bb940-540w.png",
                toString: function() {
                    return r.p + "56f4e6868d4bb940-540w.png"
                },
                width: 540,
                height: 540
            }
        }
    }
]);
//# sourceMappingURL=7544c0986a767d9c99259c6d5198ae94e4ffe58ae6f72cb371e174070a9388c3.js.map