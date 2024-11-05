"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6627], {
        36678: (e, a, t) => {
            t.d(a, {
                Z: () => o
            });
            var r = t(54546),
                n = t(67294),
                l = [{
                    worldName: "Horse Mountain",
                    authorName: "nprowler",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_1.png"
                }, {
                    worldName: "Instagib Tournament",
                    authorName: "ville672",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_2.png"
                }, {
                    worldName: "Gumball Lounge",
                    authorName: "screamingcolor",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_3.png"
                }, {
                    worldName: "Exoplanet Journey",
                    authorName: "Niko*",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_4.png"
                }, {
                    worldName: "Dusk",
                    authorName: "Lucifer MStar",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_5.png"
                }, {
                    worldName: "Amber Glade - Winter",
                    authorName: "Mankey",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_6.png"
                }].sort((function() {
                    return Math.random() - .5
                }));
            const o = function(e) {
                var a = e.children,
                    t = e.showCredits,
                    o = (0, n.useState)(null),
                    s = (0, r.Z)(o, 2),
                    c = s[0],
                    i = s[1],
                    u = (0, n.useState)(null),
                    m = (0, r.Z)(u, 2),
                    d = m[0],
                    w = m[1];
                (0, n.useEffect)((function() {
                    if (null === c) i(l[0]);
                    else {
                        var e = p(c);
                        setTimeout((function() {
                            return i(e)
                        }), 1e4), w(e)
                    }
                }), [c]);
                var p = function(e) {
                    var a = l.findIndex((function(a) {
                        return a.imagePath === e.imagePath
                    }));
                    return a === l.length - 1 ? l[0] : l[a + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === c ? "none" : "url(".concat(c.imagePath, ")")
                    }
                }, n.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, n.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, n.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), n.createElement("img", {
                    className: "tw-hidden",
                    src: null == d ? void 0 : d.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, a), (null == c ? void 0 : c.worldName) && t && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", c.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        66627: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => j
            });
            var r = t(4942),
                n = t(15861),
                l = t(54546),
                o = t(4965),
                s = t(64687),
                c = t.n(s),
                i = t(81848),
                u = t(15832),
                m = t(30381),
                d = t.n(m),
                w = t(67294),
                p = t(89250),
                g = t(79655),
                f = t(83868),
                h = t.n(f),
                E = t(20937),
                F = t.n(E),
                v = t(34226),
                b = t(80873),
                C = t(22202),
                A = t(17219),
                B = t(72562),
                D = t(69690),
                y = t(65847),
                x = t(82470),
                k = t(41400),
                N = t(36678);

            function P(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    a && (r = r.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function S(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? P(Object(t), !0).forEach((function(a) {
                        (0, r.Z)(e, a, t[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    }))
                }
                return e
            }
            const j = function() {
                var e, a, t = (0, p.s0)(),
                    r = (0, p.TH)(),
                    o = (0, C.l4)(),
                    s = (0, l.Z)(o, 2),
                    m = s[0],
                    f = s[1],
                    E = f.isLoading,
                    P = f.isSuccess,
                    j = f.error,
                    Z = (0, A.y)().data,
                    T = (void 0 === Z ? {} : Z).currentTOSVersion,
                    I = (0, b.sc)(),
                    R = I.nameTaken,
                    _ = I.emailTaken,
                    z = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    J = (0, l.Z)(z, 2),
                    L = J[0],
                    M = J[1],
                    K = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    q = (0, l.Z)(K, 2),
                    H = q[0],
                    G = q[1],
                    V = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    U = (0, l.Z)(V, 2),
                    W = U[0],
                    X = U[1],
                    $ = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    Y = (0, l.Z)($, 2),
                    Q = Y[0],
                    ee = Y[1],
                    ae = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    te = (0, l.Z)(ae, 2),
                    re = te[0],
                    ne = te[1],
                    le = w.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    oe = (0, l.Z)(le, 2),
                    se = oe[0],
                    ce = oe[1],
                    ie = w.useState(0),
                    ue = (0, l.Z)(ie, 2),
                    me = ue[0],
                    de = ue[1],
                    we = w.useState(!1),
                    pe = (0, l.Z)(we, 2),
                    ge = pe[0],
                    fe = pe[1],
                    he = w.useState(!1),
                    Ee = (0, l.Z)(he, 2),
                    Fe = Ee[0],
                    ve = Ee[1],
                    be = w.useState(""),
                    Ce = (0, l.Z)(be, 2),
                    Ae = Ce[0],
                    Be = Ce[1],
                    De = w.useState(!1),
                    ye = (0, l.Z)(De, 2),
                    xe = ye[0],
                    ke = ye[1],
                    Ne = w.useRef(P),
                    Pe = w.useRef(!1),
                    Se = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    je = (0, l.Z)(Se, 2),
                    Oe = je[0],
                    Ze = je[1],
                    Te = w.useRef(null);
                w.useEffect((function() {
                    Oe.value && "number" == typeof Oe.failedAt && d()().isAfter(d()(Oe.failedAt).add(1, "days")) && Ze({
                        value: !1,
                        failedAt: null
                    })
                }), []), w.useEffect((function() {
                    ke(!0 === L.ok && !0 === H.ok && !0 === W.ok && !0 === Q.ok && !0 === re.ok && !0 === se.ok && me === T && !0 === Fe)
                }), [L, H, Q, se, me, Fe]), w.useEffect((function() {
                    (0, n.Z)(c().mark((function e() {
                        var a, n, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    P && !Ne.current && (l = null === (a = r.state) || void 0 === a ? void 0 : a.redirectTo, null !== (n = l) && void 0 !== n && n.includes("/home/register") && (l = "/home".concat(r.search)), l || (l = "/home/verify"), Pe.current = !0, t(l)), Ne.current = P;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [P, r]), w.useEffect((function() {
                    var e;
                    j && (0, B.Kz)("Register_Error", {
                        error: null === (e = j.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [j]);
                var Ie = function() {
                        var e = (0, n.Z)(c().mark((function e(a) {
                            var t, r, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = a.target.value, r = void 0 === t ? "" : t, M(S(S({}, L), {}, {
                                                value: r,
                                                ok: null,
                                                taken: !1,
                                                error: !1
                                            })), "" !== r) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (r = (0, y.Nw)(r), M((function(e) {
                                                return S(S({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== r && r.length < 4 ? n = "That display name is too short" : r.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 11;
                                            break
                                        }
                                        return M((function(e) {
                                            return S(S({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 11:
                                        return M((function(e) {
                                            return S(S({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 14, R(r);
                                    case 14:
                                        l = e.sent, M((function(e) {
                                            return S(S({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
                                                checking: !1
                                            })
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Re = function() {
                        var e = (0, n.Z)(c().mark((function e(a) {
                            var t, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = a.target.value, r = void 0 === t ? "" : t, G(S(S({}, H), {}, {
                                                value: r,
                                                ok: null,
                                                taken: !1,
                                                error: !1
                                            })), "" !== r) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        G((function(e) {
                                            return S(S({}, e), {}, {
                                                taken: null
                                            })
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _e = function() {
                        var e = (0, n.Z)(c().mark((function e(a) {
                            var t, r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = a.target.value, r = !1, h()(t) ? (0, D.T)(t) && (r = "This email domain cannot be used at this time due to abuse, please try using a different one") : r = "That's an invalid email", !r) {
                                            e.next = 6;
                                            break
                                        }
                                        return G((function(e) {
                                            return S(S({}, e), {}, {
                                                error: r,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return G((function(e) {
                                            return S(S({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, _(t);
                                    case 9:
                                        n = e.sent, G((function(e) {
                                            return S(S({}, e), {}, {
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
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ze = function(e, a, t) {
                        if ("" !== t && "" !== a && "" !== e) {
                            var r = null;
                            if (!F()(t) || t < 1900 || t > 2017 ? r = "That's not a valid year" : !F()(a) || a < 0 || a > 12 ? r = "That's not a valid month" : (!F()(e) || e < 0 || e > 31) && (r = "That's not a valid day"), r) ce((function(e) {
                                return S(S({}, e), {}, {
                                    error: r,
                                    ok: !1
                                })
                            }));
                            else d()({
                                year: t,
                                month: a - 1,
                                day: e
                            }).isValid() ? ce((function(e) {
                                return S(S({}, e), {}, {
                                    ok: !0
                                })
                            })) : ce((function(e) {
                                return S(S({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    Je = function() {
                        ve(!1), Be("")
                    },
                    Le = function() {
                        var e = (0, n.Z)(c().mark((function e(a) {
                            var t;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), e.prev = 1, e.next = 4, m({
                                            username: L.value,
                                            password: Q.value,
                                            email: H.value,
                                            year: se.year,
                                            month: se.month,
                                            day: se.day,
                                            captchaCode: Ae,
                                            subscribe: ge,
                                            acceptedTOSVersion: me
                                        }).unwrap();
                                    case 4:
                                        e.next = 12;
                                        break;
                                    case 6:
                                        if (e.prev = 6, e.t0 = e.catch(1), console.error(e.t0), !d()().subtract(13, "years").isBefore(d()({
                                                year: se.year,
                                                month: se.month - 1,
                                                day: se.day
                                            }))) {
                                            e.next = 12;
                                            break
                                        }
                                        return Ze({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 12:
                                        Pe.current || (Je(), null === (t = Te.current) || void 0 === t || t.resetCaptcha());
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Me = null !== (e = null == j || null === (a = j.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== e ? e : "";
                return Me && (Me.indexOf(":") > 0 ? (Me.substring(0, Me.indexOf(":")).trim(), Me = Me.substring(Me.indexOf(":") + 1).trim()) : 0 === Me.indexOf(":") && (Me = Me.substring(1).trim())), Oe.value ? w.createElement(N.Z, null, w.createElement(v.$4, null, "Create a New Account"), w.createElement(k.W2, null, w.createElement(k.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, w.createElement(k.X2, {
                    className: "justify-content-center"
                }, w.createElement(k.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), w.createElement(k.l0, null, w.createElement(k.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, w.createElement(k.h4, null, "Create a New Account"), w.createElement(g.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), w.createElement(v.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : w.createElement(N.Z, null, w.createElement(v.$4, null, "Create a New Account"), w.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, w.createElement("form", {
                    onSubmit: Le
                }, w.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, w.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Create a New Account"), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "username",
                    className: "tw-mb-2"
                }, "Display Name"), w.createElement(v.II, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: L.value,
                    onChange: Ie,
                    loading: L.checking,
                    success: !L.checking && L.ok,
                    className: "tw-mb-1",
                    isError: L.error
                }), !L.error && w.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), L.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, L.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), w.createElement(v.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    value: H.value,
                    onChange: Re,
                    onBlur: _e,
                    loading: H.checking,
                    isError: H.error
                }), H.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, H.error), H.ok && w.createElement(v.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: W.value,
                    onChange: function(e) {
                        X(S(S({}, W), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return W.value !== H.value ? X(S(S({}, W), {}, {
                            error: "Emails do not match"
                        })) : X(S(S({}, W), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: W.error
                }), H.ok && W.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, W.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), w.createElement(v.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    value: Q.value,
                    onChange: function(e) {
                        var a = e.target.value,
                            t = void 0 === a ? "" : a;
                        if (ee(S(S({}, Q), {}, {
                                value: t,
                                ok: null,
                                error: !1
                            })), "" !== t) {
                            var r = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            t.length < 8 ? n = "That password is too short \n ".concat(r) : (0, x.w)(t) && (n = "Please try a more secure password \n ".concat(r));
                            var l = !n;
                            ee((function(e) {
                                return S(S({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: Q.error
                }), Q.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, Q.error), Q.ok && w.createElement(v.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    value: re.value,
                    onChange: function(e) {
                        ne(S(S({}, re), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return re.value !== Q.value ? ne(S(S({}, re), {}, {
                            error: "Passwords do not match"
                        })) : ne(S(S({}, re), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: re.error
                }), Q.ok && re.error && w.createElement("p", {
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
                }, w.createElement(O, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: se.month,
                    name: "age_month",
                    onChange: function(e) {
                        var a = e.target.value,
                            t = void 0 === a ? "" : a;
                        ce(S(S({}, se), {}, {
                            month: t,
                            ok: null,
                            error: !1
                        })), ze(se.day, t, se.year)
                    },
                    isError: se.error
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
                }, "December")), w.createElement(v.II, {
                    type: "text",
                    id: "day",
                    inputMode: "numeric",
                    name: "day",
                    className: "tw-w-[129px]",
                    placeholder: "Day",
                    "aria-label": "Birthday Day",
                    value: se.day,
                    onChange: function(e) {
                        var a = e.target.value,
                            t = void 0 === a ? "" : a;
                        ce(S(S({}, se), {}, {
                            day: t,
                            ok: null,
                            error: !1
                        })), ze(t, se.month, se.year)
                    },
                    isError: se.error
                }), w.createElement(v.II, {
                    type: "text",
                    id: "year",
                    inputMode: "numeric",
                    name: "year",
                    placeholder: "Year",
                    className: "tw-w-[129px]",
                    "aria-label": "Birthday Year",
                    value: se.year,
                    onChange: function(e) {
                        var a = e.target.value,
                            t = void 0 === a ? "" : a;
                        ce(S(S({}, se), {}, {
                            year: t,
                            ok: null,
                            error: !1
                        })), ze(se.day, se.month, t)
                    },
                    isError: se.error
                })), se.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, se.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement(v.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var a = e.target.checked;
                        de(a ? T : 0)
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
                }, w.createElement(v.XZ, {
                    id: "subscribe",
                    onChange: function(e) {
                        var a = e.target.checked;
                        fe(a)
                    },
                    htmlFor: "subscribe",
                    className: "",
                    checked: ge,
                    label: w.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1"
                    }, "I agree to receive updates from VRChat about its products, services and promotions.")
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(i.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        ve(!0), Be(e)
                    },
                    onExpire: Je,
                    ref: Te
                })), w.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, w.createElement(v.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "registration-form-submit",
                    name: "registration-form-submit",
                    loading: E,
                    disabled: !xe
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
            var O = (0, o.Z)("select", {
                target: "emwozn20"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}")
        },
        65847: (e, a, t) => {
            t.d(a, {
                Nw: () => h
            });
            var r = t(85564),
                n = t.n(r),
                l = (t(85067), t(58814), t(56125), t(32299));
            const o = JSON.parse('{"characterAllowList":[{"name":"Basic Latin","ranges":["000A","000D","0020-007E"]},{"name":"Latin-1 Supplement","ranges":["00A1-00FF"]},{"name":"Latin Extended-A","ranges":["0100-017F"]},{"name":"Latin Extended-B","ranges":["0180-024F"]},{"name":"IPA Extensions","ranges":["0250-02AF"]},{"name":"Spacing Modifier Letters","ranges":["02B0-02FF"]},{"name":"Combining Diacritical Marks","ranges":["0300-036F"]},{"name":"Greek and Coptic","ranges":["0370-0377","037A-037F","0384-038A","038C","028E-03A1","03A3-03FF"]},{"name":"Cyrillic","ranges":["0400-04FF"]},{"name":"Cyrillic Supplementary","ranges":["0500-052F"]},{"name":"Armenian","ranges":["0531-0556","0559-055F","0561-0587","0589-058A","058D-058F"]},{"name":"Hebrew","ranges":["0591-05C7","05D0-05EA","05EF-05F4"]},{"name":"Arabic","ranges":["0600-061B","061E-06FF"]},{"name":"Devanagari","ranges":["0900-097F"]},{"name":"Bengali","ranges":["0980-0983","0985-098C","098F-0990","0993-09A8","09AA-09B0","09B2","09B6-09B9","09BC-09C4","09C7-09C8","09CB-09CE","09D7","09DC-09DD","09DF-09E3","09E6-09FB"]},{"name":"Gurmukhi","ranges":["0A01-0A03","0A05-0A0A","0A0F-0A10","0A13-0A28","0A2A-0A30","0A32-0A33","0A35-0A36","0A38-0A39","0A3C","0A3E-0A42","0A47-0A48","0A4B-0A4D","0A51","0A59-0A5C","0A5E","0A66-0A75"]},{"name":"Gujarati","ranges":["0A81-0A83","0A85-0A8D","0A8F-0A91","0A93-0AA8","0AAA-0AB0","0AB2-0AB3","0AB5-0AB9","0ABC-0AC5","0AC7-0AC9","0ACB-0ACD","0AD0","0AE0-0AE3","0AE6-0AF1"]},{"name":"Oriya","ranges":["0B01-0B03","0B05-0B0C","0B0F-0B10","0B13-0B28","0B2A-0B30","0B32-0B33","0B35-0B39","0B3C-0B44","0B47-0B48","0B4B-0B4D","0B56-0B57","0B5C-0B5D","0B5F-0B63","0B66-0B77"]},{"name":"Tamil","ranges":["0B82-0B83","0B85-0B8A","0B8E-0B90","0B92-0B95","0B99-0B9A","0B9C","0B9E-0B9F","0BA3-0BA4","0BA8-0BAA","0BAE-0BB9","0BBE-0BC2","0BC6-0BC8","0BCA-0BCD","0BD0","0BD7","0BE6-0BFA"]},{"name":"Telugu","ranges":["0C00-0C03","0C05-0C0C","0C0E-0C10","0C12-0C28","0C2A-0C39","0C3D-0C44","0C46-0C48","0C4A-0C4D","0C55-0C56","0C58-0C59","0C60-0C63","0C66-0C6F","0C78-0C7F"]},{"name":"Kannada","ranges":["0C81-0C83","0C85-0C8C","0C8E-0C90","0C92-0CA8","0CAA-0CB3","0CB5-0CB9","0CBC-0CC4","0CC6-0CC8","0CCA-0CCD","0CD5-0CD6","0CDE","0CE0-0CE3","0CE6-0CEF","0CF1-0CF2"]},{"name":"Malayalam","ranges":["0D01-0D03","0D05-0D0C","0D0E-0D10","0D12-0D3A","0D3D-0D44","0D46-0D48","0D4A-0D4E","0D57","0D60-0D63","0D66-0D75","0D79-0D7F"]},{"name":"Sinhala","ranges":["0D82-0D83","0D85-0D96","0D9A-0DB1","0DB3-0DBB","0DBD","0DC0-0DC6","0DCA","0DCF-0DD4","0DD6","0DD8-0DDF","0DE6-0DEF","0DF2-0DF4"]},{"name":"Thai","ranges":["0E01-0E3A","0E3F-0E5B"]},{"name":"Lao","ranges":["0E81-0E82","0E84","0E87-0E88","0E8A","0E8D","0E94-0E97","0E99-0E9F","0EA1-0EA3","0EA5","0EA7","0EAA-0EAB","0EAD-0EB9","0EBB-0EBD","0EC0-0EC4","0EC6","0EC8-0ECD","0ED0-0ED9","0EDC-0EDF"]},{"name":"Tibetan","ranges":["0F00-0F47","0F49-0F6C","0F71-0F97","0F99-0FBC","0FBE-0FCC","0FCE-0FD4","0FD9-0FDA"]},{"name":"Georgian","ranges":["10A0-10C5","10C7","10CD","10D0-10FF"]},{"name":"Hangul Jamo","ranges":["1100-115E","1161-11FF"]},{"name":"Phonetic Extensions","ranges":["1D00-1D7F"]},{"name":"Latin Extended Additional","ranges":["1E00-1EFF"]},{"name":"Greek Extended","ranges":["1F00-1F15","1F18-1F1D","1F20-1F45","1F48-1F4D","1F50-1F57","1F59","1F5B","1F5D","1F5F-1F7D","1F80-1FB4","1FB6-1FC4","1FC6-1FD3","1FD6-1FDB","1FDD-1FEF","1FF2-1FF4","1FF6-1FFE"]},{"name":"General Punctuation","ranges":["201A","2024","201A","2044"]},{"name":"Currency Symbols","ranges":["20A0-20BF"]},{"name":"Mathematical Operators","ranges":["2217","227A","227B"]},{"name":"CJK Radicals Supplement","ranges":["2E80-2E99","2E9B-2EF3"]},{"name":"Kangxi Radicals","ranges":["2F00-2FD5"]},{"name":"CJK Symbols and Punctuation","ranges":["3001-303D"]},{"name":"Hiragana","ranges":["3041-3096","3099-309F"]},{"name":"Katakana","ranges":["30A0-30FF"]},{"name":"Bopomofo","ranges":["3105-312D"]},{"name":"Hangul Compatibility Jamo","ranges":["3131-3163","3165-318E"]},{"name":"Kanbun","ranges":["3190-319F"]},{"name":"Bopomofo Extended","ranges":["31A0-31B7"]},{"name":"Katakana Phonetic Extensions","ranges":["31F0-31FF"]},{"name":"CJK Compatibility","ranges":["3300-3376","337B-33FE"]},{"name":"CJK Unified Ideographs Extension A","ranges":["3400-4DB5"]},{"name":"CJK Unified Ideographs","ranges":["4E00-534C","534E-534F","5351-9FD5"]},{"name":"Hangul Syllables","ranges":["AC00-D7A3"]},{"name":"CJK Compatibility Ideographs","ranges":["F900-FA6D"]},{"name":"Alphabetic Presentation Forms","ranges":["FB00-FB06","FB13-FB17","FB1D-FB36","FB38-FB3C","FB3E","FB40-FB41","FB43-FB44","FB46-FB4F"]},{"name":"Arabic Presentation Forms-A","ranges":["FB50-FBC1","FBD3-FD3F","FD50-FD8F","FD92-FDC7","FDF0-FDFC"]},{"name":"Combining Half Marks","ranges":["FE20-FE23"]},{"name":"CJK Compatibility Forms","ranges":["FE30-FE4F"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Halfwidth and Fullwidth Forms","ranges":["FF01-FF9F","FFA1-FFBE","FFC2-FFC7","FFCA-FFCF","FFD2-FFD7","FFDA-FFDC","FFE0-FFE6","FFE8"]}]}');
            var s, c, i = {
                    "@": "＠",
                    "#": "＃",
                    $: "＄",
                    "%": "％",
                    "&": "＆",
                    "=": "＝",
                    "+": "＋",
                    "/": "⁄",
                    "\\": "＼",
                    ";": ";",
                    ":": "˸",
                    ",": "‚",
                    "?": "?",
                    "!": "ǃ",
                    '"': "＂",
                    "<": "≺",
                    ">": "≻",
                    ".": "․",
                    "^": "＾",
                    "{": "｛",
                    "}": "｝",
                    "[": "［",
                    "]": "］",
                    "(": "（",
                    ")": "）",
                    "|": "｜",
                    "*": "∗"
                },
                u = Object.keys(i).map((function(e) {
                    return "\\u".concat(e.charCodeAt(0).toString(16).padStart(4, "0"))
                })).join(""),
                m = new RegExp("[".concat(u, "]"), "g"),
                d = (new RegExp("[^".concat(u, "]"), "g"), Object.keys(i).map((function(e) {
                    return "\\u".concat(i[e].charCodeAt(0).toString(16).padStart(4, "0"))
                })).join("")),
                w = (new RegExp("[".concat(d, "]"), "g"), new RegExp("[^".concat(d, "]"), "g"), s = o, c = n()(s.characterAllowList.map((function(e) {
                    return e.ranges
                }))).map((function(e) {
                    return e.split("-").map((function(e) {
                        return "\\u".concat(e)
                    })).join("-")
                })), new RegExp("[^".concat(d).concat(c.join(""), "]"), "g")),
                p = function(e) {
                    var a = e;
                    return a = (a = (a = (a = (a = (a = a.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\n\t\b]/g, " ")).replace(l.ansiEscapeCodes, "")).replace(l.zeroWidthCharacters, "")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                g = function(e) {
                    var a = e;
                    return a = (a = (a = (a = (a = a.replace(/[\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\t\b]/g, " ")).replace(/\n{3,}/g, "\n\n")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                f = function(e, a) {
                    var t = null != a && !0 === a.allowNewlines ? g : p,
                        r = t(function(e) {
                            return e.replace(m, (function(e) {
                                return i.hasOwnProperty(e) ? i[e] : ""
                            }))
                        }(function(e) {
                            return e.replace(w, "")
                        }(t(e))));
                    if ((r.match(/fuck/gi) || []).length > 0) {
                        var n = (new Error).stack;
                        console.warn('Profanity somehow slipped through in sanitize.js! [original: "'.concat(e, '", sanitized: "').concat(r, '", options: "').concat(JSON.stringify(a), '"] ').concat(n))
                    }
                    return r
                },
                h = function(e, a) {
                    return Array.isArray(e) ? e.map((function(e) {
                        return f(e, a)
                    })) : f(e, a)
                }
        },
        82470: (e, a, t) => {
            t.d(a, {
                w: () => n
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return r.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=43dfc4635020b22ace62e8af017f05b25538b69106ff722c1920f6e8a206f967.js.map