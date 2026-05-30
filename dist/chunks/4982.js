"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4982], {
        14982(e, t, n) {
            n.d(t, {
                A: () => C
            });
            var r = n(15902),
                a = n(64467),
                i = n(70129),
                o = n(66089),
                l = n(39281),
                c = n(75909),
                s = n(96540),
                u = n(84976),
                d = n(13951),
                m = n(40085),
                f = n(44877),
                p = n(56288),
                g = n(60188),
                h = n(74303),
                v = n(91069),
                y = n(69147),
                b = n(26577),
                w = n(15033),
                x = n(194);
            const E = function(e) {
                var t = e.className,
                    n = e.userId,
                    r = (0, d.p$)().data,
                    a = (0, x.Hj)().friends,
                    i = s.useMemo(function() {
                        return null == a ? void 0 : a.find(function(e) {
                            return e.id === n
                        })
                    }, [a, n]);
                if (!i) return null;
                var o = (0, v.gm)({
                        user: i,
                        currentUser: r
                    }),
                    l = o.profilePicUrl,
                    c = o.userStatus,
                    u = o.userStatusLabel,
                    m = o.userActivity,
                    f = o.isInActive;
                return s.createElement(I, {
                    className: t,
                    to: "/home/user/".concat(n)
                }, s.createElement(A, null, s.createElement(N, {
                    src: l
                }), s.createElement(k, {
                    url: l
                })), s.createElement(w.fI, {
                    className: "align-items-center mt-2"
                }, s.createElement(w.uc, {
                    status: c,
                    isInActive: f,
                    title: "".concat(u, " ").concat(m && "- ".concat(m))
                }), s.createElement(O, {
                    to: "/home/user/".concat(n)
                }, i.displayName)))
            };
            var I = (0, i.A)(u.N_, {
                    target: "e1cyfi884"
                })({
                    name: "1c3vkb7",
                    styles: "display:flex;flex-direction:column;border-radius:8px;background-color:#252a30;padding:0.5rem;margin:0.5rem;border:3px solid hsla(0, 0%, 90%, 0.1);transition:border-color 250ms ease;cursor:pointer;&:hover{border-color:#054d5e;text-decoration:none!important;}"
                }),
                A = (0, i.A)("div", {
                    target: "e1cyfi883"
                })({
                    name: "5o18ri",
                    styles: "display:flex;align-items:center;align-self:center;justify-content:center;width:128px;height:74px;position:relative;overflow:hidden;border-radius:6px"
                }),
                N = (0, i.A)("img", {
                    target: "e1cyfi882"
                })({
                    name: "188plvy",
                    styles: "z-index:2;height:74px"
                }),
                k = (0, i.A)("div", {
                    target: "e1cyfi881"
                })("z-index:1;width:calc(100% + 40px);height:calc(100% + 40px);position:absolute;top:-20px;left:-20px;background-size:cover;background-position:center center;background-repeat:no-repeat;background-image:url(", function(e) {
                    return e.url
                }, ");filter:blur(20px);"),
                O = (0, i.A)("div", {
                    target: "e1cyfi880"
                })({
                    name: "1flj9lk",
                    styles: "text-align:left"
                });

            function j(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return S(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
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
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        l = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach(function(t) {
                        (0, a.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const C = function(e) {
                var t, n, a, i, b, x, I, A, N = e.location,
                    k = e.className,
                    O = e.currentGroup,
                    S = (0, f.Bi)({
                        location: N.location
                    }, {
                        skip: N.id
                    }),
                    z = S.data,
                    C = S.isLoading,
                    M = s.useMemo(function() {
                        return P(P(P({}, N), z), {}, {
                            users: N.users
                        })
                    }, [N, z]),
                    R = (0, d.p$)().data,
                    B = (0, g.Ed)({
                        worldId: M.worldId
                    }, {
                        skip: C || M.world
                    }),
                    H = B.data,
                    Q = B.isLoading,
                    V = (null == M ? void 0 : M.world) || H,
                    W = (0, p.h)(),
                    J = (0, r.A)(W, 2),
                    K = J[0],
                    X = J[1],
                    Y = X.isLoading,
                    Z = X.isSuccess,
                    ee = X.reset,
                    te = (0, m.Rh)(),
                    ne = (0, r.A)(te, 2),
                    re = ne[0],
                    ae = ne[1].data,
                    ie = s.useState(!1),
                    oe = (0, r.A)(ie, 2),
                    le = oe[0],
                    ce = oe[1],
                    se = s.useRef(null),
                    ue = s.useState(null),
                    de = (0, r.A)(ue, 2),
                    me = de[0],
                    fe = de[1],
                    pe = s.useState(null),
                    ge = (0, r.A)(pe, 2),
                    he = ge[0],
                    ve = ge[1],
                    ye = C || Q;
                s.useEffect(function() {
                    fe((0, v.e2)(M.instanceId)), ve((0, h.C6)(M.instanceId))
                }, [M]), s.useEffect(function() {
                    if (!("Group" !== me && "Group+" !== me && "Group Public" !== me || ae || O)) {
                        var e = (0, h.oH)(M.instanceId);
                        re({
                            groupId: e
                        })
                    }
                }, [M, me]);
                var be = s.useMemo(function() {
                    try {
                        return new ResizeObserver(function(e) {
                            if (se.current) {
                                var t, n = j(e);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var r = t.value;
                                        r.target === se.current && ce(r.contentRect.width < 600)
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                        })
                    } catch (e) {
                        console.warn("ResizeObserver is not supported on this platform")
                    }
                    return null
                }, [se]);
                s.useEffect(function() {
                    return se.current && be && be.observe(se.current),
                        function() {
                            null != se && se.current && be && be.unobserve(null == se ? void 0 : se.current)
                        }
                }, [se, be]), s.useEffect(function() {
                    Z && setTimeout(ee, 3e3)
                }, [Z, ee]);
                var we = !(!ae && !O),
                    xe = (null === (t = M.users) || void 0 === t ? void 0 : t.length) > 0,
                    Ee = (0, h.fB)(R, M.instanceId);
                return s.createElement(w.fv, {
                    className: k,
                    ref: se
                }, s.createElement(w.N3, {
                    style: xe ? {} : {
                        borderRadius: 8,
                        borderBottomWidth: 3
                    }
                }, s.createElement(q, {
                    className: "flex-grow-1",
                    compact: le
                }, s.createElement(G, {
                    compact: le
                }, ye ? s.createElement(w.fy, {
                    width: "100%",
                    height: "100%"
                }) : s.createElement(T, {
                    src: (0, v.C_)(V)
                })), s.createElement(w.fv, {
                    className: "align-items-start flex-grow-1"
                }, ye ? s.createElement(w.fy, {
                    width: "100%",
                    height: "20px"
                }) : s.createElement(u.N_, {
                    to: "/home/launch?worldId=".concat(null !== (n = M.worldId) && void 0 !== n ? n : M.world.id, "&instanceId=").concat(M.instanceId)
                }, s.createElement(_, null, (null == V ? void 0 : V.name) || (null !== (a = M.worldId) && void 0 !== a ? a : M.world.id))), s.createElement(D, {
                    className: "mt-2 flex-grow-1"
                }, ye ? s.createElement(w.fy, {
                    width: "100%",
                    height: "200px"
                }) : V ? V.description : s.createElement("em", null, "Failed to load world information")), s.createElement(w.fI, {
                    className: "algin-self-end w-100 d-flex flex-wrap"
                }, !!M.ageGate && s.createElement($, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Age Verification Required"
                }, s.createElement(y.A, {
                    imageSize: "24px"
                })), s.createElement($, {
                    className: "align-self-end me-2 align-items-center mt-1"
                }, s.createElement(U, {
                    className: "me-2",
                    region: he,
                    imageSize: "20px"
                }), s.createElement("div", null, me)), we && s.createElement($, {
                    className: "align-self-end me-2 align-items-center text-nowrap mt-1"
                }, s.createElement(u.N_, {
                    to: "/home/group/".concat(null !== (i = null == ae ? void 0 : ae.id) && void 0 !== i ? i : null == O ? void 0 : O.id)
                }, null !== (b = null == ae ? void 0 : ae.name) && void 0 !== b ? b : null == O ? void 0 : O.name)), !!M.memberCount && s.createElement($, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of group members in the Instance"
                }, M.memberCount, s.createElement(w.M2, {
                    icon: c.default,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !!M.userCount && s.createElement($, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of users in the Instance"
                }, M.userCount, s.createElement(w.M2, {
                    icon: l.gd,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !(null === (x = M.users) || void 0 === x || !x.length) && s.createElement($, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of friends in the Instance"
                }, null === (I = M.users) || void 0 === I ? void 0 : I.length, s.createElement(w.M2, {
                    icon: o.O2,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), s.createElement(w.$n, {
                    className: "align-self-end mt-1",
                    containerStyles: L,
                    "aria-label": "Invite Me",
                    onClick: function() {
                        K({
                            worldId: M.worldId,
                            instanceId: M.instanceId
                        })
                    },
                    loading: Y,
                    positive: Z,
                    disabled: Ee
                }, Ee ? "Age Verification Required (18+)" : Z ? "Invited!" : "Invite Me"))))), xe && s.createElement(w.BW, null, s.createElement(F, null, null === (A = M.users) || void 0 === A ? void 0 : A.map(function(e) {
                    return s.createElement(E, {
                        key: e,
                        userId: e,
                        className: "mx-1 my-1"
                    })
                }))))
            };
            var M = {
                    name: "soeo3h",
                    styles: "flex-direction:column;@media (min-width: 576px){flex-direction:row;}"
                },
                R = {
                    name: "qdeacm",
                    styles: "flex-direction:column"
                },
                q = (0, i.A)(w.fI, {
                    shouldForwardProp: function(e) {
                        return "compact" !== e
                    },
                    target: "e1p8e5dk7"
                })("flex-grow:1;", function(e) {
                    return e.compact ? R : M
                }, ";"),
                B = {
                    name: "1fx7pte",
                    styles: "padding-top:0;height:auto;width:256px;height:192px;margin-bottom:0;margin-right:1rem"
                },
                G = (0, i.A)("div", {
                    target: "e1p8e5dk6"
                })("padding-top:75%;height:0;overflow:hidden;border-radius:8px;position:relative;display:flex;flex-shrink:0;margin-bottom:0.5rem;margin-right:0;@media (min-width: 768px){", function(e) {
                    return e.compact ? "" : B
                }, ";}"),
                T = (0, i.A)("img", {
                    target: "e1p8e5dk5"
                })({
                    name: "c07466",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px"
                }),
                _ = (0, i.A)("h4", {
                    target: "e1p8e5dk4"
                })({
                    name: "19c5ic6",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;color:#fff;&:hover{color:var(--bs-primary);}"
                }),
                D = (0, i.A)("div", {
                    target: "e1p8e5dk3"
                })({
                    name: "23btei",
                    styles: "color:#8f8f8d;font-size:0.95rem"
                }),
                L = {
                    name: "1k72zkj",
                    styles: "flex:1;min-width:85px"
                },
                $ = (0, i.A)(w.fI, {
                    target: "e1p8e5dk2"
                })({
                    name: "ghp7vg",
                    styles: "border-radius:4px;background-color:#181b1f;padding:7px 1rem"
                }),
                U = (0, i.A)(b.A, {
                    target: "e1p8e5dk1"
                })({
                    name: "zner0g",
                    styles: "display:block!important;& img{display:block;max-width:unset;}"
                }),
                F = (0, i.A)("div", {
                    target: "e1p8e5dk0"
                })({
                    name: "5kov97",
                    styles: "display:flex;flex-wrap:wrap"
                })
        },
        44877(e, t, n) {
            n.d(t, {
                Bi: () => a,
                jp: () => i
            });
            var r = n(89483).m.injectEndpoints({
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
                a = r.useGetInstanceQuery,
                i = r.useGetInstanceByShortNameQuery
        }
    }
]);
//# sourceMappingURL=adc07f78368c3e066982fa25027819f58f87007c7652105f9e08044454bc6096.js.map