(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4673], {
        13887: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var r = a(54546),
                n = a(42404),
                i = a.n(n),
                c = a(67294),
                w = a(86646),
                l = a(62427);
            const o = [{
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
                    n = (0, c.useState)(null),
                    s = (0, r.Z)(n, 2),
                    p = s[0],
                    m = s[1],
                    g = (0, c.useState)(null),
                    d = (0, r.Z)(g, 2),
                    h = d[0],
                    u = d[1],
                    f = (0, c.useMemo)((function() {
                        return i()(o, 6)
                    }), []);
                (0, c.useEffect)((function() {
                    if (null === p) m(f[0]);
                    else {
                        var e = b(p);
                        setTimeout((function() {
                            return m(e)
                        }), 1e4), u(e)
                    }
                }), [p]);
                var b = function(e) {
                    var t = f.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === f.length - 1 ? f[0] : f[t + 1]
                };
                return c.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === p ? "none" : "url(".concat(p.image, ")")
                    }
                }, c.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, c.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, c.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), c.createElement("img", {
                    className: "tw-hidden",
                    src: null == h ? void 0 : h.image,
                    alt: "VRChat"
                }))), c.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == p ? void 0 : p.worldName) && a && c.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, c.createElement(w.Z, {
                    icon: l.default,
                    title: "World",
                    size: "2x"
                }), c.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, p.worldName, c.createElement("br", null), c.createElement("small", null, "by ", p.authorName))))
            }
        },
        94673: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var r = a(15861),
                n = a(54546),
                i = a(45155),
                c = a(80916),
                w = a(64687),
                l = a.n(w),
                o = a(67294),
                s = a(32981),
                p = a(79655),
                m = (a(37337), a(17383)),
                g = (a(60006), a(9669)),
                d = a.n(g),
                h = function(e) {
                    var t = e.name;
                    return {
                        type: "SEND_EMAIL_REMINDER",
                        payload: d().put(window.apiUrl("/api/1/auth/password"), {
                            name: t
                        })
                    }
                },
                u = a(96985),
                f = a(13887);
            const b = function() {
                var e = (0, s.I0)(),
                    t = o.useState(""),
                    a = (0, n.Z)(t, 2),
                    w = a[0],
                    g = a[1],
                    d = (0, m.Nr)(w),
                    b = o.useState(!1),
                    x = (0, n.Z)(b, 2),
                    N = x[0],
                    j = x[1],
                    v = (0, s.v9)((function(e) {
                        return e.recoverPassword
                    })),
                    E = v.error,
                    S = (v.statusCode, v.loading),
                    y = o.useMemo((function() {
                        return "" === w
                    }), [w]),
                    k = o.useMemo((function() {
                        return w !== d
                    }), [w, d]),
                    I = o.useMemo((function() {
                        return d.length > 200 ? "That name is too long" : null
                    }), [d]),
                    M = o.useMemo((function() {
                        return N && !S && !E
                    }), [N, S, E]),
                    A = function() {
                        var t = (0, r.Z)(l().mark((function t(a) {
                            return l().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!k && !I) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return a.preventDefault(), t.prev = 3, t.next = 6, e(h({
                                            name: w
                                        }));
                                    case 6:
                                        return t.prev = 6, setTimeout((function() {
                                            j(!0)
                                        }), 750), t.finish(6);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, , 6, 9]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    C = E;
                E && E.indexOf(":") > 0 && (C = E.substring(E.indexOf(":") + 1).trim());
                return o.createElement(f.Z, null, o.createElement(u.$4, null, "Forgot Email Address"), o.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit tw-mt-[200px]"
                }, o.createElement("form", {
                    id: "email-recovery-form",
                    name: "email-recovery-form",
                    onSubmit: function(e) {
                        e.preventDefault(), A(e)
                    }
                }, o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, o.createElement("div", {
                    className: "tw-mb-5"
                }, M && o.createElement(u.$1, {
                    icon: c.sl,
                    className: "tw-w-[72px] tw-h-[72px]"
                }), !M && o.createElement(u.$1, {
                    icon: i.Au,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), o.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Forgot Email Address"), !M && o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, o.createElement("div", {
                    className: "tw-w-full"
                }, o.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Please enter the user or display name of your account.")), o.createElement(u.II, {
                    type: "text",
                    inputMode: "name",
                    "aria-label": "Username",
                    value: w,
                    placeholder: "Username",
                    className: "tw-w-full",
                    onChange: function(e) {
                        var t = e.target.value;
                        g(void 0 === t ? "" : t), j(!1)
                    },
                    isError: I && !k && !y
                }), I && !k && !y && o.createElement("p", {
                    role: "alert",
                    "aria-label": "Email Error",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, I)), o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, o.createElement("p", {
                    className: "tw-text-left tw-mt-2"
                }, "If the name is associated with a verified email address, we will send a reminder message to that address.")), o.createElement("div", {
                    className: M ? "tw-w-full tw-flex tw-flex-col" : "tw-hidden",
                    role: "alert",
                    "aria-label": "Check your email"
                }, o.createElement("p", {
                    className: "tw-text-center tw-mb-2"
                }, "We have attempted to send a reminder to your registered email address!"), o.createElement("p", {
                    className: "tw-text-subtext-grey"
                }, "You may need to check your spam folder if you don't see it within a few minutes.")), E && o.createElement("p", {
                    role: "alert",
                    "aria-label": "Failed to recover",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, C || "Oops, that didn't work."), !M && o.createElement(u.zx, {
                    disabled: I || k || y,
                    className: "tw-mt-5 tw-w-60",
                    loading: S,
                    type: "submit"
                }, "Request reminder message"), o.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, o.createElement(p.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login"))))))
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
//# sourceMappingURL=d1a7d5874f89912940e661dd4e173dd514181231f9ae4edb027dd00f8308c3c0.js.map