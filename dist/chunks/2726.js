"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2726], {
        73238(e, t) {
            var n = "discord",
                r = [],
                o = "f392",
                a = "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z";
            t.mw = {
                prefix: "fab",
                iconName: n,
                icon: [640, 512, r, o, a]
            }, t._2 = t.mw
        },
        52726(e, t, n) {
            n.r(t), n.d(t, {
                default: () => q
            });
            var r = n(10467),
                o = n(15902),
                a = n(64850),
                i = n(73238),
                l = n(54756),
                c = n.n(l),
                u = n(96540),
                s = n(6376),
                d = n(47767),
                m = n(84976),
                p = n(24751),
                w = n(558),
                v = n(6324),
                h = n(37097),
                f = n(15184),
                g = n(32662),
                k = n(53818);
            const b = function(e) {
                var t = e.trackingEventName,
                    n = void 0 === t ? null : t,
                    r = (0, g.Mj)("campaigns", []),
                    a = (0, o.A)(r, 2),
                    i = a[0],
                    l = a[1],
                    c = (0, g.Mj)("campaignsSeen", []),
                    s = (0, o.A)(c, 2),
                    d = s[0],
                    m = s[1],
                    p = (0, h.A)();
                (0, u.useEffect)(function() {
                    if (null !== p) {
                        null !== n && (0, k.u4)(n, {
                            campaign: p
                        });
                        var e = [].concat((0, f.A)(i), [p]);
                        l((0, f.A)(new Map(e.map(function(e) {
                            return [e.id, e]
                        })).values())), m(d.filter(function(e) {
                            return e.name !== p.name
                        }))
                    }
                }, [])
            };
            var x = n(13951),
                A = n(89483),
                E = n(15033),
                y = n(84212),
                N = n(65950),
                T = n(58622),
                C = n(22479),
                L = n(53369),
                F = n(82030),
                S = n(5556),
                U = n.n(S),
                _ = n(25423),
                O = n(17535),
                V = function(e) {
                    var t = e.unlinkedUser,
                        n = e.onLink,
                        r = e.onCancel,
                        o = e.linkProvider;
                    return u.createElement(_.A, {
                        isOpen: null == t ? void 0 : t.displayName,
                        toggle: r,
                        centered: !0
                    }, u.createElement(O.A, {
                        className: "tw-bg-[#171B1F] tw-text-white tw-p-5"
                    }, u.createElement("h2", {
                        className: "text-center ty-my-5 tw-p-5"
                    }, "Link ", o, " Account"), u.createElement("div", {
                        className: "p-3 text-center"
                    }, "A VRChat account already exists with the same email as your ", o, " account:"), u.createElement("div", {
                        className: "p-3 text-center"
                    }, u.createElement("strong", null, null == t ? void 0 : t.displayName)), u.createElement("div", {
                        className: "p-3 text-center"
                    }, "Do you want to link your ", o, " account to this VRChat account? You can unlink it anytime."), u.createElement("div", {
                        className: "px-3 pt-3"
                    }, u.createElement(E.$n, {
                        className: "tw-my-2",
                        expand: !0,
                        onClick: n
                    }, "Link Account"), u.createElement(E.$n, {
                        onClick: r,
                        className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                    }, "Cancel"), " ")))
                };
            V.propTypes = {
                unlinkedUser: U().object,
                onLink: U().func.isRequired,
                onCancel: U().func.isRequired,
                linkProvider: U().string.isRequired
            };
            const R = V;
            var D = n(97890);
            const q = function() {
                var e;
                b({
                    trackingEventName: "Login_Campaign_View"
                });
                var t = (0, d.Zp)(),
                    n = (0, s.wA)(),
                    l = (0, d.zy)().state,
                    f = (0, x._L)(),
                    S = (0, o.A)(f, 2),
                    U = S[0],
                    _ = S[1],
                    O = _.isLoading,
                    V = _.error,
                    q = _.isError,
                    z = (0, m.ok)(),
                    M = (0, o.A)(z, 2),
                    P = (M[0], M[1], (0, x.xG)()),
                    G = (0, o.A)(P, 2),
                    I = G[0],
                    X = G[1],
                    j = X.isLoading,
                    B = X.error,
                    $ = X.isError,
                    Z = (0, x.Ng)(),
                    H = (0, o.A)(Z, 1)[0],
                    J = (0, x.P2)().data,
                    K = (0, u.useState)(""),
                    Q = (0, o.A)(K, 2),
                    W = Q[0],
                    Y = Q[1],
                    ee = (0, u.useState)(""),
                    te = (0, o.A)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    oe = (0, u.useState)(null),
                    ae = (0, o.A)(oe, 2),
                    ie = ae[0],
                    le = ae[1],
                    ce = (0, u.useState)(null),
                    ue = (0, o.A)(ce, 2),
                    se = ue[0],
                    de = ue[1],
                    me = (0, h.A)(),
                    pe = (0, x.a2)(),
                    we = (0, o.A)(pe, 2),
                    ve = we[0],
                    he = we[1].isLoading,
                    fe = (0, x.ey)(),
                    ge = (0, o.A)(fe, 2),
                    ke = ge[0],
                    be = ge[1].isLoading,
                    xe = (0, x.fC)(),
                    Ae = (0, o.A)(xe, 2),
                    Ee = Ae[0],
                    ye = Ae[1].isLoading,
                    Ne = (0, x.gV)(),
                    Te = (0, o.A)(Ne, 2),
                    Ce = Te[0],
                    Le = Te[1],
                    Fe = Le.isLoading,
                    Se = Le.error,
                    Ue = Le.isError,
                    _e = (0, x.wr)(),
                    Oe = (0, o.A)(_e, 2),
                    Ve = Oe[0],
                    Re = Oe[1],
                    De = Re.isLoading,
                    qe = Re.error,
                    ze = Re.isError,
                    Me = 2 === (null == l ? void 0 : l.discordOAuthVersion) ? ke : ve,
                    Pe = 2 === (null == l ? void 0 : l.discordOAuthVersion) ? Ce : Ve,
                    Ge = De || Fe,
                    Ie = qe || Se,
                    Xe = ze || Ue,
                    je = he || be,
                    Be = function() {
                        null != l && l.redirectTo ? t(l.redirectTo) : t("/home")
                    };
                (0, u.useEffect)(function() {
                    var e;
                    if (!(null == J || null === (e = J.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == l ? void 0 : l.logout)) return n(A.m.util.resetApiState()), n((0, w.ri)()), H(), void(0, g.Jv)("isVRCFriendsOpen");
                    null != J && J.id && Be()
                }, [J]), (0, u.useEffect)(function() {
                    (0, r.A)(c().mark(function e() {
                        var t, r, o, i, u;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = null == l ? void 0 : l.discordToken) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, Me({
                                        token: t
                                    });
                                case 5:
                                    if (null == (r = e.sent) || !r.error) {
                                        e.next = 10;
                                        break
                                    }
                                    if (404 === (null == r || null === (o = r.error) || void 0 === o ? void 0 : o.status)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n((0, N.X)({
                                        title: "Failure",
                                        message: null !== (i = null === (u = response) || void 0 === u || null === (u = u.error) || void 0 === u || null === (u = u.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) && void 0 !== i ? i : "Discord Authentication Failed",
                                        icon: a.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 9:
                                    return e.abrupt("return", $e(t));
                                case 10:
                                    return e.abrupt("return", le({
                                        discordAccessToken: t,
                                        unlinkedUser: null == r ? void 0 : r.data
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, u.useEffect)(function() {
                    (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null != l && l.continueDiscordAccessToken) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.abrupt("return", $e(null == l ? void 0 : l.continueDiscordAccessToken));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, u.useEffect)(function() {
                    (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null != l && l.continueIdToken) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.abrupt("return", Ze(null == l ? void 0 : l.continueIdToken));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []);
                var $e = function() {
                        var e = (0, r.A)(c().mark(function e(r) {
                            var o, i, u, s, d, m, p;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, le(null), e.next = 4, Pe({
                                            token: r
                                        }).unwrap();
                                    case 4:
                                        if (null == (o = e.sent) || !o.continueToken) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", t("/home/login/discord/finalize", {
                                            state: {
                                                continueToken: o.continueToken,
                                                reservedName: o.reservedName.displayName,
                                                discordOAuthVersion: null == l ? void 0 : l.discordOAuthVersion
                                            }
                                        }));
                                    case 7:
                                        (0, k.u4)("Login_LoginSuccess", {
                                            user: o.id,
                                            campaign: me,
                                            accountType: "discord"
                                        }), Be(), e.next = 21;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || !i.requiresTwoFactorAuth) {
                                            e.next = 19;
                                            break
                                        }
                                        return d = e.t0.data, m = (0, L.h)(d), p = {
                                            redirectTo: "/home/login",
                                            scope: d.scope,
                                            ticket: d.ticket,
                                            stepUpToken: d.stepUpToken,
                                            redirectState: {
                                                oauthProvider: D.zN.DISCORD,
                                                continueDiscordAccessToken: r,
                                                unlinkedUser: ie.unlinkedUser,
                                                redirectTo: "/home/login",
                                                discordOAuthVersion: null == l ? void 0 : l.discordOAuthVersion
                                            }
                                        }, t(m, {
                                            state: p
                                        }), e.abrupt("return");
                                    case 19:
                                        return console.error("Failed to link Discord account:", e.t0), e.abrupt("return", n((0, N.X)({
                                            title: "Failure",
                                            message: null !== (u = null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== u ? u : "Discord Authentication Failed",
                                            icon: a.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 11]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ze = function() {
                        var e = (0, r.A)(c().mark(function e(r) {
                            var o, i, l, u, s, d, m, p;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, de(null), e.next = 4, I({
                                            token: r
                                        }).unwrap();
                                    case 4:
                                        if (null == (o = e.sent) || !o.continueToken) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", t("/home/login/google/finalize", {
                                            state: {
                                                continueToken: o.continueToken,
                                                reservedName: null == o || null === (i = o.reservedName) || void 0 === i ? void 0 : i.displayName
                                            }
                                        }));
                                    case 7:
                                        (0, k.u4)("Login_LoginSuccess", {
                                            user: o.id,
                                            campaign: me,
                                            accountType: "google"
                                        }), Be(), e.next = 21;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || !l.requiresTwoFactorAuth) {
                                            e.next = 19;
                                            break
                                        }
                                        return d = e.t0.data, m = (0, L.h)(d), p = {
                                            redirectTo: "/home/login",
                                            scope: d.scope,
                                            ticket: d.ticket,
                                            stepUpToken: d.stepUpToken,
                                            redirectState: {
                                                oauthProvider: D.zN.GOOGLE,
                                                continueIdToken: r,
                                                unlinkedUser: null == se ? void 0 : se.unlinkedUser,
                                                redirectTo: "/home/login"
                                            }
                                        }, t(m, {
                                            state: p
                                        }), e.abrupt("return");
                                    case 19:
                                        return console.error("Failed to link Google account:", e.t0), e.abrupt("return", n((0, N.X)({
                                            title: "Failure",
                                            message: null !== (u = null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== u ? u : "Google Authentication Failed",
                                            icon: a.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 11]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, u.useEffect)(function() {
                    (0, r.A)(c().mark(function e() {
                        var t, r, o, i, l, u, s, d;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = window.location.hash.substring(1), r = new URLSearchParams(t), o = r.get("id_token"), !(i = r.get("error"))) {
                                        e.next = 8;
                                        break
                                    }
                                    return history.replaceState(null, "", window.location.pathname), console.error("Google Authentication Error:", i), e.abrupt("return", n((0, N.X)({
                                        title: "Failure",
                                        message: "Google Authentication Failed",
                                        icon: a.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 8:
                                    if (!o) {
                                        e.next = 18;
                                        break
                                    }
                                    return history.replaceState(null, "", window.location.pathname), e.next = 12, Ee({
                                        token: o
                                    });
                                case 12:
                                    if (null == (l = e.sent) || !l.error) {
                                        e.next = 17;
                                        break
                                    }
                                    if (404 === (null == l || null === (u = l.error) || void 0 === u ? void 0 : u.status)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return", n((0, N.X)({
                                        title: "Failure",
                                        message: null !== (s = null == l || null === (d = l.error) || void 0 === d || null === (d = d.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message) && void 0 !== s ? s : "Google Authentication Failed",
                                        icon: a.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 16:
                                    return e.abrupt("return", Ze(o));
                                case 17:
                                    return e.abrupt("return", de({
                                        idToken: o,
                                        unlinkedUser: null == l ? void 0 : l.data
                                    }));
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []);
                var He, Je, Ke = function(e) {
                        var t, n;
                        e.preventDefault(), Y(null !== (t = null === (n = e.target) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : "")
                    },
                    Qe = function(e) {
                        var t, n;
                        e.preventDefault(), re(null !== (t = null === (n = e.target) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : "")
                    },
                    We = function() {
                        var e = (0, r.A)(c().mark(function e(n) {
                            var r, o, a, i;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n.preventDefault(), (0, k.c0)(!1), e.prev = 2, e.next = 5, U({
                                            username: encodeURIComponent(null == W ? void 0 : W.trim()),
                                            password: encodeURIComponent(ne)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (a = "/home/twofactorauth", "emailOtp" === (null === (o = r.requiresTwoFactorAuth) || void 0 === o ? void 0 : o[0]) && (a = "/home/emailtwofactorauth"), null == l || !l.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return t(a, {
                                            state: {
                                                redirectTo: l.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return t(a), e.abrupt("return");
                                    case 14:
                                        return (0, k.u4)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: me
                                        }), Be(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, k.u4)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message
                                        }), Y(null == W ? void 0 : W.trim());
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 19]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ye = O || Ge || j || je || ye,
                    et = q || Xe || $,
                    tt = V || Ie || B,
                    nt = "Failed to Log In",
                    rt = null == tt || null === (e = tt.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                q && ((null === (He = rt) || void 0 === He ? void 0 : He.indexOf(":")) > 0 ? (nt = rt.substring(0, rt.indexOf(":")).trim(), rt = rt.substring(rt.indexOf(":") + 1).trim()) : 0 === (null === (Je = rt) || void 0 === Je ? void 0 : Je.indexOf(":")) && (rt = rt.substring(1).trim()));
                return u.createElement(y.A, {
                    showCredits: !0
                }, u.createElement(E.Qc, null, "Login"), u.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, u.createElement(F.lV, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: We
                }, u.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), u.createElement(F.fI, {
                    className: "align-items-flex-end justify-content-between"
                }), et && u.createElement(E.$T, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: nt,
                    message: rt,
                    className: "mb-2"
                }), u.createElement(E.pd, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: W,
                    onChange: Ke,
                    onKeyUp: Ke
                }), u.createElement(E.pd, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: ne,
                    onChange: Qe,
                    onKeyUp: Qe
                }), u.createElement("div", {
                    className: "tw-w-full tw-mt-3"
                }, "Forgot your", " ", u.createElement(m.N_, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", u.createElement(m.N_, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), u.createElement(E.$n, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: Ye,
                    disabled: "" === W || "" === ne
                }, "Log in"), u.createElement(F.fI, {
                    className: "tw-items-center tw-mt-4 tw-gap-2"
                }, u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                }), u.createElement("div", {
                    className: "tw-shrink-0"
                }, "Or"), u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                })), u.createElement(E.$n, {
                    onClick: T.O,
                    "aria-label": "Login with Discord",
                    className: "tw-mt-5 tw-bg-[#5865F2] tw-text-white tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: Ye
                }, u.createElement(v.A, {
                    color: "#ffffff",
                    icon: i._2,
                    className: "tw-mr-1 tw-p-0 tw-w-[26px] tw-h-[24px]"
                }), "Log in with Discord"), u.createElement(E.$n, {
                    onClick: C.B,
                    "aria-label": "Sign in with Google",
                    className: "tw-mt-5 tw-bg-[#FFFFFF] tw-text-[#1f1f1f] tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: O
                }, u.createElement("svg", {
                    className: "tw-mr-1 tw-p-0 tw-w-[20px] tw-h-[20px]",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48"
                }, u.createElement("path", {
                    fill: "#EA4335",
                    d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                }), u.createElement("path", {
                    fill: "#4285F4",
                    d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                }), u.createElement("path", {
                    fill: "#FBBC05",
                    d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                }), u.createElement("path", {
                    fill: "#34A853",
                    d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                }), u.createElement("path", {
                    fill: "none",
                    d: "M0 0h48v48H0z"
                })), "Sign in with Google"), u.createElement("h4", {
                    className: "tw-text-base tw-text-white tw-text-center tw-mt-5 tw-mb-0"
                }, "New to VRChat?"), u.createElement(p.z9, {
                    to: "/home/register",
                    className: "tw-w-full",
                    "aria-label": "Create an account"
                }, "Create an account"), u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), u.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking",
                    className: "tw-text-sm tw-text-center tw-mt-3 tw-block"
                }, "Using an Oculus, Steam, or Viveport account?"))), u.createElement(R, {
                    linkProvider: "Discord",
                    unlinkedUser: null == ie ? void 0 : ie.unlinkedUser,
                    onLink: function() {
                        $e(ie.discordAccessToken)
                    },
                    onCancel: function() {
                        return le(null)
                    }
                }), u.createElement(R, {
                    linkProvider: "Google",
                    unlinkedUser: null == se ? void 0 : se.unlinkedUser,
                    onLink: function() {
                        Ze(se.idToken)
                    },
                    onCancel: function() {
                        return de(null)
                    }
                }))
            }
        },
        58622(e, t, n) {
            n.d(t, {
                O: () => i
            });
            var r = n(10467),
                o = n(54756),
                a = n.n(o),
                i = function() {
                    var e = (0, r.A)(a().mark(function e() {
                        var t, n, r, o, i, l, c, u, s, d, m, p, w, v = arguments;
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (t = v.length > 0 && void 0 !== v[0] ? v[0] : {}).redirectTo, r = void 0 === n ? "/home/login" : n, o = t.version, i = void 0 === o ? 2 : o, l = ["openid", "identify", "email", "sdk.social_layer_presence"], c = window.location.origin + window.location.pathname, u = c.split("/home/"), c = "".concat(u[0], "/home/discord/auth").concat(2 === i ? "/v2" : ""), s = {
                                        redirectUri: c,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, d = JSON.stringify(s), m = btoa(d), p = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: s.redirectUri,
                                        response_type: "code",
                                        scope: l.join(" "),
                                        state: m
                                    }), w = "https://discord.com/oauth2/authorize?".concat(p.toString()), window.location.href = w;
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
            var r = n(10467),
                o = n(54756),
                a = n.n(o),
                i = n(66948),
                l = ["openid", "email", "profile"],
                c = function() {
                    var e = (0, r.A)(a().mark(function e() {
                        var t, n;
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = new URLSearchParams({
                                        client_id: "827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com",
                                        redirect_uri: window.location.origin + window.location.pathname,
                                        response_type: "id_token",
                                        scope: l.join(" "),
                                        nonce: (0, i.A)()
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
        }
    }
]);
//# sourceMappingURL=a91f17b64893a0fdb376578bbfeaf987ad4bfbde1f02b69e4fd002cc2c69dd9f.js.map