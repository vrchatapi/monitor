"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9923], {
        59923: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(54546),
                a = n(4942),
                i = n(4965),
                o = n(92481),
                l = n(46357),
                c = n(7503),
                s = n(67294),
                u = n(79655),
                d = n(93261),
                m = n(61509).S.injectEndpoints({
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
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Instance"]
                }),
                f = m.useGetInstanceQuery;
            var p = n(16278),
                g = n(1208),
                h = n(12227),
                v = n(64358),
                b = n(73170),
                y = n(34226),
                w = n(22202),
                x = n(80873);
            const E = function(e) {
                var t = e.className,
                    n = e.userId,
                    r = (0, w.IB)().data,
                    a = (0, x.t4)().friends,
                    i = s.useMemo((function() {
                        return null == a ? void 0 : a.find((function(e) {
                            return e.id === n
                        }))
                    }), [a, n]);
                if (!i) return null;
                var o = (0, v.Je)({
                        user: i,
                        currentUser: r
                    }),
                    l = o.profilePicUrl,
                    c = o.userStatus,
                    u = o.userStatusLabel,
                    d = o.userActivity,
                    m = o.isInActive;
                return s.createElement(I, {
                    className: t,
                    to: "/home/user/".concat(n)
                }, s.createElement(k, null, s.createElement(N, {
                    src: l
                }), s.createElement(O, {
                    url: l
                })), s.createElement(y.X2, {
                    className: "align-items-center mt-2"
                }, s.createElement(y.Cl, {
                    status: c,
                    isInActive: m,
                    title: "".concat(u, " ").concat(d && "- ".concat(d))
                }), s.createElement(Z, {
                    to: "/home/user/".concat(n)
                }, i.displayName)))
            };
            var I = (0, i.Z)(u.rU, {
                    target: "e1cyfi884"
                })({
                    name: "1c3vkb7",
                    styles: "display:flex;flex-direction:column;border-radius:8px;background-color:#252a30;padding:0.5rem;margin:0.5rem;border:3px solid hsla(0, 0%, 90%, 0.1);transition:border-color 250ms ease;cursor:pointer;&:hover{border-color:#054d5e;text-decoration:none!important;}"
                }),
                k = (0, i.Z)("div", {
                    target: "e1cyfi883"
                })({
                    name: "5o18ri",
                    styles: "display:flex;align-items:center;align-self:center;justify-content:center;width:128px;height:74px;position:relative;overflow:hidden;border-radius:6px"
                }),
                N = (0, i.Z)("img", {
                    target: "e1cyfi882"
                })({
                    name: "188plvy",
                    styles: "z-index:2;height:74px"
                }),
                O = (0, i.Z)("div", {
                    target: "e1cyfi881"
                })("z-index:1;width:calc(100% + 40px);height:calc(100% + 40px);position:absolute;top:-20px;left:-20px;background-size:cover;background-position:center center;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");filter:blur(20px);"),
                Z = (0, i.Z)("div", {
                    target: "e1cyfi880"
                })({
                    name: "1flj9lk",
                    styles: "text-align:left"
                });

            function j(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return S(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
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
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const U = function(e) {
                var t, n, a, i, m, b, w, x, I = e.location,
                    k = e.className,
                    N = e.currentGroup,
                    O = f({
                        location: I.location
                    }, {
                        skip: I.id
                    }),
                    Z = O.data,
                    S = O.isLoading,
                    z = s.useMemo((function() {
                        return P(P(P({}, I), Z), {}, {
                            users: I.users
                        })
                    }), [I, Z]),
                    U = (0, g.Vw)({
                        worldId: z.worldId
                    }, {
                        skip: S || z.world
                    }),
                    A = U.data,
                    C = U.isLoading,
                    X = (null == z ? void 0 : z.world) || A,
                    J = (0, p.g)(),
                    B = (0, r.Z)(J, 2),
                    V = B[0],
                    _ = B[1],
                    Q = _.isLoading,
                    W = _.isSuccess,
                    H = _.reset,
                    K = (0, d.nz)(),
                    Y = (0, r.Z)(K, 2),
                    ee = Y[0],
                    te = Y[1].data,
                    ne = s.useState(!1),
                    re = (0, r.Z)(ne, 2),
                    ae = re[0],
                    ie = re[1],
                    oe = s.useRef(null),
                    le = s.useState(null),
                    ce = (0, r.Z)(le, 2),
                    se = ce[0],
                    ue = ce[1],
                    de = s.useState(null),
                    me = (0, r.Z)(de, 2),
                    fe = me[0],
                    pe = me[1],
                    ge = S || C;
                s.useEffect((function() {
                    ue((0, v.aF)(z.instanceId)), pe((0, h.uP)(z.instanceId))
                }), [z]), s.useEffect((function() {
                    if (!("Group" !== se && "Group+" !== se && "Group Public" !== se || te || N)) {
                        var e = (0, h.Oc)(z.instanceId);
                        ee({
                            groupId: e
                        })
                    }
                }), [z, se]);
                var he = s.useMemo((function() {
                    try {
                        return new ResizeObserver((function(e) {
                            if (oe.current) {
                                var t, n = j(e);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var r = t.value;
                                        r.target === oe.current && ie(r.contentRect.width < 600)
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                        }))
                    } catch (e) {
                        console.warn("ResizeObserver is not supported on this platform")
                    }
                    return null
                }), [oe]);
                s.useEffect((function() {
                    return oe.current && he && he.observe(oe.current),
                        function() {
                            null != oe && oe.current && he && he.unobserve(null == oe ? void 0 : oe.current)
                        }
                }), [oe, he]), s.useEffect((function() {
                    W && setTimeout(H, 3e3)
                }), [W, H]);
                var ve = !(!te && !N),
                    be = (null === (t = z.users) || void 0 === t ? void 0 : t.length) > 0;
                return s.createElement(y.JX, {
                    className: k,
                    ref: oe
                }, s.createElement(y.oI, {
                    style: be ? {} : {
                        borderRadius: 8,
                        borderBottomWidth: 3
                    }
                }, s.createElement(M, {
                    className: "flex-grow-1",
                    compact: ae
                }, s.createElement(G, {
                    compact: ae
                }, ge ? s.createElement(y.UU, {
                    width: "100%",
                    height: "100%"
                }) : s.createElement(R, {
                    src: (0, v.cq)(X)
                })), s.createElement(y.JX, {
                    className: "align-items-start flex-grow-1"
                }, ge ? s.createElement(y.UU, {
                    width: "100%",
                    height: "20px"
                }) : s.createElement(u.rU, {
                    to: "/home/launch?worldId=".concat(null !== (n = z.worldId) && void 0 !== n ? n : z.world.id, "&instanceId=").concat(z.instanceId)
                }, s.createElement(T, null, (null == X ? void 0 : X.name) || (null !== (a = z.worldId) && void 0 !== a ? a : z.world.id))), s.createElement($, {
                    className: "mt-2 flex-grow-1"
                }, ge ? s.createElement(y.UU, {
                    width: "100%",
                    height: "200px"
                }) : X ? X.description : s.createElement("em", null, "Failed to load world information")), s.createElement(y.X2, {
                    className: "algin-self-end w-100 d-flex flex-wrap"
                }, s.createElement(D, {
                    className: "align-self-end me-2 align-items-center mt-1"
                }, s.createElement(F, {
                    className: "me-2",
                    region: fe,
                    imageSize: "20px"
                }), s.createElement("div", null, se)), ve && s.createElement(D, {
                    className: "align-self-end me-2 align-items-center text-nowrap mt-1"
                }, s.createElement(u.rU, {
                    to: "/home/group/".concat(null !== (i = null == te ? void 0 : te.id) && void 0 !== i ? i : null == N ? void 0 : N.id)
                }, null !== (m = null == te ? void 0 : te.name) && void 0 !== m ? m : null == N ? void 0 : N.name)), !!z.memberCount && s.createElement(D, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of group members in the Instance"
                }, z.memberCount, s.createElement(y.$1, {
                    icon: c.Z,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !!z.userCount && s.createElement(D, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of users in the Instance"
                }, z.userCount, s.createElement(y.$1, {
                    icon: l.FV,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !(null === (b = z.users) || void 0 === b || !b.length) && s.createElement(D, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of friends in the Instance"
                }, null === (w = z.users) || void 0 === w ? void 0 : w.length, s.createElement(y.$1, {
                    icon: o.r$,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), s.createElement(y.zx, {
                    className: "align-self-end mt-1",
                    containerStyles: q,
                    "aria-label": "Invite Me",
                    onClick: function() {
                        V({
                            worldId: z.worldId,
                            instanceId: z.instanceId
                        })
                    },
                    loading: Q,
                    positive: W
                }, W ? "Invited!" : "Invite Me"))))), be && s.createElement(y.Ao, null, s.createElement(L, null, null === (x = z.users) || void 0 === x ? void 0 : x.map((function(e) {
                    return s.createElement(E, {
                        key: e,
                        userId: e,
                        className: "mx-1 my-1"
                    })
                })))))
            };
            var A = {
                    name: "soeo3h",
                    styles: "flex-direction:column;@media (min-width: 576px){flex-direction:row;}"
                },
                C = {
                    name: "qdeacm",
                    styles: "flex-direction:column"
                },
                M = (0, i.Z)(y.X2, {
                    shouldForwardProp: function(e) {
                        return "compact" !== e
                    },
                    target: "e1p8e5dk7"
                })("flex-grow:1;", (function(e) {
                    return e.compact ? C : A
                }), ";"),
                X = {
                    name: "1fx7pte",
                    styles: "padding-top:0;height:auto;width:256px;height:192px;margin-bottom:0;margin-right:1rem"
                },
                G = (0, i.Z)("div", {
                    target: "e1p8e5dk6"
                })("padding-top:75%;height:0;overflow:hidden;border-radius:8px;position:relative;display:flex;flex-shrink:0;margin-bottom:0.5rem;margin-right:0;@media (min-width: 768px){", (function(e) {
                    return e.compact ? "" : X
                }), ";}"),
                R = (0, i.Z)("img", {
                    target: "e1p8e5dk5"
                })({
                    name: "c07466",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:0;border-radius:8px"
                }),
                T = (0, i.Z)("h4", {
                    target: "e1p8e5dk4"
                })({
                    name: "19c5ic6",
                    styles: "font-size:1.2em;margin-top:0.25rem;margin-bottom:0;color:#fff;&:hover{color:var(--bs-primary);}"
                }),
                $ = (0, i.Z)("div", {
                    target: "e1p8e5dk3"
                })({
                    name: "23btei",
                    styles: "color:#8f8f8d;font-size:0.95rem"
                }),
                q = {
                    name: "1k72zkj",
                    styles: "flex:1;min-width:85px"
                },
                D = (0, i.Z)(y.X2, {
                    target: "e1p8e5dk2"
                })({
                    name: "ghp7vg",
                    styles: "border-radius:4px;background-color:#181b1f;padding:7px 1rem"
                }),
                F = (0, i.Z)(b.Z, {
                    target: "e1p8e5dk1"
                })({
                    name: "zner0g",
                    styles: "display:block!important;& img{display:block;max-width:unset;}"
                }),
                L = (0, i.Z)("div", {
                    target: "e1p8e5dk0"
                })({
                    name: "5kov97",
                    styles: "display:flex;flex-wrap:wrap"
                })
        }
    }
]);
//# sourceMappingURL=b301a2dbbe76b7a4a58aedb789b97c56afbe5b5873cfb6aff30d13a2c60de28f.js.map