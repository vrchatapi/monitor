"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2295], {
        42295: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => P
            });
            var r = a(4942),
                n = a(15861),
                l = a(54546),
                o = a(16686),
                i = a(20495),
                s = a(80916),
                c = a(64687),
                u = a.n(c),
                m = a(60006),
                w = a(67294),
                d = a(32981),
                p = a(89250),
                f = a(83868),
                g = a.n(f),
                h = a(5513),
                b = a(12752),
                v = a(62437),
                x = a(14411),
                E = a(41400),
                k = a(36678);

            function y(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : y(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const P = function() {
                var e = (0, d.I0)(),
                    t = (0, b.sc)().emailTaken,
                    a = (0, p.s0)(),
                    r = (0, b.Tu)(),
                    c = r.user,
                    f = r.isFetching,
                    y = r.fetchUser,
                    P = (0, v.X6)(),
                    C = (0, l.Z)(P, 2),
                    O = C[0],
                    Z = C[1],
                    j = (Z.isError, Z.error, w.useState(!1)),
                    S = (0, l.Z)(j, 2),
                    _ = S[0],
                    I = S[1],
                    T = w.useState({
                        value: "",
                        taken: !1,
                        error: null,
                        checking: !1,
                        ok: !1
                    }),
                    V = (0, l.Z)(T, 2),
                    D = V[0],
                    $ = V[1],
                    A = w.useState({
                        value: "",
                        ok: !1
                    }),
                    F = (0, l.Z)(A, 2),
                    M = F[0],
                    R = F[1],
                    L = w.useState(""),
                    W = (0, l.Z)(L, 2),
                    Y = W[0],
                    z = W[1],
                    G = w.useState({
                        sent: !1,
                        sending: !1,
                        failed: !1
                    }),
                    U = (0, l.Z)(G, 2),
                    H = U[0],
                    J = U[1],
                    Q = w.useState(null),
                    X = (0, l.Z)(Q, 2),
                    q = X[0],
                    B = X[1];
                w.useEffect((function() {
                    f || c && null != c && c.id || a("/home/login")
                }), []);
                var K = function() {
                        var e = (0, n.Z)(u().mark((function e(a) {
                            var r, n, l, o;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = a.target.value, n = void 0 === r ? "" : r, $(N(N({}, D), {}, {
                                                value: n
                                            })), "" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (l = null, g()(n) || (l = "This is not a valid email"), !l) {
                                            e.next = 9;
                                            break
                                        }
                                        return $((function(e) {
                                            return N(N({}, e), {}, {
                                                error: l,
                                                taken: !1,
                                                ok: !1
                                            })
                                        })), e.abrupt("return");
                                    case 9:
                                        if (c.id) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                        return $((function(e) {
                                            return N(N({}, e), {}, {
                                                checking: !0,
                                                error: l
                                            })
                                        })), e.next = 14, t(n, c.id);
                                    case 14:
                                        if ((o = e.sent) && (l = "This email is already taken"), !l) {
                                            e.next = 19;
                                            break
                                        }
                                        return $((function(e) {
                                            return N(N({}, e), {}, {
                                                error: l,
                                                taken: o,
                                                checking: !1,
                                                ok: !1
                                            })
                                        })), e.abrupt("return");
                                    case 19:
                                        $((function(e) {
                                            return N(N({}, e), {}, {
                                                error: l,
                                                taken: o,
                                                checking: !1,
                                                ok: !l && !o
                                            })
                                        }));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function() {
                        var t = (0, n.Z)(u().mark((function t() {
                            var a, r;
                            return u().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return J(N(N({}, H), {}, {
                                            sending: !0
                                        })), t.prev = 1, t.next = 4, e((0, h.A8)());
                                    case 4:
                                        null != (r = t.sent) && null !== (a = r.value) && void 0 !== a && null !== (a = a.data) && void 0 !== a && a.success && (J((function(e) {
                                            return N(N({}, e), {}, {
                                                sent: !0
                                            })
                                        })), setTimeout((function() {
                                            J((function(e) {
                                                return N(N({}, e), {}, {
                                                    sent: !1
                                                })
                                            }))
                                        }), 5e3)), t.next = 13;
                                        break;
                                    case 8:
                                        return t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), J((function(e) {
                                            return N(N({}, e), {}, {
                                                sending: !1,
                                                failed: !0
                                            })
                                        })), t.abrupt("return");
                                    case 13:
                                        J((function(e) {
                                            return N(N({}, e), {}, {
                                                sending: !1
                                            })
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    te = function() {
                        var e = (0, n.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, y();
                                    case 3:
                                        if (!c.emailVerified) {
                                            e.next = 6;
                                            break
                                        }
                                        return B(!0), e.abrupt("return", setTimeout((function() {
                                            I(!0), a("/home")
                                        }), 1e3));
                                    case 6:
                                        return e.abrupt("return", B(!1));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return w.createElement(k.Z, null, w.createElement(x.$4, null, "Email Verification"), w.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, w.createElement("form", {
                    onSubmit: function() {}
                }, w.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, w.createElement("div", {
                    className: "tw-mb-5"
                }, w.createElement(x.$1, {
                    icon: s.sl,
                    className: "tw-w-[90px] tw-h-[72px]"
                })), w.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Email Verification"), H.failed && w.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to send verification email"
                }, w.createElement(x.$1, {
                    icon: i.faCircleExclamation
                }), "  Failed to send verification email, please try again."), !1 === q && w.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to verify email"
                }, w.createElement(x.$1, {
                    icon: i.faCircleExclamation
                }), "  Failed to verify, Please check your inbox (or spam folder) to verify your email."), H.sent && w.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Verification Email Sent"
                }, w.createElement(x.$1, {
                    icon: o.faCircleCheck
                }), "  We’ve resent you the verification email."), q && w.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Email verified"
                }, w.createElement(x.$1, {
                    icon: o.faCircleCheck
                }), "  Your email has been updated."), (null == c ? void 0 : c.obfuscatedEmail) && w.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "We've sent an email to ", w.createElement("strong", null, null == c ? void 0 : c.obfuscatedEmail)), w.createElement("p", {
                    className: "tw-text-center"
                }, "Please check your inbox (or spam folder) to verify your email, it may take a few minutes."), w.createElement("div", {
                    className: "tw-text-center tw-text-subtext-grey"
                }, w.createElement("span", {
                    role: "button",
                    tabIndex: 0,
                    onClick: ee,
                    "aria-label": "Resend Verification Email",
                    className: "tw-text-link-highlight tw-cursor-pointer tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-offset-2 tw-focus:tw-ring-blue-500"
                }, "Can't find the email? Send again")), w.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), w.createElement("p", {
                    className: "tw-text-left tw-text-subtext-grey tw-w-full"
                }, "If you entered your email address incorrectly, you can update it here"), w.createElement(x.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    placeholder: "New Email",
                    value: D.value,
                    onChange: K,
                    loading: D.checking
                }), D.value.includes("@") && D.error && w.createElement(E.bZ, {
                    role: "alert",
                    "aria-label": "Email Error"
                }, D.error), D.ok && w.createElement(x.II, {
                    type: "email",
                    id: "emailAgain",
                    inputMode: "email",
                    name: "emailAgain",
                    "aria-label": "Re-Enter Email",
                    className: "tw-mt-2 tw-w-full",
                    placeholder: "Re-Enter Email",
                    value: M.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t,
                            r = D.value && D.value === a;
                        R({
                            value: a,
                            ok: r
                        })
                    }
                }), D.ok && (M.ok ? w.createElement(x.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    className: "tw-mt-2 tw-w-full",
                    role: "textbox",
                    "aria-label": "Enter Your Password",
                    placeholder: "Enter Your Password",
                    value: Y,
                    onChange: function(e) {
                        var t = e.target.value;
                        return z(void 0 === t ? "" : t)
                    }
                }) : w.createElement(E.bZ, {
                    role: "alert",
                    "aria-label": "Emails do not match"
                }, "Emails do not match")), D.ok && M.ok && Y && w.createElement(x.zx, {
                    onClick: function(e) {
                        e.preventDefault(), D.ok && M.ok && Y && O({
                            userId: c.id,
                            email: D.value,
                            password: Y
                        })
                    },
                    className: "tw-w-60 tw-mt-6 tw-mb-12",
                    type: "submit",
                    loading: !1
                }, "Update Email"), w.createElement(x.zx, {
                    onClick: te,
                    "aria-label": "Verified my email",
                    className: "tw-w-60 tw-mt-6 tw-mb-12",
                    type: "submit",
                    loading: _
                }, "Okay, I've verified my Email!"), w.createElement(m.Qj, {
                    role: "link",
                    state: {
                        logout: !0
                    },
                    title: "Logout",
                    to: "/home/login",
                    className: "tw-w-60 tw-mt-0",
                    isSecondary: !0
                }, "Log out and start over")))))
            }
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var r = a(54546),
                n = a(67294),
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
                    a = e.showCredits,
                    o = (0, n.useState)(null),
                    i = (0, r.Z)(o, 2),
                    s = i[0],
                    c = i[1],
                    u = (0, n.useState)(null),
                    m = (0, r.Z)(u, 2),
                    w = m[0],
                    d = m[1];
                (0, n.useEffect)((function() {
                    if (null === s) c(l[0]);
                    else {
                        var e = p(s);
                        setTimeout((function() {
                            return c(e)
                        }), 1e4), d(e)
                    }
                }), [s]);
                var p = function(e) {
                    var t = l.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === l.length - 1 ? l[0] : l[t + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === s ? "none" : "url(".concat(s.imagePath, ")")
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
                }, t), (null == s ? void 0 : s.worldName) && a && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", s.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", s.authorName)))
            }
        }
    }
]);
//# sourceMappingURL=3c8e25fb41369c944fb54489237b7f23eb47611ba4b9adcc17d8d5aa53b49b89.js.map