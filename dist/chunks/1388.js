"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1388], {
        76461: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Le
            });
            var n = r(42138),
                a = r(15861),
                l = r(54546),
                o = r(4965),
                i = r(42619),
                c = r(609),
                s = r(13226),
                u = r(66007),
                d = r(3820),
                m = r(64687),
                w = r.n(m),
                f = r(67294),
                p = r(32981),
                v = r(89250),
                g = r(53637),
                b = r(23138),
                h = r(64258),
                y = r(12752),
                E = r(22704),
                x = r(21538),
                k = r(41255),
                I = r(4942),
                N = r(64358);

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach((function(t) {
                        (0, I.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var C = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserLicensesForContent: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = e.pageValue,
                                        a = e.forId,
                                        l = e.forType,
                                        o = e.forAction,
                                        i = e.isActive,
                                        c = void 0 === i || i;
                                    return {
                                        url: "licenses",
                                        params: S(S({}, (0, N.ue)({
                                            n: r,
                                            pageValue: n
                                        })), {}, {
                                            licenseHolderId: t,
                                            forId: a,
                                            forType: l,
                                            forAction: o,
                                            isActive: c
                                        })
                                    }
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }),
                O = C.useGetUserLicensesForContentQuery,
                P = r(16869),
                j = r(62437),
                A = r(43683),
                U = r(14411),
                T = (r(37599), r(84090)),
                L = (r(49567), r(98185)),
                F = r(41727),
                D = r(94370),
                q = r(6811),
                G = (r(37337), r(4991)),
                R = r(35773),
                M = r(95305),
                z = r(93007),
                X = r(30381),
                K = r.n(X),
                V = r(72522);

            function Y(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return $(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var l, o = !0,
                    i = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, l = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (i) throw l
                        }
                    }
                }
            }

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var B = "standard",
                Q = "impostor",
                W = f.createElement(U.$1, {
                    color: "#54b5c5",
                    icon: q.f8
                }),
                _ = {
                    estimatedServiceDurationSeconds: 14400
                };
            const H = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return f.createElement("div", null, "We don't seem to have that avatar.");
                var o, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = Y(n.unityPackages);
                try {
                    for (d.s(); !(o = d.n()).done;) {
                        var m = o.value,
                            w = m.platform,
                            p = m.variant,
                            v = m.assetUrl,
                            b = m.unitySortNumber;
                        w in u || (u[w] = {}), "impostor" === p && i++, b >= 2017e7 && "standalonewindows" === w && (c = !0, (null == s || b > s.unitySortNumber) && (s = {
                            fileId: (0, N.oQ)(v),
                            versionNumber: parseInt((0, N.Rz)(v)),
                            unitySortNumber: b
                        })), u[w][null != p ? p : B] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var h = (0, x.X8)(),
                    E = (0, l.Z)(h, 2),
                    I = E[0],
                    Z = E[1],
                    S = Z.isLoading,
                    C = Z.isError,
                    O = Z.error,
                    P = (Z.isSuccess, (0, x.EA)()),
                    j = (0, l.Z)(P, 2),
                    A = j[0],
                    T = j[1],
                    L = T.isLoading,
                    F = T.isError,
                    q = T.error,
                    X = T.isSuccess,
                    $ = T.reset,
                    H = (0, k.Ko)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    J = H.data,
                    ee = H.refetch,
                    te = (0, f.useState)(!1),
                    re = (0, l.Z)(te, 2),
                    ne = re[0],
                    ae = re[1],
                    le = (0, f.useState)(null),
                    oe = (0, l.Z)(le, 2),
                    ie = oe[0],
                    ce = oe[1];
                (0, y.Yz)(a, ne ? 1e4 : null), (0, y.Yz)(ee, ne ? 5e3 : null);
                var se = (0, x.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, x.ve)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : _,
                    me = i > 0,
                    we = i === V.IM.length,
                    fe = n.lastImpostorizationRequest,
                    pe = null != fe && K()(fe).add(144e5).isAfter(K()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (pe) {
                        var ve, ge, be = null == J || null === (ve = J.versions) || void 0 === ve || null === (ve = ve[s.versionNumber]) || void 0 === ve || null === (ve = ve.file) || void 0 === ve ? void 0 : ve.impostorStatus;
                        if (null != be && null != be.date && K()(be.date).isAfter(fe))
                            if (!be.isSuccess) ce(null !== (ge = be.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else X ? ($(), ae(!0)) : !pe || we || ie || ae(!0);
                var he = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = q.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = f.createElement("code", null, q.data.error.message)), r
                };
                return f.createElement(g.Z, null, f.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", f.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && f.createElement(U.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, f.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", K().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), f.createElement(G.Z, {
                    size: "sm"
                }, f.createElement("thead", null, f.createElement("tr", {
                    style: {
                        borderColor: "#737372"
                    }
                }, f.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Platform"), f.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "User-created"), f.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Impostor"))), f.createElement("tbody", null, V.IM.map((function(e) {
                    var t, r = u[e] || {};
                    return f.createElement("tr", {
                        key: e,
                        style: {
                            borderColor: "#737372"
                        }
                    }, f.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, (null === (t = V.VT[e]) || void 0 === t ? void 0 : t.label) || e), f.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, B in r && W), f.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, Q in r && W))
                })))), ie && f.createElement(R.Z, null, f.createElement(M.Z, null, f.createElement(U.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, f.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), f.createElement("p", null, f.createElement("pre", null, ie)), f.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !he && f.createElement(R.Z, null, f.createElement(M.Z, null, f.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), f.createElement("p", null, f.createElement("pre", null, ye)))), f.createElement(R.Z, null, f.createElement(M.Z, null, f.createElement(U.zx, {
                    className: "mb-2",
                    onClick: function() {
                        A({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !he,
                    loading: L || ne
                }, f.createElement(U.$1, {
                    width: 20,
                    icon: z.Z
                }), " ", function() {
                    var e;
                    if (L) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != fe) {
                            var t = K()(),
                                r = K()(fe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = K().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), f.createElement(M.Z, null, f.createElement(U.zx, {
                    className: "mb-2",
                    onClick: function() {
                        I({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: S,
                    disabled: !me
                }, f.createElement(U.$1, {
                    width: 20,
                    icon: D.nY
                }), " Delete Impostors"))), C && f.createElement(U.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", f.createElement("br", null), Ee(O)), F && f.createElement(U.qX, {
                    type: "error"
                }, "Couldn't request impostors.", f.createElement("br", null), Ee(q)))
            };
            r(9669);
            var J = r(45987),
                ee = r(87709),
                te = r(41145),
                re = r(62228),
                ne = r(59545),
                ae = r(40098),
                le = r(76553),
                oe = r(92332),
                ie = r(12690),
                ce = r(78076),
                se = r(86646);
            const ue = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    n = e.maxFileSizeMegaBytes,
                    o = e.galleryId,
                    c = e.file,
                    s = void 0 === c ? null : c,
                    d = e.validationCallback,
                    m = void 0 === d ? function() {} : d,
                    v = (0, p.I0)(),
                    g = (0, f.useRef)(null),
                    b = (0, f.useState)(""),
                    y = (0, l.Z)(b, 2),
                    E = y[0],
                    x = y[1],
                    I = null === s ? "" : (0, N.S6)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    Z = (0, k.Yh)(),
                    S = (0, l.Z)(Z, 2),
                    C = S[0],
                    O = S[1].isLoading,
                    P = (0, k.g3)(),
                    j = (0, l.Z)(P, 2),
                    A = j[0],
                    U = j[1].isLoading,
                    T = function() {
                        var e = (0, a.Z)(w().mark((function e(a) {
                            var l, i, c, s;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = null === (l = a.target) || void 0 === l || null === (l = l.files) || void 0 === l ? void 0 : l[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, N.o1)({
                                            file: i,
                                            maxFileSizeMegaBytes: n,
                                            minImageDimension: t,
                                            maxImageDimension: r
                                        });
                                    case 5:
                                        if (c = e.sent, m(c), c.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, C({
                                            tag: "avatargallery",
                                            file: i,
                                            galleryId: o
                                        }).unwrap();
                                    case 12:
                                        x(""), e.next = 19;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), v((0, h.d)({
                                            title: "Avatar Gallery",
                                            icon: u.KC,
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
                    L = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var r, n;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, A({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), v((0, h.d)({
                                            title: "Avatar Gallery",
                                            icon: u.KC,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unknown error"),
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
                return O || U ? f.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, f.createElement(se.Z, {
                    icon: oe.LM,
                    spin: !0,
                    color: "#404C58",
                    width: "32"
                })) : null === s ? f.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-pointer",
                    onClick: function() {
                        return g.current.click()
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key && " " !== e.key || g.current.click()
                    }
                }, f.createElement(se.Z, {
                    icon: ae.r8,
                    color: "#404C58",
                    width: 32
                }), f.createElement("input", {
                    className: "tw-hidden",
                    type: "file",
                    accept: ".jpg, .jpeg, .png",
                    ref: g,
                    value: E,
                    onChange: function(e) {
                        T(e)
                    },
                    name: "additional-image__input",
                    "aria-label": "Upload additional image"
                })) : f.createElement("div", {
                    className: " tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-grab tw-bg-cover tw-bg-center tw-relative ",
                    style: {
                        backgroundImage: "url(".concat(I, ")")
                    },
                    "aria-label": "Additional Avatar Showcase"
                }, f.createElement("span", {
                    className: "tw-absolute tw-bottom-1 tw-right-1 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded tw-cursor-pointer hover:tw-bg-dark-grey tw-transition",
                    onClick: function() {
                        return L({
                            fileId: s.id
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" !== e.key && " " !== e.key || L({
                            fileId: s.id
                        })
                    },
                    "aria-label": "Delete additional image"
                }, f.createElement(se.Z, {
                    icon: i.$,
                    width: 16
                })))
            };
            var de = r(50048);
            const me = function(e) {
                var t = e.className,
                    r = e.minImageDimension,
                    o = void 0 === r ? 100 : r,
                    c = e.maxImageDimension,
                    s = void 0 === c ? 2048 : c,
                    d = e.maxFileSizeMegaBytes,
                    m = void 0 === d ? 10 : d,
                    v = e.validationCallback,
                    g = void 0 === v ? function() {} : v,
                    b = e.galleryId,
                    y = (0, p.I0)(),
                    E = (0, f.useRef)(null),
                    x = (0, f.useState)(""),
                    I = (0, l.Z)(x, 2),
                    Z = I[0],
                    S = I[1],
                    C = (0, f.useState)([]),
                    O = (0, l.Z)(C, 2),
                    P = O[0],
                    j = O[1],
                    A = (0, f.useState)(!1),
                    U = (0, l.Z)(A, 2),
                    T = U[0],
                    L = U[1],
                    F = (0, f.useState)(!0),
                    D = (0, l.Z)(F, 2),
                    q = D[0],
                    G = D[1],
                    R = (0, f.useState)(null),
                    M = (0, l.Z)(R, 2),
                    z = M[0],
                    X = M[1],
                    K = (0, k.Yh)(),
                    V = (0, l.Z)(K, 2),
                    Y = V[0],
                    $ = V[1].isLoading,
                    B = (0, k.g3)(),
                    Q = (0, l.Z)(B, 2),
                    W = Q[0],
                    _ = Q[1].isLoading,
                    H = (0, k.e4)(),
                    J = (0, l.Z)(H, 2),
                    ee = J[0],
                    te = J[1],
                    re = te.isLoading,
                    ne = te.error,
                    ae = (0, k.iw)({
                        avatarId: b
                    }, {
                        skip: !b
                    }),
                    le = ae.data;
                ae.refetch;
                (0, f.useEffect)((function() {
                    if (le) {
                        var e = (0, n.Z)(le).sort((function(e, t) {
                            return e.order - t.order
                        }));
                        j(e)
                    }
                }), [le]);
                var me = function(e, t) {
                        null !== t && (X(e), L(!0))
                    },
                    we = function(e) {
                        e.preventDefault()
                    },
                    fe = function() {
                        var e = (0, a.Z)(w().mark((function e(t, r) {
                            var a, o, i, c, s, d;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== z && z !== t && null !== r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return a = (0, n.Z)(P), o = a.splice(z, 1), i = (0, l.Z)(o, 1), c = i[0], a.splice(t, 0, c), j(a), X(null), L(!1), s = a.map((function(e) {
                                            return e.id
                                        })), e.prev = 9, e.next = 12, ee({
                                            ids: s
                                        });
                                    case 12:
                                        e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(9), console.error("Failed to update image order:", e.t0), y((0, h.d)({
                                            title: "Avatar Gallery",
                                            icon: u.KC,
                                            message: "Failed to change order of images: ".concat(null == ne || null === (d = ne.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message),
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
                    pe = (null == P ? void 0 : P.length) > 0,
                    ve = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var r, n, a, l;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = null === (r = t.target) || void 0 === r || null === (r = r.files) || void 0 === r ? void 0 : r[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, N.o1)({
                                            file: n,
                                            maxFileSizeMegaBytes: m,
                                            minImageDimension: o,
                                            maxImageDimension: s
                                        });
                                    case 5:
                                        if (a = e.sent, g(a), a.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, Y({
                                            tag: "avatargallery",
                                            file: n,
                                            galleryId: b
                                        }).unwrap();
                                    case 12:
                                        S(""), e.next = 19;
                                        break;
                                    case 15:
                                        return e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), e.abrupt("return", y((0, h.d)({
                                            title: "Avatar Gallery",
                                            icon: u.KC,
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
                    ge = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var r, n;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, W({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), y((0, h.d)({
                                            title: "Avatar Gallery",
                                            icon: u.KC,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unknown error"),
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
                    be = _ || $ || re;
                return f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !be && function() {
                    if (!pe) return f.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                    }, f.createElement(se.Z, {
                        icon: ce.Vm,
                        color: "#404C58",
                        width: 96
                    }), f.createElement(de.ZP, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return E.current.click()
                        }
                    }, f.createElement(se.Z, {
                        icon: ce.Vm
                    }), " Upload Cover Image"), f.createElement("input", {
                        className: "tw-hidden",
                        type: "file",
                        accept: ".jpg, .jpeg, .png",
                        ref: E,
                        value: Z,
                        onChange: function(e) {
                            ve(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = P[0] || null,
                        t = (0, N.S6)({
                            fileId: e.id
                        });
                    return f.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4 tw-overflow-hidden tw-relative tw-cursor-grab",
                        draggable: !0,
                        onDragStart: function() {
                            return me(0, e)
                        },
                        onDragOver: we,
                        onDrop: function() {
                            return fe(0, e)
                        },
                        style: {
                            transition: T ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: 0 === z ? .3 : 1,
                            transform: 0 === z ? "scale(0.95)" : "scale(1)"
                        }
                    }, f.createElement("div", {
                        className: "tw-relative"
                    }, q && f.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, f.createElement(se.Z, {
                        icon: oe.LM,
                        color: "#FFFFFF",
                        spin: !0,
                        width: 48
                    })), f.createElement("img", {
                        src: t,
                        alt: "Avatar Cover Showcase",
                        onLoad: function() {
                            return G(!1)
                        },
                        onError: function() {
                            return G(!1)
                        },
                        style: {
                            display: q ? "none" : "block"
                        }
                    })), f.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-right-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded tw-cursor-pointer hover:tw-bg-dark-grey tw-transition",
                        onClick: function() {
                            return ge({
                                fileId: e.id
                            })
                        },
                        onKeyUp: function(t) {
                            "Enter" !== t.key && " " !== t.key || ge({
                                fileId: e.id
                            })
                        },
                        "aria-label": "Delete cover image"
                    }, f.createElement(se.Z, {
                        icon: i.$,
                        width: 16
                    })), f.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, f.createElement(se.Z, {
                        icon: ie.xV,
                        width: 16
                    }), " Cover Image"))
                }(), be && f.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, f.createElement(se.Z, {
                    icon: oe.LM,
                    color: "#404C58",
                    width: "32",
                    spin: !0
                })), f.createElement("div", {
                    className: "tw-grid tw-grid-cols-5 tw-gap-4 tw-w-full"
                }, function(e) {
                    for (var t = new Array(5).fill(null), r = 0; r < e.length && r < 5; r++) t[r] = e[r];
                    return t
                }((0, n.Z)(P.slice(1))).map((function(e, t) {
                    return f.createElement("div", {
                        key: null === e ? t : e.id,
                        draggable: !0,
                        onDragStart: function() {
                            me(t + 1, e)
                        },
                        onDragOver: we,
                        onDrop: function() {
                            return fe(t + 1, e)
                        },
                        style: {
                            transition: T ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: z === t + 1 ? .3 : 1,
                            transform: z === t + 1 ? "scale(0.95)" : "scale(1)"
                        }
                    }, f.createElement(ue, {
                        file: e,
                        galleryId: b,
                        minImageDimension: o,
                        maxImageDimension: s,
                        maxFileSizeMegaBytes: m,
                        validationCallback: function(e) {
                            return g(e)
                        }
                    }))
                }))))
            };
            var we = r(72998),
                fe = r(22497),
                pe = r(60933),
                ve = r(73423),
                ge = r(39191);

            function be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(r), !0).forEach((function(t) {
                        (0, I.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ye = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    o = void 0 === n ? null : n,
                    i = f.useState(null),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    d = (0, k.Yh)(),
                    m = (0, l.Z)(d, 2),
                    v = m[0],
                    g = m[1].isLoading,
                    b = (0, p.I0)(),
                    y = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        b((0, h.d)({
                            title: t,
                            icon: ce.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    E = function() {
                        var e = (0, a.Z)(w().mark((function e(r) {
                            var n;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, pe.DS)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", y({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, x({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        u(f.createElement(ge.Z, {
                                            baseImage: n,
                                            onCompleted: I,
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
                    x = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var r, n, a, l;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, pe.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, l = n.width > 2048 || n.height > 2048, !a) {
                                            e.next = 9;
                                            break
                                        }
                                        return y({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 9:
                                        if (!l) {
                                            e.next = 12;
                                            break
                                        }
                                        return y({
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
                    I = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var n, a, l, i, c;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.image, a = t.mask, void 0 === a ? "square" : a, e.prev = 1, e.next = 4, v(he({
                                            file: n.file || n
                                        }, null !== o && {
                                            tag: o
                                        })).unwrap();
                                    case 4:
                                        l = e.sent, r(l), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error("Error deleting avatar:", e.t0), b((0, h.d)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: le.eH,
                                            message: null !== (i = null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
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
                return f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-min-h-[30em] tw-overflow-hidden"
                }, g && f.createElement(ve.Z, {
                    name: "image"
                }), !g && (s || f.createElement(fe.Z, {
                    fileSelectedCallback: function(e) {
                        return E(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels."
                })))
            };
            var Ee = r(95002),
                xe = r(3620),
                ke = r(45697),
                Ie = r.n(ke),
                Ne = function(e) {
                    var t = e.avatarId,
                        r = e.isOpen,
                        n = e.confirmCallback,
                        a = e.cancelCallback;
                    return r ? f.createElement("div", {
                        className: "tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto"
                    }, f.createElement("div", {
                        className: "tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0"
                    }, f.createElement("div", {
                        className: "tw-fixed tw-inset-0 tw-transition-opacity",
                        "aria-hidden": "true"
                    }, f.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-bg-dark-grey-transparent-90",
                        onClick: a
                    })), f.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen",
                        "aria-hidden": "true"
                    }, "​"), f.createElement("div", {
                        className: "tw-inline-block tw-align-bottom tw-bg-black tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-[750px] sm:tw-w-full"
                    }, f.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-flex tw-flex-row tw-justify-between tw-items-center"
                    }, f.createElement("h3", {
                        className: "heading tw-text-white tw-font-bold tw-text-2xl tw-m-0"
                    }, "Delete Avatar"), f.createElement(de.ZP, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: a
                    }, f.createElement(se.Z, {
                        icon: ee.faXmark
                    }))), f.createElement("div", {
                        className: "tw-bg-black tw-px-5 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4"
                    }, f.createElement("div", {
                        className: "sm:tw-flex sm:tw-items-start"
                    }, f.createElement("div", {
                        className: "tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-text-left"
                    }, f.createElement("p", {
                        className: "tw-text-md tw-text-white tw-font-bold"
                    }, "Are you sure you want to delete this avatar? This is NOT reversible.")))), f.createElement("div", {
                        className: "tw-px-4 tw-py-4 tw-justify-between sm:tw-px-6 sm:tw-flex sm:tw-flex-row-reverse"
                    }, f.createElement(de.ZP, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return n(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), f.createElement(de.ZP, {
                        neutral: !0,
                        className: "tw-mt-3 tw-w-full sm:tw-mt-0 tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 sm:tw-text-sm",
                        onClick: a,
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Cancel"))))) : null
                };
            Ne.propTypes = {
                avatarId: Ie().string.isRequired,
                isOpen: Ie().bool.isRequired,
                confirmCallback: Ie().func.isRequired,
                cancelCallback: Ie().func.isRequired
            };
            const Ze = Ne;
            var Se = ["thumbnailImageUrl"];

            function Ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(r), !0).forEach((function(t) {
                        (0, I.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Pe = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const je = function(e) {
                var t, r, o, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, v.s0)(),
                    d = (0, p.I0)(),
                    m = (0, x.LQ)({
                        avatarId: c
                    }),
                    g = m.data,
                    b = (m.isFetching, m.isError, m.error, m.refetch, (0, x.CO)()),
                    y = b.data,
                    E = void 0 === y ? [] : y,
                    k = (b.isFetching, b.isError, b.error, (0, f.useMemo)((function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == g || null === (e = g.tags) || void 0 === e || e.forEach((function(e) {
                            e.startsWith("content_") ? n.push(e) : (0, Ee.x)(e) ? t.push(e) : r.push(e)
                        })), {
                            privateTags: t,
                            contentTags: n,
                            publicTags: r
                        }
                    }), [null == g ? void 0 : g.tags])),
                    I = k.privateTags,
                    Z = k.contentTags,
                    S = k.publicTags,
                    C = (o = g, Object.keys(o).filter((function(e) {
                        return Pe.includes(e)
                    })).reduce((function(e, t) {
                        return e[t] = o[t], e
                    }), {})),
                    O = (0, f.useState)(!0),
                    P = (0, l.Z)(O, 2),
                    j = P[0],
                    A = P[1],
                    T = (0, f.useState)({
                        pass: !0,
                        message: ""
                    }),
                    L = (0, l.Z)(T, 2),
                    F = L[0],
                    D = L[1],
                    G = (0, f.useState)("overview"),
                    R = (0, l.Z)(G, 2),
                    M = R[0],
                    z = R[1],
                    X = (0, f.useState)(C),
                    K = (0, l.Z)(X, 2),
                    V = K[0],
                    Y = K[1],
                    $ = (0, f.useState)(),
                    B = (0, l.Z)($, 2),
                    Q = B[0],
                    W = B[1],
                    _ = (0, f.useState)(),
                    H = (0, l.Z)(_, 2),
                    oe = H[0],
                    ie = H[1],
                    ce = (0, f.useState)(Z),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    de = se[1],
                    fe = (0, f.useState)(S),
                    pe = (0, l.Z)(fe, 2),
                    ve = pe[0],
                    ge = pe[1],
                    be = (0, f.useState)(!1),
                    he = (0, l.Z)(be, 2),
                    ke = he[0],
                    Ie = he[1],
                    Ne = (0, f.useState)(!!C.acknowledgements),
                    Ce = (0, l.Z)(Ne, 2),
                    je = Ce[0],
                    Ae = Ce[1],
                    Ue = (0, f.useState)(!!C.acknowledgements),
                    Te = (0, l.Z)(Ue, 2),
                    Le = Te[0],
                    Fe = Te[1],
                    De = (0, f.useState)(!1),
                    qe = (0, l.Z)(De, 2),
                    Ge = qe[0],
                    Re = qe[1],
                    Me = (0, f.useState)(""),
                    ze = (0, l.Z)(Me, 2),
                    Xe = ze[0],
                    Ke = ze[1],
                    Ve = (0, f.useRef)(null),
                    Ye = (0, x.C0)(),
                    $e = (0, l.Z)(Ye, 2),
                    Be = $e[0],
                    Qe = $e[1].isLoading,
                    We = (0, x.GG)(),
                    _e = (0, l.Z)(We, 1)[0],
                    He = (0, f.useMemo)((function() {
                        var e;
                        return Le && !je && (null == V || null === (e = V.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }), [Le, je, V.acknowledgements]),
                    Je = function() {
                        var e, t;
                        W(tt(null == g || null === (e = g.styles) || void 0 === e ? void 0 : e.primary)), ie(tt(null == g || null === (t = g.styles) || void 0 === t ? void 0 : t.secondary))
                    },
                    et = function() {
                        Y(C), Je()
                    },
                    tt = function(e) {
                        var t;
                        return (null === (t = E.find((function(t) {
                            var r;
                            return (null == t || null === (r = t.styleName) || void 0 === r ? void 0 : r.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                        }))) || void 0 === t ? void 0 : t.id) || null
                    };
                (0, f.useEffect)(Je, [g, E]);
                var rt = function() {
                        var e = (0, a.Z)(w().mark((function e() {
                            var t, r, a, l;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.Z)(I), (0, n.Z)(ve), (0, n.Z)(ue)), V.thumbnailImageUrl, r = (0, J.Z)(V, Se), e.prev = 2, e.next = 5, Be({
                                            avatarId: c,
                                            data: Oe(Oe({}, r), {}, {
                                                tags: t,
                                                styles: {
                                                    primary: Q,
                                                    secondary: oe
                                                }
                                            })
                                        }).unwrap();
                                    case 5:
                                        s(), d((0, h.d)({
                                            title: "Avatar Updated",
                                            icon: q.f8,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), console.error("Error updating avatar:", e.t0), d((0, h.d)({
                                            title: "Failed to update avatar",
                                            icon: le.eH,
                                            message: null !== (a = null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    nt = function() {
                        var e = (0, a.Z)(w().mark((function e(t) {
                            var r, n;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _e({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        u("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), d((0, h.d)({
                                            title: "Failed to delete avatar",
                                            icon: le.eH,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
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
                    at = (0, f.useCallback)((function(e) {
                        z(e)
                    }), []);
                return f.createElement(U.u_, {
                    title: "Edit Avatar",
                    onClose: function() {
                        et(), A(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    backgroundColor: "#181B1F",
                    className: "tw-p-5"
                }, f.createElement(Ze, {
                    avatarId: c,
                    isOpen: ke,
                    cancelCallback: function() {
                        return Ie(!1)
                    },
                    confirmCallback: function() {
                        return nt(g.id)
                    }
                }), f.createElement(U.u_, {
                    isVisible: Ge,
                    className: "tw-pt-0",
                    onClose: function() {
                        return Re(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: f.createElement(ye, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return Re(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        n = (0, N.d3)({
                                            fileUrl: r
                                        }),
                                        a = n.fileId,
                                        l = n.fileVersion,
                                        o = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(a, "/").concat(l, "/256");
                                    Y(Oe(Oe({}, V), {}, {
                                        thumbnailImageUrl: o,
                                        imageUrl: r
                                    })), Re(!1)
                                } catch (e) {
                                    return console.error("Failed to process the uploaded image data", e.message), null
                                }
                            }(e)
                        }
                    })
                }), f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, f.createElement(we.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: at,
                    tabs: [{
                        id: "overview",
                        name: "Overview",
                        condition: !0
                    }, {
                        id: "gallery",
                        name: "Gallery",
                        condition: !0
                    }],
                    selected: M,
                    justify: "start"
                }), f.createElement("div", {
                    className: "tw-".concat("overview" === M ? "block" : "hidden", " tw-w-full")
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full"
                }, f.createElement("div", {
                    className: "tw-block tw-mr-5"
                }, f.createElement("button", {
                    onClick: function() {
                        return Re(!0)
                    },
                    type: "button",
                    className: "\n                  tw-bg-cover tw-bg-center tw-w-[286px] tw-h-[286px]  \n                  tw-border-0 tw-p-0 tw-rounded-2xl tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent\n                ",
                    style: {
                        backgroundImage: "url(".concat((null == V ? void 0 : V.thumbnailImageUrl) || (null == V ? void 0 : V.imageUrl), ")")
                    }
                })), f.createElement("div", {
                    className: "tw-flex-grow"
                }, f.createElement("div", {
                    className: "tw-mb-3"
                }, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), f.createElement(U.II, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: V.name,
                    onChange: function(e) {
                        return Y(Oe(Oe({}, V), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 128,
                    minLength: 1
                }), f.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = V.name.length) && void 0 !== t ? t : 0, "/128")), f.createElement("div", {
                    className: "tw-mb-0"
                }, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), f.createElement(U.gx, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: V.description,
                    onChange: function(e) {
                        return Y(Oe(Oe({}, V), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 1024,
                    minLength: 1
                }), f.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = V.description.length) && void 0 !== r ? r : 0, "/1024")))), f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mt-5"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between"
                }, f.createElement("div", {
                    className: "tw-mb-5"
                }, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Primary Style ", f.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), f.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: Q,
                    onChange: function(e) {
                        return W(e.target.value)
                    }
                }, f.createElement("option", null, "Not Specified"), E.map((function(e) {
                    return f.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))), Q && f.createElement("div", {
                    className: "tw-mb-5"
                }, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Secondary Style ", f.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), f.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: oe,
                    onChange: function(e) {
                        return ie(e.target.value)
                    }
                }, f.createElement("option", null, "Not Specified"), E.map((function(e) {
                    return f.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))))), f.createElement("div", {
                    className: "tw-mr-5"
                }, f.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Tags"), f.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "Tags help users discover your avatar more easily. You can add up to 10 custom tags for your avatar.")), f.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, f.createElement(U.II, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            if (ve.find((function(t) {
                                    return t === e.target.value
                                })) || 0 === Xe.trim().length) return;
                            ge([].concat((0, n.Z)(ve), [e.target.value])), Ke("")
                        }
                    },
                    value: Xe,
                    ref: Ve,
                    onChange: function(e) {
                        return Ke(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: S.length >= 10
                }), f.createElement(U.zx, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Ve.current.focus(), ve.find((function(e) {
                            return e === Ve.current.value
                        })) || (ge([].concat((0, n.Z)(ve), [Ve.current.value])), Ke(""))
                    },
                    disabled: S.length >= 10 || 0 === Xe.trim().length
                }, f.createElement(U.$1, {
                    icon: ae.r8
                }))), f.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, ve.map((function(e) {
                    return f.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, f.createElement("span", null, e), f.createElement(U.$1, {
                        icon: ne.NB,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return ge(ve.filter((function(t) {
                                return t !== e
                            })))
                        }
                    }))
                }))), f.createElement("div", null, f.createElement("label", {
                    className: "tw-mb-2"
                }, "Acknowledgements"), f.createElement("p", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "If you’ve used assets or work from other creators in your avatar,", f.createElement("span", {
                    className: "tw-text-link-highlight tw-cursor-pointer tw-select-none tw-block",
                    onClick: function() {
                        return Fe(!Le)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && Fe(!Le)
                    }
                }, "please acknowledge them here ", f.createElement(U.$1, {
                    icon: Le ? re.mT : te.pt
                }))), f.createElement(U.gx, {
                    className: "tw-".concat(Le ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == V ? void 0 : V.acknowledgements,
                    onChange: function(e) {
                        Y(Oe(Oe({}, V), {}, {
                            acknowledgements: e.target.value
                        })), Ae(!1)
                    },
                    maxLength: 2048,
                    minLength: 1
                }), f.createElement("div", {
                    className: "".concat(Le ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, f.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: je,
                    onChange: function() {
                        return Ae(!je)
                    },
                    value: "acknowledge",
                    className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                }), f.createElement("label", {
                    htmlFor: "credits-checkbox",
                    className: "tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                }, "I confirm that I have the necessary rights to use and distribute all the works mentioned here."))), f.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), f.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mb-5"
                }, f.createElement("label", {
                    className: "tw-text-xl tw-font-bold tw-mb-3"
                }, "Content Warnings"), f.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2"
                }, Object.entries(xe.N).map((function(e) {
                    var t = (0, l.Z)(e, 2),
                        r = t[0],
                        a = t[1];
                    return f.createElement("label", {
                        key: r,
                        className: "tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                    }, f.createElement("input", {
                        type: "checkbox",
                        value: r,
                        checked: ue.includes(r),
                        onChange: function(e) {
                            de(e.target.checked ? [].concat((0, n.Z)(ue), [r]) : ue.filter((function(e) {
                                return e !== r
                            })))
                        },
                        className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                    }), a)
                }))))))), f.createElement("div", {
                    className: "tw-".concat("gallery" === M ? "flex" : "hidden", " tw-container tw-flex-col")
                }, f.createElement("h2", {
                    className: "heading"
                }, "Image Gallery"), f.createElement("p", {
                    className: "tw-mb-0"
                }, "Showcase your avatar with up to 6 images."), f.createElement("p", null, "Recommended resolution: 1920x1080px. Maximum file size: 1MB."), j && f.createElement("p", {
                    className: "tw-rounded-lg tw-bg-[#000] tw-px-5 tw-py-4 tw-flex tw-justify-between tw-items-center"
                }, "You can drag images to reorder them", f.createElement(U.$1, {
                    icon: ee.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return A(!1)
                    }
                })), !1 === F.pass && f.createElement(U.qX, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == F ? void 0 : F.message
                }), f.createElement(me, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return D(e)
                    }
                })), f.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, f.createElement("div", {
                    className: "tw-flex"
                }, f.createElement(U.zx, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        et(), s()
                    },
                    neutral: !0
                }, "Cancel"), f.createElement(U.zx, {
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return Ie(!0)
                    },
                    neutral: !0
                }, "Delete Avatar")), f.createElement(U.zx, {
                    loading: Qe,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return rt()
                    },
                    disabled: He
                }, "Save Changes"))))
            };
            var Ae = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                Ue = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                Te = (0, o.Z)(U.JX, {
                    target: "e1blkums0"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                });
            const Le = function() {
                var e, t = (0, p.I0)(),
                    r = (0, v.s0)(),
                    o = (0, v.UO)().avatarId,
                    m = (0, y.Tu)().user,
                    I = (0, y.pc)(),
                    N = (0, p.v9)((function(e) {
                        return e.productFlow
                    })).currentStep,
                    Z = f.useState(!1),
                    S = (0, l.Z)(Z, 2),
                    C = S[0],
                    D = S[1],
                    q = f.useState(null),
                    G = (0, l.Z)(q, 2),
                    R = G[0],
                    M = G[1],
                    z = f.useState(!1),
                    X = (0, l.Z)(z, 2),
                    K = X[0],
                    V = X[1],
                    Y = f.useState(!1),
                    $ = (0, l.Z)(Y, 2),
                    B = $[0],
                    Q = $[1],
                    W = (0, x.LQ)({
                        avatarId: o
                    }),
                    _ = W.data,
                    J = W.isFetching,
                    ee = W.isError,
                    te = W.error,
                    re = W.refetch,
                    ne = (0, j.GR)(null == _ ? void 0 : _.authorId, {
                        skip: !o || !_ || !(null != _ && _.authorId)
                    }),
                    ae = ne.data,
                    le = ne.isFetching,
                    oe = ne.isError,
                    ie = ne.error,
                    ce = "private" === (null == _ ? void 0 : _.releaseStatus),
                    se = !ce,
                    ue = "hidden" === (null == _ ? void 0 : _.releaseStatus),
                    de = (null == _ ? void 0 : _.authorId) === m.id,
                    me = de,
                    we = (0, k.iw)({
                        avatarId: o
                    }, {
                        skip: !o
                    }),
                    fe = we.data,
                    pe = (we.isFetching, we.isError),
                    ve = we.error,
                    ge = O({
                        userId: null == m ? void 0 : m.id,
                        forId: o,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !m || !_ || de || "private" !== (null == _ ? void 0 : _.releaseStatus)
                    }),
                    be = ge.data,
                    he = (ge.isFetching, ge.isError, ge.error, (0, P.Ms)({
                        listingId: null == _ ? void 0 : _.productId,
                        adminPov: !0
                    }, {
                        skip: !(null != _ && _.productId)
                    })),
                    ye = he.data,
                    Ee = he.isFetching,
                    xe = (0, x.ak)(),
                    ke = (0, l.Z)(xe, 2),
                    Ie = ke[0],
                    Ne = ke[1],
                    Ze = Ne.isError,
                    Se = Ne.error,
                    Ce = (0, x.cq)(),
                    Oe = (0, l.Z)(Ce, 2),
                    Pe = Oe[0],
                    Le = Oe[1],
                    Fe = Le.isError,
                    De = Le.error,
                    qe = (0, x.Cm)(),
                    Ge = (0, l.Z)(qe, 2),
                    Re = Ge[0],
                    Me = Ge[1],
                    ze = Me.isError,
                    Xe = Me.error,
                    Ke = Me.isSuccess,
                    Ve = (0, x.GG)(),
                    Ye = (0, l.Z)(Ve, 2),
                    $e = Ye[0],
                    Be = Ye[1],
                    Qe = Be.isError,
                    We = Be.error,
                    _e = Be.isSuccess,
                    He = (0, x.x8)(),
                    Je = (0, l.Z)(He, 2),
                    et = Je[0],
                    tt = Je[1],
                    rt = tt.isLoading,
                    nt = tt.isError,
                    at = tt.error,
                    lt = tt.isSuccess,
                    ot = (0, x.eP)(),
                    it = (0, l.Z)(ot, 2),
                    ct = it[0],
                    st = it[1],
                    ut = st.isLoading,
                    dt = st.isError,
                    mt = st.error,
                    wt = st.isSuccess,
                    ft = (0, y.Nr)(R, 1400),
                    pt = (0, y.Tb)(vt, 300),
                    vt = J || le,
                    gt = ee || oe || pe || Ze || Fe || Qe || nt || dt || ze,
                    bt = te || ie || ve || Se || De || We || at || mt || Xe;
                f.useEffect((function() {
                    null != _ && _.id && M(_.tags)
                }), [_]), f.useEffect((function() {
                    if (null != _ && _.id && ft) {
                        var e = new Set(_.tags);
                        ft.length === _.tags.length && ft.every((function(t) {
                            return e.has(t)
                        })) || Re({
                            avatarId: _.id,
                            tags: ft
                        })
                    }
                }), [ft]), f.useEffect((function() {
                    _e && r("/home/avatars")
                }), [_e]), f.useEffect((function() {
                    lt && t((0, h.d)({
                        title: "Changed Avatars!",
                        icon: u.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [lt]), f.useEffect((function() {
                    wt && t((0, h.d)({
                        title: "Changed Fallback Avatars!",
                        icon: u.KC,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [wt]), f.useEffect((function() {
                    Ke && t((0, h.d)({
                        title: "Content Warnings Updated",
                        icon: d.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != _ && _.name ? "avatar: ".concat(_.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [Ke]);
                var ht, yt = f.useMemo((function() {
                        return (null != fe ? fe : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [fe]),
                    Et = function() {
                        var e = (0, a.Z)(w().mark((function e() {
                            var r, n, a, l, i;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, et({
                                            avatarId: o
                                        });
                                    case 2:
                                        (r = e.sent).error && (i = "string" == typeof(null == r || null === (n = r.error) || void 0 === n || null === (n = n.data) || void 0 === n ? void 0 : n.error) ? null == r || null === (a = r.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error : null == r || null === (l = r.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message, t((0, h.d)({
                                            title: "Failed to change avatar!",
                                            icon: u.KC,
                                            message: null != i ? i : "An error occurred when changing your avatar",
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
                    }(),
                    xt = function() {
                        var e = (0, a.Z)(w().mark((function e() {
                            var r, n, a, l, i;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ct({
                                            avatarId: o
                                        });
                                    case 2:
                                        (r = e.sent).error && (i = "string" == typeof(null == r || null === (n = r.error) || void 0 === n || null === (n = n.data) || void 0 === n ? void 0 : n.error) ? null == r || null === (a = r.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error : null == r || null === (l = r.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message, t((0, h.d)({
                                            title: "Failed to change fallback avatar!",
                                            icon: u.KC,
                                            message: null != i ? i : "An error occurred when changing your fallback",
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
                if (ee) return f.createElement(g.Z, null, f.createElement(U.$4, null, "Avatar"), f.createElement(U.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == te || null === (ht = te.data) || void 0 === ht ? void 0 : ht.error.message) || "There was an error loading the avatar."));
                if (!_ || pt || vt) return f.createElement(g.Z, null, f.createElement(U.$4, null, "Avatar"), f.createElement(L.Z, {
                    loading: !0
                }));
                var kt, It = "";
                gt && (It = f.createElement(U.X2, null, f.createElement(b.Z, {
                    color: "warning"
                }, null == bt || null === (kt = bt.data) || void 0 === kt ? void 0 : kt.error.message)));
                var Nt = function() {
                    Q(!1), t((0, A.bi)())
                };
                return f.createElement(g.Z, null, f.createElement(U.$4, null, null !== (e = _.name) && void 0 !== e ? e : "Avatar"), It, me && f.createElement(je, {
                    isOpen: K,
                    onCloseCallback: function() {
                        return V(!1)
                    },
                    avatarId: _.id
                }), f.createElement(E.default, {
                    avatar: _,
                    user: ae,
                    galleryImages: yt,
                    licenses: be,
                    isSelectAvatarLoading: rt,
                    isSelectFallbackLoading: ut,
                    onEdit: function() {
                        return V(!0)
                    },
                    onChangeFallback: xt,
                    onAvatarChange: Et
                }), (de || I) && f.createElement(U.X2, {
                    className: "tw-mb-3"
                }, f.createElement(Te, null, f.createElement(U.oI, null, f.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), f.createElement(U.Ao, null, f.createElement(U.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, f.createElement(U.ks, {
                    tags: R,
                    isMod: I,
                    onSelectValues: function(e) {
                        M((function(t) {
                            return (0, n.Z)(new Set([].concat((0, n.Z)(t), (0, n.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        M((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: Ue
                }))))), (de || I) && f.createElement(U.X2, {
                    className: "tw-mb-3"
                }, f.createElement("div", null, f.createElement(U.oI, null, f.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), f.createElement(U.Ao, {
                    className: "tw-block"
                }, f.createElement(U.X2, {
                    className: "tw-mb-2"
                }, f.createElement(H, {
                    avatar: _,
                    refetch: re
                }))))), (me || I) && f.createElement(U.X2, {
                    className: "tw-mb-3"
                }, f.createElement(U.l8, {
                    className: "tw-w-full"
                }, f.createElement(U.oI, null, f.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Danger Zone")), f.createElement(U.Ao, null, f.createElement(U.JX, null, f.createElement(T.Z, {
                    isOpen: C,
                    bodyText: "Are you sure you want to DELETE this avatar? This can not be undone!",
                    confirmCallback: function() {
                        $e({
                            avatarId: o
                        }), D(!1)
                    },
                    cancelCallback: function() {
                        return D(!1)
                    }
                }), f.createElement(U.X2, null, f.createElement("div", {
                    className: "tw-w-full"
                }, me && !se && !ue && f.createElement(U.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        Ie({
                            avatarId: o
                        })
                    },
                    warning: !0,
                    expand: !0,
                    disable: ye || Ee
                }, f.createElement(U.$1, {
                    icon: s.nG
                }), " Make Avatar Public"), me && !ce && !ue && f.createElement(U.zx, {
                    className: "tw-mb-2",
                    onClick: function() {
                        Pe({
                            avatarId: o
                        })
                    },
                    warning: !0,
                    expand: !0
                }, f.createElement(U.$1, {
                    icon: c.by
                }), " Make Avatar Private"), (I || de) && !ue && f.createElement(U.zx, {
                    className: "tw-mt-1",
                    onClick: function() {
                        D(!0)
                    },
                    danger: !0,
                    expand: !0
                }, f.createElement(U.$1, {
                    icon: i.$
                }), " Delete Avatar"))))))), !1, !1, f.createElement(U.u_, {
                    title: Ae[N] || null,
                    isVisible: B,
                    onClose: Nt,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, f.createElement(F.Z, {
                    onClose: Nt
                })))
            }
        },
        37599: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(54546),
                a = r(45573),
                l = r(27003),
                o = r(67294),
                i = r(34698),
                c = r(65706),
                s = r(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    r = e.toggle,
                    u = e.title,
                    d = e.size,
                    m = void 0 === d ? "md" : d,
                    w = e.children,
                    f = e.onToggleCallback,
                    p = void 0 === f ? function() {} : f,
                    v = o.useState(t || !1),
                    g = (0, n.Z)(v, 2),
                    b = g[0],
                    h = g[1];
                o.useEffect((function() {
                    h(t)
                }), [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: m,
                    onClick: function() {
                        r ? r() : (p(!b), h(!b))
                    },
                    color: b ? "primary" : "secondary"
                }, b && o.createElement(s.Z, {
                    icon: l.uM
                }), !b && o.createElement(s.Z, {
                    icon: a.Kt
                })), " ", u), o.createElement(c.Z, {
                    isOpen: b
                }, w), "sm" !== m && o.createElement("br", null))
            }
        },
        49567: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(26778),
                a = r(67294),
                l = r(45697),
                o = r.n(l),
                i = (r(9669), r(39886)),
                c = r(34698),
                s = r(86646),
                u = r(46326),
                d = r(83541),
                m = function(e) {
                    var t = e.query,
                        r = (0, d.Gu)({
                            queryURL: t
                        }),
                        l = r.data,
                        o = r.isFetching,
                        m = r.isSuccess,
                        w = r.isError,
                        f = r.refetch;
                    return a.createElement(i.Z, null, a.createElement("h6", {
                        className: "p-1"
                    }, a.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), m && a.createElement(u.Z, {
                        src: l
                    }), o && "Loading...", w && "Error loading ".concat(t), a.createElement("hr", null), a.createElement(c.Z, {
                        onClick: function() {
                            return f()
                        },
                        className: "text-white"
                    }, a.createElement(s.Z, {
                        icon: n.XS,
                        color: "white"
                    }), " Refresh"))
                };
            m.propTypes = {
                query: o().string.isRequired
            };
            const w = m
        },
        60933: (e, t, r) => {
            r.d(t, {
                DS: () => u,
                Gr: () => i,
                s3: () => d,
                sY: () => s,
                uG: () => c
            });
            var n = r(15861),
                a = r(64687),
                l = r.n(a),
                o = {},
                i = function(e) {
                    var t = "".concat(e.name).concat(e.lastModified);
                    return void 0 === o[t] && (o[t] = window.URL.createObjectURL(e)), o[t]
                },
                c = function(e) {
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
                        n = ["image/png", "image/jpeg", "image/svg+xml", "image/bmp"];
                    return void 0 !== r && r && n.push("image/gif"), n.includes(t.type)
                },
                d = function() {
                    var e = (0, n.Z)(l().mark((function e(t) {
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
            var n = r(61509),
                a = {};
            var l = n.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            adminChangeDisplayName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.displayName,
                                        n = e.lock;
                                    return {
                                        url: a.forcename,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: r,
                                            lock: n
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
                                        n = e.username;
                                    return {
                                        url: a.forceUsername,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: r,
                                            username: n
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
        67978: (e, t, r) => {
            r.d(t, {
                As: () => f,
                DM: () => p,
                RM: () => g,
                lZ: () => v,
                qX: () => b,
                rP: () => m,
                wE: () => h,
                x3: () => w,
                xq: () => y
            });
            var n = r(15861),
                a = r(42138),
                l = r(4942),
                o = r(64687),
                i = r.n(o),
                c = r(64358);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, l.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserProducts: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = void 0 === r ? 100 : r,
                                        a = (e.offset, e.archived),
                                        l = e.pageValue,
                                        o = void 0 === l ? 1 : l;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: u({
                                            archived: a
                                        }, (0, c.ue)({
                                            n,
                                            pageValue: o
                                        }))
                                    }
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "PARTIAL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getAllUserProducts: e.query({
                                queryFn: (l = (0, n.Z)(i().mark((function e(t, r, n, l) {
                                    var o, c, s, u, d;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = t.userId, c = t.archived, s = [], u = 0;
                                            case 3:
                                                return e.next = 6, l({
                                                    url: "user/".concat(o, "/products"),
                                                    params: {
                                                        archived: c,
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
                                }))), function(e, t, r, n) {
                                    return l.apply(this, arguments)
                                }),
                                providesTags: function(e, t, r) {
                                    var n = r.userId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "UserProducts",
                                        id: "FULL-LIST:".concat(n)
                                    }])
                                }
                            }),
                            getListingProducts: e.query({
                                query: function(e) {
                                    var t = e.listingId;
                                    return "listing/".concat(t, "/products")
                                },
                                providesTags: function(e, t, r) {
                                    var n = r.listingId;
                                    return [].concat((0, a.Z)(e ? e.map((function(e) {
                                        return {
                                            type: "Product",
                                            id: e.id
                                        }
                                    })) : []), [{
                                        type: "ListingProducts",
                                        id: n
                                    }])
                                }
                            }),
                            getProduct: e.query({
                                query: function(e) {
                                    var t = e.productId;
                                    return "products/".concat(t)
                                },
                                providesTags: function(e, t, r) {
                                    return [{
                                        type: "Product",
                                        id: r.productId
                                    }]
                                }
                            }),
                            createProduct: e.mutation({
                                queryFn: (r = (0, n.Z)(i().mark((function e(t, r, a, l) {
                                    var o, c, s, d, m, w, f, p, v, g, b, h, y, E, x, k, I, N, Z, S, C, O, P, j, A;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.avatarId, s = t.description, d = void 0 === s ? "" : s, m = t.displayName, w = t.duration, f = t.durationType, p = t.file, v = void 0 === p ? null : p, g = t.generateListing, b = t.imageId, h = void 0 === b ? null : b, y = t.instant, E = t.permanent, x = t.priceTokens, k = t.productType, I = t.tag, N = void 0 === I ? "product" : I, Z = t.tags, S = void 0 === Z ? [] : Z, C = t.useForSubscriberList, O = void 0 !== C && C, null === v) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, n.Z)(i().mark((function e() {
                                                    var t, r;
                                                    return i().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (t = new FormData).append("file", v), t.append("tag", N), e.next = 5, l({
                                                                    url: "file/image",
                                                                    method: "POST",
                                                                    body: t
                                                                });
                                                            case 5:
                                                                if (!(r = e.sent).error) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.abrupt("return", {
                                                                    error: r.error
                                                                });
                                                            case 8:
                                                                return e.abrupt("return", r);
                                                            case 9:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))();
                                            case 4:
                                                e.t0 = e.sent, e.next = 8;
                                                break;
                                            case 7:
                                                e.t0 = null;
                                            case 8:
                                                if (null == (P = e.t0) || !P.error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: P.error
                                                });
                                            case 11:
                                                return j = (null == P || null === (o = P.data) || void 0 === o ? void 0 : o.id) || h, e.next = 14, l({
                                                    url: "products",
                                                    method: "POST",
                                                    body: u(u({
                                                        description: d,
                                                        displayName: m,
                                                        duration: w,
                                                        durationType: f,
                                                        generateListing: g,
                                                        instant: y,
                                                        permanent: E,
                                                        priceTokens: x,
                                                        productType: k,
                                                        tags: S,
                                                        useForSubscriberList: O
                                                    }, c && {
                                                        avatarId: c
                                                    }), j && {
                                                        imageId: j
                                                    })
                                                });
                                            case 14:
                                                if (!(A = e.sent).error) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: A.error
                                                });
                                            case 17:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        product: A.data
                                                    }, (null == P ? void 0 : P.data) && {
                                                        file: P.data
                                                    })
                                                });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, n, a) {
                                    return r.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.ownerId,
                                        l = r.tag;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), ["UserProducts", {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: n
                                    }], (0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            updateProduct: e.mutation({
                                queryFn: (t = (0, n.Z)(i().mark((function e(t, r, n, a) {
                                    var l, o, c, s, d, m, w, f, p, v, g, b, h, y, E, x, k, I;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.file, s = void 0 === c ? null : c, d = t.tag, m = void 0 === d ? "product" : d, w = t.productId, f = t.displayName, p = t.description, v = t.tags, g = void 0 === v ? null : v, b = t.imageId, h = t.groupAccess, y = t.groupAccessRemove, E = t.useForSubscriberList, x = null, null === s) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return (k = new FormData).append("file", s), k.append("tag", m), e.next = 8, a({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: k
                                                });
                                            case 8:
                                                if (!(x = e.sent).error) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: x.error
                                                });
                                            case 11:
                                                return e.next = 13, a({
                                                    url: "products/".concat(w),
                                                    method: "PUT",
                                                    body: u(u({
                                                        displayName: f,
                                                        description: p
                                                    }, null !== g ? g : {}), {}, {
                                                        groupAccess: h,
                                                        groupAccessRemove: y,
                                                        useForSubscriberList: E,
                                                        imageId: x ? null === (l = x) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.id : b
                                                    })
                                                });
                                            case 13:
                                                if (!(I = e.sent).error) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: I.error
                                                });
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: u({
                                                        product: I.data
                                                    }, (null === (o = x) || void 0 === o ? void 0 : o.data) && {
                                                        file: x.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, r, n, a) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(e, t, r) {
                                    var n = r.productId,
                                        l = r.ownerId,
                                        o = r.tag;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", {
                                        type: "GroupRoles"
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(o)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: l
                                    }].concat((0, a.Z)(e ? [{
                                        type: "File",
                                        id: e.id
                                    }] : []))
                                }
                            }),
                            deleteProduct: e.mutation({
                                query: function(e) {
                                    var t = e.productId,
                                        r = e.force;
                                    return {
                                        url: "products/".concat(t),
                                        method: "DELETE",
                                        params: {
                                            force: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, r) {
                                    var n = r.productId;
                                    r.ownerId;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", "Stores", {
                                        type: "Store"
                                    }]
                                }
                            })
                        };
                        var t, r, l
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                m = d.useGetUserProductsQuery,
                w = d.useGetAllUserProductsQuery,
                f = d.useLazyGetAllUserProductsQuery,
                p = d.useGetListingProductsQuery,
                v = d.useGetProductQuery,
                g = d.useLazyGetProductQuery,
                b = d.useCreateProductMutation,
                h = d.useUpdateProductMutation,
                y = d.useDeleteProductMutation
        }
    }
]);
//# sourceMappingURL=858e6a263500dacd632d0e4e8c22c859d7fb0475f43c17168faf03ee7c2b0498.js.map