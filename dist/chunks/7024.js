"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7024], {
        75969: (e, t) => {
            var a = "gift",
                n = [127873],
                r = "f06b",
                l = "M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, r, l]
            }, t.Cl = t.DF
        },
        48192: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => H
            });
            var n = a(42138),
                r = a(54546),
                l = a(4965),
                i = a(65394),
                c = a(85020),
                o = a(67294),
                s = a(35773),
                d = a(95305),
                m = a(69677),
                p = a(34226);
            const u = a.p + "7ca9f9c3d5cfdffe94cc3660caaf5967dbdadc88976d6d43a77380c9b0e350d7.png",
                g = a.p + "9828977dcf6a732b9d3c0e12a75316dac0bc3e8e6227e0e7e9626a23f38e283a.png",
                x = a.p + "cf8d6ff65e21a025ebe28394f44483d66c3a808bdfbc3dce2e8278381c6c32c1.png";
            var b = a(75969),
                f = a(79655),
                E = a(27484),
                h = a.n(E),
                y = a(56176),
                v = a.n(y);
            const w = function(e) {
                var t = e.subscription,
                    a = e.initialGift,
                    n = e.tiny,
                    r = (t.id, t.transactionId, t.store),
                    l = (t.amount, t.description),
                    i = t.period,
                    c = (t.active, t.status),
                    s = t.starts,
                    d = t.expires,
                    m = t.isGift,
                    u = t.giftedBy,
                    g = t.giftedByDisplayName;
                t.appliedToSubscriptionId;
                h().extend(v());
                var x = function(e) {
                        return h()(e).format("ll")
                    },
                    f = "active" === c && a ? "paused" : c;
                return n ? o.createElement(z, {
                    className: r,
                    "aria-label": "Tiny VRCPlus ".concat(m ? "Gifted" : "Recurring", " Subscription Card")
                }, o.createElement("h4", null, m && o.createElement(p.$1, {
                    icon: b.Cl
                }), " ", m ? "Gifted" : "Recurring")) : o.createElement(k, {
                    "aria-label": "VRCPlus ".concat(m ? "Gifted" : "Recurring", " Subscription Card")
                }, o.createElement(Z, {
                    className: r
                }, o.createElement(S, {
                    className: r,
                    src: {
                        Oculus: "https://assets.vrchat.com/misc/meta-logo.png",
                        Steam: "https://assets.vrchat.com/misc/steam_logo.svg",
                        Admin: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-background.png"
                    } [r]
                })), o.createElement(p.Ao, {
                    className: "p-3"
                }, o.createElement("h4", null, " ", m && o.createElement(p.$1, {
                    icon: b.Cl
                }), " ", l), o.createElement(G, null, o.createElement("otherDiv", null, !m && o.createElement(p.X2, {
                    "aria-label": "Subscription Status"
                }, o.createElement(N, null, "Status:"), o.createElement(C, null, " ", f)), o.createElement(p.X2, {
                    "aria-label": "Subscription Period"
                }, o.createElement(N, null, "Period:"), o.createElement(C, null, i)), m && o.createElement(p.X2, {
                    "aria-label": "Subscription Start Date"
                }, o.createElement(N, null, "Starts:"), o.createElement(C, null, " ", x(s), " ")), o.createElement(p.X2, {
                    "aria-label": "Subscription End Date"
                }, o.createElement(N, null, m ? "Expires" : "Next Payment", ":"), o.createElement(C, null, x(d), " ")), (m || a) && o.createElement("div", {
                    className: "mt-5",
                    "aria-label": "Subscription Gifted By"
                }, o.createElement(V, null, " ", !m && "This ".concat(a.period.slice(0, 1).toUpperCase() + a.period.slice(1)), " Gifted By", " "), o.createElement(p.$1, {
                    icon: b.Cl,
                    size: "2x",
                    className: "pr-3"
                }), " ", o.createElement(q, {
                    to: "/home/user/".concat(u || a.giftedBy),
                    "aria-label": "Open User Page"
                }, g || a.giftedByDisplayName))))))
            };
            var z = (0, l.Z)(p.JX, {
                    target: "e1qexzd28"
                })({
                    name: "16lfucs",
                    styles: "width:160px;height:80px;justify-content:center;align-content:center;text-align:center;border-style:solid;border-width:3px;border-radius:8px;background-repeat:no-repeat;background-position:center;border-image:initial;&.Oculus{background-color:#676767;border-color:#373737;background-size:100%;img{opacity:0.1;}}&.Steam{background-color:rgb(24, 27, 31);border-color:#565656;background-size:100%;}&.Admin{background-color:#07242b;border-color:#053c48;}svg{color:yellow;}"
                }),
                k = (0, l.Z)(p.JX, {
                    target: "e1qexzd27"
                })({
                    name: "uka2i8",
                    styles: "width:320px;justify-content:flex-end;border:white"
                }),
                Z = (0, l.Z)(p.oI, {
                    target: "e1qexzd26"
                })({
                    name: "w5mjfy",
                    styles: "&.Steam{background-color:#red;background-image:linear-gradient(50deg, #184053, #1b2838, #000000f5);}&.Oculus{background-color:#cdcdcd;border-color:#a9a9a9;}&.Admin{padding:10px 0px 0px 0px;align-items:center;}"
                }),
                S = (0, l.Z)("img", {
                    target: "e1qexzd25"
                })({
                    name: "1k4htmn",
                    styles: "&.Steam{margin-left:20px;}&.Oculus{margin-top:0.7rem;margin-bottom:10px;width:78%;text-align:center;margin-left:20px;}&.Admin{width:58%;}"
                }),
                N = (0, l.Z)(p.JX, {
                    target: "e1qexzd24"
                })({
                    name: "pfx2m",
                    styles: "width:50%;font-weight:bold"
                }),
                C = (0, l.Z)(p.JX, {
                    target: "e1qexzd23"
                })({
                    name: "1wi8p6s",
                    styles: "text-align:right;width:50%"
                }),
                G = (0, l.Z)("div", {
                    target: "e1qexzd22"
                })({
                    name: "ah67qu",
                    styles: "display:flex;flex-direction:column;padding:0.9rem;border-style:solid;background-color:rgb(24, 27, 31);border-color:rgb(24, 27, 31);border-width:0px 3px 3px;border-radius:0px 0px 8px 8px;color:#737372"
                }),
                V = (0, l.Z)("h4", {
                    target: "e1qexzd21"
                })({
                    name: "15ypxw7",
                    styles: "font-size:1.2em;margin-top:0.25rem;word-break:break-all;text-align:left;margin-bottom:0.25rem;color:#737372"
                }),
                q = (0, l.Z)(f.rU, {
                    target: "e1qexzd20"
                })({
                    name: "1msic18",
                    styles: "padding:0;margin:0;color:#095d6a;outline:none!important;font-size:1.2em;&:hover{color:#095d6a;text-decoration:underline;}"
                });
            const H = function(e) {
                var t, a = e.userId,
                    l = (0, m.Vl)({
                        userId: a
                    }).data,
                    s = o.useState(0),
                    d = (0, r.Z)(s, 2),
                    b = d[0],
                    f = d[1],
                    E = l ? l.filter((function(e) {
                        return e.isGift
                    })) : [],
                    h = l ? l.filter((function(e) {
                        return !e.isGift
                    })) : [],
                    y = [].concat((0, n.Z)(E), (0, n.Z)(h)),
                    v = (null == h ? void 0 : h.length) > 0,
                    z = (null == E ? void 0 : E.length) > 0,
                    k = b < (null == y ? void 0 : y.length) - 1,
                    Z = b > 0,
                    S = !(null !== (t = y[b]) && void 0 !== t && t.isGift);
                return o.createElement("div", null, o.createElement(p.$4, null, "Subscriptions"), o.createElement(j, {
                    id: "SubscriptionGrid"
                }, o.createElement(I, {
                    className: "pr-0 mb-2"
                }, o.createElement($, null, o.createElement("picture", null, o.createElement("source", {
                    srcSet: "".concat(g, ", ").concat(x, " 2x")
                }), o.createElement("img", {
                    src: g,
                    alt: "VRChat Plus Logo"
                })))), 0 === y.length && o.createElement(o.Fragment, null, o.createElement(I, {
                    className: "pt-3 pr-0"
                }, o.createElement($, {
                    className: "pt-3"
                }, o.createElement("p", {
                    "aria-label": "No Subscriptions"
                }, "No VRC+ subscriptions here, perhaps consider", " ", o.createElement("a", {
                    href: "https://hello.vrchat.com/vrchatplus",
                    target: "_blank",
                    rel: "noreferrer"
                }, "subscribing!"))))), y.length > 0 && o.createElement(o.Fragment, null, z && o.createElement(I, {
                    className: "pt-2 pr-0 pb-3",
                    "aria-label": "Gifted Subs Total"
                }, o.createElement($, null, "🎉 You have ", null == E ? void 0 : E.length, " Gift", (null == E ? void 0 : E.length) > 1 && "s", "! 🎉")), o.createElement(I, {
                    className: "pt-4 pr-0"
                }, o.createElement(P, {
                    xs: "4"
                }, Z && o.createElement(p.zx, {
                    "aria-label": "Previous Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return f(b - 1)
                    }
                }, " ", o.createElement(p.$1, {
                    icon: c.A3
                }), " ")), o.createElement(B, {
                    xs: "4"
                }, o.createElement(D, {
                    className: k ? "" : "extra-padding"
                }, Z && o.createElement(w, {
                    subscription: y[b - 1],
                    tiny: !0
                })), o.createElement(X, {
                    className: y.length > 1 ? "layer" : ""
                }, o.createElement(w, {
                    subscription: y[b],
                    tiny: !0
                })), o.createElement(A, {
                    className: Z ? "" : "extra-padding"
                }, k && o.createElement(w, {
                    subscription: y[b + 1],
                    tiny: !0
                }))), o.createElement(R, {
                    xs: "4"
                }, k && o.createElement(p.zx, {
                    "aria-label": "Next Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return f(b + 1)
                    }
                }, " ", o.createElement(p.$1, {
                    icon: i._t
                }), " "))), o.createElement(I, {
                    className: "pt-4 pr-0"
                }, o.createElement($, null, o.createElement(w, {
                    subscription: y[b],
                    initialGift: E.length > 0 ? E[0] : null
                }))), z && v && S && o.createElement(I, null, o.createElement($, {
                    className: "pt-3"
                }, o.createElement("p", null, "Payments to your recurring VRC+ subscription will remain paused until all your gifts expire. So sit back, relax and enjoy your gifted subs! 🥳")))), o.createElement(I, {
                    className: "pt-2 pr-0"
                }, o.createElement($, null, o.createElement("img", {
                    src: u,
                    alt: "VRCat smiling at the viewer"
                })))))
            };
            var j = (0, l.Z)(s.Z, {
                    target: "e1ia4l738"
                })({
                    name: "koglwr",
                    styles: "margin-top:10px;margin-bottom:30px"
                }),
                P = (0, l.Z)(d.Z, {
                    target: "e1ia4l737"
                })({
                    name: "1idgyd0",
                    styles: "display:flex;justify-content:right;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                R = (0, l.Z)(d.Z, {
                    target: "e1ia4l736"
                })({
                    name: "o0fiqe",
                    styles: "display:flex;justify-content:left;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                X = (0, l.Z)("div", {
                    target: "e1ia4l735"
                })({
                    name: "e0vf0c",
                    styles: "z-index:3;box-shadow:0px 20px 20px black;margin-bottom:20px;&.layer{position:absolute;top:-24px;}"
                }),
                D = (0, l.Z)("div", {
                    target: "e1ia4l734"
                })({
                    name: "zy9on0",
                    styles: "z-index:1;opacity:0.4;margin:10px 20px 0px 0px;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-right:180px;}"
                }),
                A = (0, l.Z)("div", {
                    target: "e1ia4l733"
                })({
                    name: "yp97xx",
                    styles: "z-index:1;margin:10px 0px 0px 20px;opacity:0.2;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-left:180px;}"
                }),
                B = (0, l.Z)(d.Z, {
                    target: "e1ia4l732"
                })({
                    name: "9otfrm",
                    styles: "justify-content:center;display:flex;position:relative"
                }),
                $ = (0, l.Z)(d.Z, {
                    target: "e1ia4l731"
                })({
                    name: "t6kner",
                    styles: "justify-content:center;display:flex;padding-right:0px;p{width:300px;color:gray;}"
                }),
                I = (0, l.Z)(s.Z, {
                    target: "e1ia4l730"
                })({
                    name: "v4gdnl",
                    styles: "padding-right:0px"
                })
        }
    }
]);
//# sourceMappingURL=996d5dbde28458136f28f805c7c392512dbe5df025a25d6778cc47e394f3f460.js.map