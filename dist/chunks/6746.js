"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6746], {
        46746(e, t, n) {
            n.d(t, {
                A: () => E
            });
            var r = n(82544),
                i = n(70129),
                o = n(34213),
                c = n(62672),
                a = n(75976),
                u = n(38275),
                l = n(63465),
                s = n(84837),
                d = n(900),
                f = n(81617),
                m = n(60514),
                p = n(96540),
                h = n(84976),
                g = n(15033),
                v = n(6324),
                w = n(97963);
            const E = function(e) {
                var t = e.isIcon,
                    n = void 0 !== t && t,
                    i = e.isEmoji,
                    w = e.isAnimated,
                    E = e.isSticker,
                    I = e.fileId,
                    R = e.versionNumber,
                    z = e.image,
                    j = e.onSelect,
                    L = e.onClick,
                    S = e.navigate,
                    T = e.showViewButton,
                    U = void 0 === T ? !n : T,
                    D = e.viewButtonTitle,
                    N = void 0 === D ? "View" : D,
                    O = e.showWearButton,
                    Z = void 0 === O ? !n && !i && !E : O,
                    F = e.wearButtonTitle,
                    M = void 0 === F ? "Wear" : F,
                    W = e.showSelectButton,
                    _ = void 0 === W ? !n : W,
                    q = e.selectButtonTitle,
                    K = void 0 === q ? "Select" : q,
                    P = e.showEditButton,
                    V = void 0 === P ? !n : P,
                    X = e.editButtonTitle,
                    G = void 0 === X ? "Edit" : X,
                    H = e.showDeleteButton,
                    J = void 0 === H ? !n : H,
                    Q = e.deleteButtonTitle,
                    Y = void 0 === Q ? "Delete" : Q,
                    $ = e.showBanButton,
                    ee = void 0 === $ ? !n : $,
                    te = e.onDelete,
                    ne = e.onWear,
                    re = e.onEdit,
                    ie = e.onBan,
                    oe = e.onBlock,
                    ce = e.onReject,
                    ae = e.onUnblock,
                    ue = e.width,
                    le = void 0 === ue ? 200 : ue,
                    se = e.confirmDelete,
                    de = void 0 === se || se,
                    fe = e.disableManagement,
                    me = void 0 !== fe && fe,
                    pe = (e.maskTag, e.frameRate),
                    he = e.frameCount,
                    ge = p.useState(null),
                    ve = (0, r.A)(ge, 2),
                    we = ve[0],
                    Ee = ve[1],
                    xe = p.useState(!1),
                    be = (0, r.A)(xe, 2),
                    ke = be[0],
                    ye = be[1],
                    Ae = p.useState(!!z),
                    Ce = (0, r.A)(Ae, 2),
                    Be = Ce[0],
                    Ie = Ce[1],
                    Re = n || i || E ? "square" : "video";
                return p.createElement(b, {
                    width: le,
                    isIcon: n,
                    className: "tw-aspect-".concat(Re)
                }, te && J && p.createElement(g.uo, {
                    headerText: "Are you sure?",
                    confirmText: "Delete",
                    confirmCallback: function() {
                        we && (ye(!0), te(we)), Ee(null)
                    },
                    cancelText: "Never mind!",
                    cancelCallback: function() {
                        Ee(null)
                    },
                    isOpen: !!we
                }, p.createElement("p", null, "Are you sure you want to delete this image?"), p.createElement("img", {
                    src: we,
                    alt: "",
                    width: "100%"
                })), p.createElement(A, {
                    isIcon: n,
                    isEmoji: i,
                    isSticker: E
                }, S ? p.createElement(h.N_, {
                    className: "w-100",
                    to: S
                }, p.createElement(y, {
                    src: z,
                    onLoad: function() {
                        return Ie(!1)
                    },
                    onError: function() {
                        return Ie(!1)
                    },
                    onClick: L,
                    isIcon: n,
                    disableZoom: me
                })) : p.createElement(p.Fragment, null, !w && p.createElement(y, {
                    src: z,
                    onLoad: function() {
                        return Ie(!1)
                    },
                    onError: function() {
                        return Ie(!1)
                    },
                    onClick: L,
                    isIcon: n,
                    disableZoom: me
                }), w && p.createElement(k, null, p.createElement(m.A, {
                    url: z,
                    frameCount: he,
                    frameRate: pe,
                    onLoad: function() {
                        return Ie(!1)
                    },
                    onError: function() {
                        return Ie(!1)
                    },
                    onClick: L,
                    size: 200
                }))), (Be || ke) && p.createElement(x, null)), !me && p.createElement(C, {
                    isIcon: n,
                    isSticker: E,
                    hasButtons: j && _ || L && U || ne && Z || re && V || te && J || ce || ae || oe
                }, j && _ && p.createElement(B, {
                    positive: !0,
                    title: K,
                    onClick: function() {
                        j(I, z)
                    }
                }, p.createElement(v.A, {
                    icon: f.e6
                })), L && U && p.createElement(B, {
                    title: N,
                    onClick: L
                }, p.createElement(v.A, {
                    icon: d.pS
                })), ne && Z && p.createElement(B, {
                    positive: !0,
                    title: M,
                    onClick: function() {
                        ne(I, R)
                    }
                }, p.createElement(v.A, {
                    icon: s.sj
                })), re && V && p.createElement(B, {
                    title: G,
                    onClick: function() {
                        re(I, R)
                    }
                }, p.createElement(v.A, {
                    icon: l.cN
                })), te && J && p.createElement(B, {
                    danger: !0,
                    title: Y,
                    onClick: function() {
                        return de ? Ee(z) : te(z)
                    }
                }, p.createElement(v.A, {
                    icon: u.yL
                })), ie && ee && p.createElement(B, {
                    danger: !0,
                    title: "Ban",
                    onClick: function() {
                        return ie(I)
                    }
                }, p.createElement(v.A, {
                    icon: c.faBan
                })), ce && !n && p.createElement(B, {
                    danger: !0,
                    title: "Reject",
                    onClick: function() {
                        return ce()
                    }
                }, p.createElement(v.A, {
                    icon: a.faXmark
                })), oe && !n && p.createElement(B, {
                    danger: !0,
                    title: "Block",
                    onClick: function() {
                        return oe()
                    }
                }, p.createElement(v.A, {
                    icon: c.faBan
                })), ae && !n && p.createElement(B, {
                    danger: !0,
                    title: "Unblock",
                    onClick: function() {
                        return ae()
                    }
                }, p.createElement(v.A, {
                    icon: o.KK
                }))))
            };
            var x = (0, i.A)(g.fy, {
                    target: "e1ufza0y6"
                })({
                    name: "m66md0",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;z-index:3"
                }),
                b = (0, i.A)("div", {
                    target: "e1ufza0y5"
                })("position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:5px;width:", function(e) {
                    return e.width
                }, "px!important;max-width:", function(e) {
                    return e.width
                }, "px!important;height:fit-content;border:4px solid #252a30;background-color:#252a30;border-radius:", function(e) {
                    return e.isIcon ? "50%" : "8px"
                }, ";overflow:visible;"),
                k = (0, i.A)("div", {
                    target: "e1ufza0y4"
                })({
                    name: "1famqm",
                    styles: "width:200px;height:200px"
                }),
                y = (0, i.A)("img", {
                    target: "e1ufza0y3"
                })("width:100%;height:100%;object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:center;transition:", function(e) {
                    return e.disableZoom ? "none" : "transform 0.4s ease-out"
                }, ";z-index:", function(e) {
                    return e.isIcon ? "1" : "auto"
                }, ";:hover{cursor:", function(e) {
                    return e.disableZoom ? "auto" : "pointer"
                }, ";transform:", function(e) {
                    return e.disableZoom ? "none" : "scale(1.1)"
                }, ";}"),
                A = (0, i.A)("div", {
                    target: "e1ufza0y2"
                })("width:100%;", function(e) {
                    var t = e.isEmoji,
                        n = e.isSticker;
                    return t || n ? "height: auto !important;" : "height: 100%;"
                }, " height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;border-radius:", function(e) {
                    return e.isIcon ? "50%" : "8px"
                }, ";"),
                C = (0, i.A)("div", {
                    target: "e1ufza0y1"
                })("position:absolute;", function(e) {
                    return e.isIcon ? "\n  bottom: -4px;\n  right: -4px;\n  height: 50%;\n  width: 50%;\n  border-bottom-right-radius: 18px;\n  " : "\n  bottom: 0;\n  right: 0;\n  height: 40px;\n  border-top-left-radius: 8px;\n  "
                }, " ", function(e) {
                    return e.hasButtons ? "display: flex;" : "display: none;"
                }, " flex-direction:row;justify-content:end;align-items:end;background-color:#252a30;"),
                B = (0, i.A)(w.Ay, {
                    target: "e1ufza0y0"
                })({
                    name: "1o0pvlv",
                    styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;width:30px;margin:0 2px 2px 5px;aspect-ratio:1/1;border-radius:50%;z-index:2"
                })
        },
        85253(e, t, n) {
            n.d(t, {
                Hn: () => u,
                ID: () => a,
                OO: () => s,
                Xt: () => l,
                nk: () => d
            });
            var r = n(10467),
                i = n(54756),
                o = n.n(i),
                c = {},
                a = function(e) {
                    var t = "".concat(e.name).concat(e.lastModified);
                    return void 0 === c[t] && (c[t] = window.URL.createObjectURL(e)), c[t]
                },
                u = function(e) {
                    return new Promise(function(t) {
                        var n = new Image;
                        n.addEventListener("load", function() {
                            var e = {
                                width: n.width,
                                height: n.height
                            };
                            window.URL.revokeObjectURL(n.src), t(e)
                        }), n.src = window.URL.createObjectURL(e)
                    })
                },
                l = function(e) {
                    return "image/gif" === e.type
                },
                s = function(e) {
                    var t = e.file,
                        n = e.includeGif,
                        r = ["image/png", "image/jpeg", "image/svg+xml", "image/bmp"];
                    return void 0 !== n && n && r.push("image/gif"), r.includes(t.type)
                },
                d = function() {
                    var e = (0, r.A)(o().mark(function e(t) {
                        return o().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function(e) {
                                        var n = new FileReader;
                                        n.onload = function(t) {
                                            e(t.target.result)
                                        }, n.readAsDataURL(t)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        60514(e, t, n) {
            n.d(t, {
                A: () => a
            });
            var r = n(70129),
                i = n(85253),
                o = n(96540),
                c = (0, r.A)("canvas", {
                    target: "e162gdmm0"
                })("width:", function(e) {
                    return "".concat(e.size, "px") || 0
                }, ";height:", function(e) {
                    return "".concat(e.size, "px") || 0
                }, ";border-radius:15px;");
            const a = function(e) {
                var t = e.spriteSheet,
                    n = e.frameCount,
                    r = e.frameRate,
                    a = e.size,
                    u = e.url,
                    l = e.onLoad,
                    s = e.onError,
                    d = e.onClick,
                    f = o.useRef(0),
                    m = o.useRef(null),
                    p = o.useRef(null),
                    h = o.useRef(null),
                    g = o.useRef(-1),
                    v = function() {
                        return n <= 4 ? 512 : n <= 16 ? 256 : n <= 64 ? 128 : void console.error("Frame count of ".concat(n, " is unsupported!"))
                    },
                    w = function() {
                        var e = n <= 4 ? 2 : n <= 16 ? 4 : n <= 64 ? 8 : void console.error("Frame count of ".concat(n, " is unsupported!")),
                            t = v();
                        return {
                            x: f.current % e * t,
                            y: Math.floor(f.current / e) * t
                        }
                    },
                    E = function() {
                        if (null !== p && null !== m.current) {
                            var e = p.current;
                            e.clearRect(0, 0, 1e3, 1e3), e.imageSmoothingEnabled = !1;
                            var t = w(),
                                r = v();
                            e.drawImage(m.current, t.x, t.y, r, r, 0, 0, a, a), f.current = (f.current + 1) % n
                        }
                    };
                return o.useEffect(function() {
                    null === p.current && (p.current = h.current.getContext("2d")), -1 !== g.current && clearInterval(g.current), g.current = setInterval(E, 1e3 / r)
                }, [r, n]), o.useEffect(function() {
                    var e = new Image;
                    e.onload = function() {
                        m.current = e, void 0 !== l && l()
                    }, e.onerror = function(e) {
                        void 0 !== s && s(e)
                    }, e.src = u || (0, i.ID)(t)
                }, [t, u]), o.useEffect(function() {
                    return function() {
                        -1 !== g.current && clearInterval(g.current)
                    }
                }, []), o.createElement(c, {
                    size: a,
                    width: "".concat(a, "px"),
                    height: "".concat(a, "px"),
                    ref: h,
                    onClick: d
                })
            }
        }
    }
]);
//# sourceMappingURL=7e931c1c548b5aca163378bd6297a6cc1a6029b9433140eb686f8a8c229c116e.js.map