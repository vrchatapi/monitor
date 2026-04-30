"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6627], {
        66627: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => A
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
                g = r.n(b),
                y = r(80988),
                E = r(90068),
                k = r(69116),
                x = r(22202),
                N = r(17219),
                j = r(6281),
                C = r(69690),
                S = r(82470),
                Z = r(41400),
                O = r(13887);

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const A = function() {
                var e, t, r = (0, f.s0)(),
                    a = (0, f.TH)(),
                    o = (0, k.ve)("web-test-not-logged-in", {
                        value: "control"
                    }),
                    s = "treatment" === (null == o ? void 0 : o.value),
                    m = (0, x.l4)(),
                    v = (0, l.Z)(m, 2),
                    b = v[0],
                    T = v[1],
                    A = T.isLoading,
                    I = T.isSuccess,
                    z = T.error,
                    D = (0, E.P2)(),
                    _ = (0, N.y)().data,
                    q = (void 0 === _ ? {} : _).currentTOSVersion,
                    B = (0, k.sc)(),
                    F = B.nameTaken,
                    V = B.emailTaken,
                    L = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    M = (0, l.Z)(L, 2),
                    X = M[0],
                    J = M[1],
                    U = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    W = (0, l.Z)(U, 2),
                    Y = W[0],
                    H = W[1],
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
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    le = (0, l.Z)(ne, 2),
                    oe = le[0],
                    se = le[1],
                    ce = w.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    ie = (0, l.Z)(ce, 2),
                    ue = ie[0],
                    me = ie[1],
                    de = w.useState(0),
                    we = (0, l.Z)(de, 2),
                    fe = we[0],
                    pe = we[1],
                    ve = w.useState(!1),
                    he = (0, l.Z)(ve, 2),
                    be = he[0],
                    ge = he[1],
                    ye = w.useState(!1),
                    Ee = (0, l.Z)(ye, 2),
                    ke = Ee[0],
                    xe = Ee[1],
                    Ne = w.useState(""),
                    je = (0, l.Z)(Ne, 2),
                    Ce = je[0],
                    Se = je[1],
                    Ze = w.useState(!1),
                    Oe = (0, l.Z)(Ze, 2),
                    Te = Oe[0],
                    Pe = Oe[1],
                    Ae = w.useRef(I),
                    Re = w.useRef(!1),
                    Ie = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    ze = (0, l.Z)(Ie, 2),
                    De = ze[0],
                    _e = ze[1],
                    qe = w.useRef(null);
                w.useEffect((function() {
                    De.value && "number" == typeof De.failedAt && d()().isAfter(d()(De.failedAt).add(1, "days")) && _e({
                        value: !1,
                        failedAt: null
                    })
                }), []), w.useEffect((function() {
                    Pe(!0 === X.ok && !0 === Y.ok && (!0 === K.ok || s) && !0 === re.ok && !0 === oe.ok && !0 === ue.ok && fe === q && !0 === ke)
                }), [X, Y, K, re, oe, ue, fe, ke]), w.useEffect((function() {
                    (0, n.Z)(c().mark((function e() {
                        var t, n, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    I && !Ae.current && (l = null === (t = a.state) || void 0 === t ? void 0 : t.redirectTo, null !== (n = l) && void 0 !== n && n.includes("/home/register") && (l = "/home".concat(a.search)), l || (l = "/home/verify"), Re.current = !0, r(l)), Ae.current = I;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [I, a]), w.useEffect((function() {
                    var e;
                    z && (0, j.j)("Register_Error", {
                        error: null === (e = z.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [z]), w.useEffect((function() {
                    (0, j.j)("Signup_RegistrationStart")
                }), []);
                var Be = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, J(P(P({}, X), {}, {
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
                                        if (J((function(e) {
                                                return P(P({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return J((function(e) {
                                            return P(P({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        return J((function(e) {
                                            return P(P({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 13, F(a);
                                    case 13:
                                        l = e.sent, J((function(e) {
                                            return P(P({}, e), {}, {
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
                    Fe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, H(P(P({}, Y), {}, {
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
                                        H((function(e) {
                                            return P(P({}, e), {}, {
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
                    Ve = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, h()(r) ? (0, C.T)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return H((function(e) {
                                            return P(P({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return H((function(e) {
                                            return P(P({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, V(r);
                                    case 9:
                                        n = e.sent, H((function(e) {
                                            return P(P({}, e), {}, {
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
                    Le = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!g()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !g()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!g()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) me((function(e) {
                                return P(P({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            }));
                            else d()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? me((function(e) {
                                return P(P({}, e), {}, {
                                    ok: !0
                                })
                            })) : me((function(e) {
                                return P(P({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    Me = function() {
                        xe(!1), Se("")
                    },
                    Xe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, b({
                                            username: X.value,
                                            password: re.value,
                                            email: Y.value,
                                            year: ue.year,
                                            month: ue.month,
                                            day: ue.day,
                                            captchaCode: Ce,
                                            subscribe: be,
                                            acceptedTOSVersion: fe
                                        }).unwrap();
                                    case 4:
                                        (0, j.j)("Signup_AccountCreated_Web"), e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(1), console.error(e.t0), !D({
                                                error: e.t0,
                                                canDisagree: !1
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        if (!d()().subtract(13, "years").isBefore(d()({
                                                year: ue.year,
                                                month: ue.month - 1,
                                                day: ue.day
                                            }))) {
                                            e.next = 15;
                                            break
                                        }
                                        return _e({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 15:
                                        Re.current || (Me(), null === (r = qe.current) || void 0 === r || r.resetCaptcha());
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Je = null !== (e = null == z || null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Je && (Je.indexOf(":") > 0 ? (Je.substring(0, Je.indexOf(":")).trim(), Je = Je.substring(Je.indexOf(":") + 1).trim()) : 0 === Je.indexOf(":") && (Je = Je.substring(1).trim())), De.value ? w.createElement(O.Z, {
                    showVRCLogo: !s
                }, w.createElement(y.$4, null, "Create a New Account"), w.createElement(Z.W2, null, w.createElement(Z.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, w.createElement(Z.X2, {
                    className: "justify-content-center"
                }, w.createElement(Z.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), w.createElement(Z.l0, null, w.createElement(Z.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, w.createElement(Z.h4, null, "Create a New Account"), w.createElement(p.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), w.createElement(y.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : w.createElement(O.Z, {
                    showVRCLogo: !s
                }, w.createElement(y.$4, null, "Create a New Account"), w.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit ".concat(s ? "xl:tw-mt-5" : "xl:tw-mt-[200px]")
                }, w.createElement("form", {
                    onSubmit: Xe
                }, w.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, w.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Create a New Account"), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "username",
                    className: "tw-mb-2"
                }, "Display Name"), w.createElement(y.II, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: X.value,
                    onChange: Be,
                    loading: X.checking,
                    success: !X.checking && X.ok,
                    className: "tw-mb-1",
                    isError: X.error
                }), !X.error && w.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, s ? "This is visible to others and can be edited later." : "This is the name shown to other users in-app, you may only change your display name once per 90 days."), X.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, X.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), w.createElement(y.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    value: Y.value,
                    onChange: Fe,
                    onBlur: Ve,
                    loading: Y.checking,
                    isError: Y.error
                }), Y.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, Y.error), Y.ok && !s && w.createElement(y.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: K.value,
                    onChange: function(e) {
                        Q(P(P({}, K), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return K.value !== Y.value ? Q(P(P({}, K), {}, {
                            error: "Emails do not match"
                        })) : Q(P(P({}, K), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: K.error
                }), Y.ok && K.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, K.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), w.createElement(y.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    value: re.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (ae(P(P({}, re), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, S.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            ae((function(e) {
                                return P(P({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: re.error
                }), re.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, re.error), re.ok && w.createElement(y.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    value: oe.value,
                    onChange: function(e) {
                        se(P(P({}, oe), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return oe.value !== re.value ? se(P(P({}, oe), {}, {
                            error: "Passwords do not match"
                        })) : se(P(P({}, oe), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: oe.error
                }), re.ok && oe.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, oe.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Date of Birth"), w.createElement("div", {
                    className: "tw-justify-between tw-align-middle tw-flex"
                }, w.createElement(R, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: ue.month,
                    name: "age_month",
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        me(P(P({}, ue), {}, {
                            month: r,
                            ok: null,
                            error: !1
                        })), Le(ue.day, r, ue.year)
                    },
                    isError: ue.error
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
                }, "December")), w.createElement(y.II, {
                    type: "text",
                    id: "day",
                    inputMode: "numeric",
                    name: "day",
                    className: "tw-w-[129px]",
                    placeholder: "Day",
                    "aria-label": "Birthday Day",
                    value: ue.day,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        me(P(P({}, ue), {}, {
                            day: r,
                            ok: null,
                            error: !1
                        })), Le(r, ue.month, ue.year)
                    },
                    isError: ue.error
                }), w.createElement(y.II, {
                    type: "text",
                    id: "year",
                    inputMode: "numeric",
                    name: "year",
                    placeholder: "Year",
                    className: "tw-w-[129px]",
                    "aria-label": "Birthday Year",
                    value: ue.year,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        me(P(P({}, ue), {}, {
                            year: r,
                            ok: null,
                            error: !1
                        })), Le(ue.day, ue.month, r)
                    },
                    isError: ue.error
                })), ue.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, ue.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement(y.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        pe(t ? q : 0)
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
                    className: "tw-w-full ".concat(s ? "tw-mb-2" : "tw-mb-5")
                }, w.createElement(y.XZ, {
                    id: "subscribe",
                    onChange: function(e) {
                        var t = e.target.checked;
                        ge(t)
                    },
                    htmlFor: "subscribe",
                    className: "",
                    checked: be,
                    label: w.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1"
                    }, "I agree to receive updates from VRChat about its products, services and promotions.")
                })), w.createElement("div", {
                    className: "tw-w-full ".concat(s ? "tw-mb-3" : "tw-mb-6", " tw-justify-center tw-flex")
                }, w.createElement(i.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        xe(!0), Se(e)
                    },
                    onExpire: Me,
                    ref: qe
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(y.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "registration-form-submit",
                    name: "registration-form-submit",
                    loading: A,
                    disabled: !Te
                }, "Create Account")), Je && !(0, E._E)(z) && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Account creation error",
                    className: "tw-text-error-message-red tw-text-xs tw-my-1"
                }, Je), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement("p", {
                    className: "tw-text-base tw-ml-1"
                }, "Have an account? ", w.createElement("a", {
                    href: "/home/login"
                }, "Log in")))))))
            };
            var R = (0, o.Z)("select", {
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
//# sourceMappingURL=da0d5d488a999e8587920ffe3e350e27ee69b37481416cc99f29292cc22c2844.js.map