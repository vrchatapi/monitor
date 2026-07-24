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
                u = r(62922),
                d = r(54756),
                m = r.n(d),
                w = r(96540),
                f = r(6376),
                v = r(47767),
                p = r(35169),
                g = r(85052),
                h = r(65950),
                b = r(78502),
                y = r(63456),
                E = r(13951),
                x = r(95583),
                k = r(31931),
                A = r(64467),
                N = r(91069);

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach(function(t) {
                        (0, A.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var C = r(89483).m.injectEndpoints({
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
                                        params: S(S({}, (0, N.Hx)({
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
                j = r(72784),
                F = r(71957),
                U = r(89661),
                D = r(71661),
                T = (r(7563), r(20089), r(71853)),
                R = r(45123),
                L = r(93383),
                P = r(42217),
                V = (r(69815), r(13342)),
                M = r(5826),
                G = r(39704),
                z = r(25013),
                X = r(95093),
                W = r.n(X),
                $ = r(77861);

            function q(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Y(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Y(e, t) : void 0
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

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var H = "standard",
                B = "impostor",
                _ = w.createElement(D.M2, {
                    color: "#54b5c5",
                    icon: P.SG
                }),
                K = {
                    estimatedServiceDurationSeconds: 14400
                };
            const Q = function(e) {
                var t, r, n = e.avatar,
                    a = e.refetch;
                if (!n) return w.createElement("div", null, "We don't seem to have that avatar.");
                var o, i = 0,
                    c = !1,
                    s = null,
                    u = {},
                    d = q(n.unityPackages);
                try {
                    for (d.s(); !(o = d.n()).done;) {
                        var m = o.value,
                            f = m.platform,
                            v = m.variant,
                            g = m.assetUrl,
                            h = m.unitySortNumber;
                        f in u || (u[f] = {}), "impostor" === v && i++, h >= 2017e7 && "standalonewindows" === f && (c = !0, (null == s || h > s.unitySortNumber) && (s = {
                            fileId: (0, N.D2)(g),
                            versionNumber: parseInt((0, N.QQ)(g)),
                            unitySortNumber: h
                        })), u[f][null != v ? v : H] = !0
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var y = (0, x.UH)(),
                    E = (0, l.A)(y, 2),
                    A = E[0],
                    I = E[1],
                    S = I.isLoading,
                    C = I.isError,
                    O = I.error,
                    j = (I.isSuccess, (0, x.EP)()),
                    F = (0, l.A)(j, 2),
                    U = F[0],
                    T = F[1],
                    R = T.isLoading,
                    P = T.isError,
                    X = T.error,
                    Y = T.isSuccess,
                    Q = T.reset,
                    J = (0, k.sA)(null === (t = s) || void 0 === t ? void 0 : t.fileId, {
                        skip: !s
                    }),
                    Z = J.data,
                    ee = J.refetch,
                    te = (0, w.useState)(!1),
                    re = (0, l.A)(te, 2),
                    ne = re[0],
                    ae = re[1],
                    le = (0, w.useState)(null),
                    oe = (0, l.A)(le, 2),
                    ie = oe[0],
                    ce = oe[1];
                (0, b.$$)(a, ne ? 1e4 : null), (0, b.$$)(ee, ne ? 5e3 : null);
                var se = (0, x.RM)(null, {
                        pollingInterval: 2e4,
                        skip: !ne
                    }).data,
                    ue = (0, x.RM)().data,
                    de = null !== (r = null != se ? se : ue) && void 0 !== r ? r : K,
                    me = i > 0,
                    we = i === $.aF.length,
                    fe = n.lastImpostorizationRequest,
                    ve = null != fe && W()(fe).add(144e5).isAfter(W()());
                if (ne) {
                    if (ne)
                        if (we) ae(!1);
                        else if (ve) {
                        var pe, ge, he = null == Z || null === (pe = Z.versions) || void 0 === pe || null === (pe = pe[s.versionNumber]) || void 0 === pe || null === (pe = pe.file) || void 0 === pe ? void 0 : pe.impostorStatus;
                        if (null != he && null != he.date && W()(he.date).isAfter(fe))
                            if (!he.isSuccess) ce(null !== (ge = he.failureReason) && void 0 !== ge ? ge : "Well, this is embarassing, we're not sure."), ae(!1)
                    }
                } else Y ? (Q(), ae(!0)) : !ve || we || ie || ae(!0);
                var be = c,
                    ye = "Unknown";
                c || (ye = "No asset found for Windows Platform with Unity ".concat(2017, " or later"));
                var Ee = function(e) {
                    var t, r = "An unknown error occurred";
                    return 429 === (null == e ? void 0 : e.status) ? r = "You're doing that a bit too much. Please try again tomorrow." : null !== (t = X.data) && void 0 !== t && null !== (t = t.error) && void 0 !== t && t.message && (r = w.createElement("code", null, X.data.error.message)), r
                };
                return w.createElement(p.A, null, w.createElement("p", {
                    style: {
                        marginTop: "0.75rem"
                    }
                }, "Impostors are cross-platform variations of your avatar, automatically generated and optimized for performance. When other players can't see your avatar, they'll see the Impostor instead of a Fallback, provided you have enabled the \"Use Impostor as Fallback\" setting in the client. Keep in mind that only 10 new Impostors can be generated per day.", " ", w.createElement("a", {
                    href: "https://creators.vrchat.com/avatars/avatar-impostors/"
                }, "Learn more about Impostors")), de.estimatedServiceDurationSeconds > 3600 && w.createElement(D.$T, {
                    type: "info",
                    title: "Whoa there!"
                }, w.createElement("p", null, "We're experiencing a lot of demand right now. Impostor generation may take a long time! You're lookin' at a wait of at least", " ", W().duration(de.estimatedServiceDurationSeconds, "seconds").humanize(), " before your impostors are ready.")), w.createElement(V.A, {
                    size: "sm"
                }, w.createElement("thead", null, w.createElement("tr", {
                    style: {
                        borderColor: "#737372"
                    }
                }, w.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Platform"), w.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "User-created"), w.createElement("th", {
                    style: {
                        color: "#737372"
                    }
                }, "Impostor"))), w.createElement("tbody", null, $.aF.map(function(e) {
                    var t, r = u[e] || {};
                    return w.createElement("tr", {
                        key: e,
                        style: {
                            borderColor: "#737372"
                        }
                    }, w.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, (null === (t = $.P4[e]) || void 0 === t ? void 0 : t.label) || e), w.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, H in r && _), w.createElement("td", {
                        style: {
                            color: "#f8f9fa"
                        }
                    }, B in r && _))
                }))), ie && w.createElement(M.A, null, w.createElement(G.A, null, w.createElement(D.$T, {
                    type: "warn",
                    title: "Impostorization failed"
                }, w.createElement("p", null, "Uh, oh, the last time we tried to generate impostors for this avatar, we had a problem:"), w.createElement("p", null, w.createElement("pre", null, ie)), w.createElement("p", null, "Some errors will always recur because our impostor system can't process this avatar. Others may be fixed over time.")))), !be && w.createElement(M.A, null, w.createElement(G.A, null, w.createElement("p", null, "Unfortunately we can't currently generate impostors for this avatar:"), w.createElement("p", null, w.createElement("pre", null, ye)))), w.createElement(M.A, null, w.createElement(G.A, null, w.createElement(D.$n, {
                    className: "mb-2",
                    onClick: function() {
                        U({
                            avatarId: n.id
                        })
                    },
                    color: "primary",
                    disabled: we || ne || !be,
                    loading: R || ne
                }, w.createElement(D.M2, {
                    width: 20,
                    icon: z.default
                }), " ", function() {
                    var e;
                    if (R) e = "Requesting Impostors...";
                    else if (ne) {
                        if (e = "Generating Impostors...", null != fe) {
                            var t = W()(),
                                r = W()(fe).add(de.estimatedServiceDurationSeconds, "seconds");
                            if (r.isBefore(t)) e = "Generating Impostors (Overdue! Please be patient.)";
                            else {
                                var n = W().duration(r.diff(t));
                                e = "Generating Impostors (Estimate: ".concat(n.humanize(), ")")
                            }
                        }
                    } else e = "Generate Impostors";
                    return e
                }())), w.createElement(G.A, null, w.createElement(D.$n, {
                    className: "mb-2",
                    onClick: function() {
                        A({
                            avatarId: n.id
                        })
                    },
                    color: "secondary",
                    loading: S,
                    disabled: !me
                }, w.createElement(D.M2, {
                    width: 20,
                    icon: L.s0
                }), " Delete Impostors"))), C && w.createElement(D.$T, {
                    type: "error"
                }, "Welp, failed to delete impostors.", w.createElement("br", null), Ee(O)), P && w.createElement(D.$T, {
                    type: "error"
                }, "Couldn't request impostors.", w.createElement("br", null), Ee(X)))
            };
            r.dn(Q);
            r(72505);
            var J = r(80045),
                Z = r(75976),
                ee = r(31226),
                te = r(86419),
                re = r(19179),
                ne = r(28045),
                ae = r(46534),
                le = r(34496),
                oe = r(7612),
                ie = r(7521),
                ce = r(38275),
                se = r(71088),
                ue = r(6324);
            const de = function(e) {
                var t = e.minImageDimension,
                    r = e.maxImageDimension,
                    n = e.maxFileSizeMegaBytes,
                    o = e.galleryId,
                    i = e.file,
                    s = void 0 === i ? null : i,
                    u = e.validationCallback,
                    d = void 0 === u ? function() {} : u,
                    v = (0, f.wA)(),
                    p = (0, w.useRef)(null),
                    g = (0, w.useState)(""),
                    b = (0, l.A)(g, 2),
                    y = b[0],
                    E = b[1],
                    x = null === s ? "" : (0, N.Iu)({
                        fileId: null == s ? void 0 : s.id
                    }),
                    A = (0, k.OC)(),
                    I = (0, l.A)(A, 2),
                    S = I[0],
                    C = I[1].isLoading,
                    O = (0, k.eX)(),
                    j = (0, l.A)(O, 2),
                    F = j[0],
                    U = j[1].isLoading,
                    D = function() {
                        var e = (0, a.A)(m().mark(function e(a) {
                            var l, i, s, u, w;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = null === (l = a.target) || void 0 === l || null === (l = l.files) || void 0 === l ? void 0 : l[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, N.Wl)({
                                            file: i,
                                            maxFileSizeMegaBytes: n,
                                            minImageDimension: t,
                                            maxImageDimension: Number.POSITIVE_INFINITY
                                        });
                                    case 5:
                                        if (s = e.sent, d(s), s.pass) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return e.next = 11, (0, N.SU)(i, r);
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
                                        e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), v((0, h.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to upload image:  ".concat((null === e.t0 || void 0 === e.t0 || null === (w = e.t0.data) || void 0 === w || null === (w = w.error) || void 0 === w ? void 0 : w.message) || "Unknown error"),
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var r, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, F({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), v((0, h.X)({
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
                return C || U ? w.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center"
                }, w.createElement(ue.A, {
                    icon: oe.z1,
                    spin: !0,
                    color: "#404C58",
                    width: "32"
                })) : null === s ? w.createElement("div", {
                    className: "tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-pointer",
                    onClick: function() {
                        return p.current.click()
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key && " " !== e.key || p.current.click()
                    }
                }, w.createElement(ue.A, {
                    icon: ne.QL,
                    color: "#404C58",
                    width: 32
                }), w.createElement("input", {
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
                })) : w.createElement("div", {
                    className: " tw-border-dashed tw-border-2 tw-rounded-md tw-border-[#404C58] tw-h-[105px] tw-flex tw-items-center tw-justify-center tw-cursor-grab tw-bg-cover tw-bg-center tw-relative ",
                    style: {
                        backgroundImage: "url(".concat(x, ")")
                    },
                    "aria-label": "Additional Avatar Showcase"
                }, w.createElement("span", {
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
                }, w.createElement(ue.A, {
                    icon: ce.yL,
                    width: 16
                })))
            };
            var me = r(97963);
            const we = function(e) {
                var t = e.className,
                    r = e.minImageDimension,
                    o = void 0 === r ? 100 : r,
                    i = e.maxImageDimension,
                    s = void 0 === i ? 2048 : i,
                    u = e.maxFileSizeMegaBytes,
                    d = void 0 === u ? 10 : u,
                    v = e.validationCallback,
                    p = void 0 === v ? function() {} : v,
                    g = e.galleryId,
                    b = (0, f.wA)(),
                    y = (0, w.useRef)(null),
                    E = (0, w.useState)(""),
                    x = (0, l.A)(E, 2),
                    A = x[0],
                    I = x[1],
                    S = (0, w.useState)([]),
                    C = (0, l.A)(S, 2),
                    O = C[0],
                    j = C[1],
                    F = (0, w.useState)(!1),
                    U = (0, l.A)(F, 2),
                    D = U[0],
                    T = U[1],
                    R = (0, w.useState)(!0),
                    L = (0, l.A)(R, 2),
                    P = L[0],
                    V = L[1],
                    M = (0, w.useState)(null),
                    G = (0, l.A)(M, 2),
                    z = G[0],
                    X = G[1],
                    W = (0, k.OC)(),
                    $ = (0, l.A)(W, 2),
                    q = $[0],
                    Y = $[1].isLoading,
                    H = (0, k.eX)(),
                    B = (0, l.A)(H, 2),
                    _ = B[0],
                    K = B[1].isLoading,
                    Q = (0, k.uk)(),
                    J = (0, l.A)(Q, 2),
                    Z = J[0],
                    ee = J[1],
                    te = ee.isLoading,
                    re = ee.error,
                    ne = (0, k.kV)({
                        avatarId: g
                    }, {
                        skip: !g
                    }),
                    ae = ne.data;
                ne.refetch;
                (0, w.useEffect)(function() {
                    if (ae) {
                        var e = (0, n.A)(ae).sort(function(e, t) {
                            return e.order - t.order
                        });
                        j(e)
                    }
                }, [ae]);
                var le = function(e, t) {
                        null !== t && (X(e), T(!0))
                    },
                    we = function(e) {
                        e.preventDefault()
                    },
                    fe = function() {
                        var e = (0, a.A)(m().mark(function e(t, r) {
                            var a, o, i, s, u, d;
                            return m().wrap(function(e) {
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
                                        e.prev = 14, e.t0 = e.catch(9), console.error("Failed to update image order:", e.t0), b((0, h.X)({
                                            title: "Avatar Gallery",
                                            icon: c.yV,
                                            message: "Failed to change order of images: ".concat(null == re || null === (d = re.data) || void 0 === d || null === (d = d.error) || void 0 === d ? void 0 : d.message),
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var r, n, a, l, i;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = null === (r = t.target) || void 0 === r || null === (r = r.files) || void 0 === r ? void 0 : r[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, (0, N.Wl)({
                                            file: n,
                                            maxFileSizeMegaBytes: d,
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
                                        return e.next = 11, (0, N.SU)(n, s);
                                    case 11:
                                        return l = e.sent, e.prev = 12, e.next = 15, q({
                                            tag: "avatargallery",
                                            file: l,
                                            galleryId: g
                                        }).unwrap();
                                    case 15:
                                        I(""), e.next = 22;
                                        break;
                                    case 18:
                                        return e.prev = 18, e.t0 = e.catch(12), console.error("Failed to upload image:", e.t0), e.abrupt("return", b((0, h.X)({
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var r, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.fileId, e.prev = 1, e.next = 4, _({
                                            fileId: r
                                        }).unwrap();
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error("Failed to delete image:", e.t0), b((0, h.X)({
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
                return w.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full ".concat(t)
                }, !he && function() {
                    if (!ve) return w.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                    }, w.createElement(ue.A, {
                        icon: se.jb,
                        color: "#404C58",
                        width: 96
                    }), w.createElement(me.Ay, {
                        type: "button",
                        className: "tw-h-9 tw-border-0 tw-px-7 tw-leading-none tw-mt-5 tw-rounded-md",
                        onClick: function() {
                            return y.current.click()
                        }
                    }, w.createElement(ue.A, {
                        icon: se.jb
                    }), " Upload Cover Image"), w.createElement("input", {
                        className: "tw-hidden",
                        type: "file",
                        accept: ".jpg, .jpeg, .png",
                        ref: y,
                        value: A,
                        onChange: function(e) {
                            pe(e)
                        },
                        name: "image__input",
                        "aria-label": "Upload cover image"
                    }));
                    var e = O[0] || null,
                        t = (0, N.Iu)({
                            fileId: e.id
                        });
                    return w.createElement("div", {
                        className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4 tw-overflow-hidden tw-relative tw-cursor-grab",
                        draggable: !0,
                        onDragStart: function() {
                            return le(0, e)
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
                    }, w.createElement("div", {
                        className: "tw-relative"
                    }, P && w.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-dark-grey tw-opacity-50"
                    }, w.createElement(ue.A, {
                        icon: oe.z1,
                        color: "#FFFFFF",
                        spin: !0,
                        width: 48
                    })), w.createElement("img", {
                        src: t,
                        alt: "Avatar Cover Showcase",
                        onLoad: function() {
                            return V(!1)
                        },
                        onError: function() {
                            return V(!1)
                        },
                        style: {
                            display: P ? "none" : "block"
                        }
                    })), w.createElement("span", {
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
                    }, w.createElement(ue.A, {
                        icon: ce.yL,
                        width: 16
                    })), w.createElement("span", {
                        className: "tw-absolute tw-bottom-4 tw-left-4 tw-bg-dark-grey-transparent-90 tw-px-3 tw-py-1 tw-rounded-md"
                    }, w.createElement(ue.A, {
                        icon: ie.G0,
                        width: 16
                    }), " Cover Image"))
                }(), he && w.createElement("div", {
                    className: "tw-w-full tw-h-72 tw-bg-grey tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-4"
                }, w.createElement(ue.A, {
                    icon: oe.z1,
                    color: "#404C58",
                    width: "32",
                    spin: !0
                })), w.createElement("div", {
                    className: "tw-grid tw-grid-cols-5 tw-gap-4 tw-w-full"
                }, function(e) {
                    for (var t = new Array(5).fill(null), r = 0; r < e.length && r < 5; r++) t[r] = e[r];
                    return t
                }((0, n.A)(O.slice(1))).map(function(e, t) {
                    return w.createElement("div", {
                        key: null === e ? t : e.id,
                        draggable: !0,
                        onDragStart: function() {
                            le(t + 1, e)
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
                    }, w.createElement(de, {
                        file: e,
                        galleryId: g,
                        minImageDimension: o,
                        maxImageDimension: s,
                        maxFileSizeMegaBytes: d,
                        validationCallback: function(e) {
                            return p(e)
                        }
                    }))
                })))
            };
            var fe = r(75174),
                ve = r(97071),
                pe = r(83551),
                ge = r(85253),
                he = r(79955),
                be = r(48847);

            function ye(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(r), !0).forEach(function(t) {
                        (0, A.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ye(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            const xe = function(e) {
                var t = e.onCloseCallback,
                    r = e.onUploadedCallback,
                    n = e.imageTag,
                    o = void 0 === n ? null : n,
                    i = w.useState(null),
                    c = (0, l.A)(i, 2),
                    s = c[0],
                    u = c[1],
                    d = (0, k.OC)(),
                    v = (0, l.A)(d, 2),
                    p = v[0],
                    g = v[1].isLoading,
                    b = (0, f.wA)(),
                    y = (0, ve.DF)(),
                    E = function(e) {
                        var t = e.title,
                            r = e.message,
                            n = e.color;
                        b((0, h.X)({
                            title: t,
                            icon: se.jb,
                            message: r,
                            color: n,
                            timeout: 5e3
                        }))
                    },
                    x = function() {
                        var e = (0, a.A)(m().mark(function e(r) {
                            var n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = r.file, (0, ge.OO)({
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
                                        u(w.createElement(be.A, {
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var r, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.file, e.next = 3, (0, ge.Hn)(r);
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var n, a, l, i, c;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.image, a = t.mask, e.prev = 1, e.next = 4, p(Ee({
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
                                        console.error("Error deleting avatar:", e.t0), b((0, h.X)({
                                            title: "Failed to upload avatar thumbnail",
                                            icon: le.zp,
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
                return w.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full tw-min-h-[30em] tw-overflow-hidden"
                }, g && w.createElement(he.A, {
                    name: "image"
                }), !g && (s || w.createElement(pe.A, {
                    fileSelectedCallback: function(e) {
                        return x(e)
                    },
                    hintText: "",
                    hintTextMuted: "Each file must be less than 10MB and larger than 64x64 pixels. Images larger than 2048x2048 will be resized automatically."
                })))
            };
            var ke = r(92737),
                Ae = r(5556),
                Ne = r.n(Ae),
                Ie = function(e) {
                    var t = e.avatarId,
                        r = e.isOpen,
                        n = e.confirmCallback,
                        a = e.cancelCallback;
                    return r ? w.createElement("div", {
                        className: "tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto"
                    }, w.createElement("div", {
                        className: "tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0"
                    }, w.createElement("div", {
                        className: "tw-fixed tw-inset-0 tw-transition-opacity",
                        "aria-hidden": "true"
                    }, w.createElement("div", {
                        className: "tw-absolute tw-inset-0 tw-bg-dark-grey-transparent-90",
                        onClick: a
                    })), w.createElement("span", {
                        className: "tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen",
                        "aria-hidden": "true"
                    }, "​"), w.createElement("div", {
                        className: "tw-inline-block tw-align-bottom tw-bg-black tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-[750px] sm:tw-w-full"
                    }, w.createElement("div", {
                        className: "tw-bg-grey tw-p-5 tw-flex tw-flex-row tw-justify-between tw-items-center"
                    }, w.createElement("h3", {
                        className: "heading tw-text-white tw-font-bold tw-text-2xl tw-m-0"
                    }, "Delete Avatar"), w.createElement(me.Ay, {
                        className: "tw-w-8 tw-h-8 tw-rounded-lg tw-bg-button-bg-grey tw-text-white tw-flex tw-justify-center tw-items-center tw-border-0",
                        onClick: a
                    }, w.createElement(ue.A, {
                        icon: Z.faXmark
                    }))), w.createElement("div", {
                        className: "tw-bg-black tw-px-5 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4"
                    }, w.createElement("div", {
                        className: "sm:tw-flex sm:tw-items-start"
                    }, w.createElement("div", {
                        className: "tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-text-left"
                    }, w.createElement("p", {
                        className: "tw-text-md tw-text-white tw-font-bold"
                    }, "Are you sure you want to delete this avatar? This is NOT reversible.")))), w.createElement("div", {
                        className: "tw-px-4 tw-py-4 tw-justify-between sm:tw-px-6 sm:tw-flex sm:tw-flex-row-reverse"
                    }, w.createElement(me.Ay, {
                        danger: !0,
                        className: "tw-w-full tw-justify-center tw-rounded-md tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-hover:bg-red-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-red-500 sm:tw-ml-3 sm:tw-text-sm",
                        onClick: function() {
                            return n(t)
                        },
                        containerStyles: {
                            width: "100%"
                        }
                    }, "Delete"), w.createElement(me.Ay, {
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
            const Se = Ie;
            var Ce = ["thumbnailImageUrl", "acknowledgements"];

            function Oe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oe(Object(r), !0).forEach(function(t) {
                        (0, A.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var Fe = new RegExp("^".concat(ke.w.AUTHOR)),
                Ue = ["name", "description", "thumbnailImageUrl", "imageUrl", "styles", "acknowledgements"];
            const De = function(e) {
                var t, r, o, i = e.isOpen,
                    c = e.avatarId,
                    s = e.onCloseCallback,
                    u = (0, v.Zp)(),
                    d = (0, f.wA)(),
                    p = (0, b.Om)(),
                    g = (0, ve.DF)(),
                    y = (0, x.RR)({
                        avatarId: c
                    }),
                    E = y.data,
                    k = (y.isFetching, y.isError, y.error, y.refetch, (0, x.wx)()),
                    A = k.data,
                    I = void 0 === A ? [] : A,
                    S = (k.isFetching, k.isError, k.error, (0, w.useMemo)(function() {
                        var e, t = [],
                            r = [],
                            n = [];
                        return null == E || null === (e = E.tags) || void 0 === e || e.forEach(function(e) {
                            e.startsWith(ke.w.AUTHOR) ? t.push(e) : e.startsWith(ke.w.CONTENT_WARNING) ? r.push(e) : n.push(e)
                        }), {
                            authorTags: t,
                            contentTags: r,
                            privateTags: n
                        }
                    }, [null == E ? void 0 : E.tags])),
                    C = S.authorTags,
                    O = S.contentTags,
                    j = S.privateTags,
                    F = (o = E, Object.keys(o).filter(function(e) {
                        return Ue.includes(e)
                    }).reduce(function(e, t) {
                        return e[t] = o[t], e
                    }, {})),
                    U = (0, w.useState)(!0),
                    T = (0, l.A)(U, 2),
                    R = T[0],
                    L = T[1],
                    V = (0, w.useState)({
                        pass: !0,
                        message: ""
                    }),
                    M = (0, l.A)(V, 2),
                    G = M[0],
                    z = M[1],
                    X = (0, w.useState)("overview"),
                    W = (0, l.A)(X, 2),
                    $ = W[0],
                    q = W[1],
                    Y = (0, w.useState)(F),
                    H = (0, l.A)(Y, 2),
                    B = H[0],
                    _ = H[1],
                    K = (0, w.useState)(),
                    Q = (0, l.A)(K, 2),
                    oe = Q[0],
                    ie = Q[1],
                    ce = (0, w.useState)(),
                    se = (0, l.A)(ce, 2),
                    ue = se[0],
                    de = se[1],
                    me = (0, w.useState)(O),
                    pe = (0, l.A)(me, 2),
                    ge = pe[0],
                    he = pe[1],
                    be = (0, w.useState)(C),
                    ye = (0, l.A)(be, 2),
                    Ee = ye[0],
                    Ae = ye[1],
                    Ne = (0, w.useState)(!1),
                    Ie = (0, l.A)(Ne, 2),
                    Oe = Ie[0],
                    De = Ie[1],
                    Te = (0, w.useState)(!!F.acknowledgements),
                    Re = (0, l.A)(Te, 2),
                    Le = Re[0],
                    Pe = Re[1],
                    Ve = (0, w.useState)(!!F.acknowledgements),
                    Me = (0, l.A)(Ve, 2),
                    Ge = Me[0],
                    ze = Me[1],
                    Xe = (0, w.useState)(!1),
                    We = (0, l.A)(Xe, 2),
                    $e = We[0],
                    qe = We[1],
                    Ye = (0, w.useState)(""),
                    He = (0, l.A)(Ye, 2),
                    Be = He[0],
                    _e = He[1],
                    Ke = (0, w.useRef)(null),
                    Qe = (0, x.pl)(),
                    Je = (0, l.A)(Qe, 2),
                    Ze = Je[0],
                    et = Je[1].isLoading,
                    tt = (0, x.Pb)(),
                    rt = (0, l.A)(tt, 1)[0],
                    nt = (0, w.useMemo)(function() {
                        var e;
                        return Ge && !Le && (null == B || null === (e = B.acknowledgements) || void 0 === e ? void 0 : e.length) > 0
                    }, [Ge, Le, B.acknowledgements]),
                    at = function() {
                        var e, t;
                        ie(ot(null == E || null === (e = E.styles) || void 0 === e ? void 0 : e.primary)), de(ot(null == E || null === (t = E.styles) || void 0 === t ? void 0 : t.secondary))
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
                (0, w.useEffect)(at, [E, I]);
                var it = function() {
                        var e = (0, a.A)(m().mark(function e() {
                            var t, r, a, l, o;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [].concat((0, n.A)(j), (0, n.A)(Ee), (0, n.A)(ge)), B.thumbnailImageUrl, r = B.acknowledgements, a = (0, J.A)(B, Ce), e.prev = 2, e.next = 5, Ze({
                                            avatarId: c,
                                            data: je(je({}, a), {}, {
                                                acknowledgements: r || "",
                                                tags: t,
                                                styles: {
                                                    primary: oe,
                                                    secondary: ue
                                                }
                                            })
                                        }).unwrap();
                                    case 5:
                                        s(), d((0, h.X)({
                                            title: "Avatar Updated",
                                            icon: P.SG,
                                            color: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 9:
                                        if (e.prev = 9, e.t0 = e.catch(2), console.error("Error updating avatar:", e.t0), !g({
                                                error: e.t0
                                            })) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 14:
                                        d((0, h.X)({
                                            title: "Failed to update avatar",
                                            icon: le.zp,
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
                        var e = (0, a.A)(m().mark(function e(t) {
                            var r, n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, rt({
                                            avatarId: t
                                        }).unwrap();
                                    case 3:
                                        u("/home/avatars"), e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error("Error deleting avatar:", e.t0), d((0, h.X)({
                                            title: "Failed to delete avatar",
                                            icon: le.zp,
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
                    st = (0, w.useCallback)(function(e) {
                        q(e)
                    }, []),
                    ut = !!ue && !oe,
                    dt = nt || ut;
                return w.createElement(D.aF, {
                    title: "Edit Avatar",
                    onClose: function() {
                        lt(), L(!0), s()
                    },
                    isVisible: i,
                    width: "750px",
                    centered: !1,
                    overflow: "auto",
                    className: "tw-p-5 tw-bg-black"
                }, w.createElement(Se, {
                    avatarId: c,
                    isOpen: Oe,
                    cancelCallback: function() {
                        return De(!1)
                    },
                    confirmCallback: function() {
                        return ct(E.id)
                    }
                }), w.createElement(D.aF, {
                    isVisible: $e,
                    className: "tw-pt-0",
                    onClose: function() {
                        return qe(!1)
                    },
                    title: "Upload a New Thumbnail",
                    children: w.createElement(xe, {
                        imageTag: "avatarimage",
                        onCloseCallback: function() {
                            return qe(!1)
                        },
                        onUploadedCallback: function(e) {
                            return function(e) {
                                try {
                                    var t = e.versions,
                                        r = t[t.length - 1].file.url,
                                        n = (0, N.wO)({
                                            fileUrl: r
                                        }),
                                        a = n.fileId,
                                        l = n.fileVersion,
                                        o = "".concat("https://api.vrchat.cloud", "/api/1/image/").concat(a, "/").concat(l, "/256");
                                    _(je(je({}, B), {}, {
                                        thumbnailImageUrl: o,
                                        imageUrl: r
                                    })), qe(!1)
                                } catch (e) {
                                    return console.error("Failed to process the uploaded image data", e.message), null
                                }
                            }(e)
                        }
                    })
                }), w.createElement("div", {
                    className: "tw-flex tw-flex-col tw-w-full"
                }, w.createElement(fe.A, {
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
                    selected: $,
                    justify: "start"
                }), w.createElement("div", {
                    className: "tw-".concat("overview" === $ ? "block" : "hidden", " tw-w-full")
                }, w.createElement("div", {
                    className: "tw-flex tw-flex-row tw-w-full"
                }, w.createElement("div", {
                    className: "tw-block tw-mr-5"
                }, w.createElement("button", {
                    onClick: function() {
                        return qe(!0)
                    },
                    type: "button",
                    className: "\n                  tw-bg-cover tw-bg-center tw-w-[286px] tw-h-[286px]  \n                  tw-border-0 tw-p-0 tw-rounded-2xl tw-relative tw-items-center tw-justify-center tw-flex tw-bg-transparent\n                ",
                    style: {
                        backgroundImage: "url(".concat((null == B ? void 0 : B.thumbnailImageUrl) || (null == B ? void 0 : B.imageUrl), ")")
                    }
                })), w.createElement("div", {
                    className: "tw-flex-grow"
                }, w.createElement("div", {
                    className: "tw-mb-3"
                }, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Name"), w.createElement(D.pd, {
                    className: "tw-mb-0",
                    type: "text",
                    placeholder: "Enter avatar name",
                    value: B.name,
                    onChange: function(e) {
                        return _(je(je({}, B), {}, {
                            name: e.target.value
                        }))
                    },
                    maxLength: 128,
                    minLength: 1
                }), w.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (t = B.name.length) && void 0 !== t ? t : 0, "/128")), w.createElement("div", {
                    className: "tw-mb-0"
                }, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Avatar Description"), w.createElement(D.TM, {
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Enter avatar description",
                    value: B.description,
                    onChange: function(e) {
                        return _(je(je({}, B), {}, {
                            description: e.target.value
                        }))
                    },
                    maxLength: 1024,
                    minLength: 1
                }), w.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, null !== (r = B.description.length) && void 0 !== r ? r : 0, "/1024")))), w.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-between tw-items-end"
                }, w.createElement("div", {
                    className: "tw-w-80"
                }, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Primary Style ", w.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), w.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: oe,
                    onChange: function(e) {
                        return ie(e.target.value)
                    }
                }, w.createElement("option", {
                    value: ""
                }, "Not Specified"), I.map(function(e) {
                    return w.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))), w.createElement("div", {
                    className: "tw-w-10"
                }, w.createElement(D.$n, {
                    className: "tw-w-full",
                    title: "Swap primary and secondary styles",
                    disabled: !oe && !ue,
                    onClick: function() {
                        var e = oe || "";
                        ie(ue || ""), de(e)
                    }
                }, w.createElement(D.M2, {
                    icon: ae.faRightLeft
                }))), w.createElement("div", {
                    className: "tw-w-80"
                }, (oe || ue) && w.createElement(w.Fragment, null, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Secondary Style ", w.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text"
                }, "(optional)")), w.createElement("select", {
                    className: "tw-w-full tw-rounded tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-border-r-8 tw-border-transparent",
                    value: ue,
                    onChange: function(e) {
                        return de(e.target.value)
                    }
                }, w.createElement("option", {
                    value: ""
                }, "Not Specified"), I.map(function(e) {
                    return w.createElement("option", {
                        key: null == e ? void 0 : e.id,
                        value: null == e ? void 0 : e.id
                    }, null == e ? void 0 : e.styleName)
                }))))), ut && w.createElement("span", {
                    className: "tw-text-sm tw-text-red tw-mt-2"
                }, "You must set a primary style in order to set a secondary style."), w.createElement("div", {
                    className: "tw-mr-5 tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-flex tw-flex-col"
                }, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Tags"), w.createElement("span", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "Tags help users discover your avatar more easily. You can add up to 10 custom tags for your avatar.")), w.createElement("div", {
                    className: "tw-flex tw-flex-row"
                }, w.createElement(D.pd, {
                    className: "tw-mb-0 tw-flex-grow",
                    type: "text",
                    placeholder: "Enter avatar tag",
                    onKeyUp: function(e) {
                        if ("Enter" === e.key) {
                            var t = "".concat(ke.w.AUTHOR).concat(e.target.value);
                            if (Ee.find(function(e) {
                                    return e === t
                                }) || 0 === Be.trim().length) return;
                            Ae([].concat((0, n.A)(Ee), [t])), _e("")
                        }
                    },
                    value: Be,
                    ref: Ke,
                    onChange: function(e) {
                        return _e(e.target.value)
                    },
                    maxLength: 64,
                    minLength: 1,
                    disabled: C.length >= 10
                }), w.createElement(D.$n, {
                    className: "tw-ml-2 tw-bg-button-bg tw-text-white tw-border-0 tw-p-2 tw-w-10 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    onClick: function() {
                        Ke.current.focus();
                        var e = "".concat(ke.w.AUTHOR).concat(Ke.current.value);
                        Ee.find(function(t) {
                            return t === e
                        }) || (Ae([].concat((0, n.A)(Ee), [e])), _e(""))
                    },
                    disabled: C.length >= 10 || 0 === Be.trim().length
                }, w.createElement(D.M2, {
                    icon: ne.QL
                }))), w.createElement("div", {
                    className: "tw-flex tw-gap-2 tw-mb-2 tw-flex-wrap"
                }, Ee.map(function(e) {
                    return w.createElement("div", {
                        key: e,
                        className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-flex-wrap tw-mt-2 tw-min-w-[115px] tw-w-fit tw-bg-[#0A0A0D] tw-rounded-md tw-py-2 tw-px-3"
                    }, w.createElement("span", null, e.replace(Fe, "")), w.createElement(D.M2, {
                        icon: re.GR,
                        className: "tw-ml-2 tw-cursor-pointer",
                        onClick: function() {
                            return Ae(Ee.filter(function(t) {
                                return t !== e
                            }))
                        }
                    }))
                })), w.createElement("div", null, w.createElement("label", {
                    className: "tw-mb-2"
                }, "Acknowledgements"), w.createElement("p", {
                    className: "tw-text-sm tw-text-placeholder-text tw-mb-2"
                }, "If you’ve used assets or work from other creators in your avatar,", w.createElement("span", {
                    className: "tw-text-link-highlight tw-cursor-pointer tw-select-none tw-block",
                    onClick: function() {
                        return ze(!Ge)
                    },
                    onKeyUp: function(e) {
                        return "Enter" === e.key && ze(!Ge)
                    }
                }, "please acknowledge them here ", w.createElement(D.M2, {
                    icon: Ge ? te.w2 : ee.Jt
                }))), w.createElement(D.TM, {
                    className: "tw-".concat(Ge ? "block" : "hidden", " tw-mb-2"),
                    styleOverride: {
                        height: "120px"
                    },
                    placeholder: "Acknowledgements",
                    value: null == B ? void 0 : B.acknowledgements,
                    onChange: function(e) {
                        _(je(je({}, B), {}, {
                            acknowledgements: e.target.value
                        })), Pe(!1)
                    },
                    maxLength: 2048,
                    minLength: 1
                }), w.createElement("div", {
                    className: "".concat(Ge ? "tw-flex" : "tw-hidden", "  tw-items-center tw-cursor-pointer tw-mt-3")
                }, w.createElement("input", {
                    id: "credits-checkbox",
                    type: "checkbox",
                    checked: Le,
                    onChange: function() {
                        return Pe(!Le)
                    },
                    value: "acknowledge",
                    className: "tw-mr-1 tw-w-7 tw-h-5 tw-text-link-highlight tw-bg-button-bg-grey tw-cursor-pointer tw-border-[#677079] tw-rounded tw-accent-link-highlight tw-ring-link-highlight"
                }), w.createElement("label", {
                    htmlFor: "credits-checkbox",
                    className: "tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                }, "I confirm that I have the necessary rights to use and distribute all the works mentioned here."))), w.createElement("hr", {
                    className: "tw-border-hr-line-color tw-border-y-2 tw-w-full tw-mb-6"
                }), w.createElement("div", {
                    className: "tw-flex tw-flex-col tw-mb-5"
                }, w.createElement("label", {
                    className: "tw-text-xl tw-font-bold tw-mb-3"
                }, "Content Warnings"), w.createElement("div", {
                    className: "tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2"
                }, Object.entries(ke.z).map(function(e) {
                    var t = (0, l.A)(e, 2),
                        r = t[0],
                        a = t[1];
                    return w.createElement("label", {
                        key: r,
                        className: "tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-white tw-cursor-pointer"
                    }, w.createElement("input", {
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
                })))))), w.createElement("div", {
                    className: "tw-".concat("gallery" === $ ? "flex" : "hidden", " tw-container tw-flex-col")
                }, w.createElement("h2", {
                    className: "heading"
                }, "Image Gallery"), w.createElement("p", {
                    className: "tw-mb-0"
                }, "Showcase your avatar with up to 6 images."), w.createElement("p", null, "Recommended resolution: 1920x1080px. Maximum file size: 1MB."), R && w.createElement("p", {
                    className: "tw-rounded-lg tw-bg-[#000] tw-px-5 tw-py-4 tw-flex tw-justify-between tw-items-center"
                }, "You can drag images to reorder them", w.createElement(D.M2, {
                    icon: Z.faXmark,
                    className: "tw-ml-2 tw-cursor-pointer",
                    onClick: function() {
                        return L(!1)
                    }
                })), !1 === G.pass && w.createElement(D.$T, {
                    type: "error",
                    title: "Failed to upload image",
                    message: null == G ? void 0 : G.message
                }), w.createElement(we, {
                    galleryId: c,
                    validationCallback: function(e) {
                        return z(e)
                    }
                })), w.createElement("div", {
                    className: "tw-flex tw-justify-between tw-mt-5"
                }, w.createElement("div", {
                    className: "tw-flex"
                }, w.createElement(D.$n, {
                    className: "tw-mr-2 tw-px-4",
                    onClick: function() {
                        lt(), s()
                    },
                    neutral: !0
                }, "Cancel"), w.createElement(D.$n, {
                    disabled: !p && !(null == E || !E.productId),
                    className: "tw-mr-2 tw-bg-red-600 tw-text-white tw-px-4",
                    onClick: function() {
                        return De(!0)
                    },
                    danger: !0
                }, "Delete Avatar")), w.createElement(D.$n, {
                    loading: et,
                    className: "tw-bg-button-bg tw-px-4",
                    onClick: function() {
                        return it()
                    },
                    disabled: dt
                }, "Save Changes"))))
            };
            var Te = {
                    productDetails: "Sell Your Avatar (1/2)",
                    productReviewSumbit: "Sell Your Avatar (2/2)",
                    productReviewSubmitted: null
                },
                Re = {
                    name: "118eoxb",
                    styles: "width:100%;@media (min-width: 576px){width:calc(50% - 0.5rem);}"
                },
                Le = (0, o.A)(D.fv, {
                    target: "e1blkums0"
                })({
                    name: "o33n1w",
                    styles: "flex:100;min-width:285px"
                });
            const Pe = function() {
                var e, t = (0, f.wA)(),
                    r = (0, v.g)().avatarId,
                    o = (0, b.a$)().user,
                    d = (0, b.Om)(),
                    A = (0, f.d4)(function(e) {
                        return e.productFlow
                    }).currentStep,
                    N = w.useState(null),
                    I = (0, l.A)(N, 2),
                    S = I[0],
                    C = I[1],
                    L = w.useState(!1),
                    P = (0, l.A)(L, 2),
                    V = P[0],
                    M = P[1],
                    G = w.useState(!1),
                    z = (0, l.A)(G, 2),
                    X = z[0],
                    W = z[1],
                    $ = (0, x.RR)({
                        avatarId: r
                    }),
                    q = $.data,
                    Y = $.isFetching,
                    H = $.isError,
                    B = $.error,
                    _ = $.refetch,
                    K = (0, F.vf)(null == q ? void 0 : q.authorId, {
                        skip: !r || !q || !(null != q && q.authorId)
                    }),
                    J = K.data,
                    Z = K.isFetching,
                    ee = K.isError,
                    te = K.error,
                    re = (0, E.w_)({
                        skip: !o
                    }),
                    ne = re.data,
                    ae = re.isLoading,
                    le = re.isSuccess,
                    oe = (null == q ? void 0 : q.authorId) === o.id,
                    ie = oe,
                    ce = (0, k.kV)({
                        avatarId: r
                    }, {
                        skip: !r
                    }),
                    se = ce.data,
                    ue = (ce.isFetching, ce.isError),
                    de = ce.error,
                    me = O({
                        userId: null == o ? void 0 : o.id,
                        forId: r,
                        forType: "avatar",
                        forAction: "wear"
                    }, {
                        skip: !o || !q || oe || "private" !== (null == q ? void 0 : q.releaseStatus)
                    }),
                    we = me.data,
                    fe = (me.isFetching, me.isError, me.error, (0, j.EG)({
                        listingId: null == q ? void 0 : q.productId
                    }, {
                        skip: !(null != q && q.productId) || (null == q ? void 0 : q.authorId) !== o.id
                    })),
                    ve = fe.data,
                    pe = fe.isFetching,
                    ge = (0, x.pl)(),
                    he = (0, l.A)(ge, 2),
                    be = he[0],
                    ye = he[1],
                    Ee = ye.isFetching,
                    xe = ye.isError,
                    ke = ye.error,
                    Ae = (0, x.vG)(),
                    Ne = (0, l.A)(Ae, 2),
                    Ie = Ne[0],
                    Se = Ne[1],
                    Ce = Se.isError,
                    Oe = Se.error,
                    je = Se.isSuccess,
                    Fe = (0, x.GP)(),
                    Ue = (0, l.A)(Fe, 2),
                    Pe = Ue[0],
                    Ve = Ue[1],
                    Me = Ve.isLoading,
                    Ge = Ve.isError,
                    ze = Ve.error,
                    Xe = Ve.isSuccess,
                    We = (0, x.oV)(),
                    $e = (0, l.A)(We, 2),
                    qe = $e[0],
                    Ye = $e[1],
                    He = Ye.isLoading,
                    Be = Ye.isError,
                    _e = Ye.error,
                    Ke = Ye.isSuccess,
                    Qe = (0, b.d7)(S, 1400),
                    Je = Y || Z,
                    Ze = H || ee || ue || xe || Ge || Be || Ce,
                    et = B || te || de || ke || ze || _e || Oe,
                    tt = (0, w.useMemo)(function() {
                        return !(ae || !le) && (null == ne ? void 0 : ne.includes("permission-sell-avatar-products"))
                    }, [ae]);
                w.useEffect(function() {
                    null != q && q.id && C(q.tags)
                }, [q]), w.useEffect(function() {
                    if (null != q && q.id && Qe) {
                        var e = new Set(q.tags);
                        Qe.length === q.tags.length && Qe.every(function(t) {
                            return e.has(t)
                        }) || Ie({
                            avatarId: q.id,
                            tags: Qe
                        })
                    }
                }, [Qe]), w.useEffect(function() {
                    Xe && (t((0, h.X)({
                        title: "Changed Avatars!",
                        icon: c.yV,
                        message: "You have successfully changed avatars!",
                        color: "success",
                        timeout: 5e3
                    })), t((0, h.X)({
                        title: "Restart to See Your New Avatar!",
                        icon: u.VH,
                        message: "Due to a technical issue on our end, if you are currently in-world your change will take effect when you restart VRChat. Changing using OSC applications or from within VRChat works as normal. We are working on a fix!",
                        color: "warning",
                        timeout: 3e4
                    })))
                }, [Xe]), w.useEffect(function() {
                    Ke && (t((0, h.X)({
                        title: "Changed Fallback Avatars!",
                        icon: c.yV,
                        message: "You have successfully changed fallback avatars!",
                        color: "success",
                        timeout: 5e3
                    })), t((0, h.X)({
                        title: "Restart to See Your New Fallback Avatar!",
                        icon: u.VH,
                        message: "Due to a technical issue on our end, if you are currently in-world your change will take effect when you restart VRChat. Changing using OSC applications or from within VRChat works as normal. We are working on a fix!",
                        color: "warning",
                        timeout: 3e4
                    })))
                }, [Ke]), w.useEffect(function() {
                    je && t((0, h.X)({
                        title: "Content Warnings Updated",
                        icon: s.KT,
                        message: "You have successfully updated the content warnings for ".concat(null != q && q.name ? "avatar: ".concat(q.name) : "this avatar"),
                        color: "success",
                        timeout: 7e3
                    }))
                }, [je]);
                var rt, nt = w.useMemo(function() {
                        return (null != se ? se : []).map(function(e) {
                            return {
                                fileId: e.id,
                                fileVersion: e.latestVersionFile.version,
                                order: null == e ? void 0 : e.order
                            }
                        })
                    }, [se]),
                    at = function() {
                        var e = (0, a.A)(m().mark(function e() {
                            var n, a, l, o, i;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Pe({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, h.X)({
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
                    lt = function() {
                        var e = (0, a.A)(m().mark(function e() {
                            var n, a, l, o, i;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, qe({
                                            avatarId: r
                                        });
                                    case 2:
                                        (n = e.sent).error && (i = "string" == typeof(null == n || null === (a = n.error) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.error) ? null == n || null === (l = n.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error : null == n || null === (o = n.error) || void 0 === o || null === (o = o.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message, t((0, h.X)({
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
                    ot = function() {
                        var e = (0, a.A)(m().mark(function e(n) {
                            var a, l, o, c, s;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, be({
                                            avatarId: r,
                                            data: {
                                                releaseStatus: n
                                            }
                                        });
                                    case 2:
                                        (a = e.sent).error && (s = "string" == typeof(null == a || null === (l = a.error) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.error) ? null == a || null === (o = a.error) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error : null == a || null === (c = a.error) || void 0 === c || null === (c = c.data) || void 0 === c || null === (c = c.error) || void 0 === c ? void 0 : c.message, t((0, h.X)({
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
                if (H) return w.createElement(p.A, null, w.createElement(D.Qc, null, "Avatar"), w.createElement(D.$T, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, (null == B || null === (rt = B.data) || void 0 === rt || null === (rt = rt.error) || void 0 === rt ? void 0 : rt.message) || "There was an error loading the avatar."));
                if (!q || Je && !q) return w.createElement(p.A, null, w.createElement(D.Qc, null, "Avatar"), w.createElement(T.A, {
                    loading: !0
                }));
                var it, ct = "";
                Ze && (ct = w.createElement(D.fI, null, w.createElement(g.A, {
                    color: "warning"
                }, null == et || null === (it = et.data) || void 0 === it ? void 0 : it.error.message)));
                var st = function() {
                        var e = (0, a.A)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, U.xl)(q));
                                    case 2:
                                        return e.next = 4, t((0, U.kU)("avatar"));
                                    case 4:
                                        return e.next = 6, t((0, U.EY)("productDetails"));
                                    case 6:
                                        return e.next = 8, t((0, U.GS)(!0));
                                    case 8:
                                        W(!0);
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
                    ut = function() {
                        W(!1), t((0, U.f6)())
                    };
                return w.createElement(p.A, null, w.createElement(D.Qc, null, null !== (e = q.name) && void 0 !== e ? e : "Avatar"), ct, ie && w.createElement(De, {
                    isOpen: V,
                    onCloseCallback: function() {
                        return M(!1)
                    },
                    avatarId: q.id
                }), w.createElement(y.default, {
                    avatar: q,
                    user: J,
                    galleryImages: nt,
                    licenses: we,
                    isAvatarSold: ve,
                    isAvatarSoldFetching: pe,
                    isSelectAvatarLoading: Me,
                    isSelectFallbackLoading: He,
                    isUpdateAvatarFetching: Ee,
                    hasAvatarSellerPermission: tt,
                    onEdit: function() {
                        return M(!0)
                    },
                    onSelectFallback: lt,
                    onSelectAvatar: at,
                    onSellAvatar: st,
                    onSetAvatarReleaseStatus: ot
                }), (oe || d) && w.createElement(D.fI, {
                    className: "tw-mb-3"
                }, w.createElement(Le, null, w.createElement(D.N3, null, w.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Content Warnings")), w.createElement(D.BW, null, w.createElement(D.fI, {
                    className: "tw-w-full tw-flex-wrap tw-py-2 tw-gap-3"
                }, w.createElement(D.RF, {
                    tags: S,
                    isMod: d,
                    onSelectValues: function(e) {
                        C(function(t) {
                            return (0, n.A)(new Set([].concat((0, n.A)(t), (0, n.A)(e))))
                        })
                    },
                    onRemoveValue: function(e) {
                        C(function(t) {
                            return t.filter(function(t) {
                                return t !== e
                            })
                        })
                    },
                    styleOverrides: Re
                }))))), (oe || d) && w.createElement(D.fI, {
                    className: "tw-mb-3"
                }, w.createElement("div", null, w.createElement(D.N3, null, w.createElement("h4", {
                    className: "tw-font-normal tw-mb-0"
                }, "Impostors")), w.createElement(D.BW, {
                    className: "tw-block"
                }, w.createElement(D.fI, {
                    className: "tw-mb-2"
                }, w.createElement(Q, {
                    avatar: q,
                    refetch: _
                }))))), !1, !1, w.createElement(D.aF, {
                    title: Te[A] || null,
                    isVisible: X,
                    onClose: ut,
                    width: "100%",
                    slim: !0,
                    centered: !1,
                    overflow: "auto",
                    disableBackdropClick: !0,
                    className: "tw-bg-black"
                }, w.createElement(R.A, {
                    onClose: ut
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
//# sourceMappingURL=4d1f326ba2ba8265bf955edede4d339a657ae13e4957d3107d595e6c9d0a1a81.js.map