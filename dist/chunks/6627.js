"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6627], {
        36678: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var a = r(54546),
                n = r(67294),
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
                var t = e.children,
                    r = e.showCredits,
                    o = (0, n.useState)(null),
                    s = (0, a.Z)(o, 2),
                    c = s[0],
                    i = s[1],
                    u = (0, n.useState)(null),
                    m = (0, a.Z)(u, 2),
                    w = m[0],
                    d = m[1];
                (0, n.useEffect)((function() {
                    if (null === c) i(l[0]);
                    else {
                        var e = p(c);
                        setTimeout((function() {
                            return i(e)
                        }), 1e4), d(e)
                    }
                }), [c]);
                var p = function(e) {
                    var t = l.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === l.length - 1 ? l[0] : l[t + 1]
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
                    src: null == w ? void 0 : w.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == c ? void 0 : c.worldName) && r && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", c.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        66627: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => T
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
                w = r.n(m),
                d = r(67294),
                p = r(89250),
                h = r(79655),
                f = r(83868),
                v = r.n(f),
                b = r(20937),
                g = r.n(b),
                x = r(14411),
                E = r(17383),
                y = r(22202),
                k = r(17219),
                N = r(72562),
                j = r(69690),
                P = r(82470),
                Z = r(41400),
                C = r(36678);

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

            function O(e) {
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
            const T = function() {
                var e, t, r = (0, p.s0)(),
                    a = (0, p.TH)(),
                    o = (0, y.l4)(),
                    s = (0, l.Z)(o, 2),
                    m = s[0],
                    f = s[1],
                    b = f.isLoading,
                    S = f.isSuccess,
                    T = f.error,
                    A = (0, k.y)().data,
                    I = (void 0 === A ? {} : A).currentTOSVersion,
                    R = (0, E.sc)(),
                    z = R.nameTaken,
                    D = R.emailTaken,
                    q = d.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    M = (0, l.Z)(q, 2),
                    B = M[0],
                    F = M[1],
                    V = d.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    L = (0, l.Z)(V, 2),
                    X = L[0],
                    J = L[1],
                    W = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    G = (0, l.Z)(W, 2),
                    H = G[0],
                    U = G[1],
                    Y = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    $ = (0, l.Z)(Y, 2),
                    K = $[0],
                    Q = $[1],
                    ee = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    te = (0, l.Z)(ee, 2),
                    re = te[0],
                    ae = te[1],
                    ne = d.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    le = (0, l.Z)(ne, 2),
                    oe = le[0],
                    se = le[1],
                    ce = d.useState(0),
                    ie = (0, l.Z)(ce, 2),
                    ue = ie[0],
                    me = ie[1],
                    we = d.useState(!1),
                    de = (0, l.Z)(we, 2),
                    pe = de[0],
                    he = de[1],
                    fe = d.useState(!1),
                    ve = (0, l.Z)(fe, 2),
                    be = ve[0],
                    ge = ve[1],
                    xe = d.useState(""),
                    Ee = (0, l.Z)(xe, 2),
                    ye = Ee[0],
                    ke = Ee[1],
                    Ne = d.useState(!1),
                    je = (0, l.Z)(Ne, 2),
                    Pe = je[0],
                    Ze = je[1],
                    Ce = d.useRef(S),
                    Se = d.useRef(!1),
                    Oe = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    Te = (0, l.Z)(Oe, 2),
                    _e = Te[0],
                    Ae = Te[1],
                    Ie = d.useRef(null);
                d.useEffect((function() {
                    _e.value && "number" == typeof _e.failedAt && w()().isAfter(w()(_e.failedAt).add(1, "days")) && Ae({
                        value: !1,
                        failedAt: null
                    })
                }), []), d.useEffect((function() {
                    Ze(!0 === B.ok && !0 === X.ok && !0 === H.ok && !0 === K.ok && !0 === re.ok && !0 === oe.ok && ue === I && !0 === be)
                }), [B, X, K, oe, ue, be]), d.useEffect((function() {
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
                }), [S, a]), d.useEffect((function() {
                    var e;
                    T && (0, N.Kz)("Register_Error", {
                        error: null === (e = T.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [T]);
                var Re = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, F(O(O({}, B), {}, {
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
                                        if (F((function(e) {
                                                return O(O({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return F((function(e) {
                                            return O(O({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        return F((function(e) {
                                            return O(O({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 13, z(a);
                                    case 13:
                                        l = e.sent, F((function(e) {
                                            return O(O({}, e), {}, {
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
                    ze = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, J(O(O({}, X), {}, {
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
                                            return O(O({}, e), {}, {
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
                    De = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, v()(r) ? (0, j.T)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return J((function(e) {
                                            return O(O({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return J((function(e) {
                                            return O(O({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, D(r);
                                    case 9:
                                        n = e.sent, J((function(e) {
                                            return O(O({}, e), {}, {
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
                    qe = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!g()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !g()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!g()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) se((function(e) {
                                return O(O({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            }));
                            else w()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? se((function(e) {
                                return O(O({}, e), {}, {
                                    ok: !0
                                })
                            })) : se((function(e) {
                                return O(O({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    Me = function() {
                        ge(!1), ke("")
                    },
                    Be = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, m({
                                            username: B.value,
                                            password: K.value,
                                            email: X.value,
                                            year: oe.year,
                                            month: oe.month,
                                            day: oe.day,
                                            captchaCode: ye,
                                            subscribe: pe,
                                            acceptedTOSVersion: ue
                                        }).unwrap();
                                    case 4:
                                        e.next = 12;
                                        break;
                                    case 6:
                                        if (e.prev = 6, e.t0 = e.catch(1), console.error(e.t0), !w()().subtract(13, "years").isBefore(w()({
                                                year: oe.year,
                                                month: oe.month - 1,
                                                day: oe.day
                                            }))) {
                                            e.next = 12;
                                            break
                                        }
                                        return Ae({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 12:
                                        Se.current || (Me(), null === (r = Ie.current) || void 0 === r || r.resetCaptcha());
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
                    Fe = null !== (e = null == T || null === (t = T.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Fe && (Fe.indexOf(":") > 0 ? (Fe.substring(0, Fe.indexOf(":")).trim(), Fe = Fe.substring(Fe.indexOf(":") + 1).trim()) : 0 === Fe.indexOf(":") && (Fe = Fe.substring(1).trim())), _e.value ? d.createElement(C.Z, null, d.createElement(x.$4, null, "Create a New Account"), d.createElement(Z.W2, null, d.createElement(Z.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, d.createElement(Z.X2, {
                    className: "justify-content-center"
                }, d.createElement(Z.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), d.createElement(Z.l0, null, d.createElement(Z.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, d.createElement(Z.h4, null, "Create a New Account"), d.createElement(h.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), d.createElement(x.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : d.createElement(C.Z, null, d.createElement(x.$4, null, "Create a New Account"), d.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, d.createElement("form", {
                    onSubmit: Be
                }, d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, d.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Create a New Account"), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement("label", {
                    htmlFor: "username",
                    className: "tw-mb-2"
                }, "Display Name"), d.createElement(x.II, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: B.value,
                    onChange: Re,
                    loading: B.checking,
                    success: !B.checking && B.ok,
                    className: "tw-mb-1",
                    isError: B.error
                }), !B.error && d.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), B.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, B.error)), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), d.createElement(x.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    value: X.value,
                    onChange: ze,
                    onBlur: De,
                    loading: X.checking,
                    isError: X.error
                }), X.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, X.error), X.ok && d.createElement(x.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: H.value,
                    onChange: function(e) {
                        U(O(O({}, H), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return H.value !== X.value ? U(O(O({}, H), {}, {
                            error: "Emails do not match"
                        })) : U(O(O({}, H), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: H.error
                }), X.ok && H.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, H.error)), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), d.createElement(x.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    value: K.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (Q(O(O({}, K), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, P.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            Q((function(e) {
                                return O(O({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: K.error
                }), K.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, K.error), K.ok && d.createElement(x.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    value: re.value,
                    onChange: function(e) {
                        ae(O(O({}, re), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return re.value !== K.value ? ae(O(O({}, re), {}, {
                            error: "Passwords do not match"
                        })) : ae(O(O({}, re), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: re.error
                }), K.ok && re.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, re.error)), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Date of Birth"), d.createElement("div", {
                    className: "tw-justify-between tw-align-middle tw-flex"
                }, d.createElement(_, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: oe.month,
                    name: "age_month",
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        se(O(O({}, oe), {}, {
                            month: r,
                            ok: null,
                            error: !1
                        })), qe(oe.day, r, oe.year)
                    },
                    isError: oe.error
                }, d.createElement("option", {
                    value: "1"
                }, "January"), d.createElement("option", {
                    value: "2"
                }, "February"), d.createElement("option", {
                    value: "3"
                }, "March"), d.createElement("option", {
                    value: "4"
                }, "April"), d.createElement("option", {
                    value: "5"
                }, "May"), d.createElement("option", {
                    value: "6"
                }, "June"), d.createElement("option", {
                    value: "7"
                }, "July"), d.createElement("option", {
                    value: "8"
                }, "August"), d.createElement("option", {
                    value: "9"
                }, "September"), d.createElement("option", {
                    value: "10"
                }, "October"), d.createElement("option", {
                    value: "11"
                }, "November"), d.createElement("option", {
                    value: "12"
                }, "December")), d.createElement(x.II, {
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
                        se(O(O({}, oe), {}, {
                            day: r,
                            ok: null,
                            error: !1
                        })), qe(r, oe.month, oe.year)
                    },
                    isError: oe.error
                }), d.createElement(x.II, {
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
                        se(O(O({}, oe), {}, {
                            year: r,
                            ok: null,
                            error: !1
                        })), qe(oe.day, oe.month, r)
                    },
                    isError: oe.error
                })), oe.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, oe.error)), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement(x.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        me(t ? I : 0)
                    },
                    htmlFor: "tos",
                    className: "tw-mb-0",
                    label: d.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1 tw-mb-0"
                    }, "I have read and agree to the ", d.createElement("a", {
                        href: "/privacy/",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Privacy Policy"), ",", d.createElement("br", null), d.createElement("a", {
                        href: "/community-guidelines",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Community Guidelines"), " and ", d.createElement("a", {
                        href: "/legal/",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Terms of Service"), ".")
                })), d.createElement("div", {
                    className: "tw-w-full tw-mb-5"
                }, d.createElement(x.XZ, {
                    id: "subscribe",
                    onChange: function(e) {
                        var t = e.target.checked;
                        he(t)
                    },
                    htmlFor: "subscribe",
                    className: "",
                    checked: pe,
                    label: d.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1"
                    }, "I agree to receive updates from VRChat about its products, services and promotions.")
                })), d.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, d.createElement(i.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        ge(!0), ke(e)
                    },
                    onExpire: Me,
                    ref: Ie
                })), d.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, d.createElement(x.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "registration-form-submit",
                    name: "registration-form-submit",
                    loading: b,
                    disabled: !Pe
                }, "Create Account")), Fe && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Account creation error",
                    className: "tw-text-error-message-red tw-text-xs tw-my-1"
                }, Fe), d.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, d.createElement("p", {
                    className: "tw-text-base tw-ml-1"
                }, "Have an account? ", d.createElement("a", {
                    href: "/home/login"
                }, "Log in")))))))
            };
            var _ = (0, o.Z)("select", {
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
//# sourceMappingURL=09527e6f4b59e12d5e75358162329152da44eaba164f039bab739d2d7b852b6e.js.map