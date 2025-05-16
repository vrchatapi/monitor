"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1388], {
        76461: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Fe
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
                h = r(17383),
                b = r(22704),
                y = r(22202),
                E = r(21538),
                x = r(41255),
                k = r(4942),
                I = r(64358);

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach((function(t) {
                        (0, k.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var S = r(61509).S.injectEndpoints({
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
                                        params: Z(Z({}, (0, I.ue)({
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
                C = S.useGetUserLicensesForContentQuery,
                O = r(16869),
                P = r(62437),
                j = r(43683),
                A = r(14411),
                U = (r(37599), r(49567), r(98185)),
                T = r(19637),
                F = r(94370),
                L = r(6811),
                D = (r(37337), r(4991)),
                R = r(35773),
                q = r(95305),
                G = r(93007),
                M = r(30381),
                z = r.n(M),
                K = r(72522);

            function Y(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return V(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return V(e, t)
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

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var X = "standard",
                W = "impostor",
                $ = m.createElement(A.$1, {
                    color: "#54b5c5",
                    icon: L.f8
                }),
                B = {
                    estimatedServiceDurationSeconds: 14400
                };
            const Q = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return m.createElement("div", null, "We don't seem to have that avatar.");
                var l, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = Y(n.unityPackages);
                try {
                    for (d.s(); !(l = d.n()).done;) {
                        var w = l.value,
                            p = w.platform,
                            v = w.variant,
                            g = w.assetUrl,
                            b = w.unitySortNumber;
                        p in u || (u[p] = {}), "impostor" === v && i++, b >= 2017e7 && "standalonewindows" === p && (c = !0, (null == s || b > s.unitySortNumber) && (s = {
                            fileId: (0, I.oQ)(g),
                            versionNumber: parseInt((0, I.Rz)(g)),
                            unitySortNumber: b
                        })), u[p][null != v ? v : X] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var y = (0, E.X8)(),
                    k = (0, o.Z)(y, 2),
                    N = k[0],
                    Z = k[1],
                    S = Z.isLoading,
                    C = Z.isError,
                    O = Z.error,
                    P = (Z.isSuccess, (0, E.EA)()),
                    j = (0, o.Z)(P, 2),
                    U = j[0],
                    T = j[1],
                    L = T.isLoading,
                    M = T.isError,
                    V = T.error,
                    Q = T.isSuccess,
                    _ = T.reset,
                    H = (0, x.Ko)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
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
                var se = (0, E.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, E.ve)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : B,
                    me = i > 0,
                    we = i === K.IM.length,
                    pe = n.lastImpostorizationRequest,
                    fe = null != pe && z()(pe).add(144e5).isAfter(z()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (fe) {
                        var ve, ge, he = null == J || null === (ve = J.versions) || void 0 === ve || null === (ve = ve[s.versionNumber]) || void 0 === ve || null === (ve = ve.file) || void 0 === ve ? void 0 : ve.impostorStatus;
                        if (null != he && null != he.date && z()(he.date).isAfter(pe))
                            if (!he.isSuccess) ce(null !== (ge = he.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else Q ? (_(), ae(!0)) : !fe || we || ie || ae(!0);
                var be = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = V.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = m.createElement("code", null, V.data.error.message)), r
                };
                return m.createElement(f.Z, null, m.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && m.createElement(A.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, m.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", z().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), m.createElement(D.Z, {
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
                }, "Impostor"))), m.createElement("tbody", null, K.IM.map((function(e) {
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
                    }, (null === (t = K.VT[e]) || void 0 === t ? void 0 : t.label) || e), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, X in r && $), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, W in r && $))
                })))), ie && m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement(A.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, m.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), m.createElement("p", null, m.createElement("pre", null, ie)), m.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), m.createElement("p", null, m.createElement("pre", null, ye)))), m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement(A.zx, {
                    className: "mb-2",
                    onClick: function() {
                        U({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !be,
                    loading: L || ne
                }, m.createElement(A.$1, {
                    width: 20,
                    icon: G.Z
                }), " ", function() {
                    var e;
                    if (L) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != pe) {
                            var t = z()(),
                                r = z()(pe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = z().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), m.createElement(q.Z, null, m.createElement(A.zx, {
                    className: "mb-2",
                    onClick: function() {
                        N({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: S,
                    disabled: !me
                }, m.createElement(A.$1, {
                    width: 20,
                    icon: F.nY
                }), " Delete Impostors"))), C && m.createElement(A.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", m.createElement("br", null), Ee(O)), M && m.createElement(A.qX, {
                    type: "error"
                }, "Couldn't request impostors.", m.createElement("br", null), Ee(V)))
            };
            r(9669);
            var _ = r(45987),
                H = r(87709),
                J = r(41145),
                ee = r(62228),
                te = r(59545),
                re = r(40098),
                ne = r(89740),
                ae = r(76553),
                oe = r(92332),
                le = r(12690),
                ie = r(42619),
                ce = r(78076),
                se = r(86646);
            const ue = function(e) {
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
                    E = b[1],
                    k = null === s ? "" : (0, I.S6)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    N = (0, x.Yh)(),
                    Z = (0, o.Z)(N, 2),
                    S = Z[0],
                    C = Z[1].isLoading,
                    O = (0, x.g3)(),
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
                                        return e.next = 5, (0, I.o1)({
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
                                        E(""), e.next = 19;
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
                }, m.createElement(se.Z, {
                    icon: oe.LM,
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
                }, m.createElement(se.Z, {
                    icon: re.r8,
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
                        backgroundImage: "url(".concat(k, ")")
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
                }, m.createElement(se.Z, {
                    icon: ie.$,
                    width: 16
                })))
            };
            var de = r(50048);
            const me = function(e) {
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
                    E = (0, m.useState)(""),
                    k = (0, o.Z)(E, 2),
                    N = k[0],
                    Z = k[1],
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
                    K = (0, x.Yh)(),
                    Y = (0, o.Z)(K, 2),
                    V = Y[0],
                    X = Y[1].isLoading,
                    W = (0, x.g3)(),
                    $ = (0, o.Z)(W, 2),
                    B = $[0],
                    Q = $[1].isLoading,
                    _ = (0, x.e4)(),
                    H = (0, o.Z)(_, 2),
                    J = H[0],
                    ee = H[1],
                    te = ee.isLoading,
                    re = ee.error,
                    ne = (0, x.iw)({
                        avatarId: h
                    }, {
                        skip: !h
                    }),
                    ae = ne.data;
                ne.refetch;
                (0, m.useEffect)((function() {
                    if (ae) {
                        var e = (0, n.Z)(ae).sort((function(e, t) {
                            return e.order - t.order
                        }));
                        P(e)
                    }
                }), [ae]);
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
                                        return e.next = 5, (0, I.o1)({
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
                                        return r = t.fileId, e.prev = 1, e.next = 4, B({
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
                    }, m.createElement(se.Z, {
                        icon: ce.Vm,
                        color: "#404C58",
                        width: 96
                    }), m.createElement(de.ZP, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return y.current.click()
                        }
                    }, m.createElement(se.Z, {
                        icon: ce.Vm
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
                        t = (0, I.S6)({
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
                    }, m.createElement(se.Z, {
                        icon: oe.LM,
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
                    }, m.createElement(se.Z, {
                        icon: ie.$,
                        width: 16
                    })), m.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, m.createElement(se.Z, {
                        icon: le.xV,
                        width: 16
                    }), " Cover Image"))
                }(), he && m.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, m.createElement(se.Z, {
                    icon: oe.LM,
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
                    }, m.createElement(ue, {
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
            var we = r(72998),
                pe = r(22497),
                fe = r(60933),
                ve = r(73423),
                ge = r(39191);

            function he(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(r), !0).forEach((function(t) {
                        (0, k.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ye = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    l = void 0 === n ? null : n,
                    i = m.useState(null),
                    c = (0, o.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    p = (0, x.Yh)(),
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
                            icon: ce.Vm,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    E = function() {
                        var e = (0, a.Z)(d().mark((function e(r) {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, fe.DS)({
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
                                        u(m.createElement(ge.Z, {
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
                                        return r = t.file, e.next = 3, (0, fe.uG)(r);
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
                                        return n = t.image, a = t.mask, void 0 === a ? "square" : a, e.prev = 1, e.next = 4, v(be({
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
                                            icon: ae.eH,
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
                }, h && m.createElement(ve.Z, {
                    name: "image"
                }), !h && (s || m.createElement(pe.Z, {
                    fileSelectedCallback: function(e) {
                        return E(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB, larger than 64x64 pixels, and smaller than 2048x2048 pixels."
                })))
            };
            var Ee = r(3620),
                xe = r(45697),
                ke = r.n(xe),
                Ie = function(e) {
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
                    }, "Delete Avatar"), m.createElement(de.ZP, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: a
                    }, m.createElement(se.Z, {
                        icon: H.faXmark
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
                    }, m.createElement(de.ZP, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return n(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), m.createElement(de.ZP, {
                        neutral: !0,
                        className: "tw-mt-3 tw-w-full sm:tw-mt-0 tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 sm:tw-text-sm",
                        onClick: a,
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Cancel"))))) : null
                };
            Ie.propTypes = {
                avatarId: ke().string.isRequired,
                isOpen: ke().bool.isRequired,
                confirmCallback: ke().func.isRequired,
                cancelCallback: ke().func.isRequired
            };
            const Ne = Ie;
            var Ze = ["thumbnailImageUrl", "acknowledgements"];

            function Se(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(r), !0).forEach((function(t) {
                        (0, k.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Oe = new RegExp("^".concat(Ee.i.AUTHOR)),
                Pe = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const je = function(e) {
                var t, r, l, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, p.s0)(),
                    f = (0, w.I0)(),
                    v = (0, h.pc)(),
                    b = (0, E.LQ)({
                        avatarId: c
                    }),
                    y = b.data,
                    x = (b.isFetching, b.isError, b.error, b.refetch, (0, E.CO)()),
                    k = x.data,
                    N = void 0 === k ? [] : k,
                    Z = (x.isFetching, x.isError, x.error, (0, m.useMemo)((function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == y || null === (e = y.tags) || void 0 === e || e.forEach((function(e) {
                            e.startsWith(Ee.i.AUTHOR) ? t.push(e) : e.startsWith(Ee.i.CONTENT_WARNING) ? r.push(e) : n.push(e)
                        })), {
                            authorTags: t,
                            contentTags: r,
                            privateTags: n
                        }
                    }), [null == y ? void 0 : y.tags])),
                    S = Z.authorTags,
                    C = Z.contentTags,
                    O = Z.privateTags,
                    P = (l = y, Object.keys(l).filter((function(e) {
                        return Pe.includes(e)
                    })).reduce((function(e, t) {
                        return e[t] = l[t], e
                    }), {})),
                    j = (0, m.useState)(!0),
                    U = (0, o.Z)(j, 2),
                    T = U[0],
                    F = U[1],
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
                    W = X[0],
                    $ = X[1],
                    B = (0, m.useState)(),
                    Q = (0, o.Z)(B, 2),
                    oe = Q[0],
                    le = Q[1],
                    ie = (0, m.useState)(),
                    ce = (0, o.Z)(ie, 2),
                    se = ce[0],
                    ue = ce[1],
                    de = (0, m.useState)(C),
                    pe = (0, o.Z)(de, 2),
                    fe = pe[0],
                    ve = pe[1],
                    ge = (0, m.useState)(S),
                    he = (0, o.Z)(ge, 2),
                    be = he[0],
                    xe = he[1],
                    ke = (0, m.useState)(!1),
                    Ie = (0, o.Z)(ke, 2),
                    Se = Ie[0],
                    je = Ie[1],
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
                    We = Ve[1],
                    $e = (0, m.useRef)(null),
                    Be = (0, E.C0)(),
                    Qe = (0, o.Z)(Be, 2),
                    _e = Qe[0],
                    He = Qe[1].isLoading,
                    Je = (0, E.GG)(),
                    et = (0, o.Z)(Je, 1)[0],
                    tt = (0, m.useMemo)((function() {
                        var e;
                        return Re && !Te && (null == W || null === (e = W.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }), [Re, Te, W.acknowledgements]),
                    rt = function() {
                        var e, t;
                        le(at(null == y || null === (e = y.styles) || void 0 === e ? void 0 : e.primary)), ue(at(null == y || null === (t = y.styles) || void 0 === t ? void 0 : t.secondary))
                    },
                    nt = function() {
                        $(P), rt()
                    },
                    at = function(e) {
                        var t;
                        return (null === (t = N.find((function(t) {
                            var r;
                            return (null == t || null === (r = t.styleName) || void 0 === r ? void 0 : r.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                        }))) || void 0 === t ? void 0 : t.id) || null
                    };
                (0, m.useEffect)(rt, [y, N]);
                var ot = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var t, r, a, o, l;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.Z)(O), (0, n.Z)(be), (0, n.Z)(fe)), W.thumbnailImageUrl, r = W.acknowledgements, a = (0, _.Z)(W, Ze), e.prev = 2, e.next = 5, _e({
                                            avatarId: c,
                                            data: Ce(Ce({}, a), {}, {
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
                                            icon: L.f8,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), console.error("Error updating avatar:", e.t0), f((0, g.d)({
                                            title: "Failed to update avatar",
                                            icon: ae.eH,
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
                                            icon: ae.eH,
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
                return m.createElement(A.u_, {
                    title: "Edit Avatar",
                    onClose: function() {
                        nt(), F(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    className: "tw-p-5 tw-bg-black"
                }, m.createElement(Ne, {
                    avatarId: c,
                    isOpen: Se,
                    cancelCallback: function() {
                        return je(!1)
                    },
                    confirmCallback: function() {
                        return lt(y.id)
                    }
                }), m.createElement(A.u_, {
                    isVisible: ze,
                    className: "tw-pt-0",
                    onClose: function() {
                        return Ke(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: m.createElement(ye, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return Ke(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        n = (0, I.d3)({
                                            fileUrl: r
                                        }),
                                        a = n.fileId,
                                        o = n.fileVersion,
                                        l = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(a, "/").concat(o, "/256");
                                    $(Ce(Ce({}, W), {}, {
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
                }, m.createElement(we.Z, {
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
                        backgroundImage: "url(".concat((null == W ? void 0 : W.thumbnailImageUrl) || (null == W ? void 0 : W.imageUrl), ")")
                    }
                })), m.createElement("div", {
                    className: "tw-flex-grow"
                }, m.createElement("div", {
                    className: "tw-mb-3"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), m.createElement(A.II, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: W.name,
                    onChange: function(e) {
                        return $(Ce(Ce({}, W), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 128,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = W.name.length) && void 0 !== t ? t : 0, "/128")), m.createElement("div", {
                    className: "tw-mb-0"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), m.createElement(A.gx, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: W.description,
                    onChange: function(e) {
                        return $(Ce(Ce({}, W), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 1024,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = W.description.length) && void 0 !== r ? r : 0, "/1024")))), m.createElement("div", {
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
                }, m.createElement(A.zx, {
                    className: "tw-w-full",
                    title: "Swap primary and secondary styles",
                    disabled: !oe && !se,
                    onClick: function() {
                        var e = oe || "";
                        le(se || ""), ue(e)
                    }
                }, m.createElement(A.$1, {
                    icon: ne.faRightLeft
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
                }, m.createElement(A.II, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            var t = "".concat(Ee.i.AUTHOR).concat(e.target.value);
                            if (be.find((function(e) {
                                    return e === t
                                })) || 0 === Xe.trim().length) return;
                            xe([].concat((0, n.Z)(be), [t])), We("")
                        }
                    },
                    value: Xe,
                    ref: $e,
                    onChange: function(e) {
                        return We(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: S.length >= 10
                }), m.createElement(A.zx, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        $e.current.focus();
                        var e = "".concat(Ee.i.AUTHOR).concat($e.current.value);
                        be.find((function(t) {
                            return t === e
                        })) || (xe([].concat((0, n.Z)(be), [e])), We(""))
                    },
                    disabled: S.length >= 10 || 0 === Xe.trim().length
                }, m.createElement(A.$1, {
                    icon: re.r8
                }))), m.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, be.map((function(e) {
                    return m.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, m.createElement("span", null, e.replace(Oe, "")), m.createElement(A.$1, {
                        icon: te.NB,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return xe(be.filter((function(t) {
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
                }, "please acknowledge them here ", m.createElement(A.$1, {
                    icon: Re ? ee.mT : J.pt
                }))), m.createElement(A.gx, {
                    className: "tw-".concat(Re ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == W ? void 0 : W.acknowledgements,
                    onChange: function(e) {
                        $(Ce(Ce({}, W), {}, {
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
                }, Object.entries(Ee.N).map((function(e) {
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
                }, "You can drag images to reorder them", m.createElement(A.$1, {
                    icon: H.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return F(!1)
                    }
                })), !1 === q.pass && m.createElement(A.qX, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == q ? void 0 : q.message
                }), m.createElement(me, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return G(e)
                    }
                })), m.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex"
                }, m.createElement(A.zx, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        nt(), s()
                    },
                    neutral: !0
                }, "Cancel"), m.createElement(A.zx, {
                    disabled: !v && !(null == y || !y.productId),
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return je(!0)
                    },
                    danger: !0
                }, "Delete Avatar")), m.createElement(A.zx, {
                    loading: He,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return ot()
                    },
                    disabled: st
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
                Te = (0, l.Z)(A.JX, {
                    target: "e1blkums0"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                });
            const Fe = function() {
                var e, t = (0, w.I0)(),
                    r = (0, p.UO)().avatarId,
                    l = (0, h.Tu)().user,
                    u = (0, h.pc)(),
                    k = (0, w.v9)((function(e) {
                        return e.productFlow
                    })).currentStep,
                    I = m.useState(null),
                    N = (0, o.Z)(I, 2),
                    Z = N[0],
                    S = N[1],
                    F = m.useState(!1),
                    L = (0, o.Z)(F, 2),
                    D = L[0],
                    R = L[1],
                    q = m.useState(!1),
                    G = (0, o.Z)(q, 2),
                    M = G[0],
                    z = G[1],
                    K = (0, E.LQ)({
                        avatarId: r
                    }),
                    Y = K.data,
                    V = K.isFetching,
                    X = K.isError,
                    W = K.error,
                    $ = K.refetch,
                    B = (0, P.GR)(null == Y ? void 0 : Y.authorId, {
                        skip: !r || !Y || !(null != Y && Y.authorId)
                    }),
                    _ = B.data,
                    H = B.isFetching,
                    J = B.isError,
                    ee = B.error,
                    te = (0, y.q7)({
                        skip: !l
                    }),
                    re = te.data,
                    ne = te.isLoading,
                    ae = te.isSuccess,
                    oe = (null == Y ? void 0 : Y.authorId) === l.id,
                    le = oe,
                    ie = (0, x.iw)({
                        avatarId: r
                    }, {
                        skip: !r
                    }),
                    ce = ie.data,
                    se = (ie.isFetching, ie.isError),
                    ue = ie.error,
                    de = C({
                        userId: null == l ? void 0 : l.id,
                        forId: r,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !l || !Y || oe || "private" !== (null == Y ? void 0 : Y.releaseStatus)
                    }),
                    me = de.data,
                    we = (de.isFetching, de.isError, de.error, (0, O.Ms)({
                        listingId: null == Y ? void 0 : Y.productId
                    }, {
                        skip: !(null != Y && Y.productId) || (null == Y ? void 0 : Y.authorId) !== l.id
                    })),
                    pe = we.data,
                    fe = we.isFetching,
                    ve = (0, E.C0)(),
                    ge = (0, o.Z)(ve, 2),
                    he = ge[0],
                    be = ge[1],
                    ye = be.isFetching,
                    Ee = be.isError,
                    xe = be.error,
                    ke = (0, E.Cm)(),
                    Ie = (0, o.Z)(ke, 2),
                    Ne = Ie[0],
                    Ze = Ie[1],
                    Se = Ze.isError,
                    Ce = Ze.error,
                    Oe = Ze.isSuccess,
                    Pe = (0, E.x8)(),
                    Fe = (0, o.Z)(Pe, 2),
                    Le = Fe[0],
                    De = Fe[1],
                    Re = De.isLoading,
                    qe = De.isError,
                    Ge = De.error,
                    Me = De.isSuccess,
                    ze = (0, E.eP)(),
                    Ke = (0, o.Z)(ze, 2),
                    Ye = Ke[0],
                    Ve = Ke[1],
                    Xe = Ve.isLoading,
                    We = Ve.isError,
                    $e = Ve.error,
                    Be = Ve.isSuccess,
                    Qe = (0, h.Nr)(Z, 1400),
                    _e = (0, h.Tb)(He, 300),
                    He = V || H,
                    Je = X || J || se || Ee || qe || We || Se,
                    et = W || ee || ue || xe || Ge || $e || Ce,
                    tt = (0, m.useMemo)((function() {
                        return !(ne || !ae) && (null == re ? void 0 : re.includes("permission-sell-avatar-products"))
                    }), [ne]);
                m.useEffect((function() {
                    null != Y && Y.id && S(Y.tags)
                }), [Y]), m.useEffect((function() {
                    if (null != Y && Y.id && Qe) {
                        var e = new Set(Y.tags);
                        Qe.length === Y.tags.length && Qe.every((function(t) {
                            return e.has(t)
                        })) || Ne({
                            avatarId: Y.id,
                            tags: Qe
                        })
                    }
                }), [Qe]), m.useEffect((function() {
                    Me && t((0, g.d)({
                        title: "Changed Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Me]), m.useEffect((function() {
                    Be && t((0, g.d)({
                        title: "Changed Fallback Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Be]), m.useEffect((function() {
                    Oe && t((0, g.d)({
                        title: "Content Warnings Updated",
                        icon: s.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != Y && Y.name ? "avatar: ".concat(Y.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [Oe]);
                var rt, nt = m.useMemo((function() {
                        return (null != ce ? ce : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [ce]),
                    at = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, o, l, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Le({
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
                    ot = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, o, l, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ye({
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
                    lt = function() {
                        var e = (0, a.Z)(d().mark((function e(n) {
                            var a, o, l, c, s;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, he({
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
                if (X) return m.createElement(f.Z, null, m.createElement(A.$4, null, "Avatar"), m.createElement(A.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == W || null === (rt = W.data) || void 0 === rt ? void 0 : rt.error.message) || "There was an error loading the avatar."));
                if (!Y || _e || He) return m.createElement(f.Z, null, m.createElement(A.$4, null, "Avatar"), m.createElement(U.Z, {
                    loading: !0
                }));
                var it, ct = "";
                Je && (ct = m.createElement(A.X2, null, m.createElement(v.Z, {
                    color: "warning"
                }, null == et || null === (it = et.data) || void 0 === it ? void 0 : it.error.message)));
                var st = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, j.IR)(Y));
                                    case 2:
                                        return e.next = 4, t((0, j.WB)("avatar"));
                                    case 4:
                                        return e.next = 6, t((0, j.Bq)("productDetails"));
                                    case 6:
                                        return e.next = 8, t((0, j.SH)(!0));
                                    case 8:
                                        z(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ut = function() {
                        z(!1), t((0, j.bi)())
                    };
                return m.createElement(f.Z, null, m.createElement(A.$4, null, null !== (e = Y.name) && void 0 !== e ? e : "Avatar"), ct, le && m.createElement(je, {
                    isOpen: D,
                    onCloseCallback: function() {
                        return R(!1)
                    },
                    avatarId: Y.id
                }), m.createElement(b.default, {
                    avatar: Y,
                    user: _,
                    galleryImages: nt,
                    licenses: me,
                    isAvatarSold: pe,
                    isAvatarSoldFetching: fe,
                    isSelectAvatarLoading: Re,
                    isSelectFallbackLoading: Xe,
                    isUpdateAvatarFetching: ye,
                    hasAvatarSellerPermission: tt,
                    onEdit: function() {
                        return R(!0)
                    },
                    onSelectFallback: ot,
                    onSelectAvatar: at,
                    onSellAvatar: st,
                    onSetAvatarReleaseStatus: lt
                }), (oe || u) && m.createElement(A.X2, {
                    className: "tw-mb-3"
                }, m.createElement(Te, null, m.createElement(A.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), m.createElement(A.Ao, null, m.createElement(A.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, m.createElement(A.ks, {
                    tags: Z,
                    isMod: u,
                    onSelectValues: function(e) {
                        S((function(t) {
                            return (0, n.Z)(new Set([].concat((0, n.Z)(t), (0, n.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        S((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: Ue
                }))))), (oe || u) && m.createElement(A.X2, {
                    className: "tw-mb-3"
                }, m.createElement("div", null, m.createElement(A.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), m.createElement(A.Ao, {
                    className: "tw-block"
                }, m.createElement(A.X2, {
                    className: "tw-mb-2"
                }, m.createElement(Q, {
                    avatar: Y,
                    refetch: $
                }))))), !1, !1, m.createElement(A.u_, {
                    title: Ae[k] || null,
                    isVisible: M,
                    onClose: ut,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, m.createElement(T.Z, {
                    onClose: ut
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
//# sourceMappingURL=e9e627c47617154515bb07cbed982f9ca6ee45b4e4f53a384fd78b4ce4ec9992.js.map