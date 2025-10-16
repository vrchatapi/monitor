"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4444], {
        74444: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => q
            });
            var a = n(15861),
                i = n(54546),
                r = n(4965),
                l = n(55346),
                o = n(2723),
                s = n(76553),
                m = n(68055),
                c = n(59545),
                u = n(95337),
                d = n(44814),
                g = n(64687),
                h = n.n(g),
                f = n(43081),
                v = n(67294),
                p = n(32981),
                w = n(34698),
                E = n(23138),
                y = n(83505),
                x = n(70123),
                b = n(79655),
                Z = n(96985),
                k = n(43862),
                S = n(22202),
                B = n(41255),
                C = n(42619),
                N = n(28361),
                P = n(25062);
            const z = function(e) {
                var t = e.isAdminView,
                    n = void 0 !== t && t,
                    a = e.imageUrl,
                    r = e.fileId,
                    l = e.versionNumber,
                    o = e.onWear,
                    s = e.onDelete,
                    u = (e.borderColor, e.showWear),
                    d = (e.didClickConvertToIcon, e.imageWidth, e.imageHeight, e.onShouldDeleteSelf),
                    g = e.disableManagement,
                    h = e.onSelect,
                    f = e.showSelect,
                    p = v.useState(!0),
                    w = (0, i.Z)(p, 2),
                    E = w[0],
                    y = w[1],
                    x = v.useState(!1),
                    b = (0, i.Z)(x, 2),
                    S = b[0],
                    B = b[1],
                    z = v.useState(!1),
                    q = (0, i.Z)(z, 2),
                    I = q[0],
                    A = q[1],
                    W = v.useState(!1),
                    D = (0, i.Z)(W, 2),
                    O = D[0],
                    F = (D[1], v.useState(!1)),
                    V = (0, i.Z)(F, 2),
                    T = (V[0], V[1]),
                    Y = function() {
                        g || O || B(!0)
                    },
                    H = function() {
                        B(!1), A(!1)
                    };
                return v.createElement(_, {
                    onMouseLeave: H
                }, v.createElement(j, {
                    onMouseEnter: Y
                }, v.createElement(L, {
                    alt: "icon",
                    src: a,
                    hidden: E,
                    onLoad: function() {
                        y(!1)
                    }
                }), v.createElement(M, {
                    hidden: !E
                }, v.createElement(k.Z, null))), v.createElement(R, {
                    hidden: !S,
                    onMouseEnter: Y,
                    onMouseLeave: H
                }, v.createElement(U, null, !n && u && v.createElement(P.Z, {
                    color: "success",
                    onClick: function() {
                        B(!1), o(r, l), d && d(r)
                    }
                }, v.createElement(Z.$1, {
                    icon: N.vT,
                    color: "hsl(0, 0%, 7%)"
                })), f && v.createElement(P.Z, {
                    color: "success",
                    onClick: function() {
                        B(!1), h(r, a)
                    }
                }, v.createElement(Z.$1, {
                    icon: m.LE
                })), v.createElement($, {
                    color: "danger",
                    onClick: I ? null : A,
                    onMouseLeave: function() {
                        A(!1)
                    }
                }, v.createElement(Z.$1, {
                    icon: I ? c.NB : C.$,
                    onClick: function() {
                        A(!0)
                    }
                }), v.createElement(Z.$1, {
                    icon: C.$,
                    hidden: !I,
                    onClick: function() {
                        B(!1), s(r), d && d(r)
                    },
                    onMouseEnter: function() {
                        return T(!0)
                    },
                    onMouseLeave: function() {
                        return T(!1)
                    }
                })))))
            };
            var _ = (0, r.Z)("div", {
                    target: "e9oscuz6"
                })({
                    name: "yyipxg",
                    styles: "width:9em;height:9em;display:flex;z-index:1;align-items:center;justify-content:center;.image-preview{width:100%;}.margin-slide-out{animation:margin-slide-out 0.4s ease-out;animation-timing-function:ease-out;animation-fill-mode:forwards;}@keyframes margin-slide-out{0%{width:10%;}100%{width:100%;}}"
                }),
                j = (0, r.Z)("div", {
                    target: "e9oscuz5"
                })({
                    name: "zs9p23",
                    styles: "width:100%;background-color:var(--bs-gray-dark);width:110px!important;height:110px;padding:5px;border-radius:10px;z-index:3!important"
                }),
                L = (0, r.Z)("img", {
                    target: "e9oscuz4"
                })({
                    name: "wfgzr2",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%"
                }),
                M = (0, r.Z)("div", {
                    target: "e9oscuz3"
                })({
                    name: "1cqhxvz",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%;display:flex;align-items:center;justify-content:center"
                }),
                R = (0, r.Z)("div", {
                    target: "e9oscuz2"
                })({
                    name: "19d5n0a",
                    styles: "width:11em;height:110px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important;margin-left:-38%;z-index:-1"
                }),
                U = (0, r.Z)("div", {
                    target: "e9oscuz1"
                })({
                    name: "115e33k",
                    styles: "max-width:100px;display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -0.5em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                }),
                $ = (0, r.Z)(P.Z, {
                    target: "e9oscuz0"
                })({
                    name: "7yp9nl",
                    styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                });
            const q = function(e) {
                var t, n = e.aspectRatio,
                    r = e.successCallback,
                    g = void 0 === r ? null : r,
                    C = (e.isSelector, v.useState(null)),
                    N = (0, i.Z)(C, 2),
                    P = N[0],
                    _ = N[1],
                    j = v.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    L = (0, i.Z)(j, 2),
                    M = (L[0], L[1]),
                    R = v.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    U = (0, i.Z)(R, 2),
                    $ = U[0],
                    q = U[1],
                    A = v.useState({
                        x: 0,
                        y: 0
                    }),
                    W = (0, i.Z)(A, 2),
                    D = W[0],
                    O = W[1],
                    F = v.useState(1),
                    V = (0, i.Z)(F, 2),
                    T = V[0],
                    Y = V[1],
                    H = v.useState(null != n ? n : 1),
                    G = (0, i.Z)(H, 2),
                    J = G[0],
                    K = G[1],
                    Q = v.useState(!1),
                    X = (0, i.Z)(Q, 2),
                    ee = X[0],
                    te = X[1],
                    ne = v.useState(!1),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    re = ae[1],
                    le = v.useState(0),
                    oe = (0, i.Z)(le, 2),
                    se = oe[0],
                    me = oe[1],
                    ce = v.useState(!1),
                    ue = (0, i.Z)(ce, 2),
                    de = ue[0],
                    ge = ue[1],
                    he = v.useState(!1),
                    fe = (0, i.Z)(he, 2),
                    ve = fe[0],
                    pe = fe[1],
                    we = v.useState(!1),
                    Ee = (0, i.Z)(we, 2),
                    ye = Ee[0],
                    xe = Ee[1],
                    be = v.useState("Aura"),
                    Ze = (0, i.Z)(be, 2),
                    ke = Ze[0],
                    Se = Ze[1],
                    Be = v.useState(!1),
                    Ce = (0, i.Z)(Be, 2),
                    Ne = Ce[0],
                    Pe = (Ce[1], v.useRef(null)),
                    ze = ((0, S.q7)().data, (0, p.I0)(), {
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
                    }),
                    _e = (0, B.Yh)(),
                    je = (0, i.Z)(_e, 2),
                    Le = je[0],
                    Me = je[1],
                    Re = Me.isLoading,
                    Ue = Me.isSuccess,
                    $e = Me.isError,
                    qe = Me.error;
                f.Z.location.search.slice(1).split("&").map((function(e) {
                    return e.split("=")
                })).filter((function(e) {
                    return "preload" === e[0]
                }))[0];
                var Ie = function(e, t) {
                        M(e), q(t)
                    },
                    Ae = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    We = function(e, t) {
                        return new Promise((function(n) {
                            var a = document.createElement("canvas"),
                                i = a.getContext("2d"),
                                r = new Image;
                            r.crossOrigin = "*", r.addEventListener("load", (function() {
                                a.width = t.width, a.height = t.height, i.drawImage(e, -t.x, -t.y), a.toBlob((function(e) {
                                    var t = new FileReader;
                                    t.addEventListener("load", (function() {
                                        n({
                                            file: e,
                                            base64: t.result
                                        })
                                    })), t.readAsDataURL(e)
                                }), "image/png")
                            }), !1), r.src = e.src
                        }))
                    },
                    De = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, We(Ae(P), $);
                                    case 2:
                                        t = e.sent, te(!0), re(t), me(2);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Oe = null !== P,
                    Fe = [v.createElement("span", null, v.createElement("h3", null, "(1/4) Choose an emoji to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", v.createElement("br", null), v.createElement("br", null)), v.createElement("h3", null, "(2/4) Crop your emoji as desired"), v.createElement("h3", null, "(3/4) Choose your animation style"), v.createElement("h3", null, "(4/4) Preview before upload")];
                return v.createElement("div", null, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, v.createElement("h2", null, "Upload a New Emoji")), v.createElement("div", null, Fe[se]), v.createElement("div", {
                    hidden: 2 !== se
                }, v.createElement("img", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    }),
                    src: function(e) {
                        return "https://assets.vrchat.com/www/images/emoji-previews/".concat(ze[e])
                    }(ke),
                    alt: "Animation Preview",
                    width: 350
                }), v.createElement("ul", null, v.createElement("h4", {
                    className: (0, y.iv)({
                        name: "1ur8p3y",
                        styles: "margin-left:0.3em"
                    })
                }, "Current Selection: ", ke), Object.keys(ze).map((function(e, t) {
                    return v.createElement(I, {
                        key: t,
                        onClick: function() {
                            return Se(e)
                        }
                    }, v.createElement("div", null, e))
                }))), v.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, v.createElement(w.Z, {
                    className: (0, y.iv)({
                        name: "1eddf3f",
                        styles: "margin-right:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        me(se - 1), te(!1), re({}), me(1)
                    }
                }, "Back"), v.createElement(w.Z, {
                    color: "success",
                    onClick: function() {
                        return me(se + 1)
                    },
                    className: (0, y.iv)({
                        name: "1eddf3f",
                        styles: "margin-right:0.5em"
                    })
                }, v.createElement(Z.$1, {
                    icon: u.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"))), v.createElement("div", {
                    hidden: ee
                }, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (de || ye || ve) && v.createElement("div", {
                    className: "text-danger"
                }, v.createElement(Z.$1, {
                    icon: d.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), de && "Image size is larger than 10MBs. ", ye && "Image dimensions are smaller than 64 pixels. ", ve && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !Oe && !Ne && v.createElement("div", null, v.createElement("input", {
                    ref: Pe,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        ge(!1), pe(!1), xe(!1);
                        var e = Pe.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) ge(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) xe(!0);
                                else if (t.width > 2048 || t.height > 2048) pe(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        _(n.result), me(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Oe && v.createElement("div", null, v.createElement(x.ZP, {
                    image: P,
                    crop: D,
                    zoom: T,
                    aspect: J,
                    onCropChange: function(e) {
                        O(e)
                    },
                    onCropComplete: Ie,
                    onCropAreaChange: Ie,
                    onZoomChange: function(e) {
                        Y(e)
                    },
                    cropShape: "square"
                }))), Oe && v.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !de && v.createElement(w.Z, {
                    color: "success",
                    onClick: De
                }, v.createElement(Z.$1, {
                    icon: u.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), v.createElement(b.rU, {
                    to: "/home/gallery/emoji"
                }, v.createElement(w.Z, {
                    color: "danger"
                }, v.createElement(Z.$1, {
                    icon: c.NB,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), v.createElement("div", {
                    hidden: !ee,
                    className: (0, y.iv)({
                        name: "rz992n",
                        styles: "margin:auto;text-align:center;button{width:8em;}"
                    })
                }, Ue && v.createElement("div", {
                    className: (0, y.iv)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, v.createElement(E.Z, {
                    color: "success",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, v.createElement(Z.$1, {
                    icon: m.LE,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), v.createElement("p", null, "Your emoji has been uploaded successfully!", v.createElement("br", null)), v.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, g ? v.createElement(w.Z, {
                    onClick: function() {
                        _(null), M({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), q({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), O({
                            x: 0,
                            y: 0
                        }), Y(1), K(null != n ? n : 1), te(!1), re({}), me(0), ge(!1), pe(!1), xe(!1), g()
                    }
                }, "Back") : v.createElement(b.rU, {
                    to: "/home/gallery/emoji"
                }, v.createElement(w.Z, {
                    className: (0, y.iv)({
                        name: "1287a6j",
                        styles: "width:8em"
                    })
                }, "View Emoji"))))), $e && v.createElement("div", {
                    className: (0, y.iv)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, v.createElement(E.Z, {
                    color: "danger",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, v.createElement(Z.$1, {
                    icon: s.eH,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), v.createElement("p", null, "Your emoji failed to upload!", v.createElement("br", null), (null == qe || null === (t = qe.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown Error", v.createElement("br", null)), v.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, v.createElement(b.rU, {
                    to: "/home/gallery/emoji"
                }, v.createElement(w.Z, null, "View Emoji"))))), !Re && 3 === se && v.createElement("div", null, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, v.createElement(z, {
                    imageUrl: ie.base64,
                    borderColor: "yellow",
                    disableManagement: !0
                })), !Ue && !$e && v.createElement("div", null, v.createElement(w.Z, {
                    color: "success",
                    onClick: function() {
                        Le({
                            tag: "emoji",
                            file: ie.file,
                            animationStyle: ke.toLowerCase(),
                            maskTag: "square"
                        })
                    }
                }, v.createElement(Z.$1, {
                    icon: o.cf,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), v.createElement(w.Z, {
                    className: (0, y.iv)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        return me(se - 1)
                    }
                }, v.createElement(Z.$1, {
                    icon: l.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Re && v.createElement("div", {
                    className: (0, y.iv)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, v.createElement(k.Z, null)), v.createElement("div", {
                    className: (0, y.iv)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "Uploading Emoji..."))))
            };
            var I = (0, r.Z)("li", {
                target: "eotoqf10"
            })({
                name: "142eo2q",
                styles: "list-style-type:none;background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:inline-flex;flex-direction:row;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;max-width:8em;margin:0.5em;text-align:center;cursor:pointer;div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
            })
        }
    }
]);
//# sourceMappingURL=f8f9bcf9e0dc42446a1fb72798eb9af45d74765b02132954a347da605c7597a6.js.map