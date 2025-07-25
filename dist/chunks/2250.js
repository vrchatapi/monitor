(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2250], {
        25411: (e, t, n) => {
            "use strict";
            n.d(t, {
                CJ: () => b,
                Lu: () => h,
                Tr: () => v,
                gW: () => g,
                k4: () => p,
                pz: () => f,
                zf: () => w
            });
            var r = n(4942),
                a = n(9669),
                o = n.n(a);
            n(12227);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
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
                d = {
                    sort: "relevance",
                    fuzzy: !0
                },
                m = function(e) {
                    var t = e.searchTerm,
                        n = void 0 === t ? "" : t;
                    return e.isInternalVariant ? n : n.replace(/tag:\S*/, "")
                },
                f = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.isInternalVariant,
                        i = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n: r
                        });
                    return a && t && (i = l(l({}, i), n)), {
                        type: "SEARCH_USERS",
                        payload: o().get(window.apiUrl("/api/1/users"), {
                            params: i
                        })
                    }
                },
                p = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.offset,
                        i = e.isInternalVariant,
                        c = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: i
                            }),
                            n: r,
                            offset: a
                        });
                    return i && t && (c = l(l({}, c), n)), {
                        type: "LOAD_MORE_USERS",
                        payload: o().get(window.apiUrl("/api/1/users"), {
                            params: c
                        })
                    }
                },
                g = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        r = e.offset,
                        a = e.isInternalVariant,
                        i = l(l({}, c), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n,
                            offset: r
                        });
                    return {
                        type: "LOAD_MORE_WORLDS",
                        payload: o().get(window.apiUrl("/api/1/worlds"), {
                            params: i
                        })
                    }
                },
                b = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        r = e.offset,
                        a = e.isInternalVariant,
                        i = l(l({}, u), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n,
                            offset: r
                        });
                    return {
                        type: "LOAD_MORE_AVATARS",
                        payload: o().get(window.apiUrl("/api/1/avatars"), {
                            params: i
                        })
                    }
                },
                h = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.offset,
                        i = e.isInternalVariant;
                    if (t.length < 3 || t.length > 20) return {
                        type: "LOAD_MORE_EVENTS",
                        payload: Promise.resolve({
                            data: []
                        })
                    };
                    var c = l(l({}, d), {}, {
                        searchTerm: m({
                            searchTerm: t,
                            isInternalVariant: i
                        }),
                        n: r,
                        offset: a
                    }, n);
                    return {
                        type: "LOAD_MORE_EVENTS",
                        payload: o().get(window.apiUrl("/api/1/calendar/search"), {
                            params: c
                        })
                    }
                },
                w = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.isInternalVariant,
                        i = [];
                    return i.push(f({
                        searchTerm: t,
                        queryParams: n,
                        n: r,
                        isInternalVariant: a
                    })), i.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            r = e.isInternalVariant,
                            a = l(l({}, c), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: r
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_WORLDS",
                            payload: o().get(window.apiUrl("/api/1/worlds"), {
                                params: a
                            })
                        }
                    }({
                        searchTerm: t,
                        n: r,
                        isInternalVariant: a
                    })), i.push(function(e) {
                        var t = e.searchTerm,
                            n = e.queryParams,
                            r = e.n,
                            a = e.isInternalVariant;
                        if (t.length < 3 || t.length > 20) return {
                            type: "SEARCH_EVENTS",
                            payload: Promise.resolve({
                                data: []
                            })
                        };
                        var i = l(l({}, d), {}, {
                            searchTerm: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n: r
                        }, n);
                        return {
                            type: "SEARCH_EVENTS",
                            payload: o().get(window.apiUrl("/api/1/calendar/search"), {
                                params: i
                            })
                        }
                    }({
                        searchTerm: t,
                        queryParams: n,
                        n: r,
                        isInternalVariant: a
                    })), a && i.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            r = e.isInternalVariant,
                            a = l(l({}, u), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: r
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_AVATARS",
                            payload: o().get(window.apiUrl("/api/1/avatars"), {
                                params: a
                            })
                        }
                    }({
                        searchTerm: t,
                        n: r,
                        isInternalVariant: a
                    })), i
                },
                v = function() {
                    return {
                        type: "AUTO_REDIRECT_TOGGLE"
                    }
                }
        },
        56209: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            const r = (0, n(45861).createIconDescriptor)({
                name: "item",
                width: 1500,
                height: 1550,
                path: "M840.879 1540.66L871.394 909.849C792.413 960.721 739.097 960.721 667.896 960.721C596.695 960.721 505.218 920.024 484.808 909.849C477.32 947.303 480.858 984.757 483.245 1010.03C484.101 1019.08 484.808 1026.57 484.808 1031.94C484.808 1052.29 464.532 1052.29 433.951 1052.29C403.369 1052.29 382.959 1042.12 372.921 1021.77C364.891 1005.49 362.794 920.021 362.75 879.321C311.847 862.364 203.979 822.321 179.728 797.807C126.287 1118.3 189.53 1244.09 219.966 1304.62C224.326 1313.29 228.012 1320.63 230.586 1327C251.13 1377.87 464.532 1479.61 606.934 1530.49C720.855 1571.18 810.365 1554.23 840.879 1540.66Z M973.109 645.315C948.698 702.292 932.423 1259.17 927.337 1530.49C950.514 1521.65 974.436 1513.91 996.815 1506.66C1036.62 1493.77 1071.54 1482.47 1088.7 1469.44C1115.51 1449.09 1125.68 1377.87 1125.68 1367.7C1125.68 1357.52 1166.37 1323.61 1186.71 1316.82C1183.32 1160.82 1174.51 826.42 1166.37 736.885C1156.2 624.967 1125.68 553.746 1095.17 523.223C1064.65 492.7 1003.62 574.094 973.109 645.315Z M1033.94 400.989C1058.35 409.129 1071.23 438.296 1074.62 451.861C952.365 411.028 871.394 706.357 871.394 706.357C871.394 706.357 844.27 808.101 830.708 838.624C810.365 909.844 698.277 889.496 657.791 879.321C617.306 869.147 545.904 845.407 505.218 828.449C525.561 787.752 566.247 702.26 566.247 685.872C566.247 665.387 495.047 645.311 464.532 655.485C440.12 663.625 399.978 753.758 382.959 797.807C345.016 803.013 194.284 734.336 210.042 685.872C339.454 287.867 624.368 288.827 693.919 289.061C695.482 289.066 696.936 289.071 698.277 289.071C746.325 289.071 907.861 352.137 989.295 383.93C1011.29 392.519 1027.45 398.825 1033.94 400.989Z M983.281 85.7247C1013.8 106.073 1027.36 268.859 1023.97 340.079C1007.01 329.907 963.955 307.525 927.337 299.382C932.423 248.505 927.337 156.945 912.08 136.596C896.823 116.247 840.879 106.073 820.536 126.421C809.345 137.616 809.927 198.614 810.268 234.394C810.319 239.75 810.365 244.541 810.365 248.515C793.412 248.515 753.404 244.445 728.992 228.166C728.992 167.261 752.558 54.1262 779.85 45.0221C810.365 34.8429 952.766 65.3766 983.281 85.7247Z M1146.03 421.474L1095.17 360.428C1166.37 289.207 1227.4 279.033 1278.26 299.382C1329.11 319.73 1390.14 380.777 1400.31 482.521C1410.49 584.264 1441 950.542 1441 1072.63C1441 1186.45 1387.97 1238.37 1356.06 1269.62C1353.74 1271.89 1351.53 1274.05 1349.46 1276.12C1325.05 1300.54 1277.87 1304.62 1257.53 1304.62V1202.88C1302.15 1185.03 1307.92 1160.9 1322.4 1100.26C1324.43 1091.79 1326.62 1082.61 1329.11 1072.63C1349.46 991.242 1318.94 655.506 1308.77 543.577L1308.77 543.567C1298.61 431.72 1278.28 421.487 1237.65 401.029L1237.57 400.989C1205.02 384.602 1162.98 407.818 1146.03 421.474Z"
            })
        },
        78542: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(45697),
                a = n.n(r),
                o = n(67294),
                i = n(18800),
                l = n.n(i),
                c = n(94266),
                s = n.n(c),
                u = n(23667),
                d = n.n(u),
                m = n(22308),
                f = n.n(m),
                p = n(37652),
                g = n.n(p),
                b = n(4239),
                h = n.n(b),
                w = {
                    circle: l(),
                    flower: s(),
                    heart: d(),
                    pow: f(),
                    square: g(),
                    star: h()
                },
                v = function(e) {
                    var t = e.metaData,
                        n = e.imageUrl,
                        r = e.size,
                        a = void 0 === r ? 180 : r,
                        i = e.onLoad,
                        l = e.onError,
                        c = e.isThumbnail,
                        s = void 0 !== c && c,
                        u = e.isGrayScale,
                        d = void 0 !== u && u,
                        m = (0, o.useRef)(0),
                        f = (0, o.useRef)(null),
                        p = (0, o.useRef)(null),
                        g = (0, o.useRef)(null),
                        b = (0, o.useRef)(null),
                        h = (0, o.useRef)(-1),
                        v = function(e) {
                            e.filter = d ? "grayscale(1)" : "none"
                        },
                        y = function() {
                            -1 !== h.current && (clearInterval(h.current), h.current = -1)
                        },
                        E = (0, o.useMemo)((function() {
                            return w[null == t ? void 0 : t.maskTag] || null
                        }), [t]),
                        x = (0, o.useRef)(!1),
                        A = (0, o.useMemo)((function() {
                            var e = !(null == t || !t.animated);
                            return e || y(), x.current = e, e
                        }), [t]),
                        C = (0, o.useMemo)((function() {
                            return null == t ? void 0 : t.frames
                        }), [t]),
                        k = (0, o.useMemo)((function() {
                            return null == t ? void 0 : t.framesOverTime
                        }), [t]),
                        N = function() {
                            return C <= 4 ? 512 : C <= 16 ? 256 : C <= 64 ? 128 : void console.error("Frame count of ".concat(C, " is unsupported!"))
                        },
                        I = function() {
                            var e = C <= 4 ? 2 : C <= 16 ? 4 : C <= 64 ? 8 : void console.error("Frame count of ".concat(C, " is unsupported!")),
                                t = N();
                            return {
                                x: m.current % e * t,
                                y: Math.floor(m.current / e) * t
                            }
                        },
                        O = function() {
                            y(), null === g.current && b.current && (g.current = b.current.getContext("2d")), g.current && g.current.clearRect(0, 0, a, a), A && C && k > 0 && (h.current = setInterval(j, 1e3 / k))
                        },
                        j = function() {
                            if (A) {
                                if (null !== g.current && null !== f.current) {
                                    var e = g.current;
                                    e.clearRect(0, 0, 1e3, 1e3), e.save(), null !== E && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in");
                                    var t = I(),
                                        n = N();
                                    v(e), e.drawImage(f.current, t.x, t.y, n, n, 0, 0, a, a), e.restore(), m.current = (m.current + 1) % C
                                }
                            } else y()
                        },
                        Z = function() {
                            if (null !== b.current && null !== f.current) {
                                var e = b.current.getContext("2d");
                                if (e.clearRect(0, 0, a, a), e.imageSmoothingEnabled = !1, e.save(), null !== E && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in"), s) return v(e), e.drawImage(f.current, 0, 0, a, a), void e.restore();
                                f.current.width;
                                var t = f.current.width,
                                    n = f.current.height,
                                    r = t / n,
                                    o = r > 1 ? Math.min(a, t) : Math.min(a, n) * r,
                                    i = r > 1 ? Math.min(a, t) / r : Math.min(a, n);
                                v(e);
                                var l = (a - o) / 2,
                                    c = (a - i) / 2;
                                e.drawImage(f.current, l, c, o, i), e.restore()
                            }
                        },
                        B = function() {
                            f.current = null;
                            var e = new Image;
                            if (e.onload = function() {
                                    f.current = e, A && C && k ? O() : Z(), void 0 !== i && i()
                                }, e.onerror = function(e) {
                                    console.error("Error loading image:", e), void 0 !== l && l(e)
                                }, E) {
                                var t = new Image;
                                t.onload = function() {
                                    p.current = t, f.current && (A && C && k || Z())
                                }, t.src = E
                            } else p.current = null;
                            e.src = n
                        };
                    return (0, o.useEffect)((function() {
                        if (y(), f.current = null, p.current = null, b.current) {
                            var e = b.current.getContext("2d");
                            e && e.clearRect(0, 0, b.current.width, b.current.height)
                        }
                        return m.current = 0, B(),
                            function() {
                                y()
                            }
                    }), [t, n, a]), (0, o.useEffect)((function() {
                        if (f.current) return y(), A && C && k ? O() : Z(),
                            function() {
                                y()
                            }
                    }), [A, C, k, a]), (0, o.useEffect)((function() {
                        B()
                    }), [n, E, a]), (0, o.useEffect)((function() {
                        return function() {
                            y()
                        }
                    }), []), o.createElement("canvas", {
                        width: a,
                        height: a,
                        ref: b
                    })
                };
            v.propTypes = {
                isAnimated: a().bool,
                animationData: a().object,
                imageUrl: a().string,
                size: a().number,
                onLoad: a().func,
                onError: a().func,
                isThumbnail: a().bool,
                isGrayScale: a().bool,
                metaData: a().object
            };
            const y = v
        },
        88233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(4965),
                a = n(65394),
                o = n(85020),
                i = n(67294),
                l = n(46382);
            const c = function(e) {
                var t = e.imageUrl,
                    n = e.closeCallback,
                    r = e.nextCallback,
                    c = e.prevCallback;
                return t ? i.createElement(i.Fragment, null, i.createElement(u, {
                    onClick: n
                }), i.createElement(s, null, c && i.createElement(f, {
                    onClick: c,
                    hasCallback: c
                }, i.createElement(l.$1, {
                    icon: o.A3,
                    width: 65
                })), i.createElement(d, {
                    src: t
                }), r && i.createElement(m, {
                    onClick: r,
                    hasCallback: r
                }, i.createElement(l.$1, {
                    icon: a._t,
                    width: 65
                })))) : null
            };
            var s = (0, r.Z)("div", {
                    target: "eac6qxj4"
                })({
                    name: "ttwpi3",
                    styles: "position:fixed;display:flex;flex-direction:row;justify-content:center;align-items:center;z-index:1337;top:0;left:0;width:100%;height:100%;pointer-events:none;background:transparent"
                }),
                u = (0, r.Z)("div", {
                    target: "eac6qxj3"
                })({
                    name: "jyw4fx",
                    styles: "position:fixed;background:rgba(0, 0, 0, 0.5);z-index:1336;top:0;left:0;width:100%;height:100%"
                }),
                d = (0, r.Z)("img", {
                    target: "eac6qxj2"
                })({
                    name: "xgli30",
                    styles: "max-width:90%;max-height:90%;transition:all 0.3s ease;pointer-events:all"
                }),
                m = (0, r.Z)("div", {
                    target: "eac6qxj1"
                })("margin:0 15px;cursor:pointer;pointer-events:all;opacity:", (function(e) {
                    return e.hasCallback ? 1 : .5
                }), ";color:", (function(e) {
                    return e.hasCallback ? "var(--gray-300)" : "var(--gray-600)"
                }), ";>*{transition:all 0.3s ease;:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(5px, 0)" : "none"
                }), ";}}"),
                f = (0, r.Z)(m, {
                    target: "eac6qxj0"
                })(">*:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(-5px, 0)" : "none"
                }), ";}")
        },
        46320: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(67294),
                a = n(89250),
                o = n(12599);
            const i = function(e) {
                var t = e.to,
                    n = e.replace,
                    i = void 0 === n || n,
                    l = e.state,
                    c = e.relative,
                    s = (0, a.s0)(),
                    u = (0, a.UO)();
                if (!(0, a.GV)()) throw new Error("RedirectLayout must be used in a Router context");
                return r.useEffect((function() {
                    s((0, o.Gn)(t, u), {
                        replace: i,
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
            var r = n(54546),
                a = n(95337),
                o = n(67294),
                i = n(83505),
                l = n(60994),
                c = n(87261),
                s = n(86646);
            const u = function(e) {
                var t = e.searchString,
                    n = e.initialString,
                    u = void 0 === n ? "" : n,
                    d = e.placeholder,
                    m = (0, o.useState)(u),
                    f = (0, r.Z)(m, 2),
                    p = f[0],
                    g = f[1];
                return o.createElement(l.Z, null, o.createElement(s.Z, {
                    icon: a.wn,
                    color: "var(--bs-gray)",
                    width: 24,
                    className: (0, i.iv)({
                        name: "lo66c0",
                        styles: "position:absolute;left:7px;top:7px;pointer-events:none;z-index:5"
                    })
                }), o.createElement(c.Z, {
                    className: (0, i.iv)({
                        name: "7lu28v",
                        styles: "padding-left:40px!important;height:37px!important;border-radius:7px!important"
                    }),
                    type: "text",
                    onChange: function(e) {
                        return n = e.target.value, t && t(n), void g(n);
                        var n
                    },
                    placeholder: null != d ? d : "Search...",
                    value: p
                }))
            }
        },
        52699: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(42138),
                a = n(4942),
                o = n(54546),
                i = n(3471),
                l = n(46382),
                c = n(67294),
                s = n(42938),
                u = n(41145),
                d = n(62228),
                m = n(45697),
                f = n.n(m);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                var t = e.option,
                    n = e.onFilterChangeCallBack,
                    r = e.dropdownFilterValues,
                    a = (0, c.useState)(r[t.type].includes(t.value)),
                    i = (0, o.Z)(a, 2),
                    s = i[0],
                    u = i[1];
                (0, c.useEffect)((function() {
                    u(r[t.type].includes(t.value))
                }), [r, t]);
                var d = "filter-".concat(t.value);
                return c.createElement("li", {
                    key: t.value,
                    className: "tw-w-full"
                }, c.createElement("div", {
                    className: "tw-text-lg tw-flex tw-row tw-items-center tw-w-fit tw-overflow-visible"
                }, c.createElement("input", {
                    id: d,
                    checked: s,
                    type: "checkbox",
                    className: " tw-w-4 tw-h-4 tw-text-highlight tw-bg-button-bg tw-border-highlight tw-rounded tw-border-1 tw-border-solid tw-accent-highlight tw-ml-0 tw-mr-1 focus:tw-ring-highlight tw-ring-offset-highlight focus:tw-ring-offset-highlight focus:tw-ring-1 ",
                    onChange: function(e) {
                        u(e.target.checked), n(g(g({}, t), {}, {
                            isChecked: e.target.checked
                        }))
                    }
                }), c.createElement("label", {
                    htmlFor: d,
                    className: "tw-cursor-pointer "
                }, t.icon && c.createElement(l.$1, {
                    icon: t.icon,
                    color: t.color,
                    className: "tw-mx-2 tw-w-6"
                }), c.createElement("span", {
                    className: "tw-truncate tw-w-fit tw-overflow-hidden tw-text-lg tw-text-white ".concat(t.icon ? "tw-ml-0" : "tw-ml-2")
                }, t.label))))
            };
            b.propTypes = {
                option: f().shape({
                    value: f().any,
                    label: f().string,
                    icon: f().object,
                    color: f().string,
                    type: f().string
                }).isRequired,
                onFilterChangeCallBack: f().func.isRequired,
                dropdownFilterValues: f().object.isRequired
            };
            const h = b;

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const y = function(e) {
                var t = e.type,
                    n = e.onFilterChangeCallBack,
                    r = e.dropdownFilterValues,
                    a = (0, c.useState)(!0),
                    i = (0, o.Z)(a, 2),
                    s = i[0],
                    m = i[1],
                    f = t.label,
                    p = t.dataKey,
                    g = t.options;
                return c.createElement("li", {
                    className: "tw-ml-1 tw-overflow-visible"
                }, c.createElement("button", {
                    className: "tw-bg-transparent tw-border-none tw-mb-2 tw-cursor-pointer tw-p-0",
                    onClick: function() {
                        return m(!s)
                    },
                    type: "button"
                }, c.createElement("span", {
                    className: "tw-transition-all tw-duration-500 tw-text-lg tw-font-normal tw-mr-2 ".concat(s ? "tw-text-highlight" : "tw-text-option-inactive")
                }, f), c.createElement(l.$1, {
                    icon: s ? d.mT : u.pt,
                    className: "tw-mr-2 tw-ml-1 tw-text-highlight"
                })), c.createElement("ul", {
                    className: "\n          tw-transition-all tw-duration-500 tw-flex tw-flex-col\n          tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-overflow-hidden\n          ".concat(s ? "tw-max-h-full" : "tw-max-h-0", "\n        ")
                }, g.filter((function(e) {
                    return e
                })).map((function(e) {
                    return c.createElement(h, {
                        key: e.value,
                        option: v(v({}, e), {}, {
                            type: p
                        }),
                        onFilterChangeCallBack: n,
                        dropdownFilterValues: r
                    })
                }))))
            };

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const A = function(e) {
                var t = e.className,
                    n = e.possibleFilters,
                    a = e.onFilterChangeCallBack,
                    u = e.userGroups,
                    d = void 0 === u ? [] : u,
                    m = e.dropdownFilterValues,
                    f = (0, c.useRef)(null),
                    p = (0, c.useState)(!1),
                    g = (0, o.Z)(p, 2),
                    b = g[0],
                    h = g[1],
                    w = (n.eventSources, n.accessTypes),
                    v = n.categories,
                    E = n.days,
                    A = n.platforms,
                    C = n.languages,
                    k = function(e) {
                        if (!f.current.contains(e.target)) return h(!1)
                    };
                (0, c.useEffect)((function() {
                    return b ? window.addEventListener("click", k) : window.removeEventListener("click", k),
                        function() {
                            window.removeEventListener("click", k)
                        }
                }), [b]);
                var N, I, O = (N = s.Ut.map((function(e) {
                    return e === s.m3.SOURCE ? e : e === s.m3.ACCESSTYPE ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == w ? void 0 : w.includes(e.value)
                        }))
                    }) : e === s.m3.CATEGORY ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == v ? void 0 : v.includes(e.value)
                        }))
                    }) : e === s.m3.DAY ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == E ? void 0 : E.includes(e.value)
                        }))
                    }) : e === s.m3.PLATFORM ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == A ? void 0 : A.includes(e.value)
                        }))
                    }) : e === s.m3.LANGUAGE ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == C ? void 0 : C.includes(e.value)
                        }))
                    }) : e
                })), null === (I = (0, s.Ld)({
                    filters: n,
                    userGroups: d
                })) ? N : [].concat((0, r.Z)(N), [I]));
                return c.createElement("div", {
                    ref: f,
                    className: "relative tw-transition-all ".concat(t)
                }, c.createElement("button", {
                    className: "\n          tw-bg-button-bg tw-border-2 tw-border-solid tw-rounded tw-w-full tw-h-10 tw-cursor-pointer tw-text-highlight\n          ".concat(b ? "tw-border-button-border" : "tw-border-button-bg", "\n        "),
                    type: "button",
                    onClick: function() {
                        h(!b)
                    }
                }, c.createElement(l.$1, {
                    icon: i.G_,
                    className: "tw-mr-1"
                }), " Filters"), c.createElement("div", {
                    className: "\n          tw-w-56 tw-border-button-border tw-bg-option-bg tw-border-2 tw-border-solid tw-mt-2 tw-rounded-sm tw-p-2 tw-pb-3 tw-z-10 tw-max-h-[650px] tw-overflow-y-auto\n          ".concat(b ? "tw-absolute" : "tw-hidden", "\n        ")
                }, c.createElement("ul", {
                    className: "tw-flex tw-flex-col tw-gap-2 tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-select-none"
                }, O.map((function(e) {
                    return e.options.length > 0 && c.createElement(y, {
                        key: e.label,
                        type: e,
                        onFilterChangeCallBack: a,
                        dropdownFilterValues: m
                    })
                })))))
            }
        },
        78666: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r, a = n(30168),
                o = n(54546),
                i = n(4965),
                l = n(76513),
                c = n(46357),
                s = n(83505),
                u = n(70917),
                d = n(93261),
                m = n(64358),
                f = n(67294),
                p = n(89250),
                g = n(79655),
                b = n(46382);
            var h = "https://assets.vrchat.com/www/groups/default_banner.png",
                w = "https://assets.vrchat.com/www/groups/default_icon.png";
            const v = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    a = e.isSelectable,
                    i = e.selectCallback,
                    s = void 0 === i ? function() {} : i,
                    u = (0, p.s0)(),
                    g = (0, d.MQ)(),
                    v = (0, o.Z)(g, 2),
                    A = v[0],
                    N = v[1],
                    z = (N.isError, N.isSuccess, function(e) {
                        e.preventDefault(), a ? s(t) : u("/home/group/".concat(null != M ? M : R))
                    }),
                    M = t.groupId,
                    R = t.id,
                    U = t.name,
                    G = t.shortCode,
                    W = t.discriminator,
                    L = t.description,
                    $ = t.memberCount,
                    V = t.iconId,
                    F = t.bannerId,
                    _ = a ? B : S,
                    X = a ? D : q,
                    J = a ? T : P;
                return f.createElement(_, {
                    to: "/home/group/".concat(null != M ? M : R),
                    "aria-label": "Group Card"
                }, f.createElement(C, null, f.createElement(I, null, f.createElement(j, {
                    src: F ? (0, m.S6)({
                        fileId: F,
                        width: "256"
                    }) : h,
                    alt: U,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = h
                    }
                }), f.createElement(O, null, f.createElement(Z, {
                    src: V ? (0, m.S6)({
                        fileId: V,
                        width: "256"
                    }) : w,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = w
                    }
                }))), f.createElement(b.X2, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, f.createElement(X, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: z
                }, f.createElement(J, null, U)))), f.createElement(k, null, f.createElement(x, null, f.createElement(y, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, f.createElement("small", null, L)), f.createElement(E, null, f.createElement("small", null, f.createElement(b.$1, {
                    icon: c.FV
                }), " ", $), f.createElement("small", null, G, ".", W)))), a && f.createElement(b.zx, {
                    onClick: z
                }, "Select"), n && f.createElement(b.zx, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), A({
                            groupId: M,
                            userId: r
                        })
                    }
                }, f.createElement(b.$1, {
                    icon: l.bL
                }), " Unblock"))
            };
            var y = (0, i.Z)("div", {
                    target: "e1nq4ok414"
                })({
                    name: "1x8v68w",
                    styles: "height:58px;>small{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"
                }),
                E = (0, i.Z)("div", {
                    target: "e1nq4ok413"
                })({
                    name: "13r4cb0",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0 20px"
                }),
                x = (0, i.Z)("div", {
                    target: "e1nq4ok412"
                })({
                    name: "g2frxj",
                    styles: "display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:100%"
                }),
                A = (0, u.F4)(r || (r = (0, a.Z)(["\n  0% {\n    border-color: transparent;\n  }\n  25% {\n    border-color: #20c5e8;\n  }\n  100% {\n    border-color: transparent;\n  }\n"]))),
                C = (0, i.Z)(b.JX, {
                    target: "e1nq4ok411"
                })({
                    name: "diayph",
                    styles: "padding:0.1rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0"
                }),
                k = (0, i.Z)(C, {
                    target: "e1nq4ok410"
                })({
                    name: "1svfl3y",
                    styles: "padding:5px;background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;height:auto;overflow:hidden;color:#737372;transition:max-height 0.1s ease-in"
                }),
                N = (0, s.iv)("animation-name:", A, ";animation-fill-mode:forwards;animation-iteration-count:1;animation-duration:2s;animation-timing-function:ease-out;", ""),
                I = (0, i.Z)("div", {
                    target: "e1nq4ok49"
                })({
                    name: "16vzknb",
                    styles: "padding-top:35%;height:0;overflow:visible;border-radius:8px;position:relative;display:flex;flex-shrink:0"
                }),
                O = (0, i.Z)("div", {
                    target: "e1nq4ok48"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                j = (0, i.Z)("img", {
                    target: "e1nq4ok47"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                Z = (0, i.Z)("img", {
                    target: "e1nq4ok46"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                B = (0, i.Z)("div", {
                    target: "e1nq4ok45"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                S = (0, i.Z)(g.rU, {
                    target: "e1nq4ok44"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                T = (0, i.Z)("h4", {
                    target: "e1nq4ok43"
                })({
                    name: "15baaq2",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;padding-bottom:2px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                }),
                P = (0, i.Z)(T, {
                    target: "e1nq4ok42"
                })({
                    name: "l8p4qc",
                    styles: "&:hover{color:var(--primary);}"
                }),
                D = (0, i.Z)("div", {
                    target: "e1nq4ok41"
                })({
                    name: "11z3e6t",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0"
                }),
                q = (0, i.Z)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        },
        32250: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Ir
            });
            var r = n(54546),
                a = n(67294),
                o = n(32981),
                i = n(89250),
                l = n(53637),
                c = n(83505),
                s = n(24975),
                u = n(27484),
                d = n.n(u),
                m = n(68599),
                f = n(85322),
                p = n(3629),
                g = n(42619),
                b = n(87709),
                h = n(65394),
                w = n(92332),
                v = n(85020),
                y = n(75605),
                E = n(24732),
                x = n(18478),
                A = n(7469),
                C = n(46382),
                k = n(50048),
                N = n(3447),
                I = n(45697),
                O = n.n(I),
                j = n(55206),
                Z = n(19531),
                B = n(78542),
                S = function(e) {
                    var t, n = e.gallery,
                        o = void 0 === n ? [] : n,
                        i = e.isOpen,
                        l = void 0 !== i && i,
                        c = e.onCloseCallback,
                        s = e.openIndex,
                        u = e.deleteItemCallback,
                        m = void 0 === u ? null : u,
                        I = e.onArchiveCallback,
                        O = void 0 === I ? null : I,
                        S = e.type,
                        T = (0, a.useRef)(null),
                        P = (0, a.useState)(s),
                        D = (0, r.Z)(P, 2),
                        q = D[0],
                        z = D[1],
                        M = (0, a.useState)({
                            x: 0,
                            y: 0
                        }),
                        R = (0, r.Z)(M, 2),
                        U = R[0],
                        G = R[1],
                        W = (0, a.useState)(!1),
                        L = (0, r.Z)(W, 2),
                        $ = L[0],
                        V = L[1],
                        F = (0, a.useState)({
                            x: 0,
                            y: 0
                        }),
                        _ = (0, r.Z)(F, 2),
                        X = _[0],
                        J = _[1],
                        Y = (0, a.useState)(1),
                        K = (0, r.Z)(Y, 2),
                        H = K[0],
                        Q = K[1],
                        ee = (0, a.useState)(!1),
                        te = (0, r.Z)(ee, 2),
                        ne = te[0],
                        re = te[1],
                        ae = (0, a.useState)(!0),
                        oe = (0, r.Z)(ae, 2),
                        ie = oe[0],
                        le = oe[1],
                        ce = (0, a.useMemo)((function() {
                            return q === o.length - 1
                        }), [q, o]),
                        se = (0, a.useMemo)((function() {
                            return 0 === q
                        }), [q]),
                        ue = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = j._[S]) || void 0 === e ? void 0 : e.label
                        }), [S]),
                        de = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = j._[S]) || void 0 === e ? void 0 : e.icon
                        }), [S]),
                        me = (0, a.useMemo)((function() {
                            return o[q]
                        }), [o, q]);
                    (0, a.useEffect)((function() {
                        0 !== o.length || c()
                    }), [o]), (0, a.useEffect)((function() {
                        z(s)
                    }), [s]);
                    var fe = (0, a.useCallback)((function() {
                            Q(1), G({
                                x: 0,
                                y: 0
                            }), re(!1), le(!0), J({
                                x: 0,
                                y: 0
                            }), c()
                        }), [c]),
                        pe = (0, a.useMemo)((function() {
                            var e, t, n;
                            return null !== (e = null === (t = o[q]) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== e ? e : null === (n = o[q]) || void 0 === n ? void 0 : n.imageUrl
                        }), [o, q]),
                        ge = (0, a.useCallback)((function(e) {
                            e.preventDefault();
                            var t = -.01 * e.deltaY;
                            Q((function(e) {
                                return Math.min(Math.max(e + t, .5), 3)
                            }))
                        }), []),
                        be = j._[S],
                        he = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[q]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("archivable")
                        }), [o, q]);
                    (0, a.useEffect)((function() {
                        z(s), le(!0)
                    }), [s, l]), (0, a.useEffect)((function() {
                        var e = T.current;
                        if (e) return e.addEventListener("wheel", ge, {
                                passive: !1
                            }),
                            function() {
                                e.removeEventListener("wheel", ge)
                            }
                    }), [ge, l, T]), (0, a.useEffect)((function() {
                        var e = function(e) {
                            "Escape" === e.key && fe()
                        };
                        if (l) return window.addEventListener("keydown", e),
                            function() {
                                window.removeEventListener("keydown", e)
                            }
                    }), [l, fe]);
                    var we = (0, a.useCallback)((function(e) {
                            e.preventDefault(), V(!0), J({
                                x: e.clientX - U.x,
                                y: e.clientY - U.y
                            })
                        }), [U]),
                        ve = (0, a.useCallback)((function(e) {
                            e.preventDefault(), $ && G({
                                x: e.clientX - X.x,
                                y: e.clientY - X.y
                            })
                        }), [$, X]),
                        ye = (0, a.useCallback)((function() {
                            V(!1)
                        }), []),
                        Ee = function() {
                            Q(1), G({
                                x: 0,
                                y: 0
                            })
                        };
                    return o.length && l ? a.createElement("div", {
                        className: "tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-[1040] tw-bg-dark-grey-transparent-90"
                    }, a.createElement("div", {
                        className: "tw-fixed lg:tw-flex lg:tw-flex-row tw-justify-between tw-h-full tw-w-screen"
                    }, a.createElement("div", {
                        className: "\n          tw-fixed tw-select-none \n          tw-top-0 tw-left-0 tw-right-0 tw-bottom-0\n          lg:tw-relative\n          ".concat(ne ? "tw-w-full" : "lg:tw-w-3/4")
                    }, a.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-right-6 tw-h-9 tw-w-32 tw-z-50"
                    }, a.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-32"
                    }, a.createElement(k.ZP, {
                        onClick: function() {
                            Q((function(e) {
                                return Math.min(e + .1, 3)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, a.createElement(C.$1, {
                        icon: A.q9
                    })), a.createElement(k.ZP, {
                        onClick: function() {
                            Q((function(e) {
                                return Math.max(e - .1, .5)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, a.createElement(C.$1, {
                        icon: x.Wq
                    })), a.createElement(k.ZP, {
                        onClick: function() {
                            return re(!ne)
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9",
                        title: "Toggle fullscreen"
                    }, a.createElement(C.$1, {
                        icon: ne ? E.Qb : y.K9
                    })))), a.createElement("div", {
                        className: "tw-flex tw-w-full tw-h-full tw-justify-between tw-items-center"
                    }, a.createElement(k.ZP, {
                        onClick: function() {
                            se || (z((function(e) {
                                return e - 1
                            })), Ee(), le(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(se ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, a.createElement(C.$1, {
                        icon: v.A3,
                        className: "tw-w-12 tw-h-[60px] tw-ml-4"
                    })), a.createElement("div", {
                        ref: T,
                        className: "tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden gallery-image-container",
                        onMouseDown: we,
                        onMouseMove: ve,
                        onMouseUp: ye,
                        onMouseLeave: ye
                    }, ie && a.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center tw-absolute tw-inset-0"
                    }, a.createElement(C.$1, {
                        icon: w.LM,
                        spin: !0,
                        color: "#404C58",
                        width: 92
                    })), a.createElement("div", {
                        style: {
                            transform: "translate(".concat(U.x, "px, ").concat(U.y, "px) scale(").concat(H, ")"),
                            transition: $ ? "none" : "transform 0.1s ease-out",
                            cursor: $ ? "grabbing" : "grab",
                            opacity: ie ? 0 : 1
                        }
                    }, a.createElement(B.Z, {
                        imageUrl: pe,
                        metaData: null == me ? void 0 : me.metadata,
                        onLoad: function() {
                            return le(!1)
                        },
                        onError: function() {
                            return le(!1)
                        },
                        size: 400
                    }))), a.createElement(k.ZP, {
                        onClick: function() {
                            ce || (z((function(e) {
                                return e + 1
                            })), Ee(), le(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(ce ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, a.createElement(C.$1, {
                        icon: h._t,
                        className: "tw-w-12 tw-h-[60px] tw-mr-4"
                    })))), a.createElement("div", {
                        className: "\n            tw-bg-darker-grey tw-transition-all\n            tw-absolute tw-bottom-0 tw-h-auto\n            lg:tw-relative\n            ".concat(ne ? "tw-w-0 tw-p-0 tw-opacity-0" : "tw-w-screen tw-px-5 tw-py-9 lg:tw-w-1/4 lg:tw-min-w-[300px]", "\n          ")
                    }, a.createElement("div", {
                        className: "tw-flex tw-items-baseline tw-justify-between"
                    }, a.createElement("h3", {
                        className: "heading tw-text-white tw-text-left tw-text-2xl"
                    }, a.createElement(C.$1, {
                        icon: de,
                        className: "tw-mr-2"
                    }), ue), a.createElement(k.ZP, {
                        className: "tw-w-9 tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        onClick: fe
                    }, a.createElement(C.$1, {
                        icon: b.faXmark
                    }))), a.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-items-baseline sm:tw-justify-between tw-mt-2 sm:tw-mt-10 tw-justify-end tw-items-end"
                    }, a.createElement("div", {
                        className: "tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal tw-hidden sm:tw-block"
                    }, "Manage"), a.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full"
                    }, Z.a && be.hasConvertToVrcEmojis && a.createElement(k.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full  tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey tw-mr-2 "
                    }, a.createElement(C.$1, {
                        icon: N.default
                    }), "Create Emoji From Sticker"), be.hasDelete && a.createElement(k.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Delete ".concat(ue),
                        onClick: function() {
                            null == m || m(me)
                        }
                    }, a.createElement(C.$1, {
                        icon: g.$,
                        className: "tw-mr-2"
                    }), "Delete"), be.hasArchive && he && a.createElement(k.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-h-12 sm:tw-h-9 tw-w-full tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Archive Sticker",
                        onClick: function() {
                            return null == O ? void 0 : O(me)
                        }
                    }, a.createElement(C.$1, {
                        icon: p.hV,
                        className: "tw-mr-2"
                    }), "Archive"))), (null == me ? void 0 : me.description) && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Description"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, me.description)), (null == me || null === (t = me.collections) || void 0 === t ? void 0 : t.length) > 0 && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Collections"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, me.collections.map((function(e) {
                        return e
                    })).join(", "))), (null == me ? void 0 : me.created_at) && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Date Created"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, a.createElement(C.$1, {
                        icon: f.fT,
                        className: "tw-mr-2"
                    }), d()(null == me ? void 0 : me.created_at).format("ll, h:mm A"))))))) : null
                };
            const T = S;
            S.propTypes = {
                gallery: O().array.isRequired,
                isOpen: O().bool.isRequired,
                onCloseCallback: O().func.isRequired,
                openIndex: O().number.isRequired,
                deleteItemCallback: O().func,
                onArchiveCallback: O().func,
                type: O().string
            };
            const P = function() {
                var e = (0, o.I0)(),
                    t = (0, o.v9)(m.bI),
                    n = t.isOpen,
                    r = t.gallery,
                    i = t.openIndex,
                    l = t.deleteItemCallback,
                    c = t.onArchiveCallback,
                    s = t.type;
                if ((0, a.useEffect)((function() {
                        return function() {
                            return e((0, m.Bj)())
                        }
                    }), [e]), null == r || !r.length) return null;
                var u = Math.min(Math.max(0, i), r.length - 1);
                return a.createElement(T, {
                    gallery: r,
                    isOpen: n,
                    onCloseCallback: function() {
                        e((0, m.AV)()), e((0, m.Bj)())
                    },
                    openIndex: u,
                    deleteItemCallback: l,
                    onArchiveCallback: c,
                    type: s
                })
            };
            var D = n(28964),
                q = n.n(D),
                z = n(15832),
                M = n(22202),
                R = n(34698);
            const U = function() {
                var e = (0, M.IB)().data,
                    t = (0, a.useState)(!1),
                    n = (0, r.Z)(t, 2),
                    o = n[0],
                    i = n[1],
                    l = (0, z._)("tutorialInventorySeen", !1),
                    c = (0, r.Z)(l, 2),
                    s = c[0],
                    u = c[1];
                (0, a.useEffect)((function() {
                    i(!s)
                }), []);
                return o && e ? a.createElement("div", {
                    className: "tw-fixed tw-inset-0 tw-z-[2000] tw-pointer-events-all"
                }, a.createElement("div", {
                    className: " tw-absolute tw-rounded-lg tw-z-[2001] tw-shadow-[0_0_0_100vmax_rgba(0,0,0,0.8)] tw-transition-all tw-duration-500 tw-top-[0px] tw-left-[0px] tw-w-[65px] tw-h-[60px] 2xl:tw-top-[60px] 2xl:tw-left-[0px] 2xl:tw-w-[280px] 2xl:tw-h-[1000px] "
                }), a.createElement("div", {
                    className: " tw-rounded-lg tw-bg-link-highlight tw-z-[3002] tw-absolute tw-p-5 tw-transition-all tw-duration-500 tw-w-full sm:tw-w-[450px] tw-top-[60px] tw-left-0 sm:tw-top-[30px] sm:tw-left-[60px] 2xl:tw-top-auto 2xl:tw-bottom-[20px] 2xl:tw-left-[285px]  before:tw-opacity-100 before:tw-content-[''] before:tw-absolute before:tw-border-t-0 before:tw-border-solid before:tw-border-transparent before:tw-border-[30px] before:tw-border-l-link-highlight before:tw-left-[12px] before:tw-top-[-0px] before:tw-rotate-45 sm:before:tw-left-[-30px] sm:before:tw-top-[15px] sm:before:tw-rotate-90 2xl:before:tw-opacity-0 "
                }, a.createElement("div", {
                    className: "tw-flex tw-justify-between tw-flex-col"
                }, a.createElement("p", {
                    className: "tw-font-bold tw-text-[#1a1a1a]"
                }, "The gallery has been renamed and relocated."), a.createElement("p", {
                    className: "tw-text-[#1a1a1a]"
                }, "The gallery has now been relocated under the user profile and renamed as ", a.createElement("span", {
                    className: "tw-font-bold"
                }, "Inventory"), "."), a.createElement("img", {
                    src: q(),
                    alt: "Gallery has now been relocated to Inventory"
                }), a.createElement("div", {
                    className: "tw-flex tw-justify-end tw-mt-4"
                }, a.createElement(R.Z, {
                    className: "tw-bg-button-bg-grey tw-text-white tw-px-8 tw-w-full sm:tw-w-auto",
                    onClick: function() {
                        i(!1), u(!0)
                    }
                }, "Got it"))))) : null
            };
            var G = n(42138),
                W = n(4942),
                L = n(57982),
                $ = n(40098),
                V = n(64258),
                F = n(93379),
                _ = n.n(F),
                X = n(7795),
                J = n.n(X),
                Y = n(90569),
                K = n.n(Y),
                H = n(3565),
                Q = n.n(H),
                ee = n(19216),
                te = n.n(ee),
                ne = n(44589),
                re = n.n(ne),
                ae = n(46461),
                oe = {};
            oe.styleTagTransform = re(), oe.setAttributes = Q(), oe.insert = K().bind(null, "head"), oe.domAPI = J(), oe.insertStyleElement = te();
            _()(ae.Z, oe);
            ae.Z && ae.Z.locals && ae.Z.locals;
            var ie = n(98185),
                le = n(37024),
                ce = n(16993),
                se = n(43907),
                ue = n(86216),
                de = n(17383),
                me = n(88081),
                fe = n(64358),
                pe = n(42938);

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var he = function(e) {
                var t = e.filters,
                    n = void 0 === t ? null : t,
                    r = e.userGroups,
                    o = e.filterRemoveCallback,
                    i = void 0 === o ? function() {} : o;
                if (null === n || 0 === n.length) return null;
                var l = function(e) {
                    var t = pe.Ut.flatMap((function(t) {
                            var n = t.dataKey,
                                r = e[n] || [];
                            return t.options.filter((function(e) {
                                return r.includes(e.value)
                            })).map((function(e) {
                                return be(be({}, e), {}, {
                                    dataKey: n
                                })
                            }))
                        })),
                        a = (0, pe.Ld)({
                            filters: n,
                            userGroups: r
                        });
                    if (null === a) return t;
                    var o = a.options.map((function(e) {
                        var t = e.value,
                            n = r.find((function(e) {
                                return e.groupId === t
                            }));
                        return be(be({}, e), {}, {
                            thumbnail: (0, fe.S6)({
                                fileUrl: null == n ? void 0 : n.iconUrl,
                                width: "256"
                            }),
                            dataKey: "groups"
                        })
                    }));
                    return [].concat((0, G.Z)(t), (0, G.Z)(o))
                }(n);
                return a.createElement("div", {
                    className: "tw-flex tw-flex-row tw-flex-wrap"
                }, l.map((function(e) {
                    return a.createElement("div", {
                        key: e.value,
                        className: "tw-bg-[#0A0A0D] tw-mr-3 tw-my-3 tw-flex tw-flex-row tw-p-2 tw-pl-3 tw-rounded-sm tw-w-fit",
                        role: "option",
                        "aria-selected": "true"
                    }, a.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, (null == e ? void 0 : e.icon) && a.createElement(C.$1, {
                        icon: e.icon,
                        color: e.color
                    }), (null == e ? void 0 : e.thumbnail) && a.createElement("div", {
                        className: "tw-w-6 tw-h-6 tw-bg-no-repeat tw-bg-cover tw-rounded-full tw-bg-center",
                        title: e.label,
                        style: {
                            backgroundImage: "url(".concat(e.thumbnail, ")")
                        }
                    }), a.createElement("span", {
                        className: "tw-ml-2 tw-mr-2"
                    }, e.label)), a.createElement("div", null, a.createElement("button", {
                        type: "button",
                        className: " tw-border-0 tw-rounded-sm tw-bg-transparent tw-text-white tw-leading-none ",
                        "aria-label": "remove",
                        onClick: function() {
                            i(e)
                        }
                    }, a.createElement(C.$1, {
                        icon: b.faXmark
                    }))))
                })), l.length > 1 && a.createElement("div", {
                    className: "tw-flex tw-items-center tw-my-3"
                }, a.createElement("button", {
                    type: "button",
                    className: "tw-ml-1 tw-h-full tw-w-24 tw-border-0 tw-rounded tw-bg-button-bg-grey tw-text-white tw-leading-none",
                    "aria-label": "Clear all filters",
                    onClick: function() {
                        i(null)
                    }
                }, a.createElement("span", null, "Clear all"))))
            };
            he.propTypes = {
                filters: O().object,
                group: O().array
            };
            const we = he;
            var ve = n(52699),
                ye = n(41568),
                Ee = n(24752),
                xe = n(15861),
                Ae = n(64687),
                Ce = n.n(Ae),
                ke = n(43862),
                Ne = n(93261),
                Ie = n(78666);

            function Oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ze = function(e) {
                var t = e.groupSelectCallback,
                    n = void 0 === t ? function() {} : t,
                    o = (0, a.useState)(""),
                    i = (0, r.Z)(o, 2),
                    l = i[0],
                    c = i[1],
                    s = (0, de.Nr)(l),
                    u = (0, de.Tu)().user,
                    d = void 0 === u ? null : u,
                    m = (0, Ne.nz)(),
                    f = (0, r.Z)(m, 1)[0],
                    p = (0, Ne.dj)({
                        userId: null == d ? void 0 : d.id
                    }, {
                        skip: null === d
                    }),
                    g = p.data,
                    b = void 0 === g ? null : g,
                    h = p.isFetching,
                    w = p.isSuccess,
                    v = (0, Ne.v5)({
                        userId: null == d ? void 0 : d.id
                    }),
                    y = v.data,
                    E = void 0 === y ? null : y,
                    x = v.isFetching,
                    A = v.isSuccess,
                    k = (0, a.useMemo)((function() {
                        return null === E || null === b ? [] : A && w ? b.filter((function(e) {
                            var t = e.groupId,
                                n = E[t];
                            return n && (n.includes("*") || n.includes("group-calendar-manage"))
                        })) : []
                    }), [E, b]),
                    N = (0, a.useMemo)((function() {
                        return null === k ? [] : "" === l ? k : null == k ? void 0 : k.filter((function(e) {
                            return e.name.toLowerCase().includes(l) || e.shortCode.toLowerCase().includes(l) || e.discriminator.toLowerCase().includes(l) || e.groupId.toLowerCase().includes(l)
                        }))
                    }), [k, s]);
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col tw-w-full"
                }, a.createElement("h2", {
                    className: "tw-text-xl tw-text-center tw-w-full"
                }, "For which group would you like to create this event?"), a.createElement("p", {
                    className: "tw-text-sm tw-text-center tw-w-full"
                }, "You will see only the groups for which you have permission to create events."), a.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center"
                }, a.createElement(C.II, {
                    "aria-label": "Enter a group short code, name, or url",
                    type: "text",
                    id: "search-transaction-list",
                    placeholder: "Enter a group short code, name, or url",
                    className: "",
                    leftIcon: a.createElement(C.$1, {
                        icon: L.faMagnifyingGlass,
                        className: "tw-mr-1"
                    }),
                    onChange: function(e) {
                        c(e.target.value)
                    }
                }))), (h || x) && a.createElement("div", {
                    className: "tw-pt-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(ke.Z, {
                    size: "5x"
                })), !h && !x && 0 === (null == N ? void 0 : N.length) && a.createElement("div", {
                    className: "tw-text-center tw-text-lg tw-mt-5"
                }, "No groups found for which you can create events."), a.createElement("div", {
                    className: "tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-5"
                }, null == N ? void 0 : N.map((function(e) {
                    return a.createElement(Ie.Z, {
                        key: e.id,
                        group: e,
                        isSelectable: !0,
                        selectCallback: function() {
                            var e = (0, xe.Z)(Ce().mark((function e(t) {
                                var r;
                                return Ce().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(je({}, t));
                                        case 2:
                                            r = e.sent, n(r.data);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    })
                }))))
            };
            Ze.propTypes = {};
            const Be = Ze;

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(n), !0).forEach((function(t) {
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Pe = {
                    eventSources: [],
                    accessTypes: [],
                    categories: [],
                    days: [],
                    platforms: [],
                    languages: [],
                    groups: []
                },
                De = (0, a.forwardRef)((function(e, t) {
                    var n = (0, o.I0)(),
                        i = (0, a.useState)(""),
                        l = (0, r.Z)(i, 2),
                        c = l[0],
                        s = l[1],
                        u = (0, de.Nr)(c),
                        m = (0, a.useRef)(null),
                        f = (0, a.useRef)(null),
                        p = (0, a.useState)(null),
                        g = (0, r.Z)(p, 2),
                        b = g[0],
                        h = g[1],
                        w = (0, a.useState)(null),
                        v = (0, r.Z)(w, 2),
                        y = v[0],
                        E = v[1],
                        x = (0, a.useState)(!0),
                        A = (0, r.Z)(x, 2),
                        k = A[0],
                        N = A[1],
                        I = (0, a.useState)(d()()),
                        O = (0, r.Z)(I, 2),
                        j = O[0],
                        Z = O[1],
                        B = (0, a.useState)(!1),
                        S = (0, r.Z)(B, 2),
                        T = S[0],
                        P = S[1],
                        D = (0, a.useState)(null),
                        q = (0, r.Z)(D, 2),
                        z = q[0],
                        M = q[1],
                        R = (0, a.useState)(Pe),
                        U = (0, r.Z)(R, 2),
                        F = U[0],
                        _ = U[1],
                        X = (0, de.Tu)().user,
                        J = void 0 === X ? null : X,
                        Y = (0, de.pc)() && !1;
                    (0, a.useEffect)((function() {
                        var e = function() {
                                return N(!0)
                            },
                            t = function(e) {
                                f.current && !f.current.contains(e.target) && N(!0)
                            };
                        return window.removeEventListener("scroll", e), window.removeEventListener("resize", e), window.removeEventListener("click", t), window.addEventListener("scroll", e, {
                                capture: !0
                            }), window.addEventListener("resize", e), window.addEventListener("click", t, {
                                capture: !0
                            }),
                            function() {
                                window.removeEventListener("scroll", e), window.removeEventListener("resize", e), window.removeEventListener("click", t)
                            }
                    }), []);
                    (0, a.useEffect)((function() {
                        if (null !== b) {
                            var e, t, n, r, a, o = null == f ? void 0 : f.current;
                            return o ? (e = o, t = window.innerWidth, n = b.clientX > t / 2, r = n && b.clientX - 340 < 0, a = !n && b.clientX + 340 > t, r || a ? (e.style.left = "auto", e.style.right = "auto") : n ? (e.style.left = "auto", e.style.right = "".concat(t - b.clientX + 20, "px")) : (e.style.left = "".concat((null == b ? void 0 : b.clientX) + 20, "px"), e.style.right = "auto"), void
                                function(e) {
                                    var t = window.innerHeight;
                                    t - b.clientY < 350 ? f.current.style.top = "".concat(t - 400, "px") : e.style.top = "".concat((null == b ? void 0 : b.clientY) - 100, "px")
                                }(o)) : void 0
                        }
                    }), [b]), (0, a.useEffect)((function() {}), [F]);
                    var K = (0, me.bT)({
                            date: j,
                            userId: null == J ? void 0 : J.id,
                            eventSources: F.eventSources
                        }, {
                            skip: null === J
                        }),
                        H = K.data,
                        Q = void 0 === H ? {
                            events: [],
                            groups: []
                        } : H,
                        ee = K.isFetching,
                        te = K.isSuccess,
                        ne = K.isError,
                        re = K.error;
                    (0, a.useEffect)((function() {
                        var e, t;
                        ne && n((0, V.d)({
                            title: "Failed to get calendar events",
                            message: null !== (e = null == re || null === (t = re.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown Error",
                            color: "danger",
                            timeout: 5e3
                        }))
                    }), [ne]);
                    var ae = function(e) {
                            var t = d()(e.endsAt).diff(d()(e.startsAt), "day") > 0;
                            return Te(Te({}, e), {}, {
                                id: e.id,
                                start: e.startsAt,
                                end: t ? d()(e.endsAt).add(1, "day").format() : e.endsAt,
                                allDay: t
                            })
                        },
                        oe = function() {
                            return Te({
                                searchTerm: u
                            }, F)
                        },
                        fe = (0, a.useMemo)((function() {
                            var e = Q.events;
                            return e && 0 !== e.length ? {
                                eventSources: Ee.o9.map((function(e) {
                                    return e.value
                                })),
                                accessTypes: e.reduce((function(e, t) {
                                    return e.includes(t.accessType) || e.push(t.accessType), e
                                }), []),
                                categories: e.reduce((function(e, t) {
                                    return e.includes(t.category) || e.push(t.category), e
                                }), []),
                                days: e.reduce((function(e, t) {
                                    var n = d()(t.startsAt),
                                        r = d()(t.endsAt).diff(n, "day"),
                                        a = Array.from({
                                            length: r + 1
                                        }, (function(e, t) {
                                            return n.add(t, "day").day()
                                        }));
                                    return Array.from(new Set([].concat((0, G.Z)(e), a)))
                                }), []),
                                platforms: (0, G.Z)(new Set(e.flatMap((function(e) {
                                    return e.platforms
                                })))),
                                languages: (0, G.Z)(new Set(e.flatMap((function(e) {
                                    return e.languages
                                })))),
                                groups: e.reduce((function(e, t) {
                                    return e.includes(t.ownerId) ? e : [].concat((0, G.Z)(e), [t.ownerId])
                                }), [])
                            } : {
                                eventSources: [],
                                accessTypes: [],
                                categories: [],
                                days: [],
                                platforms: [],
                                languages: [],
                                groups: []
                            }
                        }), [Q]),
                        pe = (0, a.useMemo)((function() {
                            var e = Q.events;
                            if (!e || 0 === e.length) return [];
                            var t = oe();
                            if (null === t) return e.map(ae);
                            return e.filter((function(e) {
                                return !(!e || !e.id) && (!(e.deletedAt && !Y) && (!("" !== t.searchTerm && !e.title.toLowerCase().includes(t.searchTerm.toLowerCase()) && !e.description.toLowerCase().includes(t.searchTerm.toLowerCase())) && (!(t.accessTypes.length > 0 && !t.accessTypes.includes(e.accessType)) && (!(t.categories.length > 0 && !t.categories.includes(e.category)) && (!(t.days.length > 0 && (n = {
                                    title: e.title,
                                    daysOfWeek: t.days,
                                    start: e.startsAt,
                                    end: e.endsAt
                                }, r = n.daysOfWeek, a = n.start, o = n.end, n.title, i = d()(a), l = d()(o), !r.some((function(e) {
                                    if (i.day() === e) return !0;
                                    if (l.day() === e) return !0;
                                    var t = l.diff(i, "day") + 1;
                                    return Array.from({
                                        length: t
                                    }, (function(e, t) {
                                        return i.add(t, "day")
                                    })).some((function(t) {
                                        return t.day() === e
                                    }))
                                })))) && (!(t.platforms.length > 0 && !t.platforms.some((function(t) {
                                    return e.platforms.includes(t)
                                }))) && (!(t.languages.length > 0 && !t.languages.some((function(t) {
                                    return e.languages.includes(t)
                                }))) && !(t.groups.length > 0 && !t.groups.includes(e.ownerId)))))))));
                                var n, r, a, o, i, l
                            })).map(ae)
                        }), [u, Q, F]);
                    (0, a.useImperativeHandle)(t, (function() {
                        return {
                            updateCalendarSize: function() {
                                if (null !== m) {
                                    var e = m.current.getApi();
                                    N(!0), e.updateSize()
                                }
                            }
                        }
                    }), []);
                    var ge = function(e) {
                            var t;
                            N(!0), m.current.getApi().changeView("timeGridDay", null !== (t = e.date) && void 0 !== t ? t : e)
                        },
                        be = ee;
                    return a.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, a.createElement("div", {
                        className: "tw-mb-4 tw-flex tw-justify-between tw-flex-row"
                    }, a.createElement("h2", null, "Calendar"), a.createElement(C.zx, {
                        className: "tw-w-52 tw-h-9",
                        type: "button",
                        onClick: function() {
                            M(null), P(!0)
                        }
                    }, a.createElement(C.$1, {
                        icon: $.r8,
                        className: "tw-mr-1"
                    }), " Create Event")), be && a.createElement("div", {
                        className: " tw-w-full tw-h-full  tw-left-0 tw-top-0 tw-absolute  tw-flex tw-justify-center tw-items-center tw-bg-dark-grey-transparent tw-z-10 "
                    }, a.createElement(ie.Z, {
                        loading: !0
                    })), a.createElement("div", {
                        className: "tw-mb-10 tw-bg-[#181b1f] tw-rounded tw-p-5 fc tw-relative"
                    }, te && a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "tw-flex tw-justify-between tw-flex-row"
                    }, a.createElement(ve.Z, {
                        possibleFilters: fe,
                        onFilterChangeCallBack: function(e) {
                            return function(e) {
                                if (e.isChecked) {
                                    var t = (0, G.Z)(new Set([].concat((0, G.Z)(F[e.type]), [e.value])));
                                    return _(Te(Te({}, F), {}, (0, W.Z)({}, e.type, t)))
                                }
                                if (!e.isChecked) {
                                    var n = F[e.type].filter((function(t) {
                                        return t !== e.value
                                    }));
                                    return _(Te(Te({}, F), {}, (0, W.Z)({}, e.type, n)))
                                }
                            }(e)
                        },
                        userGroups: Q.groups,
                        dropdownFilterValues: F
                    }), a.createElement(C.II, {
                        "aria-label": "Search by event name or url",
                        type: "text",
                        id: "search-transaction-list",
                        placeholder: "Search by event name or url",
                        className: "tw-md-1 tw-w-1/2",
                        leftIcon: a.createElement(C.$1, {
                            icon: L.faMagnifyingGlass,
                            className: "tw-mr-1"
                        }),
                        onChange: function(e) {
                            s(e.target.value)
                        }
                    })), a.createElement("div", {
                        className: "tw-min-h-[70px] tw-transition-all"
                    }, a.createElement(we, {
                        userGroups: Q.groups,
                        filters: oe(),
                        filterRemoveCallback: function(e) {
                            if (null === e) return _(Pe);
                            var t = F[e.dataKey].filter((function(t) {
                                return t !== e.value
                            }));
                            _(Te(Te({}, F), {}, (0, W.Z)({}, e.dataKey, t)))
                        }
                    }))), a.createElement(se.Z, {
                        ref: m,
                        plugins: [ce.Z, ue.Z],
                        initialView: "dayGridMonth",
                        events: pe,
                        dayMaxEvents: 3,
                        displayEventTime: !1,
                        nowIndicator: !0,
                        dayHeaderDidMount: function(e) {
                            e.el.style.border = "none"
                        },
                        contentHeight: 800,
                        viewDidMount: function(e) {
                            var t, n = e.el;
                            (t = n).querySelector(".fc-scrollgrid").style.border = "none", t.querySelector(".fc-theme-standard th").style.border = "none", t.querySelector(".fc-scrollgrid-section-liquid > td").style.border = "1px solid var(--fc-border-color)", t.querySelector(".fc-scrollgrid-section-liquid > td").style.borderRadius = "8px"
                        },
                        fixedWeekCount: !1,
                        headerToolbar: {
                            left: "prev,today,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        },
                        navLinks: !0,
                        navLinkDayClick: ge,
                        eventClick: function(e) {
                            var t = e.event,
                                n = (e.el, e.jsEvent),
                                r = (e.view, t.toPlainObject());
                            N(!1), h(n), E(Te(Te({}, r), r.extendedProps))
                        },
                        moreLinkClick: ge,
                        datesSet: function(e) {
                            var t = e.view,
                                n = d()(t.currentStart).startOf("month").add(1, "day");
                            Z(n), N(!0)
                        },
                        views: {
                            timeGrid: {
                                dayHeaderFormat: {
                                    day: "2-digit",
                                    weekday: "short"
                                }
                            }
                        }
                    }), a.createElement("div", {
                        ref: f,
                        className: "\n            tw-w-[340px] tw-duration-100 fc-popover tw-transition-all tw-bg-transparent\n            ".concat(k ? "tw-hidden" : "tw-fixed", "\n          ")
                    }, y && a.createElement(le.ZP, {
                        isDialog: !0,
                        event: y,
                        onCloseCallback: function() {
                            return N(!0)
                        }
                    }))), a.createElement(C.u_, {
                        title: "Create Event (".concat(null === z ? "1" : "2", "/2)"),
                        isVisible: T,
                        onClose: function() {
                            return P(!1)
                        },
                        className: "tw-w-full",
                        slim: !0,
                        width: "100%"
                    }, a.createElement("div", {
                        className: "tw-block tw-w-full"
                    }, null === z ? a.createElement(Be, {
                        groupSelectCallback: M
                    }) : a.createElement(ye.default, {
                        group: z,
                        closeModalCallback: function() {
                            return P(!1)
                        }
                    }))))
                }));
            const qe = De;
            var ze = n(4965),
                Me = n(47810),
                Re = n(34233),
                Ue = n(79655),
                Ge = n(35773),
                We = n(95305),
                Le = n(6655),
                $e = n(12227),
                Ve = (n(46326), n(72528));
            const Fe = function(e) {
                var t, n, o, l = e.navToggleCallback,
                    s = void 0 === l ? function() {} : l,
                    u = (0, de.Tu)(),
                    d = u.user,
                    m = u.isFetching,
                    f = u.isLoading,
                    p = (0, i.s0)(),
                    g = (0, M.q7)().data,
                    b = void 0 === g ? [] : g,
                    h = a.useState(!1),
                    w = (0, r.Z)(h, 2),
                    v = (w[0], w[1], (0, Le.pp)({
                        userId: d.id
                    }, {
                        skip: !d,
                        refetchOnMountOrArgChange: !0
                    })),
                    y = v.data,
                    E = (void 0 === y ? {} : y).balance,
                    x = v.isFetching;
                if (!d || f) return null;
                var A = function() {
                        s(!1)
                    },
                    k = "online" === d.state,
                    N = (null === (t = d.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? d.profilePicOverride : d.currentAvatarThumbnailImageUrl,
                    I = (0, fe.S6)({
                        fileUrl: N,
                        width: "1024"
                    }),
                    O = d.userIcon ? (0, fe.S6)({
                        fileUrl: d.userIcon,
                        width: "1024"
                    }) : null;
                return a.createElement(_e, {
                    className: "mx-0 mb-2"
                }, a.createElement(it, {
                    className: "d-flex mx-0 align-items-center"
                }, a.createElement(lt, {
                    title: (0, $e.Tq)(d.status, !0),
                    statusColor: "var(--status-".concat((0, $e.Tq)(d.status), ")")
                }), a.createElement(Ue.rU, {
                    to: "/home/user/".concat(d.id),
                    onClick: A
                }, d.displayName)), a.createElement(ct, null, m ? a.createElement(C.UU, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : a.createElement(Ue.rU, {
                    to: "/home/user/".concat(d.id),
                    "aria-label": "User Status",
                    onClick: A
                }, d.statusDescription)), a.createElement(Xe, null, a.createElement(Ye, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(d.id),
                    url: I,
                    level: (0, $e.FR)({
                        tags: d.tags
                    }),
                    onClick: A
                }, a.createElement(Ke, {
                    className: "mx-0"
                }, a.createElement(Qe, {
                    className: "text-center"
                }, "Go To Profile")), O && a.createElement(et, {
                    role: "button",
                    "aria-label": "Go To Gallery",
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), (null != b && b.includes("permission-user-icons") || null != b && b.includes("permission-user-gallery")) && (p("/home/inventory/user-icons"), A())
                    }
                }, a.createElement(tt, {
                    "aria-label": "User Icon",
                    url: O,
                    level: (0, $e.FR)({
                        tags: d.tags
                    })
                }, a.createElement(nt, null, a.createElement(rt, {
                    icon: Re._j,
                    size: "lg"
                }))), a.createElement(at, null, "Change Icon")), a.createElement(He, null)), !(null === (n = d.badges) || void 0 === n || !n.length) && a.createElement(mt, null, d.badges.filter((function(e) {
                    return e.showcased && !e.hidden
                })).slice(0, 3).sort((function(e, t) {
                    return new Date(t.assignedAt) - new Date(e.assignedAt)
                })).map((function(e) {
                    return a.createElement(Je, {
                        role: "note",
                        "aria-label": e.badgeName,
                        key: e.badgeId,
                        image: e.badgeImageUrl,
                        pettable: "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId
                    })
                }))), a.createElement(ot, {
                    className: "px-2 pt-1 pb-2 mx-0"
                }, a.createElement(dt, {
                    className: "relative justify-content-end"
                }, x ? a.createElement(C.UU, {
                    width: "4rem",
                    height: "1.5rem",
                    style: {
                        borderRadius: 14
                    }
                }) : a.createElement(ut, {
                    to: "/home/marketplace/wallet",
                    onClick: A
                }, a.createElement(C.b5, null), null !== (o = " ".concat(null == E ? void 0 : E.toLocaleString())) && void 0 !== o ? o : " ???")), !1, a.createElement(pt, null, a.createElement(Ue.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: A
                }, a.createElement(C.$1, {
                    icon: Me.Kb
                }), "  Account Settings")))), a.createElement(Xe, {
                    className: (0, c.iv)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, k && (null == d ? void 0 : d.location) && !["traveling", "offline"].includes(null == d ? void 0 : d.location) && a.createElement(st, {
                    className: "mx-0"
                }, a.createElement(Ve.Z, {
                    location: d.location,
                    userId: d.id,
                    currentUser: d,
                    size: "normal"
                }))))
            };
            var _e = (0, ze.Z)("div", {
                    target: "esgak1l21"
                })(""),
                Xe = (0, ze.Z)("div", {
                    target: "esgak1l20"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                Je = (0, ze.Z)("div", {
                    target: "esgak1l19"
                })("width:36px;height:36px;margin:0!important;padding:6px;border-radius:50%;z-index:3;background-color:rgba(17, 17, 17, 0.8);background-image:url(", (function(e) {
                    return e.image
                }), ");background-size:24px;background-repeat:no-repeat;background-position:center;", (function(e) {
                    return e.pettable && "\n    cursor: grab;\n\n    &:active {\n      cursor: grabbing;\n    }\n  "
                }), ";"),
                Ye = (0, ze.Z)(Ue.rU, {
                    target: "esgak1l18"
                })("display:flex;height:0;padding-top:56.25%;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");position:relative;cursor:pointer;background-color:#05191d;&:hover{&>div:last-child{opacity:1;}}"),
                Ke = (0, ze.Z)(Ge.Z, {
                    target: "esgak1l17"
                })({
                    name: "w4b5cp",
                    styles: "display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;opacity:0;transition:opacity 0.2s ease;color:white;text-decoration:none!important;&:hover{opacity:1;}"
                }),
                He = (0, ze.Z)("div", {
                    target: "esgak1l16"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                Qe = (0, ze.Z)("div", {
                    target: "esgak1l15"
                })({
                    name: "iu2xal",
                    styles: "font-weight:600;color:white!important"
                }),
                et = (0, ze.Z)("div", {
                    target: "esgak1l14"
                })({
                    name: "13p5eg",
                    styles: "display:flex;position:absolute;bottom:-40px;left:10px;width:80px;align-items:center;z-index:3;color:white;&:hover{div:last-child{opacity:1;}svg{opacity:1;}}"
                }),
                tt = (0, ze.Z)("div", {
                    target: "esgak1l13"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                nt = (0, ze.Z)("div", {
                    target: "esgak1l12"
                })({
                    name: "6828uq",
                    styles: "opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);border-radius:100%;display:flex;width:100%;height:100%;align-items:center;justify-content:center"
                }),
                rt = (0, ze.Z)(C.$1, {
                    target: "esgak1l11"
                })(""),
                at = (0, ze.Z)("div", {
                    target: "esgak1l10"
                })({
                    name: "1lu2whh",
                    styles: "opacity:0;margin-left:3px;font-weight:600;flex-shrink:0;transition:opacity 0.2s ease"
                }),
                ot = (0, ze.Z)(We.Z, {
                    target: "esgak1l9"
                })({
                    name: "1dt3z6y",
                    styles: "background-color:#07242b"
                }),
                it = (0, ze.Z)("div", {
                    target: "esgak1l8"
                })({
                    name: "ab3jnw",
                    styles: "font-weight:600;justify-content:center;a{color:var(--bs-primary);font-size:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:240px;}"
                }),
                lt = (0, ze.Z)("div", {
                    target: "esgak1l7"
                })("width:15px;height:15px;border-radius:100%;background-color:", (function(e) {
                    return e.statusColor
                }), ";margin-right:10px;"),
                ct = (0, ze.Z)("div", {
                    target: "esgak1l6"
                })({
                    name: "1xmid75",
                    styles: "width:100%;text-align:center;display:flex;align-items:center;justify-content:center;padding:2px 20px;font-weight:bold;overflow:hidden;text-overflow:ellipsis"
                }),
                st = (0, ze.Z)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                ut = (0, ze.Z)(Ue.rU, {
                    target: "esgak1l4"
                })("color:white;background-color:rgba(17, 17, 17, 0.8);padding:4px 6px;line-height:1em;border-radius:14px;>", C.b5, "{color:#6ae3f9;}&:hover{color:#737372;text-decoration:none;>", C.b5, "{color:#064b5c;}}"),
                dt = (0, ze.Z)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                mt = (0, ze.Z)(dt, {
                    target: "esgak1l2"
                })({
                    name: "1nld4z4",
                    styles: "width:100%;height:45px;margin-top:-45px;display:flex;justify-content:flex-end;position:relative;padding:4px;gap:4px"
                }),
                ft = (0, ze.Z)(dt, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                pt = (0, ze.Z)(ft, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                gt = n(14097),
                bt = n(83183),
                ht = n(57026),
                wt = n(89148),
                vt = n(15369),
                yt = n(13461),
                Et = n(66007),
                xt = n(2723),
                At = n(40767),
                Ct = n(81511),
                kt = n(16688),
                Nt = n(46450),
                It = n(774),
                Ot = n(12529),
                jt = n(64240),
                Zt = n(43701),
                Bt = n(70396),
                St = n(7975),
                Tt = n(70440),
                Pt = n(96165),
                Dt = n(54492),
                qt = n(91435),
                zt = n(49866),
                Mt = n(57245),
                Rt = n(93118),
                Ut = n(99631),
                Gt = n(51970),
                Wt = n(28959),
                Lt = n(67922),
                $t = n(87589),
                Vt = n(62455),
                Ft = n(25248),
                _t = n(50249),
                Xt = n(7503),
                Jt = n(98648),
                Yt = n(91158),
                Kt = n(48566),
                Ht = n(8256),
                Qt = n(28055),
                en = n(58877),
                tn = n(25062),
                nn = n(93046),
                rn = n.n(nn),
                an = n(17219),
                on = n(91492),
                ln = n(31358);
            const cn = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    r = e.closeDialog,
                    i = (e.isGroups, (0, o.v9)((function(e) {
                        return e.notifications.notifications
                    })).slice(0, n) || []);
                return a.createElement("div", {
                    className: "mt-2"
                }, i.map((function(e) {
                    return a.createElement(ln.Z, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: r
                    })
                })))
            };
            n(64230);
            var sn = n(76938),
                un = n(73670),
                dn = n(38824),
                mn = n(87261),
                fn = n(3126),
                pn = n(25411),
                gn = n(72562);

            function bn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function hn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bn(Object(n), !0).forEach((function(t) {
                        (0, W.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var wn = function(e) {
                var t = e.onChangeCallback,
                    n = (0, o.I0)(),
                    i = (0, a.useState)(!1),
                    l = (0, r.Z)(i, 2),
                    c = l[0],
                    s = l[1],
                    u = (0, a.useState)(!1),
                    d = (0, r.Z)(u, 2),
                    m = d[0],
                    f = d[1],
                    p = (0, a.useState)("none"),
                    g = (0, r.Z)(p, 2),
                    b = g[0],
                    h = g[1],
                    w = (0, a.useState)([]),
                    v = (0, r.Z)(w, 2),
                    y = v[0],
                    E = v[1],
                    x = (0, a.useState)("relevance"),
                    A = (0, r.Z)(x, 2),
                    C = A[0],
                    k = A[1],
                    N = (0, o.v9)((function(e) {
                        return e.search.autoRedirect
                    }));
                (0, a.useEffect)((function() {
                    var e = {
                        dropdownToggle: c,
                        fuzzyToggle: m,
                        orderFilter: b,
                        searchableFilters: y,
                        sortByFilter: C
                    };
                    (0, gn.Kz)("Web_Mod_SearchFilterChange", hn(hn({}, e), {}, {
                        autoRedirect: N
                    })), t(e)
                }), [N, m, b, y, C]);
                var I = function(e) {
                    return e.target.checked ? E([].concat((0, G.Z)(y), [e.target.name])) : E(y.filter((function(t) {
                        return t !== e.target.name
                    })))
                };
                return a.createElement(Kt.Z, {
                    isOpen: c,
                    toggle: function() {
                        return s(!c)
                    }
                }, a.createElement(Ht.Z, {
                    caret: !0
                }, "Filters"), a.createElement(Qt.Z, {
                    className: "text-white p-0 bg-dark pb-2"
                }, a.createElement(dn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), a.createElement("div", {
                    className: "mx-3 text-white"
                }, a.createElement(mn.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return k(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "sortResultsBy",
                    id: "sortResultsBy"
                }, a.createElement("option", {
                    value: "relevance"
                }, "Relevance"), a.createElement("option", {
                    value: "exact"
                }, "Exact"), a.createElement("option", {
                    value: "last_login"
                }, "Last Login"), a.createElement("option", {
                    value: "trust"
                }, "Trust Rank"))), a.createElement(dn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), a.createElement("div", {
                    className: "mx-3 text-white"
                }, a.createElement(mn.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return h(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "orderBy",
                    id: "orderBy"
                }, a.createElement("option", {
                    value: "none"
                }, "None"), a.createElement("option", {
                    value: "ascending"
                }, "Ascending"), a.createElement("option", {
                    value: "descending"
                }, "Descending"))), a.createElement(dn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: y.includes("displayName"),
                    onChange: I,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: y.includes("email"),
                    onChange: I,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: y.includes("username"),
                    onChange: I,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: y.includes("pastEmails"),
                    onChange: I,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), a.createElement(dn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: N,
                    onChange: function() {
                        return n((0, pn.Tr)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(mn.Z, {
                    checked: m,
                    onChange: function() {
                        return f(!m)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), a.createElement(fn.Z, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            wn.propTypes = {
                onChangeCallback: O().func.isRequired
            };
            const vn = function() {
                var e = (0, i.s0)(),
                    t = (0, i.TH)(),
                    n = "users",
                    l = "";
                t.pathname.startsWith("/home/search/") && (n = t.pathname.substring(13).split("/")[0], l = decodeURIComponent(t.pathname.substring("/home/search/".concat(n, "/").length)));
                var s = (0, o.v9)(sn.y),
                    u = (0, a.useState)("/home/search/".concat(n, "/")),
                    d = (0, r.Z)(u, 2),
                    m = d[0],
                    f = d[1],
                    p = (0, Ue.lr)(),
                    g = (0, r.Z)(p, 2),
                    b = g[0],
                    h = (g[1], (0, a.useState)(l)),
                    w = (0, r.Z)(h, 2),
                    v = w[0],
                    y = w[1],
                    E = (0, de.Nr)(m),
                    x = function() {
                        return encodeURIComponent(v.replace(/#/g, "tag:"))
                    },
                    A = function() {
                        return v.startsWith("usr_") ? "/home/user" : v.startsWith("avtr_") ? "/home/avatar" : v.startsWith("wrld_") ? "/home/world" : v.startsWith("grp_") ? "/home/group" : "/home/search/".concat(n)
                    };
                (0, a.useEffect)((function() {
                    A().startsWith("/home/search/") ? f("".concat(A(), "/").concat(x(), "?").concat(b)) : f("".concat(A(), "/").concat(x()))
                }), [v]), (0, a.useEffect)((function() {
                    "" !== v && e(m)
                }), [E]);
                return a.createElement("div", {
                    className: (0, c.iv)({
                        name: "1a9iom8",
                        styles: "& .search-input{padding:0;}& .input-group-custom{position:relative;flex-wrap:nowrap;align-items:stretch;}& .drop-down-menu-custom{color:black;margin:0;padding:5px;}"
                    })
                }, a.createElement("div", {
                    className: "container"
                }, a.createElement("form", {
                    onSubmit: function(t) {
                        return function(t) {
                            return t.preventDefault(), "" === v || e(m), null
                        }(t)
                    },
                    className: "navbar-form navbar-right",
                    role: "search"
                }, a.createElement("div", {
                    className: "input-group-custom"
                }, a.createElement("div", {
                    className: (0, c.iv)({
                        name: "ho1qnd",
                        styles: "display:flex;flex-direction:row"
                    })
                }, a.createElement("div", {
                    className: (0, c.iv)({
                        name: "clzu0",
                        styles: "display:flex;flex-direction:row;align-items:center;flex-grow:1"
                    })
                }, a.createElement(un.Z, {
                    initialString: v,
                    searchString: y
                }), s && !1))))))
            };
            var yn = n(24075),
                En = n(89082),
                xn = n(58589),
                An = n(9669),
                Cn = n.n(An);
            var kn = ["public", "internal"];
            const Nn = function(e) {
                var t = e.direction,
                    n = a.useState([]),
                    l = (0, r.Z)(n, 2),
                    s = l[0],
                    u = l[1],
                    d = a.useState(""),
                    m = (0, r.Z)(d, 2),
                    f = m[0],
                    p = m[1],
                    g = (0, i.TH)(),
                    b = (0, o.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    h = function() {
                        var e = (0, xe.Z)(Ce().mark((function e() {
                            var t, n, r;
                            return Ce().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, Cn().get(t);
                                    case 3:
                                        n = e.sent, r = n.data.filter((function(e) {
                                            return "main" !== e
                                        })), u(["main"].concat((0, G.Z)(r)));
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
                a.useEffect((function() {
                    h().catch(console.error)
                }), []);
                var w = function(e, t) {
                        var n = g.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map((function(e) {
                            return kn.map((function(n, r) {
                                if ("public" !== n && !b) return null;
                                var o = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    i = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.iv)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                o && i.push("active");
                                var l = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? kt.J9 : En.c : yn.mh
                                };
                                return a.createElement("a", {
                                    href: w(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(r),
                                    className: i.join(" ")
                                }, a.createElement(C.$1, l), n, "-", e)
                            }))
                        }))
                    };
                return s.length <= 1 ? null : a.createElement("div", null, a.createElement(xn.Z, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, c.iv)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, a.createElement(Ht.Z, {
                    caret: !0,
                    color: "primary"
                }, a.createElement(C.$1, {
                    icon: yn.mh
                }), " ", "public", "-", "main"), a.createElement(Qt.Z, {
                    className: (0, c.iv)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, v(s.slice(0, 1)), a.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), a.createElement(Ge.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "text",
                    value: f,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? {} : t).value;
                        p(n)
                    },
                    className: "py-1 px-1 mx-1 my-1 flex-grow-1"
                })), v(s.slice(1), (function(e) {
                    return 0 === f.length || new RegExp(f, "gi").test(e)
                })))))
            };
            var In = n(63221),
                On = n(72065),
                jn = n(22082),
                Zn = n(56395);
            const Bn = function(e) {
                var t = e.to,
                    n = e.title,
                    r = e.onClick,
                    o = (0, jn.oE)({
                        states: [Zn.g1.ANNOUNCED, Zn.g1.SUBMISSIONS_OPEN, Zn.g1.SUBMISSIONS_CLOSED, Zn.g1.WINNERS_SELECTED]
                    }).data,
                    i = null == o ? void 0 : o.every((function(e) {
                        return !Object.keys(e).includes("state")
                    }));
                if (!o || 0 === (null == o ? void 0 : o.length) || i) return null;
                var l = o[0];
                return a.createElement(Sn, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: r
                }, a.createElement(Tn, {
                    icon: On.Ww
                }), a.createElement("div", null, Zn.p6[l.state]), a.createElement(C.$1, {
                    icon: bt.yO
                }))
            };
            var Sn = (0, ze.Z)(Ue.rU, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                Tn = (0, ze.Z)(C.$1, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var Pn = [Ft.R7, Vt.od, $t.tM, Lt.RK, Wt.I3, Gt.nG, Ut.jO, Rt.uS, Mt.dy, zt.XG, qt.BD, Dt.ok, Pt.Sv, Tt.qA, St.I1, Bt.Nk, Zt.uj, jt.io, Ot.l9],
                Dn = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                qn = a.memo((function(e) {
                    var t, n, l = e.horizontal,
                        s = e.navToggleCallback,
                        u = e.friendsToggleCallback,
                        d = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        m = (0, i.s0)(),
                        p = a.useState(!1),
                        g = (0, r.Z)(p, 2),
                        b = g[0],
                        h = g[1],
                        w = a.useState(Pn[Math.floor(d(Pn.length))]),
                        v = (0, r.Z)(w, 2),
                        y = v[0],
                        E = v[1],
                        x = a.useState(Dn[d(Dn.length)]),
                        A = (0, r.Z)(x, 2),
                        k = A[0],
                        N = A[1],
                        I = (0, an.y)().data,
                        O = ((0, de.pc)(), (0, M.XC)().data),
                        j = (0, o.v9)((function(e) {
                            return e.notifications.notifications
                        })) || [],
                        Z = (0, M.q7)().data,
                        B = void 0 === Z ? [] : Z,
                        S = (0, de.CZ)().sortedLocations.length,
                        T = (0, o.v9)((function(e) {
                            return e.notifications.groupNotifications
                        })) || [],
                        P = (0, on.dq)({
                            n: 1,
                            pageValue: 1,
                            isNavBar: !0
                        }),
                        D = P.data,
                        q = P.isSuccess;
                    (0, a.useEffect)((function() {
                        b && (E(Pn[d(Pn.length)]), N(Dn[d(Dn.length)]))
                    }), [b]);
                    var z = function(e) {
                            m("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        U = function() {
                            h(!1)
                        },
                        G = function() {
                            s && s(!1)
                        },
                        W = B || [],
                        L = (W.includes("permission-user-icons"), W.includes("permission-user-gallery"), W.includes("permission-groups-beta"), null !== (t = j.length) && void 0 !== t ? t : 0);
                    n = T.filter((function(e) {
                        return e.state === In.oq.INVITED
                    })).length;
                    if (null == l || !1 === l) {
                        0;
                        return a.createElement("div", {
                            className: (0, c.iv)("margin:0;padding:0;& .navbar{padding:3px 0;background-color:#07242b!important;background-image:none;border-bottom:solid ", "#053c48", " 3px;display:flex;justify-content:space-between;height:60px;}& .navbar .btn-group{white-space:normal;}& .navbar-section{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;justify-content:space-between;}& .left-nav{min-width:285px!important;justify-content:center;>*{margin:0 10px;:first-child{margin-left:0;}:last-child{margin-right:0;}}}& .center-nav{justify-content:flex-start;flex-wrap:nowrap;flex:1;>*{margin:0 10px 0 2px;}}& .right-nav{justify-content:space-between;flex-direction:row;flex:0;padding:0 20px;gap:20px;align-items:center;.scalable-nav{display:none;}>a{color:#6ae3f9;font-weight:bold;display:flex;align-items:center;min-height:45px;padding:0 10px;}}& .custom-dropdown{padding:0!important;transform:translate(calc(-100% + 400px), 20px)!important;background:#05191d!important;border:#053c48 solid 2px!important;border-radius:10px!important;box-shadow:0px 9px 26px 5px rgba(0, 0, 0, 0.8);}& .dropdown-arrow{z-index:3;&:after,:before{pointer-events:none;content:'';position:absolute;background:transparent;left:50%;transform:translateX(-50%);}&:after{border:22px solid transparent;bottom:-30px;border-bottom-color:#05191d;}&:before{border:15px solid transparent;bottom:-20px;border-bottom-color:#053c48;}}& .navbar-btn{background:#07242b!important;min-width:45px;min-height:45px;border-radius:100px!important;border:solid #053c48 3px!important;display:flex;justify-content:center;align-items:center;font-weight:bold;white-space:nowrap;>span{display:flex;justify-content:center;align-items:center;}&:hover{background:#05191d!important;}&:focus{box-shadow:0 0 0 0.2rem #05191d!important;}&.logout{padding:0 10px!important;color:#ee5454;}}@media (max-width: 1500px){& .right-nav{padding:0 20px;}}@media (max-width: 1200px){& .left-nav{padding:0 15px 0 10px;min-width:210px!important;justify-content:space-between;}& .custom-dropdown{transform:translate(calc(-100% + 350px), 20px)!important;}& .large{display:none;}& .search{width:100%;}}@media (max-width: 576px){& .left-nav{min-width:auto!important;padding:0 10px;}& .mobile-only{display:block;}& .medium{display:none;}}& .dropdown-menu{padding:10px 15px 5px 15px;background-color:#506070;border-radius:0;}& .search{flex-grow:3;}& .launch{text-transform:uppercase;font-weight:bold;}", ""),
                            id: "secondary-nav"
                        }, a.createElement("div", {
                            className: "navbar-boogie container-fluid"
                        }, " "), a.createElement("div", {
                            className: "navbar fixed-top navbar-expand-sm navbar-light shadow ".concat("")
                        }, a.createElement("div", {
                            className: "navbar-section left-nav"
                        }, a.createElement("button", {
                            type: "button",
                            className: "p-1 2xl:tw-hidden btn navbar-btn",
                            onClick: function() {
                                s && (u && u(!1), s())
                            }
                        }, a.createElement(C.$1, {
                            icon: It.xi,
                            size: "lg"
                        })), a.createElement(Ue.rU, {
                            to: "/home",
                            title: "home",
                            className: "logo medium"
                        }, a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1leqlh9",
                                styles: "height:50px"
                            })
                        }, a.createElement("img", {
                            className: (0, c.iv)({
                                name: "1hs0n36",
                                styles: "height:90%;margin-top:0.25rem"
                            }),
                            alt: "VRChat Logo",
                            src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                        }))), a.createElement("div", {
                            className: "medium ".concat((0, c.iv)({
                                name: "1vcob1d",
                                styles: "display:flex;justify-content:center;align-items:center"
                            }))
                        }, a.createElement(Kt.Z, {
                            isOpen: b,
                            toggle: function() {
                                return h(!b)
                            }
                        }, a.createElement(Ht.Z, {
                            className: "p-1 navbar-btn text-white"
                        }, L > 0 && a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, L), a.createElement(C.$1, {
                            icon: Ct.FU,
                            size: "lg",
                            className: (0, c.iv)({
                                name: "bqqvn3",
                                styles: "::before{font-size:25px;}"
                            })
                        }), b && a.createElement("div", {
                            className: "dropdown-arrow"
                        })), a.createElement("div", {
                            className: (0, c.iv)({
                                name: "2ey0we",
                                styles: "transform:translateX(0)"
                            })
                        }, a.createElement(Qt.Z, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, c.iv)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, a.createElement(Ue.rU, {
                            onClick: function(e) {
                                U(), m("/home/messages"), e.preventDefault()
                            },
                            className: (0, c.iv)({
                                name: "oldbq4",
                                styles: "user-select:none"
                            }),
                            to: "/home/messages"
                        }, a.createElement("strong", null, "View more..."))), a.createElement("div", {
                            className: (0, c.iv)({
                                name: "2nen93",
                                styles: "max-height:500px;overflow-y:auto;padding:0 15px;background:#041215"
                            })
                        }, L > 0 ? a.createElement(cn, {
                            n: 20,
                            closeDialog: U,
                            isGroups: !1
                        }) : a.createElement("div", {
                            className: (0, c.iv)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, a.createElement(C.$1, {
                            icon: y,
                            size: "3x",
                            className: (0, c.iv)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), a.createElement("h6", null, k))), a.createElement("div", {
                            className: (0, c.iv)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), a.createElement(Ue.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/calendar",
                            title: "Calendar"
                        }, a.createElement(C.$1, {
                            icon: f.fT,
                            size: "lg"
                        })), a.createElement(Ue.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, a.createElement(C.$1, {
                            icon: Me.Kb,
                            size: "lg"
                        }))), a.createElement("div", {
                            className: "navbar-section center-nav"
                        }, a.createElement("div", {
                            className: "search"
                        }, a.createElement(vn, null)), a.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                u && (s && s(!1), u())
                            }
                        }, a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1ln64ce",
                                styles: "width:100%;height:20px;background-image:url('https://assets.vrchat.com/www/images/WingLeft.png');background-size:contain;background-repeat:no-repeat;background-position:center"
                            })
                        }))), a.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, a.createElement(Nn, null), a.createElement("a", {
                            href: "https://docs.vrchat.com/",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Docs"), a.createElement("a", {
                            href: "https://hello.vrchat.com/merch-hub",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Merch"), a.createElement("a", {
                            href: "https://hello.vrchat.com/vrchatplus",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#ffff00"
                            }
                        }, "VRC+"), a.createElement(R.Z, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, c.iv)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: z
                        }, a.createElement(C.$1, {
                            icon: gt.TE
                        }), "  Logout"))))
                    }
                    return a.createElement("nav", null, a.createElement(en.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.iv)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== S ? a.createElement(Mn, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Nt.mG
                    }), a.createElement("div", null, "Join Friends", " ", a.createElement(tn.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, S)), a.createElement(C.$1, {
                        icon: bt.yO
                    })) : a.createElement(Mn, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: kt.J9
                    }), a.createElement("div", null, "  Home"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Xt.default
                    }), a.createElement("div", null, "Groups"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Ct.FU
                    }), a.createElement("div", null, "Messages", " ", L > 0 && a.createElement(tn.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, L)), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/calendar",
                        title: "Calendar",
                        className: "btn text-left d-sm-none",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: f.fT
                    }), a.createElement("div", null, "Calendar"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Bn, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: G
                    }), a.createElement(Mn, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: At.q7
                    }), a.createElement("div", null, "Download"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Yt.default
                    }), a.createElement("div", null, "Discover Worlds"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: xt.cf
                    }), a.createElement("div", null, "My Worlds"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Et.KC
                    }), a.createElement("div", null, "Avatars"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Worlds"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Avatars"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Friends"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/inventory",
                        title: "Inventory",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: Jt.default
                    }), a.createElement("div", {
                        className: "tw-flex"
                    }, "Inventory", q && (null == D ? void 0 : D.totalCount) > 0 && a.createElement("div", {
                        className: "tw-rounded-full tw-bg-red tw-ml-2 tw-w-[22px] tw-h-[22px] tw-text-white tw-flex tw-items-center tw-justify-center "
                    }, a.createElement("p", {
                        className: "tw-text-sm tw-text-center tw-w-full tw-mb-0 tw-font-bold"
                    }, null == D ? void 0 : D.totalCount))), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: _t.default
                    }), a.createElement("div", null, "Marketplace"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), !1, a.createElement(Mn, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == I ? void 0 : I.disableUpgradeAccount) || (null == O ? void 0 : O.steamId) && (null == O ? void 0 : O.oculusId),
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: vt.x0
                    }), a.createElement("div", null, "Account Link"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: wt.Ek
                    }), a.createElement("div", null, "Blocks & Mutes"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: G
                    }, a.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: rn()
                    }), a.createElement("div", null, "Subscriptions"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "https://help.vrchat.com/",
                        title: "helpdesk",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-bg-[#07142B] tw-border-[#051E48] tw-text-[#6AA2F9] btn text-left",
                        onClick: G
                    }, a.createElement(C.$1, {
                        icon: ht.lX
                    }), a.createElement("div", null, "Help Desk"), a.createElement(C.$1, {
                        icon: bt.yO
                    })), a.createElement(Rn, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: z
                    }, a.createElement(C.$1, {
                        icon: gt.TE
                    }), a.createElement("div", null, "Logout"), a.createElement("div", null))))
                }));
            qn.displayName = "Navbar";
            const zn = qn;
            var Mn = (0, ze.Z)(Ue.rU, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                Rn = (0, ze.Z)(Mn, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                Un = n(50119),
                Gn = n(46320),
                Wn = n(30098),
                Ln = [];
            const $n = function() {
                var e = (0, i.s0)(),
                    t = (0, z._)("campaigns", []),
                    n = (0, r.Z)(t, 2),
                    a = n[0],
                    o = (n[1], (0, z._)("campaignsSeen", [])),
                    l = (0, r.Z)(o, 2),
                    c = l[0],
                    s = (l[1], function() {
                        if (c.length > 0) {
                            var e = a.filter((function(e) {
                                return -1 === c.findIndex((function(t) {
                                    return t.name === e.name
                                }))
                            }));
                            return (0, r.Z)(e, 1)[0]
                        }
                        return (0, r.Z)(a, 1)[0]
                    }());
                if (s) {
                    var u = Ln.find((function(e) {
                        return e.name === s.name
                    }));
                    if (u) return e(u.landingPage)
                }
                return null
            };
            var Vn = n(87462);
            const Fn = function(e) {
                var t = (0, M.q7)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return a.createElement(e, (0, Vn.Z)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var _n = n(28944),
                Xn = n(9419);
            const Jn = function() {
                var e = (0, o.I0)(),
                    t = (0, Xn._V)(),
                    n = t.data,
                    r = t.isSuccess;
                t.isLoading;
                return a.useEffect((function() {
                    e((0, Wn._r)(n))
                }), [r, n]), null
            };
            var Yn = n(13557),
                Kn = n(33622),
                Hn = n.n(Kn);
            var Qn = a.lazy((function() {
                    return Promise.all([n.e(9923), n.e(5508)]).then(n.bind(n, 5712))
                })),
                er = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(2998), n.e(8874), n.e(5474)]).then(n.bind(n, 37099))
                })),
                tr = a.lazy((function() {
                    return n.e(3488).then(n.bind(n, 93488))
                })),
                nr = a.lazy((function() {
                    return n.e(6231).then(n.bind(n, 76231))
                })),
                rr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(9440), n.e(2998), n.e(3294), n.e(8043), n.e(8207), n.e(1244), n.e(2704), n.e(5842), n.e(6461)]).then(n.bind(n, 76461))
                })),
                ar = a.lazy((function() {
                    return Promise.all([n.e(7826), n.e(852)]).then(n.bind(n, 36418))
                })),
                or = a.lazy((function() {
                    return Promise.all([n.e(4473), n.e(3023), n.e(5884)]).then(n.bind(n, 15884))
                })),
                ir = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(4444), n.e(4232)]).then(n.bind(n, 74444))
                })),
                lr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(9908), n.e(9575)]).then(n.bind(n, 39908))
                })),
                cr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(229), n.e(1459)]).then(n.bind(n, 60229))
                })),
                sr = a.lazy((function() {
                    return n.e(8438).then(n.bind(n, 58438))
                })),
                ur = a.lazy((function() {
                    return n.e(4907).then(n.bind(n, 44907))
                })),
                dr = a.lazy((function() {
                    return Promise.all([n.e(8158), n.e(6488)]).then(n.bind(n, 92848))
                })),
                mr = a.lazy((function() {
                    return Promise.all([n.e(18), n.e(2998), n.e(347), n.e(8207), n.e(1244), n.e(9923), n.e(8158), n.e(4896), n.e(7207)]).then(n.bind(n, 17207))
                })),
                fr = a.lazy((function() {
                    return Promise.all([n.e(4473), n.e(8158), n.e(3013)]).then(n.bind(n, 13164))
                })),
                pr = a.lazy((function() {
                    return Promise.all([n.e(4473), n.e(8264)]).then(n.bind(n, 8264))
                })),
                gr = a.lazy((function() {
                    return n.e(3443).then(n.bind(n, 53443))
                })),
                br = a.lazy((function() {
                    return n.e(9795).then(n.bind(n, 79795))
                })),
                hr = a.lazy((function() {
                    return Promise.all([n.e(9923), n.e(4157)]).then(n.bind(n, 50062))
                })),
                wr = a.lazy((function() {
                    return n.e(7047).then(n.bind(n, 7047))
                })),
                vr = a.lazy((function() {
                    return Promise.all([n.e(2998), n.e(1952)]).then(n.bind(n, 81952))
                })),
                yr = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(2022), n.e(533), n.e(4586)]).then(n.bind(n, 34586))
                })),
                Er = a.lazy((function() {
                    return n.e(997).then(n.bind(n, 997))
                })),
                xr = a.lazy((function() {
                    return n.e(4945).then(n.bind(n, 14945))
                })),
                Ar = a.lazy((function() {
                    return n.e(6812).then(n.bind(n, 46812))
                })),
                Cr = a.lazy((function() {
                    return n.e(7413).then(n.bind(n, 97413))
                })),
                kr = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(2998), n.e(8043), n.e(4140)]).then(n.bind(n, 51423))
                })),
                Nr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(1541), n.e(2998), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(347), n.e(7577)]).then(n.bind(n, 60377))
                }));
            const Ir = function() {
                var e = (0, o.I0)(),
                    t = (0, a.useRef)(null);
                $n();
                var n = (0, M.IB)().data,
                    u = a.useMemo((function() {
                        var e;
                        return !(null == n || null === (e = n.badges) || void 0 === e || !e.find((function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && d()().isBefore(d()(n).add(36, "hours"))
                        })))
                    }), [n]),
                    m = a.useState(!1),
                    f = (0, r.Z)(m, 2),
                    p = f[0],
                    g = f[1],
                    b = a.useState(!1),
                    h = (0, r.Z)(b, 2),
                    w = h[0],
                    v = h[1],
                    y = function(e) {
                        v(null != e ? e : !w)
                    },
                    E = function(e) {
                        g(null != e ? e : !p);
                        setTimeout((function() {
                            var e;
                            null === (e = t.current) || void 0 === e || e.updateCalendarSize()
                        }), 500)
                    },
                    x = a.useCallback((function() {
                        E(window.innerWidth > 1400 && !p)
                    }), []);
                return (0, a.useEffect)((function() {
                    return e((0, Wn.Wk)()), e((0, Wn._e)()), E(window.innerWidth > 1400), window.addEventListener("resize", x),
                        function() {
                            window.removeEventListener("resize", x)
                        }
                }), []), a.createElement("div", {
                    className: (0, c.iv)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", u && (0, c.iv)("background-image:url(", Hn(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{max-width:2000px;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 95px 0 20px;transition:padding-right 0.35s ease-in-out;}&.rightPinned{width:calc(100% - 695px);& .home-content{padding:10px 20px 0 20px;}}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1400px){& .rightbar.rightPinned{left:0;}& .hide-large{display:none;}}@media (max-width: 1400px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.rightPinned{width:100%;& .home-content{padding:10px 95px 0 20px;}}&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, a.createElement(Jn, null), a.createElement("div", null, a.createElement(zn, {
                    navToggleCallback: y,
                    friendsToggleCallback: function(e) {
                        window.removeEventListener("resize", x), E(e)
                    }
                })), a.createElement(l.Z, {
                    fluid: !0
                }, a.createElement("div", null, a.createElement("div", {
                    className: "fixed-top leftbar ".concat(w ? "leftOpen" : "")
                }, a.createElement("div", {
                    className: (0, c.iv)({
                        name: "1ga2o5r",
                        styles: "width:325px;padding:0 5px"
                    })
                }, a.createElement("div", {
                    className: "hide-large ".concat((0, c.iv)({
                        name: "1bk3y4m",
                        styles: "margin-top:8px;& .dropdown-menu{padding:10px 15px 5px 15px;position:fixed!important;background-color:#506070;border-radius:0;z-index:1000;bottom:0!important;top:100px!important;margin:0!important;transform:none!important;}& .dropdown-toggle{margin-bottom:5px;}"
                    }))
                }, a.createElement(Nn, {
                    direction: "right"
                })), a.createElement(s.SV, {
                    fallback: _n.Z
                }, a.createElement(Fe, {
                    navToggleCallback: y
                })), a.createElement(s.SV, {
                    fallback: _n.Z
                }, a.createElement(zn, {
                    horizontal: !0,
                    navToggleCallback: y
                })))), a.createElement("div", {
                    className: "col-xs-12 content-scroll ".concat(p ? "rightPinned" : "")
                }, a.createElement("div", {
                    className: "home-content"
                }, a.createElement(s.SV, {
                    fallback: _n.Z
                }, a.createElement(a.Suspense, {
                    fallback: a.createElement(a.Fragment, null, a.createElement(Un.Z, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), a.createElement(Un.Z, {
                        delay: "50",
                        height: "480px"
                    }))
                }, a.createElement(i.Z5, null, a.createElement(i.AW, {
                    path: "/search/:tab/:query",
                    element: a.createElement(er, null)
                }), a.createElement(i.AW, {
                    path: "/profile",
                    element: a.createElement(or, null)
                }), a.createElement(i.AW, {
                    path: "/user/:userId/*",
                    element: a.createElement(Cr, null)
                }), a.createElement(i.AW, {
                    path: "/uploadIcon",
                    element: Fn(lr)()
                }), a.createElement(i.AW, {
                    path: "/uploadPhoto",
                    element: Fn(cr)()
                }), a.createElement(i.AW, {
                    path: "/uploadEmoji",
                    element: Fn(ir)()
                }), a.createElement(i.AW, {
                    path: "/gallery/icons",
                    element: a.createElement(Gn.Z, {
                        to: "../inventory/user-icons"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/photos",
                    element: a.createElement(Gn.Z, {
                        to: "../inventory/photos"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/emoji",
                    element: a.createElement(Gn.Z, {
                        to: "../inventory/emojis"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/stickers",
                    element: a.createElement(Gn.Z, {
                        to: "../inventory/stickers"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/*",
                    element: a.createElement(Gn.Z, {
                        to: "../inventory/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/inventory/*",
                    element: a.createElement(Nr, null)
                }), a.createElement(i.AW, {
                    path: "/marketplace/*",
                    element: a.createElement(vr, null)
                }), a.createElement(i.AW, {
                    path: "/wallet",
                    element: a.createElement(Gn.Z, {
                        to: "../marketplace/wallet"
                    })
                }), a.createElement(i.AW, {
                    path: "/wallet/purchases/*",
                    element: a.createElement(Gn.Z, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/wallet/store/*",
                    element: a.createElement(Gn.Z, {
                        to: "../marketplace/storefront/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/locations",
                    element: a.createElement(hr, null)
                }), a.createElement(i.AW, {
                    path: "/worlds",
                    element: a.createElement(sr, null)
                }), a.createElement(i.AW, {
                    path: "/world/:worldId/*",
                    element: a.createElement(kr, null)
                }), a.createElement(i.AW, {
                    path: "/avatars",
                    element: a.createElement(ar, null)
                }), a.createElement(i.AW, {
                    path: "/avatar/:avatarId",
                    element: a.createElement(rr, null)
                }), a.createElement(i.AW, {
                    path: "/content/*",
                    element: a.createElement(yr, null)
                }), a.createElement(i.AW, {
                    path: "/messages",
                    element: a.createElement(Er, null)
                }), a.createElement(i.AW, {
                    path: "/playermoderations",
                    element: a.createElement(xr, null)
                }), a.createElement(i.AW, {
                    path: "/download",
                    element: a.createElement(tr, null)
                }), a.createElement(i.AW, {
                    path: "/groups",
                    element: a.createElement(ur, null)
                }), a.createElement(i.AW, {
                    path: "/groups/create",
                    element: a.createElement(dr, null)
                }), a.createElement(i.AW, {
                    path: "/groups/search",
                    element: a.createElement(ur, null)
                }), a.createElement(i.AW, {
                    path: "/groups/search/:query",
                    element: a.createElement(ur, null)
                }), a.createElement(i.AW, {
                    path: "/group/:groupId/ageverification/:code",
                    element: a.createElement(fr, null)
                }), a.createElement(i.AW, {
                    path: "/group/:groupId/*",
                    element: a.createElement(mr, null)
                }), a.createElement(i.AW, {
                    path: "/groups/:groupId",
                    element: a.createElement(Gn.Z, {
                        to: "../../group/:groupId"
                    })
                }), a.createElement(i.AW, {
                    path: "/calendar",
                    element: a.createElement(qe, {
                        ref: t
                    })
                }), a.createElement(i.AW, {
                    path: "/ageverification",
                    element: a.createElement(pr, null)
                }), a.createElement(i.AW, {
                    path: "/accountlink",
                    element: a.createElement(nr, null)
                }), a.createElement(i.AW, {
                    path: "/favorites/*",
                    element: a.createElement(i.Z5, null, a.createElement(i.AW, {
                        path: "/:type",
                        element: a.createElement(gr, null)
                    }), a.createElement(i.AW, {
                        path: "/:type/:name",
                        element: a.createElement(gr, null)
                    }))
                }), a.createElement(i.AW, {
                    path: "/group/:ownerId/calendar/:eventId",
                    element: a.createElement(Yn.Z, null)
                }), a.createElement(i.AW, {
                    path: "/jams/*",
                    element: a.createElement(wr, null)
                }), !1, !1, a.createElement(i.AW, {
                    path: "/subscriptions",
                    element: a.createElement(Ar, null)
                }), a.createElement(i.AW, {
                    path: "/",
                    element: a.createElement(Qn, null)
                })))))), a.createElement("div", {
                    className: "fixed-top rightbar ".concat(p ? "open" : "")
                }, a.createElement(s.SV, {
                    fallback: _n.Z
                }, a.createElement(a.Suspense, {
                    fallback: a.createElement(a.Fragment, null, a.createElement(Un.Z, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), a.createElement(Un.Z, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), a.createElement(Un.Z, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, a.createElement(br, {
                    friendsToggleCallback: E
                })))), a.createElement("div", {
                    onKeyDown: function(e) {
                        "Escape" === e.key && E(!1)
                    },
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button d-md-flex d-none",
                    onClick: function() {
                        window.removeEventListener("resize", x), E(!0)
                    }
                }, a.createElement("img", {
                    alt: "Wing Icon",
                    src: "https://assets.vrchat.com/www/images/WingLeft.png",
                    className: (0, c.iv)({
                        name: "1a5rd5y",
                        styles: "transform:scale(0.7)"
                    })
                })))), a.createElement(U, null), !1, a.createElement(P, null))
            }
        },
        55206: (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => d,
                b: () => s
            });
            var r = n(4942),
                a = n(3447),
                o = n(56209),
                i = n(6344);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = {
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
                u = {
                    aspectRatioClass: "aspect-square",
                    hasArchive: !1,
                    hasConvertToVrcEmojis: !1,
                    hasDelete: !1,
                    hasRecover: !1,
                    imageGrayScale: !1,
                    hasThumbnailName: !1,
                    useCanvasThumbnail: !1
                },
                d = {
                    stickersCustom: c(c({
                        label: "Custom Stickers"
                    }, u), {}, {
                        hasDelete: !0,
                        hasConvertToVrcEmojis: !0,
                        useCanvasThumbnail: !0,
                        icon: i.default
                    }),
                    stickersExclusive: c(c({
                        label: "Exclusive Stickers"
                    }, u), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0,
                        icon: i.default
                    }),
                    stickersArchived: c(c({
                        label: "Archived Stickers"
                    }, u), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0,
                        icon: i.default
                    }),
                    emojisCustom: c(c({
                        label: "Custom Emojis"
                    }, u), {}, {
                        hasDelete: !0,
                        useCanvasThumbnail: !0,
                        icon: a.default
                    }),
                    emojisExclusive: c(c({
                        label: "Exclusive Emojis"
                    }, u), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0,
                        icon: a.default
                    }),
                    emojisArchived: c(c({
                        label: "Archived Emojis"
                    }, u), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0,
                        icon: a.default
                    }),
                    propsExclusive: c(c({
                        label: "Exclusive Items"
                    }, u), {}, {
                        hasArchive: !0,
                        hasThumbnailName: !0,
                        icon: o.default
                    }),
                    propsArchived: c(c({
                        label: "Archived Items"
                    }, u), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        hasThumbnailName: !0,
                        icon: o.default
                    })
                }
        },
        19531: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r
            });
            var r = !1
        },
        31358: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => qe
            });
            var r = n(87462),
                a = n(45987),
                o = n(59545),
                i = n(68055),
                l = n(81511),
                c = n(55505),
                s = n(4241),
                u = n(21464),
                d = n(67294),
                m = n(32981),
                f = n(79655),
                p = n(30098),
                g = n(72562),
                b = n(62437),
                h = n(54546),
                w = n(42137),
                v = n(7469),
                y = n(87709),
                E = n(16995),
                x = n(67454),
                A = n(31087),
                C = n(15405),
                k = n(95819),
                N = n(22601),
                I = n(87695),
                O = n(16686),
                j = n(47947),
                Z = n(53359),
                B = n(20495),
                S = n(85322),
                T = n(67992),
                P = n(95896),
                D = n(27484),
                q = n.n(D),
                z = n(56176),
                M = n.n(z),
                R = n(84110),
                U = n.n(R),
                G = n(9419),
                W = n(50249),
                L = n(13757),
                $ = n(51540),
                V = n(8792),
                F = n(65322),
                _ = n(87589),
                X = n(4739),
                J = n(79036),
                Y = n(59660),
                K = n(2155),
                H = n(42619),
                Q = n(96231),
                ee = n(34233),
                te = n(43714),
                ne = n(86529),
                re = n(27879),
                ae = n(98078),
                oe = n(12690),
                ie = n(44641),
                le = n(13461),
                ce = n(17319),
                se = n(20446),
                ue = n(75386),
                de = n(40098),
                me = n(35117),
                fe = n(50906),
                pe = n(55346),
                ge = n(61730),
                be = n(69323),
                he = n(20455),
                we = n(32731),
                ve = n(57982),
                ye = n(98375),
                Ee = n(33805),
                xe = {
                    edit: n(11071).Y,
                    cancel: y.faXmark,
                    history: Ee.On,
                    refresh: ye.faArrowsRotate,
                    search: ve.faMagnifyingGlass,
                    settings: we.faGear,
                    pin: he.RP,
                    "arrow-up": be.FP,
                    "arrow-down": ge.r5,
                    "arrow-left": pe.ac,
                    "arrow-right": fe.eF,
                    ban: me.faBan,
                    check: i.LE,
                    plus: de.r8,
                    link: ue.nN,
                    eye: se.Md,
                    circle: ce.di,
                    star: le.T,
                    bell: T.qm,
                    "bell-slash": ie.n8,
                    bookmark: oe.xV,
                    reply: ae.Lh,
                    user: re.IL,
                    "user-circle": ne.m0,
                    "user-plus": s.FK,
                    "user-minus": te.k9,
                    camera: ee._j,
                    display: Q.YV,
                    trash: H.$,
                    feather: K.nA,
                    images: Y.l9,
                    house: J.faHouse,
                    location: X.iU,
                    rocket: _.tM,
                    microphone: F.UO,
                    "folder-open": V.cC,
                    gauge: $.Iz,
                    dice: L.RJ,
                    "triangle-exclamation": Z.faTriangleExclamation
                },
                Ae = n(46382),
                Ce = n(88233),
                ke = n(2566);
            q().extend(U()), q().extend(M());
            var Ne = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: W.default
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: T.qm
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: T.qm
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
                        icon: T.qm
                    },
                    "event.announcement": {
                        caption: "Event Announcement",
                        icon: S.fT
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: B.faCircleExclamation
                    },
                    "moderation.contentrestriction": {
                        caption: "Content Moderation",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: j.JH
                    },
                    "avatarreview.success": {
                        caption: "Avatar Approved",
                        icon: O.faCircleCheck
                    },
                    "avatarreview.failure": {
                        caption: "Avatar Rejected",
                        icon: I.faCircleXmark
                    },
                    "promo.redeem": {
                        caption: "Promo",
                        icon: N.IB
                    },
                    "badge.earned": {
                        caption: "Badge Earned",
                        icon: k.U
                    },
                    "text.adventure": {
                        caption: "Adventure",
                        icon: C.Jw
                    },
                    "vrcplus.gift": {
                        caption: "VRC+ Gift",
                        icon: A.BH
                    },
                    boop: {
                        caption: "Boop",
                        icon: x.kQ
                    }
                },
                Ie = {
                    OpenListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(P.yy.EXPIRING)
                    },
                    OpenExpiredListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(P.yy.EXPIRED)
                    },
                    event: function(e) {
                        e.linkType;
                        var t = e.linkId.split(","),
                            n = (0, h.Z)(t, 2),
                            r = n[0],
                            a = n[1];
                        return "/home/group/".concat(r, "/calendar/").concat(a)
                    }
                },
                Oe = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                je = function(e) {
                    var t, n = e.notificationId,
                        r = e.respondToNotification,
                        a = e.type,
                        o = e.data,
                        i = e.icon,
                        l = e.text;
                    return "link" === a ? null : d.createElement(ke.n9, {
                        disabled: "reply" === a,
                        onClick: function() {
                            r({
                                notificationId: n,
                                responseType: a,
                                responseData: o
                            })
                        },
                        title: "reply" === a ? "To reply, open your notifications in VRChat" : l || a
                    }, d.createElement(Ae.$1, {
                        icon: (t = i, xe[t] || t)
                    }), " ", l || a)
                };
            const Ze = function(e) {
                var t = e.notification,
                    n = e.slim,
                    a = (0, m.I0)(),
                    o = d.useState(!1),
                    i = (0, h.Z)(o, 2),
                    l = i[0],
                    c = i[1],
                    s = (0, G.S5)(),
                    g = (0, h.Z)(s, 2),
                    b = g[0],
                    x = g[1].isSuccess,
                    A = (0, G.oS)(),
                    C = (0, h.Z)(A, 2),
                    k = C[0],
                    N = C[1].isSuccess,
                    I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.link,
                            n = (e.linkText, (null == t ? void 0 : t.split(":")) || []),
                            r = (0, h.Z)(n, 2),
                            a = r[0],
                            o = r[1];
                        if (a) return (Ie[a] || Oe)({
                            linkType: a,
                            linkId: o
                        })
                    }(t),
                    O = (t.linkText || t.title, t.title || t.linkText);
                (x || N) && a((0, p.tV)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var j = Ne[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: E.Ps
                    },
                    Z = j.icon,
                    B = j.caption,
                    S = t.createdAt && q()(t.createdAt);
                return d.createElement(d.Fragment, null, d.createElement(ke.jm, null, d.createElement(ke.lR, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: Z
                }), " ", d.createElement("i", null, B)), (null == t ? void 0 : t.canDelete) && d.createElement(ke.Z2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        k({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, d.createElement(Ae.$1, {
                    icon: y.faXmark
                }))), d.createElement(ke.g6, null, t.imageUrl && d.createElement(ke.rR, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.xY.offline.color
                }, d.createElement(ke.v_, null, d.createElement(Ae.$1, {
                    icon: v.q9
                })), d.createElement(ke.sJ, {
                    url: t.imageUrl
                }), d.createElement(ke.EU, {
                    url: t.imageUrl
                })), d.createElement(ke.N2, null, d.createElement(ke.gp, null, !!O && d.createElement("strong", null, I ? d.createElement(f.rU, {
                    to: I
                }, O) : O), (null == S ? void 0 : S.isValid()) && d.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, d.createElement("small", null, d.createElement("time", {
                    dateTime: t.createdAt,
                    title: S.format("llll")
                }, d.createElement(Ae.$1, {
                    className: "tw-mr-1",
                    icon: w.SZ
                }), S.fromNow()))), d.createElement("p", null, t.message)), d.createElement(ke.tt, {
                    slim: n
                }, null == t ? void 0 : t.responses.map((function(e) {
                    return d.createElement(je, (0, r.Z)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: b
                    }))
                })))))), !!t.imageUrl && l && d.createElement(Ce.Z, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const Be = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    r = (0, m.I0)(),
                    a = (0, G.gS)(),
                    i = (0, h.Z)(a, 2),
                    c = i[0],
                    s = i[1].isSuccess,
                    f = (0, G.pX)(),
                    g = (0, h.Z)(f, 1)[0],
                    b = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && r((0, p.tV)({
                    notificationId: t.id
                })), d.createElement(ke.jm, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: l.FU
                }), "  ", d.createElement("i", null, "System Message")), d.createElement(ke.g6, null, d.createElement(ke.gt, {
                    statusColor: u.xY.offline.color
                }, d.createElement(ke.sJ, {
                    url: b
                }), d.createElement(ke.EU, {
                    url: b
                })), d.createElement(ke.N2, null, d.createElement(ke.gp, null, d.createElement("strong", null, "System Message"), " - ", t.message), d.createElement(ke.tt, null, d.createElement(ke.n9, {
                    onClick: function() {
                        c({
                            notificationId: t.id
                        }), g({
                            notificationId: t.id
                        })
                    },
                    color: "primary",
                    title: "Close"
                }, d.createElement(Ae.$1, {
                    icon: o.NB
                }), " Close")))))
            };
            var Se = ["notification"],
                Te = {
                    friendRequest: s.FK,
                    "friend-add": s.FK,
                    invite: l.FU,
                    requestInvite: l.FU,
                    requestInviteResponse: c.dw,
                    inviteResponse: c.dw,
                    message: l.FU
                },
                Pe = {
                    friendRequest: "Friend Request",
                    "friend-add": "Friend Status",
                    invite: "Invite",
                    requestInvite: "Invite Request",
                    requestInviteResponse: "Invite Response",
                    inviteResponse: "Invite Response",
                    message: "System Message"
                },
                De = ["friend-active", "friend-add", "friend-online"];
            const qe = function(e) {
                var t, n, l, c, s, h, w, v, y = e.notification,
                    E = (0, a.Z)(e, Se),
                    x = (0, m.I0)(),
                    A = y.type,
                    C = y.senderUserId,
                    k = y.id,
                    N = y.message,
                    I = y.isSystem,
                    O = 2 === y.version,
                    j = "message" === A || I,
                    Z = (0, b.GR)(C, {
                        skip: !C || O
                    }),
                    B = Z.data,
                    S = Z.isLoading,
                    T = Z.error;
                if (O) return d.createElement(Ze, (0, r.Z)({}, E, {
                    notification: y
                }));
                if (S) return d.createElement("p", null, "Loading");
                if (j) return d.createElement(Be, (0, r.Z)({}, E, {
                    notification: y,
                    senderUserData: B
                }));
                if (404 === (null == T ? void 0 : T.status)) return null;
                var P, D = Te[A],
                    q = Pe[A],
                    z = (0, u.Tq)(B.status).color,
                    M = B.profilePicOverride || B.currentAvatarThumbnailImageUrl,
                    R = (null === (t = y.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = y.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (l = y.details) || void 0 === l ? void 0 : l.requestMessage);
                return d.createElement(ke.jm, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: D
                }), "  ", d.createElement("i", null, q)), d.createElement(ke.g6, null, d.createElement(ke.rR, {
                    to: "/home/user/".concat(C),
                    statusColor: z
                }, !(null !== (c = y.details) && void 0 !== c && c.imageUrl) && d.createElement(ke.v_, null, "Go To Profile"), d.createElement(ke.sJ, {
                    url: null !== (s = null === (h = y.details) || void 0 === h ? void 0 : h.imageUrl) && void 0 !== s ? s : M
                }), d.createElement(ke.EU, {
                    url: null !== (w = null === (v = y.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== w ? w : M
                })), d.createElement(ke.N2, null, d.createElement(ke.gp, null, d.createElement(f.rU, {
                    to: "/home/user/".concat(C)
                }, d.createElement("strong", null, B.displayName)), " - ", N || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (P = y.details) || void 0 === P ? void 0 : P.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [A]), "friendRequest" === A ? d.createElement(ke.tt, null, d.createElement(ke.n9, {
                    onClick: function() {
                        return x((0, p.yK)({
                            notificationId: k,
                            withServer: !De.includes(y.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(Ae.$1, {
                    icon: o.NB
                })), d.createElement(ke.n9, {
                    onClick: function() {
                        x((0, p.FC)({
                            notificationId: y.id
                        })), (0, g.Kz)("Social_AcceptFriendRequest", {
                            targetUserId: y.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, d.createElement(Ae.$1, {
                    icon: i.LE
                }))) : d.createElement(ke.tt, null, d.createElement(ke.n9, {
                    onClick: function() {
                        return x((0, p.yK)({
                            notificationId: k,
                            withServer: !De.includes(y.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(Ae.$1, {
                    icon: o.NB
                })), "invite" === A && d.createElement(ke.n9, {
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
                }, d.createElement("strong", null, "Join"))))), R && d.createElement(ke.hH, null, '"', R, '"'))
            }
        },
        2566: (e, t, n) => {
            "use strict";
            n.d(t, {
                EU: () => x,
                N2: () => m,
                XK: () => d,
                Z2: () => b,
                db: () => C,
                e5: () => A,
                g6: () => s,
                gp: () => f,
                gt: () => w,
                hH: () => u,
                jm: () => c,
                lR: () => l,
                n9: () => g,
                rR: () => y,
                sJ: () => E,
                tt: () => p,
                v_: () => h
            });
            var r = n(4965),
                a = n(34698),
                o = n(79655),
                i = n(86646);
            var l = (0, r.Z)("div", {
                    target: "ennyu4t17"
                })({
                    name: "ha9uku",
                    styles: "display:flex;width:100%;justify-content:space-between"
                }),
                c = (0, r.Z)("div", {
                    target: "ennyu4t16"
                })({
                    name: "2pn6kz",
                    styles: "overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:10px"
                }),
                s = (0, r.Z)("div", {
                    target: "ennyu4t15"
                })({
                    name: "1nyl2gd",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background:#07242b;border:#053c48 solid 2px;border-radius:8px;padding:5px"
                }),
                u = (0, r.Z)("div", {
                    target: "ennyu4t14"
                })({
                    name: "dklbma",
                    styles: "background:#053c48;padding:3px 10px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 10px"
                }),
                d = (0, r.Z)("small", {
                    target: "ennyu4t13"
                })({
                    name: "kp3m62",
                    styles: "background:#053c48;padding:3px 10px;border-top-right-radius:5px;border-top-left-radius:5px;align-self:flex-start;margin-left:10px"
                }),
                m = (0, r.Z)("div", {
                    target: "ennyu4t12"
                })({
                    name: "16jnipj",
                    styles: "display:flex;flex-direction:column;flex:1;justify-content:space-between;margin:0 5px 0 5px;&>*{margin:3px 0 3px 0;}"
                }),
                f = (0, r.Z)("div", {
                    target: "ennyu4t11"
                })({
                    name: "1v5otb0",
                    styles: "display:inline-block;flex:1;flex-direction:row;align-items:center;white-space:pre-wrap;word-break:break-word;& small{overflow:hidden;max-lines:1;white-space:nowrap;text-overflow:ellipsis;}& strong{font-size:125%;}"
                }),
                p = (0, r.Z)("div", {
                    target: "ennyu4t10"
                })("flex:1;display:flex;flex-wrap:wrap;flex-direction:row;gap:1.5rem;@media (min-width: 700px){justify-content:end;}", (function(e) {
                    return e.slim && "\n      justify-content: end;\n      font-size: 0;\n\n      & > ".concat(g, " {\n        gap: 0;\n      }\n    ")
                }), ";"),
                g = (0, r.Z)("button", {
                    target: "ennyu4t9"
                })("display:flex;align-items:center;text-align:initial;font-size:80%;border:none;background:none;margin:0;padding:3px 0;color:var(--bs-primary);cursor:pointer;gap:.5rem;&[disabled]{color:hsl(0, 0%, 60%);}&>", i.O, "{transition:all 0.1s ease-out;font-size:25px;}&:hover>", i.O, "{transform:scale(1.2);}"),
                b = (0, r.Z)(g, {
                    target: "ennyu4t8"
                })("margin:0;padding:0 .5rem;&>", i.O, "{font-size:1rem;}"),
                h = (0, r.Z)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                w = (0, r.Z)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;"),
                v = (0, r.Z)(o.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;&:hover ", h, "{opacity:1;}"),
                y = (0, r.Z)(v, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", (function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(h, " {\n      opacity: 0;\n    }\n  ")
                }), ";"),
                E = (0, r.Z)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                x = (0, r.Z)(E, {
                    target: "ennyu4t2"
                })({
                    name: "1gxenc0",
                    styles: "z-index:1;background-size:cover;filter:blur(20px);width:164px;height:110px;top:-20px;left:-20px"
                }),
                A = (0, r.Z)("div", {
                    target: "ennyu4t1"
                })("text-align:center;max-width:600px;margin:auto;margin-bottom:20px;opacity:", (function(e) {
                    return e.seen ? "0.8" : "1"
                }), ";border:", (function(e) {
                    return e.seen ? "0" : "2px solid yellow"
                }), ";& .card-header{text-align:left;}& .ignored{opacity:0.3;transform:scale(0.8);}"),
                C = (0, r.Z)(a.Z, {
                    target: "ennyu4t0"
                })({
                    name: "1ctac9v",
                    styles: "text-transform:capitalize;margin:0px 12px"
                })
        },
        76938: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => r
            });
            var r = function(e) {
                return e.currentUser.isMod
            }
        },
        91492: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => g,
                Xz: () => p,
                aj: () => f,
                dq: () => w,
                fv: () => b,
                sw: () => h
            });
            var r = n(42138),
                a = n(4942),
                o = n(45987),
                i = n(61509),
                l = n(64358),
                c = ["n", "pageValue", "types"],
                s = ["n", "pageValue", "types", "collection"];

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
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
                                        r = e.pageValue,
                                        a = void 0 === r ? 1 : r,
                                        i = e.types,
                                        s = (0, o.Z)(e, c);
                                    return {
                                        url: "inventory",
                                        params: d(d({}, (0, l.ue)({
                                            n,
                                            pageValue: a
                                        })), {}, {
                                            notFlags: "ugc",
                                            notTypes: "bundle",
                                            archived: !1,
                                            seen: !1,
                                            types: i
                                        }, s)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.types,
                                        a = n.isNavBar;
                                    return [{
                                        type: "InventoryItemIsNotSeen",
                                        id: void 0 !== a && a ? "NAVBAR" : r
                                    }]
                                }
                            }),
                            getInventoryItems: e.query({
                                query: function(e) {
                                    var t = e.n,
                                        n = void 0 === t ? 100 : t,
                                        r = e.pageValue,
                                        a = void 0 === r ? 1 : r,
                                        i = e.types,
                                        c = e.collection,
                                        u = (0, o.Z)(e, s);
                                    return {
                                        url: "inventory",
                                        params: d(d(d(d({}, (0, l.ue)({
                                            n,
                                            pageValue: a
                                        })), i && {
                                            types: i
                                        }), c && {
                                            collection: c
                                        }), u)
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.n,
                                        a = n.offset;
                                    return [{
                                        type: "InventoryItems",
                                        id: "".concat(r, "-").concat(a)
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
                            updateInventoryItem: e.mutation({
                                query: function(e) {
                                    var t = e.itemId,
                                        n = e.itemData;
                                    e.types;
                                    return {
                                        url: "inventory/".concat(t),
                                        method: "PUT",
                                        body: d({}, n)
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var a = n.itemId,
                                        o = n.types,
                                        i = n.itemData;
                                    return [{
                                        type: "InventoryItem",
                                        id: a
                                    }, "InventoryItems", {
                                        type: "InventoryItemIsNotSeen",
                                        id: o
                                    }].concat((0, r.Z)(i.isSeen ? [{
                                        type: "InventoryItemIsNotSeen",
                                        id: "NAVBAR"
                                    }] : []))
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }),
                f = m.useGetInventoryItemsQuery,
                p = (m.useGetInventoryItemByIdQuery, m.useDeleteInventoryItemMutation),
                g = m.useArchiveInventoryItemMutation,
                b = m.useUpdateInventoryItemMutation,
                h = m.useGetInventoryCollectionsQuery,
                w = m.useGetInventoryNotSeenItemsQuery
        },
        22082: (e, t, n) => {
            "use strict";
            n.d(t, {
                MM: () => a,
                Pc: () => l,
                Zv: () => i,
                oE: () => o
            });
            var r = n(61509).S.injectEndpoints({
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
                                        r = e.contentId;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        params: {
                                            submitterId: n,
                                            contentId: r
                                        }
                                    }
                                },
                                providesTags: ["JamSubmissions"]
                            }),
                            submitJamContent: e.mutation({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.contentId,
                                        r = e.description;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        method: "POST",
                                        body: {
                                            contentId: n,
                                            description: r
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
                a = r.useDeleteSubmittedContentMutation,
                o = r.useGetJamsQuery,
                i = r.useGetJamSubmissionsQuery,
                l = r.useSubmitJamContentMutation
        },
        9419: (e, t, n) => {
            "use strict";
            n.d(t, {
                S5: () => s,
                XJ: () => i,
                _V: () => l,
                gS: () => c,
                oS: () => o,
                pX: () => a
            });
            var r = n(61509).S.injectEndpoints({
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
                                        r = e.responseData;
                                    return {
                                        url: "notifications/".concat(t, "/respond"),
                                        body: {
                                            responseType: n,
                                            responseData: r
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
                a = r.useAcknowledgeNotificationMutation,
                o = (r.useAcknowledgeV2NotificationMutation, r.useDeleteV2NotificationMutation),
                i = r.useDeleteAllV2NotificationMutation,
                l = r.useGetAllV2NotificationsQuery,
                c = r.useHideNotificationMutation,
                s = r.useRespondToNotificationMutation
        },
        6655: (e, t, n) => {
            "use strict";
            n.d(t, {
                $2: () => x,
                Cv: () => y,
                En: () => d,
                O7: () => g,
                S6: () => h,
                WA: () => v,
                gI: () => E,
                gq: () => p,
                kN: () => w,
                nT: () => f,
                pp: () => b,
                v$: () => m,
                ve: () => A
            });
            var r = n(45987),
                a = n(4942),
                o = n(61509),
                i = ["redirect"],
                l = ["userId", "flowConfig"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = o.S.injectEndpoints({
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
                                    var r = n.userId;
                                    return [{
                                        type: "TiliaTosAcceptance",
                                        id: r
                                    }, {
                                        type: "TiliaKycCompletion",
                                        id: r
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
                                        r = void 0 === n ? "" : n;
                                    return "user/".concat(t, "/balance/").concat(r)
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
                                        a = (0, r.Z)(e, i),
                                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = (o.userId, o.flowConfig),
                                        u = (0, r.Z)(o, l),
                                        d = new URL(n);
                                    return c && d.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(u).forEach((function(e) {
                                        "flow" !== e && d.searchParams.set(e, u[e])
                                    })), s({
                                        redirect: d.href,
                                        rawRedirect: n
                                    }, a)
                                }
                            })
                        }, !1)
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["TiliaTosAcceptance", "TiliaKycCompletion", "TiliaBalance", "TiliaStatus"]
                }),
                d = (u.useSyncTiliaAccountMutation, u.useGetTiliaStatusQuery),
                m = u.useGetTiliaTosAcceptanceQuery,
                f = u.useSetTiliaTosAcceptanceMutation,
                p = u.useGetTiliaKycCompletionQuery,
                g = u.useSetTiliaKycCompletionMutation,
                b = u.useGetTiliaBalanceQuery,
                h = u.useGetTiliaPayoutMethodQuery,
                w = u.useGetTiliaPayoutEligibleQuery,
                v = u.useLazyGetTiliaPayoutEstimateQuery,
                y = u.useCreateTiliaPayoutRequestMutation,
                E = u.useLazyGetTiliaWebRedirectUrlQuery,
                x = u.useGiveTiliaTokenBalanceMutation,
                A = u.useTakeTiliaTokenBalanceMutation
        },
        46461: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(87537),
                a = n.n(r),
                o = n(23645),
                i = n.n(o)()(a());
            i.push([e.id, ":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: #fff;\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n}\n\n.fc .fc-toolbar .fc-button {\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: #333;\n  background-color: var(--fc-button-bg-color);\n  border-color: #333;\n  border-color: var(--fc-button-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: #064B5C;\n  background-color: var(--fc-button-active-bg-color);\n  border-color: #064B5C;\n  border-color: var(--fc-button-active-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}", "", {
                version: 3,
                sources: ["webpack://./src/components/Calendar/calendarStyles.css"],
                names: [],
                mappings: "AAAA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,+CAA+C;EAC/C,gCAAgC;EAChC,0BAA0B;;EAE1B,4BAA4B;EAC5B,0BAA0B;EAC1B,8BAA8B;EAC9B,gCAAgC;EAChC,uCAAuC;EACvC,oCAAoC;EACpC,wCAAwC;;EAExC,4BAA4B;EAC5B,gCAAgC;EAChC,2BAA2B;EAC3B,sDAAsD;;EAEtD,gCAAgC;EAChC,kCAAkC;;EAElC,iCAAiC;EACjC,uCAAuC;EACvC,wCAAwC;;EAExC,iDAAiD;EACjD,uCAAuC;EACvC,0BAA0B;EAC1B,8CAA8C;EAC9C,kCAAkC;EAClC,6BAA6B;;EAE7B,aAAa;EACb,iCAAiC;;EAEjC,gBAAgB;EAChB,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,WAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAG/B;;AAJA;EAEE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;;EAEE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;;AAGA;;;EAGE,eAAe;EACf,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,sBAA2C;EAA3C,2CAA2C;EAC3C,kBAA2C;EAA3C,2CAA2C;EAC3C,WAAkC;EAAlC,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAkD;EAAlD,kDAAkD;EAClD,qBAAkD;EAAlD,kDAAkD;EAClD,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;;AAGA;CACC,gBAAgB;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,sCAAsC;EACtC,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,6BAAqB;EAArB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;;EAEE;AACF;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;;;AAIA;;EAEE;;;IAGE,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;EACxB;AACF",
                sourcesContent: [":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: var(--fc-button-bg-color);\n  border-color: var(--fc-button-border-color);\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: var(--fc-button-active-bg-color);\n  border-color: var(--fc-button-active-border-color);\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}"],
                sourceRoot: ""
            }]);
            const l = i
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
//# sourceMappingURL=9d5bf690811dc16814656a890f1f44181c2887b32be5d83810d93aad392dde6a.js.map