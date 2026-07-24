"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [776], {
        66064(e, t) {
            var r = "book",
                a = [128212],
                n = "f02d",
                c = "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [448, 512, a, n, c]
            }, t.LB = t.mw
        },
        51029(e, t) {
            var r = "door-open",
                a = [],
                n = "f52b",
                c = "M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [576, 512, a, n, c]
            }, t.uQ = t.mw
        },
        60776(e, t, r) {
            r.r(t), r.d(t, {
                Logo: () => k,
                default: () => g
            });
            var a = r(10467),
                n = r(82544),
                c = r(70129),
                l = r(51029),
                s = r(66064),
                o = r(54756),
                i = r.n(o),
                m = r(96540),
                u = r(84976),
                d = r(47767),
                p = r(71661),
                f = r(13951),
                b = r(50779),
                h = r(71957);
            const g = function() {
                var e, t, r = (0, d.Zp)(),
                    c = (0, d.zy)().state,
                    o = (0, f.P2)().data,
                    g = (0, b.G)().data,
                    E = void 0 === g ? {} : g,
                    w = (0, h.G6)(),
                    y = (0, n.A)(w, 2),
                    x = y[0],
                    N = y[1],
                    z = N.isError,
                    S = N.error,
                    T = m.useState(!1),
                    L = (0, n.A)(T, 2),
                    C = L[0],
                    _ = L[1],
                    A = function() {
                        var e = (0, a.A)(i().mark(function e() {
                            return i().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (C || null == o || !o.id || !E.currentTOSVersion) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, x({
                                            userId: null == o ? void 0 : o.id,
                                            tosVersion: E.currentTOSVersion
                                        }).unwrap();
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return");
                                    case 10:
                                        return e.next = 12, new Promise(function(e) {
                                            return setTimeout(e, 1e3)
                                        });
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
                            }, e, null, [
                                [2, 7]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return m.createElement(v, null, m.createElement(p.Qc, null, "Updates to our Terms of Service"), m.createElement(p.fv, {
                    className: "align-items-center mt-5"
                }, m.createElement(k, {
                    href: "https://vrchat.com",
                    target: "_blank"
                }), m.createElement(p.fv, null, m.createElement(p.N3, null, m.createElement(p.fI, {
                    className: "align-items-center"
                }, m.createElement(p.M2, {
                    icon: s.LB,
                    size: "2x",
                    className: "me-3"
                }), m.createElement("h2", {
                    className: "my-0 me-4"
                }, "Updates to our Terms of Service"))), m.createElement(p.BW, null, m.createElement("p", null, "Our terms of service, which includes our  ", m.createElement("a", {
                    href: "/community-guidelines",
                    target: "_blank"
                }, "Community Guidelines"), ", ", m.createElement("a", {
                    href: "/legal",
                    target: "_blank"
                }, "Terms of Service"), ", and ", m.createElement("a", {
                    href: "/privacy",
                    target: "_blank"
                }, "Privacy Policy"), "  have been updated."), m.createElement(p.Sc, {
                    id: "tos",
                    onChange: function(e) {
                        var t = e.target.checked;
                        _(t)
                    },
                    checked: C,
                    label: "I have read and agree to the terms of service",
                    htmlFor: "tos"
                }))), z && m.createElement(p.$T, {
                    type: "error",
                    title: "Failed to accept the TOS",
                    className: "px-4 my-3"
                }, null !== (e = null === (t = S.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : ""), m.createElement("div", {
                    className: "rounded px-3 px-sm-4 py-3 py-sm-5"
                }, m.createElement(p.fI, null, m.createElement(u.N_, {
                    to: "/home/login",
                    state: {
                        logout: !0
                    },
                    title: "logout",
                    className: "btn btn-secondary float-left"
                }, m.createElement(p.M2, {
                    icon: l.uQ
                }), "  Log out"), m.createElement("button", {
                    type: "button",
                    disabled: !C,
                    className: "btn btn-primary ms-4",
                    id: "tos-submit",
                    name: "tos-submit",
                    value: "agree-to-tos",
                    onClick: A
                }, "Submit")))))
            };
            var v = (0, c.A)(p.fv, {
                    target: "e1568kr11"
                })({
                    name: "1ma484u",
                    styles: "align-items:center;max-width:650px;margin:0 auto;padding:0 1rem"
                }),
                k = (0, c.A)("a", {
                    target: "e1568kr10"
                })({
                    name: "115oksq",
                    styles: "display:block;height:50px;width:118px;background-image:url('https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png');background-size:contain;background-repeat:no-repeat;align-self:center;margin-bottom:20px"
                })
        }
    }
]);
//# sourceMappingURL=9ca6e5846020ac59ba58e28aa31f2bad07783efb18922704bdb7feb257015837.js.map