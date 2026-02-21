"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7585], {
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
        3306: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Mt
            });
            var r = n(67294),
                a = n(96985),
                l = n(83807),
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
                    E = (0, l.Tu)().user,
                    y = r.useState(!1),
                    b = (0, i.Z)(y, 2),
                    x = b[0],
                    k = b[1],
                    Z = r.useState(!1),
                    N = (0, i.Z)(Z, 2),
                    C = N[0],
                    S = N[1],
                    O = function() {
                        k(!1), S(!1)
                    },
                    T = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var n, r, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(!1), S(!1), e.next = 4, u({
                                            userId: E.id
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
                        k(!0)
                    },
                    danger: !0
                }, "Delete Account"), r.createElement(a.sm, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        k(!1), S(!0)
                    },
                    cancelCallback: O,
                    isOpen: x
                }), r.createElement(a.sm, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: T,
                    cancelCallback: O,
                    isOpen: C
                }, r.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), r.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), r.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), g && r.createElement(a.u_, {
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
                }, r.createElement(w, null, r.createElement(v, null, "Your account is queued for deletion and will be deleted in 14 days. If you log into the application or the website, the deletion will be cancelled. You will now be logged out of the website and application."))))
            };
            var w = (0, c.Z)(a.JX, {
                    target: "e1c8z0io1"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                v = (0, c.Z)("p", {
                    target: "e1c8z0io0"
                })({
                    name: "1tmloek",
                    styles: "text-align:center;margin-right:100px;margin-left:100px"
                }),
                E = n(27879),
                y = n(75386),
                b = n(35773),
                x = n(95305),
                k = n(34698),
                Z = n(69699),
                N = n(60766),
                C = n(98538),
                S = n(22202),
                O = n(40219),
                T = n(19517),
                P = n(57672),
                A = n(79655),
                I = "link_discord",
                D = "unlink_discord",
                F = "link_google",
                R = "unlink_google";
            const j = function(e) {
                var t = e.user || {},
                    n = t.discordId,
                    l = t.googleId,
                    c = t.displayName,
                    s = t.id,
                    u = (0, d.TH)().state,
                    f = (0, r.useState)(null),
                    g = (0, i.Z)(f, 2),
                    w = g[0],
                    v = g[1],
                    j = (0, r.useState)(null),
                    z = (0, i.Z)(j, 2),
                    U = z[0],
                    L = z[1],
                    q = (0, r.useState)(null),
                    V = (0, i.Z)(q, 2),
                    _ = V[0],
                    $ = V[1],
                    G = (0, d.s0)(),
                    M = (0, p.I0)(),
                    Y = (0, A.lr)(),
                    B = (0, i.Z)(Y, 2),
                    H = B[0],
                    W = (B[1], (0, S.fb)()),
                    K = (0, i.Z)(W, 2),
                    X = K[0],
                    Q = K[1].isLoading,
                    J = (0, S.hL)(),
                    ee = (0, i.Z)(J, 2),
                    te = ee[0],
                    ne = ee[1].isLoading,
                    re = (0, S.Ep)(),
                    ae = (0, i.Z)(re, 2),
                    le = ae[0],
                    oe = ae[1].isLoading,
                    ie = (0, S.w5)(),
                    ce = (0, i.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1].isLoading,
                    me = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, r, a, l, o, i, c, s = arguments;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = s.length > 0 && void 0 !== s[0] ? s[0] : U) && !n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, te({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        v(null), L(null), M((0, h.d)({
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
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.gw.DISCORD
                                            }
                                        }, e.abrupt("return", G(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), v(null), L(null), e.abrupt("return", M((0, h.d)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== a ? a : "Discord Linking Failed",
                                            icon: E.IL,
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
                    }(),
                    de = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n, r, a, o, i, c, s = arguments;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = s.length > 0 && void 0 !== s[0] ? s[0] : _) && !l) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, le({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        v(null), $(null), M((0, h.d)({
                                            title: "Link Google Account",
                                            icon: y.nN,
                                            message: "Successfully linked Google account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 22;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(3), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || !n.requiresTwoFactorAuth) {
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
                                                continueGoogleIdToken: t,
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.gw.GOOGLE
                                            }
                                        }, e.abrupt("return", G(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Google account:", e.t0), v(null), $(null), e.abrupt("return", M((0, h.d)({
                                            title: "Failure",
                                            message: null !== (r = null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Google Linking Failed",
                                            icon: E.IL,
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
                    }(),
                    pe = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, X().unwrap();
                                    case 3:
                                        v(null), M((0, h.d)({
                                            title: "Unlink Discord Account",
                                            icon: y.nN,
                                            message: "Successfully unlinked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Discord account:", e.t0), e.abrupt("return", M((0, h.d)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Discord Unlinking Failed",
                                            icon: E.IL,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 11:
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
                    fe = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, se().unwrap();
                                    case 3:
                                        v(null), M((0, h.d)({
                                            title: "Unlink Google Account",
                                            icon: y.nN,
                                            message: "Successfully unlinked Google account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Google account:", e.t0), e.abrupt("return", M((0, h.d)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Google Unlinking Failed",
                                            icon: E.IL,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 11:
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
                    he = function() {
                        ge || (v(null), L(null))
                    };
                (0, r.useEffect)((function() {
                    (0, o.Z)(m().mark((function e() {
                        var t;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = null == u ? void 0 : u.discordToken) && !n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    v(I), L(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, r.useEffect)((function() {
                    (null == u ? void 0 : u.selectedAction) === I && null != u && u.continueDiscordAccessToken && me(u.continueDiscordAccessToken), (null == u ? void 0 : u.selectedAction) === F && null != u && u.continueGoogleIdToken && de(u.continueGoogleIdToken)
                }), []), (0, r.useEffect)((function() {
                    var e = H.get("prompt"),
                        t = H.get("requestingUserId");
                    "linkDiscordAccount" === e && t && t === s && !n && (0, O.y)({
                        redirectTo: "/home/profile"
                    })
                }), []), (0, r.useEffect)((function() {
                    var e = H.get("prompt"),
                        t = H.get("requestingUserId");
                    "linkGoogleAccount" === e && t && t === s && !l && (0, T.u)({
                        redirectTo: "/home/profile"
                    })
                }), []), (0, r.useEffect)((function() {
                    (0, o.Z)(m().mark((function e() {
                        var t, n, r, a;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = window.location.hash.substring(1), n = new URLSearchParams(t), r = n.get("id_token"), !(a = n.get("error"))) {
                                        e.next = 8;
                                        break
                                    }
                                    return history.replaceState(null, "", window.location.pathname), console.error("Google Authentication Error:", a), e.abrupt("return", M((0, h.d)({
                                        title: "Failure",
                                        message: "Google Authentication Failed",
                                        icon: E.IL,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 8:
                                    r && (history.replaceState(null, "", window.location.pathname), v(F), $(r));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, r.useEffect)((function() {
                    w === I && U && n && (v(null), L(null))
                }), [ne, Q, n, U]), (0, r.useEffect)((function() {
                    w === F && _ && l && (v(null), $(null))
                }), [oe, ue, l, _]);
                var ge = ne || Q || oe || ue;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "12",
                    className: "mx-0 mb-2"
                }, "Manage your linked accounts.")), r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "12",
                    className: "mx-0 mb-2 tw-flex tw-gap-2"
                }, n && r.createElement(k.Z, {
                    className: "tw-mr-2",
                    disabled: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return v(D)
                    }
                }, "Unlink your Discord Account"), !n && r.createElement(k.Z, {
                    className: "tw-mr-2",
                    isLoading: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return (0, O.y)({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Link your Discord Account"), l && r.createElement(k.Z, {
                    disabled: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return v(R)
                    }
                }, "Unlink your Google Account"), !l && r.createElement(k.Z, {
                    isLoading: ge,
                    type: "button",
                    color: "primary",
                    onClick: T.u
                }, "Link your Google Account")))), r.createElement(Z.Z, {
                    isOpen: w === D,
                    toggle: he,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Discord account from this VRChat account? You can link it again anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, c)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: pe
                }, "Unlink Account"), r.createElement(a.zx, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(Z.Z, {
                    isOpen: null !== U && w === I,
                    toggle: he,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, c)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return me(U)
                    }
                }, "Link Account"), r.createElement(a.zx, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(Z.Z, {
                    isOpen: w === R,
                    toggle: he,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Google Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Google account from this VRChat account? You can link it again anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, c)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: fe
                }, "Unlink Account"), r.createElement(a.zx, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(Z.Z, {
                    isOpen: null !== _ && w === F,
                    toggle: he,
                    centered: !0
                }, r.createElement(N.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Google Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Google account to this VRChat account? You can unlink it anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, c)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return de(_)
                    }
                }, "Link Account"), r.createElement(a.zx, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var z = n(56646),
                U = n(6811),
                L = n(68412),
                q = n(79442),
                V = n(60006),
                _ = n(86646),
                $ = n(43862);
            const G = function() {
                var e = (0, S.XC)(),
                    t = e.data,
                    n = e.isError,
                    a = e.isFetching,
                    l = (0, S.q7)(),
                    o = l.data,
                    i = void 0 === o ? [] : o,
                    c = l.isError,
                    s = l.isFetching,
                    u = i.includes("permission-age-verification"),
                    m = (0, q.HI)(),
                    d = m.data,
                    p = m.isError,
                    f = m.isFetching,
                    h = n || c || p;
                if (a || s || f) return r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement($.Z, {
                    size: "5x"
                }));
                if (h) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(_.Z, {
                    icon: L.faCircleQuestion
                }), " Unable to determine your Age Verification status."), r.createElement(V.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!u) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(_.Z, {
                    icon: z.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), r.createElement(V.Qj, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                var g = t.isAdult;
                switch (d.status) {
                    case "verified":
                    case "approved":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(_.Z, {
                            icon: U.f8
                        }), " You have successfully verified your age.", g && " You may choose whether to display it on your profile."), g && r.createElement(V.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(_.Z, {
                            icon: z.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), r.createElement(V.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement(_.Z, {
                            icon: z.faCircleInfo
                        }), " You can check your Age Verification status here."), r.createElement(V.Qj, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Check Status"))
                }
            };
            var M = n(42138),
                Y = n(3820),
                B = n(23138),
                H = n(3620),
                W = n(29104);
            var K = (0, c.Z)("div", {
                target: "ezmvepu0"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const X = function() {
                var e, t = (0, p.I0)(),
                    n = (0, l.Tu)().user,
                    a = (0, r.useState)(new Set(n.contentFilters)),
                    o = (0, i.Z)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.Nr)(c, 1400),
                    m = (0, f.Bb)(),
                    d = (0, i.Z)(m, 2),
                    g = d[0],
                    w = d[1],
                    v = w.isError,
                    E = w.error,
                    y = w.isSuccess;
                (0, r.useEffect)((function() {
                    if (null != n && n.id && u) {
                        var e = new Set(n.contentFilters),
                            t = (0, M.Z)(u);
                        t.length === e.size && t.every((function(t) {
                            return e.has(t)
                        })) || g({
                            userId: n.id,
                            contentFilters: t
                        })
                    }
                }), [u]), (0, r.useEffect)((function() {
                    y && t((0, h.d)({
                        title: "Content Gating Settings Updated",
                        icon: Y.Yj,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }), [y]);
                return r.createElement(r.Fragment, null, r.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), v && r.createElement(B.Z, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == E || null === (e = E.data) || void 0 === e ? void 0 : e.error.message), Object.entries(H.N).map((function(e) {
                    var t = (0, i.Z)(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.createElement(K, {
                        key: n
                    }, r.createElement(W.Z, {
                        label: "Filter ".concat(a),
                        defaultChecked: c.has(n),
                        onChangeCallback: function() {
                            return e = n, void(c.has(e) ? s(new Set((0, M.Z)(c).filter((function(t) {
                                return t !== e
                            })))) : s(new Set(c).add(e)));
                            var e
                        }
                    }))
                })), r.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var Q = n(4942),
                J = n(82414),
                ee = n(91557),
                te = (0, r.createContext)(null);
            const ne = function(e) {
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
                    g = h[0],
                    w = h[1],
                    v = (0, r.useState)({}),
                    E = (0, i.Z)(v, 2),
                    y = E[0],
                    b = E[1],
                    x = (0, r.useState)({}),
                    k = (0, i.Z)(x, 2),
                    Z = k[0],
                    N = k[1],
                    C = function() {
                        s(1), p(null), w(!1), b({}), n()
                    };
                return g ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.$1, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: J.sq
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
                    icon: J.sq
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
                }, "Done"))) : r.createElement(te.Provider, {
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
                        claimInfo: Z,
                        setClaimInfo: N,
                        resetForm: C
                    }
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(n), !0).forEach((function(t) {
                        (0, Q.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var le = [{
                    label: "I am the owner of the copyright",
                    value: "owner"
                }, {
                    label: "I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed",
                    value: "authorized"
                }],
                oe = new RegExp(/(?:avtr|wrld)_[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}/i),
                ie = function(e) {
                    return e.filter((function(e) {
                        return oe.test(e)
                    })).map((function(e) {
                        var t;
                        return null === (t = e.match(oe)) || void 0 === t ? void 0 : t[0]
                    }))
                };
            const ce = function() {
                var e, t, n, l, o = (0, A.lr)(),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = (c[1], (0, r.useState)("owner")),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)(!1),
                    h = (0, i.Z)(f, 2),
                    g = h[0],
                    w = h[1],
                    v = (0, r.useState)(""),
                    E = (0, i.Z)(v, 2),
                    y = E[0],
                    b = E[1],
                    x = (0, r.useContext)(te),
                    k = x.previous,
                    Z = x.currentStep,
                    N = x.claimInfo,
                    C = x.setClaimInfo,
                    S = x.ownerInfo,
                    O = x.setFormError,
                    T = x.setFormSuccess,
                    P = (null == g ? void 0 : g.owner) && (null == g ? void 0 : g.accurate) && (null == g ? void 0 : g.perjury) && (null == g ? void 0 : g.liability) && (null == g ? void 0 : g.abuse),
                    I = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && P && y.toLowerCase() === S.fullName.toLowerCase(),
                    D = (0, ee.lw)(),
                    F = (0, i.Z)(D, 2),
                    R = F[0],
                    j = F[1],
                    z = j.isError,
                    U = j.error,
                    L = j.isLoading,
                    q = j.isSuccess,
                    V = j.reset;
                (0, r.useEffect)((function() {
                    var e = s.get("dmcaTarget");
                    e && C(ae(ae({}, N), {}, {
                        contentIds: ie([e])
                    }))
                }), []), (0, r.useEffect)((function() {
                    var e;
                    z && (V(), O("Could Not Proccess Claim: ".concat(null == U || null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }), [z, U]), (0, r.useEffect)((function() {
                    q && (V(), T(!0))
                }), [q]);
                var _ = function(e) {
                    w(ae(ae({}, g), {}, (0, Q.Z)({}, e.target.id, e.target.checked)))
                };
                return 3 !== Z ? null : r.createElement(r.Fragment, null, r.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", r.createElement(a.gx, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return C(ae(ae({}, N), {}, {
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
                        return oe.test(e)
                    },
                    onChange: function(e) {
                        return C(ae(ae({}, N), {}, {
                            contentIds: ie(e)
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return C(ae(ae({}, N), {}, {
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
                    options: le,
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
                        return C(ae(ae({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), r.createElement(se, {
                    className: "tw-mb-4"
                }, r.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), r.createElement(a.XZ, {
                    id: "owner",
                    checked: null == g ? void 0 : g.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: _
                }), r.createElement(a.XZ, {
                    id: "accurate",
                    checked: null == g ? void 0 : g.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: _
                }), r.createElement(a.XZ, {
                    id: "perjury",
                    checked: null == g ? void 0 : g.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: _
                }), r.createElement(a.XZ, {
                    id: "liability",
                    checked: null == g ? void 0 : g.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: _
                }), r.createElement(a.XZ, {
                    id: "abuse",
                    checked: null == g ? void 0 : g.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: _
                })), r.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", r.createElement(a.II, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: y.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == S || null === (l = S.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), P ? null : r.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, r.createElement(a.$1, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: J.sq
                }), r.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    onClick: k,
                    containerStyles: ue,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    disabled: !I || L,
                    containerStyles: ue,
                    onClick: function() {
                        return R({
                            claimInfo: N,
                            ownerInfo: S
                        })
                    }
                }, "Submit")))
            };
            var se = (0, c.Z)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                ue = {
                    width: "100%"
                };
            const me = function() {
                var e = (0, r.useState)(null),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useContext)(te),
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
            var de = n(59545),
                pe = n(83868),
                fe = n.n(pe);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach((function(t) {
                        (0, Q.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const we = function() {
                var e = (0, r.useState)(!0),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, r.useContext)(te),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    g = m.setOwnerInfo;
                return (0, r.useEffect)((function() {
                    var e, t, n, r, a, l;
                    fe()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (r = h.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (a = h.mailingCountry) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }), [h]), 2 !== f ? null : r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? r.createElement(ve, null, r.createElement(a.$1, {
                    className: "tw-px-2",
                    icon: J.sq
                }), r.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), r.createElement(a.$1, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: de.NB,
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", r.createElement(a.II, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
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
                        return g(ge(ge({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.zx, {
                    className: "tw-mr-2",
                    containerStyles: Ee,
                    onClick: p,
                    neutral: !0
                }, "Back"), r.createElement(a.zx, {
                    className: "tw-ml-2",
                    containerStyles: Ee,
                    disabled: !s,
                    onClick: d
                }, "Next")))
            };
            var ve = (0, c.Z)("div", {
                    target: "exj8v4t0"
                })({
                    name: "5vwt1n",
                    styles: "display:flex;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                }),
                Ee = {
                    width: "100%"
                };
            const ye = function() {
                var e = (0, A.lr)(),
                    t = (0, i.Z)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    c = (0, i.Z)(o, 2),
                    s = c[0],
                    u = c[1];
                (0, r.useEffect)((function() {
                    var e = Object.fromEntries((0, M.Z)(n.entries()).filter((function(e) {
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
                }, r.createElement(ne, {
                    closeModal: function() {
                        u(!1)
                    }
                }, r.createElement(me, null), r.createElement(we, null), r.createElement(ce, null))))
            };
            var be = n(65578),
                xe = n(84176),
                ke = n(22081),
                Ze = n(92332),
                Ne = n(34424),
                Ce = n(27484),
                Se = n.n(Ce),
                Oe = n(21442),
                Te = n(8860),
                Pe = n(98185),
                Ae = n(5513),
                Ie = n(8698),
                De = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                Fe = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                Re = (0, Ie.P1)(De, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                })),
                je = (0, Ie.P1)(De, (function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }), (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                })),
                ze = (0, Ie.P1)(De, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                })),
                Ue = (0, Ie.P1)(De, (function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }), (function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }), (function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                })),
                Le = (0, Ie.P1)(Fe, (function(e) {
                    return null !== e && e.length > 0
                })),
                qe = (0, Ie.P1)(Le, Fe, (function(e, t) {
                    return e && t.reduce((function(e, t) {
                        return Se()(t.updated_at) > Se()(e.updated_at) ? t : e
                    }), {
                        updated_at: 0
                    })
                })),
                Ve = (0, Ie.P1)(Fe, qe, (function(e, t) {
                    return null !== e && t.updated_at
                })),
                _e = (0, Ie.P1)(Fe, qe, (function(e, t) {
                    return null !== e && t.displayName
                })),
                $e = (0, Ie.P1)(Fe, qe, (function(e, t) {
                    return null !== e && !!t.reverted
                })),
                Ge = n(76938),
                Me = n(52926),
                Ye = n(45697),
                Be = n.n(Ye),
                He = function(e) {
                    var t = e.validationError,
                        n = e.displayNameChanged,
                        l = void 0 !== n && n,
                        o = (0, p.v9)(je),
                        i = (0, p.v9)(Ue),
                        c = ((0, p.v9)(Ve), l || (0, p.v9)((function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        })));
                    return r.createElement(r.Fragment, null, null !== t && r.createElement(B.Z, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, r.createElement(a.$1, {
                        icon: ke.lE
                    }), " ".concat(t)), o && null === t && r.createElement(B.Z, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, r.createElement(a.$1, {
                        icon: Me.B1
                    }), " That display name is already in use."), i && null === t && r.createElement(B.Z, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, r.createElement(a.$1, {
                        icon: Me.B1
                    }), " That display name includes characters that cannot be used. Please try again."), c && r.createElement(B.Z, {
                        color: "success",
                        "aria-label": "name change success"
                    }, r.createElement(a.$1, {
                        icon: ke.lE
                    }), " Your display name has been changed!"))
                };
            He.propTypes = {
                canChangeDisplayName: Be().bool.isRequired,
                validationError: Be().string
            };
            const We = He;
            var Ke = function(e) {
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
                }, "help.vrchat.com"), "."), r.createElement(k.Z, {
                    className: "me-2",
                    onClick: function() {
                        return n((0, Ae.IX)())
                    },
                    color: "primary"
                }, "Try Again")))
            };
            Ke.propTypes = {
                displayNameError: Be().string.isRequired
            };
            const Xe = Ke,
                Qe = n.p + "53f4092cfcb77e5217e639fd7a2012ff35100e4d9b6ed70707b47746bcb81c86.svg";
            var Je = function(e) {
                var t = e.canRevertDisplayName,
                    n = e.numberOfDays,
                    l = e.showLastDisplayNameChange,
                    o = e.cooldownPermission,
                    i = void 0 !== o && o;
                return r.createElement(a.qX, {
                    hideIcon: !0,
                    color: "#28434B",
                    type: "custom",
                    iconColor: "#6AE3F9",
                    className: "tw-mb-4"
                }, r.createElement("div", {
                    className: "tw-flex tw-gap-3 tw-flex-row"
                }, r.createElement("p", {
                    className: "tw-m-0"
                }, r.createElement(a.$1, {
                    icon: J.sq,
                    color: "#6AE3F9",
                    className: "tw-mr-2"
                })), r.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, r.createElement("span", null, i && r.createElement(r.Fragment, null, "You can only change your display name once per", " ", r.createElement("strong", {
                    className: "tw-text-[#FFFF00]"
                }, 30, " days ", r.createElement("img", {
                    alt: "subscriptions",
                    width: "35",
                    src: Qe
                }))), !i && r.createElement(r.Fragment, null, "You can only change your display name once per ", r.createElement("strong", null, 90, " days"), " ", r.createElement("br", null), "Want more flexibility? Change it every ", 30, " days instead with", " ", r.createElement("img", {
                    alt: "subscriptions",
                    width: "35",
                    src: Qe
                }))), l && r.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "Last changed: ", n, " days ago."), t && r.createElement("small", {
                    className: "tw-text-placeholder-text"
                }, "You can revert your last display name change."))))
            };
            Je.propTypes = {
                canRevertDisplayName: Be().bool.isRequired,
                numberOfDays: Be().number.isRequired,
                showLastDisplayNameChange: Be().bool.isRequired
            };
            const et = Je;
            var tt = n(39886),
                nt = n(56599),
                rt = n(54610);
            var at = (0, c.Z)("p", {
                    target: "ek3joju1"
                })({
                    name: "dzbp6p",
                    styles: "white-space:pre-wrap;line-height:2"
                }),
                lt = (0, c.Z)("b", {
                    target: "ek3joju0"
                })({
                    name: "lii32t",
                    styles: "font-size:1.2em;color:var(--bs-primary)"
                }),
                ot = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.I0)(),
                        c = (0, p.v9)((function(e) {
                            return e.currentUser.databaseUser.id
                        })),
                        u = (0, r.useState)(""),
                        d = (0, i.Z)(u, 2),
                        f = d[0],
                        g = d[1],
                        w = (0, r.useState)(""),
                        v = (0, i.Z)(w, 2),
                        E = v[0],
                        y = v[1],
                        b = (0, r.useState)(!0),
                        x = (0, i.Z)(b, 2),
                        Z = x[0],
                        N = x[1],
                        C = (0, r.useState)(!1),
                        S = (0, i.Z)(C, 2),
                        O = S[0],
                        T = S[1];
                    (0, r.useEffect)((function() {
                        return N("" === E || f !== n)
                    }), [E, f]);
                    var P = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var r, a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, Ae.eu)({
                                            userId: c,
                                            displayName: n,
                                            currentPassword: E,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (r = null === (a = e.t0.response) || void 0 === a || null === (a = a.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), T(!1), l((0, h.d)({
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
                    }, r.createElement(tt.Z, {
                        className: "mb-4",
                        outline: !0
                    }, r.createElement(nt.Z, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), r.createElement(rt.Z, null, r.createElement(at, null, "This will change your display name back to:", r.createElement("br", null), r.createElement(lt, null, n), r.createElement("br", null), "And restart the 90-day timer.", r.createElement("br", null), "Type your previous display name into the field below to revert."), r.createElement("input", {
                        "aria-label": "enter revert name",
                        type: "text",
                        className: "form-control mt-2 mb-2",
                        placeholder: "Type ".concat(n, " to Confirm"),
                        onChange: function(e) {
                            return g(e.target.value)
                        },
                        value: f
                    }), r.createElement("input", {
                        className: "form-control mb-2",
                        id: "namePasswordVerify",
                        name: "namePasswordVerify",
                        "aria-label": "Please confirm current password",
                        onChange: function(e) {
                            return y(e.target.value)
                        },
                        placeholder: "Please confirm current password",
                        type: "password",
                        value: E
                    }), r.createElement(k.Z, {
                        className: "me-2",
                        onClick: function() {
                            return T(!0)
                        },
                        disabled: Z,
                        color: "primary"
                    }, "Ok"), r.createElement(k.Z, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), r.createElement(a.sm, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: P,
                        cancelCallback: function() {
                            return T(!1)
                        },
                        isOpen: O
                    }))
                };
            ot.propTypes = {
                exitRevertCallback: Be().func.isRequired,
                previousDisplayName: Be().string
            };
            const it = ot;
            const ct = function() {
                var e, t, n = (0, p.I0)(),
                    c = (0, f.yi)(),
                    s = (0, i.Z)(c, 2),
                    u = s[0],
                    d = s[1],
                    h = d.isLoading,
                    g = d.isError,
                    w = d.error,
                    v = d.isSuccess,
                    E = (0, S.q7)().data,
                    y = void 0 === E ? [] : E,
                    Z = (0, p.v9)(Re),
                    N = (0, p.v9)(ze),
                    C = (0, p.v9)(De),
                    O = (0, p.v9)(Le),
                    T = (0, p.v9)($e),
                    P = (0, p.v9)(Ge.y),
                    A = (0, p.v9)(Ve),
                    I = (0, p.v9)(_e),
                    D = (0, p.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    F = (0, r.useState)(!0),
                    R = (0, i.Z)(F, 2),
                    j = R[0],
                    z = R[1],
                    U = (0, r.useState)(null),
                    L = (0, i.Z)(U, 2),
                    q = L[0],
                    V = L[1],
                    _ = (0, r.useState)(""),
                    $ = (0, i.Z)(_, 2),
                    G = $[0],
                    M = $[1],
                    Y = (0, r.useState)(""),
                    H = (0, i.Z)(Y, 2),
                    W = H[0],
                    K = H[1],
                    X = (0, r.useState)(null),
                    Q = (0, i.Z)(X, 2),
                    J = Q[0],
                    ee = Q[1],
                    te = (0, r.useState)(""),
                    ne = (0, i.Z)(te, 2),
                    re = ne[0],
                    ae = ne[1],
                    le = (0, r.useState)(!1),
                    oe = (0, i.Z)(le, 2),
                    ie = oe[0],
                    ce = oe[1],
                    se = (0, r.useState)(!1),
                    ue = (0, i.Z)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = y.includes("permission-reduced-name-change-cooldown"),
                    fe = (0, l.Nr)(re),
                    he = Z && N && "" !== fe;
                if ((0, r.useEffect)((function() {
                        if (P) z(!0);
                        else {
                            var e = pe ? 30 : 90;
                            O && Se()().diff(A, "days") < e ? z(!1) : z(!0)
                        }
                    }), [A, pe, P, O]), (0, r.useEffect)((function() {
                        "" !== fe ? fe.length < 4 ? ee("That name is too short.") : fe.length > 15 ? ee("That name is too long.") : (ee(null), M(""), n((0, Ae.Zm)({
                            displayName: fe,
                            userId: D.id
                        }))) : ee(null)
                    }), [fe, n, D.id]), (0, r.useEffect)((function() {
                        return "" === G ? (ce(!1), void V(null)) : G !== re ? (ce(!1), void V("Names don't match")) : (ce(!0), void V(null))
                    }), [G, re]), g) return r.createElement(Xe, {
                    displayNameError: null !== (e = null === (t = w.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (me) return r.createElement(it, {
                    previousDisplayName: I,
                    exitRevertCallback: function() {
                        return de(!1)
                    }
                });
                var ge = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, n(u({
                                            password: W,
                                            displayName: re,
                                            revertDisplayName: !1,
                                            userId: D.id
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
                    we = !j && !T;
                return r.createElement(Pe.Z, {
                    loading: h
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(Oe.Z, null, r.createElement(et, {
                    canRevertDisplayName: we,
                    cooldownPermission: pe,
                    showLastDisplayNameChange: !j,
                    numberOfDays: Se()().diff(A, "days")
                }), r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: Ne.Qj,
                    size: "2x"
                })), r.createElement(x.Z, {
                    xs: "10"
                }, r.createElement(b.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !j,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return ae(e.target.value)
                    },
                    placeholder: D.displayName,
                    type: "text",
                    value: re
                }), r.createElement(We, {
                    canChangeDisplayName: j,
                    displayName: D.displayName,
                    displayNameAvailable: Z,
                    displayNameValue: re,
                    isRevert: !1,
                    latestChangedDate: A,
                    displayNameChecking: C,
                    validationError: J,
                    displayNameChanged: v
                }))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, C && r.createElement(a.$1, {
                    icon: Ze.LM,
                    spin: !0,
                    size: "2x"
                }), "" !== re && !C && r.createElement(Te.Z, {
                    "aria-label": Z && N ? "Name is available" : "Name is unavailable",
                    ok: Z && N
                }))), he && !v && r.createElement(b.Z, null, r.createElement(x.Z, {
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
                        return M(e.target.value)
                    },
                    placeholder: "Please confirm display name",
                    type: "text",
                    value: G
                }), null !== q && r.createElement(B.Z, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, r.createElement(a.$1, {
                    icon: ke.lE
                }), " ".concat(q)))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== G && r.createElement(Te.Z, {
                    "aria-label": null !== q ? q : "Confirmation name matches",
                    ok: null === q
                }))), ie && !v && r.createElement(b.Z, {
                    className: "mt-2"
                }, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: xe.DD,
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
                        return K(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: W
                })))), r.createElement(b.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, we && r.createElement(x.Z, {
                    xs: "6"
                }, r.createElement(k.Z, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return de(!0)
                    }
                }, "Revert Display Name Change")), r.createElement(x.Z, {
                    xs: "6"
                }, r.createElement(k.Z, {
                    disabled: !j || !0 === C || null !== q || "" === G || "" === W || null !== J || "" === re,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: ge
                }, "Change Display Name"))))))
            };
            var st = n(609),
                ut = n(82470);
            const mt = function(e) {
                var t, n, l = e.user,
                    c = (l || {}).usesGeneratedPassword,
                    s = r.useState(""),
                    u = (0, i.Z)(s, 2),
                    d = u[0],
                    p = u[1],
                    h = r.useState(""),
                    g = (0, i.Z)(h, 2),
                    w = g[0],
                    v = g[1],
                    E = r.useState(""),
                    y = (0, i.Z)(E, 2),
                    k = y[0],
                    Z = y[1],
                    N = r.useState(!1),
                    C = (0, i.Z)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, f.$h)(),
                    P = (0, i.Z)(T, 2),
                    A = P[0],
                    I = P[1],
                    D = I.isLoading,
                    F = I.isSuccess,
                    R = I.isError,
                    j = I.error,
                    z = function(e) {
                        var t = e.newPassword;
                        return t && 0 !== t.length ? t.length < 8 ? "That password is too short" : (0, ut.w)(t) ? "Please try a more secure password" : null : null
                    }({
                        newPassword: w
                    }),
                    U = (n = {
                        newPassword: w,
                        confirmationNewPassword: k
                    }).newPassword !== n.confirmationNewPassword ? "Passwords don't match" : null,
                    L = !z,
                    q = !U && k.length > 0,
                    V = w.length > 0 && !z,
                    _ = V && k.length > 0 && !U && !c,
                    $ = !z && !U && w === k && ("" !== d || c),
                    G = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), $) {
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
                                        p(""), v(""), Z(""), e.next = 16;
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
                    M = function(e) {
                        v(e.target.value)
                    },
                    Y = function(e) {
                        Z(e.target.value)
                    },
                    H = function(e) {
                        p(e.target.value)
                    };
                return r.useEffect((function() {
                    S || "" === d && "" === w && "" === k || O(!0)
                }), [d, w, k]), r.createElement(Pe.Z, {
                    loading: D
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("form", {
                    onSubmit: G
                }, R && r.createElement(B.Z, {
                    color: "warning"
                }, r.createElement(a.$1, {
                    icon: ke.lE
                }), " An error occurred: ", (null == j || null === (t = j.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown error"), r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: st.by,
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
                    onChange: M,
                    onKeyUp: M
                }), z && r.createElement(B.Z, {
                    color: "warning"
                }, r.createElement(a.$1, {
                    icon: ke.lE
                }), " ", z), F && r.createElement(B.Z, {
                    color: "success"
                }, r.createElement(a.$1, {
                    icon: ke.lE
                }), " Your password has been changed!"))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, r.createElement(Te.Z, {
                    ok: S ? L : null
                }))), V && r.createElement(b.Z, null, r.createElement(x.Z, {
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
                    onChange: Y,
                    onKeyUp: Y
                }), U && r.createElement(B.Z, {
                    color: "warning"
                }, r.createElement(a.$1, {
                    icon: ke.lE
                }), " ", U))), r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, r.createElement(Te.Z, {
                    ok: q
                }))), _ && r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.$1, {
                    icon: xe.DD,
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
                    onChange: H,
                    onKeyUp: H
                })))), r.createElement(b.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, r.createElement(x.Z, {
                    xs: "4"
                }, r.createElement("button", {
                    disabled: !$,
                    className: "btn btn-primary w-100",
                    id: "password-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    type: "submit"
                }, "Change Password"))))))
            };
            var dt = n(42501),
                pt = n(67714);
            const ft = function() {
                var e, t, n = (0, p.I0)(),
                    l = (0, S.IB)().data,
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
                    v = (0, i.Z)(w, 2),
                    E = v[0],
                    y = v[1],
                    b = y.isLoading,
                    x = y.isError,
                    k = y.error,
                    Z = y.reset,
                    N = r.useState(!1),
                    C = (0, i.Z)(N, 2),
                    O = C[0],
                    T = C[1],
                    P = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, E({
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
                                            icon: pt.iC,
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
                return r.createElement(r.Fragment, null, r.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), r.createElement(a.zx, {
                    type: "button",
                    onClick: function() {
                        T(!0)
                    },
                    danger: !0
                }, r.createElement(a.$1, {
                    icon: dt.faUserXmark
                }), " Reset All User Data"), r.createElement(a.sm, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: P,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        T(!1), Z()
                    },
                    isOpen: O,
                    isLoading: b
                }, r.createElement("p", null, A), r.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), x && r.createElement(a.qX, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == k || null === (t = k.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var ht = n(21707);
            var gt = (0, c.Z)("div", {
                target: "e1a02i090"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const wt = function(e) {
                var t, n, l = e.user,
                    o = l || {},
                    c = o.hasSharedConnectionsOptOut,
                    s = o.hasDiscordFriendsOptOut,
                    u = (0, r.useState)(null),
                    m = (0, i.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    h = (0, f.PY)(),
                    g = (0, i.Z)(h, 2),
                    w = g[0],
                    v = g[1],
                    E = v.isError,
                    y = v.error,
                    Z = (0, f.Ol)(),
                    N = (0, i.Z)(Z, 2),
                    C = N[0],
                    S = N[1],
                    O = S.isError,
                    T = S.error,
                    P = function() {
                        try {
                            window.OneTrust.ToggleInfoDisplay()
                        } catch (e) {
                            p("OneTrust not loaded. Disable your ad blocker and refresh the page to try again.")
                        }
                    };
                (0, r.useEffect)((function() {
                    return window.addEventListener("OneTrustGroupsUpdated", P),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", P)
                        }
                }), []);
                var A = E || O ? (null == y || null === (t = y.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || (null == T || null === (n = T.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "An error occurred while updating your shared connections setting." : d;
                return r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), A ? r.createElement(B.Z, {
                    className: "warning"
                }, r.createElement(a.$1, {
                    icon: ht.e7
                }), " ", d) : r.createElement(b.Z, null, r.createElement(x.Z, {
                    xs: "10"
                }, r.createElement(k.Z, {
                    type: "button",
                    color: "primary",
                    onClick: P
                }, "Change Cookie and Consent Settings"))), r.createElement(gt, {
                    className: "mt-3"
                }, r.createElement(W.Z, {
                    label: "Show Mutual Friend and Group Connections",
                    defaultChecked: !c,
                    onChangeCallback: function() {
                        return w({
                            hasSharedConnectionsOptOut: !c,
                            userId: l.id
                        })
                    }
                })), r.createElement(gt, {
                    className: "mt-3"
                }, r.createElement(W.Z, {
                    label: "Show Discord Friend Connections",
                    defaultChecked: !s,
                    onChangeCallback: function() {
                        return C({
                            hasDiscordFriendsOptOut: !s,
                            userId: l.id
                        })
                    }
                })))
            };
            var vt = n(15671),
                Et = n(43144),
                yt = n(97326),
                bt = n(60136),
                xt = n(82963),
                kt = n(61120),
                Zt = n(85020),
                Nt = n(65394),
                Ct = n(2909),
                St = n(32966),
                Ot = n(50906),
                Tt = n(45432),
                Pt = n(74855),
                At = n(53637),
                It = n(12611),
                Dt = n(37549),
                Ft = n(9669),
                Rt = n.n(Ft);

            function jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zt(e) {
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
                    var n, r = (0, kt.Z)(e);
                    if (t) {
                        var a = (0, kt.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, xt.Z)(this, n)
                }
            }
            var Ut = "https://docs.vrchat.com/docs/setup-2fa",
                Lt = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                qt = "otpDownload",
                Vt = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                _t = function(e) {
                    (0, bt.Z)(n, e);
                    var t = zt(n);

                    function n(e) {
                        var a;
                        return (0, vt.Z)(this, n), a = t.call(this, e), (0, Q.Z)((0, yt.Z)(a), "getOneTimePasswords", (0, o.Z)(m().mark((function e() {
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
                                            payload: Rt().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
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
                        })))), (0, Q.Z)((0, yt.Z)(a), "disable", function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                var n, r;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, a.props.dispatch({
                                                type: "TWOFACTORAUTH_REMOVE",
                                                payload: Rt().delete(window.apiUrl("/api/1/auth/twofactorauth"))
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
                                t % 2 ? jt(Object(n), !0).forEach((function(t) {
                                    (0, Q.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, Vt), a.ref = r.createRef(), a.enable = a.enable.bind((0, yt.Z)(a)), a.renderSetup = a.renderSetup.bind((0, yt.Z)(a)), a.renderStatus = a.renderStatus.bind((0, yt.Z)(a)), a.handleChangeVerifyCode = a.handleChangeVerifyCode.bind((0, yt.Z)(a)), a.handleVerifyPendingSecret = a.handleVerifyPendingSecret.bind((0, yt.Z)(a)), a.isSettingUp = a.isSettingUp.bind((0, yt.Z)(a)), a.cancelSecret = a.cancelSecret.bind((0, yt.Z)(a)), a.showTextKey = a.showTextKey.bind((0, yt.Z)(a)), a.goToStep0 = a.goToStep0.bind((0, yt.Z)(a)), a.goToStep1 = a.goToStep1.bind((0, yt.Z)(a)), a.goToStep2 = a.goToStep2.bind((0, yt.Z)(a)), a.toggleOneTimePasswordsShown = a.toggleOneTimePasswordsShown.bind((0, yt.Z)(a)), a.hasOneTimePasswords = a.hasOneTimePasswords.bind((0, yt.Z)(a)), a.getOneTimePasswordHref = a.getOneTimePasswordHref.bind((0, yt.Z)(a)), a.downloadOneTimePasswords = a.downloadOneTimePasswords.bind((0, yt.Z)(a)), a.triggerOtpDownloadLink = a.triggerOtpDownloadLink.bind((0, yt.Z)(a)), a
                    }
                    return (0, Et.Z)(n, [{
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
                                payload: Rt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
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
                                return "".concat(Lt(e.code), "\n")
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
                            e.preventDefault(), this.setState(Vt), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: Rt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(Vt), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: Rt().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
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
                            document.getElementById(qt).click(), this.setState({
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
                                            icon: Tt.a3,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", r.createElement("a", {
                                            href: Ut,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), r.createElement("p", null, r.createElement(It.Z, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), r.createElement("div", null, r.createElement("p", null, r.createElement(a.$1, {
                                            icon: ht.e7,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), r.createElement("p", null, "We", " ", r.createElement("strong", null, r.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && r.createElement(B.Z, {
                                            color: "warning"
                                        }, r.createElement(a.$1, {
                                            icon: ht.e7
                                        }), " Something went wrong downloading recovery codes."), r.createElement("div", null, r.createElement("p", null, r.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, r.createElement(It.Z, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), r.createElement("span", null, r.createElement(It.Z, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), r.createElement("a", {
                                            id: qt,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return r.createElement("div", null, r.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", r.createElement("a", {
                                        href: Ut,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), r.createElement("p", null, r.createElement(It.Z, {
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
                                }, Lt(e.code)))
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
                            return r.createElement(Pe.Z, {
                                loading: o
                            }, r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("h4", null, "Setup")), r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: Ut,
                                rel: "noreferrer"
                            }, "Help"), r.createElement(k.Z, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, r.createElement(a.$1, {
                                icon: de.NB
                            }), " Cancel"))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(At.Z, {
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
                                icon: Ot.eF,
                                size: "4x",
                                className: "tw-mr-1"
                            }), r.createElement(a.$1, {
                                icon: St.D_,
                                size: "4x"
                            }))))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement(k.Z, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", r.createElement(a.$1, {
                                icon: Nt._t
                            }))))), r.createElement(At.Z, {
                                hidden: 1 !== this.state.step
                            }, r.createElement(b.Z, null, r.createElement(x.Z, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), r.createElement("p", null, "If you can't scan the code,", " ", r.createElement(Gt, {
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
                            }), r.createElement(Pt.CopyToClipboard, {
                                text: c
                            }, r.createElement(k.Z, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, r.createElement(a.$1, {
                                icon: Ct.kZ
                            }), " Copy"))))), r.createElement(x.Z, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("p", null, r.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(c)
                            })))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement(k.Z, {
                                onClick: this.goToStep0
                            }, r.createElement(a.$1, {
                                icon: Zt.A3
                            }), " Previous")), r.createElement(x.Z, {
                                className: "text-end"
                            }, r.createElement(k.Z, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", r.createElement(a.$1, {
                                icon: Nt._t
                            }))))), r.createElement(At.Z, {
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
                            }, r.createElement("div", null, i && r.createElement(B.Z, {
                                color: "warning"
                            }, r.createElement(a.$1, {
                                icon: ht.e7
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
                            }), r.createElement(It.Z, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement("hr", null))), r.createElement(b.Z, null, r.createElement(x.Z, null, r.createElement(k.Z, {
                                onClick: this.goToStep1
                            }, r.createElement(a.$1, {
                                icon: Zt.A3
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
            const $t = (0, Dt.Z)((0, p.$j)((function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            }))(_t));
            var Gt = (0, c.Z)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const Mt = function() {
                var e = (0, l.Tu)().user;
                return r.createElement("div", null, r.createElement(a.$4, null, "Account Settings"), r.createElement("h2", null, "Account Settings"), r.createElement(a.oI, null, r.createElement("h4", null, "Change Display Name")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ct, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Email")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(be.Z, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Change Password")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(mt, {
                    user: e
                })), r.createElement(a.oI, null, r.createElement("h4", null, "Two-factor authentication")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement($t, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Account Linking")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(j, {
                    user: e
                })), r.createElement(a.oI, null, r.createElement("h4", null, "Privacy")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(wt, {
                    user: e
                })), r.createElement(a.oI, null, r.createElement("h4", null, "Age Verification")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(G, null)), r.createElement(a.oI, null, r.createElement("h4", null, "Copyright")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ye, null)), !(null != e && e.hideContentFilterSettings) && r.createElement(r.Fragment, null, r.createElement(a.oI, null, r.createElement("h4", null, "Content Gating")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(X, null))), r.createElement(a.oI, null, r.createElement("h4", null, "User Data")), r.createElement(a.Ao, {
                    className: "mb-2"
                }, r.createElement(ft, null)), r.createElement(a.l8, {
                    className: "mb-2"
                }, r.createElement(a.oI, null, r.createElement("h4", null, "Danger Zone")), r.createElement(a.Ao, null, r.createElement(g, null))))
            }
        },
        65578: (e, t, n) => {
            n.d(t, {
                Z: () => Z
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
                g = n(83868),
                w = n.n(g),
                v = n(83807),
                E = n(22202),
                y = n(62437),
                b = n(96985),
                x = n(8860),
                k = n(18461);
            const Z = function() {
                var e = (0, E.IB)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.Z)(t, 2),
                    g = n[0],
                    Z = n[1],
                    N = (0, m.useState)(""),
                    C = (0, r.Z)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, m.useState)(""),
                    P = (0, r.Z)(T, 2),
                    A = P[0],
                    I = P[1],
                    D = (0, v.Nr)(g),
                    F = (0, y.X6)(),
                    R = (0, r.Z)(F, 2),
                    j = R[0],
                    z = R[1],
                    U = z.isFetching,
                    L = z.isError,
                    q = z.isSuccess,
                    V = z.error,
                    _ = z.originalArgs,
                    $ = (0, y.n_)(),
                    G = (0, r.Z)($, 2),
                    M = G[0],
                    Y = G[1],
                    B = Y.isLoading,
                    H = Y.isError,
                    W = Y.error,
                    K = (0, E.Fe)(),
                    X = (0, r.Z)(K, 2),
                    Q = X[0],
                    J = X[1],
                    ee = J.isFetching,
                    te = J.isError,
                    ne = J.error,
                    re = J.isSuccess,
                    ae = (0, y.SO)({
                        email: D,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === D || !1 === w()(D)
                    }),
                    le = ae.data,
                    oe = ae.isFetching,
                    ie = ae.isSuccess,
                    ce = ae.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)((function() {
                    O(""), I("")
                }), [g]);
                var ue = (0, m.useMemo)((function() {
                        return ie && !1 === le.userExists && w()(D) && "" !== D
                    }), [le, D]),
                    me = (0, m.useMemo)((function() {
                        return "" !== S && S === D
                    }), [S, D]),
                    de = (0, m.useMemo)((function() {
                        if (!1 === w()(D) && "" !== D) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == ce ? void 0 : ce.email) === D) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " That email is already in use.");
                        if (H) return m.createElement(d.Z, {
                            color: "warning"
                        }, m.createElement(b.$1, {
                            icon: u.e7
                        }), " Failed to change news preference: ", W, ".");
                        if (L && (null == _ ? void 0 : _.email) === D) {
                            I("");
                            var t = V.data.error.message;
                            return m.createElement(d.Z, {
                                color: "warning"
                            }, m.createElement(b.$1, {
                                icon: u.e7
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== S && S !== D) return m.createElement(d.Z, {
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
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : q ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(d.Z, {
                            color: "info"
                        }, m.createElement(b.$1, {
                            icon: s.sq
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }), [re, te, L, q, le, ie, S, D, e, H]),
                    pe = (0, m.useMemo)((function() {
                        return !se || q ? m.createElement("span", null, m.createElement(b.$1, {
                            icon: c.XC
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.$1, {
                            icon: i.LE,
                            color: "success"
                        }), " Email Verified")
                    }), [se, q]),
                    fe = (0, m.useMemo)((function() {
                        return oe ? m.createElement(b.$1, {
                            icon: o.LM,
                            spin: !0,
                            size: "2x"
                        }) : "" === D ? null : ue ? m.createElement(x.Z, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(x.Z, {
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
                        return Z(e.target.value)
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
                        return I(e.target.value)
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
                }, m.createElement(k.Z, {
                    id: "subscribe",
                    checked: !(null != e && e.unsubscribe),
                    onChange: function(t) {
                        return M({
                            userId: e.id,
                            subscribe: t.target.checked
                        })
                    },
                    label: "Keep me up to date with the awesome power of your emails",
                    htmlFor: "subscribe",
                    disabled: B
                }))), m.createElement("hr", null), m.createElement(p.Z, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(f.Z, {
                    xs: "4"
                }, m.createElement(h.Z, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !q || ee,
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
                            email: D,
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
                        var t, n, r, a, o, i, c, s, u, m, d, p, f, h = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (t = h.length > 0 && void 0 !== h[0] ? h[0] : {}).redirectTo, r = void 0 === n ? "/home/login" : n, a = t.version, o = void 0 === a ? 2 : a, "1366854478250381462", i = ["openid", "identify", "email", "sdk.social_layer_presence"], c = window.location.origin + window.location.pathname, s = c.split("/home/"), c = "".concat(s[0], "/home/discord/auth").concat(2 === o ? "/v2" : ""), u = {
                                        redirectUri: c,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, m = JSON.stringify(u), d = btoa(m), p = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: u.redirectUri,
                                        response_type: "code",
                                        scope: i.join(" "),
                                        state: d
                                    }), f = "https://discord.com/oauth2/authorize?".concat(p.toString()), window.location.href = f;
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
        19517: (e, t, n) => {
            n.d(t, {
                u: () => c
            });
            var r = n(15861),
                a = n(64687),
                l = n.n(a),
                o = n(3845),
                i = ["openid", "email", "profile"],
                c = function() {
                    var e = (0, r.Z)(l().mark((function e() {
                        var t, n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = new URLSearchParams({
                                        client_id: "827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com",
                                        redirect_uri: window.location.origin + window.location.pathname,
                                        response_type: "id_token",
                                        scope: i.join(" "),
                                        nonce: (0, o.Z)()
                                    }), n = "https://accounts.google.com/o/oauth2/v2/auth?".concat(t.toString()), window.location.href = n;
                                case 3:
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
//# sourceMappingURL=1a68ef82f8d78af62f6eff1eb87ccc8fa1ee93ad3310e7d234f91f4e0ac7d004.js.map