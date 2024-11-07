"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8666], {
        78666: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r, o = n(30168),
                a = n(54546),
                i = n(4965),
                l = n(76513),
                s = n(46357),
                c = n(67294),
                d = n(89250),
                m = n(79655),
                p = n(83505),
                u = n(70917),
                b = n(93261),
                g = n(64358),
                f = n(34226);
            var x = "https://assets.vrchat.com/www/groups/default_banner.png",
                h = "https://assets.vrchat.com/www/groups/default_icon.png";
            const w = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    o = (0, d.s0)(),
                    i = (0, b.MQ)(),
                    m = (0, a.Z)(i, 2),
                    p = m[0],
                    u = m[1],
                    w = (u.isError, u.isSuccess, t.groupId),
                    E = t.id,
                    j = t.name,
                    N = t.shortCode,
                    T = t.discriminator,
                    U = t.description,
                    X = t.memberCount,
                    $ = t.iconId,
                    B = t.bannerId;
                return c.createElement(S, {
                    to: "/home/group/".concat(null != w ? w : E),
                    "aria-label": "Group Card"
                }, c.createElement(Z, null, c.createElement(I, null, c.createElement(z, {
                    src: B ? (0, g.S6)({
                        fileId: B,
                        width: "256"
                    }) : x,
                    alt: j,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = x
                    }
                }), c.createElement(C, null, c.createElement(_, {
                    src: $ ? (0, g.S6)({
                        fileId: $,
                        width: "256"
                    }) : h,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = h
                    }
                }))), c.createElement(f.X2, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, c.createElement(F, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: function(e) {
                        e.preventDefault(), o("/home/group/".concat(null != w ? w : E))
                    }
                }, c.createElement(D, null, j)))), c.createElement(q, null, c.createElement(y, null, c.createElement(v, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, c.createElement("small", null, U)), c.createElement(k, null, c.createElement("small", null, c.createElement(f.$1, {
                    icon: s.FV
                }), " ", X), c.createElement("small", null, N, ".", T)))), n && c.createElement(f.zx, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), p({
                            groupId: w,
                            userId: r
                        })
                    }
                }, c.createElement(f.$1, {
                    icon: l.bL
                }), " Unblock"))
            };
            var v = (0, i.Z)("div", {
                    target: "e1nq4ok411"
                })({
                    name: "1x8v68w",
                    styles: "height:58px;>small{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"
                }),
                k = (0, i.Z)("div", {
                    target: "e1nq4ok410"
                })({
                    name: "13r4cb0",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0 20px"
                }),
                y = (0, i.Z)("div", {
                    target: "e1nq4ok49"
                })({
                    name: "g2frxj",
                    styles: "display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:100%"
                }),
                E = (0, u.F4)(r || (r = (0, o.Z)(["\n  0% {\n    border-color: transparent;\n  }\n  25% {\n    border-color: #20c5e8;\n  }\n  100% {\n    border-color: transparent;\n  }\n"]))),
                Z = (0, i.Z)(f.JX, {
                    target: "e1nq4ok48"
                })({
                    name: "diayph",
                    styles: "padding:0.1rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0"
                }),
                q = (0, i.Z)(Z, {
                    target: "e1nq4ok47"
                })({
                    name: "1svfl3y",
                    styles: "padding:5px;background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;height:auto;overflow:hidden;color:#737372;transition:max-height 0.1s ease-in"
                }),
                j = (0, p.iv)("animation-name:", E, ";animation-fill-mode:forwards;animation-iteration-count:1;animation-duration:2s;animation-timing-function:ease-out;", ""),
                I = (0, i.Z)("div", {
                    target: "e1nq4ok46"
                })({
                    name: "16vzknb",
                    styles: "padding-top:35%;height:0;overflow:visible;border-radius:8px;position:relative;display:flex;flex-shrink:0"
                }),
                C = (0, i.Z)("div", {
                    target: "e1nq4ok45"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                z = (0, i.Z)("img", {
                    target: "e1nq4ok44"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                _ = (0, i.Z)("img", {
                    target: "e1nq4ok43"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                S = (0, i.Z)(m.rU, {
                    target: "e1nq4ok42"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", Z, "{", j, ";}", q, "{", j, ";}}"),
                D = (0, i.Z)("h4", {
                    target: "e1nq4ok41"
                })({
                    name: "mdmpp5",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;padding-bottom:2px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&:hover{color:var(--primary);}"
                }),
                F = (0, i.Z)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        }
    }
]);
//# sourceMappingURL=4410d35f08df6924e8587c0dc279157f06f3be1f490dabebbddaed7844042870.js.map