"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6461], {
        76461: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => Le
            });
            var n = r(42138),
                a = r(15861),
                l = r(54546),
                o = r(4965),
                i = r(13226),
                c = r(66007),
                s = r(3820),
                u = r(64687),
                d = r.n(u),
                m = r(67294),
                w = r(32981),
                f = r(89250),
                v = r(53637),
                p = r(23138),
                g = r(64258),
                h = r(69116),
                b = r(29336),
                y = r(22202),
                E = r(21538),
                x = r(41255),
                k = r(4942),
                N = r(64358);

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

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        (0, k.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
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
                                        params: Z(Z({}, (0, N.ue)({
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
                S = C.useGetUserLicensesForContentQuery,
                O = r(16869),
                j = r(62437),
                A = r(43683),
                U = r(80988),
                F = (r(37599), r(49567), r(98185)),
                D = r(19637),
                T = r(94370),
                L = r(6811),
                P = (r(37337), r(4991)),
                R = r(35773),
                q = r(95305),
                z = r(93007),
                G = r(30381),
                M = r.n(G),
                Y = r(72522);

            function K(e, t) {
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

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var X = "standard",
                _ = "impostor",
                W = m.createElement(U.$1, {
                    color: "#54b5c5",
                    icon: L.f8
                }),
                $ = {
                    estimatedServiceDurationSeconds: 14400
                };
            const B = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return m.createElement("div", null, "We don't seem to have that avatar.");
                var o, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = K(n.unityPackages);
                try {
                    for (d.s(); !(o = d.n()).done;) {
                        var w = o.value,
                            f = w.platform,
                            p = w.variant,
                            g = w.assetUrl,
                            b = w.unitySortNumber;
                        f in u || (u[f] = {}), "impostor" === p && i++, b >= 2017e7 && "standalonewindows" === f && (c = !0, (null == s || b > s.unitySortNumber) && (s = {
                            fileId: (0, N.oQ)(g),
                            versionNumber: parseInt((0, N.Rz)(g)),
                            unitySortNumber: b
                        })), u[f][null != p ? p : X] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var y = (0, E.X8)(),
                    k = (0, l.Z)(y, 2),
                    I = k[0],
                    Z = k[1],
                    C = Z.isLoading,
                    S = Z.isError,
                    O = Z.error,
                    j = (Z.isSuccess, (0, E.EA)()),
                    A = (0, l.Z)(j, 2),
                    F = A[0],
                    D = A[1],
                    L = D.isLoading,
                    G = D.isError,
                    V = D.error,
                    B = D.isSuccess,
                    H = D.reset,
                    Q = (0, x.Ko)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    J = Q.data,
                    ee = Q.refetch,
                    te = (0, m.useState)(!1),
                    re = (0, l.Z)(te, 2),
                    ne = re[0],
                    ae = re[1],
                    le = (0, m.useState)(null),
                    oe = (0, l.Z)(le, 2),
                    ie = oe[0],
                    ce = oe[1];
                (0, h.Yz)(a, ne ? 1e4 : null), (0, h.Yz)(ee, ne ? 5e3 : null);
                var se = (0, E.ve)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, E.ve)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : $,
                    me = i > 0,
                    we = i === Y.IM.length,
                    fe = n.lastImpostorizationRequest,
                    ve = null != fe && M()(fe).add(144e5).isAfter(M()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (ve) {
                        var pe, ge, he = null == J || null === (pe = J.versions) || void 0 === pe || null === (pe = pe[s.versionNumber]) || void 0 === pe || null === (pe = pe.file) || void 0 === pe ? void 0 : pe.impostorStatus;
                        if (null != he && null != he.date && M()(he.date).isAfter(fe))
                            if (!he.isSuccess) ce(null !== (ge = he.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else B ? (H(), ae(!0)) : !ve || we || ie || ae(!0);
                var be = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = V.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = m.createElement("code", null, V.data.error.message)), r
                };
                return m.createElement(v.Z, null, m.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && m.createElement(U.qX, {
                    type: "info",
                    title: "Whoa there!"
                }, m.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", M().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), m.createElement(P.Z, {
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
                }, "Impostor"))), m.createElement("tbody", null, Y.IM.map((function(e) {
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
                    }, (null === (t = Y.VT[e]) || void 0 === t ? void 0 : t.label) || e), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, X in r && W), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, _ in r && W))
                })))), ie && m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement(U.qX, {
                    type: "warn",
                    title: "Impostorization failed"
                }, m.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), m.createElement("p", null, m.createElement("pre", null, ie)), m.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), m.createElement("p", null, m.createElement("pre", null, ye)))), m.createElement(R.Z, null, m.createElement(q.Z, null, m.createElement(U.zx, {
                    className: "mb-2",
                    onClick: function() {
                        F({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !be,
                    loading: L || ne
                }, m.createElement(U.$1, {
                    width: 20,
                    icon: z.default
                }), " ", function() {
                    var e;
                    if (L) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != fe) {
                            var t = M()(),
                                r = M()(fe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = M().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), m.createElement(q.Z, null, m.createElement(U.zx, {
                    className: "mb-2",
                    onClick: function() {
                        I({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: C,
                    disabled: !me
                }, m.createElement(U.$1, {
                    width: 20,
                    icon: T.nY
                }), " Delete Impostors"))), S && m.createElement(U.qX, {
                    type: "error"
                }, "Welp, failed to delete impostors.", m.createElement("br", null), Ee(O)), G && m.createElement(U.qX, {
                    type: "error"
                }, "Couldn't request impostors.", m.createElement("br", null), Ee(V)))
            };
            r(9669);
            var H = r(45987),
                Q = r(87709),
                J = r(41145),
                ee = r(62228),
                te = r(59545),
                re = r(40098),
                ne = r(89740),
                ae = r(76553),
                le = r(92332),
                oe = r(12690),
                ie = r(42619),
                ce = r(78076),
                se = r(86646);
            const ue = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    n = e.maxFileSizeMegaBytes,
                    o = e.galleryId,
                    i = e.file,
                    s = void 0 === i ? null : i,
                    u = e.validationCallback,
                    f = void 0 === u ? function() {} : u,
                    v = (0, w.I0)(),
                    p = (0, m.useRef)(null),
                    h = (0, m.useState)(""),
                    b = (0, l.Z)(h, 2),
                    y = b[0],
                    E = b[1],
                    k = null === s ? "" : (0, N.S6)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    I = (0, x.Yh)(),
                    Z = (0, l.Z)(I, 2),
                    C = Z[0],
                    S = Z[1].isLoading,
                    O = (0, x.g3)(),
                    j = (0, l.Z)(O, 2),
                    A = j[0],
                    U = j[1].isLoading,
                    F = function() {
                        var e = (0, a.Z)(d().mark((function e(a) {
                            var l, i, s, u, m;
                            return d().wrap((function(e) {
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
                                            maxImageDimension: Number.POSITIVE_INFINITY
                                        });
                                    case 5:
                                        if (s = e.sent, f(s), s.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.next = 11, (0, N.Tu)(i, r);
                                    case 11:
                                        return u = e.sent, e.prev = 12, e.next = 15, C({
                                            tag: "avatargallery",
                                            file: u,
                                            galleryId: o
                                        }).unwrap();
                                    case 15:
                                        E(""), e.next = 22;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), v((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (m = e.t0.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [12, 18]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    D = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, A({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), v((0, g.d)({
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
                return S || U ? m.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, m.createElement(se.Z, {
                    icon: le.LM,
                    spin: !0,
                    color: "#404C58",
                    width: "32"
                })) : null === s ? m.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-pointer",
                    onClick: function() {
                        return p.current.click()
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key && " " !== e.key || p.current.click()
                    }
                }, m.createElement(se.Z, {
                    icon: re.r8,
                    color: "#404C58",
                    width: 32
                }), m.createElement("input", {
                    className: "tw-hidden",
                    type: "file",
                    accept: ".jpg, .jpeg, .png",
                    ref: p,
                    value: y,
                    onChange: function(e) {
                        F(e)
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
                        return D({
                            fileId: s.id
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" !== e.key && " " !== e.key || D({
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
                    o = void 0 === r ? 100 : r,
                    i = e.maxImageDimension,
                    s = void 0 === i ? 2048 : i,
                    u = e.maxFileSizeMegaBytes,
                    f = void 0 === u ? 10 : u,
                    v = e.validationCallback,
                    p = void 0 === v ? function() {} : v,
                    h = e.galleryId,
                    b = (0, w.I0)(),
                    y = (0, m.useRef)(null),
                    E = (0, m.useState)(""),
                    k = (0, l.Z)(E, 2),
                    I = k[0],
                    Z = k[1],
                    C = (0, m.useState)([]),
                    S = (0, l.Z)(C, 2),
                    O = S[0],
                    j = S[1],
                    A = (0, m.useState)(!1),
                    U = (0, l.Z)(A, 2),
                    F = U[0],
                    D = U[1],
                    T = (0, m.useState)(!0),
                    L = (0, l.Z)(T, 2),
                    P = L[0],
                    R = L[1],
                    q = (0, m.useState)(null),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    M = z[1],
                    Y = (0, x.Yh)(),
                    K = (0, l.Z)(Y, 2),
                    V = K[0],
                    X = K[1].isLoading,
                    _ = (0, x.g3)(),
                    W = (0, l.Z)(_, 2),
                    $ = W[0],
                    B = W[1].isLoading,
                    H = (0, x.e4)(),
                    Q = (0, l.Z)(H, 2),
                    J = Q[0],
                    ee = Q[1],
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
                        j(e)
                    }
                }), [ae]);
                var me = function(e, t) {
                        null !== t && (M(e), D(!0))
                    },
                    we = function(e) {
                        e.preventDefault()
                    },
                    fe = function() {
                        var e = (0, a.Z)(d().mark((function e(t, r) {
                            var a, o, i, s, u, m;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== G && G !== t && null !== r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return a = (0, n.Z)(O), o = a.splice(G, 1), i = (0, l.Z)(o, 1), s = i[0], a.splice(t, 0, s), j(a), M(null), D(!1), u = a.map((function(e) {
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
                    ve = (null == O ? void 0 : O.length) > 0,
                    pe = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n, a, l, i;
                            return d().wrap((function(e) {
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
                                            maxFileSizeMegaBytes: f,
                                            minImageDimension: o,
                                            maxImageDimension: Number.POSITIVE_INFINITY
                                        });
                                    case 5:
                                        if (a = e.sent, p(a), a.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.next = 11, (0, N.Tu)(n, s);
                                    case 11:
                                        return l = e.sent, e.prev = 12, e.next = 15, V({
                                            tag: "avatargallery",
                                            file: l,
                                            galleryId: h
                                        }).unwrap();
                                    case 15:
                                        Z(""), e.next = 22;
                                        break;
                                    case 18:
                                        return e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), e.abrupt("return", b((0, g.d)({
                                            title: "Avatar Gallery",
                                            icon: c.KC,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [12, 18]
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
                                        return r = t.fileId, e.prev = 1, e.next = 4, $({
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
                    he = B || X || te;
                return m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !he && function() {
                    if (!ve) return m.createElement("div", {
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
                        value: I,
                        onChange: function(e) {
                            pe(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = O[0] || null,
                        t = (0, N.S6)({
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
                            return fe(0, e)
                        },
                        style: {
                            transition: F ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: 0 === G ? .3 : 1,
                            transform: 0 === G ? "scale(0.95)" : "scale(1)"
                        }
                    }, m.createElement("div", {
                        className: "tw-relative"
                    }, P && m.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, m.createElement(se.Z, {
                        icon: le.LM,
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
                            display: P ? "none" : "block"
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
                        icon: oe.xV,
                        width: 16
                    }), " Cover Image"))
                }(), he && m.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, m.createElement(se.Z, {
                    icon: le.LM,
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
                            return fe(t + 1, e)
                        },
                        style: {
                            transition: F ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: G === t + 1 ? .3 : 1,
                            transform: G === t + 1 ? "scale(0.95)" : "scale(1)"
                        }
                    }, m.createElement(ue, {
                        file: e,
                        galleryId: h,
                        minImageDimension: o,
                        maxImageDimension: s,
                        maxFileSizeMegaBytes: f,
                        validationCallback: function(e) {
                            return p(e)
                        }
                    }))
                }))))
            };
            var we = r(72998),
                fe = r(90068),
                ve = r(22497),
                pe = r(60933),
                ge = r(73423),
                he = r(39191);

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

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(r), !0).forEach((function(t) {
                        (0, k.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Ee = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    o = void 0 === n ? null : n,
                    i = m.useState(null),
                    c = (0, l.Z)(i, 2),
                    s = c[0],
                    u = c[1],
                    f = (0, x.Yh)(),
                    v = (0, l.Z)(f, 2),
                    p = v[0],
                    h = v[1].isLoading,
                    b = (0, w.I0)(),
                    y = (0, fe.P2)(),
                    E = function(e) {
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
                    k = function() {
                        var e = (0, a.Z)(d().mark((function e(r) {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, pe._0)({
                                                file: n,
                                                includeGif: !1
                                            })) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", E({
                                            title: "Image Error",
                                            message: "Please select an allowed image type!",
                                            color: "danger"
                                        }));
                                    case 4:
                                        return e.next = 6, N({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        u(m.createElement(he.Z, {
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
                    N = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, pe.uG)(r);
                                    case 3:
                                        if (n = e.sent, !(n.width < 64 || n.height < 64)) {
                                            e.next = 8;
                                            break
                                        }
                                        return E({
                                            title: "Image Uploader",
                                            message: "The image you are uploading is rather small.\nKeep it above 64x64.",
                                            color: "danger"
                                        }), e.abrupt("return", !1);
                                    case 8:
                                        return e.abrupt("return", !0);
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
                    I = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var n, a, l, i, c;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.image, a = t.mask, void 0 === a ? "square" : a, e.prev = 1, e.next = 4, p(ye({
                                            file: n.file || n
                                        }, null !== o && {
                                            tag: o
                                        })).unwrap();
                                    case 4:
                                        l = e.sent, r(l), e.next = 14;
                                        break;
                                    case 8:
                                        if (e.prev = 8, e.t0 = e.catch(1), !y({
                                                error: e.t0
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 12:
                                        console.error("Error deleting avatar:", e.t0), b((0, g.d)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: ae.eH,
                                            message: null !== (i = null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 14:
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
                }, h && m.createElement(ge.Z, {
                    name: "image"
                }), !h && (s || m.createElement(ve.Z, {
                    fileSelectedCallback: function(e) {
                        return k(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 will be resized automatically."
                })))
            };
            var xe = r(3620),
                ke = r(45697),
                Ne = r.n(ke),
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
                        icon: Q.faXmark
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
                avatarId: Ne().string.isRequired,
                isOpen: Ne().bool.isRequired,
                confirmCallback: Ne().func.isRequired,
                cancelCallback: Ne().func.isRequired
            };
            const Ze = Ie;
            var Ce = ["thumbnailImageUrl", "acknowledgements"];

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

            function Oe(e) {
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
            var je = new RegExp("^".concat(xe.i.AUTHOR)),
                Ae = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const Ue = function(e) {
                var t, r, o, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, f.s0)(),
                    v = (0, w.I0)(),
                    p = (0, h.pc)(),
                    b = (0, fe.P2)(),
                    y = (0, E.LQ)({
                        avatarId: c
                    }),
                    x = y.data,
                    k = (y.isFetching, y.isError, y.error, y.refetch, (0, E.CO)()),
                    I = k.data,
                    Z = void 0 === I ? [] : I,
                    C = (k.isFetching, k.isError, k.error, (0, m.useMemo)((function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == x || null === (e = x.tags) || void 0 === e || e.forEach((function(e) {
                            e.startsWith(xe.i.AUTHOR) ? t.push(e) : e.startsWith(xe.i.CONTENT_WARNING) ? r.push(e) : n.push(e)
                        })), {
                            authorTags: t,
                            contentTags: r,
                            privateTags: n
                        }
                    }), [null == x ? void 0 : x.tags])),
                    S = C.authorTags,
                    O = C.contentTags,
                    j = C.privateTags,
                    A = (o = x, Object.keys(o).filter((function(e) {
                        return Ae.includes(e)
                    })).reduce((function(e, t) {
                        return e[t] = o[t], e
                    }), {})),
                    F = (0, m.useState)(!0),
                    D = (0, l.Z)(F, 2),
                    T = D[0],
                    P = D[1],
                    R = (0, m.useState)({
                        pass: !0,
                        message: ""
                    }),
                    q = (0, l.Z)(R, 2),
                    z = q[0],
                    G = q[1],
                    M = (0, m.useState)("overview"),
                    Y = (0, l.Z)(M, 2),
                    K = Y[0],
                    V = Y[1],
                    X = (0, m.useState)(A),
                    _ = (0, l.Z)(X, 2),
                    W = _[0],
                    $ = _[1],
                    B = (0, m.useState)(),
                    le = (0, l.Z)(B, 2),
                    oe = le[0],
                    ie = le[1],
                    ce = (0, m.useState)(),
                    se = (0, l.Z)(ce, 2),
                    ue = se[0],
                    de = se[1],
                    ve = (0, m.useState)(O),
                    pe = (0, l.Z)(ve, 2),
                    ge = pe[0],
                    he = pe[1],
                    be = (0, m.useState)(S),
                    ye = (0, l.Z)(be, 2),
                    ke = ye[0],
                    Ne = ye[1],
                    Ie = (0, m.useState)(!1),
                    Se = (0, l.Z)(Ie, 2),
                    Ue = Se[0],
                    Fe = Se[1],
                    De = (0, m.useState)(!!A.acknowledgements),
                    Te = (0, l.Z)(De, 2),
                    Le = Te[0],
                    Pe = Te[1],
                    Re = (0, m.useState)(!!A.acknowledgements),
                    qe = (0, l.Z)(Re, 2),
                    ze = qe[0],
                    Ge = qe[1],
                    Me = (0, m.useState)(!1),
                    Ye = (0, l.Z)(Me, 2),
                    Ke = Ye[0],
                    Ve = Ye[1],
                    Xe = (0, m.useState)(""),
                    _e = (0, l.Z)(Xe, 2),
                    We = _e[0],
                    $e = _e[1],
                    Be = (0, m.useRef)(null),
                    He = (0, E.C0)(),
                    Qe = (0, l.Z)(He, 2),
                    Je = Qe[0],
                    et = Qe[1].isLoading,
                    tt = (0, E.GG)(),
                    rt = (0, l.Z)(tt, 1)[0],
                    nt = (0, m.useMemo)((function() {
                        var e;
                        return ze && !Le && (null == W || null === (e = W.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }), [ze, Le, W.acknowledgements]),
                    at = function() {
                        var e, t;
                        ie(ot(null == x || null === (e = x.styles) || void 0 === e ? void 0 : e.primary)), de(ot(null == x || null === (t = x.styles) || void 0 === t ? void 0 : t.secondary))
                    },
                    lt = function() {
                        $(A), at()
                    },
                    ot = function(e) {
                        var t;
                        return (null === (t = Z.find((function(t) {
                            var r;
                            return (null == t || null === (r = t.styleName) || void 0 === r ? void 0 : r.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                        }))) || void 0 === t ? void 0 : t.id) || null
                    };
                (0, m.useEffect)(at, [x, Z]);
                var it = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var t, r, a, l, o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.Z)(j), (0, n.Z)(ke), (0, n.Z)(ge)), W.thumbnailImageUrl, r = W.acknowledgements, a = (0, H.Z)(W, Ce), e.prev = 2, e.next = 5, Je({
                                            avatarId: c,
                                            data: Oe(Oe({}, a), {}, {
                                                acknowledgements: r || "",
                                                tags: t,
                                                styles: {
                                                    primary: oe,
                                                    secondary: ue
                                                }
                                            })
                                        }).unwrap();
                                    case 5:
                                        s(), v((0, g.d)({
                                            title: "Avatar Updated",
                                            icon: L.f8,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 9:
                                        if (e.prev = 9, e.t0 = e.catch(2), console.error("Error updating avatar:", e.t0), !b({
                                                error: e.t0
                                            })) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 14:
                                        v((0, g.d)({
                                            title: "Failed to update avatar",
                                            icon: ae.eH,
                                            message: null !== (l = null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
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
                    ct = function() {
                        var e = (0, a.Z)(d().mark((function e(t) {
                            var r, n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, rt({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        u("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), v((0, g.d)({
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
                    st = (0, m.useCallback)((function(e) {
                        V(e)
                    }), []),
                    ut = !!ue && !oe,
                    dt = nt || ut;
                return m.createElement(U.u_, {
                    title: "Edit Avatar",
                    onClose: function() {
                        lt(), P(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    className: "tw-p-5 tw-bg-black"
                }, m.createElement(Ze, {
                    avatarId: c,
                    isOpen: Ue,
                    cancelCallback: function() {
                        return Fe(!1)
                    },
                    confirmCallback: function() {
                        return ct(x.id)
                    }
                }), m.createElement(U.u_, {
                    isVisible: Ke,
                    className: "tw-pt-0",
                    onClose: function() {
                        return Ve(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: m.createElement(Ee, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return Ve(!1)
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
                                    $(Oe(Oe({}, W), {}, {
                                        thumbnailImageUrl: o,
                                        imageUrl: r
                                    })), Ve(!1)
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
                    onChange: st,
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
                        return Ve(!0)
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
                }, "Avatar Name"), m.createElement(U.II, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: W.name,
                    onChange: function(e) {
                        return $(Oe(Oe({}, W), {}, {
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
                }, "Avatar Description"), m.createElement(U.gx, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: W.description,
                    onChange: function(e) {
                        return $(Oe(Oe({}, W), {}, {
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
                        return ie(e.target.value)
                    }
                }, m.createElement("option", {
                    value: ""
                }, "Not Specified"), Z.map((function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))), m.createElement("div", {
                    className: "tw-w-10"
                }, m.createElement(U.zx, {
                    className: "tw-w-full",
                    title: "Swap primary and secondary styles",
                    disabled: !oe && !ue,
                    onClick: function() {
                        var e = oe || "";
                        ie(ue || ""), de(e)
                    }
                }, m.createElement(U.$1, {
                    icon: ne.faRightLeft
                }))), m.createElement("div", {
                    className: "tw-w-80"
                }, (oe || ue) && m.createElement(m.Fragment, null, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Secondary Style ", m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), m.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: ue,
                    onChange: function(e) {
                        return de(e.target.value)
                    }
                }, m.createElement("option", {
                    value: ""
                }, "Not Specified"), Z.map((function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                })))))), ut && m.createElement("span", {
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
                }, m.createElement(U.II, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            var t = "".concat(xe.i.AUTHOR).concat(e.target.value);
                            if (ke.find((function(e) {
                                    return e === t
                                })) || 0 === We.trim().length) return;
                            Ne([].concat((0, n.Z)(ke), [t])), $e("")
                        }
                    },
                    value: We,
                    ref: Be,
                    onChange: function(e) {
                        return $e(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: S.length >= 10
                }), m.createElement(U.zx, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Be.current.focus();
                        var e = "".concat(xe.i.AUTHOR).concat(Be.current.value);
                        ke.find((function(t) {
                            return t === e
                        })) || (Ne([].concat((0, n.Z)(ke), [e])), $e(""))
                    },
                    disabled: S.length >= 10 || 0 === We.trim().length
                }, m.createElement(U.$1, {
                    icon: re.r8
                }))), m.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, ke.map((function(e) {
                    return m.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, m.createElement("span", null, e.replace(je, "")), m.createElement(U.$1, {
                        icon: te.NB,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return Ne(ke.filter((function(t) {
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
                        return Ge(!ze)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && Ge(!ze)
                    }
                }, "please acknowledge them here ", m.createElement(U.$1, {
                    icon: ze ? ee.mT : J.pt
                }))), m.createElement(U.gx, {
                    className: "tw-".concat(ze ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == W ? void 0 : W.acknowledgements,
                    onChange: function(e) {
                        $(Oe(Oe({}, W), {}, {
                            acknowledgements: e.target.value
                        })), Pe(!1)
                    },
                    maxLength: 2048,
                    minLength: 1
                }), m.createElement("div", {
                    className: "".concat(ze ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, m.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: Le,
                    onChange: function() {
                        return Pe(!Le)
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
                }, Object.entries(xe.N).map((function(e) {
                    var t = (0, l.Z)(e, 2),
                        r = t[0],
                        a = t[1];
                    return m.createElement("label", {
                        key: r,
                        className: "tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                    }, m.createElement("input", {
                        type: "checkbox",
                        value: r,
                        checked: ge.includes(r),
                        onChange: function(e) {
                            he(e.target.checked ? [].concat((0, n.Z)(ge), [r]) : ge.filter((function(e) {
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
                }, "You can drag images to reorder them", m.createElement(U.$1, {
                    icon: Q.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return P(!1)
                    }
                })), !1 === z.pass && m.createElement(U.qX, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == z ? void 0 : z.message
                }), m.createElement(me, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return G(e)
                    }
                })), m.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex"
                }, m.createElement(U.zx, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        lt(), s()
                    },
                    neutral: !0
                }, "Cancel"), m.createElement(U.zx, {
                    disabled: !p && !(null == x || !x.productId),
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return Fe(!0)
                    },
                    danger: !0
                }, "Delete Avatar")), m.createElement(U.zx, {
                    loading: et,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return it()
                    },
                    disabled: dt
                }, "Save Changes"))))
            };
            var Fe = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                De = {
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
                var e, t = (0, w.I0)(),
                    r = (0, f.UO)().avatarId,
                    o = (0, h.Tu)().user,
                    u = (0, h.pc)(),
                    k = (0, w.v9)((function(e) {
                        return e.productFlow
                    })).currentStep,
                    N = m.useState(null),
                    I = (0, l.Z)(N, 2),
                    Z = I[0],
                    C = I[1],
                    T = m.useState(!1),
                    L = (0, l.Z)(T, 2),
                    P = L[0],
                    R = L[1],
                    q = m.useState(!1),
                    z = (0, l.Z)(q, 2),
                    G = z[0],
                    M = z[1],
                    Y = (0, E.LQ)({
                        avatarId: r
                    }),
                    K = Y.data,
                    V = Y.isFetching,
                    X = Y.isError,
                    _ = Y.error,
                    W = Y.refetch,
                    $ = (0, j.GR)(null == K ? void 0 : K.authorId, {
                        skip: !r || !K || !(null != K && K.authorId)
                    }),
                    H = $.data,
                    Q = $.isFetching,
                    J = $.isError,
                    ee = $.error,
                    te = (0, y.q7)({
                        skip: !o
                    }),
                    re = te.data,
                    ne = te.isLoading,
                    ae = te.isSuccess,
                    le = (null == K ? void 0 : K.authorId) === o.id,
                    oe = le,
                    ie = (0, x.iw)({
                        avatarId: r
                    }, {
                        skip: !r
                    }),
                    ce = ie.data,
                    se = (ie.isFetching, ie.isError),
                    ue = ie.error,
                    de = S({
                        userId: null == o ? void 0 : o.id,
                        forId: r,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !o || !K || le || "private" !== (null == K ? void 0 : K.releaseStatus)
                    }),
                    me = de.data,
                    we = (de.isFetching, de.isError, de.error, (0, O.Ms)({
                        listingId: null == K ? void 0 : K.productId
                    }, {
                        skip: !(null != K && K.productId) || (null == K ? void 0 : K.authorId) !== o.id
                    })),
                    fe = we.data,
                    ve = we.isFetching,
                    pe = (0, E.C0)(),
                    ge = (0, l.Z)(pe, 2),
                    he = ge[0],
                    be = ge[1],
                    ye = be.isFetching,
                    Ee = be.isError,
                    xe = be.error,
                    ke = (0, E.Cm)(),
                    Ne = (0, l.Z)(ke, 2),
                    Ie = Ne[0],
                    Ze = Ne[1],
                    Ce = Ze.isError,
                    Se = Ze.error,
                    Oe = Ze.isSuccess,
                    je = (0, E.x8)(),
                    Ae = (0, l.Z)(je, 2),
                    Le = Ae[0],
                    Pe = Ae[1],
                    Re = Pe.isLoading,
                    qe = Pe.isError,
                    ze = Pe.error,
                    Ge = Pe.isSuccess,
                    Me = (0, E.eP)(),
                    Ye = (0, l.Z)(Me, 2),
                    Ke = Ye[0],
                    Ve = Ye[1],
                    Xe = Ve.isLoading,
                    _e = Ve.isError,
                    We = Ve.error,
                    $e = Ve.isSuccess,
                    Be = (0, h.Nr)(Z, 1400),
                    He = V || Q,
                    Qe = X || J || se || Ee || qe || _e || Ce,
                    Je = _ || ee || ue || xe || ze || We || Se,
                    et = (0, m.useMemo)((function() {
                        return !(ne || !ae) && (null == re ? void 0 : re.includes("permission-sell-avatar-products"))
                    }), [ne]);
                m.useEffect((function() {
                    null != K && K.id && C(K.tags)
                }), [K]), m.useEffect((function() {
                    if (null != K && K.id && Be) {
                        var e = new Set(K.tags);
                        Be.length === K.tags.length && Be.every((function(t) {
                            return e.has(t)
                        })) || Ie({
                            avatarId: K.id,
                            tags: Be
                        })
                    }
                }), [Be]), m.useEffect((function() {
                    Ge && t((0, g.d)({
                        title: "Changed Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [Ge]), m.useEffect((function() {
                    $e && t((0, g.d)({
                        title: "Changed Fallback Avatars!",
                        icon: c.KC,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }), [$e]), m.useEffect((function() {
                    Oe && t((0, g.d)({
                        title: "Content Warnings Updated",
                        icon: s.Yj,
                        message: "You have successfully updated the content warnings for ".concat(null != K && K.name ? "avatar: ".concat(K.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }), [Oe]);
                var tt, rt = m.useMemo((function() {
                        return (null != ce ? ce : []).map((function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        }))
                    }), [ce]),
                    nt = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, l, o, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Le({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, g.d)({
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
                    at = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            var n, a, l, o, i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ke({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, g.d)({
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
                            var a, l, o, c, s;
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
                                        (a = e.sent).error && (s = "string" == typeof(null == a || null === (l = a.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error) ? null == a || null === (o = a.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error : null == a || null === (c = a.error) || void 0 === c || null === (c = c.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message, t((0, g.d)({
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
                if (X) return m.createElement(v.Z, null, m.createElement(U.$4, null, "Avatar"), m.createElement(U.qX, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == _ || null === (tt = _.data) || void 0 === tt || null === (tt = tt.error) || void 0 === tt ? void 0 : tt.message) || "There was an error loading the avatar."));
                if (!K || He && !K) return m.createElement(v.Z, null, m.createElement(U.$4, null, "Avatar"), m.createElement(F.Z, {
                    loading: !0
                }));
                var ot, it = "";
                Qe && (it = m.createElement(U.X2, null, m.createElement(p.Z, {
                    color: "warning"
                }, null == Je || null === (ot = Je.data) || void 0 === ot ? void 0 : ot.error.message)));
                var ct = function() {
                        var e = (0, a.Z)(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, A.IR)(K));
                                    case 2:
                                        return e.next = 4, t((0, A.WB)("avatar"));
                                    case 4:
                                        return e.next = 6, t((0, A.Bq)("productDetails"));
                                    case 6:
                                        return e.next = 8, t((0, A.SH)(!0));
                                    case 8:
                                        M(!0);
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
                    st = function() {
                        M(!1), t((0, A.bi)())
                    };
                return m.createElement(v.Z, null, m.createElement(U.$4, null, null !== (e = K.name) && void 0 !== e ? e : "Avatar"), it, oe && m.createElement(Ue, {
                    isOpen: P,
                    onCloseCallback: function() {
                        return R(!1)
                    },
                    avatarId: K.id
                }), m.createElement(b.default, {
                    avatar: K,
                    user: H,
                    galleryImages: rt,
                    licenses: me,
                    isAvatarSold: fe,
                    isAvatarSoldFetching: ve,
                    isSelectAvatarLoading: Re,
                    isSelectFallbackLoading: Xe,
                    isUpdateAvatarFetching: ye,
                    hasAvatarSellerPermission: et,
                    onEdit: function() {
                        return R(!0)
                    },
                    onSelectFallback: at,
                    onSelectAvatar: nt,
                    onSellAvatar: ct,
                    onSetAvatarReleaseStatus: lt
                }), (le || u) && m.createElement(U.X2, {
                    className: "tw-mb-3"
                }, m.createElement(Te, null, m.createElement(U.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), m.createElement(U.Ao, null, m.createElement(U.X2, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, m.createElement(U.ks, {
                    tags: Z,
                    isMod: u,
                    onSelectValues: function(e) {
                        C((function(t) {
                            return (0, n.Z)(new Set([].concat((0, n.Z)(t), (0, n.Z)(e))))
                        }))
                    },
                    onRemoveValue: function(e) {
                        C((function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        }))
                    },
                    styleOverrides: De
                }))))), (le || u) && m.createElement(U.X2, {
                    className: "tw-mb-3"
                }, m.createElement("div", null, m.createElement(U.oI, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), m.createElement(U.Ao, {
                    className: "tw-block"
                }, m.createElement(U.X2, {
                    className: "tw-mb-2"
                }, m.createElement(B, {
                    avatar: K,
                    refetch: W
                }))))), !1, !1, m.createElement(U.u_, {
                    title: Fe[k] || null,
                    isVisible: G,
                    onClose: st,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, m.createElement(D.Z, {
                    onClose: st
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
                    v = void 0 === f ? function() {} : f,
                    p = o.useState(t || !1),
                    g = (0, n.Z)(p, 2),
                    h = g[0],
                    b = g[1];
                o.useEffect((function() {
                    b(t)
                }), [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: m,
                    onClick: function() {
                        r ? r() : (v(!h), b(!h))
                    },
                    color: h ? "primary" : "secondary"
                }, h && o.createElement(s.Z, {
                    icon: l.uM
                }), !h && o.createElement(s.Z, {
                    icon: a.Kt
                })), " ", u), o.createElement(c.Z, {
                    isOpen: h
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
                Gr: () => i,
                _0: () => u,
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
        }
    }
]);
//# sourceMappingURL=f77e1ecd4763a22b80f929b82cd60f1396c370a8459e1d94c6445484b93d7653.js.map