(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6578], {
        11378(e, t, n) {
            "use strict";
            n.d(t, {
                ED: () => p,
                Io: () => h,
                US: () => g,
                V_: () => w,
                gD: () => b,
                v3: () => v,
                x5: () => f
            });
            var r = n(64467),
                a = n(72505),
                o = n.n(a);
            n(74303);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                        l = i(i({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n: r
                        });
                    return a && t && (l = i(i({}, l), n)), {
                        type: "SEARCH_USERS",
                        payload: o().get(window.apiUrl("/api/1/users"), {
                            params: l
                        })
                    }
                },
                p = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.offset,
                        l = e.isInternalVariant,
                        c = i(i({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: l
                            }),
                            n: r,
                            offset: a
                        });
                    return l && t && (c = i(i({}, c), n)), {
                        type: "LOAD_MORE_USERS",
                        payload: o().get(window.apiUrl("/api/1/users"), {
                            params: c
                        })
                    }
                },
                w = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        r = e.offset,
                        a = e.isInternalVariant,
                        l = i(i({}, c), {}, {
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
                            params: l
                        })
                    }
                },
                g = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        r = e.offset,
                        a = e.isInternalVariant,
                        l = i(i({}, u), {}, {
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
                            params: l
                        })
                    }
                },
                v = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.offset,
                        l = e.isInternalVariant;
                    if (t.length < 3 || t.length > 20) return {
                        type: "LOAD_MORE_EVENTS",
                        payload: Promise.resolve({
                            data: []
                        })
                    };
                    var c = i(i({}, d), {}, {
                        searchTerm: m({
                            searchTerm: t,
                            isInternalVariant: l
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
                b = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        r = e.n,
                        a = e.isInternalVariant,
                        l = [];
                    return l.push(f({
                        searchTerm: t,
                        queryParams: n,
                        n: r,
                        isInternalVariant: a
                    })), l.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            r = e.isInternalVariant,
                            a = i(i({}, c), {}, {
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
                    })), l.push(function(e) {
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
                        var l = i(i({}, d), {}, {
                            searchTerm: m({
                                searchTerm: t,
                                isInternalVariant: a
                            }),
                            n: r
                        }, n);
                        return {
                            type: "SEARCH_EVENTS",
                            payload: o().get(window.apiUrl("/api/1/calendar/search"), {
                                params: l
                            })
                        }
                    }({
                        searchTerm: t,
                        queryParams: n,
                        n: r,
                        isInternalVariant: a
                    })), a && l.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            r = e.isInternalVariant,
                            a = i(i({}, u), {}, {
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
                    })), l
                },
                h = function() {
                    return {
                        type: "AUTO_REDIRECT_TOGGLE"
                    }
                }
        },
        87081(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            const r = (0, n(98984).createIconDescriptor)({
                name: "animated",
                width: 16,
                path: "M15.5573 8C15.5573 8.78437 15.3507 9.55498 14.9586 10.2344C14.5664 10.9138 14.0022 11.4778 13.3229 11.87C12.6435 12.2623 11.8729 12.4687 11.0885 12.4687C10.3041 12.4687 9.53347 12.2623 8.85408 11.87C8.1748 11.4778 7.61064 10.9138 7.21845 10.2344C6.82627 9.55498 6.61971 8.78437 6.61971 8C6.61971 7.21552 6.82627 6.4449 7.21845 5.76562C7.61064 5.08624 8.1748 4.52208 8.85408 4.12989C9.53347 3.7377 10.3041 3.53125 11.0885 3.53125C11.8729 3.53125 12.6435 3.73771 13.3229 4.12989C14.0022 4.52208 14.5664 5.08624 14.9586 5.76562C15.3507 6.4449 15.5573 7.21552 15.5573 8Z M7.02078 4.12769C4.88214 4.12769 3.14851 5.86134 3.14851 7.99995C3.14851 10.1386 4.88217 11.8722 7.02078 11.8722C7.03505 11.8721 7.05005 11.8718 7.06484 11.8715C7.17432 11.8691 7.18692 11.8167 7.09599 11.7559C5.88505 10.943 5.08474 9.56096 5.08474 7.99933C5.08474 6.43611 5.8866 5.05373 7.09953 4.24253C7.19047 4.18159 7.17808 4.13014 7.0686 4.12899C7.05193 4.12878 7.03693 4.12868 7.02099 4.12868L7.02078 4.12769Z M3.57599 4.86719C1.84567 4.86719 0.443192 6.26991 0.443192 8.00026C0.443192 9.73058 1.84591 11.1333 3.57599 11.1333C3.58547 11.1332 3.59745 11.1331 3.60714 11.1329C3.69829 11.1314 3.70849 11.0881 3.63308 11.0372C2.65548 10.3792 2.00964 9.26219 2.00964 8.00038C2.00964 6.73715 2.65673 5.62006 3.63598 4.96331C3.71171 4.91258 3.70119 4.86998 3.61005 4.86977H3.57577L3.57599 4.86719Z"
            })
        },
        21627(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            const r = (0, n(98984).createIconDescriptor)({
                name: "item",
                width: 1500,
                height: 1550,
                path: "M840.879 1540.66L871.394 909.849C792.413 960.721 739.097 960.721 667.896 960.721C596.695 960.721 505.218 920.024 484.808 909.849C477.32 947.303 480.858 984.757 483.245 1010.03C484.101 1019.08 484.808 1026.57 484.808 1031.94C484.808 1052.29 464.532 1052.29 433.951 1052.29C403.369 1052.29 382.959 1042.12 372.921 1021.77C364.891 1005.49 362.794 920.021 362.75 879.321C311.847 862.364 203.979 822.321 179.728 797.807C126.287 1118.3 189.53 1244.09 219.966 1304.62C224.326 1313.29 228.012 1320.63 230.586 1327C251.13 1377.87 464.532 1479.61 606.934 1530.49C720.855 1571.18 810.365 1554.23 840.879 1540.66Z M973.109 645.315C948.698 702.292 932.423 1259.17 927.337 1530.49C950.514 1521.65 974.436 1513.91 996.815 1506.66C1036.62 1493.77 1071.54 1482.47 1088.7 1469.44C1115.51 1449.09 1125.68 1377.87 1125.68 1367.7C1125.68 1357.52 1166.37 1323.61 1186.71 1316.82C1183.32 1160.82 1174.51 826.42 1166.37 736.885C1156.2 624.967 1125.68 553.746 1095.17 523.223C1064.65 492.7 1003.62 574.094 973.109 645.315Z M1033.94 400.989C1058.35 409.129 1071.23 438.296 1074.62 451.861C952.365 411.028 871.394 706.357 871.394 706.357C871.394 706.357 844.27 808.101 830.708 838.624C810.365 909.844 698.277 889.496 657.791 879.321C617.306 869.147 545.904 845.407 505.218 828.449C525.561 787.752 566.247 702.26 566.247 685.872C566.247 665.387 495.047 645.311 464.532 655.485C440.12 663.625 399.978 753.758 382.959 797.807C345.016 803.013 194.284 734.336 210.042 685.872C339.454 287.867 624.368 288.827 693.919 289.061C695.482 289.066 696.936 289.071 698.277 289.071C746.325 289.071 907.861 352.137 989.295 383.93C1011.29 392.519 1027.45 398.825 1033.94 400.989Z M983.281 85.7247C1013.8 106.073 1027.36 268.859 1023.97 340.079C1007.01 329.907 963.955 307.525 927.337 299.382C932.423 248.505 927.337 156.945 912.08 136.596C896.823 116.247 840.879 106.073 820.536 126.421C809.345 137.616 809.927 198.614 810.268 234.394C810.319 239.75 810.365 244.541 810.365 248.515C793.412 248.515 753.404 244.445 728.992 228.166C728.992 167.261 752.558 54.1262 779.85 45.0221C810.365 34.8429 952.766 65.3766 983.281 85.7247Z M1146.03 421.474L1095.17 360.428C1166.37 289.207 1227.4 279.033 1278.26 299.382C1329.11 319.73 1390.14 380.777 1400.31 482.521C1410.49 584.264 1441 950.542 1441 1072.63C1441 1186.45 1387.97 1238.37 1356.06 1269.62C1353.74 1271.89 1351.53 1274.05 1349.46 1276.12C1325.05 1300.54 1277.87 1304.62 1257.53 1304.62V1202.88C1302.15 1185.03 1307.92 1160.9 1322.4 1100.26C1324.43 1091.79 1326.62 1082.61 1329.11 1072.63C1349.46 991.242 1318.94 655.506 1308.77 543.577L1308.77 543.567C1298.61 431.72 1278.28 421.487 1237.65 401.029L1237.57 400.989C1205.02 384.602 1162.98 407.818 1146.03 421.474Z"
            })
        },
        28262(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => E
            });
            var r = n(5556),
                a = n.n(r),
                o = n(96540),
                l = n(74644),
                i = n.n(l),
                c = n(68301),
                s = n.n(c),
                u = n(79814),
                d = n.n(u),
                m = n(48048),
                f = n.n(m),
                p = n(97741),
                w = n.n(p),
                g = n(91500),
                v = n.n(g),
                b = {
                    circle: i(),
                    flower: s(),
                    heart: d(),
                    pow: f(),
                    square: w(),
                    star: v()
                },
                h = function(e) {
                    var t = e.metaData,
                        n = e.imageUrl,
                        r = e.size,
                        a = void 0 === r ? 180 : r,
                        l = e.onLoad,
                        i = e.onError,
                        c = e.isThumbnail,
                        s = void 0 !== c && c,
                        u = e.isGrayScale,
                        d = void 0 !== u && u,
                        m = (0, o.useRef)(0),
                        f = (0, o.useRef)(null),
                        p = (0, o.useRef)(null),
                        w = (0, o.useRef)(null),
                        g = (0, o.useRef)(null),
                        v = (0, o.useRef)(-1),
                        h = function(e) {
                            e.filter = d ? "grayscale(1)" : "none"
                        },
                        E = function() {
                            -1 !== v.current && (clearInterval(v.current), v.current = -1)
                        },
                        y = (0, o.useMemo)(function() {
                            return b[null == t ? void 0 : t.maskTag] || null
                        }, [t]),
                        A = (0, o.useRef)(!1),
                        x = (0, o.useMemo)(function() {
                            var e = !(null == t || !t.animated);
                            return e || E(), A.current = e, e
                        }, [t]),
                        C = (0, o.useMemo)(function() {
                            return null == t ? void 0 : t.frames
                        }, [t]),
                        k = (0, o.useMemo)(function() {
                            return null == t ? void 0 : t.framesOverTime
                        }, [t]),
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
                            E(), null === w.current && g.current && (w.current = g.current.getContext("2d")), w.current && w.current.clearRect(0, 0, a, a), x && C && k > 0 && (v.current = setInterval(M, 1e3 / k))
                        },
                        M = function() {
                            if (x) {
                                if (null !== w.current && null !== f.current) {
                                    var e = w.current;
                                    e.clearRect(0, 0, 1e3, 1e3), e.save(), null !== y && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in");
                                    var t = I(),
                                        n = N();
                                    h(e), e.drawImage(f.current, t.x, t.y, n, n, 0, 0, a, a), e.restore(), m.current = (m.current + 1) % C
                                }
                            } else E()
                        },
                        B = function() {
                            if (null !== g.current && null !== f.current) {
                                var e = g.current.getContext("2d");
                                if (e.clearRect(0, 0, a, a), e.imageSmoothingEnabled = !1, e.save(), null !== y && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in"), s) return h(e), e.drawImage(f.current, 0, 0, a, a), void e.restore();
                                f.current.width;
                                var t = f.current.width,
                                    n = f.current.height,
                                    r = t / n,
                                    o = r > 1 ? Math.min(a, t) : Math.min(a, n) * r,
                                    l = r > 1 ? Math.min(a, t) / r : Math.min(a, n);
                                h(e);
                                var i = (a - o) / 2,
                                    c = (a - l) / 2;
                                e.drawImage(f.current, i, c, o, l), e.restore()
                            }
                        },
                        j = function() {
                            f.current = null;
                            var e = new Image;
                            if (e.onload = function() {
                                    f.current = e, x && C && k ? O() : B(), void 0 !== l && l()
                                }, e.onerror = function(e) {
                                    console.error("Error loading image:", e), void 0 !== i && i(e)
                                }, y) {
                                var t = new Image;
                                t.onload = function() {
                                    p.current = t, f.current && (x && C && k || B())
                                }, t.src = y
                            } else p.current = null;
                            e.src = n
                        };
                    return (0, o.useEffect)(function() {
                        if (E(), f.current = null, p.current = null, g.current) {
                            var e = g.current.getContext("2d");
                            e && e.clearRect(0, 0, g.current.width, g.current.height)
                        }
                        return m.current = 0, j(),
                            function() {
                                E()
                            }
                    }, [t, n, a]), (0, o.useEffect)(function() {
                        if (f.current) return E(), x && C && k ? O() : B(),
                            function() {
                                E()
                            }
                    }, [x, C, k, a]), (0, o.useEffect)(function() {
                        j()
                    }, [n, y, a]), (0, o.useEffect)(function() {
                        return function() {
                            E()
                        }
                    }, []), o.createElement("canvas", {
                        width: a,
                        height: a,
                        ref: g
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
        46828(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n(70129),
                a = n(79162),
                o = n(49107),
                l = n(96540),
                i = n(71661);
            const c = function(e) {
                var t = e.imageUrl,
                    n = e.closeCallback,
                    r = e.nextCallback,
                    c = e.prevCallback;
                return t ? l.createElement(l.Fragment, null, l.createElement(u, {
                    onClick: n
                }), l.createElement(s, null, c && l.createElement(f, {
                    onClick: c,
                    hasCallback: c
                }, l.createElement(i.M2, {
                    icon: o.Wz,
                    width: 65
                })), l.createElement(d, {
                    src: t
                }), r && l.createElement(m, {
                    onClick: r,
                    hasCallback: r
                }, l.createElement(i.M2, {
                    icon: a.Xk,
                    width: 65
                })))) : null
            };
            var s = (0, r.A)("div", {
                    target: "eac6qxj4"
                })({
                    name: "ttwpi3",
                    styles: "position:fixed;display:flex;flex-direction:row;justify-content:center;align-items:center;z-index:1337;top:0;left:0;width:100%;height:100%;pointer-events:none;background:transparent"
                }),
                u = (0, r.A)("div", {
                    target: "eac6qxj3"
                })({
                    name: "jyw4fx",
                    styles: "position:fixed;background:rgba(0, 0, 0, 0.5);z-index:1336;top:0;left:0;width:100%;height:100%"
                }),
                d = (0, r.A)("img", {
                    target: "eac6qxj2"
                })({
                    name: "xgli30",
                    styles: "max-width:90%;max-height:90%;transition:all 0.3s ease;pointer-events:all"
                }),
                m = (0, r.A)("div", {
                    target: "eac6qxj1"
                })("margin:0 15px;cursor:pointer;pointer-events:all;opacity:", function(e) {
                    return e.hasCallback ? 1 : .5
                }, ";color:", function(e) {
                    return e.hasCallback ? "var(--gray-300)" : "var(--gray-600)"
                }, ";>*{transition:all 0.3s ease;:hover{transform:", function(e) {
                    return e.hasCallback ? "translate(5px, 0)" : "none"
                }, ";}}"),
                f = (0, r.A)(m, {
                    target: "eac6qxj0"
                })(">*:hover{transform:", function(e) {
                    return e.hasCallback ? "translate(-5px, 0)" : "none"
                }, ";}")
        },
        9663(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(96540),
                a = n(45588),
                o = n(47767);
            const l = function(e) {
                var t = e.to,
                    n = e.replace,
                    l = void 0 === n || n,
                    i = e.state,
                    c = e.relative,
                    s = (0, o.Zp)(),
                    u = (0, o.g)();
                if (!(0, o.Ri)()) throw new Error("RedirectLayout must be used in a Router context");
                return r.useEffect(function() {
                    s((0, a.tW)(t, u), {
                        replace: l,
                        state: i,
                        relative: c
                    })
                }), null
            }
        },
        15002(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n(82544),
                a = n(61145),
                o = n(96540),
                l = n(56822),
                i = n(48210),
                c = n(23935),
                s = n(6324);
            const u = function(e) {
                var t = e.searchString,
                    n = e.initialString,
                    u = void 0 === n ? "" : n,
                    d = e.placeholder,
                    m = (0, o.useState)(u),
                    f = (0, r.A)(m, 2),
                    p = f[0],
                    w = f[1];
                return o.createElement(c.A, null, o.createElement(s.A, {
                    icon: a.Mj,
                    color: "var(--bs-gray)",
                    width: 24,
                    className: (0, l.AH)({
                        name: "lo66c0",
                        styles: "position:absolute;left:7px;top:7px;pointer-events:none;z-index:5"
                    })
                }), o.createElement(i.A, {
                    className: (0, l.AH)({
                        name: "7lu28v",
                        styles: "padding-left:40px!important;height:37px!important;border-radius:7px!important"
                    }),
                    type: "text",
                    onChange: function(e) {
                        return n = e.target.value, t && t(n), void w(n);
                        var n
                    },
                    placeholder: null != d ? d : "Search...",
                    value: p
                }))
            };
            n.dn(u)
        },
        93930(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var r = n(64467),
                a = n(82544),
                o = n(76249),
                l = n(77276),
                i = n(56967),
                c = n(71661),
                s = n(42482),
                u = n(489),
                d = n(21591),
                m = n(55943),
                f = n(23892),
                p = n(13671),
                w = n(56822),
                g = n(78502),
                v = n(13419),
                b = n(13951),
                h = n(91069),
                E = n(96540),
                y = n(84976);

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const C = function(e) {
                var t, n, r, A, C = e.userData,
                    k = e.showLocation,
                    N = e.isUserHidden,
                    I = e.showStatus,
                    O = void 0 !== I && I,
                    M = e.openLinksInNewTab,
                    B = void 0 !== M && M,
                    j = e.isCard,
                    S = void 0 !== j && j,
                    q = e.isCompact,
                    P = void 0 !== q && q,
                    T = e.friendControls,
                    D = void 0 !== T && T,
                    F = e.moderateControls,
                    z = void 0 !== F && F,
                    R = e.editMode,
                    U = void 0 !== R && R,
                    L = e.editModeContent,
                    G = e.badges,
                    _ = e.tokenBalance,
                    V = e.children,
                    H = e.className,
                    W = e.gradientStart,
                    X = void 0 === W ? null : W,
                    Y = e.gradientEnd,
                    $ = void 0 === Y ? null : Y,
                    Q = e.nameplateImage,
                    Z = void 0 === Q ? null : Q,
                    J = e.alwaysAnimate,
                    K = void 0 !== J && J,
                    ee = e.hideProfileEffect,
                    te = void 0 !== ee && ee,
                    ne = e.backgroundColor,
                    re = void 0 === ne ? null : ne,
                    ae = e.borderColor,
                    oe = void 0 === ae ? null : ae,
                    le = e.borderWidth,
                    ie = void 0 === le ? null : le,
                    ce = (0, b.P2)(),
                    se = ce.data,
                    ue = ce.isSuccess,
                    de = (0, g.B)(),
                    me = ue,
                    fe = null == C ? void 0 : C.id,
                    pe = (0, E.useMemo)(function() {
                        return (0, h.gm)({
                            user: C,
                            currentUser: se
                        })
                    }, [se, C]),
                    we = (0, v.A)().getCosmeticByTemplateId,
                    ge = (0, E.useMemo)(function() {
                        var e = null == C ? void 0 : C.nameplateEffect;
                        return e ? we("nameplateEffect", e) : null
                    }, [null == C ? void 0 : C.nameplateEffect, we]),
                    ve = (0, E.useMemo)(function() {
                        var e = null == C ? void 0 : C.iconFrame;
                        return e ? we("iconFrame", e) : null
                    }, [null == C ? void 0 : C.iconFrame, we]),
                    be = (0, E.useMemo)(function() {
                        var e = null == C ? void 0 : C.profileEffect;
                        return e ? we("profileEffect", e) : null
                    }, [null == C ? void 0 : C.profileEffect, we]),
                    he = (0, E.useState)(!1),
                    Ee = (0, a.A)(he, 2),
                    ye = Ee[0],
                    Ae = Ee[1],
                    xe = (0, E.useState)(0),
                    Ce = (0, a.A)(xe, 2),
                    ke = Ce[0],
                    Ne = Ce[1],
                    Ie = (0, g.F)({
                        src: null == ge || null === (t = ge.mainAnimation) || void 0 === t ? void 0 : t.url,
                        resetKey: ye ? ke : null
                    }),
                    Oe = (0, m.A)(be, fe),
                    Me = Oe.animationSource,
                    Be = Oe.mainSrc,
                    je = Oe.baseSrc,
                    Se = Oe.isReady,
                    qe = function() {
                        Ne(function(e) {
                            return e + 1
                        }), Ae(!0)
                    },
                    Pe = function() {
                        Ae(!1)
                    },
                    Te = null != X ? X : null == ge ? void 0 : ge.gradientStart,
                    De = null != $ ? $ : null == ge ? void 0 : ge.gradientEnd,
                    Fe = Z || (null == ge || null === (n = ge.baseImage) || void 0 === n ? void 0 : n.url),
                    ze = Z || (null == ge || null === (r = ge.mainAnimation) || void 0 === r ? void 0 : r.url),
                    Re = (pe || {}).isSelf,
                    Ue = (0, g.Om)(),
                    Le = (0, g.CT)(),
                    Ge = Le.playerModerations,
                    _e = Ge.mute.users,
                    Ve = Ge.block.users,
                    He = Le.loading;
                if (!C) return null;
                var We = C.tags,
                    Xe = C.state,
                    Ye = C.status,
                    $e = C.location,
                    Qe = (C.profilePicOverride, C.currentAvatarThumbnailImageUrl, C.displayName),
                    Ze = C.iconUrl,
                    Je = (C.currentAvatarImageUrl, C.statusDescription),
                    Ke = C.bannerType,
                    et = C.bannerUrl,
                    tt = C.bannerColor,
                    nt = "usr_00000000-0000-0000-0000-000000000000" === fe,
                    rt = null !== (A = null == We ? void 0 : We.includes("admin_moderator")) && void 0 !== A && A,
                    at = null == _e ? void 0 : _e.includes(fe),
                    ot = null == Ve ? void 0 : Ve.includes(fe),
                    lt = "offline" === Xe && !Re,
                    it = function() {
                        return E.createElement("div", {
                            className: (0, w.cx)({
                                "tw-h-auto tw-min-h-50px tw-p-2": U
                            }, "tw-bg-darker-grey tw-border-dark-grey tw-items-center tw-rounded-tl-xl tw-rounded-tr-xl tw-h-0 tw-min-h-0 tw-transition-all tw-duration-[250ms] tw-ease-in-out")
                        }, E.createElement("div", {
                            className: (0, w.cx)("tw-opacity-0 tw-items-center tw-flex-grow tw-max-w-full tw-transition-all tw-duration-[250ms] tw-ease-in-out", {
                                "tw-opacity-100 tw-flex": U,
                                "tw-hidden": !U
                            })
                        }, L))
                    };
                if (N && !Ue || nt && !Ue) return null;
                if (S) {
                    var ct, st = !te && !N && Se && Me;
                    return E.createElement(E.Fragment, null, E.createElement("div", {
                        style: x(x(x({
                            "--avatar-size": "min(33.333%, 8rem)"
                        }, re && {
                            "--user-card-bg": re
                        }), oe && {
                            "--user-card-border": oe
                        }), ie && {
                            "--user-card-border-width": ie
                        }),
                        className: (0, w.cx)("tw-relative tw-rounded-2xl tw-pb-3 tw-border-solid tw-overflow-hidden", re ? "tw-bg-[var(--user-card-bg)]" : "tw-bg-grey", oe ? "tw-border-[var(--user-card-border)]" : "tw-border-grey", ie ? "tw-border-[length:var(--user-card-border-width)]" : "tw-border-4", H),
                        onMouseEnter: qe,
                        onMouseLeave: Pe
                    }, L && it(), E.createElement(y.N_, {
                        to: N || nt ? "#" : "/home/user/".concat(fe),
                        "aria-label": "Profile Picture",
                        className: "tw-no-underline"
                    }, E.createElement("div", {
                        className: "tw-overflow-hidden tw-rounded-tl-xl tw-rounded-tr-xl tw-h-[100px] tw-relative"
                    }, "color" === Ke && tt ? E.createElement("div", {
                        className: "tw-w-full tw-h-full",
                        style: {
                            backgroundColor: tt
                        }
                    }) : "customImage" !== Ke && "avatarBanner" !== Ke || !et ? E.createElement("div", {
                        className: "tw-w-full tw-h-full tw-bg-black"
                    }) : E.createElement("img", {
                        alt: "user banner",
                        src: et,
                        className: "tw-object-cover tw-w-full tw-h-full tw-object-top"
                    }), null != _ && E.createElement(y.N_, {
                        to: "/home/marketplace/wallet",
                        className: "tw-absolute tw-z-[2] tw-top-1 tw-right-1 tw-bg-[#0E141795] tw-px-[6px] tw-py-[2px] tw-rounded-2xl",
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }, E.createElement(c.eD, null), E.createElement("span", {
                        className: "tw-text-white"
                    }, null !== (ct = " ".concat(null == _ ? void 0 : _.toLocaleString())) && void 0 !== ct ? ct : " ???")), (null == G ? void 0 : G.length) > 0 && E.createElement("div", {
                        className: "tw-absolute tw-bottom-1 tw-right-1 tw-flex tw-gap-1 tw-z-[2]"
                    }, G.map(function(e) {
                        return E.createElement("div", {
                            key: e.badgeId,
                            role: "note",
                            "aria-label": e.badgeName,
                            className: (0, w.cx)("tw-w-9 tw-h-9 tw-rounded-full tw-bg-no-repeat tw-bg-center", e.pettable && "tw-cursor-grab active:tw-cursor-grabbing"),
                            style: {
                                backgroundColor: "rgba(17,17,17,0.8)",
                                backgroundImage: "url(".concat(e.badgeImageUrl, ")"),
                                backgroundSize: "24px"
                            }
                        })
                    }))), st && E.createElement("img", {
                        src: de || !ye ? je : Be,
                        alt: "Profile effect",
                        className: "tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-object-top tw-pointer-events-none tw-z-20 tw-rounded-xl"
                    }), !nt && E.createElement(y.N_, {
                        to: "/home/user/".concat(fe),
                        className: (0, w.cx)("tw-absolute tw-transition-all tw-duration-[250ms] tw-ease-in-out tw--translate-y-1/2 tw-z-30 tw-left-3 tw-h-[var(--avatar-size)] tw-aspect-square", {
                            "tw-top-[calc(50%+25px)]": U
                        })
                    }, E.createElement(p.A, {
                        profilePic: Ze,
                        displayName: Qe,
                        iconFrame: ve,
                        size: "fill",
                        isAnimating: ye,
                        borderClass: (0, w.cx)(re ? "tw-border-[var(--user-card-bg)]" : "tw-border-grey")
                    })), E.createElement("div", {
                        className: "tw-flex tw-gap-1 tw-flex-col tw-px-3 tw-pt-[46px] tw-relative tw-z-30"
                    }, E.createElement("div", {
                        className: "tw-flex tw-flex-row tw-items-center tw-gap-1"
                    }, E.createElement(y.N_, {
                        className: "tw-text-white",
                        to: N || nt ? "#" : "/home/user/".concat(fe),
                        target: B ? "_blank" : void 0,
                        "aria-label": "View ".concat(Qe, "'s profile"),
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }, E.createElement("h4", {
                        className: "tw-truncate tw-text-left tw-mb-0"
                    }, Qe)), at && !N && E.createElement(c.M2, {
                        icon: l.$z,
                        className: "tw-text-error-message-red",
                        title: "User is muted"
                    }), ot && !N && E.createElement(c.M2, {
                        icon: o.c7,
                        className: "tw-text-error-message-red",
                        title: "User is blocked"
                    })), O && E.createElement(s.A, {
                        status: Ye,
                        withLabel: !0,
                        isOffline: lt,
                        customStatus: Je,
                        className: "tw-text-subtext-grey"
                    })))), V)
                }
                var ut = !S && Te && De ? {
                    background: "linear-gradient(to right, ".concat(Te, ", ").concat(De, ")")
                } : {};
                return E.createElement("div", null, L && it(), E.createElement("div", {
                    className: (0, w.cx)("tw-p-3 tw-relative tw-rounded-lg", re ? "tw-bg-[var(--user-card-bg)]" : !Te && !De && "tw-bg-grey hover:tw-bg-[#363B41]", H),
                    style: x(x({}, ut), re && {
                        "--user-card-bg": re
                    }),
                    onMouseEnter: qe,
                    onMouseLeave: Pe
                }, Fe && E.createElement("div", {
                    className: "tw-absolute tw-inset-0 tw-rounded-lg tw-overflow-hidden tw-pointer-events-none"
                }, K && ze && !de ? E.createElement("img", {
                    src: ze,
                    alt: "Nameplate decoration animated",
                    className: "tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-auto tw-object-contain tw-object-right"
                }) : E.createElement(E.Fragment, null, (!ye || de) && E.createElement("img", {
                    src: Fe,
                    alt: "Nameplate decoration",
                    className: "tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-auto tw-object-contain tw-object-right"
                }), ze && ye && !de && E.createElement("img", {
                    ref: Ie,
                    src: ze,
                    alt: "Nameplate decoration animated",
                    className: "tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-auto tw-object-contain tw-object-right"
                }))), E.createElement("div", {
                    className: "tw-flex tw-flex-row tw-mx-0 tw-gap-3 tw-items-center tw-relative"
                }, E.createElement("div", {
                    className: "tw-relative tw-flex tw-flex-col"
                }, E.createElement("div", null, (Ue || !N) && !nt && E.createElement(y.N_, {
                    to: N || nt ? "#" : "/home/user/".concat(fe),
                    title: N ? "Hidden" : Xe,
                    target: B ? "_blank" : void 0
                }, E.createElement("div", {
                    className: "tw-relative"
                }, Ue && N && E.createElement(c.M2, {
                    icon: i.k6,
                    className: "tw-text-4xl tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-lighter-grey tw-z-10"
                }), E.createElement(p.A, {
                    profilePic: Ze,
                    displayName: Qe,
                    iconFrame: ve,
                    size: "nameplate",
                    hideBorder: !0,
                    isAnimating: ye
                }))))), (Ue || !N) && E.createElement("div", {
                    className: "tw-flex-1 tw-flex tw-flex-col tw-w-full"
                }, E.createElement("h6", {
                    className: "tw-mb-[6px] tw-space-x-2"
                }, E.createElement(y.N_, {
                    className: "tw-text-lighter-grey",
                    to: N || nt ? "#" : "/home/user/".concat(fe),
                    target: B ? "_blank" : void 0
                }, Qe), at && E.createElement(c.M2, {
                    icon: l.$z,
                    className: "tw-text-error-message-red",
                    title: "User is muted"
                }), ot && E.createElement(c.M2, {
                    icon: o.c7,
                    className: "tw-text-error-message-red",
                    title: "User is blocked"
                }))), E.createElement("div", {
                    className: "tw-flex tw-items-center tw-gap-3"
                }, D && !P && me && !Re && !rt && !N && E.createElement(d.A, {
                    userId: fe,
                    slim: !0,
                    containerClasses: "tw-rounded-lg tw-h-10",
                    className: "tw-text-subtext-grey tw-border-none tw-px-3 tw-p-2 tw-flex tw-items-center tw-gap-1 ".concat(ge ? "tw-bg-grey-transparent-90" : "tw-bg-grey")
                }), z && !P && me && !Re && !rt && !N && E.createElement(f.A, {
                    neutral: !0,
                    className: "tw-text-subtext-grey tw-border-none tw-px-3 tw-p-2 ".concat(ge ? "tw-bg-grey-transparent-90" : "tw-bg-grey"),
                    containerClasses: "tw-rounded-lg tw-h-10",
                    userId: fe,
                    isMuted: at,
                    isBlocked: ot,
                    isLoading: He
                }))), "online" === Xe && k && E.createElement("div", null, $e && E.createElement(u.A, {
                    location: $e,
                    userId: fe,
                    currentUser: se,
                    size: "normal"
                }))))
            }
        },
        63576(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => x
            });
            var r = n(66911),
                a = n(64467),
                o = n(82544),
                l = n(75183),
                i = n(71661),
                c = n(96540),
                s = n(73747),
                u = n(31226),
                d = n(86419),
                m = n(5556),
                f = n.n(m);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var g = function(e) {
                var t = e.option,
                    n = e.onFilterChangeCallBack,
                    r = e.dropdownFilterValues,
                    a = (0, c.useState)(r[t.type].includes(t.value)),
                    l = (0, o.A)(a, 2),
                    s = l[0],
                    u = l[1];
                (0, c.useEffect)(function() {
                    u(r[t.type].includes(t.value))
                }, [r, t]);
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
                        u(e.target.checked), n(w(w({}, t), {}, {
                            isChecked: e.target.checked
                        }))
                    }
                }), c.createElement("label", {
                    htmlFor: d,
                    className: "tw-cursor-pointer "
                }, t.icon && c.createElement(i.M2, {
                    icon: t.icon,
                    color: t.color,
                    className: "tw-mx-2 tw-w-6"
                }), c.createElement("span", {
                    className: "tw-truncate tw-w-fit tw-overflow-hidden tw-text-lg tw-text-white ".concat(t.icon ? "tw-ml-0" : "tw-ml-2")
                }, t.label))))
            };
            g.propTypes = {
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
            const v = g;

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const E = function(e) {
                var t = e.type,
                    n = e.onFilterChangeCallBack,
                    r = e.dropdownFilterValues,
                    a = (0, c.useState)(!0),
                    l = (0, o.A)(a, 2),
                    s = l[0],
                    m = l[1],
                    f = t.label,
                    p = t.dataKey,
                    w = t.options;
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
                }, f), c.createElement(i.M2, {
                    icon: s ? d.w2 : u.Jt,
                    className: "tw-mr-2 tw-ml-1 tw-text-highlight"
                })), c.createElement("ul", {
                    className: "\n          tw-transition-all tw-duration-500 tw-flex tw-flex-col\n          tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-overflow-hidden\n          ".concat(s ? "tw-max-h-full" : "tw-max-h-0", "\n        ")
                }, w.filter(function(e) {
                    return e
                }).map(function(e) {
                    return c.createElement(v, {
                        key: e.value,
                        option: h(h({}, e), {}, {
                            type: p
                        }),
                        onFilterChangeCallBack: n,
                        dropdownFilterValues: r
                    })
                })))
            };

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const x = function(e) {
                var t = e.className,
                    n = e.possibleFilters,
                    a = e.onFilterChangeCallBack,
                    u = e.userGroups,
                    d = void 0 === u ? [] : u,
                    m = e.dropdownFilterValues,
                    f = (0, c.useRef)(null),
                    p = (0, c.useState)(!1),
                    w = (0, o.A)(p, 2),
                    g = w[0],
                    v = w[1],
                    b = (n.eventSources, n.accessTypes),
                    h = n.categories,
                    y = n.days,
                    x = n.platforms,
                    C = n.languages,
                    k = function(e) {
                        if (!f.current.contains(e.target)) return v(!1)
                    };
                (0, c.useEffect)(function() {
                    return g ? window.addEventListener("click", k) : window.removeEventListener("click", k),
                        function() {
                            window.removeEventListener("click", k)
                        }
                }, [g]);
                var N, I, O = (N = s.sT.map(function(e) {
                    return e === s.h8.SOURCE ? e : e === s.h8.ACCESSTYPE ? A(A({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == b ? void 0 : b.includes(e.value)
                        })
                    }) : e === s.h8.CATEGORY ? A(A({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == h ? void 0 : h.includes(e.value)
                        })
                    }) : e === s.h8.DAY ? A(A({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == y ? void 0 : y.includes(e.value)
                        })
                    }) : e === s.h8.PLATFORM ? A(A({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == x ? void 0 : x.includes(e.value)
                        })
                    }) : e === s.h8.LANGUAGE ? A(A({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == C ? void 0 : C.includes(e.value)
                        })
                    }) : e
                }), null === (I = (0, s.rw)({
                    filters: n,
                    userGroups: d
                })) ? N : [].concat((0, r.A)(N), [I]));
                return c.createElement("div", {
                    ref: f,
                    className: "relative tw-transition-all ".concat(t)
                }, c.createElement("button", {
                    className: "\n          tw-bg-button-bg tw-border-2 tw-border-solid tw-rounded tw-w-full tw-h-10 tw-cursor-pointer tw-text-highlight\n          ".concat(g ? "tw-border-button-border" : "tw-border-button-bg", "\n        "),
                    type: "button",
                    onClick: function() {
                        v(!g)
                    }
                }, c.createElement(i.M2, {
                    icon: l.mR,
                    className: "tw-mr-1"
                }), " Filters"), c.createElement("div", {
                    className: "\n          tw-w-56 tw-border-button-border tw-bg-option-bg tw-border-2 tw-border-solid tw-mt-2 tw-rounded-sm tw-p-2 tw-pb-3 tw-z-10 tw-max-h-[650px] tw-overflow-y-auto\n          ".concat(g ? "tw-absolute" : "tw-hidden", "\n        ")
                }, c.createElement("ul", {
                    className: "tw-flex tw-flex-col tw-gap-2 tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-select-none"
                }, O.map(function(e) {
                    return e.options.length > 0 && c.createElement(E, {
                        key: e.label,
                        type: e,
                        onFilterChangeCallBack: a,
                        dropdownFilterValues: m
                    })
                }))))
            }
        },
        54734(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r, a = n(57528),
                o = n(82544),
                l = n(70129),
                i = n(62387),
                c = n(39281),
                s = n(56822),
                u = n(17437),
                d = n(40085),
                m = n(91069),
                f = n(96540),
                p = n(84976),
                w = n(47767),
                g = n(71661);
            var v = "https://assets.vrchat.com/www/groups/default_banner.png",
                b = "https://assets.vrchat.com/www/groups/default_icon.png";
            const h = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    a = e.isSelectable,
                    l = e.selectCallback,
                    s = void 0 === l ? function() {} : l,
                    u = (0, w.Zp)(),
                    p = (0, d.Kg)(),
                    h = (0, o.A)(p, 2),
                    x = h[0],
                    N = h[1],
                    F = (N.isError, N.isSuccess, function(e) {
                        e.preventDefault(), a ? s(t) : u("/home/group/".concat(null != z ? z : R))
                    }),
                    z = t.groupId,
                    R = t.id,
                    U = t.name,
                    L = t.shortCode,
                    G = t.discriminator,
                    _ = t.description,
                    V = t.memberCount,
                    H = t.iconId,
                    W = t.bannerId,
                    X = a ? j : S,
                    Y = a ? T : D,
                    $ = a ? q : P;
                return f.createElement(X, {
                    to: "/home/group/".concat(null != z ? z : R),
                    "aria-label": "Group Card",
                    className: "tw-border-solid tw-border-grey tw-border hover:tw-border-light-grey tw-transition-colors"
                }, f.createElement(C, null, f.createElement(I, null, f.createElement(M, {
                    src: W ? (0, m.Iu)({
                        fileId: W,
                        width: "256"
                    }) : v,
                    alt: U,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = v
                    }
                }), f.createElement(O, null, f.createElement(B, {
                    src: H ? (0, m.Iu)({
                        fileId: H,
                        width: "256"
                    }) : b,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = b
                    }
                }))), f.createElement(g.fI, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, f.createElement(Y, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: F
                }, f.createElement($, null, U)))), f.createElement(k, null, f.createElement(A, null, f.createElement(E, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, f.createElement("small", null, _)), f.createElement(y, null, f.createElement("small", null, f.createElement(g.M2, {
                    icon: c.gd
                }), " ", V), f.createElement("small", null, L, ".", G)))), a && f.createElement(g.$n, {
                    onClick: F
                }, "Select"), n && f.createElement(g.$n, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), x({
                            groupId: z,
                            userId: r
                        })
                    }
                }, f.createElement(g.M2, {
                    icon: i.AU
                }), " Unblock"))
            };
            var E = (0, l.A)("div", {
                    target: "e1nq4ok414"
                })({
                    name: "1x8v68w",
                    styles: "height:58px;>small{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"
                }),
                y = (0, l.A)("div", {
                    target: "e1nq4ok413"
                })({
                    name: "13r4cb0",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0 20px"
                }),
                A = (0, l.A)("div", {
                    target: "e1nq4ok412"
                })({
                    name: "g2frxj",
                    styles: "display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:100%"
                }),
                x = (0, u.i7)(r || (r = (0, a.A)(["\n  0% {\n    border-color: transparent;\n  }\n  25% {\n    border-color: #20c5e8;\n  }\n  100% {\n    border-color: transparent;\n  }\n"]))),
                C = (0, l.A)(g.fv, {
                    target: "e1nq4ok411"
                })({
                    name: "diayph",
                    styles: "padding:0.1rem;background-color:#252a30;border-color:#252a30;border-style:solid;border-width:3px 3px 0 3px;border-radius:8px 8px 0 0"
                }),
                k = (0, l.A)(C, {
                    target: "e1nq4ok410"
                })({
                    name: "1svfl3y",
                    styles: "padding:5px;background-color:#181b1f;border-color:#181b1f;border-width:0 3px 3px 3px;border-radius:0 0 8px 8px;height:auto;overflow:hidden;color:#737372;transition:max-height 0.1s ease-in"
                }),
                N = (0, s.AH)("animation-name:", x, ";animation-fill-mode:forwards;animation-iteration-count:1;animation-duration:2s;animation-timing-function:ease-out;", ""),
                I = (0, l.A)("div", {
                    target: "e1nq4ok49"
                })({
                    name: "16vzknb",
                    styles: "padding-top:35%;height:0;overflow:visible;border-radius:8px;position:relative;display:flex;flex-shrink:0"
                }),
                O = (0, l.A)("div", {
                    target: "e1nq4ok48"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                M = (0, l.A)("img", {
                    target: "e1nq4ok47"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                B = (0, l.A)("img", {
                    target: "e1nq4ok46"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                j = (0, l.A)("div", {
                    target: "e1nq4ok45"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                S = (0, l.A)(p.N_, {
                    target: "e1nq4ok44"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                q = (0, l.A)("h4", {
                    target: "e1nq4ok43"
                })({
                    name: "15baaq2",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;padding-bottom:2px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                }),
                P = (0, l.A)(q, {
                    target: "e1nq4ok42"
                })({
                    name: "l8p4qc",
                    styles: "&:hover{color:var(--primary);}"
                }),
                T = (0, l.A)("div", {
                    target: "e1nq4ok41"
                })({
                    name: "11z3e6t",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0"
                }),
                D = (0, l.A)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        },
        16578(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Mr
            });
            var r = n(82544),
                a = n(38495),
                o = n(96540),
                l = n(6376),
                i = n(47767),
                c = n(56822),
                s = n(13099),
                u = n(74353),
                d = n.n(u),
                m = n(26664),
                f = n(83159),
                p = n(61096),
                w = n(38275),
                g = n(75976),
                v = n(79162),
                b = n(7612),
                h = n(49107),
                E = n(19931),
                y = n(90482),
                A = n(74292),
                x = n(86558),
                C = n(71661),
                k = n(97963),
                N = n(48169),
                I = n(87081),
                O = n(32124),
                M = n(75499),
                B = n(78502),
                j = n(5556),
                S = n.n(j),
                q = n(22351),
                P = n(23253),
                T = n(84976),
                D = n(71957);
            const F = function(e) {
                var t, n, r, a, l, i, c = e.attribution,
                    s = null == c || null === (t = c.creator) || void 0 === t ? void 0 : t.userId,
                    u = null == c || null === (n = c.publisher) || void 0 === n ? void 0 : n.userId,
                    d = (0, D.vf)(s, {
                        skip: !s
                    }).data,
                    m = (0, D.vf)(u, {
                        skip: !u
                    }).data,
                    f = s || (null == c || null === (r = c.creator) || void 0 === r ? void 0 : r.customName),
                    p = u || (null == c || null === (a = c.publisher) || void 0 === a ? void 0 : a.customName);
                if (!f && !p) return null;
                var w = s ? null == d ? void 0 : d.displayName : null == c || null === (l = c.creator) || void 0 === l ? void 0 : l.customName,
                    g = u ? null == m ? void 0 : m.displayName : null == c || null === (i = c.publisher) || void 0 === i ? void 0 : i.customName;
                return o.createElement(o.Fragment, null, f && w && o.createElement("div", {
                    className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                }, o.createElement("h4", {
                    className: "tw-text-base tw-font-normal"
                }, "Created By"), o.createElement("div", {
                    className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                }, s ? o.createElement(T.N_, {
                    to: "/home/user/".concat(s),
                    target: "_blank",
                    rel: "noreferrer"
                }, w) : w)), p && g && o.createElement("div", {
                    className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                }, o.createElement("h4", {
                    className: "tw-text-base tw-font-normal"
                }, "Published By"), o.createElement("div", {
                    className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                }, u ? o.createElement(T.N_, {
                    to: "/home/user/".concat(u),
                    target: "_blank",
                    rel: "noreferrer"
                }, g) : g)))
            };
            var z = n(28262),
                R = function(e) {
                    var t, n, a = e.gallery,
                        l = void 0 === a ? [] : a,
                        i = e.isOpen,
                        c = void 0 !== i && i,
                        s = e.onCloseCallback,
                        u = e.openIndex,
                        m = e.deleteItemCallback,
                        j = void 0 === m ? null : m,
                        S = e.onArchiveCallback,
                        T = void 0 === S ? null : S,
                        D = e.type,
                        R = (0, B.a$)().user,
                        U = (0, o.useRef)(null),
                        L = (0, o.useState)(u),
                        G = (0, r.A)(L, 2),
                        _ = G[0],
                        V = G[1],
                        H = (0, o.useState)({
                            x: 0,
                            y: 0
                        }),
                        W = (0, r.A)(H, 2),
                        X = W[0],
                        Y = W[1],
                        $ = (0, o.useState)(!1),
                        Q = (0, r.A)($, 2),
                        Z = Q[0],
                        J = Q[1],
                        K = (0, o.useState)({
                            x: 0,
                            y: 0
                        }),
                        ee = (0, r.A)(K, 2),
                        te = ee[0],
                        ne = ee[1],
                        re = (0, o.useState)(1),
                        ae = (0, r.A)(re, 2),
                        oe = ae[0],
                        le = ae[1],
                        ie = (0, o.useState)(!1),
                        ce = (0, r.A)(ie, 2),
                        se = ce[0],
                        ue = ce[1],
                        de = (0, o.useState)(!0),
                        me = (0, r.A)(de, 2),
                        fe = me[0],
                        pe = me[1],
                        we = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[_]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes(q.R9.VRC_PLUS_EXCUSIVE)
                        }, [l, _]),
                        ge = (0, o.useMemo)(function() {
                            return we && !(null != R && R.hasVRCPlus)
                        }, [we, R]),
                        ve = (0, o.useMemo)(function() {
                            return _ === l.length - 1
                        }, [_, l]),
                        be = (0, o.useMemo)(function() {
                            return 0 === _
                        }, [_]),
                        he = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[_]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("quantifiable")
                        }, [l, _]),
                        Ee = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[_]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("premium")
                        }, [l, _]),
                        ye = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[_]) || void 0 === e || null === (e = e.metadata) || void 0 === e ? void 0 : e.animated
                        }, [l, _]),
                        Ae = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = q.jQ[D]) || void 0 === e ? void 0 : e.label
                        }, [D]),
                        xe = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = q.jQ[D]) || void 0 === e ? void 0 : e.icon
                        }, [D]),
                        Ce = (0, o.useMemo)(function() {
                            return l[_]
                        }, [l, _]);
                    (0, o.useEffect)(function() {
                        0 !== l.length || s()
                    }, [l]), (0, o.useEffect)(function() {
                        V(u)
                    }, [u]);
                    var ke = (0, o.useCallback)(function() {
                            le(1), Y({
                                x: 0,
                                y: 0
                            }), ue(!1), pe(!0), ne({
                                x: 0,
                                y: 0
                            }), s()
                        }, [s]),
                        Ne = (0, o.useMemo)(function() {
                            var e, t, n;
                            return null !== (e = null === (t = l[_]) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== e ? e : null === (n = l[_]) || void 0 === n ? void 0 : n.imageUrl
                        }, [l, _]),
                        Ie = (0, o.useCallback)(function(e) {
                            e.preventDefault();
                            var t = -.01 * e.deltaY;
                            le(function(e) {
                                return Math.min(Math.max(e + t, .5), 3)
                            })
                        }, []),
                        Oe = q.jQ[D],
                        Me = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[_]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("archivable")
                        }, [l, _]);
                    (0, o.useEffect)(function() {
                        V(u), pe(!0)
                    }, [u, c]), (0, o.useEffect)(function() {
                        var e = U.current;
                        if (e) return e.addEventListener("wheel", Ie, {
                                passive: !1
                            }),
                            function() {
                                e.removeEventListener("wheel", Ie)
                            }
                    }, [Ie, c, U]), (0, o.useEffect)(function() {
                        var e = function(e) {
                            "Escape" === e.key && ke()
                        };
                        if (c) return window.addEventListener("keydown", e),
                            function() {
                                window.removeEventListener("keydown", e)
                            }
                    }, [c, ke]);
                    var Be = (0, o.useCallback)(function(e) {
                            e.preventDefault(), J(!0), ne({
                                x: e.clientX - X.x,
                                y: e.clientY - X.y
                            })
                        }, [X]),
                        je = (0, o.useCallback)(function(e) {
                            e.preventDefault(), Z && Y({
                                x: e.clientX - te.x,
                                y: e.clientY - te.y
                            })
                        }, [Z, te]),
                        Se = (0, o.useCallback)(function() {
                            J(!1)
                        }, []),
                        qe = function() {
                            le(1), Y({
                                x: 0,
                                y: 0
                            })
                        };
                    return l.length && c ? o.createElement("div", {
                        className: "tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-[1040] tw-bg-dark-grey-transparent-90"
                    }, o.createElement("div", {
                        className: "tw-fixed lg:tw-flex lg:tw-flex-row tw-justify-between tw-h-full tw-w-screen"
                    }, o.createElement("div", {
                        className: "\n          tw-fixed tw-select-none \n          tw-top-0 tw-left-0 tw-right-0 tw-bottom-0\n          lg:tw-relative\n          ".concat(se ? "tw-w-full" : "lg:tw-w-3/4")
                    }, we && o.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-left-6 tw-z-50"
                    }, o.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-2 tw-border-solid tw-rounded-full tw-px-4 tw-py-2 tw-border tw-border-vrc-plus-yellow tw-w-fit"
                    }, o.createElement(N.A, null), o.createElement("p", {
                        className: "tw-mb-0 tw-whitespace-nowrap"
                    }, "VRC+ Exclusive"))), o.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-right-6 tw-h-9 tw-w-32 tw-z-50"
                    }, o.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-32"
                    }, o.createElement(k.Ay, {
                        onClick: function() {
                            le(function(e) {
                                return Math.min(e + .1, 3)
                            })
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, o.createElement(C.M2, {
                        icon: x.bM
                    })), o.createElement(k.Ay, {
                        onClick: function() {
                            le(function(e) {
                                return Math.max(e - .1, .5)
                            })
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, o.createElement(C.M2, {
                        icon: A.rV
                    })), o.createElement(k.Ay, {
                        onClick: function() {
                            return ue(!se)
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9",
                        title: "Toggle fullscreen"
                    }, o.createElement(C.M2, {
                        icon: se ? y.DO : E.sk
                    })))), o.createElement("div", {
                        className: "tw-flex tw-w-full tw-h-full tw-justify-between tw-items-center"
                    }, o.createElement(k.Ay, {
                        onClick: function() {
                            be || (V(function(e) {
                                return e - 1
                            }), qe(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(be ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, o.createElement(C.M2, {
                        icon: h.Wz,
                        className: "tw-w-12 tw-h-[60px] tw-ml-4"
                    })), o.createElement("div", {
                        ref: U,
                        className: "tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden gallery-image-container",
                        onMouseDown: Be,
                        onMouseMove: je,
                        onMouseUp: Se,
                        onMouseLeave: Se
                    }, fe && o.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center tw-absolute tw-inset-0"
                    }, o.createElement(C.M2, {
                        icon: b.z1,
                        spin: !0,
                        color: "#404C58",
                        width: 92
                    })), o.createElement("div", {
                        style: {
                            transform: "translate(".concat(X.x, "px, ").concat(X.y, "px) scale(").concat(oe, ")"),
                            transition: Z ? "none" : "transform 0.1s ease-out",
                            cursor: Z ? "grabbing" : "grab",
                            opacity: fe ? 0 : 1
                        }
                    }, o.createElement(z.A, {
                        imageUrl: Ne,
                        metaData: null == Ce ? void 0 : Ce.metadata,
                        onLoad: function() {
                            return pe(!1)
                        },
                        onError: function() {
                            return pe(!1)
                        },
                        isGrayScale: ge,
                        size: 400
                    })), o.createElement("div", {
                        className: " tw-absolute tw-flex tw-items-center tw-justify-center tw-gap-5 tw-bottom-auto tw-top-24 lg:tw-top-auto lg:tw-bottom-32  "
                    }, he && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#2E333D] tw-rounded-2xl tw-border-solid tw-border-[#2E333D] tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(C.M2, {
                        icon: g.faXmark,
                        width: 18,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, null !== (t = null == Ce ? void 0 : Ce.quantity) && void 0 !== t ? t : 0)), Ee && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(C.M2, {
                        icon: M.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Premium")), ye && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(C.M2, {
                        icon: I.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Animated")))), o.createElement(k.Ay, {
                        onClick: function() {
                            ve || (V(function(e) {
                                return e + 1
                            }), qe(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(ve ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, o.createElement(C.M2, {
                        icon: v.Xk,
                        className: "tw-w-12 tw-h-[60px] tw-mr-4"
                    })))), o.createElement("div", {
                        className: "\n            tw-bg-darker-grey tw-transition-all\n            tw-absolute tw-bottom-0 tw-h-auto\n            lg:tw-relative\n            ".concat(se ? "tw-w-0 tw-p-0 tw-opacity-0" : "tw-w-screen tw-px-5 tw-py-9 lg:tw-w-1/4 lg:tw-min-w-[300px]", "\n          ")
                    }, o.createElement("div", {
                        className: "tw-flex tw-items-baseline tw-justify-between"
                    }, o.createElement("h3", {
                        className: "heading tw-text-white tw-text-left tw-text-2xl"
                    }, o.createElement(C.M2, {
                        icon: xe,
                        className: "tw-mr-2"
                    }), Ae), o.createElement(k.Ay, {
                        className: "tw-w-9 tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        onClick: ke
                    }, o.createElement(C.M2, {
                        icon: g.faXmark
                    }))), o.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-items-baseline sm:tw-justify-between tw-mt-2 sm:tw-mt-10 tw-justify-end tw-items-end"
                    }, o.createElement("div", {
                        className: "tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal tw-hidden sm:tw-block"
                    }, "Manage"), o.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full"
                    }, P.C && Oe.hasConvertToVrcEmojis && o.createElement(k.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full  tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey tw-mr-2 "
                    }, o.createElement(C.M2, {
                        icon: O.default
                    }), "Create Emoji From Sticker"), Oe.hasDelete && o.createElement(k.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Delete ".concat(Ae),
                        onClick: function() {
                            null == j || j(Ce)
                        }
                    }, o.createElement(C.M2, {
                        icon: w.yL,
                        className: "tw-mr-2"
                    }), "Delete"), Oe.hasArchive && Me && o.createElement(k.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-h-12 sm:tw-h-9 tw-w-full tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Archive Sticker",
                        onClick: function() {
                            return null == T ? void 0 : T(Ce)
                        }
                    }, o.createElement(C.M2, {
                        icon: p.TH,
                        className: "tw-mr-2"
                    }), "Archive"))), (null == Ce ? void 0 : Ce.description) && o.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Description"), o.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, Ce.description)), ge && o.createElement("a", {
                        className: " tw-my-6 tw-text-white tw-w-full tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-no-underline hover:tw-no-underline tw-border-vrc-plus-yellow tw-border-2 tw-p-4 tw-bg-vrc-plus-yellow/10 tw-border-solid ",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://hello.vrchat.com/vrchatplus?utm_source=vrchatwebapp&utm_medium=VRCPlus_exclusive_item_upsell"
                    }, o.createElement(N.A, null), o.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-mx-2 tw-text-lg"
                    }, "Unlock With VRC+")), (null == Ce || null === (n = Ce.collections) || void 0 === n ? void 0 : n.length) > 0 && o.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Collections"), o.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, Ce.collections.map(function(e) {
                        return e
                    }).join(", "))), o.createElement(F, {
                        attribution: null == Ce ? void 0 : Ce.attribution
                    }), (null == Ce ? void 0 : Ce.created_at) && o.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Date Created"), o.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, o.createElement(C.M2, {
                        icon: f.ok,
                        className: "tw-mr-2"
                    }), d()(null == Ce ? void 0 : Ce.created_at).format("ll, h:mm A"))))))) : null
                };
            const U = R;
            R.propTypes = {
                gallery: S().array.isRequired,
                isOpen: S().bool.isRequired,
                onCloseCallback: S().func.isRequired,
                openIndex: S().number.isRequired,
                deleteItemCallback: S().func,
                onArchiveCallback: S().func,
                type: S().string
            };
            const L = function() {
                var e = (0, l.wA)(),
                    t = (0, l.d4)(m.Ug),
                    n = t.isOpen,
                    r = t.gallery,
                    a = t.openIndex,
                    i = t.deleteItemCallback,
                    c = t.onArchiveCallback,
                    s = t.type;
                if ((0, o.useEffect)(function() {
                        return function() {
                            return e((0, m.kq)())
                        }
                    }, [e]), null == r || !r.length) return null;
                var u = Math.min(Math.max(0, a), r.length - 1);
                return o.createElement(U, {
                    gallery: r,
                    isOpen: n,
                    onCloseCallback: function() {
                        e((0, m.xH)()), e((0, m.kq)())
                    },
                    openIndex: u,
                    deleteItemCallback: i,
                    onArchiveCallback: c,
                    type: s
                })
            };
            var G = n(21099),
                _ = n.n(G),
                V = n(32662),
                H = n(13951),
                W = n(30104);
            const X = function() {
                var e = (0, H.p$)().data,
                    t = (0, o.useState)(!1),
                    n = (0, r.A)(t, 2),
                    a = n[0],
                    l = n[1],
                    i = (0, V.Mj)("tutorialInventorySeen", !1),
                    c = (0, r.A)(i, 2),
                    s = c[0],
                    u = c[1];
                (0, o.useEffect)(function() {
                    l(!s)
                }, []);
                return a && e ? o.createElement("div", {
                    className: "tw-fixed tw-inset-0 tw-z-[2000] tw-pointer-events-all"
                }, o.createElement("div", {
                    className: " tw-absolute tw-rounded-lg tw-z-[2001] tw-shadow-[0_0_0_100vmax_rgba(0,0,0,0.8)] tw-transition-all tw-duration-500 tw-top-[0px] tw-left-[0px] tw-w-[65px] tw-h-[60px] 2xl:tw-top-[60px] 2xl:tw-left-[0px] 2xl:tw-w-[280px] 2xl:tw-h-[1000px] "
                }), o.createElement("div", {
                    className: " tw-rounded-lg tw-bg-link-highlight tw-z-[3002] tw-absolute tw-p-5 tw-transition-all tw-duration-500 tw-w-full sm:tw-w-[450px] tw-top-[60px] tw-left-0 sm:tw-top-[30px] sm:tw-left-[60px] 2xl:tw-top-auto 2xl:tw-bottom-[20px] 2xl:tw-left-[285px]  before:tw-opacity-100 before:tw-content-[''] before:tw-absolute before:tw-border-t-0 before:tw-border-solid before:tw-border-transparent before:tw-border-[30px] before:tw-border-l-link-highlight before:tw-left-[12px] before:tw-top-[-0px] before:tw-rotate-45 sm:before:tw-left-[-30px] sm:before:tw-top-[15px] sm:before:tw-rotate-90 2xl:before:tw-opacity-0 "
                }, o.createElement("div", {
                    className: "tw-flex tw-justify-between tw-flex-col"
                }, o.createElement("p", {
                    className: "tw-font-bold tw-text-[#1a1a1a]"
                }, "The gallery has been renamed and relocated."), o.createElement("p", {
                    className: "tw-text-[#1a1a1a]"
                }, "The gallery has now been relocated under the user profile and renamed as ", o.createElement("span", {
                    className: "tw-font-bold"
                }, "Inventory"), "."), o.createElement("img", {
                    src: _(),
                    alt: "Gallery has now been relocated to Inventory"
                }), o.createElement("div", {
                    className: "tw-flex tw-justify-end tw-mt-4"
                }, o.createElement(W.A, {
                    className: "tw-bg-button-bg-grey tw-text-white tw-px-8 tw-w-full sm:tw-w-auto",
                    onClick: function() {
                        l(!1), u(!0)
                    }
                }, "Got it"))))) : null
            };
            var Y = n(66911),
                $ = n(64467),
                Q = n(64350),
                Z = n(28045),
                J = n(97950),
                K = n(17632),
                ee = n(91360),
                te = n(65950),
                ne = n(71853),
                re = n(12860),
                ae = n(19188),
                oe = n(53818),
                le = n(91069),
                ie = n(73747);

            function ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(n), !0).forEach(function(t) {
                        (0, $.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ue = function(e) {
                var t = e.filters,
                    n = void 0 === t ? null : t,
                    r = e.userGroups,
                    a = e.filterRemoveCallback,
                    l = void 0 === a ? function() {} : a;
                if (null === n || 0 === n.length) return null;
                var i = function(e) {
                    var t = ie.sT.flatMap(function(t) {
                            var n = t.dataKey,
                                r = e[n] || [];
                            return t.options.filter(function(e) {
                                return r.includes(e.value)
                            }).map(function(e) {
                                return se(se({}, e), {}, {
                                    dataKey: n
                                })
                            })
                        }),
                        a = (0, ie.rw)({
                            filters: n,
                            userGroups: r
                        });
                    if (null === a) return t;
                    var o = a.options.map(function(e) {
                        var t = e.value,
                            n = r.find(function(e) {
                                return e.groupId === t
                            });
                        return se(se({}, e), {}, {
                            thumbnail: (0, le.Iu)({
                                fileUrl: null == n ? void 0 : n.iconUrl,
                                width: "256"
                            }),
                            dataKey: "groups"
                        })
                    });
                    return [].concat((0, Y.A)(t), (0, Y.A)(o))
                }(n);
                return o.createElement("div", {
                    className: "tw-flex tw-flex-row tw-flex-wrap"
                }, i.map(function(e) {
                    return o.createElement("div", {
                        key: e.value,
                        className: "tw-bg-[#0A0A0D] tw-mr-3 tw-my-3 tw-flex tw-flex-row tw-p-2 tw-pl-3 tw-rounded-sm tw-w-fit",
                        role: "option",
                        "aria-selected": "true"
                    }, o.createElement("div", {
                        className: "tw-flex tw-items-center"
                    }, (null == e ? void 0 : e.icon) && o.createElement(C.M2, {
                        icon: e.icon,
                        color: e.color
                    }), (null == e ? void 0 : e.thumbnail) && o.createElement("div", {
                        className: "tw-w-6 tw-h-6 tw-bg-no-repeat tw-bg-cover tw-rounded-full tw-bg-center",
                        title: e.label,
                        style: {
                            backgroundImage: "url(".concat(e.thumbnail, ")")
                        }
                    }), o.createElement("span", {
                        className: "tw-ml-2 tw-mr-2 tw-max-w-[250px] tw-text-ellipsis tw-overflow-hidden tw-truncate"
                    }, e.label)), o.createElement("div", null, o.createElement("button", {
                        type: "button",
                        className: " tw-border-0 tw-rounded-sm tw-bg-transparent tw-text-white tw-leading-none ",
                        "aria-label": "remove",
                        onClick: function() {
                            l(e)
                        }
                    }, o.createElement(C.M2, {
                        icon: g.faXmark
                    }))))
                }), i.length > 1 && o.createElement("div", {
                    className: "tw-flex tw-items-center tw-my-3"
                }, o.createElement("button", {
                    type: "button",
                    className: "tw-ml-1 tw-h-full tw-w-24 tw-border-0 tw-rounded tw-bg-button-bg-grey tw-text-white tw-leading-none",
                    "aria-label": "Clear all filters",
                    onClick: function() {
                        l(null)
                    }
                }, o.createElement("span", null, "Clear all"))))
            };
            ue.propTypes = {
                filters: S().object,
                group: S().array
            };
            const de = ue;
            var me = n(63576),
                fe = n(73377),
                pe = n(36535),
                we = n(10467),
                ge = n(54756),
                ve = n.n(ge),
                be = n(25538),
                he = n(40085),
                Ee = n(54734);

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach(function(t) {
                        (0, $.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var xe = function(e) {
                var t = e.groupSelectCallback,
                    n = void 0 === t ? function() {} : t,
                    a = (0, o.useState)(""),
                    l = (0, r.A)(a, 2),
                    i = l[0],
                    c = l[1],
                    s = (0, B.d7)(i),
                    u = (0, B.a$)().user,
                    d = void 0 === u ? null : u,
                    m = (0, he.Rh)(),
                    f = (0, r.A)(m, 1)[0],
                    p = (0, he.Yj)({
                        userId: null == d ? void 0 : d.id
                    }, {
                        skip: null === d
                    }),
                    w = p.data,
                    g = void 0 === w ? null : w,
                    v = p.isFetching,
                    b = p.isSuccess,
                    h = (0, he.GS)({
                        userId: null == d ? void 0 : d.id
                    }),
                    E = h.data,
                    y = void 0 === E ? null : E,
                    A = h.isFetching,
                    x = h.isSuccess,
                    k = (0, o.useMemo)(function() {
                        return null === y || null === g ? [] : x && b ? g.filter(function(e) {
                            var t = e.groupId,
                                n = y[t];
                            return n && (n.includes("*") || n.includes("group-calendar-manage"))
                        }) : []
                    }, [y, g]),
                    N = (0, o.useMemo)(function() {
                        return null === k ? [] : "" === i ? k : null == k ? void 0 : k.filter(function(e) {
                            return e.name.toLowerCase().includes(i) || e.shortCode.toLowerCase().includes(i) || e.discriminator.toLowerCase().includes(i) || e.groupId.toLowerCase().includes(i)
                        })
                    }, [k, s]);
                return o.createElement(o.Fragment, null, o.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col tw-w-full"
                }, o.createElement("h2", {
                    className: "tw-text-xl tw-text-center tw-w-full"
                }, "For which group would you like to create this event?"), o.createElement("p", {
                    className: "tw-text-sm tw-text-center tw-w-full"
                }, "You will see only the groups for which you have permission to create events."), o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center"
                }, o.createElement(C.pd, {
                    "aria-label": "Enter a group short code, name, or url",
                    type: "text",
                    id: "search-transaction-list",
                    placeholder: "Enter a group short code, name, or url",
                    className: "",
                    leftIcon: o.createElement(C.M2, {
                        icon: Q.faMagnifyingGlass,
                        className: "tw-mr-1"
                    }),
                    onChange: function(e) {
                        c(e.target.value)
                    }
                }))), (v || A) && o.createElement("div", {
                    className: "tw-pt-20 tw-flex tw-items-center tw-justify-center"
                }, o.createElement(be.A, {
                    size: "5x"
                })), !v && !A && 0 === (null == N ? void 0 : N.length) && o.createElement("div", {
                    className: "tw-text-center tw-text-lg tw-mt-5"
                }, "No groups found for which you can create events."), o.createElement("div", {
                    className: "tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-5"
                }, null == N ? void 0 : N.map(function(e) {
                    return o.createElement(Ee.A, {
                        key: e.id,
                        group: e,
                        isSelectable: !0,
                        selectCallback: function() {
                            var e = (0, we.A)(ve().mark(function e(t) {
                                var r;
                                return ve().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(Ae({}, t));
                                        case 2:
                                            r = e.sent, n(r.data);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    })
                })))
            };
            xe.propTypes = {};
            const Ce = xe;
            var ke = n(85072),
                Ne = n.n(ke),
                Ie = n(97825),
                Oe = n.n(Ie),
                Me = n(77659),
                Be = n.n(Me),
                je = n(55056),
                Se = n.n(je),
                qe = n(10540),
                Pe = n.n(qe),
                Te = n(41113),
                De = n.n(Te),
                Fe = n(70506),
                ze = {};
            ze.styleTagTransform = De(), ze.setAttributes = Se(), ze.insert = Be().bind(null, "head"), ze.domAPI = Oe(), ze.insertStyleElement = Pe();
            Ne()(Fe.A, ze);
            Fe.A && Fe.A.locals && Fe.A.locals;

            function Re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Re(Object(n), !0).forEach(function(t) {
                        (0, $.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                Ge = (0, o.forwardRef)(function(e, t) {
                    var n = (0, l.wA)(),
                        a = (0, T.ok)(),
                        i = (0, r.A)(a, 1)[0],
                        c = (0, o.useState)(""),
                        s = (0, r.A)(c, 2),
                        u = s[0],
                        m = s[1],
                        f = (0, B.d7)(u),
                        p = (0, o.useRef)(null),
                        w = (0, o.useRef)(null),
                        g = (0, o.useState)(null),
                        v = (0, r.A)(g, 2),
                        b = v[0],
                        h = v[1],
                        E = (0, o.useState)(null),
                        y = (0, r.A)(E, 2),
                        A = y[0],
                        x = y[1],
                        k = (0, o.useState)(!0),
                        N = (0, r.A)(k, 2),
                        I = N[0],
                        O = N[1],
                        M = (0, o.useState)(!1),
                        j = (0, r.A)(M, 2),
                        S = j[0],
                        q = j[1],
                        P = (0, o.useState)(d()()),
                        D = (0, r.A)(P, 2),
                        F = D[0],
                        z = D[1],
                        R = (0, o.useState)(!1),
                        U = (0, r.A)(R, 2),
                        L = U[0],
                        G = U[1],
                        _ = (0, o.useState)(null),
                        V = (0, r.A)(_, 2),
                        H = V[0],
                        W = V[1],
                        X = (0, o.useState)(Le),
                        le = (0, r.A)(X, 2),
                        ie = le[0],
                        ce = le[1],
                        se = (0, o.useMemo)(function() {
                            return (0, oe.xt)("default-calendar-mode", {
                                value: "month"
                            })
                        }, []),
                        ue = (0, B.a$)().user,
                        we = void 0 === ue ? null : ue,
                        ge = !(null == we || !we.id),
                        ve = (0, B.Om)() && !1,
                        be = i.get("view"),
                        he = (0, o.useMemo)(function() {
                            var e;
                            switch (be) {
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
                        }, [be, se]);
                    (0, o.useEffect)(function() {
                        (0, oe.u4)("Calendar_Open", {
                            userId: null == we ? void 0 : we.id
                        });
                        var e = function() {
                                return O(!0)
                            },
                            t = function(e) {
                                w.current && !w.current.contains(e.target) && O(!0)
                            };
                        return window.removeEventListener("scroll", e), window.removeEventListener("resize", e), window.removeEventListener("click", t), window.addEventListener("scroll", e, {
                                capture: !0
                            }), window.addEventListener("resize", e), window.addEventListener("click", t, {
                                capture: !0
                            }),
                            function() {
                                window.removeEventListener("scroll", e), window.removeEventListener("resize", e), window.removeEventListener("click", t)
                            }
                    }, []);
                    (0, o.useEffect)(function() {
                        if (null !== b) {
                            var e, t, n, r, a, o = null == w ? void 0 : w.current;
                            return o ? (e = o, t = window.innerWidth, n = b.clientX > t / 2, r = n && b.clientX - 340 < 0, a = !n && b.clientX + 340 > t, r || a ? (e.style.left = "auto", e.style.right = "auto") : n ? (e.style.left = "auto", e.style.right = "".concat(t - b.clientX + 20, "px")) : (e.style.left = "".concat((null == b ? void 0 : b.clientX) + 20, "px"), e.style.right = "auto"), void
                                function(e) {
                                    var t = window.innerHeight;
                                    t - b.clientY < 350 ? w.current.style.top = "".concat(t - 400, "px") : e.style.top = "".concat((null == b ? void 0 : b.clientY) - 100, "px")
                                }(o)) : void 0
                        }
                    }, [b]), (0, o.useEffect)(function() {}, [ie]);
                    var Ee = (0, ae.BG)({
                            date: F,
                            userId: null == we ? void 0 : we.id,
                            eventSources: ie.eventSources
                        }, {
                            skip: null === we
                        }),
                        ye = Ee.data,
                        Ae = void 0 === ye ? {
                            events: [],
                            groups: []
                        } : ye,
                        xe = Ee.isFetching,
                        ke = Ee.isSuccess,
                        Ne = Ee.isError,
                        Ie = Ee.error,
                        Oe = (0, ae.BG)({
                            date: F.add(1, "month"),
                            userId: null == we ? void 0 : we.id,
                            eventSources: ie.eventSources
                        }, {
                            skip: null === we || !S
                        }),
                        Me = Oe.data,
                        Be = void 0 === Me ? {
                            events: [],
                            groups: []
                        } : Me,
                        je = Oe.isFetching,
                        Se = Oe.isSuccess,
                        qe = Oe.isError,
                        Pe = Oe.error;
                    (0, o.useEffect)(function() {
                        if (Ne || qe) {
                            var e, t, r = Ie || Pe;
                            n((0, te.X)({
                                title: "Failed to get calendar events",
                                message: null !== (e = null == r || null === (t = r.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown Error",
                                color: "danger",
                                timeout: 5e3
                            }))
                        }
                    }, [Ne, qe]);
                    var Te = function(e) {
                            var t = d()(e.endsAt).diff(d()(e.startsAt), "day") > 0;
                            return Ue(Ue({}, e), {}, {
                                id: e.id,
                                start: e.startsAt,
                                end: t ? d()(e.endsAt).add(1, "day").format() : e.endsAt,
                                allDay: t
                            })
                        },
                        De = function() {
                            return Ue({
                                searchTerm: f
                            }, ie)
                        },
                        Fe = (0, o.useMemo)(function() {
                            var e = Ae.events,
                                t = Be.events,
                                n = S ? [].concat((0, Y.A)(e), (0, Y.A)(t)) : e;
                            return n && 0 !== n.length ? {
                                eventSources: pe.SM.map(function(e) {
                                    return e.value
                                }),
                                accessTypes: n.reduce(function(e, t) {
                                    return e.includes(t.accessType) || e.push(t.accessType), e
                                }, []),
                                categories: n.reduce(function(e, t) {
                                    return e.includes(t.category) || e.push(t.category), e
                                }, []),
                                days: n.reduce(function(e, t) {
                                    var n = d()(t.startsAt),
                                        r = d()(t.endsAt).diff(n, "day"),
                                        a = Array.from({
                                            length: r + 1
                                        }, function(e, t) {
                                            return n.add(t, "day").day()
                                        });
                                    return Array.from(new Set([].concat((0, Y.A)(e), a)))
                                }, []),
                                platforms: (0, Y.A)(new Set(n.flatMap(function(e) {
                                    return e.platforms
                                }))),
                                languages: (0, Y.A)(new Set(n.flatMap(function(e) {
                                    return e.languages
                                }))),
                                groups: n.reduce(function(e, t) {
                                    return e.includes(t.ownerId) ? e : [].concat((0, Y.A)(e), [t.ownerId])
                                }, [])
                            } : {
                                eventSources: [],
                                accessTypes: [],
                                categories: [],
                                days: [],
                                platforms: [],
                                languages: [],
                                groups: []
                            }
                        }, [Ae, Be, S]),
                        ze = (0, o.useMemo)(function() {
                            var e = Ae.events,
                                t = Be.events,
                                n = S ? [].concat((0, Y.A)(e), (0, Y.A)(t)) : e;
                            if (!n || 0 === n.length) return [];
                            var r = De();
                            if (null === r) return n.map(Te);
                            return n.filter(function(e) {
                                return !(!e || !e.id) && (!(e.deletedAt && !ve) && (!("" !== r.searchTerm && !e.title.toLowerCase().includes(r.searchTerm.toLowerCase()) && !e.description.toLowerCase().includes(r.searchTerm.toLowerCase())) && (!(r.accessTypes.length > 0 && !r.accessTypes.includes(e.accessType)) && (!(r.categories.length > 0 && !r.categories.includes(e.category)) && (!(r.days.length > 0 && (t = {
                                    title: e.title,
                                    daysOfWeek: r.days,
                                    start: e.startsAt,
                                    end: e.endsAt
                                }, n = t.daysOfWeek, a = t.start, o = t.end, t.title, l = d()(a), i = d()(o), !n.some(function(e) {
                                    if (l.day() === e) return !0;
                                    if (i.day() === e) return !0;
                                    var t = i.diff(l, "day") + 1;
                                    return Array.from({
                                        length: t
                                    }, function(e, t) {
                                        return l.add(t, "day")
                                    }).some(function(t) {
                                        return t.day() === e
                                    })
                                }))) && (!(r.platforms.length > 0 && !r.platforms.some(function(t) {
                                    return e.platforms.includes(t)
                                })) && (!(r.languages.length > 0 && !r.languages.some(function(t) {
                                    return e.languages.includes(t)
                                })) && !(r.groups.length > 0 && !r.groups.includes(e.ownerId)))))))));
                                var t, n, a, o, l, i
                            }).map(Te)
                        }, [f, Ae, Be, S, ie]);
                    (0, o.useImperativeHandle)(t, function() {
                        return {
                            updateCalendarSize: function() {
                                if (null !== p) {
                                    var e = p.current.getApi();
                                    O(!0), e.updateSize()
                                }
                            }
                        }
                    }, []);
                    var Re = function(e) {
                            var t;
                            O(!0);
                            var n = p.current.getApi(),
                                r = null !== (t = e.date) && void 0 !== t ? t : e;
                            e.date && r.setMinutes(r.getMinutes() + r.getTimezoneOffset()), n.changeView("timeGridDay", r)
                        },
                        Ge = xe || S && je,
                        _e = function(e) {
                            return {
                                eventId: e.id,
                                ownerId: e.ownerId,
                                userId: null == we ? void 0 : we.id,
                                isUserLoggedIn: ge,
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
                        Ve = (0, o.useMemo)(function() {
                            return S ? [].concat((0, Y.A)(Ae.groups), (0, Y.A)(Be.groups)) : Ae.groups
                        }, [Ae, Be, S]);
                    return o.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, o.createElement(C.Qc, null, "Calendar"), o.createElement("div", {
                        className: "tw-mb-4 tw-flex tw-justify-between tw-flex-row"
                    }, o.createElement("h2", null, "Calendar")), Ge && o.createElement("div", {
                        className: " tw-w-full tw-h-full  tw-left-0 tw-top-0 tw-absolute  tw-flex tw-justify-center tw-items-center tw-bg-dark-grey-transparent tw-z-10 "
                    }, o.createElement(ne.A, {
                        loading: !0
                    })), o.createElement("div", {
                        className: "tw-mb-10 tw-bg-[#181b1f] tw-rounded tw-p-5 fc tw-relative"
                    }, ke && (!S || Se) && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "tw-flex tw-justify-between tw-flex-row tw-gap-3 tw-flex-wrap"
                    }, o.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row tw-flex-wrap tw-gap-3 tw-items-start sm:tw-items-center"
                    }, o.createElement(C.$n, {
                        className: "tw-w-52 tw-h-10",
                        type: "button",
                        onClick: function() {
                            W(null), G(!0)
                        }
                    }, o.createElement(C.M2, {
                        icon: Z.QL,
                        className: "tw-mr-1"
                    }), " Create Event"), o.createElement(me.A, {
                        possibleFilters: Fe,
                        onFilterChangeCallBack: function(e) {
                            return function(e) {
                                if (e.isChecked) {
                                    var t = (0, Y.A)(new Set([].concat((0, Y.A)(ie[e.type]), [e.value])));
                                    return ce(Ue(Ue({}, ie), {}, (0, $.A)({}, e.type, t)))
                                }
                                if (!e.isChecked) {
                                    var n = ie[e.type].filter(function(t) {
                                        return t !== e.value
                                    });
                                    return ce(Ue(Ue({}, ie), {}, (0, $.A)({}, e.type, n)))
                                }
                            }(e)
                        },
                        userGroups: Ve,
                        dropdownFilterValues: ie
                    })), o.createElement(C.pd, {
                        "aria-label": "Search by event name or url",
                        type: "text",
                        id: "search-transaction-list",
                        placeholder: "Search by event name or url",
                        className: "tw-md-1 sm:tw-w-1/2",
                        leftIcon: o.createElement(C.M2, {
                            icon: Q.faMagnifyingGlass,
                            className: "tw-mr-1"
                        }),
                        onChange: function(e) {
                            m(e.target.value)
                        }
                    })), o.createElement("div", {
                        className: "tw-min-h-[70px] tw-transition-all"
                    }, o.createElement(de, {
                        userGroups: Ve,
                        filters: De(),
                        filterRemoveCallback: function(e) {
                            if (null === e) return ce(Le);
                            var t = ie[e.dataKey].filter(function(t) {
                                return t !== e.value
                            });
                            ce(Ue(Ue({}, ie), {}, (0, $.A)({}, e.dataKey, t)))
                        }
                    }))), o.createElement(K.A, {
                        ref: p,
                        plugins: [J.A, ee.A],
                        initialView: he,
                        showNonCurrentDates: !1,
                        events: ze,
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
                        navLinkDayClick: Re,
                        eventClick: function(e) {
                            var t = e.event,
                                n = (e.el, e.jsEvent),
                                r = (e.view, t.toPlainObject()),
                                a = Ue(Ue({}, r), r.extendedProps);
                            O(!1), h(n), x(a), (0, oe.u4)("Event_Previewed", _e(a))
                        },
                        moreLinkClick: Re,
                        datesSet: function(e) {
                            var t = e.view,
                                n = d()(t.currentStart).startOf("month").add(1, "day"),
                                r = d()(t.currentEnd).add(-1, "minute"),
                                a = n.month() !== r.month();
                            q(a), z(n), O(!0)
                        },
                        views: {
                            timeGrid: {
                                dayHeaderFormat: {
                                    day: "2-digit",
                                    weekday: "short"
                                }
                            }
                        }
                    }), o.createElement("div", {
                        ref: w,
                        className: "\n            tw-w-[340px] tw-duration-100 fc-popover tw-transition-all tw-bg-transparent\n            ".concat(I ? "tw-hidden" : "tw-fixed", "\n          ")
                    }, A && o.createElement(re.Ay, {
                        isDialog: !0,
                        event: A,
                        onCloseCallback: function() {
                            return O(!0)
                        }
                    }))), o.createElement(C.aF, {
                        title: "Create Event (".concat(null === H ? "1" : "2", "/2)"),
                        isVisible: L,
                        onClose: function() {
                            return G(!1)
                        },
                        className: "tw-w-full",
                        slim: !0,
                        width: "100%"
                    }, o.createElement("div", {
                        className: "tw-block tw-w-full"
                    }, null === H ? o.createElement(Ce, {
                        groupSelectCallback: W
                    }) : o.createElement(fe.default, {
                        group: H,
                        closeModalCallback: function() {
                            return G(!1)
                        }
                    }))))
                });
            const _e = Ge;
            var Ve = n(46078),
                He = n(88838),
                We = n(70129),
                Xe = n(76229),
                Ye = n(5361),
                $e = n(93930),
                Qe = n(40223),
                Ze = (n(59040), n(489));
            const Je = function(e) {
                var t = e.navToggleCallback,
                    n = void 0 === t ? function() {} : t,
                    a = (0, B.a$)(),
                    l = a.user,
                    s = (a.isFetching, a.isLoading),
                    u = ((0, i.Zp)(), (0, H.w_)().data, o.useState(!1)),
                    d = (0, r.A)(u, 2),
                    m = (d[0], d[1], (0, Ye.Gm)({
                        userId: l.id
                    }, {
                        skip: !l,
                        refetchOnMountOrArgChange: !0
                    })),
                    f = m.data,
                    p = (void 0 === f ? {} : f).balance;
                m.isFetching;
                if (!l || s) return null;
                var w = function() {
                        n(!1)
                    },
                    g = l || {},
                    v = g.bannerType,
                    b = g.bannerUrl,
                    h = g.bannerColor,
                    E = "online" === l.state,
                    y = (null == b ? void 0 : b.length) > 0 ? b : l.currentAvatarThumbnailImageUrl;
                v === Qe.x9.COLOR || Qe.vf, (0, le.Iu)({
                    fileUrl: y,
                    width: "1024"
                }), l.userIcon && (0, le.Iu)({
                    fileUrl: l.userIcon,
                    width: "1024"
                });
                return o.createElement(Ke, {
                    className: "tw-mx-0 tw-mb-2 tw-px-[10px]"
                }, o.createElement("div", {
                    onClick: w
                }, o.createElement($e.A, {
                    userData: l,
                    showStatus: !0,
                    isCard: !0,
                    backgroundColor: "#07242b",
                    borderColor: "#053c48",
                    borderWidth: "2px",
                    tokenBalance: p,
                    hideProfileEffect: !0
                })), !1, o.createElement(at, null, o.createElement(T.N_, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: w
                }, o.createElement(C.M2, {
                    icon: Xe.Ub
                }), "  Account Settings")), o.createElement(et, {
                    className: (0, c.AH)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, E && (null == l ? void 0 : l.location) && !["traveling", "offline"].includes(null == l ? void 0 : l.location) && o.createElement(tt, {
                    className: "tw-mx-0"
                }, o.createElement(Ze.A, {
                    location: l.location,
                    userId: l.id,
                    currentUser: l,
                    size: "normal"
                }))))
            };
            var Ke = (0, We.A)("div", {
                    target: "esgak1l16"
                })(""),
                et = (0, We.A)("div", {
                    target: "esgak1l15"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                tt = (0, We.A)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                nt = (0, We.A)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                rt = (0, We.A)(nt, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                at = (0, We.A)(rt, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                ot = n(51029),
                lt = n(82862),
                it = n(93847),
                ct = n(70961),
                st = n(77276),
                ut = n(34629),
                dt = n(3385),
                mt = n(68415),
                ft = n(19616),
                pt = n(80961),
                wt = n(55345),
                gt = n(2378),
                vt = n(69482),
                bt = n(65371),
                ht = n(37922),
                Et = n(26743),
                yt = n(84449),
                At = n(14119),
                xt = n(64094),
                Ct = n(87909),
                kt = n(68162),
                Nt = n(59692),
                It = n(84994),
                Ot = n(74817),
                Mt = n(7830),
                Bt = n(75865),
                jt = n(62025),
                St = n(3086),
                qt = n(53909),
                Pt = n(91350),
                Tt = n(54321),
                Dt = n(34638),
                Ft = n(32726),
                zt = n(39848),
                Rt = n(75909),
                Ut = n(89934),
                Lt = n(86797),
                Gt = n(92093),
                _t = n(68808),
                Vt = n(49822),
                Ht = n(77365),
                Wt = n(16477),
                Xt = n(29983),
                Yt = n.n(Xt),
                $t = n(50779),
                Qt = n(79617),
                Zt = n(55);
            const Jt = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    r = e.closeDialog,
                    a = (e.isGroups, (0, l.d4)(function(e) {
                        return e.notifications.notifications
                    }).slice(0, n) || []);
                return o.createElement("div", {
                    className: "mt-2"
                }, a.map(function(e) {
                    return o.createElement(Zt.A, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: r
                    })
                }))
            };
            n(86663);
            var Kt = n(77839),
                en = n(15002),
                tn = n(82290),
                nn = n(48210),
                rn = n(27592),
                an = n(11378);

            function on(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ln(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? on(Object(n), !0).forEach(function(t) {
                        (0, $.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var cn = function(e) {
                var t = e.onChangeCallback,
                    n = (0, l.wA)(),
                    a = (0, o.useState)(!1),
                    i = (0, r.A)(a, 2),
                    c = i[0],
                    s = i[1],
                    u = (0, o.useState)(!1),
                    d = (0, r.A)(u, 2),
                    m = d[0],
                    f = d[1],
                    p = (0, o.useState)("none"),
                    w = (0, r.A)(p, 2),
                    g = w[0],
                    v = w[1],
                    b = (0, o.useState)([]),
                    h = (0, r.A)(b, 2),
                    E = h[0],
                    y = h[1],
                    A = (0, o.useState)("relevance"),
                    x = (0, r.A)(A, 2),
                    C = x[0],
                    k = x[1],
                    N = (0, l.d4)(function(e) {
                        return e.search.autoRedirect
                    });
                (0, o.useEffect)(function() {
                    var e = {
                        dropdownToggle: c,
                        fuzzyToggle: m,
                        orderFilter: g,
                        searchableFilters: E,
                        sortByFilter: C
                    };
                    (0, oe.u4)("Web_Mod_SearchFilterChange", ln(ln({}, e), {}, {
                        autoRedirect: N
                    })), t(e)
                }, [N, m, g, E, C]);
                var I = function(e) {
                    return e.target.checked ? y([].concat((0, Y.A)(E), [e.target.name])) : y(E.filter(function(t) {
                        return t !== e.target.name
                    }))
                };
                return o.createElement(Gt.A, {
                    isOpen: c,
                    toggle: function() {
                        return s(!c)
                    }
                }, o.createElement(_t.A, {
                    caret: !0
                }, "Filters"), o.createElement(Vt.A, {
                    className: "text-white p-0 bg-dark pb-2"
                }, o.createElement(tn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), o.createElement("div", {
                    className: "mx-3 text-white"
                }, o.createElement(nn.A, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return k(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "sortResultsBy",
                    id: "sortResultsBy"
                }, o.createElement("option", {
                    value: "relevance"
                }, "Relevance"), o.createElement("option", {
                    value: "exact"
                }, "Exact"), o.createElement("option", {
                    value: "last_login"
                }, "Last Login"), o.createElement("option", {
                    value: "trust"
                }, "Trust Rank"))), o.createElement(tn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), o.createElement("div", {
                    className: "mx-3 text-white"
                }, o.createElement(nn.A, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return v(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "orderBy",
                    id: "orderBy"
                }, o.createElement("option", {
                    value: "none"
                }, "None"), o.createElement("option", {
                    value: "ascending"
                }, "Ascending"), o.createElement("option", {
                    value: "descending"
                }, "Descending"))), o.createElement(tn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: E.includes("displayName"),
                    onChange: I,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: E.includes("email"),
                    onChange: I,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: E.includes("username"),
                    onChange: I,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: E.includes("pastEmails"),
                    onChange: I,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), o.createElement(tn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: N,
                    onChange: function() {
                        return n((0, an.Io)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(nn.A, {
                    checked: m,
                    onChange: function() {
                        return f(!m)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), o.createElement(rn.A, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            cn.propTypes = {
                onChangeCallback: S().func.isRequired
            };
            const sn = function() {
                var e = (0, i.Zp)(),
                    t = (0, i.zy)(),
                    n = "users",
                    a = "";
                t.pathname.startsWith("/home/search/") && (n = t.pathname.substring(13).split("/")[0], a = decodeURIComponent(t.pathname.substring("/home/search/".concat(n, "/").length)));
                var s = (0, l.d4)(Kt.B),
                    u = (0, o.useState)("/home/search/".concat(n, "/")),
                    d = (0, r.A)(u, 2),
                    m = d[0],
                    f = d[1],
                    p = (0, T.ok)(),
                    w = (0, r.A)(p, 2),
                    g = w[0],
                    v = (w[1], (0, o.useState)(a)),
                    b = (0, r.A)(v, 2),
                    h = b[0],
                    E = b[1],
                    y = (0, B.d7)(m),
                    A = function() {
                        return encodeURIComponent(h.replace(/#/g, "tag:"))
                    },
                    x = function() {
                        return h.startsWith("usr_") ? "/home/user" : h.startsWith("avtr_") ? "/home/avatar" : h.startsWith("wrld_") ? "/home/world" : h.startsWith("grp_") ? "/home/group" : "/home/search/".concat(n)
                    };
                (0, o.useEffect)(function() {
                    x().startsWith("/home/search/") ? f("".concat(x(), "/").concat(A(), "?").concat(g)) : f("".concat(x(), "/").concat(A()))
                }, [h]), (0, o.useEffect)(function() {
                    "" !== h && e(m)
                }, [y]);
                return o.createElement("div", {
                    className: (0, c.AH)({
                        name: "1a9iom8",
                        styles: "& .search-input{padding:0;}& .input-group-custom{position:relative;flex-wrap:nowrap;align-items:stretch;}& .drop-down-menu-custom{color:black;margin:0;padding:5px;}"
                    })
                }, o.createElement("div", {
                    className: "container"
                }, o.createElement("form", {
                    onSubmit: function(t) {
                        return function(t) {
                            return t.preventDefault(), "" === h || e(m), null
                        }(t)
                    },
                    className: "navbar-form navbar-right",
                    role: "search"
                }, o.createElement("div", {
                    className: "input-group-custom"
                }, o.createElement("div", {
                    className: (0, c.AH)({
                        name: "ho1qnd",
                        styles: "display:flex;flex-direction:row"
                    })
                }, o.createElement("div", {
                    className: (0, c.AH)({
                        name: "clzu0",
                        styles: "display:flex;flex-direction:row;align-items:center;flex-grow:1"
                    })
                }, o.createElement(en.A, {
                    initialString: h,
                    searchString: E
                }), s && !1))))))
            };
            var un = n(98152),
                dn = n(75211),
                mn = n(73444),
                fn = n(5826),
                pn = n(72505),
                wn = n.n(pn);
            var gn = ["public", "internal"];
            const vn = function(e) {
                var t = e.direction,
                    n = o.useState([]),
                    a = (0, r.A)(n, 2),
                    s = a[0],
                    u = a[1],
                    d = o.useState(""),
                    m = (0, r.A)(d, 2),
                    f = m[0],
                    p = m[1],
                    w = (0, i.zy)(),
                    g = (0, l.d4)(function(e) {
                        return e.currentUser.isMod
                    }),
                    v = function() {
                        var e = (0, we.A)(ve().mark(function e() {
                            var t, n, r;
                            return ve().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, wn().get(t);
                                    case 3:
                                        n = e.sent, r = n.data.filter(function(e) {
                                            return "main" !== e
                                        }), u(["main"].concat((0, Y.A)(r)));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                o.useEffect(function() {
                    v().catch(console.error)
                }, []);
                var b = function(e, t) {
                        var n = w.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map(function(e) {
                            return gn.map(function(n, r) {
                                if ("public" !== n && !g) return null;
                                var a = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    l = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.AH)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                a && l.push("active");
                                var i = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? gt.v0 : dn.CN : un.Xb
                                };
                                return o.createElement("a", {
                                    href: b(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(r),
                                    className: l.join(" ")
                                }, o.createElement(C.M2, i), n, "-", e)
                            })
                        })
                    };
                return s.length <= 1 ? null : o.createElement("div", null, o.createElement(mn.A, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, c.AH)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, o.createElement(_t.A, {
                    caret: !0,
                    color: "primary"
                }, o.createElement(C.M2, {
                    icon: un.Xb
                }), " ", "public", "-", "main"), o.createElement(Vt.A, {
                    className: (0, c.AH)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, h(s.slice(0, 1)), o.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), o.createElement(fn.A, {
                    className: "mx-0"
                }, o.createElement("input", {
                    type: "text",
                    value: f,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? {} : t).value;
                        p(n)
                    },
                    className: "py-1 px-1 mx-1 my-1 flex-grow-1"
                })), h(s.slice(1), function(e) {
                    return 0 === f.length || new RegExp(f, "gi").test(e)
                }))))
            };
            n.dn(vn);
            var bn = n(45616),
                hn = n(51020),
                En = n(31464),
                yn = n(1286);
            const An = function(e) {
                var t = e.to,
                    n = e.title,
                    r = e.onClick,
                    a = (0, En.xH)({
                        states: [yn.Uo.ANNOUNCED, yn.Uo.SUBMISSIONS_OPEN, yn.Uo.SUBMISSIONS_CLOSED, yn.Uo.WINNERS_SELECTED]
                    }).data,
                    l = null == a ? void 0 : a.every(function(e) {
                        return !Object.keys(e).includes("state")
                    });
                if (!a || 0 === (null == a ? void 0 : a.length) || l) return null;
                var i = a[0];
                return o.createElement(xn, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: r
                }, o.createElement(Cn, {
                    icon: hn.bD
                }), o.createElement("div", null, yn.mb[i.state]), o.createElement(C.M2, {
                    icon: lt.vm
                }))
            };
            var xn = (0, We.A)(T.N_, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                Cn = (0, We.A)(C.M2, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var kn = [Ft.pb, Dt.Fv, Tt.KM, Pt.x3, qt.Qp, St.TU, jt.Wk, Bt.wZ, Mt.Py, Ot.EJ, It.zm, Nt.Ni, kt.eu, Ct.mG, xt.D4, At.kw, yt.AX, Et.cE, ht.Rb],
                Nn = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                In = o.memo(function(e) {
                    var t, n, s = e.horizontal,
                        u = e.navToggleCallback,
                        d = e.friendsToggleCallback,
                        m = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        p = (0, i.Zp)(),
                        w = o.useState(!1),
                        g = (0, r.A)(w, 2),
                        v = g[0],
                        b = g[1],
                        h = o.useState(kn[Math.floor(m(kn.length))]),
                        E = (0, r.A)(h, 2),
                        y = E[0],
                        A = E[1],
                        x = o.useState(Nn[m(Nn.length)]),
                        k = (0, r.A)(x, 2),
                        N = k[0],
                        I = k[1],
                        O = (0, $t.G)().data,
                        M = ((0, B.Om)(), (0, H.P2)().data),
                        j = (0, l.d4)(function(e) {
                            return e.notifications.notifications
                        }) || [],
                        S = (0, H.w_)().data,
                        q = void 0 === S ? [] : S,
                        P = (0, B.Fj)().sortedLocations.length,
                        D = (0, l.d4)(function(e) {
                            return e.notifications.groupNotifications
                        }) || [],
                        F = (0, Qt.Uy)({
                            n: 1,
                            pageValue: 1,
                            isNavBar: !0
                        }),
                        z = F.data,
                        R = F.isSuccess;
                    (0, o.useEffect)(function() {
                        v && (A(kn[m(kn.length)]), I(Nn[m(Nn.length)]))
                    }, [v]);
                    var U = function(e) {
                            p("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        L = function() {
                            b(!1)
                        },
                        G = function() {
                            u && u(!1)
                        },
                        _ = q || [],
                        V = (_.includes("permission-user-icons"), _.includes("permission-user-gallery"), _.includes("permission-groups-beta"), null !== (t = j.length) && void 0 !== t ? t : 0);
                    n = D.filter(function(e) {
                        return e.state === bn.Bp.INVITED
                    }).length;
                    if (null == s || !1 === s) {
                        0;
                        return o.createElement("div", {
                            className: (0, c.AH)("margin:0;padding:0;& .navbar{padding:3px 0;background-color:#07242b!important;background-image:none;border-bottom:solid ", "#053c48", " 3px;display:flex;justify-content:space-between;height:60px;}& .navbar .btn-group{white-space:normal;}& .navbar-section{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;justify-content:space-between;}& .left-nav{min-width:285px!important;justify-content:center;>*{margin:0 10px;:first-child{margin-left:0;}:last-child{margin-right:0;}}}& .center-nav{justify-content:flex-start;flex-wrap:nowrap;flex:1;>*{margin:0 10px 0 2px;}}& .right-nav{justify-content:space-between;flex-direction:row;flex:0;padding:0 20px;gap:20px;align-items:center;.scalable-nav{display:none;}>a{color:#6ae3f9;font-weight:bold;display:flex;align-items:center;min-height:45px;padding:0 10px;}}& .custom-dropdown{padding:0!important;transform:translate(calc(-100% + 400px), 20px)!important;background:#05191d!important;border:#053c48 solid 2px!important;border-radius:10px!important;box-shadow:0px 9px 26px 5px rgba(0, 0, 0, 0.8);}& .dropdown-arrow{z-index:3;&:after,:before{pointer-events:none;content:'';position:absolute;background:transparent;left:50%;transform:translateX(-50%);}&:after{border:22px solid transparent;bottom:-30px;border-bottom-color:#05191d;}&:before{border:15px solid transparent;bottom:-20px;border-bottom-color:#053c48;}}& .navbar-btn{background:#07242b!important;min-width:45px;min-height:45px;border-radius:100px!important;border:solid #053c48 3px!important;display:flex;justify-content:center;align-items:center;font-weight:bold;white-space:nowrap;>span{display:flex;justify-content:center;align-items:center;}&:hover{background:#05191d!important;}&:focus{box-shadow:0 0 0 0.2rem #05191d!important;}&.logout{padding:0 10px!important;color:#ee5454;}}@media (max-width: 1500px){& .right-nav{padding:0 20px;}}@media (max-width: 1200px){& .left-nav{padding:0 15px 0 10px;min-width:210px!important;justify-content:space-between;}& .custom-dropdown{transform:translate(calc(-100% + 350px), 20px)!important;}& .large{display:none;}& .search{width:100%;}}@media (max-width: 576px){& .left-nav{min-width:auto!important;padding:0 10px;}& .mobile-only{display:block;}& .medium{display:none;}}& .dropdown-menu{padding:10px 15px 5px 15px;background-color:#506070;border-radius:0;}& .search{flex-grow:3;}& .launch{text-transform:uppercase;font-weight:bold;}", ""),
                            id: "secondary-nav"
                        }, o.createElement("div", {
                            className: "navbar-boogie container-fluid"
                        }, " "), o.createElement("div", {
                            className: "navbar fixed-top navbar-expand-sm navbar-light shadow ".concat("")
                        }, o.createElement("div", {
                            className: "navbar-section left-nav"
                        }, o.createElement("button", {
                            type: "button",
                            className: "p-1 xl:tw-hidden btn navbar-btn",
                            onClick: function() {
                                u && (d && d(!1), u())
                            }
                        }, o.createElement(C.M2, {
                            icon: bt.ck,
                            size: "lg"
                        })), o.createElement(T.N_, {
                            to: "/home",
                            title: "home",
                            className: "logo medium"
                        }, o.createElement("div", {
                            className: (0, c.AH)({
                                name: "1leqlh9",
                                styles: "height:50px"
                            })
                        }, o.createElement("img", {
                            className: (0, c.AH)({
                                name: "1hs0n36",
                                styles: "height:90%;margin-top:0.25rem"
                            }),
                            alt: "VRChat Logo",
                            src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                        }))), o.createElement("div", {
                            className: "medium ".concat((0, c.AH)({
                                name: "1vcob1d",
                                styles: "display:flex;justify-content:center;align-items:center"
                            }))
                        }, o.createElement(Gt.A, {
                            isOpen: v,
                            toggle: function() {
                                return b(!v)
                            }
                        }, o.createElement(_t.A, {
                            className: "p-1 navbar-btn text-white"
                        }, V > 0 && o.createElement("div", {
                            className: (0, c.AH)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, V >= 99 ? "99+" : V), o.createElement(C.M2, {
                            icon: wt.y_,
                            size: "lg",
                            className: (0, c.AH)({
                                name: "bqqvn3",
                                styles: "::before{font-size:25px;}"
                            })
                        }), v && o.createElement("div", {
                            className: "dropdown-arrow"
                        })), o.createElement("div", {
                            className: (0, c.AH)({
                                name: "2ey0we",
                                styles: "transform:translateX(0)"
                            })
                        }, o.createElement(Vt.A, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, c.AH)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, o.createElement("div", {
                            className: (0, c.AH)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, o.createElement(T.N_, {
                            onClick: function(e) {
                                L(), p("/home/messages"), e.preventDefault()
                            },
                            className: (0, c.AH)({
                                name: "oldbq4",
                                styles: "user-select:none"
                            }),
                            to: "/home/messages"
                        }, o.createElement("strong", null, "View more..."))), o.createElement("div", {
                            className: (0, c.AH)({
                                name: "2nen93",
                                styles: "max-height:500px;overflow-y:auto;padding:0 15px;background:#041215"
                            })
                        }, V > 0 ? o.createElement(Jt, {
                            n: 20,
                            closeDialog: L,
                            isGroups: !1
                        }) : o.createElement("div", {
                            className: (0, c.AH)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, o.createElement(C.M2, {
                            icon: y,
                            size: "3x",
                            className: (0, c.AH)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), o.createElement("h6", null, N))), o.createElement("div", {
                            className: (0, c.AH)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), o.createElement(T.N_, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/calendar",
                            title: "Calendar"
                        }, o.createElement(C.M2, {
                            icon: f.ok,
                            size: "lg"
                        })), o.createElement(T.N_, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, o.createElement(C.M2, {
                            icon: Xe.Ub,
                            size: "lg"
                        }))), o.createElement("div", {
                            className: "navbar-section center-nav"
                        }, o.createElement("div", {
                            className: "search"
                        }, o.createElement(sn, null)), o.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                d && (u && u(!1), d())
                            }
                        }, o.createElement(C.M2, {
                            icon: a.faUserGroup,
                            className: "tw-text-white"
                        }))), o.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, o.createElement(vn, null), o.createElement("a", {
                            href: "https://docs.vrchat.com/",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Docs"), o.createElement("a", {
                            href: "https://hello.vrchat.com/merch-hub",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Merch"), o.createElement("a", {
                            href: "https://hello.vrchat.com/vrchatplus",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#ffff00"
                            }
                        }, "VRC+"), o.createElement(W.A, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, c.AH)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: U
                        }, o.createElement(C.M2, {
                            icon: ot.uQ
                        }), "  Logout"))))
                    }
                    return o.createElement("nav", null, o.createElement(Ht.A, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.AH)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== P ? o.createElement(Mn, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: vt.Fn
                    }), o.createElement("div", null, "Join Friends", " ", o.createElement(Wt.A, {
                        className: (0, c.AH)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, P)), o.createElement(C.M2, {
                        icon: lt.vm
                    })) : o.createElement(Mn, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: gt.v0
                    }), o.createElement("div", null, "  Home"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: Rt.default
                    }), o.createElement("div", null, "Groups"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: wt.y_
                    }), o.createElement("div", null, "Messages", " ", V > 0 && o.createElement(Wt.A, {
                        className: (0, c.AH)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, V >= 99 ? "99+" : V)), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/calendar",
                        title: "Calendar",
                        className: "btn text-left d-sm-none",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: f.ok
                    }), o.createElement("div", null, "Calendar"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(An, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: G
                    }), o.createElement(Mn, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: pt.cb
                    }), o.createElement("div", null, "Download"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: Lt.default
                    }), o.createElement("div", null, "Discover Worlds"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: ft.Jm
                    }), o.createElement("div", null, "My Worlds"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: mt.yV
                    }), o.createElement("div", null, "Avatars"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: dt.yy
                    }), o.createElement("div", null, "Favorite Worlds"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: dt.yy
                    }), o.createElement("div", null, "Favorite Avatars"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: dt.yy
                    }), o.createElement("div", null, "Favorite Friends"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/inventory",
                        title: "Inventory",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: Ut.default
                    }), o.createElement("div", {
                        className: "tw-flex"
                    }, "Inventory", R && (null == z ? void 0 : z.totalCount) > 0 && o.createElement("div", {
                        className: "tw-rounded-full tw-bg-red tw-ml-2 tw-w-[22px] tw-h-[22px] tw-text-white tw-flex tw-items-center tw-justify-center "
                    }, o.createElement("p", {
                        className: "tw-text-sm tw-text-center tw-w-full tw-mb-0 tw-font-bold"
                    }, null == z ? void 0 : z.totalCount))), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: zt.default
                    }), o.createElement("div", null, "Marketplace"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), !1, o.createElement(Mn, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == O ? void 0 : O.disableUpgradeAccount) || (null == M ? void 0 : M.steamId) && (null == M ? void 0 : M.oculusId),
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: ut.WW
                    }), o.createElement("div", null, "Account Link"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: st.$z
                    }), o.createElement("div", null, "Blocks & Mutes"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: Yt()
                    }), o.createElement("div", null, "Subscriptions"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "/home/help-articles",
                        title: "help articles",
                        className: "btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: ct.faCircleQuestion
                    }), o.createElement("div", null, "Help & Info"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Mn, {
                        to: "https://help.vrchat.com/",
                        title: "helpdesk",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-bg-[#07142B] tw-border-[#051E48] tw-text-[#6AA2F9] btn text-left",
                        onClick: G
                    }, o.createElement(C.M2, {
                        icon: it.q9
                    }), o.createElement("div", null, "Help Desk"), o.createElement(C.M2, {
                        icon: lt.vm
                    })), o.createElement(Bn, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: U
                    }, o.createElement(C.M2, {
                        icon: ot.uQ
                    }), o.createElement("div", null, "Logout"), o.createElement("div", null))))
                });
            In.displayName = "Navbar";
            const On = In;
            var Mn = (0, We.A)(T.N_, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                Bn = (0, We.A)(Mn, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                jn = n(57115),
                Sn = n(9663),
                qn = n(3828),
                Pn = [];
            const Tn = function() {
                var e = (0, i.Zp)(),
                    t = (0, V.Mj)("campaigns", []),
                    n = (0, r.A)(t, 2),
                    a = n[0],
                    o = (n[1], (0, V.Mj)("campaignsSeen", [])),
                    l = (0, r.A)(o, 2),
                    c = l[0],
                    s = (l[1], function() {
                        if (c.length > 0) {
                            var e = a.filter(function(e) {
                                return -1 === c.findIndex(function(t) {
                                    return t.name === e.name
                                })
                            });
                            return (0, r.A)(e, 1)[0]
                        }
                        return (0, r.A)(a, 1)[0]
                    }());
                if (s) {
                    var u = Pn.find(function(e) {
                        return e.name === s.name
                    });
                    if (u) return e(u.landingPage)
                }
                return null
            };
            var Dn = n(13419),
                Fn = n(58168);
            const zn = function(e) {
                var t = (0, H.w_)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return o.createElement(e, (0, Fn.A)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var Rn = n(28644),
                Un = n(64937);
            const Ln = function() {
                var e = (0, l.wA)(),
                    t = (0, Un.B3)(),
                    n = t.data,
                    r = t.isSuccess;
                t.isLoading;
                return o.useEffect(function() {
                    e((0, qn.sf)(n))
                }, [r, n]), null
            };
            var Gn = n(39907),
                _n = n(19515),
                Vn = n.n(_n),
                Hn = n(14685),
                Wn = n(89483).m.injectEndpoints({
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
                Xn = n(16260),
                Yn = n.n(Xn);
            const $n = function() {
                var e, t, n = o.useState(""),
                    a = (0, r.A)(n, 2),
                    l = a[0],
                    c = a[1],
                    s = (0, i.zy)(),
                    u = (0, i.Zp)(),
                    d = Wn(),
                    m = (0, r.A)(d, 2),
                    f = m[0],
                    p = m[1],
                    w = p.data,
                    g = p.isLoading,
                    v = p.isSuccess,
                    b = p.isError,
                    h = p.error;
                o.useEffect(function() {
                    var e = new URLSearchParams(s.search),
                        t = e.get("code");
                    t && (e.delete("code"), u({
                        pathname: s.pathname,
                        search: e.toString()
                    }, {
                        replace: !0
                    }), c(t))
                }, []), o.useEffect(function() {
                    v && null != w && w.redeemedRewards && (0, Hn.A)({
                        particleCount: 150,
                        spread: 90,
                        origin: {
                            y: .6
                        }
                    })
                }, [v, w]);
                var E = function() {
                    var e = (0, we.A)(ve().mark(function e(t) {
                        var n, r;
                        return ve().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = null === (n = r = t || l) || void 0 === n ? void 0 : n.trim()) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.prev = 4, e.next = 7, f({
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
                        }, e, null, [
                            [4, 9]
                        ])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return o.createElement("div", {
                    className: "tw-p-5"
                }, o.createElement(C.Qc, null, "Redeem Code"), o.createElement(Qn, {
                    className: "mb-4 tw-bg-[#07242b] tw-border-[#053c48]",
                    outline: !0
                }, o.createElement(Zn, null, o.createElement("h2", {
                    className: "tw-text-3xl tw-font-bold tw-text-center tw-text-[#6ae3f9] mb-2"
                }, "Redeem Code")), o.createElement(Jn, {
                    className: "tw-p-5 tw-border-2 tw-border-[#053c48] tw-rounded-xl"
                }, o.createElement(C.fv, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, v && o.createElement(C.$T, {
                    type: "success",
                    title: "Success!"
                }, "Your code has been successfully redeemed!"), b && o.createElement(C.$T, {
                    type: "error",
                    title: "Error"
                }, (null == h || null === (e = h.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) || "An error occurred while redeeming your code."), o.createElement(C.pd, {
                    type: "text",
                    id: "redeemCode",
                    name: "redeemCode",
                    placeholder: "XXXX-XXXX-XXXX",
                    className: "flex-1 mb-2",
                    value: l,
                    "aria-label": "Redeem Code",
                    rawInputClassName: "tw-text-center",
                    onChange: function(e) {
                        return c(e.target.value)
                    },
                    onKeyDown: function(e) {
                        "Enter" === e.key && E()
                    },
                    autoFocus: !0,
                    autoComplete: "off",
                    isError: b,
                    success: v
                }), o.createElement("p", {
                    className: "tw-text-center tw-text-sm tw-text-gray-400"
                }, "Codes are case-sensitive."), o.createElement(C.fv, {
                    xs: "auto",
                    className: "mx-auto"
                }, o.createElement(C.$n, {
                    variant: "primary",
                    onClick: function() {
                        return E()
                    },
                    disabled: g || !l,
                    className: "tw-w-full tw-mt-2 tw-p-2 tw-px-4",
                    loading: g
                }, "Redeem")), v && !(null == w || null === (t = w.redeemedRewards) || void 0 === t || !t.length) && o.createElement("div", {
                    className: "tw-mt-6"
                }, o.createElement("h3", {
                    className: "tw-text-xl tw-font-semibold tw-mb-4 after:tw-content-none tw-text-center"
                }, "You received:"), o.createElement(C.fI, {
                    className: "tw-g-4 tw-justify-center tw-flex-wrap"
                }, w.redeemedRewards.map(function(e, t) {
                    return function(e, t) {
                        var n, r, a, l, i, c, s = e.type,
                            u = e.data,
                            d = {
                                badge: {
                                    category: "Badge",
                                    title: null == u || null === (n = u.badge) || void 0 === n ? void 0 : n.name,
                                    imageUrl: null == u || null === (r = u.badge) || void 0 === r ? void 0 : r.imageUrl
                                },
                                item: {
                                    category: null !== (a = null == u || null === (l = u.item) || void 0 === l ? void 0 : l.itemTypeLabel) && void 0 !== a ? a : "Item",
                                    title: null == u || null === (i = u.item) || void 0 === i ? void 0 : i.name,
                                    imageUrl: null == u || null === (c = u.item) || void 0 === c ? void 0 : c.imageUrl
                                },
                                vrcPlus: {
                                    category: "VRC+",
                                    title: "VRC+ Subscription",
                                    imageUrl: Yn()
                                }
                            } [s] || {
                                title: s,
                                imageUrl: "",
                                category: ""
                            },
                            m = d.title,
                            f = d.imageUrl,
                            p = d.category;
                        return o.createElement(Qn, {
                            key: t,
                            className: "tw-bg-[#181b1f] tw-border tw-border-[#06333d] tw-relative tw-p-4 tw-shadow tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full sm:tw-w-6/12 md:tw-w-4/12 lg:tw-w-3/12 tw-p-2 tw-m-2"
                        }, p && o.createElement("div", {
                            className: "tw-absolute tw-top-2 tw-left-2 tw-bg-cyan-500 tw-text-white tw-rounded-full tw-px-2 tw-text-xs tw-font-semibold tw-shadow"
                        }, p), f && o.createElement("img", {
                            src: f,
                            alt: m,
                            className: "tw-w-full tw-h-32 tw-object-contain tw-mb-3 tw-rounded"
                        }), o.createElement("h4", {
                            className: "tw-text-md tw-font-medium tw-text-[#6ae3f9]"
                        }, m))
                    }(e, t)
                })))))))
            };
            var Qn = (0, We.A)("div", {
                    target: "edh905g2"
                })({
                    name: "sx6pt1",
                    styles: "border-radius:0.5rem;padding:2.5rem 1rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1);border:1px solid #053c48"
                }),
                Zn = (0, We.A)("div", {
                    target: "edh905g1"
                })({
                    name: "1ykowef",
                    styles: "margin-bottom:0"
                }),
                Jn = (0, We.A)("div", {
                    target: "edh905g0"
                })({
                    name: "mkkf9p",
                    styles: "flex:1 1 auto"
                });
            var Kn = o.lazy(function() {
                    return Promise.all([n.e(4982), n.e(4562)]).then(n.bind(n, 97066))
                }),
                er = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(5936), n.e(7485)]).then(n.bind(n, 83349))
                }),
                tr = o.lazy(function() {
                    return n.e(1398).then(n.bind(n, 31398))
                }),
                nr = o.lazy(function() {
                    return n.e(7927).then(n.bind(n, 87927))
                }),
                rr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(1107), n.e(6683), n.e(6955), n.e(5242), n.e(1938), n.e(3456), n.e(217), n.e(8851)]).then(n.bind(n, 78851))
                }),
                ar = o.lazy(function() {
                    return Promise.all([n.e(2996), n.e(6932)]).then(n.bind(n, 23793))
                }),
                or = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(579), n.e(3734)]).then(n.bind(n, 43734))
                }),
                lr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(8242), n.e(1647)]).then(n.bind(n, 48242))
                }),
                ir = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(4736), n.e(4028)]).then(n.bind(n, 34736))
                }),
                cr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(6313), n.e(6885)]).then(n.bind(n, 76313))
                }),
                sr = o.lazy(function() {
                    return n.e(4429).then(n.bind(n, 54429))
                }),
                ur = o.lazy(function() {
                    return n.e(5357).then(n.bind(n, 15357))
                }),
                dr = o.lazy(function() {
                    return n.e(4101).then(n.bind(n, 74101))
                }),
                mr = o.lazy(function() {
                    return n.e(7288).then(n.bind(n, 57288))
                }),
                fr = o.lazy(function() {
                    return Promise.all([n.e(6062), n.e(7697)]).then(n.bind(n, 20420))
                }),
                pr = o.lazy(function() {
                    return Promise.all([n.e(984), n.e(6746), n.e(1938), n.e(4982), n.e(6062), n.e(6004), n.e(8104)]).then(n.bind(n, 78104))
                }),
                wr = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(6062), n.e(8426)]).then(n.bind(n, 94328))
                }),
                gr = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(7464)]).then(n.bind(n, 67464))
                }),
                vr = o.lazy(function() {
                    return Promise.all([n.e(6955), n.e(6367), n.e(3052)]).then(n.bind(n, 63052))
                }),
                br = o.lazy(function() {
                    return n.e(2071).then(n.bind(n, 32071))
                }),
                hr = o.lazy(function() {
                    return Promise.all([n.e(4982), n.e(2148)]).then(n.bind(n, 20460))
                }),
                Er = o.lazy(function() {
                    return n.e(691).then(n.bind(n, 30691))
                }),
                yr = o.lazy(function() {
                    return n.e(100).then(n.bind(n, 100))
                }),
                Ar = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(4613), n.e(8197)]).then(n.bind(n, 28197))
                }),
                xr = o.lazy(function() {
                    return n.e(4541).then(n.bind(n, 54541))
                }),
                Cr = o.lazy(function() {
                    return n.e(879).then(n.bind(n, 20879))
                }),
                kr = o.lazy(function() {
                    return n.e(1756).then(n.bind(n, 11756))
                }),
                Nr = o.lazy(function() {
                    return Promise.all([n.e(6955), n.e(6367), n.e(9809)]).then(n.bind(n, 76500))
                }),
                Ir = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(6955), n.e(5242), n.e(2676)]).then(n.bind(n, 19337))
                }),
                Or = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(3015), n.e(8242), n.e(4736), n.e(6313), n.e(6683), n.e(7596), n.e(6746), n.e(8497)]).then(n.bind(n, 12805))
                });
            const Mr = function() {
                var e = (0, l.wA)(),
                    t = (0, o.useRef)(null),
                    n = (0, V.Mj)("isVRCFriendsOpen", !1),
                    u = (0, r.A)(n, 1)[0];
                Tn(), (0, Dn.A)();
                var m = (0, H.p$)().data,
                    f = (0, Ve.FJ)({
                        userId: null == m ? void 0 : m.id
                    }, {
                        skip: !(null != m && m.id)
                    }).data;
                (0, o.useEffect)(function() {
                    void 0 !== (null == f ? void 0 : f.accessReduceDecorAnim) && e((0, He.mA)(f.accessReduceDecorAnim))
                }, [null == f ? void 0 : f.accessReduceDecorAnim, e]);
                var p = o.useMemo(function() {
                        var e;
                        return !(null == m || null === (e = m.badges) || void 0 === e || !e.find(function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && d()().isBefore(d()(n).add(36, "hours"))
                        }))
                    }, [m]),
                    w = (0, l.d4)(function(e) {
                        return e.ui
                    }),
                    g = w.rightWingOpen,
                    v = w.leftWingOpen,
                    b = w.pageBackground,
                    h = function(t) {
                        e((0, He.LJ)(null != t ? t : !v))
                    },
                    E = function(n) {
                        var r = null != n ? n : !g;
                        (0, V.PX)("isVRCFriendsOpen", r), e((0, He.yu)(r)), setTimeout(function() {
                            var e;
                            null === (e = t.current) || void 0 === e || e.updateCalendarSize()
                        }, 500)
                    };
                (0, o.useEffect)(function() {
                    e((0, qn.iW)()), e((0, qn.Ro)()), e((0, He.yu)(!!u))
                }, []);
                var y = 60,
                    A = 285,
                    x = 410;
                return o.createElement("div", {
                    className: (0, c.AH)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(180deg, #0E101380 75%, #0E1013F0 100%);padding:20px 0;z-index:50;top:", y, "px;width:", A, "px;min-width:", A, "px;height:calc(100% - ", y, "px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 80%);padding:0;top:", y, "px;width:", x, "px;min-width:", x, "px;z-index:50;height:calc(100% - ", y, "px);margin-left:calc(100% - ", x, "px);position:fixed;left:", x, "px;&.open{left:0;}}& .content-scroll{top:", y, "px;left:", A, "px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - ", A, "px);height:calc(100% - ", y, "px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;", p && (0, c.AH)("background-image:url(", Vn(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{position:relative;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 20px 0 20px;transition:padding-right 0.35s ease-in-out;}&.leftOpen{width:calc(100% - ", x, "px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1440px){& .hide-large{display:none;}}@media (max-width: 1439px){& .leftbar{background:#0E1013;top:", y, "px;left:-", A, "px;&.leftOpen{left:0;}}& .content-scroll{top:", y, "px;left:0;width:100%;height:calc(100% - ", y, "px);&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, o.createElement(Ln, null), o.createElement("div", null, o.createElement(On, {
                    navToggleCallback: h,
                    friendsToggleCallback: function(e) {
                        E(e)
                    }
                }), o.createElement("div", {
                    className: (0, c.AH)("position:fixed;top:", y, "px;left:0;right:0;bottom:0;z-index:0;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-color:transparent;background-repeat:no-repeat;background-size:auto 100%;background-position:initial;", ""),
                    style: null != b ? b : void 0
                })), o.createElement("div", null, o.createElement("div", {
                    className: "fixed-top leftbar ".concat(v ? "leftOpen" : "")
                }, o.createElement("div", {
                    className: (0, c.AH)({
                        name: "1ga2o5r",
                        styles: "width:325px;padding:0 5px"
                    })
                }, o.createElement("div", {
                    className: "hide-large ".concat((0, c.AH)({
                        name: "1bk3y4m",
                        styles: "margin-top:8px;& .dropdown-menu{padding:10px 15px 5px 15px;position:fixed!important;background-color:#506070;border-radius:0;z-index:1000;bottom:0!important;top:100px!important;margin:0!important;transform:none!important;}& .dropdown-toggle{margin-bottom:5px;}"
                    }))
                }, o.createElement(vn, {
                    direction: "right"
                })), o.createElement(s.tH, {
                    fallback: Rn.A
                }, o.createElement(Je, {
                    navToggleCallback: h
                })), o.createElement(s.tH, {
                    fallback: Rn.A
                }, o.createElement(On, {
                    horizontal: !0,
                    navToggleCallback: h
                })))), o.createElement("div", {
                    className: "col-xs-12 content-scroll"
                }, o.createElement("div", {
                    className: "home-content tw-max-w-[1350px]"
                }, o.createElement(s.tH, {
                    fallback: Rn.A
                }, o.createElement(o.Suspense, {
                    fallback: o.createElement(o.Fragment, null, o.createElement(jn.A, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), o.createElement(jn.A, {
                        delay: "50",
                        height: "480px"
                    }))
                }, o.createElement(i.BV, null, o.createElement(i.qh, {
                    path: "/search/:tab/:query",
                    element: o.createElement(er, null)
                }), o.createElement(i.qh, {
                    path: "/profile",
                    element: o.createElement(or, null)
                }), o.createElement(i.qh, {
                    path: "/user/:userId/*",
                    element: o.createElement(Nr, null)
                }), o.createElement(i.qh, {
                    path: "/uploadIcon",
                    element: zn(ir)()
                }), o.createElement(i.qh, {
                    path: "/uploadPhoto",
                    element: zn(cr)()
                }), o.createElement(i.qh, {
                    path: "/uploadEmoji",
                    element: zn(lr)()
                }), o.createElement(i.qh, {
                    path: "/gallery/icons",
                    element: o.createElement(Sn.A, {
                        to: "../inventory/user-icons"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/photos",
                    element: o.createElement(Sn.A, {
                        to: "../inventory/photos"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/emoji",
                    element: o.createElement(Sn.A, {
                        to: "../inventory/emojis"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/stickers",
                    element: o.createElement(Sn.A, {
                        to: "../inventory/stickers"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/*",
                    element: o.createElement(Sn.A, {
                        to: "../inventory/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/inventory/*",
                    element: o.createElement(Or, null)
                }), o.createElement(i.qh, {
                    path: "/marketplace/*",
                    element: o.createElement(yr, null)
                }), o.createElement(i.qh, {
                    path: "/wallet",
                    element: o.createElement(Sn.A, {
                        to: "../marketplace/wallet"
                    })
                }), o.createElement(i.qh, {
                    path: "/wallet/purchases/*",
                    element: o.createElement(Sn.A, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/wallet/store/*",
                    element: o.createElement(Sn.A, {
                        to: "../marketplace/storefront/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/locations",
                    element: o.createElement(hr, null)
                }), o.createElement(i.qh, {
                    path: "/worlds",
                    element: o.createElement(sr, null)
                }), o.createElement(i.qh, {
                    path: "/help-articles/:topicSlug?",
                    element: o.createElement(dr, null)
                }), o.createElement(i.qh, {
                    path: "/help-article/:articleId",
                    element: o.createElement(ur, null)
                }), o.createElement(i.qh, {
                    path: "/world/:worldId/*",
                    element: o.createElement(Ir, null)
                }), o.createElement(i.qh, {
                    path: "/avatars",
                    element: o.createElement(ar, null)
                }), o.createElement(i.qh, {
                    path: "/avatar/:avatarId",
                    element: o.createElement(rr, null)
                }), o.createElement(i.qh, {
                    path: "/content/*",
                    element: o.createElement(Ar, null)
                }), o.createElement(i.qh, {
                    path: "/messages",
                    element: o.createElement(xr, null)
                }), o.createElement(i.qh, {
                    path: "/playermoderations",
                    element: o.createElement(Cr, null)
                }), o.createElement(i.qh, {
                    path: "/download",
                    element: o.createElement(tr, null)
                }), o.createElement(i.qh, {
                    path: "/redeem",
                    element: o.createElement($n, null)
                }), o.createElement(i.qh, {
                    path: "/groups",
                    element: o.createElement(mr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/create",
                    element: o.createElement(fr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/search",
                    element: o.createElement(mr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/search/:query",
                    element: o.createElement(mr, null)
                }), o.createElement(i.qh, {
                    path: "/group/:groupId/ageverification/:code",
                    element: o.createElement(wr, null)
                }), o.createElement(i.qh, {
                    path: "/group/:groupId/*",
                    element: o.createElement(pr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/:groupId",
                    element: o.createElement(Sn.A, {
                        to: "../../group/:groupId"
                    })
                }), o.createElement(i.qh, {
                    path: "/calendar",
                    element: o.createElement(_e, {
                        ref: t
                    })
                }), o.createElement(i.qh, {
                    path: "/ageverification",
                    element: o.createElement(gr, null)
                }), o.createElement(i.qh, {
                    path: "/accountlink",
                    element: o.createElement(nr, null)
                }), o.createElement(i.qh, {
                    path: "/favorites/*",
                    element: o.createElement(i.BV, null, o.createElement(i.qh, {
                        path: "/:type",
                        element: o.createElement(vr, null)
                    }), o.createElement(i.qh, {
                        path: "/:type/:name",
                        element: o.createElement(vr, null)
                    }))
                }), o.createElement(i.qh, {
                    path: "/group/:ownerId/calendar/:eventId",
                    element: o.createElement(Gn.A, null)
                }), o.createElement(i.qh, {
                    path: "/jams/*",
                    element: o.createElement(Er, null)
                }), !1, !1, o.createElement(i.qh, {
                    path: "/subscriptions",
                    element: o.createElement(kr, null)
                }), o.createElement(i.qh, {
                    path: "/",
                    element: o.createElement(Kn, null)
                })))))), o.createElement("div", {
                    className: "fixed-top rightbar ".concat(g ? "open" : "")
                }, o.createElement(s.tH, {
                    fallback: Rn.A
                }, o.createElement(o.Suspense, {
                    fallback: o.createElement(o.Fragment, null, o.createElement(jn.A, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), o.createElement(jn.A, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), o.createElement(jn.A, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, o.createElement(br, {
                    friendsToggleCallback: E
                })))), o.createElement("div", {
                    onKeyDown: function(e) {
                        "Escape" === e.key && E(!1)
                    },
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button tw-hidden md:tw-flex tw-z-[3]",
                    onClick: function() {
                        E(!0)
                    }
                }, o.createElement(C.M2, {
                    icon: a.faUserGroup,
                    className: "tw-w-7 tw-h-7 tw-text-white",
                    "aria-label": "Open Friends Menu"
                }))), o.createElement(X, null), !1, o.createElement(L, null))
            }
        },
        22351(e, t, n) {
            "use strict";
            n.d(t, {
                Ld: () => u,
                R9: () => p,
                Z4: () => d,
                jQ: () => f
            });
            var r = n(64467),
                a = n(37510),
                o = n(32124),
                l = n(21627),
                i = n(99417);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                        icon: i.default
                    }),
                    stickersExclusive: s(s({
                        label: "Exclusive Stickers"
                    }, m), {}, {
                        hasArchive: !0,
                        useCanvasThumbnail: !0,
                        icon: i.default
                    }),
                    stickersArchived: s(s({
                        label: "Archived Stickers"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        useCanvasThumbnail: !0,
                        icon: i.default
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
                        icon: l.default
                    }),
                    propsArchived: s(s({
                        label: "Archived Items"
                    }, m), {}, {
                        imageGrayScale: !0,
                        hasRecover: !0,
                        hasThumbnailName: !0,
                        icon: l.default
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
        23253(e, t, n) {
            "use strict";
            n.d(t, {
                C: () => r
            });
            var r = !1
        },
        55(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => Te
            });
            var r = n(58168),
                a = n(80045),
                o = n(19179),
                l = n(81617),
                i = n(55345),
                c = n(71769),
                s = n(14978),
                u = n(40223),
                d = n(96540),
                m = n(6376),
                f = n(84976),
                p = n(3828),
                w = n(53818),
                g = n(71957),
                v = n(82544),
                b = n(1871),
                h = n(86558),
                E = n(75976),
                y = n(52169),
                A = n(94045),
                x = n(92198),
                C = n(18633),
                k = n(47034),
                N = n(38925),
                I = n(48864),
                O = n(82617),
                M = n(7514),
                B = n(82628),
                j = n(85044),
                S = n(83159),
                q = n(78536),
                P = n(74353),
                T = n.n(P),
                D = n(15750),
                F = n.n(D),
                z = n(6279),
                R = n.n(z),
                U = n(64937),
                L = n(39848),
                G = n(79902),
                _ = n(61206),
                V = n(22017),
                H = n(62285),
                W = n(54321),
                X = n(91622),
                Y = n(23425),
                $ = n(53967),
                Q = n(15394),
                Z = n(38275),
                J = n(22979),
                K = n(31174),
                ee = n(86379),
                te = n(30382),
                ne = n(64850),
                re = n(22325),
                ae = n(7521),
                oe = n(23179),
                le = n(3385),
                ie = n(53065),
                ce = n(900),
                se = n(25161),
                ue = n(28045),
                de = n(62672),
                me = n(60380),
                fe = n(81021),
                pe = n(70300),
                we = n(15977),
                ge = n(31304),
                ve = n(82858),
                be = n(64350),
                he = n(52148),
                Ee = n(3713),
                ye = {
                    edit: n(45412).LF,
                    cancel: E.faXmark,
                    history: Ee.Yj,
                    refresh: he.faArrowsRotate,
                    search: be.faMagnifyingGlass,
                    settings: ve.faGear,
                    pin: ge.vJ,
                    "arrow-up": we.IN,
                    "arrow-down": pe.B0,
                    "arrow-left": fe.Ce,
                    "arrow-right": me.dm,
                    ban: de.faBan,
                    check: l.e6,
                    plus: ue.QL,
                    link: se.CQ,
                    eye: ce.pS,
                    circle: ie.GE,
                    star: le.yy,
                    bell: q.z$,
                    "bell-slash": oe.iN,
                    bookmark: ae.G0,
                    reply: re.Ez,
                    user: ne.X4,
                    "user-circle": te.VF,
                    "user-plus": s.nW,
                    "user-minus": ee.bB,
                    camera: K.rw,
                    display: J.wA,
                    trash: Z.yL,
                    feather: Q.xX,
                    images: $.yv,
                    house: Y.faHouse,
                    location: X.Bt,
                    rocket: W.KM,
                    microphone: H.A5,
                    "folder-open": V.Uj,
                    gauge: _.d1,
                    dice: G.xN,
                    "triangle-exclamation": B.faTriangleExclamation
                },
                Ae = function(e) {
                    return ye[e] || e
                },
                xe = n(71661),
                Ce = n(46828),
                ke = n(68708),
                Ne = n(84370);
            T().extend(R()), T().extend(F());
            var Ie = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: L.default
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: q.z$
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: q.z$
                    },
                    "group.invite": {
                        caption: "Group Invite",
                        icon: i.y_
                    },
                    "group.joinRequest": {
                        caption: "Group Join Request",
                        icon: i.y_
                    },
                    "group.post": {
                        caption: "Group Post",
                        icon: q.z$
                    },
                    "group.event.starting": {
                        caption: "Event Starting",
                        icon: S.ok
                    },
                    "group.event.created": {
                        caption: "Event Announcement",
                        icon: S.ok
                    },
                    "event.announcement": {
                        caption: "Event Announcement",
                        icon: S.ok
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: j.faCircleExclamation
                    },
                    "moderation.contentrestriction": {
                        caption: "Content Moderation",
                        icon: B.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: B.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: B.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: M.pn
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
                        icon: N.yc
                    },
                    "badge.earned": {
                        caption: "Badge Earned",
                        icon: k.fm
                    },
                    "text.adventure": {
                        caption: "Adventure",
                        icon: C.MN
                    },
                    "vrcplus.gift": {
                        caption: "VRC+ Gift",
                        icon: x.h1
                    },
                    "economy.received.gift": {
                        caption: "Gift",
                        icon: x.h1
                    },
                    boop: {
                        caption: "Boop",
                        icon: A.GY
                    }
                },
                Oe = function(e) {
                    var t = e.notificationId,
                        n = e.respondToNotification,
                        r = e.type,
                        a = e.data,
                        o = e.icon,
                        l = e.text;
                    if ("link" === r) {
                        var i = (0, ke.K4)(a);
                        return i ? d.createElement(Ne.BO, {
                            as: f.N_,
                            to: i
                        }, d.createElement(xe.M2, {
                            icon: Ae(o)
                        }), " ", l || "View") : null
                    }
                    return d.createElement(Ne.BO, {
                        disabled: "reply" === r,
                        onClick: function() {
                            n({
                                notificationId: t,
                                responseType: r,
                                responseData: a
                            })
                        },
                        title: "reply" === r ? "To reply, open your notifications in VRChat" : l || r
                    }, d.createElement(xe.M2, {
                        icon: Ae(o)
                    }), " ", l || r)
                };
            const Me = function(e) {
                var t = e.notification,
                    n = e.slim,
                    a = (0, m.wA)(),
                    o = d.useState(!1),
                    l = (0, v.A)(o, 2),
                    i = l[0],
                    c = l[1],
                    s = (0, U.oH)(),
                    w = (0, v.A)(s, 2),
                    g = w[0],
                    A = w[1].isSuccess,
                    x = (0, U.Lc)(),
                    C = (0, v.A)(x, 2),
                    k = C[0],
                    N = C[1].isSuccess,
                    I = (0, ke.K4)(t.link),
                    O = t.title || t.linkText;
                (A || N) && a((0, p.$Z)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var M = Ie[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: y.Ev
                    },
                    B = M.icon,
                    j = M.caption,
                    S = t.createdAt && T()(t.createdAt);
                return d.createElement(d.Fragment, null, d.createElement(Ne.L4, null, d.createElement(Ne.H2, null, d.createElement(Ne.rn, null, d.createElement(xe.M2, {
                    icon: B
                }), " ", d.createElement("i", null, j)), (null == t ? void 0 : t.canDelete) && d.createElement(Ne.f2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        k({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, d.createElement(xe.M2, {
                    icon: E.faXmark
                }))), d.createElement(Ne.AE, null, t.imageUrl && d.createElement(Ne.WY, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.x4.offline.color
                }, d.createElement(Ne.Fe, null, d.createElement(xe.M2, {
                    icon: h.bM
                })), d.createElement(Ne.JZ, {
                    url: t.imageUrl
                }), d.createElement(Ne.C6, {
                    url: t.imageUrl
                })), d.createElement(Ne.NO, null, d.createElement(Ne.yx, null, !!O && d.createElement("strong", null, I ? d.createElement(f.N_, {
                    to: I
                }, O) : O), (null == S ? void 0 : S.isValid()) && d.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, d.createElement("small", null, d.createElement("time", {
                    dateTime: t.createdAt,
                    title: S.format("llll")
                }, d.createElement(xe.M2, {
                    className: "tw-mr-1",
                    icon: b.a$
                }), S.fromNow()))), d.createElement("p", null, t.message)), d.createElement(Ne.GU, {
                    slim: n
                }, null == t ? void 0 : t.responses.map(function(e) {
                    return d.createElement(Oe, (0, r.A)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: g
                    }))
                }))))), !!t.imageUrl && i && d.createElement(Ce.A, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const Be = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    r = (0, m.wA)(),
                    a = (0, U.mI)(),
                    l = (0, v.A)(a, 2),
                    c = l[0],
                    s = l[1].isSuccess,
                    f = (0, U.Gg)(),
                    w = (0, v.A)(f, 1)[0],
                    g = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && r((0, p.$Z)({
                    notificationId: t.id
                })), d.createElement(Ne.L4, null, d.createElement(Ne.rn, null, d.createElement(xe.M2, {
                    icon: i.y_
                }), "  ", d.createElement("i", null, "System Message")), d.createElement(Ne.AE, null, d.createElement(Ne.lf, {
                    statusColor: u.x4.offline.color
                }, d.createElement(Ne.JZ, {
                    url: g
                }), d.createElement(Ne.C6, {
                    url: g
                })), d.createElement(Ne.NO, null, d.createElement(Ne.yx, null, d.createElement("strong", null, "System Message"), " - ", t.message), d.createElement(Ne.GU, null, d.createElement(Ne.BO, {
                    onClick: function() {
                        c({
                            notificationId: t.id
                        }), w({
                            notificationId: t.id
                        })
                    },
                    color: "primary",
                    title: "Close"
                }, d.createElement(xe.M2, {
                    icon: o.GR
                }), " Close")))))
            };
            var je = ["notification"],
                Se = {
                    friendRequest: s.nW,
                    "friend-add": s.nW,
                    invite: i.y_,
                    requestInvite: i.y_,
                    requestInviteResponse: c.Og,
                    inviteResponse: c.Og,
                    message: i.y_
                },
                qe = {
                    friendRequest: "Friend Request",
                    "friend-add": "Friend Status",
                    invite: "Invite",
                    requestInvite: "Invite Request",
                    requestInviteResponse: "Invite Response",
                    inviteResponse: "Invite Response",
                    message: "System Message"
                },
                Pe = ["friend-active", "friend-add", "friend-online"];
            const Te = function(e) {
                var t, n, i, c, s, v, b, h, E = e.notification,
                    y = (0, a.A)(e, je),
                    A = (0, m.wA)(),
                    x = E.type,
                    C = E.senderUserId,
                    k = E.id,
                    N = E.message,
                    I = E.isSystem,
                    O = 2 === E.version,
                    M = "message" === x || I,
                    B = (0, g.vf)(C, {
                        skip: !C || O
                    }),
                    j = B.data,
                    S = B.isLoading,
                    q = B.error;
                if (O) return d.createElement(Me, (0, r.A)({}, y, {
                    notification: E
                }));
                if (S) return d.createElement("p", null, "Loading");
                if (M) return d.createElement(Be, (0, r.A)({}, y, {
                    notification: E,
                    senderUserData: j
                }));
                if (404 === (null == q ? void 0 : q.status)) return null;
                var P, T = Se[x],
                    D = qe[x],
                    F = (0, u.CD)(null == j ? void 0 : j.status).color,
                    z = (null == j ? void 0 : j.profilePicOverride) || (null == j ? void 0 : j.currentAvatarThumbnailImageUrl),
                    R = (null === (t = E.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = E.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (i = E.details) || void 0 === i ? void 0 : i.requestMessage);
                return d.createElement(Ne.L4, null, d.createElement(Ne.rn, null, d.createElement(xe.M2, {
                    icon: T
                }), "  ", d.createElement("i", null, D)), d.createElement(Ne.AE, null, d.createElement(Ne.WY, {
                    to: "/home/user/".concat(C),
                    statusColor: F
                }, !(null !== (c = E.details) && void 0 !== c && c.imageUrl) && d.createElement(Ne.Fe, null, "Go To Profile"), d.createElement(Ne.JZ, {
                    url: null !== (s = null === (v = E.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== s ? s : z
                }), d.createElement(Ne.C6, {
                    url: null !== (b = null === (h = E.details) || void 0 === h ? void 0 : h.imageUrl) && void 0 !== b ? b : z
                })), d.createElement(Ne.NO, null, d.createElement(Ne.yx, null, d.createElement(f.N_, {
                    to: "/home/user/".concat(C)
                }, d.createElement("strong", null, j.displayName)), " - ", N || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (P = E.details) || void 0 === P ? void 0 : P.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [x]), "friendRequest" === x ? d.createElement(Ne.GU, null, d.createElement(Ne.BO, {
                    onClick: function() {
                        return A((0, p._b)({
                            notificationId: k,
                            withServer: !Pe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(xe.M2, {
                    icon: o.GR
                })), d.createElement(Ne.BO, {
                    onClick: function() {
                        A((0, p.Lv)({
                            notificationId: E.id
                        })), (0, w.u4)("Social_AcceptFriendRequest", {
                            targetUserId: E.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, d.createElement(xe.M2, {
                    icon: l.e6
                }))) : d.createElement(Ne.GU, null, d.createElement(Ne.BO, {
                    onClick: function() {
                        return A((0, p._b)({
                            notificationId: k,
                            withServer: !Pe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(xe.M2, {
                    icon: o.GR
                })), "invite" === x && d.createElement(Ne.BO, {
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
                }, d.createElement("strong", null, "Join"))))), R && d.createElement(Ne.p, null, '"', R, '"'))
            }
        },
        84370(e, t, n) {
            "use strict";
            n.d(t, {
                $s: () => C,
                AE: () => s,
                BO: () => w,
                C6: () => A,
                Fe: () => v,
                GU: () => p,
                H2: () => i,
                JZ: () => y,
                L4: () => c,
                NO: () => m,
                WY: () => E,
                bM: () => x,
                f2: () => g,
                lf: () => b,
                p: () => u,
                rn: () => d,
                yx: () => f
            });
            var r = n(70129),
                a = n(30104),
                o = n(84976),
                l = n(6324);
            var i = (0, r.A)("div", {
                    target: "ennyu4t17"
                })({
                    name: "ha9uku",
                    styles: "display:flex;width:100%;justify-content:space-between"
                }),
                c = (0, r.A)("div", {
                    target: "ennyu4t16"
                })({
                    name: "2pn6kz",
                    styles: "overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:10px"
                }),
                s = (0, r.A)("div", {
                    target: "ennyu4t15"
                })({
                    name: "1nyl2gd",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background:#07242b;border:#053c48 solid 2px;border-radius:8px;padding:5px"
                }),
                u = (0, r.A)("div", {
                    target: "ennyu4t14"
                })({
                    name: "dklbma",
                    styles: "background:#053c48;padding:3px 10px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 10px"
                }),
                d = (0, r.A)("small", {
                    target: "ennyu4t13"
                })({
                    name: "kp3m62",
                    styles: "background:#053c48;padding:3px 10px;border-top-right-radius:5px;border-top-left-radius:5px;align-self:flex-start;margin-left:10px"
                }),
                m = (0, r.A)("div", {
                    target: "ennyu4t12"
                })({
                    name: "16jnipj",
                    styles: "display:flex;flex-direction:column;flex:1;justify-content:space-between;margin:0 5px 0 5px;&>*{margin:3px 0 3px 0;}"
                }),
                f = (0, r.A)("div", {
                    target: "ennyu4t11"
                })({
                    name: "1v5otb0",
                    styles: "display:inline-block;flex:1;flex-direction:row;align-items:center;white-space:pre-wrap;word-break:break-word;& small{overflow:hidden;max-lines:1;white-space:nowrap;text-overflow:ellipsis;}& strong{font-size:125%;}"
                }),
                p = (0, r.A)("div", {
                    target: "ennyu4t10"
                })("flex:1;display:flex;flex-wrap:wrap;flex-direction:row;gap:1.5rem;@media (min-width: 700px){justify-content:end;}", function(e) {
                    return e.slim && "\n      justify-content: end;\n      font-size: 0;\n\n      & > ".concat(w, " {\n        gap: 0;\n      }\n    ")
                }, ";"),
                w = (0, r.A)("button", {
                    target: "ennyu4t9"
                })("display:flex;align-items:center;text-align:initial;font-size:80%;border:none;background:none;margin:0;padding:3px 0;color:var(--bs-primary);cursor:pointer;gap:.5rem;&[disabled]{color:hsl(0, 0%, 60%);}&>", l.M, "{transition:all 0.1s ease-out;font-size:25px;}&:hover>", l.M, "{transform:scale(1.2);}"),
                g = (0, r.A)(w, {
                    target: "ennyu4t8"
                })("margin:0;padding:0 .5rem;&>", l.M, "{font-size:1rem;}"),
                v = (0, r.A)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                b = (0, r.A)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", function(e) {
                    return e.statusColor
                }, ";box-sizing:border-box;"),
                h = (0, r.A)(o.N_, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", function(e) {
                    return e.statusColor
                }, ";box-sizing:border-box;&:hover ", v, "{opacity:1;}"),
                E = (0, r.A)(h, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(v, " {\n      opacity: 0;\n    }\n  ")
                }, ";"),
                y = (0, r.A)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", function(e) {
                    return e.url
                }, ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                A = (0, r.A)(y, {
                    target: "ennyu4t2"
                })({
                    name: "1gxenc0",
                    styles: "z-index:1;background-size:cover;filter:blur(20px);width:164px;height:110px;top:-20px;left:-20px"
                }),
                x = (0, r.A)("div", {
                    target: "ennyu4t1"
                })("text-align:center;max-width:600px;margin:auto;margin-bottom:20px;opacity:", function(e) {
                    return e.seen ? "0.8" : "1"
                }, ";border:", function(e) {
                    return e.seen ? "0" : "2px solid yellow"
                }, ";& .card-header{text-align:left;}& .ignored{opacity:0.3;transform:scale(0.8);}"),
                C = (0, r.A)(a.A, {
                    target: "ennyu4t0"
                })({
                    name: "1ctac9v",
                    styles: "text-transform:capitalize;margin:0px 12px"
                })
        },
        21591(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => B
            });
            var r = n(10467),
                a = n(82544),
                o = n(43594),
                l = n(4067),
                i = n(34496),
                c = n(3385),
                s = n(54756),
                u = n.n(s),
                d = n(65950),
                m = n(10343),
                f = n(71661),
                p = n(56822),
                w = n(46078),
                g = n(5556),
                v = n.n(g),
                b = n(96540),
                h = n(6376),
                E = n(53818),
                y = n(7612),
                A = n(77948),
                x = n(4628);
            var C = (0, p.AH)({
                    name: "13al8yg",
                    styles: "color:var(--profile-icon-color, #FFF)"
                }),
                k = function(e) {
                    var t = e.userId,
                        n = void 0 === t ? null : t,
                        o = e.selectedCallback,
                        l = void 0 === o ? function() {} : o,
                        i = (0, h.wA)(),
                        s = (0, w.qd)(n, {
                            skip: null === n
                        }),
                        m = s.data,
                        p = void 0 === m ? {} : m,
                        g = s.isFetching,
                        v = s.isSuccess,
                        E = (0, x.w)({
                            type: "friend"
                        }, {
                            skip: !v || !(null != p && p.isFriend)
                        }),
                        k = E.data,
                        N = void 0 === k ? [] : k,
                        I = E.isFetching,
                        O = (0, A.mu)(),
                        M = (0, a.A)(O, 2),
                        B = M[0],
                        j = (M[1].isLoading, g || I),
                        S = function() {
                            var e = (0, r.A)(u().mark(function e() {
                                var t;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = N.find(function(e) {
                                                return e.favoriteId === n
                                            }), e.prev = 1, e.next = 4, B({
                                                type: "friend",
                                                id: t.id,
                                                groupName: t.tags[0]
                                            }).unwrap();
                                        case 4:
                                            return e.abrupt("return", i((0, d.X)({
                                                title: "Favorite Removed",
                                                icon: c.yy,
                                                message: "Successfully removed favorite.",
                                                color: "success",
                                                timeout: 3e3
                                            })));
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(1), console.error("Error deleting favorite friend", e.t0), e.abrupt("return", i((0, d.X)({
                                                title: "Favorite Removed",
                                                icon: c.yy,
                                                message: "Failed to remove favorite.",
                                                color: "danger",
                                                timeout: 3e3
                                            })));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, 7]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    if (!v) return null;
                    if (j) return b.createElement("span", {
                        className: "\n          tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n          tw-text-center tw-cursor-pointer tw-items-center\n        ",
                        role: "alert",
                        "aria-busy": "true"
                    }, b.createElement(f.M2, {
                        icon: y.z1,
                        spin: !0
                    }));
                    if (!p.isFriend) return null;
                    var q = N.some(function(e) {
                            return e.favoriteId === n
                        }),
                        P = function() {
                            if (!j) return q ? S() : l(!0)
                        };
                    return b.createElement(f.$n, {
                        className: "\n        tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-3\n        tw-text-center tw-cursor-pointer tw-items-center tw-rounded-none\n      ",
                        containerClasses: "tw-rounded-none",
                        tabIndex: 0,
                        onClick: P,
                        disabled: j,
                        onKeyDown: function(e) {
                            if ("enter" === e.key.toLowerCase()) return P()
                        },
                        "aria-label": "".concat(q ? "Unfavorite" : "Favorite", " User")
                    }, j && b.createElement(f.M2, {
                        icon: y.z1,
                        spin: !0,
                        "aria-label": "loading",
                        role: "progressbar"
                    }), b.createElement(f.M2, {
                        icon: c.yy,
                        className: C
                    }), " ", b.createElement("span", null, q ? "Unfavorite" : "Favorite"))
                };
            k.propTypes = {
                userId: v().string
            };
            const N = k;
            var I = (0, p.AH)({
                    name: "qyda2i",
                    styles: "border-color:var(--profile-button-color, #086c83);background-color:color-mix(in oklab, var(--profile-button-color, #07343f) 80%, black)"
                }),
                O = (0, p.AH)({
                    name: "13al8yg",
                    styles: "color:var(--profile-icon-color, #FFF)"
                }),
                M = function(e) {
                    var t = e.userId,
                        n = e.className,
                        s = void 0 === n ? "" : n,
                        g = e.containerClasses,
                        v = void 0 === g ? "" : g,
                        y = e.onFavorite,
                        A = void 0 === y ? function() {} : y,
                        x = e.slim,
                        C = void 0 !== x && x,
                        k = (0, h.wA)(),
                        M = (0, b.useState)(!1),
                        B = (0, a.A)(M, 2),
                        j = B[0],
                        S = B[1],
                        q = (0, b.useRef)(null),
                        P = (0, w.qd)(t, {
                            skip: null === t
                        }),
                        T = P.data,
                        D = void 0 === T ? {} : T,
                        F = P.isError,
                        z = P.error,
                        R = P.isSuccess,
                        U = (0, w.YT)(),
                        L = (0, a.A)(U, 2),
                        G = L[0],
                        _ = L[1].isLoading,
                        V = (0, w.be)(),
                        H = (0, a.A)(V, 2),
                        W = H[0],
                        X = H[1].isLoading,
                        Y = (0, w.yQ)(),
                        $ = (0, a.A)(Y, 2),
                        Q = $[0],
                        Z = $[1].isLoading,
                        J = _ || X || Z;
                    F && (console.error("Friend Status Error:", z), k((0, d.X)({
                        title: "Friend Status",
                        icon: i.zp,
                        message: "Failed to get friend status, Please try again later.",
                        color: "danger",
                        timeout: 3e3
                    }))), (0, b.useEffect)(function() {
                        var e = function(e) {
                            q.current && !q.current.contains(e.target) && S(!1)
                        };
                        return document.addEventListener("mousedown", e),
                            function() {
                                document.removeEventListener("mousedown", e)
                            }
                    }, []);
                    var K, ee, te, ne = function() {
                            var e = (0, r.A)(u().mark(function e() {
                                var n, r, a;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, W({
                                                userId: t
                                            }).unwrap();
                                        case 3:
                                            S(!1), k((0, d.X)({
                                                title: "Friend Request",
                                                icon: c.yy,
                                                message: "Successfully Unfriended.",
                                                color: "success",
                                                timeout: 3e3
                                            })), (0, E.u4)("Social_Unfriend", {
                                                targetUserId: t,
                                                source: "web"
                                            }), e.next = 13;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r ? void 0 : r.error), k((0, d.X)({
                                                title: "Friend Request",
                                                icon: i.zp,
                                                message: "Failed to unfriend: ".concat(a),
                                                color: "danger",
                                                timeout: 3e3
                                            })), console.error(a);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [0, 8]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        re = {
                            isFriend: {
                                text: "Friends",
                                ariaLabel: "Friends",
                                icon: m.vrcFriends,
                                clickHandler: function() {
                                    S(function(e) {
                                        return !e
                                    })
                                }
                            },
                            incomingRequest: {
                                text: "Accept Friend Request",
                                ariaLabel: "Accept Friend Request",
                                icon: c.yy,
                                clickHandler: (te = (0, r.A)(u().mark(function e() {
                                    var n, r, a;
                                    return u().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, G({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: c.yy,
                                                    message: "Friend Request Accepted.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), (0, E.u4)("Social_AcceptFriendRequest", {
                                                    targetUserId: t,
                                                    source: "web"
                                                }), e.next = 12;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r ? void 0 : r.error), k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: i.zp,
                                                    message: "Failed to accept friend request: ".concat(a),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(a);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 7]
                                    ])
                                })), function() {
                                    return te.apply(this, arguments)
                                })
                            },
                            outgoingRequest: {
                                text: C ? "Cancel Request" : "Cancel Friend Request",
                                ariaLabel: "Cancel Friend Request",
                                icon: m.vrcPendingFriend,
                                clickHandler: (ee = (0, r.A)(u().mark(function e() {
                                    var n, r, a;
                                    return u().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, Q({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: m.vrcPendingFriend,
                                                    message: "Friend Request Canceled.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), e.next = 11;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r ? void 0 : r.error), k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: i.zp,
                                                    message: "Failed to Cancel friend request: ".concat(a, "."),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(a);
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 6]
                                    ])
                                })), function() {
                                    return ee.apply(this, arguments)
                                })
                            },
                            addFriend: {
                                text: C ? "" : "Add Friend",
                                ariaLabel: "Add Friend",
                                icon: m.vrcAddFriend,
                                clickHandler: (K = (0, r.A)(u().mark(function e() {
                                    var n, r, a;
                                    return u().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, G({
                                                    userId: t
                                                }).unwrap();
                                            case 3:
                                                k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: m.vrcAddFriend,
                                                    message: "Friend Request Sent.",
                                                    color: "success",
                                                    timeout: 3e3
                                                })), (0, E.u4)("Social_SendFriendRequest", {
                                                    targetUserId: t,
                                                    source: "web"
                                                }), e.next = 12;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), a = (null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || (null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r ? void 0 : r.error), k((0, d.X)({
                                                    title: "Friend Request",
                                                    icon: i.zp,
                                                    message: "Failed to send friend request: ".concat(a, "."),
                                                    color: "danger",
                                                    timeout: 3e3
                                                })), console.error(a);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 7]
                                    ])
                                })), function() {
                                    return K.apply(this, arguments)
                                })
                            }
                        },
                        ae = (0, b.useMemo)(function() {
                            var e, t = null !== (e = Object.keys(D).find(function(e) {
                                return D[e]
                            })) && void 0 !== e ? e : "addFriend";
                            return re[t]
                        }, [D]);
                    if (R) {
                        var oe = ae.icon,
                            le = ae.text,
                            ie = ae.clickHandler,
                            ce = ae.ariaLabel,
                            se = D.isFriend;
                        return C ? b.createElement(f.$n, {
                            className: s,
                            containerClasses: v,
                            onClick: ie,
                            loading: J,
                            "aria-label": ce
                        }, b.createElement(f.M2, {
                            icon: oe,
                            width: 20,
                            height: 20,
                            className: "tw-align-middle"
                        }), "" !== le && b.createElement("span", {
                            className: "tw-hidden sm:tw-inline-block"
                        }, le)) : b.createElement(b.Fragment, null, !se && b.createElement(f.$n, {
                            className: s,
                            containerClasses: v,
                            onClick: ie,
                            loading: J,
                            "aria-label": ce
                        }, b.createElement(f.M2, {
                            icon: oe,
                            width: 20,
                            height: 20,
                            className: (0, p.cx)("tw-align-middle", O)
                        }), "" !== le && b.createElement("span", null, le)), se && b.createElement("div", {
                            className: "tw-relative tw-min-w-[245px] tw-z-10",
                            ref: q
                        }, b.createElement(f.$n, {
                            "aria-haspopup": "menu",
                            "aria-expanded": j,
                            "aria-controls": "friend-action-dropdown",
                            className: s,
                            containerClasses: v,
                            onClick: ie,
                            loading: J,
                            "aria-label": ce
                        }, b.createElement(f.M2, {
                            icon: oe,
                            width: 20,
                            height: 20,
                            className: O
                        }), le, b.createElement(f.M2, {
                            icon: j ? l.S$ : o.xB,
                            width: 14,
                            height: 18,
                            className: (0, p.cx)("tw-align-middle")
                        })), j && b.createElement("div", {
                            id: "friend-action-dropdown",
                            role: "menu",
                            className: (0, p.cx)("tw-w-full tw-absolute tw-overflow-hidden tw-text-option-inactive tw-mt-2 tw-border-solid tw-rounded-md tw-font-medium tw-text-base tw-z-10 tw-cursor-pointer", I)
                        }, b.createElement(N, {
                            userId: t,
                            selectedCallback: function() {
                                A(), S(!1)
                            },
                            role: "menuitem"
                        }), b.createElement(f.$n, {
                            onClick: ne,
                            role: "menuitem",
                            "aria-label": "Unfriend",
                            containerClasses: "tw-rounded-none",
                            className: " tw-py-3 tw-px-3 tw-flex tw-flex-row tw-w-full tw-justify-center tw-items-center tw-rounded-none"
                        }, b.createElement(f.M2, {
                            icon: m.vrcRemoveFriend,
                            width: 16,
                            className: O
                        }), "Unfriend"))))
                    }
                    return null
                };
            M.propTypes = {
                userId: v().string.isRequired,
                className: v().string,
                containerClasses: v().string,
                slim: v().bool
            };
            const B = M
        },
        55943(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n(82544),
                a = n(78502),
                o = n(91069),
                l = n(96540);
            const i = function(e, t) {
                var n = (0, a.B)(),
                    i = (0, l.useState)(!0),
                    c = (0, r.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    d = (0, l.useState)(!0),
                    m = (0, r.A)(d, 2),
                    f = m[0],
                    p = m[1],
                    w = (0, l.useState)(!1),
                    g = (0, r.A)(w, 2),
                    v = g[0],
                    b = g[1],
                    h = e || {},
                    E = h.introAnimation,
                    y = h.mainAnimation,
                    A = h.baseImage,
                    x = (null == E ? void 0 : E.url) || null,
                    C = (null == y ? void 0 : y.url) || (null == e ? void 0 : e.imageUrl) || null,
                    k = (null == A ? void 0 : A.url) || null,
                    N = (null == e ? void 0 : e.imageUrl) || null;
                (0, l.useEffect)(function() {
                    if (null == e || !e.id || "none" === e.id) return p(!1), u(!0), void b(!1);
                    u(!0), b(!1);
                    var t = [];
                    if (n && k ? t.push(k) : (x && t.push(x), C && t.push(C), !k || x || C || t.push(k)), 0 === t.length && N && t.push(N), 0 !== t.length) {
                        if (t.every(o.iU)) return p(!1), void b(!0);
                        p(!0);
                        var r = t.length,
                            a = {
                                count: 0,
                                mounted: !0
                            },
                            l = [],
                            i = function() {
                                a.count++, a.mounted && a.count === r && (p(!1), setTimeout(function() {
                                    a.mounted && b(!0)
                                }, 50))
                            };
                        return t.forEach(function(e) {
                                var t = new Image;
                                t.onload = i, t.onerror = i, t.src = e, l.push(t)
                            }),
                            function() {
                                a.mounted = !1, l.forEach(function(e) {
                                    e.onload = null, e.onerror = null
                                })
                            }
                    }
                    p(!1)
                }, [null == e ? void 0 : e.id, t, x, C, k, N, n]), (0, l.useEffect)(function() {
                    if (!f && v && E && y && !n) {
                        var e = E.totalDurationMs || 2e3,
                            t = setTimeout(function() {
                                u(!1)
                            }, e);
                        return function() {
                            return clearTimeout(t)
                        }
                    }
                }, [f, v, t, E, y, n]);
                return {
                    animationSource: n && k ? k : f ? k || N : x && C ? s ? x : C : C || x || k || N,
                    introSrc: x,
                    mainSrc: C,
                    baseSrc: k,
                    fallbackSrc: N,
                    isPlayingIntro: s,
                    isIntroFinished: v && !s,
                    isLoading: f,
                    isReady: v,
                    animationResetKey: t,
                    reducedAnimations: n
                }
            }
        },
        23892(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var r = n(10467),
                a = n(82544),
                o = n(7612),
                l = n(76249),
                i = n(64850),
                c = n(77276),
                s = n(62285),
                u = n(33105),
                d = n(71704),
                m = n(45872),
                f = n(54756),
                p = n.n(f),
                w = n(65950),
                g = n(71661),
                v = n(56822),
                b = n(13951),
                h = n(91069),
                E = n(96540),
                y = n(6376);
            var A = (0, v.AH)({
                    name: "qyda2i",
                    styles: "border-color:var(--profile-button-color, #086c83);background-color:color-mix(in oklab, var(--profile-button-color, #07343f) 80%, black)"
                }),
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#6AE3F9";
                    return (0, v.AH)("color:var(--profile-icon-color, ", e, ");", "")
                };
            const C = function(e) {
                var t = e.userId,
                    n = e.isMuted,
                    f = e.isBlocked,
                    C = e.className,
                    k = e.containerClasses,
                    N = e.hideShare,
                    I = void 0 !== N && N,
                    O = (0, y.wA)(),
                    M = (0, E.useRef)(null),
                    B = (0, E.useState)({
                        left: !1
                    }),
                    j = (0, a.A)(B, 2),
                    S = j[0],
                    q = j[1],
                    P = (0, E.useState)(!1),
                    T = (0, a.A)(P, 2),
                    D = T[0],
                    F = T[1],
                    z = (0, b.g_)(),
                    R = (0, a.A)(z, 2),
                    U = R[0],
                    L = R[1].isLoading,
                    G = (0, b.u9)(),
                    _ = (0, a.A)(G, 2),
                    V = _[0],
                    H = _[1].isLoading,
                    W = L || H,
                    X = function(e) {
                        M.current && !M.current.contains(e.target) && F(!1)
                    };
                (0, E.useEffect)(function() {
                    return D ? document.addEventListener("mousedown", X) : document.removeEventListener("mousedown", X),
                        function() {
                            document.removeEventListener("mousedown", X)
                        }
                }, [D]);
                var Y = function() {
                        var e = (0, r.A)(p().mark(function e() {
                            var n;
                            return p().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = (0, h.Dk)("".concat(window.location.origin, "/home/user/").concat(t)), e.next = 3, n();
                                    case 3:
                                        O((0, w.X)({
                                            title: "Player Profile",
                                            icon: i.X4,
                                            message: "Player profile link copied to clipboard.",
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = function() {
                        var e = (0, r.A)(p().mark(function e(r) {
                            var a, o, l, c, s, u, d;
                            return p().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = r.type, o = {
                                                mute: {
                                                    apply: "Mute player",
                                                    remove: "Unmute player"
                                                },
                                                block: {
                                                    apply: "Block player",
                                                    remove: "Unblock player"
                                                }
                                            }, l = {
                                                userId: t,
                                                moderationType: a
                                            }, !("block" === a && f || "mute" === a && n)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.prev = 4, e.next = 7, V(l).unwrap();
                                    case 7:
                                        F(!1), O((0, w.X)({
                                            title: "Player Profile",
                                            icon: i.X4,
                                            message: "".concat(o[a].remove, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), console.error("Player Moderation Error:", e.t0), O((0, w.X)({
                                            title: "Player Profile",
                                            icon: m.rf,
                                            message: "\n                ".concat(o[a].remove, " failed.\n                ").concat((null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) || (null === (s = e.t0.data) || void 0 === s ? void 0 : s.error), "\n              "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                        return e.abrupt("return");
                                    case 16:
                                        return e.prev = 16, e.next = 19, U(l).unwrap();
                                    case 19:
                                        F(!1), O((0, w.X)({
                                            title: "Player Profile",
                                            icon: i.X4,
                                            message: "".concat(o[a].apply, " successfully."),
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t1 = e.catch(16), console.error("Player Moderation Error:", e.t1), O((0, w.X)({
                                            title: "Player Profile",
                                            icon: m.rf,
                                            message: "\n                ".concat(o[a].apply, " failed.\n                ").concat((null === (u = e.t1.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || (null === (d = e.t1.data) || void 0 === d ? void 0 : d.error), "\n              "),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 11],
                                [16, 23]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return E.createElement("div", {
                    className: "tw-relative",
                    ref: M
                }, E.createElement(g.$n, {
                    className: (0, v.cx)(C, "tw-px-3 tw-py-2"),
                    "aria-label": "Show More Options",
                    containerClasses: k,
                    onClick: function() {
                        return function() {
                            if (!D && M.current) {
                                var e = M.current.getBoundingClientRect(),
                                    t = window.innerWidth - e.right;
                                q({
                                    left: t < 170
                                })
                            }
                            F(!D)
                        }()
                    }
                }, E.createElement(g.M2, {
                    icon: d.vH,
                    className: (0, v.cx)(x("#FFFFFF"))
                })), D && E.createElement("div", {
                    className: (0, v.cx)(S.left ? "tw-right-0" : "tw-left-0", "tw-absolute tw-text-option-inactive tw-overflow-hidden tw-mt-2 tw-border-solid tw-rounded-md tw-font-medium tw-text-base tw-w-[170px] tw-cursor-pointer tw-z-50 sm:tw-max-w-[170px]", A)
                }, !I && E.createElement(g.$n, {
                    onClick: Y,
                    className: " tw-py-2 tw-px-3 tw-rounded-none",
                    containerClasses: "tw-rounded-none",
                    "aria-label": "Share User Profile"
                }, E.createElement(g.M2, {
                    icon: u.Ex,
                    className: (0, v.cx)(x("#FFFFFF"))
                }), " Share"), null !== n && E.createElement(g.$n, {
                    className: "\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center tw-rounded-none\n            ".concat(W ? "tw-hidden" : "tw-block", "\n        "),
                    containerClasses: "tw-rounded-none",
                    tabIndex: 0,
                    onClick: function() {
                        return $({
                            type: "mute"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return $({
                            type: "mute"
                        })
                    },
                    "aria-label": "".concat(n ? "Unmute" : "Mute", " User")
                }, E.createElement(g.M2, {
                    icon: n ? s.A5 : c.$z,
                    className: (0, v.cx)(x("#FFFFFF"))
                }), " ", n ? "Unmute" : "Mute"), null !== f && E.createElement(g.$n, {
                    className: "\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2 tw-px-3\n            tw-text-center tw-cursor-pointer tw-items-center tw-rounded-none\n            ".concat(W ? "tw-hidden" : "tw-block", "\n        "),
                    containerClasses: "tw-rounded-none",
                    tabIndex: 0,
                    onClick: function() {
                        return $({
                            type: "block"
                        })
                    },
                    onKeyDown: function(e) {
                        if ("enter" === e.key.toLowerCase()) return $({
                            type: "block"
                        })
                    },
                    "aria-label": "".concat(f ? "Unblock" : "Block", " User")
                }, E.createElement(g.M2, {
                    icon: f ? i.X4 : l.c7,
                    className: (0, v.cx)(x("#FFFFFF"))
                }), " ", f ? "Unblock" : "Block"), E.createElement("div", {
                    className: "\n            tw-w-full tw-flex tw-flex-row tw-justify-center tw-py-2.5\n            tw-text-center tw-items-center\n            tw-h-20\n            ".concat(W ? "tw-block" : "tw-hidden", "\n        ")
                }, E.createElement(g.M2, {
                    icon: o.z1,
                    spin: !0,
                    className: "tw-h-10"
                }))))
            }
        },
        13671(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var r = n(64850),
                a = n(71661),
                o = n(25538),
                l = n(78502),
                i = n(91069),
                c = n(5556),
                s = n.n(c),
                u = n(96540),
                d = function(e) {
                    var t = e.profilePic,
                        n = void 0 === t ? null : t,
                        c = e.displayName,
                        s = e.isLoading,
                        d = void 0 !== s && s,
                        m = e.iconFrame,
                        f = void 0 === m ? null : m,
                        p = e.previewFrameSrc,
                        w = void 0 === p ? null : p,
                        g = e.previewFrameResetKey,
                        v = void 0 === g ? null : g,
                        b = e.size,
                        h = void 0 === b ? "default" : b,
                        E = e.hideBorder,
                        y = void 0 !== E && E,
                        A = e.isAnimating,
                        x = void 0 === A || A,
                        C = e.borderClass,
                        k = void 0 === C ? "tw-border-grey" : C,
                        N = {
                            fill: "128",
                            nameplate: "128",
                            small: "128",
                            default: "256",
                            large: "256",
                            preview: "256"
                        },
                        I = (0, u.useMemo)(function() {
                            return d || null === n ? null : (0, i.Iu)({
                                fileUrl: n,
                                width: N[h] || "256"
                            })
                        }, [n, h, d]),
                        O = f || {},
                        M = O.introAnimation,
                        B = O.mainAnimation,
                        j = O.baseImage,
                        S = O.imageUrl,
                        q = (0, l.B)(),
                        P = d ? null : w || (f ? !q && x || null == j || !j.url ? null != B && B.url ? B.url : null != M && M.url ? M.url : null != j && j.url ? j.url : S : j.url : null),
                        T = (0, l.F)({
                            src: P,
                            resetKey: v
                        });
                    return u.createElement("div", {
                        className: "".concat({
                            fill: "tw-w-full tw-h-full",
                            nameplate: "tw-w-12 tw-h-12",
                            small: "tw-w-[60px] tw-aspect-square",
                            default: "tw-w-[80px] sm:tw-w-[100px] md:tw-w-[150px] lg:tw-w-[130px] 2xl:tw-w-[160px] tw-aspect-square",
                            large: "tw-w-[200px] tw-aspect-square",
                            preview: "tw-w-48 tw-h-48"
                        } [h], " tw-relative")
                    }, u.createElement("div", {
                        className: "\n          tw-w-full tw-h-full tw-rounded-full tw-bg-darker-grey tw-overflow-hidden\n          ".concat(k, "\n          ").concat(y ? "tw-border-0" : {
                            fill: "tw-border-4",
                            nameplate: "tw-border-2",
                            small: "tw-border-4",
                            default: "tw-border-[6px]",
                            large: "tw-border-8",
                            preview: "tw-border-8"
                        } [h], "\n          ").concat(P ? "tw-border-none" : "tw-border-solid", "\n        ")
                    }, d && u.createElement(o.A, {
                        className: "tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-text-2xl"
                    }), !d && n && u.createElement("img", {
                        src: I,
                        alt: "".concat(c, "'s profile icon"),
                        className: "tw-object-cover tw-h-full tw-w-full tw-bg-darker-grey"
                    }), !d && !n && u.createElement("div", {
                        className: "tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-bg-darker-grey tw-text-light-grey"
                    }, u.createElement(a.M2, {
                        icon: r.X4
                    }))), P && u.createElement("img", {
                        ref: T,
                        src: P,
                        alt: "Icon frame",
                        className: "tw-absolute tw-inset-0 tw-w-full tw-object-contain tw-pointer-events-none tw-scale-[1.3]"
                    }))
                };
            d.propTypes = {
                profilePic: s().string,
                displayName: s().string,
                isLoading: s().bool,
                iconFrame: s().shape({
                    id: s().string,
                    imageUrl: s().string,
                    introAnimation: s().object,
                    mainAnimation: s().object,
                    baseImage: s().object
                }),
                previewFrameSrc: s().string,
                previewFrameResetKey: s().oneOfType([s().string, s().number]),
                size: s().oneOf(["fill", "nameplate", "small", "default", "large", "preview"]),
                isAnimating: s().bool,
                borderClass: s().string
            };
            const m = d
        },
        13419(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n(46078),
                a = n(96540);
            const o = function() {
                var e = (0, r.wX)("iconFrame"),
                    t = e.data,
                    n = e.isLoading,
                    o = (0, r.wX)("profileEffect"),
                    l = o.data,
                    i = o.isLoading,
                    c = (0, r.wX)("nameplateEffect"),
                    s = c.data,
                    u = c.isLoading,
                    d = n || i || u;
                (0, a.useEffect)(function() {
                    if (!d) {
                        var e = function(e) {
                            e && ((new Image).src = e)
                        };
                        null == t || t.forEach(function(t) {
                            return e(null == t ? void 0 : t.imageUrl)
                        }), null == l || l.forEach(function(t) {
                            return e(null == t ? void 0 : t.imageUrl)
                        }), null == s || s.forEach(function(t) {
                            return e(null == t ? void 0 : t.imageUrl)
                        })
                    }
                }, [d, t, l, s]);
                var m = (0, a.useMemo)(function() {
                        var e = function(e) {
                            return new Map((e || []).map(function(e) {
                                return [e.id, e]
                            }))
                        };
                        return {
                            iconFrame: e(t),
                            profileEffect: e(l),
                            nameplateEffect: e(s)
                        }
                    }, [t, l, s]),
                    f = (0, a.useCallback)(function(e, t) {
                        var n, r, a, o;
                        if (!t) return null;
                        var l = null === (n = m[e]) || void 0 === n ? void 0 : n.get(t);
                        if (!l) return null;
                        var i = (null === (r = l.metadata) || void 0 === r ? void 0 : r.assets) || [];
                        return {
                            id: t,
                            name: l.name,
                            imageUrl: l.imageUrl,
                            introAnimation: i.find(function(e) {
                                return "introAnimation" === e.type
                            }),
                            mainAnimation: i.find(function(e) {
                                return "mainAnimation" === e.type
                            }),
                            baseImage: i.find(function(e) {
                                return "base" === e.type
                            }),
                            gradientStart: null === (a = l.metadata) || void 0 === a ? void 0 : a.gradientStart,
                            gradientEnd: null === (o = l.metadata) || void 0 === o ? void 0 : o.gradientEnd
                        }
                    }, [m]);
                return {
                    isLoading: d,
                    cosmeticsLookupByTemplateId: m,
                    getCosmeticByTemplateId: f,
                    iconFrames: t,
                    profileEffects: l,
                    nameplateEffects: s
                }
            }
        },
        77839(e, t, n) {
            "use strict";
            n.d(t, {
                B: () => r
            });
            var r = function(e) {
                return e.currentUser.isMod
            }
        },
        79617(e, t, n) {
            "use strict";
            n.d(t, {
                D0: () => g,
                Pg: () => w,
                Ph: () => b,
                Q_: () => p,
                Uy: () => v,
                Zm: () => f,
                o5: () => m
            });
            var r = n(64467),
                a = n(80045),
                o = n(89483),
                l = n(91069),
                i = ["n", "pageValue", "types"],
                c = ["n", "pageValue", "types", "collection"];

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var d = o.m.injectEndpoints({
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
                                        s = (0, a.A)(e, i);
                                    return {
                                        url: "inventory",
                                        params: u(u({}, (0, l.Hx)({
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
                                        i = e.types,
                                        s = e.collection,
                                        d = (0, a.A)(e, c);
                                    return {
                                        url: "inventory",
                                        params: u(u(u(u({}, (0, l.Hx)({
                                            n,
                                            pageValue: o
                                        })), i && {
                                            types: i
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
                w = d.useUpdateInventoryItemMutation,
                g = d.useGetInventoryCollectionsQuery,
                v = d.useGetInventoryNotSeenItemsQuery,
                b = d.useGetGlobalInventoryItemsQuery
        },
        31464(e, t, n) {
            "use strict";
            n.d(t, {
                a$: () => i,
                ht: () => l,
                wG: () => a,
                xH: () => o
            });
            var r = n(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getJams: e.query({
                                query: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.type,
                                        n = e.states;
                                    return {
                                        url: "jams?".concat(t ? "type=${type}&" : "").concat(n ? n.map(function(e) {
                                            return "states=".concat(e)
                                        }).join("&") : "")
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
                l = r.useGetJamSubmissionsQuery,
                i = r.useSubmitJamContentMutation
        },
        64937(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => l,
                B3: () => i,
                Gg: () => a,
                Lc: () => o,
                mI: () => c,
                oH: () => s
            });
            var r = n(89483).m.injectEndpoints({
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
                l = r.useDeleteAllV2NotificationMutation,
                i = r.useGetAllV2NotificationsQuery,
                c = r.useHideNotificationMutation,
                s = r.useRespondToNotificationMutation
        },
        68708(e, t, n) {
            "use strict";
            n.d(t, {
                K4: () => c,
                Y3: () => i
            });
            var r = n(87695),
                a = n(82544),
                o = n(31069),
                l = new Set(["user", "avatar", "world", "group", "event", "OpenURL", "OpenQuickMenuTab", "OpenMainMenuTab", "OpenListingDetails", "OpenExpiredListingDetails", "OpenHelpCategory", "OpenHelpArticle", "CannedWorldSearch", "OpenWorldDetails", "OpenEventDetails", "OpenAvatarsMenu", "OpenInventoryMenu", "OpenVRChatStore"]),
                i = (new Set(["OpenVRCPlusMenu", "OpenSocialMenu", "OpenSafetyMenu", "OpenSettingsMenu", "OpenWalletMenu", "OpenGalleryMenu", "OpenGroupsMenu", "EnablePanicMode", "OpenAccountUpgrade", "OpenWorldsMenu"]), function(e) {
                    var t, n = e.command,
                        r = e.parameters,
                        i = void 0 === r ? [] : r;
                    if (!n) return null;
                    switch (n) {
                        case "OpenURL":
                            return i[0] ? {
                                href: i[0]
                            } : null;
                        case "OpenHelpArticle":
                            return i[0] ? {
                                to: "/home/help-article/".concat(i[0])
                            } : null;
                        case "OpenWorldDetails":
                            return i[0] ? {
                                to: "/home/world/".concat(i[0])
                            } : null;
                        case "event":
                        case "OpenEventDetails":
                            if (i.length >= 2) return {
                                to: "/home/group/".concat(i[0], "/calendar/").concat(i[1])
                            };
                            if (null !== (t = i[0]) && void 0 !== t && t.includes(",")) {
                                var c = i[0].split(","),
                                    s = (0, a.A)(c, 2),
                                    u = s[0],
                                    d = s[1];
                                return {
                                    to: "/home/group/".concat(u, "/calendar/").concat(d)
                                }
                            }
                            return null;
                        case "OpenListingDetails":
                            return {
                                to: "/home/marketplace/wallet/subscriptions/".concat(o.eA.EXPIRING)
                            };
                        case "OpenExpiredListingDetails":
                            return {
                                to: "/home/marketplace/wallet/subscriptions/".concat(o.eA.EXPIRED)
                            };
                        case "CannedWorldSearch":
                            return i[0] ? {
                                to: "/home/search/worlds/".concat(i[0])
                            } : null;
                        case "OpenWorldsMenu":
                            return {
                                to: "/home/worlds"
                            };
                        case "OpenGroupsMenu":
                            return {
                                to: "/home/groups"
                            };
                        case "OpenSocialMenu":
                            return {
                                to: "/home"
                            };
                        case "OpenWalletMenu":
                            return {
                                to: "/home/marketplace/wallet"
                            };
                        case "OpenGalleryMenu":
                            return {
                                to: "/home/inventory/photos"
                            };
                        case "OpenVRCPlusMenu":
                            return {
                                to: "/home/subscriptions"
                            };
                        case "OpenAccountUpgrade":
                            return {
                                to: "/home/profile"
                            };
                        case "OpenInventoryMenu":
                            return {
                                to: "/home/inventory"
                            };
                        case "OpenAvatarsMenu":
                            return {
                                to: "/home/avatars"
                            };
                        case "OpenVRChatStore":
                            return {
                                to: "/home/marketplace"
                            };
                        default:
                            return i[0] && l.has(n) ? {
                                to: "/home/".concat(n, "/").concat(i[0])
                            } : {
                                unsupported: !0,
                                label: n
                            }
                    }
                }),
                c = function(e) {
                    if (e) {
                        var t = e.split(":"),
                            n = (0, r.A)(t),
                            a = n[0],
                            o = n.slice(1).join(":");
                        if (a) {
                            var l = i({
                                command: a,
                                parameters: o ? [o] : []
                            });
                            if (l) return l.href ? l.href : l.to ? l.to : void 0
                        }
                    }
                }
        },
        70506(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n(71354),
                a = n.n(r),
                o = n(76314),
                l = n.n(o)()(a());
            l.push([e.id, ":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: #fff;\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n}\n\n.fc .fc-toolbar .fc-button {\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: #333;\n  background-color: var(--fc-button-bg-color);\n  border-color: #333;\n  border-color: var(--fc-button-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: #064B5C;\n  background-color: var(--fc-button-active-bg-color);\n  border-color: #064B5C;\n  border-color: var(--fc-button-active-border-color);\n  color: #fff;\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}", "", {
                version: 3,
                sources: ["webpack://./src/components/Calendar/calendarStyles.css"],
                names: [],
                mappings: "AAAA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,6CAA6C;EAC7C,gCAAgC;EAChC,0BAA0B;;EAE1B,4BAA4B;EAC5B,0BAA0B;EAC1B,8BAA8B;EAC9B,gCAAgC;EAChC,uCAAuC;EACvC,oCAAoC;EACpC,wCAAwC;;EAExC,4BAA4B;EAC5B,gCAAgC;EAChC,2BAA2B;EAC3B,sDAAsD;;EAEtD,gCAAgC;EAChC,kCAAkC;;EAElC,iCAAiC;EACjC,uCAAuC;EACvC,wCAAwC;;EAExC,iDAAiD;EACjD,uCAAuC;EACvC,0BAA0B;EAC1B,8CAA8C;EAC9C,kCAAkC;EAClC,6BAA6B;;EAE7B,aAAa;EACb,iCAAiC;;EAEjC,gBAAgB;EAChB,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,WAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAG/B;;AAJA;EAEE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;;EAEE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;;AAGA;;;EAGE,eAAe;EACf,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,sBAA2C;EAA3C,2CAA2C;EAC3C,kBAA2C;EAA3C,2CAA2C;EAC3C,WAAkC;EAAlC,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAkD;EAAlD,kDAAkD;EAClD,qBAAkD;EAAlD,kDAAkD;EAClD,WAAkC;EAAlC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;;AAGA;CACC,gBAAgB;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,sCAAsC;EACtC,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,6BAAqB;EAArB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;;EAEE;AACF;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;;;AAIA;;EAEE;;;IAGE,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;EACxB;AACF",
                sourcesContent: [":root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #6AE3F9;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #2D363F;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #333;\n  --fc-button-border-color: #333;\n  --fc-button-hover-bg-color: #333;\n  --fc-button-hover-border-color: #086c84;\n  --fc-button-active-bg-color: #064B5C;\n  --fc-button-active-border-color: #064B5C;\n\n  --fc-event-bg-color: #064B5C;\n  --fc-event-border-color: #064B5C;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(0,0,0,0);\n  --fc-now-indicator-color: red;\n\n  /* Day Grid */\n  --fc-daygrid-event-dot-width: 8px;\n\n  /* List Events */\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc th a, .fc td a {\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-daygrid-more-link {\n  color: var(--fc-event-text-color);\n}\n\n.fc-header-toolbar .fc-button{\n  text-transform: capitalize;\n}\n\n.fc .fc-daygrid-day-top {\n  flex-direction: row;\n  font-size: 1.6em;\n}\n\n.fc .fc-toolbar-title {\n  font-weight: normal;\n}\n\n.fc .fc-event {\n  cursor: pointer;\n}\n\n.fc .fc-toolbar .fc-button {\n  border-radius: 4px !important;\n  padding: 5px 10px;\n  margin: 0 4px;\n}\n\n.fc .fc-toolbar .fc-button .fc-icon {\n  font-size: 1.2em;\n  vertical-align: text-top;\n}\n\n.fc .fc-toolbar .fc-button.fc-prev-button,\n.fc .fc-toolbar .fc-button.fc-next-button {\n  width: 40px;\n  padding: 4px 10px;\n  min-width: auto;\n  height: 42px;\n}\n\n.fc .fc-toolbar .fc-button.fc-today-button {\n  padding: 0;\n  line-height: 0em;\n  display: inline-block;\n  visibility: hidden;\n}\n.fc .fc-toolbar .fc-button.fc-today-button:after {\n  line-height: 1.4em;\n}\n\n\n.fc .fc-toolbar .fc-dayGridMonth-button,\n.fc .fc-toolbar .fc-timeGridWeek-button,\n.fc .fc-toolbar .fc-timeGridDay-button {\n  min-width: auto;\n  width: 40px;\n  display: block;\n  visibility: hidden;\n  line-height: 0em;\n  padding: 0;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after,\n.fc .fc-toolbar .fc-timeGridWeek-button:after,\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  line-height: 1.4em;\n}\n\n.fc .fc-button-primary:after {\n  background-color: var(--fc-button-bg-color);\n  border-color: var(--fc-button-border-color);\n  color: var(--fc-button-text-color);\n  border-radius: 4px;\n  visibility: visible;\n  padding: 10px 10px;\n  display: block;\n  min-width: 40px;\n}\n\n.fc .fc-button-primary:not(:disabled).fc-button-active:after {\n  background-color: var(--fc-button-active-bg-color);\n  border-color: var(--fc-button-active-border-color);\n  color: var(--fc-button-text-color);\n}\n\n.fc .fc-toolbar {\n  align-items: flex-end;\n}\n\n.fc .fc-toolbar .fc-dayGridMonth-button:after {\n  content: 'M';\n}\n\n.fc .fc-toolbar .fc-timeGridWeek-button:after {\n  content: 'W';  \n}\n\n.fc .fc-toolbar .fc-timeGridDay-button:after {\n  content: 'D';\n}\n\n.fc .fc-toolbar .fc-today-button:after {\n  content: 'T';\n}\n\n\n.fc .fc-daygrid-block-event .fc-event-time{\n margin-left: 2px;\n}\n\n.fc .fc-daygrid-day-frame {\n  height: 125px;\n}\n\n.fc .fc-daygrid-day-number {\n  display: grid;\n  grid-template-columns: minmax(30px, auto);\n  grid-template-rows: minmax(30px, auto);;\n  aspect-ratio: 1 / 1;\n  align-items: center;\n  text-align: center;\n  margin: 12px;\n  font-weight: 300;\n  cursor: default;\n}\n.fc .fc-daygrid-day-number:hover {\n  text-decoration: none;\n}\n\n.fc .fc-button-primary:focus {\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-day-today .fc-daygrid-day-number {\n  background-color: #1FD1ED;\n  border-radius: 100px;\n  color: #1A2026;\n}\n\n.fc .fc-theme-standard th {\n  border-style: none !important;\n}\n\n.fc .fc-day .fc-col-header-cell-cushion{\n  text-align: left;\n  display: block;\n  padding-left: 12px; \n  margin-bottom: 12px;\n  font-weight: normal;\n  color: #9C9C9C;\n}\n\n\n.fc .fc-daygrid-event {\n  padding-left: 4px;\n}\n\n.fc .fc-event.fc-timegrid-event.fc-v-event,\n.fc .fc-event.fc-timegrid-event .fc-event-main {\n  border: 0px;\n  box-shadow: 0px 0px 0px 0px;\n}\n\n.fc .fc-timegrid-axis-cushion,\n.fc .fc-timegrid-slot-label-cushion{\n  color: #9C9C9C\n}\n\n.fc .fc-toolbar-chunk .fc-toolbar-title {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1.2em;\n  display: block;\n  margin-bottom: 20px;\n}\n\n\n\n@media screen and (min-width: 768px) {\n\n  .fc .fc-toolbar .fc-dayGridMonth-button,\n  .fc .fc-toolbar .fc-timeGridWeek-button,\n  .fc .fc-toolbar .fc-timeGridDay-button {\n    padding: 4px 10px;\n    line-height: 1.4em;\n    min-width: 90px;\n    display: block;\n    visibility: visible;\n  }\n\n  .fc .fc-button-primary:after {\n    display: none;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-prev-button,\n  .fc .fc-toolbar .fc-button.fc-next-button {\n    margin-top: 0px;\n    height: auto;\n    width: auto;\n    padding: 4px 10px;\n    padding-top: 5px;\n  }\n\n  .fc .fc-toolbar .fc-button.fc-today-button {\n    line-height: 1.4em;\n    padding: 5px 10px;\n    visibility: visible;\n  }\n\n  .fc .fc-toolbar-chunk .fc-toolbar-title {\n    font-size: 1.75em;\n    display: inline-block;\n    margin-bottom: 0px;\n    vertical-align: middle;\n  }\n}"],
                sourceRoot: ""
            }]);
            const i = l
        },
        74644(e, t, n) {
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
        68301(e, t, n) {
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
        79814(e, t, n) {
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
        48048(e, t, n) {
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
        97741(e, t, n) {
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
        91500(e, t, n) {
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
        19515(e, t, n) {
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
        29983(e, t, n) {
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
        21099(e, t, n) {
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
        16260(e, t, n) {
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
//# sourceMappingURL=990db35b81ecf312b3395aa0b022fd5fceead12b5f9d146d528072265a6b7c38.js.map