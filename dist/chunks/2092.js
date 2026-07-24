"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2092], {
        86361(e, t) {
            var r = "envelope-circle-check",
                a = [],
                n = "e4e8",
                l = "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [640, 512, a, n, l]
            }, t.Kk = t.mw
        },
        22092(e, t, r) {
            r.r(t), r.d(t, {
                default: () => F
            });
            var a = r(64467),
                n = r(10467),
                l = r(82544),
                o = r(82617),
                i = r(85044),
                c = r(86361),
                u = r(54756),
                s = r.n(u),
                f = r(24751),
                d = r(96540),
                m = r(6376),
                w = r(47767),
                p = r(69517),
                b = r.n(p),
                g = r(558),
                x = r(78502),
                v = r(71957),
                y = r(71661),
                h = r(82030),
                _ = r(84212);

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach(function(t) {
                        (0, a.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const F = function() {
                var e = (0, m.wA)(),
                    t = (0, x.cz)().emailTaken,
                    r = (0, w.Zp)(),
                    a = (0, x.uh)("web-test-not-logged-in", {
                        value: "control"
                    }),
                    u = "treatment" === (null == a ? void 0 : a.value),
                    p = (0, x.a$)(),
                    E = p.user,
                    F = p.isFetching,
                    S = p.fetchUser,
                    O = (0, v.Fx)(),
                    A = (0, l.A)(O, 2),
                    C = A[0],
                    N = A[1],
                    j = (N.isError, N.error, d.useState(!1)),
                    M = (0, l.A)(j, 2),
                    D = M[0],
                    $ = M[1],
                    P = d.useState({
                        value: "",
                        taken: !1,
                        error: null,
                        checking: !1,
                        ok: !1
                    }),
                    z = (0, l.A)(P, 2),
                    L = z[0],
                    R = z[1],
                    q = d.useState({
                        value: "",
                        ok: !1
                    }),
                    V = (0, l.A)(q, 2),
                    I = V[0],
                    T = V[1],
                    W = d.useState(""),
                    K = (0, l.A)(W, 2),
                    U = K[0],
                    Y = K[1],
                    Z = d.useState({
                        sent: !1,
                        sending: !1,
                        failed: !1
                    }),
                    Q = (0, l.A)(Z, 2),
                    X = Q[0],
                    B = Q[1],
                    G = d.useState(null),
                    H = (0, l.A)(G, 2),
                    J = H[0],
                    ee = H[1],
                    te = d.useState(!u),
                    re = (0, l.A)(te, 2),
                    ae = re[0],
                    ne = re[1];
                d.useEffect(function() {
                    F || E && null != E && E.id || r("/home/login")
                }, []);
                var le = function() {
                        var e = (0, n.A)(s().mark(function e(r) {
                            var a, n, l, o;
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = r.target.value, n = void 0 === a ? "" : a, R(k(k({}, L), {}, {
                                                value: n
                                            })), "" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (l = null, b()(n) || (l = "This is not a valid email"), !l) {
                                            e.next = 9;
                                            break
                                        }
                                        return R(function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: !1,
                                                ok: !1
                                            })
                                        }), e.abrupt("return");
                                    case 9:
                                        if (E.id) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                        return R(function(e) {
                                            return k(k({}, e), {}, {
                                                checking: !0,
                                                error: l
                                            })
                                        }), e.next = 14, t(n, E.id);
                                    case 14:
                                        if ((o = e.sent) && (l = "This email is already taken"), !l) {
                                            e.next = 19;
                                            break
                                        }
                                        return R(function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: o,
                                                checking: !1,
                                                ok: !1
                                            })
                                        }), e.abrupt("return");
                                    case 19:
                                        R(function(e) {
                                            return k(k({}, e), {}, {
                                                error: l,
                                                taken: o,
                                                checking: !1,
                                                ok: !l && !o
                                            })
                                        });
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    oe = function() {
                        var t = (0, n.A)(s().mark(function t() {
                            var r, a;
                            return s().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return B(k(k({}, X), {}, {
                                            sending: !0
                                        })), t.prev = 1, t.next = 4, e((0, g.nA)());
                                    case 4:
                                        null != (a = t.sent) && null !== (r = a.value) && void 0 !== r && null !== (r = r.data) && void 0 !== r && r.success && (B(function(e) {
                                            return k(k({}, e), {}, {
                                                sent: !0
                                            })
                                        }), setTimeout(function() {
                                            B(function(e) {
                                                return k(k({}, e), {}, {
                                                    sent: !1
                                                })
                                            })
                                        }, 5e3)), t.next = 13;
                                        break;
                                    case 8:
                                        return t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), B(function(e) {
                                            return k(k({}, e), {}, {
                                                sending: !1,
                                                failed: !0
                                            })
                                        }), t.abrupt("return");
                                    case 13:
                                        B(function(e) {
                                            return k(k({}, e), {}, {
                                                sending: !1
                                            })
                                        });
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [1, 8]
                            ])
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    ie = function() {
                        var e = (0, n.A)(s().mark(function e(t) {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.next = 3, S();
                                    case 3:
                                        if (!E.emailVerified) {
                                            e.next = 6;
                                            break
                                        }
                                        return ee(!0), e.abrupt("return", setTimeout(function() {
                                            $(!0), r("/home?prompt=new-account")
                                        }, 1e3));
                                    case 6:
                                        return e.abrupt("return", ee(!1));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return d.createElement(_.A, {
                    showVRCLogo: !u
                }, d.createElement(y.Qc, null, "Email Verification"), d.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit ".concat(u ? "xl:tw-mt-[100px]" : "xl:tw-mt-[200px]")
                }, d.createElement("form", {
                    onSubmit: function() {}
                }, d.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, d.createElement("div", {
                    className: "tw-mb-5"
                }, d.createElement(y.M2, {
                    icon: c.Kk,
                    className: "tw-w-[90px] tw-h-[72px]"
                })), d.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Email Verification"), X.failed && d.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to send verification email"
                }, d.createElement(y.M2, {
                    icon: i.faCircleExclamation
                }), "  Failed to send verification email, please try again."), !1 === J && d.createElement("p", {
                    className: " tw-border-solid tw-border-message-warning tw-border-[1px] tw-text-error-message-red tw-bg-opacity-25 tw-bg-message-warning tw-p-2 tw-rounded-md tw-w-full ",
                    role: "alert",
                    "aria-label": "Failed to verify email"
                }, d.createElement(y.M2, {
                    icon: i.faCircleExclamation
                }), "  Failed to verify, Please check your inbox (or spam folder) to verify your email."), X.sent && d.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Verification Email Sent"
                }, d.createElement(y.M2, {
                    icon: o.faCircleCheck
                }), "  We’ve resent you the verification email."), J && d.createElement("p", {
                    className: " tw-border-solid tw-border-[1px] tw-border-message-success tw-text-message-success tw-bg-opacity-25 tw-bg-message-success tw-p-2 tw-w-full tw-rounded-md ",
                    role: "alert",
                    "aria-label": "Email verified"
                }, d.createElement(y.M2, {
                    icon: o.faCircleCheck
                }), "  Your email has been updated."), (null == E ? void 0 : E.obfuscatedEmail) && d.createElement("p", {
                    className: "tw-text-center tw-mb-0"
                }, "We've sent an email to ", d.createElement("strong", null, null == E ? void 0 : E.obfuscatedEmail)), d.createElement("p", {
                    className: "tw-text-center"
                }, "Please check your inbox (or spam folder) to verify your email, it may take a few minutes.  ", d.createElement("span", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: function(e) {
                        "Enter" === e.key && oe()
                    },
                    onClick: oe,
                    "aria-label": "Resend Verification Email",
                    className: "tw-text-link-highlight tw-cursor-pointer tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-offset-2 tw-focus:tw-ring-blue-500"
                }, "Can't find the email? Send again")), d.createElement("div", {
                    className: "tw-text-center tw-text-subtext-grey"
                }, d.createElement(y.$n, {
                    onClick: ie,
                    "aria-label": "Verified my email",
                    className: "tw-w-60 tw-my-3",
                    type: "submit",
                    loading: D
                }, "Okay, I've Verified My Email!")), d.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mt-3"
                }), !u && d.createElement("p", {
                    className: "tw-text-left tw-text-subtext-grey tw-w-full tw-text-center tw-mt-3"
                }, "If you entered your email address incorrectly, you can update it here"), u && d.createElement("p", {
                    className: "tw-text-left tw-text-subtext-grey tw-w-full tw-text-center tw-mt-3"
                }, "If you entered your email address incorrectly, you can update it ", d.createElement("a", {
                    href: "#",
                    onClick: function() {
                        return ne(!0)
                    }
                }, "here")), ae && d.createElement(d.Fragment, null, d.createElement(y.pd, {
                    type: "text",
                    className: "tw-w-full",
                    id: "email",
                    name: "email",
                    "aria-label": "New Email",
                    placeholder: "New Email",
                    value: L.value,
                    onChange: le,
                    loading: L.checking
                }), L.value.includes("@") && L.error && d.createElement(h.Fc, {
                    role: "alert",
                    "aria-label": "Email Error"
                }, L.error), L.ok && d.createElement(y.pd, {
                    type: "email",
                    id: "emailAgain",
                    inputMode: "email",
                    name: "emailAgain",
                    "aria-label": "Re-Enter Email",
                    className: "tw-mt-2 tw-w-full",
                    placeholder: "Re-Enter Email",
                    value: I.value,
                    onChange: function(e) {
                        var t = e.target.value,
                            r = void 0 === t ? "" : t,
                            a = L.value && L.value === r;
                        T({
                            value: r,
                            ok: a
                        })
                    }
                }), L.ok && (I.ok ? d.createElement(y.pd, {
                    type: "password",
                    id: "password",
                    name: "password",
                    className: "tw-mt-2 tw-w-full",
                    role: "textbox",
                    "aria-label": "Enter Your Password",
                    placeholder: "Enter Your Password",
                    value: U,
                    onChange: function(e) {
                        var t = e.target.value;
                        return Y(void 0 === t ? "" : t)
                    }
                }) : d.createElement(h.Fc, {
                    role: "alert",
                    "aria-label": "Emails do not match"
                }, "Emails do not match")), L.ok && I.ok && U && d.createElement(y.$n, {
                    onClick: function(e) {
                        e.preventDefault(), L.ok && I.ok && U && C({
                            userId: E.id,
                            email: L.value,
                            password: U
                        })
                    },
                    className: "tw-w-60 tw-mt-6 tw-mb-12",
                    type: "submit",
                    loading: !1
                }, "Update Email")), d.createElement(f.z9, {
                    role: "link",
                    state: {
                        logout: !0
                    },
                    title: "Logout",
                    to: "/home/login",
                    className: "tw-w-60 tw-mt-5",
                    isSecondary: !0
                }, "Log Out and Start Over")))))
            }
        },
        46255(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var r, a;
                (0, n.default)(e), "object" === l(t) ? (r = t.min || 0, a = t.max) : (r = arguments[1], a = arguments[2]);
                var o = encodeURI(e).split(/%..|./).length - 1;
                return o >= r && (void 0 === a || o <= a)
            };
            var a, n = (a = r(83399)) && a.__esModule ? a : {
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
        69517(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if ((0, a.default)(e), (t = (0, c.default)(t, s)).require_display_name || t.allow_display_name) {
                    var r = e.match(f);
                    if (r) {
                        var u = r[1];
                        if (e = e.replace(u, "").replace(/(^<|>$)/g, ""), u.endsWith(" ") && (u = u.slice(0, -1)), ! function(e) {
                                var t = e.replace(/^"(.+)"$/, "$1");
                                if (!t.trim()) return !1;
                                if (/[\.";<>]/.test(t)) {
                                    if (t === e) return !1;
                                    if (!(t.split('"').length === t.split('\\"').length)) return !1
                                }
                                return !0
                            }(u)) return !1
                    } else if (t.require_display_name) return !1
                }
                if (!t.ignore_max_length && e.length > 254) return !1;
                var g = e.split("@"),
                    x = g.pop(),
                    v = x.toLowerCase();
                if (t.host_blacklist.length > 0 && (0, n.default)(v, t.host_blacklist)) return !1;
                if (t.host_whitelist.length > 0 && !(0, n.default)(v, t.host_whitelist)) return !1;
                var y = g.join("@");
                if (t.domain_specific_validation && ("gmail.com" === v || "googlemail.com" === v)) {
                    var h = (y = y.toLowerCase()).split("+")[0];
                    if (!(0, l.default)(h.replace(/\./g, ""), {
                            min: 6,
                            max: 30
                        })) return !1;
                    for (var _ = h.split("."), E = 0; E < _.length; E++)
                        if (!m.test(_[E])) return !1
                }
                if (!(!1 !== t.ignore_max_length || (0, l.default)(y, {
                        max: 64
                    }) && (0, l.default)(x, {
                        max: 254
                    }))) return !1;
                if (!(0, o.default)(x, {
                        require_tld: t.require_tld,
                        ignore_max_length: t.ignore_max_length,
                        allow_underscores: t.allow_underscores
                    })) {
                    if (!t.allow_ip_domain) return !1;
                    if (!(0, i.default)(x)) {
                        if (!x.startsWith("[") || !x.endsWith("]")) return !1;
                        var k = x.slice(1, -1);
                        if (0 === k.length || !(0, i.default)(k)) return !1
                    }
                }
                if (t.blacklisted_chars && -1 !== y.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"))) return !1;
                if ('"' === y[0] && '"' === y[y.length - 1]) return y = y.slice(1, y.length - 1), t.allow_utf8_local_part ? b.test(y) : w.test(y);
                for (var F = t.allow_utf8_local_part ? p : d, S = y.split("."), O = 0; O < S.length; O++)
                    if (!F.test(S[O])) return !1;
                return !0
            };
            var a = u(r(83399)),
                n = u(r(81572)),
                l = u(r(46255)),
                o = u(r(57658)),
                i = u(r(35372)),
                c = u(r(93610));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
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
                f = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
                d = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
                m = /^[a-z\d]+$/,
                w = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
                p = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
                b = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
            e.exports = t.default, e.exports.default = t.default
        },
        57658(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                (0, a.default)(e), (t = (0, n.default)(t, o)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
                var r = e.split("."),
                    l = r[r.length - 1];
                if (t.require_tld) {
                    if (r.length < 2) return !1;
                    if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)) return !1;
                    if (/\s/.test(l)) return !1
                }
                if (!t.allow_numeric_tld && /^\d+$/.test(l)) return !1;
                return r.every(function(e) {
                    return !(e.length > 63 && !t.ignore_max_length) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e)))))
                })
            };
            var a = l(r(83399)),
                n = l(r(93610));

            function l(e) {
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
        35372(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, n.default)(t);
                var a = ("object" === l(r) ? r.version : arguments[1]) || "";
                if (!a) return e(t, {
                    version: 4
                }) || e(t, {
                    version: 6
                });
                if ("4" === a.toString()) return c.test(t);
                if ("6" === a.toString()) return s.test(t);
                return !1
            };
            var a, n = (a = r(83399)) && a.__esModule ? a : {
                default: a
            };

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            var o = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                i = "(".concat(o, "[.]){3}").concat(o),
                c = new RegExp("^".concat(i, "$")),
                u = "(?:[0-9a-fA-F]{1,4})",
                s = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(i, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(i, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(i, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(i, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(i, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(i, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(i, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
            e.exports = t.default, e.exports.default = t.default
        },
        81572(e, t) {
            function r(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    if (e === n || r(n) && n.test(e)) return !0
                }
                return !1
            }, e.exports = t.default, e.exports.default = t.default
        },
        93610(e, t) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                "object" === r(e) && null !== e || (e = {});
                for (var a in t) void 0 === e[a] && (e[a] = t[a]);
                return e
            }, e.exports = t.default, e.exports.default = t.default
        }
    }
]);
//# sourceMappingURL=3d7ea0be967b691f334d3ede08a6ed59b88ecbdaa812881de0952cded1723c1c.js.map