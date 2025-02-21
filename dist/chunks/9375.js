"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9375], {
        59375: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => be
            });
            var n = r(42138),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                s = r(59545),
                l = r(2723),
                c = r(76553),
                u = r(64687),
                m = r.n(u),
                f = r(67294),
                d = r(32981),
                p = r(79655),
                g = r(83505),
                h = r(41255),
                v = r(12227),
                x = r(14411),
                w = r(5513),
                y = r(34984),
                b = r(22202),
                E = r(12752),
                k = r(78890),
                Z = r(71002),
                S = r(78076),
                I = r(31541),
                C = r(22497),
                P = r(60933),
                N = r(64258),
                B = r(73423),
                _ = r(60006),
                z = {
                    Aura: "Preview_B2-Aura.gif",
                    Bats: "Preview_B2-Fall_Bats.gif",
                    Bees: "Preview_B2-Bees.gif",
                    Bounce: "Preview_B2-Bounce.gif",
                    Cloud: "Preview_B2-Cloud.gif",
                    Confetti: "Preview_B2-Winter_Confetti.gif",
                    Crying: "Preview_B2-Crying.gif",
                    Dislike: "Preview_B2-Dislike.gif",
                    Fire: "Preview_B2-Fire.gif",
                    Idea: "Preview_B2-Idea.gif",
                    Lasers: "Preview_B2-Lasers.gif",
                    Like: "Preview_B2-Like.gif",
                    Magnet: "Preview_B2-Magnet.gif",
                    Mistletoe: "Preview_B2-Winter_Mistletoe.gif",
                    Money: "Preview_B2-Money.gif",
                    Noise: "Preview_B2-Noise.gif",
                    Orbit: "Preview_B2-Orbit.gif",
                    Pizza: "Preview_B2-Pizza.gif",
                    Rain: "Preview_B2-Rain.gif",
                    Rotate: "Preview_B2-Rotate.gif",
                    Shake: "Preview_B2-Shake.gif",
                    Snow: "Preview_B2-Spin.gif",
                    Snowball: "Preview_B2-Winter_Snowball.gif",
                    Spin: "Preview_B2-Spin.gif",
                    Splash: "Preview_B2-SummerSplash.gif",
                    Stop: "Preview_B2-Stop.gif",
                    ZZZ: "Preview_B2-ZZZ.gif"
                },
                j = "CROP",
                U = "STYLE";
            var T = (0, o.Z)("div", {
                    target: "elhkzni1"
                })({
                    name: "bp2yox",
                    styles: "flex:50%"
                }),
                A = (0, o.Z)("div", {
                    target: "elhkzni0"
                })({
                    name: "4kj7g6",
                    styles: "flex:50%;display:flex;justify-content:right"
                });
            const R = function(e) {
                var t = e.onCancel,
                    r = e.onBack,
                    n = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return f.createElement(f.Fragment, null, f.createElement(_.X2, null, f.createElement(T, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), f.createElement(A, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: r
                }, "Back"), f.createElement(x.zx, {
                    containerStyles: "".concat(a, "margin-left: 1em;"),
                    accent: !0,
                    onClick: n
                }, "Next"))))
            };
            var q = r(85042),
                F = r(70123);
            var M = (0, o.Z)(_.X2, {
                    target: "e1f7ou1h2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                V = (0, o.Z)(_.X2, {
                    target: "e1f7ou1h1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                O = (0, o.Z)("div", {
                    target: "e1f7ou1h0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const L = function(e) {
                e.completedCallback;
                var t = e.frames,
                    r = e.zoom,
                    n = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    s = e.crop,
                    l = e.setCrop,
                    c = (e.croppedArea, e.setCroppedArea),
                    u = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    m = f.useState(0),
                    d = (0, i.Z)(m, 2),
                    p = d[0];
                d[1];
                return f.createElement(O, null, f.createElement(M, null, f.createElement(F.ZP, {
                    image: (0, P.Gr)(t[p]),
                    crop: s,
                    zoom: r,
                    aspect: 1,
                    rotation: a,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return l(e)
                    },
                    onCropAreaChange: function(e, t) {
                        c(e), u(t)
                    },
                    onZoomChange: function(e) {
                        return n(e)
                    }
                })), f.createElement(V, null, f.createElement(q.Z, {
                    onRotate: function(e) {
                        o(a + e)
                    },
                    onReset: function() {
                        n(1), o(0), l({
                            x: 0,
                            y: 0
                        }), c({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), u({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        })
                    },
                    onZoom: function(e) {
                        n(e)
                    },
                    zoom: r
                })))
            };
            var Y = r(81192);
            var G = (0, o.Z)("div", {
                    target: "e1a4r75r7"
                })({
                    name: "wrqpcr",
                    styles: "height:30em;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:3em;background-color:#0a0a0d"
                }),
                X = (0, o.Z)("div", {
                    target: "e1a4r75r6"
                })({
                    name: "1muh860",
                    styles: "font-size:12pt;font-weight:bold;margin-bottom:0.5em"
                }),
                $ = (0, o.Z)("div", {
                    target: "e1a4r75r5"
                })({
                    name: "btw7q7",
                    styles: "width:260px;height:260px;margin-bottom:1em;border:5px solid #555;border-radius:20px"
                }),
                D = (0, o.Z)("div", {
                    target: "e1a4r75r4"
                })({
                    name: "5y4g3n",
                    styles: "display:flex;flex-direction:column;row-gap:1em"
                }),
                W = (0, o.Z)("div", {
                    target: "e1a4r75r3"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                J = (0, o.Z)("div", {
                    target: "e1a4r75r2"
                })({
                    name: "9zele7",
                    styles: "width:4em;text-align:right;margin-right:1em"
                }),
                K = (0, o.Z)("div", {
                    target: "e1a4r75r1"
                })({
                    name: "1mwkkc",
                    styles: "margin-left:1em"
                }),
                H = (0, o.Z)("input", {
                    target: "e1a4r75r0"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                });
            const Q = function(e) {
                var t = e.spriteSheet,
                    r = e.frameCount,
                    n = e.setFrameCount,
                    a = e.frameRate,
                    i = e.setFrameRate;
                return f.createElement(f.Fragment, null, f.createElement(X, null, "Set the frame count and frame rate for your sprite sheet."), f.createElement(G, null, f.createElement($, null, f.createElement(Y.Z, {
                    spriteSheet: t,
                    frameCount: r,
                    frameRate: a,
                    size: 250
                })), f.createElement(D, null, f.createElement(W, null, f.createElement(J, null, "Frames"), f.createElement(H, {
                    type: "range",
                    className: "sliderInput",
                    min: 2,
                    max: 64,
                    step: 1,
                    value: r,
                    onChange: function(e) {
                        n(e.target.value)
                    }
                }), f.createElement(K, null, r, " / 64")), f.createElement(W, null, f.createElement(J, null, "FPS"), f.createElement(H, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 64,
                    step: 1,
                    value: a,
                    onChange: function(e) {
                        i(e.target.value)
                    }
                }), f.createElement(K, null, a, " / 64")))))
            };
            var ee = function(e) {
                    return "https://assets.vrchat.com/www/images/emoji-previews/".concat(z[e])
                },
                te = (0, o.Z)("span", {
                    target: "e1kj3uqh4"
                })({
                    name: "cmlg08",
                    styles: "font-size:1.2em;font-weight:bold"
                }),
                re = (0, o.Z)("div", {
                    target: "e1kj3uqh3"
                })({
                    name: "1ac844z",
                    styles: "display:flex;flex-direction:column;height:100%;align-items:center"
                }),
                ne = (0, o.Z)("div", {
                    target: "e1kj3uqh2"
                })({
                    name: "q18sga",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-bottom:1em;column-gap:0.3em;row-gap:1em"
                }),
                ae = (0, o.Z)("img", {
                    target: "e1kj3uqh1"
                })({
                    name: "vsv6y8",
                    styles: "width:300px;margin-bottom:2em"
                }),
                ie = (0, o.Z)(x.zx, {
                    target: "e1kj3uqh0"
                })({
                    name: "1dpyl9g",
                    styles: "min-width:3em"
                });
            const oe = function(e) {
                var t = e.style,
                    r = e.setStyle;
                return f.createElement(re, null, f.createElement(te, null, t), f.createElement(ae, {
                    src: ee(t)
                }), f.createElement(ne, null, Object.keys(z).map((function(e) {
                    return e === t ? f.createElement(ie, {
                        key: e
                    }, e) : f.createElement(ie, {
                        neutral: !0,
                        key: e,
                        onClick: function() {
                            return r(e)
                        }
                    }, e)
                }))))
            };
            var se = (0, o.Z)("div", {
                    target: "e1kgcgv31"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                le = (0, o.Z)("div", {
                    target: "e1kgcgv30"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const ce = function(e) {
                var t = e.frames,
                    r = e.onCompleted,
                    n = e.onCancel,
                    o = e.onBack,
                    s = e.isPremadeSpriteSheet,
                    l = e.defaultParameters,
                    c = f.useState(j),
                    u = (0, i.Z)(c, 2),
                    d = u[0],
                    p = u[1],
                    g = f.useState(1),
                    h = (0, i.Z)(g, 2),
                    v = h[0],
                    x = h[1],
                    w = f.useState(0),
                    y = (0, i.Z)(w, 2),
                    b = y[0],
                    E = y[1],
                    k = f.useState({
                        x: 0,
                        y: 0
                    }),
                    Z = (0, i.Z)(k, 2),
                    S = Z[0],
                    I = Z[1],
                    C = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    N = (0, i.Z)(C, 2),
                    B = N[0],
                    _ = N[1],
                    z = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    T = (0, i.Z)(z, 2),
                    A = T[0],
                    q = T[1],
                    F = f.useState(null),
                    M = (0, i.Z)(F, 2),
                    V = M[0],
                    O = M[1],
                    Y = f.useState(1),
                    G = (0, i.Z)(Y, 2),
                    X = G[0],
                    $ = G[1],
                    D = f.useState(1),
                    W = (0, i.Z)(D, 2),
                    J = W[0],
                    K = W[1],
                    H = f.useState("Aura"),
                    ee = (0, i.Z)(H, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = f.useState("square"),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    ce = (ae[1], function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var r = (0, P.Gr)(t),
                                                n = new Image;
                                            n.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    r = t.getContext("2d");
                                                t.width = n.width, t.height = n.height, r.save(), r.translate(t.width / 2, t.height / 2), r.rotate(b * Math.PI / 180), r.translate(-t.width / 2, -t.height / 2), r.drawImage(n, 0, 0), r.restore(), t.toBlob(function() {
                                                    var t = (0, a.Z)(m().mark((function t(r) {
                                                        var a;
                                                        return m().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, P.s3)(r);
                                                                case 2:
                                                                    a = t.sent, e({
                                                                        file: r,
                                                                        image: n,
                                                                        base64: a
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
                                            }, n.src = r
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
                    ue = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var r, n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ce(t);
                                    case 2:
                                        return r = e.sent, n = r.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var r = document.createElement("canvas"),
                                                    n = r.getContext("2d");
                                                r.width = A.width, r.height = A.height, n.drawImage(t, -A.x, -A.y), r.toBlob(function() {
                                                    var r = (0, a.Z)(m().mark((function r(n) {
                                                        var a;
                                                        return m().wrap((function(r) {
                                                            for (;;) switch (r.prev = r.next) {
                                                                case 0:
                                                                    return r.next = 2, (0, P.s3)(n);
                                                                case 2:
                                                                    a = r.sent, e({
                                                                        file: n,
                                                                        image: t,
                                                                        base64: a
                                                                    });
                                                                case 4:
                                                                case "end":
                                                                    return r.stop()
                                                            }
                                                        }), r)
                                                    })));
                                                    return function(e) {
                                                        return r.apply(this, arguments)
                                                    }
                                                }())
                                            }, t.src = n
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
                    me = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (d !== j || s) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, ue(t[0]);
                                    case 3:
                                        n = e.sent, O(n), p(U), e.next = 9;
                                        break;
                                    case 8:
                                        d === j && s ? p(U) : d === U && r({
                                            image: null != V ? V : t[0],
                                            style: te,
                                            mask: ie,
                                            frameCount: X,
                                            frameRate: J
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return f.useEffect((function() {
                    s && ($((null == l ? void 0 : l.frameCount) || 4), K((null == l ? void 0 : l.frameRate) || 15))
                }), [s]), f.createElement(le, null, f.createElement(se, null, d === j && !s && f.createElement(L, {
                    frames: t,
                    completedCallback: r,
                    zoom: v,
                    setZoom: x,
                    rotation: b,
                    setRotation: E,
                    crop: S,
                    setCrop: I,
                    croppedArea: B,
                    setCroppedArea: _,
                    croppedAreaPixels: A,
                    setCroppedAreaPixels: q
                }), d === j && s && f.createElement(Q, {
                    spriteSheet: t[0],
                    frameCount: X,
                    setFrameCount: $,
                    frameRate: J,
                    setFrameRate: K
                }), d === U && f.createElement(oe, {
                    style: te,
                    setStyle: re
                })), f.createElement(R, {
                    onCancel: n,
                    onBack: function() {
                        o()
                    },
                    onNext: me
                }))
            };

            function ue(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return me(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return me(e, t)
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
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var fe = function(e) {
                    return new Promise((function(t, r) {
                        if (!(0, P.sY)(e)) return r("Tried to extract GIF frames from non-GIF file!");
                        var n = "".substring("".lastIndexOf("/") + 1);
                        I.Z.run({
                            input: [{
                                file: "",
                                name: n
                            }],
                            command: ["-e -U ".concat(n, " -o /out/").concat(n)]
                        }).then((function(e) {
                            if (void 0 === e) throw new Error("GIF explosion gave undefined output?");
                            if (0 === e.length) throw new Error("GIF explosion gave no output frames.");
                            var r, n = [],
                                a = ue(e);
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var i = r.value;
                                    n.push(i)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            t(n)
                        }))
                    }))
                },
                de = (0, o.Z)("div", {
                    target: "e6g0jp60"
                })({
                    name: "dm9b0z",
                    styles: "width:100%;min-height:30em;overflow:hidden"
                });
            const pe = function(e) {
                var t = e.onClose,
                    r = f.useState(null),
                    n = (0, i.Z)(r, 2),
                    o = n[0],
                    s = n[1],
                    l = f.useState(!1),
                    c = (0, i.Z)(l, 2),
                    u = c[0],
                    p = c[1],
                    g = (0, h.Yh)(),
                    v = (0, i.Z)(g, 2),
                    x = v[0],
                    w = v[1],
                    y = w.isLoading,
                    b = w.isSuccess,
                    E = (w.isError, w.error),
                    k = (0, d.I0)(),
                    I = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        k((0, N.d)({
                            title: t,
                            icon: S.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    _ = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var r, n, a, i, o;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, P.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, i = n.width > 1024 || n.height > 1024, o = 1024 === n.width && 1024 === n.height, !a) {
                                            e.next = 10;
                                            break
                                        }
                                        return I({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 10:
                                        if (!i) {
                                            e.next = 13;
                                            break
                                        }
                                        return I({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 1024x1024.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 13:
                                        if (!u || o) {
                                            e.next = 16;
                                            break
                                        }
                                        return I({
                                            title: "Invalid Size",
                                            message: "Pre-made spritesheets must be exactly 1024x1024",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 16:
                                        return e.abrupt("return", !0);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    z = function(e) {
                        var t = e.value,
                            r = e.min,
                            n = e.max,
                            a = e.defaultValue;
                        return t > n || t < r ? a : t
                    },
                    j = function(e) {
                        var t = e.file.name,
                            r = {
                                frameCount: null,
                                frameRate: null
                            },
                            n = t.match(/_(\d{1,2})frame/),
                            a = t.match(/_(\d{1,2})fps/);
                        return null !== n && (r.frameCount = z({
                            value: parseInt(n[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 4
                        })), null !== a && (r.frameRate = z({
                            value: parseInt(a[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 15
                        })), r
                    },
                    U = function() {
                        var e = (0, a.Z)(m().mark((function e(r) {
                            var n, a, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, P.DS)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", I({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, _({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if (a = [n], !(0, P.sY)(n)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, fe(n);
                                    case 12:
                                        a = e.sent;
                                    case 13:
                                        i = j({
                                            file: n
                                        }), s(f.createElement(ce, {
                                            isPremadeSpriteSheet: u,
                                            frames: a,
                                            defaultParameters: i,
                                            onCompleted: T,
                                            onCancel: t,
                                            onBack: function() {
                                                return s(null)
                                            }
                                        }));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    T = function(e) {
                        var t = e.image,
                            r = e.frameCount,
                            n = void 0 === r ? 1 : r,
                            a = e.frameRate,
                            i = void 0 === a ? 1 : a,
                            o = e.style,
                            s = e.mask,
                            l = void 0 === s ? "square" : s;
                        x({
                            tag: n > 1 ? "emojianimated" : "emoji",
                            file: t.file || t,
                            frames: n,
                            framesOverTime: i,
                            animationStyle: o.toLowerCase(),
                            maskTag: l
                        })
                    };
                return f.useEffect((function() {
                    if (b) I({
                        title: "Upload Successful!",
                        message: "Your emoji was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== E) {
                        var e = E;
                        "object" === (0, Z.Z)(e) && (e = e.message || JSON.stringify(e)), I({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [b, E]), f.createElement(de, {
                    className: "tw-flex tw-flex-col"
                }, y && f.createElement(B.Z, {
                    name: "emoji"
                }), !y && (o || f.createElement(C.Z, {
                    fileSelectedCallback: function(e) {
                        return U(e)
                    },
                    isForAnimatedEmoji: !0,
                    setIsPremadeSpriteSheet: p,
                    isPremadeSpriteSheet: u,
                    hintText: "Upload a static emoji with a single image, or use a sprite sheet to create an animated emoji.",
                    hintTextMuted: f.createElement(f.Fragment, null, "A sprite sheet should be a 1024x1024 image with square frames in a uniform grid, ordered left to right, then top to bottom.", f.createElement("br", null), "You can preset animation values in advance using the file name, like so: ", f.createElement("em", null, "CoolEmoji_14frames_10fps.png"))
                })))
            };
            var ge = r(39191);
            var he = (0, o.Z)("div", {
                target: "e1et7e2k0"
            })({
                name: "dm9b0z",
                styles: "width:100%;min-height:30em;overflow:hidden"
            });
            const ve = function(e) {
                var t = e.onClose,
                    r = f.useState(null),
                    n = (0, i.Z)(r, 2),
                    o = n[0],
                    s = n[1],
                    l = (0, h.Yh)(),
                    c = (0, i.Z)(l, 2),
                    u = c[0],
                    p = c[1],
                    g = p.isLoading,
                    v = p.isSuccess,
                    x = (p.isError, p.error),
                    w = (0, d.I0)(),
                    y = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        w((0, N.d)({
                            title: t,
                            icon: S.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    b = function() {
                        var e = (0, a.Z)(m().mark((function e(r) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, P.DS)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", y({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, E({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        s(f.createElement(ge.Z, {
                                            baseImage: n,
                                            onCompleted: k,
                                            onCancel: t,
                                            onBack: function() {
                                                return s(null)
                                            }
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var r, n, a, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, P.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, i = n.width > 1024 || n.height > 1024, !a) {
                                            e.next = 9;
                                            break
                                        }
                                        return y({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 9:
                                        if (!i) {
                                            e.next = 12;
                                            break
                                        }
                                        return y({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 1024x1024.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 12:
                                        return e.abrupt("return", !0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    k = function(e) {
                        var t = e.image,
                            r = e.mask,
                            n = void 0 === r ? "square" : r;
                        console.log("image", t), u({
                            file: t.file || t,
                            tag: "sticker",
                            maskTag: n
                        })
                    };
                return f.useEffect((function() {
                    if (v) y({
                        title: "Upload Successful!",
                        message: "Your sticker was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== x) {
                        var e = x;
                        "object" === (0, Z.Z)(e) && (e = e.message || JSON.stringify(e)), y({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [v, x]), f.createElement(he, {
                    className: "tw-flex tw-flex-col"
                }, g && f.createElement(B.Z, {
                    name: "sticker"
                }), !g && (o || f.createElement(C.Z, {
                    fileSelectedCallback: function(e) {
                        return b(e)
                    },
                    hintText: "Stickers should be a square image between 64x64 and 1024x1024.",
                    hintTextMuted: f.createElement(f.Fragment, null, "For best results, use a power-of-two size (64, 128, 256, 512, or 1024 pixels).", f.createElement("br", null), "You can also create stickers inside VRChat using the camera!")
                })))
            };
            var xe = r(50347),
                we = r(74444),
                ye = r(39908);
            const be = function(e) {
                var t, r, o = e.userId,
                    u = e.isAdminView,
                    Z = e.isSelector,
                    S = void 0 !== Z && Z,
                    I = e.selectedCallback,
                    C = void 0 === I ? null : I,
                    P = e.activeTab,
                    N = void 0 === P ? "icons" : P,
                    B = "photos" === N,
                    _ = "icons" === N,
                    z = "emoji" === N,
                    j = "stickers" === N,
                    U = (0, d.I0)(),
                    T = (0, d.v9)((function(e) {
                        return e.user.photoList
                    })),
                    A = (0, d.v9)((function(e) {
                        return e.user.iconList
                    })),
                    R = f.useState([]),
                    q = (0, i.Z)(R, 2),
                    F = q[0],
                    M = q[1],
                    V = f.useState(!1),
                    O = (0, i.Z)(V, 2),
                    L = O[0],
                    Y = O[1],
                    G = f.useState(!1),
                    X = (0, i.Z)(G, 2),
                    $ = X[0],
                    D = X[1],
                    W = f.useState(!1),
                    J = (0, i.Z)(W, 2),
                    K = J[0],
                    H = J[1],
                    Q = f.useState(null),
                    ee = (0, i.Z)(Q, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = f.useState(!1),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    oe = ae[1],
                    se = f.useState(!1),
                    le = (0, i.Z)(se, 2),
                    ce = le[0],
                    ue = le[1],
                    me = (0, E.Tu)(),
                    fe = me.user,
                    de = me.fetchUser,
                    ge = (0, E.v$)(o).user,
                    he = (0, b.q7)({
                        condensed: !0
                    }).data,
                    be = void 0 === he ? [] : he,
                    Ce = (0, h.eV)({
                        userId: o
                    }).data,
                    Pe = (0, h._h)({
                        userId: o
                    }).data,
                    Ne = (0, h.g3)(),
                    Be = (0, i.Z)(Ne, 2),
                    _e = Be[0],
                    ze = Be[1];
                ze.isLoading, ze.isSuccess, ze.isError, ze.error;
                f.useEffect((function() {
                    var e = u ? o : "";
                    U((0, y.wP)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    })), U((0, y.wu)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    }))
                }), [o, u]);
                var je = function() {
                        var e = (0, a.Z)(m().mark((function e(t, r) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!z && !j) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = (0, v.qm)({
                                            fileId: t,
                                            versionNumber: r
                                        }), e.next = 5, U((0, w._W)({
                                            userId: fe.id,
                                            data: B ? {
                                                profilePicOverride: n
                                            } : {
                                                userIcon: n
                                            }
                                        }));
                                    case 5:
                                        de();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ue = function(e, t) {
                        re(t), C(e, t)
                    },
                    Te = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (M([t].concat((0, n.Z)(F))), !B) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, U((0, y.JJ)({
                                            fileId: t
                                        }));
                                    case 4:
                                        return e.next = 6, U((0, y.oI)({
                                            fileId: t
                                        }));
                                    case 6:
                                    case 13:
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 8:
                                        if (!_) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11, U((0, y.ap)({
                                            fileId: t
                                        }));
                                    case 11:
                                        return e.next = 13, U((0, y.NB)({
                                            fileId: t
                                        }));
                                    case 15:
                                        if (!z) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, _e({
                                            fileId: t,
                                            tag: "emoji",
                                            userId: o
                                        });
                                    case 20:
                                        if (!j) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 23, _e({
                                            fileId: t,
                                            tag: "sticker",
                                            userId: o
                                        });
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ae = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, qe();
                                    case 2:
                                        return e.next = 4, Promise.all(T.map(function() {
                                            var e = (0, a.Z)(m().mark((function e(t) {
                                                return m().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", Te(t.id));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Re = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, U((0, y.dm)({
                                            userId: o,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 3:
                                        D(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, U((0, w._W)({
                                            userId: fe.id,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 8:
                                        de();
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
                    qe = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, U((0, y.dm)({
                                            userId: o,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 3:
                                        Y(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, U((0, w._W)({
                                            userId: fe.id,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 8:
                                        de();
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
                    Fe = T.map((function(e) {
                        var t, r = Math.max.apply(Math, (0, n.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === r
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: r
                        }
                    })),
                    Me = A.map((function(e) {
                        var t, r = Math.max.apply(Math, (0, n.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === r
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: r
                        }
                    })),
                    Ve = (Ce || []).map((function(e) {
                        var t, r = Math.max.apply(Math, (0, n.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === r
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: r,
                            maskTag: e.maskTag,
                            isAnimated: e.tags.includes("animated"),
                            frameCount: e.frames,
                            frameRate: e.framesOverTime
                        }
                    })),
                    Oe = (Pe || []).map((function(e) {
                        var t, r = Math.max.apply(Math, (0, n.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === r
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: r,
                            maskTag: e.maskTag
                        }
                    })),
                    Le = Me.length,
                    Ye = Fe.length,
                    Ge = Ve.length,
                    Xe = Oe.length,
                    $e = u ? ge.profilePicOverride : fe.profilePicOverride;
                L && ($e = "");
                var De = u ? ge.userIcon : fe.userIcon;
                $ && (De = "");
                var We = u ? "64" : be["permission-user-gallery"],
                    Je = We <= Ye,
                    Ke = u ? "64" : be["permission-user-icons"],
                    He = Ke <= Le,
                    Qe = (null === (t = be["permission-user-emoji"]) || void 0 === t ? void 0 : t.max) || 9,
                    et = (null === (r = be["permission-user-stickers"]) || void 0 === r ? void 0 : r.max) || 9,
                    tt = Qe <= Ge,
                    rt = et <= Xe,
                    nt = u ? "".concat(ge.displayName, "'s") : "Your",
                    at = !u,
                    it = S && te,
                    ot = ($e && B || De && !B) && !S;
                if (K) switch (N) {
                    case "photos":
                        return f.createElement(k.default, {
                            isSelector: S,
                            successCallback: function() {
                                H(!1), U((0, y.wP)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "icons":
                        return f.createElement(ye.default, {
                            isSelector: S,
                            successCallback: function() {
                                H(!1), U((0, y.wu)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "emoji":
                        return f.createElement(we.default, {
                            isSelector: S,
                            successCallback: function() {
                                H(!1)
                            }
                        });
                    case "stickers":
                        return f.createElement("div", null, "Sticker Uploader Layout");
                    default:
                        return null
                }
                var st = {
                        photos: {
                            title: "Photos",
                            singularTitle: "Photo",
                            files: Fe
                        },
                        icons: {
                            title: "Icons",
                            singularTitle: "Icon",
                            files: Me
                        },
                        emoji: {
                            title: "Emoji",
                            singularTitle: "Emoji",
                            files: Ve
                        },
                        stickers: {
                            title: "Stickers",
                            singularTitle: "Sticker",
                            files: Oe
                        }
                    } [N] || {
                        title: "Unknown",
                        singularTitle: "Unknown",
                        files: []
                    },
                    lt = Je && B || He && _ || tt && z || rt && j;
                return f.createElement(Ee, null, !S && f.createElement(x.oI, null, f.createElement("h2", null, st.title)), f.createElement(Ze, null, f.createElement("div", {
                    className: (0, g.iv)({
                        name: "sf0fa5",
                        styles: ".center-flex{display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:center;}"
                    })
                }, $e && !S && !z && !j && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement("h2", null, nt, " Currently Equipped Profile Picture")), !S && !z && !j && f.createElement("div", {
                    className: "center-flex ".concat((0, g.iv)({
                        name: "1gpzra0",
                        styles: "margin-bottom:1em"
                    }))
                }, (ot || it) && f.createElement(xe.Z, {
                    image: null != te ? te : B ? $e : De,
                    borderColor: "green",
                    disableManagement: at,
                    width: B ? 300 : 200,
                    isIcon: !B,
                    isAdminView: u
                }), (!$e && B || !De && !B || S && !te) && f.createElement(ke, null, f.createElement(x.$1, {
                    icon: c.eH,
                    className: (0, g.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "No ", S ? "Image" : B ? "Profile Picture" : "Icon", " Selected"), f.createElement("br", null)), lt && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "1nwo2m",
                        styles: "margin:1em auto;padding:0.2em 0.7em;color:red;text-transform:uppercase;font-size:1.6em;border:1px solid red;border-radius:5px;width:max-content"
                    })
                }, f.createElement(x.$1, {
                    icon: c.eH,
                    className: (0, g.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "You have reached your ", N, " limit!"), f.createElement(x.JX, {
                    className: "align-items-center mb-3"
                }, f.createElement(x.X2, null, !tt && z && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return oe(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", st.title)), !rt && j && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return ue(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", st.title)), (!Je && B || !He && _) && !u && (S ? f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        H(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", st.title)) : f.createElement(p.rU, {
                    to: "/home/upload".concat(st.singularTitle),
                    className: "me-3"
                }, f.createElement(x.zx, {
                    neutral: !0
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", st.title)))), !S && $e && !z && !j && f.createElement(x.zx, {
                    onClick: B ? qe : Re,
                    className: "px-3",
                    danger: !0
                }, f.createElement(x.$1, {
                    icon: s.NB,
                    className: "me-2"
                }), "Reset ", B ? "Photo" : "Icon"))), f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, B && f.createElement("h2", null, nt, " Uploaded Photos (", Ye, "/", We, " Photos)"), _ && f.createElement("h2", null, nt, " Uploaded Icons (", Le, "/", Ke, " Icons)"), z && f.createElement("h2", null, nt, " Uploaded Emoji (", Ge, "/", Qe, " Emoji)"), j && f.createElement("h2", null, nt, " Uploaded Stickers (", Xe, "/", et, " Stickers)")), u && Ye > 0 && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement(x.zx, {
                    className: "btn-danger",
                    onClick: Ae
                }, "Reset Profile Pic and Delete All (", Ye, ") Photos")))), f.createElement(Se, null, f.createElement(Ie, null, st.files.map((function(e) {
                    return f.createElement("div", {
                        key: e.fileId
                    }, f.createElement(xe.Z, {
                        image: e.imageUrl,
                        onSelect: S ? Ue : null,
                        onClick: S ? function() {
                            Ue(e.fileId, e.imageUrl)
                        } : function() {
                            je(e.fileId, e.highestVersionNumber)
                        },
                        showViewButton: !1,
                        onDelete: function() {
                            return Te(e.fileId)
                        },
                        showDeleteButton: !S,
                        onWear: S ? null : je,
                        fileId: e.fileId,
                        versionNumber: e.highestVersionNumber,
                        width: B ? 300 : 200,
                        isIcon: _,
                        isEmoji: z,
                        isSticker: j,
                        isAnimated: e.isAnimated,
                        maskTag: e.maskTag,
                        frameRate: e.frameRate,
                        frameCount: e.frameCount
                    }))
                })))), ie && f.createElement(x.u_, {
                    onClose: function() {
                        return oe(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Emoji",
                    children: f.createElement(pe, {
                        onClose: function() {
                            return oe(!1)
                        }
                    })
                }), ce && f.createElement(x.u_, {
                    onClose: function() {
                        return ue(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Sticker",
                    children: f.createElement(ve, {
                        onClose: function() {
                            return ue(!1)
                        }
                    })
                }))
            };
            var Ee = (0, o.Z)("div", {
                    target: "edhboyc4"
                })({
                    name: "mkaaq0",
                    styles: "min-height:0;display:flex;flex-direction:column;width:100%"
                }),
                ke = (0, o.Z)("div", {
                    target: "edhboyc3"
                })({
                    name: "1rfuedz",
                    styles: "margin:1em;padding:0.2em 0.7em;color:var(--bs-warning);text-transform:uppercase;font-size:1.6em;border:4px solid var(--bs-warning);border-radius:12px"
                }),
                Ze = (0, o.Z)(x.Ao, {
                    target: "edhboyc2"
                })({
                    name: "1ch9yvl",
                    styles: "border-radius:0"
                }),
                Se = (0, o.Z)(x.Ao, {
                    target: "edhboyc1"
                })({
                    name: "1xhi4a4",
                    styles: "background-color:#0f1113;min-height:0;margin-bottom:10px;overflow-y:auto"
                }),
                Ie = (0, o.Z)("div", {
                    target: "edhboyc0"
                })({
                    name: "1qzuqsf",
                    styles: "display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:space-around"
                })
        }
    }
]);
//# sourceMappingURL=63002942aeb3dbdd4159c5fde008ff7df7586e1c7d9ab93d23543804f1035f87.js.map