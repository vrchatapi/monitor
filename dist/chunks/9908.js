"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9908], {
        23797: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var a = n(54546),
                i = n(42619),
                l = n(59545),
                r = n(68055),
                s = n(28361),
                c = n(67294),
                o = n(25062),
                m = n(83505),
                u = n(46382),
                d = n(43862);
            const h = function(e) {
                var t = e.isAdminView,
                    n = void 0 !== t && t,
                    h = e.imageUrl,
                    g = e.fileId,
                    p = e.versionNumber,
                    v = e.onWear,
                    f = e.onDelete,
                    E = e.borderColor,
                    w = e.showWear,
                    x = (e.didClickConvertToIcon, e.imageWidth, e.imageHeight, e.onShouldDeleteSelf),
                    y = e.disableManagement,
                    b = e.onSelect,
                    Z = e.showSelect,
                    N = c.useState(!0),
                    k = (0, a.Z)(N, 2),
                    C = k[0],
                    S = k[1],
                    U = c.useState(!1),
                    I = (0, a.Z)(U, 2),
                    L = I[0],
                    z = I[1],
                    j = c.useState(!1),
                    $ = (0, a.Z)(j, 2),
                    M = $[0],
                    R = $[1],
                    q = c.useState(!1),
                    B = (0, a.Z)(q, 2),
                    P = B[0],
                    A = (B[1], c.useState(!1)),
                    D = (0, a.Z)(A, 2),
                    O = D[0],
                    W = D[1],
                    V = function() {
                        y || P || z(!0)
                    },
                    F = function() {
                        z(!1), R(!1)
                    },
                    G = function() {
                        R(!1)
                    },
                    Y = P ? "spin-and-shrink " : "",
                    _ = L ? "quick-visible margin-slide-out " : "",
                    H = O ? "jitter " : "",
                    T = E;
                return c.createElement("div", {
                    className: Y + H + (0, m.iv)({
                        name: "1fsfws8",
                        styles: "width:9em;height:9em;display:flex;z-index:1;align-items:center;justify-content:center;.management-box{width:100%;margin-left:-38%;z-index:-1;}.image-preview{width:100%;}.margin-slide-out{animation:margin-slide-out 0.4s ease-out;animation-timing-function:ease-out;animation-fill-mode:forwards;}@keyframes margin-slide-out{0%{width:10%;}100%{width:100%;}}"
                    }),
                    onMouseLeave: F
                }, c.createElement("div", {
                    className: "image-preview ".concat((0, m.iv)("background-color:", T || "var(--bs-gray-dark)", ";width:110px!important;height:110px;padding:5px;border-radius:100px;z-index:3!important;")),
                    onMouseEnter: V
                }, c.createElement("img", {
                    alt: "icon",
                    src: h,
                    className: (0, m.iv)({
                        name: "13hsx1w",
                        styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:100%"
                    }),
                    hidden: C,
                    onLoad: function() {
                        S(!1)
                    }
                }), c.createElement("div", {
                    className: (0, m.iv)({
                        name: "1ke3ozn",
                        styles: "width:100px;height:100px;max-width:100px;max-height:100px;border-radius:100%;display:flex;align-items:center;justify-content:center"
                    }),
                    hidden: !C
                }, c.createElement(d.Z, null))), c.createElement("div", {
                    className: "management-box ".concat(_, " ").concat((0, m.iv)({
                        name: "tq95mw",
                        styles: "width:11em;height:110px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important"
                    })),
                    hidden: !L,
                    onMouseEnter: V,
                    onMouseLeave: F
                }, c.createElement("div", {
                    className: (0, m.iv)({
                        name: "115e33k",
                        styles: "max-width:100px;display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -0.5em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                    })
                }, !n && w && c.createElement(o.Z, {
                    color: "success",
                    onClick: function() {
                        z(!1), v(g, p), x && x(g)
                    }
                }, c.createElement(u.$1, {
                    icon: s.vT,
                    color: "hsl(0, 0%, 7%)"
                })), Z && c.createElement(o.Z, {
                    color: "success",
                    onClick: function() {
                        z(!1), b(g, h)
                    }
                }, c.createElement(u.$1, {
                    icon: r.LE
                })), c.createElement(o.Z, {
                    color: "danger",
                    onClick: M ? null : R,
                    onMouseLeave: G,
                    className: (0, m.iv)({
                        name: "7yp9nl",
                        styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                    })
                }, c.createElement(u.$1, {
                    icon: M ? l.NB : i.$,
                    onClick: M ? G : function() {
                        R(!0)
                    }
                }), c.createElement(u.$1, {
                    icon: i.$,
                    hidden: !M,
                    onClick: function() {
                        z(!1), f(g), x && x(g)
                    },
                    onMouseEnter: function() {
                        W(!0)
                    },
                    onMouseLeave: function() {
                        W(!1)
                    }
                })))))
            }
        },
        39908: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => I
            });
            var a = n(15861),
                i = n(54546),
                l = n(55346),
                r = n(2723),
                s = n(76553),
                c = n(68055),
                o = n(59545),
                m = n(95337),
                u = n(44814),
                d = n(64687),
                h = n.n(d),
                g = n(43081),
                p = n(67294),
                v = n(32981),
                f = n(34698),
                E = n(23138),
                w = n(87261),
                x = n(83505),
                y = n(70123),
                b = n(79655),
                Z = n(46382),
                N = n(43862),
                k = n(12227),
                C = n(23797),
                S = n(5513),
                U = n(22202);
            const I = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    I = (e.isSelector, p.useState(null)),
                    L = (0, i.Z)(I, 2),
                    z = L[0],
                    j = L[1],
                    $ = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    M = (0, i.Z)($, 2),
                    R = (M[0], M[1]),
                    q = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    B = (0, i.Z)(q, 2),
                    P = B[0],
                    A = B[1],
                    D = p.useState({
                        x: 0,
                        y: 0
                    }),
                    O = (0, i.Z)(D, 2),
                    W = O[0],
                    V = O[1],
                    F = p.useState(1),
                    G = (0, i.Z)(F, 2),
                    Y = G[0],
                    _ = G[1],
                    H = p.useState(null != t ? t : 1),
                    T = (0, i.Z)(H, 2),
                    J = T[0],
                    K = T[1],
                    Q = p.useState(!1),
                    X = (0, i.Z)(Q, 2),
                    ee = X[0],
                    te = X[1],
                    ne = p.useState(!1),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    le = ae[1],
                    re = p.useState(0),
                    se = (0, i.Z)(re, 2),
                    ce = se[0],
                    oe = se[1],
                    me = p.useState(!1),
                    ue = (0, i.Z)(me, 2),
                    de = ue[0],
                    he = ue[1],
                    ge = p.useState(!1),
                    pe = (0, i.Z)(ge, 2),
                    ve = pe[0],
                    fe = pe[1],
                    Ee = p.useState(!1),
                    we = (0, i.Z)(Ee, 2),
                    xe = we[0],
                    ye = we[1],
                    be = p.useState(!1),
                    Ze = (0, i.Z)(be, 2),
                    Ne = Ze[0],
                    ke = Ze[1],
                    Ce = p.useState(!1),
                    Se = (0, i.Z)(Ce, 2),
                    Ue = Se[0],
                    Ie = Se[1],
                    Le = p.useState(null),
                    ze = (0, i.Z)(Le, 2),
                    je = ze[0],
                    $e = (ze[1], p.useState(!1)),
                    Me = (0, i.Z)($e, 2),
                    Re = Me[0],
                    qe = Me[1],
                    Be = p.useState(!1),
                    Pe = (0, i.Z)(Be, 2),
                    Ae = (Pe[0], Pe[1]),
                    De = (0, v.v9)((function(e) {
                        return e.currentUser.iconUploadState
                    })),
                    Oe = (0, v.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    We = ((0, v.v9)((function(e) {
                        return e.currentUser.preloadedGalleryImage
                    })), (0, v.v9)((function(e) {
                        return e.currentUser.isPreloadingImage
                    })), p.useRef(null)),
                    Ve = (0, U.q7)().data,
                    Fe = void 0 === Ve ? [] : Ve,
                    Ge = (0, v.I0)();
                g.Z.location.search.slice(1).split("&").map((function(e) {
                    return e.split("=")
                })).filter((function(e) {
                    return "preload" === e[0]
                }))[0];
                p.useEffect((function() {
                    Ge((0, S.LC)())
                }), []);
                var Ye, _e = function(e, t) {
                        R(e), A(t)
                    },
                    He = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Te = function(e, t) {
                        return new Promise((function(n) {
                            var a = document.createElement("canvas"),
                                i = a.getContext("2d"),
                                l = new Image;
                            l.crossOrigin = "*", l.addEventListener("load", (function() {
                                a.width = t.width, a.height = t.height, i.drawImage(e, -t.x, -t.y), a.toBlob((function(e) {
                                    var t = new FileReader;
                                    t.addEventListener("load", (function() {
                                        n({
                                            file: e,
                                            base64: t.result
                                        })
                                    })), t.readAsDataURL(e)
                                }), "image/png")
                            }), !1), l.src = e.src
                        }))
                    },
                    Je = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Te(He(z), P);
                                    case 2:
                                        t = e.sent, te(!0), le(t), oe(2);
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
                    Ke = null !== z,
                    Qe = [Ue ? p.createElement("span", null, p.createElement("h3", null, "(1/3) Fetching your gallery photo..."), " ", p.createElement("br", null), p.createElement("br", null)) : p.createElement("span", null, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", null, "(2/3) Crop your picture as desired"), p.createElement("h3", null, "(3/3) Preview before upload")],
                    Xe = de ? "Your current icon has been updated!" : p.createElement("span", null, " "),
                    et = Fe.includes("permission-user-icons"),
                    tt = "yellow";
                return De.complete && (de && De.success ? (tt = "green", function() {
                    De.lastUpload.versions[1].file.url;
                    var e = Oe.id,
                        t = (0, k.qm)({
                            fileId: De.lastUpload.id,
                            versionNumber: De.lastUpload.versions[1].version
                        });
                    (0, S._W)({
                        userId: e,
                        data: {
                            userIcon: t
                        }
                    })
                }()) : tt = De.success ? "" : "red"), et ? (Ue && !Re && (Ye = je, Ae(!0), qe(!0), oe(1), j(window.apiUrl("/api/1/image/".concat(Ye, "/1/1600")))), p.createElement("div", null, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Icon")), p.createElement("div", null, Qe[ce]), p.createElement("div", {
                    hidden: ee
                }, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ve || Ne || xe) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(Z.$1, {
                    icon: u.WV,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ve && "Image size is larger than 10MBs. ", Ne && "Image dimensions are smaller than 64 pixels. ", xe && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !Ke && !Ue && p.createElement("div", null, p.createElement("input", {
                    ref: We,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        fe(!1), ye(!1), ke(!1);
                        var e = We.current.files[0];
                        if (e.size > 10485760) fe(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) ke(!0);
                                else if (t.width > 2048 || t.height > 2048) ye(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        j(n.result), oe(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Ke && p.createElement("div", null, p.createElement(y.ZP, {
                    image: z,
                    crop: W,
                    zoom: Y,
                    aspect: J,
                    onCropChange: function(e) {
                        V(e)
                    },
                    onCropComplete: _e,
                    onCropAreaChange: _e,
                    onZoomChange: function(e) {
                        _(e)
                    },
                    cropShape: "round"
                }))), Ke && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ve && p.createElement(f.Z, {
                    color: "success",
                    onClick: Je
                }, p.createElement(Z.$1, {
                    icon: m.wn,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, {
                    color: "danger"
                }, p.createElement(Z.$1, {
                    icon: o.NB,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !ee,
                    className: (0, x.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, De.success && De.complete && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.Z, {
                    color: "success",
                    className: (0, x.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(Z.$1, {
                    icon: c.LE,
                    size: "2x",
                    className: (0, x.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon has been uploaded successfully!", p.createElement("br", null), Xe, p.createElement("br", null)), p.createElement("div", {
                    className: (0, x.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(f.Z, {
                    onClick: function() {
                        j(null), R({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), A({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), V({
                            x: 0,
                            y: 0
                        }), _(1), K(null != t ? t : 1), te(!1), le({}), oe(0), fe(!1), ye(!1), ke(!1), Ie(!1), qe(!1), Ae(!1), he(!1), Ge((0, S.LC)()), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !De.success && De.complete && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.Z, {
                    color: "danger",
                    className: (0, x.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(Z.$1, {
                    icon: s.eH,
                    size: "2x",
                    className: (0, x.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon failed to upload!", p.createElement("br", null), De.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, x.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !De.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, p.createElement(C.Z, {
                    imageUrl: ie.base64,
                    borderColor: tt,
                    disableManagement: !0
                })), !De.success && p.createElement("div", null, !d && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, p.createElement(w.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        he(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as current icon")), p.createElement(f.Z, {
                    color: "success",
                    onClick: function() {
                        Ge((0, S.mt)({
                            file: ie.file
                        }))
                    }
                }, p.createElement(Z.$1, {
                    icon: r.cf,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(f.Z, {
                    className: (0, x.iv)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        te(!1), le({}), oe(1)
                    }
                }, p.createElement(Z.$1, {
                    icon: l.ac,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), De.pending && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(N.Z, null)), p.createElement("div", {
                    className: (0, x.iv)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "UPLOADING ICON..."))))) : p.createElement("div", null, "no icon permission")
            }
        }
    }
]);
//# sourceMappingURL=3705aff56f4f357d32d1af266b6b5925e9dd29741fa16efd7f51f61a83fd2585.js.map