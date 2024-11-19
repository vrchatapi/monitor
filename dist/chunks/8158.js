"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8158], {
        78158: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(4965),
                o = r(2909),
                i = r(46357),
                a = r(35117),
                l = r(67294),
                c = r(74855),
                s = r(14411),
                p = r(21464),
                m = r(12752),
                d = r(63221);
            var u = "https://assets.vrchat.com/www/groups/default_banner.png",
                g = "https://assets.vrchat.com/www/groups/default_icon.png";
            const h = function(e) {
                var t = e.group,
                    r = e.showCanonicalLink,
                    n = void 0 === r || r,
                    c = ((0, m.pc)(), "".concat(t.shortCode, ".").concat(t.discriminator)),
                    h = "https://vrc.group/".concat(c),
                    _ = t.membershipStatus === d.oq.USER_BLOCKED;
                return l.createElement(v, null, l.createElement(w, {
                    src: t.bannerUrl || u,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = u
                    },
                    isGroupBlocked: _
                }), l.createElement(f, null, l.createElement(k, {
                    src: t.iconUrl || g,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = g
                    },
                    isGroupBlocked: _
                }, _ && l.createElement(x, {
                    icon: a.faBan,
                    size: "2x",
                    color: "#a8342e",
                    title: "You have blocked invite requests from this group!"
                })), l.createElement(y, null, l.createElement(E, {
                    className: "justify-content-between flex-nowrap"
                }, l.createElement("h2", {
                    title: t.name
                }, t.name)), l.createElement(E, null, l.createElement(B, {
                    title: "".concat(t.onlineMemberCount, " online member").concat(1 === t.onlineMemberCount ? "" : "s")
                }, l.createElement(b, {
                    role: "note",
                    statusColor: p.xY[t.onlineMemberCount > 0 ? "active" : "offline"].color,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.onlineMemberCount), l.createElement(B, {
                    title: "".concat(t.memberCount, " member").concat(1 === t.memberCount ? "" : "s")
                }, l.createElement(s.$1, {
                    icon: i.FV,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.memberCount), l.createElement(j, null, l.createElement(C, {
                    href: n ? h : void 0
                }, c), n && l.createElement(Z, {
                    text: h
                }, l.createElement("button", {
                    type: "button",
                    title: "Copy Link"
                }, l.createElement(s.$1, {
                    icon: o.kZ
                })))), !1))))
            };
            var x = (0, n.Z)(s.$1, {
                    target: "e1kortvj11"
                })({
                    name: "w1atjl",
                    styles: "width:100%;height:100%"
                }),
                v = (0, n.Z)("div", {
                    target: "e1kortvj10"
                })({
                    name: "yeyx9p",
                    styles: "position:relative;width:100%;aspect-ratio:6/1;margin-bottom:80px;text-align:left"
                }),
                w = (0, n.Z)("img", {
                    target: "e1kortvj9"
                })("width:100%;aspect-ratio:6/1;object-fit:cover;border-radius:8px;background:#13171c;filter:", (function(e) {
                    return e.isGroupBlocked ? "grayscale(100%)" : "none"
                }), ";"),
                f = (0, n.Z)("div", {
                    target: "e1kortvj8"
                })({
                    name: "dx2lvb",
                    styles: "position:absolute;display:flex;flex-direction:row;justify-content:left;max-height:0;width:100%;bottom:0"
                }),
                b = (0, n.Z)("div", {
                    target: "e1kortvj7"
                })("width:15px;height:15px;border-radius:100%;background-color:", (function(e) {
                    return e.statusColor
                }), ";margin-right:10px;"),
                k = (0, n.Z)("div", {
                    target: "e1kortvj6"
                })("display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:80px;height:80px;margin-top:-40px;margin-left:5px;margin-right:5px;border-radius:50%;border:3px solid #1a2026;background:#13171c url(", (function(e) {
                    return e.src
                }), ") no-repeat center center;object-fit:cover;background-size:cover;@media (min-width: 320px) and (max-width: 767px){width:calc(80px + (150 - 80) / (768 - 320) * (100vw - 320px));height:calc(80px + (150 - 80) / (768 - 320) * (100vw - 320px));margin-top:calc(-40px - (75 - 40) / (768 - 320) * (100vw - 320px));margin-left:calc(5px + (45 - 5) / (768 - 320) * (100vw - 320px));border-width:calc(3px + (8 - 3) / (768 - 320) * (100vw - 320px));}@media (min-width: 768px){width:150px;height:150px;margin-top:-75px;margin-left:45px;border-width:8px;}"),
                y = (0, n.Z)("div", {
                    target: "e1kortvj5"
                })({
                    name: "34mv6a",
                    styles: "display:flex;flex-direction:column;bottom:-80px;min-width:0;min-height:80px;h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3;margin:0;}"
                }),
                E = (0, n.Z)("div", {
                    target: "e1kortvj4"
                })({
                    name: "1no6rdg",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap"
                }),
                j = (0, n.Z)("div", {
                    target: "e1kortvj3"
                })({
                    name: "lie7be",
                    styles: "flex:0 1 auto;white-space:nowrap"
                }),
                C = (0, n.Z)("a", {
                    target: "e1kortvj2"
                })({
                    name: "26gk1l",
                    styles: "font-size:15px;color:inherit"
                }),
                Z = (0, n.Z)(c.CopyToClipboard, {
                    target: "e1kortvj1"
                })({
                    name: "1nt6xn8",
                    styles: "display:inline-block;border:none;background:transparent;color:inherit;padding:0;opacity:0.6;margin-left:0.5em;&:hover{opacity:1;}&:active{opacity:0.8;}"
                }),
                B = (0, n.Z)("div", {
                    target: "e1kortvj0"
                })({
                    name: "w6vqod",
                    styles: "display:flex;flex-direction:row;align-items:center;margin-right:1em"
                })
        }
    }
]);
//# sourceMappingURL=cc39ad9daf800291d335dcb9978685f769de0c15978b6002227c7e1c50e543e0.js.map