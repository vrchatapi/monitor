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
                default: () => le
            });
            var n = a(15861),
                r = a(54546),
                l = a(85020),
                o = a(64687),
                c = a.n(o),
                s = a(96985),
                i = a(35187),
                u = a(95896),
                m = a(83807),
                w = a(66736),
                d = a(67294),
                f = a(89250),
                p = a(79655),
                E = a(53359);
            const v = function(e) {
                var t = e.onClose,
                    a = e.children;
                return d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-gap-4"
                }, d.createElement(s.$1, {
                    icon: E.faTriangleExclamation,
                    size: "4x",
                    className: "tw-text-placeholder-text"
                }), d.createElement("div", {
                    className: "tw-mb-0 tw-text-light-grey"
                }, a), d.createElement(s.zx, {
                    onClick: t,
                    containerClasses: "tw-max-w-[320px] tw-w-full"
                }, "Try Again"))
            };
            var y = a(43862);
            const g = function(e) {
                var t = e.title,
                    a = e.message,
                    n = e.showNotice,
                    r = void 0 !== n && n;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r && d.createElement(s.qX, {
                    type: "custom",
                    className: "tw-mb-4",
                    iconColor: "#6ae3f9",
                    color: "#064b5c"
                }, "For a smooth payout experience, please ensure you do not close this window until you see the confirmation of your payout request has been completed."), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-6 tw-p-20"
                }, d.createElement(y.Z, {
                    size: "4x"
                }), d.createElement("div", {
                    className: "tw-text-center"
                }, t && d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold"
                }, t), a && d.createElement("p", {
                    className: "tw-mb-0"
                }, a))))
            };
            const h = function(e) {
                var t = e.status,
                    a = e.onCancel,
                    n = void 0 === a ? function() {} : a,
                    r = e.onClose,
                    l = void 0 === r ? function() {} : r,
                    o = e.onError,
                    c = void 0 === o ? function() {} : o,
                    i = t || {},
                    u = i.activePayoutTiliaAmount,
                    m = void 0 === u ? 0 : u,
                    w = i.activePayout;
                return w || c(), d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-items-center"
                }, d.createElement("div", {
                    className: "tw-my-14 tw-max-w-[530px] tw-w-full tw-text-center"
                }, d.createElement("h4", null, "Are you sure you want to cancel this payout request?"), d.createElement("p", null, d.createElement(s.b5, {
                    className: "tw-inline-block"
                }), " ", m.toLocaleString(), " credits will be returned to your VRChat credit balance.")), d.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3"
                }, d.createElement(s.zx, {
                    neutral: !0,
                    containerClasses: "tw-flex-1",
                    onClick: l
                }, "Back"), d.createElement(s.zx, {
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
                }, d.createElement(s.b5, {
                    className: "tw-inline-block"
                }), " ", (n || 0).toLocaleString(), " credits have been returned to your VRChat balance. You can try the payout process again any time."), d.createElement(s.zx, {
                    onClick: a,
                    containerClasses: "tw-w-full tw-max-w-[320px]"
                }, "Done"))
            };
            var b = "CONFIRM",
                C = "PROCESSING",
                N = "CANCELLED",
                P = "ERROR";
            const S = function(e) {
                var t = e.status,
                    a = e.onClose,
                    l = e.onCancel,
                    o = e.onRefetchStatus,
                    s = (0, d.useState)(b),
                    i = (0, r.Z)(s, 2),
                    u = i[0],
                    m = i[1],
                    w = (0, d.useState)(null),
                    f = (0, r.Z)(w, 2),
                    p = f[0],
                    E = f[1],
                    y = (0, d.useState)(null),
                    S = (0, r.Z)(y, 2),
                    k = S[0],
                    R = S[1],
                    T = function() {
                        var e = (0, n.Z)(c().mark((function e() {
                            var a, n, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != t && t.activePayout) {
                                            e.next = 3;
                                            break
                                        }
                                        return m(P), e.abrupt("return");
                                    case 3:
                                        return m(C), e.prev = 4, e.next = 7, l(null == t || null === (a = t.activePayout) || void 0 === a ? void 0 : a.transactionId);
                                    case 7:
                                        if (n = e.sent, R(n), !o) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.prev = 10, e.next = 13, o().unwrap();
                                    case 13:
                                        e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(10), console.error("Error refetching payout status after cancel:", e.t0);
                                    case 18:
                                        m(N), e.next = 26;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t1 = e.catch(4), console.error("Error cancelling payout request:", e.t1), m(P), E({
                                            status_code: null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.status,
                                            message: (null === e.t1 || void 0 === e.t1 || null === (r = e.t1.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred."
                                        });
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 21],
                                [10, 15]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    L = function() {
                        m(b), E(null), R(null), a()
                    };
                return d.createElement(d.Fragment, null, u === b && d.createElement(h, {
                    status: t,
                    onCancel: T,
                    onClose: L,
                    onError: function() {
                        return m(P)
                    }
                }), u === C && d.createElement(g, {
                    title: "Processing request...",
                    message: "This usually takes a few seconds."
                }), u === N && d.createElement(x, {
                    cancelledData: k,
                    onClose: L
                }), u === P && d.createElement(v, {
                    onClose: L
                }, d.createElement("p", null, "There was an issue cancelling your payout request. ", d.createElement("br", null), (null == p ? void 0 : p.message) && d.createElement(d.Fragment, null, p.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var k = a(76553),
                R = a(64258),
                T = a(16686);
            const L = function(e) {
                var t = e.onClose;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-p-10"
                }, d.createElement(s.$1, {
                    icon: T.faCircleCheck,
                    size: "4x",
                    className: "tw-text-message-success"
                }), d.createElement("div", {
                    className: "tw-text-center tw-mb-10"
                }, d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your payout request has been received by Tilia. Funds should arrive in your selected payment method according to their standard delivery times.")), d.createElement(s.zx, {
                    type: "button",
                    onClick: t,
                    containerClasses: "tw-max-w-[320px] tw-w-full",
                    "aria-label": "Close payout confirmation dialog"
                }, "Done"))
            };
            const I = function(e) {
                var t = e.status,
                    a = e.onLoad,
                    n = void 0 === a ? function() {} : a,
                    l = e.onComplete,
                    o = void 0 === l ? function() {} : l,
                    c = e.onError,
                    s = void 0 === c ? function() {} : c,
                    i = t || {},
                    u = i.activePayoutTiliaWidget,
                    m = i.activePayoutTiliaAmount,
                    w = "tilia-widget-container",
                    f = (0, d.useState)(!1),
                    p = (0, r.Z)(f, 2),
                    E = p[0],
                    v = p[1],
                    y = (0, d.useState)(!1),
                    g = (0, r.Z)(y, 2),
                    h = (g[0], g[1]),
                    x = (0, d.useState)(!1),
                    b = (0, r.Z)(x, 2),
                    C = (b[0], b[1]),
                    N = (0, d.useState)(!1),
                    P = (0, r.Z)(N, 2),
                    S = (P[0], P[1]),
                    k = (0, d.useMemo)((function() {
                        return null != u && u.redirect ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/v1/widget" : "https://web.tilia-inc.com/ui/v1/widget" : null
                    }), [u]),
                    R = (0, d.useMemo)((function() {
                        return null != u && u.redirect && null != u && u.nonce_auth_id ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : "https://web.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : null
                    }), [u]),
                    T = function(e) {
                        h(!0), n()
                    },
                    L = function(e) {
                        C(!0), o(e)
                    },
                    I = function(e) {
                        S(!0), s(e)
                    };
                return (0, d.useEffect)((function() {
                    if (k) {
                        if (!document.querySelector('script[src="'.concat(k, '"]'))) {
                            var e = document.createElement("script");
                            return e.src = k, e.onload = function() {
                                    v(!0)
                                }, e.onerror = function() {
                                    S(!0), s(new Error("Failed to load external script: ".concat(k)))
                                }, document.body.appendChild(e),
                                function() {
                                    document.body.contains(e) && document.body.removeChild(e), v(!1)
                                }
                        }
                        v(!0)
                    }
                }), [k]), (0, d.useEffect)((function() {
                    if (E && null != u && u.redirect && R) try {
                        window.Tilia.execute({
                            rootId: w,
                            flow: "payout-full",
                            redirect: R,
                            onComplete: L,
                            onError: I,
                            debug: !1,
                            onReady: T,
                            flowConfig: {
                                hideWalletBalance: !0,
                                hideExitButtons: !0,
                                verificationLevel: "basic_pii",
                                currency: "VRC",
                                fixedAmount: m
                            }
                        })
                    } catch (e) {
                        console.error("Error initializing Tilia widget:", e), S(!0)
                    }
                }), [E, w, u]), d.createElement("div", {
                    id: w,
                    style: {
                        width: "100%",
                        height: "700px"
                    }
                })
            };
            var F = "LOADING",
                A = "TILIA",
                Z = "VERIFYING",
                D = "COMPLETED",
                _ = "ERROR";
            const q = function(e) {
                var t, a = e.status,
                    l = e.onClose,
                    o = void 0 === l ? function() {} : l,
                    s = e.onRefetchStatus,
                    i = void 0 === s ? function() {} : s,
                    u = e.onHideModalClose,
                    f = void 0 === u ? function() {} : u,
                    p = (0, d.useState)(F),
                    E = (0, r.Z)(p, 2),
                    y = E[0],
                    h = E[1],
                    x = (0, d.useState)(null),
                    b = (0, r.Z)(x, 2),
                    C = b[0],
                    N = b[1],
                    P = (null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null,
                    S = (0, m.Tu)().user,
                    T = (0, w.im)(),
                    q = (0, r.Z)(T, 1)[0];
                (0, d.useEffect)((function() {
                    f(y !== A)
                }), [y, f]);
                var M = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var a, n, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return h(Z), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, q({
                                            transactionId: P,
                                            tiliaPayoutId: n,
                                            userId: null == S ? void 0 : S.id
                                        }).unwrap();
                                    case 5:
                                        if (!i) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, i().unwrap();
                                    case 8:
                                        h(D), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), h(_), console.error("Error verifying payout status:", e.t0), N({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred."
                                        }), (0, R.d)({
                                            title: "Payout Verification Error",
                                            message: "There was an issue verifying your payout status. Please try again or contact economy@vrchat.com if you are unable to.",
                                            color: "danger",
                                            icon: k.eH,
                                            timeout: 5e3
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    O = function() {
                        h(F), N(null), y !== A && y !== D ? o() : o(!0)
                    };
                return d.createElement(d.Fragment, null, (y === F || y === A) && d.createElement("div", {
                    className: "tw-w-full"
                }, y === F && d.createElement(g, {
                    title: "Loading Payout...",
                    message: "We're securely connecting you to complete your payout."
                }), d.createElement("div", {
                    className: y === F ? "tw-invisible" : ""
                }, d.createElement(I, {
                    status: a,
                    onComplete: M,
                    onLoad: function() {
                        h(A)
                    },
                    onError: function() {
                        h(_)
                    }
                }))), y === Z && d.createElement(g, {
                    showNotice: !0,
                    message: "Please wait while we verify the transaction status."
                }), y === D && d.createElement(L, {
                    onClose: O
                }), y === _ && d.createElement(v, {
                    onClose: O
                }, d.createElement("p", null, "There was an issue processing your payout request. ", d.createElement("br", null), (null == C ? void 0 : C.message) && d.createElement(d.Fragment, null, C.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var M = a(82414),
                O = a(45189),
                z = a(83505),
                U = [u.FZ.CANCELLED_PLATFORM, u.FZ.CANCELLED_REVERSED, u.FZ.CANCELLING];
            const Y = function(e) {
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
                }, d.createElement(s.$1, {
                    icon: O.X5,
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
                    }, d.createElement(s.b5, null), " ", e.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                        className: (0, z.cx)("tw-py-5 tw-px-3", U.includes(e.paymentStatusCode) && "tw-text-error-message-red", e.paymentStatusCode === u.FZ.PLATFORM_COMPLETED && "tw-text-message-success")
                    }, d.createElement("div", {
                        className: "tw-relative tw-whitespace-nowrap"
                    }, e.paymentStatus || "Processing", " ", d.createElement("div", {
                        className: "tw-group tw-relative tw-inline-block"
                    }, d.createElement(s.$1, {
                        className: "tw-text-[#797979]",
                        icon: M.sq
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
                                }, "Your payout is currently being processed by the provider. This usually takes a few days.", " ", d.createElement(p.rU, {
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
            var G = a(28963);
            const V = function(e) {
                var t = e.status,
                    a = e.onContinuePayout,
                    n = e.onCancelPayout,
                    r = t.activePayout,
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
                    c = r.paymentStatusCode === u.FZ.PLATFORM_READY,
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
                }, d.createElement(s.b5, null), " ", r.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                    className: (0, z.cx)("tw-py-5 tw-px-3 tw-flex tw-items-center tw-gap-2 tw-flex-nowrap", {
                        "tw-text-orange": c
                    })
                }, c && d.createElement(s.$1, {
                    icon: k.eH
                }), i && d.createElement(s.$1, {
                    icon: G.DH
                }), d.createElement("span", null, r.paymentStatus || "Incomplete"), c && d.createElement(d.Fragment, null, d.createElement(s.zx, {
                    type: "button",
                    onClick: a
                }, "Continue"), d.createElement(s.zx, {
                    type: "button",
                    neutral: !0,
                    onClick: n,
                    disabled: !l
                }, "Cancel")))))))
            };
            var $ = a(83492),
                j = a.n($);
            const H = function(e) {
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
                }, d.createElement(s.zx, {
                    onClick: t,
                    disabled: !a,
                    "aria-label": "Continue in Tilia"
                }, "Continue in Tilia")))
            };
            const X = function(e) {
                var t = e.status,
                    a = e.onCancel,
                    n = e.onConfirm,
                    l = e.requestError,
                    o = e.account,
                    c = (t || {}).earningsBalance,
                    i = void 0 === c ? 0 : c,
                    m = (o || {}).limits,
                    w = "number" == typeof(null == m ? void 0 : m.payoutMax) && i > m.payoutMax ? m.payoutMax : i,
                    f = "number" == typeof(null == m ? void 0 : m.payoutMax) && m.payoutMax < i,
                    p = l || {},
                    E = p.status_code,
                    v = p.message,
                    y = (0, d.useState)(null != i ? i : ""),
                    g = (0, r.Z)(y, 2),
                    h = g[0],
                    x = g[1],
                    b = (0, d.useState)("$0.00"),
                    C = (0, r.Z)(b, 2),
                    N = C[0],
                    P = C[1],
                    S = function() {
                        var e = Number(h);
                        return !Number.isNaN(e) && e >= u.vC && e <= w
                    };
                return (0, d.useEffect)((function() {
                    if (S()) {
                        var e = Math.floor(.5 * Number(h));
                        P("$".concat((e / 100).toFixed(2)))
                    } else P("$0.00")
                }), [h, w, S]), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-6 tw-w-full"
                }, l && d.createElement(s.qX, {
                    type: "error",
                    className: "tw-mb-0",
                    title: "Payout Request Error ".concat(E),
                    message: "".concat(v, ". Please try again later or contact support.")
                }), d.createElement("div", {
                    className: "tw-p-4 tw-border-light-grey tw-border-solid tw-border tw-rounded-lg tw-font-bold tw-text-lg"
                }, d.createElement("p", {
                    className: "tw-m-0"
                }, "You have ", d.createElement(s.b5, null), " ", i.toLocaleString(), " available to pay out.", d.createElement("br", null), f && d.createElement(d.Fragment, null, "The maximum you can currently request is ", d.createElement(s.b5, null), " ", w.toLocaleString(), "."))), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-7"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, d.createElement("h6", null, "Payout Amount in VRChat Credits"), d.createElement(s.II, {
                    min: u.vC,
                    max: w,
                    type: "number",
                    placeholder: "Enter amount",
                    value: h,
                    step: "1",
                    onChange: function(e) {
                        return x(e.target.value)
                    }
                }), d.createElement("p", {
                    className: "tw-text-light-grey tw-mb-0"
                }, d.createElement("small", null, "Minimum: ", d.createElement(s.b5, null), " ", u.vC.toLocaleString(), " | Maximum: ", d.createElement(s.b5, null), " ", null == w ? void 0 : w.toLocaleString()))), d.createElement("div", {
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
                }, N)), d.createElement("p", {
                    className: "tw-mb-0 tw-text-orange"
                }, d.createElement("small", null, "This is an estimate. Final amount and fees will be shown after specifying a transfer method and destination on the following screens."))), d.createElement("div", {
                    className: "tw-flex tw-gap-3 tw-w-full"
                }, d.createElement(s.zx, {
                    neutral: !0,
                    onClick: a,
                    containerClasses: "tw-flex-1"
                }, "Cancel"), d.createElement(s.zx, {
                    onClick: function() {
                        return n({
                            amount: Number(h)
                        })
                    },
                    disabled: !S(),
                    containerClasses: "tw-flex-1"
                }, "Request Payout"))))
            };
            var B = "REQUEST",
                Q = "APPROVED",
                W = "PROCESSING",
                J = "TILIA",
                K = "VERIFYING",
                ee = "COMPLETED",
                te = "ERROR";
            const ae = function(e) {
                var t, a = e.status,
                    l = e.account,
                    o = e.onClose,
                    s = void 0 === o ? function() {} : o,
                    i = e.onPayoutRequest,
                    u = void 0 === i ? function() {} : i,
                    f = e.onRefetchStatus,
                    p = void 0 === f ? function() {} : f,
                    E = e.onHideModalClose,
                    y = void 0 === E ? function() {} : E,
                    h = (0, d.useState)(B),
                    x = (0, r.Z)(h, 2),
                    b = x[0],
                    C = x[1],
                    N = (0, d.useState)(null),
                    P = (0, r.Z)(N, 2),
                    S = P[0],
                    T = P[1],
                    F = (0, d.useState)(null),
                    A = (0, r.Z)(F, 2),
                    Z = A[0],
                    D = A[1],
                    _ = (0, d.useState)(!1),
                    q = (0, r.Z)(_, 2),
                    M = q[0],
                    O = q[1],
                    z = (0, d.useState)((null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null),
                    U = (0, r.Z)(z, 2),
                    Y = U[0],
                    G = U[1],
                    V = (0, m.Tu)().user,
                    $ = (0, w.im)(),
                    j = (0, r.Z)($, 1)[0];
                (0, d.useEffect)((function() {
                    y(b !== J)
                }), [b, y]);
                var ae = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var a, n, r, l, o;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return T(null), C(W), e.prev = 2, e.next = 5, u(t);
                                    case 5:
                                        n = e.sent, D(n), G(null == n || null === (a = n.activePayout) || void 0 === a ? void 0 : a.transactionId), C(J), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.error("Payout request failed:", (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred. Please try again later."), T({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) || "An unexpected error occurred."
                                        }), (0, R.d)({
                                            title: "Payout Request Error",
                                            message: (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) || "An unexpected error occurred. Please try again later.",
                                            color: "danger",
                                            icon: k.eH,
                                            timeout: 5e3
                                        }), C(te);
                                    case 17:
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
                    ne = function() {
                        C(B), T(null), D(null), O(!1), b !== J && b !== ee ? s() : s(!0)
                    },
                    re = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var a, n, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return C(K), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, j({
                                            transactionId: Y,
                                            tiliaPayoutId: n,
                                            userId: null == V ? void 0 : V.id
                                        }).unwrap();
                                    case 5:
                                        if (!p) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, p().unwrap();
                                    case 8:
                                        C(ee), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), console.error("Error verifying payout status:", e.t0), T({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred."
                                        }), (0, R.d)({
                                            title: "Payout Verification Error",
                                            message: "There was an issue verifying your payout status. Please try again or contact support if you are unable to.",
                                            color: "danger",
                                            icon: k.eH,
                                            timeout: 5e3
                                        }), C(te);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(d.Fragment, null, b === B && d.createElement(X, {
                    requestError: S,
                    status: a,
                    account: l,
                    onCancel: ne,
                    onConfirm: ae
                }), b === W && d.createElement(g, {
                    title: "Processing Request...",
                    message: "This usually takes a few seconds."
                }), b === Q && d.createElement(H, {
                    activePayout: null == Z ? void 0 : Z.activePayout,
                    onContinue: function() {
                        return C(J)
                    }
                }), b === J && d.createElement("div", {
                    className: "tw-w-full tw-relative tw-min-h-[400px]"
                }, !M && d.createElement("div", {
                    className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-10 tw-bg-white"
                }, d.createElement(g, {
                    title: "Continue in Tilia",
                    message: "Complete your payout details there to finish the process."
                })), d.createElement("div", {
                    className: M ? "" : "tw-invisible"
                }, d.createElement(I, {
                    status: a,
                    onComplete: re,
                    onLoad: function() {
                        O(!0)
                    },
                    onError: function() {
                        C(te)
                    }
                }))), b === K && d.createElement(g, {
                    showNotice: !0,
                    title: "Verifying your payout status...",
                    message: "Returning you to VRChat..."
                }), b === ee && d.createElement(L, {
                    onClose: ne
                }), b === te && d.createElement(v, {
                    onClose: ne
                }, d.createElement("p", null, "There was an issue processing your payout request. ", d.createElement("br", null), (null == S ? void 0 : S.message) && d.createElement(d.Fragment, null, S.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var ne = a(87695);
            const re = function(e) {
                var t = e.status,
                    a = e.economyStatus,
                    n = e.isInternalTesting,
                    r = e.onRequestPayout,
                    l = t.payoutEligible,
                    o = t.eligibility,
                    c = t.earningsBalance,
                    i = l,
                    u = o.okBalance,
                    m = o.okNotOngoing,
                    w = o.okFrequency,
                    f = o.okStanding,
                    E = (null == a ? void 0 : a.economyOnline) || n;
                return d.createElement(s.JX, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg @md:tw-flex-row tw-gap-4"
                }, d.createElement("div", {
                    className: "tw-flex-1 tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-center"
                }, d.createElement("h5", {
                    className: "tw-font-bold tw-no-underline after:tw-hidden"
                }, "Available for Payout"), d.createElement("h2", null, d.createElement(s.b5, null), " ", c.toLocaleString()), d.createElement(s.zx, {
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
                }, "Payout Request Requirements"), d.createElement(p.rU, {
                    to: "https://creators.vrchat.com/economy/payout/",
                    target: "_blank",
                    rel: "noreferrer"
                }, d.createElement("small", {
                    className: "tw-underline tw-text-subtext-grey"
                }, d.createElement(s.$1, {
                    icon: M.sq
                }), " About Payout"))), d.createElement("ul", {
                    className: "tw-list-none tw-p-0 tw-flex tw-flex-col tw-gap-2"
                }, d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.$1, {
                    className: (0, z.cx)({
                        "tw-text-message-success": f,
                        "tw-text-orange": !f
                    }),
                    icon: f ? T.faCircleCheck : ne.faCircleXmark
                }), !f && d.createElement("span", null, "Your account has creator economy holds or restrictions"), f && d.createElement("span", null, "Your account has no creator economy holds or restrictions")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.$1, {
                    className: (0, z.cx)({
                        "tw-text-message-success": u,
                        "tw-text-orange": !u
                    }),
                    icon: u ? T.faCircleCheck : ne.faCircleXmark
                }), !u && d.createElement("span", null, "You don't have at least 20,000 earned credits available"), u && d.createElement("span", null, "You have at least 20,000 earned credits available")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.$1, {
                    className: (0, z.cx)({
                        "tw-text-message-success": m,
                        "tw-text-orange": !m
                    }),
                    icon: m ? T.faCircleCheck : ne.faCircleXmark
                }), !m && d.createElement("span", null, "You have an active payout in progress"), m && d.createElement("span", null, "You don't have an active payout in progress")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.$1, {
                    className: (0, z.cx)({
                        "tw-text-message-success": w,
                        "tw-text-orange": !w
                    }),
                    icon: w ? T.faCircleCheck : ne.faCircleXmark
                }), !w && d.createElement("span", null, "You have requested a payout in the past 24 hours"), w && d.createElement("span", null, "You haven't requested a payout in the past 24 hours")))))
            };
            const le = function() {
                var e, t, a, o, E, v = (0, m.Tu)().user,
                    y = (0, m.pc)(),
                    h = (0, f.s0)(),
                    x = (0, p.lr)(),
                    b = (0, r.Z)(x, 2),
                    C = b[0],
                    N = b[1],
                    P = (0, d.useState)(!1),
                    k = (0, r.Z)(P, 2),
                    R = k[0],
                    T = k[1],
                    L = (0, d.useState)(null),
                    I = (0, r.Z)(L, 2),
                    F = I[0],
                    A = I[1],
                    Z = (0, f.UO)().paginationPage,
                    D = (0, d.useState)(Z ? Number(Z) : 1),
                    _ = (0, r.Z)(D, 2),
                    M = _[0],
                    O = _[1],
                    z = (0, w.M3)(),
                    U = z.data,
                    G = z.isFetching,
                    $ = (z.isError, z.error, (0, w.sy)({
                        userId: v.id,
                        getLimits: !0
                    }, {
                        skip: !v
                    })),
                    j = $.data,
                    H = $.isFetching,
                    X = ($.isError, $.error, 2 === (null == U ? void 0 : U.economyState) && y),
                    B = (0, w.xW)({
                        userId: v.id
                    }, {
                        skip: !v,
                        refetchOnFocus: !0
                    }),
                    Q = B.data,
                    W = B.isFetching,
                    J = B.isSuccess,
                    K = B.isError,
                    ee = B.error,
                    te = B.refetch,
                    ne = (0, w.yk)({
                        userId: v.id
                    }, {
                        skip: !v
                    }),
                    le = ne.data,
                    oe = ne.isFetching,
                    ce = ne.isSuccess,
                    se = ne.isError,
                    ie = ne.error,
                    ue = (0, w.DH)(),
                    me = (0, r.Z)(ue, 2),
                    we = me[0],
                    de = me[1].isSuccess,
                    fe = (0, w.Ot)(),
                    pe = (0, r.Z)(fe, 1)[0],
                    Ee = W || oe || G || H,
                    ve = null !== (e = null == Q ? void 0 : Q.activePayout) && void 0 !== e && e;
                (0, d.useEffect)((function() {
                    if (J && (!F && C.has("tilia-state"))) {
                        A("CONTINUE");
                        var e = new URLSearchParams(C);
                        e.delete("tilia-state"), N(e, {
                            replace: !0
                        })
                    }
                }), [F, ve, J, C, N]), (0, d.useEffect)((function() {
                    M !== (Z ? Number(Z) : 1) && h("/home/marketplace/storefront/payout/manage/".concat(M, "?").concat(C.toString()), {
                        replace: !0
                    })
                }), [M, h, Z, C]);
                var ye = (0, d.useMemo)((function() {
                        return le && le.payouts ? le.payouts.filter((function(e) {
                            return e.paymentStatusCode !== u.FZ.PLATFORM_READY && e.paymentStatusCode !== u.FZ.PLATFORM_PROCESSING && e.paymentStatusCode !== u.FZ.INIT
                        })) : []
                    }), [le]),
                    ge = (0, d.useMemo)((function() {
                        if (!ye || 0 === ye.length) return [];
                        var e = 10 * (M - 1),
                            t = e + 10;
                        return ye.slice(e, t)
                    }), [ye, M]),
                    he = function(e) {
                        A(e)
                    },
                    xe = function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? (A("EXITING"), te(), setTimeout((function() {
                            return A(null)
                        }), 1e3)) : A(null)
                    },
                    be = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, we({
                                            platform: u.LV.PAYOUT_TILIA,
                                            amountTokens: t.amount,
                                            userId: null == v ? void 0 : v.id
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
                    Ce = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, pe({
                                            transactionId: t,
                                            userId: null == v ? void 0 : v.id
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
                    Ne = function(e) {
                        T(e)
                    };
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-8"
                }, d.createElement(s.zx, {
                    containerClasses: "tw-w-fit",
                    neutral: !0,
                    onClick: function() {
                        return h("/home/marketplace/storefront/dashboard")
                    }
                }, d.createElement(s.$1, {
                    icon: l.A3
                }), " Back"), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout"), K && d.createElement(s.qX, {
                    type: "error",
                    title: "Error Loading Payout Status",
                    message: "There was an error loading your payout status: ".concat((null == ee || null === (t = ee.data) || void 0 === t ? void 0 : t.message) || "Unknown error")
                }), Ee && d.createElement(s.UU, {
                    className: "tw-w-full tw-h-64"
                }), !Ee && J && d.createElement(re, {
                    status: Q,
                    economyStatus: U,
                    isInternalTesting: X,
                    onRequestPayout: function() {
                        return he("REQUEST")
                    }
                })), !Ee && J && ve && d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "In Progress"), d.createElement(V, {
                    status: Q,
                    onContinuePayout: function() {
                        return he("CONTINUE")
                    },
                    onCancelPayout: function() {
                        return he("CANCEL")
                    }
                })), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout History"), se && d.createElement(s.qX, {
                    type: "error",
                    title: "Error Loading Payout History",
                    message: "There was an error loading your payout history: ".concat((null == ie || null === (a = ie.data) || void 0 === a ? void 0 : a.message) || "Unknown error")
                }), Ee && d.createElement(s.UU, {
                    className: "tw-w-full tw-h-64"
                }), !Ee && ce && d.createElement(Y, {
                    payouts: ge
                }), d.createElement("div", null, d.createElement(i.Z, {
                    totalCount: null !== (o = null == le || null === (E = le.payouts) || void 0 === E ? void 0 : E.length) && void 0 !== o ? o : 0,
                    showCurrentPageOnly: !0,
                    currentPage: M,
                    pageSize: 10,
                    onPageChange: function(e) {
                        return O(e)
                    }
                }))), d.createElement(s.u_, {
                    disableBackdropClick: !0,
                    disableClose: Ee || R,
                    isVisible: !!F,
                    onClose: function() {
                        return xe(!0)
                    },
                    title: function() {
                        switch (F) {
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
                    noClose: "EXITING" === F || R,
                    centered: !0
                }, function() {
                    switch (F) {
                        case "REQUEST":
                            return d.createElement(ae, {
                                status: Q,
                                account: j,
                                onClose: xe,
                                onHideModalClose: Ne,
                                onPayoutRequest: be,
                                requestCreated: de,
                                onRefetchStatus: te
                            });
                        case "CONTINUE":
                            return d.createElement(q, {
                                onHideModalClose: Ne,
                                status: Q,
                                onClose: xe,
                                onRefetchStatus: te
                            });
                        case "CANCEL":
                            return d.createElement(S, {
                                status: Q,
                                onClose: xe,
                                onCancel: Ce,
                                onRefetchStatus: te
                            });
                        case "EXITING":
                            return d.createElement(g, {
                                title: "Exiting",
                                message: "Exiting payout flow, one moment please..."
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
//# sourceMappingURL=c1981b69882d8a793666ab5e44099604bb3c5eab92f7b48786b6efeec97b7790.js.map