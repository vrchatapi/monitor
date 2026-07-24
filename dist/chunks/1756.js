(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1756], {
        6723(e, t) {
            "use strict";
            var a = "gift",
                n = [127873],
                r = "f06b",
                i = "M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z";
            t.mw = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, r, i]
            }, t.C9 = t.mw
        },
        11756(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: () => I
            });
            var n = a(66911),
                r = a(82544),
                i = a(70129),
                l = a(79162),
                c = a(49107),
                s = a(96540),
                o = a(5826),
                m = a(39704),
                p = a(46078),
                d = a(71661),
                u = a(85248),
                g = a.n(u),
                x = a(63508),
                b = a.n(x),
                f = a(16260),
                h = a.n(f),
                E = a(6723),
                y = a(84976),
                w = a(74353),
                v = a.n(w),
                A = a(15750),
                S = a.n(A);
            const z = function(e) {
                var t = e.subscription,
                    a = e.initialGift,
                    n = e.tiny,
                    r = (t.id, t.transactionId, t.store),
                    i = (t.amount, t.description),
                    l = t.period,
                    c = (t.active, t.status),
                    o = t.starts,
                    m = t.expires,
                    p = t.isGift,
                    u = t.giftedBy,
                    g = t.giftedByDisplayName;
                t.appliedToSubscriptionId;
                v().extend(S());
                var x = function(e) {
                        return v()(e).format("ll")
                    },
                    b = "active" === c && a ? "paused" : c;
                return n ? s.createElement(k, {
                    className: r,
                    "aria-label": "Tiny VRCPlus ".concat(p ? "Gifted" : "Recurring", " Subscription Card")
                }, s.createElement("h4", null, p && s.createElement(d.M2, {
                    icon: E.C9
                }), " ", p ? "Gifted" : "Recurring")) : s.createElement(N, {
                    "aria-label": "VRCPlus ".concat(p ? "Gifted" : "Recurring", " Subscription Card")
                }, s.createElement(C, {
                    className: r
                }, s.createElement(G, {
                    className: r,
                    src: {
                        Oculus: "https://assets.vrchat.com/misc/meta-logo.png",
                        Steam: "https://assets.vrchat.com/misc/steam_logo.svg",
                        Admin: "https://assets.vrchat.com/www/favicons/android-chrome-512x512.png"
                    } [r]
                })), s.createElement(d.BW, {
                    className: "p-3"
                }, s.createElement("h4", null, " ", p && s.createElement(d.M2, {
                    icon: E.C9
                }), " ", i), s.createElement(M, null, s.createElement("otherDiv", null, !p && s.createElement(d.fI, {
                    "aria-label": "Subscription Status"
                }, s.createElement(q, null, "Status:"), s.createElement(j, null, " ", b)), s.createElement(d.fI, {
                    "aria-label": "Subscription Period"
                }, s.createElement(q, null, "Period:"), s.createElement(j, null, l)), p && s.createElement(d.fI, {
                    "aria-label": "Subscription Start Date"
                }, s.createElement(q, null, "Starts:"), s.createElement(j, null, " ", x(o), " ")), s.createElement(d.fI, {
                    "aria-label": "Subscription End Date"
                }, s.createElement(q, null, p ? "Expires" : "Next Payment", ":"), s.createElement(j, null, x(m), " ")), (p || a) && s.createElement("div", {
                    className: "mt-5",
                    "aria-label": "Subscription Gifted By"
                }, s.createElement(P, null, " ", !p && "This ".concat(a.period.slice(0, 1).toUpperCase() + a.period.slice(1)), " Gifted By", " "), s.createElement(d.M2, {
                    icon: E.C9,
                    size: "2x",
                    className: "pr-3"
                }), " ", s.createElement(R, {
                    to: "/home/user/".concat(u || a.giftedBy),
                    "aria-label": "Open User Page"
                }, g || a.giftedByDisplayName))))))
            };
            var k = (0, i.A)(d.fv, {
                    target: "e1qexzd28"
                })({
                    name: "16lfucs",
                    styles: "width:160px;height:80px;justify-content:center;align-content:center;text-align:center;border-style:solid;border-width:3px;border-radius:8px;background-repeat:no-repeat;background-position:center;border-image:initial;&.Oculus{background-color:#676767;border-color:#373737;background-size:100%;img{opacity:0.1;}}&.Steam{background-color:rgb(24, 27, 31);border-color:#565656;background-size:100%;}&.Admin{background-color:#07242b;border-color:#053c48;}svg{color:yellow;}"
                }),
                N = (0, i.A)(d.fv, {
                    target: "e1qexzd27"
                })({
                    name: "uka2i8",
                    styles: "width:320px;justify-content:flex-end;border:white"
                }),
                C = (0, i.A)(d.N3, {
                    target: "e1qexzd26"
                })({
                    name: "w5mjfy",
                    styles: "&.Steam{background-color:#red;background-image:linear-gradient(50deg, #184053, #1b2838, #000000f5);}&.Oculus{background-color:#cdcdcd;border-color:#a9a9a9;}&.Admin{padding:10px 0px 0px 0px;align-items:center;}"
                }),
                G = (0, i.A)("img", {
                    target: "e1qexzd25"
                })({
                    name: "1k4htmn",
                    styles: "&.Steam{margin-left:20px;}&.Oculus{margin-top:0.7rem;margin-bottom:10px;width:78%;text-align:center;margin-left:20px;}&.Admin{width:58%;}"
                }),
                q = (0, i.A)(d.fv, {
                    target: "e1qexzd24"
                })({
                    name: "pfx2m",
                    styles: "width:50%;font-weight:bold"
                }),
                j = (0, i.A)(d.fv, {
                    target: "e1qexzd23"
                })({
                    name: "1wi8p6s",
                    styles: "text-align:right;width:50%"
                }),
                M = (0, i.A)("div", {
                    target: "e1qexzd22"
                })({
                    name: "ah67qu",
                    styles: "display:flex;flex-direction:column;padding:0.9rem;border-style:solid;background-color:rgb(24, 27, 31);border-color:rgb(24, 27, 31);border-width:0px 3px 3px;border-radius:0px 0px 8px 8px;color:#737372"
                }),
                P = (0, i.A)("h4", {
                    target: "e1qexzd21"
                })({
                    name: "15ypxw7",
                    styles: "font-size:1.2em;margin-top:0.25rem;word-break:break-all;text-align:left;margin-bottom:0.25rem;color:#737372"
                }),
                R = (0, i.A)(y.N_, {
                    target: "e1qexzd20"
                })({
                    name: "1msic18",
                    styles: "padding:0;margin:0;color:#095d6a;outline:none!important;font-size:1.2em;&:hover{color:#095d6a;text-decoration:underline;}"
                });
            const I = function(e) {
                var t, a = e.userId,
                    i = (0, p.VG)({
                        userId: a
                    }).data,
                    o = s.useState(0),
                    m = (0, r.A)(o, 2),
                    u = m[0],
                    x = m[1],
                    f = i ? i.filter(function(e) {
                        return e.isGift
                    }) : [],
                    E = i ? i.filter(function(e) {
                        return !e.isGift
                    }) : [],
                    y = [].concat((0, n.A)(f), (0, n.A)(E)),
                    w = (null == E ? void 0 : E.length) > 0,
                    v = (null == f ? void 0 : f.length) > 0,
                    A = u < (null == y ? void 0 : y.length) - 1,
                    S = u > 0,
                    k = !(null !== (t = y[u]) && void 0 !== t && t.isGift);
                return s.createElement("div", null, s.createElement(d.Qc, null, "Subscriptions"), s.createElement(B, {
                    id: "SubscriptionGrid"
                }, s.createElement(U, {
                    className: "pr-0 mb-2"
                }, s.createElement(F, null, s.createElement("picture", null, s.createElement("source", {
                    srcSet: "".concat(b(), ", ").concat(h(), " 2x")
                }), s.createElement("img", {
                    src: b(),
                    alt: "VRChat Plus Logo"
                })))), 0 === y.length && s.createElement(s.Fragment, null, s.createElement(U, {
                    className: "pt-3 pr-0"
                }, s.createElement(F, {
                    className: "pt-3"
                }, s.createElement("p", {
                    "aria-label": "No Subscriptions"
                }, "No VRC+ subscriptions here, perhaps consider", " ", s.createElement("a", {
                    href: "https://hello.vrchat.com/vrchatplus",
                    target: "_blank",
                    rel: "noreferrer"
                }, "subscribing!"))))), y.length > 0 && s.createElement(s.Fragment, null, v && s.createElement(U, {
                    className: "pt-2 pr-0 pb-3",
                    "aria-label": "Gifted Subs Total"
                }, s.createElement(F, null, "🎉 You have ", null == f ? void 0 : f.length, " Gift", (null == f ? void 0 : f.length) > 1 && "s", "! 🎉")), s.createElement(U, {
                    className: "pt-4 pr-0"
                }, s.createElement(V, {
                    xs: "4"
                }, S && s.createElement(d.$n, {
                    "aria-label": "Previous Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return x(u - 1)
                    }
                }, " ", s.createElement(d.M2, {
                    icon: c.Wz
                }), " ")), s.createElement(T, {
                    xs: "4"
                }, s.createElement(O, {
                    className: A ? "" : "extra-padding"
                }, S && s.createElement(z, {
                    subscription: y[u - 1],
                    tiny: !0
                })), s.createElement(D, {
                    className: y.length > 1 ? "layer" : ""
                }, s.createElement(z, {
                    subscription: y[u],
                    tiny: !0
                })), s.createElement(_, {
                    className: S ? "" : "extra-padding"
                }, A && s.createElement(z, {
                    subscription: y[u + 1],
                    tiny: !0
                }))), s.createElement(L, {
                    xs: "4"
                }, A && s.createElement(d.$n, {
                    "aria-label": "Next Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return x(u + 1)
                    }
                }, " ", s.createElement(d.M2, {
                    icon: l.Xk
                }), " "))), s.createElement(U, {
                    className: "pt-4 pr-0"
                }, s.createElement(F, null, s.createElement(z, {
                    subscription: y[u],
                    initialGift: f.length > 0 ? f[0] : null
                }))), v && w && k && s.createElement(U, null, s.createElement(F, {
                    className: "pt-3"
                }, s.createElement("p", null, "Payments to your recurring VRC+ subscription will remain paused until all your gifts expire. So sit back, relax and enjoy your gifted subs! 🥳")))), s.createElement(U, {
                    className: "pt-2 pr-0"
                }, s.createElement(F, null, s.createElement("img", {
                    src: g(),
                    alt: "VRCat smiling at the viewer"
                })))))
            };
            var B = (0, i.A)(o.A, {
                    target: "e1ia4l738"
                })({
                    name: "koglwr",
                    styles: "margin-top:10px;margin-bottom:30px"
                }),
                V = (0, i.A)(m.A, {
                    target: "e1ia4l737"
                })({
                    name: "1idgyd0",
                    styles: "display:flex;justify-content:right;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                L = (0, i.A)(m.A, {
                    target: "e1ia4l736"
                })({
                    name: "o0fiqe",
                    styles: "display:flex;justify-content:left;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                D = (0, i.A)("div", {
                    target: "e1ia4l735"
                })({
                    name: "e0vf0c",
                    styles: "z-index:3;box-shadow:0px 20px 20px black;margin-bottom:20px;&.layer{position:absolute;top:-24px;}"
                }),
                O = (0, i.A)("div", {
                    target: "e1ia4l734"
                })({
                    name: "zy9on0",
                    styles: "z-index:1;opacity:0.4;margin:10px 20px 0px 0px;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-right:180px;}"
                }),
                _ = (0, i.A)("div", {
                    target: "e1ia4l733"
                })({
                    name: "yp97xx",
                    styles: "z-index:1;margin:10px 0px 0px 20px;opacity:0.2;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-left:180px;}"
                }),
                T = (0, i.A)(m.A, {
                    target: "e1ia4l732"
                })({
                    name: "9otfrm",
                    styles: "justify-content:center;display:flex;position:relative"
                }),
                F = (0, i.A)(m.A, {
                    target: "e1ia4l731"
                })({
                    name: "t6kner",
                    styles: "justify-content:center;display:flex;padding-right:0px;p{width:300px;color:gray;}"
                }),
                U = (0, i.A)(o.A, {
                    target: "e1ia4l730"
                })({
                    name: "v4gdnl",
                    styles: "padding-right:0px"
                })
        },
        85248(e, t, a) {
            e.exports = {
                srcSet: a.p + "2a0ba8cbc8386508-256w.png 256w",
                images: [{
                    path: a.p + "2a0ba8cbc8386508-256w.png",
                    width: 256,
                    height: 256
                }],
                src: a.p + "2a0ba8cbc8386508-256w.png",
                toString: function() {
                    return a.p + "2a0ba8cbc8386508-256w.png"
                },
                width: 256,
                height: 256
            }
        },
        63508(e, t, a) {
            e.exports = {
                srcSet: a.p + "ab5b267f449f2193-305w.png 305w",
                images: [{
                    path: a.p + "ab5b267f449f2193-305w.png",
                    width: 305,
                    height: 120
                }],
                src: a.p + "ab5b267f449f2193-305w.png",
                toString: function() {
                    return a.p + "ab5b267f449f2193-305w.png"
                },
                width: 305,
                height: 120
            }
        }
    }
]);
//# sourceMappingURL=7ccebc2edb1c2a9da0930c2470472a4881b327c27f9a055482b5ea8888278161.js.map