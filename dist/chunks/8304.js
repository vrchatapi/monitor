"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8304], {
        15558: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => j
            });
            var n = r(42138),
                a = r(4965),
                l = r(67294),
                o = r(79655),
                c = r(37463),
                i = r(50048),
                s = r(22202),
                u = r(82197),
                d = r(64358),
                w = r(54546),
                m = r(65394),
                p = r(85020),
                f = r(45697),
                g = r.n(f),
                h = r(87462),
                b = r(45987),
                v = r(93261),
                y = r(78666),
                E = ["groupId"],
                x = function(e) {
                    var t = e.groupId,
                        r = void 0 === t ? null : t,
                        n = (0, b.Z)(e, E),
                        a = (0, v.r5)({
                            groupId: r
                        }, {
                            skip: null === r
                        }),
                        o = a.data,
                        i = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === r || s ? null : i ? l.createElement(c.UU, (0, h.Z)({
                        width: "auto",
                        height: "250px"
                    }, n)) : u ? l.createElement(y.Z, (0, h.Z)({
                        group: o
                    }, n)) : void 0
                };
            x.propTypes = {
                groupId: g().string
            };
            const k = x;
            var N = function(e) {
                var t = e.title,
                    r = e.groupIds,
                    n = void 0 === r ? [] : r,
                    a = (0, l.useState)(!0),
                    o = (0, w.Z)(a, 2),
                    i = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, w.Z)(u, 2),
                    f = d[0],
                    g = d[1],
                    h = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    h.current && s(h.current.scrollWidth <= h.current.offsetWidth)
                }), [n]);
                var b = (0, l.useMemo)((function() {
                        return !!h.current && h.current.scrollLeft >= h.current.scrollWidth - h.current.offsetWidth
                    }), [f]),
                    v = (0, l.useMemo)((function() {
                        return !h.current || h.current.scrollLeft <= 200
                    }), [f]);
                return n.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: h,
                    onScroll: function(e) {
                        return g(e.currentTarget.scrollLeft)
                    },
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth"
                }, n.map((function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-mr-4 tw-mt-4 tw-snap-center tw-w-80 tw-inline-block tw-h-64 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(k, {
                        groupId: e
                    }))
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft -= 200
                    }
                }, l.createElement(c.$1, {
                    icon: p.A3,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-40 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b || i ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft += 200
                    }
                }, l.createElement(c.$1, {
                    icon: m._t,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            N.propTypes = {
                title: g().string.isRequired,
                groupIds: g().arrayOf(g().string).isRequired
            };
            const I = N;
            var Z = r(1208),
                C = r(89182),
                S = ["worldId"],
                L = function(e) {
                    var t = e.worldId,
                        r = void 0 === t ? null : t,
                        n = (0, b.Z)(e, S),
                        a = (0, Z.Vw)({
                            worldId: r
                        }, {
                            skip: null === r
                        }),
                        o = a.data,
                        i = a.isLoading,
                        s = a.isError,
                        u = a.isSuccess;
                    return null === r || s ? null : i ? l.createElement(c.UU, (0, h.Z)({
                        width: "auto",
                        height: "420px"
                    }, n)) : u ? l.createElement(C.Z, (0, h.Z)({
                        world: o
                    }, n)) : void 0
                };
            L.propTypes = {
                worldId: g().string
            };
            const R = L;
            var q = function(e) {
                var t = e.title,
                    r = e.worldIds,
                    n = void 0 === r ? [] : r,
                    a = (0, l.useState)(!0),
                    o = (0, w.Z)(a, 2),
                    i = o[0],
                    s = o[1],
                    u = (0, l.useState)(null),
                    d = (0, w.Z)(u, 2),
                    f = d[0],
                    g = d[1],
                    h = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    h.current && s(h.current.scrollWidth <= h.current.offsetWidth)
                }), [n]);
                var b = (0, l.useMemo)((function() {
                        return !!h.current && h.current.scrollLeft >= h.current.scrollWidth - h.current.offsetWidth
                    }), [f]),
                    v = (0, l.useMemo)((function() {
                        return !h.current || h.current.scrollLeft <= 300
                    }), [f]);
                return n.length < 1 ? null : l.createElement("div", {
                    className: "tw-py-6 tw-relative tw-w-full"
                }, l.createElement("h2", {
                    className: "tw-text-4xl tw-no-underline tw-font-semibold tw-inline-block tw-ml-1.5 tw-mb-0"
                }, t), l.createElement("div", {
                    ref: h,
                    className: "tw-snap-x tw-whitespace-nowrap tw-overflow-x-scroll tw-snap-mandatory tw-scroll-smooth",
                    onScroll: function(e) {
                        return g(e.currentTarget.scrollLeft)
                    }
                }, n.map((function(e) {
                    return l.createElement("div", {
                        key: e,
                        className: "tw-snap-center tw-w-80 tw-inline-block tw-h-98 tw-scroll-ml-6 tw-snap-always"
                    }, l.createElement(R, {
                        worldId: e,
                        className: "tw-mr-4 tw-mb-4"
                    }))
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--left-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(v ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft -= 300
                    }
                }, l.createElement(c.$1, {
                    icon: p.A3,
                    className: "tw-text-highlight tw-text-2xl"
                })), l.createElement("button", {
                    className: "\n            tw-bg-button-bg tw-absolute tw--right-3 tw-top-60 tw-border-none tw-rounded-lg tw-w-12 tw-h-14 tw-cursor-pointer\n            ".concat(b || i ? "tw-hidden" : "", "\n            tw-z-30\n          "),
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), h.current.scrollLeft += 300
                    }
                }, l.createElement(c.$1, {
                    icon: m._t,
                    className: "tw-text-highlight tw-text-2xl"
                }))))
            };
            q.propTypes = {
                title: g().string.isRequired,
                worldIds: g().arrayOf(g().string).isRequired
            };
            const T = q,
                W = r.p + "c00f617a54a91f792d64abc8156a8d19b1aafa2e37f6a8c91d289fdcad8942d0.png",
                P = r.p + "26a8c7c1d80c9284049cb9b9290e06842b7363aec7d6121bfcb715b598edd7ea.png",
                M = r.p + "83395e4ec5cb1ec970a8546e2fb9228d8ea4a489f82e070cb0d8b80984b28471.jpg",
                _ = r.p + "b654a9b47cfb624de21610f75384f02b23046f0b2f689bd21cdb90de2767697a.jpg",
                z = r.p + "96a0834f29991ddc3ce7c9588a39042ec92a12970ca7271722afc84246e07e9d.png",
                A = r.p + "63b7cd330068417e8ec6d47cfec1d6f48ff1001a163b9bc08f2c68e30fc23a43.png";
            const j = function() {
                var e, t = (0, s.q7)().data,
                    r = void 0 === t ? [] : t,
                    a = (0, u.l)({
                        require: ["marketplace-page", "content-compatibility-pc"]
                    }),
                    o = a.data,
                    i = void 0 === o ? [] : o,
                    w = a.isLoading,
                    m = null == i || null === (e = i[0]) || void 0 === e ? void 0 : e.data,
                    p = null == m ? void 0 : m.categories,
                    f = l.useMemo((function() {
                        var e;
                        return null == p || null === (e = p.map((function(e) {
                            var t = Array.isArray(e.ids) && (0, d.Sy)((0, n.Z)(e.ids)).slice(0, e.maxCells || void 0) || [];
                            switch (e.type) {
                                case "worlds":
                                    var r, a, o, c;
                                    return l.createElement(T, {
                                        key: "".concat(e.type, ":").concat(null !== (r = null === (a = e.name) || void 0 === a ? void 0 : a.fallback) && void 0 !== r ? r : e.name, ":").concat(e.maxCells),
                                        title: null !== (o = null === (c = e.name) || void 0 === c ? void 0 : c.fallback) && void 0 !== o ? o : e.name,
                                        worldIds: t
                                    });
                                case "groups":
                                    var i, s, u, w;
                                    return l.createElement(I, {
                                        key: "".concat(e.type, ":").concat(null !== (i = null === (s = e.name) || void 0 === s ? void 0 : s.fallback) && void 0 !== i ? i : e.name, ":").concat(e.maxCells),
                                        title: null !== (u = null === (w = e.name) || void 0 === w ? void 0 : w.fallback) && void 0 !== u ? u : e.name,
                                        groupIds: t
                                    });
                                default:
                                    return null
                            }
                        }))) || void 0 === e ? void 0 : e.filter((function(e) {
                            return !!e
                        }))
                    }), [p]),
                    g = null == r ? void 0 : r.includes("permission-creator-preview");
                return l.createElement(l.Fragment, null, l.createElement(U, {
                    className: "flex-row px-1 gap-1 justify-content-evenly align-items-center"
                }, l.createElement("picture", {
                    className: "tw--mt-4 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(W, ", ").concat(P, " 2x")
                }), l.createElement("img", {
                    src: W,
                    width: "272",
                    alt: "A cute catgirl smiles and points at the viewer"
                })), l.createElement(V, {
                    className: "fw-normal my-3 text-center"
                }, "Welcome to ", l.createElement("br", null), l.createElement(F, null, "VRChat Marketplace")), l.createElement("picture", {
                    className: "tw--mt-4 tw--mb-8 tw-pointer-events-none"
                }, l.createElement("source", {
                    srcSet: "".concat(z, ", ").concat(A, " 2x")
                }), l.createElement("img", {
                    src: z,
                    width: "280",
                    alt: "Emoji of the VRChat Plus logo, a dollar bill, and a smiling face with heart eyes"
                }))), l.createElement(c.Ao, {
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
                }, l.createElement(O, {
                    to: "../wallet"
                }, "Check my Wallet"), g && l.createElement(O, {
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
                })))), w ? l.createElement(c.UU, null) : f)
            };
            var U = (0, a.Z)(c.oI, {
                    target: "e1g9fx423"
                })("background-color:#715900;background-size:cover;background-position:center;background-image:url(", M, ");@media (min-device-pixel-ratio: 1.5){background-image:url(", _, ");}border:none;padding:0;&>picture:last-child{z-index:1;}@media (max-width: 479px){&>picture:last-child{display:none;}}"),
                V = (0, a.Z)("h3", {
                    target: "e1g9fx422"
                })({
                    name: "fxe5j0",
                    styles: "&:after{content:none;}@media (min-width: 1680px){font-size:2.25rem;}"
                }),
                F = (0, a.Z)("span", {
                    target: "e1g9fx421"
                })({
                    name: "vk99or",
                    styles: "color:#f6de09;font-weight:bold"
                }),
                O = (0, a.Z)(i.Sn.withComponent(o.rU, {
                    target: "e1g9fx424"
                }), {
                    target: "e1g9fx420"
                })({
                    name: "x0zk7b",
                    styles: "flex:0 0 auto;&:hover{text-decoration:none;}"
                })
        },
        89182: (e, t, r) => {
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
        }
    }
]);
//# sourceMappingURL=c4b455170a27e2d6e052c656605acf7f2f08469c4230492f712d4058db577873.js.map