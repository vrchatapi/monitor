"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1259], {
        93007: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(45861).o)({
                name: "group",
                width: 64,
                path: "M 32,36 V 32 H 10.42 c 0,11.92 9.66,21.58 21.58,21.58 v -4 c -1.41,0 -2.79,-0.17 -4.1,-0.49 V 36 Z M 24.12,47.71 C 19.53,45.4 16.08,41.12 14.88,36 h 9.24 z M 19.87,18.79 c 2.41,0 4.43,2.55 4.96,4.24 0.14,0.46 0.53,0.8 1.02,0.8 v 0 c 0.62,0 1.12,-0.55 1.05,-1.17 -0.47,-4.19 -2.32,-8.42 -7.03,-8.42 v 0 c -4.54,0 -6.56,4.23 -7.03,8.42 -0.07,0.62 0.42,1.17 1.05,1.17 v 0 c 0.48,0 0.88,-0.34 1.02,-0.8 0.52,-1.72 2.55,-4.23 4.97,-4.23 M 32,0 V 32 H 53.57 C 53.57,43.92 43.91,53.58 32,53.58 V 64 C 49.67,64 64,49.68 64,32 64,14.32 49.67,0 32,0 Z m 18.08,23.83 h -0.01 c -0.48,0 -0.87,-0.34 -1.01,-0.8 -0.53,-1.69 -2.56,-4.24 -4.97,-4.24 -2.41,0 -4.45,2.51 -4.97,4.24 -0.14,0.46 -0.53,0.8 -1.02,0.8 -0.62,0 -1.11,-0.55 -1.04,-1.17 0.23,-2.09 0.86,-4.2 1.99,-5.78 1.13,-1.58 2.77,-2.64 5.04,-2.64 4.71,0 6.56,4.23 7.04,8.42 0.06,0.62 -0.43,1.17 -1.05,1.17 z M 39.88,36 V 47.71 C 44.47,45.39 47.92,41.12 49.11,36 Z m -3.79,0 H 32 v 13.58 c 1.41,0 2.78,-0.17 4.09,-0.49 z M 32,5 C 46.89,5 59,17.11 59,32 59,46.89 46.89,59 32,59 17.11,59 5,46.89 5,32 5,17.11 17.11,5 32,5 M 32,0 C 14.33,0 0,14.33 0,32 0,49.67 14.33,64 32,64 49.67,64 64,49.67 64,32 64,14.33 49.67,0 32,0 Z"
            })
        },
        81362: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(67294),
                a = r(53637),
                o = r(95305);
            const i = function(e) {
                var t = e.error,
                    r = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var i = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return n.createElement(a.Z, null, n.createElement(o.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, n.createElement("h2", null, "VRChat"), n.createElement("p", null, "An error has occurred. To continue: "), n.createElement("p", null, "Press the F5 to refresh the website, or "), n.createElement("p", null, "Press the back button to leave the website, or "), n.createElement("p", null, "Check our ", n.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), n.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * i.length)], "! ", i[Math.floor(Math.random() * i.length)], ")"), n.createElement("code", null, r, " ", t)))
            }
        },
        67371: (e, t, r) => {
            r.d(t, {
                Z: () => T
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
                h = r.n(g),
                b = r(70917),
                w = r(32981),
                x = r(751),
                F = r(13271),
                Z = r(22202),
                E = r(64258),
                k = r(80873),
                I = r(34226);
            var S = function(e) {
                var t = e.type,
                    r = void 0 === t ? "world" : t,
                    n = e.contentId,
                    a = e.authorId,
                    u = e.releaseStatus,
                    f = e.className,
                    g = (0, w.I0)(),
                    h = (0, k.Tu)().user,
                    b = y.useState(!1),
                    S = (0, i.Z)(b, 2),
                    T = S[0],
                    C = S[1],
                    M = y.useState(null),
                    R = (0, i.Z)(M, 2),
                    D = R[0],
                    G = R[1],
                    H = y.useRef(null),
                    V = (0, x.sd)({
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
                    W = V.favoriteInfo,
                    X = V.isLoading,
                    Q = (0, x.wu)({
                        type: r
                    }),
                    $ = Q.data,
                    U = Q.isLoading,
                    _ = (0, Z.k5)().data,
                    B = (0, x.Ec)(),
                    J = (0, i.Z)(B, 2),
                    Y = J[0],
                    K = J[1].isLoading,
                    ee = (0, x.Xc)(),
                    te = (0, i.Z)(ee, 2),
                    re = te[0],
                    ne = te[1].isLoading,
                    ae = (0, x.zZ)(),
                    oe = (0, i.Z)(ae, 2),
                    ie = oe[0],
                    ue = oe[1].isLoading,
                    se = (0, F.S)({
                        type: r
                    }).data,
                    ce = y.useCallback((function(e) {
                        var t;
                        null !== (t = H.current) && void 0 !== t && t.contains(e.target) || C(!1)
                    }), [H.current]);
                y.useEffect((function() {
                    return window.addEventListener("click", ce),
                        function() {
                            return window.removeEventListener("click", ce)
                        }
                }), [H.current]);
                var le = function() {
                        var e = (0, o.Z)(m().mark((function e() {
                            var t, n, a;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (W) {
                                            e.next = 3;
                                            break
                                        }
                                        return C(!T), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, re({
                                            id: W.id,
                                            type: r,
                                            groupName: W.tags[0]
                                        }).unwrap();
                                    case 5:
                                        (t = e.sent).error ? g((0, E.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (n = null === (a = t.error.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, E.d)({
                                            title: "Favorite Removed",
                                            icon: p.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), C(!1), G(null);
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
                        var t, n = null !== (t = null == _ ? void 0 : _.maxFavoritesPerGroup[r]) && void 0 !== t ? t : _.defaultMaxFavoritesPerGroup;
                        return (null == $ ? void 0 : $[e]) >= n && (g((0, E.d)({
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
                                        return e.next = 2, Y({
                                            type: r,
                                            favoriteId: n,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? g((0, E.d)({
                                            title: "Failed to create a favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, E.d)({
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
                                            id: W.id,
                                            type: r,
                                            favoriteId: n,
                                            oldGroupName: W.tags[0],
                                            newGroupName: t
                                        }).unwrap();
                                    case 2:
                                        (a = e.sent).error ? g((0, E.d)({
                                            title: "Failed to move favorite",
                                            icon: v.eH,
                                            message: null !== (o = null === (i = a.error.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== o ? o : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, E.d)({
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
                                            id: W.id,
                                            type: r,
                                            groupName: t
                                        }).unwrap();
                                    case 2:
                                        (n = e.sent).error ? g((0, E.d)({
                                            title: "Failed to delete favorite",
                                            icon: v.eH,
                                            message: null !== (a = null === (o = n.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        })) : g((0, E.d)({
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
                        W && G(W.tags[0])
                    }), [W]), X) return y.createElement(I.UU, {
                    width: "100%",
                    height: "49px",
                    className: "mt-2"
                });
                var me = W ? d.T : s.T,
                    ye = W ? "Remove Favorite" : "Add to Favorites";
                T && (ye = W ? "Move Favorite" : "Select Collection"), K && (ye = "Adding..."), ne && (ye = "Deleting..."), ue && (ye = "Moving...");
                var ge = K || ne || ue;
                return "private" === u && a !== (null == h ? void 0 : h.id) ? null : y.createElement(A, {
                    ref: H,
                    className: f,
                    isSelecting: T
                }, y.createElement(I.X2, {
                    className: "align-items-center",
                    role: "button",
                    onClick: le
                }, y.createElement(I.$1, {
                    icon: me,
                    className: "me-4"
                }), y.createElement("div", null, ye)), y.createElement(I.X2, {
                    className: "align-items-center h-100",
                    role: "button",
                    onClick: function() {
                        C(!T)
                    }
                }, y.createElement(L, null), y.createElement(N, {
                    icon: l.pt,
                    rotation: T ? 0 : 180,
                    className: "ms-4 me-1",
                    color: "#6ae3f9"
                })), T && y.createElement(O, null, null == se ? void 0 : se.map((function(e) {
                    var t, n;
                    return y.createElement(P, {
                        key: e.id,
                        onClick: (n = e.name, function() {
                            var e = (0, o.Z)(m().mark((function e(t) {
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.stopPropagation(), C(!1), W) {
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
                                            return G(n), e.abrupt("return");
                                        case 9:
                                            if (n === W.tags[0]) {
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
                                            return G(n), e.abrupt("return");
                                        case 16:
                                            return e.next = 18, fe(n);
                                        case 18:
                                            G(null);
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
                    }, y.createElement(I.X2, {
                        className: "align-items-center"
                    }, y.createElement(q, {
                        isSelected: D === e.name,
                        icon: c.LE,
                        className: "me-3"
                    }), e.displayName), !U && y.createElement("div", null, null == $ ? void 0 : $[e.name], " / ", null !== (t = null == _ ? void 0 : _.maxFavoritesPerGroup[r]) && void 0 !== t ? t : 100))
                }))), ge && y.createElement(j, null, y.createElement(z, null)))
            };
            S.propTypes = {
                contentId: h().string.isRequired,
                authorId: h().string.isRequired,
                releaseStatus: h().oneOf(["private", "public", "unlisted"]),
                className: h().string
            };
            const T = S;
            var C = {
                    name: "ijbj2b",
                    styles: "border-radius:0 0 4px 4px;border-color:#086c84"
                },
                A = (0, u.Z)(I.X2, {
                    target: "e1o4xuq47"
                })("justify-content:space-between;position:relative;align-items:center;border:#064b5c solid 2px;border-radius:4px;font-size:1.2rem;background:#064b5c;color:#6ae3f9;padding:0.5rem 1rem;box-sizing:border-box;position:relative;&:hover{border-color:#086c84;}", (function(e) {
                    return e.isSelecting ? C : ""
                }), ";"),
                L = (0, u.Z)("div", {
                    target: "e1o4xuq46"
                })({
                    name: "kktyj1",
                    styles: "height:100%;position:absolute;background:hsla(0, 0%, 100%, 0.2);width:1px"
                }),
                N = (0, u.Z)(I.$1, {
                    target: "e1o4xuq45"
                })({
                    name: "crmczs",
                    styles: "transition:transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }),
                O = (0, u.Z)(I.JX, {
                    target: "e1o4xuq44"
                })({
                    name: "14rwa6y",
                    styles: "position:relative;border:#086c84 solid 2px;border-width:2px 2px 0 2px;border-radius:4px 4px 0 0;font-size:1.15rem;background:#064b5c;color:#6ae3f9;box-sizing:border-box;position:absolute;width:calc(100% + 4px);bottom:calc(100% + 2px);left:-2px;z-index:2;min-height:1rem"
                }),
                P = (0, u.Z)(I.X2, {
                    target: "e1o4xuq43"
                })({
                    name: "khx7zf",
                    styles: "padding:0.5rem 1rem;align-items:center;transition:background-color 150ms ease-in-out;justify-content:space-between;align-items:center;cursor:pointer;&:hover{background-color:#086c84;svg{opacity:0.5;}}"
                }),
                M = {
                    name: "1d9ftqx",
                    styles: "opacity:1!important"
                },
                q = (0, u.Z)(I.$1, {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e1o4xuq42"
                })("opacity:0;", (function(e) {
                    return e.isSelected ? M : ""
                }), ";"),
                j = (0, u.Z)("div", {
                    target: "e1o4xuq41"
                })({
                    name: "m6phxa",
                    styles: "position:absolute;width:100%;height:2px;border-radius:0 0 4px 4px;overflow:hidden;bottom:0;left:0"
                }),
                R = (0, b.F4)(n || (n = (0, a.Z)(["\n  0% {\n    left: -100%;\n    width: 80%;\n  }\n\n  100% {\n    left: 100%;\n    width: 40%;\n  }\n"]))),
                z = (0, u.Z)("div", {
                    target: "e1o4xuq40"
                })("position:absolute;z-index:10;bottom:0;height:2px;background-color:var(--bs-success);animation-name:", R, ";animation-iteration-count:infinite;animation-duration:1.5s;animation-timing-function:ease-in-out;")
        },
        98185: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(67294),
                a = r(43862),
                o = r(81362);
            const i = function(e) {
                var t = e.reducer,
                    r = e.loading,
                    i = e.loadingList,
                    u = e.error,
                    s = e.statusCode,
                    c = e.children,
                    l = !1;
                return i && i.forEach((function(e) {
                    e && (l = !0)
                })), null != s && 200 !== s && "200" !== s ? n.createElement(o.Z, {
                    error: u,
                    statusCode: s
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? n.createElement(o.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : u ? n.createElement(o.Z, {
                    error: u
                }) : null != t && t.error ? n.createElement(o.Z, {
                    error: t.error
                }) : r || l || null != t && t.fetching || null != t && t.loading ? n.createElement(a.Z, null) : n.createElement("div", null, c)
            }
        },
        64537: (e, t, r) => {
            r.d(t, {
                Z: () => Z
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
                h = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                F = !!navigator.canShare;
            const Z = function(e) {
                var t = e.url,
                    r = e.text,
                    n = e.title,
                    o = e.files,
                    d = e.style,
                    b = e.shareLabel,
                    Z = void 0 === b ? "Share" : b,
                    E = e.copyLabel,
                    k = void 0 === E ? "Copy" : E,
                    I = e.displayLabel,
                    S = void 0 !== I && I,
                    T = (0, u.Z)(e, h),
                    C = (0, f.I0)(),
                    A = v.useMemo((function() {
                        return F && navigator.canShare({
                            url: t,
                            text: r,
                            title: n,
                            files: o
                        })
                    }), [F, t, r, n, o]);
                if (!x && !F) return null;
                var L = function() {
                        var e = (0, i.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([n, r, t].filter(Boolean).join("\n"));
                                    case 2:
                                        C((0, m.d)({
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
                    N = function() {
                        var e = (0, i.Z)(p().mark((function e(a) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.preventDefault(), !A) {
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
                                        C((0, m.d)({
                                            title: "Something went wrong",
                                            icon: l.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), L(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        L();
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
                    O = A ? Z : k,
                    P = A ? c.Dr : s.kZ;
                return v.createElement(g.ZP, (0, a.Z)({
                    neutral: !0,
                    style: w({
                        lineHeight: "1"
                    }, d)
                }, T, {
                    title: O,
                    onClick: N
                }), v.createElement(y.Z, {
                    icon: P,
                    className: S && "tw-mr-1"
                }), S && O)
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
//# sourceMappingURL=4147fd4cc2aa806ed4268edaef41c5aaad96cc467522e97d3dc6c3e00a59db71.js.map