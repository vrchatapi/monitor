"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [100], {
        32085(e, t) {
            var n = "shop",
                a = ["store-alt"],
                l = "f54f",
                r = "M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, a, l, r]
            }, t.q6 = t.mw
        },
        29788(e, t) {
            var n = "wallet",
                a = [],
                l = "f555",
                r = "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, a, l, r]
            }, t.BA = t.mw
        },
        100(e, t, n) {
            n.r(t), n.d(t, {
                default: () => y
            });
            var a = n(32085),
                l = n(29788),
                r = n(6913),
                i = n(96540),
                c = n(47767),
                o = n(71661),
                s = n(75174),
                m = n(9663),
                f = n(5361),
                d = n(91069),
                p = n(39848),
                u = n(13951),
                w = i.lazy(function() {
                    return n.e(3189).then(n.bind(n, 73189))
                }),
                E = i.lazy(function() {
                    return Promise.all([n.e(1938), n.e(6004), n.e(3856), n.e(5190)]).then(n.bind(n, 87118))
                }),
                h = i.lazy(function() {
                    return Promise.all([n.e(1938), n.e(3856), n.e(8229)]).then(n.bind(n, 72982))
                }),
                b = i.lazy(function() {
                    return n.e(1976).then(n.bind(n, 21976))
                }),
                k = {
                    economyOnline: !1,
                    plannedOfflineWindowStart: null,
                    plannedOfflineWindowEnd: null,
                    offlineReason: null
                };
            const y = function() {
                var e = (0, u.w_)(),
                    t = e.data,
                    n = void 0 === t ? [] : t,
                    y = e.isLoading,
                    S = n.includes("permission-can-sell-products"),
                    g = (0, f.KT)(),
                    v = g.data,
                    x = void 0 === v ? k : v,
                    M = x.economyOnline,
                    z = x.plannedOfflineWindowStart,
                    C = x.plannedOfflineWindowEnd,
                    O = x.offlineReason,
                    L = g.isFetching,
                    N = g.isError,
                    W = g.error,
                    q = M && !N && (0, d.MU)(z),
                    F = !M && !N,
                    P = i.useMemo(function() {
                        return {
                            isPlannedMaintenanceSoon: q,
                            isEconomyOffline: F,
                            plannedOfflineWindowStart: z,
                            plannedOfflineWindowEnd: C,
                            offlineReason: O,
                            isTiliaStatusLoading: L,
                            isTiliaStatusError: N,
                            tiliaStatusError: W
                        }
                    }, [q, F, z, C, O, L, N, W]),
                    A = y;
                return i.createElement(o.fv, {
                    className: "pb-5"
                }, i.createElement(o.$T, {
                    iconColor: "#1FD1ED",
                    icon: r.iW,
                    type: "custom",
                    color: "#28434B",
                    barColor: "#1FD1ED",
                    className: "xs:tw-hidden tw-flex-row"
                }, "For the best experience, please view this page on a desktop or tablet."), i.createElement(o.Qc, null, "Marketplace"), A && i.createElement(i.Fragment, null, i.createElement(o.pS, null), i.createElement(o.fy, {
                    height: "480px",
                    radius: "8"
                })), !A && i.createElement("div", {
                    className: "tw-@container/marketplaceContainer"
                }, i.createElement("div", {
                    className: "tw-grid tw-gap-x-0 tw-gap-y-3 tw-grid-cols-1 @[990px]/marketplaceContainer:tw-grid-cols-3 tw-mb-4 tw-items-center"
                }, i.createElement("h2", null, "Marketplace"), i.createElement("div", {
                    className: "tw-flex-nowrap"
                }, i.createElement(s.A, {
                    tabs: [{
                        name: "Marketplace",
                        to: "welcome",
                        icon: p.default,
                        condition: !0
                    }, {
                        name: "Wallet",
                        to: "wallet",
                        icon: l.BA,
                        condition: !0
                    }, {
                        name: "My Store",
                        to: "storefront",
                        icon: a.q6,
                        condition: !0
                    }],
                    className: "tw-w-fit-content tw-flex-nowrap"
                }))), i.createElement(i.Suspense, {
                    fallback: i.createElement(o.fy, {
                        height: "480px",
                        radius: "8"
                    })
                }, i.createElement(c.BV, null, i.createElement(c.qh, {
                    path: "/",
                    element: i.createElement(m.A, {
                        to: "welcome"
                    })
                }), i.createElement(c.qh, {
                    path: "welcome",
                    element: i.createElement(w, null)
                }), i.createElement(c.qh, {
                    path: "wallet/*",
                    element: i.createElement(E, {
                        marketPlaceStatus: P,
                        isSeller: S
                    })
                }), i.createElement(c.qh, {
                    path: "storefront/*",
                    element: i.createElement(h, {
                        marketPlaceStatus: P
                    })
                }), i.createElement(c.qh, {
                    path: "storefront/payout",
                    element: i.createElement(b, null)
                }), !1))))
            }
        }
    }
]);
//# sourceMappingURL=840aa5be69155910e862b01219f235860b8119a45578d5a538b7b6693c7e53e4.js.map