"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3825], {
        98175: (e, t, n) => {
            var r = n(11071);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.Xc = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        81264: (e, t) => {
            var n = "hashtag",
                r = [62098],
                a = "M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [448, 512, r, "23", a]
            }, t.ol = t.DF
        },
        57212: (e, t, n) => {
            var r = n(98375);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.QD = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        28361: (e, t) => {
            var n = "shirt",
                r = [128085, "t-shirt", "tshirt"],
                a = "f553",
                o = "M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [640, 512, r, a, o]
            }, t.vT = t.DF
        },
        29104: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(67294),
                a = n(45697),
                o = n.n(a),
                i = n(60006),
                c = function(e) {
                    var t = e.label,
                        n = e.value,
                        a = e.onChangeCallback,
                        o = void 0 === a ? function() {} : a,
                        c = e.defaultChecked,
                        l = void 0 !== c && c,
                        s = e.className,
                        u = e.disabled;
                    return r.createElement(i.W7, {
                        htmlFor: n,
                        className: s
                    }, r.createElement("span", null, t), r.createElement(i.D4, {
                        id: n,
                        name: n,
                        type: "checkbox",
                        onChange: function(e) {
                            return function(e) {
                                o({
                                    value: n,
                                    checked: e.target.checked
                                })
                            }(e)
                        },
                        checked: l,
                        disabled: u
                    }), r.createElement(i.Tg, null))
                };
            c.propTypes = {
                className: o().string,
                label: o().string,
                onChangeCallback: o().func,
                value: o().string,
                disabled: o().bool
            };
            const l = c
        },
        44483: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(54546),
                a = n(4965),
                o = n(42619),
                i = n(59545),
                c = n(34327),
                l = n(81264),
                s = n(67294),
                u = n(79655),
                d = (n(83505), n(25062)),
                m = n(86646),
                p = n(60006),
                g = n(28213);
            const f = function(e) {
                var t, n = e.onDeleteClicked,
                    a = e.tag,
                    m = e.hideDescription,
                    f = e.preventSearch,
                    y = e.editable,
                    h = (e.isMod, (0, s.useState)(!1)),
                    E = (0, r.Z)(h, 2),
                    b = E[0],
                    w = E[1],
                    x = (0, s.useState)(!1),
                    P = (0, r.Z)(x, 2),
                    I = P[0],
                    N = P[1],
                    k = (0, s.useState)(!1),
                    T = (0, r.Z)(k, 2),
                    S = T[0],
                    Z = T[1],
                    L = (0, s.useState)(!1),
                    C = (0, r.Z)(L, 2),
                    O = (C[0], C[1]),
                    _ = y,
                    j = f || !1,
                    D = l.ol,
                    R = a,
                    A = "secondary";
                if (null == a) return null;
                if ("string" != typeof a) return console.error("Malformed tag."), null;
                (a.startsWith("admin") || a.startsWith("system")) && (D = c.LE), a.startsWith("author_tag") && (D = c.LE, R = a.replace("author_tag_", ""));
                var U = g.w.filter((function(e) {
                    return e.tag === a
                }));
                U[0] && (D = U[0].icon, R = U[0].description), b && (D = i.NB), I && S && (A = "danger"), S && (t = s.createElement(v, {
                    icon: o.$,
                    title: "Delete this tag",
                    onMouseLeave: function() {
                        O(!1)
                    },
                    onMouseEnter: function() {
                        O(!0)
                    },
                    onClick: function() {
                        n && _ && n(a)
                    }
                }));
                var M = "/home/search/".concat(R);
                return s.createElement(d.Z, {
                    "aria-label": "tag",
                    className: "tag-badge me-2 d-flex",
                    onMouseEnter: function() {
                        _ && w(!0)
                    },
                    onMouseLeave: function() {
                        _ && (w(!1), Z(!1))
                    },
                    color: A
                }, s.createElement(p.X2, {
                    onMouseEnter: function() {
                        _ && N(!0)
                    },
                    onMouseLeave: function() {
                        _ && N(!1)
                    },
                    className: "me-2"
                }, s.createElement(v, {
                    icon: D,
                    title: R,
                    className: "me-1",
                    onClick: function() {
                        _ && Z(!S)
                    }
                }), t), j ? s.createElement("span", null, R) : s.createElement(u.rU, {
                    to: M
                }, !m && s.createElement("span", null, R)))
            };
            var v = (0, a.Z)(m.Z, {
                target: "ec3rnp40"
            })({
                name: "1fqcuui",
                styles: "filter:brightness(1);cursor:pointer;transition:filter 150ms ease;&:hover{filter:brightness(0.3);}"
            })
        },
        76182: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => at
            });
            var r = n(54546),
                a = n(4965),
                o = n(57212),
                i = n(40098),
                c = n(94902),
                l = n(34327),
                s = n(45697),
                u = n.n(s),
                d = n(67294),
                m = n(89250),
                p = n(79655),
                g = n(34226),
                f = n(11976),
                v = n(22202),
                y = n(16869),
                h = n(67978),
                E = n(50048),
                b = n(64281),
                w = n(45987),
                x = n(15861),
                P = n(4942),
                I = n(59895),
                N = n(64687),
                k = n.n(N),
                T = n(32981),
                S = n(21442),
                Z = n(89163),
                L = n(3126),
                C = n(94184),
                O = n.n(C),
                _ = n(22040),
                j = ["className", "cssModule", "valid", "tooltip", "tag"];

            function D() {
                return D = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, D.apply(this, arguments)
            }

            function R(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var A = {
                children: u().node,
                tag: _.iC,
                className: u().string,
                cssModule: u().object,
                valid: u().bool,
                tooltip: u().bool
            };

            function U(e) {
                var t = e.className,
                    n = e.cssModule,
                    r = e.valid,
                    a = void 0 === r ? void 0 : r,
                    o = e.tooltip,
                    i = e.tag,
                    c = void 0 === i ? "div" : i,
                    l = R(e, j),
                    s = o ? "tooltip" : "feedback",
                    u = (0, _.mx)(O()(t, a ? "valid-".concat(s) : "invalid-".concat(s)), n);
                return d.createElement(c, D({}, l, {
                    className: u
                }))
            }
            U.propTypes = A;
            const M = U;
            var X = n(25062),
                G = n(30776),
                F = n(29104),
                z = (n(89421), n(78076)),
                q = n(55346),
                J = n(2723),
                V = n(44814),
                B = n(34698),
                W = n(70123),
                $ = n(86646),
                H = n(46681),
                Q = n(12227),
                Y = n(41255);
            const K = function(e) {
                var t = e.imageType,
                    n = e.setImageObject,
                    a = e.maxMBSize,
                    o = void 0 === a ? 3 : a,
                    i = e.existingImage,
                    c = e.setIncompleteSelection,
                    l = e.btnClasses,
                    s = void 0 === l ? "" : l,
                    u = 1048576 * o,
                    m = (0, d.useState)(!0),
                    p = (0, r.Z)(m, 2),
                    g = p[0],
                    f = p[1],
                    v = (0, d.useState)(i || ""),
                    y = (0, r.Z)(v, 2),
                    h = y[0],
                    E = y[1],
                    b = (0, d.useState)({
                        x: 0,
                        y: 0
                    }),
                    w = (0, r.Z)(b, 2),
                    P = w[0],
                    I = w[1],
                    N = (0, d.useState)(1),
                    S = (0, r.Z)(N, 2),
                    Z = S[0],
                    L = S[1],
                    C = (0, d.useState)(!1),
                    O = (0, r.Z)(C, 2),
                    _ = O[0],
                    j = O[1],
                    D = (0, d.useState)({}),
                    R = (0, r.Z)(D, 2),
                    A = R[0],
                    U = R[1],
                    M = (0, d.useState)(0),
                    X = (0, r.Z)(M, 2),
                    G = X[0],
                    F = X[1],
                    K = (0, d.useState)(!1),
                    le = (0, r.Z)(K, 2),
                    se = le[0],
                    ue = le[1],
                    de = (0, d.useState)(0),
                    me = (0, r.Z)(de, 2),
                    pe = me[0],
                    ge = me[1],
                    fe = (0, Y.Ko)(h, {
                        skip: !h
                    }).data,
                    ve = d.useMemo((function() {
                        return fe ? (0, Q.Tt)({
                            file: fe,
                            isImage: !0
                        }) : null
                    }), [fe]),
                    ye = (0, T.v9)((function(e) {
                        return e.currentUser.photoUploadState
                    })),
                    he = {
                        userPhoto: 16 / 9,
                        product: 1
                    } [t],
                    Ee = d.createRef(),
                    be = 0 !== Object.keys(A).length || !!h,
                    we = function(e, t) {
                        ge(t)
                    },
                    xe = function(e) {
                        var t = new Image;
                        return t.src = e, t
                    },
                    Pe = function(e, t) {
                        var n = document.createElement("canvas"),
                            r = n.getContext("2d");
                        return n.width = t.width, n.height = t.height, r.drawImage(e, -t.x, -t.y), new Promise((function(e) {
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
                    Ie = function() {
                        var e = (0, x.Z)(k().mark((function e() {
                            var t;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Pe(xe(h), pe);
                                    case 2:
                                        t = e.sent, j(!0), U(t), F(2), c(!0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ne = i ? h !== i : "" !== h,
                    ke = [d.createElement("span", null, d.createElement("h3", null, "(1/2) Choose a picture to upload"), " Must be less than ", o, "MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels. ", d.createElement("br", null), d.createElement("br", null)), d.createElement("h3", null, "(2/2) Crop your picture as desired")],
                    Te = "yellow",
                    Se = ye.complete,
                    Ze = ye.success;
                return (i && h === i || Se && Ze) && (Te = "green"), Se && !Ze && (Te = "red"), d.createElement("div", null, d.createElement("div", {
                    hidden: g
                }, d.createElement(re, null, d.createElement("h2", null, "Select A Photo")), d.createElement("div", null, ke[G]), d.createElement("div", {
                    hidden: _
                }, d.createElement(ae, null, se && d.createElement("div", {
                    className: "text-danger"
                }, d.createElement(te, {
                    icon: V.WV
                }), "Image size is larger than ", o, "MB. Please choose a new image."), !Ne && d.createElement("div", null, d.createElement("input", {
                    "aria-label": "Image Selector",
                    ref: Ee,
                    type: "file",
                    accept: ".png,.jpg,.jpeg",
                    onChange: function() {
                        ue(!1);
                        var e = Ee.current.files[0],
                            t = new FileReader;
                        e.size > u ? ue(!0) : (t.addEventListener("load", (function() {
                            E(t.result), F(1), c(!0)
                        })), e && t.readAsDataURL(e))
                    }
                })), Ne && d.createElement("div", null, d.createElement(W.ZP, {
                    image: h,
                    crop: P,
                    zoom: Z,
                    aspect: he,
                    onCropChange: function(e) {
                        I(e)
                    },
                    onCropComplete: we,
                    onCropAreaChange: we,
                    onZoomChange: function(e) {
                        L(e)
                    },
                    cropShape: "rect"
                }))), Ne && d.createElement(oe, null, !se && d.createElement(B.Z, {
                    color: "success",
                    onClick: Ie
                }, d.createElement(te, {
                    icon: z.Vm
                }), "Next"), d.createElement(B.Z, {
                    color: "danger",
                    onClick: function() {
                        F(0), U({}), E(i || ""), c(!1)
                    }
                }, d.createElement(te, {
                    icon: q.ac
                }), "Go Back"))), d.createElement(ie, {
                    hidden: !_
                }, !ye.pending && d.createElement("div", null, d.createElement(ee, null, d.createElement(H.Z, {
                    imageUrl: A.base64,
                    borderColor: Te,
                    disableManagement: !0,
                    imageHeight: 135,
                    imageWidth: 135
                })), !ye.success && d.createElement(ce, null, d.createElement(B.Z, {
                    color: "success",
                    onClick: function() {
                        n(A.file), f(!0), c(!1)
                    }
                }, d.createElement(te, {
                    icon: J.cf
                }), "Keep"), d.createElement(ne, {
                    color: "danger",
                    onClick: function() {
                        j(!1), U({}), F(1), c(!0)
                    }
                }, d.createElement(te, {
                    icon: q.ac
                }), "Go Back"))))), d.createElement("div", {
                    hidden: !g
                }, be && d.createElement(ee, null, d.createElement(H.Z, {
                    imageUrl: Ne && A ? A.base64 : ve,
                    borderColor: Te,
                    disableManagement: !0,
                    imageHeight: 135,
                    imageWidth: 135
                }), d.createElement("br", null)), d.createElement(B.Z, {
                    onClick: function() {
                        return f(!g)
                    },
                    className: s
                }, d.createElement($.Z, {
                    icon: z.Vm
                }), " ", be ? "Edit Image Selection" : "Upload Image")))
            };
            var ee = (0, a.Z)("div", {
                    target: "emj59307"
                })({
                    name: "1ue3j6i",
                    styles: "div{margin:auto;margin-top:0.5em;}"
                }),
                te = (0, a.Z)($.Z, {
                    target: "emj59306"
                })({
                    name: "ofo7n8",
                    styles: "margin-right:0.4em"
                }),
                ne = (0, a.Z)(B.Z, {
                    target: "emj59305"
                })({
                    name: "1v3rjfq",
                    styles: "margin-left:0.5em"
                }),
                re = (0, a.Z)("div", {
                    target: "emj59304"
                })({
                    name: "x6eonb",
                    styles: "margin:auto;margin-bottom:1.5em;text-align:center"
                }),
                ae = (0, a.Z)("div", {
                    target: "emj59303"
                })({
                    name: "iekib1",
                    styles: "width:100%;max-height:30em;height:30em;position:relative!important"
                }),
                oe = (0, a.Z)("div", {
                    target: "emj59302"
                })({
                    name: "swgl8p",
                    styles: "button{width:7em;margin-left:0.5em;margin-top:0.5em;}float:right"
                }),
                ie = (0, a.Z)("div", {
                    target: "emj59301"
                })({
                    name: "nh2hxb",
                    styles: "margin:auto;text-align:center;button{width:7em;}"
                }),
                ce = (0, a.Z)("div", {
                    target: "emj59300"
                })({
                    name: "ippv0c",
                    styles: "margin-top:1.5em"
                }),
                le = n(73670),
                se = n(64258),
                ue = n(93261),
                de = n(67263);
            const me = function(e) {
                var t = e.product,
                    n = e.productId,
                    r = e.children,
                    a = e.withLink,
                    o = void 0 === a || a,
                    i = (0, h.lZ)({
                        productId: n
                    }, {
                        skip: !n
                    }),
                    c = i.data;
                if (i.isLoading) return d.createElement(g.UU, {
                    height: "3em"
                });
                var l = t || c,
                    s = o ? d.createElement(p.rU, {
                        to: "/home/marketplace/storefront/products#".concat(n)
                    }, (null == l ? void 0 : l.displayName) || n) : (null == l ? void 0 : l.displayName) || n;
                return d.createElement(pe, {
                    role: "listitem"
                }, d.createElement(g.pw, {
                    imageId: null == l ? void 0 : l.imageId,
                    alt: (null == l ? void 0 : l.displayName) || n,
                    fallbackSrc: de
                }), d.createElement(g.JX, {
                    style: {
                        flexGrow: 1,
                        flexBasis: 300,
                        maxWidth: "100%",
                        overflowWrap: "break-word"
                    }
                }, d.createElement(ge, null, s), d.createElement("p", null, null == l ? void 0 : l.description)), r)
            };
            var pe = (0, a.Z)(g.X2, {
                    target: "e1dmf8m91"
                })("margin:0.4rem 0;padding:0.5rem;background-color:#181b1f;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;flex-wrap:wrap;justify-content:center;&:hover{border-color:#054d5e;}&>*{margin:0.5rem;}&>", E.Mt, "{min-width:128px;}&>", g.JX, ">p:last-child,&>", g.JX, ">ul:last-child{margin:0;}"),
                ge = (0, a.Z)("h5", {
                    target: "e1dmf8m90"
                })({
                    name: "1ah9t0s",
                    styles: "font-weight:bold;&:after{content:none;border:none;}"
                }),
                fe = n(87462),
                ve = ["listingId"];
            const ye = function(e) {
                var t = e.listingId,
                    n = (0, w.Z)(e, ve),
                    r = (0, y.mr)({
                        listingId: t
                    }, {
                        skip: !t
                    }).data;
                return d.createElement(p.rU, (0, fe.Z)({}, n, {
                    to: "/home/marketplace/storefront/listings#".concat(t)
                }), (null == r ? void 0 : r.displayName) || t)
            };
            var he = ["unitPriceTokens"],
                Ee = ["unitPriceTokens"];

            function be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(n), !0).forEach((function(t) {
                        (0, P.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xe = function(e) {
                var t, n, a, o, i, c = e.isEditMode,
                    l = void 0 !== c && c,
                    s = e.existingItem,
                    u = (e.allProductTags, e.onItemCreated),
                    m = (0, T.I0)(),
                    E = (0, v.IB)().data,
                    b = null == E ? void 0 : E.id,
                    P = (null == s ? void 0 : s.tags) || [],
                    N = (0, d.useState)(P),
                    C = (0, r.Z)(N, 2),
                    O = C[0],
                    _ = (C[1], (0, d.useState)(null)),
                    j = (0, r.Z)(_, 2),
                    D = j[0],
                    R = j[1],
                    A = (null == s ? void 0 : s.imageId) || "",
                    U = (0, d.useState)(A),
                    z = (0, r.Z)(U, 2),
                    q = z[0],
                    J = (z[1], (null == s ? void 0 : s.priceTokens) || ((null == s ? void 0 : s.productType) === f.Pm.LISTING ? f.zD : void 0)),
                    V = (0, d.useState)(J),
                    B = (0, r.Z)(V, 2),
                    W = B[0],
                    $ = B[1],
                    H = (0, d.useState)(!0),
                    Q = (0, r.Z)(H, 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = (null == s ? void 0 : s.displayName) || "",
                    re = (0, d.useState)(ne),
                    ae = (0, r.Z)(re, 2),
                    oe = ae[0],
                    ie = ae[1],
                    ce = (0, d.useState)(!0),
                    de = (0, r.Z)(ce, 2),
                    pe = de[0],
                    ge = de[1],
                    fe = (null == s ? void 0 : s.description) || "",
                    ve = (0, d.useState)(fe),
                    be = (0, r.Z)(ve, 2),
                    xe = be[0],
                    Pe = be[1],
                    Ie = (0, d.useState)(!0),
                    Ne = (0, r.Z)(Ie, 2),
                    ke = Ne[0],
                    Te = Ne[1],
                    Se = (null == s ? void 0 : s.duration) || 1,
                    Ze = (0, d.useState)(Se),
                    Le = (0, r.Z)(Ze, 2),
                    Ce = Le[0],
                    Oe = (Le[1], (0, d.useState)(!0)),
                    _e = (0, r.Z)(Oe, 2),
                    je = _e[0],
                    De = _e[1],
                    Re = (null == s ? void 0 : s.durationType) || "months",
                    Ae = (0, d.useState)(Re),
                    Ue = (0, r.Z)(Ae, 2),
                    Me = Ue[0],
                    Xe = (Ue[1], (null == s ? void 0 : s.groupAccess) || !1),
                    Ge = (0, d.useState)(Xe),
                    Fe = (0, r.Z)(Ge, 2),
                    ze = Fe[0],
                    qe = Fe[1],
                    Je = (null == s ? void 0 : s.groupAccessRemove) || !1,
                    Ve = (0, d.useState)(Je),
                    Be = (0, r.Z)(Ve, 2),
                    We = Be[0],
                    $e = Be[1],
                    He = (null == s ? void 0 : s.useForSubscriberList) || !1,
                    Qe = (0, d.useState)(He),
                    Ye = (0, r.Z)(Qe, 2),
                    Ke = Ye[0],
                    et = Ye[1],
                    tt = (null == s ? void 0 : s.listingVariants) || [],
                    nt = (0, d.useState)(f.PN.map((function(e) {
                        return tt.find((function(t) {
                            return t.quantity === e
                        })) || {
                            quantity: e
                        }
                    }))),
                    rt = (0, r.Z)(nt, 2),
                    at = rt[0],
                    ot = rt[1],
                    it = (null == s ? void 0 : s.products) || [],
                    ct = (0, d.useState)(it),
                    lt = (0, r.Z)(ct, 2),
                    st = lt[0],
                    ut = lt[1],
                    dt = (0, d.useState)(!1),
                    mt = (0, r.Z)(dt, 2),
                    pt = mt[0],
                    gt = mt[1],
                    ft = (0, d.useState)(""),
                    vt = (0, r.Z)(ft, 2),
                    yt = vt[0],
                    ht = vt[1],
                    Et = (0, d.useState)(!1),
                    bt = (0, r.Z)(Et, 2),
                    wt = bt[0],
                    xt = bt[1],
                    Pt = (0, d.useState)(!1),
                    It = (0, r.Z)(Pt, 2),
                    Nt = It[0],
                    kt = It[1],
                    Tt = (0, ue.r5)({
                        groupId: null == s ? void 0 : s.groupId
                    }, {
                        skip: (null == s ? void 0 : s.productType) !== f.Pm.ROLE || !(null != s && s.groupId)
                    }),
                    St = Tt.data,
                    Zt = Tt.isLoading,
                    Lt = (Tt.isError, (0, ue.Vc)({
                        groupId: null == s ? void 0 : s.groupId
                    }, {
                        skip: (null == s ? void 0 : s.productType) !== f.Pm.ROLE || !(null != s && s.groupId)
                    })),
                    Ct = Lt.data,
                    Ot = Lt.isLoading,
                    _t = (Lt.isError, (0, h.x3)({
                        userId: b
                    }, {
                        skip: (null == s ? void 0 : s.productType) !== f.Pm.LISTING
                    })),
                    jt = _t.data,
                    Dt = _t.isSuccess,
                    Rt = _t.isLoading,
                    At = _t.isError,
                    Ut = _t.error,
                    Mt = (0, h.qX)(),
                    Xt = (0, r.Z)(Mt, 2),
                    Gt = Xt[0],
                    Ft = Xt[1],
                    zt = Ft.isSuccess,
                    qt = Ft.isLoading,
                    Jt = Ft.isError,
                    Vt = Ft.error,
                    Bt = (0, h.wE)(),
                    Wt = (0, r.Z)(Bt, 2),
                    $t = Wt[0],
                    Ht = Wt[1],
                    Qt = Ht.isSuccess,
                    Yt = Ht.isLoading,
                    Kt = Ht.isError,
                    en = Ht.error,
                    tn = (0, y.G4)(),
                    nn = (0, r.Z)(tn, 2),
                    rn = nn[0],
                    an = nn[1],
                    on = an.isSuccess,
                    cn = an.isLoading,
                    ln = an.isError,
                    sn = an.error,
                    un = (0, y.Ij)(),
                    dn = (0, r.Z)(un, 2),
                    mn = dn[0],
                    pn = dn[1],
                    gn = pn.isSuccess,
                    fn = pn.isLoading,
                    vn = pn.isError,
                    yn = pn.error,
                    hn = zt || on,
                    En = Qt || gn,
                    bn = qt || cn,
                    wn = Yt || fn,
                    xn = Jt || ln,
                    Pn = Kt || vn,
                    In = Vt || sn,
                    Nn = en || yn,
                    kn = (0, Y.Yh)(),
                    Tn = (0, r.Z)(kn, 2),
                    Sn = Tn[0],
                    Zn = Tn[1],
                    Ln = Zn.data,
                    Cn = Zn.isLoading,
                    On = Zn.isError,
                    _n = Zn.error,
                    jn = (0, d.useMemo)((function() {
                        return null == Ct ? void 0 : Ct.find((function(e) {
                            return e.id === (null == s ? void 0 : s.groupRoleId)
                        }))
                    }), [s, Ct]),
                    Dn = function(e, t) {
                        if ("priceTokens" === t)
                            if ((null == s ? void 0 : s.productType) !== f.Pm.LISTING) te(!0), void 0 !== e && $(void 0);
                            else {
                                var n = "number" != typeof e ? parseFloat(e, 10) : e;
                                te(Number.isInteger(n) && n >= f.zD && n <= f._C)
                            }
                        "displayName" === t && ge(e.length > 0 && e.length <= 64), "description" === t && Te(e.length <= 256), "duration" === t && De(e > 0)
                    };
                (0, d.useEffect)((function() {
                    Dn(W, "priceTokens")
                }), [W]), (0, d.useEffect)((function() {
                    Dn(oe, "displayName")
                }), [oe]), (0, d.useEffect)((function() {
                    Dn(xe, "description")
                }), [xe]), (0, d.useEffect)((function() {
                    Dn(Ce, "duration")
                }), [Ce]);
                var Rn = (0, d.useMemo)((function() {
                        return ((null == jt ? void 0 : jt.filter((function(e) {
                            return e.productType === f.Pm.ROLE
                        }))) || []).map((function(e) {
                            return e.id
                        }))
                    }), [jt]),
                    An = (0, d.useMemo)((function() {
                        return (null == jt ? void 0 : jt.filter((function(e) {
                            return !(null != st && st.includes(e.id)) && e.productType !== f.Pm.ROLE && (!yt || (e.id.toLowerCase().includes(yt.toLowerCase()) || e.displayName.toLowerCase().includes(yt.toLowerCase())))
                        }))) || []
                    }), [jt, st, yt]),
                    Un = (0, d.useMemo)((function() {
                        var e;
                        return (null == s ? void 0 : s.productType) !== f.Pm.LISTING || (null == jt || null === (e = jt.filter((function(e) {
                            return (null == st ? void 0 : st.includes(e.id)) && e.productType === f.Pm.ROLE
                        }))) || void 0 === e ? void 0 : e.length) <= 1
                    }), [jt, st]),
                    Mn = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at;
                        ot(e.map((function(t, n) {
                            var r, a = (null === (r = e.slice(0, n).findLast((function(e) {
                                return e.unitPriceTokens
                            }))) || void 0 === r ? void 0 : r.unitPriceTokens) || W;
                            return parseInt(t.unitPriceTokens, 10) === parseInt(a, 10) ? we(we({}, t), {}, {
                                unitPriceTokens: void 0
                            }) : t
                        })))
                    };
                (0, d.useEffect)(Mn, [W]);
                var Xn = (0, d.useMemo)((function() {
                        return it.length !== st.length || it.some((function(e, t) {
                            return e !== st[t]
                        }))
                    }), [it, st]),
                    Gn = (0, d.useMemo)((function() {
                        return (null == s ? void 0 : s.productType) !== f.Pm.LISTING || st.length > 0 && st.length <= f._1
                    }), [s, st]),
                    Fn = (0, d.useMemo)((function() {
                        return tt.length !== at.length || tt.some((function(e, t) {
                            return e !== at[t]
                        }))
                    }), [tt, at]),
                    zn = (0, d.useMemo)((function() {
                        return at.map((function(e, t) {
                            var n, r = e.quantity,
                                a = e.unitPriceTokens;
                            if (f.PN[t] !== r) return !1;
                            if (void 0 === a) return !0;
                            if (!/^\d*$/.test(a)) return !1;
                            var o = (null === (n = at.slice(0, t).findLast((function(e) {
                                    return e.unitPriceTokens
                                }))) || void 0 === n ? void 0 : n.unitPriceTokens) || W,
                                i = parseInt(o, 10),
                                c = parseInt(a, 10);
                            return c >= f.zD && c <= i
                        }))
                    }), [at, W]),
                    qn = (0, d.useMemo)((function() {
                        return 0 === at.length || zn.every((function(e) {
                            return e
                        }))
                    }), [at, zn]),
                    Jn = (0, d.useMemo)((function() {
                        return !!D || J !== W || ne !== oe || fe !== xe || Se !== Ce || Xe !== ze || Je !== We || He !== Ke || Re !== Me || Fn || Xn
                    }), [D, J, W, ne, oe, fe, xe, Se, Ce, Xe, ze, Je, We, He, Ke, Fn, Re, Me, Xn]),
                    Vn = (0, d.useMemo)((function() {
                        return !Zt && !Ot && !Rt && ee && pe && ke && je && Gn && Un && qn && !Nt && Jn
                    }), [Zt, Ot, Rt, ee, pe, ke, je, Gn, Un, qn, Nt, Jn]),
                    Bn = function() {
                        var e = (0, x.Z)(k().mark((function e() {
                            var t;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!D) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, Sn({
                                            tag: "product",
                                            file: D
                                        });
                                    case 3:
                                        return xt(!0), e.abrupt("return");
                                    case 5:
                                        if (t = we(we(we(we({
                                                ownerId: b
                                            }, !l && {
                                                productType: null == s ? void 0 : s.productType
                                            }), {}, {
                                                displayName: oe,
                                                description: xe,
                                                tags: O
                                            }, (null == s ? void 0 : s.productType) === f.Pm.LISTING && we({
                                                priceTokens: W,
                                                duration: Ce,
                                                durationType: Me,
                                                products: st,
                                                listingVariants: null == at ? void 0 : at.filter((function(e) {
                                                    return !!e.unitPriceTokens
                                                })).map((function(e) {
                                                    var t = e.unitPriceTokens,
                                                        n = (0, w.Z)(e, he);
                                                    return we(we({
                                                        unitPriceTokens: parseInt(t, 10)
                                                    }, n), {}, {
                                                        sellerVariant: !0
                                                    })
                                                }))
                                            }, !l && {
                                                stackable: !0
                                            })), (null == s ? void 0 : s.productType) === f.Pm.ROLE && {
                                                groupAccess: ze,
                                                groupAccessRemove: We
                                            }), (null == s ? void 0 : s.productType) === f.Pm.UDON && {
                                                useForSubscriberList: Ke
                                            }), !l) {
                                            e.next = 18;
                                            break
                                        }
                                        e.t0 = s.productType, e.next = e.t0 === f.Pm.LISTING ? 10 : e.t0 === f.Pm.ROLE || e.t0 === f.Pm.UDON ? 12 : 14;
                                        break;
                                    case 10:
                                        return mn(we({
                                            listingId: s.id
                                        }, t)), e.abrupt("break", 16);
                                    case 12:
                                    case 14:
                                        return $t(we({
                                            productId: s.id
                                        }, t)), e.abrupt("break", 16);
                                    case 16:
                                        e.next = 30;
                                        break;
                                    case 18:
                                        e.t1 = s.productType, e.next = e.t1 === f.Pm.LISTING ? 21 : e.t1 === f.Pm.ROLE || e.t1 === f.Pm.UDON ? 24 : 27;
                                        break;
                                    case 21:
                                        return e.next = 23, rn(t);
                                    case 23:
                                    case 26:
                                    case 29:
                                        return e.abrupt("break", 30);
                                    case 24:
                                        return e.next = 26, Gt(t);
                                    case 27:
                                        return e.next = 29, Gt(t);
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, d.useEffect)((function() {
                    (0, x.Z)(k().mark((function e() {
                        var t;
                        return k().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Cn || null == Ln || !Ln.id || !wt) {
                                        e.next = 27;
                                        break
                                    }
                                    if (t = we(we(we(we(we({
                                            ownerId: b
                                        }, !l && {
                                            productType: null == s ? void 0 : s.productType
                                        }), {}, {
                                            displayName: oe,
                                            description: xe,
                                            tags: O
                                        }, (null == s ? void 0 : s.productType) === f.Pm.LISTING && we({
                                            priceTokens: W,
                                            duration: Ce,
                                            durationType: Me,
                                            products: st,
                                            listingVariants: null == at ? void 0 : at.filter((function(e) {
                                                return !!e.unitPriceTokens
                                            })).map((function(e) {
                                                var t = e.unitPriceTokens,
                                                    n = (0, w.Z)(e, Ee);
                                                return we(we({
                                                    unitPriceTokens: parseInt(t, 10)
                                                }, n), {}, {
                                                    sellerVariant: !0
                                                })
                                            }))
                                        }, !l && {
                                            stackable: !0
                                        })), (null == s ? void 0 : s.productType) === f.Pm.ROLE && {
                                            groupAccess: ze,
                                            groupAccessRemove: We
                                        }), (null == s ? void 0 : s.productType) === f.Pm.UDON && {
                                            useForSubscriberList: Ke
                                        }), {}, {
                                            imageId: Ln.id
                                        }), !l) {
                                        e.next = 14;
                                        break
                                    }
                                    e.t0 = s.productType, e.next = e.t0 === f.Pm.LISTING ? 6 : e.t0 === f.Pm.ROLE || e.t0 === f.Pm.UDON ? 8 : 10;
                                    break;
                                case 6:
                                    return mn(we({
                                        listingId: s.id
                                    }, t)), e.abrupt("break", 12);
                                case 8:
                                case 10:
                                    return $t(we({
                                        productId: s.id
                                    }, t)), e.abrupt("break", 12);
                                case 12:
                                    e.next = 26;
                                    break;
                                case 14:
                                    e.t1 = s.productType, e.next = e.t1 === f.Pm.LISTING ? 17 : e.t1 === f.Pm.ROLE || e.t1 === f.Pm.UDON ? 20 : 23;
                                    break;
                                case 17:
                                    return e.next = 19, rn(t);
                                case 19:
                                    return e.abrupt("break", 26);
                                case 20:
                                    return e.next = 22, Gt(t);
                                case 22:
                                    return e.abrupt("break", 26);
                                case 23:
                                    return e.next = 25, Gt(t);
                                case 25:
                                    return e.abrupt("break", 26);
                                case 26:
                                    xt(!1);
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [Cn, Ln, wt]), (0, d.useEffect)((function() {
                    l || xn || !hn || (m((0, se.d)({
                        title: "Created ".concat(f.G4[s.productType] || s.productType),
                        icon: I.u8,
                        message: "Your ".concat(f.G4[s.productType] || s.productType, " was created successfully"),
                        color: "success",
                        timeout: 8e3
                    })), u && u())
                }), [l, xn, hn]);
                var Wn = hn || En,
                    $n = On || xn || Pn || At;
                return d.createElement(S.Z, {
                    className: "tw-w-full",
                    onSubmit: function(e) {
                        return e.preventDefault()
                    }
                }, d.createElement("fieldset", {
                    disabled: bn || wn,
                    className: "tw-space-y-5"
                }, d.createElement(g.X2, {
                    className: "tw-justify-center"
                }, d.createElement(g.JX, {
                    className: "text-center"
                }, d.createElement(K, {
                    imageType: "product",
                    setImageObject: function(e) {
                        R(e)
                    },
                    setIncompleteSelection: kt,
                    existingImage: q,
                    btnClasses: "tw-border-[#064B5C] tw-bg-[#064B5C] tw-text-[#6AE3F9]"
                }))), d.createElement(Z.Z, null, d.createElement(L.Z, {
                    for: "displayName"
                }, "Display Name"), d.createElement(g.II, {
                    id: "displayName",
                    type: "text",
                    name: "displayName",
                    value: oe,
                    placeholder: "max 64 characters",
                    invalid: !pe,
                    onChange: function(e) {
                        return ie(e.target.value)
                    }
                }), d.createElement(M, {
                    invalid: !0
                }), d.createElement("small", {
                    className: "tw-text-xs ".concat(pe ? "tw-text-[#737372]" : "tw-text-red is-invalid")
                }, oe.length, "/64")), (null == s ? void 0 : s.productType) === f.Pm.LISTING && d.createElement(d.Fragment, null, d.createElement(Z.Z, null, d.createElement(L.Z, {
                    for: "priceTokens"
                }, "Price"), d.createElement(g.II, {
                    id: "priceTokens",
                    type: "number",
                    min: f.zD,
                    max: f._C,
                    name: "priceTokens",
                    value: W,
                    invalid: !ee,
                    onChange: function(e) {
                        return $(e.target.value.slice(0, f._C.toString(10).length))
                    }
                }), d.createElement(M, {
                    invalid: !0
                }, "Must be a whole number between ", d.createElement(g.b5, null), f.zD.toLocaleString(), " and ", d.createElement(g.b5, null), f._C.toLocaleString(), "."), d.createElement("small", {
                    className: "tw-text-xs ".concat(ee ? "tw-text-[#737372]" : "tw-text-red is-invalid")
                }, "Price of this item in VRChat Credits")), d.createElement(g.X2, null, d.createElement(g.JX, null, d.createElement(Z.Z, null, d.createElement(L.Z, {
                    for: "listingVariants"
                }, "Purchase Bundles"), d.createElement("ul", {
                    className: "tw-m-0"
                }, at.map((function(e, t) {
                    var n, r = e.quantity,
                        a = e.unitPriceTokens,
                        o = "listingVariants[".concat(t, "]_unitPriceTokens"),
                        i = (null === (n = at.slice(0, t).findLast((function(e) {
                            return e.unitPriceTokens
                        }))) || void 0 === n ? void 0 : n.unitPriceTokens) || W,
                        c = null != a ? a : i,
                        l = parseInt(W, 10),
                        s = parseInt(i, 10),
                        u = parseInt(c, 10);
                    return d.createElement("li", {
                        key: o
                    }, d.createElement(g.X2, {
                        className: "tw-flex-wrap tw-items-center ".concat(t < at.length ? "tw-mb-2" : "")
                    }, d.createElement("label", {
                        htmlFor: o,
                        className: "tw-whitespace-nowrap"
                    }, "".concat((r * Ce).toLocaleString(), " ").concat(r * Ce == 1 ? Me.replace(/s$/, "") : Me, " at ")), d.createElement(g.X2, {
                        className: "tw-items-center"
                    }, d.createElement(g.II, {
                        id: o,
                        className: "tw-mx-1 tw-flex-initial",
                        style: {
                            display: "inline-block",
                            width: "auto"
                        },
                        type: "number",
                        min: f.zD,
                        max: i,
                        size: f._C.toString(10).length + 1,
                        value: c,
                        invalid: !0 !== zn[t],
                        onChange: function(e) {
                            return function(e) {
                                var t = e.index,
                                    n = e.unitPriceTokens,
                                    r = at.map((function(e) {
                                        return we({}, e)
                                    }));
                                r[t].unitPriceTokens = n, Mn(r)
                            }({
                                index: t,
                                unitPriceTokens: e.target.value.slice(0, f._C.toString(10).length)
                            })
                        }
                    }), d.createElement("label", {
                        htmlFor: o
                    }, d.createElement(g.b5, {
                        className: "tw-mx-0"
                    }), function(e) {
                        var t = e.duration,
                            n = e.durationType;
                        if ("forevers" === n) return null;
                        var r = 1 === t ? n.replace(/s$/, "") : "".concat(t, " ").concat(n);
                        return "/".concat(r)
                    }({
                        duration: Ce,
                        durationType: Me
                    }), ", ")), d.createElement("label", {
                        htmlFor: o
                    }, d.createElement("strong", null, "Total"), " ", d.createElement(g.b5, null), (r * Ce * u || 0).toLocaleString(), u < l && d.createElement(d.Fragment, null, " ", d.createElement(X.Z, {
                        color: "success"
                    }, Math.floor(100 - u / l * 100), "% off")), u === s && d.createElement(d.Fragment, null, " ", d.createElement(X.Z, {
                        className: "tw-text-[#DADADA] tw-bg-gray-500",
                        title: "This bundle is using the same unit price as the ".concat(0 === t ? "standard price" : "previous bundle", ".")
                    }, "Max Price"))), !0 !== zn[t] && d.createElement(d.Fragment, null, d.createElement("br", null), d.createElement(G.Z, {
                        color: "danger"
                    }, "Must be a whole number between ", d.createElement(g.b5, null), f.zD.toLocaleString(), " and the ", 0 === t ? "standard" : "previous bundle", " unit price", !Number.isNaN(s) && d.createElement(d.Fragment, null, " ", "of ", d.createElement(g.b5, null), (s || 0).toLocaleString()), "."))))
                }))), d.createElement("small", {
                    className: "tw-text-xs tw-text-[#737372]"
                }, "Set discounted prices for different purchase bundles. Purchasers always have the option to buy ", Ce, " ", 1 === Ce ? Me.replace(/s$/, "") : Me, " at your standard price."))))), d.createElement(Z.Z, null, d.createElement(L.Z, {
                    for: "description"
                }, "Description"), d.createElement(g.gx, {
                    id: "description",
                    type: "textarea",
                    name: "description",
                    maxLength: 256,
                    value: xe,
                    invalid: !ke,
                    onChange: function(e) {
                        return Pe(e.target.value)
                    }
                }), d.createElement("small", {
                    className: "".concat(ke ? "tw-text-[#737372]" : "tw-text-red is-invalid")
                }, xe.length, "/256 characters"), d.createElement(M, {
                    invalid: !0
                })), (null == s ? void 0 : s.productType) && d.createElement(g.JX, null, d.createElement(L.Z, null, "Type"), d.createElement(L.Z, {
                    className: "tw-font-bold"
                }, f.G4[s.productType] || s.productType)), (null == s ? void 0 : s.productType) === f.Pm.LISTING && d.createElement(d.Fragment, null, d.createElement(g.JX, null, d.createElement(L.Z, null, "Contains Products"), d.createElement("div", {
                    role: "list",
                    "aria-label": "Products List"
                }, null != st && st.length ? st.map((function(e) {
                    return d.createElement(me, {
                        key: e,
                        productId: e
                    }, !Rn.includes(e) && d.createElement(g.zx, {
                        type: "button",
                        warning: !0,
                        onClick: function() {
                            return function(e) {
                                ut(st.filter((function(t) {
                                    return t !== e
                                })))
                            }(e)
                        }
                    }, "Remove"))
                })) : d.createElement("div", null, d.createElement("em", null, "None!"))), d.createElement(g.u_, {
                    isVisible: pt,
                    onClose: function() {
                        return gt(!1)
                    },
                    title: "Add Product",
                    slim: !0
                }, d.createElement(g.JX, {
                    className: "tw-space-y-5"
                }, d.createElement(le.Z, {
                    searchString: ht,
                    placeholder: "Search products..."
                }), d.createElement("div", {
                    role: "list",
                    "aria-label": "Available Products List"
                }, Rt && d.createElement(g.UU, null), Dt && (An.length ? An.map((function(e) {
                    return d.createElement(me, {
                        key: e.id,
                        product: e
                    }, d.createElement(g.zx, {
                        type: "button",
                        onClick: function() {
                            return t = e.id, void(st && Array.isArray(st) ? st.includes(t) || ut(st.concat(t)) : ut([t]));
                            var t
                        }
                    }, "Add"))
                })) : d.createElement("div", null, d.createElement("em", null, "No matching products!")))))), d.createElement("small", {
                    className: "tw-text-xs ".concat(Gn ? "tw-text-[#737372]" : "tw-text-red is-invalid")
                }, "Listings must contain between 1 and ", f._1.toLocaleString(), " items. Additionally, they must contain at least one paid Group Role Product, and if multiple paid Group Role Products are included , they must all belong to the same group."), d.createElement(g.zx, {
                    type: "button",
                    onClick: function() {
                        gt(!0)
                    },
                    className: "tw-mt-3",
                    disabled: At,
                    loading: Rt || Cn || bn || wn
                }, "Add Product"))), l && (null == s ? void 0 : s.productType) !== f.Pm.LISTING && d.createElement(d.Fragment, null, d.createElement(g.JX, null, d.createElement(L.Z, null, "Sold in Listings"), null != s && null !== (t = s.parentListings) && void 0 !== t && t.length ? d.createElement("ul", {
                    className: "tw-font-bold tw-text-[#1FD1ED]"
                }, null == s ? void 0 : s.parentListings.map((function(e) {
                    return d.createElement("li", {
                        key: e
                    }, d.createElement(ye, {
                        listingId: e,
                        className: "tw-text-[#1FD1ED]"
                    }))
                }))) : d.createElement("div", null, d.createElement("em", null, "None!")))), (null == s ? void 0 : s.productType) === f.Pm.UDON && d.createElement(g.JX, null, d.createElement(F.Z, {
                    label: "Owner Names in Udon",
                    value: Ke,
                    defaultChecked: Ke,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        et(t)
                    }
                }), d.createElement(G.Z, null, "If enabled, the display names of this product's owners are available to Udon code in your worlds which reference it. These can then be displayed to the world's visitors on supporter boards, for example.")), (null == s ? void 0 : s.productType) === f.Pm.ROLE && d.createElement(d.Fragment, null, d.createElement(g.JX, {
                    className: "tw-space-y-5"
                }, d.createElement(g.JX, null, d.createElement(F.Z, {
                    label: "Bypass Join Rules",
                    value: "groupAccess",
                    defaultChecked: ze,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        qe(t), t || $e(!1)
                    }
                }), d.createElement(G.Z, null, "If enabled, any user in VRChat can purchase this role and be added to the group, no matter what the group's join rules are.")), d.createElement(g.JX, null, ze && d.createElement(d.Fragment, null, d.createElement(F.Z, {
                    label: "Remove Members After Expiration",
                    value: "groupAccessRemove",
                    defaultChecked: We,
                    onChangeCallback: function(e) {
                        var t = e.checked;
                        $e(t)
                    }
                }), d.createElement(G.Z, null, "If enabled, group members with this role are removed from the group entirely when their subscription ends. Note that this will remove any member whose subscription ends, whether they bought their way in or not.")))), d.createElement(g.X2, {
                    className: "tw-flex-wrap tw-gap-5"
                }, d.createElement(g.JX, {
                    className: "tw-flex-auto"
                }, d.createElement(L.Z, null, ze ? "Grants membership to Group" : "Requires membership of Group"), d.createElement("div", null, d.createElement(p.rU, {
                    className: "tw-text-[#1FD1ED] tw-font-bold",
                    to: "/home/group/".concat(s.groupId)
                }, St ? St.name : s.groupId))), d.createElement(g.JX, {
                    className: "tw-flex-auto"
                }, d.createElement(L.Z, null, "Grants Group Role Product"), d.createElement("div", null, d.createElement(p.rU, {
                    className: "tw-text-[#1FD1ED] tw-font-bold",
                    to: "/home/group/".concat(s.groupId, "/settings/roles/").concat(s.groupRoleId)
                }, jn ? jn.name : s.groupRoleId))))), ($n || Wn) && d.createElement(g.X2, {
                    className: "mx-0"
                }, En && d.createElement(g.qX, {
                    className: "tw-flex-1",
                    type: "success",
                    title: "Success",
                    message: "Updated successfully!"
                }), On && d.createElement(g.qX, {
                    type: "error",
                    className: "tw-flex-1",
                    title: "Image Upload Failed"
                }, null == _n || null === (n = _n.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message, "Please try again."), xn && d.createElement(g.qX, {
                    type: "error",
                    className: "tw-flex-1",
                    title: "Creation Failed"
                }, null == In || null === (a = In.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), Pn && d.createElement(g.qX, {
                    type: "error",
                    className: "tw-flex-1",
                    title: "Update Failed"
                }, null == Nn || null === (o = Nn.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message), At && d.createElement(g.qX, {
                    type: "error",
                    className: "tw-flex-1",
                    title: "Failed to load products"
                }, null == Ut || null === (i = Ut.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message)), d.createElement(g.zx, {
                    onClick: Bn,
                    color: Vn ? "success" : void 0,
                    disabled: !Vn,
                    loading: Cn || bn || wn
                }, l ? "Save Changes" : "Create")))
            };
            xe.propTypes = {
                isEditMode: u().bool,
                existingItem: u().shape({
                    productType: u().oneOf(Object.values(f.Pm)).isRequired
                }).isRequired,
                allProductTags: u().arrayOf(u().string),
                onItemCreated: u().func
            };
            const Pe = xe;
            var Ie = n(42619),
                Ne = n(59545),
                ke = n(41145),
                Te = n(85020),
                Se = n(98175),
                Ze = n(2909),
                Le = n(6811),
                Ce = n(83505),
                Oe = n(30381),
                _e = n.n(Oe),
                je = n(44483),
                De = n(64358),
                Re = ["productId"];
            const Ae = function(e) {
                var t = e.productId,
                    n = (0, w.Z)(e, Re),
                    r = (0, h.lZ)({
                        productId: t
                    }, {
                        skip: !t
                    }).data;
                return d.createElement(p.rU, (0, fe.Z)({}, n, {
                    to: "/home/marketplace/storefront/products#".concat(t)
                }), (null == r ? void 0 : r.displayName) || t)
            };
            const Ue = function(e) {
                var t, n, a, o = e.product,
                    i = e.onUpdate,
                    c = e.allProductTags,
                    l = e.expandByDefault,
                    s = void 0 !== l && l,
                    u = (0, T.I0)(),
                    m = (0, v.IB)().data,
                    E = null == m ? void 0 : m.id,
                    b = (0, d.useState)(null),
                    w = (0, r.Z)(b, 2),
                    P = w[0],
                    I = w[1],
                    N = (0, d.useState)(!1),
                    S = (0, r.Z)(N, 2),
                    Z = S[0],
                    L = S[1],
                    C = (0, d.useState)(!1),
                    O = (0, r.Z)(C, 2),
                    _ = O[0],
                    j = O[1],
                    D = (0, d.useState)(!1),
                    R = (0, r.Z)(D, 2),
                    A = R[0],
                    U = R[1],
                    M = (0, d.useState)(!s),
                    G = (0, r.Z)(M, 2),
                    F = G[0],
                    q = G[1],
                    J = (0, d.useState)(s),
                    V = (0, r.Z)(J, 2),
                    B = V[0],
                    W = V[1];
                d.useEffect((function() {
                    F && s && (q(!1), W(!0))
                }), [s]);
                var $ = (0, d.useRef)(null);
                d.useEffect((function() {
                    B && $.current && ($.current.parentElement.scrollIntoView({
                        block: "center"
                    }), W(!1))
                }), [B, $]);
                var H = (0, Y.Ko)(o.imageId, {
                    skip: !o.imageId
                }).data;
                d.useEffect((function() {
                    I(H ? (0, Q.Tt)({
                        file: H,
                        isImage: !0
                    }) : null)
                }), [H]);
                var K = (0, h.xq)(),
                    ee = (0, r.Z)(K, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = ne.isLoading,
                    ae = ne.isSuccess,
                    oe = ne.isError,
                    ie = ne.error,
                    ce = (0, y.Cb)(),
                    le = (0, r.Z)(ce, 2),
                    de = le[0],
                    me = le[1],
                    pe = me.isLoading,
                    ge = me.isSuccess,
                    fe = me.isError,
                    ve = me.error,
                    he = re || pe,
                    Ee = ae || ge,
                    be = oe || fe,
                    we = ie || ve,
                    xe = (0, y.oy)(),
                    Ce = (0, r.Z)(xe, 2),
                    Oe = Ce[0],
                    Re = Ce[1],
                    Ue = Re.isLoading,
                    Xe = Re.isError,
                    rt = Re.error,
                    at = (0, y.Jr)(),
                    ot = (0, r.Z)(at, 2),
                    it = ot[0],
                    ct = ot[1],
                    lt = ct.isLoading,
                    st = ct.isError,
                    ut = ct.error,
                    dt = o.id,
                    mt = o.active,
                    pt = o.priceTokens,
                    gt = o.displayName,
                    ft = o.description,
                    vt = o.duration,
                    yt = o.durationType,
                    ht = o.created,
                    Et = o.updated,
                    bt = o.tags,
                    wt = o.productType,
                    xt = o.listingType,
                    Pt = o.groupId,
                    It = o.groupRoleId,
                    Nt = o.groupAccess,
                    kt = o.groupAccessRemove,
                    Tt = o.parentListings,
                    St = o.products,
                    Zt = (0, ue.r5)({
                        groupId: Pt
                    }, {
                        skip: wt !== f.Pm.ROLE || !Pt || F
                    }),
                    Lt = Zt.data,
                    Ct = (Zt.isLoading, Zt.isError, Zt.error, (0, ue.Vc)({
                        groupId: Pt
                    }, {
                        skip: wt !== f.Pm.ROLE || !Pt || F
                    })),
                    Ot = Ct.data,
                    _t = (Ct.isLoading, Ct.isError, Ct.error, d.useMemo((function() {
                        return null == Ot ? void 0 : Ot.find((function(e) {
                            return e.id === It
                        }))
                    }), [It, Ot])),
                    jt = function(e) {
                        return _e()(e).format("ll")
                    },
                    Dt = function() {
                        var e = (0, x.Z)(k().mark((function e(t, n) {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopPropagation(), e.next = 3, (0, De.zp)(n)();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, d.useEffect)((function() {
                    !be && Ee && u((0, se.d)({
                        title: "Deleted ".concat(f.G4[wt] || wt),
                        icon: Le.f8,
                        message: "Your ".concat(f.G4[wt] || wt, " was deleted successfully"),
                        color: "success",
                        timeout: 8e3
                    }))
                }), [Ee, be]), d.createElement(Me, {
                    id: dt,
                    "aria-label": "Item Row",
                    tremor: _,
                    onMouseLeave: function() {
                        L(!1)
                    }
                }, d.createElement(Ge, {
                    onClick: function() {
                        return q(!F)
                    }
                }, d.createElement(We, null, d.createElement($e, null, d.createElement(He, null, d.createElement(Qe, null, gt), d.createElement("small", null, wt && d.createElement(X.Z, {
                    color: "primary",
                    className: "mx-1 text-dark"
                }, f.G4[wt] || wt), wt === f.Pm.LISTING && d.createElement(X.Z, {
                    color: mt ? "success" : "secondary",
                    className: "mx-1 text-dark"
                }, mt ? "Active" : "Inactive"))), wt === f.Pm.LISTING && pt && d.createElement(Ye, null, d.createElement("strong", null, "Price"), " ", d.createElement(g.b5, null), pt.toLocaleString(), "forevers" === yt ? "" : "/".concat(1 === vt ? yt.replace(/s$/, "") : "".concat(vt, " ").concat(yt))), !(null == bt || !bt.length) && d.createElement(Ke, null, null == bt ? void 0 : bt.map((function(e) {
                    return d.createElement(je.Z, {
                        key: e,
                        tag: e,
                        preventSearch: !0
                    })
                })))), d.createElement(tt, {
                    sm: "1",
                    onClick: function(e) {
                        return e.stopPropagation()
                    }
                }, d.createElement(Fe, {
                    "aria-label": "Action Button Shelf"
                }, d.createElement(Ve, null, (wt === f.Pm.UDON || wt === f.Pm.LISTING) && d.createElement(g.zx, {
                    "aria-label": "Copy ID",
                    title: "copy product ID",
                    onClick: function(e) {
                        return Dt(e, dt)
                    },
                    size: "sm",
                    className: "btn-copy"
                }, d.createElement(g.$1, {
                    icon: Ze.kZ,
                    className: "me-2"
                }), "ID"), d.createElement(g.zx, {
                    "aria-label": "Edit Item",
                    title: "edit item",
                    onClick: function() {
                        return U(!0)
                    },
                    size: "sm",
                    className: "btn-edit tw-ml-2",
                    warning: !0
                }, d.createElement(g.$1, {
                    icon: Se.Xc,
                    className: "me-2"
                }), " Edit"), d.createElement(g.u_, {
                    title: "Edit ".concat(wt === f.Pm.UDON ? "Udon Product" : wt),
                    isVisible: A,
                    onCloseFinished: function() {
                        return U(!1)
                    },
                    slim: !0,
                    width: "100%"
                }, d.createElement(Pe, {
                    updateProduct: i,
                    existingItem: o,
                    allProductTags: c,
                    isEditMode: !0
                })))))), d.createElement(et, {
                    sm: "1",
                    onClick: function() {
                        return q(!F)
                    }
                }, d.createElement(g.$1, {
                    icon: F ? Te.A3 : ke.pt
                }))), !F && d.createElement(ze, {
                    ref: $
                }, d.createElement(qe, null, d.createElement(g.X2, null, d.createElement(g.JX, {
                    className: "text-center"
                }, d.createElement(Be, {
                    className: "drop-shadow"
                }, P ? d.createElement("img", {
                    alt: gt,
                    src: P,
                    width: "100%",
                    className: "text-center"
                }) : d.createElement("div", null, d.createElement(g.$1, {
                    icon: z.Vm,
                    size: "10x",
                    className: "mt-3"
                }))))), d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Created"), " ", jt(ht)), d.createElement(g.X2, null, d.createElement("strong", null, "Updated"), " ", jt(Et))), d.createElement(Je, null, d.createElement(g.JX, null, d.createElement("strong", null, "Description"), d.createElement(g.JX, {
                    className: "description-box"
                }, ft || d.createElement("em", null, "(No Description)"))), !(null == bt || !bt.length) && d.createElement(g.X2, {
                    className: "mt-2"
                }, null == bt ? void 0 : bt.map((function(e) {
                    return d.createElement(je.Z, {
                        key: e,
                        tag: e,
                        preventSearch: !0
                    })
                }))), wt && d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Product Type"), " ", f.G4[wt] || wt), wt === f.Pm.LISTING ? d.createElement(d.Fragment, null, d.createElement(g.JX, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Contains Products"), null != St && St.length ? d.createElement("ul", {
                    style: {
                        paddingLeft: "1.5rem",
                        margin: 0
                    }
                }, St.map((function(e) {
                    return d.createElement("li", {
                        key: e
                    }, d.createElement(Ae, {
                        productId: e
                    }))
                }))) : d.createElement("em", null, "None!"))) : d.createElement(d.Fragment, null, d.createElement(g.JX, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Sold in Listings"), null != Tt && Tt.length ? d.createElement("ul", {
                    style: {
                        paddingLeft: "1.5rem",
                        margin: 0
                    }
                }, Tt.map((function(e) {
                    return d.createElement("li", {
                        key: e
                    }, d.createElement(ye, {
                        listingId: e
                    }))
                }))) : d.createElement("em", null, "None!"))), wt === f.Pm.ROLE && d.createElement(d.Fragment, null, d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Bypass Join Rules"), " ", Nt ? "Yes" : "No"), d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, Nt ? "Grants membership to Group" : "Requires membership of Group"), " ", d.createElement(p.rU, {
                    to: "/home/group/".concat(Pt)
                }, (null == Lt ? void 0 : Lt.name) || Pt)), d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, "Grants Group Role Product"), " ", d.createElement(p.rU, {
                    to: "/home/group/".concat(Pt, "/settings/roles/").concat(It)
                }, (null == _t ? void 0 : _t.name) || It)), Nt && d.createElement(g.X2, {
                    className: "mt-2"
                }, d.createElement("strong", null, "After Expiration, Members"), " ", kt ? "are removed from group" : "stay in group")), Xe && d.createElement(g.qX, {
                    type: "error",
                    title: "Error deleting"
                }, null == rt || null === (t = rt.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), st && d.createElement(g.qX, {
                    type: "error",
                    title: "Error deleting"
                }, null == ut || null === (n = ut.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message), be && d.createElement(g.qX, {
                    type: "error",
                    title: "Error deleting"
                }, null == we || null === (a = we.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message), (wt === f.Pm.LISTING || wt !== f.Pm.ROLE && !mt) && d.createElement(g.X2, {
                    className: "mt-2"
                }, wt === f.Pm.LISTING && d.createElement("div", {
                    style: {
                        marginRight: "0.4rem"
                    }
                }, mt ? d.createElement(g.zx, {
                    size: "small",
                    color: "secondary",
                    outline: !0,
                    onClick: function(e) {
                        e.stopPropagation(), it({
                            listingId: dt,
                            ownerId: E
                        })
                    },
                    disabled: lt,
                    loading: lt
                }, "Deactivate") : d.createElement(g.zx, {
                    size: "small",
                    color: "success",
                    onClick: function(e) {
                        e.stopPropagation(), Oe({
                            listingId: dt,
                            ownerId: E
                        })
                    },
                    disabled: Ue,
                    loading: Ue
                }, "Activate")), wt !== f.Pm.ROLE && !mt && "subscription" !== xt && d.createElement(g.zx, {
                    "aria-label": "Delete Item",
                    id: "deleteButton",
                    color: "danger",
                    onClick: function() {
                        return Z ? null : L(!0)
                    },
                    onMouseLeave: function() {
                        return L(!1)
                    },
                    disabled: he,
                    loading: he
                }, d.createElement(g.$1, {
                    icon: Z ? Ne.NB : Ie.$,
                    onClick: function() {
                        return L(!Z)
                    },
                    title: Z ? "Cancel" : "Delete"
                }), d.createElement(nt, {
                    icon: Ie.$,
                    hidden: !Z,
                    onClick: function(e) {
                        if (e.stopPropagation(), L(!1), wt === f.Pm.LISTING) de({
                            listingId: dt,
                            ownerId: E
                        });
                        else te({
                            productId: dt,
                            ownerId: E
                        })
                    },
                    onMouseEnter: function() {
                        return j(!0)
                    },
                    onMouseLeave: function() {
                        return j(!1)
                    },
                    title: "Confirm Delete"
                }))))))
            };
            var Me = (0, a.Z)(g.JX, {
                    target: "eg2jtco16"
                })("margin:0.4rem 0;background-color:#181b1f;border:3px solid #252a30;transition:border-color 0.2s ease-in-out;border-radius:8px;animation:", (function(e) {
                    return e.tremor ? "".concat(Xe, " 180ms infinite") : "none"
                }), ";animation-timing-function:linear;&:hover{border-color:#054d5e;}"),
                Xe = (0, Ce.F4)({
                    name: "yh68b2",
                    styles: "0%{transform:rotate(0.2deg);}50%{transform:rotate(-0.2deg);}100%{transform:rotate(0.2deg);}"
                }),
                Ge = (0, a.Z)(g.X2, {
                    target: "eg2jtco15"
                })({
                    name: "142ll",
                    styles: "padding:0.4rem 0.8rem;cursor:pointer;flex-grow:1;align-items:center;justify-content:space-between"
                }),
                Fe = (0, a.Z)("div", {
                    target: "eg2jtco14"
                })({
                    name: "158icaa",
                    styles: "margin-left:4px"
                }),
                ze = (0, a.Z)(g.X2, {
                    target: "eg2jtco13"
                })("flex-wrap:wrap;justify-content:center;padding:0.4rem 0;border-top:3px solid #252a30;transition:border-color 0.2s ease-in-out;", Me, ":hover &{border-color:#054d5e;}"),
                qe = (0, a.Z)(g.JX, {
                    target: "eg2jtco12"
                })({
                    name: "i3uzb1",
                    styles: "padding:0 0.8rem"
                }),
                Je = (0, a.Z)(qe, {
                    target: "eg2jtco11"
                })({
                    name: "10scdj3",
                    styles: "flex:1 1 300px;max-width:100%;overflow-wrap:break-word"
                }),
                Ve = (0, a.Z)("div", {
                    target: "eg2jtco10"
                })({
                    name: "19ydakm",
                    styles: "display:flex;flex-flow:row;button{padding:0 4px;}"
                }),
                Be = (0, a.Z)("div", {
                    target: "eg2jtco9"
                })({
                    name: "1r5uz0t",
                    styles: "background-color:darkgray;padding:5px;border-radius:7px;height:210px;width:210px;margin:auto;&>img{background-color:gray;border-radius:4px;}"
                }),
                We = (0, a.Z)(g.X2, {
                    target: "eg2jtco8"
                })({
                    name: "185gra8",
                    styles: "flex-shrink:1;flex-grow:1;align-items:center;min-width:10em"
                }),
                $e = (0, a.Z)(We, {
                    target: "eg2jtco7"
                })({
                    name: "1qemjat",
                    styles: "flex-wrap:wrap"
                }),
                He = (0, a.Z)("div", {
                    target: "eg2jtco6"
                })({
                    name: "1fpjb4v",
                    styles: "flex:1 0 300px"
                }),
                Qe = (0, a.Z)("strong", {
                    target: "eg2jtco5"
                })({
                    name: "o5adbf",
                    styles: "word-break:break-word;hyphens:auto"
                }),
                Ye = (0, a.Z)("div", {
                    target: "eg2jtco4"
                })({
                    name: "1xgrsxi",
                    styles: "flex:0.5 2 150px"
                }),
                Ke = (0, a.Z)(g.X2, {
                    target: "eg2jtco3"
                })({
                    name: "3s6n6p",
                    styles: "flex:1 0 150px;flex-wrap:wrap;align-items:center"
                }),
                et = (0, a.Z)(g.JX, {
                    target: "eg2jtco2"
                })({
                    name: "1eweacf",
                    styles: "flex-shrink:0;flex-grow:0;width:16px;margin-left:10px;text-align:right"
                }),
                tt = (0, a.Z)(g.JX, {
                    target: "eg2jtco1"
                })({
                    name: "6g5n01",
                    styles: "flex-shrink:0;flex-grow:0;justify-content:stretch;text-align:right;word-break:nowrap"
                }),
                nt = (0, a.Z)(g.$1, {
                    target: "eg2jtco0"
                })({
                    name: "1qkltea",
                    styles: "margin-left:5px"
                });
            var rt = function(e) {
                var t, n = e.type,
                    a = d.useState(""),
                    s = (0, r.Z)(a, 2),
                    u = s[0],
                    p = s[1],
                    E = d.useState(!1),
                    w = (0, r.Z)(E, 2),
                    x = w[0],
                    P = w[1],
                    I = (0, v.IB)().data,
                    N = null == I ? void 0 : I.id,
                    k = (0, h.rP)({
                        userId: N
                    }, {
                        skip: !N || "product" !== n,
                        refetchOnMountOrArgChange: !0
                    }),
                    T = k.data,
                    S = k.isLoading,
                    Z = k.isError,
                    L = k.error,
                    C = k.refetch,
                    O = (0, y.Ul)({
                        userId: N
                    }, {
                        skip: !N || "listing" !== n,
                        refetchOnMountOrArgChange: !0
                    }),
                    _ = O.data,
                    j = O.isLoading,
                    D = O.isError,
                    R = O.error,
                    A = O.refetch,
                    U = ("product" === n ? T : _) || [],
                    M = S || j,
                    X = Z || D,
                    G = L || R,
                    F = (0, m.TH)(),
                    z = d.useState(null),
                    q = (0, r.Z)(z, 2),
                    J = q[0],
                    V = q[1];
                d.useEffect((function() {
                    var e = F.hash.slice(1);
                    e.startsWith("prod_") && V(e)
                }), [F]);
                var B = function() {
                        P(!x)
                    },
                    W = d.useMemo((function() {
                        var e = ["displayName", "id", "created"],
                            t = u.toLowerCase();
                        return U.filter((function(n) {
                            return e.find((function(e) {
                                return n[e].toLowerCase().includes(t)
                            }))
                        }))
                    }), [u, U]),
                    $ = "product" === n ? f.Pm.UDON : f.Pm.LISTING;
                return d.createElement(d.Fragment, null, X && d.createElement(g.qX, {
                    type: "error",
                    title: "Error loading data"
                }, null == G || null === (t = G.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message), d.createElement(g.X2, {
                    className: "w-100 flex-column flex-sm-row mb-1",
                    role: "group",
                    "aria-label": "Search Bar"
                }, d.createElement(ot, {
                    type: "text",
                    id: "search-product-list",
                    placeholder: "Search by name or transaction ID",
                    className: "me-md-1",
                    onChange: function(e) {
                        var t = e.target.value;
                        return p(void 0 === t ? "" : t)
                    },
                    value: u
                }), $ !== f.Pm.LISTING && d.createElement(d.Fragment, null, d.createElement(g.zx, {
                    "aria-label": "Create ".concat(f.G4[$]),
                    onClick: B,
                    className: "info-button text-white me-md-1"
                }, d.createElement(g.$1, {
                    icon: i.r8,
                    color: "white",
                    size: "1x"
                }), " Create ", f.G4[$]), d.createElement(g.u_, {
                    title: "Create ".concat(f.G4[$]),
                    onCloseFinished: function() {
                        return P(!1)
                    },
                    isVisible: x,
                    toggle: B,
                    width: "100%",
                    slim: !0
                }, d.createElement(Pe, {
                    existingItem: {
                        productType: $
                    },
                    onItemCreated: function() {
                        P(!1)
                    },
                    allProductTags: []
                }))), d.createElement(g.zx, {
                    "aria-label": "Refresh List",
                    onClick: function() {
                        switch (n) {
                            case "product":
                                C();
                                break;
                            case "listing":
                                A();
                                break;
                            default:
                                console.error("Invalid product type in ItemListComponent")
                        }
                    }
                }, d.createElement(g.$1, {
                    icon: o.QD
                }))), M && d.createElement(g.UU, {
                    className: "mt-2",
                    radius: "8",
                    height: "12rem"
                }), !M && (null == U ? void 0 : U.length) > 0 && d.createElement("div", null, W.map((function(e) {
                    return d.createElement(Ue, {
                        key: e.id,
                        product: e,
                        allProductTags: [],
                        expandByDefault: J && e.id === J
                    })
                }))), !M && 0 === U.length && ("product" === n ? d.createElement("div", {
                    className: "tw-flex tw-justify-center tw-items-center"
                }, d.createElement("div", {
                    className: "tw-my-24"
                }, d.createElement("div", {
                    className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-max-w-[500px]"
                }, d.createElement(g.$1, {
                    icon: c.G1,
                    size: "lg",
                    width: 60,
                    className: "tw-mb-6"
                }), d.createElement("h4", {
                    className: "tw-mb-2"
                }, "You haven't created any products yet."), d.createElement("div", {
                    className: "tw-my-6"
                }, d.createElement("span", {
                    className: "tw-text-gray-500"
                }, "Products are individual items that you can sell as part of Listings. VRChat currently supports two types of products:")), d.createElement("div", {
                    className: "tw-my-6"
                }, d.createElement("span", {
                    className: "tw-text-white-700"
                }, "Paid roles "), d.createElement("span", {
                    className: "tw-text-gray-500"
                }, "allow you to give special group permissions to your supporters, such as access to group instances or announcements. When you create a paid role in your own group, a listing with a paid role products is automatically created."), d.createElement(b.AN, {
                    className: "tw-bg-[#064b5c05] tw-border-transparent tw-rounded-none",
                    href: "https://creators.vrchat.com/economy/Products/paid-roles",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more")), d.createElement("div", {
                    className: "tw-my-6"
                }, d.createElement("span", {
                    className: "tw-text-white-700"
                }, "Udon products "), d.createElement("span", {
                    className: "tw-text-gray-500"
                }, "can be used in VRChat worlds to give your subscribers exclusive rewards. They require some world-building experience. Listings and worlds may contain several Udon products."), d.createElement(b.AN, {
                    className: "tw-bg-[#064b5c05] tw-border-transparent tw-rounded-none",
                    href: "https://creators.vrchat.com/economy/Products/udon",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Learn more"))))) : d.createElement("div", {
                    className: "tw-flex tw-justify-center tw-items-center tw-h-96"
                }, d.createElement("div", {
                    className: "tw-flex-auto tw-flex-wrap tw-flex-row tw-text-center tw-max-w-[500px]"
                }, d.createElement("div", null, d.createElement(g.$1, {
                    icon: l.LE,
                    size: "lg",
                    width: 60,
                    className: "tw-mb-6"
                }), d.createElement("h4", {
                    className: "tw-mb-2"
                }, "You haven't created any listings yet."), d.createElement("div", {
                    className: "tw-mb-4"
                }, d.createElement("span", {
                    className: "tw-text-gray-500"
                }, "Listings contain one or more products. By selling a listing to a user, they gain access to all products in that listing. Create a paid role in one of your groups. After creating your listing, you can customize it by returning to this page. To create Udon products open My Products."))), d.createElement("div", {
                    className: "tw-flex tw-justify-center"
                }, d.createElement(it, {
                    className: "tw-flex-initial tw-min-w-[64px]",
                    to: "../products"
                }, d.createElement(g.$1, {
                    icon: c.G1,
                    className: "tw-pr-2"
                }), "My Products"))))))
            };
            rt.propTypes = {
                type: u().oneOf(["product", "listing"])
            };
            const at = rt;
            var ot = (0, a.Z)(g.II, {
                    target: "ebnujzw1"
                })({
                    name: "1pnvmye",
                    styles: "@media screen and (min-width: 576px){flex:6;}"
                }),
                it = (0, a.Z)(E.Sn.withComponent(p.rU, {
                    target: "ebnujzw2"
                }), {
                    target: "ebnujzw0"
                })({
                    name: "x0zk7b",
                    styles: "flex:0 0 auto;&:hover{text-decoration:none;}"
                })
        },
        28213: (e, t, n) => {
            n.d(t, {
                w: () => Z
            });
            var r = n(95819),
                a = n(92728),
                o = n(76409),
                i = n(51193),
                c = n(68335),
                l = n(54228),
                s = n(85322),
                u = n(54326),
                d = n(68055),
                m = n(17726),
                p = n(16995),
                g = n(66007),
                f = n(59895),
                v = n(42137),
                y = n(92512),
                h = n(23778),
                E = n(88673),
                b = n(26128),
                w = n(47420),
                x = n(29167),
                P = n(92221),
                I = n(88302),
                N = n(46450),
                k = n(609),
                T = n(84176),
                S = n(75213),
                Z = [{
                    tag: "admin_moderator",
                    icon: n(2335).fG,
                    description: "VRChat Team"
                }, {
                    tag: "admin_scripting_access",
                    icon: S.dT,
                    description: "Scripting Access"
                }, {
                    tag: "admin_avatar_access",
                    icon: T.DD,
                    description: "Forced Avatar Access"
                }, {
                    tag: "admin_world_access",
                    icon: T.DD,
                    description: "Forced World Access"
                }, {
                    tag: "admin_lock_tags",
                    icon: k.by,
                    description: "Locked Tags"
                }, {
                    tag: "admin_lock_level",
                    icon: k.by,
                    description: "Locked Level"
                }, {
                    tag: "admin_can_grant_licenses",
                    icon: N.mG,
                    description: "Can Grant Licenses"
                }, {
                    tag: "system_world_access",
                    icon: I.kl,
                    description: "SDK World Access"
                }, {
                    tag: "system_avatar_access",
                    icon: I.kl,
                    description: "SDK Avatar Access"
                }, {
                    tag: "system_feedback_access",
                    icon: o.Ac,
                    description: "Feedback Access"
                }, {
                    tag: "system_trust_basic",
                    icon: P.rv,
                    description: "New User"
                }, {
                    tag: "system_trust_known",
                    icon: x.C7,
                    description: "User"
                }, {
                    tag: "system_trust_trusted",
                    icon: w.yS,
                    description: "Known User"
                }, {
                    tag: "system_trust_veteran",
                    icon: b.jA,
                    description: "Trusted User"
                }, {
                    tag: "system_probable_troll",
                    icon: E.I7,
                    description: "Probable Nuisance"
                }, {
                    tag: "system_troll",
                    icon: h.c7,
                    description: "Nuisance"
                }, {
                    tag: "system_supporter",
                    icon: y.m6,
                    description: "VRC+ Subscriber"
                }, {
                    tag: "system_early_adopter",
                    icon: v.SZ,
                    description: "Early VRC+ Adopter"
                }, {
                    tag: "admin_approved",
                    icon: f.u8,
                    description: "Approved"
                }, {
                    tag: "admin_featured",
                    icon: a.QY,
                    description: "Featured"
                }, {
                    tag: "admin_community_spotlight",
                    icon: a.QY,
                    description: "Community Spotlight"
                }, {
                    tag: "admin_avatar_world",
                    icon: g.KC,
                    description: "Avatar World"
                }, {
                    tag: "admin_hidden",
                    icon: p.Ps,
                    description: "Won't Appear in Search"
                }, {
                    tag: "admin_hide_active",
                    icon: p.Ps,
                    description: "Won't Appear in Active"
                }, {
                    tag: "admin_hide_new",
                    icon: p.Ps,
                    description: "Won't Appear in New"
                }, {
                    tag: "admin_hide_popular",
                    icon: p.Ps,
                    description: "Won't Appear in Popular"
                }, {
                    tag: "system_labs",
                    icon: m.jZ,
                    description: "System Labs"
                }, {
                    tag: "system_approved",
                    icon: d.LE,
                    description: "Approved"
                }, {
                    tag: "system_updated_recently",
                    icon: u.IV,
                    description: "Updated Recently"
                }, {
                    tag: "system_created_recently",
                    icon: s.fT,
                    description: "Created Recently"
                }, {
                    tag: "system_published_recently",
                    icon: s.fT,
                    description: "Published Recently"
                }, {
                    tag: "admin_halloween_2018",
                    icon: i.dC,
                    description: "Halloween 2018"
                }, {
                    tag: "admin_halloween_2019",
                    icon: i.dC,
                    description: "Halloween 2019"
                }, {
                    tag: "admin_christmas_2018",
                    icon: l.mb,
                    description: "Christmas 2018"
                }, {
                    tag: "admin_christmas_2019",
                    icon: l.mb,
                    description: "Christmas 2019"
                }, {
                    tag: "admin_spookality_2020_winner",
                    icon: i.dC,
                    description: "Spookality 2020 Winner"
                }, {
                    tag: "admin_vket_summer_2023",
                    icon: c.vJ,
                    description: "Vket 2023 Summer"
                }, {
                    tag: "admin_eternally_cursed",
                    icon: i.dC,
                    description: "Eternally Cursed"
                }, {
                    tag: "admin_canny_access",
                    icon: o.Ac,
                    description: "Canny Access Override"
                }, {
                    tag: "admin_spotlight_pc",
                    icon: a.QY,
                    description: "Spotlight: PC"
                }, {
                    tag: "admin_spotlight_quest",
                    icon: a.QY,
                    description: "Spotlight: Quest"
                }, {
                    tag: "admin_spotlight_xplat",
                    icon: a.QY,
                    description: "Spotlight: Cross-Platform"
                }, {
                    tag: "admin_internal_world",
                    icon: r.U,
                    description: "Internal World"
                }]
        },
        67978: (e, t, n) => {
            n.d(t, {
                lZ: () => u,
                qX: () => d,
                rP: () => l,
                wE: () => m,
                x3: () => s,
                xq: () => p
            });
            var r = n(15861),
                a = n(42138),
                o = n(64687),
                i = n.n(o),
                c = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.n,
                                        r = void 0 === n ? 100 : n,
                                        a = e.offset,
                                        o = void 0 === a ? 0 : a,
                                        i = e.archived;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: {
                                            n: r,
                                            offset: o,
                                            archived: i
                                        }
                                    }
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(r)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (t = (0, r.Z)(i().mark((function e(t, n, r, o) {
                                    var c, l, s, u, d;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                c = t.userId, l = t.archived, s = [], u = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "user/".concat(c, "/products"),
                                                    params: {
                                                        archived: l,
                                                        n: 100,
                                                        offset: u
                                                    }
                                                });
                                            case 6:
                                                if (!(d = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: d.error
                                                });
                                            case 9:
                                                if (!(d.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return s.push.apply(s, (0, a.Z)(d.data)), u += 100, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: s
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, n, r, a) {
                                    return t.apply(this, arguments)
                                }),
                                providesTags: function(e, t, n) {
                                    var r = n.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "LIST:".concat(r)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var t = e.listingId;
                                    return "listing/".concat(t, "/products")
                                },
                                providesTags: function(e, t, n) {
                                    var r = n.listingId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: r
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var t = e.productId;
                                    return "products/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Product",
                                        id: n.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "products",
                                        method: "POST",
                                        body: {
                                            displayName: e.displayName,
                                            description: e.description,
                                            tags: e.tags,
                                            imageId: e.imageId,
                                            productType: e.productType,
                                            useForSubscriberList: e.useForSubscriberList,
                                            generateListing: e.generateListing,
                                            priceTokens: e.priceTokens,
                                            duration: e.duration,
                                            durationType: e.durationType,
                                            permanent: e.permanent,
                                            instant: e.instant
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.ownerId;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(r)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(r)
                                    }])
                                }
                            }),
                            updateProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        n = e.displayName,
                                        r = e.description,
                                        a = e.tags,
                                        o = e.imageId,
                                        i = e.groupAccess,
                                        c = e.groupAccessRemove,
                                        l = e.useForSubscriberList;
                                    return {
                                        url: "products/".concat(t),
                                        method: "PUT",
                                        body: {
                                            displayName: n,
                                            description: r,
                                            tags: a,
                                            imageId: o,
                                            groupAccess: i,
                                            groupAccessRemove: c,
                                            useForSubscriberList: l
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId,
                                        a = n.ownerId;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, {
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(a)
                                    }]
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        n = e.force;
                                    return {
                                        url: "products/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: n
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var r = n.productId,
                                        a = n.ownerId;
                                    return [{
                                        type: "Product",
                                        id: r
                                    }, {
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(a)
                                    }, {
                                        type: "UserProducts",
                                        id: "LIST:".concat(a)
                                    }]
                                }
                            })
                        };
                        var t
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                l = c.useGetUserProductsQuery,
                s = c.useGetAllUserProductsQuery,
                u = (c.useGetListingProductsQuery, c.useGetProductQuery),
                d = c.useCreateProductMutation,
                m = c.useUpdateProductMutation,
                p = c.useDeleteProductMutation
        },
        21442: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(67294),
                a = n(45697),
                o = n.n(a),
                i = n(22040);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }
            var l = ["className", "cssModule", "tag", "innerRef"];

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, m(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var a = f(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === c(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return g(e)
                    }(this, n)
                }
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }
            var v = {
                    children: o().node,
                    tag: i.iC,
                    innerRef: o().oneOfType([o().object, o().func, o().string]),
                    className: o().string,
                    cssModule: o().object
                },
                y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && m(e, t)
                    }(c, e);
                    var t, n, a, o = p(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = o.call(this, e)).getRef = t.getRef.bind(g(t)), t.submit = t.submit.bind(g(t)), t
                    }
                    return t = c, (n = [{
                        key: "getRef",
                        value: function(e) {
                            this.props.innerRef && this.props.innerRef(e), this.ref = e
                        }
                    }, {
                        key: "submit",
                        value: function() {
                            this.ref && this.ref.submit()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.className,
                                n = e.cssModule,
                                a = e.tag,
                                o = void 0 === a ? "form" : a,
                                c = e.innerRef,
                                d = u(e, l),
                                m = (0, i.mx)(t, n);
                            return r.createElement(o, s({}, d, {
                                ref: c,
                                className: m
                            }))
                        }
                    }]) && d(t.prototype, n), a && d(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(r.Component);
            y.propTypes = v;
            const h = y
        },
        89163: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(67294),
                a = n(45697),
                o = n.n(a),
                i = n(94184),
                c = n.n(i),
                l = n(22040),
                s = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag", "switch"];

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var m = {
                children: o().node,
                row: o().bool,
                check: o().bool,
                switch: o().bool,
                inline: o().bool,
                floating: o().bool,
                disabled: o().bool,
                tag: l.iC,
                className: o().string,
                cssModule: o().object
            };

            function p(e) {
                var t = e.className,
                    n = e.cssModule,
                    a = e.row,
                    o = e.disabled,
                    i = e.check,
                    m = e.inline,
                    p = e.floating,
                    g = e.tag,
                    f = void 0 === g ? "div" : g,
                    v = e.switch,
                    y = d(e, s),
                    h = i || v,
                    E = (0, l.mx)(c()(t, !!a && "row", h ? "form-check" : "mb-3", !!v && "form-switch", !(!h || !m) && "form-check-inline", !(!h || !o) && "disabled", p && "form-floating"), n);
                return "fieldset" === f && (y.disabled = o), r.createElement(f, u({}, y, {
                    className: E
                }))
            }
            p.propTypes = m;
            const g = p
        },
        30776: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(67294),
                a = n(45697),
                o = n.n(a),
                i = n(94184),
                c = n.n(i),
                l = n(22040),
                s = ["className", "cssModule", "inline", "color", "tag"];

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var m = {
                children: o().node,
                inline: o().bool,
                tag: l.iC,
                color: o().string,
                className: o().string,
                cssModule: o().object
            };

            function p(e) {
                var t = e.className,
                    n = e.cssModule,
                    a = e.inline,
                    o = e.color,
                    i = void 0 === o ? "muted" : o,
                    m = e.tag,
                    p = void 0 === m ? "small" : m,
                    g = d(e, s),
                    f = (0, l.mx)(c()(t, !a && "form-text", !!i && "text-".concat(i)), n);
                return r.createElement(p, u({}, g, {
                    className: f
                }))
            }
            p.propTypes = m;
            const g = p
        }
    }
]);
//# sourceMappingURL=37a1cf6b9054ac05fec52f7eb2e289487d589f18345da1c9519a99a731457578.js.map