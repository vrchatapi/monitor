"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9435], {
        90524: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "circle-minus",
                l = ["minus-circle"],
                a = "f056",
                r = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, l, a, r]
            }, t.faCircleMinus = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = l, t.unicode = a, t.svgPathData = r, t.aliases = l
        },
        9435: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Se
            });
            var l = n(4942),
                a = n(54546),
                r = n(4965),
                c = n(2293),
                s = n(67294),
                o = n(45697),
                i = n.n(o),
                m = n(22202),
                u = n(66736),
                d = n(30381),
                f = n.n(d),
                p = n(35187),
                w = n(34226),
                v = n(11976),
                h = n(80873),
                g = n(45987),
                E = n(96766),
                b = n(62475),
                y = n(41145),
                x = n(62228),
                k = n(79655),
                N = n(27484),
                I = n.n(N),
                S = n(67263),
                C = n(64281),
                D = n(42138),
                M = n(17319),
                L = n(90524),
                Y = n(6811),
                U = n(20495),
                O = n(50048),
                Z = ["purchaseData", "currentUser", "purchaseIdOverride", "economyOnline", "onVoidClick", "onCancelClick", "cancelError"];
            var T = new Map([
                ["consumed", "Paid"],
                ["pending", "Unpaid"],
                ["refunded", "Cancelled (refunded)"],
                ["voided", "Cancelled (voided)"]
            ]);
            const P = function(e) {
                var t, n, l, r, c, o, i, m, d, f, p, v, h = e.purchaseData,
                    E = (e.currentUser, e.purchaseIdOverride),
                    b = e.economyOnline,
                    y = e.onVoidClick,
                    x = e.onCancelClick,
                    N = e.cancelError,
                    S = void 0 !== N && N,
                    C = ((0, g.Z)(e, Z), s.useState(E || (null == h ? void 0 : h.purchaseId) || null)),
                    P = (0, a.Z)(C, 2),
                    q = P[0],
                    H = (P[1], (0, u.Yn)({
                        purchaseId: q,
                        userId: (null == h ? void 0 : h.buyerId) || (null == h ? void 0 : h.fromUserId)
                    }, {
                        skip: !q || !(null == h || !h.buyerId || null == h || !h.fromUserId),
                        refetchOnMountOrArgChange: !0
                    })),
                    V = H.data,
                    Q = H.isLoading,
                    _ = H.isError,
                    K = H.error,
                    J = s.useMemo((function() {
                        return null != V && V.stacks ? (0, D.Z)(V.stacks).sort((function(e, t) {
                            return I()(e.stackStart) - I()(t.stackStart)
                        })) : []
                    }), [V]),
                    ee = s.useMemo((function() {
                        if (J) {
                            var e, t = J.findLast((function(e) {
                                    return "consumed" === e.stackStatus
                                })),
                                n = null === (e = J.find((function(e) {
                                    return "refunded" === e.stackStatus
                                }))) || void 0 === e ? void 0 : e.refundedOn;
                            return t && n && I()(null == t ? void 0 : t.stackEnd).isSame(I()(n))
                        }
                        return !1
                    }), [J]),
                    te = !S && (null == V || null === (t = V.stacks) || void 0 === t || null === (t = t.filter((function(e) {
                        var t, n = e.stackStatus;
                        return null == n || null === (t = n.toLowerCase()) || void 0 === t ? void 0 : t.includes("pending")
                    }))) || void 0 === t ? void 0 : t.length) > 0 || 1 === (null == V || null === (n = V.stacks) || void 0 === n ? void 0 : n.length) && I()(null == V || null === (l = V.stacks) || void 0 === l ? void 0 : l[0].stackEnd).isBefore(I()()),
                    ne = null == V || null === (r = V.stacks) || void 0 === r ? void 0 : r.some((function(e) {
                        var t, n = e.stackStatus,
                            l = e.refundType;
                        return "refunded" === n && (null == l || null === (t = l.toLowerCase()) || void 0 === t ? void 0 : t.includes("buyer"))
                    })),
                    le = null == V || null === (c = V.stacks) || void 0 === c ? void 0 : c.some((function(e) {
                        var t, n = e.stackStatus,
                            l = e.refundType;
                        return "refunded" === n && !(null != l && null !== (t = l.toLowerCase()) && void 0 !== t && t.includes("buyer"))
                    })),
                    ae = !ne && !le && (null == V || null === (o = V.stacks) || void 0 === o ? void 0 : o.some((function(e) {
                        return "refunded" === e.stackStatus
                    }))),
                    re = function(e) {
                        var t;
                        return "consumed" === (null == e || null === (t = e.stackStatus) || void 0 === t ? void 0 : t.toLowerCase())
                    },
                    ce = function(e) {
                        return re(e) ? Y.f8 : function(e) {
                            var t;
                            return "refunded" === (null == e || null === (t = e.stackStatus) || void 0 === t ? void 0 : t.toLowerCase())
                        }(e) ? L.faCircleMinus : M.di
                    },
                    se = function(e) {
                        return ae ? T.get("voided") : function(e) {
                            var t;
                            return "consumed" === (null == e || null === (t = e.stackStatus) || void 0 === t ? void 0 : t.toLowerCase()) && (ne || le) && ee
                        }(e) ? "Cancelled" : T.get(e.stackStatus.toLowerCase())
                    };
                return s.createElement(A, {
                    role: "list"
                }, q && s.createElement(X, {
                    className: "flex-row flex-wrap"
                }, _ && s.createElement(w.qX, {
                    type: "error",
                    title: "Error loading purchase information"
                }, null == K || null === (i = K.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message), Q ? s.createElement(F, {
                    height: "12rem"
                }) : s.createElement(s.Fragment, null, null != V && V.stacks && 0 !== (null == V || null === (m = V.stacks) || void 0 === m ? void 0 : m.length) && h ? (void 0 !== (null == h ? void 0 : h.permanent) && void 0 !== (null == h ? void 0 : h.voided) ? !h.permanent && h.voided : null == V || null === (v = V.stacks) || void 0 === v ? void 0 : v.some((function(e) {
                    return e.stackStatus.includes("refunded")
                }))) ? s.createElement(s.Fragment, null, s.createElement(z, null, s.createElement(w.$1, {
                    icon: U.faCircleExclamation
                }), " ", s.createElement($, null, ae ? "Void detail" : "Cancellation detail")), !ae && !le && ne && s.createElement(z, {
                    className: "tw-flex tw-space-x-2"
                }, s.createElement($, null, "Cancelled by"), s.createElement(w.pw, {
                    className: "d-none d-md-flex mr-1",
                    width: 24,
                    style: {
                        minWidth: "24px"
                    },
                    imageId: (null == V ? void 0 : V.userThumbnailFile) || " ",
                    alt: (null == h ? void 0 : h.buyerDisplayName) || (null == h ? void 0 : h.fromUserDisplayName)
                }), s.createElement(k.rU, {
                    to: "/home/user/".concat((null == h ? void 0 : h.buyerId) || (null == h ? void 0 : h.fromUserId))
                }, (null == h ? void 0 : h.buyerDisplayName) || (null == h ? void 0 : h.fromUserDisplayName))), s.createElement("hr", {
                    className: "tw-h-px tw-bg-[#242A31] tw-opacity-100 tw-border-0"
                })) : s.createElement(s.Fragment, null, s.createElement(z, {
                    className: "tw-justify-between"
                }, s.createElement($, null, s.createElement(w.$1, {
                    className: "tw-px-2",
                    icon: U.faCircleExclamation
                }), (null == V || null === (d = V.stacks) || void 0 === d ? void 0 : d.length) > 1 ? s.createElement(s.Fragment, null, "Detailed breakdown of subscription installments") : s.createElement(s.Fragment, null, "Singular Installment")), te && s.createElement(w.X2, null, y && s.createElement(O.Sn, {
                    disabled: !b,
                    className: "tw-flex-initial",
                    style: {
                        background: b ? "#A8342E" : "",
                        color: b ? "#FFFFFF" : ""
                    },
                    onClick: function() {
                        return y()
                    }
                }, (null == V || null === (f = V.stacks) || void 0 === f ? void 0 : f.length) > 1 ? "Cancel Installments" : "Cancel Installment"), x && (null == V || null === (p = V.stacks) || void 0 === p ? void 0 : p.length) > 1 && s.createElement(O.Sn, {
                    disabled: !b,
                    className: "tw-flex-initial",
                    style: {
                        background: b ? "#A8342E" : "",
                        color: b ? "#FFFFFF" : ""
                    },
                    onClick: function() {
                        return x()
                    }
                }, "Cancel Subscription"))), s.createElement("hr", {
                    className: "tw-h-px tw-bg-[#242A31] tw-opacity-100 tw-border-0"
                })) : null, s.createElement("div", null, (null == J ? void 0 : J.length) && !Q && (null == J ? void 0 : J.map((function(e) {
                    return s.createElement(B, {
                        role: "listitem",
                        key: e.purchaseStackId
                    }, s.createElement(j, {
                        className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-3 gap-1"
                    }, s.createElement(R, null, I()(e.stackStart).format("MMMM D, YYYY"))), s.createElement(j, {
                        className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-3 gap-1"
                    }, s.createElement(R, null, s.createElement(w.b5, null), " ", e.stackPrice.toLocaleString())), s.createElement(j, {
                        className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-3 gap-1"
                    }, s.createElement(W, {
                        isPaid: re(e)
                    }, s.createElement(w.$1, {
                        icon: ce(e)
                    }), " ", se(e))))
                })))))), s.createElement(G, {
                    className: "d-flex flex-row flex-wrap"
                }, s.createElement("span", null, "Transaction ID: ", (null == h ? void 0 : h.tiliaTransactionId) || (null == h ? void 0 : h.id) || "NONE")))
            };
            var A = (0, r.Z)("div", {
                    target: "e7c9lvw9"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                F = (0, r.Z)(w.UU, {
                    target: "e7c9lvw8"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                X = (0, r.Z)("div", {
                    target: "e7c9lvw7"
                })({
                    name: "1xp96cl",
                    styles: "width:100%;background:var(--BoxTitle-BG, #181b1f);border-radius:8px;padding:1.25rem"
                }),
                j = (0, r.Z)(w.X2, {
                    target: "e7c9lvw6"
                })({
                    name: "2iclyw",
                    styles: "line-height:normal;@media (min-width: 768px){flex:1 1 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% / 3);}"
                }),
                z = (0, r.Z)(w.X2, {
                    target: "e7c9lvw5"
                })({
                    name: "7a36v7",
                    styles: "color:#737372;font-size:16px;line-height:normal;align-items:center;text-align:center"
                }),
                B = (0, r.Z)(w.X2, {
                    target: "e7c9lvw4"
                })({
                    name: "1crq648",
                    styles: "line-height:normal;margin-bottom:12px;&:last-child{margin-bottom:0px;}"
                }),
                R = (0, r.Z)("div", {
                    target: "e7c9lvw3"
                })({
                    name: "lugakg",
                    styles: "font-weight:normal"
                }),
                W = (0, r.Z)(R, {
                    shouldForwardProp: function(e) {
                        return "isPaid" !== e
                    },
                    target: "e7c9lvw2"
                })("font-weight:", (function(e) {
                    return e.isPaid ? "500" : "normal"
                }), ";color:", (function(e) {
                    return e.isPaid ? "#6ae3f9" : "#9c9c9c"
                }), ";"),
                $ = (0, r.Z)("div", {
                    target: "e7c9lvw1"
                })({
                    name: "5ofj7n",
                    styles: "font-weight:normal;color:#9c9c9c;font-family:Noto Sans"
                }),
                G = (0, r.Z)("div", {
                    target: "e7c9lvw0"
                })({
                    name: "137hikh",
                    styles: "width:100%;color:#737372;font-family:Noto Sans;&>div{padding:0.25rem 0.5rem;}"
                }),
                q = ["purchase", "currentUser", "columns", "economyOnline"];
            const H = function(e) {
                var t, n = e.purchase,
                    l = e.currentUser,
                    r = (e.columns, e.economyOnline),
                    c = ((0, g.Z)(e, q), (0, s.useState)(!0)),
                    o = (0, a.Z)(c, 2),
                    i = o[0],
                    m = o[1],
                    u = n && !n.permanent && (null == n ? void 0 : n.voided),
                    d = n && !n.permanent && (null == n ? void 0 : n.stackQuantity) > 1,
                    f = n && (1 === (null == n ? void 0 : n.stackQuantity) || 1 === (null == n ? void 0 : n.purchaseQuantity)) && !n.permanent;
                return s.useEffect((function() {
                    m(!0)
                }), [n]), s.createElement(C.d, {
                    className: "mb-3 justify-content-sm-start pb-3"
                }, s.createElement(w.pw, {
                    className: "d-md-none",
                    imageId: n.listingImageId,
                    alt: n.listingDisplayName,
                    fallbackSrc: S
                }), s.createElement(V, {
                    className: "flex-column flex-fill d-flex flex-sm-row align-items-md-center align-items-start flex-sm-wrap gap-1",
                    style: {
                        overflowWrap: "break-word",
                        maxWidth: "100%",
                        width: "calc(100% - 148px)"
                    }
                }, s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Date:"), s.createElement("p", {
                    className: "mb-0"
                }, I()(n.purchaseDate).format("MMM D YYYY"))), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Listing Name:"), s.createElement(w.pw, {
                    className: "d-none d-md-flex",
                    width: 24,
                    style: {
                        minWidth: "24px"
                    },
                    imageId: n.listingImageId,
                    alt: n.listingDisplayName,
                    fallbackSrc: S
                }), s.createElement(Q, {
                    role: "heading"
                }, n.listingDisplayName)), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Payment Type:"), u ? s.createElement(w.X2, null, s.createElement("span", null, "Cancellation")) : d ? s.createElement(w.X2, {
                    className: "gap-1"
                }, s.createElement(C.$y, {
                    role: "progressbar",
                    "aria-valuenow": null == n ? void 0 : n.stackQuantityConsumedAtPurchase,
                    "aria-valuemin": "1",
                    "aria-valuemax": null == n ? void 0 : n.stackQuantity,
                    "aria-labelledby": "progressLabel"
                }, s.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                }, s.createElement("circle", {
                    opacity: "0.5",
                    cx: "10",
                    cy: "10",
                    r: "7.5",
                    stroke: "#1FD1ED",
                    strokeWidth: "5"
                }), s.createElement("circle", {
                    cx: "10",
                    cy: "10",
                    r: "7.5",
                    stroke: "#1FD1ED",
                    strokeWidth: "5",
                    strokeDasharray: 47.1,
                    strokeDashoffset: (n.stackQuantity - n.stackQuantityConsumedAtPurchase) / n.stackQuantity * 47.1
                }))), s.createElement("span", {
                    id: "progressLabel"
                }, "Month ", null == n ? void 0 : n.stackQuantityConsumedAtPurchase, " of ", null == n ? void 0 : n.stackQuantity)) : f ? s.createElement(w.X2, null, s.createElement("span", null, "1 Month")) : null), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Price:"), s.createElement("span", null, s.createElement(w.b5, null), null === (t = n.purchasePrice) || void 0 === t ? void 0 : t.toLocaleString())), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Buyer:"), s.createElement(k.rU, {
                    to: "/home/user/".concat(n.buyerId)
                }, n.buyerDisplayName)), s.createElement(C.M8, {
                    className: "d-none d-md-block tw-cursor-pointer",
                    onClick: function() {
                        return m(!i)
                    }
                }, s.createElement(w.$1, {
                    icon: i ? y.pt : x.mT
                }))), s.createElement(C.M8, {
                    className: "d-md-none"
                }, s.createElement(w.$1, {
                    icon: i ? y.pt : x.mT
                })), !i && s.createElement(P, {
                    purchaseData: n,
                    currentUser: l,
                    economyOnline: r
                }))
            };
            var V = (0, r.Z)(w.X2, {
                    target: "enreg9q1"
                })(""),
                Q = (0, r.Z)("span", {
                    target: "enreg9q0"
                })({
                    name: "19p3r4o",
                    styles: "&:after{content:none;border:none;}@media (min-width: 768px){white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:12ch;}"
                }),
                _ = n(15861),
                K = n(76553),
                J = n(64687),
                ee = n.n(J),
                te = n(64258),
                ne = n(16869),
                le = n(32981);
            const ae = function(e) {
                var t = e.purchase,
                    n = e.stacksData,
                    l = e.listingData,
                    a = e.cancelData,
                    r = e.showModal,
                    c = e.isLoading,
                    o = e.cancelImmediately,
                    i = void 0 !== o && o,
                    m = e.setImmediateCallback,
                    u = e.confirmCallback,
                    d = e.cancelCallback,
                    f = e.isShowConfirm,
                    p = e.isError,
                    v = s.useMemo((function() {
                        var e, t;
                        if (null == n || !n.stacks) return {};
                        var l = (0, D.Z)(n.stacks).sort((function(e, t) {
                                return I()(e.stackStart) - I()(t.stackStart)
                            })),
                            a = null == l || null === (e = l.find((function(e) {
                                var t = e.stackStatus;
                                return "pending" === t || "refunded" === t
                            }))) || void 0 === e ? void 0 : e.stackStart,
                            r = (null == l ? void 0 : l.length) > 0 ? I()(l.at(-1).stackEnd) : null,
                            c = null == l || null === (t = l.filter((function(e) {
                                return "pending" === e.stackStatus
                            }))) || void 0 === t ? void 0 : t.length;
                        return {
                            organizedStacks: l,
                            newEndDate: a,
                            subscriptionEndDate: r,
                            monthsLeft: c
                        }
                    }), [n, a]),
                    h = f && p ? s.createElement(w.qX, {
                        type: "error",
                        title: "Cancel Subscription Unsuccessful"
                    }, "The subscription could not be cancelled, please try again later or reach out to an admin.") : !f || null != a && a.success ? f && null != a && a.success ? s.createElement(w.qX, {
                        type: "success",
                        title: "Cancel Subscription Successful"
                    }, "The subscription has been cancelled successfully!") : s.createElement("p", null, s.createElement("strong", null, "Are you sure you want to cancel the following subscription?"), s.createElement("br", null), s.createElement(C.hh, null, "Only unpaid installments will be refunded.")) : s.createElement(w.qX, {
                        type: "error",
                        title: "Cancel Subscription Unsuccessful"
                    }, "The subscription could not be cancelled, contact an admin regarding ", s.createElement("strong", null, t.purchaseId));
                return s.createElement(w.sm, {
                    headerText: "Cancel Subscription",
                    isOpen: r,
                    confirmText: f ? "Done" : "Confirm",
                    confirmCallback: u,
                    cancelCallback: d,
                    hideCancel: f,
                    size: "lg",
                    isLoading: c
                }, s.createElement(s.Fragment, null, h, r && l && s.createElement(w.x7, null, s.createElement(w.pw, {
                    alt: l.displayName,
                    imageId: l.imageId,
                    fallbackSrc: S
                }), s.createElement(w.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, s.createElement(w.X3, null, l.displayName), s.createElement("p", null, l.description))), (null == v ? void 0 : v.monthsLeft) > 1 && !f && a ? s.createElement("p", null, s.createElement("strong", null, "Total Refund: ", s.createElement(w.b5, null), null == a ? void 0 : a.totalRefundable), " ", t.fromUserDisplayName, "'s new expiration date will be ", I()(null == a ? void 0 : a.newExpiryDate).format("MMMM D, YYYY"), s.createElement("br", null), s.createElement(C.hh, null, t.fromUserDisplayName, " will be refunded for the unused months. Tilia and VRChat Fees are not refunded."), s.createElement(w.XZ, {
                    id: "cancellationCheck",
                    label: " I want to cancel it immediately",
                    checked: i,
                    onChange: function(e) {
                        var t = e.target.checked;
                        return m(t)
                    }
                }), s.createElement(C.hh, null, "This will change ", t.fromUserDisplayName, "'s expiration of the current month to today. The total refund will remain the same.")) : t ? s.createElement("p", null, "This will change ", t.fromUserDisplayName, "'s current subscription expiration from", " ", I()(null == v ? void 0 : v.subscriptionEndDate).format("MMMM D, YYYY"), " to ", i ? "today" : I()(null == v ? void 0 : v.newEndDate).format("MMMM D, YYYY"), ".") : s.createElement("p", null, "This will change ", t.fromUserDisplayName, "'s current subscription expiration to  ", i ? "today" : I()(null == v ? void 0 : v.newEndDate).format("MMMM D, YYYY"), ".")))
            };
            var re = new Map([
                ["consumed", "Paid"],
                ["pending", "Unpaid"],
                ["refunded", "Cancelled"]
            ]);
            const ce = function(e) {
                var t = e.purchase,
                    n = e.stacksData,
                    l = e.purchaseIsSingular,
                    a = e.showModal,
                    r = e.isLoading,
                    c = e.confirmCallback,
                    o = e.cancelCallback,
                    i = e.isShowConfirm,
                    m = e.isError,
                    u = s.useMemo((function() {
                        return null != n && n.stacks ? (0, D.Z)(n.stacks).sort((function(e, t) {
                            return I()(e.stackStart) - I()(t.stackStart)
                        })) : []
                    }), [n]),
                    d = i && m ? s.createElement(w.qX, {
                        type: "error",
                        title: "Cancel Purchase Unsuccessful"
                    }, "The ", l ? "installment" : "intallments", " could not be cancelled, please try again later or reach out to an admin.") : i ? s.createElement(w.qX, {
                        type: "success",
                        title: "Cancel Purchase Successful"
                    }, "The ", l ? "installment has" : "intallments have", " been cancelled successfully!") : s.createElement("p", null, s.createElement("strong", null, "Are you sure you want to cancel the following ", l ? "installment" : "installments", "?"), s.createElement("br", null), s.createElement(C.hh, null, "Only ", l && "an", " unpaid ", l ? "installment" : "installments", " will be refunded.")),
                    f = function(e) {
                        return "consumed" === (null == e ? void 0 : e.toLowerCase())
                    },
                    p = function(e) {
                        return "refunded" === (null == e ? void 0 : e.toLowerCase())
                    },
                    v = function(e) {
                        return f(e) ? Y.f8 : p(e) ? L.faCircleMinus : M.di
                    },
                    h = function(e) {
                        var t, n, l = (t = null == e ? void 0 : e.stackStatus, !(n = f(t)) && p(t) ? null : n ? "(non-refundable)" : "(to be cancelled)");
                        return s.createElement(s.Fragment, null, s.createElement(w.$1, {
                            icon: v(null == e ? void 0 : e.stackStatus)
                        }), " ", re.get(null == e ? void 0 : e.stackStatus.toLowerCase()), l && s.createElement(s.Fragment, null, " ", s.createElement("span", {
                            className: f(null == e ? void 0 : e.stackStatus) ? "tw-text-[#ee5454]" : "tw-text-[#9c9c9c]"
                        }, l)))
                    };
                return s.createElement(w.sm, {
                    headerText: l ? "Cancel Installment" : "Cancel Installments",
                    isOpen: a,
                    loading: r,
                    confirmText: i ? "Done" : "Confirm",
                    confirmCallback: c,
                    cancelCallback: o,
                    hideCancel: i,
                    size: "lg",
                    isLoading: r
                }, d, s.createElement(C.jt, null, s.createElement(w.X2, {
                    className: "tw-flex-column tw-flex-fill -tw-d-flex tw-flex-sm-row tw-align-items-start tw-flex-sm-wrap tw-gap-1 tw-max-w-full tw-w-[calc(100%-8px)]"
                }, s.createElement(C.BW, {
                    className: "flex-column flex-md-row col-sm-3 gap-1"
                }, s.createElement("span", null, "Listing Name")), s.createElement(C.BW, {
                    className: "flex-column flex-md-row col-sm-3 gap-1"
                }, s.createElement("span", null, "Buyer"))), s.createElement(w.X2, {
                    className: "tw-flex-column tw-flex-fill -tw-d-flex tw-flex-sm-row tw-align-items-start tw-flex-sm-wrap tw-gap-1 tw-max-w-full tw-w-[calc(100%-8px)]"
                }, s.createElement(C.BW, {
                    className: "tw-flex-col md:tw-flex-row tw-mb-2 md:tw-mb-0 sm:tw-w-1/4 tw-pr-4 tw-pl-4 tw-gap-1"
                }, s.createElement(w.pw, {
                    className: "tw-flex tw-min-w-[24px]",
                    imageId: t.listingImageId,
                    alt: t.name,
                    fallbackSrc: S
                }), s.createElement(k.rU, {
                    className: "tw-text-ellipsis tw-max-w-[70%] tw-overflow-hidden tw-whitespace-nowrap",
                    to: "../listings#".concat(t.listingId)
                }, t.name)), s.createElement(C.BW, {
                    className: "tw-flex-col md:tw-flex-row tw-mb-2 md:tw-mb-0 sm:tw-w-1/4 tw-pr-4 tw-pl-4 tw-gap-1"
                }, s.createElement(w.pw, {
                    className: "tw-flex tw-mr-1 tw-min-w-[24px]",
                    width: 24,
                    style: {
                        minWidth: "24px"
                    },
                    imageId: (null == n ? void 0 : n.userThumbnailFile) || " ",
                    alt: t.fromUserDisplayName
                }), s.createElement(k.rU, {
                    to: "/home/user/".concat(t.fromUserId)
                }, t.fromUserDisplayName))), s.createElement("div", {
                    className: "tw-flex-row tw-flex-wrap tw-max-w-full tw-w-[calc(100%-8px)]"
                }, s.createElement("hr", {
                    className: "tw-h-px tw-bg-[#2d363f] tw-opacity-100 tw-border-0"
                })), s.createElement("div", {
                    className: "tw-flex-row tw-flex-wrap tw-max-w-full tw-w-[calc(100%-8px)]"
                }, (null == u ? void 0 : u.length) && (null == u ? void 0 : u.map((function(e) {
                    return s.createElement(C.Fr, {
                        key: null == e ? void 0 : e.purchaseStackId
                    }, s.createElement(se, {
                        className: "tw-flex-col md:tw-flex-row tw-mb-2 md:tw-mb-0 sm:tw-w-1/4 tw-pr-4 tw-pl-4 tw-gap-1"
                    }, s.createElement("div", null, I()(null == e ? void 0 : e.stackStart).format("MMMM D, YYYY"))), s.createElement(se, {
                        className: "tw-flex-col md:tw-flex-row tw-mb-2 md:tw-mb-0 sm:tw-w-1/4 tw-pr-4 tw-pl-4 tw-gap-1"
                    }, s.createElement("div", {
                        className: "tw-space-x-2"
                    }, s.createElement(w.b5, null), s.createElement("span", null, null == e ? void 0 : e.stackPrice.toLocaleString()))), s.createElement(se, {
                        className: "tw-flex-col md:tw-flex-row tw-mb-2 md:tw-mb-0 sm:tw-w-1/4 tw-pr-4 tw-pl-4 tw-gap-1"
                    }, s.createElement(C.SF, {
                        isPaid: f(null == e ? void 0 : e.stackStatus)
                    }, e && h(e))))
                }))))))
            };
            var se = (0, r.Z)(w.X2, {
                    target: "e18wldik0"
                })({
                    name: "2iclyw",
                    styles: "line-height:normal;@media (min-width: 768px){flex:1 1 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% / 3);}"
                }),
                oe = ["purchase", "currentUser", "columns", "index", "economyOnline", "enableVoid", "enableCancel"];
            const ie = function(e) {
                var t, n, l, r, c, o, i, m = e.purchase,
                    d = e.currentUser,
                    f = (e.columns, e.index),
                    p = e.economyOnline,
                    v = e.enableVoid,
                    h = void 0 !== v && v,
                    E = e.enableCancel,
                    b = void 0 !== E && E,
                    N = ((0, g.Z)(e, oe), (0, s.useState)(!0)),
                    D = (0, a.Z)(N, 2),
                    M = D[0],
                    L = D[1],
                    Y = (0, le.I0)(),
                    U = (0, s.useState)(!1),
                    O = (0, a.Z)(U, 2),
                    Z = O[0],
                    T = O[1],
                    A = (0, s.useState)(!1),
                    F = (0, a.Z)(A, 2),
                    X = F[0],
                    j = F[1],
                    z = (0, s.useState)(!1),
                    B = (0, a.Z)(z, 2),
                    R = B[0],
                    W = B[1],
                    $ = (0, s.useState)(!1),
                    G = (0, a.Z)($, 2),
                    q = G[0],
                    H = G[1],
                    V = (0, s.useState)(),
                    Q = (0, a.Z)(V, 2),
                    J = Q[0],
                    re = Q[1],
                    se = (0, s.useState)(!1),
                    ie = (0, a.Z)(se, 2),
                    de = ie[0],
                    fe = ie[1],
                    pe = (0, u.WM)(),
                    we = (0, a.Z)(pe, 2),
                    ve = we[0],
                    he = we[1],
                    ge = (he.data, he.isLoading),
                    Ee = he.isError,
                    be = (0, u.x)(),
                    ye = (0, a.Z)(be, 2),
                    xe = ye[0],
                    ke = ye[1],
                    Ne = ke.data,
                    Ie = ke.isLoading,
                    Se = ke.isError,
                    Ce = (0, ne.mr)({
                        listingId: m.listingId,
                        hydrate: !0
                    }, {
                        skip: !m.listingId,
                        refetchOnMountOrArgChange: !0
                    }),
                    De = Ce.data,
                    Me = Ce.isLoading,
                    Le = (Ce.isError, function() {
                        T(!1), j(!1)
                    }),
                    Ye = function() {
                        W(!1), H(!1)
                    },
                    Ue = (0, u.Yn)({
                        purchaseId: m.purchaseId,
                        userId: Ne ? m.fromUserId || m.buyerId : d.id
                    }, {
                        skip: !(m && null != m && m.purchaseId && d && null != d && d.id),
                        refetchOnMountOrArgChange: !0
                    }) || {},
                    Oe = Ue.data,
                    Ze = Ue.isLoading,
                    Te = Ue.isError,
                    Pe = Ue.error,
                    Ae = null == Oe || null === (t = Oe.stacks) || void 0 === t ? void 0 : t.some((function(e) {
                        var t = e.stackStatus;
                        return "refunded" === (t || "").toLowerCase() || "voided" === (t || "").toLowerCase()
                    })),
                    Fe = (null == Oe || null === (n = Oe.stacks) || void 0 === n ? void 0 : n.length) > 1,
                    Xe = 1 === (null == Oe || null === (l = Oe.stacks) || void 0 === l ? void 0 : l.length),
                    je = Fe && (null == Oe || null === (r = Oe.stacks) || void 0 === r ? void 0 : r.filter((function(e) {
                        return "consumed" === (e.stackStatus || "").toLowerCase()
                    })).length),
                    ze = function() {
                        var e = (0, _.Z)(ee().mark((function e(t) {
                            var n, l, a;
                            return ee().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.purchaseId, e.prev = 1, e.next = 4, ve({
                                            purchaseId: n,
                                            reason: "seller void",
                                            isPreview: !1
                                        }).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), Y((0, te.d)({
                                            title: "Failed to cancel ".concat(n, " for ").concat(d.id),
                                            icon: K.eH,
                                            message: null !== (l = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 9:
                                        T(!0), j(!0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Be = function() {
                        var e = (0, _.Z)(ee().mark((function e(t) {
                            var n, l, a, r, c;
                            return ee().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.listingId, l = t.buyerId, b) {
                                            e.next = 5;
                                            break
                                        }
                                        return Y((0, te.d)({
                                            title: "Failed to preview cancel ".concat(purchaseId, " for ").concat(d.id),
                                            icon: K.eH,
                                            message: "Cancelling Subscriptions Not Enabled",
                                            color: "danger",
                                            timeout: 3e3
                                        })), W(!1), e.abrupt("return");
                                    case 5:
                                        return e.prev = 5, e.next = 8, xe({
                                            listingId: n,
                                            buyerId: l,
                                            reason: "seller cancel",
                                            immediate: de,
                                            isPreview: !0
                                        }).unwrap();
                                    case 8:
                                        a = e.sent, W(!0), J !== a.newExpiryDate && re(a.newExpiryDate), e.next = 17;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(5), Y((0, te.d)({
                                            title: "Failed to preview cancel ".concat(n, " for ").concat(l),
                                            icon: K.eH,
                                            message: null !== (r = null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        })), W(!1);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 13]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Re = function() {
                        var e = (0, _.Z)(ee().mark((function e(t) {
                            var n, l, a, r;
                            return ee().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.listingId, l = t.buyerId, e.prev = 1, e.next = 4, xe({
                                            listingId: n,
                                            buyerId: l,
                                            reason: "seller cancel",
                                            immediate: de,
                                            isPreview: !1
                                        }).unwrap();
                                    case 4:
                                        e.sent.success || Y((0, te.d)({
                                            title: "Failed to cancel ".concat(n, " for ").concat(l),
                                            icon: K.eH,
                                            message: "Refund Error(s) present",
                                            color: "danger",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), Y((0, te.d)({
                                            title: "Failed to cancel ".concat(n, " for ").concat(l),
                                            icon: K.eH,
                                            message: null !== (a = null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 11:
                                        W(!0), H(!0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return s.createElement(C.d, {
                    className: "mb-3 justify-content-sm-start pb-3"
                }, Te && s.createElement(w.qX, {
                    type: "error",
                    title: "Error loading transaction information"
                }, null == Pe || null === (c = Pe.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message), Ze || Me ? s.createElement(me, {
                    delay: 50 * f,
                    width: "100%",
                    height: "2rem"
                }) : s.createElement(s.Fragment, null, h && s.createElement(ce, {
                    purchase: m,
                    stacksData: Oe,
                    purchaseIsSingular: Xe,
                    showModal: Z && !R,
                    isLoading: ge || Ze || Me,
                    confirmCallback: function() {
                        return X ? Le() : ze({
                            purchaseId: null == m ? void 0 : m.purchaseId
                        })
                    },
                    cancelCallback: Le,
                    isShowConfirm: X,
                    isError: Ee
                }), b && s.createElement(ae, {
                    purchase: m,
                    stacksData: Oe,
                    listingData: De,
                    cancelData: Ne,
                    showModal: R && !Z,
                    isLoading: Ie || Ze || Me,
                    cancelImmediately: de,
                    setImmediateCallback: function(e) {
                        return fe(e)
                    },
                    confirmCallback: function() {
                        return q ? Ye() : Re({
                            listingId: null == m ? void 0 : m.listingId,
                            buyerId: (null == m ? void 0 : m.fromUserId) || m.buyerId
                        })
                    },
                    cancelCallback: Ye,
                    isShowConfirm: q,
                    isError: Se
                }), m ? s.createElement(s.Fragment, null, s.createElement(w.pw, {
                    className: "d-md-none",
                    imageId: null == m ? void 0 : m.listingImageId,
                    alt: null == m ? void 0 : m.name,
                    fallbackSrc: S
                }), s.createElement(C.SC, {
                    className: "flex-column flex-fill d-flex flex-sm-row align-items-md-center align-items-start flex-sm-wrap gap-1",
                    style: {
                        overflowWrap: "break-word",
                        maxWidth: "100%",
                        width: "calc(100% - 148px)"
                    },
                    role: "row"
                }, s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Date:"), s.createElement("p", {
                    role: "cell",
                    "aria-label": "purchase date",
                    className: "mb-0"
                }, (null == m ? void 0 : m.created_at) && I()(null == m ? void 0 : m.created_at).format("MMM D YYYY"))), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Listing Name:"), s.createElement(w.pw, {
                    className: "d-none d-md-flex",
                    width: 24,
                    style: {
                        minWidth: "24px"
                    },
                    imageId: null == m ? void 0 : m.listingImageId,
                    alt: null == m ? void 0 : m.name,
                    fallbackSrc: S
                }), s.createElement(ue, {
                    role: "cell"
                }, null == m ? void 0 : m.name)), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Payment Type:"), (null == Oe ? void 0 : Oe.stacks) && (Ae ? s.createElement(w.X2, {
                    role: "cell"
                }, s.createElement("span", null, "Cancellation")) : Fe ? s.createElement(w.X2, {
                    role: "cell",
                    className: "gap-1"
                }, s.createElement(C.$y, {
                    role: "progressbar",
                    "aria-valuenow": je,
                    "aria-valuemin": "1",
                    "aria-valuemax": null == Oe || null === (i = Oe.stacks) || void 0 === i ? void 0 : i.length,
                    "aria-labelledby": "progressLabel"
                }, s.createElement("svg", {
                    title: "Month ".concat(je, " of ").concat(Oe.stacks.length),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                }, s.createElement("circle", {
                    opacity: "0.5",
                    cx: "10",
                    cy: "10",
                    r: "7.5",
                    stroke: "#1FD1ED",
                    strokeWidth: "5"
                }), s.createElement("circle", {
                    cx: "10",
                    cy: "10",
                    r: "7.5",
                    stroke: "#1FD1ED",
                    strokeWidth: "5",
                    strokeDasharray: 47.1,
                    strokeDashoffset: je / Oe.stacks.length * 47.1
                }))), s.createElement("span", {
                    id: "progressLabel"
                }, "Month ", je, " of ", Oe.stacks.length)) : Xe ? s.createElement(w.X2, {
                    role: "cell"
                }, s.createElement("span", null, "1 Month")) : null)), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Price:"), s.createElement("span", {
                    role: "cell"
                }, s.createElement(w.b5, null), null == m || null === (o = m.amountTokens) || void 0 === o ? void 0 : o.toLocaleString())), s.createElement(C.LX, {
                    className: "flex-column flex-md-row mb-2 mb-md-0 col-sm-6 gap-1"
                }, s.createElement("h6", {
                    className: "d-md-none mb-0 me-1"
                }, "Buyer:"), s.createElement(k.rU, {
                    role: "cell",
                    to: "/home/user/".concat(null == m ? void 0 : m.fromUserId)
                }, null == m ? void 0 : m.fromUserDisplayName)), s.createElement(C.M8, {
                    className: "d-none d-md-block tw-cursor-pointer",
                    onClick: function() {
                        return L(!M)
                    }
                }, s.createElement(w.$1, {
                    icon: M ? y.pt : x.mT
                }))), s.createElement(C.M8, {
                    className: "d-md-none"
                }, s.createElement(w.$1, {
                    icon: M ? y.pt : x.mT
                })), !M && s.createElement(P, {
                    purchaseData: m,
                    currentUser: d,
                    economyOnline: p,
                    cancelError: Se || Ee,
                    onCancelClick: function() {
                        return Be({
                            listingId: null == m ? void 0 : m.listingId,
                            buyerId: (null == m ? void 0 : m.fromUserId) || m.buyerId
                        })
                    }
                })) : null))
            };
            var me = (0, r.Z)(w.UU, {
                    target: "e1jzchu1"
                })({
                    name: "1vx3e21",
                    styles: "margin:0.4rem 0"
                }),
                ue = (0, r.Z)("span", {
                    target: "e1jzchu0"
                })({
                    name: "19p3r4o",
                    styles: "&:after{content:none;border:none;}@media (min-width: 768px){white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:12ch;}"
                }),
                de = ["purchaseList", "currentUser", "mode", "onSortByUpdate", "onOrderUpdate", "columns", "economyOnline"],
                fe = [v.IR.DATE, v.IR.LISTING, v.IR.PAYMENT_TYPE, v.IR.PRICE, v.IR.BUYER];
            const pe = function(e) {
                var t = e.purchaseList,
                    n = e.currentUser,
                    l = e.mode,
                    r = e.onSortByUpdate,
                    c = e.onOrderUpdate,
                    o = e.columns,
                    i = e.economyOnline,
                    m = ((0, g.Z)(e, de), s.useState(v.Km.DESCENDING)),
                    u = (0, a.Z)(m, 2),
                    d = u[0],
                    f = u[1],
                    p = s.useState(v.IR.DATE),
                    h = (0, a.Z)(p, 2),
                    y = h[0],
                    x = h[1],
                    k = s.useMemo((function() {
                        return null != t && t.length ? t.map((function(e, t) {
                            return "sold" !== l ? s.createElement(H, {
                                key: e.purchaseId,
                                purchase: e,
                                columns: o,
                                currentUser: n,
                                index: t,
                                economyOnline: i
                            }) : s.createElement(ie, {
                                key: e.purchaseId,
                                purchase: e,
                                columns: o,
                                currentUser: n,
                                index: t,
                                economyOnline: i,
                                enableCancel: !0
                            })
                        })) : s.createElement(C.$J, null, "You haven't any matching transactions!")
                    }), [t]);
                return s.createElement(C.y6, null, s.createElement(C.iA, null, s.createElement(C.xD, {
                    className: "d-none d-md-flex mb-3 gap-1"
                }, null == o ? void 0 : o.map((function(e, t) {
                    return "sold" !== l || e.disabled ? s.createElement(C.xs, {
                        key: e.accessor
                    }, e.label) : s.createElement(C.xs, {
                        onClick: function() {
                            return function(e) {
                                var t = fe[e];
                                if ("sold" === l) {
                                    if (t !== y) return x(t), void r({
                                        sort: t
                                    });
                                    var n = d === v.Km.DESCENDING ? v.Km.ASCENDING : v.Km.DESCENDING;
                                    f(n), c({
                                        order: n
                                    })
                                }
                            }(t)
                        },
                        key: e.accessor
                    }, e.label, " ", y !== fe[t] ? null : d === v.Km.ASCENDING ? s.createElement(w.$1, {
                        className: "align-text-top",
                        icon: b.u9
                    }) : s.createElement(w.$1, {
                        className: "align-text-bottom",
                        icon: E.fo
                    }))
                })), s.createElement("div", {
                    style: {
                        maxWidth: "38px",
                        width: "38px"
                    }
                })), s.createElement(C.RM, null, k)))
            };
            var we = n(57310);
            var ve = [{
                key: 0,
                label: "All",
                value: "ALL"
            }, {
                key: 1,
                label: "Last 7 Days",
                value: "P7D"
            }, {
                key: 2,
                label: "Last Month",
                value: "P1M"
            }, {
                key: 3,
                label: "Last 3 Months",
                value: "P3M"
            }, {
                key: 4,
                label: "Last 6 Months",
                value: "P6M"
            }, {
                key: 5,
                label: "Last Year",
                value: "P1Y"
            }, {
                key: 6,
                label: "Custom Range",
                value: "CUSTOM RANGE"
            }];
            const he = function(e) {
                var t = e.onDatesUpdate,
                    n = e.onSearchUpdate,
                    l = e.onExport,
                    r = e.hideSearchbar,
                    c = e.hideExport,
                    o = (0, m.IB)().data,
                    i = null == o ? void 0 : o.id,
                    u = f()(),
                    d = s.useState(!1),
                    p = (0, a.Z)(d, 2),
                    h = p[0],
                    g = p[1],
                    E = s.useState(u.clone().subtract(1, "isoweek")),
                    b = (0, a.Z)(E, 2),
                    y = b[0],
                    x = b[1],
                    k = s.useState(u.clone()),
                    N = (0, a.Z)(k, 2),
                    I = N[0],
                    S = N[1],
                    C = s.useState(""),
                    D = (0, a.Z)(C, 2),
                    M = D[0],
                    L = D[1],
                    Y = s.useState("ALL"),
                    U = (0, a.Z)(Y, 2),
                    O = U[0],
                    Z = U[1],
                    T = s.useMemo((function() {
                        return [f().isMoment(y) && y.isAfter(v.pH) && y.isBefore(I), f().isMoment(I) && I.isAfter(y || v.pH) && I.isBefore(f()())]
                    }), [y, I]),
                    P = (0, a.Z)(T, 2),
                    A = P[0],
                    F = P[1];
                return s.createElement(ge, null, s.createElement(w.X2, {
                    className: "align-items-center flex-wrap gap-2",
                    style: {
                        justifyContent: "space-between"
                    }
                }, s.createElement(be, null, s.createElement(w.Lt, {
                    label: "Duration",
                    options: ve,
                    value: O,
                    onChange: function(e) {
                        if (Z(e), "CUSTOM RANGE" === e) t({
                            start: y,
                            end: I
                        }), g(!0);
                        else {
                            var n = f().duration(e),
                                l = "ALL" === e ? f()(v.pH) : f()().subtract(n);
                            t("ALL" === e ? e : {
                                start: l,
                                end: f()()
                            }), g(!1)
                        }
                    }
                }), s.createElement(ye, null, s.createElement(w.II, {
                    type: "date",
                    className: "m-1",
                    disabled: "CUSTOM RANGE" !== O,
                    invalid: A,
                    value: null == y ? void 0 : y.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var n = f()(e.target.value);
                        x(n), "CUSTOM RANGE" === O && t({
                            start: n,
                            end: I
                        })
                    },
                    min: v.pH,
                    max: null == I ? void 0 : I.format("YYYY-MM-DD"),
                    hidden: !h
                }), h && s.createElement("span", null, " to "), s.createElement(w.II, {
                    type: "date",
                    className: "m-1",
                    disabled: "CUSTOM RANGE" !== O,
                    invalid: F,
                    value: null == I ? void 0 : I.format("YYYY-MM-DD"),
                    onChange: function(e) {
                        var n = f()(e.target.value);
                        S(n), "CUSTOM RANGE" === O && t({
                            start: y,
                            end: n
                        })
                    },
                    min: (null == y ? void 0 : y.format("YYYY-MM-DD")) || v.pH,
                    max: f()().format("YYYY-MM-DD"),
                    hidden: !h
                }))), s.createElement(xe, null, s.createElement(Ee, {
                    type: "text",
                    id: "search-transaction-list",
                    placeholder: "Search by name or transaction ID",
                    onChange: function(e) {
                        var t = e.target.value,
                            l = void 0 === t ? "" : t;
                        L(l), n(l)
                    },
                    value: M,
                    hidden: r
                }), s.createElement(w.zx, {
                    disabled: !i,
                    onClick: function() {
                        l()
                    },
                    hidden: c
                }, s.createElement(w.$1, {
                    icon: we.XC
                }), " Export"))))
            };
            var ge = (0, r.Z)("div", {
                    target: "ea9zz2j4"
                })({
                    name: "3dn411",
                    styles: "border-radius:8px;line-height:normal;padding:1rem,1.25rem;margin:0 0 0.4rem 0"
                }),
                Ee = (0, r.Z)(w.II, {
                    target: "ea9zz2j3"
                })({
                    name: "82a6rk",
                    styles: "flex:1"
                }),
                be = (0, r.Z)(w.X2, {
                    target: "ea9zz2j2"
                })({
                    name: "1ixe09m",
                    styles: "align-items:center;flex:1 1 auto;flex-wrap:wrap"
                }),
                ye = (0, r.Z)("div", {
                    target: "ea9zz2j1"
                })({
                    name: "1o7d3sk",
                    styles: "display:flex;align-items:center;flex-wrap:wrap"
                }),
                xe = (0, r.Z)(w.X2, {
                    target: "ea9zz2j0"
                })({
                    name: "1iidqzd",
                    styles: "flex:1 1 auto;gap:0.5rem;@media screen (min-width: 576px){min-width:380px;}"
                });

            function ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t && (l = l.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, l)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ke(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ie = function(e) {
                var t, n, l, r, o = e.mode,
                    i = void 0 === o ? v.yy.ACTIVE : o,
                    d = e.economyOnline,
                    g = (0, m.IB)().data,
                    E = g.id,
                    b = s.useState(null),
                    y = (0, a.Z)(b, 2),
                    x = y[0],
                    k = y[1],
                    N = s.useState(null),
                    I = (0, a.Z)(N, 2),
                    S = I[0],
                    D = I[1],
                    M = s.useState(v.IR.DATE),
                    L = (0, a.Z)(M, 2),
                    Y = L[0],
                    U = L[1],
                    O = s.useState(v.Km.DESCENDING),
                    Z = (0, a.Z)(O, 2),
                    T = Z[0],
                    P = Z[1],
                    A = s.useState(1),
                    F = (0, a.Z)(A, 2),
                    X = F[0],
                    j = F[1],
                    z = s.useState(""),
                    B = (0, a.Z)(z, 2),
                    R = B[0],
                    W = B[1],
                    $ = (0, h.Nr)(R),
                    G = i === v.yy.SOLD,
                    q = (0, u.JJ)(Ne(Ne(Ne(Ne({}, i === v.yy.ACTIVE && {
                        buyerId: E,
                        active: !0
                    }), i === v.yy.EXPIRED && {
                        buyerId: E,
                        active: !1
                    }), i === v.yy.SOLD && {
                        sellerId: E
                    }), {}, {
                        n: 10,
                        pageValue: X
                    }), {
                        skip: !E,
                        refetchOnMountOrArgChange: !0
                    }),
                    V = q.data,
                    Q = q.isLoading,
                    _ = q.isError,
                    K = q.error,
                    J = (0, u.ym)(Ne(Ne(Ne(Ne({}, (i === v.yy.ACTIVE || i === v.yy.EXPIRED) && {
                        fromUserId: E,
                        type: v.L0.ALL
                    }), i === v.yy.SOLD && {
                        type: v.L0.SALES
                    }), {}, {
                        n: 10,
                        pageValue: X,
                        sort: Y,
                        order: T,
                        search: $
                    }, x && {
                        dateMin: x
                    }), S && {
                        dateMax: S
                    }), {
                        skip: !E,
                        refetchOnMountOrArgChange: !0
                    }),
                    ee = J.data,
                    te = J.isLoading,
                    ne = J.isError,
                    le = J.error,
                    ae = (null == ee || null === (t = ee.transactions) || void 0 === t ? void 0 : t.length) >= 0 && (null == V || null === (n = V.purchases) || void 0 === n ? void 0 : n.length) > 0,
                    re = s.useMemo((function() {
                        return G && ae ? ee.transactions : (e = null == V ? void 0 : V.purchases, null !== x && null !== S && null != e && e.length ? null == e ? void 0 : e.filter((function(e) {
                            return f()(e.purchaseDate, "YYYY-MM-DD").isBetween(x, S)
                        })) : e);
                        var e
                    }), [ee, V]),
                    ce = s.createElement(s.Fragment, null, (_ || ne) && s.createElement(w.qX, {
                        type: "error",
                        title: "Error loading purchase information"
                    }, null == K || null === (l = K.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message, null == le || null === (r = le.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message), Q && te ? s.createElement(Ce, {
                        height: "12rem"
                    }) : s.createElement(s.Fragment, null, G && s.createElement(he, {
                        onDatesUpdate: function(e) {
                            var t = "string" != typeof e && "start" in e ? f()(e.start, "YYYY-MM-DD") : null,
                                n = "string" != typeof e && "end" in e ? f()(e.end, "YYYY-MM-DD") : null;
                            k(t), D(n)
                        },
                        onSearchUpdate: W,
                        hideExport: !0
                    }), null != re && re.length ? s.createElement(s.Fragment, null, G && s.createElement(pe, {
                        purchaseList: re,
                        columns: G ? [{
                            label: "Date",
                            accessor: "created_at"
                        }, {
                            label: "Listing Name",
                            accessor: "name",
                            imageId: "imageId",
                            id: "listingId"
                        }, {
                            label: "Payment Type",
                            accessor: "paymentType",
                            disabled: !0
                        }, {
                            label: "Price",
                            accessor: "amountTokens"
                        }, {
                            label: "Buyer",
                            accessor: "fromUserDisplayName",
                            id: "fromUserId",
                            disabled: !0
                        }] : [],
                        mode: i,
                        currentUser: g,
                        onSortByUpdate: function(e) {
                            return U(null == e ? void 0 : e.sort)
                        },
                        onOrderUpdate: function(e) {
                            return P(null == e ? void 0 : e.order)
                        },
                        economyOnline: d
                    }), !G && re.slice(0, 10).map((function(e) {
                        return s.createElement(H, {
                            key: e.purchaseId,
                            purchase: e,
                            currentUser: g
                        })
                    })), G && s.createElement(p.Z, {
                        className: "pagination-bar",
                        currentPage: X,
                        totalCount: null == ee ? void 0 : ee.totalCount,
                        pageSize: 10,
                        onPageChange: function(e) {
                            j(e)
                        }
                    })) : ae ? s.createElement("div", {
                        className: "tw-flex tw-justify-center tw-items-center tw-h-96"
                    }, s.createElement("div", {
                        className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-max-w-[500px]"
                    }, s.createElement("div", null, s.createElement(w.$1, {
                        icon: c.dL,
                        size: "lg",
                        width: 60,
                        className: "tw-mb-6"
                    }), s.createElement("h4", {
                        className: "tw-mb-2"
                    }, "You have no matching sales."), s.createElement("div", {
                        className: "tw-mb-4"
                    }, s.createElement("span", {
                        className: "tw-text-gray-500"
                    }, "No sales match your current date range or filter, try searching a different range or", s.createElement(C.AN, {
                        className: "tw-bg-[#064b5c05] tw-border-transparent tw-rounded-none",
                        href: "../storefront/sales",
                        rel: "noreferrer"
                    }, "reset your data filters.")))))) : s.createElement("div", {
                        className: "tw-flex tw-justify-center tw-items-center tw-h-96"
                    }, s.createElement("div", {
                        className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-max-w-[500px]"
                    }, s.createElement("div", null, s.createElement(w.$1, {
                        icon: c.dL,
                        size: "lg",
                        width: 60,
                        className: "tw-mb-6"
                    }), s.createElement("h4", {
                        className: "tw-mb-2"
                    }, "You haven't made any sales yet."), s.createElement("div", {
                        className: "tw-mb-4"
                    }, s.createElement("span", {
                        className: "tw-text-gray-500"
                    }, "The sales history allows you to see information about every sale you've made.")))))));
                return G ? ce : s.createElement(s.Fragment, null, s.createElement(w.oI, null, s.createElement("h4", {
                    className: "fw-normal mb-0"
                }, "Subscriptions")), s.createElement(w.Ao, null, ce))
            };
            Ie.propTypes = {
                mode: i().oneOf(Object.values(v.yy))
            };
            const Se = Ie;
            var Ce = (0, r.Z)(w.UU, {
                target: "er6rm1r0"
            })({
                name: "1vx3e21",
                styles: "margin:0.4rem 0"
            })
        }
    }
]);
//# sourceMappingURL=cabf5082b3a2b2e6765ac3fb5e258f6b24a49559c304a9e43f01f4e3fd6f74fa.js.map