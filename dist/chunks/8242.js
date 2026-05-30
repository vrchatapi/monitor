"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8242], {
        48242(e, t, n) {
            n.r(t), n.d(t, {
                default: () => U
            });
            var a = n(10467),
                i = n(15902),
                r = n(70129),
                l = n(81021),
                o = n(19616),
                s = n(34496),
                m = n(81617),
                c = n(19179),
                u = n(61145),
                d = n(35532),
                g = n(54756),
                h = n.n(g),
                f = n(9431),
                p = n(96540),
                w = n(6376),
                v = n(30104),
                E = n(85052),
                y = n(56822),
                A = n(41952),
                x = n(84976),
                b = n(15033),
                k = n(25538),
                C = n(97071),
                S = n(13951),
                B = n(31931),
                N = n(38275),
                _ = n(84837),
                z = n(16477);
            const j = function(e) {
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
                    w = p.useState(!0),
                    v = (0, i.A)(w, 2),
                    E = v[0],
                    y = v[1],
                    A = p.useState(!1),
                    x = (0, i.A)(A, 2),
                    C = x[0],
                    S = x[1],
                    B = p.useState(!1),
                    j = (0, i.A)(B, 2),
                    U = j[0],
                    D = j[1],
                    O = p.useState(!1),
                    Z = (0, i.A)(O, 2),
                    F = Z[0],
                    W = (Z[1], p.useState(!1)),
                    G = (0, i.A)(W, 2),
                    V = (G[0], G[1]),
                    T = function() {
                        g || F || S(!0)
                    },
                    Y = function() {
                        S(!1), D(!1)
                    };
                return p.createElement(P, {
                    onMouseLeave: Y
                }, p.createElement(M, {
                    onMouseEnter: T
                }, p.createElement(H, {
                    alt: "icon",
                    src: a,
                    hidden: E,
                    onLoad: function() {
                        y(!1)
                    }
                }), p.createElement(L, {
                    hidden: !E
                }, p.createElement(k.A, null))), p.createElement(R, {
                    hidden: !C,
                    onMouseEnter: T,
                    onMouseLeave: Y
                }, p.createElement(q, null, !n && u && p.createElement(z.A, {
                    color: "success",
                    onClick: function() {
                        S(!1), o(r, l), d && d(r)
                    }
                }, p.createElement(b.M2, {
                    icon: _.sj,
                    color: "hsl(0, 0%, 7%)"
                })), f && p.createElement(z.A, {
                    color: "success",
                    onClick: function() {
                        S(!1), h(r, a)
                    }
                }, p.createElement(b.M2, {
                    icon: m.e6
                })), p.createElement(I, {
                    color: "danger",
                    onClick: U ? null : D,
                    onMouseLeave: function() {
                        D(!1)
                    }
                }, p.createElement(b.M2, {
                    icon: U ? c.GR : N.yL,
                    onClick: function() {
                        D(!0)
                    }
                }), p.createElement(b.M2, {
                    icon: N.yL,
                    hidden: !U,
                    onClick: function() {
                        S(!1), s(r), d && d(r)
                    },
                    onMouseEnter: function() {
                        return V(!0)
                    },
                    onMouseLeave: function() {
                        return V(!1)
                    }
                })))))
            };
            n.dn(j);
            var P = (0, r.A)("div", {
                    target: "e9oscuz6"
                })({
                    name: "yyipxg",
                    styles: "width:9em;height:9em;display:flex;z-index:1;align-items:center;justify-content:center;.image-preview{width:100%;}.margin-slide-out{animation:margin-slide-out 0.4s ease-out;animation-timing-function:ease-out;animation-fill-mode:forwards;}@keyframes margin-slide-out{0%{width:10%;}100%{width:100%;}}"
                }),
                M = (0, r.A)("div", {
                    target: "e9oscuz5"
                })({
                    name: "zs9p23",
                    styles: "width:100%;background-color:var(--bs-gray-dark);width:110px!important;height:110px;padding:5px;border-radius:10px;z-index:3!important"
                }),
                H = (0, r.A)("img", {
                    target: "e9oscuz4"
                })({
                    name: "wfgzr2",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%"
                }),
                L = (0, r.A)("div", {
                    target: "e9oscuz3"
                })({
                    name: "1cqhxvz",
                    styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:10%;display:flex;align-items:center;justify-content:center"
                }),
                R = (0, r.A)("div", {
                    target: "e9oscuz2"
                })({
                    name: "19d5n0a",
                    styles: "width:11em;height:110px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important;margin-left:-38%;z-index:-1"
                }),
                q = (0, r.A)("div", {
                    target: "e9oscuz1"
                })({
                    name: "115e33k",
                    styles: "max-width:100px;display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -0.5em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                }),
                I = (0, r.A)(z.A, {
                    target: "e9oscuz0"
                })({
                    name: "7yp9nl",
                    styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                });
            const U = function(e) {
                var t, n = e.aspectRatio,
                    r = e.successCallback,
                    g = void 0 === r ? null : r,
                    N = (e.isSelector, p.useState(null)),
                    _ = (0, i.A)(N, 2),
                    z = _[0],
                    P = _[1],
                    M = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    H = (0, i.A)(M, 2),
                    L = (H[0], H[1]),
                    R = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    q = (0, i.A)(R, 2),
                    I = q[0],
                    U = q[1],
                    O = p.useState({
                        x: 0,
                        y: 0
                    }),
                    Z = (0, i.A)(O, 2),
                    F = Z[0],
                    W = Z[1],
                    G = p.useState(1),
                    V = (0, i.A)(G, 2),
                    T = V[0],
                    Y = V[1],
                    J = p.useState(null != n ? n : 1),
                    K = (0, i.A)(J, 2),
                    Q = K[0],
                    X = K[1],
                    $ = p.useState(!1),
                    ee = (0, i.A)($, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = p.useState(!1),
                    ie = (0, i.A)(ae, 2),
                    re = ie[0],
                    le = ie[1],
                    oe = p.useState(0),
                    se = (0, i.A)(oe, 2),
                    me = se[0],
                    ce = se[1],
                    ue = p.useState(!1),
                    de = (0, i.A)(ue, 2),
                    ge = de[0],
                    he = de[1],
                    fe = p.useState(!1),
                    pe = (0, i.A)(fe, 2),
                    we = pe[0],
                    ve = pe[1],
                    Ee = p.useState(!1),
                    ye = (0, i.A)(Ee, 2),
                    Ae = ye[0],
                    xe = ye[1],
                    be = p.useState("Aura"),
                    ke = (0, i.A)(be, 2),
                    Ce = ke[0],
                    Se = ke[1],
                    Be = p.useState(!1),
                    Ne = (0, i.A)(Be, 2),
                    _e = Ne[0],
                    ze = (Ne[1], p.useRef(null)),
                    je = ((0, S.w_)().data, (0, w.wA)(), (0, C.DF)()),
                    Pe = {
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
                    Me = (0, B.OC)(),
                    He = (0, i.A)(Me, 2),
                    Le = He[0],
                    Re = He[1],
                    qe = Re.isLoading,
                    Ie = Re.isSuccess,
                    Ue = Re.isError,
                    De = Re.error,
                    Oe = (f.A.location.search.slice(1).split("&").map(function(e) {
                        return e.split("=")
                    }).filter(function(e) {
                        return "preload" === e[0]
                    })[0], function() {
                        P(null), L({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), U({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), W({
                            x: 0,
                            y: 0
                        }), Y(1), X(null != n ? n : 1), ne(!1), le({}), ce(0), he(!1), ve(!1), xe(!1)
                    });
                p.useEffect(function() {
                    Ue && je({
                        error: De
                    }) && Oe()
                }, [Ue, De]);
                var Ze = function(e, t) {
                        L(e), U(t)
                    },
                    Fe = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    We = function(e, t) {
                        return new Promise(function(n) {
                            var a = document.createElement("canvas"),
                                i = a.getContext("2d"),
                                r = new Image;
                            r.crossOrigin = "*", r.addEventListener("load", function() {
                                a.width = t.width, a.height = t.height, i.drawImage(e, -t.x, -t.y), a.toBlob(function(e) {
                                    var t = new FileReader;
                                    t.addEventListener("load", function() {
                                        n({
                                            file: e,
                                            base64: t.result
                                        })
                                    }), t.readAsDataURL(e)
                                }, "image/png")
                            }, !1), r.src = e.src
                        })
                    },
                    Ge = function() {
                        var e = (0, a.A)(h().mark(function e() {
                            var t;
                            return h().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, We(Fe(z), I);
                                    case 2:
                                        t = e.sent, ne(!0), le(t), ce(2);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ve = null !== z,
                    Te = [p.createElement("span", null, p.createElement("h3", null, "(1/4) Choose an emoji to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", null, "(2/4) Crop your emoji as desired"), p.createElement("h3", null, "(3/4) Choose your animation style"), p.createElement("h3", null, "(4/4) Preview before upload")];
                return p.createElement("div", null, p.createElement("div", {
                    className: (0, y.AH)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Emoji")), p.createElement("div", null, Te[me]), p.createElement("div", {
                    hidden: 2 !== me
                }, p.createElement("img", {
                    className: (0, y.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    }),
                    src: function(e) {
                        return "https://assets.vrchat.com/www/images/emoji-previews/".concat(Pe[e])
                    }(Ce),
                    alt: "Animation Preview",
                    width: 350
                }), p.createElement("ul", null, p.createElement("h4", {
                    className: (0, y.AH)({
                        name: "1ur8p3y",
                        styles: "margin-left:0.3em"
                    })
                }, "Current Selection: ", Ce), Object.keys(Pe).map(function(e, t) {
                    return p.createElement(D, {
                        key: t,
                        onClick: function() {
                            return Se(e)
                        }
                    }, p.createElement("div", null, e))
                })), p.createElement("div", {
                    className: (0, y.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(v.A, {
                    className: (0, y.AH)({
                        name: "1eddf3f",
                        styles: "margin-right:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        ce(me - 1), ne(!1), le({}), ce(1)
                    }
                }, "Back"), p.createElement(v.A, {
                    color: "success",
                    onClick: function() {
                        return ce(me + 1)
                    },
                    className: (0, y.AH)({
                        name: "1eddf3f",
                        styles: "margin-right:0.5em"
                    })
                }, p.createElement(b.M2, {
                    icon: u.Mj,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"))), p.createElement("div", {
                    hidden: te
                }, p.createElement("div", {
                    className: (0, y.AH)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ge || Ae || we) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(b.M2, {
                    icon: d.bx,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ge && "Image size is larger than 10MBs. ", Ae && "Image dimensions are smaller than 64 pixels. ", we && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !Ve && !_e && p.createElement("div", null, p.createElement("input", {
                    ref: ze,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        he(!1), ve(!1), xe(!1);
                        var e = ze.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) he(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", function() {
                                if (t.width < 64 || t.height < 64) xe(!0);
                                else if (t.width > 2048 || t.height > 2048) ve(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", function() {
                                        P(n.result), ce(1)
                                    }), e && n.readAsDataURL(e)
                                }
                            }), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Ve && p.createElement("div", null, p.createElement(A.Ay, {
                    image: z,
                    crop: F,
                    zoom: T,
                    aspect: Q,
                    onCropChange: function(e) {
                        W(e)
                    },
                    onCropComplete: Ze,
                    onCropAreaChange: Ze,
                    onZoomChange: function(e) {
                        Y(e)
                    },
                    cropShape: "square"
                }))), Ve && p.createElement("div", {
                    className: (0, y.AH)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ge && p.createElement(v.A, {
                    color: "success",
                    onClick: Ge
                }, p.createElement(b.M2, {
                    icon: u.Mj,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), p.createElement(x.N_, {
                    to: "/home/gallery/emoji"
                }, p.createElement(v.A, {
                    color: "danger"
                }, p.createElement(b.M2, {
                    icon: c.GR,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !te,
                    className: (0, y.AH)({
                        name: "rz992n",
                        styles: "margin:auto;text-align:center;button{width:8em;}"
                    })
                }, Ie && p.createElement("div", {
                    className: (0, y.AH)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.A, {
                    color: "success",
                    className: (0, y.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: m.e6,
                    size: "2x",
                    className: (0, y.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your emoji has been uploaded successfully!", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, g ? p.createElement(v.A, {
                    onClick: function() {
                        Oe(), g()
                    }
                }, "Back") : p.createElement(x.N_, {
                    to: "/home/gallery/emoji"
                }, p.createElement(v.A, {
                    className: (0, y.AH)({
                        name: "1287a6j",
                        styles: "width:8em"
                    })
                }, "View Emoji"))))), Ue && p.createElement("div", {
                    className: (0, y.AH)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.A, {
                    color: "danger",
                    className: (0, y.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: s.zp,
                    size: "2x",
                    className: (0, y.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your emoji failed to upload!", p.createElement("br", null), (null == De || null === (t = De.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message) || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(x.N_, {
                    to: "/home/gallery/emoji"
                }, p.createElement(v.A, null, "View Emoji"))))), !qe && 3 === me && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.AH)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, p.createElement(j, {
                    imageUrl: re.base64,
                    borderColor: "yellow",
                    disableManagement: !0
                })), !Ie && !Ue && p.createElement("div", null, p.createElement(v.A, {
                    color: "success",
                    onClick: function() {
                        Le({
                            tag: "emoji",
                            file: re.file,
                            animationStyle: Ce.toLowerCase(),
                            maskTag: "square"
                        })
                    }
                }, p.createElement(b.M2, {
                    icon: o.Jm,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(v.A, {
                    className: (0, y.AH)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        return ce(me - 1)
                    }
                }, p.createElement(b.M2, {
                    icon: l.Ce,
                    className: (0, y.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), qe && p.createElement("div", {
                    className: (0, y.AH)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, y.AH)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(k.A, null)), p.createElement("div", {
                    className: (0, y.AH)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "Uploading Emoji..."))))
            };
            n.dn(U);
            var D = (0, r.A)("li", {
                target: "eotoqf10"
            })({
                name: "142eo2q",
                styles: "list-style-type:none;background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:inline-flex;flex-direction:row;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;max-width:8em;margin:0.5em;text-align:center;cursor:pointer;div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
            })
        }
    }
]);
//# sourceMappingURL=aa2b99962ab3021cb310b6d061009b09644c4f1a4206e77b959f98cdbef504db.js.map