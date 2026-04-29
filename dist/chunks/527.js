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
                l = r(78076),
                s = r(64687),
                c = r.n(s),
                u = r(67294),
                m = r(32981),
                f = r(31541),
                d = r(22497),
                p = r(60933),
                w = r(64258),
                g = r(73423),
                h = r(60006),
                v = {
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
                b = "STYLE",
                y = r(80988);
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
                return u.createElement(u.Fragment, null, u.createElement(h.X2, null, u.createElement(E, null, u.createElement(y.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), u.createElement(k, null, u.createElement(y.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: r
                }, "Back"), u.createElement(y.zx, {
                    containerStyles: "".concat(a, "margin-left: 1em;"),
                    accent: !0,
                    onClick: n
                }, "Next"))))
            };
            var S = r(85042),
                C = r(70123);
            var I = (0, o.Z)(h.X2, {
                    target: "e1f7ou1h2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                P = (0, o.Z)(h.X2, {
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
            const _ = function(e) {
                e.completedCallback;
                var t = e.frames,
                    r = e.zoom,
                    n = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    l = e.crop,
                    s = e.setCrop,
                    c = (e.croppedArea, e.setCroppedArea),
                    m = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    f = u.useState(0),
                    d = (0, i.Z)(f, 2),
                    w = d[0];
                d[1];
                return u.createElement(N, null, u.createElement(I, null, u.createElement(C.ZP, {
                    image: (0, p.Gr)(t[w]),
                    crop: l,
                    zoom: r,
                    aspect: 1,
                    rotation: a,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return s(e)
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
                        n(1), o(0), s({
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
            var B = r(81192);
            var F = (0, o.Z)("div", {
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
                U = (0, o.Z)("div", {
                    target: "e1a4r75r5"
                })({
                    name: "btw7q7",
                    styles: "width:260px;height:260px;margin-bottom:1em;border:5px solid #555;border-radius:20px"
                }),
                z = (0, o.Z)("div", {
                    target: "e1a4r75r4"
                })({
                    name: "5y4g3n",
                    styles: "display:flex;flex-direction:column;row-gap:1em"
                }),
                R = (0, o.Z)("div", {
                    target: "e1a4r75r3"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                T = (0, o.Z)("div", {
                    target: "e1a4r75r2"
                })({
                    name: "9zele7",
                    styles: "width:4em;text-align:right;margin-right:1em"
                }),
                V = (0, o.Z)("div", {
                    target: "e1a4r75r1"
                })({
                    name: "1mwkkc",
                    styles: "margin-left:1em"
                }),
                A = (0, o.Z)("input", {
                    target: "e1a4r75r0"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                });
            const q = function(e) {
                var t = e.spriteSheet,
                    r = e.frameCount,
                    n = e.setFrameCount,
                    a = e.frameRate,
                    i = e.setFrameRate;
                return u.createElement(u.Fragment, null, u.createElement(j, null, "Set the frame count and frame rate for your sprite sheet."), u.createElement(F, null, u.createElement(U, null, u.createElement(B.Z, {
                    spriteSheet: t,
                    frameCount: r,
                    frameRate: a,
                    size: 250
                })), u.createElement(z, null, u.createElement(R, null, u.createElement(T, null, "Frames"), u.createElement(A, {
                    type: "range",
                    className: "sliderInput",
                    min: 2,
                    max: 64,
                    step: 1,
                    value: r,
                    onChange: function(e) {
                        n(e.target.value)
                    }
                }), u.createElement(V, null, r, " / 64")), u.createElement(R, null, u.createElement(T, null, "FPS"), u.createElement(A, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 64,
                    step: 1,
                    value: a,
                    onChange: function(e) {
                        i(e.target.value)
                    }
                }), u.createElement(V, null, a, " / 64")))))
            };
            var M = function(e) {
                    return "https://assets.vrchat.com/www/images/emoji-previews/".concat(v[e])
                },
                L = (0, o.Z)("span", {
                    target: "e1kj3uqh4"
                })({
                    name: "cmlg08",
                    styles: "font-size:1.2em;font-weight:bold"
                }),
                O = (0, o.Z)("div", {
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
                X = (0, o.Z)(y.zx, {
                    target: "e1kj3uqh0"
                })({
                    name: "1dpyl9g",
                    styles: "min-width:3em"
                });
            const $ = function(e) {
                var t = e.style,
                    r = e.setStyle;
                return u.createElement(O, null, u.createElement(L, null, t), u.createElement(G, {
                    src: M(t)
                }), u.createElement(Y, null, Object.keys(v).map((function(e) {
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
            var D = (0, o.Z)("div", {
                    target: "e1kgcgv31"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                J = (0, o.Z)("div", {
                    target: "e1kgcgv30"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const W = function(e) {
                var t = e.frames,
                    r = e.onCompleted,
                    n = e.onCancel,
                    o = e.onBack,
                    l = e.isPremadeSpriteSheet,
                    s = e.defaultParameters,
                    m = u.useState(x),
                    f = (0, i.Z)(m, 2),
                    d = f[0],
                    w = f[1],
                    g = u.useState(1),
                    h = (0, i.Z)(g, 2),
                    v = h[0],
                    y = h[1],
                    E = u.useState(0),
                    k = (0, i.Z)(E, 2),
                    S = k[0],
                    C = k[1],
                    I = u.useState({
                        x: 0,
                        y: 0
                    }),
                    P = (0, i.Z)(I, 2),
                    N = P[0],
                    B = P[1],
                    F = u.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    j = (0, i.Z)(F, 2),
                    U = j[0],
                    z = j[1],
                    R = u.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    T = (0, i.Z)(R, 2),
                    V = T[0],
                    A = T[1],
                    M = u.useState(null),
                    L = (0, i.Z)(M, 2),
                    O = L[0],
                    Y = L[1],
                    G = u.useState(1),
                    X = (0, i.Z)(G, 2),
                    W = X[0],
                    H = X[1],
                    K = u.useState(1),
                    Q = (0, i.Z)(K, 2),
                    ee = Q[0],
                    te = Q[1],
                    re = u.useState("Aura"),
                    ne = (0, i.Z)(re, 2),
                    ae = ne[0],
                    ie = ne[1],
                    oe = u.useState("square"),
                    le = (0, i.Z)(oe, 2),
                    se = le[0],
                    ce = (le[1], function() {
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
                                                r.width = V.width, r.height = V.height, n.drawImage(t, -V.x, -V.y), r.toBlob(function() {
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
                                        if (d !== x || l) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, ue(t[0]);
                                    case 3:
                                        n = e.sent, Y(n), w(b), e.next = 9;
                                        break;
                                    case 8:
                                        d === x && l ? w(b) : d === b && r({
                                            image: null != O ? O : t[0],
                                            style: ae,
                                            mask: se,
                                            frameCount: W,
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
                    l && (H((null == s ? void 0 : s.frameCount) || 4), te((null == s ? void 0 : s.frameRate) || 15))
                }), [l]), u.createElement(J, null, u.createElement(D, null, d === x && !l && u.createElement(_, {
                    frames: t,
                    completedCallback: r,
                    zoom: v,
                    setZoom: y,
                    rotation: S,
                    setRotation: C,
                    crop: N,
                    setCrop: B,
                    croppedArea: U,
                    setCroppedArea: z,
                    croppedAreaPixels: V,
                    setCroppedAreaPixels: A
                }), d === x && l && u.createElement(q, {
                    spriteSheet: t[0],
                    frameCount: W,
                    setFrameCount: H,
                    frameRate: ee,
                    setFrameRate: te
                }), d === b && u.createElement($, {
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
            var H = r(41255);

            function K(e, t) {
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
                    l = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        l = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (l) throw i
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
                                a = K(e);
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
                    s = o[0],
                    f = o[1],
                    h = u.useState(!1),
                    v = (0, i.Z)(h, 2),
                    x = v[0],
                    b = v[1],
                    y = (0, H.Yh)(),
                    E = (0, i.Z)(y, 2),
                    k = E[0],
                    Z = E[1],
                    S = Z.isLoading,
                    C = Z.isSuccess,
                    I = (Z.isError, Z.error),
                    P = (0, m.I0)(),
                    N = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        P((0, w.d)({
                            title: t,
                            icon: l.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    _ = function() {
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
                                        if (!x || o) {
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
                    B = function(e) {
                        var t = e.value,
                            r = e.min,
                            n = e.max,
                            a = e.defaultValue;
                        return t > n || t < r ? a : t
                    },
                    F = function(e) {
                        var t = e.file.name,
                            r = {
                                frameCount: null,
                                frameRate: null
                            },
                            n = t.match(/_(\d{1,2})frame/),
                            a = t.match(/_(\d{1,2})fps/);
                        return null !== n && (r.frameCount = B({
                            value: parseInt(n[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 4
                        })), null !== a && (r.frameRate = B({
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
                                        if (a = [n], !(0, p.sY)(n)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, ee(n);
                                    case 12:
                                        a = e.sent;
                                    case 13:
                                        i = F({
                                            file: n
                                        }), f(u.createElement(W, {
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
                            l = e.mask,
                            s = void 0 === l ? "square" : l;
                        k({
                            tag: n > 1 ? "emojianimated" : "emoji",
                            file: t.file || t,
                            frames: n,
                            framesOverTime: i,
                            animationStyle: o.toLowerCase(),
                            maskTag: s
                        })
                    };
                return u.useEffect((function() {
                    if (C) N({
                        title: "Upload Successful!",
                        message: "Your emoji was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== I) {
                        var e = I;
                        "object" === (0, n.Z)(e) && (e = e.message || JSON.stringify(e)), N({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [C, I]), u.createElement(te, {
                    className: "tw-flex tw-flex-col"
                }, S && u.createElement(g.Z, {
                    name: "emoji"
                }), !S && (s || u.createElement(d.Z, {
                    fileSelectedCallback: function(e) {
                        return j(e)
                    },
                    isForAnimatedEmoji: !0,
                    setIsPremadeSpriteSheet: b,
                    isPremadeSpriteSheet: x,
                    hintText: "Upload a static emoji with a single image, or use a sprite sheet to create an animated emoji.",
                    hintTextMuted: u.createElement(u.Fragment, null, "A sprite sheet should be a 1024x1024 image with square frames in a uniform grid, ordered left to right, then top to bottom.", u.createElement("br", null), "You can preset animation values in advance using the file name, like so: ", u.createElement("em", null, "CoolEmoji_14frames_10fps.png"))
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
                l = r(78076),
                s = r(64687),
                c = r.n(s),
                u = r(67294),
                m = r(32981),
                f = r(64258),
                d = r(60933),
                p = r(22497),
                w = r(73423),
                g = r(39191),
                h = r(41255);
            var v = (0, o.Z)("div", {
                target: "e1et7e2k0"
            })({
                name: "dm9b0z",
                styles: "width:100%;min-height:30em;overflow:hidden"
            });
            const x = function(e) {
                var t = e.onClose,
                    r = u.useState(null),
                    o = (0, i.Z)(r, 2),
                    s = o[0],
                    x = o[1],
                    b = (0, h.Yh)(),
                    y = (0, i.Z)(b, 2),
                    E = y[0],
                    k = y[1],
                    Z = k.isLoading,
                    S = k.isSuccess,
                    C = (k.isError, k.error),
                    I = (0, m.I0)(),
                    P = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        I((0, f.d)({
                            title: t,
                            icon: l.Vm,
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
                                        x(u.createElement(g.Z, {
                                            baseImage: n,
                                            onCompleted: B,
                                            onCancel: t,
                                            onBack: function() {
                                                return x(null)
                                            },
                                            maxImageDimension: 1024
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
                    _ = function() {
                        var e = (0, a.Z)(c().mark((function e(t) {
                            var r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, d.uG)(r);
                                    case 3:
                                        if (n = e.sent, !(n.width < 64 || n.height < 64)) {
                                            e.next = 8;
                                            break
                                        }
                                        return P({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 8:
                                        return e.abrupt("return", !0);
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
                    B = function(e) {
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
                    else if (void 0 !== C) {
                        var e = C;
                        "object" === (0, n.Z)(e) && (e = e.message || JSON.stringify(e)), P({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [S, C]), u.createElement(v, {
                    className: "tw-flex tw-flex-col"
                }, Z && u.createElement(w.Z, {
                    name: "sticker"
                }), !Z && (s || u.createElement(p.Z, {
                    fileSelectedCallback: function(e) {
                        return N(e)
                    },
                    hintText: "Stickers should be a square image, at least 64x64. Images larger than 1024x1024 will be resized automatically.",
                    hintTextMuted: u.createElement(u.Fragment, null, "For best results, use a power-of-two size (64, 128, 256, 512, or 1024 pixels).", u.createElement("br", null), "You can also create stickers inside VRChat using the camera!")
                })))
            }
        },
        40527: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => F
            });
            var n = r(42138),
                a = r(15861),
                i = r(54546),
                o = r(4965),
                l = r(76553),
                s = r(87695),
                c = r(59545),
                u = r(2723),
                m = r(68055),
                f = r(609),
                d = r(64687),
                p = r.n(d),
                w = r(67294),
                g = r(32981),
                h = r(79655),
                v = r(83505),
                x = r(41255),
                b = r(12227),
                y = r(80988),
                E = r(5513),
                k = r(34984),
                Z = r(22202),
                S = r(69116),
                C = r(60229),
                I = r(46686),
                P = r(95024),
                N = r(50347),
                _ = r(74444),
                B = r(39908);
            const F = function(e) {
                var t, r, o = e.userId,
                    d = e.isAdminView,
                    F = e.isSelector,
                    T = void 0 !== F && F,
                    V = e.selectedCallback,
                    A = void 0 === V ? null : V,
                    q = e.activeTab,
                    M = void 0 === q ? "icons" : q,
                    L = e.hideTitle,
                    O = void 0 !== L && L,
                    Y = e.enableGalleryTooltip,
                    G = void 0 !== Y && Y,
                    X = "photos" === M,
                    $ = "icons" === M,
                    D = "emoji" === M,
                    J = "stickers" === M,
                    W = (0, g.I0)(),
                    H = (0, g.v9)((function(e) {
                        return e.user.photoList
                    })),
                    K = (0, g.v9)((function(e) {
                        return e.user.iconList
                    })),
                    Q = w.useState([]),
                    ee = (0, i.Z)(Q, 2),
                    te = ee[0],
                    re = ee[1],
                    ne = w.useState(!1),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    oe = ae[1],
                    le = w.useState(!1),
                    se = (0, i.Z)(le, 2),
                    ce = se[0],
                    ue = se[1],
                    me = w.useState(!1),
                    fe = (0, i.Z)(me, 2),
                    de = fe[0],
                    pe = fe[1],
                    we = w.useState(null),
                    ge = (0, i.Z)(we, 2),
                    he = (ge[0], ge[1]),
                    ve = w.useState(!1),
                    xe = (0, i.Z)(ve, 2),
                    be = xe[0],
                    ye = xe[1],
                    Ee = w.useState(!1),
                    ke = (0, i.Z)(Ee, 2),
                    Ze = ke[0],
                    Se = ke[1],
                    Ce = (0, S.Tu)(),
                    Ie = Ce.user,
                    Pe = Ce.fetchUser,
                    Ne = (0, S.v$)(o).user,
                    _e = (0, Z.q7)({
                        condensed: !0
                    }).data,
                    Be = void 0 === _e ? [] : _e,
                    Fe = (0, x.eV)({
                        userId: o
                    }).data,
                    je = (0, x._h)({
                        userId: o
                    }).data,
                    Ue = (0, S.j$)("galleryTooltipSeen"),
                    ze = Ue.shouldShow,
                    Re = Ue.markAsSeen,
                    Te = (0, S.cV)(),
                    Ve = Te.isVrcPlusUser,
                    Ae = Te.isChurnedVrcPlusUser,
                    qe = Te.isNeverHadVrcPlusUser,
                    Me = (0, x.g3)(),
                    Le = (0, i.Z)(Me, 2),
                    Oe = Le[0],
                    Ye = Le[1];
                Ye.isLoading, Ye.isSuccess, Ye.isError, Ye.error;
                w.useEffect((function() {
                    var e = d ? o : "";
                    W((0, k.wP)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    })), W((0, k.wu)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    }))
                }), [o, d]);
                var Ge = function() {
                        var e = (0, a.Z)(p().mark((function e(t, r) {
                            var n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!D && !J) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = (0, b.qm)({
                                            fileId: t,
                                            versionNumber: r
                                        }), e.next = 5, W((0, E._W)({
                                            userId: Ie.id,
                                            data: X ? {
                                                profilePicOverride: n
                                            } : {
                                                userIcon: n
                                            }
                                        }));
                                    case 5:
                                        Pe();
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
                    Xe = function(e, t) {
                        he(t), A(e, t)
                    },
                    $e = function() {
                        var e = (0, a.Z)(p().mark((function e(t) {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (re([t].concat((0, n.Z)(te))), !X) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, W((0, k.JJ)({
                                            fileId: t
                                        }));
                                    case 4:
                                        return e.next = 6, W((0, k.oI)({
                                            fileId: t
                                        }));
                                    case 6:
                                    case 13:
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 8:
                                        if (!$) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11, W((0, k.ap)({
                                            fileId: t
                                        }));
                                    case 11:
                                        return e.next = 13, W((0, k.NB)({
                                            fileId: t
                                        }));
                                    case 15:
                                        if (!D) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, Oe({
                                            fileId: t,
                                            tag: "emoji",
                                            userId: o
                                        });
                                    case 20:
                                        if (!J) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 23, Oe({
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
                    De = function() {
                        var e = (0, a.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, We();
                                    case 2:
                                        return e.next = 4, Promise.all(H.map(function() {
                                            var e = (0, a.Z)(p().mark((function e(t) {
                                                return p().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", $e(t.id));
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
                    Je = function() {
                        var e = (0, a.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, W((0, k.dm)({
                                            userId: o,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 3:
                                        ue(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, W((0, E._W)({
                                            userId: Ie.id,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 8:
                                        Pe();
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
                    We = function() {
                        var e = (0, a.Z)(p().mark((function e() {
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, W((0, k.dm)({
                                            userId: o,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 3:
                                        oe(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, W((0, E._W)({
                                            userId: Ie.id,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 8:
                                        Pe();
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
                    He = H.map((function(e) {
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
                    Ke = K.map((function(e) {
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
                    Qe = (Fe || []).map((function(e) {
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
                    et = (je || []).map((function(e) {
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
                    tt = Ke.length,
                    rt = He.length,
                    nt = Qe.length,
                    at = et.length,
                    it = d ? Ne.profilePicOverride : Ie.profilePicOverride;
                ie && (it = "");
                d ? Ne.userIcon : Ie.userIcon;
                var ot = d ? "64" : Be["permission-user-gallery"],
                    lt = ot <= rt,
                    st = d ? "64" : Be["permission-user-icons"],
                    ct = st <= tt,
                    ut = (null === (t = Be["permission-user-emoji"]) || void 0 === t ? void 0 : t.max) || 9,
                    mt = (null === (r = Be["permission-user-stickers"]) || void 0 === r ? void 0 : r.max) || 9,
                    ft = ut <= nt,
                    dt = mt <= at,
                    pt = d ? "".concat(Ne.displayName, "'s") : "Your";
                if (de) switch (M) {
                    case "photos":
                        return w.createElement(C.default, {
                            isSelector: T,
                            successCallback: function() {
                                pe(!1), W((0, k.wP)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "icons":
                        return w.createElement(B.default, {
                            isSelector: T,
                            successCallback: function() {
                                pe(!1), W((0, k.wu)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "emoji":
                        return w.createElement(_.default, {
                            isSelector: T,
                            successCallback: function() {
                                pe(!1)
                            }
                        });
                    case "stickers":
                        return w.createElement("div", null, "Sticker Uploader Layout");
                    default:
                        return null
                }
                var wt = {
                        photos: {
                            title: "Photos",
                            singularTitle: "Photo",
                            files: He
                        },
                        icons: {
                            title: "Icons",
                            singularTitle: "Icon",
                            files: Ke
                        },
                        emoji: {
                            title: "Emoji",
                            singularTitle: "Emoji",
                            files: Qe
                        },
                        stickers: {
                            title: "Stickers",
                            singularTitle: "Sticker",
                            files: et
                        }
                    } [M] || {
                        title: "Unknown",
                        singularTitle: "Unknown",
                        files: []
                    },
                    gt = lt && X || ct && $ || ft && D || dt && J,
                    ht = w.createElement(y.qX, {
                        type: "custom",
                        hideIcon: !0,
                        color: "#2E333D",
                        iconColor: "#F9FF00",
                        className: "tw-w-full"
                    }, w.createElement("div", {
                        className: "tw-flex tw-items-center tw-w-full tw-gap-2 tw-flex-wrap"
                    }, w.createElement(y.$1, {
                        icon: f.by,
                        color: "#F9FF00",
                        className: "tw-w-8 tw-h-8"
                    }), w.createElement("p", {
                        className: "tw-m-0 tw-flex-1"
                    }, X ? "Your uploaded banners are temporarily locked." : "Your user icons are temporarily locked.", w.createElement("br", null), w.createElement("span", {
                        className: "tw-text-light-grey"
                    }, X ? "Your banners are saved, but you'll need to join VRC+ to restore full access." : "Your icons are saved, but you'll need to join VRC+ to restore full access.")), w.createElement(h.rU, {
                        to: "https://hello.vrchat.com/vrchatplus",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, w.createElement(y.zx, {
                        icon: m.LE,
                        className: "tw-bg-[#F9FF0066] tw-border-[#F9FF00] tw-text-white tw-px-4 sm:tw-w-[200px]"
                    }, "Join VRC+")))),
                    vt = w.createElement(y.qX, {
                        type: "custom",
                        hideIcon: !0,
                        color: "#2E333D",
                        iconColor: "#F9FF00",
                        className: "tw-p-5 tw-w-full"
                    }, w.createElement("div", {
                        className: "tw-flex tw-items-center tw-gap-5 tw-w-full tw-flex-wrap"
                    }, w.createElement(y.$1, {
                        icon: f.by,
                        color: "#F9FF00",
                        className: "tw-w-8 tw-h-8"
                    }), w.createElement("p", {
                        className: "tw-m-0 tw-flex-1"
                    }, X ? "Unlock custom profile banner uploads with VRC+" : "Unlock custom profile icon uploads with VRC+"), w.createElement(h.rU, {
                        to: "https://hello.vrchat.com/vrchatplus",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, w.createElement(y.zx, {
                        icon: m.LE,
                        className: "tw-bg-[#F9FF0066] tw-border-[#F9FF00] tw-text-white tw-px-4 sm:tw-w-[200px]"
                    }, "Join VRC+"))));
                return w.createElement(j, null, !T && !O && w.createElement(y.oI, null, w.createElement("h2", null, wt.title)), w.createElement(U, null, w.createElement("div", {
                    className: (0, v.iv)({
                        name: "sf0fa5",
                        styles: ".center-flex{display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:center;}"
                    })
                }, it && !T && !D && !J && !X && w.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, w.createElement("h2", null, pt, " Currently Equipped Profile Picture")), w.createElement(y.JX, {
                    className: "tw-mb-3 tw-gap-4"
                }, w.createElement(y.X2, {
                    className: "tw-items-center tw-gap-4 tw-relative tw-w-full tw-flex-wrap"
                }, (D || J) && !gt && w.createElement(y.zx, {
                    neutral: !0,
                    onClick: function() {
                        return D ? ye(!0) : Se(!0)
                    }
                }, w.createElement(y.X2, {
                    className: "tw-items-center tw-px-3"
                }, w.createElement(y.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", wt.title)), Ve && (X || $) && !d && (T ? w.createElement(y.zx, {
                    neutral: !0,
                    disabled: gt,
                    onClick: function() {
                        gt || pe(!0)
                    }
                }, w.createElement(y.X2, {
                    className: "tw-items-center tw-px-3"
                }, w.createElement(y.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", wt.title)) : w.createElement(h.rU, {
                    to: gt ? "#" : "/home/upload".concat(wt.singularTitle)
                }, w.createElement(y.zx, {
                    neutral: !0,
                    disabled: gt
                }, w.createElement(y.X2, {
                    className: "tw-items-center tw-px-3"
                }, w.createElement(y.$1, {
                    icon: u.cf,
                    className: "tw-me-2"
                }), "Upload ", wt.title)))), Ae && (X || $) && !d && ht, qe && (X || $) && !d && vt, !T && it && !D && !J && !X && w.createElement(y.zx, {
                    onClick: X ? We : Je,
                    className: "tw-px-3",
                    danger: !0
                }, w.createElement(y.$1, {
                    icon: c.NB,
                    className: "tw-me-2"
                }), "Reset ", X ? "Photo" : "Icon"), X && !d && Ve && w.createElement("div", {
                    className: "tw-relative"
                }, ot && rt && w.createElement("span", {
                    className: "tw-text-light-grey"
                }, rt, "/", ot, " Uploaded Photos"), G && ze && w.createElement("div", {
                    role: "tooltip",
                    "aria-label": "Looking to change your profile icon? Head to Profile Settings",
                    className: "tw-flex tw-items-center tw-gap-2 tw-whitespace-normal tw-text-center tw-w-96 tw-top-[calc(100%+0.5rem)] tw-left-0 md:tw-left-[calc(100%+0.5rem)] md:tw-top-1/2 md:tw--translate-y-1/2 tw-absolute tw-py-3 tw-px-3 md:tw-px-4  tw-bg-dark-teal tw-text-white tw-text-xs tw-rounded tw-shadow-lg tw-z-10"
                }, w.createElement("p", {
                    className: "tw-mb-0"
                }, "Looking to change your profile icon? Head to ", w.createElement(h.rU, {
                    to: "/home/user/me?settings=true"
                }, "Profile Settings")), w.createElement("button", {
                    type: "button",
                    "aria-label": "Dismiss tooltip",
                    className: " tw-border-none tw-rounded-full tw-p-0",
                    onClick: Re
                }, w.createElement("div", {
                    className: "tw-absolute tw-left-1/2 tw-top-0 tw--translate-y-1/2 md:tw-top-1/2 tw-bg-dark-teal md:tw-left-0 md:tw--translate-x-1/2 tw-w-2 tw-h-2 tw-rotate-45"
                }), w.createElement(y.$1, {
                    icon: s.faCircleXmark,
                    className: "tw-w-4 tw-h-4 tw-text-base"
                }))))), gt && w.createElement("div", {
                    className: "tw-mx-auto tw-py-1 tw-px-3 tw-uppercase tw-text-2xl tw-border-1 tw-border-solid tw-border-red tw-rounded-md tw-text-red tw-max-w-max"
                }, w.createElement(y.$1, {
                    icon: l.eH,
                    className: "tw-mr-2"
                }), "You have reached your ", M, " limit!")), w.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, $ && w.createElement("h2", null, pt, " Uploaded Icons (", tt, "/", st, " Icons)"), D && w.createElement("h2", null, pt, " Uploaded Emoji (", nt, "/", ut, " Emoji)"), J && w.createElement("h2", null, pt, " Uploaded Stickers (", at, "/", mt, " Stickers)")), d && rt > 0 && w.createElement("div", {
                    className: "tw-m-auto tw-text-center"
                }, w.createElement(y.zx, {
                    className: "btn-danger",
                    onClick: De
                }, "Reset Profile Pic and Delete All (", rt, ") Photos")))), w.createElement(z, null, w.createElement(R, null, wt.files.map((function(e) {
                    return w.createElement("div", {
                        key: e.fileId
                    }, w.createElement(N.Z, {
                        image: e.imageUrl,
                        onSelect: T ? Xe : null,
                        onClick: function() {
                            return function(e) {
                                var t = e.fileId,
                                    r = e.imageUrl,
                                    n = e.highestVersionNumber;
                                if (X) return null;
                                if (t) {
                                    if (T) {
                                        if (!r) return;
                                        return Xe(t, r)
                                    }
                                    if (n) return Ge(t, n)
                                }
                            }({
                                fileId: e.fileId,
                                imageUrl: e.imageUrl,
                                highestVersionNumber: e.highestVersionNumber
                            })
                        },
                        showViewButton: !1,
                        onDelete: function() {
                            return $e(e.fileId)
                        },
                        showDeleteButton: !T,
                        onWear: X || T ? null : Ge,
                        fileId: e.fileId,
                        versionNumber: e.highestVersionNumber,
                        width: X ? 300 : 200,
                        isIcon: $,
                        isEmoji: D,
                        isSticker: J,
                        isAnimated: e.isAnimated,
                        maskTag: e.maskTag,
                        frameRate: e.frameRate,
                        frameCount: e.frameCount
                    }))
                })))), be && w.createElement(y.u_, {
                    onClose: function() {
                        return ye(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Emoji"
                }, w.createElement(I.Z, {
                    onClose: function() {
                        return ye(!1)
                    }
                })), Ze && w.createElement(y.u_, {
                    onClose: function() {
                        return Se(!1)
                    },
                    isVisible: !0,
                    title: "Upload a New Sticker"
                }, w.createElement(P.Z, {
                    onClose: function() {
                        return Se(!1)
                    }
                })))
            };
            var j = (0, o.Z)("div", {
                    target: "edhboyc4"
                })({
                    name: "mkaaq0",
                    styles: "min-height:0;display:flex;flex-direction:column;width:100%"
                }),
                U = (0, o.Z)(y.Ao, {
                    target: "edhboyc2"
                })({
                    name: "1ch9yvl",
                    styles: "border-radius:0"
                }),
                z = (0, o.Z)(y.Ao, {
                    target: "edhboyc1"
                })({
                    name: "j8uupa",
                    styles: "background-color:#181B1F;min-height:0;margin-bottom:10px;overflow-y:auto"
                }),
                R = (0, o.Z)("div", {
                    target: "edhboyc0"
                })({
                    name: "1qzuqsf",
                    styles: "display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:space-around"
                })
        }
    }
]);
//# sourceMappingURL=ccb0988a438483d60b0f36d20f8974c9173ada12642d7d04693e1c84e822174d.js.map