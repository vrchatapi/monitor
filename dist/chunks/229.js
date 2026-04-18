"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [229], {
        60229: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => U
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
                Z = a(46681),
                k = a(5513),
                C = a(22202);
            var S = 2048;
            const U = function(e) {
                var t = e.aspectRatio,
                    a = e.successCallback,
                    d = void 0 === a ? null : a,
                    U = e.isSelector,
                    z = void 0 !== U && U,
                    j = (0, p.useState)(null),
                    L = (0, l.Z)(j, 2),
                    I = L[0],
                    P = L[1],
                    R = (0, p.useState)({
                        x: 0,
                        y: 0
                    }),
                    $ = (0, l.Z)(R, 2),
                    B = $[0],
                    M = $[1],
                    q = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    O = (0, l.Z)(q, 2),
                    A = (O[0], O[1]),
                    Y = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    D = (0, l.Z)(Y, 2),
                    V = D[0],
                    _ = D[1],
                    F = (0, p.useState)(1),
                    G = (0, l.Z)(F, 2),
                    H = G[0],
                    W = G[1],
                    Q = (0, p.useState)(null != t ? t : 16 / 9),
                    T = (0, l.Z)(Q, 2),
                    J = T[0],
                    K = T[1],
                    X = (0, p.useState)(!1),
                    ee = (0, l.Z)(X, 2),
                    te = ee[0],
                    ae = ee[1],
                    ne = (0, p.useState)({}),
                    le = (0, l.Z)(ne, 2),
                    re = le[0],
                    ie = le[1],
                    se = (0, p.useState)(0),
                    ce = (0, l.Z)(se, 2),
                    oe = ce[0],
                    me = ce[1],
                    ue = (0, p.useState)(!1),
                    de = (0, l.Z)(ue, 2),
                    he = de[0],
                    pe = de[1],
                    ge = (0, p.useState)(!1),
                    ve = (0, l.Z)(ge, 2),
                    fe = ve[0],
                    Ee = ve[1],
                    ye = p.useState(!1),
                    we = (0, l.Z)(ye, 2),
                    be = (we[0], we[1]),
                    xe = p.useState(!1),
                    Ne = (0, l.Z)(xe, 2),
                    Ze = Ne[0],
                    ke = Ne[1],
                    Ce = (0, g.v9)((function(e) {
                        return e.currentUser.photoUploadState
                    })),
                    Se = (0, g.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    Ue = p.useRef(null),
                    ze = (0, C.q7)().data,
                    je = void 0 === ze ? [] : ze,
                    Le = (0, g.I0)(),
                    Ie = function() {
                        P(null), M({
                            x: 0,
                            y: 0
                        }), A({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), _({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), W(1), K(null != t ? t : 16 / 9), ae(!1), ie({}), me(0), Ee(!1), be(!1), ke(!1), pe(!1), Le((0, k.b9)())
                    },
                    Pe = function(e, t) {
                        A(e), _(t)
                    };
                p.useEffect((function() {
                    Le((0, k.b9)())
                }), []);
                var Re, $e, Be, Me, qe, Oe = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Ae = function(e, t) {
                        var a = document.createElement("canvas"),
                            n = a.getContext("2d");
                        a.width = t.width, a.height = t.height, n.drawImage(e, -t.x, -t.y);
                        var l = function(e) {
                            var t = e.width,
                                a = e.height;
                            if (t <= S && a <= S) return e;
                            var n = Math.min(S / t, S / a),
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
                    Ye = function() {
                        var e = (0, n.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ae(Oe(I), V);
                                    case 2:
                                        t = e.sent, ae(!0), ie(t), me(2);
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
                    De = null !== I,
                    Ve = [p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    _e = he ? "Your profile picture has been updated!" : p.createElement("span", null, " "),
                    Fe = je.includes("permission-user-gallery"),
                    Ge = je.includes("permission-profile-pic-override"),
                    He = "yellow";
                return Ce.complete && (he && Ce.success ? (He = "green", Re = Se.id, $e = Ce.lastUpload, Be = $e.id, Me = $e.versions, qe = "https://api.vrchat.cloud/api/1/file/".concat(Be, "/").concat(Me.at(-1).version), Le((0, k._W)({
                    userId: Re,
                    data: {
                        profilePicOverride: qe
                    }
                })), pe(!1)) : He = Ce.success ? "" : "red"), Fe ? p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Photo")), p.createElement("div", null, Ve[oe]), p.createElement("div", {
                    hidden: te
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (fe || Ze) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(x.$1, {
                    icon: u.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), fe && "Image size is larger than 10MBs. ", Ze && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !De && p.createElement("div", null, p.createElement("input", {
                    ref: Ue,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        Ee(!1), be(!1), ke(!1);
                        var e = Ue.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) Ee(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) ke(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var a = new FileReader;
                                    a.addEventListener("load", (function() {
                                        P(a.result), me(1)
                                    })), e && a.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), De && p.createElement("div", null, p.createElement(w.ZP, {
                    image: I,
                    crop: B,
                    zoom: H,
                    aspect: J,
                    onCropChange: function(e) {
                        M(e)
                    },
                    onCropComplete: Pe,
                    onCropAreaChange: Pe,
                    onZoomChange: function(e) {
                        W(e)
                    },
                    cropShape: "rect"
                }))), De && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !fe && p.createElement(v.Z, {
                    color: "success",
                    onClick: Ye
                }, p.createElement(x.$1, {
                    icon: m.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), z ? p.createElement(v.Z, {
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
                    hidden: !te,
                    className: (0, y.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, Ce.success && Ce.complete && p.createElement("div", {
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
                }), p.createElement("p", null, "Your photo has been uploaded successfully!", p.createElement("br", null), _e, p.createElement("br", null)), p.createElement("div", {
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
                }, p.createElement(v.Z, null, "View Photos"))))), !Ce.success && Ce.complete && p.createElement("div", {
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
                }), p.createElement("p", null, "Your photo failed to upload!", p.createElement("br", null), Ce.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !Ce.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1ue3j6i",
                        styles: "div{margin:auto;margin-top:0.5em;}"
                    })
                }, p.createElement(Z.Z, {
                    imageUrl: re.base64,
                    borderColor: He,
                    disableManagement: !0
                })), !Ce.success && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "19i7pz4",
                        styles: "margin-top:0.8em"
                    })
                }, !d && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, Ge && !z && p.createElement("div", null, p.createElement(E.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        pe(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as profile picture"))), p.createElement(v.Z, {
                    color: "success",
                    onClick: function() {
                        Le((0, k.nn)({
                            file: re.file
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
                        ae(!1), ie({}), me(1)
                    }
                }, p.createElement(x.$1, {
                    icon: r.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), Ce.pending && p.createElement("div", {
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
//# sourceMappingURL=3ac346a6d20155064f2929fac7833d3482438de9bd7040288c2b17ac4251092d.js.map