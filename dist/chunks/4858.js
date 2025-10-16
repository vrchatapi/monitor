(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4858], {
        84176: (e, t) => {
            "use strict";
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
            "use strict";
            r.d(t, {
                Z: () => w
            });
            var n = r(87462),
                a = r(4965),
                o = r(67294),
                l = r(45697),
                c = r.n(l),
                u = r(96985);
            var s = {
                    name: "11rq2x7",
                    styles: "border-color:#a8342e"
                },
                i = (0, o.forwardRef)((function(e, t) {
                    var r = e.isError,
                        a = void 0 !== r && r,
                        l = s;
                    return o.createElement(m, (0, n.Z)({
                        ref: t
                    }, e, {
                        inputStyle: a ? l : ""
                    }))
                }));
            i.propTypes = {
                isError: c().bool
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
            "use strict";
            r.r(t), r.d(t, {
                default: () => g
            });
            var n = r(15861),
                a = r(54546),
                o = r(6767),
                l = r(84176),
                c = r(64687),
                u = r.n(c),
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
            const g = function() {
                var e = (0, i.s0)(),
                    t = (0, i.TH)().state,
                    r = (0, s.useState)(!1),
                    c = (0, a.Z)(r, 2),
                    g = c[0],
                    b = c[1],
                    E = (0, w.Sq)(),
                    y = (0, a.Z)(E, 2),
                    N = y[0],
                    R = y[1],
                    k = R.isLoading,
                    C = R.isError,
                    D = R.error,
                    T = (0, s.useRef)(null),
                    Z = (0, s.useRef)(null),
                    F = (0, s.useRef)(null),
                    L = (0, s.useRef)(null),
                    M = (0, s.useRef)(null),
                    K = (0, s.useRef)(null),
                    S = (0, s.useRef)(null),
                    j = (0, s.useRef)(null);
                (0, s.useEffect)((function() {
                    var e;
                    null === (e = T.current) || void 0 === e || e.focus()
                }), []);
                var z = function() {
                        var r = (0, n.Z)(u().mark((function r(n) {
                            var a, o;
                            return u().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n.preventDefault(), a = H(), g && 8 === a.length) {
                                            r.next = 4;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 4:
                                        return j.current.blur(), o = "".concat(a.substring(0, 4), "-").concat(a.substring(4, 8)), r.prev = 6, r.next = 9, N({
                                            code: o,
                                            twoFactorType: "otp"
                                        }).unwrap();
                                    case 9:
                                        if (r.sent.verified) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 12:
                                        if (null == t || !t.redirectTo) {
                                            r.next = 15;
                                            break
                                        }
                                        return e(t.redirectTo), r.abrupt("return");
                                    case 15:
                                        return e("/home"), r.abrupt("return");
                                    case 19:
                                        r.prev = 19, r.t0 = r.catch(6), console.error(r.t0);
                                    case 22:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [6, 19]
                            ])
                        })));
                        return function(e) {
                            return r.apply(this, arguments)
                        }
                    }(),
                    q = function(e) {
                        return e.replace(/[^abcdefghjkmnpqrstuvwxyz234567890]+/g, "").substr(0, 9)
                    },
                    H = function() {
                        return [T.current.value, Z.current.value, F.current.value, L.current.value, M.current.value, K.current.value, S.current.value, j.current.value].join("")
                    },
                    $ = function(e) {
                        var t, r = e.event,
                            n = e.nextRef,
                            a = void 0 === n ? null : n;
                        (r.target.value = q(r.target.value), b(8 === H().length), null !== a) && ("" !== r.target.value && (null === (t = a.current) || void 0 === t || t.focus()))
                    },
                    _ = function(e) {
                        var t = e.event,
                            r = e.previousRef,
                            n = void 0 === r ? null : r;
                        null !== n && "Backspace" === t.key && 0 === t.target.value.length && (n.current.value = "", n.current.focus())
                    },
                    A = g && !k;
                return s.createElement(h.Z, null, s.createElement(p.$4, null, "Two-Factor Authentication Recovery"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, s.createElement(d.l0, {
                    onSubmit: z
                }, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(p.$1, {
                    icon: l.DD,
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
                        return $({
                            event: e,
                            nextRef: Z
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: T,
                    onPaste: function(e) {
                        var t = q(e.clipboardData.getData("text/plain"));
                        t.length < 8 || Number.isNaN(t) || (T.current.value = t[0], Z.current.value = t[1], F.current.value = t[2], L.current.value = t[3], M.current.value = t[4], K.current.value = t[5], S.current.value = t[6], j.current.value = t[7], b(8 === H().length), j.current.focus())
                    }
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return $({
                            event: e,
                            nextRef: F
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: T
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: Z
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return $({
                            event: e,
                            nextRef: L
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: Z
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: F
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return $({
                            event: e,
                            nextRef: M
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: F
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: L
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
                        return $({
                            event: e,
                            nextRef: K
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: L
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
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
                        return $({
                            event: e,
                            nextRef: S
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: M
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: K
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return $({
                            event: e,
                            nextRef: j
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: K
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
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
                        return $({
                            event: e
                        })
                    },
                    onKeyDown: function(e) {
                        return _({
                            event: e,
                            previousRef: S
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px]",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: j
                })), C && s.createElement("p", {
                    role: "alert",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, 429 === (null == D ? void 0 : D.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), s.createElement(p.zx, {
                    className: "tw-w-60 tw-mt-6 tw-mb-4",
                    disabled: !A,
                    loading: k,
                    type: "submit"
                }, "Next"), s.createElement(m.rU, {
                    to: "/home/twofactorauth",
                    className: "nav-link tw-text-link-highlight"
                }, "Use your authenticator app instead"), s.createElement(f.Qj, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    },
                    className: "tw-mt-12"
                }, "Log out")))))
            }
        },
        94311: (e, t, r) => {
            var n = r(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[n(0, t - 1)] : void 0
            }
        },
        84992: (e, t, r) => {
            var n = r(94311),
                a = r(61312);
            e.exports = function(e) {
                return n(a(e))
            }
        },
        95534: (e, t, r) => {
            var n = r(94311),
                a = r(84992),
                o = r(1469);
            e.exports = function(e) {
                return (o(e) ? n : a)(e)
            }
        }
    }
]);
//# sourceMappingURL=4b77d3b0cb53197feb1ce8fdcabe24da2952a883f358e03e7e6bcc44308b7dda.js.map