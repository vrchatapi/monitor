"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5884], {
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(87462),
                a = n(45987),
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
                    d = (0, a.Z)(e, c);
                return null === n ? null : n ? i.createElement(s.Z, (0, r.Z)({
                    icon: o.LE,
                    size: m,
                    className: "text-success"
                }, d)) : i.createElement(s.Z, (0, r.Z)({
                    icon: l.NB,
                    size: m,
                    className: "text-warning"
                }, d))
            }
        },
        81362: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(67294),
                a = n(53637),
                l = n(95305);
            const o = function(e) {
                var t = e.error,
                    n = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var o = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return r.createElement(a.Z, null, r.createElement(l.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, r.createElement("h2", null, "VRChat"), r.createElement("p", null, "An error has occurred. To continue: "), r.createElement("p", null, "Press the F5 to refresh the website, or "), r.createElement("p", null, "Press the back button to leave the website, or "), r.createElement("p", null, "Check our ", r.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), r.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * o.length)], "! ", o[Math.floor(Math.random() * o.length)], ")"), r.createElement("code", null, n, " ", t)))
            }
        },
        12611: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(92332),
                a = n(67294),
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
                return a.createElement(l.Z, {
                    className: n,
                    onClick: i,
                    color: s,
                    hidden: u,
                    disabled: m
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, c), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(o.Z, {
                    icon: r.LM,
                    spin: !0
                })))
            }
        },
        98185: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(67294),
                a = n(81362),
                l = n(43862);
            const o = function(e) {
                var t = e.reducer,
                    n = e.loading,
                    o = e.loadingList,
                    i = e.error,
                    s = e.statusCode,
                    c = e.children,
                    u = e.className,
                    m = !1;
                return o && o.forEach((function(e) {
                    e && (m = !0)
                })), null != s && 200 !== s && "200" !== s ? r.createElement(a.Z, {
                    error: i,
                    statusCode: s
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? r.createElement(a.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : i ? r.createElement(a.Z, {
                    error: i
                }) : null != t && t.error ? r.createElement(a.Z, {
                    error: t.error
                }) : n || m || null != t && t.fetching || null != t && t.loading ? r.createElement(l.Z, {
                    className: "tw-mx-auto"
                }) : r.createElement("div", {
                    className: u
                }, c)
            }
        },
        37549: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(87462),
                a = n(67294),
                l = n(89250);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.TH)(),
                        o = (0, l.s0)(),
                        i = (0, l.UO)();
                    return a.createElement(e, (0, r.Z)({}, t, {
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
            var r = n(67294),
                a = n(37463),
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
                    v = r.useState(!1),
                    b = (0, i.Z)(v, 2),
                    Z = b[0],
                    x = b[1],
                    C = r.useState(!1),
                    N = (0, i.Z)(C, 2),
                    k = N[0],
                    P = N[1],
                    S = function() {
                        x(!1), P(!1)
                    },
                    O = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var n, r, a;
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
                                            message: null !== (r = null === (a = n.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong",
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
                return r.createElement("div", null, r.createElement(a.zx, {
                    type: "button",
                    className: "btn-danger",
                    onClick: function() {
                        x(!0)
                    },
                    danger: !0
                }, "Delete Account"), r.createElement(a.sm, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        x(!1), P(!0)
                    },
                    cancelCallback: S,
                    isOpen: Z
                }), r.createElement(a.sm, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: O,
                    cancelCallback: S,
                    isOpen: k
                }, r.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), r.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), r.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), w && r.createElement(a.u_, {
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
                }, r.createElement(g, null, r.createElement(E, null, "Your account is queued for deletion and will be deleted in 14 days. If you log into the application or the website, the deletion will be cancelled. You will now be logged out of the website and application."))))
            };
            var g = (0, s.Z)(a.JX, {
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
                C = n(60006),
                N = n(86646),
                k = n(43862);
            const P = function() {
                var e = (0, x.q7)(),
                    t = e.data,
                    n = void 0 === t ? [] : t,
                    a = e.isError,
                    l = e.isFetching,
                    o = n.includes("permission-age-verification"),
                    i = (0, Z.HI)(),
                    s = i.data,
                    c = i.isError,
                    u = i.isFetching,
                    m = a || c;
                if (l || u) return r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement(k.Z, {
                    size: "5x"
                }));
                if (m) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(N.Z, {
                    icon: b.faCircleQuestion
                }), " Unable to determine your Age Verification status."), r.createElement(C.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!o) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(N.Z, {
                    icon: y.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), r.createElement(C.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                switch (s.status) {
                    case "verified":
                    case "approved":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(N.Z, {
                            icon: v.f8
                        }), " You have successfully verified your age. You may choose whether to display it on your profile."), r.createElement(C.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(N.Z, {
                            icon: y.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), r.createElement(C.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(N.Z, {
                            icon: y.faCircleInfo
                        }), " You can check your Age Verification status here."), r.createElement(C.Qj, {
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
                    a = (0, r.useState)(new Set(n.contentFilters)),
                    o = (0, i.Z)(a, 2),
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
                (0, r.useEffect)((function() {
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
                }), [u]), (0, r.useEffect)((function() {
                    v && t((0, h.d)({
                        title: "Content Gating Settings Updated",
                        icon: O.Yj,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }), [v]);
                return r.createElement(r.Fragment, null, r.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), E && r.createElement(T.Z, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == y || null === (e = y.data) || void 0 === e ? void 0 : e.error.message), Object.entries(I.N).map((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.createElement(D, {
                        key: n
                    }, r.createElement(A.Z, {
                        label: "Filter ".concat(a),
                        defaultChecked: s.has(n),
                        onChangeCallback: function() {
                            return e = n, void(s.has(e) ? c(new Set((0, S.Z)(s).filter((function(t) {
                                return t !== e
                            })))) : c(new Set(s).add(e)));
                            var e
                        }
                    }))
                })), r.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var F = n(79655),
                j = n(4942),
                z = n(82414),
                U = n(91557),
                q = (0, r.createContext)(null);
            const V = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, r.useState)(1),
                    o = (0, i.Z)(l, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, r.useState)(null),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    w = h[0],
                    g = h[1],
                    E = (0, r.useState)({}),
                    y = (0, i.Z)(E, 2),
                    v = y[0],
                    b = y[1],
                    Z = (0, r.useState)({}),
                    x = (0, i.Z)(Z, 2),
                    C = x[0],
                    N = x[1],
                    k = function() {
                        c(1), p(null), g(!1), b({}), n()
                    };
                return w ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.$1, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: z.sq
                }), r.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), r.createElement("p", null, "We will look into it and email you for next possible steps."), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: k
                }, "Done"))) : d ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.$1, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: z.sq
                }), r.createElement("h4", {
                    className: "tw-text-red"
                }, "DMCA Claim Cannot Be Completed.")), r.createElement("p", null, d), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.zx, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        return p(null)
                    },
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: k
                }, "Done"))) : r.createElement(q.Provider, {
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
                        claimInfo: C,
                        setClaimInfo: N,
                        resetForm: k
                    }
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
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
                    u = (s[1], (0, r.useState)("owner")),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    w = h[0],
                    g = h[1],
                    E = (0, r.useState)(""),
                    y = (0, i.Z)(E, 2),
                    v = y[0],
                    b = y[1],
                    Z = (0, r.useContext)(q),
                    x = Z.previous,
                    C = Z.currentStep,
                    N = Z.claimInfo,
                    k = Z.setClaimInfo,
                    P = Z.ownerInfo,
                    S = Z.setFormError,
                    O = Z.setFormSuccess,
                    T = (null == w ? void 0 : w.owner) && (null == w ? void 0 : w.accurate) && (null == w ? void 0 : w.perjury) && (null == w ? void 0 : w.liability) && (null == w ? void 0 : w.abuse),
                    I = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && T && v.toLowerCase() === P.fullName.toLowerCase(),
                    A = (0, U.lw)(),
                    D = (0, i.Z)(A, 2),
                    R = D[0],
                    V = D[1],
                    $ = V.isError,
                    B = V.error,
                    W = V.isLoading,
                    K = V.isSuccess,
                    Q = V.reset;
                (0, r.useEffect)((function() {
                    var e = c.get("dmcaTarget");
                    e && k(L(L({}, N), {}, {
                        contentIds: Y([e])
                    }))
                }), []), (0, r.useEffect)((function() {
                    var e;
                    $ && (Q(), S("Could Not Proccess Claim: ".concat(null == B || null === (e = B.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }), [$, B]), (0, r.useEffect)((function() {
                    K && (Q(), O(!0))
                }), [K]);
                var X = function(e) {
                    g(L(L({}, w), {}, (0, j.Z)({}, e.target.id, e.target.checked)))
                };
                return 3 !== C ? null : r.createElement(r.Fragment, null, r.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", r.createElement(a.gx, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return k(L(L({}, N), {}, {
                            description: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-content-ids",
                    className: "tw-mb-4"
                }, "The ID or URL of infringing content", r.createElement(a.Lj, {
                    className: "tw-pt-2",
                    value: null == N ? void 0 : N.contentIds,
                    validator: function(e) {
                        return M.test(e)
                    },
                    onChange: function(e) {
                        return k(L(L({}, N), {}, {
                            contentIds: Y(e)
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return k(L(L({}, N), {}, {
                            proof: e.target.value
                        }))
                    },
                    value: null == N ? void 0 : N.proof
                })), r.createElement("label", {
                    htmlFor: "claim-authority",
                    className: "tw-mb-4"
                }, "Authority to make complaint", r.createElement(a.Lt, {
                    className: "tw-pt-2",
                    id: "claim-authority",
                    trimToLength: !0,
                    allowMultiline: !0,
                    options: _,
                    value: d,
                    onChange: function(e) {
                        return p(e)
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-owner",
                    className: "tw-mb-4"
                }, "Copyright Owner Name (optional)", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-owner",
                    value: null == N ? void 0 : N.copyrightOwnerName,
                    onChange: function(e) {
                        return k(L(L({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), r.createElement(G, {
                    className: "tw-mb-4"
                }, r.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), r.createElement(a.XZ, {
                    id: "owner",
                    checked: null == w ? void 0 : w.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: X
                }), r.createElement(a.XZ, {
                    id: "accurate",
                    checked: null == w ? void 0 : w.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: X
                }), r.createElement(a.XZ, {
                    id: "perjury",
                    checked: null == w ? void 0 : w.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: X
                }), r.createElement(a.XZ, {
                    id: "liability",
                    checked: null == w ? void 0 : w.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: X
                }), r.createElement(a.XZ, {
                    id: "abuse",
                    checked: null == w ? void 0 : w.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: X
                })), r.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: v.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == P || null === (l = P.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), T ? null : r.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, r.createElement(a.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: z.sq
                }), r.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    onClick: x,
                    containerStyles: H,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    disabled: !I || W,
                    containerStyles: H,
                    onClick: function() {
                        return R({
                            claimInfo: N,
                            ownerInfo: P
                        })
                    }
                }, "Submit")))
            };
            var G = (0, s.Z)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                H = {
                    width: "100%"
                };
            const W = function() {
                var e = (0, r.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useContext)(q),
                    s = o.resetForm,
                    c = o.next,
                    u = o.currentStep,
                    m = o.setFormError;
                return 1 !== u ? null : r.createElement(r.Fragment, null, r.createElement("h6", {
                    className: "tw-mb-6"
                }, "Are you"), r.createElement("fieldset", null, r.createElement("label", {
                    htmlFor: "content-owner"
                }, r.createElement("input", {
                    id: "content-owner",
                    type: "radio",
                    value: "owner",
                    checked: "owner" === n,
                    onChange: function(e) {
                        return l(e.target.value)
                    }
                }), "  Submitting a claim on content I own/authorize to act on behalf of the owner"), r.createElement("label", {
                    htmlFor: "content-other",
                    className: "tw-mt-2"
                }, r.createElement("input", {
                    id: "content-other",
                    type: "radio",
                    value: "other",
                    checked: "other" === n,
                    onChange: function(e) {
                        return l(e.target.value)
                    }
                }), "  Submitting a claim for someone else's content")), r.createElement("fieldset", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.zx, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: s,
                    neutral: !0
                }, "Cancel"), r.createElement(a.zx, {
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
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
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
                var e = (0, r.useState)(!0),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = s[1],
                    m = (0, r.useContext)(q),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    w = m.setOwnerInfo;
                return (0, r.useEffect)((function() {
                    var e, t, n, r, a, l;
                    X()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (r = h.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (a = h.mailingCountry) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }), [h]), 2 !== f ? null : r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? r.createElement(ne, null, r.createElement(a.$1, {
                    className: "tw-px-2",
                    icon: z.sq
                }), r.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), r.createElement(a.$1, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: K.NB,
                    onClick: function() {
                        return l(!1)
                    }
                })) : null, r.createElement("label", {
                    htmlFor: "user-full-name",
                    className: "tw-mb-4"
                }, "Your Full Legal Name", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "user-full-name",
                    type: "text",
                    value: null == h ? void 0 : h.fullName,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            fullName: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == h ? void 0 : h.organization,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            organization: e.target.value
                        }))
                    }
                })), r.createElement("fieldset", {
                    className: "tw-flex tw-flex-col tw-mb-4 tw-p-2 tw-border tw-border-solid tw-border-light-grey tw-rounded"
                }, r.createElement("legend", null, "Mailing Address"), r.createElement("span", {
                    className: "tw-py-2 tw-block tw-text-sm tw-text-light-grey"
                }, "Please provide your complete postal address including street number, city, state/province, ZIP/postal code, and country."), r.createElement("label", {
                    htmlFor: "mailing-address",
                    className: "tw-mb-4"
                }, "Street", r.createElement(a.II, {
                    id: "owner-mailing-address",
                    value: null == h ? void 0 : h.mailingAddress,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingAddress: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-gap-4"
                }, r.createElement("label", {
                    htmlFor: "mailing-city",
                    className: "tw-mb-4 tw-flex-grow"
                }, "City", r.createElement(a.II, {
                    id: "owner-mailing-city",
                    value: null == h ? void 0 : h.mailingCity,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", r.createElement(a.II, {
                    id: "owner-mailing-state-province",
                    value: null == h ? void 0 : h.mailingStateProvince,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", r.createElement(a.II, {
                    id: "owner-mailing-postal-code",
                    value: null == h ? void 0 : h.mailingPostalCode,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", r.createElement(a.II, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            mailingCountry: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "owner-phone",
                    className: "tw-mb-4"
                }, "Phone Number", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "owner-phone",
                    type: "tel",
                    value: null == h ? void 0 : h.phoneNumber,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            phoneNumber: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "owner-email"
                }, "Email", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "owner-email",
                    type: "email",
                    value: null == h ? void 0 : h.email,
                    onChange: function(e) {
                        return w(ee(ee({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    containerStyles: re,
                    onClick: p,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    containerStyles: re,
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
                re = {
                    width: "100%"
                };
            const ae = function() {
                var e = (0, F.lr)(),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    s = (0, i.Z)(o, 2),
                    c = s[0],
                    u = s[1];
                (0, r.useEffect)((function() {
                    var e = Object.fromEntries((0, S.Z)(n.entries()).filter((function(e) {
                        return "dmcaClaimForm" !== (0, i.Z)(e, 1)[0]
                    })));
                    c && (e.dmcaClaimForm = !0), l(e)
                }), [c]), (0, r.useEffect)((function() {
                    n.get("dmcaClaimForm") && u(!0)
                }), []);
                return r.createElement(r.Fragment, null, r.createElement("p", null, "If you are aware of unauthorized use of your property, you can use the button below to request a DMCA takedown."), r.createElement(a.zx, {
                    onClick: function() {
                        return u(!0)
                    }
                }, "File a DMCA Claim"), r.createElement(a.u_, {
                    width: "80%",
                    title: "DMCA Claim",
                    slim: !0,
                    isVisible: c,
                    onClose: function() {
                        return u(!1)
                    }
                }, r.createElement(V, {
                    closeModal: function() {
                        u(!1)
                    }
                }, r.createElement(W, null), r.createElement(te, null), r.createElement(B, null))))
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
                Ce = (0, ye.P1)(ve, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                })),
                Ne = (0, ye.P1)(ve, (function(e) {
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
                        s = (0, p.v9)(Ne),
                        c = (0, p.v9)(Se),
                        u = o || (0, p.v9)((function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return r.createElement(r.Fragment, null, t && r.createElement(T.Z, {
                        color: "info"
                    }, r.createElement(a.$1, {
                        icon: z.sq,
                        color: "teal"
                    }), " You may only change your display name once every 3 months, choose wisely! Once you change your name, you may never be able to get your original name back!"), !t && r.createElement(T.Z, {
                        color: "info",
                        "aria-label": "name warning"
                    }, r.createElement(a.$1, {
                        icon: De.U$
                    }), " Your next allowed display name change is in ", 90 - me()().diff(c, "days"), " days"), null !== n && r.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, r.createElement(a.$1, {
                        icon: ie.lE
                    }), " ".concat(n)), i && null === n && r.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, r.createElement(a.$1, {
                        icon: Ae.B1
                    }), " That display name is already in use."), s && null === n && r.createElement(T.Z, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, r.createElement(a.$1, {
                        icon: Ae.B1
                    }), " That display name includes characters that cannot be used. Please try again."), u && r.createElement(T.Z, {
                        color: "success",
                        "aria-label": "name change success"
                    }, r.createElement(a.$1, {
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
                return r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("div", {
                    className: "mb-4"
                }, r.createElement("p", null, "Name change was not successful due to:", r.createElement("br", null), r.createElement("code", null, t), r.createElement("br", null), "If issues persist, please contact VRChat Support at", " ", r.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://help.vrchat.com"
                }, "help.vrchat.com"), "."), r.createElement(he.Z, {
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
                        a = e.showLastDisplayNameChange;
                    return r.createElement(Ve, null, a && r.createElement(r.Fragment, null, "It has been ", n, " days since your last display name change.", r.createElement("br", null)), "• You may only change your display name once per 90 days.", r.createElement("br", null), t && r.createElement(r.Fragment, null, "• You can revert your last display name change.", r.createElement("br", null)))
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
                Ge = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.I0)(),
                        s = (0, p.v9)((function(e) {
                            return e.currentUser.databaseUser.id
                        })),
                        u = (0, r.useState)(""),
                        d = (0, i.Z)(u, 2),
                        f = d[0],
                        w = d[1],
                        g = (0, r.useState)(""),
                        E = (0, i.Z)(g, 2),
                        y = E[0],
                        v = E[1],
                        b = (0, r.useState)(!0),
                        Z = (0, i.Z)(b, 2),
                        x = Z[0],
                        C = Z[1],
                        N = (0, r.useState)(!1),
                        k = (0, i.Z)(N, 2),
                        P = k[0],
                        S = k[1];
                    (0, r.useEffect)((function() {
                        return C("" === y || f !== n)
                    }), [y, f]);
                    var O = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var r, a, o, i;
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
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (r = null === (a = e.t0.response) || void 0 === a || null === (a = a.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), S(!1), l((0, h.d)({
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
                    return r.createElement("div", {
                        className: "center-panel"
                    }, r.createElement(Me.Z, {
                        className: "mb-4",
                        outline: !0
                    }, r.createElement(Ye.Z, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), r.createElement(Be.Z, null, r.createElement(Ve, null, "This will change your display name back to:", r.createElement("br", null), r.createElement($e, null, n), r.createElement("br", null), "And restart the 90-day timer.", r.createElement("br", null), "Type your previous display name into the field below to revert."), r.createElement("input", {
                        "aria-label": "enter revert name",
                        type: "text",
                        className: "form-control mt-2 mb-2",
                        placeholder: "Type ".concat(n, " to Confirm"),
                        onChange: function(e) {
                            return w(e.target.value)
                        },
                        value: f
                    }), r.createElement("input", {
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
                    }), r.createElement(he.Z, {
                        className: "me-2",
                        onClick: function() {
                            return S(!0)
                        },
                        disabled: x,
                        color: "primary"
                    }, "Ok"), r.createElement(he.Z, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), r.createElement(a.sm, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: O,
                        cancelCallback: function() {
                            return S(!1)
                        },
                        isOpen: P
                    }))
                };
            Ge.propTypes = {
                exitRevertCallback: Fe().func.isRequired,
                previousDisplayName: Fe().string
            };
            const He = Ge;
            const We = function() {
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
                    v = (0, p.v9)(Ce),
                    b = (0, p.v9)(ve),
                    Z = (0, p.v9)(ke),
                    x = (0, p.v9)(Te),
                    C = (0, p.v9)(Ie.y),
                    N = (0, p.v9)(Se),
                    k = (0, p.v9)(Oe),
                    P = (0, p.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    S = (0, r.useState)(!0),
                    O = (0, i.Z)(S, 2),
                    I = O[0],
                    A = O[1],
                    D = (0, r.useState)(null),
                    R = (0, i.Z)(D, 2),
                    F = R[0],
                    j = R[1],
                    z = (0, r.useState)(""),
                    U = (0, i.Z)(z, 2),
                    q = U[0],
                    V = U[1],
                    $ = (0, r.useState)(""),
                    L = (0, i.Z)($, 2),
                    _ = L[0],
                    M = L[1],
                    Y = (0, r.useState)(null),
                    B = (0, i.Z)(Y, 2),
                    G = B[0],
                    H = B[1],
                    W = (0, r.useState)(""),
                    K = (0, i.Z)(W, 2),
                    Q = K[0],
                    X = K[1],
                    J = r.useState(!1),
                    ee = (0, i.Z)(J, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, r.useState)(!1),
                    ae = (0, i.Z)(re, 2),
                    le = ae[0],
                    ue = ae[1],
                    ye = (0, l.Nr)(Q),
                    be = y && v && "" !== ye;
                if ((0, r.useEffect)((function() {
                        C ? A(!0) : Z && me()().diff(N, "days") < 90 ? A(!1) : A(!0)
                    }), [N]), (0, r.useEffect)((function() {
                        "" !== ye ? ye.length < 4 ? H("That name is too short.") : ye.length > 15 ? H("That name is too long.") : (H(null), V(""), n((0, Ee.Zm)({
                            displayName: ye,
                            userId: P.id
                        }))) : H(null)
                    }), [ye]), (0, r.useEffect)((function() {
                        return "" === q ? (ne(!1), void j(null)) : q !== Q ? (ne(!1), void j("Names don't match")) : (ne(!0), void j(null))
                    }), [q]), w) return r.createElement(qe, {
                    displayNameError: null !== (e = null === (t = g.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (le) return r.createElement(He, {
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
                    Ne = !I && !x;
                return r.createElement(ge.Z, {
                    loading: h
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(de.Z, null, r.createElement(_e, {
                    canRevertDisplayName: Ne,
                    showLastDisplayNameChange: !I,
                    numberOfDays: me()().diff(N, "days")
                }), r.createElement(pe.Z, null, r.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: ce.Qj,
                    size: "2x"
                })), r.createElement(fe.Z, {
                    xs: "10"
                }, r.createElement(pe.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
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
                }), r.createElement(ze, {
                    canChangeDisplayName: I,
                    displayName: P.displayName,
                    displayNameAvailable: y,
                    displayNameValue: Q,
                    isRevert: !1,
                    latestChangedDate: N,
                    displayNameChecking: b,
                    validationError: G,
                    displayNameChanged: E
                }))), r.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, b && r.createElement(a.$1, {
                    icon: se.LM,
                    spin: !0,
                    size: "2x"
                }), "" !== Q && !b && r.createElement(we.Z, {
                    "aria-label": y && v ? "Name is available" : "Name is unavailable",
                    ok: y && v
                }))), be && !E && r.createElement(pe.Z, null, r.createElement(fe.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, r.createElement(pe.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
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
                }), null !== F && r.createElement(T.Z, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, r.createElement(a.$1, {
                    icon: ie.lE
                }), " ".concat(F)))), r.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== q && r.createElement(we.Z, {
                    "aria-label": null !== F ? F : "Confirmation name matches",
                    ok: null === F
                }))), te && !E && r.createElement(pe.Z, {
                    className: "mt-2"
                }, r.createElement(fe.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: oe.DD,
                    size: "2x"
                })), r.createElement(fe.Z, {
                    xs: "10"
                }, r.createElement(pe.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
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
                })))), r.createElement(pe.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, Ne && r.createElement(fe.Z, {
                    xs: "6"
                }, r.createElement(he.Z, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return ue(!0)
                    }
                }, "Revert Display Name Change")), r.createElement(fe.Z, {
                    xs: "6"
                }, r.createElement(he.Z, {
                    disabled: !I || !0 === b || null !== F || "" === q || "" === _ || null !== G || "" === Q,
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
                rt = n(82470);

            function at(e) {
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
                    var n, r = (0, tt.Z)(e);
                    if (t) {
                        var a = (0, tt.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, et.Z)(this, n)
                }
            }
            var lt = function(e) {
                (0, Je.Z)(c, e);
                var t, n, l, i, s = at(c);

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
                        var n, r, a, l, o;
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
                                    return r = !1, n.length < 8 ? r = "That password is too short" : (0, rt.w)(n) && (r = "Please try a more secure password"), a = !r, l = !1, o = !1, "" !== this.state.confirmation && (this.state.confirmation !== n ? l = "Passwords don't match" : o = !0), e.next = 14, this.setStatePromisified({
                                        newPasswordError: r,
                                        newPasswordOk: a,
                                        confirmationError: l,
                                        confirmationOk: o,
                                        showConfirmation: "" !== this.state.confirmation || a,
                                        showPassword: "" !== this.state.currentPassword || a && this.state.confirmationOk,
                                        ready: a && this.state.confirmationOk && "" !== this.state.currentPassword
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
                        var n, r, a;
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
                                    return r = !1, n !== this.state.newPassword && (r = "Passwords don't match"), a = !r, e.next = 11, this.setStatePromisified({
                                        confirmationError: r,
                                        confirmationOk: a,
                                        showPassword: "" !== this.state.currentPassword || this.state.newPasswordOk && a,
                                        ready: this.state.newPasswordOk && a && "" !== this.state.currentPassword
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
                        return r.createElement(ge.Z, {
                            loading: e.changing
                        }, r.createElement("div", {
                            className: "center-panel"
                        }, r.createElement("form", {
                            onSubmit: this.handleSubmit
                        }, "" !== e.error && r.createElement(T.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ie.lE
                        }), " An error occurred: ", e.error), r.createElement(pe.Z, null, r.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, r.createElement(a.$1, {
                            icon: nt.by,
                            size: "2x"
                        })), r.createElement(fe.Z, {
                            xs: "10"
                        }, r.createElement(pe.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "newPassword",
                            name: "newPassword",
                            className: "form-control",
                            placeholder: "Please enter new password",
                            onChange: this.handleNewPassword,
                            onKeyUp: this.handleNewPassword
                        }), this.state.newPasswordError && r.createElement(T.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ie.lE
                        }), " ", this.state.newPasswordError), e.changed && r.createElement(T.Z, {
                            color: "success"
                        }, r.createElement(a.$1, {
                            icon: ie.lE
                        }), " Your password has been changed!"))), r.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, r.createElement(we.Z, {
                            ok: this.state.newPasswordOk
                        }))), this.state.showConfirmation && r.createElement(pe.Z, null, r.createElement(fe.Z, {
                            xs: {
                                size: 10,
                                offset: 1
                            }
                        }, r.createElement(pe.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "confirmNewPassword",
                            name: "confirmNewPassword",
                            className: "form-control",
                            placeholder: "Please confirm new password",
                            onChange: this.handleConfirmation,
                            onKeyUp: this.handleConfirmation
                        }), this.state.confirmationError && r.createElement(T.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ie.lE
                        }), " ", this.state.confirmationError))), r.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, r.createElement(we.Z, {
                            ok: this.state.confirmationOk
                        }))), this.state.showPassword && r.createElement(pe.Z, null, r.createElement(fe.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, r.createElement(a.$1, {
                            icon: oe.DD,
                            size: "2x"
                        })), r.createElement(fe.Z, {
                            xs: "10"
                        }, r.createElement(pe.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "passwordPasswordVerify",
                            name: "passwordPasswordVerify",
                            className: "form-control",
                            placeholder: "Please confirm current password",
                            onChange: this.handleCurrentPassword,
                            onKeyUp: this.handleCurrentPassword
                        })))), r.createElement(pe.Z, {
                            className: "align-items-center justify-content-center d-flex mt-2"
                        }, r.createElement(fe.Z, {
                            xs: "4"
                        }, r.createElement("button", {
                            disabled: !this.state.ready,
                            className: "btn btn-primary w-100",
                            id: "password-change-submit",
                            name: "name-change-submit",
                            value: "update",
                            type: "submit"
                        }, "Change Password"))))))
                    }
                }]), c
            }(r.Component);
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
                    C = v.error,
                    N = v.reset,
                    k = r.useState(!1),
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
                return r.createElement(r.Fragment, null, r.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), r.createElement(a.zx, {
                    type: "button",
                    onClick: function() {
                        O(!0)
                    },
                    danger: !0
                }, r.createElement(a.$1, {
                    icon: it.faUserXmark
                }), " Reset All User Data"), r.createElement(a.sm, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: T,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        O(!1), N()
                    },
                    isOpen: S,
                    isLoading: b
                }, r.createElement("p", null, I), r.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), Z && r.createElement(a.qX, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == C || null === (t = C.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var ut = n(21707);
            const mt = function() {
                var e = (0, r.useState)(null),
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
                return (0, r.useEffect)((function() {
                    return window.addEventListener("OneTrustGroupsUpdated", o),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", o)
                        }
                }), []), r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(pe.Z, null, r.createElement(fe.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), n ? r.createElement(T.Z, {
                    className: "warning"
                }, r.createElement(a.$1, {
                    icon: ut.e7
                }), " ", n) : r.createElement(pe.Z, null, r.createElement(fe.Z, {
                    xs: "10"
                }, r.createElement(he.Z, {
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

            function Ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Nt(e) {
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
                    var n, r = (0, tt.Z)(e);
                    if (t) {
                        var a = (0, tt.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
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
                    var t = Nt(n);

                    function n(e) {
                        var a;
                        return (0, Ke.Z)(this, n), a = t.call(this, e), (0, j.Z)((0, Xe.Z)(a), "getOneTimePasswords", (0, o.Z)(m().mark((function e() {
                            var t, n, r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return clearTimeout(a.state.forgetOtpTimeout), t = setTimeout((function() {
                                            a.setState({
                                                isOneTimePasswordsShown: !1
                                            }), a.props.dispatch({
                                                type: "TWOFACTORAUTH_FORGET_OTP"
                                            })
                                        }), 6e4), a.setState({
                                            forgetOtpTimeout: t
                                        }), e.prev = 3, e.next = 6, a.props.dispatch({
                                            type: "TWOFACTORAUTH_GET_OTP",
                                            payload: xt().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
                                        });
                                    case 6:
                                        r = e.sent, (null === (n = r.value) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) > 0 && a.props.router.navigate("/home/twofactorauth", {
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
                        })))), (0, j.Z)((0, Xe.Z)(a), "disable", function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                var n, r;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, a.props.dispatch({
                                                type: "TWOFACTORAUTH_REMOVE",
                                                payload: xt().delete(window.apiUrl("/api/1/auth/twofactorauth"))
                                            });
                                        case 4:
                                            r = e.sent, (null === (n = r.value) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) > 0 && a.props.router.navigate("/home/twofactorauth", {
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
                        }()), a.state = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ct(Object(n), !0).forEach((function(t) {
                                    (0, j.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, Ot), a.ref = r.createRef(), a.enable = a.enable.bind((0, Xe.Z)(a)), a.renderSetup = a.renderSetup.bind((0, Xe.Z)(a)), a.renderStatus = a.renderStatus.bind((0, Xe.Z)(a)), a.handleChangeVerifyCode = a.handleChangeVerifyCode.bind((0, Xe.Z)(a)), a.handleVerifyPendingSecret = a.handleVerifyPendingSecret.bind((0, Xe.Z)(a)), a.isSettingUp = a.isSettingUp.bind((0, Xe.Z)(a)), a.cancelSecret = a.cancelSecret.bind((0, Xe.Z)(a)), a.showTextKey = a.showTextKey.bind((0, Xe.Z)(a)), a.goToStep0 = a.goToStep0.bind((0, Xe.Z)(a)), a.goToStep1 = a.goToStep1.bind((0, Xe.Z)(a)), a.goToStep2 = a.goToStep2.bind((0, Xe.Z)(a)), a.toggleOneTimePasswordsShown = a.toggleOneTimePasswordsShown.bind((0, Xe.Z)(a)), a.hasOneTimePasswords = a.hasOneTimePasswords.bind((0, Xe.Z)(a)), a.getOneTimePasswordHref = a.getOneTimePasswordHref.bind((0, Xe.Z)(a)), a.downloadOneTimePasswords = a.downloadOneTimePasswords.bind((0, Xe.Z)(a)), a.triggerOtpDownloadLink = a.triggerOtpDownloadLink.bind((0, Xe.Z)(a)), a
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
                                        return r.createElement("div", null, r.createElement("div", null, r.createElement("p", null, r.createElement(a.$1, {
                                            icon: gt.a3,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", r.createElement("a", {
                                            href: kt,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), r.createElement("p", null, r.createElement(vt.Z, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), r.createElement("div", null, r.createElement("p", null, r.createElement(a.$1, {
                                            icon: ut.e7,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), r.createElement("p", null, "We", " ", r.createElement("strong", null, r.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && r.createElement(T.Z, {
                                            color: "warning"
                                        }, r.createElement(a.$1, {
                                            icon: ut.e7
                                        }), " Something went wrong downloading recovery codes."), r.createElement("div", null, r.createElement("p", null, r.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, r.createElement(vt.Z, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), r.createElement("span", null, r.createElement(vt.Z, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), r.createElement("a", {
                                            id: St,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return r.createElement("div", null, r.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", r.createElement("a", {
                                        href: kt,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), r.createElement("p", null, r.createElement(vt.Z, {
                                        onClick: e.enable,
                                        color: "primary",
                                        loading: l.isAwaitingPendingSecret
                                    }, "Enable")))
                                };
                            return r.createElement("div", null, o(), e.state.isOneTimePasswordsShown && e.hasOneTimePasswords() ? r.createElement("div", null, r.createElement("ol", null, l.otp.map((function(e) {
                                return r.createElement("li", {
                                    key: "otp_code_".concat(e.code)
                                }, r.createElement("span", {
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
                            return r.createElement(ge.Z, {
                                loading: o
                            }, r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement("h4", null, "Setup")), r.createElement(fe.Z, {
                                className: "text-end"
                            }, r.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: kt,
                                rel: "noreferrer"
                            }, "Help"), r.createElement(he.Z, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, r.createElement(a.$1, {
                                icon: K.NB
                            }), " Cancel"))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement("hr", null))), r.createElement(pe.Z, null, r.createElement(yt.Z, {
                                hidden: 0 !== this.state.step
                            }, r.createElement(pe.Z, null, r.createElement(fe.Z, {
                                classname: "tw-flex"
                            }, r.createElement(pe.Z, null, r.createElement("div", {
                                className: "tw-flex-[1_0_140px] tw-w-auto"
                            }, r.createElement("p", null, r.createElement("b", null, "Step 1"), ": Install an authenticator app."), r.createElement("p", null, "You can use any TOTP authenticator app you like, but if you're new to this some good options include", " ", r.createElement("a", {
                                href: "https://bitwarden.com/download/#bitwarden-authenticator-mobile",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Bitwarden Authenticator"), ", ", r.createElement("a", {
                                href: "https://authy.com/download/",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Authy"), ", ", r.createElement("a", {
                                href: "https://getaegis.app/",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Aegis Authenticator"), " ", "for Android", ", ", "or", " ", r.createElement("a", {
                                href: "https://cooperrs.de/otpauth.html",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "OTP Auth"), " ", "for iOS.")), r.createElement("div", {
                                className: "tw-hidden xs:tw-block tw-flex-none tw-w-auto"
                            }, r.createElement(a.$1, {
                                icon: wt.eF,
                                size: "4x",
                                className: "tw-mr-1"
                            }), r.createElement(a.$1, {
                                icon: ht.D_,
                                size: "4x"
                            }))))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement("hr", null))), r.createElement(pe.Z, null, r.createElement(fe.Z, {
                                className: "text-end"
                            }, r.createElement(he.Z, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", r.createElement(a.$1, {
                                icon: pt._t
                            }))))), r.createElement(yt.Z, {
                                hidden: 1 !== this.state.step
                            }, r.createElement(pe.Z, null, r.createElement(fe.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), r.createElement("p", null, "If you can't scan the code,", " ", r.createElement(At, {
                                type: "button",
                                onClick: this.showTextKey
                            }, "enter the key manually"), "."), r.createElement("div", {
                                hidden: !this.state.isTextKeyShown
                            }, r.createElement("p", null, r.createElement("textarea", {
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
                            }), r.createElement(Et.CopyToClipboard, {
                                text: s
                            }, r.createElement(he.Z, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, r.createElement(a.$1, {
                                icon: ft.kZ
                            }), " Copy"))))), r.createElement(fe.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("p", null, r.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(s)
                            })))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement("hr", null))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement(he.Z, {
                                onClick: this.goToStep0
                            }, r.createElement(a.$1, {
                                icon: dt.A3
                            }), " Previous")), r.createElement(fe.Z, {
                                className: "text-end"
                            }, r.createElement(he.Z, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", r.createElement(a.$1, {
                                icon: pt._t
                            }))))), r.createElement(yt.Z, {
                                hidden: 2 !== this.state.step
                            }, r.createElement(pe.Z, null, r.createElement(fe.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), r.createElement(fe.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("div", null, i && r.createElement(T.Z, {
                                color: "warning"
                            }, r.createElement(a.$1, {
                                icon: ut.e7
                            }), " That code didn't work."), r.createElement("form", {
                                onSubmit: this.handleVerifyPendingSecret
                            }, r.createElement("input", {
                                type: "text",
                                value: (t = this.state.code, function(e) {
                                    return ("string" == typeof e || e instanceof String) && e.length > 3 ? "".concat(e.substr(0, 3), " ").concat(e.substr(3, 3)) : e
                                }(t) || ""),
                                onChange: this.handleChangeVerifyCode,
                                placeholder: "000 000",
                                style: {
                                    marginRight: "0.5em"
                                }
                            }), r.createElement(vt.Z, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement("hr", null))), r.createElement(pe.Z, null, r.createElement(fe.Z, null, r.createElement(he.Z, {
                                onClick: this.goToStep1
                            }, r.createElement(a.$1, {
                                icon: dt.A3
                            }), " Previous"))))))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.isSettingUp() ? this.renderSetup : this.renderStatus;
                            return r.createElement("div", {
                                ref: this.ref
                            }, e())
                        }
                    }]), n
                }(r.Component);
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
                return r.createElement("div", null, r.createElement(a.$4, null, "Account Settings"), r.createElement("h2", null, "Account Settings"), r.createElement(a.oI, null, r.createElement("h4", null, "Change Display Name")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(We, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Email")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(le.Z, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Password")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ot, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Two-factor authentication")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(It, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Privacy")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(mt, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Age Verification")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(P, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Copyright")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ae, null)), !(null != e && e.hideContentFilterSettings) && r.createElement(r.Fragment, null, r.createElement(a.oI, null, r.createElement("h4", null, "Content Gating")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(R, null))), r.createElement(a.oI, null, r.createElement("h4", null, "User Data")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ct, null)), r.createElement(a.l8, {
                    className: "mb-2"
                }, r.createElement(a.oI, null, r.createElement("h4", null, "Danger Zone")), r.createElement(a.Ao, null, r.createElement(w, null))))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(54546),
                a = n(84176),
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
                b = n(37463),
                Z = n(8860),
                x = n(18461);
            const C = function() {
                var e = (0, y.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.Z)(t, 2),
                    w = n[0],
                    C = n[1],
                    N = (0, m.useState)(""),
                    k = (0, r.Z)(N, 2),
                    P = k[0],
                    S = k[1],
                    O = (0, m.useState)(""),
                    T = (0, r.Z)(O, 2),
                    I = T[0],
                    A = T[1],
                    D = (0, E.Nr)(w),
                    R = (0, v.X6)(),
                    F = (0, r.Z)(R, 2),
                    j = F[0],
                    z = F[1],
                    U = z.isFetching,
                    q = z.isError,
                    V = z.isSuccess,
                    $ = z.error,
                    L = z.originalArgs,
                    _ = (0, v.n_)(),
                    M = (0, r.Z)(_, 2),
                    Y = M[0],
                    B = M[1],
                    G = B.isLoading,
                    H = B.isError,
                    W = B.error,
                    K = (0, y.Fe)(),
                    Q = (0, r.Z)(K, 2),
                    X = Q[0],
                    J = Q[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    re = J.isSuccess,
                    ae = (0, v.SO)({
                        email: D,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === D || !1 === g()(D)
                    }),
                    le = ae.data,
                    oe = ae.isFetching,
                    ie = ae.isSuccess,
                    se = ae.originalArgs,
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
                        if (H) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", W, ".");
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
                        return re ? m.createElement(d.Z, {
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
                    }), [re, te, q, V, le, ie, P, D, e, H]),
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
                        return C(e.target.value)
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
                    icon: a.DD,
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
                    disabled: G
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
                MI: () => a,
                W3: () => o,
                nv: () => i
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
                l = r.useGetAgeVerificationStatusQuery,
                o = r.useSendGroupInquiryLinkMutation,
                i = r.useSendInquiryLinkMutation
        },
        91557: (e, t, n) => {
            n.d(t, {
                jO: () => u,
                lY: () => m,
                lw: () => c,
                oR: () => s
            });
            var r = n(4942),
                a = n(61509);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var i = a.S.injectEndpoints({
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
                                        r = e.contentRestrictionId;
                                    return {
                                        url: "/contentRestrictions/".concat(r, "/dispute"),
                                        method: "POST",
                                        body: o({
                                            contentId: t
                                        }, n)
                                    }
                                },
                                invalidatesTags: (0, a.T)((function(e) {
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
                                invalidatesTags: (0, a.T)((function(e) {
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
                w: () => a
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                a = function(e) {
                    return r.has(e.toLowerCase())
                }
        }
    }
]);
//# sourceMappingURL=6646237d65d8e3ff6f4dba50f46cb08bd6a323ddf82d0b3558de3a943d815b13.js.map