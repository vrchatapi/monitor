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
                default: () => D
            });
            var r = n(10467),
                o = n(82544),
                a = n(64850),
                i = n(86342),
                l = n(73238),
                u = n(54756),
                c = n.n(u),
                s = n(96540),
                d = n(6376),
                p = n(47767),
                m = n(84976),
                w = n(24751),
                v = n(558),
                f = n(6324),
                h = n(37097),
                g = n(66911),
                k = n(32662),
                b = n(53818);
            const A = function(e) {
                var t = e.trackingEventName,
                    n = void 0 === t ? null : t,
                    r = (0, k.Mj)("campaigns", []),
                    a = (0, o.A)(r, 2),
                    i = a[0],
                    l = a[1],
                    u = (0, k.Mj)("campaignsSeen", []),
                    c = (0, o.A)(u, 2),
                    d = c[0],
                    p = c[1],
                    m = (0, h.A)();
                (0, s.useEffect)(function() {
                    if (null !== m) {
                        null !== n && (0, b.u4)(n, {
                            campaign: m
                        });
                        var e = [].concat((0, g.A)(i), [m]);
                        l((0, g.A)(new Map(e.map(function(e) {
                            return [e.id, e]
                        })).values())), p(d.filter(function(e) {
                            return e.name !== m.name
                        }))
                    }
                }, [])
            };
            var x = n(13951),
                y = n(89483),
                E = n(71661),
                T = n(84212),
                N = n(65950),
                F = n(98462),
                L = n(58622),
                C = n(22479),
                S = n(53369),
                U = n(82030),
                _ = n(5556),
                O = n.n(_),
                V = n(25423),
                R = n(17535),
                q = function(e) {
                    var t = e.unlinkedUser,
                        n = e.onLink,
                        r = e.onCancel,
                        o = e.linkProvider;
                    return s.createElement(V.A, {
                        isOpen: null == t ? void 0 : t.displayName,
                        toggle: r,
                        centered: !0
                    }, s.createElement(R.A, {
                        className: "tw-bg-[#171B1F] tw-text-white tw-p-5"
                    }, s.createElement("h2", {
                        className: "text-center ty-my-5 tw-p-5"
                    }, "Link ", o, " Account"), s.createElement("div", {
                        className: "p-3 text-center"
                    }, "A VRChat account already exists with the same email as your ", o, " account:"), s.createElement("div", {
                        className: "p-3 text-center"
                    }, s.createElement("strong", null, null == t ? void 0 : t.displayName)), s.createElement("div", {
                        className: "p-3 text-center"
                    }, "Do you want to link your ", o, " account to this VRChat account? You can unlink it anytime."), s.createElement("div", {
                        className: "px-3 pt-3"
                    }, s.createElement(E.$n, {
                        className: "tw-my-2",
                        expand: !0,
                        onClick: n
                    }, "Link Account"), s.createElement(E.$n, {
                        onClick: r,
                        className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                    }, "Cancel"), " ")))
                };
            q.propTypes = {
                unlinkedUser: O().object,
                onLink: O().func.isRequired,
                onCancel: O().func.isRequired,
                linkProvider: O().string.isRequired
            };
            const P = q;
            var X = n(97890);
            const D = function() {
                var e;
                A({
                    trackingEventName: "Login_Campaign_View"
                });
                var t = (0, p.Zp)(),
                    n = (0, d.wA)(),
                    u = (0, p.zy)().state,
                    g = (0, x._L)(),
                    _ = (0, o.A)(g, 2),
                    O = _[0],
                    V = _[1],
                    R = V.isLoading,
                    q = V.error,
                    D = V.isError,
                    z = (0, m.ok)(),
                    I = (0, o.A)(z, 2),
                    M = (I[0], I[1], (0, x.xG)()),
                    j = (0, o.A)(M, 2),
                    G = j[0],
                    $ = j[1],
                    B = $.isLoading,
                    Z = $.error,
                    K = $.isError,
                    H = (0, x.Mj)(),
                    J = (0, o.A)(H, 2),
                    Q = J[0],
                    W = J[1],
                    Y = W.isLoading,
                    ee = W.error,
                    te = W.isError,
                    ne = (0, x.Ng)(),
                    re = (0, o.A)(ne, 1)[0],
                    oe = (0, x.P2)().data,
                    ae = (0, s.useState)(""),
                    ie = (0, o.A)(ae, 2),
                    le = ie[0],
                    ue = ie[1],
                    ce = (0, s.useState)(""),
                    se = (0, o.A)(ce, 2),
                    de = se[0],
                    pe = se[1],
                    me = (0, s.useState)(null),
                    we = (0, o.A)(me, 2),
                    ve = we[0],
                    fe = we[1],
                    he = (0, s.useState)(null),
                    ge = (0, o.A)(he, 2),
                    ke = ge[0],
                    be = ge[1],
                    Ae = (0, s.useState)(null),
                    xe = (0, o.A)(Ae, 2),
                    ye = xe[0],
                    Ee = xe[1],
                    Te = (0, h.A)(),
                    Ne = (0, x.a2)(),
                    Fe = (0, o.A)(Ne, 2),
                    Le = Fe[0],
                    Ce = Fe[1].isLoading,
                    Se = (0, x.ey)(),
                    Ue = (0, o.A)(Se, 2),
                    _e = Ue[0],
                    Oe = Ue[1].isLoading,
                    Ve = (0, x.fC)(),
                    Re = (0, o.A)(Ve, 2),
                    qe = Re[0],
                    Pe = Re[1].isLoading,
                    Xe = (0, x.w1)(),
                    De = (0, o.A)(Xe, 2),
                    ze = De[0],
                    Ie = De[1].isLoading,
                    Me = (0, x.gV)(),
                    je = (0, o.A)(Me, 2),
                    Ge = je[0],
                    $e = je[1],
                    Be = $e.isLoading,
                    Ze = $e.error,
                    Ke = $e.isError,
                    He = (0, x.wr)(),
                    Je = (0, o.A)(He, 2),
                    Qe = Je[0],
                    We = Je[1],
                    Ye = We.isLoading,
                    et = We.error,
                    tt = We.isError,
                    nt = 2 === (null == u ? void 0 : u.discordOAuthVersion) ? _e : Le,
                    rt = 2 === (null == u ? void 0 : u.discordOAuthVersion) ? Ge : Qe,
                    ot = Ye || Be,
                    at = et || Ze,
                    it = tt || Ke,
                    lt = Ce || Oe,
                    ut = function() {
                        null != u && u.redirectTo ? t(u.redirectTo) : t("/home")
                    };
                (0, s.useEffect)(function() {
                    var e;
                    if (!(null == oe || null === (e = oe.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == u ? void 0 : u.logout)) return n(y.m.util.resetApiState()), n((0, v.ri)()), re(), void(0, k.Jv)("isVRCFriendsOpen");
                    null != oe && oe.id && ut()
                }, [oe]), (0, s.useEffect)(function() {
                    (0, r.A)(c().mark(function e() {
                        var t, r, o, i, l;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = null == u ? void 0 : u.discordToken) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, nt({
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
                                        message: null !== (i = null === (l = response) || void 0 === l || null === (l = l.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== i ? i : "Discord Authentication Failed",
                                        icon: a.X4,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 9:
                                    return e.abrupt("return", ct(t));
                                case 10:
                                    return e.abrupt("return", fe({
                                        discordAccessToken: t,
                                        unlinkedUser: null == r ? void 0 : r.data
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))()
                }, []), (0, s.useEffect)(function() {
                    null != u && u.continueDiscordAccessToken && ct(u.continueDiscordAccessToken)
                }, []), (0, s.useEffect)(function() {
                    null != u && u.continueIdToken && st(u.continueIdToken)
                }, []), (0, s.useEffect)(function() {
                    null != u && u.continueAppleIdentityToken && dt(u.continueAppleIdentityToken)
                }, []);
                var ct = function() {
                        var e = (0, r.A)(c().mark(function e(r) {
                            var o, i, l, s, d, p, m;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, fe(null), e.next = 4, rt({
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
                                                discordOAuthVersion: null == u ? void 0 : u.discordOAuthVersion
                                            }
                                        }));
                                    case 7:
                                        (0, b.u4)("Login_LoginSuccess", {
                                            user: o.id,
                                            campaign: Te,
                                            accountType: "discord"
                                        }), ut(), e.next = 21;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || !i.requiresTwoFactorAuth) {
                                            e.next = 19;
                                            break
                                        }
                                        return d = e.t0.data, p = (0, S.h)(d), m = {
                                            redirectTo: "/home/login",
                                            scope: d.scope,
                                            ticket: d.ticket,
                                            stepUpToken: d.stepUpToken,
                                            redirectState: {
                                                oauthProvider: X.zN.DISCORD,
                                                continueDiscordAccessToken: r,
                                                unlinkedUser: ve.unlinkedUser,
                                                redirectTo: "/home/login",
                                                discordOAuthVersion: null == u ? void 0 : u.discordOAuthVersion
                                            }
                                        }, t(p, {
                                            state: m
                                        }), e.abrupt("return");
                                    case 19:
                                        return console.error("Failed to link Discord account:", e.t0), e.abrupt("return", n((0, N.X)({
                                            title: "Failure",
                                            message: null !== (l = null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== l ? l : "Discord Authentication Failed",
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
                    st = function() {
                        var e = (0, r.A)(c().mark(function e(r) {
                            var o, i, l, u, s, d, p, m;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, be(null), e.next = 4, G({
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
                                        (0, b.u4)("Login_LoginSuccess", {
                                            user: o.id,
                                            campaign: Te,
                                            accountType: "google"
                                        }), ut(), e.next = 21;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || !l.requiresTwoFactorAuth) {
                                            e.next = 19;
                                            break
                                        }
                                        return d = e.t0.data, p = (0, S.h)(d), m = {
                                            redirectTo: "/home/login",
                                            scope: d.scope,
                                            ticket: d.ticket,
                                            stepUpToken: d.stepUpToken,
                                            redirectState: {
                                                oauthProvider: X.zN.GOOGLE,
                                                continueIdToken: r,
                                                unlinkedUser: null == ke ? void 0 : ke.unlinkedUser,
                                                redirectTo: "/home/login"
                                            }
                                        }, t(p, {
                                            state: m
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
                    }(),
                    dt = function() {
                        var e = (0, r.A)(c().mark(function e(r) {
                            var o, i, l, u, s, d, p, m;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Q({
                                            identityToken: r
                                        }).unwrap();
                                    case 3:
                                        if (null == (o = e.sent) || !o.continueToken) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", t("/home/login/apple/finalize", {
                                            state: {
                                                continueToken: o.continueToken,
                                                reservedName: null == o || null === (i = o.reservedName) || void 0 === i ? void 0 : i.displayName,
                                                requestedFields: null == o ? void 0 : o.requestedFields
                                            }
                                        }));
                                    case 6:
                                        (0, b.u4)("Login_LoginSuccess", {
                                            user: o.id,
                                            campaign: Te,
                                            accountType: "apple"
                                        }), ut(), e.next = 20;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || !l.requiresTwoFactorAuth) {
                                            e.next = 18;
                                            break
                                        }
                                        return d = e.t0.data, p = (0, S.h)(d), m = {
                                            redirectTo: "/home/login",
                                            scope: d.scope,
                                            ticket: d.ticket,
                                            stepUpToken: d.stepUpToken,
                                            redirectState: {
                                                oauthProvider: X.zN.APPLE,
                                                continueAppleIdentityToken: r,
                                                redirectTo: "/home/login"
                                            }
                                        }, t(p, {
                                            state: m
                                        }), e.abrupt("return");
                                    case 18:
                                        return console.error("Failed to link Apple account:", e.t0), e.abrupt("return", n((0, N.X)({
                                            title: "Failure",
                                            message: null !== (u = null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== u ? u : "Apple Authentication Failed",
                                            icon: a.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 10]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    pt = function() {
                        var e = (0, r.A)(c().mark(function e() {
                            var t, r, o, i, l;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, F.Q)();
                                    case 3:
                                        if (null != (t = e.sent) && t.identityToken) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        return e.next = 8, ze({
                                            identityToken: t.identityToken
                                        });
                                    case 8:
                                        if (null == (r = e.sent) || !r.error) {
                                            e.next = 13;
                                            break
                                        }
                                        if (404 === (null == r || null === (o = r.error) || void 0 === o ? void 0 : o.status)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", n((0, N.X)({
                                            title: "Failure",
                                            message: null !== (i = null == r || null === (l = r.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== i ? i : "Apple Authentication Failed",
                                            icon: a.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 12:
                                        return e.abrupt("return", dt(t.identityToken));
                                    case 13:
                                        return e.abrupt("return", Ee({
                                            identityToken: t.identityToken,
                                            unlinkedUser: null == r ? void 0 : r.data
                                        }));
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(0), console.error("Apple Sign In Error:", e.t0), n((0, N.X)({
                                            title: "Failure",
                                            message: "Apple Authentication Failed",
                                            icon: a.X4,
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 16]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, s.useEffect)(function() {
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
                                    return history.replaceState(null, "", window.location.pathname), e.next = 12, qe({
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
                                    return e.abrupt("return", st(o));
                                case 17:
                                    return e.abrupt("return", be({
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
                var mt, wt, vt = function(e) {
                        var t, n;
                        e.preventDefault(), ue(null !== (t = null === (n = e.target) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : "")
                    },
                    ft = function(e) {
                        var t, n;
                        e.preventDefault(), pe(null !== (t = null === (n = e.target) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : "")
                    },
                    ht = function() {
                        var e = (0, r.A)(c().mark(function e(n) {
                            var r, o, a, i;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n.preventDefault(), (0, b.c0)(!1), e.prev = 2, e.next = 5, O({
                                            username: encodeURIComponent(null == le ? void 0 : le.trim()),
                                            password: encodeURIComponent(de)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (a = "/home/twofactorauth", "emailOtp" === (null === (o = r.requiresTwoFactorAuth) || void 0 === o ? void 0 : o[0]) && (a = "/home/emailtwofactorauth"), null == u || !u.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return t(a, {
                                            state: {
                                                redirectTo: u.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return t(a), e.abrupt("return");
                                    case 14:
                                        return (0, b.u4)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: Te
                                        }), ut(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, b.u4)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message
                                        }), ue(null == le ? void 0 : le.trim());
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
                    gt = R || ot || B || Y || lt || Pe || Ie,
                    kt = D || it || K || te,
                    bt = q || at || Z || ee,
                    At = "Failed to Log In",
                    xt = null == bt || null === (e = bt.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                D && ((null === (mt = xt) || void 0 === mt ? void 0 : mt.indexOf(":")) > 0 ? (At = xt.substring(0, xt.indexOf(":")).trim(), xt = xt.substring(xt.indexOf(":") + 1).trim()) : 0 === (null === (wt = xt) || void 0 === wt ? void 0 : wt.indexOf(":")) && (xt = xt.substring(1).trim()));
                return s.createElement(T.A, {
                    showCredits: !0
                }, s.createElement(E.Qc, null, "Login"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, s.createElement(U.lV, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: ht
                }, s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), s.createElement(U.fI, {
                    className: "align-items-flex-end justify-content-between"
                }), kt && s.createElement(E.$T, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: At,
                    message: xt,
                    className: "mb-2"
                }), s.createElement(E.pd, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: le,
                    onChange: vt,
                    onKeyUp: vt
                }), s.createElement(E.pd, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: de,
                    onChange: ft,
                    onKeyUp: ft
                }), s.createElement("div", {
                    className: "tw-w-full tw-mt-3"
                }, "Forgot your", " ", s.createElement(m.N_, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", s.createElement(m.N_, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), s.createElement(E.$n, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: gt,
                    disabled: "" === le || "" === de
                }, "Log in"), s.createElement(U.fI, {
                    className: "tw-items-center tw-mt-4 tw-gap-2"
                }, s.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                }), s.createElement("div", {
                    className: "tw-shrink-0"
                }, "Or"), s.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                })), s.createElement(E.$n, {
                    onClick: L.O,
                    "aria-label": "Login with Discord",
                    className: "tw-mt-5 tw-bg-[#5865F2] tw-text-white tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: gt
                }, s.createElement(f.A, {
                    color: "#ffffff",
                    icon: l._2,
                    className: "tw-mr-1 tw-p-0 tw-w-[26px] tw-h-[24px]"
                }), "Log in with Discord"), s.createElement(E.$n, {
                    onClick: C.B,
                    "aria-label": "Sign in with Google",
                    className: "tw-mt-5 tw-bg-[#FFFFFF] tw-text-[#1f1f1f] tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: R
                }, s.createElement("svg", {
                    className: "tw-mr-1 tw-p-0 tw-w-[20px] tw-h-[20px]",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48"
                }, s.createElement("path", {
                    fill: "#EA4335",
                    d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                }), s.createElement("path", {
                    fill: "#4285F4",
                    d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                }), s.createElement("path", {
                    fill: "#FBBC05",
                    d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                }), s.createElement("path", {
                    fill: "#34A853",
                    d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                }), s.createElement("path", {
                    fill: "none",
                    d: "M0 0h48v48H0z"
                })), "Sign in with Google"), s.createElement(E.$n, {
                    onClick: pt,
                    "aria-label": "Sign in with Apple",
                    className: "tw-mt-5 tw-bg-[#000000] tw-text-white tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: gt
                }, s.createElement(f.A, {
                    color: "#ffffff",
                    icon: i.qK,
                    className: "tw-mr-1 tw-p-0 tw-w-[20px] tw-h-[20px]"
                }), "Sign in with Apple"), s.createElement("h4", {
                    className: "tw-text-base tw-text-white tw-text-center tw-mt-5 tw-mb-0"
                }, "New to VRChat?"), s.createElement(w.z9, {
                    to: "/home/register",
                    className: "tw-w-full",
                    "aria-label": "Create an account"
                }, "Create an account"), s.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), s.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking",
                    className: "tw-text-sm tw-text-center tw-mt-3 tw-block"
                }, "Using an Oculus, Steam, or Viveport account?"))), s.createElement(P, {
                    linkProvider: "Discord",
                    unlinkedUser: null == ve ? void 0 : ve.unlinkedUser,
                    onLink: function() {
                        ct(ve.discordAccessToken)
                    },
                    onCancel: function() {
                        return fe(null)
                    }
                }), s.createElement(P, {
                    linkProvider: "Google",
                    unlinkedUser: null == ke ? void 0 : ke.unlinkedUser,
                    onLink: function() {
                        st(ke.idToken)
                    },
                    onCancel: function() {
                        return be(null)
                    }
                }), s.createElement(P, {
                    linkProvider: "Apple",
                    unlinkedUser: null == ye ? void 0 : ye.unlinkedUser,
                    onLink: function() {
                        dt(ye.identityToken)
                    },
                    onCancel: function() {
                        return Ee(null)
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
                        var t, n, r, o, i, l, u, c, s, d, p, m, w, v = arguments;
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (t = v.length > 0 && void 0 !== v[0] ? v[0] : {}).redirectTo, r = void 0 === n ? "/home/login" : n, o = t.version, i = void 0 === o ? 2 : o, l = ["openid", "identify", "email", "sdk.social_layer_presence"], u = window.location.origin + window.location.pathname, c = u.split("/home/"), u = "".concat(c[0], "/home/discord/auth").concat(2 === i ? "/v2" : ""), s = {
                                        redirectUri: u,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, d = JSON.stringify(s), p = btoa(d), m = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: s.redirectUri,
                                        response_type: "code",
                                        scope: l.join(" "),
                                        state: p
                                    }), w = "https://discord.com/oauth2/authorize?".concat(m.toString()), window.location.href = w;
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
                B: () => u
            });
            var r = n(10467),
                o = n(54756),
                a = n.n(o),
                i = n(66948),
                l = ["openid", "email", "profile"],
                u = function() {
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
//# sourceMappingURL=d5571b27dc9d309240ccc7a605d361b791014405843b4199267edfc5082b5f27.js.map