(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6812], {
        75969: (e, t) => {
            "use strict";
            var a = "gift",
                n = [127873],
                r = "f06b",
                l = "M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z";
            t.DF = {
                prefix: "fas",
                iconName: a,
                icon: [512, 512, n, r, l]
            }, t.Cl = t.DF
        },
        46812: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => D
            });
            var n = a(42138),
                r = a(54546),
                l = a(4965),
                i = a(65394),
                c = a(85020),
                s = a(67294),
                o = a(35773),
                p = a(95305),
                m = a(69677),
                d = a(96985),
                u = a(79967),
                g = a.n(u),
                b = a(3905),
                x = a.n(b),
                h = a(16031),
                f = a.n(h),
                E = a(75969),
                y = a(79655),
                w = a(27484),
                v = a.n(w),
                z = a(56176),
                S = a.n(z);
            const Z = function(e) {
                var t = e.subscription,
                    a = e.initialGift,
                    n = e.tiny,
                    r = (t.id, t.transactionId, t.store),
                    l = (t.amount, t.description),
                    i = t.period,
                    c = (t.active, t.status),
                    o = t.starts,
                    p = t.expires,
                    m = t.isGift,
                    u = t.giftedBy,
                    g = t.giftedByDisplayName;
                t.appliedToSubscriptionId;
                v().extend(S());
                var b = function(e) {
                        return v()(e).format("ll")
                    },
                    x = "active" === c && a ? "paused" : c;
                return n ? s.createElement(k, {
                    className: r,
                    "aria-label": "Tiny VRCPlus ".concat(m ? "Gifted" : "Recurring", " Subscription Card")
                }, s.createElement("h4", null, m && s.createElement(d.$1, {
                    icon: E.Cl
                }), " ", m ? "Gifted" : "Recurring")) : s.createElement(N, {
                    "aria-label": "VRCPlus ".concat(m ? "Gifted" : "Recurring", " Subscription Card")
                }, s.createElement(C, {
                    className: r
                }, s.createElement(G, {
                    className: r,
                    src: {
                        Oculus: "https://assets.vrchat.com/misc/meta-logo.png",
                        Steam: "https://assets.vrchat.com/misc/steam_logo.svg",
                        Admin: "https://assets.vrchat.com/www/favicons/android-chrome-512x512.png"
                    } [r]
                })), s.createElement(d.Ao, {
                    className: "p-3"
                }, s.createElement("h4", null, " ", m && s.createElement(d.$1, {
                    icon: E.Cl
                }), " ", l), s.createElement(P, null, s.createElement("otherDiv", null, !m && s.createElement(d.X2, {
                    "aria-label": "Subscription Status"
                }, s.createElement(q, null, "Status:"), s.createElement(j, null, " ", x)), s.createElement(d.X2, {
                    "aria-label": "Subscription Period"
                }, s.createElement(q, null, "Period:"), s.createElement(j, null, i)), m && s.createElement(d.X2, {
                    "aria-label": "Subscription Start Date"
                }, s.createElement(q, null, "Starts:"), s.createElement(j, null, " ", b(o), " ")), s.createElement(d.X2, {
                    "aria-label": "Subscription End Date"
                }, s.createElement(q, null, m ? "Expires" : "Next Payment", ":"), s.createElement(j, null, b(p), " ")), (m || a) && s.createElement("div", {
                    className: "mt-5",
                    "aria-label": "Subscription Gifted By"
                }, s.createElement(R, null, " ", !m && "This ".concat(a.period.slice(0, 1).toUpperCase() + a.period.slice(1)), " Gifted By", " "), s.createElement(d.$1, {
                    icon: E.Cl,
                    size: "2x",
                    className: "pr-3"
                }), " ", s.createElement(X, {
                    to: "/home/user/".concat(u || a.giftedBy),
                    "aria-label": "Open User Page"
                }, g || a.giftedByDisplayName))))))
            };
            var k = (0, l.Z)(d.JX, {
                    target: "e1qexzd28"
                })({
                    name: "16lfucs",
                    styles: "width:160px;height:80px;justify-content:center;align-content:center;text-align:center;border-style:solid;border-width:3px;border-radius:8px;background-repeat:no-repeat;background-position:center;border-image:initial;&.Oculus{background-color:#676767;border-color:#373737;background-size:100%;img{opacity:0.1;}}&.Steam{background-color:rgb(24, 27, 31);border-color:#565656;background-size:100%;}&.Admin{background-color:#07242b;border-color:#053c48;}svg{color:yellow;}"
                }),
                N = (0, l.Z)(d.JX, {
                    target: "e1qexzd27"
                })({
                    name: "uka2i8",
                    styles: "width:320px;justify-content:flex-end;border:white"
                }),
                C = (0, l.Z)(d.oI, {
                    target: "e1qexzd26"
                })({
                    name: "w5mjfy",
                    styles: "&.Steam{background-color:#red;background-image:linear-gradient(50deg, #184053, #1b2838, #000000f5);}&.Oculus{background-color:#cdcdcd;border-color:#a9a9a9;}&.Admin{padding:10px 0px 0px 0px;align-items:center;}"
                }),
                G = (0, l.Z)("img", {
                    target: "e1qexzd25"
                })({
                    name: "1k4htmn",
                    styles: "&.Steam{margin-left:20px;}&.Oculus{margin-top:0.7rem;margin-bottom:10px;width:78%;text-align:center;margin-left:20px;}&.Admin{width:58%;}"
                }),
                q = (0, l.Z)(d.JX, {
                    target: "e1qexzd24"
                })({
                    name: "pfx2m",
                    styles: "width:50%;font-weight:bold"
                }),
                j = (0, l.Z)(d.JX, {
                    target: "e1qexzd23"
                })({
                    name: "1wi8p6s",
                    styles: "text-align:right;width:50%"
                }),
                P = (0, l.Z)("div", {
                    target: "e1qexzd22"
                })({
                    name: "ah67qu",
                    styles: "display:flex;flex-direction:column;padding:0.9rem;border-style:solid;background-color:rgb(24, 27, 31);border-color:rgb(24, 27, 31);border-width:0px 3px 3px;border-radius:0px 0px 8px 8px;color:#737372"
                }),
                R = (0, l.Z)("h4", {
                    target: "e1qexzd21"
                })({
                    name: "15ypxw7",
                    styles: "font-size:1.2em;margin-top:0.25rem;word-break:break-all;text-align:left;margin-bottom:0.25rem;color:#737372"
                }),
                X = (0, l.Z)(y.rU, {
                    target: "e1qexzd20"
                })({
                    name: "1msic18",
                    styles: "padding:0;margin:0;color:#095d6a;outline:none!important;font-size:1.2em;&:hover{color:#095d6a;text-decoration:underline;}"
                });
            const D = function(e) {
                var t, a = e.userId,
                    l = (0, m.Vl)({
                        userId: a
                    }).data,
                    o = s.useState(0),
                    p = (0, r.Z)(o, 2),
                    u = p[0],
                    b = p[1],
                    h = l ? l.filter((function(e) {
                        return e.isGift
                    })) : [],
                    E = l ? l.filter((function(e) {
                        return !e.isGift
                    })) : [],
                    y = [].concat((0, n.Z)(h), (0, n.Z)(E)),
                    w = (null == E ? void 0 : E.length) > 0,
                    v = (null == h ? void 0 : h.length) > 0,
                    z = u < (null == y ? void 0 : y.length) - 1,
                    S = u > 0,
                    k = !(null !== (t = y[u]) && void 0 !== t && t.isGift);
                return s.createElement("div", null, s.createElement(d.$4, null, "Subscriptions"), s.createElement(V, {
                    id: "SubscriptionGrid"
                }, s.createElement(F, {
                    className: "pr-0 mb-2"
                }, s.createElement(_, null, s.createElement("picture", null, s.createElement("source", {
                    srcSet: "".concat(x(), ", ").concat(f(), " 2x")
                }), s.createElement("img", {
                    src: x(),
                    alt: "VRChat Plus Logo"
                })))), 0 === y.length && s.createElement(s.Fragment, null, s.createElement(F, {
                    className: "pt-3 pr-0"
                }, s.createElement(_, {
                    className: "pt-3"
                }, s.createElement("p", {
                    "aria-label": "No Subscriptions"
                }, "No VRC+ subscriptions here, perhaps consider", " ", s.createElement("a", {
                    href: "https://hello.vrchat.com/vrchatplus",
                    target: "_blank",
                    rel: "noreferrer"
                }, "subscribing!"))))), y.length > 0 && s.createElement(s.Fragment, null, v && s.createElement(F, {
                    className: "pt-2 pr-0 pb-3",
                    "aria-label": "Gifted Subs Total"
                }, s.createElement(_, null, "🎉 You have ", null == h ? void 0 : h.length, " Gift", (null == h ? void 0 : h.length) > 1 && "s", "! 🎉")), s.createElement(F, {
                    className: "pt-4 pr-0"
                }, s.createElement(A, {
                    xs: "4"
                }, S && s.createElement(d.zx, {
                    "aria-label": "Previous Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return b(u - 1)
                    }
                }, " ", s.createElement(d.$1, {
                    icon: c.A3
                }), " ")), s.createElement(O, {
                    xs: "4"
                }, s.createElement($, {
                    className: z ? "" : "extra-padding"
                }, S && s.createElement(Z, {
                    subscription: y[u - 1],
                    tiny: !0
                })), s.createElement(L, {
                    className: y.length > 1 ? "layer" : ""
                }, s.createElement(Z, {
                    subscription: y[u],
                    tiny: !0
                })), s.createElement(I, {
                    className: S ? "" : "extra-padding"
                }, z && s.createElement(Z, {
                    subscription: y[u + 1],
                    tiny: !0
                }))), s.createElement(B, {
                    xs: "4"
                }, z && s.createElement(d.zx, {
                    "aria-label": "Next Subscription",
                    neutral: !0,
                    size: "lg",
                    onClick: function() {
                        return b(u + 1)
                    }
                }, " ", s.createElement(d.$1, {
                    icon: i._t
                }), " "))), s.createElement(F, {
                    className: "pt-4 pr-0"
                }, s.createElement(_, null, s.createElement(Z, {
                    subscription: y[u],
                    initialGift: h.length > 0 ? h[0] : null
                }))), v && w && k && s.createElement(F, null, s.createElement(_, {
                    className: "pt-3"
                }, s.createElement("p", null, "Payments to your recurring VRC+ subscription will remain paused until all your gifts expire. So sit back, relax and enjoy your gifted subs! 🥳")))), s.createElement(F, {
                    className: "pt-2 pr-0"
                }, s.createElement(_, null, s.createElement("img", {
                    src: g(),
                    alt: "VRCat smiling at the viewer"
                })))))
            };
            var V = (0, l.Z)(o.Z, {
                    target: "e1ia4l738"
                })({
                    name: "koglwr",
                    styles: "margin-top:10px;margin-bottom:30px"
                }),
                A = (0, l.Z)(p.Z, {
                    target: "e1ia4l737"
                })({
                    name: "1idgyd0",
                    styles: "display:flex;justify-content:right;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                B = (0, l.Z)(p.Z, {
                    target: "e1ia4l736"
                })({
                    name: "o0fiqe",
                    styles: "display:flex;justify-content:left;align-text:center;z-index:2;button{padding:0px 10px 0px 10px;}@media (min-width: 300px) and (orientation: portrait){justify-content:center;}"
                }),
                L = (0, l.Z)("div", {
                    target: "e1ia4l735"
                })({
                    name: "e0vf0c",
                    styles: "z-index:3;box-shadow:0px 20px 20px black;margin-bottom:20px;&.layer{position:absolute;top:-24px;}"
                }),
                $ = (0, l.Z)("div", {
                    target: "e1ia4l734"
                })({
                    name: "zy9on0",
                    styles: "z-index:1;opacity:0.4;margin:10px 20px 0px 0px;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-right:180px;}"
                }),
                I = (0, l.Z)("div", {
                    target: "e1ia4l733"
                })({
                    name: "yp97xx",
                    styles: "z-index:1;margin:10px 0px 0px 20px;opacity:0.2;@media (min-width: 300px) and (orientation: portrait){opacity:0;}&.extra-padding{margin-left:180px;}"
                }),
                O = (0, l.Z)(p.Z, {
                    target: "e1ia4l732"
                })({
                    name: "9otfrm",
                    styles: "justify-content:center;display:flex;position:relative"
                }),
                _ = (0, l.Z)(p.Z, {
                    target: "e1ia4l731"
                })({
                    name: "t6kner",
                    styles: "justify-content:center;display:flex;padding-right:0px;p{width:300px;color:gray;}"
                }),
                F = (0, l.Z)(o.Z, {
                    target: "e1ia4l730"
                })({
                    name: "v4gdnl",
                    styles: "padding-right:0px"
                })
        },
        79967: (e, t, a) => {
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
        3905: (e, t, a) => {
            e.exports = {
                srcSet: a.p + "b4fc3db1d7b14657-305w.png 305w",
                images: [{
                    path: a.p + "b4fc3db1d7b14657-305w.png",
                    width: 305,
                    height: 120
                }],
                src: a.p + "b4fc3db1d7b14657-305w.png",
                toString: function() {
                    return a.p + "b4fc3db1d7b14657-305w.png"
                },
                width: 305,
                height: 120
            }
        }
    }
]);
//# sourceMappingURL=a00551a96674432dd7c8e8d2e7397bcd6b6950642a7ff6e7006ef66323c58e3c.js.map