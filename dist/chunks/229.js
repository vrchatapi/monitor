"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [229], {
        60229: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => S
            });
            var a = n(15861),
                l = n(54546),
                r = n(55346),
                i = n(2723),
                s = n(76553),
                c = n(68055),
                o = n(59545),
                m = n(95337),
                u = n(44814),
                d = n(64687),
                h = n.n(d),
                p = n(67294),
                g = n(32981),
                v = n(34698),
                f = n(23138),
                E = n(87261),
                y = n(83505),
                w = n(70123),
                b = n(79655),
                x = n(96985),
                N = n(43862),
                Z = (n(12227), n(46681)),
                C = n(5513),
                k = n(22202);
            const S = function(e) {
                var t = e.aspectRatio,
                    n = e.successCallback,
                    d = void 0 === n ? null : n,
                    S = e.isSelector,
                    U = void 0 !== S && S,
                    z = (0, p.useState)(null),
                    j = (0, l.Z)(z, 2),
                    L = j[0],
                    P = j[1],
                    R = (0, p.useState)({
                        x: 0,
                        y: 0
                    }),
                    I = (0, l.Z)(R, 2),
                    $ = I[0],
                    B = I[1],
                    q = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    O = (0, l.Z)(q, 2),
                    A = (O[0], O[1]),
                    M = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    Y = (0, l.Z)(M, 2),
                    D = Y[0],
                    V = Y[1],
                    _ = (0, p.useState)(1),
                    F = (0, l.Z)(_, 2),
                    G = F[0],
                    H = F[1],
                    W = (0, p.useState)(null != t ? t : 16 / 9),
                    T = (0, l.Z)(W, 2),
                    J = T[0],
                    K = T[1],
                    Q = (0, p.useState)(!1),
                    X = (0, l.Z)(Q, 2),
                    ee = X[0],
                    te = X[1],
                    ne = (0, p.useState)({}),
                    ae = (0, l.Z)(ne, 2),
                    le = ae[0],
                    re = ae[1],
                    ie = (0, p.useState)(0),
                    se = (0, l.Z)(ie, 2),
                    ce = se[0],
                    oe = se[1],
                    me = (0, p.useState)(!1),
                    ue = (0, l.Z)(me, 2),
                    de = ue[0],
                    he = ue[1],
                    pe = (0, p.useState)(!1),
                    ge = (0, l.Z)(pe, 2),
                    ve = ge[0],
                    fe = ge[1],
                    Ee = p.useState(!1),
                    ye = (0, l.Z)(Ee, 2),
                    we = ye[0],
                    be = ye[1],
                    xe = p.useState(!1),
                    Ne = (0, l.Z)(xe, 2),
                    Ze = Ne[0],
                    Ce = Ne[1],
                    ke = (0, g.v9)((function(e) {
                        return e.currentUser.photoUploadState
                    })),
                    Se = (0, g.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })),
                    Ue = p.useRef(null),
                    ze = (0, k.q7)().data,
                    je = void 0 === ze ? [] : ze,
                    Le = (0, g.I0)(),
                    Pe = function() {
                        P(null), B({
                            x: 0,
                            y: 0
                        }), A({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), V({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), H(1), K(null != t ? t : 16 / 9), te(!1), re({}), oe(0), fe(!1), be(!1), Ce(!1), he(!1), Le((0, C.b9)())
                    },
                    Re = function(e, t) {
                        A(e), V(t)
                    };
                p.useEffect((function() {
                    Le((0, C.b9)())
                }), []);
                var Ie, $e, Be, qe, Oe, Ae = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Me = function(e, t) {
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
                    Ye = function() {
                        var e = (0, a.Z)(h().mark((function e() {
                            var t;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Me(Ae(L), D);
                                    case 2:
                                        t = e.sent, te(!0), re(t), oe(2);
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
                    De = null !== L,
                    Ve = [p.createElement("span", null, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", null, "(2/3) Crop your picture as desired"), p.createElement("h3", null, "(3/3) Preview before upload")],
                    _e = de ? "Your profile picture has been updated!" : p.createElement("span", null, " "),
                    Fe = je.includes("permission-user-gallery"),
                    Ge = je.includes("permission-profile-pic-override"),
                    He = "yellow";
                return ke.complete && (de && ke.success ? (He = "green", Ie = Se.id, $e = ke.lastUpload, Be = $e.id, qe = $e.versions, Oe = "https://api.vrchat.cloud/api/1/file/".concat(Be, "/").concat(qe.at(-1).version), Le((0, C._W)({
                    userId: Ie,
                    data: {
                        profilePicOverride: Oe
                    }
                })), he(!1)) : He = ke.success ? "" : "red"), Fe ? p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Photo")), p.createElement("div", null, Ve[ce]), p.createElement("div", {
                    hidden: ee
                }, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ve || Ze || we) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(x.$1, {
                    icon: u.WV,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ve && "Image size is larger than 10MBs. ", Ze && "Image dimensions are smaller than 64 pixels. ", we && "Image dimensions are larger than 2048 pixels. ", "Please choose a new image."), !De && p.createElement("div", null, p.createElement("input", {
                    ref: Ue,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        fe(!1), be(!1), Ce(!1);
                        var e = Ue.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) fe(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                if (t.width < 64 || t.height < 64) Ce(!0);
                                else if (t.width > 2048 || t.height > 2048) be(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var n = new FileReader;
                                    n.addEventListener("load", (function() {
                                        P(n.result), oe(1)
                                    })), e && n.readAsDataURL(e)
                                }
                            })), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), De && p.createElement("div", null, p.createElement(w.ZP, {
                    image: L,
                    crop: $,
                    zoom: G,
                    aspect: J,
                    onCropChange: function(e) {
                        B(e)
                    },
                    onCropComplete: Re,
                    onCropAreaChange: Re,
                    onZoomChange: function(e) {
                        H(e)
                    },
                    cropShape: "rect"
                }))), De && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ve && p.createElement(v.Z, {
                    color: "success",
                    onClick: Ye
                }, p.createElement(x.$1, {
                    icon: m.wn,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), U ? p.createElement(v.Z, {
                    color: "danger",
                    onClick: function() {
                        Pe()
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
                    hidden: !ee,
                    className: (0, y.iv)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, ke.success && ke.complete && p.createElement("div", {
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
                        Pe(), d()
                    }
                }, "Back") : p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !ke.success && ke.complete && p.createElement("div", {
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
                }), p.createElement("p", null, "Your photo failed to upload!", p.createElement("br", null), ke.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, y.iv)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(b.rU, {
                    to: "/home/inventory/photos"
                }, p.createElement(v.Z, null, "View Photos"))))), !ke.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, y.iv)({
                        name: "1ue3j6i",
                        styles: "div{margin:auto;margin-top:0.5em;}"
                    })
                }, p.createElement(Z.Z, {
                    imageUrl: le.base64,
                    borderColor: He,
                    disableManagement: !0
                })), !ke.success && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "19i7pz4",
                        styles: "margin-top:0.8em"
                    })
                }, !d && p.createElement("div", {
                    className: (0, y.iv)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, Ge && !U && p.createElement("div", null, p.createElement(E.Z, {
                    type: "checkbox",
                    onChange: function(e) {
                        he(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as profile picture"))), p.createElement(v.Z, {
                    color: "success",
                    onClick: function() {
                        Le((0, C.nn)({
                            file: le.file
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
                        te(!1), re({}), oe(1)
                    }
                }, p.createElement(x.$1, {
                    icon: r.ac,
                    className: (0, y.iv)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), ke.pending && p.createElement("div", {
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
//# sourceMappingURL=47132447ec31510e14bc5f70cec6996fed863ce905b3f1b94dd810356533f011.js.map