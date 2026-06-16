"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8851], {
        78851(e, t, r) {
            r.r(t), r.d(t, {
                default: () => Pe
            });
            var n = r(66911),
                a = r(10467),
                l = r(82544),
                o = r(70129),
                i = r(34213),
                c = r(68415),
                s = r(9391),
                u = r(54756),
                d = r.n(u),
                m = r(96540),
                w = r(6376),
                f = r(47767),
                v = r(35169),
                p = r(85052),
                g = r(65950),
                h = r(194),
                b = r(63456),
                y = r(13951),
                E = r(95583),
                x = r(31931),
                k = r(64467),
                A = r(91069);

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach(function(t) {
                        (0, k.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var S = r(89483).m.injectEndpoints({
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
                                        params: I(I({}, (0, A.Hx)({
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
                C = S.useGetUserLicensesForContentQuery,
                O = r(72784),
                j = r(71957),
                F = r(89661),
                U = r(15033),
                D = (r(7563), r(20089), r(71853)),
                T = r(45123),
                L = r(93383),
                P = r(42217),
                R = (r(69815), r(13342)),
                M = r(5826),
                V = r(39704),
                G = r(25013),
                z = r(95093),
                X = r.n(z),
                $ = r(77861);

            function q(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return W(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? W(e, t) : void 0
                            }
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

            function W(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Y = "standard",
                B = "impostor",
                H = m.createElement(U.M2, {
                    color: "#54b5c5",
                    icon: P.SG
                }),
                _ = {
                    estimatedServiceDurationSeconds: 14400
                };
            const K = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return m.createElement("div", null, "We don't seem to have that avatar.");
                var o, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = q(n.unityPackages);
                try {
                    for (d.s(); !(o = d.n()).done;) {
                        var w = o.value,
                            f = w.platform,
                            p = w.variant,
                            g = w.assetUrl,
                            b = w.unitySortNumber;
                        f in u || (u[f] = {}), "impostor" === p && i++, b >= 2017e7 && "standalonewindows" === f && (c = !0, (null == s || b > s.unitySortNumber) && (s = {
                            fileId: (0, A.D2)(g),
                            versionNumber: parseInt((0, A.QQ)(g)),
                            unitySortNumber: b
                        })), u[f][null != p ? p : Y] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var y = (0, E.UH)(),
                    k = (0, l.A)(y, 2),
                    N = k[0],
                    I = k[1],
                    S = I.isLoading,
                    C = I.isError,
                    O = I.error,
                    j = (I.isSuccess, (0, E.EP)()),
                    F = (0, l.A)(j, 2),
                    D = F[0],
                    T = F[1],
                    P = T.isLoading,
                    z = T.isError,
                    W = T.error,
                    K = T.isSuccess,
                    Q = T.reset,
                    J = (0, x.sA)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    Z = J.data,
                    ee = J.refetch,
                    te = (0, m.useState)(!1),
                    re = (0, l.A)(te, 2),
                    ne = re[0],
                    ae = re[1],
                    le = (0, m.useState)(null),
                    oe = (0, l.A)(le, 2),
                    ie = oe[0],
                    ce = oe[1];
                (0, h.$$)(a, ne ? 1e4 : null), (0, h.$$)(ee, ne ? 5e3 : null);
                var se = (0, E.RM)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, E.RM)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : _,
                    me = i > 0,
                    we = i === $.aF.length,
                    fe = n.lastImpostorizationRequest,
                    ve = null != fe && X()(fe).add(144e5).isAfter(X()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (ve) {
                        var pe, ge, he = null == Z || null === (pe = Z.versions) || void 0 === pe || null === (pe = pe[s.versionNumber]) || void 0 === pe || null === (pe = pe.file) || void 0 === pe ? void 0 : pe.impostorStatus;
                        if (null != he && null != he.date && X()(he.date).isAfter(fe))
                            if (!he.isSuccess) ce(null !== (ge = he.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else K ? (Q(), ae(!0)) : !ve || we || ie || ae(!0);
                var be = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = W.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = m.createElement("code", null, W.data.error.message)), r
                };
                return m.createElement(v.A, null, m.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", m.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && m.createElement(U.$T, {
                    type: "info",
                    title: "Whoa there!"
                }, m.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", X().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), m.createElement(R.A, {
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
                }, "Impostor"))), m.createElement("tbody", null, $.aF.map(function(e) {
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
                    }, (null === (t = $.P4[e]) || void 0 === t ? void 0 : t.label) || e), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, Y in r && H), m.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, B in r && H))
                }))), ie && m.createElement(M.A, null, m.createElement(V.A, null, m.createElement(U.$T, {
                    type: "warn",
                    title: "Impostorization failed"
                }, m.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), m.createElement("p", null, m.createElement("pre", null, ie)), m.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && m.createElement(M.A, null, m.createElement(V.A, null, m.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), m.createElement("p", null, m.createElement("pre", null, ye)))), m.createElement(M.A, null, m.createElement(V.A, null, m.createElement(U.$n, {
                    className: "mb-2",
                    onClick: function() {
                        D({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !be,
                    loading: P || ne
                }, m.createElement(U.M2, {
                    width: 20,
                    icon: G.default
                }), " ", function() {
                    var e;
                    if (P) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != fe) {
                            var t = X()(),
                                r = X()(fe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = X().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), m.createElement(V.A, null, m.createElement(U.$n, {
                    className: "mb-2",
                    onClick: function() {
                        N({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: S,
                    disabled: !me
                }, m.createElement(U.M2, {
                    width: 20,
                    icon: L.s0
                }), " Delete Impostors"))), C && m.createElement(U.$T, {
                    type: "error"
                }, "Welp, failed to delete impostors.", m.createElement("br", null), Ee(O)), z && m.createElement(U.$T, {
                    type: "error"
                }, "Couldn't request impostors.", m.createElement("br", null), Ee(W)))
            };
            r.dn(K);
            r(72505);
            var Q = r(80045),
                J = r(75976),
                Z = r(31226),
                ee = r(86419),
                te = r(19179),
                re = r(28045),
                ne = r(46534),
                ae = r(34496),
                le = r(7612),
                oe = r(7521),
                ie = r(38275),
                ce = r(71088),
                se = r(6324);
            const ue = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    n = e.maxFileSizeMegaBytes,
                    o = e.galleryId,
                    i = e.file,
                    s = void 0 === i ? null : i,
                    u = e.validationCallback,
                    f = void 0 === u ? function() {} : u,
                    v = (0, w.wA)(),
                    p = (0, m.useRef)(null),
                    h = (0, m.useState)(""),
                    b = (0, l.A)(h, 2),
                    y = b[0],
                    E = b[1],
                    k = null === s ? "" : (0, A.Iu)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    N = (0, x.OC)(),
                    I = (0, l.A)(N, 2),
                    S = I[0],
                    C = I[1].isLoading,
                    O = (0, x.eX)(),
                    j = (0, l.A)(O, 2),
                    F = j[0],
                    U = j[1].isLoading,
                    D = function() {
                        var e = (0, a.A)(d().mark(function e(a) {
                            var l, i, s, u, m;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = null === (l = a.target) || void 0 === l || null === (l = l.files) || void 0 === l ? void 0 : l[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, A.Wl)({
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
                                        return e.next = 11, (0, A.SU)(i, r);
                                    case 11:
                                        return u = e.sent, e.prev = 12, e.next = 15, S({
                                            tag: "avatargallery",
                                            file: u,
                                            galleryId: o
                                        }).unwrap();
                                    case 15:
                                        E(""), e.next = 22;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), v((0, g.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (m = e.t0.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [12, 18]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    T = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var r, n;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, F({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), v((0, g.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 6]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return C || U ? m.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, m.createElement(se.A, {
                    icon: le.z1,
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
                }, m.createElement(se.A, {
                    icon: re.QL,
                    color: "#404C58",
                    width: 32
                }), m.createElement("input", {
                    className: "tw-hidden",
                    type: "file",
                    accept: ".jpg, .jpeg, .png",
                    ref: p,
                    value: y,
                    onChange: function(e) {
                        D(e)
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
                }, m.createElement(se.A, {
                    icon: ie.yL,
                    width: 16
                })))
            };
            var de = r(97963);
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
                    b = (0, w.wA)(),
                    y = (0, m.useRef)(null),
                    E = (0, m.useState)(""),
                    k = (0, l.A)(E, 2),
                    N = k[0],
                    I = k[1],
                    S = (0, m.useState)([]),
                    C = (0, l.A)(S, 2),
                    O = C[0],
                    j = C[1],
                    F = (0, m.useState)(!1),
                    U = (0, l.A)(F, 2),
                    D = U[0],
                    T = U[1],
                    L = (0, m.useState)(!0),
                    P = (0, l.A)(L, 2),
                    R = P[0],
                    M = P[1],
                    V = (0, m.useState)(null),
                    G = (0, l.A)(V, 2),
                    z = G[0],
                    X = G[1],
                    $ = (0, x.OC)(),
                    q = (0, l.A)($, 2),
                    W = q[0],
                    Y = q[1].isLoading,
                    B = (0, x.eX)(),
                    H = (0, l.A)(B, 2),
                    _ = H[0],
                    K = H[1].isLoading,
                    Q = (0, x.uk)(),
                    J = (0, l.A)(Q, 2),
                    Z = J[0],
                    ee = J[1],
                    te = ee.isLoading,
                    re = ee.error,
                    ne = (0, x.kV)({
                        avatarId: h
                    }, {
                        skip: !h
                    }),
                    ae = ne.data;
                ne.refetch;
                (0, m.useEffect)(function() {
                    if (ae) {
                        var e = (0, n.A)(ae).sort(function(e, t) {
                            return e.order - t.order
                        });
                        j(e)
                    }
                }, [ae]);
                var me = function(e, t) {
                        null !== t && (X(e), T(!0))
                    },
                    we = function(e) {
                        e.preventDefault()
                    },
                    fe = function() {
                        var e = (0, a.A)(d().mark(function e(t, r) {
                            var a, o, i, s, u, m;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== z && z !== t && null !== r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return a = (0, n.A)(O), o = a.splice(z, 1), i = (0, l.A)(o, 1), s = i[0], a.splice(t, 0, s), j(a), X(null), T(!1), u = a.map(function(e) {
                                            return e.id
                                        }), e.prev = 9, e.next = 12, Z({
                                            ids: u
                                        });
                                    case 12:
                                        e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(9), console.error("Failed to update image order:", e.t0), b((0, g.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to change order of images: ".concat(null == re || null === (m = re.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [9, 14]
                            ])
                        }));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ve = (null == O ? void 0 : O.length) > 0,
                    pe = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var r, n, a, l, i;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = null === (r = t.target) || void 0 === r || null === (r = r.files) || void 0 === r ? void 0 : r[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, A.Wl)({
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
                                        return e.next = 11, (0, A.SU)(n, s);
                                    case 11:
                                        return l = e.sent, e.prev = 12, e.next = 15, W({
                                            tag: "avatargallery",
                                            file: l,
                                            galleryId: h
                                        }).unwrap();
                                    case 15:
                                        I(""), e.next = 22;
                                        break;
                                    case 18:
                                        return e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), e.abrupt("return", b((0, g.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [12, 18]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ge = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var r, n;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, _({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), b((0, g.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to delete image: ".concat((null === e.t0 || void 0 === e.t0 || null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) || "Unknown error"),
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 6]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = K || Y || te;
                return m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !he && function() {
                    if (!ve) return m.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                    }, m.createElement(se.A, {
                        icon: ce.jb,
                        color: "#404C58",
                        width: 96
                    }), m.createElement(de.Ay, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return y.current.click()
                        }
                    }, m.createElement(se.A, {
                        icon: ce.jb
                    }), " Upload Cover Image"), m.createElement("input", {
                        className: "tw-hidden",
                        type: "file",
                        accept: ".jpg, .jpeg, .png",
                        ref: y,
                        value: N,
                        onChange: function(e) {
                            pe(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = O[0] || null,
                        t = (0, A.Iu)({
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
                            transition: D ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: 0 === z ? .3 : 1,
                            transform: 0 === z ? "scale(0.95)" : "scale(1)"
                        }
                    }, m.createElement("div", {
                        className: "tw-relative"
                    }, R && m.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, m.createElement(se.A, {
                        icon: le.z1,
                        color: "#FFFFFF",
                        spin: !0,
                        width: 48
                    })), m.createElement("img", {
                        src: t,
                        alt: "Avatar Cover Showcase",
                        onLoad: function() {
                            return M(!1)
                        },
                        onError: function() {
                            return M(!1)
                        },
                        style: {
                            display: R ? "none" : "block"
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
                    }, m.createElement(se.A, {
                        icon: ie.yL,
                        width: 16
                    })), m.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, m.createElement(se.A, {
                        icon: oe.G0,
                        width: 16
                    }), " Cover Image"))
                }(), he && m.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, m.createElement(se.A, {
                    icon: le.z1,
                    color: "#404C58",
                    width: "32",
                    spin: !0
                })), m.createElement("div", {
                    className: "tw-grid tw-grid-cols-5 tw-gap-4 tw-w-full"
                }, function(e) {
                    for (var t = new Array(5).fill(null), r = 0; r < e.length && r < 5; r++) t[r] = e[r];
                    return t
                }((0, n.A)(O.slice(1))).map(function(e, t) {
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
                            transition: D ? "transform 0.3s, opacity 0.3s" : void 0,
                            opacity: z === t + 1 ? .3 : 1,
                            transform: z === t + 1 ? "scale(0.95)" : "scale(1)"
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
                })))
            };
            var we = r(75174),
                fe = r(97071),
                ve = r(83551),
                pe = r(85253),
                ge = r(79955),
                he = r(48847);

            function be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(r), !0).forEach(function(t) {
                        (0, k.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const Ee = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    o = void 0 === n ? null : n,
                    i = m.useState(null),
                    c = (0, l.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    f = (0, x.OC)(),
                    v = (0, l.A)(f, 2),
                    p = v[0],
                    h = v[1].isLoading,
                    b = (0, w.wA)(),
                    y = (0, fe.DF)(),
                    E = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        b((0, g.X)({
                            title: t,
                            icon: ce.jb,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    k = function() {
                        var e = (0, a.A)(d().mark(function e(r) {
                            var n;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, pe.OO)({
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
                                        return e.next = 6, A({
                                            file: n
                                        });
                                    case 6:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        u(m.createElement(he.A, {
                                            baseImage: n,
                                            onCompleted: N,
                                            onCancel: t,
                                            onBack: function() {
                                                return u(null)
                                            }
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    A = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var r, n;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, pe.Hn)(r);
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
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    N = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var n, a, l, i, c;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.image, a = t.mask, e.prev = 1, e.next = 4, p(ye({
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
                                        console.error("Error deleting avatar:", e.t0), b((0, g.X)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: ae.zp,
                                            message: null !== (i = null === (c = e.t0.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message) && void 0 !== i ? i : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 8]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-min-h-[30em] tw-overflow-hidden"
                }, h && m.createElement(ge.A, {
                    name: "image"
                }), !h && (s || m.createElement(ve.A, {
                    fileSelectedCallback: function(e) {
                        return k(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 will be resized automatically."
                })))
            };
            var xe = r(92737),
                ke = r(5556),
                Ae = r.n(ke),
                Ne = function(e) {
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
                    }, "Delete Avatar"), m.createElement(de.Ay, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: a
                    }, m.createElement(se.A, {
                        icon: J.faXmark
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
                    }, m.createElement(de.Ay, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return n(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), m.createElement(de.Ay, {
                        neutral: !0,
                        className: "tw-mt-3 tw-w-full sm:tw-mt-0 tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 sm:tw-text-sm",
                        onClick: a,
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Cancel"))))) : null
                };
            Ne.propTypes = {
                avatarId: Ae().string.isRequired,
                isOpen: Ae().bool.isRequired,
                confirmCallback: Ae().func.isRequired,
                cancelCallback: Ae().func.isRequired
            };
            const Ie = Ne;
            var Se = ["thumbnailImageUrl", "acknowledgements"];

            function Ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(r), !0).forEach(function(t) {
                        (0, k.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var je = new RegExp("^".concat(xe.w.AUTHOR)),
                Fe = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const Ue = function(e) {
                var t, r, o, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, f.Zp)(),
                    v = (0, w.wA)(),
                    p = (0, h.Om)(),
                    b = (0, fe.DF)(),
                    y = (0, E.RR)({
                        avatarId: c
                    }),
                    x = y.data,
                    k = (y.isFetching, y.isError, y.error, y.refetch, (0, E.wx)()),
                    N = k.data,
                    I = void 0 === N ? [] : N,
                    S = (k.isFetching, k.isError, k.error, (0, m.useMemo)(function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == x || null === (e = x.tags) || void 0 === e || e.forEach(function(e) {
                            e.startsWith(xe.w.AUTHOR) ? t.push(e) : e.startsWith(xe.w.CONTENT_WARNING) ? r.push(e) : n.push(e)
                        }), {
                            authorTags: t,
                            contentTags: r,
                            privateTags: n
                        }
                    }, [null == x ? void 0 : x.tags])),
                    C = S.authorTags,
                    O = S.contentTags,
                    j = S.privateTags,
                    F = (o = x, Object.keys(o).filter(function(e) {
                        return Fe.includes(e)
                    }).reduce(function(e, t) {
                        return e[t] = o[t], e
                    }, {})),
                    D = (0, m.useState)(!0),
                    T = (0, l.A)(D, 2),
                    L = T[0],
                    R = T[1],
                    M = (0, m.useState)({
                        pass: !0,
                        message: ""
                    }),
                    V = (0, l.A)(M, 2),
                    G = V[0],
                    z = V[1],
                    X = (0, m.useState)("overview"),
                    $ = (0, l.A)(X, 2),
                    q = $[0],
                    W = $[1],
                    Y = (0, m.useState)(F),
                    B = (0, l.A)(Y, 2),
                    H = B[0],
                    _ = B[1],
                    K = (0, m.useState)(),
                    le = (0, l.A)(K, 2),
                    oe = le[0],
                    ie = le[1],
                    ce = (0, m.useState)(),
                    se = (0, l.A)(ce, 2),
                    ue = se[0],
                    de = se[1],
                    ve = (0, m.useState)(O),
                    pe = (0, l.A)(ve, 2),
                    ge = pe[0],
                    he = pe[1],
                    be = (0, m.useState)(C),
                    ye = (0, l.A)(be, 2),
                    ke = ye[0],
                    Ae = ye[1],
                    Ne = (0, m.useState)(!1),
                    Ce = (0, l.A)(Ne, 2),
                    Ue = Ce[0],
                    De = Ce[1],
                    Te = (0, m.useState)(!!F.acknowledgements),
                    Le = (0, l.A)(Te, 2),
                    Pe = Le[0],
                    Re = Le[1],
                    Me = (0, m.useState)(!!F.acknowledgements),
                    Ve = (0, l.A)(Me, 2),
                    Ge = Ve[0],
                    ze = Ve[1],
                    Xe = (0, m.useState)(!1),
                    $e = (0, l.A)(Xe, 2),
                    qe = $e[0],
                    We = $e[1],
                    Ye = (0, m.useState)(""),
                    Be = (0, l.A)(Ye, 2),
                    He = Be[0],
                    _e = Be[1],
                    Ke = (0, m.useRef)(null),
                    Qe = (0, E.pl)(),
                    Je = (0, l.A)(Qe, 2),
                    Ze = Je[0],
                    et = Je[1].isLoading,
                    tt = (0, E.Pb)(),
                    rt = (0, l.A)(tt, 1)[0],
                    nt = (0, m.useMemo)(function() {
                        var e;
                        return Ge && !Pe && (null == H || null === (e = H.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }, [Ge, Pe, H.acknowledgements]),
                    at = function() {
                        var e, t;
                        ie(ot(null == x || null === (e = x.styles) || void 0 === e ? void 0 : e.primary)), de(ot(null == x || null === (t = x.styles) || void 0 === t ? void 0 : t.secondary))
                    },
                    lt = function() {
                        _(F), at()
                    },
                    ot = function(e) {
                        var t;
                        return (null === (t = I.find(function(t) {
                            var r;
                            return (null == t || null === (r = t.styleName) || void 0 === r ? void 0 : r.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                        })) || void 0 === t ? void 0 : t.id) || null
                    };
                (0, m.useEffect)(at, [x, I]);
                var it = function() {
                        var e = (0, a.A)(d().mark(function e() {
                            var t, r, a, l, o;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.A)(j), (0, n.A)(ke), (0, n.A)(ge)), H.thumbnailImageUrl, r = H.acknowledgements, a = (0, Q.A)(H, Se), e.prev = 2, e.next = 5, Ze({
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
                                        s(), v((0, g.X)({
                                            title: "Avatar Updated",
                                            icon: P.SG,
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
                                        v((0, g.X)({
                                            title: "Failed to update avatar",
                                            icon: ae.zp,
                                            message: null !== (l = null === (o = e.t0.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== l ? l : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 9]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ct = function() {
                        var e = (0, a.A)(d().mark(function e(t) {
                            var r, n;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, rt({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        u("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), v((0, g.X)({
                                            title: "Failed to delete avatar",
                                            icon: ae.zp,
                                            message: null !== (r = null === (n = e.t0.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : "Something went wrong",
                                            color: "danger",
                                            timeout: 5e3
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 6]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    st = (0, m.useCallback)(function(e) {
                        W(e)
                    }, []),
                    ut = !!ue && !oe,
                    dt = nt || ut;
                return m.createElement(U.aF, {
                    title: "Edit Avatar",
                    onClose: function() {
                        lt(), R(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    className: "tw-p-5 tw-bg-black"
                }, m.createElement(Ie, {
                    avatarId: c,
                    isOpen: Ue,
                    cancelCallback: function() {
                        return De(!1)
                    },
                    confirmCallback: function() {
                        return ct(x.id)
                    }
                }), m.createElement(U.aF, {
                    isVisible: qe,
                    className: "tw-pt-0",
                    onClose: function() {
                        return We(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: m.createElement(Ee, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return We(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        n = (0, A.wO)({
                                            fileUrl: r
                                        }),
                                        a = n.fileId,
                                        l = n.fileVersion,
                                        o = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(a, "/").concat(l, "/256");
                                    _(Oe(Oe({}, H), {}, {
                                        thumbnailImageUrl: o,
                                        imageUrl: r
                                    })), We(!1)
                                } catch (e) {
                                    return console.error("Failed to process the uploaded image data", e.message), null
                                }
                            }(e)
                        }
                    })
                }), m.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, m.createElement(we.A, {
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
                    selected: q,
                    justify: "start"
                }), m.createElement("div", {
                    className: "tw-".concat("overview" === q ? "block" : "hidden", " tw-w-full")
                }, m.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full"
                }, m.createElement("div", {
                    className: "tw-block tw-mr-5"
                }, m.createElement("button", {
                    onClick: function() {
                        return We(!0)
                    },
                    type: "button",
                    className: "\n                  tw-bg-cover tw-bg-center tw-w-[286px] tw-h-[286px]  \n                  tw-border-0 tw-p-0 tw-rounded-2xl tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent\n                ",
                    style: {
                        backgroundImage: "url(".concat((null == H ? void 0 : H.thumbnailImageUrl) || (null == H ? void 0 : H.imageUrl), ")")
                    }
                })), m.createElement("div", {
                    className: "tw-flex-grow"
                }, m.createElement("div", {
                    className: "tw-mb-3"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), m.createElement(U.pd, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: H.name,
                    onChange: function(e) {
                        return _(Oe(Oe({}, H), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 128,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = H.name.length) && void 0 !== t ? t : 0, "/128")), m.createElement("div", {
                    className: "tw-mb-0"
                }, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), m.createElement(U.TM, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: H.description,
                    onChange: function(e) {
                        return _(Oe(Oe({}, H), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 1024,
                    minLength: 1
                }), m.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = H.description.length) && void 0 !== r ? r : 0, "/1024")))), m.createElement("div", {
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
                }, "Not Specified"), I.map(function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))), m.createElement("div", {
                    className: "tw-w-10"
                }, m.createElement(U.$n, {
                    className: "tw-w-full",
                    title: "Swap primary and secondary styles",
                    disabled: !oe && !ue,
                    onClick: function() {
                        var e = oe || "";
                        ie(ue || ""), de(e)
                    }
                }, m.createElement(U.M2, {
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
                }, "Not Specified"), I.map(function(e) {
                    return m.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))))), ut && m.createElement("span", {
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
                }, m.createElement(U.pd, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            var t = "".concat(xe.w.AUTHOR).concat(e.target.value);
                            if (ke.find(function(e) {
                                    return e === t
                                }) || 0 === He.trim().length) return;
                            Ae([].concat((0, n.A)(ke), [t])), _e("")
                        }
                    },
                    value: He,
                    ref: Ke,
                    onChange: function(e) {
                        return _e(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: C.length >= 10
                }), m.createElement(U.$n, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Ke.current.focus();
                        var e = "".concat(xe.w.AUTHOR).concat(Ke.current.value);
                        ke.find(function(t) {
                            return t === e
                        }) || (Ae([].concat((0, n.A)(ke), [e])), _e(""))
                    },
                    disabled: C.length >= 10 || 0 === He.trim().length
                }, m.createElement(U.M2, {
                    icon: re.QL
                }))), m.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, ke.map(function(e) {
                    return m.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, m.createElement("span", null, e.replace(je, "")), m.createElement(U.M2, {
                        icon: te.GR,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return Ae(ke.filter(function(t) {
                                return t !== e
                            }))
                        }
                    }))
                })), m.createElement("div", null, m.createElement("label", {
                    className: "tw-mb-2"
                }, "Acknowledgements"), m.createElement("p", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "If you’ve used assets or work from other creators in your avatar,", m.createElement("span", {
                    className: "tw-text-link-highlight tw-cursor-pointer tw-select-none tw-block",
                    onClick: function() {
                        return ze(!Ge)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && ze(!Ge)
                    }
                }, "please acknowledge them here ", m.createElement(U.M2, {
                    icon: Ge ? ee.w2 : Z.Jt
                }))), m.createElement(U.TM, {
                    className: "tw-".concat(Ge ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == H ? void 0 : H.acknowledgements,
                    onChange: function(e) {
                        _(Oe(Oe({}, H), {}, {
                            acknowledgements: e.target.value
                        })), Re(!1)
                    },
                    maxLength: 2048,
                    minLength: 1
                }), m.createElement("div", {
                    className: "".concat(Ge ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, m.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: Pe,
                    onChange: function() {
                        return Re(!Pe)
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
                }, Object.entries(xe.z).map(function(e) {
                    var t = (0, l.A)(e, 2),
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
                            he(e.target.checked ? [].concat((0, n.A)(ge), [r]) : ge.filter(function(e) {
                                return e !== r
                            }))
                        },
                        className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                    }), a)
                })))))), m.createElement("div", {
                    className: "tw-".concat("gallery" === q ? "flex" : "hidden", " tw-container tw-flex-col")
                }, m.createElement("h2", {
                    className: "heading"
                }, "Image Gallery"), m.createElement("p", {
                    className: "tw-mb-0"
                }, "Showcase your avatar with up to 6 images."), m.createElement("p", null, "Recommended resolution: 1920x1080px. Maximum file size: 1MB."), L && m.createElement("p", {
                    className: "tw-rounded-lg tw-bg-[#000] tw-px-5 tw-py-4 tw-flex tw-justify-between tw-items-center"
                }, "You can drag images to reorder them", m.createElement(U.M2, {
                    icon: J.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return R(!1)
                    }
                })), !1 === G.pass && m.createElement(U.$T, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == G ? void 0 : G.message
                }), m.createElement(me, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return z(e)
                    }
                })), m.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, m.createElement("div", {
                    className: "tw-flex"
                }, m.createElement(U.$n, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        lt(), s()
                    },
                    neutral: !0
                }, "Cancel"), m.createElement(U.$n, {
                    disabled: !p && !(null == x || !x.productId),
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return De(!0)
                    },
                    danger: !0
                }, "Delete Avatar")), m.createElement(U.$n, {
                    loading: et,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return it()
                    },
                    disabled: dt
                }, "Save Changes"))))
            };
            var De = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                Te = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                Le = (0, o.A)(U.fv, {
                    target: "e1blkums0"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                });
            const Pe = function() {
                var e, t = (0, w.wA)(),
                    r = (0, f.g)().avatarId,
                    o = (0, h.a$)().user,
                    u = (0, h.Om)(),
                    k = (0, w.d4)(function(e) {
                        return e.productFlow
                    }).currentStep,
                    A = m.useState(null),
                    N = (0, l.A)(A, 2),
                    I = N[0],
                    S = N[1],
                    L = m.useState(!1),
                    P = (0, l.A)(L, 2),
                    R = P[0],
                    M = P[1],
                    V = m.useState(!1),
                    G = (0, l.A)(V, 2),
                    z = G[0],
                    X = G[1],
                    $ = (0, E.RR)({
                        avatarId: r
                    }),
                    q = $.data,
                    W = $.isFetching,
                    Y = $.isError,
                    B = $.error,
                    H = $.refetch,
                    _ = (0, j.vf)(null == q ? void 0 : q.authorId, {
                        skip: !r || !q || !(null != q && q.authorId)
                    }),
                    Q = _.data,
                    J = _.isFetching,
                    Z = _.isError,
                    ee = _.error,
                    te = (0, y.w_)({
                        skip: !o
                    }),
                    re = te.data,
                    ne = te.isLoading,
                    ae = te.isSuccess,
                    le = (null == q ? void 0 : q.authorId) === o.id,
                    oe = le,
                    ie = (0, x.kV)({
                        avatarId: r
                    }, {
                        skip: !r
                    }),
                    ce = ie.data,
                    se = (ie.isFetching, ie.isError),
                    ue = ie.error,
                    de = C({
                        userId: null == o ? void 0 : o.id,
                        forId: r,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !o || !q || le || "private" !== (null == q ? void 0 : q.releaseStatus)
                    }),
                    me = de.data,
                    we = (de.isFetching, de.isError, de.error, (0, O.EG)({
                        listingId: null == q ? void 0 : q.productId
                    }, {
                        skip: !(null != q && q.productId) || (null == q ? void 0 : q.authorId) !== o.id
                    })),
                    fe = we.data,
                    ve = we.isFetching,
                    pe = (0, E.pl)(),
                    ge = (0, l.A)(pe, 2),
                    he = ge[0],
                    be = ge[1],
                    ye = be.isFetching,
                    Ee = be.isError,
                    xe = be.error,
                    ke = (0, E.vG)(),
                    Ae = (0, l.A)(ke, 2),
                    Ne = Ae[0],
                    Ie = Ae[1],
                    Se = Ie.isError,
                    Ce = Ie.error,
                    Oe = Ie.isSuccess,
                    je = (0, E.GP)(),
                    Fe = (0, l.A)(je, 2),
                    Pe = Fe[0],
                    Re = Fe[1],
                    Me = Re.isLoading,
                    Ve = Re.isError,
                    Ge = Re.error,
                    ze = Re.isSuccess,
                    Xe = (0, E.oV)(),
                    $e = (0, l.A)(Xe, 2),
                    qe = $e[0],
                    We = $e[1],
                    Ye = We.isLoading,
                    Be = We.isError,
                    He = We.error,
                    _e = We.isSuccess,
                    Ke = (0, h.d7)(I, 1400),
                    Qe = W || J,
                    Je = Y || Z || se || Ee || Ve || Be || Se,
                    Ze = B || ee || ue || xe || Ge || He || Ce,
                    et = (0, m.useMemo)(function() {
                        return !(ne || !ae) && (null == re ? void 0 : re.includes("permission-sell-avatar-products"))
                    }, [ne]);
                m.useEffect(function() {
                    null != q && q.id && S(q.tags)
                }, [q]), m.useEffect(function() {
                    if (null != q && q.id && Ke) {
                        var e = new Set(q.tags);
                        Ke.length === q.tags.length && Ke.every(function(t) {
                            return e.has(t)
                        }) || Ne({
                            avatarId: q.id,
                            tags: Ke
                        })
                    }
                }, [Ke]), m.useEffect(function() {
                    ze && t((0, g.X)({
                        title: "Changed Avatars!",
                        icon: c.yV,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }, [ze]), m.useEffect(function() {
                    _e && t((0, g.X)({
                        title: "Changed Fallback Avatars!",
                        icon: c.yV,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    }))
                }, [_e]), m.useEffect(function() {
                    Oe && t((0, g.X)({
                        title: "Content Warnings Updated",
                        icon: s.KT,
                        message: "You have successfully updated the content warnings for ".concat(null != q && q.name ? "avatar: ".concat(q.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }, [Oe]);
                var tt, rt = m.useMemo(function() {
                        return (null != ce ? ce : []).map(function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        })
                    }, [ce]),
                    nt = function() {
                        var e = (0, a.A)(d().mark(function e() {
                            var n, a, l, o, i;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Pe({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, g.X)({
                                            title: "Failed to change avatar!",
                                            icon: c.yV,
                                            message: null != i ? i : "An error occurred when changing your avatar",
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    at = function() {
                        var e = (0, a.A)(d().mark(function e() {
                            var n, a, l, o, i;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, qe({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, g.X)({
                                            title: "Failed to change fallback avatar!",
                                            icon: c.yV,
                                            message: null != i ? i : "An error occurred when changing your fallback",
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    lt = function() {
                        var e = (0, a.A)(d().mark(function e(n) {
                            var a, l, o, c, s;
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, he({
                                            avatarId: r,
                                            data: {
                                                releaseStatus: n
                                            }
                                        });
                                    case 2:
                                        (a = e.sent).error && (s = "string" == typeof(null == a || null === (l = a.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error) ? null == a || null === (o = a.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error : null == a || null === (c = a.error) || void 0 === c || null === (c = c.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message, t((0, g.X)({
                                            title: "Failed to change avatar release status!",
                                            icon: i.KK,
                                            message: null != s ? s : "An error occurred when changing avatar release status",
                                            color: "danger",
                                            timeout: 5e3
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (Y) return m.createElement(v.A, null, m.createElement(U.Qc, null, "Avatar"), m.createElement(U.$T, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == B || null === (tt = B.data) || void 0 === tt || null === (tt = tt.error) || void 0 === tt ? void 0 : tt.message) || "There was an error loading the avatar."));
                if (!q || Qe && !q) return m.createElement(v.A, null, m.createElement(U.Qc, null, "Avatar"), m.createElement(D.A, {
                    loading: !0
                }));
                var ot, it = "";
                Je && (it = m.createElement(U.fI, null, m.createElement(p.A, {
                    color: "warning"
                }, null == Ze || null === (ot = Ze.data) || void 0 === ot ? void 0 : ot.error.message)));
                var ct = function() {
                        var e = (0, a.A)(d().mark(function e() {
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, F.xl)(q));
                                    case 2:
                                        return e.next = 4, t((0, F.kU)("avatar"));
                                    case 4:
                                        return e.next = 6, t((0, F.EY)("productDetails"));
                                    case 6:
                                        return e.next = 8, t((0, F.GS)(!0));
                                    case 8:
                                        X(!0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    st = function() {
                        X(!1), t((0, F.f6)())
                    };
                return m.createElement(v.A, null, m.createElement(U.Qc, null, null !== (e = q.name) && void 0 !== e ? e : "Avatar"), it, oe && m.createElement(Ue, {
                    isOpen: R,
                    onCloseCallback: function() {
                        return M(!1)
                    },
                    avatarId: q.id
                }), m.createElement(b.default, {
                    avatar: q,
                    user: Q,
                    galleryImages: rt,
                    licenses: me,
                    isAvatarSold: fe,
                    isAvatarSoldFetching: ve,
                    isSelectAvatarLoading: Me,
                    isSelectFallbackLoading: Ye,
                    isUpdateAvatarFetching: ye,
                    hasAvatarSellerPermission: et,
                    onEdit: function() {
                        return M(!0)
                    },
                    onSelectFallback: at,
                    onSelectAvatar: nt,
                    onSellAvatar: ct,
                    onSetAvatarReleaseStatus: lt
                }), (le || u) && m.createElement(U.fI, {
                    className: "tw-mb-3"
                }, m.createElement(Le, null, m.createElement(U.N3, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), m.createElement(U.BW, null, m.createElement(U.fI, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, m.createElement(U.RF, {
                    tags: I,
                    isMod: u,
                    onSelectValues: function(e) {
                        S(function(t) {
                            return (0, n.A)(new Set([].concat((0, n.A)(t), (0, n.A)(e))))
                        })
                    },
                    onRemoveValue: function(e) {
                        S(function(t) {
                            return t.filter(function(t) {
                                return t !== e
                            })
                        })
                    },
                    styleOverrides: Te
                }))))), (le || u) && m.createElement(U.fI, {
                    className: "tw-mb-3"
                }, m.createElement("div", null, m.createElement(U.N3, null, m.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), m.createElement(U.BW, {
                    className: "tw-block"
                }, m.createElement(U.fI, {
                    className: "tw-mb-2"
                }, m.createElement(K, {
                    avatar: q,
                    refetch: H
                }))))), !1, !1, m.createElement(U.aF, {
                    title: De[k] || null,
                    isVisible: z,
                    onClose: st,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, m.createElement(T.A, {
                    onClose: st
                })))
            }
        },
        7563(e, t, r) {
            r.d(t, {
                A: () => u
            });
            var n = r(82544),
                a = r(59221),
                l = r(6077),
                o = r(96540),
                i = r(30104),
                c = r(21247),
                s = r(6324);
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
                    g = (0, n.A)(p, 2),
                    h = g[0],
                    b = g[1];
                o.useEffect(function() {
                    b(t)
                }, [t]);
                return o.createElement("div", null, o.createElement("h3", null, o.createElement(i.A, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: m,
                    onClick: function() {
                        r ? r() : (v(!h), b(!h))
                    },
                    color: h ? "primary" : "secondary"
                }, h && o.createElement(s.A, {
                    icon: l.Ip
                }), !h && o.createElement(s.A, {
                    icon: a.OQ
                })), " ", u), o.createElement(c.A, {
                    isOpen: h
                }, w), "sm" !== m && o.createElement("br", null))
            }
        },
        20089(e, t, r) {
            r.d(t, {
                A: () => w
            });
            var n = r(17225),
                a = r(96540),
                l = r(5556),
                o = r.n(l),
                i = (r(72505), r(30104)),
                c = r(74758),
                s = r(6324),
                u = r(59040),
                d = r(71602),
                m = function(e) {
                    var t = e.query,
                        r = (0, d.HV)({
                            queryURL: t
                        }),
                        l = r.data,
                        o = r.isFetching,
                        m = r.isSuccess,
                        w = r.isError,
                        f = r.refetch;
                    return a.createElement(c.A, null, a.createElement("h6", {
                        className: "p-1"
                    }, a.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), m && a.createElement(u.A, {
                        src: l
                    }), o && "Loading...", w && "Error loading ".concat(t), a.createElement("hr", null), a.createElement(i.A, {
                        onClick: function() {
                            return f()
                        },
                        className: "text-white"
                    }, a.createElement(s.A, {
                        icon: n.ye,
                        color: "white"
                    }), " Refresh"))
                };
            m.propTypes = {
                query: o().string.isRequired
            };
            const w = m
        },
        85253(e, t, r) {
            r.d(t, {
                Hn: () => c,
                ID: () => i,
                OO: () => u,
                Xt: () => s,
                nk: () => d
            });
            var n = r(10467),
                a = r(54756),
                l = r.n(a),
                o = {},
                i = function(e) {
                    var t = "".concat(e.name).concat(e.lastModified);
                    return void 0 === o[t] && (o[t] = window.URL.createObjectURL(e)), o[t]
                },
                c = function(e) {
                    return new Promise(function(t) {
                        var r = new Image;
                        r.addEventListener("load", function() {
                            var e = {
                                width: r.width,
                                height: r.height
                            };
                            window.URL.revokeObjectURL(r.src), t(e)
                        }), r.src = window.URL.createObjectURL(e)
                    })
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
                    var e = (0, n.A)(l().mark(function e(t) {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function(e) {
                                        var r = new FileReader;
                                        r.onload = function(t) {
                                            e(t.target.result)
                                        }, r.readAsDataURL(t)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        71602(e, t, r) {
            r.d(t, {
                HV: () => o
            });
            var n = r(89483),
                a = {};
            var l = n.m.injectEndpoints({
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
//# sourceMappingURL=4259dc0eba1bb6de8432f63ca75fa2d1892bde447a2e161f4a4c3b0d2066d965.js.map