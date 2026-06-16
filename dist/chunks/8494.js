"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8494], {
        78479(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var a = n(58168),
                r = n(80045),
                l = n(19179),
                o = n(81617),
                i = n(96540),
                c = n(6324),
                s = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, r.A)(e, s);
                return null === n ? null : n ? i.createElement(c.A, (0, a.A)({
                    icon: o.e6,
                    size: m,
                    className: "text-success"
                }, d)) : i.createElement(c.A, (0, a.A)({
                    icon: l.GR,
                    size: m,
                    className: "text-warning"
                }, d))
            };
            n.dn(u)
        },
        75255(e, t, n) {
            n.d(t, {
                A: () => i
            });
            var a = n(7612),
                r = n(96540),
                l = n(30104),
                o = n(6324);
            const i = function(e) {
                var t = e.loading,
                    n = e.className,
                    i = e.onClick,
                    c = e.color,
                    s = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return r.createElement(l.A, {
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
                }, r.createElement(o.A, {
                    icon: a.z1,
                    spin: !0
                })))
            };
            n.dn(i)
        },
        86878(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var a = n(58168),
                r = n(96540),
                l = n(47767);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.zy)(),
                        o = (0, l.Zp)(),
                        i = (0, l.g)();
                    return r.createElement(e, (0, a.A)({}, t, {
                        router: {
                            location: n,
                            navigate: o,
                            params: i
                        }
                    }))
                }
            }
        },
        68494(e, t, n) {
            n.r(t), n.d(t, {
                default: () => Xt
            });
            var a = n(96540),
                r = n(15033),
                l = n(194),
                o = n(10467),
                i = n(82544),
                c = n(70129),
                s = n(34496),
                u = n(54756),
                m = n.n(u),
                d = n(47767),
                p = n(6376),
                f = n(71957),
                h = n(65950);
            const g = function() {
                var e = (0, d.Zp)(),
                    t = (0, p.wA)(),
                    n = (0, f.TP)(),
                    c = (0, i.A)(n, 2),
                    u = c[0],
                    g = c[1].isSuccess,
                    v = (0, l.a$)().user,
                    y = a.useState(!1),
                    b = (0, i.A)(y, 2),
                    A = b[0],
                    k = b[1],
                    x = a.useState(!1),
                    N = (0, i.A)(x, 2),
                    C = N[0],
                    S = N[1],
                    O = function() {
                        k(!1), S(!1)
                    },
                    T = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var n, a, r;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(!1), S(!1), e.next = 4, u({
                                            userId: v.id
                                        });
                                    case 4:
                                        (n = e.sent).error && t((0, h.X)({
                                            title: "Failed to delete your account",
                                            icon: s.zp,
                                            message: null !== (a = null === (r = n.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 8e3
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return a.createElement("div", null, a.createElement(r.$n, {
                    type: "button",
                    className: "btn-danger",
                    onClick: function() {
                        k(!0)
                    },
                    danger: !0
                }, "Delete Account"), a.createElement(r.uo, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        k(!1), S(!0)
                    },
                    cancelCallback: O,
                    isOpen: A
                }), a.createElement(r.uo, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: T,
                    cancelCallback: O,
                    isOpen: C
                }, a.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), a.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), a.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), g && a.createElement(r.aF, {
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
            var w = (0, c.A)(r.fv, {
                    target: "e1c8z0io1"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                E = (0, c.A)("p", {
                    target: "e1c8z0io0"
                })({
                    name: "1tmloek",
                    styles: "text-align:center;margin-right:100px;margin-left:100px"
                }),
                v = n(64850),
                y = n(25161),
                b = n(5826),
                A = n(39704),
                k = n(30104),
                x = n(25423),
                N = n(17535),
                C = n(97890),
                S = n(13951),
                O = n(58622),
                T = n(22479),
                P = n(53369),
                D = n(84976),
                F = "link_discord",
                R = "unlink_discord",
                M = "link_google",
                I = "unlink_google";
            const z = function(e) {
                var t = e.user || {},
                    n = t.discordId,
                    l = t.googleId,
                    c = t.displayName,
                    s = t.id,
                    u = (0, d.zy)().state,
                    f = (0, a.useState)(null),
                    g = (0, i.A)(f, 2),
                    w = g[0],
                    E = g[1],
                    z = (0, a.useState)(null),
                    j = (0, i.A)(z, 2),
                    U = j[0],
                    V = j[1],
                    q = (0, a.useState)(null),
                    L = (0, i.A)(q, 2),
                    _ = L[0],
                    G = L[1],
                    W = (0, d.Zp)(),
                    $ = (0, p.wA)(),
                    B = (0, D.ok)(),
                    Y = (0, i.A)(B, 2),
                    X = Y[0],
                    Q = (Y[1], (0, S.nW)()),
                    K = (0, i.A)(Q, 2),
                    H = K[0],
                    J = K[1].isLoading,
                    Z = (0, S.oX)(),
                    ee = (0, i.A)(Z, 2),
                    te = ee[0],
                    ne = ee[1].isLoading,
                    ae = (0, S.Nu)(),
                    re = (0, i.A)(ae, 2),
                    le = re[0],
                    oe = re[1].isLoading,
                    ie = (0, S.c3)(),
                    ce = (0, i.A)(ie, 2),
                    se = ce[0],
                    ue = ce[1].isLoading,
                    me = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, a, r, l, o, i, c, s = arguments;
                            return m().wrap(function(e) {
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
                                        E(null), V(null), $((0, h.X)({
                                            title: "Link Discord Account",
                                            icon: y.CQ,
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
                                        return o = e.t0.data, i = (0, P.h)(o), c = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: w,
                                                continueDiscordAccessToken: t,
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.zN.DISCORD
                                            }
                                        }, e.abrupt("return", W(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), E(null), V(null), e.abrupt("return", $((0, h.X)({
                                            title: "Failure",
                                            message: null !== (r = null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== r ? r : "Discord Linking Failed",
                                            icon: v.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 11]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    de = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n, a, r, o, i, c, s = arguments;
                            return m().wrap(function(e) {
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
                                        E(null), G(null), $((0, h.X)({
                                            title: "Link Google Account",
                                            icon: y.CQ,
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
                                        return o = e.t0.data, i = (0, P.h)(o), c = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: w,
                                                continueGoogleIdToken: t,
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.zN.GOOGLE
                                            }
                                        }, e.abrupt("return", W(i, {
                                            state: c
                                        }));
                                    case 18:
                                        return console.error("Failed to link Google account:", e.t0), E(null), G(null), e.abrupt("return", $((0, h.X)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Google Linking Failed",
                                            icon: v.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 11]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    pe = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, H().unwrap();
                                    case 3:
                                        E(null), $((0, h.X)({
                                            title: "Unlink Discord Account",
                                            icon: y.CQ,
                                            message: "Successfully unlinked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Discord account:", e.t0), e.abrupt("return", $((0, h.X)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Discord Unlinking Failed",
                                            icon: v.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 7]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    fe = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, se().unwrap();
                                    case 3:
                                        E(null), $((0, h.X)({
                                            title: "Unlink Google Account",
                                            icon: y.CQ,
                                            message: "Successfully unlinked Google account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Google account:", e.t0), e.abrupt("return", $((0, h.X)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Google Unlinking Failed",
                                            icon: v.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 7]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = function() {
                        ge || (E(null), V(null))
                    };
                (0, a.useEffect)(function() {
                    (0, o.A)(m().mark(function e() {
                        var t;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = null == u ? void 0 : u.discordToken) && !n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    E(F), V(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, a.useEffect)(function() {
                    (null == u ? void 0 : u.selectedAction) === F && null != u && u.continueDiscordAccessToken && me(u.continueDiscordAccessToken), (null == u ? void 0 : u.selectedAction) === M && null != u && u.continueGoogleIdToken && de(u.continueGoogleIdToken)
                }, []), (0, a.useEffect)(function() {
                    var e = X.get("prompt"),
                        t = X.get("requestingUserId");
                    "linkDiscordAccount" === e && t && t === s && !n && (0, O.O)({
                        redirectTo: "/home/profile"
                    })
                }, []), (0, a.useEffect)(function() {
                    var e = X.get("prompt"),
                        t = X.get("requestingUserId");
                    "linkGoogleAccount" === e && t && t === s && !l && (0, T.B)({
                        redirectTo: "/home/profile"
                    })
                }, []), (0, a.useEffect)(function() {
                    (0, o.A)(m().mark(function e() {
                        var t, n, a, r;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = window.location.hash.substring(1), n = new URLSearchParams(t), a = n.get("id_token"), !(r = n.get("error"))) {
                                        e.next = 8;
                                        break
                                    }
                                    return history.replaceState(null, "", window.location.pathname), console.error("Google Authentication Error:", r), e.abrupt("return", $((0, h.X)({
                                        title: "Failure",
                                        message: "Google Authentication Failed",
                                        icon: v.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 8:
                                    a && (history.replaceState(null, "", window.location.pathname), E(M), G(a));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, a.useEffect)(function() {
                    w === F && U && n && (E(null), V(null))
                }, [ne, J, n, U]), (0, a.useEffect)(function() {
                    w === M && _ && l && (E(null), G(null))
                }, [oe, ue, l, _]);
                var ge = ne || J || oe || ue;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2"
                }, "Manage your linked accounts.")), a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2 tw-flex tw-gap-2"
                }, n && a.createElement(k.A, {
                    className: "tw-mr-2",
                    disabled: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return E(R)
                    }
                }, "Unlink your Discord Account"), !n && a.createElement(k.A, {
                    className: "tw-mr-2",
                    isLoading: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return (0, O.O)({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Link your Discord Account"), l && a.createElement(k.A, {
                    disabled: ge,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return E(I)
                    }
                }, "Unlink your Google Account"), !l && a.createElement(k.A, {
                    isLoading: ge,
                    type: "button",
                    color: "primary",
                    onClick: T.B
                }, "Link your Google Account")))), a.createElement(x.A, {
                    isOpen: w === R,
                    toggle: he,
                    centered: !0
                }, a.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Discord Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Discord account from this VRChat account? You can link it again anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, c)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: pe
                }, "Unlink Account"), a.createElement(r.$n, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), a.createElement(x.A, {
                    isOpen: null !== U && w === F,
                    toggle: he,
                    centered: !0
                }, a.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, c)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return me(U)
                    }
                }, "Link Account"), a.createElement(r.$n, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), a.createElement(x.A, {
                    isOpen: w === I,
                    toggle: he,
                    centered: !0
                }, a.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Google Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Google account from this VRChat account? You can link it again anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, c)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: fe
                }, "Unlink Account"), a.createElement(r.$n, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), a.createElement(x.A, {
                    isOpen: null !== _ && w === M,
                    toggle: he,
                    centered: !0
                }, a.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, a.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Google Account"), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Google account to this VRChat account? You can unlink it anytime."), a.createElement("div", {
                    className: "p-3 tw-text-center"
                }, a.createElement("strong", null, c)), a.createElement("div", {
                    className: "px-3 pt-3"
                }, a.createElement(r.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return de(_)
                    }
                }, "Link Account"), a.createElement(r.$n, {
                    onClick: he,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var j = n(3569),
                U = n(42217),
                V = n(70961),
                q = n(29281),
                L = n(24751),
                _ = n(6324),
                G = n(25538);
            const W = function() {
                var e = (0, S.P2)(),
                    t = e.data,
                    n = e.isError,
                    r = e.isFetching,
                    l = (0, S.w_)(),
                    o = l.data,
                    i = void 0 === o ? [] : o,
                    c = l.isError,
                    s = l.isFetching,
                    u = i.includes("permission-age-verification"),
                    m = (0, q.CV)(),
                    d = m.data,
                    p = m.isError,
                    f = m.isFetching,
                    h = n || c || p;
                if (r || s || f) return a.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(G.A, {
                    size: "5x"
                }));
                if (h) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(_.A, {
                    icon: V.faCircleQuestion
                }), " Unable to determine your Age Verification status."), a.createElement(L.z9, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!u) return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(_.A, {
                    icon: j.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), a.createElement(L.z9, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                var g = t.isAdult;
                switch (d.status) {
                    case "verified":
                    case "approved":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(_.A, {
                            icon: U.SG
                        }), " You have successfully verified your age.", g && " You may choose whether to display it on your profile."), g && a.createElement(L.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(_.A, {
                            icon: j.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), a.createElement(L.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return a.createElement(a.Fragment, null, a.createElement("p", null, a.createElement(_.A, {
                            icon: j.faCircleInfo
                        }), " You can check your Age Verification status here."), a.createElement(L.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Check Status"))
                }
            };
            var $ = n(66911),
                B = n(9391),
                Y = n(85052),
                X = n(92737),
                Q = n(19462);
            var K = (0, c.A)("div", {
                target: "ezmvepu0"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const H = function() {
                var e, t = (0, p.wA)(),
                    n = (0, l.a$)().user,
                    r = (0, a.useState)(new Set(n.contentFilters)),
                    o = (0, i.A)(r, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.d7)(c, 1400),
                    m = (0, f.FP)(),
                    d = (0, i.A)(m, 2),
                    g = d[0],
                    w = d[1],
                    E = w.isError,
                    v = w.error,
                    y = w.isSuccess;
                (0, a.useEffect)(function() {
                    if (null != n && n.id && u) {
                        var e = new Set(n.contentFilters),
                            t = (0, $.A)(u);
                        t.length === e.size && t.every(function(t) {
                            return e.has(t)
                        }) || g({
                            userId: n.id,
                            contentFilters: t
                        })
                    }
                }, [u]), (0, a.useEffect)(function() {
                    y && t((0, h.X)({
                        title: "Content Gating Settings Updated",
                        icon: B.KT,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }, [y]);
                return a.createElement(a.Fragment, null, a.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), E && a.createElement(Y.A, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == v || null === (e = v.data) || void 0 === e ? void 0 : e.error.message), Object.entries(X.z).map(function(e) {
                    var t = (0, i.A)(e, 2),
                        n = t[0],
                        r = t[1];
                    return a.createElement(K, {
                        key: n
                    }, a.createElement(Q.A, {
                        label: "Filter ".concat(r),
                        defaultChecked: c.has(n),
                        onChangeCallback: function() {
                            return e = n, void(c.has(e) ? s(new Set((0, $.A)(c).filter(function(t) {
                                return t !== e
                            }))) : s(new Set(c).add(e)));
                            var e
                        }
                    }))
                }), a.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var J = n(64467),
                Z = n(6913),
                ee = n(49843),
                te = (0, a.createContext)(null);
            const ne = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, a.useState)(1),
                    o = (0, i.A)(l, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, a.useState)(null),
                    m = (0, i.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.A)(f, 2),
                    g = h[0],
                    w = h[1],
                    E = (0, a.useState)({}),
                    v = (0, i.A)(E, 2),
                    y = v[0],
                    b = v[1],
                    A = (0, a.useState)({}),
                    k = (0, i.A)(A, 2),
                    x = k[0],
                    N = k[1],
                    C = function() {
                        s(1), p(null), w(!1), b({}), n()
                    };
                return g ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.M2, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: Z.iW
                }), a.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), a.createElement("p", null, "We will look into it and email you for next possible steps."), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.$n, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: C
                }, "Done"))) : d ? a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, a.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, a.createElement(r.M2, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: Z.iW
                }), a.createElement("h4", {
                    className: "tw-text-red"
                }, "DMCA Claim Cannot Be Completed.")), a.createElement("p", null, d), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, a.createElement(r.$n, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        return p(null)
                    },
                    neutral: !0
                }, "Back"), a.createElement(r.$n, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: C
                }, "Done"))) : a.createElement(te.Provider, {
                    value: {
                        next: function() {
                            s(function(e) {
                                return e + 1
                            })
                        },
                        previous: function() {
                            s(function(e) {
                                return e - 1
                            })
                        },
                        currentStep: c,
                        setFormError: p,
                        setFormSuccess: w,
                        ownerInfo: y,
                        setOwnerInfo: b,
                        claimInfo: x,
                        setClaimInfo: N,
                        resetForm: C
                    }
                }, a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

            function ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ae(Object(n), !0).forEach(function(t) {
                        (0, J.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                    return e.filter(function(e) {
                        return oe.test(e)
                    }).map(function(e) {
                        var t;
                        return null === (t = e.match(oe)) || void 0 === t ? void 0 : t[0]
                    })
                };
            const ce = function() {
                var e, t, n, l, o = (0, D.ok)(),
                    c = (0, i.A)(o, 2),
                    s = c[0],
                    u = (c[1], (0, a.useState)("owner")),
                    m = (0, i.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, a.useState)(!1),
                    h = (0, i.A)(f, 2),
                    g = h[0],
                    w = h[1],
                    E = (0, a.useState)(""),
                    v = (0, i.A)(E, 2),
                    y = v[0],
                    b = v[1],
                    A = (0, a.useContext)(te),
                    k = A.previous,
                    x = A.currentStep,
                    N = A.claimInfo,
                    C = A.setClaimInfo,
                    S = A.ownerInfo,
                    O = A.setFormError,
                    T = A.setFormSuccess,
                    P = (null == g ? void 0 : g.owner) && (null == g ? void 0 : g.accurate) && (null == g ? void 0 : g.perjury) && (null == g ? void 0 : g.liability) && (null == g ? void 0 : g.abuse),
                    F = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && P && y.toLowerCase() === S.fullName.toLowerCase(),
                    R = (0, ee.Ds)(),
                    M = (0, i.A)(R, 2),
                    I = M[0],
                    z = M[1],
                    j = z.isError,
                    U = z.error,
                    V = z.isLoading,
                    q = z.isSuccess,
                    L = z.reset;
                (0, a.useEffect)(function() {
                    var e = s.get("dmcaTarget");
                    e && C(re(re({}, N), {}, {
                        contentIds: ie([e])
                    }))
                }, []), (0, a.useEffect)(function() {
                    var e;
                    j && (L(), O("Could Not Proccess Claim: ".concat(null == U || null === (e = U.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }, [j, U]), (0, a.useEffect)(function() {
                    q && (L(), T(!0))
                }, [q]);
                var _ = function(e) {
                    w(re(re({}, g), {}, (0, J.A)({}, e.target.id, e.target.checked)))
                };
                return 3 !== x ? null : a.createElement(a.Fragment, null, a.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", a.createElement(r.TM, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return C(re(re({}, N), {}, {
                            description: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-content-ids",
                    className: "tw-mb-4"
                }, "The ID or URL of infringing content", a.createElement(r.ZB, {
                    className: "tw-pt-2",
                    value: null == N ? void 0 : N.contentIds,
                    validator: function(e) {
                        return oe.test(e)
                    },
                    onChange: function(e) {
                        return C(re(re({}, N), {}, {
                            contentIds: ie(e)
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return C(re(re({}, N), {}, {
                            proof: e.target.value
                        }))
                    },
                    value: null == N ? void 0 : N.proof
                })), a.createElement("label", {
                    htmlFor: "claim-authority",
                    className: "tw-mb-4"
                }, "Authority to make complaint", a.createElement(r.ms, {
                    className: "tw-pt-2",
                    id: "claim-authority",
                    trimToLength: !0,
                    allowMultiline: !0,
                    options: le,
                    value: d,
                    onChange: function(e) {
                        return p(e)
                    }
                })), a.createElement("label", {
                    htmlFor: "claim-owner",
                    className: "tw-mb-4"
                }, "Copyright Owner Name (optional)", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "claim-owner",
                    value: null == N ? void 0 : N.copyrightOwnerName,
                    onChange: function(e) {
                        return C(re(re({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), a.createElement(se, {
                    className: "tw-mb-4"
                }, a.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), a.createElement(r.Sc, {
                    id: "owner",
                    checked: null == g ? void 0 : g.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: _
                }), a.createElement(r.Sc, {
                    id: "accurate",
                    checked: null == g ? void 0 : g.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: _
                }), a.createElement(r.Sc, {
                    id: "perjury",
                    checked: null == g ? void 0 : g.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: _
                }), a.createElement(r.Sc, {
                    id: "liability",
                    checked: null == g ? void 0 : g.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: _
                }), a.createElement(r.Sc, {
                    id: "abuse",
                    checked: null == g ? void 0 : g.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: _
                })), a.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: y.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == S || null === (l = S.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), P ? null : a.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, a.createElement(r.M2, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: Z.iW
                }), a.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.$n, {
                    className: "tw-mr-2",
                    onClick: k,
                    containerStyles: ue,
                    neutral: !0
                }, "Back"), a.createElement(r.$n, {
                    className: "tw-ml-2",
                    disabled: !F || V,
                    containerStyles: ue,
                    onClick: function() {
                        return I({
                            claimInfo: N,
                            ownerInfo: S
                        })
                    }
                }, "Submit")))
            };
            var se = (0, c.A)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                ue = {
                    width: "100%"
                };
            const me = function() {
                var e = (0, a.useState)(null),
                    t = (0, i.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useContext)(te),
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
                }, a.createElement(r.$n, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: c,
                    neutral: !0
                }, "Cancel"), a.createElement(r.$n, {
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
            var de = n(19179),
                pe = n(69517),
                fe = n.n(pe);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach(function(t) {
                        (0, J.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const we = function() {
                var e = (0, a.useState)(!0),
                    t = (0, i.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    c = (0, i.A)(o, 2),
                    s = c[0],
                    u = c[1],
                    m = (0, a.useContext)(te),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    g = m.setOwnerInfo;
                return (0, a.useEffect)(function() {
                    var e, t, n, a, r, l;
                    fe()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (a = h.mailingCity) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (r = h.mailingCountry) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }, [h]), 2 !== f ? null : a.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? a.createElement(Ee, null, a.createElement(r.M2, {
                    className: "tw-px-2",
                    icon: Z.iW
                }), a.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), a.createElement(r.M2, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: de.GR,
                    onClick: function() {
                        return l(!1)
                    }
                })) : null, a.createElement("label", {
                    htmlFor: "user-full-name",
                    className: "tw-mb-4"
                }, "Your Full Legal Name", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "user-full-name",
                    type: "text",
                    value: null == h ? void 0 : h.fullName,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            fullName: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == h ? void 0 : h.organization,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
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
                }, "Street", a.createElement(r.pd, {
                    id: "owner-mailing-address",
                    value: null == h ? void 0 : h.mailingAddress,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            mailingAddress: e.target.value
                        }))
                    }
                })), a.createElement("div", {
                    className: "tw-flex tw-gap-4"
                }, a.createElement("label", {
                    htmlFor: "mailing-city",
                    className: "tw-mb-4 tw-flex-grow"
                }, "City", a.createElement(r.pd, {
                    id: "owner-mailing-city",
                    value: null == h ? void 0 : h.mailingCity,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", a.createElement(r.pd, {
                    id: "owner-mailing-state-province",
                    value: null == h ? void 0 : h.mailingStateProvince,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", a.createElement(r.pd, {
                    id: "owner-mailing-postal-code",
                    value: null == h ? void 0 : h.mailingPostalCode,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), a.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", a.createElement(r.pd, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            mailingCountry: e.target.value
                        }))
                    }
                }))), a.createElement("label", {
                    htmlFor: "owner-phone",
                    className: "tw-mb-4"
                }, "Phone Number", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "owner-phone",
                    type: "tel",
                    value: null == h ? void 0 : h.phoneNumber,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            phoneNumber: e.target.value
                        }))
                    }
                })), a.createElement("label", {
                    htmlFor: "owner-email"
                }, "Email", a.createElement(r.pd, {
                    className: "tw-pt-2",
                    id: "owner-email",
                    type: "email",
                    value: null == h ? void 0 : h.email,
                    onChange: function(e) {
                        return g(ge(ge({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), a.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, a.createElement(r.$n, {
                    className: "tw-mr-2",
                    containerStyles: ve,
                    onClick: p,
                    neutral: !0
                }, "Back"), a.createElement(r.$n, {
                    className: "tw-ml-2",
                    containerStyles: ve,
                    disabled: !s,
                    onClick: d
                }, "Next")))
            };
            var Ee = (0, c.A)("div", {
                    target: "exj8v4t0"
                })({
                    name: "5vwt1n",
                    styles: "display:flex;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                }),
                ve = {
                    width: "100%"
                };
            const ye = function() {
                var e = (0, D.ok)(),
                    t = (0, i.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, a.useState)(!1),
                    c = (0, i.A)(o, 2),
                    s = c[0],
                    u = c[1];
                (0, a.useEffect)(function() {
                    var e = Object.fromEntries((0, $.A)(n.entries()).filter(function(e) {
                        return "dmcaClaimForm" !== (0, i.A)(e, 1)[0]
                    }));
                    s && (e.dmcaClaimForm = !0), l(e)
                }, [s]), (0, a.useEffect)(function() {
                    n.get("dmcaClaimForm") && u(!0)
                }, []);
                return a.createElement(a.Fragment, null, a.createElement("p", null, "If you are aware of unauthorized use of your property, you can use the button below to request a DMCA takedown."), a.createElement(r.$n, {
                    onClick: function() {
                        return u(!0)
                    }
                }, "File a DMCA Claim"), a.createElement(r.aF, {
                    width: "80%",
                    title: "DMCA Claim",
                    slim: !0,
                    isVisible: s,
                    onClose: function() {
                        return u(!1)
                    }
                }, a.createElement(ne, {
                    closeModal: function() {
                        u(!1)
                    }
                }, a.createElement(me, null), a.createElement(we, null), a.createElement(ce, null))))
            };
            var be = n(32254),
                Ae = n(32110),
                ke = n(1700),
                xe = n(7612),
                Ne = n(94451),
                Ce = n(74353),
                Se = n.n(Ce),
                Oe = n(53370),
                Te = n(78479),
                Pe = n(71853),
                De = n(558),
                Fe = n(8120),
                Re = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                Me = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                Ie = (0, Fe.Mz)(Re, function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                }),
                ze = (0, Fe.Mz)(Re, function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                }),
                je = (0, Fe.Mz)(Re, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }, function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                }),
                Ue = (0, Fe.Mz)(Re, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }, function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                }),
                Ve = (0, Fe.Mz)(Me, function(e) {
                    return null !== e && e.length > 0
                }),
                qe = (0, Fe.Mz)(Ve, Me, function(e, t) {
                    return e && t.reduce(function(e, t) {
                        return Se()(t.updated_at) > Se()(e.updated_at) ? t : e
                    }, {
                        updated_at: 0
                    })
                }),
                Le = (0, Fe.Mz)(Me, qe, function(e, t) {
                    return null !== e && t.updated_at
                }),
                _e = (0, Fe.Mz)(Me, qe, function(e, t) {
                    return null !== e && t.displayName
                }),
                Ge = (0, Fe.Mz)(Me, qe, function(e, t) {
                    return null !== e && !!t.reverted
                }),
                We = n(77839),
                $e = n(33673),
                Be = n(5556),
                Ye = n.n(Be),
                Xe = function(e) {
                    var t = e.validationError,
                        n = e.displayNameChanged,
                        l = void 0 !== n && n,
                        o = (0, p.d4)(ze),
                        i = (0, p.d4)(Ue),
                        c = ((0, p.d4)(Le), l || (0, p.d4)(function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return a.createElement(a.Fragment, null, null !== t && a.createElement(Y.A, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, a.createElement(r.M2, {
                        icon: ke.$f
                    }), " ".concat(t)), o && null === t && a.createElement(Y.A, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, a.createElement(r.M2, {
                        icon: $e.W6
                    }), " That display name is already in use."), i && null === t && a.createElement(Y.A, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, a.createElement(r.M2, {
                        icon: $e.W6
                    }), " That display name includes characters that cannot be used. Please try again."), c && a.createElement(Y.A, {
                        color: "success",
                        "aria-label": "name change success"
                    }, a.createElement(r.M2, {
                        icon: ke.$f
                    }), " Your display name has been changed!"))
                };
            Xe.propTypes = {
                canChangeDisplayName: Ye().bool.isRequired,
                validationError: Ye().string
            };
            const Qe = Xe;
            var Ke = function(e) {
                var t = e.displayNameError,
                    n = (0, p.wA)();
                return a.createElement("div", {
                    className: "center-panel"
                }, a.createElement("div", {
                    className: "mb-4"
                }, a.createElement("p", null, "Name change was not successful due to:", a.createElement("br", null), a.createElement("code", null, t), a.createElement("br", null), "If issues persist, please contact VRChat Support at", " ", a.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://help.vrchat.com"
                }, "help.vrchat.com"), "."), a.createElement(k.A, {
                    className: "me-2",
                    onClick: function() {
                        return n((0, De.qc)())
                    },
                    color: "primary"
                }, "Try Again")))
            };
            Ke.propTypes = {
                displayNameError: Ye().string.isRequired
            };
            const He = Ke;
            var Je = n(34450),
                Ze = function(e) {
                    var t = e.canRevertDisplayName,
                        n = e.numberOfDays,
                        l = e.showLastDisplayNameChange,
                        o = e.cooldownPermission,
                        i = void 0 !== o && o;
                    return a.createElement(r.$T, {
                        hideIcon: !0,
                        color: "#31545ebf",
                        type: "custom",
                        iconColor: "#6AE3F9",
                        className: "tw-mb-4"
                    }, a.createElement("div", {
                        className: "tw-flex tw-gap-3 tw-flex-row"
                    }, a.createElement("p", {
                        className: "tw-m-0"
                    }, a.createElement(r.M2, {
                        icon: Z.iW,
                        color: "#6AE3F9",
                        className: "tw-mr-2"
                    })), a.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, a.createElement("span", null, i && a.createElement(a.Fragment, null, "You can only change your display name once per", " ", a.createElement("strong", {
                        className: "tw-text-[#FFFF00]"
                    }, 30, " days ", a.createElement("img", {
                        alt: "subscriptions",
                        width: "35",
                        src: Je
                    }))), !i && a.createElement(a.Fragment, null, "You can only change your display name once per ", a.createElement("strong", null, 90, " days"), " ", a.createElement("br", null), "Want more flexibility? Change it every ", 30, " days instead with", " ", a.createElement("img", {
                        alt: "subscriptions",
                        width: "35",
                        src: Je
                    }))), l && a.createElement("small", {
                        className: "tw-text-placeholder-text"
                    }, "Last changed: ", n, " days ago."), t && a.createElement("small", {
                        className: "tw-text-placeholder-text"
                    }, "You can revert your last display name change."))))
                };
            Ze.propTypes = {
                canRevertDisplayName: Ye().bool.isRequired,
                numberOfDays: Ye().number.isRequired,
                showLastDisplayNameChange: Ye().bool.isRequired
            };
            const et = Ze;
            var tt = n(74758),
                nt = n(87959),
                at = n(55606);
            var rt = (0, c.A)("p", {
                    target: "ek3joju1"
                })({
                    name: "dzbp6p",
                    styles: "white-space:pre-wrap;line-height:2"
                }),
                lt = (0, c.A)("b", {
                    target: "ek3joju0"
                })({
                    name: "lii32t",
                    styles: "font-size:1.2em;color:var(--bs-primary)"
                }),
                ot = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.wA)(),
                        c = (0, p.d4)(function(e) {
                            return e.currentUser.databaseUser.id
                        }),
                        u = (0, a.useState)(""),
                        d = (0, i.A)(u, 2),
                        f = d[0],
                        g = d[1],
                        w = (0, a.useState)(""),
                        E = (0, i.A)(w, 2),
                        v = E[0],
                        y = E[1],
                        b = (0, a.useState)(!0),
                        A = (0, i.A)(b, 2),
                        x = A[0],
                        N = A[1],
                        C = (0, a.useState)(!1),
                        S = (0, i.A)(C, 2),
                        O = S[0],
                        T = S[1];
                    (0, a.useEffect)(function() {
                        return N("" === v || f !== n)
                    }, [v, f]);
                    var P = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var a, r, o, i;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, De.m9)({
                                            userId: c,
                                            displayName: n,
                                            currentPassword: v,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), i = null !== (a = null === (r = e.t0.response) || void 0 === r || null === (r = r.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(i) ? i = "Your previous display name is not available." : /current password incorrect/i.test(i) && (i = "Check your password and try again.")), T(!1), l((0, h.X)({
                                            title: "Failed to revert display name",
                                            icon: s.zp,
                                            message: i,
                                            color: "danger",
                                            timeout: 8e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 6]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return a.createElement("div", {
                        className: "center-panel"
                    }, a.createElement(tt.A, {
                        className: "mb-4",
                        outline: !0
                    }, a.createElement(nt.A, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), a.createElement(at.A, null, a.createElement(rt, null, "This will change your display name back to:", a.createElement("br", null), a.createElement(lt, null, n), a.createElement("br", null), "And restart the 90-day timer.", a.createElement("br", null), "Type your previous display name into the field below to revert."), a.createElement("input", {
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
                    }), a.createElement(k.A, {
                        className: "me-2",
                        onClick: function() {
                            return T(!0)
                        },
                        disabled: x,
                        color: "primary"
                    }, "Ok"), a.createElement(k.A, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), a.createElement(r.uo, {
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
                exitRevertCallback: Ye().func.isRequired,
                previousDisplayName: Ye().string
            };
            const it = ot;
            const ct = function() {
                var e, t, n = (0, p.wA)(),
                    c = (0, f.Mo)(),
                    s = (0, i.A)(c, 2),
                    u = s[0],
                    d = s[1],
                    h = d.isLoading,
                    g = d.isError,
                    w = d.error,
                    E = d.isSuccess,
                    v = (0, S.w_)().data,
                    y = void 0 === v ? [] : v,
                    x = (0, p.d4)(Ie),
                    N = (0, p.d4)(je),
                    C = (0, p.d4)(Re),
                    O = (0, p.d4)(Ve),
                    T = (0, p.d4)(Ge),
                    P = (0, p.d4)(We.B),
                    D = (0, p.d4)(Le),
                    F = (0, p.d4)(_e),
                    R = (0, p.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }),
                    M = (0, a.useState)(!0),
                    I = (0, i.A)(M, 2),
                    z = I[0],
                    j = I[1],
                    U = (0, a.useState)(null),
                    V = (0, i.A)(U, 2),
                    q = V[0],
                    L = V[1],
                    _ = (0, a.useState)(""),
                    G = (0, i.A)(_, 2),
                    W = G[0],
                    $ = G[1],
                    B = (0, a.useState)(""),
                    X = (0, i.A)(B, 2),
                    Q = X[0],
                    K = X[1],
                    H = (0, a.useState)(null),
                    J = (0, i.A)(H, 2),
                    Z = J[0],
                    ee = J[1],
                    te = (0, a.useState)(""),
                    ne = (0, i.A)(te, 2),
                    ae = ne[0],
                    re = ne[1],
                    le = (0, a.useState)(!1),
                    oe = (0, i.A)(le, 2),
                    ie = oe[0],
                    ce = oe[1],
                    se = (0, a.useState)(!1),
                    ue = (0, i.A)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = y.includes("permission-reduced-name-change-cooldown"),
                    fe = (0, l.d7)(ae),
                    he = x && N && "" !== fe;
                if ((0, a.useEffect)(function() {
                        if (P) j(!0);
                        else {
                            var e = pe ? 30 : 90;
                            O && Se()().diff(D, "days") < e ? j(!1) : j(!0)
                        }
                    }, [D, pe, P, O]), (0, a.useEffect)(function() {
                        "" !== fe ? fe.length < 4 ? ee("That name is too short.") : fe.length > 15 ? ee("That name is too long.") : (ee(null), $(""), n((0, De.pT)({
                            displayName: fe,
                            userId: R.id
                        }))) : ee(null)
                    }, [fe, n, R.id]), (0, a.useEffect)(function() {
                        return "" === W ? (ce(!1), void L(null)) : W !== ae ? (ce(!1), void L("Names don't match")) : (ce(!0), void L(null))
                    }, [W, ae]), g) return a.createElement(He, {
                    displayNameError: null !== (e = null === (t = w.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (me) return a.createElement(it, {
                    previousDisplayName: F,
                    exitRevertCallback: function() {
                        return de(!1)
                    }
                });
                var ge = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, n(u({
                                            password: Q,
                                            displayName: ae,
                                            revertDisplayName: !1,
                                            userId: R.id
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
                            }, e, null, [
                                [0, 5]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    we = !z && !T;
                return a.createElement(Pe.A, {
                    loading: h
                }, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(Oe.A, null, a.createElement(et, {
                    canRevertDisplayName: we,
                    cooldownPermission: pe,
                    showLastDisplayNameChange: !z,
                    numberOfDays: Se()().diff(D, "days")
                }), a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.M2, {
                    icon: Ne.UK,
                    size: "2x"
                })), a.createElement(A.A, {
                    xs: "10"
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !z,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return re(e.target.value)
                    },
                    placeholder: R.displayName,
                    type: "text",
                    value: ae
                }), a.createElement(Qe, {
                    canChangeDisplayName: z,
                    displayName: R.displayName,
                    displayNameAvailable: x,
                    displayNameValue: ae,
                    isRevert: !1,
                    latestChangedDate: D,
                    displayNameChecking: C,
                    validationError: Z,
                    displayNameChanged: E
                }))), a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, C && a.createElement(r.M2, {
                    icon: xe.z1,
                    spin: !0,
                    size: "2x"
                }), "" !== ae && !C && a.createElement(Te.A, {
                    "aria-label": x && N ? "Name is available" : "Name is unavailable",
                    ok: x && N
                }))), he && !E && a.createElement(b.A, null, a.createElement(A.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "confirm display name",
                    autoComplete: "off",
                    className: "form-control",
                    id: "confirmDisplayName",
                    name: "confirmDisplayName",
                    onChange: function(e) {
                        return $(e.target.value)
                    },
                    placeholder: "Please confirm display name",
                    type: "text",
                    value: W
                }), null !== q && a.createElement(Y.A, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, a.createElement(r.M2, {
                    icon: ke.$f
                }), " ".concat(q)))), a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== W && a.createElement(Te.A, {
                    "aria-label": null !== q ? q : "Confirmation name matches",
                    ok: null === q
                }))), ie && !E && a.createElement(b.A, {
                    className: "mt-2"
                }, a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.M2, {
                    icon: Ae.bM,
                    size: "2x"
                })), a.createElement(A.A, {
                    xs: "10"
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    "aria-label": "Please confirm current password",
                    className: "form-control",
                    id: "namePasswordVerify",
                    name: "namePasswordVerify",
                    onChange: function(e) {
                        return K(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: Q
                })))), a.createElement(b.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, we && a.createElement(A.A, {
                    xs: "6"
                }, a.createElement(k.A, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return de(!0)
                    }
                }, "Revert Display Name Change")), a.createElement(A.A, {
                    xs: "6"
                }, a.createElement(k.A, {
                    disabled: !z || !0 === C || null !== q || "" === W || "" === Q || null !== Z || "" === ae,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: ge
                }, "Change Display Name"))))))
            };
            var st = n(12378),
                ut = n(28337);
            const mt = function(e) {
                var t, n, l = e.user,
                    c = (l || {}).usesGeneratedPassword,
                    s = a.useState(""),
                    u = (0, i.A)(s, 2),
                    d = u[0],
                    p = u[1],
                    h = a.useState(""),
                    g = (0, i.A)(h, 2),
                    w = g[0],
                    E = g[1],
                    v = a.useState(""),
                    y = (0, i.A)(v, 2),
                    k = y[0],
                    x = y[1],
                    N = a.useState(!1),
                    C = (0, i.A)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, f.SV)(),
                    P = (0, i.A)(T, 2),
                    D = P[0],
                    F = P[1],
                    R = F.isLoading,
                    M = F.isSuccess,
                    I = F.isError,
                    z = F.error,
                    j = function(e) {
                        var t = e.newPassword;
                        return t && 0 !== t.length ? t.length < 8 ? "That password is too short" : (0, ut.v)(t) ? "Please try a more secure password" : null : null
                    }({
                        newPassword: w
                    }),
                    U = (n = {
                        newPassword: w,
                        confirmationNewPassword: k
                    }).newPassword !== n.confirmationNewPassword ? "Passwords don't match" : null,
                    V = !j,
                    q = !U && k.length > 0,
                    L = w.length > 0 && !j,
                    _ = L && k.length > 0 && !U && !c,
                    G = !j && !U && w === k && ("" !== d || c),
                    W = function() {
                        var e = (0, o.A)(m().mark(function e(t) {
                            var n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), G) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, n = {
                                            userId: l.id,
                                            password: w
                                        }, c || (n.currentPassword = d), e.next = 8, D(n).unwrap();
                                    case 8:
                                        p(""), E(""), x(""), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(3), console.error("Failed to change password:", e.t0);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 13]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = function(e) {
                        E(e.target.value)
                    },
                    B = function(e) {
                        x(e.target.value)
                    },
                    X = function(e) {
                        p(e.target.value)
                    };
                return a.useEffect(function() {
                    S || "" === d && "" === w && "" === k || O(!0)
                }, [d, w, k]), a.createElement(Pe.A, {
                    loading: R
                }, a.createElement("div", {
                    className: "center-panel"
                }, a.createElement("form", {
                    onSubmit: W
                }, I && a.createElement(Y.A, {
                    color: "warning"
                }, a.createElement(r.M2, {
                    icon: ke.$f
                }), " An error occurred: ", (null == z || null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown error"), a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.M2, {
                    icon: st.DW,
                    size: "2x"
                })), a.createElement(A.A, {
                    xs: "10"
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "newPassword",
                    name: "newPassword",
                    className: "form-control",
                    placeholder: "Please enter new password",
                    onChange: $,
                    onKeyUp: $
                }), j && a.createElement(Y.A, {
                    color: "warning"
                }, a.createElement(r.M2, {
                    icon: ke.$f
                }), " ", j), M && a.createElement(Y.A, {
                    color: "success"
                }, a.createElement(r.M2, {
                    icon: ke.$f
                }), " Your password has been changed!"))), a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, a.createElement(Te.A, {
                    ok: S ? V : null
                }))), L && a.createElement(b.A, null, a.createElement(A.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "confirmNewPassword",
                    name: "confirmNewPassword",
                    className: "form-control",
                    placeholder: "Please confirm new password",
                    onChange: B,
                    onKeyUp: B
                }), U && a.createElement(Y.A, {
                    color: "warning"
                }, a.createElement(r.M2, {
                    icon: ke.$f
                }), " ", U))), a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, a.createElement(Te.A, {
                    ok: q
                }))), _ && a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, a.createElement(r.M2, {
                    icon: Ae.bM,
                    size: "2x"
                })), a.createElement(A.A, {
                    xs: "10"
                }, a.createElement(b.A, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "password",
                    id: "passwordPasswordVerify",
                    name: "passwordPasswordVerify",
                    className: "form-control",
                    placeholder: "Please confirm current password",
                    onChange: X,
                    onKeyUp: X
                })))), a.createElement(b.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, a.createElement(A.A, {
                    xs: "4"
                }, a.createElement("button", {
                    disabled: !G,
                    className: "btn btn-primary w-100",
                    id: "password-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    type: "submit"
                }, "Change Password"))))))
            };
            var dt = n(6241),
                pt = n(48994);
            const ft = function() {
                var e, t, n = (0, p.wA)(),
                    l = (0, S.p$)().data,
                    c = null == l || null === (e = l.presence) || void 0 === e ? void 0 : e.world,
                    s = (0, f.ER)({
                        userId: null == l ? void 0 : l.id,
                        worldId: c
                    }, {
                        skip: !c
                    }),
                    u = s.isLoading,
                    d = s.isError,
                    g = !(u || d),
                    w = (0, f.Ns)(),
                    E = (0, i.A)(w, 2),
                    v = E[0],
                    y = E[1],
                    b = y.isLoading,
                    A = y.isError,
                    k = y.error,
                    x = y.reset,
                    N = a.useState(!1),
                    C = (0, i.A)(N, 2),
                    O = C[0],
                    T = C[1],
                    P = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            return m().wrap(function(e) {
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
                                        T(!1), n((0, h.X)({
                                            title: "All User Data Reset",
                                            icon: pt.XK,
                                            message: "Your user data has been reset in all worlds you've visited. Rejoin worlds for changes to take effect.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 5]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    D = g ? "This action will reset your user data in all worlds you've visited except any world you're currently in. To reset that world's data, please exit it first, then go to \"Reset User Data\" in the world's details." : "This action will reset your user data in all worlds you've visited. Rejoin worlds for changes to take effect.";
                return a.createElement(a.Fragment, null, a.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), a.createElement(r.$n, {
                    type: "button",
                    onClick: function() {
                        T(!0)
                    },
                    danger: !0
                }, a.createElement(r.M2, {
                    icon: dt.faUserXmark
                }), " Reset All User Data"), a.createElement(r.uo, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: P,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        T(!1), x()
                    },
                    isOpen: O,
                    isLoading: b
                }, a.createElement("p", null, D), a.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), A && a.createElement(r.$T, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == k || null === (t = k.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var ht = n(48645);
            var gt = (0, c.A)("div", {
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
                    u = (0, a.useState)(null),
                    m = (0, i.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    h = (0, f.au)(),
                    g = (0, i.A)(h, 2),
                    w = g[0],
                    E = g[1],
                    v = E.isError,
                    y = E.error,
                    x = (0, f.nz)(),
                    N = (0, i.A)(x, 2),
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
                (0, a.useEffect)(function() {
                    return window.addEventListener("OneTrustGroupsUpdated", P),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", P)
                        }
                }, []);
                var D = v || O ? (null == y || null === (t = y.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || (null == T || null === (n = T.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "An error occurred while updating your shared connections setting." : d;
                return a.createElement("div", {
                    className: "center-panel"
                }, a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), D ? a.createElement(Y.A, {
                    className: "warning"
                }, a.createElement(r.M2, {
                    icon: ht.QJ
                }), " ", d) : a.createElement(b.A, null, a.createElement(A.A, {
                    xs: "10"
                }, a.createElement(k.A, {
                    type: "button",
                    color: "primary",
                    onClick: P
                }, "Change Cookie and Consent Settings"))), a.createElement(gt, {
                    className: "mt-3"
                }, a.createElement(Q.A, {
                    label: "Show Mutual Friend and Group Connections",
                    defaultChecked: !c,
                    onChangeCallback: function() {
                        return w({
                            hasSharedConnectionsOptOut: !c,
                            userId: l.id
                        })
                    }
                })), a.createElement(gt, {
                    className: "mt-3"
                }, a.createElement(Q.A, {
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
            var Et = n(23029),
                vt = n(92901),
                yt = n(9417),
                bt = n(85501),
                At = n(34441),
                kt = n(53954),
                xt = n(49107),
                Nt = n(79162),
                Ct = n(67256),
                St = n(71783),
                Ot = n(60380),
                Tt = n(12438),
                Pt = n(59399),
                Dt = n(35169),
                Ft = n(75255),
                Rt = n(86878),
                Mt = n(72505),
                It = n.n(Mt),
                zt = function() {
                    return {
                        type: "TWOFACTORAUTH_REMOVE",
                        payload: It().delete(window.apiUrl("/api/1/auth/twofactorauth"))
                    }
                },
                jt = function() {
                    return {
                        type: "TWOFACTORAUTH_GET_OTP",
                        payload: It().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
                    }
                };

            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function Vt(e) {
                var t = qt();
                return function() {
                    var n, a = (0, kt.A)(e);
                    if (t) {
                        var r = (0, kt.A)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, At.A)(this, n)
                }
            }

            function qt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (qt = function() {
                    return !!e
                })()
            }
            var Lt = "https://docs.vrchat.com/docs/setup-2fa",
                _t = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                Gt = "otpDownload",
                Wt = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                $t = function(e) {
                    (0, bt.A)(n, e);
                    var t = Vt(n);

                    function n(e) {
                        var r;
                        return (0, Et.A)(this, n), r = t.call(this, e), (0, J.A)((0, yt.A)(r), "getOneTimePasswords", (0, o.A)(m().mark(function e() {
                            var t, n, a;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return clearTimeout(r.state.forgetOtpTimeout), t = setTimeout(function() {
                                            r.setState({
                                                isOneTimePasswordsShown: !1
                                            }), r.props.dispatch({
                                                type: "TWOFACTORAUTH_FORGET_OTP"
                                            })
                                        }, 6e4), r.setState({
                                            forgetOtpTimeout: t
                                        }), e.prev = 3, e.next = 6, r.props.dispatch(jt());
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
                            }, e, null, [
                                [3, 10]
                            ])
                        }))), (0, J.A)((0, yt.A)(r), "disable", function() {
                            var e = (0, o.A)(m().mark(function e(t) {
                                var n, a;
                                return m().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, r.props.dispatch(zt());
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
                                }, e, null, [
                                    [1, 8]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), r.state = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ut(Object(n), !0).forEach(function(t) {
                                    (0, J.A)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, Wt), r.ref = a.createRef(), r.enable = r.enable.bind((0, yt.A)(r)), r.renderSetup = r.renderSetup.bind((0, yt.A)(r)), r.renderStatus = r.renderStatus.bind((0, yt.A)(r)), r.handleChangeVerifyCode = r.handleChangeVerifyCode.bind((0, yt.A)(r)), r.handleVerifyPendingSecret = r.handleVerifyPendingSecret.bind((0, yt.A)(r)), r.isSettingUp = r.isSettingUp.bind((0, yt.A)(r)), r.cancelSecret = r.cancelSecret.bind((0, yt.A)(r)), r.showTextKey = r.showTextKey.bind((0, yt.A)(r)), r.goToStep0 = r.goToStep0.bind((0, yt.A)(r)), r.goToStep1 = r.goToStep1.bind((0, yt.A)(r)), r.goToStep2 = r.goToStep2.bind((0, yt.A)(r)), r.toggleOneTimePasswordsShown = r.toggleOneTimePasswordsShown.bind((0, yt.A)(r)), r.hasOneTimePasswords = r.hasOneTimePasswords.bind((0, yt.A)(r)), r.getOneTimePasswordHref = r.getOneTimePasswordHref.bind((0, yt.A)(r)), r.downloadOneTimePasswords = r.downloadOneTimePasswords.bind((0, yt.A)(r)), r.triggerOtpDownloadLink = r.triggerOtpDownloadLink.bind((0, yt.A)(r)), r
                    }
                    return (0, vt.A)(n, [{
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
                                payload: It().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
                                    code: n
                                })
                            }))), e.preventDefault()
                        }
                    }, {
                        key: "getOneTimePasswordHref",
                        value: function() {
                            var e = this.props.twoFactorAuth,
                                t = "";
                            return this.hasOneTimePasswords() && (t = "".concat("VRChat Two-Factor Authentication recovery codes\n===============================================\n\nYou can use these to log in, in case you lose access to your authenticator app codes. \n\nYou can only use each recovery code once.\n\nKeep these safe and secure! Printing them out is a very good idea.\n\n").concat(e.otp.filter(function(e) {
                                return !e.used
                            }).map(function(e) {
                                return "".concat(_t(e.code), "\n")
                            }).join(""))), "data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))
                        }
                    }, {
                        key: "isSettingUp",
                        value: function() {
                            return null != this.props.twoFactorAuth.pendingSecret
                        }
                    }, {
                        key: "enable",
                        value: function(e) {
                            e.preventDefault(), this.setState(Wt), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: It().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(Wt), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: It().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
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
                            e.preventDefault(), this.state.isOneTimePasswordsShown || this.getOneTimePasswords(), this.setState(function(e) {
                                return {
                                    isOneTimePasswordsShown: !e.isOneTimePasswordsShown
                                }
                            })
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
                            document.getElementById(Gt).click(), this.setState({
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
                                        return a.createElement("div", null, a.createElement("div", null, a.createElement("p", null, a.createElement(r.M2, {
                                            icon: Tt.rQ,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", a.createElement("a", {
                                            href: Lt,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), a.createElement("p", null, a.createElement(Ft.A, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), a.createElement("div", null, a.createElement("p", null, a.createElement(r.M2, {
                                            icon: ht.QJ,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), a.createElement("p", null, "We", " ", a.createElement("strong", null, a.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && a.createElement(Y.A, {
                                            color: "warning"
                                        }, a.createElement(r.M2, {
                                            icon: ht.QJ
                                        }), " Something went wrong downloading recovery codes."), a.createElement("div", null, a.createElement("p", null, a.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, a.createElement(Ft.A, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), a.createElement("span", null, a.createElement(Ft.A, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), a.createElement("a", {
                                            id: Gt,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return a.createElement("div", null, a.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", a.createElement("a", {
                                        href: Lt,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), a.createElement("p", null, a.createElement(Ft.A, {
                                        onClick: e.enable,
                                        color: "primary",
                                        loading: l.isAwaitingPendingSecret
                                    }, "Enable")))
                                };
                            return a.createElement("div", null, o(), e.state.isOneTimePasswordsShown && e.hasOneTimePasswords() ? a.createElement("div", null, a.createElement("ol", null, l.otp.map(function(e) {
                                return a.createElement("li", {
                                    key: "otp_code_".concat(e.code)
                                }, a.createElement("span", {
                                    style: {
                                        textDecoration: e.used ? "line-through" : "none"
                                    }
                                }, _t(e.code)))
                            }))) : null)
                        }
                    }, {
                        key: "renderSetup",
                        value: function() {
                            var e, t, n = this.props.twoFactorAuth,
                                l = this.state.isCodeReady && !n.isAwaitingPendingSecretVerification,
                                o = n.isAwaitingPendingSecret || n.isRemovingPendingSecret,
                                i = n.isVerificationRejected && this.state.isPreviousSubmissionRelevant,
                                c = (e = n.pendingSecret, e.match(/.{1,4}/g).join(" ")).toLowerCase();
                            return a.createElement(Pe.A, {
                                loading: o
                            }, a.createElement(b.A, null, a.createElement(A.A, null, a.createElement("h4", null, "Setup")), a.createElement(A.A, {
                                className: "text-end"
                            }, a.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: Lt,
                                rel: "noreferrer"
                            }, "Help"), a.createElement(k.A, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, a.createElement(r.M2, {
                                icon: de.GR
                            }), " Cancel"))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement("hr", null))), a.createElement(b.A, null, a.createElement(Dt.A, {
                                hidden: 0 !== this.state.step
                            }, a.createElement(b.A, null, a.createElement(A.A, {
                                classname: "tw-flex"
                            }, a.createElement(b.A, null, a.createElement("div", {
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
                            }, a.createElement(r.M2, {
                                icon: Ot.dm,
                                size: "4x",
                                className: "tw-mr-1"
                            }), a.createElement(r.M2, {
                                icon: St.gg,
                                size: "4x"
                            }))))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement("hr", null))), a.createElement(b.A, null, a.createElement(A.A, {
                                className: "text-end"
                            }, a.createElement(k.A, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", a.createElement(r.M2, {
                                icon: Nt.Xk
                            }))))), a.createElement(Dt.A, {
                                hidden: 1 !== this.state.step
                            }, a.createElement(b.A, null, a.createElement(A.A, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), a.createElement("p", null, "If you can't scan the code,", " ", a.createElement(Yt, {
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
                            }), a.createElement(Pt.CopyToClipboard, {
                                text: c
                            }, a.createElement(k.A, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, a.createElement(r.M2, {
                                icon: Ct.jP
                            }), " Copy"))))), a.createElement(A.A, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("p", null, a.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(c)
                            })))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement("hr", null))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement(k.A, {
                                onClick: this.goToStep0
                            }, a.createElement(r.M2, {
                                icon: xt.Wz
                            }), " Previous")), a.createElement(A.A, {
                                className: "text-end"
                            }, a.createElement(k.A, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", a.createElement(r.M2, {
                                icon: Nt.Xk
                            }))))), a.createElement(Dt.A, {
                                hidden: 2 !== this.state.step
                            }, a.createElement(b.A, null, a.createElement(A.A, {
                                xs: {
                                    size: "7"
                                }
                            }, a.createElement("p", null, a.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), a.createElement(A.A, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, a.createElement("div", null, i && a.createElement(Y.A, {
                                color: "warning"
                            }, a.createElement(r.M2, {
                                icon: ht.QJ
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
                            }), a.createElement(Ft.A, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement("hr", null))), a.createElement(b.A, null, a.createElement(A.A, null, a.createElement(k.A, {
                                onClick: this.goToStep1
                            }, a.createElement(r.M2, {
                                icon: xt.Wz
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
            const Bt = (0, Rt.A)((0, p.Ng)(function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            })($t));
            var Yt = (0, c.A)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const Xt = function() {
                var e = (0, l.a$)().user;
                return a.createElement("div", null, a.createElement(r.Qc, null, "Account Settings"), a.createElement("h2", null, "Account Settings"), a.createElement(r.N3, null, a.createElement("h4", null, "Change Display Name")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(ct, null)), a.createElement(r.N3, null, a.createElement("h4", null, "Change Email")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(be.A, null)), a.createElement(r.N3, null, a.createElement("h4", null, "Change Password")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(mt, {
                    user: e
                })), a.createElement(r.N3, null, a.createElement("h4", null, "Two-factor authentication")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(Bt, null)), a.createElement(r.N3, null, a.createElement("h4", null, "Account Linking")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(z, {
                    user: e
                })), a.createElement(r.N3, null, a.createElement("h4", null, "Privacy")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(wt, {
                    user: e
                })), a.createElement(r.N3, null, a.createElement("h4", null, "Age Verification")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(W, null)), a.createElement(r.N3, null, a.createElement("h4", null, "Copyright")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(ye, null)), !(null != e && e.hideContentFilterSettings) && a.createElement(a.Fragment, null, a.createElement(r.N3, null, a.createElement("h4", null, "Content Gating")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(H, null))), a.createElement(r.N3, null, a.createElement("h4", null, "User Data")), a.createElement(r.BW, {
                    className: "mb-2"
                }, a.createElement(ft, null)), a.createElement(r._F, {
                    className: "mb-2"
                }, a.createElement(r.N3, null, a.createElement("h4", null, "Danger Zone")), a.createElement(r.BW, null, a.createElement(g, null))))
            }
        },
        32254(e, t, n) {
            n.d(t, {
                A: () => x
            });
            var a = n(82544),
                r = n(32110),
                l = n(96704),
                o = n(7612),
                i = n(81617),
                c = n(69629),
                s = n(6913),
                u = n(48645),
                m = n(96540),
                d = n(5826),
                p = n(39704),
                f = n(30104),
                h = n(85052),
                g = n(69517),
                w = n.n(g),
                E = n(194),
                v = n(13951),
                y = n(71957),
                b = n(15033),
                A = n(78479),
                k = n(44034);
            const x = function() {
                var e = (0, v.p$)().data,
                    t = (0, m.useState)(""),
                    n = (0, a.A)(t, 2),
                    g = n[0],
                    x = n[1],
                    N = (0, m.useState)(""),
                    C = (0, a.A)(N, 2),
                    S = C[0],
                    O = C[1],
                    T = (0, m.useState)(""),
                    P = (0, a.A)(T, 2),
                    D = P[0],
                    F = P[1],
                    R = (0, E.d7)(g),
                    M = (0, y.Fx)(),
                    I = (0, a.A)(M, 2),
                    z = I[0],
                    j = I[1],
                    U = j.isFetching,
                    V = j.isError,
                    q = j.isSuccess,
                    L = j.error,
                    _ = j.originalArgs,
                    G = (0, y.am)(),
                    W = (0, a.A)(G, 2),
                    $ = W[0],
                    B = W[1],
                    Y = B.isLoading,
                    X = B.isError,
                    Q = B.error,
                    K = (0, v.B3)(),
                    H = (0, a.A)(K, 2),
                    J = H[0],
                    Z = H[1],
                    ee = Z.isFetching,
                    te = Z.isError,
                    ne = Z.error,
                    ae = Z.isSuccess,
                    re = (0, y.lM)({
                        email: R,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === R || !1 === w()(R)
                    }),
                    le = re.data,
                    oe = re.isFetching,
                    ie = re.isSuccess,
                    ce = re.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)(function() {
                    O(""), F("")
                }, [g]);
                var ue = (0, m.useMemo)(function() {
                        return ie && !1 === le.userExists && w()(R) && "" !== R
                    }, [le, R]),
                    me = (0, m.useMemo)(function() {
                        return "" !== S && S === R
                    }, [S, R]),
                    de = (0, m.useMemo)(function() {
                        if (!1 === w()(R) && "" !== R) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == ce ? void 0 : ce.email) === R) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That email is already in use.");
                        if (X) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " Failed to change news preference: ", Q, ".");
                        if (V && (null == _ ? void 0 : _.email) === R) {
                            F("");
                            var t = L.data.error.message;
                            return m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(b.M2, {
                                icon: u.QJ
                            }), " Failed to change email: ", t)
                        }
                        if (ue && "" !== S && S !== R) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " Confirm email does not match.");
                        if (te) {
                            var n = ne.data.error.message;
                            return m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(b.M2, {
                                icon: u.QJ
                            }), " Failed to resend verification email: ", n)
                        }
                        return ae ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : q ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }, [ae, te, V, q, le, ie, S, R, e, X]),
                    pe = (0, m.useMemo)(function() {
                        return !se || q ? m.createElement("span", null, m.createElement(b.M2, {
                            icon: c.is
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.M2, {
                            icon: i.e6,
                            color: "success"
                        }), " Email Verified")
                    }, [se, q]),
                    fe = (0, m.useMemo)(function() {
                        return oe ? m.createElement(b.M2, {
                            icon: o.z1,
                            spin: !0,
                            size: "2x"
                        }) : "" === R ? null : ue ? m.createElement(A.A, {
                            size: "2x",
                            ok: !0,
                            title: "This email is OK"
                        }) : m.createElement(A.A, {
                            size: "2x",
                            ok: !1,
                            title: "This email is not OK"
                        })
                    }, [oe, R, ue]);
                return m.createElement("form", null, m.createElement(d.A, {
                    className: "align-items-center justify-content-center"
                }, m.createElement(p.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "mx-0 mb-1"
                }, "To change your email, enter the desired email below")), m.createElement(d.A, null, m.createElement(p.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.M2, {
                    icon: l.Hz,
                    size: "2x"
                })), m.createElement(p.A, {
                    xs: "10"
                }, m.createElement(d.A, {
                    className: "mx-0"
                }, m.createElement("input", {
                    "aria-label": "new email",
                    className: "form-control",
                    autoComplete: "off",
                    name: "email",
                    onChange: function(e) {
                        return x(e.target.value)
                    },
                    placeholder: null == e ? void 0 : e.obfuscatedEmail,
                    type: "text",
                    value: g
                }))), m.createElement(p.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, fe)), ue && m.createElement(d.A, null, m.createElement(p.A, {
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
                        return O(e.target.value)
                    },
                    placeholder: "Please confirm email",
                    type: "text",
                    value: S
                }))), m.createElement(p.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== S && m.createElement(A.A, {
                    size: "2x",
                    ok: me,
                    title: "Confirm email is OK"
                }))), me && m.createElement(d.A, null, m.createElement(p.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, m.createElement(b.M2, {
                    icon: r.bM,
                    size: "2x"
                })), m.createElement(p.A, {
                    xs: "10"
                }, m.createElement(d.A, {
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
                    value: D
                })))), m.createElement(d.A, {
                    className: "align-items-center justify-content-center px-3 pt-3"
                }, de), m.createElement("hr", null), m.createElement(d.A, null, m.createElement(p.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, m.createElement(k.A, {
                    id: "subscribe",
                    checked: !(null != e && e.unsubscribe),
                    onChange: function(t) {
                        return $({
                            userId: e.id,
                            subscribe: t.target.checked
                        })
                    },
                    label: "Keep me up to date with the awesome power of your emails",
                    htmlFor: "subscribe",
                    disabled: Y
                }))), m.createElement("hr", null), m.createElement(d.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(p.A, {
                    xs: "4"
                }, m.createElement(f.A, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !q || ee,
                    onClick: function() {
                        return J()
                    },
                    outline: !0
                }, pe)), m.createElement(p.A, {
                    xs: "4"
                }, m.createElement(f.A, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || U || "" === D,
                    id: "email-change-submit",
                    name: "email-change-submit",
                    value: "update",
                    onClick: function(t) {
                        t.preventDefault(), z({
                            userId: null == e ? void 0 : e.id,
                            email: R,
                            password: D
                        })
                    }
                }, "Change Email"))))
            }
        },
        29281(e, t, n) {
            n.d(t, {
                AP: () => i,
                CV: () => l,
                J_: () => o,
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
                l = a.useGetAgeVerificationStatusQuery,
                o = a.useSendGroupInquiryLinkMutation,
                i = a.useSendInquiryLinkMutation
        },
        49843(e, t, n) {
            n.d(t, {
                Ds: () => s,
                Ee: () => c,
                QS: () => u,
                yf: () => m
            });
            var a = n(64467),
                r = n(89483);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var i = r.m.injectEndpoints({
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
                                invalidatesTags: (0, r.Z)(function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                })
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
                                invalidatesTags: (0, r.Z)(function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                })
                            })
                        }
                    }
                }),
                c = i.useGetRestrictedContentQuery,
                s = i.useRequestContentRestrictionMutation,
                u = i.useDisputeContentRestrictionMutation,
                m = i.useDeleteDisputeMutation
        },
        28337(e, t, n) {
            n.d(t, {
                v: () => r
            });
            var a = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                r = function(e) {
                    return a.has(e.toLowerCase())
                }
        },
        58622(e, t, n) {
            n.d(t, {
                O: () => o
            });
            var a = n(10467),
                r = n(54756),
                l = n.n(r),
                o = function() {
                    var e = (0, a.A)(l().mark(function e() {
                        var t, n, a, r, o, i, c, s, u, m, d, p, f, h = arguments;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (t = h.length > 0 && void 0 !== h[0] ? h[0] : {}).redirectTo, a = void 0 === n ? "/home/login" : n, r = t.version, o = void 0 === r ? 2 : r, i = ["openid", "identify", "email", "sdk.social_layer_presence"], c = window.location.origin + window.location.pathname, s = c.split("/home/"), c = "".concat(s[0], "/home/discord/auth").concat(2 === o ? "/v2" : ""), u = {
                                        redirectUri: c,
                                        isMobileRequest: !1,
                                        redirectTo: a
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
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        22479(e, t, n) {
            n.d(t, {
                B: () => c
            });
            var a = n(10467),
                r = n(54756),
                l = n.n(r),
                o = n(66948),
                i = ["openid", "email", "profile"],
                c = function() {
                    var e = (0, a.A)(l().mark(function e() {
                        var t, n;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = new URLSearchParams({
                                        client_id: "827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com",
                                        redirect_uri: window.location.origin + window.location.pathname,
                                        response_type: "id_token",
                                        scope: i.join(" "),
                                        nonce: (0, o.A)()
                                    }), n = "https://accounts.google.com/o/oauth2/v2/auth?".concat(t.toString()), window.location.href = n;
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        53369(e, t, n) {
            n.d(t, {
                h: () => a
            });
            var a = function(e) {
                if (null != e && e.requiresTwoFactorAuth) {
                    var t, n, a = "/home/stepupauth";
                    return "emailOtp" === (null === (t = e.requiresTwoFactorAuth) || void 0 === t ? void 0 : t[0]) && (a = "/home/emailstepupauth"), 0 === (null === (n = e.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) && e.ticket && (a = "/home/verify-password"), a
                }
                return null
            }
        },
        34450(e, t, n) {
            e.exports = n.p + "53f4092cfcb77e5217e639fd7a2012ff35100e4d9b6ed70707b47746bcb81c86.svg"
        }
    }
]);
//# sourceMappingURL=96c749fdb3e66b162ec52a3eb374b36e243e611eae3049a24853fbf50f9ed754.js.map