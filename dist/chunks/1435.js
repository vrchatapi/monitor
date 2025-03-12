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
                w = r(70917),
                h = r(32981),
                F = r(751),
                x = r(13271),
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
                    g = void 0 === f ? "" : f,
                    b = (0, h.I0)(),
                    w = (0, I.Tu)().user,
                    T = y.useState(!1),
                    E = (0, i.Z)(T, 2),
                    P = E[0],
                    R = E[1],
                    G = y.useState(null),
                    M = (0, i.Z)(G, 2),
                    z = M[0],
                    W = M[1],
                    X = y.useRef(null),
                    Q = (0, F.sd)({
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
                    H = Q.favoriteInfo,
                    $ = Q.isLoading,
                    U = (0, F.wu)({
                        type: r
                    }),
                    _ = U.data,
                    B = U.isLoading,
                    J = (0, k.k5)().data,
                    Y = (0, F.Ec)(),
                    K = (0, i.Z)(Y, 2),
                    V = K[0],
                    ee = K[1].isLoading,
                    te = (0, F.Xc)(),
                    re = (0, i.Z)(te, 2),
                    ne = re[0],
                    ae = re[1].isLoading,
                    oe = (0, F.zZ)(),
                    ie = (0, i.Z)(oe, 2),
                    ue = ie[0],
                    se = ie[1].isLoading,
                    ce = (0, x.S)({
                        type: r
                    }).data,
                    le = y.useCallback((function(e) {
                        var t;
                        null !== (t = X.current) && void 0 !== t && t.contains(e.target) || R(!1)
                    }), [X.current]);
                y.useEffect((function() {
                    return window.addEventListener("click", le),
                        function() {
                            return window.removeEventListener("click", le)
                        }
                }), [X.current]);
                var de = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (H) {
                                            e.next = 3;
                                            break
                                        }
                                        return R(!P), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, ne({
                                            id: H.id,
                                            type: r,
                                            groupName: H.tags[0]
                                        }).unwrap();
                                    case 5:
                                        (t = e.sent).error ? b((0, Z.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (n = null === (a = t.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : b((0, Z.d)({
                                            title: "Favorite Removed",
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), R(!1), W(null);
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
                    pe = function(e) {
                        var t, n = null !== (t = null == J ? void 0 : J.maxFavoritesPerGroup[r]) && void 0 !== t ? t : J.defaultMaxFavoritesPerGroup;
                        return (null == _ ? void 0 : _[e]) >= n && (b((0, Z.d)({
                            title: "Cannot save to a full collection",
                            icon: v.eH,
                            message: "You will need to make space before you can add more favorites to this collection",
                            color: "warning",
                            timeout: 7e3
                        })), !0)
                    },
                    ve = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, V({
                                            type: r,
                                            favoriteId: n,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? b((0, Z.d)({
                                            title: "Failed to create a favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : b((0, Z.d)({
                                            title: "Favorite Saved to ".concat(ce.find((function(e) {
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
                            var a, o, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ue({
                                            id: H.id,
                                            type: r,
                                            favoriteId: n,
                                            oldGroupName: H.tags[0],
                                            newGroupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? b((0, Z.d)({
                                            title: "Failed to move favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : b((0, Z.d)({
                                            title: "Favorite Moved to ".concat(ce.find((function(e) {
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
                    me = function() {
                        var e = (0, o.Z)(m().mark((function e(t) {
                            var n, a, o;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ne({
                                            id: H.id,
                                            type: r,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (n = e.sent).error ? b((0, Z.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (a = null === (o = n.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : b((0, Z.d)({
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
                        H && W(H.tags[0])
                    }), [H]), $) return y.createElement(S.UU, {
                    width: "100%",
                    height: "49px",
                    className: "mt-2"
                });
                var ye = H ? d.T : s.T,
                    ge = H ? "Remove Favorite" : "Add to Favorites";
                P && (ge = H ? "Move Favorite" : "Select Collection"), ee && (ge = "Adding..."), ae && (ge = "Deleting..."), se && (ge = "Moving...");
                var be = ee || ae || se;
                return "private" === u && a !== (null == w ? void 0 : w.id) ? null : y.createElement(A, {
                    ref: X,
                    className: "\n        tw-border-solid tw-border-2 hover:tw-border-[#086c84]\n        ".concat(P ? "tw-border-[#086c84] tw-border-2 tw-rounded-b-md tw-rounded-t-none md:tw-rounded-b-none md:tw-rounded-t-md" : "tw-rounded-md tw-border-[#064b5c]", "\n        ").concat(g, "\n      "),
                    isSelecting: P
                }, y.createElement(S.X2, {
                    className: "align-items-center",
                    role: "button",
                    onClick: de
                }, y.createElement(S.$1, {
                    icon: ye,
                    className: "me-4"
                }), y.createElement("div", null, ge)), y.createElement(S.X2, {
                    className: "align-items-center h-100",
                    role: "button",
                    onClick: function() {
                        R(!P)
                    }
                }, y.createElement(L, null), y.createElement(N, {
                    icon: l.pt,
                    rotation: P ? 0 : 180,
                    className: "ms-4 me-1",
                    color: "#6ae3f9"
                })), P && y.createElement(q, {
                    className: " tw-border-solid tw-border-[#086c84] tw-select-none tw-bottom-[calc(100%+2px)] tw-rounded-t-md tw-border-t-2 tw-rounded-b-none tw-border-b-0 md:tw-bottom-auto md:tw-top-[calc(100%+2px)] md:tw-rounded-t-none md:tw-rounded-b-md md:tw-border-b-2  md:tw-border-t-0 "
                }, null == ce ? void 0 : ce.map((function(e) {
                    var t, n;
                    return y.createElement(O, {
                        key: e.id,
                        onClick: (n = e.name, function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.stopPropagation(), R(!1), H) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!pe(n)) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.next = 7, ve(n);
                                        case 7:
                                            return W(n), e.abrupt("return");
                                        case 9:
                                            if (n === H.tags[0]) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!pe(n)) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.next = 14, fe(n);
                                        case 14:
                                            return W(n), e.abrupt("return");
                                        case 16:
                                            return e.next = 18, me(n);
                                        case 18:
                                            W(null);
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
                    }, y.createElement(C, {
                        isSelected: z === e.name,
                        icon: c.LE,
                        className: "me-3"
                    }), e.displayName), !B && y.createElement("div", null, null == _ ? void 0 : _[e.name], " / ", null !== (t = null == J ? void 0 : J.maxFavoritesPerGroup[r]) && void 0 !== t ? t : 100))
                }))), be && y.createElement(j, null, y.createElement(D, null)))
            };
            T.propTypes = {
                contentId: b().string.isRequired,
                authorId: b().string.isRequired,
                releaseStatus: b().oneOf(["private", "public", "unlisted"]),
                className: b().string,
                type: b().oneOf(["world", "avatar", "event", "friend"])
            };
            const E = T;
            var A = (0, u.Z)(S.X2, {
                    target: "e1o4xuq47"
                })({
                    name: "1y4y4wq",
                    styles: "justify-content:space-between;position:relative;align-items:center;font-size:1.2rem;background:#064b5c;color:#6ae3f9;padding:0.5rem 1rem;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}"
                }),
                L = (0, u.Z)("div", {
                    target: "e1o4xuq46"
                })({
                    name: "kktyj1",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px"
                }),
                N = (0, u.Z)(S.$1, {
                    target: "e1o4xuq45"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                q = (0, u.Z)(S.JX, {
                    target: "e1o4xuq44"
                })({
                    name: "1p1g0qm",
                    styles: "position:relative;font-size:1.15rem;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);left:-2px;z-index:2;min-height:1rem"
                }),
                O = (0, u.Z)(S.X2, {
                    target: "e1o4xuq43"
                })({
                    name: "khx7zf",
                    styles: "padding:0.5rem 1rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;cursor:pointer;&:hover{background-color:#086c84;svg{opacity:0.5;}}"
                }),
                P = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                C = (0, u.Z)(S.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e1o4xuq42"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? P : ""
                }), ";"),
                j = (0, u.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                R = (0, w.F4)(n || (n = (0, a.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                D = (0, u.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", R, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
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

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var F = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                x = !!navigator.canShare;
            const k = function(e) {
                var t = e.url,
                    r = e.text,
                    n = e.title,
                    o = e.files,
                    d = e.style,
                    w = e.shareLabel,
                    k = void 0 === w ? "Share" : w,
                    Z = e.copyLabel,
                    I = void 0 === Z ? "Copy" : Z,
                    S = e.displayLabel,
                    T = void 0 !== S && S,
                    E = (0, u.Z)(e, b),
                    A = (0, f.I0)(),
                    L = v.useMemo((function() {
                        return x && navigator.canShare({
                            url: t,
                            text: r,
                            title: n,
                            files: o
                        })
                    }), [x, t, r, n, o]);
                if (!F && !x) return null;
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
                    q = function() {
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
                    O = L ? k : I,
                    P = L ? c.Dr : s.kZ;
                return v.createElement(g.ZP, (0, a.Z)({
                    neutral: !0,
                    style: h({
                        lineHeight: "1"
                    }, d)
                }, E, {
                    title: O,
                    onClick: q
                }), v.createElement(y.Z, {
                    icon: P,
                    className: T && "tw-mr-1"
                }), T && O)
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
//# sourceMappingURL=6acc053dd5a49edc6228d48b018d3984e3904310097a456c34a7c05a53562b62.js.map