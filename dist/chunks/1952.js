"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1952], {
        71842: (e, t) => {
            var n = "shop",
                a = ["store-alt"],
                l = "f54f",
                r = "M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, a, l, r]
            }, t.Yy = t.DF
        },
        45189: (e, t) => {
            var n = "wallet",
                a = [],
                l = "f555",
                r = "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, a, l, r]
            }, t.X5 = t.DF
        },
        81952: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => y
            });
            var a = n(71842),
                l = n(45189),
                r = n(82414),
                o = n(67294),
                c = n(89250),
                i = n(37463),
                s = n(72998),
                m = n(46320),
                d = n(6655),
                f = n(64358),
                p = n(50249),
                u = n(22202),
                w = o.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(7511)]).then(n.bind(n, 77511))
                })),
                E = o.lazy((function() {
                    return Promise.all([n.e(3261), n.e(1946), n.e(4896), n.e(2042), n.e(5568)]).then(n.bind(n, 76676))
                })),
                h = o.lazy((function() {
                    return Promise.all([n.e(3261), n.e(1946), n.e(2042), n.e(7879)]).then(n.bind(n, 87965))
                })),
                b = o.lazy((function() {
                    return n.e(4061).then(n.bind(n, 14061))
                })),
                k = {
                    economyOnline: !1,
                    plannedOfflineWindowStart: null,
                    plannedOfflineWindowEnd: null,
                    offlineReason: null
                };
            const y = function() {
                var e = (0, u.q7)(),
                    t = (e.data, e.isLoading),
                    n = (0, d.En)(),
                    y = n.data,
                    g = void 0 === y ? k : y,
                    W = g.economyOnline,
                    x = g.plannedOfflineWindowStart,
                    S = g.plannedOfflineWindowEnd,
                    M = g.offlineReason,
                    v = n.isFetching,
                    z = n.isError,
                    C = n.error,
                    F = W && !z && (0, f.dj)(x),
                    O = !W && !z,
                    D = o.useMemo((function() {
                        return {
                            isPlannedMaintenanceSoon: F,
                            isEconomyOffline: O,
                            plannedOfflineWindowStart: x,
                            plannedOfflineWindowEnd: S,
                            offlineReason: M,
                            isTiliaStatusLoading: v,
                            isTiliaStatusError: z,
                            tiliaStatusError: C
                        }
                    }), [F, O, x, S, M, v, z, C]),
                    L = t;
                return o.createElement(i.JX, {
                    className: "pb-5"
                }, o.createElement(i.qX, {
                    iconColor: "#1FD1ED",
                    icon: r.sq,
                    type: "custom",
                    color: "#28434B",
                    barColor: "#1FD1ED",
                    className: "xs:tw-hidden tw-flex-row"
                }, "For the best experience, please view this page on a desktop or tablet."), o.createElement(i.$4, null, "Marketplace"), L && o.createElement(o.Fragment, null, o.createElement(i.l_, null), o.createElement(i.UU, {
                    height: "480px",
                    radius: "8"
                })), !L && o.createElement("div", {
                    className: "tw-@container/marketplaceContainer"
                }, o.createElement("div", {
                    className: "tw-grid tw-gap-x-0 tw-gap-y-3 tw-grid-cols-1 @[990px]/marketplaceContainer:tw-grid-cols-3 tw-mb-4 tw-items-center"
                }, o.createElement("h2", null, "Marketplace"), o.createElement("div", {
                    className: "tw-flex-nowrap"
                }, o.createElement(s.Z, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: p.default,
                        condition: !0
                    }, {
                        name: "Wallet",
                        to: "wallet",
                        icon: l.X5,
                        condition: !0
                    }, {
                        name: "My Store",
                        to: "storefront",
                        icon: a.Yy,
                        condition: !0
                    }],
                    className: "tw-w-fit-content tw-flex-nowrap"
                }))), o.createElement(o.Suspense, {
                    fallback: o.createElement(i.UU, {
                        height: "480px",
                        radius: "8"
                    })
                }, o.createElement(c.Z5, null, o.createElement(c.AW, {
                    path: "/",
                    element: o.createElement(m.Z, {
                        to: "welcome"
                    })
                }), o.createElement(c.AW, {
                    path: "welcome",
                    element: o.createElement(w, null)
                }), o.createElement(c.AW, {
                    path: "wallet/*",
                    element: o.createElement(E, {
                        marketPlaceStatus: D
                    })
                }), o.createElement(c.AW, {
                    path: "storefront/*",
                    element: o.createElement(h, {
                        marketPlaceStatus: D
                    })
                }), o.createElement(c.AW, {
                    path: "storefront/payout",
                    element: o.createElement(b, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=4aa2d826becee4f091ba502a35b2ea7e5532a6ae2ff5ab26050bc6653a9366e4.js.map