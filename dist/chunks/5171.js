"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5171], {
        25411: (e, t, n) => {
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
                m = {
                    sort: "created",
                    releaseStatus: "public"
                },
                u = function(e) {
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
                            search: u({
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
                            search: u({
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
                            search: u({
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
                        o = l(l({}, m), {}, {
                            search: u({
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
                                search: u({
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
                            r = l(l({}, m), {}, {
                                search: u({
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
        45861: (e, t, n) => {
            n.d(t, {
                o: () => a
            });
            var a = function(e) {
                var t = e.width,
                    n = e.height,
                    a = void 0 === n ? t : n,
                    r = e.path,
                    i = e.name;
                return {
                    icon: [t, a, [], "", r],
                    iconName: "vrchat-".concat(i),
                    prefix: "vrchat"
                }
            }
        },
        50249: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            const a = (0, n(45861).o)({
                name: "credits",
                width: 64,
                path: "m11.825 0 30.646 53.693L38.522 64 2 0h9.825Zm19.707 0 13.28 23.277L53.72 0h9.274L46.419 43.374 21.684 0h9.848Z"
            })
        },
        7503: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            const a = (0, n(45861).o)({
                name: "group",
                width: 64,
                path: "M41.61,24.28 L47.92,37.57 L49.2179049,40.3241512 C50.110782,40.1121924 51.0422891,40 52,40 C58.627417,40 64,45.372583 64,52 C64,58.627417 58.627417,64 52,64 C45.372583,64 40,58.627417 40,52 C40,48.1183234 41.8430335,44.6671104 44.7017586,42.4737028 L43.4,39.72 L37.09,26.43 C38.73,25.97 40.25,25.23 41.61,24.28 Z M12,40 C17.7701692,40 22.589132,44.0725989 23.739244,49.5001523 L37.21,49.5 C37.07,50.31 37,51.15 37,52 C37,52.85 37.07,53.69 37.21,54.5 L23.7390315,54.5008502 C22.5885386,59.9279026 17.769814,64 12,64 C5.372583,64 0,58.627417 0,52 C0,45.372583 5.372583,40 12,40 Z M33,0 L33.3049748,0.00379985776 C39.7914556,0.165607248 45,5.47454326 45,12 C45,18.627417 39.627417,24 33,24 C31.8758881,24 30.787877,23.8454341 29.7560602,23.5563959 L21.08,40.07 C19.76,39.06 18.27,38.27 16.66,37.75 L25.33,21.24 C22.6858567,19.0311889 21,15.7124709 21,12 C21,5.372583 26.372583,0 33,0 Z"
            })
        },
        88233: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n(4965),
                r = n(65394),
                i = n(85020),
                o = n(67294),
                l = n(34226);
            const c = function(e) {
                var t = e.imageUrl,
                    n = e.closeCallback,
                    a = e.nextCallback,
                    c = e.prevCallback;
                return t ? o.createElement(o.Fragment, null, o.createElement(m, {
                    onClick: n
                }), o.createElement(s, null, c && o.createElement(p, {
                    onClick: c,
                    hasCallback: c
                }, o.createElement(l.$1, {
                    icon: i.A3,
                    width: 65
                })), o.createElement(u, {
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
                m = (0, a.Z)("div", {
                    target: "eac6qxj3"
                })({
                    name: "jyw4fx",
                    styles: "position:fixed;background:rgba(0, 0, 0, 0.5);z-index:1336;top:0;left:0;width:100%;height:100%"
                }),
                u = (0, a.Z)("img", {
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
                    m = (0, r.UO)();
                if (!(0, r.GV)()) throw new Error("RedirectLayout must be used in a Router context");
                return a.useEffect((function() {
                    s((0, i.Gn)(t, m), {
                        replace: o,
                        state: l,
                        relative: c
                    })
                })), null
            }
        },
        73670: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var a = n(54546),
                r = n(95337),
                i = n(67294),
                o = n(83505),
                l = n(60994),
                c = n(87261),
                s = n(86646);
            const m = function(e) {
                var t = e.searchString,
                    n = e.initialString,
                    m = void 0 === n ? "" : n,
                    u = e.placeholder,
                    d = (0, i.useState)(m),
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
                    placeholder: null != u ? u : "Search...",
                    value: g
                }))
            }
        },
        63221: (e, t, n) => {
            n.d(t, {
                M7: () => p,
                Mw: () => r,
                TW: () => i,
                a8: () => s,
                fq: () => d,
                hp: () => m,
                iI: () => o,
                kI: () => g,
                nD: () => u,
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
                m = ["group-instance-open-create", "group-instance-plus-create", "group-instance-public-create", "group-instance-restricted-create", "*"],
                u = ["group-instance-plus-create", "*"],
                d = ["group-instance-public-create", "*"],
                p = ["group-instance-restricted-create", "*"],
                g = ["group-instance-open-create", "group-instance-restricted-create", "*"]
        },
        78006: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => ln
            });
            var a = n(54546),
                r = n(67294),
                i = n(32981),
                o = n(89250),
                l = n(53637),
                c = n(83505),
                s = n(24975),
                m = n(27484),
                u = n.n(m),
                d = n(22202),
                p = n(4965),
                g = n(47810),
                f = n(34233),
                h = n(79655),
                v = n(35773),
                b = n(95305),
                y = n(64358),
                E = n(80873),
                x = n(6655),
                w = n(12227),
                k = n(34226),
                N = (n(46326), n(72528));
            const T = function(e) {
                var t, n, i, l = e.navToggleCallback,
                    s = void 0 === l ? function() {} : l,
                    m = (0, E.Tu)(),
                    u = m.user,
                    p = m.isFetching,
                    v = m.isLoading,
                    b = (0, o.s0)(),
                    T = (0, d.q7)().data,
                    _ = void 0 === T ? [] : T,
                    J = r.useState(!1),
                    K = (0, a.Z)(J, 2),
                    X = (K[0], K[1], (0, x.pp)({
                        userId: u.id
                    }, {
                        skip: !u,
                        refetchOnMountOrArgChange: !0
                    })),
                    H = X.data,
                    Q = (void 0 === H ? {} : H).balance,
                    Y = X.isFetching;
                if (!u || v) return null;
                var ee = function() {
                        s(!1)
                    },
                    te = "online" === u.state,
                    ne = (null === (t = u.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? u.profilePicOverride : u.currentAvatarThumbnailImageUrl,
                    ae = (0, y.S6)({
                        fileUrl: ne,
                        width: "1024"
                    }),
                    re = u.userIcon ? (0, y.S6)({
                        fileUrl: u.userIcon,
                        width: "1024"
                    }) : null;
                return r.createElement(Z, {
                    className: "mx-0 mb-2"
                }, r.createElement(M, {
                    className: "d-flex mx-0 align-items-center"
                }, r.createElement(W, {
                    title: (0, w.Tq)(u.status, !0),
                    statusColor: "var(--status-".concat((0, w.Tq)(u.status), ")")
                }), r.createElement(h.rU, {
                    to: "/home/user/".concat(u.id),
                    onClick: ee
                }, u.displayName)), r.createElement($, null, p ? r.createElement(k.UU, {
                    width: "100px",
                    height: "20px",
                    className: "mb-1",
                    speed: 2,
                    radius: 6
                }) : r.createElement(h.rU, {
                    to: "/home/user/".concat(u.id),
                    "aria-label": "User Status",
                    onClick: ee
                }, u.statusDescription)), r.createElement(I, null, r.createElement(S, {
                    "aria-label": "Profile Picture",
                    to: "/home/user/".concat(u.id),
                    url: ae,
                    level: (0, w.FR)({
                        tags: u.tags
                    }),
                    onClick: ee
                }, r.createElement(O, {
                    className: "mx-0"
                }, r.createElement(j, {
                    className: "text-center"
                }, "Go To Profile")), re && r.createElement(q, {
                    role: "button",
                    "aria-label": "Go To Gallery",
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault(), (null != _ && _.includes("permission-user-icons") || null != _ && _.includes("permission-user-gallery")) && (b("/home/gallery"), ee())
                    }
                }, r.createElement(P, {
                    "aria-label": "User Icon",
                    url: re,
                    level: (0, w.FR)({
                        tags: u.tags
                    })
                }, r.createElement(A, null, r.createElement(U, {
                    icon: f._j,
                    size: "lg"
                }))), r.createElement(R, null, "Change Icon")), r.createElement(z, null)), !(null === (n = u.badges) || void 0 === n || !n.length) && r.createElement(G, null, u.badges.filter((function(e) {
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
                }) : r.createElement(V, {
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
                }, te && (null == u ? void 0 : u.location) && !["traveling", "offline"].includes(null == u ? void 0 : u.location) && r.createElement(L, {
                    className: "mx-0"
                }, r.createElement(N.Z, {
                    location: u.location,
                    userId: u.id,
                    currentUser: u,
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
                z = (0, p.Z)("div", {
                    target: "esgak1l16"
                })({
                    name: "1t7q23s",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease;background-color:rgba(0, 0, 0, 0.7);z-index:1"
                }),
                j = (0, p.Z)("div", {
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
                P = (0, p.Z)("div", {
                    target: "esgak1l13"
                })("border-radius:100%;width:80px;height:80px;border:3px solid #07242b;box-sizing:border-box;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");background-color:#05191d;display:flex;justify-content:center;align-items:center;flex-shrink:0;"),
                A = (0, p.Z)("div", {
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
                L = (0, p.Z)("div", {
                    target: "esgak1l5"
                })({
                    name: "1i2d3s7",
                    styles: ">div>div{border:none;background:none!important;}h6{margin-bottom:0;}.clearfix{display:none!important;}div:first-of-type{margin:0 0;padding:2px;}"
                }),
                V = (0, p.Z)(h.rU, {
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
                me = n(70396),
                ue = n(7975),
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
                ze = n(34698),
                je = n(58877),
                qe = n(25062);
            const Pe = n.p + "2f54c84e8bbcaf0a8801a17b841323d526b4ab69246d311bf460cbbcff173d40.png";
            var Ae = n(17219),
                Ue = n(31358);
            const Re = function(e) {
                var t = e.n,
                    n = void 0 === t ? 10 : t,
                    a = e.closeDialog,
                    o = (e.isGroups, (0, i.v9)((function(e) {
                        return e.notifications.notifications
                    })).slice(0, n) || []);
                return r.createElement("div", {
                    className: "mt-2"
                }, o.map((function(e) {
                    return r.createElement(Ue.Z, {
                        notification: e,
                        key: e.id,
                        popIn: !0,
                        slim: !0,
                        closeDialog: a
                    })
                })))
            };
            n(17563);
            var De = n(76938),
                Me = n(42138),
                We = n(4942),
                $e = n(38824),
                Le = n(87261),
                Ve = n(3126),
                Fe = n(45697),
                Ge = n.n(Fe),
                _e = n(25411),
                Be = n(72562);

            function Je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Je(Object(n), !0).forEach((function(t) {
                        (0, We.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Xe = function(e) {
                var t = e.onChangeCallback,
                    n = (0, i.I0)(),
                    o = (0, r.useState)(!1),
                    l = (0, a.Z)(o, 2),
                    c = l[0],
                    s = l[1],
                    m = (0, r.useState)(!1),
                    u = (0, a.Z)(m, 2),
                    d = u[0],
                    p = u[1],
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
                    (0, Be.Kz)("Web_Mod_SearchFilterChange", Ke(Ke({}, e), {}, {
                        autoRedirect: Z
                    })), t(e)
                }), [Z, d, h, E, N]);
                var I = function(e) {
                    return e.target.checked ? x([].concat((0, Me.Z)(E), [e.target.name])) : x(E.filter((function(t) {
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
                }, r.createElement($e.Z, {
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
                }, "Trust Rank"))), r.createElement($e.Z, {
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
                }, "Descending"))), r.createElement($e.Z, {
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
                }), r.createElement(Ve.Z, {
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
                }), r.createElement(Ve.Z, {
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
                }), r.createElement(Ve.Z, {
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
                }), r.createElement(Ve.Z, {
                    className: "ms-1",
                    for: "pastEmails"
                }, "Past Emails"))), r.createElement($e.Z, {
                    header: !0,
                    className: "text-white mx-1 mt-1 px-2"
                }, "Settings"), r.createElement("div", {
                    className: "ms-3 text-white"
                }, r.createElement("div", null, r.createElement(Le.Z, {
                    checked: Z,
                    onChange: function() {
                        return n((0, _e.Tr)())
                    },
                    type: "checkbox",
                    name: "autoDirect",
                    id: "autoDirect"
                }), r.createElement(Ve.Z, {
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
                }), r.createElement(Ve.Z, {
                    className: "ms-1",
                    for: "fuzzy"
                }, "Fuzzy")))))
            };
            Xe.propTypes = {
                onChangeCallback: Ge().func.isRequired
            };
            var He = n(73670);
            const Qe = function() {
                var e = (0, o.s0)(),
                    t = (0, o.TH)(),
                    n = "";
                t.pathname.startsWith("/home/search/") && (n = decodeURIComponent(t.pathname.substring(13)));
                var l = (0, i.v9)(De.y),
                    s = (0, r.useState)("/home/search/"),
                    m = (0, a.Z)(s, 2),
                    u = m[0],
                    d = m[1],
                    p = (0, r.useState)("/home/search/"),
                    g = (0, a.Z)(p, 2),
                    f = g[0],
                    h = (g[1], (0, r.useState)(n)),
                    v = (0, a.Z)(h, 2),
                    b = v[0],
                    y = v[1],
                    x = (0, E.Nr)(u);
                (0, r.useEffect)((function() {
                    d("/home/search/".concat(encodeURIComponent(b.replace(/#/g, "tag:"))))
                }), [f, b]), (0, r.useEffect)((function() {
                    "" !== b && e(u)
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
                            return t.preventDefault(), "" === b || e(u), null
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
                }, r.createElement(He.Z, {
                    initialString: b,
                    searchString: y
                }), l && !1))))))
            };
            var Ye = n(15861),
                et = n(24075),
                tt = n(89082),
                nt = n(64687),
                at = n.n(nt),
                rt = n(58589),
                it = n(9669),
                ot = n.n(it);
            var lt = ["public", "internal"];
            const ct = function(e) {
                var t = e.direction,
                    n = r.useState([]),
                    l = (0, a.Z)(n, 2),
                    s = l[0],
                    m = l[1],
                    u = r.useState(""),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    g = d[1],
                    f = (0, o.TH)(),
                    h = (0, i.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    b = function() {
                        var e = (0, Ye.Z)(at().mark((function e() {
                            var t, n, a;
                            return at().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = window.apiUrl("/api/1/frontend/branches"), e.next = 3, ot().get(t);
                                    case 3:
                                        n = e.sent, a = n.data.filter((function(e) {
                                            return "main" !== e
                                        })), m(["main"].concat((0, Me.Z)(a)));
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
                            return lt.map((function(n, a) {
                                if ("public" !== n && !h) return null;
                                var i = "".concat(n, "-").concat(e) === "".concat("public", "-").concat("main"),
                                    o = ["dropdown-item", "px-2", "py-1", t(e) ? "" : (0, c.iv)({
                                        name: "1kf9iok",
                                        styles: "height:0;overflow-y:hidden;padding:0 8px!important"
                                    })];
                                i && o.push("active");
                                var l = {
                                    className: ["public" === n ? "text-success" : "text-danger", "main" === e ? "" : "mx-1"].join(" "),
                                    icon: "main" === e ? "public" === n ? re.J9 : tt.c : et.mh
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
                return s.length <= 1 ? null : r.createElement("div", null, r.createElement(rt.Z, {
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
                    icon: et.mh
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
            var st = n(63221),
                mt = n(72065),
                ut = n(22082),
                dt = n(56395);
            const pt = function(e) {
                var t = e.to,
                    n = e.title,
                    a = e.onClick,
                    i = (0, ut.oE)({
                        states: [dt.g1.ANNOUNCED, dt.g1.SUBMISSIONS_OPEN, dt.g1.SUBMISSIONS_CLOSED, dt.g1.WINNERS_SELECTED]
                    }).data,
                    o = null == i ? void 0 : i.every((function(e) {
                        return !Object.keys(e).includes("state")
                    }));
                if (!i || 0 === (null == i ? void 0 : i.length) || o) return null;
                var l = i[0];
                return r.createElement(gt, {
                    to: t,
                    title: n,
                    className: "btn text-left",
                    onClick: a
                }, r.createElement(ft, {
                    icon: mt.Ww
                }), r.createElement("div", null, dt.p6[l.state]), r.createElement(k.$1, {
                    icon: K.yO
                }))
            };
            var gt = (0, p.Z)(h.rU, {
                    target: "eq9q68u1"
                })({
                    name: "wjiy21",
                    styles: "border:#7e24ab solid 2px;color:#f7c94b;background:#5a1995;text-shadow:0 0 5px #7e24ab;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{align-self:center;font-weight:bold;}&:hover{background:#5a1995;color:#f7c94b;border-color:#ca34de;transform:scale(1.1);}"
                }),
                ft = (0, p.Z)(k.$1, {
                    target: "eq9q68u0"
                })({
                    name: "e9mo3t",
                    styles: "transform:rotate(10deg)"
                });
            var ht = [Te.R7, Ne.od, ke.tM, we.RK, xe.I3, Ee.nG, ye.jO, be.uS, ve.dy, he.XG, fe.BD, ge.ok, pe.Sv, de.qA, ue.I1, me.Nk, se.uj, ce.io, le.l9],
                vt = ["Your inbox is empty!", "No more mail, sorry!", "Looks like you're all caught up!", "If you had mail, it would be here!", "Sorry, no mail right now!", "This is where I'd put my mail, IF I HAD SOME!", "All your mail are belong to this inbox!", "You've got no mail!", "Carrier pigeons are standing by.", "You: 1, Mail: 0", "No thoughts, mailbox empty.", "Chill Empty Mailboxes to Study/Work/Relax To.", "Now That's What I Call An Empty Mailbox.", "No breadcrumbs here; Move along birds.", "Mail never arrives early nor late, but precisely when its sender means it to.", "Dude, where's my mail?", "I'd joke about how you have no mail, but I always mess up the delivery."],
                bt = r.memo((function(e) {
                    var t, n, l = e.horizontal,
                        s = e.navToggleCallback,
                        m = e.friendsToggleCallback,
                        u = function(e) {
                            return Math.floor(Math.random() * e)
                        },
                        p = (0, o.s0)(),
                        v = r.useState(!1),
                        b = (0, a.Z)(v, 2),
                        y = b[0],
                        x = b[1],
                        w = r.useState(ht[Math.floor(u(ht.length))]),
                        N = (0, a.Z)(w, 2),
                        T = N[0],
                        Z = N[1],
                        I = r.useState(vt[u(vt.length)]),
                        C = (0, a.Z)(I, 2),
                        S = C[0],
                        O = C[1],
                        z = (0, Ae.y)().data,
                        j = ((0, E.pc)(), (0, d.XC)().data),
                        q = (0, i.v9)((function(e) {
                            return e.notifications.notifications
                        })) || [],
                        P = (0, d.q7)().data,
                        A = void 0 === P ? [] : P,
                        U = (0, E.CZ)().sortedLocations.length,
                        R = (0, i.v9)((function(e) {
                            return e.notifications.groupNotifications
                        })) || [];
                    (0, r.useEffect)((function() {
                        y && (Z(ht[u(ht.length)]), O(vt[u(vt.length)]))
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
                        $ = A || [],
                        L = $.includes("permission-user-icons"),
                        V = $.includes("permission-user-gallery"),
                        F = ($.includes("permission-groups-beta"), null !== (t = q.length) && void 0 !== t ? t : 0);
                    n = R.filter((function(e) {
                        return e.state === st.oq.INVITED
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
                                s && (m && m(!1), s())
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
                        }, F > 0 ? r.createElement(Re, {
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
                        }, r.createElement(Qe, null)), r.createElement("button", {
                            type: "button",
                            className: "p-1 btn btn-secondary navbar-btn d-md-none",
                            onClick: function() {
                                m && (s && s(!1), m())
                            }
                        }, r.createElement("div", {
                            className: (0, c.iv)({
                                name: "1ln64ce",
                                styles: "width:100%;height:20px;background-image:url('https://assets.vrchat.com/www/images/WingLeft.png');background-size:contain;background-repeat:no-repeat;background-position:center"
                            })
                        }))), r.createElement("div", {
                            className: "navbar-section right-nav d-xl-flex d-none"
                        }, r.createElement(ct, null), r.createElement("a", {
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
                        }, "VRC+"), r.createElement(ze.Z, {
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
                    return r.createElement("nav", null, r.createElement(je.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100 ".concat((0, c.iv)({
                            name: "1bfow8s",
                            styles: "padding:0 10px;&>a{margin-bottom:10px;}"
                        }))
                    }, 0 !== U ? r.createElement(Et, {
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
                    })) : r.createElement(Et, {
                        to: "/home",
                        title: "home",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: re.J9
                    }), r.createElement("div", null, "  Home"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/groups",
                        title: "groups",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Ie.Z
                    }), r.createElement("div", null, "Groups"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
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
                    })), r.createElement(pt, {
                        to: "/home/jams",
                        title: "Jam",
                        onClick: W
                    }), r.createElement(Et, {
                        to: "/home/download",
                        title: "download",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ne.q7
                    }), r.createElement("div", null, "Download"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/worlds",
                        title: "worlds",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: te.g4
                    }), r.createElement("div", null, "Discover Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/content/worlds",
                        title: "My Worlds",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: ee.cf
                    }), r.createElement("div", null, "My Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/avatars",
                        title: "avatars",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Y.KC
                    }), r.createElement("div", null, "Avatars"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/favorites/world",
                        title: "Favorite Worlds",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Worlds"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/favorites/avatar",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Avatars"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/favorites/friend",
                        title: "Favorite Avatars",
                        className: "btn nav-button text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Q.T
                    }), r.createElement("div", null, "Favorite Friends"), r.createElement(k.$1, {
                        icon: K.yO
                    })), (L || V) && r.createElement(Et, {
                        to: "/home/gallery",
                        title: "gallery",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: f._j
                    }), r.createElement("div", null, "Gallery"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/marketplace",
                        title: "marketplace",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: Ze.Z
                    }), r.createElement("div", null, "Marketplace"), r.createElement(k.$1, {
                        icon: K.yO
                    })), !1, r.createElement(Et, {
                        to: "/home/accountlink",
                        title: "accountLink",
                        className: "btn text-left",
                        hidden: (null == z ? void 0 : z.disableUpgradeAccount) || (null == j ? void 0 : j.steamId) && (null == j ? void 0 : j.oculusId),
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: H.x0
                    }), r.createElement("div", null, "Account Link"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/playermoderations",
                        title: "playermoderations",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement(k.$1, {
                        icon: X.Ek
                    }), r.createElement("div", null, "Blocks & Mutes"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(Et, {
                        to: "/home/subscriptions",
                        title: "subscriptions",
                        className: "btn text-left",
                        onClick: W
                    }, r.createElement("img", {
                        alt: "subscriptions",
                        width: "25",
                        src: Pe
                    }), r.createElement("div", null, "Subscriptions"), r.createElement(k.$1, {
                        icon: K.yO
                    })), r.createElement(xt, {
                        to: "/home/login",
                        title: "logout",
                        className: "btn text-left d-xl-none",
                        onClick: D
                    }, r.createElement(k.$1, {
                        icon: J.TE
                    }), r.createElement("div", null, "Logout"), r.createElement("div", null))))
                }));
            bt.displayName = "Navbar";
            const yt = bt;
            var Et = (0, p.Z)(h.rU, {
                    target: "e18dqzxk1"
                })({
                    name: "yjay0l",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px!important;display:flex;flex-direction:row;align-content:start;align-items:center;justify-content:space-between;height:45px;box-shadow:none!important;padding:0 10px!important;span:before{font-size:25px;}div{font-weight:normal;align-self:center;}&:hover{background:#07343f;border-color:#086c84;transform:scale(1.1);}"
                }),
                xt = (0, p.Z)(Et, {
                    target: "e18dqzxk0"
                })({
                    name: "vkod7",
                    styles: "color:#ee5454;background:#07242b;border:#ee5454 solid 4px;&:hover{border-color:#ee6464;}"
                }),
                wt = n(50119),
                kt = n(46320),
                Nt = n(30098),
                Tt = n(15832),
                Zt = [];
            const It = function() {
                var e = (0, o.s0)(),
                    t = (0, Tt._)("campaigns", []),
                    n = (0, a.Z)(t, 2),
                    r = n[0],
                    i = (n[1], (0, Tt._)("campaignsSeen", [])),
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
                    var m = Zt.find((function(e) {
                        return e.name === s.name
                    }));
                    if (m) return e(m.landingPage)
                }
                return null
            };
            var Ct = n(87462);
            const St = function(e) {
                var t = (0, d.q7)().data,
                    n = void 0 === t ? [] : t;
                return function(t) {
                    return r.createElement(e, (0, Ct.Z)({}, t, {
                        currentUserPermissions: n
                    }))
                }
            };
            var Ot = n(28944),
                zt = n(9419);
            const jt = function() {
                    var e = (0, i.I0)(),
                        t = (0, zt._V)(),
                        n = t.data,
                        a = t.isSuccess;
                    t.isLoading;
                    return r.useEffect((function() {
                        e((0, Nt._r)(n))
                    }), [a, n]), null
                },
                qt = n.p + "4237ca770f17680f3d2d0178803a80813b464ec58fc9ea496c992fcce193d614.jpg";
            var Pt = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(5508)]).then(n.bind(n, 5712))
                })),
                At = r.lazy((function() {
                    return Promise.all([n.e(8005), n.e(2998), n.e(8874), n.e(587)]).then(n.bind(n, 37099))
                })),
                Ut = r.lazy((function() {
                    return n.e(3488).then(n.bind(n, 93488))
                })),
                Rt = r.lazy((function() {
                    return n.e(6231).then(n.bind(n, 76231))
                })),
                Dt = r.lazy((function() {
                    return Promise.all([n.e(5778), n.e(1259), n.e(4734)]).then(n.bind(n, 87429))
                })),
                Mt = r.lazy((function() {
                    return Promise.all([n.e(7826), n.e(852)]).then(n.bind(n, 36418))
                })),
                Wt = r.lazy((function() {
                    return Promise.all([n.e(8170), n.e(1572)]).then(n.bind(n, 71572))
                })),
                $t = r.lazy((function() {
                    return Promise.all([n.e(8744), n.e(430), n.e(6681), n.e(4444), n.e(9908), n.e(229), n.e(2045), n.e(347), n.e(2998), n.e(4353)]).then(n.bind(n, 82434))
                })),
                Lt = r.lazy((function() {
                    return Promise.all([n.e(8744), n.e(4444), n.e(5082)]).then(n.bind(n, 74444))
                })),
                Vt = r.lazy((function() {
                    return Promise.all([n.e(8744), n.e(9908), n.e(2432)]).then(n.bind(n, 39908))
                })),
                Ft = r.lazy((function() {
                    return Promise.all([n.e(8744), n.e(6681), n.e(229), n.e(8598)]).then(n.bind(n, 60229))
                })),
                Gt = r.lazy((function() {
                    return n.e(1264).then(n.bind(n, 82296))
                })),
                _t = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(8666), n.e(1968)]).then(n.bind(n, 44907))
                })),
                Bt = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9714), n.e(6488)]).then(n.bind(n, 92848))
                })),
                Jt = r.lazy((function() {
                    return Promise.all([n.e(6736), n.e(3261), n.e(347), n.e(2998), n.e(9923), n.e(4896), n.e(9714), n.e(5939)]).then(n.bind(n, 50464))
                })),
                Kt = r.lazy((function() {
                    return n.e(3443).then(n.bind(n, 53443))
                })),
                Xt = r.lazy((function() {
                    return n.e(9795).then(n.bind(n, 79795))
                })),
                Ht = r.lazy((function() {
                    return Promise.all([n.e(3261), n.e(9923), n.e(4157)]).then(n.bind(n, 50062))
                })),
                Qt = r.lazy((function() {
                    return n.e(7047).then(n.bind(n, 7047))
                })),
                Yt = r.lazy((function() {
                    return Promise.all([n.e(2998), n.e(1952)]).then(n.bind(n, 81952))
                })),
                en = r.lazy((function() {
                    return Promise.all([n.e(8005), n.e(1357), n.e(6780)]).then(n.bind(n, 86780))
                })),
                tn = r.lazy((function() {
                    return n.e(997).then(n.bind(n, 997))
                })),
                nn = r.lazy((function() {
                    return n.e(4945).then(n.bind(n, 14945))
                })),
                an = r.lazy((function() {
                    return n.e(7024).then(n.bind(n, 48192))
                })),
                rn = r.lazy((function() {
                    return Promise.all([n.e(1364), n.e(3261), n.e(8666), n.e(147)]).then(n.bind(n, 147))
                })),
                on = r.lazy((function() {
                    return Promise.all([n.e(8005), n.e(3261), n.e(1259), n.e(9327)]).then(n.bind(n, 48755))
                }));
            const ln = function() {
                var e = (0, i.I0)();
                It();
                var t = (0, d.IB)().data,
                    n = r.useMemo((function() {
                        var e;
                        return !(null == t || null === (e = t.badges) || void 0 === e || !e.find((function(e) {
                            var t = e.badgeId,
                                n = e.assignedAt;
                            return "bdg_7eb9a093-8711-4f27-a10b-4a4eae878a8c" === t && u()().isBefore(u()(n).add(36, "hours"))
                        })))
                    }), [t]),
                    m = r.useState(!1),
                    p = (0, a.Z)(m, 2),
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
                    return e((0, Nt.Wk)()), e((0, Nt._e)()), x(window.innerWidth > 1400), window.addEventListener("resize", w),
                        function() {
                            window.removeEventListener("resize", w)
                        }
                }), []), r.createElement("div", {
                    className: (0, c.iv)("& .leftbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(90deg, #050505 50%, #050505ef 100%);padding:0 3px 3px 3px;z-index:30;top:60px;width:285px;min-width:285px;height:calc(100% - 60px);position:fixed;overflow-y:auto;display:flex;justify-content:center;}& .rightbar{transition:left 0.5s ease-in-out;background:#050505;background:linear-gradient(270deg, #050505 50%, #050505ef 100%);padding:0;top:60px;width:410px;min-width:410px;z-index:50;height:calc(100% - 60px);margin-left:calc(100% - 410px);position:fixed;left:410px;&.open{left:0;}}& .content-scroll{top:60px;left:285px;position:absolute;overflow-y:auto;overflow-x:hidden;width:calc(100% - 285px);height:calc(100% - 60px);transition:width 0.5s ease-in-out,left 0.5s ease-in-out;background-image:url('https://assets.vrchat.com/www/images/Background_lines.svg');background-repeat:no-repeat;background-size:auto 100%;", n && (0, c.iv)("background-image:url(", qt, ");background-size:cover;background-position:bottom right;&>*{filter:drop-shadow(#714513 0 .125rem .25rem);}", ""), " & .home-content{max-width:2000px;margin:0 auto;display:flex;flex-direction:column;height:100%;padding:10px 95px 0 20px;transition:padding-right 0.35s ease-in-out;}&.rightPinned{width:calc(100% - 695px);& .home-content{padding:10px 20px 0 20px;}}&.leftOpen{width:calc(100% - 410px)!important;}}& .friends-button{width:65px;height:65px;top:70px;right:25px;transition:all 0.1s ease-in;border-radius:100%;background:#07242b;border:#053c48 solid 4px;position:fixed;display:flex;align-items:center;justify-content:center;&:hover{transform:scale(1.05);cursor:pointer;background:#05191d;}&:active{transform:scale(0.95);background:#053c48;}}@media (min-width: 1400px){& .rightbar.rightPinned{left:0;}& .hide-large{display:none;}}@media (max-width: 1400px){& .leftbar{top:60px;left:-285px;&.leftOpen{left:0;}}& .content-scroll{top:60px;left:0;width:100%;height:calc(100% - 60px);&.rightPinned{width:100%;& .home-content{padding:10px 95px 0 20px;}}&.leftOpen{width:100%!important;}}}@media (max-width: 768px){& .friends-button{display:none;}& .home-content{padding:10px 5px 0 5px!important;}& .leftbar{width:100%;left:-100%;min-width:auto!important;}& .rightbar{width:100%;left:100%;margin:0;min-width:auto!important;}}", "")
                }, r.createElement(jt, null), r.createElement("div", null, r.createElement(yt, {
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
                }, r.createElement(ct, {
                    direction: "right"
                })), r.createElement(s.SV, {
                    fallback: Ot.Z
                }, r.createElement(T, {
                    navToggleCallback: E
                })), r.createElement(s.SV, {
                    fallback: Ot.Z
                }, r.createElement(yt, {
                    horizontal: !0,
                    navToggleCallback: E
                })))), r.createElement("div", {
                    className: "col-xs-12 content-scroll ".concat(g ? "rightPinned" : "")
                }, r.createElement("div", {
                    className: "home-content"
                }, r.createElement(s.SV, {
                    fallback: Ot.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(wt.Z, {
                        className: "tw-mb-2",
                        height: "2.5rem"
                    }), r.createElement(wt.Z, {
                        delay: "50",
                        height: "480px"
                    }))
                }, r.createElement(o.Z5, null, r.createElement(o.AW, {
                    path: "/search/:query",
                    element: r.createElement(At, null)
                }), r.createElement(o.AW, {
                    path: "/profile",
                    element: r.createElement(Wt, null)
                }), r.createElement(o.AW, {
                    path: "/user/:userId/*",
                    element: r.createElement(rn, null)
                }), r.createElement(o.AW, {
                    path: "/uploadIcon",
                    element: St(Vt)()
                }), r.createElement(o.AW, {
                    path: "/uploadPhoto",
                    element: St(Ft)()
                }), r.createElement(o.AW, {
                    path: "/uploadEmoji",
                    element: St(Lt)()
                }), r.createElement(o.AW, {
                    path: "/gallery/*",
                    element: r.createElement($t, null)
                }), r.createElement(o.AW, {
                    path: "/marketplace/*",
                    element: r.createElement(Yt, null)
                }), r.createElement(o.AW, {
                    path: "/wallet",
                    element: r.createElement(kt.Z, {
                        to: "../marketplace/wallet"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/purchases/*",
                    element: r.createElement(kt.Z, {
                        to: "../marketplace/wallet/subscriptions/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/wallet/store/*",
                    element: r.createElement(kt.Z, {
                        to: "../marketplace/storefront/*"
                    })
                }), r.createElement(o.AW, {
                    path: "/locations",
                    element: r.createElement(Ht, null)
                }), r.createElement(o.AW, {
                    path: "/worlds",
                    element: r.createElement(Gt, null)
                }), r.createElement(o.AW, {
                    path: "/world/:worldId",
                    element: r.createElement(on, null)
                }), r.createElement(o.AW, {
                    path: "/avatars",
                    element: r.createElement(Mt, null)
                }), r.createElement(o.AW, {
                    path: "/avatar/:avatarId",
                    element: r.createElement(Dt, null)
                }), r.createElement(o.AW, {
                    path: "/content/*",
                    element: r.createElement(en, null)
                }), r.createElement(o.AW, {
                    path: "/messages",
                    element: r.createElement(tn, null)
                }), r.createElement(o.AW, {
                    path: "/playermoderations",
                    element: r.createElement(nn, null)
                }), r.createElement(o.AW, {
                    path: "/download",
                    element: r.createElement(Ut, null)
                }), r.createElement(o.AW, {
                    path: "/groups",
                    element: r.createElement(_t, null)
                }), r.createElement(o.AW, {
                    path: "/groups/create",
                    element: r.createElement(Bt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search",
                    element: r.createElement(_t, null)
                }), r.createElement(o.AW, {
                    path: "/groups/search/:query",
                    element: r.createElement(_t, null)
                }), r.createElement(o.AW, {
                    path: "/group/:groupId/*",
                    element: r.createElement(Jt, null)
                }), r.createElement(o.AW, {
                    path: "/groups/:groupId",
                    element: r.createElement(kt.Z, {
                        to: "../../group/:groupId"
                    })
                }), r.createElement(o.AW, {
                    path: "/accountlink",
                    element: r.createElement(Rt, null)
                }), r.createElement(o.AW, {
                    path: "/favorites/*",
                    element: r.createElement(o.Z5, null, r.createElement(o.AW, {
                        path: "/:type",
                        element: r.createElement(Kt, null)
                    }), r.createElement(o.AW, {
                        path: "/:type/:name",
                        element: r.createElement(Kt, null)
                    }))
                }), r.createElement(o.AW, {
                    path: "/jams/*",
                    element: r.createElement(Qt, null)
                }), !1, r.createElement(o.AW, {
                    path: "/subscriptions",
                    element: r.createElement(an, null)
                }), r.createElement(o.AW, {
                    path: "/",
                    element: r.createElement(Pt, null)
                })))))), r.createElement("div", {
                    className: "fixed-top rightbar ".concat(g ? "open" : "")
                }, r.createElement(s.SV, {
                    fallback: Ot.Z
                }, r.createElement(r.Suspense, {
                    fallback: r.createElement(r.Fragment, null, r.createElement(wt.Z, {
                        className: "tw-m-6 tw-mb-4",
                        height: "2.25rem"
                    }), r.createElement(wt.Z, {
                        className: "tw-m-6 tw-mt-0",
                        delay: "50",
                        height: "1.75rem"
                    }), r.createElement(wt.Z, {
                        className: "tw-m-6",
                        delay: "100",
                        height: "480px"
                    }))
                }, r.createElement(Xt, {
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
            n.d(t, {
                Z: () => ze
            });
            var a = n(87462),
                r = n(45987),
                i = n(59545),
                o = n(68055),
                l = n(81511),
                c = n(55505),
                s = n(4241),
                m = n(21464),
                u = n(67294),
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
                N = n(22601),
                T = n(47947),
                Z = n(53359),
                I = n(20495),
                C = n(67992),
                S = n(11976),
                O = n(27484),
                z = n.n(O),
                j = n(56176),
                q = n.n(j),
                P = n(84110),
                A = n.n(P),
                U = n(9419),
                R = n(50249),
                D = n(13757),
                M = n(51540),
                W = n(8792),
                $ = n(65322),
                L = n(87589),
                V = n(4739),
                F = n(79036),
                G = n(59660),
                _ = n(2155),
                B = n(42619),
                J = n(96231),
                K = n(34233),
                X = n(43714),
                H = n(86529),
                Q = n(27879),
                Y = n(98078),
                ee = n(12690),
                te = n(44641),
                ne = n(13461),
                ae = n(17319),
                re = n(20446),
                ie = n(75386),
                oe = n(40098),
                le = n(35117),
                ce = n(50906),
                se = n(55346),
                me = n(61730),
                ue = n(69323),
                de = n(20455),
                pe = n(32731),
                ge = n(57982),
                fe = n(98375),
                he = n(33805),
                ve = {
                    edit: n(11071).faPenToSquare,
                    cancel: E.faXmark,
                    history: he.faClockRotateLeft,
                    refresh: fe.faArrowsRotate,
                    search: ge.faMagnifyingGlass,
                    settings: pe.faGear,
                    pin: de.RP,
                    "arrow-up": ue.FP,
                    "arrow-down": me.r5,
                    "arrow-left": se.ac,
                    "arrow-right": ce.eF,
                    ban: le.faBan,
                    check: o.LE,
                    plus: oe.r8,
                    link: ie.nN,
                    eye: re.Md,
                    circle: ae.di,
                    star: ne.T,
                    bell: C.qm,
                    "bell-slash": te.n8,
                    bookmark: ee.xV,
                    reply: Y.Lh,
                    user: Q.IL,
                    "user-circle": H.m0,
                    "user-plus": s.FK,
                    "user-minus": X.k9,
                    camera: K._j,
                    display: J.YV,
                    trash: B.$,
                    feather: _.nA,
                    images: G.l9,
                    house: F.faHouse,
                    location: V.iU,
                    rocket: L.tM,
                    microphone: $.UO,
                    "folder-open": W.cC,
                    gauge: M.Iz,
                    dice: D.RJ,
                    "triangle-exclamation": Z.faTriangleExclamation
                },
                be = n(34226),
                ye = n(88233),
                Ee = n(2566);
            z().extend(A()), z().extend(q());
            var xe = {
                    "economy.alert": {
                        caption: "Economy",
                        icon: R.Z
                    },
                    "group.announcement": {
                        caption: "Group Announcement",
                        icon: C.qm
                    },
                    "group.informative": {
                        caption: "Group",
                        icon: C.qm
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
                        icon: C.qm
                    },
                    "invite.instance.contentGated": {
                        caption: "Content Gated",
                        icon: I.faCircleExclamation
                    },
                    "moderation.contentrestriction.dmca": {
                        caption: "Content Restricted",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.notice": {
                        caption: "Moderation Notice",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.warning.group": {
                        caption: "Group Moderation Warning",
                        icon: Z.faTriangleExclamation
                    },
                    "moderation.report.closed": {
                        caption: "Moderation",
                        icon: T.JH
                    },
                    "promo.redeem": {
                        caption: "Promo",
                        icon: N.IB
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
                we = {
                    OpenListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(S.yy.EXPIRING)
                    },
                    OpenExpiredListingDetails: function(e) {
                        e.linkType, e.linkId;
                        return "/home/marketplace/wallet/subscriptions/".concat(S.yy.EXPIRED)
                    }
                },
                ke = function(e) {
                    var t = e.linkType,
                        n = e.linkId;
                    return "/home/".concat(t, "/").concat(n)
                },
                Ne = function(e) {
                    var t, n = e.notificationId,
                        a = e.respondToNotification,
                        r = e.type,
                        i = e.data,
                        o = e.icon,
                        l = e.text;
                    return "link" === r ? null : u.createElement(Ee.n9, {
                        disabled: "reply" === r,
                        onClick: function() {
                            a({
                                notificationId: n,
                                responseType: r,
                                responseData: i
                            })
                        },
                        title: "reply" === r ? "To reply, open your notifications in VRChat" : l || r
                    }, u.createElement(be.$1, {
                        icon: (t = o, ve[t] || t)
                    }), " ", l || r)
                };
            const Te = function(e) {
                var t = e.notification,
                    n = e.slim,
                    r = (0, d.I0)(),
                    i = u.useState(!1),
                    o = (0, v.Z)(i, 2),
                    l = o[0],
                    c = o[1],
                    s = (0, U.S5)(),
                    f = (0, v.Z)(s, 2),
                    h = f[0],
                    w = f[1].isSuccess,
                    k = (0, U.oS)(),
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
                        if (r) return (we[r] || ke)({
                            linkType: r,
                            linkId: i
                        })
                    }(t),
                    C = (t.linkText || t.title, t.title || t.linkText);
                (w || Z) && r((0, g.tV)({
                    notificationId: null == t ? void 0 : t.id
                }));
                var S = xe[null == t ? void 0 : t.type] || {
                        caption: null == t ? void 0 : t.type,
                        icon: x.Ps
                    },
                    O = S.icon,
                    j = S.caption,
                    q = t.createdAt && z()(t.createdAt);
                return u.createElement(u.Fragment, null, u.createElement(Ee.jm, null, u.createElement(Ee.lR, null, u.createElement(Ee.XK, null, u.createElement(be.$1, {
                    icon: O
                }), " ", u.createElement("i", null, j)), (null == t ? void 0 : t.canDelete) && u.createElement(Ee.Z2, {
                    title: "Dismiss Notification",
                    onClick: function() {
                        T({
                            notificationId: null == t ? void 0 : t.id
                        })
                    }
                }, u.createElement(be.$1, {
                    icon: E.faXmark
                }))), u.createElement(Ee.g6, null, t.imageUrl && u.createElement(Ee.rR, {
                    to: !0,
                    onClick: function() {
                        c(!0)
                    },
                    statusColor: m.xY.offline.color
                }, u.createElement(Ee.v_, null, u.createElement(be.$1, {
                    icon: y.q9
                })), u.createElement(Ee.sJ, {
                    url: t.imageUrl
                }), u.createElement(Ee.EU, {
                    url: t.imageUrl
                })), u.createElement(Ee.N2, null, u.createElement(Ee.gp, null, !!C && u.createElement("strong", null, I ? u.createElement(p.rU, {
                    to: I
                }, C) : C), (null == q ? void 0 : q.isValid()) && u.createElement("p", {
                    className: "tw-mb-0 tw-text-gray-400"
                }, u.createElement("small", null, u.createElement("time", {
                    dateTime: t.createdAt,
                    title: q.format("llll")
                }, u.createElement(be.$1, {
                    className: "tw-mr-1",
                    icon: b.SZ
                }), q.fromNow()))), u.createElement("p", null, t.message)), u.createElement(Ee.tt, {
                    slim: n
                }, null == t ? void 0 : t.responses.map((function(e) {
                    return u.createElement(Ne, (0, a.Z)({
                        key: "".concat(null == t ? void 0 : t.id, "-").concat(e.type)
                    }, e, {
                        notificationId: null == t ? void 0 : t.id,
                        respondToNotification: h
                    }))
                })))))), !!t.imageUrl && l && u.createElement(ye.Z, {
                    imageUrl: t.imageUrl,
                    closeCallback: function() {
                        c(!1)
                    }
                }))
            };
            const Ze = function(e) {
                var t = e.notification,
                    n = e.senderUserData,
                    a = (0, d.I0)(),
                    r = (0, U.gS)(),
                    o = (0, v.Z)(r, 2),
                    c = o[0],
                    s = o[1].isSuccess,
                    p = (0, U.pX)(),
                    f = (0, v.Z)(p, 1)[0],
                    h = n.profilePicOverride || n.currentAvatarThumbnailImageUrl;
                return s && a((0, g.tV)({
                    notificationId: t.id
                })), u.createElement(Ee.jm, null, u.createElement(Ee.XK, null, u.createElement(be.$1, {
                    icon: l.FU
                }), "  ", u.createElement("i", null, "System Message")), u.createElement(Ee.g6, null, u.createElement(Ee.gt, {
                    statusColor: m.xY.offline.color
                }, u.createElement(Ee.sJ, {
                    url: h
                }), u.createElement(Ee.EU, {
                    url: h
                })), u.createElement(Ee.N2, null, u.createElement(Ee.gp, null, u.createElement("strong", null, "System Message"), " - ", t.message), u.createElement(Ee.tt, null, u.createElement(Ee.n9, {
                    onClick: function() {
                        c({
                            notificationId: t.id
                        }), f({
                            notificationId: t.id
                        })
                    },
                    color: "primary",
                    title: "Close"
                }, u.createElement(be.$1, {
                    icon: i.NB
                }), " Close")))))
            };
            var Ie = ["notification"],
                Ce = {
                    friendRequest: s.FK,
                    "friend-add": s.FK,
                    invite: l.FU,
                    requestInvite: l.FU,
                    requestInviteResponse: c.dw,
                    inviteResponse: c.dw,
                    message: l.FU
                },
                Se = {
                    friendRequest: "Friend Request",
                    "friend-add": "Friend Status",
                    invite: "Invite",
                    requestInvite: "Invite Request",
                    requestInviteResponse: "Invite Response",
                    inviteResponse: "Invite Response",
                    message: "System Message"
                },
                Oe = ["friend-active", "friend-add", "friend-online"];
            const ze = function(e) {
                var t, n, l, c, s, v, b, y, E = e.notification,
                    x = (0, r.Z)(e, Ie),
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
                    z = O.data,
                    j = O.isLoading,
                    q = O.error;
                if (C) return u.createElement(Te, (0, a.Z)({}, x, {
                    notification: E
                }));
                if (j) return u.createElement("p", null, "Loading");
                if (S) return u.createElement(Ze, (0, a.Z)({}, x, {
                    notification: E,
                    senderUserData: z
                }));
                if (404 === (null == q ? void 0 : q.status)) return null;
                var P, A = Ce[k],
                    U = Se[k],
                    R = (0, m.Tq)(z.status).color,
                    D = z.profilePicOverride || z.currentAvatarThumbnailImageUrl,
                    M = (null === (t = E.details) || void 0 === t ? void 0 : t.inviteMessage) || (null === (n = E.details) || void 0 === n ? void 0 : n.responseMessage) || (null === (l = E.details) || void 0 === l ? void 0 : l.requestMessage);
                return u.createElement(Ee.jm, null, u.createElement(Ee.XK, null, u.createElement(be.$1, {
                    icon: A
                }), "  ", u.createElement("i", null, U)), u.createElement(Ee.g6, null, u.createElement(Ee.rR, {
                    to: "/home/user/".concat(N),
                    statusColor: R
                }, !(null !== (c = E.details) && void 0 !== c && c.imageUrl) && u.createElement(Ee.v_, null, "Go To Profile"), u.createElement(Ee.sJ, {
                    url: null !== (s = null === (v = E.details) || void 0 === v ? void 0 : v.imageUrl) && void 0 !== s ? s : D
                }), u.createElement(Ee.EU, {
                    url: null !== (b = null === (y = E.details) || void 0 === y ? void 0 : y.imageUrl) && void 0 !== b ? b : D
                })), u.createElement(Ee.N2, null, u.createElement(Ee.gp, null, u.createElement(p.rU, {
                    to: "/home/user/".concat(N)
                }, u.createElement("strong", null, z.displayName)), " - ", Z || {
                    friendRequest: "would like to be your friend!",
                    invite: "has invited you to ".concat((null === (P = E.details) || void 0 === P ? void 0 : P.worldName) || "Somewhere"),
                    requestInvite: "has requested an invite to your world!",
                    requestInviteResponse: "has declined your invite request.",
                    inviteResponse: "has declined your invite."
                } [k]), "friendRequest" === k ? u.createElement(Ee.tt, null, u.createElement(Ee.n9, {
                    onClick: function() {
                        return w((0, g.yK)({
                            notificationId: T,
                            withServer: !Oe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, u.createElement(be.$1, {
                    icon: i.NB
                })), u.createElement(Ee.n9, {
                    onClick: function() {
                        w((0, g.FC)({
                            notificationId: E.id
                        })), (0, f.Kz)("Social_AcceptFriendRequest", {
                            targetUserId: E.senderUserId,
                            source: "web"
                        })
                    },
                    color: "primary"
                }, u.createElement(be.$1, {
                    icon: o.LE
                }))) : u.createElement(Ee.tt, null, u.createElement(Ee.n9, {
                    onClick: function() {
                        return w((0, g.yK)({
                            notificationId: T,
                            withServer: !Oe.includes(E.type)
                        }))
                    },
                    color: "secondary"
                }, u.createElement(be.$1, {
                    icon: i.NB
                })), "invite" === k && u.createElement(Ee.n9, {
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
                }, u.createElement("strong", null, "Join"))))), M && u.createElement(Ee.hH, null, '"', M, '"'))
            }
        },
        2566: (e, t, n) => {
            n.d(t, {
                EU: () => w,
                N2: () => d,
                XK: () => u,
                Z2: () => h,
                db: () => N,
                e5: () => k,
                g6: () => s,
                gp: () => p,
                gt: () => b,
                hH: () => m,
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
                m = (0, a.Z)("div", {
                    target: "ennyu4t14"
                })({
                    name: "dklbma",
                    styles: "background:#053c48;padding:3px 10px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 10px"
                }),
                u = (0, a.Z)("small", {
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
            n.d(t, {
                y: () => a
            });
            var a = function(e) {
                return e.currentUser.isMod
            }
        },
        22082: (e, t, n) => {
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
            n.d(t, {
                $2: () => w,
                Cv: () => E,
                En: () => u,
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
            var m = i.S.injectEndpoints({
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
                                        m = (0, a.Z)(i, l),
                                        u = new URL(n);
                                    return c && u.searchParams.set("flowConfig", JSON.stringify(c)), Object.keys(m).forEach((function(e) {
                                        "flow" !== e && u.searchParams.set(e, m[e])
                                    })), s({
                                        redirect: u.href,
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
                u = (m.useSyncTiliaAccountMutation, m.useGetTiliaStatusQuery),
                d = m.useGetTiliaTosAcceptanceQuery,
                p = m.useSetTiliaTosAcceptanceMutation,
                g = m.useGetTiliaKycCompletionQuery,
                f = m.useSetTiliaKycCompletionMutation,
                h = m.useGetTiliaBalanceQuery,
                v = m.useGetTiliaPayoutMethodQuery,
                b = m.useGetTiliaPayoutEligibleQuery,
                y = m.useLazyGetTiliaPayoutEstimateQuery,
                E = m.useCreateTiliaPayoutRequestMutation,
                x = m.useLazyGetTiliaWebRedirectUrlQuery,
                w = m.useGiveTiliaTokenBalanceMutation,
                k = m.useTakeTiliaTokenBalanceMutation
        }
    }
]);
//# sourceMappingURL=4c2597b637056bd598341c67b1e887aecc981d6b4e8396dea2098a4958bb56e1.js.map