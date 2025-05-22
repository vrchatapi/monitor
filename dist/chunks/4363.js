"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4363], {
        14363: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => N
            });
            var n = l(15861),
                a = l(54546),
                s = l(53359),
                r = l(76553),
                i = l(6811),
                c = l(64687),
                o = l.n(c),
                w = l(64258),
                m = l(37463),
                u = (l(22202), l(16869)),
                d = l(45697),
                f = l.n(d),
                p = l(67294),
                g = l(32981),
                v = l(92332),
                x = l(36183),
                h = (l(95896), function(e) {
                    var t = e.storeId,
                        l = e.className,
                        n = void 0 === l ? "" : l,
                        a = (0, x.md)({
                            storeId: t,
                            managementPov: !0
                        }, {
                            skip: !t
                        }),
                        s = a.data,
                        r = a.isFetching,
                        i = a.isSuccess,
                        c = a.isError;
                    return r && (m.$1, v.LM), i ? p.createElement("div", {
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
                var t = e.listing,
                    l = e.onCancelCallback,
                    c = void 0 === l ? function() {} : l;
                if (!t) return null;
                var d = null == t ? void 0 : t.active,
                    f = (0, g.I0)(),
                    v = (0, u.Cb)(),
                    x = (0, a.Z)(v, 2),
                    h = x[0],
                    E = x[1],
                    N = E.isLoading,
                    k = (E.isError, E.error, E.reset),
                    C = (null == t ? void 0 : t.storeIds.length) > 0,
                    y = function() {
                        c(), k()
                    },
                    I = function() {
                        var e = (0, n.Z)(o().mark((function e() {
                            var l, n;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, h({
                                            listingId: t.id
                                        }).unwrap();
                                    case 3:
                                        f((0, w.d)({
                                            title: "Listing deleted",
                                            icon: i.f8,
                                            message: "".concat(t.displayName, " has been deleted."),
                                            color: "success",
                                            timeout: 3e3
                                        })), y(), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), f((0, w.d)({
                                            title: "Failed to delete listing",
                                            icon: r.eH,
                                            message: null !== (l = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 9e3
                                        })), e.abrupt("return");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return d ? p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, p.createElement(m.$1, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), p.createElement("h4", {
                    className: "tw-text-lg"
                }, "This listing is currently published. Please set it to draft before deleting.")), p.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, p.createElement(m.zx, {
                    type: "button",
                    onClick: y,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Close"))) : p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-mt-4 tw-gap-8"
                }, p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-w-full"
                }, p.createElement(m.$1, {
                    icon: s.faTriangleExclamation,
                    size: "xl",
                    className: "tw-h-[72px] tw-mb-5"
                }), C && p.createElement("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-9"
                }, p.createElement("p", {
                    className: "tw-mb-0"
                }, "This listing is availalbe in the following ", (null == t ? void 0 : t.storeIds.length) || 0, " ", 1 === (null == t ? void 0 : t.storeIds.length) ? "store" : "stores", ":"), null == t ? void 0 : t.storeIds.map((function(e) {
                    return p.createElement(b, {
                        key: e,
                        storeId: e
                    })
                }))), p.createElement("h4", {
                    className: "tw-text-lg"
                }, "Are you sure you want to delete? This cannot be undone.")), p.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-3 tw-w-full"
                }, p.createElement(m.zx, {
                    type: "button",
                    onClick: y,
                    containerClasses: "tw-flex-1",
                    neutral: !0
                }, "Cancel"), p.createElement(m.zx, {
                    type: "button",
                    onClick: I,
                    loading: N,
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
//# sourceMappingURL=42af7b04632db81e2487892e3b22706b69ebde31b12cc4c08db22c0da8a5f298.js.map