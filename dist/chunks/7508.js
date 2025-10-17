"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7508], {
        4241: (e, t) => {
            var r = "user-plus",
                a = [],
                l = "f234",
                n = "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, l, n]
            }, t.FK = t.DF
        },
        7508: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => k
            });
            var a = r(15861),
                l = r(4942),
                n = r(54546),
                s = r(4241),
                o = r(64687),
                c = r.n(o),
                i = r(67294),
                u = r(89250),
                m = r(79655),
                w = (r(37337), r(15832), r(30381), r(96985)),
                d = r(17383),
                p = r(22202),
                f = (r(17219), r(80646)),
                v = r(82470),
                h = r(60006),
                b = (r(41400), r(13887));

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const k = function() {
                (0, u.s0)(), (0, u.TH)();
                var e, t, r = (0, m.lr)(),
                    l = (0, n.Z)(r, 1)[0],
                    o = i.useMemo((function() {
                        return Object.fromEntries(l.entries())
                    }), [l]),
                    x = i.useState(o.emailToken),
                    k = (0, n.Z)(x, 2),
                    E = k[0],
                    y = (k[1], (0, p.Gf)({
                        emailToken: E
                    }, {
                        skip: !E
                    })),
                    N = y.data,
                    j = y.isLoading,
                    O = y.isError,
                    z = y.error,
                    P = (0, p.s2)(),
                    Z = (0, n.Z)(P, 2),
                    q = Z[0],
                    A = Z[1],
                    S = A.isLoading,
                    T = A.isSuccess,
                    U = (A.isError, A.error),
                    C = (0, d.sc)().nameTaken,
                    D = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    F = (0, n.Z)(D, 2),
                    I = F[0],
                    $ = F[1],
                    M = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    R = (0, n.Z)(M, 2),
                    L = R[0],
                    K = R[1],
                    _ = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    B = (0, n.Z)(_, 2),
                    H = B[0],
                    W = B[1],
                    X = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    Y = (0, n.Z)(X, 2),
                    G = Y[0],
                    Q = Y[1];
                i.useEffect((function() {
                    N && !O && (ee({
                        target: {
                            value: N.displayName.replace(/\s[a-zA-Z0-9]{4}$/, "")
                        }
                    }), K(g(g({}, L), {}, {
                        ok: !0,
                        value: N.email
                    })))
                }), [N, O]);
                var V = i.useMemo((function() {
                    return !0 === I.ok && !0 === L.ok && !0 === H.ok && !0 === G.ok
                }), [I, L, H, G]);
                i.useEffect((function() {
                    var e;
                    U && (0, f.j)("AccountUpgrade_Error", {
                        error: null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [U]);
                var J, ee = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, a, l, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, $(g(g({}, I), {}, {
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
                                        if ($((function(e) {
                                                return g(g({}, e), {}, {
                                                    taken: null
                                                })
                                            })), l = !1, "" !== a && a.length < 4 ? l = "That display name is too short" : a.length > 15 && (l = "That display name is too long"), !l) {
                                            e.next = 10;
                                            break
                                        }
                                        return $((function(e) {
                                            return g(g({}, e), {}, {
                                                error: l,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        if ($((function(e) {
                                                return g(g({}, e), {}, {
                                                    checking: !0
                                                })
                                            })), e.t0 = (null == N ? void 0 : N.displayName) !== a, !e.t0) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 15, C(a);
                                    case 15:
                                        e.t0 = e.sent;
                                    case 16:
                                        n = e.t0, $((function(e) {
                                            return g(g({}, e), {}, {
                                                taken: n,
                                                ok: !e.error && !n,
                                                error: n ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, q({
                                            displayName: I.value,
                                            password: H.value,
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
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = !o || j,
                    ae = null !== (e = null == U || null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return ae && (ae.indexOf(":") > 0 ? (ae.substring(0, ae.indexOf(":")).trim(), ae = ae.substring(ae.indexOf(":") + 1).trim()) : 0 === ae.indexOf(":") && (ae = ae.substring(1).trim())), !E || O ? i.createElement(b.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement(w.qX, {
                    type: "error",
                    title: "Invalid token"
                }, "The link you have followed is not valid. Please check the link or try the process again later.", z && i.createElement(i.Fragment, null, i.createElement("br", null), null == z || null === (J = z.data) || void 0 === J || null === (J = J.error) || void 0 === J ? void 0 : J.message))), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(m.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")))) : T ? i.createElement(b.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement("p", null, "Your VRChat account has been upgraded, and your upgrade benefits have been applied."), i.createElement("p", null, "You can now sign in on any platform with your email address, gain Trust Ranks, upload Avatars & Worlds, and more. Have fun!")), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(h.Qj, {
                    to: "/home/login"
                }, "Login")))) : i.createElement(b.Z, null, i.createElement(w.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("form", {
                    onSubmit: te
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(w.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), ae && i.createElement(w.qX, {
                    type: "error",
                    title: "Account upgrade error"
                }, ae), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), i.createElement(w.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "Email",
                    value: L.value,
                    disabled: !0
                })), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Display Name"), i.createElement(w.II, {
                    type: "text",
                    id: "displayName",
                    name: "displayName",
                    "aria-label": "Desired display name",
                    value: I.value,
                    onChange: ee,
                    disabled: re,
                    loading: I.checking,
                    success: !I.checking && I.ok,
                    className: "tw-mb-1",
                    isError: I.error
                }), !I.error && i.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), I.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, I.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), i.createElement(w.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    disabled: re,
                    value: H.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (W(g(g({}, H), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                l = !1;
                            r.length < 8 ? l = "That password is too short \n ".concat(a) : (0, v.w)(r) && (l = "Please try a more secure password \n ".concat(a));
                            var n = !l;
                            W((function(e) {
                                return g(g({}, e), {}, {
                                    ok: n,
                                    error: l
                                })
                            }))
                        }
                    },
                    isError: H.error
                }), H.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, H.error), H.ok && i.createElement(w.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    disabled: re,
                    value: G.value,
                    onChange: function(e) {
                        Q(g(g({}, G), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return G.value !== H.value ? Q(g(g({}, G), {}, {
                            error: "Passwords do not match"
                        })) : Q(g(g({}, G), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: G.error
                }), H.ok && G.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, G.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, i.createElement(w.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "upgrade-form-submit",
                    name: "upgrade-form-submit",
                    loading: S,
                    disabled: re || !V
                }, "Upgrade Account"))))))
            }
        },
        82470: (e, t, r) => {
            r.d(t, {
                w: () => l
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                l = function(e) {
                    return a.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=a7ca97010dd348da3dfb22b6b1d2e6f41b9cf3ddc8c37588c513542b8029d58f.js.map