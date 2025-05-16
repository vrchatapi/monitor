"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1395], {
        1395: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => T
            });
            var r = n(54546),
                a = n(4965),
                l = n(72065),
                i = n(83505),
                s = n(67294),
                c = n(22082),
                o = n(14411),
                m = n(56395),
                u = n(36322),
                d = n(66007),
                f = n(66062),
                g = n(92558),
                E = n(68871),
                h = n(27484),
                b = n.n(h),
                w = n(1646),
                p = n.n(w),
                v = n(70178),
                y = n.n(v),
                N = n(45697),
                S = n.n(N),
                x = n(73639),
                I = n(79655),
                J = n(50146),
                C = n(17383),
                k = n(64358);
            b().extend(p()), b().extend(y());
            var D = s.memo((function(e) {
                var t, n = e.jam,
                    a = e.className,
                    l = e.refetch,
                    i = s.useRef(null),
                    h = (0, C.Tu)().user,
                    w = (0, c.Zv)({
                        jamId: n.id,
                        submitterId: null == h ? void 0 : h.id
                    }, {
                        skip: !(null != h && h.id)
                    }),
                    p = w.data,
                    v = w.isLoading,
                    y = (null == p ? void 0 : p.length) > 0,
                    N = s.useMemo((function() {
                        return n.state === m.g1.CLOSED ? null : (0, k.bh)(n)
                    }), [n]),
                    S = !!N && b().duration(b().utc(N).diff(b().utc())).asHours() < 0,
                    I = s.useState(null === N || S ? "" : b().duration(b().utc(N).diff(b().utc())).format("DD : HH : mm : ss")),
                    D = (0, r.Z)(I, 2),
                    O = D[0],
                    Z = D[1];
                s.useEffect((function() {
                    return N && (i.current = setInterval((function() {
                            var e = b().duration(b().utc(N).diff(b().utc()));
                            if (e.asSeconds() <= 0) return clearInterval(i.current), i.current = null, void l();
                            Z(e.format("DD : HH : mm : ss"))
                        }), 1e3)),
                        function() {
                            i.current && clearInterval(i.current)
                        }
                }), [N]);
                var T = n.type.slice(0, 1).toUpperCase() + n.type.slice(1),
                    X = n.state === m.g1.SUBMISSIONS_OPEN && !S,
                    L = y ? "Edit Submission" : "Submit ".concat(T),
                    _ = y ? E.faPencil : g.BE,
                    q = s.useMemo((function() {
                        switch (n.state) {
                            case m.g1.ANNOUNCED:
                                return n.stateChangeDates.submissionsOpened && !S && N ? s.createElement(s.Fragment, null, s.createElement(M, {
                                    className: "tw-mr-3"
                                }, "Submissions Open In"), s.createElement("div", null, O)) : s.createElement(M, null, "Announced");
                            case m.g1.SUBMISSIONS_OPEN:
                                return n.stateChangeDates.submissionsClosed && N ? s.createElement(s.Fragment, null, s.createElement(M, {
                                    className: "tw-mr-3"
                                }, "Submissions Close In"), s.createElement("div", null, O)) : S ? s.createElement(M, null, "Submissions Closed") : s.createElement(M, null, "Submissions Open");
                            case m.g1.SUBMISSIONS_CLOSED:
                                return n.stateChangeDates.winnersSelected && !S && N ? s.createElement(s.Fragment, null, s.createElement(M, {
                                    className: "tw-mr-3"
                                }, "Winners Announced In"), s.createElement("div", null, O)) : s.createElement(M, null, "Judging In Progress");
                            case m.g1.WINNERS_SELECTED:
                                return s.createElement(M, {
                                    className: "tw-mr-3"
                                }, "Winners Selected");
                            default:
                                return ""
                        }
                    }), [n, O, S]);
                return s.createElement(o.JX, {
                    role: "listitem",
                    "aria-label": "Jam Card",
                    className: a
                }, s.createElement(o.oI, null, s.createElement(o.X2, {
                    className: "align-items-center justify-content-between"
                }, s.createElement(j, null, s.createElement("h2", null, n.title), s.createElement("div", {
                    title: "".concat(T, " Jam"),
                    id: "Tooltip-Type-".concat(n.id),
                    className: "tw-ml-3"
                }, s.createElement(o.$1, {
                    icon: "world" === n.type ? f.g4 : d.KC
                })), s.createElement(J.Z, {
                    placement: "top",
                    target: "Tooltip-Type-".concat(n.id)
                }, T, " Jam")), s.createElement(U, null, q))), s.createElement(o.Ao, null, s.createElement("div", {
                    className: "tw-prose tw-prose-zinc tw-prose-invert mb-2 [&_h3]:after:tw-hidden"
                }, s.createElement(x.MN, null, null !== (t = n.description) && void 0 !== t ? t : "")), y && s.createElement(o.qX, {
                    type: "neutral",
                    title: "Jam Joined",
                    message: "You have joined this Jam!",
                    hideIcon: !0,
                    slim: !0
                }), s.createElement(o.X2, null, s.createElement(R, {
                    href: n.moreInfo,
                    target: "_blank",
                    className: "tw-mb-2 md:tw-mb-0 tw-mr-0 md:tw-mr-2"
                }, s.createElement("div", null, "Learn More"), s.createElement(o.$1, {
                    className: "tw-ml-3",
                    icon: u.sp
                })), X && v && s.createElement(o.UU, {
                    height: "38px",
                    className: "flex-1"
                }), X && !v && s.createElement(z, {
                    to: "".concat(n.id, "/submit"),
                    className: "d-flex flex-row align-items-center justify-content-center"
                }, s.createElement("div", null, L), s.createElement(o.$1, {
                    className: "tw-ml-3",
                    icon: _
                })))))
            }));
            D.propTypes = {
                jam: S().shape({
                    id: S().string.isRequired,
                    title: S().string.isRequired,
                    moreInfo: S().string.isRequired
                }).isRequired,
                className: S().string,
                refetch: S().func.isRequired
            };
            const O = D;
            var j = (0, a.Z)(o.X2, {
                    target: "e3cywwn4"
                })({
                    name: "1c83l6s",
                    styles: "font-size:1.5rem;font-weight:bold;align-items:center;h2,h3,h4{margin-bottom:0;}"
                }),
                Z = {
                    name: "637ilh",
                    styles: "display:flex;align-items:center;justify-content:center;border:#064b5c solid 2px;border-radius:4px;background:#064b5c;color:#6ae3f9;padding:5px 5px;box-sizing:border-box;outline:none!important;flex:1;flex-grow:1;text-decoration:none;&:hover,&:active,&:focus{border-color:#086c84;text-decoration:none;color:#6ae3f9;}"
                },
                R = (0, a.Z)("a", {
                    target: "e3cywwn3"
                })(Z, ";"),
                z = (0, a.Z)(I.rU, {
                    target: "e3cywwn2"
                })(Z, " border:#2fb81d07 solid 2px;background:#2fb81d3f;color:white;&:hover,&:active,&:focus{border-color:green;}"),
                U = (0, a.Z)(o.X2, {
                    target: "e3cywwn1"
                })({
                    name: "3fn6g6",
                    styles: "align-items:center;font-size:1.5rem;font-weight:bold"
                }),
                M = (0, a.Z)("div", {
                    target: "e3cywwn0"
                })({
                    name: "d8vg6u",
                    styles: "font-size:0.9rem;font-weight:normal"
                });
            const T = function() {
                var e = (0, c.oE)(),
                    t = e.data,
                    n = e.isLoading,
                    a = e.isSuccess,
                    i = e.refetch,
                    u = s.useState(!1),
                    d = (0, r.Z)(u, 2),
                    f = d[0],
                    g = d[1],
                    E = s.useRef(null);
                s.useEffect((function() {
                    return E.current = setInterval((function() {
                            g(!0), setTimeout((function() {
                                return g(!1)
                            }), 490)
                        }), 5e3),
                        function() {
                            E.current && clearInterval(E.current)
                        }
                }), []);
                var h = s.useMemo((function() {
                        return (null == t ? void 0 : t.filter((function(e) {
                            return e.state !== m.g1.CLOSED
                        }))) || []
                    }), [t]),
                    b = s.useMemo((function() {
                        return (null == t ? void 0 : t.filter((function(e) {
                            return e.state === m.g1.CLOSED
                        }))) || []
                    }), [t]);
                if (n) return s.createElement(o.UU, {
                    width: "100%",
                    height: "200px"
                });
                var w = a && 0 === (null == t ? void 0 : t.length);
                return s.createElement(X, null, s.createElement(o.$4, null, "VRChat Jams"), s.createElement("h2", null, "VRChat Jams ", s.createElement(q, {
                    isJiggling: f,
                    icon: l.Ww
                })), s.createElement(L, {
                    className: "tw-mt-2 tw-mb-3"
                }, s.createElement("p", {
                    className: "mb-0"
                }, "VRChat Jams allow our creative community to flex their development muscles, giving both brand new creators and veterans an opportunity to get their work into the spotlight.", s.createElement("br", null), s.createElement("br", null), "Cook something up by yourself, or meet a few like-minded creators to build something amazing together!", s.createElement("br", null), s.createElement("br", null), "We're excited to see what you build. Good luck — and keep your eye on the clock!")), h.length > 0 && s.createElement(s.Fragment, null, s.createElement("h4", {
                    className: "tw-mb-2"
                }, "Active Jams"), s.createElement(o.JX, {
                    role: "list",
                    "aria-label": "Active Jams"
                }, h.map((function(e) {
                    return s.createElement(O, {
                        refetch: i,
                        className: "tw-mb-2",
                        key: e.id,
                        jam: e
                    })
                })))), b.length > 0 && s.createElement(s.Fragment, null, s.createElement("h4", {
                    className: "tw-mb-4 tw-mt-4"
                }, "Past Jams"), s.createElement(o.JX, {
                    role: "list",
                    "aria-label": "Active Jams"
                }, b.map((function(e) {
                    return s.createElement(O, {
                        refetch: i,
                        className: "tw-mb-2",
                        key: e.id,
                        jam: e
                    })
                })))), w && s.createElement("div", null, "There are no active Jams, come back later!"))
            };
            var X = (0, a.Z)(o.JX, {
                    target: "e1xy0j0z2"
                })({
                    name: "1wafcg9",
                    styles: "max-width:1200px;margin:0 auto"
                }),
                L = (0, a.Z)(o.oI, {
                    target: "e1xy0j0z1"
                })({
                    name: "qhoi00",
                    styles: "border-radius:8px;border-width:3px"
                }),
                _ = (0, i.F4)({
                    name: "dca843",
                    styles: "0%{transform:rotate(10deg);}25%{transform:rotate(-10deg);}50%{transform:rotate(10deg);}75%{transform:rotate(-10deg);}100%{transform:rotate(10deg);}"
                }),
                q = (0, a.Z)(o.$1, {
                    shouldForwardProp: function(e) {
                        return "isJiggling" !== e
                    },
                    target: "e1xy0j0z0"
                })("transform:rotate(10deg);transition:transform 0.5s ease-in-out;animation-name:", _, ";animation-iteration-count:", (function(e) {
                    return e.isJiggling ? "infinite" : "0"
                }), ";animation-duration:500ms;animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275);")
        }
    }
]);
//# sourceMappingURL=14ae140deabab8119755b08730e0e0a3c4e32f3763a6f045472947cfad9287f5.js.map