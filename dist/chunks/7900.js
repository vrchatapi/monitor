"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7900], {
        67900(e, t, n) {
            n.r(t), n.d(t, {
                default: () => h
            });
            var i = n(10467),
                a = n(82544),
                s = n(34496),
                l = n(42217),
                c = n(54756),
                r = n.n(c),
                o = n(65950),
                u = n(71661),
                p = n(72784),
                w = n(5556),
                d = n.n(w),
                v = n(96540),
                f = n(6376),
                g = function(e) {
                    var t = e.onClose,
                        n = void 0 === t ? function() {} : t,
                        c = e.listing;
                    if (!c) return null;
                    var w = (0, f.wA)(),
                        d = (0, p.m8)(),
                        g = (0, a.A)(d, 2),
                        h = g[0],
                        m = g[1],
                        b = m.isLoading,
                        x = (m.isSuccess, m.isError, m.error, function() {
                            var e = (0, i.A)(r().mark(function e() {
                                var t, i, a;
                                return r().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h({
                                                listingId: c.id,
                                                active: !c.active
                                            }).unwrap();
                                        case 3:
                                            t = e.sent, w((0, o.X)({
                                                title: "Listing ".concat(t.listing.active ? "published" : "unpublished"),
                                                icon: l.SG,
                                                message: "".concat(c.displayName, " has been ").concat(t.listing.active ? "published" : "unpublished", "."),
                                                color: "success",
                                                timeout: 3e3
                                            })), n(), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), w((0, o.X)({
                                                title: "Failed to ".concat(c.active ? "unpublish" : "publish", " listing"),
                                                icon: s.zp,
                                                message: null !== (i = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== i ? i : "Something went wrong",
                                                color: "danger",
                                                timeout: 9e3
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 8]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    return v.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-gap-6"
                    }, v.createElement("div", {
                        className: "tw-w-full"
                    }, !c.active && v.createElement("h4", {
                        className: "tw-text-lg"
                    }, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)."), c.active && v.createElement("h4", {
                        className: "tw-text-lg"
                    }, "If you move this listing to draft, users won’t be able to view or purchase it. You can republish it at any time. Existing purchases will remain unaffected.")), v.createElement("div", {
                        className: "tw-flex tw-flex-col xs:tw-flex-row tw-gap-3 tw-flex-1"
                    }, v.createElement(u.$n, {
                        type: "button",
                        neutral: !0,
                        onClick: n,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), v.createElement(u.$n, {
                        type: "button",
                        containerClasses: "tw-flex-1",
                        loading: b,
                        onClick: x
                    }, c.active ? "Move to Draft" : "Publish Listing")))
                };
            g.propTypes = {
                onClose: d().func,
                listing: d().object
            };
            const h = g
        }
    }
]);
//# sourceMappingURL=e3d7298c139ac51c547b90e25798a55f93206430767732ed2faf84955d699bd9.js.map