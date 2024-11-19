"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896], {
        68791: (e, n, t) => {
            t.d(n, {
                Z: () => I
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
                f = t(14411),
                g = t(50048),
                v = t(22202),
                h = t(93261),
                y = t(16869),
                E = t(60006),
                b = t(27484),
                w = t.n(b),
                x = t(67294),
                T = t(32981),
                k = t(67263),
                M = t(73647),
                C = t(63221);
            const I = function(e) {
                var n, t, l, m, g = e.listing,
                    b = e.purchase,
                    I = e.group,
                    R = e.tiliaTokenBalance,
                    Y = e.tiliaTosAccepted,
                    S = e.index,
                    Q = e.onCancel,
                    A = e.onPurchase,
                    O = e.economyOnline,
                    L = (0, T.I0)(),
                    F = w()(),
                    q = (0, v.XC)().data,
                    X = x.useState(!0),
                    B = (0, i.Z)(X, 2),
                    V = B[0],
                    Z = B[1],
                    N = (0, T.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    G = (0, T.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    $ = (0, T.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    U = (0, T.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    W = (0, y.mr)({
                        listingId: null == b ? void 0 : b.listingId,
                        hydrate: !0
                    }, {
                        skip: !!g,
                        refetchOnMountOrArgChange: !0
                    }),
                    _ = W.data,
                    j = W.isLoading,
                    z = (W.isSuccess, W.isError),
                    J = W.error,
                    H = g || _,
                    K = (0, h.r5)({
                        groupId: null == H ? void 0 : H.groupId
                    }, {
                        skip: !!I || !H,
                        refetchOnMountOrArgChange: !0
                    }),
                    ee = K.data,
                    ne = K.isLoading,
                    te = (K.isError, K.error, I || ee),
                    re = null == H ? void 0 : H.stackable,
                    ie = (null == te ? void 0 : te.memberCount) >= C.qH,
                    le = !(null == te || !te.myMember),
                    ae = !(null == te || null === (n = te.myMember) || void 0 === n || !n.userId) && (null == te ? void 0 : te.ownerId) === (null == te || null === (t = te.myMember) || void 0 === t ? void 0 : t.userId);
                x.useEffect((function() {
                    H && te && !j && !ne && Z(!1)
                }), [H, te, j, ne]), x.useEffect((function() {
                    G.enteredPurchaseQuantity && L((0, M.tE)(parseInt(G.enteredPurchaseQuantity, 10)))
                }), [G.enteredPurchaseQuantity]);
                var oe = x.useMemo((function() {
                    var e, n;
                    if (G.selectedPurchaseQuantity && (null == H || null === (e = H.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (n = H.listingVariants) || void 0 === n ? void 0 : n.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= G.selectedPurchaseQuantity
                    }))
                }), [G.selectedPurchaseQuantity, H]);
                x.useEffect((function() {
                    !U && $ && L((0, M.gB)())
                }), [U, $]);
                var ue, ce, se, de = (null == H ? void 0 : H.permanent) || "forevers" === (null == H ? void 0 : H.durationType) || "permanent" === (null == H ? void 0 : H.listingType),
                    me = (null == b ? void 0 : b.permanent) || "forevers" === (null == b ? void 0 : b.purchaseDurationType) || "permanent" === (null == H ? void 0 : H.listingType),
                    pe = x.useMemo((function() {
                        var e, n;
                        return [null == H || null === (e = H.products) || void 0 === e ? void 0 : e.some((function(e) {
                            return e.groupAccess
                        })), null == H || null === (n = H.products) || void 0 === n ? void 0 : n.some((function(e) {
                            return e.groupAccessRemove
                        }))]
                    }), [H]),
                    fe = (0, i.Z)(pe, 2),
                    ge = fe[0],
                    ve = fe[1],
                    he = x.useMemo((function() {
                        return (G.selectedPurchaseQuantity || 1) * ((null == oe ? void 0 : oe.unitPriceTokens) || (null == H ? void 0 : H.priceTokens))
                    }), [G.selectedPurchaseQuantity, oe, H]),
                    ye = x.useMemo((function() {
                        return ae ? 0 : he
                    }), [ae, he]),
                    Ee = ge && !le,
                    be = !ge && !le,
                    we = de ? "Buy" : "Subscribe",
                    xe = b ? w()(b.purchaseEndDate) : void 0,
                    Te = null == xe ? void 0 : xe.diff(F, "months", !0),
                    ke = null == xe ? void 0 : xe.diff(F, "days", !0),
                    Me = b && Te <= 1 ? "Immediately" : "Subscription",
                    Ce = ke < 0,
                    Ie = ie || be || !Y || !O,
                    Pe = function() {
                        var e = (0, r.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Q({
                                            currentUserId: q.id,
                                            listingId: H.id,
                                            listing: H,
                                            purchase: b
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
                    Re = b ? de || me ? "You own this!" : Ce ? ie && !le ? "This group is full!" : !Ee && Y ? "You need to be a member of the group to buy this." : "This subscription has expired!" : "You're subscribed! Expires ".concat(w()(b.purchaseEndDate).format("MMMM D YYYY [at] h:mm A")) : ie && !le ? "This group is full!" : !Ee && Y ? "You need to be a member of the group to buy this." : Ie ? "You need to accept the Tilia Terms of Service to buy this." : void 0,
                    Ye = b ? de || me ? "You own this!" : x.createElement(x.Fragment, null, "Renew Subscription") : x.createElement(x.Fragment, null, we, x.createElement("br", null), "Buy" === we ? "for " : "Starting from ", x.createElement(f.b5, null), H.priceTokens.toLocaleString());
                return x.createElement(x.Fragment, null, z && x.createElement(f.qX, {
                    type: "error",
                    title: "Listing Error"
                }, x.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (l = null === (m = J.data) || void 0 === m ? void 0 : m.error.message) && void 0 !== l ? l : "Unknown error"), g ? x.createElement("small", null, "Listing ID: ", g.id) : x.createElement("small", null, "Listing ID: ", null == b ? void 0 : b.listingId)), V && !z && x.createElement(P, {
                    key: S,
                    height: "12rem",
                    delay: 50 * S,
                    radius: 8
                }), !z && !V && x.createElement(f.x7, null, x.createElement(f.pw, {
                    alt: H.displayName,
                    imageId: H.imageId,
                    fallbackSrc: k
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
                })[ce] ? x.createElement(E.DR, {
                    bgColor: se[ce].bgColor
                }, x.createElement(f.$1, {
                    icon: se[ce].icon
                }), " ", se[ce].label) : null), " ", b ? ke <= 10 ? x.createElement(E.DR, {
                    bgColor: "#A53D29"
                }, x.createElement(f.$1, {
                    icon: u.faCircleExclamation
                }), " ", Ce ? x.createElement(x.Fragment, null, "Expired!") : x.createElement(x.Fragment, null, "Expires Soon!")) : x.createElement(E.DR, {
                    bgColor: "#575757"
                }, x.createElement(f.$1, {
                    icon: o.B2
                }), " Expires ", w()(b.purchaseEndDate).format("MMM YYYY")) : null !== (ue = H.listingVariants) && void 0 !== ue && ue.some((function(e) {
                    return !0 === e.sellerVariant
                })) ? x.createElement(E.DR, {
                    bgColor: "#6F42C1"
                }, x.createElement(f.$1, {
                    icon: a.th
                }), " Volume Discount") : null), x.createElement("p", null, H.description)), x.createElement(D, {
                    flexDirection: "column",
                    containerType: "listing"
                }, x.createElement(f.zx, {
                    disabled: b ? de || !re || !O || be : Ie,
                    title: Re,
                    onClick: function() {
                        A(re, re ? {
                            listing: H,
                            purchase: b,
                            group: te,
                            totalPrice: ye,
                            tiliaTokenBalance: R,
                            tiliaTosAccepted: Y,
                            includesGroupAccess: ge,
                            includesGroupAccessRemove: ve,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: H,
                            purchase: b,
                            group: te,
                            totalPrice: ye,
                            tiliaTokenBalance: R,
                            tiliaTosAccepted: Y,
                            quantity: 1,
                            includesGroupAccess: ge,
                            includesGroupAccessRemove: ve
                        })
                    },
                    containerStyles: "width: fit-content"
                }, Ye), b && !de && re ? x.createElement(f.zx, {
                    neutral: "true",
                    disabled: N.isLoading || !O,
                    hidden: Ce,
                    onClick: function() {
                        return Pe()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Me) : null)))
            };
            var P = (0, l.Z)(f.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                R = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                Y = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                D = (0, l.Z)(f.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && Y
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", g.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && R
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
                u = t(67294),
                c = t(27484),
                s = t.n(c),
                d = t(14411),
                m = t(32981),
                p = t(67263),
                f = t(66736),
                g = t(64258),
                v = t(73647);
            const h = function() {
                var e = (0, m.I0)(),
                    n = (0, m.v9)((function(e) {
                        return e.listingRow.currentUserId
                    })),
                    t = (0, m.v9)((function(e) {
                        return e.listingRow.listingId
                    })),
                    a = (0, m.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    c = (0, m.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    h = (0, m.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    y = (0, m.v9)((function(e) {
                        return e.listingRow.modals.cancellation.showCancellationConfirm
                    })),
                    E = (0, m.v9)((function(e) {
                        return e.listingRow.modals.cancellation.newExpirationDate
                    })),
                    b = (0, m.v9)((function(e) {
                        return e.listingRow.modals.cancellation.cancelImmediately
                    })),
                    w = c ? s()(c.purchaseEndDate) : void 0,
                    x = null == w ? void 0 : w.diff(s()(), "months", !0),
                    T = (0, f.x)(),
                    k = (0, i.Z)(T, 2),
                    M = k[0],
                    C = k[1],
                    I = C.data,
                    P = C.isLoading,
                    R = C.isError;
                u.useEffect((function() {
                    h.isOpen && D()
                }), [h.isOpen]);
                var Y = function() {
                        e((0, v.gd)())
                    },
                    D = function() {
                        var i = (0, r.Z)(o().mark((function r() {
                            var i, u, s, d;
                            return o().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = c && x <= 1, e((0, v.yR)(i)), r.prev = 2, r.next = 5, M({
                                            buyerId: n,
                                            listingId: t,
                                            reason: "user cancellation",
                                            immediate: i,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        u = r.sent, h.newExpirationDate !== u.newExpiryDate && e((0, v.C0)(u.newExpiryDate)), r.next = 13;
                                        break;
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2), e((0, g.d)({
                                            title: "Failed to preview cancellation ".concat(a.id, " for ").concat(n),
                                            icon: l.eH,
                                            message: null !== (s = null === (d = r.t0.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message) && void 0 !== s ? s : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, v.gd)());
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
                    S = function() {
                        var i = (0, r.Z)(o().mark((function r() {
                            var i, u;
                            return o().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, M({
                                            buyerId: n,
                                            listingId: t,
                                            reason: "user cancellation",
                                            immediate: h.cancelImmediately,
                                            isPreview: !1
                                        }).unwrap();
                                    case 3:
                                        e((0, v.J6)(!0)), r.next = 10;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), e((0, g.d)({
                                            title: "Failed to cancel ".concat(a.id, " for ").concat(n),
                                            icon: l.eH,
                                            message: null !== (i = null === (u = r.t0.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, v.al)(!0));
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
                var Q = y && R ? u.createElement(d.qX, {
                    type: "error",
                    title: "Cancellation Unsuccessful"
                }, "Your subscription cannot be cancelled, please try again later.") : y && !R ? u.createElement(d.qX, {
                    type: "success",
                    title: "Cancellation Successful"
                }, "Your subscription has been cancelled successfully!") : u.createElement(u.Fragment, null, u.createElement("p", null, "Are you sure you want to cancel your subscription?"));
                return u.createElement(d.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: h.isOpen,
                    confirmText: y ? "Done" : "Confirm",
                    confirmCallback: y ? Y : S,
                    cancelCallback: Y,
                    hideCancel: y,
                    size: "lg",
                    isLoading: P
                }, u.createElement(u.Fragment, null, Q, h.isOpen && a && u.createElement(d.x7, null, u.createElement(d.pw, {
                    alt: a.displayName,
                    imageId: a.imageId,
                    fallbackSrc: p
                }), u.createElement(d.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, u.createElement(d.X3, null, a.displayName), u.createElement("p", null, a.description))), x > 1 && !y && I ? u.createElement("p", null, u.createElement("big", null, u.createElement("b", null, "Total Refund: ", u.createElement(d.b5, null), null == I ? void 0 : I.totalRefundable)), " ", "Your new expiration date will be ", s()(null == I ? void 0 : I.newExpiryDate).format("MMMM D, YYYY"), u.createElement("br", null), u.createElement(d.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded."), u.createElement(d.XZ, {
                    id: "cancellationCheck",
                    label: " I want to cancel it immediately",
                    checked: b,
                    onChange: function() {
                        e((0, v.yR)(!h.cancelImmediately))
                    }
                }), u.createElement(d.hh, null, "This will change your expiration of the current month to today. The total refund will remain the same.")) : c && !I ? u.createElement("p", null, "This will change your current subscription expiration from ", s()(null == c ? void 0 : c.purchaseEndDate).format("MMMM D, YYYY"), " to ", b ? "today" : s()(E).format("MMMM D, YYYY"), ".") : u.createElement("p", null, "This will change your current subscription expiration to  ", b ? "today" : s()(E).format("MMMM D, YYYY"), ".")))
            }
        },
        7701: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(15861),
                i = t(54546),
                l = t(95693),
                a = t(5945),
                o = t(20495),
                u = t(64687),
                c = t.n(u),
                s = t(14411),
                d = t(67263),
                m = t(95896),
                p = t(66736),
                f = t(73647),
                g = t(60006),
                v = t(27484),
                h = t.n(v),
                y = t(67294),
                E = t(32981);
            const b = function(e) {
                var n, t, u, v, b = e.groupData,
                    w = (0, E.I0)(),
                    x = h()(),
                    T = (0, E.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    k = (0, E.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    M = !(null == k || null === (n = k.myMember) || void 0 === n || !n.userId) && (null == k ? void 0 : k.ownerId) === (null == k || null === (t = k.myMember) || void 0 === t ? void 0 : t.userId),
                    C = (0, E.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    I = M ? 0 : (0, E.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    P = (0, E.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    R = (0, E.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    Y = (0, E.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    D = C ? h()(C.purchaseEndDate) : void 0,
                    S = null == D ? void 0 : D.diff(x, "days", !0),
                    Q = S < 0,
                    A = (null == T ? void 0 : T.permanent) || "forevers" === (null == T ? void 0 : T.durationType),
                    O = A ? "Buy" : "Subscribe",
                    L = P < I,
                    F = !(null == k || !k.myMember),
                    q = Y.includesGroupAccess && !F,
                    X = !A && Y.includesGroupAccessRemove && !F,
                    B = q && (null == k ? void 0 : k.rules),
                    V = (0, p.I8)(),
                    Z = (0, i.Z)(V, 2),
                    N = Z[0],
                    G = Z[1],
                    $ = (G.isLoading, G.isError, G.error, y.useMemo((function() {
                        var e;
                        return R.selectedPurchaseQuantity ? null === (e = T.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= R.selectedPurchaseQuantity
                        })) : null
                    }), [R.selectedPurchaseQuantity, T])),
                    U = y.useMemo((function() {
                        return (R.selectedPurchaseQuantity || 1) * ((null == $ ? void 0 : $.unitPriceTokens) || (null == T ? void 0 : T.priceTokens))
                    }), [R.selectedPurchaseQuantity, $, T]);
                y.useEffect((function() {
                    w((0, f.m1)(I)), w((0, f.OT)(U <= m.A1))
                }), [I]);
                var W = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, N({
                                        listingId: T.id,
                                        listingVariantId: null == $ ? void 0 : $.listingVariantId,
                                        quantity: R.selectedPurchaseQuantity,
                                        totalPrice: 0 === I ? void 0 : I,
                                        contextData: {
                                            locationType: m.G0.GROUP,
                                            storeId: null == b ? void 0 : b.storeId,
                                            groupId: null == b ? void 0 : b.id
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

                function _() {
                    var e;
                    return C ? S <= 10 ? y.createElement(g.DR, {
                        bgColor: "#A53D29"
                    }, y.createElement(s.$1, {
                        icon: o.faCircleExclamation
                    }), " ", Q ? y.createElement(y.Fragment, null, "Expired!") : y.createElement(y.Fragment, null, "Expires Soon!")) : y.createElement(g.DR, {
                        bgColor: "#575757"
                    }, y.createElement(s.$1, {
                        icon: a.B2
                    }), " Expires ", h()(C.purchaseEndDate).format("MMM YYYY")) : (null === (e = T.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? y.createElement(g.DR, {
                        bgColor: "#6F42C1"
                    }, y.createElement(s.$1, {
                        icon: l.th
                    }), " Volume Discount") : null
                }
                return y.useEffect((function() {
                    w((0, f.jg)(void 0 === R.selectedPurchaseQuantity || R.selectedPurchaseQuantity > 0 && R.selectedPurchaseQuantity === Number(R.enteredPurchaseQuantity) && R.selectedPurchaseQuantity <= m.b_))
                }), [R.selectedPurchaseQuantity]), y.createElement(s.sm, {
                    headerText: "Confirm ".concat(A ? "Purchase" : "Subscription"),
                    isOpen: Y.isOpen,
                    isLoading: Y.isLoading,
                    confirmText: y.createElement(y.Fragment, null, O, " for ", y.createElement(s.b5, null), I.toLocaleString()),
                    confirmCallback: W,
                    confirmDisabled: L || !R.isQuantityValid || !R.isTotalPriceValid,
                    cancelCallback: function() {
                        w((0, f.gd)())
                    },
                    size: "lg"
                }, Y.isError && y.createElement(s.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = Y.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), y.createElement(s.x7, null, y.createElement(s.pw, {
                    alt: T.displayName || "",
                    imageId: T.imageId,
                    fallbackSrc: d
                }), y.createElement(s.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, y.createElement(s.X3, null, T.displayName, " ", y.createElement(_, null)), y.createElement("p", null, T.description), (null === (v = T.products) || void 0 === v ? void 0 : v.length) > 1 && y.createElement(y.Fragment, null, y.createElement("p", null, A ? "Purchasing" : "Subscribing", " grants access to the following items:"), y.createElement("ul", null, T.products.map((function(e) {
                    return y.createElement("li", {
                        key: e.id
                    }, y.createElement("strong", null, e.displayName))
                })))))), q && y.createElement("p", null, A ? "Purchasing" : "Subscribing", " will add you to this group."), B && y.createElement(y.Fragment, null, y.createElement("p", null, "By joining, you agree to the group's rules."), y.createElement(s.zx, {
                    onClick: function() {
                        return w((0, f.oM)(k))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !A && y.createElement("p", null, "This purchase will expire in ", C && "an additional ", R.selectedPurchaseQuantity * T.duration, " ", R.selectedPurchaseQuantity * T.duration == 1 ? T.durationType.replace(/s$/, "") : T.durationType, ", on", " ", h()(null == C ? void 0 : C.purchaseEndDate).add(R.selectedPurchaseQuantity * T.duration, T.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), X && y.createElement("p", null, "Once this expires, you will be removed from the group."), L && y.createElement(s.qX, {
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
                l = t(67294),
                a = t(14411),
                o = t(32981),
                u = t(27484),
                c = t.n(u),
                s = t(50048),
                d = t(95896),
                m = t(73647);
            t(63221);
            const p = function() {
                var e, n, t, i = (0, o.I0)(),
                    u = (0, o.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    s = (0, o.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    p = (0, o.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    f = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.showCustomDuration
                    })),
                    g = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.selectedPurchaseQuantity
                    })),
                    h = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.enteredPurchaseQuantity
                    })),
                    y = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.isQuantityValid
                    })),
                    E = null !== (e = (0, o.v9)((function(e) {
                        return e.listingRow.listing.stackable
                    }))) && void 0 !== e && e,
                    b = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    })),
                    w = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    x = [1].concat((0, r.Z)(d.PN)),
                    T = !(null == u || null === (n = u.myMember) || void 0 === n || !n.userId) && (null == u ? void 0 : u.ownerId) === (null == u || null === (t = u.myMember) || void 0 === t ? void 0 : t.userId),
                    k = l.useMemo((function() {
                        var e;
                        if (g) return null === (e = s.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= g
                        }))
                    }), [g, s]),
                    M = l.useMemo((function() {
                        return (g || 1) * ((null == k ? void 0 : k.unitPriceTokens) || (null == s ? void 0 : s.priceTokens))
                    }), [g, k, s]),
                    C = l.useMemo((function() {
                        return T ? 0 : M
                    }), [T, M]);
                (0, l.useEffect)((function() {
                    i((0, m.m1)(C)), i((0, m.OT)(M <= d.A1))
                }), [C]);
                var I = l.useMemo((function() {
                        var e, n = (null == s || null === (e = s.listingVariants) || void 0 === e ? void 0 : e.reduce((function(e, n) {
                            return e[n.quantity] = n, e
                        }), [])) || [];
                        return x.forEach((function(e) {
                            if (!n[e]) {
                                var t, r = (null === (t = n.findLast((function(n) {
                                    return (null == n ? void 0 : n.quantity) && (null == n ? void 0 : n.quantity) <= e
                                }))) || void 0 === t ? void 0 : t.unitPriceTokens) || (null == s ? void 0 : s.priceTokens);
                                n[e] = {
                                    quantity: e,
                                    unitPriceTokens: r
                                }
                            }
                        })), n
                    }), [s]),
                    P = l.useMemo((function() {
                        var e;
                        if (!E) return 1;
                        var n = null === (e = I.findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === e ? void 0 : e.unitPriceTokens,
                            t = Math.floor(d.A1 / n);
                        return Math.min(t, d.b_)
                    }), [E, I]);
                return (0, l.useEffect)((function() {
                    i((0, m.jg)(void 0 === g || g >= 1 && g.toString(10) === h && g <= d.b_))
                }), [g]), l.createElement(a.sm, {
                    headerText: f ? "Custom Subscription" : "".concat(p ? "Update" : "Add", " Subscription"),
                    isOpen: w.isOpen,
                    confirmText: f ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        w.showCustomDuration ? i((0, m.Uo)()) : i((0, m.Xe)())
                    },
                    confirmDisabled: f && (!y || !b),
                    cancelCallback: function() {
                        i((0, m.gd)())
                    }
                }, l.createElement("center", null, l.createElement("p", null, "Choose the subscription duration to add for"), l.createElement(a.X3, null, s.displayName), p && l.createElement(l.Fragment, null, l.createElement("p", null, "Your current subscription expires ", c()(p.purchaseEndDate).format("MMMM D YYYY [at] h:mm A")))), f ? l.createElement(a.JX, {
                    className: "align-items-center"
                }, l.createElement(a.X2, {
                    className: "align-items-center"
                }, l.createElement("label", {
                    className: "d-flex align-items-center"
                }, s.durationType.slice(0, 1).toUpperCase(), g * s.duration == 1 ? s.durationType.slice(1).replace(/s$/, "") : s.durationType.slice(1), ":", l.createElement(a.II, {
                    type: "number",
                    className: "mx-2",
                    value: h,
                    onChange: function(e) {
                        return i((0, m.c8)(e.target.value.slice(0, d.b_.toString(10).length)))
                    },
                    min: s.duration,
                    step: s.duration,
                    max: P
                })), l.createElement("small", null, l.createElement("span", {
                    style: {
                        color: b ? "inherit" : "var(--red)"
                    }
                }, l.createElement(a.b5, null), C.toLocaleString()), ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) < s.priceTokens && l.createElement(l.Fragment, null, l.createElement("br", null), l.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) / s.priceTokens * 100), "%")))), (!y || !b) && l.createElement(a.X2, {
                    className: "align-items-center"
                }, l.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !b && l.createElement(l.Fragment, null, "The total must be within the transaction limit of ", l.createElement(a.b5, null), d.A1.toLocaleString(), ".")))) : l.createElement(v, {
                    containerType: "purchase"
                }, I.map((function(e) {
                    var n = e.quantity,
                        t = e.unitPriceTokens,
                        r = n * s.duration;
                    return l.createElement(a.zx, {
                        key: n,
                        onClick: function() {
                            return i((0, m.BW)({
                                quantity: n,
                                totalPrice: T ? 0 : r * t
                            }))
                        }
                    }, r.toLocaleString(), " ", 1 === r ? s.durationType.replace(/s$/, "") : s.durationType, l.createElement("br", null), l.createElement(a.b5, null), (r * t).toLocaleString(), t < s.priceTokens && l.createElement("small", {
                        style: {
                            color: "var(--yellow)"
                        }
                    }, l.createElement("br", null), "Save ", Math.floor(100 - t / s.priceTokens * 100), "%"))
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
                }), " &>", s.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && f
                }), " font-weight:500;line-height:normal;&>", s.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        77708: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(67294),
                i = t(14411),
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
//# sourceMappingURL=471bf0b7dd7c09a5bc2a82934357b2ac2bec9d35f8358945dbd7c587be28aba2.js.map