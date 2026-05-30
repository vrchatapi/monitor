"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1768], {
        16879(e, t) {
            var n = "hourglass",
                r = [9203, 62032, "hourglass-empty"],
                a = "f254",
                i = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [384, 512, r, a, i]
            }, t.Ao = t.mw
        },
        11768(e, t, n) {
            n.r(t), n.d(t, {
                default: () => q
            });
            var r = n(10467),
                a = n(64467),
                i = n(15902),
                l = n(88213),
                s = n(34912),
                c = n(34496),
                o = n(54756),
                u = n.n(o),
                m = n(65950),
                d = n(15033),
                w = n(97071),
                f = n(31069),
                p = n(13951),
                g = n(31931),
                v = n(72784),
                b = n(6457),
                y = n(97087),
                E = n(70650),
                h = n(91069),
                C = n(96540),
                x = n(6376),
                k = n(47767),
                N = n(35169),
                T = n(84976);
            const L = function(e) {
                var t = e.listing,
                    n = void 0 === t ? {} : t;
                return C.createElement(d.fv, {
                    className: "tw-text-center tw-items-center"
                }, C.createElement(d.Oo, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == n ? void 0 : n.imageId,
                    alt: null == n ? void 0 : n.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), C.createElement("h4", null, "Listing Created!"), C.createElement("p", null, "You can manage and review your listings from the ", C.createElement(T.N_, {
                    to: "/home/marketplace/storefront/listings"
                }, "My Listings"), " section."))
            };
            var S = n(24475),
                O = n(69886),
                A = n(15322),
                I = n(81617),
                P = n(16879),
                j = n(84994),
                D = n(88270),
                M = n(24751),
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
                    icon: P.Ao,
                    allowedTypes: ["Udon"]
                }, {
                    label: "Permanent",
                    value: "permanent",
                    text: "Lifetime access to exclusive zones or features.",
                    redirect: "https://creators.vrchat.com/economy/listings#permanent",
                    icon: D.default,
                    allowedTypes: ["Udon", "Avatar"]
                }];
            const F = function(e) {
                var t = e.onDataChange,
                    n = void 0 === t ? function() {} : t,
                    r = e.currentListing,
                    a = void 0 === r ? {} : r,
                    l = (0, x.wA)(),
                    s = (0, x.d4)(function(e) {
                        return e.listingFlow
                    }),
                    c = s.selectedListingType,
                    o = s.selectedProducts,
                    u = C.useState(c),
                    m = (0, i.A)(u, 2),
                    w = m[0],
                    f = m[1];
                (0, C.useEffect)(function() {
                    a.listingType && f(a.listingType)
                }, [a]);
                return C.createElement(d.fv, null, C.createElement("p", null, "Select the duration of your listing:"), C.createElement(d.fv, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, $.map(function(e) {
                    return C.createElement(d.fv, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o.length > 0 && l((0, E.aR)()), l((0, E.mN)(e)), f(e), n({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(w === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, C.createElement(d.fv, {
                        className: "tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-[#404C58] tw-w-full tw-pb-3"
                    }, C.createElement("span", {
                        className: "".concat(w === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, w === e.value ? C.createElement(d.M2, {
                        icon: I.e6
                    }) : null), e.image ? C.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px] tw-mb-2"
                    }) : C.createElement(d.M2, {
                        icon: e.icon,
                        className: "tw-text-5xl tw-mb-2"
                    }), e.label, C.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", C.createElement("a", {
                        href: e.redirect
                    }, "Learn More"))), C.createElement(d.fv, {
                        className: "tw-items-center tw-justify-center"
                    }, C.createElement("small", {
                        className: "tw-font-bold tw-mb-2"
                    }, "Eligible Products"), C.createElement(d.fI, {
                        className: "tw-gap-1"
                    }, e.allowedTypes.map(function(e) {
                        return C.createElement(M.ab, {
                            key: e,
                            bgColor: "#575757"
                        }, e)
                    }))))
                })))
            };

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var B = (0, C.lazy)(function() {
                    return Promise.all([n.e(6955), n.e(5242), n.e(3456), n.e(5782)]).then(n.bind(n, 63456))
                }),
                U = {
                    listingType: null,
                    products: [],
                    displayName: "",
                    description: "",
                    priceTokens: 0,
                    active: !1,
                    productType: "listing"
                },
                _ = "listingType",
                H = "listingDetails",
                V = "listingStoreSelect",
                G = "listingPublishWarning",
                R = "listingCreated",
                X = {
                    duration: [_, H, V, G, R],
                    instant: [_, H, V, G, R],
                    permanent: [_, H, V, G, R]
                };
            const q = function(e) {
                var t = e.store,
                    n = void 0 === t ? null : t,
                    a = e.onClose,
                    o = void 0 === a ? function() {} : a,
                    T = (0, x.wA)(),
                    I = (0, k.Zp)(),
                    P = (0, p.P2)().data,
                    j = (0, w.DF)().showContentViolationModal,
                    D = (0, x.d4)(function(e) {
                        return e.listingFlow
                    }),
                    M = D.currentStep,
                    $ = D.selectedListingType,
                    z = D.selectedProducts,
                    q = D.isPreviewOpen,
                    J = C.useState(null),
                    W = (0, i.A)(J, 2),
                    Z = W[0],
                    K = W[1],
                    Q = C.useState(U),
                    ee = (0, i.A)(Q, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, C.useMemo)(function() {
                        return z.filter(function(e) {
                            return e.avatarId
                        }).map(function(e) {
                            return e.avatarId
                        })
                    }, [z]),
                    ae = (0, v.js)(),
                    ie = (0, i.A)(ae, 2),
                    le = ie[0],
                    se = ie[1],
                    ce = (se.isSuccess, se.isLoading),
                    oe = (se.isError, se.error, (0, y._N)({
                        sellerId: P.id,
                        managementPov: !0
                    }, {
                        skip: !P
                    })),
                    ue = oe.data,
                    me = oe.isLoading,
                    de = (oe.isError, oe.error, (0, b.Cg)({
                        userId: P.id,
                        archived: !1
                    }, {
                        skip: !P && "listingDetails" !== listingDetails
                    })),
                    we = de.data,
                    fe = de.isLoading,
                    pe = (de.isError, de.error, (0, g.Hg)({
                        avatarIds: re
                    }, {
                        skip: !re.length
                    })),
                    ge = pe.data,
                    ve = (pe.isFetching, pe.isError, pe.error, (0, C.useMemo)(function() {
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
                        T((0, E.GS)())
                    }
                }, []);
                var be = function(e) {
                        e.listingType ? ne(Y(Y({}, U), e)) : ne(Y(Y({}, te), e))
                    },
                    ye = function() {
                        var e = (0, r.A)(u().mark(function e(t) {
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ($) {
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
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ee = function() {
                        var e = function() {
                            if (!$) return M;
                            var e = X[$],
                                t = e.indexOf(M);
                            if (t === e.length - 1) return M;
                            var n = e[t + 1];
                            return n !== G || te.active ? n : R
                        }();
                        T((0, E.D6)(f.cS[e])), T((0, E.EY)(e))
                    },
                    he = function() {
                        var e = function() {
                                if (null === $) return {
                                    immediateStep: null,
                                    nextStep: null
                                };
                                var e = X[$],
                                    t = e.indexOf(M) - 1;
                                return {
                                    immediateStep: e[t],
                                    nextStep: t > 0 ? e[t - 1] : null
                                }
                            }(),
                            t = e.immediateStep,
                            n = e.nextStep;
                        if (!t) return T((0, E.EY)(_)), void T((0, E.ac)(null));
                        T((0, E.D6)(f.cS[t])), T((0, E.EY)(t)), T((0, E.ac)(n))
                    },
                    Ce = function() {
                        var e = (0, r.A)(u().mark(function e() {
                            var t, n, r;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, le(Y(Y({}, te), {}, {
                                            sellerId: P.id
                                        })).unwrap();
                                    case 3:
                                        return t = e.sent, K(t.listing), e.abrupt("return", Ee());
                                    case 8:
                                        if (e.prev = 8, e.t0 = e.catch(0), !j({
                                                error: e.t0
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        T((0, m.X)({
                                            title: "Failed to create listing!",
                                            icon: c.zp,
                                            message: null !== (n = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Something went wrong",
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
                        T((0, E.D6)(null)), T((0, E.jT)(e))
                    },
                    ke = function() {
                        o(), ne(U)
                    },
                    Ne = me || fe || ce,
                    Te = (0, C.useMemo)(function() {
                        if (!$) return !1;
                        if ("permanent" !== $ && z.some(function(e) {
                                return e.avatarId
                            })) return !1;
                        if (M === H) {
                            if ("duration" === te.listingType) {
                                if (![f.yT.MIN, f.yT.HOUR, f.yT.DAY].includes(te.durationType)) return !1;
                                if (!((0, h.XA)(te.durationType, te.duration) && Number.isInteger(Number(te.duration)) && /^\d+$/.test(te.duration))) return !1
                            }
                            var e = te.displayName.length >= 3,
                                t = "permanent" === $ ? f.gw : f.Hd,
                                n = te.priceTokens >= f.pb && te.priceTokens <= t && Number.isInteger(parseInt(te.priceTokens)) && /^\d+$/.test(te.priceTokens),
                                r = te.products.length > 0 && te.products.length <= f.B8;
                            return e && n && r
                        }
                        return !Ne
                    }, [M, te, z, $]);
                return C.createElement(C.Fragment, null, !q && C.createElement(d.fv, {
                    className: "tw-w-full"
                }, function() {
                    switch (M) {
                        case _:
                            return C.createElement(F, {
                                onDataChange: be,
                                listing: te
                            });
                        case H:
                            return C.createElement(S.A, {
                                onDataChange: be,
                                products: we,
                                productsLoading: fe,
                                listingType: te.listingType,
                                editedListing: te,
                                originalListing: te
                            });
                        case V:
                            return C.createElement(A.A, {
                                activeListing: te,
                                products: te.products,
                                onDataChange: be,
                                stores: ue,
                                activeStore: n
                            });
                        case G:
                            return C.createElement(O.A, null);
                        case R:
                            return C.createElement(L, {
                                listing: Z
                            });
                        default:
                            return null
                    }
                }(), C.createElement(d.fI, {
                    className: "tw-mt-8 tw-gap-3"
                }, C.createElement(d.fI, {
                    className: "tw-flex-auto"
                }, function() {
                    switch (M) {
                        case _:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: ke,
                                neutral: !0
                            }, "Cancel");
                        case G:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        case R:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: function() {
                                    return I("/home/marketplace/storefront/listings")
                                }
                            }, "Go to My Listings");
                        case V:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex tw-w-[200px]",
                                neutral: !0,
                                onClick: he
                            }, "Back");
                        default:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                neutral: !0,
                                onClick: he
                            }, "Back")
                    }
                }()), C.createElement(d.fI, {
                    className: "tw-flex-auto tw-justify-end"
                }, function() {
                    switch (M) {
                        case _:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: function() {
                                    return ye(te.listingType)
                                },
                                disabled: !Te || !$
                            }, "Next");
                        case G:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: Ce,
                                disabled: !Te
                            }, "Publish Listing");
                        case R:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: ke,
                                disabled: !Te
                            }, "Done");
                        case V:
                            return C.createElement(C.Fragment, null, "permanent" === $ && C.createElement(d.$n, {
                                transparent: !0,
                                containerClasses: "tw-w-fit tw-mr-5",
                                onClick: function() {
                                    return xe(!0)
                                }
                            }, C.createElement(d.M2, {
                                icon: s.Ju,
                                className: "tw-mr-2"
                            }), "Preview Listing"), C.createElement(d.$n, {
                                containerClasses: "tw-w-[200px]",
                                onClick: null != te && te.active ? Ee : Ce,
                                disabled: !Te
                            }, "Create"));
                        default:
                            return C.createElement(d.$n, {
                                containerClasses: "tw-flex-1",
                                onClick: Ee,
                                disabled: !Te
                            }, "Next")
                    }
                }()))), q && C.createElement(N.A, {
                    className: "tw-min-h-screen tw-bg-[#0A0A0D] tw-rounded-lg tw-p-0 tw-min-w-[340px]"
                }, C.createElement(d.fI, {
                    className: "tw-justify-center tw-items-center tw-mb-3"
                }, C.createElement(d.$n, {
                    neutral: !0,
                    containerClasses: "tw-w-fit",
                    onClick: function() {
                        return T((0, E.jT)(!1)), void T((0, E.D6)(f.cS[M]))
                    }
                }, C.createElement(d.M2, {
                    icon: l.yY
                }), " Close Preview")), C.createElement(C.Suspense, {
                    fallback: C.createElement("div", null, "Loading...")
                }, C.createElement("div", {
                    className: "tw-border tw-border-solid  tw-border-hr-line-color tw-rounded-lg tw-p-5"
                }, C.createElement(B, {
                    isPreview: !0,
                    products: z,
                    galleryImages: ve,
                    listing: te,
                    onClose: function() {
                        return xe(!1)
                    }
                })))))
            }
        }
    }
]);
//# sourceMappingURL=84e06b097ffc82f6c6791325b82290f3ecc3a0c75226fd41841beceec538fefb.js.map