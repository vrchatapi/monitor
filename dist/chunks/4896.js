"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896], {
        68791: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(15861),
                i = n(54546),
                a = n(4965),
                o = n(95693),
                l = n(5945),
                u = n(20495),
                c = n(84176),
                s = n(22601),
                d = n(48602),
                p = n(64687),
                m = n.n(p),
                f = n(14411),
                g = n(50048),
                v = n(22202),
                y = n(93261),
                h = n(16869),
                b = n(60006),
                E = n(27484),
                w = n.n(E),
                x = n(67294),
                T = n(32981),
                P = n(67263),
                k = n(73647),
                I = n(63221);
            const M = function(e) {
                var t, n, a, p, g = e.listing,
                    E = e.purchase,
                    M = e.group,
                    R = e.tiliaTokenBalance,
                    D = e.tiliaTosAccepted,
                    Y = e.index,
                    L = e.onCancel,
                    O = e.onPurchase,
                    A = e.economyOnline,
                    F = (0, T.I0)(),
                    Q = w()(),
                    q = (0, v.XC)().data,
                    Z = x.useState(!0),
                    U = (0, i.Z)(Z, 2),
                    G = U[0],
                    N = U[1],
                    X = (0, T.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    V = (0, T.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    B = (0, T.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    j = (0, T.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    $ = (0, h.mr)({
                        listingId: null == E ? void 0 : E.listingId,
                        hydrate: !0
                    }, {
                        skip: !!g,
                        refetchOnMountOrArgChange: !0
                    }),
                    z = $.data,
                    W = $.isLoading,
                    _ = ($.isSuccess, $.isError),
                    J = $.error,
                    H = g || z,
                    K = (0, y.r5)({
                        groupId: null == H ? void 0 : H.groupId
                    }, {
                        skip: !!M || !H,
                        refetchOnMountOrArgChange: !0
                    }),
                    ee = K.data,
                    te = K.isLoading,
                    ne = (K.isError, K.error, M || ee),
                    re = null == H ? void 0 : H.stackable,
                    ie = (null == ne ? void 0 : ne.memberCount) >= I.qH,
                    ae = !(null == ne || !ne.myMember),
                    oe = !(null == ne || null === (t = ne.myMember) || void 0 === t || !t.userId) && (null == ne ? void 0 : ne.ownerId) === (null == ne || null === (n = ne.myMember) || void 0 === n ? void 0 : n.userId);
                x.useEffect((function() {
                    H && ne && !W && !te && N(!1)
                }), [H, ne, W, te]), x.useEffect((function() {
                    V.enteredPurchaseQuantity && F((0, k.tE)(parseInt(V.enteredPurchaseQuantity, 10)))
                }), [V.enteredPurchaseQuantity]);
                var le = x.useMemo((function() {
                    var e, t;
                    if (V.selectedPurchaseQuantity && (null == H || null === (e = H.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (t = H.listingVariants) || void 0 === t ? void 0 : t.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= V.selectedPurchaseQuantity
                    }))
                }), [V.selectedPurchaseQuantity, H]);
                x.useEffect((function() {
                    !j && B && F((0, k.gB)())
                }), [j, B]);
                var ue, ce, se, de = (null == H ? void 0 : H.permanent) || "forevers" === (null == H ? void 0 : H.durationType) || "permanent" === (null == H ? void 0 : H.listingType),
                    pe = (null == E ? void 0 : E.permanent) || "forevers" === (null == E ? void 0 : E.purchaseDurationType) || "permanent" === (null == H ? void 0 : H.listingType),
                    me = x.useMemo((function() {
                        var e, t;
                        return [null == H || null === (e = H.products) || void 0 === e ? void 0 : e.some((function(e) {
                            return e.groupAccess
                        })), null == H || null === (t = H.products) || void 0 === t ? void 0 : t.some((function(e) {
                            return e.groupAccessRemove
                        }))]
                    }), [H]),
                    fe = (0, i.Z)(me, 2),
                    ge = fe[0],
                    ve = fe[1],
                    ye = x.useMemo((function() {
                        return (V.selectedPurchaseQuantity || 1) * ((null == le ? void 0 : le.unitPriceTokens) || (null == H ? void 0 : H.priceTokens))
                    }), [V.selectedPurchaseQuantity, le, H]),
                    he = x.useMemo((function() {
                        return oe ? 0 : ye
                    }), [oe, ye]),
                    be = ge && !ae,
                    Ee = !ge && !ae,
                    we = de ? "Buy" : "Subscribe",
                    xe = E ? w()(E.purchaseEndDate) : void 0,
                    Te = null == xe ? void 0 : xe.diff(Q, "months", !0),
                    Pe = null == xe ? void 0 : xe.diff(Q, "days", !0),
                    ke = E && Te <= 1 ? "Immediately" : "Subscription",
                    Ie = Pe < 0,
                    Me = ie || Ee || !D || !A,
                    Ce = function() {
                        var e = (0, r.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        L({
                                            currentUserId: q.id,
                                            listingId: H.id,
                                            listing: H,
                                            purchase: E
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Re = E ? de || pe ? "You own this!" : Ie ? ie && !ae ? "This group is full!" : !be && D ? "You need to be a member of the group to buy this." : "This subscription has expired!" : "You're subscribed! Expires ".concat(w()(E.purchaseEndDate).format("MMMM D YYYY [at] h:mm A")) : ie && !ae ? "This group is full!" : !be && D ? "You need to be a member of the group to buy this." : Me ? "You need to accept the Tilia Terms of Service to buy this." : void 0,
                    De = E ? de || pe ? "You own this!" : x.createElement(x.Fragment, null, "Renew Subscription") : x.createElement(x.Fragment, null, we, x.createElement("br", null), "Buy" === we ? "for " : "Starting from ", x.createElement(f.b5, null), H.priceTokens.toLocaleString());
                return x.createElement(x.Fragment, null, _ && x.createElement(f.qX, {
                    className: "tw-mt-0 tw-mb-3",
                    type: "error",
                    title: "Listing Error"
                }, x.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (a = null === (p = J.data) || void 0 === p ? void 0 : p.error.message) && void 0 !== a ? a : "Unknown error"), g ? x.createElement("small", null, "Listing ID: ", g.id) : x.createElement("small", null, "Listing ID: ", null == E ? void 0 : E.listingId)), G && !_ && x.createElement(C, {
                    key: Y,
                    height: "12rem",
                    delay: 50 * Y,
                    radius: 8
                }), !_ && !G && x.createElement(f.x7, null, x.createElement(f.pw, {
                    alt: H.displayName,
                    imageId: H.imageId,
                    fallbackSrc: P,
                    fitToCover: !0
                }), x.createElement(f.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, x.createElement(f.X3, null, H.displayName, " ", (ce = null == H ? void 0 : H.listingType, (se = {
                    instant: {
                        bgColor: "#575757",
                        icon: d.YK,
                        label: "Instant"
                    },
                    duration: {
                        bgColor: "#575757",
                        icon: s.IB,
                        label: "Duration"
                    },
                    permanent: {
                        bgColor: "#575757",
                        icon: c.DD,
                        label: "Permanent"
                    }
                })[ce] ? x.createElement(b.DR, {
                    bgColor: se[ce].bgColor
                }, x.createElement(f.$1, {
                    icon: se[ce].icon
                }), " ", se[ce].label) : null), " ", E ? Pe <= 10 ? x.createElement(b.DR, {
                    bgColor: "#A53D29"
                }, x.createElement(f.$1, {
                    icon: u.faCircleExclamation
                }), " ", Ie ? x.createElement(x.Fragment, null, "Expired!") : x.createElement(x.Fragment, null, "Expires Soon!")) : x.createElement(b.DR, {
                    bgColor: "#575757"
                }, x.createElement(f.$1, {
                    icon: l.B2
                }), " Expires ", w()(E.purchaseEndDate).format("MMM YYYY")) : null !== (ue = H.listingVariants) && void 0 !== ue && ue.some((function(e) {
                    return !0 === e.sellerVariant
                })) ? x.createElement(b.DR, {
                    bgColor: "#6F42C1"
                }, x.createElement(f.$1, {
                    icon: o.th
                }), " Volume Discount") : null), x.createElement("p", null, H.description)), x.createElement(S, {
                    flexDirection: "column",
                    containerType: "listing"
                }, x.createElement(f.zx, {
                    disabled: E ? de || !re || !A || Ee : Me,
                    title: Re,
                    onClick: function() {
                        O(re, re ? {
                            listing: H,
                            purchase: E,
                            group: ne,
                            totalPrice: he,
                            tiliaTokenBalance: R,
                            tiliaTosAccepted: D,
                            includesGroupAccess: ge,
                            includesGroupAccessRemove: ve,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: H,
                            purchase: E,
                            group: ne,
                            totalPrice: he,
                            tiliaTokenBalance: R,
                            tiliaTosAccepted: D,
                            quantity: 1,
                            includesGroupAccess: ge,
                            includesGroupAccessRemove: ve
                        })
                    },
                    containerStyles: "width: fit-content"
                }, De), E && !de && re ? x.createElement(f.zx, {
                    neutral: "true",
                    disabled: X.isLoading || !A,
                    hidden: Ie,
                    onClick: function() {
                        return Ce()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", ke) : null)))
            };
            var C = (0, a.Z)(f.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                R = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                D = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                S = (0, a.Z)(f.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && D
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", g.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && R
                }), " font-weight:500;line-height:normal;&>", g.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        40067: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(15861),
                i = n(54546),
                a = n(76553),
                o = n(64687),
                l = n.n(o),
                u = n(64258),
                c = n(14411),
                s = n(67263),
                d = n(66736),
                p = n(73647),
                m = n(27484),
                f = n.n(m),
                g = n(67294),
                v = n(32981);
            const y = function() {
                var e = (0, v.I0)(),
                    t = (0, v.v9)((function(e) {
                        return e.listingRow.currentUserId
                    })),
                    n = (0, v.v9)((function(e) {
                        return e.listingRow.listingId
                    })),
                    o = (0, v.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    m = (0, v.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    y = (0, v.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    h = (0, v.v9)((function(e) {
                        return e.listingRow.modals.cancellation.showCancellationConfirm
                    })),
                    b = (0, v.v9)((function(e) {
                        return e.listingRow.modals.cancellation.newExpirationDate
                    })),
                    E = (0, v.v9)((function(e) {
                        return e.listingRow.modals.cancellation.cancelImmediately
                    })),
                    w = m ? f()(m.purchaseEndDate) : void 0,
                    x = null == w ? void 0 : w.diff(f()(), "months", !0),
                    T = (0, d.x)(),
                    P = (0, i.Z)(T, 2),
                    k = P[0],
                    I = P[1],
                    M = I.data,
                    C = I.isLoading,
                    R = I.isError;
                g.useEffect((function() {
                    y.isOpen && S()
                }), [y.isOpen]);
                var D = function() {
                        e((0, p.gd)())
                    },
                    S = function() {
                        var i = (0, r.Z)(l().mark((function r() {
                            var i, c, s, d;
                            return l().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = m && x <= 1, e((0, p.yR)(i)), r.prev = 2, r.next = 5, k({
                                            buyerId: t,
                                            listingId: n,
                                            reason: "user cancellation",
                                            immediate: i,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        c = r.sent, y.newExpirationDate !== c.newExpiryDate && e((0, p.C0)(c.newExpiryDate)), r.next = 13;
                                        break;
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2), e((0, u.d)({
                                            title: "Failed to preview cancellation ".concat(o.id, " for ").concat(t),
                                            icon: a.eH,
                                            message: null !== (s = null === (d = r.t0.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message) && void 0 !== s ? s : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, p.gd)());
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return i.apply(this, arguments)
                        }
                    }(),
                    Y = function() {
                        var i = (0, r.Z)(l().mark((function r() {
                            var i, c;
                            return l().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, k({
                                            buyerId: t,
                                            listingId: n,
                                            reason: "user cancellation",
                                            immediate: y.cancelImmediately,
                                            isPreview: !1
                                        }).unwrap();
                                    case 3:
                                        e((0, p.J6)(!0)), r.next = 10;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), e((0, u.d)({
                                            title: "Failed to cancel ".concat(o.id, " for ").concat(t),
                                            icon: a.eH,
                                            message: null !== (i = null === (c = r.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, p.al)(!0));
                                    case 10:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 6]
                            ])
                        })));
                        return function() {
                            return i.apply(this, arguments)
                        }
                    }();
                var L = h && R ? g.createElement(c.qX, {
                    type: "error",
                    title: "Cancellation Unsuccessful"
                }, "Your subscription cannot be cancelled, please try again later.") : h && !R ? g.createElement(c.qX, {
                    type: "success",
                    title: "Cancellation Successful"
                }, "Your subscription has been cancelled successfully!") : g.createElement(g.Fragment, null, g.createElement("p", null, "Are you sure you want to cancel your subscription?"));
                return g.createElement(c.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: y.isOpen,
                    confirmText: h ? "Done" : "Confirm",
                    confirmCallback: h ? D : Y,
                    cancelCallback: D,
                    hideCancel: h,
                    size: "lg",
                    isLoading: C
                }, g.createElement(g.Fragment, null, L, y.isOpen && o && g.createElement(c.x7, null, g.createElement(c.pw, {
                    alt: o.displayName,
                    imageId: o.imageId,
                    fallbackSrc: s
                }), g.createElement(c.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, g.createElement(c.X3, null, o.displayName), g.createElement("p", null, o.description))), x > 1 && !h && M ? g.createElement("p", null, g.createElement("big", null, g.createElement("b", null, "Total Refund: ", g.createElement(c.b5, null), null == M ? void 0 : M.totalRefundable)), " ", "Your new expiration date will be ", f()(null == M ? void 0 : M.newExpiryDate).format("MMMM D, YYYY"), g.createElement("br", null), g.createElement(c.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded."), g.createElement(c.XZ, {
                    id: "cancellationCheck",
                    label: " I want to remove my benefits immediately (Optional)",
                    checked: E,
                    onChange: function() {
                        e((0, p.yR)(!y.cancelImmediately))
                    }
                }), g.createElement(c.hh, null, "If you enable this option, your subscription and benefits end immediately. Your total refund will be the same.")) : m && !M ? g.createElement("p", null, "This will change your current subscription expiration from ", f()(null == m ? void 0 : m.purchaseEndDate).format("MMMM D, YYYY"), " to ", E ? "today" : f()(b).format("MMMM D, YYYY"), ".") : g.createElement("p", null, "This will change your current subscription expiration to  ", E ? "today" : f()(b).format("MMMM D, YYYY"), ".")))
            }
        },
        7701: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(15861),
                i = n(54546),
                a = n(95693),
                o = n(5945),
                l = n(20495),
                u = n(64687),
                c = n.n(u),
                s = n(14411),
                d = n(98185),
                p = n(67263),
                m = n(95896),
                f = n(66736),
                g = n(67978),
                v = n(73647),
                y = n(60006),
                h = n(27484),
                b = n.n(h),
                E = n(67294),
                w = n(32981);
            const x = function(e) {
                var t, n, u, h = e.groupData,
                    x = (0, w.I0)(),
                    T = b()(),
                    P = (0, w.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    k = (0, w.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    I = !(null == k || null === (t = k.myMember) || void 0 === t || !t.userId) && (null == k ? void 0 : k.ownerId) === (null == k || null === (n = k.myMember) || void 0 === n ? void 0 : n.userId),
                    M = (0, w.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    C = I ? 0 : (0, w.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    R = (0, w.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    D = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    S = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    Y = M ? b()(M.purchaseEndDate) : void 0,
                    L = null == Y ? void 0 : Y.diff(T, "days", !0),
                    O = L < 0,
                    A = (null == P ? void 0 : P.permanent) || "forevers" === (null == P ? void 0 : P.durationType),
                    F = A ? "Buy" : "Subscribe",
                    Q = R < C,
                    q = !(null == k || !k.myMember),
                    Z = S.includesGroupAccess && !q,
                    U = !A && S.includesGroupAccessRemove && !q,
                    G = Z && (null == k ? void 0 : k.rules),
                    N = (0, g.DM)({
                        listingId: P.id,
                        hydrateProducts: !0
                    }, {
                        skip: !P.id
                    }),
                    X = N.data,
                    V = N.isFetching,
                    B = (N.isError, N.error),
                    j = (0, f.I8)(),
                    $ = (0, i.Z)(j, 2),
                    z = $[0],
                    W = $[1],
                    _ = (W.isLoading, W.isError, W.error, E.useMemo((function() {
                        var e;
                        return D.selectedPurchaseQuantity ? null === (e = P.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= D.selectedPurchaseQuantity
                        })) : null
                    }), [D.selectedPurchaseQuantity, P])),
                    J = E.useMemo((function() {
                        return (D.selectedPurchaseQuantity || 1) * ((null == _ ? void 0 : _.unitPriceTokens) || (null == P ? void 0 : P.priceTokens))
                    }), [D.selectedPurchaseQuantity, _, P]);
                E.useEffect((function() {
                    x((0, v.m1)(C)), x((0, v.OT)(J <= m.A1))
                }), [C]);
                var H = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, z({
                                        listingId: P.id,
                                        listingVariantId: null == _ ? void 0 : _.listingVariantId,
                                        quantity: D.selectedPurchaseQuantity,
                                        totalPrice: 0 === C ? void 0 : C,
                                        contextData: {
                                            locationType: m.G0.GROUP,
                                            storeId: null == h ? void 0 : h.storeId,
                                            groupId: null == h ? void 0 : h.id
                                        }
                                    }).unwrap();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

                function K() {
                    var e;
                    return M ? L <= 10 ? E.createElement(y.DR, {
                        bgColor: "#A53D29"
                    }, E.createElement(s.$1, {
                        icon: l.faCircleExclamation
                    }), " ", O ? E.createElement(E.Fragment, null, "Expired!") : E.createElement(E.Fragment, null, "Expires Soon!")) : E.createElement(y.DR, {
                        bgColor: "#575757"
                    }, E.createElement(s.$1, {
                        icon: o.B2
                    }), " Expires ", b()(M.purchaseEndDate).format("MMM YYYY")) : (null === (e = P.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? E.createElement(y.DR, {
                        bgColor: "#6F42C1"
                    }, E.createElement(s.$1, {
                        icon: a.th
                    }), " Volume Discount") : null
                }
                return E.useEffect((function() {
                    x((0, v.jg)(void 0 === D.selectedPurchaseQuantity || D.selectedPurchaseQuantity > 0 && D.selectedPurchaseQuantity === Number(D.enteredPurchaseQuantity) && D.selectedPurchaseQuantity <= m.b_))
                }), [D.selectedPurchaseQuantity]), E.createElement(s.sm, {
                    headerText: "Confirm ".concat(A ? "Purchase" : "Subscription"),
                    isOpen: S.isOpen,
                    isLoading: S.isLoading,
                    confirmText: E.createElement(E.Fragment, null, F, " for ", E.createElement(s.b5, null), C.toLocaleString()),
                    confirmCallback: H,
                    confirmDisabled: Q || !D.isQuantityValid || !D.isTotalPriceValid,
                    cancelCallback: function() {
                        x((0, v.gd)())
                    },
                    size: "lg"
                }, S.isError && E.createElement(s.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = S.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), E.createElement(s.x7, null, E.createElement(s.pw, {
                    alt: P.displayName || "",
                    imageId: P.imageId,
                    fallbackSrc: p,
                    fitToCover: !0
                }), E.createElement(s.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, E.createElement(s.X3, null, P.displayName, " ", E.createElement(K, null)), E.createElement("p", null, P.description), E.createElement(d.Z, {
                    loading: V,
                    error: B
                }, (null == X ? void 0 : X.length) > 1 && !V && E.createElement(E.Fragment, null, E.createElement("p", null, A ? "Purchasing" : "Subscribing", " grants access to the following items:"), E.createElement("ul", null, X.map((function(e) {
                    return E.createElement("li", {
                        key: e.id
                    }, E.createElement("strong", null, e.displayName))
                }))))))), Z && E.createElement("p", null, A ? "Purchasing" : "Subscribing", " will add you to this group."), G && E.createElement(E.Fragment, null, E.createElement("p", null, "By joining, you agree to the group's rules."), E.createElement(s.zx, {
                    onClick: function() {
                        return x((0, v.oM)(k))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !A && E.createElement("p", null, "This purchase will expire in ", M && "an additional ", D.selectedPurchaseQuantity * P.duration, " ", D.selectedPurchaseQuantity * P.duration == 1 ? P.durationType.replace(/s$/, "") : P.durationType, ", on", " ", b()(null == M ? void 0 : M.purchaseEndDate).add(D.selectedPurchaseQuantity * P.duration, P.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), U && E.createElement("p", null, "Once this expires, you will be removed from the group."), Q && E.createElement(s.qX, {
                    type: "error",
                    title: "Insufficient funds"
                }, "You don't have enough credits for this purchase. You can buy more inside VRChat."))
            }
        },
        50352: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(42138),
                i = n(4965),
                a = n(14411),
                o = n(50048),
                l = n(95896),
                u = n(73647),
                c = n(27484),
                s = n.n(c),
                d = n(67294),
                p = n(32981);
            n(63221);
            const m = function() {
                var e, t, n, i = (0, p.I0)(),
                    o = (0, p.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    c = (0, p.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    m = (0, p.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    f = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase.showCustomDuration
                    })),
                    g = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase.selectedPurchaseQuantity
                    })),
                    y = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase.enteredPurchaseQuantity
                    })),
                    h = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase.isQuantityValid
                    })),
                    b = null !== (e = (0, p.v9)((function(e) {
                        return e.listingRow.listing.stackable
                    }))) && void 0 !== e && e,
                    E = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    })),
                    w = (0, p.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    x = [1].concat((0, r.Z)(l.PN)),
                    T = !(null == o || null === (t = o.myMember) || void 0 === t || !t.userId) && (null == o ? void 0 : o.ownerId) === (null == o || null === (n = o.myMember) || void 0 === n ? void 0 : n.userId),
                    P = d.useMemo((function() {
                        var e;
                        if (g) return null === (e = c.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= g
                        }))
                    }), [g, c]),
                    k = d.useMemo((function() {
                        return (g || 1) * ((null == P ? void 0 : P.unitPriceTokens) || (null == c ? void 0 : c.priceTokens))
                    }), [g, P, c]),
                    I = d.useMemo((function() {
                        return T ? 0 : k
                    }), [T, k]);
                (0, d.useEffect)((function() {
                    i((0, u.m1)(I)), i((0, u.OT)(k <= l.A1))
                }), [I]);
                var M = d.useMemo((function() {
                        var e, t = (null == c || null === (e = c.listingVariants) || void 0 === e ? void 0 : e.reduce((function(e, t) {
                            return e[t.quantity] = t, e
                        }), [])) || [];
                        return x.forEach((function(e) {
                            if (!t[e]) {
                                var n, r = (null === (n = t.findLast((function(t) {
                                    return (null == t ? void 0 : t.quantity) && (null == t ? void 0 : t.quantity) <= e
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || (null == c ? void 0 : c.priceTokens);
                                t[e] = {
                                    quantity: e,
                                    unitPriceTokens: r
                                }
                            }
                        })), t
                    }), [c]),
                    C = d.useMemo((function() {
                        var e;
                        if (!b) return 1;
                        var t = null === (e = M.findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === e ? void 0 : e.unitPriceTokens,
                            n = Math.floor(l.A1 / t);
                        return Math.min(n, l.b_)
                    }), [b, M]);
                return (0, d.useEffect)((function() {
                    i((0, u.jg)(void 0 === g || g >= 1 && g.toString(10) === y && g <= l.b_))
                }), [g]), d.createElement(a.sm, {
                    headerText: f ? "Custom Subscription" : "".concat(m ? "Update" : "Add", " Subscription"),
                    isOpen: w.isOpen,
                    confirmText: f ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        w.showCustomDuration ? i((0, u.Uo)()) : i((0, u.Xe)())
                    },
                    confirmDisabled: f && (!h || !E),
                    cancelCallback: function() {
                        i((0, u.gd)())
                    }
                }, d.createElement("center", null, d.createElement("p", null, "Choose the subscription duration to add for"), d.createElement(a.X3, null, c.displayName), m && d.createElement(d.Fragment, null, d.createElement("p", null, "Your current subscription expires ", s()(m.purchaseEndDate).format("MMMM D YYYY [at] h:mm A")))), f ? d.createElement(a.JX, {
                    className: "align-items-center"
                }, d.createElement(a.X2, {
                    className: "align-items-center"
                }, d.createElement("label", {
                    className: "d-flex align-items-center"
                }, c.durationType.slice(0, 1).toUpperCase(), g * c.duration == 1 ? c.durationType.slice(1).replace(/s$/, "") : c.durationType.slice(1), ":", d.createElement(a.II, {
                    type: "number",
                    className: "mx-2",
                    value: y,
                    onChange: function(e) {
                        return i((0, u.c8)(e.target.value.slice(0, l.b_.toString(10).length)))
                    },
                    min: c.duration,
                    step: c.duration,
                    max: C
                })), d.createElement("small", null, d.createElement("span", {
                    style: {
                        color: E ? "inherit" : "var(--red)"
                    }
                }, d.createElement(a.b5, null), I.toLocaleString()), ((null == P ? void 0 : P.unitPriceTokens) || c.priceTokens) < c.priceTokens && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == P ? void 0 : P.unitPriceTokens) || c.priceTokens) / c.priceTokens * 100), "%")))), (!h || !E) && d.createElement(a.X2, {
                    className: "align-items-center"
                }, d.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !E && d.createElement(d.Fragment, null, "The total must be within the transaction limit of ", d.createElement(a.b5, null), l.A1.toLocaleString(), ".")))) : d.createElement(v, {
                    containerType: "purchase"
                }, M.map((function(e) {
                    var t = e.quantity,
                        n = e.unitPriceTokens,
                        r = t * c.duration;
                    return d.createElement(a.zx, {
                        key: t,
                        onClick: function() {
                            return i((0, u.BW)({
                                quantity: t,
                                totalPrice: T ? 0 : r * n
                            }))
                        }
                    }, r.toLocaleString(), " ", 1 === r ? c.durationType.replace(/s$/, "") : c.durationType, d.createElement("br", null), d.createElement(a.b5, null), (r * n).toLocaleString(), n < c.priceTokens && d.createElement("small", {
                        style: {
                            color: "var(--yellow)"
                        }
                    }, d.createElement("br", null), "Save ", Math.floor(100 - n / c.priceTokens * 100), "%"))
                }))))
            };
            var f = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                g = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                v = (0, i.Z)(a.X2, {
                    target: "e1570gix0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && g
                }), " flex:1 1 128px;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", o.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && f
                }), " font-weight:500;line-height:normal;&>", o.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        77708: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(67294),
                i = n(14411),
                a = n(32981),
                o = n(73647);
            const l = function() {
                var e = (0, a.I0)(),
                    t = (0, a.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    n = (0, a.v9)((function(e) {
                        return e.listingRow.group
                    }));
                return r.createElement(i.sm, {
                    headerText: "Rules",
                    isOpen: t.isOpen,
                    confirmText: "Agree",
                    confirmCallback: function() {
                        e((0, o.gB)())
                    },
                    cancelCallback: function() {
                        e((0, o.gd)())
                    }
                }, n && n.rules && r.createElement(r.Fragment, null, r.createElement("p", null, "By joining this group, you agree to the following rules:"), r.createElement(i._O, null, n.rules)))
            }
        },
        67978: (e, t, n) => {
            n.d(t, {
                As: () => f,
                DM: () => g,
                RM: () => y,
                lZ: () => v,
                qX: () => h,
                rP: () => p,
                wE: () => b,
                x3: () => m,
                xq: () => E
            });
            var r = n(15861),
                i = n(42138),
                a = n(4942),
                o = n(64687),
                l = n.n(o),
                u = n(64358);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.n,
                                        r = void 0 === n ? 100 : n,
                                        i = (e.offset, e.archived),
                                        a = e.pageValue,
                                        o = void 0 === a ? 1 : a;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: s({
                                            archived: i
                                        }, (0, u.ue)({
                                            n: r,
                                            pageValue: o
                                        }))
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, i.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(r)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (a = (0, r.Z)(l().mark((function e(t, n, r, a) {
                                    var o, u, c, s, d;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.userId, u = t.archived, c = [], s = 0;
                                            case 3:
                                                return e.next = 6, a({
                                                    url: "user/".concat(o, "/products"),
                                                    params: {
                                                        archived: u,
                                                        n: 100,
                                                        offset: s
                                                    }
                                                });
                                            case 6:
                                                if (!(d = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 9:
                                                if (!(d.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return c.push.apply(c, (0, i.Z)(d.data)), s += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: c
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, r) {
                                    return a.apply(this, arguments)
                                }),
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, i.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "FULL-LIST:".concat(r)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var t = e.listingId;
                                    return "listing/".concat(t, "/products")
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.listingId;
                                    return [].concat((0, i.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: r
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var t = e.productId;
                                    return "products/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Product",
                                        id: n.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                queryFn: (n = (0, r.Z)(l().mark((function e(t, n, i, a) {
                                    var o, u, c, d, p, m, f, g, v, y, h, b, E, w, x, T, P, k, I, M, C, R, D, S;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (u = t.file, c = void 0 === u ? null : u, d = t.tag, p = void 0 === d ? "product" : d, m = t.displayName, f = t.description, g = void 0 === f ? "" : f, v = t.tags, y = void 0 === v ? [] : v, h = t.imageId, b = void 0 === h ? null : h, E = t.productType, w = t.useForSubscriberList, x = void 0 !== w && w, T = t.generateListing, P = t.priceTokens, k = t.duration, I = t.durationType, M = t.permanent, C = t.instant, null === c) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, r.Z)(l().mark((function e() {
                                                    var t, n;
                                                    return l().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (t = new FormData).append("file", c), t.append("tag", p), e.next = 5, a({
                                                                    url: "file/image",
                                                                    method: "POST",
                                                                    body: t
                                                                });
                                                            case 5:
                                                                if (!(n = e.sent).error) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.abrupt("return", {
                                                                    error: n.error
                                                                });
                                                            case 8:
                                                                return e.abrupt("return", n);
                                                            case 9:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))();
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (R = e.t0) || !R.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: R.error
                                                });
                                            case 11:
                                                return D = (null == R || null === (o = R.data) || void 0 === o ? void 0 : o.id) || b, e.next = 14, a({
                                                    url: "products",
                                                    method: "POST",
                                                    body: s({
                                                        displayName: m,
                                                        description: g,
                                                        tags: y,
                                                        productType: E,
                                                        useForSubscriberList: x,
                                                        generateListing: T,
                                                        priceTokens: P,
                                                        duration: k,
                                                        durationType: I,
                                                        permanent: M,
                                                        instant: C
                                                    }, D && {
                                                        imageId: D
                                                    })
                                                });
                                            case 14:
                                                if (!(S = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: s({
                                                        product: S.data
                                                    }, (null == R ? void 0 : R.data) && {
                                                        file: R.data
                                                    })
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, i) {
                                    return n.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, n) {
                                    var r = n.ownerId,
                                        a = n.tag;
                                    return [].concat((0, i.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), ["UserProducts", {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: r
                                    }], (0, i.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            updateProduct: e.mutation({
                                queryFn: (t = (0, r.Z)(l().mark((function e(t, n, r, i) {
                                    var a, o, u, c, d, p, m, f, g, v, y, h, b, E, w, x, T, P;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (u = t.file, c = void 0 === u ? null : u, d = t.tag, p = void 0 === d ? "product" : d, m = t.productId, f = t.displayName, g = t.description, v = t.tags, y = void 0 === v ? null : v, h = t.imageId, b = t.groupAccess, E = t.groupAccessRemove, w = t.useForSubscriberList, x = null, null === c) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return (T = new FormData).append("file", c), T.append("tag", p), e.next = 8, i({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: T
                                                });
                                            case 8:
                                                if (!(x = e.sent).error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: x.error
                                                });
                                            case 11:
                                                return e.next = 13, i({
                                                    url: "products/".concat(m),
                                                    method: "PUT",
                                                    body: s(s({
                                                        displayName: f,
                                                        description: g
                                                    }, null !== y ? y : {}), {}, {
                                                        groupAccess: b,
                                                        groupAccessRemove: E,
                                                        useForSubscriberList: w,
                                                        imageId: x ? null === (a = x) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.id : h
                                                    })
                                                });
                                            case 13:
                                                if (!(P = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: P.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: s({
                                                        product: P.data
                                                    }, (null === (o = x) || void 0 === o ? void 0 : o.data) && {
                                                        file: x.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, n, r, i) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId,
                                        a = n.ownerId,
                                        o = n.tag;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, "UserProducts", {
                                        type: "GroupRoles"
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(o)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: a
                                    }].concat((0, i.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        n = e.force;
                                    return {
                                        url: "products/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId;
                                    n.ownerId;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, "UserProducts", "Stores", {
                                        type: "Store"
                                    }]
                                }
                            })
                        };
                        var t, n, a
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                p = d.useGetUserProductsQuery,
                m = d.useGetAllUserProductsQuery,
                f = d.useLazyGetAllUserProductsQuery,
                g = d.useGetListingProductsQuery,
                v = d.useGetProductQuery,
                y = d.useLazyGetProductQuery,
                h = d.useCreateProductMutation,
                b = d.useUpdateProductMutation,
                E = d.useDeleteProductMutation
        }
    }
]);
//# sourceMappingURL=caf0abb50225fd8355d787802d83d52ee174f4ef0194bbdc099d8d1a2e466774.js.map