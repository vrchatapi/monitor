(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1541], {
        25411: (e, t, n) => {
            "use strict";
            n.d(t, {
                CJ: () => w,
                Lu: () => b,
                Tr: () => h,
                gW: () => g,
                k4: () => p,
                pz: () => f,
                zf: () => v
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
                w = function(e) {
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
                b = function(e) {
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
                v = function(e) {
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
                h = function() {
                    return {
                        type: "AUTO_REDIRECT_TOGGLE"
                    }
                }
        },
        50466: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            const r = (0, n(45861).createIconDescriptor)({
                name: "animated",
                width: 16,
                path: "M15.5573 8C15.5573 8.78437 15.3507 9.55498 14.9586 10.2344C14.5664 10.9138 14.0022 11.4778 13.3229 11.87C12.6435 12.2623 11.8729 12.4687 11.0885 12.4687C10.3041 12.4687 9.53347 12.2623 8.85408 11.87C8.1748 11.4778 7.61064 10.9138 7.21845 10.2344C6.82627 9.55498 6.61971 8.78437 6.61971 8C6.61971 7.21552 6.82627 6.4449 7.21845 5.76562C7.61064 5.08624 8.1748 4.52208 8.85408 4.12989C9.53347 3.7377 10.3041 3.53125 11.0885 3.53125C11.8729 3.53125 12.6435 3.73771 13.3229 4.12989C14.0022 4.52208 14.5664 5.08624 14.9586 5.76562C15.3507 6.4449 15.5573 7.21552 15.5573 8Z M7.02078 4.12769C4.88214 4.12769 3.14851 5.86134 3.14851 7.99995C3.14851 10.1386 4.88217 11.8722 7.02078 11.8722C7.03505 11.8721 7.05005 11.8718 7.06484 11.8715C7.17432 11.8691 7.18692 11.8167 7.09599 11.7559C5.88505 10.943 5.08474 9.56096 5.08474 7.99933C5.08474 6.43611 5.8866 5.05373 7.09953 4.24253C7.19047 4.18159 7.17808 4.13014 7.0686 4.12899C7.05193 4.12878 7.03693 4.12868 7.02099 4.12868L7.02078 4.12769Z M3.57599 4.86719C1.84567 4.86719 0.443192 6.26991 0.443192 8.00026C0.443192 9.73058 1.84591 11.1333 3.57599 11.1333C3.58547 11.1332 3.59745 11.1331 3.60714 11.1329C3.69829 11.1314 3.70849 11.0881 3.63308 11.0372C2.65548 10.3792 2.00964 9.26219 2.00964 8.00038C2.00964 6.73715 2.65673 5.62006 3.63598 4.96331C3.71171 4.91258 3.70119 4.86998 3.61005 4.86977H3.57577L3.57599 4.86719Z"
            })
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
                Z: () => E
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
                w = n(4239),
                b = n.n(w),
                v = {
                    circle: l(),
                    flower: s(),
                    heart: d(),
                    pow: f(),
                    square: g(),
                    star: b()
                },
                h = function(e) {
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
                        w = (0, o.useRef)(null),
                        b = (0, o.useRef)(-1),
                        h = function(e) {
                            e.filter = d ? "grayscale(1)" : "none"
                        },
                        E = function() {
                            -1 !== b.current && (clearInterval(b.current), b.current = -1)
                        },
                        y = (0, o.useMemo)((function() {
                            return v[null == t ? void 0 : t.maskTag] || null
                        }), [t]),
                        x = (0, o.useRef)(!1),
                        A = (0, o.useMemo)((function() {
                            var e = !(null == t || !t.animated);
                            return e || E(), x.current = e, e
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
                        Z = function() {
                            E(), null === g.current && w.current && (g.current = w.current.getContext("2d")), g.current && g.current.clearRect(0, 0, a, a), A && C && k > 0 && (b.current = setInterval(B, 1e3 / k))
                        },
                        B = function() {
                            if (A) {
                                if (null !== g.current && null !== f.current) {
                                    var e = g.current;
                                    e.clearRect(0, 0, 1e3, 1e3), e.save(), null !== y && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in");
                                    var t = I(),
                                        n = N();
                                    h(e), e.drawImage(f.current, t.x, t.y, n, n, 0, 0, a, a), e.restore(), m.current = (m.current + 1) % C
                                }
                            } else E()
                        },
                        O = function() {
                            if (null !== w.current && null !== f.current) {
                                var e = w.current.getContext("2d");
                                if (e.clearRect(0, 0, a, a), e.imageSmoothingEnabled = !1, e.save(), null !== y && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in"), s) return h(e), e.drawImage(f.current, 0, 0, a, a), void e.restore();
                                f.current.width;
                                var t = f.current.width,
                                    n = f.current.height,
                                    r = t / n,
                                    o = r > 1 ? Math.min(a, t) : Math.min(a, n) * r,
                                    i = r > 1 ? Math.min(a, t) / r : Math.min(a, n);
                                h(e);
                                var l = (a - o) / 2,
                                    c = (a - i) / 2;
                                e.drawImage(f.current, l, c, o, i), e.restore()
                            }
                        },
                        j = function() {
                            f.current = null;
                            var e = new Image;
                            if (e.onload = function() {
                                    f.current = e, A && C && k ? Z() : O(), void 0 !== i && i()
                                }, e.onerror = function(e) {
                                    console.error("Error loading image:", e), void 0 !== l && l(e)
                                }, y) {
                                var t = new Image;
                                t.onload = function() {
                                    p.current = t, f.current && (A && C && k || O())
                                }, t.src = y
                            } else p.current = null;
                            e.src = n
                        };
                    return (0, o.useEffect)((function() {
                        if (E(), f.current = null, p.current = null, w.current) {
                            var e = w.current.getContext("2d");
                            e && e.clearRect(0, 0, w.current.width, w.current.height)
                        }
                        return m.current = 0, j(),
                            function() {
                                E()
                            }
                    }), [t, n, a]), (0, o.useEffect)((function() {
                        if (f.current) return E(), A && C && k ? Z() : O(),
                            function() {
                                E()
                            }
                    }), [A, C, k, a]), (0, o.useEffect)((function() {
                        j()
                    }), [n, y, a]), (0, o.useEffect)((function() {
                        return function() {
                            E()
                        }
                    }), []), o.createElement("canvas", {
                        width: a,
                        height: a,
                        ref: w
                    })
                };
            h.propTypes = {
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
            const E = h
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
                l = n(80988);
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
        48313: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(83505),
                a = n(67294);
            const o = function(e) {
                var t = e.className,
                    n = void 0 === t ? "" : t,
                    o = e.isLarge,
                    i = void 0 !== o && o,
                    l = (0, r.cx)("tw-bg-black tw-px-2 tw-text-vrc-plus-yellow tw-rounded-full tw-border-vrc-plus-yellow tw-border-solid tw-italic tw-whitespace-nowrap", {
                        "tw-text-[11px] tw-border-2": !i,
                        "tw-text-md tw-border-3": i
                    }, n);
                return a.createElement("output", {
                    className: l,
                    "aria-label": "VRC Plus"
                }, "VRC +")
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
                l = n(80988),
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
            var w = function(e) {
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
            w.propTypes = {
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
            const b = w;

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const E = function(e) {
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
                    return c.createElement(b, {
                        key: e.value,
                        option: h(h({}, e), {}, {
                            type: p
                        }),
                        onFilterChangeCallBack: n,
                        dropdownFilterValues: r
                    })
                }))))
            };

            function y(e, t) {
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
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
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
                    w = g[0],
                    b = g[1],
                    v = (n.eventSources, n.accessTypes),
                    h = n.categories,
                    y = n.days,
                    A = n.platforms,
                    C = n.languages,
                    k = function(e) {
                        if (!f.current.contains(e.target)) return b(!1)
                    };
                (0, c.useEffect)((function() {
                    return w ? window.addEventListener("click", k) : window.removeEventListener("click", k),
                        function() {
                            window.removeEventListener("click", k)
                        }
                }), [w]);
                var N, I, Z = (N = s.Ut.map((function(e) {
                    return e === s.m3.SOURCE ? e : e === s.m3.ACCESSTYPE ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == v ? void 0 : v.includes(e.value)
                        }))
                    }) : e === s.m3.CATEGORY ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == h ? void 0 : h.includes(e.value)
                        }))
                    }) : e === s.m3.DAY ? x(x({}, e), {}, {
                        options: e.options.filter((function(e) {
                            return null == y ? void 0 : y.includes(e.value)
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
                    className: "\n          tw-bg-button-bg tw-border-2 tw-border-solid tw-rounded tw-w-full tw-h-10 tw-cursor-pointer tw-text-highlight\n          ".concat(w ? "tw-border-button-border" : "tw-border-button-bg", "\n        "),
                    type: "button",
                    onClick: function() {
                        b(!w)
                    }
                }, c.createElement(l.$1, {
                    icon: i.G_,
                    className: "tw-mr-1"
                }), " Filters"), c.createElement("div", {
                    className: "\n          tw-w-56 tw-border-button-border tw-bg-option-bg tw-border-2 tw-border-solid tw-mt-2 tw-rounded-sm tw-p-2 tw-pb-3 tw-z-10 tw-max-h-[650px] tw-overflow-y-auto\n          ".concat(w ? "tw-absolute" : "tw-hidden", "\n        ")
                }, c.createElement("ul", {
                    className: "tw-flex tw-flex-col tw-gap-2 tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-select-none"
                }, Z.map((function(e) {
                    return e.options.length > 0 && c.createElement(E, {
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
                Z: () => h
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
                w = n(80988);
            var b = "https://assets.vrchat.com/www/groups/default_banner.png",
                v = "https://assets.vrchat.com/www/groups/default_icon.png";
            const h = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    a = e.isSelectable,
                    i = e.selectCallback,
                    s = void 0 === i ? function() {} : i,
                    u = (0, p.s0)(),
                    g = (0, d.MQ)(),
                    h = (0, o.Z)(g, 2),
                    A = h[0],
                    N = h[1],
                    q = (N.isError, N.isSuccess, function(e) {
                        e.preventDefault(), a ? s(t) : u("/home/group/".concat(null != R ? R : M))
                    }),
                    R = t.groupId,
                    M = t.id,
                    U = t.name,
                    G = t.shortCode,
                    L = t.discriminator,
                    W = t.description,
                    V = t.memberCount,
                    F = t.iconId,
                    $ = t.bannerId,
                    _ = a ? j : S,
                    X = a ? D : z,
                    Y = a ? T : P;
                return f.createElement(_, {
                    to: "/home/group/".concat(null != R ? R : M),
                    "aria-label": "Group Card",
                    className: "tw-border-solid tw-border-grey tw-border hover:tw-border-light-grey tw-transition-colors"
                }, f.createElement(C, null, f.createElement(I, null, f.createElement(B, {
                    src: $ ? (0, m.S6)({
                        fileId: $,
                        width: "256"
                    }) : b,
                    alt: U,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = b
                    }
                }), f.createElement(Z, null, f.createElement(O, {
                    src: F ? (0, m.S6)({
                        fileId: F,
                        width: "256"
                    }) : v,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = v
                    }
                }))), f.createElement(w.X2, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, f.createElement(X, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: q
                }, f.createElement(Y, null, U)))), f.createElement(k, null, f.createElement(x, null, f.createElement(E, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, f.createElement("small", null, W)), f.createElement(y, null, f.createElement("small", null, f.createElement(w.$1, {
                    icon: c.FV
                }), " ", V), f.createElement("small", null, G, ".", L)))), a && f.createElement(w.zx, {
                    onClick: q
                }, "Select"), n && f.createElement(w.zx, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), A({
                            groupId: R,
                            userId: r
                        })
                    }
                }, f.createElement(w.$1, {
                    icon: l.bL
                }), " Unblock"))
            };
            var E = (0, i.Z)("div", {
                    target: "e1nq4ok414"
                })({
                    name: "1x8v68w",
                    styles: "height:58px;>small{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"
                }),
                y = (0, i.Z)("div", {
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
                C = (0, i.Z)(w.JX, {
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
                Z = (0, i.Z)("div", {
                    target: "e1nq4ok48"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                B = (0, i.Z)("img", {
                    target: "e1nq4ok47"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                O = (0, i.Z)("img", {
                    target: "e1nq4ok46"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                j = (0, i.Z)("div", {
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
                z = (0, i.Z)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        },
        61541: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => zr
            });
            var r = n(95603),
                a = n(67294),
                o = n(32981),
                i = n(89250),
                l = n(53637),
                c = n(83505),
                s = n(24975),
                u = n(27484),
                d = n.n(u),
                m = n(68599),
                f = n(54546),
                p = n(85322),
                g = n(3629),
                w = n(42619),
                b = n(87709),
                v = n(65394),
                h = n(92332),
                E = n(85020),
                y = n(75605),
                x = n(24732),
                A = n(18478),
                C = n(7469),
                k = n(80988),
                N = n(50048),
                I = n(48313),
                Z = n(50466),
                B = n(3447),
                O = n(84841),
                j = n(69116),
                S = n(45697),
                T = n.n(S),
                P = n(55206),
                D = n(19531),
                z = n(79655),
                q = n(62437);
            const R = function(e) {
                var t, n, r, o, i, l, c = e.attribution,
                    s = null == c || null === (t = c.creator) || void 0 === t ? void 0 : t.userId,
                    u = null == c || null === (n = c.publisher) || void 0 === n ? void 0 : n.userId,
                    d = (0, q.GR)(s, {
                        skip: !s
                    }).data,
                    m = (0, q.GR)(u, {
                        skip: !u
                    }).data,
                    f = s || (null == c || null === (r = c.creator) || void 0 === r ? void 0 : r.customName),
                    p = u || (null == c || null === (o = c.publisher) || void 0 === o ? void 0 : o.customName);
                if (!f && !p) return null;
                var g = s ? null == d ? void 0 : d.displayName : null == c || null === (i = c.creator) || void 0 === i ? void 0 : i.customName,
                    w = u ? null == m ? void 0 : m.displayName : null == c || null === (l = c.publisher) || void 0 === l ? void 0 : l.customName;
                return a.createElement(a.Fragment, null, f && g && a.createElement("div", {
                    className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                }, a.createElement("h4", {
                    className: "tw-text-base tw-font-normal"
                }, "Created By"), a.createElement("div", {
                    className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                }, s ? a.createElement(z.rU, {
                    to: "/home/user/".concat(s),
                    target: "_blank",
                    rel: "noreferrer"
                }, g) : g)), p && w && a.createElement("div", {
                    className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                }, a.createElement("h4", {
                    className: "tw-text-base tw-font-normal"
                }, "Published By"), a.createElement("div", {
                    className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                }, u ? a.createElement(z.rU, {
                    to: "/home/user/".concat(u),
                    target: "_blank",
                    rel: "noreferrer"
                }, w) : w)))
            };
            var M = n(78542),
                U = function(e) {
                    var t, n, r = e.gallery,
                        o = void 0 === r ? [] : r,
                        i = e.isOpen,
                        l = void 0 !== i && i,
                        c = e.onCloseCallback,
                        s = e.openIndex,
                        u = e.deleteItemCallback,
                        m = void 0 === u ? null : u,
                        S = e.onArchiveCallback,
                        T = void 0 === S ? null : S,
                        z = e.type,
                        q = (0, j.Tu)().user,
                        U = (0, a.useRef)(null),
                        G = (0, a.useState)(s),
                        L = (0, f.Z)(G, 2),
                        W = L[0],
                        V = L[1],
                        F = (0, a.useState)({
                            x: 0,
                            y: 0
                        }),
                        $ = (0, f.Z)(F, 2),
                        _ = $[0],
                        X = $[1],
                        Y = (0, a.useState)(!1),
                        J = (0, f.Z)(Y, 2),
                        H = J[0],
                        K = J[1],
                        Q = (0, a.useState)({
                            x: 0,
                            y: 0
                        }),
                        ee = (0, f.Z)(Q, 2),
                        te = ee[0],
                        ne = ee[1],
                        re = (0, a.useState)(1),
                        ae = (0, f.Z)(re, 2),
                        oe = ae[0],
                        ie = ae[1],
                        le = (0, a.useState)(!1),
                        ce = (0, f.Z)(le, 2),
                        se = ce[0],
                        ue = ce[1],
                        de = (0, a.useState)(!0),
                        me = (0, f.Z)(de, 2),
                        fe = me[0],
                        pe = me[1],
                        ge = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[W]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes(P.Zh.VRC_PLUS_EXCUSIVE)
                        }), [o, W]),
                        we = (0, a.useMemo)((function() {
                            return ge && !(null != q && q.hasVRCPlus)
                        }), [ge, q]),
                        be = (0, a.useMemo)((function() {
                            return W === o.length - 1
                        }), [W, o]),
                        ve = (0, a.useMemo)((function() {
                            return 0 === W
                        }), [W]),
                        he = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[W]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("quantifiable")
                        }), [o, W]),
                        Ee = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[W]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("premium")
                        }), [o, W]),
                        ye = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[W]) || void 0 === e || null === (e = e.metadata) || void 0 === e ? void 0 : e.animated
                        }), [o, W]),
                        xe = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = P._O[z]) || void 0 === e ? void 0 : e.label
                        }), [z]),
                        Ae = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = P._O[z]) || void 0 === e ? void 0 : e.icon
                        }), [z]),
                        Ce = (0, a.useMemo)((function() {
                            return o[W]
                        }), [o, W]);
                    (0, a.useEffect)((function() {
                        0 !== o.length || c()
                    }), [o]), (0, a.useEffect)((function() {
                        V(s)
                    }), [s]);
                    var ke = (0, a.useCallback)((function() {
                            ie(1), X({
                                x: 0,
                                y: 0
                            }), ue(!1), pe(!0), ne({
                                x: 0,
                                y: 0
                            }), c()
                        }), [c]),
                        Ne = (0, a.useMemo)((function() {
                            var e, t, n;
                            return null !== (e = null === (t = o[W]) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== e ? e : null === (n = o[W]) || void 0 === n ? void 0 : n.imageUrl
                        }), [o, W]),
                        Ie = (0, a.useCallback)((function(e) {
                            e.preventDefault();
                            var t = -.01 * e.deltaY;
                            ie((function(e) {
                                return Math.min(Math.max(e + t, .5), 3)
                            }))
                        }), []),
                        Ze = P._O[z],
                        Be = (0, a.useMemo)((function() {
                            var e;
                            return null === (e = o[W]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("archivable")
                        }), [o, W]);
                    (0, a.useEffect)((function() {
                        V(s), pe(!0)
                    }), [s, l]), (0, a.useEffect)((function() {
                        var e = U.current;
                        if (e) return e.addEventListener("wheel", Ie, {
                                passive: !1
                            }),
                            function() {
                                e.removeEventListener("wheel", Ie)
                            }
                    }), [Ie, l, U]), (0, a.useEffect)((function() {
                        var e = function(e) {
                            "Escape" === e.key && ke()
                        };
                        if (l) return window.addEventListener("keydown", e),
                            function() {
                                window.removeEventListener("keydown", e)
                            }
                    }), [l, ke]);
                    var Oe = (0, a.useCallback)((function(e) {
                            e.preventDefault(), K(!0), ne({
                                x: e.clientX - _.x,
                                y: e.clientY - _.y
                            })
                        }), [_]),
                        je = (0, a.useCallback)((function(e) {
                            e.preventDefault(), H && X({
                                x: e.clientX - te.x,
                                y: e.clientY - te.y
                            })
                        }), [H, te]),
                        Se = (0, a.useCallback)((function() {
                            K(!1)
                        }), []),
                        Te = function() {
                            ie(1), X({
                                x: 0,
                                y: 0
                            })
                        };
                    return o.length && l ? a.createElement("div", {
                        className: "tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-[1040] tw-bg-dark-grey-transparent-90"
                    }, a.createElement("div", {
                        className: "tw-fixed lg:tw-flex lg:tw-flex-row tw-justify-between tw-h-full tw-w-screen"
                    }, a.createElement("div", {
                        className: "\n          tw-fixed tw-select-none \n          tw-top-0 tw-left-0 tw-right-0 tw-bottom-0\n          lg:tw-relative\n          ".concat(se ? "tw-w-full" : "lg:tw-w-3/4")
                    }, ge && a.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-left-6 tw-z-50"
                    }, a.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2 tw-border-solid tw-rounded-full tw-px-4 tw-py-2 tw-border tw-border-vrc-plus-yellow tw-w-fit"
                    }, a.createElement(I.Z, null), a.createElement("p", {
                        className: "tw-mb-0 tw-whitespace-nowrap"
                    }, "VRC+ Exclusive"))), a.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-right-6 tw-h-9 tw-w-32 tw-z-50"
                    }, a.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-32"
                    }, a.createElement(N.ZP, {
                        onClick: function() {
                            ie((function(e) {
                                return Math.min(e + .1, 3)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, a.createElement(k.$1, {
                        icon: C.q9
                    })), a.createElement(N.ZP, {
                        onClick: function() {
                            ie((function(e) {
                                return Math.max(e - .1, .5)
                            }))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, a.createElement(k.$1, {
                        icon: A.Wq
                    })), a.createElement(N.ZP, {
                        onClick: function() {
                            return ue(!se)
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9",
                        title: "Toggle fullscreen"
                    }, a.createElement(k.$1, {
                        icon: se ? x.Qb : y.K9
                    })))), a.createElement("div", {
                        className: "tw-flex tw-w-full tw-h-full tw-justify-between tw-items-center"
                    }, a.createElement(N.ZP, {
                        onClick: function() {
                            ve || (V((function(e) {
                                return e - 1
                            })), Te(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(ve ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, a.createElement(k.$1, {
                        icon: E.A3,
                        className: "tw-w-12 tw-h-[60px] tw-ml-4"
                    })), a.createElement("div", {
                        ref: U,
                        className: "tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden gallery-image-container",
                        onMouseDown: Oe,
                        onMouseMove: je,
                        onMouseUp: Se,
                        onMouseLeave: Se
                    }, fe && a.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center tw-absolute tw-inset-0"
                    }, a.createElement(k.$1, {
                        icon: h.LM,
                        spin: !0,
                        color: "#404C58",
                        width: 92
                    })), a.createElement("div", {
                        style: {
                            transform: "translate(".concat(_.x, "px, ").concat(_.y, "px) scale(").concat(oe, ")"),
                            transition: H ? "none" : "transform 0.1s ease-out",
                            cursor: H ? "grabbing" : "grab",
                            opacity: fe ? 0 : 1
                        }
                    }, a.createElement(M.Z, {
                        imageUrl: Ne,
                        metaData: null == Ce ? void 0 : Ce.metadata,
                        onLoad: function() {
                            return pe(!1)
                        },
                        onError: function() {
                            return pe(!1)
                        },
                        isGrayScale: we,
                        size: 400
                    })), a.createElement("div", {
                        className: " tw-absolute tw-flex tw-items-center tw-justify-center tw-gap-5 tw-bottom-auto tw-top-24 lg:tw-top-auto lg:tw-bottom-32  "
                    }, he && a.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#2E333D] tw-rounded-2xl tw-border-solid tw-border-[#2E333D] tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, a.createElement(k.$1, {
                        icon: b.faXmark,
                        width: 18,
                        className: "tw-mr-2"
                    }), a.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, null !== (t = null == Ce ? void 0 : Ce.quantity) && void 0 !== t ? t : 0)), Ee && a.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, a.createElement(k.$1, {
                        icon: O.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), a.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Premium")), ye && a.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, a.createElement(k.$1, {
                        icon: Z.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), a.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Animated")))), a.createElement(N.ZP, {
                        onClick: function() {
                            be || (V((function(e) {
                                return e + 1
                            })), Te(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(be ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, a.createElement(k.$1, {
                        icon: v._t,
                        className: "tw-w-12 tw-h-[60px] tw-mr-4"
                    })))), a.createElement("div", {
                        className: "\n            tw-bg-darker-grey tw-transition-all\n            tw-absolute tw-bottom-0 tw-h-auto\n            lg:tw-relative\n            ".concat(se ? "tw-w-0 tw-p-0 tw-opacity-0" : "tw-w-screen tw-px-5 tw-py-9 lg:tw-w-1/4 lg:tw-min-w-[300px]", "\n          ")
                    }, a.createElement("div", {
                        className: "tw-flex tw-items-baseline tw-justify-between"
                    }, a.createElement("h3", {
                        className: "heading tw-text-white tw-text-left tw-text-2xl"
                    }, a.createElement(k.$1, {
                        icon: Ae,
                        className: "tw-mr-2"
                    }), xe), a.createElement(N.ZP, {
                        className: "tw-w-9 tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        onClick: ke
                    }, a.createElement(k.$1, {
                        icon: b.faXmark
                    }))), a.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-items-baseline sm:tw-justify-between tw-mt-2 sm:tw-mt-10 tw-justify-end tw-items-end"
                    }, a.createElement("div", {
                        className: "tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal tw-hidden sm:tw-block"
                    }, "Manage"), a.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full"
                    }, D.a && Ze.hasConvertToVrcEmojis && a.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full  tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey tw-mr-2 "
                    }, a.createElement(k.$1, {
                        icon: B.default
                    }), "Create Emoji From Sticker"), Ze.hasDelete && a.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Delete ".concat(xe),
                        onClick: function() {
                            null == m || m(Ce)
                        }
                    }, a.createElement(k.$1, {
                        icon: w.$,
                        className: "tw-mr-2"
                    }), "Delete"), Ze.hasArchive && Be && a.createElement(N.ZP, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-h-12 sm:tw-h-9 tw-w-full tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Archive Sticker",
                        onClick: function() {
                            return null == T ? void 0 : T(Ce)
                        }
                    }, a.createElement(k.$1, {
                        icon: g.hV,
                        className: "tw-mr-2"
                    }), "Archive"))), (null == Ce ? void 0 : Ce.description) && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Description"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, Ce.description)), we && a.createElement("a", {
                        className: " tw-my-6 tw-text-white tw-w-full tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-no-underline hover:tw-no-underline tw-border-vrc-plus-yellow tw-border-2 tw-p-4 tw-bg-vrc-plus-yellow/10 tw-border-solid ",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://hello.vrchat.com/vrchatplus?utm_source=vrchatwebapp&utm_medium=VRCPlus_exclusive_item_upsell"
                    }, a.createElement(I.Z, null), a.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-mx-2 tw-text-lg"
                    }, "Unlock With VRC+")), (null == Ce || null === (n = Ce.collections) || void 0 === n ? void 0 : n.length) > 0 && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Collections"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, Ce.collections.map((function(e) {
                        return e
                    })).join(", "))), a.createElement(R, {
                        attribution: null == Ce ? void 0 : Ce.attribution
                    }), (null == Ce ? void 0 : Ce.created_at) && a.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, a.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Date Created"), a.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, a.createElement(k.$1, {
                        icon: p.fT,
                        className: "tw-mr-2"
                    }), d()(null == Ce ? void 0 : Ce.created_at).format("ll, h:mm A"))))))) : null
                };
            const G = U;
            U.propTypes = {
                gallery: T().array.isRequired,
                isOpen: T().bool.isRequired,
                onCloseCallback: T().func.isRequired,
                openIndex: T().number.isRequired,
                deleteItemCallback: T().func,
                onArchiveCallback: T().func,
                type: T().string
            };
            const L = function() {
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
                return a.createElement(G, {
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
            var W = n(28964),
                V = n.n(W),
                F = n(15832),
                $ = n(22202),
                _ = n(34698);
            const X = function() {
                var e = (0, $.IB)().data,
                    t = (0, a.useState)(!1),
                    n = (0, f.Z)(t, 2),
                    r = n[0],
                    o = n[1],
                    i = (0, F._)("tutorialInventorySeen", !1),
                    l = (0, f.Z)(i, 2),
                    c = l[0],
                    s = l[1];
                (0, a.useEffect)((function() {
                    o(!c)
                }), []);
                return r && e ? a.createElement("div", {
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
                    src: V(),
                    alt: "Gallery has now been relocated to Inventory"
                }), a.createElement("div", {
                    className: "tw-flex tw-justify-end tw-mt-4"
                }, a.createElement(_.Z, {
                    className: "tw-bg-button-bg-grey tw-text-white tw-px-8 tw-w-full sm:tw-w-auto",
                    onClick: function() {
                        o(!1), s(!0)
                    }
                }, "Got it"))))) : null
            };
            var Y = n(42138),
                J = n(4942),
                H = n(57982),
                K = n(40098),
                Q = n(16993),
                ee = n(43907),
                te = n(86216),
                ne = n(64258),
                re = n(98185),
                ae = n(37024),
                oe = n(88081),
                ie = n(6281),
                le = n(64358),
                ce = n(42938);

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0, J.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var de = function(e) {
                var t = e.filters,
                    n = void 0 === t ? null : t,
                    r = e.userGroups,
                    o = e.filterRemoveCallback,
                    i = void 0 === o ? function() {} : o;
                if (null === n || 0 === n.length) return null;
                var l = function(e) {
                    var t = ce.Ut.flatMap((function(t) {
                            var n = t.dataKey,
                                r = e[n] || [];
                            return t.options.filter((function(e) {
                                return r.includes(e.value)
                            })).map((function(e) {
                                return ue(ue({}, e), {}, {
                                    dataKey: n
                                })
                            }))
                        })),
                        a = (0, ce.Ld)({
                            filters: n,
                            userGroups: r
                        });
                    if (null === a) return t;
                    var o = a.options.map((function(e) {
                        var t = e.value,
                            n = r.find((function(e) {
                                return e.groupId === t
                            }));
                        return ue(ue({}, e), {}, {
                            thumbnail: (0, le.S6)({
                                fileUrl: null == n ? void 0 : n.iconUrl,
                                width: "256"
                            }),
                            dataKey: "groups"
                        })
                    }));
                    return [].concat((0, Y.Z)(t), (0, Y.Z)(o))
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
                    }, (null == e ? void 0 : e.icon) && a.createElement(k.$1, {
                        icon: e.icon,
                        color: e.color
                    }), (null == e ? void 0 : e.thumbnail) && a.createElement("div", {
                        className: "tw-w-6 tw-h-6 tw-bg-no-repeat tw-bg-cover tw-rounded-full tw-bg-center",
                        title: e.label,
                        style: {
                            backgroundImage: "url(".concat(e.thumbnail, ")")
                        }
                    }), a.createElement("span", {
                        className: "tw-ml-2 tw-mr-2 tw-max-w-[250px] tw-text-ellipsis tw-overflow-hidden tw-truncate"
                    }, e.label)), a.createElement("div", null, a.createElement("button", {
                        type: "button",
                        className: " tw-border-0 tw-rounded-sm tw-bg-transparent tw-text-white tw-leading-none ",
                        "aria-label": "remove",
                        onClick: function() {
                            i(e)
                        }
                    }, a.createElement(k.$1, {
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
            de.propTypes = {
                filters: T().object,
                group: T().array
            };
            const me = de;
            var fe = n(52699),
                pe = n(41568),
                ge = n(24752),
                we = n(15861),
                be = n(64687),
                ve = n.n(be),
                he = n(43862),
                Ee = n(93261),
                ye = n(78666);

            function xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xe(Object(n), !0).forEach((function(t) {
                        (0, J.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ce = function(e) {
                var t = e.groupSelectCallback,
                    n = void 0 === t ? function() {} : t,
                    r = (0, a.useState)(""),
                    o = (0, f.Z)(r, 2),
                    i = o[0],
                    l = o[1],
                    c = (0, j.Nr)(i),
                    s = (0, j.Tu)().user,
                    u = void 0 === s ? null : s,
                    d = (0, Ee.nz)(),
                    m = (0, f.Z)(d, 1)[0],
                    p = (0, Ee.dj)({
                        userId: null == u ? void 0 : u.id
                    }, {
                        skip: null === u
                    }),
                    g = p.data,
                    w = void 0 === g ? null : g,
                    b = p.isFetching,
                    v = p.isSuccess,
                    h = (0, Ee.v5)({
                        userId: null == u ? void 0 : u.id
                    }),
                    E = h.data,
                    y = void 0 === E ? null : E,
                    x = h.isFetching,
                    A = h.isSuccess,
                    C = (0, a.useMemo)((function() {
                        return null === y || null === w ? [] : A && v ? w.filter((function(e) {
                            var t = e.groupId,
                                n = y[t];
                            return n && (n.includes("*") || n.includes("group-calendar-manage"))
                        })) : []
                    }), [y, w]),
                    N = (0, a.useMemo)((function() {
                        return null === C ? [] : "" === i ? C : null == C ? void 0 : C.filter((function(e) {
                            return e.name.toLowerCase().includes(i) || e.shortCode.toLowerCase().includes(i) || e.discriminator.toLowerCase().includes(i) || e.groupId.toLowerCase().includes(i)
                        }))
                    }), [C, c]);
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col tw-w-full"
                }, a.createElement("h2", {
                    className: "tw-text-xl tw-text-center tw-w-full"
                }, "For which group would you like to create this event?"), a.createElement("p", {
                    className: "tw-text-sm tw-text-center tw-w-full"
                }, "You will see only the groups for which you have permission to create events."), a.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center"
                }, a.createElement(k.II, {
                    "aria-label": "Enter a group short code, name, or url",
                    type: "text",
                    id: "search-transaction-list",
                    placeholder: "Enter a group short code, name, or url",
                    className: "",
                    leftIcon: a.createElement(k.$1, {
                        icon: H.faMagnifyingGlass,
                        className: "tw-mr-1"
                    }),
                    onChange: function(e) {
                        l(e.target.value)
                    }
                }))), (b || x) && a.createElement("div", {
                    className: "tw-pt-20 tw-flex tw-items-center tw-justify-center"
                }, a.createElement(he.Z, {
                    size: "5x"
                })), !b && !x && 0 === (null == N ? void 0 : N.length) && a.createElement("div", {
                    className: "tw-text-center tw-text-lg tw-mt-5"
                }, "No groups found for which you can create events."), a.createElement("div", {
                    className: "tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-5"
                }, null == N ? void 0 : N.map((function(e) {
                    return a.createElement(ye.Z, {
                        key: e.id,
                        group: e,
                        isSelectable: !0,
                        selectCallback: function() {
                            var e = (0, we.Z)(ve().mark((function e(t) {
                                var r;
                                return ve().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m(Ae({}, t));
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
            Ce.propTypes = {};
            const ke = Ce;
            var Ne = n(93379),
                Ie = n.n(Ne),
                Ze = n(7795),
                Be = n.n(Ze),
                Oe = n(90569),
                je = n.n(Oe),
                Se = n(3565),
                Te = n.n(Se),
                Pe = n(19216),
                De = n.n(Pe),
                ze = n(44589),
                qe = n.n(ze),
                Re = n(46461),
                Me = {};
            Me.styleTagTransform = qe(), Me.setAttributes = Te(), Me.insert = je().bind(null, "head"), Me.domAPI = Be(), Me.insertStyleElement = De();
            Ie()(Re.Z, Me);
            Re.Z && Re.Z.locals && Re.Z.locals;

            function Ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ue(Object(n), !0).forEach((function(t) {
                        (0, J.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Le = {
                    eventSources: [],
                    accessTypes: [],
                    categories: [],
                    days: [],
                    platforms: [],
                    languages: [],
                    groups: []
                },
                We = (0, a.forwardRef)((function(e, t) {
                    var n = (0, o.I0)(),
                        r = (0, z.lr)(),
                        i = (0, f.Z)(r, 1)[0],
                        l = (0, a.useState)(""),
                        c = (0, f.Z)(l, 2),
                        s = c[0],
                        u = c[1],
                        m = (0, j.Nr)(s),
                        p = (0, a.useRef)(null),
                        g = (0, a.useRef)(null),
                        w = (0, a.useState)(null),
                        b = (0, f.Z)(w, 2),
                        v = b[0],
                        h = b[1],
                        E = (0, a.useState)(null),
                        y = (0, f.Z)(E, 2),
                        x = y[0],
                        A = y[1],
                        C = (0, a.useState)(!0),
                        N = (0, f.Z)(C, 2),
                        I = N[0],
                        Z = N[1],
                        B = (0, a.useState)(!1),
                        O = (0, f.Z)(B, 2),
                        S = O[0],
                        T = O[1],
                        P = (0, a.useState)(d()()),
                        D = (0, f.Z)(P, 2),
                        q = D[0],
                        R = D[1],
                        M = (0, a.useState)(!1),
                        U = (0, f.Z)(M, 2),
                        G = U[0],
                        L = U[1],
                        W = (0, a.useState)(null),
                        V = (0, f.Z)(W, 2),
                        F = V[0],
                        $ = V[1],
                        _ = (0, a.useState)(Le),
                        X = (0, f.Z)(_, 2),
                        le = X[0],
                        ce = X[1],
                        se = (0, a.useMemo)((function() {
                            return (0, ie.sm)("default-calendar-mode", {
                                value: "month"
                            })
                        }), []),
                        ue = (0, j.Tu)().user,
                        de = void 0 === ue ? null : ue,
                        we = !(null == de || !de.id),
                        be = (0, j.pc)() && !1,
                        ve = i.get("view"),
                        he = (0, a.useMemo)((function() {
                            var e;
                            switch (ve) {
                                case "day":
                                    return "timeGridDay";
                                case "week":
                                    return "timeGridWeek";
                                case "month":
                                    return "dayGridMonth";
                                default:
                                    return null !== (e = {
                                        month: "dayGridMonth",
                                        week: "timeGridWeek"
                                    } [se.value]) && void 0 !== e ? e : "dayGridMonth"
                            }
                        }), [ve, se]);
                    (0, a.useEffect)((function() {
                        (0, ie.j)("Calendar_Open", {
                            userId: null == de ? void 0 : de.id
                        });
                        var e = function() {
                                return Z(!0)
                            },
                            t = function(e) {
                                g.current && !g.current.contains(e.target) && Z(!0)
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
                        if (null !== v) {
                            var e, t, n, r, a, o = null == g ? void 0 : g.current;
                            return o ? (e = o, t = window.innerWidth, n = v.clientX > t / 2, r = n && v.clientX - 340 < 0, a = !n && v.clientX + 340 > t, r || a ? (e.style.left = "auto", e.style.right = "auto") : n ? (e.style.left = "auto", e.style.right = "".concat(t - v.clientX + 20, "px")) : (e.style.left = "".concat((null == v ? void 0 : v.clientX) + 20, "px"), e.style.right = "auto"), void
                                function(e) {
                                    var t = window.innerHeight;
                                    t - v.clientY < 350 ? g.current.style.top = "".concat(t - 400, "px") : e.style.top = "".concat((null == v ? void 0 : v.clientY) - 100, "px")
                                }(o)) : void 0
                        }
                    }), [v]), (0, a.useEffect)((function() {}), [le]);
                    var Ee = (0, oe.bT)({
                            date: q,
                            userId: null == de ? void 0 : de.id,
                            eventSources: le.eventSources
                        }, {
                            skip: null === de
                        }),
                        ye = Ee.data,
                        xe = void 0 === ye ? {
                            events: [],
                            groups: []
                        } : ye,
                        Ae = Ee.isFetching,
                        Ce = Ee.isSuccess,
                        Ne = Ee.isError,
                        Ie = Ee.error,
                        Ze = (0, oe.bT)({
                            date: q.add(1, "month"),
                            userId: null == de ? void 0 : de.id,
                            eventSources: le.eventSources
                        }, {
                            skip: null === de || !S
                        }),
                        Be = Ze.data,
                        Oe = void 0 === Be ? {
                            events: [],
                            groups: []
                        } : Be,
                        je = Ze.isFetching,
                        Se = Ze.isSuccess,
                        Te = Ze.isError,
                        Pe = Ze.error;
                    (0, a.useEffect)((function() {
                        if (Ne || Te) {
                            var e, t, r = Ie || Pe;
                            n((0, ne.d)({
                                title: "Failed to get calendar events",
                                message: null !== (e = null == r || null === (t = r.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown Error",
                                color: "danger",
                                timeout: 5e3
                            }))
                        }
                    }), [Ne, Te]);
                    var De = function(e) {
                            var t = d()(e.endsAt).diff(d()(e.startsAt), "day") > 0;
                            return Ge(Ge({}, e), {}, {
                                id: e.id,
                                start: e.startsAt,
                                end: t ? d()(e.endsAt).add(1, "day").format() : e.endsAt,
                                allDay: t
                            })
                        },
                        ze = function() {
                            return Ge({
                                searchTerm: m
                            }, le)
                        },
                        qe = (0, a.useMemo)((function() {
                            var e = xe.events,
                                t = Oe.events,
                                n = S ? [].concat((0, Y.Z)(e), (0, Y.Z)(t)) : e;
                            return n && 0 !== n.length ? {
                                eventSources: ge.o9.map((function(e) {
                                    return e.value
                                })),
                                accessTypes: n.reduce((function(e, t) {
                                    return e.includes(t.accessType) || e.push(t.accessType), e
                                }), []),
                                categories: n.reduce((function(e, t) {
                                    return e.includes(t.category) || e.push(t.category), e
                                }), []),
                                days: n.reduce((function(e, t) {
                                    var n = d()(t.startsAt),
                                        r = d()(t.endsAt).diff(n, "day"),
                                        a = Array.from({
                                            length: r + 1
                                        }, (function(e, t) {
                                            return n.add(t, "day").day()
                                        }));
                                    return Array.from(new Set([].concat((0, Y.Z)(e), a)))
                                }), []),
                                platforms: (0, Y.Z)(new Set(n.flatMap((function(e) {
                                    return e.platforms
                                })))),
                                languages: (0, Y.Z)(new Set(n.flatMap((function(e) {
                                    return e.languages
                                })))),
                                groups: n.reduce((function(e, t) {
                                    return e.includes(t.ownerId) ? e : [].concat((0, Y.Z)(e), [t.ownerId])
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
                        }), [xe, Oe, S]),
                        Re = (0, a.useMemo)((function() {
                            var e = xe.events,
                                t = Oe.events,
                                n = S ? [].concat((0, Y.Z)(e), (0, Y.Z)(t)) : e;
                            if (!n || 0 === n.length) return [];
                            var r = ze();
                            if (null === r) return n.map(De);
                            return n.filter((function(e) {
                                return !(!e || !e.id) && (!(e.deletedAt && !be) && (!("" !== r.searchTerm && !e.title.toLowerCase().includes(r.searchTerm.toLowerCase()) && !e.description.toLowerCase().includes(r.searchTerm.toLowerCase())) && (!(r.accessTypes.length > 0 && !r.accessTypes.includes(e.accessType)) && (!(r.categories.length > 0 && !r.categories.includes(e.category)) && (!(r.days.length > 0 && (t = {
                                    title: e.title,
                                    daysOfWeek: r.days,
                                    start: e.startsAt,
                                    end: e.endsAt
                                }, n = t.daysOfWeek, a = t.start, o = t.end, t.title, i = d()(a), l = d()(o), !n.some((function(e) {
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
                                })))) && (!(r.platforms.length > 0 && !r.platforms.some((function(t) {
                                    return e.platforms.includes(t)
                                }))) && (!(r.languages.length > 0 && !r.languages.some((function(t) {
                                    return e.languages.includes(t)
                                }))) && !(r.groups.length > 0 && !r.groups.includes(e.ownerId)))))))));
                                var t, n, a, o, i, l
                            })).map(De)
                        }), [m, xe, Oe, S, le]);
                    (0, a.useImperativeHandle)(t, (function() {
                        return {
                            updateCalendarSize: function() {
                                if (null !== p) {
                                    var e = p.current.getApi();
                                    Z(!0), e.updateSize()
                                }
                            }
                        }
                    }), []);
                    var Me = function(e) {
                            var t;
                            Z(!0);
                            var n = p.current.getApi(),
                                r = null !== (t = e.date) && void 0 !== t ? t : e;
                            e.date && r.setMinutes(r.getMinutes() + r.getTimezoneOffset()), n.changeView("timeGridDay", r)
                        },
                        Ue = Ae || S && je,
                        We = function(e) {
                            return {
                                eventId: e.id,
                                ownerId: e.ownerId,
                                userId: null == de ? void 0 : de.id,
                                isUserLoggedIn: we,
                                eventName: e.title,
                                eventLink: window.apiUrl("/home/group/event/".concat(e.ownerId, "/").concat(e.id)),
                                eventStartTime: e.startsAt,
                                eventEndTime: e.endsAt,
                                eventCategory: e.category,
                                eventPlatform: e.platforms,
                                eventDescription: e.description,
                                eventHasImage: !!e.imageUrl,
                                eventVisibility: e.accessType,
                                eventLanguages: e.languages,
                                eventTags: e.tags
                            }
                        },
                        Ve = (0, a.useMemo)((function() {
                            return S ? [].concat((0, Y.Z)(xe.groups), (0, Y.Z)(Oe.groups)) : xe.groups
                        }), [xe, Oe, S]);
                    return a.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, a.createElement(k.$4, null, "Calendar"), a.createElement("div", {
                        className: "tw-mb-4 tw-flex tw-justify-between tw-flex-row"
                    }, a.createElement("h2", null, "Calendar"), a.createElement(k.zx, {
                        className: "tw-w-52 tw-h-9",
                        type: "button",
                        onClick: function() {
                            $(null), L(!0)
                        }
                    }, a.createElement(k.$1, {
                        icon: K.r8,
                        className: "tw-mr-1"
                    }), " Create Event")), Ue && a.createElement("div", {
                        className: " tw-w-full tw-h-full  tw-left-0 tw-top-0 tw-absolute  tw-flex tw-justify-center tw-items-center tw-bg-dark-grey-transparent tw-z-10 "
                    }, a.createElement(re.Z, {
                        loading: !0
                    })), a.createElement("div", {
                        className: "tw-mb-10 tw-bg-[#181b1f] tw-rounded tw-p-5 fc tw-relative"
                    }, Ce && (!S || Se) && a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "tw-flex tw-justify-between tw-flex-row"
                    }, a.createElement(fe.Z, {
                        possibleFilters: qe,
                        onFilterChangeCallBack: function(e) {
                            return function(e) {
                                if (e.isChecked) {
                                    var t = (0, Y.Z)(new Set([].concat((0, Y.Z)(le[e.type]), [e.value])));
                                    return ce(Ge(Ge({}, le), {}, (0, J.Z)({}, e.type, t)))
                                }
                                if (!e.isChecked) {
                                    var n = le[e.type].filter((function(t) {
                                        return t !== e.value
                                    }));
                                    return ce(Ge(Ge({}, le), {}, (0, J.Z)({}, e.type, n)))
                                }
                            }(e)
                        },
                        userGroups: Ve,
                        dropdownFilterValues: le
                    }), a.createElement(k.II, {
                        "aria-label": "Search by event name or url",
                        type: "text",
                        id: "search-transaction-list",
                        placeholder: "Search by event name or url",
                        className: "tw-md-1 tw-w-1/2",
                        leftIcon: a.createElement(k.$1, {
                            icon: H.faMagnifyingGlass,
                            className: "tw-mr-1"
                        }),
                        onChange: function(e) {
                            u(e.target.value)
                        }
                    })), a.createElement("div", {
                        className: "tw-min-h-[70px] tw-transition-all"
                    }, a.createElement(me, {
                        userGroups: Ve,
                        filters: ze(),
                        filterRemoveCallback: function(e) {
                            if (null === e) return ce(Le);
                            var t = le[e.dataKey].filter((function(t) {
                                return t !== e.value
                            }));
                            ce(Ge(Ge({}, le), {}, (0, J.Z)({}, e.dataKey, t)))
                        }
                    }))), a.createElement(ee.Z, {
                        ref: p,
                        plugins: [Q.Z, te.Z],
                        initialView: he,
                        showNonCurrentDates: !1,
                        events: Re,
                        dayMaxEventRows: !0,
                        displayEventTime: !1,
                        nowIndicator: !0,
                        dayHeaderDidMount: function(e) {
                            e.el.style.border = "none"
                        },
                        contentHeight: 900,
                        viewDidMount: function(e) {
                            var t, n = e.el;
                            e._view;
                            (t = n).querySelector(".fc-scrollgrid").style.border = "none", t.querySelector(".fc-theme-standard th").style.border = "none", t.querySelector(".fc-scrollgrid-section-liquid > td").style.border = "1px solid var(--fc-border-color)", t.querySelector(".fc-scrollgrid-section-liquid > td").style.borderRadius = "8px"
                        },
                        eventClassNames: function() {
                            return "tw-rounded-lg tw-text-sm tw-shadow-black tw-shadow-md tw-border tw-border-solid tw-border-black tw-border-opacity-50"
                        },
                        fixedWeekCount: !1,
                        headerToolbar: {
                            left: "prev,today,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        },
                        navLinks: !0,
                        navLinkDayClick: Me,
                        eventClick: function(e) {
                            var t = e.event,
                                n = (e.el, e.jsEvent),
                                r = (e.view, t.toPlainObject()),
                                a = Ge(Ge({}, r), r.extendedProps);
                            Z(!1), h(n), A(a), (0, ie.j)("Event_Previewed", We(a))
                        },
                        moreLinkClick: Me,
                        datesSet: function(e) {
                            var t = e.view,
                                n = d()(t.currentStart).startOf("month").add(1, "day"),
                                r = d()(t.currentEnd).add(-1, "minute"),
                                a = n.month() !== r.month();
                            T(a), R(n), Z(!0)
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
                        ref: g,
                        className: "\n            tw-w-[340px] tw-duration-100 fc-popover tw-transition-all tw-bg-transparent\n            ".concat(I ? "tw-hidden" : "tw-fixed", "\n          ")
                    }, x && a.createElement(ae.ZP, {
                        isDialog: !0,
                        event: x,
                        onCloseCallback: function() {
                            return Z(!0)
                        }
                    }))), a.createElement(k.u_, {
                        title: "Create Event (".concat(null === F ? "1" : "2", "/2)"),
                        isVisible: G,
                        onClose: function() {
                            return L(!1)
                        },
                        className: "tw-w-full",
                        slim: !0,
                        width: "100%"
                    }, a.createElement("div", {
                        className: "tw-block tw-w-full"
                    }, null === F ? a.createElement(ke, {
                        groupSelectCallback: $
                    }) : a.createElement(pe.default, {
                        group: F,
                        closeModalCallback: function() {
                            return L(!1)
                        }
                    }))))
                }));
            const Ve = We;
            var Fe = n(89902),
                $e = n(4965),
                _e = n(47810),
                Xe = n(95305),
                Ye = n(66736),
                Je = n(12227),
                He = (n(46326), n(72528));
            const Ke = function(e) {
                var t, n, r, o = e.navToggleCallback,
                    l = void 0 === o ? function() {} : o,
                    s = (0, j.Tu)(),
                    u = s.user,
                    d = s.isFetching,
                    m = s.isLoading,
                    p = ((0, i.s0)(), (0, $.q7)().data, a.useState(!1)),
                    g = (0, f.Z)(p, 2),
                    w = (g[0], g[1], (0, Ye.Fi)({
                        userId: u.id
                    }, {
                        skip: !u,
                        refetchOnMountOrArgChange: !0
                    })),
                    b = w.data,
                    v = (void 0 === b ? {} : b).balance,
                    h = w.isFetching;
                if (!u || m) return null;
                var E = function() {
                        l(!1)
                    },
                    y = "online" === u.state,
                    x = (null === (t = u.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? u.profilePicOverride : u.currentAvatarThumbnailImageUrl,
                    A = (0, le.S6)({
                        fileUrl: x,
                        width: "1024"
                    }),
                    C = u.userIcon ? (0, le.S6)({
                        fileUrl: u.userIcon,
                        width: "1024"
                    }) : null;
                return a.createElement(Qe, {
                    className: "mx-0 mb-2"
                }, a.createElement(lt, {
                    className: "d-flex mx-0 align-items-center"
                }, a.createElement(ct, {
                    title: (0, Je.Tq)(u.status, !0),
                    statusColor: "var(--status-".concat((0, Je.Tq)(u.status), ")")
                }), a.createElement(z.rU, {
                    to: "/home/user/".concat(u.id),
                    onClick: E
                }, u.displayName)), a.createElement(st, null, d ? a.createElement(k.UU, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : a.createElement(z.rU, {
                    to: "/home/user/".concat(u.id),
                    "aria-label": "User Status",
                    onClick: E
                }, u.statusDescription)), a.createElement(et, null, a.createElement(nt, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(u.id),
                    url: A,
                    level: (0, Je.FR)({
                        tags: u.tags
                    }),
                    onClick: E
                }, C && a.createElement(at, {
                    type: "button",
                    "aria-label": "Go To Gallery"
                }, a.createElement(ot, {
                    "aria-label": "User Icon",
                    url: C,
                    level: (0, Je.FR)({
                        tags: u.tags
                    })
                })), a.createElement(rt, null)), !(null === (n = u.badges) || void 0 === n || !n.length) && a.createElement(ft, null, u.badges.filter((function(e) {
                    return e.showcased && !e.hidden
                })).slice(0, 3).sort((function(e, t) {
                    return new Date(t.assignedAt) - new Date(e.assignedAt)
                })).map((function(e) {
                    return a.createElement(tt, {
                        role: "note",
                        "aria-label": e.badgeName,
                        key: e.badgeId,
                        image: e.badgeImageUrl,
                        pettable: "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId
                    })
                }))), a.createElement(it, {
                    className: "px-2 pt-1 pb-2 mx-0"
                }, a.createElement(mt, {
                    className: "relative justify-content-end"
                }, h ? a.createElement(k.UU, {
                    width: "4rem",
                    height: "1.5rem",
                    style: {
                        borderRadius: 14
                    }
                }) : a.createElement(dt, {
                    to: "/home/marketplace/wallet",
                    onClick: E
                }, a.createElement(k.b5, null), null !== (r = " ".concat(null == v ? void 0 : v.toLocaleString())) && void 0 !== r ? r : " ???")), !1, a.createElement(gt, null, a.createElement(z.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: E
                }, a.createElement(k.$1, {
                    icon: _e.Kb
                }), "  Account Settings")))), a.createElement(et, {
                    className: (0, c.iv)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, y && (null == u ? void 0 : u.location) && !["traveling", "offline"].includes(null == u ? void 0 : u.location) && a.createElement(ut, {
                    className: "mx-0"
                }, a.createElement(He.Z, {
                    location: u.location,
                    userId: u.id,
                    currentUser: u,
                    size: "normal"
                }))))
            };
            var Qe = (0, $e.Z)("div", {
                    target: "esgak1l16"
                })(""),
                et = (0, $e.Z)("div", {
                    target: "esgak1l15"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                tt = (0, $e.Z)("div", {
                    target: "esgak1l14"
                })("width:36px;height:36px;margin:0!important;padding:6px;border-radius:50%;z-index:3;background-color:rgba(17, 17, 17, 0.8);background-image:url(", (function(e) {
                    return e.image
                }), ");background-size:24px;background-repeat:no-repeat;background-position:center;", (function(e) {
                    return e.pettable && "\n    cursor: grab;\n\n    &:active {\n      cursor: grabbing;\n    }\n  "
                }), ";"),
                nt = (0, $e.Z)(z.rU, {
                    target: "esgak1l13"
                })("display:flex;height:0;padding-top:56.25%;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");position:relative;cursor:pointer;background-color:#05191d;"),
                rt = (0, $e.Z)("div", {
                    target: "esgak1l12"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                at = (0, $e.Z)("button", {
                    target: "esgak1l11"
                })({
                    name: "1tt4l1h",
                    styles: "border:none;background:none;padding:0;display:flex;position:absolute;bottom:-40px;left:10px;width:80px;align-items:center;z-index:3;color:white;&:hover{div:last-child{opacity:1;}svg{opacity:1;}}"
                }),
                ot = (0, $e.Z)("div", {
                    target: "esgak1l10"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                it = (0, $e.Z)(Xe.Z, {
                    target: "esgak1l9"
                })({
                    name: "1dt3z6y",
                    styles: "background-color:#07242b"
                }),
                lt = (0, $e.Z)("div", {
                    target: "esgak1l8"
                })({
                    name: "ab3jnw",
                    styles: "font-weight:600;justify-content:center;a{color:var(--bs-primary);font-size:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:240px;}"
                }),
                ct = (0, $e.Z)("div", {
                    target: "esgak1l7"
                })("width:15px;height:15px;border-radius:100%;background-color:", (function(e) {
                    return e.statusColor
                }), ";margin-right:10px;"),
                st = (0, $e.Z)("div", {
                    target: "esgak1l6"
                })({
                    name: "1xmid75",
                    styles: "width:100%;text-align:center;display:flex;align-items:center;justify-content:center;padding:2px 20px;font-weight:bold;overflow:hidden;text-overflow:ellipsis"
                }),
                ut = (0, $e.Z)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                dt = (0, $e.Z)(z.rU, {
                    target: "esgak1l4"
                })("color:white;background-color:rgba(17, 17, 17, 0.8);padding:4px 6px;line-height:1em;border-radius:14px;>", k.b5, "{color:#6ae3f9;}&:hover{color:#737372;text-decoration:none;>", k.b5, "{color:#064b5c;}}"),
                mt = (0, $e.Z)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                ft = (0, $e.Z)(mt, {
                    target: "esgak1l2"
                })({
                    name: "1nld4z4",
                    styles: "width:100%;height:45px;margin-top:-45px;display:flex;justify-content:flex-end;position:relative;padding:4px;gap:4px"
                }),
                pt = (0, $e.Z)(mt, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                gt = (0, $e.Z)(pt, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                wt = n(14097),
                bt = n(83183),
                vt = n(57026),
                ht = n(89148),
                Et = n(15369),
                yt = n(13461),
                xt = n(66007),
                At = n(2723),
                Ct = n(40767),
                kt = n(81511),
                Nt = n(16688),
                It = n(46450),
                Zt = n(774),
                Bt = n(12529),
                Ot = n(64240),
                jt = n(43701),
                St = n(70396),
                Tt = n(7975),
                Pt = n(70440),
                Dt = n(96165),
                zt = n(54492),
                qt = n(91435),
                Rt = n(49866),
                Mt = n(57245),
                Ut = n(93118),
                Gt = n(99631),
                Lt = n(51970),
                Wt = n(28959),
                Vt = n(67922),
                Ft = n(87589),
                $t = n(62455),
                _t = n(25248),
                Xt = n(50249),
                Yt = n(7503),
                Jt = n(98648),
                Ht = n(91158),
                Kt = n(48566),
                Qt = n(8256),
                en = n(28055),
                tn = n(58877),
                nn = n(25062),
                rn = n(93046),
                an = n.n(rn),
                on = n(17219),
                ln = n(91492),
                cn = n(31358);
            const sn = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    r = e.closeDialog,
                    i = (e.isGroups, (0, o.v9)((function(e) {
                        return e.notifications.notifications
                    })).slice(0, n) || []);
                return a.createElement("div", {
                    className: "mt-2"
                }, i.map((function(e) {
                    return a.createElement(cn.Z, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: r
                    })
                })))
            };
            n(64230);
            var un = n(76938),
                dn = n(73670),
                mn = n(38824),
                fn = n(87261),
                pn = n(3126),
                gn = n(25411);

            function wn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function bn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wn(Object(n), !0).forEach((function(t) {
                        (0, J.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var vn = function(e) {
                var t = e.onChangeCallback,
                    n = (0, o.I0)(),
                    r = (0, a.useState)(!1),
                    i = (0, f.Z)(r, 2),
                    l = i[0],
                    c = i[1],
                    s = (0, a.useState)(!1),
                    u = (0, f.Z)(s, 2),
                    d = u[0],
                    m = u[1],
                    p = (0, a.useState)("none"),
                    g = (0, f.Z)(p, 2),
                    w = g[0],
                    b = g[1],
                    v = (0, a.useState)([]),
                    h = (0, f.Z)(v, 2),
                    E = h[0],
                    y = h[1],
                    x = (0, a.useState)("relevance"),
                    A = (0, f.Z)(x, 2),
                    C = A[0],
                    k = A[1],
                    N = (0, o.v9)((function(e) {
                        return e.search.autoRedirect
                    }));
                (0, a.useEffect)((function() {
                    var e = {
                        dropdownToggle: l,
                        fuzzyToggle: d,
                        orderFilter: w,
                        searchableFilters: E,
                        sortByFilter: C
                    };
                    (0, ie.j)("Web_Mod_SearchFilterChange", bn(bn({}, e), {}, {
                        autoRedirect: N
                    })), t(e)
                }), [N, d, w, E, C]);
                var I = function(e) {
                    return e.target.checked ? y([].concat((0, Y.Z)(E), [e.target.name])) : y(E.filter((function(t) {
                        return t !== e.target.name
                    })))
                };
                return a.createElement(Kt.Z, {
                    isOpen: l,
                    toggle: function() {
                        return c(!l)
                    }
                }, a.createElement(Qt.Z, {
                    caret: !0
                }, "Filters"), a.createElement(en.Z, {
                    className: "text-white p-0 bg-dark pb-2"
                }, a.createElement(mn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), a.createElement("div", {
                    className: "mx-3 text-white"
                }, a.createElement(fn.Z, {
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
                }, "Trust Rank"))), a.createElement(mn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), a.createElement("div", {
                    className: "mx-3 text-white"
                }, a.createElement(fn.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return b(t)
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
                }, "Descending"))), a.createElement(mn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: E.includes("displayName"),
                    onChange: I,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: E.includes("email"),
                    onChange: I,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: E.includes("username"),
                    onChange: I,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: E.includes("pastEmails"),
                    onChange: I,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), a.createElement(mn.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: N,
                    onChange: function() {
                        return n((0, gn.Tr)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), a.createElement("div", {
                    className: "ms-3 text-white"
                }, a.createElement("div", null, a.createElement(fn.Z, {
                    checked: d,
                    onChange: function() {
                        return m(!d)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), a.createElement(pn.Z, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            vn.propTypes = {
                onChangeCallback: T().func.isRequired
            };
            const hn = function() {
                var e = (0, i.s0)(),
                    t = (0, i.TH)(),
                    n = "users",
                    r = "";
                t.pathname.startsWith("/home/search/") && (n = t.pathname.substring(13).split("/")[0], r = decodeURIComponent(t.pathname.substring("/home/search/".concat(n, "/").length)));
                var l = (0, o.v9)(un.y),
                    s = (0, a.useState)("/home/search/".concat(n, "/")),
                    u = (0, f.Z)(s, 2),
                    d = u[0],
                    m = u[1],
                    p = (0, z.lr)(),
                    g = (0, f.Z)(p, 2),
                    w = g[0],
                    b = (g[1], (0, a.useState)(r)),
                    v = (0, f.Z)(b, 2),
                    h = v[0],
                    E = v[1],
                    y = (0, j.Nr)(d),
                    x = function() {
                        return encodeURIComponent(h.replace(/#/g, "tag:"))
                    },
                    A = function() {
                        return h.startsWith("usr_") ? "/home/user" : h.startsWith("avtr_") ? "/home/avatar" : h.startsWith("wrld_") ? "/home/world" : h.startsWith("grp_") ? "/home/group" : "/home/search/".concat(n)
                    };
                (0, a.useEffect)((function() {
                    A().startsWith("/home/search/") ? m("".concat(A(), "/").concat(x(), "?").concat(w)) : m("".concat(A(), "/").concat(x()))
                }), [h]), (0, a.useEffect)((function() {
                    "" !== h && e(d)
                }), [y]);
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
                            return t.preventDefault(), "" === h || e(d), null
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
                }, a.createElement(dn.Z, {
                    initialString: h,
                    searchString: E
                }), l && !1))))))
            };
            var En = n(24075),
                yn = n(89082),
                xn = n(58589),
                An = n(35773),
                Cn = n(9669),
                kn = n.n(Cn);
            var Nn = ["public", "internal"];
            const In = function(e) {
                var t = e.direction,
                    n = a.useState([]),
                    r = (0, f.Z)(n, 2),
                    l = r[0],
                    s = r[1],
                    u = a.useState(""),
                    d = (0, f.Z)(u, 2),
                    m = d[0],
                    p = d[1],
                    g = (0, i.TH)(),
                    w = (0, o.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    b = function() {
                        var e = (0, we.Z)(ve().mark((function e() {
                            var t, n, r;
                            return ve().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, kn().get(t);
                                    case 3:
                                        n = e.sent, r = n.data.filter((function(e) {
                                            return "main" !== e
                                        })), s(["main"].concat((0, Y.Z)(r)));
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
                    b().catch(console.error)
                }), []);
                var v = function(e, t) {
                        var n = g.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map((function(e) {
                            return Nn.map((function(n, r) {
                                if ("public" !== n && !w) return null;
                                var o = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    i = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.iv)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                o && i.push("active");
                                var l = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? Nt.J9 : yn.c : En.mh
                                };
                                return a.createElement("a", {
                                    href: v(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(r),
                                    className: i.join(" ")
                                }, a.createElement(k.$1, l), n, "-", e)
                            }))
                        }))
                    };
                return l.length <= 1 ? null : a.createElement("div", null, a.createElement(xn.Z, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, c.iv)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, a.createElement(Qt.Z, {
                    caret: !0,
                    color: "primary"
                }, a.createElement(k.$1, {
                    icon: En.mh
                }), " ", "public", "-", "main"), a.createElement(en.Z, {
                    className: (0, c.iv)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, h(l.slice(0, 1)), a.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), a.createElement(An.Z, {
                    className: "mx-0"
                }, a.createElement("input", {
                    type: "text",
                    value: m,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? {} : t).value;
                        p(n)
                    },
                    className: "py-1 px-1 mx-1 my-1 flex-grow-1"
                })), h(l.slice(1), (function(e) {
                    return 0 === m.length || new RegExp(m, "gi").test(e)
                })))))
            };
            var Zn = n(63221),
                Bn = n(72065),
                On = n(22082),
                jn = n(56395);
            const Sn = function(e) {
                var t = e.to,
                    n = e.title,
                    r = e.onClick,
                    o = (0, On.oE)({
                        states: [jn.g1.ANNOUNCED, jn.g1.SUBMISSIONS_OPEN, jn.g1.SUBMISSIONS_CLOSED, jn.g1.WINNERS_SELECTED]
                    }).data,
                    i = null == o ? void 0 : o.every((function(e) {
                        return !Object.keys(e).includes("state")
                    }));
                if (!o || 0 === (null == o ? void 0 : o.length) || i) return null;
                var l = o[0];
                return a.createElement(Tn, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: r
                }, a.createElement(Pn, {
                    icon: Bn.Ww
                }), a.createElement("div", null, jn.p6[l.state]), a.createElement(k.$1, {
                    icon: bt.yO
                }))
            };
            var Tn = (0, $e.Z)(z.rU, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                Pn = (0, $e.Z)(k.$1, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var Dn = [_t.R7, $t.od, Ft.tM, Vt.RK, Wt.I3, Lt.nG, Gt.jO, Ut.uS, Mt.dy, Rt.XG, qt.BD, zt.ok, Dt.Sv, Pt.qA, Tt.I1, St.Nk, jt.uj, Ot.io, Bt.l9],
                zn = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                qn = a.memo((function(e) {
                    var t, n, l = e.horizontal,
                        s = e.navToggleCallback,
                        u = e.friendsToggleCallback,
                        d = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        m = (0, i.s0)(),
                        g = a.useState(!1),
                        w = (0, f.Z)(g, 2),
                        b = w[0],
                        v = w[1],
                        h = a.useState(Dn[Math.floor(d(Dn.length))]),
                        E = (0, f.Z)(h, 2),
                        y = E[0],
                        x = E[1],
                        A = a.useState(zn[d(zn.length)]),
                        C = (0, f.Z)(A, 2),
                        N = C[0],
                        I = C[1],
                        Z = (0, on.y)().data,
                        B = ((0, j.pc)(), (0, $.XC)().data),
                        O = (0, o.v9)((function(e) {
                            return e.notifications.notifications
                        })) || [],
                        S = (0, $.q7)().data,
                        T = void 0 === S ? [] : S,
                        P = (0, j.CZ)().sortedLocations.length,
                        D = (0, o.v9)((function(e) {
                            return e.notifications.groupNotifications
                        })) || [],
                        q = (0, ln.dq)({
                            n: 1,
                            pageValue: 1,
                            isNavBar: !0
                        }),
                        R = q.data,
                        M = q.isSuccess;
                    (0, a.useEffect)((function() {
                        b && (x(Dn[d(Dn.length)]), I(zn[d(zn.length)]))
                    }), [b]);
                    var U = function(e) {
                            m("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        G = function() {
                            v(!1)
                        },
                        L = function() {
                            s && s(!1)
                        },
                        W = T || [],
                        V = (W.includes("permission-user-icons"), W.includes("permission-user-gallery"), W.includes("permission-groups-beta"), null !== (t = O.length) && void 0 !== t ? t : 0);
                    n = D.filter((function(e) {
                        return e.state === Zn.oq.INVITED
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
                            className: "p-1 xl:tw-hidden btn navbar-btn",
                            onClick: function() {
                                s && (u && u(!1), s())
                            }
                        }, a.createElement(k.$1, {
                            icon: Zt.xi,
                            size: "lg"
                        })), a.createElement(z.rU, {
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
                                return v(!b)
                            }
                        }, a.createElement(Qt.Z, {
                            className: "p-1 navbar-btn text-white"
                        }, V > 0 && a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, V >= 99 ? "99+" : V), a.createElement(k.$1, {
                            icon: kt.FU,
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
                        }, a.createElement(en.Z, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, c.iv)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, a.createElement("div", {
                            className: (0, c.iv)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, a.createElement(z.rU, {
                            onClick: function(e) {
                                G(), m("/home/messages"), e.preventDefault()
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
                        }, V > 0 ? a.createElement(sn, {
                            n: 20,
                            closeDialog: G,
                            isGroups: !1
                        }) : a.createElement("div", {
                            className: (0, c.iv)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, a.createElement(k.$1, {
                            icon: y,
                            size: "3x",
                            className: (0, c.iv)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), a.createElement("h6", null, N))), a.createElement("div", {
                            className: (0, c.iv)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), a.createElement(z.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/calendar",
                            title: "Calendar"
                        }, a.createElement(k.$1, {
                            icon: p.fT,
                            size: "lg"
                        })), a.createElement(z.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, a.createElement(k.$1, {
                            icon: _e.Kb,
                            size: "lg"
                        }))), a.createElement("div", {
                            className: "navbar-section center-nav"
                        }, a.createElement("div", {
                            className: "search"
                        }, a.createElement(hn, null)), a.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                u && (s && s(!1), u())
                            }
                        }, a.createElement(k.$1, {
                            icon: r.faUserGroup,
                            className: "tw-text-white"
                        }))), a.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, a.createElement(In, null), a.createElement("a", {
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
                        }, "VRC+"), a.createElement(_.Z, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, c.iv)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: U
                        }, a.createElement(k.$1, {
                            icon: wt.TE
                        }), "  Logout"))))
                    }
                    return a.createElement("nav", null, a.createElement(tn.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.iv)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== P ? a.createElement(Mn, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: It.mG
                    }), a.createElement("div", null, "Join Friends", " ", a.createElement(nn.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, P)), a.createElement(k.$1, {
                        icon: bt.yO
                    })) : a.createElement(Mn, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Nt.J9
                    }), a.createElement("div", null, "  Home"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Yt.default
                    }), a.createElement("div", null, "Groups"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: kt.FU
                    }), a.createElement("div", null, "Messages", " ", V > 0 && a.createElement(nn.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, V >= 99 ? "99+" : V)), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/calendar",
                        title: "Calendar",
                        className: "btn text-left d-sm-none",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: p.fT
                    }), a.createElement("div", null, "Calendar"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Sn, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: L
                    }), a.createElement(Mn, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Ct.q7
                    }), a.createElement("div", null, "Download"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Ht.default
                    }), a.createElement("div", null, "Discover Worlds"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: At.cf
                    }), a.createElement("div", null, "My Worlds"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: xt.KC
                    }), a.createElement("div", null, "Avatars"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Worlds"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Avatars"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: yt.T
                    }), a.createElement("div", null, "Favorite Friends"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/inventory",
                        title: "Inventory",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Jt.default
                    }), a.createElement("div", {
                        className: "tw-flex"
                    }, "Inventory", M && (null == R ? void 0 : R.totalCount) > 0 && a.createElement("div", {
                        className: "tw-rounded-full tw-bg-red tw-ml-2 tw-w-[22px] tw-h-[22px] tw-text-white tw-flex tw-items-center tw-justify-center "
                    }, a.createElement("p", {
                        className: "tw-text-sm tw-text-center tw-w-full tw-mb-0 tw-font-bold"
                    }, null == R ? void 0 : R.totalCount))), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Xt.default
                    }), a.createElement("div", null, "Marketplace"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), !1, a.createElement(Mn, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == Z ? void 0 : Z.disableUpgradeAccount) || (null == B ? void 0 : B.steamId) && (null == B ? void 0 : B.oculusId),
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: Et.x0
                    }), a.createElement("div", null, "Account Link"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: ht.Ek
                    }), a.createElement("div", null, "Blocks & Mutes"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: L
                    }, a.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: an()
                    }), a.createElement("div", null, "Subscriptions"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Mn, {
                        to: "https://help.vrchat.com/",
                        title: "helpdesk",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-bg-[#07142B] tw-border-[#051E48] tw-text-[#6AA2F9] btn text-left",
                        onClick: L
                    }, a.createElement(k.$1, {
                        icon: vt.lX
                    }), a.createElement("div", null, "Help Desk"), a.createElement(k.$1, {
                        icon: bt.yO
                    })), a.createElement(Un, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: U
                    }, a.createElement(k.$1, {
                        icon: wt.TE
                    }), a.createElement("div", null, "Logout"), a.createElement("div", null))))
                }));
            qn.displayName = "Navbar";
            const Rn = qn;
            var Mn = (0, $e.Z)(z.rU, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                Un = (0, $e.Z)(Mn, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                Gn = n(50119),
                Ln = n(46320),
                Wn = n(30098),
                Vn = [];
            const Fn = function() {
                var e = (0, i.s0)(),
                    t = (0, F._)("campaigns", []),
                    n = (0, f.Z)(t, 2),
                    r = n[0],
                    a = (n[1], (0, F._)("campaignsSeen", [])),
                    o = (0, f.Z)(a, 2),
                    l = o[0],
                    c = (o[1], function() {
                        if (l.length > 0) {
                            var e = r.filter((function(e) {
                                return -1 === l.findIndex((function(t) {
                                    return t.name === e.name
                                }))
                            }));
                            return (0, f.Z)(e, 1)[0]
                        }
                        return (0, f.Z)(r, 1)[0]
                    }());
                if (c) {
                    var s = Vn.find((function(e) {
                        return e.name === c.name
                    }));
                    if (s) return e(s.landingPage)
                }
                return null
            };
            var $n = n(87462);
            const _n = function(e) {
                var t = (0, $.q7)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return a.createElement(e, (0, $n.Z)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var Xn = n(28944),
                Yn = n(9419);
            const Jn = function() {
                var e = (0, o.I0)(),
                    t = (0, Yn._V)(),
                    n = t.data,
                    r = t.isSuccess;
                t.isLoading;
                return a.useEffect((function() {
                    e((0, Wn._r)(n))
                }), [r, n]), null
            };
            var Hn = n(13557),
                Kn = n(33622),
                Qn = n.n(Kn),
                er = (n(62188), n(39883)),
                tr = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            redeemCode: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "/reward/redeem",
                                        method: "POST",
                                        body: {
                                            code: e.code
                                        }
                                    }
                                }
                            })
                        }
                    }
                }).useRedeemCodeMutation,
                nr = n(16031),
                rr = n.n(nr);
            const ar = function() {
                var e, t, n = a.useState(""),
                    r = (0, f.Z)(n, 2),
                    o = r[0],
                    l = r[1],
                    c = (0, i.TH)(),
                    s = (0, i.s0)(),
                    u = tr(),
                    d = (0, f.Z)(u, 2),
                    m = d[0],
                    p = d[1],
                    g = p.data,
                    w = p.isLoading,
                    b = p.isSuccess,
                    v = p.isError,
                    h = p.error;
                a.useEffect((function() {
                    var e = new URLSearchParams(c.search),
                        t = e.get("code");
                    t && (e.delete("code"), s({
                        pathname: c.pathname,
                        search: e.toString()
                    }, {
                        replace: !0
                    }), l(t))
                }), []), a.useEffect((function() {
                    b && null != g && g.redeemedRewards && (0, er.Z)({
                        particleCount: 150,
                        spread: 90,
                        origin: {
                            y: .6
                        }
                    })
                }), [b, g]);
                var E = function() {
                    var e = (0, we.Z)(ve().mark((function e(t) {
                        var n, r;
                        return ve().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = null === (n = r = t || o) || void 0 === n ? void 0 : n.trim()) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.prev = 4, e.next = 7, m({
                                        code: r
                                    });
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(4), console.error("Error redeeming code:", e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return a.createElement("div", {
                    className: "tw-p-5"
                }, a.createElement(k.$4, null, "Redeem Code"), a.createElement(or, {
                    className: "mb-4 tw-bg-[#07242b] tw-border-[#053c48]",
                    outline: !0
                }, a.createElement(ir, null, a.createElement("h2", {
                    className: "tw-text-3xl tw-font-bold tw-text-center tw-text-[#6ae3f9] mb-2"
                }, "Redeem Code")), a.createElement(lr, {
                    className: "tw-p-5 tw-border-2 tw-border-[#053c48] tw-rounded-xl"
                }, a.createElement(k.JX, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, b && a.createElement(k.qX, {
                    type: "success",
                    title: "Success!"
                }, "Your code has been successfully redeemed!"), v && a.createElement(k.qX, {
                    type: "error",
                    title: "Error"
                }, (null == h || null === (e = h.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) || "An error occurred while redeeming your code."), a.createElement(k.II, {
                    type: "text",
                    id: "redeemCode",
                    name: "redeemCode",
                    placeholder: "XXXX-XXXX-XXXX",
                    className: "flex-1 mb-2",
                    value: o,
                    "aria-label": "Redeem Code",
                    rawInputClassName: "tw-text-center",
                    onChange: function(e) {
                        return l(e.target.value)
                    },
                    onKeyDown: function(e) {
                        "Enter" === e.key && E()
                    },
                    autoFocus: !0,
                    autoComplete: "off",
                    isError: v,
                    success: b
                }), a.createElement("p", {
                    className: "tw-text-center tw-text-sm tw-text-gray-400"
                }, "Codes are case-sensitive."), a.createElement(k.JX, {
                    xs: "auto",
                    className: "mx-auto"
                }, a.createElement(k.zx, {
                    variant: "primary",
                    onClick: function() {
                        return E()
                    },
                    disabled: w || !o,
                    className: "tw-w-full tw-mt-2 tw-p-2 tw-px-4",
                    loading: w
                }, "Redeem")), b && !(null == g || null === (t = g.redeemedRewards) || void 0 === t || !t.length) && a.createElement("div", {
                    className: "tw-mt-6"
                }, a.createElement("h3", {
                    className: "tw-text-xl tw-font-semibold tw-mb-4 after:tw-content-none tw-text-center"
                }, "You received:"), a.createElement(k.X2, {
                    className: "tw-g-4 tw-justify-center tw-flex-wrap"
                }, g.redeemedRewards.map((function(e, t) {
                    return function(e, t) {
                        var n, r, o, i, l, c, s = e.type,
                            u = e.data,
                            d = {
                                badge: {
                                    category: "Badge",
                                    title: null == u || null === (n = u.badge) || void 0 === n ? void 0 : n.name,
                                    imageUrl: null == u || null === (r = u.badge) || void 0 === r ? void 0 : r.imageUrl
                                },
                                item: {
                                    category: null !== (o = null == u || null === (i = u.item) || void 0 === i ? void 0 : i.itemTypeLabel) && void 0 !== o ? o : "Item",
                                    title: null == u || null === (l = u.item) || void 0 === l ? void 0 : l.name,
                                    imageUrl: null == u || null === (c = u.item) || void 0 === c ? void 0 : c.imageUrl
                                },
                                vrcPlus: {
                                    category: "VRC+",
                                    title: "VRC+ Subscription",
                                    imageUrl: rr()
                                }
                            } [s] || {
                                title: s,
                                imageUrl: "",
                                category: ""
                            },
                            m = d.title,
                            f = d.imageUrl,
                            p = d.category;
                        return a.createElement(or, {
                            key: t,
                            className: "tw-bg-[#181b1f] tw-border tw-border-[#06333d] tw-relative tw-p-4 tw-shadow tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full sm:tw-w-6/12 md:tw-w-4/12 lg:tw-w-3/12 tw-p-2 tw-m-2"
                        }, p && a.createElement("div", {
                            className: "tw-absolute tw-top-2 tw-left-2 tw-bg-cyan-500 tw-text-white tw-rounded-full tw-px-2 tw-text-xs tw-font-semibold tw-shadow"
                        }, p), f && a.createElement("img", {
                            src: f,
                            alt: m,
                            className: "tw-w-full tw-h-32 tw-object-contain tw-mb-3 tw-rounded"
                        }), a.createElement("h4", {
                            className: "tw-text-md tw-font-medium tw-text-[#6ae3f9]"
                        }, m))
                    }(e, t)
                }))))))))
            };
            var or = (0, $e.Z)("div", {
                    target: "edh905g2"
                })({
                    name: "sx6pt1",
                    styles: "border-radius:0.5rem;padding:2.5rem 1rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1);border:1px solid #053c48"
                }),
                ir = (0, $e.Z)("div", {
                    target: "edh905g1"
                })({
                    name: "1ykowef",
                    styles: "margin-bottom:0"
                }),
                lr = (0, $e.Z)("div", {
                    target: "edh905g0"
                })({
                    name: "mkkf9p",
                    styles: "flex:1 1 auto"
                });
            var cr = a.lazy((function() {
                    return Promise.all([n.e(4509), n.e(1643)]).then(n.bind(n, 88567))
                })),
                sr = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(141), n.e(8874), n.e(319)]).then(n.bind(n, 37099))
                })),
                ur = a.lazy((function() {
                    return n.e(3488).then(n.bind(n, 93488))
                })),
                dr = a.lazy((function() {
                    return n.e(6231).then(n.bind(n, 76231))
                })),
                mr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(9440), n.e(3294), n.e(2027), n.e(3348), n.e(8207), n.e(9336), n.e(5842), n.e(6461)]).then(n.bind(n, 76461))
                })),
                fr = a.lazy((function() {
                    return Promise.all([n.e(7826), n.e(852)]).then(n.bind(n, 36418))
                })),
                pr = a.lazy((function() {
                    return Promise.all([n.e(545), n.e(9899), n.e(1049)]).then(n.bind(n, 71049))
                })),
                gr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(4444), n.e(4232)]).then(n.bind(n, 74444))
                })),
                wr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(9908), n.e(9575)]).then(n.bind(n, 39908))
                })),
                br = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(229), n.e(1459)]).then(n.bind(n, 60229))
                })),
                vr = a.lazy((function() {
                    return n.e(8438).then(n.bind(n, 58438))
                })),
                hr = a.lazy((function() {
                    return n.e(4907).then(n.bind(n, 44907))
                })),
                Er = a.lazy((function() {
                    return Promise.all([n.e(8158), n.e(6488)]).then(n.bind(n, 92848))
                })),
                yr = a.lazy((function() {
                    return Promise.all([n.e(2537), n.e(347), n.e(141), n.e(8207), n.e(4509), n.e(8158), n.e(4896), n.e(4631)]).then(n.bind(n, 94631))
                })),
                xr = a.lazy((function() {
                    return Promise.all([n.e(545), n.e(8158), n.e(3013)]).then(n.bind(n, 13164))
                })),
                Ar = a.lazy((function() {
                    return Promise.all([n.e(545), n.e(8264)]).then(n.bind(n, 8264))
                })),
                Cr = a.lazy((function() {
                    return Promise.all([n.e(6286), n.e(2027), n.e(141), n.e(3790), n.e(9651)]).then(n.bind(n, 49651))
                })),
                kr = a.lazy((function() {
                    return n.e(9795).then(n.bind(n, 79795))
                })),
                Nr = a.lazy((function() {
                    return Promise.all([n.e(4509), n.e(4157)]).then(n.bind(n, 50062))
                })),
                Ir = a.lazy((function() {
                    return n.e(7047).then(n.bind(n, 7047))
                })),
                Zr = a.lazy((function() {
                    return n.e(1952).then(n.bind(n, 81952))
                })),
                Br = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(2095), n.e(4586)]).then(n.bind(n, 34586))
                })),
                Or = a.lazy((function() {
                    return n.e(997).then(n.bind(n, 997))
                })),
                jr = a.lazy((function() {
                    return Promise.all([n.e(141), n.e(877)]).then(n.bind(n, 36828))
                })),
                Sr = a.lazy((function() {
                    return n.e(6812).then(n.bind(n, 46812))
                })),
                Tr = a.lazy((function() {
                    return Promise.all([n.e(2027), n.e(141), n.e(3790), n.e(8695)]).then(n.bind(n, 44218))
                })),
                Pr = a.lazy((function() {
                    return Promise.all([n.e(5545), n.e(2027), n.e(3348), n.e(4140)]).then(n.bind(n, 51423))
                })),
                Dr = a.lazy((function() {
                    return Promise.all([n.e(123), n.e(786), n.e(4444), n.e(9908), n.e(229), n.e(3294), n.e(527), n.e(347), n.e(2327)]).then(n.bind(n, 24479))
                }));
            const zr = function() {
                var e = (0, o.I0)(),
                    t = (0, a.useRef)(null);
                Fn();
                var n = (0, $.IB)().data,
                    u = a.useMemo((function() {
                        var e;
                        return !(null == n || null === (e = n.badges) || void 0 === e || !e.find((function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && d()().isBefore(d()(n).add(36, "hours"))
                        })))
                    }), [n]),
                    m = (0, o.v9)((function(e) {
                        return e.ui
                    })),
                    f = m.rightWingOpen,
                    p = m.leftWingOpen,
                    g = function(t) {
                        e((0, Fe.hU)(null != t ? t : !p))
                    },
                    w = function(n) {
                        e((0, Fe.Q_)(null != n ? n : !f)), setTimeout((function() {
                            var e;
                            null === (e = t.current) || void 0 === e || e.updateCalendarSize()
                        }), 500)
                    };
                return (0, a.useEffect)((function() {
                    e((0, Wn.Wk)()), e((0, Wn._e)())
                }), []), a.createElement("div", {
                    className: (0, c.iv)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", u && (0, c.iv)("background-image:url(", Qn(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{max-width:3840px;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 20px 0 20px;transition:padding-right 0.35s ease-in-out;}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1440px){& .hide-large{display:none;}}@media (max-width: 1440px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, a.createElement(Jn, null), a.createElement("div", null, a.createElement(Rn, {
                    navToggleCallback: g,
                    friendsToggleCallback: function(e) {
                        w(e)
                    }
                })), a.createElement(l.Z, {
                    fluid: !0
                }, a.createElement("div", null, a.createElement("div", {
                    className: "fixed-top leftbar ".concat(p ? "leftOpen" : "")
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
                }, a.createElement(In, {
                    direction: "right"
                })), a.createElement(s.SV, {
                    fallback: Xn.Z
                }, a.createElement(Ke, {
                    navToggleCallback: g
                })), a.createElement(s.SV, {
                    fallback: Xn.Z
                }, a.createElement(Rn, {
                    horizontal: !0,
                    navToggleCallback: g
                })))), a.createElement("div", {
                    className: "col-xs-12 content-scroll"
                }, a.createElement("div", {
                    className: "home-content"
                }, a.createElement(s.SV, {
                    fallback: Xn.Z
                }, a.createElement(a.Suspense, {
                    fallback: a.createElement(a.Fragment, null, a.createElement(Gn.Z, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), a.createElement(Gn.Z, {
                        delay: "50",
                        height: "480px"
                    }))
                }, a.createElement(i.Z5, null, a.createElement(i.AW, {
                    path: "/search/:tab/:query",
                    element: a.createElement(sr, null)
                }), a.createElement(i.AW, {
                    path: "/profile",
                    element: a.createElement(pr, null)
                }), a.createElement(i.AW, {
                    path: "/user/:userId/*",
                    element: a.createElement(Tr, null)
                }), a.createElement(i.AW, {
                    path: "/uploadIcon",
                    element: _n(wr)()
                }), a.createElement(i.AW, {
                    path: "/uploadPhoto",
                    element: _n(br)()
                }), a.createElement(i.AW, {
                    path: "/uploadEmoji",
                    element: _n(gr)()
                }), a.createElement(i.AW, {
                    path: "/gallery/icons",
                    element: a.createElement(Ln.Z, {
                        to: "../inventory/user-icons"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/photos",
                    element: a.createElement(Ln.Z, {
                        to: "../inventory/photos"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/emoji",
                    element: a.createElement(Ln.Z, {
                        to: "../inventory/emojis"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/stickers",
                    element: a.createElement(Ln.Z, {
                        to: "../inventory/stickers"
                    })
                }), a.createElement(i.AW, {
                    path: "/gallery/*",
                    element: a.createElement(Ln.Z, {
                        to: "../inventory/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/inventory/*",
                    element: a.createElement(Dr, null)
                }), a.createElement(i.AW, {
                    path: "/marketplace/*",
                    element: a.createElement(Zr, null)
                }), a.createElement(i.AW, {
                    path: "/wallet",
                    element: a.createElement(Ln.Z, {
                        to: "../marketplace/wallet"
                    })
                }), a.createElement(i.AW, {
                    path: "/wallet/purchases/*",
                    element: a.createElement(Ln.Z, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/wallet/store/*",
                    element: a.createElement(Ln.Z, {
                        to: "../marketplace/storefront/*"
                    })
                }), a.createElement(i.AW, {
                    path: "/locations",
                    element: a.createElement(Nr, null)
                }), a.createElement(i.AW, {
                    path: "/worlds",
                    element: a.createElement(vr, null)
                }), a.createElement(i.AW, {
                    path: "/world/:worldId/*",
                    element: a.createElement(Pr, null)
                }), a.createElement(i.AW, {
                    path: "/avatars",
                    element: a.createElement(fr, null)
                }), a.createElement(i.AW, {
                    path: "/avatar/:avatarId",
                    element: a.createElement(mr, null)
                }), a.createElement(i.AW, {
                    path: "/content/*",
                    element: a.createElement(Br, null)
                }), a.createElement(i.AW, {
                    path: "/messages",
                    element: a.createElement(Or, null)
                }), a.createElement(i.AW, {
                    path: "/playermoderations",
                    element: a.createElement(jr, null)
                }), a.createElement(i.AW, {
                    path: "/download",
                    element: a.createElement(ur, null)
                }), a.createElement(i.AW, {
                    path: "/redeem",
                    element: a.createElement(ar, null)
                }), a.createElement(i.AW, {
                    path: "/groups",
                    element: a.createElement(hr, null)
                }), a.createElement(i.AW, {
                    path: "/groups/create",
                    element: a.createElement(Er, null)
                }), a.createElement(i.AW, {
                    path: "/groups/search",
                    element: a.createElement(hr, null)
                }), a.createElement(i.AW, {
                    path: "/groups/search/:query",
                    element: a.createElement(hr, null)
                }), a.createElement(i.AW, {
                    path: "/group/:groupId/ageverification/:code",
                    element: a.createElement(xr, null)
                }), a.createElement(i.AW, {
                    path: "/group/:groupId/*",
                    element: a.createElement(yr, null)
                }), a.createElement(i.AW, {
                    path: "/groups/:groupId",
                    element: a.createElement(Ln.Z, {
                        to: "../../group/:groupId"
                    })
                }), a.createElement(i.AW, {
                    path: "/calendar",
                    element: a.createElement(Ve, {
                        ref: t
                    })
                }), a.createElement(i.AW, {
                    path: "/ageverification",
                    element: a.createElement(Ar, null)
                }), a.createElement(i.AW, {
                    path: "/accountlink",
                    element: a.createElement(dr, null)
                }), a.createElement(i.AW, {
                    path: "/favorites/*",
                    element: a.createElement(i.Z5, null, a.createElement(i.AW, {
                        path: "/:type",
                        element: a.createElement(Cr, null)
                    }), a.createElement(i.AW, {
                        path: "/:type/:name",
                        element: a.createElement(Cr, null)
                    }))
                }), a.createElement(i.AW, {
                    path: "/group/:ownerId/calendar/:eventId",
                    element: a.createElement(Hn.Z, null)
                }), a.createElement(i.AW, {
                    path: "/jams/*",
                    element: a.createElement(Ir, null)
                }), !1, !1, a.createElement(i.AW, {
                    path: "/subscriptions",
                    element: a.createElement(Sr, null)
                }), a.createElement(i.AW, {
                    path: "/",
                    element: a.createElement(cr, null)
                })))))), a.createElement("div", {
                    className: "fixed-top rightbar ".concat(f ? "open" : "")
                }, a.createElement(s.SV, {
                    fallback: Xn.Z
                }, a.createElement(a.Suspense, {
                    fallback: a.createElement(a.Fragment, null, a.createElement(Gn.Z, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), a.createElement(Gn.Z, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), a.createElement(Gn.Z, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, a.createElement(kr, {
                    friendsToggleCallback: w
                })))), a.createElement("div", {
                    onKeyDown: function(e) {
                        "Escape" === e.key && w(!1)
                    },
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button d-md-flex d-none tw-z-[3]",
                    onClick: function() {
                        w(!0)
                    }
                }, a.createElement(k.$1, {
                    icon: r.faUserGroup,
                    className: "tw-w-7 tw-h-7 tw-text-white",
                    "aria-label": "Open Friends Menu"
                })))), a.createElement(X, null), !1, a.createElement(L, null))
            }
        },
        55206: (e, t, n) => {
            "use strict";
            n.d(t, {
                B2: () => u,
                Zh: () => p,
                _O: () => f,
                b5: () => d
            });
            var r = n(4942),
                a = n(25428),
                o = n(3447),
                i = n(56209),
                l = n(6344);

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
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = ["droneskin", "portalskin", "warpeffect", "loadingscreen"],
                d = {
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
                    },
                    cosmetics: {
                        exclusive: "cosmeticsExclusive",
                        archived: "cosmeticsArchived"
                    }
                },
                m = {
                    aspectRatioClass: "aspect-square",
                    hasArchive: !1,
                    hasConvertToVrcEmojis: !1,
                    hasDelete: !1,
                    hasRecover: !1,
                    imageGrayScale: !1,
                    hasThumbnailName: !1,
                    useCanvasThumbnail: !1
                },
                f = {
                    stickersCustom: s(s({
                        label: "Custom Stickers"
                    }, m), {}, {
                        hasDelete: !0,
                        hasConvertToVrcEmojis: !0,
                        useCanvasThumbnail: !0,
                        icon: l.default
                    }),
                    stickersExclusive: s(s({
                        label: "Exclusive Stickers"
                    }, m), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0,
                        icon: l.default
                    }),
                    stickersArchived: s(s({
                        label: "Archived Stickers"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0,
                        icon: l.default
                    }),
                    emojisCustom: s(s({
                        label: "Custom Emojis"
                    }, m), {}, {
                        hasDelete: !0,
                        useCanvasThumbnail: !0,
                        icon: o.default
                    }),
                    emojisExclusive: s(s({
                        label: "Exclusive Emojis"
                    }, m), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0,
                        icon: o.default
                    }),
                    emojisArchived: s(s({
                        label: "Archived Emojis"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0,
                        icon: o.default
                    }),
                    propsExclusive: s(s({
                        label: "Exclusive Items"
                    }, m), {}, {
                        hasArchive: !0,
                        hasThumbnailName: !0,
                        icon: i.default
                    }),
                    propsArchived: s(s({
                        label: "Archived Items"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        hasThumbnailName: !0,
                        icon: i.default
                    }),
                    cosmeticsExclusive: s(s({
                        label: "Exclusive Cosmetics"
                    }, m), {}, {
                        hasArchive: !0,
                        hasThumbnailName: !0,
                        icon: a.default
                    }),
                    cosmeticsArchived: s(s({
                        label: "Archived Cosmetics"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        hasThumbnailName: !0,
                        icon: a.default
                    })
                },
                p = {
                    INSTANTIATABLE: "instantiatable",
                    CONSUMABLE: "consumable",
                    TRASHABLE: "trashable",
                    ARCHIVABLE: "archivable",
                    USER_GENERATED: "ugc",
                    CLONEABLE: "cloneable",
                    UNIQUE: "unique",
                    QUANTIFIABLE: "quantifiable",
                    QUANTIFIABLE_ALLOW_ZERO: "quantifiable_allow_zero",
                    EQUIPPABLE: "equippable",
                    GLOBAL: "global",
                    GLOBAL_VISIBLE: "global_visible",
                    VRC_PLUS_EXCUSIVE: "vrc_plus_exclusive",
                    PREMIUM: "premium"
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
                Z: () => ze
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
                g = n(6281),
                w = n(62437),
                b = n(54546),
                v = n(42137),
                h = n(7469),
                E = n(87709),
                y = n(16995),
                x = n(67454),
                A = n(31087),
                C = n(15405),
                k = n(95819),
                N = n(22601),
                I = n(87695),
                Z = n(16686),
                B = n(47947),
                O = n(53359),
                j = n(20495),
                S = n(85322),
                T = n(67992),
                P = n(95896),
                D = n(27484),
                z = n.n(D),
                q = n(56176),
                R = n.n(q),
                M = n(84110),
                U = n.n(M),
                G = n(9419),
                L = n(50249),
                W = n(13757),
                V = n(51540),
                F = n(8792),
                $ = n(65322),
                _ = n(87589),
                X = n(4739),
                Y = n(79036),
                J = n(59660),
                H = n(2155),
                K = n(42619),
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
                we = n(69323),
                be = n(20455),
                ve = n(32731),
                he = n(57982),
                Ee = n(98375),
                ye = n(33805),
                xe = {
                    edit: n(11071).Y,
                    cancel: E.faXmark,
                    history: ye.On,
                    refresh: Ee.faArrowsRotate,
                    search: he.faMagnifyingGlass,
                    settings: ve.faGear,
                    pin: be.RP,
                    "arrow-up": we.FP,
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
                    trash: K.$,
                    feather: H.nA,
                    images: J.l9,
                    house: Y.faHouse,
                    location: X.iU,
                    rocket: _.tM,
                    microphone: $.UO,
                    "folder-open": F.cC,
                    gauge: V.Iz,
                    dice: W.RJ,
                    "triangle-exclamation": O.faTriangleExclamation
                },
                Ae = n(80988),
                Ce = n(88233),
                ke = n(2566);
            z().extend(U()), z().extend(R());
            var Ne = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: L.default
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
                    "group.event.starting": {
                        caption: "Event Starting",
                        icon: S.fT
                    },
                    "group.event.created": {
                        caption: "Event Announcement",
                        icon: S.fT
                    },
                    "event.announcement": {
                        caption: "Event Announcement",
                        icon: S.fT
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: j.faCircleExclamation
                    },
                    "moderation.contentrestriction": {
                        caption: "Content Moderation",
                        icon: O.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: O.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: O.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: B.JH
                    },
                    "avatarreview.success": {
                        caption: "Avatar Approved",
                        icon: Z.faCircleCheck
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
                    "economy.received.gift": {
                        caption: "Gift",
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
                            n = (0, b.Z)(t, 2),
                            r = n[0],
                            a = n[1];
                        return "/home/group/".concat(r, "/calendar/").concat(a)
                    }
                },
                Ze = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                Be = function(e) {
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
            const Oe = function(e) {
                var t = e.notification,
                    n = e.slim,
                    a = (0, m.I0)(),
                    o = d.useState(!1),
                    i = (0, b.Z)(o, 2),
                    l = i[0],
                    c = i[1],
                    s = (0, G.S5)(),
                    g = (0, b.Z)(s, 2),
                    w = g[0],
                    x = g[1].isSuccess,
                    A = (0, G.oS)(),
                    C = (0, b.Z)(A, 2),
                    k = C[0],
                    N = C[1].isSuccess,
                    I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.link,
                            n = (e.linkText, (null == t ? void 0 : t.split(":")) || []),
                            r = (0, b.Z)(n, 2),
                            a = r[0],
                            o = r[1];
                        if (a) return (Ie[a] || Ze)({
                            linkType: a,
                            linkId: o
                        })
                    }(t),
                    Z = (t.linkText || t.title, t.title || t.linkText);
                (x || N) && a((0, p.tV)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var B = Ne[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: y.Ps
                    },
                    O = B.icon,
                    j = B.caption,
                    S = t.createdAt && z()(t.createdAt);
                return d.createElement(d.Fragment, null, d.createElement(ke.jm, null, d.createElement(ke.lR, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: O
                }), " ", d.createElement("i", null, j)), (null == t ? void 0 : t.canDelete) && d.createElement(ke.Z2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        k({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, d.createElement(Ae.$1, {
                    icon: E.faXmark
                }))), d.createElement(ke.g6, null, t.imageUrl && d.createElement(ke.rR, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.xY.offline.color
                }, d.createElement(ke.v_, null, d.createElement(Ae.$1, {
                    icon: h.q9
                })), d.createElement(ke.sJ, {
                    url: t.imageUrl
                }), d.createElement(ke.EU, {
                    url: t.imageUrl
                })), d.createElement(ke.N2, null, d.createElement(ke.gp, null, !!Z && d.createElement("strong", null, I ? d.createElement(f.rU, {
                    to: I
                }, Z) : Z), (null == S ? void 0 : S.isValid()) && d.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, d.createElement("small", null, d.createElement("time", {
                    dateTime: t.createdAt,
                    title: S.format("llll")
                }, d.createElement(Ae.$1, {
                    className: "tw-mr-1",
                    icon: v.SZ
                }), S.fromNow()))), d.createElement("p", null, t.message)), d.createElement(ke.tt, {
                    slim: n
                }, null == t ? void 0 : t.responses.map((function(e) {
                    return d.createElement(Be, (0, r.Z)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: w
                    }))
                })))))), !!t.imageUrl && l && d.createElement(Ce.Z, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const je = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    r = (0, m.I0)(),
                    a = (0, G.gS)(),
                    i = (0, b.Z)(a, 2),
                    c = i[0],
                    s = i[1].isSuccess,
                    f = (0, G.pX)(),
                    g = (0, b.Z)(f, 1)[0],
                    w = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && r((0, p.tV)({
                    notificationId: t.id
                })), d.createElement(ke.jm, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: l.FU
                }), "  ", d.createElement("i", null, "System Message")), d.createElement(ke.g6, null, d.createElement(ke.gt, {
                    statusColor: u.xY.offline.color
                }, d.createElement(ke.sJ, {
                    url: w
                }), d.createElement(ke.EU, {
                    url: w
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
            const ze = function(e) {
                var t, n, l, c, s, b, v, h, E = e.notification,
                    y = (0, a.Z)(e, Se),
                    x = (0, m.I0)(),
                    A = E.type,
                    C = E.senderUserId,
                    k = E.id,
                    N = E.message,
                    I = E.isSystem,
                    Z = 2 === E.version,
                    B = "message" === A || I,
                    O = (0, w.GR)(C, {
                        skip: !C || Z
                    }),
                    j = O.data,
                    S = O.isLoading,
                    T = O.error;
                if (Z) return d.createElement(Oe, (0, r.Z)({}, y, {
                    notification: E
                }));
                if (S) return d.createElement("p", null, "Loading");
                if (B) return d.createElement(je, (0, r.Z)({}, y, {
                    notification: E,
                    senderUserData: j
                }));
                if (404 === (null == T ? void 0 : T.status)) return null;
                var P, D = Te[A],
                    z = Pe[A],
                    q = (0, u.Tq)(null == j ? void 0 : j.status).color,
                    R = (null == j ? void 0 : j.profilePicOverride) || (null == j ? void 0 : j.currentAvatarThumbnailImageUrl),
                    M = (null === (t = E.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = E.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (l = E.details) || void 0 === l ? void 0 : l.requestMessage);
                return d.createElement(ke.jm, null, d.createElement(ke.XK, null, d.createElement(Ae.$1, {
                    icon: D
                }), "  ", d.createElement("i", null, z)), d.createElement(ke.g6, null, d.createElement(ke.rR, {
                    to: "/home/user/".concat(C),
                    statusColor: q
                }, !(null !== (c = E.details) && void 0 !== c && c.imageUrl) && d.createElement(ke.v_, null, "Go To Profile"), d.createElement(ke.sJ, {
                    url: null !== (s = null === (b = E.details) || void 0 === b ? void 0 : b.imageUrl) && void 0 !== s ? s : R
                }), d.createElement(ke.EU, {
                    url: null !== (v = null === (h = E.details) || void 0 === h ? void 0 : h.imageUrl) && void 0 !== v ? v : R
                })), d.createElement(ke.N2, null, d.createElement(ke.gp, null, d.createElement(f.rU, {
                    to: "/home/user/".concat(C)
                }, d.createElement("strong", null, j.displayName)), " - ", N || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (P = E.details) || void 0 === P ? void 0 : P.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [A]), "friendRequest" === A ? d.createElement(ke.tt, null, d.createElement(ke.n9, {
                    onClick: function() {
                        return x((0, p.yK)({
                            notificationId: k,
                            withServer: !De.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(Ae.$1, {
                    icon: o.NB
                })), d.createElement(ke.n9, {
                    onClick: function() {
                        x((0, p.FC)({
                            notificationId: E.id
                        })), (0, g.j)("Social_AcceptFriendRequest", {
                            targetUserId: E.senderUserId,
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
                            withServer: !De.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(Ae.$1, {
                    icon: o.NB
                })), "invite" === A && d.createElement(ke.n9, {
                    onClick: function() {
                        window.open(function() {
                            var e;
                            if (null !== (e = E.details) && void 0 !== e && e.worldId) {
                                var t = "/home/launch",
                                    n = E.details.worldId.split(":");
                                return n.length > 1 ? "".concat(t, "?worldId=").concat(n[0], "&instanceId=").concat(n[1]) : "".concat(t, "?worldId=").concat(n[0])
                            }
                            return null
                        }())
                    },
                    color: "secondary"
                }, d.createElement("strong", null, "Join"))))), M && d.createElement(ke.hH, null, '"', M, '"'))
            }
        },
        2566: (e, t, n) => {
            "use strict";
            n.d(t, {
                EU: () => x,
                N2: () => m,
                XK: () => d,
                Z2: () => w,
                db: () => C,
                e5: () => A,
                g6: () => s,
                gp: () => f,
                gt: () => v,
                hH: () => u,
                jm: () => c,
                lR: () => l,
                n9: () => g,
                rR: () => E,
                sJ: () => y,
                tt: () => p,
                v_: () => b
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
                w = (0, r.Z)(g, {
                    target: "ennyu4t8"
                })("margin:0;padding:0 .5rem;&>", i.O, "{font-size:1rem;}"),
                b = (0, r.Z)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                v = (0, r.Z)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;"),
                h = (0, r.Z)(o.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;&:hover ", b, "{opacity:1;}"),
                E = (0, r.Z)(h, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", (function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(b, " {\n      opacity: 0;\n    }\n  ")
                }), ";"),
                y = (0, r.Z)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                x = (0, r.Z)(y, {
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
                F: () => p,
                Xz: () => f,
                aj: () => m,
                dq: () => b,
                fv: () => g,
                sw: () => w,
                yM: () => v
            });
            var r = n(4942),
                a = n(45987),
                o = n(61509),
                i = n(64358),
                l = ["n", "pageValue", "types"],
                c = ["n", "pageValue", "types", "collection"];

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = o.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getGlobalInventoryItems: e.query({
                                query: function() {
                                    return "inventory/global"
                                },
                                providesTags: ["InventoryGlobalItems"]
                            }),
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
                                        o = void 0 === r ? 1 : r,
                                        c = e.types,
                                        s = (0, a.Z)(e, l);
                                    return {
                                        url: "inventory",
                                        params: u(u({}, (0, i.ue)({
                                            n,
                                            pageValue: o
                                        })), {}, {
                                            notFlags: "ugc",
                                            notTypes: "bundle",
                                            archived: !1,
                                            seen: !1,
                                            types: c
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
                                        o = void 0 === r ? 1 : r,
                                        l = e.types,
                                        s = e.collection,
                                        d = (0, a.Z)(e, c);
                                    return {
                                        url: "inventory",
                                        params: u(u(u(u({}, (0, i.ue)({
                                            n,
                                            pageValue: o
                                        })), l && {
                                            types: l
                                        }), s && {
                                            collection: s
                                        }), d)
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
                }).enhanceEndpoints({
                    addTagTypes: ["InventoryCollections", "InventoryGlobalItems", "InventoryItem", "InventoryItemIsNotSeen", "InventoryItems"]
                }),
                m = d.useGetInventoryItemsQuery,
                f = (d.useGetInventoryItemByIdQuery, d.useDeleteInventoryItemMutation),
                p = d.useArchiveInventoryItemMutation,
                g = d.useUpdateInventoryItemMutation,
                w = d.useGetInventoryCollectionsQuery,
                b = d.useGetInventoryNotSeenItemsQuery,
                v = d.useGetGlobalInventoryItemsQuery
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
        46461: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(87537),
                a = n.n(r),
                o = n(23645),
                i = n.n(o)()(a());
            i.push([e.id, ":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: #fff;\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n}\n\n.fc .fc-toolbar .fc-button {\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: #333;\n  background-color: var(--fc-button-bg-color);\n  border-color: #333;\n  border-color: var(--fc-button-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: #064B5C;\n  background-color: var(--fc-button-active-bg-color);\n  border-color: #064B5C;\n  border-color: var(--fc-button-active-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}", "", {
                version: 3,
                sources: ["webpack://./src/components/Calendar/calendarStyles.css"],
                names: [],
                mappings: "AAAA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,6CAA6C;EAC7C,gCAAgC;EAChC,0BAA0B;;EAE1B,4BAA4B;EAC5B,0BAA0B;EAC1B,8BAA8B;EAC9B,gCAAgC;EAChC,uCAAuC;EACvC,oCAAoC;EACpC,wCAAwC;;EAExC,4BAA4B;EAC5B,gCAAgC;EAChC,2BAA2B;EAC3B,sDAAsD;;EAEtD,gCAAgC;EAChC,kCAAkC;;EAElC,iCAAiC;EACjC,uCAAuC;EACvC,wCAAwC;;EAExC,iDAAiD;EACjD,uCAAuC;EACvC,0BAA0B;EAC1B,8CAA8C;EAC9C,kCAAkC;EAClC,6BAA6B;;EAE7B,aAAa;EACb,iCAAiC;;EAEjC,gBAAgB;EAChB,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,WAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAG/B;;AAJA;EAEE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;;EAEE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;;AAGA;;;EAGE,eAAe;EACf,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,sBAA2C;EAA3C,2CAA2C;EAC3C,kBAA2C;EAA3C,2CAA2C;EAC3C,WAAkC;EAAlC,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAkD;EAAlD,kDAAkD;EAClD,qBAAkD;EAAlD,kDAAkD;EAClD,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;;AAGA;CACC,gBAAgB;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,sCAAsC;EACtC,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,6BAAqB;EAArB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;;EAEE;AACF;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;;;AAIA;;EAEE;;;IAGE,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;EACxB;AACF",
                sourcesContent: [":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: var(--fc-button-bg-color);\n  border-color: var(--fc-button-border-color);\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: var(--fc-button-active-bg-color);\n  border-color: var(--fc-button-active-border-color);\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}"],
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
        62188: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "5c25c49e142ecf16-64w.png 64w",
                images: [{
                    path: n.p + "5c25c49e142ecf16-64w.png",
                    width: 64,
                    height: 46
                }],
                src: n.p + "5c25c49e142ecf16-64w.png",
                toString: function() {
                    return n.p + "5c25c49e142ecf16-64w.png"
                },
                width: 64,
                height: 46
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
        },
        16031: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "fc9545bad1b3f76c-610w.png 610w",
                images: [{
                    path: n.p + "fc9545bad1b3f76c-610w.png",
                    width: 610,
                    height: 240
                }],
                src: n.p + "fc9545bad1b3f76c-610w.png",
                toString: function() {
                    return n.p + "fc9545bad1b3f76c-610w.png"
                },
                width: 610,
                height: 240
            }
        }
    }
]);
//# sourceMappingURL=d5f66f63b47a08a6cca4400be3b0f08eae44c4040f90305ea4953585b27035f3.js.map