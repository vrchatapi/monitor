"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1952], {
        71842: (e, t) => {
            var l = "shop",
                a = ["store-alt"],
                n = "f54f",
                c = "M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z";
            t.DF = {
                prefix: "fas",
                iconName: l,
                icon: [640, 512, a, n, c]
            }, t.Yy = t.DF
        },
        45189: (e, t) => {
            var l = "wallet",
                a = [],
                n = "f555",
                c = "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
            t.DF = {
                prefix: "fas",
                iconName: l,
                icon: [512, 512, a, n, c]
            }, t.X5 = t.DF
        },
        81952: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => f
            });
            var a = l(71842),
                n = l(45189),
                c = l(67294),
                r = l(89250),
                i = l(14411),
                m = l(72998),
                o = l(46320),
                s = l(50249),
                p = l(22202),
                u = c.lazy((function() {
                    return Promise.all([l.e(3261), l.e(8666), l.e(8304)]).then(l.bind(l, 15558))
                })),
                d = c.lazy((function() {
                    return Promise.all([l.e(3261), l.e(2520), l.e(4896), l.e(5187), l.e(7161)]).then(l.bind(l, 46123))
                })),
                E = c.lazy((function() {
                    return Promise.all([l.e(8504), l.e(3261), l.e(2520), l.e(5187), l.e(1515)]).then(l.bind(l, 95146))
                })),
                w = c.lazy((function() {
                    return l.e(4061).then(l.bind(l, 14061))
                }));
            const f = function() {
                var e = (0, p.q7)(),
                    t = e.data,
                    l = void 0 === t ? [] : t,
                    f = e.isLoading,
                    h = (null == l || l.includes("permission-creator-preview"), f);
                return c.createElement(i.JX, {
                    className: "pb-5"
                }, c.createElement(i.$4, null, "Marketplace"), h && c.createElement(c.Fragment, null, c.createElement(i.l_, null), c.createElement(i.UU, {
                    height: "480px",
                    radius: "8"
                })), !h && c.createElement("div", {
                    className: "tw-@container/marketplaceContainer"
                }, c.createElement("div", {
                    className: "tw-grid tw-gap-0 tw-grid-cols-1 @[990px]/marketplaceContainer:tw-grid-cols-3"
                }, c.createElement("div", {
                    className: ""
                }, c.createElement("h2", null, "Marketplace")), c.createElement("div", {
                    className: "tw-flex-nowrap"
                }, c.createElement(m.Z, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: s.Z,
                        condition: !0
                    }, {
                        name: "Wallet",
                        to: "wallet",
                        icon: n.X5,
                        condition: !0
                    }, {
                        name: "My Store",
                        to: "storefront",
                        icon: a.Yy,
                        condition: !0
                    }],
                    className: "tw-mb-3 tw-w-fit-content tw-flex-nowrap"
                }))), c.createElement(c.Suspense, {
                    fallback: c.createElement(i.UU, {
                        height: "480px",
                        radius: "8"
                    })
                }, c.createElement(r.Z5, null, c.createElement(r.AW, {
                    path: "/",
                    element: c.createElement(o.Z, {
                        to: "welcome"
                    })
                }), c.createElement(r.AW, {
                    path: "welcome",
                    element: c.createElement(u, null)
                }), c.createElement(r.AW, {
                    path: "wallet/*",
                    element: c.createElement(d, null)
                }), c.createElement(r.AW, {
                    path: "storefront/*",
                    element: c.createElement(E, null)
                }), c.createElement(r.AW, {
                    path: "storefront/payout",
                    element: c.createElement(w, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=1890d62f849de7501a8e708722f1e782757e1dab27ba7ed19f249d70dea18b97.js.map