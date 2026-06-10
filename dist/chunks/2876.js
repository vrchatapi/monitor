"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2876], {
        22876(e, t, r) {
            r.r(t), r.d(t, {
                default: () => R
            });
            var a = r(64467),
                n = r(10467),
                l = r(15902),
                o = r(70129),
                s = r(54756),
                c = r.n(s),
                i = r(4015),
                u = r(32662),
                m = r(95093),
                d = r.n(m),
                w = r(96540),
                f = r(84976),
                p = r(47767),
                v = r(69517),
                h = r.n(v),
                b = r(76084),
                g = r.n(b),
                y = r(15033),
                E = r(97071),
                k = r(194),
                x = r(13951),
                N = r(50779),
                A = r(53818),
                j = r(79772),
                S = r(28337),
                C = r(82030),
                O = r(84212);

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach(function(t) {
                        (0, a.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const R = function() {
                var e, t, r = (0, p.Zp)(),
                    a = (0, p.zy)(),
                    o = (0, k.uh)("web-test-not-logged-in", {
                        value: "control"
                    }),
                    s = "treatment" === (null == o ? void 0 : o.value),
                    m = (0, x.ge)(),
                    v = (0, l.A)(m, 2),
                    b = v[0],
                    T = v[1],
                    R = T.isLoading,
                    D = T.isSuccess,
                    _ = T.error,
                    q = (0, E.DF)(),
                    F = (0, N.G)().data,
                    V = (void 0 === F ? {} : F).currentTOSVersion,
                    B = (0, k.cz)(),
                    M = B.nameTaken,
                    L = B.emailTaken,
                    I = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    Y = (0, l.A)(I, 2),
                    J = Y[0],
                    Q = Y[1],
                    G = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    U = (0, l.A)(G, 2),
                    W = U[0],
                    $ = U[1],
                    H = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    X = (0, l.A)(H, 2),
                    Z = X[0],
                    K = X[1],
                    ee = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    te = (0, l.A)(ee, 2),
                    re = te[0],
                    ae = te[1],
                    ne = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    le = (0, l.A)(ne, 2),
                    oe = le[0],
                    se = le[1],
                    ce = w.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    ie = (0, l.A)(ce, 2),
                    ue = ie[0],
                    me = ie[1],
                    de = w.useState(0),
                    we = (0, l.A)(de, 2),
                    fe = we[0],
                    pe = we[1],
                    ve = w.useState(!1),
                    he = (0, l.A)(ve, 2),
                    be = he[0],
                    ge = he[1],
                    ye = w.useState(!1),
                    Ee = (0, l.A)(ye, 2),
                    ke = Ee[0],
                    xe = Ee[1],
                    Ne = w.useState(""),
                    Ae = (0, l.A)(Ne, 2),
                    je = Ae[0],
                    Se = Ae[1],
                    Ce = w.useState(!1),
                    Oe = (0, l.A)(Ce, 2),
                    Te = Oe[0],
                    Pe = Oe[1],
                    Re = w.useRef(D),
                    ze = w.useRef(!1),
                    De = (0, u.Mj)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    _e = (0, l.A)(De, 2),
                    qe = _e[0],
                    Fe = _e[1],
                    Ve = w.useRef(null);
                w.useEffect(function() {
                    qe.value && "number" == typeof qe.failedAt && d()().isAfter(d()(qe.failedAt).add(1, "days")) && Fe({
                        value: !1,
                        failedAt: null
                    })
                }, []), w.useEffect(function() {
                    Pe(!0 === J.ok && !0 === W.ok && (!0 === Z.ok || s) && !0 === re.ok && !0 === oe.ok && !0 === ue.ok && fe === V && !0 === ke)
                }, [J, W, Z, re, oe, ue, fe, ke]), w.useEffect(function() {
                    (0, n.A)(c().mark(function e() {
                        var t, n, l;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    D && !Re.current && (l = null === (t = a.state) || void 0 === t ? void 0 : t.redirectTo, null !== (n = l) && void 0 !== n && n.includes("/home/register") && (l = "/home".concat(a.search)), l || (l = "/home/verify"), ze.current = !0, r(l)), Re.current = D;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, [D, a]), w.useEffect(function() {
                    var e;
                    _ && (0, A.u4)("Register_Error", {
                        error: null === (e = _.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }, [_]), w.useEffect(function() {
                    (0, A.u4)("Signup_RegistrationStart", {
                        accountType: "vrchat"
                    })
                }, []);
                var Be = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var r, a, n, l;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, Q(P(P({}, J), {}, {
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
                                        if (Q(function(e) {
                                                return P(P({}, e), {}, {
                                                    taken: null
                                                })
                                            }), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return Q(function(e) {
                                            return P(P({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        }), e.abrupt("return");
                                    case 10:
                                        return Q(function(e) {
                                            return P(P({}, e), {}, {
                                                checking: !0
                                            })
                                        }), e.next = 13, M(a);
                                    case 13:
                                        l = e.sent, Q(function(e) {
                                            return P(P({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Me = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var r, a;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, $(P(P({}, W), {}, {
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
                                        $(function(e) {
                                            return P(P({}, e), {}, {
                                                taken: null
                                            })
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Le = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var r, a, n;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, h()(r) ? (0, j.X)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return $(function(e) {
                                            return P(P({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        }), e.abrupt("return");
                                    case 6:
                                        return $(function(e) {
                                            return P(P({}, e), {}, {
                                                checking: !0
                                            })
                                        }), e.next = 9, L(r);
                                    case 9:
                                        n = e.sent, $(function(e) {
                                            return P(P({}, e), {}, {
                                                taken: n,
                                                ok: !e.error && !n,
                                                error: n ? "This email is already taken." : e.error,
                                                checking: !1
                                            })
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ie = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!g()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !g()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!g()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) me(function(e) {
                                return P(P({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            });
                            else d()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? me(function(e) {
                                return P(P({}, e), {}, {
                                    ok: !0
                                })
                            }) : me(function(e) {
                                return P(P({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            })
                        }
                    },
                    Ye = function() {
                        xe(!1), Se("")
                    },
                    Je = function() {
                        var e = (0, n.A)(c().mark(function e(t) {
                            var r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, b({
                                            username: J.value,
                                            password: re.value,
                                            email: W.value,
                                            year: ue.year,
                                            month: ue.month,
                                            day: ue.day,
                                            captchaCode: je,
                                            subscribe: be,
                                            acceptedTOSVersion: fe
                                        }).unwrap();
                                    case 4:
                                        (0, A.u4)("Signup_AccountCreated_Web"), e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(1), console.error(e.t0), !q({
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
                                        return Fe({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 15:
                                        ze.current || (Ye(), null === (r = Ve.current) || void 0 === r || r.resetCaptcha());
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 7]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Qe = null !== (e = null == _ || null === (t = _.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Qe && (Qe.indexOf(":") > 0 ? (Qe.substring(0, Qe.indexOf(":")).trim(), Qe = Qe.substring(Qe.indexOf(":") + 1).trim()) : 0 === Qe.indexOf(":") && (Qe = Qe.substring(1).trim())), qe.value ? w.createElement(O.A, {
                    showVRCLogo: !s
                }, w.createElement(y.Qc, null, "Create a New Account"), w.createElement(C.mc, null, w.createElement(C.VP, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, w.createElement(C.fI, {
                    className: "justify-content-center"
                }, w.createElement(C.gu, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), w.createElement(C.lV, null, w.createElement(C.fI, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, w.createElement(C.Y9, null, "Create a New Account"), w.createElement(f.N_, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), w.createElement(y.$T, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : w.createElement(O.A, {
                    showVRCLogo: !s
                }, w.createElement(y.Qc, null, "Create a New Account"), w.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit ".concat(s ? "xl:tw-mt-5" : "xl:tw-mt-[200px]")
                }, w.createElement("form", {
                    onSubmit: Je
                }, w.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, w.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Create a New Account"), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "username",
                    className: "tw-mb-2"
                }, "Display Name"), w.createElement(y.pd, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: J.value,
                    onChange: Be,
                    loading: J.checking,
                    success: !J.checking && J.ok,
                    className: "tw-mb-1",
                    isError: J.error
                }), !J.error && w.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, s ? "This is visible to others and can be edited later." : "This is the name shown to other users in-app, you may only change your display name once per 90 days."), J.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, J.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), w.createElement(y.pd, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    value: W.value,
                    onChange: Me,
                    onBlur: Le,
                    loading: W.checking,
                    isError: W.error
                }), W.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, W.error), W.ok && !s && w.createElement(y.pd, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: Z.value,
                    onChange: function(e) {
                        K(P(P({}, Z), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return Z.value !== W.value ? K(P(P({}, Z), {}, {
                            error: "Emails do not match"
                        })) : K(P(P({}, Z), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: Z.error
                }), W.ok && Z.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, Z.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), w.createElement(y.pd, {
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
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, S.v)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            ae(function(e) {
                                return P(P({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            })
                        }
                    },
                    isError: re.error
                }), re.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, re.error), re.ok && w.createElement(y.pd, {
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
                }, w.createElement(z, {
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
                        })), Ie(ue.day, r, ue.year)
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
                }, "December")), w.createElement(y.pd, {
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
                        })), Ie(r, ue.month, ue.year)
                    },
                    isError: ue.error
                }), w.createElement(y.pd, {
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
                        })), Ie(ue.day, ue.month, r)
                    },
                    isError: ue.error
                })), ue.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, ue.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement(y.Sc, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        pe(t ? V : 0)
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
                }, w.createElement(y.Sc, {
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
                }, w.createElement(i.A, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        xe(!0), Se(e)
                    },
                    onExpire: Ye,
                    ref: Ve
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(y.$n, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "registration-form-submit",
                    name: "registration-form-submit",
                    loading: R,
                    disabled: !Te
                }, "Create Account")), Qe && !(0, E.hQ)(_) && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Account creation error",
                    className: "tw-text-error-message-red tw-text-xs tw-my-1"
                }, Qe), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement("p", {
                    className: "tw-text-base tw-ml-1"
                }, "Have an account? ", w.createElement("a", {
                    href: "/home/login"
                }, "Log in")))))))
            };
            var z = (0, o.A)("select", {
                target: "emwozn20"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }, ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }, ";}")
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
//# sourceMappingURL=e9afbae81801374a0d76efa27847902ecbaad51baea599eb6cc4f44fd9f943fd.js.map