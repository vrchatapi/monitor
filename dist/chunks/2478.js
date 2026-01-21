(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2478], {
        28963: (e, t) => {
            "use strict";
            var a = "hourglass",
                n = [9203, 62032, "hourglass-empty"],
                r = "f254",
                l = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [384, 512, n, r, l]
            }, t.DH = t.DF
        },
        72478: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => re
            });
            var n = a(15861),
                r = a(54546),
                l = a(85020),
                o = a(64687),
                s = a.n(o),
                c = a(96985),
                i = a(35187),
                u = a(95896),
                m = a(83807),
                w = a(66736),
                d = a(67294),
                p = a(89250),
                f = a(79655),
                E = a(53359);
            const y = function(e) {
                var t = e.errorMessage,
                    a = e.onClose;
                return d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-gap-4"
                }, d.createElement(c.$1, {
                    icon: E.faTriangleExclamation,
                    size: "4x",
                    className: "tw-text-placeholder-text"
                }), d.createElement("p", {
                    className: "tw-mb-0 tw-text-light-grey"
                }, t), d.createElement(c.zx, {
                    onClick: a,
                    containerClasses: "tw-max-w-[320px] tw-w-full"
                }, "Try Again"))
            };
            var g = a(43862);
            const v = function(e) {
                var t = e.title,
                    a = e.message;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-6 tw-p-20"
                }, d.createElement(g.Z, {
                    size: "4x"
                }), d.createElement("div", {
                    className: "tw-text-center"
                }, t && d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold"
                }, t), a && d.createElement("p", {
                    className: "tw-mb-0"
                }, a)))
            };
            const h = function(e) {
                var t = e.status,
                    a = e.onCancel,
                    n = void 0 === a ? function() {} : a,
                    r = e.onClose,
                    l = void 0 === r ? function() {} : r,
                    o = e.onError,
                    s = void 0 === o ? function() {} : o,
                    i = t || {},
                    u = i.activePayoutTiliaAmount,
                    m = void 0 === u ? 0 : u,
                    w = i.activePayout;
                return w || s(), d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-items-center"
                }, d.createElement("div", {
                    className: "tw-my-14 tw-max-w-[530px] tw-w-full tw-text-center"
                }, d.createElement("h4", null, "Are you sure you want to cancel this payout request?"), d.createElement("p", null, d.createElement(c.b5, {
                    className: "tw-inline-block"
                }), " ", m.toLocaleString(), " credits will be returned to your VRChat credit balance.")), d.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3"
                }, d.createElement(c.zx, {
                    neutral: !0,
                    containerClasses: "tw-flex-1",
                    onClick: l
                }, "Back"), d.createElement(c.zx, {
                    danger: !0,
                    containerClasses: "tw-flex-1",
                    onClick: function() {
                        return n(w.transactionId)
                    }
                }, "Cancel Payout Request")))
            };
            const x = function(e) {
                var t = e.cancelledData,
                    a = e.onClose,
                    n = (t || {}).paymentAmountTokens;
                return d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-8 tw-my-12"
                }, d.createElement("p", {
                    className: "tw-text-center"
                }, d.createElement(c.b5, {
                    className: "tw-inline-block"
                }), " ", (n || 0).toLocaleString(), " credits have been returned to your VRChat balance. You can try the payout process again any time."), d.createElement(c.zx, {
                    onClick: a,
                    containerClasses: "tw-w-full tw-max-w-[320px]"
                }, "Done"))
            };
            var b = "CONFIRM",
                C = "PROCESSING",
                N = "CANCELLED",
                P = "ERROR";
            const k = function(e) {
                var t = e.status,
                    a = e.onClose,
                    l = e.onCancel,
                    o = (0, d.useState)(b),
                    c = (0, r.Z)(o, 2),
                    i = c[0],
                    u = c[1],
                    m = (0, d.useState)(null),
                    w = (0, r.Z)(m, 2),
                    p = w[0],
                    f = w[1],
                    E = function() {
                        var e = (0, n.Z)(s().mark((function e() {
                            var a, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != t && t.activePayout) {
                                            e.next = 3;
                                            break
                                        }
                                        return u(P), e.abrupt("return");
                                    case 3:
                                        return u(C), e.prev = 4, e.next = 7, l(null == t || null === (a = t.activePayout) || void 0 === a ? void 0 : a.transactionId);
                                    case 7:
                                        n = e.sent, f(n), u(N), e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(4), console.error("Error cancelling payout request:", e.t0), u(P);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(d.Fragment, null, i === b && d.createElement(h, {
                    status: t,
                    onCancel: E,
                    onClose: a,
                    onError: function() {
                        return u(P)
                    }
                }), i === C && d.createElement(v, {
                    title: "Processing request...",
                    message: "This usually takes a few seconds."
                }), i === N && d.createElement(x, {
                    cancelledData: p,
                    onClose: a
                }), i === P && d.createElement(y, {
                    errorMessage: "There was an error cancelling this payout request. If this error persists, contact support.",
                    onClose: a
                }))
            };
            var S = a(16686);
            const R = function(e) {
                var t = e.onClose;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-p-10"
                }, d.createElement(c.$1, {
                    icon: S.faCircleCheck,
                    size: "4x",
                    className: "tw-text-message-success"
                }), d.createElement("div", {
                    className: "tw-text-center tw-mb-10"
                }, d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your payout request has been received by Tilia. Funds should arrive in your selected payment method according to their standard delivery times.")), d.createElement(c.zx, {
                    type: "button",
                    onClick: t,
                    containerClasses: "tw-max-w-[320px] tw-w-full",
                    "aria-label": "Close payout confirmation dialog"
                }, "Done"))
            };
            const L = function(e) {
                var t = e.status,
                    a = e.onLoad,
                    n = void 0 === a ? function() {} : a,
                    l = e.onComplete,
                    o = void 0 === l ? function() {} : l,
                    s = e.onError,
                    c = void 0 === s ? function() {} : s,
                    i = t || {},
                    u = i.activePayoutTiliaWidget,
                    m = i.activePayoutTiliaAmount,
                    w = "tilia-widget-container",
                    p = (0, d.useState)(!1),
                    f = (0, r.Z)(p, 2),
                    E = f[0],
                    y = f[1],
                    g = (0, d.useState)(!1),
                    v = (0, r.Z)(g, 2),
                    h = (v[0], v[1]),
                    x = (0, d.useState)(!1),
                    b = (0, r.Z)(x, 2),
                    C = (b[0], b[1]),
                    N = (0, d.useState)(!1),
                    P = (0, r.Z)(N, 2),
                    k = (P[0], P[1]),
                    S = (0, d.useMemo)((function() {
                        return null != u && u.redirect ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/v1/widget" : "https://web.tilia-inc.com/ui/v1/widget" : null
                    }), [u]),
                    R = (0, d.useMemo)((function() {
                        return null != u && u.redirect && null != u && u.nonce_auth_id ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : "https://web.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : null
                    }), [u]),
                    L = function(e) {
                        h(!0), n()
                    },
                    T = function(e) {
                        C(!0), o(e)
                    },
                    I = function(e) {
                        k(!0), c(e)
                    };
                return (0, d.useEffect)((function() {
                    if (S) {
                        if (!document.querySelector('script[src="'.concat(S, '"]'))) {
                            var e = document.createElement("script");
                            return e.src = S, e.onload = function() {
                                    y(!0)
                                }, e.onerror = function() {
                                    k(!0), c(new Error("Failed to load external script: ".concat(S)))
                                }, document.body.appendChild(e),
                                function() {
                                    document.body.contains(e) && document.body.removeChild(e), y(!1)
                                }
                        }
                        y(!0)
                    }
                }), [S]), (0, d.useEffect)((function() {
                    if (E && null != u && u.redirect && R) try {
                        window.Tilia.execute({
                            rootId: w,
                            flow: "payout-full",
                            redirect: R,
                            onComplete: T,
                            onError: function() {
                                return I
                            },
                            debug: !1,
                            onReady: L,
                            flowConfig: {
                                hideWalletBalance: !0,
                                hideExitButtons: !0,
                                verificationLevel: "basic_pii",
                                currency: "VRC",
                                fixedAmount: m
                            }
                        })
                    } catch (e) {
                        console.error("Error initializing Tilia widget:", e), k(!0)
                    }
                }), [E, w, u]), d.createElement("div", {
                    id: w,
                    style: {
                        width: "100%",
                        height: "700px"
                    }
                })
            };
            var T = "LOADING",
                I = "WIDGET",
                F = "VERIFYING",
                A = "COMPLETED",
                Z = "ERROR";
            const D = function(e) {
                var t, a = e.status,
                    l = e.onClose,
                    o = d.useState(T),
                    c = (0, r.Z)(o, 2),
                    i = c[0],
                    u = c[1],
                    p = (null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null,
                    f = (0, m.Tu)().user,
                    E = (0, w.xW)({
                        userId: null == f ? void 0 : f.id
                    }, {
                        skip: !f
                    }).refetch,
                    g = (0, w.im)(),
                    h = (0, r.Z)(g, 1)[0],
                    x = function() {
                        var e = (0, n.Z)(s().mark((function e(t) {
                            var a, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return u(F), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, h({
                                            transactionId: p,
                                            tiliaPayoutId: n
                                        }).unwrap();
                                    case 5:
                                        return e.next = 7, E().unwrap();
                                    case 7:
                                        u(A), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), u(Z), console.error("Error verifying payout status:", e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(d.Fragment, null, (i === T || i === I) && d.createElement("div", {
                    className: "tw-w-full"
                }, i === T && d.createElement(v, {
                    title: "Loading Payout...",
                    message: "We're securely connecting you to complete your payout."
                }), d.createElement("div", {
                    className: i === T ? "tw-invisible" : ""
                }, d.createElement(L, {
                    status: a,
                    onComplete: x,
                    onLoad: function() {
                        u(I)
                    },
                    onError: function() {
                        u(Z)
                    }
                }))), i === F && d.createElement(v, {
                    message: "Please wait while we verify the transaction status."
                }), i === A && d.createElement(R, {
                    onClose: l
                }), i === Z && d.createElement(y, {
                    errorMessage: "There was an issue processing your payout. Please try again or contact support if the problem persists.",
                    onClose: l
                }))
            };
            var O = a(82414),
                _ = a(45189),
                q = a(83505),
                M = [u.FZ.CANCELLED_PLATFORM, u.FZ.CANCELLED_REVERSED, u.FZ.CANCELLING];
            const z = function(e) {
                var t = e.payouts,
                    a = d.useMemo((function() {
                        return new Intl.DateTimeFormat(void 0, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }), []);
                return d.createElement("div", {
                    className: "tw-w-full tw-p-4 tw-bg-grey tw-rounded-lg tw-overflow-auto tw-relative"
                }, (!t || 0 === t.length) && d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-20"
                }, d.createElement(c.$1, {
                    icon: _.X5,
                    className: "tw-text-6xl tw-text-placeholder-text tw-mb-4"
                }), d.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-text-lighter-grey"
                }, "No payouts yet.", d.createElement("br", null), "You'll see your payout history here once you make your first one.")), t && t.length > 0 && d.createElement("table", {
                    className: "tw-w-full tw-relative tw-min-w-max tw-table-auto"
                }, d.createElement("thead", {
                    className: "tw-bg-grey"
                }, d.createElement("tr", {
                    className: "tw-border-b tw-border-solid tw-text-light-grey tw-border-hr-line-color"
                }, d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Date"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Provider"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Amount"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Status"))), d.createElement("tbody", null, t.map((function(e) {
                    return d.createElement("tr", {
                        key: e.transactionId,
                        className: "tw-border-b tw-border-solid tw-border-hr-line-color"
                    }, d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, null != e && e.paymentCreated ? a.format(new Date(e.paymentCreated)).replace(/, /g, " ") : "Invalid Date"), d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, e.paymentPlatform), d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, d.createElement(c.b5, null), " ", e.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                        className: (0, q.cx)("tw-py-5 tw-px-3", M.includes(e.paymentStatusCode) && "tw-text-error-message-red", e.paymentStatusCode === u.FZ.PLATFORM_COMPLETED && "tw-text-message-success")
                    }, d.createElement("div", {
                        className: "tw-relative tw-whitespace-nowrap"
                    }, e.paymentStatus || "Processing", " ", d.createElement("div", {
                        className: "tw-group tw-relative tw-inline-block"
                    }, d.createElement(c.$1, {
                        className: "tw-text-[#797979]",
                        icon: O.sq
                    }), function(e) {
                        switch (e.paymentStatusCode) {
                            case u.FZ.CANCELLED_PLATFORM:
                            case u.FZ.CANCELLED_REVERSED:
                            case u.FZ.CANCELLING:
                                var t = a.format(new Date(e.paymentCreated)).replace(/, /g, " ");
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, (null == e ? void 0 : e.reversalReason) || "Cancel reason missing", ". At ", t);
                            case u.FZ.PLATFORM_COMPLETED:
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, "Your payout was successfully processed and funds have been transferred to your selected payment method.");
                            case u.FZ.PLATFORM_PROCESSING:
                            case u.FZ.INIT:
                            case u.FZ.LEDGER_READY:
                            case u.FZ.LEDGER_PROCESSING:
                            case u.FZ.LEDGER_SETTLED:
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, "Your payout is currently being processed by the provider. This usually takes a few days.", " ", d.createElement(f.rU, {
                                    to: "https://creators.vrchat.com/economy/payout/",
                                    target: "_blank",
                                    rel: "noreferrer"
                                }, "Learn More"));
                            default:
                                return ""
                        }
                    }(e)))))
                })))))
            };
            var U = a(28963),
                Y = a(76553);
            const G = function(e) {
                var t = e.status,
                    a = e.onContinuePayout,
                    n = e.onCancelPayout;
                console.log("Rendering PayoutOngoing with status:", t);
                var r = t.activePayout,
                    l = t.activePayoutCancellable;
                if (!r) return null;
                var o = d.useMemo((function() {
                        return new Intl.DateTimeFormat(void 0, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }), []),
                    s = r.paymentStatusCode === u.FZ.PLATFORM_READY,
                    i = r.paymentStatusCode === u.FZ.PLATFORM_PROCESSING;
                return d.createElement("div", {
                    className: "tw-w-full tw-p-4 tw-bg-grey tw-rounded-lg tw-overflow-x-auto tw-relative"
                }, d.createElement("table", {
                    className: "tw-w-full tw-table-auto"
                }, d.createElement("thead", {
                    className: "tw-bg-grey tw-w-full"
                }, d.createElement("tr", {
                    className: "tw-border-b tw-font-normal tw-text-light-grey tw-border-solid tw-border-hr-line-color"
                }, d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Date"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Provider"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Amount"), d.createElement("th", {
                    className: "tw-pb-3 tw-px-3 tw-font-normal"
                }, "Status"))), d.createElement("tbody", null, d.createElement("tr", null, d.createElement("td", {
                    className: "tw-py-5 tw-px-3 "
                }, null != r && r.paymentCreated ? o.format(new Date(r.paymentCreated)).replace(/, /g, " ") : "Invalid Date"), d.createElement("td", {
                    className: "tw-py-5 tw-px-3 "
                }, r.paymentPlatform), d.createElement("td", {
                    className: "tw-py-5 tw-px-3 "
                }, d.createElement(c.b5, null), " ", r.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                    className: (0, q.cx)("tw-py-5 tw-px-3 tw-flex tw-items-center tw-gap-2 tw-flex-nowrap", {
                        "tw-text-orange": s
                    })
                }, s && d.createElement(c.$1, {
                    icon: Y.eH
                }), i && d.createElement(c.$1, {
                    icon: U.DH
                }), d.createElement("span", null, r.paymentStatus || "Incomplete"), s && d.createElement(d.Fragment, null, d.createElement(c.zx, {
                    type: "button",
                    onClick: a
                }, "Continue"), d.createElement(c.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: n,
                    disabled: !l
                }, "Cancel")))))))
            };
            var $ = a(83492),
                j = a.n($);
            const V = function(e) {
                var t = e.onContinue,
                    a = (e.activePayout || {}).transactionId;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-gap-2 tw-mt-12 tw-mb-14"
                }, d.createElement("div", {
                    className: "tw-rounded-full tw-bg-white tw-w-16 tw-h-16 tw-justify-center tw-items-center tw-flex tw-overflow-hidden"
                }, d.createElement("img", {
                    src: j(),
                    alt: "Tilia Logo"
                })), d.createElement("h4", {
                    className: "tw-font-bold tw-text-center tw-leading-8 tw-mb-0"
                }, "Request Approved:", d.createElement("br", null), "Continue in Tilia to complete payout"), d.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "Follow the steps with Tilia to choose how to receive your funds.")), d.createElement("div", {
                    className: "tw-max-w-[320px] tw-w-full"
                }, d.createElement(c.zx, {
                    onClick: t,
                    disabled: !a,
                    "aria-label": "Continue in Tilia"
                }, "Continue in Tilia")))
            };
            const B = function(e) {
                var t = e.status,
                    a = e.onCancel,
                    n = e.onConfirm,
                    l = e.requestError,
                    o = t.earningsBalance,
                    s = l || {},
                    i = s.status_code,
                    m = s.message,
                    w = (0, d.useState)(o || ""),
                    p = (0, r.Z)(w, 2),
                    f = p[0],
                    E = p[1],
                    y = (0, d.useState)("$0.00"),
                    g = (0, r.Z)(y, 2),
                    v = g[0],
                    h = g[1],
                    x = function() {
                        var e = Number(f);
                        return !Number.isNaN(e) && e >= u.vC && e <= o
                    };
                return (0, d.useEffect)((function() {
                    if (x()) {
                        var e = Math.floor(.5 * Number(f));
                        h("$".concat((e / 100).toFixed(2)))
                    } else h("$0.00")
                }), [f, o]), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-6 tw-w-full"
                }, l && d.createElement(c.qX, {
                    type: "error",
                    className: "tw-mb-0",
                    title: "Payout Request Error ".concat(i),
                    message: "".concat(m, ". Please try again later or contact support.")
                }), d.createElement("div", {
                    className: "tw-p-4 tw-border-light-grey tw-border-solid tw-border tw-rounded-lg tw-font-bold tw-text-lg"
                }, "You have ", d.createElement(c.b5, null), " ", o.toLocaleString(), " available to payout."), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-7"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, d.createElement("h6", null, "Payout Amount in VRChat Credits"), d.createElement(c.II, {
                    min: u.vC,
                    max: o,
                    type: "number",
                    placeholder: "Enter amount",
                    value: f,
                    step: "1",
                    onChange: function(e) {
                        return E(e.target.value)
                    }
                }), d.createElement("p", {
                    className: "tw-text-light-grey tw-mb-0"
                }, d.createElement("small", null, "Minimum: ", d.createElement(c.b5, null), " ", u.vC.toLocaleString(), " | Maximum: ", d.createElement(c.b5, null), " ", o.toLocaleString()))), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, d.createElement("h6", {
                    className: "tw-mb-0"
                }, "Provider"), d.createElement("div", {
                    className: "tw-p-3 tw-gap-3 tw-bg-grey tw-rounded-lg tw-flex tw-flex-row tw-items-center"
                }, d.createElement("div", {
                    className: "tw-bg-white tw-rounded-full tw-overflow-hidden tw-h-10 tw-shrink-0 tw-w-10 tw-flex tw-items-center tw-justify-center"
                }, d.createElement("img", {
                    src: j(),
                    alt: "Tilia Logo",
                    className: "tw-bg-white"
                })), d.createElement("p", {
                    className: "tw-mb-0 tw-leading-5"
                }, d.createElement("strong", {
                    className: "tw-text-teal-accent"
                }, "Tilia"), d.createElement("br", null), d.createElement("small", {
                    className: "tw-text-light-grey"
                }, "PayPal: 1.5% fee | 1-3 Business Days"), d.createElement("br", null), d.createElement("small", {
                    className: "tw-text-light-grey"
                }, "Bank transfer: Fees and processing time varies by country and transfer method")))), d.createElement("div", {
                    className: "tw-bg-[#2E333D] tw-rounded-lg tw-p-4 tw-flex tw-flex-col tw-gap-1"
                }, d.createElement("div", {
                    className: "tw-flex tw-justify-between tw-items-center"
                }, d.createElement("p", {
                    className: "tw-mb-0"
                }, "Estimated Payout Amount in USD"), d.createElement("h6", {
                    className: "tw-text-lg tw-mb-0"
                }, v)), d.createElement("p", {
                    className: "tw-mb-0 tw-text-orange"
                }, d.createElement("small", null, "This is an estimate. Final amount and fees will be shown after specifying a transfer method and destination on the following screens."))), d.createElement("div", {
                    className: "tw-flex tw-gap-3 tw-w-full"
                }, d.createElement(c.zx, {
                    neutral: !0,
                    onClick: a,
                    containerClasses: "tw-flex-1"
                }, "Cancel"), d.createElement(c.zx, {
                    onClick: function() {
                        return n({
                            amount: Number(f)
                        })
                    },
                    disabled: !x(),
                    containerClasses: "tw-flex-1"
                }, "Request Payout"))))
            };
            var X = "REQUEST",
                W = "APPROVED",
                H = "PROCESSING",
                Q = "TILIA",
                J = "VERIFYING",
                K = "COMPLETED",
                ee = "ERROR";
            const te = function(e) {
                var t, a = e.status,
                    l = e.onClose,
                    o = e.onPayoutRequest,
                    c = (0, d.useState)(X),
                    i = (0, r.Z)(c, 2),
                    u = i[0],
                    p = i[1],
                    f = (0, d.useState)(null),
                    E = (0, r.Z)(f, 2),
                    g = E[0],
                    h = E[1],
                    x = (0, d.useState)(null),
                    b = (0, r.Z)(x, 2),
                    C = b[0],
                    N = b[1],
                    P = (0, d.useState)(!1),
                    k = (0, r.Z)(P, 2),
                    S = k[0],
                    T = k[1],
                    I = (0, d.useState)((null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null),
                    F = (0, r.Z)(I, 2),
                    A = F[0],
                    Z = F[1],
                    D = (0, m.Tu)().user,
                    O = (0, w.xW)({
                        userId: null == D ? void 0 : D.id
                    }, {
                        skip: !D
                    }).refetch,
                    _ = (0, w.im)(),
                    q = (0, r.Z)(_, 1)[0],
                    M = function() {
                        var e = (0, n.Z)(s().mark((function e(t) {
                            var a, n, r, l;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return h(null), p(H), e.prev = 2, e.next = 5, o(t);
                                    case 5:
                                        n = e.sent, N(n), Z(null == n || null === (a = n.activePayout) || void 0 === a ? void 0 : a.transactionId), p(Q), e.next = 16;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.error("Payout request failed:", (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred. Please try again later."), h({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) || "An unexpected error occurred. Please try again later."
                                        }), p(ee);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    z = function() {
                        p(X), h(null), N(null), T(!1), l()
                    },
                    U = function() {
                        var e = (0, n.Z)(s().mark((function e(t) {
                            var a, n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return p(J), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, q({
                                            transactionId: A,
                                            tiliaPayoutId: n
                                        }).unwrap();
                                    case 5:
                                        return e.next = 7, O().unwrap();
                                    case 7:
                                        p(K), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), p(ee), console.error("Error verifying payout status:", e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(d.Fragment, null, u === X && d.createElement(B, {
                    requestError: g,
                    status: a,
                    onCancel: z,
                    onConfirm: M
                }), u === H && d.createElement(v, {
                    title: "Processing Request...",
                    message: "This usually takes a few seconds."
                }), u === W && d.createElement(V, {
                    activePayout: null == C ? void 0 : C.activePayout,
                    onContinue: function() {
                        return p(Q)
                    }
                }), u === Q && d.createElement("div", {
                    className: "tw-w-full tw-relative tw-min-h-[400px]"
                }, !S && d.createElement("div", {
                    className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-10 tw-bg-white"
                }, d.createElement(v, {
                    title: "Continue in Tilia",
                    message: "Complete your payout details there to finish the process."
                })), d.createElement("div", {
                    className: S ? "" : "tw-invisible"
                }, d.createElement(L, {
                    status: a,
                    onComplete: U,
                    onLoad: function() {
                        T(!0)
                    },
                    onError: function() {
                        p(ee)
                    }
                }))), u === J && d.createElement(v, {
                    title: "Verifying your payout status...",
                    message: "Returning you to VRChat..."
                }), u === K && d.createElement(R, {
                    onClose: z
                }), u === ee && d.createElement(y, {
                    errorMessage: "There was an issue processing your payout request. Please try again or contact support if the problem persists.",
                    onClose: z
                }))
            };
            var ae = a(87695);
            const ne = function(e) {
                var t = e.status,
                    a = e.economyStatus,
                    n = e.isInternalTesting,
                    r = e.onRequestPayout,
                    l = t.payoutEligible,
                    o = t.eligibility,
                    s = t.earningsBalance,
                    i = l,
                    u = o.okBalance,
                    m = o.okNotOngoing,
                    w = o.okFrequency,
                    p = o.okStanding,
                    E = (null == a ? void 0 : a.economyOnline) || n;
                return d.createElement(c.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg @md:tw-flex-row tw-gap-4"
                }, d.createElement("div", {
                    className: "tw-flex-1 tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-center"
                }, d.createElement("h5", {
                    className: "tw-font-bold tw-no-underline after:tw-hidden"
                }, "Available for Payout"), d.createElement("h2", null, d.createElement(c.b5, null), " ", s.toLocaleString()), d.createElement(c.zx, {
                    disabled: !i || !E,
                    onClick: r,
                    title: !i && "You haven’t met all conditions to request a payout.",
                    containerClasses: "tw-max-w-[330px] tw-w-full"
                }, "Request Payout")), d.createElement("div", {
                    className: "tw-flex-1 tw-p-5 tw-border tw-border-solid tw-border-[#575757] tw-rounded-lg"
                }, d.createElement("div", {
                    className: "tw-mb-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-flex-wrap"
                }, d.createElement("h5", {
                    className: "tw-font-bold after:tw-hidden"
                }, "Payout Request Requirements"), d.createElement(f.rU, {
                    to: "https://creators.vrchat.com/economy/payout/",
                    target: "_blank",
                    rel: "noreferrer"
                }, d.createElement("small", {
                    className: "tw-underline tw-text-subtext-grey"
                }, d.createElement(c.$1, {
                    icon: O.sq
                }), " About Payout"))), d.createElement("ul", {
                    className: "tw-list-none tw-p-0 tw-flex tw-flex-col tw-gap-2"
                }, d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(c.$1, {
                    className: (0, q.cx)({
                        "tw-text-message-success": p,
                        "tw-text-orange": !p
                    }),
                    icon: p ? S.faCircleCheck : ae.faCircleXmark
                }), !p && d.createElement("span", null, "Your account has creator economy holds or restrictions"), p && d.createElement("span", null, "Your account has no creator economy holds or restrictions")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(c.$1, {
                    className: (0, q.cx)({
                        "tw-text-message-success": u,
                        "tw-text-orange": !u
                    }),
                    icon: u ? S.faCircleCheck : ae.faCircleXmark
                }), !u && d.createElement("span", null, "You don't have at least 20,000 earned credits available"), u && d.createElement("span", null, "You have at least 20,000 earned credits available")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(c.$1, {
                    className: (0, q.cx)({
                        "tw-text-message-success": m,
                        "tw-text-orange": !m
                    }),
                    icon: m ? S.faCircleCheck : ae.faCircleXmark
                }), !m && d.createElement("span", null, "You have an active payout in progress"), m && d.createElement("span", null, "You don't have an active payout in progress")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(c.$1, {
                    className: (0, q.cx)({
                        "tw-text-message-success": w,
                        "tw-text-orange": !w
                    }),
                    icon: w ? S.faCircleCheck : ae.faCircleXmark
                }), !w && d.createElement("span", null, "You have requested a payout in the past 24 hours"), w && d.createElement("span", null, "You haven't requested a payout in the past 24 hours")))))
            };
            const re = function() {
                var e, t, a, o, E, y = (0, m.Tu)().user,
                    g = (0, m.pc)(),
                    v = (0, p.s0)(),
                    h = (0, f.lr)(),
                    x = (0, r.Z)(h, 2),
                    b = x[0],
                    C = x[1],
                    N = (0, d.useState)(null),
                    P = (0, r.Z)(N, 2),
                    S = P[0],
                    R = P[1],
                    L = (0, p.UO)().paginationPage,
                    T = (0, d.useState)(L ? Number(L) : 1),
                    I = (0, r.Z)(T, 2),
                    F = I[0],
                    A = I[1],
                    Z = (0, w.M3)(),
                    O = Z.data,
                    _ = (Z.isFetching, Z.isError, Z.error, 2 === (null == O ? void 0 : O.economyState) && g),
                    q = (0, w.xW)({
                        userId: y.id
                    }, {
                        skip: !y,
                        refetchOnMountOrArgChange: !0
                    }),
                    M = q.data,
                    U = q.isFetching,
                    Y = q.isSuccess,
                    $ = q.isError,
                    j = q.error,
                    V = (0, w.yk)({
                        userId: y.id
                    }, {
                        skip: !y
                    }),
                    B = V.data,
                    X = V.isFetching,
                    W = V.isSuccess,
                    H = V.isError,
                    Q = V.error,
                    J = (0, w.DH)(),
                    K = (0, r.Z)(J, 2),
                    ee = K[0],
                    ae = K[1].isSuccess,
                    re = (0, w.Ot)(),
                    le = (0, r.Z)(re, 1)[0],
                    oe = U || X,
                    se = null !== (e = null == M ? void 0 : M.activePayout) && void 0 !== e && e;
                (0, d.useEffect)((function() {
                    if (Y && (!S && b.has("tilia-state"))) {
                        R("CONTINUE");
                        var e = new URLSearchParams(b);
                        e.delete("tilia-state"), C(e, {
                            replace: !0
                        })
                    }
                }), [S, se, Y, b, C]), (0, d.useEffect)((function() {
                    F !== (L ? Number(L) : 1) && v("/home/marketplace/storefront/payout/manage/".concat(F, "?").concat(b.toString()), {
                        replace: !0
                    })
                }), [F, v, L, b]);
                var ce = (0, d.useMemo)((function() {
                        return B && B.payouts ? B.payouts.filter((function(e) {
                            return e.paymentStatusCode !== u.FZ.PLATFORM_READY && e.paymentStatusCode !== u.FZ.PLATFORM_PROCESSING && e.paymentStatusCode !== u.FZ.INIT
                        })) : []
                    }), [B]),
                    ie = (0, d.useMemo)((function() {
                        if (!ce || 0 === ce.length) return [];
                        var e = 10 * (F - 1),
                            t = e + 10;
                        return ce.slice(e, t)
                    }), [ce, F]),
                    ue = function(e) {
                        R(e)
                    },
                    me = function() {
                        R(null)
                    },
                    we = function() {
                        var e = (0, n.Z)(s().mark((function e(t) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ee({
                                            platform: u.LV.PAYOUT_TILIA,
                                            amountTokens: t.amount,
                                            userId: null == y ? void 0 : y.id
                                        }).unwrap();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    de = function() {
                        var e = (0, n.Z)(s().mark((function e(t) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, le({
                                            transactionId: t,
                                            userId: null == y ? void 0 : y.id
                                        }).unwrap();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-8"
                }, d.createElement(c.zx, {
                    containerClasses: "tw-w-fit",
                    neutral: !0,
                    onClick: function() {
                        return v("/home/marketplace/storefront/dashboard")
                    }
                }, d.createElement(c.$1, {
                    icon: l.A3
                }), " Back"), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout"), $ && d.createElement(c.qX, {
                    type: "error",
                    title: "Error Loading Payout Status",
                    message: "There was an error loading your payout status: ".concat((null == j || null === (t = j.data) || void 0 === t ? void 0 : t.message) || "Unknown error")
                }), oe && d.createElement(c.UU, {
                    className: "tw-w-full tw-h-64"
                }), !oe && Y && d.createElement(ne, {
                    status: M,
                    economyStatus: O,
                    isInternalTesting: _,
                    onRequestPayout: function() {
                        return ue("REQUEST")
                    }
                })), !oe && Y && se && d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "In Progress"), d.createElement(G, {
                    status: M,
                    onContinuePayout: function() {
                        return ue("CONTINUE")
                    },
                    onCancelPayout: function() {
                        return ue("CANCEL")
                    }
                })), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout History"), H && d.createElement(c.qX, {
                    type: "error",
                    title: "Error Loading Payout History",
                    message: "There was an error loading your payout history: ".concat((null == Q || null === (a = Q.data) || void 0 === a ? void 0 : a.message) || "Unknown error")
                }), oe && d.createElement(c.UU, {
                    className: "tw-w-full tw-h-64"
                }), !oe && W && d.createElement(z, {
                    payouts: ie
                }), d.createElement("div", null, d.createElement(i.Z, {
                    totalCount: null !== (o = null == B || null === (E = B.payouts) || void 0 === E ? void 0 : E.length) && void 0 !== o ? o : 0,
                    showCurrentPageOnly: !0,
                    currentPage: F,
                    pageSize: 10,
                    onPageChange: function(e) {
                        return A(e)
                    }
                }))), d.createElement(c.u_, {
                    isVisible: !!S,
                    onClose: me,
                    title: function() {
                        switch (S) {
                            case "REQUEST":
                                return "Request Payout";
                            case "CONTINUE":
                                return "Continue Payout";
                            case "CANCEL":
                                return "Cancel Payout";
                            default:
                                return ""
                        }
                    }(),
                    className: "tw-max-w-[700px]",
                    centered: !0
                }, function() {
                    switch (S) {
                        case "REQUEST":
                            return d.createElement(te, {
                                status: M,
                                onClose: me,
                                onPayoutRequest: we,
                                requestCreated: ae
                            });
                        case "CONTINUE":
                            return d.createElement(D, {
                                status: M,
                                onClose: me
                            });
                        case "CANCEL":
                            return d.createElement(k, {
                                status: M,
                                onClose: me,
                                onCancel: de
                            });
                        default:
                            return null
                    }
                }()))
            }
        },
        83492: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "d4a95aef4073c48b-500w.png 500w",
                images: [{
                    path: a.p + "d4a95aef4073c48b-500w.png",
                    width: 500,
                    height: 184
                }],
                src: a.p + "d4a95aef4073c48b-500w.png",
                toString: function() {
                    return a.p + "d4a95aef4073c48b-500w.png"
                },
                width: 500,
                height: 184
            }
        }
    }
]);
//# sourceMappingURL=142c07751606a79696eed7d8e5ef657aa65e34ff9732f2321eed4ef09c749330.js.map