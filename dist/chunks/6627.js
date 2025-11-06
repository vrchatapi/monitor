"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6627], {
        66627: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => P
            });
            var a = r(4942),
                n = r(15861),
                l = r(54546),
                o = r(4965),
                s = r(64687),
                c = r.n(s),
                i = r(81848),
                u = r(15832),
                m = r(30381),
                d = r.n(m),
                w = r(67294),
                f = r(89250),
                p = r(79655),
                v = r(83868),
                h = r.n(v),
                b = r(20937),
                y = r.n(b),
                E = r(96985),
                g = r(17383),
                k = r(22202),
                x = r(17219),
                N = r(6281),
                j = r(69690),
                Z = r(82470),
                O = r(41400),
                C = r(13887);

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const P = function() {
                var e, t, r = (0, f.s0)(),
                    a = (0, f.TH)(),
                    o = (0, k.l4)(),
                    s = (0, l.Z)(o, 2),
                    m = s[0],
                    v = s[1],
                    b = v.isLoading,
                    S = v.isSuccess,
                    P = v.error,
                    I = (0, x.y)().data,
                    z = (void 0 === I ? {} : I).currentTOSVersion,
                    R = (0, g.sc)(),
                    D = R.nameTaken,
                    q = R.emailTaken,
                    _ = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    B = (0, l.Z)(_, 2),
                    F = B[0],
                    M = B[1],
                    V = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    X = (0, l.Z)(V, 2),
                    L = X[0],
                    J = X[1],
                    U = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    Y = (0, l.Z)(U, 2),
                    H = Y[0],
                    W = Y[1],
                    $ = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    G = (0, l.Z)($, 2),
                    K = G[0],
                    Q = G[1],
                    ee = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    te = (0, l.Z)(ee, 2),
                    re = te[0],
                    ae = te[1],
                    ne = w.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    le = (0, l.Z)(ne, 2),
                    oe = le[0],
                    se = le[1],
                    ce = w.useState(0),
                    ie = (0, l.Z)(ce, 2),
                    ue = ie[0],
                    me = ie[1],
                    de = w.useState(!1),
                    we = (0, l.Z)(de, 2),
                    fe = we[0],
                    pe = we[1],
                    ve = w.useState(!1),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    ye = he[1],
                    Ee = w.useState(""),
                    ge = (0, l.Z)(Ee, 2),
                    ke = ge[0],
                    xe = ge[1],
                    Ne = w.useState(!1),
                    je = (0, l.Z)(Ne, 2),
                    Ze = je[0],
                    Oe = je[1],
                    Ce = w.useRef(S),
                    Se = w.useRef(!1),
                    Te = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    Pe = (0, l.Z)(Te, 2),
                    Ae = Pe[0],
                    Ie = Pe[1],
                    ze = w.useRef(null);
                w.useEffect((function() {
                    Ae.value && "number" == typeof Ae.failedAt && d()().isAfter(d()(Ae.failedAt).add(1, "days")) && Ie({
                        value: !1,
                        failedAt: null
                    })
                }), []), w.useEffect((function() {
                    Oe(!0 === F.ok && !0 === L.ok && !0 === H.ok && !0 === K.ok && !0 === re.ok && !0 === oe.ok && ue === z && !0 === be)
                }), [F, L, H, K, re, oe, ue, be]), w.useEffect((function() {
                    (0, n.Z)(c().mark((function e() {
                        var t, n, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    S && !Ce.current && (l = null === (t = a.state) || void 0 === t ? void 0 : t.redirectTo, null !== (n = l) && void 0 !== n && n.includes("/home/register") && (l = "/home".concat(a.search)), l || (l = "/home/verify"), Se.current = !0, r(l)), Ce.current = S;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [S, a]), w.useEffect((function() {
                    var e;
                    P && (0, N.j)("Register_Error", {
                        error: null === (e = P.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [P]);
                var Re = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, M(T(T({}, F), {}, {
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
                                        if (M((function(e) {
                                                return T(T({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return M((function(e) {
                                            return T(T({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        return M((function(e) {
                                            return T(T({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 13, D(a);
                                    case 13:
                                        l = e.sent, M((function(e) {
                                            return T(T({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    De = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, J(T(T({}, L), {}, {
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
                                        J((function(e) {
                                            return T(T({}, e), {}, {
                                                taken: null
                                            })
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    qe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, h()(r) ? (0, j.T)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return J((function(e) {
                                            return T(T({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return J((function(e) {
                                            return T(T({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, q(r);
                                    case 9:
                                        n = e.sent, J((function(e) {
                                            return T(T({}, e), {}, {
                                                taken: n,
                                                ok: !e.error && !n,
                                                error: n ? "This email is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _e = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!y()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !y()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!y()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) se((function(e) {
                                return T(T({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            }));
                            else d()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? se((function(e) {
                                return T(T({}, e), {}, {
                                    ok: !0
                                })
                            })) : se((function(e) {
                                return T(T({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    Be = function() {
                        ye(!1), xe("")
                    },
                    Fe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, m({
                                            username: F.value,
                                            password: K.value,
                                            email: L.value,
                                            year: oe.year,
                                            month: oe.month,
                                            day: oe.day,
                                            captchaCode: ke,
                                            subscribe: fe,
                                            acceptedTOSVersion: ue
                                        }).unwrap();
                                    case 4:
                                        e.next = 12;
                                        break;
                                    case 6:
                                        if (e.prev = 6, e.t0 = e.catch(1), console.error(e.t0), !d()().subtract(13, "years").isBefore(d()({
                                                year: oe.year,
                                                month: oe.month - 1,
                                                day: oe.day
                                            }))) {
                                            e.next = 12;
                                            break
                                        }
                                        return Ie({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 12:
                                        Se.current || (Be(), null === (r = ze.current) || void 0 === r || r.resetCaptcha());
                                    case 13:
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
                    Me = null !== (e = null == P || null === (t = P.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Me && (Me.indexOf(":") > 0 ? (Me.substring(0, Me.indexOf(":")).trim(), Me = Me.substring(Me.indexOf(":") + 1).trim()) : 0 === Me.indexOf(":") && (Me = Me.substring(1).trim())), Ae.value ? w.createElement(C.Z, null, w.createElement(E.$4, null, "Create a New Account"), w.createElement(O.W2, null, w.createElement(O.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, w.createElement(O.X2, {
                    className: "justify-content-center"
                }, w.createElement(O.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), w.createElement(O.l0, null, w.createElement(O.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, w.createElement(O.h4, null, "Create a New Account"), w.createElement(p.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), w.createElement(E.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : w.createElement(C.Z, null, w.createElement(E.$4, null, "Create a New Account"), w.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, w.createElement("form", {
                    onSubmit: Fe
                }, w.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, w.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Create a New Account"), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "username",
                    className: "tw-mb-2"
                }, "Display Name"), w.createElement(E.II, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: F.value,
                    onChange: Re,
                    loading: F.checking,
                    success: !F.checking && F.ok,
                    className: "tw-mb-1",
                    isError: F.error
                }), !F.error && w.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), F.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, F.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), w.createElement(E.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    value: L.value,
                    onChange: De,
                    onBlur: qe,
                    loading: L.checking,
                    isError: L.error
                }), L.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, L.error), L.ok && w.createElement(E.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: H.value,
                    onChange: function(e) {
                        W(T(T({}, H), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return H.value !== L.value ? W(T(T({}, H), {}, {
                            error: "Emails do not match"
                        })) : W(T(T({}, H), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: H.error
                }), L.ok && H.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, H.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), w.createElement(E.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    value: K.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (Q(T(T({}, K), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, Z.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            Q((function(e) {
                                return T(T({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: K.error
                }), K.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, K.error), K.ok && w.createElement(E.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    value: re.value,
                    onChange: function(e) {
                        ae(T(T({}, re), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return re.value !== K.value ? ae(T(T({}, re), {}, {
                            error: "Passwords do not match"
                        })) : ae(T(T({}, re), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: re.error
                }), K.ok && re.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, re.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Date of Birth"), w.createElement("div", {
                    className: "tw-justify-between tw-align-middle tw-flex"
                }, w.createElement(A, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: oe.month,
                    name: "age_month",
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        se(T(T({}, oe), {}, {
                            month: r,
                            ok: null,
                            error: !1
                        })), _e(oe.day, r, oe.year)
                    },
                    isError: oe.error
                }, w.createElement("option", {
                    value: "1"
                }, "January"), w.createElement("option", {
                    value: "2"
                }, "February"), w.createElement("option", {
                    value: "3"
                }, "March"), w.createElement("option", {
                    value: "4"
                }, "April"), w.createElement("option", {
                    value: "5"
                }, "May"), w.createElement("option", {
                    value: "6"
                }, "June"), w.createElement("option", {
                    value: "7"
                }, "July"), w.createElement("option", {
                    value: "8"
                }, "August"), w.createElement("option", {
                    value: "9"
                }, "September"), w.createElement("option", {
                    value: "10"
                }, "October"), w.createElement("option", {
                    value: "11"
                }, "November"), w.createElement("option", {
                    value: "12"
                }, "December")), w.createElement(E.II, {
                    type: "text",
                    id: "day",
                    inputMode: "numeric",
                    name: "day",
                    className: "tw-w-[129px]",
                    placeholder: "Day",
                    "aria-label": "Birthday Day",
                    value: oe.day,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        se(T(T({}, oe), {}, {
                            day: r,
                            ok: null,
                            error: !1
                        })), _e(r, oe.month, oe.year)
                    },
                    isError: oe.error
                }), w.createElement(E.II, {
                    type: "text",
                    id: "year",
                    inputMode: "numeric",
                    name: "year",
                    placeholder: "Year",
                    className: "tw-w-[129px]",
                    "aria-label": "Birthday Year",
                    value: oe.year,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        se(T(T({}, oe), {}, {
                            year: r,
                            ok: null,
                            error: !1
                        })), _e(oe.day, oe.month, r)
                    },
                    isError: oe.error
                })), oe.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, oe.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement(E.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        me(t ? z : 0)
                    },
                    htmlFor: "tos",
                    className: "tw-mb-0",
                    label: w.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1 tw-mb-0"
                    }, "I have read and agree to the ", w.createElement("a", {
                        href: "/privacy/",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Privacy Policy"), ",", w.createElement("br", null), w.createElement("a", {
                        href: "/community-guidelines",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Community Guidelines"), " and ", w.createElement("a", {
                        href: "/legal/",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Terms of Service"), ".")
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-5"
                }, w.createElement(E.XZ, {
                    id: "subscribe",
                    onChange: function(e) {
                        var t = e.target.checked;
                        pe(t)
                    },
                    htmlFor: "subscribe",
                    className: "",
                    checked: fe,
                    label: w.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1"
                    }, "I agree to receive updates from VRChat about its products, services and promotions.")
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(i.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        ye(!0), xe(e)
                    },
                    onExpire: Be,
                    ref: ze
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(E.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "registration-form-submit",
                    name: "registration-form-submit",
                    loading: b,
                    disabled: !Ze
                }, "Create Account")), Me && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Account creation error",
                    className: "tw-text-error-message-red tw-text-xs tw-my-1"
                }, Me), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement("p", {
                    className: "tw-text-base tw-ml-1"
                }, "Have an account? ", w.createElement("a", {
                    href: "/home/login"
                }, "Log in")))))))
            };
            var A = (0, o.Z)("select", {
                target: "emwozn20"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}")
        },
        82470: (e, t, r) => {
            r.d(t, {
                w: () => n
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return a.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=6685ae8c062c6b59ae1344b24fec05d046e12ed474d616247673385fc708712a.js.map