(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7511], {
        77511: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => Q
            });
            var n = r(42138),
                a = r(4965),
                l = r(67294),
                o = r(79655),
                c = r(95896),
                i = r(37463),
                s = r(50048),
                u = r(17383),
                d = (r(22202), r(82197)),
                w = r(64358),
                p = r(54546),
                m = r(65394),
                g = r(85020),
                h = r(45697),
                f = r.n(h),
                v = r(87462),
                b = r(45987),
                y = r(93261),
                x = r(78666),
                E = ["groupId"],
                k = function(e) {
                    var t = e.groupId,
                        r = void 0 === t ? null : t,
                        n = (0, b.Z)(e, E),
                        a = (0, y.r5)({
                            groupId: r
                        }, {
                            skip: null === r
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === r || s ? null : c ? l.createElement(i.UU, (0, v.Z)({
                        width: "auto",
                        height: "250px"
                    }, n)) : u ? l.createElement(x.Z, (0, v.Z)({
                        group: o
                    }, n)) : void 0
                };
            k.propTypes = {
                groupId: f().string
            };
            const S = k;
            var N = function(e) {
                var t = e.title,
                    r = e.groupIds,
                    n = void 0 === r ? [] : r,
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
                }), [n]);
                var v = (0, l.useMemo)((function() {
                        return !!f.current && f.current.scrollLeft >= f.current.scrollWidth - f.current.offsetWidth
                    }), [w]),
                    b = (0, l.useMemo)((function() {
                        return !f.current || f.current.scrollLeft <= 200
                    }), [w]);
                return n.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: f,
                    onScroll: function(e) {
                        return h(e.currentTarget.scrollLeft)
                    },
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                }, n.map((function(e) {
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
            var Z = r(1208),
                C = r(89182),
                L = ["worldId"],
                R = function(e) {
                    var t = e.worldId,
                        r = void 0 === t ? null : t,
                        n = (0, b.Z)(e, L),
                        a = (0, Z.Vw)({
                            worldId: r
                        }, {
                            skip: null === r
                        }),
                        o = a.data,
                        c = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === r || s ? null : c ? l.createElement(i.UU, (0, v.Z)({
                        width: "auto",
                        height: "420px"
                    }, n)) : u ? l.createElement(C.Z, (0, v.Z)({
                        world: o
                    }, n)) : void 0
                };
            R.propTypes = {
                worldId: f().string
            };
            const T = R;
            var j = function(e) {
                var t = e.title,
                    r = e.worldIds,
                    n = void 0 === r ? [] : r,
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
                }), [n]);
                var v = (0, l.useMemo)((function() {
                        return !!f.current && f.current.scrollLeft >= f.current.scrollWidth - f.current.offsetWidth
                    }), [w]),
                    b = (0, l.useMemo)((function() {
                        return !f.current || f.current.scrollLeft <= 300
                    }), [w]);
                return n.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: f,
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth",
                    onScroll: function(e) {
                        return h(e.currentTarget.scrollLeft)
                    }
                }, n.map((function(e) {
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
            j.propTypes = {
                title: f().string.isRequired,
                worldIds: f().arrayOf(f().string).isRequired
            };
            const q = j;
            var W = r(40433),
                P = r.n(W),
                A = r(60542),
                M = r.n(A),
                _ = r(43e3),
                z = r.n(_),
                U = r(15630),
                V = r.n(U),
                F = r(69595),
                O = r.n(F),
                D = r(96752),
                $ = r.n(D);
            const Q = function() {
                var e, t, r = (0, u.Tu)({
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
                            var t = Array.isArray(e.ids) && (0, w.Sy)((0, n.Z)(e.ids)).slice(0, e.maxCells || void 0) || [];
                            switch (e.type) {
                                case "worlds":
                                    var r, a, o, c;
                                    return l.createElement(q, {
                                        key: "".concat(e.type, ":").concat(null !== (r = null === (a = e.name) || void 0 === a ? void 0 : a.fallback) && void 0 !== r ? r : e.name, ":").concat(e.maxCells),
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
                    f = (null == r || null === (t = r.economyAccount) || void 0 === t ? void 0 : t.accountSellerStatus) === c.dd.INVITED;
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
                })), l.createElement(Y, {
                    className: "fw-normal my-3 text-center"
                }, "Welcome to ", l.createElement("br", null), l.createElement(B, null, "VRChat Marketplace")), l.createElement("picture", {
                    className: "tw--mt-4 tw--mb-8 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(O(), ", ").concat($(), " 2x")
                }), l.createElement("img", {
                    src: O(),
                    width: "280",
                    alt: "Emoji of the VRChat Plus logo, a dollar bill, and a smiling face with heart eyes"
                }))), l.createElement(i.Ao, {
                    className: "d-flex flex-row flex-wrap tw-gap-12 tw-p-12"
                }, l.createElement("div", {
                    style: {
                        flex: "1 1 300px"
                    }
                }, l.createElement("h4", null, "VRChat Marketplace is here!"), l.createElement("p", null, "VRChat Marketplace is a place where you can manage your VRChat Plus membership and buy or sell stuff such as Worlds, Group Roles, etc, whether you want to support your favorite creators or just to become a mighty creator, this is the place for you!"), l.createElement("p", null, "To learn more about the VRChat Marketplace, please head to", " ", l.createElement("a", {
                    href: "https://help.vrchat.com/hc/en-us/articles/23255458227987-Creator-Economy-Frequently-Asked-Questions",
                    target: "_blank",
                    rel: "noreferrer"
                }, "our FAQ page"), "."), l.createElement("div", {
                    className: "d-flex flex-row flex-wrap gap-2 align-items-start"
                }, l.createElement(K, {
                    to: "../wallet"
                }, "Check my Wallet"), f && l.createElement(K, {
                    to: "../storefront"
                }, "Manage my Store"))), l.createElement("div", {
                    style: {
                        flex: "1 1 240px",
                        maxWidth: 560
                    }
                }, l.createElement("div", {
                    style: {
                        width: "100%",
                        aspectRatio: 16 / 9
                    }
                }, l.createElement("iframe", {
                    width: "560",
                    height: "315",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "https://www.youtube-nocookie.com/embed/mgk7mpxEjSU?si=bbXFx3EFYA3doKSz&rel=0&cc_load_policy=1",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0
                })))), p ? l.createElement(i.UU, null) : h)
            };
            var G = (0, a.Z)(i.oI, {
                    target: "e1g9fx423"
                })("background-color:#715900;background-size:cover;background-position:center;background-image:url(", z(), ");@media (min-device-pixel-ratio: 1.5){background-image:url(", V(), ");}border:none;padding:0;&>picture:last-child{z-index:1;}@media (max-width: 479px){&>picture:last-child{display:none;}}"),
                Y = (0, a.Z)("h3", {
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
                K = (0, a.Z)(s.Sn.withComponent(o.rU, {
                    target: "e1g9fx424"
                }), {
                    target: "e1g9fx420"
                })({
                    name: "x0zk7b",
                    styles: "flex:0 0 auto;&:hover{text-decoration:none;}"
                })
        },
        89182: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(87462),
                a = r(45697),
                l = r.n(a),
                o = r(67294),
                c = r(37463),
                i = function(e) {
                    var t;
                    return o.createElement(c.uW, (0, n.Z)({
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
        82197: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => n
            });
            var n = r(61509).S.injectEndpoints({
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
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    n = r.include,
                                    a = void 0 === n ? ["user-all"] : n,
                                    l = r.require;
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
        40433: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "6e468e6ae59e609a-272w.png 272w",
                images: [{
                    path: r.p + "6e468e6ae59e609a-272w.png",
                    width: 272,
                    height: 223
                }],
                src: r.p + "6e468e6ae59e609a-272w.png",
                toString: function() {
                    return r.p + "6e468e6ae59e609a-272w.png"
                },
                width: 272,
                height: 223
            }
        },
        60542: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "480a07033ee5c228-545w.png 545w",
                images: [{
                    path: r.p + "480a07033ee5c228-545w.png",
                    width: 545,
                    height: 447
                }],
                src: r.p + "480a07033ee5c228-545w.png",
                toString: function() {
                    return r.p + "480a07033ee5c228-545w.png"
                },
                width: 545,
                height: 447
            }
        },
        43e3: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "c7fb16f1c42f6e98-1184w.jpg 1184w",
                images: [{
                    path: r.p + "c7fb16f1c42f6e98-1184w.jpg",
                    width: 1184,
                    height: 194
                }],
                src: r.p + "c7fb16f1c42f6e98-1184w.jpg",
                toString: function() {
                    return r.p + "c7fb16f1c42f6e98-1184w.jpg"
                },
                width: 1184,
                height: 194
            }
        },
        15630: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "d2bd24ac12140a7d-2369w.jpg 2369w",
                images: [{
                    path: r.p + "d2bd24ac12140a7d-2369w.jpg",
                    width: 2369,
                    height: 388
                }],
                src: r.p + "d2bd24ac12140a7d-2369w.jpg",
                toString: function() {
                    return r.p + "d2bd24ac12140a7d-2369w.jpg"
                },
                width: 2369,
                height: 388
            }
        },
        69595: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "004e049255f8944f-280w.png 280w",
                images: [{
                    path: r.p + "004e049255f8944f-280w.png",
                    width: 280,
                    height: 243
                }],
                src: r.p + "004e049255f8944f-280w.png",
                toString: function() {
                    return r.p + "004e049255f8944f-280w.png"
                },
                width: 280,
                height: 243
            }
        },
        96752: (e, t, r) => {
            e.exports = {
                srcSet: r.p + "d53ae47c8bd8da77-561w.png 561w",
                images: [{
                    path: r.p + "d53ae47c8bd8da77-561w.png",
                    width: 561,
                    height: 487
                }],
                src: r.p + "d53ae47c8bd8da77-561w.png",
                toString: function() {
                    return r.p + "d53ae47c8bd8da77-561w.png"
                },
                width: 561,
                height: 487
            }
        }
    }
]);
//# sourceMappingURL=e927894ccc2db81400e90afc8aacd1ef0f11c1f9f3608f99a1c64c76f98705ad.js.map