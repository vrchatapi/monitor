"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896], {
        68791: (e, n, t) => {
            t.d(n, {
                Z: () => k
            });
            var r = t(15861),
                i = t(54546),
                l = t(4965),
                a = t(95693),
                o = t(5945),
                u = t(20495),
                c = t(64687),
                s = t.n(c),
                d = t(34226),
                m = t(50048),
                p = t(22202),
                f = t(93261),
                g = t(16869),
                v = t(60006),
                h = t(27484),
                y = t.n(h),
                E = t(67294),
                w = t(32981),
                b = t(67263),
                x = t(73647),
                T = t(63221);
            const k = function(e) {
                var n, t, l, c, m = e.listing,
                    h = e.purchase,
                    k = e.group,
                    C = e.tiliaTokenBalance,
                    P = e.tiliaTosAccepted,
                    Y = e.index,
                    I = e.onCancel,
                    D = e.onPurchase,
                    S = e.economyOnline,
                    Q = (0, w.I0)(),
                    A = y()(),
                    F = (0, p.XC)().data,
                    O = E.useState(!0),
                    q = (0, i.Z)(O, 2),
                    L = q[0],
                    X = q[1],
                    B = (0, w.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    V = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    Z = (0, w.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    N = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    G = (0, g.mr)({
                        listingId: null == h ? void 0 : h.listingId,
                        hydrate: !0
                    }, {
                        skip: !!m,
                        refetchOnMountOrArgChange: !0
                    }),
                    $ = G.data,
                    U = G.isLoading,
                    W = G.isError,
                    _ = G.error,
                    j = m || $,
                    z = (0, f.r5)({
                        groupId: null == j ? void 0 : j.groupId
                    }, {
                        skip: !!k || !j,
                        refetchOnMountOrArgChange: !0
                    }),
                    J = z.data,
                    H = z.isLoading,
                    K = (z.isError, z.error, k || J),
                    ee = null == j ? void 0 : j.stackable,
                    ne = (null == K ? void 0 : K.memberCount) >= T.qH,
                    te = !(null == K || !K.myMember),
                    re = !(null == K || null === (n = K.myMember) || void 0 === n || !n.userId) && (null == K ? void 0 : K.ownerId) === (null == K || null === (t = K.myMember) || void 0 === t ? void 0 : t.userId);
                E.useEffect((function() {
                    j && K && !U && !H && X(!1)
                }), [j, K, U, H]), E.useEffect((function() {
                    V.enteredPurchaseQuantity && Q((0, x.tE)(parseInt(V.enteredPurchaseQuantity, 10)))
                }), [V.enteredPurchaseQuantity]);
                var ie = E.useMemo((function() {
                    var e, n;
                    if (V.selectedPurchaseQuantity && (null == j || null === (e = j.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (n = j.listingVariants) || void 0 === n ? void 0 : n.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= V.selectedPurchaseQuantity
                    }))
                }), [V.selectedPurchaseQuantity, j]);
                E.useEffect((function() {
                    !N && Z && Q((0, x.gB)())
                }), [N, Z]);
                var le = (null == j ? void 0 : j.permanent) || "forevers" === (null == j ? void 0 : j.durationType),
                    ae = (null == h ? void 0 : h.permanent) || "forevers" === (null == h ? void 0 : h.purchaseDurationType),
                    oe = E.useMemo((function() {
                        var e, n;
                        return [null == j || null === (e = j.products) || void 0 === e ? void 0 : e.some((function(e) {
                            return e.groupAccess
                        })), null == j || null === (n = j.products) || void 0 === n ? void 0 : n.some((function(e) {
                            return e.groupAccessRemove
                        }))]
                    }), [j]),
                    ue = (0, i.Z)(oe, 2),
                    ce = ue[0],
                    se = ue[1],
                    de = E.useMemo((function() {
                        return (V.selectedPurchaseQuantity || 1) * ((null == ie ? void 0 : ie.unitPriceTokens) || (null == j ? void 0 : j.priceTokens))
                    }), [V.selectedPurchaseQuantity, ie, j]),
                    me = E.useMemo((function() {
                        return re ? 0 : de
                    }), [re, de]),
                    pe = ce && !te,
                    fe = !ce && !te,
                    ge = le ? "Buy" : "Subscribe",
                    ve = h ? y()(h.purchaseEndDate) : void 0,
                    he = null == ve ? void 0 : ve.diff(A, "months", !0),
                    ye = null == ve ? void 0 : ve.diff(A, "days", !0),
                    Ee = h && he <= 1 ? "Immediately" : "Subscription",
                    we = ye < 0,
                    be = ne || fe || !P || !S,
                    xe = function() {
                        var e = (0, r.Z)(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        I({
                                            currentUserId: F.id,
                                            listingId: j.id,
                                            listing: j,
                                            purchase: h
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
                    Te = h ? le || ae ? "You own this!" : we ? ne && !te ? "This group is full!" : !pe && P ? "You need to be a member of the group to buy this." : "This subscription has expired!" : "You're subscribed! Expires ".concat(y()(h.purchaseEndDate).format("MMMM D YYYY [at] h:mm A")) : ne && !te ? "This group is full!" : !pe && P ? "You need to be a member of the group to buy this." : be ? "You need to accept the Tilia Terms of Service to buy this." : void 0,
                    ke = h ? le || ae ? "You own this!" : E.createElement(E.Fragment, null, "Renew Subscription") : E.createElement(E.Fragment, null, ge, E.createElement("br", null), "Buy" === ge ? "for " : "Starting from ", E.createElement(d.b5, null), j.priceTokens.toLocaleString());

                function Me() {
                    var e;
                    return h ? ye <= 10 ? E.createElement(v.DR, {
                        bgColor: "#A53D29"
                    }, E.createElement(d.$1, {
                        icon: u.faCircleExclamation
                    }), " ", we ? E.createElement(E.Fragment, null, "Expired!") : E.createElement(E.Fragment, null, "Expires Soon!")) : E.createElement(v.DR, {
                        bgColor: "#575757"
                    }, E.createElement(d.$1, {
                        icon: o.B2
                    }), " Expires ", y()(h.purchaseEndDate).format("MMM YYYY")) : null !== (e = j.listingVariants) && void 0 !== e && e.some((function(e) {
                        return !0 === e.sellerVariant
                    })) ? E.createElement(v.DR, {
                        bgColor: "#6F42C1"
                    }, E.createElement(d.$1, {
                        icon: a.th
                    }), " Volume Discount") : null
                }
                return E.createElement(E.Fragment, null, W && E.createElement(d.qX, {
                    type: "error",
                    title: "Listing Error"
                }, "Error looking up listing information: ", null !== (l = null === (c = _.data) || void 0 === c ? void 0 : c.error.message) && void 0 !== l ? l : "Unknown error"), L ? E.createElement(M, {
                    key: Y,
                    height: "12rem",
                    delay: 50 * Y,
                    radius: 8
                }) : E.createElement(E.Fragment, null, E.createElement(d.x7, null, E.createElement(d.pw, {
                    alt: j.displayName,
                    imageId: j.imageId,
                    fallbackSrc: b
                }), E.createElement(d.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, E.createElement(d.X3, null, j.displayName, " ", E.createElement(Me, null)), E.createElement("p", null, j.description)), E.createElement(R, {
                    flexDirection: "column",
                    containerType: "listing"
                }, E.createElement(d.zx, {
                    disabled: h ? le || !ee || !S || fe : be,
                    title: Te,
                    onClick: function() {
                        D(ee, ee ? {
                            listing: j,
                            purchase: h,
                            group: K,
                            totalPrice: me,
                            tiliaTokenBalance: C,
                            tiliaTosAccepted: P,
                            includesGroupAccess: ce,
                            includesGroupAccessRemove: se,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: j,
                            purchase: h,
                            group: K,
                            totalPrice: me,
                            tiliaTokenBalance: C,
                            tiliaTosAccepted: P,
                            quantity: 1,
                            includesGroupAccess: ce,
                            includesGroupAccessRemove: se
                        })
                    },
                    containerStyles: "width: fit-content"
                }, ke), h && !le && ee ? E.createElement(d.zx, {
                    neutral: "true",
                    disabled: B.isLoading || !S,
                    hidden: we,
                    onClick: function() {
                        return xe()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Ee) : null))))
            };
            var M = (0, l.Z)(d.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                C = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                P = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                R = (0, l.Z)(d.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && P
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", m.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && C
                }), " font-weight:500;line-height:normal;&>", m.Sn, "{", (function(e) {
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
                d = t(34226),
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
                    w = (0, m.v9)((function(e) {
                        return e.listingRow.modals.cancellation.cancelImmediately
                    })),
                    b = c ? s()(c.purchaseEndDate) : void 0,
                    x = null == b ? void 0 : b.diff(s()(), "months", !0),
                    T = (0, f.x)(),
                    k = (0, i.Z)(T, 2),
                    M = k[0],
                    C = k[1],
                    P = C.data,
                    R = C.isLoading,
                    Y = C.isError;
                u.useEffect((function() {
                    h.isOpen && D()
                }), [h.isOpen]);
                var I = function() {
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
                var Q = y && Y ? u.createElement(d.qX, {
                    type: "error",
                    title: "Cancellation Unsuccessful"
                }, "Your subscription cannot be cancelled, please try again later.") : y && !Y ? u.createElement(d.qX, {
                    type: "success",
                    title: "Cancellation Successful"
                }, "Your subscription has been cancelled successfully!") : u.createElement(u.Fragment, null, u.createElement("p", null, "Are you sure you want to cancel your subscription?"));
                return u.createElement(d.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: h.isOpen,
                    confirmText: y ? "Done" : "Confirm",
                    confirmCallback: y ? I : S,
                    cancelCallback: I,
                    hideCancel: y,
                    size: "lg",
                    isLoading: R
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
                }, u.createElement(d.X3, null, a.displayName), u.createElement("p", null, a.description))), x > 1 && !y && P ? u.createElement("p", null, u.createElement("big", null, u.createElement("b", null, "Total Refund: ", u.createElement(d.b5, null), null == P ? void 0 : P.totalRefundable)), " ", "Your new expiration date will be ", s()(null == P ? void 0 : P.newExpiryDate).format("MMMM D, YYYY"), u.createElement("br", null), u.createElement(d.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded."), u.createElement(d.XZ, {
                    id: "cancellationCheck",
                    label: " I want to cancel it immediately",
                    checked: w,
                    onChange: function() {
                        e((0, v.yR)(!h.cancelImmediately))
                    }
                }), u.createElement(d.hh, null, "This will change your expiration of the current month to today. The total refund will remain the same.")) : c && !P ? u.createElement("p", null, "This will change your current subscription expiration from ", s()(null == c ? void 0 : c.purchaseEndDate).format("MMMM D, YYYY"), " to ", w ? "today" : s()(E).format("MMMM D, YYYY"), ".") : u.createElement("p", null, "This will change your current subscription expiration to  ", w ? "today" : s()(E).format("MMMM D, YYYY"), ".")))
            }
        },
        7701: (e, n, t) => {
            t.d(n, {
                Z: () => w
            });
            var r = t(15861),
                i = t(54546),
                l = t(95693),
                a = t(5945),
                o = t(20495),
                u = t(64687),
                c = t.n(u),
                s = t(67294),
                d = t(27484),
                m = t.n(d),
                p = t(66736),
                f = t(34226),
                g = t(60006),
                v = t(32981),
                h = t(73647),
                y = t(67263),
                E = t(11976);
            const w = function() {
                var e, n, t, u, d = (0, v.I0)(),
                    w = m()(),
                    b = (0, v.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    x = (0, v.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    T = !(null == x || null === (e = x.myMember) || void 0 === e || !e.userId) && (null == x ? void 0 : x.ownerId) === (null == x || null === (n = x.myMember) || void 0 === n ? void 0 : n.userId),
                    k = (0, v.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    M = T ? 0 : (0, v.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    C = (0, v.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    P = (0, v.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    R = (0, v.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    Y = k ? m()(k.purchaseEndDate) : void 0,
                    I = null == Y ? void 0 : Y.diff(w, "days", !0),
                    D = I < 0,
                    S = (null == b ? void 0 : b.permanent) || "forevers" === (null == b ? void 0 : b.durationType),
                    Q = S ? "Buy" : "Subscribe",
                    A = C < M,
                    F = !(null == x || !x.myMember),
                    O = R.includesGroupAccess && !F,
                    q = !S && R.includesGroupAccessRemove && !F,
                    L = O && (null == x ? void 0 : x.rules),
                    X = (0, p.I8)(),
                    B = (0, i.Z)(X, 2),
                    V = B[0],
                    Z = B[1],
                    N = (Z.isLoading, Z.isError, Z.error, s.useMemo((function() {
                        var e;
                        return P.selectedPurchaseQuantity ? null === (e = b.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= P.selectedPurchaseQuantity
                        })) : null
                    }), [P.selectedPurchaseQuantity, b])),
                    G = s.useMemo((function() {
                        return (P.selectedPurchaseQuantity || 1) * ((null == N ? void 0 : N.unitPriceTokens) || (null == b ? void 0 : b.priceTokens))
                    }), [P.selectedPurchaseQuantity, N, b]);
                s.useEffect((function() {
                    d((0, h.m1)(M)), d((0, h.OT)(G <= E.A1))
                }), [M]);
                var $ = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, V({
                                        listingId: b.id,
                                        listingVariantId: null == N ? void 0 : N.listingVariantId,
                                        quantity: P.selectedPurchaseQuantity,
                                        totalPrice: 0 === M ? void 0 : M
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

                function U() {
                    var e;
                    return k ? I <= 10 ? s.createElement(g.DR, {
                        bgColor: "#A53D29"
                    }, s.createElement(f.$1, {
                        icon: o.faCircleExclamation
                    }), " ", D ? s.createElement(s.Fragment, null, "Expired!") : s.createElement(s.Fragment, null, "Expires Soon!")) : s.createElement(g.DR, {
                        bgColor: "#575757"
                    }, s.createElement(f.$1, {
                        icon: a.B2
                    }), " Expires ", m()(k.purchaseEndDate).format("MMM YYYY")) : (null === (e = b.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? s.createElement(g.DR, {
                        bgColor: "#6F42C1"
                    }, s.createElement(f.$1, {
                        icon: l.th
                    }), " Volume Discount") : null
                }
                return s.useEffect((function() {
                    d((0, h.jg)(void 0 === P.selectedPurchaseQuantity || P.selectedPurchaseQuantity > 0 && P.selectedPurchaseQuantity === Number(P.enteredPurchaseQuantity) && P.selectedPurchaseQuantity <= E.b_))
                }), [P.selectedPurchaseQuantity]), s.createElement(f.sm, {
                    headerText: "Confirm ".concat(S ? "Purchase" : "Subscription"),
                    isOpen: R.isOpen,
                    isLoading: R.isLoading,
                    confirmText: s.createElement(s.Fragment, null, Q, " for ", s.createElement(f.b5, null), M.toLocaleString()),
                    confirmCallback: $,
                    confirmDisabled: A || !P.isQuantityValid || !P.isTotalPriceValid,
                    cancelCallback: function() {
                        d((0, h.gd)())
                    },
                    size: "lg"
                }, R.isError && s.createElement(f.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (t = R.error) || void 0 === t || null === (t = t.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), s.createElement(f.x7, null, s.createElement(f.pw, {
                    alt: b.displayName || "",
                    imageId: b.imageId,
                    fallbackSrc: y
                }), s.createElement(f.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, s.createElement(f.X3, null, b.displayName, " ", s.createElement(U, null)), s.createElement("p", null, b.description), (null === (u = b.products) || void 0 === u ? void 0 : u.length) > 1 && s.createElement(s.Fragment, null, s.createElement("p", null, S ? "Purchasing" : "Subscribing", " grants access to the following items:"), s.createElement("ul", null, b.products.map((function(e) {
                    return s.createElement("li", {
                        key: e.id
                    }, s.createElement("strong", null, e.displayName))
                })))))), O && s.createElement("p", null, S ? "Purchasing" : "Subscribing", " will add you to this group."), L && s.createElement(s.Fragment, null, s.createElement("p", null, "By joining, you agree to the group's rules."), s.createElement(f.zx, {
                    onClick: function() {
                        return d((0, h.oM)(x))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !S && s.createElement("p", null, "This purchase will expire in ", k && "an additional ", P.selectedPurchaseQuantity * b.duration, " ", P.selectedPurchaseQuantity * b.duration == 1 ? b.durationType.replace(/s$/, "") : b.durationType, ", on", " ", m()(null == k ? void 0 : k.purchaseEndDate).add(P.selectedPurchaseQuantity * b.duration, b.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), q && s.createElement("p", null, "Once this expires, you will be removed from the group."), A && s.createElement(f.qX, {
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
                a = t(34226),
                o = t(32981),
                u = t(27484),
                c = t.n(u),
                s = t(50048),
                d = t(11976),
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
                    w = (0, o.v9)((function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    })),
                    b = (0, o.v9)((function(e) {
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
                var P = l.useMemo((function() {
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
                    R = l.useMemo((function() {
                        var e;
                        if (!E) return 1;
                        var n = null === (e = P.findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === e ? void 0 : e.unitPriceTokens,
                            t = Math.floor(d.A1 / n);
                        return Math.min(t, d.b_)
                    }), [E, P]);
                return (0, l.useEffect)((function() {
                    i((0, m.jg)(void 0 === g || g >= 1 && g.toString(10) === h && g <= d.b_))
                }), [g]), l.createElement(a.sm, {
                    headerText: f ? "Custom Subscription" : "".concat(p ? "Update" : "Add", " Subscription"),
                    isOpen: b.isOpen,
                    confirmText: f ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        b.showCustomDuration ? i((0, m.Uo)()) : i((0, m.Xe)())
                    },
                    confirmDisabled: f && (!y || !w),
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
                    max: R
                })), l.createElement("small", null, l.createElement("span", {
                    style: {
                        color: w ? "inherit" : "var(--red)"
                    }
                }, l.createElement(a.b5, null), C.toLocaleString()), ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) < s.priceTokens && l.createElement(l.Fragment, null, l.createElement("br", null), l.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) / s.priceTokens * 100), "%")))), (!y || !w) && l.createElement(a.X2, {
                    className: "align-items-center"
                }, l.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !w && l.createElement(l.Fragment, null, "The total must be within the transaction limit of ", l.createElement(a.b5, null), d.A1.toLocaleString(), ".")))) : l.createElement(v, {
                    containerType: "purchase"
                }, P.map((function(e) {
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
                i = t(34226),
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
//# sourceMappingURL=606ceffae4331b6b7da1b733618815ff645088410b425a6bc20c21093b41cea2.js.map