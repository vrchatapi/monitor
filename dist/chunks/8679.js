"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8679], {
        90502: (e, t) => {
            var n = "arrow-up-right-from-square",
                r = ["external-link"],
                a = "f08e",
                i = "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, a, i]
            }, t.wl = t.DF
        },
        68149: (e, t, n) => {
            var r = n(87709);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.YI = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        28963: (e, t) => {
            var n = "hourglass",
                r = [9203, 62032, "hourglass-empty"],
                a = "f254",
                i = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [384, 512, r, a, i]
            }, t.DH = t.DF
        },
        20682: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => H
            });
            var r = n(15861),
                a = n(4942),
                i = n(54546),
                l = n(68149),
                s = n(90502),
                c = n(76553),
                o = n(64687),
                u = n.n(o),
                m = n(64258),
                d = n(14411),
                w = n(95896),
                p = n(22202),
                f = n(41255),
                g = n(16869),
                v = n(67978),
                x = n(36183),
                h = n(39270),
                y = n(64358),
                E = n(67294),
                b = n(32981),
                C = n(89250),
                k = n(53637),
                T = n(79655);
            const N = function(e) {
                var t = e.listing,
                    n = void 0 === t ? {} : t;
                return E.createElement(d.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, E.createElement(d.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), E.createElement("h4", null, "Listing Created!"), E.createElement("p", null, "You can edit and manage your listings from the ", E.createElement(T.rU, {
                    to: "/home/marketplace/storefront/stores"
                }, "Store Manager"), "."))
            };
            var L = n(68420),
                D = n(99878),
                P = n(68055),
                S = n(28963),
                O = n(91435),
                I = n(74205),
                j = n(60006),
                z = [{
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
                    icon: S.DH,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: I.SQ,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const F = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.currentListing,
                    a = void 0 === r ? {} : r,
                    l = (0, b.I0)(),
                    s = (0, b.v9)((function(e) {
                        return e.listingFlow
                    })),
                    c = s.selectedListingType,
                    o = s.selectedProducts,
                    u = E.useState(c),
                    m = (0, i.Z)(u, 2),
                    w = m[0],
                    p = m[1];
                (0, E.useEffect)((function() {
                    a.listingType && p(a.listingType)
                }), [a]);
                return E.createElement(d.JX, null, E.createElement("p", null, "Select the duration of your listing:"), E.createElement(d.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, z.map((function(e) {
                    return E.createElement(d.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o.length > 0 && l((0, h.kH)()), l((0, h.TY)(e)), p(e), n({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(w === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, E.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b-2 tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, E.createElement("span", {
                        className: "".concat(w === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, w === e.value ? E.createElement(d.$1, {
                        icon: P.LE
                    }) : null), e.image ? E.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px]"
                    }) : E.createElement(d.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl"
                    }), e.label, E.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", E.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), E.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, E.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), E.createElement(d.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return E.createElement(j.DR, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    })))))
                }))))
            };

            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Z = (0, E.lazy)((function() {
                    return Promise.all([n.e(8043), n.e(2704), n.e(8490)]).then(n.bind(n, 22704))
                })),
                J = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                q = "listingType",
                A = "listingDetails",
                B = "listingStoreSelect",
                G = "listingCreated",
                _ = {
                    duration: [q, A, B, G],
                    instant: [q, A, B, G],
                    permanent: [q, A, B, G]
                };
            const H = function(e) {
                var t = e.store,
                    n = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    T = (0, b.I0)(),
                    P = (0, C.s0)(),
                    S = (0, p.XC)().data,
                    O = (0, b.v9)((function(e) {
                        return e.listingFlow
                    })),
                    I = O.currentStep,
                    j = O.selectedListingType,
                    z = O.selectedProducts,
                    X = O.isPreviewOpen,
                    H = E.useState(null),
                    U = (0, i.Z)(H, 2),
                    Y = U[0],
                    $ = U[1],
                    Q = E.useState(J),
                    R = (0, i.Z)(Q, 2),
                    V = R[0],
                    K = R[1],
                    W = (0, E.useMemo)((function() {
                        return z.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [z]),
                    ee = (0, g.G4)(),
                    te = (0, i.Z)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    ae = (re.isSuccess, re.isLoading),
                    ie = (re.isError, re.error, (0, x.Ci)({
                        sellerId: S.id,
                        managementPov: !0
                    }, {
                        skip: !S
                    })),
                    le = ie.data,
                    se = ie.isLoading,
                    ce = (ie.isError, ie.error, (0, v.x3)({
                        userId: S.id,
                        archived: !1
                    }, {
                        skip: !S && "listingDetails" !== listingDetails
                    })),
                    oe = ce.data,
                    ue = ce.isLoading,
                    me = (ce.isError, ce.error, (0, f.Qb)({
                        avatarIds: W
                    }, {
                        skip: !W.length
                    })),
                    de = me.data,
                    we = (me.isFetching, me.isError, me.error, (0, E.useMemo)((function() {
                        return (null != de ? de : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [de]));
                (0, E.useEffect)((function() {
                    return function() {
                        T((0, h.rk)())
                    }
                }), []);
                var pe = function(e) {
                        e.listingType ? K(M(M({}, J), e)) : K(M(M({}, V), e))
                    },
                    fe = function() {
                        var e = (0, r.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (j) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        pe({
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
                        var e, t = (e = _[j].indexOf(I), _[j][e + 1] || I);
                        T((0, h.Td)(w._9[t])), T((0, h.Bq)(t))
                    },
                    ve = function() {
                        var e = function() {
                                if (null === j) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = _[j].indexOf(I);
                                return {
                                    immediateStep: _[j][e - 1] || null,
                                    nextStep: _[j][e - 2] || null
                                }
                            }(),
                            t = e.immediateStep,
                            n = e.nextStep;
                        if (!t) return T((0, h.Bq)(q)), void T((0, h.IT)(null));
                        T((0, h.Td)(w._9[t])), T((0, h.Bq)(t)), T((0, h.IT)(n))
                    },
                    xe = function() {
                        var e = (0, r.Z)(u().mark((function e() {
                            var t, n, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ne(M(M({}, V), {}, {
                                            sellerId: S.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, $(t.listing), e.abrupt("return", ge());
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), T((0, m.d)({
                                            title: "Failed to create listing!",
                                            icon: c.eH,
                                            message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
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
                        T((0, h.Td)(null)), T((0, h.xj)(e))
                    },
                    ye = function() {
                        o(), K(J)
                    },
                    Ee = se || ue || ae,
                    be = (0, E.useMemo)((function() {
                        if (!j) return !1;
                        if ("permanent" !== j && z.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (I === A) {
                            if ("duration" === V.listingType) {
                                if (![w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(V.durationType)) return !1;
                                if (!((0, y.qG)(V.durationType, V.duration) && Number.isInteger(parseFloat(V.duration)))) return !1
                            }
                            var e = V.displayName.length >= 3,
                                t = V.priceTokens >= 100 && V.priceTokens <= 1e4 && Number.isInteger(parseFloat(V.priceTokens)),
                                n = V.products.length > 0 && V.products.length <= w._1;
                            return e && t && n
                        }
                        return !Ee
                    }), [I, V, z, j]);
                return E.createElement(E.Fragment, null, !X && E.createElement(d.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (I) {
                        case q:
                            return E.createElement(F, {
                                onDataChange: pe,
                                listing: V
                            });
                        case A:
                            return E.createElement(L.Z, {
                                onDataChange: pe,
                                products: oe,
                                productsLoading: ue,
                                listingType: V.listingType,
                                editedListing: V,
                                originalListing: V
                            });
                        case B:
                            return E.createElement(D.Z, {
                                products: V.products,
                                onDataChange: pe,
                                stores: le,
                                activeStore: n
                            });
                        case G:
                            return E.createElement(N, {
                                listing: Y
                            });
                        default:
                            return null
                    }
                }(), E.createElement(d.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, E.createElement(d.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (I) {
                        case q:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ye,
                                neutral: !0
                            }, "Cancel");
                        case G:
                            return n ? E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ye
                            }, "Close") : E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return P("/home/marketplace/storefront/stores")
                                }
                            }, "Go to Store Manager");
                        case B:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: ve
                            }, "Back");
                        default:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ve
                            }, "Back")
                    }
                }()), E.createElement(d.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (I) {
                        case q:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return fe(V.listingType)
                                },
                                disabled: !be || !j
                            }, "Next");
                        case G:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ye,
                                disabled: !be
                            }, "Done");
                        case B:
                            return E.createElement(E.Fragment, null, "permanent" === j && E.createElement(d.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return he(!0)
                                }
                            }, E.createElement(d.$1, {
                                icon: s.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), E.createElement(d.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: xe,
                                disabled: !be
                            }, "Create"));
                        default:
                            return E.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ge,
                                disabled: !be
                            }, "Next")
                    }
                }()))), X && E.createElement(k.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                }, E.createElement(d.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, E.createElement(d.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return T((0, h.xj)(!1)), void T((0, h.Td)(w._9[I]))
                    }
                }, E.createElement(d.$1, {
                    icon: l.YI
                }), " Close Preview")), E.createElement(E.Suspense, {
                    fallback: E.createElement("div", null, "Loading...")
                }, E.createElement(Z, {
                    isPreview: !0,
                    products: z,
                    galleryImages: we,
                    listing: V,
                    onClose: function() {
                        return he(!1)
                    }
                }))))
            }
        }
    }
]);
//# sourceMappingURL=587c6427c445d3db7ee1db6a195cfe48b316cc6c6dcc253d3f83050c3ebf421f.js.map