"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6004], {
        32575(e, n, t) {
            t.d(n, {
                A: () => A
            });
            var r = t(10467),
                i = t(82544),
                l = t(70129),
                a = t(19116),
                o = t(12258),
                u = t(85044),
                c = t(32110),
                s = t(38925),
                d = t(88846),
                m = t(54756),
                p = t.n(m),
                f = t(15033),
                g = t(97963),
                y = t(75171),
                v = t.n(y),
                h = t(13951),
                E = t(40085),
                b = t(72784),
                w = t(6457),
                x = t(24751),
                T = t(74353),
                k = t.n(T),
                C = t(96540),
                M = t(6376),
                I = t(3604),
                P = t(45616);
            const A = function(e) {
                var n, t, l, m, g = e.listing,
                    y = e.purchase,
                    T = e.group,
                    A = e.tokenBalance,
                    D = e.index,
                    R = e.onCancel,
                    Q = e.onPurchase,
                    L = e.economyOnline,
                    O = e.isMod,
                    V = e.economyState,
                    F = (0, M.wA)(),
                    N = k()(),
                    B = (0, h.P2)().data,
                    q = C.useState(!0),
                    $ = (0, i.A)(q, 2),
                    G = $[0],
                    j = $[1],
                    W = (0, M.d4)(function(e) {
                        return e.listingRow.modals.subscriptionCancellation
                    }),
                    U = (0, M.d4)(function(e) {
                        return e.listingRow.modals.purchase
                    }),
                    X = (0, M.d4)(function(e) {
                        return e.listingRow.modals.rules.isOpen
                    }),
                    z = (0, M.d4)(function(e) {
                        return e.listingRow.modals.purchaseConfirmation.isOpen
                    }),
                    _ = O && 2 === V,
                    J = (0, b.Qt)({
                        listingId: null == y ? void 0 : y.listingId,
                        hydrate: !0
                    }, {
                        skip: !!g,
                        refetchOnMountOrArgChange: !0
                    }),
                    K = J.data,
                    H = J.isLoading,
                    Z = (J.isSuccess, J.isError),
                    ee = J.error,
                    ne = g || K,
                    te = (0, E.XR)({
                        groupId: null == ne ? void 0 : ne.groupId
                    }, {
                        skip: !!T || !ne
                    }),
                    re = te.data,
                    ie = te.isLoading,
                    le = (te.isError, te.error, (0, w.sn)({
                        listingId: null == ne ? void 0 : ne.id
                    }, {
                        skip: !ne
                    })),
                    ae = le.data,
                    oe = (le.isLoading, le.isError, le.error, T || re),
                    ue = null == ne ? void 0 : ne.stackable,
                    ce = (null == oe ? void 0 : oe.memberCount) >= P.$5,
                    se = !(null == oe || !oe.myMember),
                    de = !(null == oe || null === (n = oe.myMember) || void 0 === n || !n.userId) && (null == oe ? void 0 : oe.ownerId) === (null == oe || null === (t = oe.myMember) || void 0 === t ? void 0 : t.userId);
                (0, C.useEffect)(function() {
                    ne && oe && !H && !ie && j(!1)
                }, [ne, oe, H, ie]), (0, C.useEffect)(function() {
                    U.enteredPurchaseQuantity && F((0, I.wn)(Number.parseInt(U.enteredPurchaseQuantity, 10)))
                }, [U.enteredPurchaseQuantity]);
                var me = C.useMemo(function() {
                    var e, n;
                    if (U.selectedPurchaseQuantity && (null == ne || null === (e = ne.listingVariants) || void 0 === e ? void 0 : e.length) > 0) return null === (n = ne.listingVariants) || void 0 === n ? void 0 : n.findLast(function(e) {
                        return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= U.selectedPurchaseQuantity
                    })
                }, [U.selectedPurchaseQuantity, ne]);
                (0, C.useEffect)(function() {
                    !z && X && F((0, I.xB)())
                }, [z, X]);
                var pe, fe, ge, ye = (null == ne ? void 0 : ne.permanent) || "forevers" === (null == ne ? void 0 : ne.durationType) || "permanent" === (null == ne ? void 0 : ne.listingType),
                    ve = (null == y ? void 0 : y.permanent) || "forevers" === (null == y ? void 0 : y.purchaseDurationType) || "permanent" === (null == ne ? void 0 : ne.listingType),
                    he = C.useMemo(function() {
                        if (!ae) return [!1, !1];
                        var e = ae.find(function(e) {
                            return "role" === e.productType
                        });
                        return [null == e ? void 0 : e.groupAccess, null == e ? void 0 : e.groupAccessRemove]
                    }, [ae]),
                    Ee = (0, i.A)(he, 2),
                    be = Ee[0],
                    we = Ee[1],
                    xe = C.useMemo(function() {
                        return (U.selectedPurchaseQuantity || 1) * ((null == me ? void 0 : me.unitPriceTokens) || (null == ne ? void 0 : ne.priceTokens))
                    }, [U.selectedPurchaseQuantity, me, ne]),
                    Te = C.useMemo(function() {
                        return de ? 0 : xe
                    }, [de, xe]),
                    ke = be && !se,
                    Ce = !be && !se,
                    Me = ye ? "Buy" : "Subscribe",
                    Ie = y ? k()(y.subscriptionExpiry) : void 0,
                    Pe = null == Ie ? void 0 : Ie.diff(N, "months", !0),
                    Ae = null == Ie ? void 0 : Ie.diff(N, "days", !0),
                    Ye = y && Pe <= 1 ? "Immediately" : "Subscription",
                    De = Ae < 0,
                    Re = ce || Ce || !L,
                    Se = !_ && (y ? ye || !ue || !L || Ce : Re),
                    Qe = !_ && (W.isLoading || !L),
                    Le = function() {
                        var e = (0, r.A)(p().mark(function e() {
                            return p().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        R({
                                            currentUserId: B.id,
                                            listingId: ne.id,
                                            listing: ne,
                                            purchase: y
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Oe = y ? ye || ve ? "You own this!" : De ? ce && !se ? "This group is full!" : ke ? "This subscription has expired!" : "You need to be a member of the group to buy this." : "You're subscribed! Expires ".concat(k()(y.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A")) : ce && !se ? "This group is full!" : ke ? Re ? "Purchase not available" : void 0 : "You need to be a member of the group to buy this.",
                    Ve = y ? ye || ve ? "You own this!" : C.createElement(C.Fragment, null, "Renew Subscription") : C.createElement(C.Fragment, null, Me, C.createElement("br", null), "Buy" === Me ? "for " : "Starting from ", C.createElement(f.eD, null), ne.priceTokens.toLocaleString());
                return C.createElement(C.Fragment, null, Z && C.createElement(f.$T, {
                    className: "tw-mt-0 tw-mb-3",
                    type: "error",
                    title: "Listing Error"
                }, C.createElement("p", {
                    className: "tw-mb-0"
                }, "Error looking up listing information: ", null !== (l = null === (m = ee.data) || void 0 === m ? void 0 : m.error.message) && void 0 !== l ? l : "Unknown error"), g ? C.createElement("small", null, "Listing ID: ", g.id) : C.createElement("small", null, "Listing ID: ", null == y ? void 0 : y.listingId)), G && !Z && C.createElement(Y, {
                    key: D,
                    height: "12rem",
                    delay: 50 * D,
                    radius: 8
                }), !Z && !G && C.createElement(f.mr, null, C.createElement(f.Oo, {
                    alt: ne.displayName,
                    imageId: ne.imageId,
                    fallbackSrc: v(),
                    fitToCover: !0
                }), C.createElement(f.fv, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, C.createElement(f.e, null, ne.displayName, " ", (fe = null == ne ? void 0 : ne.listingType, (ge = {
                    instant: {
                        bgColor: "#575757",
                        icon: d.DM,
                        label: "Instant"
                    },
                    duration: {
                        bgColor: "#575757",
                        icon: s.yc,
                        label: "Duration"
                    },
                    permanent: {
                        bgColor: "#575757",
                        icon: c.bM,
                        label: "Permanent"
                    }
                })[fe] ? C.createElement(x.ab, {
                    bgColor: ge[fe].bgColor
                }, C.createElement(f.M2, {
                    icon: ge[fe].icon
                }), " ", ge[fe].label) : null), " ", y ? Ae <= 10 ? C.createElement(x.ab, {
                    bgColor: "#A53D29"
                }, C.createElement(f.M2, {
                    icon: u.faCircleExclamation
                }), " ", De ? C.createElement(C.Fragment, null, "Expired!") : C.createElement(C.Fragment, null, "Expires Soon!")) : C.createElement(x.ab, {
                    bgColor: "#575757"
                }, C.createElement(f.M2, {
                    icon: o.Tu
                }), " Expires ", k()(y.subscriptionExpiry).format("MMM YYYY")) : null !== (pe = ne.listingVariants) && void 0 !== pe && pe.some(function(e) {
                    return !0 === e.sellerVariant
                }) ? C.createElement(x.ab, {
                    bgColor: "#6F42C1"
                }, C.createElement(f.M2, {
                    icon: a.DX
                }), " Volume Discount") : null), C.createElement("p", null, ne.description)), C.createElement(S, {
                    flexDirection: "column",
                    containerType: "listing"
                }, C.createElement(f.$n, {
                    disabled: Se,
                    title: Oe,
                    onClick: function() {
                        Q(ue, ue ? {
                            listing: ne,
                            purchase: y,
                            group: oe,
                            totalPrice: Te,
                            tokenBalance: A,
                            includesGroupAccess: be,
                            includesGroupAccessRemove: we,
                            enteredPurchaseQuantity: 1,
                            selectedPurchaseQuantity: 1
                        } : {
                            listing: ne,
                            purchase: y,
                            group: oe,
                            totalPrice: Te,
                            tokenBalance: A,
                            quantity: 1,
                            includesGroupAccess: be,
                            includesGroupAccessRemove: we
                        })
                    },
                    containerStyles: "width: fit-content"
                }, Ve), y && !ye && ue ? C.createElement(f.$n, {
                    neutral: "true",
                    disabled: Qe,
                    hidden: De,
                    onClick: function() {
                        return Le()
                    },
                    containerStyles: "width: fit-content"
                }, "Cancel ", Ye) : null)))
            };
            var Y = (0, l.A)(f.fy, {
                    target: "ex2vave1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                D = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                R = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                S = (0, l.A)(f.fI, {
                    target: "ex2vave0"
                })("display:flex;flex-wrap:wrap;flex-direction:", function(e) {
                    return e.flexDirection || "row"
                }, ";", function(e) {
                    return "purchase" === e.containerType && R
                }, " flex:1;align-items:flex-end;", function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }, " &>", g.Jb, "{", function(e) {
                    return "purchase" === e.containerType && D
                }, " font-weight:500;line-height:normal;&>", g.OV, "{", function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }, ";}}")
        },
        32936(e, n, t) {
            t.d(n, {
                A: () => h
            });
            var r = t(10467),
                i = t(82544),
                l = t(34496),
                a = t(54756),
                o = t.n(a),
                u = t(65950),
                c = t(15033),
                s = t(75171),
                d = t.n(s),
                m = t(5361),
                p = t(3604),
                f = t(74353),
                g = t.n(f),
                y = t(96540),
                v = t(6376);
            const h = function() {
                var e = (0, v.wA)(),
                    n = (0, v.d4)(function(e) {
                        return e.listingRow
                    }),
                    t = n.currentUserId,
                    a = n.listingId,
                    s = n.listing,
                    f = n.purchase,
                    h = n.modals.subscriptionCancellation,
                    E = h.isOpen,
                    b = h.showCancellationConfirm,
                    w = h.newExpirationDate,
                    x = h.cancelImmediately,
                    T = (0, y.useState)(!1),
                    k = (0, i.A)(T, 2),
                    C = k[0],
                    M = k[1],
                    I = (0, m.Ex)(),
                    P = (0, i.A)(I, 2),
                    A = P[0],
                    Y = P[1],
                    D = Y.data,
                    R = Y.isLoading,
                    S = Y.isError,
                    Q = (0, y.useMemo)(function() {
                        return f ? g()(f.subscriptionExpiry) : void 0
                    }, [f]),
                    L = (0, y.useMemo)(function() {
                        return null == Q ? void 0 : Q.diff(g()(), "months", !0)
                    }, [Q]) <= 1,
                    O = (0, y.useMemo)(function() {
                        return f ? g()(null == f ? void 0 : f.subscriptionExpiry).format("MMMM D, YYYY") : void 0
                    }, [f]);
                y.useEffect(function() {
                    E && N()
                }, [E]);
                var V = (0, y.useCallback)(function() {
                        e((0, p.z$)(!x))
                    }, [e, x]),
                    F = (0, y.useCallback)(function() {
                        e((0, p.tI)())
                    }, [e]),
                    N = function() {
                        var n = (0, r.A)(o().mark(function n() {
                            var r, i, c;
                            return o().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (f && s) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.prev = 2, n.next = 5, A({
                                            buyerId: t,
                                            listingId: a,
                                            reason: "user cancellation",
                                            immediate: L,
                                            isPreview: !0
                                        }).unwrap();
                                    case 5:
                                        r = n.sent, w !== r.newExpiryDate && e((0, p.YS)(r.newExpiryDate)), n.next = 13;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(2), e((0, u.X)({
                                            title: "Failed to preview cancellation ".concat(s.id, " for ").concat(t),
                                            icon: l.zp,
                                            message: null !== (i = null === (c = n.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), e((0, p.tI)());
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, null, [
                                [2, 9]
                            ])
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    B = function() {
                        var n = (0, r.A)(o().mark(function n() {
                            var r, i;
                            return o().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, A({
                                            buyerId: t,
                                            listingId: a,
                                            reason: "user cancellation",
                                            immediate: x,
                                            isPreview: !1
                                        }).unwrap();
                                    case 3:
                                        M(!1), e((0, p.V5)(!0)), n.next = 12;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(0), e((0, u.X)({
                                            title: "Failed to cancel ".concat(s.id, " for ").concat(t),
                                            icon: l.zp,
                                            message: null !== (r = null === (i = n.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })), M(!1), e((0, p._1)(!0));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, null, [
                                [0, 7]
                            ])
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    q = b && S ? y.createElement(c.$T, {
                        type: "error",
                        title: "Cancellation Unsuccessful"
                    }, "Your subscription cannot be cancelled, please try again later.") : b && !S ? y.createElement(c.$T, {
                        type: "success",
                        title: "Cancellation Successful"
                    }, "Your subscription has been cancelled successfully!") : L ? y.createElement("p", null, "Are you sure you want to cancel your subscription immediately?") : y.createElement("p", null, "Are you sure you want to cancel your subscription?");
                return y.createElement(c.uo, {
                    headerText: "Cancel Subscription",
                    isOpen: E,
                    confirmText: b ? "Done" : C || L ? "Cancel Immediately" : "Cancel Subscription",
                    confirmCallback: function() {
                        b ? F() : !x || L || C ? B() : (M(!0), e((0, p.V5)(!1)))
                    },
                    cancelCallback: F,
                    confirmDisabled: !(!L || b) && !x,
                    hideCancel: b,
                    headerClasses: "tw-justify-between tw-items-center",
                    size: "lg",
                    isLoading: R
                }, !C && y.createElement(c.fv, null, q, E && s && y.createElement(c.mr, null, y.createElement(c.Oo, {
                    alt: s.displayName,
                    imageId: s.imageId,
                    fallbackSrc: d()
                }), y.createElement(c.fv, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, y.createElement(c.e, null, s.displayName), y.createElement("p", null, s.description))), !L && !b && D && y.createElement(y.Fragment, null, y.createElement("p", null, y.createElement("big", null, y.createElement("b", null, "Total Refund: ", y.createElement(c.eD, null), null == D ? void 0 : D.totalRefundable)), " ", "Your new expiration date will be ", g()(null == D ? void 0 : D.newExpiryDate).format("MMMM D, YYYY"), y.createElement("br", null), y.createElement(c.AQ, null, "You will be refunded for the unused months. Tilia and VRChat Fees are not refunded.")), y.createElement("p", null, y.createElement(c.Sc, {
                    id: "cancellationCheck",
                    label: " I want to remove my benefits immediately (Optional)",
                    checked: x,
                    onChange: V
                }), y.createElement(c.AQ, null, "If you enable this option, your subscription and benefits end immediately. Your total refund will be the same."))), L && !b && y.createElement(c.fv, null, y.createElement(c.AQ, null, y.createElement("strong", null, "NOTE:"), " This subscription is non-recurring, and canceling it now means you will lose access to the remaining days of your current subscription, along with any associated benefits. Your current 1-month subscription expiration date will change from", " ", O, ", to today."), y.createElement(c.Sc, {
                    id: "cancellationCheck",
                    topAlign: !0,
                    className: "tw-mt-[5px]",
                    label: "I understand that canceling my 1-month subscription immediately will result in losing access to the remaining days and benefits.",
                    checked: x,
                    onChange: V
                }))), C && y.createElement(c.fv, null, y.createElement("p", null, "You are about to cancel your subscription immediately. This subscription is non-recurring, and you will lose access to the remaining days, along with any associated benefits. Do you still want to proceed?")))
            }
        },
        51921(e, n, t) {
            t.d(n, {
                A: () => T
            });
            var r = t(10467),
                i = t(82544),
                l = t(19116),
                a = t(12258),
                o = t(85044),
                u = t(54756),
                c = t.n(u),
                s = t(15033),
                d = t(71853),
                m = t(75171),
                p = t.n(m),
                f = t(31069),
                g = t(5361),
                y = t(6457),
                v = t(3604),
                h = t(24751),
                E = t(74353),
                b = t.n(E),
                w = t(96540),
                x = t(6376);
            const T = function(e) {
                var n, t, u, m = e.groupData,
                    E = (0, x.wA)(),
                    T = b()(),
                    k = (0, x.d4)(function(e) {
                        return e.listingRow.listing
                    }),
                    C = (0, x.d4)(function(e) {
                        return e.listingRow.group
                    }),
                    M = !(null == C || null === (n = C.myMember) || void 0 === n || !n.userId) && (null == C ? void 0 : C.ownerId) === (null == C || null === (t = C.myMember) || void 0 === t ? void 0 : t.userId),
                    I = (0, x.d4)(function(e) {
                        return e.listingRow.purchase
                    }),
                    P = M ? 0 : (0, x.d4)(function(e) {
                        return e.listingRow.totalPrice
                    }),
                    A = (0, x.d4)(function(e) {
                        return e.listingRow.tokenBalance
                    }),
                    Y = (0, x.d4)(function(e) {
                        return e.listingRow.modals.purchase
                    }),
                    D = (0, x.d4)(function(e) {
                        return e.listingRow.modals.purchaseConfirmation
                    }),
                    R = I ? b()(I.subscriptionExpiry) : void 0,
                    S = null == R ? void 0 : R.diff(T, "days", !0),
                    Q = S < 0,
                    L = (null == k ? void 0 : k.permanent) || "forevers" === (null == k ? void 0 : k.durationType),
                    O = L ? "Buy" : "Subscribe",
                    V = A < P,
                    F = !(null == C || !C.myMember),
                    N = D.includesGroupAccess && !F,
                    B = !L && D.includesGroupAccessRemove && !F,
                    q = N && (null == C ? void 0 : C.rules),
                    $ = (0, y.sn)({
                        listingId: k.id,
                        hydrateProducts: !0
                    }, {
                        skip: !k.id
                    }),
                    G = $.data,
                    j = $.isFetching,
                    W = ($.isError, $.error),
                    U = (0, g.AO)(),
                    X = (0, i.A)(U, 2),
                    z = X[0],
                    _ = X[1],
                    J = (_.isLoading, _.isError, _.error, w.useMemo(function() {
                        var e;
                        return Y.selectedPurchaseQuantity ? null === (e = k.listingVariants) || void 0 === e ? void 0 : e.findLast(function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= Y.selectedPurchaseQuantity
                        }) : null
                    }, [Y.selectedPurchaseQuantity, k])),
                    K = w.useMemo(function() {
                        return (Y.selectedPurchaseQuantity || 1) * ((null == J ? void 0 : J.unitPriceTokens) || (null == k ? void 0 : k.priceTokens))
                    }, [Y.selectedPurchaseQuantity, J, k]);
                w.useEffect(function() {
                    E((0, v.ML)(P)), E((0, v.GD)(K <= f.RI))
                }, [P]);
                var H = function() {
                    var e = (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, z({
                                        listingId: k.id,
                                        listingVariantId: null == J ? void 0 : J.listingVariantId,
                                        quantity: Y.selectedPurchaseQuantity,
                                        totalPrice: P,
                                        contextData: {
                                            locationType: f.WI.GROUP,
                                            storeId: null == m ? void 0 : m.storeId,
                                            groupId: null == m ? void 0 : m.id
                                        }
                                    }).unwrap();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

                function Z() {
                    var e;
                    return I ? S <= 10 ? w.createElement(h.ab, {
                        bgColor: "#A53D29"
                    }, w.createElement(s.M2, {
                        icon: o.faCircleExclamation
                    }), " ", Q ? w.createElement(w.Fragment, null, "Expired!") : w.createElement(w.Fragment, null, "Expires Soon!")) : w.createElement(h.ab, {
                        bgColor: "#575757"
                    }, w.createElement(s.M2, {
                        icon: a.Tu
                    }), " Expires ", b()(I.subscriptionExpiry).format("MMM YYYY")) : (null === (e = k.listingVariants) || void 0 === e ? void 0 : e.length) > 0 ? w.createElement(h.ab, {
                        bgColor: "#6F42C1"
                    }, w.createElement(s.M2, {
                        icon: l.DX
                    }), " Volume Discount") : null
                }
                return w.useEffect(function() {
                    E((0, v.Ij)(void 0 === Y.selectedPurchaseQuantity || Y.selectedPurchaseQuantity > 0 && Y.selectedPurchaseQuantity === Number(Y.enteredPurchaseQuantity) && Y.selectedPurchaseQuantity <= f.lT))
                }, [Y.selectedPurchaseQuantity]), w.createElement(s.uo, {
                    headerText: "Confirm ".concat(L ? "Purchase" : "Subscription"),
                    isOpen: D.isOpen,
                    isLoading: D.isLoading,
                    confirmText: w.createElement(w.Fragment, null, O, " for ", w.createElement(s.eD, null), P.toLocaleString()),
                    confirmCallback: H,
                    confirmDisabled: V || !Y.isQuantityValid || !Y.isTotalPriceValid,
                    cancelCallback: function() {
                        E((0, v.tI)())
                    },
                    size: "lg"
                }, D.isError && w.createElement(s.$T, {
                    type: "error",
                    title: "Error purchasing"
                }, null === (u = D.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message), w.createElement(s.mr, null, w.createElement(s.Oo, {
                    alt: k.displayName || "",
                    imageId: k.imageId,
                    fallbackSrc: p(),
                    fitToCover: !0
                }), w.createElement(s.fv, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, w.createElement(s.e, null, k.displayName, " ", w.createElement(Z, null)), w.createElement("p", null, k.description), w.createElement(d.A, {
                    loading: j,
                    error: W
                }, (null == G ? void 0 : G.length) > 1 && !j && w.createElement(w.Fragment, null, w.createElement("p", null, L ? "Purchasing" : "Subscribing", " grants access to the following items:"), w.createElement("ul", null, G.map(function(e) {
                    return w.createElement("li", {
                        key: e.id
                    }, w.createElement("strong", null, e.displayName))
                })))))), N && w.createElement("p", null, L ? "Purchasing" : "Subscribing", " will add you to this group."), q && w.createElement(w.Fragment, null, w.createElement("p", null, "By joining, you agree to the group's rules."), w.createElement(s.$n, {
                    onClick: function() {
                        return E((0, v.jP)(C))
                    },
                    style: {
                        marginBottom: "1rem"
                    }
                }, "Show Group Rules")), !L && w.createElement("p", null, "This purchase will expire in ", I && "an additional ", Y.selectedPurchaseQuantity * k.duration, " ", Y.selectedPurchaseQuantity * k.duration === 1 ? k.durationType.replace(/s$/, "") : k.durationType, ", on", " ", b()(null == I ? void 0 : I.subscriptionExpiry).add(Y.selectedPurchaseQuantity * k.duration, k.durationType.replace(/s$/, "")).format("MMM D YYYY"), "."), B && w.createElement("p", null, "Once this expires, you will be removed from the group."), V && w.createElement(s.$T, {
                    type: "error",
                    title: "Insufficient funds"
                }, "You don't have enough credits for this purchase. You can buy more inside VRChat."))
            }
        },
        51819(e, n, t) {
            t.d(n, {
                A: () => p
            });
            var r = t(66911),
                i = t(70129),
                l = t(15033),
                a = t(97963),
                o = t(31069),
                u = t(3604),
                c = t(74353),
                s = t.n(c),
                d = t(96540),
                m = t(6376);
            const p = function() {
                var e, n, t, i = (0, m.wA)(),
                    a = (0, m.d4)(function(e) {
                        return e.listingRow.group
                    }),
                    c = (0, m.d4)(function(e) {
                        return e.listingRow.listing
                    }),
                    p = (0, m.d4)(function(e) {
                        return e.listingRow.purchase
                    }),
                    f = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase.showCustomDuration
                    }),
                    g = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase.selectedPurchaseQuantity
                    }),
                    v = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase.enteredPurchaseQuantity
                    }),
                    h = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase.isQuantityValid
                    }),
                    E = null !== (e = (0, m.d4)(function(e) {
                        return e.listingRow.listing.stackable
                    })) && void 0 !== e && e,
                    b = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase.isTotalPriceValid
                    }),
                    w = (0, m.d4)(function(e) {
                        return e.listingRow.modals.purchase
                    }),
                    x = [1].concat((0, r.A)(o.kK)),
                    T = s()(null == p ? void 0 : p.subscriptionExpiry).isBefore(s()()),
                    k = !(null == a || null === (n = a.myMember) || void 0 === n || !n.userId) && (null == a ? void 0 : a.ownerId) === (null == a || null === (t = a.myMember) || void 0 === t ? void 0 : t.userId),
                    C = d.useMemo(function() {
                        var e;
                        if (g) return null === (e = c.listingVariants) || void 0 === e ? void 0 : e.findLast(function(e) {
                            return (null == e ? void 0 : e.quantity) && (null == e ? void 0 : e.quantity) <= g
                        })
                    }, [g, c]),
                    M = d.useMemo(function() {
                        return (g || 1) * ((null == C ? void 0 : C.unitPriceTokens) || (null == c ? void 0 : c.priceTokens))
                    }, [g, C, c]),
                    I = d.useMemo(function() {
                        return k ? 0 : M
                    }, [k, M]);
                (0, d.useEffect)(function() {
                    i((0, u.ML)(I)), i((0, u.GD)(M <= o.RI))
                }, [I]);
                var P = d.useMemo(function() {
                        var e, n = (null == c || null === (e = c.listingVariants) || void 0 === e ? void 0 : e.reduce(function(e, n) {
                            return e[n.quantity] = n, e
                        }, [])) || [];
                        return x.forEach(function(e) {
                            if (!n[e]) {
                                var t, r = (null === (t = n.findLast(function(n) {
                                    return (null == n ? void 0 : n.quantity) && (null == n ? void 0 : n.quantity) <= e
                                })) || void 0 === t ? void 0 : t.unitPriceTokens) || (null == c ? void 0 : c.priceTokens);
                                n[e] = {
                                    quantity: e,
                                    unitPriceTokens: r
                                }
                            }
                        }), n
                    }, [c]),
                    A = d.useMemo(function() {
                        var e;
                        if (!E) return 1;
                        var n = null === (e = P.findLast(function(e) {
                                return e.unitPriceTokens
                            })) || void 0 === e ? void 0 : e.unitPriceTokens,
                            t = Math.floor(o.RI / n);
                        return Math.min(t, o.lT)
                    }, [E, P]);
                return (0, d.useEffect)(function() {
                    i((0, u.Ij)(void 0 === g || g >= 1 && g.toString(10) === v && g <= o.lT))
                }, [g]), d.createElement(l.uo, {
                    headerText: f ? "Custom Subscription" : "".concat(p ? "Update" : "Add", " Subscription"),
                    isOpen: w.isOpen,
                    confirmText: f ? "Review Subscription" : "Custom Duration…",
                    confirmCallback: function() {
                        w.showCustomDuration ? i((0, u.iu)()) : i((0, u.qC)())
                    },
                    confirmDisabled: f && (!h || !b),
                    cancelCallback: function() {
                        i((0, u.tI)())
                    }
                }, d.createElement(l.fv, {
                    className: "tw-text-center tw-mb-5"
                }, d.createElement("p", null, "Choose the subscription duration to add for"), d.createElement(l.e, null, c.displayName), p && !T && d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your current subscription expires ", s()(p.subscriptionExpiry).format("MMMM D YYYY [at] h:mm A"))), f ? d.createElement(l.fv, {
                    className: "align-items-center"
                }, d.createElement(l.fI, {
                    className: "align-items-center"
                }, d.createElement("label", {
                    className: "d-flex align-items-center"
                }, c.durationType.slice(0, 1).toUpperCase(), g * c.duration === 1 ? c.durationType.slice(1).replace(/s$/, "") : c.durationType.slice(1), ":", d.createElement(l.pd, {
                    type: "number",
                    className: "mx-2",
                    value: v,
                    onChange: function(e) {
                        return i((0, u.aW)(e.target.value.slice(0, o.lT.toString(10).length)))
                    },
                    min: c.duration,
                    step: c.duration,
                    max: A
                })), d.createElement("small", null, d.createElement("span", {
                    style: {
                        color: b ? "inherit" : "var(--red)"
                    }
                }, d.createElement(l.eD, null), I.toLocaleString()), ((null == C ? void 0 : C.unitPriceTokens) || c.priceTokens) < c.priceTokens && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement("span", {
                    style: {
                        color: "var(--yellow)"
                    }
                }, "Save ", Math.floor(100 - ((null == C ? void 0 : C.unitPriceTokens) || c.priceTokens) / c.priceTokens * 100), "%")))), (!h || !b) && d.createElement(l.fI, {
                    className: "align-items-center"
                }, d.createElement("small", {
                    style: {
                        color: "var(--red)"
                    }
                }, !b && d.createElement(d.Fragment, null, "The total must be within the transaction limit of ", d.createElement(l.eD, null), o.RI.toLocaleString(), ".")))) : d.createElement(y, {
                    containerType: "purchase"
                }, P.map(function(e) {
                    var n = e.quantity,
                        t = e.unitPriceTokens,
                        r = n * c.duration;
                    return d.createElement(l.$n, {
                        key: n,
                        onClick: function() {
                            return i((0, u.DG)({
                                quantity: n,
                                totalPrice: k ? 0 : r * t
                            }))
                        }
                    }, r.toLocaleString(), " ", 1 === r ? c.durationType.replace(/s$/, "") : c.durationType, d.createElement("br", null), d.createElement(l.eD, null), (r * t).toLocaleString(), t < c.priceTokens && d.createElement("small", {
                        style: {
                            color: "var(--yellow)"
                        }
                    }, d.createElement("br", null), "Save ", Math.floor(100 - t / c.priceTokens * 100), "%"))
                })))
            };
            var f = {
                    name: "h78xii",
                    styles: "margin:0.5rem;flex:1 1 90px"
                },
                g = {
                    name: "16cahg",
                    styles: "margin-bottom:-1.5rem;justify-content:center;margin-top:0;margin:-0.5rem"
                },
                y = (0, i.A)(l.fI, {
                    target: "e1570gix0"
                })("display:flex;flex-wrap:wrap;flex-direction:", function(e) {
                    return e.flexDirection || "row"
                }, ";", function(e) {
                    return "purchase" === e.containerType && g
                }, " flex:1 1 128px;", function(e) {
                    return "listing" === e.containerType && "gap: 7px;"
                }, " &>", a.Jb, "{", function(e) {
                    return "purchase" === e.containerType && f
                }, " font-weight:500;line-height:normal;&>", a.OV, "{", function(e) {
                    return "listing" === e.containerType && "padding: 7px 10px;"
                }, ";}}")
        },
        15911(e, n, t) {
            t.d(n, {
                A: () => o
            });
            var r = t(96540),
                i = t(15033),
                l = t(6376),
                a = t(3604);
            const o = function() {
                var e = (0, l.wA)(),
                    n = (0, l.d4)(function(e) {
                        return e.listingRow.modals.rules
                    }),
                    t = (0, l.d4)(function(e) {
                        return e.listingRow.group
                    });
                return r.createElement(i.uo, {
                    headerText: "Rules",
                    isOpen: n.isOpen,
                    confirmText: "Agree",
                    confirmCallback: function() {
                        e((0, a.xB)())
                    },
                    cancelCallback: function() {
                        e((0, a.tI)())
                    }
                }, t && t.rules && r.createElement(r.Fragment, null, r.createElement("p", null, "By joining this group, you agree to the following rules:"), r.createElement(i.FX, null, t.rules)))
            }
        }
    }
]);
//# sourceMappingURL=4231605e522a5a95becd50ffe90ab8d6546081f3521d04a4607e848321620021.js.map