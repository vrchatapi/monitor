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
                default: () => H
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
                m = r(37463),
                p = r(95896),
                w = r(22202),
                f = r(41255),
                g = r(16869),
                v = r(67978),
                y = r(36183),
                E = r(39270),
                b = r(64358),
                h = r(67294),
                x = r(32981),
                C = r(89250),
                T = r(53637),
                I = r(79655);
            const S = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return h.createElement(m.JX, {
                    className: "tw-text-center tw-items-center"
                }, h.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), h.createElement("h4", null, "Listing Created!"), h.createElement("p", null, "You can manage and review your listings from the ", h.createElement(I.rU, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var k = r(25423),
                N = r(80938),
                P = r(99878),
                L = r(68055),
                D = r(28963),
                O = r(91435),
                j = r(74205),
                z = r(60006),
                X = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: O.BD,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Temporary",
                    value: "duration",
                    text: "Offer access for a limited time.",
                    redirect: "https://creators.vrchat.com/economy/listings#temporary",
                    icon: D.DH,
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
                    u = h.useState(l),
                    d = (0, i.Z)(u, 2),
                    p = d[0],
                    w = d[1];
                (0, h.useEffect)((function() {
                    a.listingType && w(a.listingType)
                }), [a]);
                return h.createElement(m.JX, null, h.createElement("p", null, "Select the duration of your listing:"), h.createElement(m.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, X.map((function(e) {
                    return h.createElement(m.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c.length > 0 && s((0, E.kH)()), s((0, E.TY)(e)), w(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(p === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, h.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, h.createElement("span", {
                        className: "".concat(p === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, p === e.value ? h.createElement(m.$1, {
                        icon: L.LE
                    }) : null), e.image ? h.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : h.createElement(m.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, h.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", h.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), h.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, h.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), h.createElement(m.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return h.createElement(z.DR, {
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
            var G = (0, h.lazy)((function() {
                    return Promise.all([r.e(8043), r.e(1244), r.e(2704), r.e(8990)]).then(r.bind(r, 22704))
                })),
                F = {
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
                _ = "listingPublishWarning",
                A = "listingCreated",
                $ = {
                    duration: [U, B, J, _, A],
                    instant: [U, B, J, _, A],
                    permanent: [U, B, J, _, A]
                };
            const H = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    c = void 0 === a ? function() {} : a,
                    I = (0, x.I0)(),
                    L = (0, C.s0)(),
                    D = (0, w.XC)().data,
                    O = (0, x.v9)((function(e) {
                        return e.listingFlow
                    })),
                    j = O.currentStep,
                    z = O.selectedListingType,
                    X = O.selectedProducts,
                    M = O.isPreviewOpen,
                    H = h.useState(null),
                    Y = (0, i.Z)(H, 2),
                    Q = Y[0],
                    W = Y[1],
                    R = h.useState(F),
                    V = (0, i.Z)(R, 2),
                    K = V[0],
                    ee = V[1],
                    te = (0, h.useMemo)((function() {
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
                        sellerId: D.id,
                        managementPov: !0
                    }, {
                        skip: !D
                    })),
                    le = oe.data,
                    ce = oe.isLoading,
                    ue = (oe.isError, oe.error, (0, v.x3)({
                        userId: D.id,
                        archived: !1
                    }, {
                        skip: !D && "listingDetails" !== listingDetails
                    })),
                    de = ue.data,
                    me = ue.isLoading,
                    pe = (ue.isError, ue.error, (0, f.Qb)({
                        avatarIds: te
                    }, {
                        skip: !te.length
                    })),
                    we = pe.data,
                    fe = (pe.isFetching, pe.isError, pe.error, (0, h.useMemo)((function() {
                        return (null != we ? we : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [we]));
                (0, h.useEffect)((function() {
                    return function() {
                        I((0, E.rk)())
                    }
                }), []);
                var ge = function(e) {
                        e.listingType ? ee(Z(Z({}, F), e)) : ee(Z(Z({}, K), e))
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
                            var e = $[z],
                                t = e.indexOf(j);
                            if (t === e.length - 1) return j;
                            var r = e[t + 1];
                            return r !== _ || K.active ? r : A
                        }();
                        I((0, E.Td)(p._9[e])), I((0, E.Bq)(e))
                    },
                    Ee = function() {
                        var e = function() {
                                if (null === z) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = $[z],
                                    t = e.indexOf(j) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            r = e.nextStep;
                        if (!t) return I((0, E.Bq)(U)), void I((0, E.IT)(null));
                        I((0, E.Td)(p._9[t])), I((0, E.Bq)(t)), I((0, E.IT)(r))
                    },
                    be = function() {
                        var e = (0, n.Z)(u().mark((function e() {
                            var t, r, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ae(Z(Z({}, K), {}, {
                                            sellerId: D.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, W(t.listing), e.abrupt("return", ye());
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), I((0, d.d)({
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
                        I((0, E.Td)(null)), I((0, E.xj)(e))
                    },
                    xe = function() {
                        c(), ee(F)
                    },
                    Ce = ce || me || se,
                    Te = (0, h.useMemo)((function() {
                        if (!z) return !1;
                        if ("permanent" !== z && X.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (j === B) {
                            if ("duration" === K.listingType) {
                                if (![p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(K.durationType)) return !1;
                                if (!((0, b.qG)(K.durationType, K.duration) && Number.isInteger(Number(K.duration)) && /^\d+$/.test(K.duration))) return !1
                            }
                            var e = K.displayName.length >= 3,
                                t = "permanent" === z ? p.YC : p._C,
                                r = K.priceTokens >= p.zD && K.priceTokens <= t && Number.isInteger(parseInt(K.priceTokens)) && /^\d+$/.test(K.priceTokens),
                                n = K.products.length > 0 && K.products.length <= p._1;
                            return e && r && n
                        }
                        return !Ce
                    }), [j, K, X, z]);
                return h.createElement(h.Fragment, null, !M && h.createElement(m.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (j) {
                        case U:
                            return h.createElement(q, {
                                onDataChange: ge,
                                listing: K
                            });
                        case B:
                            return h.createElement(k.Z, {
                                onDataChange: ge,
                                products: de,
                                productsLoading: me,
                                listingType: K.listingType,
                                editedListing: K,
                                originalListing: K
                            });
                        case J:
                            return h.createElement(P.Z, {
                                activeListing: K,
                                products: K.products,
                                onDataChange: ge,
                                stores: le,
                                activeStore: r
                            });
                        case _:
                            return h.createElement(N.Z, null);
                        case A:
                            return h.createElement(S, {
                                listing: Q
                            });
                        default:
                            return null
                    }
                }(), h.createElement(m.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, h.createElement(m.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (j) {
                        case U:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                neutral: !0
                            }, "Cancel");
                        case _:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: Ee
                            }, "Back");
                        case A:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return L("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case J:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: Ee
                            }, "Back");
                        default:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: Ee
                            }, "Back")
                    }
                }()), h.createElement(m.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (j) {
                        case U:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return ve(K.listingType)
                                },
                                disabled: !Te || !z
                            }, "Next");
                        case _:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: be,
                                disabled: !Te
                            }, "Publish Listing");
                        case A:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                disabled: !Te
                            }, "Done");
                        case J:
                            return h.createElement(h.Fragment, null, "permanent" === z && h.createElement(m.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return he(!0)
                                }
                            }, h.createElement(m.$1, {
                                icon: o.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), h.createElement(m.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != K && K.active ? ye : be,
                                disabled: !Te
                            }, "Create"));
                        default:
                            return h.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ye,
                                disabled: !Te
                            }, "Next")
                    }
                }()))), M && h.createElement(T.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                }, h.createElement(m.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, h.createElement(m.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return I((0, E.xj)(!1)), void I((0, E.Td)(p._9[j]))
                    }
                }, h.createElement(m.$1, {
                    icon: s.YI
                }), " Close Preview")), h.createElement(h.Suspense, {
                    fallback: h.createElement("div", null, "Loading...")
                }, h.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, h.createElement(G, {
                    isPreview: !0,
                    products: X,
                    galleryImages: fe,
                    listing: K,
                    onClose: function() {
                        return he(!1)
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
//# sourceMappingURL=e67ea575f5ae91ce9dee3757c1d0c6ac683eb1fd2c84f3773b86e537487b53a2.js.map