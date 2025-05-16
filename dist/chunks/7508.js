"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7508], {
        7508: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => k
            });
            var r = a(15861),
                n = a(4942),
                l = a(54546),
                s = a(4241),
                o = a(64687),
                c = a.n(o),
                i = a(67294),
                w = a(89250),
                u = a(79655),
                m = (a(37337), a(15832), a(30381), a(14411)),
                d = a(17383),
                p = a(22202),
                h = (a(17219), a(72562)),
                f = a(82470),
                g = a(60006),
                v = (a(41400), a(36678));

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const k = function() {
                (0, w.s0)(), (0, w.TH)();
                var e, t, a = (0, u.lr)(),
                    n = (0, l.Z)(a, 1)[0],
                    o = i.useMemo((function() {
                        return Object.fromEntries(n.entries())
                    }), [n]),
                    b = i.useState(o.emailToken),
                    k = (0, l.Z)(b, 2),
                    E = k[0],
                    y = (k[1], (0, p.Gf)({
                        emailToken: E
                    }, {
                        skip: !E
                    })),
                    N = y.data,
                    j = y.isLoading,
                    P = y.isError,
                    O = y.error,
                    Z = (0, p.s2)(),
                    _ = (0, l.Z)(Z, 2),
                    S = _[0],
                    z = _[1],
                    A = z.isLoading,
                    T = z.isSuccess,
                    q = (z.isError, z.error),
                    I = (0, d.sc)().nameTaken,
                    U = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    C = (0, l.Z)(U, 2),
                    D = C[0],
                    R = C[1],
                    F = i.useState({
                        value: "",
                        error: !1,
                        taken: !1,
                        ok: null,
                        checking: !1
                    }),
                    M = (0, l.Z)(F, 2),
                    $ = M[0],
                    L = M[1],
                    K = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    W = (0, l.Z)(K, 2),
                    G = W[0],
                    H = W[1],
                    V = i.useState({
                        value: "",
                        error: !1,
                        ok: null
                    }),
                    B = (0, l.Z)(V, 2),
                    X = B[0],
                    Y = B[1];
                i.useEffect((function() {
                    N && !P && (ee({
                        target: {
                            value: N.displayName.replace(/\s[a-zA-Z0-9]{4}$/, "")
                        }
                    }), L(x(x({}, $), {}, {
                        ok: !0,
                        value: N.email
                    })))
                }), [N, P]);
                var J = i.useMemo((function() {
                    return !0 === D.ok && !0 === $.ok && !0 === G.ok && !0 === X.ok
                }), [D, $, G, X]);
                i.useEffect((function() {
                    var e;
                    q && (0, h.Kz)("AccountUpgrade_Error", {
                        error: null === (e = q.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message
                    })
                }), [q]);
                var Q, ee = function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var a, r, n, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = t.target.value, r = void 0 === a ? "" : a, R(x(x({}, D), {}, {
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
                                        if (R((function(e) {
                                                return x(x({}, e), {}, {
                                                    taken: null
                                                })
                                            })), n = !1, "" !== r && r.length < 4 ? n = "That display name is too short" : r.length > 15 && (n = "That display name is too long"), !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return R((function(e) {
                                            return x(x({}, e), {}, {
                                                error: n,
                                                ok: null
                                            })
                                        })), e.abrupt("return");
                                    case 10:
                                        if (R((function(e) {
                                                return x(x({}, e), {}, {
                                                    checking: !0
                                                })
                                            })), e.t0 = (null == N ? void 0 : N.displayName) !== r, !e.t0) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 15, I(r);
                                    case 15:
                                        e.t0 = e.sent;
                                    case 16:
                                        l = e.t0, R((function(e) {
                                            return x(x({}, e), {}, {
                                                taken: l,
                                                ok: !e.error && !l,
                                                error: l ? "That display name is already taken." : e.error,
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
                        var e = (0, r.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, S({
                                            displayName: D.value,
                                            password: G.value,
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
                    ae = !o || j,
                    re = null !== (e = null == q || null === (t = q.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "";
                return re && (re.indexOf(":") > 0 ? (re.substring(0, re.indexOf(":")).trim(), re = re.substring(re.indexOf(":") + 1).trim()) : 0 === re.indexOf(":") && (re = re.substring(1).trim())), !E || P ? i.createElement(v.Z, null, i.createElement(m.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(m.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement(m.qX, {
                    type: "error",
                    title: "Invalid token"
                }, "The link you have followed is not valid. Please check the link or try the process again later.", O && i.createElement(i.Fragment, null, i.createElement("br", null), null == O || null === (Q = O.data) || void 0 === Q || null === (Q = Q.error) || void 0 === Q ? void 0 : Q.message))), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(u.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")))) : T ? i.createElement(v.Z, null, i.createElement(m.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-py-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(m.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), i.createElement("p", null, "Your VRChat account has been upgraded, and your upgrade benefits have been applied."), i.createElement("p", null, "You can now sign in on any platform with your email address, gain Trust Ranks, upload Avatars & Worlds, and more. Have fun!")), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(g.Qj, {
                    to: "/home/login"
                }, "Login")))) : i.createElement(v.Z, null, i.createElement(m.$4, null, "Upgrade Account"), i.createElement("div", {
                    className: "tw-bg-darker-grey tw-w-full sm:tw-w-[500px] tw-pt-9 tw-px-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement("form", {
                    onSubmit: te
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, i.createElement(m.$1, {
                    icon: s.FK,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Upgrade Account"), re && i.createElement(m.qX, {
                    type: "error",
                    title: "Account upgrade error"
                }, re), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Email"), i.createElement(m.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "Email",
                    value: $.value,
                    disabled: !0
                })), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "displayName",
                    className: "tw-mb-2"
                }, "Display Name"), i.createElement(m.II, {
                    type: "text",
                    id: "displayName",
                    name: "displayName",
                    "aria-label": "Desired display name",
                    value: D.value,
                    onChange: ee,
                    disabled: ae,
                    loading: D.checking,
                    success: !D.checking && D.ok,
                    className: "tw-mb-1",
                    isError: D.error
                }), !D.error && i.createElement("p", {
                    className: "tw-text-placeholder-text tw-text-xs tw-mb-0"
                }, "This is the name shown to other users in-app, you may only change your display name once per 90 days."), D.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Display name error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, D.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-3"
                }, i.createElement("label", {
                    htmlFor: "Email",
                    className: "tw-mb-2"
                }, "Password"), i.createElement(m.II, {
                    type: "password",
                    name: "Password",
                    role: "textbox",
                    "aria-label": "Password",
                    disabled: ae,
                    value: G.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        if (H(x(x({}, G), {}, {
                                value: a,
                                ok: null,
                                error: !1
                            })), "" !== a) {
                            var r = "\n    We recommend using a password which is:\n      •   At least 8 characters long\n      •   Unique to this account and not in use anywhere else\n      •   Uses a combination of letters, numbers, and symbols\n      •   Stored in a Password Manager\n    ",
                                n = !1;
                            a.length < 8 ? n = "That password is too short \n ".concat(r) : (0, f.w)(a) && (n = "Please try a more secure password \n ".concat(r));
                            var l = !n;
                            H((function(e) {
                                return x(x({}, e), {}, {
                                    ok: l,
                                    error: n
                                })
                            }))
                        }
                    },
                    isError: G.error
                }), G.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1 tw-whitespace-pre-wrap"
                }, G.error), G.ok && i.createElement(m.II, {
                    type: "password",
                    className: "tw-w-full tw-mt-2",
                    id: "re-enter-password",
                    name: "Re-enter-password",
                    placeholder: "Re-enter password",
                    role: "textbox",
                    "aria-label": "Re-enter password",
                    disabled: ae,
                    value: X.value,
                    onChange: function(e) {
                        Y(x(x({}, X), {}, {
                            value: e.target.value
                        }))
                    },
                    onBlur: function() {
                        return X.value !== G.value ? Y(x(x({}, X), {}, {
                            error: "Passwords do not match"
                        })) : Y(x(x({}, X), {}, {
                            error: null,
                            ok: !0
                        }))
                    },
                    isError: X.error
                }), G.ok && X.error && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Re-entered password error",
                    className: "tw-text-error-message-red tw-text-xs tw-mb-0 tw-mt-1"
                }, X.error)), i.createElement("div", {
                    className: "tw-w-full tw-mb-6 tw-justify-center tw-flex"
                }, i.createElement(m.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    type: "submit",
                    id: "upgrade-form-submit",
                    name: "upgrade-form-submit",
                    loading: A,
                    disabled: ae || !J
                }, "Upgrade Account"))))))
            }
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => s
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
            const s = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    s = (0, n.useState)(null),
                    o = (0, r.Z)(s, 2),
                    c = o[0],
                    i = o[1],
                    w = (0, n.useState)(null),
                    u = (0, r.Z)(w, 2),
                    m = u[0],
                    d = u[1];
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
                    src: null == m ? void 0 : m.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == c ? void 0 : c.worldName) && a && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", c.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        82470: (e, t, a) => {
            a.d(t, {
                w: () => n
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                n = function(e) {
                    return r.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=3f4ef3d4e3a65cb87e37b0896fedbb438ccc59b0a30aa671f06cc2d5cf45b0ff.js.map