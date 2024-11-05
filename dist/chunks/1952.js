"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1952], {
        71842: (e, t) => {
            var n = "shop",
                l = ["store-alt"],
                a = "f54f",
                c = "M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, l, a, c]
            }, t.Yy = t.DF
        },
        45189: (e, t) => {
            var n = "wallet",
                l = [],
                a = "f555",
                c = "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, l, a, c]
            }, t.X5 = t.DF
        },
        81952: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => d
            });
            var l = n(71842),
                a = n(45189),
                c = n(67294),
                r = n(89250),
                o = n(34226),
                m = n(72998),
                i = n(46320),
                s = n(50249),
                u = n(22202),
                p = c.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(889)]).then(n.bind(n, 15558))
                })),
                E = c.lazy((function() {
                    return Promise.all([n.e(3261), n.e(2595), n.e(4896), n.e(6394), n.e(5142)]).then(n.bind(n, 49046))
                })),
                f = c.lazy((function() {
                    return n.e(4376).then(n.bind(n, 46478))
                })),
                h = c.lazy((function() {
                    return n.e(4061).then(n.bind(n, 14061))
                }));
            const d = function() {
                var e = (0, u.q7)(),
                    t = e.data,
                    n = void 0 === t ? [] : t,
                    d = e.isLoading,
                    b = null == n ? void 0 : n.includes("permission-creator-preview"),
                    w = d;
                return c.createElement(o.JX, {
                    className: "pb-5"
                }, c.createElement(o.$4, null, "Marketplace"), c.createElement("h2", null, "Marketplace"), w && c.createElement(c.Fragment, null, c.createElement(o.l_, null), c.createElement(o.UU, {
                    height: "480px",
                    radius: "8"
                })), !w && c.createElement(c.Fragment, null, c.createElement(m.Z, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: s.Z,
                        condition: !0
                    }, {
                        name: "Wallet",
                        to: "wallet",
                        icon: a.X5,
                        condition: !0
                    }, {
                        name: "Storefront",
                        to: "storefront",
                        icon: l.Yy,
                        condition: b
                    }]
                }), c.createElement(c.Suspense, {
                    fallback: c.createElement(o.UU, {
                        height: "480px",
                        radius: "8"
                    })
                }, c.createElement(r.Z5, null, c.createElement(r.AW, {
                    path: "/",
                    element: c.createElement(i.Z, {
                        to: "welcome"
                    })
                }), c.createElement(r.AW, {
                    path: "welcome",
                    element: c.createElement(p, null)
                }), c.createElement(r.AW, {
                    path: "wallet/*",
                    element: c.createElement(E, null)
                }), c.createElement(r.AW, {
                    path: "storefront/*",
                    element: b ? c.createElement(f, null) : c.createElement(i.Z, {
                        to: "/"
                    })
                }), c.createElement(r.AW, {
                    path: "storefront/payout",
                    element: c.createElement(h, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=1a391cc23affc4c6bef3ca93492da6b1c59fdc11bedee416919948e96603d591.js.map