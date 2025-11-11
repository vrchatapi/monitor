"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7541], {
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var a = n(87462),
                r = n(45987),
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
                    d = (0, r.Z)(e, s);
                return null === n ? null : n ? i.createElement(c.Z, (0, a.Z)({
                    icon: o.LE,
                    size: m,
                    className: "text-success"
                }, d)) : i.createElement(c.Z, (0, a.Z)({
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
                    c = e.color,
                    s = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return r.createElement(l.Z, {
                    className: n,
                    onClick: i,
                    color: c,
                    hidden: u,
                    disabled: m
                }, r.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, s), r.createElement("div", {
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
        77541: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => $t
            });
            var a = n(67294),
                r = n(96985),
                l = n(95168),
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
            const g = function() {
                var e = (0, d.s0)(),
                    t = (0, p.I0)(),
                    n = (0, f.aG)(),
                    c = (0, i.Z)(n, 2),
                    u = c[0],
                    g = c[1].isSuccess,
                    v = (0, l.Tu)().user,
                    y = a.useState(!1),
                    b = (0, i.Z)(y, 2),
                    x = b[0],
                    Z = b[1],
                    k = a.useState(!1),
                    N = (0, i.Z)(k, 2),
                    C = N[0],
                    S = N[1],
                    O = function() {
                        Z(!1), S(!1)
                    },
                    T = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var n, a, r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Z(!1), S(!1), e.next = 4, u({
                                            userId: v.id
                                        });
                                    case 4:
                                        (n = e.sent).error && t((0, h.d)({
                                            title: "Failed to delete your account",
                                            icon: s.eH,
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
                        Z(!0)
                    },
                    danger: !0
                }, "Delete Account"), a.createElement(r.sm, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        Z(!1), S(!0)
                    },
                    cancelCallback: O,
                    isOpen: x
                }), a.createElement(r.sm, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: T,
                    cancelCallback: O,
                    isOpen: C
                }, a.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), a.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), a.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), g && a.createElement(r.u_, {
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
                }, a.createElement(w, null, a.createElement(E, null, "Your account is queued for deletion and will be deleted in 14 days. If you log into the application or the website, the deletion will be cancelled. You will now be logged out of the website and application."))))
            };
            var w = (0, c.Z)(r.JX, {
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
                v = n(75386),
                y = n(27879),
                b = n(35773),
                x = n(95305),
                Z = n(34698),
                k = n(69699),
                N = n(60766),
                C = n(22202),
                S = n(40219),
                O = n(57672),
                T = n(79655),
                P = "link_discord",
                A = "unlink_discord";
            const D = function(e) {
                var t = e.user || {},
                    n = t.discordId,
                    l = t.displayName,
                    c = t.id,
                    s = (0, d.TH)().state,
                    u = (0, a.useState)(null),
                    f = (0, i.Z)(u, 2),
                    g = f[0],
                    w = f[1],
                    E = (0, a.useState)(null),
                    D = (0, i.Z)(E, 2),
                    I = D[0],
                    F = D[1],
                    R = (0, d.s0)(),
                    j = (0, p.I0)(),
                    z = (0, T.lr)(),
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
                    G = B[1],
                    W = G.isLoading,
                    K = (G.isSuccess, G.isError, G.error, function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, a, r, l, o, i, c, s = arguments;
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
                                        w(null), F(null), j((0, h.d)({
                                            title: "Link Discord Account",
                                            icon: v.nN,
                                            message: "Successfully linked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 22;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(3), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || !a.requiresTwoFactorAuth) {
                                            e.next = 18;
                                            break
                                        }
                                        return o = e.t0.data, i = (0, O.y)(o), c = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: g,
                                                continueDiscordAccessToken: t,
                                                redirectTo: "/home/profile"
                                            }
                                        }, e.abrupt("return", R(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), w(null), F(null), e.abrupt("return", j((0, h.d)({
                                            title: "Failure",
                                            message: null !== (r = null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== r ? r : "Discord Linking Failed",
                                            icon: y.IL,
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
                                        w(null), j((0, h.d)({
                                            title: "Unlink Discord Account",
                                            icon: v.nN,
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
                        J || (w(null), F(null))
                    };
                (0, a.useEffect)((function() {
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
                                    w(P), F(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, a.useEffect)((function() {
                    (null == s ? void 0 : s.selectedAction) === P && null != s && s.continueDiscordAccessToken && K(s.continueDiscordAccessToken)
                }), []), (0, a.useEffect)((function() {
                    var e = q.get("prompt"),
                        t = q.get("requestingUserId");
                    "linkDiscordAccount" === e && t && t === c && !n && (0, S.y)({
                        redirectTo: "/home/profile"
                    })
                }), []), (0, a.useEffect)((function() {
                    g === P && I && n && (w(null), F(null))
                }), [W, M, n, I]);
                var J = W || M;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your linked accounts.")), a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "10"
                }, n && a.createElement(Z.Z, {
                    disabled: J,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return w(A)
                    }
                }, "Unlink your Discord Account"), !n && a.createElement(Z.Z, {
                    isLoading: J,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return (0, S.y)({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Link your Discord Account")))), a.createElement(k.Z, {
                    isOpen: g === A,
                    toggle: Q,
                    centered: !0
                }, a.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Discord Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Discord account from this VRChat account? You can link it again anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, l)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: X
                }, "Unlink Account"), a.createElement(r.zx, {
                    onClick: Q,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), a.createElement(k.Z, {
                    isOpen: null !== I && g === P,
                    toggle: Q,
                    centered: !0
                }, a.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, l)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return K(I)
                    }
                }, "Link Account"), a.createElement(r.zx, {
                    onClick: Q,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var I = n(56646),
                F = n(6811),
                R = n(68412),
                j = n(79442),
                z = n(60006),
                U = n(86646),
                q = n(43862);
            const V = function() {
                var e = (0, C.XC)(),
                    t = e.data,
                    n = e.isError,
                    r = e.isFetching,
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
                if (r || s || f) return a.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(q.Z, {
                    size: "5x"
                }));
                if (h) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(U.Z, {
                    icon: R.faCircleQuestion
                }), " Unable to determine your Age Verification status."), a.createElement(z.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!u) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(U.Z, {
                    icon: I.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), a.createElement(z.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                var g = t.isAdult;
                switch (d.status) {
                    case "verified":
                    case "approved":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(U.Z, {
                            icon: F.f8
                        }), " You have successfully verified your age.", g && " You may choose whether to display it on your profile."), g && a.createElement(z.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(U.Z, {
                            icon: I.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), a.createElement(z.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(U.Z, {
                            icon: I.faCircleInfo
                        }), " You can check your Age Verification status here."), a.createElement(z.Qj, {
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
                    r = (0, a.useState)(new Set(n.contentFilters)),
                    o = (0, i.Z)(r, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.Nr)(c, 1400),
                    m = (0, f.Bb)(),
                    d = (0, i.Z)(m, 2),
                    g = d[0],
                    w = d[1],
                    E = w.isError,
                    v = w.error,
                    y = w.isSuccess;
                (0, a.useEffect)((function() {
                    if (null != n && n.id && u) {
                        var e = new Set(n.contentFilters),
                            t = (0, $.Z)(u);
                        t.length === e.size && t.every((function(t) {
                            return e.has(t)
                        })) || g({
                            userId: n.id,
                            contentFilters: t
                        })
                    }
                }), [u]), (0, a.useEffect)((function() {
                    y && t((0, h.d)({
                        title: "Content Gating Settings Updated",
                        icon: L.Yj,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }), [y]);
                return a.createElement(a.Fragment, null, a.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), E && a.createElement(_.Z, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == v || null === (e = v.data) || void 0 === e ? void 0 : e.error.message), Object.entries(M.N).map((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                    return a.createElement(B, {
                        key: n
                    }, a.createElement(Y.Z, {
                        label: "Filter ".concat(r),
                        defaultChecked: c.has(n),
                        onChangeCallback: function() {
                            return e = n, void(c.has(e) ? s(new Set((0, $.Z)(c).filter((function(t) {
                                return t !== e
                            })))) : s(new Set(c).add(e)));
                            var e
                        }
                    }))
                })), a.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var G = n(4942),
                W = n(82414),
                K = n(91557),
                X = (0, a.createContext)(null);
            const Q = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, a.useState)(1),
                    o = (0, i.Z)(l, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, a.useState)(null),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    g = h[0],
                    w = h[1],
                    E = (0, a.useState)({}),
                    v = (0, i.Z)(E, 2),
                    y = v[0],
                    b = v[1],
                    x = (0, a.useState)({}),
                    Z = (0, i.Z)(x, 2),
                    k = Z[0],
                    N = Z[1],
                    C = function() {
                        s(1), p(null), w(!1), b({}), n()
                    };
                return g ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.$1, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: W.sq
                }), a.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), a.createElement("p", null, "We will look into it and email you for next possible steps."), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.zx, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: C
                }, "Done"))) : d ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.$1, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: W.sq
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
                    onClick: C
                }, "Done"))) : a.createElement(X.Provider, {
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
                        setFormSuccess: w,
                        ownerInfo: y,
                        setOwnerInfo: b,
                        claimInfo: k,
                        setClaimInfo: N,
                        resetForm: C
                    }
                }, a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

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
                        (0, G.Z)(e, t, n[t])
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
                ae = function(e) {
                    return e.filter((function(e) {
                        return ne.test(e)
                    })).map((function(e) {
                        var t;
                        return null === (t = e.match(ne)) || void 0 === t ? void 0 : t[0]
                    }))
                };
            const re = function() {
                var e, t, n, l, o = (0, T.lr)(),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = (c[1], (0, a.useState)("owner")),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    g = h[0],
                    w = h[1],
                    E = (0, a.useState)(""),
                    v = (0, i.Z)(E, 2),
                    y = v[0],
                    b = v[1],
                    x = (0, a.useContext)(X),
                    Z = x.previous,
                    k = x.currentStep,
                    N = x.claimInfo,
                    C = x.setClaimInfo,
                    S = x.ownerInfo,
                    O = x.setFormError,
                    P = x.setFormSuccess,
                    A = (null == g ? void 0 : g.owner) && (null == g ? void 0 : g.accurate) && (null == g ? void 0 : g.perjury) && (null == g ? void 0 : g.liability) && (null == g ? void 0 : g.abuse),
                    D = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && A && y.toLowerCase() === S.fullName.toLowerCase(),
                    I = (0, K.lw)(),
                    F = (0, i.Z)(I, 2),
                    R = F[0],
                    j = F[1],
                    z = j.isError,
                    U = j.error,
                    q = j.isLoading,
                    V = j.isSuccess,
                    $ = j.reset;
                (0, a.useEffect)((function() {
                    var e = s.get("dmcaTarget");
                    e && C(ee(ee({}, N), {}, {
                        contentIds: ae([e])
                    }))
                }), []), (0, a.useEffect)((function() {
                    var e;
                    z && ($(), O("Could Not Proccess Claim: ".concat(null == U || null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }), [z, U]), (0, a.useEffect)((function() {
                    V && ($(), P(!0))
                }), [V]);
                var L = function(e) {
                    w(ee(ee({}, g), {}, (0, G.Z)({}, e.target.id, e.target.checked)))
                };
                return 3 !== k ? null : a.createElement(a.Fragment, null, a.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", a.createElement(r.gx, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
                            description: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-content-ids",
                    className: "tw-mb-4"
                }, "The ID or URL of infringing content", a.createElement(r.Lj, {
                    className: "tw-pt-2",
                    value: null == N ? void 0 : N.contentIds,
                    validator: function(e) {
                        return ne.test(e)
                    },
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
                            contentIds: ae(e)
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
                            proof: e.target.value
                        }))
                    },
                    value: null == N ? void 0 : N.proof
                })), a.createElement("label", {
                    htmlFor: "claim-authority",
                    className: "tw-mb-4"
                }, "Authority to make complaint", a.createElement(r.Lt, {
                    className: "tw-pt-2",
                    id: "claim-authority",
                    trimToLength: !0,
                    allowMultiline: !0,
                    options: te,
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
                    value: null == N ? void 0 : N.copyrightOwnerName,
                    onChange: function(e) {
                        return C(ee(ee({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), a.createElement(le, {
                    className: "tw-mb-4"
                }, a.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), a.createElement(r.XZ, {
                    id: "owner",
                    checked: null == g ? void 0 : g.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: L
                }), a.createElement(r.XZ, {
                    id: "accurate",
                    checked: null == g ? void 0 : g.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: L
                }), a.createElement(r.XZ, {
                    id: "perjury",
                    checked: null == g ? void 0 : g.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: L
                }), a.createElement(r.XZ, {
                    id: "liability",
                    checked: null == g ? void 0 : g.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: L
                }), a.createElement(r.XZ, {
                    id: "abuse",
                    checked: null == g ? void 0 : g.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: L
                })), a.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", a.createElement(r.II, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: y.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == S || null === (l = S.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), A ? null : a.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, a.createElement(r.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: W.sq
                }), a.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.zx, {
                    className: "tw-mr-2",
                    onClick: Z,
                    containerStyles: oe,
                    neutral: !0
                }, "Back"), a.createElement(r.zx, {
                    className: "tw-ml-2",
                    disabled: !D || q,
                    containerStyles: oe,
                    onClick: function() {
                        return R({
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
                var e = (0, a.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useContext)(X),
                    c = o.resetForm,
                    s = o.next,
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
                    onClick: c,
                    neutral: !0
                }, "Cancel"), a.createElement(r.zx, {
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
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function de(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(n), !0).forEach((function(t) {
                        (0, G.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const pe = function() {
                var e = (0, a.useState)(!0),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, a.useContext)(X),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    g = m.setOwnerInfo;
                return (0, a.useEffect)((function() {
                    var e, t, n, a, r, l;
                    ue()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (a = h.mailingCity) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (r = h.mailingCountry) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }), [h]), 2 !== f ? null : a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? a.createElement(fe, null, a.createElement(r.$1, {
                    className: "tw-px-2",
                    icon: W.sq
                }), a.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), a.createElement(r.$1, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: ce.NB,
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), a.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", a.createElement(r.II, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
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
                        return g(de(de({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.zx, {
                    className: "tw-mr-2",
                    containerStyles: he,
                    onClick: p,
                    neutral: !0
                }, "Back"), a.createElement(r.zx, {
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
            const ge = function() {
                var e = (0, T.lr)(),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1];
                (0, a.useEffect)((function() {
                    var e = Object.fromEntries((0, $.Z)(n.entries()).filter((function(e) {
                        return "dmcaClaimForm" !== (0, i.Z)(e, 1)[0]
                    })));
                    s && (e.dmcaClaimForm = !0), l(e)
                }), [s]), (0, a.useEffect)((function() {
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
                    isVisible: s,
                    onClose: function() {
                        return u(!1)
                    }
                }, a.createElement(Q, {
                    closeModal: function() {
                        u(!1)
                    }
                }, a.createElement(ie, null), a.createElement(pe, null), a.createElement(re, null))))
            };
            var we = n(65578),
                Ee = n(84176),
                ve = n(22081),
                ye = n(92332),
                be = n(34424),
                xe = n(27484),
                Ze = n.n(xe),
                ke = n(21442),
                Ne = n(8860),
                Ce = n(98185),
                Se = n(5513),
                Oe = n(8698),
                Te = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                Pe = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                Ae = (0, Oe.P1)(Te, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                })),
                De = (0, Oe.P1)(Te, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                })),
                Ie = (0, Oe.P1)(Te, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                })),
                Fe = (0, Oe.P1)(Te, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                })),
                Re = (0, Oe.P1)(Pe, (function(e) {
                    return null !== e && e.length > 0
                })),
                je = (0, Oe.P1)(Re, Pe, (function(e, t) {
                    return e && t.reduce((function(e, t) {
                        return Ze()(t.updated_at) > Ze()(e.updated_at) ? t : e
                    }), {
                        updated_at: 0
                    })
                })),
                ze = (0, Oe.P1)(Pe, je, (function(e, t) {
                    return null !== e && t.updated_at
                })),
                Ue = (0, Oe.P1)(Pe, je, (function(e, t) {
                    return null !== e && t.displayName
                })),
                qe = (0, Oe.P1)(Pe, je, (function(e, t) {
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
                        c = (0, p.v9)(Fe),
                        s = (0, p.v9)(ze),
                        u = o || (0, p.v9)((function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return a.createElement(a.Fragment, null, t && a.createElement(_.Z, {
                        color: "info"
                    }, a.createElement(r.$1, {
                        icon: W.sq,
                        color: "teal"
                    }), " You may only change your display name once every 3 months, choose wisely! Once you change your name, you may never be able to get your original name back!"), !t && a.createElement(_.Z, {
                        color: "info",
                        "aria-label": "name warning"
                    }, a.createElement(r.$1, {
                        icon: Le.U$
                    }), " Your next allowed display name change is in ", 90 - Ze()().diff(s, "days"), " days"), null !== n && a.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, a.createElement(r.$1, {
                        icon: ve.lE
                    }), " ".concat(n)), i && null === n && a.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, a.createElement(r.$1, {
                        icon: $e.B1
                    }), " That display name is already in use."), c && null === n && a.createElement(_.Z, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, a.createElement(r.$1, {
                        icon: $e.B1
                    }), " That display name includes characters that cannot be used. Please try again."), u && a.createElement(_.Z, {
                        color: "success",
                        "aria-label": "name change success"
                    }, a.createElement(r.$1, {
                        icon: ve.lE
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
                return a.createElement("div", {
                    className: "center-panel"
                }, a.createElement("div", {
                    className: "mb-4"
                }, a.createElement("p", null, "Name change was not successful due to:", a.createElement("br", null), a.createElement("code", null, t), a.createElement("br", null), "If issues persist, please contact VRChat Support at", " ", a.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://help.vrchat.com"
                }, "help.vrchat.com"), "."), a.createElement(Z.Z, {
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
            const Ge = He;
            var We = (0, c.Z)("p", {
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
                        r = e.showLastDisplayNameChange;
                    return a.createElement(We, null, r && a.createElement(a.Fragment, null, "It has been ", n, " days since your last display name change.", a.createElement("br", null)), "• You may only change your display name once per 90 days.", a.createElement("br", null), t && a.createElement(a.Fragment, null, "• You can revert your last display name change.", a.createElement("br", null)))
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
                        u = (0, a.useState)(""),
                        d = (0, i.Z)(u, 2),
                        f = d[0],
                        g = d[1],
                        w = (0, a.useState)(""),
                        E = (0, i.Z)(w, 2),
                        v = E[0],
                        y = E[1],
                        b = (0, a.useState)(!0),
                        x = (0, i.Z)(b, 2),
                        k = x[0],
                        N = x[1],
                        C = (0, a.useState)(!1),
                        S = (0, i.Z)(C, 2),
                        O = S[0],
                        T = S[1];
                    (0, a.useEffect)((function() {
                        return N("" === v || f !== n)
                    }), [v, f]);
                    var P = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var a, r, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, Se.eu)({
                                            userId: c,
                                            displayName: n,
                                            currentPassword: v,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (a = null === (r = e.t0.response) || void 0 === r || null === (r = r.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), T(!1), l((0, h.d)({
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
                    return a.createElement("div", {
                        className: "center-panel"
                    }, a.createElement(Je.Z, {
                        className: "mb-4",
                        outline: !0
                    }, a.createElement(et.Z, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), a.createElement(tt.Z, null, a.createElement(We, null, "This will change your display name back to:", a.createElement("br", null), a.createElement(Ke, null, n), a.createElement("br", null), "And restart the 90-day timer.", a.createElement("br", null), "Type your previous display name into the field below to revert."), a.createElement("input", {
                        "aria-label": "enter revert name",
                        type: "text",
                        className: "form-control mt-2 mb-2",
                        placeholder: "Type ".concat(n, " to Confirm"),
                        onChange: function(e) {
                            return g(e.target.value)
                        },
                        value: f
                    }), a.createElement("input", {
                        className: "form-control mb-2",
                        id: "namePasswordVerify",
                        name: "namePasswordVerify",
                        "aria-label": "Please confirm current password",
                        onChange: function(e) {
                            return y(e.target.value)
                        },
                        placeholder: "Please confirm current password",
                        type: "password",
                        value: v
                    }), a.createElement(Z.Z, {
                        className: "me-2",
                        onClick: function() {
                            return T(!0)
                        },
                        disabled: k,
                        color: "primary"
                    }, "Ok"), a.createElement(Z.Z, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), a.createElement(r.sm, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: P,
                        cancelCallback: function() {
                            return T(!1)
                        },
                        isOpen: O
                    }))
                };
            nt.propTypes = {
                exitRevertCallback: Me().func.isRequired,
                previousDisplayName: Me().string
            };
            const at = nt;
            const rt = function() {
                var e, t, n = (0, p.I0)(),
                    c = (0, f.yi)(),
                    s = (0, i.Z)(c, 2),
                    u = s[0],
                    d = s[1],
                    h = d.isLoading,
                    g = d.isError,
                    w = d.error,
                    E = d.isSuccess,
                    v = (0, p.v9)(Ae),
                    y = (0, p.v9)(Ie),
                    k = (0, p.v9)(Te),
                    N = (0, p.v9)(Re),
                    C = (0, p.v9)(qe),
                    S = (0, p.v9)(Ve.y),
                    O = (0, p.v9)(ze),
                    T = (0, p.v9)(Ue),
                    P = (0, p.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    A = (0, a.useState)(!0),
                    D = (0, i.Z)(A, 2),
                    I = D[0],
                    F = D[1],
                    R = (0, a.useState)(null),
                    j = (0, i.Z)(R, 2),
                    z = j[0],
                    U = j[1],
                    q = (0, a.useState)(""),
                    V = (0, i.Z)(q, 2),
                    $ = V[0],
                    L = V[1],
                    M = (0, a.useState)(""),
                    Y = (0, i.Z)(M, 2),
                    B = Y[0],
                    H = Y[1],
                    G = (0, a.useState)(null),
                    W = (0, i.Z)(G, 2),
                    K = W[0],
                    X = W[1],
                    Q = (0, a.useState)(""),
                    J = (0, i.Z)(Q, 2),
                    ee = J[0],
                    te = J[1],
                    ne = a.useState(!1),
                    ae = (0, i.Z)(ne, 2),
                    re = ae[0],
                    le = ae[1],
                    oe = (0, a.useState)(!1),
                    ie = (0, i.Z)(oe, 2),
                    ce = ie[0],
                    se = ie[1],
                    ue = (0, l.Nr)(ee),
                    me = v && y && "" !== ue;
                if ((0, a.useEffect)((function() {
                        S ? F(!0) : N && Ze()().diff(O, "days") < 90 ? F(!1) : F(!0)
                    }), [O]), (0, a.useEffect)((function() {
                        "" !== ue ? ue.length < 4 ? X("That name is too short.") : ue.length > 15 ? X("That name is too long.") : (X(null), L(""), n((0, Se.Zm)({
                            displayName: ue,
                            userId: P.id
                        }))) : X(null)
                    }), [ue]), (0, a.useEffect)((function() {
                        return "" === $ ? (le(!1), void U(null)) : $ !== ee ? (le(!1), void U("Names don't match")) : (le(!0), void U(null))
                    }), [$]), g) return a.createElement(Ge, {
                    displayNameError: null !== (e = null === (t = w.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (ce) return a.createElement(at, {
                    previousDisplayName: T,
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
                    pe = !I && !C;
                return a.createElement(Ce.Z, {
                    loading: h
                }, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(ke.Z, null, a.createElement(Qe, {
                    canRevertDisplayName: pe,
                    showLastDisplayNameChange: !I,
                    numberOfDays: Ze()().diff(O, "days")
                }), a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: be.Qj,
                    size: "2x"
                })), a.createElement(x.Z, {
                    xs: "10"
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !I,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return te(e.target.value)
                    },
                    placeholder: P.displayName,
                    type: "text",
                    value: ee
                }), a.createElement(Be, {
                    canChangeDisplayName: I,
                    displayName: P.displayName,
                    displayNameAvailable: v,
                    displayNameValue: ee,
                    isRevert: !1,
                    latestChangedDate: O,
                    displayNameChecking: k,
                    validationError: K,
                    displayNameChanged: E
                }))), a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, k && a.createElement(r.$1, {
                    icon: ye.LM,
                    spin: !0,
                    size: "2x"
                }), "" !== ee && !k && a.createElement(Ne.Z, {
                    "aria-label": v && y ? "Name is available" : "Name is unavailable",
                    ok: v && y
                }))), me && !E && a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
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
                }), null !== z && a.createElement(_.Z, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, a.createElement(r.$1, {
                    icon: ve.lE
                }), " ".concat(z)))), a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== $ && a.createElement(Ne.Z, {
                    "aria-label": null !== z ? z : "Confirmation name matches",
                    ok: null === z
                }))), re && !E && a.createElement(b.Z, {
                    className: "mt-2"
                }, a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: Ee.DD,
                    size: "2x"
                })), a.createElement(x.Z, {
                    xs: "10"
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
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
                })))), a.createElement(b.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, pe && a.createElement(x.Z, {
                    xs: "6"
                }, a.createElement(Z.Z, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return se(!0)
                    }
                }, "Revert Display Name Change")), a.createElement(x.Z, {
                    xs: "6"
                }, a.createElement(Z.Z, {
                    disabled: !I || !0 === k || null !== z || "" === $ || "" === B || null !== K || "" === ee,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: de
                }, "Change Display Name"))))))
            };
            var lt = n(609),
                ot = n(82470);
            const it = function(e) {
                var t, n, l = e.user,
                    c = (l || {}).usesGeneratedPassword,
                    s = a.useState(""),
                    u = (0, i.Z)(s, 2),
                    d = u[0],
                    p = u[1],
                    h = a.useState(""),
                    g = (0, i.Z)(h, 2),
                    w = g[0],
                    E = g[1],
                    v = a.useState(""),
                    y = (0, i.Z)(v, 2),
                    Z = y[0],
                    k = y[1],
                    N = a.useState(!1),
                    C = (0, i.Z)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, f.$h)(),
                    P = (0, i.Z)(T, 2),
                    A = P[0],
                    D = P[1],
                    I = D.isLoading,
                    F = D.isSuccess,
                    R = D.isError,
                    j = D.error,
                    z = function(e) {
                        var t = e.newPassword;
                        return t && 0 !== t.length ? t.length < 8 ? "That password is too short" : (0, ot.w)(t) ? "Please try a more secure password" : null : null
                    }({
                        newPassword: w
                    }),
                    U = (n = {
                        newPassword: w,
                        confirmationNewPassword: Z
                    }).newPassword !== n.confirmationNewPassword ? "Passwords don't match" : null,
                    q = !z,
                    V = !U && Z.length > 0,
                    $ = w.length > 0 && !z,
                    L = $ && Z.length > 0 && !U && !c,
                    M = !z && !U && w === Z && ("" !== d || c),
                    Y = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), M) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, n = {
                                            userId: l.id,
                                            password: w
                                        }, c || (n.currentPassword = d), e.next = 8, A(n).unwrap();
                                    case 8:
                                        p(""), E(""), k(""), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(3), console.error("Failed to change password:", e.t0);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 13]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    B = function(e) {
                        E(e.target.value)
                    },
                    H = function(e) {
                        k(e.target.value)
                    },
                    G = function(e) {
                        p(e.target.value)
                    };
                return a.useEffect((function() {
                    S || "" === d && "" === w && "" === Z || O(!0)
                }), [d, w, Z]), a.createElement(Ce.Z, {
                    loading: I
                }, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement("form", {
                    onSubmit: Y
                }, R && a.createElement(_.Z, {
                    color: "warning"
                }, a.createElement(r.$1, {
                    icon: ve.lE
                }), " An error occurred: ", (null == j || null === (t = j.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown error"), a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: lt.by,
                    size: "2x"
                })), a.createElement(x.Z, {
                    xs: "10"
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "newPassword",
                    name: "newPassword",
                    className: "form-control",
                    placeholder: "Please enter new password",
                    onChange: B,
                    onKeyUp: B
                }), z && a.createElement(_.Z, {
                    color: "warning"
                }, a.createElement(r.$1, {
                    icon: ve.lE
                }), " ", z), F && a.createElement(_.Z, {
                    color: "success"
                }, a.createElement(r.$1, {
                    icon: ve.lE
                }), " Your password has been changed!"))), a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, a.createElement(Ne.Z, {
                    ok: S ? q : null
                }))), $ && a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "confirmNewPassword",
                    name: "confirmNewPassword",
                    className: "form-control",
                    placeholder: "Please confirm new password",
                    onChange: H,
                    onKeyUp: H
                }), U && a.createElement(_.Z, {
                    color: "warning"
                }, a.createElement(r.$1, {
                    icon: ve.lE
                }), " ", U))), a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, a.createElement(Ne.Z, {
                    ok: V
                }))), L && a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.$1, {
                    icon: Ee.DD,
                    size: "2x"
                })), a.createElement(x.Z, {
                    xs: "10"
                }, a.createElement(b.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "passwordPasswordVerify",
                    name: "passwordPasswordVerify",
                    className: "form-control",
                    placeholder: "Please confirm current password",
                    onChange: G,
                    onKeyUp: G
                })))), a.createElement(b.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, a.createElement(x.Z, {
                    xs: "4"
                }, a.createElement("button", {
                    disabled: !M,
                    className: "btn btn-primary w-100",
                    id: "password-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    type: "submit"
                }, "Change Password"))))))
            };
            var ct = n(42501),
                st = n(67714);
            const ut = function() {
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
                    g = !(u || d),
                    w = (0, f.IO)(),
                    E = (0, i.Z)(w, 2),
                    v = E[0],
                    y = E[1],
                    b = y.isLoading,
                    x = y.isError,
                    Z = y.error,
                    k = y.reset,
                    N = a.useState(!1),
                    S = (0, i.Z)(N, 2),
                    O = S[0],
                    T = S[1],
                    P = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, v({
                                            userId: l.id
                                        }).unwrap();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return");
                                    case 8:
                                        T(!1), n((0, h.d)({
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
                    A = g ? "This action will reset your user data in all worlds you've visited except any world you're currently in. To reset that world's data, please exit it first, then go to \"Reset User Data\" in the world's details." : "This action will reset your user data in all worlds you've visited. Rejoin worlds for changes to take effect.";
                return a.createElement(a.Fragment, null, a.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), a.createElement(r.zx, {
                    type: "button",
                    onClick: function() {
                        T(!0)
                    },
                    danger: !0
                }, a.createElement(r.$1, {
                    icon: ct.faUserXmark
                }), " Reset All User Data"), a.createElement(r.sm, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: P,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        T(!1), k()
                    },
                    isOpen: O,
                    isLoading: b
                }, a.createElement("p", null, A), a.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), x && a.createElement(r.qX, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == Z || null === (t = Z.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var mt = n(21707);
            var dt = (0, c.Z)("div", {
                target: "e1a02i090"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const pt = function(e) {
                var t, n = e.user,
                    l = (n || {}).hasSharedConnectionsOptOut,
                    o = (0, a.useState)(null),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, f.PY)(),
                    d = (0, i.Z)(m, 2),
                    p = d[0],
                    h = d[1],
                    g = h.isError,
                    w = h.error,
                    E = function() {
                        try {
                            window.OneTrust.ToggleInfoDisplay()
                        } catch (e) {
                            u("OneTrust not loaded. Disable your ad blocker and refresh the page to try again.")
                        }
                    };
                (0, a.useEffect)((function() {
                    return window.addEventListener("OneTrustGroupsUpdated", E),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", E)
                        }
                }), []);
                var v = g ? (null == w || null === (t = w.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "An error occurred while updating your shared connections setting." : s;
                return a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), v ? a.createElement(_.Z, {
                    className: "warning"
                }, a.createElement(r.$1, {
                    icon: mt.e7
                }), " ", s) : a.createElement(b.Z, null, a.createElement(x.Z, {
                    xs: "10"
                }, a.createElement(Z.Z, {
                    type: "button",
                    color: "primary",
                    onClick: E
                }, "Change Privacy Settings"))), a.createElement(dt, {
                    className: "mt-3"
                }, a.createElement(Y.Z, {
                    label: "Show Mutual Friend Connections",
                    defaultChecked: !l,
                    onChangeCallback: function() {
                        return p({
                            hasSharedConnectionsOptOut: !l,
                            userId: n.id
                        })
                    }
                })))
            };
            var ft = n(15671),
                ht = n(43144),
                gt = n(97326),
                wt = n(60136),
                Et = n(82963),
                vt = n(61120),
                yt = n(85020),
                bt = n(65394),
                xt = n(2909),
                Zt = n(32966),
                kt = n(50906),
                Nt = n(45432),
                Ct = n(74855),
                St = n(53637),
                Ot = n(12611),
                Tt = n(37549),
                Pt = n(9669),
                At = n.n(Pt);

            function Dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function It(e) {
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
                    var n, a = (0, vt.Z)(e);
                    if (t) {
                        var r = (0, vt.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, Et.Z)(this, n)
                }
            }
            var Ft = "https://docs.vrchat.com/docs/setup-2fa",
                Rt = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                jt = "otpDownload",
                zt = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                Ut = function(e) {
                    (0, wt.Z)(n, e);
                    var t = It(n);

                    function n(e) {
                        var r;
                        return (0, ft.Z)(this, n), r = t.call(this, e), (0, G.Z)((0, gt.Z)(r), "getOneTimePasswords", (0, o.Z)(m().mark((function e() {
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
                                            payload: At().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
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
                        })))), (0, G.Z)((0, gt.Z)(r), "disable", function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                var n, a;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, r.props.dispatch({
                                                type: "TWOFACTORAUTH_REMOVE",
                                                payload: At().delete(window.apiUrl("/api/1/auth/twofactorauth"))
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
                                t % 2 ? Dt(Object(n), !0).forEach((function(t) {
                                    (0, G.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, zt), r.ref = a.createRef(), r.enable = r.enable.bind((0, gt.Z)(r)), r.renderSetup = r.renderSetup.bind((0, gt.Z)(r)), r.renderStatus = r.renderStatus.bind((0, gt.Z)(r)), r.handleChangeVerifyCode = r.handleChangeVerifyCode.bind((0, gt.Z)(r)), r.handleVerifyPendingSecret = r.handleVerifyPendingSecret.bind((0, gt.Z)(r)), r.isSettingUp = r.isSettingUp.bind((0, gt.Z)(r)), r.cancelSecret = r.cancelSecret.bind((0, gt.Z)(r)), r.showTextKey = r.showTextKey.bind((0, gt.Z)(r)), r.goToStep0 = r.goToStep0.bind((0, gt.Z)(r)), r.goToStep1 = r.goToStep1.bind((0, gt.Z)(r)), r.goToStep2 = r.goToStep2.bind((0, gt.Z)(r)), r.toggleOneTimePasswordsShown = r.toggleOneTimePasswordsShown.bind((0, gt.Z)(r)), r.hasOneTimePasswords = r.hasOneTimePasswords.bind((0, gt.Z)(r)), r.getOneTimePasswordHref = r.getOneTimePasswordHref.bind((0, gt.Z)(r)), r.downloadOneTimePasswords = r.downloadOneTimePasswords.bind((0, gt.Z)(r)), r.triggerOtpDownloadLink = r.triggerOtpDownloadLink.bind((0, gt.Z)(r)), r
                    }
                    return (0, ht.Z)(n, [{
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
                                payload: At().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
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
                                return "".concat(Rt(e.code), "\n")
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
                            e.preventDefault(), this.setState(zt), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: At().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(zt), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: At().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
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
                            document.getElementById(jt).click(), this.setState({
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
                                            icon: Nt.a3,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", a.createElement("a", {
                                            href: Ft,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), a.createElement("p", null, a.createElement(Ot.Z, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), a.createElement("div", null, a.createElement("p", null, a.createElement(r.$1, {
                                            icon: mt.e7,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), a.createElement("p", null, "We", " ", a.createElement("strong", null, a.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && a.createElement(_.Z, {
                                            color: "warning"
                                        }, a.createElement(r.$1, {
                                            icon: mt.e7
                                        }), " Something went wrong downloading recovery codes."), a.createElement("div", null, a.createElement("p", null, a.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, a.createElement(Ot.Z, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), a.createElement("span", null, a.createElement(Ot.Z, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), a.createElement("a", {
                                            id: jt,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return a.createElement("div", null, a.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", a.createElement("a", {
                                        href: Ft,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), a.createElement("p", null, a.createElement(Ot.Z, {
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
                                }, Rt(e.code)))
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
                            return a.createElement(Ce.Z, {
                                loading: o
                            }, a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement("h4", null, "Setup")), a.createElement(x.Z, {
                                className: "text-end"
                            }, a.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: Ft,
                                rel: "noreferrer"
                            }, "Help"), a.createElement(Z.Z, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, a.createElement(r.$1, {
                                icon: ce.NB
                            }), " Cancel"))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement("hr", null))), a.createElement(b.Z, null, a.createElement(St.Z, {
                                hidden: 0 !== this.state.step
                            }, a.createElement(b.Z, null, a.createElement(x.Z, {
                                classname: "tw-flex"
                            }, a.createElement(b.Z, null, a.createElement("div", {
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
                                icon: kt.eF,
                                size: "4x",
                                className: "tw-mr-1"
                            }), a.createElement(r.$1, {
                                icon: Zt.D_,
                                size: "4x"
                            }))))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement("hr", null))), a.createElement(b.Z, null, a.createElement(x.Z, {
                                className: "text-end"
                            }, a.createElement(Z.Z, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", a.createElement(r.$1, {
                                icon: bt._t
                            }))))), a.createElement(St.Z, {
                                hidden: 1 !== this.state.step
                            }, a.createElement(b.Z, null, a.createElement(x.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), a.createElement("p", null, "If you can't scan the code,", " ", a.createElement(Vt, {
                                type: "button",
                                onClick: this.showTextKey
                            }, "enter the key manually"), "."), a.createElement("div", {
                                hidden: !this.state.isTextKeyShown
                            }, a.createElement("p", null, a.createElement("textarea", {
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
                            }), a.createElement(Ct.CopyToClipboard, {
                                text: c
                            }, a.createElement(Z.Z, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, a.createElement(r.$1, {
                                icon: xt.kZ
                            }), " Copy"))))), a.createElement(x.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("p", null, a.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(c)
                            })))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement("hr", null))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement(Z.Z, {
                                onClick: this.goToStep0
                            }, a.createElement(r.$1, {
                                icon: yt.A3
                            }), " Previous")), a.createElement(x.Z, {
                                className: "text-end"
                            }, a.createElement(Z.Z, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", a.createElement(r.$1, {
                                icon: bt._t
                            }))))), a.createElement(St.Z, {
                                hidden: 2 !== this.state.step
                            }, a.createElement(b.Z, null, a.createElement(x.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), a.createElement(x.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("div", null, i && a.createElement(_.Z, {
                                color: "warning"
                            }, a.createElement(r.$1, {
                                icon: mt.e7
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
                            }), a.createElement(Ot.Z, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement("hr", null))), a.createElement(b.Z, null, a.createElement(x.Z, null, a.createElement(Z.Z, {
                                onClick: this.goToStep1
                            }, a.createElement(r.$1, {
                                icon: yt.A3
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
            const qt = (0, Tt.Z)((0, p.$j)((function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            }))(Ut));
            var Vt = (0, c.Z)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const $t = function() {
                var e = (0, l.Tu)().user;
                return a.createElement("div", null, a.createElement(r.$4, null, "Account Settings"), a.createElement("h2", null, "Account Settings"), a.createElement(r.oI, null, a.createElement("h4", null, "Change Display Name")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(rt, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Change Email")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(we.Z, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Change Password")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(it, {
                    user: e
                })), a.createElement(r.oI, null, a.createElement("h4", null, "Two-factor authentication")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(qt, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Account Linking")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(D, {
                    user: e
                })), a.createElement(r.oI, null, a.createElement("h4", null, "Privacy")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(pt, {
                    user: e
                })), a.createElement(r.oI, null, a.createElement("h4", null, "Age Verification")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(V, null)), a.createElement(r.oI, null, a.createElement("h4", null, "Copyright")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(ge, null)), !(null != e && e.hideContentFilterSettings) && a.createElement(a.Fragment, null, a.createElement(r.oI, null, a.createElement("h4", null, "Content Gating")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(H, null))), a.createElement(r.oI, null, a.createElement("h4", null, "User Data")), a.createElement(r.Ao, {
                    className: "mb-2"
                }, a.createElement(ut, null)), a.createElement(r.l8, {
                    className: "mb-2"
                }, a.createElement(r.oI, null, a.createElement("h4", null, "Danger Zone")), a.createElement(r.Ao, null, a.createElement(g, null))))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var a = n(54546),
                r = n(84176),
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
                g = n(83868),
                w = n.n(g),
                E = n(95168),
                v = n(22202),
                y = n(62437),
                b = n(96985),
                x = n(8860),
                Z = n(18461);
            const k = function() {
                var e = (0, v.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, a.Z)(t, 2),
                    g = n[0],
                    k = n[1],
                    N = (0, m.useState)(""),
                    C = (0, a.Z)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, m.useState)(""),
                    P = (0, a.Z)(T, 2),
                    A = P[0],
                    D = P[1],
                    I = (0, E.Nr)(g),
                    F = (0, y.X6)(),
                    R = (0, a.Z)(F, 2),
                    j = R[0],
                    z = R[1],
                    U = z.isFetching,
                    q = z.isError,
                    V = z.isSuccess,
                    $ = z.error,
                    L = z.originalArgs,
                    _ = (0, y.n_)(),
                    M = (0, a.Z)(_, 2),
                    Y = M[0],
                    B = M[1],
                    H = B.isLoading,
                    G = B.isError,
                    W = B.error,
                    K = (0, v.Fe)(),
                    X = (0, a.Z)(K, 2),
                    Q = X[0],
                    J = X[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    ae = J.isSuccess,
                    re = (0, y.SO)({
                        email: I,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === I || !1 === w()(I)
                    }),
                    le = re.data,
                    oe = re.isFetching,
                    ie = re.isSuccess,
                    ce = re.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    O(""), D("")
                }), [g]);
                var ue = (0, m.useMemo)((function() {
                        return ie && !1 === le.userExists && w()(I) && "" !== I
                    }), [le, I]),
                    me = (0, m.useMemo)((function() {
                        return "" !== S && S === I
                    }), [S, I]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === w()(I) && "" !== I) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == ce ? void 0 : ce.email) === I) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (G) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", W, ".");
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
                        return ae ? m.createElement(d.Z, {
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
                    }), [ae, te, q, V, le, ie, S, I, e, G]),
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
                    value: g
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
                        return O(e.target.value)
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
                lw: () => s,
                oR: () => c
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
                c = i.useGetRestrictedContentQuery,
                s = i.useRequestContentRestrictionMutation,
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
        },
        40219: (e, t, n) => {
            n.d(t, {
                y: () => o
            });
            var a = n(15861),
                r = n(64687),
                l = n.n(r),
                o = function() {
                    var e = (0, a.Z)(l().mark((function e() {
                        var t, n, a, r, o, i, c, s, u, m, d = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = (d.length > 0 && void 0 !== d[0] ? d[0] : {}).redirectTo, n = void 0 === t ? "/home/login" : t, "1366854478250381462", a = ["identify", "email"], r = window.location.origin + window.location.pathname, o = r.split("/home/"), r = "".concat(o[0], "/home/discord/auth"), i = {
                                        redirectUri: r,
                                        isMobileRequest: !1,
                                        redirectTo: n
                                    }, c = JSON.stringify(i), s = btoa(c), u = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: i.redirectUri,
                                        response_type: "code",
                                        scope: a.join(" "),
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
                y: () => a
            });
            var a = function(e) {
                if (null != e && e.requiresTwoFactorAuth) {
                    var t, n, a = "/home/stepupauth";
                    return "emailOtp" === (null === (t = e.requiresTwoFactorAuth) || void 0 === t ? void 0 : t[0]) && (a = "/home/emailstepupauth"), 0 === (null === (n = e.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) && e.ticket && (a = "/home/verify-password"), a
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=1636d5a05b2f733124c294984e3e7d4986fdfe7e5a3a73d080c5b85da827f5d6.js.map