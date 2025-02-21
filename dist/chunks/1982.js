"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1982], {
        11982: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => mt
            });
            var a = r(42138),
                n = r(15861),
                l = r(54546),
                o = r(4965),
                c = r(42619),
                i = r(609),
                s = r(13226),
                u = r(34601),
                m = r(30856),
                d = r(68412),
                w = r(87709),
                f = r(7581),
                p = r(40098),
                g = r(7371),
                v = r(66007),
                b = r(3820),
                h = r(35098),
                E = r(79032),
                y = r(65695),
                x = r(64687),
                k = r.n(x),
                N = r(67294),
                I = r(32981),
                C = r(89250),
                Z = r(79655),
                S = r(53637),
                O = r(23138),
                j = r(25062),
                A = r(27484),
                U = r.n(A),
                D = r(64258),
                P = r(67371),
                L = r(12752),
                F = r(21538),
                M = r(41255),
                z = r(62437),
                R = r(43683),
                T = (r(60006), r(64358)),
                G = r(41727),
                q = r(14411),
                X = (r(37599), r(84090)),
                Y = r(87462),
                $ = r(4942),
                V = r(45987),
                _ = r(65394),
                K = r(85020),
                B = r(18357),
                W = (r(37337), r(83505)),
                J = r(86646),
                Q = ["images", "className", "style"];

            function H(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(r), !0).forEach((function(t) {
                        (0, $.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const te = function(e) {
                var t = e.images,
                    r = void 0 === t ? [] : t,
                    a = e.className,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    c = (0, V.Z)(e, Q),
                    i = N.useRef(null),
                    s = N.useRef(null),
                    u = N.useState(0),
                    m = (0, l.Z)(u, 2),
                    d = m[0],
                    w = m[1],
                    f = N.useMemo((function() {
                        return r.map((function(e) {
                            var t = [64, 128, 256, 512, 1024, 2048].reduce((function(t, r) {
                                return t["".concat(r, "w")] = (0, T.S6)(ee(ee({}, e), {}, {
                                    width: r
                                })), t
                            }), {});
                            return ee(ee({}, e), {}, {
                                sizes: t,
                                fullSrcSet: Object.entries(t).map((function(e) {
                                    var t = (0, l.Z)(e, 2),
                                        r = t[0],
                                        a = t[1];
                                    return "".concat(a, " ").concat(r)
                                })).join(","),
                                thumbSrcSet: "".concat(t["128w"], " 2x, ").concat(t["256w"], " 4x")
                            })
                        }))
                    }), [r]),
                    p = function(e) {
                        var t, r;
                        null === (t = i.current) || void 0 === t || null === (t = t.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === t || t.scrollIntoView({
                            block: "nearest"
                        }), null === (r = s.current) || void 0 === r || null === (r = r.querySelector("[data-gallery-index='".concat(e, "']"))) || void 0 === r || r.scrollIntoView({
                            block: "nearest"
                        })
                    },
                    g = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget;
                        e.currentTarget && i.current && p(t.dataset.galleryIndex)
                    },
                    v = function(e, t) {
                        var r;
                        if (e) {
                            var a = parseInt(null === (r = t.target) || void 0 === r ? void 0 : r.dataset.galleryIndex, 10);
                            Number.isNaN(a) || w(a)
                        }
                    },
                    b = N.useMemo((function() {
                        return f.sort((function(e, t) {
                            return e.order - t.order
                        }))
                    }), [f]);
                return N.createElement("div", (0, Y.Z)({
                    className: (0, W.cx)(a, "tw-group tw-flex tw-flex-col tw-w-full tw-relative tw-gap-2"),
                    style: ee({}, o)
                }, c), N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: i
                }, b.map((function(e, t) {
                    return N.createElement(B.df, {
                        as: "img",
                        threshold: .6,
                        root: i.current,
                        onChange: v,
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        className: "tw-flex-none tw-aspect-video tw-snap-center tw-w-full tw-object-contain tw-rounded-md tw-bg-cover",
                        loading: "lazy",
                        src: e.sizes["2048w"],
                        srcSet: e.fullSrcSet,
                        alt: ""
                    })
                }))), N.createElement("div", {
                    className: "tw-absolute tw-w-full tw-aspect-video tw-top-0 tw-pointer-events-none"
                }, N.createElement("div", {
                    className: "tw-relative tw-w-full tw-aspect-video tw-flex tw-flex-row tw-items-center"
                }, d > 0 && N.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-left-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d < 1 || p(d - 1)
                    }
                }, N.createElement(J.Z, {
                    icon: K.A3,
                    size: "2x"
                })), d < r.length - 1 && N.createElement("button", {
                    type: "button",
                    className: "tw-absolute tw-right-2 tw-bg-dark-grey-transparent-90 tw-p-3 tw-border-none tw-rounded-md tw-hidden group-hover:tw-flex tw-pointer-events-auto",
                    onClick: function() {
                        d > r.length || p(d + 1)
                    }
                }, N.createElement(J.Z, {
                    icon: _._t,
                    size: "2x"
                })))), N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-overflow-x-auto tw-gap-2 tw-rounded-md tw-scroll-smooth tw-snap-x tw-snap-mandatory",
                    ref: s
                }, b.map((function(e, t) {
                    return N.createElement("a", {
                        key: e.fileId || e.fileUrl,
                        "data-gallery-index": t,
                        onClick: g,
                        href: "#".concat(e.fileId),
                        className: "tw-bg-transparent tw-border-none tw-p-0 tw-m-0 tw-cursor-pointer"
                    }, N.createElement("img", {
                        className: (0, W.cx)("tw-w-16 tw-h-16 tw-object-cover tw-rounded-md tw-snap-center tw-border-solid tw-border-2", {
                            "tw-border-primary": d === t,
                            "tw-border-transparent": d !== t
                        }),
                        loading: "lazy",
                        src: e.sizes["64w"],
                        srcSet: e.thumbSrcSet,
                        alt: ""
                    }))
                }))))
            };
            r(49567);
            var re = r(98185),
                ae = r(64537),
                ne = r(94370),
                le = r(6811),
                oe = r(4991),
                ce = r(35773),
                ie = r(95305),
                se = r(93007),
                ue = r(30381),
                me = r.n(ue);

            function de(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return we(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return we(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var l, o = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, l = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                }
            }

            function we(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }
            var fe = ["standalonewindows", "android", "ios"],
                pe = {
                    standalonewindows: "PC",
                    android: "Android",
                    ios: "iOS"
                },
                ge = "standard",
                ve = "impostor",
                be = N.createElement(q.$1, {
                    color: "#54b5c5",
                    icon: le.f8
                }),
                he = {
                    estimatedServiceDurationSeconds: 14400
                };
            const Ee = function(e) {
                var t, r, a = e.avatar,
                    n = e.refetch;
                if (!a) return N.createElement("div", null, "We don't seem to have that avatar.");
                var o, c = 0,
                    i = !1,
                    s = null,
                    u = {},
                    m = de(a.unityPackages);
                try {
                    for (m.s(); !(o = m.n()).done;) {
                        var d = o.value,
                            w = d.platform,
                            f = d.variant,
                            p = d.assetUrl,
                            g = d.unitySortNumber;
                        w in u || (u[w] = {}), "impostor" === f && c++, g >= 2017e7 && "standalonewindows" === w && (i = !0, (null == s || g > s.unitySortNumber) && (s = {
                            fileId: (0, T.oQ)(p),
                            versionNumber: parseInt((0, T.Rz)(p)),
                            unitySortNumber: g
                        })), u[w][null != f ? f : ge] = !0
                    }
                } catch (e) {
                    m.e(e)
                } finally {
                    m.f()
                }
                var v = (0, F.X8)(),
                    b = (0, l.Z)(v, 2),
                    h = b[0],
                    E = b[1],
                    y = E.isLoading,
                    x = E.isError,
                    k = E.error,
                    I = (E.isSuccess, (0, F.EA)()),
                    C = (0, l.Z)(I, 2),
                    Z = C[0],
                    O = C[1],
                    j = O.isLoading,
                    A = O.isError,
                    U = O.error,
                    D = O.isSuccess,
                    P = O.reset,
                    z = (0, M.Ko)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    R = z.data,
                    G = z.refetch,
                    X = (0, N.useState)(!1),
                    Y = (0, l.Z)(X, 2),
                    $ = Y[0],
                    V = Y[1],
                    _ = (0, N.useState)(null),
                    K = (0, l.Z)(_, 2),
                    B = K[0],
                    W = K[1];
                (0, L.Yz)(n, $ ? 1e4 : null), (0, L.Yz)(G, $ ? 5e3 : null);
                var J = (0, F.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !$
                    }).data,
                    Q = (0, F.ve)().data,
                    H = null !== (r = null != J ? J : Q) && void 0 !== r ? r : he,
                    ee = c > 0,
                    te = c === fe.length,
                    re = a.lastImpostorizationRequest,
                    ae = null != re && me()(re).add(144e5).isAfter(me()());
                if ($) {
                    if ($)
                        if (te) V(!1);
                        else if (ae) {
                        var le, ue, we = null == R || null === (le = R.versions) || void 0 === le || null === (le = le[s.versionNumber]) || void 0 === le || null === (le = le.file) || void 0 === le ? void 0 : le.impostorStatus;
                        if (null != we && null != we.date && me()(we.date).isAfter(re))
                            if (!we.isSuccess) W(null !== (ue = we.failureReason) && void 0 !== ue ? ue : "Well, this is embarassing, we're not sure."), V(!1)
                    }
                } else D ? (P(), V(!0)) : !ae || te || B || V(!0);
                var Ee = i,
                    ye = "Unknown";
                i || (ye = "No asset found for PC Platform with Unity ".concat(2017, " or later"));
                var xe = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = U.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = N.createElement("code", null, U.data.error.message)), r
                };
                return N.createElement(S.Z, null, N.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", N.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), H.estimatedServiceDurationSeconds > 3600 && N.createElement(q.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, N.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", me().duration(H.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), N.createElement(oe.Z, {
                    size: "sm"
                }, N.createElement("thead", null, N.createElement("tr", {
                    style: {
                        borderColor: "#737372"
                    }
                }, N.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Platform"), N.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "User-created"), N.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Impostor"))), N.createElement("tbody", null, fe.map((function(e) {
                    var t = u[e] || {};
                    return N.createElement("tr", {
                        key: e,
                        style: {
                            borderColor: "#737372"
                        }
                    }, N.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, pe[e]), N.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, ge in t && be), N.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, ve in t && be))
                })))), B && N.createElement(ce.Z, null, N.createElement(ie.Z, null, N.createElement(q.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, N.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), N.createElement("p", null, N.createElement("pre", null, B)), N.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !Ee && N.createElement(ce.Z, null, N.createElement(ie.Z, null, N.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), N.createElement("p", null, N.createElement("pre", null, ye)))), N.createElement(ce.Z, null, N.createElement(ie.Z, null, N.createElement(q.zx, {
                    className: "mb-2",
                    onClick: function() {
                        Z({
                            avatarId: a.id
                        })
                    },
                    color: "primary",
                    disabled: te || $ || !Ee,
                    loading: j || $
                }, N.createElement(q.$1, {
                    width: 20,
                    icon: se.Z
                }), " ", function() {
                    var e;
                    if (j) e = "Requesting Impostors...";
                    else if ($) {
                        if (e = "Generating Impostors...", null != re) {
                            var t = me()(),
                                r = me()(re).add(H.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var a = me().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(a.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), N.createElement(ie.Z, null, N.createElement(q.zx, {
                    className: "mb-2",
                    onClick: function() {
                        h({
                            avatarId: a.id
                        })
                    },
                    color: "secondary",
                    loading: y,
                    disabled: !ee
                }, N.createElement(q.$1, {
                    width: 20,
                    icon: ne.nY
                }), " Delete Impostors"))), x && N.createElement(q.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", N.createElement("br", null), xe(k)), A && N.createElement(q.qX, {
                    type: "error"
                }, "Couldn't request impostors.", N.createElement("br", null), xe(U)))
            };
            r(9669);
            var ye = r(41145),
                xe = r(62228),
                ke = r(59545),
                Ne = r(76553),
                Ie = r(92332),
                Ce = r(12690),
                Ze = r(78076);
            const Se = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    a = e.maxFileSizeMegaBytes,
                    o = e.galleryId,
                    i = e.file,
                    s = void 0 === i ? null : i,
                    u = e.validationCallback,
                    m = void 0 === u ? function() {} : u,
                    d = (0, I.I0)(),
                    w = (0, N.useRef)(null),
                    f = (0, N.useState)(""),
                    g = (0, l.Z)(f, 2),
                    b = g[0],
                    h = g[1],
                    E = null === s ? "" : (0, T.S6)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    y = (0, M.Yh)(),
                    x = (0, l.Z)(y, 2),
                    C = x[0],
                    Z = x[1].isLoading,
                    S = (0, M.g3)(),
                    O = (0, l.Z)(S, 2),
                    j = O[0],
                    A = O[1].isLoading,
                    U = function() {
                        var e = (0, n.Z)(k().mark((function e(n) {
                            var l, c, i, s;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (c = null === (l = n.target) || void 0 === l || null === (l = l.files) || void 0 === l ? void 0 : l[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, T.o1)({
                                            file: c,
                                            maxFileSizeMegaBytes: a,
                                            minImageDimension: t,
                                            maxImageDimension: r
                                        });
                                    case 5:
                                        if (i = e.sent, m(i), i.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, C({
                                            tag: "avatargallery",
                                            file: c,
                                            galleryId: o
                                        }).unwrap();
                                    case 12:
                                        h(""), e.next = 19;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), d((0, D.d)({
                                            title: "Avatar Gallery",
                                            icon: v.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 15]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var r, a;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, j({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), d((0, D.d)({
                                            title: "Avatar Gallery",
                                            icon: v.KC,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return Z || A ? N.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, N.createElement(J.Z, {
                    icon: Ie.LM,
                    spin: !0,
                    color: "#404C58",
                    width: "32"
                })) : null === s ? N.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-pointer",
                    onClick: function() {
                        return w.current.click()
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key && " " !== e.key || w.current.click()
                    }
                }, N.createElement(J.Z, {
                    icon: p.r8,
                    color: "#404C58",
                    width: 32
                }), N.createElement("input", {
                    className: "tw-hidden",
                    type: "file",
                    accept: ".jpg, .jpeg, .png",
                    ref: w,
                    value: b,
                    onChange: function(e) {
                        U(e)
                    },
                    name: "additional-image__input",
                    "aria-label": "Upload additional image"
                })) : N.createElement("div", {
                    className: " tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-grab tw-bg-cover tw-bg-center tw-relative ",
                    style: {
                        backgroundImage: "url(".concat(E, ")")
                    },
                    "aria-label": "Additional Avatar Showcase"
                }, N.createElement("span", {
                    className: "tw-absolute tw-bottom-1 tw-right-1 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded tw-cursor-pointer hover:tw-bg-dark-grey tw-transition",
                    onClick: function() {
                        return P({
                            fileId: s.id
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" !== e.key && " " !== e.key || P({
                            fileId: s.id
                        })
                    },
                    "aria-label": "Delete additional image"
                }, N.createElement(J.Z, {
                    icon: c.$,
                    width: 16
                })))
            };
            var Oe = r(50048);
            const je = function(e) {
                var t = e.className,
                    r = e.minImageDimension,
                    o = void 0 === r ? 100 : r,
                    i = e.maxImageDimension,
                    s = void 0 === i ? 2048 : i,
                    u = e.maxFileSizeMegaBytes,
                    m = void 0 === u ? 10 : u,
                    d = e.validationCallback,
                    w = void 0 === d ? function() {} : d,
                    f = e.galleryId,
                    p = (0, I.I0)(),
                    g = (0, N.useRef)(null),
                    b = (0, N.useState)(""),
                    h = (0, l.Z)(b, 2),
                    E = h[0],
                    y = h[1],
                    x = (0, N.useState)([]),
                    C = (0, l.Z)(x, 2),
                    Z = C[0],
                    S = C[1],
                    O = (0, N.useState)(!1),
                    j = (0, l.Z)(O, 2),
                    A = j[0],
                    U = j[1],
                    P = (0, N.useState)(!0),
                    L = (0, l.Z)(P, 2),
                    F = L[0],
                    z = L[1],
                    R = (0, N.useState)(null),
                    G = (0, l.Z)(R, 2),
                    q = G[0],
                    X = G[1],
                    Y = (0, M.Yh)(),
                    $ = (0, l.Z)(Y, 2),
                    V = $[0],
                    _ = $[1].isLoading,
                    K = (0, M.g3)(),
                    B = (0, l.Z)(K, 2),
                    W = B[0],
                    Q = B[1].isLoading,
                    H = (0, M.e4)(),
                    ee = (0, l.Z)(H, 2),
                    te = ee[0],
                    re = ee[1],
                    ae = re.isLoading,
                    ne = re.error,
                    le = (0, M.iw)({
                        avatarId: f
                    }, {
                        skip: !f
                    }),
                    oe = le.data;
                le.refetch;
                (0, N.useEffect)((function() {
                    if (oe) {
                        var e = (0, a.Z)(oe).sort((function(e, t) {
                            return e.order - t.order
                        }));
                        S(e)
                    }
                }), [oe]);
                var ce = function(e, t) {
                        null !== t && (X(e), U(!0))
                    },
                    ie = function(e) {
                        e.preventDefault()
                    },
                    se = function() {
                        var e = (0, n.Z)(k().mark((function e(t, r) {
                            var n, o, c, i, s, u;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== q && q !== t && null !== r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = (0, a.Z)(Z), o = n.splice(q, 1), c = (0, l.Z)(o, 1), i = c[0], n.splice(t, 0, i), S(n), X(null), U(!1), s = n.map((function(e) {
                                            return e.id
                                        })), e.prev = 9, e.next = 12, te({
                                            ids: s
                                        });
                                    case 12:
                                        e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(9), console.error("Failed to update image order:", e.t0), p((0, D.d)({
                                            title: "Avatar Gallery",
                                            icon: v.KC,
                                            message: "Failed to change order of images: ".concat(null == ne || null === (u = ne.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 14]
                            ])
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ue = (null == Z ? void 0 : Z.length) > 0,
                    me = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var r, a, n, l;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = null === (r = t.target) || void 0 === r || null === (r = r.files) || void 0 === r ? void 0 : r[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, T.o1)({
                                            file: a,
                                            maxFileSizeMegaBytes: m,
                                            minImageDimension: o,
                                            maxImageDimension: s
                                        });
                                    case 5:
                                        if (n = e.sent, w(n), n.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, V({
                                            tag: "avatargallery",
                                            file: a,
                                            galleryId: f
                                        }).unwrap();
                                    case 12:
                                        y(""), e.next = 19;
                                        break;
                                    case 15:
                                        return e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), e.abrupt("return", p((0, D.d)({
                                            title: "Avatar Gallery",
                                            icon: v.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 15]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    de = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var r, a;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, W({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), p((0, D.d)({
                                            title: "Avatar Gallery",
                                            icon: v.KC,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    we = Q || _ || ae;
                return N.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !we && function() {
                    if (!ue) return N.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                    }, N.createElement(J.Z, {
                        icon: Ze.Vm,
                        color: "#404C58",
                        width: 96
                    }), N.createElement(Oe.ZP, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return g.current.click()
                        }
                    }, N.createElement(J.Z, {
                        icon: Ze.Vm
                    }), " Upload Cover Image"), N.createElement("input", {
                        className: "tw-hidden",
                        type: "file",
                        accept: ".jpg, .jpeg, .png",
                        ref: g,
                        value: E,
                        onChange: function(e) {
                            me(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = Z[0] || null,
                        t = (0, T.S6)({
                            fileId: e.id
                        });
                    return N.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4 tw-overflow-hidden tw-relative tw-cursor-grab",
                        draggable: !0,
                        onDragStart: function() {
                            return ce(0, e)
                        },
                        onDragOver: ie,
                        onDrop: function() {
                            return se(0, e)
                        },
                        style: {
                            transition: A ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: 0 === q ? .3 : 1,
                            transform: 0 === q ? "scale(0.95)" : "scale(1)"
                        }
                    }, N.createElement("div", {
                        className: "tw-relative"
                    }, F && N.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, N.createElement(J.Z, {
                        icon: Ie.LM,
                        color: "#FFFFFF",
                        spin: !0,
                        width: 48
                    })), N.createElement("img", {
                        src: t,
                        alt: "Avatar Cover Showcase",
                        onLoad: function() {
                            return z(!1)
                        },
                        onError: function() {
                            return z(!1)
                        },
                        style: {
                            display: F ? "none" : "block"
                        }
                    })), N.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-right-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded tw-cursor-pointer hover:tw-bg-dark-grey tw-transition",
                        onClick: function() {
                            return de({
                                fileId: e.id
                            })
                        },
                        onKeyUp: function(t) {
                            "Enter" !== t.key && " " !== t.key || de({
                                fileId: e.id
                            })
                        },
                        "aria-label": "Delete cover image"
                    }, N.createElement(J.Z, {
                        icon: c.$,
                        width: 16
                    })), N.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, N.createElement(J.Z, {
                        icon: Ce.xV,
                        width: 16
                    }), " Cover Image"))
                }(), we && N.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, N.createElement(J.Z, {
                    icon: Ie.LM,
                    color: "#404C58",
                    width: "32",
                    spin: !0
                })), N.createElement("div", {
                    className: "tw-grid tw-grid-cols-5 tw-gap-4 tw-w-full"
                }, function(e) {
                    for (var t = new Array(5).fill(null), r = 0; r < e.length && r < 5; r++) t[r] = e[r];
                    return t
                }((0, a.Z)(Z.slice(1))).map((function(e, t) {
                    return N.createElement("div", {
                        key: null === e ? t : e.id,
                        draggable: !0,
                        onDragStart: function() {
                            ce(t + 1, e)
                        },
                        onDragOver: ie,
                        onDrop: function() {
                            return se(t + 1, e)
                        },
                        style: {
                            transition: A ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: q === t + 1 ? .3 : 1,
                            transform: q === t + 1 ? "scale(0.95)" : "scale(1)"
                        }
                    }, N.createElement(Se, {
                        file: e,
                        galleryId: f,
                        minImageDimension: o,
                        maxImageDimension: s,
                        maxFileSizeMegaBytes: m,
                        validationCallback: function(e) {
                            return w(e)
                        }
                    }))
                }))))
            };
            var Ae = r(72998),
                Ue = r(22497),
                De = r(60933),
                Pe = r(73423),
                Le = r(39191);

            function Fe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function Me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fe(Object(r), !0).forEach((function(t) {
                        (0, $.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ze = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    a = e.imageTag,
                    o = void 0 === a ? null : a,
                    c = N.useState(null),
                    i = (0, l.Z)(c, 2),
                    s = i[0],
                    u = i[1],
                    m = (0, M.Yh)(),
                    d = (0, l.Z)(m, 2),
                    w = d[0],
                    f = d[1].isLoading,
                    p = (0, I.I0)(),
                    g = function(e) {
                        var t = e.title,
                            r = e.message,
                            a = e.color;
                        p((0, D.d)({
                            title: t,
                            icon: Ze.Vm,
                            message: r,
                            color: a,
                            timeout: 5e3
                        }))
                    },
                    v = function() {
                        var e = (0, n.Z)(k().mark((function e(r) {
                            var a;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = r.file, (0, De.DS)({
                                                file: a,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", g({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, b({
                                            file: a
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        u(N.createElement(Le.Z, {
                                            baseImage: a,
                                            onCompleted: h,
                                            onCancel: t,
                                            onBack: function() {
                                                return u(null)
                                            }
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    b = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var r, a, n, l;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, De.uG)(r);
                                    case 3:
                                        if (a = e.sent, n = a.width < 64 || a.height < 64, l = a.width > 2048 || a.height > 2048, !n) {
                                            e.next = 9;
                                            break
                                        }
                                        return g({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 9:
                                        if (!l) {
                                            e.next = 12;
                                            break
                                        }
                                        return g({
                                            title: "Image Error",
                                            message: "The image you are uploading is too big!\nKeep it to under 2048x2048.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 12:
                                        return e.abrupt("return", !0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var a, n, l, c, i;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.image, n = t.mask, void 0 === n ? "square" : n, e.prev = 1, e.next = 4, w(Me({
                                            file: a.file || a
                                        }, null !== o && {
                                            tag: o
                                        })).unwrap();
                                    case 4:
                                        l = e.sent, r(l), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error("Error deleting avatar:", e.t0), p((0, D.d)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: Ne.eH,
                                            message: null !== (c = null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) && void 0 !== c ? c : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return N.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-min-h-[30em] tw-overflow-hidden"
                }, f && N.createElement(Pe.Z, {
                    name: "image"
                }), !f && (s || N.createElement(Ue.Z, {
                    fileSelectedCallback: function(e) {
                        return v(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels."
                })))
            };
            var Re = r(45697),
                Te = r.n(Re),
                Ge = function(e) {
                    var t = e.avatarId,
                        r = e.isOpen,
                        a = e.confirmCallback,
                        n = e.cancelCallback;
                    return r ? N.createElement("div", {
                        className: "tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto"
                    }, N.createElement("div", {
                        className: "tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0"
                    }, N.createElement("div", {
                        className: "tw-fixed tw-inset-0 tw-transition-opacity",
                        "aria-hidden": "true"
                    }, N.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-bg-dark-grey-transparent-90",
                        onClick: n
                    })), N.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen",
                        "aria-hidden": "true"
                    }, "​"), N.createElement("div", {
                        className: "tw-inline-block tw-align-bottom tw-bg-black tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-[750px] sm:tw-w-full"
                    }, N.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-flex tw-flex-row tw-justify-between tw-items-center"
                    }, N.createElement("h3", {
                        className: "heading tw-text-white tw-font-bold tw-text-2xl tw-m-0"
                    }, "Delete Avatar"), N.createElement(Oe.ZP, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: n
                    }, N.createElement(J.Z, {
                        icon: w.faXmark
                    }))), N.createElement("div", {
                        className: "tw-bg-black tw-px-5 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4"
                    }, N.createElement("div", {
                        className: "sm:tw-flex sm:tw-items-start"
                    }, N.createElement("div", {
                        className: "tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-text-left"
                    }, N.createElement("p", {
                        className: "tw-text-md tw-text-white tw-font-bold"
                    }, "Are you sure you want to delete this avatar? This is NOT reversible.")))), N.createElement("div", {
                        className: "tw-px-4 tw-py-4 tw-justify-between sm:tw-px-6 sm:tw-flex sm:tw-flex-row-reverse"
                    }, N.createElement(Oe.ZP, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return a(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), N.createElement(Oe.ZP, {
                        neutral: !0,
                        className: "tw-mt-3 tw-w-full sm:tw-mt-0 tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 sm:tw-text-sm",
                        onClick: n,
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Cancel"))))) : null
                };
            Ge.propTypes = {
                avatarId: Te().string.isRequired,
                isOpen: Te().bool.isRequired,
                confirmCallback: Te().func.isRequired,
                cancelCallback: Te().func.isRequired
            };
            const qe = Ge;
            var Xe = ["thumbnailImageUrl"];

            function Ye(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function $e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(r), !0).forEach((function(t) {
                        (0, $.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ve = [{
                    id: "content_sex",
                    label: "Sexually Suggestive",
                    checked: !1
                }, {
                    id: "content_adult",
                    label: "Adult Language and Themes",
                    checked: !1
                }, {
                    id: "content_violence",
                    label: "Graphic Violence",
                    checked: !1
                }, {
                    id: "content_gore",
                    label: "Excessive Gore",
                    checked: !1
                }, {
                    id: "content_horror",
                    label: "Extreme Horror",
                    checked: !1
                }],
                _e = "content_",
                Ke = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "tags", "acknowledgements"];
            const Be = function(e) {
                var t, r, o, c, i, s, u, m = e.isOpen,
                    d = e.avatarId,
                    f = e.avatarStyles,
                    g = void 0 === f ? [] : f,
                    v = e.onCloseCallback,
                    b = (0, F.LQ)({
                        avatarId: d,
                        getListingData: !0
                    }),
                    h = b.data,
                    E = (b.isFetching, b.isError, b.error, b.refetch, (0, C.s0)()),
                    y = (0, I.I0)(),
                    x = Ve.map((function(e) {
                        return $e($e({}, e), {}, {
                            checked: h.tags.includes(e.id)
                        })
                    })),
                    Z = (o = h, s = (null === (c = g.find((function(e) {
                        var t, r;
                        return (null == e || null === (t = e.styleName) || void 0 === t ? void 0 : t.toLowerCase()) === (null == h || null === (r = h.styles) || void 0 === r || null === (r = r.primary) || void 0 === r ? void 0 : r.toLowerCase())
                    }))) || void 0 === c ? void 0 : c.id) || null, u = (null === (i = g.find((function(e) {
                        var t, r;
                        return (null == e || null === (t = e.styleName) || void 0 === t ? void 0 : t.toLowerCase()) === (null == h || null === (r = h.styles) || void 0 === r || null === (r = r.secondary) || void 0 === r ? void 0 : r.toLowerCase())
                    }))) || void 0 === i ? void 0 : i.id) || null, $e($e({}, Object.keys(o).filter((function(e) {
                        return Ke.includes(e)
                    })).reduce((function(e, t) {
                        return e[t] = o[t], e
                    }), {})), {}, {
                        styles: {
                            primary: s,
                            secondary: u
                        }
                    })),
                    S = (0, N.useState)(!0),
                    O = (0, l.Z)(S, 2),
                    j = O[0],
                    A = O[1],
                    U = (0, N.useState)({
                        pass: !0,
                        message: ""
                    }),
                    P = (0, l.Z)(U, 2),
                    L = P[0],
                    M = P[1],
                    z = (0, N.useState)("overview"),
                    R = (0, l.Z)(z, 2),
                    G = R[0],
                    X = R[1],
                    Y = (0, N.useState)(x),
                    $ = (0, l.Z)(Y, 2),
                    _ = $[0],
                    K = $[1],
                    B = (0, N.useState)(Z),
                    W = (0, l.Z)(B, 2),
                    J = W[0],
                    Q = W[1],
                    H = (0, N.useState)(!1),
                    ee = (0, l.Z)(H, 2),
                    te = ee[0],
                    re = ee[1],
                    ae = (0, N.useState)(!!Z.acknowledgements),
                    ne = (0, l.Z)(ae, 2),
                    oe = ne[0],
                    ce = ne[1],
                    ie = (0, N.useState)(!!Z.acknowledgements),
                    se = (0, l.Z)(ie, 2),
                    ue = se[0],
                    me = se[1],
                    de = (0, N.useState)(!1),
                    we = (0, l.Z)(de, 2),
                    fe = we[0],
                    pe = we[1],
                    ge = (0, N.useState)(""),
                    ve = (0, l.Z)(ge, 2),
                    be = ve[0],
                    he = ve[1],
                    Ee = (0, N.useRef)(null),
                    Ie = (0, F.C0)(),
                    Ce = (0, l.Z)(Ie, 2),
                    Ze = Ce[0],
                    Se = Ce[1].isLoading,
                    Oe = (0, F.GG)(),
                    Ue = (0, l.Z)(Oe, 1)[0],
                    De = (0, N.useMemo)((function() {
                        return J.tags.filter((function(e) {
                            return !e.startsWith(_e)
                        }))
                    }), [J.tags]),
                    Pe = (0, N.useMemo)((function() {
                        var e;
                        return ue && !oe && (null == J || null === (e = J.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }), [ue, oe, J.acknowledgements]),
                    Le = function() {
                        return Q(Z)
                    },
                    Fe = function() {
                        var e = (0, n.Z)(k().mark((function e() {
                            var t, r, n, l, o;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = _.filter((function(e) {
                                            return e.checked
                                        })).map((function(e) {
                                            return e.id
                                        })), r = [].concat((0, a.Z)(De), (0, a.Z)(t)), J.thumbnailImageUrl, n = (0, V.Z)(J, Xe), e.prev = 3, e.next = 6, Ze({
                                            avatarId: d,
                                            data: $e($e({}, n), {}, {
                                                tags: r
                                            })
                                        }).unwrap();
                                    case 6:
                                        v(), y((0, D.d)({
                                            title: "Avatar Updated",
                                            icon: le.f8,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), console.error("Error updating avatar:", e.t0), y((0, D.d)({
                                            title: "Failed to update avatar",
                                            icon: Ne.eH,
                                            message: null !== (l = null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Me = function() {
                        var e = (0, n.Z)(k().mark((function e(t) {
                            var r, a;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Ue({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        E("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), y((0, D.d)({
                                            title: "Failed to delete avatar",
                                            icon: Ne.eH,
                                            message: null !== (r = null === (a = e.t0.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Re = (0, N.useCallback)((function(e) {
                        X(e)
                    }), []);
                return N.createElement(q.u_, {
                    title: "Edit Avatar",
                    onClose: function() {
                        Le(), A(!0), v()
                    },
                    isVisible: m,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    backgroundColor: "#181B1F",
                    className: "tw-p-5"
                }, N.createElement(qe, {
                    avatarId: d,
                    isOpen: te,
                    cancelCallback: function() {
                        return re(!1)
                    },
                    confirmCallback: function() {
                        return Me(h.id)
                    }
                }), N.createElement(q.u_, {
                    isVisible: fe,
                    className: "tw-pt-0",
                    onClose: function() {
                        return pe(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: N.createElement(ze, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return pe(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        a = (0, T.d3)({
                                            fileUrl: r
                                        }),
                                        n = a.fileId,
                                        l = a.fileVersion,
                                        o = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(n, "/").concat(l, "/256");
                                    Q($e($e({}, J), {}, {
                                        thumbnailImageUrl: o,
                                        imageUrl: r
                                    })), pe(!1)
                                } catch (e) {
                                    return console.error("Failed to process the uploaded image data", e.message), null
                                }
                            }(e)
                        }
                    })
                }), N.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, N.createElement(Ae.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: Re,
                    tabs: [{
                        id: "overview",
                        name: "Overview",
                        condition: !0
                    }, {
                        id: "gallery",
                        name: "Gallery",
                        condition: !0
                    }],
                    selected: G,
                    justify: "start"
                }), N.createElement("div", {
                    className: "tw-".concat("overview" === G ? "block" : "hidden", " tw-w-full")
                }, N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full"
                }, N.createElement("div", {
                    className: "tw-block tw-mr-5"
                }, N.createElement("button", {
                    onClick: function() {
                        return pe(!0)
                    },
                    type: "button",
                    className: "\n                  tw-bg-cover tw-bg-center tw-w-[286px] tw-h-[286px]  \n                  tw-border-0 tw-p-0 tw-rounded-2xl tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent\n                ",
                    style: {
                        backgroundImage: "url(".concat((null == J ? void 0 : J.thumbnailImageUrl) || (null == J ? void 0 : J.imageUrl), ")")
                    }
                })), N.createElement("div", {
                    className: "tw-flex-grow"
                }, N.createElement("div", {
                    className: "tw-mb-3"
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), N.createElement(q.II, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: J.name,
                    onChange: function(e) {
                        return Q($e($e({}, J), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 64,
                    minLength: 1
                }), N.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = J.name.length) && void 0 !== t ? t : 0, "/64")), N.createElement("div", {
                    className: "tw-mb-0"
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), N.createElement(q.gx, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: J.description,
                    onChange: function(e) {
                        return Q($e($e({}, J), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 256,
                    minLength: 1
                }), N.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = J.description.length) && void 0 !== r ? r : 0, "/256")))), N.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mt-5"
                }, N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between tw-mb-5"
                }, N.createElement("div", {
                    className: "tw-mb-5"
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Primary Style ", N.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), N.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: J.styles.primary,
                    onChange: function(e) {
                        return Q($e($e({}, J), {}, {
                            styles: $e($e({}, J.styles), {}, {
                                primary: e.target.value
                            })
                        }))
                    }
                }, N.createElement("option", {
                    value: ""
                }, "Not Specified"), g.map((function(e) {
                    return N.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))), (null == J ? void 0 : J.styles.primary) && N.createElement("div", {
                    className: "tw-mb-5"
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Secondary Style ", N.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), N.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: J.styles.secondary,
                    onChange: function(e) {
                        return Q($e($e({}, J), {}, {
                            styles: $e($e({}, J.styles), {}, {
                                secondary: e.target.value
                            })
                        }))
                    }
                }, N.createElement("option", {
                    value: ""
                }, "Not Specified"), g.map((function(e) {
                    return N.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))))), N.createElement("div", {
                    className: "tw-mr-5"
                }, N.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Tags"), N.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "Add tags to help people find your avatars more easily in the Avatar Marketplace.")), N.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, N.createElement(q.II, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            if (J.tags.find((function(t) {
                                    return t === e.target.value
                                })) || 0 === be.trim().length) return;
                            Q($e($e({}, J), {}, {
                                tags: [].concat((0, a.Z)(J.tags), [e.target.value])
                            })), he("")
                        }
                    },
                    value: be,
                    ref: Ee,
                    onChange: function(e) {
                        return he(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: De.length >= 10
                }), N.createElement(q.zx, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Ee.current.focus(), J.tags.find((function(e) {
                            return e === Ee.current.value
                        })) || (Q($e($e({}, J), {}, {
                            tags: [].concat((0, a.Z)(J.tags), [Ee.current.value])
                        })), he(""))
                    },
                    disabled: De.length >= 10 || 0 === be.trim().length
                }, N.createElement(q.$1, {
                    icon: p.r8
                }))), N.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, J.tags.filter((function(e) {
                    return !e.startsWith(_e)
                })).map((function(e) {
                    return N.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, N.createElement("span", null, e), N.createElement(q.$1, {
                        icon: ke.NB,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return Q($e($e({}, J), {}, {
                                tags: J.tags.filter((function(t) {
                                    return t !== e
                                }))
                            }))
                        }
                    }))
                }))), N.createElement("p", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-5"
                }, "You can add up to 10 custom tags for your avatar."), N.createElement("div", {
                    className: ""
                }, N.createElement("label", {
                    className: "tw-mb-2"
                }, "Add Acknowledgements"), N.createElement("p", {
                    className: "tw-text-base tw-text-placeholder-text tw-mb-2"
                }, "If you’ve used assets or work from other creations in your avatar.", N.createElement("span", {
                    className: "tw-text-link-highlight tw-cursor-pointer tw-select-none tw-block",
                    onClick: function() {
                        return me(!ue)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && me(!ue)
                    }
                }, "please Acknowledge them here ", N.createElement(q.$1, {
                    icon: ue ? xe.mT : ye.pt
                }))), N.createElement(q.gx, {
                    className: "tw-".concat(ue ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == J ? void 0 : J.acknowledgements,
                    onChange: function(e) {
                        Q($e($e({}, J), {}, {
                            acknowledgements: e.target.value
                        })), console.log("event.target.value.length:::", e.target.value.length), console.log(e.target.value.length > 0), ce(!1)
                    },
                    maxLength: 256,
                    minLength: 1
                }), N.createElement("div", {
                    className: "".concat(ue ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, N.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: oe,
                    onChange: function() {
                        return ce(!oe)
                    },
                    value: "acknowledge",
                    className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                }), N.createElement("label", {
                    htmlFor: "credits-checkbox",
                    className: "tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                }, "I confirm that I have the necessary rights to use and distribute all the works mentioned here."))), N.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), N.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mb-5"
                }, N.createElement("label", {
                    className: "tw-text-xl tw-font-bold tw-mb-3"
                }, "Content Warnings"), N.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2"
                }, _.map((function(e) {
                    return N.createElement("div", {
                        key: e.id,
                        className: "tw-flex tw-items-center tw-cursor-pointer"
                    }, N.createElement("input", {
                        id: "".concat(e.id, "-checkbox"),
                        type: "checkbox",
                        value: e.id,
                        checked: e.checked,
                        onChange: function(t) {
                            var r = _.map((function(r) {
                                return r.id === e.id ? $e($e({}, r), {}, {
                                    checked: t.target.checked
                                }) : r
                            }));
                            K(r)
                        },
                        className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                    }), N.createElement("label", {
                        htmlFor: "".concat(e.id, "-checkbox"),
                        className: "tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                    }, e.label))
                }))))))), N.createElement("div", {
                    className: "tw-".concat("gallery" === G ? "flex" : "hidden", " tw-container tw-flex-col")
                }, N.createElement("h2", {
                    className: "heading"
                }, "Image Gallery"), N.createElement("p", null, "You can choose to upload up to 6 images to enhance your listing and attract more buyers. Recommended resolution: 1920x1080px. Maximum file size: 1MB."), j && N.createElement("p", {
                    className: "tw-rounded-lg tw-bg-[#000] tw-px-5 tw-py-4 tw-flex tw-justify-between tw-items-center"
                }, "You can drag images to reorder them", N.createElement(q.$1, {
                    icon: w.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return A(!1)
                    }
                })), !1 === L.pass && N.createElement(q.qX, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == L ? void 0 : L.message
                }), N.createElement(je, {
                    galleryId: d,
                    validationCallback: function(e) {
                        return M(e)
                    }
                })), N.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, N.createElement("div", {
                    className: "tw-flex"
                }, N.createElement(q.zx, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        Le(), v()
                    },
                    neutral: !0
                }, "Cancel"), N.createElement(q.zx, {
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return re(!0)
                    },
                    neutral: !0
                }, "Delete Avatar")), N.createElement(q.zx, {
                    loading: Se,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return Fe()
                    },
                    disabled: Pe
                }, "Save Changes"))))
            };
            var We = r(73100),
                Je = r(42688),
                Qe = r(37538),
                He = r(8842),
                et = r(22933),
                tt = r(52501);
            var rt = {
                    standalonewindows: "PC",
                    android: "Android",
                    ios: "iOS"
                },
                at = {
                    standalonewindows: h.tc,
                    android: y.us,
                    ios: E.Av
                },
                nt = {
                    None: {
                        icon: He,
                        label: "Unknown"
                    },
                    Excellent: {
                        icon: We,
                        label: "Excellent"
                    },
                    Good: {
                        icon: Je,
                        label: "Good"
                    },
                    Medium: {
                        icon: Qe,
                        label: "Medium"
                    },
                    Poor: {
                        icon: et,
                        label: "Poor"
                    },
                    VeryPoor: {
                        icon: tt,
                        label: "Very Poor"
                    }
                },
                lt = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                ot = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                ct = (0, o.Z)(q.JX, {
                    target: "e1blkums4"
                })({
                    name: "lfip73",
                    styles: "color:#737372;font-weight:bold"
                }),
                it = (0, o.Z)(ct, {
                    target: "e1blkums3"
                })({
                    name: "lugakg",
                    styles: "font-weight:normal"
                }),
                st = (0, o.Z)(q.JX, {
                    target: "e1blkums1"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                }),
                ut = (0, o.Z)(q.JX, {
                    target: "e1blkums0"
                })({
                    name: "158lu6y",
                    styles: "flex:1;min-width:300px"
                });
            const mt = function() {
                var e, t, r, o = (0, I.I0)(),
                    h = (0, C.s0)(),
                    E = (0, C.UO)().avatarId,
                    y = (0, L.Tu)().user,
                    x = (0, L.pc)(),
                    A = (0, I.v9)((function(e) {
                        return e.productFlow
                    })),
                    Y = A.currentStep,
                    $ = (A.currentProduct, N.useState(!1)),
                    V = (0, l.Z)($, 2),
                    _ = V[0],
                    K = V[1],
                    B = N.useState(null),
                    W = (0, l.Z)(B, 2),
                    J = W[0],
                    Q = W[1],
                    H = N.useState(!1),
                    ee = (0, l.Z)(H, 2),
                    ne = ee[0],
                    le = ee[1],
                    oe = N.useState(!1),
                    ce = (0, l.Z)(oe, 2),
                    ie = ce[0],
                    se = ce[1],
                    ue = (0, F.CO)(),
                    me = ue.data,
                    de = void 0 === me ? [] : me,
                    we = (ue.isFetching, ue.isError, ue.error, (0, F.LQ)({
                        avatarId: E,
                        getListingData: !0
                    })),
                    fe = we.data,
                    pe = we.isFetching,
                    ge = we.isError,
                    ve = we.error,
                    be = we.refetch,
                    he = (0, z.GR)(null == fe ? void 0 : fe.authorId, {
                        skip: !E || !fe || !(null != fe && fe.authorId)
                    }),
                    ye = he.data,
                    xe = he.isFetching,
                    ke = he.isError,
                    Ne = he.error,
                    Ie = (0, M.iw)({
                        avatarId: E
                    }, {
                        skip: !E
                    }),
                    Ce = Ie.data,
                    Ze = (Ie.isFetching, Ie.isError),
                    Se = Ie.error,
                    Oe = (0, F.ak)(),
                    je = (0, l.Z)(Oe, 2),
                    Ae = je[0],
                    Ue = je[1],
                    De = Ue.isError,
                    Pe = Ue.error,
                    Le = (0, F.cq)(),
                    Fe = (0, l.Z)(Le, 2),
                    Me = Fe[0],
                    ze = Fe[1],
                    Re = ze.isError,
                    Te = ze.error,
                    Ge = (0, F.Cm)(),
                    qe = (0, l.Z)(Ge, 2),
                    Xe = qe[0],
                    Ye = qe[1],
                    $e = Ye.isError,
                    Ve = Ye.error,
                    _e = Ye.isSuccess,
                    Ke = (0, F.GG)(),
                    We = (0, l.Z)(Ke, 2),
                    Je = We[0],
                    Qe = We[1],
                    He = Qe.isError,
                    et = Qe.error,
                    tt = Qe.isSuccess,
                    mt = (0, F.Gy)(),
                    dt = (0, l.Z)(mt, 2),
                    wt = dt[0],
                    ft = dt[1],
                    pt = ft.isLoading,
                    gt = ft.isError,
                    vt = ft.error,
                    bt = ft.isSuccess,
                    ht = (0, L.Nr)(J, 1400),
                    Et = (0, L.Tb)(yt, 300),
                    yt = pe || xe,
                    xt = ge || ke || Ze || De || Re || He || gt || $e,
                    kt = ve || Ne || Se || Pe || Te || et || vt || Ve;
                N.useEffect((function() {
                    null != fe && fe.id && Q(fe.tags)
                }), [fe]), N.useEffect((function() {
                    if (null != fe && fe.id && ht) {
                        var e = new Set(fe.tags);
                        ht.length === fe.tags.length && ht.every((function(t) {
                            return e.has(t)
                        })) || Xe({
                            avatarId: fe.id,
                            tags: ht
                        })
                    }
                }), [ht]), N.useEffect((function() {
                    tt && h("/home/avatars")
                }), [tt]), N.useEffect((function() {
                    bt && o((0, D.d)({
                        title: "Changed Avatars!",
                        icon: v.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [bt]), N.useEffect((function() {}), [vt]), N.useEffect((function() {
                    _e && o((0, D.d)({
                        title: "Content Warnings Updated",
                        icon: b.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != fe && fe.name ? "avatar: ".concat(fe.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [_e]);
                var Nt, It = N.useMemo((function() {
                        return Object.keys(rt).reduce((function(e, t) {
                            var r, a, n = (r = null == fe ? void 0 : fe.unityPackages, a = t, (null == r ? void 0 : r.findLast((function(e) {
                                var t = e.platform,
                                    r = e.variant;
                                return t === a && "security" === r
                            }))) || (null == r ? void 0 : r.findLast((function(e) {
                                var t = e.platform,
                                    r = e.variant;
                                return t === a && "impostor" !== r && "shadow" !== r
                            }))));
                            return n && (e[t] = n), e
                        }), {})
                    }), [fe]),
                    Ct = N.useMemo((function() {
                        return Object.entries(rt).filter((function(e) {
                            var t = (0, l.Z)(e, 1)[0];
                            return !!It[t]
                        }))
                    }), [It]),
                    Zt = N.useMemo((function() {
                        return (null != Ce ? Ce : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [Ce]),
                    St = function() {
                        var e = (0, n.Z)(k().mark((function e() {
                            var t, r, a, n, l;
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, wt({
                                            avatarId: E
                                        });
                                    case 2:
                                        (t = e.sent).error && (l = "string" == typeof(null == t || null === (r = t.error) || void 0 === r || null === (r = r.data) || void 0 === r ? void 0 : r.error) ? null == t || null === (a = t.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error : null == t || null === (n = t.error) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message, o((0, D.d)({
                                            title: "Failed to change avatar!",
                                            icon: v.KC,
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
                if (ge) return N.createElement(S.Z, null, N.createElement(q.$4, null, "Avatar"), N.createElement(q.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == ve || null === (Nt = ve.data) || void 0 === Nt ? void 0 : Nt.error.message) || "There was an error loading the avatar."));
                if (!fe || Et || yt) return N.createElement(S.Z, null, N.createElement(q.$4, null, "Avatar"), N.createElement(re.Z, {
                    loading: !0
                }));
                var Ot, jt = "private" === fe.releaseStatus,
                    At = !jt,
                    Ut = "hidden" === fe.releaseStatus,
                    Dt = fe.authorId === y.id,
                    Pt = Dt,
                    Lt = !(null === (e = fe.styles.supplementary) || void 0 === e || !e.length),
                    Ft = !!fe.styles.primary || !!fe.styles.secondary || Lt,
                    Mt = (0, T.S6)({
                        fileUrl: (null == ye ? void 0 : ye.profilePicOverride) || (null == ye ? void 0 : ye.currentAvatarImageUrl),
                        width: "512"
                    }),
                    zt = (0, T.S6)({
                        fileUrl: null == ye ? void 0 : ye.userIcon,
                        width: "256"
                    }),
                    Rt = "";
                xt && (Rt = N.createElement(q.X2, null, N.createElement(O.Z, {
                    color: "warning"
                }, null == kt || null === (Ot = kt.data) || void 0 === Ot ? void 0 : Ot.error.message)));
                var Tt = function() {
                    se(!1), o((0, R.bi)())
                };
                return N.createElement(S.Z, null, N.createElement(q.$4, null, null !== (t = fe.name) && void 0 !== t ? t : "Avatar"), Rt, N.createElement(Be, {
                    avatarStyles: de,
                    isOpen: ne,
                    onCloseCallback: function() {
                        return le(!1)
                    },
                    avatarId: fe.id
                }), N.createElement("div", {
                    className: "tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-3"
                }, N.createElement("img", {
                    className: "tw-w-36 tw-aspect-square tw-object-cover tw-rounded-md",
                    src: fe.imageUrl,
                    alt: fe.name
                }), N.createElement("div", {
                    className: "tw-flex-grow tw-flex tw-flex-col tw-gap-1"
                }, N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-items-center tw-gap-2"
                }, N.createElement("h2", {
                    className: "tw-mb-0 tw-text-truncate tw-line-clamp-1 tw-break-all"
                }, fe.name), N.createElement("div", {
                    className: "".concat(Dt ? "" : "tw-hidden", " tw-flex tw-flex-col tw-justify-center md:tw-px-1 tw-flex-grow")
                }, N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-ml-2 tw-mt-2 md:tw-m-0"
                }, N.createElement(q.zx, {
                    className: "tw-rounded-full tw-h-[40px] tw-w-[40px]",
                    "aria-label": "Edit Avatar",
                    onClick: function() {
                        le(!0)
                    }
                }, N.createElement(q.$1, {
                    icon: g.Iw
                })))), N.createElement("div", {
                    className: "tw-flex-0 tw-flex tw-flex-row tw-gap-2"
                }, N.createElement(ae.Z, {
                    text: "".concat(fe.name, " by ").concat(fe.authorName, " #VRChat #MadeWithVRChat"),
                    url: "".concat(window.endpoint, "/home/avatars/").concat(fe.id)
                }))), N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-gap-2 tw-flex-wrap ".concat(null !== (r = fe.styles) && void 0 !== r && r.primary ? "tw-items-end" : "")
                }, N.createElement(st, {
                    className: "tw-gap-1"
                }, N.createElement("span", {
                    className: "tw-text-[#737372]"
                }, "By", " ", N.createElement(Z.rU, {
                    to: "/home/user/".concat(fe.authorId)
                }, zt && N.createElement("img", {
                    className: "tw-aspect-square tw-w-6 tw-rounded-full tw-mr-1",
                    src: zt,
                    alt: ""
                }), fe.authorName)), Ft && N.createElement("div", {
                    className: "tw-flex tw-flex-row tw-flex-wrap tw-gap-2"
                }, fe.styles.primary && N.createElement(q.VE, {
                    className: "tw-flex-auto"
                }, "Primary Style", N.createElement("br", null), N.createElement("strong", null, fe.styles.primary)), fe.styles.secondary && N.createElement(q.VE, {
                    className: "tw-flex-auto"
                }, "Secondary Style", N.createElement("br", null), N.createElement("strong", null, fe.styles.secondary)), Lt && N.createElement(q.VE, {
                    className: "tw-flex-auto"
                }, N.createElement(q.$1, {
                    icon: p.r8
                }), " Tags", N.createElement("br", null), fe.styles.supplementary.slice(0, 4).map((function(e) {
                    return N.createElement(j.Z, {
                        key: e
                    }, e)
                })), fe.styles.supplementary.length > 5 && N.createElement("span", {
                    className: "tw-ml-2"
                }, "+", fe.styles.supplementary.length - 5, " more")))), N.createElement(ut, null, N.createElement(q.VE, {
                    className: "tw-flex-row tw-items-center tw-gap-2 tw-bg-cover",
                    style: {
                        backgroundImage: "linear-gradient( rgba(37, 42, 48, 0.75), rgba(37, 42, 48, 0.75) ), url(".concat(Mt, ")")
                    }
                }, zt && N.createElement("img", {
                    className: "tw-aspect-square tw-w-12 tw-flex-0 tw-rounded-full tw-border-solid tw-border-2 tw-border-gray-700",
                    src: zt,
                    alt: ""
                }), N.createElement("div", {
                    className: "tw-flex-auto"
                }, "Author", N.createElement("br", null), N.createElement(Z.rU, {
                    to: "/home/user/".concat(fe.authorId)
                }, N.createElement("strong", null, fe.authorName)))))))), N.createElement("hr", {
                    className: "tw-my-3 tw-border-gray-300"
                }), N.createElement(q.X2, {
                    className: "tw-flex-wrap tw-gap-3"
                }, N.createElement(st, null, !!Zt.length && N.createElement("div", {
                    className: "tw-mb-3"
                }, N.createElement(te, {
                    images: Zt
                })), N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Avatar Info")), N.createElement(q.Ao, {
                    className: "tw-mb-3 tw-break-words"
                }, fe.description)), N.createElement(ut, null, (x || Dt || At) && N.createElement(q.zx, {
                    className: "tw-mb-3 text-white",
                    disabled: pt,
                    loading: pt,
                    onClick: St
                }, N.createElement(q.$1, {
                    icon: f.mn
                }), " Change Into Avatar"), (Dt || At) && N.createElement("div", {
                    className: "tw-mb-3"
                }, N.createElement(P.Z, {
                    type: "avatar",
                    contentId: fe.id,
                    authorId: fe.authorId,
                    releaseStatus: fe.releaseStatus
                })), N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Performance Rating")), N.createElement(q.Ao, {
                    className: "tw-flex-col tw-mb-3"
                }, N.createElement(q.X2, null, Ct.length ? N.createElement(N.Fragment, null, N.createElement(ct, {
                    role: "presentation",
                    className: "tw-shrink"
                }, Ct.map((function(e, t) {
                    var r = (0, l.Z)(e, 2),
                        a = r[0],
                        n = r[1];
                    return N.createElement(q.X2, {
                        key: a,
                        className: "".concat(t < Ct.length - 1 ? "mb-2" : "", " tw-items-center")
                    }, N.createElement(q.$1, {
                        color: "#54b5c5",
                        width: 20,
                        icon: at[a],
                        className: "me-2"
                    }), n)
                }))), N.createElement(it, {
                    className: "ms-3"
                }, Ct.map((function(e, t) {
                    var r, a, n = (0, l.Z)(e, 2),
                        o = n[0],
                        c = n[1],
                        i = It[o],
                        s = "".concat(c, " performance rating");
                    return "failed" === i.scanStatus ? N.createElement("div", {
                        role: "note",
                        className: "".concat(t < Ct.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": s
                    }, N.createElement(q.$1, {
                        icon: w.faXmark
                    }), "Security Checks Failed") : "unscanned" === i.scanStatus ? N.createElement("div", {
                        role: "note",
                        className: "".concat(t < Ct.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": s
                    }, N.createElement(q.$1, {
                        icon: d.faCircleQuestion
                    }), "Security Checks Pending") : N.createElement("div", {
                        role: "note",
                        className: "".concat(t < Ct.length - 1 ? "mb-2" : "", " tw-flex tw-items-center tw-gap-2"),
                        "aria-label": s
                    }, N.createElement("img", {
                        style: {
                            height: "1.25em"
                        },
                        src: null === (r = nt[i.performanceRating]) || void 0 === r ? void 0 : r.icon,
                        alt: ""
                    }), null === (a = nt[i.performanceRating]) || void 0 === a ? void 0 : a.label)
                })))) : N.createElement("em", null, "No performance data found"))), N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Details")), N.createElement(q.Ao, null, N.createElement(q.X2, null, N.createElement(ct, {
                    role: "presentation",
                    className: "tw-shrink"
                }, N.createElement(q.X2, {
                    className: "tw-mb-2 tw-items-center"
                }, N.createElement(q.$1, {
                    color: "#54b5c5",
                    width: 20,
                    icon: m.CP,
                    className: "me-2"
                }), "Created"), N.createElement(q.X2, {
                    className: "tw-items-center"
                }, N.createElement(q.$1, {
                    color: "#54b5c5",
                    width: 20,
                    icon: u.r6,
                    className: "me-2"
                }), "Updated")), N.createElement(it, {
                    className: "ms-3"
                }, N.createElement("div", {
                    role: "note",
                    className: "tw-mb-2",
                    "aria-label": "Creation Date"
                }, U()(fe.created_at).format("MMM DD YYYY")), N.createElement("div", {
                    role: "note",
                    "aria-label": "Update Date"
                }, U()(fe.updated_at).format("MMM DD YYYY"))))))), (Dt || x) && N.createElement(q.X2, {
                    className: "tw-mb-3"
                }, N.createElement(st, null, N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), N.createElement(q.Ao, null, N.createElement(q.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, N.createElement(q.ks, {
                    tags: J,
                    isMod: x,
                    onSelectValues: function(e) {
                        Q((function(t) {
                            return (0, a.Z)(new Set([].concat((0, a.Z)(t), (0, a.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        Q((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: ot
                }))))), (Dt || x) && N.createElement(q.X2, {
                    className: "tw-mb-3"
                }, N.createElement("div", null, N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), N.createElement(q.Ao, {
                    className: "tw-block"
                }, N.createElement(q.X2, {
                    className: "tw-mb-2"
                }, N.createElement(Ee, {
                    avatar: fe,
                    refetch: be
                }))))), (Pt || x) && N.createElement(q.X2, {
                    className: "tw-mb-3"
                }, N.createElement(q.l8, {
                    className: "tw-w-full"
                }, N.createElement(q.oI, null, N.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Danger Zone")), N.createElement(q.Ao, null, N.createElement(q.JX, null, N.createElement(X.Z, {
                    isOpen: _,
                    bodyText: "Are you sure you want to DELETE this avatar? This can not be undone!",
                    confirmCallback: function() {
                        Je({
                            avatarId: E
                        }), K(!1)
                    },
                    cancelCallback: function() {
                        return K(!1)
                    }
                }), N.createElement(q.X2, null, N.createElement("div", {
                    className: "tw-w-full"
                }, Pt && !At && !Ut && N.createElement(q.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        Ae({
                            avatarId: E
                        })
                    },
                    warning: !0,
                    expand: !0
                }, N.createElement(q.$1, {
                    icon: s.nG
                }), " Make Avatar Public"), Pt && !jt && !Ut && N.createElement(q.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        Me({
                            avatarId: E
                        })
                    },
                    warning: !0,
                    expand: !0
                }, N.createElement(q.$1, {
                    icon: i.by
                }), " Make Avatar Private"), (x || Dt) && !Ut && N.createElement(q.zx, {
                    className: "tw-mt-1",
                    onClick: function() {
                        K(!0)
                    },
                    danger: !0,
                    expand: !0
                }, N.createElement(q.$1, {
                    icon: c.$
                }), " Delete Avatar"))))))), !1, !1, N.createElement(q.u_, {
                    title: lt[Y] || null,
                    isVisible: ie,
                    onClose: Tt,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, N.createElement(G.Z, {
                    onClose: Tt
                })))
            }
        },
        37599: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var a = r(54546),
                n = r(45573),
                l = r(27003),
                o = r(67294),
                c = r(34698),
                i = r(65706),
                s = r(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    r = e.toggle,
                    u = e.title,
                    m = e.size,
                    d = void 0 === m ? "md" : m,
                    w = e.children,
                    f = e.onToggleCallback,
                    p = void 0 === f ? function() {} : f,
                    g = o.useState(t || !1),
                    v = (0, a.Z)(g, 2),
                    b = v[0],
                    h = v[1];
                o.useEffect((function() {
                    h(t)
                }), [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(c.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: d,
                    onClick: function() {
                        r ? r() : (p(!b), h(!b))
                    },
                    color: b ? "primary" : "secondary"
                }, b && o.createElement(s.Z, {
                    icon: l.uM
                }), !b && o.createElement(s.Z, {
                    icon: n.Kt
                })), " ", u), o.createElement(i.Z, {
                    isOpen: b
                }, w), "sm" !== d && o.createElement("br", null))
            }
        },
        49567: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var a = r(26778),
                n = r(67294),
                l = r(45697),
                o = r.n(l),
                c = (r(9669), r(39886)),
                i = r(34698),
                s = r(86646),
                u = r(46326),
                m = r(83541),
                d = function(e) {
                    var t = e.query,
                        r = (0, m.Gu)({
                            queryURL: t
                        }),
                        l = r.data,
                        o = r.isFetching,
                        d = r.isSuccess,
                        w = r.isError,
                        f = r.refetch;
                    return n.createElement(c.Z, null, n.createElement("h6", {
                        className: "p-1"
                    }, n.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), d && n.createElement(u.Z, {
                        src: l
                    }), o && "Loading...", w && "Error loading ".concat(t), n.createElement("hr", null), n.createElement(i.Z, {
                        onClick: function() {
                            return f()
                        },
                        className: "text-white"
                    }, n.createElement(s.Z, {
                        icon: a.XS,
                        color: "white"
                    }), " Refresh"))
                };
            d.propTypes = {
                query: o().string.isRequired
            };
            const w = d
        },
        60933: (e, t, r) => {
            r.d(t, {
                DS: () => u,
                Gr: () => c,
                s3: () => m,
                sY: () => s,
                uG: () => i
            });
            var a = r(15861),
                n = r(64687),
                l = r.n(n),
                o = {},
                c = function(e) {
                    var t = "".concat(e.name).concat(e.lastModified);
                    return void 0 === o[t] && (o[t] = window.URL.createObjectURL(e)), o[t]
                },
                i = function(e) {
                    return new Promise((function(t) {
                        var r = new Image;
                        r.addEventListener("load", (function() {
                            var e = {
                                width: r.width,
                                height: r.height
                            };
                            window.URL.revokeObjectURL(r.src), t(e)
                        })), r.src = window.URL.createObjectURL(e)
                    }))
                },
                s = function(e) {
                    return "image/gif" === e.type
                },
                u = function(e) {
                    var t = e.file,
                        r = e.includeGif,
                        a = ["image/png", "image/jpeg", "image/svg+xml", "image/bmp"];
                    return void 0 !== r && r && a.push("image/gif"), a.includes(t.type)
                },
                m = function() {
                    var e = (0, a.Z)(l().mark((function e(t) {
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) {
                                        var r = new FileReader;
                                        r.onload = function(t) {
                                            e(t.target.result)
                                        }, r.readAsDataURL(t)
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        83541: (e, t, r) => {
            r.d(t, {
                Gu: () => o
            });
            var a = r(61509),
                n = {};
            var l = a.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            adminChangeDisplayName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.displayName,
                                        a = e.lock;
                                    return {
                                        url: n.forcename,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: r,
                                            lock: a
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "User",
                                        id: r.userId
                                    }]
                                }
                            }),
                            adminChangeUserName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.displayName,
                                        a = e.username;
                                    return {
                                        url: n.forceUsername,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: r,
                                            username: a
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    return [{
                                        type: "User",
                                        id: r.userId
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
                o = (l.useAdminChangeDisplayNameMutation, l.useAdminChangeUserNameMutation, l.useJsonEndpointQuery)
        },
        73100: (e, t, r) => {
            e.exports = r.p + "b7e99cd3c42a6f1ff2e6f3faaada0e75366945997a7fa5e7e014d26b1d100ef7.svg"
        },
        42688: (e, t, r) => {
            e.exports = r.p + "db3f587335a6602a84d0f0f18d6fbb10904973d0ddb659009f0fc56b3d1f026b.svg"
        },
        37538: (e, t, r) => {
            e.exports = r.p + "24001ed5aa8ebabaa63a09ffb88ccecccc4c5feb1b4179579e8e6c9f1fed3f16.svg"
        },
        8842: (e, t, r) => {
            e.exports = r.p + "a8c97bcdcb9b5c842487bb42d4a910ed022d88f2af3106d4cecae3fbbd4e2af0.svg"
        },
        22933: (e, t, r) => {
            e.exports = r.p + "467c01a863f0a61d30a09465f743678c95a5e6ae6d439b2fecd257464ec111d0.svg"
        },
        52501: (e, t, r) => {
            e.exports = r.p + "b4bf11dfbd8c3076cb66e8457b3f78659854700e79d5256516e205e37af89247.svg"
        }
    }
]);
//# sourceMappingURL=0e4e10e90052acea24b0a17f8cf11f5e8549ea9811e4a7a8e30135766fb145a9.js.map