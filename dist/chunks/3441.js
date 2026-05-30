"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3441], {
        32110(e, t) {
            var r = [128273],
                n = "f084",
                a = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.mw = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, r, n, a]
            }, t.bM = t.mw
        },
        36124(e, t, r) {
            r.d(t, {
                A: () => w
            });
            var n = r(58168),
                a = r(70129),
                o = r(96540),
                c = r(5556),
                l = r.n(c),
                u = r(15033);
            var s = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                i = (0, o.forwardRef)(function(e, t) {
                    var r = e.isError,
                        a = void 0 !== r && r,
                        c = s;
                    return o.createElement(m, (0, n.A)({
                        ref: t
                    }, e, {
                        inputStyle: a ? c : ""
                    }))
                });
            i.propTypes = {
                isError: l().bool
            };
            var m = (0, a.A)(u.pd, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const w = i
        },
        63441(e, t, r) {
            r.r(t), r.d(t, {
                default: () => g
            });
            var n = r(10467),
                a = r(15902),
                o = r(14133),
                c = r(32110),
                l = r(54756),
                u = r.n(l),
                s = r(96540),
                i = r(84976),
                m = r(47767),
                w = r(13951),
                f = r(24751),
                p = r(15033),
                v = r(36124),
                d = r(82030),
                h = r(84212),
                x = r(97890);
            const g = function(e) {
                var t = e.isStepUpVerification,
                    r = void 0 !== t && t,
                    l = (0, m.Zp)(),
                    g = (0, m.zy)().state,
                    b = (0, s.useState)(!1),
                    E = (0, a.A)(b, 2),
                    y = E[0],
                    N = E[1],
                    R = (0, w.Jz)(),
                    k = (0, a.A)(R, 2),
                    A = k[0],
                    T = k[1],
                    C = T.isLoading,
                    M = T.isError,
                    F = T.error,
                    L = (0, s.useRef)(null),
                    D = (0, s.useRef)(null),
                    z = (0, s.useRef)(null),
                    S = (0, s.useRef)(null),
                    K = (0, s.useRef)(null),
                    j = (0, s.useRef)(null),
                    _ = (0, s.useRef)(null),
                    q = (0, s.useRef)(null);
                (0, s.useEffect)(function() {
                    var e;
                    !r || null != g && g.scope ? null === (e = L.current) || void 0 === e || e.focus() : l("/home/login", {
                        replace: !0
                    })
                }, []);
                var H = function() {
                        var e = (0, n.A)(u().mark(function e(t) {
                            var n, a, o;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), n = U(), y && 8 === n.length) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return q.current.blur(), a = "".concat(n.substring(0, 4), "-").concat(n.substring(4, 8)), e.prev = 6, e.next = 9, A({
                                            code: a,
                                            twoFactorType: "otp",
                                            scope: null == g ? void 0 : g.scope
                                        }).unwrap();
                                    case 9:
                                        if ((o = e.sent).verified) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        if (!r) {
                                            e.next = 15;
                                            break
                                        }
                                        return l("/home/verify-password", {
                                            state: {
                                                ticket: o.ticket,
                                                redirectTo: null == g ? void 0 : g.redirectTo,
                                                redirectState: null == g ? void 0 : g.redirectState
                                            }
                                        }), e.abrupt("return");
                                    case 15:
                                        if (null == g || !g.redirectTo) {
                                            e.next = 18;
                                            break
                                        }
                                        return l(g.redirectTo), e.abrupt("return");
                                    case 18:
                                        return l("/home"), e.abrupt("return");
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(6), console.error(e.t0);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [6, 22]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = function(e) {
                        return e.replace(/[^abcdefghjkmnpqrstuvwxyz234567890]+/g, "").substr(0, 9)
                    },
                    U = function() {
                        return [L.current.value, D.current.value, z.current.value, S.current.value, K.current.value, j.current.value, _.current.value, q.current.value].join("")
                    },
                    V = function(e) {
                        var t, r = e.event,
                            n = e.nextRef,
                            a = void 0 === n ? null : n;
                        (r.target.value = P(r.target.value), N(8 === U().length), null !== a) && ("" !== r.target.value && (null === (t = a.current) || void 0 === t || t.focus()))
                    },
                    Z = function(e) {
                        var t = e.event,
                            r = e.previousRef,
                            n = void 0 === r ? null : r;
                        null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                    },
                    B = y && !C;
                return s.createElement(h.A, null, s.createElement(p.Qc, null, "Two-Factor Authentication Recovery"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, s.createElement(d.lV, {
                    onSubmit: H
                }, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(p.M2, {
                    icon: c.bM,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Two-Factor Authentication Recovery"), s.createElement("p", {
                    className: "tw-text-center"
                }, "Enter one of your saved recovery codes.  ", s.createElement("a", {
                    href: x.lx,
                    "aria-label": "Two Factor Recovery Help",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-text-link-highlight"
                }, "Help")), s.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col"
                }, s.createElement("div", {
                    className: "tw-flex tw-items-center tw-mb-1 tw-flex-row"
                }, s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: D
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: L,
                    onPaste: function(e) {
                        var t = P(e.clipboardData.getData("text/plain"));
                        t.length < 8 || Number.isNaN(t) || (L.current.value = t[0], D.current.value = t[1], z.current.value = t[2], S.current.value = t[3], K.current.value = t[4], j.current.value = t[5], _.current.value = t[6], q.current.value = t[7], N(8 === U().length), q.current.focus())
                    }
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: z
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: L
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: D
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: S
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: D
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: z
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: K
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: z
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: S
                }), s.createElement("div", {
                    className: "tw-mr-2 sm:tw-mr-3 tw-flex tw-flex-col tw-justify-center"
                }, s.createElement(p.M2, {
                    icon: o.EZ,
                    className: "tw-w-3 sm:tw-w-6 tw-h-6"
                })), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: j
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: S
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: K
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: _
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: K
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: j
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e,
                            nextRef: q
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: j
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: _
                }), s.createElement(v.A, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return V({
                            event: e
                        })
                    },
                    onKeyDown: function(e) {
                        return Z({
                            event: e,
                            previousRef: _
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px]",
                    isError: M,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: q
                })), M && s.createElement("p", {
                    role: "alert",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, 429 === (null == F ? void 0 : F.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), s.createElement(p.$n, {
                    className: "tw-w-60 tw-mt-6 tw-mb-4",
                    disabled: !B,
                    loading: C,
                    type: "submit"
                }, "Next"), s.createElement(i.N_, {
                    to: r ? "/home/stepupauth" : "/home/twofactorauth",
                    state: {
                        scope: null == g ? void 0 : g.scope,
                        discordAccessToken: null == g ? void 0 : g.discordAccessToken
                    },
                    className: "nav-link tw-text-link-highlight"
                }, "Use your authenticator app instead"), s.createElement(f.z9, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    },
                    className: "tw-mt-12"
                }, "Log out")))))
            }
        }
    }
]);
//# sourceMappingURL=b3e5aabe68c9826fe9ffac0c221dbbab24151ea8856ef3873734b3ea1b27f074.js.map