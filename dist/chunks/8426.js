(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8426], {
        32110(e, t) {
            "use strict";
            var n = [128273],
                r = "f084",
                a = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.mw = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, n, r, a]
            }, t.bM = t.mw
        },
        69629(e, t) {
            "use strict";
            var n = "paper-plane",
                r = [61913],
                a = "f1d8",
                i = "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, a, i]
            }, t.is = t.mw
        },
        48645(e, t, n) {
            "use strict";
            var r = n(82628);
            t.mw = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.QJ = t.mw, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        36823(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n(82544),
                a = n(48645),
                i = n(85044),
                o = n(42217),
                l = n(96540),
                c = n(15033),
                s = n(6324),
                u = n(29281),
                m = n(24751);
            const d = function(e) {
                var t = e.status,
                    n = e.error,
                    d = e.groupId,
                    f = e.code,
                    p = e.className,
                    g = (0, u.AP)(),
                    h = (0, r.A)(g, 2),
                    w = h[0],
                    y = h[1],
                    E = y.isFetching,
                    v = y.isError,
                    b = y.isSuccess,
                    x = (0, u.J_)(),
                    A = (0, r.A)(x, 2),
                    C = A[0],
                    k = A[1],
                    P = k.isFetching,
                    N = k.isError,
                    S = k.isSuccess,
                    O = (0, l.useMemo)(function() {
                        var e;
                        if (n) {
                            var r, l;
                            switch (n.status) {
                                case 404:
                                    l = "Your inquiry was not found.";
                                    break;
                                case 400:
                                    l = function(e) {
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
                                    l = "Too many users are trying to get age verified right now!\nPlease refresh the page in a few minutes.";
                                    break;
                                default:
                                    l = "An unknown error occurred while processing your inquiry."
                            }
                            return null !== (r = n.data) && void 0 !== r && null !== (r = r.error) && void 0 !== r && null !== (r = r.error_code) && void 0 !== r && r.startsWith("retry_") ? {
                                message: "".concat(l, "\n\nWe have sent you an email with instructions on how to retry the process."),
                                icon: i.faCircleExclamation,
                                status: "Verification Error"
                            } : {
                                message: l,
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
                                    icon: o.SG, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: a.QJ, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }, [t, n]);
                return l.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(p)
                }, l.createElement("div", {
                    className: "tw-mb-5"
                }, l.createElement(s.A, {
                    icon: O.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), l.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, O.status), l.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, O.message), O.buttonLink && l.createElement(m.z9, {
                    to: O.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, O.buttonText), O.showResendButton && l.createElement(l.Fragment, null, l.createElement(c.$n, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: E || b || P || S,
                    onClick: function() {
                        return d && f ? C({
                            groupId: d,
                            code: f
                        }) : w()
                    }
                }, b || S ? "Sent!" : "Resend Age Verification Email"), (v || N) && l.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        78479(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n(58168),
                a = n(80045),
                i = n(19179),
                o = n(81617),
                l = n(96540),
                c = n(6324),
                s = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.A)(e, s);
                return null === n ? null : n ? l.createElement(c.A, (0, r.A)({
                    icon: o.e6,
                    size: m,
                    className: "text-success"
                }, d)) : l.createElement(c.A, (0, r.A)({
                    icon: i.GR,
                    size: m,
                    className: "text-warning"
                }, d))
            };
            n.dn(u)
        },
        32254(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var r = n(82544),
                a = n(32110),
                i = n(96704),
                o = n(7612),
                l = n(81617),
                c = n(69629),
                s = n(6913),
                u = n(48645),
                m = n(96540),
                d = n(5826),
                f = n(39704),
                p = n(30104),
                g = n(85052),
                h = n(69517),
                w = n.n(h),
                y = n(194),
                E = n(13951),
                v = n(71957),
                b = n(15033),
                x = n(78479),
                A = n(44034);
            const C = function() {
                var e = (0, E.p$)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.A)(t, 2),
                    h = n[0],
                    C = n[1],
                    k = (0, m.useState)(""),
                    P = (0, r.A)(k, 2),
                    N = P[0],
                    S = P[1],
                    O = (0, m.useState)(""),
                    j = (0, r.A)(O, 2),
                    V = j[0],
                    M = j[1],
                    T = (0, y.d7)(h),
                    D = (0, v.Fx)(),
                    I = (0, r.A)(D, 2),
                    R = I[0],
                    _ = I[1],
                    z = _.isFetching,
                    F = _.isError,
                    q = _.isSuccess,
                    L = _.error,
                    J = _.originalArgs,
                    Q = (0, v.am)(),
                    B = (0, r.A)(Q, 2),
                    Y = B[0],
                    G = B[1],
                    $ = G.isLoading,
                    U = G.isError,
                    W = G.error,
                    K = (0, E.B3)(),
                    H = (0, r.A)(K, 2),
                    X = H[0],
                    Z = H[1],
                    ee = Z.isFetching,
                    te = Z.isError,
                    ne = Z.error,
                    re = Z.isSuccess,
                    ae = (0, v.lM)({
                        email: T,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === T || !1 === w()(T)
                    }),
                    ie = ae.data,
                    oe = ae.isFetching,
                    le = ae.isSuccess,
                    ce = ae.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)(function() {
                    S(""), M("")
                }, [h]);
                var ue = (0, m.useMemo)(function() {
                        return le && !1 === ie.userExists && w()(T) && "" !== T
                    }, [ie, T]),
                    me = (0, m.useMemo)(function() {
                        return "" !== N && N === T
                    }, [N, T]),
                    de = (0, m.useMemo)(function() {
                        if (!1 === w()(T) && "" !== T) return m.createElement(g.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That's an invalid email.");
                        if (null != ie && ie.userExists && (null == ce ? void 0 : ce.email) === T) return m.createElement(g.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That email is already in use.");
                        if (U) return m.createElement(g.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " Failed to change news preference: ", W, ".");
                        if (F && (null == J ? void 0 : J.email) === T) {
                            M("");
                            var t = L.data.error.message;
                            return m.createElement(g.A, {
                                color: "warning"
                            }, m.createElement(b.M2, {
                                icon: u.QJ
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== N && N !== T) return m.createElement(g.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " Confirm email does not match.");
                        if (te) {
                            var n = ne.data.error.message;
                            return m.createElement(g.A, {
                                color: "warning"
                            }, m.createElement(b.M2, {
                                icon: u.QJ
                            }), " Failed to resend verification email: ", n)
                        }
                        return re ? m.createElement(g.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : q ? m.createElement(g.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(g.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }, [re, te, F, q, ie, le, N, T, e, U]),
                    fe = (0, m.useMemo)(function() {
                        return !se || q ? m.createElement("span", null, m.createElement(b.M2, {
                            icon: c.is
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.M2, {
                            icon: l.e6,
                            color: "success"
                        }), " Email Verified")
                    }, [se, q]),
                    pe = (0, m.useMemo)(function() {
                        return oe ? m.createElement(b.M2, {
                            icon: o.z1,
                            spin: !0,
                            size: "2x"
                        }) : "" === T ? null : ue ? m.createElement(x.A, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(x.A, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }, [oe, T, ue]);
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
                }, m.createElement(b.M2, {
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
                        return C(e.target.value)
                    },
                    placeholder: null == e ? void 0 : e.obfuscatedEmail,
                    type: "text",
                    value: h
                }))), m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, pe)), ue && m.createElement(d.A, null, m.createElement(f.A, {
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
                    value: N
                }))), m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== N && m.createElement(x.A, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(d.A, null, m.createElement(f.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.M2, {
                    icon: a.bM,
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
                        return M(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: V
                })))), m.createElement(d.A, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(d.A, null, m.createElement(f.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(A.A, {
                    id: "subscribe",
                    checked: !(null != e && e.unsubscribe),
                    onChange: function(t) {
                        return Y({
                            userId: e.id,
                            subscribe: t.target.checked
                        })
                    },
                    label: "Keep me up to date with the awesome power of your emails",
                    htmlFor: "subscribe",
                    disabled: $
                }))), m.createElement("hr", null), m.createElement(d.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(f.A, {
                    xs: "4"
                }, m.createElement(p.A, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !q || ee,
                    onClick: function() {
                        return X()
                    },
                    outline: !0
                }, fe)), m.createElement(f.A, {
                    xs: "4"
                }, m.createElement(p.A, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || z || "" === V,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), R({
                            userId: null == e ? void 0 : e.id,
                            email: T,
                            password: V
                        })
                    }
                }, "Change Email"))))
            }
        },
        94328(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => h
            });
            var r = n(82544),
                a = n(96540),
                i = n(47767),
                o = n(194),
                l = n(29281),
                c = n(13951),
                s = n(40085),
                u = n(36823),
                m = n(15033),
                d = n(25538),
                f = n(32254),
                p = n(6062),
                g = n(62300);
            const h = function() {
                var e = (0, i.g)(),
                    t = e.groupId,
                    n = e.code,
                    h = (0, c.p$)().data,
                    w = (0, a.useState)(!1),
                    y = (0, r.A)(w, 2),
                    E = y[0],
                    v = y[1],
                    b = (0, l.CV)(),
                    x = b.data,
                    A = b.isSuccess,
                    C = b.error,
                    k = b.isFetching,
                    P = b.refetch;
                (0, o.$$)(P, "completed" === (null == x ? void 0 : x.status) || "needs_review" === (null == x ? void 0 : x.status) ? 3e3 : null);
                var N = (0, s.XR)({
                        groupId: t,
                        purpose: "group"
                    }),
                    S = N.data,
                    O = N.isSuccess,
                    j = N.isError,
                    V = N.isFetching,
                    M = (0, c.B3)(),
                    T = (0, r.A)(M, 2),
                    D = T[0],
                    I = T[1],
                    R = I.isFetching,
                    _ = I.isError,
                    z = I.isSuccess,
                    F = (0, l.J_)(),
                    q = (0, r.A)(F, 2),
                    L = q[0],
                    J = q[1],
                    Q = J.isFetching,
                    B = J.isError,
                    Y = J.isSuccess,
                    G = k || V || "completed" === (null == x ? void 0 : x.status) || "needs_review" === (null == x ? void 0 : x.status);
                return a.createElement(a.Fragment, null, a.createElement(m.Qc, null, "Group Age Verification Beta"), G && a.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(d.A, {
                    size: "5x"
                })), !G && A && O && a.createElement(a.Fragment, null, a.createElement(p.A, {
                    group: S
                }), a.createElement("div", {
                    className: "tw-pb-10"
                }, a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full tw-p-5 tw-rounded-lg tw-h-fit tw-flex tw-flex-col tw-items-center"
                }, a.createElement("h2", {
                    className: "tw-text-center"
                }, "Age Verification Beta"), "uninitialized" !== x.status ? a.createElement(u.A, {
                    className: "tw-mt-5",
                    status: x,
                    error: C,
                    groupId: t,
                    code: n
                }) : "member" !== (null == S ? void 0 : S.membershipStatus) ? a.createElement("p", null, "You must be a member of this group in order to access this page.") : S.tags.includes("admin_age_verification_enabled") ? S.ageVerificationSlotsAvailable ? a.createElement(a.Fragment, null, a.createElement("div", {
                    class: "tw-py-5 tw-flex tw-w-full"
                }, a.createElement(g.A, {
                    userId: h.id,
                    isFluid: !0,
                    className: "tw-w-1/3 max-sm:tw-hidden"
                }), a.createElement("div", {
                    className: "md:tw-w-2/3 max-sm:tw-w-full tw-px-5 tw-flex tw-flex-direction tw-flex-col"
                }, a.createElement("span", null, "Welcome ", a.createElement("strong", null, h.displayName)), a.createElement("span", {
                    className: "tw-flex tw-items-center"
                }, a.createElement("span", {
                    className: "tw-flex-1"
                }, "Email: ", a.createElement("strong", null, h.obfuscatedEmail)), a.createElement(m.$n, {
                    onClick: function() {
                        return v(!0)
                    }
                }, "Change Email")), (null == h ? void 0 : h.hasPendingEmail) && a.createElement(m.$T, {
                    type: "info",
                    title: "Email Change Pending",
                    slim: !0
                }, a.createElement("strong", null, "An email change is pending verification: ", null == h ? void 0 : h.obfuscatedPendingEmail), a.createElement("div", null, a.createElement(m.$n, {
                    className: "tw-flex-none tw-mt-2",
                    disabled: R || z,
                    onClick: function() {
                        return D()
                    }
                }, z ? "Sent!" : "Resend Verification")), _ && a.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend verification error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend verification email.")), a.createElement("p", {
                    className: "tw-mt-5"
                }, "Getting Age Verified will grant you access to Age Verified Group Instances."), a.createElement("p", null, "The age verification process utilizes Persona to verify your government-issued ID and compare it to your likeness. VRChat will receive and process text extracted from your ID, and will not receive any images or face scans. This information is used to generate an irreversible hash, which is saved. All extracted text from your verification process other than your birth date is deleted."), a.createElement("p", null, "VRChat saves the generated hash and your birth date and then tells Persona to delete all of your information."), a.createElement("h4", {
                    className: "tw-text-lg"
                }, "To complete this process you will need:"), a.createElement("ul", null, a.createElement("li", null, "A valid email address."), a.createElement("li", null, "You will also need a valid government ID."), a.createElement("li", null, "You will need a computer or a smartphone with a camera to complete the validation process.")), a.createElement("p", null, "Please confirm your email address above to receive your unique link.", a.createElement("br", null), "Once you click the ", a.createElement("strong", null, '"Send Age Verification Email"'), " button, you'll get an email leading to the verification process."), a.createElement("p", null, "Please open this email with a camera-enabled device, such as a smartphone, to complete this process."))), a.createElement(m.$n, {
                    className: "tw-flex-none tw-px-4",
                    disabled: Q || Y,
                    onClick: function() {
                        return L({
                            groupId: t,
                            code: n
                        })
                    }
                }, Y ? "Sent!" : "Send Age Verification Email"), B && a.createElement("p", {
                    role: "alert",
                    "aria-label": "Send age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to send age verification email."), a.createElement(m.aF, {
                    isVisible: E,
                    onClose: function() {
                        return v(!1)
                    },
                    title: "Change Email",
                    slim: !0,
                    width: "600px"
                }, a.createElement("div", {
                    className: "tw-w-full"
                }, a.createElement(f.A, null)))) : a.createElement("p", null, "This group does not have age verification beta slots remaining.") : a.createElement("p", null, "This group is not part of the age verification beta.")))), j && a.createElement("p", {
                    role: "alert",
                    "aria-label": "Page load error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1 tw-text-center"
                }, "An error occurred when trying to load the page's data."))
            }
        },
        29281(e, t, n) {
            "use strict";
            n.d(t, {
                AP: () => l,
                CV: () => i,
                J_: () => o,
                hS: () => a
            });
            var r = n(89483).m.injectEndpoints({
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
                a = r.useGetAgeVerificationInquiryStatusQuery,
                i = r.useGetAgeVerificationStatusQuery,
                o = r.useSendGroupInquiryLinkMutation,
                l = r.useSendInquiryLinkMutation
        },
        17965(e, t, n) {
            "use strict";
            var r = n(16426),
                a = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, o, l, c, s, u = !1;
                t || (t = {}), n = t.debug || !1;
                try {
                    if (o = r(), l = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(r) {
                            if (r.stopPropagation(), t.format)
                                if (r.preventDefault(), void 0 === r.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = a[t.format] || a.default;
                                    window.clipboardData.setData(i, e)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                        }), document.body.appendChild(s), l.selectNodeContents(s), c.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    u = !0
                } catch (r) {
                    n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
                    } catch (r) {
                        n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), i = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(l) : c.removeAllRanges()), s && document.body.removeChild(s), o()
                }
                return u
            }
        },
        25264(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var a = l(n(96540)),
                i = l(n(17965)),
                o = ["text", "onCopy", "options", "children"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        h(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(a, arguments, i)
                    } else n = a.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === r(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, g(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && d(e, t)
                }(c, e);
                var t, n, r, l = f(c);

                function c() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(p(e = l.call.apply(l, [this].concat(n))), "onClick", function(t) {
                        var n = e.props,
                            r = n.text,
                            o = n.onCopy,
                            l = n.children,
                            c = n.options,
                            s = a.default.Children.only(l),
                            u = (0, i.default)(r, c);
                        o && o(r, u), s && s.props && "function" == typeof s.props.onClick && s.props.onClick(t)
                    }), e
                }
                return t = c, (n = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            n = u(e, o),
                            r = a.default.Children.only(t);
                        return a.default.cloneElement(r, s(s({}, n), {}, {
                            onClick: this.onClick
                        }))
                    }
                }]) && m(t.prototype, n), r && m(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.default.PureComponent);
            t.CopyToClipboard = w, h(w, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        59399(e, t, n) {
            "use strict";
            var r = n(25264).CopyToClipboard;
            r.CopyToClipboard = r, e.exports = r
        },
        16426(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=8e13f3a5313260f27920e39494e2ccc998e11458d85696a282fd2db894f12aac.js.map