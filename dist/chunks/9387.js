"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1768, 9387], {
        16879(e, t) {
            var r = "hourglass",
                n = [9203, 62032, "hourglass-empty"],
                a = "f254",
                i = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [384, 512, n, a, i]
            }, t.Ao = t.mw
        },
        11768(e, t, r) {
            r.r(t), r.d(t, {
                default: () => Q
            });
            var n = r(10467),
                a = r(64467),
                i = r(82544),
                s = r(88213),
                o = r(34912),
                l = r(34496),
                c = r(54756),
                u = r.n(c),
                d = r(65950),
                m = r(15033),
                p = r(97071),
                f = r(31069),
                w = r(13951),
                g = r(31931),
                v = r(72784),
                y = r(6457),
                E = r(97087),
                b = r(70650),
                h = r(91069),
                C = r(96540),
                x = r(6376),
                S = r(47767),
                T = r(35169),
                I = r(84976);
            const k = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return C.createElement(m.fv, {
                    className: "tw-text-center tw-items-center"
                }, C.createElement(m.Oo, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), C.createElement("h4", null, "Listing Created!"), C.createElement("p", null, "You can manage and review your listings from the ", C.createElement(I.N_, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var N = r(24475),
                P = r(69886),
                L = r(15322),
                O = r(81617),
                A = r(16879),
                j = r(84994),
                D = r(88270),
                M = r(24751),
                $ = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: j.zm,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Temporary",
                    value: "duration",
                    text: "Offer access for a limited time.",
                    redirect: "https://creators.vrchat.com/economy/listings#temporary",
                    icon: A.Ao,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: D.default,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const q = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    s = (0, x.wA)(),
                    o = (0, x.d4)(function(e) {
                        return e.listingFlow
                    }),
                    l = o.selectedListingType,
                    c = o.selectedProducts,
                    u = C.useState(l),
                    d = (0, i.A)(u, 2),
                    p = d[0],
                    f = d[1];
                (0, C.useEffect)(function() {
                    a.listingType && f(a.listingType)
                }, [a]);
                return C.createElement(m.fv, null, C.createElement("p", null, "Select the duration of your listing:"), C.createElement(m.fv, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, $.map(function(e) {
                    return C.createElement(m.fv, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                c.length > 0 && s((0, b.aR)()), s((0, b.mN)(e)), f(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(p === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, C.createElement(m.fv, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, C.createElement("span", {
                        className: "".concat(p === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, p === e.value ? C.createElement(m.M2, {
                        icon: O.e6
                    }) : null), e.image ? C.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : C.createElement(m.M2, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, C.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", C.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), C.createElement(m.fv, {
                        className: "tw-items-center tw-justify-center"
                    }, C.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), C.createElement(m.fI, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map(function(e) {
                        return C.createElement(M.ab, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    }))))
                })))
            };

            function F(e, t) {
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
                    t % 2 ? F(Object(r), !0).forEach(function(t) {
                        (0, a.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var z = (0, C.lazy)(function() {
                    return Promise.all([r.e(6955), r.e(5242), r.e(3456), r.e(5782)]).then(r.bind(r, 63456))
                }),
                G = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                Y = "listingType",
                _ = "listingDetails",
                B = "listingStoreSelect",
                H = "listingPublishWarning",
                V = "listingCreated",
                W = {
                    duration: [Y, _, B, H, V],
                    instant: [Y, _, B, H, V],
                    permanent: [Y, _, B, H, V]
                };
            const Q = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    c = void 0 === a ? function() {} : a,
                    I = (0, x.wA)(),
                    O = (0, S.Zp)(),
                    A = (0, w.P2)().data,
                    j = (0, p.DF)().showContentViolationModal,
                    D = (0, x.d4)(function(e) {
                        return e.listingFlow
                    }),
                    M = D.currentStep,
                    $ = D.selectedListingType,
                    F = D.selectedProducts,
                    Q = D.isPreviewOpen,
                    R = C.useState(null),
                    X = (0, i.A)(R, 2),
                    J = X[0],
                    Z = X[1],
                    K = C.useState(G),
                    ee = (0, i.A)(K, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = (0, C.useMemo)(function() {
                        return F.filter(function(e) {
                            return e.avatarId
                        }).map(function(e) {
                            return e.avatarId
                        })
                    }, [F]),
                    ae = (0, v.js)(),
                    ie = (0, i.A)(ae, 2),
                    se = ie[0],
                    oe = ie[1],
                    le = (oe.isSuccess, oe.isLoading),
                    ce = (oe.isError, oe.error, (0, E._N)({
                        sellerId: A.id,
                        managementPov: !0
                    }, {
                        skip: !A
                    })),
                    ue = ce.data,
                    de = ce.isLoading,
                    me = (ce.isError, ce.error, (0, y.Cg)({
                        userId: A.id,
                        archived: !1
                    }, {
                        skip: !A && "listingDetails" !== listingDetails
                    })),
                    pe = me.data,
                    fe = me.isLoading,
                    we = (me.isError, me.error, (0, g.Hg)({
                        avatarIds: ne
                    }, {
                        skip: !ne.length
                    })),
                    ge = we.data,
                    ve = (we.isFetching, we.isError, we.error, (0, C.useMemo)(function() {
                        return (null != ge ? ge : []).map(function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        })
                    }, [ge]));
                (0, C.useEffect)(function() {
                    return function() {
                        I((0, b.GS)())
                    }
                }, []);
                var ye = function(e) {
                        e.listingType ? re(U(U({}, G), e)) : re(U(U({}, te), e))
                    },
                    Ee = function() {
                        var e = (0, n.A)(u().mark(function e(t) {
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ($) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        ye({
                                            listingType: t
                                        }), be();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    be = function() {
                        var e = function() {
                            if (!$) return M;
                            var e = W[$],
                                t = e.indexOf(M);
                            if (t === e.length - 1) return M;
                            var r = e[t + 1];
                            return r !== H || te.active ? r : V
                        }();
                        I((0, b.D6)(f.cS[e])), I((0, b.EY)(e))
                    },
                    he = function() {
                        var e = function() {
                                if (null === $) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = W[$],
                                    t = e.indexOf(M) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            r = e.nextStep;
                        if (!t) return I((0, b.EY)(Y)), void I((0, b.ac)(null));
                        I((0, b.D6)(f.cS[t])), I((0, b.EY)(t)), I((0, b.ac)(r))
                    },
                    Ce = function() {
                        var e = (0, n.A)(u().mark(function e() {
                            var t, r, n;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, se(U(U({}, te), {}, {
                                            sellerId: A.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, Z(t.listing), e.abrupt("return", be());
                                    case 8:
                                        if (e.prev = 8, e.t0 = e.catch(0), !j({
                                                error: e.t0
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        I((0, d.X)({
                                            title: "Failed to create listing!",
                                            icon: l.zp,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 8]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    xe = function(e) {
                        I((0, b.D6)(null)), I((0, b.jT)(e))
                    },
                    Se = function() {
                        c(), re(G)
                    },
                    Te = de || fe || le,
                    Ie = (0, C.useMemo)(function() {
                        if (!$) return !1;
                        if ("permanent" !== $ && F.some(function(e) {
                                return e.avatarId
                            })) return !1;
                        if (M === _) {
                            if ("duration" === te.listingType) {
                                if (![f.yT.MIN, f.yT.HOUR, f.yT.DAY].includes(te.durationType)) return !1;
                                if (!((0, h.XA)(te.durationType, te.duration) && Number.isInteger(Number(te.duration)) && /^\d+$/.test(te.duration))) return !1
                            }
                            var e = te.displayName.length >= 3,
                                t = "permanent" === $ ? f.gw : f.Hd,
                                r = te.priceTokens >= f.pb && te.priceTokens <= t && Number.isInteger(parseInt(te.priceTokens)) && /^\d+$/.test(te.priceTokens),
                                n = te.products.length > 0 && te.products.length <= f.B8;
                            return e && r && n
                        }
                        return !Te
                    }, [M, te, F, $]);
                return C.createElement(C.Fragment, null, !Q && C.createElement(m.fv, {
                    className: "tw-w-full"
                }, function() {
                    switch (M) {
                        case Y:
                            return C.createElement(q, {
                                onDataChange: ye,
                                listing: te
                            });
                        case _:
                            return C.createElement(N.A, {
                                onDataChange: ye,
                                products: pe,
                                productsLoading: fe,
                                listingType: te.listingType,
                                editedListing: te,
                                originalListing: te
                            });
                        case B:
                            return C.createElement(L.A, {
                                activeListing: te,
                                products: te.products,
                                onDataChange: ye,
                                stores: ue,
                                activeStore: r
                            });
                        case H:
                            return C.createElement(P.A, null);
                        case V:
                            return C.createElement(k, {
                                listing: J
                            });
                        default:
                            return null
                    }
                }(), C.createElement(m.fI, {
                    className: "tw-mt-8 tw-gap-3"
                }, C.createElement(m.fI, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (M) {
                        case Y:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: Se,
                                neutral: !0
                            }, "Cancel");
                        case H:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        case V:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return O("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case B:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        default:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back")
                    }
                }()), C.createElement(m.fI, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (M) {
                        case Y:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return Ee(te.listingType)
                                },
                                disabled: !Ie || !$
                            }, "Next");
                        case H:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: Ce,
                                disabled: !Ie
                            }, "Publish Listing");
                        case V:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: Se,
                                disabled: !Ie
                            }, "Done");
                        case B:
                            return C.createElement(C.Fragment, null, "permanent" === $ && C.createElement(m.$n, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return xe(!0)
                                }
                            }, C.createElement(m.M2, {
                                icon: o.Ju,
                                className: "tw-mr-2"
                            }), "Preview Listing"), C.createElement(m.$n, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != te && te.active ? be : Ce,
                                disabled: !Ie
                            }, "Create"));
                        default:
                            return C.createElement(m.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: be,
                                disabled: !Ie
                            }, "Next")
                    }
                }()))), Q && C.createElement(T.A, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                }, C.createElement(m.fI, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, C.createElement(m.$n, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return I((0, b.jT)(!1)), void I((0, b.D6)(f.cS[M]))
                    }
                }, C.createElement(m.M2, {
                    icon: s.yY
                }), " Close Preview")), C.createElement(C.Suspense, {
                    fallback: C.createElement("div", null, "Loading...")
                }, C.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, C.createElement(z, {
                    isPreview: !0,
                    products: F,
                    galleryImages: ve,
                    listing: te,
                    onClose: function() {
                        return xe(!1)
                    }
                })))))
            }
        },
        97087(e, t, r) {
            r.d(t, {
                HP: () => u,
                ST: () => c,
                _N: () => l,
                rg: () => o
            });
            var n = r(80045),
                a = r(89483),
                i = ["storeId"],
                s = a.m.injectEndpoints({
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
                                        r = (0, n.A)(e, i);
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
//# sourceMappingURL=f99400d4659350910545d2b3f503bdf06fb4af5a1a56d295abcc61406f2ea931.js.map