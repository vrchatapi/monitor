"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5170], {
        85170(e, t, l) {
            l.r(t), l.d(t, {
                default: () => N
            });
            var n = l(10467),
                a = l(82544),
                s = l(82628),
                r = l(34496),
                i = l(42217),
                c = l(54756),
                o = l.n(c),
                w = l(65950),
                u = l(71661),
                m = (l(13951), l(72784)),
                d = l(5556),
                f = l.n(d),
                p = l(96540),
                g = l(6376),
                v = l(7612),
                x = l(97087),
                h = (l(31069), function(e) {
                    var t = e.storeId,
                        l = e.className,
                        n = void 0 === l ? "" : l,
                        a = (0, x.rg)({
                            storeId: t,
                            managementPov: !0
                        }, {
                            skip: !t
                        }),
                        s = a.data,
                        r = a.isFetching,
                        i = a.isSuccess,
                        c = a.isError;
                    return r && (u.M2, v.z1), i ? p.createElement("div", {
                        className: "".concat(n)
                    }, p.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, null == s ? void 0 : s.displayName)) : c ? p.createElement("div", {
                        className: "".concat(n)
                    }, p.createElement("p", {
                        className: "tw-mb-0 tw-font-bold tw-text-link-highlight"
                    }, t)) : null
                });
            h.propTypes = {
                storeId: f().string.isRequired,
                className: f().string
            };
            const b = h;
            var E = function(e) {
                var t, l, c, d = e.listing,
                    f = e.onCancelCallback,
                    v = void 0 === f ? function() {} : f;
                if (!d) return null;
                var x = null == d ? void 0 : d.active,
                    h = (0, g.wA)(),
                    E = (0, m.Qy)(),
                    N = (0, a.A)(E, 2),
                    k = N[0],
                    C = N[1],
                    y = C.isLoading,
                    I = (C.isError, C.error, C.reset),
                    T = (null == d || null === (t = d.storeIds) || void 0 === t ? void 0 : t.length) > 0,
                    z = function() {
                        v(), I()
                    },
                    A = function() {
                        var e = (0, n.A)(o().mark(function e() {
                            var t, l;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, k({
                                            listingId: d.id
                                        }).unwrap();
                                    case 3:
                                        h((0, w.X)({
                                            title: "Listing deleted",
                                            icon: i.SG,
                                            message: "".concat(d.displayName, " has been deleted."),
                                            color: "success",
                                            timeout: 3e3
                                        })), z(), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), h((0, w.X)({
                                            title: "Failed to delete listing",
                                            icon: r.zp,
                                            message: null !== (t = null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== t ? t : "Something went wrong",
                                            color: "danger",
                                            timeout: 9e3
                                        })), e.abrupt("return");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 7]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return x ? p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, p.createElement(u.M2, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), p.createElement("h4", {
                    className: "tw-text-lg"
                }, "This listing is currently published. Please set it to draft before deleting.")), p.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, p.createElement(u.$n, {
                    type: "button",
                    onClick: z,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Close"))) : p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, p.createElement(u.M2, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), T && p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                }, p.createElement("p", {
                    className: "tw-mb-0"
                }, "This listing is available in the following ", (null == d || null === (l = d.storeIds) || void 0 === l ? void 0 : l.length) || 0, " ", 1 === (null == d || null === (c = d.storeIds) || void 0 === c ? void 0 : c.length) ? "store" : "stores", ":"), null == d ? void 0 : d.storeIds.map(function(e) {
                    return p.createElement(b, {
                        key: e,
                        storeId: e
                    })
                })), p.createElement("h4", {
                    className: "tw-text-lg"
                }, "Are you sure you want to delete? This cannot be undone.")), p.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, p.createElement(u.$n, {
                    type: "button",
                    onClick: z,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Cancel"), p.createElement(u.$n, {
                    type: "button",
                    onClick: A,
                    loading: y,
                    containerClasses: "tw-flex-1",
                    danger: !0
                }, "Delete")))
            };
            E.propTypes = {
                listing: f().object.isRequired,
                onCancelCallback: f().func
            };
            const N = E
        }
    }
]);
//# sourceMappingURL=f4c7b7cdf12db8409bf88d3a9b6b4bd29ae5cacbddd79d55d7e0919d06903da2.js.map