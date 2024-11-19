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
        46077: (e, t, r) => {
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
                m = r(89250),
                w = r(79655),
                i = r(22202),
                f = r(60006),
                p = r(14411),
                v = r(78989),
                d = r(41400),
                h = r(36678),
                x = r(98538);
            const g = function() {
                var e = (0, m.s0)(),
                    t = (0, m.TH)().state,
                    r = (0, s.useState)(!1),
                    c = (0, a.Z)(r, 2),
                    g = c[0],
                    b = c[1],
                    E = (0, i.Sq)(),
                    y = (0, a.Z)(E, 2),
                    N = y[0],
                    R = y[1],
                    k = R.isLoading,
                    C = R.isError,
                    D = R.error,
                    T = (0, s.useRef)(null),
                    F = (0, s.useRef)(null),
                    L = (0, s.useRef)(null),
                    Z = (0, s.useRef)(null),
                    M = (0, s.useRef)(null),
                    K = (0, s.useRef)(null),
                    j = (0, s.useRef)(null),
                    S = (0, s.useRef)(null);
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
                                        if (n.preventDefault(), a = $(), g && 8 === a.length) {
                                            r.next = 4;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 4:
                                        return S.current.blur(), o = "".concat(a.substring(0, 4), "-").concat(a.substring(4, 8)), r.prev = 6, r.next = 9, N({
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
                    H = function(e) {
                        return e.replace(/[^abcdefghjkmnpqrstuvwxyz234567890]+/g, "").substr(0, 9)
                    },
                    $ = function() {
                        return [T.current.value, F.current.value, L.current.value, Z.current.value, M.current.value, K.current.value, j.current.value, S.current.value].join("")
                    },
                    _ = function(e) {
                        var t, r = e.event,
                            n = e.nextRef,
                            a = void 0 === n ? null : n;
                        (r.target.value = H(r.target.value), b(8 === $().length), null !== a) && ("" !== r.target.value && (null === (t = a.current) || void 0 === t || t.focus()))
                    },
                    q = function(e) {
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
                        return _({
                            event: e,
                            nextRef: F
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: T,
                    onPaste: function(e) {
                        var t = H(e.clipboardData.getData("text/plain"));
                        t.length < 8 || Number.isNaN(t) || (T.current.value = t[0], F.current.value = t[1], L.current.value = t[2], Z.current.value = t[3], M.current.value = t[4], K.current.value = t[5], j.current.value = t[6], S.current.value = t[7], b(8 === $().length), S.current.focus())
                    }
                }), s.createElement(v.Z, {
                    type: "text",
                    name: "code",
                    "aria-label": "Two Factor Code",
                    placeholder: "0",
                    onChange: function(e) {
                        return _({
                            event: e,
                            nextRef: L
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
                            event: e,
                            previousRef: T
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
                        return _({
                            event: e,
                            nextRef: Z
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
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
                }), s.createElement(v.Z, {
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
                    onKeyDown: function(e) {
                        return q({
                            event: e,
                            previousRef: L
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: Z
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
                            nextRef: K
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
                            event: e,
                            previousRef: Z
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
                        return _({
                            event: e,
                            nextRef: j
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
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
                        return _({
                            event: e,
                            nextRef: S
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
                            event: e,
                            previousRef: K
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px] tw-mr-2 sm:tw-mr-3",
                    isError: C,
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
                            event: e
                        })
                    },
                    onKeyDown: function(e) {
                        return q({
                            event: e,
                            previousRef: j
                        })
                    },
                    className: "tw-w-10 sm:tw-w-12 sm:tw-h-[60px]",
                    isError: C,
                    inputMode: "numeric",
                    autocomplete: "off",
                    maxLength: "1",
                    ref: S
                })), C && s.createElement("p", {
                    role: "alert",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, 429 === (null == D ? void 0 : D.status) ? "Login unavailable due to too many failed attempts. Please try again later." : "Oops, that code didn't work.")), s.createElement(p.zx, {
                    className: "tw-w-60 tw-mt-6 tw-mb-4",
                    disabled: !A,
                    loading: k,
                    type: "submit"
                }, "Next"), s.createElement(w.rU, {
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
        }
    }
]);
//# sourceMappingURL=a406cf7b3b25b0631f1665385246b363235ebf4e275f59a1627dc90af0dc12fb.js.map