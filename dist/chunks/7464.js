"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7464], {
        32110(e, t) {
            var n = [128273],
                a = "f084",
                r = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.mw = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, n, a, r]
            }, t.bM = t.mw
        },
        69629(e, t) {
            var n = "paper-plane",
                a = [61913],
                r = "f1d8",
                i = "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, a, r, i]
            }, t.is = t.mw
        },
        48645(e, t, n) {
            var a = n(82628);
            t.mw = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.QJ = t.mw, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        67464(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var a = n(15902),
                r = n(96540),
                i = n(194),
                l = n(29281),
                s = n(13951),
                c = n(15033),
                o = n(25538),
                u = n(32254),
                m = n(62300),
                d = n(36823);
            const f = function() {
                var e = (0, s.p$)().data,
                    t = (0, s.w_)().data,
                    n = (void 0 === t ? [] : t).includes("permission-age-verification"),
                    f = (0, r.useState)(!1),
                    E = (0, a.A)(f, 2),
                    h = E[0],
                    w = E[1],
                    g = (0, l.CV)(),
                    p = g.data,
                    v = g.error,
                    x = g.isFetching,
                    A = g.refetch;
                (0, i.$$)(A, "completed" === (null == p ? void 0 : p.status) || "needs_review" === (null == p ? void 0 : p.status) ? 3e3 : null);
                var y = (0, s.B3)(),
                    b = (0, a.A)(y, 2),
                    N = b[0],
                    k = b[1],
                    C = k.isFetching,
                    P = k.isError,
                    S = k.isSuccess,
                    V = (0, l.AP)(),
                    M = (0, a.A)(V, 2),
                    z = M[0],
                    I = M[1],
                    F = I.isFetching,
                    q = I.isError,
                    L = I.isSuccess,
                    T = x || "completed" === (null == p ? void 0 : p.status) || "needs_review" === (null == p ? void 0 : p.status);
                return r.createElement(r.Fragment, null, r.createElement(c.Qc, null, "Age Verification"), T ? r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement(o.A, {
                    size: "5x"
                })) : r.createElement("div", {
                    className: "tw-pb-10"
                }, r.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full tw-p-5 tw-rounded-lg tw-h-fit tw-flex tw-flex-col tw-items-center"
                }, r.createElement("h2", {
                    className: "tw-text-center"
                }, "Age Verification"), v || "uninitialized" !== p.status ? r.createElement(d.A, {
                    className: "tw-mt-5",
                    status: p,
                    error: v
                }) : n ? r.createElement(r.Fragment, null, r.createElement("div", {
                    class: "tw-py-5 tw-flex tw-w-full"
                }, r.createElement(m.A, {
                    userId: e.id,
                    isFluid: !0,
                    className: "tw-w-1/3 max-sm:tw-hidden"
                }), r.createElement("div", {
                    className: "md:tw-w-2/3 max-sm:tw-w-full tw-px-5 tw-flex tw-flex-direction tw-flex-col"
                }, r.createElement("span", null, "Welcome ", r.createElement("strong", null, e.displayName)), r.createElement("span", {
                    className: "tw-flex tw-items-center"
                }, r.createElement("span", {
                    className: "tw-flex-1"
                }, "Email: ", r.createElement("strong", null, e.obfuscatedEmail)), r.createElement(c.$n, {
                    onClick: function() {
                        return w(!0)
                    }
                }, "Change Email")), (null == e ? void 0 : e.hasPendingEmail) && r.createElement(c.$T, {
                    type: "info",
                    title: "Email Change Pending",
                    slim: !0
                }, r.createElement("strong", null, "An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail), r.createElement("div", null, r.createElement(c.$n, {
                    className: "tw-flex-none tw-mt-2",
                    disabled: C || S,
                    onClick: function() {
                        return N()
                    }
                }, S ? "Sent!" : "Resend Verification")), P && r.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend verification error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend verification email.")), r.createElement("p", {
                    className: "tw-mt-5"
                }, "Getting Age Verified will grant you access to Age Verified Group Instances."), r.createElement("p", null, "The age verification process utilizes Persona to verify your government-issued ID and compare it to your likeness. VRChat will receive and process text extracted from your ID, and will not receive any images or face scans. This information is used to generate an irreversible hash, which is saved. All extracted text from your verification process other than your birth date is deleted."), r.createElement("p", null, "VRChat saves the generated hash and your birth date and then tells Persona to delete all of your information."), r.createElement("h4", {
                    className: "tw-text-lg"
                }, "To complete this process you will need:"), r.createElement("ul", null, r.createElement("li", null, "A valid email address."), r.createElement("li", null, "You will also need a valid government ID."), r.createElement("li", null, "You will need a computer or a smartphone with a camera to complete the validation process.")), r.createElement("p", null, "Please confirm your email address above to receive your unique link.", r.createElement("br", null), "Once you click the ", r.createElement("strong", null, '"Send Age Verification Email"'), " button, you'll get an email leading to the verification process."), r.createElement("p", null, "Please open this email with a camera-enabled device, such as a smartphone, to complete this process."))), r.createElement(c.$n, {
                    className: "tw-flex-none tw-px-4",
                    disabled: F || L,
                    onClick: function() {
                        return z()
                    }
                }, L ? "Sent!" : "Send Age Verification Email"), q && r.createElement("p", {
                    role: "alert",
                    "aria-label": "Send age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to send age verification email."), r.createElement(c.aF, {
                    isVisible: h,
                    onClose: function() {
                        return w(!1)
                    },
                    title: "Change Email",
                    slim: !0,
                    width: "600px"
                }, r.createElement("div", {
                    className: "tw-w-full"
                }, r.createElement(u.A, null)))) : r.createElement("p", null, "You must have an active VRChat Plus subscription in order to begin the verification process."))))
            }
        },
        36823(e, t, n) {
            n.d(t, {
                A: () => d
            });
            var a = n(15902),
                r = n(48645),
                i = n(85044),
                l = n(42217),
                s = n(96540),
                c = n(15033),
                o = n(6324),
                u = n(29281),
                m = n(24751);
            const d = function(e) {
                var t = e.status,
                    n = e.error,
                    d = e.groupId,
                    f = e.code,
                    E = e.className,
                    h = (0, u.AP)(),
                    w = (0, a.A)(h, 2),
                    g = w[0],
                    p = w[1],
                    v = p.isFetching,
                    x = p.isError,
                    A = p.isSuccess,
                    y = (0, u.J_)(),
                    b = (0, a.A)(y, 2),
                    N = b[0],
                    k = b[1],
                    C = k.isFetching,
                    P = k.isError,
                    S = k.isSuccess,
                    V = (0, s.useMemo)(function() {
                        var e;
                        if (n) {
                            var a, s;
                            switch (n.status) {
                                case 404:
                                    s = "Your inquiry was not found.";
                                    break;
                                case 400:
                                    s = function(e) {
                                        switch (e.replace("retry_", "")) {
                                            case "personaFailed":
                                                return "Persona could not verify your identity.";
                                            case "noBirthdate":
                                                return "No birth date received from Persona.";
                                            case "noBirthdateChange":
                                                return "No change in birth date was detected.";
                                            case "invalidDate":
                                                return "Invalid date received from Persona.";
                                            case "hashUsed":
                                                return "Your identification data is already in use on another account.";
                                            default:
                                                return "An unknown error occurred while processing your inquiry."
                                        }
                                    }(null === (e = n.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.error_code);
                                    break;
                                case 429:
                                    s = "Too many users are trying to get age verified right now!\nPlease refresh the page in a few minutes.";
                                    break;
                                default:
                                    s = "An unknown error occurred while processing your inquiry."
                            }
                            return null !== (a = n.data) && void 0 !== a && null !== (a = a.error) && void 0 !== a && null !== (a = a.error_code) && void 0 !== a && a.startsWith("retry_") ? {
                                message: "".concat(s, "\n\nWe have sent you an email with instructions on how to retry the process."),
                                icon: i.faCircleExclamation,
                                status: "Verification Error"
                            } : {
                                message: s,
                                icon: i.faCircleExclamation,
                                status: "Verification Error",
                                buttonLink: "https://vrch.at/support",
                                buttonText: "Contact Support"
                            }
                        }
                        if (t) switch (t.status) {
                            case "verified":
                            case "approved":
                                return {
                                    icon: l.SG, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: r.QJ, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }, [t, n]);
                return s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(E)
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(o.A, {
                    icon: V.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, V.status), s.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, V.message), V.buttonLink && s.createElement(m.z9, {
                    to: V.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, V.buttonText), V.showResendButton && s.createElement(s.Fragment, null, s.createElement(c.$n, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: v || A || C || S,
                    onClick: function() {
                        return d && f ? N({
                            groupId: d,
                            code: f
                        }) : g()
                    }
                }, A || S ? "Sent!" : "Resend Age Verification Email"), (x || P) && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        78479(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var a = n(58168),
                r = n(80045),
                i = n(19179),
                l = n(81617),
                s = n(96540),
                c = n(6324),
                o = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, r.A)(e, o);
                return null === n ? null : n ? s.createElement(c.A, (0, a.A)({
                    icon: l.e6,
                    size: m,
                    className: "text-success"
                }, d)) : s.createElement(c.A, (0, a.A)({
                    icon: i.GR,
                    size: m,
                    className: "text-warning"
                }, d))
            };
            n.dn(u)
        },
        32254(e, t, n) {
            n.d(t, {
                A: () => N
            });
            var a = n(15902),
                r = n(32110),
                i = n(96704),
                l = n(7612),
                s = n(81617),
                c = n(69629),
                o = n(6913),
                u = n(48645),
                m = n(96540),
                d = n(5826),
                f = n(39704),
                E = n(30104),
                h = n(85052),
                w = n(69517),
                g = n.n(w),
                p = n(194),
                v = n(13951),
                x = n(71957),
                A = n(15033),
                y = n(78479),
                b = n(44034);
            const N = function() {
                var e = (0, v.p$)().data,
                    t = (0, m.useState)(""),
                    n = (0, a.A)(t, 2),
                    w = n[0],
                    N = n[1],
                    k = (0, m.useState)(""),
                    C = (0, a.A)(k, 2),
                    P = C[0],
                    S = C[1],
                    V = (0, m.useState)(""),
                    M = (0, a.A)(V, 2),
                    z = M[0],
                    I = M[1],
                    F = (0, p.d7)(w),
                    q = (0, x.Fx)(),
                    L = (0, a.A)(q, 2),
                    T = L[0],
                    R = L[1],
                    Q = R.isFetching,
                    _ = R.isError,
                    J = R.isSuccess,
                    Y = R.error,
                    $ = R.originalArgs,
                    G = (0, x.am)(),
                    D = (0, a.A)(G, 2),
                    W = D[0],
                    j = D[1],
                    B = j.isLoading,
                    O = j.isError,
                    K = j.error,
                    H = (0, v.B3)(),
                    U = (0, a.A)(H, 2),
                    X = U[0],
                    Z = U[1],
                    ee = Z.isFetching,
                    te = Z.isError,
                    ne = Z.error,
                    ae = Z.isSuccess,
                    re = (0, x.lM)({
                        email: F,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === F || !1 === g()(F)
                    }),
                    ie = re.data,
                    le = re.isFetching,
                    se = re.isSuccess,
                    ce = re.originalArgs,
                    oe = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)(function() {
                    S(""), I("")
                }, [w]);
                var ue = (0, m.useMemo)(function() {
                        return se && !1 === ie.userExists && g()(F) && "" !== F
                    }, [ie, F]),
                    me = (0, m.useMemo)(function() {
                        return "" !== P && P === F
                    }, [P, F]),
                    de = (0, m.useMemo)(function() {
                        if (!1 === g()(F) && "" !== F) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(A.M2, {
                            icon: u.QJ
                        }), " That's an invalid email.");
                        if (null != ie && ie.userExists && (null == ce ? void 0 : ce.email) === F) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(A.M2, {
                            icon: u.QJ
                        }), " That email is already in use.");
                        if (O) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(A.M2, {
                            icon: u.QJ
                        }), " Failed to change news preference: ", K, ".");
                        if (_ && (null == $ ? void 0 : $.email) === F) {
                            I("");
                            var t = Y.data.error.message;
                            return m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(A.M2, {
                                icon: u.QJ
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== P && P !== F) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(A.M2, {
                            icon: u.QJ
                        }), " Confirm email does not match.");
                        if (te) {
                            var n = ne.data.error.message;
                            return m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(A.M2, {
                                icon: u.QJ
                            }), " Failed to resend verification email: ", n)
                        }
                        return ae ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(A.M2, {
                            icon: o.iW
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : J ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(A.M2, {
                            icon: o.iW
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(A.M2, {
                            icon: o.iW
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }, [ae, te, _, J, ie, se, P, F, e, O]),
                    fe = (0, m.useMemo)(function() {
                        return !oe || J ? m.createElement("span", null, m.createElement(A.M2, {
                            icon: c.is
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(A.M2, {
                            icon: s.e6,
                            color: "success"
                        }), " Email Verified")
                    }, [oe, J]),
                    Ee = (0, m.useMemo)(function() {
                        return le ? m.createElement(A.M2, {
                            icon: l.z1,
                            spin: !0,
                            size: "2x"
                        }) : "" === F ? null : ue ? m.createElement(y.A, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(y.A, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }, [le, F, ue]);
                return m.createElement("form", null, m.createElement(d.A, {
                    className: "align-items-center justify-content-center"
                }, m.createElement(f.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "mx-0 mb-1"
                }, "To change your email, enter the desired email below")), m.createElement(d.A, null, m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(A.M2, {
                    icon: i.Hz,
                    size: "2x"
                })), m.createElement(f.A, {
                    xs: "10"
                }, m.createElement(d.A, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "new email",
                    className: "form-control",
                    autoComplete: "off",
                    name: "email",
                    onChange: function(e) {
                        return N(e.target.value)
                    },
                    placeholder: null == e ? void 0 : e.obfuscatedEmail,
                    type: "text",
                    value: w
                }))), m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, Ee)), ue && m.createElement(d.A, null, m.createElement(f.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(d.A, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm email",
                    className: "form-control",
                    autoComplete: "off",
                    name: "confirmEmail",
                    onChange: function(e) {
                        return S(e.target.value)
                    },
                    placeholder: "Please confirm email",
                    type: "text",
                    value: P
                }))), m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== P && m.createElement(y.A, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(d.A, null, m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(A.M2, {
                    icon: r.bM,
                    size: "2x"
                })), m.createElement(f.A, {
                    xs: "10"
                }, m.createElement(d.A, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm password",
                    className: "form-control",
                    name: "emailPasswordVerify",
                    onChange: function(e) {
                        return I(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: z
                })))), m.createElement(d.A, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(d.A, null, m.createElement(f.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(b.A, {
                    id: "subscribe",
                    checked: !(null != e && e.unsubscribe),
                    onChange: function(t) {
                        return W({
                            userId: e.id,
                            subscribe: t.target.checked
                        })
                    },
                    label: "Keep me up to date with the awesome power of your emails",
                    htmlFor: "subscribe",
                    disabled: B
                }))), m.createElement("hr", null), m.createElement(d.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(f.A, {
                    xs: "4"
                }, m.createElement(E.A, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !J || ee,
                    onClick: function() {
                        return X()
                    },
                    outline: !0
                }, fe)), m.createElement(f.A, {
                    xs: "4"
                }, m.createElement(E.A, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || Q || "" === z,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), T({
                            userId: null == e ? void 0 : e.id,
                            email: F,
                            password: z
                        })
                    }
                }, "Change Email"))))
            }
        },
        29281(e, t, n) {
            n.d(t, {
                AP: () => s,
                CV: () => i,
                J_: () => l,
                hS: () => r
            });
            var a = n(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAgeVerificationInquiryStatus: e.query({
                                query: function(e) {
                                    var t = e.inquiryId;
                                    return "/ageVerification/status/".concat(t)
                                }
                            }),
                            getAgeVerificationStatus: e.query({
                                query: function() {
                                    return "/ageVerification/status"
                                }
                            }),
                            sendGroupInquiryLink: e.mutation({
                                query: function(e) {
                                    var t = e.groupId,
                                        n = e.code;
                                    return {
                                        url: "/ageVerification/groups/".concat(t, "/sendInquiryLink"),
                                        method: "POST",
                                        body: {
                                            code: n
                                        }
                                    }
                                }
                            }),
                            sendInquiryLink: e.mutation({
                                query: function() {
                                    return {
                                        url: "/ageVerification/sendInquiryLink",
                                        method: "POST"
                                    }
                                }
                            })
                        }
                    }
                }),
                r = a.useGetAgeVerificationInquiryStatusQuery,
                i = a.useGetAgeVerificationStatusQuery,
                l = a.useSendGroupInquiryLinkMutation,
                s = a.useSendInquiryLinkMutation
        }
    }
]);
//# sourceMappingURL=32dc2ce878c83af6e9dabceaf0851493163948c8dd626c9f8d6732283be0a0c5.js.map