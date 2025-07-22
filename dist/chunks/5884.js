"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5884], {
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var a = n(87462),
                r = n(45987),
                l = n(59545),
                o = n(68055),
                i = n(67294),
                s = n(86646),
                c = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, r.Z)(e, c);
                return null === n ? null : n ? i.createElement(s.Z, (0, a.Z)({
                    icon: o.LE,
                    size: m,
                    className: "text-success"
                }, d)) : i.createElement(s.Z, (0, a.Z)({
                    icon: l.NB,
                    size: m,
                    className: "text-warning"
                }, d))
            }
        },
        12611: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var a = n(92332),
                r = n(67294),
                l = n(34698),
                o = n(86646);
            const i = function(e) {
                var t = e.loading,
                    n = e.className,
                    i = e.onClick,
                    s = e.color,
                    c = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return r.createElement(l.Z, {
                    className: n,
                    onClick: i,
                    color: s,
                    hidden: u,
                    disabled: m
                }, r.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, c), r.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, r.createElement(o.Z, {
                    icon: a.LM,
                    spin: !0
                })))
            }
        },
        37549: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var a = n(87462),
                r = n(67294),
                l = n(89250);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.TH)(),
                        o = (0, l.s0)(),
                        i = (0, l.UO)();
                    return r.createElement(e, (0, a.Z)({}, t, {
                        router: {
                            location: n,
                            navigate: o,
                            params: i
                        }
                    }))
                }
            }
        },
        15884: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Dt
            });
            var a = n(67294),
                r = n(46382),
                l = n(17383),
                o = n(15861),
                i = n(54546),
                s = n(4965),
                c = n(76553),
                u = n(64687),
                m = n.n(u),
                d = n(89250),
                p = n(32981),
                f = n(62437),
                h = n(64258);
            const w = function() {
                var e = (0, d.s0)(),
                    t = (0, p.I0)(),
                    n = (0, f.aG)(),
                    s = (0, i.Z)(n, 2),
                    u = s[0],
                    w = s[1].isSuccess,
                    y = (0, l.Tu)().user,
                    v = a.useState(!1),
                    b = (0, i.Z)(v, 2),
                    Z = b[0],
                    x = b[1],
                    N = a.useState(!1),
                    C = (0, i.Z)(N, 2),
                    k = C[0],
                    P = C[1],
                    S = function() {
                        x(!1), P(!1)
                    },
                    O = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var n, a, r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return x(!1), P(!1), e.next = 4, u({
                                            userId: y.id
                                        });
                                    case 4:
                                        (n = e.sent).error && t((0, h.d)({
                                            title: "Failed to delete your account",
                                            icon: c.eH,
                                            message: null !== (a = null === (r = n.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 8e3
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return a.createElement("div", null, a.createElement(r.zx, {
                    type: "button",
                    className: "btn-danger",
                    onClick: function() {
                        x(!0)
                    },
                    danger: !0
                }, "Delete Account"), a.createElement(r.sm, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        x(!1), P(!0)
                    },
                    cancelCallback: S,
                    isOpen: Z
                }), a.createElement(r.sm, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: O,
                    cancelCallback: S,
                    isOpen: k
                }, a.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), a.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), a.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), w && a.createElement(r.u_, {
                    isVisible: !0,
                    title: "Your Account Will Delete in 14 Days",
                    onClose: function() {
                        e("/home/login", {
                            state: {
                                logout: !0
                            }
                        })
                    },
                    slim: !0
                }, a.createElement(g, null, a.createElement(E, null, "Your account is queued for deletion and will be deleted in 14 days. If you log into the application or the website, the deletion will be cancelled. You will now be logged out of the website and application."))))
            };
            var g = (0, s.Z)(r.JX, {
                    target: "e1c8z0io1"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                E = (0, s.Z)("p", {
                    target: "e1c8z0io0"
                })({
                    name: "1tmloek",
                    styles: "text-align:center;margin-right:100px;margin-left:100px"
                }),
                y = n(56646),
                v = n(6811),
                b = n(68412),
                Z = n(79442),
                x = n(22202),
                N = n(60006),
                C = n(86646),
                k = n(43862);
            const P = function() {
                var e = (0, x.q7)(),
                    t = e.data,
                    n = void 0 === t ? [] : t,
                    r = e.isError,
                    l = e.isFetching,
                    o = n.includes("permission-age-verification"),
                    i = (0, Z.HI)(),
                    s = i.data,
                    c = i.isError,
                    u = i.isFetching,
                    m = r || c;
                if (l || u) return a.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(k.Z, {
                    size: "5x"
                }));
                if (m) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(C.Z, {
                    icon: b.faCircleQuestion
                }), " Unable to determine your Age Verification status."), a.createElement(N.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!o) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(C.Z, {
                    icon: y.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), a.createElement(N.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                switch (s.status) {
                    case "verified":
                    case "approved":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(C.Z, {
                            icon: v.f8
                        }), " You have successfully verified your age. You may choose whether to display it on your profile."), a.createElement(N.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(C.Z, {
                            icon: y.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), a.createElement(N.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(C.Z, {
                            icon: y.faCircleInfo
                        }), " You can check your Age Verification status here."), a.createElement(N.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Check Status"))
                }
            };
            var S = n(42138),
                O = n(3820),
                T = n(23138),
                I = n(3620),
                A = n(29104);
            var D = (0, s.Z)("div", {
                target: "ezmvepu0"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const R = function() {
                var e, t = (0, p.I0)(),
                    n = (0, l.Tu)().user,
                    r = (0, a.useState)(new Set(n.contentFilters)),
                    o = (0, i.Z)(r, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, l.Nr)(s, 1400),
                    m = (0, f.Bb)(),
                    d = (0, i.Z)(m, 2),
                    w = d[0],
                    g = d[1],
                    E = g.isError,
                    y = g.error,
                    v = g.isSuccess;
                (0, a.useEffect)((function() {
                    if (null != n && n.id && u) {
                        var e = new Set(n.contentFilters),
                            t = (0, S.Z)(u);
                        t.length === e.size && t.every((function(t) {
                            return e.has(t)
                        })) || w({
                            userId: n.id,
                            contentFilters: t
                        })
                    }
                }), [u]), (0, a.useEffect)((function() {
                    v && t((0, h.d)({
                        title: "Content Gating Settings Updated",
                        icon: O.Yj,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }), [v]);
                return a.createElement(a.Fragment, null, a.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), E && a.createElement(T.Z, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == y || null === (e = y.data) || void 0 === e ? void 0 : e.error.message), Object.entries(I.N).map((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                    return a.createElement(D, {
                        key: n
                    }, a.createElement(A.Z, {
                        label: "Filter ".concat(r),
                        defaultChecked: s.has(n),
                        onChangeCallback: function() {
                            return e = n, void(s.has(e) ? c(new Set((0, S.Z)(s).filter((function(t) {
                                return t !== e
                            })))) : c(new Set(s).add(e)));
                            var e
                        }
                    }))
                })), a.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var F = n(79655),
                j = n(4942),
                z = n(82414),
                U = n(91557),
                q = (0, a.createContext)(null);
            const V = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, a.useState)(1),
                    o = (0, i.Z)(l, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, a.useState)(null),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    w = h[0],
                    g = h[1],
                    E = (0, a.useState)({}),
                    y = (0, i.Z)(E, 2),
                    v = y[0],
                    b = y[1],
                    Z = (0, a.useState)({}),
                    x = (0, i.Z)(Z, 2),
                    N = x[0],
                    C = x[1],
                    k = function() {
                        c(1), p(null), g(!1), b({}), n()
                    };
                return w ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.$1, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: z.sq
                }), a.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), a.createElement("p", null, "We will look into it and email you for next possible steps."), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: k
                }, "Done"))) : d ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.$1, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: z.sq
                }), a.createElement("h4", {
                    className: "tw-text-red"
                }, "DMCA Claim Cannot Be Completed.")), a.createElement("p", null, d), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.zx, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        return p(null)
                    },
                    neutral: !0
                }, "Back"), a.createElement(r.zx, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: k
                }, "Done"))) : a.createElement(q.Provider, {
                    value: {
                        next: function() {
                            c((function(e) {
                                return e + 1
                            }))
                        },
                        previous: function() {
                            c((function(e) {
                                return e - 1
                            }))
                        },
                        currentStep: s,
                        setFormError: p,
                        setFormSuccess: g,
                        ownerInfo: v,
                        setOwnerInfo: b,
                        claimInfo: N,
                        setClaimInfo: C,
                        resetForm: k
                    }
                }, a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                        (0, j.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = [{
                    label: "I am the owner of the copyright",
                    value: "owner"
                }, {
                    label: "I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed",
                    value: "authorized"
                }],
                M = new RegExp(/(?:avtr|wrld)_[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}/i),
                Y = function(e) {
                    return e.filter((function(e) {
                        return M.test(e)
                    })).map((function(e) {
                        var t;
                        return null === (t = e.match(M)) || void 0 === t ? void 0 : t[0]
                    }))
                };
            const B = function() {
                var e, t, n, l, o = (0, F.lr)(),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = (s[1], (0, a.useState)("owner")),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    w = h[0],
                    g = h[1],
                    E = (0, a.useState)(""),
                    y = (0, i.Z)(E, 2),
                    v = y[0],
                    b = y[1],
                    Z = (0, a.useContext)(q),
                    x = Z.previous,
                    N = Z.currentStep,
                    C = Z.claimInfo,
                    k = Z.setClaimInfo,
                    P = Z.ownerInfo,
                    S = Z.setFormError,
                    O = Z.setFormSuccess,
                    T = (null == w ? void 0 : w.owner) && (null == w ? void 0 : w.accurate) && (null == w ? void 0 : w.perjury) && (null == w ? void 0 : w.liability) && (null == w ? void 0 : w.abuse),
                    I = (null == C || null === (e = C.description) || void 0 === e ? void 0 : e.length) > 0 && (null == C || null === (t = C.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == C || null === (n = C.proof) || void 0 === n ? void 0 : n.length) > 0 && T && v.toLowerCase() === P.fullName.toLowerCase(),
                    A = (0, U.lw)(),
                    D = (0, i.Z)(A, 2),
                    R = D[0],
                    V = D[1],
                    $ = V.isError,
                    B = V.error,
                    G = V.isLoading,
                    K = V.isSuccess,
                    Q = V.reset;
                (0, a.useEffect)((function() {
                    var e = c.get("dmcaTarget");
                    e && k(L(L({}, C), {}, {
                        contentIds: Y([e])
                    }))
                }), []), (0, a.useEffect)((function() {
                    var e;
                    $ && (Q(), S("Could Not Proccess Claim: ".concat(null == B || null === (e = B.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }), [$, B]), (0, a.useEffect)((function() {
                    K && (Q(), O(!0))
                }), [K]);
                var X = function(e) {
                    g(L(L({}, w), {}, (0, j.Z)({}, e.target.id, e.target.checked)))
                };
                return 3 !== N ? null : a.createElement(a.Fragment, null, a.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", a.createElement(r.gx, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == C ? void 0 : C.description,
                    onChange: function(e) {
                        return k(L(L({}, C), {}, {
                            description: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-content-ids",
                    className: "tw-mb-4"
                }, "The ID or URL of infringing content", a.createElement(r.Lj, {
                    className: "tw-pt-2",
                    value: null == C ? void 0 : C.contentIds,
                    validator: function(e) {
                        return M.test(e)
                    },
                    onChange: function(e) {
                        return k(L(L({}, C), {}, {
                            contentIds: Y(e)
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return k(L(L({}, C), {}, {
                            proof: e.target.value
                        }))
                    },
                    value: null == C ? void 0 : C.proof
                })), a.createElement("label", {
                    htmlFor: "claim-authority",
                    className: "tw-mb-4"
                }, "Authority to make complaint", a.createElement(r.Lt, {
                    className: "tw-pt-2",
                    id: "claim-authority",
                    trimToLength: !0,
                    allowMultiline: !0,
                    options: _,
                    value: d,
                    onChange: function(e) {
                        return p(e)
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-owner",
                    className: "tw-mb-4"
                }, "Copyright Owner Name (optional)", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "claim-owner",
                    value: null == C ? void 0 : C.copyrightOwnerName,
                    onChange: function(e) {
                        return k(L(L({}, C), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), a.createElement(H, {
                    className: "tw-mb-4"
                }, a.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), a.createElement(r.XZ, {
                    id: "owner",
                    checked: null == w ? void 0 : w.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: X
                }), a.createElement(r.XZ, {
                    id: "accurate",
                    checked: null == w ? void 0 : w.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: X
                }), a.createElement(r.XZ, {
                    id: "perjury",
                    checked: null == w ? void 0 : w.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: X
                }), a.createElement(r.XZ, {
                    id: "liability",
                    checked: null == w ? void 0 : w.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: X
                }), a.createElement(r.XZ, {
                    id: "abuse",
                    checked: null == w ? void 0 : w.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: X
                })), a.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: v.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == P || null === (l = P.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), T ? null : a.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, a.createElement(r.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: z.sq
                }), a.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.zx, {
                    className: "tw-mr-2",
                    onClick: x,
                    containerStyles: W,
                    neutral: !0
                }, "Back"), a.createElement(r.zx, {
                    className: "tw-ml-2",
                    disabled: !I || G,
                    containerStyles: W,
                    onClick: function() {
                        return R({
                            claimInfo: C,
                            ownerInfo: P
                        })
                    }
                }, "Submit")))
            };
            var H = (0, s.Z)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                W = {
                    width: "100%"
                };
            const G = function() {
                var e = (0, a.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useContext)(q),
                    s = o.resetForm,
                    c = o.next,
                    u = o.currentStep,
                    m = o.setFormError;
                return 1 !== u ? null : a.createElement(a.Fragment, null, a.createElement("h6", {
                    className: "tw-mb-6"
                }, "Are you"), a.createElement("fieldset", null, a.createElement("label", {
                    htmlFor: "content-owner"
                }, a.createElement("input", {
                    id: "content-owner",
                    type: "radio",
                    value: "owner",
                    checked: "owner" === n,
                    onChange: function(e) {
                        return l(e.target.value)
                    }
                }), "  Submitting a claim on content I own/authorize to act on behalf of the owner"), a.createElement("label", {
                    htmlFor: "content-other",
                    className: "tw-mt-2"
                }, a.createElement("input", {
                    id: "content-other",
                    type: "radio",
                    value: "other",
                    checked: "other" === n,
                    onChange: function(e) {
                        return l(e.target.value)
                    }
                }), "  Submitting a claim for someone else's content")), a.createElement("fieldset", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.zx, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: s,
                    neutral: !0
                }, "Cancel"), a.createElement(r.zx, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        "owner" === n ? c() : m("We can only process DMCA claims by the owner or authorized representative of the claimed content.")
                    },
                    disabled: !n
                }, "Next")))
            };
            var K = n(59545),
                Q = n(83868),
                X = n.n(Q);

            function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(n), !0).forEach((function(t) {
                        (0, j.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const te = function() {
                var e = (0, a.useState)(!0),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = s[1],
                    m = (0, a.useContext)(q),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    w = m.setOwnerInfo;
                return (0, a.useEffect)((function() {
                    var e, t, n, a, r, l;
                    X()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (a = h.mailingCity) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (r = h.mailingCountry) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }), [h]), 2 !== f ? null : a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? a.createElement(ne, null, a.createElement(r.$1, {
                    className: "tw-px-2",
                    icon: z.sq
                }), a.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), a.createElement(r.$1, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: K.NB,
                    onClick: function() {
                        return l(!1)
                    }
                })) : null, a.createElement("label", {
                    htmlFor: "user-full-name",
                    className: "tw-mb-4"
                }, "Your Full Legal Name", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "user-full-name",
                    type: "text",
                    value: null == h ? void 0 : h.fullName,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            fullName: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == h ? void 0 : h.organization,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            organization: e.target.value
                        }))
                    }
                })), a.createElement("fieldset", {
                    className: "tw-flex tw-flex-col tw-mb-4 tw-p-2 tw-border tw-border-solid tw-border-light-grey tw-rounded"
                }, a.createElement("legend", null, "Mailing Address"), a.createElement("span", {
                    className: "tw-py-2 tw-block tw-text-sm tw-text-light-grey"
                }, "Please provide your complete postal address including street number, city, state/province, ZIP/postal code, and country."), a.createElement("label", {
                    htmlFor: "mailing-address",
                    className: "tw-mb-4"
                }, "Street", a.createElement(r.II, {
                    id: "owner-mailing-address",
                    value: null == h ? void 0 : h.mailingAddress,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingAddress: e.target.value
                        }))
                    }
                })), a.createElement("div", {
                    className: "tw-flex tw-gap-4"
                }, a.createElement("label", {
                    htmlFor: "mailing-city",
                    className: "tw-mb-4 tw-flex-grow"
                }, "City", a.createElement(r.II, {
                    id: "owner-mailing-city",
                    value: null == h ? void 0 : h.mailingCity,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", a.createElement(r.II, {
                    id: "owner-mailing-state-province",
                    value: null == h ? void 0 : h.mailingStateProvince,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", a.createElement(r.II, {
                    id: "owner-mailing-postal-code",
                    value: null == h ? void 0 : h.mailingPostalCode,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), a.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", a.createElement(r.II, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingCountry: e.target.value
                        }))
                    }
                }))), a.createElement("label", {
                    htmlFor: "owner-phone",
                    className: "tw-mb-4"
                }, "Phone Number", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "owner-phone",
                    type: "tel",
                    value: null == h ? void 0 : h.phoneNumber,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            phoneNumber: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "owner-email"
                }, "Email", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "owner-email",
                    type: "email",
                    value: null == h ? void 0 : h.email,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.zx, {
                    className: "tw-mr-2",
                    containerStyles: ae,
                    onClick: p,
                    neutral: !0
                }, "Back"), a.createElement(r.zx, {
                    className: "tw-ml-2",
                    containerStyles: ae,
                    disabled: !c,
                    onClick: d
                }, "Next")))
            };
            var ne = (0, s.Z)("div", {
                    target: "exj8v4t0"
                })({
                    name: "5vwt1n",
                    styles: "display:flex;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                }),
                ae = {
                    width: "100%"
                };
            const re = function() {
                var e = (0, F.lr)(),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = s[1];
                (0, a.useEffect)((function() {
                    var e = Object.fromEntries((0, S.Z)(n.entries()).filter((function(e) {
                        return "dmcaClaimForm" !== (0, i.Z)(e, 1)[0]
                    })));
                    c && (e.dmcaClaimForm = !0), l(e)
                }), [c]), (0, a.useEffect)((function() {
                    n.get("dmcaClaimForm") && u(!0)
                }), []);
                return a.createElement(a.Fragment, null, a.createElement("p", null, "If you are aware of unauthorized use of your property, you can use the button below to request a DMCA takedown."), a.createElement(r.zx, {
                    onClick: function() {
                        return u(!0)
                    }
                }, "File a DMCA Claim"), a.createElement(r.u_, {
                    width: "80%",
                    title: "DMCA Claim",
                    slim: !0,
                    isVisible: c,
                    onClose: function() {
                        return u(!1)
                    }
                }, a.createElement(V, {
                    closeModal: function() {
                        u(!1)
                    }
                }, a.createElement(G, null), a.createElement(te, null), a.createElement(B, null))))
            };
            var le = n(65578),
                oe = n(84176),
                ie = n(22081),
                se = n(92332),
                ce = n(34424),
                ue = n(27484),
                me = n.n(ue),
                de = n(21442),
                pe = n(35773),
                fe = n(95305),
                he = n(34698),
                we = n(8860),
                ge = n(98185),
                Ee = n(5513),
                ye = n(8698),
                ve = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                be = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                Ze = (0, ye.P1)(ve, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                })),
                xe = (0, ye.P1)(ve, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                })),
                Ne = (0, ye.P1)(ve, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                })),
                Ce = (0, ye.P1)(ve, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                })),
                ke = (0, ye.P1)(be, (function(e) {
                    return null !== e && e.length > 0
                })),
                Pe = (0, ye.P1)(ke, be, (function(e, t) {
                    return e && t.reduce((function(e, t) {
                        return me()(t.updated_at) > me()(e.updated_at) ? t : e
                    }), {
                        updated_at: 0
                    })
                })),
                Se = (0, ye.P1)(be, Pe, (function(e, t) {
                    return null !== e && t.updated_at
                })),
                Oe = (0, ye.P1)(be, Pe, (function(e, t) {
                    return null !== e && t.displayName
                })),
                Te = (0, ye.P1)(be, Pe, (function(e, t) {
                    return null !== e && !!t.reverted
                })),
                Ie = n(76938),
                Ae = n(52926),
                De = n(1059),
                Re = n(45697),
                Fe = n.n(Re),
                je = function(e) {
                    var t = e.canChangeDisplayName,
                        n = e.validationError,
                        l = e.displayNameChanged,
                        o = void 0 !== l && l,
                        i = (0, p.v9)(xe),
                        s = (0, p.v9)(Ce),
                        c = (0, p.v9)(Se),
                        u = o || (0, p.v9)((function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return a.createElement(a.Fragment, null, t && a.createElement(T.Z, {
                        color: "info"
                    }, a.createElement(r.$1, {
                        icon: z.sq,
                        color: "teal"
                    }), " You may only change your display name once every 3 months, choose wisely! Once you change your name, you may never be able to get your original name back!"), !t && a.createElement(T.Z, {
                        color: "info",
                        "aria-label": "name warning"
                    }, a.createElement(r.$1, {
                        icon: De.U$
                    }), " Your next allowed display name change is in ", 90 - me()().diff(c, "days"), " days"), null !== n && a.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, a.createElement(r.$1, {
                        icon: ie.lE
                    }), " ".concat(n)), i && null === n && a.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, a.createElement(r.$1, {
                        icon: Ae.B1
                    }), " That display name is already in use."), s && null === n && a.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, a.createElement(r.$1, {
                        icon: Ae.B1
                    }), " That display name includes characters that cannot be used. Please try again."), u && a.createElement(T.Z, {
                        color: "success",
                        "aria-label": "name change success"
                    }, a.createElement(r.$1, {
                        icon: ie.lE
                    }), " Your display name has been changed!"))
                };
            je.propTypes = {
                canChangeDisplayName: Fe().bool.isRequired,
                validationError: Fe().string
            };
            const ze = je;
            var Ue = function(e) {
                var t = e.displayNameError,
                    n = (0, p.I0)();
                return a.createElement("div", {
                    className: "center-panel"
                }, a.createElement("div", {
                    className: "mb-4"
                }, a.createElement("p", null, "Name change was not successful due to:", a.createElement("br", null), a.createElement("code", null, t), a.createElement("br", null), "If issues persist, please contact VRChat Support at", " ", a.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://help.vrchat.com"
                }, "help.vrchat.com"), "."), a.createElement(he.Z, {
                    className: "me-2",
                    onClick: function() {
                        return n((0, Ee.IX)())
                    },
                    color: "primary"
                }, "Try Again")))
            };
            Ue.propTypes = {
                displayNameError: Fe().string.isRequired
            };
            const qe = Ue;
            var Ve = (0, s.Z)("p", {
                    target: "ek3joju1"
                })({
                    name: "dzbp6p",
                    styles: "white-space:pre-wrap;line-height:2"
                }),
                $e = (0, s.Z)("b", {
                    target: "ek3joju0"
                })({
                    name: "lii32t",
                    styles: "font-size:1.2em;color:var(--bs-primary)"
                }),
                Le = function(e) {
                    var t = e.canRevertDisplayName,
                        n = e.numberOfDays,
                        r = e.showLastDisplayNameChange;
                    return a.createElement(Ve, null, r && a.createElement(a.Fragment, null, "It has been ", n, " days since your last display name change.", a.createElement("br", null)), "• You may only change your display name once per 90 days.", a.createElement("br", null), t && a.createElement(a.Fragment, null, "• You can revert your last display name change.", a.createElement("br", null)))
                };
            Le.propTypes = {
                canRevertDisplayName: Fe().bool.isRequired,
                numberOfDays: Fe().number.isRequired,
                showLastDisplayNameChange: Fe().bool.isRequired
            };
            const _e = Le;
            var Me = n(39886),
                Ye = n(56599),
                Be = n(54610),
                He = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.I0)(),
                        s = (0, p.v9)((function(e) {
                            return e.currentUser.databaseUser.id
                        })),
                        u = (0, a.useState)(""),
                        d = (0, i.Z)(u, 2),
                        f = d[0],
                        w = d[1],
                        g = (0, a.useState)(""),
                        E = (0, i.Z)(g, 2),
                        y = E[0],
                        v = E[1],
                        b = (0, a.useState)(!0),
                        Z = (0, i.Z)(b, 2),
                        x = Z[0],
                        N = Z[1],
                        C = (0, a.useState)(!1),
                        k = (0, i.Z)(C, 2),
                        P = k[0],
                        S = k[1];
                    (0, a.useEffect)((function() {
                        return N("" === y || f !== n)
                    }), [y, f]);
                    var O = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var a, r, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, Ee.eu)({
                                            userId: s,
                                            displayName: n,
                                            currentPassword: y,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (a = null === (r = e.t0.response) || void 0 === r || null === (r = r.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), S(!1), l((0, h.d)({
                                            title: "Failed to revert display name",
                                            icon: c.eH,
                                            message: i,
                                            color: "danger",
                                            timeout: 8e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return a.createElement("div", {
                        className: "center-panel"
                    }, a.createElement(Me.Z, {
                        className: "mb-4",
                        outline: !0
                    }, a.createElement(Ye.Z, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), a.createElement(Be.Z, null, a.createElement(Ve, null, "This will change your display name back to:", a.createElement("br", null), a.createElement($e, null, n), a.createElement("br", null), "And restart the 90-day timer.", a.createElement("br", null), "Type your previous display name into the field below to revert."), a.createElement("input", {
                        "aria-label": "enter revert name",
                        type: "text",
                        className: "form-control mt-2 mb-2",
                        placeholder: "Type ".concat(n, " to Confirm"),
                        onChange: function(e) {
                            return w(e.target.value)
                        },
                        value: f
                    }), a.createElement("input", {
                        className: "form-control mb-2",
                        id: "namePasswordVerify",
                        name: "namePasswordVerify",
                        "aria-label": "Please confirm current password",
                        onChange: function(e) {
                            return v(e.target.value)
                        },
                        placeholder: "Please confirm current password",
                        type: "password",
                        value: y
                    }), a.createElement(he.Z, {
                        className: "me-2",
                        onClick: function() {
                            return S(!0)
                        },
                        disabled: x,
                        color: "primary"
                    }, "Ok"), a.createElement(he.Z, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), a.createElement(r.sm, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: O,
                        cancelCallback: function() {
                            return S(!1)
                        },
                        isOpen: P
                    }))
                };
            He.propTypes = {
                exitRevertCallback: Fe().func.isRequired,
                previousDisplayName: Fe().string
            };
            const We = He;
            const Ge = function() {
                var e, t, n = (0, p.I0)(),
                    s = (0, f.yi)(),
                    c = (0, i.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    h = d.isLoading,
                    w = d.isError,
                    g = d.error,
                    E = d.isSuccess,
                    y = (0, p.v9)(Ze),
                    v = (0, p.v9)(Ne),
                    b = (0, p.v9)(ve),
                    Z = (0, p.v9)(ke),
                    x = (0, p.v9)(Te),
                    N = (0, p.v9)(Ie.y),
                    C = (0, p.v9)(Se),
                    k = (0, p.v9)(Oe),
                    P = (0, p.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    S = (0, a.useState)(!0),
                    O = (0, i.Z)(S, 2),
                    I = O[0],
                    A = O[1],
                    D = (0, a.useState)(null),
                    R = (0, i.Z)(D, 2),
                    F = R[0],
                    j = R[1],
                    z = (0, a.useState)(""),
                    U = (0, i.Z)(z, 2),
                    q = U[0],
                    V = U[1],
                    $ = (0, a.useState)(""),
                    L = (0, i.Z)($, 2),
                    _ = L[0],
                    M = L[1],
                    Y = (0, a.useState)(null),
                    B = (0, i.Z)(Y, 2),
                    H = B[0],
                    W = B[1],
                    G = (0, a.useState)(""),
                    K = (0, i.Z)(G, 2),
                    Q = K[0],
                    X = K[1],
                    J = a.useState(!1),
                    ee = (0, i.Z)(J, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = (0, a.useState)(!1),
                    re = (0, i.Z)(ae, 2),
                    le = re[0],
                    ue = re[1],
                    ye = (0, l.Nr)(Q),
                    be = y && v && "" !== ye;
                if ((0, a.useEffect)((function() {
                        N ? A(!0) : Z && me()().diff(C, "days") < 90 ? A(!1) : A(!0)
                    }), [C]), (0, a.useEffect)((function() {
                        "" !== ye ? ye.length < 4 ? W("That name is too short.") : ye.length > 15 ? W("That name is too long.") : (W(null), V(""), n((0, Ee.Zm)({
                            displayName: ye,
                            userId: P.id
                        }))) : W(null)
                    }), [ye]), (0, a.useEffect)((function() {
                        return "" === q ? (ne(!1), void j(null)) : q !== Q ? (ne(!1), void j("Names don't match")) : (ne(!0), void j(null))
                    }), [q]), w) return a.createElement(qe, {
                    displayNameError: null !== (e = null === (t = g.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (le) return a.createElement(We, {
                    previousDisplayName: k,
                    exitRevertCallback: function() {
                        return ue(!1)
                    }
                });
                var xe = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, n(u({
                                            password: _,
                                            displayName: Q,
                                            revertDisplayName: !1,
                                            userId: P.id
                                        }));
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), console.error(e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ce = !I && !x;
                return a.createElement(ge.Z, {
                    loading: h
                }, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(de.Z, null, a.createElement(_e, {
                    canRevertDisplayName: Ce,
                    showLastDisplayNameChange: !I,
                    numberOfDays: me()().diff(C, "days")
                }), a.createElement(pe.Z, null, a.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: ce.Qj,
                    size: "2x"
                })), a.createElement(fe.Z, {
                    xs: "10"
                }, a.createElement(pe.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !I,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return X(e.target.value)
                    },
                    placeholder: P.displayName,
                    type: "text",
                    value: Q
                }), a.createElement(ze, {
                    canChangeDisplayName: I,
                    displayName: P.displayName,
                    displayNameAvailable: y,
                    displayNameValue: Q,
                    isRevert: !1,
                    latestChangedDate: C,
                    displayNameChecking: b,
                    validationError: H,
                    displayNameChanged: E
                }))), a.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, b && a.createElement(r.$1, {
                    icon: se.LM,
                    spin: !0,
                    size: "2x"
                }), "" !== Q && !b && a.createElement(we.Z, {
                    "aria-label": y && v ? "Name is available" : "Name is unavailable",
                    ok: y && v
                }))), be && !E && a.createElement(pe.Z, null, a.createElement(fe.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, a.createElement(pe.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "confirm display name",
                    autoComplete: "off",
                    className: "form-control",
                    id: "confirmDisplayName",
                    name: "confirmDisplayName",
                    onChange: function(e) {
                        return V(e.target.value)
                    },
                    placeholder: "Please confirm display name",
                    type: "text",
                    value: q
                }), null !== F && a.createElement(T.Z, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, a.createElement(r.$1, {
                    icon: ie.lE
                }), " ".concat(F)))), a.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== q && a.createElement(we.Z, {
                    "aria-label": null !== F ? F : "Confirmation name matches",
                    ok: null === F
                }))), te && !E && a.createElement(pe.Z, {
                    className: "mt-2"
                }, a.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: oe.DD,
                    size: "2x"
                })), a.createElement(fe.Z, {
                    xs: "10"
                }, a.createElement(pe.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "Please confirm current password",
                    className: "form-control",
                    id: "namePasswordVerify",
                    name: "namePasswordVerify",
                    onChange: function(e) {
                        return M(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: _
                })))), a.createElement(pe.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, Ce && a.createElement(fe.Z, {
                    xs: "6"
                }, a.createElement(he.Z, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return ue(!0)
                    }
                }, "Revert Display Name Change")), a.createElement(fe.Z, {
                    xs: "6"
                }, a.createElement(he.Z, {
                    disabled: !I || !0 === b || null !== F || "" === q || "" === _ || null !== H || "" === Q,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: xe
                }, "Change Display Name"))))))
            };
            var Ke = n(15671),
                Qe = n(43144),
                Xe = n(97326),
                Je = n(60136),
                et = n(82963),
                tt = n(61120),
                nt = n(609),
                at = n(82470);

            function rt(e) {
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
                    var n, a = (0, tt.Z)(e);
                    if (t) {
                        var r = (0, tt.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, et.Z)(this, n)
                }
            }
            var lt = function(e) {
                (0, Je.Z)(c, e);
                var t, n, l, i, s = rt(c);

                function c(e) {
                    var t;
                    return (0, Ke.Z)(this, c), (t = s.call(this, e)).state = {
                        currentPassword: "",
                        newPassword: "",
                        newPasswordError: !1,
                        newPasswordOk: null,
                        showConfirmation: !1,
                        showPassword: !1,
                        confirmation: "",
                        confirmationError: !1,
                        confirmationOk: null,
                        ready: !1
                    }, t.handleCurrentPassword = t.handleCurrentPassword.bind((0, Xe.Z)(t)), t.handleNewPassword = t.handleNewPassword.bind((0, Xe.Z)(t)), t.handleConfirmation = t.handleConfirmation.bind((0, Xe.Z)(t)), t.handleSubmit = t.handleSubmit.bind((0, Xe.Z)(t)), t
                }
                return (0, Qe.Z)(c, [{
                    key: "handleCurrentPassword",
                    value: (i = (0, o.Z)(m().mark((function e(t) {
                        var n;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.target.value, e.next = 3, this.setStatePromisified({
                                        currentPassword: n,
                                        ready: this.state.newPasswordOk && this.state.confirmationOk && "" !== n
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "handleNewPassword",
                    value: (l = (0, o.Z)(m().mark((function e(t) {
                        var n, a, r, l, o;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.target.value, e.next = 3, this.setStatePromisified({
                                        newPassword: n,
                                        newPasswordError: !1,
                                        newPasswordOk: null,
                                        ready: !1
                                    });
                                case 3:
                                    if (null == n || "" === n) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.next = 6, this.setStatePromisified({
                                        newPasswordError: null
                                    });
                                case 6:
                                    return a = !1, n.length < 8 ? a = "That password is too short" : (0, at.w)(n) && (a = "Please try a more secure password"), r = !a, l = !1, o = !1, "" !== this.state.confirmation && (this.state.confirmation !== n ? l = "Passwords don't match" : o = !0), e.next = 14, this.setStatePromisified({
                                        newPasswordError: a,
                                        newPasswordOk: r,
                                        confirmationError: l,
                                        confirmationOk: o,
                                        showConfirmation: "" !== this.state.confirmation || r,
                                        showPassword: "" !== this.state.currentPassword || r && this.state.confirmationOk,
                                        ready: r && this.state.confirmationOk && "" !== this.state.currentPassword
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "handleConfirmation",
                    value: (n = (0, o.Z)(m().mark((function e(t) {
                        var n, a, r;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.target.value, e.next = 3, this.setStatePromisified({
                                        confirmation: n,
                                        confirmationError: !1,
                                        confirmationOk: null,
                                        ready: !1
                                    });
                                case 3:
                                    if (null == n || "" === n) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 6, this.setStatePromisified({
                                        confirmationError: null
                                    });
                                case 6:
                                    return a = !1, n !== this.state.newPassword && (a = "Passwords don't match"), r = !a, e.next = 11, this.setStatePromisified({
                                        confirmationError: a,
                                        confirmationOk: r,
                                        showPassword: "" !== this.state.currentPassword || this.state.newPasswordOk && r,
                                        ready: this.state.newPasswordOk && r && "" !== this.state.currentPassword
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "handleSubmit",
                    value: (t = (0, o.Z)(m().mark((function e(t) {
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), e.next = 3, this.props.dispatch((0, Ee.Cp)({
                                        userId: this.props.currentUser.id,
                                        password: this.state.newPassword,
                                        currentPassword: this.state.currentPassword
                                    }));
                                case 3:
                                    return e.next = 5, this.setStatePromisified({
                                        currentPassword: "",
                                        newPassword: "",
                                        newPasswordError: !1,
                                        newPasswordOk: null,
                                        showConfirmation: !1,
                                        showPassword: !1,
                                        confirmation: "",
                                        confirmationError: !1,
                                        confirmationOk: null,
                                        ready: !1
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "setStatePromisified",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n) {
                            t.setState(e, n)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.password;
                        return a.createElement(ge.Z, {
                            loading: e.changing
                        }, a.createElement("div", {
                            className: "center-panel"
                        }, a.createElement("form", {
                            onSubmit: this.handleSubmit
                        }, "" !== e.error && a.createElement(T.Z, {
                            color: "warning"
                        }, a.createElement(r.$1, {
                            icon: ie.lE
                        }), " An error occurred: ", e.error), a.createElement(pe.Z, null, a.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, a.createElement(r.$1, {
                            icon: nt.by,
                            size: "2x"
                        })), a.createElement(fe.Z, {
                            xs: "10"
                        }, a.createElement(pe.Z, {
                            className: "mx-0"
                        }, a.createElement("input", {
                            type: "password",
                            id: "newPassword",
                            name: "newPassword",
                            className: "form-control",
                            placeholder: "Please enter new password",
                            onChange: this.handleNewPassword,
                            onKeyUp: this.handleNewPassword
                        }), this.state.newPasswordError && a.createElement(T.Z, {
                            color: "warning"
                        }, a.createElement(r.$1, {
                            icon: ie.lE
                        }), " ", this.state.newPasswordError), e.changed && a.createElement(T.Z, {
                            color: "success"
                        }, a.createElement(r.$1, {
                            icon: ie.lE
                        }), " Your password has been changed!"))), a.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, a.createElement(we.Z, {
                            ok: this.state.newPasswordOk
                        }))), this.state.showConfirmation && a.createElement(pe.Z, null, a.createElement(fe.Z, {
                            xs: {
                                size: 10,
                                offset: 1
                            }
                        }, a.createElement(pe.Z, {
                            className: "mx-0"
                        }, a.createElement("input", {
                            type: "password",
                            id: "confirmNewPassword",
                            name: "confirmNewPassword",
                            className: "form-control",
                            placeholder: "Please confirm new password",
                            onChange: this.handleConfirmation,
                            onKeyUp: this.handleConfirmation
                        }), this.state.confirmationError && a.createElement(T.Z, {
                            color: "warning"
                        }, a.createElement(r.$1, {
                            icon: ie.lE
                        }), " ", this.state.confirmationError))), a.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, a.createElement(we.Z, {
                            ok: this.state.confirmationOk
                        }))), this.state.showPassword && a.createElement(pe.Z, null, a.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, a.createElement(r.$1, {
                            icon: oe.DD,
                            size: "2x"
                        })), a.createElement(fe.Z, {
                            xs: "10"
                        }, a.createElement(pe.Z, {
                            className: "mx-0"
                        }, a.createElement("input", {
                            type: "password",
                            id: "passwordPasswordVerify",
                            name: "passwordPasswordVerify",
                            className: "form-control",
                            placeholder: "Please confirm current password",
                            onChange: this.handleCurrentPassword,
                            onKeyUp: this.handleCurrentPassword
                        })))), a.createElement(pe.Z, {
                            className: "align-items-center justify-content-center d-flex mt-2"
                        }, a.createElement(fe.Z, {
                            xs: "4"
                        }, a.createElement("button", {
                            disabled: !this.state.ready,
                            className: "btn btn-primary w-100",
                            id: "password-change-submit",
                            name: "name-change-submit",
                            value: "update",
                            type: "submit"
                        }, "Change Password"))))))
                    }
                }]), c
            }(a.Component);
            const ot = (0, p.$j)((function(e) {
                return {
                    currentUser: e.currentUser.databaseUser,
                    password: e.currentUser.password
                }
            }))(lt);
            var it = n(42501),
                st = n(67714);
            const ct = function() {
                var e, t, n = (0, p.I0)(),
                    l = (0, x.IB)().data,
                    s = null == l || null === (e = l.presence) || void 0 === e ? void 0 : e.world,
                    c = (0, f.u4)({
                        userId: null == l ? void 0 : l.id,
                        worldId: s
                    }, {
                        skip: !s
                    }),
                    u = c.isLoading,
                    d = c.isError,
                    w = !(u || d),
                    g = (0, f.IO)(),
                    E = (0, i.Z)(g, 2),
                    y = E[0],
                    v = E[1],
                    b = v.isLoading,
                    Z = v.isError,
                    N = v.error,
                    C = v.reset,
                    k = a.useState(!1),
                    P = (0, i.Z)(k, 2),
                    S = P[0],
                    O = P[1],
                    T = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, y({
                                            userId: l.id
                                        }).unwrap();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return");
                                    case 8:
                                        O(!1), n((0, h.d)({
                                            title: "All User Data Reset",
                                            icon: st.iC,
                                            message: "Your user data has been reset in all worlds you've visited. Rejoin worlds for changes to take effect.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    I = w ? "This action will reset your user data in all worlds you've visited except any world you're currently in. To reset that world's data, please exit it first, then go to \"Reset User Data\" in the world's details." : "This action will reset your user data in all worlds you've visited. Rejoin worlds for changes to take effect.";
                return a.createElement(a.Fragment, null, a.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), a.createElement(r.zx, {
                    type: "button",
                    onClick: function() {
                        O(!0)
                    },
                    danger: !0
                }, a.createElement(r.$1, {
                    icon: it.faUserXmark
                }), " Reset All User Data"), a.createElement(r.sm, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: T,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        O(!1), C()
                    },
                    isOpen: S,
                    isLoading: b
                }, a.createElement("p", null, I), a.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), Z && a.createElement(r.qX, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == N || null === (t = N.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var ut = n(21707);
            const mt = function() {
                var e = (0, a.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = function() {
                        try {
                            window.OneTrust.ToggleInfoDisplay()
                        } catch (e) {
                            l("OneTrust not loaded. Disable your ad blocker and refresh the page to try again.")
                        }
                    };
                return (0, a.useEffect)((function() {
                    return window.addEventListener("OneTrustGroupsUpdated", o),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", o)
                        }
                }), []), a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(pe.Z, null, a.createElement(fe.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), n ? a.createElement(T.Z, {
                    className: "warning"
                }, a.createElement(r.$1, {
                    icon: ut.e7
                }), " ", n) : a.createElement(pe.Z, null, a.createElement(fe.Z, {
                    xs: "10"
                }, a.createElement(he.Z, {
                    type: "button",
                    color: "primary",
                    onClick: o
                }, "Change Privacy Settings"))))
            };
            var dt = n(85020),
                pt = n(65394),
                ft = n(2909),
                ht = n(32966),
                wt = n(50906),
                gt = n(45432),
                Et = n(74855),
                yt = n(53637),
                vt = n(12611),
                bt = n(37549),
                Zt = n(9669),
                xt = n.n(Zt);

            function Nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ct(e) {
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
                    var n, a = (0, tt.Z)(e);
                    if (t) {
                        var r = (0, tt.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, et.Z)(this, n)
                }
            }
            var kt = "https://docs.vrchat.com/docs/setup-2fa",
                Pt = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                St = "otpDownload",
                Ot = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                Tt = function(e) {
                    (0, Je.Z)(n, e);
                    var t = Ct(n);

                    function n(e) {
                        var r;
                        return (0, Ke.Z)(this, n), r = t.call(this, e), (0, j.Z)((0, Xe.Z)(r), "getOneTimePasswords", (0, o.Z)(m().mark((function e() {
                            var t, n, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return clearTimeout(r.state.forgetOtpTimeout), t = setTimeout((function() {
                                            r.setState({
                                                isOneTimePasswordsShown: !1
                                            }), r.props.dispatch({
                                                type: "TWOFACTORAUTH_FORGET_OTP"
                                            })
                                        }), 6e4), r.setState({
                                            forgetOtpTimeout: t
                                        }), e.prev = 3, e.next = 6, r.props.dispatch({
                                            type: "TWOFACTORAUTH_GET_OTP",
                                            payload: xt().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
                                        });
                                    case 6:
                                        a = e.sent, (null === (n = a.value) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) > 0 && r.props.router.navigate("/home/twofactorauth", {
                                            state: {
                                                redirectTo: "/home/profile"
                                            }
                                        }), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), console.error(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })))), (0, j.Z)((0, Xe.Z)(r), "disable", function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                var n, a;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, r.props.dispatch({
                                                type: "TWOFACTORAUTH_REMOVE",
                                                payload: xt().delete(window.apiUrl("/api/1/auth/twofactorauth"))
                                            });
                                        case 4:
                                            a = e.sent, (null === (n = a.value) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) > 0 && r.props.router.navigate("/home/twofactorauth", {
                                                state: {
                                                    redirectTo: "/home/profile"
                                                }
                                            }), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), r.state = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Nt(Object(n), !0).forEach((function(t) {
                                    (0, j.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, Ot), r.ref = a.createRef(), r.enable = r.enable.bind((0, Xe.Z)(r)), r.renderSetup = r.renderSetup.bind((0, Xe.Z)(r)), r.renderStatus = r.renderStatus.bind((0, Xe.Z)(r)), r.handleChangeVerifyCode = r.handleChangeVerifyCode.bind((0, Xe.Z)(r)), r.handleVerifyPendingSecret = r.handleVerifyPendingSecret.bind((0, Xe.Z)(r)), r.isSettingUp = r.isSettingUp.bind((0, Xe.Z)(r)), r.cancelSecret = r.cancelSecret.bind((0, Xe.Z)(r)), r.showTextKey = r.showTextKey.bind((0, Xe.Z)(r)), r.goToStep0 = r.goToStep0.bind((0, Xe.Z)(r)), r.goToStep1 = r.goToStep1.bind((0, Xe.Z)(r)), r.goToStep2 = r.goToStep2.bind((0, Xe.Z)(r)), r.toggleOneTimePasswordsShown = r.toggleOneTimePasswordsShown.bind((0, Xe.Z)(r)), r.hasOneTimePasswords = r.hasOneTimePasswords.bind((0, Xe.Z)(r)), r.getOneTimePasswordHref = r.getOneTimePasswordHref.bind((0, Xe.Z)(r)), r.downloadOneTimePasswords = r.downloadOneTimePasswords.bind((0, Xe.Z)(r)), r.triggerOtpDownloadLink = r.triggerOtpDownloadLink.bind((0, Xe.Z)(r)), r
                    }
                    return (0, Qe.Z)(n, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.state.isWaitingToDownloadOtp && this.hasOneTimePasswords() && (this.triggerOtpDownloadLink(), this.setState({
                                isWaitingToDownloadOtp: !1
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.state.forgetOtpTimeout)
                        }
                    }, {
                        key: "handleChangeVerifyCode",
                        value: function(e) {
                            this.state.isPreviousSubmissionRelevant = !1;
                            var t = !1,
                                n = e.target.value;
                            ("string" == typeof n || n instanceof String) && (t = 6 === (n = n.replace(/[\s\D]+/g, "").substr(0, 6)).length), this.setState({
                                code: n,
                                isCodeReady: t
                            })
                        }
                    }, {
                        key: "handleVerifyPendingSecret",
                        value: function(e) {
                            var t, n;
                            this.state.isCodeReady && (this.state.isPreviousSubmissionRelevant = !0, this.props.dispatch((t = {
                                code: this.state.code
                            }, n = t.code, {
                                type: "TWOFACTORAUTH_VERIFY_PENDING_SECRET",
                                payload: xt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
                                    code: n
                                })
                            }))), e.preventDefault()
                        }
                    }, {
                        key: "getOneTimePasswordHref",
                        value: function() {
                            var e = this.props.twoFactorAuth,
                                t = "";
                            return this.hasOneTimePasswords() && (t = "".concat("VRChat Two-Factor Authentication recovery codes\n===============================================\n\nYou can use these to log in, in case you lose access to your authenticator app codes. \n\nYou can only use each recovery code once.\n\nKeep these safe and secure! Printing them out is a very good idea.\n\n").concat(e.otp.filter((function(e) {
                                return !e.used
                            })).map((function(e) {
                                return "".concat(Pt(e.code), "\n")
                            })).join(""))), "data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))
                        }
                    }, {
                        key: "isSettingUp",
                        value: function() {
                            return null != this.props.twoFactorAuth.pendingSecret
                        }
                    }, {
                        key: "enable",
                        value: function(e) {
                            e.preventDefault(), this.setState(Ot), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: xt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(Ot), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: xt().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "showTextKey",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                isTextKeyShown: !0
                            })
                        }
                    }, {
                        key: "goToStep0",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                step: 0
                            })
                        }
                    }, {
                        key: "goToStep1",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                step: 1
                            })
                        }
                    }, {
                        key: "goToStep2",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                step: 2
                            })
                        }
                    }, {
                        key: "hasOneTimePasswords",
                        value: function() {
                            var e = this.props.twoFactorAuth;
                            return "otp" in e && Array.isArray(e.otp)
                        }
                    }, {
                        key: "toggleOneTimePasswordsShown",
                        value: function(e) {
                            e.preventDefault(), this.state.isOneTimePasswordsShown || this.getOneTimePasswords(), this.setState((function(e) {
                                return {
                                    isOneTimePasswordsShown: !e.isOneTimePasswordsShown
                                }
                            }))
                        }
                    }, {
                        key: "downloadOneTimePasswords",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                isWaitingToDownloadOtp: !0
                            }), this.getOneTimePasswords()
                        }
                    }, {
                        key: "triggerOtpDownloadLink",
                        value: function() {
                            document.getElementById(St).click(), this.setState({
                                isWaitingToDownloadOtp: !1
                            })
                        }
                    }, {
                        key: "renderStatus",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.twoFactorAuthEnabled,
                                l = t.twoFactorAuth,
                                o = function() {
                                    if (n) {
                                        var t = e.getOneTimePasswordHref();
                                        return a.createElement("div", null, a.createElement("div", null, a.createElement("p", null, a.createElement(r.$1, {
                                            icon: gt.a3,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", a.createElement("a", {
                                            href: kt,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), a.createElement("p", null, a.createElement(vt.Z, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), a.createElement("div", null, a.createElement("p", null, a.createElement(r.$1, {
                                            icon: ut.e7,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), a.createElement("p", null, "We", " ", a.createElement("strong", null, a.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && a.createElement(T.Z, {
                                            color: "warning"
                                        }, a.createElement(r.$1, {
                                            icon: ut.e7
                                        }), " Something went wrong downloading recovery codes."), a.createElement("div", null, a.createElement("p", null, a.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, a.createElement(vt.Z, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), a.createElement("span", null, a.createElement(vt.Z, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), a.createElement("a", {
                                            id: St,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return a.createElement("div", null, a.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", a.createElement("a", {
                                        href: kt,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), a.createElement("p", null, a.createElement(vt.Z, {
                                        onClick: e.enable,
                                        color: "primary",
                                        loading: l.isAwaitingPendingSecret
                                    }, "Enable")))
                                };
                            return a.createElement("div", null, o(), e.state.isOneTimePasswordsShown && e.hasOneTimePasswords() ? a.createElement("div", null, a.createElement("ol", null, l.otp.map((function(e) {
                                return a.createElement("li", {
                                    key: "otp_code_".concat(e.code)
                                }, a.createElement("span", {
                                    style: {
                                        textDecoration: e.used ? "line-through" : "none"
                                    }
                                }, Pt(e.code)))
                            })))) : null)
                        }
                    }, {
                        key: "renderSetup",
                        value: function() {
                            var e, t, n = this.props.twoFactorAuth,
                                l = this.state.isCodeReady && !n.isAwaitingPendingSecretVerification,
                                o = n.isAwaitingPendingSecret || n.isRemovingPendingSecret,
                                i = n.isVerificationRejected && this.state.isPreviousSubmissionRelevant,
                                s = (e = n.pendingSecret, e.match(/.{1,4}/g).join(" ")).toLowerCase();
                            return a.createElement(ge.Z, {
                                loading: o
                            }, a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement("h4", null, "Setup")), a.createElement(fe.Z, {
                                className: "text-end"
                            }, a.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: kt,
                                rel: "noreferrer"
                            }, "Help"), a.createElement(he.Z, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, a.createElement(r.$1, {
                                icon: K.NB
                            }), " Cancel"))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement("hr", null))), a.createElement(pe.Z, null, a.createElement(yt.Z, {
                                hidden: 0 !== this.state.step
                            }, a.createElement(pe.Z, null, a.createElement(fe.Z, {
                                classname: "tw-flex"
                            }, a.createElement(pe.Z, null, a.createElement("div", {
                                className: "tw-flex-[1_0_140px] tw-w-auto"
                            }, a.createElement("p", null, a.createElement("b", null, "Step 1"), ": Install an authenticator app."), a.createElement("p", null, "You can use any TOTP authenticator app you like, but if you're new to this some good options include", " ", a.createElement("a", {
                                href: "https://bitwarden.com/download/#bitwarden-authenticator-mobile",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Bitwarden Authenticator"), ", ", a.createElement("a", {
                                href: "https://authy.com/download/",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Authy"), ", ", a.createElement("a", {
                                href: "https://getaegis.app/",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Aegis Authenticator"), " ", "for Android", ", ", "or", " ", a.createElement("a", {
                                href: "https://cooperrs.de/otpauth.html",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "OTP Auth"), " ", "for iOS.")), a.createElement("div", {
                                className: "tw-hidden xs:tw-block tw-flex-none tw-w-auto"
                            }, a.createElement(r.$1, {
                                icon: wt.eF,
                                size: "4x",
                                className: "tw-mr-1"
                            }), a.createElement(r.$1, {
                                icon: ht.D_,
                                size: "4x"
                            }))))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement("hr", null))), a.createElement(pe.Z, null, a.createElement(fe.Z, {
                                className: "text-end"
                            }, a.createElement(he.Z, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", a.createElement(r.$1, {
                                icon: pt._t
                            }))))), a.createElement(yt.Z, {
                                hidden: 1 !== this.state.step
                            }, a.createElement(pe.Z, null, a.createElement(fe.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), a.createElement("p", null, "If you can't scan the code,", " ", a.createElement(At, {
                                type: "button",
                                onClick: this.showTextKey
                            }, "enter the key manually"), "."), a.createElement("div", {
                                hidden: !this.state.isTextKeyShown
                            }, a.createElement("p", null, a.createElement("textarea", {
                                id: "textKey",
                                cols: "30",
                                rows: "3",
                                value: s,
                                style: {
                                    overflow: "hidden",
                                    resize: "none",
                                    marginRight: "1em",
                                    marginBottom: "0.5em",
                                    verticalAlign: "top"
                                },
                                readOnly: !0,
                                className: "text-monospace"
                            }), a.createElement(Et.CopyToClipboard, {
                                text: s
                            }, a.createElement(he.Z, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, a.createElement(r.$1, {
                                icon: ft.kZ
                            }), " Copy"))))), a.createElement(fe.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("p", null, a.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(s)
                            })))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement("hr", null))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement(he.Z, {
                                onClick: this.goToStep0
                            }, a.createElement(r.$1, {
                                icon: dt.A3
                            }), " Previous")), a.createElement(fe.Z, {
                                className: "text-end"
                            }, a.createElement(he.Z, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", a.createElement(r.$1, {
                                icon: pt._t
                            }))))), a.createElement(yt.Z, {
                                hidden: 2 !== this.state.step
                            }, a.createElement(pe.Z, null, a.createElement(fe.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), a.createElement(fe.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("div", null, i && a.createElement(T.Z, {
                                color: "warning"
                            }, a.createElement(r.$1, {
                                icon: ut.e7
                            }), " That code didn't work."), a.createElement("form", {
                                onSubmit: this.handleVerifyPendingSecret
                            }, a.createElement("input", {
                                type: "text",
                                value: (t = this.state.code, function(e) {
                                    return ("string" == typeof e || e instanceof String) && e.length > 3 ? "".concat(e.substr(0, 3), " ").concat(e.substr(3, 3)) : e
                                }(t) || ""),
                                onChange: this.handleChangeVerifyCode,
                                placeholder: "000 000",
                                style: {
                                    marginRight: "0.5em"
                                }
                            }), a.createElement(vt.Z, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement("hr", null))), a.createElement(pe.Z, null, a.createElement(fe.Z, null, a.createElement(he.Z, {
                                onClick: this.goToStep1
                            }, a.createElement(r.$1, {
                                icon: dt.A3
                            }), " Previous"))))))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.isSettingUp() ? this.renderSetup : this.renderStatus;
                            return a.createElement("div", {
                                ref: this.ref
                            }, e())
                        }
                    }]), n
                }(a.Component);
            const It = (0, bt.Z)((0, p.$j)((function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            }))(Tt));
            var At = (0, s.Z)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const Dt = function() {
                var e = (0, l.Tu)().user;
                return a.createElement("div", null, a.createElement(r.$4, null, "Account Settings"), a.createElement("h2", null, "Account Settings"), a.createElement(r.oI, null, a.createElement("h4", null, "Change Display Name")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(Ge, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Change Email")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(le.Z, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Change Password")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(ot, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Two-factor authentication")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(It, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Privacy")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(mt, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Age Verification")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(P, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Copyright")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(re, null)), !(null != e && e.hideContentFilterSettings) && a.createElement(a.Fragment, null, a.createElement(r.oI, null, a.createElement("h4", null, "Content Gating")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(R, null))), a.createElement(r.oI, null, a.createElement("h4", null, "User Data")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(ct, null)), a.createElement(r.l8, {
                    className: "mb-2"
                }, a.createElement(r.oI, null, a.createElement("h4", null, "Danger Zone")), a.createElement(r.Ao, null, a.createElement(w, null))))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var a = n(54546),
                r = n(84176),
                l = n(56811),
                o = n(92332),
                i = n(68055),
                s = n(57310),
                c = n(82414),
                u = n(21707),
                m = n(67294),
                d = n(23138),
                p = n(35773),
                f = n(95305),
                h = n(34698),
                w = n(83868),
                g = n.n(w),
                E = n(17383),
                y = n(22202),
                v = n(62437),
                b = n(46382),
                Z = n(8860),
                x = n(18461);
            const N = function() {
                var e = (0, y.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, a.Z)(t, 2),
                    w = n[0],
                    N = n[1],
                    C = (0, m.useState)(""),
                    k = (0, a.Z)(C, 2),
                    P = k[0],
                    S = k[1],
                    O = (0, m.useState)(""),
                    T = (0, a.Z)(O, 2),
                    I = T[0],
                    A = T[1],
                    D = (0, E.Nr)(w),
                    R = (0, v.X6)(),
                    F = (0, a.Z)(R, 2),
                    j = F[0],
                    z = F[1],
                    U = z.isFetching,
                    q = z.isError,
                    V = z.isSuccess,
                    $ = z.error,
                    L = z.originalArgs,
                    _ = (0, v.n_)(),
                    M = (0, a.Z)(_, 2),
                    Y = M[0],
                    B = M[1],
                    H = B.isLoading,
                    W = B.isError,
                    G = B.error,
                    K = (0, y.Fe)(),
                    Q = (0, a.Z)(K, 2),
                    X = Q[0],
                    J = Q[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    ae = J.isSuccess,
                    re = (0, v.SO)({
                        email: D,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === D || !1 === g()(D)
                    }),
                    le = re.data,
                    oe = re.isFetching,
                    ie = re.isSuccess,
                    se = re.originalArgs,
                    ce = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    S(""), A("")
                }), [w]);
                var ue = (0, m.useMemo)((function() {
                        return ie && !1 === le.userExists && g()(D) && "" !== D
                    }), [le, D]),
                    me = (0, m.useMemo)((function() {
                        return "" !== P && P === D
                    }), [P, D]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === g()(D) && "" !== D) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == se ? void 0 : se.email) === D) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (W) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", G, ".");
                        if (q && (null == L ? void 0 : L.email) === D) {
                            A("");
                            var t = $.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(b.$1, {
                                icon: u.e7
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== P && P !== D) return m.createElement(d.Z, {
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
                        return ae ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: c.sq
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : V ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: c.sq
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: c.sq
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }), [ae, te, q, V, le, ie, P, D, e, W]),
                    pe = (0, m.useMemo)((function() {
                        return !ce || V ? m.createElement("span", null, m.createElement(b.$1, {
                            icon: s.XC
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.$1, {
                            icon: i.LE,
                            color: "success"
                        }), " Email Verified")
                    }), [ce, V]),
                    fe = (0, m.useMemo)((function() {
                        return oe ? m.createElement(b.$1, {
                            icon: o.LM,
                            spin: !0,
                            size: "2x"
                        }) : "" === D ? null : ue ? m.createElement(Z.Z, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(Z.Z, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }), [oe, D, ue]);
                return m.createElement("form", null, m.createElement(p.Z, {
                    className: "align-items-center justify-content-center"
                }, m.createElement(f.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "mx-0 mb-1"
                }, "To change your email, enter the desired email below")), m.createElement(p.Z, null, m.createElement(f.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.$1, {
                    icon: l.IB,
                    size: "2x"
                })), m.createElement(f.Z, {
                    xs: "10"
                }, m.createElement(p.Z, {
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
                }))), m.createElement(f.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, fe)), ue && m.createElement(p.Z, null, m.createElement(f.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(p.Z, {
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
                }))), m.createElement(f.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== P && m.createElement(Z.Z, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(p.Z, null, m.createElement(f.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.$1, {
                    icon: r.DD,
                    size: "2x"
                })), m.createElement(f.Z, {
                    xs: "10"
                }, m.createElement(p.Z, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "confirm password",
                    className: "form-control",
                    name: "emailPasswordVerify",
                    onChange: function(e) {
                        return A(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: I
                })))), m.createElement(p.Z, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(p.Z, null, m.createElement(f.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(x.Z, {
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
                    disabled: H
                }))), m.createElement("hr", null), m.createElement(p.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(f.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !V || ee,
                    onClick: function() {
                        return X()
                    },
                    outline: !0
                }, pe)), m.createElement(f.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || U || "" === I,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), j({
                            userId: null == e ? void 0 : e.id,
                            email: D,
                            password: I
                        })
                    }
                }, "Change Email"))))
            }
        },
        79442: (e, t, n) => {
            n.d(t, {
                HI: () => l,
                MI: () => r,
                W3: () => o,
                nv: () => i
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
                l = a.useGetAgeVerificationStatusQuery,
                o = a.useSendGroupInquiryLinkMutation,
                i = a.useSendInquiryLinkMutation
        },
        91557: (e, t, n) => {
            n.d(t, {
                jO: () => u,
                lY: () => m,
                lw: () => c,
                oR: () => s
            });
            var a = n(4942),
                r = n(61509);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var i = r.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getRestrictedContent: e.query({
                                query: function(e) {
                                    var t = e.contentId;
                                    return {
                                        url: "/contentRestrictions/content/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: n.contentId
                                    }]
                                }
                            }),
                            requestContentRestriction: e.mutation({
                                query: function(e) {
                                    var t = e.claimInfo,
                                        n = e.ownerInfo;
                                    return {
                                        url: "/contentRestrictions",
                                        method: "POST",
                                        body: o(o({}, t), n)
                                    }
                                }
                            }),
                            disputeContentRestriction: e.mutation({
                                query: function(e) {
                                    var t = e.contentId,
                                        n = e.disputeInfo,
                                        a = e.contentRestrictionId;
                                    return {
                                        url: "/contentRestrictions/".concat(a, "/dispute"),
                                        method: "POST",
                                        body: o({
                                            contentId: t
                                        }, n)
                                    }
                                },
                                invalidatesTags: (0, r.T)((function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                }))
                            }),
                            deleteDispute: e.mutation({
                                query: function(e) {
                                    var t = e.contentRestrictionId,
                                        n = e.contentId;
                                    return {
                                        url: "/contentRestrictions/".concat(t, "/dispute"),
                                        method: "DELETE",
                                        body: {
                                            contentId: n
                                        }
                                    }
                                },
                                invalidatesTags: (0, r.T)((function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                }))
                            })
                        }
                    }
                }),
                s = i.useGetRestrictedContentQuery,
                c = i.useRequestContentRestrictionMutation,
                u = i.useDisputeContentRestrictionMutation,
                m = i.useDeleteDisputeMutation
        },
        82470: (e, t, n) => {
            n.d(t, {
                w: () => r
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                r = function(e) {
                    return a.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=7b5a40fb4ecc70ba89aee14d07cb58694668698b308861478dba9989635d8f8f.js.map