(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2152], {
        16879(e, t) {
            "use strict";
            var a = "hourglass",
                n = [9203, 62032, "hourglass-empty"],
                r = "f254",
                l = "M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z";
            t.mw = {
                prefix: "fas",
                iconName: a,
                icon: [384, 512, n, r, l]
            }, t.Ao = t.mw
        },
        82152(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: () => le
            });
            var n = a(10467),
                r = a(82544),
                l = a(49107),
                o = a(54756),
                c = a.n(o),
                s = a(15033),
                i = a(31337),
                u = a(31069),
                m = a(194),
                w = a(5361),
                d = a(96540),
                p = a(47767),
                f = a(84976),
                E = a(82628);
            const y = function(e) {
                var t = e.onClose,
                    a = e.children;
                return d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-gap-4"
                }, d.createElement(s.M2, {
                    icon: E.faTriangleExclamation,
                    size: "4x",
                    className: "tw-text-placeholder-text"
                }), d.createElement("div", {
                    className: "tw-mb-0 tw-text-light-grey"
                }, a), d.createElement(s.$n, {
                    onClick: t,
                    containerClasses: "tw-max-w-[320px] tw-w-full"
                }, "Try Again"))
            };
            var v = a(25538);
            const g = function(e) {
                var t = e.title,
                    a = e.message,
                    n = e.showNotice,
                    r = void 0 !== n && n;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r && d.createElement(s.$T, {
                    type: "custom",
                    className: "tw-mb-4",
                    iconColor: "#6ae3f9",
                    color: "#064b5c"
                }, "For a smooth payout experience, please ensure you do not close this window until you see the confirmation of your payout request has been completed."), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-6 tw-p-20"
                }, d.createElement(v.A, {
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
                }, d.createElement("h4", null, "Are you sure you want to cancel this payout request?"), d.createElement("p", null, d.createElement(s.eD, {
                    className: "tw-inline-block"
                }), " ", m.toLocaleString(), " credits will be returned to your VRChat credit balance.")), d.createElement("div", {
                    className: "tw-flex tw-w-full tw-gap-3"
                }, d.createElement(s.$n, {
                    neutral: !0,
                    containerClasses: "tw-flex-1",
                    onClick: l
                }, "Back"), d.createElement(s.$n, {
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
                }, d.createElement(s.eD, {
                    className: "tw-inline-block"
                }), " ", (n || 0).toLocaleString(), " credits have been returned to your VRChat balance. You can try the payout process again any time."), d.createElement(s.$n, {
                    onClick: a,
                    containerClasses: "tw-w-full tw-max-w-[320px]"
                }, "Done"))
            };
            var b = "CONFIRM",
                N = "PROCESSING",
                C = "CANCELLED",
                P = "ERROR";
            const L = function(e) {
                var t = e.status,
                    a = e.onClose,
                    l = e.onCancel,
                    o = e.onRefetchStatus,
                    s = (0, d.useState)(b),
                    i = (0, r.A)(s, 2),
                    u = i[0],
                    m = i[1],
                    w = (0, d.useState)(null),
                    p = (0, r.A)(w, 2),
                    f = p[0],
                    E = p[1],
                    v = (0, d.useState)(null),
                    L = (0, r.A)(v, 2),
                    A = L[0],
                    S = L[1],
                    k = function() {
                        var e = (0, n.A)(c().mark(function e() {
                            var a, n, r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != t && t.activePayout) {
                                            e.next = 3;
                                            break
                                        }
                                        return m(P), e.abrupt("return");
                                    case 3:
                                        return m(N), e.prev = 4, e.next = 7, l(null == t || null === (a = t.activePayout) || void 0 === a ? void 0 : a.transactionId);
                                    case 7:
                                        if (n = e.sent, S(n), !o) {
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
                                        m(C), e.next = 26;
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
                            }, e, null, [
                                [4, 21],
                                [10, 15]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    R = function() {
                        m(b), E(null), S(null), a()
                    };
                return d.createElement(d.Fragment, null, u === b && d.createElement(h, {
                    status: t,
                    onCancel: k,
                    onClose: R,
                    onError: function() {
                        return m(P)
                    }
                }), u === N && d.createElement(g, {
                    title: "Processing request...",
                    message: "This usually takes a few seconds."
                }), u === C && d.createElement(x, {
                    cancelledData: A,
                    onClose: R
                }), u === P && d.createElement(y, {
                    onClose: R
                }, d.createElement("p", null, "There was an issue cancelling your payout request. ", d.createElement("br", null), (null == f ? void 0 : f.message) && d.createElement(d.Fragment, null, f.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var A = a(34496),
                S = a(65950),
                k = a(82617);
            const R = function(e) {
                var t = e.onClose;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-p-10"
                }, d.createElement(s.M2, {
                    icon: k.faCircleCheck,
                    size: "4x",
                    className: "tw-text-message-success"
                }), d.createElement("div", {
                    className: "tw-text-center tw-mb-10"
                }, d.createElement("p", {
                    className: "tw-mb-0"
                }, "Your payout request has been received by Tilia. Funds should arrive in your selected payment method according to their standard delivery times.")), d.createElement(s.$n, {
                    type: "button",
                    onClick: t,
                    containerClasses: "tw-max-w-[320px] tw-w-full",
                    "aria-label": "Close payout confirmation dialog"
                }, "Done"))
            };
            const T = function(e) {
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
                    p = (0, d.useState)(!1),
                    f = (0, r.A)(p, 2),
                    E = f[0],
                    y = f[1],
                    v = (0, d.useState)(!1),
                    g = (0, r.A)(v, 2),
                    h = (g[0], g[1]),
                    x = (0, d.useState)(!1),
                    b = (0, r.A)(x, 2),
                    N = (b[0], b[1]),
                    C = (0, d.useState)(!1),
                    P = (0, r.A)(C, 2),
                    L = (P[0], P[1]),
                    A = (0, d.useMemo)(function() {
                        return null != u && u.redirect ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/v1/widget" : "https://web.tilia-inc.com/ui/v1/widget" : null
                    }, [u]),
                    S = (0, d.useMemo)(function() {
                        return null != u && u.redirect && null != u && u.nonce_auth_id ? new URL(u.redirect).hostname.includes("staging") ? "https://web.staging.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : "https://web.tilia-inc.com/ui/appauth/".concat(u.nonce_auth_id) : null
                    }, [u]),
                    k = function(e) {
                        h(!0), n()
                    },
                    R = function(e) {
                        N(!0), o(e)
                    },
                    T = function(e) {
                        L(!0), s(e)
                    };
                return (0, d.useEffect)(function() {
                    if (A) {
                        if (!document.querySelector('script[src="'.concat(A, '"]'))) {
                            var e = document.createElement("script");
                            return e.src = A, e.onload = function() {
                                    y(!0)
                                }, e.onerror = function() {
                                    L(!0), s(new Error("Failed to load external script: ".concat(A)))
                                }, document.body.appendChild(e),
                                function() {
                                    document.body.contains(e) && document.body.removeChild(e), y(!1)
                                }
                        }
                        y(!0)
                    }
                }, [A]), (0, d.useEffect)(function() {
                    if (E && null != u && u.redirect && S) try {
                        window.Tilia.execute({
                            rootId: w,
                            flow: "payout-full",
                            redirect: S,
                            onComplete: R,
                            onError: T,
                            debug: !1,
                            onReady: k,
                            flowConfig: {
                                hideWalletBalance: !0,
                                hideExitButtons: !0,
                                verificationLevel: "basic_pii",
                                currency: "VRC",
                                fixedAmount: m
                            }
                        })
                    } catch (e) {
                        console.error("Error initializing Tilia widget:", e), L(!0)
                    }
                }, [E, w, u]), d.createElement("div", {
                    id: w,
                    style: {
                        width: "100%",
                        height: "700px"
                    }
                })
            };
            var I = "LOADING",
                M = "TILIA",
                D = "VERIFYING",
                _ = "COMPLETED",
                F = "ERROR";
            const O = function(e) {
                var t, a = e.status,
                    l = e.onClose,
                    o = void 0 === l ? function() {} : l,
                    s = e.onRefetchStatus,
                    i = void 0 === s ? function() {} : s,
                    u = e.onHideModalClose,
                    p = void 0 === u ? function() {} : u,
                    f = (0, d.useState)(I),
                    E = (0, r.A)(f, 2),
                    v = E[0],
                    h = E[1],
                    x = (0, d.useState)(null),
                    b = (0, r.A)(x, 2),
                    N = b[0],
                    C = b[1],
                    P = (null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null,
                    L = (0, m.a$)().user,
                    k = (0, w.ZN)(),
                    O = (0, r.A)(k, 1)[0];
                (0, d.useEffect)(function() {
                    p(v !== M)
                }, [v, p]);
                var q = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var a, n, r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return h(D), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, O({
                                            transactionId: P,
                                            tiliaPayoutId: n,
                                            userId: null == L ? void 0 : L.id
                                        }).unwrap();
                                    case 5:
                                        if (!i) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, i().unwrap();
                                    case 8:
                                        h(_), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), h(F), console.error("Error verifying payout status:", e.t0), C({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred."
                                        }), (0, S.X)({
                                            title: "Payout Verification Error",
                                            message: "There was an issue verifying your payout status. Please try again or contact economy@vrchat.com if you are unable to.",
                                            color: "danger",
                                            icon: A.zp,
                                            timeout: 5e3
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 11]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = function() {
                        h(I), C(null), v !== M && v !== _ ? o() : o(!0)
                    };
                return d.createElement(d.Fragment, null, (v === I || v === M) && d.createElement("div", {
                    className: "tw-w-full"
                }, v === I && d.createElement(g, {
                    title: "Loading Payout...",
                    message: "We're securely connecting you to complete your payout."
                }), d.createElement("div", {
                    className: v === I ? "tw-invisible" : ""
                }, d.createElement(T, {
                    status: a,
                    onComplete: q,
                    onLoad: function() {
                        h(M)
                    },
                    onError: function() {
                        h(F)
                    }
                }))), v === D && d.createElement(g, {
                    showNotice: !0,
                    message: "Please wait while we verify the transaction status."
                }), v === _ && d.createElement(R, {
                    onClose: Y
                }), v === F && d.createElement(y, {
                    onClose: Y
                }, d.createElement("p", null, "There was an issue processing your payout request. ", d.createElement("br", null), (null == N ? void 0 : N.message) && d.createElement(d.Fragment, null, N.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var q = a(6913),
                Y = a(29788),
                $ = a(56822),
                z = [u.yL.CANCELLED_PLATFORM, u.yL.CANCELLED_REVERSED, u.yL.CANCELLING];
            const G = function(e) {
                var t = e.payouts,
                    a = d.useMemo(function() {
                        return new Intl.DateTimeFormat(void 0, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }, []);
                return d.createElement("div", {
                    className: "tw-w-full tw-p-4 tw-bg-grey tw-rounded-lg tw-overflow-auto tw-relative"
                }, (!t || 0 === t.length) && d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-20"
                }, d.createElement(s.M2, {
                    icon: Y.BA,
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
                }, "Status"))), d.createElement("tbody", null, t.map(function(e) {
                    return d.createElement("tr", {
                        key: e.transactionId,
                        className: "tw-border-b tw-border-solid tw-border-hr-line-color"
                    }, d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, null != e && e.paymentCreated ? a.format(new Date(e.paymentCreated)).replace(/, /g, " ") : "Invalid Date"), d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, e.paymentPlatform), d.createElement("td", {
                        className: "tw-py-5 tw-px-3"
                    }, d.createElement(s.eD, null), " ", e.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                        className: (0, $.cx)("tw-py-5 tw-px-3", z.includes(e.paymentStatusCode) && "tw-text-error-message-red", e.paymentStatusCode === u.yL.PLATFORM_COMPLETED && "tw-text-message-success")
                    }, d.createElement("div", {
                        className: "tw-relative tw-whitespace-nowrap"
                    }, e.paymentStatus || "Processing", " ", d.createElement("div", {
                        className: "tw-group tw-relative tw-inline-block"
                    }, d.createElement(s.M2, {
                        className: "tw-text-[#797979]",
                        icon: q.iW
                    }), function(e) {
                        switch (e.paymentStatusCode) {
                            case u.yL.CANCELLED_PLATFORM:
                            case u.yL.CANCELLED_REVERSED:
                            case u.yL.CANCELLING:
                                var t = a.format(new Date(e.paymentCreated)).replace(/, /g, " ");
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, (null == e ? void 0 : e.reversalReason) || "Cancel reason missing", ". At ", t);
                            case u.yL.PLATFORM_COMPLETED:
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, "Your payout was successfully processed and funds have been transferred to your selected payment method.");
                            case u.yL.PLATFORM_PROCESSING:
                            case u.yL.INIT:
                            case u.yL.LEDGER_READY:
                            case u.yL.LEDGER_PROCESSING:
                            case u.yL.LEDGER_SETTLED:
                                return d.createElement("div", {
                                    role: "tooltip",
                                    className: "tw-whitespace-normal tw-absolute tw--top-1/2 tw-right-0 tw--translate-x-5 tw-w-64 tw-mb-2 tw-hidden group-hover:tw-block tw-p-2 tw-bg-black tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-50"
                                }, "Your payout is currently being processed by the provider. This usually takes a few days.", " ", d.createElement(f.N_, {
                                    to: "https://creators.vrchat.com/economy/payout/",
                                    target: "_blank",
                                    rel: "noreferrer"
                                }, "Learn More"));
                            default:
                                return ""
                        }
                    }(e)))))
                }))))
            };
            var U = a(16879);
            const V = function(e) {
                var t = e.status,
                    a = e.onContinuePayout,
                    n = e.onCancelPayout,
                    r = t.activePayout,
                    l = t.activePayoutCancellable;
                if (!r) return null;
                var o = d.useMemo(function() {
                        return new Intl.DateTimeFormat(void 0, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }, []),
                    c = r.paymentStatusCode === u.yL.PLATFORM_READY,
                    i = r.paymentStatusCode === u.yL.PLATFORM_PROCESSING;
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
                }, d.createElement(s.eD, null), " ", r.paymentAmountTokens.toLocaleString()), d.createElement("td", {
                    className: (0, $.cx)("tw-py-5 tw-px-3 tw-flex tw-items-center tw-gap-2 tw-flex-nowrap", {
                        "tw-text-orange": c
                    })
                }, c && d.createElement(s.M2, {
                    icon: A.zp
                }), i && d.createElement(s.M2, {
                    icon: U.Ao
                }), d.createElement("span", null, r.paymentStatus || "Incomplete"), c && d.createElement(d.Fragment, null, d.createElement(s.$n, {
                    type: "button",
                    onClick: a
                }, "Continue"), d.createElement(s.$n, {
                    type: "button",
                    neutral: !0,
                    onClick: n,
                    disabled: !l
                }, "Cancel")))))))
            };
            var j = a(84567),
                B = a.n(j);
            const X = function(e) {
                var t = e.onContinue,
                    a = (e.activePayout || {}).transactionId;
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-gap-2 tw-mt-12 tw-mb-14"
                }, d.createElement("div", {
                    className: "tw-rounded-full tw-bg-white tw-w-16 tw-h-16 tw-justify-center tw-items-center tw-flex tw-overflow-hidden"
                }, d.createElement("img", {
                    src: B(),
                    alt: "Tilia Logo"
                })), d.createElement("h4", {
                    className: "tw-font-bold tw-text-center tw-leading-8 tw-mb-0"
                }, "Request Approved:", d.createElement("br", null), "Continue in Tilia to complete payout"), d.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "Follow the steps with Tilia to choose how to receive your funds.")), d.createElement("div", {
                    className: "tw-max-w-[320px] tw-w-full"
                }, d.createElement(s.$n, {
                    onClick: t,
                    disabled: !a,
                    "aria-label": "Continue in Tilia"
                }, "Continue in Tilia")))
            };
            const H = function(e) {
                var t = e.status,
                    a = e.onCancel,
                    n = e.onConfirm,
                    l = e.requestError,
                    o = e.account,
                    c = (t || {}).earningsBalance,
                    i = void 0 === c ? 0 : c,
                    m = (o || {}).limits,
                    w = "number" == typeof(null == m ? void 0 : m.payoutMax) && i > m.payoutMax ? m.payoutMax : i,
                    p = "number" == typeof(null == m ? void 0 : m.payoutMax) && m.payoutMax < i,
                    f = l || {},
                    E = f.status_code,
                    y = f.message,
                    v = (0, d.useState)(null != i ? i : ""),
                    g = (0, r.A)(v, 2),
                    h = g[0],
                    x = g[1],
                    b = (0, d.useState)("$0.00"),
                    N = (0, r.A)(b, 2),
                    C = N[0],
                    P = N[1],
                    L = function() {
                        var e = Number(h);
                        return !Number.isNaN(e) && e >= u.FR && e <= w
                    };
                return (0, d.useEffect)(function() {
                    if (L()) {
                        var e = Math.floor(.5 * Number(h));
                        P("$".concat((e / 100).toFixed(2)))
                    } else P("$0.00")
                }, [h, w, L]), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-6 tw-w-full"
                }, l && d.createElement(s.$T, {
                    type: "error",
                    className: "tw-mb-0",
                    title: "Payout Request Error ".concat(E),
                    message: "".concat(y, ". Please try again later or contact support.")
                }), d.createElement("div", {
                    className: "tw-p-4 tw-border-light-grey tw-border-solid tw-border tw-rounded-lg tw-font-bold tw-text-lg"
                }, d.createElement("p", {
                    className: "tw-m-0"
                }, "You have ", d.createElement(s.eD, null), " ", i.toLocaleString(), " available to pay out.", d.createElement("br", null), p && d.createElement(d.Fragment, null, "The maximum you can currently request is ", d.createElement(s.eD, null), " ", w.toLocaleString(), "."))), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-7"
                }, d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, d.createElement("h6", null, "Payout Amount in VRChat Credits"), d.createElement(s.pd, {
                    min: u.FR,
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
                }, d.createElement("small", null, "Minimum: ", d.createElement(s.eD, null), " ", u.FR.toLocaleString(), " | Maximum: ", d.createElement(s.eD, null), " ", null == w ? void 0 : w.toLocaleString()))), d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-3"
                }, d.createElement("h6", {
                    className: "tw-mb-0"
                }, "Provider"), d.createElement("div", {
                    className: "tw-p-3 tw-gap-3 tw-bg-grey tw-rounded-lg tw-flex tw-flex-row tw-items-center"
                }, d.createElement("div", {
                    className: "tw-bg-white tw-rounded-full tw-overflow-hidden tw-h-10 tw-shrink-0 tw-w-10 tw-flex tw-items-center tw-justify-center"
                }, d.createElement("img", {
                    src: B(),
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
                }, C)), d.createElement("p", {
                    className: "tw-mb-0 tw-text-orange"
                }, d.createElement("small", null, "This is an estimate. Final amount and fees will be shown after specifying a transfer method and destination on the following screens."))), d.createElement("div", {
                    className: "tw-flex tw-gap-3 tw-w-full"
                }, d.createElement(s.$n, {
                    neutral: !0,
                    onClick: a,
                    containerClasses: "tw-flex-1"
                }, "Cancel"), d.createElement(s.$n, {
                    onClick: function() {
                        return n({
                            amount: Number(h)
                        })
                    },
                    disabled: !L(),
                    containerClasses: "tw-flex-1"
                }, "Request Payout"))))
            };
            var W = "REQUEST",
                Q = "APPROVED",
                Z = "PROCESSING",
                K = "TILIA",
                J = "VERIFYING",
                ee = "COMPLETED",
                te = "ERROR";
            const ae = function(e) {
                var t, a = e.status,
                    l = e.account,
                    o = e.onClose,
                    s = void 0 === o ? function() {} : o,
                    i = e.onPayoutRequest,
                    u = void 0 === i ? function() {} : i,
                    p = e.onRefetchStatus,
                    f = void 0 === p ? function() {} : p,
                    E = e.onHideModalClose,
                    v = void 0 === E ? function() {} : E,
                    h = (0, d.useState)(W),
                    x = (0, r.A)(h, 2),
                    b = x[0],
                    N = x[1],
                    C = (0, d.useState)(null),
                    P = (0, r.A)(C, 2),
                    L = P[0],
                    k = P[1],
                    I = (0, d.useState)(null),
                    M = (0, r.A)(I, 2),
                    D = M[0],
                    _ = M[1],
                    F = (0, d.useState)(!1),
                    O = (0, r.A)(F, 2),
                    q = O[0],
                    Y = O[1],
                    $ = (0, d.useState)((null == a || null === (t = a.activePayout) || void 0 === t ? void 0 : t.transactionId) || null),
                    z = (0, r.A)($, 2),
                    G = z[0],
                    U = z[1],
                    V = (0, m.a$)().user,
                    j = (0, w.ZN)(),
                    B = (0, r.A)(j, 1)[0];
                (0, d.useEffect)(function() {
                    v(b !== K)
                }, [b, v]);
                var ae = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var a, n, r, l, o;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(null), N(Z), e.prev = 2, e.next = 5, u(t);
                                    case 5:
                                        n = e.sent, _(n), U(null == n || null === (a = n.activePayout) || void 0 === a ? void 0 : a.transactionId), N(K), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.error("Payout request failed:", (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred. Please try again later."), k({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) || "An unexpected error occurred."
                                        }), (0, S.X)({
                                            title: "Payout Request Error",
                                            message: (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) || "An unexpected error occurred. Please try again later.",
                                            color: "danger",
                                            icon: A.zp,
                                            timeout: 5e3
                                        }), N(te);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 11]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ne = function() {
                        N(W), k(null), _(null), Y(!1), b !== K && b !== ee ? s() : s(!0)
                    },
                    re = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var a, n, r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return N(J), e.prev = 1, n = (null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.payout_status_id) || (null == t ? void 0 : t.payout_status_id), e.next = 5, B({
                                            transactionId: G,
                                            tiliaPayoutId: n,
                                            userId: null == V ? void 0 : V.id
                                        }).unwrap();
                                    case 5:
                                        if (!f) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, f().unwrap();
                                    case 8:
                                        N(ee), e.next = 17;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), console.error("Error verifying payout status:", e.t0), k({
                                            status_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status,
                                            message: (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "An unexpected error occurred."
                                        }), (0, S.X)({
                                            title: "Payout Verification Error",
                                            message: "There was an issue verifying your payout status. Please try again or contact support if you are unable to.",
                                            color: "danger",
                                            icon: A.zp,
                                            timeout: 5e3
                                        }), N(te);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 11]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(d.Fragment, null, b === W && d.createElement(H, {
                    requestError: L,
                    status: a,
                    account: l,
                    onCancel: ne,
                    onConfirm: ae
                }), b === Z && d.createElement(g, {
                    title: "Processing Request...",
                    message: "This usually takes a few seconds."
                }), b === Q && d.createElement(X, {
                    activePayout: null == D ? void 0 : D.activePayout,
                    onContinue: function() {
                        return N(K)
                    }
                }), b === K && d.createElement("div", {
                    className: "tw-w-full tw-relative tw-min-h-[400px]"
                }, !q && d.createElement("div", {
                    className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-10 tw-bg-white"
                }, d.createElement(g, {
                    title: "Continue in Tilia",
                    message: "Complete your payout details there to finish the process."
                })), d.createElement("div", {
                    className: q ? "" : "tw-invisible"
                }, d.createElement(T, {
                    status: a,
                    onComplete: re,
                    onLoad: function() {
                        Y(!0)
                    },
                    onError: function() {
                        N(te)
                    }
                }))), b === J && d.createElement(g, {
                    showNotice: !0,
                    title: "Verifying your payout status...",
                    message: "Returning you to VRChat..."
                }), b === ee && d.createElement(R, {
                    onClose: ne
                }), b === te && d.createElement(y, {
                    onClose: ne
                }, d.createElement("p", null, "There was an issue processing your payout request. ", d.createElement("br", null), (null == L ? void 0 : L.message) && d.createElement(d.Fragment, null, L.message, " ", d.createElement("br", null)), "Please try again or contact ", d.createElement("a", {
                    href: "mailto:economy@vrchat.com"
                }, "economy@vrchat.com"), " if the problem persists.")))
            };
            var ne = a(48864);
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
                    p = o.okStanding,
                    E = (null == a ? void 0 : a.economyOnline) || n;
                return d.createElement(s.fv, {
                    className: "tw-bg-grey tw-p-5 tw-rounded-lg @md:tw-flex-row tw-gap-4"
                }, d.createElement("div", {
                    className: "tw-flex-1 tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-center"
                }, d.createElement("h5", {
                    className: "tw-font-bold tw-no-underline after:tw-hidden"
                }, "Available for Payout"), d.createElement("h2", null, d.createElement(s.eD, null), " ", c.toLocaleString()), d.createElement(s.$n, {
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
                }, "Payout Request Requirements"), d.createElement(f.N_, {
                    to: "https://creators.vrchat.com/economy/payout/",
                    target: "_blank",
                    rel: "noreferrer"
                }, d.createElement("small", {
                    className: "tw-underline tw-text-subtext-grey"
                }, d.createElement(s.M2, {
                    icon: q.iW
                }), " About Payout"))), d.createElement("ul", {
                    className: "tw-list-none tw-p-0 tw-flex tw-flex-col tw-gap-2"
                }, d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.M2, {
                    className: (0, $.cx)({
                        "tw-text-message-success": p,
                        "tw-text-orange": !p
                    }),
                    icon: p ? k.faCircleCheck : ne.faCircleXmark
                }), !p && d.createElement("span", null, "Your account has creator economy holds or restrictions"), p && d.createElement("span", null, "Your account has no creator economy holds or restrictions")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.M2, {
                    className: (0, $.cx)({
                        "tw-text-message-success": u,
                        "tw-text-orange": !u
                    }),
                    icon: u ? k.faCircleCheck : ne.faCircleXmark
                }), !u && d.createElement("span", null, "You don't have at least 20,000 earned credits available"), u && d.createElement("span", null, "You have at least 20,000 earned credits available")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.M2, {
                    className: (0, $.cx)({
                        "tw-text-message-success": m,
                        "tw-text-orange": !m
                    }),
                    icon: m ? k.faCircleCheck : ne.faCircleXmark
                }), !m && d.createElement("span", null, "You have an active payout in progress"), m && d.createElement("span", null, "You don't have an active payout in progress")), d.createElement("li", {
                    className: "tw-flex tw-items-center tw-gap-2"
                }, d.createElement(s.M2, {
                    className: (0, $.cx)({
                        "tw-text-message-success": w,
                        "tw-text-orange": !w
                    }),
                    icon: w ? k.faCircleCheck : ne.faCircleXmark
                }), !w && d.createElement("span", null, "You have requested a payout in the past 24 hours"), w && d.createElement("span", null, "You haven't requested a payout in the past 24 hours")))))
            };
            const le = function() {
                var e, t, a, o, E, y, v, h, x = (0, m.a$)().user,
                    b = (0, m.Om)(),
                    N = (0, p.Zp)(),
                    C = (0, f.ok)(),
                    P = (0, r.A)(C, 2),
                    A = P[0],
                    S = (P[1], (0, d.useState)(!1)),
                    k = (0, r.A)(S, 2),
                    R = k[0],
                    T = k[1],
                    I = (0, d.useState)(null),
                    M = (0, r.A)(I, 2),
                    D = M[0],
                    _ = M[1],
                    F = (0, p.g)().paginationPage,
                    q = (0, d.useState)(F ? Number(F) : 1),
                    Y = (0, r.A)(q, 2),
                    $ = Y[0],
                    z = Y[1],
                    U = (0, w.KT)(),
                    j = U.data,
                    B = U.isFetching,
                    X = (U.isError, U.error, (0, w.zL)({
                        userId: x.id,
                        getLimits: !0
                    }, {
                        skip: !x
                    })),
                    H = X.data,
                    W = X.isFetching,
                    Q = (X.isError, X.error, 2 === (null == j ? void 0 : j.economyState) && b),
                    Z = (0, w.Et)({
                        userId: x.id
                    }, {
                        skip: !x
                    }),
                    K = Z.data,
                    J = Z.isFetching,
                    ee = Z.isSuccess,
                    te = Z.isError,
                    ne = Z.error,
                    le = Z.refetch,
                    oe = (0, w.iP)({
                        userId: x.id
                    }, {
                        skip: !x
                    }),
                    ce = oe.data,
                    se = oe.isFetching,
                    ie = oe.isSuccess,
                    ue = oe.isError,
                    me = oe.error,
                    we = (0, w.gz)(),
                    de = (0, r.A)(we, 2),
                    pe = de[0],
                    fe = de[1].isSuccess,
                    Ee = (0, w.Sr)(),
                    ye = (0, r.A)(Ee, 1)[0],
                    ve = J || se || B || W,
                    ge = null !== (e = null == K ? void 0 : K.activePayout) && void 0 !== e && e,
                    he = null !== (t = null == K || null === (a = K.activePayout) || void 0 === a ? void 0 : a.transactionId) && void 0 !== t ? t : null,
                    xe = (null == K || null === (o = K.activePayout) || void 0 === o ? void 0 : o.paymentStatusCode) === u.yL.PLATFORM_READY,
                    be = A.get("tilia-state"),
                    Ne = Boolean(be),
                    Ce = (0, d.useMemo)(function() {
                        return null != x && x.id && be && he ? "payout-return-handled:".concat(x.id, ":").concat(be, ":").concat(he) : null
                    }, [he, be, null == x ? void 0 : x.id]),
                    Pe = function() {
                        Ce && sessionStorage.setItem(Ce, "1")
                    };
                (0, d.useEffect)(function() {
                    ee && Ne && ge && xe && he && Ce && (sessionStorage.getItem(Ce) || (Pe(), _("CONTINUE")))
                }, [he, xe, ge, Ne, ee, Ce]), (0, d.useEffect)(function() {
                    $ !== (F ? Number(F) : 1) && N("/home/marketplace/storefront/payout/manage/".concat($, "?").concat(A.toString()), {
                        replace: !0
                    })
                }, [$, N, F, A]);
                var Le = (0, d.useMemo)(function() {
                        return ce && ce.payouts ? ce.payouts.filter(function(e) {
                            return e.paymentStatusCode !== u.yL.PLATFORM_READY && e.paymentStatusCode !== u.yL.PLATFORM_PROCESSING && e.paymentStatusCode !== u.yL.INIT
                        }) : []
                    }, [ce]),
                    Ae = (0, d.useMemo)(function() {
                        if (!Le || 0 === Le.length) return [];
                        var e = 10 * ($ - 1),
                            t = e + 10;
                        return Le.slice(e, t)
                    }, [Le, $]),
                    Se = function(e) {
                        "CONTINUE" === e && Pe(), _(e)
                    },
                    ke = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        "CONTINUE" === D && Pe(), e ? (_("EXITING"), le(), setTimeout(function() {
                            return _(null)
                        }, 1e3)) : _(null)
                    },
                    Re = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, pe({
                                            platform: u.bM.PAYOUT_TILIA,
                                            amountTokens: t.amount,
                                            userId: null == x ? void 0 : x.id
                                        }).unwrap();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Te = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ye({
                                            transactionId: t,
                                            userId: null == x ? void 0 : x.id
                                        }).unwrap();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ie = function(e) {
                        T(e)
                    };
                return d.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-8"
                }, d.createElement(s.$n, {
                    containerClasses: "tw-w-fit",
                    neutral: !0,
                    onClick: function() {
                        return N("/home/marketplace/storefront/dashboard")
                    }
                }, d.createElement(s.M2, {
                    icon: l.Wz
                }), " Back"), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout"), te && d.createElement(s.$T, {
                    type: "error",
                    title: "Error Loading Payout Status",
                    message: "There was an error loading your payout status: ".concat((null == ne || null === (E = ne.data) || void 0 === E ? void 0 : E.message) || "Unknown error")
                }), ve && d.createElement(s.fy, {
                    className: "tw-w-full tw-h-64"
                }), !ve && ee && d.createElement(re, {
                    status: K,
                    economyStatus: j,
                    isInternalTesting: Q,
                    onRequestPayout: function() {
                        return Se("REQUEST")
                    }
                })), !ve && ee && ge && d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "In Progress"), d.createElement(V, {
                    status: K,
                    onContinuePayout: function() {
                        return Se("CONTINUE")
                    },
                    onCancelPayout: function() {
                        return Se("CANCEL")
                    }
                })), d.createElement("div", null, d.createElement("h3", {
                    className: "after:tw-hidden tw-font-bold tw-mb-3"
                }, "Payout History"), ue && d.createElement(s.$T, {
                    type: "error",
                    title: "Error Loading Payout History",
                    message: "There was an error loading your payout history: ".concat((null == me || null === (y = me.data) || void 0 === y ? void 0 : y.message) || "Unknown error")
                }), ve && d.createElement(s.fy, {
                    className: "tw-w-full tw-h-64"
                }), !ve && ie && d.createElement(G, {
                    payouts: Ae
                }), d.createElement("div", null, d.createElement(i.A, {
                    totalCount: null !== (v = null == ce || null === (h = ce.payouts) || void 0 === h ? void 0 : h.length) && void 0 !== v ? v : 0,
                    showCurrentPageOnly: !0,
                    currentPage: $,
                    pageSize: 10,
                    onPageChange: function(e) {
                        return z(e)
                    }
                }))), d.createElement(s.aF, {
                    disableBackdropClick: !0,
                    disableClose: ve || R,
                    isVisible: !!D,
                    onClose: function() {
                        return ke(!0)
                    },
                    title: function() {
                        switch (D) {
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
                    noClose: "EXITING" === D || R,
                    centered: !0
                }, function() {
                    switch (D) {
                        case "REQUEST":
                            return d.createElement(ae, {
                                status: K,
                                account: H,
                                onClose: ke,
                                onHideModalClose: Ie,
                                onPayoutRequest: Re,
                                requestCreated: fe,
                                onRefetchStatus: le
                            });
                        case "CONTINUE":
                            return d.createElement(O, {
                                onHideModalClose: Ie,
                                status: K,
                                onClose: ke,
                                onRefetchStatus: le
                            });
                        case "CANCEL":
                            return d.createElement(L, {
                                status: K,
                                onClose: ke,
                                onCancel: Te,
                                onRefetchStatus: le
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
        84567(e, t, a) {
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
//# sourceMappingURL=f3804e21a65141e6a60364d7c7e1f16938710f1a81c02ad76b582c36c5cf00be.js.map