"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4157], {
        92481: (e, a, t) => {
            var i = t(95603);
            a.DF = {
                prefix: i.prefix,
                iconName: i.iconName,
                icon: [i.width, i.height, i.aliases, i.unicode, i.svgPathData]
            }, a.r$ = a.DF, i.prefix, i.iconName, i.width, i.height, i.aliases, i.unicode, i.svgPathData, i.aliases
        },
        95603: (e, a) => {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var t = "user-group",
                i = [128101, "user-friends"],
                n = "f500",
                c = "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z";
            a.definition = {
                prefix: "fas",
                iconName: t,
                icon: [640, 512, i, n, c]
            }, a.faUserGroup = a.definition, a.prefix = "fas", a.iconName = t, a.width = 640, a.height = 512, a.ligatures = i, a.unicode = n, a.svgPathData = c, a.aliases = i
        },
        50062: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => r
            });
            var i = t(54546),
                n = t(67294),
                c = t(14411),
                s = t(85533),
                o = t(9186),
                l = t(59923);
            const r = function(e) {
                var a, t = e.className,
                    r = (0, o.Z)(),
                    u = r.sortedLocations,
                    h = r.isLoading,
                    d = r.isError,
                    m = n.useState(5),
                    f = (0, i.Z)(m, 2),
                    p = f[0],
                    g = f[1],
                    v = null !== (a = null == u ? void 0 : u.slice(0, p)) && void 0 !== a ? a : [],
                    N = n.useMemo((function() {
                        return v.map((function(e) {
                            return n.createElement(l.Z, {
                                key: "location-".concat(e.location),
                                className: "mb-4",
                                location: e
                            })
                        }))
                    }), [v]);
                return h ? n.createElement(c.UU, {
                    width: "100%",
                    height: "200px"
                }) : d || 0 === v.length ? null : n.createElement(c.JX, {
                    className: t
                }, n.createElement(s.Z, null, "Friend Locations"), n.createElement("h4", {
                    className: "text-center"
                }, "Friend Locations"), v.length > 0 && n.createElement("div", {
                    className: "locations"
                }, N), p < u.length && n.createElement(c.zx, {
                    className: "w-100",
                    onClick: function() {
                        g(p + 5)
                    }
                }, "Show More Locations"))
            }
        }
    }
]);
//# sourceMappingURL=04b862ebe29bbf18e8c066a2e79e1fcf5075a62dccb5417f8911aa69c4158f13.js.map