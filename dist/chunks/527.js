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
                c = r.n(l),
                u = r(67294),
                m = r(32981),
                f = r(31541),
                d = r(22497),
                p = r(60933),
                g = r(64258),
                h = r(73423),
                v = r(60006),
                x = {
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
                w = "CROP",
                y = "STYLE",
                b = r(96985);
            var E = (0, o.Z)("div", {
                    target: "elhkzni1"
                })({
                    name: "bp2yox",
                    styles: "flex:50%"
                }),
                k = (0, o.Z)("div", {
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
                return u.createElement(u.Fragment, null, u.createElement(v.X2, null, u.createElement(E, null, u.createElement(b.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), u.createElement(k, null, u.createElement(b.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: r
                }, "Back"), u.createElement(b.zx, {
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
                N = (0, o.Z)("div", {
                    target: "e1f7ou1h0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const B = function(e) {
                e.completedCallback;
                var t = e.frames,
                    r = e.zoom,
                    n = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    s = e.crop,
                    l = e.setCrop,
                    c = (e.croppedArea, e.setCroppedArea),
                    m = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    f = u.useState(0),
                    d = (0, i.Z)(f, 2),
                    g = d[0];
                d[1];
                return u.createElement(N, null, u.createElement(C, null, u.createElement(I.ZP, {
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
                        c(e), m(t)
                    },
                    onZoomChange: function(e) {
                        return n(e)
                    }
                })), u.createElement(P, null, u.createElement(S.Z, {
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
            var z = (0, o.Z)("div", {
                    target: "e1a4r75r7"
                })({
                    name: "wrqpcr",
                    styles: "height:30em;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:3em;background-color:#0a0a0d"
                }),
                j = (0, o.Z)("div", {
                    target: "e1a4r75r6"
                })({
                    name: "1muh860",
                    styles: "font-size:12pt;font-weight:bold;margin-bottom:0.5em"
                }),
                T = (0, o.Z)("div", {
                    target: "e1a4r75r5"
                })({
                    name: "btw7q7",
                    styles: "width:260px;height:260px;margin-bottom:1em;border:5px solid #555;border-radius:20px"
                }),
                U = (0, o.Z)("div", {
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
            const M = function(e) {
                var t = e.spriteSheet,
                    r = e.frameCount,
                    n = e.setFrameCount,
                    a = e.frameRate,
                    i = e.setFrameRate;
                return u.createElement(u.Fragment, null, u.createElement(j, null, "Set the frame count and frame rate for your sprite sheet."), u.createElement(z, null, u.createElement(T, null, u.createElement(_.Z, {
                    spriteSheet: t,
                    frameCount: r,
                    frameRate: a,
                    size: 250
                })), u.createElement(U, null, u.createElement(A, null, u.createElement(R, null, "Frames"), u.createElement(F, {
                    type: "range",
                    className: "sliderInput",
                    min: 2,
                    max: 64,
                    step: 1,
                    value: r,
                    onChange: function(e) {
                        n(e.target.value)
                    }
                }), u.createElement(q, null, r, " / 64")), u.createElement(A, null, u.createElement(R, null, "FPS"), u.createElement(F, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 64,
                    step: 1,
                    value: a,
                    onChange: function(e) {
                        i(e.target.value)
                    }
                }), u.createElement(q, null, a, " / 64")))))
            };
            var V = function(e) {
                    return "https://assets.vrchat.com/www/images/emoji-previews/".concat(x[e])
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
                return u.createElement(L, null, u.createElement(O, null, t), u.createElement(G, {
                    src: V(t)
                }), u.createElement(Y, null, Object.keys(x).map((function(e) {
                    return e === t ? u.createElement(X, {
                        key: e
                    }, e) : u.createElement(X, {
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
                    m = u.useState(w),
                    f = (0, i.Z)(m, 2),
                    d = f[0],
                    g = f[1],
                    h = u.useState(1),
                    v = (0, i.Z)(h, 2),
                    x = v[0],
                    b = v[1],
                    E = u.useState(0),
                    k = (0, i.Z)(E, 2),
                    S = k[0],
                    I = k[1],
                    C = u.useState({
                        x: 0,
                        y: 0
                    }),
                    P = (0, i.Z)(C, 2),
                    N = P[0],
                    _ = P[1],
                    z = u.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    j = (0, i.Z)(z, 2),
                    T = j[0],
                    U = j[1],
                    A = u.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    R = (0, i.Z)(A, 2),
                    q = R[0],
                    F = R[1],
                    V = u.useState(null),
                    O = (0, i.Z)(V, 2),
                    L = O[0],
                    Y = O[1],
                    G = u.useState(1),
                    X = (0, i.Z)(G, 2),
                    J = X[0],
                    K = X[1],
                    H = u.useState(1),
                    Q = (0, i.Z)(H, 2),
                    ee = Q[0],
                    te = Q[1],
                    re = u.useState("Aura"),
                    ne = (0, i.Z)(re, 2),
                    ae = ne[0],
                    ie = ne[1],
                    oe = u.useState("square"),
                    se = (0, i.Z)(oe, 2),
                    le = se[0],
                    ce = (se[1], function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var r = (0, p.Gr)(t),
                                                n = new Image;
                                            n.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    r = t.getContext("2d");
                                                t.width = n.width, t.height = n.height, r.save(), r.translate(t.width / 2, t.height / 2), r.rotate(S * Math.PI / 180), r.translate(-t.width / 2, -t.height / 2), r.drawImage(n, 0, 0), r.restore(), t.toBlob(function() {
                                                    var t = (0, a.Z)(c().mark((function t(r) {
                                                        var a;
                                                        return c().wrap((function(t) {
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
                    ue = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ce(t);
                                    case 2:
                                        return r = e.sent, n = r.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var r = document.createElement("canvas"),
                                                    n = r.getContext("2d");
                                                r.width = q.width, r.height = q.height, n.drawImage(t, -q.x, -q.y), r.toBlob(function() {
                                                    var r = (0, a.Z)(c().mark((function r(n) {
                                                        var a;
                                                        return c().wrap((function(r) {
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
                        var e = (0, a.Z)(c().mark((function e() {
                            var n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (d !== w || s) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, ue(t[0]);
                                    case 3:
                                        n = e.sent, Y(n), g(y), e.next = 9;
                                        break;
                                    case 8:
                                        d === w && s ? g(y) : d === y && r({
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
                return u.useEffect((function() {
                    s && (K((null == l ? void 0 : l.frameCount) || 4), te((null == l ? void 0 : l.frameRate) || 15))
                }), [s]), u.createElement(D, null, u.createElement(W, null, d === w && !s && u.createElement(B, {
                    frames: t,
                    completedCallback: r,
                    zoom: x,
                    setZoom: b,
                    rotation: S,
                    setRotation: I,
                    crop: N,
                    setCrop: _,
                    croppedArea: T,
                    setCroppedArea: U,
                    croppedAreaPixels: q,
                    setCroppedAreaPixels: F
                }), d === w && s && u.createElement(M, {
                    spriteSheet: t[0],
                    frameCount: J,
                    setFrameCount: K,
                    frameRate: ee,
                    setFrameRate: te
                }), d === y && u.createElement($, {
                    style: ae,
                    setStyle: ie
                })), u.createElement(Z, {
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
                    r = u.useState(null),
                    o = (0, i.Z)(r, 2),
                    l = o[0],
                    f = o[1],
                    v = u.useState(!1),
                    x = (0, i.Z)(v, 2),
                    w = x[0],
                    y = x[1],
                    b = (0, K.Yh)(),
                    E = (0, i.Z)(b, 2),
                    k = E[0],
                    Z = E[1],
                    S = Z.isLoading,
                    I = Z.isSuccess,
                    C = (Z.isError, Z.error),
                    P = (0, m.I0)(),
                    N = function(e) {
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
                    B = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, n, a, i, o;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, p.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, i = n.width > 1024 || n.height > 1024, o = 1024 === n.width && 1024 === n.height, !a) {
                                            e.next = 10;
                                            break
                                        }
                                        return N({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 10:
                                        if (!i) {
                                            e.next = 13;
                                            break
                                        }
                                        return N({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 1024x1024.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 13:
                                        if (!w || o) {
                                            e.next = 16;
                                            break
                                        }
                                        return N({
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
                    z = function(e) {
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
                    j = function() {
                        var e = (0, a.Z)(c().mark((function e(r) {
                            var n, a, i;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, p._0)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", N({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, B({
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
                                        i = z({
                                            file: n
                                        }), f(u.createElement(J, {
                                            isPremadeSpriteSheet: w,
                                            frames: a,
                                            defaultParameters: i,
                                            onCompleted: T,
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
                    T = function(e) {
                        var t = e.image,
                            r = e.frameCount,
                            n = void 0 === r ? 1 : r,
                            a = e.frameRate,
                            i = void 0 === a ? 1 : a,
                            o = e.style,
                            s = e.mask,
                            l = void 0 === s ? "square" : s;
                        k({
                            tag: n > 1 ? "emojianimated" : "emoji",
                            file: t.file || t,
                            frames: n,
                            framesOverTime: i,
                            animationStyle: o.toLowerCase(),
                            maskTag: l
                        })
                    };
                return u.useEffect((function() {
                    if (I) N({
                        title: "Upload Successful!",
                        message: "Your emoji was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== C) {
                        var e = C;
                        "object" === (0, n.Z)(e) && (e = e.message || JSON.stringify(e)), N({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [I, C]), u.createElement(te, {
                    className: "tw-flex tw-flex-col"
                }, S && u.createElement(h.Z, {
                    name: "emoji"
                }), !S && (l || u.createElement(d.Z, {
                    fileSelectedCallback: function(e) {
                        return j(e)
                    },
                    isForAnimatedEmoji: !0,
                    setIsPremadeSpriteSheet: y,
                    isPremadeSpriteSheet: w,
                    hintText: "Upload a static emoji with a single image, or use a sprite sheet to create an animated emoji.",
                    hintTextMuted: u.createElement(u.Fragment, null, "A sprite sheet should be a 1024x1024 image with square frames in a uniform grid, ordered left to right, then top to bottom.", u.createElement("br", null), "You can preset animation values in advance using the file name, like so: ", u.createElement("em", null, "CoolEmoji_14frames_10fps.png"))
                })))
            }
        },
        95024: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(71002),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                s = r(78076),
                l = r(64687),
                c = r.n(l),
                u = r(67294),
                m = r(32981),
                f = r(64258),
                d = r(60933),
                p = r(22497),
                g = r(73423),
                h = r(39191),
                v = r(41255);
            var x = (0, o.Z)("div", {
                target: "e1et7e2k0"
            })({
                name: "dm9b0z",
                styles: "width:100%;min-height:30em;overflow:hidden"
            });
            const w = function(e) {
                var t = e.onClose,
                    r = u.useState(null),
                    o = (0, i.Z)(r, 2),
                    l = o[0],
                    w = o[1],
                    y = (0, v.Yh)(),
                    b = (0, i.Z)(y, 2),
                    E = b[0],
                    k = b[1],
                    Z = k.isLoading,
                    S = k.isSuccess,
                    I = (k.isError, k.error),
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
                    N = function() {
                        var e = (0, a.Z)(c().mark((function e(r) {
                            var n;
                            return c().wrap((function(e) {
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
                                        return e.next = 6, B({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        w(u.createElement(h.Z, {
                                            baseImage: n,
                                            onCompleted: _,
                                            onCancel: t,
                                            onBack: function() {
                                                return w(null)
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
                    B = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, n, a, i;
                            return c().wrap((function(e) {
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
                        console.log("image", t), E({
                            file: t.file || t,
                            tag: "sticker",
                            maskTag: n
                        })
                    };
                return u.useEffect((function() {
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
                }), [S, I]), u.createElement(x, {
                    className: "tw-flex tw-flex-col"
                }, Z && u.createElement(g.Z, {
                    name: "sticker"
                }), !Z && (l || u.createElement(p.Z, {
                    fileSelectedCallback: function(e) {
                        return N(e)
                    },
                    hintText: "Stickers should be a square image between 64x64 and 1024x1024.",
                    hintTextMuted: u.createElement(u.Fragment, null, "For best results, use a power-of-two size (64, 128, 256, 512, or 1024 pixels).", u.createElement("br", null), "You can also create stickers inside VRChat using the camera!")
                })))
            }
        },
        40527: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => N
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
                x = r(96985),
                w = r(5513),
                y = r(34984),
                b = r(22202),
                E = r(83807),
                k = r(60229),
                Z = r(46686),
                S = r(95024),
                I = r(50347),
                C = r(74444),
                P = r(39908);
            const N = function(e) {
                var t, r, o = e.userId,
                    u = e.isAdminView,
                    N = e.isSelector,
                    U = void 0 !== N && N,
                    A = e.selectedCallback,
                    R = void 0 === A ? null : A,
                    q = e.activeTab,
                    F = void 0 === q ? "icons" : q,
                    M = e.hideTitle,
                    V = void 0 !== M && M,
                    O = "photos" === F,
                    L = "icons" === F,
                    Y = "emoji" === F,
                    G = "stickers" === F,
                    X = (0, d.I0)(),
                    $ = (0, d.v9)((function(e) {
                        return e.user.photoList
                    })),
                    W = (0, d.v9)((function(e) {
                        return e.user.iconList
                    })),
                    D = f.useState([]),
                    J = (0, i.Z)(D, 2),
                    K = J[0],
                    H = J[1],
                    Q = f.useState(!1),
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
                    me = f.useState(null),
                    fe = (0, i.Z)(me, 2),
                    de = fe[0],
                    pe = fe[1],
                    ge = f.useState(!1),
                    he = (0, i.Z)(ge, 2),
                    ve = he[0],
                    xe = he[1],
                    we = f.useState(!1),
                    ye = (0, i.Z)(we, 2),
                    be = ye[0],
                    Ee = ye[1],
                    ke = (0, E.Tu)(),
                    Ze = ke.user,
                    Se = ke.fetchUser,
                    Ie = (0, E.v$)(o).user,
                    Ce = (0, b.q7)({
                        condensed: !0
                    }).data,
                    Pe = void 0 === Ce ? [] : Ce,
                    Ne = (0, h.eV)({
                        userId: o
                    }).data,
                    Be = (0, h._h)({
                        userId: o
                    }).data,
                    _e = (0, h.g3)(),
                    ze = (0, i.Z)(_e, 2),
                    je = ze[0],
                    Te = ze[1];
                Te.isLoading, Te.isSuccess, Te.isError, Te.error;
                f.useEffect((function() {
                    var e = u ? o : "";
                    X((0, y.wP)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    })), X((0, y.wu)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    }))
                }), [o, u]);
                var Ue = function() {
                        var e = (0, a.Z)(m().mark((function e(t, r) {
                            var n;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Y && !G) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = (0, v.qm)({
                                            fileId: t,
                                            versionNumber: r
                                        }), e.next = 5, X((0, w._W)({
                                            userId: Ze.id,
                                            data: O ? {
                                                profilePicOverride: n
                                            } : {
                                                userIcon: n
                                            }
                                        }));
                                    case 5:
                                        Se();
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
                    Ae = function(e, t) {
                        pe(t), R(e, t)
                    },
                    Re = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (H([t].concat((0, n.Z)(K))), !O) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, X((0, y.JJ)({
                                            fileId: t
                                        }));
                                    case 4:
                                        return e.next = 6, X((0, y.oI)({
                                            fileId: t
                                        }));
                                    case 6:
                                    case 13:
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 8:
                                        if (!L) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11, X((0, y.ap)({
                                            fileId: t
                                        }));
                                    case 11:
                                        return e.next = 13, X((0, y.NB)({
                                            fileId: t
                                        }));
                                    case 15:
                                        if (!Y) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, je({
                                            fileId: t,
                                            tag: "emoji",
                                            userId: o
                                        });
                                    case 20:
                                        if (!G) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 23, je({
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
                    qe = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Me();
                                    case 2:
                                        return e.next = 4, Promise.all($.map(function() {
                                            var e = (0, a.Z)(m().mark((function e(t) {
                                                return m().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", Re(t.id));
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
                    Fe = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, X((0, y.dm)({
                                            userId: o,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 3:
                                        oe(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, X((0, w._W)({
                                            userId: Ze.id,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 8:
                                        Se();
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
                    Me = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, X((0, y.dm)({
                                            userId: o,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 3:
                                        re(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, X((0, w._W)({
                                            userId: Ze.id,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 8:
                                        Se();
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
                    Oe = W.map((function(e) {
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
                    Le = (Ne || []).map((function(e) {
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
                    Ye = (Be || []).map((function(e) {
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
                    Ge = Oe.length,
                    Xe = Ve.length,
                    $e = Le.length,
                    We = Ye.length,
                    De = u ? Ie.profilePicOverride : Ze.profilePicOverride;
                te && (De = "");
                var Je = u ? Ie.userIcon : Ze.userIcon;
                ie && (Je = "");
                var Ke = u ? "64" : Pe["permission-user-gallery"],
                    He = Ke <= Xe,
                    Qe = u ? "64" : Pe["permission-user-icons"],
                    et = Qe <= Ge,
                    tt = (null === (t = Pe["permission-user-emoji"]) || void 0 === t ? void 0 : t.max) || 9,
                    rt = (null === (r = Pe["permission-user-stickers"]) || void 0 === r ? void 0 : r.max) || 9,
                    nt = tt <= $e,
                    at = rt <= We,
                    it = u ? "".concat(Ie.displayName, "'s") : "Your",
                    ot = !u,
                    st = U && de,
                    lt = (De && O || Je && !O) && !U;
                if (ce) switch (F) {
                    case "photos":
                        return f.createElement(k.default, {
                            isSelector: U,
                            successCallback: function() {
                                ue(!1), X((0, y.wP)({
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
                                ue(!1), X((0, y.wu)({
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
                var ct = {
                        photos: {
                            title: "Photos",
                            singularTitle: "Photo",
                            files: Ve
                        },
                        icons: {
                            title: "Icons",
                            singularTitle: "Icon",
                            files: Oe
                        },
                        emoji: {
                            title: "Emoji",
                            singularTitle: "Emoji",
                            files: Le
                        },
                        stickers: {
                            title: "Stickers",
                            singularTitle: "Sticker",
                            files: Ye
                        }
                    } [F] || {
                        title: "Unknown",
                        singularTitle: "Unknown",
                        files: []
                    },
                    ut = He && O || et && L || nt && Y || at && G;
                return f.createElement(B, null, !U && !V && f.createElement(x.oI, null, f.createElement("h2", null, ct.title)), f.createElement(z, null, f.createElement("div", {
                    className: (0, g.iv)({
                        name: "sf0fa5",
                        styles: ".center-flex{display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:center;}"
                    })
                }, De && !U && !Y && !G && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement("h2", null, it, " Currently Equipped Profile Picture")), !U && !Y && !G && f.createElement("div", {
                    className: "center-flex ".concat((0, g.iv)({
                        name: "1gpzra0",
                        styles: "margin-bottom:1em"
                    }))
                }, (lt || st) && f.createElement(I.Z, {
                    image: null != de ? de : O ? De : Je,
                    borderColor: "green",
                    disableManagement: ot,
                    width: O ? 300 : 200,
                    isIcon: !O,
                    isAdminView: u
                }), (!De && O || !Je && !O || U && !de) && f.createElement(_, null, f.createElement(x.$1, {
                    icon: c.eH,
                    className: (0, g.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "No ", U ? "Image" : O ? "Profile Picture" : "Icon", " Selected"), f.createElement("br", null)), ut && f.createElement("div", {
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
                }), "You have reached your ", F, " limit!"), f.createElement(x.JX, {
                    className: "align-items-center mb-3"
                }, f.createElement(x.X2, null, !nt && Y && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return xe(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", ct.title)), !at && G && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return Ee(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", ct.title)), (!He && O || !et && L) && !u && (U ? f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        ue(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", ct.title)) : f.createElement(p.rU, {
                    to: "/home/upload".concat(ct.singularTitle),
                    className: "me-3"
                }, f.createElement(x.zx, {
                    neutral: !0
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: l.cf,
                    className: "me-2"
                }), "Upload ", ct.title)))), !U && De && !Y && !G && f.createElement(x.zx, {
                    onClick: O ? Me : Fe,
                    className: "px-3",
                    danger: !0
                }, f.createElement(x.$1, {
                    icon: s.NB,
                    className: "me-2"
                }), "Reset ", O ? "Photo" : "Icon"))), f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, O && f.createElement("h2", null, it, " Uploaded Photos (", Xe, "/", Ke, " Photos)"), L && f.createElement("h2", null, it, " Uploaded Icons (", Ge, "/", Qe, " Icons)"), Y && f.createElement("h2", null, it, " Uploaded Emoji (", $e, "/", tt, " Emoji)"), G && f.createElement("h2", null, it, " Uploaded Stickers (", We, "/", rt, " Stickers)")), u && Xe > 0 && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement(x.zx, {
                    className: "btn-danger",
                    onClick: qe
                }, "Reset Profile Pic and Delete All (", Xe, ") Photos")))), f.createElement(j, null, f.createElement(T, null, ct.files.map((function(e) {
                    return f.createElement("div", {
                        key: e.fileId
                    }, f.createElement(I.Z, {
                        image: e.imageUrl,
                        onSelect: U ? Ae : null,
                        onClick: U ? function() {
                            Ae(e.fileId, e.imageUrl)
                        } : function() {
                            Ue(e.fileId, e.highestVersionNumber)
                        },
                        showViewButton: !1,
                        onDelete: function() {
                            return Re(e.fileId)
                        },
                        showDeleteButton: !U,
                        onWear: U ? null : Ue,
                        fileId: e.fileId,
                        versionNumber: e.highestVersionNumber,
                        width: O ? 300 : 200,
                        isIcon: L,
                        isEmoji: Y,
                        isSticker: G,
                        isAnimated: e.isAnimated,
                        maskTag: e.maskTag,
                        frameRate: e.frameRate,
                        frameCount: e.frameCount
                    }))
                })))), ve && f.createElement(x.u_, {
                    onClose: function() {
                        return xe(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Emoji",
                    children: f.createElement(Z.Z, {
                        onClose: function() {
                            return xe(!1)
                        }
                    })
                }), be && f.createElement(x.u_, {
                    onClose: function() {
                        return Ee(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Sticker",
                    children: f.createElement(S.Z, {
                        onClose: function() {
                            return Ee(!1)
                        }
                    })
                }))
            };
            var B = (0, o.Z)("div", {
                    target: "edhboyc4"
                })({
                    name: "mkaaq0",
                    styles: "min-height:0;display:flex;flex-direction:column;width:100%"
                }),
                _ = (0, o.Z)("div", {
                    target: "edhboyc3"
                })({
                    name: "1rfuedz",
                    styles: "margin:1em;padding:0.2em 0.7em;color:var(--bs-warning);text-transform:uppercase;font-size:1.6em;border:4px solid var(--bs-warning);border-radius:12px"
                }),
                z = (0, o.Z)(x.Ao, {
                    target: "edhboyc2"
                })({
                    name: "1ch9yvl",
                    styles: "border-radius:0"
                }),
                j = (0, o.Z)(x.Ao, {
                    target: "edhboyc1"
                })({
                    name: "1xhi4a4",
                    styles: "background-color:#0f1113;min-height:0;margin-bottom:10px;overflow-y:auto"
                }),
                T = (0, o.Z)("div", {
                    target: "edhboyc0"
                })({
                    name: "1qzuqsf",
                    styles: "display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:space-around"
                })
        }
    }
]);
//# sourceMappingURL=81dbc352f4d394f7a097bf0b309e62e5cc3fc54ac007a4876b64d116c9328586.js.map