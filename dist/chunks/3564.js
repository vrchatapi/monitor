"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3564], {
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
        59795: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => z
            });
            var n = r(15861),
                a = r(4942),
                i = r(54546),
                s = r(76553),
                l = r(64687),
                c = r.n(l),
                o = r(64258),
                u = r(14411),
                g = r(95896),
                m = r(22202),
                p = r(16869),
                d = r(67978),
                w = r(36183),
                f = r(36753),
                C = r(64358),
                b = r(67294),
                v = r(32981),
                h = r(89250),
                y = r(79655);
            const L = function(e) {
                var t = e.listing,
                    r = void 0 === t ? {} : t;
                return b.createElement(u.JX, {
                    className: "tw-text-center tw-mb-8 tw-items-center"
                }, b.createElement(u.pw, {
                    className: "tw-mb-5 tw-rounded-lg",
                    imageId: null == r ? void 0 : r.imageId,
                    alt: null == r ? void 0 : r.displayName,
                    width: 150,
                    fitToCover: !0,
                    containerColor: "#252A30",
                    iconColor: "#404C58"
                }), b.createElement("h4", null, "Listing Created!"), b.createElement("p", null, "You can edit and manage your listings from the ", b.createElement(y.rU, {
                    to: "/home/marketplace/storefront/stores"
                }, "Store Manager"), "."))
            };
            var x = r(9401),
                E = r(99878),
                k = r(68055),
                T = r(28963),
                O = r(91435);
            const N = r.p + "9280018677aea8951ed7bd513d2b8da28ef4e71bdb936d17d74c40bd2b428164.svg";
            var I = [{
                label: "Instant",
                value: "instant",
                text: "Single-use items triggered instantly.",
                redriect: "https://creators.vrchat.com/economy/listings#instant",
                icon: O.BD
            }, {
                label: "Temporary",
                value: "duration",
                text: "Offer access for a limited time.",
                redriect: "https://creators.vrchat.com/economy/listings#temporary",
                icon: T.DH
            }, {
                label: "Permanent",
                value: "permanent",
                text: "Lifetime access to exclusive zones or features.",
                redriect: "https://creators.vrchat.com/economy/listings#permanent",
                image: N
            }];
            const D = function(e) {
                var t = e.onDataChange,
                    r = void 0 === t ? function() {} : t,
                    n = e.currentListing,
                    a = void 0 === n ? {} : n,
                    s = b.useState(null),
                    l = (0, i.Z)(s, 2),
                    c = l[0],
                    o = l[1];
                (0, b.useEffect)((function() {
                    a.listingType && o(a.listingType)
                }), [a]);
                return b.createElement(u.JX, null, b.createElement("p", null, "Select the duration of your listing:"), b.createElement(u.JX, {
                    className: "tw-gap-5 tw-items-center md:tw-items-stretch md:tw-flex-row"
                }, I.map((function(e) {
                    return b.createElement(u.JX, {
                        key: e.value,
                        onClick: function() {
                            return function(e) {
                                o(e), r({
                                    listingType: e
                                })
                            }(e.value)
                        },
                        className: "".concat(c === e.value ? "tw-ring-teal-accent" : "tw-ring-hr-line-color", " tw-ring-2 tw-relative tw-aspect-square tw-max-w-[220px] tw-text-center tw-px-5 tw-py-7 tw-gap-3 tw-bg-grey tw-items-center tw-justify-center tw-flex-1 tw-rounded-md tw-cursor-pointer")
                    }, b.createElement("span", {
                        className: "".concat(c === e.value ? "tw-bg-teal-accent" : "tw-bg-hr-line-color", " tw-h-6 tw-w-6 tw-absolute tw-top-3 tw-right-3 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-self-end tw-text-[#1A2026]")
                    }, c === e.value ? b.createElement(u.$1, {
                        icon: k.LE
                    }) : null), e.image ? b.createElement("img", {
                        src: e.image,
                        alt: e.label,
                        className: "tw-h-12 tw-w-[56px]"
                    }) : b.createElement(u.$1, {
                        icon: e.icon,
                        className: "tw-h-12"
                    }), e.label, b.createElement("small", {
                        className: "tw-m-0 tw-text-xs tw-text-light-grey"
                    }, e.text, " ", b.createElement("a", {
                        href: e.redriect
                    }, "Learn More")))
                }))))
            };

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var j = {
                listingType: null,
                products: [],
                displayName: "",
                priceTokens: 0,
                active: !1,
                productType: "listing"
            };
            const z = function(e) {
                var t = e.store,
                    r = void 0 === t ? null : t,
                    a = e.onClose,
                    l = void 0 === a ? function() {} : a,
                    y = (0, v.I0)(),
                    k = (0, h.s0)(),
                    T = (0, m.XC)().data,
                    O = (0, v.v9)((function(e) {
                        return e.listingCreation
                    })),
                    N = O.previousStep,
                    I = O.currentStep,
                    P = (O.selectedType, b.useState(null)),
                    z = (0, i.Z)(P, 2),
                    Z = z[0],
                    B = z[1],
                    q = b.useState(j),
                    M = (0, i.Z)(q, 2),
                    X = M[0],
                    G = M[1],
                    F = (0, p.G4)(),
                    J = (0, i.Z)(F, 2),
                    A = J[0],
                    H = J[1],
                    _ = (H.isSuccess, H.isLoading),
                    U = (H.isError, H.error, (0, w.Ci)({
                        sellerId: T.id,
                        managementPov: !0
                    }, {
                        skip: !T
                    })),
                    Y = U.data,
                    $ = U.isLoading,
                    Q = (U.isError, U.error, (0, d.As)()),
                    R = (0, i.Z)(Q, 2),
                    K = R[0],
                    V = R[1],
                    W = V.data,
                    ee = V.isLoading,
                    te = (V.isError, V.error, function(e) {
                        G(S(S({}, X), e))
                    }),
                    re = function() {
                        switch (y((0, f.Bq)(N)), N) {
                            case "Create Listing (1/3)":
                                y((0, f.IT)(null));
                                break;
                            case "Create Listing (2/3)":
                                y((0, f.IT)("Create Listing (1/3)"));
                                break;
                            case "Create Listing (3/3)":
                                y((0, f.IT)("Create Listing (2/3)"))
                        }
                    },
                    ne = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var t, r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.t0 = I, e.next = "Create Listing (1/3)" === e.t0 ? 3 : "Create Listing (2/3)" === e.t0 ? 8 : "Create Listing (3/3)" === e.t0 ? 11 : "listingCreated" === e.t0 ? 24 : 27;
                                        break;
                                    case 3:
                                        return y((0, f.Bq)("Create Listing (2/3)")), y((0, f.Pm)(X.listingType)), y((0, f.IT)("Create Listing (1/3)")), K({
                                            userId: T.id,
                                            archived: !1
                                        }), e.abrupt("break", 31);
                                    case 8:
                                        return y((0, f.Bq)("Create Listing (3/3)")), y((0, f.IT)("Create Listing (2/3)")), e.abrupt("break", 31);
                                    case 11:
                                        return e.prev = 11, e.next = 14, A(S(S({}, X), {}, {
                                            sellerId: T.id
                                        })).unwrap();
                                    case 14:
                                        t = e.sent, B(t.listing), y((0, f.Bq)("listingCreated")), y((0, f.BQ)(!0)), e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(11), y((0, o.d)({
                                            title: "Failed to create listing!",
                                            icon: s.eH,
                                            message: null !== (r = null === (n = e.t1.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 23:
                                        return e.abrupt("break", 31);
                                    case 24:
                                        return l(), G(j), e.abrupt("break", 31);
                                    case 27:
                                        return y((0, f.Bq)("Create Listing (1/3)")), y((0, f.IT)(null)), G(j), e.abrupt("break", 31);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [11, 20]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ae = $ || ee || _,
                    ie = (0, b.useMemo)((function() {
                        if ("Create Listing (1/3)" === I) return null !== X.listingType;
                        if ("Create Listing (2/3)" === I) {
                            if ("duration" === X.listingType) return !![g.PG.MIN, g.PG.HOUR, g.PG.DAY].includes(X.durationType) && ((0, C.qG)(X.durationType, X.duration) && Number.isInteger(parseFloat(X.duration)));
                            var e = X.displayName.length >= 3,
                                t = X.priceTokens >= 100 && X.priceTokens <= 1e4 && Number.isInteger(parseFloat(X.priceTokens)),
                                r = X.products.length > 0 && X.products.length <= g._1;
                            return e && t && r
                        }
                        return !ae
                    }), [I, X]);
                return b.createElement(u.JX, {
                    className: "tw-w-full"
                }, "Create Listing (1/3)" === I && b.createElement(D, {
                    onDataChange: te,
                    currentListing: X
                }), "Create Listing (2/3)" === I && b.createElement(x.Z, {
                    onDataChange: te,
                    products: W,
                    productsLoading: ee,
                    listingType: X.listingType,
                    currentListing: X
                }), "Create Listing (3/3)" === I && b.createElement(E.Z, {
                    onDataChange: te,
                    stores: Y,
                    activeStore: r
                }), "listingCreated" === I && Z && b.createElement(L, {
                    listing: Z
                }), b.createElement(u.X2, {
                    className: "tw-mt-8 tw-gap-3"
                }, N && "listingCreated" !== I ? b.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    neutral: !0,
                    onClick: N ? re : null
                }, "Back") : "listingCreated" === I && r ? b.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: l
                }, "Close") : "listingCreated" !== I || r ? b.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: l,
                    neutral: !0
                }, "Cancel") : b.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    neutral: !0,
                    onClick: function() {
                        return k("/home/marketplace/storefront/stores")
                    }
                }, "Go to Store Manager"), b.createElement(u.zx, {
                    containerClasses: "tw-flex-1",
                    onClick: ne,
                    disabled: !ie
                }, "listingCreated" === I ? "Done" : "Next")))
            }
        }
    }
]);
//# sourceMappingURL=692d0fbb55c126f8bc0d4e383c0ed02039b8c2e1215529f313817dadad35cb4e.js.map