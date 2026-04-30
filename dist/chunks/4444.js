"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4444], {
        74444: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => I
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
                Z = n(80988),
                k = n(43862),
                S = n(90068),
                B = n(22202),
                C = n(41255),
                N = n(42619),
                P = n(28361),
                z = n(25062);
            const _ = function(e) {
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
                    C = v.useState(!1),
                    _ = (0, i.Z)(C, 2),
                    I = _[0],
                    A = _[1],
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
                return v.createElement(j, {
                    onMouseLeave: H
                }, v.createElement(L, {
                    onMouseEnter: Y
                }, v.createElement(M, {
                    alt: "icon",
                    src: a,
                    hidden: E,
                    onLoad: function() {
                        y(!1)
                    }
                }), v.createElement(R, {
                    hidden: !E
                }, v.createElement(k.Z, null))), v.createElement(U, {
                    hidden: !S,
                    onMouseEnter: Y,
                    onMouseLeave: H
                }, v.createElement($, null, !n && u && v.createElement(z.Z, {
                    color: "success",
                    onClick: function() {
                        B(!1), o(r, l), d && d(r)
                    }
                }, v.createElement(Z.$1, {
                    icon: P.vT,
                    color: "hsl(0, 0%, 7%)"
                })), f && v.createElement(z.Z, {
                    color: "success",
                    onClick: function() {
                        B(!1), h(r, a)
                    }
                }, v.createElement(Z.$1, {
                    icon: m.LE
                })), v.createElement(q, {
                    color: "danger",
                    onClick: I ? null : A,
                    onMouseLeave: function() {
                        A(!1)
                    }
                }, v.createElement(Z.$1, {
                    icon: I ? c.NB : N.$,
                    onClick: function() {
                        A(!0)
                    }
                }), v.createElement(Z.$1, {
                    icon: N.$,
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
            var j = (0, r.Z)("div", {
                    target: "e9oscuz6"
                })({
                    name: "yyipxg",
                    styles: "width:9em;height:9em;display:flex;z-index:1;align-items:center;justify-content:center;.image-preview{width:100%;}.margin-slide-out{animation:margin-slide-out 0.4s ease-out;animation-timing-function:ease-out;animation-fill-mode:forwards;}@keyframes margin-slide-out{0%{width:10%;}100%{width:100%;}}"
                }),
                L = (0, r.Z)("div", {
                    target: "e9oscuz5"
                })({
                    name: "zs9p23",
                    styles: "width:100%;background-color:var(--bs-gray-dark);width:110px!important;height:110px;padding:5px;border-radius:10px;z-index:3!important"
                }),
                M = (0, r.Z)("img", {
                    target: "e9oscuz4"
                })({
                    name: "wfgzr2",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%"
                }),
                R = (0, r.Z)("div", {
                    target: "e9oscuz3"
                })({
                    name: "1cqhxvz",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%;display:flex;align-items:center;justify-content:center"
                }),
                U = (0, r.Z)("div", {
                    target: "e9oscuz2"
                })({
                    name: "19d5n0a",
                    styles: "width:11em;height:110px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important;margin-left:-38%;z-index:-1"
                }),
                $ = (0, r.Z)("div", {
                    target: "e9oscuz1"
                })({
                    name: "115e33k",
                    styles: "max-width:100px;display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -0.5em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                }),
                q = (0, r.Z)(z.Z, {
                    target: "e9oscuz0"
                })({
                    name: "7yp9nl",
                    styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                });
            const I = function(e) {
                var t, n = e.aspectRatio,
                    r = e.successCallback,
                    g = void 0 === r ? null : r,
                    N = (e.isSelector, v.useState(null)),
                    P = (0, i.Z)(N, 2),
                    z = P[0],
                    j = P[1],
                    L = v.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    M = (0, i.Z)(L, 2),
                    R = (M[0], M[1]),
                    U = v.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    $ = (0, i.Z)(U, 2),
                    q = $[0],
                    I = $[1],
                    W = v.useState({
                        x: 0,
                        y: 0
                    }),
                    D = (0, i.Z)(W, 2),
                    O = D[0],
                    F = D[1],
                    V = v.useState(1),
                    T = (0, i.Z)(V, 2),
                    Y = T[0],
                    H = T[1],
                    G = v.useState(null != n ? n : 1),
                    J = (0, i.Z)(G, 2),
                    K = J[0],
                    Q = J[1],
                    X = v.useState(!1),
                    ee = (0, i.Z)(X, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = v.useState(!1),
                    ie = (0, i.Z)(ae, 2),
                    re = ie[0],
                    le = ie[1],
                    oe = v.useState(0),
                    se = (0, i.Z)(oe, 2),
                    me = se[0],
                    ce = se[1],
                    ue = v.useState(!1),
                    de = (0, i.Z)(ue, 2),
                    ge = de[0],
                    he = de[1],
                    fe = v.useState(!1),
                    ve = (0, i.Z)(fe, 2),
                    pe = ve[0],
                    we = ve[1],
                    Ee = v.useState(!1),
                    ye = (0, i.Z)(Ee, 2),
                    xe = ye[0],
                    be = ye[1],
                    Ze = v.useState("Aura"),
                    ke = (0, i.Z)(Ze, 2),
                    Se = ke[0],
                    Be = ke[1],
                    Ce = v.useState(!1),
                    Ne = (0, i.Z)(Ce, 2),
                    Pe = Ne[0],
                    ze = (Ne[1], v.useRef(null)),
                    _e = ((0, B.q7)().data, (0, p.I0)(), (0, S.P2)()),
                    je = {
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
                    Le = (0, C.Yh)(),
                    Me = (0, i.Z)(Le, 2),
                    Re = Me[0],
                    Ue = Me[1],
                    $e = Ue.isLoading,
                    qe = Ue.isSuccess,
                    Ie = Ue.isError,
                    Ae = Ue.error,
                    We = (f.Z.location.search.slice(1).split("&").map((function(e) {
                        return e.split("=")
                    })).filter((function(e) {
                        return "preload" === e[0]
                    }))[0], function() {
                        j(null), R({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), I({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), F({
                            x: 0,
                            y: 0
                        }), H(1), Q(null != n ? n : 1), ne(!1), le({}), ce(0), he(!1), we(!1), be(!1)
                    });
                v.useEffect((function() {
                    Ie && _e({
                        error: Ae
                    }) && We()
                }), [Ie, Ae]);
                var De = function(e, t) {
                        R(e), I(t)
                    },
                    Oe = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Fe = function(e, t) {
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
                    Ve = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Fe(Oe(z), q);
                                    case 2:
                                        t = e.sent, ne(!0), le(t), ce(2);
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
                    Te = null !== z,
                    Ye = [v.createElement("span", null, v.createElement("h3", null, "(1/4) Choose an emoji to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", v.createElement("br", null), v.createElement("br", null)), v.createElement("h3", null, "(2/4) Crop your emoji as desired"), v.createElement("h3", null, "(3/4) Choose your animation style"), v.createElement("h3", null, "(4/4) Preview before upload")];
                return v.createElement("div", null, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, v.createElement("h2", null, "Upload a New Emoji")), v.createElement("div", null, Ye[me]), v.createElement("div", {
                    hidden: 2 !== me
                }, v.createElement("img", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    }),
                    src: function(e) {
                        return "https://assets.vrchat.com/www/images/emoji-previews/".concat(je[e])
                    }(Se),
                    alt: "Animation Preview",
                    width: 350
                }), v.createElement("ul", null, v.createElement("h4", {
                    className: (0, y.iv)({
                        name: "1ur8p3y",
                        styles: "margin-left:0.3em"
                    })
                }, "Current Selection: ", Se), Object.keys(je).map((function(e, t) {
                    return v.createElement(A, {
                        key: t,
                        onClick: function() {
                            return Be(e)
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
                        ce(me - 1), ne(!1), le({}), ce(1)
                    }
                }, "Back"), v.createElement(w.Z, {
                    color: "success",
                    onClick: function() {
                        return ce(me + 1)
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
                    hidden: te
                }, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ge || xe || pe) && v.createElement("div", {
                    className: "text-danger"
                }, v.createElement(Z.$1, {
                    icon: d.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ge && "Image size is larger than 10MBs. ", xe && "Image dimensions are smaller than 64 pixels. ", pe && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !Te && !Pe && v.createElement("div", null, v.createElement("input", {
                    ref: ze,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        he(!1), we(!1), be(!1);
                        var e = ze.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) he(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) be(!0);
                                else if (t.width > 2048 || t.height > 2048) we(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        j(n.result), ce(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Te && v.createElement("div", null, v.createElement(x.ZP, {
                    image: z,
                    crop: O,
                    zoom: Y,
                    aspect: K,
                    onCropChange: function(e) {
                        F(e)
                    },
                    onCropComplete: De,
                    onCropAreaChange: De,
                    onZoomChange: function(e) {
                        H(e)
                    },
                    cropShape: "square"
                }))), Te && v.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ge && v.createElement(w.Z, {
                    color: "success",
                    onClick: Ve
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
                    hidden: !te,
                    className: (0, y.iv)({
                        name: "rz992n",
                        styles: "margin:auto;text-align:center;button{width:8em;}"
                    })
                }, qe && v.createElement("div", {
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
                        We(), g()
                    }
                }, "Back") : v.createElement(b.rU, {
                    to: "/home/gallery/emoji"
                }, v.createElement(w.Z, {
                    className: (0, y.iv)({
                        name: "1287a6j",
                        styles: "width:8em"
                    })
                }, "View Emoji"))))), Ie && v.createElement("div", {
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
                }), v.createElement("p", null, "Your emoji failed to upload!", v.createElement("br", null), (null == Ae || null === (t = Ae.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown Error", v.createElement("br", null)), v.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, v.createElement(b.rU, {
                    to: "/home/gallery/emoji"
                }, v.createElement(w.Z, null, "View Emoji"))))), !$e && 3 === me && v.createElement("div", null, v.createElement("div", {
                    className: (0, y.iv)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, v.createElement(_, {
                    imageUrl: re.base64,
                    borderColor: "yellow",
                    disableManagement: !0
                })), !qe && !Ie && v.createElement("div", null, v.createElement(w.Z, {
                    color: "success",
                    onClick: function() {
                        Re({
                            tag: "emoji",
                            file: re.file,
                            animationStyle: Se.toLowerCase(),
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
                        return ce(me - 1)
                    }
                }, v.createElement(Z.$1, {
                    icon: l.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), $e && v.createElement("div", {
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
            var A = (0, r.Z)("li", {
                target: "eotoqf10"
            })({
                name: "142eo2q",
                styles: "list-style-type:none;background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:inline-flex;flex-direction:row;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;max-width:8em;margin:0.5em;text-align:center;cursor:pointer;div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
            })
        }
    }
]);
//# sourceMappingURL=5c0f06d36d215c52f3c70f11bdc3cf73fbcfa19950a07ca9bb7ede01760e4ff7.js.map