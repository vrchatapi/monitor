"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1546], {
        88771(e, t, n) {
            n.d(t, {
                Ok: () => c,
                l1: () => o,
                lO: () => l
            });
            var r = n(72505),
                a = n.n(r),
                o = function(e) {
                    var t = e.userId;
                    return {
                        type: "MAKE_ALL_AVATARS_PRIVATE",
                        payload: a().put(window.apiUrl("/api/1/admin/avatars/all"), {
                            userId: t,
                            query: {
                                releaseStatus: "public"
                            },
                            changes: {
                                releaseStatus: "private"
                            }
                        })
                    }
                },
                c = function(e) {
                    var t = e.userId;
                    return {
                        type: "MAKE_ALL_AVATARS_HIDDEN",
                        payload: a().delete(window.apiUrl("/api/1/admin/avatars/all?userId=".concat(t)))
                    }
                },
                l = function(e) {
                    var t = e.userId,
                        n = e.avatarId;
                    return {
                        type: "SWITCH_TO_AVATAR",
                        payload: t ? a().put(window.apiUrl("/api/1/users/".concat(t, "/avatar")), {
                            avatarId: n
                        }) : a().put(window.apiUrl("/api/1/avatars/".concat(n, "/select")))
                    }
                }
        },
        89140(e, t, n) {
            n.d(t, {
                EH: () => c,
                Gy: () => l,
                Ls: () => o
            });
            var r = n(72505),
                a = n.n(r),
                o = function(e) {
                    var t = e.fileId;
                    return {
                        type: "FIX_FILE",
                        payload: a().get(window.apiUrl("/api/1/restoredFile?fileId=".concat(t)), {})
                    }
                },
                c = function(e) {
                    var t = e.forId,
                        n = e.forType,
                        r = e.forAction,
                        o = e.licenseHolderId,
                        c = e.untilDate,
                        l = e.tags,
                        i = e.notes;
                    return {
                        type: "GRANT_LICENSE",
                        payload: a().post(window.apiUrl("/api/1/licenses"), {
                            forId: t,
                            forType: n,
                            forAction: r,
                            licenseHolderId: o,
                            untilDate: c,
                            tags: l,
                            notes: i
                        })
                    }
                },
                l = function(e) {
                    e.n, e.offset;
                    return {
                        type: "LOAD_LICENSEGROUPS",
                        payload: a().get(window.apiUrl("/api/1/licenseGroups"), {})
                    }
                }
        },
        83616(e, t, n) {
            n.d(t, {
                A: () => r
            });
            n(72505);
            const r = {}
        },
        37438(e, t, n) {
            n.d(t, {
                M3: () => c,
                YM: () => l,
                r1: () => o
            });
            var r = n(72505),
                a = n.n(r),
                o = function(e) {
                    var t = e.userId,
                        n = e.direction,
                        r = {};
                    return "outgoing" === n ? r.sourceUserId = t : "incoming" === n && (r.targetUserId = t), {
                        type: "ADMIN_LOAD_PLAYERMODERATIONS",
                        payload: a().get(window.apiUrl("/api/1/auth/user/playermoderations"), {
                            params: r
                        }),
                        meta: {
                            id: t,
                            direction: n
                        }
                    }
                },
                c = function(e) {
                    var t = e.userId;
                    return {
                        type: "ADMIN_LOAD_MODERATIONS",
                        payload: a().get(window.apiUrl("/api/1/user/".concat(t, "/moderations"))),
                        meta: {
                            id: t
                        }
                    }
                },
                l = function(e) {
                    var t = e.userId,
                        n = e.moderationId;
                    return {
                        type: "ADMIN_DELETE_MODERATION",
                        payload: a().delete(window.apiUrl("/api/1/user/".concat(t, "/moderations/").concat(n)))
                    }
                }
        },
        7563(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(15902),
                a = n(59221),
                o = n(6077),
                c = n(96540),
                l = n(30104),
                i = n(21247),
                s = n(6324);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    p = e.size,
                    m = void 0 === p ? "md" : p,
                    d = e.children,
                    A = e.onToggleCallback,
                    f = void 0 === A ? function() {} : A,
                    E = c.useState(t || !1),
                    v = (0, r.A)(E, 2),
                    y = v[0],
                    g = v[1];
                c.useEffect(function() {
                    g(t)
                }, [t]);
                return c.createElement("div", null, c.createElement("h3", null, c.createElement(l.A, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: m,
                    onClick: function() {
                        n ? n() : (f(!y), g(!y))
                    },
                    color: y ? "primary" : "secondary"
                }, y && c.createElement(s.A, {
                    icon: o.Ip
                }), !y && c.createElement(s.A, {
                    icon: a.OQ
                })), " ", u), c.createElement(i.A, {
                    isOpen: y
                }, d), "sm" !== m && c.createElement("br", null))
            }
        },
        47486(e, t, n) {
            n.d(t, {
                A: () => s
            });
            var r = n(96540),
                a = n(30104),
                o = n(74758),
                c = n(55606),
                l = n(87959),
                i = n(51055);
            const s = function(e) {
                var t = e.confirmLink,
                    n = e.cancelLink,
                    s = e.prompt,
                    u = function(e) {
                        return n(e)
                    };
                return r.createElement(o.A, {
                    outline: !0
                }, r.createElement(l.A, {
                    tag: "h4"
                }, "Confirm", r.createElement(i.A, {
                    onClick: u
                })), r.createElement(c.A, null, r.createElement("p", null, s), r.createElement(a.A, {
                    onClick: function(e) {
                        return t(e)
                    },
                    color: "primary"
                }, " Ok"), " ", r.createElement(a.A, {
                    onClick: u,
                    color: "secondary"
                }, " Cancel")))
            }
        },
        47213(e, t, n) {
            n.d(t, {
                A: () => k
            });
            var r = n(15902),
                a = n(64173),
                o = n(17349),
                c = n(15184),
                l = n(10467),
                i = n(54756),
                s = n.n(i),
                u = n(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllPermissions: e.query({
                                queryFn: (t = (0, l.A)(s().mark(function e(t, n, r, a) {
                                    var o, l, i, u;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                o = [], l = 0, i = 100;
                                            case 3:
                                                return e.next = 6, a({
                                                    url: "permissions",
                                                    params: {
                                                        n: i,
                                                        offset: l
                                                    }
                                                });
                                            case 6:
                                                if (!(u = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: u.error
                                                });
                                            case 9:
                                                if (!(u.data.length > 0)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                if (o.push.apply(o, (0, c.A)(u.data)), l += i, u.data.length !== i) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return e.abrupt("continue", 3);
                                            case 14:
                                                return e.abrupt("break", 17);
                                            case 17:
                                                return o.sort(function(e, t) {
                                                    return e.name.localeCompare(t.name)
                                                }), e.abrupt("return", {
                                                    data: o
                                                });
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })), function(e, n, r, a) {
                                    return t.apply(this, arguments)
                                })
                            })
                        };
                        var t
                    }
                }),
                p = u.useGetAllPermissionsQuery,
                m = n(96540),
                d = n(6376),
                A = n(85052),
                f = n(53370),
                E = n(23239),
                v = n(27592),
                y = n(39704),
                g = n(48210),
                h = n(30104),
                b = n(89140),
                w = n(194),
                I = n(6324),
                O = n(69266),
                S = ["seconds", "minutes", "hours", "days", "months", "years", "forever"],
                C = {
                    for: ["avatar", "licenseGroup", "permission", "product"],
                    to: ["wear", "have"]
                };
            const k = function(e) {
                var t, n = e.userId,
                    c = (0, d.wA)(),
                    l = (0, d.d4)(function(e) {
                        return e.miscellaneous
                    }),
                    i = p().data,
                    s = (0, d.d4)(function(e) {
                        return e.miscellaneous.licenseGroups
                    }),
                    u = (0, w.Om)(),
                    k = (0, m.useState)(""),
                    x = (0, r.A)(k, 2),
                    D = x[0],
                    _ = x[1],
                    L = (0, m.useState)("permission"),
                    N = (0, r.A)(L, 2),
                    T = N[0],
                    U = N[1],
                    P = (0, m.useState)("have"),
                    j = (0, r.A)(P, 2),
                    z = j[0],
                    G = j[1],
                    R = (0, m.useState)(n || ""),
                    M = (0, r.A)(R, 2),
                    H = M[0],
                    F = M[1],
                    V = (0, m.useState)("forever"),
                    q = (0, r.A)(V, 2),
                    B = q[0],
                    K = q[1],
                    Q = (0, m.useState)([]),
                    W = (0, r.A)(Q, 2),
                    Y = W[0],
                    X = W[1],
                    Z = (0, m.useState)("Granted via website"),
                    J = (0, r.A)(Z, 2),
                    $ = J[0],
                    ee = J[1];
                (0, m.useEffect)(function() {
                    c((0, b.Gy)({}))
                }, []);
                var te = {
                        forId: D,
                        forType: T,
                        forAction: z,
                        licenseHolderId: H,
                        untilDate: B,
                        tags: Y,
                        notes: $
                    },
                    ne = "permission" === T ? i : s,
                    re = "avatar" === T || "product" === T;
                return u ? m.createElement(O.A, {
                    title: "Grant License",
                    icon: o.Uv
                }, (null === (t = l.error) || void 0 === t ? void 0 : t.error) && m.createElement(A.A, {
                    className: "alert-danger"
                }, m.createElement("h6", {
                    className: "alert-heading"
                }, " Error Granting License"), m.createElement("hr", null), m.createElement("strong", null, l.statusCode), "  ", l.error.error), l.complete && m.createElement(A.A, {
                    className: "alert-success"
                }, m.createElement("h6", {
                    className: "alert-heading"
                }, "Success!"), m.createElement("hr", null), "License Granted! ", m.createElement(I.A, {
                    icon: a.Wc,
                    color: "success"
                })), l.loading && m.createElement("div", null, "Loading..."), m.createElement(f.A, null, m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "forType"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "select",
                    bsSize: "sm",
                    value: T,
                    onChange: function(e) {
                        return U(e.target.value)
                    }
                }, C.for.map(function(e, t) {
                    return m.createElement("option", {
                        key: "forType-".concat(t),
                        value: e
                    }, e)
                })))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    sm: "2"
                }, "forId"), re && m.createElement(y.A, {
                    sm: "10"
                }, m.createElement(g.A, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "_id of the avatar or product",
                    value: D,
                    onChange: function(e) {
                        return _(e.target.value)
                    }
                })), !re && m.createElement(y.A, {
                    sm: "10"
                }, m.createElement(g.A, {
                    type: "select",
                    bsSize: "sm",
                    value: D,
                    onChange: function(e) {
                        return _(e.target.value)
                    }
                }, m.createElement("option", {
                    value: "",
                    disabled: !0
                }, "-- Select Option --"), null == ne ? void 0 : ne.map(function(e, t) {
                    return m.createElement("option", {
                        key: "".concat(T, "-forId-").concat(t),
                        value: e.id
                    }, e.name)
                })))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "forAction"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "select",
                    bsSize: "sm",
                    value: z,
                    onChange: function(e) {
                        return G(e.target.value)
                    }
                }, C.to.map(function(e, t) {
                    return m.createElement("option", {
                        key: "forAction-".concat(t),
                        value: e
                    }, e)
                })))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "licenseHolderId"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "User Id of user this license will be granted for",
                    value: H,
                    onChange: function(e) {
                        return F(e.target.value)
                    }
                }))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "untilDate"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "select",
                    bsSize: "sm",
                    value: B,
                    onChange: function(e) {
                        return K(e.target.value)
                    }
                }, S.map(function(e, t) {
                    return m.createElement("option", {
                        key: "time-".concat(t),
                        value: e
                    }, e)
                })))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "tags"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "text",
                    bgsize: "small",
                    value: Y,
                    onChange: function(e) {
                        return X([e.target.value])
                    }
                }))), m.createElement(E.A, {
                    row: !0
                }, m.createElement(v.A, {
                    xs: "2"
                }, "notes"), m.createElement(y.A, {
                    xs: "10"
                }, m.createElement(g.A, {
                    type: "text",
                    bgsize: "small",
                    value: $,
                    onChange: function(e) {
                        return ee(e.target.value)
                    }
                }))), m.createElement(h.A, {
                    onClick: function() {
                        return c((0, b.EH)(te))
                    }
                }, "Submit"))) : null
            }
        },
        75255(e, t, n) {
            n.d(t, {
                A: () => l
            });
            var r = n(7612),
                a = n(96540),
                o = n(30104),
                c = n(6324);
            const l = function(e) {
                var t = e.loading,
                    n = e.className,
                    l = e.onClick,
                    i = e.color,
                    s = e.children,
                    u = e.hidden,
                    p = e.disabled;
                return a.createElement(o.A, {
                    className: n,
                    onClick: l,
                    color: i,
                    hidden: u,
                    disabled: p
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, s), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(c.A, {
                    icon: r.z1,
                    spin: !0
                })))
            };
            n.dn(l)
        },
        54445(e, t, n) {
            n(96540), n(6376), n(59040), n(89140), n(194)
        },
        70312(e, t, n) {
            n(96540), n(6376), n(59040), n(89140), n(194)
        },
        86878(e, t, n) {
            n.d(t, {
                A: () => c
            });
            var r = n(58168),
                a = n(96540),
                o = n(47767);
            const c = function(e) {
                return function(t) {
                    var n = (0, o.zy)(),
                        c = (0, o.Zp)(),
                        l = (0, o.g)();
                    return a.createElement(e, (0, r.A)({}, t, {
                        router: {
                            location: n,
                            navigate: c,
                            params: l
                        }
                    }))
                }
            }
        },
        62278(e, t, n) {
            n.d(t, {
                A: () => C
            });
            var r = n(64467),
                a = n(10467),
                o = n(23029),
                c = n(92901),
                l = n(85501),
                i = n(34441),
                s = n(53954),
                u = n(54756),
                p = n.n(u),
                m = n(62328),
                d = n.n(m),
                A = n(96540),
                f = (n(6376), n(56822), n(15033), n(4157)),
                E = n(83616),
                v = n(72505),
                y = n.n(v),
                g = n(37438),
                h = n(88771),
                b = n(56136);
            n(25538), n(59362), n(86878);

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function O(e) {
                var t = S();
                return function() {
                    var n, r = (0, s.A)(e);
                    if (t) {
                        var a = (0, s.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, i.A)(this, n)
                }
            }

            function S() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (S = function() {
                    return !!e
                })()
            }
            E.A.adminChangeName, A.Component;
            const C = function() {
                return []
            }
        }
    }
]);
//# sourceMappingURL=02435889d72df126998941e2e61e32bcc73d0c1bb6e343b3de5904732f774990.js.map