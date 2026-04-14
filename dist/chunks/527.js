"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [527], {
        46686: (e, t, r) => {
            r.d(t, {
                Z: () => re
            });
            var n = r(71002),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                s = r(78076),
                l = r(64687),
                u = r.n(l),
                c = r(67294),
                m = r(32981),
                f = r(31541),
                d = r(22497),
                p = r(60933),
                g = r(64258),
                h = r(73423),
                v = r(60006),
                w = {
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
                x = "CROP",
                y = "STYLE",
                b = r(80988);
            var k = (0, o.Z)("div", {
                    target: "elhkzni1"
                })({
                    name: "bp2yox",
                    styles: "flex:50%"
                }),
                E = (0, o.Z)("div", {
                    target: "elhkzni0"
                })({
                    name: "4kj7g6",
                    styles: "flex:50%;display:flex;justify-content:right"
                });
            const Z = function(e) {
                var t = e.onCancel,
                    r = e.onBack,
                    n = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return c.createElement(c.Fragment, null, c.createElement(v.X2, null, c.createElement(k, null, c.createElement(b.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), c.createElement(E, null, c.createElement(b.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: r
                }, "Back"), c.createElement(b.zx, {
                    containerStyles: "".concat(a, "margin-left: 1em;"),
                    accent: !0,
                    onClick: n
                }, "Next"))))
            };
            var S = r(85042),
                I = r(70123);
            var C = (0, o.Z)(v.X2, {
                    target: "e1f7ou1h2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                P = (0, o.Z)(v.X2, {
                    target: "e1f7ou1h1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                B = (0, o.Z)("div", {
                    target: "e1f7ou1h0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const N = function(e) {
                e.completedCallback;
                var t = e.frames,
                    r = e.zoom,
                    n = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    s = e.crop,
                    l = e.setCrop,
                    u = (e.croppedArea, e.setCroppedArea),
                    m = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    f = c.useState(0),
                    d = (0, i.Z)(f, 2),
                    g = d[0];
                d[1];
                return c.createElement(B, null, c.createElement(C, null, c.createElement(I.ZP, {
                    image: (0, p.Gr)(t[g]),
                    crop: s,
                    zoom: r,
                    aspect: 1,
                    rotation: a,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return l(e)
                    },
                    onCropAreaChange: function(e, t) {
                        u(e), m(t)
                    },
                    onZoomChange: function(e) {
                        return n(e)
                    }
                })), c.createElement(P, null, c.createElement(S.Z, {
                    onRotate: function(e) {
                        o(a + e)
                    },
                    onReset: function() {
                        n(1), o(0), l({
                            x: 0,
                            y: 0
                        }), u({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), m({
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
            var _ = r(81192);
            var j = (0, o.Z)("div", {
                    target: "e1a4r75r7"
                })({
                    name: "wrqpcr",
                    styles: "height:30em;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:3em;background-color:#0a0a0d"
                }),
                z = (0, o.Z)("div", {
                    target: "e1a4r75r6"
                })({
                    name: "1muh860",
                    styles: "font-size:12pt;font-weight:bold;margin-bottom:0.5em"
                }),
                U = (0, o.Z)("div", {
                    target: "e1a4r75r5"
                })({
                    name: "btw7q7",
                    styles: "width:260px;height:260px;margin-bottom:1em;border:5px solid #555;border-radius:20px"
                }),
                T = (0, o.Z)("div", {
                    target: "e1a4r75r4"
                })({
                    name: "5y4g3n",
                    styles: "display:flex;flex-direction:column;row-gap:1em"
                }),
                A = (0, o.Z)("div", {
                    target: "e1a4r75r3"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                R = (0, o.Z)("div", {
                    target: "e1a4r75r2"
                })({
                    name: "9zele7",
                    styles: "width:4em;text-align:right;margin-right:1em"
                }),
                q = (0, o.Z)("div", {
                    target: "e1a4r75r1"
                })({
                    name: "1mwkkc",
                    styles: "margin-left:1em"
                }),
                F = (0, o.Z)("input", {
                    target: "e1a4r75r0"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                });
            const V = function(e) {
                var t = e.spriteSheet,
                    r = e.frameCount,
                    n = e.setFrameCount,
                    a = e.frameRate,
                    i = e.setFrameRate;
                return c.createElement(c.Fragment, null, c.createElement(z, null, "Set the frame count and frame rate for your sprite sheet."), c.createElement(j, null, c.createElement(U, null, c.createElement(_.Z, {
                    spriteSheet: t,
                    frameCount: r,
                    frameRate: a,
                    size: 250
                })), c.createElement(T, null, c.createElement(A, null, c.createElement(R, null, "Frames"), c.createElement(F, {
                    type: "range",
                    className: "sliderInput",
                    min: 2,
                    max: 64,
                    step: 1,
                    value: r,
                    onChange: function(e) {
                        n(e.target.value)
                    }
                }), c.createElement(q, null, r, " / 64")), c.createElement(A, null, c.createElement(R, null, "FPS"), c.createElement(F, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 64,
                    step: 1,
                    value: a,
                    onChange: function(e) {
                        i(e.target.value)
                    }
                }), c.createElement(q, null, a, " / 64")))))
            };
            var M = function(e) {
                    return "https://assets.vrchat.com/www/images/emoji-previews/".concat(w[e])
                },
                O = (0, o.Z)("span", {
                    target: "e1kj3uqh4"
                })({
                    name: "cmlg08",
                    styles: "font-size:1.2em;font-weight:bold"
                }),
                L = (0, o.Z)("div", {
                    target: "e1kj3uqh3"
                })({
                    name: "1ac844z",
                    styles: "display:flex;flex-direction:column;height:100%;align-items:center"
                }),
                Y = (0, o.Z)("div", {
                    target: "e1kj3uqh2"
                })({
                    name: "q18sga",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-bottom:1em;column-gap:0.3em;row-gap:1em"
                }),
                G = (0, o.Z)("img", {
                    target: "e1kj3uqh1"
                })({
                    name: "vsv6y8",
                    styles: "width:300px;margin-bottom:2em"
                }),
                X = (0, o.Z)(b.zx, {
                    target: "e1kj3uqh0"
                })({
                    name: "1dpyl9g",
                    styles: "min-width:3em"
                });
            const $ = function(e) {
                var t = e.style,
                    r = e.setStyle;
                return c.createElement(L, null, c.createElement(O, null, t), c.createElement(G, {
                    src: M(t)
                }), c.createElement(Y, null, Object.keys(w).map((function(e) {
                    return e === t ? c.createElement(X, {
                        key: e
                    }, e) : c.createElement(X, {
                        neutral: !0,
                        key: e,
                        onClick: function() {
                            return r(e)
                        }
                    }, e)
                }))))
            };
            var W = (0, o.Z)("div", {
                    target: "e1kgcgv31"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                D = (0, o.Z)("div", {
                    target: "e1kgcgv30"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const J = function(e) {
                var t = e.frames,
                    r = e.onCompleted,
                    n = e.onCancel,
                    o = e.onBack,
                    s = e.isPremadeSpriteSheet,
                    l = e.defaultParameters,
                    m = c.useState(x),
                    f = (0, i.Z)(m, 2),
                    d = f[0],
                    g = f[1],
                    h = c.useState(1),
                    v = (0, i.Z)(h, 2),
                    w = v[0],
                    b = v[1],
                    k = c.useState(0),
                    E = (0, i.Z)(k, 2),
                    S = E[0],
                    I = E[1],
                    C = c.useState({
                        x: 0,
                        y: 0
                    }),
                    P = (0, i.Z)(C, 2),
                    B = P[0],
                    _ = P[1],
                    j = c.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    z = (0, i.Z)(j, 2),
                    U = z[0],
                    T = z[1],
                    A = c.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    R = (0, i.Z)(A, 2),
                    q = R[0],
                    F = R[1],
                    M = c.useState(null),
                    O = (0, i.Z)(M, 2),
                    L = O[0],
                    Y = O[1],
                    G = c.useState(1),
                    X = (0, i.Z)(G, 2),
                    J = X[0],
                    K = X[1],
                    H = c.useState(1),
                    Q = (0, i.Z)(H, 2),
                    ee = Q[0],
                    te = Q[1],
                    re = c.useState("Aura"),
                    ne = (0, i.Z)(re, 2),
                    ae = ne[0],
                    ie = ne[1],
                    oe = c.useState("square"),
                    se = (0, i.Z)(oe, 2),
                    le = se[0],
                    ue = (se[1], function() {
                        var e = (0, a.Z)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var r = (0, p.Gr)(t),
                                                n = new Image;
                                            n.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    r = t.getContext("2d");
                                                t.width = n.width, t.height = n.height, r.save(), r.translate(t.width / 2, t.height / 2), r.rotate(S * Math.PI / 180), r.translate(-t.width / 2, -t.height / 2), r.drawImage(n, 0, 0), r.restore(), t.toBlob(function() {
                                                    var t = (0, a.Z)(u().mark((function t(r) {
                                                        var a;
                                                        return u().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, p.s3)(r);
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
                    ce = function() {
                        var e = (0, a.Z)(u().mark((function e(t) {
                            var r, n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ue(t);
                                    case 2:
                                        return r = e.sent, n = r.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var r = document.createElement("canvas"),
                                                    n = r.getContext("2d");
                                                r.width = q.width, r.height = q.height, n.drawImage(t, -q.x, -q.y), r.toBlob(function() {
                                                    var r = (0, a.Z)(u().mark((function r(n) {
                                                        var a;
                                                        return u().wrap((function(r) {
                                                            for (;;) switch (r.prev = r.next) {
                                                                case 0:
                                                                    return r.next = 2, (0, p.s3)(n);
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
                        var e = (0, a.Z)(u().mark((function e() {
                            var n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (d !== x || s) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, ce(t[0]);
                                    case 3:
                                        n = e.sent, Y(n), g(y), e.next = 9;
                                        break;
                                    case 8:
                                        d === x && s ? g(y) : d === y && r({
                                            image: null != L ? L : t[0],
                                            style: ae,
                                            mask: le,
                                            frameCount: J,
                                            frameRate: ee
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
                return c.useEffect((function() {
                    s && (K((null == l ? void 0 : l.frameCount) || 4), te((null == l ? void 0 : l.frameRate) || 15))
                }), [s]), c.createElement(D, null, c.createElement(W, null, d === x && !s && c.createElement(N, {
                    frames: t,
                    completedCallback: r,
                    zoom: w,
                    setZoom: b,
                    rotation: S,
                    setRotation: I,
                    crop: B,
                    setCrop: _,
                    croppedArea: U,
                    setCroppedArea: T,
                    croppedAreaPixels: q,
                    setCroppedAreaPixels: F
                }), d === x && s && c.createElement(V, {
                    spriteSheet: t[0],
                    frameCount: J,
                    setFrameCount: K,
                    frameRate: ee,
                    setFrameRate: te
                }), d === y && c.createElement($, {
                    style: ae,
                    setStyle: ie
                })), c.createElement(Z, {
                    onCancel: n,
                    onBack: function() {
                        o()
                    },
                    onNext: me
                }))
            };
            var K = r(41255);

            function H(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Q(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Q(e, t)
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

            function Q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ee = function(e) {
                    return new Promise((function(t, r) {
                        if (!(0, p.sY)(e)) return r("Tried to extract GIF frames from non-GIF file!");
                        var n = "".substring("".lastIndexOf("/") + 1);
                        f.Z.run({
                            input: [{
                                file: "",
                                name: n
                            }],
                            command: ["-e -U ".concat(n, " -o /out/").concat(n)]
                        }).then((function(e) {
                            if (void 0 === e) throw new Error("GIF explosion gave undefined output?");
                            if (0 === e.length) throw new Error("GIF explosion gave no output frames.");
                            var r, n = [],
                                a = H(e);
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
                te = (0, o.Z)("div", {
                    target: "e6g0jp60"
                })({
                    name: "dm9b0z",
                    styles: "width:100%;min-height:30em;overflow:hidden"
                });
            const re = function(e) {
                var t = e.onClose,
                    r = c.useState(null),
                    o = (0, i.Z)(r, 2),
                    l = o[0],
                    f = o[1],
                    v = c.useState(!1),
                    w = (0, i.Z)(v, 2),
                    x = w[0],
                    y = w[1],
                    b = (0, K.Yh)(),
                    k = (0, i.Z)(b, 2),
                    E = k[0],
                    Z = k[1],
                    S = Z.isLoading,
                    I = Z.isSuccess,
                    C = (Z.isError, Z.error),
                    P = (0, m.I0)(),
                    B = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        P((0, g.d)({
                            title: t,
                            icon: s.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    N = function() {
                        var e = (0, a.Z)(u().mark((function e(t) {
                            var r, n, a, i, o;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, p.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, i = n.width > 1024 || n.height > 1024, o = 1024 === n.width && 1024 === n.height, !a) {
                                            e.next = 10;
                                            break
                                        }
                                        return B({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 10:
                                        if (!i) {
                                            e.next = 13;
                                            break
                                        }
                                        return B({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 1024x1024.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 13:
                                        if (!x || o) {
                                            e.next = 16;
                                            break
                                        }
                                        return B({
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
                    _ = function(e) {
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
                        return null !== n && (r.frameCount = _({
                            value: parseInt(n[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 4
                        })), null !== a && (r.frameRate = _({
                            value: parseInt(a[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 15
                        })), r
                    },
                    z = function() {
                        var e = (0, a.Z)(u().mark((function e(r) {
                            var n, a, i;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, p._0)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", B({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, N({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if (a = [n], !(0, p.sY)(n)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, ee(n);
                                    case 12:
                                        a = e.sent;
                                    case 13:
                                        i = j({
                                            file: n
                                        }), f(c.createElement(J, {
                                            isPremadeSpriteSheet: x,
                                            frames: a,
                                            defaultParameters: i,
                                            onCompleted: U,
                                            onCancel: t,
                                            onBack: function() {
                                                return f(null)
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
                    U = function(e) {
                        var t = e.image,
                            r = e.frameCount,
                            n = void 0 === r ? 1 : r,
                            a = e.frameRate,
                            i = void 0 === a ? 1 : a,
                            o = e.style,
                            s = e.mask,
                            l = void 0 === s ? "square" : s;
                        E({
                            tag: n > 1 ? "emojianimated" : "emoji",
                            file: t.file || t,
                            frames: n,
                            framesOverTime: i,
                            animationStyle: o.toLowerCase(),
                            maskTag: l
                        })
                    };
                return c.useEffect((function() {
                    if (I) B({
                        title: "Upload Successful!",
                        message: "Your emoji was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== C) {
                        var e = C;
                        "object" === (0, n.Z)(e) && (e = e.message || JSON.stringify(e)), B({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [I, C]), c.createElement(te, {
                    className: "tw-flex tw-flex-col"
                }, S && c.createElement(h.Z, {
                    name: "emoji"
                }), !S && (l || c.createElement(d.Z, {
                    fileSelectedCallback: function(e) {
                        return z(e)
                    },
                    isForAnimatedEmoji: !0,
                    setIsPremadeSpriteSheet: y,
                    isPremadeSpriteSheet: x,
                    hintText: "Upload a static emoji with a single image, or use a sprite sheet to create an animated emoji.",
                    hintTextMuted: c.createElement(c.Fragment, null, "A sprite sheet should be a 1024x1024 image with square frames in a uniform grid, ordered left to right, then top to bottom.", c.createElement("br", null), "You can preset animation values in advance using the file name, like so: ", c.createElement("em", null, "CoolEmoji_14frames_10fps.png"))
                })))
            }
        },
        95024: (e, t, r) => {
            r.d(t, {
                Z: () => x
            });
            var n = r(71002),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                s = r(78076),
                l = r(64687),
                u = r.n(l),
                c = r(67294),
                m = r(32981),
                f = r(64258),
                d = r(60933),
                p = r(22497),
                g = r(73423),
                h = r(39191),
                v = r(41255);
            var w = (0, o.Z)("div", {
                target: "e1et7e2k0"
            })({
                name: "dm9b0z",
                styles: "width:100%;min-height:30em;overflow:hidden"
            });
            const x = function(e) {
                var t = e.onClose,
                    r = c.useState(null),
                    o = (0, i.Z)(r, 2),
                    l = o[0],
                    x = o[1],
                    y = (0, v.Yh)(),
                    b = (0, i.Z)(y, 2),
                    k = b[0],
                    E = b[1],
                    Z = E.isLoading,
                    S = E.isSuccess,
                    I = (E.isError, E.error),
                    C = (0, m.I0)(),
                    P = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        C((0, f.d)({
                            title: t,
                            icon: s.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    B = function() {
                        var e = (0, a.Z)(u().mark((function e(r) {
                            var n;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, d._0)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", P({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, N({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        x(c.createElement(h.Z, {
                                            baseImage: n,
                                            onCompleted: _,
                                            onCancel: t,
                                            onBack: function() {
                                                return x(null)
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
                    N = function() {
                        var e = (0, a.Z)(u().mark((function e(t) {
                            var r, n, a, i;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, d.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, i = n.width > 1024 || n.height > 1024, !a) {
                                            e.next = 9;
                                            break
                                        }
                                        return P({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 9:
                                        if (!i) {
                                            e.next = 12;
                                            break
                                        }
                                        return P({
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
                    _ = function(e) {
                        var t = e.image,
                            r = e.mask,
                            n = void 0 === r ? "square" : r;
                        console.log("image", t), k({
                            file: t.file || t,
                            tag: "sticker",
                            maskTag: n
                        })
                    };
                return c.useEffect((function() {
                    if (S) P({
                        title: "Upload Successful!",
                        message: "Your sticker was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== I) {
                        var e = I;
                        "object" === (0, n.Z)(e) && (e = e.message || JSON.stringify(e)), P({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [S, I]), c.createElement(w, {
                    className: "tw-flex tw-flex-col"
                }, Z && c.createElement(g.Z, {
                    name: "sticker"
                }), !Z && (l || c.createElement(p.Z, {
                    fileSelectedCallback: function(e) {
                        return B(e)
                    },
                    hintText: "Stickers should be a square image between 64x64 and 1024x1024.",
                    hintTextMuted: c.createElement(c.Fragment, null, "For best results, use a power-of-two size (64, 128, 256, 512, or 1024 pixels).", c.createElement("br", null), "You can also create stickers inside VRChat using the camera!")
                })))
            }
        },
        40527: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => B
            });
            var n = r(42138),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                s = r(76553),
                l = r(59545),
                u = r(2723),
                c = r(64687),
                m = r.n(c),
                f = r(67294),
                d = r(32981),
                p = r(79655),
                g = r(83505),
                h = r(41255),
                v = r(12227),
                w = r(80988),
                x = r(5513),
                y = r(34984),
                b = r(22202),
                k = r(83807),
                E = r(60229),
                Z = r(46686),
                S = r(95024),
                I = r(50347),
                C = r(74444),
                P = r(39908);
            const B = function(e) {
                var t, r, o = e.userId,
                    c = e.isAdminView,
                    B = e.isSelector,
                    U = void 0 !== B && B,
                    T = e.selectedCallback,
                    A = void 0 === T ? null : T,
                    R = e.activeTab,
                    q = void 0 === R ? "icons" : R,
                    F = e.hideTitle,
                    V = void 0 !== F && F,
                    M = "photos" === q,
                    O = "icons" === q,
                    L = "emoji" === q,
                    Y = "stickers" === q,
                    G = (0, d.I0)(),
                    X = (0, d.v9)((function(e) {
                        return e.user.photoList
                    })),
                    $ = (0, d.v9)((function(e) {
                        return e.user.iconList
                    })),
                    W = f.useState([]),
                    D = (0, i.Z)(W, 2),
                    J = D[0],
                    K = D[1],
                    H = f.useState(!1),
                    Q = (0, i.Z)(H, 2),
                    ee = Q[0],
                    te = Q[1],
                    re = f.useState(!1),
                    ne = (0, i.Z)(re, 2),
                    ae = ne[0],
                    ie = ne[1],
                    oe = f.useState(!1),
                    se = (0, i.Z)(oe, 2),
                    le = se[0],
                    ue = se[1],
                    ce = f.useState(null),
                    me = (0, i.Z)(ce, 2),
                    fe = (me[0], me[1]),
                    de = f.useState(!1),
                    pe = (0, i.Z)(de, 2),
                    ge = pe[0],
                    he = pe[1],
                    ve = f.useState(!1),
                    we = (0, i.Z)(ve, 2),
                    xe = we[0],
                    ye = we[1],
                    be = (0, k.Tu)(),
                    ke = be.user,
                    Ee = be.fetchUser,
                    Ze = (0, k.v$)(o).user,
                    Se = (0, b.q7)({
                        condensed: !0
                    }).data,
                    Ie = void 0 === Se ? [] : Se,
                    Ce = (0, h.eV)({
                        userId: o
                    }).data,
                    Pe = (0, h._h)({
                        userId: o
                    }).data,
                    Be = (0, h.g3)(),
                    Ne = (0, i.Z)(Be, 2),
                    _e = Ne[0],
                    je = Ne[1];
                je.isLoading, je.isSuccess, je.isError, je.error;
                f.useEffect((function() {
                    var e = c ? o : "";
                    G((0, y.wP)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    })), G((0, y.wu)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    }))
                }), [o, c]);
                var ze = function() {
                        var e = (0, a.Z)(m().mark((function e(t, r) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!L && !Y) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = (0, v.qm)({
                                            fileId: t,
                                            versionNumber: r
                                        }), e.next = 5, G((0, x._W)({
                                            userId: ke.id,
                                            data: M ? {
                                                profilePicOverride: n
                                            } : {
                                                userIcon: n
                                            }
                                        }));
                                    case 5:
                                        Ee();
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
                        fe(t), A(e, t)
                    },
                    Te = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (K([t].concat((0, n.Z)(J))), !M) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, G((0, y.JJ)({
                                            fileId: t
                                        }));
                                    case 4:
                                        return e.next = 6, G((0, y.oI)({
                                            fileId: t
                                        }));
                                    case 6:
                                    case 13:
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 8:
                                        if (!O) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11, G((0, y.ap)({
                                            fileId: t
                                        }));
                                    case 11:
                                        return e.next = 13, G((0, y.NB)({
                                            fileId: t
                                        }));
                                    case 15:
                                        if (!L) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, _e({
                                            fileId: t,
                                            tag: "emoji",
                                            userId: o
                                        });
                                    case 20:
                                        if (!Y) {
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
                                        return e.next = 4, Promise.all(X.map(function() {
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
                                        if (!c) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, G((0, y.dm)({
                                            userId: o,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 3:
                                        ie(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, G((0, x._W)({
                                            userId: ke.id,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 8:
                                        Ee();
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
                                        if (!c) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, G((0, y.dm)({
                                            userId: o,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 3:
                                        te(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, G((0, x._W)({
                                            userId: ke.id,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 8:
                                        Ee();
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
                    Fe = X.map((function(e) {
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
                    Ve = $.map((function(e) {
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
                    Me = (Ce || []).map((function(e) {
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
                    Le = Ve.length,
                    Ye = Fe.length,
                    Ge = Me.length,
                    Xe = Oe.length,
                    $e = c ? Ze.profilePicOverride : ke.profilePicOverride;
                ee && ($e = "");
                c ? Ze.userIcon : ke.userIcon;
                var We = (c ? "64" : Ie["permission-user-gallery"]) <= Ye,
                    De = c ? "64" : Ie["permission-user-icons"],
                    Je = De <= Le,
                    Ke = (null === (t = Ie["permission-user-emoji"]) || void 0 === t ? void 0 : t.max) || 9,
                    He = (null === (r = Ie["permission-user-stickers"]) || void 0 === r ? void 0 : r.max) || 9,
                    Qe = Ke <= Ge,
                    et = He <= Xe,
                    tt = c ? "".concat(Ze.displayName, "'s") : "Your";
                if (le) switch (q) {
                    case "photos":
                        return f.createElement(E.default, {
                            isSelector: U,
                            successCallback: function() {
                                ue(!1), G((0, y.wP)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "icons":
                        return f.createElement(P.default, {
                            isSelector: U,
                            successCallback: function() {
                                ue(!1), G((0, y.wu)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "emoji":
                        return f.createElement(C.default, {
                            isSelector: U,
                            successCallback: function() {
                                ue(!1)
                            }
                        });
                    case "stickers":
                        return f.createElement("div", null, "Sticker Uploader Layout");
                    default:
                        return null
                }
                var rt = {
                        photos: {
                            title: "Photos",
                            singularTitle: "Photo",
                            files: Fe
                        },
                        icons: {
                            title: "Icons",
                            singularTitle: "Icon",
                            files: Ve
                        },
                        emoji: {
                            title: "Emoji",
                            singularTitle: "Emoji",
                            files: Me
                        },
                        stickers: {
                            title: "Stickers",
                            singularTitle: "Sticker",
                            files: Oe
                        }
                    } [q] || {
                        title: "Unknown",
                        singularTitle: "Unknown",
                        files: []
                    },
                    nt = We && M || Je && O || Qe && L || et && Y;
                return f.createElement(N, null, !U && !V && f.createElement(w.oI, null, f.createElement("h2", null, rt.title)), f.createElement(_, null, f.createElement("div", {
                    className: (0, g.iv)({
                        name: "sf0fa5",
                        styles: ".center-flex{display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:center;}"
                    })
                }, $e && !U && !L && !Y && !M && f.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, f.createElement("h2", null, tt, " Currently Equipped Profile Picture")), f.createElement(w.JX, {
                    className: "tw-mb-3 tw-gap-4"
                }, f.createElement(w.X2, null, !Qe && L && f.createElement(w.zx, {
                    neutral: !0,
                    onClick: function() {
                        return he(!0)
                    }
                }, f.createElement(w.X2, {
                    className: "tw-items-center tw-px-3"
                }, f.createElement(w.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", rt.title)), !et && Y && f.createElement(w.zx, {
                    neutral: !0,
                    onClick: function() {
                        return ye(!0)
                    }
                }, f.createElement(w.X2, {
                    className: "tw-items-center tw-px-3"
                }, f.createElement(w.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", rt.title)), (!We && M || !Je && O) && !c && (U ? f.createElement(w.zx, {
                    neutral: !0,
                    onClick: function() {
                        ue(!0)
                    }
                }, f.createElement(w.X2, {
                    className: "tw-items-center tw-px-3"
                }, f.createElement(w.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", rt.title)) : f.createElement(p.rU, {
                    to: "/home/upload".concat(rt.singularTitle),
                    className: "tw-me-3"
                }, f.createElement(w.zx, {
                    neutral: !0
                }, f.createElement(w.X2, {
                    className: "tw-items-center tw-px-3"
                }, f.createElement(w.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", rt.title)))), !U && $e && !L && !Y && !M && f.createElement(w.zx, {
                    onClick: M ? qe : Re,
                    className: "tw-px-3",
                    danger: !0
                }, f.createElement(w.$1, {
                    icon: l.NB,
                    className: "tw-me-2"
                }), "Reset ", M ? "Photo" : "Icon")), nt && f.createElement("div", {
                    className: "tw-mx-auto tw-py-1 tw-px-3 tw-uppercase tw-text-2xl tw-border-1 tw-border-solid tw-border-red tw-rounded-md tw-text-red tw-max-w-max"
                }, f.createElement(w.$1, {
                    icon: s.eH,
                    className: "tw-mr-2"
                }), "You have reached your ", q, " limit!")), f.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, O && f.createElement("h2", null, tt, " Uploaded Icons (", Le, "/", De, " Icons)"), L && f.createElement("h2", null, tt, " Uploaded Emoji (", Ge, "/", Ke, " Emoji)"), Y && f.createElement("h2", null, tt, " Uploaded Stickers (", Xe, "/", He, " Stickers)")), c && Ye > 0 && f.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, f.createElement(w.zx, {
                    className: "btn-danger",
                    onClick: Ae
                }, "Reset Profile Pic and Delete All (", Ye, ") Photos")))), f.createElement(j, null, f.createElement(z, null, rt.files.map((function(e) {
                    return f.createElement("div", {
                        key: e.fileId
                    }, f.createElement(I.Z, {
                        image: e.imageUrl,
                        onSelect: U ? Ue : null,
                        onClick: function() {
                            return function(e) {
                                var t = e.fileId,
                                    r = e.imageUrl,
                                    n = e.highestVersionNumber;
                                if (M) return null;
                                if (t) {
                                    if (U) {
                                        if (!r) return;
                                        return Ue(t, r)
                                    }
                                    if (n) return ze(t, n)
                                }
                            }({
                                fileId: e.fileId,
                                imageUrl: e.imageUrl,
                                highestVersionNumber: e.highestVersionNumber
                            })
                        },
                        showViewButton: !1,
                        onDelete: function() {
                            return Te(e.fileId)
                        },
                        showDeleteButton: !U,
                        onWear: M || U ? null : ze,
                        fileId: e.fileId,
                        versionNumber: e.highestVersionNumber,
                        width: M ? 300 : 200,
                        isIcon: O,
                        isEmoji: L,
                        isSticker: Y,
                        isAnimated: e.isAnimated,
                        maskTag: e.maskTag,
                        frameRate: e.frameRate,
                        frameCount: e.frameCount
                    }))
                })))), ge && f.createElement(w.u_, {
                    onClose: function() {
                        return he(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Emoji"
                }, f.createElement(Z.Z, {
                    onClose: function() {
                        return he(!1)
                    }
                })), xe && f.createElement(w.u_, {
                    onClose: function() {
                        return ye(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Sticker"
                }, f.createElement(S.Z, {
                    onClose: function() {
                        return ye(!1)
                    }
                })))
            };
            var N = (0, o.Z)("div", {
                    target: "edhboyc4"
                })({
                    name: "mkaaq0",
                    styles: "min-height:0;display:flex;flex-direction:column;width:100%"
                }),
                _ = (0, o.Z)(w.Ao, {
                    target: "edhboyc2"
                })({
                    name: "1ch9yvl",
                    styles: "border-radius:0"
                }),
                j = (0, o.Z)(w.Ao, {
                    target: "edhboyc1"
                })({
                    name: "j8uupa",
                    styles: "background-color:#181B1F;min-height:0;margin-bottom:10px;overflow-y:auto"
                }),
                z = (0, o.Z)("div", {
                    target: "edhboyc0"
                })({
                    name: "1qzuqsf",
                    styles: "display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:space-around"
                })
        }
    }
]);
//# sourceMappingURL=b3f7a62e06173cbc8857ba3f2aedd97d05f808cc6429aa38a032394ba29b1610.js.map