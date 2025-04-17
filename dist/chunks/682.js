"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [682], {
        28963: (e, t) => {
            var n = "hourglass",
                r = [9203, 62032, "hourglass-empty"],
                a = "f254",
                l = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [384, 512, r, a, l]
            }, t.DH = t.DF
        },
        20682: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => H
            });
            var r = n(15861),
                a = n(4942),
                l = n(54546),
                i = n(68149),
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
                y = n(39270),
                E = n(64358),
                b = n(67294),
                h = n(32981),
                C = n(89250),
                k = n(53637),
                T = n(79655);
            const N = function(e) {
                var t = e.listing,
                    n = void 0 === t ? {} : t;
                return b.createElement(d.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, b.createElement(d.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), b.createElement("h4", null, "Listing Created!"), b.createElement("p", null, "You can edit and manage your listings from the ", b.createElement(T.rU, {
                    to: "/home/marketplace/storefront/stores"
                }, "Store Manager"), "."))
            };
            var S = n(68420),
                L = n(99878),
                O = n(68055),
                D = n(28963),
                P = n(91435),
                I = n(74205),
                j = n(60006),
                z = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: P.BD,
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
                    icon: I.SQ,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const X = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.currentListing,
                    a = void 0 === r ? {} : r,
                    i = (0, h.I0)(),
                    s = (0, h.v9)((function(e) {
                        return e.listingFlow
                    })),
                    c = s.selectedListingType,
                    o = s.selectedProducts,
                    u = b.useState(c),
                    m = (0, l.Z)(u, 2),
                    w = m[0],
                    p = m[1];
                (0, b.useEffect)((function() {
                    a.listingType && p(a.listingType)
                }), [a]);
                return b.createElement(d.JX, null, b.createElement("p", null, "Select the duration of your listing:"), b.createElement(d.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, z.map((function(e) {
                    return b.createElement(d.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o.length > 0 && i((0, y.kH)()), i((0, y.TY)(e)), p(e), n({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(w === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, b.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b-2 tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, b.createElement("span", {
                        className: "".concat(w === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, w === e.value ? b.createElement(d.$1, {
                        icon: O.LE
                    }) : null), e.image ? b.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px]"
                    }) : b.createElement(d.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl"
                    }), e.label, b.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", b.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), b.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, b.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), b.createElement(d.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return b.createElement(j.DR, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    })))))
                }))))
            };

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = (0, b.lazy)((function() {
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
                A = "listingType",
                B = "listingDetails",
                G = "listingStoreSelect",
                _ = "listingCreated",
                q = {
                    duration: [A, B, G, _],
                    instant: [A, B, G, _],
                    permanent: [A, B, G, _]
                };
            const H = function(e) {
                var t = e.store,
                    n = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    T = (0, h.I0)(),
                    O = (0, C.s0)(),
                    D = (0, p.XC)().data,
                    P = (0, h.v9)((function(e) {
                        return e.listingFlow
                    })),
                    I = P.currentStep,
                    j = P.selectedListingType,
                    z = P.selectedProducts,
                    F = P.isPreviewOpen,
                    H = b.useState(null),
                    U = (0, l.Z)(H, 2),
                    Y = U[0],
                    $ = U[1],
                    Q = b.useState(J),
                    R = (0, l.Z)(Q, 2),
                    V = R[0],
                    K = R[1],
                    W = (0, b.useMemo)((function() {
                        return z.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [z]),
                    ee = (0, g.G4)(),
                    te = (0, l.Z)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    ae = (re.isSuccess, re.isLoading),
                    le = (re.isError, re.error, (0, x.Ci)({
                        sellerId: D.id,
                        managementPov: !0
                    }, {
                        skip: !D
                    })),
                    ie = le.data,
                    se = le.isLoading,
                    ce = (le.isError, le.error, (0, v.x3)({
                        userId: D.id,
                        archived: !1
                    }, {
                        skip: !D && "listingDetails" !== listingDetails
                    })),
                    oe = ce.data,
                    ue = ce.isLoading,
                    me = (ce.isError, ce.error, (0, f.Qb)({
                        avatarIds: W
                    }, {
                        skip: !W.length
                    })),
                    de = me.data,
                    we = (me.isFetching, me.isError, me.error, (0, b.useMemo)((function() {
                        return (null != de ? de : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [de]));
                (0, b.useEffect)((function() {
                    return function() {
                        T((0, y.rk)())
                    }
                }), []);
                var pe = function(e) {
                        e.listingType ? K(Z(Z({}, J), e)) : K(Z(Z({}, V), e))
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
                        var e, t = (e = q[j].indexOf(I), q[j][e + 1] || I);
                        T((0, y.Td)(w._9[t])), T((0, y.Bq)(t))
                    },
                    ve = function() {
                        var e = function() {
                                if (null === j) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = q[j].indexOf(I);
                                return {
                                    immediateStep: q[j][e - 1] || null,
                                    nextStep: q[j][e - 2] || null
                                }
                            }(),
                            t = e.immediateStep,
                            n = e.nextStep;
                        if (!t) return T((0, y.Bq)(A)), void T((0, y.IT)(null));
                        T((0, y.Td)(w._9[t])), T((0, y.Bq)(t)), T((0, y.IT)(n))
                    },
                    xe = function() {
                        var e = (0, r.Z)(u().mark((function e() {
                            var t, n, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ne(Z(Z({}, V), {}, {
                                            sellerId: D.id
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
                    ye = function(e) {
                        T((0, y.Td)(null)), T((0, y.xj)(e))
                    },
                    Ee = function() {
                        o(), K(J)
                    },
                    be = se || ue || ae,
                    he = (0, b.useMemo)((function() {
                        if (!j) return !1;
                        if ("permanent" !== j && z.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (I === B) {
                            if ("duration" === V.listingType) {
                                if (![w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(V.durationType)) return !1;
                                if (!((0, E.qG)(V.durationType, V.duration) && Number.isInteger(parseFloat(V.duration)))) return !1
                            }
                            var e = V.displayName.length >= 3,
                                t = V.priceTokens >= 100 && V.priceTokens <= 1e4 && Number.isInteger(parseFloat(V.priceTokens)),
                                n = V.products.length > 0 && V.products.length <= w._1;
                            return e && t && n
                        }
                        return !be
                    }), [I, V, z, j]);
                return b.createElement(b.Fragment, null, !F && b.createElement(d.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (I) {
                        case A:
                            return b.createElement(X, {
                                onDataChange: pe,
                                listing: V
                            });
                        case B:
                            return b.createElement(S.Z, {
                                onDataChange: pe,
                                products: oe,
                                productsLoading: ue,
                                listingType: V.listingType,
                                editedListing: V,
                                originalListing: V
                            });
                        case G:
                            return b.createElement(L.Z, {
                                products: V.products,
                                onDataChange: pe,
                                stores: ie,
                                activeStore: n
                            });
                        case _:
                            return b.createElement(N, {
                                listing: Y
                            });
                        default:
                            return null
                    }
                }(), b.createElement(d.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, b.createElement(d.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (I) {
                        case A:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                neutral: !0
                            }, "Cancel");
                        case _:
                            return n ? b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: Ee
                            }, "Close") : b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return O("/home/marketplace/storefront/stores")
                                }
                            }, "Go to Store Manager");
                        case G:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: ve
                            }, "Back");
                        default:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ve
                            }, "Back")
                    }
                }()), b.createElement(d.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (I) {
                        case A:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return fe(V.listingType)
                                },
                                disabled: !he || !j
                            }, "Next");
                        case _:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                disabled: !he
                            }, "Done");
                        case G:
                            return b.createElement(b.Fragment, null, "permanent" === j && b.createElement(d.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return ye(!0)
                                }
                            }, b.createElement(d.$1, {
                                icon: s.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), b.createElement(d.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: xe,
                                disabled: !he
                            }, "Create"));
                        default:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ge,
                                disabled: !he
                            }, "Next")
                    }
                }()))), F && b.createElement(k.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                }, b.createElement(d.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, b.createElement(d.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return T((0, y.xj)(!1)), void T((0, y.Td)(w._9[I]))
                    }
                }, b.createElement(d.$1, {
                    icon: i.YI
                }), " Close Preview")), b.createElement(b.Suspense, {
                    fallback: b.createElement("div", null, "Loading...")
                }, b.createElement(M, {
                    isPreview: !0,
                    products: z,
                    galleryImages: we,
                    listing: V,
                    onClose: function() {
                        return ye(!1)
                    }
                }))))
            }
        }
    }
]);
//# sourceMappingURL=3720e9e4f80cb4542858f836e641681357c01d4fbf418de62813d14b4f774307.js.map