"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1264], {
        77905: (e, t) => {
            var n = "angle-left",
                r = [8249],
                a = "f104",
                o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [320, 512, r, a, o]
            }, t.Ey = t.DF
        },
        411: (e, t, n) => {
            n.d(t, {
                U$: () => c,
                Vj: () => l,
                dt: () => o,
                rS: () => i
            });
            var r = n(9669),
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
        82296: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => $
            });
            var r = n(4942),
                a = n(67294),
                o = n(32981),
                l = n(35773),
                c = n(95305),
                i = n(85533),
                s = n(50119),
                u = n(15861),
                d = n(54546),
                p = n(4965),
                f = n(83183),
                m = n(77905),
                v = n(64687),
                b = n.n(v),
                g = n(9669),
                h = n.n(g),
                w = n(17219),
                y = n(34226),
                x = n(13461),
                E = n(27879),
                k = n(42619),
                O = n(79655),
                Z = n(43862),
                S = n(83505);
            const P = function(e) {
                var t = e.packages,
                    n = e.hasText,
                    r = a.useState(!1),
                    o = (0, d.Z)(r, 2),
                    l = o[0],
                    c = o[1],
                    i = a.useState(!1),
                    s = (0, d.Z)(i, 2),
                    u = s[0],
                    p = s[1];
                return a.useEffect((function() {
                    t && (p(t.some((function(e) {
                        return "standalonewindows" === e.platform
                    }))), c(t.some((function(e) {
                        return "android" === e.platform
                    }))))
                }), []), a.createElement("div", {
                    className: (0, S.iv)("--platform-pc:#00a8fc;--platform-quest:#00e245;--platform-pc-transparent:#00a8fcbb;--not-available-grey:#4c4c4c;--not-available-grey-transparent:#4c4c4caa;--not-available-grey-outline:#606060;--not-available-grey-outline-transparent:#60606055;position:relative;width:", 94, "px;height:", 47, "px;& .pc,.pc-cover,.quest{position:absolute;display:flex;justify-content:center;align-items:center;width:", 47, "px;height:", 47, "px;border-radius:100px;border:3px solid white;font-size:11px;font-weight:bold;color:black;}& .pc{top:0;left:0;background:var(--platform-pc-transparent);}& .pc-cover{top:0;left:0;background:var(--platform-pc);}& .quest{top:0;left:calc(", 47, "px / 1.25);background:var(--platform-quest);}& .disabled{background:var(--not-available-grey);border:3px solid var(--not-available-grey-outline);color:black;}& .pc.disabled{background:var(--not-available-grey-transparent);}")
                }, a.createElement("div", {
                    className: "pc-cover ".concat(u ? "" : "disabled")
                }), a.createElement("div", {
                    className: "quest ".concat(l ? "" : "disabled")
                }, n && "Quest"), a.createElement("div", {
                    className: "pc ".concat(u ? "" : "disabled")
                }, n && "PC"))
            };
            var j = [{
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
            const N = a.forwardRef((function(e, t) {
                var n, r, o = e.world,
                    l = e.onDelete,
                    c = a.useState(!1),
                    i = (0, d.Z)(c, 2),
                    s = i[0],
                    u = i[1];
                return o.id ? a.createElement(I, {
                    style: {
                        backgroundImage: "url(".concat(o.thumbnailImageUrl, ")")
                    },
                    ref: t
                }, !s && a.createElement(O.rU, {
                    className: "tw-absolute",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    to: "/home/world/".concat(o.id)
                }), l && a.createElement(z, {
                    onMouseEnter: function() {
                        return u(!0)
                    },
                    onMouseLeave: function() {
                        u(!1)
                    },
                    onClick: function() {
                        l()
                    }
                }, a.createElement(y.$1, {
                    icon: k.$
                })), a.createElement(L, null, !s && a.createElement(O.rU, {
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
                }, a.createElement(q, null, o.name), a.createElement("div", {
                    className: "tw-flex tw-text-center tw-items-center tw-justify-center"
                }, a.createElement(y.$1, {
                    icon: E.IL,
                    className: "tw-mr-1"
                }), o.occupants)), a.createElement("div", null, "by:", " ", a.createElement(O.rU, {
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
                    className: "tw-flex tw-flex-row tw-justify-around tw-mt-5"
                }, a.createElement(P, {
                    packages: o.unityPackages,
                    hasText: !0
                }), a.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, a.createElement(y.$1, {
                    icon: x.T,
                    className: "tw-mr-1",
                    style: {
                        fontSize: 35
                    }
                }), a.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, a.createElement("h4", {
                    className: "tw-m-0"
                }, (n = o.favorites, (r = j.slice().reverse().find((function(e) {
                    return n >= e.value
                }))) ? (n / r.value).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + r.symbol : "0")), a.createElement("div", null, "Favorites")))))) : a.createElement(D, {
                    ref: t
                }, a.createElement(Z.Z, null))
            }));
            var I = (0, p.Z)("div", {
                    target: "e3qzuk74"
                })("position:relative;min-width:", 230, "px;height:auto;background-color:#222;border-radius:7px 20px;border:3px solid #222;margin:10px;background-size:cover;background-repeat:no-repeat;background-position:center;overflow:hidden;cursor:pointer;*{cursor:pointer;}"),
                D = (0, p.Z)(I, {
                    target: "e3qzuk73"
                })({
                    name: "1gn2e5h",
                    styles: "text-align:center;padding-top:50px"
                }),
                L = (0, p.Z)("div", {
                    target: "e3qzuk72"
                })({
                    name: "184ec7z",
                    styles: "position:relative;top:calc(100% - 30px);background:#000000dd;width:100%;height:100%;padding:3px 8px;transition:all 0.5s ease-in-out;&:hover{top:20px;}"
                }),
                q = (0, p.Z)("div", {
                    target: "e3qzuk71"
                })({
                    name: "5njcc4",
                    styles: "font-weight:bold;max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"
                }),
                z = (0, p.Z)("button", {
                    target: "e3qzuk70"
                })({
                    name: "1grcaxu",
                    styles: "position:absolute;top:0;right:0;padding:4px 10px;border-bottom-left-radius:10px;color:white;background-color:#c02942;border:0;transition:padding 0.1s ease-out;-webkit-box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.6);box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.6);&:hover{padding:6px 12px;}&:active{background-color:#d73a55;}"
                });
            const U = function(e) {
                var t = e.row,
                    n = e.index,
                    r = void 0 === n ? 0 : n,
                    l = e.id,
                    c = (0, o.v9)((function(e) {
                        return e.config.config.disableCommunityLabs
                    })),
                    i = (0, w.y)().data,
                    s = (void 0 === i ? {} : i).sdkUnityVersion,
                    p = a.useState([]),
                    v = (0, d.Z)(p, 2),
                    g = v[0],
                    x = v[1],
                    E = a.useState(10),
                    k = (0, d.Z)(E, 2),
                    O = k[0],
                    Z = k[1],
                    S = a.useState(0),
                    P = (0, d.Z)(S, 2),
                    j = P[0],
                    I = P[1],
                    D = a.useState(!0),
                    L = (0, d.Z)(D, 2),
                    q = L[0],
                    z = L[1],
                    U = a.useState(!0),
                    _ = (0, d.Z)(U, 2),
                    F = _[0],
                    M = _[1],
                    V = a.useState(!0),
                    $ = (0, d.Z)(V, 2),
                    C = $[0],
                    G = $[1],
                    Q = a.useRef(),
                    B = a.useRef(),
                    Y = function() {
                        var e, t, n;
                        G((null == B || null === (e = B.current) || void 0 === e ? void 0 : e.scrollLeft) >= (null == B || null === (t = B.current) || void 0 === t ? void 0 : t.scrollWidth) - (null == B || null === (n = B.current) || void 0 === n ? void 0 : n.clientWidth))
                    };
                a.useEffect((function() {
                    return window.addEventListener("resize", Y),
                        function() {
                            if (g.length <= 0) {
                                var e, n = document.querySelector(".content-scroll");
                                230 * (e = "active" === t.sortHeading || "favorite" === t.sortHeading ? 100 : Math.trunc(n.offsetWidth / 230)) < (null == n ? void 0 : n.offsetWidth) && e++, K(t, e, j), I(j + e)
                            }
                        }(),
                        function() {
                            window.removeEventListener("resize", Y)
                        }
                }), []), a.useEffect((function() {
                    var e, n, r;
                    if (Q.current) {
                        var a = document.querySelector(".content-scroll"),
                            o = new IntersectionObserver((function(e) {
                                (0, d.Z)(e, 1)[0].isIntersecting && (K(t, O, j), I(j + O), o.unobserve(Q.current))
                            }), {
                                root: a,
                                rootMargin: "0px"
                            });
                        o.observe(Q.current)
                    }
                    G((null == B || null === (e = B.current) || void 0 === e ? void 0 : e.scrollLeft) >= (null == B || null === (n = B.current) || void 0 === n ? void 0 : n.scrollWidth) - (null == B || null === (r = B.current) || void 0 === r ? void 0 : r.clientWidth))
                }), [g]);
                var J = function(e, t, n, r, a, o, l, c, i, s, u, d, p, f, m, v, b) {
                        var g, h = arguments.length > 17 && void 0 !== arguments[17] ? arguments[17] : null;
                        return e = null !== (g = e) && void 0 !== g ? g : "/api/1/worlds?", null !== h && (!0 === h ? e = "".concat(e, "avatarSpecific=true&") : !1 === h && (e = "".concat(e, "avatarSpecific=false&"))), t && (e = "".concat(e, "minUnityVersion=").concat(t, "&")), n && (e = "".concat(e, "maxUnityVersion=").concat(n, "&")), r && (e = "".concat(e, "releaseStatus=").concat(r, "&")), a && (e = "".concat(e, "platform=").concat(a, "&")), o && (e = "".concat(e, "noplatform=").concat(o, "&")), l && (e = "".concat(e, "organization=").concat(l, "&")), c && (e = "".concat(e, "sort=").concat(c, "&")), null != i && (i = !!i, e = "".concat(e, "featured=").concat(i, "&")), null != s && (e = "".concat(e, "fuzzy=").concat(s, "&")), u && u.length > 0 && (e = "".concat(e, "tag=").concat(u, "&")), d && d.length > 0 && (e = "".concat(e, "notag=").concat(d, "&")), p && (e = "".concat(e, "order=").concat(p, "&")), f && (e = "".concat(e, "user=").concat(f, "&")), m && (e = "".concat(e, "userId=").concat(m, "&")), v && (e = "".concat(e, "n=").concat(v, "&")), null !== b && (e = "".concat(e, "offset=").concat(b)), window.apiUrl(e)
                    },
                    K = function() {
                        var e = (0, u.Z)(b().mark((function e(t, n, r) {
                            var a, o, l, i, u, d, p, f, m, v, w, y, E, k, O, S, P;
                            return b().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (u = !1, d = t.sortOrder, p = ["system_approved"], f = [], m = t.platform, E = t.sortOwnership, O = null, !t.sortHeading) {
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
                                        return y = "/api/1/worlds/active?", u = null, Z(20), e.abrupt("break", 49);
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
                                        return t.tag && p.push(t.tag), null != t.avatarSpecific && (O = t.avatarSpecific), S = "favorite" === t.sortHeading ? J(y, null, null, null, null, null, null, null, null, null, p, null, null, null, null, n, r, O) : J(y, null, s, "mine" === E ? "all" : "public", v, w, "vrchat", i, u, null, p, f, d, k, undefined, n, r, O), e.next = 71, h().get(S);
                                    case 71:
                                        200 === (P = e.sent).status ? 0 === P.data.length ? x(g.slice(0, -1)) : x(g.slice(0, -1).concat(P.data).concat(Array(1).fill({
                                            id: 0
                                        }))) : (console.error(P), g.pop()), q && z(!1), G((null == B || null === (a = B.current) || void 0 === a ? void 0 : a.scrollLeft) >= (null == B || null === (o = B.current) || void 0 === o ? void 0 : o.scrollWidth) - (null == B || null === (l = B.current) || void 0 === l ? void 0 : l.clientWidth));
                                    case 75:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function() {
                        var e = (0, u.Z)(b().mark((function e(t) {
                            return b().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h().delete(window.apiUrl("/api/1/favorites/".concat(g[t].favoriteId)));
                                    case 2:
                                        200 === e.sent.status && (g.splice(t, 1), x(g));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return g.length ? a.createElement("div", null, a.createElement("h4", {
                    id: l
                }, t.icon && a.createElement(T, {
                    src: t.icon,
                    alt: ""
                }), null != t.name && Object.prototype.hasOwnProperty.call(t.name, "fallback") ? t.name.fallback : t.name), q ? a.createElement(y.UU, {
                    height: "180px",
                    style: {
                        borderRadius: 20,
                        marginBottom: 10
                    },
                    delay: 100 * r + 50
                }) : a.createElement(W, null, a.createElement(A, {
                    direction: "left",
                    disabled: F,
                    className: "left-world-nav",
                    onClick: function() {
                        B.current.scroll({
                            top: 0,
                            left: B.current.scrollLeft - (B.current.clientWidth - 200),
                            behavior: "smooth"
                        })
                    }
                }, a.createElement(R, null, a.createElement(y.$1, {
                    icon: m.Ey
                }))), a.createElement(A, {
                    direction: "right",
                    disabled: C,
                    className: "right-world-nav",
                    onClick: function() {
                        B.current.scroll({
                            top: 0,
                            left: B.current.scrollLeft + (B.current.clientWidth - 200),
                            behavior: "smooth"
                        })
                    }
                }, a.createElement(R, null, a.createElement(y.$1, {
                    icon: f.yO
                }))), a.createElement(H, {
                    ref: B,
                    onScroll: function(e) {
                        0 === e.target.scrollLeft ? M(!0) : F && M(!1), e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth ? G(!0) : C && G(!1)
                    }
                }, g.map((function(e, n) {
                    return a.createElement(N, {
                        key: "".concat(e.id, ":").concat(n),
                        world: e,
                        onDelete: "favorite" === t.sortHeading ? function() {
                            return X(n)
                        } : void 0,
                        ref: 0 === e.id ? Q : void 0
                    })
                }))))) : null
            };
            var T = (0, p.Z)("img", {
                    target: "e150l8l94"
                })({
                    name: "1yomndt",
                    styles: "width:1em;height:1em;vertical-align:bottom;margin-right:0.25em"
                }),
                W = (0, p.Z)("div", {
                    target: "e150l8l93"
                })({
                    name: "5lomjw",
                    styles: "height:180px;width:100%;background-color:var(--bs-gray-dark);position:relative;border-radius:20px;top:0;margin-bottom:10px"
                }),
                R = (0, p.Z)("div", {
                    target: "e150l8l92"
                })({
                    name: "1ws1gvz",
                    styles: "display:flex;justify-content:center;align-items:center;width:30px;height:100px;background-color:#888;font-size:40px;transition:all 0.1s ease-out"
                }),
                A = (0, p.Z)("div", {
                    target: "e150l8l91"
                })("width:25px;height:calc(100% - 60px);background-color:#333;position:absolute;top:30px;z-index:4;cursor:pointer;transition:all 0.12s ease-out;display:flex;flex-direction:column;justify-content:center;-webkit-box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.4);box-shadow:0 0 25px 9px rgba(0, 0, 0, 0.4);", (function(e) {
                    switch (e.direction) {
                        case "left":
                            return "\n          border-radius: 0 25px 25px 0;\n          left: 0;\n          align-items: flex-start;\n\n          ".concat(R, " {\n            border-radius: 0 100px 100px 0;\n          }\n        ");
                        case "right":
                            return "\n          border-radius: 25px 0 0 25px;\n          right: 0;\n          align-items: flex-end;\n\n          ".concat(R, " {\n            border-radius: 25px 0 0 25px;\n          }\n        ");
                        default:
                            return null
                    }
                }), " ", (function(e) {
                    return !0 === e.disabled ? "\n      opacity: 0.3;\n      cursor: default;\n    " : "\n      &:active {\n        height: calc(100% - 70px);\n        top: 35px;\n\n        ".concat(R, " {\n          background-color: #aaa;\n          width: 30px;\n        }\n      }\n\n      &:hover {\n        height: calc(100% - 40px);\n        top: 20px;\n\n        ").concat(R, " {\n          background-color: #444;\n          width: 35px;\n        }\n      }\n    ")
                }), ";"),
                H = (0, p.Z)("div", {
                    target: "e150l8l90"
                })({
                    name: "11f1sih",
                    styles: "display:flex;flex-direction:row;width:100%;height:100%;padding:0 25px;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"
                }),
                _ = n(411),
                F = n(82197);

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const $ = function() {
                var e = (0, o.I0)(),
                    t = (0, o.v9)((function(e) {
                        return e.favorites.groups.world
                    })) || [],
                    n = (0, F.l)({
                        require: ["world-category"]
                    }),
                    r = n.data,
                    u = void 0 === r ? [] : r,
                    d = n.isLoading;
                return (0, a.useEffect)((function() {
                    e((0, _.dt)({
                        type: "world"
                    }))
                }), []), a.createElement(l.Z, null, a.createElement(i.Z, null, "Discover Worlds"), a.createElement("h2", null, "Discover Worlds"), a.createElement(c.Z, {
                    xs: "12"
                }, d ? new Array(3).fill().map((function(e, t) {
                    return a.createElement(a.Fragment, {
                        key: t
                    }, a.createElement(s.Z, {
                        height: "1.65rem",
                        delay: 100 * t,
                        style: {
                            opacity: 1 - .25 * t
                        },
                        className: "mb-2"
                    }), a.createElement(s.Z, {
                        height: "180px",
                        delay: 100 * t + 50,
                        style: {
                            borderRadius: 20,
                            opacity: 1 - .25 * t
                        },
                        className: "mb-2"
                    }))
                })) : a.createElement(a.Fragment, null, u.map((function(e, t) {
                    return a.createElement(U, {
                        id: e.id,
                        key: "".concat(e.id, "-").concat(e.hash),
                        index: t,
                        row: V(V({}, e.data.contentList), {}, {
                            name: e.data.name,
                            icon: e.data.iconImageUrl
                        })
                    })
                })), a.createElement(U, {
                    id: "recent",
                    index: u.length,
                    row: {
                        name: "Recent",
                        platform: "ThisPlatformSupported",
                        sortHeading: "recent",
                        sortOrder: "descending",
                        sortOwnership: "any"
                    }
                }), a.createElement(U, {
                    id: "mine",
                    index: u.length + 1,
                    row: {
                        name: "Mine",
                        platform: "any",
                        sortHeading: "updated",
                        sortOrder: "descending",
                        sortOwnership: "mine"
                    }
                }), t.map((function(e, t) {
                    return a.createElement(U, {
                        id: e.id,
                        key: e.id,
                        index: u.length + 2 + t,
                        row: {
                            name: e.displayName,
                            sortHeading: "favorite",
                            tag: [e.name]
                        }
                    })
                })))))
            }
        },
        82197: (e, t, n) => {
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
            }).useGetInfoPushDataQuery
        }
    }
]);
//# sourceMappingURL=821111c1b35010955d4ff1a2f806bcc15c443d0038ce4d4c70e04cdf1aa01084.js.map