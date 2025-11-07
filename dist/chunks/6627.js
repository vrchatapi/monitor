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
                y = r(96985),
                E = r(95168),
                k = r(22202),
                x = r(17219),
                N = r(6281),
                j = r(69690),
                C = r(82470),
                S = r(41400),
                Z = r(13887);

            function O(e, t) {
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
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const A = function() {
                var e, t, r = (0, f.s0)(),
                    a = (0, f.TH)(),
                    o = (0, E.ve)("web-test-not-logged-in", {
                        value: "control"
                    }),
                    s = "treatment" === (null == o ? void 0 : o.value),
                    m = (0, k.l4)(),
                    v = (0, l.Z)(m, 2),
                    b = v[0],
                    O = v[1],
                    A = O.isLoading,
                    R = O.isSuccess,
                    I = O.error,
                    z = (0, x.y)().data,
                    D = (void 0 === z ? {} : z).currentTOSVersion,
                    _ = (0, E.sc)(),
                    q = _.nameTaken,
                    B = _.emailTaken,
                    F = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    V = (0, l.Z)(F, 2),
                    L = V[0],
                    M = V[1],
                    X = w.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    J = (0, l.Z)(X, 2),
                    U = J[0],
                    W = J[1],
                    Y = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    H = (0, l.Z)(Y, 2),
                    $ = H[0],
                    G = H[1],
                    K = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    Q = (0, l.Z)(K, 2),
                    ee = Q[0],
                    te = Q[1],
                    re = w.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    ae = (0, l.Z)(re, 2),
                    ne = ae[0],
                    le = ae[1],
                    oe = w.useState({
                        year: "",
                        month: "1",
                        day: "",
                        error: !1,
                        ok: null
                    }),
                    se = (0, l.Z)(oe, 2),
                    ce = se[0],
                    ie = se[1],
                    ue = w.useState(0),
                    me = (0, l.Z)(ue, 2),
                    de = me[0],
                    we = me[1],
                    fe = w.useState(!1),
                    pe = (0, l.Z)(fe, 2),
                    ve = pe[0],
                    he = pe[1],
                    be = w.useState(!1),
                    ge = (0, l.Z)(be, 2),
                    ye = ge[0],
                    Ee = ge[1],
                    ke = w.useState(""),
                    xe = (0, l.Z)(ke, 2),
                    Ne = xe[0],
                    je = xe[1],
                    Ce = w.useState(!1),
                    Se = (0, l.Z)(Ce, 2),
                    Ze = Se[0],
                    Oe = Se[1],
                    Te = w.useRef(R),
                    Ae = w.useRef(!1),
                    Pe = (0, u._)("dobFailed", {
                        value: !1,
                        failedAt: null
                    }),
                    Re = (0, l.Z)(Pe, 2),
                    Ie = Re[0],
                    ze = Re[1],
                    De = w.useRef(null);
                w.useEffect((function() {
                    Ie.value && "number" == typeof Ie.failedAt && d()().isAfter(d()(Ie.failedAt).add(1, "days")) && ze({
                        value: !1,
                        failedAt: null
                    })
                }), []), w.useEffect((function() {
                    Oe(!0 === L.ok && !0 === U.ok && (!0 === $.ok || s) && !0 === ee.ok && !0 === ne.ok && !0 === ce.ok && de === D && !0 === ye)
                }), [L, U, $, ee, ne, ce, de, ye]), w.useEffect((function() {
                    (0, n.Z)(c().mark((function e() {
                        var t, n, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    R && !Te.current && (l = null === (t = a.state) || void 0 === t ? void 0 : t.redirectTo, null !== (n = l) && void 0 !== n && n.includes("/home/register") && (l = "/home".concat(a.search)), l || (l = "/home/verify"), Ae.current = !0, r(l)), Te.current = R;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [R, a]), w.useEffect((function() {
                    var e;
                    I && (0, N.j)("Register_Error", {
                        error: null === (e = I.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [I]), w.useEffect((function() {
                    (0, N.j)("Signup_RegistrationStart")
                }), []);
                var _e = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, M(T(T({}, L), {}, {
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
                                        })), e.next = 13, q(a);
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
                    qe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = void 0 === r ? "" : r, W(T(T({}, U), {}, {
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
                                        W((function(e) {
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
                    Be = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, a, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.target.value, a = !1, h()(r) ? (0, j.T)(r) && (a = "This email domain cannot be used at this time due to abuse, please try using a different one") : a = "That's an invalid email", !a) {
                                            e.next = 6;
                                            break
                                        }
                                        return W((function(e) {
                                            return T(T({}, e), {}, {
                                                error: a,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 6:
                                        return W((function(e) {
                                            return T(T({}, e), {}, {
                                                checking: !0
                                            })
                                        })), e.next = 9, B(r);
                                    case 9:
                                        n = e.sent, W((function(e) {
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
                    Fe = function(e, t, r) {
                        if ("" !== r && "" !== t && "" !== e) {
                            var a = null;
                            if (!g()(r) || r < 1900 || r > 2017 ? a = "That's not a valid year" : !g()(t) || t < 0 || t > 12 ? a = "That's not a valid month" : (!g()(e) || e < 0 || e > 31) && (a = "That's not a valid day"), a) ie((function(e) {
                                return T(T({}, e), {}, {
                                    error: a,
                                    ok: !1
                                })
                            }));
                            else d()({
                                year: r,
                                month: t - 1,
                                day: e
                            }).isValid() ? ie((function(e) {
                                return T(T({}, e), {}, {
                                    ok: !0
                                })
                            })) : ie((function(e) {
                                return T(T({}, e), {}, {
                                    error: "That's not a valid date",
                                    ok: !1
                                })
                            }))
                        }
                    },
                    Ve = function() {
                        Ee(!1), je("")
                    },
                    Le = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, b({
                                            username: L.value,
                                            password: ee.value,
                                            email: U.value,
                                            year: ce.year,
                                            month: ce.month,
                                            day: ce.day,
                                            captchaCode: Ne,
                                            subscribe: ve,
                                            acceptedTOSVersion: de
                                        }).unwrap();
                                    case 4:
                                        (0, N.j)("Signup_AccountCreated_Web"), e.next = 13;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(1), console.error(e.t0), !d()().subtract(13, "years").isBefore(d()({
                                                year: ce.year,
                                                month: ce.month - 1,
                                                day: ce.day
                                            }))) {
                                            e.next = 13;
                                            break
                                        }
                                        return ze({
                                            value: !0,
                                            failedAt: Date.now()
                                        }), e.abrupt("return");
                                    case 13:
                                        Ae.current || (Ve(), null === (r = De.current) || void 0 === r || r.resetCaptcha());
                                    case 14:
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
                    Me = null !== (e = null == I || null === (t = I.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return Me && (Me.indexOf(":") > 0 ? (Me.substring(0, Me.indexOf(":")).trim(), Me = Me.substring(Me.indexOf(":") + 1).trim()) : 0 === Me.indexOf(":") && (Me = Me.substring(1).trim())), Ie.value ? w.createElement(Z.Z, {
                    showVRCLogo: !s
                }, w.createElement(y.$4, null, "Create a New Account"), w.createElement(S.W2, null, w.createElement(S.sg, {
                    md: {
                        size: 6,
                        offset: 3
                    },
                    className: "mt-5"
                }, w.createElement(S.X2, {
                    className: "justify-content-center"
                }, w.createElement(S.TR, {
                    href: "https://vrchat.com",
                    target: "_blank"
                })), w.createElement(S.l0, null, w.createElement(S.X2, {
                    className: "align-items-flex-end justify-content-between mb-2 mt-2"
                }, w.createElement(S.h4, null, "Create a New Account"), w.createElement(p.rU, {
                    to: "/home/login",
                    className: "nav-link"
                }, "Login")), w.createElement(y.qX, {
                    type: "error",
                    title: "Failed to create account",
                    message: "You are not eligible for a VRChat account at this time. Please try again later."
                }))))) : w.createElement(Z.Z, {
                    showVRCLogo: !s
                }, w.createElement(y.$4, null, "Create a New Account"), w.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit ".concat(s ? "xl:tw-mt-5" : "xl:tw-mt-[200px]")
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
                }, "Display Name"), w.createElement(y.II, {
                    type: "text",
                    id: "username",
                    name: "username",
                    "aria-label": "Desired display name",
                    value: L.value,
                    onChange: _e,
                    loading: L.checking,
                    success: !L.checking && L.ok,
                    className: "tw-mb-1",
                    isError: L.error
                }), !L.error && w.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, s ? "This is visible to others and can be edited later." : "This is the name shown to other users in-app, you may only change your display name once per 90 days."), L.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, L.error)), w.createElement("div", {
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
                    value: U.value,
                    onChange: qe,
                    onBlur: Be,
                    loading: U.checking,
                    isError: U.error
                }), U.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, U.error), U.ok && !s && w.createElement(y.II, {
                    type: "text",
                    className: "tw-w-full tw-mt-2",
                    name: "re-enter-email",
                    "aria-label": "Re-enter email address",
                    placeholder: "Re-enter email address",
                    value: $.value,
                    onChange: function(e) {
                        G(T(T({}, $), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return $.value !== U.value ? G(T(T({}, $), {}, {
                            error: "Emails do not match"
                        })) : G(T(T({}, $), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: $.error
                }), U.ok && $.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, $.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), w.createElement(y.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    value: ee.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        if (te(T(T({}, ee), {}, {
                                value: r,
                                ok: null,
                                error: !1
                            })), "" !== r) {
                            var a = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            r.length < 8 ? n = "That password is too short \n ".concat(a) : (0, C.w)(r) && (n = "Please try a more secure password \n ".concat(a));
                            var l = !n;
                            te((function(e) {
                                return T(T({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: ee.error
                }), ee.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, ee.error), ee.ok && w.createElement(y.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    value: ne.value,
                    onChange: function(e) {
                        le(T(T({}, ne), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return ne.value !== ee.value ? le(T(T({}, ne), {}, {
                            error: "Passwords do not match"
                        })) : le(T(T({}, ne), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: ne.error
                }), ee.ok && ne.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, ne.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Date of Birth"), w.createElement("div", {
                    className: "tw-justify-between tw-align-middle tw-flex"
                }, w.createElement(P, {
                    className: "tw-w-[129px] tw-h-10",
                    id: "age_month",
                    "aria-label": "Birthday Month",
                    value: ce.month,
                    name: "age_month",
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ie(T(T({}, ce), {}, {
                            month: r,
                            ok: null,
                            error: !1
                        })), Fe(ce.day, r, ce.year)
                    },
                    isError: ce.error
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
                    value: ce.day,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ie(T(T({}, ce), {}, {
                            day: r,
                            ok: null,
                            error: !1
                        })), Fe(r, ce.month, ce.year)
                    },
                    isError: ce.error
                }), w.createElement(y.II, {
                    type: "text",
                    id: "year",
                    inputMode: "numeric",
                    name: "year",
                    placeholder: "Year",
                    className: "tw-w-[129px]",
                    "aria-label": "Birthday Year",
                    value: ce.year,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t;
                        ie(T(T({}, ce), {}, {
                            year: r,
                            ok: null,
                            error: !1
                        })), Fe(ce.day, ce.month, r)
                    },
                    isError: ce.error
                })), ce.error && w.createElement("p", {
                    role: "alert",
                    "aria-label": "Birthday error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, ce.error)), w.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, w.createElement(y.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        we(t ? D : 0)
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
                        he(t)
                    },
                    htmlFor: "subscribe",
                    className: "",
                    checked: ve,
                    label: w.createElement("p", {
                        className: "tw-text-placeholder-text tw-text-base tw-ml-1"
                    }, "I agree to receive updates from VRChat about its products, services and promotions.")
                })), w.createElement("div", {
                    className: "tw-w-full ".concat(s ? "tw-mb-3" : "tw-mb-6", " tw-justify-center tw-flex")
                }, w.createElement(i.Z, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        Ee(!0), je(e)
                    },
                    onExpire: Ve,
                    ref: De
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
            var P = (0, o.Z)("select", {
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
//# sourceMappingURL=55d75aa051a8edd053b9212402242f790a1c233a23619615941a44be8bd61a30.js.map