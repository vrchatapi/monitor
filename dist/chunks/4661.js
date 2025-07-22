(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4661], {
        99395: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => S
            });
            var r = a(15861),
                n = a(54546),
                i = a(64687),
                o = a.n(i),
                c = a(67294),
                l = a(32981),
                w = a(89250),
                s = a(79655),
                u = a(60006),
                p = a(5513);
            const g = function() {
                var e = (0, s.lr)(),
                    t = (0, n.Z)(e, 1)[0];
                return null !== t.get("campaignName") ? {
                    name: t.get("campaignName"),
                    source: t.get("campaignSource"),
                    medium: t.get("campaignMedium"),
                    id: "".concat(t.get("campaignName"), "_").concat(t.get("campaignSource"), "_").concat(t.get("campaignMedium"))
                } : null
            };
            var m = a(42138),
                d = a(15832),
                h = a(72562);
            const f = function(e) {
                var t = e.trackingEventName,
                    a = void 0 === t ? null : t,
                    r = (0, d._)("campaigns", []),
                    i = (0, n.Z)(r, 2),
                    o = i[0],
                    l = i[1],
                    w = (0, d._)("campaignsSeen", []),
                    s = (0, n.Z)(w, 2),
                    u = s[0],
                    p = s[1],
                    f = g();
                (0, c.useEffect)((function() {
                    if (null !== f) {
                        null !== a && (0, h.Kz)(a, {
                            campaign: f
                        });
                        var e = [].concat((0, m.Z)(o), [f]);
                        l((0, m.Z)(new Map(e.map((function(e) {
                            return [e.id, e]
                        }))).values())), p(u.filter((function(e) {
                            return e.name !== f.name
                        })))
                    }
                }), [])
            };
            var b = a(22202),
                v = a(61509),
                x = a(46382),
                N = a(13887),
                j = a(41400);
            const S = function() {
                var e;
                f({
                    trackingEventName: "Login_Campaign_View"
                });
                var t = (0, w.s0)(),
                    a = (0, l.I0)(),
                    i = (0, w.TH)().state,
                    m = (0, b.YA)(),
                    d = (0, n.Z)(m, 2),
                    S = d[0],
                    E = d[1],
                    y = E.isLoading,
                    k = E.error,
                    C = E.isError,
                    L = (0, b._y)(),
                    I = (0, n.Z)(L, 1)[0],
                    T = (0, b.XC)().data,
                    _ = (0, c.useState)(""),
                    A = (0, n.Z)(_, 2),
                    Z = A[0],
                    R = A[1],
                    V = (0, c.useState)(""),
                    O = (0, n.Z)(V, 2),
                    M = O[0],
                    D = O[1],
                    F = g(),
                    U = function() {
                        null != i && i.redirectTo ? t(i.redirectTo) : t("/home")
                    };
                (0, c.useEffect)((function() {
                    var e;
                    if (!(null == T || null === (e = T.requiresTwoFactorAuth) || void 0 === e || !e.length) || (null == i ? void 0 : i.logout)) return a(v.S.util.resetApiState()), a((0, p.kS)()), void I();
                    null != T && T.id && U()
                }), [T]);
                var z, K, q = function(e) {
                        var t, a;
                        e.preventDefault(), R(null !== (t = null === (a = e.target) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : "")
                    },
                    H = function(e) {
                        var t, a;
                        e.preventDefault(), D(null !== (t = null === (a = e.target) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : "")
                    },
                    W = function() {
                        var e = (0, r.Z)(o().mark((function e(a) {
                            var r, n, c, l;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), (0, h.NA)(!1), e.prev = 2, e.next = 5, S({
                                            username: encodeURIComponent(null == Z ? void 0 : Z.trim()),
                                            password: encodeURIComponent(M)
                                        }).unwrap();
                                    case 5:
                                        if (null == (r = e.sent) || !r.requiresTwoFactorAuth) {
                                            e.next = 14;
                                            break
                                        }
                                        if (c = "/home/twofactorauth", "emailOtp" === (null === (n = r.requiresTwoFactorAuth) || void 0 === n ? void 0 : n[0]) && (c = "/home/emailtwofactorauth"), null == i || !i.redirectTo) {
                                            e.next = 12;
                                            break
                                        }
                                        return t(c, {
                                            state: {
                                                redirectTo: i.redirectTo
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return t(c), e.abrupt("return");
                                    case 14:
                                        return (0, h.Kz)("Login_LoginSuccess", {
                                            user: r.id,
                                            campaign: F
                                        }), U(), e.abrupt("return");
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), (0, h.Kz)("Login_LoginFail", {
                                            error: null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message
                                        }), R(null == Z ? void 0 : Z.trim());
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
                    B = null == k || null === (e = k.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message;
                C && ((null === (z = B) || void 0 === z ? void 0 : z.indexOf(":")) > 0 ? (X = B.substring(0, B.indexOf(":")).trim(), B = B.substring(B.indexOf(":") + 1).trim()) : 0 === (null === (K = B) || void 0 === K ? void 0 : K.indexOf(":")) && (B = B.substring(1).trim()));
                return c.createElement(N.Z, {
                    showCredits: !0
                }, c.createElement(x.$4, null, "Login"), c.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[500px] tw-p-12 tw-rounded-lg tw-h-fit xl:tw-mt-[200px]"
                }, c.createElement(j.l0, {
                    id: "login-form",
                    name: "login-form",
                    className: "nobottommargin",
                    onSubmit: W
                }, c.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Welcome to VRChat"), c.createElement(j.X2, {
                    className: "align-items-flex-end justify-content-between"
                }), C && c.createElement(x.qX, {
                    type: "error",
                    role: "alert",
                    "aria-label": "Login Error",
                    title: X,
                    message: B,
                    className: "mb-2"
                }), c.createElement(x.II, {
                    type: "text",
                    id: "username_email",
                    name: "username_email",
                    "aria-label": "username",
                    placeholder: "Username/Email",
                    value: Z,
                    onChange: q,
                    onKeyUp: q
                }), c.createElement(x.II, {
                    type: "password",
                    id: "password",
                    name: "password",
                    role: "textbox",
                    "aria-label": "password",
                    className: "mt-2",
                    placeholder: "Password",
                    value: M,
                    onChange: H,
                    onKeyUp: H
                }), c.createElement("div", {
                    className: "tw-w-full tw-text-right tw-mt-2"
                }, "Forgot your", " ", c.createElement(s.rU, {
                    to: "/home/password",
                    className: "tw-text-link-highlight"
                }, "password"), " ", "or", " ", c.createElement(s.rU, {
                    to: "/home/forgot-email",
                    className: "tw-text-link-highlight"
                }, "email address"), "?"), c.createElement(x.zx, {
                    "aria-label": "Login",
                    className: "tw-mt-6",
                    type: "submit",
                    loading: y,
                    disabled: "" === Z || "" === M
                }, "Login"), c.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), c.createElement("h4", {
                    className: "tw-text-base tw-text-white tw-text-center tw-mt-5 tw-mb-0"
                }, "New to VRChat?"), c.createElement(u.Qj, {
                    to: "/home/register",
                    className: "tw-w-full",
                    "aria-label": "Create an account"
                }, "Create an account"), c.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-0"
                }), c.createElement("h4", {
                    className: "tw-text-base tw-text-subtext-grey tw-mt-5 tw-mb-6"
                }, "Using an Oculus, Steam, or Viveport account?"), c.createElement("p", {
                    className: "tw-text-subtext-grey tw-text-xs"
                }, "Don't worry! You can link your VRChat account to your existing Oculus / Steam / Viveport account and keep all your friends.", c.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account#:~:text=Please%20log%20into%20VRChat%20with,screen%20to%20link%20your%20accounts.",
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "Learn More about Account Linking"
                }, " ", "Learn More")))))
            }
        },
        13887: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var r = a(54546),
                n = a(42404),
                i = a.n(n),
                o = a(67294),
                c = a(86646),
                l = a(62427);
            const w = [{
                worldName: "Horse Mountain",
                authorName: "nprowler",
                image: a(92610)
            }, {
                worldName: "Instagib Tournament",
                authorName: "ville672",
                image: a(14420)
            }, {
                worldName: "Gumball Lounge",
                authorName: "screamingcolor",
                image: a(38325)
            }, {
                worldName: "Exoplanet Journey",
                authorName: "Niko*",
                image: a(25623)
            }, {
                worldName: "Dusk",
                authorName: "Lucifer MStar",
                image: a(5171)
            }, {
                worldName: "Amber Glade - Winter",
                authorName: "Mankey",
                image: a(38239)
            }, {
                worldName: "Luminous Hotel",
                authorName: "Lura_",
                image: a(81592)
            }, {
                worldName: "Shoegaze Night",
                authorName: "VVolfly",
                image: a(42665)
            }, {
                worldName: "Singularity Echo",
                authorName: "Lavryou",
                image: a(96253)
            }, {
                worldName: "CORRIDOR ABANDONNED․․․",
                authorName: "TontonDemon",
                image: a(40533)
            }, {
                worldName: "Atelier",
                authorName: "amanek",
                image: a(30599)
            }, {
                worldName: "记忆中的花海⁄The Sea of Flowers in Memory",
                authorName: "ぃLuxRIAぅ",
                image: a(35883)
            }, {
                worldName: "BOTANICA",
                authorName: "TakeTake-たけたけ-",
                image: a(55074)
            }, {
                worldName: "Lazy Sunday",
                authorName: "Mochie",
                image: a(34414)
            }, {
                worldName: "Angels Hideout",
                authorName: "樹-Itsuki-",
                image: a(47218)
            }, {
                worldName: "Forest of Eternity",
                authorName: "chu-ri",
                image: a(50749)
            }];
            const s = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    n = (0, o.useState)(null),
                    s = (0, r.Z)(n, 2),
                    u = s[0],
                    p = s[1],
                    g = (0, o.useState)(null),
                    m = (0, r.Z)(g, 2),
                    d = m[0],
                    h = m[1],
                    f = (0, o.useMemo)((function() {
                        return i()(w, 6)
                    }), []);
                (0, o.useEffect)((function() {
                    if (null === u) p(f[0]);
                    else {
                        var e = b(u);
                        setTimeout((function() {
                            return p(e)
                        }), 1e4), h(e)
                    }
                }), [u]);
                var b = function(e) {
                    var t = f.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === f.length - 1 ? f[0] : f[t + 1]
                };
                return o.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === u ? "none" : "url(".concat(u.image, ")")
                    }
                }, o.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, o.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, o.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), o.createElement("img", {
                    className: "tw-hidden",
                    src: null == d ? void 0 : d.image,
                    alt: "VRChat"
                }))), o.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == u ? void 0 : u.worldName) && a && o.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, o.createElement(c.Z, {
                    icon: l.default,
                    title: "World",
                    size: "2x"
                }), o.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, u.worldName, o.createElement("br", null), o.createElement("small", null, "by ", u.authorName))))
            }
        },
        92610: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "12ce1bda863d50d0-1980w.jpg 1980w",
                images: [{
                    path: a.p + "12ce1bda863d50d0-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "12ce1bda863d50d0-1980w.jpg",
                toString: function() {
                    return a.p + "12ce1bda863d50d0-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        14420: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "19cf5ea4873534e6-1980w.jpg 1980w",
                images: [{
                    path: a.p + "19cf5ea4873534e6-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "19cf5ea4873534e6-1980w.jpg",
                toString: function() {
                    return a.p + "19cf5ea4873534e6-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38325: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "a15004cb78587aea-1980w.jpg 1980w",
                images: [{
                    path: a.p + "a15004cb78587aea-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "a15004cb78587aea-1980w.jpg",
                toString: function() {
                    return a.p + "a15004cb78587aea-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        25623: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "5ac33cecd162656c-1980w.jpg 1980w",
                images: [{
                    path: a.p + "5ac33cecd162656c-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "5ac33cecd162656c-1980w.jpg",
                toString: function() {
                    return a.p + "5ac33cecd162656c-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        5171: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "f2fe59d11df55cf4-1980w.jpg 1980w",
                images: [{
                    path: a.p + "f2fe59d11df55cf4-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "f2fe59d11df55cf4-1980w.jpg",
                toString: function() {
                    return a.p + "f2fe59d11df55cf4-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        38239: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "6760e1bc722c437b-1980w.jpg 1980w",
                images: [{
                    path: a.p + "6760e1bc722c437b-1980w.jpg",
                    width: 1980,
                    height: 1114
                }],
                src: a.p + "6760e1bc722c437b-1980w.jpg",
                toString: function() {
                    return a.p + "6760e1bc722c437b-1980w.jpg"
                },
                width: 1980,
                height: 1114
            }
        },
        81592: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "027202d759d2cf17-1920w.jpg 1920w",
                images: [{
                    path: a.p + "027202d759d2cf17-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "027202d759d2cf17-1920w.jpg",
                toString: function() {
                    return a.p + "027202d759d2cf17-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        42665: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "942180c1c931b9b9-1920w.jpg 1920w",
                images: [{
                    path: a.p + "942180c1c931b9b9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "942180c1c931b9b9-1920w.jpg",
                toString: function() {
                    return a.p + "942180c1c931b9b9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        96253: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "3bb6219038a6eb91-1920w.jpg 1920w",
                images: [{
                    path: a.p + "3bb6219038a6eb91-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "3bb6219038a6eb91-1920w.jpg",
                toString: function() {
                    return a.p + "3bb6219038a6eb91-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        40533: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "5844853cd4177f64-1920w.jpg 1920w",
                images: [{
                    path: a.p + "5844853cd4177f64-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "5844853cd4177f64-1920w.jpg",
                toString: function() {
                    return a.p + "5844853cd4177f64-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        30599: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "c6455c52c3c108ef-1920w.jpg 1920w",
                images: [{
                    path: a.p + "c6455c52c3c108ef-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "c6455c52c3c108ef-1920w.jpg",
                toString: function() {
                    return a.p + "c6455c52c3c108ef-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        35883: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "e7e30361f928fa1f-1920w.jpg 1920w",
                images: [{
                    path: a.p + "e7e30361f928fa1f-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "e7e30361f928fa1f-1920w.jpg",
                toString: function() {
                    return a.p + "e7e30361f928fa1f-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        55074: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "960324bdaa4dd770-1920w.jpg 1920w",
                images: [{
                    path: a.p + "960324bdaa4dd770-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "960324bdaa4dd770-1920w.jpg",
                toString: function() {
                    return a.p + "960324bdaa4dd770-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        34414: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "802b4af19623d031-1920w.jpg 1920w",
                images: [{
                    path: a.p + "802b4af19623d031-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "802b4af19623d031-1920w.jpg",
                toString: function() {
                    return a.p + "802b4af19623d031-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        47218: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "0848895a9717ee5a-1920w.jpg 1920w",
                images: [{
                    path: a.p + "0848895a9717ee5a-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "0848895a9717ee5a-1920w.jpg",
                toString: function() {
                    return a.p + "0848895a9717ee5a-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        },
        50749: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "2a36acbdc7592ce9-1920w.jpg 1920w",
                images: [{
                    path: a.p + "2a36acbdc7592ce9-1920w.jpg",
                    width: 1920,
                    height: 1080
                }],
                src: a.p + "2a36acbdc7592ce9-1920w.jpg",
                toString: function() {
                    return a.p + "2a36acbdc7592ce9-1920w.jpg"
                },
                width: 1920,
                height: 1080
            }
        }
    }
]);
//# sourceMappingURL=ab9e3027f00f967547d3b904afab218a934cad40b3234f4fb0c933c11a6c4a15.js.map