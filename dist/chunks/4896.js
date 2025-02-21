"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4896, 6869], {
        68791: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r = n(15861),
                i = n(54546),
                a = n(4965),
                l = n(95693),
                o = n(5945),
                u = n(20495),
                s = n(84176),
                c = n(22601),
                d = n(48602),
                m = n(64687),
                p = n.n(m),
                g = n(14411),
                f = n(50048),
                v = n(67263),
                y = n(22202),
                h = n(93261),
                b = n(16869),
                E = n(67978),
                w = n(60006),
                T = n(27484),
                x = n.n(T),
                I = n(67294),
                k = n(32981),
                P = n(73647),
                M = n(63221);
            const L = function(e) {
                var t, n, a, m, f = e.listing,
                    T = e.purchase,
                    L = e.group,
                    S = e.tiliaTokenBalance,
                    R = e.tiliaTosAccepted,
                    Y = e.index,
                    O = e.onCancel,
                    Q = e.onPurchase,
                    A = e.economyOnline,
                    F = (0, k.I0)(),
                    q = x()(),
                    U = (0, y.XC)().data,
                    V = I.useState(!0),
                    Z = (0, i.Z)(V, 2),
                    N = Z[0],
                    X = Z[1],
                    B = (0, k.v9)((function(e) {
                        return e.listingRow.modals.cancellation
                    })),
                    j = (0, k.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    G = (0, k.v9)((function(e) {
                        return e.listingRow.modals.rules.isOpen
                    })),
                    $ = (0, k.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    })),
                    z = (0, b.mr)({
                        listingId: null == T ? void 0 : T.listingId,
                        hydrate: !0
                    }, {
                        skip: !!f,
                        refetchOnMountOrArgChange: !0
                    }),
                    W = z.data,
                    _ = z.isLoading,
                    J = (z.isSuccess, z.isError),
                    H = z.error,
                    K = f || W,
                    ee = (0, h.r5)({
                        groupId: null == K ? void 0 : K.groupId
                    }, {
                        skip: !!L || !K
                    }),
                    te = ee.data,
                    ne = ee.isLoading,
                    re = (ee.isError, ee.error, (0, E.DM)({
                        listingId: null == K ? void 0 : K.id
                    }, {
                        skip: !K
                    })),
                    ie = re.data,
                    ae = (re.isLoading, re.isError, re.error, L || te),
                    le = null == K ? void 0 : K.stackable,
                    oe = (null == ae ? void 0 : ae.memberCount) >= M.qH,
                    ue = !(null == ae || !ae.myMember),
                    se = !(null == ae || null === (t = ae.myMember) || void 0 === t || !t.userId) && (null == ae ? void 0 : ae.ownerId) === (null == ae || null === (n = ae.myMember) || void 0 === n ? void 0 : n.userId);
                (0, I.useEffect)((function() {
                    K && ae && !_ && !ne && X(!1)
                }), [K, ae, _, ne]), (0, I.useEffect)((function() {
                    j.enteredPurchaseQuantity && F((0, P.tE)(parseInt(j.enteredPurchaseQuantity, 10)))
                }), [j.enteredPurchaseQuantity]);
                var ce = I.useMemo((function() {
                    var e, t;
                    if (j.selectedPurchaseQuantity && (null == K || null === (e = K.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (t = K.listingVariants) || void 0 === t ? void 0 : t.findLast((function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= j.selectedPurchaseQuantity
                    }))
                }), [j.selectedPurchaseQuantity, K]);
                (0, I.useEffect)((function() {
                    !$ && G && F((0, P.gB)())
                }), [$, G]);
                var de, me, pe, ge = (null == K ? void 0 : K.permanent) || "forevers" === (null == K ? void 0 : K.durationType) || "permanent" === (null == K ? void 0 : K.listingType),
                    fe = (null == T ? void 0 : T.permanent) || "forevers" === (null == T ? void 0 : T.purchaseDurationType) || "permanent" === (null == K ? void 0 : K.listingType),
                    ve = I.useMemo((function() {
                        if (!ie) return [!1, !1];
                        var e = ie.find((function(e) {
                            return "role" === e.productType
                        }));
                        return [null == e ? void 0 : e.groupAccess, null == e ? void 0 : e.groupAccessRemove]
                    }), [ie]),
                    ye = (0, i.Z)(ve, 2),
                    he = ye[0],
                    be = ye[1],
                    Ee = I.useMemo((function() {
                        return (j.selectedPurchaseQuantity || 1) * ((null == ce ? void 0 : ce.unitPriceTokens) || (null == K ? void 0 : K.priceTokens))
                    }), [j.selectedPurchaseQuantity, ce, K]),
                    we = I.useMemo((function() {
                        return se ? 0 : Ee
                    }), [se, Ee]),
                    Te = he && !ue,
                    xe = !he && !ue,
                    Ie = ge ? "Buy" : "Subscribe",
                    ke = T ? x()(T.subscriptionExpiry) : void 0,
                    Pe = null == ke ? void 0 : ke.diff(q, "months", !0),
                    Me = null == ke ? void 0 : ke.diff(q, "days", !0),
                    Le = T && Pe <= 1 ? "Immediately" : "Subscription",
                    Ce = Me < 0,
                    Se = oe || xe || !R || !A,
                    Re = function() {
                        var e = (0, r.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        O({
                                            currentUserId: U.id,
                                            listingId: K.id,
                                            listing: K,
                                            purchase: T
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
                    De = T ? ge || fe ? "You own this!" : Ce ? oe && !ue ? "This group is full!" : !Te && R ? "You need to be a member of the group to buy this." : "This subscription has expired!" : "You're subscribed! Expires ".concat(x()(T.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A")) : oe && !ue ? "This group is full!" : !Te && R ? "You need to be a member of the group to buy this." : Se ? "You need to accept the Tilia Terms of Service to buy this." : void 0,
                    Ye = T ? ge || fe ? "You own this!" : I.createElement(I.Fragment, null, "Renew Subscription") : I.createElement(I.Fragment, null, Ie, I.createElement("br", null), "Buy" === Ie ? "for " : "Starting from ", I.createElement(g.b5, null), K.priceTokens.toLocaleString());
                return I.createElement(I.Fragment, null, J && I.createElement(g.qX, {
                    className: "tw-mt-0 tw-mb-3",
                    type: "error",
                    title: "Listing Error"
                }, I.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (a = null === (m = H.data) || void 0 === m ? void 0 : m.error.message) && void 0 !== a ? a : "Unknown error"), f ? I.createElement("small", null, "Listing ID: ", f.id) : I.createElement("small", null, "Listing ID: ", null == T ? void 0 : T.listingId)), N && !J && I.createElement(C, {
                    key: Y,
                    height: "12rem",
                    delay: 50 * Y,
                    radius: 8
                }), !J && !N && I.createElement(g.x7, null, I.createElement(g.pw, {
                    alt: K.displayName,
                    imageId: K.imageId,
                    fallbackSrc: v,
                    fitToCover: !0
                }), I.createElement(g.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, I.createElement(g.X3, null, K.displayName, " ", (me = null == K ? void 0 : K.listingType, (pe = {
                    instant: {
                        bgColor: "#575757",
                        icon: d.YK,
                        label: "Instant"
                    },
                    duration: {
                        bgColor: "#575757",
                        icon: c.IB,
                        label: "Duration"
                    },
                    permanent: {
                        bgColor: "#575757",
                        icon: s.DD,
                        label: "Permanent"
                    }
                })[me] ? I.createElement(w.DR, {
                    bgColor: pe[me].bgColor
                }, I.createElement(g.$1, {
                    icon: pe[me].icon
                }), " ", pe[me].label) : null), " ", T ? Me <= 10 ? I.createElement(w.DR, {
                    bgColor: "#A53D29"
                }, I.createElement(g.$1, {
                    icon: u.faCircleExclamation
                }), " ", Ce ? I.createElement(I.Fragment, null, "Expired!") : I.createElement(I.Fragment, null, "Expires Soon!")) : I.createElement(w.DR, {
                    bgColor: "#575757"
                }, I.createElement(g.$1, {
                    icon: o.B2
                }), " Expires ", x()(T.subscriptionExpiry).format("MMM YYYY")) : null !== (de = K.listingVariants) && void 0 !== de && de.some((function(e) {
                    return !0 === e.sellerVariant
                })) ? I.createElement(w.DR, {
                    bgColor: "#6F42C1"
                }, I.createElement(g.$1, {
                    icon: l.th
                }), " Volume Discount") : null), I.createElement("p", null, K.description)), I.createElement(D, {
                    flexDirection: "column",
                    containerType: "listing"
                }, I.createElement(g.zx, {
                    disabled: T ? ge || !le || !A || xe : Se,
                    title: De,
                    onClick: function() {
                        Q(le, le ? {
                            listing: K,
                            purchase: T,
                            group: ae,
                            totalPrice: we,
                            tiliaTokenBalance: S,
                            tiliaTosAccepted: R,
                            includesGroupAccess: he,
                            includesGroupAccessRemove: be,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: K,
                            purchase: T,
                            group: ae,
                            totalPrice: we,
                            tiliaTokenBalance: S,
                            tiliaTosAccepted: R,
                            quantity: 1,
                            includesGroupAccess: he,
                            includesGroupAccessRemove: be
                        })
                    },
                    containerStyles: "width: fit-content"
                }, Ye), T && !ge && le ? I.createElement(g.zx, {
                    neutral: "true",
                    disabled: B.isLoading || !A,
                    hidden: Ce,
                    onClick: function() {
                        return Re()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Le) : null)))
            };
            var C = (0, a.Z)(g.UU, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                S = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                R = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                D = (0, a.Z)(g.X2, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && R
                }), " flex:1;align-items:flex-end;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", f.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && S
                }), " font-weight:500;line-height:normal;&>", f.Sn, "{", (function(e) {
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
                l = n(64687),
                o = n.n(l),
                u = n(64258),
                s = n(14411),
                c = n(67263),
                d = n(66736),
                m = n(73647),
                p = n(27484),
                g = n.n(p),
                f = n(67294),
                v = n(32981);
            const y = function() {
                var e = (0, v.I0)(),
                    t = (0, v.v9)((function(e) {
                        return e.listingRow.currentUserId
                    })),
                    n = (0, v.v9)((function(e) {
                        return e.listingRow.listingId
                    })),
                    l = (0, v.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    p = (0, v.v9)((function(e) {
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
                    w = p ? g()(p.subscriptionExpiry) : void 0,
                    T = null == w ? void 0 : w.diff(g()(), "months", !0),
                    x = (0, d.x)(),
                    I = (0, i.Z)(x, 2),
                    k = I[0],
                    P = I[1],
                    M = P.data,
                    L = P.isLoading,
                    C = P.isError;
                f.useEffect((function() {
                    y.isOpen && R()
                }), [y.isOpen]);
                var S = function() {
                        e((0, m.gd)())
                    },
                    R = function() {
                        var i = (0, r.Z)(o().mark((function r() {
                            var i, s, c, d;
                            return o().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = p && T <= 1, e((0, m.yR)(i)), r.prev = 2, r.next = 5, k({
                                            buyerId: t,
                                            listingId: n,
                                            reason: "user cancellation",
                                            immediate: i,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        s = r.sent, y.newExpirationDate !== s.newExpiryDate && e((0, m.C0)(s.newExpiryDate)), r.next = 13;
                                        break;
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2), e((0, u.d)({
                                            title: "Failed to preview cancellation ".concat(l.id, " for ").concat(t),
                                            icon: a.eH,
                                            message: null !== (c = null === (d = r.t0.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message) && void 0 !== c ? c : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, m.gd)());
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
                    D = function() {
                        var i = (0, r.Z)(o().mark((function r() {
                            var i, s;
                            return o().wrap((function(r) {
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
                                        e((0, m.J6)(!0)), r.next = 10;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), e((0, u.d)({
                                            title: "Failed to cancel ".concat(l.id, " for ").concat(t),
                                            icon: a.eH,
                                            message: null !== (i = null === (s = r.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, m.al)(!0));
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
                var Y = h && C ? f.createElement(s.qX, {
                    type: "error",
                    title: "Cancellation Unsuccessful"
                }, "Your subscription cannot be cancelled, please try again later.") : h && !C ? f.createElement(s.qX, {
                    type: "success",
                    title: "Cancellation Successful"
                }, "Your subscription has been cancelled successfully!") : f.createElement(f.Fragment, null, f.createElement("p", null, "Are you sure you want to cancel your subscription?"));
                return f.createElement(s.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: y.isOpen,
                    confirmText: h ? "Done" : "Confirm",
                    confirmCallback: h ? S : D,
                    cancelCallback: S,
                    hideCancel: h,
                    size: "lg",
                    isLoading: L
                }, f.createElement(f.Fragment, null, Y, y.isOpen && l && f.createElement(s.x7, null, f.createElement(s.pw, {
                    alt: l.displayName,
                    imageId: l.imageId,
                    fallbackSrc: c
                }), f.createElement(s.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, f.createElement(s.X3, null, l.displayName), f.createElement("p", null, l.description))), T > 1 && !h && M ? f.createElement(f.Fragment, null, f.createElement("p", null, f.createElement("big", null, f.createElement("b", null, "Total Refund: ", f.createElement(s.b5, null), null == M ? void 0 : M.totalRefundable)), " ", "Your new expiration date will be ", g()(null == M ? void 0 : M.newExpiryDate).format("MMMM D, YYYY"), f.createElement("br", null), f.createElement(s.hh, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded.")), f.createElement("p", null, f.createElement(s.XZ, {
                    id: "cancellationCheck",
                    label: " I want to remove my benefits immediately (Optional)",
                    checked: E,
                    onChange: function() {
                        e((0, m.yR)(!y.cancelImmediately))
                    }
                }), f.createElement(s.hh, null, "If you enable this option, your subscription and benefits end immediately. Your total refund will be the same."))) : p && !M ? f.createElement("p", null, "This will change your current subscription expiration from ", g()(null == p ? void 0 : p.subscriptionExpiry).format("MMMM D, YYYY"), " to ", E ? "today" : g()(b).format("MMMM D, YYYY"), ".") : f.createElement("p", null, "This will change your current subscription expiration to  ", E ? "today" : g()(b).format("MMMM D, YYYY"), ".")))
            }
        },
        7701: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(15861),
                i = n(54546),
                a = n(95693),
                l = n(5945),
                o = n(20495),
                u = n(64687),
                s = n.n(u),
                c = n(14411),
                d = n(98185),
                m = n(67263),
                p = n(95896),
                g = n(66736),
                f = n(67978),
                v = n(73647),
                y = n(60006),
                h = n(27484),
                b = n.n(h),
                E = n(67294),
                w = n(32981);
            const T = function(e) {
                var t, n, u, h = e.groupData,
                    T = (0, w.I0)(),
                    x = b()(),
                    I = (0, w.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    k = (0, w.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    P = !(null == k || null === (t = k.myMember) || void 0 === t || !t.userId) && (null == k ? void 0 : k.ownerId) === (null == k || null === (n = k.myMember) || void 0 === n ? void 0 : n.userId),
                    M = (0, w.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    L = P ? 0 : (0, w.v9)((function(e) {
                        return e.listingRow.totalPrice
                    })),
                    C = (0, w.v9)((function(e) {
                        return e.listingRow.tokenBalance
                    })),
                    S = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    R = (0, w.v9)((function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    })),
                    D = M ? b()(M.subscriptionExpiry) : void 0,
                    Y = null == D ? void 0 : D.diff(x, "days", !0),
                    O = Y < 0,
                    Q = (null == I ? void 0 : I.permanent) || "forevers" === (null == I ? void 0 : I.durationType),
                    A = Q ? "Buy" : "Subscribe",
                    F = C < L,
                    q = !(null == k || !k.myMember),
                    U = R.includesGroupAccess && !q,
                    V = !Q && R.includesGroupAccessRemove && !q,
                    Z = U && (null == k ? void 0 : k.rules),
                    N = (0, f.DM)({
                        listingId: I.id,
                        hydrateProducts: !0
                    }, {
                        skip: !I.id
                    }),
                    X = N.data,
                    B = N.isFetching,
                    j = (N.isError, N.error),
                    G = (0, g.I8)(),
                    $ = (0, i.Z)(G, 2),
                    z = $[0],
                    W = $[1],
                    _ = (W.isLoading, W.isError, W.error, E.useMemo((function() {
                        var e;
                        return S.selectedPurchaseQuantity ? null === (e = I.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= S.selectedPurchaseQuantity
                        })) : null
                    }), [S.selectedPurchaseQuantity, I])),
                    J = E.useMemo((function() {
                        return (S.selectedPurchaseQuantity || 1) * ((null == _ ? void 0 : _.unitPriceTokens) || (null == I ? void 0 : I.priceTokens))
                    }), [S.selectedPurchaseQuantity, _, I]);
                E.useEffect((function() {
                    T((0, v.m1)(L)), T((0, v.OT)(J <= p.A1))
                }), [L]);
                var H = function() {
                    var e = (0, r.Z)(s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, z({
                                        listingId: I.id,
                                        listingVariantId: null == _ ? void 0 : _.listingVariantId,
                                        quantity: S.selectedPurchaseQuantity,
                                        totalPrice: 0 === L ? void 0 : L,
                                        contextData: {
                                            locationType: p.G0.GROUP,
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
                    return M ? Y <= 10 ? E.createElement(y.DR, {
                        bgColor: "#A53D29"
                    }, E.createElement(c.$1, {
                        icon: o.faCircleExclamation
                    }), " ", O ? E.createElement(E.Fragment, null, "Expired!") : E.createElement(E.Fragment, null, "Expires Soon!")) : E.createElement(y.DR, {
                        bgColor: "#575757"
                    }, E.createElement(c.$1, {
                        icon: l.B2
                    }), " Expires ", b()(M.subscriptionExpiry).format("MMM YYYY")) : (null === (e = I.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? E.createElement(y.DR, {
                        bgColor: "#6F42C1"
                    }, E.createElement(c.$1, {
                        icon: a.th
                    }), " Volume Discount") : null
                }
                return E.useEffect((function() {
                    T((0, v.jg)(void 0 === S.selectedPurchaseQuantity || S.selectedPurchaseQuantity > 0 && S.selectedPurchaseQuantity === Number(S.enteredPurchaseQuantity) && S.selectedPurchaseQuantity <= p.b_))
                }), [S.selectedPurchaseQuantity]), E.createElement(c.sm, {
                    headerText: "Confirm ".concat(Q ? "Purchase" : "Subscription"),
                    isOpen: R.isOpen,
                    isLoading: R.isLoading,
                    confirmText: E.createElement(E.Fragment, null, A, " for ", E.createElement(c.b5, null), L.toLocaleString()),
                    confirmCallback: H,
                    confirmDisabled: F || !S.isQuantityValid || !S.isTotalPriceValid,
                    cancelCallback: function() {
                        T((0, v.gd)())
                    },
                    size: "lg"
                }, R.isError && E.createElement(c.qX, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = R.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), E.createElement(c.x7, null, E.createElement(c.pw, {
                    alt: I.displayName || "",
                    imageId: I.imageId,
                    fallbackSrc: m,
                    fitToCover: !0
                }), E.createElement(c.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, E.createElement(c.X3, null, I.displayName, " ", E.createElement(K, null)), E.createElement("p", null, I.description), E.createElement(d.Z, {
                    loading: B,
                    error: j
                }, (null == X ? void 0 : X.length) > 1 && !B && E.createElement(E.Fragment, null, E.createElement("p", null, Q ? "Purchasing" : "Subscribing", " grants access to the following items:"), E.createElement("ul", null, X.map((function(e) {
                    return E.createElement("li", {
                        key: e.id
                    }, E.createElement("strong", null, e.displayName))
                }))))))), U && E.createElement("p", null, Q ? "Purchasing" : "Subscribing", " will add you to this group."), Z && E.createElement(E.Fragment, null, E.createElement("p", null, "By joining, you agree to the group's rules."), E.createElement(c.zx, {
                    onClick: function() {
                        return T((0, v.oM)(k))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !Q && E.createElement("p", null, "This purchase will expire in ", M && "an additional ", S.selectedPurchaseQuantity * I.duration, " ", S.selectedPurchaseQuantity * I.duration == 1 ? I.durationType.replace(/s$/, "") : I.durationType, ", on", " ", b()(null == M ? void 0 : M.subscriptionExpiry).add(S.selectedPurchaseQuantity * I.duration, I.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), V && E.createElement("p", null, "Once this expires, you will be removed from the group."), F && E.createElement(c.qX, {
                    type: "error",
                    title: "Insufficient funds"
                }, "You don't have enough credits for this purchase. You can buy more inside VRChat."))
            }
        },
        50352: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(42138),
                i = n(4965),
                a = n(14411),
                l = n(50048),
                o = n(95896),
                u = n(73647),
                s = n(27484),
                c = n.n(s),
                d = n(67294),
                m = n(32981);
            const p = function() {
                var e, t, n, i = (0, m.I0)(),
                    l = (0, m.v9)((function(e) {
                        return e.listingRow.group
                    })),
                    s = (0, m.v9)((function(e) {
                        return e.listingRow.listing
                    })),
                    p = (0, m.v9)((function(e) {
                        return e.listingRow.purchase
                    })),
                    g = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.showCustomDuration
                    })),
                    f = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.selectedPurchaseQuantity
                    })),
                    y = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.enteredPurchaseQuantity
                    })),
                    h = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.isQuantityValid
                    })),
                    b = null !== (e = (0, m.v9)((function(e) {
                        return e.listingRow.listing.stackable
                    }))) && void 0 !== e && e,
                    E = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    })),
                    w = (0, m.v9)((function(e) {
                        return e.listingRow.modals.purchase
                    })),
                    T = [1].concat((0, r.Z)(o.PN)),
                    x = c()(null == p ? void 0 : p.subscriptionExpiry).isBefore(c()()),
                    I = !(null == l || null === (t = l.myMember) || void 0 === t || !t.userId) && (null == l ? void 0 : l.ownerId) === (null == l || null === (n = l.myMember) || void 0 === n ? void 0 : n.userId),
                    k = d.useMemo((function() {
                        var e;
                        if (f) return null === (e = s.listingVariants) || void 0 === e ? void 0 : e.findLast((function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= f
                        }))
                    }), [f, s]),
                    P = d.useMemo((function() {
                        return (f || 1) * ((null == k ? void 0 : k.unitPriceTokens) || (null == s ? void 0 : s.priceTokens))
                    }), [f, k, s]),
                    M = d.useMemo((function() {
                        return I ? 0 : P
                    }), [I, P]);
                (0, d.useEffect)((function() {
                    i((0, u.m1)(M)), i((0, u.OT)(P <= o.A1))
                }), [M]);
                var L = d.useMemo((function() {
                        var e, t = (null == s || null === (e = s.listingVariants) || void 0 === e ? void 0 : e.reduce((function(e, t) {
                            return e[t.quantity] = t, e
                        }), [])) || [];
                        return T.forEach((function(e) {
                            if (!t[e]) {
                                var n, r = (null === (n = t.findLast((function(t) {
                                    return (null == t ? void 0 : t.quantity) && (null == t ? void 0 : t.quantity) <= e
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || (null == s ? void 0 : s.priceTokens);
                                t[e] = {
                                    quantity: e,
                                    unitPriceTokens: r
                                }
                            }
                        })), t
                    }), [s]),
                    C = d.useMemo((function() {
                        var e;
                        if (!b) return 1;
                        var t = null === (e = L.findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === e ? void 0 : e.unitPriceTokens,
                            n = Math.floor(o.A1 / t);
                        return Math.min(n, o.b_)
                    }), [b, L]);
                return (0, d.useEffect)((function() {
                    i((0, u.jg)(void 0 === f || f >= 1 && f.toString(10) === y && f <= o.b_))
                }), [f]), d.createElement(a.sm, {
                    headerText: g ? "Custom Subscription" : "".concat(p ? "Update" : "Add", " Subscription"),
                    isOpen: w.isOpen,
                    confirmText: g ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        w.showCustomDuration ? i((0, u.Uo)()) : i((0, u.Xe)())
                    },
                    confirmDisabled: g && (!h || !E),
                    cancelCallback: function() {
                        i((0, u.gd)())
                    }
                }, d.createElement(a.JX, {
                    className: "tw-text-center tw-mb-5"
                }, d.createElement("p", null, "Choose the subscription duration to add for"), d.createElement(a.X3, null, s.displayName), p && !x && d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your current subscription expires ", c()(p.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A"))), g ? d.createElement(a.JX, {
                    className: "align-items-center"
                }, d.createElement(a.X2, {
                    className: "align-items-center"
                }, d.createElement("label", {
                    className: "d-flex align-items-center"
                }, s.durationType.slice(0, 1).toUpperCase(), f * s.duration == 1 ? s.durationType.slice(1).replace(/s$/, "") : s.durationType.slice(1), ":", d.createElement(a.II, {
                    type: "number",
                    className: "mx-2",
                    value: y,
                    onChange: function(e) {
                        return i((0, u.c8)(e.target.value.slice(0, o.b_.toString(10).length)))
                    },
                    min: s.duration,
                    step: s.duration,
                    max: C
                })), d.createElement("small", null, d.createElement("span", {
                    style: {
                        color: E ? "inherit" : "var(--red)"
                    }
                }, d.createElement(a.b5, null), M.toLocaleString()), ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) < s.priceTokens && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == k ? void 0 : k.unitPriceTokens) || s.priceTokens) / s.priceTokens * 100), "%")))), (!h || !E) && d.createElement(a.X2, {
                    className: "align-items-center"
                }, d.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !E && d.createElement(d.Fragment, null, "The total must be within the transaction limit of ", d.createElement(a.b5, null), o.A1.toLocaleString(), ".")))) : d.createElement(v, {
                    containerType: "purchase"
                }, L.map((function(e) {
                    var t = e.quantity,
                        n = e.unitPriceTokens,
                        r = t * s.duration;
                    return d.createElement(a.zx, {
                        key: t,
                        onClick: function() {
                            return i((0, u.BW)({
                                quantity: t,
                                totalPrice: I ? 0 : r * n
                            }))
                        }
                    }, r.toLocaleString(), " ", 1 === r ? s.durationType.replace(/s$/, "") : s.durationType, d.createElement("br", null), d.createElement(a.b5, null), (r * n).toLocaleString(), n < s.priceTokens && d.createElement("small", {
                        style: {
                            color: "var(--yellow)"
                        }
                    }, d.createElement("br", null), "Save ", Math.floor(100 - n / s.priceTokens * 100), "%"))
                }))))
            };
            var g = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                f = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                v = (0, i.Z)(a.X2, {
                    target: "e1570gix0"
                })("display:flex;flex-wrap:wrap;flex-direction:", (function(e) {
                    return e.flexDirection || "row"
                }), ";", (function(e) {
                    return "purchase" === e.containerType && f
                }), " flex:1 1 128px;", (function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }), " &>", l.Mt, "{", (function(e) {
                    return "purchase" === e.containerType && g
                }), " font-weight:500;line-height:normal;&>", l.Sn, "{", (function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }), ";}}")
        },
        77708: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(67294),
                i = n(14411),
                a = n(32981),
                l = n(73647);
            const o = function() {
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
                        e((0, l.gB)())
                    },
                    cancelCallback: function() {
                        e((0, l.gd)())
                    }
                }, n && n.rules && r.createElement(r.Fragment, null, r.createElement("p", null, "By joining this group, you agree to the following rules:"), r.createElement(i._O, null, n.rules)))
            }
        },
        16869: (e, t, n) => {
            n.d(t, {
                Cb: () => y,
                G4: () => f,
                Ij: () => v,
                Ul: () => m,
                ft: () => g,
                mr: () => p
            });
            var r = n(15861),
                i = n(42138),
                a = n(4942),
                l = n(64687),
                o = n.n(l),
                u = n(64358);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserListings: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.n,
                                        r = void 0 === n ? 50 : n,
                                        i = (e.offset, e.groupId),
                                        a = e.active,
                                        l = e.archived,
                                        o = e.hydrate,
                                        s = e.listingType,
                                        d = e.pageValue,
                                        m = void 0 === d ? 1 : d;
                                    return {
                                        url: "user/".concat(t, "/listings"),
                                        params: c({
                                            groupId: i,
                                            listingType: s,
                                            active: a,
                                            archived: l,
                                            hydrate: o
                                        }, (0, u.ue)({
                                            n: r,
                                            pageValue: m
                                        }))
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, i.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Listing",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserListings",
                                        id: r
                                    }])
                                }
                            }),
                            getListing: e.query({
                                query: function(e) {
                                    var t = e.listingId,
                                        n = e.hydrate,
                                        r = e.hydrateProducts,
                                        i = void 0 !== r && r,
                                        a = e.hydrateStores,
                                        l = void 0 !== a && a;
                                    return {
                                        url: "listing/".concat(t),
                                        params: {
                                            hydrate: n,
                                            hydrateProducts: i,
                                            hydrateStores: l
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }]
                                }
                            }),
                            createListing: e.mutation({
                                queryFn: (n = (0, r.Z)(o().mark((function e(t, n, r, i) {
                                    var a, l, u, s, d, m, p, g, f, v, y, h, b, E, w, T, x, I, k, P, M, L, C, S, R;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (l = t.file, u = void 0 === l ? null : l, s = t.tag, d = void 0 === s ? "product" : s, m = t.displayName, p = t.description, g = t.tags, f = t.listingVariants, v = t.imageId, y = t.listingType, h = t.productType, b = t.products, E = t.priceTokens, w = t.duration, T = t.durationType, x = t.active, I = t.groupId, k = t.permanent, P = t.instant, M = t.stackable, L = t.storeIds, C = t.recurrable, !u) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, i({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (n = void 0, n = new FormData, n.append("file", u), n.append("tag", d), n)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (S = e.t0) || !S.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 11:
                                                return e.next = 13, i({
                                                    url: "listing",
                                                    method: "POST",
                                                    body: {
                                                        imageId: S ? null == S || null === (a = S.data) || void 0 === a ? void 0 : a.id : v,
                                                        displayName: m,
                                                        description: p,
                                                        tags: g,
                                                        listingVariants: f,
                                                        listingType: y,
                                                        productType: h,
                                                        products: b,
                                                        priceTokens: E,
                                                        duration: w,
                                                        durationType: T,
                                                        active: x,
                                                        groupId: I,
                                                        permanent: k,
                                                        instant: P,
                                                        stackable: M,
                                                        recurrable: C,
                                                        storeIds: L
                                                    }
                                                });
                                            case 13:
                                                if (!(R = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: R.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: c({
                                                        listing: R.data
                                                    }, (null == S ? void 0 : S.data) && {
                                                        file: S.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var n
                                    }), e)
                                }))), function(e, t, r, i) {
                                    return n.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, n) {
                                    var r = n.ownerId,
                                        a = n.tag;
                                    n.storeIds;
                                    return [].concat((0, i.Z)(e ? [{
                                        type: "Listing",
                                        id: e.id
                                    }] : []), [{
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserListings",
                                        id: r
                                    }, "Stores", "Store", "UserProducts", "Product"])
                                }
                            }),
                            updateListing: e.mutation({
                                queryFn: (t = (0, r.Z)(o().mark((function e(t, n, r, i) {
                                    var a, l, u, s, d, m, p, g, f, v, y, h, b, E, w, T, x, I, k, P, M, L, C, S, R;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (l = t.file, u = void 0 === l ? null : l, s = t.tag, d = void 0 === s ? "product" : s, m = t.listingId, p = t.displayName, g = t.description, f = t.tags, v = t.listingVariants, y = t.imageId, h = t.products, b = t.priceTokens, E = t.duration, w = t.durationType, T = t.active, x = t.groupId, I = t.archive, k = t.permanent, P = t.instant, M = t.stackable, L = t.recurrable, C = t.storeIds, !u) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, i({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (n = void 0, n = new FormData, n.append("file", u), n.append("tag", d), n)
                                                });
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (S = e.t0) || !S.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 11:
                                                return e.next = 13, i({
                                                    url: "listing/".concat(m),
                                                    method: "PUT",
                                                    body: {
                                                        displayName: p,
                                                        description: g,
                                                        tags: f,
                                                        listingVariants: v,
                                                        imageId: S ? null == S || null === (a = S.data) || void 0 === a ? void 0 : a.id : y,
                                                        products: h,
                                                        priceTokens: b,
                                                        duration: E,
                                                        durationType: w,
                                                        active: T,
                                                        groupId: x,
                                                        archive: I,
                                                        permanent: k,
                                                        instant: P,
                                                        stackable: M,
                                                        recurrable: L,
                                                        storeIds: C
                                                    }
                                                });
                                            case 13:
                                                if (!(R = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: R.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: c({
                                                        listing: R.data
                                                    }, (null == S ? void 0 : S.data) && {
                                                        file: S.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                        var n
                                    }), e)
                                }))), function(e, n, r, i) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, n) {
                                    var r = n.listingId,
                                        i = n.ownerId,
                                        a = n.tag;
                                    n.storeIds;
                                    return [{
                                        type: "Listing",
                                        id: r
                                    }, {
                                        type: "UserListings",
                                        id: i
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "Purchases",
                                        id: "PARTIAL-LIST"
                                    }, "Purchase", "Store", "Stores", "UserProducts", "Product"]
                                }
                            }),
                            activateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/activate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deactivateListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId;
                                    return {
                                        url: "listing/".concat(t, "/deactivate"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, {
                                        type: "UserListings",
                                        id: n.ownerId
                                    }, "Store", "Stores"]
                                }
                            }),
                            deleteListing: e.mutation({
                                query: function(e) {
                                    var t = e.listingId,
                                        n = e.force;
                                    return {
                                        url: "listing/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "Listing",
                                        id: n.listingId
                                    }, "UserListings", "ListingProducts", "Product", "UserProducts", "Stores", "Store"]
                                }
                            })
                        };
                        var t, n
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["UserListings", "Listing"]
                }),
                m = d.useGetUserListingsQuery,
                p = d.useGetListingQuery,
                g = d.useLazyGetListingQuery,
                f = d.useCreateListingMutation,
                v = d.useUpdateListingMutation,
                y = (d.useActivateListingMutation, d.useDeactivateListingMutation, d.useDeleteListingMutation)
        }
    }
]);
//# sourceMappingURL=53c1dbee35c1eef70cebf6f1835eb3635bf8044c84b7c45dbe4f417b31f86029.js.map