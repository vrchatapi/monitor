(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4364], {
        25411: (e, t, n) => {
            "use strict";
            n.d(t, {
                CJ: () => f,
                Tr: () => v,
                gW: () => g,
                k4: () => p,
                pz: () => d,
                zf: () => h
            });
            var a = n(4942),
                r = n(9669),
                i = n.n(r);
            n(12227);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = {
                    sort: "relevance",
                    fuzzy: !0
                },
                s = {
                    sort: "relevance",
                    fuzzy: !1
                },
                u = {
                    sort: "created",
                    releaseStatus: "public"
                },
                m = function(e) {
                    var t = e.searchTerm,
                        n = void 0 === t ? "" : t;
                    return e.isInternalVariant ? n : n.replace(/tag:\S*/, "")
                },
                d = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.isInternalVariant,
                        o = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n: a
                        });
                    return r && t && (o = l(l({}, o), n)), {
                        type: "SEARCH_USERS",
                        payload: i().get(window.apiUrl("/api/1/users"), {
                            params: o
                        })
                    }
                },
                p = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.offset,
                        o = e.isInternalVariant,
                        c = l(l({}, s), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: o
                            }),
                            n: a,
                            offset: r
                        });
                    return o && t && (c = l(l({}, c), n)), {
                        type: "LOAD_MORE_USERS",
                        payload: i().get(window.apiUrl("/api/1/users"), {
                            params: c
                        })
                    }
                },
                g = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        a = e.offset,
                        r = e.isInternalVariant,
                        o = l(l({}, c), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n,
                            offset: a
                        });
                    return {
                        type: "LOAD_MORE_WORLDS",
                        payload: i().get(window.apiUrl("/api/1/worlds"), {
                            params: o
                        })
                    }
                },
                f = function(e) {
                    var t = e.searchTerm,
                        n = e.n,
                        a = e.offset,
                        r = e.isInternalVariant,
                        o = l(l({}, u), {}, {
                            search: m({
                                searchTerm: t,
                                isInternalVariant: r
                            }),
                            n,
                            offset: a
                        });
                    return {
                        type: "LOAD_MORE_AVATARS",
                        payload: i().get(window.apiUrl("/api/1/avatars"), {
                            params: o
                        })
                    }
                },
                h = function(e) {
                    var t = e.searchTerm,
                        n = e.queryParams,
                        a = e.n,
                        r = e.isInternalVariant,
                        o = [];
                    return o.push(d({
                        searchTerm: t,
                        queryParams: n,
                        n: a,
                        isInternalVariant: r
                    })), o.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            a = e.isInternalVariant,
                            r = l(l({}, c), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: a
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_WORLDS",
                            payload: i().get(window.apiUrl("/api/1/worlds"), {
                                params: r
                            })
                        }
                    }({
                        searchTerm: t,
                        n: a,
                        isInternalVariant: r
                    })), r && o.push(function(e) {
                        var t = e.searchTerm,
                            n = e.n,
                            a = e.isInternalVariant,
                            r = l(l({}, u), {}, {
                                search: m({
                                    searchTerm: t,
                                    isInternalVariant: a
                                }),
                                n
                            });
                        return {
                            type: "SEARCH_AVATARS",
                            payload: i().get(window.apiUrl("/api/1/avatars"), {
                                params: r
                            })
                        }
                    }({
                        searchTerm: t,
                        n: a,
                        isInternalVariant: r
                    })), o
                },
                v = function() {
                    return {
                        type: "AUTO_REDIRECT_TOGGLE"
                    }
                }
        },
        88233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(4965),
                r = n(65394),
                i = n(85020),
                o = n(67294),
                l = n(37463);
            const c = function(e) {
                var t = e.imageUrl,
                    n = e.closeCallback,
                    a = e.nextCallback,
                    c = e.prevCallback;
                return t ? o.createElement(o.Fragment, null, o.createElement(u, {
                    onClick: n
                }), o.createElement(s, null, c && o.createElement(p, {
                    onClick: c,
                    hasCallback: c
                }, o.createElement(l.$1, {
                    icon: i.A3,
                    width: 65
                })), o.createElement(m, {
                    src: t
                }), a && o.createElement(d, {
                    onClick: a,
                    hasCallback: a
                }, o.createElement(l.$1, {
                    icon: r._t,
                    width: 65
                })))) : null
            };
            var s = (0, a.Z)("div", {
                    target: "eac6qxj4"
                })({
                    name: "ttwpi3",
                    styles: "position:fixed;display:flex;flex-direction:row;justify-content:center;align-items:center;z-index:1337;top:0;left:0;width:100%;height:100%;pointer-events:none;background:transparent"
                }),
                u = (0, a.Z)("div", {
                    target: "eac6qxj3"
                })({
                    name: "jyw4fx",
                    styles: "position:fixed;background:rgba(0, 0, 0, 0.5);z-index:1336;top:0;left:0;width:100%;height:100%"
                }),
                m = (0, a.Z)("img", {
                    target: "eac6qxj2"
                })({
                    name: "xgli30",
                    styles: "max-width:90%;max-height:90%;transition:all 0.3s ease;pointer-events:all"
                }),
                d = (0, a.Z)("div", {
                    target: "eac6qxj1"
                })("margin:0 15px;cursor:pointer;pointer-events:all;opacity:", (function(e) {
                    return e.hasCallback ? 1 : .5
                }), ";color:", (function(e) {
                    return e.hasCallback ? "var(--gray-300)" : "var(--gray-600)"
                }), ";>*{transition:all 0.3s ease;:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(5px, 0)" : "none"
                }), ";}}"),
                p = (0, a.Z)(d, {
                    target: "eac6qxj0"
                })(">*:hover{transform:", (function(e) {
                    return e.hasCallback ? "translate(-5px, 0)" : "none"
                }), ";}")
        },
        46320: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(67294),
                r = n(89250),
                i = n(12599);
            const o = function(e) {
                var t = e.to,
                    n = e.replace,
                    o = void 0 === n || n,
                    l = e.state,
                    c = e.relative,
                    s = (0, r.s0)(),
                    u = (0, r.UO)();
                if (!(0, r.GV)()) throw new Error("RedirectLayout must be used in a Router context");
                return a.useEffect((function() {
                    s((0, i.Gn)(t, u), {
                        replace: o,
                        state: l,
                        relative: c
                    })
                })), null
            }
        },
        73670: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var a = n(54546),
                r = n(95337),
                i = n(67294),
                o = n(83505),
                l = n(60994),
                c = n(87261),
                s = n(86646);
            const u = function(e) {
                var t = e.searchString,
                    n = e.initialString,
                    u = void 0 === n ? "" : n,
                    m = e.placeholder,
                    d = (0, i.useState)(u),
                    p = (0, a.Z)(d, 2),
                    g = p[0],
                    f = p[1];
                return i.createElement(l.Z, null, i.createElement(s.Z, {
                    icon: r.wn,
                    color: "var(--bs-gray)",
                    width: 24,
                    className: (0, o.iv)({
                        name: "lo66c0",
                        styles: "position:absolute;left:7px;top:7px;pointer-events:none;z-index:5"
                    })
                }), i.createElement(c.Z, {
                    className: (0, o.iv)({
                        name: "7lu28v",
                        styles: "padding-left:40px!important;height:37px!important;border-radius:7px!important"
                    }),
                    type: "text",
                    onChange: function(e) {
                        return n = e.target.value, t && t(n), void f(n);
                        var n
                    },
                    placeholder: null != m ? m : "Search...",
                    value: g
                }))
            }
        },
        63221: (e, t, n) => {
            "use strict";
            n.d(t, {
                M7: () => p,
                Mw: () => r,
                TW: () => i,
                a8: () => s,
                fq: () => g,
                hp: () => u,
                iI: () => o,
                kI: () => f,
                lE: () => d,
                nD: () => m,
                oq: () => c,
                qH: () => a,
                wN: () => l
            });
            var a = 1e5,
                r = 50,
                i = {
                    DEFAULT: "default",
                    PRIVATE: "private"
                },
                o = {
                    VISIBLE: "visible",
                    FRIENDS: "friends",
                    HIDDEN: "hidden"
                },
                l = {
                    CLOSED: "closed",
                    INVITE: "invite",
                    REQUEST: "request",
                    OPEN: "open"
                },
                c = {
                    INVITED: "invited",
                    REQUESTED: "requested",
                    REJECTED: "rejected",
                    BLOCKED: "blocked",
                    USER_BLOCKED: "userblocked"
                },
                s = {
                    members: "Group",
                    public: "Group Public",
                    plus: "Group+"
                },
                u = ["group-instance-open-create", "group-instance-plus-create", "group-instance-public-create", "group-instance-restricted-create", "*"],
                m = ["group-instance-plus-create", "*"],
                d = ["group-instance-public-create", "*"],
                p = ["group-instance-restricted-create", "*"],
                g = ["group-instance-age-gated-create", "*"],
                f = ["group-instance-open-create", "group-instance-restricted-create", "*"]
        },
        64364: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => mn
            });
            var a = n(54546),
                r = n(67294),
                i = n(32981),
                o = n(89250),
                l = n(53637),
                c = n(83505),
                s = n(24975),
                u = n(27484),
                m = n.n(u),
                d = n(22202),
                p = n(4965),
                g = n(47810),
                f = n(34233),
                h = n(79655),
                v = n(35773),
                b = n(95305),
                y = n(64358),
                E = n(17383),
                x = n(6655),
                w = n(12227),
                k = n(37463),
                N = (n(46326), n(72528));
            const T = function(e) {
                var t, n, i, l = e.navToggleCallback,
                    s = void 0 === l ? function() {} : l,
                    u = (0, E.Tu)(),
                    m = u.user,
                    p = u.isFetching,
                    v = u.isLoading,
                    b = (0, o.s0)(),
                    T = (0, d.q7)().data,
                    _ = void 0 === T ? [] : T,
                    J = r.useState(!1),
                    K = (0, a.Z)(J, 2),
                    X = (K[0], K[1], (0, x.pp)({
                        userId: m.id
                    }, {
                        skip: !m,
                        refetchOnMountOrArgChange: !0
                    })),
                    H = X.data,
                    Q = (void 0 === H ? {} : H).balance,
                    Y = X.isFetching;
                if (!m || v) return null;
                var ee = function() {
                        s(!1)
                    },
                    te = "online" === m.state,
                    ne = (null === (t = m.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? m.profilePicOverride : m.currentAvatarThumbnailImageUrl,
                    ae = (0, y.S6)({
                        fileUrl: ne,
                        width: "1024"
                    }),
                    re = m.userIcon ? (0, y.S6)({
                        fileUrl: m.userIcon,
                        width: "1024"
                    }) : null;
                return r.createElement(Z, {
                    className: "mx-0 mb-2"
                }, r.createElement(M, {
                    className: "d-flex mx-0 align-items-center"
                }, r.createElement(W, {
                    title: (0, w.Tq)(m.status, !0),
                    statusColor: "var(--status-".concat((0, w.Tq)(m.status), ")")
                }), r.createElement(h.rU, {
                    to: "/home/user/".concat(m.id),
                    onClick: ee
                }, m.displayName)), r.createElement($, null, p ? r.createElement(k.UU, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : r.createElement(h.rU, {
                    to: "/home/user/".concat(m.id),
                    "aria-label": "User Status",
                    onClick: ee
                }, m.statusDescription)), r.createElement(I, null, r.createElement(S, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(m.id),
                    url: ae,
                    level: (0, w.FR)({
                        tags: m.tags
                    }),
                    onClick: ee
                }, r.createElement(O, {
                    className: "mx-0"
                }, r.createElement(z, {
                    className: "text-center"
                }, "Go To Profile")), re && r.createElement(q, {
                    role: "button",
                    "aria-label": "Go To Gallery",
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), (null != _ && _.includes("permission-user-icons") || null != _ && _.includes("permission-user-gallery")) && (b("/home/gallery"), ee())
                    }
                }, r.createElement(A, {
                    "aria-label": "User Icon",
                    url: re,
                    level: (0, w.FR)({
                        tags: m.tags
                    })
                }, r.createElement(P, null, r.createElement(U, {
                    icon: f._j,
                    size: "lg"
                }))), r.createElement(R, null, "Change Icon")), r.createElement(j, null)), !(null === (n = m.badges) || void 0 === n || !n.length) && r.createElement(G, null, m.badges.filter((function(e) {
                    return e.showcased && !e.hidden
                })).slice(0, 3).sort((function(e, t) {
                    return new Date(t.assignedAt) - new Date(e.assignedAt)
                })).map((function(e) {
                    return r.createElement(C, {
                        role: "note",
                        "aria-label": e.badgeName,
                        key: e.badgeId,
                        image: e.badgeImageUrl,
                        pettable: "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8" === e.badgeId
                    })
                }))), r.createElement(D, {
                    className: "px-2 pt-1 pb-2 mx-0"
                }, r.createElement(F, {
                    className: "relative justify-content-end"
                }, Y ? r.createElement(k.UU, {
                    width: "4rem",
                    height: "1.5rem",
                    style: {
                        borderRadius: 14
                    }
                }) : r.createElement(L, {
                    to: "/home/marketplace/wallet",
                    onClick: ee
                }, r.createElement(k.b5, null), null !== (i = " ".concat(null == Q ? void 0 : Q.toLocaleString())) && void 0 !== i ? i : " ???")), !1, r.createElement(B, null, r.createElement(h.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    onClick: ee
                }, r.createElement(k.$1, {
                    icon: g.Kb
                }), "  Account Settings")))), r.createElement(I, {
                    className: (0, c.iv)({
                        name: "1qhktia",
                        styles: "margin:5px 8px"
                    })
                }, te && (null == m ? void 0 : m.location) && !["traveling", "offline"].includes(null == m ? void 0 : m.location) && r.createElement(V, {
                    className: "mx-0"
                }, r.createElement(N.Z, {
                    location: m.location,
                    userId: m.id,
                    currentUser: m,
                    size: "normal"
                }))))
            };
            var Z = (0, p.Z)("div", {
                    target: "esgak1l21"
                })(""),
                I = (0, p.Z)("div", {
                    target: "esgak1l20"
                })({
                    name: "1tnesjs",
                    styles: "border-radius:10px;border:#053c48 2px solid;overflow:hidden;position:relative;z-index:10;background-color:#07242b;:empty{display:none;}"
                }),
                C = (0, p.Z)("div", {
                    target: "esgak1l19"
                })("width:36px;height:36px;margin:0!important;padding:6px;border-radius:50%;z-index:3;background-color:rgba(17, 17, 17, 0.8);background-image:url(", (function(e) {
                    return e.image
                }), ");background-size:24px;background-repeat:no-repeat;background-position:center;", (function(e) {
                    return e.pettable && "\n    cursor: grab;\n\n    &:active {\n      cursor: grabbing;\n    }\n  "
                }), ";"),
                S = (0, p.Z)(h.rU, {
                    target: "esgak1l18"
                })("display:flex;height:0;padding-top:56.25%;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");position:relative;cursor:pointer;background-color:#05191d;&:hover{&>div:last-child{opacity:1;}}"),
                O = (0, p.Z)(v.Z, {
                    target: "esgak1l17"
                })({
                    name: "w4b5cp",
                    styles: "display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;opacity:0;transition:opacity 0.2s ease;color:white;text-decoration:none!important;&:hover{opacity:1;}"
                }),
                j = (0, p.Z)("div", {
                    target: "esgak1l16"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                z = (0, p.Z)("div", {
                    target: "esgak1l15"
                })({
                    name: "iu2xal",
                    styles: "font-weight:600;color:white!important"
                }),
                q = (0, p.Z)("div", {
                    target: "esgak1l14"
                })({
                    name: "13p5eg",
                    styles: "display:flex;position:absolute;bottom:-40px;left:10px;width:80px;align-items:center;z-index:3;color:white;&:hover{div:last-child{opacity:1;}svg{opacity:1;}}"
                }),
                A = (0, p.Z)("div", {
                    target: "esgak1l13"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                P = (0, p.Z)("div", {
                    target: "esgak1l12"
                })({
                    name: "6828uq",
                    styles: "opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);border-radius:100%;display:flex;width:100%;height:100%;align-items:center;justify-content:center"
                }),
                U = (0, p.Z)(k.$1, {
                    target: "esgak1l11"
                })(""),
                R = (0, p.Z)("div", {
                    target: "esgak1l10"
                })({
                    name: "1lu2whh",
                    styles: "opacity:0;margin-left:3px;font-weight:600;flex-shrink:0;transition:opacity 0.2s ease"
                }),
                D = (0, p.Z)(b.Z, {
                    target: "esgak1l9"
                })({
                    name: "1dt3z6y",
                    styles: "background-color:#07242b"
                }),
                M = (0, p.Z)("div", {
                    target: "esgak1l8"
                })({
                    name: "ab3jnw",
                    styles: "font-weight:600;justify-content:center;a{color:var(--bs-primary);font-size:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:240px;}"
                }),
                W = (0, p.Z)("div", {
                    target: "esgak1l7"
                })("width:15px;height:15px;border-radius:100%;background-color:", (function(e) {
                    return e.statusColor
                }), ";margin-right:10px;"),
                $ = (0, p.Z)("div", {
                    target: "esgak1l6"
                })({
                    name: "1xmid75",
                    styles: "width:100%;text-align:center;display:flex;align-items:center;justify-content:center;padding:2px 20px;font-weight:bold;overflow:hidden;text-overflow:ellipsis"
                }),
                V = (0, p.Z)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                L = (0, p.Z)(h.rU, {
                    target: "esgak1l4"
                })("color:white;background-color:rgba(17, 17, 17, 0.8);padding:4px 6px;line-height:1em;border-radius:14px;>", k.b5, "{color:#6ae3f9;}&:hover{color:#737372;text-decoration:none;>", k.b5, "{color:#064b5c;}}"),
                F = (0, p.Z)("div", {
                    target: "esgak1l3"
                })({
                    name: "1y5jtkv",
                    styles: "display:flex;align-items:center;margin-top:0.5rem"
                }),
                G = (0, p.Z)(F, {
                    target: "esgak1l2"
                })({
                    name: "1nld4z4",
                    styles: "width:100%;height:45px;margin-top:-45px;display:flex;justify-content:flex-end;position:relative;padding:4px;gap:4px"
                }),
                _ = (0, p.Z)(F, {
                    target: "esgak1l1"
                })({
                    name: "1nfvopr",
                    styles: "a{width:100%;}"
                }),
                B = (0, p.Z)(_, {
                    target: "esgak1l0"
                })({
                    name: "1giwfl6",
                    styles: "@media (min-width: 576px){display:none;}"
                }),
                J = n(14097),
                K = n(83183),
                X = n(89148),
                H = n(15369),
                Q = n(13461),
                Y = n(66007),
                ee = n(2723),
                te = n(66062),
                ne = n(40767),
                ae = n(81511),
                re = n(16688),
                ie = n(46450),
                oe = n(774),
                le = n(12529),
                ce = n(64240),
                se = n(43701),
                ue = n(70396),
                me = n(7975),
                de = n(70440),
                pe = n(96165),
                ge = n(54492),
                fe = n(91435),
                he = n(49866),
                ve = n(57245),
                be = n(93118),
                ye = n(99631),
                Ee = n(51970),
                xe = n(28959),
                we = n(67922),
                ke = n(87589),
                Ne = n(62455),
                Te = n(25248),
                Ze = n(50249),
                Ie = n(7503),
                Ce = n(48566),
                Se = n(8256),
                Oe = n(28055),
                je = n(34698),
                ze = n(58877),
                qe = n(25062),
                Ae = n(93046),
                Pe = n.n(Ae),
                Ue = n(17219),
                Re = n(31358);
            const De = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    a = e.closeDialog,
                    o = (e.isGroups, (0, i.v9)((function(e) {
                        return e.notifications.notifications
                    })).slice(0, n) || []);
                return r.createElement("div", {
                    className: "mt-2"
                }, o.map((function(e) {
                    return r.createElement(Re.Z, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: a
                    })
                })))
            };
            n(64230);
            var Me = n(76938),
                We = n(42138),
                $e = n(4942),
                Ve = n(38824),
                Le = n(87261),
                Fe = n(3126),
                Ge = n(45697),
                _e = n.n(Ge),
                Be = n(25411),
                Je = n(72562);

            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(n), !0).forEach((function(t) {
                        (0, $e.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var He = function(e) {
                var t = e.onChangeCallback,
                    n = (0, i.I0)(),
                    o = (0, r.useState)(!1),
                    l = (0, a.Z)(o, 2),
                    c = l[0],
                    s = l[1],
                    u = (0, r.useState)(!1),
                    m = (0, a.Z)(u, 2),
                    d = m[0],
                    p = m[1],
                    g = (0, r.useState)("none"),
                    f = (0, a.Z)(g, 2),
                    h = f[0],
                    v = f[1],
                    b = (0, r.useState)([]),
                    y = (0, a.Z)(b, 2),
                    E = y[0],
                    x = y[1],
                    w = (0, r.useState)("relevance"),
                    k = (0, a.Z)(w, 2),
                    N = k[0],
                    T = k[1],
                    Z = (0, i.v9)((function(e) {
                        return e.search.autoRedirect
                    }));
                (0, r.useEffect)((function() {
                    var e = {
                        dropdownToggle: c,
                        fuzzyToggle: d,
                        orderFilter: h,
                        searchableFilters: E,
                        sortByFilter: N
                    };
                    (0, Je.Kz)("Web_Mod_SearchFilterChange", Xe(Xe({}, e), {}, {
                        autoRedirect: Z
                    })), t(e)
                }), [Z, d, h, E, N]);
                var I = function(e) {
                    return e.target.checked ? x([].concat((0, We.Z)(E), [e.target.name])) : x(E.filter((function(t) {
                        return t !== e.target.name
                    })))
                };
                return r.createElement(Ce.Z, {
                    isOpen: c,
                    toggle: function() {
                        return s(!c)
                    }
                }, r.createElement(Se.Z, {
                    caret: !0
                }, "Filters"), r.createElement(Oe.Z, {
                    className: "text-white p-0 bg-dark pb-2"
                }, r.createElement(Ve.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Sort Results By"), r.createElement("div", {
                    className: "mx-3 text-white"
                }, r.createElement(Le.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return T(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "sortResultsBy",
                    id: "sortResultsBy"
                }, r.createElement("option", {
                    value: "relevance"
                }, "Relevance"), r.createElement("option", {
                    value: "exact"
                }, "Exact"), r.createElement("option", {
                    value: "last_login"
                }, "Last Login"), r.createElement("option", {
                    value: "trust"
                }, "Trust Rank"))), r.createElement(Ve.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Order By"), r.createElement("div", {
                    className: "mx-3 text-white"
                }, r.createElement(Le.Z, {
                    onChange: function(e) {
                        var t = e.target.value;
                        return v(t)
                    },
                    className: "p-1",
                    type: "select",
                    name: "orderBy",
                    id: "orderBy"
                }, r.createElement("option", {
                    value: "none"
                }, "None"), r.createElement("option", {
                    value: "ascending"
                }, "Ascending"), r.createElement("option", {
                    value: "descending"
                }, "Descending"))), r.createElement(Ve.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-2 px-2"
                }, "Search For"), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: E.includes("displayName"),
                    onChange: I,
                    type: "checkbox",
                    name: "displayName",
                    id: "displayName"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "displayName"
                }, "Display Name"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: E.includes("email"),
                    onChange: I,
                    type: "checkbox",
                    name: "email",
                    id: "email"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "email"
                }, "Email"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: E.includes("username"),
                    onChange: I,
                    type: "checkbox",
                    name: "username",
                    id: "username"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "username"
                }, "Username"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: E.includes("pastEmails"),
                    onChange: I,
                    type: "checkbox",
                    name: "pastEmails",
                    id: "pastEmails"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), r.createElement(Ve.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: Z,
                    onChange: function() {
                        return n((0, Be.Tr)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "autoDirect"
                }, "Auto Redirect"))), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: d,
                    onChange: function() {
                        return p(!d)
                    },
                    type: "checkbox",
                    name: "fuzzy",
                    id: "fuzzy"
                }), r.createElement(Fe.Z, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            He.propTypes = {
                onChangeCallback: _e().func.isRequired
            };
            var Qe = n(73670);
            const Ye = function() {
                var e = (0, o.s0)(),
                    t = (0, o.TH)(),
                    n = "";
                t.pathname.startsWith("/home/search/") && (n = decodeURIComponent(t.pathname.substring(13)));
                var l = (0, i.v9)(Me.y),
                    s = (0, r.useState)("/home/search/"),
                    u = (0, a.Z)(s, 2),
                    m = u[0],
                    d = u[1],
                    p = (0, r.useState)("/home/search/"),
                    g = (0, a.Z)(p, 2),
                    f = g[0],
                    h = (g[1], (0, r.useState)(n)),
                    v = (0, a.Z)(h, 2),
                    b = v[0],
                    y = v[1],
                    x = (0, E.Nr)(m);
                (0, r.useEffect)((function() {
                    d("/home/search/".concat(encodeURIComponent(b.replace(/#/g, "tag:"))))
                }), [f, b]), (0, r.useEffect)((function() {
                    "" !== b && e(m)
                }), [x]);
                return r.createElement("div", {
                    className: (0, c.iv)({
                        name: "1a9iom8",
                        styles: "& .search-input{padding:0;}& .input-group-custom{position:relative;flex-wrap:nowrap;align-items:stretch;}& .drop-down-menu-custom{color:black;margin:0;padding:5px;}"
                    })
                }, r.createElement("div", {
                    className: "container"
                }, r.createElement("form", {
                    onSubmit: function(t) {
                        return function(t) {
                            return t.preventDefault(), "" === b || e(m), null
                        }(t)
                    },
                    className: "navbar-form navbar-right",
                    role: "search"
                }, r.createElement("div", {
                    className: "input-group-custom"
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "ho1qnd",
                        styles: "display:flex;flex-direction:row"
                    })
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "clzu0",
                        styles: "display:flex;flex-direction:row;align-items:center;flex-grow:1"
                    })
                }, r.createElement(Qe.Z, {
                    initialString: b,
                    searchString: y
                }), l && !1))))))
            };
            var et = n(15861),
                tt = n(24075),
                nt = n(89082),
                at = n(64687),
                rt = n.n(at),
                it = n(58589),
                ot = n(9669),
                lt = n.n(ot);
            var ct = ["public", "internal"];
            const st = function(e) {
                var t = e.direction,
                    n = r.useState([]),
                    l = (0, a.Z)(n, 2),
                    s = l[0],
                    u = l[1],
                    m = r.useState(""),
                    d = (0, a.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = (0, o.TH)(),
                    h = (0, i.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    b = function() {
                        var e = (0, et.Z)(rt().mark((function e() {
                            var t, n, a;
                            return rt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, lt().get(t);
                                    case 3:
                                        n = e.sent, a = n.data.filter((function(e) {
                                            return "main" !== e
                                        })), u(["main"].concat((0, We.Z)(a)));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                r.useEffect((function() {
                    b().catch(console.error)
                }), []);
                var y = function(e, t) {
                        var n = f.pathname;
                        return n.startsWith("/") && (n = n.slice(1)), n.startsWith("a/internal") && (n = n.slice(10)), n.startsWith("/") && (n = n.slice(1)), "main" === e && "public" === t ? "/".concat(n) : "main" === e ? "/a/".concat(t, "/").concat(n) : "public" === t ? "/b/".concat(e, "/").concat(n) : "/b/".concat(e, "/").concat(t, "/").concat(n)
                    },
                    E = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            return !0
                        };
                        return e.map((function(e) {
                            return ct.map((function(n, a) {
                                if ("public" !== n && !h) return null;
                                var i = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    o = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.iv)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                i && o.push("active");
                                var l = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? re.J9 : nt.c : tt.mh
                                };
                                return r.createElement("a", {
                                    href: y(e, n),
                                    id: "variant-switcher-".concat(n, "-").concat(e),
                                    key: "variant-item-".concat(n, "-").concat(e, "-").concat(a),
                                    className: o.join(" ")
                                }, r.createElement(k.$1, l), n, "-", e)
                            }))
                        }))
                    };
                return s.length <= 1 ? null : r.createElement("div", null, r.createElement(it.Z, {
                    size: "sm",
                    direction: null != t ? t : "left",
                    className: (0, c.iv)({
                        name: "1xtoy05",
                        styles: "z-index:20;text-align:center"
                    })
                }, r.createElement(Se.Z, {
                    caret: !0,
                    color: "primary"
                }, r.createElement(k.$1, {
                    icon: tt.mh
                }), " ", "public", "-", "main"), r.createElement(Oe.Z, {
                    className: (0, c.iv)({
                        name: "1c2bfwh",
                        styles: "max-height:800px;overflow-y:auto;&.dropdown-menu{padding:0;margin:0;border-radius:4px;}.dropdown-item{color:white!important;&.active{background:#1db3cb linear-gradient(180deg, #198799, #1cb5cd) repeat-x;}&:hover{color:var(--bs-gray-dark)!important;}}input{border-radius:4px;border:none;}"
                    })
                }, E(s.slice(0, 1)), r.createElement("hr", {
                    className: "w-100 my-1 text-primary"
                }), r.createElement(v.Z, {
                    className: "mx-0"
                }, r.createElement("input", {
                    type: "text",
                    value: p,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? {} : t).value;
                        g(n)
                    },
                    className: "py-1 px-1 mx-1 my-1 flex-grow-1"
                })), E(s.slice(1), (function(e) {
                    return 0 === p.length || new RegExp(p, "gi").test(e)
                })))))
            };
            var ut = n(63221),
                mt = n(72065),
                dt = n(22082),
                pt = n(56395);
            const gt = function(e) {
                var t = e.to,
                    n = e.title,
                    a = e.onClick,
                    i = (0, dt.oE)({
                        states: [pt.g1.ANNOUNCED, pt.g1.SUBMISSIONS_OPEN, pt.g1.SUBMISSIONS_CLOSED, pt.g1.WINNERS_SELECTED]
                    }).data,
                    o = null == i ? void 0 : i.every((function(e) {
                        return !Object.keys(e).includes("state")
                    }));
                if (!i || 0 === (null == i ? void 0 : i.length) || o) return null;
                var l = i[0];
                return r.createElement(ft, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: a
                }, r.createElement(ht, {
                    icon: mt.Ww
                }), r.createElement("div", null, pt.p6[l.state]), r.createElement(k.$1, {
                    icon: K.yO
                }))
            };
            var ft = (0, p.Z)(h.rU, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                ht = (0, p.Z)(k.$1, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var vt = [Te.R7, Ne.od, ke.tM, we.RK, xe.I3, Ee.nG, ye.jO, be.uS, ve.dy, he.XG, fe.BD, ge.ok, pe.Sv, de.qA, me.I1, ue.Nk, se.uj, ce.io, le.l9],
                bt = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                yt = r.memo((function(e) {
                    var t, n, l = e.horizontal,
                        s = e.navToggleCallback,
                        u = e.friendsToggleCallback,
                        m = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        p = (0, o.s0)(),
                        v = r.useState(!1),
                        b = (0, a.Z)(v, 2),
                        y = b[0],
                        x = b[1],
                        w = r.useState(vt[Math.floor(m(vt.length))]),
                        N = (0, a.Z)(w, 2),
                        T = N[0],
                        Z = N[1],
                        I = r.useState(bt[m(bt.length)]),
                        C = (0, a.Z)(I, 2),
                        S = C[0],
                        O = C[1],
                        j = (0, Ue.y)().data,
                        z = ((0, E.pc)(), (0, d.XC)().data),
                        q = (0, i.v9)((function(e) {
                            return e.notifications.notifications
                        })) || [],
                        A = (0, d.q7)().data,
                        P = void 0 === A ? [] : A,
                        U = (0, E.CZ)().sortedLocations.length,
                        R = (0, i.v9)((function(e) {
                            return e.notifications.groupNotifications
                        })) || [];
                    (0, r.useEffect)((function() {
                        y && (Z(vt[m(vt.length)]), O(bt[m(bt.length)]))
                    }), [y]);
                    var D = function(e) {
                            p("/home/login", {
                                state: {
                                    logout: !0
                                }
                            }), e.preventDefault()
                        },
                        M = function() {
                            x(!1)
                        },
                        W = function() {
                            s && s(!1)
                        },
                        $ = P || [],
                        V = $.includes("permission-user-icons"),
                        L = $.includes("permission-user-gallery"),
                        F = ($.includes("permission-groups-beta"), null !== (t = q.length) && void 0 !== t ? t : 0);
                    n = R.filter((function(e) {
                        return e.state === ut.oq.INVITED
                    })).length;
                    if (null == l || !1 === l) {
                        0;
                        return r.createElement("div", {
                            className: (0, c.iv)("margin:0;padding:0;& .navbar{padding:3px 0;background-color:#07242b!important;background-image:none;border-bottom:solid ", "#053c48", " 3px;display:flex;justify-content:space-between;height:60px;}& .navbar .btn-group{white-space:normal;}& .navbar-section{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;justify-content:space-between;}& .left-nav{min-width:285px!important;justify-content:center;>*{margin:0 10px;:first-child{margin-left:0;}:last-child{margin-right:0;}}}& .center-nav{justify-content:flex-start;flex-wrap:nowrap;flex:1;>*{margin:0 10px 0 2px;}}& .right-nav{justify-content:space-between;flex-direction:row;flex:0;padding:0 20px;gap:20px;align-items:center;.scalable-nav{display:none;}>a{color:#6ae3f9;font-weight:bold;display:flex;align-items:center;min-height:45px;padding:0 10px;}}& .custom-dropdown{padding:0!important;transform:translate(calc(-100% + 400px), 20px)!important;background:#05191d!important;border:#053c48 solid 2px!important;border-radius:10px!important;box-shadow:0px 9px 26px 5px rgba(0, 0, 0, 0.8);}& .dropdown-arrow{z-index:3;&:after,:before{pointer-events:none;content:'';position:absolute;background:transparent;left:50%;transform:translateX(-50%);}&:after{border:22px solid transparent;bottom:-30px;border-bottom-color:#05191d;}&:before{border:15px solid transparent;bottom:-20px;border-bottom-color:#053c48;}}& .navbar-btn{background:#07242b!important;min-width:45px;min-height:45px;border-radius:100px!important;border:solid #053c48 3px!important;display:flex;justify-content:center;align-items:center;font-weight:bold;white-space:nowrap;>span{display:flex;justify-content:center;align-items:center;}&:hover{background:#05191d!important;}&:focus{box-shadow:0 0 0 0.2rem #05191d!important;}&.logout{padding:0 10px!important;color:#ee5454;}}@media (max-width: 1500px){& .right-nav{padding:0 20px;}}@media (max-width: 1200px){& .left-nav{padding:0 15px 0 10px;min-width:210px!important;justify-content:space-between;}& .custom-dropdown{transform:translate(calc(-100% + 350px), 20px)!important;}& .large{display:none;}& .search{width:100%;}}@media (max-width: 576px){& .left-nav{min-width:auto!important;padding:0 10px;}& .mobile-only{display:block;}& .medium{display:none;}}& .dropdown-menu{padding:10px 15px 5px 15px;background-color:#506070;border-radius:0;}& .search{flex-grow:3;}& .launch{text-transform:uppercase;font-weight:bold;}", ""),
                            id: "secondary-nav"
                        }, r.createElement("div", {
                            className: "navbar-boogie container-fluid"
                        }, " "), r.createElement("div", {
                            className: "navbar fixed-top navbar-expand-sm navbar-light shadow ".concat("")
                        }, r.createElement("div", {
                            className: "navbar-section left-nav"
                        }, r.createElement("button", {
                            type: "button",
                            className: "p-1 2xl:tw-hidden btn navbar-btn",
                            onClick: function() {
                                s && (u && u(!1), s())
                            }
                        }, r.createElement(k.$1, {
                            icon: oe.xi,
                            size: "lg"
                        })), r.createElement(h.rU, {
                            to: "/home",
                            title: "home",
                            className: "logo medium"
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1leqlh9",
                                styles: "height:50px"
                            })
                        }, r.createElement("img", {
                            className: (0, c.iv)({
                                name: "1hs0n36",
                                styles: "height:90%;margin-top:0.25rem"
                            }),
                            alt: "VRChat Logo",
                            src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                        }))), r.createElement("div", {
                            className: "medium ".concat((0, c.iv)({
                                name: "1vcob1d",
                                styles: "display:flex;justify-content:center;align-items:center"
                            }))
                        }, r.createElement(Ce.Z, {
                            isOpen: y,
                            toggle: function() {
                                return x(!y)
                            }
                        }, r.createElement(Se.Z, {
                            className: "p-1 navbar-btn text-white"
                        }, F > 0 && r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1hhuku4",
                                styles: "position:absolute;top:-3px;right:-8px;background:var(--bs-primary);color:var(--bs-gray-800);min-width:23px;padding:3px;height:23px;border-radius:23px;z-index:5;font-size:80%;font-weight:bold"
                            })
                        }, F), r.createElement(k.$1, {
                            icon: ae.FU,
                            size: "lg",
                            className: (0, c.iv)({
                                name: "bqqvn3",
                                styles: "::before{font-size:25px;}"
                            })
                        }), y && r.createElement("div", {
                            className: "dropdown-arrow"
                        })), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "2ey0we",
                                styles: "transform:translateX(0)"
                            })
                        }, r.createElement(Oe.Z, {
                            className: "text-white bg-dark custom-dropdown ".concat((0, c.iv)({
                                name: "1aeu1is",
                                styles: "width:550px"
                            }))
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1c98ue0",
                                styles: "height:30px;width:100%;border-bottom:#053c48 solid 2px!important;padding-right:10px;text-align:right"
                            })
                        }, r.createElement(h.rU, {
                            onClick: function(e) {
                                M(), p("/home/messages"), e.preventDefault()
                            },
                            className: (0, c.iv)({
                                name: "oldbq4",
                                styles: "user-select:none"
                            }),
                            to: "/home/messages"
                        }, r.createElement("strong", null, "View more..."))), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "2nen93",
                                styles: "max-height:500px;overflow-y:auto;padding:0 15px;background:#041215"
                            })
                        }, F > 0 ? r.createElement(De, {
                            n: 20,
                            closeDialog: M,
                            isGroups: !1
                        }) : r.createElement("div", {
                            className: (0, c.iv)({
                                name: "qfxe82",
                                styles: "display:flex;flex-direction:column;align-items:center;padding:20px 0;opacity:0.2;user-select:none"
                            })
                        }, r.createElement(k.$1, {
                            icon: T,
                            size: "3x",
                            className: (0, c.iv)({
                                name: "1azpx8r",
                                styles: "margin-bottom:20px"
                            })
                        }), r.createElement("h6", null, S))), r.createElement("div", {
                            className: (0, c.iv)({
                                name: "pe3dyn",
                                styles: "height:30px;width:100%;border-top:#053c48 solid 2px!important"
                            })
                        }))))), r.createElement(h.rU, {
                            className: "p-1 btn navbar-btn medium",
                            to: "/home/profile",
                            title: "profile settings"
                        }, r.createElement(k.$1, {
                            icon: g.Kb,
                            size: "lg"
                        }))), r.createElement("div", {
                            className: "navbar-section center-nav"
                        }, r.createElement("div", {
                            className: "search"
                        }, r.createElement(Ye, null)), r.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                u && (s && s(!1), u())
                            }
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1ln64ce",
                                styles: "width:100%;height:20px;background-image:url('https://assets.vrchat.com/www/images/WingLeft.png');background-size:contain;background-repeat:no-repeat;background-position:center"
                            })
                        }))), r.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, r.createElement(st, null), r.createElement("a", {
                            href: "https://docs.vrchat.com/",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Docs"), r.createElement("a", {
                            href: "https://hello.vrchat.com/merch-hub",
                            target: "_blank",
                            rel: "noreferrer"
                        }, "Merch"), r.createElement("a", {
                            href: "https://hello.vrchat.com/vrchatplus",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "#ffff00"
                            }
                        }, "VRC+"), r.createElement(je.Z, {
                            className: "p-1 btn btn-secondary navbar-btn logout ".concat((0, c.iv)({
                                name: "vv8j00",
                                styles: "min-width:102px!important"
                            })),
                            to: "/home/login",
                            title: "logout",
                            onClick: D
                        }, r.createElement(k.$1, {
                            icon: J.TE
                        }), "  Logout"))))
                    }
                    return r.createElement("nav", null, r.createElement(ze.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.iv)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== U ? r.createElement(xt, {
                        to: "/home/locations",
                        title: "locations",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ie.mG
                    }), r.createElement("div", null, "Join Friends", " ", r.createElement(qe.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, U)), r.createElement(k.$1, {
                        icon: K.yO
                    })) : r.createElement(xt, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: re.J9
                    }), r.createElement("div", null, "  Home"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Ie.Z
                    }), r.createElement("div", null, "Groups"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/messages",
                        title: "messages",
                        className: "btn text-left d-sm-none",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ae.FU
                    }), r.createElement("div", null, "Messages", " ", F > 0 && r.createElement(qe.Z, {
                        className: (0, c.iv)({
                            name: "v21qw0",
                            styles: "background-color:var(--bs-primary);color:#05191d"
                        })
                    }, F)), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(gt, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: W
                    }), r.createElement(xt, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ne.q7
                    }), r.createElement("div", null, "Download"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: te.g4
                    }), r.createElement("div", null, "Discover Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ee.cf
                    }), r.createElement("div", null, "My Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Y.KC
                    }), r.createElement("div", null, "Avatars"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Avatars"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Friends"), r.createElement(k.$1, {
                        icon: K.yO
                    })), (V || L) && r.createElement(xt, {
                        to: "/home/gallery",
                        title: "gallery",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: f._j
                    }), r.createElement("div", null, "Gallery"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Ze.Z
                    }), r.createElement("div", null, "Marketplace"), r.createElement(k.$1, {
                        icon: K.yO
                    })), !1, r.createElement(xt, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == j ? void 0 : j.disableUpgradeAccount) || (null == z ? void 0 : z.steamId) && (null == z ? void 0 : z.oculusId),
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: H.x0
                    }), r.createElement("div", null, "Account Link"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: X.Ek
                    }), r.createElement("div", null, "Blocks & Mutes"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: Pe()
                    }), r.createElement("div", null, "Subscriptions"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(wt, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: D
                    }, r.createElement(k.$1, {
                        icon: J.TE
                    }), r.createElement("div", null, "Logout"), r.createElement("div", null))))
                }));
            yt.displayName = "Navbar";
            const Et = yt;
            var xt = (0, p.Z)(h.rU, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                wt = (0, p.Z)(xt, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                kt = n(50119),
                Nt = n(46320),
                Tt = n(30098),
                Zt = n(15832),
                It = [];
            const Ct = function() {
                var e = (0, o.s0)(),
                    t = (0, Zt._)("campaigns", []),
                    n = (0, a.Z)(t, 2),
                    r = n[0],
                    i = (n[1], (0, Zt._)("campaignsSeen", [])),
                    l = (0, a.Z)(i, 2),
                    c = l[0],
                    s = (l[1], function() {
                        if (c.length > 0) {
                            var e = r.filter((function(e) {
                                return -1 === c.findIndex((function(t) {
                                    return t.name === e.name
                                }))
                            }));
                            return (0, a.Z)(e, 1)[0]
                        }
                        return (0, a.Z)(r, 1)[0]
                    }());
                if (s) {
                    var u = It.find((function(e) {
                        return e.name === s.name
                    }));
                    if (u) return e(u.landingPage)
                }
                return null
            };
            var St = n(87462);
            const Ot = function(e) {
                var t = (0, d.q7)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return r.createElement(e, (0, St.Z)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var jt = n(28944),
                zt = n(9419);
            const qt = function() {
                var e = (0, i.I0)(),
                    t = (0, zt._V)(),
                    n = t.data,
                    a = t.isSuccess;
                t.isLoading;
                return r.useEffect((function() {
                    e((0, Tt._r)(n))
                }), [a, n]), null
            };
            var At = n(33622),
                Pt = n.n(At);
            var Ut = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(5508)]).then(n.bind(n, 5712))
                })),
                Rt = r.lazy((function() {
                    return Promise.all([n.e(2218), n.e(2998), n.e(8874), n.e(4666)]).then(n.bind(n, 37099))
                })),
                Dt = r.lazy((function() {
                    return n.e(3488).then(n.bind(n, 93488))
                })),
                Mt = r.lazy((function() {
                    return n.e(6231).then(n.bind(n, 76231))
                })),
                Wt = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(7202), n.e(2998), n.e(3294), n.e(1946), n.e(8043), n.e(1244), n.e(2704), n.e(5842), n.e(1388)]).then(n.bind(n, 76461))
                })),
                $t = r.lazy((function() {
                    return Promise.all([n.e(7826), n.e(852)]).then(n.bind(n, 36418))
                })),
                Vt = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(3023), n.e(390)]).then(n.bind(n, 20390))
                })),
                Lt = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(2150), n.e(2998), n.e(4444), n.e(8890), n.e(9908), n.e(3294), n.e(9375), n.e(347), n.e(929)]).then(n.bind(n, 82434))
                })),
                Ft = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(4444), n.e(8086)]).then(n.bind(n, 74444))
                })),
                Gt = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(9908), n.e(3713)]).then(n.bind(n, 39908))
                })),
                _t = r.lazy((function() {
                    return Promise.all([n.e(123), n.e(8890), n.e(5491)]).then(n.bind(n, 78890))
                })),
                Bt = r.lazy((function() {
                    return n.e(8438).then(n.bind(n, 58438))
                })),
                Jt = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(4907)]).then(n.bind(n, 44907))
                })),
                Kt = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8158), n.e(6488)]).then(n.bind(n, 92848))
                })),
                Xt = r.lazy((function() {
                    return Promise.all([n.e(5032), n.e(3261), n.e(2998), n.e(1946), n.e(347), n.e(1244), n.e(9923), n.e(8158), n.e(4896), n.e(7672)]).then(n.bind(n, 27672))
                })),
                Ht = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(3261), n.e(8158), n.e(3013)]).then(n.bind(n, 13164))
                })),
                Qt = r.lazy((function() {
                    return Promise.all([n.e(4473), n.e(8264)]).then(n.bind(n, 8264))
                })),
                Yt = r.lazy((function() {
                    return n.e(3443).then(n.bind(n, 53443))
                })),
                en = r.lazy((function() {
                    return n.e(9795).then(n.bind(n, 79795))
                })),
                tn = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(4157)]).then(n.bind(n, 50062))
                })),
                nn = r.lazy((function() {
                    return n.e(7047).then(n.bind(n, 7047))
                })),
                an = r.lazy((function() {
                    return Promise.all([n.e(2998), n.e(1952)]).then(n.bind(n, 81952))
                })),
                rn = r.lazy((function() {
                    return Promise.all([n.e(2218), n.e(2022), n.e(6780)]).then(n.bind(n, 86780))
                })),
                on = r.lazy((function() {
                    return n.e(997).then(n.bind(n, 997))
                })),
                ln = r.lazy((function() {
                    return n.e(4945).then(n.bind(n, 14945))
                })),
                cn = r.lazy((function() {
                    return n.e(6812).then(n.bind(n, 46812))
                })),
                sn = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(8906)]).then(n.bind(n, 38906))
                })),
                un = r.lazy((function() {
                    return Promise.all([n.e(2218), n.e(3261), n.e(2998), n.e(1946), n.e(8043), n.e(334)]).then(n.bind(n, 40525))
                }));
            const mn = function() {
                var e = (0, i.I0)();
                Ct();
                var t = (0, d.IB)().data,
                    n = r.useMemo((function() {
                        var e;
                        return !(null == t || null === (e = t.badges) || void 0 === e || !e.find((function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && m()().isBefore(m()(n).add(36, "hours"))
                        })))
                    }), [t]),
                    u = r.useState(!1),
                    p = (0, a.Z)(u, 2),
                    g = p[0],
                    f = p[1],
                    h = r.useState(!1),
                    v = (0, a.Z)(h, 2),
                    b = v[0],
                    y = v[1],
                    E = function(e) {
                        y(null != e ? e : !b)
                    },
                    x = function(e) {
                        f(null != e ? e : !g)
                    },
                    w = r.useCallback((function() {
                        x(window.innerWidth > 1400 && !g)
                    }), []);
                return (0, r.useEffect)((function() {
                    return e((0, Tt.Wk)()), e((0, Tt._e)()), x(window.innerWidth > 1400), window.addEventListener("resize", w),
                        function() {
                            window.removeEventListener("resize", w)
                        }
                }), []), r.createElement("div", {
                    className: (0, c.iv)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", n && (0, c.iv)("background-image:url(", Pt(), ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{max-width:2000px;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:20px 95px 0 20px;transition:padding-right 0.35s ease-in-out;}&.rightPinned{width:calc(100% - 695px);& .home-content{padding:10px 20px 0 20px;}}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1400px){& .rightbar.rightPinned{left:0;}& .hide-large{display:none;}}@media (max-width: 1400px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.rightPinned{width:100%;& .home-content{padding:10px 95px 0 20px;}}&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, r.createElement(qt, null), r.createElement("div", null, r.createElement(Et, {
                    navToggleCallback: E,
                    friendsToggleCallback: function(e) {
                        window.removeEventListener("resize", w), x(e)
                    }
                })), r.createElement(l.Z, {
                    fluid: !0
                }, r.createElement("div", null, r.createElement("div", {
                    className: "fixed-top leftbar ".concat(b ? "leftOpen" : "")
                }, r.createElement("div", {
                    className: (0, c.iv)({
                        name: "1ga2o5r",
                        styles: "width:325px;padding:0 5px"
                    })
                }, r.createElement("div", {
                    className: "hide-large ".concat((0, c.iv)({
                        name: "1bk3y4m",
                        styles: "margin-top:8px;& .dropdown-menu{padding:10px 15px 5px 15px;position:fixed!important;background-color:#506070;border-radius:0;z-index:1000;bottom:0!important;top:100px!important;margin:0!important;transform:none!important;}& .dropdown-toggle{margin-bottom:5px;}"
                    }))
                }, r.createElement(st, {
                    direction: "right"
                })), r.createElement(s.SV, {
                    fallback: jt.Z
                }, r.createElement(T, {
                    navToggleCallback: E
                })), r.createElement(s.SV, {
                    fallback: jt.Z
                }, r.createElement(Et, {
                    horizontal: !0,
                    navToggleCallback: E
                })))), r.createElement("div", {
                    className: "col-xs-12 content-scroll ".concat(g ? "rightPinned" : "")
                }, r.createElement("div", {
                    className: "home-content"
                }, r.createElement(s.SV, {
                    fallback: jt.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(kt.Z, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), r.createElement(kt.Z, {
                        delay: "50",
                        height: "480px"
                    }))
                }, r.createElement(o.Z5, null, r.createElement(o.AW, {
                    path: "/search/:query",
                    element: r.createElement(Rt, null)
                }), r.createElement(o.AW, {
                    path: "/profile",
                    element: r.createElement(Vt, null)
                }), r.createElement(o.AW, {
                    path: "/user/:userId/*",
                    element: r.createElement(sn, null)
                }), r.createElement(o.AW, {
                    path: "/uploadIcon",
                    element: Ot(Gt)()
                }), r.createElement(o.AW, {
                    path: "/uploadPhoto",
                    element: Ot(_t)()
                }), r.createElement(o.AW, {
                    path: "/uploadEmoji",
                    element: Ot(Ft)()
                }), r.createElement(o.AW, {
                    path: "/gallery/*",
                    element: r.createElement(Lt, null)
                }), r.createElement(o.AW, {
                    path: "/marketplace/*",
                    element: r.createElement(an, null)
                }), r.createElement(o.AW, {
                    path: "/wallet",
                    element: r.createElement(Nt.Z, {
                        to: "../marketplace/wallet"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/purchases/*",
                    element: r.createElement(Nt.Z, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/store/*",
                    element: r.createElement(Nt.Z, {
                        to: "../marketplace/storefront/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/locations",
                    element: r.createElement(tn, null)
                }), r.createElement(o.AW, {
                    path: "/worlds",
                    element: r.createElement(Bt, null)
                }), r.createElement(o.AW, {
                    path: "/world/:worldId/*",
                    element: r.createElement(un, null)
                }), r.createElement(o.AW, {
                    path: "/avatars",
                    element: r.createElement($t, null)
                }), r.createElement(o.AW, {
                    path: "/avatar/:avatarId",
                    element: r.createElement(Wt, null)
                }), r.createElement(o.AW, {
                    path: "/content/*",
                    element: r.createElement(rn, null)
                }), r.createElement(o.AW, {
                    path: "/messages",
                    element: r.createElement(on, null)
                }), r.createElement(o.AW, {
                    path: "/playermoderations",
                    element: r.createElement(ln, null)
                }), r.createElement(o.AW, {
                    path: "/download",
                    element: r.createElement(Dt, null)
                }), r.createElement(o.AW, {
                    path: "/groups",
                    element: r.createElement(Jt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/create",
                    element: r.createElement(Kt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search",
                    element: r.createElement(Jt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search/:query",
                    element: r.createElement(Jt, null)
                }), r.createElement(o.AW, {
                    path: "/group/:groupId/ageverification/:code",
                    element: r.createElement(Ht, null)
                }), r.createElement(o.AW, {
                    path: "/group/:groupId/*",
                    element: r.createElement(Xt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/:groupId",
                    element: r.createElement(Nt.Z, {
                        to: "../../group/:groupId"
                    })
                }), r.createElement(o.AW, {
                    path: "/ageverification",
                    element: r.createElement(Qt, null)
                }), r.createElement(o.AW, {
                    path: "/accountlink",
                    element: r.createElement(Mt, null)
                }), r.createElement(o.AW, {
                    path: "/favorites/*",
                    element: r.createElement(o.Z5, null, r.createElement(o.AW, {
                        path: "/:type",
                        element: r.createElement(Yt, null)
                    }), r.createElement(o.AW, {
                        path: "/:type/:name",
                        element: r.createElement(Yt, null)
                    }))
                }), r.createElement(o.AW, {
                    path: "/jams/*",
                    element: r.createElement(nn, null)
                }), !1, r.createElement(o.AW, {
                    path: "/subscriptions",
                    element: r.createElement(cn, null)
                }), r.createElement(o.AW, {
                    path: "/",
                    element: r.createElement(Ut, null)
                })))))), r.createElement("div", {
                    className: "fixed-top rightbar ".concat(g ? "open" : "")
                }, r.createElement(s.SV, {
                    fallback: jt.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(kt.Z, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), r.createElement(kt.Z, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), r.createElement(kt.Z, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, r.createElement(en, {
                    friendsToggleCallback: x
                })))), r.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "friends-button d-md-flex d-none",
                    onClick: function() {
                        window.removeEventListener("resize", w), x(!0)
                    }
                }, r.createElement("img", {
                    alt: "Wing Icon",
                    src: "https://assets.vrchat.com/www/images/WingLeft.png",
                    className: (0, c.iv)({
                        name: "1a5rd5y",
                        styles: "transform:scale(0.7)"
                    })
                })))), !1)
            }
        },
        31358: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Ae
            });
            var a = n(87462),
                r = n(45987),
                i = n(59545),
                o = n(68055),
                l = n(81511),
                c = n(55505),
                s = n(4241),
                u = n(21464),
                m = n(67294),
                d = n(32981),
                p = n(79655),
                g = n(30098),
                f = n(72562),
                h = n(62437),
                v = n(54546),
                b = n(42137),
                y = n(7469),
                E = n(87709),
                x = n(16995),
                w = n(67454),
                k = n(15405),
                N = n(95819),
                T = n(22601),
                Z = n(87695),
                I = n(16686),
                C = n(47947),
                S = n(53359),
                O = n(20495),
                j = n(67992),
                z = n(95896),
                q = n(27484),
                A = n.n(q),
                P = n(56176),
                U = n.n(P),
                R = n(84110),
                D = n.n(R),
                M = n(9419),
                W = n(50249),
                $ = n(13757),
                V = n(51540),
                L = n(8792),
                F = n(65322),
                G = n(87589),
                _ = n(4739),
                B = n(79036),
                J = n(59660),
                K = n(2155),
                X = n(42619),
                H = n(96231),
                Q = n(34233),
                Y = n(43714),
                ee = n(86529),
                te = n(27879),
                ne = n(98078),
                ae = n(12690),
                re = n(44641),
                ie = n(13461),
                oe = n(17319),
                le = n(20446),
                ce = n(75386),
                se = n(40098),
                ue = n(35117),
                me = n(50906),
                de = n(55346),
                pe = n(61730),
                ge = n(69323),
                fe = n(20455),
                he = n(32731),
                ve = n(57982),
                be = n(98375),
                ye = n(33805),
                Ee = {
                    edit: n(11071).Y,
                    cancel: E.faXmark,
                    history: ye.On,
                    refresh: be.faArrowsRotate,
                    search: ve.faMagnifyingGlass,
                    settings: he.faGear,
                    pin: fe.RP,
                    "arrow-up": ge.FP,
                    "arrow-down": pe.r5,
                    "arrow-left": de.ac,
                    "arrow-right": me.eF,
                    ban: ue.faBan,
                    check: o.LE,
                    plus: se.r8,
                    link: ce.nN,
                    eye: le.Md,
                    circle: oe.di,
                    star: ie.T,
                    bell: j.qm,
                    "bell-slash": re.n8,
                    bookmark: ae.xV,
                    reply: ne.Lh,
                    user: te.IL,
                    "user-circle": ee.m0,
                    "user-plus": s.FK,
                    "user-minus": Y.k9,
                    camera: Q._j,
                    display: H.YV,
                    trash: X.$,
                    feather: K.nA,
                    images: J.l9,
                    house: B.faHouse,
                    location: _.iU,
                    rocket: G.tM,
                    microphone: F.UO,
                    "folder-open": L.cC,
                    gauge: V.Iz,
                    dice: $.RJ,
                    "triangle-exclamation": S.faTriangleExclamation
                },
                xe = n(37463),
                we = n(88233),
                ke = n(2566);
            A().extend(D()), A().extend(U());
            var Ne = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: W.Z
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: j.qm
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: j.qm
                    },
                    "group.invite": {
                        caption: "Group Invite",
                        icon: l.FU
                    },
                    "group.joinRequest": {
                        caption: "Group Join Request",
                        icon: l.FU
                    },
                    "group.post": {
                        caption: "Group Post",
                        icon: j.qm
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: O.faCircleExclamation
                    },
                    "moderation.contentrestriction": {
                        caption: "Content Moderation",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: S.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: C.JH
                    },
                    "avatarreview.success": {
                        caption: "Avatar Approved",
                        icon: I.faCircleCheck
                    },
                    "avatarreview.failure": {
                        caption: "Avatar Rejected",
                        icon: Z.faCircleXmark
                    },
                    "promo.redeem": {
                        caption: "Promo",
                        icon: T.IB
                    },
                    "badge.earned": {
                        caption: "Badge Earned",
                        icon: N.U
                    },
                    "text.adventure": {
                        caption: "Adventure",
                        icon: k.Jw
                    },
                    boop: {
                        caption: "Boop",
                        icon: w.kQ
                    }
                },
                Te = {
                    OpenListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(z.yy.EXPIRING)
                    },
                    OpenExpiredListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(z.yy.EXPIRED)
                    }
                },
                Ze = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                Ie = function(e) {
                    var t, n = e.notificationId,
                        a = e.respondToNotification,
                        r = e.type,
                        i = e.data,
                        o = e.icon,
                        l = e.text;
                    return "link" === r ? null : m.createElement(ke.n9, {
                        disabled: "reply" === r,
                        onClick: function() {
                            a({
                                notificationId: n,
                                responseType: r,
                                responseData: i
                            })
                        },
                        title: "reply" === r ? "To reply, open your notifications in VRChat" : l || r
                    }, m.createElement(xe.$1, {
                        icon: (t = o, Ee[t] || t)
                    }), " ", l || r)
                };
            const Ce = function(e) {
                var t = e.notification,
                    n = e.slim,
                    r = (0, d.I0)(),
                    i = m.useState(!1),
                    o = (0, v.Z)(i, 2),
                    l = o[0],
                    c = o[1],
                    s = (0, M.S5)(),
                    f = (0, v.Z)(s, 2),
                    h = f[0],
                    w = f[1].isSuccess,
                    k = (0, M.oS)(),
                    N = (0, v.Z)(k, 2),
                    T = N[0],
                    Z = N[1].isSuccess,
                    I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.link,
                            n = (e.linkText, (null == t ? void 0 : t.split(":")) || []),
                            a = (0, v.Z)(n, 2),
                            r = a[0],
                            i = a[1];
                        if (r) return (Te[r] || Ze)({
                            linkType: r,
                            linkId: i
                        })
                    }(t),
                    C = (t.linkText || t.title, t.title || t.linkText);
                (w || Z) && r((0, g.tV)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var S = Ne[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: x.Ps
                    },
                    O = S.icon,
                    j = S.caption,
                    z = t.createdAt && A()(t.createdAt);
                return m.createElement(m.Fragment, null, m.createElement(ke.jm, null, m.createElement(ke.lR, null, m.createElement(ke.XK, null, m.createElement(xe.$1, {
                    icon: O
                }), " ", m.createElement("i", null, j)), (null == t ? void 0 : t.canDelete) && m.createElement(ke.Z2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        T({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, m.createElement(xe.$1, {
                    icon: E.faXmark
                }))), m.createElement(ke.g6, null, t.imageUrl && m.createElement(ke.rR, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: u.xY.offline.color
                }, m.createElement(ke.v_, null, m.createElement(xe.$1, {
                    icon: y.q9
                })), m.createElement(ke.sJ, {
                    url: t.imageUrl
                }), m.createElement(ke.EU, {
                    url: t.imageUrl
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, !!C && m.createElement("strong", null, I ? m.createElement(p.rU, {
                    to: I
                }, C) : C), (null == z ? void 0 : z.isValid()) && m.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, m.createElement("small", null, m.createElement("time", {
                    dateTime: t.createdAt,
                    title: z.format("llll")
                }, m.createElement(xe.$1, {
                    className: "tw-mr-1",
                    icon: b.SZ
                }), z.fromNow()))), m.createElement("p", null, t.message)), m.createElement(ke.tt, {
                    slim: n
                }, null == t ? void 0 : t.responses.map((function(e) {
                    return m.createElement(Ie, (0, a.Z)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: h
                    }))
                })))))), !!t.imageUrl && l && m.createElement(we.Z, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const Se = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    a = (0, d.I0)(),
                    r = (0, M.gS)(),
                    o = (0, v.Z)(r, 2),
                    c = o[0],
                    s = o[1].isSuccess,
                    p = (0, M.pX)(),
                    f = (0, v.Z)(p, 1)[0],
                    h = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && a((0, g.tV)({
                    notificationId: t.id
                })), m.createElement(ke.jm, null, m.createElement(ke.XK, null, m.createElement(xe.$1, {
                    icon: l.FU
                }), "  ", m.createElement("i", null, "System Message")), m.createElement(ke.g6, null, m.createElement(ke.gt, {
                    statusColor: u.xY.offline.color
                }, m.createElement(ke.sJ, {
                    url: h
                }), m.createElement(ke.EU, {
                    url: h
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, m.createElement("strong", null, "System Message"), " - ", t.message), m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        c({
                            notificationId: t.id
                        }), f({
                            notificationId: t.id
                        })
                    },
                    color: "primary",
                    title: "Close"
                }, m.createElement(xe.$1, {
                    icon: i.NB
                }), " Close")))))
            };
            var Oe = ["notification"],
                je = {
                    friendRequest: s.FK,
                    "friend-add": s.FK,
                    invite: l.FU,
                    requestInvite: l.FU,
                    requestInviteResponse: c.dw,
                    inviteResponse: c.dw,
                    message: l.FU
                },
                ze = {
                    friendRequest: "Friend Request",
                    "friend-add": "Friend Status",
                    invite: "Invite",
                    requestInvite: "Invite Request",
                    requestInviteResponse: "Invite Response",
                    inviteResponse: "Invite Response",
                    message: "System Message"
                },
                qe = ["friend-active", "friend-add", "friend-online"];
            const Ae = function(e) {
                var t, n, l, c, s, v, b, y, E = e.notification,
                    x = (0, r.Z)(e, Oe),
                    w = (0, d.I0)(),
                    k = E.type,
                    N = E.senderUserId,
                    T = E.id,
                    Z = E.message,
                    I = E.isSystem,
                    C = 2 === E.version,
                    S = "message" === k || I,
                    O = (0, h.GR)(N, {
                        skip: !N || C
                    }),
                    j = O.data,
                    z = O.isLoading,
                    q = O.error;
                if (C) return m.createElement(Ce, (0, a.Z)({}, x, {
                    notification: E
                }));
                if (z) return m.createElement("p", null, "Loading");
                if (S) return m.createElement(Se, (0, a.Z)({}, x, {
                    notification: E,
                    senderUserData: j
                }));
                if (404 === (null == q ? void 0 : q.status)) return null;
                var A, P = je[k],
                    U = ze[k],
                    R = (0, u.Tq)(j.status).color,
                    D = j.profilePicOverride || j.currentAvatarThumbnailImageUrl,
                    M = (null === (t = E.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = E.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (l = E.details) || void 0 === l ? void 0 : l.requestMessage);
                return m.createElement(ke.jm, null, m.createElement(ke.XK, null, m.createElement(xe.$1, {
                    icon: P
                }), "  ", m.createElement("i", null, U)), m.createElement(ke.g6, null, m.createElement(ke.rR, {
                    to: "/home/user/".concat(N),
                    statusColor: R
                }, !(null !== (c = E.details) && void 0 !== c && c.imageUrl) && m.createElement(ke.v_, null, "Go To Profile"), m.createElement(ke.sJ, {
                    url: null !== (s = null === (v = E.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== s ? s : D
                }), m.createElement(ke.EU, {
                    url: null !== (b = null === (y = E.details) || void 0 === y ? void 0 : y.imageUrl) && void 0 !== b ? b : D
                })), m.createElement(ke.N2, null, m.createElement(ke.gp, null, m.createElement(p.rU, {
                    to: "/home/user/".concat(N)
                }, m.createElement("strong", null, j.displayName)), " - ", Z || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (A = E.details) || void 0 === A ? void 0 : A.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [k]), "friendRequest" === k ? m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        return w((0, g.yK)({
                            notificationId: T,
                            withServer: !qe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, m.createElement(xe.$1, {
                    icon: i.NB
                })), m.createElement(ke.n9, {
                    onClick: function() {
                        w((0, g.FC)({
                            notificationId: E.id
                        })), (0, f.Kz)("Social_AcceptFriendRequest", {
                            targetUserId: E.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, m.createElement(xe.$1, {
                    icon: o.LE
                }))) : m.createElement(ke.tt, null, m.createElement(ke.n9, {
                    onClick: function() {
                        return w((0, g.yK)({
                            notificationId: T,
                            withServer: !qe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, m.createElement(xe.$1, {
                    icon: i.NB
                })), "invite" === k && m.createElement(ke.n9, {
                    onClick: function() {
                        window.open(function() {
                            var e;
                            if (null !== (e = E.details) && void 0 !== e && e.worldId) {
                                var t = "/home/launch",
                                    n = E.details.worldId.split(":");
                                return n.length > 1 ? "".concat(t, "?worldId=").concat(n[0], "&instanceId=").concat(n[1]) : "".concat(t, "?worldId=").concat(n[0])
                            }
                            return null
                        }())
                    },
                    color: "secondary"
                }, m.createElement("strong", null, "Join"))))), M && m.createElement(ke.hH, null, '"', M, '"'))
            }
        },
        2566: (e, t, n) => {
            "use strict";
            n.d(t, {
                EU: () => w,
                N2: () => d,
                XK: () => m,
                Z2: () => h,
                db: () => N,
                e5: () => k,
                g6: () => s,
                gp: () => p,
                gt: () => b,
                hH: () => u,
                jm: () => c,
                lR: () => l,
                n9: () => f,
                rR: () => E,
                sJ: () => x,
                tt: () => g,
                v_: () => v
            });
            var a = n(4965),
                r = n(34698),
                i = n(79655),
                o = n(86646);
            var l = (0, a.Z)("div", {
                    target: "ennyu4t17"
                })({
                    name: "ha9uku",
                    styles: "display:flex;width:100%;justify-content:space-between"
                }),
                c = (0, a.Z)("div", {
                    target: "ennyu4t16"
                })({
                    name: "2pn6kz",
                    styles: "overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:10px"
                }),
                s = (0, a.Z)("div", {
                    target: "ennyu4t15"
                })({
                    name: "1nyl2gd",
                    styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background:#07242b;border:#053c48 solid 2px;border-radius:8px;padding:5px"
                }),
                u = (0, a.Z)("div", {
                    target: "ennyu4t14"
                })({
                    name: "dklbma",
                    styles: "background:#053c48;padding:3px 10px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 10px"
                }),
                m = (0, a.Z)("small", {
                    target: "ennyu4t13"
                })({
                    name: "kp3m62",
                    styles: "background:#053c48;padding:3px 10px;border-top-right-radius:5px;border-top-left-radius:5px;align-self:flex-start;margin-left:10px"
                }),
                d = (0, a.Z)("div", {
                    target: "ennyu4t12"
                })({
                    name: "16jnipj",
                    styles: "display:flex;flex-direction:column;flex:1;justify-content:space-between;margin:0 5px 0 5px;&>*{margin:3px 0 3px 0;}"
                }),
                p = (0, a.Z)("div", {
                    target: "ennyu4t11"
                })({
                    name: "1v5otb0",
                    styles: "display:inline-block;flex:1;flex-direction:row;align-items:center;white-space:pre-wrap;word-break:break-word;& small{overflow:hidden;max-lines:1;white-space:nowrap;text-overflow:ellipsis;}& strong{font-size:125%;}"
                }),
                g = (0, a.Z)("div", {
                    target: "ennyu4t10"
                })("flex:1;display:flex;flex-wrap:wrap;flex-direction:row;gap:1.5rem;@media (min-width: 700px){justify-content:end;}", (function(e) {
                    return e.slim && "\n      justify-content: end;\n      font-size: 0;\n\n      & > ".concat(f, " {\n        gap: 0;\n      }\n    ")
                }), ";"),
                f = (0, a.Z)("button", {
                    target: "ennyu4t9"
                })("display:flex;align-items:center;text-align:initial;font-size:80%;border:none;background:none;margin:0;padding:3px 0;color:var(--bs-primary);cursor:pointer;gap:.5rem;&[disabled]{color:hsl(0, 0%, 60%);}&>", o.O, "{transition:all 0.1s ease-out;font-size:25px;}&:hover>", o.O, "{transform:scale(1.2);}"),
                h = (0, a.Z)(f, {
                    target: "ennyu4t8"
                })("margin:0;padding:0 .5rem;&>", o.O, "{font-size:1rem;}"),
                v = (0, a.Z)("div", {
                    target: "ennyu4t7"
                })({
                    name: "1crveaf",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                b = (0, a.Z)("div", {
                    target: "ennyu4t6"
                })("display:flex;margin:10px;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;"),
                y = (0, a.Z)(i.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "ennyu4t5"
                })("display:flex;cursor:pointer;min-width:128px;height:74px;overflow:hidden;position:relative;border-radius:4px;border:2px solid ", (function(e) {
                    return e.statusColor
                }), ";box-sizing:border-box;&:hover ", v, "{opacity:1;}"),
                E = (0, a.Z)(y, {
                    target: "ennyu4t4"
                })("align-self:flex-start;margin:10px;", (function(e) {
                    return !e.to && "\n    cursor: default;\n\n    &:hover ".concat(v, " {\n      opacity: 0;\n    }\n  ")
                }), ";"),
                x = (0, a.Z)("div", {
                    target: "ennyu4t3"
                })("position:absolute;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:70px;top:0;left:0;z-index:2;"),
                w = (0, a.Z)(x, {
                    target: "ennyu4t2"
                })({
                    name: "1gxenc0",
                    styles: "z-index:1;background-size:cover;filter:blur(20px);width:164px;height:110px;top:-20px;left:-20px"
                }),
                k = (0, a.Z)("div", {
                    target: "ennyu4t1"
                })("text-align:center;max-width:600px;margin:auto;margin-bottom:20px;opacity:", (function(e) {
                    return e.seen ? "0.8" : "1"
                }), ";border:", (function(e) {
                    return e.seen ? "0" : "2px solid yellow"
                }), ";& .card-header{text-align:left;}& .ignored{opacity:0.3;transform:scale(0.8);}"),
                N = (0, a.Z)(r.Z, {
                    target: "ennyu4t0"
                })({
                    name: "1ctac9v",
                    styles: "text-transform:capitalize;margin:0px 12px"
                })
        },
        76938: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => a
            });
            var a = function(e) {
                return e.currentUser.isMod
            }
        },
        22082: (e, t, n) => {
            "use strict";
            n.d(t, {
                MM: () => r,
                Pc: () => l,
                Zv: () => o,
                oE: () => i
            });
            var a = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getJams: e.query({
                                query: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.type,
                                        n = e.states;
                                    return {
                                        url: "jams?".concat(t ? "type=${type}&" : "").concat(n ? n.map((function(e) {
                                            return "states=".concat(e)
                                        })).join("&") : "")
                                    }
                                },
                                providesTags: ["Jams"]
                            }),
                            getJamSubmissions: e.query({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.submitterId,
                                        a = e.contentId;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        params: {
                                            submitterId: n,
                                            contentId: a
                                        }
                                    }
                                },
                                providesTags: ["JamSubmissions"]
                            }),
                            submitJamContent: e.mutation({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.contentId,
                                        a = e.description;
                                    return {
                                        url: "jams/".concat(t, "/submissions"),
                                        method: "POST",
                                        body: {
                                            contentId: n,
                                            description: a
                                        }
                                    }
                                },
                                invalidatesTags: ["JamSubmissions"]
                            }),
                            deleteSubmittedContent: e.mutation({
                                query: function(e) {
                                    var t = e.jamId,
                                        n = e.submissionId;
                                    e.silent;
                                    return {
                                        url: "jams/".concat(t, "/submissions/").concat(n),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return n.silent ? [] : ["JamSubmissions"]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Jams", "JamSubmissions"]
                }),
                r = a.useDeleteSubmittedContentMutation,
                i = a.useGetJamsQuery,
                o = a.useGetJamSubmissionsQuery,
                l = a.useSubmitJamContentMutation
        },
        9419: (e, t, n) => {
            "use strict";
            n.d(t, {
                S5: () => s,
                XJ: () => o,
                _V: () => l,
                gS: () => c,
                oS: () => i,
                pX: () => r
            });
            var a = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllV2Notifications: e.query({
                                query: function() {
                                    return "notifications?limit=100"
                                },
                                providesTags: ["V2Notifications"]
                            }),
                            acknowledgeV2Notification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "notifications/".concat(t, "/see"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            deleteV2Notification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "notifications/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            deleteAllV2Notification: e.mutation({
                                query: function() {
                                    return {
                                        url: "notifications",
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            respondToNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId,
                                        n = e.responseType,
                                        a = e.responseData;
                                    return {
                                        url: "notifications/".concat(t, "/respond"),
                                        body: {
                                            responseType: n,
                                            responseData: a
                                        },
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: ["V2Notifications"]
                            }),
                            acknowledgeNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "auth/user/notifications/".concat(t, "/see"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            hideNotification: e.mutation({
                                query: function(e) {
                                    var t = e.notificationId;
                                    return {
                                        url: "auth/user/notifications/".concat(t, "/hide"),
                                        method: "PUT"
                                    }
                                }
                            })
                        }
                    }
                }),
                r = a.useAcknowledgeNotificationMutation,
                i = (a.useAcknowledgeV2NotificationMutation, a.useDeleteV2NotificationMutation),
                o = a.useDeleteAllV2NotificationMutation,
                l = a.useGetAllV2NotificationsQuery,
                c = a.useHideNotificationMutation,
                s = a.useRespondToNotificationMutation
        },
        6655: (e, t, n) => {
            "use strict";
            n.d(t, {
                $2: () => w,
                Cv: () => E,
                En: () => m,
                O7: () => f,
                S6: () => v,
                WA: () => y,
                gI: () => x,
                gq: () => g,
                kN: () => b,
                nT: () => p,
                pp: () => h,
                v$: () => d,
                ve: () => k
            });
            var a = n(45987),
                r = n(4942),
                i = n(61509),
                o = ["redirect"],
                l = ["userId", "flowConfig"];

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = i.S.injectEndpoints({
                    endpoints: function(e) {
                        return s({
                            syncTiliaAccount: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "tilia/sync",
                                        method: "PUT",
                                        body: {
                                            userId: e.userId
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    var a = n.userId;
                                    return [{
                                        type: "TiliaTosAcceptance",
                                        id: a
                                    }, {
                                        type: "TiliaKycCompletion",
                                        id: a
                                    }]
                                }
                            }),
                            getTiliaStatus: e.query({
                                query: function() {
                                    return "tilia/status"
                                },
                                providesTags: function(e, t) {
                                    return ["TiliaStatus"]
                                }
                            }),
                            getTiliaTosAcceptance: e.query({
                                query: function(e) {
                                    var t = e.userId;
                                    return "user/".concat(t, "/tilia/tos")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaTosAcceptance",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaKycCompletion: e.query({
                                query: function(e) {
                                    var t = e.userId;
                                    return "user/".concat(t, "/tilia/kyc")
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaKycCompletion",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaBalance: e.query({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.type,
                                        a = void 0 === n ? "" : n;
                                    return "user/".concat(t, "/balance/").concat(a)
                                },
                                providesTags: function(e, t, n) {
                                    return [{
                                        type: "TiliaBalance",
                                        id: n.userId
                                    }]
                                }
                            }),
                            getTiliaPayoutMethod: e.query({
                                query: function(e) {
                                    var t = e.paymentMethodId;
                                    return "tilia/payoutMethod/".concat(t)
                                }
                            }),
                            getTiliaPayoutEligible: e.query({
                                query: function() {
                                    return "tilia/payout/eligibility"
                                }
                            }),
                            getTiliaPayoutEstimate: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/estimate",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            createTiliaPayoutRequest: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "tilia/payout/request",
                                        method: "POST",
                                        body: {
                                            paymentMethodId: e.paymentMethodId,
                                            amountTokens: e.amountTokens
                                        }
                                    }
                                }
                            }),
                            getTiliaWebRedirectUrl: e.query({
                                query: function(e) {
                                    return {
                                        url: "tilia/web/redirect",
                                        method: "POST",
                                        body: {
                                            userId: e.userId,
                                            flow: e.flow
                                        }
                                    }
                                },
                                transformResponse: function(e, t) {
                                    var n = e.redirect,
                                        r = (0, a.Z)(e, o),
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = (i.userId, i.flowConfig),
                                        u = (0, a.Z)(i, l),
                                        m = new URL(n);
                                    return c && m.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(u).forEach((function(e) {
                                        "flow" !== e && m.searchParams.set(e, u[e])
                                    })), s({
                                        redirect: m.href,
                                        rawRedirect: n
                                    }, r)
                                }
                            })
                        }, !1)
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["TiliaTosAcceptance", "TiliaKycCompletion", "TiliaBalance", "TiliaStatus"]
                }),
                m = (u.useSyncTiliaAccountMutation, u.useGetTiliaStatusQuery),
                d = u.useGetTiliaTosAcceptanceQuery,
                p = u.useSetTiliaTosAcceptanceMutation,
                g = u.useGetTiliaKycCompletionQuery,
                f = u.useSetTiliaKycCompletionMutation,
                h = u.useGetTiliaBalanceQuery,
                v = u.useGetTiliaPayoutMethodQuery,
                b = u.useGetTiliaPayoutEligibleQuery,
                y = u.useLazyGetTiliaPayoutEstimateQuery,
                E = u.useCreateTiliaPayoutRequestMutation,
                x = u.useLazyGetTiliaWebRedirectUrlQuery,
                w = u.useGiveTiliaTokenBalanceMutation,
                k = u.useTakeTiliaTokenBalanceMutation
        },
        33622: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "bc444f44110e103f-3072w.jpg 3072w",
                images: [{
                    path: n.p + "bc444f44110e103f-3072w.jpg",
                    width: 3072,
                    height: 3072
                }],
                src: n.p + "bc444f44110e103f-3072w.jpg",
                toString: function() {
                    return n.p + "bc444f44110e103f-3072w.jpg"
                },
                width: 3072,
                height: 3072
            }
        },
        93046: (e, t, n) => {
            e.exports = {
                srcSet: n.p + "b84662be12204a2e-128w.png 128w",
                images: [{
                    path: n.p + "b84662be12204a2e-128w.png",
                    width: 128,
                    height: 128
                }],
                src: n.p + "b84662be12204a2e-128w.png",
                toString: function() {
                    return n.p + "b84662be12204a2e-128w.png"
                },
                width: 128,
                height: 128
            }
        }
    }
]);
//# sourceMappingURL=6b4eee4165dd46b7d8cfef36bc5e445098c43596acf72e424dcc1decd0595e14.js.map