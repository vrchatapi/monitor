"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [800], {
        14978(e, t) {
            var r = "user-plus",
                a = [],
                n = "f234",
                l = "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, n, l]
            }, t.nW = t.mw
        },
        30800(e, t, r) {
            r.r(t), r.d(t, {
                default: () => k
            });
            var a = r(10467),
                n = r(64467),
                l = r(15902),
                s = r(14978),
                o = r(54756),
                c = r.n(o),
                i = r(96540),
                u = r(84976),
                m = r(47767),
                w = (r(69815), r(32662), r(95093), r(15033)),
                d = r(194),
                p = r(13951),
                f = (r(50779), r(53818)),
                v = r(28337),
                h = r(24751),
                b = (r(82030), r(84212));

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach(function(t) {
                        (0, n.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const k = function() {
                (0, m.Zp)(), (0, m.zy)();
                var e, t, r = (0, u.ok)(),
                    n = (0, l.A)(r, 1)[0],
                    o = i.useMemo(function() {
                        return Object.fromEntries(n.entries())
                    }, [n]),
                    x = i.useState(o.emailToken),
                    k = (0, l.A)(x, 2),
                    E = k[0],
                    y = (k[1], (0, p.jK)({
                        emailToken: E
                    }, {
                        skip: !E
                    })),
                    N = y.data,
                    j = y.isLoading,
                    A = y.isError,
                    O = y.error,
                    z = (0, p.IH)(),
                    P = (0, l.A)(z, 2),
                    T = P[0],
                    S = P[1],
                    q = S.isLoading,
                    C = S.isSuccess,
                    U = (S.isError, S.error),
                    M = (0, d.cz)().nameTaken,
                    D = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    R = (0, l.A)(D, 2),
                    W = R[0],
                    L = R[1],
                    F = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    $ = (0, l.A)(F, 2),
                    _ = $[0],
                    Q = $[1],
                    B = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    H = (0, l.A)(B, 2),
                    I = H[0],
                    Y = H[1],
                    Z = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    K = (0, l.A)(Z, 2),
                    V = K[0],
                    G = K[1];
                i.useEffect(function() {
                    N && !A && (ee({
                        target: {
                            value: N.displayName.replace(/\s[a-zA-Z0-9]{4}$/, "")
                        }
                    }), Q(g(g({}, _), {}, {
                        ok: !0,
                        value: N.email
                    })))
                }, [N, A]);
                var J = i.useMemo(function() {
                    return !0 === W.ok && !0 === _.ok && !0 === I.ok && !0 === V.ok
                }, [W, _, I, V]);
                i.useEffect(function() {
                    var e;
                    U && (0, f.u4)("AccountUpgrade_Error", {
                        error: null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }, [U]);
                var X, ee = function() {
                        var e = (0, a.A)(c().mark(function e(t) {
                            var r, a, n, l;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, L(g(g({}, W), {}, {
                                                value: a,
                                                ok: null,
                                                taken: !1,
                                                error: !1
                                            })), "" !== a) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (L(function(e) {
                                                return g(g({}, e), {}, {
                                                    taken: null
                                                })
                                            }), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return L(function(e) {
                                            return g(g({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        }), e.abrupt("return");
                                    case 10:
                                        if (L(function(e) {
                                                return g(g({}, e), {}, {
                                                    checking: !0
                                                })
                                            }), e.t0 = (null == N ? void 0 : N.displayName) !== a, !e.t0) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 15, M(a);
                                    case 15:
                                        e.t0 = e.sent;
                                    case 16:
                                        l = e.t0, L(function(e) {
                                            return g(g({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        var e = (0, a.A)(c().mark(function e(t) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, T({
                                            displayName: W.value,
                                            password: I.value,
                                            emailToken: E
                                        }).unwrap();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 6]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = !o || j,
                    ae = null !== (e = null == U || null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return ae && (ae.indexOf(":") > 0 ? (ae.substring(0, ae.indexOf(":")).trim(), ae = ae.substring(ae.indexOf(":") + 1).trim()) : 0 === ae.indexOf(":") && (ae = ae.substring(1).trim())), !E || A ? i.createElement(b.A, null, i.createElement(w.Qc, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.M2, {
                    icon: s.nW,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement(w.$T, {
                    type: "error",
                    title: "Invalid token"
                }, "The link you have followed is not valid. Please check the link or try the process again later.", O && i.createElement(i.Fragment, null, i.createElement("br", null), null == O || null === (X = O.data) || void 0 === X || null === (X = X.error) || void 0 === X ? void 0 : X.message))), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(u.N_, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")))) : C ? i.createElement(b.A, null, i.createElement(w.Qc, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.M2, {
                    icon: s.nW,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement("p", null, "Your VRChat account has been upgraded, and your upgrade benefits have been applied."), i.createElement("p", null, "You can now sign in on any platform with your email address, gain Trust Ranks, upload Avatars & Worlds, and more. Have fun!")), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(h.z9, {
                    to: "/home/login"
                }, "Login")))) : i.createElement(b.A, null, i.createElement(w.Qc, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("form", {
                    onSubmit: te
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.M2, {
                    icon: s.nW,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), ae && i.createElement(w.$T, {
                    type: "error",
                    title: "Account upgrade error"
                }, ae), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), i.createElement(w.pd, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "Email",
                    value: _.value,
                    disabled: !0
                })), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Display Name"), i.createElement(w.pd, {
                    type: "text",
                    id: "displayName",
                    name: "displayName",
                    "aria-label": "Desired display name",
                    value: W.value,
                    onChange: ee,
                    disabled: re,
                    loading: W.checking,
                    success: !W.checking && W.ok,
                    className: "tw-mb-1",
                    isError: W.error
                }), !W.error && i.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), W.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, W.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), i.createElement(w.pd, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    disabled: re,
                    value: I.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (Y(g(g({}, I), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, v.v)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            Y(function(e) {
                                return g(g({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            })
                        }
                    },
                    isError: I.error
                }), I.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, I.error), I.ok && i.createElement(w.pd, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    disabled: re,
                    value: V.value,
                    onChange: function(e) {
                        G(g(g({}, V), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return V.value !== I.value ? G(g(g({}, V), {}, {
                            error: "Passwords do not match"
                        })) : G(g(g({}, V), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: V.error
                }), I.ok && V.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, V.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, i.createElement(w.$n, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "upgrade-form-submit",
                    name: "upgrade-form-submit",
                    loading: q,
                    disabled: re || !J
                }, "Upgrade Account"))))))
            }
        },
        28337(e, t, r) {
            r.d(t, {
                v: () => n
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return a.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=4e718dc5564c2dcae76b8039770a1b562c9c428cc59ac27571a2bfcc12651b63.js.map