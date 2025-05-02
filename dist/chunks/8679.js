"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8679, 682], {
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
                default: () => Q
            });
            var n = r(15861),
                a = r(4942),
                i = r(54546),
                s = r(68149),
                o = r(90502),
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
                E = r(39270),
                h = r(64358),
                b = r(67294),
                x = r(32981),
                C = r(89250),
                T = r(53637),
                S = r(79655);
            const I = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return b.createElement(m.JX, {
                    className: "tw-text-center tw-items-center"
                }, b.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), b.createElement("h4", null, "Listing Created!"), b.createElement("p", null, "You can manage and review your listings from the ", b.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var k = r(68420),
                N = r(80938),
                P = r(99878),
                L = r(68055),
                O = r(28963),
                D = r(91435),
                j = r(74205),
                z = r(60006),
                X = [{
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
                    icon: O.DH,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: j.SQ,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const q = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    s = (0, x.I0)(),
                    o = (0, x.v9)((function(e) {
                        return e.listingFlow
                    })),
                    l = o.selectedListingType,
                    c = o.selectedProducts,
                    u = b.useState(l),
                    d = (0, i.Z)(u, 2),
                    p = d[0],
                    f = d[1];
                (0, b.useEffect)((function() {
                    a.listingType && f(a.listingType)
                }), [a]);
                return b.createElement(m.JX, null, b.createElement("p", null, "Select the duration of your listing:"), b.createElement(m.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, X.map((function(e) {
                    return b.createElement(m.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c.length > 0 && s((0, E.kH)()), s((0, E.TY)(e)), f(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(p === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, b.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, b.createElement("span", {
                        className: "".concat(p === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, p === e.value ? b.createElement(m.$1, {
                        icon: L.LE
                    }) : null), e.image ? b.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : b.createElement(m.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, b.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", b.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), b.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, b.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), b.createElement(m.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return b.createElement(z.DR, {
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

            function Z(e) {
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
            var F = (0, b.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(2704), r.e(8490)]).then(r.bind(r, 22704))
                })),
                G = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                U = "listingType",
                B = "listingDetails",
                J = "listingStoreSelect",
                A = "listingPublishWarning",
                _ = "listingCreated",
                H = {
                    duration: [U, B, J, A, _],
                    instant: [U, B, J, A, _],
                    permanent: [U, B, J, A, _]
                };
            const Q = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    c = void 0 === a ? function() {} : a,
                    S = (0, x.I0)(),
                    L = (0, C.s0)(),
                    O = (0, f.XC)().data,
                    D = (0, x.v9)((function(e) {
                        return e.listingFlow
                    })),
                    j = D.currentStep,
                    z = D.selectedListingType,
                    X = D.selectedProducts,
                    M = D.isPreviewOpen,
                    Q = b.useState(null),
                    Y = (0, i.Z)(Q, 2),
                    $ = Y[0],
                    W = Y[1],
                    R = b.useState(G),
                    V = (0, i.Z)(R, 2),
                    K = V[0],
                    ee = V[1],
                    te = (0, b.useMemo)((function() {
                        return X.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [X]),
                    re = (0, g.G4)(),
                    ne = (0, i.Z)(re, 2),
                    ae = ne[0],
                    ie = ne[1],
                    se = (ie.isSuccess, ie.isLoading),
                    oe = (ie.isError, ie.error, (0, y.Ci)({
                        sellerId: O.id,
                        managementPov: !0
                    }, {
                        skip: !O
                    })),
                    le = oe.data,
                    ce = oe.isLoading,
                    ue = (oe.isError, oe.error, (0, v.x3)({
                        userId: O.id,
                        archived: !1
                    }, {
                        skip: !O && "listingDetails" !== listingDetails
                    })),
                    de = ue.data,
                    me = ue.isLoading,
                    pe = (ue.isError, ue.error, (0, w.Qb)({
                        avatarIds: te
                    }, {
                        skip: !te.length
                    })),
                    fe = pe.data,
                    we = (pe.isFetching, pe.isError, pe.error, (0, b.useMemo)((function() {
                        return (null != fe ? fe : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [fe]));
                (0, b.useEffect)((function() {
                    return function() {
                        S((0, E.rk)())
                    }
                }), []);
                var ge = function(e) {
                        e.listingType ? ee(Z(Z({}, G), e)) : ee(Z(Z({}, K), e))
                    },
                    ve = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (z) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        ge({
                                            listingType: t
                                        }), ye();
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
                    ye = function() {
                        var e = function() {
                            if (!z) return j;
                            var e = H[z],
                                t = e.indexOf(j);
                            if (t === e.length - 1) return j;
                            var r = e[t + 1];
                            return r !== A || K.active ? r : _
                        }();
                        S((0, E.Td)(p._9[e])), S((0, E.Bq)(e))
                    },
                    Ee = function() {
                        var e = function() {
                                if (null === z) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = H[z],
                                    t = e.indexOf(j) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            r = e.nextStep;
                        if (!t) return S((0, E.Bq)(U)), void S((0, E.IT)(null));
                        S((0, E.Td)(p._9[t])), S((0, E.Bq)(t)), S((0, E.IT)(r))
                    },
                    he = function() {
                        var e = (0, n.Z)(u().mark((function e() {
                            var t, r, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ae(Z(Z({}, K), {}, {
                                            sellerId: O.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, W(t.listing), e.abrupt("return", ye());
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
                    be = function(e) {
                        S((0, E.Td)(null)), S((0, E.xj)(e))
                    },
                    xe = function() {
                        c(), ee(G)
                    },
                    Ce = ce || me || se,
                    Te = (0, b.useMemo)((function() {
                        if (!z) return !1;
                        if ("permanent" !== z && X.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (j === B) {
                            if ("duration" === K.listingType) {
                                if (![p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(K.durationType)) return !1;
                                if (!((0, h.qG)(K.durationType, K.duration) && Number.isInteger(parseFloat(K.duration)))) return !1
                            }
                            var e = K.displayName.length >= 3,
                                t = K.priceTokens >= 100 && K.priceTokens <= 1e4 && Number.isInteger(parseFloat(K.priceTokens)),
                                r = K.products.length > 0 && K.products.length <= p._1;
                            return e && t && r
                        }
                        return !Ce
                    }), [j, K, X, z]);
                return b.createElement(b.Fragment, null, !M && b.createElement(m.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (j) {
                        case U:
                            return b.createElement(q, {
                                onDataChange: ge,
                                listing: K
                            });
                        case B:
                            return b.createElement(k.Z, {
                                onDataChange: ge,
                                products: de,
                                productsLoading: me,
                                listingType: K.listingType,
                                editedListing: K,
                                originalListing: K
                            });
                        case J:
                            return b.createElement(P.Z, {
                                activeListing: K,
                                products: K.products,
                                onDataChange: ge,
                                stores: le,
                                activeStore: r
                            });
                        case A:
                            return b.createElement(N.Z, null);
                        case _:
                            return b.createElement(I, {
                                listing: $
                            });
                        default:
                            return null
                    }
                }(), b.createElement(m.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, b.createElement(m.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (j) {
                        case U:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                neutral: !0
                            }, "Cancel");
                        case A:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: Ee
                            }, "Back");
                        case _:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return L("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case J:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: Ee
                            }, "Back");
                        default:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: Ee
                            }, "Back")
                    }
                }()), b.createElement(m.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (j) {
                        case U:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return ve(K.listingType)
                                },
                                disabled: !Te || !z
                            }, "Next");
                        case A:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: he,
                                disabled: !Te
                            }, "Publish Listing");
                        case _:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                disabled: !Te
                            }, "Done");
                        case J:
                            return b.createElement(b.Fragment, null, "permanent" === z && b.createElement(m.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return be(!0)
                                }
                            }, b.createElement(m.$1, {
                                icon: o.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), b.createElement(m.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != K && K.active ? ye : he,
                                disabled: !Te
                            }, "Create"));
                        default:
                            return b.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ye,
                                disabled: !Te
                            }, "Next")
                    }
                }()))), M && b.createElement(T.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg"
                }, b.createElement(m.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, b.createElement(m.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return S((0, E.xj)(!1)), void S((0, E.Td)(p._9[j]))
                    }
                }, b.createElement(m.$1, {
                    icon: s.YI
                }), " Close Preview")), b.createElement(b.Suspense, {
                    fallback: b.createElement("div", null, "Loading...")
                }, b.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, b.createElement(F, {
                    isPreview: !0,
                    products: X,
                    galleryImages: we,
                    listing: K,
                    onClose: function() {
                        return be(!1)
                    }
                })))))
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
//# sourceMappingURL=adeaddbf3c9911b0e7f10903293a72e6532cc3c87e04cd5deee2aa50643beca2.js.map