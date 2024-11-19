"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5187], {
        35187: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var a = n(4965),
                r = n(65394),
                i = n(85020),
                c = n(67294),
                o = n(42138),
                l = "…",
                s = function(e, t) {
                    var n = t - e + 1;
                    return Array.from({
                        length: n
                    }, (function(t, n) {
                        return e + n
                    }))
                },
                u = n(86646),
                m = n(50048);
            const d = function(e) {
                var t = e.onPageChange,
                    n = e.totalCount,
                    a = void 0 === n ? 0 : n,
                    d = e.siblingCount,
                    v = void 0 === d ? 1 : d,
                    w = e.currentPage,
                    x = void 0 === w ? 1 : w,
                    b = e.pageSize,
                    k = void 0 === b ? 5 : b,
                    Z = e.className,
                    C = e.showCurrentPageOnly,
                    E = void 0 !== C && C,
                    y = function(e) {
                        var t = e.totalCount,
                            n = e.siblingCount,
                            a = void 0 === n ? 1 : n,
                            r = e.currentPage,
                            i = e.pageSize;
                        return (0, c.useMemo)((function() {
                            var e = Math.ceil(t / i);
                            if (a + 5 >= e) return s(1, e);
                            var n = Math.max(r - a, 1),
                                c = Math.min(r + a, e),
                                u = n > 2,
                                m = c < e - 2,
                                d = 1,
                                p = e;
                            if (!u && m) {
                                var g = s(1, 3 + 2 * a);
                                return [].concat((0, o.Z)(g), [l, e])
                            }
                            if (u && !m) {
                                var h = s(e - (3 + 2 * a) + 1, e);
                                return [d, l].concat((0, o.Z)(h))
                            }
                            if (u && u) {
                                var f = s(n, c);
                                return [d, l].concat((0, o.Z)(f), [l, p])
                            }
                        }), [r, i, a, t])
                    }({
                        currentPage: x,
                        totalCount: a,
                        siblingCount: v,
                        pageSize: k
                    });
                if ((0 === x || y.length < 2) && !1 === E) return null;
                var N = function(e) {
                        e.preventDefault(), t(x + 1)
                    },
                    P = function(e) {
                        e.preventDefault(), t(x - 1)
                    },
                    F = y[y.length - 1];
                return E ? c.createElement(p, {
                    className: Z
                }, c.createElement(m.ZP, {
                    className: "tw-bg-transparent tw-border-0 tw-text-white disabled:tw-text-placeholder-text",
                    disabled: 1 === x,
                    onClick: P
                }, c.createElement(u.Z, {
                    icon: i.A3
                })), c.createElement(f, {
                    className: "tw-cursor-auto",
                    selected: !0
                }, x), c.createElement(m.ZP, {
                    className: "tw-bg-transparent tw-border-0 tw-text-white disabled:tw-text-placeholder-text",
                    disabled: a < k,
                    onClick: N
                }, c.createElement(u.Z, {
                    icon: r._t
                }))) : c.createElement(p, {
                    className: Z
                }, c.createElement(g, {
                    className: "pagination-item",
                    disabled: 1 === x,
                    onClick: P
                }, c.createElement(u.Z, {
                    icon: i.A3
                })), y.map((function(e) {
                    return e === l ? c.createElement("span", {
                        className: "pagination-item dots"
                    }, "…") : c.createElement(f, {
                        className: "pagination-item",
                        key: e,
                        selected: e === x,
                        onClick: function() {
                            return t(e)
                        }
                    }, e)
                })), c.createElement(h, {
                    className: "pagination-item",
                    disabled: x === F,
                    onClick: N
                }, c.createElement(u.Z, {
                    icon: r._t
                })))
            };
            var p = (0, a.Z)("div", {
                    target: "e8kqkom3"
                })({
                    name: "7mvcto",
                    styles: "display:flex;flex-direction:row;align-items:center;gap:10px;width:100%;padding-bottom:1rem;justify-content:center"
                }),
                g = (0, a.Z)(m.ZP, {
                    target: "e8kqkom2"
                })({
                    name: "1uv76ym",
                    styles: "width:36px;height:36px;cursor:pointer"
                }),
                h = (0, a.Z)(m.ZP, {
                    target: "e8kqkom1"
                })({
                    name: "1uv76ym",
                    styles: "width:36px;height:36px;cursor:pointer"
                }),
                f = (0, a.Z)("span", {
                    target: "e8kqkom0"
                })("width:36px;max-height:36px;padding:6px 0;cursor:pointer;text-align:center;", (function(e) {
                    return e.selected ? "color: #FFFFFF;" : "color: #1FD1ED;"
                }), ";")
        }
    }
]);
//# sourceMappingURL=0db9a8a40c4fe64b6c7d8deea3500738feea680bb19e23707abaa37f3e1c869a.js.map