"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3929], {
        63929: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => h
            });
            var n = i(15861),
                a = i(54546),
                s = i(76553),
                l = i(6811),
                c = i(64687),
                r = i.n(c),
                o = i(64258),
                u = i(46382),
                p = i(16869),
                d = i(45697),
                w = i.n(d),
                f = i(67294),
                v = i(32981),
                g = function(e) {
                    var t = e.onClose,
                        i = void 0 === t ? function() {} : t,
                        c = e.listing;
                    if (!c) return null;
                    var d = (0, v.I0)(),
                        w = (0, p.Ij)(),
                        g = (0, a.Z)(w, 2),
                        h = g[0],
                        m = g[1],
                        b = m.isLoading,
                        x = (m.isSuccess, m.isError, m.error, function() {
                            var e = (0, n.Z)(r().mark((function e() {
                                var t, n, a;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, h({
                                                listingId: c.id,
                                                active: !c.active
                                            }).unwrap();
                                        case 3:
                                            t = e.sent, d((0, o.d)({
                                                title: "Listing ".concat(t.listing.active ? "published" : "unpublished"),
                                                icon: l.f8,
                                                message: "".concat(c.displayName, " has been ").concat(t.listing.active ? "published" : "unpublished", "."),
                                                color: "success",
                                                timeout: 3e3
                                            })), i(), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), d((0, o.d)({
                                                title: "Failed to ".concat(c.active ? "unpublish" : "publish", " listing"),
                                                icon: s.eH,
                                                message: null !== (n = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Something went wrong",
                                                color: "danger",
                                                timeout: 9e3
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    return f.createElement("div", {
                        className: "tw-w-full tw-flex tw-flex-col tw-gap-6"
                    }, f.createElement("div", {
                        className: "tw-w-full"
                    }, !c.active && f.createElement("h4", {
                        className: "tw-text-lg"
                    }, "Publishing this listing will make it available for viewing and purchase, including in any selected store(s)."), c.active && f.createElement("h4", {
                        className: "tw-text-lg"
                    }, "If you move this listing to draft, users won’t be able to view or purchase it. You can republish it at any time. Existing purchases will remain unaffected.")), f.createElement("div", {
                        className: "tw-flex tw-flex-col xs:tw-flex-row tw-gap-3 tw-flex-1"
                    }, f.createElement(u.zx, {
                        type: "button",
                        neutral: !0,
                        onClick: i,
                        containerClasses: "tw-flex-1"
                    }, "Cancel"), f.createElement(u.zx, {
                        type: "button",
                        containerClasses: "tw-flex-1",
                        loading: b,
                        onClick: x
                    }, c.active ? "Move to Draft" : "Publish Listing")))
                };
            g.propTypes = {
                onClose: w().func,
                listing: w().object
            };
            const h = g
        }
    }
]);
//# sourceMappingURL=33ad027c53a2a6585444481a7962cc19f393eaa456162140d095ad963f3ee114.js.map