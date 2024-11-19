"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6826], {
        80916: (e, t) => {
            var a = "envelope-circle-check",
                r = [],
                l = "e4e8",
                n = "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [640, 512, r, l, n]
            }, t.sl = t.DF
        },
        84176: (e, t) => {
            var a = [128273],
                r = "f084",
                l = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.DF = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, a, r, l]
            }, t.DD = t.DF
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var r = a(54546),
                l = a(67294),
                n = [{
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
                    o = (0, l.useState)(null),
                    s = (0, r.Z)(o, 2),
                    c = s[0],
                    u = s[1],
                    i = (0, l.useState)(null),
                    w = (0, r.Z)(i, 2),
                    d = w[0],
                    m = w[1];
                (0, l.useEffect)((function() {
                    if (null === c) u(n[0]);
                    else {
                        var e = f(c);
                        setTimeout((function() {
                            return u(e)
                        }), 1e4), m(e)
                    }
                }), [c]);
                var f = function(e) {
                    var t = n.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === n.length - 1 ? n[0] : n[t + 1]
                };
                return l.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === c ? "none" : "url(".concat(c.imagePath, ")")
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
                    src: null == d ? void 0 : d.imagePath,
                    alt: "VRChat"
                }))), l.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == c ? void 0 : c.worldName) && a && l.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "World:"), " ", c.worldName), l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "Author:"), " ", c.authorName)))
            }
        },
        16826: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => y
            });
            var r = a(15861),
                l = a(4942),
                n = a(54546),
                o = a(84176),
                s = a(80916),
                c = a(6811),
                u = a(64687),
                i = a.n(u),
                w = a(22202),
                d = a(60006),
                m = a(67294),
                f = a(79655),
                p = a(83868),
                h = a.n(p),
                x = a(82470),
                g = a(14411),
                v = a(36678);

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

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        (0, l.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const y = function() {
                var e, t, a = m.useState({
                        value: "",
                        ok: null
                    }),
                    l = (0, n.Z)(a, 2),
                    u = l[0],
                    p = l[1],
                    b = m.useState({
                        value: "",
                        ok: null,
                        error: "",
                        again: "",
                        againOk: null
                    }),
                    y = (0, n.Z)(b, 2),
                    E = y[0],
                    k = y[1],
                    N = m.useState(null),
                    F = (0, n.Z)(N, 2),
                    P = F[0],
                    j = F[1],
                    O = m.useState(!1),
                    S = (0, n.Z)(O, 2),
                    D = S[0],
                    z = S[1],
                    q = m.useState(!1),
                    $ = (0, n.Z)(q, 2),
                    M = $[0],
                    C = $[1],
                    Z = (0, w.v1)(),
                    L = (0, n.Z)(Z, 2),
                    A = L[0],
                    R = L[1],
                    I = R.isLoading,
                    T = R.isError,
                    U = (0, w.c$)(),
                    W = (0, n.Z)(U, 2),
                    Y = W[0],
                    B = W[1],
                    G = B.isLoading,
                    V = B.isError,
                    H = null !== (e = new URL(window.location.href).searchParams.get("verify_email")) && void 0 !== e && e,
                    J = null !== (t = new URL(window.location.href).searchParams.get("id")) && void 0 !== t && t,
                    Q = !(!H || !J),
                    X = function() {
                        var e = (0, r.Z)(i().mark((function e(t) {
                            var a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (u.ok) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t.preventDefault(), e.prev = 3, e.next = 6, A({
                                            email: u.value
                                        }).unwrap();
                                    case 6:
                                        z(!0), e.next = 14;
                                        break;
                                    case 9:
                                        if (e.prev = 9, e.t0 = e.catch(3), 429 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", j("Too many requests, please try again later."));
                                    case 13:
                                        return e.abrupt("return", j((null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) || "Something went wrong."));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = (0, r.Z)(i().mark((function e(t) {
                            var a, r;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, e.next = 4, Y({
                                            emailToken: H,
                                            password: E.value,
                                            id: J
                                        }).unwrap();
                                    case 4:
                                        C(!0), e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(1), C(!1), 429 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", j("Too many requests, please try again later."));
                                    case 12:
                                        if (400 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || '"Incorrect parameters"' !== (null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.abrupt("return", j("Please verify the password recovery link has not already been used!"));
                                    case 14:
                                        return e.abrupt("return", j((null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "Something went wrong."));
                                    case 15:
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
                    }();
                if (M) return m.createElement(v.Z, null, m.createElement(g.$4, null, "Reset Password"), m.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, m.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, m.createElement(g.$1, {
                    icon: c.f8,
                    className: "tw-w-[72px] tw-h-[72px] tw-mb-6"
                }), m.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Successful password reset!"), m.createElement("p", {
                    className: "tw-text-left tw-mb-9"
                }, "You can now use your new password to log in to your account!"), m.createElement(d.Qj, {
                    role: "link",
                    to: "/home/login",
                    className: "tw-mb-10"
                }, "Login"))));
                return m.createElement(v.Z, null, m.createElement(g.$4, null, "Reset Password"), m.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit sm:tw-mt-[200px] tw-mt-0"
                }, m.createElement("form", {
                    id: "password-recovery-form",
                    name: "password-recovery-form",
                    onSubmit: function(e) {
                        e.preventDefault(), Q ? K(e) : X(e)
                    }
                }, m.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, m.createElement("div", {
                    className: "tw-mb-5"
                }, D && m.createElement(g.$1, {
                    icon: s.sl,
                    className: "tw-w-[72px] tw-h-[72px]"
                }), !D && m.createElement(g.$1, {
                    icon: o.DD,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), m.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, D ? "Check Your Email" : "Reset Password"), !D && !Q && m.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, m.createElement("div", {
                    className: "tw-w-full"
                }, m.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Please enter the email address associated with your account.")), m.createElement(g.II, {
                    type: "email",
                    inputMode: "email",
                    "aria-label": "Email",
                    value: u.value,
                    placeholder: "Email",
                    className: "tw-w-full",
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        p(_(_({}, u), {}, {
                            value: a,
                            ok: null != a && "" !== u ? h()(a) : null,
                            error: !1
                        })), z(!1)
                    },
                    onBlur: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        return p(_(_({}, u), {}, {
                            error: !h()(a)
                        }))
                    },
                    required: !0,
                    isError: u.error
                }), u.error && m.createElement("p", {
                    role: "alert",
                    "aria-label": "Email Error",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre tw-mt-2"
                }, "Invalid Email Address")), Q && m.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, m.createElement("div", {
                    className: "tw-w-full"
                }, m.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Almost there! Type your new password and you'll be all set.")), m.createElement(g.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    className: "mt-2",
                    "aria-label": "New Password",
                    role: "textbox",
                    placeholder: "New Password",
                    value: E.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        if (k(_(_({}, E), {}, {
                                value: a,
                                ok: null,
                                error: !1,
                                againOk: null
                            })), "" !== a) {
                            var r = !1;
                            a.length < 8 ? r = "That password is too short" : (0, x.w)(a) && (r = "Please try a more secure password");
                            var l = !r;
                            k((function(e) {
                                return _(_({}, e), {}, {
                                    ok: l,
                                    error: r,
                                    againOk: l && "" !== E.again && E.again === a
                                })
                            }))
                        }
                    },
                    isError: E.error,
                    required: !0
                }), m.createElement(g.II, {
                    type: "password",
                    id: "password-again",
                    name: "password-again",
                    className: "mt-2",
                    "aria-label": "Re-Enter Password",
                    role: "textbox",
                    placeholder: "Re-Enter Password",
                    value: E.again,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        if (k(_(_({}, E), {}, {
                                again: a,
                                againOk: null
                            })), "" !== a && E.ok) {
                            var r = a === E.value;
                            k((function(e) {
                                return _(_({}, e), {}, {
                                    againOk: r,
                                    error: !r && "Passwords do not match"
                                })
                            }))
                        }
                    },
                    isError: E.error,
                    xs: !0,
                    required: !0
                }), E.error && m.createElement("p", {
                    role: "alert",
                    "aria-label": "Password Error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-2"
                }, E.error)), m.createElement("div", {
                    className: D ? "tw-w-full tw-flex tw-flex-col" : "tw-hidden",
                    role: "alert",
                    "aria-label": "Check your email"
                }, m.createElement("p", {
                    className: "tw-text-center tw-mb-2"
                }, "If we have an account associated with ", m.createElement("strong", null, u.value), ", we have sent you a password reset link!"), m.createElement("p", {
                    className: "tw-text-subtext-grey"
                }, "You may need to check your spam folder if you don't see it within a few minutes.")), (T || V) && m.createElement("p", {
                    role: "alert",
                    "aria-label": "Failed to recover",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-2"
                }, P || "Oops, that didn't work."), Q && m.createElement(g.zx, {
                    disabled: !E.ok || !E.againOk,
                    className: "tw-mt-5 tw-w-60",
                    loading: G,
                    type: "submit"
                }, "Change Password"), !D && !Q && m.createElement(g.zx, {
                    disabled: !u.ok || I || T,
                    className: "tw-mt-5 tw-w-60",
                    loading: I,
                    type: "submit"
                }, "Reset your password"), m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, m.createElement(f.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login")), Q && m.createElement("div", null, m.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), m.createElement("h4", {
                    className: "tw-text-base tw-text-subtext-grey tw-mt-5 tw-mb-3"
                }, "Use a strong password"), m.createElement("p", {
                    className: "tw-text-subtext-grey tw-text-base tw-mb-0"
                }, "We recommend using a password which is:"), m.createElement("ul", {
                    className: "tw-text-subtext-grey tw-text-base"
                }, m.createElement("li", null, "At least 8 characters long"), m.createElement("li", null, "Unique to this account and not in use anywhere else"), m.createElement("li", null, "Uses a combination of letters, numbers and symbols"), m.createElement("li", null, "Stored in a Password Manager")))))))
            }
        },
        82470: (e, t, a) => {
            a.d(t, {
                w: () => l
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                l = function(e) {
                    return r.has(e.toLowerCase())
                }
        },
        93235: (e, t, a) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var a, r;
                (0, l.default)(e), "object" === n(t) ? (a = t.min || 0, r = t.max) : (a = arguments[1], r = arguments[2]);
                var o = encodeURI(e).split(/%..|./).length - 1;
                return o >= a && (void 0 === r || o <= r)
            };
            var r, l = (r = a(65571)) && r.__esModule ? r : {
                default: r
            };

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            e.exports = t.default, e.exports.default = t.default
        },
        83868: (e, t, a) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if ((0, r.default)(e), (t = (0, s.default)(t, u)).require_display_name || t.allow_display_name) {
                    var a = e.match(i);
                    if (a) {
                        var c = a[1];
                        if (e = e.replace(c, "").replace(/(^<|>$)/g, ""), c.endsWith(" ") && (c = c.slice(0, -1)), ! function(e) {
                                var t = e.replace(/^"(.+)"$/, "$1");
                                if (!t.trim()) return !1;
                                if (/[\.";<>]/.test(t)) {
                                    if (t === e) return !1;
                                    if (!(t.split('"').length === t.split('\\"').length)) return !1
                                }
                                return !0
                            }(c)) return !1
                    } else if (t.require_display_name) return !1
                }
                if (!t.ignore_max_length && e.length > h) return !1;
                var x = e.split("@"),
                    g = x.pop(),
                    v = g.toLowerCase();
                if (t.host_blacklist.includes(v)) return !1;
                if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(v)) return !1;
                var b = x.join("@");
                if (t.domain_specific_validation && ("gmail.com" === v || "googlemail.com" === v)) {
                    var _ = (b = b.toLowerCase()).split("+")[0];
                    if (!(0, l.default)(_.replace(/\./g, ""), {
                            min: 6,
                            max: 30
                        })) return !1;
                    for (var y = _.split("."), E = 0; E < y.length; E++)
                        if (!d.test(y[E])) return !1
                }
                if (!(!1 !== t.ignore_max_length || (0, l.default)(b, {
                        max: 64
                    }) && (0, l.default)(g, {
                        max: 254
                    }))) return !1;
                if (!(0, n.default)(g, {
                        require_tld: t.require_tld,
                        ignore_max_length: t.ignore_max_length,
                        allow_underscores: t.allow_underscores
                    })) {
                    if (!t.allow_ip_domain) return !1;
                    if (!(0, o.default)(g)) {
                        if (!g.startsWith("[") || !g.endsWith("]")) return !1;
                        var k = g.slice(1, -1);
                        if (0 === k.length || !(0, o.default)(k)) return !1
                    }
                }
                if ('"' === b[0]) return b = b.slice(1, b.length - 1), t.allow_utf8_local_part ? p.test(b) : m.test(b);
                for (var N = t.allow_utf8_local_part ? f : w, F = b.split("."), P = 0; P < F.length; P++)
                    if (!N.test(F[P])) return !1;
                if (t.blacklisted_chars && -1 !== b.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"))) return !1;
                return !0
            };
            var r = c(a(65571)),
                l = c(a(93235)),
                n = c(a(10221)),
                o = c(a(61028)),
                s = c(a(84808));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = {
                    allow_display_name: !1,
                    allow_underscores: !1,
                    require_display_name: !1,
                    allow_utf8_local_part: !0,
                    require_tld: !0,
                    blacklisted_chars: "",
                    ignore_max_length: !1,
                    host_blacklist: [],
                    host_whitelist: []
                },
                i = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
                w = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
                d = /^[a-z\d]+$/,
                m = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
                f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
                p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
                h = 254;
            e.exports = t.default, e.exports.default = t.default
        },
        10221: (e, t, a) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                (0, r.default)(e), (t = (0, l.default)(t, o)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
                var a = e.split("."),
                    n = a[a.length - 1];
                if (t.require_tld) {
                    if (a.length < 2) return !1;
                    if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(n)) return !1;
                    if (/\s/.test(n)) return !1
                }
                if (!t.allow_numeric_tld && /^\d+$/.test(n)) return !1;
                return a.every((function(e) {
                    return !(e.length > 63 && !t.ignore_max_length) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e)))))
                }))
            };
            var r = n(a(65571)),
                l = n(a(84808));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_numeric_tld: !1,
                allow_wildcard: !1,
                ignore_max_length: !1
            };
            e.exports = t.default, e.exports.default = t.default
        },
        61028: (e, t, a) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if ((0, l.default)(t), !(a = String(a))) return e(t, 4) || e(t, 6);
                if ("4" === a) return s.test(t);
                if ("6" === a) return u.test(t);
                return !1
            };
            var r, l = (r = a(65571)) && r.__esModule ? r : {
                default: r
            };
            var n = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                o = "(".concat(n, "[.]){3}").concat(n),
                s = new RegExp("^".concat(o, "$")),
                c = "(?:[0-9a-fA-F]{1,4})",
                u = new RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(o, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(o, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(o, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(o, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(o, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(o, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(o, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
            e.exports = t.default, e.exports.default = t.default
        },
        65571: (e, t) => {
            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (!("string" == typeof e || e instanceof String)) {
                    var t = a(e);
                    throw null === e ? t = "null" : "object" === t && (t = e.constructor.name), new TypeError("Expected a string but received a ".concat(t))
                }
            }, e.exports = t.default, e.exports.default = t.default
        },
        84808: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                for (var a in t) void 0 === e[a] && (e[a] = t[a]);
                return e
            }, e.exports = t.default, e.exports.default = t.default
        }
    }
]);
//# sourceMappingURL=44ac3e2c3e2814609a78f062e7956025cce2f7cbf59fa511d13e0b81cdb1e508.js.map