"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9395], {
        99395: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => k
            });
            var r = a(15861),
                n = a(54546),
                l = a(64687),
                o = a.n(l),
                i = a(67294),
                s = a(32981),
                c = a(89250),
                u = a(79655),
                m = a(60006),
                w = a(5513);
            const d = function() {
                var e = (0, u.lr)(),
                    t = (0, n.Z)(e, 1)[0];
                return null !== t.get("campaignName") ? {
                    name: t.get("campaignName"),
                    source: t.get("campaignSource"),
                    medium: t.get("campaignMedium"),
                    id: "".concat(t.get("campaignName"), "_").concat(t.get("campaignSource"), "_").concat(t.get("campaignMedium"))
                } : null
            };
            var g = a(42138),
                h = a(15832),
                p = a(72562);
            const v = function(e) {
                var t = e.trackingEventName,
                    a = void 0 === t ? null : t,
                    r = (0, h._)("campaigns", []),
                    l = (0, n.Z)(r, 2),
                    o = l[0],
                    s = l[1],
                    c = (0, h._)("campaignsSeen", []),
                    u = (0, n.Z)(c, 2),
                    m = u[0],
                    w = u[1],
                    v = d();
                (0, i.useEffect)((function() {
                    if (null !== v) {
                        null !== a && (0, p.Kz)(a, {
                            campaign: v
                        });
                        var e = [].concat((0, g.Z)(o), [v]);
                        s((0, g.Z)(new Map(e.map((function(e) {
                            return [e.id, e]
                        }))).values())), w(m.filter((function(e) {
                            return e.name !== v.name
                        })))
                    }
                }), [])
            };
            var f = a(22202),
                b = a(61509),
                x = a(34226),
                N = a(36678),
                E = a(41400);
            const k = function() {
                var e;
                v({
                    trackingEventName: "Login_Campaign_View"
                });
                var t = (0, c.s0)(),
                    a = (0, s.I0)(),
                    l = (0, c.TH)().state,
                    g = (0, f.YA)(),
                    h = (0, n.Z)(g, 2),
                    k = h[0],
                    y = h[1],
                    _ = y.isLoading,
                    C = y.error,
                    L = y.isError,
                    S = (0, f._y)(),
                    Z = (0, n.Z)(S, 1)[0],
                    I = (0, f.XC)().data,
                    P = (0, i.useState)(""),
                    T = (0, n.Z)(P, 2),
                    V = T[0],
                    A = T[1],
                    M = (0, i.useState)(""),
                    R = (0, n.Z)(M, 2),
                    O = R[0],
                    U = R[1],
                    F = d(),
                    D = function() {
                        null != l && l.redirectTo ? t(l.redirectTo) : t("/home")
                    };
                (0, i.useEffect)((function() {
                    var e;
                    if (!(null == I || null === (e = I.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == l ? void 0 : l.logout)) return a(b.S.util.resetApiState()), a((0, w.kS)()), void Z();
                    null != I && I.id && D()
                }), [I]);
                var K, j, q = function(e) {
                        var t, a;
                        e.preventDefault(), A(null !== (t = null === (a = e.target) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : "")
                    },
                    z = function(e) {
                        var t, a;
                        e.preventDefault(), U(null !== (t = null === (a = e.target) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : "")
                    },
                    W = function() {
                        var e = (0, r.Z)(o().mark((function e(a) {
                            var r, n, i, s;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), (0, p.NA)(!1), e.prev = 2, e.next = 5, k({
                                            username: encodeURIComponent(null == V ? void 0 : V.trim()),
                                            password: encodeURIComponent(O)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (i = "/home/twofactorauth", "emailOtp" === (null === (n = r.requiresTwoFactorAuth) || void 0 === n ? void 0 : n[0]) && (i = "/home/emailtwofactorauth"), null == l || !l.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return t(i, {
                                            state: {
                                                redirectTo: l.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return t(i), e.abrupt("return");
                                    case 14:
                                        return (0, p.Kz)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: F
                                        }), D(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, p.Kz)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message
                                        }), A(null == V ? void 0 : V.trim());
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
                    X = "Failed to Log In",
                    G = null == C || null === (e = C.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                L && ((null === (K = G) || void 0 === K ? void 0 : K.indexOf(":")) > 0 ? (X = G.substring(0, G.indexOf(":")).trim(), G = G.substring(G.indexOf(":") + 1).trim()) : 0 === (null === (j = G) || void 0 === j ? void 0 : j.indexOf(":")) && (G = G.substring(1).trim()));
                return i.createElement(N.Z, {
                    showCredits: !0
                }, i.createElement(x.$4, null, "Login"), i.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, i.createElement(E.l0, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: W
                }, i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), i.createElement(E.X2, {
                    className: "align-items-flex-end justify-content-between"
                }), L && i.createElement(x.qX, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: X,
                    message: G,
                    className: "mb-2"
                }), i.createElement(x.II, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: V,
                    onChange: q,
                    onKeyUp: q
                }), i.createElement(x.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: O,
                    onChange: z,
                    onKeyUp: z
                }), i.createElement("div", {
                    className: "tw-w-full tw-text-right tw-mt-2"
                }, "Forgot your", " ", i.createElement(u.rU, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", i.createElement(u.rU, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), i.createElement(x.zx, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: _,
                    disabled: "" === V || "" === O
                }, "Login"), i.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), i.createElement("h4", {
                    className: "tw-text-base tw-text-white tw-text-center tw-mt-5 tw-mb-0"
                }, "New to VRChat?"), i.createElement(m.Qj, {
                    to: "/home/register",
                    className: "tw-w-full",
                    "aria-label": "Create an account"
                }, "Create an account"), i.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), i.createElement("h4", {
                    className: "tw-text-base tw-text-subtext-grey tw-mt-5 tw-mb-6"
                }, "Using an Oculus, Steam, or Viveport account?"), i.createElement("p", {
                    className: "tw-text-subtext-grey tw-text-xs"
                }, "Don't worry! You can link your VRChat account to your existing Oculus / Steam / Viveport account and keep all your friends.", i.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking"
                }, " ", "Learn More")))))
            }
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var r = a(54546),
                n = a(67294),
                l = [{
                    worldName: "Horse Mountain",
                    authorName: "nprowler",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_1.png"
                }, {
                    worldName: "Instagib Tournament",
                    authorName: "ville672",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_2.png"
                }, {
                    worldName: "Gumball Lounge",
                    authorName: "screamingcolor",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_3.png"
                }, {
                    worldName: "Exoplanet Journey",
                    authorName: "Niko*",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_4.png"
                }, {
                    worldName: "Dusk",
                    authorName: "Lucifer MStar",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_5.png"
                }, {
                    worldName: "Amber Glade - Winter",
                    authorName: "Mankey",
                    imagePath: "https://assets.vrchat.com/www/appedashi/login_background_6.png"
                }].sort((function() {
                    return Math.random() - .5
                }));
            const o = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    o = (0, n.useState)(null),
                    i = (0, r.Z)(o, 2),
                    s = i[0],
                    c = i[1],
                    u = (0, n.useState)(null),
                    m = (0, r.Z)(u, 2),
                    w = m[0],
                    d = m[1];
                (0, n.useEffect)((function() {
                    if (null === s) c(l[0]);
                    else {
                        var e = g(s);
                        setTimeout((function() {
                            return c(e)
                        }), 1e4), d(e)
                    }
                }), [s]);
                var g = function(e) {
                    var t = l.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === l.length - 1 ? l[0] : l[t + 1]
                };
                return n.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === s ? "none" : "url(".concat(s.imagePath, ")")
                    }
                }, n.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, n.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, n.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), n.createElement("img", {
                    className: "tw-hidden",
                    src: null == w ? void 0 : w.imagePath,
                    alt: "VRChat"
                }))), n.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == s ? void 0 : s.worldName) && a && n.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "World:"), " ", s.worldName), n.createElement("p", {
                    className: "tw-text-right mb-0"
                }, n.createElement("strong", null, "Author:"), " ", s.authorName)))
            }
        }
    }
]);
//# sourceMappingURL=3dbec88d39f19c5d2b1322b1155d32e61bf2b9af49470a6ac0c7b9d14215f311.js.map