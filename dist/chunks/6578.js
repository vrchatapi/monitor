(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6578], {
        11378(e, t, n) {
            "use strict";
            n.d(t, {
                ED: () => p,
                Io: () => v,
                US: () => g,
                V_: () => w,
                gD: () => h,
                v3: () => b,
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
                b = function(e) {
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
                h = function(e) {
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
                v = function() {
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
                b = n.n(g),
                h = {
                    circle: i(),
                    flower: s(),
                    heart: d(),
                    pow: f(),
                    square: w(),
                    star: b()
                },
                v = function(e) {
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
                        b = (0, o.useRef)(-1),
                        v = function(e) {
                            e.filter = d ? "grayscale(1)" : "none"
                        },
                        E = function() {
                            -1 !== b.current && (clearInterval(b.current), b.current = -1)
                        },
                        A = (0, o.useMemo)(function() {
                            return h[null == t ? void 0 : t.maskTag] || null
                        }, [t]),
                        y = (0, o.useRef)(!1),
                        x = (0, o.useMemo)(function() {
                            var e = !(null == t || !t.animated);
                            return e || E(), y.current = e, e
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
                        B = function() {
                            E(), null === w.current && g.current && (w.current = g.current.getContext("2d")), w.current && w.current.clearRect(0, 0, a, a), x && C && k > 0 && (b.current = setInterval(j, 1e3 / k))
                        },
                        j = function() {
                            if (x) {
                                if (null !== w.current && null !== f.current) {
                                    var e = w.current;
                                    e.clearRect(0, 0, 1e3, 1e3), e.save(), null !== A && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in");
                                    var t = I(),
                                        n = N();
                                    v(e), e.drawImage(f.current, t.x, t.y, n, n, 0, 0, a, a), e.restore(), m.current = (m.current + 1) % C
                                }
                            } else E()
                        },
                        O = function() {
                            if (null !== g.current && null !== f.current) {
                                var e = g.current.getContext("2d");
                                if (e.clearRect(0, 0, a, a), e.imageSmoothingEnabled = !1, e.save(), null !== A && p.current && (e.drawImage(p.current, 0, 0, a, a), e.globalCompositeOperation = "source-in"), s) return v(e), e.drawImage(f.current, 0, 0, a, a), void e.restore();
                                f.current.width;
                                var t = f.current.width,
                                    n = f.current.height,
                                    r = t / n,
                                    o = r > 1 ? Math.min(a, t) : Math.min(a, n) * r,
                                    l = r > 1 ? Math.min(a, t) / r : Math.min(a, n);
                                v(e);
                                var i = (a - o) / 2,
                                    c = (a - l) / 2;
                                e.drawImage(f.current, i, c, o, l), e.restore()
                            }
                        },
                        S = function() {
                            f.current = null;
                            var e = new Image;
                            if (e.onload = function() {
                                    f.current = e, x && C && k ? B() : O(), void 0 !== l && l()
                                }, e.onerror = function(e) {
                                    console.error("Error loading image:", e), void 0 !== i && i(e)
                                }, A) {
                                var t = new Image;
                                t.onload = function() {
                                    p.current = t, f.current && (x && C && k || O())
                                }, t.src = A
                            } else p.current = null;
                            e.src = n
                        };
                    return (0, o.useEffect)(function() {
                        if (E(), f.current = null, p.current = null, g.current) {
                            var e = g.current.getContext("2d");
                            e && e.clearRect(0, 0, g.current.width, g.current.height)
                        }
                        return m.current = 0, S(),
                            function() {
                                E()
                            }
                    }, [t, n, a]), (0, o.useEffect)(function() {
                        if (f.current) return E(), x && C && k ? B() : O(),
                            function() {
                                E()
                            }
                    }, [x, C, k, a]), (0, o.useEffect)(function() {
                        S()
                    }, [n, A, a]), (0, o.useEffect)(function() {
                        return function() {
                            E()
                        }
                    }, []), o.createElement("canvas", {
                        width: a,
                        height: a,
                        ref: g
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
            const E = v
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
                i = n(15033);
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
            var r = n(15902),
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
        48169(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n(56822),
                a = n(96540);
            const o = function(e) {
                var t = e.className,
                    n = void 0 === t ? "" : t,
                    o = e.isLarge,
                    l = void 0 !== o && o,
                    i = (0, r.cx)("tw-bg-black tw-px-2 tw-text-vrc-plus-yellow tw-rounded-full tw-border-vrc-plus-yellow tw-border-solid tw-italic tw-whitespace-nowrap", {
                        "tw-text-[11px] tw-border-2": !l,
                        "tw-text-md tw-border-3": l
                    }, n);
                return a.createElement("output", {
                    className: i,
                    "aria-label": "VRC Plus"
                }, "VRC +")
            }
        },
        63576(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => x
            });
            var r = n(15184),
                a = n(64467),
                o = n(15902),
                l = n(75183),
                i = n(15033),
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
            const b = g;

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
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
                    return c.createElement(b, {
                        key: e.value,
                        option: v(v({}, e), {}, {
                            type: p
                        }),
                        onFilterChangeCallBack: n,
                        dropdownFilterValues: r
                    })
                })))
            };

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

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function(t) {
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
                    b = w[1],
                    h = (n.eventSources, n.accessTypes),
                    v = n.categories,
                    A = n.days,
                    x = n.platforms,
                    C = n.languages,
                    k = function(e) {
                        if (!f.current.contains(e.target)) return b(!1)
                    };
                (0, c.useEffect)(function() {
                    return g ? window.addEventListener("click", k) : window.removeEventListener("click", k),
                        function() {
                            window.removeEventListener("click", k)
                        }
                }, [g]);
                var N, I, B = (N = s.sT.map(function(e) {
                    return e === s.h8.SOURCE ? e : e === s.h8.ACCESSTYPE ? y(y({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == h ? void 0 : h.includes(e.value)
                        })
                    }) : e === s.h8.CATEGORY ? y(y({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == v ? void 0 : v.includes(e.value)
                        })
                    }) : e === s.h8.DAY ? y(y({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == A ? void 0 : A.includes(e.value)
                        })
                    }) : e === s.h8.PLATFORM ? y(y({}, e), {}, {
                        options: e.options.filter(function(e) {
                            return null == x ? void 0 : x.includes(e.value)
                        })
                    }) : e === s.h8.LANGUAGE ? y(y({}, e), {}, {
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
                        b(!g)
                    }
                }, c.createElement(i.M2, {
                    icon: l.mR,
                    className: "tw-mr-1"
                }), " Filters"), c.createElement("div", {
                    className: "\n          tw-w-56 tw-border-button-border tw-bg-option-bg tw-border-2 tw-border-solid tw-mt-2 tw-rounded-sm tw-p-2 tw-pb-3 tw-z-10 tw-max-h-[650px] tw-overflow-y-auto\n          ".concat(g ? "tw-absolute" : "tw-hidden", "\n        ")
                }, c.createElement("ul", {
                    className: "tw-flex tw-flex-col tw-gap-2 tw-p-0 tw-m-0 tw-list-none tw-bg-none tw-select-none"
                }, B.map(function(e) {
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
                A: () => v
            });
            var r, a = n(57528),
                o = n(15902),
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
                g = n(15033);
            var b = "https://assets.vrchat.com/www/groups/default_banner.png",
                h = "https://assets.vrchat.com/www/groups/default_icon.png";
            const v = function(e) {
                var t = e.group,
                    n = e.isBlocked,
                    r = e.userId,
                    a = e.isSelectable,
                    l = e.selectCallback,
                    s = void 0 === l ? function() {} : l,
                    u = (0, w.Zp)(),
                    p = (0, d.Kg)(),
                    v = (0, o.A)(p, 2),
                    x = v[0],
                    N = v[1],
                    P = (N.isError, N.isSuccess, function(e) {
                        e.preventDefault(), a ? s(t) : u("/home/group/".concat(null != R ? R : G))
                    }),
                    R = t.groupId,
                    G = t.id,
                    U = t.name,
                    L = t.shortCode,
                    _ = t.discriminator,
                    V = t.description,
                    F = t.memberCount,
                    W = t.iconId,
                    H = t.bannerId,
                    X = a ? S : M,
                    Y = a ? D : z,
                    Z = a ? T : q;
                return f.createElement(X, {
                    to: "/home/group/".concat(null != R ? R : G),
                    "aria-label": "Group Card",
                    className: "tw-border-solid tw-border-grey tw-border hover:tw-border-light-grey tw-transition-colors"
                }, f.createElement(C, null, f.createElement(I, null, f.createElement(j, {
                    src: H ? (0, m.Iu)({
                        fileId: H,
                        width: "256"
                    }) : b,
                    alt: U,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = b
                    }
                }), f.createElement(B, null, f.createElement(O, {
                    src: W ? (0, m.Iu)({
                        fileId: W,
                        width: "256"
                    }) : h,
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = h
                    }
                }))), f.createElement(g.fI, {
                    className: "d-flex flex-row justify-content-between align-items-center"
                }, f.createElement(Y, {
                    role: "navigation",
                    "aria-label": "Open World Page",
                    onClick: P
                }, f.createElement(Z, null, U)))), f.createElement(k, null, f.createElement(y, null, f.createElement(E, {
                    className: "w-100 d-flex flex-column text-center justify-content-center align-content-center"
                }, f.createElement("small", null, V)), f.createElement(A, null, f.createElement("small", null, f.createElement(g.M2, {
                    icon: c.gd
                }), " ", F), f.createElement("small", null, L, ".", _)))), a && f.createElement(g.$n, {
                    onClick: P
                }, "Select"), n && f.createElement(g.$n, {
                    danger: !0,
                    onClick: function(e) {
                        e.preventDefault(), x({
                            groupId: R,
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
                A = (0, l.A)("div", {
                    target: "e1nq4ok413"
                })({
                    name: "13r4cb0",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0 20px"
                }),
                y = (0, l.A)("div", {
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
                B = (0, l.A)("div", {
                    target: "e1nq4ok48"
                })({
                    name: "1tujnes",
                    styles: "position:absolute;bottom:-32px;margin-left:13px"
                }),
                j = (0, l.A)("img", {
                    target: "e1nq4ok47"
                })({
                    name: "5usyjw",
                    styles: "width:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px;aspect-ratio:3/1;object-fit:cover"
                }),
                O = (0, l.A)("img", {
                    target: "e1nq4ok46"
                })({
                    name: "k2qbwb",
                    styles: "width:75px;height:75px;border-radius:100%;border:3px solid #181b1f;background-color:#181b1f"
                }),
                S = (0, l.A)("div", {
                    target: "e1nq4ok45"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                M = (0, l.A)(p.N_, {
                    target: "e1nq4ok44"
                })("display:flex;margin-bottom:0.8rem;text-decoration:none!important;flex-direction:column;border-radius:8px;overflow:hidden;min-width:0;&.pulse{", C, "{", N, ";}", k, "{", N, ";}}"),
                T = (0, l.A)("h4", {
                    target: "e1nq4ok43"
                })({
                    name: "15baaq2",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;padding-bottom:2px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                }),
                q = (0, l.A)(T, {
                    target: "e1nq4ok42"
                })({
                    name: "l8p4qc",
                    styles: "&:hover{color:var(--primary);}"
                }),
                D = (0, l.A)("div", {
                    target: "e1nq4ok41"
                })({
                    name: "11z3e6t",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0"
                }),
                z = (0, l.A)("button", {
                    target: "e1nq4ok40"
                })({
                    name: "c694od",
                    styles: "background:none;border:none;padding:0;margin:0 0 10px 100px;color:#0e9bb1;outline:none!important;min-width:0;&:hover{color:#095d6a;text-decoration:underline;}"
                })
        },
        16578(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => zr
            });
            var r = n(15902),
                a = n(38495),
                o = n(96540),
                l = n(6376),
                i = n(47767),
                c = n(35169),
                s = n(56822),
                u = n(13099),
                d = n(74353),
                m = n.n(d),
                f = n(26664),
                p = n(83159),
                w = n(61096),
                g = n(38275),
                b = n(75976),
                h = n(79162),
                v = n(7612),
                E = n(49107),
                A = n(19931),
                y = n(90482),
                x = n(74292),
                C = n(86558),
                k = n(15033),
                N = n(97963),
                I = n(48169),
                B = n(87081),
                j = n(32124),
                O = n(75499),
                S = n(194),
                M = n(5556),
                T = n.n(M),
                q = n(22351),
                D = n(23253),
                z = n(84976),
                P = n(71957);
            const R = function(e) {
                var t, n, r, a, l, i, c = e.attribution,
                    s = null == c || null === (t = c.creator) || void 0 === t ? void 0 : t.userId,
                    u = null == c || null === (n = c.publisher) || void 0 === n ? void 0 : n.userId,
                    d = (0, P.vf)(s, {
                        skip: !s
                    }).data,
                    m = (0, P.vf)(u, {
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
                }, s ? o.createElement(z.N_, {
                    to: "/home/user/".concat(s),
                    target: "_blank",
                    rel: "noreferrer"
                }, w) : w)), p && g && o.createElement("div", {
                    className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                }, o.createElement("h4", {
                    className: "tw-text-base tw-font-normal"
                }, "Published By"), o.createElement("div", {
                    className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                }, u ? o.createElement(z.N_, {
                    to: "/home/user/".concat(u),
                    target: "_blank",
                    rel: "noreferrer"
                }, g) : g)))
            };
            var G = n(28262),
                U = function(e) {
                    var t, n, a = e.gallery,
                        l = void 0 === a ? [] : a,
                        i = e.isOpen,
                        c = void 0 !== i && i,
                        s = e.onCloseCallback,
                        u = e.openIndex,
                        d = e.deleteItemCallback,
                        f = void 0 === d ? null : d,
                        M = e.onArchiveCallback,
                        T = void 0 === M ? null : M,
                        z = e.type,
                        P = (0, S.a$)().user,
                        U = (0, o.useRef)(null),
                        L = (0, o.useState)(u),
                        _ = (0, r.A)(L, 2),
                        V = _[0],
                        F = _[1],
                        W = (0, o.useState)({
                            x: 0,
                            y: 0
                        }),
                        H = (0, r.A)(W, 2),
                        X = H[0],
                        Y = H[1],
                        Z = (0, o.useState)(!1),
                        Q = (0, r.A)(Z, 2),
                        J = Q[0],
                        $ = Q[1],
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
                            return null === (e = l[V]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes(q.R9.VRC_PLUS_EXCUSIVE)
                        }, [l, V]),
                        ge = (0, o.useMemo)(function() {
                            return we && !(null != P && P.hasVRCPlus)
                        }, [we, P]),
                        be = (0, o.useMemo)(function() {
                            return V === l.length - 1
                        }, [V, l]),
                        he = (0, o.useMemo)(function() {
                            return 0 === V
                        }, [V]),
                        ve = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[V]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("quantifiable")
                        }, [l, V]),
                        Ee = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[V]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("premium")
                        }, [l, V]),
                        Ae = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[V]) || void 0 === e || null === (e = e.metadata) || void 0 === e ? void 0 : e.animated
                        }, [l, V]),
                        ye = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = q.jQ[z]) || void 0 === e ? void 0 : e.label
                        }, [z]),
                        xe = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = q.jQ[z]) || void 0 === e ? void 0 : e.icon
                        }, [z]),
                        Ce = (0, o.useMemo)(function() {
                            return l[V]
                        }, [l, V]);
                    (0, o.useEffect)(function() {
                        0 !== l.length || s()
                    }, [l]), (0, o.useEffect)(function() {
                        F(u)
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
                            return null !== (e = null === (t = l[V]) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== e ? e : null === (n = l[V]) || void 0 === n ? void 0 : n.imageUrl
                        }, [l, V]),
                        Ie = (0, o.useCallback)(function(e) {
                            e.preventDefault();
                            var t = -.01 * e.deltaY;
                            le(function(e) {
                                return Math.min(Math.max(e + t, .5), 3)
                            })
                        }, []),
                        Be = q.jQ[z],
                        je = (0, o.useMemo)(function() {
                            var e;
                            return null === (e = l[V]) || void 0 === e || null === (e = e.flags) || void 0 === e ? void 0 : e.includes("archivable")
                        }, [l, V]);
                    (0, o.useEffect)(function() {
                        F(u), pe(!0)
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
                    var Oe = (0, o.useCallback)(function(e) {
                            e.preventDefault(), $(!0), ne({
                                x: e.clientX - X.x,
                                y: e.clientY - X.y
                            })
                        }, [X]),
                        Se = (0, o.useCallback)(function(e) {
                            e.preventDefault(), J && Y({
                                x: e.clientX - te.x,
                                y: e.clientY - te.y
                            })
                        }, [J, te]),
                        Me = (0, o.useCallback)(function() {
                            $(!1)
                        }, []),
                        Te = function() {
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
                    }, o.createElement(I.A, null), o.createElement("p", {
                        className: "tw-mb-0 tw-whitespace-nowrap"
                    }, "VRC+ Exclusive"))), o.createElement("div", {
                        className: "tw-absolute tw-top-9 tw-right-6 tw-h-9 tw-w-32 tw-z-50"
                    }, o.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-32"
                    }, o.createElement(N.Ay, {
                        onClick: function() {
                            le(function(e) {
                                return Math.min(e + .1, 3)
                            })
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, o.createElement(k.M2, {
                        icon: C.bM
                    })), o.createElement(N.Ay, {
                        onClick: function() {
                            le(function(e) {
                                return Math.max(e - .1, .5)
                            })
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9"
                    }, o.createElement(k.M2, {
                        icon: x.rV
                    })), o.createElement(N.Ay, {
                        onClick: function() {
                            return ue(!se)
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white tw-w-9 tw-h-9",
                        title: "Toggle fullscreen"
                    }, o.createElement(k.M2, {
                        icon: se ? y.DO : A.sk
                    })))), o.createElement("div", {
                        className: "tw-flex tw-w-full tw-h-full tw-justify-between tw-items-center"
                    }, o.createElement(N.Ay, {
                        onClick: function() {
                            he || (F(function(e) {
                                return e - 1
                            }), Te(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(he ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, o.createElement(k.M2, {
                        icon: E.Wz,
                        className: "tw-w-12 tw-h-[60px] tw-ml-4"
                    })), o.createElement("div", {
                        ref: U,
                        className: "tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden gallery-image-container",
                        onMouseDown: Oe,
                        onMouseMove: Se,
                        onMouseUp: Me,
                        onMouseLeave: Me
                    }, fe && o.createElement("div", {
                        className: "tw-flex tw-items-center tw-justify-center tw-absolute tw-inset-0"
                    }, o.createElement(k.M2, {
                        icon: v.z1,
                        spin: !0,
                        color: "#404C58",
                        width: 92
                    })), o.createElement("div", {
                        style: {
                            transform: "translate(".concat(X.x, "px, ").concat(X.y, "px) scale(").concat(oe, ")"),
                            transition: J ? "none" : "transform 0.1s ease-out",
                            cursor: J ? "grabbing" : "grab",
                            opacity: fe ? 0 : 1
                        }
                    }, o.createElement(G.A, {
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
                    }, ve && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#2E333D] tw-rounded-2xl tw-border-solid tw-border-[#2E333D] tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(k.M2, {
                        icon: b.faXmark,
                        width: 18,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, null !== (t = null == Ce ? void 0 : Ce.quantity) && void 0 !== t ? t : 0)), Ee && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(k.M2, {
                        icon: O.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Premium")), Ae && o.createElement("div", {
                        className: " tw-flex tw-items-center tw-justify-center tw-w-fit tw-bg-[#6AE3F940] tw-rounded-2xl tw-border-solid tw-border-highlight tw-border-3 tw-p-3 sm:tw-p-6 "
                    }, o.createElement(k.M2, {
                        icon: B.default,
                        color: "#6AE3F9",
                        width: 24,
                        className: "tw-mr-2"
                    }), o.createElement("span", {
                        className: "tw-text-white tw-font-bold tw-text-sm sm:tw-text-[28px]"
                    }, "Animated")))), o.createElement(N.Ay, {
                        onClick: function() {
                            be || (F(function(e) {
                                return e + 1
                            }), Te(), pe(!0))
                        },
                        className: "tw-bg-transparent tw-border-none tw-text-white ".concat(be ? "tw-cursor-not-allowed tw-opacity-10" : "tw-opacity-100")
                    }, o.createElement(k.M2, {
                        icon: h.Xk,
                        className: "tw-w-12 tw-h-[60px] tw-mr-4"
                    })))), o.createElement("div", {
                        className: "\n            tw-bg-darker-grey tw-transition-all\n            tw-absolute tw-bottom-0 tw-h-auto\n            lg:tw-relative\n            ".concat(se ? "tw-w-0 tw-p-0 tw-opacity-0" : "tw-w-screen tw-px-5 tw-py-9 lg:tw-w-1/4 lg:tw-min-w-[300px]", "\n          ")
                    }, o.createElement("div", {
                        className: "tw-flex tw-items-baseline tw-justify-between"
                    }, o.createElement("h3", {
                        className: "heading tw-text-white tw-text-left tw-text-2xl"
                    }, o.createElement(k.M2, {
                        icon: xe,
                        className: "tw-mr-2"
                    }), ye), o.createElement(N.Ay, {
                        className: "tw-w-9 tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        onClick: ke
                    }, o.createElement(k.M2, {
                        icon: b.faXmark
                    }))), o.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-items-baseline sm:tw-justify-between tw-mt-2 sm:tw-mt-10 tw-justify-end tw-items-end"
                    }, o.createElement("div", {
                        className: "tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal tw-hidden sm:tw-block"
                    }, "Manage"), o.createElement("div", {
                        className: "tw-flex tw-flex-row tw-w-full"
                    }, D.C && Be.hasConvertToVrcEmojis && o.createElement(N.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full  tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey tw-mr-2 "
                    }, o.createElement(k.M2, {
                        icon: j.default
                    }), "Create Emoji From Sticker"), Be.hasDelete && o.createElement(N.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-w-full tw-h-12 sm:tw-h-9 tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Delete ".concat(ye),
                        onClick: function() {
                            null == f || f(Ce)
                        }
                    }, o.createElement(k.M2, {
                        icon: g.yL,
                        className: "tw-mr-2"
                    }), "Delete"), Be.hasArchive && je && o.createElement(N.Ay, {
                        containerClasses: "tw-w-full sm:tw-w-fit",
                        className: "tw-h-12 sm:tw-h-9 tw-w-full tw-text-white tw-bg-button-bg-grey tw-border-button-bg-grey",
                        title: "Archive Sticker",
                        onClick: function() {
                            return null == T ? void 0 : T(Ce)
                        }
                    }, o.createElement(k.M2, {
                        icon: w.TH,
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
                    }, o.createElement(I.A, null), o.createElement("p", {
                        className: "tw-font-bold tw-mb-0 tw-mx-2 tw-text-lg"
                    }, "Unlock With VRC+")), (null == Ce || null === (n = Ce.collections) || void 0 === n ? void 0 : n.length) > 0 && o.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Collections"), o.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, Ce.collections.map(function(e) {
                        return e
                    }).join(", "))), o.createElement(R, {
                        attribution: null == Ce ? void 0 : Ce.attribution
                    }), (null == Ce ? void 0 : Ce.created_at) && o.createElement("div", {
                        className: "tw-mt-9 tw-hidden sm:tw-flex sm:tw-flex-col sm:tw-w-full"
                    }, o.createElement("h4", {
                        className: "tw-text-base tw-font-normal "
                    }, "Date Created"), o.createElement("div", {
                        className: "tw-mt-1 tw-pt-2 tw-w-full tw-border-0 tw-border-solid tw-border-t-[1px] tw-border-t-hr-grey"
                    }, o.createElement(k.M2, {
                        icon: p.ok,
                        className: "tw-mr-2"
                    }), m()(null == Ce ? void 0 : Ce.created_at).format("ll, h:mm A"))))))) : null
                };
            const L = U;
            U.propTypes = {
                gallery: T().array.isRequired,
                isOpen: T().bool.isRequired,
                onCloseCallback: T().func.isRequired,
                openIndex: T().number.isRequired,
                deleteItemCallback: T().func,
                onArchiveCallback: T().func,
                type: T().string
            };
            const _ = function() {
                var e = (0, l.wA)(),
                    t = (0, l.d4)(f.Ug),
                    n = t.isOpen,
                    r = t.gallery,
                    a = t.openIndex,
                    i = t.deleteItemCallback,
                    c = t.onArchiveCallback,
                    s = t.type;
                if ((0, o.useEffect)(function() {
                        return function() {
                            return e((0, f.kq)())
                        }
                    }, [e]), null == r || !r.length) return null;
                var u = Math.min(Math.max(0, a), r.length - 1);
                return o.createElement(L, {
                    gallery: r,
                    isOpen: n,
                    onCloseCallback: function() {
                        e((0, f.xH)()), e((0, f.kq)())
                    },
                    openIndex: u,
                    deleteItemCallback: i,
                    onArchiveCallback: c,
                    type: s
                })
            };
            var V = n(21099),
                F = n.n(V),
                W = n(32662),
                H = n(13951),
                X = n(30104);
            const Y = function() {
                var e = (0, H.p$)().data,
                    t = (0, o.useState)(!1),
                    n = (0, r.A)(t, 2),
                    a = n[0],
                    l = n[1],
                    i = (0, W.Mj)("tutorialInventorySeen", !1),
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
                    src: F(),
                    alt: "Gallery has now been relocated to Inventory"
                }), o.createElement("div", {
                    className: "tw-flex tw-justify-end tw-mt-4"
                }, o.createElement(X.A, {
                    className: "tw-bg-button-bg-grey tw-text-white tw-px-8 tw-w-full sm:tw-w-auto",
                    onClick: function() {
                        l(!1), u(!0)
                    }
                }, "Got it"))))) : null
            };
            var Z = n(15184),
                Q = n(64467),
                J = n(64350),
                $ = n(28045),
                K = n(97950),
                ee = n(17632),
                te = n(91360),
                ne = n(65950),
                re = n(71853),
                ae = n(12860),
                oe = n(19188),
                le = n(53818),
                ie = n(91069),
                ce = n(73747);

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach(function(t) {
                        (0, Q.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var de = function(e) {
                var t = e.filters,
                    n = void 0 === t ? null : t,
                    r = e.userGroups,
                    a = e.filterRemoveCallback,
                    l = void 0 === a ? function() {} : a;
                if (null === n || 0 === n.length) return null;
                var i = function(e) {
                    var t = ce.sT.flatMap(function(t) {
                            var n = t.dataKey,
                                r = e[n] || [];
                            return t.options.filter(function(e) {
                                return r.includes(e.value)
                            }).map(function(e) {
                                return ue(ue({}, e), {}, {
                                    dataKey: n
                                })
                            })
                        }),
                        a = (0, ce.rw)({
                            filters: n,
                            userGroups: r
                        });
                    if (null === a) return t;
                    var o = a.options.map(function(e) {
                        var t = e.value,
                            n = r.find(function(e) {
                                return e.groupId === t
                            });
                        return ue(ue({}, e), {}, {
                            thumbnail: (0, ie.Iu)({
                                fileUrl: null == n ? void 0 : n.iconUrl,
                                width: "256"
                            }),
                            dataKey: "groups"
                        })
                    });
                    return [].concat((0, Z.A)(t), (0, Z.A)(o))
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
                    }, (null == e ? void 0 : e.icon) && o.createElement(k.M2, {
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
                    }, o.createElement(k.M2, {
                        icon: b.faXmark
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
            de.propTypes = {
                filters: T().object,
                group: T().array
            };
            const me = de;
            var fe = n(63576),
                pe = n(73377),
                we = n(36535),
                ge = n(10467),
                be = n(54756),
                he = n.n(be),
                ve = n(25538),
                Ee = n(40085),
                Ae = n(54734);

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

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach(function(t) {
                        (0, Q.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ce = function(e) {
                var t = e.groupSelectCallback,
                    n = void 0 === t ? function() {} : t,
                    a = (0, o.useState)(""),
                    l = (0, r.A)(a, 2),
                    i = l[0],
                    c = l[1],
                    s = (0, S.d7)(i),
                    u = (0, S.a$)().user,
                    d = void 0 === u ? null : u,
                    m = (0, Ee.Rh)(),
                    f = (0, r.A)(m, 1)[0],
                    p = (0, Ee.Yj)({
                        userId: null == d ? void 0 : d.id
                    }, {
                        skip: null === d
                    }),
                    w = p.data,
                    g = void 0 === w ? null : w,
                    b = p.isFetching,
                    h = p.isSuccess,
                    v = (0, Ee.GS)({
                        userId: null == d ? void 0 : d.id
                    }),
                    E = v.data,
                    A = void 0 === E ? null : E,
                    y = v.isFetching,
                    x = v.isSuccess,
                    C = (0, o.useMemo)(function() {
                        return null === A || null === g ? [] : x && h ? g.filter(function(e) {
                            var t = e.groupId,
                                n = A[t];
                            return n && (n.includes("*") || n.includes("group-calendar-manage"))
                        }) : []
                    }, [A, g]),
                    N = (0, o.useMemo)(function() {
                        return null === C ? [] : "" === i ? C : null == C ? void 0 : C.filter(function(e) {
                            return e.name.toLowerCase().includes(i) || e.shortCode.toLowerCase().includes(i) || e.discriminator.toLowerCase().includes(i) || e.groupId.toLowerCase().includes(i)
                        })
                    }, [C, s]);
                return o.createElement(o.Fragment, null, o.createElement("div", {
                    className: "tw-flex tw-justify-center tw-flex-col tw-w-full"
                }, o.createElement("h2", {
                    className: "tw-text-xl tw-text-center tw-w-full"
                }, "For which group would you like to create this event?"), o.createElement("p", {
                    className: "tw-text-sm tw-text-center tw-w-full"
                }, "You will see only the groups for which you have permission to create events."), o.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center"
                }, o.createElement(k.pd, {
                    "aria-label": "Enter a group short code, name, or url",
                    type: "text",
                    id: "search-transaction-list",
                    placeholder: "Enter a group short code, name, or url",
                    className: "",
                    leftIcon: o.createElement(k.M2, {
                        icon: J.faMagnifyingGlass,
                        className: "tw-mr-1"
                    }),
                    onChange: function(e) {
                        c(e.target.value)
                    }
                }))), (b || y) && o.createElement("div", {
                    className: "tw-pt-20 tw-flex tw-items-center tw-justify-center"
                }, o.createElement(ve.A, {
                    size: "5x"
                })), !b && !y && 0 === (null == N ? void 0 : N.length) && o.createElement("div", {
                    className: "tw-text-center tw-text-lg tw-mt-5"
                }, "No groups found for which you can create events."), o.createElement("div", {
                    className: "tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-5"
                }, null == N ? void 0 : N.map(function(e) {
                    return o.createElement(Ae.A, {
                        key: e.id,
                        group: e,
                        isSelectable: !0,
                        selectCallback: function() {
                            var e = (0, ge.A)(he().mark(function e(t) {
                                var r;
                                return he().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(xe({}, t));
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
            Ce.propTypes = {};
            const ke = Ce;
            var Ne = n(85072),
                Ie = n.n(Ne),
                Be = n(97825),
                je = n.n(Be),
                Oe = n(77659),
                Se = n.n(Oe),
                Me = n(55056),
                Te = n.n(Me),
                qe = n(10540),
                De = n.n(qe),
                ze = n(41113),
                Pe = n.n(ze),
                Re = n(70506),
                Ge = {};
            Ge.styleTagTransform = Pe(), Ge.setAttributes = Te(), Ge.insert = Se().bind(null, "head"), Ge.domAPI = je(), Ge.insertStyleElement = De();
            Ie()(Re.A, Ge);
            Re.A && Re.A.locals && Re.A.locals;

            function Ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ue(Object(n), !0).forEach(function(t) {
                        (0, Q.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var _e = {
                    eventSources: [],
                    accessTypes: [],
                    categories: [],
                    days: [],
                    platforms: [],
                    languages: [],
                    groups: []
                },
                Ve = (0, o.forwardRef)(function(e, t) {
                    var n = (0, l.wA)(),
                        a = (0, z.ok)(),
                        i = (0, r.A)(a, 1)[0],
                        c = (0, o.useState)(""),
                        s = (0, r.A)(c, 2),
                        u = s[0],
                        d = s[1],
                        f = (0, S.d7)(u),
                        p = (0, o.useRef)(null),
                        w = (0, o.useRef)(null),
                        g = (0, o.useState)(null),
                        b = (0, r.A)(g, 2),
                        h = b[0],
                        v = b[1],
                        E = (0, o.useState)(null),
                        A = (0, r.A)(E, 2),
                        y = A[0],
                        x = A[1],
                        C = (0, o.useState)(!0),
                        N = (0, r.A)(C, 2),
                        I = N[0],
                        B = N[1],
                        j = (0, o.useState)(!1),
                        O = (0, r.A)(j, 2),
                        M = O[0],
                        T = O[1],
                        q = (0, o.useState)(m()()),
                        D = (0, r.A)(q, 2),
                        P = D[0],
                        R = D[1],
                        G = (0, o.useState)(!1),
                        U = (0, r.A)(G, 2),
                        L = U[0],
                        _ = U[1],
                        V = (0, o.useState)(null),
                        F = (0, r.A)(V, 2),
                        W = F[0],
                        H = F[1],
                        X = (0, o.useState)(_e),
                        Y = (0, r.A)(X, 2),
                        ie = Y[0],
                        ce = Y[1],
                        se = (0, o.useMemo)(function() {
                            return (0, le.xt)("default-calendar-mode", {
                                value: "month"
                            })
                        }, []),
                        ue = (0, S.a$)().user,
                        de = void 0 === ue ? null : ue,
                        ge = !(null == de || !de.id),
                        be = (0, S.Om)() && !1,
                        he = i.get("view"),
                        ve = (0, o.useMemo)(function() {
                            var e;
                            switch (he) {
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
                        }, [he, se]);
                    (0, o.useEffect)(function() {
                        (0, le.u4)("Calendar_Open", {
                            userId: null == de ? void 0 : de.id
                        });
                        var e = function() {
                                return B(!0)
                            },
                            t = function(e) {
                                w.current && !w.current.contains(e.target) && B(!0)
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
                        if (null !== h) {
                            var e, t, n, r, a, o = null == w ? void 0 : w.current;
                            return o ? (e = o, t = window.innerWidth, n = h.clientX > t / 2, r = n && h.clientX - 340 < 0, a = !n && h.clientX + 340 > t, r || a ? (e.style.left = "auto", e.style.right = "auto") : n ? (e.style.left = "auto", e.style.right = "".concat(t - h.clientX + 20, "px")) : (e.style.left = "".concat((null == h ? void 0 : h.clientX) + 20, "px"), e.style.right = "auto"), void
                                function(e) {
                                    var t = window.innerHeight;
                                    t - h.clientY < 350 ? w.current.style.top = "".concat(t - 400, "px") : e.style.top = "".concat((null == h ? void 0 : h.clientY) - 100, "px")
                                }(o)) : void 0
                        }
                    }, [h]), (0, o.useEffect)(function() {}, [ie]);
                    var Ee = (0, oe.BG)({
                            date: P,
                            userId: null == de ? void 0 : de.id,
                            eventSources: ie.eventSources
                        }, {
                            skip: null === de
                        }),
                        Ae = Ee.data,
                        ye = void 0 === Ae ? {
                            events: [],
                            groups: []
                        } : Ae,
                        xe = Ee.isFetching,
                        Ce = Ee.isSuccess,
                        Ne = Ee.isError,
                        Ie = Ee.error,
                        Be = (0, oe.BG)({
                            date: P.add(1, "month"),
                            userId: null == de ? void 0 : de.id,
                            eventSources: ie.eventSources
                        }, {
                            skip: null === de || !M
                        }),
                        je = Be.data,
                        Oe = void 0 === je ? {
                            events: [],
                            groups: []
                        } : je,
                        Se = Be.isFetching,
                        Me = Be.isSuccess,
                        Te = Be.isError,
                        qe = Be.error;
                    (0, o.useEffect)(function() {
                        if (Ne || Te) {
                            var e, t, r = Ie || qe;
                            n((0, ne.X)({
                                title: "Failed to get calendar events",
                                message: null !== (e = null == r || null === (t = r.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "Unknown Error",
                                color: "danger",
                                timeout: 5e3
                            }))
                        }
                    }, [Ne, Te]);
                    var De = function(e) {
                            var t = m()(e.endsAt).diff(m()(e.startsAt), "day") > 0;
                            return Le(Le({}, e), {}, {
                                id: e.id,
                                start: e.startsAt,
                                end: t ? m()(e.endsAt).add(1, "day").format() : e.endsAt,
                                allDay: t
                            })
                        },
                        ze = function() {
                            return Le({
                                searchTerm: f
                            }, ie)
                        },
                        Pe = (0, o.useMemo)(function() {
                            var e = ye.events,
                                t = Oe.events,
                                n = M ? [].concat((0, Z.A)(e), (0, Z.A)(t)) : e;
                            return n && 0 !== n.length ? {
                                eventSources: we.SM.map(function(e) {
                                    return e.value
                                }),
                                accessTypes: n.reduce(function(e, t) {
                                    return e.includes(t.accessType) || e.push(t.accessType), e
                                }, []),
                                categories: n.reduce(function(e, t) {
                                    return e.includes(t.category) || e.push(t.category), e
                                }, []),
                                days: n.reduce(function(e, t) {
                                    var n = m()(t.startsAt),
                                        r = m()(t.endsAt).diff(n, "day"),
                                        a = Array.from({
                                            length: r + 1
                                        }, function(e, t) {
                                            return n.add(t, "day").day()
                                        });
                                    return Array.from(new Set([].concat((0, Z.A)(e), a)))
                                }, []),
                                platforms: (0, Z.A)(new Set(n.flatMap(function(e) {
                                    return e.platforms
                                }))),
                                languages: (0, Z.A)(new Set(n.flatMap(function(e) {
                                    return e.languages
                                }))),
                                groups: n.reduce(function(e, t) {
                                    return e.includes(t.ownerId) ? e : [].concat((0, Z.A)(e), [t.ownerId])
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
                        }, [ye, Oe, M]),
                        Re = (0, o.useMemo)(function() {
                            var e = ye.events,
                                t = Oe.events,
                                n = M ? [].concat((0, Z.A)(e), (0, Z.A)(t)) : e;
                            if (!n || 0 === n.length) return [];
                            var r = ze();
                            if (null === r) return n.map(De);
                            return n.filter(function(e) {
                                return !(!e || !e.id) && (!(e.deletedAt && !be) && (!("" !== r.searchTerm && !e.title.toLowerCase().includes(r.searchTerm.toLowerCase()) && !e.description.toLowerCase().includes(r.searchTerm.toLowerCase())) && (!(r.accessTypes.length > 0 && !r.accessTypes.includes(e.accessType)) && (!(r.categories.length > 0 && !r.categories.includes(e.category)) && (!(r.days.length > 0 && (t = {
                                    title: e.title,
                                    daysOfWeek: r.days,
                                    start: e.startsAt,
                                    end: e.endsAt
                                }, n = t.daysOfWeek, a = t.start, o = t.end, t.title, l = m()(a), i = m()(o), !n.some(function(e) {
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
                            }).map(De)
                        }, [f, ye, Oe, M, ie]);
                    (0, o.useImperativeHandle)(t, function() {
                        return {
                            updateCalendarSize: function() {
                                if (null !== p) {
                                    var e = p.current.getApi();
                                    B(!0), e.updateSize()
                                }
                            }
                        }
                    }, []);
                    var Ge = function(e) {
                            var t;
                            B(!0);
                            var n = p.current.getApi(),
                                r = null !== (t = e.date) && void 0 !== t ? t : e;
                            e.date && r.setMinutes(r.getMinutes() + r.getTimezoneOffset()), n.changeView("timeGridDay", r)
                        },
                        Ue = xe || M && Se,
                        Ve = function(e) {
                            return {
                                eventId: e.id,
                                ownerId: e.ownerId,
                                userId: null == de ? void 0 : de.id,
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
                        Fe = (0, o.useMemo)(function() {
                            return M ? [].concat((0, Z.A)(ye.groups), (0, Z.A)(Oe.groups)) : ye.groups
                        }, [ye, Oe, M]);
                    return o.createElement("div", {
                        className: "tw-flex tw-flex-col"
                    }, o.createElement(k.Qc, null, "Calendar"), o.createElement("div", {
                        className: "tw-mb-4 tw-flex tw-justify-between tw-flex-row"
                    }, o.createElement("h2", null, "Calendar")), Ue && o.createElement("div", {
                        className: " tw-w-full tw-h-full  tw-left-0 tw-top-0 tw-absolute  tw-flex tw-justify-center tw-items-center tw-bg-dark-grey-transparent tw-z-10 "
                    }, o.createElement(re.A, {
                        loading: !0
                    })), o.createElement("div", {
                        className: "tw-mb-10 tw-bg-[#181b1f] tw-rounded tw-p-5 fc tw-relative"
                    }, Ce && (!M || Me) && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "tw-flex tw-justify-between tw-flex-row tw-gap-3 tw-flex-wrap"
                    }, o.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row tw-flex-wrap tw-gap-3 tw-items-start sm:tw-items-center"
                    }, o.createElement(k.$n, {
                        className: "tw-w-52 tw-h-10",
                        type: "button",
                        onClick: function() {
                            H(null), _(!0)
                        }
                    }, o.createElement(k.M2, {
                        icon: $.QL,
                        className: "tw-mr-1"
                    }), " Create Event"), o.createElement(fe.A, {
                        possibleFilters: Pe,
                        onFilterChangeCallBack: function(e) {
                            return function(e) {
                                if (e.isChecked) {
                                    var t = (0, Z.A)(new Set([].concat((0, Z.A)(ie[e.type]), [e.value])));
                                    return ce(Le(Le({}, ie), {}, (0, Q.A)({}, e.type, t)))
                                }
                                if (!e.isChecked) {
                                    var n = ie[e.type].filter(function(t) {
                                        return t !== e.value
                                    });
                                    return ce(Le(Le({}, ie), {}, (0, Q.A)({}, e.type, n)))
                                }
                            }(e)
                        },
                        userGroups: Fe,
                        dropdownFilterValues: ie
                    })), o.createElement(k.pd, {
                        "aria-label": "Search by event name or url",
                        type: "text",
                        id: "search-transaction-list",
                        placeholder: "Search by event name or url",
                        className: "tw-md-1 sm:tw-w-1/2",
                        leftIcon: o.createElement(k.M2, {
                            icon: J.faMagnifyingGlass,
                            className: "tw-mr-1"
                        }),
                        onChange: function(e) {
                            d(e.target.value)
                        }
                    })), o.createElement("div", {
                        className: "tw-min-h-[70px] tw-transition-all"
                    }, o.createElement(me, {
                        userGroups: Fe,
                        filters: ze(),
                        filterRemoveCallback: function(e) {
                            if (null === e) return ce(_e);
                            var t = ie[e.dataKey].filter(function(t) {
                                return t !== e.value
                            });
                            ce(Le(Le({}, ie), {}, (0, Q.A)({}, e.dataKey, t)))
                        }
                    }))), o.createElement(ee.A, {
                        ref: p,
                        plugins: [K.A, te.A],
                        initialView: ve,
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
                        navLinkDayClick: Ge,
                        eventClick: function(e) {
                            var t = e.event,
                                n = (e.el, e.jsEvent),
                                r = (e.view, t.toPlainObject()),
                                a = Le(Le({}, r), r.extendedProps);
                            B(!1), v(n), x(a), (0, le.u4)("Event_Previewed", Ve(a))
                        },
                        moreLinkClick: Ge,
                        datesSet: function(e) {
                            var t = e.view,
                                n = m()(t.currentStart).startOf("month").add(1, "day"),
                                r = m()(t.currentEnd).add(-1, "minute"),
                                a = n.month() !== r.month();
                            T(a), R(n), B(!0)
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
                    }, y && o.createElement(ae.Ay, {
                        isDialog: !0,
                        event: y,
                        onCloseCallback: function() {
                            return B(!0)
                        }
                    }))), o.createElement(k.aF, {
                        title: "Create Event (".concat(null === W ? "1" : "2", "/2)"),
                        isVisible: L,
                        onClose: function() {
                            return _(!1)
                        },
                        className: "tw-w-full",
                        slim: !0,
                        width: "100%"
                    }, o.createElement("div", {
                        className: "tw-block tw-w-full"
                    }, null === W ? o.createElement(ke, {
                        groupSelectCallback: H
                    }) : o.createElement(pe.default, {
                        group: W,
                        closeModalCallback: function() {
                            return _(!1)
                        }
                    }))))
                });
            const Fe = Ve;
            var We = n(88838),
                He = n(70129),
                Xe = n(76229),
                Ye = n(39704),
                Ze = n(5361),
                Qe = n(74303),
                Je = (n(59040), n(489));
            const $e = function(e) {
                var t, n, a, l = e.navToggleCallback,
                    c = void 0 === l ? function() {} : l,
                    u = (0, S.a$)(),
                    d = u.user,
                    m = u.isFetching,
                    f = u.isLoading,
                    p = ((0, i.Zp)(), (0, H.w_)().data, o.useState(!1)),
                    w = (0, r.A)(p, 2),
                    g = (w[0], w[1], (0, Ze.Gm)({
                        userId: d.id
                    }, {
                        skip: !d,
                        refetchOnMountOrArgChange: !0
                    })),
                    b = g.data,
                    h = (void 0 === b ? {} : b).balance,
                    v = g.isFetching;
                if (!d || f) return null;
                var E = function() {
                        c(!1)
                    },
                    A = "online" === d.state,
                    y = (null === (t = d.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? d.profilePicOverride : d.currentAvatarThumbnailImageUrl,
                    x = (0, ie.Iu)({
                        fileUrl: y,
                        width: "1024"
                    }),
                    C = d.userIcon ? (0, ie.Iu)({
                        fileUrl: d.userIcon,
                        width: "1024"
                    }) : null;
                return o.createElement(Ke, {
                    className: "mx-0 mb-2"
                }, o.createElement(it, {
                    className: "d-flex mx-0 align-items-center"
                }, o.createElement(ct, {
                    title: (0, Qe.CD)(d.status, !0),
                    statusColor: "var(--status-".concat((0, Qe.CD)(d.status), ")")
                }), o.createElement(z.N_, {
                    to: "/home/user/".concat(d.id),
                    onClick: E
                }, d.displayName)), o.createElement(st, null, m ? o.createElement(k.fy, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : o.createElement(z.N_, {
                    to: "/home/user/".concat(d.id),
                    "aria-label": "User Status",
                    onClick: E
                }, d.statusDescription)), o.createElement(et, null, o.createElement(nt, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(d.id),
                    url: x,
                    level: (0, Qe.Q_)({
                        tags: d.tags
                    }),
                    onClick: E
                }, C && o.createElement(at, {
                    type: "button",
                    "aria-label": "Go To Gallery"
                }, o.createElement(ot, {
                    "aria-label": "User Icon",
                    url: C,
                    level: (0, Qe.Q_)({
                        tags: d.tags
                    })
                })), o.createElement(rt, null)), !(null === (n = d.badges) || void 0 === n || !n.length) && o.createElement(ft, null, d.badges.filter(function(e) {
                    return e.showcased && !e.hidden
                }).slice(0, 3).sort(function(e, t) {
                    return new Date(t.assignedAt) - new Date(e.assignedAt)
                }).map(function(e) {
                    return o.createElement(tt, {
                        role: "note",
                        "aria-label": e.badgeName,
                        key: e.badgeId,
                        image: e.badgeImageUrl,
                        pettable: "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId
                    })
                })), o.createElement(lt, {
                    className: "px-2 pt-1 pb-2 mx-0"
                }, o.createElement(mt, {
                    className: "relative justify-content-end"
                }, v ? o.createElement(k.fy, {
                    width: "4rem",
                    height: "1.5rem",
                    style: {
                        borderRadius: 14
                    }
                }) : o.createElement(dt, {
                    to: "/home/marketplace/wallet",
                    onClick: E
                }, o.createElement(k.eD, null), null !== (a = " ".concat(null == h ? void 0 : h.toLocaleString())) && void 0 !== a ? a : " ???")), !1, o.createElement(wt, null, o.createElement(z.N_, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: E
                }, o.createElement(k.M2, {
                    icon: Xe.Ub
                }), "  Account Settings")))), o.createElement(et, {
                    className: (0, s.AH)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, A && (null == d ? void 0 : d.location) && !["traveling", "offline"].includes(null == d ? void 0 : d.location) && o.createElement(ut, {
                    className: "mx-0"
                }, o.createElement(Je.A, {
                    location: d.location,
                    userId: d.id,
                    currentUser: d,
                    size: "normal"
                }))))
            };
            var Ke = (0, He.A)("div", {
                    target: "esgak1l16"
                })(""),
                et = (0, He.A)("div", {
                    target: "esgak1l15"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                tt = (0, He.A)("div", {
                    target: "esgak1l14"
                })("width:36px;height:36px;margin:0!important;padding:6px;border-radius:50%;z-index:3;background-color:rgba(17, 17, 17, 0.8);background-image:url(", function(e) {
                    return e.image
                }, ");background-size:24px;background-repeat:no-repeat;background-position:center;", function(e) {
                    return e.pettable && "\n    cursor: grab;\n\n    &:active {\n      cursor: grabbing;\n    }\n  "
                }, ";"),
                nt = (0, He.A)(z.N_, {
                    target: "esgak1l13"
                })("display:flex;height:0;padding-top:56.25%;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", function(e) {
                    return e.url
                }, ");position:relative;cursor:pointer;background-color:#05191d;"),
                rt = (0, He.A)("div", {
                    target: "esgak1l12"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                at = (0, He.A)("button", {
                    target: "esgak1l11"
                })({
                    name: "1tt4l1h",
                    styles: "border:none;background:none;padding:0;display:flex;position:absolute;bottom:-40px;left:10px;width:80px;align-items:center;z-index:3;color:white;&:hover{div:last-child{opacity:1;}svg{opacity:1;}}"
                }),
                ot = (0, He.A)("div", {
                    target: "esgak1l10"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", function(e) {
                    return e.url
                }, ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                lt = (0, He.A)(Ye.A, {
                    target: "esgak1l9"
                })({
                    name: "1dt3z6y",
                    styles: "background-color:#07242b"
                }),
                it = (0, He.A)("div", {
                    target: "esgak1l8"
                })({
                    name: "ab3jnw",
                    styles: "font-weight:600;justify-content:center;a{color:var(--bs-primary);font-size:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:240px;}"
                }),
                ct = (0, He.A)("div", {
                    target: "esgak1l7"
                })("width:15px;height:15px;border-radius:100%;background-color:", function(e) {
                    return e.statusColor
                }, ";margin-right:10px;"),
                st = (0, He.A)("div", {
                    target: "esgak1l6"
                })({
                    name: "1xmid75",
                    styles: "width:100%;text-align:center;display:flex;align-items:center;justify-content:center;padding:2px 20px;font-weight:bold;overflow:hidden;text-overflow:ellipsis"
                }),
                ut = (0, He.A)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                dt = (0, He.A)(z.N_, {
                    target: "esgak1l4"
                })("color:white;background-color:rgba(17, 17, 17, 0.8);padding:4px 6px;line-height:1em;border-radius:14px;>", k.eD, "{color:#6ae3f9;}&:hover{color:#737372;text-decoration:none;>", k.eD, "{color:#064b5c;}}"),
                mt = (0, He.A)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                ft = (0, He.A)(mt, {
                    target: "esgak1l2"
                })({
                    name: "1nld4z4",
                    styles: "width:100%;height:45px;margin-top:-45px;display:flex;justify-content:flex-end;position:relative;padding:4px;gap:4px"
                }),
                pt = (0, He.A)(mt, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                wt = (0, He.A)(pt, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                gt = n(51029),
                bt = n(82862),
                ht = n(93847),
                vt = n(77276),
                Et = n(34629),
                At = n(3385),
                yt = n(68415),
                xt = n(19616),
                Ct = n(80961),
                kt = n(55345),
                Nt = n(2378),
                It = n(69482),
                Bt = n(65371),
                jt = n(37922),
                Ot = n(26743),
                St = n(84449),
                Mt = n(14119),
                Tt = n(64094),
                qt = n(87909),
                Dt = n(68162),
                zt = n(59692),
                Pt = n(84994),
                Rt = n(74817),
                Gt = n(7830),
                Ut = n(75865),
                Lt = n(62025),
                _t = n(3086),
                Vt = n(53909),
                Ft = n(91350),
                Wt = n(54321),
                Ht = n(34638),
                Xt = n(32726),
                Yt = n(39848),
                Zt = n(75909),
                Qt = n(89934),
                Jt = n(86797),
                $t = n(92093),
                Kt = n(68808),
                en = n(49822),
                tn = n(77365),
                nn = n(16477),
                rn = n(29983),
                an = n.n(rn),
                on = n(50779),
                ln = n(79617),
                cn = n(55);
            const sn = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    r = e.closeDialog,
                    a = (e.isGroups, (0, l.d4)(function(e) {
                        return e.notifications.notifications
                    }).slice(0, n) || []);
                return o.createElement("div", {
                    className: "mt-2"
                }, a.map(function(e) {
                    return o.createElement(cn.A, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: r
                    })
                }))
            };
            n(86663);
            var un = n(77839),
                dn = n(15002),
                mn = n(82290),
                fn = n(48210),
                pn = n(27592),
                wn = n(11378);

            function gn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function bn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? gn(Object(n), !0).forEach(function(t) {
                        (0, Q.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var hn = function(e) {
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
                    b = w[1],
                    h = (0, o.useState)([]),
                    v = (0, r.A)(h, 2),
                    E = v[0],
                    A = v[1],
                    y = (0, o.useState)("relevance"),
                    x = (0, r.A)(y, 2),
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
                    (0, le.u4)("Web_Mod_SearchFilterChange", bn(bn({}, e), {}, {
                        autoRedirect: N
                    })), t(e)
                }, [N, m, g, E, C]);
                var I = function(e) {
                    return e.target.checked ? A([].concat((0, Z.A)(E), [e.target.name])) : A(E.filter(function(t) {
                        return t !== e.target.name
                    }))
                };
                return o.createElement($t.A, {
                    isOpen: c,
                    toggle: function() {
                        return s(!c)
                    }
                }, o.createElement(Kt.A, {
                    caret: !0
                }, "Filters"), o.createElement(en.A, {
                    className: "text-white p-0 bg-dark pb-2"
                }, o.createElement(mn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), o.createElement("div", {
                    className: "mx-3 text-white"
                }, o.createElement(fn.A, {
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
                }, "Trust Rank"))), o.createElement(mn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), o.createElement("div", {
                    className: "mx-3 text-white"
                }, o.createElement(fn.A, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return b(t)
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
                }, "Descending"))), o.createElement(mn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: E.includes("displayName"),
                    onChange: I,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: E.includes("email"),
                    onChange: I,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: E.includes("username"),
                    onChange: I,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: E.includes("pastEmails"),
                    onChange: I,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), o.createElement(mn.A, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: N,
                    onChange: function() {
                        return n((0, wn.Io)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), o.createElement("div", {
                    className: "ms-3 text-white"
                }, o.createElement("div", null, o.createElement(fn.A, {
                    checked: m,
                    onChange: function() {
                        return f(!m)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), o.createElement(pn.A, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            hn.propTypes = {
                onChangeCallback: T().func.isRequired
            };
            const vn = function() {
                var e = (0, i.Zp)(),
                    t = (0, i.zy)(),
                    n = "users",
                    a = "";
                t.pathname.startsWith("/home/search/") && (n = t.pathname.substring(13).split("/")[0], a = decodeURIComponent(t.pathname.substring("/home/search/".concat(n, "/").length)));
                var c = (0, l.d4)(un.B),
                    u = (0, o.useState)("/home/search/".concat(n, "/")),
                    d = (0, r.A)(u, 2),
                    m = d[0],
                    f = d[1],
                    p = (0, z.ok)(),
                    w = (0, r.A)(p, 2),
                    g = w[0],
                    b = (w[1], (0, o.useState)(a)),
                    h = (0, r.A)(b, 2),
                    v = h[0],
                    E = h[1],
                    A = (0, S.d7)(m),
                    y = function() {
                        return encodeURIComponent(v.replace(/#/g, "tag:"))
                    },
                    x = function() {
                        return v.startsWith("usr_") ? "/home/user" : v.startsWith("avtr_") ? "/home/avatar" : v.startsWith("wrld_") ? "/home/world" : v.startsWith("grp_") ? "/home/group" : "/home/search/".concat(n)
                    };
                (0, o.useEffect)(function() {
                    x().startsWith("/home/search/") ? f("".concat(x(), "/").concat(y(), "?").concat(g)) : f("".concat(x(), "/").concat(y()))
                }, [v]), (0, o.useEffect)(function() {
                    "" !== v && e(m)
                }, [A]);
                return o.createElement("div", {
                    className: (0, s.AH)({
                        name: "1a9iom8",
                        styles: "& .search-input{padding:0;}& .input-group-custom{position:relative;flex-wrap:nowrap;align-items:stretch;}& .drop-down-menu-custom{color:black;margin:0;padding:5px;}"
                    })
                }, o.createElement("div", {
                    className: "container"
                }, o.createElement("form", {
                    onSubmit: function(t) {
                        return function(t) {
                            return t.preventDefault(), "" === v || e(m), null
                        }(t)
                    },
                    className: "navbar-form navbar-right",
                    role: "search"
                }, o.createElement("div", {
                    className: "input-group-custom"
                }, o.createElement("div", {
                    className: (0, s.AH)({
                        name: "ho1qnd",
                        styles: "display:flex;flex-direction:row"
                    })
                }, o.createElement("div", {
                    className: (0, s.AH)({
                        name: "clzu0",
                        styles: "display:flex;flex-direction:row;align-items:center;flex-grow:1"
                    })
                }, o.createElement(dn.A, {
                    initialString: v,
                    searchString: E
                }), c && !1))))))
            };
            var En = n(98152),
                An = n(75211),
                yn = n(73444),
                xn = n(5826),
                Cn = n(72505),
                kn = n.n(Cn);
            var Nn = ["public", "internal"];
            const In = function(e) {
                var t = e.direction,
                    n = o.useState([]),
                    a = (0, r.A)(n, 2),
                    c = a[0],
                    u = a[1],
                    d = o.useState(""),
                    m = (0, r.A)(d, 2),
                    f = m[0],
                    p = m[1],
                    w = (0, i.zy)(),
                    g = (0, l.d4)(function(e) {
                        return e.currentUser.isMod
                    }),
                    b = function() {
                        var e = (0, ge.A)(he().mark(function e() {
                            var t, n, r;
                            return he().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, kn().get(t);
                                    case 3:
                                        n = e.sent, r = n.data.filter(function(e) {
                                            return "main" !== e
                                        }), u(["main"].concat((0, Z.A)(r)));
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
                    b().catch(console.error)
                }, []);
                var h = function(e, t) {
                        var n = w.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map(function(e) {
                            return Nn.map(function(n, r) {
                                if ("public" !== n && !g) return null;
                                var a = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    l = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, s.AH)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                a && l.push("active");
                                var i = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? Nt.v0 : An.CN : En.Xb
                                };
                                return o.createElement("a", {
                                    href: h(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(r),
                                    className: l.join(" ")
                                }, o.createElement(k.M2, i), n, "-", e)
                            })
                        })
                    };
                return c.length <= 1 ? null : o.createElement("div", null, o.createElement(yn.A, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, s.AH)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, o.createElement(Kt.A, {
                    caret: !0,
                    color: "primary"
                }, o.createElement(k.M2, {
                    icon: En.Xb
                }), " ", "public", "-", "main"), o.createElement(en.A, {
                    className: (0, s.AH)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, v(c.slice(0, 1)), o.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), o.createElement(xn.A, {
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
                })), v(c.slice(1), function(e) {
                    return 0 === f.length || new RegExp(f, "gi").test(e)
                }))))
            };
            n.dn(In);
            var Bn = n(45616),
                jn = n(51020),
                On = n(31464),
                Sn = n(1286);
            const Mn = function(e) {
                var t = e.to,
                    n = e.title,
                    r = e.onClick,
                    a = (0, On.xH)({
                        states: [Sn.Uo.ANNOUNCED, Sn.Uo.SUBMISSIONS_OPEN, Sn.Uo.SUBMISSIONS_CLOSED, Sn.Uo.WINNERS_SELECTED]
                    }).data,
                    l = null == a ? void 0 : a.every(function(e) {
                        return !Object.keys(e).includes("state")
                    });
                if (!a || 0 === (null == a ? void 0 : a.length) || l) return null;
                var i = a[0];
                return o.createElement(Tn, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: r
                }, o.createElement(qn, {
                    icon: jn.bD
                }), o.createElement("div", null, Sn.mb[i.state]), o.createElement(k.M2, {
                    icon: bt.vm
                }))
            };
            var Tn = (0, He.A)(z.N_, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                qn = (0, He.A)(k.M2, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var Dn = [Xt.pb, Ht.Fv, Wt.KM, Ft.x3, Vt.Qp, _t.TU, Lt.Wk, Ut.wZ, Gt.Py, Rt.EJ, Pt.zm, zt.Ni, Dt.eu, qt.mG, Tt.D4, Mt.kw, St.AX, Ot.cE, jt.Rb],
                zn = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                Pn = o.memo(function(e) {
                    var t, n, c = e.horizontal,
                        u = e.navToggleCallback,
                        d = e.friendsToggleCallback,
                        m = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        f = (0, i.Zp)(),
                        w = o.useState(!1),
                        g = (0, r.A)(w, 2),
                        b = g[0],
                        h = g[1],
                        v = o.useState(Dn[Math.floor(m(Dn.length))]),
                        E = (0, r.A)(v, 2),
                        A = E[0],
                        y = E[1],
                        x = o.useState(zn[m(zn.length)]),
                        C = (0, r.A)(x, 2),
                        N = C[0],
                        I = C[1],
                        B = (0, on.G)().data,
                        j = ((0, S.Om)(), (0, H.P2)().data),
                        O = (0, l.d4)(function(e) {
                            return e.notifications.notifications
                        }) || [],
                        M = (0, H.w_)().data,
                        T = void 0 === M ? [] : M,
                        q = (0, S.Fj)().sortedLocations.length,
                        D = (0, l.d4)(function(e) {
                            return e.notifications.groupNotifications
                        }) || [],
                        P = (0, ln.Uy)({
                            n: 1,
                            pageValue: 1,
                            isNavBar: !0
                        }),
                        R = P.data,
                        G = P.isSuccess;
                    (0, o.useEffect)(function() {
                        b && (y(Dn[m(Dn.length)]), I(zn[m(zn.length)]))
                    }, [b]);
                    var U = function(e) {
                            f("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        L = function() {
                            h(!1)
                        },
                        _ = function() {
                            u && u(!1)
                        },
                        V = T || [],
                        F = (V.includes("permission-user-icons"), V.includes("permission-user-gallery"), V.includes("permission-groups-beta"), null !== (t = O.length) && void 0 !== t ? t : 0);
                    n = D.filter(function(e) {
                        return e.state === Bn.Bp.INVITED
                    }).length;
                    if (null == c || !1 === c) {
                        0;
                        return o.createElement("div", {
                            className: (0, s.AH)("margin:0;padding:0;& .navbar{padding:3px 0;background-color:#07242b!important;background-image:none;border-bottom:solid ", "#053c48", " 3px;display:flex;justify-content:space-between;height:60px;}& .navbar .btn-group{white-space:normal;}& .navbar-section{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;justify-content:space-between;}& .left-nav{min-width:285px!important;justify-content:center;>*{margin:0 10px;:first-child{margin-left:0;}:last-child{margin-right:0;}}}& .center-nav{justify-content:flex-start;flex-wrap:nowrap;flex:1;>*{margin:0 10px 0 2px;}}& .right-nav{justify-content:space-between;flex-direction:row;flex:0;padding:0 20px;gap:20px;align-items:center;.scalable-nav{display:none;}>a{color:#6ae3f9;font-weight:bold;display:flex;align-items:center;min-height:45px;padding:0 10px;}}& .custom-dropdown{padding:0!important;transform:translate(calc(-100% + 400px), 20px)!important;background:#05191d!important;border:#053c48 solid 2px!important;border-radius:10px!important;box-shadow:0px 9px 26px 5px rgba(0, 0, 0, 0.8);}& .dropdown-arrow{z-index:3;&:after,:before{pointer-events:none;content:'';position:absolute;background:transparent;left:50%;transform:translateX(-50%);}&:after{border:22px solid transparent;bottom:-30px;border-bottom-color:#05191d;}&:before{border:15px solid transparent;bottom:-20px;border-bottom-color:#053c48;}}& .navbar-btn{background:#07242b!important;min-width:45px;min-height:45px;border-radius:100px!important;border:solid #053c48 3px!important;display:flex;justify-content:center;align-items:center;font-weight:bold;white-space:nowrap;>span{display:flex;justify-content:center;align-items:center;}&:hover{background:#05191d!important;}&:focus{box-shadow:0 0 0 0.2rem #05191d!important;}&.logout{padding:0 10px!important;color:#ee5454;}}@media (max-width: 1500px){& .right-nav{padding:0 20px;}}@media (max-width: 1200px){& .left-nav{padding:0 15px 0 10px;min-width:210px!important;justify-content:space-between;}& .custom-dropdown{transform:translate(calc(-100% + 350px), 20px)!important;}& .large{display:none;}& .search{width:100%;}}@media (max-width: 576px){& .left-nav{min-width:auto!important;padding:0 10px;}& .mobile-only{display:block;}& .medium{display:none;}}& .dropdown-menu{padding:10px 15px 5px 15px;background-color:#506070;border-radius:0;}& .search{flex-grow:3;}& .launch{text-transform:uppercase;font-weight:bold;}", ""),
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
                        }, o.createElement(k.M2, {
                            icon: Bt.ck,
                            size: "lg"
                        })), o.createElement(z.N_, {
                            to: "/home",
                            title: "home",
                            className: "logo medium"
                        }, o.createElement("div", {
                            className: (0, s.AH)({
                                name: "1leqlh9",
                                styles: "height:50px"
                            })
                        }, o.createElement("img", {
                            className: (0, s.AH)({
                                name: "1hs0n36",
                                styles: "height:90%;margin-top:0.25rem"
                            }),
                            alt: "VRChat Logo",
                            src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                        }))), o.createElement("div", {
                            className: "medium ".concat((0, s.AH)({
                                name: "1vcob1d",
                                styles: "display:flex;justify-content:center;align-items:center"
                            }))
                        }, o.createElement($t.A, {
                            isOpen: b,
                            toggle: function() {
                                return h(!b)
                            }
                        }, o.createElement(Kt.A, {
                            className: "p-1 navbar-btn text-white"
                        }, F > 0 && o.createElement("div", {
                            className: (0, s.AH)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, F >= 99 ? "99+" : F), o.createElement(k.M2, {
                            icon: kt.y_,
                            size: "lg",
                            className: (0, s.AH)({
                                name: "bqqvn3",
                                styles: "::before{font-size:25px;}"
                            })
                        }), b && o.createElement("div", {
                            className: "dropdown-arrow"
                        })), o.createElement("div", {
                            className: (0, s.AH)({
                                name: "2ey0we",
                                styles: "transform:translateX(0)"
                            })
                        }, o.createElement(en.A, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, s.AH)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, o.createElement("div", {
                            className: (0, s.AH)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, o.createElement(z.N_, {
                            onClick: function(e) {
                                L(), f("/home/messages"), e.preventDefault()
                            },
                            className: (0, s.AH)({
                                name: "oldbq4",
                                styles: "user-select:none"
                            }),
                            to: "/home/messages"
                        }, o.createElement("strong", null, "View more..."))), o.createElement("div", {
                            className: (0, s.AH)({
                                name: "2nen93",
                                styles: "max-height:500px;overflow-y:auto;padding:0 15px;background:#041215"
                            })
                        }, F > 0 ? o.createElement(sn, {
                            n: 20,
                            closeDialog: L,
                            isGroups: !1
                        }) : o.createElement("div", {
                            className: (0, s.AH)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, o.createElement(k.M2, {
                            icon: A,
                            size: "3x",
                            className: (0, s.AH)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), o.createElement("h6", null, N))), o.createElement("div", {
                            className: (0, s.AH)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), o.createElement(z.N_, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/calendar",
                            title: "Calendar"
                        }, o.createElement(k.M2, {
                            icon: p.ok,
                            size: "lg"
                        })), o.createElement(z.N_, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, o.createElement(k.M2, {
                            icon: Xe.Ub,
                            size: "lg"
                        }))), o.createElement("div", {
                            className: "navbar-section center-nav"
                        }, o.createElement("div", {
                            className: "search"
                        }, o.createElement(vn, null)), o.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                d && (u && u(!1), d())
                            }
                        }, o.createElement(k.M2, {
                            icon: a.faUserGroup,
                            className: "tw-text-white"
                        }))), o.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, o.createElement(In, null), o.createElement("a", {
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
                        }, "VRC+"), o.createElement(X.A, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, s.AH)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: U
                        }, o.createElement(k.M2, {
                            icon: gt.uQ
                        }), "  Logout"))))
                    }
                    return o.createElement("nav", null, o.createElement(tn.A, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, s.AH)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== q ? o.createElement(Gn, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: It.Fn
                    }), o.createElement("div", null, "Join Friends", " ", o.createElement(nn.A, {
                        className: (0, s.AH)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, q)), o.createElement(k.M2, {
                        icon: bt.vm
                    })) : o.createElement(Gn, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Nt.v0
                    }), o.createElement("div", null, "  Home"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Zt.default
                    }), o.createElement("div", null, "Groups"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: kt.y_
                    }), o.createElement("div", null, "Messages", " ", F > 0 && o.createElement(nn.A, {
                        className: (0, s.AH)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, F >= 99 ? "99+" : F)), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/calendar",
                        title: "Calendar",
                        className: "btn text-left d-sm-none",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: p.ok
                    }), o.createElement("div", null, "Calendar"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Mn, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: _
                    }), o.createElement(Gn, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Ct.cb
                    }), o.createElement("div", null, "Download"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Jt.default
                    }), o.createElement("div", null, "Discover Worlds"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: xt.Jm
                    }), o.createElement("div", null, "My Worlds"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: yt.yV
                    }), o.createElement("div", null, "Avatars"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: At.yy
                    }), o.createElement("div", null, "Favorite Worlds"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: At.yy
                    }), o.createElement("div", null, "Favorite Avatars"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: At.yy
                    }), o.createElement("div", null, "Favorite Friends"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/inventory",
                        title: "Inventory",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Qt.default
                    }), o.createElement("div", {
                        className: "tw-flex"
                    }, "Inventory", G && (null == R ? void 0 : R.totalCount) > 0 && o.createElement("div", {
                        className: "tw-rounded-full tw-bg-red tw-ml-2 tw-w-[22px] tw-h-[22px] tw-text-white tw-flex tw-items-center tw-justify-center "
                    }, o.createElement("p", {
                        className: "tw-text-sm tw-text-center tw-w-full tw-mb-0 tw-font-bold"
                    }, null == R ? void 0 : R.totalCount))), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Yt.default
                    }), o.createElement("div", null, "Marketplace"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), !1, o.createElement(Gn, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == B ? void 0 : B.disableUpgradeAccount) || (null == j ? void 0 : j.steamId) && (null == j ? void 0 : j.oculusId),
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: Et.WW
                    }), o.createElement("div", null, "Account Link"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: vt.$z
                    }), o.createElement("div", null, "Blocks & Mutes"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: _
                    }, o.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: an()
                    }), o.createElement("div", null, "Subscriptions"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Gn, {
                        to: "https://help.vrchat.com/",
                        title: "helpdesk",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "tw-bg-[#07142B] tw-border-[#051E48] tw-text-[#6AA2F9] btn text-left",
                        onClick: _
                    }, o.createElement(k.M2, {
                        icon: ht.q9
                    }), o.createElement("div", null, "Help Desk"), o.createElement(k.M2, {
                        icon: bt.vm
                    })), o.createElement(Un, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: U
                    }, o.createElement(k.M2, {
                        icon: gt.uQ
                    }), o.createElement("div", null, "Logout"), o.createElement("div", null))))
                });
            Pn.displayName = "Navbar";
            const Rn = Pn;
            var Gn = (0, He.A)(z.N_, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                Un = (0, He.A)(Gn, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                Ln = n(57115),
                _n = n(9663),
                Vn = n(3828),
                Fn = [];
            const Wn = function() {
                var e = (0, i.Zp)(),
                    t = (0, W.Mj)("campaigns", []),
                    n = (0, r.A)(t, 2),
                    a = n[0],
                    o = (n[1], (0, W.Mj)("campaignsSeen", [])),
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
                    var u = Fn.find(function(e) {
                        return e.name === s.name
                    });
                    if (u) return e(u.landingPage)
                }
                return null
            };
            var Hn = n(58168);
            const Xn = function(e) {
                var t = (0, H.w_)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return o.createElement(e, (0, Hn.A)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var Yn = n(28644),
                Zn = n(64937);
            const Qn = function() {
                var e = (0, l.wA)(),
                    t = (0, Zn.B3)(),
                    n = t.data,
                    r = t.isSuccess;
                t.isLoading;
                return o.useEffect(function() {
                    e((0, Vn.sf)(n))
                }, [r, n]), null
            };
            var Jn = n(39907),
                $n = n(19515),
                Kn = n.n($n),
                er = n(14685),
                tr = n(89483).m.injectEndpoints({
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
                nr = n(16260),
                rr = n.n(nr);
            const ar = function() {
                var e, t, n = o.useState(""),
                    a = (0, r.A)(n, 2),
                    l = a[0],
                    c = a[1],
                    s = (0, i.zy)(),
                    u = (0, i.Zp)(),
                    d = tr(),
                    m = (0, r.A)(d, 2),
                    f = m[0],
                    p = m[1],
                    w = p.data,
                    g = p.isLoading,
                    b = p.isSuccess,
                    h = p.isError,
                    v = p.error;
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
                    b && null != w && w.redeemedRewards && (0, er.A)({
                        particleCount: 150,
                        spread: 90,
                        origin: {
                            y: .6
                        }
                    })
                }, [b, w]);
                var E = function() {
                    var e = (0, ge.A)(he().mark(function e(t) {
                        var n, r;
                        return he().wrap(function(e) {
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
                }, o.createElement(k.Qc, null, "Redeem Code"), o.createElement(or, {
                    className: "mb-4 tw-bg-[#07242b] tw-border-[#053c48]",
                    outline: !0
                }, o.createElement(lr, null, o.createElement("h2", {
                    className: "tw-text-3xl tw-font-bold tw-text-center tw-text-[#6ae3f9] mb-2"
                }, "Redeem Code")), o.createElement(ir, {
                    className: "tw-p-5 tw-border-2 tw-border-[#053c48] tw-rounded-xl"
                }, o.createElement(k.fv, {
                    xs: {
                        size: 10,
                        offset: 1
                    }
                }, b && o.createElement(k.$T, {
                    type: "success",
                    title: "Success!"
                }, "Your code has been successfully redeemed!"), h && o.createElement(k.$T, {
                    type: "error",
                    title: "Error"
                }, (null == v || null === (e = v.data) || void 0 === e || null === (e = e.error) || void 0 === e ? void 0 : e.message) || "An error occurred while redeeming your code."), o.createElement(k.pd, {
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
                    isError: h,
                    success: b
                }), o.createElement("p", {
                    className: "tw-text-center tw-text-sm tw-text-gray-400"
                }, "Codes are case-sensitive."), o.createElement(k.fv, {
                    xs: "auto",
                    className: "mx-auto"
                }, o.createElement(k.$n, {
                    variant: "primary",
                    onClick: function() {
                        return E()
                    },
                    disabled: g || !l,
                    className: "tw-w-full tw-mt-2 tw-p-2 tw-px-4",
                    loading: g
                }, "Redeem")), b && !(null == w || null === (t = w.redeemedRewards) || void 0 === t || !t.length) && o.createElement("div", {
                    className: "tw-mt-6"
                }, o.createElement("h3", {
                    className: "tw-text-xl tw-font-semibold tw-mb-4 after:tw-content-none tw-text-center"
                }, "You received:"), o.createElement(k.fI, {
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
                        return o.createElement(or, {
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
            var or = (0, He.A)("div", {
                    target: "edh905g2"
                })({
                    name: "sx6pt1",
                    styles: "border-radius:0.5rem;padding:2.5rem 1rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1);border:1px solid #053c48"
                }),
                lr = (0, He.A)("div", {
                    target: "edh905g1"
                })({
                    name: "1ykowef",
                    styles: "margin-bottom:0"
                }),
                ir = (0, He.A)("div", {
                    target: "edh905g0"
                })({
                    name: "mkkf9p",
                    styles: "flex:1 1 auto"
                });
            var cr = o.lazy(function() {
                    return Promise.all([n.e(4982), n.e(4562)]).then(n.bind(n, 97066))
                }),
                sr = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(3930), n.e(5936), n.e(1239)]).then(n.bind(n, 83349))
                }),
                ur = o.lazy(function() {
                    return n.e(1398).then(n.bind(n, 31398))
                }),
                dr = o.lazy(function() {
                    return n.e(7927).then(n.bind(n, 87927))
                }),
                mr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(2279), n.e(6683), n.e(6955), n.e(5242), n.e(1938), n.e(3456), n.e(217), n.e(8851)]).then(n.bind(n, 78851))
                }),
                fr = o.lazy(function() {
                    return Promise.all([n.e(2996), n.e(6932)]).then(n.bind(n, 23793))
                }),
                pr = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(579), n.e(8494)]).then(n.bind(n, 68494))
                }),
                wr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(8242), n.e(1647)]).then(n.bind(n, 48242))
                }),
                gr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(4736), n.e(4028)]).then(n.bind(n, 34736))
                }),
                br = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(6313), n.e(6885)]).then(n.bind(n, 76313))
                }),
                hr = o.lazy(function() {
                    return n.e(4429).then(n.bind(n, 54429))
                }),
                vr = o.lazy(function() {
                    return n.e(7288).then(n.bind(n, 57288))
                }),
                Er = o.lazy(function() {
                    return Promise.all([n.e(6062), n.e(7697)]).then(n.bind(n, 20420))
                }),
                Ar = o.lazy(function() {
                    return Promise.all([n.e(3178), n.e(6746), n.e(3930), n.e(1938), n.e(4982), n.e(6062), n.e(6004), n.e(8104)]).then(n.bind(n, 78104))
                }),
                yr = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(6062), n.e(8426)]).then(n.bind(n, 94328))
                }),
                xr = o.lazy(function() {
                    return Promise.all([n.e(383), n.e(7464)]).then(n.bind(n, 67464))
                }),
                Cr = o.lazy(function() {
                    return Promise.all([n.e(4227), n.e(6955), n.e(3930), n.e(6367), n.e(4002)]).then(n.bind(n, 34002))
                }),
                kr = o.lazy(function() {
                    return n.e(4303).then(n.bind(n, 14303))
                }),
                Nr = o.lazy(function() {
                    return Promise.all([n.e(4982), n.e(2148)]).then(n.bind(n, 20460))
                }),
                Ir = o.lazy(function() {
                    return n.e(691).then(n.bind(n, 30691))
                }),
                Br = o.lazy(function() {
                    return n.e(100).then(n.bind(n, 100))
                }),
                jr = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(4613), n.e(3562)]).then(n.bind(n, 63562))
                }),
                Or = o.lazy(function() {
                    return n.e(4541).then(n.bind(n, 54541))
                }),
                Sr = o.lazy(function() {
                    return Promise.all([n.e(3930), n.e(6609)]).then(n.bind(n, 20879))
                }),
                Mr = o.lazy(function() {
                    return n.e(1756).then(n.bind(n, 11756))
                }),
                Tr = o.lazy(function() {
                    return Promise.all([n.e(6955), n.e(3930), n.e(6367), n.e(2967)]).then(n.bind(n, 71299))
                }),
                qr = o.lazy(function() {
                    return Promise.all([n.e(7917), n.e(6955), n.e(5242), n.e(1608)]).then(n.bind(n, 19337))
                }),
                Dr = o.lazy(function() {
                    return Promise.all([n.e(1952), n.e(3015), n.e(8242), n.e(4736), n.e(6313), n.e(6683), n.e(7596), n.e(6746), n.e(8497)]).then(n.bind(n, 12805))
                });
            const zr = function() {
                var e = (0, l.wA)(),
                    t = (0, o.useRef)(null),
                    n = (0, W.Mj)("isVRCFriendsOpen", !1),
                    d = (0, r.A)(n, 1)[0];
                Wn();
                var f = (0, H.p$)().data,
                    p = o.useMemo(function() {
                        var e;
                        return !(null == f || null === (e = f.badges) || void 0 === e || !e.find(function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && m()().isBefore(m()(n).add(36, "hours"))
                        }))
                    }, [f]),
                    w = (0, l.d4)(function(e) {
                        return e.ui
                    }),
                    g = w.rightWingOpen,
                    b = w.leftWingOpen,
                    h = function(t) {
                        e((0, We.LJ)(null != t ? t : !b))
                    },
                    v = function(n) {
                        var r = null != n ? n : !g;
                        (0, W.PX)("isVRCFriendsOpen", r), e((0, We.yu)(r)), setTimeout(function() {
                            var e;
                            null === (e = t.current) || void 0 === e || e.updateCalendarSize()
                        }, 500)
                    };
                return (0, o.useEffect)(function() {
                    e((0, Vn.iW)()), e((0, Vn.Ro)()), e((0, We.yu)(!!d))
                }, []), o.createElement("div", {
                    className: (0, s.AH)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", p && (0, s.AH)("background-image:url(", Kn(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 20px 0 20px;transition:padding-right 0.35s ease-in-out;}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1440px){& .hide-large{display:none;}}@media (max-width: 1439px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, o.createElement(Qn, null), o.createElement("div", null, o.createElement(Rn, {
                    navToggleCallback: h,
                    friendsToggleCallback: function(e) {
                        v(e)
                    }
                })), o.createElement(c.A, {
                    fluid: !0
                }, o.createElement("div", null, o.createElement("div", {
                    className: "fixed-top leftbar ".concat(b ? "leftOpen" : "")
                }, o.createElement("div", {
                    className: (0, s.AH)({
                        name: "1ga2o5r",
                        styles: "width:325px;padding:0 5px"
                    })
                }, o.createElement("div", {
                    className: "hide-large ".concat((0, s.AH)({
                        name: "1bk3y4m",
                        styles: "margin-top:8px;& .dropdown-menu{padding:10px 15px 5px 15px;position:fixed!important;background-color:#506070;border-radius:0;z-index:1000;bottom:0!important;top:100px!important;margin:0!important;transform:none!important;}& .dropdown-toggle{margin-bottom:5px;}"
                    }))
                }, o.createElement(In, {
                    direction: "right"
                })), o.createElement(u.tH, {
                    fallback: Yn.A
                }, o.createElement($e, {
                    navToggleCallback: h
                })), o.createElement(u.tH, {
                    fallback: Yn.A
                }, o.createElement(Rn, {
                    horizontal: !0,
                    navToggleCallback: h
                })))), o.createElement("div", {
                    className: "col-xs-12 content-scroll"
                }, o.createElement("div", {
                    className: "home-content tw-max-w-[1350px]"
                }, o.createElement(u.tH, {
                    fallback: Yn.A
                }, o.createElement(o.Suspense, {
                    fallback: o.createElement(o.Fragment, null, o.createElement(Ln.A, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), o.createElement(Ln.A, {
                        delay: "50",
                        height: "480px"
                    }))
                }, o.createElement(i.BV, null, o.createElement(i.qh, {
                    path: "/search/:tab/:query",
                    element: o.createElement(sr, null)
                }), o.createElement(i.qh, {
                    path: "/profile",
                    element: o.createElement(pr, null)
                }), o.createElement(i.qh, {
                    path: "/user/:userId/*",
                    element: o.createElement(Tr, null)
                }), o.createElement(i.qh, {
                    path: "/uploadIcon",
                    element: Xn(gr)()
                }), o.createElement(i.qh, {
                    path: "/uploadPhoto",
                    element: Xn(br)()
                }), o.createElement(i.qh, {
                    path: "/uploadEmoji",
                    element: Xn(wr)()
                }), o.createElement(i.qh, {
                    path: "/gallery/icons",
                    element: o.createElement(_n.A, {
                        to: "../inventory/user-icons"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/photos",
                    element: o.createElement(_n.A, {
                        to: "../inventory/photos"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/emoji",
                    element: o.createElement(_n.A, {
                        to: "../inventory/emojis"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/stickers",
                    element: o.createElement(_n.A, {
                        to: "../inventory/stickers"
                    })
                }), o.createElement(i.qh, {
                    path: "/gallery/*",
                    element: o.createElement(_n.A, {
                        to: "../inventory/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/inventory/*",
                    element: o.createElement(Dr, null)
                }), o.createElement(i.qh, {
                    path: "/marketplace/*",
                    element: o.createElement(Br, null)
                }), o.createElement(i.qh, {
                    path: "/wallet",
                    element: o.createElement(_n.A, {
                        to: "../marketplace/wallet"
                    })
                }), o.createElement(i.qh, {
                    path: "/wallet/purchases/*",
                    element: o.createElement(_n.A, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/wallet/store/*",
                    element: o.createElement(_n.A, {
                        to: "../marketplace/storefront/*"
                    })
                }), o.createElement(i.qh, {
                    path: "/locations",
                    element: o.createElement(Nr, null)
                }), o.createElement(i.qh, {
                    path: "/worlds",
                    element: o.createElement(hr, null)
                }), o.createElement(i.qh, {
                    path: "/world/:worldId/*",
                    element: o.createElement(qr, null)
                }), o.createElement(i.qh, {
                    path: "/avatars",
                    element: o.createElement(fr, null)
                }), o.createElement(i.qh, {
                    path: "/avatar/:avatarId",
                    element: o.createElement(mr, null)
                }), o.createElement(i.qh, {
                    path: "/content/*",
                    element: o.createElement(jr, null)
                }), o.createElement(i.qh, {
                    path: "/messages",
                    element: o.createElement(Or, null)
                }), o.createElement(i.qh, {
                    path: "/playermoderations",
                    element: o.createElement(Sr, null)
                }), o.createElement(i.qh, {
                    path: "/download",
                    element: o.createElement(ur, null)
                }), o.createElement(i.qh, {
                    path: "/redeem",
                    element: o.createElement(ar, null)
                }), o.createElement(i.qh, {
                    path: "/groups",
                    element: o.createElement(vr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/create",
                    element: o.createElement(Er, null)
                }), o.createElement(i.qh, {
                    path: "/groups/search",
                    element: o.createElement(vr, null)
                }), o.createElement(i.qh, {
                    path: "/groups/search/:query",
                    element: o.createElement(vr, null)
                }), o.createElement(i.qh, {
                    path: "/group/:groupId/ageverification/:code",
                    element: o.createElement(yr, null)
                }), o.createElement(i.qh, {
                    path: "/group/:groupId/*",
                    element: o.createElement(Ar, null)
                }), o.createElement(i.qh, {
                    path: "/groups/:groupId",
                    element: o.createElement(_n.A, {
                        to: "../../group/:groupId"
                    })
                }), o.createElement(i.qh, {
                    path: "/calendar",
                    element: o.createElement(Fe, {
                        ref: t
                    })
                }), o.createElement(i.qh, {
                    path: "/ageverification",
                    element: o.createElement(xr, null)
                }), o.createElement(i.qh, {
                    path: "/accountlink",
                    element: o.createElement(dr, null)
                }), o.createElement(i.qh, {
                    path: "/favorites/*",
                    element: o.createElement(i.BV, null, o.createElement(i.qh, {
                        path: "/:type",
                        element: o.createElement(Cr, null)
                    }), o.createElement(i.qh, {
                        path: "/:type/:name",
                        element: o.createElement(Cr, null)
                    }))
                }), o.createElement(i.qh, {
                    path: "/group/:ownerId/calendar/:eventId",
                    element: o.createElement(Jn.A, null)
                }), o.createElement(i.qh, {
                    path: "/jams/*",
                    element: o.createElement(Ir, null)
                }), !1, !1, o.createElement(i.qh, {
                    path: "/subscriptions",
                    element: o.createElement(Mr, null)
                }), o.createElement(i.qh, {
                    path: "/",
                    element: o.createElement(cr, null)
                })))))), o.createElement("div", {
                    className: "fixed-top rightbar ".concat(g ? "open" : "")
                }, o.createElement(u.tH, {
                    fallback: Yn.A
                }, o.createElement(o.Suspense, {
                    fallback: o.createElement(o.Fragment, null, o.createElement(Ln.A, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), o.createElement(Ln.A, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), o.createElement(Ln.A, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, o.createElement(kr, {
                    friendsToggleCallback: v
                })))), o.createElement("div", {
                    onKeyDown: function(e) {
                        "Escape" === e.key && v(!1)
                    },
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button d-md-flex d-none tw-z-[3]",
                    onClick: function() {
                        v(!0)
                    }
                }, o.createElement(k.M2, {
                    icon: a.faUserGroup,
                    className: "tw-w-7 tw-h-7 tw-text-white",
                    "aria-label": "Open Friends Menu"
                })))), o.createElement(Y, null), !1, o.createElement(_, null))
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
                A: () => ze
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
                b = n(15902),
                h = n(1871),
                v = n(86558),
                E = n(75976),
                A = n(52169),
                y = n(94045),
                x = n(92198),
                C = n(18633),
                k = n(47034),
                N = n(38925),
                I = n(48864),
                B = n(82617),
                j = n(7514),
                O = n(82628),
                S = n(85044),
                M = n(83159),
                T = n(78536),
                q = n(31069),
                D = n(74353),
                z = n.n(D),
                P = n(15750),
                R = n.n(P),
                G = n(6279),
                U = n.n(G),
                L = n(64937),
                _ = n(39848),
                V = n(79902),
                F = n(61206),
                W = n(22017),
                H = n(62285),
                X = n(54321),
                Y = n(91622),
                Z = n(23425),
                Q = n(53967),
                J = n(15394),
                $ = n(38275),
                K = n(22979),
                ee = n(31174),
                te = n(86379),
                ne = n(30382),
                re = n(64850),
                ae = n(22325),
                oe = n(7521),
                le = n(23179),
                ie = n(3385),
                ce = n(53065),
                se = n(900),
                ue = n(25161),
                de = n(28045),
                me = n(62672),
                fe = n(60380),
                pe = n(81021),
                we = n(70300),
                ge = n(15977),
                be = n(31304),
                he = n(82858),
                ve = n(64350),
                Ee = n(52148),
                Ae = n(3713),
                ye = {
                    edit: n(45412).LF,
                    cancel: E.faXmark,
                    history: Ae.Yj,
                    refresh: Ee.faArrowsRotate,
                    search: ve.faMagnifyingGlass,
                    settings: he.faGear,
                    pin: be.vJ,
                    "arrow-up": ge.IN,
                    "arrow-down": we.B0,
                    "arrow-left": pe.Ce,
                    "arrow-right": fe.dm,
                    ban: me.faBan,
                    check: l.e6,
                    plus: de.QL,
                    link: ue.CQ,
                    eye: se.pS,
                    circle: ce.GE,
                    star: ie.yy,
                    bell: T.z$,
                    "bell-slash": le.iN,
                    bookmark: oe.G0,
                    reply: ae.Ez,
                    user: re.X4,
                    "user-circle": ne.VF,
                    "user-plus": s.nW,
                    "user-minus": te.bB,
                    camera: ee.rw,
                    display: K.wA,
                    trash: $.yL,
                    feather: J.xX,
                    images: Q.yv,
                    house: Z.faHouse,
                    location: Y.Bt,
                    rocket: X.KM,
                    microphone: H.A5,
                    "folder-open": W.Uj,
                    gauge: F.d1,
                    dice: V.xN,
                    "triangle-exclamation": O.faTriangleExclamation
                },
                xe = n(15033),
                Ce = n(46828),
                ke = n(84370);
            z().extend(U()), z().extend(R());
            var Ne = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: _.default
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: T.z$
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: T.z$
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
                        icon: T.z$
                    },
                    "group.event.starting": {
                        caption: "Event Starting",
                        icon: M.ok
                    },
                    "group.event.created": {
                        caption: "Event Announcement",
                        icon: M.ok
                    },
                    "event.announcement": {
                        caption: "Event Announcement",
                        icon: M.ok
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: S.faCircleExclamation
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
                        icon: j.pn
                    },
                    "avatarreview.success": {
                        caption: "Avatar Approved",
                        icon: B.faCircleCheck
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
                        icon: y.GY
                    }
                },
                Ie = {
                    OpenListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(q.eA.EXPIRING)
                    },
                    OpenExpiredListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(q.eA.EXPIRED)
                    },
                    event: function(e) {
                        e.linkType;
                        var t = e.linkId.split(","),
                            n = (0, b.A)(t, 2),
                            r = n[0],
                            a = n[1];
                        return "/home/group/".concat(r, "/calendar/").concat(a)
                    }
                },
                Be = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                je = function(e) {
                    var t, n = e.notificationId,
                        r = e.respondToNotification,
                        a = e.type,
                        o = e.data,
                        l = e.icon,
                        i = e.text;
                    return "link" === a ? null : d.createElement(ke.BO, {
                        disabled: "reply" === a,
                        onClick: function() {
                            r({
                                notificationId: n,
                                responseType: a,
                                responseData: o
                            })
                        },
                        title: "reply" === a ? "To reply, open your notifications in VRChat" : i || a
                    }, d.createElement(xe.M2, {
                        icon: (t = l, ye[t] || t)
                    }), " ", i || a)
                };
            const Oe = function(e) {
                var t = e.notification,
                    n = e.slim,
                    a = (0, m.wA)(),
                    o = d.useState(!1),
                    l = (0, b.A)(o, 2),
                    i = l[0],
                    c = l[1],
                    s = (0, L.oH)(),
                    w = (0, b.A)(s, 2),
                    g = w[0],
                    y = w[1].isSuccess,
                    x = (0, L.Lc)(),
                    C = (0, b.A)(x, 2),
                    k = C[0],
                    N = C[1].isSuccess,
                    I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.link,
                            n = (e.linkText, (null == t ? void 0 : t.split(":")) || []),
                            r = (0, b.A)(n, 2),
                            a = r[0],
                            o = r[1];
                        if (a) return (Ie[a] || Be)({
                            linkType: a,
                            linkId: o
                        })
                    }(t),
                    B = (t.linkText || t.title, t.title || t.linkText);
                (y || N) && a((0, p.$Z)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var j = Ne[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: A.Ev
                    },
                    O = j.icon,
                    S = j.caption,
                    M = t.createdAt && z()(t.createdAt);
                return d.createElement(d.Fragment, null, d.createElement(ke.L4, null, d.createElement(ke.H2, null, d.createElement(ke.rn, null, d.createElement(xe.M2, {
                    icon: O
                }), " ", d.createElement("i", null, S)), (null == t ? void 0 : t.canDelete) && d.createElement(ke.f2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        k({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, d.createElement(xe.M2, {
                    icon: E.faXmark
                }))), d.createElement(ke.AE, null, t.imageUrl && d.createElement(ke.WY, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.x4.offline.color
                }, d.createElement(ke.Fe, null, d.createElement(xe.M2, {
                    icon: v.bM
                })), d.createElement(ke.JZ, {
                    url: t.imageUrl
                }), d.createElement(ke.C6, {
                    url: t.imageUrl
                })), d.createElement(ke.NO, null, d.createElement(ke.yx, null, !!B && d.createElement("strong", null, I ? d.createElement(f.N_, {
                    to: I
                }, B) : B), (null == M ? void 0 : M.isValid()) && d.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, d.createElement("small", null, d.createElement("time", {
                    dateTime: t.createdAt,
                    title: M.format("llll")
                }, d.createElement(xe.M2, {
                    className: "tw-mr-1",
                    icon: h.a$
                }), M.fromNow()))), d.createElement("p", null, t.message)), d.createElement(ke.GU, {
                    slim: n
                }, null == t ? void 0 : t.responses.map(function(e) {
                    return d.createElement(je, (0, r.A)({
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
            const Se = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    r = (0, m.wA)(),
                    a = (0, L.mI)(),
                    l = (0, b.A)(a, 2),
                    c = l[0],
                    s = l[1].isSuccess,
                    f = (0, L.Gg)(),
                    w = (0, b.A)(f, 1)[0],
                    g = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && r((0, p.$Z)({
                    notificationId: t.id
                })), d.createElement(ke.L4, null, d.createElement(ke.rn, null, d.createElement(xe.M2, {
                    icon: i.y_
                }), "  ", d.createElement("i", null, "System Message")), d.createElement(ke.AE, null, d.createElement(ke.lf, {
                    statusColor: u.x4.offline.color
                }, d.createElement(ke.JZ, {
                    url: g
                }), d.createElement(ke.C6, {
                    url: g
                })), d.createElement(ke.NO, null, d.createElement(ke.yx, null, d.createElement("strong", null, "System Message"), " - ", t.message), d.createElement(ke.GU, null, d.createElement(ke.BO, {
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
            var Me = ["notification"],
                Te = {
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
                De = ["friend-active", "friend-add", "friend-online"];
            const ze = function(e) {
                var t, n, i, c, s, b, h, v, E = e.notification,
                    A = (0, a.A)(e, Me),
                    y = (0, m.wA)(),
                    x = E.type,
                    C = E.senderUserId,
                    k = E.id,
                    N = E.message,
                    I = E.isSystem,
                    B = 2 === E.version,
                    j = "message" === x || I,
                    O = (0, g.vf)(C, {
                        skip: !C || B
                    }),
                    S = O.data,
                    M = O.isLoading,
                    T = O.error;
                if (B) return d.createElement(Oe, (0, r.A)({}, A, {
                    notification: E
                }));
                if (M) return d.createElement("p", null, "Loading");
                if (j) return d.createElement(Se, (0, r.A)({}, A, {
                    notification: E,
                    senderUserData: S
                }));
                if (404 === (null == T ? void 0 : T.status)) return null;
                var q, D = Te[x],
                    z = qe[x],
                    P = (0, u.CD)(null == S ? void 0 : S.status).color,
                    R = (null == S ? void 0 : S.profilePicOverride) || (null == S ? void 0 : S.currentAvatarThumbnailImageUrl),
                    G = (null === (t = E.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = E.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (i = E.details) || void 0 === i ? void 0 : i.requestMessage);
                return d.createElement(ke.L4, null, d.createElement(ke.rn, null, d.createElement(xe.M2, {
                    icon: D
                }), "  ", d.createElement("i", null, z)), d.createElement(ke.AE, null, d.createElement(ke.WY, {
                    to: "/home/user/".concat(C),
                    statusColor: P
                }, !(null !== (c = E.details) && void 0 !== c && c.imageUrl) && d.createElement(ke.Fe, null, "Go To Profile"), d.createElement(ke.JZ, {
                    url: null !== (s = null === (b = E.details) || void 0 === b ? void 0 : b.imageUrl) && void 0 !== s ? s : R
                }), d.createElement(ke.C6, {
                    url: null !== (h = null === (v = E.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== h ? h : R
                })), d.createElement(ke.NO, null, d.createElement(ke.yx, null, d.createElement(f.N_, {
                    to: "/home/user/".concat(C)
                }, d.createElement("strong", null, S.displayName)), " - ", N || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (q = E.details) || void 0 === q ? void 0 : q.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [x]), "friendRequest" === x ? d.createElement(ke.GU, null, d.createElement(ke.BO, {
                    onClick: function() {
                        return y((0, p._b)({
                            notificationId: k,
                            withServer: !De.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(xe.M2, {
                    icon: o.GR
                })), d.createElement(ke.BO, {
                    onClick: function() {
                        y((0, p.Lv)({
                            notificationId: E.id
                        })), (0, w.u4)("Social_AcceptFriendRequest", {
                            targetUserId: E.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, d.createElement(xe.M2, {
                    icon: l.e6
                }))) : d.createElement(ke.GU, null, d.createElement(ke.BO, {
                    onClick: function() {
                        return y((0, p._b)({
                            notificationId: k,
                            withServer: !De.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, d.createElement(xe.M2, {
                    icon: o.GR
                })), "invite" === x && d.createElement(ke.BO, {
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
                }, d.createElement("strong", null, "Join"))))), G && d.createElement(ke.p, null, '"', G, '"'))
            }
        },
        84370(e, t, n) {
            "use strict";
            n.d(t, {
                $s: () => C,
                AE: () => s,
                BO: () => w,
                C6: () => y,
                Fe: () => b,
                GU: () => p,
                H2: () => i,
                JZ: () => A,
                L4: () => c,
                NO: () => m,
                WY: () => E,
                bM: () => x,
                f2: () => g,
                lf: () => h,
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
                b = (0, r.A)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                h = (0, r.A)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", function(e) {
                    return e.statusColor
                }, ";box-sizing:border-box;"),
                v = (0, r.A)(o.N_, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", function(e) {
                    return e.statusColor
                }, ";box-sizing:border-box;&:hover ", b, "{opacity:1;}"),
                E = (0, r.A)(v, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(b, " {\n      opacity: 0;\n    }\n  ")
                }, ";"),
                A = (0, r.A)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", function(e) {
                    return e.url
                }, ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                y = (0, r.A)(A, {
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
                Ph: () => h,
                Q_: () => p,
                Uy: () => b,
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
                b = d.useGetInventoryNotSeenItemsQuery,
                h = d.useGetGlobalInventoryItemsQuery
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
//# sourceMappingURL=a995356758f5c74c635ac9ce99cd72baeb397b02508891d154b016001cb6c3d0.js.map