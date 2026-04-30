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
                d = n(80988),
                w = n(90068),
                p = n(95896),
                f = n(22202),
                g = n(41255),
                v = n(16869),
                b = n(67978),
                x = n(36183),
                E = n(39270),
                y = n(64358),
                h = n(67294),
                C = n(32981),
                k = n(89250),
                T = n(53637),
                N = n(79655);
            const L = function(e) {
                var t = e.listing,
                    n = void 0 === t ? {} : t;
                return h.createElement(d.JX, {
                    className: "tw-text-center tw-items-center"
                }, h.createElement(d.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), h.createElement("h4", null, "Listing Created!"), h.createElement("p", null, "You can manage and review your listings from the ", h.createElement(N.rU, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var P = n(25423),
                O = n(80938),
                D = n(99878),
                I = n(68055),
                S = n(28963),
                j = n(91435),
                z = n(14825),
                X = n(60006),
                Z = [{
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
                    icon: S.DH,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: z.default,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const M = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.currentListing,
                    a = void 0 === r ? {} : r,
                    l = (0, C.I0)(),
                    s = (0, C.v9)((function(e) {
                        return e.listingFlow
                    })),
                    c = s.selectedListingType,
                    o = s.selectedProducts,
                    u = h.useState(c),
                    m = (0, i.Z)(u, 2),
                    w = m[0],
                    p = m[1];
                (0, h.useEffect)((function() {
                    a.listingType && p(a.listingType)
                }), [a]);
                return h.createElement(d.JX, null, h.createElement("p", null, "Select the duration of your listing:"), h.createElement(d.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, Z.map((function(e) {
                    return h.createElement(d.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o.length > 0 && l((0, E.kH)()), l((0, E.TY)(e)), p(e), n({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(w === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, h.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, h.createElement("span", {
                        className: "".concat(w === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, w === e.value ? h.createElement(d.$1, {
                        icon: I.LE
                    }) : null), e.image ? h.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : h.createElement(d.$1, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, h.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", h.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), h.createElement(d.JX, {
                        className: "tw-items-center tw-justify-center"
                    }, h.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), h.createElement(d.X2, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map((function(e) {
                        return h.createElement(X.DR, {
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

            function B(e) {
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
            var J = (0, h.lazy)((function() {
                    return Promise.all([n.e(2027), n.e(3348), n.e(9336), n.e(389)]).then(n.bind(n, 29336))
                })),
                _ = {
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
                $ = "listingStoreSelect",
                q = "listingPublishWarning",
                H = "listingCreated",
                U = {
                    duration: [A, G, $, q, H],
                    instant: [A, G, $, q, H],
                    permanent: [A, G, $, q, H]
                };
            const Y = function(e) {
                var t = e.store,
                    n = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    N = (0, C.I0)(),
                    I = (0, k.s0)(),
                    S = (0, f.XC)().data,
                    j = (0, w.P2)().showContentViolationModal,
                    z = (0, C.v9)((function(e) {
                        return e.listingFlow
                    })),
                    X = z.currentStep,
                    Z = z.selectedListingType,
                    F = z.selectedProducts,
                    Y = z.isPreviewOpen,
                    V = h.useState(null),
                    R = (0, i.Z)(V, 2),
                    Q = R[0],
                    W = R[1],
                    K = h.useState(_),
                    ee = (0, i.Z)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, h.useMemo)((function() {
                        return F.filter((function(e) {
                            return e.avatarId
                        })).map((function(e) {
                            return e.avatarId
                        }))
                    }), [F]),
                    ae = (0, v.G4)(),
                    ie = (0, i.Z)(ae, 2),
                    le = ie[0],
                    se = ie[1],
                    ce = (se.isSuccess, se.isLoading),
                    oe = (se.isError, se.error, (0, x.Ci)({
                        sellerId: S.id,
                        managementPov: !0
                    }, {
                        skip: !S
                    })),
                    ue = oe.data,
                    me = oe.isLoading,
                    de = (oe.isError, oe.error, (0, b.x3)({
                        userId: S.id,
                        archived: !1
                    }, {
                        skip: !S && "listingDetails" !== listingDetails
                    })),
                    we = de.data,
                    pe = de.isLoading,
                    fe = (de.isError, de.error, (0, g.Qb)({
                        avatarIds: re
                    }, {
                        skip: !re.length
                    })),
                    ge = fe.data,
                    ve = (fe.isFetching, fe.isError, fe.error, (0, h.useMemo)((function() {
                        return (null != ge ? ge : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [ge]));
                (0, h.useEffect)((function() {
                    return function() {
                        N((0, E.rk)())
                    }
                }), []);
                var be = function(e) {
                        e.listingType ? ne(B(B({}, _), e)) : ne(B(B({}, te), e))
                    },
                    xe = function() {
                        var e = (0, r.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Z) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        be({
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
                            if (!Z) return X;
                            var e = U[Z],
                                t = e.indexOf(X);
                            if (t === e.length - 1) return X;
                            var n = e[t + 1];
                            return n !== q || te.active ? n : H
                        }();
                        N((0, E.Td)(p._9[e])), N((0, E.Bq)(e))
                    },
                    ye = function() {
                        var e = function() {
                                if (null === Z) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = U[Z],
                                    t = e.indexOf(X) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            n = e.nextStep;
                        if (!t) return N((0, E.Bq)(A)), void N((0, E.IT)(null));
                        N((0, E.Td)(p._9[t])), N((0, E.Bq)(t)), N((0, E.IT)(n))
                    },
                    he = function() {
                        var e = (0, r.Z)(u().mark((function e() {
                            var t, n, r;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, le(B(B({}, te), {}, {
                                            sellerId: S.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, W(t.listing), e.abrupt("return", Ee());
                                    case 8:
                                        if (e.prev = 8, e.t0 = e.catch(0), !j({
                                                error: e.t0
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        N((0, m.d)({
                                            title: "Failed to create listing!",
                                            icon: c.eH,
                                            message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
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
                        N((0, E.Td)(null)), N((0, E.xj)(e))
                    },
                    ke = function() {
                        o(), ne(_)
                    },
                    Te = me || pe || ce,
                    Ne = (0, h.useMemo)((function() {
                        if (!Z) return !1;
                        if ("permanent" !== Z && F.some((function(e) {
                                return e.avatarId
                            }))) return !1;
                        if (X === G) {
                            if ("duration" === te.listingType) {
                                if (![p.PG.MIN, p.PG.HOUR, p.PG.DAY].includes(te.durationType)) return !1;
                                if (!((0, y.qG)(te.durationType, te.duration) && Number.isInteger(Number(te.duration)) && /^\d+$/.test(te.duration))) return !1
                            }
                            var e = te.displayName.length >= 3,
                                t = "permanent" === Z ? p.YC : p._C,
                                n = te.priceTokens >= p.zD && te.priceTokens <= t && Number.isInteger(parseInt(te.priceTokens)) && /^\d+$/.test(te.priceTokens),
                                r = te.products.length > 0 && te.products.length <= p._1;
                            return e && n && r
                        }
                        return !Te
                    }), [X, te, F, Z]);
                return h.createElement(h.Fragment, null, !Y && h.createElement(d.JX, {
                    className: "tw-w-full"
                }, function() {
                    switch (X) {
                        case A:
                            return h.createElement(M, {
                                onDataChange: be,
                                listing: te
                            });
                        case G:
                            return h.createElement(P.Z, {
                                onDataChange: be,
                                products: we,
                                productsLoading: pe,
                                listingType: te.listingType,
                                editedListing: te,
                                originalListing: te
                            });
                        case $:
                            return h.createElement(D.Z, {
                                activeListing: te,
                                products: te.products,
                                onDataChange: be,
                                stores: ue,
                                activeStore: n
                            });
                        case q:
                            return h.createElement(O.Z, null);
                        case H:
                            return h.createElement(L, {
                                listing: Q
                            });
                        default:
                            return null
                    }
                }(), h.createElement(d.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, h.createElement(d.X2, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (X) {
                        case A:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ke,
                                neutral: !0
                            }, "Cancel");
                        case q:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ye
                            }, "Back");
                        case H:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return I("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case $:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: ye
                            }, "Back");
                        default:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: ye
                            }, "Back")
                    }
                }()), h.createElement(d.X2, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (X) {
                        case A:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return xe(te.listingType)
                                },
                                disabled: !Ne || !Z
                            }, "Next");
                        case q:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: he,
                                disabled: !Ne
                            }, "Publish Listing");
                        case H:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: ke,
                                disabled: !Ne
                            }, "Done");
                        case $:
                            return h.createElement(h.Fragment, null, "permanent" === Z && h.createElement(d.zx, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return Ce(!0)
                                }
                            }, h.createElement(d.$1, {
                                icon: s.wl,
                                className: "tw-mr-2"
                            }), "Preview Listing"), h.createElement(d.zx, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != te && te.active ? Ee : he,
                                disabled: !Ne
                            }, "Create"));
                        default:
                            return h.createElement(d.zx, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                disabled: !Ne
                            }, "Next")
                    }
                }()))), Y && h.createElement(T.Z, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                }, h.createElement(d.X2, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, h.createElement(d.zx, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return N((0, E.xj)(!1)), void N((0, E.Td)(p._9[X]))
                    }
                }, h.createElement(d.$1, {
                    icon: l.YI
                }), " Close Preview")), h.createElement(h.Suspense, {
                    fallback: h.createElement("div", null, "Loading...")
                }, h.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, h.createElement(J, {
                    isPreview: !0,
                    products: F,
                    galleryImages: ve,
                    listing: te,
                    onClose: function() {
                        return Ce(!1)
                    }
                })))))
            }
        }
    }
]);
//# sourceMappingURL=8fd5f62f7351e07b0a92276ae41e765fed26929cef86adf275a40e1e733b7b98.js.map