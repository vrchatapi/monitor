"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2475, 3968], {
        72839(e, t, n) {
            n.d(t, {
                A: () => y
            });
            var a, r = n(58168),
                c = n(64467),
                o = n(10467),
                l = n(80045),
                i = n(67256),
                s = n(33105),
                m = n(82628),
                d = n(54756),
                u = n.n(d),
                h = n(96540),
                p = n(6376),
                f = n(65950),
                g = n(6324),
                b = n(97963),
                E = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach(function(t) {
                        (0, c.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
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
                    v = e.shareLabel,
                    y = void 0 === v ? "Share" : v,
                    k = e.copyLabel,
                    A = void 0 === k ? "Copy" : k,
                    I = e.displayLabel,
                    L = void 0 !== I && I,
                    j = (0, l.A)(e, E),
                    P = (0, p.wA)(),
                    O = h.useMemo(function() {
                        return N && navigator.canShare({
                            url: t,
                            text: n,
                            title: a,
                            files: c
                        })
                    }, [N, t, n, a, c]);
                if (!x && !N) return null;
                var T = function() {
                        var e = (0, o.A)(u().mark(function e() {
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([a, n, t].filter(Boolean).join("\n"));
                                    case 2:
                                        P((0, f.X)({
                                            title: "Copied to clipboard",
                                            icon: i.jP,
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    C = function() {
                        var e = (0, o.A)(u().mark(function e(r) {
                            return u().wrap(function(e) {
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
                                        P((0, f.X)({
                                            title: "Something went wrong",
                                            icon: m.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), T(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        T();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 7]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    M = O ? y : A,
                    _ = O ? s.Ex : i.jP;
                return h.createElement(b.Ay, (0, r.A)({
                    neutral: !0,
                    style: w({
                        lineHeight: "1"
                    }, d)
                }, j, {
                    title: M,
                    onClick: C
                }), h.createElement(g.A, {
                    icon: _,
                    className: L && "tw-mr-1"
                }), L && M)
            }
        },
        22475(e, t, n) {
            n.r(t), n.d(t, {
                default: () => o
            });
            var a = n(96540),
                r = (n(6376), n(84976)),
                c = n(45662);
            const o = function() {
                var e = ["＞﹏＜", "(っ °Д °;)っ", "（＞人＜；）", "≡(▔﹏▔)≡", "~(>_<。)＼", ".·´¯`(>▂<)´¯`·.", "⊙﹏⊙∥", "/(ㄒoㄒ)/~~", "::>_<::", "ඞ", "(；′⌒`)", "(┬┬﹏┬┬)", "ಥ_ಥ", "X﹏X", "(T_T)", "ಥ╭╮ಥ", "UwU", "UnU", "¯\\_(ツ)_/¯", "(・へ・)", "(个_个)", "༶ඬ༝ඬ༶"];
                return a.createElement("div", {
                    className: "m-5 text-center"
                }, a.createElement(c.A, null, "Instance not found"), a.createElement("h2", null, "This instance does not exist!"), a.createElement("h2", null, e[Math.floor(Math.random() * e.length)]), a.createElement("br", null), a.createElement("h6", null, "There is nothing else here, so why not ", a.createElement(r.N_, {
                    to: "/home"
                }, "Go Home"), "?"))
            };
            n.dn(o)
        },
        43968(e, t, n) {
            n.r(t), n.d(t, {
                default: () => G
            });
            var a = n(96540),
                r = n(10467),
                c = n(15902),
                o = n(64850),
                l = n(52169),
                i = n(67256),
                s = n(81617),
                m = n(19179),
                d = n(26134),
                u = n(12378),
                h = n(7612),
                p = n(54756),
                f = n.n(p),
                g = n(47767),
                b = n(84976),
                E = n(98852),
                v = n(25423),
                w = n(30104),
                x = n(17535),
                N = n(5826),
                y = n(39704),
                k = n(56822),
                A = n(69147),
                I = n(15033),
                L = n(45662),
                j = n(72839),
                P = n(53818),
                O = n(77861),
                T = n(13951),
                C = n(44877),
                M = n(56288),
                _ = n(60188),
                z = n(68674),
                S = n(22475),
                H = n(13023);
            var R = "https://vrch.at",
                U = function(e, t) {
                    var n = R || window.endpoint;
                    return n.endsWith("/") && (n = n.slice(0, -1)), (0, z.mN)(e) ? (0, z.mN)(R) ? "".concat(n, "/home/launch?worldId=").concat(t) : "".concat(n, "/").concat(t) : (0, z.mN)(R) ? "".concat(n, "/i/").concat(e) : "".concat(n, "/").concat(e)
                };
            const W = function(e) {
                var t, n, p, R, W, G, q, D, V, B = e.worldId,
                    F = e.instanceId,
                    X = e.shortName,
                    Y = (0, g.Zp)(),
                    Q = (0, g.zy)(),
                    Z = a.useState(!1),
                    J = (0, c.A)(Z, 2),
                    K = J[0],
                    $ = J[1],
                    ee = a.useState(!1),
                    te = (0, c.A)(ee, 2),
                    ne = te[0],
                    ae = te[1],
                    re = a.useState(!1),
                    ce = (0, c.A)(re, 2),
                    oe = ce[0],
                    le = ce[1],
                    ie = a.useState(!1),
                    se = (0, c.A)(ie, 2),
                    me = se[0],
                    de = se[1],
                    ue = a.useState(!1),
                    he = (0, c.A)(ue, 2),
                    pe = he[0],
                    fe = he[1],
                    ge = (0, M.h)(),
                    be = (0, c.A)(ge, 2),
                    Ee = be[0],
                    ve = be[1],
                    we = ve.isLoading,
                    xe = ve.isSuccess,
                    Ne = ve.isError,
                    ye = ve.error,
                    ke = (0, T.P2)(),
                    Ae = ke.data,
                    Ie = ke.isSuccess,
                    Le = (0, C.jp)({
                        shortName: X
                    }, {
                        skip: !X
                    }),
                    je = Le.data,
                    Pe = Le.error,
                    Oe = (0, C.Bi)({
                        location: "".concat(B, ":").concat(F)
                    }, {
                        skip: !!X || !F
                    }),
                    Te = Oe.data,
                    Ce = Oe.error,
                    Me = (0, _.Ed)({
                        worldId: B
                    }, {
                        skip: !!X || !!F
                    }),
                    _e = Me.data,
                    ze = Me.error,
                    Se = je || Te || _e || {},
                    He = Pe || Ce || ze,
                    Re = Se.shortName,
                    Ue = Se.secureName,
                    We = Se.world || Se,
                    Ge = null !== (t = Se.worldId) && void 0 !== t ? t : We.id,
                    qe = a.useMemo(function() {
                        return Se.type ? "group" === Se.type ? "public" === Se.groupAccessType ? "Group Public" : "plus" === Se.groupAccessType ? "Group+" : "Group" : "private" === Se.type ? Se.canRequestInvite ? "Invite+" : "Invite" : "hidden" === Se.type ? "Friends+" : "friends" === Se.type ? "Friends" : "Public" : "Public"
                    }, [Se.type, Se.groupAccessType, Se.canRequestInvite]),
                    De = Se.ageGate,
                    Ve = De && Ae && (!Ae.ageVerified || !Ae.isAdult) && !(null !== (n = Ae.tagsSet) && void 0 !== n && n.has("admin_agegate_bypass")),
                    Be = function(e) {
                        navigator.clipboard.writeText(e)
                    },
                    Fe = function() {
                        var e = (0, r.A)(f().mark(function e() {
                            var t;
                            return f().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Ie) {
                                            e.next = 3;
                                            break
                                        }
                                        return Y("/home/login", {
                                            state: {
                                                redirectTo: Q.pathname + Q.search
                                            }
                                        }), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, Ee({
                                            worldId: Ge,
                                            instanceId: Se.instanceId,
                                            shortName: null != Re ? Re : Ue
                                        });
                                    case 5:
                                        (t = e.sent).error && (console.error(t.error), fe(!0));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Xe = a.useMemo(function() {
                        return we ? a.createElement(I.M2, {
                            color: "white",
                            icon: h.z1,
                            spin: !0
                        }) : xe ? a.createElement(I.M2, {
                            color: "white",
                            icon: s.e6
                        }) : Ne ? a.createElement(I.M2, {
                            color: "white",
                            icon: l.Ev
                        }) : "Invite Me"
                    }, [we, xe, Ne]),
                    Ye = a.useMemo(function() {
                        return U(Re, Ge)
                    }, [Re, Ge]),
                    Qe = a.useMemo(function() {
                        return U(Ue, Ge)
                    }, [Ue, Ge]);
                if (He) return 404 === He.status ? a.createElement(S.default, null) : a.createElement("div", null, a.createElement("h1", null, "Error"), a.createElement("p", null, (null === (V = He.data) || void 0 === V || null === (V = V.error) || void 0 === V ? void 0 : V.message) || He.error || "An error occurred"));
                if ((0, z.mN)(Se)) return a.createElement(H.A, null);
                var Ze = "vrchat://launch?ref=vrchat.com&id=".concat(Ge).concat((0, z.mN)(Se.instanceId) ? "" : ":".concat(Se.instanceId)).concat(Re || Ue ? "&shortName=".concat(null != Re ? Re : Ue) : "", "&attach=1");
                return a.createElement("div", {
                    className: (0, k.AH)("& h2,h3,h4,h5{text-transform:capitalize!important;}& h3{border:0;}& h4{color:#0193af;font-size:normal;}& h5{color:#0193af;font-size:normal;}& p{color:#8c8c8c;}& .container-bg{background:#111516;}& .box-shadow{border:4px solid #051d22;border-radius:10px;box-shadow:10px 10px 40px 0px rgba(0, 0, 0, 0.4);background-color:#060809;}& .navbar{font-size:1.25rem;border-top:none!important;background-image:none;}& .navbar .container{@media (min-width: 576px){max-width:540px;}@media (min-width: 768px){max-width:720px;}@media (min-width: 992px){max-width:960px;}@media (min-width: 1200px){max-width:1140px;}@media (min-width: 1920px){max-width:1920px;}}& .navbar .container .col{padding:0;}& .navbar span{padding-right:15px;color:gray;font-size:1rem;}& .navbar .sign-up-none{color:#f5b501;}& .navbar .sign-up-lg-none{color:#f5b501;font-size:1rem!important;}& .navbar .home{color:#f5b501;font-size:1rem!important;}& .logo{width:80px;}& .launch-btn{background:#f5b501;color:#ffffff;border:0;font-size:1.5rem;font-weight:bold;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .launch-btn:disabled{background:#777777;}& .secondary-launch-btn{opacity:0.9;}& .container-margin{margin-top:2 rem!important;}& .section-bg{background-image:url(", We.imageUrl, ");background-size:cover;background-position:center;height:400px;}& .header .card-text,.header .creator-link{font-size:1.5rem;}& .header .card-title{margin:0;line-height:1;}& .header .card-text{color:#8c8c8c;}& .world-image .card-body{display:flex;}& .world-image .world-size,.world-image .world-users{align-self:flex-start;text-align:right;background:gray;width:55px;padding:0 5px;flex-direction:flex-row-reverse;margin-bottom:10px;border-radius:5px;background:#777777;}& .world-description p{font-size:1.25rem;line-height:normal;}& .world-description a.more-link{text-decoration:underline;}& .world-description .btn-primary{background:#011b22;color:#0193af;font-weight:bold;border:2px solid #0193af;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .world-share{bottom:20px;position:absolute;}& .item-img{background:#ddd;width:23.3%;margin:6px;}& .item-img img{width:100%;}& .description-height{min-height:200px;}& .share-button{cursor:pointer;}", "")
                }, a.createElement(L.A, null, We.name && "".concat(We.name, " - "), "Launch Instance"), a.createElement(v.A, {
                    isOpen: me,
                    toggle: function() {
                        return de(!1)
                    },
                    size: "xl"
                }, a.createElement(w.A, {
                    className: (0, k.AH)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return de(!1)
                    }
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: m.GR
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Link Options"), a.createElement(x.A, null, a.createElement("div", {
                    className: "me-3 ms-3"
                }, a.createElement(N.A, {
                    className: "mb-5"
                }, a.createElement(y.A, {
                    md: 1
                }, a.createElement(I.M2, {
                    icon: u.DW,
                    size: "3x",
                    className: (0, k.AH)({
                        name: "17v5ru9",
                        styles: "width:42px!important"
                    })
                })), a.createElement(y.A, {
                    md: 11
                }, a.createElement("h2", null, "Locked Link"), a.createElement("p", null, "This link will follow the instance rules. If the link is shared, others also follow the rules to join.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "Friends+: "), "You must have a friend in the instance to join.", a.createElement("br", null), a.createElement("strong", null, "Friends: "), "You must be friends with the instance creator to join.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "Others: "), "Invite, Invite+, and Public instances are not affected by Locked Links.", a.createElement("br", null), a.createElement("br", null), "A Locked Link to an Invite or Invite+ instance is only usable by you, so it might not be that useful."))), a.createElement(N.A, null, a.createElement(y.A, {
                    md: 1
                }, a.createElement(I.M2, {
                    icon: d.pN,
                    size: "3x",
                    className: (0, k.AH)({
                        name: "17v5ru9",
                        styles: "width:42px!important"
                    })
                })), a.createElement(y.A, {
                    md: 11
                }, a.createElement("h2", null, "Unlocked Link"), a.createElement("p", null, "This link will ignore the instances rules. Anyone with this link can join the instance. If the link is shared, that person can join too.", a.createElement("br", null), a.createElement("br", null), a.createElement("strong", null, "We do not recommend the usage of Unlocked Links."))))))), a.createElement(v.A, {
                    className: (0, k.cx)((0, k.AH)({
                        name: "15xgxri",
                        styles: "max-width:700px"
                    })),
                    isOpen: oe,
                    toggle: function() {
                        return le(!1)
                    },
                    size: "lg"
                }, a.createElement(w.A, {
                    className: (0, k.AH)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return le(!1)
                    }
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: m.GR
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Woah there! 😲"), a.createElement(x.A, null, a.createElement("p", {
                    className: "text-center ms-5 me-5"
                }, "Unlocked Links allow ", a.createElement("span", {
                    className: "font-italic"
                }, "anyone"), " to join the instance. Be careful who you share this link with, and who they might share the link with in turn.", " ", a.createElement("strong", {
                    className: "font-weight-bolder"
                }, a.createElement("br", null), "We do not recommend the use of Unlocked Links.")), void 0 !== Ye && Re && a.createElement("h4", {
                    className: "text-center"
                }, a.createElement("span", {
                    className: "card-text"
                }, "Unlocked Link: "), a.createElement("a", {
                    className: "font-weight-normal creator-link",
                    href: Ye
                }, Ye), a.createElement(w.A, {
                    className: "ms-2",
                    onClick: function() {
                        Be(Ye), $(!0), setTimeout(function() {
                            return $(!1)
                        }, 3e3)
                    },
                    title: "copy unlocked link"
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: K ? s.e6 : i.jP
                }))))), a.createElement(v.A, {
                    isOpen: pe,
                    toggle: function() {
                        return fe(!1)
                    },
                    size: "lg"
                }, a.createElement(w.A, {
                    className: (0, k.AH)({
                        name: "154v9b4",
                        styles: "position:absolute;right:0"
                    }),
                    onClick: function() {
                        return fe(!1)
                    }
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: m.GR
                })), a.createElement("h2", {
                    className: "text-center mt-4"
                }, "Aw jeez gosh dang! 🤔"), a.createElement(x.A, null, a.createElement("p", {
                    className: "text-center"
                }, a.createElement("strong", null, null !== (p = null == ye || null === (R = ye.data) || void 0 === R || null === (R = R.error) || void 0 === R ? void 0 : R.message) && void 0 !== p ? p : "An unexpected error occurred!")))), a.createElement("div", {
                    className: (0, k.AH)({
                        name: "16x1f7a",
                        styles: "max-width:1300px;margin:auto;padding:0 45px"
                    })
                }, a.createElement(N.A, {
                    className: "navbar fixed-top box-shadow"
                }, a.createElement("div", {
                    className: "".concat((0, k.AH)({
                        name: "x1pt9q",
                        styles: "max-width:1250px!important"
                    }), " m-auto container w-100 pl-3 pr-3")
                }, a.createElement("div", {
                    className: "col"
                }, a.createElement(b.N_, {
                    to: "/home"
                }, a.createElement("img", {
                    className: "logo",
                    alt: "VRChat Logo",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                }))), !Ie && a.createElement("div", null, a.createElement("div", {
                    className: "d-lg-none"
                }, a.createElement("div", {
                    className: "col text-center"
                }, a.createElement(b.N_, {
                    className: "sign-up-lg-none",
                    to: "/register",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Don't Have a VRChat Account? Create One Now!"))), a.createElement("div", {
                    className: "d-none d-lg-block"
                }, a.createElement("div", {
                    className: "col text-center"
                }, a.createElement(b.N_, {
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
                }, "About VRChat")))), a.createElement(N.A, {
                    className: "header card mb-4 box-shadow",
                    style: {
                        marginTop: "70px"
                    }
                }, a.createElement("div", {
                    className: "card-body d-flex flex-wrap"
                }, a.createElement("div", {
                    className: (0, k.AH)({
                        name: "8becsz",
                        styles: "flex-grow:1000"
                    })
                }, a.createElement("h2", {
                    className: "card-title"
                }, a.createElement(b.N_, {
                    to: "/home/world/".concat(Ge)
                }, We.name), " - ".concat(qe)), a.createElement("span", {
                    className: "card-text font-weight-normal"
                }, "Created by:", " ", a.createElement(b.N_, {
                    className: "font-weight-normal creator-link",
                    to: "/home/user/".concat(We.authorId),
                    target: "_blank",
                    rel: "noreferrer"
                }, We.authorName)), (De || Se.minimumAvatarPerformance && "None" !== Se.minimumAvatarPerformance) && a.createElement("div", {
                    className: "card-text font-weight-normal d-flex align-items-center gap-3"
                }, De && a.createElement("span", {
                    title: "Age Verification Required"
                }, a.createElement(A.A, null)), Se.minimumAvatarPerformance && "None" !== Se.minimumAvatarPerformance && a.createElement("span", {
                    className: "d-flex align-items-center",
                    title: "Minimum Avatar Performance",
                    style: {
                        color: null === (W = O.Wu[Se.minimumAvatarPerformance]) || void 0 === W ? void 0 : W.color
                    }
                }, a.createElement("img", {
                    style: {
                        height: "1.2em",
                        marginRight: "0.5em"
                    },
                    src: null === (G = O.Wu[Se.minimumAvatarPerformance]) || void 0 === G ? void 0 : G.image,
                    alt: ""
                }), null === (q = O.Wu[Se.minimumAvatarPerformance]) || void 0 === q ? void 0 : q.label)), void 0 !== Qe && Ue && a.createElement("div", {
                    className: "d-flex"
                }, a.createElement("span", {
                    className: "card-text font-weight-normal"
                }, "Locked Link:", " ", a.createElement("a", {
                    className: "font-weight-normal creator-link",
                    href: Qe
                }, Qe)), a.createElement(w.A, {
                    className: "ms-2",
                    onClick: function() {
                        Be(Qe), ae(!0), setTimeout(function() {
                            return ae(!1)
                        }, 3e3)
                    },
                    title: "copy locked link"
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: ne ? s.e6 : i.jP
                }))), void 0 !== Ye && Re && a.createElement("div", {
                    className: "d-flex mt-4"
                }, a.createElement(w.A, {
                    className: "font-weight-bold text-white",
                    onClick: function() {
                        return le(!0)
                    }
                }, "Get Unlocked Link"), a.createElement(w.A, {
                    className: "ms-2",
                    onClick: function() {
                        return de(!0)
                    }
                }, " ", a.createElement(I.M2, {
                    color: "white",
                    icon: l.Ev
                }), " "))), a.createElement("div", {
                    className: "".concat((0, k.AH)({
                        name: "1qycygp",
                        styles: "flex:1 0 195px;max-width:240px"
                    }), " flex-shrink-1 text-left")
                }, Ve ? a.createElement("h2", null, a.createElement(w.A, {
                    disabled: !0,
                    className: "btn-primary launch-btn secondary-launch-btn w-100"
                }, "Age Verification Required (18+)")) : a.createElement(a.Fragment, null, a.createElement("h2", null, a.createElement(w.A, {
                    href: Ze,
                    onClick: function() {
                        var e;
                        (0, P.u4)("Launch", {
                            worldId: Ge,
                            worldName: We.name,
                            occupants: null !== (e = Se.n_users) && void 0 !== e ? e : We.occupants,
                            instanceId: Se.instanceId,
                            instanceType: Se.instanceId ? qe : null,
                            launchType: Se.instanceId ? "instance" : "new"
                        })
                    },
                    className: "btn btn-primary launch-btn uppercase w-100"
                }, "Launch World")), a.createElement("h2", null, a.createElement(w.A, {
                    onClick: Fe,
                    className: "btn-primary launch-btn secondary-launch-btn w-100"
                }, Xe)))))), a.createElement(N.A, {
                    className: "world-image card mb-4 section-bg box-shadow"
                }, a.createElement("div", {
                    className: "card-body justify-content-end align-self-end"
                }, a.createElement("div", {
                    className: "world-users"
                }, a.createElement(I.M2, {
                    color: "white",
                    icon: o.X4,
                    className: "me-2"
                }), null !== (D = Se.n_users) && void 0 !== D ? D : We.occupants))), a.createElement(N.A, null, a.createElement("div", {
                    className: "col-12 card mb-4 box-shadow description-height"
                }, a.createElement("div", {
                    className: "card-body d-flex"
                }, a.createElement("div", {
                    className: "w-100"
                }, a.createElement("h4", {
                    className: "card-title font-weight-normal"
                }, "Description"), a.createElement("p", {
                    className: "card-text"
                }, We.description), a.createElement("div", {
                    className: "world-share d-inline-flex"
                }, a.createElement("span", {
                    className: "me-2"
                }, "Share this world"), a.createElement(j.A, {
                    text: "#MadeWithVRChat",
                    url: "".concat(window.endpoint, "/home/launch?worldId=").concat(Ge),
                    shareLabel: "Share This World",
                    copyLabel: "Copy Link to This World"
                }))))), We.previewYoutubeId && a.createElement("div", {
                    className: "card flex-grow-1 mb-4 box-shadow"
                }, a.createElement("div", {
                    className: "p-1"
                }, a.createElement(E.A, {
                    videoId: We.previewYoutubeId,
                    opts: {
                        width: "100%"
                    }
                }))))))
            };
            const G = function() {
                var e = a.useMemo(function() {
                        var e = new URL(document.location).searchParams;
                        return {
                            worldId: e.get("worldId"),
                            instanceId: e.get("instanceId"),
                            shortName: e.get("shortName")
                        }
                    }, []),
                    t = e.worldId,
                    n = e.instanceId,
                    r = e.shortName;
                return a.createElement(W, {
                    worldId: t,
                    instanceId: n,
                    shortName: r
                })
            }
        },
        44877(e, t, n) {
            n.d(t, {
                Bi: () => r,
                jp: () => c
            });
            var a = n(89483).m.injectEndpoints({
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
//# sourceMappingURL=21d5ef8dead0cab603387c5a6ed451597553ed6b438c2bdf92d998aa287330f3.js.map