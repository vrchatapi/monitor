"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6077], {
        84176: (e, t) => {
            var r = [128273],
                n = "f084",
                a = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.DF = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, r, n, a]
            }, t.DD = t.DF
        },
        78989: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(87462),
                a = r(4965),
                o = r(67294),
                c = r(45697),
                l = r.n(c),
                u = r(96985);
            var s = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                i = (0, o.forwardRef)((function(e, t) {
                    var r = e.isError,
                        a = void 0 !== r && r,
                        c = s;
                    return o.createElement(m, (0, n.Z)({
                        ref: t
                    }, e, {
                        inputStyle: a ? c : ""
                    }))
                }));
            i.propTypes = {
                isError: l().bool
            };
            var m = (0, a.Z)(u.II, {
                target: "e1v6asn80"
            })({
                name: "1bob962",
                styles: "overflow:inherit;input{text-align:center;font-size:1.5rem;@media (min-width: 576px){font-size:2rem;}}"
            });
            const w = i
        },
        46077: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => g
            });
            var n = r(15861),
                a = r(54546),
                o = r(6767),
                c = r(84176),
                l = r(64687),
                u = r.n(l),
                s = r(67294),
                i = r(89250),
                m = r(79655),
                w = r(22202),
                f = r(60006),
                p = r(96985),
                v = r(78989),
                d = r(41400),
                h = r(13887),
                x = r(98538);
            const g = function(e) {
                var t = e.isStepUpVerification,
                    r = void 0 !== t && t,
                    l = (0, i.s0)(),
                    g = (0, i.TH)().state,
                    b = (0, s.useState)(!1),
                    E = (0, a.Z)(b, 2),
                    y = E[0],
                    N = E[1],
                    R = (0, w.Sq)(),
                    k = (0, a.Z)(R, 2),
                    T = k[0],
                    C = k[1],
                    D = C.isLoading,
                    Z = C.isError,
                    F = C.error,
                    L = (0, s.useRef)(null),
                    M = (0, s.useRef)(null),
                    S = (0, s.useRef)(null),
                    K = (0, s.useRef)(null),
                    j = (0, s.useRef)(null),
                    z = (0, s.useRef)(null),
                    A = (0, s.useRef)(null),
                    q = (0, s.useRef)(null);
                (0, s.useEffect)((function() {
                    var e;
                    !r || null != g && g.scope ? null === (e = L.current) || void 0 === e || e.focus() : l("/home/login", {
                        replace: !0
                    })
                }), []);
                var H = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            var n, a, o;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), n = $(), y && 8 === n.length) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return q.current.blur(), a = "".concat(n.substring(0, 4), "-").concat(n.substring(4, 8)), e.prev = 6, e.next = 9, T({
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
                            }), e, null, [
                                [6, 22]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    U = function(e) {
                        return e.replace(/[^abcdefghjkmnpqrstuvwxyz234567890]+/g, "").substr(0, 9)
                    },
                    $ = function() {
                        return [L.current.value, M.current.value, S.current.value, K.current.value, j.current.value, z.current.value, A.current.value, q.current.value].join("")
                    },
                    _ = function(e) {
                        var t, r = e.event,
                            n = e.nextRef,
                            a = void 0 === n ? null : n;
                        (r.target.value = U(r.target.value), N(8 === $().length), null !== a) && ("" !== r.target.value && (null === (t = a.current) || void 0 === t || t.focus()))
                    },
                    I = function(e) {
                        var t = e.event,
                            r = e.previousRef,
                            n = void 0 === r ? null : r;
                        null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                    },
                    P = y && !D;
                return s.createElement(h.Z, null, s.createElement(p.$4, null, "Two-Factor Authentication Recovery"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, s.createElement(d.l0, {
                    onSubmit: H
                }, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(p.$1, {
                    icon: c.DD,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Two-Factor Authentication Recovery"), s.createElement("p", {
                    className: "tw-text-center"
                }, "Enter one of your saved recovery codes.  ", s.createElement("a", {
                    href: x.S1,
                    "aria-label": "Two Factor Recovery Help",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tw-text-link-highlight"
                }, "Help")), s.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col"
                }, s.createElement("div", {
                    className: "tw-flex tw-items-center tw-mb-1 tw-flex-row"
                }, s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: M
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: L,
                    onPaste: function(e) {
                        var t = U(e.clipboardData.getData("text/plain"));
                        t.length < 8 || Number.isNaN(t) || (L.current.value = t[0], M.current.value = t[1], S.current.value = t[2], K.current.value = t[3], j.current.value = t[4], z.current.value = t[5], A.current.value = t[6], q.current.value = t[7], N(8 === $().length), q.current.focus())
                    }
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: S
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: L
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: M
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: K
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: M
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: S
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: j
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: S
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: K
                }), s.createElement("div", {
                    className: "tw-mr-2 sm:tw-mr-3 tw-flex tw-flex-col tw-justify-center"
                }, s.createElement(p.$1, {
                    icon: o.Kl,
                    className: "tw-w-3 sm:tw-w-6 tw-h-6"
                })), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: z
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: K
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: j
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: A
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: j
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: z
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: q
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: z
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: A
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e
                        })
                    },
                    onKeyDown: function(e) {
                        return I({
                            event: e,
                            previousRef: A
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px]",
                    isError: Z,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: q
                })), Z && s.createElement("p", {
                    role: "alert",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, 429 === (null == F ? void 0 : F.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), s.createElement(p.zx, {
                    className: "tw-w-60 tw-mt-6 tw-mb-4",
                    disabled: !P,
                    loading: D,
                    type: "submit"
                }, "Next"), s.createElement(m.rU, {
                    to: r ? "/home/stepupauth" : "/home/twofactorauth",
                    state: {
                        scope: null == g ? void 0 : g.scope,
                        discordAccessToken: null == g ? void 0 : g.discordAccessToken
                    },
                    className: "nav-link tw-text-link-highlight"
                }, "Use your authenticator app instead"), s.createElement(f.Qj, {
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
//# sourceMappingURL=655e77aacfce3649cd108a9b44fa894984b511ea0fcd0e9990a45d3376dfb264.js.map