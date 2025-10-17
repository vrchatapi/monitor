"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4661], {
        99395: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Z
            });
            var n = r(15861),
                a = r(54546),
                o = r(27879),
                i = r(64687),
                l = r.n(i),
                c = r(67294),
                s = r(32981),
                u = r(89250),
                d = r(79655),
                m = r(60006),
                p = r(5513);
            const w = function() {
                var e = (0, d.lr)(),
                    t = (0, a.Z)(e, 1)[0];
                return null !== t.get("campaignName") ? {
                    name: t.get("campaignName"),
                    source: t.get("campaignSource"),
                    medium: t.get("campaignMedium"),
                    id: "".concat(t.get("campaignName"), "_").concat(t.get("campaignSource"), "_").concat(t.get("campaignMedium"))
                } : null
            };
            var v = r(42138),
                h = r(15832),
                f = r(80646);
            const g = function(e) {
                var t = e.trackingEventName,
                    r = void 0 === t ? null : t,
                    n = (0, h._)("campaigns", []),
                    o = (0, a.Z)(n, 2),
                    i = o[0],
                    l = o[1],
                    s = (0, h._)("campaignsSeen", []),
                    u = (0, a.Z)(s, 2),
                    d = u[0],
                    m = u[1],
                    p = w();
                (0, c.useEffect)((function() {
                    if (null !== p) {
                        null !== r && (0, f.j)(r, {
                            campaign: p
                        });
                        var e = [].concat((0, v.Z)(i), [p]);
                        l((0, v.Z)(new Map(e.map((function(e) {
                            return [e.id, e]
                        }))).values())), m(d.filter((function(e) {
                            return e.name !== p.name
                        })))
                    }
                }), [])
            };
            var b = r(22202),
                k = r(61509),
                x = r(96985),
                E = r(13887),
                y = r(64258),
                N = r(40219),
                T = r(57672),
                L = r(69699),
                C = r(60766),
                A = r(41400);
            const Z = function() {
                var e, t, r;
                g({
                    trackingEventName: "Login_Campaign_View"
                });
                var i = (0, u.s0)(),
                    v = (0, s.I0)(),
                    h = (0, u.TH)().state,
                    Z = (0, b.YA)(),
                    S = (0, a.Z)(Z, 2),
                    F = S[0],
                    U = S[1],
                    _ = U.isLoading,
                    D = U.error,
                    I = U.isError,
                    O = (0, d.lr)(),
                    z = (0, a.Z)(O, 2),
                    V = (z[0], z[1], (0, b._y)()),
                    q = (0, a.Z)(V, 1)[0],
                    M = (0, b.XC)().data,
                    R = (0, c.useState)(""),
                    j = (0, a.Z)(R, 2),
                    X = j[0],
                    P = j[1],
                    B = (0, c.useState)(""),
                    H = (0, a.Z)(B, 2),
                    K = H[0],
                    Y = H[1],
                    J = (0, c.useState)(null),
                    Q = (0, a.Z)(J, 2),
                    W = Q[0],
                    $ = Q[1],
                    G = w(),
                    ee = (0, b.bw)(),
                    te = (0, a.Z)(ee, 2),
                    re = te[0],
                    ne = te[1].isLoading,
                    ae = (0, b.et)(),
                    oe = (0, a.Z)(ae, 2),
                    ie = oe[0],
                    le = oe[1],
                    ce = le.isLoading,
                    se = le.error,
                    ue = le.isError,
                    de = function() {
                        null != h && h.redirectTo ? i(h.redirectTo) : i("/home")
                    };
                (0, c.useEffect)((function() {
                    var e;
                    if (!(null == M || null === (e = M.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == h ? void 0 : h.logout)) return v(k.S.util.resetApiState()), v((0, p.kS)()), void q();
                    null != M && M.id && de()
                }), [M]), (0, c.useEffect)((function() {
                    (0, n.Z)(l().mark((function e() {
                        var t, r, n, a, i;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = null == h ? void 0 : h.discordToken) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, re({
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
                                    return e.abrupt("return", v((0, y.d)({
                                        title: "Failure",
                                        message: null !== (a = null === (i = response) || void 0 === i || null === (i = i.error) || void 0 === i || null === (i = i.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== a ? a : "Discord Authentication Failed",
                                        icon: o.IL,
                                        color: "danger",
                                        timeout: 5e3
                                    })));
                                case 9:
                                    return e.abrupt("return", we(t));
                                case 10:
                                    return e.abrupt("return", $({
                                        discordAccessToken: t,
                                        unlinkedUser: null == r ? void 0 : r.data
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []), (0, c.useEffect)((function() {
                    (0, n.Z)(l().mark((function e() {
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null != h && h.continueDiscordAccessToken) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.abrupt("return", we(null == h ? void 0 : h.continueDiscordAccessToken));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), []);
                var me, pe, we = function() {
                        var e = (0, n.Z)(l().mark((function e(t) {
                            var r, n, a, c, s, u, d;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, $(null), e.next = 4, ie({
                                            token: t
                                        }).unwrap();
                                    case 4:
                                        if (null == (r = e.sent) || !r.continueToken) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", i("/home/login/discord/finalize", {
                                            state: {
                                                continueToken: r.continueToken,
                                                reservedName: r.reservedName.displayName
                                            }
                                        }));
                                    case 7:
                                        de(), e.next = 20;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(0), 402 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status) || null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || !n.requiresTwoFactorAuth) {
                                            e.next = 18;
                                            break
                                        }
                                        return s = e.t0.data, u = (0, T.y)(s), d = {
                                            redirectTo: "/home/login",
                                            scope: s.scope,
                                            ticket: s.ticket,
                                            stepUpToken: s.stepUpToken,
                                            redirectState: {
                                                continueDiscordAccessToken: t,
                                                unlinkedUser: W.unlinkedUser,
                                                redirectTo: "/home/login"
                                            }
                                        }, i(u, {
                                            state: d
                                        }), e.abrupt("return");
                                    case 18:
                                        return console.error("Failed to link Discord account:", e.t0), e.abrupt("return", v((0, y.d)({
                                            title: "Failure",
                                            message: null !== (a = null === e.t0 || void 0 === e.t0 || null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== a ? a : "Discord Authentication Failed",
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
                    ve = function(e) {
                        var t, r;
                        e.preventDefault(), P(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    he = function(e) {
                        var t, r;
                        e.preventDefault(), Y(null !== (t = null === (r = e.target) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : "")
                    },
                    fe = function() {
                        var e = (0, n.Z)(l().mark((function e(t) {
                            var r, n, a, o;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), (0, f.NA)(!1), e.prev = 2, e.next = 5, F({
                                            username: encodeURIComponent(null == X ? void 0 : X.trim()),
                                            password: encodeURIComponent(K)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (a = "/home/twofactorauth", "emailOtp" === (null === (n = r.requiresTwoFactorAuth) || void 0 === n ? void 0 : n[0]) && (a = "/home/emailtwofactorauth"), null == h || !h.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return i(a, {
                                            state: {
                                                redirectTo: h.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return i(a), e.abrupt("return");
                                    case 14:
                                        return (0, f.j)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: G
                                        }), de(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, f.j)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message
                                        }), P(null == X ? void 0 : X.trim());
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
                    ge = _ || ce || ne,
                    be = I || ue,
                    ke = D || se,
                    xe = "Failed to Log In",
                    Ee = null == ke || null === (e = ke.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                I && ((null === (me = Ee) || void 0 === me ? void 0 : me.indexOf(":")) > 0 ? (xe = Ee.substring(0, Ee.indexOf(":")).trim(), Ee = Ee.substring(Ee.indexOf(":") + 1).trim()) : 0 === (null === (pe = Ee) || void 0 === pe ? void 0 : pe.indexOf(":")) && (Ee = Ee.substring(1).trim()));
                return c.createElement(E.Z, {
                    showCredits: !0
                }, c.createElement(x.$4, null, "Login"), c.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, c.createElement(A.l0, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: fe
                }, c.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), c.createElement(A.X2, {
                    className: "align-items-flex-end justify-content-between"
                }), be && c.createElement(x.qX, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: xe,
                    message: Ee,
                    className: "mb-2"
                }), c.createElement(x.II, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: X,
                    onChange: ve,
                    onKeyUp: ve
                }), c.createElement(x.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: K,
                    onChange: he,
                    onKeyUp: he
                }), c.createElement("div", {
                    className: "tw-w-full tw-mt-3"
                }, "Forgot your", " ", c.createElement(d.rU, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", c.createElement(d.rU, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), c.createElement(x.zx, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: ge,
                    disabled: "" === X || "" === K
                }, "Log in"), c.createElement(A.X2, {
                    className: "tw-items-center tw-mt-4 tw-gap-2"
                }, c.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                }), c.createElement("div", {
                    className: "tw-shrink-0"
                }, "Or"), c.createElement("hr", {
                    className: "tw-border-hr-line-color tw-px-1 tw-border-y-2 tw-w-full tw-m-0"
                })), c.createElement(x.zx, {
                    onClick: N.y,
                    "aria-label": "Login with Discord",
                    className: "tw-mt-5 tw-bg-[#7F9EE6] tw-text-white tw-border-none tw-py-2 tw-flex tw-items-center tw-justify-center",
                    type: "button",
                    loading: ge
                }, c.createElement("svg", {
                    title: "Discord Logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    width: "24px",
                    height: "24px"
                }, c.createElement("path", {
                    fill: "#fff",
                    d: "M42,45l-9-7.001L34,41H10c-2.761,0-5-2.238-5-5V10c0-2.762,2.239-5,5-5h27c2.762,0,5,2.238,5,5V45z"
                }), c.createElement("path", {
                    fill: "#7F9EE6",
                    d: "M32.59,16.24c0,0-2.6-2.01-5.68-2.24l-0.27,0.55c2.78,0.67,4.05,1.64,5.38,2.83 C29.73,16.21,27.46,15,23.5,15s-6.23,1.21-8.52,2.38c1.33-1.19,2.85-2.27,5.38-2.83L20.09,14c-3.23,0.31-5.68,2.24-5.68,2.24 S11.5,20.43,11,28.62c2.94,3.36,7.39,3.38,7.39,3.38l0.92-1.23c-1.57-0.54-3.36-1.51-4.9-3.27c1.84,1.38,4.61,2.5,9.09,2.5 s7.25-1.12,9.09-2.5c-1.54,1.76-3.33,2.73-4.9,3.27L28.61,32c0,0,4.45-0.02,7.39-3.38C35.5,20.43,32.59,16.24,32.59,16.24z M20,27 c-1.1,0-2-1.12-2-2.5s0.9-2.5,2-2.5s2,1.12,2,2.5S21.1,27,20,27z M27,27c-1.1,0-2-1.12-2-2.5s0.9-2.5,2-2.5s2,1.12,2,2.5 S28.1,27,27,27z"
                })), "Log in with Discord"), c.createElement(m.Qj, {
                    to: "/home/register",
                    className: "tw-w-full tw-mt-5",
                    "aria-label": "Create an account"
                }, "Create an account"), c.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), c.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking",
                    className: "tw-text-sm tw-text-center tw-mt-3 tw-block"
                }, "Using an Oculus, Steam, or Viveport account?"))), c.createElement(L.Z, {
                    isOpen: !(null == W || null === (t = W.unlinkedUser) || void 0 === t || !t.displayName),
                    toggle: function() {
                        return W(null)
                    },
                    centered: !0
                }, c.createElement(C.Z, {
                    className: "tw-bg-[#171B1F] tw-text-white tw-p-5"
                }, c.createElement("h2", {
                    className: "text-center ty-my-5 tw-p-5"
                }, "Link Discord Account"), c.createElement("div", {
                    className: "p-3 text-center"
                }, "A VRChat account already exists with the same email as your Discord account:"), c.createElement("div", {
                    className: "p-3 text-center"
                }, c.createElement("strong", null, null == W || null === (r = W.unlinkedUser) || void 0 === r ? void 0 : r.displayName)), c.createElement("div", {
                    className: "p-3 text-center"
                }, "Do you want to link your Discord account to this VRChat account? You can unlink it anytime."), c.createElement("div", {
                    className: "px-3 pt-3"
                }, c.createElement(x.zx, {
                    className: "tw-my-2",
                    expand: !0,
                    onClick: function() {
                        we(W.discordAccessToken)
                    }
                }, "Link Account"), c.createElement(x.zx, {
                    onClick: function() {
                        return $(null)
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
                        var t, r, n, a, i, l, c, s, u, d, m = arguments;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = (m.length > 0 && void 0 !== m[0] ? m[0] : {}).redirectTo, r = void 0 === t ? "/home/login" : t, "1366854478250381462", n = ["identify", "email"], a = window.location.origin + window.location.pathname, i = a.split("/home/"), a = "".concat(i[0], "/home/discord/auth"), l = {
                                        redirectUri: a,
                                        isMobileRequest: !1,
                                        redirectTo: r
                                    }, c = JSON.stringify(l), s = btoa(c), u = new URLSearchParams({
                                        client_id: "1366854478250381462",
                                        redirect_uri: l.redirectUri,
                                        response_type: "code",
                                        scope: n.join(" "),
                                        state: s
                                    }), d = "https://discord.com/oauth2/authorize?".concat(u.toString()), window.location.href = d;
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
//# sourceMappingURL=cd39041aa45b85edcd0f464882219d953c966fc653e6a4d9ba43fbb4a8747868.js.map