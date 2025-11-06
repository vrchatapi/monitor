"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9395], {
        16566: (e, t) => {
            var r = "discord",
                n = [],
                a = "f392",
                o = "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z";
            t.DF = {
                prefix: "fab",
                iconName: r,
                icon: [640, 512, n, a, o]
            }, t.om = t.DF
        },
        99395: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => S
            });
            var n = r(15861),
                a = r(54546),
                o = r(27879),
                i = r(16566),
                l = r(64687),
                c = r.n(l),
                u = r(67294),
                s = r(32981),
                d = r(89250),
                m = r(79655),
                p = r(60006),
                w = r(5513),
                v = r(86646);
            const f = function() {
                var e = (0, m.lr)(),
                    t = (0, a.Z)(e, 1)[0];
                return null !== t.get("campaignName") ? {
                    name: t.get("campaignName"),
                    source: t.get("campaignSource"),
                    medium: t.get("campaignMedium"),
                    id: "".concat(t.get("campaignName"), "_").concat(t.get("campaignSource"), "_").concat(t.get("campaignMedium"))
                } : null
            };
            var h = r(42138),
                g = r(15832),
                b = r(6281);
            const k = function(e) {
                var t = e.trackingEventName,
                    r = void 0 === t ? null : t,
                    n = (0, g._)("campaigns", []),
                    o = (0, a.Z)(n, 2),
                    i = o[0],
                    l = o[1],
                    c = (0, g._)("campaignsSeen", []),
                    s = (0, a.Z)(c, 2),
                    d = s[0],
                    m = s[1],
                    p = f();
                (0, u.useEffect)((function() {
                    if (null !== p) {
                        null !== r && (0, b.j)(r, {
                            campaign: p
                        });
                        var e = [].concat((0, h.Z)(i), [p]);
                        l((0, h.Z)(new Map(e.map((function(e) {
                            return [e.id, e]
                        }))).values())), m(d.filter((function(e) {
                            return e.name !== p.name
                        })))
                    }
                }), [])
            };
            var x = r(22202),
                E = r(61509),
                y = r(96985),
                N = r(13887),
                T = r(64258),
                A = r(40219),
                Z = r(57672),
                C = r(69699),
                L = r(60766),
                F = r(41400);
            const S = function() {
                var e, t, r;
                k({
                    trackingEventName: "Login_Campaign_View"
                });
                var l = (0, d.s0)(),
                    h = (0, s.I0)(),
                    g = (0, d.TH)().state,
                    S = (0, x.YA)(),
                    U = (0, a.Z)(S, 2),
                    D = U[0],
                    _ = U[1],
                    I = _.isLoading,
                    O = _.error,
                    q = _.isError,
                    R = (0, m.lr)(),
                    V = (0, a.Z)(R, 2),
                    j = (V[0], V[1], (0, x._y)()),
                    M = (0, a.Z)(j, 1)[0],
                    z = (0, x.XC)().data,
                    X = (0, u.useState)(""),
                    P = (0, a.Z)(X, 2),
                    K = P[0],
                    Y = P[1],
                    B = (0, u.useState)(""),
                    H = (0, a.Z)(B, 2),
                    J = H[0],
                    Q = H[1],
                    W = (0, u.useState)(null),
                    $ = (0, a.Z)(W, 2),
                    G = $[0],
                    ee = $[1],
                    te = f(),
                    re = (0, x.bw)(),
                    ne = (0, a.Z)(re, 2),
                    ae = ne[0],
                    oe = ne[1].isLoading,
                    ie = (0, x.et)(),
                    le = (0, a.Z)(ie, 2),
                    ce = le[0],
                    ue = le[1],
                    se = ue.isLoading,
                    de = ue.error,
                    me = ue.isError,
                    pe = function() {
                        null != g && g.redirectTo ? l(g.redirectTo) : l("/home")
                    };
                (0, u.useEffect)((function() {
                    var e;
                    if (!(null == z || null === (e = z.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == g ? void 0 : g.logout)) return h(E.S.util.resetApiState()), h((0, w.kS)()), void M();
                    null != z && z.id && pe()
                }), [z]), (0, u.useEffect)((function() {
                    (0, n.Z)(c().mark((function e() {
                        var t, r, n, a, i;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = null == g ? void 0 : g.discordToken) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, ae({
                                        token: t
                                    });
                                case 5:
                                    if (null == (r = e.sent) || !r.error) {
                                        e.next = 10;
                                        break
                                    }
                                    if (404 === (null == r || null === (n = r.error) || void 0 === n ? void 0 : n.status)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", h((0, T.d)({
                                        title: "Failure",
                                        message: null !== (a = null === (i = response) || void 0 === i || null === (i = i.error) || void 0 === i || null === (i = i.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== a ? a : "Discord Authentication Failed",
                                        icon: o.IL,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 9:
                                    return e.abrupt("return", fe(t));
                                case 10:
                                    return e.abrupt("return", ee({
                                        discordAccessToken: t,
                                        unlinkedUser: null == r ? void 0 : r.data
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, u.useEffect)((function() {
                    (0, n.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null != g && g.continueDiscordAccessToken) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.abrupt("return", fe(null == g ? void 0 : g.continueDiscordAccessToken));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []);
                var we, ve, fe = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, n, a, i, u, s, d;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, ee(null), e.next = 4, ce({
                                            token: t
                                        }).unwrap();
                                    case 4:
                                        if (null == (r = e.sent) || !r.continueToken) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", l("/home/login/discord/finalize", {
                                            state: {
                                                continueToken: r.continueToken,
                                                reservedName: r.reservedName.displayName
                                            }
                                        }));
                                    case 7:
                                        pe(), e.next = 20;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || !n.requiresTwoFactorAuth) {
                                            e.next = 18;
                                            break
                                        }
                                        return u = e.t0.data, s = (0, Z.y)(u), d = {
                                            redirectTo: "/home/login",
                                            scope: u.scope,
                                            ticket: u.ticket,
                                            stepUpToken: u.stepUpToken,
                                            redirectState: {
                                                continueDiscordAccessToken: t,
                                                unlinkedUser: G.unlinkedUser,
                                                redirectTo: "/home/login"
                                            }
                                        }, l(s, {
                                            state: d
                                        }), e.abrupt("return");
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), e.abrupt("return", h((0, T.d)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== a ? a : "Discord Authentication Failed",
                                            icon: o.IL,
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = function(e) {
                        var t, r;
                        e.preventDefault(), Y(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    ge = function(e) {
                        var t, r;
                        e.preventDefault(), Q(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    be = function() {
                        var e = (0, n.Z)(c().mark((function e(t) {
                            var r, n, a, o;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), (0, b.NA)(!1), e.prev = 2, e.next = 5, D({
                                            username: encodeURIComponent(null == K ? void 0 : K.trim()),
                                            password: encodeURIComponent(J)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (a = "/home/twofactorauth", "emailOtp" === (null === (n = r.requiresTwoFactorAuth) || void 0 === n ? void 0 : n[0]) && (a = "/home/emailtwofactorauth"), null == g || !g.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return l(a, {
                                            state: {
                                                redirectTo: g.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return l(a), e.abrupt("return");
                                    case 14:
                                        return (0, b.j)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: te
                                        }), pe(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, b.j)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message
                                        }), Y(null == K ? void 0 : K.trim());
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 19]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ke = I || se || oe,
                    xe = q || me,
                    Ee = O || de,
                    ye = "Failed to Log In",
                    Ne = null == Ee || null === (e = Ee.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                q && ((null === (we = Ne) || void 0 === we ? void 0 : we.indexOf(":")) > 0 ? (ye = Ne.substring(0, Ne.indexOf(":")).trim(), Ne = Ne.substring(Ne.indexOf(":") + 1).trim()) : 0 === (null === (ve = Ne) || void 0 === ve ? void 0 : ve.indexOf(":")) && (Ne = Ne.substring(1).trim()));
                return u.createElement(N.Z, {
                    showCredits: !0
                }, u.createElement(y.$4, null, "Login"), u.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, u.createElement(F.l0, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: be
                }, u.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), u.createElement(F.X2, {
                    className: "align-items-flex-end justify-content-between"
                }), xe && u.createElement(y.qX, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: ye,
                    message: Ne,
                    className: "mb-2"
                }), u.createElement(y.II, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: K,
                    onChange: he,
                    onKeyUp: he
                }), u.createElement(y.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: J,
                    onChange: ge,
                    onKeyUp: ge
                }), u.createElement("div", {
                    className: "tw-w-full tw-mt-3"
                }, "Forgot your", " ", u.createElement(m.rU, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", u.createElement(m.rU, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), u.createElement(y.zx, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: ke,
                    disabled: "" === K || "" === J
                }, "Log in"), u.createElement(F.X2, {
                    className: "tw-items-center tw-mt-4 tw-gap-2"
                }, u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                }), u.createElement("div", {
                    className: "tw-shrink-0"
                }, "Or"), u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                })), u.createElement(y.zx, {
                    onClick: A.y,
                    "aria-label": "Login with Discord",
                    className: "tw-mt-5 tw-bg-[#5865F2] tw-text-white tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: ke
                }, u.createElement(v.Z, {
                    color: "#ffffff",
                    icon: i.om,
                    className: "tw-mr-1 tw-p-0 tw-w-[26px] tw-h-[24px]"
                }), "Log in with Discord"), u.createElement(p.Qj, {
                    to: "/home/register",
                    className: "tw-w-full tw-mt-5",
                    "aria-label": "Create an account"
                }, "Create an account"), u.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), u.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking",
                    className: "tw-text-sm tw-text-center tw-mt-3 tw-block"
                }, "Using an Oculus, Steam, or Viveport account?"))), u.createElement(C.Z, {
                    isOpen: !(null == G || null === (t = G.unlinkedUser) || void 0 === t || !t.displayName),
                    toggle: function() {
                        return G(null)
                    },
                    centered: !0
                }, u.createElement(L.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5"
                }, u.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), u.createElement("div", {
                    className: "p-3 text-center"
                }, "A VRChat account already exists with the same email as your Discord account:"), u.createElement("div", {
                    className: "p-3 text-center"
                }, u.createElement("strong", null, null == G || null === (r = G.unlinkedUser) || void 0 === r ? void 0 : r.displayName)), u.createElement("div", {
                    className: "p-3 text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), u.createElement("div", {
                    className: "px-3 pt-3"
                }, u.createElement(y.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        fe(G.discordAccessToken)
                    }
                }, "Link Account"), u.createElement(y.zx, {
                    onClick: function() {
                        return ee(null)
                    },
                    className: "link tw-block tw-text-center tw-p-0 tw-h-auto tw-bg-transparent tw-shadow-none tw-border-0 tw-rounded-none tw-my-3"
                }, "Cancel"), " "))))
            }
        },
        40219: (e, t, r) => {
            r.d(t, {
                y: () => i
            });
            var n = r(15861),
                a = r(64687),
                o = r.n(a),
                i = function() {
                    var e = (0, n.Z)(o().mark((function e() {
                        var t, r, n, a, i, l, c, u, s, d, m = arguments;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = (m.length > 0 && void 0 !== m[0] ? m[0] : {}).redirectTo, r = void 0 === t ? "/home/login" : t, "1366854478250381462", n = ["identify", "email"], a = window.location.origin + window.location.pathname, i = a.split("/home/"), a = "".concat(i[0], "/home/discord/auth"), l = {
                                        redirectUri: a,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, c = JSON.stringify(l), u = btoa(c), s = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: l.redirectUri,
                                        response_type: "code",
                                        scope: n.join(" "),
                                        state: u
                                    }), d = "https://discord.com/oauth2/authorize?".concat(s.toString()), window.location.href = d;
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
        57672: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            var n = function(e) {
                if (null != e && e.requiresTwoFactorAuth) {
                    var t, r, n = "/home/stepupauth";
                    return "emailOtp" === (null === (t = e.requiresTwoFactorAuth) || void 0 === t ? void 0 : t[0]) && (n = "/home/emailstepupauth"), 0 === (null === (r = e.requiresTwoFactorAuth) || void 0 === r ? void 0 : r.length) && e.ticket && (n = "/home/verify-password"), n
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=ec42a76aa56c25a3bdb1cbf247bc55abbe13730092fa57e151fe3dae7b48c45c.js.map