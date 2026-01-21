"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896], {
        68791: (e, n, t) => {
            t.d(n, {
                Z: () => R
            });
            var r = t(15861),
                i = t(54546),
                l = t(4965),
                a = t(95693),
                o = t(5945),
                u = t(20495),
                c = t(84176),
                s = t(22601),
                d = t(48602),
                m = t(64687),
                p = t.n(m),
                f = t(96985),
                g = t(50048),
                v = t(51806),
                y = t.n(v),
                h = t(22202),
                E = t(93261),
                b = t(16869),
                w = t(67978),
                x = t(60006),
                k = t(27484),
                T = t.n(k),
                C = t(67294),
                M = t(32981),
                I = t(73647),
                P = t(63221);
            const R = function(e) {
                var n, t, l, m, g = e.listing,
                    v = e.purchase,
                    k = e.group,
                    R = e.tokenBalance,
                    D = e.index,
                    S = e.onCancel,
                    X = e.onPurchase,
                    L = e.economyOnline,
                    A = e.isMod,
                    N = e.economyState,
                    Z = (0, M.I0)(),
                    q = T()(),
                    B = (0, h.XC)().data,
                    F = C.useState(!0),
                    O = (0, i.Z)(F, 2),
                    V = O[0],
                    G = O[1],
                    $ = (0, M.v9)((function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    })),
                    J = (0, M.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    U = (0, M.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    j = (0, M.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    W = A && 2 === N,
                    _ = (0, b.mr)({
                        listingId: null == v ? void 0 : v.listingId,
                        hydrate: !0
                    }, {
                        skip: !!g,
                        refetchOnMountOrArgChange: !0
                    }),
                    z = _.data,
                    H = _.isLoading,
                    K = (_.isSuccess, _.isError),
                    ee = _.error,
                    ne = g || z,
                    te = (0, E.r5)({
                        groupId: null == ne ? void 0 : ne.groupId
                    }, {
                        skip: !!k || !ne
                    }),
                    re = te.data,
                    ie = te.isLoading,
                    le = (te.isError, te.error, (0, w.DM)({
                        listingId: null == ne ? void 0 : ne.id
                    }, {
                        skip: !ne
                    })),
                    ae = le.data,
                    oe = (le.isLoading, le.isError, le.error, k || re),
                    ue = null == ne ? void 0 : ne.stackable,
                    ce = (null == oe ? void 0 : oe.memberCount) >= P.qH,
                    se = !(null == oe || !oe.myMember),
                    de = !(null == oe || null === (n = oe.myMember) || void 0 === n || !n.userId) && (null == oe ? void 0 : oe.ownerId) === (null == oe || null === (t = oe.myMember) || void 0 === t ? void 0 : t.userId);
                (0, C.useEffect)((function() {
                    ne && oe && !H && !ie && G(!1)
                }), [ne, oe, H, ie]), (0, C.useEffect)((function() {
                    J.enteredPurchaseQuantity && Z((0, I.tE)(Number.parseInt(J.enteredPurchaseQuantity, 10)))
                }), [J.enteredPurchaseQuantity]);
                var me = C.useMemo((function() {
                    var e, n;
                    if (J.selectedPurchaseQuantity && (null == ne || null === (e = ne.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (n = ne.listingVariants) || void 0 === n ? void 0 : n.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= J.selectedPurchaseQuantity
                    }))
                }), [J.selectedPurchaseQuantity, ne]);
                (0, C.useEffect)((function() {
                    !j && U && Z((0, I.gB)())
                }), [j, U]);
                var pe, fe, ge, ve = (null == ne ? void 0 : ne.permanent) || "forevers" === (null == ne ? void 0 : ne.durationType) || "permanent" === (null == ne ? void 0 : ne.listingType),
                    ye = (null == v ? void 0 : v.permanent) || "forevers" === (null == v ? void 0 : v.purchaseDurationType) || "permanent" === (null == ne ? void 0 : ne.listingType),
                    he = C.useMemo((function() {
                        if (!ae) return [!1, !1];
                        var e = ae.find((function(e) {
                            return "role" === e.productType
                        }));
                        return [null == e ? void 0 : e.groupAccess, null == e ? void 0 : e.groupAccessRemove]
                    }), [ae]),
                    Ee = (0, i.Z)(he, 2),
                    be = Ee[0],
                    we = Ee[1],
                    xe = C.useMemo((function() {
                        return (J.selectedPurchaseQuantity || 1) * ((null == me ? void 0 : me.unitPriceTokens) || (null == ne ? void 0 : ne.priceTokens))
                    }), [J.selectedPurchaseQuantity, me, ne]),
                    ke = C.useMemo((function() {
                        return de ? 0 : xe
                    }), [de, xe]),
                    Te = be && !se,
                    Ce = !be && !se,
                    Me = ve ? "Buy" : "Subscribe",
                    Ie = v ? T()(v.subscriptionExpiry) : void 0,
                    Pe = null == Ie ? void 0 : Ie.diff(q, "months", !0),
                    Re = null == Ie ? void 0 : Ie.diff(q, "days", !0),
                    Ye = v && Pe <= 1 ? "Immediately" : "Subscription",
                    De = Re < 0,
                    Se = ce || Ce || !L,
                    Qe = !W && (v ? ve || !ue || !L || Ce : Se),
                    Xe = !W && ($.isLoading || !L),
                    Le = function() {
                        var e = (0, r.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        S({
                                            currentUserId: B.id,
                                            listingId: ne.id,
                                            listing: ne,
                                            purchase: v
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
                    Ae = v ? ve || ye ? "You own this!" : De ? ce && !se ? "This group is full!" : Te ? "This subscription has expired!" : "You need to be a member of the group to buy this." : "You're subscribed! Expires ".concat(T()(v.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A")) : ce && !se ? "This group is full!" : Te ? Se ? "Purchase not available" : void 0 : "You need to be a member of the group to buy this.",
                    Ne = v ? ve || ye ? "You own this!" : C.createElement(C.Fragment, null, "Renew Subscription") : C.createElement(C.Fragment, null, Me, C.createElement("br", null), "Buy" === Me ? "for " : "Starting from ", C.createElement(f.b5, null), ne.priceTokens.toLocaleString());
                return C.createElement(C.Fragment, null, K && C.createElement(f.qX, {
                    className: "tw-mt-0 tw-mb-3",
                    type: "error",
                    title: "Listing Error"
                }, C.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (l = null === (m = ee.data) || void 0 === m ? void 0 : m.error.message) && void 0 !== l ? l : "Unknown error"), g ? C.createElement("small", null, "Listing ID: ", g.id) : C.createElement("small", null, "Listing ID: ", null == v ? void 0 : v.listingId)), V && !K && C.createElement(Y, {
                    key: D,
                    height: "12rem",
                    delay: 50 * D,
                    radius: 8
                }), !K && !V && C.createElement(f.x7, null, C.createElement(f.pw, {
                    alt: ne.displayName,
                    imageId: ne.imageId,
                    fallbackSrc: y(),
                    fitToCover: !0
                }), C.createElement(f.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, C.createElement(f.X3, null, ne.displayName, " ", (fe = null == ne ? void 0 : ne.listingType, (ge = {
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
                })[fe] ? C.createElement(x.DR, {
                    bgColor: ge[fe].bgColor
                }, C.createElement(f.$1, {
                    icon: ge[fe].icon
                }), " ", ge[fe].label) : null), " ", v ? Re <= 10 ? C.createElement(x.DR, {
                    bgColor: "#A53D29"
                }, C.createElement(f.$1, {
                    icon: u.faCircleExclamation
                }), " ", De ? C.createElement(C.Fragment, null, "Expired!") : C.createElement(C.Fragment, null, "Expires Soon!")) : C.createElement(x.DR, {
                    bgColor: "#575757"
                }, C.createElement(f.$1, {
                    icon: o.B2
                }), " Expires ", T()(v.subscriptionExpiry).format("MMM YYYY")) : null !== (pe = ne.listingVariants) && void 0 !== pe && pe.some((function(e) {
                    return !0 === e.sellerVariant
                })) ? C.createElement(x.DR, {
                    bgColor: "#6F42C1"
                }, C.createElement(f.$1, {
                    icon: a.th
                }), " Volume Discount") : null), C.createElement("p", null, ne.description)), C.createElement(Q, {
                    flexDirection: "column",
                    containerType: "listing"
                }, C.createElement(f.zx, {
                    disabled: Qe,
                    title: Ae,
                    onClick: function() {
                        X(ue, ue ? {
                            listing: ne,
                            purchase: v,
                            group: oe,
                            totalPrice: ke,
                            tokenBalance: R,
                            includesGroupAccess: be,
                            includesGroupAccessRemove: we,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: ne,
                            purchase: v,
                            group: oe,
                            totalPrice: ke,
                            tokenBalance: R,
                            quantity: 1,
                            includesGroupAccess: be,
                            includesGroupAccessRemove: we
                        })
                    },
                    containerStyles: "width: fit-content"
                }, Ne), v && !ve && ue ? C.createElement(f.zx, {
                    neutral: "true",
                    disabled: Xe,
                    hidden: De,
                    onClick: function() {
                        return Le()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Ye) : null)))
            };
            var Y = (0, l.Z)(f.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                D = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                S = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                Q = (0, l.Z)(f.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && S
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", g.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && D
                }), " font-weight:500;line-height:normal;&>", g.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        40067: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(15861),
                i = t(54546),
                l = t(76553),
                a = t(64687),
                o = t.n(a),
                u = t(64258),
                c = t(96985),
                s = t(51806),
                d = t.n(s),
                m = t(66736),
                p = t(73647),
                f = t(27484),
                g = t.n(f),
                v = t(67294),
                y = t(32981);
            const h = function() {
                var e = (0, y.I0)(),
                    n = (0, y.v9)((function(e) {
                        return e.listingRow
                    })),
                    t = n.currentUserId,
                    a = n.listingId,
                    s = n.listing,
                    f = n.purchase,
                    h = n.modals.subscriptionCancellation,
                    E = h.isOpen,
                    b = h.showCancellationConfirm,
                    w = h.newExpirationDate,
                    x = h.cancelImmediately,
                    k = (0, v.useState)(!1),
                    T = (0, i.Z)(k, 2),
                    C = T[0],
                    M = T[1],
                    I = (0, m.x)(),
                    P = (0, i.Z)(I, 2),
                    R = P[0],
                    Y = P[1],
                    D = Y.data,
                    S = Y.isLoading,
                    Q = Y.isError,
                    X = (0, v.useMemo)((function() {
                        return f ? g()(f.subscriptionExpiry) : void 0
                    }), [f]),
                    L = (0, v.useMemo)((function() {
                        return null == X ? void 0 : X.diff(g()(), "months", !0)
                    }), [X]) <= 1,
                    A = (0, v.useMemo)((function() {
                        return f ? g()(null == f ? void 0 : f.subscriptionExpiry).format("MMMM D, YYYY") : void 0
                    }), [f]);
                v.useEffect((function() {
                    E && q()
                }), [E]);
                var N = (0, v.useCallback)((function() {
                        e((0, p.yR)(!x))
                    }), [e, x]),
                    Z = (0, v.useCallback)((function() {
                        e((0, p.gd)())
                    }), [e]),
                    q = function() {
                        var n = (0, r.Z)(o().mark((function n() {
                            var r, i, c;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (f && s) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.prev = 2, n.next = 5, R({
                                            buyerId: t,
                                            listingId: a,
                                            reason: "user cancellation",
                                            immediate: L,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        r = n.sent, w !== r.newExpiryDate && e((0, p.C0)(r.newExpiryDate)), n.next = 13;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(2), e((0, u.d)({
                                            title: "Failed to preview cancellation ".concat(s.id, " for ").concat(t),
                                            icon: l.eH,
                                            message: null !== (i = null === (c = n.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, p.gd)());
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    B = function() {
                        var n = (0, r.Z)(o().mark((function n() {
                            var r, i;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, R({
                                            buyerId: t,
                                            listingId: a,
                                            reason: "user cancellation",
                                            immediate: x,
                                            isPreview: !1
                                        }).unwrap();
                                    case 3:
                                        M(!1), e((0, p.J6)(!0)), n.next = 12;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(0), e((0, u.d)({
                                            title: "Failed to cancel ".concat(s.id, " for ").concat(t),
                                            icon: l.eH,
                                            message: null !== (r = null === (i = n.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), M(!1), e((0, p.al)(!0));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    F = b && Q ? v.createElement(c.qX, {
                        type: "error",
                        title: "Cancellation Unsuccessful"
                    }, "Your subscription cannot be cancelled, please try again later.") : b && !Q ? v.createElement(c.qX, {
                        type: "success",
                        title: "Cancellation Successful"
                    }, "Your subscription has been cancelled successfully!") : L ? v.createElement("p", null, "Are you sure you want to cancel your subscription immediately?") : v.createElement("p", null, "Are you sure you want to cancel your subscription?");
                return v.createElement(c.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: E,
                    confirmText: b ? "Done" : C || L ? "Cancel Immediately" : "Cancel Subscription",
                    confirmCallback: function() {
                        b ? Z() : !x || L || C ? B() : (M(!0), e((0, p.J6)(!1)))
                    },
                    cancelCallback: Z,
                    confirmDisabled: !(!L || b) && !x,
                    hideCancel: b,
                    headerClasses: "tw-justify-between tw-items-center",
                    size: "lg",
                    isLoading: S
                }, !C && v.createElement(c.JX, null, F, E && s && v.createElement(c.x7, null, v.createElement(c.pw, {
                    alt: s.displayName,
                    imageId: s.imageId,
                    fallbackSrc: d()
                }), v.createElement(c.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, v.createElement(c.X3, null, s.displayName), v.createElement("p", null, s.description))), !L && !b && D && v.createElement(v.Fragment, null, v.createElement("p", null, v.createElement("big", null, v.createElement("b", null, "Total Refund: ", v.createElement(c.b5, null), null == D ? void 0 : D.totalRefundable)), " ", "Your new expiration date will be ", g()(null == D ? void 0 : D.newExpiryDate).format("MMMM D, YYYY"), v.createElement("br", null), v.createElement(c.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded.")), v.createElement("p", null, v.createElement(c.XZ, {
                    id: "cancellationCheck",
                    label: " I want to remove my benefits immediately (Optional)",
                    checked: x,
                    onChange: N
                }), v.createElement(c.hh, null, "If you enable this option, your subscription and benefits end immediately. Your total refund will be the same."))), L && !b && v.createElement(c.JX, null, v.createElement(c.hh, null, v.createElement("strong", null, "NOTE:"), " This subscription is non-recurring, and canceling it now means you will lose access to the remaining days of your current subscription, along with any associated benefits. Your current 1-month subscription expiration date will change from", " ", A, ", to today."), v.createElement(c.XZ, {
                    id: "cancellationCheck",
                    topAlign: !0,
                    className: "tw-mt-[5px]",
                    label: "I understand that canceling my 1-month subscription immediately will result in losing access to the remaining days and benefits.",
                    checked: x,
                    onChange: N
                }))), C && v.createElement(c.JX, null, v.createElement("p", null, "You are about to cancel your subscription immediately. This subscription is non-recurring, and you will lose access to the remaining days, along with any associated benefits. Do you still want to proceed?")))
            }
        },
        7701: (e, n, t) => {
            t.d(n, {
                Z: () => k
            });
            var r = t(15861),
                i = t(54546),
                l = t(95693),
                a = t(5945),
                o = t(20495),
                u = t(64687),
                c = t.n(u),
                s = t(96985),
                d = t(98185),
                m = t(51806),
                p = t.n(m),
                f = t(95896),
                g = t(66736),
                v = t(67978),
                y = t(73647),
                h = t(60006),
                E = t(27484),
                b = t.n(E),
                w = t(67294),
                x = t(32981);
            const k = function(e) {
                var n, t, u, m = e.groupData,
                    E = (0, x.I0)(),
                    k = b()(),
                    T = (0, x.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    C = (0, x.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    M = !(null == C || null === (n = C.myMember) || void 0 === n || !n.userId) && (null == C ? void 0 : C.ownerId) === (null == C || null === (t = C.myMember) || void 0 === t ? void 0 : t.userId),
                    I = (0, x.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    P = M ? 0 : (0, x.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    R = (0, x.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    Y = (0, x.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    D = (0, x.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    S = I ? b()(I.subscriptionExpiry) : void 0,
                    Q = null == S ? void 0 : S.diff(k, "days", !0),
                    X = Q < 0,
                    L = (null == T ? void 0 : T.permanent) || "forevers" === (null == T ? void 0 : T.durationType),
                    A = L ? "Buy" : "Subscribe",
                    N = R < P,
                    Z = !(null == C || !C.myMember),
                    q = D.includesGroupAccess && !Z,
                    B = !L && D.includesGroupAccessRemove && !Z,
                    F = q && (null == C ? void 0 : C.rules),
                    O = (0, v.DM)({
                        listingId: T.id,
                        hydrateProducts: !0
                    }, {
                        skip: !T.id
                    }),
                    V = O.data,
                    G = O.isFetching,
                    $ = (O.isError, O.error),
                    J = (0, g.I8)(),
                    U = (0, i.Z)(J, 2),
                    j = U[0],
                    W = U[1],
                    _ = (W.isLoading, W.isError, W.error, w.useMemo((function() {
                        var e;
                        return Y.selectedPurchaseQuantity ? null === (e = T.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= Y.selectedPurchaseQuantity
                        })) : null
                    }), [Y.selectedPurchaseQuantity, T])),
                    z = w.useMemo((function() {
                        return (Y.selectedPurchaseQuantity || 1) * ((null == _ ? void 0 : _.unitPriceTokens) || (null == T ? void 0 : T.priceTokens))
                    }), [Y.selectedPurchaseQuantity, _, T]);
                w.useEffect((function() {
                    E((0, y.m1)(P)), E((0, y.OT)(z <= f.A1))
                }), [P]);
                var H = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, j({
                                        listingId: T.id,
                                        listingVariantId: null == _ ? void 0 : _.listingVariantId,
                                        quantity: Y.selectedPurchaseQuantity,
                                        totalPrice: P,
                                        contextData: {
                                            locationType: f.G0.GROUP,
                                            storeId: null == m ? void 0 : m.storeId,
                                            groupId: null == m ? void 0 : m.id
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
                    return I ? Q <= 10 ? w.createElement(h.DR, {
                        bgColor: "#A53D29"
                    }, w.createElement(s.$1, {
                        icon: o.faCircleExclamation
                    }), " ", X ? w.createElement(w.Fragment, null, "Expired!") : w.createElement(w.Fragment, null, "Expires Soon!")) : w.createElement(h.DR, {
                        bgColor: "#575757"
                    }, w.createElement(s.$1, {
                        icon: a.B2
                    }), " Expires ", b()(I.subscriptionExpiry).format("MMM YYYY")) : (null === (e = T.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? w.createElement(h.DR, {
                        bgColor: "#6F42C1"
                    }, w.createElement(s.$1, {
                        icon: l.th
                    }), " Volume Discount") : null
                }
                return w.useEffect((function() {
                    E((0, y.jg)(void 0 === Y.selectedPurchaseQuantity || Y.selectedPurchaseQuantity > 0 && Y.selectedPurchaseQuantity === Number(Y.enteredPurchaseQuantity) && Y.selectedPurchaseQuantity <= f.b_))
                }), [Y.selectedPurchaseQuantity]), w.createElement(s.sm, {
                    headerText: "Confirm ".concat(L ? "Purchase" : "Subscription"),
                    isOpen: D.isOpen,
                    isLoading: D.isLoading,
                    confirmText: w.createElement(w.Fragment, null, A, " for ", w.createElement(s.b5, null), P.toLocaleString()),
                    confirmCallback: H,
                    confirmDisabled: N || !Y.isQuantityValid || !Y.isTotalPriceValid,
                    cancelCallback: function() {
                        E((0, y.gd)())
                    },
                    size: "lg"
                }, D.isError && w.createElement(s.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = D.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), w.createElement(s.x7, null, w.createElement(s.pw, {
                    alt: T.displayName || "",
                    imageId: T.imageId,
                    fallbackSrc: p(),
                    fitToCover: !0
                }), w.createElement(s.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, w.createElement(s.X3, null, T.displayName, " ", w.createElement(K, null)), w.createElement("p", null, T.description), w.createElement(d.Z, {
                    loading: G,
                    error: $
                }, (null == V ? void 0 : V.length) > 1 && !G && w.createElement(w.Fragment, null, w.createElement("p", null, L ? "Purchasing" : "Subscribing", " grants access to the following items:"), w.createElement("ul", null, V.map((function(e) {
                    return w.createElement("li", {
                        key: e.id
                    }, w.createElement("strong", null, e.displayName))
                }))))))), q && w.createElement("p", null, L ? "Purchasing" : "Subscribing", " will add you to this group."), F && w.createElement(w.Fragment, null, w.createElement("p", null, "By joining, you agree to the group's rules."), w.createElement(s.zx, {
                    onClick: function() {
                        return E((0, y.oM)(C))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !L && w.createElement("p", null, "This purchase will expire in ", I && "an additional ", Y.selectedPurchaseQuantity * T.duration, " ", Y.selectedPurchaseQuantity * T.duration == 1 ? T.durationType.replace(/s$/, "") : T.durationType, ", on", " ", b()(null == I ? void 0 : I.subscriptionExpiry).add(Y.selectedPurchaseQuantity * T.duration, T.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), B && w.createElement("p", null, "Once this expires, you will be removed from the group."), N && w.createElement(s.qX, {
                    type: "error",
                    title: "Insufficient funds"
                }, "You don't have enough credits for this purchase. You can buy more inside VRChat."))
            }
        },
        50352: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(42138),
                i = t(4965),
                l = t(96985),
                a = t(50048),
                o = t(95896),
                u = t(73647),
                c = t(27484),
                s = t.n(c),
                d = t(67294),
                m = t(32981);
            const p = function() {
                var e, n, t, i = (0, m.I0)(),
                    a = (0, m.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    c = (0, m.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    p = (0, m.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    f = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.showCustomDuration
                    })),
                    g = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.selectedPurchaseQuantity
                    })),
                    y = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.enteredPurchaseQuantity
                    })),
                    h = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.isQuantityValid
                    })),
                    E = null !== (e = (0, m.v9)((function(e) {
                        return e.listingRow.listing.stackable
                    }))) && void 0 !== e && e,
                    b = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    })),
                    w = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    x = [1].concat((0, r.Z)(o.PN)),
                    k = s()(null == p ? void 0 : p.subscriptionExpiry).isBefore(s()()),
                    T = !(null == a || null === (n = a.myMember) || void 0 === n || !n.userId) && (null == a ? void 0 : a.ownerId) === (null == a || null === (t = a.myMember) || void 0 === t ? void 0 : t.userId),
                    C = d.useMemo((function() {
                        var e;
                        if (g) return null === (e = c.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= g
                        }))
                    }), [g, c]),
                    M = d.useMemo((function() {
                        return (g || 1) * ((null == C ? void 0 : C.unitPriceTokens) || (null == c ? void 0 : c.priceTokens))
                    }), [g, C, c]),
                    I = d.useMemo((function() {
                        return T ? 0 : M
                    }), [T, M]);
                (0, d.useEffect)((function() {
                    i((0, u.m1)(I)), i((0, u.OT)(M <= o.A1))
                }), [I]);
                var P = d.useMemo((function() {
                        var e, n = (null == c || null === (e = c.listingVariants) || void 0 === e ? void 0 : e.reduce((function(e, n) {
                            return e[n.quantity] = n, e
                        }), [])) || [];
                        return x.forEach((function(e) {
                            if (!n[e]) {
                                var t, r = (null === (t = n.findLast((function(n) {
                                    return (null == n ? void 0 : n.quantity) && (null == n ? void 0 : n.quantity) <= e
                                }))) || void 0 === t ? void 0 : t.unitPriceTokens) || (null == c ? void 0 : c.priceTokens);
                                n[e] = {
                                    quantity: e,
                                    unitPriceTokens: r
                                }
                            }
                        })), n
                    }), [c]),
                    R = d.useMemo((function() {
                        var e;
                        if (!E) return 1;
                        var n = null === (e = P.findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === e ? void 0 : e.unitPriceTokens,
                            t = Math.floor(o.A1 / n);
                        return Math.min(t, o.b_)
                    }), [E, P]);
                return (0, d.useEffect)((function() {
                    i((0, u.jg)(void 0 === g || g >= 1 && g.toString(10) === y && g <= o.b_))
                }), [g]), d.createElement(l.sm, {
                    headerText: f ? "Custom Subscription" : "".concat(p ? "Update" : "Add", " Subscription"),
                    isOpen: w.isOpen,
                    confirmText: f ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        w.showCustomDuration ? i((0, u.Uo)()) : i((0, u.Xe)())
                    },
                    confirmDisabled: f && (!h || !b),
                    cancelCallback: function() {
                        i((0, u.gd)())
                    }
                }, d.createElement(l.JX, {
                    className: "tw-text-center tw-mb-5"
                }, d.createElement("p", null, "Choose the subscription duration to add for"), d.createElement(l.X3, null, c.displayName), p && !k && d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your current subscription expires ", s()(p.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A"))), f ? d.createElement(l.JX, {
                    className: "align-items-center"
                }, d.createElement(l.X2, {
                    className: "align-items-center"
                }, d.createElement("label", {
                    className: "d-flex align-items-center"
                }, c.durationType.slice(0, 1).toUpperCase(), g * c.duration == 1 ? c.durationType.slice(1).replace(/s$/, "") : c.durationType.slice(1), ":", d.createElement(l.II, {
                    type: "number",
                    className: "mx-2",
                    value: y,
                    onChange: function(e) {
                        return i((0, u.c8)(e.target.value.slice(0, o.b_.toString(10).length)))
                    },
                    min: c.duration,
                    step: c.duration,
                    max: R
                })), d.createElement("small", null, d.createElement("span", {
                    style: {
                        color: b ? "inherit" : "var(--red)"
                    }
                }, d.createElement(l.b5, null), I.toLocaleString()), ((null == C ? void 0 : C.unitPriceTokens) || c.priceTokens) < c.priceTokens && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == C ? void 0 : C.unitPriceTokens) || c.priceTokens) / c.priceTokens * 100), "%")))), (!h || !b) && d.createElement(l.X2, {
                    className: "align-items-center"
                }, d.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !b && d.createElement(d.Fragment, null, "The total must be within the transaction limit of ", d.createElement(l.b5, null), o.A1.toLocaleString(), ".")))) : d.createElement(v, {
                    containerType: "purchase"
                }, P.map((function(e) {
                    var n = e.quantity,
                        t = e.unitPriceTokens,
                        r = n * c.duration;
                    return d.createElement(l.zx, {
                        key: n,
                        onClick: function() {
                            return i((0, u.BW)({
                                quantity: n,
                                totalPrice: T ? 0 : r * t
                            }))
                        }
                    }, r.toLocaleString(), " ", 1 === r ? c.durationType.replace(/s$/, "") : c.durationType, d.createElement("br", null), d.createElement(l.b5, null), (r * t).toLocaleString(), t < c.priceTokens && d.createElement("small", {
                        style: {
                            color: "var(--yellow)"
                        }
                    }, d.createElement("br", null), "Save ", Math.floor(100 - t / c.priceTokens * 100), "%"))
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
                v = (0, i.Z)(l.X2, {
                    target: "e1570gix0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && g
                }), " flex:1 1 128px;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", a.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && f
                }), " font-weight:500;line-height:normal;&>", a.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        77708: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(67294),
                i = t(96985),
                l = t(32981),
                a = t(73647);
            const o = function() {
                var e = (0, l.I0)(),
                    n = (0, l.v9)((function(e) {
                        return e.listingRow.modals.rules
                    })),
                    t = (0, l.v9)((function(e) {
                        return e.listingRow.group
                    }));
                return r.createElement(i.sm, {
                    headerText: "Rules",
                    isOpen: n.isOpen,
                    confirmText: "Agree",
                    confirmCallback: function() {
                        e((0, a.gB)())
                    },
                    cancelCallback: function() {
                        e((0, a.gd)())
                    }
                }, t && t.rules && r.createElement(r.Fragment, null, r.createElement("p", null, "By joining this group, you agree to the following rules:"), r.createElement(i._O, null, t.rules)))
            }
        }
    }
]);
//# sourceMappingURL=330b39feb8f9046bf2b5841b78c67a9fc3b9a1b52969e332993933d72da98d48.js.map