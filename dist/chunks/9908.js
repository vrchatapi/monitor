"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9908], {
        23797: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var a = n(54546),
                i = n(42619),
                r = n(59545),
                l = n(68055),
                s = n(28361),
                c = n(67294),
                o = n(25062),
                m = n(83505),
                u = n(80988),
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
                    y = (e.didClickConvertToIcon, e.imageWidth, e.imageHeight, e.onShouldDeleteSelf),
                    x = e.disableManagement,
                    b = e.onSelect,
                    Z = e.showSelect,
                    k = c.useState(!0),
                    N = (0, a.Z)(k, 2),
                    C = N[0],
                    S = N[1],
                    U = c.useState(!1),
                    I = (0, a.Z)(U, 2),
                    z = I[0],
                    L = I[1],
                    j = c.useState(!1),
                    M = (0, a.Z)(j, 2),
                    $ = M[0],
                    R = M[1],
                    q = c.useState(!1),
                    B = (0, a.Z)(q, 2),
                    P = B[0],
                    A = (B[1], c.useState(!1)),
                    D = (0, a.Z)(A, 2),
                    O = D[0],
                    W = D[1],
                    V = function() {
                        x || P || L(!0)
                    },
                    F = function() {
                        L(!1), R(!1)
                    },
                    G = function() {
                        R(!1)
                    },
                    Y = P ? "spin-and-shrink " : "",
                    _ = z ? "quick-visible margin-slide-out " : "",
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
                    hidden: !z,
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
                        L(!1), v(g, p), y && y(g)
                    }
                }, c.createElement(u.$1, {
                    icon: s.vT,
                    color: "hsl(0, 0%, 7%)"
                })), Z && c.createElement(o.Z, {
                    color: "success",
                    onClick: function() {
                        L(!1), b(g, h)
                    }
                }, c.createElement(u.$1, {
                    icon: l.LE
                })), c.createElement(o.Z, {
                    color: "danger",
                    onClick: $ ? null : R,
                    onMouseLeave: G,
                    className: (0, m.iv)({
                        name: "7yp9nl",
                        styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                    })
                }, c.createElement(u.$1, {
                    icon: $ ? r.NB : i.$,
                    onClick: $ ? G : function() {
                        R(!0)
                    }
                }), c.createElement(u.$1, {
                    icon: i.$,
                    hidden: !$,
                    onClick: function() {
                        L(!1), f(g), y && y(g)
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
                default: () => z
            });
            var a = n(15861),
                i = n(54546),
                r = n(55346),
                l = n(2723),
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
                y = n(83505),
                x = n(70123),
                b = n(79655),
                Z = n(80988),
                k = n(43862),
                N = n(12227),
                C = n(23797),
                S = n(5513),
                U = n(22202);
            var I = 2048;
            const z = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    z = (e.isSelector, p.useState(null)),
                    L = (0, i.Z)(z, 2),
                    j = L[0],
                    M = L[1],
                    $ = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    R = (0, i.Z)($, 2),
                    q = (R[0], R[1]),
                    B = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    P = (0, i.Z)(B, 2),
                    A = P[0],
                    D = P[1],
                    O = p.useState({
                        x: 0,
                        y: 0
                    }),
                    W = (0, i.Z)(O, 2),
                    V = W[0],
                    F = W[1],
                    G = p.useState(1),
                    Y = (0, i.Z)(G, 2),
                    _ = Y[0],
                    H = Y[1],
                    T = p.useState(null != t ? t : 1),
                    Q = (0, i.Z)(T, 2),
                    J = Q[0],
                    K = Q[1],
                    X = p.useState(!1),
                    ee = (0, i.Z)(X, 2),
                    te = ee[0],
                    ne = ee[1],
                    ae = p.useState(!1),
                    ie = (0, i.Z)(ae, 2),
                    re = ie[0],
                    le = ie[1],
                    se = p.useState(0),
                    ce = (0, i.Z)(se, 2),
                    oe = ce[0],
                    me = ce[1],
                    ue = p.useState(!1),
                    de = (0, i.Z)(ue, 2),
                    he = de[0],
                    ge = de[1],
                    pe = p.useState(!1),
                    ve = (0, i.Z)(pe, 2),
                    fe = ve[0],
                    Ee = ve[1],
                    we = p.useState(!1),
                    ye = (0, i.Z)(we, 2),
                    xe = (ye[0], ye[1]),
                    be = p.useState(!1),
                    Ze = (0, i.Z)(be, 2),
                    ke = Ze[0],
                    Ne = Ze[1],
                    Ce = p.useState(!1),
                    Se = (0, i.Z)(Ce, 2),
                    Ue = Se[0],
                    Ie = Se[1],
                    ze = p.useState(null),
                    Le = (0, i.Z)(ze, 2),
                    je = Le[0],
                    Me = (Le[1], p.useState(!1)),
                    $e = (0, i.Z)(Me, 2),
                    Re = $e[0],
                    qe = $e[1],
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
                        q(e), D(t)
                    },
                    He = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Te = function(e, t) {
                        return new Promise((function(n) {
                            var a = document.createElement("canvas"),
                                i = a.getContext("2d"),
                                r = new Image;
                            r.crossOrigin = "*", r.addEventListener("load", (function() {
                                a.width = t.width, a.height = t.height, i.drawImage(e, -t.x, -t.y);
                                var r = function(e) {
                                    var t = e.width,
                                        n = e.height;
                                    if (t <= I && n <= I) return e;
                                    var a = Math.min(I / t, I / n),
                                        i = document.createElement("canvas");
                                    i.width = Math.round(t * a), i.height = Math.round(n * a);
                                    var r = i.getContext("2d");
                                    return r.imageSmoothingQuality = "high", r.drawImage(e, 0, 0, i.width, i.height), i
                                }(a);
                                r.toBlob((function(e) {
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
                    Qe = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Te(He(j), A);
                                    case 2:
                                        t = e.sent, ne(!0), le(t), me(2);
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
                    Je = null !== j,
                    Ke = [Ue ? p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Fetching your gallery photo..."), " ", p.createElement("br", null), p.createElement("br", null)) : p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    Xe = he ? "Your current icon has been updated!" : p.createElement("span", null, " "),
                    et = Fe.includes("permission-user-icons"),
                    tt = "yellow";
                return De.complete && (he && De.success ? (tt = "green", function() {
                    De.lastUpload.versions[1].file.url;
                    var e = Oe.id,
                        t = (0, N.qm)({
                            fileId: De.lastUpload.id,
                            versionNumber: De.lastUpload.versions[1].version
                        });
                    (0, S._W)({
                        userId: e,
                        data: {
                            userIcon: t
                        }
                    })
                }()) : tt = De.success ? "" : "red"), et ? (Ue && !Re && (Ye = je, Ae(!0), qe(!0), me(1), M(window.apiUrl("/api/1/image/".concat(Ye, "/1/1600")))), p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Icon")), p.createElement("div", null, Ke[oe]), p.createElement("div", {
                    hidden: te
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (fe || ke) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(Z.$1, {
                    icon: u.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), fe && "Image size is larger than 10MBs. ", ke && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !Je && !Ue && p.createElement("div", null, p.createElement("input", {
                    ref: We,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        Ee(!1), xe(!1), Ne(!1);
                        var e = We.current.files[0];
                        if (e.size > 10485760) Ee(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) Ne(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        M(n.result), me(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Je && p.createElement("div", null, p.createElement(x.ZP, {
                    image: j,
                    crop: V,
                    zoom: _,
                    aspect: J,
                    onCropChange: function(e) {
                        F(e)
                    },
                    onCropComplete: _e,
                    onCropAreaChange: _e,
                    onZoomChange: function(e) {
                        H(e)
                    },
                    cropShape: "round"
                }))), Je && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !fe && p.createElement(f.Z, {
                    color: "success",
                    onClick: Qe
                }, p.createElement(Z.$1, {
                    icon: m.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, {
                    color: "danger"
                }, p.createElement(Z.$1, {
                    icon: o.NB,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !te,
                    className: (0, y.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, De.success && De.complete && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.Z, {
                    color: "success",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(Z.$1, {
                    icon: c.LE,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon has been uploaded successfully!", p.createElement("br", null), Xe, p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(f.Z, {
                    onClick: function() {
                        M(null), q({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), D({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), F({
                            x: 0,
                            y: 0
                        }), H(1), K(null != t ? t : 1), ne(!1), le({}), me(0), Ee(!1), xe(!1), Ne(!1), Ie(!1), qe(!1), Ae(!1), ge(!1), Ge((0, S.LC)()), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !De.success && De.complete && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(E.Z, {
                    color: "danger",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(Z.$1, {
                    icon: s.eH,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your icon failed to upload!", p.createElement("br", null), De.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !De.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, p.createElement(C.Z, {
                    imageUrl: re.base64,
                    borderColor: tt,
                    disableManagement: !0
                })), !De.success && p.createElement("div", null, !d && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, p.createElement(w.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        ge(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as current icon")), p.createElement(f.Z, {
                    color: "success",
                    onClick: function() {
                        Ge((0, S.mt)({
                            file: re.file
                        }))
                    }
                }, p.createElement(Z.$1, {
                    icon: l.cf,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(f.Z, {
                    className: (0, y.iv)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        ne(!1), le({}), me(1)
                    }
                }, p.createElement(Z.$1, {
                    icon: r.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), De.pending && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(k.Z, null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "UPLOADING ICON..."))))) : p.createElement("div", null, "no icon permission")
            }
        }
    }
]);
//# sourceMappingURL=9031ff9d7600da3d85d266f221e0ce22e1c5626e8729da2fc88c9512de190032.js.map