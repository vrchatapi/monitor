"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4058, 1810], {
        64537: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var a, r = n(87462),
                c = n(4942),
                o = n(15861),
                l = n(45987),
                i = n(2909),
                s = n(7747),
                m = n(53359),
                d = n(64687),
                u = n.n(d),
                h = n(67294),
                p = n(32981),
                f = n(64258),
                g = n(86646),
                b = n(50048),
                v = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = !(null === (a = navigator.clipboard) || void 0 === a || !a.writeText),
                N = !!navigator.canShare;
            const y = function(e) {
                var t = e.url,
                    n = e.text,
                    a = e.title,
                    c = e.files,
                    d = e.style,
                    E = e.shareLabel,
                    y = void 0 === E ? "Share" : E,
                    k = e.copyLabel,
                    I = void 0 === k ? "Copy" : k,
                    Z = e.displayLabel,
                    L = void 0 !== Z && Z,
                    T = (0, l.Z)(e, v),
                    C = (0, p.I0)(),
                    O = h.useMemo((function() {
                        return N && navigator.canShare({
                            url: t,
                            text: n,
                            title: a,
                            files: c
                        })
                    }), [N, t, n, a, c]);
                if (!x && !N) return null;
                var P = function() {
                        var e = (0, o.Z)(u().mark((function e() {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([a, n, t].filter(Boolean).join("\n"));
                                    case 2:
                                        C((0, f.d)({
                                            title: "Copied to clipboard",
                                            icon: i.kZ,
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    j = function() {
                        var e = (0, o.Z)(u().mark((function e(r) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.preventDefault(), !O) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, navigator.share({
                                            url: t,
                                            text: n,
                                            title: a,
                                            files: c
                                        });
                                    case 5:
                                        e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(2), !(e.t0 instanceof DOMException && "InvalidStateError" === e.t0.name)) {
                                            e.next = 14;
                                            break
                                        }
                                        C((0, f.d)({
                                            title: "Something went wrong",
                                            icon: m.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), P(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        P();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    A = O ? y : I,
                    S = O ? s.Dr : i.kZ;
                return h.createElement(b.ZP, (0, r.Z)({
                    neutral: !0,
                    style: w({
                        lineHeight: "1"
                    }, d)
                }, T, {
                    title: A,
                    onClick: j
                }), h.createElement(g.Z, {
                    icon: S,
                    className: L && "tw-mr-1"
                }), L && A)
            }
        },
        81810: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => o
            });
            var a = n(67294),
                r = (n(32981), n(79655)),
                c = n(85533);
            const o = function() {
                var e = ["＞﹏＜", "(っ °Д °;)っ", "（＞人＜；）", "≡(▔﹏▔)≡", "~(>_<。)＼", ".·´¯`(>▂<)´¯`·.", "⊙﹏⊙∥", "/(ㄒoㄒ)/~~", "::>_<::", "ඞ", "(；′⌒`)", "(┬┬﹏┬┬)", "ಥ_ಥ", "X﹏X", "(T_T)", "ಥ╭╮ಥ", "UwU", "UnU", "¯\\_(ツ)_/¯", "(・へ・)", "(个_个)", "༶ඬ༝ඬ༶"];
                return a.createElement("div", {
                    className: "m-5 text-center"
                }, a.createElement(c.Z, null, "Instance not found"), a.createElement("h2", null, "This instance does not exist!"), a.createElement("h2", null, e[Math.floor(Math.random() * e.length)]), a.createElement("br", null), a.createElement("h6", null, "There is nothing else here, so why not ", a.createElement(r.rU, {
                    to: "/home"
                }, "Go Home"), "?"))
            }
        },
        94058: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => q
            });
            var a = n(67294),
                r = n(15861),
                c = n(54546),
                o = n(27879),
                l = n(16995),
                i = n(2909),
                s = n(68055),
                m = n(59545),
                d = n(50823),
                u = n(609),
                h = n(92332),
                p = n(64687),
                f = n.n(p),
                g = n(89250),
                b = n(79655),
                v = n(3191),
                E = n(69699),
                w = n(34698),
                x = n(60766),
                N = n(35773),
                y = n(95305),
                k = n(83505),
                I = n(90924),
                Z = n(80988),
                L = n(85533),
                T = n(64537),
                C = n(6281),
                O = n(72522),
                P = n(22202),
                j = n(87343),
                A = n(16278),
                S = n(1208),
                z = n(85856),
                U = n(81810),
                _ = n(81505);
            var M = "https://vrch.at",
                $ = function(e, t) {
                    var n = M || window.endpoint;
                    return n.endsWith("/") && (n = n.slice(0, -1)), (0, z.N4)(e) ? (0, z.N4)(M) ? "".concat(n, "/home/launch?worldId=").concat(t) : "".concat(n, "/").concat(t) : (0, z.N4)(M) ? "".concat(n, "/i/").concat(e) : "".concat(n, "/").concat(e)
                };
            const R = function(e) {
                var t, n, p, M, R, q, D, V, G, W = e.worldId,
                    B = e.instanceId,
                    F = e.shortName,
                    H = (0, g.s0)(),
                    Y = (0, g.TH)(),
                    X = a.useState(!1),
                    Q = (0, c.Z)(X, 2),
                    J = Q[0],
                    K = Q[1],
                    ee = a.useState(!1),
                    te = (0, c.Z)(ee, 2),
                    ne = te[0],
                    ae = te[1],
                    re = a.useState(!1),
                    ce = (0, c.Z)(re, 2),
                    oe = ce[0],
                    le = ce[1],
                    ie = a.useState(!1),
                    se = (0, c.Z)(ie, 2),
                    me = se[0],
                    de = se[1],
                    ue = a.useState(!1),
                    he = (0, c.Z)(ue, 2),
                    pe = he[0],
                    fe = he[1],
                    ge = (0, A.g)(),
                    be = (0, c.Z)(ge, 2),
                    ve = be[0],
                    Ee = be[1],
                    we = Ee.isLoading,
                    xe = Ee.isSuccess,
                    Ne = Ee.isError,
                    ye = Ee.error,
                    ke = (0, P.XC)(),
                    Ie = ke.data,
                    Ze = ke.isSuccess,
                    Le = (0, j.LE)({
                        shortName: F
                    }, {
                        skip: !F
                    }),
                    Te = Le.data,
                    Ce = Le.error,
                    Oe = (0, j.kt)({
                        location: "".concat(W, ":").concat(B)
                    }, {
                        skip: !!F || !B
                    }),
                    Pe = Oe.data,
                    je = Oe.error,
                    Ae = (0, S.Vw)({
                        worldId: W
                    }, {
                        skip: !!F || !!B
                    }),
                    Se = Ae.data,
                    ze = Ae.error,
                    Ue = Te || Pe || Se || {},
                    _e = Ce || je || ze,
                    Me = Ue.shortName,
                    $e = Ue.secureName,
                    Re = Ue.world || Ue,
                    qe = null !== (t = Ue.worldId) && void 0 !== t ? t : Re.id,
                    De = a.useMemo((function() {
                        return Ue.type ? "group" === Ue.type ? "public" === Ue.groupAccessType ? "Group Public" : "plus" === Ue.groupAccessType ? "Group+" : "Group" : "private" === Ue.type ? Ue.canRequestInvite ? "Invite+" : "Invite" : "hidden" === Ue.type ? "Friends+" : "friends" === Ue.type ? "Friends" : "Public" : "Public"
                    }), [Ue.type, Ue.groupAccessType, Ue.canRequestInvite]),
                    Ve = Ue.ageGate,
                    Ge = Ve && Ie && (!Ie.ageVerified || !Ie.isAdult) && !(null !== (n = Ie.tagsSet) && void 0 !== n && n.has("admin_agegate_bypass")),
                    We = function(e) {
                        navigator.clipboard.writeText(e)
                    },
                    Be = function() {
                        var e = (0, r.Z)(f().mark((function e() {
                            var t;
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Ze) {
                                            e.next = 3;
                                            break
                                        }
                                        return H("/home/login", {
                                            state: {
                                                redirectTo: Y.pathname + Y.search
                                            }
                                        }), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, ve({
                                            worldId: qe,
                                            instanceId: Ue.instanceId,
                                            shortName: null != Me ? Me : $e
                                        });
                                    case 5:
                                        (t = e.sent).error && (console.error(t.error), fe(!0));
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
                    Fe = a.useMemo((function() {
                        return we ? a.createElement(Z.$1, {
                            color: "white",
                            icon: h.LM,
                            spin: !0
                        }) : xe ? a.createElement(Z.$1, {
                            color: "white",
                            icon: s.LE
                        }) : Ne ? a.createElement(Z.$1, {
                            color: "white",
                            icon: l.Ps
                        }) : "Invite Me"
                    }), [we, xe, Ne]),
                    He = a.useMemo((function() {
                        return $(Me, qe)
                    }), [Me, qe]),
                    Ye = a.useMemo((function() {
                        return $($e, qe)
                    }), [$e, qe]);
                if (_e) return 404 === _e.status ? a.createElement(U.default, null) : a.createElement("div", null, a.createElement("h1", null, "Error"), a.createElement("p", null, (null === (G = _e.data) || void 0 === G || null === (G = G.error) || void 0 === G ? void 0 : G.message) || _e.error || "An error occurred"));
                if ((0, z.N4)(Ue)) return a.createElement(_.Z, null);
                var Xe = "vrchat://launch?ref=vrchat.com&id=".concat(qe).concat((0, z.N4)(Ue.instanceId) ? "" : ":".concat(Ue.instanceId)).concat(Me || $e ? "&shortName=".concat(null != Me ? Me : $e) : "", "&attach=1");
                return a.createElement("div", {
                    className: (0, k.iv)("& h2,h3,h4,h5{text-transform:capitalize!important;}& h3{border:0;}& h4{color:#0193af;font-size:normal;}& h5{color:#0193af;font-size:normal;}& p{color:#8c8c8c;}& .container-bg{background:#111516;}& .box-shadow{border:4px solid #051d22;border-radius:10px;box-shadow:10px 10px 40px 0px rgba(0, 0, 0, 0.4);background-color:#060809;}& .navbar{font-size:1.25rem;border-top:none!important;background-image:none;}& .navbar .container{@media (min-width: 576px){max-width:540px;}@media (min-width: 768px){max-width:720px;}@media (min-width: 992px){max-width:960px;}@media (min-width: 1200px){max-width:1140px;}@media (min-width: 1920px){max-width:1920px;}}& .navbar .container .col{padding:0;}& .navbar span{padding-right:15px;color:gray;font-size:1rem;}& .navbar .sign-up-none{color:#f5b501;}& .navbar .sign-up-lg-none{color:#f5b501;font-size:1rem!important;}& .navbar .home{color:#f5b501;font-size:1rem!important;}& .logo{width:80px;}& .launch-btn{background:#f5b501;color:#ffffff;border:0;font-size:1.5rem;font-weight:bold;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .launch-btn:disabled{background:#777777;}& .secondary-launch-btn{opacity:0.9;}& .container-margin{margin-top:2 rem!important;}& .section-bg{background-image:url(", Re.imageUrl, ");background-size:cover;background-position:center;height:400px;}& .header .card-text,.header .creator-link{font-size:1.5rem;}& .header .card-title{margin:0;line-height:1;}& .header .card-text{color:#8c8c8c;}& .world-image .card-body{display:flex;}& .world-image .world-size,.world-image .world-users{align-self:flex-start;text-align:right;background:gray;width:55px;padding:0 5px;flex-direction:flex-row-reverse;margin-bottom:10px;border-radius:5px;background:#777777;}& .world-description p{font-size:1.25rem;line-height:normal;}& .world-description a.more-link{text-decoration:underline;}& .world-description .btn-primary{background:#011b22;color:#0193af;font-weight:bold;border:2px solid #0193af;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .world-share{bottom:20px;position:absolute;}& .item-img{background:#ddd;width:23.3%;margin:6px;}& .item-img img{width:100%;}& .description-height{min-height:200px;}& .share-button{cursor:pointer;}", "")
                }, a.createElement(L.Z, null, Re.name && "".concat(Re.name, " - "), "Launch Instance"), a.createElement(E.Z, {
                    isOpen: me,
                    toggle: function() {
                        return de(!1)
                    },
                    size: "xl"
                }, a.createElement(w.Z, {
                    className: (0, k.iv)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return de(!1)
                    }
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: m.NB
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Link Options"), a.createElement(x.Z, null, a.createElement("div", {
                    className: "me-3 ms-3"
                }, a.createElement(N.Z, {
                    className: "mb-5"
                }, a.createElement(y.Z, {
                    md: 1
                }, a.createElement(Z.$1, {
                    icon: u.by,
                    size: "3x",
                    className: (0, k.iv)({
                        name: "17v5ru9",
                        styles: "width:42px!important"
                    })
                })), a.createElement(y.Z, {
                    md: 11
                }, a.createElement("h2", null, "Locked Link"), a.createElement("p", null, "This link will follow the instance rules. If the link is shared, others also follow the rules to join.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "Friends+: "), "You must have a friend in the instance to join.", a.createElement("br", null), a.createElement("strong", null, "Friends: "), "You must be friends with the instance creator to join.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "Others: "), "Invite, Invite+, and Public instances are not affected by Locked Links.", a.createElement("br", null), a.createElement("br", null), "A Locked Link to an Invite or Invite+ instance is only usable by you, so it might not be that useful."))), a.createElement(N.Z, null, a.createElement(y.Z, {
                    md: 1
                }, a.createElement(Z.$1, {
                    icon: d._1,
                    size: "3x",
                    className: (0, k.iv)({
                        name: "17v5ru9",
                        styles: "width:42px!important"
                    })
                })), a.createElement(y.Z, {
                    md: 11
                }, a.createElement("h2", null, "Unlocked Link"), a.createElement("p", null, "This link will ignore the instances rules. Anyone with this link can join the instance. If the link is shared, that person can join too.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "We do not recommend the usage of Unlocked Links."))))))), a.createElement(E.Z, {
                    className: (0, k.cx)((0, k.iv)({
                        name: "15xgxri",
                        styles: "max-width:700px"
                    })),
                    isOpen: oe,
                    toggle: function() {
                        return le(!1)
                    },
                    size: "lg"
                }, a.createElement(w.Z, {
                    className: (0, k.iv)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return le(!1)
                    }
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: m.NB
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Woah there! 😲"), a.createElement(x.Z, null, a.createElement("p", {
                    className: "text-center ms-5 me-5"
                }, "Unlocked Links allow ", a.createElement("span", {
                    className: "font-italic"
                }, "anyone"), " to join the instance. Be careful who you share this link with, and who they might share the link with in turn.", " ", a.createElement("strong", {
                    className: "font-weight-bolder"
                }, a.createElement("br", null), "We do not recommend the use of Unlocked Links.")), void 0 !== He && Me && a.createElement("h4", {
                    className: "text-center"
                }, a.createElement("span", {
                    className: "card-text"
                }, "Unlocked Link: "), a.createElement("a", {
                    className: "font-weight-normal creator-link",
                    href: He
                }, He), a.createElement(w.Z, {
                    className: "ms-2",
                    onClick: function() {
                        We(He), K(!0), setTimeout((function() {
                            return K(!1)
                        }), 3e3)
                    },
                    title: "copy unlocked link"
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: J ? s.LE : i.kZ
                }))))), a.createElement(E.Z, {
                    isOpen: pe,
                    toggle: function() {
                        return fe(!1)
                    },
                    size: "lg"
                }, a.createElement(w.Z, {
                    className: (0, k.iv)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return fe(!1)
                    }
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: m.NB
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Aw jeez gosh dang! 🤔"), a.createElement(x.Z, null, a.createElement("p", {
                    className: "text-center"
                }, a.createElement("strong", null, null !== (p = null == ye || null === (M = ye.data) || void 0 === M || null === (M = M.error) || void 0 === M ? void 0 : M.message) && void 0 !== p ? p : "An unexpected error occurred!")))), a.createElement("div", {
                    className: (0, k.iv)({
                        name: "16x1f7a",
                        styles: "max-width:1300px;margin:auto;padding:0 45px"
                    })
                }, a.createElement(N.Z, {
                    className: "navbar fixed-top box-shadow"
                }, a.createElement("div", {
                    className: "".concat((0, k.iv)({
                        name: "x1pt9q",
                        styles: "max-width:1250px!important"
                    }), " m-auto container w-100 pl-3 pr-3")
                }, a.createElement("div", {
                    className: "col"
                }, a.createElement(b.rU, {
                    to: "/home"
                }, a.createElement("img", {
                    className: "logo",
                    alt: "VRChat Logo",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                }))), !Ze && a.createElement("div", null, a.createElement("div", {
                    className: "d-lg-none"
                }, a.createElement("div", {
                    className: "col text-center"
                }, a.createElement(b.rU, {
                    className: "sign-up-lg-none",
                    to: "/register",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Don't Have a VRChat Account? Create One Now!"))), a.createElement("div", {
                    className: "d-none d-lg-block"
                }, a.createElement("div", {
                    className: "col text-center"
                }, a.createElement(b.rU, {
                    className: "sign-up-none",
                    to: "/register",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Don't Have a VRChat Account? Create One Now!")))), a.createElement("div", {
                    className: "col text-end"
                }, a.createElement("a", {
                    className: "home",
                    href: "https://hello.vrchat.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, "About VRChat")))), a.createElement(N.Z, {
                    className: "header card mb-4 box-shadow",
                    style: {
                        marginTop: "70px"
                    }
                }, a.createElement("div", {
                    className: "card-body d-flex flex-wrap"
                }, a.createElement("div", {
                    className: (0, k.iv)({
                        name: "8becsz",
                        styles: "flex-grow:1000"
                    })
                }, a.createElement("h2", {
                    className: "card-title"
                }, a.createElement(b.rU, {
                    to: "/home/world/".concat(qe)
                }, Re.name), " - ".concat(De)), a.createElement("span", {
                    className: "card-text font-weight-normal"
                }, "Created by:", " ", a.createElement(b.rU, {
                    className: "font-weight-normal creator-link",
                    to: "/home/user/".concat(Re.authorId),
                    target: "_blank",
                    rel: "noreferrer"
                }, Re.authorName)), (Ve || Ue.minimumAvatarPerformance && "None" !== Ue.minimumAvatarPerformance) && a.createElement("div", {
                    className: "card-text font-weight-normal d-flex align-items-center gap-3"
                }, Ve && a.createElement("span", {
                    title: "Age Verification Required"
                }, a.createElement(I.Z, null)), Ue.minimumAvatarPerformance && "None" !== Ue.minimumAvatarPerformance && a.createElement("span", {
                    className: "d-flex align-items-center",
                    title: "Minimum Avatar Performance",
                    style: {
                        color: null === (R = O.i1[Ue.minimumAvatarPerformance]) || void 0 === R ? void 0 : R.color
                    }
                }, a.createElement("img", {
                    style: {
                        height: "1.2em",
                        marginRight: "0.5em"
                    },
                    src: null === (q = O.i1[Ue.minimumAvatarPerformance]) || void 0 === q ? void 0 : q.image,
                    alt: ""
                }), null === (D = O.i1[Ue.minimumAvatarPerformance]) || void 0 === D ? void 0 : D.label)), void 0 !== Ye && $e && a.createElement("div", {
                    className: "d-flex"
                }, a.createElement("span", {
                    className: "card-text font-weight-normal"
                }, "Locked Link:", " ", a.createElement("a", {
                    className: "font-weight-normal creator-link",
                    href: Ye
                }, Ye)), a.createElement(w.Z, {
                    className: "ms-2",
                    onClick: function() {
                        We(Ye), ae(!0), setTimeout((function() {
                            return ae(!1)
                        }), 3e3)
                    },
                    title: "copy locked link"
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: ne ? s.LE : i.kZ
                }))), void 0 !== He && Me && a.createElement("div", {
                    className: "d-flex mt-4"
                }, a.createElement(w.Z, {
                    className: "font-weight-bold text-white",
                    onClick: function() {
                        return le(!0)
                    }
                }, "Get Unlocked Link"), a.createElement(w.Z, {
                    className: "ms-2",
                    onClick: function() {
                        return de(!0)
                    }
                }, " ", a.createElement(Z.$1, {
                    color: "white",
                    icon: l.Ps
                }), " "))), a.createElement("div", {
                    className: "".concat((0, k.iv)({
                        name: "1qycygp",
                        styles: "flex:1 0 195px;max-width:240px"
                    }), " flex-shrink-1 text-left")
                }, Ge ? a.createElement("h2", null, a.createElement(w.Z, {
                    disabled: !0,
                    className: "btn-primary launch-btn secondary-launch-btn w-100"
                }, "Age Verification Required (18+)")) : a.createElement(a.Fragment, null, a.createElement("h2", null, a.createElement(w.Z, {
                    href: Xe,
                    onClick: function() {
                        var e;
                        (0, C.j)("Launch", {
                            worldId: qe,
                            worldName: Re.name,
                            occupants: null !== (e = Ue.n_users) && void 0 !== e ? e : Re.occupants,
                            instanceId: Ue.instanceId,
                            instanceType: Ue.instanceId ? De : null,
                            launchType: Ue.instanceId ? "instance" : "new"
                        })
                    },
                    className: "btn btn-primary launch-btn uppercase w-100"
                }, "Launch World")), a.createElement("h2", null, a.createElement(w.Z, {
                    onClick: Be,
                    className: "btn-primary launch-btn secondary-launch-btn w-100"
                }, Fe)))))), a.createElement(N.Z, {
                    className: "world-image card mb-4 section-bg box-shadow"
                }, a.createElement("div", {
                    className: "card-body justify-content-end align-self-end"
                }, a.createElement("div", {
                    className: "world-users"
                }, a.createElement(Z.$1, {
                    color: "white",
                    icon: o.IL,
                    className: "me-2"
                }), null !== (V = Ue.n_users) && void 0 !== V ? V : Re.occupants))), a.createElement(N.Z, null, a.createElement("div", {
                    className: "col-12 card mb-4 box-shadow description-height"
                }, a.createElement("div", {
                    className: "card-body d-flex"
                }, a.createElement("div", {
                    className: "w-100"
                }, a.createElement("h4", {
                    className: "card-title font-weight-normal"
                }, "Description"), a.createElement("p", {
                    className: "card-text"
                }, Re.description), a.createElement("div", {
                    className: "world-share d-inline-flex"
                }, a.createElement("span", {
                    className: "me-2"
                }, "Share this world"), a.createElement(T.Z, {
                    text: "#MadeWithVRChat",
                    url: "".concat(window.endpoint, "/home/launch?worldId=").concat(qe),
                    shareLabel: "Share This World",
                    copyLabel: "Copy Link to This World"
                }))))), Re.previewYoutubeId && a.createElement("div", {
                    className: "card flex-grow-1 mb-4 box-shadow"
                }, a.createElement("div", {
                    className: "p-1"
                }, a.createElement(v.Z, {
                    videoId: Re.previewYoutubeId,
                    opts: {
                        width: "100%"
                    }
                }))))))
            };
            const q = function() {
                var e = a.useMemo((function() {
                        var e = new URL(document.location).searchParams;
                        return {
                            worldId: e.get("worldId"),
                            instanceId: e.get("instanceId"),
                            shortName: e.get("shortName")
                        }
                    }), []),
                    t = e.worldId,
                    n = e.instanceId,
                    r = e.shortName;
                return a.createElement(R, {
                    worldId: t,
                    instanceId: n,
                    shortName: r
                })
            }
        },
        87343: (e, t, n) => {
            n.d(t, {
                LE: () => c,
                kt: () => r
            });
            var a = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getInstance: e.query({
                                query: function(e) {
                                    var t = e.location;
                                    return "instances/".concat(t)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "Instance",
                                        id: n.location
                                    }]
                                }
                            }),
                            getInstanceByShortName: e.query({
                                query: function(e) {
                                    var t = e.shortName;
                                    return "instances/s/".concat(t)
                                },
                                providesTags: function(e) {
                                    return e ? [{
                                        type: "Instance",
                                        id: e.location
                                    }] : []
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Instance"]
                }),
                r = a.useGetInstanceQuery,
                c = a.useGetInstanceByShortNameQuery
        }
    }
]);
//# sourceMappingURL=f54a74775c2f4b73bb892560265ee7e24ec557f9c1dec632980804e291b67a9d.js.map