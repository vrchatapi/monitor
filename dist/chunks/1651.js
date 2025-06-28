(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1651], {
        53734: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(37463),
                o = r(95896),
                a = r(99162),
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
                        className: "".concat(l, " tw-px-2 tw-py-1 tw-bg-[#575757] tw-opacity-90 tw-rounded-full tw-text-white tw-text-xs")
                    }, c.createElement(n.$1, {
                        icon: "world" === r ? a.vrcWorld : a.vrcGroup,
                        className: "tw-mr-1"
                    }), s, " Store")
                };
            i.propTypes = {
                storeType: s().string.isRequired
            };
            const u = i
        },
        51651: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => q
            });
            var n = r(4942),
                o = r(15861),
                a = r(54546),
                l = r(76553),
                s = r(6811),
                c = r(64687),
                i = r.n(c),
                u = r(64258),
                d = r(37463),
                w = r(17383),
                m = r(93261),
                p = r(36183),
                g = r(1208),
                f = r(67294),
                v = r(32981),
                b = r(89250),
                y = r(17319),
                h = r(51806),
                E = r.n(h),
                S = r(45697),
                N = r.n(S),
                k = r(53734),
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
                    return f.createElement("button", {
                        type: "button",
                        className: "".concat(a, " tw-group tw-text-left tw-appearance-none tw-rounded-md tw-border-none tw-p-0 tw-bg-transparent"),
                        onClick: function() {
                            return o(m)
                        }
                    }, f.createElement("div", {
                        className: "tw-bg-grey tw-p-1 tw-rounded-md"
                    }, f.createElement("div", {
                        className: "tw-relative"
                    }, f.createElement(d.X2, {
                        className: "tw-absolute tw-p-3 tw-w-full tw-justify-between tw-z-10"
                    }, f.createElement(k.Z, {
                        storeType: i
                    }), f.createElement(d.$1, {
                        icon: y.di,
                        className: "".concat("published" === u ? "tw-text-green" : "tw-text-placeholder-text")
                    })), f.createElement(d.pw, {
                        className: "tw-rounded-md tw-h-36 tw-w-full",
                        imageId: null == w ? void 0 : w.imageUrl,
                        fallbackSrc: E(),
                        fitToCover: !0,
                        gradientOverlayClassName: "tw-bg-gradient-to-b"
                    })), f.createElement("div", {
                        className: "tw-p-3"
                    }, f.createElement("p", {
                        className: "tw-text-ellipsis tw-mb-1 tw-block tw-overflow-hidden tw-whitespace-nowrap group-hover:tw-underline"
                    }, c), f.createElement("small", {
                        className: "tw-text-light-grey"
                    }, s.length || "0", " Listings"))))
                };
            x.propTypes = {
                storeData: N().object.isRequired,
                isDetailedView: N().bool
            };
            const I = x;
            var O = r(68055),
                C = r(95896),
                j = r(99162),
                P = r(46660),
                T = r.n(P),
                D = r(3249),
                L = r.n(D),
                R = function(e) {
                    var t, r, o, l, s, c = e.groups,
                        i = void 0 === c ? [] : c,
                        u = e.worlds,
                        w = void 0 === u ? [] : u,
                        m = e.stores,
                        p = void 0 === m ? [] : m,
                        g = e.user,
                        v = e.onDataChange,
                        b = void 0 === v ? function() {} : v,
                        y = e.onCancel,
                        h = void 0 === y ? function() {} : y,
                        E = e.onSubmit,
                        S = void 0 === E ? function() {} : E,
                        N = e.canSubmit,
                        k = void 0 !== N && N,
                        x = (0, f.useState)(C.Bk.WORLDS),
                        I = (0, a.Z)(x, 2),
                        P = I[0],
                        D = I[1],
                        R = (0, f.useState)(""),
                        W = (0, a.Z)(R, 2),
                        B = W[0],
                        G = W[1],
                        X = f.useMemo((function() {
                            return g ? {
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
                        }), [i, w, g]),
                        Z = (t = {}, (0, n.Z)(t, C.Bk.WORLDS, {
                            list: X.worlds,
                            key: "id",
                            label: "World",
                            thumbSrc: L(),
                            icon: j.vrcWorld
                        }), (0, n.Z)(t, C.Bk.GROUPS, {
                            list: X.groups,
                            key: "groupId",
                            label: "Group",
                            thumbSrc: T(),
                            icon: j.vrcGroup
                        }), t),
                        q = function(e) {
                            var t = Z[P].list,
                                r = Z[P].key,
                                n = t.find((function(t) {
                                    return t[r] === e
                                }));
                            G(n[r]), b({
                                type: P,
                                baseObj: n
                            })
                        },
                        J = function(e) {
                            D(e), b(null), G("")
                        };
                    return f.createElement(d.JX, {
                        className: "tw-gap-6"
                    }, f.createElement(d.JX, {
                        className: "tw-gap-5 sm:tw-flex-row"
                    }, f.createElement("div", {
                        className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                        onClick: function() {
                            return J(C.Bk.WORLDS)
                        }
                    }, f.createElement(d.JX, {
                        className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(P === C.Bk.WORLDS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                    }, f.createElement("span", {
                        className: "".concat(P === C.Bk.WORLDS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6  tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, P === C.Bk.WORLDS ? f.createElement(d.$1, {
                        icon: O.LE
                    }) : null), f.createElement(d.JX, null, f.createElement(d.$1, {
                        icon: j.vrcWorld,
                        width: 36,
                        className: "tw-mb-2"
                    }), f.createElement("h4", null, "World Store"))), f.createElement("div", {
                        className: "tw-relative"
                    }, f.createElement("div", {
                        className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                    }), f.createElement("img", {
                        src: L(),
                        alt: "",
                        role: "presentation",
                        className: "tw-object-cover tw-rounded-lg"
                    }))), f.createElement("div", {
                        className: "tw-relative tw-w-[270px] tw-cursor-pointer",
                        onClick: function() {
                            return J(C.Bk.GROUPS)
                        }
                    }, f.createElement(d.JX, {
                        className: "tw-w-full tw-h-full tw-absolute tw-justify-between tw-p-3 tw-rounded-lg tw-ring-2 tw-z-10 ".concat(P === C.Bk.GROUPS ? "tw-ring-teal-accent" : "tw-ring-hr-line-color")
                    }, f.createElement("span", {
                        className: "".concat(P === C.Bk.GROUPS ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, P === C.Bk.GROUPS ? f.createElement(d.$1, {
                        icon: O.LE
                    }) : null), f.createElement(d.JX, null, f.createElement(d.$1, {
                        icon: j.vrcGroup,
                        width: 36,
                        className: "tw-mb-2"
                    }), f.createElement("h4", null, "Group Store"))), f.createElement("div", {
                        className: "tw-relative"
                    }, f.createElement("div", {
                        className: "tw-bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] tw-absolute tw-w-full tw-h-full tw-rounded-lg"
                    }), f.createElement("img", {
                        src: T(),
                        alt: "",
                        role: "presentation",
                        className: "tw-object-cover tw-rounded-lg"
                    })))), f.createElement(d.JX, null, f.createElement("label", {
                        htmlFor: P === C.Bk.WORLDS ? "world-select" : "group-select",
                        className: "tw-mb-2"
                    }, "Select ", P === C.Bk.WORLDS ? "World" : "Group"), (o = (r = Z[P]).list, l = r.label, 0 === (s = o.map((function(e) {
                        return {
                            label: e.name,
                            value: e[Z[P].key]
                        }
                    }))).length ? f.createElement(d.Lt, {
                        label: "No ".concat(l, "s found"),
                        disabled: !0,
                        options: [],
                        onChange: function() {}
                    }) : f.createElement(d.Lt, {
                        value: B,
                        name: "".concat(l, "-select"),
                        options: s,
                        onChange: q
                    }))), f.createElement(d.X2, {
                        className: "tw-gap-3 tw-w-full"
                    }, f.createElement(d.zx, {
                        onClick: function(e) {
                            e.preventDefault(), h()
                        },
                        type: "button",
                        neutral: !0,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), f.createElement(d.zx, {
                        onClick: function() {
                            return S()
                        },
                        type: "button",
                        containerClasses: "tw-flex-1",
                        disabled: !k
                    }, "Create")))
                };
            R.propTypes = {
                user: N().object.isRequired,
                groups: N().array,
                worlds: N().array
            };
            const W = R;
            var B = r(68335);
            const G = function(e) {
                var t = e.createStore,
                    r = void 0 === t ? function() {} : t;
                return f.createElement(d.JX, {
                    className: " tw-@container/listings-cold tw-text-center tw-gap-5 tw-my-20 tw-justify-center tw-items-center tw-w-full"
                }, f.createElement("div", {
                    className: "tw-p-4 tw-bg-grey tw-items-center tw-rounded-full tw-w-[120px] tw-h-[120px] tw-flex tw-justify-center"
                }, f.createElement(d.$1, {
                    icon: B.vJ,
                    className: "tw-text-5xl",
                    role: "presentation",
                    alt: "",
                    color: "#9C9C9C"
                })), f.createElement("h4", {
                    className: "tw-text-lg"
                }, "Start Connecting with Buyers"), f.createElement(d.JX, {
                    className: "tw-items-center"
                }, f.createElement(d.zx, {
                    containerClasses: "tw-mb-3 tw-w-[200px]",
                    onClick: r
                }, "Setup a Store")))
            };

            function X(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const q = function() {
                var e = (0, v.I0)(),
                    t = (0, b.s0)(),
                    r = (0, w.Tu)(),
                    n = r.user,
                    c = r.isLoading,
                    y = (0, f.useState)(!1),
                    h = (0, a.Z)(y, 2),
                    E = h[0],
                    S = h[1],
                    N = (0, f.useState)(null),
                    k = (0, a.Z)(N, 2),
                    x = k[0],
                    O = k[1],
                    C = (0, f.useState)([]),
                    j = (0, a.Z)(C, 2),
                    P = j[0],
                    T = j[1],
                    D = (0, p.Ci)({
                        sellerId: null == n ? void 0 : n.id,
                        managementPov: !0
                    }, {
                        skip: !n
                    }),
                    L = D.data,
                    R = D.isFetching,
                    B = (D.isSuccess, D.isError, D.error, (0, m.dj)({
                        userId: null == n ? void 0 : n.id
                    }, {
                        skip: !n
                    })),
                    X = B.data,
                    q = void 0 === X ? [] : X,
                    J = (B.isLoading, B.isError, B.error, (0, g.Ld)({
                        userId: null == n ? void 0 : n.id,
                        releaseStatus: "all",
                        n: 100
                    }, {
                        skip: !n
                    })),
                    U = J.data,
                    $ = void 0 === U ? [] : U,
                    z = (J.isLoading, J.isError, J.error, (0, p.j6)()),
                    M = (0, a.Z)(z, 2),
                    _ = M[0],
                    F = M[1];
                F.isLoading, F.isSuccess, F.isError, F.error;
                (0, f.useEffect)((function() {
                    q.length > 0 && n && T(q.filter((function(e) {
                        return e.ownerId === n.id
                    })))
                }), [q]);
                var H = null == L ? void 0 : L.some((function(e) {
                        return "unpublished" === e.storeStatus
                    })),
                    A = function() {
                        var t = (0, o.Z)(i().mark((function t() {
                            var r, n, o, a, c;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = x.type, n = x.baseObj, o = Z(Z(Z({
                                            storeType: r
                                        }, "world" === r && {
                                            worldId: n.id
                                        }), "group" === r && {
                                            groupId: n.groupId
                                        }), {}, {
                                            displayName: n.name
                                        }), t.prev = 2, t.next = 5, _(Z({}, o)).unwrap();
                                    case 5:
                                        e((0, u.d)({
                                            title: "Store Created!",
                                            icon: s.f8,
                                            message: "Your store has been created successfully!",
                                            color: "success",
                                            timeout: 3e3
                                        })), V(), t.next = 12;
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
                    Q = function(e) {
                        t("/home/marketplace/storefront/stores/".concat(e))
                    },
                    V = function() {
                        S(!1), O({
                            type: null,
                            baseObj: null
                        })
                    },
                    Y = c || R;
                return f.createElement(f.Fragment, null, f.createElement(d.$4, null, "Store Manager"), f.createElement(d.JX, {
                    className: "tw-@container/stores tw-w-full tw-gap-5"
                }, f.createElement(d.X2, {
                    className: "tw-w-full tw-justify-between tw-items-center"
                }, f.createElement("h4", {
                    className: "tw-mr-2"
                }, "Store Manager"), !Y && 0 !== (null == L ? void 0 : L.length) && f.createElement(d.zx, {
                    onClick: function() {
                        return S(!0)
                    },
                    className: "tw-px-3 tw-py-2"
                }, "Setup New Store")), H && !R && f.createElement(d.qX, {
                    type: "warn",
                    className: "tw-mt-2 tw-flex-row"
                }, "Some of your stores are disabled. Enable them so users can browse and purchase your listings."), f.createElement(d.X2, {
                    className: "tw-w-full"
                }, !Y && 0 === (null == L ? void 0 : L.length) && f.createElement(G, {
                    createStore: function() {
                        return S(!0)
                    }
                }), !Y && 0 !== (null == L ? void 0 : L.length) && f.createElement("div", {
                    className: "tw-grid tw-gap-4 tw-w-full tw-grid-cols-1 @xs/stores:tw-grid-cols-2 @sm/stores:tw-grid-cols-3 @md/stores:tw-grid-cols-4"
                }, L.map((function(e) {
                    return f.createElement(I, {
                        key: e.id,
                        storeData: e,
                        onSelect: Q
                    })
                }))))), f.createElement(d.u_, {
                    isVisible: E,
                    onClose: V,
                    title: "Create Storefront",
                    slim: !0,
                    disableBackdropClick: !0
                }, f.createElement(W, {
                    worlds: $,
                    groups: P,
                    stores: L,
                    user: n,
                    onDataChange: function(e) {
                        return O(e)
                    },
                    onCancel: V,
                    onSubmit: A,
                    canSubmit: null !== x
                })))
            }
        },
        36183: (e, t, r) => {
            "use strict";
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
        },
        46660: (e, t, r) => {
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
        3249: (e, t, r) => {
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
//# sourceMappingURL=41383424820c9141857efb155ca290e442d999b7f9084ae56e2092372e9c361f.js.map