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
                default: () => L
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
                N = n(90068),
                C = n(12227),
                S = n(23797),
                U = n(5513),
                I = n(22202);
            var z = 2048;
            const L = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    L = (e.isSelector, p.useState(null)),
                    j = (0, i.Z)(L, 2),
                    M = j[0],
                    $ = j[1],
                    R = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    q = (0, i.Z)(R, 2),
                    B = (q[0], q[1]),
                    P = p.useState({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    A = (0, i.Z)(P, 2),
                    D = A[0],
                    O = A[1],
                    W = p.useState({
                        x: 0,
                        y: 0
                    }),
                    V = (0, i.Z)(W, 2),
                    F = V[0],
                    G = V[1],
                    Y = p.useState(1),
                    _ = (0, i.Z)(Y, 2),
                    H = _[0],
                    T = _[1],
                    Q = p.useState(null != t ? t : 1),
                    J = (0, i.Z)(Q, 2),
                    K = J[0],
                    X = J[1],
                    ee = p.useState(!1),
                    te = (0, i.Z)(ee, 2),
                    ne = te[0],
                    ae = te[1],
                    ie = p.useState(!1),
                    re = (0, i.Z)(ie, 2),
                    le = re[0],
                    se = re[1],
                    ce = p.useState(0),
                    oe = (0, i.Z)(ce, 2),
                    me = oe[0],
                    ue = oe[1],
                    de = p.useState(!1),
                    he = (0, i.Z)(de, 2),
                    ge = he[0],
                    pe = he[1],
                    ve = p.useState(!1),
                    fe = (0, i.Z)(ve, 2),
                    Ee = fe[0],
                    we = fe[1],
                    ye = p.useState(!1),
                    xe = (0, i.Z)(ye, 2),
                    be = (xe[0], xe[1]),
                    Ze = p.useState(!1),
                    ke = (0, i.Z)(Ze, 2),
                    Ne = ke[0],
                    Ce = ke[1],
                    Se = p.useState(!1),
                    Ue = (0, i.Z)(Se, 2),
                    Ie = Ue[0],
                    ze = Ue[1],
                    Le = p.useState(null),
                    je = (0, i.Z)(Le, 2),
                    Me = je[0],
                    $e = (je[1], p.useState(!1)),
                    Re = (0, i.Z)($e, 2),
                    qe = Re[0],
                    Be = Re[1],
                    Pe = p.useState(!1),
                    Ae = (0, i.Z)(Pe, 2),
                    De = (Ae[0], Ae[1]),
                    Oe = (0, v.v9)((function(e) {
                        return e.currentUser.iconUploadState
                    })),
                    We = (0, v.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    Ve = ((0, v.v9)((function(e) {
                        return e.currentUser.preloadedGalleryImage
                    })), (0, v.v9)((function(e) {
                        return e.currentUser.isPreloadingImage
                    })), p.useRef(null)),
                    Fe = (0, I.q7)().data,
                    Ge = void 0 === Fe ? [] : Fe,
                    Ye = (0, v.I0)(),
                    _e = (0, N.P2)(),
                    He = (g.Z.location.search.slice(1).split("&").map((function(e) {
                        return e.split("=")
                    })).filter((function(e) {
                        return "preload" === e[0]
                    }))[0], function() {
                        $(null), B({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), O({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), G({
                            x: 0,
                            y: 0
                        }), T(1), X(null != t ? t : 1), ae(!1), se({}), ue(0), we(!1), be(!1), Ce(!1), ze(!1), Be(!1), De(!1), pe(!1), Ye((0, U.LC)())
                    });
                p.useEffect((function() {
                    Ye((0, U.LC)())
                }), []), p.useEffect((function() {
                    Oe.complete && !Oe.success && _e({
                        error: Oe.rawResponse
                    }) && He()
                }), [Oe]);
                var Te, Qe = function(e, t) {
                        B(e), O(t)
                    },
                    Je = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Ke = function(e, t) {
                        return new Promise((function(n) {
                            var a = document.createElement("canvas"),
                                i = a.getContext("2d"),
                                r = new Image;
                            r.crossOrigin = "*", r.addEventListener("load", (function() {
                                a.width = t.width, a.height = t.height, i.drawImage(e, -t.x, -t.y);
                                var r = function(e) {
                                    var t = e.width,
                                        n = e.height;
                                    if (t <= z && n <= z) return e;
                                    var a = Math.min(z / t, z / n),
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
                    Xe = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ke(Je(M), D);
                                    case 2:
                                        t = e.sent, ae(!0), se(t), ue(2);
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
                    et = null !== M,
                    tt = [Ie ? p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Fetching your gallery photo..."), " ", p.createElement("br", null), p.createElement("br", null)) : p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    nt = ge ? "Your current icon has been updated!" : p.createElement("span", null, " "),
                    at = Ge.includes("permission-user-icons"),
                    it = "yellow";
                return Oe.complete && (ge && Oe.success ? (it = "green", function() {
                    Oe.lastUpload.versions[1].file.url;
                    var e = We.id,
                        t = (0, C.qm)({
                            fileId: Oe.lastUpload.id,
                            versionNumber: Oe.lastUpload.versions[1].version
                        });
                    (0, U._W)({
                        userId: e,
                        data: {
                            userIcon: t
                        }
                    })
                }()) : it = Oe.success ? "" : "red"), at ? (Ie && !qe && (Te = Me, De(!0), Be(!0), ue(1), $(window.apiUrl("/api/1/image/".concat(Te, "/1/1600")))), p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Icon")), p.createElement("div", null, tt[me]), p.createElement("div", {
                    hidden: ne
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (Ee || Ne) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(Z.$1, {
                    icon: u.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), Ee && "Image size is larger than 10MBs. ", Ne && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !et && !Ie && p.createElement("div", null, p.createElement("input", {
                    ref: Ve,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        we(!1), be(!1), Ce(!1);
                        var e = Ve.current.files[0];
                        if (e.size > 10485760) we(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) Ce(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        $(n.result), ue(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), et && p.createElement("div", null, p.createElement(x.ZP, {
                    image: M,
                    crop: F,
                    zoom: H,
                    aspect: K,
                    onCropChange: function(e) {
                        G(e)
                    },
                    onCropComplete: Qe,
                    onCropAreaChange: Qe,
                    onZoomChange: function(e) {
                        T(e)
                    },
                    cropShape: "round"
                }))), et && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !Ee && p.createElement(f.Z, {
                    color: "success",
                    onClick: Xe
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
                    hidden: !ne,
                    className: (0, y.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, Oe.success && Oe.complete && p.createElement("div", {
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
                }), p.createElement("p", null, "Your icon has been uploaded successfully!", p.createElement("br", null), nt, p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(f.Z, {
                    onClick: function() {
                        He(), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !Oe.success && Oe.complete && p.createElement("div", {
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
                }), p.createElement("p", null, "Your icon failed to upload!", p.createElement("br", null), Oe.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/user-icons"
                }, p.createElement(f.Z, null, "View Icons"))))), !Oe.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "2v18bt",
                        styles: "div{margin:auto;}"
                    })
                }, p.createElement(S.Z, {
                    imageUrl: le.base64,
                    borderColor: it,
                    disableManagement: !0
                })), !Oe.success && p.createElement("div", null, !d && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, p.createElement(w.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        pe(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as current icon")), p.createElement(f.Z, {
                    color: "success",
                    onClick: function() {
                        Ye((0, U.mt)({
                            file: le.file
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
                        ae(!1), se({}), ue(1)
                    }
                }, p.createElement(Z.$1, {
                    icon: r.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Oe.pending && p.createElement("div", {
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
//# sourceMappingURL=cd7b538e0a42abc6011236c7c5dd1fd15d7cacdc742cfd26de15f5b90df0f2d6.js.map