"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7541], {
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(87462),
                a = n(45987),
                l = n(59545),
                o = n(68055),
                i = n(67294),
                c = n(86646),
                s = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.Z)(e, s);
                return null === n ? null : n ? i.createElement(c.Z, (0, r.Z)({
                    icon: o.LE,
                    size: m,
                    className: "text-success"
                }, d)) : i.createElement(c.Z, (0, r.Z)({
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
            var r = n(92332),
                a = n(67294),
                l = n(34698),
                o = n(86646);
            const i = function(e) {
                var t = e.loading,
                    n = e.className,
                    i = e.onClick,
                    c = e.color,
                    s = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return a.createElement(l.Z, {
                    className: n,
                    onClick: i,
                    color: c,
                    hidden: u,
                    disabled: m
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, s), a.createElement("div", {
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
        77541: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Lt
            });
            var r = n(67294),
                a = n(96985),
                l = n(17383),
                o = n(15861),
                i = n(54546),
                c = n(4965),
                s = n(76553),
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
                    c = (0, i.Z)(n, 2),
                    u = c[0],
                    w = c[1].isSuccess,
                    y = (0, l.Tu)().user,
                    v = r.useState(!1),
                    b = (0, i.Z)(v, 2),
                    x = b[0],
                    Z = b[1],
                    k = r.useState(!1),
                    N = (0, i.Z)(k, 2),
                    C = N[0],
                    S = N[1],
                    P = function() {
                        Z(!1), S(!1)
                    },
                    O = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var n, r, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Z(!1), S(!1), e.next = 4, u({
                                            userId: y.id
                                        });
                                    case 4:
                                        (n = e.sent).error && t((0, h.d)({
                                            title: "Failed to delete your account",
                                            icon: s.eH,
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
                        Z(!0)
                    },
                    danger: !0
                }, "Delete Account"), r.createElement(a.sm, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        Z(!1), S(!0)
                    },
                    cancelCallback: P,
                    isOpen: x
                }), r.createElement(a.sm, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: O,
                    cancelCallback: P,
                    isOpen: C
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
            var g = (0, c.Z)(a.JX, {
                    target: "e1c8z0io1"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                E = (0, c.Z)("p", {
                    target: "e1c8z0io0"
                })({
                    name: "1tmloek",
                    styles: "text-align:center;margin-right:100px;margin-left:100px"
                }),
                y = n(75386),
                v = n(27879),
                b = n(35773),
                x = n(95305),
                Z = n(34698),
                k = n(69699),
                N = n(60766),
                C = n(22202),
                S = n(40219),
                P = n(57672),
                O = n(79655),
                T = "link_discord",
                A = "unlink_discord";
            const D = function(e) {
                var t = e.user || {},
                    n = t.discordId,
                    l = t.displayName,
                    c = t.id,
                    s = (0, d.TH)().state,
                    u = (0, r.useState)(null),
                    f = (0, i.Z)(u, 2),
                    w = f[0],
                    g = f[1],
                    E = (0, r.useState)(null),
                    D = (0, i.Z)(E, 2),
                    I = D[0],
                    R = D[1],
                    F = (0, d.s0)(),
                    j = (0, p.I0)(),
                    z = (0, O.lr)(),
                    U = (0, i.Z)(z, 2),
                    q = U[0],
                    V = (U[1], (0, C.Z9)()),
                    $ = (0, i.Z)(V, 2),
                    L = $[0],
                    _ = $[1],
                    M = _.isLoading,
                    Y = (_.isSuccess, _.isError, _.error, (0, C.hK)()),
                    B = (0, i.Z)(Y, 2),
                    H = B[0],
                    W = B[1],
                    G = W.isLoading,
                    K = (W.isSuccess, W.isError, W.error, function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, r, a, l, o, i, c, s = arguments;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = s.length > 0 && void 0 !== s[0] ? s[0] : I) && !n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, H({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        g(null), R(null), j((0, h.d)({
                                            title: "Link Discord Account",
                                            icon: y.nN,
                                            message: "Successfully linked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 22;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(3), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || !r.requiresTwoFactorAuth) {
                                            e.next = 18;
                                            break
                                        }
                                        return o = e.t0.data, i = (0, P.y)(o), c = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: w,
                                                continueDiscordAccessToken: t,
                                                redirectTo: "/home/profile"
                                            }
                                        }, e.abrupt("return", F(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), g(null), R(null), e.abrupt("return", j((0, h.d)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== a ? a : "Discord Linking Failed",
                                            icon: v.IL,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 11]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()),
                    X = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, L().unwrap();
                                    case 3:
                                        g(null), j((0, h.d)({
                                            title: "Unlink Discord Account",
                                            icon: y.nN,
                                            message: "Successfully unlinked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Discord account:", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        J || (g(null), R(null))
                    };
                (0, r.useEffect)((function() {
                    (0, o.Z)(m().mark((function e() {
                        var t;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = null == s ? void 0 : s.discordToken) && !n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    g(T), R(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, r.useEffect)((function() {
                    (null == s ? void 0 : s.selectedAction) === T && null != s && s.continueDiscordAccessToken && K(s.continueDiscordAccessToken)
                }), []), (0, r.useEffect)((function() {
                    var e = q.get("prompt"),
                        t = q.get("requestingUserId");
                    "linkDiscordAccount" === e && t && t === c && !n && (0, S.y)({
                        redirectTo: "/home/profile"
                    })
                }), []), (0, r.useEffect)((function() {
                    w === T && I && n && (g(null), R(null))
                }), [G, M, n, I]);
                var J = G || M;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your linked accounts.")), r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10"
                }, n && r.createElement(Z.Z, {
                    disabled: J,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return g(A)
                    }
                }, "Unlink your Discord Account"), !n && r.createElement(Z.Z, {
                    isLoading: J,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return (0, S.y)({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Link your Discord Account")))), r.createElement(k.Z, {
                    isOpen: w === A,
                    toggle: Q,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Discord account from this VRChat account? You can link it again anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, l)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: X
                }, "Unlink Account"), r.createElement(a.zx, {
                    onClick: Q,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(k.Z, {
                    isOpen: null !== I && w === T,
                    toggle: Q,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, l)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return K(I)
                    }
                }, "Link Account"), r.createElement(a.zx, {
                    onClick: Q,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var I = n(56646),
                R = n(6811),
                F = n(68412),
                j = n(79442),
                z = n(60006),
                U = n(86646),
                q = n(43862);
            const V = function() {
                var e = (0, C.XC)(),
                    t = e.data,
                    n = e.isError,
                    a = e.isFetching,
                    l = (0, C.q7)(),
                    o = l.data,
                    i = void 0 === o ? [] : o,
                    c = l.isError,
                    s = l.isFetching,
                    u = i.includes("permission-age-verification"),
                    m = (0, j.HI)(),
                    d = m.data,
                    p = m.isError,
                    f = m.isFetching,
                    h = n || c || p;
                if (a || s || f) return r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement(q.Z, {
                    size: "5x"
                }));
                if (h) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(U.Z, {
                    icon: F.faCircleQuestion
                }), " Unable to determine your Age Verification status."), r.createElement(z.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!u) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(U.Z, {
                    icon: I.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), r.createElement(z.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                var w = t.isAdult;
                switch (d.status) {
                    case "verified":
                    case "approved":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(U.Z, {
                            icon: R.f8
                        }), " You have successfully verified your age.", w && " You may choose whether to display it on your profile."), w && r.createElement(z.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(U.Z, {
                            icon: I.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), r.createElement(z.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(U.Z, {
                            icon: I.faCircleInfo
                        }), " You can check your Age Verification status here."), r.createElement(z.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Check Status"))
                }
            };
            var $ = n(42138),
                L = n(3820),
                _ = n(23138),
                M = n(3620),
                Y = n(29104);
            var B = (0, c.Z)("div", {
                target: "ezmvepu0"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const H = function() {
                var e, t = (0, p.I0)(),
                    n = (0, l.Tu)().user,
                    a = (0, r.useState)(new Set(n.contentFilters)),
                    o = (0, i.Z)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.Nr)(c, 1400),
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
                            t = (0, $.Z)(u);
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
                        icon: L.Yj,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }), [v]);
                return r.createElement(r.Fragment, null, r.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), E && r.createElement(_.Z, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == y || null === (e = y.data) || void 0 === e ? void 0 : e.error.message), Object.entries(M.N).map((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.createElement(B, {
                        key: n
                    }, r.createElement(Y.Z, {
                        label: "Filter ".concat(a),
                        defaultChecked: c.has(n),
                        onChangeCallback: function() {
                            return e = n, void(c.has(e) ? s(new Set((0, $.Z)(c).filter((function(t) {
                                return t !== e
                            })))) : s(new Set(c).add(e)));
                            var e
                        }
                    }))
                })), r.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var W = n(4942),
                G = n(82414),
                K = n(91557),
                X = (0, r.createContext)(null);
            const Q = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, r.useState)(1),
                    o = (0, i.Z)(l, 2),
                    c = o[0],
                    s = o[1],
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
                    x = (0, r.useState)({}),
                    Z = (0, i.Z)(x, 2),
                    k = Z[0],
                    N = Z[1],
                    C = function() {
                        s(1), p(null), g(!1), b({}), n()
                    };
                return w ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.$1, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: G.sq
                }), r.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), r.createElement("p", null, "We will look into it and email you for next possible steps."), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: C
                }, "Done"))) : d ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.$1, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: G.sq
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
                    onClick: C
                }, "Done"))) : r.createElement(X.Provider, {
                    value: {
                        next: function() {
                            s((function(e) {
                                return e + 1
                            }))
                        },
                        previous: function() {
                            s((function(e) {
                                return e - 1
                            }))
                        },
                        currentStep: c,
                        setFormError: p,
                        setFormSuccess: g,
                        ownerInfo: v,
                        setOwnerInfo: b,
                        claimInfo: k,
                        setClaimInfo: N,
                        resetForm: C
                    }
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

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
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var te = [{
                    label: "I am the owner of the copyright",
                    value: "owner"
                }, {
                    label: "I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed",
                    value: "authorized"
                }],
                ne = new RegExp(/(?:avtr|wrld)_[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}/i),
                re = function(e) {
                    return e.filter((function(e) {
                        return ne.test(e)
                    })).map((function(e) {
                        var t;
                        return null === (t = e.match(ne)) || void 0 === t ? void 0 : t[0]
                    }))
                };
            const ae = function() {
                var e, t, n, l, o = (0, O.lr)(),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = (c[1], (0, r.useState)("owner")),
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
                    x = (0, r.useContext)(X),
                    Z = x.previous,
                    k = x.currentStep,
                    N = x.claimInfo,
                    C = x.setClaimInfo,
                    S = x.ownerInfo,
                    P = x.setFormError,
                    T = x.setFormSuccess,
                    A = (null == w ? void 0 : w.owner) && (null == w ? void 0 : w.accurate) && (null == w ? void 0 : w.perjury) && (null == w ? void 0 : w.liability) && (null == w ? void 0 : w.abuse),
                    D = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && A && v.toLowerCase() === S.fullName.toLowerCase(),
                    I = (0, K.lw)(),
                    R = (0, i.Z)(I, 2),
                    F = R[0],
                    j = R[1],
                    z = j.isError,
                    U = j.error,
                    q = j.isLoading,
                    V = j.isSuccess,
                    $ = j.reset;
                (0, r.useEffect)((function() {
                    var e = s.get("dmcaTarget");
                    e && C(ee(ee({}, N), {}, {
                        contentIds: re([e])
                    }))
                }), []), (0, r.useEffect)((function() {
                    var e;
                    z && ($(), P("Could Not Proccess Claim: ".concat(null == U || null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }), [z, U]), (0, r.useEffect)((function() {
                    V && ($(), T(!0))
                }), [V]);
                var L = function(e) {
                    g(ee(ee({}, w), {}, (0, W.Z)({}, e.target.id, e.target.checked)))
                };
                return 3 !== k ? null : r.createElement(r.Fragment, null, r.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", r.createElement(a.gx, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
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
                        return ne.test(e)
                    },
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
                            contentIds: re(e)
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
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
                    options: te,
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
                        return C(ee(ee({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), r.createElement(le, {
                    className: "tw-mb-4"
                }, r.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), r.createElement(a.XZ, {
                    id: "owner",
                    checked: null == w ? void 0 : w.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: L
                }), r.createElement(a.XZ, {
                    id: "accurate",
                    checked: null == w ? void 0 : w.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: L
                }), r.createElement(a.XZ, {
                    id: "perjury",
                    checked: null == w ? void 0 : w.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: L
                }), r.createElement(a.XZ, {
                    id: "liability",
                    checked: null == w ? void 0 : w.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: L
                }), r.createElement(a.XZ, {
                    id: "abuse",
                    checked: null == w ? void 0 : w.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: L
                })), r.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: v.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == S || null === (l = S.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), A ? null : r.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, r.createElement(a.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: G.sq
                }), r.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    onClick: Z,
                    containerStyles: oe,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    disabled: !D || q,
                    containerStyles: oe,
                    onClick: function() {
                        return F({
                            claimInfo: N,
                            ownerInfo: S
                        })
                    }
                }, "Submit")))
            };
            var le = (0, c.Z)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                oe = {
                    width: "100%"
                };
            const ie = function() {
                var e = (0, r.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useContext)(X),
                    c = o.resetForm,
                    s = o.next,
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
                    onClick: c,
                    neutral: !0
                }, "Cancel"), r.createElement(a.zx, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        "owner" === n ? s() : m("We can only process DMCA claims by the owner or authorized representative of the claimed content.")
                    },
                    disabled: !n
                }, "Next")))
            };
            var ce = n(59545),
                se = n(83868),
                ue = n.n(se);

            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function de(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(n), !0).forEach((function(t) {
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const pe = function() {
                var e = (0, r.useState)(!0),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, r.useContext)(X),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    w = m.setOwnerInfo;
                return (0, r.useEffect)((function() {
                    var e, t, n, r, a, l;
                    ue()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (r = h.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (a = h.mailingCountry) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }), [h]), 2 !== f ? null : r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? r.createElement(fe, null, r.createElement(a.$1, {
                    className: "tw-px-2",
                    icon: G.sq
                }), r.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), r.createElement(a.$1, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: ce.NB,
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", r.createElement(a.II, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
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
                        return w(de(de({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    containerStyles: he,
                    onClick: p,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    containerStyles: he,
                    disabled: !s,
                    onClick: d
                }, "Next")))
            };
            var fe = (0, c.Z)("div", {
                    target: "exj8v4t0"
                })({
                    name: "5vwt1n",
                    styles: "display:flex;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                }),
                he = {
                    width: "100%"
                };
            const we = function() {
                var e = (0, O.lr)(),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1];
                (0, r.useEffect)((function() {
                    var e = Object.fromEntries((0, $.Z)(n.entries()).filter((function(e) {
                        return "dmcaClaimForm" !== (0, i.Z)(e, 1)[0]
                    })));
                    s && (e.dmcaClaimForm = !0), l(e)
                }), [s]), (0, r.useEffect)((function() {
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
                    isVisible: s,
                    onClose: function() {
                        return u(!1)
                    }
                }, r.createElement(Q, {
                    closeModal: function() {
                        u(!1)
                    }
                }, r.createElement(ie, null), r.createElement(pe, null), r.createElement(ae, null))))
            };
            var ge = n(65578),
                Ee = n(84176),
                ye = n(22081),
                ve = n(92332),
                be = n(34424),
                xe = n(27484),
                Ze = n.n(xe),
                ke = n(21442),
                Ne = n(8860),
                Ce = n(98185),
                Se = n(5513),
                Pe = n(8698),
                Oe = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                Te = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                Ae = (0, Pe.P1)(Oe, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                })),
                De = (0, Pe.P1)(Oe, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                })),
                Ie = (0, Pe.P1)(Oe, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                })),
                Re = (0, Pe.P1)(Oe, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                })),
                Fe = (0, Pe.P1)(Te, (function(e) {
                    return null !== e && e.length > 0
                })),
                je = (0, Pe.P1)(Fe, Te, (function(e, t) {
                    return e && t.reduce((function(e, t) {
                        return Ze()(t.updated_at) > Ze()(e.updated_at) ? t : e
                    }), {
                        updated_at: 0
                    })
                })),
                ze = (0, Pe.P1)(Te, je, (function(e, t) {
                    return null !== e && t.updated_at
                })),
                Ue = (0, Pe.P1)(Te, je, (function(e, t) {
                    return null !== e && t.displayName
                })),
                qe = (0, Pe.P1)(Te, je, (function(e, t) {
                    return null !== e && !!t.reverted
                })),
                Ve = n(76938),
                $e = n(52926),
                Le = n(1059),
                _e = n(45697),
                Me = n.n(_e),
                Ye = function(e) {
                    var t = e.canChangeDisplayName,
                        n = e.validationError,
                        l = e.displayNameChanged,
                        o = void 0 !== l && l,
                        i = (0, p.v9)(De),
                        c = (0, p.v9)(Re),
                        s = (0, p.v9)(ze),
                        u = o || (0, p.v9)((function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return r.createElement(r.Fragment, null, t && r.createElement(_.Z, {
                        color: "info"
                    }, r.createElement(a.$1, {
                        icon: G.sq,
                        color: "teal"
                    }), " You may only change your display name once every 3 months, choose wisely! Once you change your name, you may never be able to get your original name back!"), !t && r.createElement(_.Z, {
                        color: "info",
                        "aria-label": "name warning"
                    }, r.createElement(a.$1, {
                        icon: Le.U$
                    }), " Your next allowed display name change is in ", 90 - Ze()().diff(s, "days"), " days"), null !== n && r.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, r.createElement(a.$1, {
                        icon: ye.lE
                    }), " ".concat(n)), i && null === n && r.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, r.createElement(a.$1, {
                        icon: $e.B1
                    }), " That display name is already in use."), c && null === n && r.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, r.createElement(a.$1, {
                        icon: $e.B1
                    }), " That display name includes characters that cannot be used. Please try again."), u && r.createElement(_.Z, {
                        color: "success",
                        "aria-label": "name change success"
                    }, r.createElement(a.$1, {
                        icon: ye.lE
                    }), " Your display name has been changed!"))
                };
            Ye.propTypes = {
                canChangeDisplayName: Me().bool.isRequired,
                validationError: Me().string
            };
            const Be = Ye;
            var He = function(e) {
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
                }, "help.vrchat.com"), "."), r.createElement(Z.Z, {
                    className: "me-2",
                    onClick: function() {
                        return n((0, Se.IX)())
                    },
                    color: "primary"
                }, "Try Again")))
            };
            He.propTypes = {
                displayNameError: Me().string.isRequired
            };
            const We = He;
            var Ge = (0, c.Z)("p", {
                    target: "ek3joju1"
                })({
                    name: "dzbp6p",
                    styles: "white-space:pre-wrap;line-height:2"
                }),
                Ke = (0, c.Z)("b", {
                    target: "ek3joju0"
                })({
                    name: "lii32t",
                    styles: "font-size:1.2em;color:var(--bs-primary)"
                }),
                Xe = function(e) {
                    var t = e.canRevertDisplayName,
                        n = e.numberOfDays,
                        a = e.showLastDisplayNameChange;
                    return r.createElement(Ge, null, a && r.createElement(r.Fragment, null, "It has been ", n, " days since your last display name change.", r.createElement("br", null)), "• You may only change your display name once per 90 days.", r.createElement("br", null), t && r.createElement(r.Fragment, null, "• You can revert your last display name change.", r.createElement("br", null)))
                };
            Xe.propTypes = {
                canRevertDisplayName: Me().bool.isRequired,
                numberOfDays: Me().number.isRequired,
                showLastDisplayNameChange: Me().bool.isRequired
            };
            const Qe = Xe;
            var Je = n(39886),
                et = n(56599),
                tt = n(54610),
                nt = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.I0)(),
                        c = (0, p.v9)((function(e) {
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
                        x = (0, i.Z)(b, 2),
                        k = x[0],
                        N = x[1],
                        C = (0, r.useState)(!1),
                        S = (0, i.Z)(C, 2),
                        P = S[0],
                        O = S[1];
                    (0, r.useEffect)((function() {
                        return N("" === y || f !== n)
                    }), [y, f]);
                    var T = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var r, a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, Se.eu)({
                                            userId: c,
                                            displayName: n,
                                            currentPassword: y,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (r = null === (a = e.t0.response) || void 0 === a || null === (a = a.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), O(!1), l((0, h.d)({
                                            title: "Failed to revert display name",
                                            icon: s.eH,
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
                    }, r.createElement(Je.Z, {
                        className: "mb-4",
                        outline: !0
                    }, r.createElement(et.Z, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), r.createElement(tt.Z, null, r.createElement(Ge, null, "This will change your display name back to:", r.createElement("br", null), r.createElement(Ke, null, n), r.createElement("br", null), "And restart the 90-day timer.", r.createElement("br", null), "Type your previous display name into the field below to revert."), r.createElement("input", {
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
                    }), r.createElement(Z.Z, {
                        className: "me-2",
                        onClick: function() {
                            return O(!0)
                        },
                        disabled: k,
                        color: "primary"
                    }, "Ok"), r.createElement(Z.Z, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), r.createElement(a.sm, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: T,
                        cancelCallback: function() {
                            return O(!1)
                        },
                        isOpen: P
                    }))
                };
            nt.propTypes = {
                exitRevertCallback: Me().func.isRequired,
                previousDisplayName: Me().string
            };
            const rt = nt;
            const at = function() {
                var e, t, n = (0, p.I0)(),
                    c = (0, f.yi)(),
                    s = (0, i.Z)(c, 2),
                    u = s[0],
                    d = s[1],
                    h = d.isLoading,
                    w = d.isError,
                    g = d.error,
                    E = d.isSuccess,
                    y = (0, p.v9)(Ae),
                    v = (0, p.v9)(Ie),
                    k = (0, p.v9)(Oe),
                    N = (0, p.v9)(Fe),
                    C = (0, p.v9)(qe),
                    S = (0, p.v9)(Ve.y),
                    P = (0, p.v9)(ze),
                    O = (0, p.v9)(Ue),
                    T = (0, p.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    A = (0, r.useState)(!0),
                    D = (0, i.Z)(A, 2),
                    I = D[0],
                    R = D[1],
                    F = (0, r.useState)(null),
                    j = (0, i.Z)(F, 2),
                    z = j[0],
                    U = j[1],
                    q = (0, r.useState)(""),
                    V = (0, i.Z)(q, 2),
                    $ = V[0],
                    L = V[1],
                    M = (0, r.useState)(""),
                    Y = (0, i.Z)(M, 2),
                    B = Y[0],
                    H = Y[1],
                    W = (0, r.useState)(null),
                    G = (0, i.Z)(W, 2),
                    K = G[0],
                    X = G[1],
                    Q = (0, r.useState)(""),
                    J = (0, i.Z)(Q, 2),
                    ee = J[0],
                    te = J[1],
                    ne = r.useState(!1),
                    re = (0, i.Z)(ne, 2),
                    ae = re[0],
                    le = re[1],
                    oe = (0, r.useState)(!1),
                    ie = (0, i.Z)(oe, 2),
                    ce = ie[0],
                    se = ie[1],
                    ue = (0, l.Nr)(ee),
                    me = y && v && "" !== ue;
                if ((0, r.useEffect)((function() {
                        S ? R(!0) : N && Ze()().diff(P, "days") < 90 ? R(!1) : R(!0)
                    }), [P]), (0, r.useEffect)((function() {
                        "" !== ue ? ue.length < 4 ? X("That name is too short.") : ue.length > 15 ? X("That name is too long.") : (X(null), L(""), n((0, Se.Zm)({
                            displayName: ue,
                            userId: T.id
                        }))) : X(null)
                    }), [ue]), (0, r.useEffect)((function() {
                        return "" === $ ? (le(!1), void U(null)) : $ !== ee ? (le(!1), void U("Names don't match")) : (le(!0), void U(null))
                    }), [$]), w) return r.createElement(We, {
                    displayNameError: null !== (e = null === (t = g.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (ce) return r.createElement(rt, {
                    previousDisplayName: O,
                    exitRevertCallback: function() {
                        return se(!1)
                    }
                });
                var de = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, n(u({
                                            password: B,
                                            displayName: ee,
                                            revertDisplayName: !1,
                                            userId: T.id
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
                    pe = !I && !C;
                return r.createElement(Ce.Z, {
                    loading: h
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(ke.Z, null, r.createElement(Qe, {
                    canRevertDisplayName: pe,
                    showLastDisplayNameChange: !I,
                    numberOfDays: Ze()().diff(P, "days")
                }), r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: be.Qj,
                    size: "2x"
                })), r.createElement(x.Z, {
                    xs: "10"
                }, r.createElement(b.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !I,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return te(e.target.value)
                    },
                    placeholder: T.displayName,
                    type: "text",
                    value: ee
                }), r.createElement(Be, {
                    canChangeDisplayName: I,
                    displayName: T.displayName,
                    displayNameAvailable: y,
                    displayNameValue: ee,
                    isRevert: !1,
                    latestChangedDate: P,
                    displayNameChecking: k,
                    validationError: K,
                    displayNameChanged: E
                }))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, k && r.createElement(a.$1, {
                    icon: ve.LM,
                    spin: !0,
                    size: "2x"
                }), "" !== ee && !k && r.createElement(Ne.Z, {
                    "aria-label": y && v ? "Name is available" : "Name is unavailable",
                    ok: y && v
                }))), me && !E && r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, r.createElement(b.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "confirm display name",
                    autoComplete: "off",
                    className: "form-control",
                    id: "confirmDisplayName",
                    name: "confirmDisplayName",
                    onChange: function(e) {
                        return L(e.target.value)
                    },
                    placeholder: "Please confirm display name",
                    type: "text",
                    value: $
                }), null !== z && r.createElement(_.Z, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, r.createElement(a.$1, {
                    icon: ye.lE
                }), " ".concat(z)))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== $ && r.createElement(Ne.Z, {
                    "aria-label": null !== z ? z : "Confirmation name matches",
                    ok: null === z
                }))), ae && !E && r.createElement(b.Z, {
                    className: "mt-2"
                }, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: Ee.DD,
                    size: "2x"
                })), r.createElement(x.Z, {
                    xs: "10"
                }, r.createElement(b.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "Please confirm current password",
                    className: "form-control",
                    id: "namePasswordVerify",
                    name: "namePasswordVerify",
                    onChange: function(e) {
                        return H(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: B
                })))), r.createElement(b.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, pe && r.createElement(x.Z, {
                    xs: "6"
                }, r.createElement(Z.Z, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return se(!0)
                    }
                }, "Revert Display Name Change")), r.createElement(x.Z, {
                    xs: "6"
                }, r.createElement(Z.Z, {
                    disabled: !I || !0 === k || null !== z || "" === $ || "" === B || null !== K || "" === ee,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: de
                }, "Change Display Name"))))))
            };
            var lt = n(15671),
                ot = n(43144),
                it = n(97326),
                ct = n(60136),
                st = n(82963),
                ut = n(61120),
                mt = n(609),
                dt = n(82470);

            function pt(e) {
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
                    var n, r = (0, ut.Z)(e);
                    if (t) {
                        var a = (0, ut.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, st.Z)(this, n)
                }
            }
            var ft = function(e) {
                (0, ct.Z)(s, e);
                var t, n, l, i, c = pt(s);

                function s(e) {
                    var t;
                    return (0, lt.Z)(this, s), (t = c.call(this, e)).state = {
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
                    }, t.handleCurrentPassword = t.handleCurrentPassword.bind((0, it.Z)(t)), t.handleNewPassword = t.handleNewPassword.bind((0, it.Z)(t)), t.handleConfirmation = t.handleConfirmation.bind((0, it.Z)(t)), t.handleSubmit = t.handleSubmit.bind((0, it.Z)(t)), t
                }
                return (0, ot.Z)(s, [{
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
                                    return r = !1, n.length < 8 ? r = "That password is too short" : (0, dt.w)(n) && (r = "Please try a more secure password"), a = !r, l = !1, o = !1, "" !== this.state.confirmation && (this.state.confirmation !== n ? l = "Passwords don't match" : o = !0), e.next = 14, this.setStatePromisified({
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
                                    return t.preventDefault(), e.next = 3, this.props.dispatch((0, Se.Cp)({
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
                        return r.createElement(Ce.Z, {
                            loading: e.changing
                        }, r.createElement("div", {
                            className: "center-panel"
                        }, r.createElement("form", {
                            onSubmit: this.handleSubmit
                        }, "" !== e.error && r.createElement(_.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ye.lE
                        }), " An error occurred: ", e.error), r.createElement(b.Z, null, r.createElement(x.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, r.createElement(a.$1, {
                            icon: mt.by,
                            size: "2x"
                        })), r.createElement(x.Z, {
                            xs: "10"
                        }, r.createElement(b.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "newPassword",
                            name: "newPassword",
                            className: "form-control",
                            placeholder: "Please enter new password",
                            onChange: this.handleNewPassword,
                            onKeyUp: this.handleNewPassword
                        }), this.state.newPasswordError && r.createElement(_.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ye.lE
                        }), " ", this.state.newPasswordError), e.changed && r.createElement(_.Z, {
                            color: "success"
                        }, r.createElement(a.$1, {
                            icon: ye.lE
                        }), " Your password has been changed!"))), r.createElement(x.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, r.createElement(Ne.Z, {
                            ok: this.state.newPasswordOk
                        }))), this.state.showConfirmation && r.createElement(b.Z, null, r.createElement(x.Z, {
                            xs: {
                                size: 10,
                                offset: 1
                            }
                        }, r.createElement(b.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "confirmNewPassword",
                            name: "confirmNewPassword",
                            className: "form-control",
                            placeholder: "Please confirm new password",
                            onChange: this.handleConfirmation,
                            onKeyUp: this.handleConfirmation
                        }), this.state.confirmationError && r.createElement(_.Z, {
                            color: "warning"
                        }, r.createElement(a.$1, {
                            icon: ye.lE
                        }), " ", this.state.confirmationError))), r.createElement(x.Z, {
                            xs: "1",
                            style: {
                                textAlign: "left"
                            },
                            className: "mx-0 px-0"
                        }, r.createElement(Ne.Z, {
                            ok: this.state.confirmationOk
                        }))), this.state.showPassword && r.createElement(b.Z, null, r.createElement(x.Z, {
                            xs: "1",
                            style: {
                                textAlign: "right"
                            },
                            className: "mx-0"
                        }, r.createElement(a.$1, {
                            icon: Ee.DD,
                            size: "2x"
                        })), r.createElement(x.Z, {
                            xs: "10"
                        }, r.createElement(b.Z, {
                            className: "mx-0"
                        }, r.createElement("input", {
                            type: "password",
                            id: "passwordPasswordVerify",
                            name: "passwordPasswordVerify",
                            className: "form-control",
                            placeholder: "Please confirm current password",
                            onChange: this.handleCurrentPassword,
                            onKeyUp: this.handleCurrentPassword
                        })))), r.createElement(b.Z, {
                            className: "align-items-center justify-content-center d-flex mt-2"
                        }, r.createElement(x.Z, {
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
                }]), s
            }(r.Component);
            const ht = (0, p.$j)((function(e) {
                return {
                    currentUser: e.currentUser.databaseUser,
                    password: e.currentUser.password
                }
            }))(ft);
            var wt = n(42501),
                gt = n(67714);
            const Et = function() {
                var e, t, n = (0, p.I0)(),
                    l = (0, C.IB)().data,
                    c = null == l || null === (e = l.presence) || void 0 === e ? void 0 : e.world,
                    s = (0, f.u4)({
                        userId: null == l ? void 0 : l.id,
                        worldId: c
                    }, {
                        skip: !c
                    }),
                    u = s.isLoading,
                    d = s.isError,
                    w = !(u || d),
                    g = (0, f.IO)(),
                    E = (0, i.Z)(g, 2),
                    y = E[0],
                    v = E[1],
                    b = v.isLoading,
                    x = v.isError,
                    Z = v.error,
                    k = v.reset,
                    N = r.useState(!1),
                    S = (0, i.Z)(N, 2),
                    P = S[0],
                    O = S[1],
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
                                            icon: gt.iC,
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
                    A = w ? "This action will reset your user data in all worlds you've visited except any world you're currently in. To reset that world's data, please exit it first, then go to \"Reset User Data\" in the world's details." : "This action will reset your user data in all worlds you've visited. Rejoin worlds for changes to take effect.";
                return r.createElement(r.Fragment, null, r.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), r.createElement(a.zx, {
                    type: "button",
                    onClick: function() {
                        O(!0)
                    },
                    danger: !0
                }, r.createElement(a.$1, {
                    icon: wt.faUserXmark
                }), " Reset All User Data"), r.createElement(a.sm, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: T,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        O(!1), k()
                    },
                    isOpen: P,
                    isLoading: b
                }, r.createElement("p", null, A), r.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), x && r.createElement(a.qX, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == Z || null === (t = Z.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var yt = n(21707);
            const vt = function() {
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
                }, r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), n ? r.createElement(_.Z, {
                    className: "warning"
                }, r.createElement(a.$1, {
                    icon: yt.e7
                }), " ", n) : r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10"
                }, r.createElement(Z.Z, {
                    type: "button",
                    color: "primary",
                    onClick: o
                }, "Change Privacy Settings"))))
            };
            var bt = n(85020),
                xt = n(65394),
                Zt = n(2909),
                kt = n(32966),
                Nt = n(50906),
                Ct = n(45432),
                St = n(74855),
                Pt = n(53637),
                Ot = n(12611),
                Tt = n(37549),
                At = n(9669),
                Dt = n.n(At);

            function It(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Rt(e) {
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
                    var n, r = (0, ut.Z)(e);
                    if (t) {
                        var a = (0, ut.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, st.Z)(this, n)
                }
            }
            var Ft = "https://docs.vrchat.com/docs/setup-2fa",
                jt = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                zt = "otpDownload",
                Ut = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                qt = function(e) {
                    (0, ct.Z)(n, e);
                    var t = Rt(n);

                    function n(e) {
                        var a;
                        return (0, lt.Z)(this, n), a = t.call(this, e), (0, W.Z)((0, it.Z)(a), "getOneTimePasswords", (0, o.Z)(m().mark((function e() {
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
                                            payload: Dt().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
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
                        })))), (0, W.Z)((0, it.Z)(a), "disable", function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                var n, r;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, a.props.dispatch({
                                                type: "TWOFACTORAUTH_REMOVE",
                                                payload: Dt().delete(window.apiUrl("/api/1/auth/twofactorauth"))
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
                                t % 2 ? It(Object(n), !0).forEach((function(t) {
                                    (0, W.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, Ut), a.ref = r.createRef(), a.enable = a.enable.bind((0, it.Z)(a)), a.renderSetup = a.renderSetup.bind((0, it.Z)(a)), a.renderStatus = a.renderStatus.bind((0, it.Z)(a)), a.handleChangeVerifyCode = a.handleChangeVerifyCode.bind((0, it.Z)(a)), a.handleVerifyPendingSecret = a.handleVerifyPendingSecret.bind((0, it.Z)(a)), a.isSettingUp = a.isSettingUp.bind((0, it.Z)(a)), a.cancelSecret = a.cancelSecret.bind((0, it.Z)(a)), a.showTextKey = a.showTextKey.bind((0, it.Z)(a)), a.goToStep0 = a.goToStep0.bind((0, it.Z)(a)), a.goToStep1 = a.goToStep1.bind((0, it.Z)(a)), a.goToStep2 = a.goToStep2.bind((0, it.Z)(a)), a.toggleOneTimePasswordsShown = a.toggleOneTimePasswordsShown.bind((0, it.Z)(a)), a.hasOneTimePasswords = a.hasOneTimePasswords.bind((0, it.Z)(a)), a.getOneTimePasswordHref = a.getOneTimePasswordHref.bind((0, it.Z)(a)), a.downloadOneTimePasswords = a.downloadOneTimePasswords.bind((0, it.Z)(a)), a.triggerOtpDownloadLink = a.triggerOtpDownloadLink.bind((0, it.Z)(a)), a
                    }
                    return (0, ot.Z)(n, [{
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
                                payload: Dt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
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
                                return "".concat(jt(e.code), "\n")
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
                            e.preventDefault(), this.setState(Ut), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: Dt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(Ut), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: Dt().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
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
                            document.getElementById(zt).click(), this.setState({
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
                                            icon: Ct.a3,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", r.createElement("a", {
                                            href: Ft,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), r.createElement("p", null, r.createElement(Ot.Z, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), r.createElement("div", null, r.createElement("p", null, r.createElement(a.$1, {
                                            icon: yt.e7,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), r.createElement("p", null, "We", " ", r.createElement("strong", null, r.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && r.createElement(_.Z, {
                                            color: "warning"
                                        }, r.createElement(a.$1, {
                                            icon: yt.e7
                                        }), " Something went wrong downloading recovery codes."), r.createElement("div", null, r.createElement("p", null, r.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, r.createElement(Ot.Z, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), r.createElement("span", null, r.createElement(Ot.Z, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), r.createElement("a", {
                                            id: zt,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return r.createElement("div", null, r.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", r.createElement("a", {
                                        href: Ft,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), r.createElement("p", null, r.createElement(Ot.Z, {
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
                                }, jt(e.code)))
                            })))) : null)
                        }
                    }, {
                        key: "renderSetup",
                        value: function() {
                            var e, t, n = this.props.twoFactorAuth,
                                l = this.state.isCodeReady && !n.isAwaitingPendingSecretVerification,
                                o = n.isAwaitingPendingSecret || n.isRemovingPendingSecret,
                                i = n.isVerificationRejected && this.state.isPreviousSubmissionRelevant,
                                c = (e = n.pendingSecret, e.match(/.{1,4}/g).join(" ")).toLowerCase();
                            return r.createElement(Ce.Z, {
                                loading: o
                            }, r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("h4", null, "Setup")), r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: Ft,
                                rel: "noreferrer"
                            }, "Help"), r.createElement(Z.Z, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, r.createElement(a.$1, {
                                icon: ce.NB
                            }), " Cancel"))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(Pt.Z, {
                                hidden: 0 !== this.state.step
                            }, r.createElement(b.Z, null, r.createElement(x.Z, {
                                classname: "tw-flex"
                            }, r.createElement(b.Z, null, r.createElement("div", {
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
                                icon: Nt.eF,
                                size: "4x",
                                className: "tw-mr-1"
                            }), r.createElement(a.$1, {
                                icon: kt.D_,
                                size: "4x"
                            }))))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement(Z.Z, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", r.createElement(a.$1, {
                                icon: xt._t
                            }))))), r.createElement(Pt.Z, {
                                hidden: 1 !== this.state.step
                            }, r.createElement(b.Z, null, r.createElement(x.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), r.createElement("p", null, "If you can't scan the code,", " ", r.createElement($t, {
                                type: "button",
                                onClick: this.showTextKey
                            }, "enter the key manually"), "."), r.createElement("div", {
                                hidden: !this.state.isTextKeyShown
                            }, r.createElement("p", null, r.createElement("textarea", {
                                id: "textKey",
                                cols: "30",
                                rows: "3",
                                value: c,
                                style: {
                                    overflow: "hidden",
                                    resize: "none",
                                    marginRight: "1em",
                                    marginBottom: "0.5em",
                                    verticalAlign: "top"
                                },
                                readOnly: !0,
                                className: "text-monospace"
                            }), r.createElement(St.CopyToClipboard, {
                                text: c
                            }, r.createElement(Z.Z, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, r.createElement(a.$1, {
                                icon: Zt.kZ
                            }), " Copy"))))), r.createElement(x.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("p", null, r.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(c)
                            })))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement(Z.Z, {
                                onClick: this.goToStep0
                            }, r.createElement(a.$1, {
                                icon: bt.A3
                            }), " Previous")), r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement(Z.Z, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", r.createElement(a.$1, {
                                icon: xt._t
                            }))))), r.createElement(Pt.Z, {
                                hidden: 2 !== this.state.step
                            }, r.createElement(b.Z, null, r.createElement(x.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), r.createElement(x.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("div", null, i && r.createElement(_.Z, {
                                color: "warning"
                            }, r.createElement(a.$1, {
                                icon: yt.e7
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
                            }), r.createElement(Ot.Z, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement(Z.Z, {
                                onClick: this.goToStep1
                            }, r.createElement(a.$1, {
                                icon: bt.A3
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
            const Vt = (0, Tt.Z)((0, p.$j)((function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            }))(qt));
            var $t = (0, c.Z)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const Lt = function() {
                var e = (0, l.Tu)().user;
                return r.createElement("div", null, r.createElement(a.$4, null, "Account Settings"), r.createElement("h2", null, "Account Settings"), r.createElement(a.oI, null, r.createElement("h4", null, "Change Display Name")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(at, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Email")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ge.Z, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Password")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ht, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Two-factor authentication")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(Vt, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Account Linking")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(D, {
                    user: e
                })), r.createElement(a.oI, null, r.createElement("h4", null, "Privacy")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(vt, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Age Verification")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(V, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Copyright")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(we, null)), !(null != e && e.hideContentFilterSettings) && r.createElement(r.Fragment, null, r.createElement(a.oI, null, r.createElement("h4", null, "Content Gating")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(H, null))), r.createElement(a.oI, null, r.createElement("h4", null, "User Data")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(Et, null)), r.createElement(a.l8, {
                    className: "mb-2"
                }, r.createElement(a.oI, null, r.createElement("h4", null, "Danger Zone")), r.createElement(a.Ao, null, r.createElement(w, null))))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var r = n(54546),
                a = n(84176),
                l = n(56811),
                o = n(92332),
                i = n(68055),
                c = n(57310),
                s = n(82414),
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
                b = n(96985),
                x = n(8860),
                Z = n(18461);
            const k = function() {
                var e = (0, y.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.Z)(t, 2),
                    w = n[0],
                    k = n[1],
                    N = (0, m.useState)(""),
                    C = (0, r.Z)(N, 2),
                    S = C[0],
                    P = C[1],
                    O = (0, m.useState)(""),
                    T = (0, r.Z)(O, 2),
                    A = T[0],
                    D = T[1],
                    I = (0, E.Nr)(w),
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
                    H = B.isLoading,
                    W = B.isError,
                    G = B.error,
                    K = (0, y.Fe)(),
                    X = (0, r.Z)(K, 2),
                    Q = X[0],
                    J = X[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    re = J.isSuccess,
                    ae = (0, v.SO)({
                        email: I,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === I || !1 === g()(I)
                    }),
                    le = ae.data,
                    oe = ae.isFetching,
                    ie = ae.isSuccess,
                    ce = ae.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    P(""), D("")
                }), [w]);
                var ue = (0, m.useMemo)((function() {
                        return ie && !1 === le.userExists && g()(I) && "" !== I
                    }), [le, I]),
                    me = (0, m.useMemo)((function() {
                        return "" !== S && S === I
                    }), [S, I]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === g()(I) && "" !== I) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == ce ? void 0 : ce.email) === I) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (W) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", G, ".");
                        if (q && (null == L ? void 0 : L.email) === I) {
                            D("");
                            var t = $.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(b.$1, {
                                icon: u.e7
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== S && S !== I) return m.createElement(d.Z, {
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
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : V ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }), [re, te, q, V, le, ie, S, I, e, W]),
                    pe = (0, m.useMemo)((function() {
                        return !se || V ? m.createElement("span", null, m.createElement(b.$1, {
                            icon: c.XC
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.$1, {
                            icon: i.LE,
                            color: "success"
                        }), " Email Verified")
                    }), [se, V]),
                    fe = (0, m.useMemo)((function() {
                        return oe ? m.createElement(b.$1, {
                            icon: o.LM,
                            spin: !0,
                            size: "2x"
                        }) : "" === I ? null : ue ? m.createElement(x.Z, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(x.Z, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }), [oe, I, ue]);
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
                        return k(e.target.value)
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
                        return P(e.target.value)
                    },
                    placeholder: "Please confirm email",
                    type: "text",
                    value: S
                }))), m.createElement(f.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== S && m.createElement(x.Z, {
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
                        return D(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: A
                })))), m.createElement(p.Z, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(p.Z, null, m.createElement(f.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(Z.Z, {
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
                        return Q()
                    },
                    outline: !0
                }, pe)), m.createElement(f.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || U || "" === A,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), j({
                            userId: null == e ? void 0 : e.id,
                            email: I,
                            password: A
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
                lw: () => s,
                oR: () => c
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
                c = i.useGetRestrictedContentQuery,
                s = i.useRequestContentRestrictionMutation,
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
        },
        40219: (e, t, n) => {
            n.d(t, {
                y: () => o
            });
            var r = n(15861),
                a = n(64687),
                l = n.n(a),
                o = function() {
                    var e = (0, r.Z)(l().mark((function e() {
                        var t, n, r, a, o, i, c, s, u, m, d = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = (d.length > 0 && void 0 !== d[0] ? d[0] : {}).redirectTo, n = void 0 === t ? "/home/login" : t, "1366854478250381462", r = ["identify", "email"], a = window.location.origin + window.location.pathname, o = a.split("/home/"), a = "".concat(o[0], "/home/discord/auth"), i = {
                                        redirectUri: a,
                                        isMobileRequest: !1,
                                        redirectTo: n
                                    }, c = JSON.stringify(i), s = btoa(c), u = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: i.redirectUri,
                                        response_type: "code",
                                        scope: r.join(" "),
                                        state: s
                                    }), m = "https://discord.com/oauth2/authorize?".concat(u.toString()), window.location.href = m;
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        57672: (e, t, n) => {
            n.d(t, {
                y: () => r
            });
            var r = function(e) {
                if (null != e && e.requiresTwoFactorAuth) {
                    var t, n, r = "/home/stepupauth";
                    return "emailOtp" === (null === (t = e.requiresTwoFactorAuth) || void 0 === t ? void 0 : t[0]) && (r = "/home/emailstepupauth"), 0 === (null === (n = e.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) && e.ticket && (r = "/home/verify-password"), r
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=cea5d316a51a291721afb60798fcb66ef34eed62d5b17e11a03a35fb2a7287d2.js.map