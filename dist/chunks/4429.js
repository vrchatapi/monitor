"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4429], {
        53135(e, t) {
            var n = "angle-left",
                r = [8249],
                a = "f104",
                o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
            t.mw = {
                prefix: "fas",
                iconName: n,
                icon: [320, 512, r, a, o]
            }, t.Ue = t.mw
        },
        44741(e, t, n) {
            n.d(t, {
                F2: () => l,
                IO: () => i,
                Uf: () => c,
                Wm: () => o
            });
            var r = n(72505),
                a = n.n(r),
                o = function(e) {
                    var t = e.type;
                    return {
                        type: "LOAD_FAVORITE_GROUP_TYPE",
                        payload: a().get(window.apiUrl("/api/1/favorite/groups?n=50&type=".concat(t)), {}),
                        meta: {
                            type: t
                        }
                    }
                },
                l = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_AVATARS",
                        payload: a().get(window.apiUrl("/api/1/avatars/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                c = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_WORLDS",
                        payload: a().get(window.apiUrl("/api/1/worlds/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                i = function(e) {
                    var t = e.favoriteId,
                        n = e.type,
                        r = e.group;
                    return {
                        type: "REMOVE_FAVORITE",
                        payload: a().delete(window.apiUrl("/api/1/favorites/".concat(t)), {}),
                        meta: {
                            favoriteId: t,
                            type: n,
                            group: r
                        }
                    }
                }
        },
        54429(e, t, n) {
            n.r(t), n.d(t, {
                default: () => C
            });
            var r = n(64467),
                a = n(96540),
                o = n(6376),
                l = n(5826),
                c = n(39704),
                i = n(45662),
                s = n(57115),
                u = n(10467),
                d = n(82544),
                p = n(70129),
                f = n(82862),
                m = n(53135),
                v = n(54756),
                g = n.n(v),
                b = n(72505),
                h = n.n(b),
                w = n(50779),
                y = n(15033),
                x = n(3385),
                E = n(64850),
                k = n(38275),
                A = n(84976),
                O = n(25538),
                N = n(7800);
            var P = [{
                value: 1,
                symbol: ""
            }, {
                value: 1e3,
                symbol: "k"
            }, {
                value: 1e6,
                symbol: "M"
            }, {
                value: 1e9,
                symbol: "G"
            }, {
                value: 1e12,
                symbol: "T"
            }, {
                value: 1e15,
                symbol: "P"
            }, {
                value: 1e18,
                symbol: "E"
            }];
            const S = a.forwardRef(function(e, t) {
                var n, r, o = e.world,
                    l = e.onDelete,
                    c = a.useState(!1),
                    i = (0, d.A)(c, 2),
                    s = i[0],
                    u = i[1];
                return o.id ? a.createElement(j, {
                    style: {
                        backgroundImage: "url(".concat(o.thumbnailImageUrl, ")")
                    },
                    ref: t
                }, !s && a.createElement(A.N_, {
                    className: "tw-absolute",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    to: "/home/world/".concat(o.id)
                }), l && a.createElement(W, {
                    onMouseEnter: function() {
                        return u(!0)
                    },
                    onMouseLeave: function() {
                        u(!1)
                    },
                    onClick: function() {
                        l()
                    }
                }, a.createElement(y.M2, {
                    icon: k.yL
                })), a.createElement(L, {
                    className: "tw-backdrop-blur tw-backdrop-saturate-200"
                }, !s && a.createElement(A.N_, {
                    className: "tw-absolute",
                    style: {
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%"
                    },
                    to: "/home/world/".concat(o.id)
                }), a.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, a.createElement(D, null, o.name), a.createElement("div", {
                    className: "tw-flex tw-text-center tw-items-center tw-justify-center"
                }, a.createElement(y.M2, {
                    icon: E.X4,
                    className: "tw-mr-1"
                }), o.occupants)), a.createElement("div", null, "by:", " ", a.createElement(A.N_, {
                    className: "tw-relative",
                    style: {
                        zIndex: 10
                    },
                    to: "/home/user/".concat(o.authorId),
                    onMouseEnter: function() {
                        return u(!0)
                    },
                    onMouseLeave: function() {
                        u(!1)
                    }
                }, o.authorName)), a.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-around tw-items-center tw-mt-2"
                }, a.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-1"
                }, a.createElement(N.A, {
                    packages: o.unityPackages,
                    formattedType: "World"
                })), a.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, a.createElement(y.M2, {
                    icon: x.yy,
                    className: "tw-mr-1",
                    style: {
                        fontSize: 24
                    }
                }), a.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, a.createElement("h4", {
                    className: "tw-m-0"
                }, (n = o.favorites, (r = P.slice().reverse().find(function(e) {
                    return n >= e.value
                })) ? (n / r.value).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + r.symbol : "0")), a.createElement("div", null, "Favorites")))))) : a.createElement(I, {
                    ref: t
                }, a.createElement(O.A, null))
            });
            var j = (0, p.A)("div", {
                    target: "e3qzuk74"
                })("position:relative;min-width:", 230, "px;height:auto;background-color:#222;border-radius:7px 20px;border:3px solid #222;margin:10px;background-size:cover;background-repeat:no-repeat;background-position:center;overflow:hidden;cursor:pointer;*{cursor:pointer;}"),
                I = (0, p.A)(j, {
                    target: "e3qzuk73"
                })({
                    name: "1gn2e5h",
                    styles: "text-align:center;padding-top:50px"
                }),
                L = (0, p.A)("div", {
                    target: "e3qzuk72"
                })({
                    name: "199m1do",
                    styles: "position:relative;top:calc(100% - 30px);background:#000000dd;width:100%;height:calc(100% - 30px);padding:3px 8px;transition:all 0.5s ease-in-out;&:hover{top:35px;}"
                }),
                D = (0, p.A)("div", {
                    target: "e3qzuk71"
                })({
                    name: "5njcc4",
                    styles: "font-weight:bold;max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"
                }),
                W = (0, p.A)("button", {
                    target: "e3qzuk70"
                })({
                    name: "1grcaxu",
                    styles: "position:absolute;top:0;right:0;padding:4px 10px;border-bottom-left-radius:10px;color:white;background-color:#c02942;border:0;transition:padding 0.1s ease-out;-webkit-box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.6);box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.6);&:hover{padding:6px 12px;}&:active{background-color:#d73a55;}"
                });
            const z = function(e) {
                var t = e.row,
                    n = e.index,
                    r = void 0 === n ? 0 : n,
                    l = e.id,
                    c = (0, o.d4)(function(e) {
                        return e.config.config.disableCommunityLabs
                    }),
                    i = (0, w.G)().data,
                    s = (void 0 === i ? {} : i).sdkUnityVersion,
                    p = a.useState([]),
                    v = (0, d.A)(p, 2),
                    b = v[0],
                    x = v[1],
                    E = a.useState(10),
                    k = (0, d.A)(E, 2),
                    A = k[0],
                    O = k[1],
                    N = a.useState(0),
                    P = (0, d.A)(N, 2),
                    j = P[0],
                    I = P[1],
                    L = a.useState(!0),
                    D = (0, d.A)(L, 2),
                    W = D[0],
                    z = D[1],
                    T = a.useState(!0),
                    H = (0, d.A)(T, 2),
                    F = H[0],
                    V = H[1],
                    C = a.useState(!0),
                    G = (0, d.A)(C, 2),
                    $ = G[0],
                    B = G[1],
                    Q = a.useRef(),
                    X = a.useRef(),
                    Y = function() {
                        var e, t, n;
                        B((null == X || null === (e = X.current) || void 0 === e ? void 0 : e.scrollLeft) >= (null == X || null === (t = X.current) || void 0 === t ? void 0 : t.scrollWidth) - (null == X || null === (n = X.current) || void 0 === n ? void 0 : n.clientWidth))
                    };
                a.useEffect(function() {
                    return window.addEventListener("resize", Y),
                        function() {
                            if (b.length <= 0) {
                                var e, n = document.querySelector(".content-scroll");
                                230 * (e = "active" === t.sortHeading || "favorite" === t.sortHeading ? 100 : Math.trunc(n.offsetWidth / 230)) < (null == n ? void 0 : n.offsetWidth) && e++, K(t, e, j), I(j + e)
                            }
                        }(),
                        function() {
                            window.removeEventListener("resize", Y)
                        }
                }, []), a.useEffect(function() {
                    var e, n, r;
                    if (Q.current) {
                        var a = document.querySelector(".content-scroll"),
                            o = new IntersectionObserver(function(e) {
                                (0, d.A)(e, 1)[0].isIntersecting && (K(t, A, j), I(j + A), o.unobserve(Q.current))
                            }, {
                                root: a,
                                rootMargin: "0px"
                            });
                        o.observe(Q.current)
                    }
                    B((null == X || null === (e = X.current) || void 0 === e ? void 0 : e.scrollLeft) >= (null == X || null === (n = X.current) || void 0 === n ? void 0 : n.scrollWidth) - (null == X || null === (r = X.current) || void 0 === r ? void 0 : r.clientWidth))
                }, [b]);
                var J = function(e, t, n, r, a, o, l, c, i, s, u, d, p, f, m, v, g) {
                        var b, h = arguments.length > 17 && void 0 !== arguments[17] ? arguments[17] : null;
                        return e = null !== (b = e) && void 0 !== b ? b : "/api/1/worlds?", null !== h && (!0 === h ? e = "".concat(e, "avatarSpecific=true&") : !1 === h && (e = "".concat(e, "avatarSpecific=false&"))), t && (e = "".concat(e, "minUnityVersion=").concat(t, "&")), n && (e = "".concat(e, "maxUnityVersion=").concat(n, "&")), r && (e = "".concat(e, "releaseStatus=").concat(r, "&")), a && (e = "".concat(e, "platform=").concat(a, "&")), o && (e = "".concat(e, "noplatform=").concat(o, "&")), l && (e = "".concat(e, "organization=").concat(l, "&")), c && (e = "".concat(e, "sort=").concat(c, "&")), null != i && (i = !!i, e = "".concat(e, "featured=").concat(i, "&")), null != s && (e = "".concat(e, "fuzzy=").concat(s, "&")), u && u.length > 0 && (e = "".concat(e, "tag=").concat(u, "&")), d && d.length > 0 && (e = "".concat(e, "notag=").concat(d, "&")), p && (e = "".concat(e, "order=").concat(p, "&")), f && (e = "".concat(e, "user=").concat(f, "&")), m && (e = "".concat(e, "userId=").concat(m, "&")), v && (e = "".concat(e, "n=").concat(v, "&")), null !== g && (e = "".concat(e, "offset=").concat(g)), window.apiUrl(e)
                    },
                    K = function() {
                        var e = (0, u.A)(g().mark(function e(t, n, r) {
                            var a, o, l, i, u, d, p, f, m, v, w, y, E, k, A, N, P;
                            return g().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (u = !1, d = t.sortOrder, p = ["system_approved"], f = [], m = t.platform, E = t.sortOwnership, A = null, !t.sortHeading) {
                                            e.next = 49;
                                            break
                                        }
                                        e.t0 = t.sortHeading, e.next = "featured" === e.t0 ? 11 : "trending" === e.t0 ? 14 : "order" === e.t0 ? 17 : "active" === e.t0 ? 19 : "recent" === e.t0 ? 23 : "favorite" === e.t0 ? 26 : "labs" === e.t0 ? 29 : "heat" === e.t0 ? 34 : "relevance" === e.t0 ? 37 : "publication" === e.t0 ? 39 : "created" === e.t0 ? 41 : "updated" === e.t0 ? 43 : "shuffle" === e.t0 ? 45 : 47;
                                        break;
                                    case 11:
                                        return i = "order", u = !0, e.abrupt("break", 49);
                                    case 14:
                                        return i = "popularity", u = !1, e.abrupt("break", 49);
                                    case 17:
                                        return i = "order", e.abrupt("break", 49);
                                    case 19:
                                        return y = "/api/1/worlds/active?", u = null, O(20), e.abrupt("break", 49);
                                    case 23:
                                        return y = "/api/1/worlds/recent?", u = null, e.abrupt("break", 49);
                                    case 26:
                                        return y = "/api/1/worlds/favorites?", p = [], e.abrupt("break", 49);
                                    case 29:
                                        if (!c) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 31:
                                        return p = ["system_labs"], i = "labsPublicationDate", e.abrupt("break", 49);
                                    case 34:
                                        return i = "heat", u = !1, e.abrupt("break", 49);
                                    case 37:
                                        return i = "relevance", e.abrupt("break", 49);
                                    case 39:
                                        return i = "publicationDate", e.abrupt("break", 49);
                                    case 41:
                                        return i = "created", e.abrupt("break", 49);
                                    case 43:
                                        return i = "updated", e.abrupt("break", 49);
                                    case 45:
                                        return i = "shuffle", e.abrupt("break", 49);
                                    case 47:
                                        return ("string" == typeof t.sortHeading || t.sortHeading instanceof String) && (i = t.sortHeading), e.abrupt("break", 49);
                                    case 49:
                                        e.t1 = m, e.next = "ThisPlatformOnly" === e.t1 ? 52 : "AllPlatforms" === e.t1 ? 55 : "ThisPlatformSupported" === e.t1 || "any" === e.t1 ? 58 : 60;
                                        break;
                                    case 52:
                                        return v = "standalonewindows", w = "android", e.abrupt("break", 60);
                                    case 55:
                                        return v = "android,standalonewindows", w = null, e.abrupt("break", 60);
                                    case 58:
                                        v = null, w = null;
                                    case 60:
                                        e.t2 = E, e.next = "any" === e.t2 ? 63 : "mine" === e.t2 ? 64 : 66;
                                        break;
                                    case 63:
                                        return e.abrupt("break", 66);
                                    case 64:
                                        k = "me", p = [];
                                    case 66:
                                        return t.tag && p.push(t.tag), null != t.avatarSpecific && (A = t.avatarSpecific), N = "favorite" === t.sortHeading ? J(y, null, null, null, null, null, null, null, null, null, p, null, null, null, null, n, r, A) : J(y, null, s, "mine" === E ? "all" : "public", v, w, "vrchat", i, u, null, p, f, d, k, void 0, n, r, A), e.next = 71, h().get(N);
                                    case 71:
                                        200 === (P = e.sent).status ? 0 === P.data.length ? x(b.slice(0, -1)) : x(b.slice(0, -1).concat(P.data).concat(Array(1).fill({
                                            id: 0
                                        }))) : (console.error(P), b.pop()), W && z(!1), B((null == X || null === (a = X.current) || void 0 === a ? void 0 : a.scrollLeft) >= (null == X || null === (o = X.current) || void 0 === o ? void 0 : o.scrollWidth) - (null == X || null === (l = X.current) || void 0 === l ? void 0 : l.clientWidth));
                                    case 75:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Z = function() {
                        var e = (0, u.A)(g().mark(function e(t) {
                            return g().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h().delete(window.apiUrl("/api/1/favorites/".concat(b[t].favoriteId)));
                                    case 2:
                                        200 === e.sent.status && (b.splice(t, 1), x(b));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return b.length ? a.createElement("div", null, a.createElement("h4", {
                    id: l
                }, t.icon && a.createElement(M, {
                    src: t.icon,
                    alt: ""
                }), null != t.name && Object.prototype.hasOwnProperty.call(t.name, "fallback") ? t.name.fallback : t.name), W ? a.createElement(y.fy, {
                    height: "180px",
                    style: {
                        borderRadius: 20,
                        marginBottom: 10
                    },
                    delay: 100 * r + 50
                }) : a.createElement(U, null, a.createElement(q, {
                    direction: "left",
                    disabled: F,
                    className: "left-world-nav",
                    onClick: function() {
                        X.current.scroll({
                            top: 0,
                            left: X.current.scrollLeft - (X.current.clientWidth - 200),
                            behavior: "smooth"
                        })
                    }
                }, a.createElement(_, null, a.createElement(y.M2, {
                    icon: m.Ue
                }))), a.createElement(q, {
                    direction: "right",
                    disabled: $,
                    className: "right-world-nav",
                    onClick: function() {
                        X.current.scroll({
                            top: 0,
                            left: X.current.scrollLeft + (X.current.clientWidth - 200),
                            behavior: "smooth"
                        })
                    }
                }, a.createElement(_, null, a.createElement(y.M2, {
                    icon: f.vm
                }))), a.createElement(R, {
                    ref: X,
                    onScroll: function(e) {
                        0 === e.target.scrollLeft ? V(!0) : F && V(!1), e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth ? B(!0) : $ && B(!1)
                    }
                }, b.map(function(e, n) {
                    return a.createElement(S, {
                        key: "".concat(e.id, ":").concat(n),
                        world: e,
                        onDelete: "favorite" === t.sortHeading ? function() {
                            return Z(n)
                        } : void 0,
                        ref: 0 === e.id ? Q : void 0
                    })
                })))) : null
            };
            var M = (0, p.A)("img", {
                    target: "e150l8l94"
                })({
                    name: "1yomndt",
                    styles: "width:1em;height:1em;vertical-align:bottom;margin-right:0.25em"
                }),
                U = (0, p.A)("div", {
                    target: "e150l8l93"
                })({
                    name: "5lomjw",
                    styles: "height:180px;width:100%;background-color:var(--bs-gray-dark);position:relative;border-radius:20px;top:0;margin-bottom:10px"
                }),
                _ = (0, p.A)("div", {
                    target: "e150l8l92"
                })({
                    name: "1ws1gvz",
                    styles: "display:flex;justify-content:center;align-items:center;width:30px;height:100px;background-color:#888;font-size:40px;transition:all 0.1s ease-out"
                }),
                q = (0, p.A)("div", {
                    target: "e150l8l91"
                })("width:25px;height:calc(100% - 60px);background-color:#333;position:absolute;top:30px;z-index:4;cursor:pointer;transition:all 0.12s ease-out;display:flex;flex-direction:column;justify-content:center;-webkit-box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.4);box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.4);", function(e) {
                    switch (e.direction) {
                        case "left":
                            return "\n          border-radius: 0 25px 25px 0;\n          left: 0;\n          align-items: flex-start;\n\n          ".concat(_, " {\n            border-radius: 0 100px 100px 0;\n          }\n        ");
                        case "right":
                            return "\n          border-radius: 25px 0 0 25px;\n          right: 0;\n          align-items: flex-end;\n\n          ".concat(_, " {\n            border-radius: 25px 0 0 25px;\n          }\n        ");
                        default:
                            return null
                    }
                }, " ", function(e) {
                    return !0 === e.disabled ? "\n      opacity: 0.3;\n      cursor: default;\n    " : "\n      &:active {\n        height: calc(100% - 70px);\n        top: 35px;\n\n        ".concat(_, " {\n          background-color: #aaa;\n          width: 30px;\n        }\n      }\n\n      &:hover {\n        height: calc(100% - 40px);\n        top: 20px;\n\n        ").concat(_, " {\n          background-color: #444;\n          width: 35px;\n        }\n      }\n    ")
                }, ";"),
                R = (0, p.A)("div", {
                    target: "e150l8l90"
                })({
                    name: "11f1sih",
                    styles: "display:flex;flex-direction:row;width:100%;height:100%;padding:0 25px;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"
                }),
                T = n(44741),
                H = n(99871);

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const C = function() {
                var e = (0, o.wA)(),
                    t = (0, o.d4)(function(e) {
                        return e.favorites.groups.world
                    }) || [],
                    n = (0, H.o)({
                        require: ["world-category"]
                    }),
                    r = n.data,
                    u = void 0 === r ? [] : r,
                    d = n.isLoading;
                return (0, a.useEffect)(function() {
                    e((0, T.Wm)({
                        type: "world"
                    }))
                }, []), a.createElement(l.A, null, a.createElement(i.A, null, "Discover Worlds"), a.createElement("h2", null, "Discover Worlds"), a.createElement(c.A, {
                    xs: "12"
                }, d ? new Array(3).fill().map(function(e, t) {
                    return a.createElement(a.Fragment, {
                        key: t
                    }, a.createElement(s.A, {
                        height: "1.65rem",
                        delay: 100 * t,
                        style: {
                            opacity: 1 - .25 * t
                        },
                        className: "mb-2"
                    }), a.createElement(s.A, {
                        height: "180px",
                        delay: 100 * t + 50,
                        style: {
                            borderRadius: 20,
                            opacity: 1 - .25 * t
                        },
                        className: "mb-2"
                    }))
                }) : a.createElement(a.Fragment, null, u.map(function(e, t) {
                    return a.createElement(z, {
                        id: e.id,
                        key: "".concat(e.id, "-").concat(e.hash),
                        index: t,
                        row: V(V({}, e.data.contentList), {}, {
                            name: e.data.name,
                            icon: e.data.iconImageUrl
                        })
                    })
                }), a.createElement(z, {
                    id: "recent",
                    index: u.length,
                    row: {
                        name: "Recent",
                        platform: "ThisPlatformSupported",
                        sortHeading: "recent",
                        sortOrder: "descending",
                        sortOwnership: "any"
                    }
                }), a.createElement(z, {
                    id: "mine",
                    index: u.length + 1,
                    row: {
                        name: "Mine",
                        platform: "any",
                        sortHeading: "updated",
                        sortOrder: "descending",
                        sortOwnership: "mine"
                    }
                }), t.map(function(e, t) {
                    return a.createElement(z, {
                        id: e.id,
                        key: e.id,
                        index: u.length + 2 + t,
                        row: {
                            name: e.displayName,
                            sortHeading: "favorite",
                            tag: [e.name]
                        }
                    })
                }))))
            }
        },
        99871(e, t, n) {
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
                                        o = n.require;
                                    return [{
                                        type: "InfoPushData",
                                        id: {
                                            include: a,
                                            require: void 0 === o ? [] : o
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
        }
    }
]);
//# sourceMappingURL=4761ec9721d3eb23fb76c16484ec1c86956ffc3c3c3de0b35ae7bd58086ccc31.js.map