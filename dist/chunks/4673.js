(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4673], {
        45155: (e, t) => {
            "use strict";
            var a = "person-circle-question",
                r = [],
                c = "e542",
                n = "M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM368 321.6l0 6.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-6.4c0-5.3 4.3-9.6 9.6-9.6l40.5 0c7.7 0 13.9 6.2 13.9 13.9c0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2l0 14.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-5.1 23.5-12.3c15.1-7.9 24.5-23.6 24.5-40.6c0-25.4-20.6-45.9-45.9-45.9l-40.5 0c-23 0-41.6 18.6-41.6 41.6z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, r, c, n]
            }, t.Au = t.DF
        },
        13887: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var r = a(54546),
                c = a(42404),
                n = a.n(c),
                i = a(67294),
                w = a(86646),
                l = a(62427);
            const s = [{
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
            const o = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    c = (0, i.useState)(null),
                    o = (0, r.Z)(c, 2),
                    p = o[0],
                    m = o[1],
                    g = (0, i.useState)(null),
                    d = (0, r.Z)(g, 2),
                    u = d[0],
                    h = d[1],
                    f = (0, i.useMemo)((function() {
                        return n()(s, 6)
                    }), []);
                (0, i.useEffect)((function() {
                    if (null === p) m(f[0]);
                    else {
                        var e = b(p);
                        setTimeout((function() {
                            return m(e)
                        }), 1e4), h(e)
                    }
                }), [p]);
                var b = function(e) {
                    var t = f.findIndex((function(t) {
                        return t.image.toString() === e.image.toString()
                    }));
                    return t === f.length - 1 ? f[0] : f[t + 1]
                };
                return i.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === p ? "none" : "url(".concat(p.image, ")")
                    }
                }, i.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, i.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, i.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), i.createElement("img", {
                    className: "tw-hidden",
                    src: null == u ? void 0 : u.image,
                    alt: "VRChat"
                }))), i.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == p ? void 0 : p.worldName) && a && i.createElement("div", {
                    className: " tw-relative tw-w-full tw-flex tw-flex-row tw-gap-2 tw-items-start xl:tw-absolute xl:tw-top-12 xl:tw-right-12 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-2 xl:tw-rounded-lg"
                }, i.createElement(w.Z, {
                    icon: l.default,
                    title: "World",
                    size: "2x"
                }), i.createElement("p", {
                    className: "tw-mb-0 tw-leading-none"
                }, p.worldName, i.createElement("br", null), i.createElement("small", null, "by ", p.authorName))))
            }
        },
        94673: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var r = a(15861),
                c = a(54546),
                n = a(45155),
                i = a(80916),
                w = a(64687),
                l = a.n(w),
                s = a(67294),
                o = a(32981),
                p = a(79655),
                m = (a(37337), a(17383)),
                g = (a(60006), a(9669)),
                d = a.n(g),
                u = function(e) {
                    var t = e.name;
                    return {
                        type: "SEND_EMAIL_REMINDER",
                        payload: d().put(window.apiUrl("/api/1/auth/password"), {
                            name: t
                        })
                    }
                },
                h = a(37463),
                f = a(13887);
            const b = function() {
                var e = (0, o.I0)(),
                    t = s.useState(""),
                    a = (0, c.Z)(t, 2),
                    w = a[0],
                    g = a[1],
                    d = (0, m.Nr)(w),
                    b = s.useState(!1),
                    x = (0, c.Z)(b, 2),
                    N = x[0],
                    j = x[1],
                    v = (0, o.v9)((function(e) {
                        return e.recoverPassword
                    })),
                    E = v.error,
                    S = (v.statusCode, v.loading),
                    y = s.useMemo((function() {
                        return "" === w
                    }), [w]),
                    k = s.useMemo((function() {
                        return w !== d
                    }), [w, d]),
                    M = s.useMemo((function() {
                        return d.length > 200 ? "That name is too long" : null
                    }), [d]),
                    A = s.useMemo((function() {
                        return N && !S && !E
                    }), [N, S, E]),
                    I = function() {
                        var t = (0, r.Z)(l().mark((function t(a) {
                            return l().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!k && !M) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return a.preventDefault(), t.prev = 3, t.next = 6, e(u({
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
                    D = E;
                E && E.indexOf(":") > 0 && (D = E.substring(E.indexOf(":") + 1).trim());
                return s.createElement(f.Z, null, s.createElement(h.$4, null, "Forgot Email Address"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit tw-mt-[200px]"
                }, s.createElement("form", {
                    id: "email-recovery-form",
                    name: "email-recovery-form",
                    onSubmit: function(e) {
                        e.preventDefault(), I(e)
                    }
                }, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, A && s.createElement(h.$1, {
                    icon: i.sl,
                    className: "tw-w-[72px] tw-h-[72px]"
                }), !A && s.createElement(h.$1, {
                    icon: n.Au,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Forgot Email Address"), !A && s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, s.createElement("div", {
                    className: "tw-w-full"
                }, s.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Please enter the user or display name of your account.")), s.createElement(h.II, {
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
                    isError: M && !k && !y
                }), M && !k && !y && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Email Error",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, M)), s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, s.createElement("p", {
                    className: "tw-text-left tw-mt-2"
                }, "If the name is associated with a verified email address, we will send a reminder message to that address.")), s.createElement("div", {
                    className: A ? "tw-w-full tw-flex tw-flex-col" : "tw-hidden",
                    role: "alert",
                    "aria-label": "Check your email"
                }, s.createElement("p", {
                    className: "tw-text-center tw-mb-2"
                }, "We have attempted to send a reminder to your registered email address!"), s.createElement("p", {
                    className: "tw-text-subtext-grey"
                }, "You may need to check your spam folder if you don't see it within a few minutes.")), E && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Failed to recover",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, D || "Oops, that didn't work."), !A && s.createElement(h.zx, {
                    disabled: M || k || y,
                    className: "tw-mt-5 tw-w-60",
                    loading: S,
                    type: "submit"
                }, "Request reminder message"), s.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, s.createElement(p.rU, {
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
//# sourceMappingURL=ef63e3bb8a140ebce4f028eb5a3b3bf819b162c7fabbc4a75b1687c00fb132d6.js.map