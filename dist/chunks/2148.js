"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2148], {
        66089(e, a, t) {
            var n = t(38495);
            a.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, a.O2 = a.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        20460(e, a, t) {
            t.r(a), t.d(a, {
                default: () => r
            });
            var n = t(82544),
                i = t(96540),
                c = t(15033),
                s = t(45662),
                o = t(48799),
                l = t(14982);
            const r = function(e) {
                var a, t = e.className,
                    r = (0, o.A)(),
                    h = r.sortedLocations,
                    m = r.isLoading,
                    u = r.isError,
                    d = i.useState(5),
                    f = (0, n.A)(d, 2),
                    p = f[0],
                    w = f[1],
                    g = null !== (a = null == h ? void 0 : h.slice(0, p)) && void 0 !== a ? a : [],
                    v = i.useMemo(function() {
                        return g.map(function(e) {
                            return i.createElement(l.A, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        })
                    }, [g]);
                return m ? i.createElement(c.fy, {
                    width: "100%",
                    height: "200px"
                }) : u || 0 === g.length ? null : i.createElement(c.fv, {
                    className: t
                }, i.createElement(s.A, null, "Friend Locations"), i.createElement("h4", {
                    className: "text-center"
                }, "Friend Locations"), g.length > 0 && i.createElement("div", {
                    className: "locations"
                }, v), p < h.length && i.createElement(c.$n, {
                    className: "w-100",
                    onClick: function() {
                        w(p + 5)
                    }
                }, "Show More Locations"))
            }
        }
    }
]);
//# sourceMappingURL=6dfa4de70de179cd784d3d890785f28a9548b76f26381d7ae349623d47d6e53d.js.map