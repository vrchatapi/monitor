"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8264], {
        84176: (e, t) => {
            var n = [128273],
                a = "f084",
                r = "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";
            t.DF = {
                prefix: "fas",
                iconName: "key",
                icon: [512, 512, n, a, r]
            }, t.DD = t.DF
        },
        57310: (e, t) => {
            var n = "paper-plane",
                a = [61913],
                r = "f1d8",
                i = "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, a, r, i]
            }, t.XC = t.DF
        },
        21707: (e, t, n) => {
            var a = n(53359);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.e7 = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        8264: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => f
            });
            var a = n(54546),
                r = n(67294),
                i = n(17383),
                l = n(79442),
                s = n(22202),
                c = n(37463),
                o = n(43862),
                u = n(65578),
                m = n(20165),
                d = n(55549);
            const f = function() {
                var e = (0, s.IB)().data,
                    t = (0, s.q7)().data,
                    n = (void 0 === t ? [] : t).includes("permission-age-verification"),
                    f = (0, r.useState)(!1),
                    E = (0, a.Z)(f, 2),
                    h = E[0],
                    g = E[1],
                    w = (0, l.HI)(),
                    p = w.data,
                    v = w.error,
                    x = w.isFetching,
                    y = w.refetch;
                (0, i.Yz)(y, "completed" === (null == p ? void 0 : p.status) || "needs_review" === (null == p ? void 0 : p.status) ? 3e3 : null);
                var b = (0, s.Fe)(),
                    Z = (0, a.Z)(b, 2),
                    N = Z[0],
                    k = Z[1],
                    C = k.isFetching,
                    S = k.isError,
                    V = k.isSuccess,
                    P = (0, l.nv)(),
                    I = (0, a.Z)(P, 2),
                    A = I[0],
                    F = I[1],
                    q = F.isFetching,
                    z = F.isError,
                    L = F.isSuccess,
                    D = x || "completed" === (null == p ? void 0 : p.status) || "needs_review" === (null == p ? void 0 : p.status);
                return r.createElement(r.Fragment, null, r.createElement(c.$4, null, "Age Verification"), D ? r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement(o.Z, {
                    size: "5x"
                })) : r.createElement("div", {
                    className: "tw-pb-10"
                }, r.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full tw-p-5 tw-rounded-lg tw-h-fit tw-flex tw-flex-col tw-items-center"
                }, r.createElement("h2", {
                    className: "tw-text-center"
                }, "Age Verification"), v || "uninitialized" !== p.status ? r.createElement(d.Z, {
                    className: "tw-mt-5",
                    status: p,
                    error: v
                }) : n ? r.createElement(r.Fragment, null, r.createElement("div", {
                    class: "tw-py-5 tw-flex tw-w-full"
                }, r.createElement(m.Z, {
                    userId: e.id,
                    isFluid: !0,
                    className: "tw-w-1/3 max-sm:tw-hidden"
                }), r.createElement("div", {
                    className: "md:tw-w-2/3 max-sm:tw-w-full tw-px-5 tw-flex tw-flex-direction tw-flex-col"
                }, r.createElement("span", null, "Welcome ", r.createElement("strong", null, e.displayName)), r.createElement("span", {
                    className: "tw-flex tw-items-center"
                }, r.createElement("span", {
                    className: "tw-flex-1"
                }, "Email: ", r.createElement("strong", null, e.obfuscatedEmail)), r.createElement(c.zx, {
                    onClick: function() {
                        return g(!0)
                    }
                }, "Change Email")), (null == e ? void 0 : e.hasPendingEmail) && r.createElement(c.qX, {
                    type: "info",
                    title: "Email Change Pending",
                    slim: !0
                }, r.createElement("strong", null, "An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail), r.createElement("div", null, r.createElement(c.zx, {
                    className: "tw-flex-none tw-mt-2",
                    disabled: C || V,
                    onClick: function() {
                        return N()
                    }
                }, V ? "Sent!" : "Resend Verification")), S && r.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend verification error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend verification email.")), r.createElement("p", {
                    className: "tw-mt-5"
                }, "Getting Age Verified will grant you access to Age Verified Group Instances."), r.createElement("p", null, "The age verification process utilizes Persona to verify your government-issued ID and compare it to your likeness. VRChat will receive and process text extracted from your ID, and will not receive any images or face scans. This information is used to generate an irreversible hash, which is saved. All extracted text from your verification process other than your birth date is deleted."), r.createElement("p", null, "VRChat saves the generated hash and your birth date and then tells Persona to delete all of your information."), r.createElement("h4", {
                    className: "tw-text-lg"
                }, "To complete this process you will need:"), r.createElement("ul", null, r.createElement("li", null, "A valid email address."), r.createElement("li", null, "You will also need a valid government ID."), r.createElement("li", null, "You will need a computer or a smartphone with a camera to complete the validation process.")), r.createElement("p", null, "Please confirm your email address above to receive your unique link.", r.createElement("br", null), "Once you click the ", r.createElement("strong", null, '"Send Age Verification Email"'), " button, you'll get an email leading to the verification process."), r.createElement("p", null, "Please open this email with a camera-enabled device, such as a smartphone, to complete this process."))), r.createElement(c.zx, {
                    className: "tw-flex-none tw-px-4",
                    disabled: q || L,
                    onClick: function() {
                        return A()
                    }
                }, L ? "Sent!" : "Send Age Verification Email"), z && r.createElement("p", {
                    role: "alert",
                    "aria-label": "Send age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to send age verification email."), r.createElement(c.u_, {
                    isVisible: h,
                    onClose: function() {
                        return g(!1)
                    },
                    title: "Change Email",
                    slim: !0,
                    width: "600px"
                }, r.createElement("div", {
                    className: "tw-w-full"
                }, r.createElement(u.Z, null)))) : r.createElement("p", null, "You must have an active VRChat Plus subscription in order to begin the verification process."))))
            }
        },
        55549: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var a = n(54546),
                r = n(21707),
                i = n(20495),
                l = n(6811),
                s = n(67294),
                c = n(37463),
                o = n(86646),
                u = n(79442),
                m = n(60006);
            const d = function(e) {
                var t = e.status,
                    n = e.error,
                    d = e.groupId,
                    f = e.code,
                    E = e.className,
                    h = (0, u.nv)(),
                    g = (0, a.Z)(h, 2),
                    w = g[0],
                    p = g[1],
                    v = p.isFetching,
                    x = p.isError,
                    y = p.isSuccess,
                    b = (0, u.W3)(),
                    Z = (0, a.Z)(b, 2),
                    N = Z[0],
                    k = Z[1],
                    C = k.isFetching,
                    S = k.isError,
                    V = k.isSuccess,
                    P = (0, s.useMemo)((function() {
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
                                    icon: l.f8, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: r.e7, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }), [t, n]);
                return s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(E)
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(o.Z, {
                    icon: P.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, P.status), s.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, P.message), P.buttonLink && s.createElement(m.Qj, {
                    to: P.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, P.buttonText), P.showResendButton && s.createElement(s.Fragment, null, s.createElement(c.zx, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: v || y || C || V,
                    onClick: function() {
                        return d && f ? N({
                            groupId: d,
                            code: f
                        }) : w()
                    }
                }, y || V ? "Sent!" : "Resend Age Verification Email"), (x || S) && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var a = n(87462),
                r = n(45987),
                i = n(59545),
                l = n(68055),
                s = n(67294),
                c = n(86646),
                o = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, r.Z)(e, o);
                return null === n ? null : n ? s.createElement(c.Z, (0, a.Z)({
                    icon: l.LE,
                    size: m,
                    className: "text-success"
                }, d)) : s.createElement(c.Z, (0, a.Z)({
                    icon: i.NB,
                    size: m,
                    className: "text-warning"
                }, d))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var a = n(54546),
                r = n(84176),
                i = n(56811),
                l = n(92332),
                s = n(68055),
                c = n(57310),
                o = n(82414),
                u = n(21707),
                m = n(67294),
                d = n(23138),
                f = n(35773),
                E = n(95305),
                h = n(34698),
                g = n(83868),
                w = n.n(g),
                p = n(17383),
                v = n(22202),
                x = n(62437),
                y = n(37463),
                b = n(8860),
                Z = n(18461);
            const N = function() {
                var e = (0, v.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, a.Z)(t, 2),
                    g = n[0],
                    N = n[1],
                    k = (0, m.useState)(""),
                    C = (0, a.Z)(k, 2),
                    S = C[0],
                    V = C[1],
                    P = (0, m.useState)(""),
                    I = (0, a.Z)(P, 2),
                    A = I[0],
                    F = I[1],
                    q = (0, p.Nr)(g),
                    z = (0, x.X6)(),
                    L = (0, a.Z)(z, 2),
                    D = L[0],
                    T = L[1],
                    $ = T.isFetching,
                    M = T.isError,
                    R = T.isSuccess,
                    Y = T.error,
                    _ = T.originalArgs,
                    B = (0, x.n_)(),
                    j = (0, a.Z)(B, 2),
                    O = j[0],
                    G = j[1],
                    W = G.isLoading,
                    K = G.isError,
                    X = G.error,
                    Q = (0, v.Fe)(),
                    H = (0, a.Z)(Q, 2),
                    U = H[0],
                    J = H[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    ae = J.isSuccess,
                    re = (0, x.SO)({
                        email: q,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === q || !1 === w()(q)
                    }),
                    ie = re.data,
                    le = re.isFetching,
                    se = re.isSuccess,
                    ce = re.originalArgs,
                    oe = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    V(""), F("")
                }), [g]);
                var ue = (0, m.useMemo)((function() {
                        return se && !1 === ie.userExists && w()(q) && "" !== q
                    }), [ie, q]),
                    me = (0, m.useMemo)((function() {
                        return "" !== S && S === q
                    }), [S, q]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === w()(q) && "" !== q) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(y.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != ie && ie.userExists && (null == ce ? void 0 : ce.email) === q) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(y.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (K) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(y.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", X, ".");
                        if (M && (null == _ ? void 0 : _.email) === q) {
                            F("");
                            var t = Y.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(y.$1, {
                                icon: u.e7
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== S && S !== q) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(y.$1, {
                            icon: u.e7
                        }), " Confirm email does not match.");
                        if (te) {
                            var n = ne.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(y.$1, {
                                icon: u.e7
                            }), " Failed to resend verification email: ", n)
                        }
                        return ae ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(y.$1, {
                            icon: o.sq
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : R ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(y.$1, {
                            icon: o.sq
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(y.$1, {
                            icon: o.sq
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }), [ae, te, M, R, ie, se, S, q, e, K]),
                    fe = (0, m.useMemo)((function() {
                        return !oe || R ? m.createElement("span", null, m.createElement(y.$1, {
                            icon: c.XC
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(y.$1, {
                            icon: s.LE,
                            color: "success"
                        }), " Email Verified")
                    }), [oe, R]),
                    Ee = (0, m.useMemo)((function() {
                        return le ? m.createElement(y.$1, {
                            icon: l.LM,
                            spin: !0,
                            size: "2x"
                        }) : "" === q ? null : ue ? m.createElement(b.Z, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(b.Z, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }), [le, q, ue]);
                return m.createElement("form", null, m.createElement(f.Z, {
                    className: "align-items-center justify-content-center"
                }, m.createElement(E.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "mx-0 mb-1"
                }, "To change your email, enter the desired email below")), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(y.$1, {
                    icon: i.IB,
                    size: "2x"
                })), m.createElement(E.Z, {
                    xs: "10"
                }, m.createElement(f.Z, {
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
                    value: g
                }))), m.createElement(E.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, Ee)), ue && m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(f.Z, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm email",
                    className: "form-control",
                    autoComplete: "off",
                    name: "confirmEmail",
                    onChange: function(e) {
                        return V(e.target.value)
                    },
                    placeholder: "Please confirm email",
                    type: "text",
                    value: S
                }))), m.createElement(E.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== S && m.createElement(b.Z, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(y.$1, {
                    icon: r.DD,
                    size: "2x"
                })), m.createElement(E.Z, {
                    xs: "10"
                }, m.createElement(f.Z, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm password",
                    className: "form-control",
                    name: "emailPasswordVerify",
                    onChange: function(e) {
                        return F(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: A
                })))), m.createElement(f.Z, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(Z.Z, {
                    id: "subscribe",
                    checked: !(null != e && e.unsubscribe),
                    onChange: function(t) {
                        return O({
                            userId: e.id,
                            subscribe: t.target.checked
                        })
                    },
                    label: "Keep me up to date with the awesome power of your emails",
                    htmlFor: "subscribe",
                    disabled: W
                }))), m.createElement("hr", null), m.createElement(f.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(E.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !R || ee,
                    onClick: function() {
                        return U()
                    },
                    outline: !0
                }, fe)), m.createElement(E.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || $ || "" === A,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), D({
                            userId: null == e ? void 0 : e.id,
                            email: q,
                            password: A
                        })
                    }
                }, "Change Email"))))
            }
        },
        79442: (e, t, n) => {
            n.d(t, {
                HI: () => i,
                MI: () => r,
                W3: () => l,
                nv: () => s
            });
            var a = n(61509).S.injectEndpoints({
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
//# sourceMappingURL=d1f2b6ebaa3945568a0fc5bdd95023eaadf8a43be11768ee419b85d266fed976.js.map