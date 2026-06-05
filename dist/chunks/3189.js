(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3189], {
        73189(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => B
            });
            var r = n(15184),
                a = n(70129),
                l = n(96540),
                o = n(84976),
                c = n(31069),
                i = n(15033),
                s = n(97963),
                u = n(194),
                d = (n(13951), n(99871)),
                w = n(91069),
                p = n(15902),
                m = n(79162),
                g = n(49107),
                f = n(5556),
                h = n.n(f),
                v = n(58168),
                b = n(80045),
                y = n(40085),
                E = n(54734),
                x = ["groupId"],
                k = function(e) {
                    var t = e.groupId,
                        n = void 0 === t ? null : t,
                        r = (0, b.A)(e, x),
                        a = (0, y.XR)({
                            groupId: n
                        }, {
                            skip: null === n
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === n || s ? null : c ? l.createElement(i.fy, (0, v.A)({
                        width: "auto",
                        height: "250px"
                    }, r)) : u ? l.createElement(E.A, (0, v.A)({
                        group: o
                    }, r)) : void 0
                };
            k.propTypes = {
                groupId: h().string
            };
            const S = k;
            var A = function(e) {
                var t = e.title,
                    n = e.groupIds,
                    r = void 0 === n ? [] : n,
                    a = (0, l.useState)(!0),
                    o = (0, p.A)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, p.A)(u, 2),
                    w = d[0],
                    f = d[1],
                    h = (0, l.useRef)(null);
                (0, l.useEffect)(function() {
                    h.current && s(h.current.scrollWidth <= h.current.offsetWidth)
                }, [r]);
                var v = (0, l.useMemo)(function() {
                        return !!h.current && h.current.scrollLeft >= h.current.scrollWidth - h.current.offsetWidth
                    }, [w]),
                    b = (0, l.useMemo)(function() {
                        return !h.current || h.current.scrollLeft <= 200
                    }, [w]);
                return r.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: h,
                    onScroll: function(e) {
                        return f(e.currentTarget.scrollLeft)
                    },
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                }, r.map(function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-mr-4 tw-mt-4 tw-snap-center tw-w-80 tw-inline-block tw-h-64 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(S, {
                        groupId: e
                    }))
                }), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft -= 200
                    }
                }, l.createElement(i.M2, {
                    icon: g.Wz,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v || c ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft += 200
                    }
                }, l.createElement(i.M2, {
                    icon: m.Xk,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            A.propTypes = {
                title: h().string.isRequired,
                groupIds: h().arrayOf(h().string).isRequired
            };
            const N = A;
            var I = n(60188),
                C = n(46708),
                R = ["worldId"],
                T = function(e) {
                    var t = e.worldId,
                        n = void 0 === t ? null : t,
                        r = (0, b.A)(e, R),
                        a = (0, I.Ed)({
                            worldId: n
                        }, {
                            skip: null === n
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === n || s ? null : c ? l.createElement(i.fy, (0, v.A)({
                        width: "auto",
                        height: "420px"
                    }, r)) : u ? l.createElement(C.A, (0, v.A)({
                        world: o
                    }, r)) : void 0
                };
            T.propTypes = {
                worldId: h().string
            };
            const L = T;
            var W = function(e) {
                var t = e.title,
                    n = e.worldIds,
                    r = void 0 === n ? [] : n,
                    a = (0, l.useState)(!0),
                    o = (0, p.A)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, p.A)(u, 2),
                    w = d[0],
                    f = d[1],
                    h = (0, l.useRef)(null);
                (0, l.useEffect)(function() {
                    h.current && s(h.current.scrollWidth <= h.current.offsetWidth)
                }, [r]);
                var v = (0, l.useMemo)(function() {
                        return !!h.current && h.current.scrollLeft >= h.current.scrollWidth - h.current.offsetWidth
                    }, [w]),
                    b = (0, l.useMemo)(function() {
                        return !h.current || h.current.scrollLeft <= 300
                    }, [w]);
                return r.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: h,
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth",
                    onScroll: function(e) {
                        return f(e.currentTarget.scrollLeft)
                    }
                }, r.map(function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-snap-center tw-w-80 tw-inline-block tw-h-98 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(L, {
                        worldId: e,
                        className: "tw-mr-4 tw-mb-4"
                    }))
                }), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft -= 300
                    }
                }, l.createElement(i.M2, {
                    icon: g.Wz,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v || c ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft += 300
                    }
                }, l.createElement(i.M2, {
                    icon: m.Xk,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            W.propTypes = {
                title: h().string.isRequired,
                worldIds: h().arrayOf(h().string).isRequired
            };
            const M = W;
            var q = n(7651),
                j = n.n(q),
                P = n(66829),
                z = n.n(P),
                V = n(17917),
                D = n.n(V),
                O = n(91700),
                _ = n.n(O),
                F = n(50481),
                Q = n.n(F),
                X = n(61747),
                G = n.n(X);
            const B = function() {
                var e, t, n, a = (0, u.a$)({
                        withEconomyAccount: !0
                    }).user,
                    o = (0, d.o)({
                        require: ["marketplace-page", "content-compatibility-pc"]
                    }),
                    s = o.data,
                    p = void 0 === s ? [] : s,
                    m = o.isLoading,
                    g = null == p || null === (e = p[0]) || void 0 === e ? void 0 : e.data,
                    f = null == g ? void 0 : g.categories,
                    h = l.useMemo(function() {
                        var e;
                        return null == f || null === (e = f.map(function(e) {
                            var t = Array.isArray(e.ids) && (0, w.R3)((0, r.A)(e.ids)).slice(0, e.maxCells || void 0) || [];
                            switch (e.type) {
                                case "worlds":
                                    var n, a, o, c;
                                    return l.createElement(M, {
                                        key: "".concat(e.type, ":").concat(null !== (n = null === (a = e.name) || void 0 === a ? void 0 : a.fallback) && void 0 !== n ? n : e.name, ":").concat(e.maxCells),
                                        title: null !== (o = null === (c = e.name) || void 0 === c ? void 0 : c.fallback) && void 0 !== o ? o : e.name,
                                        worldIds: t
                                    });
                                case "groups":
                                    var i, s, u, d;
                                    return l.createElement(N, {
                                        key: "".concat(e.type, ":").concat(null !== (i = null === (s = e.name) || void 0 === s ? void 0 : s.fallback) && void 0 !== i ? i : e.name, ":").concat(e.maxCells),
                                        title: null !== (u = null === (d = e.name) || void 0 === d ? void 0 : d.fallback) && void 0 !== u ? u : e.name,
                                        groupIds: t
                                    });
                                default:
                                    return null
                            }
                        })) || void 0 === e ? void 0 : e.filter(function(e) {
                            return !!e
                        })
                    }, [f]),
                    v = (null == a || null === (t = a.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === c.Tp.INVITED || (null == a || null === (n = a.economyAccount) || void 0 === n ? void 0 : n.accountSellerStatus) === c.Tp.REGISTERED;
                return l.createElement(l.Fragment, null, l.createElement(H, {
                    className: "flex-row px-1 gap-1 justify-content-evenly align-items-center tw-w-full"
                }, l.createElement("picture", {
                    className: "tw--mt-4 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(j(), ", ").concat(z(), " 2x")
                }), l.createElement("img", {
                    src: j(),
                    width: "272",
                    alt: "A cute catgirl smiles and points at the viewer"
                })), l.createElement($, {
                    className: "fw-normal my-3 text-center"
                }, "Welcome to ", l.createElement("br", null), l.createElement(J, null, "VRChat Marketplace")), l.createElement("picture", {
                    className: "tw--mt-4 tw--mb-8 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(Q(), ", ").concat(G(), " 2x")
                }), l.createElement("img", {
                    src: Q(),
                    width: "280",
                    alt: "Emoji of the VRChat Plus logo, a dollar bill, and a smiling face with heart eyes"
                }))), l.createElement(i.BW, {
                    className: "d-flex flex-row flex-wrap tw-gap-12 tw-p-12"
                }, l.createElement("div", null, l.createElement("h4", null, "Welcome to the VRChat Marketplace!"), l.createElement("p", null, "The VRChat Marketplace is your gateway to premium world features, group perks, and avatars made by our community. Discover and purchase listings inside VRChat using your VRChat Credits."), l.createElement("p", null, "To learn more about the VRChat Marketplace, please head to", " ", l.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/23255458227987-Creator-Economy-Frequently-Asked-Questions",
                    target: "_blank",
                    rel: "noreferrer"
                }, "our FAQ page"), "."), l.createElement("p", null, "Need to manage your VRChat Plus membership? Head to the Wallet tab to review or update your subscription details."), l.createElement("div", {
                    className: "d-flex flex-row flex-wrap gap-2 align-items-start"
                }, l.createElement(K, {
                    to: "../wallet"
                }, "Check my Wallet"), v && l.createElement(K, {
                    to: "../storefront"
                }, "Manage my Store")))), m ? l.createElement(i.fy, null) : h)
            };
            var H = (0, a.A)(i.N3, {
                    target: "e1g9fx423"
                })("background-color:#715900;background-size:cover;background-position:center;background-image:url(", D(), ");@media (min-device-pixel-ratio: 1.5){background-image:url(", _(), ");}border:none;padding:0;&>picture:last-child{z-index:1;}@media (max-width: 479px){&>picture:last-child{display:none;}}"),
                $ = (0, a.A)("h3", {
                    target: "e1g9fx422"
                })({
                    name: "fxe5j0",
                    styles: "&:after{content:none;}@media (min-width: 1680px){font-size:2.25rem;}"
                }),
                J = (0, a.A)("span", {
                    target: "e1g9fx421"
                })({
                    name: "vk99or",
                    styles: "color:#f6de09;font-weight:bold"
                }),
                K = (0, a.A)(s.OV.withComponent(o.N_, {
                    target: "e1g9fx424"
                }), {
                    target: "e1g9fx420"
                })({
                    name: "x0zk7b",
                    styles: "flex:0 0 auto;&:hover{text-decoration:none;}"
                })
        },
        46708(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n(58168),
                a = n(5556),
                l = n.n(a),
                o = n(96540),
                c = n(15033),
                i = function(e) {
                    var t;
                    return o.createElement(c.mI, (0, r.A)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            i.propTypes = {
                world: l().shape({
                    id: l().string,
                    name: l().string,
                    releaseStatus: l().oneOf(["public", "private"]),
                    occupants: l().number,
                    favorites: l().number,
                    visits: l().number,
                    updated_at: l().string,
                    created_at: l().string,
                    tags: l().arrayOf(l().string),
                    unityPackages: l().arrayOf(l().shape({
                        platform: l().string
                    }))
                }).isRequired,
                fieldsList: l().arrayOf(l().string)
            };
            const s = i
        },
        99871(e, t, n) {
            "use strict";
            n.d(t, {
                o: () => a
            });
            var r = n(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getInfoPushData: e.query({
                                query: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.include;
                                    return {
                                        url: "infoPush",
                                        params: {
                                            include: void 0 === t ? ["user-all"] : t,
                                            require: e.require
                                        }
                                    }
                                },
                                providesTags: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = n.include,
                                        a = void 0 === r ? ["user-all"] : r,
                                        l = n.require;
                                    return [{
                                        type: "InfoPushData",
                                        id: {
                                            include: a,
                                            require: void 0 === l ? [] : l
                                        }
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["InfoPushData"]
                }),
                a = r.useGetInfoPushDataQuery
        },
        7651(e, t, n) {
            e.exports = {
                srcSet: n.p + "6e468e6ae59e609a-272w.png 272w",
                images: [{
                    path: n.p + "6e468e6ae59e609a-272w.png",
                    width: 272,
                    height: 223
                }],
                src: n.p + "6e468e6ae59e609a-272w.png",
                toString: function() {
                    return n.p + "6e468e6ae59e609a-272w.png"
                },
                width: 272,
                height: 223
            }
        },
        66829(e, t, n) {
            e.exports = {
                srcSet: n.p + "480a07033ee5c228-545w.png 545w",
                images: [{
                    path: n.p + "480a07033ee5c228-545w.png",
                    width: 545,
                    height: 447
                }],
                src: n.p + "480a07033ee5c228-545w.png",
                toString: function() {
                    return n.p + "480a07033ee5c228-545w.png"
                },
                width: 545,
                height: 447
            }
        },
        17917(e, t, n) {
            e.exports = {
                srcSet: n.p + "c7fb16f1c42f6e98-1184w.jpg 1184w",
                images: [{
                    path: n.p + "c7fb16f1c42f6e98-1184w.jpg",
                    width: 1184,
                    height: 194
                }],
                src: n.p + "c7fb16f1c42f6e98-1184w.jpg",
                toString: function() {
                    return n.p + "c7fb16f1c42f6e98-1184w.jpg"
                },
                width: 1184,
                height: 194
            }
        },
        91700(e, t, n) {
            e.exports = {
                srcSet: n.p + "d2bd24ac12140a7d-2369w.jpg 2369w",
                images: [{
                    path: n.p + "d2bd24ac12140a7d-2369w.jpg",
                    width: 2369,
                    height: 388
                }],
                src: n.p + "d2bd24ac12140a7d-2369w.jpg",
                toString: function() {
                    return n.p + "d2bd24ac12140a7d-2369w.jpg"
                },
                width: 2369,
                height: 388
            }
        },
        50481(e, t, n) {
            e.exports = {
                srcSet: n.p + "004e049255f8944f-280w.png 280w",
                images: [{
                    path: n.p + "004e049255f8944f-280w.png",
                    width: 280,
                    height: 243
                }],
                src: n.p + "004e049255f8944f-280w.png",
                toString: function() {
                    return n.p + "004e049255f8944f-280w.png"
                },
                width: 280,
                height: 243
            }
        },
        61747(e, t, n) {
            e.exports = {
                srcSet: n.p + "d53ae47c8bd8da77-561w.png 561w",
                images: [{
                    path: n.p + "d53ae47c8bd8da77-561w.png",
                    width: 561,
                    height: 487
                }],
                src: n.p + "d53ae47c8bd8da77-561w.png",
                toString: function() {
                    return n.p + "d53ae47c8bd8da77-561w.png"
                },
                width: 561,
                height: 487
            }
        }
    }
]);
//# sourceMappingURL=416f712b7aeab9b0c76471fe67adcf72d9467b24e9d0e4b03e153db04a116f20.js.map