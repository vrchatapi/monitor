"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1388], {
        76461: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Te
            });
            var n = r(42138),
                a = r(15861),
                o = r(54546),
                l = r(4965),
                i = r(13226),
                c = r(66007),
                s = r(3820),
                u = r(64687),
                d = r.n(u),
                m = r(67294),
                w = r(32981),
                p = r(89250),
                f = r(53637),
                v = r(23138),
                g = r(64258),
                h = r(12752),
                b = r(22704),
                y = r(21538),
                E = r(41255),
                x = r(4942),
                k = r(64358);

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        (0, x.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Z = r(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getUserLicensesForContent: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        r = e.n,
                                        n = e.pageValue,
                                        a = e.forId,
                                        o = e.forType,
                                        l = e.forAction,
                                        i = e.isActive,
                                        c = void 0 === i || i;
                                    return {
                                        url: "licenses",
                                        params: N(N({}, (0, k.ue)({
                                            n: r,
                                            pageValue: n
                                        })), {}, {
                                            licenseHolderId: t,
                                            forId: a,
                                            forType: o,
                                            forAction: l,
                                            isActive: c
                                        })
                                    }
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }),
                S = Z.useGetUserLicensesForContentQuery,
                C = r(16869),
                O = r(62437),
                P = r(43683),
                j = r(14411),
                A = (r(37599), r(49567), r(98185)),
                U = r(19637),
                T = r(94370),
                F = r(6811),
                L = (r(37337), r(4991)),
                D = r(35773),
                R = r(95305),
                q = r(93007),
                G = r(30381),
                M = r.n(G),
                z = r(72522);

            function K(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Y(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Y(e, t)
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
                var o, l = !0,
                    i = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var V = "standard",
                X = "impostor",
                $ = m.createElement(j.$1, {
                    color: "#54b5c5",
                    icon: F.f8
                }),
                B = {
                    estimatedServiceDurationSeconds: 14400
                };
            const W = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return m.createElement("div", null, "We don't seem to have that avatar.");
                var l, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = K(n.unityPackages);
                try {
                    for (d.s(); !(l = d.n()).done;) {
                        var w = l.value,
                            p = w.platform,
                            v = w.variant,
                            g = w.assetUrl,
                            b = w.unitySortNumber;
                        p in u || (u[p] = {}), "impostor" === v && i++, b >= 2017e7 && "standalonewindows" === p && (c = !0, (null == s || b > s.unitySortNumber) && (s = {
                            fileId: (0, k.oQ)(g),
                            versionNumber: parseInt((0, k.Rz)(g)),
                            unitySortNumber: b
                        })), u[p][null != v ? v : V] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var x = (0, y.X8)(),
                    I = (0, o.Z)(x, 2),
                    N = I[0],
                    Z = I[1],
                    S = Z.isLoading,
                    C = Z.isError,
                    O = Z.error,
                    P = (Z.isSuccess, (0, y.EA)()),
                    A = (0, o.Z)(P, 2),
                    U = A[0],
                    F = A[1],
                    G = F.isLoading,
                    Y = F.isError,
                    W = F.error,
                    Q = F.isSuccess,
                    _ = F.reset,
                    H = (0, E.Ko)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    J = H.data,
                    ee = H.refetch,
                    te = (0, m.useState)(!1),
                    re = (0, o.Z)(te, 2),
                    ne = re[0],
                    ae = re[1],
                    oe = (0, m.useState)(null),
                    le = (0, o.Z)(oe, 2),
                    ie = le[0],
                    ce = le[1];
                (0, h.Yz)(a, ne ? 1e4 : null), (0, h.Yz)(ee, ne ? 5e3 : null);
                var se = (0, y.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, y.ve)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : B,
                    me = i > 0,
                    we = i === z.IM.length,
                    pe = n.lastImpostorizationRequest,
                    fe = null != pe && M()(pe).add(144e5).isAfter(M()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (fe) {
                        var ve, ge, he = null == J || null === (ve = J.versions) || void 0 === ve || null === (ve = ve[s.versionNumber]) || void 0 === ve || null === (ve = ve.file) || void 0 === ve ? void 0 : ve.impostorStatus;
                        if (null != he && null != he.date && M()(he.date).isAfter(pe))
                            if (!he.isSuccess) ce(null !== (ge = he.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else Q ? (_(), ae(!0)) : !fe || we || ie || ae(!0);
                var be = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = W.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = m.createElement("code", null, W.data.error.message)), r
                };
                return m.createElement(f.Z, null, m.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && m.createElement(j.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, m.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", M().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), m.createElement(L.Z, {
                    size: "sm"
                }, m.createElement("thead", null, m.createElement("tr", {
                    style: {
                        borderColor: "#737372"
                    }
                }, m.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Platform"), m.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "User-created"), m.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Impostor"))), m.createElement("tbody", null, z.IM.map((function(e) {
                    var t, r = u[e] || {};
                    return m.createElement("tr", {
                        key: e,
                        style: {
                            borderColor: "#737372"
                        }
                    }, m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, (null === (t = z.VT[e]) || void 0 === t ? void 0 : t.label) || e), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, V in r && $), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, X in r && $))
                })))), ie && m.createElement(D.Z, null, m.createElement(R.Z, null, m.createElement(j.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, m.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), m.createElement("p", null, m.createElement("pre", null, ie)), m.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && m.createElement(D.Z, null, m.createElement(R.Z, null, m.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), m.createElement("p", null, m.createElement("pre", null, ye)))), m.createElement(D.Z, null, m.createElement(R.Z, null, m.createElement(j.zx, {
                    className: "mb-2",
                    onClick: function() {
                        U({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !be,
                    loading: G || ne
                }, m.createElement(j.$1, {
                    width: 20,
                    icon: q.Z
                }), " ", function() {
                    var e;
                    if (G) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != pe) {
                            var t = M()(),
                                r = M()(pe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = M().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), m.createElement(R.Z, null, m.createElement(j.zx, {
                    className: "mb-2",
                    onClick: function() {
                        N({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: S,
                    disabled: !me
                }, m.createElement(j.$1, {
                    width: 20,
                    icon: T.nY
                }), " Delete Impostors"))), C && m.createElement(j.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", m.createElement("br", null), Ee(O)), Y && m.createElement(j.qX, {
                    type: "error"
                }, "Couldn't request impostors.", m.createElement("br", null), Ee(W)))
            };
            r(9669);
            var Q = r(45987),
                _ = r(87709),
                H = r(41145),
                J = r(62228),
                ee = r(59545),
                te = r(40098),
                re = r(89740),
                ne = r(76553),
                ae = r(92332),
                oe = r(12690),
                le = r(42619),
                ie = r(78076),
                ce = r(86646);
            const se = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    n = e.maxFileSizeMegaBytes,
                    l = e.galleryId,
                    i = e.file,
                    s = void 0 === i ? null : i,
                    u = e.validationCallback,
                    p = void 0 === u ? function() {} : u,
                    f = (0, w.I0)(),
                    v = (0, m.useRef)(null),
                    h = (0, m.useState)(""),
                    b = (0, o.Z)(h, 2),
                    y = b[0],
                    x = b[1],
                    I = null === s ? "" : (0, k.S6)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    N = (0, E.Yh)(),
                    Z = (0, o.Z)(N, 2),
                    S = Z[0],
                    C = Z[1].isLoading,
                    O = (0, E.g3)(),
                    P = (0, o.Z)(O, 2),
                    j = P[0],
                    A = P[1].isLoading,
                    U = function() {
                        var e = (0, a.Z)(d().mark((function e(a) {
                            var o, i, s, u;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = null === (o = a.target) || void 0 === o || null === (o = o.files) || void 0 === o ? void 0 : o[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, k.o1)({
                                            file: i,
                                            maxFileSizeMegaBytes: n,
                                            minImageDimension: t,
                                            maxImageDimension: r
                                        });
                                    case 5:
                                        if (s = e.sent, p(s), s.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, S({
                                            tag: "avatargallery",
                                            file: i,
                                            galleryId: l
                                        }).unwrap();
                                    case 12:
                                        x(""), e.next = 19;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), f((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (u = e.t0.data) || void 0 === u || null === (u = u.error) || void 0 === u ? void 0 : u.message) || "Unknown error"),
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
                    T = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, j({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), f((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
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
                return C || A ? m.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, m.createElement(ce.Z, {
                    icon: ae.LM,
                    spin: !0,
                    color: "#404C58",
                    width: "32"
                })) : null === s ? m.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-pointer",
                    onClick: function() {
                        return v.current.click()
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key && " " !== e.key || v.current.click()
                    }
                }, m.createElement(ce.Z, {
                    icon: te.r8,
                    color: "#404C58",
                    width: 32
                }), m.createElement("input", {
                    className: "tw-hidden",
                    type: "file",
                    accept: ".jpg, .jpeg, .png",
                    ref: v,
                    value: y,
                    onChange: function(e) {
                        U(e)
                    },
                    name: "additional-image__input",
                    "aria-label": "Upload additional image"
                })) : m.createElement("div", {
                    className: " tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-grab tw-bg-cover tw-bg-center tw-relative ",
                    style: {
                        backgroundImage: "url(".concat(I, ")")
                    },
                    "aria-label": "Additional Avatar Showcase"
                }, m.createElement("span", {
                    className: "tw-absolute tw-bottom-1 tw-right-1 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded tw-cursor-pointer hover:tw-bg-dark-grey tw-transition",
                    onClick: function() {
                        return T({
                            fileId: s.id
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" !== e.key && " " !== e.key || T({
                            fileId: s.id
                        })
                    },
                    "aria-label": "Delete additional image"
                }, m.createElement(ce.Z, {
                    icon: le.$,
                    width: 16
                })))
            };
            var ue = r(50048);
            const de = function(e) {
                var t = e.className,
                    r = e.minImageDimension,
                    l = void 0 === r ? 100 : r,
                    i = e.maxImageDimension,
                    s = void 0 === i ? 2048 : i,
                    u = e.maxFileSizeMegaBytes,
                    p = void 0 === u ? 10 : u,
                    f = e.validationCallback,
                    v = void 0 === f ? function() {} : f,
                    h = e.galleryId,
                    b = (0, w.I0)(),
                    y = (0, m.useRef)(null),
                    x = (0, m.useState)(""),
                    I = (0, o.Z)(x, 2),
                    N = I[0],
                    Z = I[1],
                    S = (0, m.useState)([]),
                    C = (0, o.Z)(S, 2),
                    O = C[0],
                    P = C[1],
                    j = (0, m.useState)(!1),
                    A = (0, o.Z)(j, 2),
                    U = A[0],
                    T = A[1],
                    F = (0, m.useState)(!0),
                    L = (0, o.Z)(F, 2),
                    D = L[0],
                    R = L[1],
                    q = (0, m.useState)(null),
                    G = (0, o.Z)(q, 2),
                    M = G[0],
                    z = G[1],
                    K = (0, E.Yh)(),
                    Y = (0, o.Z)(K, 2),
                    V = Y[0],
                    X = Y[1].isLoading,
                    $ = (0, E.g3)(),
                    B = (0, o.Z)($, 2),
                    W = B[0],
                    Q = B[1].isLoading,
                    _ = (0, E.e4)(),
                    H = (0, o.Z)(_, 2),
                    J = H[0],
                    ee = H[1],
                    te = ee.isLoading,
                    re = ee.error,
                    ne = (0, E.iw)({
                        avatarId: h
                    }, {
                        skip: !h
                    }),
                    de = ne.data;
                ne.refetch;
                (0, m.useEffect)((function() {
                    if (de) {
                        var e = (0, n.Z)(de).sort((function(e, t) {
                            return e.order - t.order
                        }));
                        P(e)
                    }
                }), [de]);
                var me = function(e, t) {
                        null !== t && (z(e), T(!0))
                    },
                    we = function(e) {
                        e.preventDefault()
                    },
                    pe = function() {
                        var e = (0, a.Z)(d().mark((function e(t, r) {
                            var a, l, i, s, u, m;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== M && M !== t && null !== r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return a = (0, n.Z)(O), l = a.splice(M, 1), i = (0, o.Z)(l, 1), s = i[0], a.splice(t, 0, s), P(a), z(null), T(!1), u = a.map((function(e) {
                                            return e.id
                                        })), e.prev = 9, e.next = 12, J({
                                            ids: u
                                        });
                                    case 12:
                                        e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(9), console.error("Failed to update image order:", e.t0), b((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
                                            message: "Failed to change order of images: ".concat(null == re || null === (m = re.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message),
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
                    fe = (null == O ? void 0 : O.length) > 0,
                    ve = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n, a, o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = null === (r = t.target) || void 0 === r || null === (r = r.files) || void 0 === r ? void 0 : r[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, k.o1)({
                                            file: n,
                                            maxFileSizeMegaBytes: p,
                                            minImageDimension: l,
                                            maxImageDimension: s
                                        });
                                    case 5:
                                        if (a = e.sent, v(a), a.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.prev = 9, e.next = 12, V({
                                            tag: "avatargallery",
                                            file: n,
                                            galleryId: h
                                        }).unwrap();
                                    case 12:
                                        Z(""), e.next = 19;
                                        break;
                                    case 15:
                                        return e.prev = 15, e.t0 = e.catch(9), console.error("Failed to upload image:", e.t0), e.abrupt("return", b((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) || "Unknown error"),
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
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, W({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), b((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
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
                    he = Q || X || te;
                return m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !he && function() {
                    if (!fe) return m.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                    }, m.createElement(ce.Z, {
                        icon: ie.Vm,
                        color: "#404C58",
                        width: 96
                    }), m.createElement(ue.ZP, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return y.current.click()
                        }
                    }, m.createElement(ce.Z, {
                        icon: ie.Vm
                    }), " Upload Cover Image"), m.createElement("input", {
                        className: "tw-hidden",
                        type: "file",
                        accept: ".jpg, .jpeg, .png",
                        ref: y,
                        value: N,
                        onChange: function(e) {
                            ve(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = O[0] || null,
                        t = (0, k.S6)({
                            fileId: e.id
                        });
                    return m.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4 tw-overflow-hidden tw-relative tw-cursor-grab",
                        draggable: !0,
                        onDragStart: function() {
                            return me(0, e)
                        },
                        onDragOver: we,
                        onDrop: function() {
                            return pe(0, e)
                        },
                        style: {
                            transition: U ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: 0 === M ? .3 : 1,
                            transform: 0 === M ? "scale(0.95)" : "scale(1)"
                        }
                    }, m.createElement("div", {
                        className: "tw-relative"
                    }, D && m.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, m.createElement(ce.Z, {
                        icon: ae.LM,
                        color: "#FFFFFF",
                        spin: !0,
                        width: 48
                    })), m.createElement("img", {
                        src: t,
                        alt: "Avatar Cover Showcase",
                        onLoad: function() {
                            return R(!1)
                        },
                        onError: function() {
                            return R(!1)
                        },
                        style: {
                            display: D ? "none" : "block"
                        }
                    })), m.createElement("span", {
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
                    }, m.createElement(ce.Z, {
                        icon: le.$,
                        width: 16
                    })), m.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, m.createElement(ce.Z, {
                        icon: oe.xV,
                        width: 16
                    }), " Cover Image"))
                }(), he && m.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, m.createElement(ce.Z, {
                    icon: ae.LM,
                    color: "#404C58",
                    width: "32",
                    spin: !0
                })), m.createElement("div", {
                    className: "tw-grid tw-grid-cols-5 tw-gap-4 tw-w-full"
                }, function(e) {
                    for (var t = new Array(5).fill(null), r = 0; r < e.length && r < 5; r++) t[r] = e[r];
                    return t
                }((0, n.Z)(O.slice(1))).map((function(e, t) {
                    return m.createElement("div", {
                        key: null === e ? t : e.id,
                        draggable: !0,
                        onDragStart: function() {
                            me(t + 1, e)
                        },
                        onDragOver: we,
                        onDrop: function() {
                            return pe(t + 1, e)
                        },
                        style: {
                            transition: U ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: M === t + 1 ? .3 : 1,
                            transform: M === t + 1 ? "scale(0.95)" : "scale(1)"
                        }
                    }, m.createElement(se, {
                        file: e,
                        galleryId: h,
                        minImageDimension: l,
                        maxImageDimension: s,
                        maxFileSizeMegaBytes: p,
                        validationCallback: function(e) {
                            return v(e)
                        }
                    }))
                }))))
            };
            var me = r(72998),
                we = r(22497),
                pe = r(60933),
                fe = r(73423),
                ve = r(39191);

            function ge(e, t) {
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
                    t % 2 ? ge(Object(r), !0).forEach((function(t) {
                        (0, x.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ge(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const be = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    l = void 0 === n ? null : n,
                    i = m.useState(null),
                    c = (0, o.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    p = (0, E.Yh)(),
                    f = (0, o.Z)(p, 2),
                    v = f[0],
                    h = f[1].isLoading,
                    b = (0, w.I0)(),
                    y = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        b((0, g.d)({
                            title: t,
                            icon: ie.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    x = function() {
                        var e = (0, a.Z)(d().mark((function e(r) {
                            var n;
                            return d().wrap((function(e) {
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
                                        return e.next = 6, k({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        u(m.createElement(ve.Z, {
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
                    k = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n, a, o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, pe.uG)(r);
                                    case 3:
                                        if (n = e.sent, a = n.width < 64 || n.height < 64, o = n.width > 2048 || n.height > 2048, !a) {
                                            e.next = 9;
                                            break
                                        }
                                        return y({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 9:
                                        if (!o) {
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
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var n, a, o, i, c;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.image, a = t.mask, void 0 === a ? "square" : a, e.prev = 1, e.next = 4, v(he({
                                            file: n.file || n
                                        }, null !== l && {
                                            tag: l
                                        })).unwrap();
                                    case 4:
                                        o = e.sent, r(o), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error("Error deleting avatar:", e.t0), b((0, g.d)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: ne.eH,
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
                return m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-min-h-[30em] tw-overflow-hidden"
                }, h && m.createElement(fe.Z, {
                    name: "image"
                }), !h && (s || m.createElement(we.Z, {
                    fileSelectedCallback: function(e) {
                        return x(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels."
                })))
            };
            var ye = r(3620),
                Ee = r(45697),
                xe = r.n(Ee),
                ke = function(e) {
                    var t = e.avatarId,
                        r = e.isOpen,
                        n = e.confirmCallback,
                        a = e.cancelCallback;
                    return r ? m.createElement("div", {
                        className: "tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto"
                    }, m.createElement("div", {
                        className: "tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0"
                    }, m.createElement("div", {
                        className: "tw-fixed tw-inset-0 tw-transition-opacity",
                        "aria-hidden": "true"
                    }, m.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-bg-dark-grey-transparent-90",
                        onClick: a
                    })), m.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen",
                        "aria-hidden": "true"
                    }, "​"), m.createElement("div", {
                        className: "tw-inline-block tw-align-bottom tw-bg-black tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-[750px] sm:tw-w-full"
                    }, m.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-flex tw-flex-row tw-justify-between tw-items-center"
                    }, m.createElement("h3", {
                        className: "heading tw-text-white tw-font-bold tw-text-2xl tw-m-0"
                    }, "Delete Avatar"), m.createElement(ue.ZP, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: a
                    }, m.createElement(ce.Z, {
                        icon: _.faXmark
                    }))), m.createElement("div", {
                        className: "tw-bg-black tw-px-5 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4"
                    }, m.createElement("div", {
                        className: "sm:tw-flex sm:tw-items-start"
                    }, m.createElement("div", {
                        className: "tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-text-left"
                    }, m.createElement("p", {
                        className: "tw-text-md tw-text-white tw-font-bold"
                    }, "Are you sure you want to delete this avatar? This is NOT reversible.")))), m.createElement("div", {
                        className: "tw-px-4 tw-py-4 tw-justify-between sm:tw-px-6 sm:tw-flex sm:tw-flex-row-reverse"
                    }, m.createElement(ue.ZP, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return n(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), m.createElement(ue.ZP, {
                        neutral: !0,
                        className: "tw-mt-3 tw-w-full sm:tw-mt-0 tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 sm:tw-text-sm",
                        onClick: a,
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Cancel"))))) : null
                };
            ke.propTypes = {
                avatarId: xe().string.isRequired,
                isOpen: xe().bool.isRequired,
                confirmCallback: xe().func.isRequired,
                cancelCallback: xe().func.isRequired
            };
            const Ie = ke;
            var Ne = ["thumbnailImageUrl", "acknowledgements"];

            function Ze(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(r), !0).forEach((function(t) {
                        (0, x.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ze(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ce = new RegExp("^".concat(ye.i.AUTHOR)),
                Oe = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const Pe = function(e) {
                var t, r, l, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, p.s0)(),
                    f = (0, w.I0)(),
                    v = (0, h.pc)(),
                    b = (0, y.LQ)({
                        avatarId: c
                    }),
                    E = b.data,
                    x = (b.isFetching, b.isError, b.error, b.refetch, (0, y.CO)()),
                    I = x.data,
                    N = void 0 === I ? [] : I,
                    Z = (x.isFetching, x.isError, x.error, (0, m.useMemo)((function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == E || null === (e = E.tags) || void 0 === e || e.forEach((function(e) {
                            e.startsWith(ye.i.AUTHOR) ? t.push(e) : e.startsWith(ye.i.CONTENT_WARNING) ? r.push(e) : n.push(e)
                        })), {
                            authorTags: t,
                            contentTags: r,
                            privateTags: n
                        }
                    }), [null == E ? void 0 : E.tags])),
                    S = Z.authorTags,
                    C = Z.contentTags,
                    O = Z.privateTags,
                    P = (l = E, Object.keys(l).filter((function(e) {
                        return Oe.includes(e)
                    })).reduce((function(e, t) {
                        return e[t] = l[t], e
                    }), {})),
                    A = (0, m.useState)(!0),
                    U = (0, o.Z)(A, 2),
                    T = U[0],
                    L = U[1],
                    D = (0, m.useState)({
                        pass: !0,
                        message: ""
                    }),
                    R = (0, o.Z)(D, 2),
                    q = R[0],
                    G = R[1],
                    M = (0, m.useState)("overview"),
                    z = (0, o.Z)(M, 2),
                    K = z[0],
                    Y = z[1],
                    V = (0, m.useState)(P),
                    X = (0, o.Z)(V, 2),
                    $ = X[0],
                    B = X[1],
                    W = (0, m.useState)(),
                    ae = (0, o.Z)(W, 2),
                    oe = ae[0],
                    le = ae[1],
                    ie = (0, m.useState)(),
                    ce = (0, o.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    we = (0, m.useState)(C),
                    pe = (0, o.Z)(we, 2),
                    fe = pe[0],
                    ve = pe[1],
                    ge = (0, m.useState)(S),
                    he = (0, o.Z)(ge, 2),
                    Ee = he[0],
                    xe = he[1],
                    ke = (0, m.useState)(!1),
                    Ze = (0, o.Z)(ke, 2),
                    Pe = Ze[0],
                    je = Ze[1],
                    Ae = (0, m.useState)(!!P.acknowledgements),
                    Ue = (0, o.Z)(Ae, 2),
                    Te = Ue[0],
                    Fe = Ue[1],
                    Le = (0, m.useState)(!!P.acknowledgements),
                    De = (0, o.Z)(Le, 2),
                    Re = De[0],
                    qe = De[1],
                    Ge = (0, m.useState)(!1),
                    Me = (0, o.Z)(Ge, 2),
                    ze = Me[0],
                    Ke = Me[1],
                    Ye = (0, m.useState)(""),
                    Ve = (0, o.Z)(Ye, 2),
                    Xe = Ve[0],
                    $e = Ve[1],
                    Be = (0, m.useRef)(null),
                    We = (0, y.C0)(),
                    Qe = (0, o.Z)(We, 2),
                    _e = Qe[0],
                    He = Qe[1].isLoading,
                    Je = (0, y.GG)(),
                    et = (0, o.Z)(Je, 1)[0],
                    tt = (0, m.useMemo)((function() {
                        var e;
                        return Re && !Te && (null == $ || null === (e = $.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }), [Re, Te, $.acknowledgements]),
                    rt = function() {
                        var e, t;
                        le(at(null == E || null === (e = E.styles) || void 0 === e ? void 0 : e.primary)), ue(at(null == E || null === (t = E.styles) || void 0 === t ? void 0 : t.secondary))
                    },
                    nt = function() {
                        B(P), rt()
                    },
                    at = function(e) {
                        var t;
                        return (null === (t = N.find((function(t) {
                            var r;
                            return (null == t || null === (r = t.styleName) || void 0 === r ? void 0 : r.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                        }))) || void 0 === t ? void 0 : t.id) || null
                    };
                (0, m.useEffect)(rt, [E, N]);
                var ot = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var t, r, a, o, l;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.Z)(O), (0, n.Z)(Ee), (0, n.Z)(fe)), $.thumbnailImageUrl, r = $.acknowledgements, a = (0, Q.Z)($, Ne), e.prev = 2, e.next = 5, _e({
                                            avatarId: c,
                                            data: Se(Se({}, a), {}, {
                                                acknowledgements: r || "",
                                                tags: t,
                                                styles: {
                                                    primary: oe,
                                                    secondary: se
                                                }
                                            })
                                        }).unwrap();
                                    case 5:
                                        s(), f((0, g.d)({
                                            title: "Avatar Updated",
                                            icon: F.f8,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), console.error("Error updating avatar:", e.t0), f((0, g.d)({
                                            title: "Failed to update avatar",
                                            icon: ne.eH,
                                            message: null !== (o = null === (l = e.t0.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message) && void 0 !== o ? o : "Something went wrong",
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
                    lt = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, et({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        u("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), f((0, g.d)({
                                            title: "Failed to delete avatar",
                                            icon: ne.eH,
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
                    it = (0, m.useCallback)((function(e) {
                        Y(e)
                    }), []),
                    ct = !!se && !oe,
                    st = tt || ct;
                return m.createElement(j.u_, {
                    title: "Edit Avatar",
                    onClose: function() {
                        nt(), L(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    backgroundColor: "#181B1F",
                    className: "tw-p-5"
                }, m.createElement(Ie, {
                    avatarId: c,
                    isOpen: Pe,
                    cancelCallback: function() {
                        return je(!1)
                    },
                    confirmCallback: function() {
                        return lt(E.id)
                    }
                }), m.createElement(j.u_, {
                    isVisible: ze,
                    className: "tw-pt-0",
                    onClose: function() {
                        return Ke(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: m.createElement(be, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return Ke(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        n = (0, k.d3)({
                                            fileUrl: r
                                        }),
                                        a = n.fileId,
                                        o = n.fileVersion,
                                        l = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(a, "/").concat(o, "/256");
                                    B(Se(Se({}, $), {}, {
                                        thumbnailImageUrl: l,
                                        imageUrl: r
                                    })), Ke(!1)
                                } catch (e) {
                                    return console.error("Failed to process the uploaded image data", e.message), null
                                }
                            }(e)
                        }
                    })
                }), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, m.createElement(me.Z, {
                    className: "tw--ml-2 tw--mt-4",
                    onChange: it,
                    tabs: [{
                        id: "overview",
                        name: "Overview",
                        condition: !0
                    }, {
                        id: "gallery",
                        name: "Gallery",
                        condition: !0
                    }],
                    selected: K,
                    justify: "start"
                }), m.createElement("div", {
                    className: "tw-".concat("overview" === K ? "block" : "hidden", " tw-w-full")
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full"
                }, m.createElement("div", {
                    className: "tw-block tw-mr-5"
                }, m.createElement("button", {
                    onClick: function() {
                        return Ke(!0)
                    },
                    type: "button",
                    className: "\n                  tw-bg-cover tw-bg-center tw-w-[286px] tw-h-[286px]  \n                  tw-border-0 tw-p-0 tw-rounded-2xl tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent\n                ",
                    style: {
                        backgroundImage: "url(".concat((null == $ ? void 0 : $.thumbnailImageUrl) || (null == $ ? void 0 : $.imageUrl), ")")
                    }
                })), m.createElement("div", {
                    className: "tw-flex-grow"
                }, m.createElement("div", {
                    className: "tw-mb-3"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), m.createElement(j.II, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: $.name,
                    onChange: function(e) {
                        return B(Se(Se({}, $), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 128,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = $.name.length) && void 0 !== t ? t : 0, "/128")), m.createElement("div", {
                    className: "tw-mb-0"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), m.createElement(j.gx, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: $.description,
                    onChange: function(e) {
                        return B(Se(Se({}, $), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 1024,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = $.description.length) && void 0 !== r ? r : 0, "/1024")))), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between tw-items-end"
                }, m.createElement("div", {
                    className: "tw-w-80"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Primary Style ", m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), m.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: oe,
                    onChange: function(e) {
                        return le(e.target.value)
                    }
                }, m.createElement("option", {
                    value: ""
                }, "Not Specified"), N.map((function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))), m.createElement("div", {
                    className: "tw-w-10"
                }, m.createElement(j.zx, {
                    className: "tw-w-full",
                    title: "Swap primary and secondary styles",
                    disabled: !oe && !se,
                    onClick: function() {
                        var e = oe || "";
                        le(se || ""), ue(e)
                    }
                }, m.createElement(j.$1, {
                    icon: re.faRightLeft
                }))), m.createElement("div", {
                    className: "tw-w-80"
                }, (oe || se) && m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Secondary Style ", m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), m.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: se,
                    onChange: function(e) {
                        return ue(e.target.value)
                    }
                }, m.createElement("option", {
                    value: ""
                }, "Not Specified"), N.map((function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))))), ct && m.createElement("span", {
                    className: "tw-text-sm tw-text-red tw-mt-2"
                }, "You must set a primary style in order to set a secondary style."), m.createElement("div", {
                    className: "tw-mr-5 tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Tags"), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "Tags help users discover your avatar more easily. You can add up to 10 custom tags for your avatar.")), m.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, m.createElement(j.II, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            var t = "".concat(ye.i.AUTHOR).concat(e.target.value);
                            if (Ee.find((function(e) {
                                    return e === t
                                })) || 0 === Xe.trim().length) return;
                            xe([].concat((0, n.Z)(Ee), [t])), $e("")
                        }
                    },
                    value: Xe,
                    ref: Be,
                    onChange: function(e) {
                        return $e(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: S.length >= 10
                }), m.createElement(j.zx, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Be.current.focus();
                        var e = "".concat(ye.i.AUTHOR).concat(Be.current.value);
                        Ee.find((function(t) {
                            return t === e
                        })) || (xe([].concat((0, n.Z)(Ee), [e])), $e(""))
                    },
                    disabled: S.length >= 10 || 0 === Xe.trim().length
                }, m.createElement(j.$1, {
                    icon: te.r8
                }))), m.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, Ee.map((function(e) {
                    return m.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, m.createElement("span", null, e.replace(Ce, "")), m.createElement(j.$1, {
                        icon: ee.NB,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return xe(Ee.filter((function(t) {
                                return t !== e
                            })))
                        }
                    }))
                }))), m.createElement("div", null, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Acknowledgements"), m.createElement("p", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "If you’ve used assets or work from other creators in your avatar,", m.createElement("span", {
                    className: "tw-text-link-highlight tw-cursor-pointer tw-select-none tw-block",
                    onClick: function() {
                        return qe(!Re)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && qe(!Re)
                    }
                }, "please acknowledge them here ", m.createElement(j.$1, {
                    icon: Re ? J.mT : H.pt
                }))), m.createElement(j.gx, {
                    className: "tw-".concat(Re ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == $ ? void 0 : $.acknowledgements,
                    onChange: function(e) {
                        B(Se(Se({}, $), {}, {
                            acknowledgements: e.target.value
                        })), Fe(!1)
                    },
                    maxLength: 2048,
                    minLength: 1
                }), m.createElement("div", {
                    className: "".concat(Re ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, m.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: Te,
                    onChange: function() {
                        return Fe(!Te)
                    },
                    value: "acknowledge",
                    className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                }), m.createElement("label", {
                    htmlFor: "credits-checkbox",
                    className: "tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                }, "I confirm that I have the necessary rights to use and distribute all the works mentioned here."))), m.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mb-5"
                }, m.createElement("label", {
                    className: "tw-text-xl tw-font-bold tw-mb-3"
                }, "Content Warnings"), m.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2"
                }, Object.entries(ye.N).map((function(e) {
                    var t = (0, o.Z)(e, 2),
                        r = t[0],
                        a = t[1];
                    return m.createElement("label", {
                        key: r,
                        className: "tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                    }, m.createElement("input", {
                        type: "checkbox",
                        value: r,
                        checked: fe.includes(r),
                        onChange: function(e) {
                            ve(e.target.checked ? [].concat((0, n.Z)(fe), [r]) : fe.filter((function(e) {
                                return e !== r
                            })))
                        },
                        className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                    }), a)
                }))))))), m.createElement("div", {
                    className: "tw-".concat("gallery" === K ? "flex" : "hidden", " tw-container tw-flex-col")
                }, m.createElement("h2", {
                    className: "heading"
                }, "Image Gallery"), m.createElement("p", {
                    className: "tw-mb-0"
                }, "Showcase your avatar with up to 6 images."), m.createElement("p", null, "Recommended resolution: 1920x1080px. Maximum file size: 1MB."), T && m.createElement("p", {
                    className: "tw-rounded-lg tw-bg-[#000] tw-px-5 tw-py-4 tw-flex tw-justify-between tw-items-center"
                }, "You can drag images to reorder them", m.createElement(j.$1, {
                    icon: _.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return L(!1)
                    }
                })), !1 === q.pass && m.createElement(j.qX, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == q ? void 0 : q.message
                }), m.createElement(de, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return G(e)
                    }
                })), m.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex"
                }, m.createElement(j.zx, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        nt(), s()
                    },
                    neutral: !0
                }, "Cancel"), m.createElement(j.zx, {
                    disabled: !v && !(null == E || !E.productId),
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return je(!0)
                    },
                    danger: !0
                }, "Delete Avatar")), m.createElement(j.zx, {
                    loading: He,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return ot()
                    },
                    disabled: st
                }, "Save Changes"))))
            };
            var je = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                Ae = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                Ue = (0, l.Z)(j.JX, {
                    target: "e1blkums0"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                });
            const Te = function() {
                var e, t = (0, w.I0)(),
                    r = (0, p.UO)().avatarId,
                    l = (0, h.Tu)().user,
                    u = (0, h.pc)(),
                    x = (0, w.v9)((function(e) {
                        return e.productFlow
                    })).currentStep,
                    k = m.useState(null),
                    I = (0, o.Z)(k, 2),
                    N = I[0],
                    Z = I[1],
                    T = m.useState(!1),
                    F = (0, o.Z)(T, 2),
                    L = F[0],
                    D = F[1],
                    R = m.useState(!1),
                    q = (0, o.Z)(R, 2),
                    G = q[0],
                    M = q[1],
                    z = (0, y.LQ)({
                        avatarId: r
                    }),
                    K = z.data,
                    Y = z.isFetching,
                    V = z.isError,
                    X = z.error,
                    $ = z.refetch,
                    B = (0, O.GR)(null == K ? void 0 : K.authorId, {
                        skip: !r || !K || !(null != K && K.authorId)
                    }),
                    Q = B.data,
                    _ = B.isFetching,
                    H = B.isError,
                    J = B.error,
                    ee = (null == K ? void 0 : K.authorId) === l.id,
                    te = ee,
                    re = (0, E.iw)({
                        avatarId: r
                    }, {
                        skip: !r
                    }),
                    ne = re.data,
                    ae = (re.isFetching, re.isError),
                    oe = re.error,
                    le = S({
                        userId: null == l ? void 0 : l.id,
                        forId: r,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !l || !K || ee || "private" !== (null == K ? void 0 : K.releaseStatus)
                    }),
                    ie = le.data,
                    ce = (le.isFetching, le.isError, le.error, (0, C.Ms)({
                        listingId: null == K ? void 0 : K.productId
                    }, {
                        skip: !(null != K && K.productId) || (null == K ? void 0 : K.authorId) !== l.id
                    })),
                    se = ce.data,
                    ue = ce.isFetching,
                    de = (0, y.C0)(),
                    me = (0, o.Z)(de, 2),
                    we = me[0],
                    pe = me[1],
                    fe = pe.isFetching,
                    ve = pe.isError,
                    ge = pe.error,
                    he = (0, y.Cm)(),
                    be = (0, o.Z)(he, 2),
                    ye = be[0],
                    Ee = be[1],
                    xe = Ee.isError,
                    ke = Ee.error,
                    Ie = Ee.isSuccess,
                    Ne = (0, y.x8)(),
                    Ze = (0, o.Z)(Ne, 2),
                    Se = Ze[0],
                    Ce = Ze[1],
                    Oe = Ce.isLoading,
                    Te = Ce.isError,
                    Fe = Ce.error,
                    Le = Ce.isSuccess,
                    De = (0, y.eP)(),
                    Re = (0, o.Z)(De, 2),
                    qe = Re[0],
                    Ge = Re[1],
                    Me = Ge.isLoading,
                    ze = Ge.isError,
                    Ke = Ge.error,
                    Ye = Ge.isSuccess,
                    Ve = (0, h.Nr)(N, 1400),
                    Xe = (0, h.Tb)($e, 300),
                    $e = Y || _,
                    Be = V || H || ae || ve || Te || ze || xe,
                    We = X || J || oe || ge || Fe || Ke || ke;
                m.useEffect((function() {
                    null != K && K.id && Z(K.tags)
                }), [K]), m.useEffect((function() {
                    if (null != K && K.id && Ve) {
                        var e = new Set(K.tags);
                        Ve.length === K.tags.length && Ve.every((function(t) {
                            return e.has(t)
                        })) || ye({
                            avatarId: K.id,
                            tags: Ve
                        })
                    }
                }), [Ve]), m.useEffect((function() {
                    Le && t((0, g.d)({
                        title: "Changed Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Le]), m.useEffect((function() {
                    Ye && t((0, g.d)({
                        title: "Changed Fallback Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Ye]), m.useEffect((function() {
                    Ie && t((0, g.d)({
                        title: "Content Warnings Updated",
                        icon: s.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != K && K.name ? "avatar: ".concat(K.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [Ie]);
                var Qe, _e = m.useMemo((function() {
                        return (null != ne ? ne : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [ne]),
                    He = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, o, l, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Se({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error : null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message, t((0, g.d)({
                                            title: "Failed to change avatar!",
                                            icon: c.KC,
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
                    Je = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, o, l, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, qe({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error : null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l || null === (l = l.error) || void 0 === l ? void 0 : l.message, t((0, g.d)({
                                            title: "Failed to change fallback avatar!",
                                            icon: c.KC,
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
                    }(),
                    et = function() {
                        var e = (0, a.Z)(d().mark((function e(n) {
                            var a, o, l, c, s;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, we({
                                            avatarId: r,
                                            data: {
                                                releaseStatus: n
                                            }
                                        });
                                    case 2:
                                        (a = e.sent).error && (s = "string" == typeof(null == a || null === (o = a.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error) ? null == a || null === (l = a.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == a || null === (c = a.error) || void 0 === c || null === (c = c.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message, t((0, g.d)({
                                            title: "Failed to change avatar release status!",
                                            icon: i.nG,
                                            message: null != s ? s : "An error occurred when changing avatar release status",
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (V) return m.createElement(f.Z, null, m.createElement(j.$4, null, "Avatar"), m.createElement(j.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == X || null === (Qe = X.data) || void 0 === Qe ? void 0 : Qe.error.message) || "There was an error loading the avatar."));
                if (!K || Xe || $e) return m.createElement(f.Z, null, m.createElement(j.$4, null, "Avatar"), m.createElement(A.Z, {
                    loading: !0
                }));
                var tt, rt = "";
                Be && (rt = m.createElement(j.X2, null, m.createElement(v.Z, {
                    color: "warning"
                }, null == We || null === (tt = We.data) || void 0 === tt ? void 0 : tt.error.message)));
                var nt = function() {
                    M(!1), t((0, P.bi)())
                };
                return m.createElement(f.Z, null, m.createElement(j.$4, null, null !== (e = K.name) && void 0 !== e ? e : "Avatar"), rt, te && m.createElement(Pe, {
                    isOpen: L,
                    onCloseCallback: function() {
                        return D(!1)
                    },
                    avatarId: K.id
                }), m.createElement(b.default, {
                    avatar: K,
                    user: Q,
                    galleryImages: _e,
                    licenses: ie,
                    isAvatarSold: se,
                    isAvatarSoldFetching: ue,
                    isSelectAvatarLoading: Oe,
                    isSelectFallbackLoading: Me,
                    isUpdateAvatarFetching: fe,
                    onEdit: function() {
                        return D(!0)
                    },
                    onSelectFallback: Je,
                    onSelectAvatar: He,
                    onSetAvatarReleaseStatus: et
                }), (ee || u) && m.createElement(j.X2, {
                    className: "tw-mb-3"
                }, m.createElement(Ue, null, m.createElement(j.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), m.createElement(j.Ao, null, m.createElement(j.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, m.createElement(j.ks, {
                    tags: N,
                    isMod: u,
                    onSelectValues: function(e) {
                        Z((function(t) {
                            return (0, n.Z)(new Set([].concat((0, n.Z)(t), (0, n.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        Z((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: Ae
                }))))), (ee || u) && m.createElement(j.X2, {
                    className: "tw-mb-3"
                }, m.createElement("div", null, m.createElement(j.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), m.createElement(j.Ao, {
                    className: "tw-block"
                }, m.createElement(j.X2, {
                    className: "tw-mb-2"
                }, m.createElement(W, {
                    avatar: K,
                    refetch: $
                }))))), !1, !1, m.createElement(j.u_, {
                    title: je[x] || null,
                    isVisible: G,
                    onClose: nt,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    backgroundColor: "#181B1F"
                }, m.createElement(U.Z, {
                    onClose: nt
                })))
            }
        },
        37599: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(54546),
                a = r(45573),
                o = r(27003),
                l = r(67294),
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
                    p = e.onToggleCallback,
                    f = void 0 === p ? function() {} : p,
                    v = l.useState(t || !1),
                    g = (0, n.Z)(v, 2),
                    h = g[0],
                    b = g[1];
                l.useEffect((function() {
                    b(t)
                }), [t]);
                return l.createElement("div", null, l.createElement("h3", null, l.createElement(i.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: m,
                    onClick: function() {
                        r ? r() : (f(!h), b(!h))
                    },
                    color: h ? "primary" : "secondary"
                }, h && l.createElement(s.Z, {
                    icon: o.uM
                }), !h && l.createElement(s.Z, {
                    icon: a.Kt
                })), " ", u), l.createElement(c.Z, {
                    isOpen: h
                }, w), "sm" !== m && l.createElement("br", null))
            }
        },
        49567: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(26778),
                a = r(67294),
                o = r(45697),
                l = r.n(o),
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
                        o = r.data,
                        l = r.isFetching,
                        m = r.isSuccess,
                        w = r.isError,
                        p = r.refetch;
                    return a.createElement(i.Z, null, a.createElement("h6", {
                        className: "p-1"
                    }, a.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), m && a.createElement(u.Z, {
                        src: o
                    }), l && "Loading...", w && "Error loading ".concat(t), a.createElement("hr", null), a.createElement(c.Z, {
                        onClick: function() {
                            return p()
                        },
                        className: "text-white"
                    }, a.createElement(s.Z, {
                        icon: n.XS,
                        color: "white"
                    }), " Refresh"))
                };
            m.propTypes = {
                query: l().string.isRequired
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
                o = r.n(a),
                l = {},
                i = function(e) {
                    var t = "".concat(e.name).concat(e.lastModified);
                    return void 0 === l[t] && (l[t] = window.URL.createObjectURL(e)), l[t]
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
                    var e = (0, n.Z)(o().mark((function e(t) {
                        return o().wrap((function(e) {
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
                Gu: () => l
            });
            var n = r(61509),
                a = {};
            var o = n.S.injectEndpoints({
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
                l = (o.useAdminChangeDisplayNameMutation, o.useAdminChangeUserNameMutation, o.useJsonEndpointQuery)
        },
        67978: (e, t, r) => {
            r.d(t, {
                As: () => p,
                DM: () => f,
                RM: () => g,
                lZ: () => v,
                qX: () => h,
                rP: () => m,
                wE: () => b,
                x3: () => w,
                xq: () => y
            });
            var n = r(15861),
                a = r(42138),
                o = r(4942),
                l = r(64687),
                i = r.n(l),
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
                        (0, o.Z)(e, t, r[t])
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
                                        o = e.pageValue,
                                        l = void 0 === o ? 1 : o;
                                    return {
                                        url: "user/".concat(t, "/products"),
                                        params: u({
                                            archived: a
                                        }, (0, c.ue)({
                                            n,
                                            pageValue: l
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
                                queryFn: (o = (0, n.Z)(i().mark((function e(t, r, n, o) {
                                    var l, c, s, u, d;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                l = t.userId, c = t.archived, s = [], u = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "user/".concat(l, "/products"),
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
                                    return o.apply(this, arguments)
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
                                queryFn: (r = (0, n.Z)(i().mark((function e(t, r, a, o) {
                                    var l, c, s, d, m, w, p, f, v, g, h, b, y, E, x, k, I, N, Z, S, C, O, P, j, A;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.avatarId, s = t.description, d = void 0 === s ? "" : s, m = t.displayName, w = t.duration, p = t.durationType, f = t.file, v = void 0 === f ? null : f, g = t.generateListing, h = t.imageId, b = void 0 === h ? null : h, y = t.instant, E = t.permanent, x = t.priceTokens, k = t.productType, I = t.tag, N = void 0 === I ? "product" : I, Z = t.tags, S = void 0 === Z ? [] : Z, C = t.useForSubscriberList, O = void 0 !== C && C, null === v) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, (0, n.Z)(i().mark((function e() {
                                                    var t, r;
                                                    return i().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (t = new FormData).append("file", v), t.append("tag", N), e.next = 5, o({
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
                                                return j = (null == P || null === (l = P.data) || void 0 === l ? void 0 : l.id) || b, e.next = 14, o({
                                                    url: "products",
                                                    method: "POST",
                                                    body: u(u({
                                                        description: d,
                                                        displayName: m,
                                                        duration: w,
                                                        durationType: p,
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
                                        o = r.tag;
                                    return [].concat((0, a.Z)(e ? [{
                                        type: "Product",
                                        id: e.id
                                    }] : []), ["UserProducts", {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(o)
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
                                    var o, l, c, s, d, m, w, p, f, v, g, h, b, y, E, x, k, I;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (c = t.file, s = void 0 === c ? null : c, d = t.tag, m = void 0 === d ? "product" : d, w = t.productId, p = t.displayName, f = t.description, v = t.tags, g = void 0 === v ? null : v, h = t.imageId, b = t.groupAccess, y = t.groupAccessRemove, E = t.useForSubscriberList, x = null, null === s) {
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
                                                        displayName: p,
                                                        description: f
                                                    }, null !== g ? g : {}), {}, {
                                                        groupAccess: b,
                                                        groupAccessRemove: y,
                                                        useForSubscriberList: E,
                                                        imageId: x ? null === (o = x) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.id : h
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
                                                    }, (null === (l = x) || void 0 === l ? void 0 : l.data) && {
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
                                        o = r.ownerId,
                                        l = r.tag;
                                    return [{
                                        type: "Product",
                                        id: n
                                    }, "UserProducts", {
                                        type: "GroupRoles"
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(l)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: o
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
                        var t, r, o
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["ListingProducts", "UserProducts", "Product"]
                }),
                m = d.useGetUserProductsQuery,
                w = d.useGetAllUserProductsQuery,
                p = d.useLazyGetAllUserProductsQuery,
                f = d.useGetListingProductsQuery,
                v = d.useGetProductQuery,
                g = d.useLazyGetProductQuery,
                h = d.useCreateProductMutation,
                b = d.useUpdateProductMutation,
                y = d.useDeleteProductMutation
        }
    }
]);
//# sourceMappingURL=a2376f196317d3863ef48bf8da1233780e62d0b9b86ab881e8b5b28c611f49c6.js.map