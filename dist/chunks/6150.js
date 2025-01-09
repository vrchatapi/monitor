"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6150, 3564], {
        28963: (e, t) => {
            var r = "hourglass",
                n = [9203, 62032, "hourglass-empty"],
                a = "f254",
                i = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [384, 512, n, a, i]
            }, t.DH = t.DF
        },
        59795: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => q
            });
            var n = r(15861),
                a = r(4942),
                i = r(54546),
                s = r(76553),
                o = r(64687),
                l = r.n(o),
                c = r(64258),
                u = r(14411),
                d = r(95896),
                g = r(22202),
                m = r(16869),
                p = r(67978),
                f = r(36183),
                w = r(36753),
                v = r(64358),
                y = r(67294),
                C = r(32981),
                b = r(89250),
                h = r(79655);
            const E = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return y.createElement(u.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, y.createElement(u.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), y.createElement("h4", null, "Listing Created!"), y.createElement("p", null, "You can edit and manage your listings from the ", y.createElement(h.rU, {
                    to: "/home/marketplace/storefront/stores"
                }, "Store Manager"), "."))
            };
            var L = r(9401),
                I = r(99878),
                T = r(68055),
                x = r(28963),
                S = r(91435);
            const k = r.p + "9280018677aea8951ed7bd513d2b8da28ef4e71bdb936d17d74c40bd2b428164.svg";
            var P = [{
                label: "Instant",
                value: "instant",
                text: "Single-use items triggered instantly.",
                redriect: "https://creators.vrchat.com/economy/listings#instant",
                icon: S.BD
            }, {
                label: "Temporary",
                value: "duration",
                text: "Offer access for a limited time.",
                redriect: "https://creators.vrchat.com/economy/listings#temporary",
                icon: x.DH
            }, {
                label: "Permanent",
                value: "permanent",
                text: "Lifetime access to exclusive zones or features.",
                redriect: "https://creators.vrchat.com/economy/listings#permanent",
                image: k
            }];
            const N = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    s = y.useState(null),
                    o = (0, i.Z)(s, 2),
                    l = o[0],
                    c = o[1];
                (0, y.useEffect)((function() {
                    a.listingType && c(a.listingType)
                }), [a]);
                return y.createElement(u.JX, null, y.createElement("p", null, "Select the duration of your listing:"), y.createElement(u.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, P.map((function(e) {
                    return y.createElement(u.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(l === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, y.createElement("span", {
                        className: "".concat(l === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, l === e.value ? y.createElement(u.$1, {
                        icon: T.LE
                    }) : null), e.image ? y.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px]"
                    }) : y.createElement(u.$1, {
                        icon: e.icon,
                        className: "tw-h-12"
                    }), e.label, y.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", y.createElement("a", {
                        href: e.redriect
                    }, "Learn More")))
                }))))
            };

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var j = {
                listingType: null,
                products: [],
                displayName: "",
                priceTokens: 0,
                active: !1,
                productType: "listing"
            };
            const q = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    h = (0, C.I0)(),
                    T = (0, b.s0)(),
                    x = (0, g.XC)().data,
                    S = (0, C.v9)((function(e) {
                        return e.listingCreation
                    })),
                    k = S.previousStep,
                    P = S.currentStep,
                    O = (S.selectedType, y.useState(null)),
                    q = (0, i.Z)(O, 2),
                    G = q[0],
                    M = q[1],
                    Z = y.useState(j),
                    z = (0, i.Z)(Z, 2),
                    B = z[0],
                    X = z[1],
                    U = (0, m.G4)(),
                    F = (0, i.Z)(U, 2),
                    J = F[0],
                    A = F[1],
                    H = (A.isSuccess, A.isLoading),
                    Q = (A.isError, A.error, (0, f.Ci)({
                        sellerId: x.id,
                        managementPov: !0
                    }, {
                        skip: !x
                    })),
                    _ = Q.data,
                    W = Q.isLoading,
                    Y = (Q.isError, Q.error, (0, p.As)()),
                    $ = (0, i.Z)(Y, 2),
                    R = $[0],
                    K = $[1],
                    V = K.data,
                    ee = K.isLoading,
                    te = (K.isError, K.error, function(e) {
                        X(D(D({}, B), e))
                    }),
                    re = function() {
                        switch (h((0, w.Bq)(k)), k) {
                            case "Create Listing (1/3)":
                                h((0, w.IT)(null));
                                break;
                            case "Create Listing (2/3)":
                                h((0, w.IT)("Create Listing (1/3)"));
                                break;
                            case "Create Listing (3/3)":
                                h((0, w.IT)("Create Listing (2/3)"))
                        }
                    },
                    ne = function() {
                        var e = (0, n.Z)(l().mark((function e() {
                            var t, r, n;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.t0 = P, e.next = "Create Listing (1/3)" === e.t0 ? 3 : "Create Listing (2/3)" === e.t0 ? 8 : "Create Listing (3/3)" === e.t0 ? 11 : "listingCreated" === e.t0 ? 24 : 27;
                                        break;
                                    case 3:
                                        return h((0, w.Bq)("Create Listing (2/3)")), h((0, w.Pm)(B.listingType)), h((0, w.IT)("Create Listing (1/3)")), R({
                                            userId: x.id,
                                            archived: !1
                                        }), e.abrupt("break", 31);
                                    case 8:
                                        return h((0, w.Bq)("Create Listing (3/3)")), h((0, w.IT)("Create Listing (2/3)")), e.abrupt("break", 31);
                                    case 11:
                                        return e.prev = 11, e.next = 14, J(D(D({}, B), {}, {
                                            sellerId: x.id
                                        })).unwrap();
                                    case 14:
                                        t = e.sent, M(t.listing), h((0, w.Bq)("listingCreated")), h((0, w.BQ)(!0)), e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(11), h((0, c.d)({
                                            title: "Failed to create listing!",
                                            icon: s.eH,
                                            message: null !== (r = null === (n = e.t1.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 23:
                                        return e.abrupt("break", 31);
                                    case 24:
                                        return o(), X(j), e.abrupt("break", 31);
                                    case 27:
                                        return h((0, w.Bq)("Create Listing (1/3)")), h((0, w.IT)(null)), X(j), e.abrupt("break", 31);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [11, 20]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ae = W || ee || H,
                    ie = (0, y.useMemo)((function() {
                        if ("Create Listing (1/3)" === P) return null !== B.listingType;
                        if ("Create Listing (2/3)" === P) {
                            if ("duration" === B.listingType) return !![d.PG.MIN, d.PG.HOUR, d.PG.DAY].includes(B.durationType) && ((0, v.qG)(B.durationType, B.duration) && Number.isInteger(parseFloat(B.duration)));
                            var e = B.displayName.length >= 3,
                                t = B.priceTokens >= 100 && B.priceTokens <= 1e4 && Number.isInteger(parseFloat(B.priceTokens)),
                                r = B.products.length > 0 && B.products.length <= d._1;
                            return e && t && r
                        }
                        return !ae
                    }), [P, B]);
                return y.createElement(u.JX, {
                    className: "tw-w-full"
                }, "Create Listing (1/3)" === P && y.createElement(N, {
                    onDataChange: te,
                    currentListing: B
                }), "Create Listing (2/3)" === P && y.createElement(L.Z, {
                    onDataChange: te,
                    products: V,
                    productsLoading: ee,
                    listingType: B.listingType,
                    currentListing: B
                }), "Create Listing (3/3)" === P && y.createElement(I.Z, {
                    onDataChange: te,
                    stores: _,
                    activeStore: r
                }), "listingCreated" === P && G && y.createElement(E, {
                    listing: G
                }), y.createElement(u.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, k && "listingCreated" !== P ? y.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    neutral: !0,
                    onClick: k ? re : null
                }, "Back") : "listingCreated" === P && r ? y.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: o
                }, "Close") : "listingCreated" !== P || r ? y.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: o,
                    neutral: !0
                }, "Cancel") : y.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    neutral: !0,
                    onClick: function() {
                        return T("/home/marketplace/storefront/stores")
                    }
                }, "Go to Store Manager"), y.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: ne,
                    disabled: !ie
                }, "listingCreated" === P ? "Done" : "Next")))
            }
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => l,
                j6: () => c,
                md: () => o,
                mt: () => u
            });
            var n = r(45987),
                a = r(61509),
                i = ["storeId"],
                s = a.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        a = e.n,
                                        i = void 0 === a ? 50 : a,
                                        s = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: i,
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
                                        a = e.creatorId,
                                        i = e.hydrateListings,
                                        s = void 0 !== i && i,
                                        o = e.hydrateProducts,
                                        l = void 0 !== o && o,
                                        c = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: a,
                                            hydrateListings: s,
                                            hydrateProducts: l,
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
                                        a = e.groupId,
                                        i = e.tags,
                                        s = void 0 === i ? [] : i,
                                        o = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: a,
                                            tags: s,
                                            description: void 0 === o ? "" : o
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
                                        r = (0, n.Z)(e, i);
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
                o = s.useGetStoreQuery,
                l = s.useGetStoresQuery,
                c = s.useCreateStoreMutation,
                u = s.useUpdateStoreMutation;
            s.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=e40edb7488047fc9561cd50b246dca133d48e570e9616c3890e1448ed7d8d5f8.js.map