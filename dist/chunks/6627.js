(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6627], {
        13887: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var a = r(54546),
                n = r(42404),
                o = r.n(n),
                l = r(67294);
            const c = [{
                worldName: "Horse Mountain",
                authorName: "nprowler",
                image: r(92610)
            }, {
                worldName: "Instagib Tournament",
                authorName: "ville672",
                image: r(14420)
            }, {
                worldName: "Gumball Lounge",
                authorName: "screamingcolor",
                image: r(38325)
            }, {
                worldName: "Exoplanet Journey",
                authorName: "Niko*",
                image: r(25623)
            }, {
                worldName: "Dusk",
                authorName: "Lucifer MStar",
                image: r(5171)
            }, {
                worldName: "Amber Glade - Winter",
                authorName: "Mankey",
                image: r(38239)
            }, {
                worldName: "Luminous Hotel",
                authorName: "Lura_",
                image: r(81592)
            }, {
                worldName: "Shoegaze Night",
                authorName: "VVolfly",
                image: r(42665)
            }, {
                worldName: "Singularity Echo",
                authorName: "Lavryou",
                image: r(96253)
            }, {
                worldName: "CORRIDOR ABANDONNED․․․",
                authorName: "TontonDemon",
                image: r(40533)
            }, {
                worldName: "Atelier",
                authorName: "amanek",
                image: r(30599)
            }, {
                worldName: "记忆中的花海⁄The Sea of Flowers in Memory",
                authorName: "ぃLuxRIAぅ",
                image: r(35883)
            }, {
                worldName: "BOTANICA",
                authorName: "TakeTake-たけたけ-",
                image: r(55074)
            }, {
                worldName: "Lazy Sunday",
                authorName: "Mochie",
                image: r(34414)
            }, {
                worldName: "Angels Hideout",
                authorName: "樹-Itsuki-",
                image: r(47218)
            }, {
                worldName: "Forest of Eternity",
                authorName: "chu-ri",
                image: r(50749)
            }];
            const i = function(e) {
                var t = e.children,
                    r = e.showCredits,
                    n = (0, l.useState)(null),
                    i = (0, a.Z)(n, 2),
                    s = i[0],
                    u = i[1],
                    m = (0, l.useState)(null),
                    w = (0, a.Z)(m, 2),
                    d = w[0],
                    p = w[1],
                    h = (0, l.useMemo)((function() {
                        return o()(c, 6)
                    }), []);
                (0, l.useEffect)((function() {
                    if (null === s) u(h[0]);
                    else {
                        var e = g(s);
                        setTimeout((function() {
                            return u(e)
                        }), 1e4), p(e)
                    }
                }), [s]);
                var g = function(e) {
                    var t = h.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === h.length - 1 ? h[0] : h[t + 1]
                };
                return l.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === s ? "none" : "url(".concat(s.image, ")")
                    }
                }, l.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, l.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, l.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), l.createElement("img", {
                    className: "tw-hidden",
                    src: null == d ? void 0 : d.image,
                    alt: "VRChat"
                }))), l.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == s ? void 0 : s.worldName) && r && l.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "World:"), " ", s.worldName), l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "Author:"), " ", s.authorName)))
            }
        },
        66627: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => A
            });
            var a = r(4942),
                n = r(15861),
                o = r(54546),
                l = r(4965),
                c = r(64687),
                i = r.n(c),
                s = r(81848),
                u = r(15832),
                m = r(30381),
                w = r.n(m),
                d = r(67294),
                p = r(89250),
                h = r(79655),
                g = r(83868),
                f = r.n(g),
                b = r(20937),
                v = r.n(b),
                x = r(37463),
                y = r(17383),
                E = r(22202),
                k = r(17219),
                N = r(72562),
                j = r(69690),
                S = r(82470),
                C = r(41400),
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

            function Z(e) {
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
                var e, t, r = (0, p.s0)(),
                    a = (0, p.TH)(),
                    l = (0, E.l4)(),
                    c = (0, o.Z)(l, 2),
                    m = c[0],
                    g = c[1],
                    b = g.isLoading,
                    T = g.isSuccess,
                    A = g.error,
                    R = (0, k.y)().data,
                    D = (void 0 === R ? {} : R).currentTOSVersion,
                    P = (0, y.sc)(),
                    z = P.nameTaken,
                    q = P.emailTaken,
                    M = d.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    _ = (0, o.Z)(M, 2),
                    B = _[0],
                    F = _[1],
                    L = d.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    V = (0, o.Z)(L, 2),
                    H = V[0],
                    X = V[1],
                    J = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    W = (0, o.Z)(J, 2),
                    G = W[0],
                    U = W[1],
                    Y = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    $ = (0, o.Z)(Y, 2),
                    K = $[0],
                    Q = $[1],
                    ee = d.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    te = (0, o.Z)(ee, 2),
                    re = te[0],
                    ae = te[1],
                    ne = d.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    oe = (0, o.Z)(ne, 2),
                    le = oe[0],
                    ce = oe[1],
                    ie = d.useState(0),
                    se = (0, o.Z)(ie, 2),
                    ue = se[0],
                    me = se[1],
                    we = d.useState(!1),
                    de = (0, o.Z)(we, 2),
                    pe = de[0],
                    he = de[1],
                    ge = d.useState(!1),
                    fe = (0, o.Z)(ge, 2),
                    be = fe[0],
                    ve = fe[1],
                    xe = d.useState(""),
                    ye = (0, o.Z)(xe, 2),
                    Ee = ye[0],
                    ke = ye[1],
                    Ne = d.useState(!1),
                    je = (0, o.Z)(Ne, 2),
                    Se = je[0],
                    Ce = je[1],
                    Oe = d.useRef(T),
                    Te = d.useRef(!1),
                    Ze = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    Ae = (0, o.Z)(Ze, 2),
                    Ie = Ae[0],
                    Re = Ae[1],
                    De = d.useRef(null);
                d.useEffect((function() {
                    Ie.value && "number" == typeof Ie.failedAt && w()().isAfter(w()(Ie.failedAt).add(1, "days")) && Re({
                        value: !1,
                        failedAt: null
                    })
                }), []), d.useEffect((function() {
                    Ce(!0 === B.ok && !0 === H.ok && !0 === G.ok && !0 === K.ok && !0 === re.ok && !0 === le.ok && ue === D && !0 === be)
                }), [B, H, K, le, ue, be]), d.useEffect((function() {
                    (0, n.Z)(i().mark((function e() {
                        var t, n, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    T && !Oe.current && (o = null === (t = a.state) || void 0 === t ? void 0 : t.redirectTo, null !== (n = o) && void 0 !== n && n.includes("/home/register") && (o = "/home".concat(a.search)), o || (o = "/home/verify"), Te.current = !0, r(o)), Oe.current = T;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [T, a]), d.useEffect((function() {
                    var e;
                    A && (0, N.Kz)("Register_Error", {
                        error: null === (e = A.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [A]);
                var Pe = function() {
                        var e = (0, n.Z)(i().mark((function e(t) {
                            var r, a, n, o;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, F(Z(Z({}, B), {}, {
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
                                                return Z(Z({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== a && a.length < 4 ? n = "That display name is too short" : a.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return F((function(e) {
                                            return Z(Z({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        return F((function(e) {
                                            return Z(Z({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 13, z(a);
                                    case 13:
                                        o = e.sent, F((function(e) {
                                            return Z(Z({}, e), {}, {
                                                taken: o,
                                                ok: !e.error && !o,
                                                error: o ? "That display name is already taken." : e.error,
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
                        var e = (0, n.Z)(i().mark((function e(t) {
                            var r, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, X(Z(Z({}, H), {}, {
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
                                        X((function(e) {
                                            return Z(Z({}, e), {}, {
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
                        var e = (0, n.Z)(i().mark((function e(t) {
                            var r, a, n;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, f()(r) ? (0, j.T)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return X((function(e) {
                                            return Z(Z({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return X((function(e) {
                                            return Z(Z({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, q(r);
                                    case 9:
                                        n = e.sent, X((function(e) {
                                            return Z(Z({}, e), {}, {
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
                    Me = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!v()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !v()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!v()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) ce((function(e) {
                                return Z(Z({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            }));
                            else w()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? ce((function(e) {
                                return Z(Z({}, e), {}, {
                                    ok: !0
                                })
                            })) : ce((function(e) {
                                return Z(Z({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    _e = function() {
                        ve(!1), ke("")
                    },
                    Be = function() {
                        var e = (0, n.Z)(i().mark((function e(t) {
                            var r;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, m({
                                            username: B.value,
                                            password: K.value,
                                            email: H.value,
                                            year: le.year,
                                            month: le.month,
                                            day: le.day,
                                            captchaCode: Ee,
                                            subscribe: pe,
                                            acceptedTOSVersion: ue
                                        }).unwrap();
                                    case 4:
                                        e.next = 12;
                                        break;
                                    case 6:
                                        if (e.prev = 6, e.t0 = e.catch(1), console.error(e.t0), !w()().subtract(13, "years").isBefore(w()({
                                                year: le.year,
                                                month: le.month - 1,
                                                day: le.day
                                            }))) {
                                            e.next = 12;
                                            break
                                        }
                                        return Re({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 12:
                                        Te.current || (_e(), null === (r = De.current) || void 0 === r || r.resetCaptcha());
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
                    Fe = null !== (e = null == A || null === (t = A.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Fe && (Fe.indexOf(":") > 0 ? (Fe.substring(0, Fe.indexOf(":")).trim(), Fe = Fe.substring(Fe.indexOf(":") + 1).trim()) : 0 === Fe.indexOf(":") && (Fe = Fe.substring(1).trim())), Ie.value ? d.createElement(O.Z, null, d.createElement(x.$4, null, "Create a New Account"), d.createElement(C.W2, null, d.createElement(C.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, d.createElement(C.X2, {
                    className: "justify-content-center"
                }, d.createElement(C.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), d.createElement(C.l0, null, d.createElement(C.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, d.createElement(C.h4, null, "Create a New Account"), d.createElement(h.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), d.createElement(x.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : d.createElement(O.Z, null, d.createElement(x.$4, null, "Create a New Account"), d.createElement("div", {
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
                    onChange: Pe,
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
                    value: H.value,
                    onChange: ze,
                    onBlur: qe,
                    loading: H.checking,
                    isError: H.error
                }), H.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, H.error), H.ok && d.createElement(x.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: G.value,
                    onChange: function(e) {
                        U(Z(Z({}, G), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return G.value !== H.value ? U(Z(Z({}, G), {}, {
                            error: "Emails do not match"
                        })) : U(Z(Z({}, G), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: G.error
                }), H.ok && G.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, G.error)), d.createElement("div", {
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
                        if (Q(Z(Z({}, K), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, S.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var o = !n;
                            Q((function(e) {
                                return Z(Z({}, e), {}, {
                                    ok: o,
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
                        ae(Z(Z({}, re), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return re.value !== K.value ? ae(Z(Z({}, re), {}, {
                            error: "Passwords do not match"
                        })) : ae(Z(Z({}, re), {}, {
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
                }, d.createElement(I, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: le.month,
                    name: "age_month",
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ce(Z(Z({}, le), {}, {
                            month: r,
                            ok: null,
                            error: !1
                        })), Me(le.day, r, le.year)
                    },
                    isError: le.error
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
                    value: le.day,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ce(Z(Z({}, le), {}, {
                            day: r,
                            ok: null,
                            error: !1
                        })), Me(r, le.month, le.year)
                    },
                    isError: le.error
                }), d.createElement(x.II, {
                    type: "text",
                    id: "year",
                    inputMode: "numeric",
                    name: "year",
                    placeholder: "Year",
                    className: "tw-w-[129px]",
                    "aria-label": "Birthday Year",
                    value: le.year,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ce(Z(Z({}, le), {}, {
                            year: r,
                            ok: null,
                            error: !1
                        })), Me(le.day, le.month, r)
                    },
                    isError: le.error
                })), le.error && d.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, le.error)), d.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, d.createElement(x.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        me(t ? D : 0)
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
                }, d.createElement(s.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        ve(!0), ke(e)
                    },
                    onExpire: _e,
                    ref: De
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
                    disabled: !Se
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
            var I = (0, l.Z)("select", {
                target: "emwozn20"
            })("padding:0.45rem 0.75rem;height:unset;background:#05191d;border:#053c48 solid 2px;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#053c48"
            }), ";border-radius:4px;outline:none!important;color:#6ae3f9;min-width:100px;&:active,&:hover,&:focus{background:#07343f;color:#6ae3f9;border-color:", (function(e) {
                return e.isError ? "#A8342E" : "#086c84"
            }), ";}")
        },
        82470: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => n
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return a.has(e.toLowerCase())
                }
        },
        92610: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "12ce1bda863d50d0-1980w.jpg 1980w",
                images: [{
                    path: r.p + "12ce1bda863d50d0-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "12ce1bda863d50d0-1980w.jpg",
                toString: function() {
                    return r.p + "12ce1bda863d50d0-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        14420: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "19cf5ea4873534e6-1980w.jpg 1980w",
                images: [{
                    path: r.p + "19cf5ea4873534e6-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "19cf5ea4873534e6-1980w.jpg",
                toString: function() {
                    return r.p + "19cf5ea4873534e6-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38325: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "a15004cb78587aea-1980w.jpg 1980w",
                images: [{
                    path: r.p + "a15004cb78587aea-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "a15004cb78587aea-1980w.jpg",
                toString: function() {
                    return r.p + "a15004cb78587aea-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        25623: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "5ac33cecd162656c-1980w.jpg 1980w",
                images: [{
                    path: r.p + "5ac33cecd162656c-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "5ac33cecd162656c-1980w.jpg",
                toString: function() {
                    return r.p + "5ac33cecd162656c-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        5171: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "f2fe59d11df55cf4-1980w.jpg 1980w",
                images: [{
                    path: r.p + "f2fe59d11df55cf4-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "f2fe59d11df55cf4-1980w.jpg",
                toString: function() {
                    return r.p + "f2fe59d11df55cf4-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38239: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "6760e1bc722c437b-1980w.jpg 1980w",
                images: [{
                    path: r.p + "6760e1bc722c437b-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: r.p + "6760e1bc722c437b-1980w.jpg",
                toString: function() {
                    return r.p + "6760e1bc722c437b-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        81592: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "027202d759d2cf17-1920w.jpg 1920w",
                images: [{
                    path: r.p + "027202d759d2cf17-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "027202d759d2cf17-1920w.jpg",
                toString: function() {
                    return r.p + "027202d759d2cf17-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        42665: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "942180c1c931b9b9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "942180c1c931b9b9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "942180c1c931b9b9-1920w.jpg",
                toString: function() {
                    return r.p + "942180c1c931b9b9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        96253: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "3bb6219038a6eb91-1920w.jpg 1920w",
                images: [{
                    path: r.p + "3bb6219038a6eb91-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "3bb6219038a6eb91-1920w.jpg",
                toString: function() {
                    return r.p + "3bb6219038a6eb91-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        40533: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "5844853cd4177f64-1920w.jpg 1920w",
                images: [{
                    path: r.p + "5844853cd4177f64-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "5844853cd4177f64-1920w.jpg",
                toString: function() {
                    return r.p + "5844853cd4177f64-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        30599: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "c6455c52c3c108ef-1920w.jpg 1920w",
                images: [{
                    path: r.p + "c6455c52c3c108ef-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "c6455c52c3c108ef-1920w.jpg",
                toString: function() {
                    return r.p + "c6455c52c3c108ef-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        35883: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "e7e30361f928fa1f-1920w.jpg 1920w",
                images: [{
                    path: r.p + "e7e30361f928fa1f-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "e7e30361f928fa1f-1920w.jpg",
                toString: function() {
                    return r.p + "e7e30361f928fa1f-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        55074: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "960324bdaa4dd770-1920w.jpg 1920w",
                images: [{
                    path: r.p + "960324bdaa4dd770-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "960324bdaa4dd770-1920w.jpg",
                toString: function() {
                    return r.p + "960324bdaa4dd770-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        34414: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "802b4af19623d031-1920w.jpg 1920w",
                images: [{
                    path: r.p + "802b4af19623d031-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "802b4af19623d031-1920w.jpg",
                toString: function() {
                    return r.p + "802b4af19623d031-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        47218: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "0848895a9717ee5a-1920w.jpg 1920w",
                images: [{
                    path: r.p + "0848895a9717ee5a-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "0848895a9717ee5a-1920w.jpg",
                toString: function() {
                    return r.p + "0848895a9717ee5a-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        50749: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "2a36acbdc7592ce9-1920w.jpg 1920w",
                images: [{
                    path: r.p + "2a36acbdc7592ce9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: r.p + "2a36acbdc7592ce9-1920w.jpg",
                toString: function() {
                    return r.p + "2a36acbdc7592ce9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        }
    }
]);
//# sourceMappingURL=85b51fe2a65ab8541d6f55b1f42c03dd53456f70b49494606a28f07773eb2c7f.js.map