(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9795], {
        41145: (e, t) => {
            "use strict";
            var n = "chevron-down",
                r = [],
                i = "f078",
                a = "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, i, a]
            }, t.pt = t.DF
        },
        79795: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => ae
            });
            var r = n(42138),
                i = n(54546),
                a = n(4965),
                o = n(41145),
                l = n(39138),
                s = n.n(l),
                c = n(14411),
                u = n(70917),
                d = n(67294),
                f = n(12752),
                m = n(15861),
                v = n(46357),
                p = n(64687),
                g = n.n(p),
                h = n(64358),
                b = n(30381),
                x = n.n(b),
                w = n(79655),
                y = n(25062),
                E = n(12227),
                k = n(22202),
                Z = n(73170);
            n(98353);
            var C = d.memo((function(e) {
                var t, n, r, a = e.userId,
                    o = e.closeSidebar,
                    l = (0, k.IB)().data,
                    s = (0, f.t4)().friends,
                    u = d.useMemo((function() {
                        return null == s ? void 0 : s.find((function(e) {
                            return e.id === a
                        }))
                    }), [s, a]),
                    p = (0, f.Kk)(null == u ? void 0 : u.location),
                    b = p.world,
                    w = p.location,
                    C = d.useState("Invite Me"),
                    S = (0, i.Z)(C, 2),
                    J = S[0],
                    V = S[1],
                    X = d.useState(!1),
                    Y = (0, i.Z)(X, 2),
                    ee = Y[0],
                    te = Y[1],
                    ne = (0, f.Kz)(),
                    re = function() {
                        o && window.innerWidth <= 1200 && o()
                    };
                if (!u || null != u && u.error || !l) return null;
                var ie = (0, h.Je)({
                        user: u,
                        currentUser: l
                    }),
                    ae = ie.inPrivate,
                    oe = ie.isTraveling,
                    le = ie.isWeb,
                    se = ie.isMobile,
                    ce = ie.inWorld,
                    ue = ie.instanceId,
                    de = ie.isOffline,
                    fe = ie.userStatus,
                    me = ie.userStatusLabel,
                    ve = ie.isInActive,
                    pe = ie.userActivity,
                    ge = ie.receivesMobileNotifications,
                    he = (null === (t = u.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? u.profilePicOverride : u.currentAvatarThumbnailImageUrl,
                    be = (0, h.aF)(ue),
                    xe = (0, E.uP)(ue),
                    we = function() {
                        var e = (0, m.Z)(g().mark((function e() {
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (b && ue) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, ne({
                                            worldId: b.id,
                                            instanceId: ue
                                        });
                                    case 4:
                                        V("Invited!"), setTimeout((function() {
                                            V("Invite Me")
                                        }), 2e3);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ye = (0, h.S6)({
                        fileUrl: he,
                        width: "128"
                    }),
                    Ee = null !== (n = null == b || null === (r = b.name) || void 0 === r ? void 0 : r.substr(0, 300)) && void 0 !== n ? n : "",
                    ke = function(e) {
                        var t = e.isTraveling,
                            n = e.inWorld,
                            r = e.inPrivate,
                            i = e.isWeb,
                            a = e.isMobile,
                            o = e.instanceId,
                            l = e.shortWorldName;
                        return t ? d.createElement(L, {
                            role: "note",
                            "aria-label": "User is Loading a World"
                        }, "Loading a world") : n && r ? d.createElement(A, {
                            role: "note",
                            "aria-label": "User is in a Private World"
                        }, "In a private world") : i ? d.createElement(W, {
                            role: "note",
                            "aria-label": "User is On Website"
                        }, "On website") : a ? d.createElement(W, {
                            role: "note",
                            "aria-label": "User is On Mobile"
                        }, "On mobile") : n && !r && o ? d.createElement(W, {
                            role: "note",
                            "aria-label": "User World Location"
                        }, l) : null
                    }({
                        isTraveling: oe,
                        inWorld: ce,
                        inPrivate: ae,
                        isWeb: le,
                        isMobile: se,
                        instanceId: ue,
                        shortWorldName: Ee
                    }),
                    Ze = function(e) {
                        var t = e.statusDescription,
                            n = e.isOffline,
                            r = e.userStatusLabel,
                            i = e.receivesMobileNotifications,
                            a = e.isUserCardHovered;
                        return t && !n ? d.createElement(H, {
                            "aria-label": "User Status Description"
                        }, t) : t || n ? n ? d.createElement(M, {
                            isUserCardHovered: a,
                            isOffline: n,
                            role: "note",
                            "aria-label": "User is offline"
                        }, "Offline ", i && "on Mobile") : null : d.createElement(H, {
                            "aria-label": "User Status Description"
                        }, r)
                    }({
                        statusDescription: u.statusDescription,
                        isOffline: de,
                        userStatusLabel: me,
                        receivesMobileNotifications: ge,
                        isUserCardHovered: ee
                    });
                return d.createElement(N, {
                    onMouseEnter: function() {
                        return te(!0)
                    },
                    onMouseLeave: function() {
                        return te(!1)
                    },
                    role: "listitem",
                    "aria-label": "User Card",
                    level: (0, E.FR)({
                        tags: u.tags
                    }),
                    isOffline: de
                }, !1, d.createElement(z, null, d.createElement(I, null, d.createElement(F, {
                    "aria-label": "User Image",
                    to: "/home/user/".concat(u.id),
                    onClick: re
                }, d.createElement(U, null, "Go To Profile"), d.createElement(j, {
                    isOffline: de,
                    isUserCardHovered: ee,
                    url: ye
                }))), d.createElement(O, {
                    isOffline: de,
                    role: "group",
                    "aria-label": "User Info",
                    className: "flex-grow-1 justify-content-between"
                }, d.createElement(q, {
                    className: "align-items-center"
                }, d.createElement(c.Cl, {
                    status: fe,
                    isInActive: ve,
                    title: "".concat(me, " ").concat(pe && "- ".concat(pe))
                }), d.createElement(P, {
                    to: "/home/user/".concat(u.id),
                    onClick: re
                }, u.displayName)), ke, Ze, de && !!u.last_login && d.createElement(T, {
                    isUserCardHovered: ee,
                    role: "note",
                    "aria-label": "Last Logged In"
                }, x()(u.last_login).fromNow()))), ce && !ae && !!ue && d.createElement(D, {
                    role: "group",
                    "aria-label": "User Location Info"
                }, d.createElement(R, null, d.createElement(B, {
                    url: null == b ? void 0 : b.thumbnailImageUrl,
                    to: "/home/launch?worldId=".concat(null == b ? void 0 : b.id, "&instanceId=").concat(ue),
                    target: "_blank"
                }, d.createElement(G, null, "Open Instance")), d.createElement(_, {
                    className: "flex-grow-1 justify-content-between"
                }, d.createElement(q, {
                    className: "align-items-start"
                }, d.createElement(y.Z, {
                    role: "note",
                    "aria-label": "Friends in the instance",
                    className: "mt-1"
                }, null == w ? void 0 : w.users.length, " ", d.createElement(c.$1, {
                    icon: v.FV,
                    title: "Number of friends in instance"
                }), " "), d.createElement($, {
                    to: "/home/launch?worldId=".concat(null == b ? void 0 : b.id, "&instanceId=").concat(ue),
                    title: Ee,
                    target: "_blank",
                    "aria-label": "Location Link"
                }, Ee)), d.createElement(K, {
                    className: "align-items-center"
                }, d.createElement(Z.Z, {
                    region: xe,
                    imageSize: "16px"
                }), d.createElement("div", {
                    role: "note",
                    "aria-label": "Instance Type"
                }, be), d.createElement(Q, {
                    onClick: we
                }, J))))))
            }));
            C.displayName = "FriendSidebarComponent";
            const S = C;
            var I = (0, a.Z)("div", {
                    target: "e176ivn223"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                q = (0, a.Z)("div", {
                    target: "e176ivn222"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                N = (0, a.Z)(I, {
                    target: "e176ivn221"
                })("margin:.5rem 1.3rem 0 1.3rem;border-radius:4px;position:relative;padding:15px;background-color:", (function(e) {
                    return e.isOffline ? "#181B1F" : "#252A30"
                }), ";&:hover{background-color:#252A30;}"),
                z = (0, a.Z)(q, {
                    target: "e176ivn220"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                }),
                U = (0, a.Z)("div", {
                    target: "e176ivn219"
                })({
                    name: "106697k",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                F = (0, a.Z)(w.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "e176ivn218"
                })("display:flex;cursor:pointer;width:124px;height:72px;overflow:hidden;position:relative;border-radius:4px;box-sizing:border-box;&:hover ", U, "{opacity:1;}"),
                j = (0, a.Z)("div", {
                    target: "e176ivn217"
                })("position:absolute;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:72px;top:0;left:0;z-index:2;border-radius:4px;", (function(e) {
                    var t = e.isOffline,
                        n = e.isUserCardHovered;
                    return t && !n && "opacity: .5;"
                }), ";"),
                O = (0, a.Z)(I, {
                    target: "e176ivn216"
                })("margin:5px 10px;max-width:189px;position:relative;z-index:1;color:", (function(e) {
                    return e.isOffline ? "#737372" : "white"
                }), ";"),
                W = (0, a.Z)(q, {
                    target: "e176ivn214"
                })({
                    name: "1u7pwvo",
                    styles: "font-size:0.9rem"
                }),
                A = (0, a.Z)(W, {
                    target: "e176ivn213"
                })(""),
                L = (0, a.Z)(W, {
                    target: "e176ivn212"
                })(""),
                M = (0, a.Z)(W, {
                    target: "e176ivn211"
                })("color:", (function(e) {
                    var t = e.isOffline,
                        n = e.isUserCardHovered;
                    return t && n ? "white" : "#737372"
                }), ";"),
                T = (0, a.Z)(W, {
                    target: "e176ivn210"
                })("color:", (function(e) {
                    return e.isUserCardHovered ? "#9C9C9C" : "#737372"
                }), ";"),
                H = (0, a.Z)(W, {
                    target: "e176ivn29"
                })({
                    name: "1oqhvc",
                    styles: "color:#9C9C9C"
                }),
                P = (0, a.Z)(w.rU, {
                    target: "e176ivn28"
                })({
                    name: "1u1s9ta",
                    styles: "font-weight:900"
                }),
                D = (0, a.Z)(q, {
                    target: "e176ivn27"
                })({
                    name: "1b25ts6",
                    styles: "flex-grow:1;border:1px solid #404C58;margin-top:10px;border-radius:4px;overflow:hidden;position:relative;z-index:1;min-height:77px"
                }),
                R = (0, a.Z)(q, {
                    target: "e176ivn26"
                })({
                    name: "mczqin",
                    styles: "position:relative;z-index:2;padding:10px;flex-wrap:nowrap"
                }),
                G = (0, a.Z)("div", {
                    target: "e176ivn25"
                })({
                    name: "1gzcm43",
                    styles: "position:absolute;z-index:3;width:100%;height:100%;top:0;left:0;background-color:rgba(0, 0, 0, 0.7);border-radius:4px;color:white;font-weight:700;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;transition:opacity 0.2s ease-in-out;font-size:0.6rem"
                }),
                B = (0, a.Z)(w.rU, {
                    target: "e176ivn24"
                })("display:flex;position:relative;width:80px;height:57px;display:flex;flex-shrink:0;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");border-radius:4px;&:hover ", G, "{opacity:1;}"),
                _ = (0, a.Z)(I, {
                    target: "e176ivn23"
                })({
                    name: "1a2afmv",
                    styles: "margin-left:10px"
                }),
                $ = (0, a.Z)(w.rU, {
                    target: "e176ivn22"
                })({
                    name: "1hyjd8g",
                    styles: "display:flex;color:white;font-weight:900;margin-left:10px;&:hover{color:white;}"
                }),
                K = (0, a.Z)(q, {
                    target: "e176ivn21"
                })({
                    name: "1k16hbx",
                    styles: "margin-top:5px;&>div{margin-right:5px;line-height:16px;}"
                }),
                Q = (0, a.Z)("button", {
                    target: "e176ivn20"
                })({
                    name: "14dkj72",
                    styles: "display:flex;outline:none!important;border:1px solid var(--bs-primary);border-radius:4px;background-color:rgba(31, 209, 237, 0);color:var(--bs-primary);padding:1px 10px;margin:0 5px;transition:background-color 0.2s ease-in-out;font-size:0.7rem;&:hover{background-color:rgba(31, 209, 237, 0.3);}"
                }),
                J = n(87462),
                V = n(45987),
                X = ["isActive", "categoryName", "count"];
            var Y = (0, a.Z)("div", {
                    target: "elcswtc2"
                })("margin:", (function(e) {
                    var t = e.isActive,
                        n = e.isEmpty;
                    return !t || t && n ? "0 1.3rem 0.75rem 1.3rem" : "0 1.3rem 0 1.3rem"
                }), ";font-size:1.19rem;font-weight:300;cursor:pointer;"),
                ee = (0, a.Z)("span", {
                    target: "elcswtc1"
                })({
                    name: "1j389vi",
                    styles: "font-weight:700"
                }),
                te = (0, a.Z)(c.$1, {
                    target: "elcswtc0"
                })("font-size:1.1rem;display:inline-block;transition:transform 0.1s ease;transform:", (function(e) {
                    return e.isActive ? "rotate(0)" : "rotate(-90deg)"
                }), ";");
            const ne = function(e) {
                var t = e.isActive,
                    n = e.categoryName,
                    r = e.count,
                    i = (0, V.Z)(e, X);
                return d.createElement(Y, (0, J.Z)({
                    isActive: t,
                    isEmpty: 0 === r
                }, i), d.createElement(te, {
                    isActive: t,
                    icon: o.pt,
                    color: "white",
                    className: "tw-mr-1"
                }), d.createElement(ee, null, n, " "), d.createElement("span", null, "(", r, ")"))
            };
            var re = [{
                    label: "Status",
                    value: "status"
                }, {
                    label: "Name",
                    value: "name"
                }],
                ie = d.memo((function(e) {
                    var t = e.friendsToggleCallback,
                        n = d.useState(""),
                        a = (0, i.Z)(n, 2),
                        l = a[0],
                        u = a[1],
                        m = d.useState("status"),
                        v = (0, i.Z)(m, 2),
                        p = v[0],
                        g = v[1],
                        h = d.useState(!1),
                        b = (0, i.Z)(h, 2),
                        x = b[0],
                        w = b[1],
                        y = d.useState(null),
                        E = (0, i.Z)(y, 2),
                        k = E[0],
                        Z = E[1],
                        C = d.useState(10),
                        I = (0, i.Z)(C, 2),
                        q = I[0],
                        N = I[1],
                        z = d.useState(new Set(["inWorld", "active", "offline"])),
                        U = (0, i.Z)(z, 2),
                        F = U[0],
                        j = U[1],
                        O = d.useState(!1),
                        W = (0, i.Z)(O, 2),
                        A = W[0],
                        L = W[1],
                        M = d.useRef(null),
                        T = d.useRef(null),
                        H = function(e) {
                            return function() {
                                F.has(e) ? function(e) {
                                    var t = new Set(F);
                                    t.delete(e), j(t)
                                }(e) : function(e) {
                                    var t = new Set(F);
                                    t.add(e), j(t)
                                }(e)
                            }
                        },
                        P = (0, f.Pt)({
                            sortBy: p,
                            searchQuery: l,
                            friendsShown: q,
                            selectedGroup: k,
                            enabledCategories: F
                        }),
                        D = P.inWorldFriends,
                        R = P.activeFriends,
                        G = P.offlineFriends,
                        B = P.totalCount,
                        _ = P.loaded,
                        $ = P.sortedFriendGroupData,
                        K = P.activeFriendsCount,
                        Q = P.inWorldFriendsCount,
                        J = P.offlineFriendsCount,
                        V = P.debouncedSearchQuery,
                        X = function() {
                            if (T.current) {
                                var e = (t = T.current.clientHeight, (n = Math.floor(t / 100)) > 10 ? n : 10);
                                N(e)
                            }
                            var t, n
                        };
                    d.useEffect((function() {
                        q < B && M.current.clientHeight < T.current.clientHeight - 100 && N(Math.min(q + 10, B))
                    }), []), d.useEffect((function() {
                        T.current && (T.current.scrollTop = 0)
                    }), [p, l, k]);
                    var Y = function(e, t, n) {
                        var r = n[e];
                        return r ? "".concat(s()(r.name, {
                            omission: "...",
                            length: 16
                        }), " (").concat(r.friends.length, "/").concat(150, ")") : "All Friends (".concat(t, ")")
                    }(k, B, $);
                    return d.useEffect((function() {
                        return X(), window.addEventListener("resize", X),
                            function() {
                                window.removeEventListener("resize", X)
                            }
                    }), []), d.useEffect((function() {
                        V && j(new Set(["inWorld", "active", "offline"]))
                    }), [V]), d.createElement(se, {
                        id: "friendsSidebar",
                        onClick: function() {
                            A && L(!1)
                        }
                    }, d.createElement(ue, {
                        showShadow: x
                    }, d.createElement(de, {
                        onClick: function() {
                            return L((function(e) {
                                return !e
                            }))
                        },
                        className: "tw-cursor-pointer tw-justify-center md:tw-justify-between mb-3"
                    }, d.createElement(me, {
                        className: "tw-hidden md:tw-flex",
                        onClick: function(e) {
                            e.stopPropagation(), t(!1)
                        }
                    }, d.createElement("div", null)), d.createElement("div", {
                        "aria-label": "Friends Total"
                    }, d.createElement("span", null, Y), d.createElement(c.$1, {
                        "aria-label": "Friend Groups Dropdown Button",
                        icon: o.pt,
                        color: "white",
                        className: "ms-2"
                    })), d.createElement("div", null), A && d.createElement(be, {
                        "aria-label": "Friend Groups"
                    }, [{
                        label: "All Friends (".concat(B, ")"),
                        value: null
                    }].concat((0, r.Z)(Object.values($).map((function(e) {
                        return {
                            label: "".concat(s()(e.name, {
                                omission: "...",
                                length: 35
                            }), " (").concat(e.friends.length, "/").concat(150, ")"),
                            value: e.selectedGroupTag
                        }
                    })))).map((function(e, t) {
                        return d.createElement(we, {
                            "aria-label": "Friend Group Button",
                            role: "radio",
                            key: e.value,
                            onClick: function() {
                                return t = e.value, void Z(t);
                                var t
                            },
                            tabIndex: t,
                            title: e.label
                        }, e.label)
                    })))), d.createElement(fe, {
                        type: "text",
                        onChange: function(e) {
                            var t;
                            return u(null !== (t = e.target.value) && void 0 !== t ? t : "")
                        },
                        value: l,
                        placeholder: "Search Friends",
                        "aria-label": "Search Friends"
                    }), d.createElement(c.Lt, {
                        label: "Sort By",
                        className: "mt-3 md:tw-w-1/2",
                        onChange: function(e) {
                            g(e)
                        },
                        value: p,
                        options: re
                    })), d.createElement(he, null, d.createElement(ve, {
                        ref: T
                    }, d.createElement(pe, {
                        className: "pt-1",
                        onScroll: function(e) {
                            var t = e.target,
                                n = t.scrollTop,
                                r = void 0 === n ? 0 : n,
                                i = t.clientHeight,
                                a = void 0 === i ? 0 : i;
                            r > 0 && !x ? w(!0) : 0 === r && x && w(!1), _ && r + a >= M.current.scrollHeight - 200 && q <= B && N(Math.min(q + 10, B))
                        }
                    }, d.createElement(ge, {
                        ref: M,
                        role: "list",
                        "aria-label": "Friends List"
                    }, d.createElement(ne, {
                        isActive: F.has("inWorld"),
                        onClick: H("inWorld"),
                        categoryName: "In-World",
                        count: Q
                    }), F.has("inWorld") && D.map((function(e) {
                        return d.createElement(S, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })), d.createElement(ne, {
                        className: F.has("inWorld") && D.length > 0 ? "tw-mt-3" : "",
                        isActive: F.has("active"),
                        onClick: H("active"),
                        categoryName: "Active",
                        count: K
                    }), F.has("active") && R.map((function(e) {
                        return d.createElement(S, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })), d.createElement(ne, {
                        className: F.has("active") && R.length > 0 ? "tw-mt-3" : "",
                        isActive: F.has("offline"),
                        onClick: H("offline"),
                        categoryName: "Offline",
                        count: J
                    }), F.has("offline") && G.map((function(e) {
                        return d.createElement(S, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })))))))
                }));
            ie.displayName = "FriendsComponent";
            const ae = ie;
            var oe = (0, a.Z)("div", {
                    target: "e1oqhh5q12"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                le = (0, a.Z)("div", {
                    target: "e1oqhh5q11"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                se = (0, a.Z)(oe, {
                    target: "e1oqhh5q10"
                })({
                    name: "fq1d6",
                    styles: "min-height:100%;flex-grow:1;overflow-x:hidden"
                }),
                ce = {
                    name: "125sl10",
                    styles: "box-shadow:0 20px 90px -2px rgba(0, 0, 0, 0.3)"
                },
                ue = (0, a.Z)(oe, {
                    target: "e1oqhh5q9"
                })("padding:1.3rem;z-index:10;", (function(e) {
                    return e.showShadow ? ce : (0, u.iv)("", "")
                }), " transition:box-shadow 0.3s ease-in-out;"),
                de = (0, a.Z)(le, {
                    target: "e1oqhh5q8"
                })({
                    name: "ju98wq",
                    styles: "position:relative;font-weight:300;font-size:1.5rem;line-height:1.5rem;align-items:center"
                }),
                fe = (0, a.Z)(c.II, {
                    target: "e1oqhh5q7"
                })({
                    name: "82a6rk",
                    styles: "flex:1"
                }),
                me = (0, a.Z)("div", {
                    target: "e1oqhh5q6"
                })({
                    name: "13yoiil",
                    styles: "transition:all 0.1s ease-in;width:35px;height:35px;display:flex;justify-content:center;overflow:hidden;:hover{transform:scale(1.15);cursor:pointer;}:active{transform:scale(0.9);}>div{width:100%;height:100%;background-image:url('https://assets.vrchat.com/www/images/WingLeft.png');background-repeat:no-repeat;background-position:center;background-size:contain;}"
                }),
                ve = (0, a.Z)(oe, {
                    target: "e1oqhh5q5"
                })({
                    name: "wsam0j",
                    styles: "flex-grow:1;position:absolute;width:100%;height:100%"
                }),
                pe = (0, a.Z)(oe, {
                    target: "e1oqhh5q4"
                })({
                    name: "131cj2s",
                    styles: "overflow-y:auto;overflow-x:hidden;transition:margin-right 250ms ease-in-out"
                }),
                ge = (0, a.Z)(oe, {
                    target: "e1oqhh5q3"
                })({
                    name: "1bnk0mu",
                    styles: "transition:margin-right 250ms ease-in-out"
                }),
                he = (0, a.Z)("div", {
                    target: "e1oqhh5q2"
                })("position:relative;height:100%;flex-grow:1;&:hover{", pe, "{margin-right:0;}}"),
                be = (0, a.Z)("div", {
                    target: "e1oqhh5q1"
                })({
                    name: "3x907s",
                    styles: "position:absolute;z-index:5;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:3px;border:#086c84 solid 2px;text-align:center;max-width:calc(100% + 4px);font-size:1rem"
                }),
                xe = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                we = (0, a.Z)("div", {
                    target: "e1oqhh5q0"
                })("transition:opacity 0.2s ease-in-out;padding:5px;background-color:#07343f;cursor:pointer;max-width:100%;white-space:nowrap;", (function(e) {
                    return e.trimToLength ? xe : ""
                }), " transition:background-color 0.2s ease-in-out;&:hover{background-color:#086c84;opacity:1;}")
        },
        29932: e => {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                return i
            }
        },
        48983: (e, t, n) => {
            var r = n(40371)("length");
            e.exports = r
        },
        44286: e => {
            e.exports = function(e) {
                return e.split("")
            }
        },
        23933: (e, t, n) => {
            var r = n(44239),
                i = n(37005);
            e.exports = function(e) {
                return i(e) && "[object RegExp]" == r(e)
            }
        },
        40371: e => {
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
        },
        14259: e => {
            e.exports = function(e, t, n) {
                var r = -1,
                    i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var a = Array(i); ++r < i;) a[r] = e[r + t];
                return a
            }
        },
        80531: (e, t, n) => {
            var r = n(62705),
                i = n(29932),
                a = n(1469),
                o = n(33448),
                l = r ? r.prototype : void 0,
                s = l ? l.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (a(t)) return i(t, e) + "";
                if (o(t)) return s ? s.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -Infinity ? "-0" : n
            }
        },
        7518: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        40180: (e, t, n) => {
            var r = n(14259);
            e.exports = function(e, t, n) {
                var i = e.length;
                return n = void 0 === n ? i : n, !t && n >= i ? e : r(e, t, n)
            }
        },
        62689: e => {
            var t = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return t.test(e)
            }
        },
        31167: (e, t, n) => {
            e = n.nmd(e);
            var r = n(31957),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                o = a && a.exports === i && r.process,
                l = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        88016: (e, t, n) => {
            var r = n(48983),
                i = n(62689),
                a = n(21903);
            e.exports = function(e) {
                return i(e) ? a(e) : r(e)
            }
        },
        83140: (e, t, n) => {
            var r = n(44286),
                i = n(62689),
                a = n(676);
            e.exports = function(e) {
                return i(e) ? a(e) : r(e)
            }
        },
        21903: e => {
            var t = "\\ud800-\\udfff",
                n = "[" + t + "]",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                i = "\\ud83c[\\udffb-\\udfff]",
                a = "[^" + t + "]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                s = "(?:" + r + "|" + i + ")" + "?",
                c = "[\\ufe0e\\ufe0f]?",
                u = c + s + ("(?:\\u200d(?:" + [a, o, l].join("|") + ")" + c + s + ")*"),
                d = "(?:" + [a + r + "?", r, o, l, n].join("|") + ")",
                f = RegExp(i + "(?=" + i + ")|" + d + u, "g");
            e.exports = function(e) {
                for (var t = f.lastIndex = 0; f.test(e);) ++t;
                return t
            }
        },
        676: e => {
            var t = "\\ud800-\\udfff",
                n = "[" + t + "]",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                i = "\\ud83c[\\udffb-\\udfff]",
                a = "[^" + t + "]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                s = "(?:" + r + "|" + i + ")" + "?",
                c = "[\\ufe0e\\ufe0f]?",
                u = c + s + ("(?:\\u200d(?:" + [a, o, l].join("|") + ")" + c + s + ")*"),
                d = "(?:" + [a + r + "?", r, o, l, n].join("|") + ")",
                f = RegExp(i + "(?=" + i + ")|" + d + u, "g");
            e.exports = function(e) {
                return e.match(f) || []
            }
        },
        96347: (e, t, n) => {
            var r = n(23933),
                i = n(7518),
                a = n(31167),
                o = a && a.isRegExp,
                l = o ? i(o) : r;
            e.exports = l
        },
        40554: (e, t, n) => {
            var r = n(18601);
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        79833: (e, t, n) => {
            var r = n(80531);
            e.exports = function(e) {
                return null == e ? "" : r(e)
            }
        },
        39138: (e, t, n) => {
            var r = n(80531),
                i = n(40180),
                a = n(62689),
                o = n(13218),
                l = n(96347),
                s = n(88016),
                c = n(83140),
                u = n(40554),
                d = n(79833),
                f = /\w*$/;
            e.exports = function(e, t) {
                var n = 30,
                    m = "...";
                if (o(t)) {
                    var v = "separator" in t ? t.separator : v;
                    n = "length" in t ? u(t.length) : n, m = "omission" in t ? r(t.omission) : m
                }
                var p = (e = d(e)).length;
                if (a(e)) {
                    var g = c(e);
                    p = g.length
                }
                if (n >= p) return e;
                var h = n - s(m);
                if (h < 1) return m;
                var b = g ? i(g, 0, h).join("") : e.slice(0, h);
                if (void 0 === v) return b + m;
                if (g && (h += b.length - h), l(v)) {
                    if (e.slice(h).search(v)) {
                        var x, w = b;
                        for (v.global || (v = RegExp(v.source, d(f.exec(v)) + "g")), v.lastIndex = 0; x = v.exec(w);) var y = x.index;
                        b = b.slice(0, void 0 === y ? h : y)
                    }
                } else if (e.indexOf(r(v), h) != h) {
                    var E = b.lastIndexOf(v);
                    E > -1 && (b = b.slice(0, E))
                }
                return b + m
            }
        }
    }
]);
//# sourceMappingURL=6f5b2ea2646979db07066623c234e21f95a2a055bf82e68a9be072551229355f.js.map