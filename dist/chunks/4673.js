"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4673], {
        80916: (e, t) => {
            var a = "envelope-circle-check",
                r = [],
                l = "e4e8",
                n = "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [640, 512, r, l, n]
            }, t.sl = t.DF
        },
        45155: (e, t) => {
            var a = "person-circle-question",
                r = [],
                l = "e542",
                n = "M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM368 321.6V328c0 8.8 7.2 16 16 16s16-7.2 16-16v-6.4c0-5.3 4.3-9.6 9.6-9.6h40.5c7.7 0 13.9 6.2 13.9 13.9c0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2V384c0 8.8 7.2 16 16 16s16-7.2 16-16v-5.1l23.5-12.3c15.1-7.9 24.5-23.6 24.5-40.6c0-25.4-20.6-45.9-45.9-45.9H409.6c-23 0-41.6 18.6-41.6 41.6z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [576, 512, r, l, n]
            }, t.Au = t.DF
        },
        36678: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var r = a(54546),
                l = a(67294),
                n = [{
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
            const s = function(e) {
                var t = e.children,
                    a = e.showCredits,
                    s = (0, l.useState)(null),
                    c = (0, r.Z)(s, 2),
                    o = c[0],
                    i = c[1],
                    m = (0, l.useState)(null),
                    w = (0, r.Z)(m, 2),
                    u = w[0],
                    d = w[1];
                (0, l.useEffect)((function() {
                    if (null === o) i(n[0]);
                    else {
                        var e = p(o);
                        setTimeout((function() {
                            return i(e)
                        }), 1e4), d(e)
                    }
                }), [o]);
                var p = function(e) {
                    var t = n.findIndex((function(t) {
                        return t.imagePath === e.imagePath
                    }));
                    return t === n.length - 1 ? n[0] : n[t + 1]
                };
                return l.createElement("div", {
                    className: " tw-transition-all tw-duration-1000 tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-flex tw-flex-col tw-justify-center tw-items-center ",
                    style: {
                        backgroundImage: null === o ? "none" : "url(".concat(o.imagePath, ")")
                    }
                }, l.createElement("div", {
                    className: "tw-relative tw-p-5 xl:tw-absolute xl:tw-top-[50px] xl:tw-left-12"
                }, l.createElement("a", {
                    href: "https://vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, l.createElement("img", {
                    className: "tw-w-[170px] tw-h-[75px]",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                    alt: "VRChat"
                }), l.createElement("img", {
                    className: "tw-hidden",
                    src: null == u ? void 0 : u.imagePath,
                    alt: "VRChat"
                }))), l.createElement("div", {
                    className: "tw-flex tw-h-screen tw-justify-center tw-w-full tw-overflow-auto"
                }, t), (null == o ? void 0 : o.worldName) && a && l.createElement("div", {
                    className: " tw-relative tw-text-sm tw-w-full xl:tw-absolute xl:tw-top-16 xl:tw-right-0 xl:tw-text-xl xl:tw-w-auto tw-bg-dark-grey-transparent-90 tw-transition-all tw-overflow-hidden tw-p-3 xl:tw-rounded-s-lg"
                }, l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "World:"), " ", o.worldName), l.createElement("p", {
                    className: "tw-text-right mb-0"
                }, l.createElement("strong", null, "Author:"), " ", o.authorName)))
            }
        },
        94673: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => x
            });
            var r = a(15861),
                l = a(54546),
                n = a(45155),
                s = a(80916),
                c = a(64687),
                o = a.n(c),
                i = a(67294),
                m = a(32981),
                w = a(79655),
                u = (a(37337), a(80873)),
                d = (a(60006), a(9669)),
                p = a.n(d),
                h = function(e) {
                    var t = e.name;
                    return {
                        type: "SEND_EMAIL_REMINDER",
                        payload: p().put(window.apiUrl("/api/1/auth/password"), {
                            name: t
                        })
                    }
                },
                f = a(34226),
                g = a(36678);
            const x = function() {
                var e = (0, m.I0)(),
                    t = i.useState(""),
                    a = (0, l.Z)(t, 2),
                    c = a[0],
                    d = a[1],
                    p = (0, u.Nr)(c),
                    x = i.useState(!1),
                    v = (0, l.Z)(x, 2),
                    N = v[0],
                    E = v[1],
                    b = (0, m.v9)((function(e) {
                        return e.recoverPassword
                    })),
                    k = b.error,
                    y = (b.statusCode, b.loading),
                    M = i.useMemo((function() {
                        return "" === c
                    }), [c]),
                    _ = i.useMemo((function() {
                        return c !== p
                    }), [c, p]),
                    P = i.useMemo((function() {
                        return p.length > 200 ? "That name is too long" : null
                    }), [p]),
                    z = i.useMemo((function() {
                        return N && !y && !k
                    }), [N, y, k]),
                    C = function() {
                        var t = (0, r.Z)(o().mark((function t(a) {
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!_ && !P) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return a.preventDefault(), t.prev = 3, t.next = 6, e(h({
                                            name: c
                                        }));
                                    case 6:
                                        return t.prev = 6, setTimeout((function() {
                                            E(!0)
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
                    D = k;
                k && k.indexOf(":") > 0 && (D = k.substring(k.indexOf(":") + 1).trim());
                return i.createElement(g.Z, null, i.createElement(f.$4, null, "Forgot Email Address"), i.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit tw-mt-[200px]"
                }, i.createElement("form", {
                    id: "email-recovery-form",
                    name: "email-recovery-form",
                    onSubmit: function(e) {
                        e.preventDefault(), C(e)
                    }
                }, i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, i.createElement("div", {
                    className: "tw-mb-5"
                }, z && i.createElement(f.$1, {
                    icon: s.sl,
                    className: "tw-w-[72px] tw-h-[72px]"
                }), !z && i.createElement(f.$1, {
                    icon: n.Au,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), i.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Forgot Email Address"), !z && i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, i.createElement("div", {
                    className: "tw-w-full"
                }, i.createElement("p", {
                    className: "tw-text-left tw-mb-2"
                }, "Please enter the user or display name of your account.")), i.createElement(f.II, {
                    type: "text",
                    inputMode: "name",
                    "aria-label": "Username",
                    value: c,
                    placeholder: "Username",
                    className: "tw-w-full",
                    onChange: function(e) {
                        var t = e.target.value;
                        d(void 0 === t ? "" : t), E(!1)
                    },
                    isError: P && !_ && !M
                }), P && !_ && !M && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Email Error",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, P)), i.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col"
                }, i.createElement("p", {
                    className: "tw-text-left tw-mt-2"
                }, "If the name is associated with a verified email address, we will send a reminder message to that address.")), i.createElement("div", {
                    className: z ? "tw-w-full tw-flex tw-flex-col" : "tw-hidden",
                    role: "alert",
                    "aria-label": "Check your email"
                }, i.createElement("p", {
                    className: "tw-text-center tw-mb-2"
                }, "We have attempted to send a reminder to your registered email address!"), i.createElement("p", {
                    className: "tw-text-subtext-grey"
                }, "You may need to check your spam folder if you don't see it within a few minutes.")), k && i.createElement("p", {
                    role: "alert",
                    "aria-label": "Failed to recover",
                    className: "tw-text-error-message-red tw-text-xs tw-whitespace-pre"
                }, D || "Oops, that didn't work."), !z && i.createElement(f.zx, {
                    disabled: P || _ || M,
                    className: "tw-mt-5 tw-w-60",
                    loading: y,
                    type: "submit"
                }, "Request reminder message"), i.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full tw-justify-center tw-mt-5"
                }, i.createElement(w.rU, {
                    to: "/home/login",
                    className: "tw-text-link-highlight"
                }, "Back to login"))))))
            }
        }
    }
]);
//# sourceMappingURL=c5653321f3d7a63a67d8e503d642b02b6f9c2a652038076dd915413a3cd1b830.js.map