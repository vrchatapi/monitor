"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8666], {
        76513: (e, t) => {
            var n = "delete-left",
                r = [9003, "backspace"],
                o = "f55a",
                a = "M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, r, o, a]
            }, t.bL = t.DF
        },
        78666: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r, o = n(30168),
                a = n(54546),
                l = n(4965),
                i = n(76513),
                c = n(46357),
                s = n(67294),
                d = n(89250),
                m = n(79655),
                p = n(83505),
                u = n(70917),
                b = n(93261),
                f = n(64358),
                g = n(14411);
            var x = "https://assets.vrchat.com/www/groups/default_banner.png",
                h = "https://assets.vrchat.com/www/groups/default_icon.png";
            const w = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    o = (0, d.s0)(),
                    l = (0, b.MQ)(),
                    m = (0, a.Z)(l, 2),
                    p = m[0],
                    u = m[1],
                    w = (u.isError, u.isSuccess, t.groupId),
                    E = t.id,
                    j = t.name,
                    M = t.shortCode,
                    N = t.discriminator,
                    S = t.description,
                    T = t.memberCount,
                    U = t.iconId,
                    X = t.bannerId;
                return s.createElement(D, {
                    to: "/home/group/".concat(null != w ? w : E),
                    "aria-label": "Group Card"
                }, s.createElement(Z, null, s.createElement(I, null, s.createElement(z, {
                    src: X ? (0, f.S6)({
                        fileId: X,
                        width: "256"
                    }) : x,
                    alt: j,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = x
                    }
                }), s.createElement(C, null, s.createElement(L, {
                    src: U ? (0, f.S6)({
                        fileId: U,
                        width: "256"
                    }) : h,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = h
                    }
                }))), s.createElement(g.X2, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, s.createElement(_, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: function(e) {
                        e.preventDefault(), o("/home/group/".concat(null != w ? w : E))
                    }
                }, s.createElement(F, null, j)))), s.createElement(q, null, s.createElement(y, null, s.createElement(v, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, s.createElement("small", null, S)), s.createElement(k, null, s.createElement("small", null, s.createElement(g.$1, {
                    icon: c.FV
                }), " ", T), s.createElement("small", null, M, ".", N)))), n && s.createElement(g.zx, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), p({
                            groupId: w,
                            userId: r
                        })
                    }
                }, s.createElement(g.$1, {
                    icon: i.bL
                }), " Unblock"))
            };
            var v = (0, l.Z)("div", {
                    target: "e1nq4ok411"
                })({
                    name: "1x8v68w",
                    styles: "height:58px;>small{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"
                }),
                k = (0, l.Z)("div", {
                    target: "e1nq4ok410"
                })({
                    name: "13r4cb0",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0 20px"
                }),
                y = (0, l.Z)("div", {
                    target: "e1nq4ok49"
                })({
                    name: "g2frxj",
                    styles: "display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:100%"
                }),
                E = (0, u.F4)(r || (r = (0, o.Z)(["\n  0% {\n    border-color: transparent;\n  }\n  25% {\n    border-color: #20c5e8;\n  }\n  100% {\n    border-color: transparent;\n  }\n"]))),
                Z = (0, l.Z)(g.JX, {
                    target: "e1nq4ok48"
                })({
                    name: "diayph",
                    styles: "padding:0.1rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0"
                }),
                q = (0, l.Z)(Z, {
                    target: "e1nq4ok47"
                })({
                    name: "1svfl3y",
                    styles: "padding:5px;background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;height:auto;overflow:hidden;color:#737372;transition:max-height 0.1s ease-in"
                }),
                j = (0, p.iv)("animation-name:", E, ";animation-fill-mode:forwards;animation-iteration-count:1;animation-duration:2s;animation-timing-function:ease-out;", ""),
                I = (0, l.Z)("div", {
                    target: "e1nq4ok46"
                })({
                    name: "16vzknb",
                    styles: "padding-top:35%;height:0;overflow:visible;border-radius:8px;position:relative;display:flex;flex-shrink:0"
                }),
                C = (0, l.Z)("div", {
                    target: "e1nq4ok45"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                z = (0, l.Z)("img", {
                    target: "e1nq4ok44"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                L = (0, l.Z)("img", {
                    target: "e1nq4ok43"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                D = (0, l.Z)(m.rU, {
                    target: "e1nq4ok42"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", Z, "{", j, ";}", q, "{", j, ";}}"),
                F = (0, l.Z)("h4", {
                    target: "e1nq4ok41"
                })({
                    name: "mdmpp5",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;padding-bottom:2px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&:hover{color:var(--primary);}"
                }),
                _ = (0, l.Z)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        }
    }
]);
//# sourceMappingURL=b242399535f93a822b79410bf38a143ba6af3b1cb11040e47a28976153b23f6c.js.map