"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [422], {
        5600: (e, t) => {
            var r = "book",
                a = [128212],
                n = "f02d",
                c = "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [448, 512, a, n, c]
            }, t.FL = t.DF
        },
        14097: (e, t) => {
            var r = "door-open",
                a = [],
                n = "f52b",
                c = "M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, a, n, c]
            }, t.TE = t.DF
        },
        70422: (e, t, r) => {
            r.r(t), r.d(t, {
                Logo: () => k,
                default: () => f
            });
            var a = r(15861),
                n = r(54546),
                c = r(4965),
                l = r(14097),
                s = r(5600),
                o = r(64687),
                i = r.n(o),
                m = r(67294),
                u = r(89250),
                d = r(79655),
                p = r(14411),
                b = r(22202),
                h = r(17219),
                g = r(62437);
            const f = function() {
                var e, t, r = (0, u.s0)(),
                    c = (0, u.TH)().state,
                    o = (0, b.XC)().data,
                    f = (0, h.y)().data,
                    E = void 0 === f ? {} : f,
                    y = (0, g.ss)(),
                    x = (0, n.Z)(y, 2),
                    w = x[0],
                    T = x[1],
                    N = T.isError,
                    z = T.error,
                    S = m.useState(!1),
                    C = (0, n.Z)(S, 2),
                    F = C[0],
                    L = C[1],
                    X = function() {
                        var e = (0, a.Z)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (F || null == o || !o.id || !E.currentTOSVersion) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, w({
                                            userId: null == o ? void 0 : o.id,
                                            tosVersion: E.currentTOSVersion
                                        }).unwrap();
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return");
                                    case 10:
                                        return e.next = 12, new Promise((function(e) {
                                            return setTimeout(e, 1e3)
                                        }));
                                    case 12:
                                        if (null == c || !c.redirectTo) {
                                            e.next = 15;
                                            break
                                        }
                                        return r(c.redirectTo), e.abrupt("return");
                                    case 15:
                                        r("/home");
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return m.createElement(v, null, m.createElement(p.$4, null, "Updates to our Terms of Service"), m.createElement(p.JX, {
                    className: "align-items-center mt-5"
                }, m.createElement(k, {
                    href: "https://vrchat.com",
                    target: "_blank"
                }), m.createElement(p.JX, null, m.createElement(p.oI, null, m.createElement(p.X2, {
                    className: "align-items-center"
                }, m.createElement(p.$1, {
                    icon: s.FL,
                    size: "2x",
                    className: "me-3"
                }), m.createElement("h2", {
                    className: "my-0 me-4"
                }, "Updates to our Terms of Service"))), m.createElement(p.Ao, null, m.createElement("p", null, "Our terms of service, which includes our  ", m.createElement("a", {
                    href: "/community-guidelines",
                    target: "_blank"
                }, "Community Guidelines"), ", ", m.createElement("a", {
                    href: "/legal",
                    target: "_blank"
                }, "Terms of Service"), ", and ", m.createElement("a", {
                    href: "/privacy",
                    target: "_blank"
                }, "Privacy Policy"), "  have been updated."), m.createElement(p.XZ, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        L(t)
                    },
                    checked: F,
                    label: "I have read and agree to the terms of service",
                    htmlFor: "tos"
                }))), N && m.createElement(p.qX, {
                    type: "error",
                    title: "Failed to accept the TOS",
                    className: "px-4 my-3"
                }, null !== (e = null === (t = z.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : ""), m.createElement("div", {
                    className: "rounded px-3 px-sm-4 py-3 py-sm-5"
                }, m.createElement(p.X2, null, m.createElement(d.rU, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    },
                    title: "logout",
                    className: "btn btn-secondary float-left"
                }, m.createElement(p.$1, {
                    icon: l.TE
                }), "  Log out"), m.createElement("button", {
                    type: "button",
                    disabled: !F,
                    className: "btn btn-primary ms-4",
                    id: "tos-submit",
                    name: "tos-submit",
                    value: "agree-to-tos",
                    onClick: X
                }, "Submit")))))
            };
            var v = (0, c.Z)(p.JX, {
                    target: "e1568kr11"
                })({
                    name: "1ma484u",
                    styles: "align-items:center;max-width:650px;margin:0 auto;padding:0 1rem"
                }),
                k = (0, c.Z)("a", {
                    target: "e1568kr10"
                })({
                    name: "115oksq",
                    styles: "display:block;height:50px;width:118px;background-image:url('https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png');background-size:contain;background-repeat:no-repeat;align-self:center;margin-bottom:20px"
                })
        }
    }
]);
//# sourceMappingURL=7a4c2d52ccb2f527739c9881fd2036b79137e7cad46de7167a7d7c2a83bda848.js.map