"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8202], {
        78479(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(58168),
                a = n(80045),
                l = n(19179),
                o = n(81617),
                c = n(96540),
                i = n(6324),
                s = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.A)(e, s);
                return null === n ? null : n ? c.createElement(i.A, (0, r.A)({
                    icon: o.e6,
                    size: m,
                    className: "text-success"
                }, d)) : c.createElement(i.A, (0, r.A)({
                    icon: l.GR,
                    size: m,
                    className: "text-warning"
                }, d))
            };
            n.dn(u)
        },
        75255(e, t, n) {
            n.d(t, {
                A: () => c
            });
            var r = n(7612),
                a = n(96540),
                l = n(30104),
                o = n(6324);
            const c = function(e) {
                var t = e.loading,
                    n = e.className,
                    c = e.onClick,
                    i = e.color,
                    s = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return a.createElement(l.A, {
                    className: n,
                    onClick: c,
                    color: i,
                    hidden: u,
                    disabled: m
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, s), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(o.A, {
                    icon: r.z1,
                    spin: !0
                })))
            };
            n.dn(c)
        },
        86878(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(58168),
                a = n(96540),
                l = n(47767);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.zy)(),
                        o = (0, l.Zp)(),
                        c = (0, l.g)();
                    return a.createElement(e, (0, r.A)({}, t, {
                        router: {
                            location: n,
                            navigate: o,
                            params: c
                        }
                    }))
                }
            }
        },
        18202(e, t, n) {
            n.r(t), n.d(t, {
                default: () => en
            });
            var r = n(96540),
                a = n(71661),
                l = n(78502),
                o = n(10467),
                c = n(82544),
                i = n(70129),
                s = n(34496),
                u = n(54756),
                m = n.n(u),
                d = n(47767),
                p = n(6376),
                f = n(71957),
                h = n(65950);
            const w = function() {
                var e = (0, d.Zp)(),
                    t = (0, p.wA)(),
                    n = (0, f.TP)(),
                    i = (0, c.A)(n, 2),
                    u = i[0],
                    w = i[1].isSuccess,
                    E = (0, l.a$)().user,
                    y = r.useState(!1),
                    b = (0, c.A)(y, 2),
                    A = b[0],
                    k = b[1],
                    x = r.useState(!1),
                    N = (0, c.A)(x, 2),
                    C = N[0],
                    S = N[1],
                    T = function() {
                        k(!1), S(!1)
                    },
                    O = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var n, r, a;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(!1), S(!1), e.next = 4, u({
                                            userId: E.id
                                        });
                                    case 4:
                                        (n = e.sent).error && t((0, h.X)({
                                            title: "Failed to delete your account",
                                            icon: s.zp,
                                            message: null !== (r = null === (a = n.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong",
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
                return r.createElement("div", null, r.createElement(a.$n, {
                    type: "button",
                    className: "btn-danger",
                    onClick: function() {
                        k(!0)
                    },
                    danger: !0
                }, "Delete Account"), r.createElement(a.uo, {
                    headerText: "Are You Sure?",
                    bodyText: "Are you sure you want to delete your account? This is permanent and non-reversible. VRChat cannot recover your account once this is complete and any VRC+ subscriptions will be canceled. ",
                    confirmCallback: function() {
                        k(!1), S(!0)
                    },
                    cancelCallback: T,
                    isOpen: A
                }), r.createElement(a.uo, {
                    headerText: "Are You Really Sure?",
                    confirmCallback: O,
                    cancelCallback: T,
                    isOpen: C
                }, r.createElement("p", null, "Are you absolutely sure? Again, this is permanent and non-reversible. VRChat cannot recover your account once this is complete."), r.createElement("p", null, "If you click OK, your account will be queued for deletion. After 14 days, your account will be deleted. All content that has been uploaded on this account will be deleted. Any VRC+ subscriptions will be immediately canceled regardless of the 14 day grace period."), r.createElement("p", null, "If you log into VRChat Home or the VRChat application during this time, the deletion will be canceled. However if you previously had a VRC+ subscription you will need to re-subscribe once the canceled subscription expires")), w && r.createElement(a.aF, {
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
                }, r.createElement(g, null, r.createElement(v, null, "Your account is queued for deletion and will be deleted in 14 days. If you log into the application or the website, the deletion will be cancelled. You will now be logged out of the website and application."))))
            };
            var g = (0, i.A)(a.fv, {
                    target: "e1c8z0io1"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                v = (0, i.A)("p", {
                    target: "e1c8z0io0"
                })({
                    name: "1tmloek",
                    styles: "text-align:center;margin-right:100px;margin-left:100px"
                }),
                E = n(64850),
                y = n(25161),
                b = n(5826),
                A = n(39704),
                k = n(30104),
                x = n(25423),
                N = n(17535),
                C = n(97890),
                S = n(13951),
                T = n(58622),
                O = n(22479),
                P = function() {
                    var e = (0, o.A)(m().mark(function e() {
                        var t, n, r, a, l, o, c, i, s, u = arguments;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = (u.length > 0 && void 0 !== u[0] ? u[0] : {}).redirectTo, n = void 0 === t ? "/home/profile" : t, r = window.location.origin + window.location.pathname, a = r.split("/home/"), r = "".concat(a[0], "/home/twitch/auth"), l = {
                                        redirectUri: r,
                                        redirectTo: n
                                    }, o = JSON.stringify(l), c = btoa(o), i = new URLSearchParams({
                                        client_id: "ym4yaez8f1d4om9tsbn22wmg13oofn",
                                        redirect_uri: l.redirectUri,
                                        response_type: "code",
                                        scope: "user:read:email",
                                        state: c
                                    }), s = "https://id.twitch.tv/oauth2/authorize?".concat(i.toString()), window.location.href = s;
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                D = n(53369),
                F = n(84976),
                R = "link_discord",
                I = "unlink_discord",
                M = "link_google",
                z = "unlink_google",
                U = "link_twitch",
                j = "unlink_twitch";
            const L = function(e) {
                var t = e.user || {},
                    n = t.discordId,
                    l = t.googleId,
                    i = t.twitchId,
                    s = t.twitchDetails,
                    u = t.displayName,
                    f = t.id,
                    w = (0, d.zy)().state,
                    g = (0, r.useState)(null),
                    v = (0, c.A)(g, 2),
                    L = v[0],
                    V = v[1],
                    q = (0, r.useState)(null),
                    _ = (0, c.A)(q, 2),
                    G = _[0],
                    W = _[1],
                    $ = (0, r.useState)(null),
                    Y = (0, c.A)($, 2),
                    B = Y[0],
                    X = Y[1],
                    Q = (0, r.useState)(null),
                    K = (0, c.A)(Q, 2),
                    H = K[0],
                    J = K[1],
                    Z = (0, d.Zp)(),
                    ee = (0, p.wA)(),
                    te = (0, F.ok)(),
                    ne = (0, c.A)(te, 2),
                    re = ne[0],
                    ae = (ne[1], (0, S.nW)()),
                    le = (0, c.A)(ae, 2),
                    oe = le[0],
                    ce = le[1].isLoading,
                    ie = (0, S.oX)(),
                    se = (0, c.A)(ie, 2),
                    ue = se[0],
                    me = se[1].isLoading,
                    de = (0, S.Nu)(),
                    pe = (0, c.A)(de, 2),
                    fe = pe[0],
                    he = pe[1].isLoading,
                    we = (0, S.c3)(),
                    ge = (0, c.A)(we, 2),
                    ve = ge[0],
                    Ee = ge[1].isLoading,
                    ye = (0, S.jz)(),
                    be = (0, c.A)(ye, 2),
                    Ae = be[0],
                    ke = be[1].isLoading,
                    xe = (0, S.yE)(),
                    Ne = (0, c.A)(xe, 2),
                    Ce = Ne[0],
                    Se = Ne[1].isLoading,
                    Te = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, r, a, l, o, c, i, s = arguments;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = s.length > 0 && void 0 !== s[0] ? s[0] : G) && !n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, ue({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        V(null), W(null), ee((0, h.X)({
                                            title: "Link Discord Account",
                                            icon: y.CQ,
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
                                        return o = e.t0.data, c = (0, D.h)(o), i = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: L,
                                                continueDiscordAccessToken: t,
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.zN.DISCORD
                                            }
                                        }, e.abrupt("return", Z(c, {
                                            state: i
                                        }));
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), V(null), W(null), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== a ? a : "Discord Linking Failed",
                                            icon: E.X4,
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
                    Oe = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n, r, a, o, c, i, s = arguments;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = s.length > 0 && void 0 !== s[0] ? s[0] : B) && !l) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, fe({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        V(null), X(null), ee((0, h.X)({
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
                                        return o = e.t0.data, c = (0, D.h)(o), i = {
                                            redirectTo: "/home/profile",
                                            scope: o.scope,
                                            ticket: o.ticket,
                                            stepUpToken: o.stepUpToken,
                                            redirectState: {
                                                selectedAction: L,
                                                continueGoogleIdToken: t,
                                                redirectTo: "/home/profile",
                                                oauthProvider: C.zN.GOOGLE
                                            }
                                        }, e.abrupt("return", Z(c, {
                                            state: i
                                        }));
                                    case 18:
                                        return console.error("Failed to link Google account:", e.t0), V(null), X(null), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (r = null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Google Linking Failed",
                                            icon: E.X4,
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
                    Pe = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, oe().unwrap();
                                    case 3:
                                        V(null), ee((0, h.X)({
                                            title: "Unlink Discord Account",
                                            icon: y.CQ,
                                            message: "Successfully unlinked Discord account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Discord account:", e.t0), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Discord Unlinking Failed",
                                            icon: E.X4,
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
                    De = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ve().unwrap();
                                    case 3:
                                        V(null), ee((0, h.X)({
                                            title: "Unlink Google Account",
                                            icon: y.CQ,
                                            message: "Successfully unlinked Google account.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Google account:", e.t0), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Google Unlinking Failed",
                                            icon: E.X4,
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
                    Fe = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n, r, a = arguments;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = a.length > 0 && void 0 !== a[0] ? a[0] : H) && !i) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, Ae({
                                            token: t
                                        }).unwrap();
                                    case 6:
                                        V(null), J(null), ee((0, h.X)({
                                            title: "Twitch Account Linked",
                                            icon: y.CQ,
                                            message: "Your Twitch account is linked. You're ready to receive Twitch Drops.",
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 17;
                                        break;
                                    case 11:
                                        return e.prev = 11, e.t0 = e.catch(3), console.error("Failed to link Twitch account:", e.t0), V(null), J(null), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (n = null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== n ? n : "Twitch Linking Failed",
                                            icon: E.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 17:
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
                    Re = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var t, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Ce().unwrap();
                                    case 3:
                                        V(null), ee((0, h.X)({
                                            title: "Twitch Account Unlinked",
                                            icon: y.CQ,
                                            message: "Your Twitch account has been unlinked.",
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 11;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to unlink Twitch account:", e.t0), e.abrupt("return", ee((0, h.X)({
                                            title: "Failure",
                                            message: null !== (t = null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Twitch Unlinking Failed",
                                            icon: E.X4,
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
                    Ie = function() {
                        Me || (V(null), W(null), X(null), J(null))
                    };
                (0, r.useEffect)(function() {
                    (0, o.A)(m().mark(function e() {
                        var t;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = null == w ? void 0 : w.discordToken) && !n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    V(R), W(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, r.useEffect)(function() {
                    (0, o.A)(m().mark(function e() {
                        var t;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = null == w ? void 0 : w.twitchToken) && !i) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    V(U), J(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, r.useEffect)(function() {
                    null != w && w.twitchError && ee((0, h.X)({
                        title: "Twitch Linking Failed",
                        message: w.twitchError,
                        icon: E.X4,
                        color: "danger",
                        timeout: 5e3
                    }))
                }, []), (0, r.useEffect)(function() {
                    (null == w ? void 0 : w.selectedAction) === R && null != w && w.continueDiscordAccessToken && Te(w.continueDiscordAccessToken), (null == w ? void 0 : w.selectedAction) === M && null != w && w.continueGoogleIdToken && Oe(w.continueGoogleIdToken)
                }, []), (0, r.useEffect)(function() {
                    var e = re.get("prompt"),
                        t = re.get("requestingUserId");
                    "linkDiscordAccount" === e && t && t === f && !n && (0, T.O)({
                        redirectTo: "/home/profile"
                    })
                }, []), (0, r.useEffect)(function() {
                    var e = re.get("prompt"),
                        t = re.get("requestingUserId");
                    "linkGoogleAccount" === e && t && t === f && !l && (0, O.B)({
                        redirectTo: "/home/profile"
                    })
                }, []), (0, r.useEffect)(function() {
                    var e = re.get("prompt"),
                        t = re.get("requestingUserId");
                    "linkTwitchAccount" === e && t && t === f && !i && P({
                        redirectTo: "/home/profile"
                    })
                }, []), (0, r.useEffect)(function() {
                    (0, o.A)(m().mark(function e() {
                        var t, n, r, a;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = window.location.hash.substring(1), n = new URLSearchParams(t), r = n.get("id_token"), !(a = n.get("error"))) {
                                        e.next = 8;
                                        break
                                    }
                                    return history.replaceState(null, "", window.location.pathname), console.error("Google Authentication Error:", a), e.abrupt("return", ee((0, h.X)({
                                        title: "Failure",
                                        message: "Google Authentication Failed",
                                        icon: E.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 8:
                                    r && (history.replaceState(null, "", window.location.pathname), V(M), X(r));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, r.useEffect)(function() {
                    L === R && G && n && (V(null), W(null))
                }, [me, ce, n, G]), (0, r.useEffect)(function() {
                    L === M && B && l && (V(null), X(null))
                }, [he, Ee, l, B]), (0, r.useEffect)(function() {
                    L === U && H && i && (V(null), J(null))
                }, [ke, Se, i, H]);
                var Me = me || ce || he || Ee || ke || Se;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2"
                }, "Manage your linked accounts.")), r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2 tw-flex tw-gap-2"
                }, n && r.createElement(k.A, {
                    className: "tw-mr-2",
                    disabled: Me,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return V(I)
                    }
                }, "Unlink your Discord Account"), !n && r.createElement(k.A, {
                    className: "tw-mr-2",
                    isLoading: Me,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return (0, T.O)({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Link your Discord Account"), l && r.createElement(k.A, {
                    disabled: Me,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return V(z)
                    }
                }, "Unlink your Google Account"), !l && r.createElement(k.A, {
                    isLoading: Me,
                    type: "button",
                    color: "primary",
                    onClick: O.B
                }, "Link your Google Account"))), r.createElement(b.A, {
                    id: "link-twitch",
                    className: "tw-mt-6"
                }, r.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2"
                }, r.createElement("h5", {
                    className: "tw-font-semibold tw-mb-2"
                }, "Twitch Drops"), i ? r.createElement("p", {
                    className: "tw-text-sm tw-text-gray-300 tw-mb-3"
                }, null != s && s.displayName ? r.createElement(r.Fragment, null, "Connected as ", r.createElement("strong", null, s.displayName), ". You're ready to receive Twitch Drops.") : r.createElement(r.Fragment, null, "Your Twitch account is linked. You're ready to receive Twitch Drops.")) : r.createElement("p", {
                    className: "tw-text-sm tw-text-gray-300 tw-mb-3"
                }, "Link your Twitch account to receive Twitch Drops rewards in VRChat.")), r.createElement(A.A, {
                    xs: "12",
                    className: "mx-0 mb-2 tw-flex tw-gap-2"
                }, i && r.createElement(k.A, {
                    disabled: Me,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return V(j)
                    }
                }, "Unlink your Twitch Account"), !i && r.createElement(k.A, {
                    disabled: Me,
                    type: "button",
                    color: "primary",
                    onClick: function() {
                        return P({
                            redirectTo: "/home/profile"
                        })
                    }
                }, "Connect Twitch for Drops")))), r.createElement(x.A, {
                    isOpen: L === I,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Discord account from this VRChat account? You can link it again anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: Pe
                }, "Unlink Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(x.A, {
                    isOpen: null !== G && L === R,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return Te(G)
                    }
                }, "Link Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(x.A, {
                    isOpen: L === z,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5 tw-text-center"
                }, "Unlink Google Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to unlink your Google account from this VRChat account? You can link it again anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: De
                }, "Unlink Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(x.A, {
                    isOpen: null !== B && L === M,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Google Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Do you want to link your Google account to this VRChat account? You can unlink it anytime."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        return Oe(B)
                    }
                }, "Link Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(x.A, {
                    isOpen: L === j,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center tw-my-5 tw-p-5 tw-text-center"
                }, "Unlink Twitch Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Are you sure you want to unlink your Twitch account? Unlinking may prevent future Twitch Drops from being delivered to your VRChat account."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: Re
                }, "Unlink Twitch Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))), r.createElement(x.A, {
                    isOpen: null !== H && L === U,
                    toggle: Ie,
                    centered: !0
                }, r.createElement(N.A, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5 tw-text-center"
                }, r.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Twitch Account"), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, "Link your Twitch account to this VRChat account to receive Twitch Drops rewards."), r.createElement("div", {
                    className: "p-3 tw-text-center"
                }, r.createElement("strong", null, u)), r.createElement("div", {
                    className: "px-3 pt-3"
                }, r.createElement(a.$n, {
                    className: "tw-my-2",
                    expand: !0,
                    loading: ke,
                    onClick: function() {
                        return Fe(H)
                    }
                }, "Link Twitch Account"), r.createElement(a.$n, {
                    onClick: Ie,
                    disabled: ke,
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel")))))
            };
            var V = n(3569),
                q = n(42217),
                _ = n(70961),
                G = n(29281),
                W = n(24751),
                $ = n(6324),
                Y = n(25538);
            const B = function() {
                var e = (0, S.P2)(),
                    t = e.data,
                    n = e.isError,
                    a = e.isFetching,
                    l = (0, S.w_)(),
                    o = l.data,
                    c = void 0 === o ? [] : o,
                    i = l.isError,
                    s = l.isFetching,
                    u = c.includes("permission-age-verification"),
                    m = (0, G.CV)(),
                    d = m.data,
                    p = m.isError,
                    f = m.isFetching,
                    h = n || i || p;
                if (a || s || f) return r.createElement("div", {
                    className: "tw-py-20 tw-flex tw-items-center tw-justify-center"
                }, r.createElement(Y.A, {
                    size: "5x"
                }));
                if (h) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement($.A, {
                    icon: _.faCircleQuestion
                }), " Unable to determine your Age Verification status."), r.createElement(W.z9, {
                    className: "tw-w-full tw-mt-0",
                    to: "/home/ageverification"
                }, "Try Again"));
                if (!u) return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement($.A, {
                    icon: V.faCircleInfo
                }), " You must have an active VRChat Plus subscription in order to begin the verification process."), r.createElement(W.z9, {
                    className: "tw-w-full tw-mt-0",
                    to: "https://hello.vrchat.com/vrchatplus"
                }, "Learn More"));
                var w = t.isAdult;
                switch (d.status) {
                    case "verified":
                    case "approved":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement($.A, {
                            icon: q.SG
                        }), " You have successfully verified your age.", w && " You may choose whether to display it on your profile."), w && r.createElement(W.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/user/me"
                        }, "Go to My Profile"));
                    case "uninitialized":
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement($.A, {
                            icon: V.faCircleInfo
                        }), " As a VRC+ Subscriber you are eligible to get age verified so you can access age verified group instances."), r.createElement(W.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Learn More"));
                    default:
                        return r.createElement(r.Fragment, null, r.createElement("p", null, r.createElement($.A, {
                            icon: V.faCircleInfo
                        }), " You can check your Age Verification status here."), r.createElement(W.z9, {
                            className: "tw-w-full tw-mt-0",
                            to: "/home/ageverification"
                        }, "Check Status"))
                }
            };
            var X = n(66911),
                Q = n(9391),
                K = n(85052),
                H = n(92737),
                J = n(19462);
            var Z = (0, i.A)("div", {
                target: "ezmvepu0"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const ee = function() {
                var e, t = (0, p.wA)(),
                    n = (0, l.a$)().user,
                    a = (0, r.useState)(new Set(n.contentFilters)),
                    o = (0, c.A)(a, 2),
                    i = o[0],
                    s = o[1],
                    u = (0, l.d7)(i, 1400),
                    m = (0, f.FP)(),
                    d = (0, c.A)(m, 2),
                    w = d[0],
                    g = d[1],
                    v = g.isError,
                    E = g.error,
                    y = g.isSuccess;
                (0, r.useEffect)(function() {
                    if (null != n && n.id && u) {
                        var e = new Set(n.contentFilters),
                            t = (0, X.A)(u);
                        t.length === e.size && t.every(function(t) {
                            return e.has(t)
                        }) || w({
                            userId: n.id,
                            contentFilters: t
                        })
                    }
                }, [u]), (0, r.useEffect)(function() {
                    y && t((0, h.X)({
                        title: "Content Gating Settings Updated",
                        icon: Q.KT,
                        message: "Your content gating settings have been updated successfully.",
                        color: "success",
                        timeout: 7e3
                    }))
                }, [y]);
                return r.createElement(r.Fragment, null, r.createElement("strong", null, "Content Gating keeps you safe by filtering content you don't want to see."), v && r.createElement(K.A, {
                    color: "danger"
                }, "Unable to change content gating settings: ", null == E || null === (e = E.data) || void 0 === e ? void 0 : e.error.message), Object.entries(H.z).map(function(e) {
                    var t = (0, c.A)(e, 2),
                        n = t[0],
                        a = t[1];
                    return r.createElement(Z, {
                        key: n
                    }, r.createElement(J.A, {
                        label: "Filter ".concat(a),
                        defaultChecked: i.has(n),
                        onChangeCallback: function() {
                            return e = n, void(i.has(e) ? s(new Set((0, X.A)(i).filter(function(t) {
                                return t !== e
                            }))) : s(new Set(i).add(e)));
                            var e
                        }
                    }))
                }), r.createElement("small", null, "VRChat has User Generated Content and relies on its creators to label it appropriately. If you see something that is not labeled correctly, please use our Reporting system so our Moderation team can investigate."))
            };
            var te = n(64467),
                ne = n(6913),
                re = n(49843),
                ae = (0, r.createContext)(null);
            const le = function(e) {
                var t = e.children,
                    n = e.closeModal,
                    l = (0, r.useState)(1),
                    o = (0, c.A)(l, 2),
                    i = o[0],
                    s = o[1],
                    u = (0, r.useState)(null),
                    m = (0, c.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)(!1),
                    h = (0, c.A)(f, 2),
                    w = h[0],
                    g = h[1],
                    v = (0, r.useState)({}),
                    E = (0, c.A)(v, 2),
                    y = E[0],
                    b = E[1],
                    A = (0, r.useState)({}),
                    k = (0, c.A)(A, 2),
                    x = k[0],
                    N = k[1],
                    C = function() {
                        s(1), p(null), g(!1), b({}), n()
                    };
                return w ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.M2, {
                    color: "#67D781",
                    className: "tw-pr-2",
                    icon: ne.iW
                }), r.createElement("h4", {
                    className: "tw-text-[#67D781]"
                }, "Your claim has been submitted successfully, thank you!")), r.createElement("p", null, "We will look into it and email you for next possible steps."), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.$n, {
                    containerStyles: {
                        width: "100%"
                    },
                    onClick: C
                }, "Done"))) : d ? r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, r.createElement("div", {
                    className: "tw-flex tw-items-baseline tw-mb-2"
                }, r.createElement(a.M2, {
                    color: "#EE5454",
                    className: "tw-pr-2",
                    icon: ne.iW
                }), r.createElement("h4", {
                    className: "tw-text-red"
                }, "DMCA Claim Cannot Be Completed.")), r.createElement("p", null, d), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-12"
                }, r.createElement(a.$n, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: function() {
                        return p(null)
                    },
                    neutral: !0
                }, "Back"), r.createElement(a.$n, {
                    className: "tw-ml-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: C
                }, "Done"))) : r.createElement(ae.Provider, {
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
                        currentStep: i,
                        setFormError: p,
                        setFormSuccess: g,
                        ownerInfo: y,
                        setOwnerInfo: b,
                        claimInfo: x,
                        setClaimInfo: N,
                        resetForm: C
                    }
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, t))
            };

            function oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(n), !0).forEach(function(t) {
                        (0, te.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ie = [{
                    label: "I am the owner of the copyright",
                    value: "owner"
                }, {
                    label: "I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed",
                    value: "authorized"
                }],
                se = new RegExp(/(?:avtr|wrld)_[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}/i),
                ue = function(e) {
                    return e.filter(function(e) {
                        return se.test(e)
                    }).map(function(e) {
                        var t;
                        return null === (t = e.match(se)) || void 0 === t ? void 0 : t[0]
                    })
                };
            const me = function() {
                var e, t, n, l, o = (0, F.ok)(),
                    i = (0, c.A)(o, 2),
                    s = i[0],
                    u = (i[1], (0, r.useState)("owner")),
                    m = (0, c.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)(!1),
                    h = (0, c.A)(f, 2),
                    w = h[0],
                    g = h[1],
                    v = (0, r.useState)(""),
                    E = (0, c.A)(v, 2),
                    y = E[0],
                    b = E[1],
                    A = (0, r.useContext)(ae),
                    k = A.previous,
                    x = A.currentStep,
                    N = A.claimInfo,
                    C = A.setClaimInfo,
                    S = A.ownerInfo,
                    T = A.setFormError,
                    O = A.setFormSuccess,
                    P = (null == w ? void 0 : w.owner) && (null == w ? void 0 : w.accurate) && (null == w ? void 0 : w.perjury) && (null == w ? void 0 : w.liability) && (null == w ? void 0 : w.abuse),
                    D = (null == N || null === (e = N.description) || void 0 === e ? void 0 : e.length) > 0 && (null == N || null === (t = N.contentIds) || void 0 === t ? void 0 : t.length) > 0 && (null == N || null === (n = N.proof) || void 0 === n ? void 0 : n.length) > 0 && P && y.toLowerCase() === S.fullName.toLowerCase(),
                    R = (0, re.Ds)(),
                    I = (0, c.A)(R, 2),
                    M = I[0],
                    z = I[1],
                    U = z.isError,
                    j = z.error,
                    L = z.isLoading,
                    V = z.isSuccess,
                    q = z.reset;
                (0, r.useEffect)(function() {
                    var e = s.get("dmcaTarget");
                    e && C(ce(ce({}, N), {}, {
                        contentIds: ue([e])
                    }))
                }, []), (0, r.useEffect)(function() {
                    var e;
                    U && (q(), T("Could Not Proccess Claim: ".concat(null == j || null === (e = j.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message)))
                }, [U, j]), (0, r.useEffect)(function() {
                    V && (q(), O(!0))
                }, [V]);
                var _ = function(e) {
                    g(ce(ce({}, w), {}, (0, te.A)({}, e.target.id, e.target.checked)))
                };
                return 3 !== x ? null : r.createElement(r.Fragment, null, r.createElement("label", {
                    htmlFor: "claim-description",
                    className: "tw-mb-4"
                }, "A description of the copyright-protected work or other intellectual property right that you claim has been infringed", r.createElement(a.TM, {
                    className: "tw-pt-2",
                    id: "claim-description",
                    value: null == N ? void 0 : N.description,
                    onChange: function(e) {
                        return C(ce(ce({}, N), {}, {
                            description: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-content-ids",
                    className: "tw-mb-4"
                }, "The ID or URL of infringing content", r.createElement(a.ZB, {
                    className: "tw-pt-2",
                    value: null == N ? void 0 : N.contentIds,
                    validator: function(e) {
                        return se.test(e)
                    },
                    onChange: function(e) {
                        return C(ce(ce({}, N), {}, {
                            contentIds: ue(e)
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-proof",
                    className: "tw-mb-4"
                }, "Provide your copyright work. Where can we see an authorized example of your work?", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "claim-proof",
                    onChange: function(e) {
                        return C(ce(ce({}, N), {}, {
                            proof: e.target.value
                        }))
                    },
                    value: null == N ? void 0 : N.proof
                })), r.createElement("label", {
                    htmlFor: "claim-authority",
                    className: "tw-mb-4"
                }, "Authority to make complaint", r.createElement(a.ms, {
                    className: "tw-pt-2",
                    id: "claim-authority",
                    trimToLength: !0,
                    allowMultiline: !0,
                    options: ie,
                    value: d,
                    onChange: function(e) {
                        return p(e)
                    }
                })), r.createElement("label", {
                    htmlFor: "claim-owner",
                    className: "tw-mb-4"
                }, "Copyright Owner Name (optional)", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "claim-owner",
                    value: null == N ? void 0 : N.copyrightOwnerName,
                    onChange: function(e) {
                        return C(ce(ce({}, N), {}, {
                            copyrightOwnerName: e.target.value
                        }))
                    }
                })), r.createElement(de, {
                    className: "tw-mb-4"
                }, r.createElement("h4", {
                    className: "tw-text-xl"
                }, "By checking these boxes I state that"), r.createElement(a.Sc, {
                    id: "owner",
                    checked: null == w ? void 0 : w.owner,
                    label: "\n            I have a good faith belief that the use of the material in the\n            manner complained of is not authorized by the copyright owner,\n            its agent, or the law;\n          ",
                    htmlFor: "owner-check",
                    onChange: _
                }), r.createElement(a.Sc, {
                    id: "accurate",
                    checked: null == w ? void 0 : w.accurate,
                    label: "This notification is accurate; and",
                    htmlFor: "accurate-check",
                    onChange: _
                }), r.createElement(a.Sc, {
                    id: "perjury",
                    checked: null == w ? void 0 : w.perjury,
                    label: "\n            Under penalty of perjury, I am authorized to act on behalf of the owner\n            of an exclusive right that is allegedly infringed.\n          ",
                    htmlFor: "perjury-check",
                    onChange: _
                }), r.createElement(a.Sc, {
                    id: "liability",
                    checked: null == w ? void 0 : w.liability,
                    label: "\n            I acknowledge that under section 512(f) of the DMCA any person who knowingly \n            materially misrepresents that material or activity is infringing may be subject \n            to liability for damages.\n          ",
                    htmlFor: "liability",
                    onChange: _
                }), r.createElement(a.Sc, {
                    id: "abuse",
                    checked: null == w ? void 0 : w.abuse,
                    label: "I understand that abuse of this tool may result in the termination of my VRChat account, legal action, and/or criminal penalties.",
                    htmlFor: "abuse",
                    onChange: _
                })), r.createElement("label", {
                    htmlFor: "claim-signature"
                }, "Type your full name below which will act as your digital signature", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "claim-signature",
                    value: y.toUpperCase(),
                    onChange: function(e) {
                        return b(e.target.value)
                    },
                    pattern: null == S || null === (l = S.fullName) || void 0 === l ? void 0 : l.toUpperCase()
                })), P ? null : r.createElement("div", {
                    className: "tw-flex tw-items-center tw-bg-[#FF57671A] tw-mt-6 tw-rounded"
                }, r.createElement(a.M2, {
                    color: "#EE5454",
                    className: "tw-px-2",
                    icon: ne.iW
                }), r.createElement("p", {
                    className: "tw-text-red tw-py-2 tw-m-0"
                }, "Please select all the checkboxes if you want to proceed.")), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.$n, {
                    className: "tw-mr-2",
                    onClick: k,
                    containerStyles: pe,
                    neutral: !0
                }, "Back"), r.createElement(a.$n, {
                    className: "tw-ml-2",
                    disabled: !D || L,
                    containerStyles: pe,
                    onClick: function() {
                        return M({
                            claimInfo: N,
                            ownerInfo: S
                        })
                    }
                }, "Submit")))
            };
            var de = (0, i.A)("fieldset", {
                    target: "eikx6m20"
                })({
                    name: "hfkisc",
                    styles: "input{align-self:flex-start;margin-top:0.33rem;}label{padding:0 0 0.75rem 0.5rem!important;}"
                }),
                pe = {
                    width: "100%"
                };
            const fe = function() {
                var e = (0, r.useState)(null),
                    t = (0, c.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useContext)(ae),
                    i = o.resetForm,
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
                }, r.createElement(a.$n, {
                    className: "tw-mr-6",
                    containerStyles: {
                        width: "50%"
                    },
                    onClick: i,
                    neutral: !0
                }, "Cancel"), r.createElement(a.$n, {
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
            var he = n(19179),
                we = n(69517),
                ge = n.n(we);

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach(function(t) {
                        (0, te.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const ye = function() {
                var e = (0, r.useState)(!0),
                    t = (0, c.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    i = (0, c.A)(o, 2),
                    s = i[0],
                    u = i[1],
                    m = (0, r.useContext)(ae),
                    d = m.next,
                    p = m.previous,
                    f = m.currentStep,
                    h = m.ownerInfo,
                    w = m.setOwnerInfo;
                return (0, r.useEffect)(function() {
                    var e, t, n, r, a, l;
                    ge()(null !== (e = null == h ? void 0 : h.email) && void 0 !== e ? e : "") && (null == h || null === (t = h.fullName) || void 0 === t ? void 0 : t.length) > 0 && (null == h || null === (n = h.mailingAddress) || void 0 === n ? void 0 : n.length) > 0 && (null == h || null === (r = h.mailingCity) || void 0 === r ? void 0 : r.length) > 0 && (null == h || null === (a = h.mailingCountry) || void 0 === a ? void 0 : a.length) > 0 && (null == h || null === (l = h.phoneNumber) || void 0 === l ? void 0 : l.length) > 0 ? u(!0) : u(!1)
                }, [h]), 2 !== f ? null : r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, n ? r.createElement(be, null, r.createElement(a.M2, {
                    className: "tw-px-2",
                    icon: ne.iW
                }), r.createElement("p", {
                    className: "tw-m-0"
                }, "All information, including your full legal name and email address, are part of the full takedown notice, which may be provided to the uploader. This information is required to complete a submission."), r.createElement(a.M2, {
                    color: "#fff",
                    className: "tw-pr-2 tw-cursor-pointer",
                    icon: he.GR,
                    onClick: function() {
                        return l(!1)
                    }
                })) : null, r.createElement("label", {
                    htmlFor: "user-full-name",
                    className: "tw-mb-4"
                }, "Your Full Legal Name", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "user-full-name",
                    type: "text",
                    value: null == h ? void 0 : h.fullName,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            fullName: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "user-org-name",
                    className: "tw-mb-4"
                }, "Name of your organization (optional)", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "user-org-name",
                    type: "text",
                    value: null == h ? void 0 : h.organization,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
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
                }, "Street", r.createElement(a.pd, {
                    id: "owner-mailing-address",
                    value: null == h ? void 0 : h.mailingAddress,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            mailingAddress: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-gap-4"
                }, r.createElement("label", {
                    htmlFor: "mailing-city",
                    className: "tw-mb-4 tw-flex-grow"
                }, "City", r.createElement(a.pd, {
                    id: "owner-mailing-city",
                    value: null == h ? void 0 : h.mailingCity,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            mailingCity: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "mailing-state-province",
                    className: "tw-mb-4 tw-flex-grow"
                }, "State/Province", r.createElement(a.pd, {
                    id: "owner-mailing-state-province",
                    value: null == h ? void 0 : h.mailingStateProvince,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            mailingStateProvince: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "mailing-postal-code",
                    className: "tw-mb-4 tw-flex-grow"
                }, "ZIP/Postal Code", r.createElement(a.pd, {
                    id: "owner-mailing-postal-code",
                    value: null == h ? void 0 : h.mailingPostalCode,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            mailingPostalCode: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "mailing-country"
                }, "Country", r.createElement(a.pd, {
                    id: "owner-mailing-country",
                    value: null == h ? void 0 : h.mailingCountry,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            mailingCountry: e.target.value
                        }))
                    }
                }))), r.createElement("label", {
                    htmlFor: "owner-phone",
                    className: "tw-mb-4"
                }, "Phone Number", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "owner-phone",
                    type: "tel",
                    value: null == h ? void 0 : h.phoneNumber,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            phoneNumber: e.target.value
                        }))
                    }
                })), r.createElement("label", {
                    htmlFor: "owner-email"
                }, "Email", r.createElement(a.pd, {
                    className: "tw-pt-2",
                    id: "owner-email",
                    type: "email",
                    value: null == h ? void 0 : h.email,
                    onChange: function(e) {
                        return w(Ee(Ee({}, h), {}, {
                            email: e.target.value
                        }))
                    }
                })), r.createElement("div", {
                    className: "tw-flex tw-w-full tw-mt-6"
                }, r.createElement(a.$n, {
                    className: "tw-mr-2",
                    containerStyles: Ae,
                    onClick: p,
                    neutral: !0
                }, "Back"), r.createElement(a.$n, {
                    className: "tw-ml-2",
                    containerStyles: Ae,
                    disabled: !s,
                    onClick: d
                }, "Next")))
            };
            var be = (0, i.A)("div", {
                    target: "exj8v4t0"
                })({
                    name: "5vwt1n",
                    styles: "display:flex;align-items:baseline;color:#9c9c9c;background-color:#000;border-radius:8px;padding:0.5rem;margin-bottom:1rem"
                }),
                Ae = {
                    width: "100%"
                };
            const ke = function() {
                var e = (0, F.ok)(),
                    t = (0, c.A)(e, 2),
                    n = t[0],
                    l = t[1],
                    o = (0, r.useState)(!1),
                    i = (0, c.A)(o, 2),
                    s = i[0],
                    u = i[1];
                (0, r.useEffect)(function() {
                    var e = Object.fromEntries((0, X.A)(n.entries()).filter(function(e) {
                        return "dmcaClaimForm" !== (0, c.A)(e, 1)[0]
                    }));
                    s && (e.dmcaClaimForm = !0), l(e)
                }, [s]), (0, r.useEffect)(function() {
                    n.get("dmcaClaimForm") && u(!0)
                }, []);
                return r.createElement(r.Fragment, null, r.createElement("p", null, "If you are aware of unauthorized use of your property, you can use the button below to request a DMCA takedown."), r.createElement(a.$n, {
                    onClick: function() {
                        return u(!0)
                    }
                }, "File a DMCA Claim"), r.createElement(a.aF, {
                    width: "80%",
                    title: "DMCA Claim",
                    slim: !0,
                    isVisible: s,
                    onClose: function() {
                        return u(!1)
                    }
                }, r.createElement(le, {
                    closeModal: function() {
                        u(!1)
                    }
                }, r.createElement(fe, null), r.createElement(ye, null), r.createElement(me, null))))
            };
            var xe = n(32254),
                Ne = n(32110),
                Ce = n(1700),
                Se = n(7612),
                Te = n(94451),
                Oe = n(74353),
                Pe = n.n(Oe),
                De = n(53370),
                Fe = n(78479),
                Re = n(71853),
                Ie = n(558),
                Me = n(8120),
                ze = function(e) {
                    return e.currentUser.checkDisplayName.isLoading
                },
                Ue = function(e) {
                    var t;
                    return (null === (t = e.currentUser.databaseUser) || void 0 === t ? void 0 : t.pastDisplayNames) || null
                },
                je = (0, Me.Mz)(ze, function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e, t, n) {
                    return !1 === e && !1 === t && null !== n
                }),
                Le = (0, Me.Mz)(ze, function(e) {
                    return e.currentUser.checkDisplayName.userExists
                }, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e, t, n) {
                    return !1 === e && !0 === t && null !== n
                }),
                Ve = (0, Me.Mz)(ze, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }, function(e, t, n) {
                    return !1 === e && null !== t && !0 === n
                }),
                qe = (0, Me.Mz)(ze, function(e) {
                    return e.currentUser.checkDisplayName.displayName
                }, function(e) {
                    return e.currentUser.checkDisplayName.nameOk
                }, function(e, t, n) {
                    return !1 === e && null !== t && !1 === n
                }),
                _e = (0, Me.Mz)(Ue, function(e) {
                    return null !== e && e.length > 0
                }),
                Ge = (0, Me.Mz)(_e, Ue, function(e, t) {
                    return e && t.reduce(function(e, t) {
                        return Pe()(t.updated_at) > Pe()(e.updated_at) ? t : e
                    }, {
                        updated_at: 0
                    })
                }),
                We = (0, Me.Mz)(Ue, Ge, function(e, t) {
                    return null !== e && t.updated_at
                }),
                $e = (0, Me.Mz)(Ue, Ge, function(e, t) {
                    return null !== e && t.displayName
                }),
                Ye = (0, Me.Mz)(Ue, Ge, function(e, t) {
                    return null !== e && !!t.reverted
                }),
                Be = n(77839),
                Xe = n(33673),
                Qe = n(5556),
                Ke = n.n(Qe),
                He = function(e) {
                    var t = e.validationError,
                        n = e.displayNameChanged,
                        l = void 0 !== n && n,
                        o = (0, p.d4)(Le),
                        c = (0, p.d4)(qe),
                        i = ((0, p.d4)(We), l || (0, p.d4)(function(e) {
                            var t;
                            return null === (t = e.currentUser.displayName) || void 0 === t ? void 0 : t.changed
                        }));
                    return r.createElement(r.Fragment, null, null !== t && r.createElement(K.A, {
                        color: "warning",
                        "aria-label": "name warning"
                    }, r.createElement(a.M2, {
                        icon: Ce.$f
                    }), " ".concat(t)), o && null === t && r.createElement(K.A, {
                        color: "warning",
                        "aria-label": "name warning not available"
                    }, r.createElement(a.M2, {
                        icon: Xe.W6
                    }), " That display name is already in use."), c && null === t && r.createElement(K.A, {
                        color: "warning",
                        "aria-label": "name warning character not okay"
                    }, r.createElement(a.M2, {
                        icon: Xe.W6
                    }), " That display name includes characters that cannot be used. Please try again."), i && r.createElement(K.A, {
                        color: "success",
                        "aria-label": "name change success"
                    }, r.createElement(a.M2, {
                        icon: Ce.$f
                    }), " Your display name has been changed!"))
                };
            He.propTypes = {
                canChangeDisplayName: Ke().bool.isRequired,
                validationError: Ke().string
            };
            const Je = He;
            var Ze = function(e) {
                var t = e.displayNameError,
                    n = (0, p.wA)();
                return r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("div", {
                    className: "mb-4"
                }, r.createElement("p", null, "Name change was not successful due to:", r.createElement("br", null), r.createElement("code", null, t), r.createElement("br", null), "If issues persist, please contact VRChat Support at", " ", r.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://help.vrchat.com"
                }, "help.vrchat.com"), "."), r.createElement(k.A, {
                    className: "me-2",
                    onClick: function() {
                        return n((0, Ie.qc)())
                    },
                    color: "primary"
                }, "Try Again")))
            };
            Ze.propTypes = {
                displayNameError: Ke().string.isRequired
            };
            const et = Ze;
            var tt = n(34450),
                nt = function(e) {
                    var t = e.canRevertDisplayName,
                        n = e.numberOfDays,
                        l = e.showLastDisplayNameChange,
                        o = e.cooldownPermission,
                        c = void 0 !== o && o;
                    return r.createElement(a.$T, {
                        hideIcon: !0,
                        color: "#31545ebf",
                        type: "custom",
                        iconColor: "#6AE3F9",
                        className: "tw-mb-4"
                    }, r.createElement("div", {
                        className: "tw-flex tw-gap-3 tw-flex-row"
                    }, r.createElement("p", {
                        className: "tw-m-0"
                    }, r.createElement(a.M2, {
                        icon: ne.iW,
                        color: "#6AE3F9",
                        className: "tw-mr-2"
                    })), r.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, r.createElement("span", null, c && r.createElement(r.Fragment, null, "You can only change your display name once per", " ", r.createElement("strong", {
                        className: "tw-text-[#FFFF00]"
                    }, 30, " days ", r.createElement("img", {
                        alt: "subscriptions",
                        width: "35",
                        src: tt
                    }))), !c && r.createElement(r.Fragment, null, "You can only change your display name once per ", r.createElement("strong", null, 90, " days"), " ", r.createElement("br", null), "Want more flexibility? Change it every ", 30, " days instead with", " ", r.createElement("img", {
                        alt: "subscriptions",
                        width: "35",
                        src: tt
                    }))), l && r.createElement("small", {
                        className: "tw-text-placeholder-text"
                    }, "Last changed: ", n, " days ago."), t && r.createElement("small", {
                        className: "tw-text-placeholder-text"
                    }, "You can revert your last display name change."))))
                };
            nt.propTypes = {
                canRevertDisplayName: Ke().bool.isRequired,
                numberOfDays: Ke().number.isRequired,
                showLastDisplayNameChange: Ke().bool.isRequired
            };
            const rt = nt;
            var at = n(74758),
                lt = n(87959),
                ot = n(55606);
            var ct = (0, i.A)("p", {
                    target: "ek3joju1"
                })({
                    name: "dzbp6p",
                    styles: "white-space:pre-wrap;line-height:2"
                }),
                it = (0, i.A)("b", {
                    target: "ek3joju0"
                })({
                    name: "lii32t",
                    styles: "font-size:1.2em;color:var(--bs-primary)"
                }),
                st = function(e) {
                    var t = e.exitRevertCallback,
                        n = e.previousDisplayName,
                        l = (0, p.wA)(),
                        i = (0, p.d4)(function(e) {
                            return e.currentUser.databaseUser.id
                        }),
                        u = (0, r.useState)(""),
                        d = (0, c.A)(u, 2),
                        f = d[0],
                        w = d[1],
                        g = (0, r.useState)(""),
                        v = (0, c.A)(g, 2),
                        E = v[0],
                        y = v[1],
                        b = (0, r.useState)(!0),
                        A = (0, c.A)(b, 2),
                        x = A[0],
                        N = A[1],
                        C = (0, r.useState)(!1),
                        S = (0, c.A)(C, 2),
                        T = S[0],
                        O = S[1];
                    (0, r.useEffect)(function() {
                        return N("" === E || f !== n)
                    }, [E, f]);
                    var P = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            var r, a, o, c;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l((0, Ie.m9)({
                                            userId: i,
                                            displayName: n,
                                            currentPassword: E,
                                            revertDisplayName: !0
                                        }));
                                    case 3:
                                        t(), e.next = 13;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), c = null !== (r = null === (a = e.t0.response) || void 0 === a || null === (a = a.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong", 400 === (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.response) || void 0 === o ? void 0 : o.status) && (/ is not available/i.test(c) ? c = "Your previous display name is not available." : /current password incorrect/i.test(c) && (c = "Check your password and try again.")), O(!1), l((0, h.X)({
                                            title: "Failed to revert display name",
                                            icon: s.zp,
                                            message: c,
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
                    return r.createElement("div", {
                        className: "center-panel"
                    }, r.createElement(at.A, {
                        className: "mb-4",
                        outline: !0
                    }, r.createElement(lt.A, {
                        tag: "h4"
                    }, "Confirm Display Name Change Revert"), r.createElement(ot.A, null, r.createElement(ct, null, "This will change your display name back to:", r.createElement("br", null), r.createElement(it, null, n), r.createElement("br", null), "And restart the 90-day timer.", r.createElement("br", null), "Type your previous display name into the field below to revert."), r.createElement("input", {
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
                            return y(e.target.value)
                        },
                        placeholder: "Please confirm current password",
                        type: "password",
                        value: E
                    }), r.createElement(k.A, {
                        className: "me-2",
                        onClick: function() {
                            return O(!0)
                        },
                        disabled: x,
                        color: "primary"
                    }, "Ok"), r.createElement(k.A, {
                        onClick: t,
                        color: "secondary"
                    }, "Cancel"))), r.createElement(a.uo, {
                        headerText: "Revert Display Name Change",
                        bodyText: "✋ Stop! You will not be able to change your name for 90 days after reverting your name. Are you sure you want to revert your display name? ",
                        confirmCallback: P,
                        cancelCallback: function() {
                            return O(!1)
                        },
                        isOpen: T
                    }))
                };
            st.propTypes = {
                exitRevertCallback: Ke().func.isRequired,
                previousDisplayName: Ke().string
            };
            const ut = st;
            const mt = function() {
                var e, t, n = (0, p.wA)(),
                    i = (0, f.Mo)(),
                    s = (0, c.A)(i, 2),
                    u = s[0],
                    d = s[1],
                    h = d.isLoading,
                    w = d.isError,
                    g = d.error,
                    v = d.isSuccess,
                    E = (0, S.w_)().data,
                    y = void 0 === E ? [] : E,
                    x = (0, p.d4)(je),
                    N = (0, p.d4)(Ve),
                    C = (0, p.d4)(ze),
                    T = (0, p.d4)(_e),
                    O = (0, p.d4)(Ye),
                    P = (0, p.d4)(Be.B),
                    D = (0, p.d4)(We),
                    F = (0, p.d4)($e),
                    R = (0, p.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }),
                    I = (0, r.useState)(!0),
                    M = (0, c.A)(I, 2),
                    z = M[0],
                    U = M[1],
                    j = (0, r.useState)(null),
                    L = (0, c.A)(j, 2),
                    V = L[0],
                    q = L[1],
                    _ = (0, r.useState)(""),
                    G = (0, c.A)(_, 2),
                    W = G[0],
                    $ = G[1],
                    Y = (0, r.useState)(""),
                    B = (0, c.A)(Y, 2),
                    X = B[0],
                    Q = B[1],
                    H = (0, r.useState)(null),
                    J = (0, c.A)(H, 2),
                    Z = J[0],
                    ee = J[1],
                    te = (0, r.useState)(""),
                    ne = (0, c.A)(te, 2),
                    re = ne[0],
                    ae = ne[1],
                    le = (0, r.useState)(!1),
                    oe = (0, c.A)(le, 2),
                    ce = oe[0],
                    ie = oe[1],
                    se = (0, r.useState)(!1),
                    ue = (0, c.A)(se, 2),
                    me = ue[0],
                    de = ue[1],
                    pe = y.includes("permission-reduced-name-change-cooldown"),
                    fe = (0, l.d7)(re),
                    he = x && N && "" !== fe;
                if ((0, r.useEffect)(function() {
                        if (P) U(!0);
                        else {
                            var e = pe ? 30 : 90;
                            T && Pe()().diff(D, "days") < e ? U(!1) : U(!0)
                        }
                    }, [D, pe, P, T]), (0, r.useEffect)(function() {
                        "" !== fe ? fe.length < 4 ? ee("That name is too short.") : fe.length > 15 ? ee("That name is too long.") : (ee(null), $(""), n((0, Ie.pT)({
                            displayName: fe,
                            userId: R.id
                        }))) : ee(null)
                    }, [fe, n, R.id]), (0, r.useEffect)(function() {
                        return "" === W ? (ie(!1), void q(null)) : W !== re ? (ie(!1), void q("Names don't match")) : (ie(!0), void q(null))
                    }, [W, re]), w) return r.createElement(et, {
                    displayNameError: null !== (e = null === (t = g.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Something went wrong"
                });
                if (me) return r.createElement(ut, {
                    previousDisplayName: F,
                    exitRevertCallback: function() {
                        return de(!1)
                    }
                });
                var we = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, n(u({
                                            password: X,
                                            displayName: re,
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
                    ge = !z && !O;
                return r.createElement(Re.A, {
                    loading: h
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(De.A, null, r.createElement(rt, {
                    canRevertDisplayName: ge,
                    cooldownPermission: pe,
                    showLastDisplayNameChange: !z,
                    numberOfDays: Pe()().diff(D, "days")
                }), r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.M2, {
                    icon: Te.UK,
                    size: "2x"
                })), r.createElement(A.A, {
                    xs: "10"
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "display name",
                    className: "form-control",
                    autoComplete: "off",
                    disabled: !z,
                    id: "displayName",
                    name: "displayName",
                    onChange: function(e) {
                        return ae(e.target.value)
                    },
                    placeholder: R.displayName,
                    type: "text",
                    value: re
                }), r.createElement(Je, {
                    canChangeDisplayName: z,
                    displayName: R.displayName,
                    displayNameAvailable: x,
                    displayNameValue: re,
                    isRevert: !1,
                    latestChangedDate: D,
                    displayNameChecking: C,
                    validationError: Z,
                    displayNameChanged: v
                }))), r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, C && r.createElement(a.M2, {
                    icon: Se.z1,
                    spin: !0,
                    size: "2x"
                }), "" !== re && !C && r.createElement(Fe.A, {
                    "aria-label": x && N ? "Name is available" : "Name is unavailable",
                    ok: x && N
                }))), he && !v && r.createElement(b.A, null, r.createElement(A.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    },
                    className: "me-0"
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
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
                }), null !== V && r.createElement(K.A, {
                    color: "warning",
                    "aria-label": "confirm name warning"
                }, r.createElement(a.M2, {
                    icon: Ce.$f
                }), " ".concat(V)))), r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, "" !== W && r.createElement(Fe.A, {
                    "aria-label": null !== V ? V : "Confirmation name matches",
                    ok: null === V
                }))), ce && !v && r.createElement(b.A, {
                    className: "mt-2"
                }, r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.M2, {
                    icon: Ne.bM,
                    size: "2x"
                })), r.createElement(A.A, {
                    xs: "10"
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
                    "aria-label": "Please confirm current password",
                    className: "form-control",
                    id: "namePasswordVerify",
                    name: "namePasswordVerify",
                    onChange: function(e) {
                        return Q(e.target.value)
                    },
                    placeholder: "Please confirm current password",
                    type: "password",
                    value: X
                })))), r.createElement(b.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, ge && r.createElement(A.A, {
                    xs: "6"
                }, r.createElement(k.A, {
                    color: "primary",
                    outline: !0,
                    block: !0,
                    id: "revert-name-change-submit",
                    name: "revert-name-change-submit",
                    onClick: function() {
                        return de(!0)
                    }
                }, "Revert Display Name Change")), r.createElement(A.A, {
                    xs: "6"
                }, r.createElement(k.A, {
                    disabled: !z || !0 === C || null !== V || "" === W || "" === X || null !== Z || "" === re,
                    color: "primary",
                    block: !0,
                    id: "name-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    onClick: we
                }, "Change Display Name"))))))
            };
            var dt = n(12378),
                pt = n(28337);
            const ft = function(e) {
                var t, n, l = e.user,
                    i = (l || {}).usesGeneratedPassword,
                    s = r.useState(""),
                    u = (0, c.A)(s, 2),
                    d = u[0],
                    p = u[1],
                    h = r.useState(""),
                    w = (0, c.A)(h, 2),
                    g = w[0],
                    v = w[1],
                    E = r.useState(""),
                    y = (0, c.A)(E, 2),
                    k = y[0],
                    x = y[1],
                    N = r.useState(!1),
                    C = (0, c.A)(N, 2),
                    S = C[0],
                    T = C[1],
                    O = (0, f.SV)(),
                    P = (0, c.A)(O, 2),
                    D = P[0],
                    F = P[1],
                    R = F.isLoading,
                    I = F.isSuccess,
                    M = F.isError,
                    z = F.error,
                    U = function(e) {
                        var t = e.newPassword;
                        return t && 0 !== t.length ? t.length < 8 ? "That password is too short" : (0, pt.v)(t) ? "Please try a more secure password" : null : null
                    }({
                        newPassword: g
                    }),
                    j = (n = {
                        newPassword: g,
                        confirmationNewPassword: k
                    }).newPassword !== n.confirmationNewPassword ? "Passwords don't match" : null,
                    L = !U,
                    V = !j && k.length > 0,
                    q = g.length > 0 && !U,
                    _ = q && k.length > 0 && !j && !i,
                    G = !U && !j && g === k && ("" !== d || i),
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
                                            password: g
                                        }, i || (n.currentPassword = d), e.next = 8, D(n).unwrap();
                                    case 8:
                                        p(""), v(""), x(""), e.next = 16;
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
                        v(e.target.value)
                    },
                    Y = function(e) {
                        x(e.target.value)
                    },
                    B = function(e) {
                        p(e.target.value)
                    };
                return r.useEffect(function() {
                    S || "" === d && "" === g && "" === k || T(!0)
                }, [d, g, k]), r.createElement(Re.A, {
                    loading: R
                }, r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("form", {
                    onSubmit: W
                }, M && r.createElement(K.A, {
                    color: "warning"
                }, r.createElement(a.M2, {
                    icon: Ce.$f
                }), " An error occurred: ", (null == z || null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown error"), r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.M2, {
                    icon: dt.DW,
                    size: "2x"
                })), r.createElement(A.A, {
                    xs: "10"
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
                    type: "password",
                    id: "newPassword",
                    name: "newPassword",
                    className: "form-control",
                    placeholder: "Please enter new password",
                    onChange: $,
                    onKeyUp: $
                }), U && r.createElement(K.A, {
                    color: "warning"
                }, r.createElement(a.M2, {
                    icon: Ce.$f
                }), " ", U), I && r.createElement(K.A, {
                    color: "success"
                }, r.createElement(a.M2, {
                    icon: Ce.$f
                }), " Your password has been changed!"))), r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, r.createElement(Fe.A, {
                    ok: S ? L : null
                }))), q && r.createElement(b.A, null, r.createElement(A.A, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
                    type: "password",
                    id: "confirmNewPassword",
                    name: "confirmNewPassword",
                    className: "form-control",
                    placeholder: "Please confirm new password",
                    onChange: Y,
                    onKeyUp: Y
                }), j && r.createElement(K.A, {
                    color: "warning"
                }, r.createElement(a.M2, {
                    icon: Ce.$f
                }), " ", j))), r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "left"
                    },
                    className: "mx-0 px-0"
                }, r.createElement(Fe.A, {
                    ok: V
                }))), _ && r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "1",
                    style: {
                        textAlign: "right"
                    },
                    className: "mx-0"
                }, r.createElement(a.M2, {
                    icon: Ne.bM,
                    size: "2x"
                })), r.createElement(A.A, {
                    xs: "10"
                }, r.createElement(b.A, {
                    className: "mx-0"
                }, r.createElement("input", {
                    type: "password",
                    id: "passwordPasswordVerify",
                    name: "passwordPasswordVerify",
                    className: "form-control",
                    placeholder: "Please confirm current password",
                    onChange: B,
                    onKeyUp: B
                })))), r.createElement(b.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, r.createElement(A.A, {
                    xs: "4"
                }, r.createElement("button", {
                    disabled: !G,
                    className: "btn btn-primary w-100",
                    id: "password-change-submit",
                    name: "name-change-submit",
                    value: "update",
                    type: "submit"
                }, "Change Password"))))))
            };
            var ht = n(6241),
                wt = n(48994);
            const gt = function() {
                var e, t, n = (0, p.wA)(),
                    l = (0, S.p$)().data,
                    i = null == l || null === (e = l.presence) || void 0 === e ? void 0 : e.world,
                    s = (0, f.ER)({
                        userId: null == l ? void 0 : l.id,
                        worldId: i
                    }, {
                        skip: !i
                    }),
                    u = s.isLoading,
                    d = s.isError,
                    w = !(u || d),
                    g = (0, f.Ns)(),
                    v = (0, c.A)(g, 2),
                    E = v[0],
                    y = v[1],
                    b = y.isLoading,
                    A = y.isError,
                    k = y.error,
                    x = y.reset,
                    N = r.useState(!1),
                    C = (0, c.A)(N, 2),
                    T = C[0],
                    O = C[1],
                    P = function() {
                        var e = (0, o.A)(m().mark(function e() {
                            return m().wrap(function(e) {
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
                                        O(!1), n((0, h.X)({
                                            title: "All User Data Reset",
                                            icon: wt.XK,
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
                    D = w ? "This action will reset your user data in all worlds you've visited except any world you're currently in. To reset that world's data, please exit it first, then go to \"Reset User Data\" in the world's details." : "This action will reset your user data in all worlds you've visited. Rejoin worlds for changes to take effect.";
                return r.createElement(r.Fragment, null, r.createElement("p", null, "Reset your saved user data in all worlds you've visited (to reset a specific world's user data, visit that world's page)."), r.createElement(a.$n, {
                    type: "button",
                    onClick: function() {
                        O(!0)
                    },
                    danger: !0
                }, r.createElement(a.M2, {
                    icon: ht.faUserXmark
                }), " Reset All User Data"), r.createElement(a.uo, {
                    headerText: "Reset User Data in All Worlds?",
                    confirmText: "Yes, Reset",
                    confirmCallback: P,
                    cancelText: "Cancel",
                    cancelCallback: function() {
                        O(!1), x()
                    },
                    isOpen: T,
                    isLoading: b
                }, r.createElement("p", null, D), r.createElement("p", null, "Are you sure you want to reset? This cannot be undone."), A && r.createElement(a.$T, {
                    type: "error",
                    title: "Failed to reset user data",
                    className: "my-2"
                }, (null == k || null === (t = k.data) || void 0 === t ? void 0 : t.error.message) || "An unknown error occurred while resetting your user data.")))
            };
            var vt = n(48645);
            var Et = (0, i.A)("div", {
                target: "e1a02i090"
            })({
                name: "1qck9b",
                styles: "border-top:1px solid #252a30;padding:8px 5px;&:first-of-type{margin-top:1rem;}&:last-of-type{border-bottom:1px solid #252a30;margin-bottom:1rem;}"
            });
            const yt = function(e) {
                var t, n, l = e.user,
                    o = l || {},
                    i = o.hasSharedConnectionsOptOut,
                    s = o.hasDiscordFriendsOptOut,
                    u = (0, r.useState)(null),
                    m = (0, c.A)(u, 2),
                    d = m[0],
                    p = m[1],
                    h = (0, f.au)(),
                    w = (0, c.A)(h, 2),
                    g = w[0],
                    v = w[1],
                    E = v.isError,
                    y = v.error,
                    x = (0, f.nz)(),
                    N = (0, c.A)(x, 2),
                    C = N[0],
                    S = N[1],
                    T = S.isError,
                    O = S.error,
                    P = function() {
                        try {
                            window.OneTrust.ToggleInfoDisplay()
                        } catch (e) {
                            p("OneTrust not loaded. Disable your ad blocker and refresh the page to try again.")
                        }
                    };
                (0, r.useEffect)(function() {
                    return window.addEventListener("OneTrustGroupsUpdated", P),
                        function() {
                            window.removeEventListener("OneTrustGroupsUpdated", P)
                        }
                }, []);
                var D = E || T ? (null == y || null === (t = y.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || (null == O || null === (n = O.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "An error occurred while updating your shared connections setting." : d;
                return r.createElement("div", {
                    className: "center-panel"
                }, r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "10",
                    className: "mx-0 mb-2"
                }, "Manage your cookie settings and consent preferences.")), D ? r.createElement(K.A, {
                    className: "warning"
                }, r.createElement(a.M2, {
                    icon: vt.QJ
                }), " ", d) : r.createElement(b.A, null, r.createElement(A.A, {
                    xs: "10"
                }, r.createElement(k.A, {
                    type: "button",
                    color: "primary",
                    onClick: P
                }, "Change Cookie and Consent Settings"))), r.createElement(Et, {
                    className: "mt-3"
                }, r.createElement(J.A, {
                    label: "Show Mutual Friend and Group Connections",
                    defaultChecked: !i,
                    onChangeCallback: function() {
                        return g({
                            hasSharedConnectionsOptOut: !i,
                            userId: l.id
                        })
                    }
                })), r.createElement(Et, {
                    className: "mt-3"
                }, r.createElement(J.A, {
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
            var bt = n(46078),
                At = n(88838);
            const kt = function() {
                var e = (0, p.wA)(),
                    t = (0, l.a$)().user,
                    n = (0, r.useState)(!1),
                    a = (0, c.A)(n, 2),
                    i = a[0],
                    u = a[1],
                    d = (0, bt.FJ)({
                        userId: null == t ? void 0 : t.id
                    }, {
                        skip: !(null != t && t.id),
                        refetchOnMountOrArgChange: !0
                    }),
                    f = d.data,
                    w = d.isLoading,
                    g = (0, bt.Rl)(),
                    v = (0, c.A)(g, 1)[0];
                (0, r.useEffect)(function() {
                    void 0 !== (null == f ? void 0 : f.accessReduceDecorAnim) && u(f.accessReduceDecorAnim)
                }, [null == f ? void 0 : f.accessReduceDecorAnim]);
                var E = function() {
                    var n = (0, o.A)(m().mark(function n(r) {
                        var a, l, o, c;
                        return m().wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return a = r.checked, l = i, u(a), e((0, At.mA)(a)), n.prev = 4, n.next = 7, v({
                                        userId: null == t ? void 0 : t.id,
                                        accessReduceDecorAnim: a
                                    }).unwrap();
                                case 7:
                                    n.next = 14;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n.catch(4), u(l), e((0, At.mA)(l)), e((0, h.X)({
                                        title: "Failed to update setting",
                                        icon: s.zp,
                                        message: null !== (o = null === n.t0 || void 0 === n.t0 || null === (c = n.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== o ? o : "Something went wrong while updating your animation preference."
                                    }));
                                case 14:
                                case "end":
                                    return n.stop()
                            }
                        }, n, null, [
                            [4, 9]
                        ])
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }();
                return w ? r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("div", {
                    className: "tw-py-2 tw-px-1"
                }, r.createElement("span", {
                    className: "tw-text-placeholder-text"
                }, "Loading..."))) : r.createElement("div", {
                    className: "center-panel"
                }, r.createElement("div", {
                    className: "tw-py-2 tw-px-1"
                }, r.createElement(J.A, {
                    label: "Enable Reduced Profile Animations",
                    value: "reducedProfileAnimations",
                    defaultChecked: i,
                    onChangeCallback: E
                })))
            };
            var xt = n(23029),
                Nt = n(92901),
                Ct = n(9417),
                St = n(85501),
                Tt = n(34441),
                Ot = n(53954),
                Pt = n(49107),
                Dt = n(79162),
                Ft = n(67256),
                Rt = n(71783),
                It = n(60380),
                Mt = n(12438),
                zt = n(59399),
                Ut = n(35169),
                jt = n(75255),
                Lt = n(86878),
                Vt = n(72505),
                qt = n.n(Vt),
                _t = function() {
                    return {
                        type: "TWOFACTORAUTH_REMOVE",
                        payload: qt().delete(window.apiUrl("/api/1/auth/twofactorauth"))
                    }
                },
                Gt = function() {
                    return {
                        type: "TWOFACTORAUTH_GET_OTP",
                        payload: qt().get(window.apiUrl("/api/1/auth/user/twofactorauth/otp"))
                    }
                };

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function $t(e) {
                var t = Yt();
                return function() {
                    var n, r = (0, Ot.A)(e);
                    if (t) {
                        var a = (0, Ot.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, Tt.A)(this, n)
                }
            }

            function Yt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Yt = function() {
                    return !!e
                })()
            }
            var Bt = "https://docs.vrchat.com/docs/setup-2fa",
                Xt = function(e) {
                    return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 8))
                },
                Qt = "otpDownload",
                Kt = {
                    code: "",
                    isCodeReady: !1,
                    isPreviousSubmissionRelevant: !1,
                    isTextKeyShown: !1,
                    isOneTimePasswordsShown: !1,
                    isWaitingToDownloadOtp: !1,
                    forgetOtpTimeout: null,
                    step: 0
                },
                Ht = function(e) {
                    (0, St.A)(n, e);
                    var t = $t(n);

                    function n(e) {
                        var a;
                        return (0, xt.A)(this, n), a = t.call(this, e), (0, te.A)((0, Ct.A)(a), "getOneTimePasswords", (0, o.A)(m().mark(function e() {
                            var t, n, r;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return clearTimeout(a.state.forgetOtpTimeout), t = setTimeout(function() {
                                            a.setState({
                                                isOneTimePasswordsShown: !1
                                            }), a.props.dispatch({
                                                type: "TWOFACTORAUTH_FORGET_OTP"
                                            })
                                        }, 6e4), a.setState({
                                            forgetOtpTimeout: t
                                        }), e.prev = 3, e.next = 6, a.props.dispatch(Gt());
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
                            }, e, null, [
                                [3, 10]
                            ])
                        }))), (0, te.A)((0, Ct.A)(a), "disable", function() {
                            var e = (0, o.A)(m().mark(function e(t) {
                                var n, r;
                                return m().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.prev = 1, e.next = 4, a.props.dispatch(_t());
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
                                }, e, null, [
                                    [1, 8]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), a.state = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Wt(Object(n), !0).forEach(function(t) {
                                    (0, te.A)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, Kt), a.ref = r.createRef(), a.enable = a.enable.bind((0, Ct.A)(a)), a.renderSetup = a.renderSetup.bind((0, Ct.A)(a)), a.renderStatus = a.renderStatus.bind((0, Ct.A)(a)), a.handleChangeVerifyCode = a.handleChangeVerifyCode.bind((0, Ct.A)(a)), a.handleVerifyPendingSecret = a.handleVerifyPendingSecret.bind((0, Ct.A)(a)), a.isSettingUp = a.isSettingUp.bind((0, Ct.A)(a)), a.cancelSecret = a.cancelSecret.bind((0, Ct.A)(a)), a.showTextKey = a.showTextKey.bind((0, Ct.A)(a)), a.goToStep0 = a.goToStep0.bind((0, Ct.A)(a)), a.goToStep1 = a.goToStep1.bind((0, Ct.A)(a)), a.goToStep2 = a.goToStep2.bind((0, Ct.A)(a)), a.toggleOneTimePasswordsShown = a.toggleOneTimePasswordsShown.bind((0, Ct.A)(a)), a.hasOneTimePasswords = a.hasOneTimePasswords.bind((0, Ct.A)(a)), a.getOneTimePasswordHref = a.getOneTimePasswordHref.bind((0, Ct.A)(a)), a.downloadOneTimePasswords = a.downloadOneTimePasswords.bind((0, Ct.A)(a)), a.triggerOtpDownloadLink = a.triggerOtpDownloadLink.bind((0, Ct.A)(a)), a
                    }
                    return (0, Nt.A)(n, [{
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
                                payload: qt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending/verify"), {
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
                                return "".concat(Xt(e.code), "\n")
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
                            e.preventDefault(), this.setState(Kt), this.props.dispatch({
                                type: "TWOFACTORAUTH_GET_PENDING_SECRET",
                                payload: qt().post(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
                            })
                        }
                    }, {
                        key: "cancelSecret",
                        value: function(e) {
                            e.preventDefault(), this.setState(Kt), this.props.dispatch({
                                type: "TWOFACTORAUTH_REMOVE_PENDING_SECRET",
                                payload: qt().delete(window.apiUrl("/api/1/auth/twofactorauth/totp/pending"))
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
                            document.getElementById(Qt).click(), this.setState({
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
                                        return r.createElement("div", null, r.createElement("div", null, r.createElement("p", null, r.createElement(a.M2, {
                                            icon: Mt.rQ,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "You are protecting your account with an additional login step.", " ", r.createElement("a", {
                                            href: Bt,
                                            target: "_blank",
                                            rel: "noreferrer"
                                        }, "Help")), r.createElement("p", null, r.createElement(jt.A, {
                                            onClick: e.disable,
                                            color: "primary",
                                            loading: l.isAwaitingRemove
                                        }, "Disable"))), r.createElement("div", null, r.createElement("p", null, r.createElement(a.M2, {
                                            icon: vt.QJ,
                                            size: "2x",
                                            style: {
                                                marginRight: "0.25em"
                                            }
                                        }), "If you ever lose access to your authenticator app, you'll have trouble logging in. But you can use recovery codes instead. Be careful: you can only use each recovery code once!"), r.createElement("p", null, "We", " ", r.createElement("strong", null, r.createElement("em", null, "strongly")), " ", "recommend you download these codes and print them out.")), l.isOtpRejected && r.createElement(K.A, {
                                            color: "warning"
                                        }, r.createElement(a.M2, {
                                            icon: vt.QJ
                                        }), " Something went wrong downloading recovery codes."), r.createElement("div", null, r.createElement("p", null, r.createElement("span", {
                                            style: {
                                                marginRight: "0.5em"
                                            }
                                        }, r.createElement(jt.A, {
                                            onClick: e.toggleOneTimePasswordsShown,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, e.state.isOneTimePasswordsShown ? "Hide recovery codes" : "Show recovery codes")), r.createElement("span", null, r.createElement(jt.A, {
                                            onClick: e.downloadOneTimePasswords,
                                            color: "secondary",
                                            className: "text-white",
                                            loading: l.isAwaitingOtp
                                        }, "Download recovery codes")), r.createElement("a", {
                                            id: Qt,
                                            href: t,
                                            download: "VRChatRecovery.txt",
                                            style: {
                                                display: "none"
                                            }
                                        }, "Download recovery link"))))
                                    }
                                    return r.createElement("div", null, r.createElement("p", null, "Enable two-factor authentication to protect your account with an additional login step.", " ", r.createElement("a", {
                                        href: Bt,
                                        target: "_blank",
                                        rel: "noreferrer"
                                    }, "Learn more")), r.createElement("p", null, r.createElement(jt.A, {
                                        onClick: e.enable,
                                        color: "primary",
                                        loading: l.isAwaitingPendingSecret
                                    }, "Enable")))
                                };
                            return r.createElement("div", null, o(), e.state.isOneTimePasswordsShown && e.hasOneTimePasswords() ? r.createElement("div", null, r.createElement("ol", null, l.otp.map(function(e) {
                                return r.createElement("li", {
                                    key: "otp_code_".concat(e.code)
                                }, r.createElement("span", {
                                    style: {
                                        textDecoration: e.used ? "line-through" : "none"
                                    }
                                }, Xt(e.code)))
                            }))) : null)
                        }
                    }, {
                        key: "renderSetup",
                        value: function() {
                            var e, t, n = this.props.twoFactorAuth,
                                l = this.state.isCodeReady && !n.isAwaitingPendingSecretVerification,
                                o = n.isAwaitingPendingSecret || n.isRemovingPendingSecret,
                                c = n.isVerificationRejected && this.state.isPreviousSubmissionRelevant,
                                i = (e = n.pendingSecret, e.match(/.{1,4}/g).join(" ")).toLowerCase();
                            return r.createElement(Re.A, {
                                loading: o
                            }, r.createElement(b.A, null, r.createElement(A.A, null, r.createElement("h4", null, "Setup")), r.createElement(A.A, {
                                className: "text-end"
                            }, r.createElement("a", {
                                style: {
                                    marginRight: "1em"
                                },
                                target: "_blank",
                                href: Bt,
                                rel: "noreferrer"
                            }, "Help"), r.createElement(k.A, {
                                className: "btn",
                                onClick: this.cancelSecret
                            }, r.createElement(a.M2, {
                                icon: he.GR
                            }), " Cancel"))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement("hr", null))), r.createElement(b.A, null, r.createElement(Ut.A, {
                                hidden: 0 !== this.state.step
                            }, r.createElement(b.A, null, r.createElement(A.A, {
                                classname: "tw-flex"
                            }, r.createElement(b.A, null, r.createElement("div", {
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
                            }, r.createElement(a.M2, {
                                icon: It.dm,
                                size: "4x",
                                className: "tw-mr-1"
                            }), r.createElement(a.M2, {
                                icon: Rt.gg,
                                size: "4x"
                            }))))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement("hr", null))), r.createElement(b.A, null, r.createElement(A.A, {
                                className: "text-end"
                            }, r.createElement(k.A, {
                                color: "primary",
                                onClick: this.goToStep1
                            }, "Next ", r.createElement(a.M2, {
                                icon: Dt.Xk
                            }))))), r.createElement(Ut.A, {
                                hidden: 1 !== this.state.step
                            }, r.createElement(b.A, null, r.createElement(A.A, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 2"), ": Open the authenticator app and add a new entry. Then scan this barcode."), r.createElement("p", null, "If you can't scan the code,", " ", r.createElement(Zt, {
                                type: "button",
                                onClick: this.showTextKey
                            }, "enter the key manually"), "."), r.createElement("div", {
                                hidden: !this.state.isTextKeyShown
                            }, r.createElement("p", null, r.createElement("textarea", {
                                id: "textKey",
                                cols: "30",
                                rows: "3",
                                value: i,
                                style: {
                                    overflow: "hidden",
                                    resize: "none",
                                    marginRight: "1em",
                                    marginBottom: "0.5em",
                                    verticalAlign: "top"
                                },
                                readOnly: !0,
                                className: "text-monospace"
                            }), r.createElement(zt.CopyToClipboard, {
                                text: i
                            }, r.createElement(k.A, {
                                style: {
                                    verticalAlign: "top"
                                }
                            }, r.createElement(a.M2, {
                                icon: Ft.jP
                            }), " Copy"))))), r.createElement(A.A, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("p", null, r.createElement("img", {
                                className: "img-fluid",
                                src: n.pendingSecretQrCodeUrl,
                                alt: "Two-Factor Authentication Secret: ".concat(i)
                            })))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement("hr", null))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement(k.A, {
                                onClick: this.goToStep0
                            }, r.createElement(a.M2, {
                                icon: Pt.Wz
                            }), " Previous")), r.createElement(A.A, {
                                className: "text-end"
                            }, r.createElement(k.A, {
                                color: "primary",
                                onClick: this.goToStep2
                            }, "Next ", r.createElement(a.M2, {
                                icon: Dt.Xk
                            }))))), r.createElement(Ut.A, {
                                hidden: 2 !== this.state.step
                            }, r.createElement(b.A, null, r.createElement(A.A, {
                                xs: {
                                    size: "7"
                                }
                            }, r.createElement("p", null, r.createElement("b", null, "Step 3"), ": Find the new entry in your authenticator app, and enter the six-digit code.")), r.createElement(A.A, {
                                xs: {
                                    size: "5"
                                },
                                className: "text-end"
                            }, r.createElement("div", null, c && r.createElement(K.A, {
                                color: "warning"
                            }, r.createElement(a.M2, {
                                icon: vt.QJ
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
                            }), r.createElement(jt.A, {
                                disabled: !l,
                                color: "primary",
                                loading: n.isAwaitingPendingSecretVerification
                            }, "Verify"))))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement("hr", null))), r.createElement(b.A, null, r.createElement(A.A, null, r.createElement(k.A, {
                                onClick: this.goToStep1
                            }, r.createElement(a.M2, {
                                icon: Pt.Wz
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
            const Jt = (0, Lt.A)((0, p.Ng)(function(e) {
                return {
                    twoFactorAuthEnabled: e.currentUser.databaseUser.twoFactorAuthEnabled,
                    twoFactorAuth: e.twoFactorAuth
                }
            })(Ht));
            var Zt = (0, i.A)("button", {
                target: "e8g46ds0"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            });
            const en = function() {
                var e = (0, l.a$)().user;
                return r.createElement("div", null, r.createElement(a.Qc, null, "Account Settings"), r.createElement("h2", null, "Account Settings"), r.createElement(a.N3, null, r.createElement("h4", null, "Change Display Name")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(mt, null)), r.createElement(a.N3, null, r.createElement("h4", null, "Change Email")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(xe.A, null)), r.createElement(a.N3, null, r.createElement("h4", null, "Change Password")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(ft, {
                    user: e
                })), r.createElement(a.N3, null, r.createElement("h4", null, "Two-factor authentication")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(Jt, null)), r.createElement(a.N3, null, r.createElement("h4", null, "Account Linking")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(L, {
                    user: e
                })), r.createElement(a.N3, null, r.createElement("h4", null, "Privacy")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(yt, {
                    user: e
                })), r.createElement(a.N3, null, r.createElement("h4", null, "Age Verification")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(B, null)), r.createElement(a.N3, null, r.createElement("h4", null, "Copyright")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(ke, null)), !(null != e && e.hideContentFilterSettings) && r.createElement(r.Fragment, null, r.createElement(a.N3, null, r.createElement("h4", null, "Content Gating")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(ee, null))), r.createElement(a.N3, null, r.createElement("h4", null, "Accessibility")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(kt, null)), r.createElement(a.N3, null, r.createElement("h4", null, "User Data")), r.createElement(a.BW, {
                    className: "mb-2"
                }, r.createElement(gt, null)), r.createElement(a._F, {
                    className: "mb-2"
                }, r.createElement(a.N3, null, r.createElement("h4", null, "Danger Zone")), r.createElement(a.BW, null, r.createElement(w, null))))
            }
        },
        32254(e, t, n) {
            n.d(t, {
                A: () => x
            });
            var r = n(82544),
                a = n(32110),
                l = n(96704),
                o = n(7612),
                c = n(81617),
                i = n(69629),
                s = n(6913),
                u = n(48645),
                m = n(96540),
                d = n(5826),
                p = n(39704),
                f = n(30104),
                h = n(85052),
                w = n(69517),
                g = n.n(w),
                v = n(78502),
                E = n(13951),
                y = n(71957),
                b = n(71661),
                A = n(78479),
                k = n(44034);
            const x = function() {
                var e = (0, E.p$)().data,
                    t = (0, m.useState)(""),
                    n = (0, r.A)(t, 2),
                    w = n[0],
                    x = n[1],
                    N = (0, m.useState)(""),
                    C = (0, r.A)(N, 2),
                    S = C[0],
                    T = C[1],
                    O = (0, m.useState)(""),
                    P = (0, r.A)(O, 2),
                    D = P[0],
                    F = P[1],
                    R = (0, v.d7)(w),
                    I = (0, y.Fx)(),
                    M = (0, r.A)(I, 2),
                    z = M[0],
                    U = M[1],
                    j = U.isFetching,
                    L = U.isError,
                    V = U.isSuccess,
                    q = U.error,
                    _ = U.originalArgs,
                    G = (0, y.am)(),
                    W = (0, r.A)(G, 2),
                    $ = W[0],
                    Y = W[1],
                    B = Y.isLoading,
                    X = Y.isError,
                    Q = Y.error,
                    K = (0, E.B3)(),
                    H = (0, r.A)(K, 2),
                    J = H[0],
                    Z = H[1],
                    ee = Z.isFetching,
                    te = Z.isError,
                    ne = Z.error,
                    re = Z.isSuccess,
                    ae = (0, y.lM)({
                        email: R,
                        userId: null == e ? void 0 : e.id
                    }, {
                        skip: "" === R || !1 === g()(R)
                    }),
                    le = ae.data,
                    oe = ae.isFetching,
                    ce = ae.isSuccess,
                    ie = ae.originalArgs,
                    se = (null == e ? void 0 : e.emailVerified) && !(null != e && e.hasPendingEmail);
                (0, m.useEffect)(function() {
                    T(""), F("")
                }, [w]);
                var ue = (0, m.useMemo)(function() {
                        return ce && !1 === le.userExists && g()(R) && "" !== R
                    }, [le, R]),
                    me = (0, m.useMemo)(function() {
                        return "" !== S && S === R
                    }, [S, R]),
                    de = (0, m.useMemo)(function() {
                        if (!1 === g()(R) && "" !== R) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That's an invalid email.");
                        if (null != le && le.userExists && (null == ie ? void 0 : ie.email) === R) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " That email is already in use.");
                        if (X) return m.createElement(h.A, {
                            color: "warning"
                        }, m.createElement(b.M2, {
                            icon: u.QJ
                        }), " Failed to change news preference: ", Q, ".");
                        if (L && (null == _ ? void 0 : _.email) === R) {
                            F("");
                            var t = q.data.error.message;
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
                        return re ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " Your verification email has been resent to ", null == e ? void 0 : e.obfuscatedPendingEmail) : V ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " We've sent an verification email to you, please check your new email address inbox.") : null != e && e.hasPendingEmail ? m.createElement(h.A, {
                            color: "info"
                        }, m.createElement(b.M2, {
                            icon: s.iW
                        }), " An email change is pending verification: ", null == e ? void 0 : e.obfuscatedPendingEmail) : null
                    }, [re, te, L, V, le, ce, S, R, e, X]),
                    pe = (0, m.useMemo)(function() {
                        return !se || V ? m.createElement("span", null, m.createElement(b.M2, {
                            icon: i.is
                        }), " Resend Verification") : m.createElement("span", null, m.createElement(b.M2, {
                            icon: c.e6,
                            color: "success"
                        }), " Email Verified")
                    }, [se, V]),
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
                    value: w
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
                        return T(e.target.value)
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
                    icon: a.bM,
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
                    disabled: B
                }))), m.createElement("hr", null), m.createElement(d.A, {
                    className: "align-items-center justify-content-center d-flex mt-2"
                }, m.createElement(p.A, {
                    xs: "4"
                }, m.createElement(f.A, {
                    "aria-label": "resend email",
                    block: !0,
                    color: "primary",
                    disabled: !(null != e && e.hasPendingEmail) && !V || ee,
                    onClick: function() {
                        return J()
                    },
                    outline: !0
                }, pe)), m.createElement(p.A, {
                    xs: "4"
                }, m.createElement(f.A, {
                    block: !0,
                    color: "primary",
                    disabled: !ue || !me || j || "" === D,
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
                AP: () => c,
                CV: () => l,
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
                l = r.useGetAgeVerificationStatusQuery,
                o = r.useSendGroupInquiryLinkMutation,
                c = r.useSendInquiryLinkMutation
        },
        49843(e, t, n) {
            n.d(t, {
                Ds: () => s,
                Ee: () => i,
                QS: () => u,
                yf: () => m
            });
            var r = n(64467),
                a = n(89483);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var c = a.m.injectEndpoints({
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
                                invalidatesTags: (0, a.Z)(function(e) {
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
                                invalidatesTags: (0, a.Z)(function(e) {
                                    return [{
                                        type: "RestrictedContent",
                                        id: e.contentId
                                    }]
                                })
                            })
                        }
                    }
                }),
                i = c.useGetRestrictedContentQuery,
                s = c.useRequestContentRestrictionMutation,
                u = c.useDisputeContentRestrictionMutation,
                m = c.useDeleteDisputeMutation
        },
        28337(e, t, n) {
            n.d(t, {
                v: () => a
            });
            var r = new Set(["password", "password1", "passw0rd", "69696969", "11111111", "111111111", "aaaaaaaa", "aaaaaaaaa", "fuckfuck", "pooppoop", "football", "welcome", "starwars", "trustno1", "jordan23", "iloveyou", "whatever", "princess", "sunshine", "adobe123", "photoshop", "baseball", "superman", "12345678", "123456789", "1234567890", "87654321", "987654321", "0987654321", "zaq1zaq1", "1qaz2wsx", "qwertyuiop", "18atcskd2w", "1q2w3e4r", "asdfjkl;", "asdfghjk", "asdfghjkl", ";lkjfdsa", ";lkjasdf", "zxcvbnm,", "zxcvbnm,.", "zxcvbnm,./", "/.,mvcxz", "poiurewq", "poiuqwer", "qweruiop", "uiopuiop", "qwerqwer", "jkl;jkl;", "asdfasdf", "zxcfzxcv", "zxcvm,./", "m,./zxcv"]),
                a = function(e) {
                    return r.has(e.toLowerCase())
                }
        },
        58622(e, t, n) {
            n.d(t, {
                O: () => o
            });
            var r = n(10467),
                a = n(54756),
                l = n.n(a),
                o = function() {
                    var e = (0, r.A)(l().mark(function e() {
                        var t, n, r, a, o, c, i, s, u, m, d, p, f, h = arguments;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (t = h.length > 0 && void 0 !== h[0] ? h[0] : {}).redirectTo, r = void 0 === n ? "/home/login" : n, a = t.version, o = void 0 === a ? 2 : a, c = ["openid", "identify", "email", "sdk.social_layer_presence"], i = window.location.origin + window.location.pathname, s = i.split("/home/"), i = "".concat(s[0], "/home/discord/auth").concat(2 === o ? "/v2" : ""), u = {
                                        redirectUri: i,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, m = JSON.stringify(u), d = btoa(m), p = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: u.redirectUri,
                                        response_type: "code",
                                        scope: c.join(" "),
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
                B: () => i
            });
            var r = n(10467),
                a = n(54756),
                l = n.n(a),
                o = n(66948),
                c = ["openid", "email", "profile"],
                i = function() {
                    var e = (0, r.A)(l().mark(function e() {
                        var t, n;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = new URLSearchParams({
                                        client_id: "827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com",
                                        redirect_uri: window.location.origin + window.location.pathname,
                                        response_type: "id_token",
                                        scope: c.join(" "),
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
                h: () => r
            });
            var r = function(e) {
                if (null != e && e.requiresTwoFactorAuth) {
                    var t, n, r = "/home/stepupauth";
                    return "emailOtp" === (null === (t = e.requiresTwoFactorAuth) || void 0 === t ? void 0 : t[0]) && (r = "/home/emailstepupauth"), 0 === (null === (n = e.requiresTwoFactorAuth) || void 0 === n ? void 0 : n.length) && e.ticket && (r = "/home/verify-password"), r
                }
                return null
            }
        },
        34450(e, t, n) {
            e.exports = n.p + "53f4092cfcb77e5217e639fd7a2012ff35100e4d9b6ed70707b47746bcb81c86.svg"
        }
    }
]);
//# sourceMappingURL=fba0b917b729150e01749cbb6926fedb74a7fec320a6a8de2c6448c7384abc20.js.map