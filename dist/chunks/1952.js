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
                default: () => h
            });
            var a = l(71842),
                n = l(45189),
                c = l(82414),
                r = l(67294),
                o = l(89250),
                i = l(14411),
                m = l(72998),
                s = l(46320),
                p = l(50249),
                u = l(22202),
                w = r.lazy((function() {
                    return Promise.all([l.e(3261), l.e(8666), l.e(8304)]).then(l.bind(l, 15558))
                })),
                d = r.lazy((function() {
                    return Promise.all([l.e(3261), l.e(2520), l.e(4896), l.e(5187), l.e(7161)]).then(l.bind(l, 46123))
                })),
                E = r.lazy((function() {
                    return Promise.all([l.e(5056), l.e(3261), l.e(2520), l.e(5187), l.e(1515)]).then(l.bind(l, 95146))
                })),
                f = r.lazy((function() {
                    return l.e(4061).then(l.bind(l, 14061))
                }));
            const h = function() {
                var e = (0, u.q7)(),
                    t = e.data,
                    l = void 0 === t ? [] : t,
                    h = e.isLoading,
                    b = (null == l || l.includes("permission-creator-preview"), h);
                return r.createElement(i.JX, {
                    className: "pb-5"
                }, r.createElement(i.qX, {
                    iconColor: "#1FD1ED",
                    icon: c.sq,
                    type: "custom",
                    color: "#28434B",
                    barColor: "#1FD1ED",
                    className: "xs:tw-hidden tw-flex-row"
                }, "For the best experience, please view this page on a desktop or tablet."), r.createElement(i.$4, null, "Marketplace"), b && r.createElement(r.Fragment, null, r.createElement(i.l_, null), r.createElement(i.UU, {
                    height: "480px",
                    radius: "8"
                })), !b && r.createElement("div", {
                    className: "tw-@container/marketplaceContainer"
                }, r.createElement("div", {
                    className: "tw-grid tw-gap-x-0 tw-gap-y-3 tw-grid-cols-1 @[990px]/marketplaceContainer:tw-grid-cols-3 tw-mb-4 tw-items-center"
                }, r.createElement("h2", null, "Marketplace"), r.createElement("div", {
                    className: "tw-flex-nowrap"
                }, r.createElement(m.Z, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: p.Z,
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
                    className: "tw-w-fit-content tw-flex-nowrap"
                }))), r.createElement(r.Suspense, {
                    fallback: r.createElement(i.UU, {
                        height: "480px",
                        radius: "8"
                    })
                }, r.createElement(o.Z5, null, r.createElement(o.AW, {
                    path: "/",
                    element: r.createElement(s.Z, {
                        to: "welcome"
                    })
                }), r.createElement(o.AW, {
                    path: "welcome",
                    element: r.createElement(w, null)
                }), r.createElement(o.AW, {
                    path: "wallet/*",
                    element: r.createElement(d, null)
                }), r.createElement(o.AW, {
                    path: "storefront/*",
                    element: r.createElement(E, null)
                }), r.createElement(o.AW, {
                    path: "storefront/payout",
                    element: r.createElement(f, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=aed666feb10b2bb0a8c3dae8214140c0c41132c808fbc4a1fac2e128c99bf203.js.map