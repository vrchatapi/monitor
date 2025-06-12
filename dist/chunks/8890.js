"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8890], {
        78890: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => L
            });
            var a = n(15861),
                i = n(54546),
                l = n(55346),
                r = n(2723),
                s = n(76553),
                o = n(68055),
                c = n(59545),
                m = n(95337),
                u = n(44814),
                d = n(64687),
                h = n.n(d),
                p = n(67294),
                g = n(32981),
                v = n(34698),
                f = n(23138),
                E = n(87261),
                x = n(83505),
                y = n(70123),
                b = n(79655),
                w = n(37463),
                N = n(43862),
                Z = (n(12227), n(42619)),
                k = n(28361),
                C = n(25062);
            const S = function(e) {
                var t = e.isAdminView,
                    n = void 0 !== t && t,
                    a = e.imageUrl,
                    l = e.fileId,
                    r = e.versionNumber,
                    s = e.onWear,
                    m = e.onDelete,
                    u = e.borderColor,
                    d = e.showWear,
                    h = (e.didClickConvertToIcon, e.imageWidth),
                    g = e.imageHeight,
                    v = e.onShouldDeleteSelf,
                    f = e.disableManagement,
                    E = e.onSelect,
                    y = e.showSelect,
                    b = p.useState(!0),
                    S = (0, i.Z)(b, 2),
                    U = S[0],
                    z = S[1],
                    L = p.useState(!1),
                    j = (0, i.Z)(L, 2),
                    $ = j[0],
                    M = j[1],
                    I = p.useState(!1),
                    P = (0, i.Z)(I, 2),
                    R = P[0],
                    B = P[1],
                    q = p.useState(!1),
                    O = (0, i.Z)(q, 2),
                    A = O[0],
                    D = (O[1], p.useState(16 / 9)),
                    W = (0, i.Z)(D, 2),
                    V = W[0],
                    Y = (W[1], p.useState(!0)),
                    H = (0, i.Z)(Y, 2),
                    T = H[0],
                    _ = (H[1], p.useState(!1)),
                    F = (0, i.Z)(_, 2),
                    G = F[0],
                    J = F[1],
                    K = function() {
                        !f && T && (A || M(!0))
                    },
                    Q = function() {
                        M(!1), B(!1)
                    },
                    X = function() {
                        B(!0)
                    },
                    ee = function() {
                        B(!1)
                    },
                    te = A ? "spin-and-shrink " : "",
                    ne = G ? "jitter-but-you-drank-decaf " : "",
                    ae = u,
                    ie = null != h ? h : "auto",
                    le = g || 135,
                    re = null != V ? V : 16 / 9;
                return p.createElement("div", {
                    className: te + ne + (0, x.iv)("width:", ie, "px;height:", le, "px;aspect-ratio:", re, ";display:flex;z-index:1;align-items:center;justify-content:center;"),
                    onMouseLeave: Q
                }, p.createElement("div", {
                    className: "image-preview ".concat((0, x.iv)("background-color:transparent;border:2px solid ", ae || "var(--bs-gray-dark)", ";width:", ie, "px!important;height:", le, "px;padding:5px;border-radius:7px;z-index:3!important;")),
                    onMouseEnter: K
                }, p.createElement("img", {
                    src: a,
                    alt: "user",
                    className: (0, x.iv)("height:", le - 10, "px;aspect-ratio:", re, ";border-radius:7px;"),
                    hidden: U,
                    onLoad: function(e) {
                        var t = e.target;
                        t.width, t.height;
                        z(!1)
                    }
                }), p.createElement("div", {
                    className: (0, x.iv)("height:", le - 10, "px;max-height:", le - 10, "px;aspect-ratio:", re, ";border-radius:100%;display:flex;align-items:center;justify-content:center;"),
                    hidden: !U
                }, p.createElement(N.Z, null))), p.createElement("div", {
                    className: "management-box ".concat("quick-visible margin-slide-out ", " ").concat((0, x.iv)("width:30px;height:", le - 10, "px;background-color:var(--bs-gray-dark);border-radius:0 10px 10px 0;z-index:2!important;")),
                    hidden: !$,
                    onMouseEnter: K,
                    onMouseLeave: Q
                }, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "h7cwxi",
                        styles: "display:flex;justify-content:center;align-content:center;flex-flow:column;padding-left:80%;height:100%;.badge{margin:0.2em 0 0.5em -1.3em;border-top-right-radius:0;border-bottom-right-radius:0;z-index:10;}"
                    })
                }, !n && d && p.createElement(C.Z, {
                    color: "success",
                    onClick: function() {
                        M(!1), s(l, r)
                    }
                }, p.createElement(w.$1, {
                    icon: k.vT,
                    color: "hsl(0, 0%, 7%)"
                })), y && p.createElement(C.Z, {
                    color: "success",
                    onClick: function() {
                        M(!1), E(l, a)
                    }
                }, p.createElement(w.$1, {
                    icon: o.LE
                })), !1, p.createElement(C.Z, {
                    color: "danger",
                    onClick: R ? null : X,
                    onMouseLeave: ee,
                    className: (0, x.iv)({
                        name: "7yp9nl",
                        styles: "display:flex;flex-direction:column;.fa:last-child{margin-top:0.4em;}"
                    })
                }, p.createElement(w.$1, {
                    icon: R ? c.NB : Z.$,
                    onClick: R ? ee : X
                }), p.createElement(w.$1, {
                    icon: Z.$,
                    hidden: !R,
                    onClick: function() {
                        M(!1), m(l), v && v(l)
                    },
                    onMouseEnter: function() {
                        J(!0)
                    },
                    onMouseLeave: function() {
                        J(!1)
                    }
                })))))
            };
            var U = n(5513),
                z = n(22202);
            const L = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    Z = e.isSelector,
                    k = void 0 !== Z && Z,
                    C = (0, p.useState)(null),
                    L = (0, i.Z)(C, 2),
                    j = L[0],
                    $ = L[1],
                    M = (0, p.useState)({
                        x: 0,
                        y: 0
                    }),
                    I = (0, i.Z)(M, 2),
                    P = I[0],
                    R = I[1],
                    B = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    q = (0, i.Z)(B, 2),
                    O = (q[0], q[1]),
                    A = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    D = (0, i.Z)(A, 2),
                    W = D[0],
                    V = D[1],
                    Y = (0, p.useState)(1),
                    H = (0, i.Z)(Y, 2),
                    T = H[0],
                    _ = H[1],
                    F = (0, p.useState)(null != t ? t : 16 / 9),
                    G = (0, i.Z)(F, 2),
                    J = G[0],
                    K = G[1],
                    Q = (0, p.useState)(!1),
                    X = (0, i.Z)(Q, 2),
                    ee = X[0],
                    te = X[1],
                    ne = (0, p.useState)({}),
                    ae = (0, i.Z)(ne, 2),
                    ie = ae[0],
                    le = ae[1],
                    re = (0, p.useState)(0),
                    se = (0, i.Z)(re, 2),
                    oe = se[0],
                    ce = se[1],
                    me = (0, p.useState)(!1),
                    ue = (0, i.Z)(me, 2),
                    de = ue[0],
                    he = ue[1],
                    pe = (0, p.useState)(!1),
                    ge = (0, i.Z)(pe, 2),
                    ve = ge[0],
                    fe = ge[1],
                    Ee = p.useState(!1),
                    xe = (0, i.Z)(Ee, 2),
                    ye = xe[0],
                    be = xe[1],
                    we = p.useState(!1),
                    Ne = (0, i.Z)(we, 2),
                    Ze = Ne[0],
                    ke = Ne[1],
                    Ce = (0, g.v9)((function(e) {
                        return e.currentUser.photoUploadState
                    })),
                    Se = (0, g.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    Ue = p.useRef(null),
                    ze = (0, z.q7)().data,
                    Le = void 0 === ze ? [] : ze,
                    je = (0, g.I0)(),
                    $e = function() {
                        $(null), R({
                            x: 0,
                            y: 0
                        }), O({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), V({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), _(1), K(null != t ? t : 16 / 9), te(!1), le({}), ce(0), fe(!1), be(!1), ke(!1), he(!1), je((0, U.b9)())
                    },
                    Me = function(e, t) {
                        O(e), V(t)
                    };
                p.useEffect((function() {
                    je((0, U.b9)())
                }), []);
                var Ie, Pe, Re, Be, qe, Oe = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Ae = function(e, t) {
                        var n = document.createElement("canvas"),
                            a = n.getContext("2d");
                        return n.width = t.width, n.height = t.height, a.drawImage(e, -t.x, -t.y), new Promise((function(e) {
                            n.toBlob((function(t) {
                                var n = new FileReader;
                                n.addEventListener("load", (function() {
                                    e({
                                        file: t,
                                        base64: n.result
                                    })
                                })), n.readAsDataURL(t)
                            }), "image/png")
                        }))
                    },
                    De = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ae(Oe(j), W);
                                    case 2:
                                        t = e.sent, te(!0), le(t), ce(2);
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
                    We = null !== j,
                    Ve = [p.createElement("span", null, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", null, "(2/3) Crop your picture as desired"), p.createElement("h3", null, "(3/3) Preview before upload")],
                    Ye = de ? "Your profile picture has been updated!" : p.createElement("span", null, " "),
                    He = Le.includes("permission-user-gallery"),
                    Te = Le.includes("permission-profile-pic-override"),
                    _e = "yellow";
                return Ce.complete && (de && Ce.success ? (_e = "green", Ie = Se.id, Pe = Ce.lastUpload, Re = Pe.id, Be = Pe.versions, qe = "https://api.vrchat.cloud/api/1/file/".concat(Re, "/").concat(Be.at(-1).version), je((0, U._W)({
                    userId: Ie,
                    data: {
                        profilePicOverride: qe
                    }
                })), he(!1)) : _e = Ce.success ? "" : "red"), He ? p.createElement("div", null, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Photo")), p.createElement("div", null, Ve[oe]), p.createElement("div", {
                    hidden: ee
                }, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ve || Ze || ye) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(w.$1, {
                    icon: u.WV,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ve && "Image size is larger than 10MBs. ", Ze && "Image dimensions are smaller than 64 pixels. ", ye && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !We && p.createElement("div", null, p.createElement("input", {
                    ref: Ue,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        fe(!1), be(!1), ke(!1);
                        var e = Ue.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) fe(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) ke(!0);
                                else if (t.width > 2048 || t.height > 2048) be(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        $(n.result), ce(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), We && p.createElement("div", null, p.createElement(y.ZP, {
                    image: j,
                    crop: P,
                    zoom: T,
                    aspect: J,
                    onCropChange: function(e) {
                        R(e)
                    },
                    onCropComplete: Me,
                    onCropAreaChange: Me,
                    onZoomChange: function(e) {
                        _(e)
                    },
                    cropShape: "rect"
                }))), We && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ve && p.createElement(v.Z, {
                    color: "success",
                    onClick: De
                }, p.createElement(w.$1, {
                    icon: m.wn,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), k ? p.createElement(v.Z, {
                    color: "danger",
                    onClick: function() {
                        $e()
                    }
                }, p.createElement(w.$1, {
                    icon: c.NB,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel") : p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, {
                    color: "danger"
                }, p.createElement(w.$1, {
                    icon: c.NB,
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
                }, Ce.success && Ce.complete && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(f.Z, {
                    color: "success",
                    className: (0, x.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(w.$1, {
                    icon: o.LE,
                    size: "2x",
                    className: (0, x.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo has been uploaded successfully!", p.createElement("br", null), Ye, p.createElement("br", null)), p.createElement("div", {
                    className: (0, x.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(v.Z, {
                    onClick: function() {
                        $e(), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !Ce.success && Ce.complete && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(f.Z, {
                    color: "danger",
                    className: (0, x.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(w.$1, {
                    icon: s.eH,
                    size: "2x",
                    className: (0, x.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo failed to upload!", p.createElement("br", null), Ce.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, x.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !Ce.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, x.iv)({
                        name: "1ue3j6i",
                        styles: "div{margin:auto;margin-top:0.5em;}"
                    })
                }, p.createElement(S, {
                    imageUrl: ie.base64,
                    borderColor: _e,
                    disableManagement: !0
                })), !Ce.success && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "19i7pz4",
                        styles: "margin-top:0.8em"
                    })
                }, !d && p.createElement("div", {
                    className: (0, x.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, Te && !k && p.createElement("div", null, p.createElement(E.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        he(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as profile picture"))), p.createElement(v.Z, {
                    color: "success",
                    onClick: function() {
                        je((0, U.nn)({
                            file: ie.file
                        }))
                    }
                }, p.createElement(w.$1, {
                    icon: r.cf,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(v.Z, {
                    className: (0, x.iv)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        te(!1), le({}), ce(1)
                    }
                }, p.createElement(w.$1, {
                    icon: l.ac,
                    className: (0, x.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Ce.pending && p.createElement("div", {
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
                }, "UPLOADING PHOTO...")))) : p.createElement("div", null, "You do not have permission to upload photos.")
            }
        }
    }
]);
//# sourceMappingURL=554e86d692891adefabf7e6a18d23939a2458e7b100642e40713900e35d0b802.js.map