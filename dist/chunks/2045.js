"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2045], {
        52045: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => tt
            });
            var r = n(42138),
                a = n(15861),
                i = n(54546),
                o = n(4965),
                l = n(59545),
                s = n(2723),
                c = n(76553),
                u = n(64687),
                m = n.n(u),
                f = n(67294),
                d = n(32981),
                p = n(79655),
                g = n(83505),
                h = n(41255),
                v = n(12227),
                x = n(34226),
                w = n(5513),
                y = n(34984),
                E = n(22202),
                b = n(80873),
                k = n(60229),
                Z = n(71002),
                S = n(78076),
                C = n(31541),
                I = (n(37337), n(59660)),
                P = n(73462);
            var j = (0, o.Z)(x.$1, {
                    target: "e14fnvay1"
                })({
                    name: "4j0agp",
                    styles: "margin-right:0.3em"
                }),
                z = (0, o.Z)("input", {
                    target: "e14fnvay0"
                })({
                    name: "eivff4",
                    styles: "display:none"
                });
            const N = function(e) {
                var t = e.callback,
                    n = e.text,
                    r = (0, f.useRef)(null);
                return f.createElement(f.Fragment, null, f.createElement(z, {
                    type: "file",
                    id: "file",
                    ref: r,
                    accept: ".png,.jpg,.jpeg,.svg",
                    onChange: function(e) {
                        var n = e.target.files[0];
                        return void 0 === n ? console.error("Given file was undefined?") : t(n)
                    }
                }), f.createElement(x.zx, {
                    accent: !0,
                    containerStyles: "width: 8em; height: 2em; display: inline;",
                    onClick: function() {
                        r.current.click()
                    }
                }, f.createElement(j, {
                    color: "#6ae3f9",
                    icon: P.Pk,
                    width: 15
                }), n))
            };
            var B = (0, o.Z)("div", {
                    target: "e1ytxlu95"
                })({
                    name: "zl1inp",
                    styles: "display:flex;justify-content:center"
                }),
                _ = (0, o.Z)("div", {
                    target: "e1ytxlu94"
                })({
                    name: "yq7cq8",
                    styles: "font-style:italic;margin-left:1em;cursor:pointer;user-select:none"
                }),
                A = (0, o.Z)("input", {
                    target: "e1ytxlu93"
                })(""),
                q = (0, o.Z)("div", {
                    target: "e1ytxlu92"
                })({
                    name: "1gpzra0",
                    styles: "margin-bottom:1em"
                }),
                R = (0, o.Z)(x.$1, {
                    target: "e1ytxlu91"
                })({
                    name: "1iy47er",
                    styles: "padding-bottom:0.3em"
                }),
                T = (0, o.Z)("div", {
                    target: "e1ytxlu90"
                })({
                    name: "1bk55cy",
                    styles: "width:100%;height:100%;background-color:#0a0a0d;border-radius:8px;border-style:dashed;border-width:2px;border-color:#737373;display:flex;align-items:center;justify-content:center;text-align:center"
                });
            const U = function(e) {
                var t = e.fileCallback,
                    n = e.isForAnimatedEmoji,
                    r = e.setIsPremadeSpriteSheet,
                    a = e.isPremadeSpriteSheet,
                    o = function() {
                        r(!a)
                    };
                return window.addEventListener("dragover", (function(e) {
                    e.preventDefault()
                }), !1), window.addEventListener("drop", (function(e) {
                    e.preventDefault()
                }), !1), f.createElement(T, {
                    onDrop: function(e) {
                        var n;
                        e.stopPropagation(), e.preventDefault();
                        var r = null === (n = e.dataTransfer) || void 0 === n ? void 0 : n.files;
                        if (void 0 === r) return console.error("Drag & Drop operation failed!", e);
                        var a = (0, i.Z)(r, 1)[0];
                        return void 0 !== a ? t(a) : console.error("Drag & Drop operation failed!", e)
                    }
                }, f.createElement("div", null, f.createElement(R, {
                    color: "#737373",
                    icon: I.l9,
                    width: 50
                }), " ", f.createElement("br", null), f.createElement(q, null, f.createElement("strong", null, "Drag and drop files here or"), "  ", f.createElement(N, {
                    callback: t,
                    text: "Select Files"
                })), n && f.createElement(B, null, f.createElement(A, {
                    type: "checkbox",
                    onChange: o,
                    checked: a
                }), f.createElement(_, {
                    onClick: o
                }, "Enable Sprite Sheet Mode [BETA]"))))
            };
            var F = n(60006);
            const M = function(e) {
                var t = e.fileSelectedCallback,
                    n = e.isForAnimatedEmoji,
                    r = e.isPremadeSpriteSheet,
                    a = e.setIsPremadeSpriteSheet,
                    i = e.hintText,
                    o = e.hintTextMuted;
                return f.createElement(f.Fragment, null, f.createElement(F.X2, {
                    className: "tw-grow"
                }, f.createElement(U, {
                    fileCallback: function(e) {
                        t({
                            file: e,
                            isPremadeSpriteSheet: r
                        })
                    },
                    isForAnimatedEmoji: n,
                    setIsPremadeSpriteSheet: a,
                    isPremadeSpriteSheet: r
                })), (i || o) && f.createElement(F.X2, null, f.createElement("div", {
                    className: "tw-mt-6"
                }, i && f.createElement("strong", null, i), i && o && f.createElement("br", null), o && f.createElement("span", {
                    className: "tw-text-light-grey"
                }, o))))
            };
            var V = n(60933),
                D = n(64258),
                O = n(43862);
            var X = (0, o.Z)("div", {
                    target: "evoo10b1"
                })({
                    name: "12a04nj",
                    styles: "display:flex;align-items:center;justify-content:center;height:100%"
                }),
                L = (0, o.Z)("span", {
                    target: "evoo10b0"
                })({
                    name: "1vydhc8",
                    styles: "margin-left:1em;font-size:1.5em;font-weight:bold"
                });
            const G = function(e) {
                var t = e.name,
                    n = void 0 === t ? "emoji" : t;
                return f.createElement(X, null, f.createElement(O.Z, {
                    size: "3x"
                }), f.createElement(L, null, "Uploading your ", n, "..."))
            };
            var Y = {
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
                $ = "CROP",
                W = "STYLE";
            var J = (0, o.Z)("div", {
                    target: "elhkzni1"
                })({
                    name: "bp2yox",
                    styles: "flex:50%"
                }),
                K = (0, o.Z)("div", {
                    target: "elhkzni0"
                })({
                    name: "4kj7g6",
                    styles: "flex:50%;display:flex;justify-content:right"
                });
            const H = function(e) {
                var t = e.onCancel,
                    n = e.onBack,
                    r = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return f.createElement(f.Fragment, null, f.createElement(F.X2, null, f.createElement(J, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), f.createElement(K, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: n
                }, "Back"), f.createElement(x.zx, {
                    containerStyles: "".concat(a, "margin-left: 1em;"),
                    accent: !0,
                    onClick: r
                }, "Next"))))
            };
            var Q = n(23208),
                ee = n(43946),
                te = n(7469),
                ne = n(18478),
                re = n(86646);
            var ae = (0, o.Z)(x.zx, {
                    target: "eteiwuh4"
                })({
                    name: "1d3mj7z",
                    styles: "width:10em;margin-right:1.5em"
                }),
                ie = (0, o.Z)(re.Z, {
                    target: "eteiwuh3"
                })({
                    name: "cbglpv",
                    styles: "margin:0 0.5em"
                }),
                oe = (0, o.Z)("input", {
                    target: "eteiwuh2"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                }),
                le = (0, o.Z)(F.X2, {
                    target: "eteiwuh1"
                })({
                    name: "1h1nmc6",
                    styles: "height:3em;width:80%;margin:0 auto;align-items:center;justify-content:center"
                }),
                se = (0, o.Z)("button", {
                    target: "eteiwuh0"
                })({
                    name: "1dw9q8m",
                    styles: "outline:none!important;border:none;background:#064b5c;width:2em;height:2em;margin-left:0.5em;border-radius:100%;display:flex;align-items:center;justify-content:center"
                });
            const ce = function(e) {
                var t = e.onReset,
                    n = e.onZoom,
                    r = e.onRotate,
                    a = (e.onFlip, e.zoom);
                return f.createElement(le, null, f.createElement(ae, {
                    neutral: !0,
                    onClick: function() {
                        t()
                    }
                }, "Reset"), f.createElement(ie, {
                    width: 20,
                    icon: ne.Wq
                }), f.createElement(oe, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 3,
                    step: .01,
                    value: a,
                    onChange: function(e) {
                        var t = e.target.value;
                        n(t)
                    }
                }), f.createElement(ie, {
                    width: 20,
                    icon: te.q9
                }), f.createElement(se, {
                    onClick: function() {
                        return r(-90)
                    }
                }, f.createElement(re.Z, {
                    icon: ee.Xn,
                    color: "#1fd1ed",
                    width: 20
                })), f.createElement(se, {
                    onClick: function() {
                        return r(90)
                    }
                }, f.createElement(re.Z, {
                    icon: Q.mH,
                    color: "#1fd1ed",
                    width: 20
                })))
            };
            var ue = n(70123);
            var me = (0, o.Z)(F.X2, {
                    target: "e1f7ou1h2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                fe = (0, o.Z)(F.X2, {
                    target: "e1f7ou1h1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                de = (0, o.Z)("div", {
                    target: "e1f7ou1h0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const pe = function(e) {
                e.completedCallback;
                var t = e.frames,
                    n = e.zoom,
                    r = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    l = e.crop,
                    s = e.setCrop,
                    c = (e.croppedArea, e.setCroppedArea),
                    u = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    m = f.useState(0),
                    d = (0, i.Z)(m, 2),
                    p = d[0];
                d[1];
                return f.createElement(de, null, f.createElement(me, null, f.createElement(ue.ZP, {
                    image: (0, V.Gr)(t[p]),
                    crop: l,
                    zoom: n,
                    aspect: 1,
                    rotation: a,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return s(e)
                    },
                    onCropAreaChange: function(e, t) {
                        c(e), u(t)
                    },
                    onZoomChange: function(e) {
                        return r(e)
                    }
                })), f.createElement(fe, null, f.createElement(ce, {
                    onRotate: function(e) {
                        o(a + e)
                    },
                    onReset: function() {
                        r(1), o(0), s({
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
                        r(e)
                    },
                    zoom: n
                })))
            };
            var ge = n(81192);
            var he = (0, o.Z)("div", {
                    target: "e1a4r75r7"
                })({
                    name: "wrqpcr",
                    styles: "height:30em;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:3em;background-color:#0a0a0d"
                }),
                ve = (0, o.Z)("div", {
                    target: "e1a4r75r6"
                })({
                    name: "1muh860",
                    styles: "font-size:12pt;font-weight:bold;margin-bottom:0.5em"
                }),
                xe = (0, o.Z)("div", {
                    target: "e1a4r75r5"
                })({
                    name: "btw7q7",
                    styles: "width:260px;height:260px;margin-bottom:1em;border:5px solid #555;border-radius:20px"
                }),
                we = (0, o.Z)("div", {
                    target: "e1a4r75r4"
                })({
                    name: "5y4g3n",
                    styles: "display:flex;flex-direction:column;row-gap:1em"
                }),
                ye = (0, o.Z)("div", {
                    target: "e1a4r75r3"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                Ee = (0, o.Z)("div", {
                    target: "e1a4r75r2"
                })({
                    name: "9zele7",
                    styles: "width:4em;text-align:right;margin-right:1em"
                }),
                be = (0, o.Z)("div", {
                    target: "e1a4r75r1"
                })({
                    name: "1mwkkc",
                    styles: "margin-left:1em"
                }),
                ke = (0, o.Z)("input", {
                    target: "e1a4r75r0"
                })({
                    name: "1d9z9vl",
                    styles: "width:25em"
                });
            const Ze = function(e) {
                var t = e.spriteSheet,
                    n = e.frameCount,
                    r = e.setFrameCount,
                    a = e.frameRate,
                    i = e.setFrameRate;
                return f.createElement(f.Fragment, null, f.createElement(ve, null, "Set the frame count and frame rate for your sprite sheet."), f.createElement(he, null, f.createElement(xe, null, f.createElement(ge.Z, {
                    spriteSheet: t,
                    frameCount: n,
                    frameRate: a,
                    size: 250
                })), f.createElement(we, null, f.createElement(ye, null, f.createElement(Ee, null, "Frames"), f.createElement(ke, {
                    type: "range",
                    className: "sliderInput",
                    min: 2,
                    max: 64,
                    step: 1,
                    value: n,
                    onChange: function(e) {
                        r(e.target.value)
                    }
                }), f.createElement(be, null, n, " / 64")), f.createElement(ye, null, f.createElement(Ee, null, "FPS"), f.createElement(ke, {
                    type: "range",
                    className: "sliderInput",
                    min: 1,
                    max: 64,
                    step: 1,
                    value: a,
                    onChange: function(e) {
                        i(e.target.value)
                    }
                }), f.createElement(be, null, a, " / 64")))))
            };
            var Se = function(e) {
                    return "https://assets.vrchat.com/www/images/emoji-previews/".concat(Y[e])
                },
                Ce = (0, o.Z)("span", {
                    target: "e1kj3uqh4"
                })({
                    name: "cmlg08",
                    styles: "font-size:1.2em;font-weight:bold"
                }),
                Ie = (0, o.Z)("div", {
                    target: "e1kj3uqh3"
                })({
                    name: "1ac844z",
                    styles: "display:flex;flex-direction:column;height:100%;align-items:center"
                }),
                Pe = (0, o.Z)("div", {
                    target: "e1kj3uqh2"
                })({
                    name: "q18sga",
                    styles: "display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-bottom:1em;column-gap:0.3em;row-gap:1em"
                }),
                je = (0, o.Z)("img", {
                    target: "e1kj3uqh1"
                })({
                    name: "vsv6y8",
                    styles: "width:300px;margin-bottom:2em"
                }),
                ze = (0, o.Z)(x.zx, {
                    target: "e1kj3uqh0"
                })({
                    name: "1dpyl9g",
                    styles: "min-width:3em"
                });
            const Ne = function(e) {
                var t = e.style,
                    n = e.setStyle;
                return f.createElement(Ie, null, f.createElement(Ce, null, t), f.createElement(je, {
                    src: Se(t)
                }), f.createElement(Pe, null, Object.keys(Y).map((function(e) {
                    return e === t ? f.createElement(ze, {
                        key: e
                    }, e) : f.createElement(ze, {
                        neutral: !0,
                        key: e,
                        onClick: function() {
                            return n(e)
                        }
                    }, e)
                }))))
            };
            var Be = (0, o.Z)("div", {
                    target: "e1kgcgv31"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                _e = (0, o.Z)("div", {
                    target: "e1kgcgv30"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const Ae = function(e) {
                var t = e.frames,
                    n = e.onCompleted,
                    r = e.onCancel,
                    o = e.onBack,
                    l = e.isPremadeSpriteSheet,
                    s = e.defaultParameters,
                    c = f.useState($),
                    u = (0, i.Z)(c, 2),
                    d = u[0],
                    p = u[1],
                    g = f.useState(1),
                    h = (0, i.Z)(g, 2),
                    v = h[0],
                    x = h[1],
                    w = f.useState(0),
                    y = (0, i.Z)(w, 2),
                    E = y[0],
                    b = y[1],
                    k = f.useState({
                        x: 0,
                        y: 0
                    }),
                    Z = (0, i.Z)(k, 2),
                    S = Z[0],
                    C = Z[1],
                    I = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    P = (0, i.Z)(I, 2),
                    j = P[0],
                    z = P[1],
                    N = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    B = (0, i.Z)(N, 2),
                    _ = B[0],
                    A = B[1],
                    q = f.useState(null),
                    R = (0, i.Z)(q, 2),
                    T = R[0],
                    U = R[1],
                    F = f.useState(1),
                    M = (0, i.Z)(F, 2),
                    D = M[0],
                    O = M[1],
                    X = f.useState(1),
                    L = (0, i.Z)(X, 2),
                    G = L[0],
                    Y = L[1],
                    J = f.useState("Aura"),
                    K = (0, i.Z)(J, 2),
                    Q = K[0],
                    ee = K[1],
                    te = f.useState("square"),
                    ne = (0, i.Z)(te, 2),
                    re = ne[0],
                    ae = (ne[1], function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var n = (0, V.Gr)(t),
                                                r = new Image;
                                            r.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    n = t.getContext("2d");
                                                t.width = r.width, t.height = r.height, n.save(), n.translate(t.width / 2, t.height / 2), n.rotate(E * Math.PI / 180), n.translate(-t.width / 2, -t.height / 2), n.drawImage(r, 0, 0), n.restore(), t.toBlob(function() {
                                                    var t = (0, a.Z)(m().mark((function t(n) {
                                                        var a;
                                                        return m().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, V.s3)(n);
                                                                case 2:
                                                                    a = t.sent, e({
                                                                        file: n,
                                                                        image: r,
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
                                            }, r.src = n
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
                    ie = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var n, r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ae(t);
                                    case 2:
                                        return n = e.sent, r = n.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var n = document.createElement("canvas"),
                                                    r = n.getContext("2d");
                                                n.width = _.width, n.height = _.height, r.drawImage(t, -_.x, -_.y), n.toBlob(function() {
                                                    var n = (0, a.Z)(m().mark((function n(r) {
                                                        var a;
                                                        return m().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.next = 2, (0, V.s3)(r);
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
                                            }, t.src = r
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
                    oe = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            var r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (d !== $ || l) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, ie(t[0]);
                                    case 3:
                                        r = e.sent, U(r), p(W), e.next = 9;
                                        break;
                                    case 8:
                                        d === $ && l ? p(W) : d === W && n({
                                            image: null != T ? T : t[0],
                                            style: Q,
                                            mask: re,
                                            frameCount: D,
                                            frameRate: G
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
                    l && (O((null == s ? void 0 : s.frameCount) || 4), Y((null == s ? void 0 : s.frameRate) || 15))
                }), [l]), f.createElement(_e, null, f.createElement(Be, null, d === $ && !l && f.createElement(pe, {
                    frames: t,
                    completedCallback: n,
                    zoom: v,
                    setZoom: x,
                    rotation: E,
                    setRotation: b,
                    crop: S,
                    setCrop: C,
                    croppedArea: j,
                    setCroppedArea: z,
                    croppedAreaPixels: _,
                    setCroppedAreaPixels: A
                }), d === $ && l && f.createElement(Ze, {
                    spriteSheet: t[0],
                    frameCount: D,
                    setFrameCount: O,
                    frameRate: G,
                    setFrameRate: Y
                }), d === W && f.createElement(Ne, {
                    style: Q,
                    setStyle: ee
                })), f.createElement(H, {
                    onCancel: r,
                    onBack: function() {
                        o()
                    },
                    onNext: oe
                }))
            };

            function qe(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Re(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Re(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
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
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        l = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Te = function(e) {
                    return new Promise((function(t, n) {
                        if (!(0, V.sY)(e)) return n("Tried to extract GIF frames from non-GIF file!");
                        var r = "".substring("".lastIndexOf("/") + 1);
                        C.Z.run({
                            input: [{
                                file: "",
                                name: r
                            }],
                            command: ["-e -U ".concat(r, " -o /out/").concat(r)]
                        }).then((function(e) {
                            if (void 0 === e) throw new Error("GIF explosion gave undefined output?");
                            if (0 === e.length) throw new Error("GIF explosion gave no output frames.");
                            var n, r = [],
                                a = qe(e);
                            try {
                                for (a.s(); !(n = a.n()).done;) {
                                    var i = n.value;
                                    r.push(i)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            t(r)
                        }))
                    }))
                },
                Ue = (0, o.Z)("div", {
                    target: "e6g0jp60"
                })({
                    name: "dm9b0z",
                    styles: "width:100%;min-height:30em;overflow:hidden"
                });
            const Fe = function(e) {
                var t = e.onClose,
                    n = f.useState(null),
                    r = (0, i.Z)(n, 2),
                    o = r[0],
                    l = r[1],
                    s = f.useState(!1),
                    c = (0, i.Z)(s, 2),
                    u = c[0],
                    p = c[1],
                    g = (0, h.Yh)(),
                    v = (0, i.Z)(g, 2),
                    x = v[0],
                    w = v[1],
                    y = w.isLoading,
                    E = w.isSuccess,
                    b = (w.isError, w.error),
                    k = (0, d.I0)(),
                    C = function(e) {
                        var t = e.title,
                            n = e.message,
                            r = e.color;
                        k((0, D.d)({
                            title: t,
                            icon: S.Vm,
                            message: n,
                            color: r,
                            timeout: 5e3
                        }))
                    },
                    I = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var n, r, a, i, o;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.file, e.next = 3, (0, V.uG)(n);
                                    case 3:
                                        if (r = e.sent, a = r.width < 64 || r.height < 64, i = r.width > 1024 || r.height > 1024, o = 1024 === r.width && 1024 === r.height, !a) {
                                            e.next = 10;
                                            break
                                        }
                                        return C({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 10:
                                        if (!i) {
                                            e.next = 13;
                                            break
                                        }
                                        return C({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 1024x1024.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 13:
                                        if (!u || o) {
                                            e.next = 16;
                                            break
                                        }
                                        return C({
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
                    P = function(e) {
                        var t = e.value,
                            n = e.min,
                            r = e.max,
                            a = e.defaultValue;
                        return t > r || t < n ? a : t
                    },
                    j = function(e) {
                        var t = e.file.name,
                            n = {
                                frameCount: null,
                                frameRate: null
                            },
                            r = t.match(/_(\d{1,2})frame/),
                            a = t.match(/_(\d{1,2})fps/);
                        return null !== r && (n.frameCount = P({
                            value: parseInt(r[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 4
                        })), null !== a && (n.frameRate = P({
                            value: parseInt(a[1]),
                            min: 1,
                            max: 64,
                            defaultValue: 15
                        })), n
                    },
                    z = function() {
                        var e = (0, a.Z)(m().mark((function e(n) {
                            var r, a, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.file, (0, V.DS)({
                                                file: r,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", C({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, I({
                                            file: r
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if (a = [r], !(0, V.sY)(r)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, Te(r);
                                    case 12:
                                        a = e.sent;
                                    case 13:
                                        i = j({
                                            file: r
                                        }), l(f.createElement(Ae, {
                                            isPremadeSpriteSheet: u,
                                            frames: a,
                                            defaultParameters: i,
                                            onCompleted: N,
                                            onCancel: t,
                                            onBack: function() {
                                                return l(null)
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
                    N = function(e) {
                        var t = e.image,
                            n = e.frameCount,
                            r = void 0 === n ? 1 : n,
                            a = e.frameRate,
                            i = void 0 === a ? 1 : a,
                            o = e.style,
                            l = e.mask,
                            s = void 0 === l ? "square" : l;
                        x({
                            tag: r > 1 ? "emojianimated" : "emoji",
                            file: t.file || t,
                            frames: r,
                            framesOverTime: i,
                            animationStyle: o.toLowerCase(),
                            maskTag: s
                        })
                    };
                return f.useEffect((function() {
                    if (E) C({
                        title: "Upload Successful!",
                        message: "Your emoji was successfully uploaded",
                        color: "success"
                    }), t();
                    else if (void 0 !== b) {
                        var e = b;
                        "object" === (0, Z.Z)(e) && (e = e.message || JSON.stringify(e)), C({
                            title: "Upload Failed!",
                            message: "Reason: ".concat(e),
                            color: "danger"
                        }), t()
                    }
                }), [E, b]), f.createElement(Ue, {
                    className: "tw-flex tw-flex-col"
                }, y && f.createElement(G, {
                    name: "emoji"
                }), !y && (o || f.createElement(M, {
                    fileSelectedCallback: function(e) {
                        return z(e)
                    },
                    isForAnimatedEmoji: !0,
                    setIsPremadeSpriteSheet: p,
                    isPremadeSpriteSheet: u,
                    hintText: "Upload a static emoji with a single image, or use a sprite sheet to create an animated emoji.",
                    hintTextMuted: f.createElement(f.Fragment, null, "A sprite sheet should be a 1024x1024 image with square frames in a uniform grid, ordered left to right, then top to bottom.", f.createElement("br", null), "You can preset animation values in advance using the file name, like so: ", f.createElement("em", null, "CoolEmoji_14frames_10fps.png"))
                })))
            };
            var Me = (0, o.Z)(F.X2, {
                    target: "e1aautwr2"
                })({
                    name: "1abt8pa",
                    styles: "width:100%;position:relative!important;background-color:#0a0a0d!important;flex:80%"
                }),
                Ve = (0, o.Z)(F.X2, {
                    target: "e1aautwr1"
                })({
                    name: "1q8t340",
                    styles: "width:100%;align-self:center;flex:10%;flex-grow:inherit"
                }),
                De = (0, o.Z)("div", {
                    target: "e1aautwr0"
                })({
                    name: "1ixejqt",
                    styles: "display:flex;flex-direction:column;background-color:#0a0a0d;border-radius:8px;width:100%;height:40em"
                });
            const Oe = function(e) {
                e.completedCallback;
                var t = e.frames,
                    n = e.zoom,
                    r = e.setZoom,
                    a = e.rotation,
                    o = e.setRotation,
                    l = e.crop,
                    s = e.setCrop,
                    c = (e.croppedArea, e.setCroppedArea),
                    u = (e.croppedAreaPixels, e.setCroppedAreaPixels),
                    m = f.useState(0),
                    d = (0, i.Z)(m, 2),
                    p = d[0];
                d[1];
                return f.createElement(De, null, f.createElement(Me, null, f.createElement(ue.ZP, {
                    image: (0, V.Gr)(t[p]),
                    crop: l,
                    zoom: n,
                    aspect: 1,
                    rotation: a,
                    cropShape: "square",
                    onCropChange: function(e) {
                        return s(e)
                    },
                    onCropAreaChange: function(e, t) {
                        c(e), u(t)
                    },
                    onZoomChange: function(e) {
                        return r(e)
                    }
                })), f.createElement(Ve, null, f.createElement(ce, {
                    onRotate: function(e) {
                        o(a + e)
                    },
                    onReset: function() {
                        r(1), o(0), s({
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
                        r(e)
                    },
                    zoom: n
                })))
            };
            var Xe = (0, o.Z)("div", {
                    target: "e1p1famy1"
                })({
                    name: "bp2yox",
                    styles: "flex:50%"
                }),
                Le = (0, o.Z)("div", {
                    target: "e1p1famy0"
                })({
                    name: "4kj7g6",
                    styles: "flex:50%;display:flex;justify-content:right"
                });
            const Ge = function(e) {
                var t = e.onCancel,
                    n = e.onBack,
                    r = e.onNext,
                    a = "\n    width: 12em;\n  ";
                return f.createElement(f.Fragment, null, f.createElement(F.X2, null, f.createElement(Xe, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: t
                }, "Cancel")), f.createElement(Le, null, f.createElement(x.zx, {
                    containerStyles: a,
                    neutral: !0,
                    onClick: n
                }, "Back"), f.createElement(x.zx, {
                    containerStyles: "".concat(a, "margin-left: 1em;"),
                    accent: !0,
                    onClick: r
                }, "Next"))))
            };
            var Ye = (0, o.Z)("div", {
                    target: "e15niawg1"
                })({
                    name: "v4exnp",
                    styles: "height:86%;margin-bottom:1.5em;flex:80%"
                }),
                $e = (0, o.Z)("div", {
                    target: "e15niawg0"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                });
            const We = function(e) {
                var t = e.baseImage,
                    n = e.onCompleted,
                    r = e.onCancel,
                    o = e.onBack,
                    l = f.useState(1),
                    s = (0, i.Z)(l, 2),
                    c = s[0],
                    u = s[1],
                    d = f.useState(0),
                    p = (0, i.Z)(d, 2),
                    g = p[0],
                    h = p[1],
                    v = f.useState({
                        x: 0,
                        y: 0
                    }),
                    x = (0, i.Z)(v, 2),
                    w = x[0],
                    y = x[1],
                    E = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    b = (0, i.Z)(E, 2),
                    k = b[0],
                    Z = b[1],
                    S = f.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    C = (0, i.Z)(S, 2),
                    I = C[0],
                    P = C[1],
                    j = f.useState(null),
                    z = (0, i.Z)(j, 2),
                    N = (z[0], z[1], f.useState("square")),
                    B = (0, i.Z)(N, 2),
                    _ = B[0],
                    A = (B[1], function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var n = (0, V.Gr)(t),
                                                r = new Image;
                                            r.onload = function() {
                                                var t = document.createElement("canvas"),
                                                    n = t.getContext("2d");
                                                t.width = r.width, t.height = r.height, n.save(), n.translate(t.width / 2, t.height / 2), n.rotate(g * Math.PI / 180), n.translate(-t.width / 2, -t.height / 2), n.drawImage(r, 0, 0), n.restore(), t.toBlob(function() {
                                                    var t = (0, a.Z)(m().mark((function t(n) {
                                                        var a;
                                                        return m().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, (0, V.s3)(n);
                                                                case 2:
                                                                    a = t.sent, e({
                                                                        file: n,
                                                                        image: r,
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
                                            }, r.src = n
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
                    q = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var n, r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, A(t);
                                    case 2:
                                        return n = e.sent, r = n.base64, e.abrupt("return", new Promise((function(e) {
                                            var t = new Image;
                                            t.onload = function() {
                                                var n = document.createElement("canvas"),
                                                    r = n.getContext("2d");
                                                n.width = I.width, n.height = I.height, r.drawImage(t, -I.x, -I.y), n.toBlob(function() {
                                                    var n = (0, a.Z)(m().mark((function n(r) {
                                                        var a;
                                                        return m().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.next = 2, (0, V.s3)(r);
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
                                            }, t.src = r
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
                    R = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            var r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, q(t);
                                    case 2:
                                        r = e.sent, n({
                                            image: r,
                                            mask: _
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
                return f.createElement($e, null, f.createElement(Ye, null, f.createElement(Oe, {
                    frames: [t],
                    completedCallback: n,
                    zoom: c,
                    setZoom: u,
                    rotation: g,
                    setRotation: h,
                    crop: w,
                    setCrop: y,
                    croppedArea: k,
                    setCroppedArea: Z,
                    croppedAreaPixels: I,
                    setCroppedAreaPixels: P
                })), f.createElement(Ge, {
                    onCancel: r,
                    onBack: function() {
                        o()
                    },
                    onNext: R
                }))
            };
            var Je = (0, o.Z)("div", {
                target: "e1et7e2k0"
            })({
                name: "dm9b0z",
                styles: "width:100%;min-height:30em;overflow:hidden"
            });
            const Ke = function(e) {
                var t = e.onClose,
                    n = f.useState(null),
                    r = (0, i.Z)(n, 2),
                    o = r[0],
                    l = r[1],
                    s = (0, h.Yh)(),
                    c = (0, i.Z)(s, 2),
                    u = c[0],
                    p = c[1],
                    g = p.isLoading,
                    v = p.isSuccess,
                    x = (p.isError, p.error),
                    w = (0, d.I0)(),
                    y = function(e) {
                        var t = e.title,
                            n = e.message,
                            r = e.color;
                        w((0, D.d)({
                            title: t,
                            icon: S.Vm,
                            message: n,
                            color: r,
                            timeout: 5e3
                        }))
                    },
                    E = function() {
                        var e = (0, a.Z)(m().mark((function e(n) {
                            var r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.file, (0, V.DS)({
                                                file: r,
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
                                        return e.next = 6, b({
                                            file: r
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        l(f.createElement(We, {
                                            baseImage: r,
                                            onCompleted: k,
                                            onCancel: t,
                                            onBack: function() {
                                                return l(null)
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
                    b = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            var n, r, a, i;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.file, e.next = 3, (0, V.uG)(n);
                                    case 3:
                                        if (r = e.sent, a = r.width < 64 || r.height < 64, i = r.width > 1024 || r.height > 1024, !a) {
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
                            n = e.mask,
                            r = void 0 === n ? "square" : n;
                        console.log("image", t), u({
                            file: t.file || t,
                            tag: "sticker",
                            maskTag: r
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
                }), [v, x]), f.createElement(Je, {
                    className: "tw-flex tw-flex-col"
                }, g && f.createElement(G, {
                    name: "sticker"
                }), !g && (o || f.createElement(M, {
                    fileSelectedCallback: function(e) {
                        return E(e)
                    },
                    hintText: "Stickers should be a square image between 64x64 and 1024x1024.",
                    hintTextMuted: f.createElement(f.Fragment, null, "For best results, use a power-of-two size (64, 128, 256, 512, or 1024 pixels).", f.createElement("br", null), "You can also create stickers inside VRChat using the camera!")
                })))
            };
            var He = n(50347),
                Qe = n(74444),
                et = n(39908);
            const tt = function(e) {
                var t, n, o = e.userId,
                    u = e.isAdminView,
                    Z = e.isSelector,
                    S = void 0 !== Z && Z,
                    C = e.selectedCallback,
                    I = void 0 === C ? null : C,
                    P = e.activeTab,
                    j = void 0 === P ? "icons" : P,
                    z = "photos" === j,
                    N = "icons" === j,
                    B = "emoji" === j,
                    _ = "stickers" === j,
                    A = (0, d.I0)(),
                    q = (0, d.v9)((function(e) {
                        return e.user.photoList
                    })),
                    R = (0, d.v9)((function(e) {
                        return e.user.iconList
                    })),
                    T = f.useState([]),
                    U = (0, i.Z)(T, 2),
                    F = U[0],
                    M = U[1],
                    V = f.useState(!1),
                    D = (0, i.Z)(V, 2),
                    O = D[0],
                    X = D[1],
                    L = f.useState(!1),
                    G = (0, i.Z)(L, 2),
                    Y = G[0],
                    $ = G[1],
                    W = f.useState(!1),
                    J = (0, i.Z)(W, 2),
                    K = J[0],
                    H = J[1],
                    Q = f.useState(null),
                    ee = (0, i.Z)(Q, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = f.useState(!1),
                    ae = (0, i.Z)(re, 2),
                    ie = ae[0],
                    oe = ae[1],
                    le = f.useState(!1),
                    se = (0, i.Z)(le, 2),
                    ce = se[0],
                    ue = se[1],
                    me = (0, b.Tu)(),
                    fe = me.user,
                    de = me.fetchUser,
                    pe = (0, b.v$)(o).user,
                    ge = (0, E.q7)({
                        condensed: !0
                    }).data,
                    he = void 0 === ge ? [] : ge,
                    ve = (0, h.eV)({
                        userId: o
                    }).data,
                    xe = (0, h._h)({
                        userId: o
                    }).data,
                    we = (0, h.g3)(),
                    ye = (0, i.Z)(we, 2),
                    Ee = ye[0],
                    be = ye[1];
                be.isLoading, be.isSuccess, be.isError, be.error;
                f.useEffect((function() {
                    var e = u ? o : "";
                    A((0, y.wP)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    })), A((0, y.wu)({
                        userId: e,
                        amount: 100,
                        offset: 0
                    }))
                }), [o, u]);
                var ke = function() {
                        var e = (0, a.Z)(m().mark((function e(t, n) {
                            var r;
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!B && !_) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return r = (0, v.qm)({
                                            fileId: t,
                                            versionNumber: n
                                        }), e.next = 5, A((0, w._W)({
                                            userId: fe.id,
                                            data: z ? {
                                                profilePicOverride: r
                                            } : {
                                                userIcon: r
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
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ze = function(e, t) {
                        ne(t), I(e, t)
                    },
                    Se = function() {
                        var e = (0, a.Z)(m().mark((function e(t) {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (M([t].concat((0, r.Z)(F))), !z) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4, A((0, y.JJ)({
                                            fileId: t
                                        }));
                                    case 4:
                                        return e.next = 6, A((0, y.oI)({
                                            fileId: t
                                        }));
                                    case 6:
                                    case 13:
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 8:
                                        if (!N) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11, A((0, y.ap)({
                                            fileId: t
                                        }));
                                    case 11:
                                        return e.next = 13, A((0, y.NB)({
                                            fileId: t
                                        }));
                                    case 15:
                                        if (!B) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, Ee({
                                            fileId: t,
                                            tag: "emoji",
                                            userId: o
                                        });
                                    case 20:
                                        if (!_) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 23, Ee({
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
                    Ce = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Pe();
                                    case 2:
                                        return e.next = 4, Promise.all(q.map(function() {
                                            var e = (0, a.Z)(m().mark((function e(t) {
                                                return m().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", Se(t.id));
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
                    Ie = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, A((0, y.dm)({
                                            userId: o,
                                            data: {
                                                userIcon: ""
                                            }
                                        }));
                                    case 3:
                                        $(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, A((0, w._W)({
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
                    Pe = function() {
                        var e = (0, a.Z)(m().mark((function e() {
                            return m().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, A((0, y.dm)({
                                            userId: o,
                                            data: {
                                                profilePicOverride: ""
                                            }
                                        }));
                                    case 3:
                                        X(!0), e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, A((0, w._W)({
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
                    je = q.map((function(e) {
                        var t, n = Math.max.apply(Math, (0, r.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === n
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: n
                        }
                    })),
                    ze = R.map((function(e) {
                        var t, n = Math.max.apply(Math, (0, r.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === n
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: n
                        }
                    })),
                    Ne = (ve || []).map((function(e) {
                        var t, n = Math.max.apply(Math, (0, r.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === n
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: n,
                            maskTag: e.maskTag,
                            isAnimated: e.tags.includes("animated"),
                            frameCount: e.frames,
                            frameRate: e.framesOverTime
                        }
                    })),
                    Be = (xe || []).map((function(e) {
                        var t, n = Math.max.apply(Math, (0, r.Z)(e.versions.map((function(e) {
                                return e.version
                            })))),
                            a = e.versions.find((function(e) {
                                return e.version === n
                            }));
                        return {
                            fileId: e.id,
                            imageUrl: null === (t = a.file) || void 0 === t ? void 0 : t.url,
                            highestVersionNumber: n,
                            maskTag: e.maskTag
                        }
                    })),
                    _e = ze.length,
                    Ae = je.length,
                    qe = Ne.length,
                    Re = Be.length,
                    Te = u ? pe.profilePicOverride : fe.profilePicOverride;
                O && (Te = "");
                var Ue = u ? pe.userIcon : fe.userIcon;
                Y && (Ue = "");
                var Me = u ? "64" : he["permission-user-gallery"],
                    Ve = Me <= Ae,
                    De = u ? "64" : he["permission-user-icons"],
                    Oe = De <= _e,
                    Xe = (null === (t = he["permission-user-emoji"]) || void 0 === t ? void 0 : t.max) || 9,
                    Le = (null === (n = he["permission-user-stickers"]) || void 0 === n ? void 0 : n.max) || 9,
                    Ge = Xe <= qe,
                    Ye = Le <= Re,
                    $e = u ? "".concat(pe.displayName, "'s") : "Your",
                    We = !u,
                    Je = S && te,
                    tt = (Te && z || Ue && !z) && !S;
                if (K) switch (j) {
                    case "photos":
                        return f.createElement(k.default, {
                            isSelector: S,
                            successCallback: function() {
                                H(!1), A((0, y.wP)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "icons":
                        return f.createElement(et.default, {
                            isSelector: S,
                            successCallback: function() {
                                H(!1), A((0, y.wu)({
                                    userId: o,
                                    amount: 100,
                                    offset: 0
                                }))
                            }
                        });
                    case "emoji":
                        return f.createElement(Qe.default, {
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
                var lt = {
                        photos: {
                            title: "Photos",
                            singularTitle: "Photo",
                            files: je
                        },
                        icons: {
                            title: "Icons",
                            singularTitle: "Icon",
                            files: ze
                        },
                        emoji: {
                            title: "Emoji",
                            singularTitle: "Emoji",
                            files: Ne
                        },
                        stickers: {
                            title: "Stickers",
                            singularTitle: "Sticker",
                            files: Be
                        }
                    } [j] || {
                        title: "Unknown",
                        singularTitle: "Unknown",
                        files: []
                    },
                    st = Ve && z || Oe && N || Ge && B || Ye && _;
                return f.createElement(nt, null, !S && f.createElement(x.oI, null, f.createElement("h2", null, lt.title)), f.createElement(at, null, f.createElement("div", {
                    className: (0, g.iv)({
                        name: "sf0fa5",
                        styles: ".center-flex{display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:center;}"
                    })
                }, Te && !S && !B && !_ && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement("h2", null, $e, " Currently Equipped Profile Picture")), !S && !B && !_ && f.createElement("div", {
                    className: "center-flex ".concat((0, g.iv)({
                        name: "1gpzra0",
                        styles: "margin-bottom:1em"
                    }))
                }, (tt || Je) && f.createElement(He.Z, {
                    image: null != te ? te : z ? Te : Ue,
                    borderColor: "green",
                    disableManagement: We,
                    width: z ? 300 : 200,
                    isIcon: !z,
                    isAdminView: u
                }), (!Te && z || !Ue && !z || S && !te) && f.createElement(rt, null, f.createElement(x.$1, {
                    icon: c.eH,
                    className: (0, g.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "No ", S ? "Image" : z ? "Profile Picture" : "Icon", " Selected"), f.createElement("br", null)), st && f.createElement("div", {
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
                }), "You have reached your ", j, " limit!"), f.createElement(x.JX, {
                    className: "align-items-center mb-3"
                }, f.createElement(x.X2, null, !Ge && B && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return oe(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: s.cf,
                    className: "me-2"
                }), "Upload ", lt.title)), !Ye && _ && f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        return ue(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: s.cf,
                    className: "me-2"
                }), "Upload ", lt.title)), (!Ve && z || !Oe && N) && !u && (S ? f.createElement(x.zx, {
                    neutral: !0,
                    onClick: function() {
                        H(!0)
                    }
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: s.cf,
                    className: "me-2"
                }), "Upload ", lt.title)) : f.createElement(p.rU, {
                    to: "/home/upload".concat(lt.singularTitle),
                    className: "me-3"
                }, f.createElement(x.zx, {
                    neutral: !0
                }, f.createElement(x.X2, {
                    className: "align-items-center px-3"
                }, f.createElement(x.$1, {
                    icon: s.cf,
                    className: "me-2"
                }), "Upload ", lt.title)))), !S && Te && !B && !_ && f.createElement(x.zx, {
                    onClick: z ? Pe : Ie,
                    className: "px-3",
                    danger: !0
                }, f.createElement(x.$1, {
                    icon: l.NB,
                    className: "me-2"
                }), "Reset ", z ? "Photo" : "Icon"))), f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, z && f.createElement("h2", null, $e, " Uploaded Photos (", Ae, "/", Me, " Photos)"), N && f.createElement("h2", null, $e, " Uploaded Icons (", _e, "/", De, " Icons)"), B && f.createElement("h2", null, $e, " Uploaded Emoji (", qe, "/", Xe, " Emoji)"), _ && f.createElement("h2", null, $e, " Uploaded Stickers (", Re, "/", Le, " Stickers)")), u && Ae > 0 && f.createElement("div", {
                    className: (0, g.iv)({
                        name: "bxqzz5",
                        styles: "margin:auto;text-align:center"
                    })
                }, f.createElement(x.zx, {
                    className: "btn-danger",
                    onClick: Ce
                }, "Reset Profile Pic and Delete All (", Ae, ") Photos")))), f.createElement(it, null, f.createElement(ot, null, lt.files.map((function(e) {
                    return f.createElement("div", {
                        key: e.fileId
                    }, f.createElement(He.Z, {
                        image: e.imageUrl,
                        onSelect: S ? Ze : null,
                        onClick: S ? function() {
                            Ze(e.fileId, e.imageUrl)
                        } : function() {
                            ke(e.fileId, e.highestVersionNumber)
                        },
                        showViewButton: !1,
                        onDelete: function() {
                            return Se(e.fileId)
                        },
                        showDeleteButton: !S,
                        onWear: S ? null : ke,
                        fileId: e.fileId,
                        versionNumber: e.highestVersionNumber,
                        width: z ? 300 : 200,
                        isIcon: N,
                        isEmoji: B,
                        isSticker: _,
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
                    children: f.createElement(Fe, {
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
                    children: f.createElement(Ke, {
                        onClose: function() {
                            return ue(!1)
                        }
                    })
                }))
            };
            var nt = (0, o.Z)("div", {
                    target: "edhboyc4"
                })({
                    name: "mkaaq0",
                    styles: "min-height:0;display:flex;flex-direction:column;width:100%"
                }),
                rt = (0, o.Z)("div", {
                    target: "edhboyc3"
                })({
                    name: "1rfuedz",
                    styles: "margin:1em;padding:0.2em 0.7em;color:var(--bs-warning);text-transform:uppercase;font-size:1.6em;border:4px solid var(--bs-warning);border-radius:12px"
                }),
                at = (0, o.Z)(x.Ao, {
                    target: "edhboyc2"
                })({
                    name: "1ch9yvl",
                    styles: "border-radius:0"
                }),
                it = (0, o.Z)(x.Ao, {
                    target: "edhboyc1"
                })({
                    name: "1xhi4a4",
                    styles: "background-color:#0f1113;min-height:0;margin-bottom:10px;overflow-y:auto"
                }),
                ot = (0, o.Z)("div", {
                    target: "edhboyc0"
                })({
                    name: "1qzuqsf",
                    styles: "display:flex;flex-flow:row wrap;padding:0!important;align-items:center;justify-content:space-around"
                })
        }
    }
]);
//# sourceMappingURL=afd8849d3d28e131ee57eee2143c5c37462bb9e5366f355c119f9d2b20deb5a1.js.map