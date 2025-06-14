"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896], {
        68791: (e, t, n) => {
            n.d(t, {
                Z: () => S
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
                f = n(37463),
                g = n(50048),
                v = n(51806),
                y = n.n(v),
                h = n(22202),
                b = n(93261),
                E = n(16869),
                w = n(67978),
                x = n(60006),
                T = n(27484),
                P = n.n(T),
                k = n(67294),
                I = n(32981),
                C = n(73647),
                M = n(63221);
            const S = function(e) {
                var t, n, a, p, g = e.listing,
                    v = e.purchase,
                    T = e.group,
                    S = e.tiliaTokenBalance,
                    D = e.tiliaTosAccepted,
                    L = e.index,
                    O = e.onCancel,
                    A = e.onPurchase,
                    F = e.economyOnline,
                    Q = (0, I.I0)(),
                    Z = P()(),
                    q = (0, h.XC)().data,
                    U = k.useState(!0),
                    X = (0, i.Z)(U, 2),
                    N = X[0],
                    G = X[1],
                    B = (0, I.v9)((function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    })),
                    V = (0, I.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    j = (0, I.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    $ = (0, I.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    J = (0, E.mr)({
                        listingId: null == v ? void 0 : v.listingId,
                        hydrate: !0
                    }, {
                        skip: !!g,
                        refetchOnMountOrArgChange: !0
                    }),
                    z = J.data,
                    W = J.isLoading,
                    _ = (J.isSuccess, J.isError),
                    H = J.error,
                    K = g || z,
                    ee = (0, b.r5)({
                        groupId: null == K ? void 0 : K.groupId
                    }, {
                        skip: !!T || !K
                    }),
                    te = ee.data,
                    ne = ee.isLoading,
                    re = (ee.isError, ee.error, (0, w.DM)({
                        listingId: null == K ? void 0 : K.id
                    }, {
                        skip: !K
                    })),
                    ie = re.data,
                    ae = (re.isLoading, re.isError, re.error, T || te),
                    oe = null == K ? void 0 : K.stackable,
                    le = (null == ae ? void 0 : ae.memberCount) >= M.qH,
                    ue = !(null == ae || !ae.myMember),
                    ce = !(null == ae || null === (t = ae.myMember) || void 0 === t || !t.userId) && (null == ae ? void 0 : ae.ownerId) === (null == ae || null === (n = ae.myMember) || void 0 === n ? void 0 : n.userId);
                (0, k.useEffect)((function() {
                    K && ae && !W && !ne && G(!1)
                }), [K, ae, W, ne]), (0, k.useEffect)((function() {
                    V.enteredPurchaseQuantity && Q((0, C.tE)(parseInt(V.enteredPurchaseQuantity, 10)))
                }), [V.enteredPurchaseQuantity]);
                var se = k.useMemo((function() {
                    var e, t;
                    if (V.selectedPurchaseQuantity && (null == K || null === (e = K.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (t = K.listingVariants) || void 0 === t ? void 0 : t.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= V.selectedPurchaseQuantity
                    }))
                }), [V.selectedPurchaseQuantity, K]);
                (0, k.useEffect)((function() {
                    !$ && j && Q((0, C.gB)())
                }), [$, j]);
                var de, pe, me, fe = (null == K ? void 0 : K.permanent) || "forevers" === (null == K ? void 0 : K.durationType) || "permanent" === (null == K ? void 0 : K.listingType),
                    ge = (null == v ? void 0 : v.permanent) || "forevers" === (null == v ? void 0 : v.purchaseDurationType) || "permanent" === (null == K ? void 0 : K.listingType),
                    ve = k.useMemo((function() {
                        if (!ie) return [!1, !1];
                        var e = ie.find((function(e) {
                            return "role" === e.productType
                        }));
                        return [null == e ? void 0 : e.groupAccess, null == e ? void 0 : e.groupAccessRemove]
                    }), [ie]),
                    ye = (0, i.Z)(ve, 2),
                    he = ye[0],
                    be = ye[1],
                    Ee = k.useMemo((function() {
                        return (V.selectedPurchaseQuantity || 1) * ((null == se ? void 0 : se.unitPriceTokens) || (null == K ? void 0 : K.priceTokens))
                    }), [V.selectedPurchaseQuantity, se, K]),
                    we = k.useMemo((function() {
                        return ce ? 0 : Ee
                    }), [ce, Ee]),
                    xe = he && !ue,
                    Te = !he && !ue,
                    Pe = fe ? "Buy" : "Subscribe",
                    ke = v ? P()(v.subscriptionExpiry) : void 0,
                    Ie = null == ke ? void 0 : ke.diff(Z, "months", !0),
                    Ce = null == ke ? void 0 : ke.diff(Z, "days", !0),
                    Me = v && Ie <= 1 ? "Immediately" : "Subscription",
                    Se = Ce < 0,
                    Re = le || Te || !D || !F,
                    De = function() {
                        var e = (0, r.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        O({
                                            currentUserId: q.id,
                                            listingId: K.id,
                                            listing: K,
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
                    Le = v ? fe || ge ? "You own this!" : Se ? le && !ue ? "This group is full!" : !xe && D ? "You need to be a member of the group to buy this." : "This subscription has expired!" : "You're subscribed! Expires ".concat(P()(v.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A")) : le && !ue ? "This group is full!" : !xe && D ? "You need to be a member of the group to buy this." : Re ? "You need to accept the Tilia Terms of Service to buy this." : void 0,
                    Ye = v ? fe || ge ? "You own this!" : k.createElement(k.Fragment, null, "Renew Subscription") : k.createElement(k.Fragment, null, Pe, k.createElement("br", null), "Buy" === Pe ? "for " : "Starting from ", k.createElement(f.b5, null), K.priceTokens.toLocaleString());
                return k.createElement(k.Fragment, null, _ && k.createElement(f.qX, {
                    className: "tw-mt-0 tw-mb-3",
                    type: "error",
                    title: "Listing Error"
                }, k.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (a = null === (p = H.data) || void 0 === p ? void 0 : p.error.message) && void 0 !== a ? a : "Unknown error"), g ? k.createElement("small", null, "Listing ID: ", g.id) : k.createElement("small", null, "Listing ID: ", null == v ? void 0 : v.listingId)), N && !_ && k.createElement(R, {
                    key: L,
                    height: "12rem",
                    delay: 50 * L,
                    radius: 8
                }), !_ && !N && k.createElement(f.x7, null, k.createElement(f.pw, {
                    alt: K.displayName,
                    imageId: K.imageId,
                    fallbackSrc: y(),
                    fitToCover: !0
                }), k.createElement(f.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, k.createElement(f.X3, null, K.displayName, " ", (pe = null == K ? void 0 : K.listingType, (me = {
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
                })[pe] ? k.createElement(x.DR, {
                    bgColor: me[pe].bgColor
                }, k.createElement(f.$1, {
                    icon: me[pe].icon
                }), " ", me[pe].label) : null), " ", v ? Ce <= 10 ? k.createElement(x.DR, {
                    bgColor: "#A53D29"
                }, k.createElement(f.$1, {
                    icon: u.faCircleExclamation
                }), " ", Se ? k.createElement(k.Fragment, null, "Expired!") : k.createElement(k.Fragment, null, "Expires Soon!")) : k.createElement(x.DR, {
                    bgColor: "#575757"
                }, k.createElement(f.$1, {
                    icon: l.B2
                }), " Expires ", P()(v.subscriptionExpiry).format("MMM YYYY")) : null !== (de = K.listingVariants) && void 0 !== de && de.some((function(e) {
                    return !0 === e.sellerVariant
                })) ? k.createElement(x.DR, {
                    bgColor: "#6F42C1"
                }, k.createElement(f.$1, {
                    icon: o.th
                }), " Volume Discount") : null), k.createElement("p", null, K.description)), k.createElement(Y, {
                    flexDirection: "column",
                    containerType: "listing"
                }, k.createElement(f.zx, {
                    disabled: v ? fe || !oe || !F || Te : Re,
                    title: Le,
                    onClick: function() {
                        A(oe, oe ? {
                            listing: K,
                            purchase: v,
                            group: ae,
                            totalPrice: we,
                            tiliaTokenBalance: S,
                            tiliaTosAccepted: D,
                            includesGroupAccess: he,
                            includesGroupAccessRemove: be,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: K,
                            purchase: v,
                            group: ae,
                            totalPrice: we,
                            tiliaTokenBalance: S,
                            tiliaTosAccepted: D,
                            quantity: 1,
                            includesGroupAccess: he,
                            includesGroupAccessRemove: be
                        })
                    },
                    containerStyles: "width: fit-content"
                }, Ye), v && !fe && oe ? k.createElement(f.zx, {
                    neutral: "true",
                    disabled: B.isLoading || !F,
                    hidden: Se,
                    onClick: function() {
                        return De()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Me) : null)))
            };
            var R = (0, a.Z)(f.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                D = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                L = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                Y = (0, a.Z)(f.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && L
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", g.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && D
                }), " font-weight:500;line-height:normal;&>", g.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        40067: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(15861),
                i = n(54546),
                a = n(76553),
                o = n(64687),
                l = n.n(o),
                u = n(64258),
                c = n(37463),
                s = n(51806),
                d = n.n(s),
                p = n(66736),
                m = n(73647),
                f = n(27484),
                g = n.n(f),
                v = n(67294),
                y = n(32981);
            const h = function() {
                var e = (0, y.I0)(),
                    t = (0, y.v9)((function(e) {
                        return e.listingRow
                    })),
                    n = t.currentUserId,
                    o = t.listingId,
                    s = t.listing,
                    f = t.purchase,
                    h = t.modals.subscriptionCancellation,
                    b = h.isOpen,
                    E = h.showCancellationConfirm,
                    w = h.newExpirationDate,
                    x = h.cancelImmediately,
                    T = (0, v.useState)(!1),
                    P = (0, i.Z)(T, 2),
                    k = P[0],
                    I = P[1],
                    C = (0, p.x)(),
                    M = (0, i.Z)(C, 2),
                    S = M[0],
                    R = M[1],
                    D = R.data,
                    L = R.isLoading,
                    Y = R.isError,
                    O = (0, v.useMemo)((function() {
                        return f ? g()(f.subscriptionExpiry) : void 0
                    }), [f]),
                    A = (0, v.useMemo)((function() {
                        return null == O ? void 0 : O.diff(g()(), "months", !0)
                    }), [O]) <= 1,
                    F = (0, v.useMemo)((function() {
                        return f ? g()(null == f ? void 0 : f.subscriptionExpiry).format("MMMM D, YYYY") : void 0
                    }), [f]);
                v.useEffect((function() {
                    b && q()
                }), [b]);
                var Q = (0, v.useCallback)((function() {
                        e((0, m.yR)(!x))
                    }), [e, x]),
                    Z = (0, v.useCallback)((function() {
                        e((0, m.gd)())
                    }), [e]),
                    q = function() {
                        var t = (0, r.Z)(l().mark((function t() {
                            var r, i, c;
                            return l().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (f && s) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.prev = 2, t.next = 5, S({
                                            buyerId: n,
                                            listingId: o,
                                            reason: "user cancellation",
                                            immediate: A,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        r = t.sent, w !== r.newExpiryDate && e((0, m.C0)(r.newExpiryDate)), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), e((0, u.d)({
                                            title: "Failed to preview cancellation ".concat(s.id, " for ").concat(n),
                                            icon: a.eH,
                                            message: null !== (i = null === (c = t.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, m.gd)());
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    U = function() {
                        var t = (0, r.Z)(l().mark((function t() {
                            var r, i;
                            return l().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, S({
                                            buyerId: n,
                                            listingId: o,
                                            reason: "user cancellation",
                                            immediate: x,
                                            isPreview: !1
                                        }).unwrap();
                                    case 3:
                                        I(!1), e((0, m.J6)(!0)), t.next = 12;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), e((0, u.d)({
                                            title: "Failed to cancel ".concat(s.id, " for ").concat(n),
                                            icon: a.eH,
                                            message: null !== (r = null === (i = t.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), I(!1), e((0, m.al)(!0));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    X = E && Y ? v.createElement(c.qX, {
                        type: "error",
                        title: "Cancellation Unsuccessful"
                    }, "Your subscription cannot be cancelled, please try again later.") : E && !Y ? v.createElement(c.qX, {
                        type: "success",
                        title: "Cancellation Successful"
                    }, "Your subscription has been cancelled successfully!") : A ? v.createElement("p", null, "Are you sure you want to cancel your subscription immediately?") : v.createElement("p", null, "Are you sure you want to cancel your subscription?");
                return v.createElement(c.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: b,
                    confirmText: E ? "Done" : k || A ? "Cancel Immediately" : "Cancel Subscription",
                    confirmCallback: function() {
                        E ? Z() : !x || A || k ? U() : (I(!0), e((0, m.J6)(!1)))
                    },
                    cancelCallback: Z,
                    confirmDisabled: !(!A || E) && !x,
                    hideCancel: E,
                    headerClasses: "tw-justify-between tw-items-center",
                    size: "lg",
                    isLoading: L
                }, !k && v.createElement(c.JX, null, X, b && s && v.createElement(c.x7, null, v.createElement(c.pw, {
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
                }, v.createElement(c.X3, null, s.displayName), v.createElement("p", null, s.description))), !A && !E && D && v.createElement(v.Fragment, null, v.createElement("p", null, v.createElement("big", null, v.createElement("b", null, "Total Refund: ", v.createElement(c.b5, null), null == D ? void 0 : D.totalRefundable)), " ", "Your new expiration date will be ", g()(null == D ? void 0 : D.newExpiryDate).format("MMMM D, YYYY"), v.createElement("br", null), v.createElement(c.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded.")), v.createElement("p", null, v.createElement(c.XZ, {
                    id: "cancellationCheck",
                    label: " I want to remove my benefits immediately (Optional)",
                    checked: x,
                    onChange: Q
                }), v.createElement(c.hh, null, "If you enable this option, your subscription and benefits end immediately. Your total refund will be the same."))), A && !E && v.createElement(c.JX, null, v.createElement(c.hh, null, v.createElement("strong", null, "NOTE:"), " This subscription is non-recurring, and canceling it now means you will lose access to the remaining days of your current subscription, along with any associated benefits. Your current 1-month subscription expiration date will change from", " ", F, ", to today."), v.createElement(c.XZ, {
                    id: "cancellationCheck",
                    topAlign: !0,
                    className: "tw-mt-[5px]",
                    label: "I understand that canceling my 1-month subscription immediately will result in losing access to the remaining days and benefits.",
                    checked: x,
                    onChange: Q
                }))), k && v.createElement(c.JX, null, v.createElement("p", null, "You are about to cancel your subscription immediately. This subscription is non-recurring, and you will lose access to the remaining days, along with any associated benefits. Do you still want to proceed?")))
            }
        },
        7701: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(15861),
                i = n(54546),
                a = n(95693),
                o = n(5945),
                l = n(20495),
                u = n(64687),
                c = n.n(u),
                s = n(37463),
                d = n(98185),
                p = n(51806),
                m = n.n(p),
                f = n(95896),
                g = n(66736),
                v = n(67978),
                y = n(73647),
                h = n(60006),
                b = n(27484),
                E = n.n(b),
                w = n(67294),
                x = n(32981);
            const T = function(e) {
                var t, n, u, p = e.groupData,
                    b = (0, x.I0)(),
                    T = E()(),
                    P = (0, x.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    k = (0, x.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    I = !(null == k || null === (t = k.myMember) || void 0 === t || !t.userId) && (null == k ? void 0 : k.ownerId) === (null == k || null === (n = k.myMember) || void 0 === n ? void 0 : n.userId),
                    C = (0, x.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    M = I ? 0 : (0, x.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    S = (0, x.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    R = (0, x.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    D = (0, x.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    L = C ? E()(C.subscriptionExpiry) : void 0,
                    Y = null == L ? void 0 : L.diff(T, "days", !0),
                    O = Y < 0,
                    A = (null == P ? void 0 : P.permanent) || "forevers" === (null == P ? void 0 : P.durationType),
                    F = A ? "Buy" : "Subscribe",
                    Q = S < M,
                    Z = !(null == k || !k.myMember),
                    q = D.includesGroupAccess && !Z,
                    U = !A && D.includesGroupAccessRemove && !Z,
                    X = q && (null == k ? void 0 : k.rules),
                    N = (0, v.DM)({
                        listingId: P.id,
                        hydrateProducts: !0
                    }, {
                        skip: !P.id
                    }),
                    G = N.data,
                    B = N.isFetching,
                    V = (N.isError, N.error),
                    j = (0, g.I8)(),
                    $ = (0, i.Z)(j, 2),
                    J = $[0],
                    z = $[1],
                    W = (z.isLoading, z.isError, z.error, w.useMemo((function() {
                        var e;
                        return R.selectedPurchaseQuantity ? null === (e = P.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= R.selectedPurchaseQuantity
                        })) : null
                    }), [R.selectedPurchaseQuantity, P])),
                    _ = w.useMemo((function() {
                        return (R.selectedPurchaseQuantity || 1) * ((null == W ? void 0 : W.unitPriceTokens) || (null == P ? void 0 : P.priceTokens))
                    }), [R.selectedPurchaseQuantity, W, P]);
                w.useEffect((function() {
                    b((0, y.m1)(M)), b((0, y.OT)(_ <= f.A1))
                }), [M]);
                var H = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, J({
                                        listingId: P.id,
                                        listingVariantId: null == W ? void 0 : W.listingVariantId,
                                        quantity: R.selectedPurchaseQuantity,
                                        totalPrice: 0 === M ? void 0 : M,
                                        contextData: {
                                            locationType: f.G0.GROUP,
                                            storeId: null == p ? void 0 : p.storeId,
                                            groupId: null == p ? void 0 : p.id
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
                    return C ? Y <= 10 ? w.createElement(h.DR, {
                        bgColor: "#A53D29"
                    }, w.createElement(s.$1, {
                        icon: l.faCircleExclamation
                    }), " ", O ? w.createElement(w.Fragment, null, "Expired!") : w.createElement(w.Fragment, null, "Expires Soon!")) : w.createElement(h.DR, {
                        bgColor: "#575757"
                    }, w.createElement(s.$1, {
                        icon: o.B2
                    }), " Expires ", E()(C.subscriptionExpiry).format("MMM YYYY")) : (null === (e = P.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? w.createElement(h.DR, {
                        bgColor: "#6F42C1"
                    }, w.createElement(s.$1, {
                        icon: a.th
                    }), " Volume Discount") : null
                }
                return w.useEffect((function() {
                    b((0, y.jg)(void 0 === R.selectedPurchaseQuantity || R.selectedPurchaseQuantity > 0 && R.selectedPurchaseQuantity === Number(R.enteredPurchaseQuantity) && R.selectedPurchaseQuantity <= f.b_))
                }), [R.selectedPurchaseQuantity]), w.createElement(s.sm, {
                    headerText: "Confirm ".concat(A ? "Purchase" : "Subscription"),
                    isOpen: D.isOpen,
                    isLoading: D.isLoading,
                    confirmText: w.createElement(w.Fragment, null, F, " for ", w.createElement(s.b5, null), M.toLocaleString()),
                    confirmCallback: H,
                    confirmDisabled: Q || !R.isQuantityValid || !R.isTotalPriceValid,
                    cancelCallback: function() {
                        b((0, y.gd)())
                    },
                    size: "lg"
                }, D.isError && w.createElement(s.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = D.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), w.createElement(s.x7, null, w.createElement(s.pw, {
                    alt: P.displayName || "",
                    imageId: P.imageId,
                    fallbackSrc: m(),
                    fitToCover: !0
                }), w.createElement(s.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, w.createElement(s.X3, null, P.displayName, " ", w.createElement(K, null)), w.createElement("p", null, P.description), w.createElement(d.Z, {
                    loading: B,
                    error: V
                }, (null == G ? void 0 : G.length) > 1 && !B && w.createElement(w.Fragment, null, w.createElement("p", null, A ? "Purchasing" : "Subscribing", " grants access to the following items:"), w.createElement("ul", null, G.map((function(e) {
                    return w.createElement("li", {
                        key: e.id
                    }, w.createElement("strong", null, e.displayName))
                }))))))), q && w.createElement("p", null, A ? "Purchasing" : "Subscribing", " will add you to this group."), X && w.createElement(w.Fragment, null, w.createElement("p", null, "By joining, you agree to the group's rules."), w.createElement(s.zx, {
                    onClick: function() {
                        return b((0, y.oM)(k))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !A && w.createElement("p", null, "This purchase will expire in ", C && "an additional ", R.selectedPurchaseQuantity * P.duration, " ", R.selectedPurchaseQuantity * P.duration == 1 ? P.durationType.replace(/s$/, "") : P.durationType, ", on", " ", E()(null == C ? void 0 : C.subscriptionExpiry).add(R.selectedPurchaseQuantity * P.duration, P.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), U && w.createElement("p", null, "Once this expires, you will be removed from the group."), Q && w.createElement(s.qX, {
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
                a = n(37463),
                o = n(50048),
                l = n(95896),
                u = n(73647),
                c = n(27484),
                s = n.n(c),
                d = n(67294),
                p = n(32981);
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
                    T = s()(null == m ? void 0 : m.subscriptionExpiry).isBefore(s()()),
                    P = !(null == o || null === (t = o.myMember) || void 0 === t || !t.userId) && (null == o ? void 0 : o.ownerId) === (null == o || null === (n = o.myMember) || void 0 === n ? void 0 : n.userId),
                    k = d.useMemo((function() {
                        var e;
                        if (g) return null === (e = c.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= g
                        }))
                    }), [g, c]),
                    I = d.useMemo((function() {
                        return (g || 1) * ((null == k ? void 0 : k.unitPriceTokens) || (null == c ? void 0 : c.priceTokens))
                    }), [g, k, c]),
                    C = d.useMemo((function() {
                        return P ? 0 : I
                    }), [P, I]);
                (0, d.useEffect)((function() {
                    i((0, u.m1)(C)), i((0, u.OT)(I <= l.A1))
                }), [C]);
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
                    S = d.useMemo((function() {
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
                }, d.createElement(a.JX, {
                    className: "tw-text-center tw-mb-5"
                }, d.createElement("p", null, "Choose the subscription duration to add for"), d.createElement(a.X3, null, c.displayName), m && !T && d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your current subscription expires ", s()(m.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A"))), f ? d.createElement(a.JX, {
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
                    max: S
                })), d.createElement("small", null, d.createElement("span", {
                    style: {
                        color: E ? "inherit" : "var(--red)"
                    }
                }, d.createElement(a.b5, null), C.toLocaleString()), ((null == k ? void 0 : k.unitPriceTokens) || c.priceTokens) < c.priceTokens && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == k ? void 0 : k.unitPriceTokens) || c.priceTokens) / c.priceTokens * 100), "%")))), (!h || !E) && d.createElement(a.X2, {
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
                                totalPrice: P ? 0 : r * n
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
                i = n(37463),
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
                                    var o, u, c, d, p, m, f, g, v, y, h, b, E, w, x, T, P, k, I, C, M, S, R, D, L;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (u = t.avatarId, c = t.description, d = void 0 === c ? "" : c, p = t.displayName, m = t.duration, f = t.durationType, g = t.file, v = void 0 === g ? null : g, y = t.generateListing, h = t.imageId, b = void 0 === h ? null : h, E = t.instant, w = t.permanent, x = t.priceTokens, T = t.productType, P = t.tag, k = void 0 === P ? "product" : P, I = t.tags, C = void 0 === I ? [] : I, M = t.useForSubscriberList, S = void 0 !== M && M, null === v) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, r.Z)(l().mark((function e() {
                                                    var t, n;
                                                    return l().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (t = new FormData).append("file", v), t.append("tag", k), e.next = 5, a({
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
                                                    body: s(s({
                                                        description: d,
                                                        displayName: p,
                                                        duration: m,
                                                        durationType: f,
                                                        generateListing: y,
                                                        instant: E,
                                                        permanent: w,
                                                        priceTokens: x,
                                                        productType: T,
                                                        tags: C,
                                                        useForSubscriberList: S
                                                    }, u && {
                                                        avatarId: u
                                                    }), D && {
                                                        imageId: D
                                                    })
                                                });
                                            case 14:
                                                if (!(L = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: L.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: s({
                                                        product: L.data
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
//# sourceMappingURL=16a6b762dd31298d3d24ea9ebd6da4c45d2794bf511eeb929bc71795424c2be8.js.map