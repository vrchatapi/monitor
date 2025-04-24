"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [682], {
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
                default: () => Y
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
                f = n(22202),
                p = n(41255),
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
                    className: "tw-text-center tw-items-center"
                }, b.createElement(d.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), b.createElement("h4", null, "Listing Created!"), b.createElement("p", null, "You can manage and review your listings from the ", b.createElement(T.rU, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var L = n(68420),
                P = n(80938),
                O = n(99878),
                D = n(68055),
                S = n(28963),
                I = n(91435),
                j = n(74205),
                z = n(60006),
                X = [{
                    label: "Instant",
                    value: "instant",
                    text: "Single-use items triggered instantly.",
                    redirect: "https://creators.vrchat.com/economy/listings#instant",
                    icon: I.BD,
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
                    icon: j.SQ,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const F = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.currentListing,
                    a = void 0 === r ? {} : r,
                    l = (0, h.I0)(),
                    s = (0, h.v9)((function(e) {
                        return e.listingFlow
                    })),
                    c = s.selectedListingType,
                    o = s.selectedProducts,
                    u = b.useState(c),
                    m = (0, i.Z)(u, 2),
                    w = m[0],
                    f = m[1];
                (0, b.useEffect)((function() {
                    a.listingType && f(a.listingType)
                }), [a]);
                return b.createElement(d.JX, null, b.createElement("p", null, "Select the duration of your listing:"), b.createElement(d.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, X.map((function(e) {
                    return b.createElement(d.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o.length > 0 && l((0, y.kH)()), l((0, y.TY)(e)), f(e), n({
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
                        icon: D.LE
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
                        return b.createElement(z.DR, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    })))))
                }))))
            };

            function Z(e, t) {
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
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var B = (0, b.lazy)((function() {
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
                G = "listingDetails",
                _ = "listingStoreSelect",
                q = "listingPublishWarning",
                H = "listingCreated",
                U = {
                    duration: [A, G, _, q, H],
                    instant: [A, G, _, q, H],
                    permanent: [A, G, _, q, H]
                };
            const Y = function(e) {
                var t = e.store,
                    n = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    T = (0, h.I0)(),
                    D = (0, C.s0)(),
                    S = (0, f.XC)().data,
                    I = (0, h.v9)((function(e) {
                        return e.listingFlow
                    })),
                    j = I.currentStep,
                    z = I.selectedListingType,
                    X = I.selectedProducts,
                    Z = I.isPreviewOpen,
                    Y = b.useState(null),
                    $ = (0, i.Z)(Y, 2),
                    Q = $[0],
                    R = $[1],
                    V = b.useState(J),
                    W = (0, i.Z)(V, 2),
                    K = W[0],
                    ee = W[1],
                    te = (0, b.useMemo)((function() {
                        return X.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [X]),
                    ne = (0, g.G4)(),
                    re = (0, i.Z)(ne, 2),
                    ae = re[0],
                    ie = re[1],
                    le = (ie.isSuccess, ie.isLoading),
                    se = (ie.isError, ie.error, (0, x.Ci)({
                        sellerId: S.id,
                        managementPov: !0
                    }, {
                        skip: !S
                    })),
                    ce = se.data,
                    oe = se.isLoading,
                    ue = (se.isError, se.error, (0, v.x3)({
                        userId: S.id,
                        archived: !1
                    }, {
                        skip: !S && "listingDetails" !== listingDetails
                    })),
                    me = ue.data,
                    de = ue.isLoading,
                    we = (ue.isError, ue.error, (0, p.Qb)({
                        avatarIds: te
                    }, {
                        skip: !te.length
                    })),
                    fe = we.data,
                    pe = (we.isFetching, we.isError, we.error, (0, b.useMemo)((function() {
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
                        T((0, y.rk)())
                    }
                }), []);
                var ge = function(e) {
                        e.listingType ? ee(M(M({}, J), e)) : ee(M(M({}, K), e))
                    },
                    ve = function() {
                        var e = (0, r.Z)(u().mark((function e(t) {
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
                                        }), xe();
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
                    xe = function() {
                        var e = function() {
                            if (!z) return j;
                            var e = U[z],
                                t = e.indexOf(j);
                            if (t === e.length - 1) return j;
                            var n = e[t + 1];
                            return n !== q || K.active ? n : H
                        }();
                        T((0, y.Td)(w._9[e])), T((0, y.Bq)(e))
                    },
                    ye = function() {
                        var e = function() {
                                if (null === z) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = U[z],
                                    t = e.indexOf(j) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            n = e.nextStep;
                        if (!t) return T((0, y.Bq)(A)), void T((0, y.IT)(null));
                        T((0, y.Td)(w._9[t])), T((0, y.Bq)(t)), T((0, y.IT)(n))
                    },
                    Ee = function() {
                        var e = (0, r.Z)(u().mark((function e() {
                            var t, n, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ae(M(M({}, K), {}, {
                                            sellerId: S.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, R(t.listing), e.abrupt("return", xe());
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
                    be = function(e) {
                        T((0, y.Td)(null)), T((0, y.xj)(e))
                    },
                    he = function() {
                        o(), ee(J)
                    },
                    Ce = oe || de || le,
                    ke = (0, b.useMemo)((function() {
                        if (!z) return !1;
                        if ("permanent" !== z && X.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (j === G) {
                            if ("duration" === K.listingType) {
                                if (![w.PG.MIN, w.PG.HOUR, w.PG.DAY].includes(K.durationType)) return !1;
                                if (!((0, E.qG)(K.durationType, K.duration) && Number.isInteger(parseFloat(K.duration)))) return !1
                            }
                            var e = K.displayName.length >= 3,
                                t = K.priceTokens >= 100 && K.priceTokens <= 1e4 && Number.isInteger(parseFloat(K.priceTokens)),
                                n = K.products.length > 0 && K.products.length <= w._1;
                            return e && t && n
                        }
                        return !Ce
                    }), [j, K, X, z]);
                return b.createElement(b.Fragment, null, !Z && b.createElement(d.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (j) {
                        case A:
                            return b.createElement(F, {
                                onDataChange: ge,
                                listing: K
                            });
                        case G:
                            return b.createElement(L.Z, {
                                onDataChange: ge,
                                products: me,
                                productsLoading: de,
                                listingType: K.listingType,
                                editedListing: K,
                                originalListing: K
                            });
                        case _:
                            return b.createElement(O.Z, {
                                activeListing: K,
                                products: K.products,
                                onDataChange: ge,
                                stores: ce,
                                activeStore: n
                            });
                        case q:
                            return b.createElement(P.Z, null);
                        case H:
                            return b.createElement(N, {
                                listing: Q
                            });
                        default:
                            return null
                    }
                }(), b.createElement(d.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, b.createElement(d.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (j) {
                        case A:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: he,
                                neutral: !0
                            }, "Cancel");
                        case q:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ye
                            }, "Back");
                        case H:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return D("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case _:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: ye
                            }, "Back");
                        default:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ye
                            }, "Back")
                    }
                }()), b.createElement(d.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (j) {
                        case A:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return ve(K.listingType)
                                },
                                disabled: !ke || !z
                            }, "Next");
                        case q:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                disabled: !ke
                            }, "Publish Listing");
                        case H:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: he,
                                disabled: !ke
                            }, "Done");
                        case _:
                            return b.createElement(b.Fragment, null, "permanent" === z && b.createElement(d.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return be(!0)
                                }
                            }, b.createElement(d.$1, {
                                icon: s.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), b.createElement(d.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != K && K.active ? xe : Ee,
                                disabled: !ke
                            }, "Create"));
                        default:
                            return b.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: xe,
                                disabled: !ke
                            }, "Next")
                    }
                }()))), Z && b.createElement(k.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-border tw-border-[#2D363F] tw-rounded-lg tw-p-5"
                }, b.createElement(d.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, b.createElement(d.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return T((0, y.xj)(!1)), void T((0, y.Td)(w._9[j]))
                    }
                }, b.createElement(d.$1, {
                    icon: l.YI
                }), " Close Preview")), b.createElement(b.Suspense, {
                    fallback: b.createElement("div", null, "Loading...")
                }, b.createElement(B, {
                    isPreview: !0,
                    products: X,
                    galleryImages: pe,
                    listing: K,
                    onClose: function() {
                        return be(!1)
                    }
                }))))
            }
        }
    }
]);
//# sourceMappingURL=cd2c781249221424233edaa5037cdecc9aef126db7dd76a88b45d23b25150775.js.map