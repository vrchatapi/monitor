(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3013], {
        55549: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(54546),
                a = n(21707),
                i = n(20495),
                o = n(6811),
                l = n(67294),
                c = n(96985),
                s = n(86646),
                u = n(79442),
                m = n(60006);
            const d = function(e) {
                var t = e.status,
                    n = e.error,
                    d = e.groupId,
                    f = e.code,
                    p = e.className,
                    g = (0, u.nv)(),
                    y = (0, r.Z)(g, 2),
                    h = y[0],
                    w = y[1],
                    E = w.isFetching,
                    v = w.isError,
                    b = w.isSuccess,
                    x = (0, u.W3)(),
                    C = (0, r.Z)(x, 2),
                    Z = C[0],
                    k = C[1],
                    P = k.isFetching,
                    N = k.isError,
                    S = k.isSuccess,
                    O = (0, l.useMemo)((function() {
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
                                    icon: o.f8, status: "Verification Complete", message: "You have successfully verified your age with Persona.\nYour profile data has been updated.", buttonLink: "/home/user/me", buttonText: "View Your Profile"
                                };
                            case "failed":
                            case "declined":
                                return {
                                    icon: i.faCircleExclamation, status: "Verification Failed", message: "Persona could not verify your identity.", buttonLink: "https://vrch.at/support", buttonText: "Contact Support"
                                };
                            default:
                                return {
                                    icon: a.e7, status: "Verification Pending", message: "Your verification with Persona is incomplete.\n\nReturn to the verification link sent to your email,\nor press the button below to receive the email again.", showResendButton: !0
                                }
                        }
                    }), [t, n]);
                return l.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center ".concat(p)
                }, l.createElement("div", {
                    className: "tw-mb-5"
                }, l.createElement(s.Z, {
                    icon: O.icon,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), l.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, O.status), l.createElement("p", {
                    className: "tw-text-center tw-mb-0 tw-whitespace-break-spaces"
                }, O.message), O.buttonLink && l.createElement(m.Qj, {
                    to: O.buttonLink,
                    className: "tw-mt-9 tw-w-60"
                }, O.buttonText), O.showResendButton && l.createElement(l.Fragment, null, l.createElement(c.zx, {
                    className: "tw-flex-none tw-mt-9 tw-px-4",
                    disabled: E || b || P || S,
                    onClick: function() {
                        return d && f ? Z({
                            groupId: d,
                            code: f
                        }) : h()
                    }
                }, b || S ? "Sent!" : "Resend Age Verification Email"), (v || N) && l.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend age verification email error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend age verification email.")))
            }
        },
        8860: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(87462),
                a = n(45987),
                i = n(59545),
                o = n(68055),
                l = n(67294),
                c = n(86646),
                s = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.Z)(e, s);
                return null === n ? null : n ? l.createElement(c.Z, (0, r.Z)({
                    icon: o.LE,
                    size: m,
                    className: "text-success"
                }, d)) : l.createElement(c.Z, (0, r.Z)({
                    icon: i.NB,
                    size: m,
                    className: "text-warning"
                }, d))
            }
        },
        65578: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var r = n(54546),
                a = n(84176),
                i = n(56811),
                o = n(92332),
                l = n(68055),
                c = n(57310),
                s = n(82414),
                u = n(21707),
                m = n(67294),
                d = n(23138),
                f = n(35773),
                p = n(95305),
                g = n(34698),
                y = n(83868),
                h = n.n(y),
                w = n(95168),
                E = n(22202),
                v = n(62437),
                b = n(96985),
                x = n(8860),
                C = n(18461);
            const Z = function() {
                var e = (0, E.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.Z)(t, 2),
                    y = n[0],
                    Z = n[1],
                    k = (0, m.useState)(""),
                    P = (0, r.Z)(k, 2),
                    N = P[0],
                    S = P[1],
                    O = (0, m.useState)(""),
                    A = (0, r.Z)(O, 2),
                    I = A[0],
                    j = A[1],
                    V = (0, w.Nr)(y),
                    D = (0, v.X6)(),
                    T = (0, r.Z)(D, 2),
                    R = T[0],
                    _ = T[1],
                    q = _.isFetching,
                    z = _.isError,
                    F = _.isSuccess,
                    L = _.error,
                    $ = _.originalArgs,
                    M = (0, v.n_)(),
                    B = (0, r.Z)(M, 2),
                    Y = B[0],
                    U = B[1],
                    G = U.isLoading,
                    W = U.isError,
                    K = U.error,
                    X = (0, E.Fe)(),
                    H = (0, r.Z)(X, 2),
                    Q = H[0],
                    J = H[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    re = J.isSuccess,
                    ae = (0, v.SO)({
                        email: V,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === V || !1 === h()(V)
                    }),
                    ie = ae.data,
                    oe = ae.isFetching,
                    le = ae.isSuccess,
                    ce = ae.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    S(""), j("")
                }), [y]);
                var ue = (0, m.useMemo)((function() {
                        return le && !1 === ie.userExists && h()(V) && "" !== V
                    }), [ie, V]),
                    me = (0, m.useMemo)((function() {
                        return "" !== N && N === V
                    }), [N, V]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === h()(V) && "" !== V) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != ie && ie.userExists && (null == ce ? void 0 : ce.email) === V) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (W) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", K, ".");
                        if (z && (null == $ ? void 0 : $.email) === V) {
                            j("");
                            var t = L.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(b.$1, {
                                icon: u.e7
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== N && N !== V) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Confirm email does not match.");
                        if (te) {
                            var n = ne.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(b.$1, {
                                icon: u.e7
                            }), " Failed to resend verification email: ", n)
                        }
                        return re ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : F ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }), [re, te, z, F, ie, le, N, V, e, W]),
                    fe = (0, m.useMemo)((function() {
                        return !se || F ? m.createElement("span", null, m.createElement(b.$1, {
                            icon: c.XC
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.$1, {
                            icon: l.LE,
                            color: "success"
                        }), " Email Verified")
                    }), [se, F]),
                    pe = (0, m.useMemo)((function() {
                        return oe ? m.createElement(b.$1, {
                            icon: o.LM,
                            spin: !0,
                            size: "2x"
                        }) : "" === V ? null : ue ? m.createElement(x.Z, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(x.Z, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }), [oe, V, ue]);
                return m.createElement("form", null, m.createElement(f.Z, {
                    className: "align-items-center justify-content-center"
                }, m.createElement(p.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "mx-0 mb-1"
                }, "To change your email, enter the desired email below")), m.createElement(f.Z, null, m.createElement(p.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.$1, {
                    icon: i.IB,
                    size: "2x"
                })), m.createElement(p.Z, {
                    xs: "10"
                }, m.createElement(f.Z, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "new email",
                    className: "form-control",
                    autoComplete: "off",
                    name: "email",
                    onChange: function(e) {
                        return Z(e.target.value)
                    },
                    placeholder: null == e ? void 0 : e.obfuscatedEmail,
                    type: "text",
                    value: y
                }))), m.createElement(p.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, pe)), ue && m.createElement(f.Z, null, m.createElement(p.Z, {
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
                        return S(e.target.value)
                    },
                    placeholder: "Please confirm email",
                    type: "text",
                    value: N
                }))), m.createElement(p.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== N && m.createElement(x.Z, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(f.Z, null, m.createElement(p.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.$1, {
                    icon: a.DD,
                    size: "2x"
                })), m.createElement(p.Z, {
                    xs: "10"
                }, m.createElement(f.Z, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm password",
                    className: "form-control",
                    name: "emailPasswordVerify",
                    onChange: function(e) {
                        return j(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: I
                })))), m.createElement(f.Z, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(f.Z, null, m.createElement(p.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(C.Z, {
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
                    disabled: G
                }))), m.createElement("hr", null), m.createElement(f.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(p.Z, {
                    xs: "4"
                }, m.createElement(g.Z, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !F || ee,
                    onClick: function() {
                        return Q()
                    },
                    outline: !0
                }, fe)), m.createElement(p.Z, {
                    xs: "4"
                }, m.createElement(g.Z, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || q || "" === I,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), R({
                            userId: null == e ? void 0 : e.id,
                            email: V,
                            password: I
                        })
                    }
                }, "Change Email"))))
            }
        },
        13164: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => y
            });
            var r = n(54546),
                a = n(67294),
                i = n(89250),
                o = n(95168),
                l = n(79442),
                c = n(22202),
                s = n(93261),
                u = n(55549),
                m = n(96985),
                d = n(43862),
                f = n(65578),
                p = n(78158),
                g = n(75099);
            const y = function() {
                var e = (0, i.UO)(),
                    t = e.groupId,
                    n = e.code,
                    y = (0, c.IB)().data,
                    h = (0, a.useState)(!1),
                    w = (0, r.Z)(h, 2),
                    E = w[0],
                    v = w[1],
                    b = (0, l.HI)(),
                    x = b.data,
                    C = b.isSuccess,
                    Z = b.error,
                    k = b.isFetching,
                    P = b.refetch;
                (0, o.Yz)(P, "completed" === (null == x ? void 0 : x.status) || "needs_review" === (null == x ? void 0 : x.status) ? 3e3 : null);
                var N = (0, s.r5)({
                        groupId: t,
                        purpose: "group"
                    }),
                    S = N.data,
                    O = N.isSuccess,
                    A = N.isError,
                    I = N.isFetching,
                    j = (0, c.Fe)(),
                    V = (0, r.Z)(j, 2),
                    D = V[0],
                    T = V[1],
                    R = T.isFetching,
                    _ = T.isError,
                    q = T.isSuccess,
                    z = (0, l.W3)(),
                    F = (0, r.Z)(z, 2),
                    L = F[0],
                    $ = F[1],
                    M = $.isFetching,
                    B = $.isError,
                    Y = $.isSuccess,
                    U = k || I || "completed" === (null == x ? void 0 : x.status) || "needs_review" === (null == x ? void 0 : x.status);
                return a.createElement(a.Fragment, null, a.createElement(m.$4, null, "Group Age Verification Beta"), U && a.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(d.Z, {
                    size: "5x"
                })), !U && C && O && a.createElement(a.Fragment, null, a.createElement(p.Z, {
                    group: S
                }), a.createElement("div", {
                    className: "tw-pb-10"
                }, a.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full tw-p-5 tw-rounded-lg tw-h-fit tw-flex tw-flex-col tw-items-center"
                }, a.createElement("h2", {
                    className: "tw-text-center"
                }, "Age Verification Beta"), "uninitialized" !== x.status ? a.createElement(u.Z, {
                    className: "tw-mt-5",
                    status: x,
                    error: Z,
                    groupId: t,
                    code: n
                }) : "member" !== (null == S ? void 0 : S.membershipStatus) ? a.createElement("p", null, "You must be a member of this group in order to access this page.") : S.tags.includes("admin_age_verification_enabled") ? S.ageVerificationSlotsAvailable ? a.createElement(a.Fragment, null, a.createElement("div", {
                    class: "tw-py-5 tw-flex tw-w-full"
                }, a.createElement(g.Z, {
                    userId: y.id,
                    isFluid: !0,
                    className: "tw-w-1/3 max-sm:tw-hidden"
                }), a.createElement("div", {
                    className: "md:tw-w-2/3 max-sm:tw-w-full tw-px-5 tw-flex tw-flex-direction tw-flex-col"
                }, a.createElement("span", null, "Welcome ", a.createElement("strong", null, y.displayName)), a.createElement("span", {
                    className: "tw-flex tw-items-center"
                }, a.createElement("span", {
                    className: "tw-flex-1"
                }, "Email: ", a.createElement("strong", null, y.obfuscatedEmail)), a.createElement(m.zx, {
                    onClick: function() {
                        return v(!0)
                    }
                }, "Change Email")), (null == y ? void 0 : y.hasPendingEmail) && a.createElement(m.qX, {
                    type: "info",
                    title: "Email Change Pending",
                    slim: !0
                }, a.createElement("strong", null, "An email change is pending verification: ", null == y ? void 0 : y.obfuscatedPendingEmail), a.createElement("div", null, a.createElement(m.zx, {
                    className: "tw-flex-none tw-mt-2",
                    disabled: R || q,
                    onClick: function() {
                        return D()
                    }
                }, q ? "Sent!" : "Resend Verification")), _ && a.createElement("p", {
                    role: "alert",
                    "aria-label": "Resend verification error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1"
                }, "An error occurred when trying to resend verification email.")), a.createElement("p", {
                    className: "tw-mt-5"
                }, "Getting Age Verified will grant you access to Age Verified Group Instances."), a.createElement("p", null, "The age verification process utilizes Persona to verify your government-issued ID and compare it to your likeness. VRChat will receive and process text extracted from your ID, and will not receive any images or face scans. This information is used to generate an irreversible hash, which is saved. All extracted text from your verification process other than your birth date is deleted."), a.createElement("p", null, "VRChat saves the generated hash and your birth date and then tells Persona to delete all of your information."), a.createElement("h4", {
                    className: "tw-text-lg"
                }, "To complete this process you will need:"), a.createElement("ul", null, a.createElement("li", null, "A valid email address."), a.createElement("li", null, "You will also need a valid government ID."), a.createElement("li", null, "You will need a computer or a smartphone with a camera to complete the validation process.")), a.createElement("p", null, "Please confirm your email address above to receive your unique link.", a.createElement("br", null), "Once you click the ", a.createElement("strong", null, '"Send Age Verification Email"'), " button, you'll get an email leading to the verification process."), a.createElement("p", null, "Please open this email with a camera-enabled device, such as a smartphone, to complete this process."))), a.createElement(m.zx, {
                    className: "tw-flex-none tw-px-4",
                    disabled: M || Y,
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
                }, "An error occurred when trying to send age verification email."), a.createElement(m.u_, {
                    isVisible: E,
                    onClose: function() {
                        return v(!1)
                    },
                    title: "Change Email",
                    slim: !0,
                    width: "600px"
                }, a.createElement("div", {
                    className: "tw-w-full"
                }, a.createElement(f.Z, null)))) : a.createElement("p", null, "This group does not have age verification beta slots remaining.") : a.createElement("p", null, "This group is not part of the age verification beta.")))), A && a.createElement("p", {
                    role: "alert",
                    "aria-label": "Page load error",
                    className: "tw-text-error-message-red tw-text-xs tw-mt-1 tw-text-center"
                }, "An error occurred when trying to load the page's data."))
            }
        },
        79442: (e, t, n) => {
            "use strict";
            n.d(t, {
                HI: () => i,
                MI: () => a,
                W3: () => o,
                nv: () => l
            });
            var r = n(61509).S.injectEndpoints({
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
        20640: (e, t, n) => {
            "use strict";
            var r = n(11742),
                a = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, o, l, c, s, u = !1;
                t || (t = {}), n = t.debug || !1;
                try {
                    if (o = r(), l = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", (function(r) {
                            if (r.stopPropagation(), t.format)
                                if (r.preventDefault(), void 0 === r.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = a[t.format] || a.default;
                                    window.clipboardData.setData(i, e)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                        })), document.body.appendChild(s), l.selectNodeContents(s), c.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
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
        74300: (e, t, n) => {
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
            var a = l(n(67294)),
                i = l(n(20640)),
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
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
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
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
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

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function(e) {
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
                    return y(p(e = l.call.apply(l, [this].concat(n))), "onClick", (function(t) {
                        var n = e.props,
                            r = n.text,
                            o = n.onCopy,
                            l = n.children,
                            c = n.options,
                            s = a.default.Children.only(l),
                            u = (0, i.default)(r, c);
                        o && o(r, u), s && s.props && "function" == typeof s.props.onClick && s.props.onClick(t)
                    })), e
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
            t.CopyToClipboard = h, y(h, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        74855: (e, t, n) => {
            "use strict";
            var r = n(74300).CopyToClipboard;
            r.CopyToClipboard = r, e.exports = r
        },
        11742: e => {
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
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=6c762a87edd4e5c00e5a5dd5606b7116e7f9001e1e13cff3139f1f39aa6f5588.js.map