(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9795], {
        79795: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => le
            });
            var r = n(42138),
                i = n(54546),
                a = n(4965),
                o = n(41145),
                l = n(39138),
                s = n.n(l),
                c = n(80988),
                u = n(70917),
                d = n(82728),
                f = n(67294),
                m = n(69116),
                v = n(15861),
                p = n(46357),
                g = n(64687),
                h = n.n(g),
                b = n(64358),
                x = n(30381),
                w = n.n(x),
                y = n(79655),
                E = n(25062),
                Z = n(12227),
                k = n(22202),
                C = n(90924),
                S = n(73170);
            n(98353);
            var I = f.memo((function(e) {
                var t, n, r, a = e.userId,
                    o = e.closeSidebar,
                    l = (0, k.IB)().data,
                    s = (0, m.t4)().friends,
                    u = f.useMemo((function() {
                        return null == s ? void 0 : s.find((function(e) {
                            return e.id === a
                        }))
                    }), [s, a]),
                    d = (0, m.Kk)(null == u ? void 0 : u.location),
                    g = d.world,
                    x = d.location,
                    y = f.useState("Invite Me"),
                    I = (0, i.Z)(y, 2),
                    q = I[0],
                    Y = I[1],
                    X = f.useState(!1),
                    ee = (0, i.Z)(X, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = (0, m.Kz)(),
                    ie = function() {
                        o && window.innerWidth <= 1200 && o()
                    };
                if (!u || null != u && u.error || !l) return null;
                var ae = (0, b.Je)({
                        user: u,
                        currentUser: l
                    }),
                    oe = ae.inPrivate,
                    le = ae.isTraveling,
                    se = ae.isWeb,
                    ce = ae.isMobile,
                    ue = ae.inWorld,
                    de = ae.instanceId,
                    fe = ae.isOffline,
                    me = ae.userStatus,
                    ve = ae.userStatusLabel,
                    pe = ae.isInActive,
                    ge = ae.userActivity,
                    he = ae.receivesMobileNotifications,
                    be = (null === (t = u.profilePicOverride) || void 0 === t ? void 0 : t.length) > 0 ? u.profilePicOverride : u.currentAvatarThumbnailImageUrl,
                    xe = (0, b.aF)(de),
                    we = (0, Z.uP)(de),
                    ye = (0, Z.YW)(de),
                    Ee = (0, Z.PF)(l, de),
                    Ze = function() {
                        var e = (0, v.Z)(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (g && de) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, re({
                                            worldId: g.id,
                                            instanceId: de
                                        });
                                    case 4:
                                        Y("Invited!"), setTimeout((function() {
                                            Y("Invite Me")
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
                    ke = (0, b.S6)({
                        fileUrl: be,
                        width: "128"
                    }),
                    Ce = null !== (n = null == g || null === (r = g.name) || void 0 === r ? void 0 : r.substr(0, 300)) && void 0 !== n ? n : "",
                    Se = function(e) {
                        var t = e.isTraveling,
                            n = e.inWorld,
                            r = e.inPrivate,
                            i = e.isWeb,
                            a = e.isMobile,
                            o = e.instanceId,
                            l = e.shortWorldName;
                        return t ? f.createElement(H, {
                            role: "note",
                            "aria-label": "User is Loading a World"
                        }, "Loading a world") : n && r ? f.createElement(M, {
                            role: "note",
                            "aria-label": "User is in a Private World"
                        }, "In a private world") : i ? f.createElement(L, {
                            role: "note",
                            "aria-label": "User is On Website"
                        }, "On website") : a ? f.createElement(L, {
                            role: "note",
                            "aria-label": "User is On Mobile"
                        }, "On mobile") : n && !r && o ? f.createElement(L, {
                            role: "note",
                            "aria-label": "User World Location"
                        }, l) : null
                    }({
                        isTraveling: le,
                        inWorld: ue,
                        inPrivate: oe,
                        isWeb: se,
                        isMobile: ce,
                        instanceId: de,
                        shortWorldName: Ce
                    }),
                    Ie = function(e) {
                        var t = e.statusDescription,
                            n = e.isOffline,
                            r = e.userStatusLabel,
                            i = e.receivesMobileNotifications,
                            a = e.isUserCardHovered;
                        return t && !n ? f.createElement(R, {
                            "aria-label": "User Status Description"
                        }, t) : t || n ? n ? f.createElement(T, {
                            isUserCardHovered: a,
                            isOffline: n,
                            role: "note",
                            "aria-label": "User is offline"
                        }, "Offline ", i && "on Mobile") : null : f.createElement(R, {
                            "aria-label": "User Status Description"
                        }, r)
                    }({
                        statusDescription: u.statusDescription,
                        isOffline: fe,
                        userStatusLabel: ve,
                        receivesMobileNotifications: he,
                        isUserCardHovered: te
                    });
                return f.createElement(z, {
                    onMouseEnter: function() {
                        return ne(!0)
                    },
                    onMouseLeave: function() {
                        return ne(!1)
                    },
                    role: "listitem",
                    "aria-label": "User Card",
                    level: (0, Z.FR)({
                        tags: u.tags
                    }),
                    isOffline: fe
                }, !1, f.createElement(F, null, f.createElement(N, null, f.createElement(O, {
                    "aria-label": "User Image",
                    to: "/home/user/".concat(u.id),
                    onClick: ie
                }, f.createElement(j, null, "Go To Profile"), f.createElement(W, {
                    isOffline: fe,
                    isUserCardHovered: te,
                    url: ke
                }))), f.createElement(A, {
                    isOffline: fe,
                    role: "group",
                    "aria-label": "User Info",
                    className: "flex-grow-1 justify-content-between"
                }, f.createElement(U, {
                    className: "align-items-center"
                }, f.createElement(c.Cl, {
                    status: me,
                    isInActive: pe,
                    title: "".concat(ve, " ").concat(ge && "- ".concat(ge))
                }), f.createElement(D, {
                    to: "/home/user/".concat(u.id),
                    onClick: ie
                }, u.displayName)), Se, Ie, fe && !!u.last_login && f.createElement(P, {
                    isUserCardHovered: te,
                    role: "note",
                    "aria-label": "Last Logged In"
                }, w()(u.last_login).fromNow()))), ue && !oe && !!de && f.createElement(G, {
                    role: "group",
                    "aria-label": "User Location Info"
                }, f.createElement(B, null, f.createElement($, {
                    url: null == g ? void 0 : g.thumbnailImageUrl,
                    to: "/home/launch?worldId=".concat(null == g ? void 0 : g.id, "&instanceId=").concat(de),
                    target: "_blank"
                }, f.createElement(_, null, "Open Instance")), f.createElement(K, {
                    className: "flex-grow-1 justify-content-between"
                }, f.createElement(U, {
                    className: "align-items-start"
                }, f.createElement(E.Z, {
                    role: "note",
                    "aria-label": "Friends in the instance",
                    className: "mt-1"
                }, null == x ? void 0 : x.users.length, " ", f.createElement(c.$1, {
                    icon: p.FV,
                    title: "Number of friends in instance"
                }), " "), f.createElement(Q, {
                    to: "/home/launch?worldId=".concat(null == g ? void 0 : g.id, "&instanceId=").concat(de),
                    title: Ce,
                    target: "_blank",
                    "aria-label": "Location Link"
                }, Ce)), f.createElement(V, {
                    className: "align-items-center"
                }, ye && f.createElement(C.Z, {
                    imageSize: "16px",
                    className: "tw-mr-1"
                }), f.createElement(S.Z, {
                    region: we,
                    imageSize: "16px"
                }), f.createElement("div", {
                    role: "note",
                    "aria-label": "Instance Type"
                }, xe), f.createElement(J, {
                    onClick: Ze,
                    disabled: Ee,
                    title: Ee ? "Age Verification Required (18+)" : null
                }, q))))))
            }));
            I.displayName = "FriendSidebarComponent";
            const q = I;
            var N = (0, a.Z)("div", {
                    target: "e176ivn223"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                U = (0, a.Z)("div", {
                    target: "e176ivn222"
                })({
                    name: "ho1qnd",
                    styles: "display:flex;flex-direction:row"
                }),
                z = (0, a.Z)(N, {
                    target: "e176ivn221"
                })("margin:.5rem 1.3rem 0 1.3rem;border-radius:4px;position:relative;padding:15px;background-color:", (function(e) {
                    return e.isOffline ? "#181B1F" : "#252A30"
                }), ";&:hover{background-color:#252A30;}"),
                F = (0, a.Z)(U, {
                    target: "e176ivn220"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                }),
                j = (0, a.Z)("div", {
                    target: "e176ivn219"
                })({
                    name: "106697k",
                    styles: "width:100%;height:100%;top:0;left:0;position:absolute;z-index:3;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;background-color:rgba(0, 0, 0, 0.7)"
                }),
                O = (0, a.Z)(y.rU, {
                    shouldForwardProp: function(e) {
                        return e && "statusColor" !== e
                    },
                    target: "e176ivn218"
                })("display:flex;cursor:pointer;width:124px;height:72px;overflow:hidden;position:relative;border-radius:4px;box-sizing:border-box;&:hover ", j, "{opacity:1;}"),
                W = (0, a.Z)("div", {
                    target: "e176ivn217"
                })("position:absolute;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");width:124px;height:72px;top:0;left:0;z-index:2;border-radius:4px;", (function(e) {
                    var t = e.isOffline,
                        n = e.isUserCardHovered;
                    return t && !n && "opacity: .5;"
                }), ";"),
                A = (0, a.Z)(N, {
                    target: "e176ivn216"
                })("margin:5px 10px;max-width:189px;position:relative;z-index:1;color:", (function(e) {
                    return e.isOffline ? "#737372" : "white"
                }), ";"),
                L = (0, a.Z)(U, {
                    target: "e176ivn214"
                })({
                    name: "1u7pwvo",
                    styles: "font-size:0.9rem"
                }),
                M = (0, a.Z)(L, {
                    target: "e176ivn213"
                })(""),
                H = (0, a.Z)(L, {
                    target: "e176ivn212"
                })(""),
                T = (0, a.Z)(L, {
                    target: "e176ivn211"
                })("color:", (function(e) {
                    var t = e.isOffline,
                        n = e.isUserCardHovered;
                    return t && n ? "white" : "#737372"
                }), ";"),
                P = (0, a.Z)(L, {
                    target: "e176ivn210"
                })("color:", (function(e) {
                    return e.isUserCardHovered ? "#9C9C9C" : "#737372"
                }), ";"),
                R = (0, a.Z)(L, {
                    target: "e176ivn29"
                })({
                    name: "1oqhvc",
                    styles: "color:#9C9C9C"
                }),
                D = (0, a.Z)(y.rU, {
                    target: "e176ivn28"
                })({
                    name: "1u1s9ta",
                    styles: "font-weight:900"
                }),
                G = (0, a.Z)(U, {
                    target: "e176ivn27"
                })({
                    name: "1b25ts6",
                    styles: "flex-grow:1;border:1px solid #404C58;margin-top:10px;border-radius:4px;overflow:hidden;position:relative;z-index:1;min-height:77px"
                }),
                B = (0, a.Z)(U, {
                    target: "e176ivn26"
                })({
                    name: "mczqin",
                    styles: "position:relative;z-index:2;padding:10px;flex-wrap:nowrap"
                }),
                _ = (0, a.Z)("div", {
                    target: "e176ivn25"
                })({
                    name: "1gzcm43",
                    styles: "position:absolute;z-index:3;width:100%;height:100%;top:0;left:0;background-color:rgba(0, 0, 0, 0.7);border-radius:4px;color:white;font-weight:700;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;transition:opacity 0.2s ease-in-out;font-size:0.6rem"
                }),
                $ = (0, a.Z)(y.rU, {
                    target: "e176ivn24"
                })("display:flex;position:relative;width:80px;height:57px;display:flex;flex-shrink:0;background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(", (function(e) {
                    return e.url
                }), ");border-radius:4px;&:hover ", _, "{opacity:1;}"),
                K = (0, a.Z)(N, {
                    target: "e176ivn23"
                })({
                    name: "1a2afmv",
                    styles: "margin-left:10px"
                }),
                Q = (0, a.Z)(y.rU, {
                    target: "e176ivn22"
                })({
                    name: "1hyjd8g",
                    styles: "display:flex;color:white;font-weight:900;margin-left:10px;&:hover{color:white;}"
                }),
                V = (0, a.Z)(U, {
                    target: "e176ivn21"
                })({
                    name: "1k16hbx",
                    styles: "margin-top:5px;&>div{margin-right:5px;line-height:16px;}"
                }),
                J = (0, a.Z)("button", {
                    target: "e176ivn20"
                })({
                    name: "19t9gfi",
                    styles: "display:flex;outline:none!important;border:1px solid var(--bs-primary);border-radius:4px;background-color:rgba(31, 209, 237, 0);color:var(--bs-primary);padding:1px 10px;margin:0 5px;transition:background-color 0.2s ease-in-out;font-size:0.7rem;&:hover:enabled{background-color:rgba(31, 209, 237, 0.3);}&:disabled{border:hsl(0, 0%, 60%) solid 1px;color:hsl(0, 0%, 60%);}"
                }),
                Y = n(87462),
                X = n(45987),
                ee = ["isActive", "categoryName", "count"];
            var te = (0, a.Z)("div", {
                    target: "elcswtc2"
                })("margin:", (function(e) {
                    var t = e.isActive,
                        n = e.isEmpty;
                    return !t || t && n ? "0 1.3rem 0.75rem 1.3rem" : "0 1.3rem 0 1.3rem"
                }), ";font-size:1.19rem;font-weight:300;cursor:pointer;"),
                ne = (0, a.Z)("span", {
                    target: "elcswtc1"
                })({
                    name: "1j389vi",
                    styles: "font-weight:700"
                }),
                re = (0, a.Z)(c.$1, {
                    target: "elcswtc0"
                })("font-size:1.1rem;display:inline-block;transition:transform 0.1s ease;transform:", (function(e) {
                    return e.isActive ? "rotate(0)" : "rotate(-90deg)"
                }), ";");
            const ie = function(e) {
                var t = e.isActive,
                    n = e.categoryName,
                    r = e.count,
                    i = (0, X.Z)(e, ee);
                return f.createElement(te, (0, Y.Z)({
                    isActive: t,
                    isEmpty: 0 === r
                }, i), f.createElement(re, {
                    isActive: t,
                    icon: o.pt,
                    color: "white",
                    className: "tw-mr-1"
                }), f.createElement(ne, null, n, " "), f.createElement("span", null, "(", r, ")"))
            };
            var ae = [{
                    label: "Status",
                    value: "status"
                }, {
                    label: "Name",
                    value: "name"
                }],
                oe = f.memo((function(e) {
                    var t = e.friendsToggleCallback,
                        n = f.useState(""),
                        a = (0, i.Z)(n, 2),
                        l = a[0],
                        u = a[1],
                        v = f.useState("status"),
                        p = (0, i.Z)(v, 2),
                        g = p[0],
                        h = p[1],
                        b = f.useState(!1),
                        x = (0, i.Z)(b, 2),
                        w = x[0],
                        y = x[1],
                        E = f.useState(null),
                        Z = (0, i.Z)(E, 2),
                        k = Z[0],
                        C = Z[1],
                        S = f.useState(10),
                        I = (0, i.Z)(S, 2),
                        N = I[0],
                        U = I[1],
                        z = f.useState(new Set(["inWorld", "active", "offline"])),
                        F = (0, i.Z)(z, 2),
                        j = F[0],
                        O = F[1],
                        W = f.useState(!1),
                        A = (0, i.Z)(W, 2),
                        L = A[0],
                        M = A[1],
                        H = f.useRef(null),
                        T = f.useRef(null),
                        P = function(e) {
                            return function() {
                                j.has(e) ? function(e) {
                                    var t = new Set(j);
                                    t.delete(e), O(t)
                                }(e) : function(e) {
                                    var t = new Set(j);
                                    t.add(e), O(t)
                                }(e)
                            }
                        },
                        R = (0, m.Pt)({
                            sortBy: g,
                            searchQuery: l,
                            friendsShown: N,
                            selectedGroup: k,
                            enabledCategories: j
                        }),
                        D = R.inWorldFriends,
                        G = R.activeFriends,
                        B = R.offlineFriends,
                        _ = R.totalCount,
                        $ = R.loaded,
                        K = R.sortedFriendGroupData,
                        Q = R.activeFriendsCount,
                        V = R.inWorldFriendsCount,
                        J = R.offlineFriendsCount,
                        Y = R.debouncedSearchQuery,
                        X = function() {
                            if (T.current) {
                                var e = (t = T.current.clientHeight, (n = Math.floor(t / 100)) > 10 ? n : 10);
                                U(e)
                            }
                            var t, n
                        };
                    f.useEffect((function() {
                        N < _ && H.current.clientHeight < T.current.clientHeight - 100 && U(Math.min(N + 10, _))
                    }), []), f.useEffect((function() {
                        T.current && (T.current.scrollTop = 0)
                    }), [g, l, k]);
                    var ee = function(e, t, n) {
                        var r = n[e];
                        return r ? "".concat(s()(r.name, {
                            omission: "...",
                            length: 16
                        }), " (").concat(r.friends.length, "/").concat(150, ")") : "All Friends (".concat(t, ")")
                    }(k, _, K);
                    return f.useEffect((function() {
                        return X(), window.addEventListener("resize", X),
                            function() {
                                window.removeEventListener("resize", X)
                            }
                    }), []), f.useEffect((function() {
                        Y && O(new Set(["inWorld", "active", "offline"]))
                    }), [Y]), f.createElement(ue, {
                        id: "friendsSidebar",
                        onClick: function() {
                            L && M(!1)
                        }
                    }, f.createElement(fe, {
                        showShadow: w
                    }, f.createElement(me, {
                        onClick: function() {
                            return M((function(e) {
                                return !e
                            }))
                        },
                        className: "tw-cursor-pointer tw-justify-center md:tw-justify-between mb-3"
                    }, f.createElement(pe, {
                        className: "tw-hidden md:tw-flex",
                        onClick: function(e) {
                            e.stopPropagation(), t(!1)
                        }
                    }, f.createElement(c.$1, {
                        icon: d.vrcCollapseRight,
                        color: "white",
                        "aria-label": "Close Friends Menu",
                        className: "tw-w-full tw-h-full"
                    })), f.createElement("div", {
                        "aria-label": "Friends Total"
                    }, f.createElement("span", null, ee), f.createElement(c.$1, {
                        "aria-label": "Friend Groups Dropdown Button",
                        icon: o.pt,
                        color: "white",
                        className: "ms-2"
                    })), f.createElement("div", null), L && f.createElement(we, {
                        "aria-label": "Friend Groups"
                    }, [{
                        label: "All Friends (".concat(_, ")"),
                        value: null
                    }].concat((0, r.Z)(Object.values(K).map((function(e) {
                        return {
                            label: "".concat(s()(e.name, {
                                omission: "...",
                                length: 35
                            }), " (").concat(e.friends.length, "/").concat(150, ")"),
                            value: e.selectedGroupTag
                        }
                    })))).map((function(e, t) {
                        return f.createElement(Ee, {
                            "aria-label": "Friend Group Button",
                            role: "radio",
                            key: e.value,
                            onClick: function() {
                                return t = e.value, void C(t);
                                var t
                            },
                            tabIndex: t,
                            title: e.label
                        }, e.label)
                    })))), f.createElement(ve, {
                        type: "text",
                        onChange: function(e) {
                            var t;
                            return u(null !== (t = e.target.value) && void 0 !== t ? t : "")
                        },
                        value: l,
                        placeholder: "Search Friends",
                        "aria-label": "Search Friends"
                    }), f.createElement(c.Lt, {
                        label: "Sort By",
                        className: "mt-3 md:tw-w-1/2",
                        onChange: function(e) {
                            h(e)
                        },
                        value: g,
                        options: ae
                    })), f.createElement(xe, null, f.createElement(ge, {
                        ref: T
                    }, f.createElement(he, {
                        className: "pt-1",
                        onScroll: function(e) {
                            var t = e.target,
                                n = t.scrollTop,
                                r = void 0 === n ? 0 : n,
                                i = t.clientHeight,
                                a = void 0 === i ? 0 : i;
                            r > 0 && !w ? y(!0) : 0 === r && w && y(!1), $ && r + a >= H.current.scrollHeight - 200 && N <= _ && U(Math.min(N + 10, _))
                        }
                    }, f.createElement(be, {
                        ref: H,
                        role: "list",
                        "aria-label": "Friends List"
                    }, f.createElement(ie, {
                        isActive: j.has("inWorld"),
                        onClick: P("inWorld"),
                        categoryName: "In-World",
                        count: V
                    }), j.has("inWorld") && D.map((function(e) {
                        return f.createElement(q, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })), f.createElement(ie, {
                        className: j.has("inWorld") && D.length > 0 ? "tw-mt-3" : "",
                        isActive: j.has("active"),
                        onClick: P("active"),
                        categoryName: "Active",
                        count: Q
                    }), j.has("active") && G.map((function(e) {
                        return f.createElement(q, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })), f.createElement(ie, {
                        className: j.has("active") && G.length > 0 ? "tw-mt-3" : "",
                        isActive: j.has("offline"),
                        onClick: P("offline"),
                        categoryName: "Offline",
                        count: J
                    }), j.has("offline") && B.map((function(e) {
                        return f.createElement(q, {
                            key: e.id,
                            userId: e.id,
                            closeSidebar: function() {
                                t(!1)
                            }
                        })
                    })))))))
                }));
            oe.displayName = "FriendsComponent";
            const le = oe;
            var se = (0, a.Z)("div", {
                    target: "e1oqhh5q12"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                ce = (0, a.Z)("div", {
                    target: "e1oqhh5q11"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                ue = (0, a.Z)(se, {
                    target: "e1oqhh5q10"
                })({
                    name: "fq1d6",
                    styles: "min-height:100%;flex-grow:1;overflow-x:hidden"
                }),
                de = {
                    name: "125sl10",
                    styles: "box-shadow:0 20px 90px -2px rgba(0, 0, 0, 0.3)"
                },
                fe = (0, a.Z)(se, {
                    target: "e1oqhh5q9"
                })("padding:1.3rem;z-index:10;", (function(e) {
                    return e.showShadow ? de : (0, u.iv)("", "")
                }), " transition:box-shadow 0.3s ease-in-out;"),
                me = (0, a.Z)(ce, {
                    target: "e1oqhh5q8"
                })({
                    name: "ju98wq",
                    styles: "position:relative;font-weight:300;font-size:1.5rem;line-height:1.5rem;align-items:center"
                }),
                ve = (0, a.Z)(c.II, {
                    target: "e1oqhh5q7"
                })({
                    name: "82a6rk",
                    styles: "flex:1"
                }),
                pe = (0, a.Z)("div", {
                    target: "e1oqhh5q6"
                })({
                    name: "15qggwq",
                    styles: "transition:all 0.1s ease-in;width:35px;height:35px;display:flex;justify-content:center;overflow:hidden;:hover{transform:scale(1.15);cursor:pointer;}:active{transform:scale(0.9);}"
                }),
                ge = (0, a.Z)(se, {
                    target: "e1oqhh5q5"
                })({
                    name: "wsam0j",
                    styles: "flex-grow:1;position:absolute;width:100%;height:100%"
                }),
                he = (0, a.Z)(se, {
                    target: "e1oqhh5q4"
                })({
                    name: "131cj2s",
                    styles: "overflow-y:auto;overflow-x:hidden;transition:margin-right 250ms ease-in-out"
                }),
                be = (0, a.Z)(se, {
                    target: "e1oqhh5q3"
                })({
                    name: "1bnk0mu",
                    styles: "transition:margin-right 250ms ease-in-out"
                }),
                xe = (0, a.Z)("div", {
                    target: "e1oqhh5q2"
                })("position:relative;height:100%;flex-grow:1;&:hover{", he, "{margin-right:0;}}"),
                we = (0, a.Z)("div", {
                    target: "e1oqhh5q1"
                })({
                    name: "3x907s",
                    styles: "position:absolute;z-index:5;top:100%;left:-2px;width:calc(100% + 4px);background-color:#07343f;display:flex;flex-direction:column;border-radius:3px;border:#086c84 solid 2px;text-align:center;max-width:calc(100% + 4px);font-size:1rem"
                }),
                ye = {
                    name: "1gz2b5f",
                    styles: "overflow:hidden;text-overflow:ellipsis"
                },
                Ee = (0, a.Z)("div", {
                    target: "e1oqhh5q0"
                })("transition:opacity 0.2s ease-in-out;padding:5px;background-color:#07343f;cursor:pointer;max-width:100%;white-space:nowrap;", (function(e) {
                    return e.trimToLength ? ye : ""
                }), " transition:background-color 0.2s ease-in-out;&:hover{background-color:#086c84;opacity:1;}")
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
//# sourceMappingURL=77057222dff77b53beb3a19547015d9659b9384d407312544c4ad8da48455659.js.map