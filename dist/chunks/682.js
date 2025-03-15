"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [682, 8679], {
        90502: (e, t) => {
            var r = "arrow-up-right-from-square",
                n = ["external-link"],
                a = "f08e",
                i = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [512, 512, n, a, i]
            }, t.wl = t.DF
        },
        68149: (e, t, r) => {
            var n = r(87709);
            t.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.YI = t.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
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
        20682: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => _
            });
            var n = r(15861),
                a = r(4942),
                i = r(54546),
                o = r(68149),
                s = r(90502),
                l = r(76553),
                c = r(64687),
                u = r.n(c),
                d = r(64258),
                m = r(14411),
                p = r(95896),
                f = r(22202),
                w = r(41255),
                g = r(16869),
                v = r(67978),
                y = r(36183),
                h = r(39270),
                x = r(64358),
                E = r(67294),
                b = r(32981),
                C = r(89250),
                T = r(53637),
                S = r(79655);
            const I = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return E.createElement(m.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, E.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), E.createElement("h4", null, "Listing Created!"), E.createElement("p", null, "You can edit and manage your listings from the ", E.createElement(S.rU, {
                    to: "/home/marketplace/storefront/stores"
                }, "Store Manager"), "."))
            };
            var k = r(68420),
                N = r(99878),
                L = r(68055),
                P = r(28963),
                D = r(91435),
                O = r(74205),
                j = r(60006),
                z = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: D.BD,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Temporary",
                    value: "duration",
                    text: "Offer access for a limited time.",
                    redirect: "https://creators.vrchat.com/economy/listings#temporary",
                    icon: P.DH,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: O.SQ,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const F = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    o = (0, b.I0)(),
                    s = (0, b.v9)((function(e) {
                        return e.listingFlow
                    })),
                    l = s.selectedListingType,
                    c = s.selectedProducts,
                    u = E.useState(l),
                    d = (0, i.Z)(u, 2),
                    p = d[0],
                    f = d[1];
                (0, E.useEffect)((function() {
                    a.listingType && f(a.listingType)
                }), [a]);
                return E.createElement(m.JX, null, E.createElement("p", null, "Select the duration of your listing:"), E.createElement(m.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, z.map((function(e) {
                    return E.createElement(m.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c.length > 0 && o((0, h.kH)()), o((0, h.TY)(e)), f(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(p === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, E.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b-2 tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, E.createElement("span", {
                        className: "".concat(p === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, p === e.value ? E.createElement(m.$1, {
                        icon: L.LE
                    }) : null), e.image ? E.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px]"
                    }) : E.createElement(m.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl"
                    }), e.label, E.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", E.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), E.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, E.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), E.createElement(m.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return E.createElement(j.DR, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    })))))
                }))))
            };

            function M(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var X = (0, E.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(2704), r.e(8490)]).then(r.bind(r, 22704))
                })),
                Z = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                G = "listingType",
                U = "listingDetails",
                J = "listingStoreSelect",
                A = "listingCreated",
                B = {
                    duration: [G, U, J, A],
                    instant: [G, U, J, A],
                    permanent: [G, U, J, A]
                };
            const _ = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    c = void 0 === a ? function() {} : a,
                    S = (0, b.I0)(),
                    L = (0, C.s0)(),
                    P = (0, f.XC)().data,
                    D = (0, b.v9)((function(e) {
                        return e.listingFlow
                    })),
                    O = D.currentStep,
                    j = D.selectedListingType,
                    z = D.selectedProducts,
                    M = D.isPreviewOpen,
                    _ = E.useState(null),
                    H = (0, i.Z)(_, 2),
                    Y = H[0],
                    Q = H[1],
                    $ = E.useState(Z),
                    R = (0, i.Z)($, 2),
                    V = R[0],
                    W = R[1],
                    K = (0, E.useMemo)((function() {
                        return z.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [z]),
                    ee = (0, g.G4)(),
                    te = (0, i.Z)(ee, 2),
                    re = te[0],
                    ne = te[1],
                    ae = (ne.isSuccess, ne.isLoading),
                    ie = (ne.isError, ne.error, (0, y.Ci)({
                        sellerId: P.id,
                        managementPov: !0
                    }, {
                        skip: !P
                    })),
                    oe = ie.data,
                    se = ie.isLoading,
                    le = (ie.isError, ie.error, (0, v.x3)({
                        userId: P.id,
                        archived: !1
                    }, {
                        skip: !P && "listingDetails" !== listingDetails
                    })),
                    ce = le.data,
                    ue = le.isLoading,
                    de = (le.isError, le.error, (0, w.Qb)({
                        avatarIds: K
                    }, {
                        skip: !K.length
                    })),
                    me = de.data,
                    pe = (de.isFetching, de.isError, de.error, (0, E.useMemo)((function() {
                        return (null != me ? me : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [me]));
                (0, E.useEffect)((function() {
                    return function() {
                        S((0, h.rk)())
                    }
                }), []);
                var fe = function(e) {
                        e.listingType ? W(q(q({}, Z), e)) : W(q(q({}, V), e))
                    },
                    we = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (j) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        fe({
                                            listingType: t
                                        }), ge();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ge = function() {
                        var e, t = (e = B[j].indexOf(O), B[j][e + 1] || O);
                        S((0, h.Td)(p._9[t])), S((0, h.Bq)(t))
                    },
                    ve = function() {
                        var e = function() {
                                if (null === j) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = B[j].indexOf(O);
                                return {
                                    immediateStep: B[j][e - 1] || null,
                                    nextStep: B[j][e - 2] || null
                                }
                            }(),
                            t = e.immediateStep,
                            r = e.nextStep;
                        if (!t) return S((0, h.Bq)(G)), void S((0, h.IT)(null));
                        S((0, h.Td)(p._9[t])), S((0, h.Bq)(t)), S((0, h.IT)(r))
                    },
                    ye = function() {
                        var e = (0, n.Z)(u().mark((function e() {
                            var t, r, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, re(q(q({}, V), {}, {
                                            sellerId: P.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, Q(t.listing), e.abrupt("return", ge());
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), S((0, d.d)({
                                            title: "Failed to create listing!",
                                            icon: l.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = function(e) {
                        S((0, h.Td)(null)), S((0, h.xj)(e))
                    },
                    xe = function() {
                        c(), W(Z)
                    },
                    Ee = se || ue || ae,
                    be = (0, E.useMemo)((function() {
                        if (!j) return !1;
                        if ("permanent" !== j && z.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (O === U) {
                            if ("duration" === V.listingType) {
                                if (![p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(V.durationType)) return !1;
                                if (!((0, x.qG)(V.durationType, V.duration) && Number.isInteger(parseFloat(V.duration)))) return !1
                            }
                            var e = V.displayName.length >= 3,
                                t = V.priceTokens >= 100 && V.priceTokens <= 1e4 && Number.isInteger(parseFloat(V.priceTokens)),
                                r = V.products.length > 0 && V.products.length <= p._1;
                            return e && t && r
                        }
                        return !Ee
                    }), [O, V, z, j]);
                return E.createElement(E.Fragment, null, !M && E.createElement(m.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (O) {
                        case G:
                            return E.createElement(F, {
                                onDataChange: fe,
                                listing: V
                            });
                        case U:
                            return E.createElement(k.Z, {
                                onDataChange: fe,
                                products: ce,
                                productsLoading: ue,
                                listingType: V.listingType,
                                editedListing: V,
                                originalListing: V
                            });
                        case J:
                            return E.createElement(N.Z, {
                                products: V.products,
                                onDataChange: fe,
                                stores: oe,
                                activeStore: r
                            });
                        case A:
                            return E.createElement(I, {
                                listing: Y
                            });
                        default:
                            return null
                    }
                }(), E.createElement(m.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, E.createElement(m.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (O) {
                        case G:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                neutral: !0
                            }, "Cancel");
                        case A:
                            return r ? E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: xe
                            }, "Close") : E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return L("/home/marketplace/storefront/stores")
                                }
                            }, "Go to Store Manager");
                        case J:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: ve
                            }, "Back");
                        default:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ve
                            }, "Back")
                    }
                }()), E.createElement(m.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (O) {
                        case G:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return we(V.listingType)
                                },
                                disabled: !be || !j
                            }, "Next");
                        case A:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                disabled: !be
                            }, "Done");
                        case J:
                            return E.createElement(E.Fragment, null, "permanent" === j && E.createElement(m.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return he(!0)
                                }
                            }, E.createElement(m.$1, {
                                icon: s.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), E.createElement(m.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: ye,
                                disabled: !be
                            }, "Create"));
                        default:
                            return E.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ge,
                                disabled: !be
                            }, "Next")
                    }
                }()))), M && E.createElement(T.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                }, E.createElement(m.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, E.createElement(m.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return S((0, h.xj)(!1)), void S((0, h.Td)(p._9[O]))
                    }
                }, E.createElement(m.$1, {
                    icon: o.YI
                }), " Close Preview")), E.createElement(E.Suspense, {
                    fallback: E.createElement("div", null, "Loading...")
                }, E.createElement(X, {
                    isPreview: !0,
                    products: z,
                    galleryImages: pe,
                    listing: V,
                    onClose: function() {
                        return he(!1)
                    }
                }))))
            }
        },
        36183: (e, t, r) => {
            r.d(t, {
                Ci: () => l,
                j6: () => c,
                md: () => s,
                mt: () => u
            });
            var n = r(45987),
                a = r(61509),
                i = ["storeId"],
                o = a.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getStores: e.query({
                                query: function(e) {
                                    var t = e.sellerId,
                                        r = e.managementPov,
                                        n = void 0 !== r && r,
                                        a = e.n,
                                        i = void 0 === a ? 50 : a,
                                        o = e.offset;
                                    return {
                                        url: "economy/stores",
                                        params: {
                                            sellerId: t,
                                            managementPov: n,
                                            n: i,
                                            offset: void 0 === o ? 0 : o
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
                                        o = void 0 !== i && i,
                                        s = e.hydrateProducts,
                                        l = void 0 !== s && s,
                                        c = e.managementPov;
                                    return {
                                        url: "economy/store",
                                        params: {
                                            storeId: t,
                                            worldId: r,
                                            groupId: n,
                                            creatorId: a,
                                            hydrateListings: o,
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
                                        o = void 0 === i ? [] : i,
                                        s = e.description;
                                    return {
                                        url: "economy/store",
                                        method: "POST",
                                        body: {
                                            displayName: t,
                                            storeType: r,
                                            worldId: n,
                                            groupId: a,
                                            tags: o,
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
                s = o.useGetStoreQuery,
                l = o.useGetStoresQuery,
                c = o.useCreateStoreMutation,
                u = o.useUpdateStoreMutation;
            o.useDeleteStoreMutation
        }
    }
]);
//# sourceMappingURL=2e10563cb2cd331551366a7508cdc384b3ce6021a67f4cc061dee65857c01945.js.map