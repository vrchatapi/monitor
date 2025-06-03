(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7511], {
        77511: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Q
            });
            var r = n(42138),
                a = n(4965),
                l = n(67294),
                o = n(79655),
                c = n(95896),
                i = n(37463),
                s = n(50048),
                u = n(17383),
                d = (n(22202), n(82197)),
                w = n(64358),
                p = n(54546),
                m = n(65394),
                g = n(85020),
                h = n(45697),
                f = n.n(h),
                v = n(87462),
                b = n(45987),
                y = n(93261),
                E = n(78666),
                x = ["groupId"],
                k = function(e) {
                    var t = e.groupId,
                        n = void 0 === t ? null : t,
                        r = (0, b.Z)(e, x),
                        a = (0, y.r5)({
                            groupId: n
                        }, {
                            skip: null === n
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === n || s ? null : c ? l.createElement(i.UU, (0, v.Z)({
                        width: "auto",
                        height: "250px"
                    }, r)) : u ? l.createElement(E.Z, (0, v.Z)({
                        group: o
                    }, r)) : void 0
                };
            k.propTypes = {
                groupId: f().string
            };
            const S = k;
            var N = function(e) {
                var t = e.title,
                    n = e.groupIds,
                    r = void 0 === n ? [] : n,
                    a = (0, l.useState)(!0),
                    o = (0, p.Z)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, p.Z)(u, 2),
                    w = d[0],
                    h = d[1],
                    f = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    f.current && s(f.current.scrollWidth <= f.current.offsetWidth)
                }), [r]);
                var v = (0, l.useMemo)((function() {
                        return !!f.current && f.current.scrollLeft >= f.current.scrollWidth - f.current.offsetWidth
                    }), [w]),
                    b = (0, l.useMemo)((function() {
                        return !f.current || f.current.scrollLeft <= 200
                    }), [w]);
                return r.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: f,
                    onScroll: function(e) {
                        return h(e.currentTarget.scrollLeft)
                    },
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                }, r.map((function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-mr-4 tw-mt-4 tw-snap-center tw-w-80 tw-inline-block tw-h-64 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(S, {
                        groupId: e
                    }))
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), f.current.scrollLeft -= 200
                    }
                }, l.createElement(i.$1, {
                    icon: g.A3,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v || c ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), f.current.scrollLeft += 200
                    }
                }, l.createElement(i.$1, {
                    icon: m._t,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            N.propTypes = {
                title: f().string.isRequired,
                groupIds: f().arrayOf(f().string).isRequired
            };
            const I = N;
            var C = n(1208),
                Z = n(89182),
                L = ["worldId"],
                R = function(e) {
                    var t = e.worldId,
                        n = void 0 === t ? null : t,
                        r = (0, b.Z)(e, L),
                        a = (0, C.Vw)({
                            worldId: n
                        }, {
                            skip: null === n
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === n || s ? null : c ? l.createElement(i.UU, (0, v.Z)({
                        width: "auto",
                        height: "420px"
                    }, r)) : u ? l.createElement(Z.Z, (0, v.Z)({
                        world: o
                    }, r)) : void 0
                };
            R.propTypes = {
                worldId: f().string
            };
            const T = R;
            var q = function(e) {
                var t = e.title,
                    n = e.worldIds,
                    r = void 0 === n ? [] : n,
                    a = (0, l.useState)(!0),
                    o = (0, p.Z)(a, 2),
                    c = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, p.Z)(u, 2),
                    w = d[0],
                    h = d[1],
                    f = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    f.current && s(f.current.scrollWidth <= f.current.offsetWidth)
                }), [r]);
                var v = (0, l.useMemo)((function() {
                        return !!f.current && f.current.scrollLeft >= f.current.scrollWidth - f.current.offsetWidth
                    }), [w]),
                    b = (0, l.useMemo)((function() {
                        return !f.current || f.current.scrollLeft <= 300
                    }), [w]);
                return r.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: f,
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth",
                    onScroll: function(e) {
                        return h(e.currentTarget.scrollLeft)
                    }
                }, r.map((function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-snap-center tw-w-80 tw-inline-block tw-h-98 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(T, {
                        worldId: e,
                        className: "tw-mr-4 tw-mb-4"
                    }))
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), f.current.scrollLeft -= 300
                    }
                }, l.createElement(i.$1, {
                    icon: g.A3,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v || c ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), f.current.scrollLeft += 300
                    }
                }, l.createElement(i.$1, {
                    icon: m._t,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            q.propTypes = {
                title: f().string.isRequired,
                worldIds: f().arrayOf(f().string).isRequired
            };
            const W = q;
            var j = n(40433),
                P = n.n(j),
                A = n(60542),
                M = n.n(A),
                V = n(43e3),
                z = n.n(V),
                _ = n(15630),
                U = n.n(_),
                D = n(69595),
                O = n.n(D),
                $ = n(96752),
                F = n.n($);
            const Q = function() {
                var e, t, n = (0, u.Tu)({
                        withEconomyAccount: !0
                    }).user,
                    a = (0, d.l)({
                        require: ["marketplace-page", "content-compatibility-pc"]
                    }),
                    o = a.data,
                    s = void 0 === o ? [] : o,
                    p = a.isLoading,
                    m = null == s || null === (e = s[0]) || void 0 === e ? void 0 : e.data,
                    g = null == m ? void 0 : m.categories,
                    h = l.useMemo((function() {
                        var e;
                        return null == g || null === (e = g.map((function(e) {
                            var t = Array.isArray(e.ids) && (0, w.Sy)((0, r.Z)(e.ids)).slice(0, e.maxCells || void 0) || [];
                            switch (e.type) {
                                case "worlds":
                                    var n, a, o, c;
                                    return l.createElement(W, {
                                        key: "".concat(e.type, ":").concat(null !== (n = null === (a = e.name) || void 0 === a ? void 0 : a.fallback) && void 0 !== n ? n : e.name, ":").concat(e.maxCells),
                                        title: null !== (o = null === (c = e.name) || void 0 === c ? void 0 : c.fallback) && void 0 !== o ? o : e.name,
                                        worldIds: t
                                    });
                                case "groups":
                                    var i, s, u, d;
                                    return l.createElement(I, {
                                        key: "".concat(e.type, ":").concat(null !== (i = null === (s = e.name) || void 0 === s ? void 0 : s.fallback) && void 0 !== i ? i : e.name, ":").concat(e.maxCells),
                                        title: null !== (u = null === (d = e.name) || void 0 === d ? void 0 : d.fallback) && void 0 !== u ? u : e.name,
                                        groupIds: t
                                    });
                                default:
                                    return null
                            }
                        }))) || void 0 === e ? void 0 : e.filter((function(e) {
                            return !!e
                        }))
                    }), [g]),
                    f = (null == n || null === (t = n.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === c.dd.INVITED;
                return l.createElement(l.Fragment, null, l.createElement(G, {
                    className: "flex-row px-1 gap-1 justify-content-evenly align-items-center"
                }, l.createElement("picture", {
                    className: "tw--mt-4 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(P(), ", ").concat(M(), " 2x")
                }), l.createElement("img", {
                    src: P(),
                    width: "272",
                    alt: "A cute catgirl smiles and points at the viewer"
                })), l.createElement(H, {
                    className: "fw-normal my-3 text-center"
                }, "Welcome to ", l.createElement("br", null), l.createElement(B, null, "VRChat Marketplace")), l.createElement("picture", {
                    className: "tw--mt-4 tw--mb-8 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(O(), ", ").concat(F(), " 2x")
                }), l.createElement("img", {
                    src: O(),
                    width: "280",
                    alt: "Emoji of the VRChat Plus logo, a dollar bill, and a smiling face with heart eyes"
                }))), l.createElement(i.Ao, {
                    className: "d-flex flex-row flex-wrap tw-gap-12 tw-p-12"
                }, l.createElement("div", null, l.createElement("h4", null, "Welcome to the VRChat Marketplace!"), l.createElement("p", null, "The VRChat Marketplace is your gateway to premium world features, group perks, and avatars made by our community. Discover and purchase listings inside VRChat using your VRChat Credits."), l.createElement("p", null, "To learn more about the VRChat Marketplace, please head to", " ", l.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/23255458227987-Creator-Economy-Frequently-Asked-Questions",
                    target: "_blank",
                    rel: "noreferrer"
                }, "our FAQ page"), "."), l.createElement("p", null, "Need to manage your VRChat Plus membership? Head to the Wallet tab to review or update your subscription details."), l.createElement("div", {
                    className: "d-flex flex-row flex-wrap gap-2 align-items-start"
                }, l.createElement(J, {
                    to: "../wallet"
                }, "Check my Wallet"), f && l.createElement(J, {
                    to: "../storefront"
                }, "Manage my Store")))), p ? l.createElement(i.UU, null) : h)
            };
            var G = (0, a.Z)(i.oI, {
                    target: "e1g9fx423"
                })("background-color:#715900;background-size:cover;background-position:center;background-image:url(", z(), ");@media (min-device-pixel-ratio: 1.5){background-image:url(", U(), ");}border:none;padding:0;&>picture:last-child{z-index:1;}@media (max-width: 479px){&>picture:last-child{display:none;}}"),
                H = (0, a.Z)("h3", {
                    target: "e1g9fx422"
                })({
                    name: "fxe5j0",
                    styles: "&:after{content:none;}@media (min-width: 1680px){font-size:2.25rem;}"
                }),
                B = (0, a.Z)("span", {
                    target: "e1g9fx421"
                })({
                    name: "vk99or",
                    styles: "color:#f6de09;font-weight:bold"
                }),
                J = (0, a.Z)(s.Sn.withComponent(o.rU, {
                    target: "e1g9fx424"
                }), {
                    target: "e1g9fx420"
                })({
                    name: "x0zk7b",
                    styles: "flex:0 0 auto;&:hover{text-decoration:none;}"
                })
        },
        89182: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(87462),
                a = n(45697),
                l = n.n(a),
                o = n(67294),
                c = n(37463),
                i = function(e) {
                    var t;
                    return o.createElement(c.uW, (0, r.Z)({
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
        82197: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => r
            });
            var r = n(61509).S.injectEndpoints({
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
            }).useGetInfoPushDataQuery
        },
        40433: (e, t, n) => {
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
        60542: (e, t, n) => {
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
        43e3: (e, t, n) => {
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
        15630: (e, t, n) => {
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
        69595: (e, t, n) => {
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
        96752: (e, t, n) => {
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
//# sourceMappingURL=0946ef9b347eee5d523a1ec42e8de9bca51a6dfcddf581761b21da4f56202db1.js.map