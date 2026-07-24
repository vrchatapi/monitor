"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6062], {
        6062(e, t, r) {
            r.d(t, {
                A: () => h
            });
            var n = r(70129),
                o = r(67256),
                i = r(39281),
                a = r(62672),
                l = r(96540),
                c = r(59399),
                s = r(71661),
                m = r(40223),
                p = r(78502),
                d = r(45616);
            var g = "https://assets.vrchat.com/www/groups/default_banner.png",
                u = "https://assets.vrchat.com/www/groups/default_icon.png";
            const h = function(e) {
                var t = e.group,
                    r = e.showCanonicalLink,
                    n = void 0 === r || r,
                    c = ((0, p.Om)(), "".concat(t.shortCode, ".").concat(t.discriminator)),
                    h = "https://vrc.group/".concat(c),
                    B = t.membershipStatus === d.Bp.USER_BLOCKED;
                return l.createElement(v, null, l.createElement(w, {
                    src: t.bannerUrl || g,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = g
                    },
                    isGroupBlocked: B
                }), l.createElement(f, null, l.createElement(k, {
                    src: t.iconUrl || u,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = u
                    },
                    isGroupBlocked: B
                }, B && l.createElement(x, {
                    icon: a.faBan,
                    size: "2x",
                    color: "#a8342e",
                    title: "You have blocked invite requests from this group!"
                })), l.createElement(y, null, l.createElement(E, {
                    className: "justify-content-between flex-nowrap"
                }, l.createElement("h2", {
                    title: t.name
                }, t.name)), l.createElement(E, null, l.createElement(M, {
                    title: "".concat(t.onlineMemberCount, " online member").concat(1 === t.onlineMemberCount ? "" : "s")
                }, l.createElement(b, {
                    role: "note",
                    statusColor: m.x4[t.onlineMemberCount > 0 ? "active" : "offline"].color,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.onlineMemberCount), l.createElement(M, {
                    title: "".concat(t.memberCount, " member").concat(1 === t.memberCount ? "" : "s")
                }, l.createElement(s.M2, {
                    icon: i.gd,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.memberCount), l.createElement(j, null, l.createElement(C, {
                    href: n ? h : void 0
                }, c), n && l.createElement(A, {
                    text: h
                }, l.createElement("button", {
                    type: "button",
                    title: "Copy Link"
                }, l.createElement(s.M2, {
                    icon: o.jP
                })))), !1))))
            };
            var x = (0, n.A)(s.M2, {
                    target: "e1kortvj11"
                })({
                    name: "w1atjl",
                    styles: "width:100%;height:100%"
                }),
                v = (0, n.A)("div", {
                    target: "e1kortvj10"
                })({
                    name: "yeyx9p",
                    styles: "position:relative;width:100%;aspect-ratio:6/1;margin-bottom:80px;text-align:left"
                }),
                w = (0, n.A)("img", {
                    target: "e1kortvj9"
                })("width:100%;aspect-ratio:6/1;object-fit:cover;border-radius:8px;background:#13171c;filter:", function(e) {
                    return e.isGroupBlocked ? "grayscale(100%)" : "none"
                }, ";"),
                f = (0, n.A)("div", {
                    target: "e1kortvj8"
                })({
                    name: "dx2lvb",
                    styles: "position:absolute;display:flex;flex-direction:row;justify-content:left;max-height:0;width:100%;bottom:0"
                }),
                b = (0, n.A)("div", {
                    target: "e1kortvj7"
                })("width:15px;height:15px;border-radius:100%;background-color:", function(e) {
                    return e.statusColor
                }, ";margin-right:10px;"),
                k = (0, n.A)("div", {
                    target: "e1kortvj6"
                })("display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:80px;height:80px;margin-top:-40px;margin-left:5px;margin-right:5px;border-radius:50%;border:3px solid #1a2026;background:#13171c url(", function(e) {
                    return e.src
                }, ") no-repeat center center;object-fit:cover;background-size:cover;@media (min-width: 320px) and (max-width: 767px){width:calc(80px + (150 - 80) / (768 - 320) * (100vw - 320px));height:calc(80px + (150 - 80) / (768 - 320) * (100vw - 320px));margin-top:calc(-40px - (75 - 40) / (768 - 320) * (100vw - 320px));margin-left:calc(5px + (45 - 5) / (768 - 320) * (100vw - 320px));border-width:calc(3px + (8 - 3) / (768 - 320) * (100vw - 320px));}@media (min-width: 768px){width:150px;height:150px;margin-top:-75px;margin-left:45px;border-width:8px;}"),
                y = (0, n.A)("div", {
                    target: "e1kortvj5"
                })({
                    name: "34mv6a",
                    styles: "display:flex;flex-direction:column;bottom:-80px;min-width:0;min-height:80px;h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3;margin:0;}"
                }),
                E = (0, n.A)("div", {
                    target: "e1kortvj4"
                })({
                    name: "1no6rdg",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap"
                }),
                j = (0, n.A)("div", {
                    target: "e1kortvj3"
                })({
                    name: "lie7be",
                    styles: "flex:0 1 auto;white-space:nowrap"
                }),
                C = (0, n.A)("a", {
                    target: "e1kortvj2"
                })({
                    name: "26gk1l",
                    styles: "font-size:15px;color:inherit"
                }),
                A = (0, n.A)(c.CopyToClipboard, {
                    target: "e1kortvj1"
                })({
                    name: "1nt6xn8",
                    styles: "display:inline-block;border:none;background:transparent;color:inherit;padding:0;opacity:0.6;margin-left:0.5em;&:hover{opacity:1;}&:active{opacity:0.8;}"
                }),
                M = (0, n.A)("div", {
                    target: "e1kortvj0"
                })({
                    name: "w6vqod",
                    styles: "display:flex;flex-direction:row;align-items:center;margin-right:1em"
                })
        }
    }
]);
//# sourceMappingURL=3e4dfc6ec4d92421c32425d70cb1f504ae2115274872581279a109855dc8ebea.js.map