"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6313], {
        76313(e, t, a) {
            a.r(t), a.d(t, {
                default: () => z
            });
            var n = a(10467),
                l = a(82544),
                r = a(81021),
                s = a(19616),
                i = a(34496),
                c = a(81617),
                o = a(19179),
                m = a(61145),
                u = a(35532),
                d = a(54756),
                h = a.n(d),
                p = a(96540),
                g = a(6376),
                f = a(30104),
                E = a(48210),
                v = a(85052),
                A = a(56822),
                y = a(41952),
                w = a(84976),
                b = a(15033),
                x = a(25538),
                N = a(97071),
                H = a(80907),
                C = a(558),
                k = a(13951);
            var S = 2048;
            const z = function(e) {
                var t = e.aspectRatio,
                    a = e.successCallback,
                    d = void 0 === a ? null : a,
                    z = e.isSelector,
                    M = void 0 !== z && z,
                    U = (0, p.useState)(null),
                    j = (0, l.A)(U, 2),
                    R = j[0],
                    L = j[1],
                    I = (0, p.useState)({
                        x: 0,
                        y: 0
                    }),
                    P = (0, l.A)(I, 2),
                    O = P[0],
                    _ = P[1],
                    q = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    B = (0, l.A)(q, 2),
                    D = (B[0], B[1]),
                    G = (0, p.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }),
                    Y = (0, l.A)(G, 2),
                    F = Y[0],
                    V = Y[1],
                    J = (0, p.useState)(1),
                    Q = (0, l.A)(J, 2),
                    T = Q[0],
                    Z = Q[1],
                    K = (0, p.useState)(null != t ? t : 16 / 9),
                    W = (0, l.A)(K, 2),
                    X = W[0],
                    $ = W[1],
                    ee = (0, p.useState)(!1),
                    te = (0, l.A)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    le = (0, p.useState)({}),
                    re = (0, l.A)(le, 2),
                    se = re[0],
                    ie = re[1],
                    ce = (0, p.useState)(0),
                    oe = (0, l.A)(ce, 2),
                    me = oe[0],
                    ue = oe[1],
                    de = (0, p.useState)(!1),
                    he = (0, l.A)(de, 2),
                    pe = he[0],
                    ge = he[1],
                    fe = (0, p.useState)(!1),
                    Ee = (0, l.A)(fe, 2),
                    ve = Ee[0],
                    Ae = Ee[1],
                    ye = p.useState(!1),
                    we = (0, l.A)(ye, 2),
                    be = (we[0], we[1]),
                    xe = p.useState(!1),
                    Ne = (0, l.A)(xe, 2),
                    He = Ne[0],
                    Ce = Ne[1],
                    ke = (0, g.d4)(function(e) {
                        return e.currentUser.photoUploadState
                    }),
                    Se = (0, g.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }),
                    ze = p.useRef(null),
                    Me = (0, k.w_)().data,
                    Ue = void 0 === Me ? [] : Me,
                    je = (0, g.wA)(),
                    Re = (0, N.DF)(),
                    Le = function() {
                        L(null), _({
                            x: 0,
                            y: 0
                        }), D({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), V({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }), Z(1), $(null != t ? t : 16 / 9), ne(!1), ie({}), ue(0), Ae(!1), be(!1), Ce(!1), ge(!1), je((0, C.S0)())
                    },
                    Ie = function(e, t) {
                        D(e), V(t)
                    };
                p.useEffect(function() {
                    je((0, C.S0)())
                }, []), p.useEffect(function() {
                    ke.complete && !ke.success && Re({
                        error: ke.rawResponse
                    }) && Le()
                }, [ke]);
                var Pe, Oe, _e, qe, Be, De = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Ge = function(e, t) {
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
                        return new Promise(function(e) {
                            l.toBlob(function(t) {
                                var a = new FileReader;
                                a.addEventListener("load", function() {
                                    e({
                                        file: t,
                                        base64: a.result
                                    })
                                }), a.readAsDataURL(t)
                            }, "image/png")
                        })
                    },
                    Ye = function() {
                        var e = (0, n.A)(h().mark(function e() {
                            var t;
                            return h().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ge(De(R), F);
                                    case 2:
                                        t = e.sent, ne(!0), ie(t), ue(2);
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
                    Fe = null !== R,
                    Ve = [p.createElement("span", {
                        key: "step-select"
                    }, p.createElement("h3", null, "(1/3) Choose a picture to upload"), " Must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 pixels will be resized automatically. ", p.createElement("br", null), p.createElement("br", null)), p.createElement("h3", {
                        key: "step-crop"
                    }, "(2/3) Crop your picture as desired"), p.createElement("h3", {
                        key: "step-preview"
                    }, "(3/3) Preview before upload")],
                    Je = pe ? "Your profile picture has been updated!" : p.createElement("span", null, " "),
                    Qe = Ue.includes("permission-user-gallery"),
                    Te = Ue.includes("permission-profile-pic-override"),
                    Ze = "yellow";
                return ke.complete && (pe && ke.success ? (Ze = "green", Pe = Se.id, Oe = ke.lastUpload, _e = Oe.id, qe = Oe.versions, Be = "https://api.vrchat.cloud/api/1/file/".concat(_e, "/").concat(qe.at(-1).version), je((0, C.vv)({
                    userId: Pe,
                    data: {
                        profilePicOverride: Be
                    }
                })), ge(!1)) : Ze = ke.success ? "" : "red"), Qe ? p.createElement("div", null, p.createElement("div", {
                    className: (0, A.AH)({
                        name: "x6eonb",
                        styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                    })
                }, p.createElement("h2", null, "Upload a New Photo")), p.createElement("div", null, Ve[me]), p.createElement("div", {
                    hidden: ae
                }, p.createElement("div", {
                    className: (0, A.AH)({
                        name: "iekib1",
                        styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                    })
                }, (ve || He) && p.createElement("div", {
                    className: "text-danger"
                }, p.createElement(b.M2, {
                    icon: u.bx,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), ve && "Image size is larger than 10MBs. ", He && "Image dimensions are smaller than 64 pixels. ", "Please choose a new image."), !Fe && p.createElement("div", null, p.createElement("input", {
                    ref: ze,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        Ae(!1), be(!1), Ce(!1);
                        var e = ze.current.files[0];
                        if ((null == e ? void 0 : e.size) > 10485760) Ae(!0);
                        else {
                            var t = new Image;
                            t.addEventListener("load", function() {
                                if (t.width < 64 || t.height < 64) Ce(!0);
                                else {
                                    window.URL.revokeObjectURL(t.src);
                                    var a = new FileReader;
                                    a.addEventListener("load", function() {
                                        L(a.result), ue(1)
                                    }), e && a.readAsDataURL(e)
                                }
                            }), e && (t.src = window.URL.createObjectURL(e))
                        }
                    }
                })), Fe && p.createElement("div", null, p.createElement(y.Ay, {
                    image: R,
                    crop: O,
                    zoom: T,
                    aspect: X,
                    onCropChange: function(e) {
                        _(e)
                    },
                    onCropComplete: Ie,
                    onCropAreaChange: Ie,
                    onZoomChange: function(e) {
                        Z(e)
                    },
                    cropShape: "rect"
                }))), Fe && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "swgl8p",
                        styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                    })
                }, !ve && p.createElement(f.A, {
                    color: "success",
                    onClick: Ye
                }, p.createElement(b.M2, {
                    icon: m.Mj,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Next"), M ? p.createElement(f.A, {
                    color: "danger",
                    onClick: function() {
                        Le()
                    }
                }, p.createElement(b.M2, {
                    icon: o.GR,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel") : p.createElement(w.N_, {
                    to: "/home/inventory/photos"
                }, p.createElement(f.A, {
                    color: "danger"
                }, p.createElement(b.M2, {
                    icon: o.GR,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Cancel")))), p.createElement("div", {
                    hidden: !ae,
                    className: (0, A.AH)({
                        name: "nh2hxb",
                        styles: "margin:auto;text-align:center;button{width:7em;}"
                    })
                }, ke.success && ke.complete && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "yw3maw",
                        styles: "max-width:27em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(v.A, {
                    color: "success",
                    className: (0, A.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: c.e6,
                    size: "2x",
                    className: (0, A.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo has been uploaded successfully!", p.createElement("br", null), Je, p.createElement("br", null)), p.createElement("div", {
                    className: (0, A.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, d ? p.createElement(f.A, {
                    onClick: function() {
                        Le(), d()
                    }
                }, "Back") : p.createElement(w.N_, {
                    to: "/home/inventory/photos"
                }, p.createElement(f.A, null, "View Photos"))))), !ke.success && ke.complete && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "1q7q77",
                        styles: "max-width:34em;margin:auto;margin-top:2em;text-align:left"
                    })
                }, p.createElement(v.A, {
                    color: "danger",
                    className: (0, A.AH)({
                        name: "rhz7k4",
                        styles: "min-height:8em"
                    })
                }, p.createElement(b.M2, {
                    icon: i.zp,
                    size: "2x",
                    className: (0, A.AH)({
                        name: "1ppuizh",
                        styles: "float:left;margin-right:0.6em"
                    })
                }), p.createElement("p", null, "Your photo failed to upload!", p.createElement("br", null), ke.error || "Unknown Error", p.createElement("br", null)), p.createElement("div", {
                    className: (0, A.AH)({
                        name: "tjo4qw",
                        styles: "float:right"
                    })
                }, p.createElement(w.N_, {
                    to: "/home/inventory/photos"
                }, p.createElement(f.A, null, "View Photos"))))), !ke.pending && p.createElement("div", null, p.createElement("div", {
                    className: (0, A.AH)({
                        name: "1ue3j6i",
                        styles: "div{margin:auto;margin-top:0.5em;}"
                    })
                }, p.createElement(H.A, {
                    imageUrl: se.base64,
                    borderColor: Ze,
                    disableManagement: !0
                })), !ke.success && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "19i7pz4",
                        styles: "margin-top:0.8em"
                    })
                }, !d && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "j26sjm",
                        styles: "height:1.3em;margin-bottom:0.6em;.form-check-input{margin-top:0.4rem;}"
                    })
                }, Te && !M && p.createElement("div", null, p.createElement(E.A, {
                    type: "checkbox",
                    onChange: function(e) {
                        ge(e.target.checked)
                    }
                }), p.createElement("span", null, "Set as profile picture"))), p.createElement(f.A, {
                    color: "success",
                    onClick: function() {
                        je((0, C.vn)({
                            file: se.file
                        }))
                    }
                }, p.createElement(b.M2, {
                    icon: s.Jm,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Save"), p.createElement(f.A, {
                    className: (0, A.AH)({
                        name: "1v3rjfq",
                        styles: "margin-left:0.5em"
                    }),
                    color: "danger",
                    onClick: function() {
                        ne(!1), ie({}), ue(1)
                    }
                }, p.createElement(b.M2, {
                    icon: r.Ce,
                    className: (0, A.AH)({
                        name: "ofo7n8",
                        styles: "margin-right:0.4em"
                    })
                }), "Go Back"))), ke.pending && p.createElement("div", {
                    className: (0, A.AH)({
                        name: "zl1inp",
                        styles: "display:flex;justify-content:center"
                    })
                }, p.createElement("div", {
                    className: (0, A.AH)({
                        name: "19y5u9z",
                        styles: "margin-right:1em"
                    })
                }, p.createElement(x.A, null)), p.createElement("div", {
                    className: (0, A.AH)({
                        name: "1rzt17j",
                        styles: "font-size:1.4em"
                    })
                }, "UPLOADING PHOTO...")))) : p.createElement("div", null, "You do not have permission to upload photos.")
            };
            a.dn(z)
        }
    }
]);
//# sourceMappingURL=1ec6007ab2a42b54a57d04f89337d9195e4c33c2f67e57f1f085cc254ff63bd9.js.map