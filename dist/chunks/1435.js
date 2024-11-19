"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1435], {
        67371: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n, a = r(30168),
                o = r(15861),
                i = r(54546),
                u = r(4965),
                s = r(88512),
                c = r(68055),
                l = r(41145),
                d = r(13461),
                p = r(6811),
                v = r(76553),
                f = r(64687),
                m = r.n(f),
                y = r(67294),
                g = r(45697),
                b = r.n(g),
                h = r(70917),
                x = r(32981),
                w = r(751),
                F = r(13271),
                k = r(22202),
                Z = r(64258),
                I = r(12752),
                S = r(14411);
            var T = function(e) {
                var t = e.type,
                    r = void 0 === t ? "world" : t,
                    n = e.contentId,
                    a = e.authorId,
                    u = e.releaseStatus,
                    f = e.className,
                    g = (0, x.I0)(),
                    b = (0, I.Tu)().user,
                    h = y.useState(!1),
                    T = (0, i.Z)(h, 2),
                    E = T[0],
                    A = T[1],
                    C = y.useState(null),
                    D = (0, i.Z)(C, 2),
                    M = D[0],
                    z = D[1],
                    W = y.useRef(null),
                    X = (0, w.sd)({
                        type: r
                    }, {
                        selectFromResult: function(e) {
                            var t = e.data;
                            return {
                                favoriteInfo: null == t ? void 0 : t.find((function(e) {
                                    return e.favoriteId === n
                                }))
                            }
                        }
                    }),
                    Q = X.favoriteInfo,
                    H = X.isLoading,
                    $ = (0, w.wu)({
                        type: r
                    }),
                    U = $.data,
                    _ = $.isLoading,
                    B = (0, k.k5)().data,
                    J = (0, w.Ec)(),
                    Y = (0, i.Z)(J, 2),
                    K = Y[0],
                    V = Y[1].isLoading,
                    ee = (0, w.Xc)(),
                    te = (0, i.Z)(ee, 2),
                    re = te[0],
                    ne = te[1].isLoading,
                    ae = (0, w.zZ)(),
                    oe = (0, i.Z)(ae, 2),
                    ie = oe[0],
                    ue = oe[1].isLoading,
                    se = (0, F.S)({
                        type: r
                    }).data,
                    ce = y.useCallback((function(e) {
                        var t;
                        null !== (t = W.current) && void 0 !== t && t.contains(e.target) || A(!1)
                    }), [W.current]);
                y.useEffect((function() {
                    return window.addEventListener("click", ce),
                        function() {
                            return window.removeEventListener("click", ce)
                        }
                }), [W.current]);
                var le = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Q) {
                                            e.next = 3;
                                            break
                                        }
                                        return A(!E), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, re({
                                            id: Q.id,
                                            type: r,
                                            groupName: Q.tags[0]
                                        }).unwrap();
                                    case 5:
                                        (t = e.sent).error ? g((0, Z.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (n = null === (a = t.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, Z.d)({
                                            title: "Favorite Removed",
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), A(!1), z(null);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    de = function(e) {
                        var t, n = null !== (t = null == B ? void 0 : B.maxFavoritesPerGroup[r]) && void 0 !== t ? t : B.defaultMaxFavoritesPerGroup;
                        return (null == U ? void 0 : U[e]) >= n && (g((0, Z.d)({
                            title: "Cannot save to a full collection",
                            icon: v.eH,
                            message: "You will need to make space before you can add more favorites to this collection",
                            color: "warning",
                            timeout: 7e3
                        })), !0)
                    },
                    pe = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, K({
                                            type: r,
                                            favoriteId: n,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? g((0, Z.d)({
                                            title: "Failed to create a favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, Z.d)({
                                            title: "Favorite Saved to ".concat(se.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ve = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ie({
                                            id: Q.id,
                                            type: r,
                                            favoriteId: n,
                                            oldGroupName: Q.tags[0],
                                            newGroupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? g((0, Z.d)({
                                            title: "Failed to move favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, Z.d)({
                                            title: "Favorite Moved to ".concat(se.find((function(e) {
                                                return e.name === t
                                            })).displayName),
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    fe = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var n, a, o;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, re({
                                            id: Q.id,
                                            type: r,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (n = e.sent).error ? g((0, Z.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (a = null === (o = n.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, Z.d)({
                                            title: "Favorite Removed",
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        }));
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
                if (y.useEffect((function() {
                        Q && z(Q.tags[0])
                    }), [Q]), H) return y.createElement(S.UU, {
                    width: "100%",
                    height: "49px",
                    className: "mt-2"
                });
                var me = Q ? d.T : s.T,
                    ye = Q ? "Remove Favorite" : "Add to Favorites";
                E && (ye = Q ? "Move Favorite" : "Select Collection"), V && (ye = "Adding..."), ne && (ye = "Deleting..."), ue && (ye = "Moving...");
                var ge = V || ne || ue;
                return "private" === u && a !== (null == b ? void 0 : b.id) ? null : y.createElement(L, {
                    ref: W,
                    className: f,
                    isSelecting: E
                }, y.createElement(S.X2, {
                    className: "align-items-center",
                    role: "button",
                    onClick: le
                }, y.createElement(S.$1, {
                    icon: me,
                    className: "me-4"
                }), y.createElement("div", null, ye)), y.createElement(S.X2, {
                    className: "align-items-center h-100",
                    role: "button",
                    onClick: function() {
                        A(!E)
                    }
                }, y.createElement(N, null), y.createElement(O, {
                    icon: l.pt,
                    rotation: E ? 0 : 180,
                    className: "ms-4 me-1",
                    color: "#6ae3f9"
                })), E && y.createElement(q, null, null == se ? void 0 : se.map((function(e) {
                    var t, n;
                    return y.createElement(P, {
                        key: e.id,
                        onClick: (n = e.name, function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.stopPropagation(), A(!1), Q) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!de(n)) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.next = 7, pe(n);
                                        case 7:
                                            return z(n), e.abrupt("return");
                                        case 9:
                                            if (n === Q.tags[0]) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!de(n)) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.next = 14, ve(n);
                                        case 14:
                                            return z(n), e.abrupt("return");
                                        case 16:
                                            return e.next = 18, fe(n);
                                        case 18:
                                            z(null);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }, y.createElement(S.X2, {
                        className: "align-items-center"
                    }, y.createElement(j, {
                        isSelected: M === e.name,
                        icon: c.LE,
                        className: "me-3"
                    }), e.displayName), !_ && y.createElement("div", null, null == U ? void 0 : U[e.name], " / ", null !== (t = null == B ? void 0 : B.maxFavoritesPerGroup[r]) && void 0 !== t ? t : 100))
                }))), ge && y.createElement(R, null, y.createElement(G, null)))
            };
            T.propTypes = {
                contentId: b().string.isRequired,
                authorId: b().string.isRequired,
                releaseStatus: b().oneOf(["private", "public", "unlisted"]),
                className: b().string
            };
            const E = T;
            var A = {
                    name: "ijbj2b",
                    styles: "border-radius:0 0 4px 4px;border-color:#086c84"
                },
                L = (0, u.Z)(S.X2, {
                    target: "e1o4xuq47"
                })("justify-content:space-between;position:relative;align-items:center;border:#064b5c solid 2px;border-radius:4px;font-size:1.2rem;background:#064b5c;color:#6ae3f9;padding:0.5rem 1rem;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}", (function(e) {
                    return e.isSelecting ? A : ""
                }), ";"),
                N = (0, u.Z)("div", {
                    target: "e1o4xuq46"
                })({
                    name: "kktyj1",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px"
                }),
                O = (0, u.Z)(S.$1, {
                    target: "e1o4xuq45"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                q = (0, u.Z)(S.JX, {
                    target: "e1o4xuq44"
                })({
                    name: "14rwa6y",
                    styles: "position:relative;border:#086c84 solid 2px;border-width:2px 2px 0 2px;border-radius:4px 4px 0 0;font-size:1.15rem;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);bottom:calc(100% + 2px);left:-2px;z-index:2;min-height:1rem"
                }),
                P = (0, u.Z)(S.X2, {
                    target: "e1o4xuq43"
                })({
                    name: "khx7zf",
                    styles: "padding:0.5rem 1rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;cursor:pointer;&:hover{background-color:#086c84;svg{opacity:0.5;}}"
                }),
                C = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                j = (0, u.Z)(S.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e1o4xuq42"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? C : ""
                }), ";"),
                R = (0, u.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                D = (0, h.F4)(n || (n = (0, a.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                G = (0, u.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", D, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
        },
        64537: (e, t, r) => {
            r.d(t, {
                Z: () => k
            });
            var n, a = r(87462),
                o = r(4942),
                i = r(15861),
                u = r(45987),
                s = r(2909),
                c = r(7747),
                l = r(53359),
                d = r(64687),
                p = r.n(d),
                v = r(67294),
                f = r(32981),
                m = r(64258),
                y = r(86646),
                g = r(50048),
                b = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var w = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                F = !!navigator.canShare;
            const k = function(e) {
                var t = e.url,
                    r = e.text,
                    n = e.title,
                    o = e.files,
                    d = e.style,
                    h = e.shareLabel,
                    k = void 0 === h ? "Share" : h,
                    Z = e.copyLabel,
                    I = void 0 === Z ? "Copy" : Z,
                    S = e.displayLabel,
                    T = void 0 !== S && S,
                    E = (0, u.Z)(e, b),
                    A = (0, f.I0)(),
                    L = v.useMemo((function() {
                        return F && navigator.canShare({
                            url: t,
                            text: r,
                            title: n,
                            files: o
                        })
                    }), [F, t, r, n, o]);
                if (!w && !F) return null;
                var N = function() {
                        var e = (0, i.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([n, r, t].filter(Boolean).join("\n"));
                                    case 2:
                                        A((0, m.d)({
                                            title: "Copied to clipboard",
                                            icon: s.kZ,
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    O = function() {
                        var e = (0, i.Z)(p().mark((function e(a) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.preventDefault(), !L) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, navigator.share({
                                            url: t,
                                            text: r,
                                            title: n,
                                            files: o
                                        });
                                    case 5:
                                        e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(2), !(e.t0 instanceof DOMException && "InvalidStateError" === e.t0.name)) {
                                            e.next = 14;
                                            break
                                        }
                                        A((0, m.d)({
                                            title: "Something went wrong",
                                            icon: l.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), N(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        N();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    q = L ? k : I,
                    P = L ? c.Dr : s.kZ;
                return v.createElement(g.ZP, (0, a.Z)({
                    neutral: !0,
                    style: x({
                        lineHeight: "1"
                    }, d)
                }, E, {
                    title: q,
                    onClick: O
                }), v.createElement(y.Z, {
                    icon: P,
                    className: T && "tw-mr-1"
                }), T && q)
            }
        },
        751: (e, t, r) => {
            r.d(t, {
                Ec: () => d,
                Xc: () => p,
                oy: () => y,
                sd: () => f,
                wu: () => v,
                zZ: () => m
            });
            var n = r(15861),
                a = r(42138),
                o = r(64687),
                i = r.n(o),
                u = r(3845);

            function s(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var l = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getFavorites: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        r = void 0 === t ? 50 : t,
                                        n = e.offset;
                                    return {
                                        url: "favorites",
                                        params: {
                                            n: r,
                                            offset: void 0 === n ? 0 : n,
                                            type: e.type,
                                            tag: e.tag,
                                            tags: e.tags,
                                            notag: e.notag,
                                            ownerId: e.ownerId
                                        }
                                    }
                                },
                                providesTags: function(e) {
                                    return e ? [].concat((0, a.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }]
                                }
                            }),
                            getAllFavorites: e.query({
                                queryFn: (o = (0, n.Z)(i().mark((function e(t, r, n, o) {
                                    var u, s, c, l, d, p, v, f;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                u = t.type, s = t.tag, c = t.tags, l = t.notag, d = t.ownerId, p = [], v = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: v,
                                                        type: u,
                                                        tag: s,
                                                        tags: c,
                                                        notag: l,
                                                        ownerId: d
                                                    }
                                                });
                                            case 6:
                                                if (!(f = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: f.error
                                                });
                                            case 9:
                                                if (!(f.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return p.push.apply(p, (0, a.Z)(f.data)), v += 50, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: p
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return o.apply(this, arguments)
                                }),
                                providesTags: function(e) {
                                    return e ? [].concat((0, a.Z)(e.map((function(e) {
                                        return {
                                            type: "Favorites",
                                            id: e.id
                                        }
                                    }))), [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]) : [{
                                        type: "Favorites",
                                        id: "LIST"
                                    }]
                                }
                            }),
                            getAllFavoriteCounts: e.query({
                                queryFn: (r = (0, n.Z)(i().mark((function e(t, r, n, a) {
                                    var o, u, c, l, d, p, v, f;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.type, u = t.ownerId, c = {}, l = 0;
                                            case 3:
                                                return e.next = 6, a({
                                                    url: "favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: l,
                                                        type: o,
                                                        ownerId: u
                                                    }
                                                });
                                            case 6:
                                                if (!(d = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 9:
                                                if (!(d.data.length > 0)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                p = s(d.data);
                                                try {
                                                    for (p.s(); !(v = p.n()).done;) f = v.value, c[f.tags[0]] ? c[f.tags[0]] += 1 : c[f.tags[0]] = 1
                                                } catch (e) {
                                                    p.e(e)
                                                } finally {
                                                    p.f()
                                                }
                                                return l += 50, e.abrupt("continue", 3);
                                            case 14:
                                                return e.abrupt("break", 17);
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: c
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "FavoritesCount",
                                        id: r.type
                                    }]
                                }
                            }),
                            createFavorite: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "favorites",
                                        method: "POST",
                                        body: {
                                            type: e.type,
                                            favoriteId: e.favoriteId,
                                            tags: [e.groupName]
                                        }
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.type,
                                        n = e.favoriteId,
                                        a = e.groupName,
                                        o = t.dispatch,
                                        i = t.queryFulfilled,
                                        s = o(l.util.updateQueryData("getAllFavorites", {
                                            type: r
                                        }, (function(e) {
                                            e && (-1 === e.findIndex((function(e) {
                                                return e.favoriteId === n
                                            })) && e.push({
                                                id: "fvrt_".concat((0, u.Z)()),
                                                type: r,
                                                favoriteId: n,
                                                tags: [a]
                                            }))
                                        })));
                                    i.catch(s.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.type,
                                        o = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: n
                                    }].concat((0, a.Z)("world" === n ? [{
                                        type: "FavoriteWorlds",
                                        id: o
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === n ? [{
                                        type: "FavoriteAvatars",
                                        id: o
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === n ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            deleteFavorite: e.mutation({
                                query: function(e) {
                                    var t = e.id;
                                    e.type, e.groupName;
                                    return {
                                        url: "favorites/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                onQueryStarted: function(e, t) {
                                    var r = e.id,
                                        n = e.type,
                                        a = e.groupName,
                                        o = t.dispatch,
                                        i = t.queryFulfilled,
                                        u = o(l.util.updateQueryData("getAllFavorites", {
                                            type: n
                                        }, (function(e) {
                                            if (e) {
                                                var t = e.findIndex((function(e) {
                                                    return e.id === r && e.type === n && e.tags.includes(a)
                                                })); - 1 !== t && e.splice(t, 1)
                                            }
                                        })));
                                    i.catch(u.undo)
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.id,
                                        o = r.type,
                                        i = r.groupName;
                                    return t ? [] : [{
                                        type: "Favorites",
                                        id: n
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: o
                                    }].concat((0, a.Z)("world" === o ? [{
                                        type: "FavoriteWorlds",
                                        id: i
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === o ? [{
                                        type: "FavoriteAvatars",
                                        id: i
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === o ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            moveFavorite: e.mutation({
                                queryFn: (t = (0, n.Z)(i().mark((function e(t, r, n, a) {
                                    var o, u, s, c, l, d, p;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return o = t.id, u = t.type, s = t.favoriteId, c = t.oldGroupName, l = t.newGroupName, t.silent, e.next = 3, a({
                                                    url: "favorites/".concat(o),
                                                    method: "DELETE"
                                                });
                                            case 3:
                                                if (!(d = e.sent).error) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 6:
                                                return e.next = 8, a({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: u,
                                                        favoriteId: s,
                                                        tags: [l]
                                                    }
                                                });
                                            case 8:
                                                if (!(p = e.sent).error) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.next = 12, a({
                                                    url: "favorites",
                                                    method: "POST",
                                                    body: {
                                                        type: u,
                                                        favoriteId: s,
                                                        tags: [c]
                                                    }
                                                });
                                            case 12:
                                                return e.abrupt("return", {
                                                    error: p.error
                                                });
                                            case 13:
                                                return e.abrupt("return", {
                                                    data: p.data
                                                });
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.id,
                                        o = r.type,
                                        i = r.oldGroupName,
                                        u = r.newGroupName;
                                    return r.silent ? [] : [{
                                        type: "Favorites",
                                        id: n
                                    }, {
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: o
                                    }].concat((0, a.Z)("world" === o ? [{
                                        type: "FavoriteWorlds",
                                        id: i
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: u
                                    }, {
                                        type: "FavoriteWorlds",
                                        id: "all"
                                    }] : []), (0, a.Z)("avatar" === o ? [{
                                        type: "FavoriteAvatars",
                                        id: i
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: u
                                    }, {
                                        type: "FavoriteAvatars",
                                        id: "all"
                                    }] : []), (0, a.Z)("friend" === o ? [{
                                        type: "FavoriteFriends",
                                        id: "all"
                                    }] : []))
                                }
                            }),
                            reloadFavorites: e.mutation({
                                queryFn: function(e) {
                                    e.type;
                                    return {
                                        data: null
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.type;
                                    return [{
                                        type: "Favorites",
                                        id: "PARTIAL-LIST"
                                    }, {
                                        type: "Favorites",
                                        id: "LIST"
                                    }, {
                                        type: "FavoritesCount",
                                        id: n
                                    }].concat((0, a.Z)("world" === n ? ["FavoriteWorlds"] : []), (0, a.Z)("avatar" === n ? ["FavoriteAvatars"] : []), (0, a.Z)("friend" === n ? ["FavoriteFriends"] : []))
                                }
                            })
                        };
                        var t, r, o
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Favorites", "FavoritesCount"]
                }),
                d = l.useCreateFavoriteMutation,
                p = l.useDeleteFavoriteMutation,
                v = l.useGetAllFavoriteCountsQuery,
                f = l.useGetAllFavoritesQuery,
                m = (l.useGetFavoritesQuery, l.useMoveFavoriteMutation),
                y = l.useReloadFavoritesMutation
        }
    }
]);
//# sourceMappingURL=ec1d26157b819f97b489e150ce3cff32eeb46ec785a17809fc13845ae6375aab.js.map