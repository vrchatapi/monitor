"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4734], {
        87429: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => ge
            });
            var r = a(42138),
                n = a(15861),
                o = a(54546),
                l = a(4965),
                s = a(42619),
                i = a(609),
                c = a(13226),
                u = a(34601),
                m = a(30856),
                d = a(68412),
                f = a(87709),
                v = a(7581),
                p = a(66007),
                E = a(3820),
                g = a(35098),
                y = a(79032),
                h = a(65695),
                b = a(64687),
                w = a.n(b),
                A = a(67294),
                I = a(32981),
                N = a(79655),
                S = a(64258),
                k = a(67371),
                x = a(80873),
                Z = a(21538),
                T = a(27484),
                C = a.n(T),
                q = a(89250),
                U = a(53637),
                P = a(23138),
                M = a(34226),
                X = (a(37599), a(84090)),
                D = (a(49567), a(98185)),
                G = a(64537),
                z = a(94370),
                V = a(6811),
                $ = (a(37337), a(4991)),
                F = a(35773),
                O = a(95305),
                Y = a(41255),
                L = a(93007),
                R = a(30381),
                j = a.n(R),
                Q = a(64358);

            function W(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return J(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return J(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    s = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }
            var K = ["standalonewindows", "android", "ios"],
                _ = {
                    standalonewindows: "PC",
                    android: "Android",
                    ios: "iOS"
                },
                B = "standard",
                H = "impostor",
                ee = A.createElement(M.$1, {
                    color: "#54b5c5",
                    icon: V.f8
                }),
                te = {
                    estimatedServiceDurationSeconds: 14400
                };
            const ae = function(e) {
                var t, a, r = e.avatar,
                    n = e.refetch;
                if (!r) return A.createElement("div", null, "We don't seem to have that avatar.");
                var l, s = 0,
                    i = !1,
                    c = null,
                    u = {},
                    m = W(r.unityPackages);
                try {
                    for (m.s(); !(l = m.n()).done;) {
                        var d = l.value,
                            f = d.platform,
                            v = d.variant,
                            p = d.assetUrl,
                            E = d.unitySortNumber;
                        f in u || (u[f] = {}), "impostor" === v && s++, E >= 2017e7 && "standalonewindows" === f && (i = !0, (null == c || E > c.unitySortNumber) && (c = {
                            fileId: (0, Q.oQ)(p),
                            versionNumber: parseInt((0, Q.Rz)(p)),
                            unitySortNumber: E
                        })), u[f][null != v ? v : B] = !0
                    }
                } catch (e) {
                    m.e(e)
                } finally {
                    m.f()
                }
                var g = (0, Z.X8)(),
                    y = (0, o.Z)(g, 2),
                    h = y[0],
                    b = y[1],
                    w = b.isLoading,
                    I = b.isError,
                    N = b.error,
                    S = (b.isSuccess, (0, Z.EA)()),
                    k = (0, o.Z)(S, 2),
                    T = k[0],
                    C = k[1],
                    q = C.isLoading,
                    P = C.isError,
                    X = C.error,
                    D = C.isSuccess,
                    G = C.reset,
                    V = (0, Y.Ko)(null === (t = c) || void 0 === t ? void 0 : t.fileId, {
                        skip: !c
                    }),
                    R = V.data,
                    J = V.refetch,
                    ae = (0, A.useState)(!1),
                    re = (0, o.Z)(ae, 2),
                    ne = re[0],
                    oe = re[1],
                    le = (0, A.useState)(null),
                    se = (0, o.Z)(le, 2),
                    ie = se[0],
                    ce = se[1];
                (0, x.Yz)(n, ne ? 1e4 : null), (0, x.Yz)(J, ne ? 5e3 : null);
                var ue = (0, Z.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    me = (0, Z.ve)().data,
                    de = null !== (a = null != ue ? ue : me) && void 0 !== a ? a : te,
                    fe = s > 0,
                    ve = s === K.length,
                    pe = r.lastImpostorizationRequest,
                    Ee = null != pe && j()(pe).add(144e5).isAfter(j()());
                if (ne) {
                    if (ne)
                        if (ve) oe(!1);
                        else if (Ee) {
                        var ge, ye, he = null == R || null === (ge = R.versions) || void 0 === ge || null === (ge = ge[c.versionNumber]) || void 0 === ge || null === (ge = ge.file) || void 0 === ge ? void 0 : ge.impostorStatus;
                        if (null != he && null != he.date && j()(he.date).isAfter(pe))
                            if (!he.isSuccess) ce(null !== (ye = he.failureReason) && void 0 !== ye ? ye : "Well, this is embarassing, we're not sure."), oe(!1)
                    }
                } else D ? (G(), oe(!0)) : !Ee || ve || ie || oe(!0);
                var be = i,
                    we = "Unknown";
                i || (we = "No asset found for PC Platform with Unity ".concat(2017, " or later"));
                var Ae = function(e) {
                    var t, a = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? a = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = X.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (a = A.createElement("code", null, X.data.error.message)), a
                };
                return A.createElement(U.Z, null, A.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", A.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && A.createElement(M.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, A.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", j().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), A.createElement($.Z, {
                    size: "sm"
                }, A.createElement("thead", null, A.createElement("tr", {
                    style: {
                        borderColor: "#737372"
                    }
                }, A.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Platform"), A.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "User-created"), A.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Impostor"))), A.createElement("tbody", null, K.map((function(e) {
                    var t = u[e] || {};
                    return A.createElement("tr", {
                        key: e,
                        style: {
                            borderColor: "#737372"
                        }
                    }, A.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, _[e]), A.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, B in t && ee), A.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, H in t && ee))
                })))), ie && A.createElement(F.Z, null, A.createElement(O.Z, null, A.createElement(M.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, A.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), A.createElement("p", null, A.createElement("pre", null, ie)), A.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && A.createElement(F.Z, null, A.createElement(O.Z, null, A.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), A.createElement("p", null, A.createElement("pre", null, we)))), A.createElement(F.Z, null, A.createElement(O.Z, null, A.createElement(M.zx, {
                    className: "mb-2",
                    onClick: function() {
                        T({
                            avatarId: r.id
                        })
                    },
                    color: "primary",
                    disabled: ve || ne || !be,
                    loading: q || ne
                }, A.createElement(M.$1, {
                    width: 20,
                    icon: L.Z
                }), " ", function() {
                    var e;
                    if (q) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != pe) {
                            var t = j()(),
                                a = j()(pe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (a.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var r = j().duration(a.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(r.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), A.createElement(O.Z, null, A.createElement(M.zx, {
                    className: "mb-2",
                    onClick: function() {
                        h({
                            avatarId: r.id
                        })
                    },
                    color: "secondary",
                    loading: w,
                    disabled: !fe
                }, A.createElement(M.$1, {
                    width: 20,
                    icon: z.nY
                }), " Delete Impostors"))), I && A.createElement(M.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", A.createElement("br", null), Ae(N)), P && A.createElement(M.qX, {
                    type: "error"
                }, "Couldn't request impostors.", A.createElement("br", null), Ae(X)))
            };
            a(9669);
            const re = a.p + "b7e99cd3c42a6f1ff2e6f3faaada0e75366945997a7fa5e7e014d26b1d100ef7.svg",
                ne = a.p + "db3f587335a6602a84d0f0f18d6fbb10904973d0ddb659009f0fc56b3d1f026b.svg",
                oe = a.p + "24001ed5aa8ebabaa63a09ffb88ccecccc4c5feb1b4179579e8e6c9f1fed3f16.svg",
                le = a.p + "a8c97bcdcb9b5c842487bb42d4a910ed022d88f2af3106d4cecae3fbbd4e2af0.svg",
                se = a.p + "467c01a863f0a61d30a09465f743678c95a5e6ae6d439b2fecd257464ec111d0.svg",
                ie = a.p + "b4bf11dfbd8c3076cb66e8457b3f78659854700e79d5256516e205e37af89247.svg";
            var ce = {
                    standalonewindows: "PC",
                    android: "Android",
                    ios: "iOS"
                },
                ue = {
                    standalonewindows: g.tc,
                    android: h.us,
                    ios: y.Av
                },
                me = {
                    None: {
                        icon: le,
                        label: "Unknown"
                    },
                    Excellent: {
                        icon: re,
                        label: "Excellent"
                    },
                    Good: {
                        icon: ne,
                        label: "Good"
                    },
                    Medium: {
                        icon: oe,
                        label: "Medium"
                    },
                    Poor: {
                        icon: se,
                        label: "Poor"
                    },
                    VeryPoor: {
                        icon: ie,
                        label: "Very Poor"
                    }
                },
                de = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                fe = (0, l.Z)(M.JX, {
                    target: "e1blkums4"
                })({
                    name: "lfip73",
                    styles: "color:#737372;font-weight:bold"
                }),
                ve = (0, l.Z)(fe, {
                    target: "e1blkums3"
                })({
                    name: "lugakg",
                    styles: "font-weight:normal"
                }),
                pe = (0, l.Z)(M.JX, {
                    target: "e1blkums1"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                }),
                Ee = (0, l.Z)(M.JX, {
                    target: "e1blkums0"
                })({
                    name: "158lu6y",
                    styles: "flex:1;min-width:300px"
                });
            const ge = function() {
                var e, t = (0, I.I0)(),
                    a = A.useState(!1),
                    l = (0, o.Z)(a, 2),
                    g = l[0],
                    y = l[1],
                    h = A.useState(null),
                    b = (0, o.Z)(h, 2),
                    T = b[0],
                    z = b[1],
                    V = (0, x.Tu)().user,
                    $ = (0, x.pc)(),
                    F = (0, q.s0)(),
                    O = (0, q.UO)().avatarId,
                    Y = (0, Z.LQ)({
                        avatarId: O
                    }),
                    L = Y.data,
                    R = Y.isFetching,
                    j = Y.isError,
                    Q = Y.error,
                    W = Y.refetch,
                    J = (0, Z.ak)(),
                    K = (0, o.Z)(J, 2),
                    _ = K[0],
                    B = K[1],
                    H = B.isError,
                    ee = B.error,
                    te = (0, Z.cq)(),
                    re = (0, o.Z)(te, 2),
                    ne = re[0],
                    oe = re[1],
                    le = oe.isError,
                    se = oe.error,
                    ie = (0, Z.Cm)(),
                    ge = (0, o.Z)(ie, 2),
                    ye = ge[0],
                    he = ge[1],
                    be = he.isError,
                    we = he.error,
                    Ae = he.isSuccess,
                    Ie = (0, Z.GG)(),
                    Ne = (0, o.Z)(Ie, 2),
                    Se = Ne[0],
                    ke = Ne[1],
                    xe = ke.isError,
                    Ze = ke.error,
                    Te = ke.isSuccess,
                    Ce = (0, Z.Gy)(),
                    qe = (0, o.Z)(Ce, 2),
                    Ue = qe[0],
                    Pe = qe[1],
                    Me = Pe.isLoading,
                    Xe = Pe.isError,
                    De = Pe.error,
                    Ge = Pe.isSuccess,
                    ze = (0, x.Nr)(T, 1400),
                    Ve = (0, x.Tb)(R, 300),
                    $e = j || H || le || xe || Xe || be,
                    Fe = Q || ee || se || Ze || De || we;
                A.useEffect((function() {
                    null != L && L.id && z(L.tags)
                }), [L]), A.useEffect((function() {
                    if (null != L && L.id && ze) {
                        var e = new Set(L.tags);
                        ze.length === L.tags.length && ze.every((function(t) {
                            return e.has(t)
                        })) || ye({
                            avatarId: L.id,
                            tags: ze
                        })
                    }
                }), [ze]), A.useEffect((function() {
                    Te && F("/home/avatars")
                }), [Te]), A.useEffect((function() {
                    Ge && t((0, S.d)({
                        title: "Changed Avatars!",
                        icon: p.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Ge]), A.useEffect((function() {}), [De]), A.useEffect((function() {
                    Ae && t((0, S.d)({
                        title: "Content Warnings Updated",
                        icon: E.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != L && L.name ? "avatar: ".concat(L.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [Ae]);
                var Oe, Ye = A.useMemo((function() {
                        return Object.keys(ce).reduce((function(e, t) {
                            var a, r, n = (a = null == L ? void 0 : L.unityPackages, r = t, (null == a ? void 0 : a.findLast((function(e) {
                                var t = e.platform,
                                    a = e.variant;
                                return t === r && "security" === a
                            }))) || (null == a ? void 0 : a.findLast((function(e) {
                                var t = e.platform,
                                    a = e.variant;
                                return t === r && "impostor" !== a
                            }))));
                            return n && (e[t] = n), e
                        }), {})
                    }), [L]),
                    Le = A.useMemo((function() {
                        return Object.entries(ce).filter((function(e) {
                            var t = (0, o.Z)(e, 1)[0];
                            return !!Ye[t]
                        }))
                    }), [Ye]),
                    Re = function() {
                        var e = (0, n.Z)(w().mark((function e() {
                            var a, r, n, o, l;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ue({
                                            avatarId: O
                                        });
                                    case 2:
                                        (a = e.sent).error && (l = "string" == typeof(null == a || null === (r = a.error) || void 0 === r || null === (r = r.data) || void 0 === r ? void 0 : r.error) ? null == a || null === (n = a.error) || void 0 === n || null === (n = n.data) || void 0 === n ? void 0 : n.error : null == a || null === (o = a.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, S.d)({
                                            title: "Failed to change avatar!",
                                            icon: p.KC,
                                            message: null != l ? l : "An error occurred when changing your avatar",
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!L || Ve) return A.createElement(U.Z, null, A.createElement(M.$4, null, "Avatar"), A.createElement(D.Z, {
                    loading: !0
                }));
                if (j) return A.createElement(U.Z, null, A.createElement(M.$4, null, "Avatar"), A.createElement(M.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == Q || null === (Oe = Q.data) || void 0 === Oe ? void 0 : Oe.error.message) || "There was an error loading the avatar."));
                var je, Qe = "private" === L.releaseStatus,
                    We = !Qe,
                    Je = "hidden" === L.releaseStatus,
                    Ke = L.authorId === V.id,
                    _e = Ke,
                    Be = "";
                $e && (Be = A.createElement(M.X2, null, A.createElement(P.Z, {
                    color: "warning"
                }, null == Fe || null === (je = Fe.data) || void 0 === je ? void 0 : je.error.message)));
                return A.createElement(U.Z, null, A.createElement(M.$4, null, null !== (e = L.name) && void 0 !== e ? e : "Avatar"), Be, A.createElement("div", {
                    className: "tw-mb-3"
                }, A.createElement("img", {
                    className: "tw-w-full tw-rounded-md",
                    src: L.imageUrl,
                    alt: L.name
                })), A.createElement(M.X2, {
                    className: "tw-flex-wrap tw-gap-3 tw-mb-3"
                }, A.createElement(pe, null, A.createElement(M.oI, {
                    className: "tw-flex-row tw-items-start"
                }, A.createElement("div", {
                    className: "tw-flex-grow"
                }, A.createElement("h2", {
                    className: "tw-font-normal tw-mb-0"
                }, L.name), A.createElement("span", null, "By ", A.createElement(N.rU, {
                    to: "/home/user/".concat(L.authorId)
                }, L.authorName))), A.createElement(G.Z, {
                    text: "".concat(L.name, " by ").concat(L.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(L.id)
                })), A.createElement(M.Ao, {
                    className: "tw-mb-3"
                }, L.description)), A.createElement(Ee, null, ($ || Ke || We) && A.createElement(M.zx, {
                    className: "tw-mb-3 text-white",
                    disabled: Me,
                    loading: Me,
                    onClick: Re
                }, A.createElement(M.$1, {
                    icon: v.mn
                }), " Change Into Avatar"), (Ke || We) && A.createElement("div", {
                    className: "tw-mb-3"
                }, A.createElement(k.Z, {
                    type: "avatar",
                    contentId: L.id,
                    authorId: L.authorId,
                    releaseStatus: L.releaseStatus
                })), A.createElement(M.oI, null, A.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Performance Rating")), A.createElement(M.Ao, {
                    className: "tw-flex-col tw-mb-3"
                }, A.createElement(M.X2, null, Le.length ? A.createElement(A.Fragment, null, A.createElement(fe, {
                    role: "presentation",
                    className: "tw-shrink"
                }, Le.map((function(e, t) {
                    var a = (0, o.Z)(e, 2),
                        r = a[0],
                        n = a[1];
                    return A.createElement(M.X2, {
                        key: r,
                        className: "".concat(t < Le.length - 1 ? "mb-2" : "", " tw-items-center")
                    }, A.createElement(M.$1, {
                        color: "#54b5c5",
                        width: 20,
                        icon: ue[r],
                        className: "me-2"
                    }), n)
                }))), A.createElement(ve, {
                    className: "ms-3"
                }, Le.map((function(e, t) {
                    var a, r, n = (0, o.Z)(e, 2),
                        l = n[0],
                        s = n[1],
                        i = Ye[l],
                        c = "".concat(s, " performance rating");
                    return "failed" === i.scanStatus ? A.createElement("div", {
                        role: "note",
                        className: "".concat(t < Le.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": c
                    }, A.createElement(M.$1, {
                        icon: f.faXmark
                    }), "Security Checks Failed") : "unscanned" === i.scanStatus ? A.createElement("div", {
                        role: "note",
                        className: "".concat(t < Le.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": c
                    }, A.createElement(M.$1, {
                        icon: d.faCircleQuestion
                    }), "Security Checks Pending") : A.createElement("div", {
                        role: "note",
                        className: "".concat(t < Le.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": c
                    }, A.createElement("img", {
                        style: {
                            height: "1.25em"
                        },
                        src: null === (a = me[i.performanceRating]) || void 0 === a ? void 0 : a.icon,
                        alt: ""
                    }), null === (r = me[i.performanceRating]) || void 0 === r ? void 0 : r.label)
                })))) : A.createElement("em", null, "No performance data found"))), A.createElement(M.oI, null, A.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Details")), A.createElement(M.Ao, null, A.createElement(M.X2, null, A.createElement(fe, {
                    role: "presentation",
                    className: "tw-shrink"
                }, A.createElement(M.X2, {
                    className: "tw-mb-2 tw-items-center"
                }, A.createElement(M.$1, {
                    color: "#54b5c5",
                    width: 20,
                    icon: m.CP,
                    className: "me-2"
                }), "Created"), A.createElement(M.X2, {
                    className: "tw-items-center"
                }, A.createElement(M.$1, {
                    color: "#54b5c5",
                    width: 20,
                    icon: u.r6,
                    className: "me-2"
                }), "Updated")), A.createElement(ve, {
                    className: "ms-3"
                }, A.createElement("div", {
                    role: "note",
                    className: "tw-mb-2",
                    "aria-label": "Creation Date"
                }, C()(L.created_at).format("MMM DD YYYY")), A.createElement("div", {
                    role: "note",
                    "aria-label": "Update Date"
                }, C()(L.updated_at).format("MMM DD YYYY"))))))), (Ke || $) && A.createElement(M.X2, {
                    className: "tw-mb-3"
                }, A.createElement(pe, null, A.createElement(M.oI, null, A.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), A.createElement(M.Ao, null, A.createElement(M.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, A.createElement(M.ks, {
                    tags: T,
                    isMod: $,
                    onSelectValues: function(e) {
                        z((function(t) {
                            return (0, r.Z)(new Set([].concat((0, r.Z)(t), (0, r.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        z((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: de
                }))))), (Ke || $) && A.createElement(M.X2, {
                    className: "tw-mb-3"
                }, A.createElement("div", null, A.createElement(M.oI, null, A.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), A.createElement(M.Ao, {
                    className: "tw-block"
                }, A.createElement(M.X2, {
                    className: "tw-mb-2"
                }, A.createElement(ae, {
                    avatar: L,
                    refetch: W
                }))))), (_e || $) && A.createElement(M.X2, {
                    className: "tw-mb-3"
                }, A.createElement(M.l8, {
                    className: "tw-w-full"
                }, A.createElement(M.oI, null, A.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Danger Zone")), A.createElement(M.Ao, null, A.createElement(M.JX, null, A.createElement(X.Z, {
                    isOpen: g,
                    bodyText: "Are you sure you want to DELETE this avatar? This can not be undone!",
                    confirmCallback: function() {
                        Se({
                            avatarId: O
                        }), y(!1)
                    },
                    cancelCallback: function() {
                        return y(!1)
                    }
                }), A.createElement(M.X2, null, A.createElement("div", {
                    className: "tw-w-full"
                }, _e && !We && !Je && A.createElement(M.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        _({
                            avatarId: O
                        })
                    },
                    warning: !0,
                    expand: !0
                }, A.createElement(M.$1, {
                    icon: c.nG
                }), " Make Avatar Public"), _e && !Qe && !Je && A.createElement(M.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        ne({
                            avatarId: O
                        })
                    },
                    warning: !0,
                    expand: !0
                }, A.createElement(M.$1, {
                    icon: i.by
                }), " Make Avatar Private"), ($ || Ke) && !Je && A.createElement(M.zx, {
                    className: "tw-mt-1",
                    onClick: function() {
                        y(!0)
                    },
                    danger: !0,
                    expand: !0
                }, A.createElement(M.$1, {
                    icon: s.$
                }), " Delete Avatar"))))))), !1, !1)
            }
        },
        37599: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var r = a(54546),
                n = a(45573),
                o = a(27003),
                l = a(67294),
                s = a(34698),
                i = a(65706),
                c = a(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    a = e.toggle,
                    u = e.title,
                    m = e.size,
                    d = void 0 === m ? "md" : m,
                    f = e.children,
                    v = e.onToggleCallback,
                    p = void 0 === v ? function() {} : v,
                    E = l.useState(t || !1),
                    g = (0, r.Z)(E, 2),
                    y = g[0],
                    h = g[1];
                l.useEffect((function() {
                    h(t)
                }), [t]);
                return l.createElement("div", null, l.createElement("h3", null, l.createElement(s.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        a ? a() : (p(!y), h(!y))
                    },
                    color: y ? "primary" : "secondary"
                }, y && l.createElement(c.Z, {
                    icon: o.uM
                }), !y && l.createElement(c.Z, {
                    icon: n.Kt
                })), " ", u), l.createElement(i.Z, {
                    isOpen: y
                }, f), "sm" !== d && l.createElement("br", null))
            }
        },
        49567: (e, t, a) => {
            a.d(t, {
                Z: () => f
            });
            var r = a(26778),
                n = a(67294),
                o = a(45697),
                l = a.n(o),
                s = (a(9669), a(39886)),
                i = a(34698),
                c = a(86646),
                u = a(46326),
                m = a(83541),
                d = function(e) {
                    var t = e.query,
                        a = (0, m.Gu)({
                            queryURL: t
                        }),
                        o = a.data,
                        l = a.isFetching,
                        d = a.isSuccess,
                        f = a.isError,
                        v = a.refetch;
                    return n.createElement(s.Z, null, n.createElement("h6", {
                        className: "p-1"
                    }, n.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), d && n.createElement(u.Z, {
                        src: o
                    }), l && "Loading...", f && "Error loading ".concat(t), n.createElement("hr", null), n.createElement(i.Z, {
                        onClick: function() {
                            return v()
                        },
                        className: "text-white"
                    }, n.createElement(c.Z, {
                        icon: r.XS,
                        color: "white"
                    }), " Refresh"))
                };
            d.propTypes = {
                query: l().string.isRequired
            };
            const f = d
        },
        83541: (e, t, a) => {
            a.d(t, {
                Gu: () => l
            });
            var r = a(61509),
                n = {};
            var o = r.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            adminChangeDisplayName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        a = e.displayName,
                                        r = e.lock;
                                    return {
                                        url: n.forcename,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: a,
                                            lock: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "User",
                                        id: a.userId
                                    }]
                                }
                            }),
                            adminChangeUserName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        a = e.displayName,
                                        r = e.username;
                                    return {
                                        url: n.forceUsername,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: a,
                                            username: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, a) {
                                    return [{
                                        type: "User",
                                        id: a.userId
                                    }]
                                }
                            }),
                            jsonEndpoint: e.query({
                                query: function(e) {
                                    return {
                                        url: e.queryURL
                                    }
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["GlobalConfig"]
                }),
                l = (o.useAdminChangeDisplayNameMutation, o.useAdminChangeUserNameMutation, o.useJsonEndpointQuery)
        },
        21538: (e, t, a) => {
            a.d(t, {
                Cm: () => y,
                EA: () => w,
                F6: () => m,
                GG: () => h,
                Gy: () => b,
                LQ: () => f,
                X8: () => A,
                ak: () => g,
                cq: () => E,
                lx: () => d,
                ve: () => v,
                x8: () => p
            });
            var r = a(42138),
                n = a(15861),
                o = a(64687),
                l = a.n(o),
                s = a(61509);

            function i(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    s = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }
            var u = s.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            selectAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            getAvatar: e.query({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "Avatar",
                                        id: a.avatarId
                                    }]
                                }
                            }),
                            setAvatarPublic: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "public"
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            setAvatarPrivate: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "private"
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            setAvatarTags: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId,
                                        a = e.tags;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            tags: a
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            deleteAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            wearAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            enqueueImpostor: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            deleteImpostors: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            getImpostorQueueStats: e.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: e.query({
                                queryFn: (a = (0, n.Z)(l().mark((function e(t, a, n, o) {
                                    var s, i, c, u, m, d, f, v, p, E, g, y, h, b, w, A, I, N, S, k, x, Z, T, C, q, U, P;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                s = t.sort, i = void 0 === s ? "updated" : s, c = t.order, u = void 0 === c ? "descending" : c, m = t.releaseStatus, d = void 0 === m ? "all" : m, f = t.user, v = void 0 === f ? "me" : f, p = t.organization, E = void 0 === p ? "vrchat" : p, g = t.n, y = void 0 === g ? 20 : g, h = t.featured, b = t.userId, w = t.search, A = t.tag, I = t.notag, N = t.platform, S = t.maxUnityVersion, k = t.minUnityVersion, x = t.exactUnityVersion, Z = t.minAssetVersion, T = t.maxAssetVersion, C = t.exactAssetVersion, q = [], U = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: C,
                                                        exactUnityVersion: x,
                                                        featured: h,
                                                        maxAssetVersion: T,
                                                        maxUnityVersion: S,
                                                        minAssetVersion: Z,
                                                        minUnityVersion: k,
                                                        n: y,
                                                        notag: I,
                                                        offset: U,
                                                        order: u,
                                                        organization: E,
                                                        platform: N,
                                                        releaseStatus: d,
                                                        search: w,
                                                        sort: i,
                                                        tag: A,
                                                        user: v,
                                                        userId: b
                                                    }
                                                });
                                            case 6:
                                                if (!(P = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: P.error
                                                });
                                            case 9:
                                                if (!(P.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return q.push.apply(q, (0, r.Z)(P.data)), U += y, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: q
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return a.apply(this, arguments)
                                })
                            }),
                            getFavoriteAvatars: e.query({
                                query: function(e) {
                                    return {
                                        url: "avatars/favorites",
                                        params: {
                                            userId: e.userId,
                                            n: e.n,
                                            offset: e.offset,
                                            tag: e.tag,
                                            tags: e.tags
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: a.tag
                                    }]
                                }
                            }),
                            getAllFavoriteAvatars: e.query({
                                queryFn: (t = (0, n.Z)(l().mark((function e() {
                                    var t, a, n, o, s, c, u, m, d, f, v, p, E, g = arguments;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                a = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, n = t.tags, o = t.userId, s = t.groups, c = void 0 === s ? [] : s, u = g.length > 3 ? g[3] : void 0, m = [], d = i(a ? [a] : c), e.prev = 7, d.s();
                                            case 9:
                                                if ((f = d.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                v = f.value, p = 0;
                                            case 12:
                                                return e.next = 15, u({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: p,
                                                        tag: null != a ? a : v,
                                                        tags: n,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(E = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: E.error
                                                });
                                            case 18:
                                                if (!(E.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return m.push.apply(m, (0, r.Z)(E.data)), p += 50, e.abrupt("continue", 12);
                                            case 22:
                                                return e.abrupt("break", 25);
                                            case 25:
                                                e.next = 9;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(7), d.e(e.t0);
                                            case 32:
                                                return e.prev = 32, d.f(), e.finish(32);
                                            case 35:
                                                return e.abrupt("return", {
                                                    data: m
                                                });
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [7, 29, 32, 35]
                                    ])
                                }))), function() {
                                    return t.apply(this, arguments)
                                }),
                                providesTags: function(e, t) {
                                    var a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).tag;
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: null != a ? a : "all"
                                    }]
                                }
                            })
                        };
                        var t, a
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["FavoriteAvatars"]
                }),
                m = u.useGetAllAvatarsQuery,
                d = u.useGetAllFavoriteAvatarsQuery,
                f = u.useGetAvatarQuery,
                v = (u.useGetFavoriteAvatarsQuery, u.useGetImpostorQueueStatsQuery),
                p = u.useSelectAvatarMutation,
                E = u.useSetAvatarPrivateMutation,
                g = u.useSetAvatarPublicMutation,
                y = u.useSetAvatarTagsMutation,
                h = u.useDeleteAvatarMutation,
                b = u.useWearAvatarMutation,
                w = u.useEnqueueImpostorMutation,
                A = u.useDeleteImpostorsMutation
        }
    }
]);
//# sourceMappingURL=d3d7936fbce4003eb0fe4caeb7b1ef3c5d10bdc493d97c6632f6ca693ed2fb32.js.map