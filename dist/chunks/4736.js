"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4736], {
        6559(e, t, n) {
            n.d(t, {
                A: () => h
            });
            var a = n(82544),
                r = n(38275),
                i = n(19179),
                l = n(81617),
                s = n(84837),
                c = n(96540),
                o = n(16477),
                m = n(56822),
                u = n(15033),
                d = n(25538);
            const h = function(e) {
                var t = e.isAdminView,
                    n = void 0 !== t && t,
                    h = e.imageUrl,
                    g = e.fileId,
                    p = e.versionNumber,
                    f = e.onWear,
                    E = e.onDelete,
                    v = e.borderColor,
                    A = e.showWear,
                    w = (e.didClickConvertToIcon, e.imageWidth, e.imageHeight, e.onShouldDeleteSelf),
                    y = e.disableManagement,
                    x = e.onSelect,
                    b = e.showSelect,
                    N = c.useState(!0),
                    k = (0, a.A)(N, 2),
                    S = k[0],
                    C = k[1],
                    H = c.useState(!1),
                    M = (0, a.A)(H, 2),
                    z = M[0],
                    U = M[1],
                    I = c.useState(!1),
                    L = (0, a.A)(I, 2),
                    j = L[0],
                    R = L[1],
                    q = c.useState(!1),
                    D = (0, a.A)(q, 2),
                    _ = D[0],
                    B = (D[1], c.useState(!1)),
                    G = (0, a.A)(B, 2),
                    O = G[0],
                    P = G[1],
                    F = function() {
                        y || _ || U(!0)
                    },
                    V = function() {
                        U(!1), R(!1)
                    },
                    W = function() {
                        R(!1)
                    },
                    Y = _ ? "spin-and-shrink " : "",
                    J = z ? "quick-visible margin-slide-out " : "",
                    Q = O ? "jitter " : "",
                    T = v;
                return c.createElement("div", {
                    className: Y + Q + (0, m.AH)({
                        name: "1fsfws8",
                        styles: "width:9em;height:9em;display:flex;z-index:1;align-items:center;justify-content:center;.management-box{width:100%;margin-left:-38%;z-index:-1;}.image-preview{width:100%;}.margin-slide-out{animation:margin-slide-out 0.4s ease-out;animation-timing-function:ease-out;animation-fill-mode:forwards;}@keyframes margin-slide-out{0%{width:10%;}100%{width:100%;}}"
                    }),
                    onMouseLeave: V
                }, c.createElement("div", {
                    className: "image-preview ".concat((0, m.AH)("background-color:", T || "var(--bs-gray-dark)", ";width:110px!important;height:110px;padding:5px;border-radius:100px;z-index:3!important;")),
                    onMouseEnter: F
                }, c.createElement("img", {
                    alt: "icon",
                    src: h,
                    className: (0, m.AH)({
                        name: "13hsx1w",
                        styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:100%"
                    }),
                    hidden: S,
                    onLoad: function() {
                        C(!1)
                    }
                }), c.createElement("div", {
                    className: (0, m.AH)({
                        name: "1ke3ozn",
                        styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:100%;display:flex;align-items:center;justify-content:center"
                    }),
                    hidden: !S
                }, c.createElement(d.A, null))), c.createElement("div", {
                    className: "management-box ".concat(J, " ").concat((0, m.AH)({
                        name: "tq95mw",
                        styles: "width:11em;height:110px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important"
                    })),
                    hidden: !z,
                    onMouseEnter: F,
                    onMouseLeave: V
                }, c.createElement("div", {
                    className: (0, m.AH)({
                        name: "115e33k",
                        styles: "max-width:100px;display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -0.5em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                    })
                }, !n && A && c.createElement(o.A, {
                    color: "success",
                    onClick: function() {
                        U(!1), f(g, p), w && w(g)
                    }
                }, c.createElement(u.M2, {
                    icon: s.sj,
                    color: "hsl(0, 0%, 7%)"
                })), b && c.createElement(o.A, {
                    color: "success",
                    onClick: function() {
                        U(!1), x(g, h)
                    }
                }, c.createElement(u.M2, {
                    icon: l.e6
                })), c.createElement(o.A, {
                    color: "danger",
                    onClick: j ? null : R,
                    onMouseLeave: W,
                    className: (0, m.AH)({
                        name: "7yp9nl",
                        styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                    })
                }, c.createElement(u.M2, {
                    icon: j ? i.GR : r.yL,
                    onClick: j ? W : function() {
                        R(!0)
                    }
                }), c.createElement(u.M2, {
                    icon: r.yL,
                    hidden: !j,
                    onClick: function() {
                        U(!1), E(g), w && w(g)
                    },
                    onMouseEnter: function() {
                        P(!0)
                    },
                    onMouseLeave: function() {
                        P(!1)
                    }
                })))))
            };
            n.dn(h)
        },
        34736(e, t, n) {
            n.r(t), n.d(t, {
                default: () => U
            });
            var a = n(10467),
                r = n(82544),
                i = n(81021),
                l = n(19616),
                s = n(34496),
                c = n(81617),
                o = n(19179),
                m = n(61145),
                u = n(35532),
                d = n(54756),
                h = n.n(d),
                g = n(9431),
                p = n(96540),
                f = n(6376),
                E = n(30104),
                v = n(48210),
                A = n(85052),
                w = n(56822),
                y = n(41952),
                x = n(84976),
                b = n(15033),
                N = n(25538),
                k = n(97071),
                S = n(74303),
                C = n(6559),
                H = n(558),
                M = n(13951);
            var z = 2048;
            const U = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    U = (e.isSelector, p.useState(null)),
                    I = (0, r.A)(U, 2),
                    L = I[0],
                    j = I[1],
                    R = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    q = (0, r.A)(R, 2),
                    D = (q[0], q[1]),
                    _ = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    B = (0, r.A)(_, 2),
                    G = B[0],
                    O = B[1],
                    P = p.useState({
                        x: 0,
                        y: 0
                    }),
                    F = (0, r.A)(P, 2),
                    V = F[0],
                    W = F[1],
                    Y = p.useState(1),
                    J = (0, r.A)(Y, 2),
                    Q = J[0],
                    T = J[1],
                    Z = p.useState(null != t ? t : 1),
                    K = (0, r.A)(Z, 2),
                    X = K[0],
                    $ = K[1],
                    ee = p.useState(!1),
                    te = (0, r.A)(ee, 2),
                    ne = te[0],
                    ae = te[1],
                    re = p.useState(!1),
                    ie = (0, r.A)(re, 2),
                    le = ie[0],
                    se = ie[1],
                    ce = p.useState(0),
                    oe = (0, r.A)(ce, 2),
                    me = oe[0],
                    ue = oe[1],
                    de = p.useState(!1),
                    he = (0, r.A)(de, 2),
                    ge = he[0],
                    pe = he[1],
                    fe = p.useState(!1),
                    Ee = (0, r.A)(fe, 2),
                    ve = Ee[0],
                    Ae = Ee[1],
                    we = p.useState(!1),
                    ye = (0, r.A)(we, 2),
                    xe = (ye[0], ye[1]),
                    be = p.useState(!1),
                    Ne = (0, r.A)(be, 2),
                    ke = Ne[0],
                    Se = Ne[1],
                    Ce = p.useState(!1),
                    He = (0, r.A)(Ce, 2),
                    Me = He[0],
                    ze = He[1],
                    Ue = p.useState(null),
                    Ie = (0, r.A)(Ue, 2),
                    Le = Ie[0],
                    je = (Ie[1], p.useState(!1)),
                    Re = (0, r.A)(je, 2),
                    qe = Re[0],
                    De = Re[1],
                    _e = p.useState(!1),
                    Be = (0, r.A)(_e, 2),
                    Ge = (Be[0], Be[1]),
                    Oe = (0, f.d4)(function(e) {
                        return e.currentUser.iconUploadState
                    }),
                    Pe = (0, f.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }),
                    Fe = ((0, f.d4)(function(e) {
                        return e.currentUser.preloadedGalleryImage
                    }), (0, f.d4)(function(e) {
                        return e.currentUser.isPreloadingImage
                    }), p.useRef(null)),
                    Ve = (0, M.w_)().data,
                    We = void 0 === Ve ? [] : Ve,
                    Ye = (0, f.wA)(),
                    Je = (0, k.DF)(),
                    Qe = (g.A.location.search.slice(1).split("&").map(function(e) {
                        return e.split("=")
                    }).filter(function(e) {
                        return "preload" === e[0]
                    })[0], function() {
                        j(null), D({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), O({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), W({
                            x: 0,
                            y: 0
                        }), T(1), $(null != t ? t : 1), ae(!1), se({}), ue(0), Ae(!1), xe(!1), Se(!1), ze(!1), De(!1), Ge(!1), pe(!1), Ye((0, H.rp)())
                    });
                p.useEffect(function() {
                    Ye((0, H.rp)())
                }, []), p.useEffect(function() {
                    Oe.complete && !Oe.success && Je({
                        error: Oe.rawResponse
                    }) && Qe()
                }, [Oe]);
                var Te, Ze = function(e, t) {
                        D(e), O(t)
                    },
                    Ke = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Xe = function(e, t) {
                        return new Promise(function(n) {
                            var a = document.createElement("canvas"),
                                r = a.getContext("2d"),
                                i = new Image;
                            i.crossOrigin = "*", i.addEventListener("load", function() {
                                a.width = t.width, a.height = t.height, r.drawImage(e, -t.x, -t.y);
                                var i = function(e) {
                                    var t = e.width,
                                        n = e.height;
                                    if (t <= z && n <= z) return e;
                                    var a = Math.min(z / t, z / n),
                                        r = document.createElement("canvas");
                                    r.width = Math.round(t * a), r.height = Math.round(n * a);
                                    var i = r.getContext("2d");
                                    return i.imageSmoothingQuality = "high", i.drawImage(e, 0, 0, r.width, r.height), r
                                }(a);
                                i.toBlob(function(e) {
                                    var t = new FileReader;
                                    t.addEventListener("load", function() {
                                        n({
                                            file: e,
                                            base64: t.result
                                        })
                                    }), t.readAsDataURL(e)
                                }, "image/png")
                            }, !1), i.src = e.src
                        })
                    },
                    $e = function() {
                        var e = (0, a.A)(h().mark(function e() {
                            var t;
                            return h().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Xe(Ke(L), G);
                                    case 2:
                                        t = e.sent, ae(!0), se(t), ue(2);
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
                    et = null !== L,
                    tt = [Me ? p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Fetching your gallery photo..."), " ", p.createElement("br", null), p.createElement("br", null)) : p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    nt = ge ? "Your current icon has been updated!" : p.createElement("span", null, " "),
                    at = We.includes("permission-user-icons"),
                    rt = "yellow";
                return Oe.complete && (ge && Oe.success ? (rt = "green", function() {
                    Oe.lastUpload.versions[1].file.url;
                    var e = Pe.id,
                        t = (0, S.w8)({
                            fileId: Oe.lastUpload.id,
                            versionNumber: Oe.lastUpload.versions[1].version
                        });
                    (0, H.vv)({
                        userId: e,
                        data: {
                            userIcon: t
                        }
                    })
                }()) : rt = Oe.success ? "" : "red"), at ? (Me && !qe && (Te = Le, Ge(!0), De(!0), ue(1), j(window.apiUrl("/api/1/image/".concat(Te, "/1/1600")))), p.createElement("div", null, p.createElement("div", {
                    className: (0, w.AH)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Icon")), p.createElement("div", null, tt[me]), p.createElement("div", {
                    hidden: ne
                }, p.createElement("div", {
                    className: (0, w.AH)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ve || ke) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(b.M2, {
                    icon: u.bx,
                    className: (0, w.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ve && "Image size is larger than 10MBs. ", ke && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !et && !Me && p.createElement("div", null, p.createElement("input", {
                    ref: Fe,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        Ae(!1), xe(!1), Se(!1);
                        var e = Fe.current.files[0];
                        if (e.size > 10485760) Ae(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", function() {
                                if (t.width < 64 || t.height < 64) Se(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", function() {
                                        j(n.result), ue(1)
                                    }), e && n.readAsDataURL(e)
                                }
                            }), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), et && p.createElement("div", null, p.createElement(y.Ay, {
                    image: L,
                    crop: V,
                    zoom: Q,
                    aspect: X,
                    onCropChange: function(e) {
                        W(e)
                    },
                    onCropComplete: Ze,
                    onCropAreaChange: Ze,
                    onZoomChange: function(e) {
                        T(e)
                    },
                    cropShape: "round"
                }))), et && p.createElement("div", {
                    className: (0, w.AH)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ve && p.createElement(E.A, {
                    color: "success",
                    onClick: $e
                }, p.createElement(b.M2, {
                    icon: m.Mj,
                    className: (0, w.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), p.createElement(x.N_, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(E.A, {
                    color: "danger"
                }, p.createElement(b.M2, {
                    icon: o.GR,
                    className: (0, w.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !ne,
                    className: (0, w.AH)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, Oe.success && Oe.complete && p.createElement("div", {
                    className: (0, w.AH)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(A.A, {
                    color: "success",
                    className: (0, w.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: c.e6,
                    size: "2x",
                    className: (0, w.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon has been uploaded successfully!", p.createElement("br", null), nt, p.createElement("br", null)), p.createElement("div", {
                    className: (0, w.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(E.A, {
                    onClick: function() {
                        Qe(), d()
                    }
                }, "Back") : p.createElement(x.N_, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(E.A, null, "View Icons"))))), !Oe.success && Oe.complete && p.createElement("div", {
                    className: (0, w.AH)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(A.A, {
                    color: "danger",
                    className: (0, w.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: s.zp,
                    size: "2x",
                    className: (0, w.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon failed to upload!", p.createElement("br", null), Oe.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, w.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(x.N_, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(E.A, null, "View Icons"))))), !Oe.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, w.AH)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, p.createElement(C.A, {
                    imageUrl: le.base64,
                    borderColor: rt,
                    disableManagement: !0
                })), !Oe.success && p.createElement("div", null, !d && p.createElement("div", {
                    className: (0, w.AH)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, p.createElement(v.A, {
                    type: "checkbox",
                    onChange: function(e) {
                        pe(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as current icon")), p.createElement(E.A, {
                    color: "success",
                    onClick: function() {
                        Ye((0, H.Sb)({
                            file: le.file
                        }))
                    }
                }, p.createElement(b.M2, {
                    icon: l.Jm,
                    className: (0, w.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(E.A, {
                    className: (0, w.AH)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        ae(!1), se({}), ue(1)
                    }
                }, p.createElement(b.M2, {
                    icon: i.Ce,
                    className: (0, w.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Oe.pending && p.createElement("div", {
                    className: (0, w.AH)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, w.AH)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(N.A, null)), p.createElement("div", {
                    className: (0, w.AH)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "UPLOADING ICON..."))))) : p.createElement("div", null, "no icon permission")
            };
            n.dn(U)
        }
    }
]);
//# sourceMappingURL=b9d1cf2f0330aacbdbfef17a44969565fb7b63bb4e8700ea7478ffcc3d3a4b16.js.map