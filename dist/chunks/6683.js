"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6683], {
        83551(e, t, n) {
            n.d(t, {
                A: () => x
            });
            var r = n(96540),
                a = (n(69815), n(15902)),
                i = n(70129),
                o = n(53967),
                l = n(15033),
                c = n(79929);
            var s = (0, i.A)(l.M2, {
                    target: "e14fnvay1"
                })({
                    name: "4j0agp",
                    styles: "margin-right:0.3em"
                }),
                m = (0, i.A)("input", {
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
                }), r.createElement(l.$n, {
                    accent: !0,
                    containerStyles: "width: 8em; height: 2em; display: inline;",
                    onClick: function() {
                        a.current.click()
                    }
                }, r.createElement(s, {
                    color: "#6ae3f9",
                    icon: c.ao,
                    width: 15
                }), n))
            };
            var d = (0, i.A)("div", {
                    target: "e1ytxlu95"
                })({
                    name: "zl1inp",
                    styles: "display:flex;justify-content:center"
                }),
                f = (0, i.A)("div", {
                    target: "e1ytxlu94"
                })({
                    name: "yq7cq8",
                    styles: "font-style:italic;margin-left:1em;cursor:pointer;user-select:none"
                }),
                p = (0, i.A)("input", {
                    target: "e1ytxlu93"
                })(""),
                h = (0, i.A)("div", {
                    target: "e1ytxlu92"
                })({
                    name: "1gpzra0",
                    styles: "margin-bottom:1em"
                }),
                g = (0, i.A)(l.M2, {
                    target: "e1ytxlu91"
                })({
                    name: "1iy47er",
                    styles: "padding-bottom:0.3em"
                }),
                w = (0, i.A)("div", {
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
                return window.addEventListener("dragover", function(e) {
                    e.preventDefault()
                }, !1), window.addEventListener("drop", function(e) {
                    e.preventDefault()
                }, !1), r.createElement(w, {
                    onDrop: function(e) {
                        var n;
                        e.stopPropagation(), e.preventDefault();
                        var r = null === (n = e.dataTransfer) || void 0 === n ? void 0 : n.files;
                        if (void 0 === r) return console.error("Drag & Drop operation failed!", e);
                        var i = (0, a.A)(r, 1)[0];
                        return void 0 !== i ? t(i) : console.error("Drag & Drop operation failed!", e)
                    }
                }, r.createElement("div", null, r.createElement(g, {
                    color: "#737373",
                    icon: o.yv,
                    width: 50
                }), " ", r.createElement("br", null), r.createElement(h, null, r.createElement("strong", null, "Drag and drop files here or"), "  ", r.createElement(u, {
                    callback: t,
                    text: "Select Files"
                })), n && r.createElement(d, null, r.createElement(p, {
                    type: "checkbox",
                    onChange: c,
                    checked: l
                }), r.createElement(f, {
                    onClick: c
                }, "Enable Sprite Sheet Mode [BETA]"))))
            };
            var y = n(24751);
            const x = function(e) {
                var t = e.fileSelectedCallback,
                    n = e.isForAnimatedEmoji,
                    a = e.isPremadeSpriteSheet,
                    i = e.setIsPremadeSpriteSheet,
                    o = e.hintText,
                    l = e.hintTextMuted;
                return r.createElement(r.Fragment, null, r.createElement(y.fI, {
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
                })), (o || l) && r.createElement(y.fI, null, r.createElement("div", {
                    className: "tw-mt-6"
                }, o && r.createElement("strong", null, o), o && l && r.createElement("br", null), l && r.createElement("span", {
                    className: "tw-text-light-grey"
                }, l))))
            }
        },
        79955(e, t, n) {
            n.d(t, {
                A: () => c
            });
            var r = n(70129),
                a = n(96540),
                i = n(25538);
            var o = (0, r.A)("div", {
                    target: "evoo10b1"
                })({
                    name: "12a04nj",
                    styles: "display:flex;align-items:center;justify-content:center;height:100%"
                }),
                l = (0, r.A)("span", {
                    target: "evoo10b0"
                })({
                    name: "1vydhc8",
                    styles: "margin-left:1em;font-size:1.5em;font-weight:bold"
                });
            const c = function(e) {
                var t = e.name,
                    n = void 0 === t ? "emoji" : t;
                return a.createElement(o, null, a.createElement(i.A, {
                    size: "3x"
                }), a.createElement(l, null, "Uploading your ", n, "..."))
            }
        },
        44076(e, t, n) {
            n.d(t, {
                A: () => w
            });
            var r = n(70129),
                a = n(33326),
                i = n(58095),
                o = n(86558),
                l = n(74292),
                c = n(15033),
                s = n(6324),
                m = n(24751),
                u = n(96540);
            var d = (0, r.A)(c.$n, {
                    target: "eteiwuh4"
                })({
                    name: "1d3mj7z",
                    styles: "width:10em;margin-right:1.5em"
                }),
                f = (0, r.A)(s.A, {
                    target: "eteiwuh3"
                })({
                    name: "cbglpv",
                    styles: "margin:0 0.5em"
                }),
                p = (0, r.A)("input", {
                    target: "eteiwuh2"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                }),
                h = (0, r.A)(m.fI, {
                    target: "eteiwuh1"
                })({
                    name: "1h1nmc6",
                    styles: "height:3em;width:80%;margin:0 auto;align-items:center;justify-content:center"
                }),
                g = (0, r.A)("button", {
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
                }, "Reset"), u.createElement(f, {
                    width: 20,
                    icon: l.rV
                }), u.createElement(p, {
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
                }), u.createElement(f, {
                    width: 20,
                    icon: o.bM
                }), u.createElement(g, {
                    onClick: function() {
                        return r(-90)
                    }
                }, u.createElement(s.A, {
                    icon: i.ub,
                    color: "#1fd1ed",
                    width: 20
                })), u.createElement(g, {
                    onClick: function() {
                        return r(90)
                    }
                }, u.createElement(s.A, {
                    icon: a.lL,
                    color: "#1fd1ed",
                    width: 20
                })))
            }
        },
        48847(e, t, n) {
            n.d(t, {
                A: () => E
            });
            var r = n(10467),
                a = n(15902),
                i = n(70129),
                o = n(54756),
                l = n.n(o),
                c = n(24751),
                s = n(96540),
                m = n(85253),
                u = n(15033),
                d = n(44076),
                f = n(41952);
            var p = (0, i.A)(c.fI, {
                    target: "e1aautwr2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                h = (0, i.A)(c.fI, {
                    target: "e1aautwr1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                g = (0, i.A)("div", {
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
                    y = (0, a.A)(v, 2),
                    x = y[0];
                y[1];
                return s.createElement(g, null, s.createElement(p, null, s.createElement(f.Ay, {
                    image: (0, m.ID)(t[x]),
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
                })), s.createElement(h, null, s.createElement(d.A, {
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
            n(69815);
            const v = function(e) {
                var t = e.onCancel,
                    n = e.onBack,
                    r = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return s.createElement(s.Fragment, null, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-between md:tw-flex-row"
                }, s.createElement("div", {
                    className: "md:tw-mr-4"
                }, s.createElement(u.$n, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), s.createElement("div", {
                    className: "tw-flex tw-flex-col md:tw-flex-row tw-justify-items-start"
                }, s.createElement(u.$n, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    neutral: !0,
                    onClick: n
                }, "Back"), s.createElement(u.$n, {
                    containerClasses: "tw-w-full tw-mb-4 md:tw-w-[200px] md:tw-mb-0",
                    containerStyles: a,
                    accent: !0,
                    onClick: r,
                    className: "md:tw-ml-4"
                }, "Next"))))
            };
            var y = (0, i.A)("div", {
                    target: "e15niawg1"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                x = (0, i.A)("div", {
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
                    c = e.maxImageDimension,
                    u = void 0 === c ? 2048 : c,
                    d = s.useState(1),
                    f = (0, a.A)(d, 2),
                    p = f[0],
                    h = f[1],
                    g = s.useState(0),
                    E = (0, a.A)(g, 2),
                    A = E[0],
                    b = E[1],
                    C = s.useState({
                        x: 0,
                        y: 0
                    }),
                    k = (0, a.A)(C, 2),
                    S = k[0],
                    I = k[1],
                    j = s.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    P = (0, a.A)(j, 2),
                    D = P[0],
                    z = P[1],
                    N = s.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    M = (0, a.A)(N, 2),
                    F = M[0],
                    R = M[1],
                    q = s.useState(null),
                    B = (0, a.A)(q, 2),
                    Z = (B[0], B[1], s.useState("square")),
                    $ = (0, a.A)(Z, 2),
                    T = $[0],
                    L = ($[1], function() {
                        var e = (0, r.A)(l().mark(function e(t) {
                            return l().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise(function(e) {
                                            var n = (0, m.ID)(t),
                                                a = new Image;
                                            a.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    n = t.getContext("2d");
                                                t.width = a.width, t.height = a.height, n.save(), n.translate(t.width / 2, t.height / 2), n.rotate(A * Math.PI / 180), n.translate(-t.width / 2, -t.height / 2), n.drawImage(a, 0, 0), n.restore(), t.toBlob(function() {
                                                    var t = (0, r.A)(l().mark(function t(n) {
                                                        var r;
                                                        return l().wrap(function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, m.nk)(n);
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
                                                        }, t)
                                                    }));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }())
                                            }, a.src = n
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
                    }()),
                    _ = function(e) {
                        var t = e.width,
                            n = e.height;
                        if (t <= u && n <= u) return e;
                        var r = Math.min(u / t, u / n),
                            a = document.createElement("canvas");
                        a.width = Math.round(t * r), a.height = Math.round(n * r);
                        var i = a.getContext("2d");
                        return i.imageSmoothingQuality = "high", i.drawImage(e, 0, 0, a.width, a.height), a
                    },
                    G = function() {
                        var e = (0, r.A)(l().mark(function e(t) {
                            var n, a;
                            return l().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, L(t);
                                    case 2:
                                        return n = e.sent, a = n.base64, e.abrupt("return", new Promise(function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var n = document.createElement("canvas"),
                                                    a = n.getContext("2d");
                                                n.width = F.width, n.height = F.height, a.drawImage(t, -F.x, -F.y), _(n).toBlob(function() {
                                                    var n = (0, r.A)(l().mark(function n(r) {
                                                        var a;
                                                        return l().wrap(function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.next = 2, (0, m.nk)(r);
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
                                                        }, n)
                                                    }));
                                                    return function(e) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }())
                                            }, t.src = a
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        var e = (0, r.A)(l().mark(function e() {
                            var r;
                            return l().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, G(t);
                                    case 2:
                                        r = e.sent, n({
                                            image: r,
                                            mask: T
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return s.createElement(x, null, s.createElement(y, null, s.createElement(w, {
                    frames: [t],
                    completedCallback: n,
                    zoom: p,
                    setZoom: h,
                    rotation: A,
                    setRotation: b,
                    crop: S,
                    setCrop: I,
                    croppedArea: D,
                    setCroppedArea: z,
                    croppedAreaPixels: F,
                    setCroppedAreaPixels: R
                })), s.createElement(v, {
                    onCancel: i,
                    onBack: function() {
                        o()
                    },
                    onNext: Q
                }))
            }
        }
    }
]);
//# sourceMappingURL=c746e7465ccfc30d61cc583d5cac09a2c143fd1ec6d746ff340671ba7b1c2e2f.js.map