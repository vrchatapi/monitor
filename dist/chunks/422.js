"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [422], {
        5600: (e, t) => {
            var r = "book",
                a = [128212],
                n = "f02d",
                c = "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
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
                c = "M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z";
            t.DF = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, a, n, c]
            }, t.TE = t.DF
        },
        70422: (e, t, r) => {
            r.r(t), r.d(t, {
                Logo: () => k,
                default: () => v
            });
            var a = r(15861),
                n = r(54546),
                c = r(4965),
                s = r(14097),
                o = r(5600),
                l = r(64687),
                i = r.n(l),
                m = r(67294),
                u = r(89250),
                d = r(79655),
                p = r(34226),
                h = r(22202),
                b = r(17219),
                g = r(62437);
            const v = function() {
                var e, t, r = (0, u.s0)(),
                    c = (0, u.TH)().state,
                    l = (0, h.XC)().data,
                    v = (0, b.y)().data,
                    E = void 0 === v ? {} : v,
                    y = (0, g.ss)(),
                    x = (0, n.Z)(y, 2),
                    w = x[0],
                    H = x[1],
                    T = H.isError,
                    N = H.error,
                    V = m.useState(!1),
                    z = (0, n.Z)(V, 2),
                    S = z[0],
                    C = z[1],
                    F = function() {
                        var e = (0, a.Z)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (S || null == l || !l.id || !E.currentTOSVersion) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, w({
                                            userId: null == l ? void 0 : l.id,
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
                return m.createElement(f, null, m.createElement(p.$4, null, "Updates to our Terms of Service"), m.createElement(p.JX, {
                    className: "align-items-center mt-5"
                }, m.createElement(k, {
                    href: "https://vrchat.com",
                    target: "_blank"
                }), m.createElement(p.JX, null, m.createElement(p.oI, null, m.createElement(p.X2, {
                    className: "align-items-center"
                }, m.createElement(p.$1, {
                    icon: o.FL,
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
                        C(t)
                    },
                    checked: S,
                    label: "I have read and agree to the terms of service",
                    htmlFor: "tos"
                }))), T && m.createElement(p.qX, {
                    type: "error",
                    title: "Failed to accept the TOS",
                    className: "px-4 my-3"
                }, null !== (e = null === (t = N.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : ""), m.createElement("div", {
                    className: "rounded px-3 px-sm-4 py-3 py-sm-5"
                }, m.createElement(p.X2, null, m.createElement(d.rU, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    },
                    title: "logout",
                    className: "btn btn-secondary float-left"
                }, m.createElement(p.$1, {
                    icon: s.TE
                }), "  Log out"), m.createElement("button", {
                    type: "button",
                    disabled: !S,
                    className: "btn btn-primary ms-4",
                    id: "tos-submit",
                    name: "tos-submit",
                    value: "agree-to-tos",
                    onClick: F
                }, "Submit")))))
            };
            var f = (0, c.Z)(p.JX, {
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
//# sourceMappingURL=c93a364ae994717a3c92a57417225044a150192d07557d2d54e7c72df3477b66.js.map