"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [229], {
        60229: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => z
            });
            var n = a(15861),
                l = a(54546),
                r = a(55346),
                i = a(2723),
                s = a(76553),
                c = a(68055),
                o = a(59545),
                m = a(95337),
                u = a(44814),
                d = a(64687),
                h = a.n(d),
                p = a(67294),
                g = a(32981),
                v = a(34698),
                f = a(23138),
                E = a(87261),
                y = a(83505),
                w = a(70123),
                b = a(79655),
                x = a(80988),
                N = a(43862),
                Z = a(90068),
                k = a(46681),
                C = a(5513),
                S = a(22202);
            var U = 2048;
            const z = function(e) {
                var t = e.aspectRatio,
                    a = e.successCallback,
                    d = void 0 === a ? null : a,
                    z = e.isSelector,
                    j = void 0 !== z && z,
                    L = (0, p.useState)(null),
                    P = (0, l.Z)(L, 2),
                    R = P[0],
                    I = P[1],
                    $ = (0, p.useState)({
                        x: 0,
                        y: 0
                    }),
                    B = (0, l.Z)($, 2),
                    M = B[0],
                    q = B[1],
                    O = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    A = (0, l.Z)(O, 2),
                    Y = (A[0], A[1]),
                    D = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    V = (0, l.Z)(D, 2),
                    _ = V[0],
                    F = V[1],
                    G = (0, p.useState)(1),
                    H = (0, l.Z)(G, 2),
                    W = H[0],
                    Q = H[1],
                    T = (0, p.useState)(null != t ? t : 16 / 9),
                    J = (0, l.Z)(T, 2),
                    K = J[0],
                    X = J[1],
                    ee = (0, p.useState)(!1),
                    te = (0, l.Z)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    le = (0, p.useState)({}),
                    re = (0, l.Z)(le, 2),
                    ie = re[0],
                    se = re[1],
                    ce = (0, p.useState)(0),
                    oe = (0, l.Z)(ce, 2),
                    me = oe[0],
                    ue = oe[1],
                    de = (0, p.useState)(!1),
                    he = (0, l.Z)(de, 2),
                    pe = he[0],
                    ge = he[1],
                    ve = (0, p.useState)(!1),
                    fe = (0, l.Z)(ve, 2),
                    Ee = fe[0],
                    ye = fe[1],
                    we = p.useState(!1),
                    be = (0, l.Z)(we, 2),
                    xe = (be[0], be[1]),
                    Ne = p.useState(!1),
                    Ze = (0, l.Z)(Ne, 2),
                    ke = Ze[0],
                    Ce = Ze[1],
                    Se = (0, g.v9)((function(e) {
                        return e.currentUser.photoUploadState
                    })),
                    Ue = (0, g.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    ze = p.useRef(null),
                    je = (0, S.q7)().data,
                    Le = void 0 === je ? [] : je,
                    Pe = (0, g.I0)(),
                    Re = (0, Z.P2)(),
                    Ie = function() {
                        I(null), q({
                            x: 0,
                            y: 0
                        }), Y({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), F({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), Q(1), X(null != t ? t : 16 / 9), ne(!1), se({}), ue(0), ye(!1), xe(!1), Ce(!1), ge(!1), Pe((0, C.b9)())
                    },
                    $e = function(e, t) {
                        Y(e), F(t)
                    };
                p.useEffect((function() {
                    Pe((0, C.b9)())
                }), []), p.useEffect((function() {
                    Se.complete && !Se.success && Re({
                        error: Se.rawResponse
                    }) && Ie()
                }), [Se]);
                var Be, Me, qe, Oe, Ae, Ye = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    De = function(e, t) {
                        var a = document.createElement("canvas"),
                            n = a.getContext("2d");
                        a.width = t.width, a.height = t.height, n.drawImage(e, -t.x, -t.y);
                        var l = function(e) {
                            var t = e.width,
                                a = e.height;
                            if (t <= U && a <= U) return e;
                            var n = Math.min(U / t, U / a),
                                l = document.createElement("canvas");
                            l.width = Math.round(t * n), l.height = Math.round(a * n);
                            var r = l.getContext("2d");
                            return r.imageSmoothingQuality = "high", r.drawImage(e, 0, 0, l.width, l.height), l
                        }(a);
                        return new Promise((function(e) {
                            l.toBlob((function(t) {
                                var a = new FileReader;
                                a.addEventListener("load", (function() {
                                    e({
                                        file: t,
                                        base64: a.result
                                    })
                                })), a.readAsDataURL(t)
                            }), "image/png")
                        }))
                    },
                    Ve = function() {
                        var e = (0, n.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, De(Ye(R), _);
                                    case 2:
                                        t = e.sent, ne(!0), se(t), ue(2);
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
                    _e = null !== R,
                    Fe = [p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    Ge = pe ? "Your profile picture has been updated!" : p.createElement("span", null, " "),
                    He = Le.includes("permission-user-gallery"),
                    We = Le.includes("permission-profile-pic-override"),
                    Qe = "yellow";
                return Se.complete && (pe && Se.success ? (Qe = "green", Be = Ue.id, Me = Se.lastUpload, qe = Me.id, Oe = Me.versions, Ae = "https://api.vrchat.cloud/api/1/file/".concat(qe, "/").concat(Oe.at(-1).version), Pe((0, C._W)({
                    userId: Be,
                    data: {
                        profilePicOverride: Ae
                    }
                })), ge(!1)) : Qe = Se.success ? "" : "red"), He ? p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Photo")), p.createElement("div", null, Fe[me]), p.createElement("div", {
                    hidden: ae
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (Ee || ke) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(x.$1, {
                    icon: u.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), Ee && "Image size is larger than 10MBs. ", ke && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !_e && p.createElement("div", null, p.createElement("input", {
                    ref: ze,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        ye(!1), xe(!1), Ce(!1);
                        var e = ze.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) ye(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) Ce(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var a = new FileReader;
                                    a.addEventListener("load", (function() {
                                        I(a.result), ue(1)
                                    })), e && a.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), _e && p.createElement("div", null, p.createElement(w.ZP, {
                    image: R,
                    crop: M,
                    zoom: W,
                    aspect: K,
                    onCropChange: function(e) {
                        q(e)
                    },
                    onCropComplete: $e,
                    onCropAreaChange: $e,
                    onZoomChange: function(e) {
                        Q(e)
                    },
                    cropShape: "rect"
                }))), _e && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !Ee && p.createElement(v.Z, {
                    color: "success",
                    onClick: Ve
                }, p.createElement(x.$1, {
                    icon: m.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), j ? p.createElement(v.Z, {
                    color: "danger",
                    onClick: function() {
                        Ie()
                    }
                }, p.createElement(x.$1, {
                    icon: o.NB,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel") : p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, {
                    color: "danger"
                }, p.createElement(x.$1, {
                    icon: o.NB,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !ae,
                    className: (0, y.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, Se.success && Se.complete && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(f.Z, {
                    color: "success",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(x.$1, {
                    icon: c.LE,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo has been uploaded successfully!", p.createElement("br", null), Ge, p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(v.Z, {
                    onClick: function() {
                        Ie(), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !Se.success && Se.complete && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(f.Z, {
                    color: "danger",
                    className: (0, y.iv)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(x.$1, {
                    icon: s.eH,
                    size: "2x",
                    className: (0, y.iv)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo failed to upload!", p.createElement("br", null), Se.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !Se.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1ue3j6i",
                        styles: "div{margin:auto;margin-top:0.5em;}"
                    })
                }, p.createElement(k.Z, {
                    imageUrl: ie.base64,
                    borderColor: Qe,
                    disableManagement: !0
                })), !Se.success && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "19i7pz4",
                        styles: "margin-top:0.8em"
                    })
                }, !d && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, We && !j && p.createElement("div", null, p.createElement(E.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        ge(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as profile picture"))), p.createElement(v.Z, {
                    color: "success",
                    onClick: function() {
                        Pe((0, C.nn)({
                            file: ie.file
                        }))
                    }
                }, p.createElement(x.$1, {
                    icon: i.cf,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(v.Z, {
                    className: (0, y.iv)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        ne(!1), se({}), ue(1)
                    }
                }, p.createElement(x.$1, {
                    icon: r.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Se.pending && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(N.Z, null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "UPLOADING PHOTO...")))) : p.createElement("div", null, "You do not have permission to upload photos.")
            }
        }
    }
]);
//# sourceMappingURL=6bf783be45e74f3b5182cd0e0d12f360d2dff11c8c2b97897c5e6487c3bdd216.js.map