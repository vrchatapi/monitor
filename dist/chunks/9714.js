"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9714], {
        81362: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(67294),
                o = r(53637),
                a = r(95305);
            const l = function(e) {
                var t = e.error,
                    r = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var l = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return n.createElement(o.Z, null, n.createElement(a.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, n.createElement("h2", null, "VRChat"), n.createElement("p", null, "An error has occurred. To continue: "), n.createElement("p", null, "Press the F5 to refresh the website, or "), n.createElement("p", null, "Press the back button to leave the website, or "), n.createElement("p", null, "Check our ", n.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), n.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * l.length)], "! ", l[Math.floor(Math.random() * l.length)], ")"), n.createElement("code", null, r, " ", t)))
            }
        },
        98185: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(67294),
                o = r(43862),
                a = r(81362);
            const l = function(e) {
                var t = e.reducer,
                    r = e.loading,
                    l = e.loadingList,
                    i = e.error,
                    c = e.statusCode,
                    s = e.children,
                    m = !1;
                return l && l.forEach((function(e) {
                    e && (m = !0)
                })), null != c && 200 !== c && "200" !== c ? n.createElement(a.Z, {
                    error: i,
                    statusCode: c
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? n.createElement(a.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : i ? n.createElement(a.Z, {
                    error: i
                }) : null != t && t.error ? n.createElement(a.Z, {
                    error: t.error
                }) : r || m || null != t && t.fetching || null != t && t.loading ? n.createElement(o.Z, null) : n.createElement("div", null, s)
            }
        },
        78158: (e, t, r) => {
            r.d(t, {
                Z: () => g
            });
            var n = r(4965),
                o = r(2909),
                a = r(46357),
                l = r(35117),
                i = r(67294),
                c = r(74855),
                s = r(34226),
                m = r(21464),
                p = r(80873),
                u = r(63221);
            var d = "https://assets.vrchat.com/www/groups/default_banner.png",
                h = "https://assets.vrchat.com/www/groups/default_icon.png";
            const g = function(e) {
                var t = e.group,
                    r = e.showCanonicalLink,
                    n = void 0 === r || r,
                    c = ((0, p.pc)(), "".concat(t.shortCode, ".").concat(t.discriminator)),
                    g = "https://vrc.group/".concat(c),
                    R = t.membershipStatus === u.oq.USER_BLOCKED;
                return i.createElement(f, null, i.createElement(w, {
                    src: t.bannerUrl || d,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = d
                    },
                    isGroupBlocked: R
                }), i.createElement(x, null, i.createElement(E, {
                    src: t.iconUrl || h,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = h
                    },
                    isGroupBlocked: R
                }, R && i.createElement(v, {
                    icon: l.faBan,
                    size: "2x",
                    color: "#a8342e",
                    title: "You have blocked invite requests from this group!"
                })), i.createElement(y, null, i.createElement(k, {
                    className: "justify-content-between flex-nowrap"
                }, i.createElement("h2", {
                    title: t.name
                }, t.name)), i.createElement(k, null, i.createElement(M, {
                    title: "".concat(t.onlineMemberCount, " online member").concat(1 === t.onlineMemberCount ? "" : "s")
                }, i.createElement(b, {
                    role: "note",
                    statusColor: m.xY[t.onlineMemberCount > 0 ? "active" : "offline"].color,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.onlineMemberCount), i.createElement(M, {
                    title: "".concat(t.memberCount, " member").concat(1 === t.memberCount ? "" : "s")
                }, i.createElement(s.$1, {
                    icon: a.FV,
                    style: {
                        marginRight: "0.5em"
                    }
                }), " ", t.memberCount), i.createElement(C, null, i.createElement(Z, {
                    href: n ? g : void 0
                }, c), n && i.createElement(j, {
                    text: g
                }, i.createElement("button", {
                    type: "button",
                    title: "Copy Link"
                }, i.createElement(s.$1, {
                    icon: o.kZ
                })))), !1))))
            };
            var v = (0, n.Z)(s.$1, {
                    target: "e1kortvj11"
                })({
                    name: "w1atjl",
                    styles: "width:100%;height:100%"
                }),
                f = (0, n.Z)("div", {
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
                x = (0, n.Z)("div", {
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
                E = (0, n.Z)("div", {
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
                k = (0, n.Z)("div", {
                    target: "e1kortvj4"
                })({
                    name: "1no6rdg",
                    styles: "display:flex;flex-direction:row;align-items:center;flex-wrap:wrap"
                }),
                C = (0, n.Z)("div", {
                    target: "e1kortvj3"
                })({
                    name: "lie7be",
                    styles: "flex:0 1 auto;white-space:nowrap"
                }),
                Z = (0, n.Z)("a", {
                    target: "e1kortvj2"
                })({
                    name: "26gk1l",
                    styles: "font-size:15px;color:inherit"
                }),
                j = (0, n.Z)(c.CopyToClipboard, {
                    target: "e1kortvj1"
                })({
                    name: "1nt6xn8",
                    styles: "display:inline-block;border:none;background:transparent;color:inherit;padding:0;opacity:0.6;margin-left:0.5em;&:hover{opacity:1;}&:active{opacity:0.8;}"
                }),
                M = (0, n.Z)("div", {
                    target: "e1kortvj0"
                })({
                    name: "w6vqod",
                    styles: "display:flex;flex-direction:row;align-items:center;margin-right:1em"
                })
        }
    }
]);
//# sourceMappingURL=1c6d78a8bf1d2bf92f702f4ef89ae3a408a57cfc6835015830b023bd7fccde7d.js.map