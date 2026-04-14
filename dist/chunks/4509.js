"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4509], {
        64509: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(54546),
                a = n(4942),
                i = n(4965),
                o = n(92481),
                l = n(46357),
                c = n(7503),
                s = n(67294),
                u = n(79655),
                d = n(22202),
                m = n(93261),
                f = n(87343),
                p = n(16278),
                g = n(1208),
                h = n(12227),
                v = n(64358),
                y = n(90924),
                b = n(73170),
                w = n(80988),
                x = n(83807);
            const E = function(e) {
                var t = e.className,
                    n = e.userId,
                    r = (0, d.IB)().data,
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
                    m = o.userActivity,
                    f = o.isInActive;
                return s.createElement(I, {
                    className: t,
                    to: "/home/user/".concat(n)
                }, s.createElement(k, null, s.createElement(N, {
                    src: l
                }), s.createElement(O, {
                    url: l
                })), s.createElement(w.X2, {
                    className: "align-items-center mt-2"
                }, s.createElement(w.Cl, {
                    status: c,
                    isInActive: f,
                    title: "".concat(u, " ").concat(m && "- ".concat(m))
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

            function S(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return j(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
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

            function j(e, t) {
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
            const A = function(e) {
                var t, n, a, i, b, x, I, k, N = e.location,
                    O = e.className,
                    Z = e.currentGroup,
                    j = (0, f.kt)({
                        location: N.location
                    }, {
                        skip: N.id
                    }),
                    z = j.data,
                    A = j.isLoading,
                    U = s.useMemo((function() {
                        return P(P(P({}, N), z), {}, {
                            users: N.users
                        })
                    }), [N, z]),
                    C = (0, d.IB)().data,
                    G = (0, g.Vw)({
                        worldId: U.worldId
                    }, {
                        skip: A || U.world
                    }),
                    D = G.data,
                    V = G.isLoading,
                    J = (null == U ? void 0 : U.world) || D,
                    Q = (0, p.g)(),
                    _ = (0, r.Z)(Q, 2),
                    W = _[0],
                    H = _[1],
                    K = H.isLoading,
                    Y = H.isSuccess,
                    ee = H.reset,
                    te = (0, m.nz)(),
                    ne = (0, r.Z)(te, 2),
                    re = ne[0],
                    ae = ne[1].data,
                    ie = s.useState(!1),
                    oe = (0, r.Z)(ie, 2),
                    le = oe[0],
                    ce = oe[1],
                    se = s.useRef(null),
                    ue = s.useState(null),
                    de = (0, r.Z)(ue, 2),
                    me = de[0],
                    fe = de[1],
                    pe = s.useState(null),
                    ge = (0, r.Z)(pe, 2),
                    he = ge[0],
                    ve = ge[1],
                    ye = A || V;
                s.useEffect((function() {
                    fe((0, v.aF)(U.instanceId)), ve((0, h.uP)(U.instanceId))
                }), [U]), s.useEffect((function() {
                    if (!("Group" !== me && "Group+" !== me && "Group Public" !== me || ae || Z)) {
                        var e = (0, h.Oc)(U.instanceId);
                        re({
                            groupId: e
                        })
                    }
                }), [U, me]);
                var be = s.useMemo((function() {
                    try {
                        return new ResizeObserver((function(e) {
                            if (se.current) {
                                var t, n = S(e);
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
                        }))
                    } catch (e) {
                        console.warn("ResizeObserver is not supported on this platform")
                    }
                    return null
                }), [se]);
                s.useEffect((function() {
                    return se.current && be && be.observe(se.current),
                        function() {
                            null != se && se.current && be && be.unobserve(null == se ? void 0 : se.current)
                        }
                }), [se, be]), s.useEffect((function() {
                    Y && setTimeout(ee, 3e3)
                }), [Y, ee]);
                var we = !(!ae && !Z),
                    xe = (null === (t = U.users) || void 0 === t ? void 0 : t.length) > 0,
                    Ee = (0, h.PF)(C, U.instanceId);
                return s.createElement(w.JX, {
                    className: O,
                    ref: se
                }, s.createElement(w.oI, {
                    style: xe ? {} : {
                        borderRadius: 8,
                        borderBottomWidth: 3
                    }
                }, s.createElement(q, {
                    className: "flex-grow-1",
                    compact: le
                }, s.createElement(R, {
                    compact: le
                }, ye ? s.createElement(w.UU, {
                    width: "100%",
                    height: "100%"
                }) : s.createElement(M, {
                    src: (0, v.cq)(J)
                })), s.createElement(w.JX, {
                    className: "align-items-start flex-grow-1"
                }, ye ? s.createElement(w.UU, {
                    width: "100%",
                    height: "20px"
                }) : s.createElement(u.rU, {
                    to: "/home/launch?worldId=".concat(null !== (n = U.worldId) && void 0 !== n ? n : U.world.id, "&instanceId=").concat(U.instanceId)
                }, s.createElement(T, null, (null == J ? void 0 : J.name) || (null !== (a = U.worldId) && void 0 !== a ? a : U.world.id))), s.createElement(X, {
                    className: "mt-2 flex-grow-1"
                }, ye ? s.createElement(w.UU, {
                    width: "100%",
                    height: "200px"
                }) : J ? J.description : s.createElement("em", null, "Failed to load world information")), s.createElement(w.X2, {
                    className: "algin-self-end w-100 d-flex flex-wrap"
                }, !!U.ageGate && s.createElement(F, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Age Verification Required"
                }, s.createElement(y.Z, {
                    imageSize: "24px"
                })), s.createElement(F, {
                    className: "align-self-end me-2 align-items-center mt-1"
                }, s.createElement(L, {
                    className: "me-2",
                    region: he,
                    imageSize: "20px"
                }), s.createElement("div", null, me)), we && s.createElement(F, {
                    className: "align-self-end me-2 align-items-center text-nowrap mt-1"
                }, s.createElement(u.rU, {
                    to: "/home/group/".concat(null !== (i = null == ae ? void 0 : ae.id) && void 0 !== i ? i : null == Z ? void 0 : Z.id)
                }, null !== (b = null == ae ? void 0 : ae.name) && void 0 !== b ? b : null == Z ? void 0 : Z.name)), !!U.memberCount && s.createElement(F, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of group members in the Instance"
                }, U.memberCount, s.createElement(w.$1, {
                    icon: c.default,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !!U.userCount && s.createElement(F, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of users in the Instance"
                }, U.userCount, s.createElement(w.$1, {
                    icon: l.FV,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), !(null === (x = U.users) || void 0 === x || !x.length) && s.createElement(F, {
                    className: "align-self-end me-2 align-items-center mt-1",
                    title: "Number of friends in the Instance"
                }, null === (I = U.users) || void 0 === I ? void 0 : I.length, s.createElement(w.$1, {
                    icon: o.r$,
                    color: "#8f8f8d",
                    className: "ms-2"
                })), s.createElement(w.zx, {
                    className: "align-self-end mt-1",
                    containerStyles: B,
                    "aria-label": "Invite Me",
                    onClick: function() {
                        W({
                            worldId: U.worldId,
                            instanceId: U.instanceId
                        })
                    },
                    loading: K,
                    positive: Y,
                    disabled: Ee
                }, Ee ? "Age Verification Required (18+)" : Y ? "Invited!" : "Invite Me"))))), xe && s.createElement(w.Ao, null, s.createElement($, null, null === (k = U.users) || void 0 === k ? void 0 : k.map((function(e) {
                    return s.createElement(E, {
                        key: e,
                        userId: e,
                        className: "mx-1 my-1"
                    })
                })))))
            };
            var U = {
                    name: "soeo3h",
                    styles: "flex-direction:column;@media (min-width: 576px){flex-direction:row;}"
                },
                C = {
                    name: "qdeacm",
                    styles: "flex-direction:column"
                },
                q = (0, i.Z)(w.X2, {
                    shouldForwardProp: function(e) {
                        return "compact" !== e
                    },
                    target: "e1p8e5dk7"
                })("flex-grow:1;", (function(e) {
                    return e.compact ? C : U
                }), ";"),
                G = {
                    name: "1fx7pte",
                    styles: "padding-top:0;height:auto;width:256px;height:192px;margin-bottom:0;margin-right:1rem"
                },
                R = (0, i.Z)("div", {
                    target: "e1p8e5dk6"
                })("padding-top:75%;height:0;overflow:hidden;border-radius:8px;position:relative;display:flex;flex-shrink:0;margin-bottom:0.5rem;margin-right:0;@media (min-width: 768px){", (function(e) {
                    return e.compact ? "" : G
                }), ";}"),
                M = (0, i.Z)("img", {
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
                X = (0, i.Z)("div", {
                    target: "e1p8e5dk3"
                })({
                    name: "23btei",
                    styles: "color:#8f8f8d;font-size:0.95rem"
                }),
                B = {
                    name: "1k72zkj",
                    styles: "flex:1;min-width:85px"
                },
                F = (0, i.Z)(w.X2, {
                    target: "e1p8e5dk2"
                })({
                    name: "ghp7vg",
                    styles: "border-radius:4px;background-color:#181b1f;padding:7px 1rem"
                }),
                L = (0, i.Z)(b.Z, {
                    target: "e1p8e5dk1"
                })({
                    name: "zner0g",
                    styles: "display:block!important;& img{display:block;max-width:unset;}"
                }),
                $ = (0, i.Z)("div", {
                    target: "e1p8e5dk0"
                })({
                    name: "5kov97",
                    styles: "display:flex;flex-wrap:wrap"
                })
        },
        87343: (e, t, n) => {
            n.d(t, {
                LE: () => i,
                kt: () => a
            });
            var r = n(61509).S.injectEndpoints({
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
//# sourceMappingURL=206e87e32337c77d55092f87c9649bc302e8779249a6e29cfa1b59a201dd6f2b.js.map