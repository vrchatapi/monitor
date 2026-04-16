"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4157], {
        92481: (e, a, t) => {
            var n = t(95603);
            a.DF = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, a.r$ = a.DF, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        50062: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => r
            });
            var n = t(54546),
                i = t(67294),
                c = t(80988),
                s = t(85533),
                o = t(9186),
                l = t(64509);
            const r = function(e) {
                var a, t = e.className,
                    r = (0, o.Z)(),
                    h = r.sortedLocations,
                    u = r.isLoading,
                    m = r.isError,
                    d = i.useState(5),
                    p = (0, n.Z)(d, 2),
                    f = p[0],
                    g = p[1],
                    w = null !== (a = null == h ? void 0 : h.slice(0, f)) && void 0 !== a ? a : [],
                    N = i.useMemo((function() {
                        return w.map((function(e) {
                            return i.createElement(l.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [w]);
                return u ? i.createElement(c.UU, {
                    width: "100%",
                    height: "200px"
                }) : m || 0 === w.length ? null : i.createElement(c.JX, {
                    className: t
                }, i.createElement(s.Z, null, "Friend Locations"), i.createElement("h4", {
                    className: "text-center"
                }, "Friend Locations"), w.length > 0 && i.createElement("div", {
                    className: "locations"
                }, N), f < h.length && i.createElement(c.zx, {
                    className: "w-100",
                    onClick: function() {
                        g(f + 5)
                    }
                }, "Show More Locations"))
            }
        }
    }
]);
//# sourceMappingURL=42d9daf1d5e6bd35a95004ae52fc5fe56c5c9bceb44a09f9993f44b3353602f6.js.map