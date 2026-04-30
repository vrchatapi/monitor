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
                default: () => Y
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
                m = r(80988),
                p = r(90068),
                w = r(95896),
                f = r(22202),
                g = r(41255),
                v = r(16869),
                y = r(67978),
                b = r(36183),
                E = r(39270),
                h = r(64358),
                x = r(67294),
                C = r(32981),
                T = r(89250),
                I = r(53637),
                S = r(79655);
            const k = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return x.createElement(m.JX, {
                    className: "tw-text-center tw-items-center"
                }, x.createElement(m.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), x.createElement("h4", null, "Listing Created!"), x.createElement("p", null, "You can manage and review your listings from the ", x.createElement(S.rU, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var N = r(25423),
                P = r(80938),
                L = r(99878),
                D = r(68055),
                O = r(28963),
                j = r(91435),
                z = r(14825),
                M = r(60006),
                X = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: j.BD,
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
                    icon: z.default,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const q = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    s = (0, C.I0)(),
                    o = (0, C.v9)((function(e) {
                        return e.listingFlow
                    })),
                    l = o.selectedListingType,
                    c = o.selectedProducts,
                    u = x.useState(l),
                    d = (0, i.Z)(u, 2),
                    p = d[0],
                    w = d[1];
                (0, x.useEffect)((function() {
                    a.listingType && w(a.listingType)
                }), [a]);
                return x.createElement(m.JX, null, x.createElement("p", null, "Select the duration of your listing:"), x.createElement(m.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, X.map((function(e) {
                    return x.createElement(m.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c.length > 0 && s((0, E.kH)()), s((0, E.TY)(e)), w(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(p === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, x.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, x.createElement("span", {
                        className: "".concat(p === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, p === e.value ? x.createElement(m.$1, {
                        icon: D.LE
                    }) : null), e.image ? x.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : x.createElement(m.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, x.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", x.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), x.createElement(m.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, x.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), x.createElement(m.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return x.createElement(M.DR, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    })))))
                }))))
            };

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var F = (0, x.lazy)((function() {
                    return Promise.all([r.e(2027), r.e(3348), r.e(9336), r.e(389)]).then(r.bind(r, 29336))
                })),
                U = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                B = "listingType",
                J = "listingDetails",
                _ = "listingStoreSelect",
                A = "listingPublishWarning",
                $ = "listingCreated",
                H = {
                    duration: [B, J, _, A, $],
                    instant: [B, J, _, A, $],
                    permanent: [B, J, _, A, $]
                };
            const Y = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    c = void 0 === a ? function() {} : a,
                    S = (0, C.I0)(),
                    D = (0, T.s0)(),
                    O = (0, f.XC)().data,
                    j = (0, p.P2)().showContentViolationModal,
                    z = (0, C.v9)((function(e) {
                        return e.listingFlow
                    })),
                    M = z.currentStep,
                    X = z.selectedListingType,
                    Z = z.selectedProducts,
                    Y = z.isPreviewOpen,
                    Q = x.useState(null),
                    V = (0, i.Z)(Q, 2),
                    W = V[0],
                    R = V[1],
                    K = x.useState(U),
                    ee = (0, i.Z)(K, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = (0, x.useMemo)((function() {
                        return Z.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [Z]),
                    ae = (0, v.G4)(),
                    ie = (0, i.Z)(ae, 2),
                    se = ie[0],
                    oe = ie[1],
                    le = (oe.isSuccess, oe.isLoading),
                    ce = (oe.isError, oe.error, (0, b.Ci)({
                        sellerId: O.id,
                        managementPov: !0
                    }, {
                        skip: !O
                    })),
                    ue = ce.data,
                    de = ce.isLoading,
                    me = (ce.isError, ce.error, (0, y.x3)({
                        userId: O.id,
                        archived: !1
                    }, {
                        skip: !O && "listingDetails" !== listingDetails
                    })),
                    pe = me.data,
                    we = me.isLoading,
                    fe = (me.isError, me.error, (0, g.Qb)({
                        avatarIds: ne
                    }, {
                        skip: !ne.length
                    })),
                    ge = fe.data,
                    ve = (fe.isFetching, fe.isError, fe.error, (0, x.useMemo)((function() {
                        return (null != ge ? ge : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [ge]));
                (0, x.useEffect)((function() {
                    return function() {
                        S((0, E.rk)())
                    }
                }), []);
                var ye = function(e) {
                        e.listingType ? re(G(G({}, U), e)) : re(G(G({}, te), e))
                    },
                    be = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (X) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        ye({
                                            listingType: t
                                        }), Ee();
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
                    Ee = function() {
                        var e = function() {
                            if (!X) return M;
                            var e = H[X],
                                t = e.indexOf(M);
                            if (t === e.length - 1) return M;
                            var r = e[t + 1];
                            return r !== A || te.active ? r : $
                        }();
                        S((0, E.Td)(w._9[e])), S((0, E.Bq)(e))
                    },
                    he = function() {
                        var e = function() {
                                if (null === X) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = H[X],
                                    t = e.indexOf(M) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            r = e.nextStep;
                        if (!t) return S((0, E.Bq)(B)), void S((0, E.IT)(null));
                        S((0, E.Td)(w._9[t])), S((0, E.Bq)(t)), S((0, E.IT)(r))
                    },
                    xe = function() {
                        var e = (0, n.Z)(u().mark((function e() {
                            var t, r, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, se(G(G({}, te), {}, {
                                            sellerId: O.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, R(t.listing), e.abrupt("return", Ee());
                                    case 8:
                                        if (e.prev = 8, e.t0 = e.catch(0), !j({
                                                error: e.t0
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        S((0, d.d)({
                                            title: "Failed to create listing!",
                                            icon: l.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
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
                    Ce = function(e) {
                        S((0, E.Td)(null)), S((0, E.xj)(e))
                    },
                    Te = function() {
                        c(), re(U)
                    },
                    Ie = de || we || le,
                    Se = (0, x.useMemo)((function() {
                        if (!X) return !1;
                        if ("permanent" !== X && Z.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (M === J) {
                            if ("duration" === te.listingType) {
                                if (![w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(te.durationType)) return !1;
                                if (!((0, h.qG)(te.durationType, te.duration) && Number.isInteger(Number(te.duration)) && /^\d+$/.test(te.duration))) return !1
                            }
                            var e = te.displayName.length >= 3,
                                t = "permanent" === X ? w.YC : w._C,
                                r = te.priceTokens >= w.zD && te.priceTokens <= t && Number.isInteger(parseInt(te.priceTokens)) && /^\d+$/.test(te.priceTokens),
                                n = te.products.length > 0 && te.products.length <= w._1;
                            return e && r && n
                        }
                        return !Ie
                    }), [M, te, Z, X]);
                return x.createElement(x.Fragment, null, !Y && x.createElement(m.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (M) {
                        case B:
                            return x.createElement(q, {
                                onDataChange: ye,
                                listing: te
                            });
                        case J:
                            return x.createElement(N.Z, {
                                onDataChange: ye,
                                products: pe,
                                productsLoading: we,
                                listingType: te.listingType,
                                editedListing: te,
                                originalListing: te
                            });
                        case _:
                            return x.createElement(L.Z, {
                                activeListing: te,
                                products: te.products,
                                onDataChange: ye,
                                stores: ue,
                                activeStore: r
                            });
                        case A:
                            return x.createElement(P.Z, null);
                        case $:
                            return x.createElement(k, {
                                listing: W
                            });
                        default:
                            return null
                    }
                }(), x.createElement(m.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, x.createElement(m.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (M) {
                        case B:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Te,
                                neutral: !0
                            }, "Cancel");
                        case A:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        case $:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return D("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case _:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        default:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back")
                    }
                }()), x.createElement(m.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (M) {
                        case B:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return be(te.listingType)
                                },
                                disabled: !Se || !X
                            }, "Next");
                        case A:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                disabled: !Se
                            }, "Publish Listing");
                        case $:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Te,
                                disabled: !Se
                            }, "Done");
                        case _:
                            return x.createElement(x.Fragment, null, "permanent" === X && x.createElement(m.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return Ce(!0)
                                }
                            }, x.createElement(m.$1, {
                                icon: o.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), x.createElement(m.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != te && te.active ? Ee : xe,
                                disabled: !Se
                            }, "Create"));
                        default:
                            return x.createElement(m.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                disabled: !Se
                            }, "Next")
                    }
                }()))), Y && x.createElement(I.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                }, x.createElement(m.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, x.createElement(m.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return S((0, E.xj)(!1)), void S((0, E.Td)(w._9[M]))
                    }
                }, x.createElement(m.$1, {
                    icon: s.YI
                }), " Close Preview")), x.createElement(x.Suspense, {
                    fallback: x.createElement("div", null, "Loading...")
                }, x.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, x.createElement(F, {
                    isPreview: !0,
                    products: Z,
                    galleryImages: ve,
                    listing: te,
                    onClose: function() {
                        return Ce(!1)
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
//# sourceMappingURL=7f5f22552de022303bfa4ad64442ff3a56cacf41d9ed62acd207d6f807b939f5.js.map