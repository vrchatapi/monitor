(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4021], {
        25411: (e, t, n) => {
            "use strict";
            n.d(t, {
                CJ: () => g,
                Tr: () => v,
                gW: () => f,
                k4: () => p,
                pz: () => d,
                zf: () => h
            });
            var a = n(4942),
                r = n(9669),
                i = n.n(r);
            n(12227);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = {
                    sort: "relevance",
                    fuzzy: !0
                },
                s = {
                    sort: "relevance",
                    fuzzy: !1
                },
                u = {
                    sort: "created",
                    releaseStatus: "public"
                },
                m = function(e) {
                    var t = e.searchTerm,
                        n = void 0 === t ? "" : t;
                    return e.isInternalVariant ? n : n.replace(/tag:\S*/, "")
                },
                d = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.isInternalVariant,
                        o = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n: a
                        });
                    return r && t && (o = l(l({}, o), n)), {
                        type: "SEARCH_USERS",
                        payload: i().get(window.apiUrl("/api/1/users"), {
                            params: o
                        })
                    }
                },
                p = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.offset,
                        o = e.isInternalVariant,
                        c = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: o
                            }),
                            n: a,
                            offset: r
                        });
                    return o && t && (c = l(l({}, c), n)), {
                        type: "LOAD_MORE_USERS",
                        payload: i().get(window.apiUrl("/api/1/users"), {
                            params: c
                        })
                    }
                },
                f = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        a = e.offset,
                        r = e.isInternalVariant,
                        o = l(l({}, c), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n,
                            offset: a
                        });
                    return {
                        type: "LOAD_MORE_WORLDS",
                        payload: i().get(window.apiUrl("/api/1/worlds"), {
                            params: o
                        })
                    }
                },
                g = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        a = e.offset,
                        r = e.isInternalVariant,
                        o = l(l({}, u), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n,
                            offset: a
                        });
                    return {
                        type: "LOAD_MORE_AVATARS",
                        payload: i().get(window.apiUrl("/api/1/avatars"), {
                            params: o
                        })
                    }
                },
                h = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.isInternalVariant,
                        o = [];
                    return o.push(d({
                        searchTerm: t,
                        queryParams: n,
                        n: a,
                        isInternalVariant: r
                    })), o.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            a = e.isInternalVariant,
                            r = l(l({}, c), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: a
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_WORLDS",
                            payload: i().get(window.apiUrl("/api/1/worlds"), {
                                params: r
                            })
                        }
                    }({
                        searchTerm: t,
                        n: a,
                        isInternalVariant: r
                    })), r && o.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            a = e.isInternalVariant,
                            r = l(l({}, u), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: a
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_AVATARS",
                            payload: i().get(window.apiUrl("/api/1/avatars"), {
                                params: r
                            })
                        }
                    }({
                        searchTerm: t,
                        n: a,
                        isInternalVariant: r
                    })), o
                },
                v = function() {
                    return {
                        type: "AUTO_REDIRECT_TOGGLE"
                    }
                }
        },
        78542: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var a = n(45697),
                r = n.n(a),
                i = n(67294),
                o = n(18800),
                l = n.n(o),
                c = n(94266),
                s = n.n(c),
                u = n(23667),
                m = n.n(u),
                d = n(22308),
                p = n.n(d),
                f = n(37652),
                g = n.n(f),
                h = n(4239),
                v = n.n(h),
                b = {
                    circle: l(),
                    flower: s(),
                    heart: m(),
                    pow: p(),
                    square: g(),
                    star: v()
                },
                w = function(e) {
                    var t = e.metaData,
                        n = e.imageUrl,
                        a = e.size,
                        r = void 0 === a ? 180 : a,
                        o = e.onLoad,
                        l = e.onError,
                        c = e.isThumbnail,
                        s = void 0 !== c && c,
                        u = e.isGrayScale,
                        m = void 0 !== u && u,
                        d = (0, i.useRef)(0),
                        p = (0, i.useRef)(null),
                        f = (0, i.useRef)(null),
                        g = (0, i.useRef)(null),
                        h = (0, i.useRef)(null),
                        v = (0, i.useRef)(-1),
                        w = function(e) {
                            e.filter = m ? "grayscale(1)" : "none"
                        },
                        y = function() {
                            -1 !== v.current && (clearInterval(v.current), v.current = -1)
                        },
                        E = (0, i.useMemo)((function() {
                            return b[null == t ? void 0 : t.maskTag] || null
                        }), [t]),
                        x = (0, i.useRef)(!1),
                        k = (0, i.useMemo)((function() {
                            var e = !(null == t || !t.animated);
                            return e || y(), x.current = e, e
                        }), [t]),
                        I = (0, i.useMemo)((function() {
                            return null == t ? void 0 : t.frames
                        }), [t]),
                        N = (0, i.useMemo)((function() {
                            return null == t ? void 0 : t.framesOverTime
                        }), [t]),
                        T = function() {
                            return I <= 4 ? 512 : I <= 16 ? 256 : I <= 64 ? 128 : void console.error("Frame count of ".concat(I, " is unsupported!"))
                        },
                        C = function() {
                            var e = I <= 4 ? 2 : I <= 16 ? 4 : I <= 64 ? 8 : void console.error("Frame count of ".concat(I, " is unsupported!")),
                                t = T();
                            return {
                                x: d.current % e * t,
                                y: Math.floor(d.current / e) * t
                            }
                        },
                        Z = function() {
                            y(), null === g.current && h.current && (g.current = h.current.getContext("2d")), g.current && g.current.clearRect(0, 0, r, r), k && I && N > 0 && (v.current = setInterval(S, 1e3 / N))
                        },
                        S = function() {
                            if (k) {
                                if (null !== g.current && null !== p.current) {
                                    var e = g.current;
                                    e.clearRect(0, 0, 1e3, 1e3), e.save(), null !== E && f.current && (e.drawImage(f.current, 0, 0, r, r), e.globalCompositeOperation = "source-in");
                                    var t = C(),
                                        n = T();
                                    w(e), e.drawImage(p.current, t.x, t.y, n, n, 0, 0, r, r), e.restore(), d.current = (d.current + 1) % I
                                }
                            } else y()
                        },
                        j = function() {
                            if (null !== h.current && null !== p.current) {
                                var e = h.current.getContext("2d");
                                if (e.clearRect(0, 0, r, r), e.imageSmoothingEnabled = !1, e.save(), null !== E && f.current && (e.drawImage(f.current, 0, 0, r, r), e.globalCompositeOperation = "source-in"), s) return w(e), e.drawImage(p.current, 0, 0, r, r), void e.restore();
                                p.current.width;
                                var t = p.current.width,
                                    n = p.current.height,
                                    a = t / n,
                                    i = a > 1 ? Math.min(r, t) : Math.min(r, n) * a,
                                    o = a > 1 ? Math.min(r, t) / a : Math.min(r, n);
                                w(e);
                                var l = (r - i) / 2,
                                    c = (r - o) / 2;
                                e.drawImage(p.current, l, c, i, o), e.restore()
                            }
                        },
                        O = function() {
                            p.current = null;
                            var e = new Image;
                            if (e.onload = function() {
                                    p.current = e, k && I && N ? Z() : j(), void 0 !== o && o()
                                }, e.onerror = function(e) {
                                    console.error("Error loading image:", e), void 0 !== l && l(e)
                                }, E) {
                                var t = new Image;
                                t.onload = function() {
                                    f.current = t, p.current && (k && I && N || j())
                                }, t.src = E
                            } else f.current = null;
                            e.src = n
                        };
                    return (0, i.useEffect)((function() {
                        if (y(), p.current = null, f.current = null, h.current) {
                            var e = h.current.getContext("2d");
                            e && e.clearRect(0, 0, h.current.width, h.current.height)
                        }
                        return d.current = 0, O(),
                            function() {
                                y()
                            }
                    }), [t, n, r]), (0, i.useEffect)((function() {
                        if (p.current) return y(), k && I && N ? Z() : j(),
                            function() {
                                y()
                            }
                    }), [k, I, N, r]), (0, i.useEffect)((function() {
                        O()
                    }), [n, E, r]), (0, i.useEffect)((function() {
                        return function() {
                            y()
                        }
                    }), []), i.createElement("canvas", {
                        width: r,
                        height: r,
                        ref: h
                    })
                };
            w.propTypes = {
                isAnimated: r().bool,
                animationData: r().object,
                imageUrl: r().string,
                size: r().number,
                onLoad: r().func,
                onError: r().func,
                isThumbnail: r().bool,
                isGrayScale: r().bool,
                metaData: r().object
            };
            const y = w
        },
        88233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(4965),
                r = n(65394),
                i = n(85020),
                o = n(67294),
                l = n(37463);
            const c = function(e) {
                var t = e.imageUrl,
                    n = e.closeCallback,
                    a = e.nextCallback,
                    c = e.prevCallback;
                return t ? o.createElement(o.Fragment, null, o.createElement(u, {
                    onClick: n
                }), o.createElement(s, null, c && o.createElement(p, {
                    onClick: c,
                    hasCallback: c
                }, o.createElement(l.$1, {
                    icon: i.A3,
                    width: 65
                })), o.createElement(m, {
                    src: t
                }), a && o.createElement(d, {
                    onClick: a,
                    hasCallback: a
                }, o.createElement(l.$1, {
                    icon: r._t,
                    width: 65
                })))) : null
            };
            var s = (0, a.Z)("div", {
                    target: "eac6qxj4"
                })({
                    name: "ttwpi3",
                    styles: "position:fixed;display:flex;flex-direction:row;justify-content:center;align-items:center;z-index:1337;top:0;left:0;width:100%;height:100%;pointer-events:none;background:transparent"
                }),
                u = (0, a.Z)("div", {
                    target: "eac6qxj3"
                })({
                    name: "jyw4fx",
                    styles: "position:fixed;background:rgba(0, 0, 0, 0.5);z-index:1336;top:0;left:0;width:100%;height:100%"
                }),
                m = (0, a.Z)("img", {
                    target: "eac6qxj2"
                })({
                    name: "xgli30",
                    styles: "max-width:90%;max-height:90%;transition:all 0.3s ease;pointer-events:all"
                }),
                d = (0, a.Z)("div", {
                    target: "eac6qxj1"
                })("margin:0 15px;cursor:pointer;pointer-events:all;opacity:", (function(e) {
                    return e.hasCallback ? 1 : .5
                }), ";color:", (function(e) {
                    return e.hasCallback ? "var(--gray-300)" : "var(--gray-600)"
                }), ";>*{transition:all 0.3s ease;:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(5px, 0)" : "none"
                }), ";}}"),
                p = (0, a.Z)(d, {
                    target: "eac6qxj0"
                })(">*:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(-5px, 0)" : "none"
                }), ";}")
        },
        46320: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(67294),
                r = n(89250),
                i = n(12599);
            const o = function(e) {
                var t = e.to,
                    n = e.replace,
                    o = void 0 === n || n,
                    l = e.state,
                    c = e.relative,
                    s = (0, r.s0)(),
                    u = (0, r.UO)();
                if (!(0, r.GV)()) throw new Error("RedirectLayout must be used in a Router context");
                return a.useEffect((function() {
                    s((0, i.Gn)(t, u), {
                        replace: o,
                        state: l,
                        relative: c
                    })
                })), null
            }
        },
        73670: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var a = n(54546),
                r = n(95337),
                i = n(67294),
                o = n(83505),
                l = n(60994),
                c = n(87261),
                s = n(86646);
            const u = function(e) {
                var t = e.searchString,
                    n = e.initialString,
                    u = void 0 === n ? "" : n,
                    m = e.placeholder,
                    d = (0, i.useState)(u),
                    p = (0, a.Z)(d, 2),
                    f = p[0],
                    g = p[1];
                return i.createElement(l.Z, null, i.createElement(s.Z, {
                    icon: r.wn,
                    color: "var(--bs-gray)",
                    width: 24,
                    className: (0, o.iv)({
                        name: "lo66c0",
                        styles: "position:absolute;left:7px;top:7px;pointer-events:none;z-index:5"
                    })
                }), i.createElement(c.Z, {
                    className: (0, o.iv)({
                        name: "7lu28v",
                        styles: "padding-left:40px!important;height:37px!important;border-radius:7px!important"
                    }),
                    type: "text",
                    onChange: function(e) {
                        return n = e.target.value, t && t(n), void g(n);
                        var n
                    },
                    placeholder: null != m ? m : "Search...",
                    value: f
                }))
            }
        },
        63221: (e, t, n) => {
            "use strict";
            n.d(t, {
                M7: () => p,
                Mw: () => r,
                TW: () => i,
                a8: () => s,
                fq: () => f,
                hp: () => u,
                iI: () => o,
                kI: () => g,
                lE: () => d,
                nD: () => m,
                oq: () => c,
                qH: () => a,
                wN: () => l
            });
            var a = 1e5,
                r = 50,
                i = {
                    DEFAULT: "default",
                    PRIVATE: "private"
                },
                o = {
                    VISIBLE: "visible",
                    FRIENDS: "friends",
                    HIDDEN: "hidden"
                },
                l = {
                    CLOSED: "closed",
                    INVITE: "invite",
                    REQUEST: "request",
                    OPEN: "open"
                },
                c = {
                    INVITED: "invited",
                    REQUESTED: "requested",
                    REJECTED: "rejected",
                    BLOCKED: "blocked",
                    USER_BLOCKED: "userblocked"
                },
                s = {
                    members: "Group",
                    public: "Group Public",
                    plus: "Group+"
                },
                u = ["group-instance-open-create", "group-instance-plus-create", "group-instance-public-create", "group-instance-restricted-create", "*"],
                m = ["group-instance-plus-create", "*"],
                d = ["group-instance-public-create", "*"],
                p = ["group-instance-restricted-create", "*"],
                f = ["group-instance-age-gated-create", "*"],
                g = ["group-instance-open-create", "group-instance-restricted-create", "*"]
        },
        54021: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Dn
            });
            var a = n(54546),
                r = n(67294),
                i = n(32981),
                o = n(89250),
                l = n(53637),
                c = n(83505),
                s = n(24975),
                u = n(27484),
                m = n.n(u),
                d = n(68599),
                p = n(85322),
                f = n(3629),
                g = n(42619),
                h = n(87709),
                v = n(65394),
                b = n(92332),
                w = n(85020),
                y = n(75605),
                E = n(24732),
                x = n(18478),
                k = n(7469),
                I = n(37463),
                N = n(50048),
                T = n(3447),
                C = n(6344),
                Z = n(45697),
                S = n.n(Z),
                j = n(55206),
                O = n(19531),
                A = n(78542),
                q = function(e) {
                    var t = e.gallery,
                        n = void 0 === t ? [] : t,
                        i = e.isOpen,
                        o = void 0 !== i && i,
                        l = e.onCloseCallback,
                        c = e.openIndex,
                        s = e.deleteItemCallback,
                        u = void 0 === s ? null : s,
                        d = e.onArchiveCallback,
                        Z = void 0 === d ? null : d,
                        S = e.type,
                        q = (0, r.useRef)(null),
                        P = (0, r.useState)(c),
                        z = (0, a.Z)(P, 2),
                        R = z[0],
                        U = z[1],
                        D = (0, r.useState)({
                            x: 0,
                            y: 0
                        }),
                        M = (0, a.Z)(D, 2),
                        $ = M[0],
                        W = M[1],
                        V = (0, r.useState)(!1),
                        L = (0, a.Z)(V, 2),
                        G = L[0],
                        _ = L[1],
                        F = (0, r.useState)({
                            x: 0,
                            y: 0
                        }),
                        B = (0, a.Z)(F, 2),
                        J = B[0],
                        K = B[1],
                        X = (0, r.useState)(1),
                        Q = (0, a.Z)(X, 2),
                        H = Q[0],
                        Y = Q[1],
                        ee = (0, r.useState)(!1),
                        te = (0, a.Z)(ee, 2),
                        ne = te[0],
                        ae = te[1],
                        re = (0, r.useState)(!0),
                        ie = (0, a.Z)(re, 2),
                        oe = ie[0],
                        le = ie[1],
                        ce = (0, r.useMemo)((function() {
                            return R === n.length - 1
                        }), [R, n]),
                        se = (0, r.useMemo)((function() {
                            return 0 === R
                        }), [R]),
                        ue = (0, r.useMemo)((function() {
                            var e = j._[S];
                            return null == e ? void 0 : e.label
                        }), [S]),
                        me = (0, r.useMemo)((function() {
                            return n[R]
                        }), [n, R]);
                    (0, r.useEffect)((function() {
                        0 !== n.length || l()
                    }), [n]), (0, r.useEffect)((function() {
                        U(c)
                    }), [c]);
                    var de = (0, r.useCallback)((function() {
                            Y(1), W({
                                x: 0,
                                y: 0
                            }), ae(!1), le(!0), K({
                                x: 0,
                                y: 0
                            }), l()
                        }), [l]),
                        pe = (0, r.useMemo)((function() {
                            var e, t, a;
                            return null !== (e = null === (t = n[R]) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== e ? e : null === (a = n[R]) || void 0 === a ? void 0 : a.imageUrl
                        }), [n, R]),
                        fe = (0, r.useCallback)((function(e) {
                            e.preventDefault();
                            var t = -.01 * e.deltaY;
                            Y((function(e) {
                                return Math.min(Math.max(e + t, .5), 3)
                            }))
                        }), []),
                        ge = j._[S],
                        he = (0, r.useMemo)((function() {
                            var e;
                            return null === (e = n[R]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("archivable")
                        }), [n, R]);
                    (0, r.useEffect)((function() {
                        U(c), le(!0)
                    }), [c, o]), (0, r.useEffect)((function() {
                        var e = q.current;
                        if (e) return e.addEventListener("wheel", fe, {
                                passive: !1
                            }),
                            function() {
                                e.removeEventListener("wheel", fe)
                            }
                    }), [fe, o, q]), (0, r.useEffect)((function() {
                        var e = function(e) {
                            "Escape" === e.key && de()
                        };
                        if (o) return window.addEventListener("keydown", e),
                            function() {
                                window.removeEventListener("keydown", e)
                            }
                    }), [o, de]);
                    var ve = (0, r.useCallback)((function(e) {
                            e.preventDefault(), _(!0), K({
                                x: e.clientX - $.x,
                                y: e.clientY - $.y
                            })
                        }), [$]),
                        be = (0, r.useCallback)((function(e) {
                            e.preventDefault(), G && W({
                                x: e.clientX - J.x,
                                y: e.clientY - J.y
                            })
                        }), [G, J]),
                        we = (0, r.useCallback)((function() {
                            _(!1)
                        }), []),
                        ye = function() {
                            Y(1), W({
                                x: 0,
                                y: 0
                            })
                        };
                    return n.length && o ? r.createElement("div", {
                        className: "tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-[1040] tw-bg-dark-grey-transparent-90"
                    }, r.createElement("div", {
                        className: "tw-fixed lg:tw-flex lg:tw-flex-row tw-justify-between tw-h-full tw-w-screen"
                    }, r.createElement("div", {
                        className: "\n          tw-fixed tw-select-none \n          tw-top-0 tw-left-0 tw-right-0 tw-bottom-0\n          lg:tw-relative\n          ".concat(ne ? "tw-w-full" : "lg:tw-w-3/4")
                    }, r.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-right-6 tw-h-9 tw-w-32 tw-z-50"
                    }, r.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-32"
                    }, r.createElement(N.ZP, {
                        onClick: function() {
                            Y((function(e) {
                                return Math.min(e + .1, 3)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, r.createElement(I.$1, {
                        icon: k.q9
                    })), r.createElement(N.ZP, {
                        onClick: function() {
                            Y((function(e) {
                                return Math.max(e - .1, .5)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, r.createElement(I.$1, {
                        icon: x.Wq
                    })), r.createElement(N.ZP, {
                        onClick: function() {
                            return ae(!ne)
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9",
                        title: "Toggle fullscreen"
                    }, r.createElement(I.$1, {
                        icon: ne ? E.Qb : y.K9
                    })))), r.createElement("div", {
                        className: "tw-flex tw-w-full tw-h-full tw-justify-between tw-items-center"
                    }, r.createElement(N.ZP, {
                        onClick: function() {
                            se || (U((function(e) {
                                return e - 1
                            })), ye(), le(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(se ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, r.createElement(I.$1, {
                        icon: w.A3,
                        className: "tw-w-12 tw-h-[60px] tw-ml-4"
                    })), r.createElement("div", {
                        ref: q,
                        className: "tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden gallery-image-container",
                        onMouseDown: ve,
                        onMouseMove: be,
                        onMouseUp: we,
                        onMouseLeave: we
                    }, oe && r.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center tw-absolute tw-inset-0"
                    }, r.createElement(I.$1, {
                        icon: b.LM,
                        spin: !0,
                        color: "#404C58",
                        width: 92
                    })), r.createElement("div", {
                        style: {
                            transform: "translate(".concat($.x, "px, ").concat($.y, "px) scale(").concat(H, ")"),
                            transition: G ? "none" : "transform 0.1s ease-out",
                            cursor: G ? "grabbing" : "grab",
                            opacity: oe ? 0 : 1
                        }
                    }, r.createElement(A.Z, {
                        imageUrl: pe,
                        metaData: null == me ? void 0 : me.metadata,
                        onLoad: function() {
                            return le(!1)
                        },
                        onError: function() {
                            return le(!1)
                        },
                        size: 400
                    }))), r.createElement(N.ZP, {
                        onClick: function() {
                            ce || (U((function(e) {
                                return e + 1
                            })), ye(), le(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(ce ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, r.createElement(I.$1, {
                        icon: v._t,
                        className: "tw-w-12 tw-h-[60px] tw-mr-4"
                    })))), r.createElement("div", {
                        className: "\n            tw-bg-darker-grey tw-transition-all\n            tw-absolute tw-bottom-0 tw-h-auto\n            lg:tw-relative\n            ".concat(ne ? "tw-w-0 tw-p-0 tw-opacity-0" : "tw-w-screen tw-px-5 tw-py-9 lg:tw-w-1/4 lg:tw-min-w-[300px]", "\n          ")
                    }, r.createElement("div", {
                        className: "tw-flex tw-items-baseline tw-justify-between"
                    }, r.createElement("h3", {
                        className: "heading tw-text-white tw-text-left tw-text-2xl"
                    }, r.createElement(I.$1, {
                        icon: C.Z,
                        className: "tw-mr-2"
                    }), ue), r.createElement(N.ZP, {
                        className: "tw-w-9 tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        onClick: de
                    }, r.createElement(I.$1, {
                        icon: h.faXmark
                    }))), r.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-items-baseline sm:tw-justify-between tw-mt-2 sm:tw-mt-10 tw-justify-end tw-items-end"
                    }, r.createElement("div", {
                        className: "tw-w-full"
                    }, r.createElement("h4", {
                        className: "tw-text-base tw-font-normal tw-hidden sm:tw-block"
                    }, "Manage"), r.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full"
                    }, O.a && ge.hasConvertToVrcEmojis && r.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full  tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey tw-mr-2 "
                    }, r.createElement(I.$1, {
                        icon: T.Z
                    }), "Create Emoji From Sticker"), ge.hasDelete && r.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Delete ".concat(ue),
                        onClick: function() {
                            null == u || u(me)
                        }
                    }, r.createElement(I.$1, {
                        icon: g.$,
                        className: "tw-mr-2"
                    }), "Delete"), ge.hasArchive && he && r.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-h-12 sm:tw-h-9 tw-w-full tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Archive Sticker",
                        onClick: function() {
                            return null == Z ? void 0 : Z(me)
                        }
                    }, r.createElement(I.$1, {
                        icon: f.hV,
                        className: "tw-mr-2"
                    }), "Archive"))), (null == me ? void 0 : me.created_at) && r.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, r.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Date Created"), r.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, r.createElement(I.$1, {
                        icon: p.fT,
                        className: "tw-mr-2"
                    }), m()(null == me ? void 0 : me.created_at).format("ll, h:mm A"))))))) : null
                };
            const P = q;
            q.propTypes = {
                gallery: S().array.isRequired,
                isOpen: S().bool.isRequired,
                onCloseCallback: S().func.isRequired,
                openIndex: S().number.isRequired,
                deleteItemCallback: S().func,
                onArchiveCallback: S().func,
                type: S().string
            };
            const z = function() {
                var e = (0, i.I0)(),
                    t = (0, i.v9)(d.bI),
                    n = t.isOpen,
                    a = t.gallery,
                    o = t.openIndex,
                    l = t.deleteItemCallback,
                    c = t.onArchiveCallback,
                    s = t.type;
                if ((0, r.useEffect)((function() {
                        return function() {
                            return e((0, d.Bj)())
                        }
                    }), [e]), null == a || !a.length) return null;
                var u = Math.min(Math.max(0, o), a.length - 1);
                return r.createElement(P, {
                    gallery: a,
                    isOpen: n,
                    onCloseCallback: function() {
                        e((0, d.AV)()), e((0, d.Bj)())
                    },
                    openIndex: u,
                    deleteItemCallback: l,
                    onArchiveCallback: c,
                    type: s
                })
            };
            var R = n(28964),
                U = n.n(R),
                D = n(15832),
                M = n(22202),
                $ = n(34698);
            const W = function() {
                var e = (0, M.IB)().data,
                    t = (0, r.useState)(!1),
                    n = (0, a.Z)(t, 2),
                    i = n[0],
                    o = n[1],
                    l = (0, D._)("tutorialInventorySeen", !1),
                    c = (0, a.Z)(l, 2),
                    s = c[0],
                    u = c[1];
                (0, r.useEffect)((function() {
                    o(!s)
                }), []);
                return i && e ? r.createElement("div", {
                    className: "tw-fixed tw-inset-0 tw-z-[2000] tw-pointer-events-all"
                }, r.createElement("div", {
                    className: " tw-absolute tw-rounded-lg tw-z-[2001] tw-shadow-[0_0_0_100vmax_rgba(0,0,0,0.8)] tw-transition-all tw-duration-500 tw-top-[0px] tw-left-[0px] tw-w-[65px] tw-h-[60px] 2xl:tw-top-[60px] 2xl:tw-left-[0px] 2xl:tw-w-[280px] 2xl:tw-h-[1000px] "
                }), r.createElement("div", {
                    className: " tw-rounded-lg tw-bg-link-highlight tw-z-[3002] tw-absolute tw-p-5 tw-transition-all tw-duration-500 tw-w-full sm:tw-w-[450px] tw-top-[60px] tw-left-0 sm:tw-top-[30px] sm:tw-left-[60px] 2xl:tw-top-auto 2xl:tw-bottom-[20px] 2xl:tw-left-[285px]  before:tw-opacity-100 before:tw-content-[''] before:tw-absolute before:tw-border-t-0 before:tw-border-solid before:tw-border-transparent before:tw-border-[30px] before:tw-border-l-link-highlight before:tw-left-[12px] before:tw-top-[-0px] before:tw-rotate-45 sm:before:tw-left-[-30px] sm:before:tw-top-[15px] sm:before:tw-rotate-90 2xl:before:tw-opacity-0 "
                }, r.createElement("div", {
                    className: "tw-flex tw-justify-between tw-flex-col"
                }, r.createElement("p", {
                    className: "tw-font-bold tw-text-[#1a1a1a]"
                }, "The gallery has been renamed and relocated."), r.createElement("p", {
                    className: "tw-text-[#1a1a1a]"
                }, "The gallery has now been relocated under the user profile and renamed as ", r.createElement("span", {
                    className: "tw-font-bold"
                }, "Inventory"), "."), r.createElement("img", {
                    src: U(),
                    alt: "Gallery has now been relocated to Inventory"
                }), r.createElement("div", {
                    className: "tw-flex tw-justify-end tw-mt-4"
                }, r.createElement($.Z, {
                    className: "tw-bg-button-bg-grey tw-text-white tw-px-8 tw-w-full sm:tw-w-auto",
                    onClick: function() {
                        o(!1), u(!0)
                    }
                }, "Got it"))))) : null
            };
            var V = n(4965),
                L = n(47810),
                G = n(34233),
                _ = n(79655),
                F = n(35773),
                B = n(95305),
                J = n(64358),
                K = n(17383),
                X = n(6655),
                Q = n(12227),
                H = (n(46326), n(72528));
            const Y = function(e) {
                var t, n, i, l = e.navToggleCallback,
                    s = void 0 === l ? function() {} : l,
                    u = (0, K.Tu)(),
                    m = u.user,
                    d = u.isFetching,
                    p = u.isLoading,
                    f = (0, o.s0)(),
                    g = (0, M.q7)().data,
                    h = void 0 === g ? [] : g,
                    v = r.useState(!1),
                    b = (0, a.Z)(v, 2),
                    w = (b[0], b[1], (0, X.pp)({
                        userId: m.id
                    }, {
                        skip: !m,
                        refetchOnMountOrArgChange: !0
                    })),
                    y = w.data,
                    E = (void 0 === y ? {} : y).balance,
                    x = w.isFetching;
                if (!m || p) return null;
                var k = function() {
                        s(!1)
                    },
                    N = "online" === m.state,
                    T = (null === (t = m.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? m.profilePicOverride : m.currentAvatarThumbnailImageUrl,
                    C = (0, J.S6)({
                        fileUrl: T,
                        width: "1024"
                    }),
                    Z = m.userIcon ? (0, J.S6)({
                        fileUrl: m.userIcon,
                        width: "1024"
                    }) : null;
                return r.createElement(ee, {
                    className: "mx-0 mb-2"
                }, r.createElement(pe, {
                    className: "d-flex mx-0 align-items-center"
                }, r.createElement(fe, {
                    title: (0, Q.Tq)(m.status, !0),
                    statusColor: "var(--status-".concat((0, Q.Tq)(m.status), ")")
                }), r.createElement(_.rU, {
                    to: "/home/user/".concat(m.id),
                    onClick: k
                }, m.displayName)), r.createElement(ge, null, d ? r.createElement(I.UU, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : r.createElement(_.rU, {
                    to: "/home/user/".concat(m.id),
                    "aria-label": "User Status",
                    onClick: k
                }, m.statusDescription)), r.createElement(te, null, r.createElement(ae, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(m.id),
                    url: C,
                    level: (0, Q.FR)({
                        tags: m.tags
                    }),
                    onClick: k
                }, r.createElement(re, {
                    className: "mx-0"
                }, r.createElement(oe, {
                    className: "text-center"
                }, "Go To Profile")), Z && r.createElement(le, {
                    role: "button",
                    "aria-label": "Go To Gallery",
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), (null != h && h.includes("permission-user-icons") || null != h && h.includes("permission-user-gallery")) && (f("/home/gallery"), k())
                    }
                }, r.createElement(ce, {
                    "aria-label": "User Icon",
                    url: Z,
                    level: (0, Q.FR)({
                        tags: m.tags
                    })
                }, r.createElement(se, null, r.createElement(ue, {
                    icon: G._j,
                    size: "lg"
                }))), r.createElement(me, null, "Change Icon")), r.createElement(ie, null)), !(null === (n = m.badges) || void 0 === n || !n.length) && r.createElement(we, null, m.badges.filter((function(e) {
                    return e.showcased && !e.hidden
                })).slice(0, 3).sort((function(e, t) {
                    return new Date(t.assignedAt) - new Date(e.assignedAt)
                })).map((function(e) {
                    return r.createElement(ne, {
                        role: "note",
                        "aria-label": e.badgeName,
                        key: e.badgeId,
                        image: e.badgeImageUrl,
                        pettable: "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId
                    })
                }))), r.createElement(de, {
                    className: "px-2 pt-1 pb-2 mx-0"
                }, r.createElement(be, {
                    className: "relative justify-content-end"
                }, x ? r.createElement(I.UU, {
                    width: "4rem",
                    height: "1.5rem",
                    style: {
                        borderRadius: 14
                    }
                }) : r.createElement(ve, {
                    to: "/home/marketplace/wallet",
                    onClick: k
                }, r.createElement(I.b5, null), null !== (i = " ".concat(null == E ? void 0 : E.toLocaleString())) && void 0 !== i ? i : " ???")), !1, r.createElement(Ee, null, r.createElement(_.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: k
                }, r.createElement(I.$1, {
                    icon: L.Kb
                }), "  Account Settings")))), r.createElement(te, {
                    className: (0, c.iv)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, N && (null == m ? void 0 : m.location) && !["traveling", "offline"].includes(null == m ? void 0 : m.location) && r.createElement(he, {
                    className: "mx-0"
                }, r.createElement(H.Z, {
                    location: m.location,
                    userId: m.id,
                    currentUser: m,
                    size: "normal"
                }))))
            };
            var ee = (0, V.Z)("div", {
                    target: "esgak1l21"
                })(""),
                te = (0, V.Z)("div", {
                    target: "esgak1l20"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                ne = (0, V.Z)("div", {
                    target: "esgak1l19"
                })("width:36px;height:36px;margin:0!important;padding:6px;border-radius:50%;z-index:3;background-color:rgba(17, 17, 17, 0.8);background-image:url(", (function(e) {
                    return e.image
                }), ");background-size:24px;background-repeat:no-repeat;background-position:center;", (function(e) {
                    return e.pettable && "\n    cursor: grab;\n\n    &:active {\n      cursor: grabbing;\n    }\n  "
                }), ";"),
                ae = (0, V.Z)(_.rU, {
                    target: "esgak1l18"
                })("display:flex;height:0;padding-top:56.25%;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");position:relative;cursor:pointer;background-color:#05191d;&:hover{&>div:last-child{opacity:1;}}"),
                re = (0, V.Z)(F.Z, {
                    target: "esgak1l17"
                })({
                    name: "w4b5cp",
                    styles: "display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;opacity:0;transition:opacity 0.2s ease;color:white;text-decoration:none!important;&:hover{opacity:1;}"
                }),
                ie = (0, V.Z)("div", {
                    target: "esgak1l16"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                oe = (0, V.Z)("div", {
                    target: "esgak1l15"
                })({
                    name: "iu2xal",
                    styles: "font-weight:600;color:white!important"
                }),
                le = (0, V.Z)("div", {
                    target: "esgak1l14"
                })({
                    name: "13p5eg",
                    styles: "display:flex;position:absolute;bottom:-40px;left:10px;width:80px;align-items:center;z-index:3;color:white;&:hover{div:last-child{opacity:1;}svg{opacity:1;}}"
                }),
                ce = (0, V.Z)("div", {
                    target: "esgak1l13"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                se = (0, V.Z)("div", {
                    target: "esgak1l12"
                })({
                    name: "6828uq",
                    styles: "opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);border-radius:100%;display:flex;width:100%;height:100%;align-items:center;justify-content:center"
                }),
                ue = (0, V.Z)(I.$1, {
                    target: "esgak1l11"
                })(""),
                me = (0, V.Z)("div", {
                    target: "esgak1l10"
                })({
                    name: "1lu2whh",
                    styles: "opacity:0;margin-left:3px;font-weight:600;flex-shrink:0;transition:opacity 0.2s ease"
                }),
                de = (0, V.Z)(B.Z, {
                    target: "esgak1l9"
                })({
                    name: "1dt3z6y",
                    styles: "background-color:#07242b"
                }),
                pe = (0, V.Z)("div", {
                    target: "esgak1l8"
                })({
                    name: "ab3jnw",
                    styles: "font-weight:600;justify-content:center;a{color:var(--bs-primary);font-size:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:240px;}"
                }),
                fe = (0, V.Z)("div", {
                    target: "esgak1l7"
                })("width:15px;height:15px;border-radius:100%;background-color:", (function(e) {
                    return e.statusColor
                }), ";margin-right:10px;"),
                ge = (0, V.Z)("div", {
                    target: "esgak1l6"
                })({
                    name: "1xmid75",
                    styles: "width:100%;text-align:center;display:flex;align-items:center;justify-content:center;padding:2px 20px;font-weight:bold;overflow:hidden;text-overflow:ellipsis"
                }),
                he = (0, V.Z)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                ve = (0, V.Z)(_.rU, {
                    target: "esgak1l4"
                })("color:white;background-color:rgba(17, 17, 17, 0.8);padding:4px 6px;line-height:1em;border-radius:14px;>", I.b5, "{color:#6ae3f9;}&:hover{color:#737372;text-decoration:none;>", I.b5, "{color:#064b5c;}}"),
                be = (0, V.Z)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                we = (0, V.Z)(be, {
                    target: "esgak1l2"
                })({
                    name: "1nld4z4",
                    styles: "width:100%;height:45px;margin-top:-45px;display:flex;justify-content:flex-end;position:relative;padding:4px;gap:4px"
                }),
                ye = (0, V.Z)(be, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                Ee = (0, V.Z)(ye, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                xe = n(14097),
                ke = n(83183),
                Ie = n(57026),
                Ne = n(89148),
                Te = n(15369),
                Ce = n(13461),
                Ze = n(66007),
                Se = n(2723),
                je = n(66062),
                Oe = n(40767),
                Ae = n(81511),
                qe = n(16688),
                Pe = n(46450),
                ze = n(774),
                Re = n(12529),
                Ue = n(64240),
                De = n(43701),
                Me = n(70396),
                $e = n(7975),
                We = n(70440),
                Ve = n(96165),
                Le = n(54492),
                Ge = n(91435),
                _e = n(49866),
                Fe = n(57245),
                Be = n(93118),
                Je = n(99631),
                Ke = n(51970),
                Xe = n(28959),
                Qe = n(67922),
                He = n(87589),
                Ye = n(62455),
                et = n(25248),
                tt = n(52365),
                nt = n(50249),
                at = n(7503),
                rt = n(48566),
                it = n(8256),
                ot = n(28055),
                lt = n(58877),
                ct = n(25062),
                st = n(93046),
                ut = n.n(st),
                mt = n(17219),
                dt = n(91492),
                pt = n(31358);
            const ft = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    a = e.closeDialog,
                    o = (e.isGroups, (0, i.v9)((function(e) {
                        return e.notifications.notifications
                    })).slice(0, n) || []);
                return r.createElement("div", {
                    className: "mt-2"
                }, o.map((function(e) {
                    return r.createElement(pt.Z, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: a
                    })
                })))
            };
            n(64230);
            var gt = n(76938),
                ht = n(42138),
                vt = n(4942),
                bt = n(38824),
                wt = n(87261),
                yt = n(3126),
                Et = n(25411),
                xt = n(72562);

            function kt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function It(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? kt(Object(n), !0).forEach((function(t) {
                        (0, vt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = function(e) {
                var t = e.onChangeCallback,
                    n = (0, i.I0)(),
                    o = (0, r.useState)(!1),
                    l = (0, a.Z)(o, 2),
                    c = l[0],
                    s = l[1],
                    u = (0, r.useState)(!1),
                    m = (0, a.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    f = (0, r.useState)("none"),
                    g = (0, a.Z)(f, 2),
                    h = g[0],
                    v = g[1],
                    b = (0, r.useState)([]),
                    w = (0, a.Z)(b, 2),
                    y = w[0],
                    E = w[1],
                    x = (0, r.useState)("relevance"),
                    k = (0, a.Z)(x, 2),
                    I = k[0],
                    N = k[1],
                    T = (0, i.v9)((function(e) {
                        return e.search.autoRedirect
                    }));
                (0, r.useEffect)((function() {
                    var e = {
                        dropdownToggle: c,
                        fuzzyToggle: d,
                        orderFilter: h,
                        searchableFilters: y,
                        sortByFilter: I
                    };
                    (0, xt.Kz)("Web_Mod_SearchFilterChange", It(It({}, e), {}, {
                        autoRedirect: T
                    })), t(e)
                }), [T, d, h, y, I]);
                var C = function(e) {
                    return e.target.checked ? E([].concat((0, ht.Z)(y), [e.target.name])) : E(y.filter((function(t) {
                        return t !== e.target.name
                    })))
                };
                return r.createElement(rt.Z, {
                    isOpen: c,
                    toggle: function() {
                        return s(!c)
                    }
                }, r.createElement(it.Z, {
                    caret: !0
                }, "Filters"), r.createElement(ot.Z, {
                    className: "text-white p-0 bg-dark pb-2"
                }, r.createElement(bt.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), r.createElement("div", {
                    className: "mx-3 text-white"
                }, r.createElement(wt.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return N(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "sortResultsBy",
                    id: "sortResultsBy"
                }, r.createElement("option", {
                    value: "relevance"
                }, "Relevance"), r.createElement("option", {
                    value: "exact"
                }, "Exact"), r.createElement("option", {
                    value: "last_login"
                }, "Last Login"), r.createElement("option", {
                    value: "trust"
                }, "Trust Rank"))), r.createElement(bt.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), r.createElement("div", {
                    className: "mx-3 text-white"
                }, r.createElement(wt.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return v(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "orderBy",
                    id: "orderBy"
                }, r.createElement("option", {
                    value: "none"
                }, "None"), r.createElement("option", {
                    value: "ascending"
                }, "Ascending"), r.createElement("option", {
                    value: "descending"
                }, "Descending"))), r.createElement(bt.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: y.includes("displayName"),
                    onChange: C,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: y.includes("email"),
                    onChange: C,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: y.includes("username"),
                    onChange: C,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: y.includes("pastEmails"),
                    onChange: C,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), r.createElement(bt.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: T,
                    onChange: function() {
                        return n((0, Et.Tr)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(wt.Z, {
                    checked: d,
                    onChange: function() {
                        return p(!d)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), r.createElement(yt.Z, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            Nt.propTypes = {
                onChangeCallback: S().func.isRequired
            };
            var Tt = n(73670);
            const Ct = function() {
                var e = (0, o.s0)(),
                    t = (0, o.TH)(),
                    n = "";
                t.pathname.startsWith("/home/search/") && (n = decodeURIComponent(t.pathname.substring(13)));
                var l = (0, i.v9)(gt.y),
                    s = (0, r.useState)("/home/search/"),
                    u = (0, a.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, r.useState)("/home/search/"),
                    f = (0, a.Z)(p, 2),
                    g = f[0],
                    h = (f[1], (0, r.useState)(n)),
                    v = (0, a.Z)(h, 2),
                    b = v[0],
                    w = v[1],
                    y = (0, K.Nr)(m);
                (0, r.useEffect)((function() {
                    d("/home/search/".concat(encodeURIComponent(b.replace(/#/g, "tag:"))))
                }), [g, b]), (0, r.useEffect)((function() {
                    "" !== b && e(m)
                }), [y]);
                return r.createElement("div", {
                    className: (0, c.iv)({
                        name: "1a9iom8",
                        styles: "& .search-input{padding:0;}& .input-group-custom{position:relative;flex-wrap:nowrap;align-items:stretch;}& .drop-down-menu-custom{color:black;margin:0;padding:5px;}"
                    })
                }, r.createElement("div", {
                    className: "container"
                }, r.createElement("form", {
                    onSubmit: function(t) {
                        return function(t) {
                            return t.preventDefault(), "" === b || e(m), null
                        }(t)
                    },
                    className: "navbar-form navbar-right",
                    role: "search"
                }, r.createElement("div", {
                    className: "input-group-custom"
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "ho1qnd",
                        styles: "display:flex;flex-direction:row"
                    })
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "clzu0",
                        styles: "display:flex;flex-direction:row;align-items:center;flex-grow:1"
                    })
                }, r.createElement(Tt.Z, {
                    initialString: b,
                    searchString: w
                }), l && !1))))))
            };
            var Zt = n(15861),
                St = n(24075),
                jt = n(89082),
                Ot = n(64687),
                At = n.n(Ot),
                qt = n(58589),
                Pt = n(9669),
                zt = n.n(Pt);
            var Rt = ["public", "internal"];
            const Ut = function(e) {
                var t = e.direction,
                    n = r.useState([]),
                    l = (0, a.Z)(n, 2),
                    s = l[0],
                    u = l[1],
                    m = r.useState(""),
                    d = (0, a.Z)(m, 2),
                    p = d[0],
                    f = d[1],
                    g = (0, o.TH)(),
                    h = (0, i.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    v = function() {
                        var e = (0, Zt.Z)(At().mark((function e() {
                            var t, n, a;
                            return At().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, zt().get(t);
                                    case 3:
                                        n = e.sent, a = n.data.filter((function(e) {
                                            return "main" !== e
                                        })), u(["main"].concat((0, ht.Z)(a)));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                r.useEffect((function() {
                    v().catch(console.error)
                }), []);
                var b = function(e, t) {
                        var n = g.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    w = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map((function(e) {
                            return Rt.map((function(n, a) {
                                if ("public" !== n && !h) return null;
                                var i = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    o = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.iv)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                i && o.push("active");
                                var l = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? qe.J9 : jt.c : St.mh
                                };
                                return r.createElement("a", {
                                    href: b(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(a),
                                    className: o.join(" ")
                                }, r.createElement(I.$1, l), n, "-", e)
                            }))
                        }))
                    };
                return s.length <= 1 ? null : r.createElement("div", null, r.createElement(qt.Z, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, c.iv)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, r.createElement(it.Z, {
                    caret: !0,
                    color: "primary"
                }, r.createElement(I.$1, {
                    icon: St.mh
                }), " ", "public", "-", "main"), r.createElement(ot.Z, {
                    className: (0, c.iv)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, w(s.slice(0, 1)), r.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), r.createElement(F.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    type: "text",
                    value: p,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? {} : t).value;
                        f(n)
                    },
                    className: "py-1 px-1 mx-1 my-1 flex-grow-1"
                })), w(s.slice(1), (function(e) {
                    return 0 === p.length || new RegExp(p, "gi").test(e)
                })))))
            };
            var Dt = n(63221),
                Mt = n(72065),
                $t = n(22082),
                Wt = n(56395);
            const Vt = function(e) {
                var t = e.to,
                    n = e.title,
                    a = e.onClick,
                    i = (0, $t.oE)({
                        states: [Wt.g1.ANNOUNCED, Wt.g1.SUBMISSIONS_OPEN, Wt.g1.SUBMISSIONS_CLOSED, Wt.g1.WINNERS_SELECTED]
                    }).data,
                    o = null == i ? void 0 : i.every((function(e) {
                        return !Object.keys(e).includes("state")
                    }));
                if (!i || 0 === (null == i ? void 0 : i.length) || o) return null;
                var l = i[0];
                return r.createElement(Lt, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: a
                }, r.createElement(Gt, {
                    icon: Mt.Ww
                }), r.createElement("div", null, Wt.p6[l.state]), r.createElement(I.$1, {
                    icon: ke.yO
                }))
            };
            var Lt = (0, V.Z)(_.rU, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                Gt = (0, V.Z)(I.$1, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var _t = [et.R7, Ye.od, He.tM, Qe.RK, Xe.I3, Ke.nG, Je.jO, Be.uS, Fe.dy, _e.XG, Ge.BD, Le.ok, Ve.Sv, We.qA, $e.I1, Me.Nk, De.uj, Ue.io, Re.l9],
                Ft = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                Bt = r.memo((function(e) {
                    var t, n, l = e.horizontal,
                        s = e.navToggleCallback,
                        u = e.friendsToggleCallback,
                        m = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        d = (0, o.s0)(),
                        p = r.useState(!1),
                        f = (0, a.Z)(p, 2),
                        g = f[0],
                        h = f[1],
                        v = r.useState(_t[Math.floor(m(_t.length))]),
                        b = (0, a.Z)(v, 2),
                        w = b[0],
                        y = b[1],
                        E = r.useState(Ft[m(Ft.length)]),
                        x = (0, a.Z)(E, 2),
                        k = x[0],
                        N = x[1],
                        T = (0, mt.y)().data,
                        C = ((0, K.pc)(), (0, M.XC)().data),
                        Z = (0, i.v9)((function(e) {
                            return e.notifications.notifications
                        })) || [],
                        S = (0, M.q7)().data,
                        j = void 0 === S ? [] : S,
                        O = (0, K.CZ)().sortedLocations.length,
                        A = (0, i.v9)((function(e) {
                            return e.notifications.groupNotifications
                        })) || [],
                        q = (0, dt.dq)({
                            n: 1,
                            pageValue: 1
                        }),
                        P = q.data,
                        z = q.isSuccess;
                    (0, r.useEffect)((function() {
                        g && (y(_t[m(_t.length)]), N(Ft[m(Ft.length)]))
                    }), [g]);
                    var R = function(e) {
                            d("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        U = function() {
                            h(!1)
                        },
                        D = function() {
                            s && s(!1)
                        },
                        W = j || [],
                        V = (W.includes("permission-user-icons"), W.includes("permission-user-gallery"), W.includes("permission-groups-beta"), null !== (t = Z.length) && void 0 !== t ? t : 0);
                    n = A.filter((function(e) {
                        return e.state === Dt.oq.INVITED
                    })).length;
                    if (null == l || !1 === l) {
                        0;
                        return r.createElement("div", {
                            className: (0, c.iv)("margin:0;padding:0;& .navbar{padding:3px 0;background-color:#07242b!important;background-image:none;border-bottom:solid ", "#053c48", " 3px;display:flex;justify-content:space-between;height:60px;}& .navbar .btn-group{white-space:normal;}& .navbar-section{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;justify-content:space-between;}& .left-nav{min-width:285px!important;justify-content:center;>*{margin:0 10px;:first-child{margin-left:0;}:last-child{margin-right:0;}}}& .center-nav{justify-content:flex-start;flex-wrap:nowrap;flex:1;>*{margin:0 10px 0 2px;}}& .right-nav{justify-content:space-between;flex-direction:row;flex:0;padding:0 20px;gap:20px;align-items:center;.scalable-nav{display:none;}>a{color:#6ae3f9;font-weight:bold;display:flex;align-items:center;min-height:45px;padding:0 10px;}}& .custom-dropdown{padding:0!important;transform:translate(calc(-100% + 400px), 20px)!important;background:#05191d!important;border:#053c48 solid 2px!important;border-radius:10px!important;box-shadow:0px 9px 26px 5px rgba(0, 0, 0, 0.8);}& .dropdown-arrow{z-index:3;&:after,:before{pointer-events:none;content:'';position:absolute;background:transparent;left:50%;transform:translateX(-50%);}&:after{border:22px solid transparent;bottom:-30px;border-bottom-color:#05191d;}&:before{border:15px solid transparent;bottom:-20px;border-bottom-color:#053c48;}}& .navbar-btn{background:#07242b!important;min-width:45px;min-height:45px;border-radius:100px!important;border:solid #053c48 3px!important;display:flex;justify-content:center;align-items:center;font-weight:bold;white-space:nowrap;>span{display:flex;justify-content:center;align-items:center;}&:hover{background:#05191d!important;}&:focus{box-shadow:0 0 0 0.2rem #05191d!important;}&.logout{padding:0 10px!important;color:#ee5454;}}@media (max-width: 1500px){& .right-nav{padding:0 20px;}}@media (max-width: 1200px){& .left-nav{padding:0 15px 0 10px;min-width:210px!important;justify-content:space-between;}& .custom-dropdown{transform:translate(calc(-100% + 350px), 20px)!important;}& .large{display:none;}& .search{width:100%;}}@media (max-width: 576px){& .left-nav{min-width:auto!important;padding:0 10px;}& .mobile-only{display:block;}& .medium{display:none;}}& .dropdown-menu{padding:10px 15px 5px 15px;background-color:#506070;border-radius:0;}& .search{flex-grow:3;}& .launch{text-transform:uppercase;font-weight:bold;}", ""),
                            id: "secondary-nav"
                        }, r.createElement("div", {
                            className: "navbar-boogie container-fluid"
                        }, " "), r.createElement("div", {
                            className: "navbar fixed-top navbar-expand-sm navbar-light shadow ".concat("")
                        }, r.createElement("div", {
                            className: "navbar-section left-nav"
                        }, r.createElement("button", {
                            type: "button",
                            className: "p-1 2xl:tw-hidden btn navbar-btn",
                            onClick: function() {
                                s && (u && u(!1), s())
                            }
                        }, r.createElement(I.$1, {
                            icon: ze.xi,
                            size: "lg"
                        })), r.createElement(_.rU, {
                            to: "/home",
                            title: "home",
                            className: "logo medium"
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1leqlh9",
                                styles: "height:50px"
                            })
                        }, r.createElement("img", {
                            className: (0, c.iv)({
                                name: "1hs0n36",
                                styles: "height:90%;margin-top:0.25rem"
                            }),
                            alt: "VRChat Logo",
                            src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                        }))), r.createElement("div", {
                            className: "medium ".concat((0, c.iv)({
                                name: "1vcob1d",
                                styles: "display:flex;justify-content:center;align-items:center"
                            }))
                        }, r.createElement(rt.Z, {
                            isOpen: g,
                            toggle: function() {
                                return h(!g)
                            }
                        }, r.createElement(it.Z, {
                            className: "p-1 navbar-btn text-white"
                        }, V > 0 && r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, V), r.createElement(I.$1, {
                            icon: Ae.FU,
                            size: "lg",
                            className: (0, c.iv)({
                                name: "bqqvn3",
                                styles: "::before{font-size:25px;}"
                            })
                        }), g && r.createElement("div", {
                            className: "dropdown-arrow"
                        })), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "2ey0we",
                                styles: "transform:translateX(0)"
                            })
                        }, r.createElement(ot.Z, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, c.iv)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, r.createElement(_.rU, {
                            onClick: function(e) {
                                U(), d("/home/messages"), e.preventDefault()
                            },
                            className: (0, c.iv)({
                                name: "oldbq4",
                                styles: "user-select:none"
                            }),
                            to: "/home/messages"
                        }, r.createElement("strong", null, "View more..."))), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "2nen93",
                                styles: "max-height:500px;overflow-y:auto;padding:0 15px;background:#041215"
                            })
                        }, V > 0 ? r.createElement(ft, {
                            n: 20,
                            closeDialog: U,
                            isGroups: !1
                        }) : r.createElement("div", {
                            className: (0, c.iv)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, r.createElement(I.$1, {
                            icon: w,
                            size: "3x",
                            className: (0, c.iv)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), r.createElement("h6", null, k))), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), r.createElement(_.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, r.createElement(I.$1, {
                            icon: L.Kb,
                            size: "lg"
                        }))), r.createElement("div", {
                            className: "navbar-section center-nav"
                        }, r.createElement("div", {
                            className: "search"
                        }, r.createElement(Ct, null)), r.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                u && (s && s(!1), u())
                            }
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1ln64ce",
                                styles: "width:100%;height:20px;background-image:url('https://assets.vrchat.com/www/images/WingLeft.png');background-size:contain;background-repeat:no-repeat;background-position:center"
                            })
                        }))), r.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, r.createElement(Ut, null), r.createElement("a", {
                            href: "https://docs.vrchat.com/",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Docs"), r.createElement("a", {
                            href: "https://hello.vrchat.com/merch-hub",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Merch"), r.createElement("a", {
                            href: "https://hello.vrchat.com/vrchatplus",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#ffff00"
                            }
                        }, "VRC+"), r.createElement($.Z, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, c.iv)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: R
                        }, r.createElement(I.$1, {
                            icon: xe.TE
                        }), "  Logout"))))
                    }
                    return r.createElement("nav", null, r.createElement(lt.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.iv)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== O ? r.createElement(Kt, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Pe.mG
                    }), r.createElement("div", null, "Join Friends", " ", r.createElement(ct.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, O)), r.createElement(I.$1, {
                        icon: ke.yO
                    })) : r.createElement(Kt, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: qe.J9
                    }), r.createElement("div", null, "  Home"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: at.Z
                    }), r.createElement("div", null, "Groups"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ae.FU
                    }), r.createElement("div", null, "Messages", " ", V > 0 && r.createElement(ct.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, V)), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Vt, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: D
                    }), r.createElement(Kt, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Oe.q7
                    }), r.createElement("div", null, "Download"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: je.g4
                    }), r.createElement("div", null, "Discover Worlds"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Se.cf
                    }), r.createElement("div", null, "My Worlds"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ze.KC
                    }), r.createElement("div", null, "Avatars"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ce.T
                    }), r.createElement("div", null, "Favorite Worlds"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ce.T
                    }), r.createElement("div", null, "Favorite Avatars"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ce.T
                    }), r.createElement("div", null, "Favorite Friends"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/inventory",
                        title: "Inventory",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: tt.Z
                    }), r.createElement("div", {
                        className: "tw-flex"
                    }, "Inventory", z && (null == P ? void 0 : P.totalCount) > 0 && r.createElement("div", {
                        className: "tw-rounded-full tw-bg-red tw-ml-2 tw-w-[22px] tw-h-[22px] tw-text-white tw-flex tw-items-center tw-justify-center "
                    }, r.createElement("p", {
                        className: "tw-text-sm tw-text-center tw-w-full tw-mb-0 tw-font-bold"
                    }, null == P ? void 0 : P.totalCount))), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: nt.Z
                    }), r.createElement("div", null, "Marketplace"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), !1, r.createElement(Kt, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == T ? void 0 : T.disableUpgradeAccount) || (null == C ? void 0 : C.steamId) && (null == C ? void 0 : C.oculusId),
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Te.x0
                    }), r.createElement("div", null, "Account Link"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ne.Ek
                    }), r.createElement("div", null, "Blocks & Mutes"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: D
                    }, r.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: ut()
                    }), r.createElement("div", null, "Subscriptions"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Kt, {
                        to: "https://help.vrchat.com/",
                        title: "helpdesk",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-bg-[#07142B] tw-border-[#051E48] tw-text-[#6AA2F9] btn text-left",
                        onClick: D
                    }, r.createElement(I.$1, {
                        icon: Ie.lX
                    }), r.createElement("div", null, "Help Desk"), r.createElement(I.$1, {
                        icon: ke.yO
                    })), r.createElement(Xt, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: R
                    }, r.createElement(I.$1, {
                        icon: xe.TE
                    }), r.createElement("div", null, "Logout"), r.createElement("div", null))))
                }));
            Bt.displayName = "Navbar";
            const Jt = Bt;
            var Kt = (0, V.Z)(_.rU, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                Xt = (0, V.Z)(Kt, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                Qt = n(50119),
                Ht = n(46320),
                Yt = n(30098),
                en = [];
            const tn = function() {
                var e = (0, o.s0)(),
                    t = (0, D._)("campaigns", []),
                    n = (0, a.Z)(t, 2),
                    r = n[0],
                    i = (n[1], (0, D._)("campaignsSeen", [])),
                    l = (0, a.Z)(i, 2),
                    c = l[0],
                    s = (l[1], function() {
                        if (c.length > 0) {
                            var e = r.filter((function(e) {
                                return -1 === c.findIndex((function(t) {
                                    return t.name === e.name
                                }))
                            }));
                            return (0, a.Z)(e, 1)[0]
                        }
                        return (0, a.Z)(r, 1)[0]
                    }());
                if (s) {
                    var u = en.find((function(e) {
                        return e.name === s.name
                    }));
                    if (u) return e(u.landingPage)
                }
                return null
            };
            var nn = n(87462);
            const an = function(e) {
                var t = (0, M.q7)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return r.createElement(e, (0, nn.Z)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var rn = n(28944),
                on = n(9419);
            const ln = function() {
                var e = (0, i.I0)(),
                    t = (0, on._V)(),
                    n = t.data,
                    a = t.isSuccess;
                t.isLoading;
                return r.useEffect((function() {
                    e((0, Yt._r)(n))
                }), [a, n]), null
            };
            var cn = n(33622),
                sn = n.n(cn);
            var un = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(5508)]).then(n.bind(n, 5712))
                })),
                mn = r.lazy((function() {
                    return Promise.all([n.e(9753), n.e(2998), n.e(8874), n.e(4666)]).then(n.bind(n, 37099))
                })),
                dn = r.lazy((function() {
                    return n.e(3488).then(n.bind(n, 93488))
                })),
                pn = r.lazy((function() {
                    return n.e(6231).then(n.bind(n, 76231))
                })),
                fn = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(416), n.e(2998), n.e(3294), n.e(1946), n.e(8043), n.e(1244), n.e(2704), n.e(5842), n.e(1388)]).then(n.bind(n, 76461))
                })),
                gn = r.lazy((function() {
                    return Promise.all([n.e(7826), n.e(852)]).then(n.bind(n, 36418))
                })),
                hn = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(3023), n.e(390)]).then(n.bind(n, 20390))
                })),
                vn = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(4444), n.e(8086)]).then(n.bind(n, 74444))
                })),
                bn = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(9908), n.e(3713)]).then(n.bind(n, 39908))
                })),
                wn = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(8890), n.e(5491)]).then(n.bind(n, 78890))
                })),
                yn = r.lazy((function() {
                    return n.e(8438).then(n.bind(n, 58438))
                })),
                En = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(4907)]).then(n.bind(n, 44907))
                })),
                xn = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8158), n.e(6488)]).then(n.bind(n, 92848))
                })),
                kn = r.lazy((function() {
                    return Promise.all([n.e(5032), n.e(3261), n.e(2998), n.e(347), n.e(1946), n.e(1244), n.e(9923), n.e(8158), n.e(4896), n.e(7672)]).then(n.bind(n, 27672))
                })),
                In = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(3261), n.e(8158), n.e(3013)]).then(n.bind(n, 13164))
                })),
                Nn = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(8264)]).then(n.bind(n, 8264))
                })),
                Tn = r.lazy((function() {
                    return n.e(3443).then(n.bind(n, 53443))
                })),
                Cn = r.lazy((function() {
                    return n.e(9795).then(n.bind(n, 79795))
                })),
                Zn = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(4157)]).then(n.bind(n, 50062))
                })),
                Sn = r.lazy((function() {
                    return n.e(7047).then(n.bind(n, 7047))
                })),
                jn = r.lazy((function() {
                    return Promise.all([n.e(2998), n.e(1952)]).then(n.bind(n, 81952))
                })),
                On = r.lazy((function() {
                    return Promise.all([n.e(9753), n.e(2022), n.e(4586)]).then(n.bind(n, 34586))
                })),
                An = r.lazy((function() {
                    return n.e(997).then(n.bind(n, 997))
                })),
                qn = r.lazy((function() {
                    return n.e(4945).then(n.bind(n, 14945))
                })),
                Pn = r.lazy((function() {
                    return n.e(6812).then(n.bind(n, 46812))
                })),
                zn = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(8906)]).then(n.bind(n, 38906))
                })),
                Rn = r.lazy((function() {
                    return Promise.all([n.e(9753), n.e(3261), n.e(2998), n.e(1946), n.e(8043), n.e(334)]).then(n.bind(n, 40525))
                })),
                Un = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(1541), n.e(2998), n.e(4444), n.e(8890), n.e(9908), n.e(3294), n.e(527), n.e(347), n.e(2554)]).then(n.bind(n, 8376))
                }));
            const Dn = function() {
                var e = (0, i.I0)();
                tn();
                var t = (0, M.IB)().data,
                    n = r.useMemo((function() {
                        var e;
                        return !(null == t || null === (e = t.badges) || void 0 === e || !e.find((function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && m()().isBefore(m()(n).add(36, "hours"))
                        })))
                    }), [t]),
                    u = r.useState(!1),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    f = d[1],
                    g = r.useState(!1),
                    h = (0, a.Z)(g, 2),
                    v = h[0],
                    b = h[1],
                    w = function(e) {
                        b(null != e ? e : !v)
                    },
                    y = function(e) {
                        f(null != e ? e : !p)
                    },
                    E = r.useCallback((function() {
                        y(window.innerWidth > 1400 && !p)
                    }), []);
                return (0, r.useEffect)((function() {
                    return e((0, Yt.Wk)()), e((0, Yt._e)()), y(window.innerWidth > 1400), window.addEventListener("resize", E),
                        function() {
                            window.removeEventListener("resize", E)
                        }
                }), []), r.createElement("div", {
                    className: (0, c.iv)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", n && (0, c.iv)("background-image:url(", sn(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{max-width:2000px;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 95px 0 20px;transition:padding-right 0.35s ease-in-out;}&.rightPinned{width:calc(100% - 695px);& .home-content{padding:10px 20px 0 20px;}}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1400px){& .rightbar.rightPinned{left:0;}& .hide-large{display:none;}}@media (max-width: 1400px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.rightPinned{width:100%;& .home-content{padding:10px 95px 0 20px;}}&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, r.createElement(ln, null), r.createElement("div", null, r.createElement(Jt, {
                    navToggleCallback: w,
                    friendsToggleCallback: function(e) {
                        window.removeEventListener("resize", E), y(e)
                    }
                })), r.createElement(l.Z, {
                    fluid: !0
                }, r.createElement("div", null, r.createElement("div", {
                    className: "fixed-top leftbar ".concat(v ? "leftOpen" : "")
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "1ga2o5r",
                        styles: "width:325px;padding:0 5px"
                    })
                }, r.createElement("div", {
                    className: "hide-large ".concat((0, c.iv)({
                        name: "1bk3y4m",
                        styles: "margin-top:8px;& .dropdown-menu{padding:10px 15px 5px 15px;position:fixed!important;background-color:#506070;border-radius:0;z-index:1000;bottom:0!important;top:100px!important;margin:0!important;transform:none!important;}& .dropdown-toggle{margin-bottom:5px;}"
                    }))
                }, r.createElement(Ut, {
                    direction: "right"
                })), r.createElement(s.SV, {
                    fallback: rn.Z
                }, r.createElement(Y, {
                    navToggleCallback: w
                })), r.createElement(s.SV, {
                    fallback: rn.Z
                }, r.createElement(Jt, {
                    horizontal: !0,
                    navToggleCallback: w
                })))), r.createElement("div", {
                    className: "col-xs-12 content-scroll ".concat(p ? "rightPinned" : "")
                }, r.createElement("div", {
                    className: "home-content"
                }, r.createElement(s.SV, {
                    fallback: rn.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(Qt.Z, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), r.createElement(Qt.Z, {
                        delay: "50",
                        height: "480px"
                    }))
                }, r.createElement(o.Z5, null, r.createElement(o.AW, {
                    path: "/search/:query",
                    element: r.createElement(mn, null)
                }), r.createElement(o.AW, {
                    path: "/profile",
                    element: r.createElement(hn, null)
                }), r.createElement(o.AW, {
                    path: "/user/:userId/*",
                    element: r.createElement(zn, null)
                }), r.createElement(o.AW, {
                    path: "/uploadIcon",
                    element: an(bn)()
                }), r.createElement(o.AW, {
                    path: "/uploadPhoto",
                    element: an(wn)()
                }), r.createElement(o.AW, {
                    path: "/uploadEmoji",
                    element: an(vn)()
                }), r.createElement(o.AW, {
                    path: "/gallery/icons",
                    element: r.createElement(Ht.Z, {
                        to: "../inventory/user-icons"
                    })
                }), r.createElement(o.AW, {
                    path: "/gallery/photos",
                    element: r.createElement(Ht.Z, {
                        to: "../inventory/photos"
                    })
                }), r.createElement(o.AW, {
                    path: "/gallery/emoji",
                    element: r.createElement(Ht.Z, {
                        to: "../inventory/emojis"
                    })
                }), r.createElement(o.AW, {
                    path: "/gallery/stickers",
                    element: r.createElement(Ht.Z, {
                        to: "../inventory/stickers"
                    })
                }), r.createElement(o.AW, {
                    path: "/gallery/*",
                    element: r.createElement(Ht.Z, {
                        to: "../inventory/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/inventory/*",
                    element: r.createElement(Un, null)
                }), r.createElement(o.AW, {
                    path: "/marketplace/*",
                    element: r.createElement(jn, null)
                }), r.createElement(o.AW, {
                    path: "/wallet",
                    element: r.createElement(Ht.Z, {
                        to: "../marketplace/wallet"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/purchases/*",
                    element: r.createElement(Ht.Z, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/store/*",
                    element: r.createElement(Ht.Z, {
                        to: "../marketplace/storefront/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/locations",
                    element: r.createElement(Zn, null)
                }), r.createElement(o.AW, {
                    path: "/worlds",
                    element: r.createElement(yn, null)
                }), r.createElement(o.AW, {
                    path: "/world/:worldId/*",
                    element: r.createElement(Rn, null)
                }), r.createElement(o.AW, {
                    path: "/avatars",
                    element: r.createElement(gn, null)
                }), r.createElement(o.AW, {
                    path: "/avatar/:avatarId",
                    element: r.createElement(fn, null)
                }), r.createElement(o.AW, {
                    path: "/content/*",
                    element: r.createElement(On, null)
                }), r.createElement(o.AW, {
                    path: "/messages",
                    element: r.createElement(An, null)
                }), r.createElement(o.AW, {
                    path: "/playermoderations",
                    element: r.createElement(qn, null)
                }), r.createElement(o.AW, {
                    path: "/download",
                    element: r.createElement(dn, null)
                }), r.createElement(o.AW, {
                    path: "/groups",
                    element: r.createElement(En, null)
                }), r.createElement(o.AW, {
                    path: "/groups/create",
                    element: r.createElement(xn, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search",
                    element: r.createElement(En, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search/:query",
                    element: r.createElement(En, null)
                }), r.createElement(o.AW, {
                    path: "/group/:groupId/ageverification/:code",
                    element: r.createElement(In, null)
                }), r.createElement(o.AW, {
                    path: "/group/:groupId/*",
                    element: r.createElement(kn, null)
                }), r.createElement(o.AW, {
                    path: "/groups/:groupId",
                    element: r.createElement(Ht.Z, {
                        to: "../../group/:groupId"
                    })
                }), r.createElement(o.AW, {
                    path: "/ageverification",
                    element: r.createElement(Nn, null)
                }), r.createElement(o.AW, {
                    path: "/accountlink",
                    element: r.createElement(pn, null)
                }), r.createElement(o.AW, {
                    path: "/favorites/*",
                    element: r.createElement(o.Z5, null, r.createElement(o.AW, {
                        path: "/:type",
                        element: r.createElement(Tn, null)
                    }), r.createElement(o.AW, {
                        path: "/:type/:name",
                        element: r.createElement(Tn, null)
                    }))
                }), r.createElement(o.AW, {
                    path: "/jams/*",
                    element: r.createElement(Sn, null)
                }), !1, r.createElement(o.AW, {
                    path: "/subscriptions",
                    element: r.createElement(Pn, null)
                }), r.createElement(o.AW, {
                    path: "/",
                    element: r.createElement(un, null)
                })))))), r.createElement("div", {
                    className: "fixed-top rightbar ".concat(p ? "open" : "")
                }, r.createElement(s.SV, {
                    fallback: rn.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(Qt.Z, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), r.createElement(Qt.Z, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), r.createElement(Qt.Z, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, r.createElement(Cn, {
                    friendsToggleCallback: y
                })))), r.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button d-md-flex d-none",
                    onClick: function() {
                        window.removeEventListener("resize", E), y(!0)
                    }
                }, r.createElement("img", {
                    alt: "Wing Icon",
                    src: "https://assets.vrchat.com/www/images/WingLeft.png",
                    className: (0, c.iv)({
                        name: "1a5rd5y",
                        styles: "transform:scale(0.7)"
                    })
                })))), r.createElement(W, null), !1, r.createElement(z, null))
            }
        },
        55206: (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => c,
                b: () => o
            });
            var a = n(4942);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var o = {
                    stickers: {
                        custom: "stickersCustom",
                        exclusive: "stickersExclusive",
                        archived: "stickersArchived"
                    },
                    emojis: {
                        custom: "emojisCustom",
                        exclusive: "emojisExclusive",
                        archived: "emojisArchived"
                    },
                    props: {
                        exclusive: "propsExclusive",
                        archived: "propsArchived"
                    }
                },
                l = {
                    aspectRatioClass: "aspect-square",
                    hasArchive: !1,
                    hasConvertToVrcEmojis: !1,
                    hasDelete: !1,
                    hasRecover: !1,
                    imageGrayScale: !1,
                    hasThumbnailName: !1,
                    useCanvasThumbnail: !1
                },
                c = {
                    stickersCustom: i(i({
                        label: "Custom Stickers"
                    }, l), {}, {
                        hasDelete: !0,
                        hasConvertToVrcEmojis: !0,
                        useCanvasThumbnail: !0
                    }),
                    stickersExclusive: i(i({
                        label: "Exclusive Stickers"
                    }, l), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0
                    }),
                    stickersArchived: i(i({
                        label: "Archived Stickers"
                    }, l), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0
                    }),
                    emojisCustom: i(i({
                        label: "Custom Emojis"
                    }, l), {}, {
                        hasDelete: !0,
                        useCanvasThumbnail: !0
                    }),
                    emojisExclusive: i(i({
                        label: "Exclusive Emojis"
                    }, l), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0
                    }),
                    emojisArchived: i(i({
                        label: "Archived Emojis"
                    }, l), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0
                    }),
                    propsExclusive: i(i({
                        label: "Exclusive Items"
                    }, l), {}, {
                        hasArchive: !0,
                        hasThumbnailName: !0
                    }),
                    propsArchived: i(i({
                        label: "Archived Items"
                    }, l), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        hasThumbnailName: !0
                    })
                }
        },
        19531: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a
            });
            var a = !1
        },
        31358: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Pe
            });
            var a = n(87462),
                r = n(45987),
                i = n(59545),
                o = n(68055),
                l = n(81511),
                c = n(55505),
                s = n(4241),
                u = n(21464),
                m = n(67294),
                d = n(32981),
                p = n(79655),
                f = n(30098),
                g = n(72562),
                h = n(62437),
                v = n(54546),
                b = n(42137),
                w = n(7469),
                y = n(87709),
                E = n(16995),
                x = n(67454),
                k = n(15405),
                I = n(95819),
                N = n(22601),
                T = n(87695),
                C = n(16686),
                Z = n(47947),
                S = n(53359),
                j = n(20495),
                O = n(67992),
                A = n(95896),
                q = n(27484),
                P = n.n(q),
                z = n(56176),
                R = n.n(z),
                U = n(84110),
                D = n.n(U),
                M = n(9419),
                $ = n(50249),
                W = n(13757),
                V = n(51540),
                L = n(8792),
                G = n(65322),
                _ = n(87589),
                F = n(4739),
                B = n(79036),
                J = n(59660),
                K = n(2155),
                X = n(42619),
                Q = n(96231),
                H = n(34233),
                Y = n(43714),
                ee = n(86529),
                te = n(27879),
                ne = n(98078),
                ae = n(12690),
                re = n(44641),
                ie = n(13461),
                oe = n(17319),
                le = n(20446),
                ce = n(75386),
                se = n(40098),
                ue = n(35117),
                me = n(50906),
                de = n(55346),
                pe = n(61730),
                fe = n(69323),
                ge = n(20455),
                he = n(32731),
                ve = n(57982),
                be = n(98375),
                we = n(33805),
                ye = {
                    edit: n(11071).Y,
                    cancel: y.faXmark,
                    history: we.On,
                    refresh: be.faArrowsRotate,
                    search: ve.faMagnifyingGlass,
                    settings: he.faGear,
                    pin: ge.RP,
                    "arrow-up": fe.FP,
                    "arrow-down": pe.r5,
                    "arrow-left": de.ac,
                    "arrow-right": me.eF,
                    ban: ue.faBan,
                    check: o.LE,
                    plus: se.r8,
                    link: ce.nN,
                    eye: le.Md,
                    circle: oe.di,
                    star: ie.T,
                    bell: O.qm,
                    "bell-slash": re.n8,
                    bookmark: ae.xV,
                    reply: ne.Lh,
                    user: te.IL,
                    "user-circle": ee.m0,
                    "user-plus": s.FK,
                    "user-minus": Y.k9,
                    camera: H._j,
                    display: Q.YV,
                    trash: X.$,
                    feather: K.nA,
                    images: J.l9,
                    house: B.faHouse,
                    location: F.iU,
                    rocket: _.tM,
                    microphone: G.UO,
                    "folder-open": L.cC,
                    gauge: V.Iz,
                    dice: W.RJ,
                    "triangle-exclamation": S.faTriangleExclamation
                },
                Ee = n(37463),
                xe = n(88233),
                ke = n(2566);
            P().extend(D()), P().extend(R());
            var Ie = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: $.Z
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: O.qm
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: O.qm
                    },
                    "group.invite": {
                        caption: "Group Invite",
                        icon: l.FU
                    },
                    "group.joinRequest": {
                        caption: "Group Join Request",
                        icon: l.FU
                    },
                    "group.post": {
                        caption: "Group Post",
                        icon: O.qm
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: j.faCircleExclamation
                    },
                    "moderation.contentrestriction": {
                        caption: "Content Moderation",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: Z.JH
                    },
                    "avatarreview.success": {
                        caption: "Avatar Approved",
                        icon: C.faCircleCheck
                    },
                    "avatarreview.failure": {
                        caption: "Avatar Rejected",
                        icon: T.faCircleXmark
                    },
                    "promo.redeem": {
                        caption: "Promo",
                        icon: N.IB
                    },
                    "badge.earned": {
                        caption: "Badge Earned",
                        icon: I.U
                    },
                    "text.adventure": {
                        caption: "Adventure",
                        icon: k.Jw
                    },
                    boop: {
                        caption: "Boop",
                        icon: x.kQ
                    }
                },
                Ne = {
                    OpenListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(A.yy.EXPIRING)
                    },
                    OpenExpiredListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(A.yy.EXPIRED)
                    }
                },
                Te = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                Ce = function(e) {
                    var t, n = e.notificationId,
                        a = e.respondToNotification,
                        r = e.type,
                        i = e.data,
                        o = e.icon,
                        l = e.text;
                    return "link" === r ? null : m.createElement(ke.n9, {
                        disabled: "reply" === r,
                        onClick: function() {
                            a({
                                notificationId: n,
                                responseType: r,
                                responseData: i
                            })
                        },
                        title: "reply" === r ? "To reply, open your notifications in VRChat" : l || r
                    }, m.createElement(Ee.$1, {
                        icon: (t = o, ye[t] || t)
                    }), " ", l || r)
                };
            const Ze = function(e) {
                var t = e.notification,
                    n = e.slim,
                    r = (0, d.I0)(),
                    i = m.useState(!1),
                    o = (0, v.Z)(i, 2),
                    l = o[0],
                    c = o[1],
                    s = (0, M.S5)(),
                    g = (0, v.Z)(s, 2),
                    h = g[0],
                    x = g[1].isSuccess,
                    k = (0, M.oS)(),
                    I = (0, v.Z)(k, 2),
                    N = I[0],
                    T = I[1].isSuccess,
                    C = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.link,
                            n = (e.linkText, (null == t ? void 0 : t.split(":")) || []),
                            a = (0, v.Z)(n, 2),
                            r = a[0],
                            i = a[1];
                        if (r) return (Ne[r] || Te)({
                            linkType: r,
                            linkId: i
                        })
                    }(t),
                    Z = (t.linkText || t.title, t.title || t.linkText);
                (x || T) && r((0, f.tV)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var S = Ie[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: E.Ps
                    },
                    j = S.icon,
                    O = S.caption,
                    A = t.createdAt && P()(t.createdAt);
                return m.createElement(m.Fragment, null, m.createElement(ke.jm, null, m.createElement(ke.lR, null, m.createElement(ke.XK, null, m.createElement(Ee.$1, {
                    icon: j
                }), " ", m.createElement("i", null, O)), (null == t ? void 0 : t.canDelete) && m.createElement(ke.Z2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        N({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, m.createElement(Ee.$1, {
                    icon: y.faXmark
                }))), m.createElement(ke.g6, null, t.imageUrl && m.createElement(ke.rR, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.xY.offline.color
                }, m.createElement(ke.v_, null, m.createElement(Ee.$1, {
                    icon: w.q9
                })), m.createElement(ke.sJ, {
                    url: t.imageUrl
                }), m.createElement(ke.EU, {
                    url: t.imageUrl
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, !!Z && m.createElement("strong", null, C ? m.createElement(p.rU, {
                    to: C
                }, Z) : Z), (null == A ? void 0 : A.isValid()) && m.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, m.createElement("small", null, m.createElement("time", {
                    dateTime: t.createdAt,
                    title: A.format("llll")
                }, m.createElement(Ee.$1, {
                    className: "tw-mr-1",
                    icon: b.SZ
                }), A.fromNow()))), m.createElement("p", null, t.message)), m.createElement(ke.tt, {
                    slim: n
                }, null == t ? void 0 : t.responses.map((function(e) {
                    return m.createElement(Ce, (0, a.Z)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: h
                    }))
                })))))), !!t.imageUrl && l && m.createElement(xe.Z, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const Se = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    a = (0, d.I0)(),
                    r = (0, M.gS)(),
                    o = (0, v.Z)(r, 2),
                    c = o[0],
                    s = o[1].isSuccess,
                    p = (0, M.pX)(),
                    g = (0, v.Z)(p, 1)[0],
                    h = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && a((0, f.tV)({
                    notificationId: t.id
                })), m.createElement(ke.jm, null, m.createElement(ke.XK, null, m.createElement(Ee.$1, {
                    icon: l.FU
                }), "  ", m.createElement("i", null, "System Message")), m.createElement(ke.g6, null, m.createElement(ke.gt, {
                    statusColor: u.xY.offline.color
                }, m.createElement(ke.sJ, {
                    url: h
                }), m.createElement(ke.EU, {
                    url: h
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, m.createElement("strong", null, "System Message"), " - ", t.message), m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        c({
                            notificationId: t.id
                        }), g({
                            notificationId: t.id
                        })
                    },
                    color: "primary",
                    title: "Close"
                }, m.createElement(Ee.$1, {
                    icon: i.NB
                }), " Close")))))
            };
            var je = ["notification"],
                Oe = {
                    friendRequest: s.FK,
                    "friend-add": s.FK,
                    invite: l.FU,
                    requestInvite: l.FU,
                    requestInviteResponse: c.dw,
                    inviteResponse: c.dw,
                    message: l.FU
                },
                Ae = {
                    friendRequest: "Friend Request",
                    "friend-add": "Friend Status",
                    invite: "Invite",
                    requestInvite: "Invite Request",
                    requestInviteResponse: "Invite Response",
                    inviteResponse: "Invite Response",
                    message: "System Message"
                },
                qe = ["friend-active", "friend-add", "friend-online"];
            const Pe = function(e) {
                var t, n, l, c, s, v, b, w, y = e.notification,
                    E = (0, r.Z)(e, je),
                    x = (0, d.I0)(),
                    k = y.type,
                    I = y.senderUserId,
                    N = y.id,
                    T = y.message,
                    C = y.isSystem,
                    Z = 2 === y.version,
                    S = "message" === k || C,
                    j = (0, h.GR)(I, {
                        skip: !I || Z
                    }),
                    O = j.data,
                    A = j.isLoading,
                    q = j.error;
                if (Z) return m.createElement(Ze, (0, a.Z)({}, E, {
                    notification: y
                }));
                if (A) return m.createElement("p", null, "Loading");
                if (S) return m.createElement(Se, (0, a.Z)({}, E, {
                    notification: y,
                    senderUserData: O
                }));
                if (404 === (null == q ? void 0 : q.status)) return null;
                var P, z = Oe[k],
                    R = Ae[k],
                    U = (0, u.Tq)(O.status).color,
                    D = O.profilePicOverride || O.currentAvatarThumbnailImageUrl,
                    M = (null === (t = y.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = y.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (l = y.details) || void 0 === l ? void 0 : l.requestMessage);
                return m.createElement(ke.jm, null, m.createElement(ke.XK, null, m.createElement(Ee.$1, {
                    icon: z
                }), "  ", m.createElement("i", null, R)), m.createElement(ke.g6, null, m.createElement(ke.rR, {
                    to: "/home/user/".concat(I),
                    statusColor: U
                }, !(null !== (c = y.details) && void 0 !== c && c.imageUrl) && m.createElement(ke.v_, null, "Go To Profile"), m.createElement(ke.sJ, {
                    url: null !== (s = null === (v = y.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== s ? s : D
                }), m.createElement(ke.EU, {
                    url: null !== (b = null === (w = y.details) || void 0 === w ? void 0 : w.imageUrl) && void 0 !== b ? b : D
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, m.createElement(p.rU, {
                    to: "/home/user/".concat(I)
                }, m.createElement("strong", null, O.displayName)), " - ", T || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (P = y.details) || void 0 === P ? void 0 : P.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [k]), "friendRequest" === k ? m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        return x((0, f.yK)({
                            notificationId: N,
                            withServer: !qe.includes(y.type)
                        }))
                    },
                    color: "secondary"
                }, m.createElement(Ee.$1, {
                    icon: i.NB
                })), m.createElement(ke.n9, {
                    onClick: function() {
                        x((0, f.FC)({
                            notificationId: y.id
                        })), (0, g.Kz)("Social_AcceptFriendRequest", {
                            targetUserId: y.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, m.createElement(Ee.$1, {
                    icon: o.LE
                }))) : m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        return x((0, f.yK)({
                            notificationId: N,
                            withServer: !qe.includes(y.type)
                        }))
                    },
                    color: "secondary"
                }, m.createElement(Ee.$1, {
                    icon: i.NB
                })), "invite" === k && m.createElement(ke.n9, {
                    onClick: function() {
                        window.open(function() {
                            var e;
                            if (null !== (e = y.details) && void 0 !== e && e.worldId) {
                                var t = "/home/launch",
                                    n = y.details.worldId.split(":");
                                return n.length > 1 ? "".concat(t, "?worldId=").concat(n[0], "&instanceId=").concat(n[1]) : "".concat(t, "?worldId=").concat(n[0])
                            }
                            return null
                        }())
                    },
                    color: "secondary"
                }, m.createElement("strong", null, "Join"))))), M && m.createElement(ke.hH, null, '"', M, '"'))
            }
        },
        2566: (e, t, n) => {
            "use strict";
            n.d(t, {
                EU: () => x,
                N2: () => d,
                XK: () => m,
                Z2: () => h,
                db: () => I,
                e5: () => k,
                g6: () => s,
                gp: () => p,
                gt: () => b,
                hH: () => u,
                jm: () => c,
                lR: () => l,
                n9: () => g,
                rR: () => y,
                sJ: () => E,
                tt: () => f,
                v_: () => v
            });
            var a = n(4965),
                r = n(34698),
                i = n(79655),
                o = n(86646);
            var l = (0, a.Z)("div", {
                    target: "ennyu4t17"
                })({
                    name: "ha9uku",
                    styles: "display:flex;width:100%;justify-content:space-between"
                }),
                c = (0, a.Z)("div", {
                    target: "ennyu4t16"
                })({
                    name: "2pn6kz",
                    styles: "overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:10px"
                }),
                s = (0, a.Z)("div", {
                    target: "ennyu4t15"
                })({
                    name: "1nyl2gd",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background:#07242b;border:#053c48 solid 2px;border-radius:8px;padding:5px"
                }),
                u = (0, a.Z)("div", {
                    target: "ennyu4t14"
                })({
                    name: "dklbma",
                    styles: "background:#053c48;padding:3px 10px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 10px"
                }),
                m = (0, a.Z)("small", {
                    target: "ennyu4t13"
                })({
                    name: "kp3m62",
                    styles: "background:#053c48;padding:3px 10px;border-top-right-radius:5px;border-top-left-radius:5px;align-self:flex-start;margin-left:10px"
                }),
                d = (0, a.Z)("div", {
                    target: "ennyu4t12"
                })({
                    name: "16jnipj",
                    styles: "display:flex;flex-direction:column;flex:1;justify-content:space-between;margin:0 5px 0 5px;&>*{margin:3px 0 3px 0;}"
                }),
                p = (0, a.Z)("div", {
                    target: "ennyu4t11"
                })({
                    name: "1v5otb0",
                    styles: "display:inline-block;flex:1;flex-direction:row;align-items:center;white-space:pre-wrap;word-break:break-word;& small{overflow:hidden;max-lines:1;white-space:nowrap;text-overflow:ellipsis;}& strong{font-size:125%;}"
                }),
                f = (0, a.Z)("div", {
                    target: "ennyu4t10"
                })("flex:1;display:flex;flex-wrap:wrap;flex-direction:row;gap:1.5rem;@media (min-width: 700px){justify-content:end;}", (function(e) {
                    return e.slim && "\n      justify-content: end;\n      font-size: 0;\n\n      & > ".concat(g, " {\n        gap: 0;\n      }\n    ")
                }), ";"),
                g = (0, a.Z)("button", {
                    target: "ennyu4t9"
                })("display:flex;align-items:center;text-align:initial;font-size:80%;border:none;background:none;margin:0;padding:3px 0;color:var(--bs-primary);cursor:pointer;gap:.5rem;&[disabled]{color:hsl(0, 0%, 60%);}&>", o.O, "{transition:all 0.1s ease-out;font-size:25px;}&:hover>", o.O, "{transform:scale(1.2);}"),
                h = (0, a.Z)(g, {
                    target: "ennyu4t8"
                })("margin:0;padding:0 .5rem;&>", o.O, "{font-size:1rem;}"),
                v = (0, a.Z)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                b = (0, a.Z)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;"),
                w = (0, a.Z)(i.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;&:hover ", v, "{opacity:1;}"),
                y = (0, a.Z)(w, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", (function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(v, " {\n      opacity: 0;\n    }\n  ")
                }), ";"),
                E = (0, a.Z)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                x = (0, a.Z)(E, {
                    target: "ennyu4t2"
                })({
                    name: "1gxenc0",
                    styles: "z-index:1;background-size:cover;filter:blur(20px);width:164px;height:110px;top:-20px;left:-20px"
                }),
                k = (0, a.Z)("div", {
                    target: "ennyu4t1"
                })("text-align:center;max-width:600px;margin:auto;margin-bottom:20px;opacity:", (function(e) {
                    return e.seen ? "0.8" : "1"
                }), ";border:", (function(e) {
                    return e.seen ? "0" : "2px solid yellow"
                }), ";& .card-header{text-align:left;}& .ignored{opacity:0.3;transform:scale(0.8);}"),
                I = (0, a.Z)(r.Z, {
                    target: "ennyu4t0"
                })({
                    name: "1ctac9v",
                    styles: "text-transform:capitalize;margin:0px 12px"
                })
        },
        76938: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => a
            });
            var a = function(e) {
                return e.currentUser.isMod
            }
        },
        91492: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => f,
                Xz: () => p,
                aj: () => d,
                dq: () => v,
                fv: () => g,
                sw: () => h
            });
            var a = n(4942),
                r = n(45987),
                i = n(61509),
                o = n(64358),
                l = ["n", "pageValue"],
                c = ["n", "pageValue", "types", "collection"];

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getInventoryCollections: e.query({
                                query: function() {
                                    return "inventory/collections"
                                },
                                providesTags: ["InventoryCollections"]
                            }),
                            getInventoryNotSeenItems: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        n = void 0 === t ? 100 : t,
                                        a = e.pageValue,
                                        i = void 0 === a ? 1 : a,
                                        c = (0, r.Z)(e, l);
                                    return {
                                        url: "inventory",
                                        params: u(u({}, (0, o.ue)({
                                            n,
                                            pageValue: i
                                        })), {}, {
                                            notFlags: "ugc",
                                            notTypes: "bundle",
                                            archived: !1,
                                            seen: !1
                                        }, c)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    n.n, n.offset;
                                    return [{
                                        type: "InventoryItemIsNotSeen"
                                    }]
                                }
                            }),
                            getInventoryItems: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        n = void 0 === t ? 100 : t,
                                        a = e.pageValue,
                                        i = void 0 === a ? 1 : a,
                                        l = e.types,
                                        s = e.collection,
                                        m = (0, r.Z)(e, c);
                                    return {
                                        url: "inventory",
                                        params: u(u(u(u({}, (0, o.ue)({
                                            n,
                                            pageValue: i
                                        })), l && {
                                            types: l
                                        }), s && {
                                            collection: s
                                        }), m)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var a = n.n,
                                        r = n.offset;
                                    return [{
                                        type: "InventoryItems",
                                        id: "".concat(a, "-").concat(r)
                                    }]
                                }
                            }),
                            getInventoryItemById: e.query({
                                query: function(e) {
                                    var t = e.itemId;
                                    return "inventory/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "InventoryItem",
                                        id: n.itemId
                                    }]
                                }
                            }),
                            deleteInventoryItem: e.mutation({
                                query: function(e) {
                                    var t = e.itemId;
                                    return {
                                        url: "inventory/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "InventoryItem",
                                        id: n.itemId
                                    }, "InventoryItems"]
                                }
                            }),
                            archiveInventoryItem: e.mutation({
                                query: function(e) {
                                    var t = e.itemId,
                                        n = e.isArchived;
                                    return {
                                        url: "inventory/".concat(t),
                                        method: "PUT",
                                        body: {
                                            isArchived: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "InventoryItem",
                                        id: n.itemId
                                    }, "InventoryItems"]
                                }
                            }),
                            seenInventoryItem: e.mutation({
                                query: function(e) {
                                    var t = e.itemId;
                                    return {
                                        url: "inventory/".concat(t),
                                        method: "PUT",
                                        body: {
                                            isSeen: !0
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "InventoryItem",
                                        id: n.itemId
                                    }, "InventoryItems"]
                                }
                            }),
                            updateInventoryItem: e.mutation({
                                query: function(e) {
                                    var t = e.itemId,
                                        n = e.itemData;
                                    return {
                                        url: "inventory/".concat(t),
                                        method: "PUT",
                                        body: u({}, n)
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "InventoryItem",
                                        id: n.itemId
                                    }, "InventoryItems", "InventoryItemIsNotSeen"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }),
                d = m.useGetInventoryItemsQuery,
                p = (m.useGetInventoryItemByIdQuery, m.useDeleteInventoryItemMutation),
                f = m.useArchiveInventoryItemMutation,
                g = (m.useSeenInventoryItemMutation, m.useUpdateInventoryItemMutation),
                h = m.useGetInventoryCollectionsQuery,
                v = m.useGetInventoryNotSeenItemsQuery
        },
        22082: (e, t, n) => {
            "use strict";
            n.d(t, {
                MM: () => r,
                Pc: () => l,
                Zv: () => o,
                oE: () => i
            });
            var a = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getJams: e.query({
                                query: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.type,
                                        n = e.states;
                                    return {
                                        url: "jams?".concat(t ? "type=${type}&" : "").concat(n ? n.map((function(e) {
                                            return "states=".concat(e)
                                        })).join("&") : "")
                                    }
                                },
                                providesTags: ["Jams"]
                            }),
                            getJamSubmissions: e.query({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.submitterId,
                                        a = e.contentId;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        params: {
                                            submitterId: n,
                                            contentId: a
                                        }
                                    }
                                },
                                providesTags: ["JamSubmissions"]
                            }),
                            submitJamContent: e.mutation({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.contentId,
                                        a = e.description;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        method: "POST",
                                        body: {
                                            contentId: n,
                                            description: a
                                        }
                                    }
                                },
                                invalidatesTags: ["JamSubmissions"]
                            }),
                            deleteSubmittedContent: e.mutation({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.submissionId;
                                    e.silent;
                                    return {
                                        url: "jams/".concat(t, "/submissions/").concat(n),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return n.silent ? [] : ["JamSubmissions"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Jams", "JamSubmissions"]
                }),
                r = a.useDeleteSubmittedContentMutation,
                i = a.useGetJamsQuery,
                o = a.useGetJamSubmissionsQuery,
                l = a.useSubmitJamContentMutation
        },
        9419: (e, t, n) => {
            "use strict";
            n.d(t, {
                S5: () => s,
                XJ: () => o,
                _V: () => l,
                gS: () => c,
                oS: () => i,
                pX: () => r
            });
            var a = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllV2Notifications: e.query({
                                query: function() {
                                    return "notifications?limit=100"
                                },
                                providesTags: ["V2Notifications"]
                            }),
                            acknowledgeV2Notification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "notifications/".concat(t, "/see"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            deleteV2Notification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "notifications/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            deleteAllV2Notification: e.mutation({
                                query: function() {
                                    return {
                                        url: "notifications",
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            respondToNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId,
                                        n = e.responseType,
                                        a = e.responseData;
                                    return {
                                        url: "notifications/".concat(t, "/respond"),
                                        body: {
                                            responseType: n,
                                            responseData: a
                                        },
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            acknowledgeNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "auth/user/notifications/".concat(t, "/see"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            hideNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "auth/user/notifications/".concat(t, "/hide"),
                                        method: "PUT"
                                    }
                                }
                            })
                        }
                    }
                }),
                r = a.useAcknowledgeNotificationMutation,
                i = (a.useAcknowledgeV2NotificationMutation, a.useDeleteV2NotificationMutation),
                o = a.useDeleteAllV2NotificationMutation,
                l = a.useGetAllV2NotificationsQuery,
                c = a.useHideNotificationMutation,
                s = a.useRespondToNotificationMutation
        },
        6655: (e, t, n) => {
            "use strict";
            n.d(t, {
                $2: () => x,
                Cv: () => y,
                En: () => m,
                O7: () => g,
                S6: () => v,
                WA: () => w,
                gI: () => E,
                gq: () => f,
                kN: () => b,
                nT: () => p,
                pp: () => h,
                v$: () => d,
                ve: () => k
            });
            var a = n(45987),
                r = n(4942),
                i = n(61509),
                o = ["redirect"],
                l = ["userId", "flowConfig"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return s({
                            syncTiliaAccount: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "tilia/sync",
                                        method: "PUT",
                                        body: {
                                            userId: e.userId
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var a = n.userId;
                                    return [{
                                        type: "TiliaTosAcceptance",
                                        id: a
                                    }, {
                                        type: "TiliaKycCompletion",
                                        id: a
                                    }]
                                }
                            }),
                            getTiliaStatus: e.query({
                                query: function() {
                                    return "tilia/status"
                                },
                                providesTags: function(e, t) {
                                    return ["TiliaStatus"]
                                }
                            }),
                            getTiliaTosAcceptance: e.query({
                                query: function(e) {
                                    var t = e.userId;
                                    return "user/".concat(t, "/tilia/tos")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaTosAcceptance",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaKycCompletion: e.query({
                                query: function(e) {
                                    var t = e.userId;
                                    return "user/".concat(t, "/tilia/kyc")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaKycCompletion",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaBalance: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.type,
                                        a = void 0 === n ? "" : n;
                                    return "user/".concat(t, "/balance/").concat(a)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaBalance",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaPayoutMethod: e.query({
                                query: function(e) {
                                    var t = e.paymentMethodId;
                                    return "tilia/payoutMethod/".concat(t)
                                }
                            }),
                            getTiliaPayoutEligible: e.query({
                                query: function() {
                                    return "tilia/payout/eligibility"
                                }
                            }),
                            getTiliaPayoutEstimate: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/estimate",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            createTiliaPayoutRequest: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/request",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            getTiliaWebRedirectUrl: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/web/redirect",
                                        method: "POST",
                                        body: {
                                            userId: e.userId,
                                            flow: e.flow
                                        }
                                    }
                                },
                                transformResponse: function(e, t) {
                                    var n = e.redirect,
                                        r = (0, a.Z)(e, o),
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = (i.userId, i.flowConfig),
                                        u = (0, a.Z)(i, l),
                                        m = new URL(n);
                                    return c && m.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(u).forEach((function(e) {
                                        "flow" !== e && m.searchParams.set(e, u[e])
                                    })), s({
                                        redirect: m.href,
                                        rawRedirect: n
                                    }, r)
                                }
                            })
                        }, !1)
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["TiliaTosAcceptance", "TiliaKycCompletion", "TiliaBalance", "TiliaStatus"]
                }),
                m = (u.useSyncTiliaAccountMutation, u.useGetTiliaStatusQuery),
                d = u.useGetTiliaTosAcceptanceQuery,
                p = u.useSetTiliaTosAcceptanceMutation,
                f = u.useGetTiliaKycCompletionQuery,
                g = u.useSetTiliaKycCompletionMutation,
                h = u.useGetTiliaBalanceQuery,
                v = u.useGetTiliaPayoutMethodQuery,
                b = u.useGetTiliaPayoutEligibleQuery,
                w = u.useLazyGetTiliaPayoutEstimateQuery,
                y = u.useCreateTiliaPayoutRequestMutation,
                E = u.useLazyGetTiliaWebRedirectUrlQuery,
                x = u.useGiveTiliaTokenBalanceMutation,
                k = u.useTakeTiliaTokenBalanceMutation
        },
        18800: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "55add526438a90fb-574w.png 574w",
                images: [{
                    path: n.p + "55add526438a90fb-574w.png",
                    width: 574,
                    height: 574
                }],
                src: n.p + "55add526438a90fb-574w.png",
                toString: function() {
                    return n.p + "55add526438a90fb-574w.png"
                },
                width: 574,
                height: 574
            }
        },
        94266: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "b1de373cdba9384b-574w.png 574w",
                images: [{
                    path: n.p + "b1de373cdba9384b-574w.png",
                    width: 574,
                    height: 574
                }],
                src: n.p + "b1de373cdba9384b-574w.png",
                toString: function() {
                    return n.p + "b1de373cdba9384b-574w.png"
                },
                width: 574,
                height: 574
            }
        },
        23667: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "c030dafcbcdc1f62-574w.png 574w",
                images: [{
                    path: n.p + "c030dafcbcdc1f62-574w.png",
                    width: 574,
                    height: 574
                }],
                src: n.p + "c030dafcbcdc1f62-574w.png",
                toString: function() {
                    return n.p + "c030dafcbcdc1f62-574w.png"
                },
                width: 574,
                height: 574
            }
        },
        22308: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "5050e7908d34878c-574w.png 574w",
                images: [{
                    path: n.p + "5050e7908d34878c-574w.png",
                    width: 574,
                    height: 574
                }],
                src: n.p + "5050e7908d34878c-574w.png",
                toString: function() {
                    return n.p + "5050e7908d34878c-574w.png"
                },
                width: 574,
                height: 574
            }
        },
        37652: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "e322896a9a7b4ef8-534w.png 534w",
                images: [{
                    path: n.p + "e322896a9a7b4ef8-534w.png",
                    width: 534,
                    height: 534
                }],
                src: n.p + "e322896a9a7b4ef8-534w.png",
                toString: function() {
                    return n.p + "e322896a9a7b4ef8-534w.png"
                },
                width: 534,
                height: 534
            }
        },
        4239: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "7e3d3ccfd91191b8-574w.png 574w",
                images: [{
                    path: n.p + "7e3d3ccfd91191b8-574w.png",
                    width: 574,
                    height: 574
                }],
                src: n.p + "7e3d3ccfd91191b8-574w.png",
                toString: function() {
                    return n.p + "7e3d3ccfd91191b8-574w.png"
                },
                width: 574,
                height: 574
            }
        },
        33622: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "bc444f44110e103f-3072w.jpg 3072w",
                images: [{
                    path: n.p + "bc444f44110e103f-3072w.jpg",
                    width: 3072,
                    height: 3072
                }],
                src: n.p + "bc444f44110e103f-3072w.jpg",
                toString: function() {
                    return n.p + "bc444f44110e103f-3072w.jpg"
                },
                width: 3072,
                height: 3072
            }
        },
        93046: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "b84662be12204a2e-128w.png 128w",
                images: [{
                    path: n.p + "b84662be12204a2e-128w.png",
                    width: 128,
                    height: 128
                }],
                src: n.p + "b84662be12204a2e-128w.png",
                toString: function() {
                    return n.p + "b84662be12204a2e-128w.png"
                },
                width: 128,
                height: 128
            }
        },
        28964: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "5abacd6a81ce71f4-410w.png 410w",
                images: [{
                    path: n.p + "5abacd6a81ce71f4-410w.png",
                    width: 410,
                    height: 115
                }],
                src: n.p + "5abacd6a81ce71f4-410w.png",
                toString: function() {
                    return n.p + "5abacd6a81ce71f4-410w.png"
                },
                width: 410,
                height: 115
            }
        }
    }
]);
//# sourceMappingURL=6684cac68b3f6149b069fc01b173bf2d1c41585671b35fb60a6245718e568c11.js.map