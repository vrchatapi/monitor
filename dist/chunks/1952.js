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
                i = n(67294),
                o = n(89250),
                c = n(14411),
                s = n(72998),
                m = n(46320),
                d = n(6655),
                f = n(64358),
                p = n(50249),
                u = n(22202),
                w = i.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(8304)]).then(n.bind(n, 15558))
                })),
                E = i.lazy((function() {
                    return Promise.all([n.e(3261), n.e(2520), n.e(4896), n.e(2042), n.e(7161)]).then(n.bind(n, 46123))
                })),
                h = i.lazy((function() {
                    return Promise.all([n.e(3261), n.e(2520), n.e(2042), n.e(1515)]).then(n.bind(n, 95146))
                })),
                b = i.lazy((function() {
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
                    t = e.data,
                    n = void 0 === t ? [] : t,
                    y = e.isLoading,
                    g = (0, d.En)(),
                    W = g.data,
                    v = void 0 === W ? k : W,
                    x = v.economyOnline,
                    S = v.plannedOfflineWindowStart,
                    M = v.plannedOfflineWindowEnd,
                    z = v.offlineReason,
                    C = g.isFetching,
                    F = g.isError,
                    O = g.error,
                    D = x && !F && (0, f.dj)(S),
                    L = !x && !F,
                    N = i.useMemo((function() {
                        return {
                            isPlannedMaintenanceSoon: D,
                            isEconomyOffline: L,
                            plannedOfflineWindowStart: S,
                            plannedOfflineWindowEnd: M,
                            offlineReason: z,
                            isTiliaStatusLoading: C,
                            isTiliaStatusError: F,
                            tiliaStatusError: O
                        }
                    }), [D, L, S, M, z, C, F, O]),
                    P = (null == n || n.includes("permission-creator-preview"), y);
                return i.createElement(c.JX, {
                    className: "pb-5"
                }, i.createElement(c.qX, {
                    iconColor: "#1FD1ED",
                    icon: r.sq,
                    type: "custom",
                    color: "#28434B",
                    barColor: "#1FD1ED",
                    className: "xs:tw-hidden tw-flex-row"
                }, "For the best experience, please view this page on a desktop or tablet."), i.createElement(c.$4, null, "Marketplace"), P && i.createElement(i.Fragment, null, i.createElement(c.l_, null), i.createElement(c.UU, {
                    height: "480px",
                    radius: "8"
                })), !P && i.createElement("div", {
                    className: "tw-@container/marketplaceContainer"
                }, i.createElement("div", {
                    className: "tw-grid tw-gap-x-0 tw-gap-y-3 tw-grid-cols-1 @[990px]/marketplaceContainer:tw-grid-cols-3 tw-mb-4 tw-items-center"
                }, i.createElement("h2", null, "Marketplace"), i.createElement("div", {
                    className: "tw-flex-nowrap"
                }, i.createElement(s.Z, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: p.Z,
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
                }))), i.createElement(i.Suspense, {
                    fallback: i.createElement(c.UU, {
                        height: "480px",
                        radius: "8"
                    })
                }, i.createElement(o.Z5, null, i.createElement(o.AW, {
                    path: "/",
                    element: i.createElement(m.Z, {
                        to: "welcome"
                    })
                }), i.createElement(o.AW, {
                    path: "welcome",
                    element: i.createElement(w, null)
                }), i.createElement(o.AW, {
                    path: "wallet/*",
                    element: i.createElement(E, {
                        marketPlaceStatus: N
                    })
                }), i.createElement(o.AW, {
                    path: "storefront/*",
                    element: i.createElement(h, {
                        marketPlaceStatus: N
                    })
                }), i.createElement(o.AW, {
                    path: "storefront/payout",
                    element: i.createElement(b, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=70028999226354ac29a4d24f8a9ee756ed408e27e8b1227f506411a18bd386b2.js.map