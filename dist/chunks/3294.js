"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3294], {
        22497: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(67294),
                a = (n(37337), n(54546)),
                i = n(4965),
                o = n(59660),
                l = n(46382),
                c = n(73462);
            var s = (0, i.Z)(l.$1, {
                    target: "e14fnvay1"
                })({
                    name: "4j0agp",
                    styles: "margin-right:0.3em"
                }),
                m = (0, i.Z)("input", {
                    target: "e14fnvay0"
                })({
                    name: "eivff4",
                    styles: "display:none"
                });
            const u = function(e) {
                var t = e.callback,
                    n = e.text,
                    a = (0, r.useRef)(null);
                return r.createElement(r.Fragment, null, r.createElement(m, {
                    type: "file",
                    id: "file",
                    ref: a,
                    accept: ".png,.jpg,.jpeg,.svg",
                    onChange: function(e) {
                        var n = e.target.files[0];
                        return void 0 === n ? console.error("Given file was undefined?") : t(n)
                    }
                }), r.createElement(l.zx, {
                    accent: !0,
                    containerStyles: "width: 8em; height: 2em; display: inline;",
                    onClick: function() {
                        a.current.click()
                    }
                }, r.createElement(s, {
                    color: "#6ae3f9",
                    icon: c.Pk,
                    width: 15
                }), n))
            };
            var d = (0, i.Z)("div", {
                    target: "e1ytxlu95"
                })({
                    name: "zl1inp",
                    styles: "display:flex;justify-content:center"
                }),
                p = (0, i.Z)("div", {
                    target: "e1ytxlu94"
                })({
                    name: "yq7cq8",
                    styles: "font-style:italic;margin-left:1em;cursor:pointer;user-select:none"
                }),
                f = (0, i.Z)("input", {
                    target: "e1ytxlu93"
                })(""),
                h = (0, i.Z)("div", {
                    target: "e1ytxlu92"
                })({
                    name: "1gpzra0",
                    styles: "margin-bottom:1em"
                }),
                g = (0, i.Z)(l.$1, {
                    target: "e1ytxlu91"
                })({
                    name: "1iy47er",
                    styles: "padding-bottom:0.3em"
                }),
                w = (0, i.Z)("div", {
                    target: "e1ytxlu90"
                })({
                    name: "1bk55cy",
                    styles: "width:100%;height:100%;background-color:#0a0a0d;border-radius:8px;border-style:dashed;border-width:2px;border-color:#737373;display:flex;align-items:center;justify-content:center;text-align:center"
                });
            const v = function(e) {
                var t = e.fileCallback,
                    n = e.isForAnimatedEmoji,
                    i = e.setIsPremadeSpriteSheet,
                    l = e.isPremadeSpriteSheet,
                    c = function() {
                        i(!l)
                    };
                return window.addEventListener("dragover", (function(e) {
                    e.preventDefault()
                }), !1), window.addEventListener("drop", (function(e) {
                    e.preventDefault()
                }), !1), r.createElement(w, {
                    onDrop: function(e) {
                        var n;
                        e.stopPropagation(), e.preventDefault();
                        var r = null === (n = e.dataTransfer) || void 0 === n ? void 0 : n.files;
                        if (void 0 === r) return console.error("Drag & Drop operation failed!", e);
                        var i = (0, a.Z)(r, 1)[0];
                        return void 0 !== i ? t(i) : console.error("Drag & Drop operation failed!", e)
                    }
                }, r.createElement("div", null, r.createElement(g, {
                    color: "#737373",
                    icon: o.l9,
                    width: 50
                }), " ", r.createElement("br", null), r.createElement(h, null, r.createElement("strong", null, "Drag and drop files here or"), "  ", r.createElement(u, {
                    callback: t,
                    text: "Select Files"
                })), n && r.createElement(d, null, r.createElement(f, {
                    type: "checkbox",
                    onChange: c,
                    checked: l
                }), r.createElement(p, {
                    onClick: c
                }, "Enable Sprite Sheet Mode [BETA]"))))
            };
            var x = n(60006);
            const y = function(e) {
                var t = e.fileSelectedCallback,
                    n = e.isForAnimatedEmoji,
                    a = e.isPremadeSpriteSheet,
                    i = e.setIsPremadeSpriteSheet,
                    o = e.hintText,
                    l = e.hintTextMuted;
                return r.createElement(r.Fragment, null, r.createElement(x.X2, {
                    className: "tw-grow"
                }, r.createElement(v, {
                    fileCallback: function(e) {
                        t({
                            file: e,
                            isPremadeSpriteSheet: a
                        })
                    },
                    isForAnimatedEmoji: n,
                    setIsPremadeSpriteSheet: i,
                    isPremadeSpriteSheet: a
                })), (o || l) && r.createElement(x.X2, null, r.createElement("div", {
                    className: "tw-mt-6"
                }, o && r.createElement("strong", null, o), o && l && r.createElement("br", null), l && r.createElement("span", {
                    className: "tw-text-light-grey"
                }, l))))
            }
        },
        73423: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(4965),
                a = n(67294),
                i = n(43862);
            var o = (0, r.Z)("div", {
                    target: "evoo10b1"
                })({
                    name: "12a04nj",
                    styles: "display:flex;align-items:center;justify-content:center;height:100%"
                }),
                l = (0, r.Z)("span", {
                    target: "evoo10b0"
                })({
                    name: "1vydhc8",
                    styles: "margin-left:1em;font-size:1.5em;font-weight:bold"
                });
            const c = function(e) {
                var t = e.name,
                    n = void 0 === t ? "emoji" : t;
                return a.createElement(o, null, a.createElement(i.Z, {
                    size: "3x"
                }), a.createElement(l, null, "Uploading your ", n, "..."))
            }
        },
        85042: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(4965),
                a = n(23208),
                i = n(43946),
                o = n(7469),
                l = n(18478),
                c = n(46382),
                s = n(86646),
                m = n(60006),
                u = n(67294);
            var d = (0, r.Z)(c.zx, {
                    target: "eteiwuh4"
                })({
                    name: "1d3mj7z",
                    styles: "width:10em;margin-right:1.5em"
                }),
                p = (0, r.Z)(s.Z, {
                    target: "eteiwuh3"
                })({
                    name: "cbglpv",
                    styles: "margin:0 0.5em"
                }),
                f = (0, r.Z)("input", {
                    target: "eteiwuh2"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                }),
                h = (0, r.Z)(m.X2, {
                    target: "eteiwuh1"
                })({
                    name: "1h1nmc6",
                    styles: "height:3em;width:80%;margin:0 auto;align-items:center;justify-content:center"
                }),
                g = (0, r.Z)("button", {
                    target: "eteiwuh0"
                })({
                    name: "1dw9q8m",
                    styles: "outline:none!important;border:none;background:#064b5c;width:2em;height:2em;margin-left:0.5em;border-radius:100%;display:flex;align-items:center;justify-content:center"
                });
            const w = function(e) {
                var t = e.onReset,
                    n = e.onZoom,
                    r = e.onRotate,
                    c = (e.onFlip, e.zoom);
                return u.createElement(h, null, u.createElement(d, {
                    neutral: !0,
                    onClick: function() {
                        t()
                    }
                }, "Reset"), u.createElement(p, {
                    width: 20,
                    icon: l.Wq
                }), u.createElement(f, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 3,
                    step: .01,
                    value: c,
                    onChange: function(e) {
                        var t = e.target.value;
                        n(t)
                    }
                }), u.createElement(p, {
                    width: 20,
                    icon: o.q9
                }), u.createElement(g, {
                    onClick: function() {
                        return r(-90)
                    }
                }, u.createElement(s.Z, {
                    icon: i.Xn,
                    color: "#1fd1ed",
                    width: 20
                })), u.createElement(g, {
                    onClick: function() {
                        return r(90)
                    }
                }, u.createElement(s.Z, {
                    icon: a.mH,
                    color: "#1fd1ed",
                    width: 20
                })))
            }
        },
        39191: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(15861),
                a = n(54546),
                i = n(4965),
                o = n(64687),
                l = n.n(o),
                c = n(60006),
                s = n(67294),
                m = n(60933),
                u = n(46382),
                d = n(85042),
                p = n(70123);
            var f = (0, i.Z)(c.X2, {
                    target: "e1aautwr2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                h = (0, i.Z)(c.X2, {
                    target: "e1aautwr1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                g = (0, i.Z)("div", {
                    target: "e1aautwr0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const w = function(e) {
                e.completedCallback;
                var t = e.frames,
                    n = e.zoom,
                    r = e.setZoom,
                    i = e.rotation,
                    o = e.setRotation,
                    l = e.crop,
                    c = e.setCrop,
                    u = (e.croppedArea, e.setCroppedArea),
                    w = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    v = s.useState(0),
                    x = (0, a.Z)(v, 2),
                    y = x[0];
                x[1];
                return s.createElement(g, null, s.createElement(f, null, s.createElement(p.ZP, {
                    image: (0, m.Gr)(t[y]),
                    crop: l,
                    zoom: n,
                    aspect: 1,
                    rotation: i,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return c(e)
                    },
                    onCropAreaChange: function(e, t) {
                        u(e), w(t)
                    },
                    onZoomChange: function(e) {
                        return r(e)
                    }
                })), s.createElement(h, null, s.createElement(d.Z, {
                    onRotate: function(e) {
                        o(i + e)
                    },
                    onReset: function() {
                        r(1), o(0), c({
                            x: 0,
                            y: 0
                        }), u({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), w({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        })
                    },
                    onZoom: function(e) {
                        r(e)
                    },
                    zoom: n
                })))
            };
            n(37337);
            const v = function(e) {
                var t = e.onCancel,
                    n = e.onBack,
                    r = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return s.createElement(s.Fragment, null, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-between md:tw-flex-row"
                }, s.createElement("div", {
                    className: "md:tw-mr-4"
                }, s.createElement(u.zx, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), s.createElement("div", {
                    className: "tw-flex tw-flex-col md:tw-flex-row tw-justify-items-start"
                }, s.createElement(u.zx, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    neutral: !0,
                    onClick: n
                }, "Back"), s.createElement(u.zx, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    accent: !0,
                    onClick: r,
                    className: "md:tw-ml-4"
                }, "Next"))))
            };
            var x = (0, i.Z)("div", {
                    target: "e15niawg1"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                y = (0, i.Z)("div", {
                    target: "e15niawg0"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const E = function(e) {
                var t = e.baseImage,
                    n = e.onCompleted,
                    i = e.onCancel,
                    o = e.onBack,
                    c = s.useState(1),
                    u = (0, a.Z)(c, 2),
                    d = u[0],
                    p = u[1],
                    f = s.useState(0),
                    h = (0, a.Z)(f, 2),
                    g = h[0],
                    E = h[1],
                    b = s.useState({
                        x: 0,
                        y: 0
                    }),
                    Z = (0, a.Z)(b, 2),
                    C = Z[0],
                    k = Z[1],
                    S = s.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    j = (0, a.Z)(S, 2),
                    P = j[0],
                    z = j[1],
                    A = s.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    N = (0, a.Z)(A, 2),
                    I = N[0],
                    q = N[1],
                    D = s.useState(null),
                    F = (0, a.Z)(D, 2),
                    R = (F[0], F[1], s.useState("square")),
                    B = (0, a.Z)(R, 2),
                    X = B[0],
                    T = (B[1], function() {
                        var e = (0, r.Z)(l().mark((function e(t) {
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var n = (0, m.Gr)(t),
                                                a = new Image;
                                            a.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    n = t.getContext("2d");
                                                t.width = a.width, t.height = a.height, n.save(), n.translate(t.width / 2, t.height / 2), n.rotate(g * Math.PI / 180), n.translate(-t.width / 2, -t.height / 2), n.drawImage(a, 0, 0), n.restore(), t.toBlob(function() {
                                                    var t = (0, r.Z)(l().mark((function t(n) {
                                                        var r;
                                                        return l().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, m.s3)(n);
                                                                case 2:
                                                                    r = t.sent, e({
                                                                        file: n,
                                                                        image: a,
                                                                        base64: r
                                                                    });
                                                                case 4:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }())
                                            }, a.src = n
                                        })));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    G = function() {
                        var e = (0, r.Z)(l().mark((function e(t) {
                            var n, a;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T(t);
                                    case 2:
                                        return n = e.sent, a = n.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var n = document.createElement("canvas"),
                                                    a = n.getContext("2d");
                                                n.width = I.width, n.height = I.height, a.drawImage(t, -I.x, -I.y), n.toBlob(function() {
                                                    var n = (0, r.Z)(l().mark((function n(r) {
                                                        var a;
                                                        return l().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.next = 2, (0, m.s3)(r);
                                                                case 2:
                                                                    a = n.sent, e({
                                                                        file: r,
                                                                        image: t,
                                                                        base64: a
                                                                    });
                                                                case 4:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })));
                                                    return function(e) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }())
                                            }, t.src = a
                                        })));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    M = function() {
                        var e = (0, r.Z)(l().mark((function e() {
                            var r;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, G(t);
                                    case 2:
                                        r = e.sent, n({
                                            image: r,
                                            mask: X
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return s.createElement(y, null, s.createElement(x, null, s.createElement(w, {
                    frames: [t],
                    completedCallback: n,
                    zoom: d,
                    setZoom: p,
                    rotation: g,
                    setRotation: E,
                    crop: C,
                    setCrop: k,
                    croppedArea: P,
                    setCroppedArea: z,
                    croppedAreaPixels: I,
                    setCroppedAreaPixels: q
                })), s.createElement(v, {
                    onCancel: i,
                    onBack: function() {
                        o()
                    },
                    onNext: M
                }))
            }
        }
    }
]);
//# sourceMappingURL=f349544f66099939d1b356614defb8df9fdef3487ab02908b9d478c9cfcc9121.js.map