"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2295], {
        80916: (e, t) => {
            var r = "envelope-circle-check",
                a = [],
                n = "e4e8",
                l = "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, n, l]
            }, t.sl = t.DF
        },
        42295: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => F
            });
            var a = r(4942),
                n = r(15861),
                l = r(54546),
                i = r(16686),
                o = r(20495),
                c = r(80916),
                u = r(64687),
                s = r.n(u),
                f = r(60006),
                d = r(67294),
                m = r(32981),
                w = r(89250),
                p = r(83868),
                x = r.n(p),
                g = r(5513),
                b = r(17383),
                v = r(62437),
                h = r(96985),
                _ = r(41400),
                y = r(13887);

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const F = function() {
                var e = (0, m.I0)(),
                    t = (0, b.sc)().emailTaken,
                    r = (0, w.s0)(),
                    a = (0, b.Tu)(),
                    u = a.user,
                    p = a.isFetching,
                    E = a.fetchUser,
                    F = (0, v.X6)(),
                    N = (0, l.Z)(F, 2),
                    O = N[0],
                    C = N[1],
                    $ = (C.isError, C.error, d.useState(!1)),
                    D = (0, l.Z)($, 2),
                    j = D[0],
                    S = D[1],
                    P = d.useState({
                        value: "",
                        taken: !1,
                        error: null,
                        checking: !1,
                        ok: !1
                    }),
                    Z = (0, l.Z)(P, 2),
                    z = Z[0],
                    M = Z[1],
                    A = d.useState({
                        value: "",
                        ok: !1
                    }),
                    I = (0, l.Z)(A, 2),
                    q = I[0],
                    L = I[1],
                    R = d.useState(""),
                    T = (0, l.Z)(R, 2),
                    V = T[0],
                    W = T[1],
                    U = d.useState({
                        sent: !1,
                        sending: !1,
                        failed: !1
                    }),
                    Y = (0, l.Z)(U, 2),
                    X = Y[0],
                    K = Y[1],
                    Q = d.useState(null),
                    B = (0, l.Z)(Q, 2),
                    G = B[0],
                    H = B[1];
                d.useEffect((function() {
                    p || u && null != u && u.id || r("/home/login")
                }), []);
                var J = function() {
                        var e = (0, n.Z)(s().mark((function e(r) {
                            var a, n, l, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = r.target.value, n = void 0 === a ? "" : a, M(k(k({}, z), {}, {
                                                value: n
                                            })), "" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (l = null, x()(n) || (l = "This is not a valid email"), !l) {
                                            e.next = 9;
                                            break
                                        }
                                        return M((function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: !1,
                                                ok: !1
                                            })
                                        })), e.abrupt("return");
                                    case 9:
                                        if (u.id) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                        return M((function(e) {
                                            return k(k({}, e), {}, {
                                                checking: !0,
                                                error: l
                                            })
                                        })), e.next = 14, t(n, u.id);
                                    case 14:
                                        if ((i = e.sent) && (l = "This email is already taken"), !l) {
                                            e.next = 19;
                                            break
                                        }
                                        return M((function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: i,
                                                checking: !1,
                                                ok: !1
                                            })
                                        })), e.abrupt("return");
                                    case 19:
                                        M((function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: i,
                                                checking: !1,
                                                ok: !l && !i
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
                        var t = (0, n.Z)(s().mark((function t() {
                            var r, a;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return K(k(k({}, X), {}, {
                                            sending: !0
                                        })), t.prev = 1, t.next = 4, e((0, g.A8)());
                                    case 4:
                                        null != (a = t.sent) && null !== (r = a.value) && void 0 !== r && null !== (r = r.data) && void 0 !== r && r.success && (K((function(e) {
                                            return k(k({}, e), {}, {
                                                sent: !0
                                            })
                                        })), setTimeout((function() {
                                            K((function(e) {
                                                return k(k({}, e), {}, {
                                                    sent: !1
                                                })
                                            }))
                                        }), 5e3)), t.next = 13;
                                        break;
                                    case 8:
                                        return t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), K((function(e) {
                                            return k(k({}, e), {}, {
                                                sending: !1,
                                                failed: !0
                                            })
                                        })), t.abrupt("return");
                                    case 13:
                                        K((function(e) {
                                            return k(k({}, e), {}, {
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
                        var e = (0, n.Z)(s().mark((function e(t) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, E();
                                    case 3:
                                        if (!u.emailVerified) {
                                            e.next = 6;
                                            break
                                        }
                                        return H(!0), e.abrupt("return", setTimeout((function() {
                                            S(!0), r("/home")
                                        }), 1e3));
                                    case 6:
                                        return e.abrupt("return", H(!1));
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
                return d.createElement(y.Z, null, d.createElement(h.$4, null, "Email Verification"), d.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, d.createElement("form", {
                    onSubmit: function() {}
                }, d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, d.createElement("div", {
                    className: "tw-mb-5"
                }, d.createElement(h.$1, {
                    icon: c.sl,
                    className: "tw-w-[90px] tw-h-[72px]"
                })), d.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Email Verification"), X.failed && d.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to send verification email"
                }, d.createElement(h.$1, {
                    icon: o.faCircleExclamation
                }), "  Failed to send verification email, please try again."), !1 === G && d.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to verify email"
                }, d.createElement(h.$1, {
                    icon: o.faCircleExclamation
                }), "  Failed to verify, Please check your inbox (or spam folder) to verify your email."), X.sent && d.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Verification Email Sent"
                }, d.createElement(h.$1, {
                    icon: i.faCircleCheck
                }), "  We’ve resent you the verification email."), G && d.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Email verified"
                }, d.createElement(h.$1, {
                    icon: i.faCircleCheck
                }), "  Your email has been updated."), (null == u ? void 0 : u.obfuscatedEmail) && d.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "We've sent an email to ", d.createElement("strong", null, null == u ? void 0 : u.obfuscatedEmail)), d.createElement("p", {
                    className: "tw-text-center"
                }, "Please check your inbox (or spam folder) to verify your email, it may take a few minutes."), d.createElement("div", {
                    className: "tw-text-center tw-text-subtext-grey"
                }, d.createElement("span", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: function(e) {
                        "Enter" === e.key && ee()
                    },
                    onClick: ee,
                    "aria-label": "Resend Verification Email",
                    className: "tw-text-link-highlight tw-cursor-pointer tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-offset-2 tw-focus:tw-ring-blue-500"
                }, "Can't find the email? Send again")), d.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), d.createElement("p", {
                    className: "tw-text-left tw-text-subtext-grey tw-w-full"
                }, "If you entered your email address incorrectly, you can update it here"), d.createElement(h.II, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    placeholder: "New Email",
                    value: z.value,
                    onChange: J,
                    loading: z.checking
                }), z.value.includes("@") && z.error && d.createElement(_.bZ, {
                    role: "alert",
                    "aria-label": "Email Error"
                }, z.error), z.ok && d.createElement(h.II, {
                    type: "email",
                    id: "emailAgain",
                    inputMode: "email",
                    name: "emailAgain",
                    "aria-label": "Re-Enter Email",
                    className: "tw-mt-2 tw-w-full",
                    placeholder: "Re-Enter Email",
                    value: q.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t,
                            a = z.value && z.value === r;
                        L({
                            value: r,
                            ok: a
                        })
                    }
                }), z.ok && (q.ok ? d.createElement(h.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    className: "tw-mt-2 tw-w-full",
                    role: "textbox",
                    "aria-label": "Enter Your Password",
                    placeholder: "Enter Your Password",
                    value: V,
                    onChange: function(e) {
                        var t = e.target.value;
                        return W(void 0 === t ? "" : t)
                    }
                }) : d.createElement(_.bZ, {
                    role: "alert",
                    "aria-label": "Emails do not match"
                }, "Emails do not match")), z.ok && q.ok && V && d.createElement(h.zx, {
                    onClick: function(e) {
                        e.preventDefault(), z.ok && q.ok && V && O({
                            userId: u.id,
                            email: z.value,
                            password: V
                        })
                    },
                    className: "tw-w-60 tw-mt-6 tw-mb-12",
                    type: "submit",
                    loading: !1
                }, "Update Email"), d.createElement(h.zx, {
                    onClick: te,
                    "aria-label": "Verified my email",
                    className: "tw-w-60 tw-mt-6 tw-mb-12",
                    type: "submit",
                    loading: j
                }, "Okay, I've verified my Email!"), d.createElement(f.Qj, {
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
        93235: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var r, a;
                (0, n.default)(e), "object" === l(t) ? (r = t.min || 0, a = t.max) : (r = arguments[1], a = arguments[2]);
                var i = encodeURI(e).split(/%..|./).length - 1;
                return i >= r && (void 0 === a || i <= a)
            };
            var a, n = (a = r(65571)) && a.__esModule ? a : {
                default: a
            };

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            e.exports = t.default, e.exports.default = t.default
        },
        83868: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if ((0, a.default)(e), (t = (0, o.default)(t, u)).require_display_name || t.allow_display_name) {
                    var r = e.match(s);
                    if (r) {
                        var c = r[1];
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
                if (!t.ignore_max_length && e.length > x) return !1;
                var g = e.split("@"),
                    b = g.pop(),
                    v = b.toLowerCase();
                if (t.host_blacklist.includes(v)) return !1;
                if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(v)) return !1;
                var h = g.join("@");
                if (t.domain_specific_validation && ("gmail.com" === v || "googlemail.com" === v)) {
                    var _ = (h = h.toLowerCase()).split("+")[0];
                    if (!(0, n.default)(_.replace(/\./g, ""), {
                            min: 6,
                            max: 30
                        })) return !1;
                    for (var y = _.split("."), E = 0; E < y.length; E++)
                        if (!d.test(y[E])) return !1
                }
                if (!(!1 !== t.ignore_max_length || (0, n.default)(h, {
                        max: 64
                    }) && (0, n.default)(b, {
                        max: 254
                    }))) return !1;
                if (!(0, l.default)(b, {
                        require_tld: t.require_tld,
                        ignore_max_length: t.ignore_max_length,
                        allow_underscores: t.allow_underscores
                    })) {
                    if (!t.allow_ip_domain) return !1;
                    if (!(0, i.default)(b)) {
                        if (!b.startsWith("[") || !b.endsWith("]")) return !1;
                        var k = b.slice(1, -1);
                        if (0 === k.length || !(0, i.default)(k)) return !1
                    }
                }
                if ('"' === h[0]) return h = h.slice(1, h.length - 1), t.allow_utf8_local_part ? p.test(h) : m.test(h);
                for (var F = t.allow_utf8_local_part ? w : f, N = h.split("."), O = 0; O < N.length; O++)
                    if (!F.test(N[O])) return !1;
                if (t.blacklisted_chars && -1 !== h.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"))) return !1;
                return !0
            };
            var a = c(r(65571)),
                n = c(r(93235)),
                l = c(r(10221)),
                i = c(r(61028)),
                o = c(r(84808));

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
                s = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
                f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
                d = /^[a-z\d]+$/,
                m = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
                w = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
                p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
                x = 254;
            e.exports = t.default, e.exports.default = t.default
        },
        10221: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                (0, a.default)(e), (t = (0, n.default)(t, i)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
                var r = e.split("."),
                    l = r[r.length - 1];
                if (t.require_tld) {
                    if (r.length < 2) return !1;
                    if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)) return !1;
                    if (/\s/.test(l)) return !1
                }
                if (!t.allow_numeric_tld && /^\d+$/.test(l)) return !1;
                return r.every((function(e) {
                    return !(e.length > 63 && !t.ignore_max_length) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e)))))
                }))
            };
            var a = l(r(65571)),
                n = l(r(84808));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_numeric_tld: !1,
                allow_wildcard: !1,
                ignore_max_length: !1
            };
            e.exports = t.default, e.exports.default = t.default
        },
        61028: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if ((0, n.default)(t), !(r = String(r))) return e(t, 4) || e(t, 6);
                if ("4" === r) return o.test(t);
                if ("6" === r) return u.test(t);
                return !1
            };
            var a, n = (a = r(65571)) && a.__esModule ? a : {
                default: a
            };
            var l = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                i = "(".concat(l, "[.]){3}").concat(l),
                o = new RegExp("^".concat(i, "$")),
                c = "(?:[0-9a-fA-F]{1,4})",
                u = new RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(i, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(i, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(i, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(i, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(i, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(i, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(i, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
            e.exports = t.default, e.exports.default = t.default
        },
        84808: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                for (var r in t) void 0 === e[r] && (e[r] = t[r]);
                return e
            }, e.exports = t.default, e.exports.default = t.default
        }
    }
]);
//# sourceMappingURL=a2b24aee39c822701651d5691aea2a042decd64c2af71062863a20e97910d9e3.js.map