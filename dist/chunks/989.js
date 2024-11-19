"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [989], {
        69523: (e, t, n) => {
            n.d(t, {
                $L: () => l,
                AN: () => c,
                zN: () => o
            });
            var r = n(9669),
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
        90922: (e, t, n) => {
            n.d(t, {
                Dy: () => i,
                MF: () => o,
                QG: () => l,
                t1: () => c
            });
            var r = n(9669),
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
                    var t = e.n,
                        n = void 0 === t ? 100 : t,
                        r = e.offset,
                        o = void 0 === r ? 0 : r;
                    return {
                        type: "LOAD_PERMISSIONS",
                        payload: a().get(window.apiUrl("/api/1/permissions?n=".concat(n, "&offset=").concat(o)), {})
                    }
                },
                i = function(e) {
                    e.n, e.offset;
                    return {
                        type: "LOAD_LICENSEGROUPS",
                        payload: a().get(window.apiUrl("/api/1/licenseGroups"), {})
                    }
                }
        },
        97878: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            n(9669);
            const r = {}
        },
        17228: (e, t, n) => {
            n.d(t, {
                bu: () => l,
                m6: () => c,
                un: () => o
            });
            var r = n(9669),
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
        37599: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(54546),
                a = n(45573),
                o = n(27003),
                c = n(67294),
                l = n(34698),
                i = n(65706),
                s = n(86646);
            const u = function(e) {
                var t = e.collapseOpen,
                    n = e.toggle,
                    u = e.title,
                    m = e.size,
                    p = void 0 === m ? "md" : m,
                    d = e.children,
                    f = e.onToggleCallback,
                    E = void 0 === f ? function() {} : f,
                    v = c.useState(t || !1),
                    Z = (0, r.Z)(v, 2),
                    y = Z[0],
                    g = Z[1];
                c.useEffect((function() {
                    g(t)
                }), [t]);
                return c.createElement("div", null, c.createElement("h3", null, c.createElement(l.Z, {
                    "aria-label": "".concat(u, " Toggle"),
                    size: p,
                    onClick: function() {
                        n ? n() : (E(!y), g(!y))
                    },
                    color: y ? "primary" : "secondary"
                }, y && c.createElement(s.Z, {
                    icon: o.uM
                }), !y && c.createElement(s.Z, {
                    icon: a.Kt
                })), " ", u), c.createElement(i.Z, {
                    isOpen: y
                }, d), "sm" !== p && c.createElement("br", null))
            }
        },
        11e3: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(67294),
                a = n(39886),
                o = n(56599),
                c = n(54610),
                l = n(34698),
                i = n(89421);
            const s = function(e) {
                var t = e.confirmLink,
                    n = e.cancelLink,
                    s = e.prompt,
                    u = function(e) {
                        return n(e)
                    };
                return r.createElement(a.Z, {
                    outline: !0
                }, r.createElement(o.Z, {
                    tag: "h4"
                }, "Confirm", r.createElement(i.Z, {
                    onClick: u
                })), r.createElement(c.Z, null, r.createElement("p", null, s), r.createElement(l.Z, {
                    onClick: function(e) {
                        return t(e)
                    },
                    color: "primary"
                }, " Ok"), " ", r.createElement(l.Z, {
                    onClick: u,
                    color: "secondary"
                }, " Cancel")))
            }
        },
        40902: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(54546),
                a = n(59895),
                o = n(34359),
                c = n(67294),
                l = n(32981),
                i = n(23138),
                s = n(21442),
                u = n(89163),
                m = n(3126),
                p = n(95305),
                d = n(87261),
                f = n(34698),
                E = n(86646),
                v = n(90922),
                Z = n(18436),
                y = n(12752),
                g = ["seconds", "minutes", "hours", "days", "months", "years", "forever"],
                h = {
                    for: ["avatar", "licenseGroup", "permission", "product"],
                    to: ["wear", "have"]
                };
            const w = function(e) {
                var t, n = e.userId,
                    w = (0, l.I0)(),
                    I = (0, l.v9)((function(e) {
                        return e.miscellaneous
                    })),
                    b = (0, l.v9)((function(e) {
                        return e.miscellaneous.permissions
                    })),
                    O = (0, l.v9)((function(e) {
                        return e.miscellaneous.licenseGroups
                    })),
                    S = (0, y.pc)(),
                    A = (0, c.useState)(""),
                    C = (0, r.Z)(A, 2),
                    D = C[0],
                    N = C[1],
                    L = (0, c.useState)("permission"),
                    _ = (0, r.Z)(L, 2),
                    k = _[0],
                    T = _[1],
                    x = (0, c.useState)("have"),
                    R = (0, r.Z)(x, 2),
                    U = R[0],
                    P = R[1],
                    M = (0, c.useState)(n || ""),
                    j = (0, r.Z)(M, 2),
                    z = j[0],
                    G = j[1],
                    H = (0, c.useState)("forever"),
                    F = (0, r.Z)(H, 2),
                    V = F[0],
                    K = F[1],
                    B = (0, c.useState)([]),
                    Q = (0, r.Z)(B, 2),
                    q = Q[0],
                    W = Q[1],
                    X = (0, c.useState)("Granted via website"),
                    Y = (0, r.Z)(X, 2),
                    $ = Y[0],
                    J = Y[1];
                (0, c.useEffect)((function() {
                    w((0, v.QG)({})), w((0, v.Dy)({}))
                }), []);
                var ee = {
                        forId: D,
                        forType: k,
                        forAction: U,
                        licenseHolderId: z,
                        untilDate: V,
                        tags: q,
                        notes: $
                    },
                    te = "permission" === k ? b : O,
                    ne = "avatar" === k || "product" === k;
                return S ? c.createElement(Z.Z, {
                    title: "Grant License",
                    icon: o.sS
                }, (null === (t = I.error) || void 0 === t ? void 0 : t.error) && c.createElement(i.Z, {
                    className: "alert-danger"
                }, c.createElement("h6", {
                    className: "alert-heading"
                }, " Error Granting License"), c.createElement("hr", null), c.createElement("strong", null, I.statusCode), "  ", I.error.error), I.complete && c.createElement(i.Z, {
                    className: "alert-success"
                }, c.createElement("h6", {
                    className: "alert-heading"
                }, "Success!"), c.createElement("hr", null), "License Granted! ", c.createElement(E.Z, {
                    icon: a.u8,
                    color: "success"
                })), I.loading && c.createElement("div", null, "Loading..."), c.createElement(s.Z, null, c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "forType"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: k,
                    onChange: function(e) {
                        return T(e.target.value)
                    }
                }, h.for.map((function(e, t) {
                    return c.createElement("option", {
                        key: "forType-".concat(t),
                        value: e
                    }, e)
                }))))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    sm: "2"
                }, "forId"), ne && c.createElement(p.Z, {
                    sm: "10"
                }, c.createElement(d.Z, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "_id of the avatar or product",
                    value: D,
                    onChange: function(e) {
                        return N(e.target.value)
                    }
                })), !ne && c.createElement(p.Z, {
                    sm: "10"
                }, c.createElement(d.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: D,
                    onChange: function(e) {
                        return N(e.target.value)
                    }
                }, c.createElement("option", {
                    value: "",
                    disabled: !0
                }, "-- Select Option --"), te.map((function(e, t) {
                    return c.createElement("option", {
                        key: "".concat(k, "-forId-").concat(t),
                        value: e.id
                    }, e.name)
                }))))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "forAction"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: U,
                    onChange: function(e) {
                        return P(e.target.value)
                    }
                }, h.to.map((function(e, t) {
                    return c.createElement("option", {
                        key: "forAction-".concat(t),
                        value: e
                    }, e)
                }))))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "licenseHolderId"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "User Id of user this license will be granted for",
                    value: z,
                    onChange: function(e) {
                        return G(e.target.value)
                    }
                }))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "untilDate"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: V,
                    onChange: function(e) {
                        return K(e.target.value)
                    }
                }, g.map((function(e, t) {
                    return c.createElement("option", {
                        key: "time-".concat(t),
                        value: e
                    }, e)
                }))))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "tags"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "text",
                    bgsize: "small",
                    value: q,
                    onChange: function(e) {
                        return W([e.target.value])
                    }
                }))), c.createElement(u.Z, {
                    row: !0
                }, c.createElement(m.Z, {
                    xs: "2"
                }, "notes"), c.createElement(p.Z, {
                    xs: "10"
                }, c.createElement(d.Z, {
                    type: "text",
                    bgsize: "small",
                    value: $,
                    onChange: function(e) {
                        return J(e.target.value)
                    }
                }))), c.createElement(f.Z, {
                    onClick: function() {
                        return w((0, v.t1)(ee))
                    }
                }, "Submit"))) : null
            }
        },
        12611: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(92332),
                a = n(67294),
                o = n(34698),
                c = n(86646);
            const l = function(e) {
                var t = e.loading,
                    n = e.className,
                    l = e.onClick,
                    i = e.color,
                    s = e.children,
                    u = e.hidden,
                    m = e.disabled;
                return a.createElement(o.Z, {
                    className: n,
                    onClick: l,
                    color: i,
                    hidden: u,
                    disabled: m
                }, a.createElement("div", {
                    className: t ? "invisible" : "visible"
                }, s), a.createElement("div", {
                    className: t ? "visible" : "invisible",
                    style: {
                        marginTop: "-1.25em"
                    }
                }, a.createElement(c.Z, {
                    icon: r.LM,
                    spin: !0
                })))
            }
        },
        88439: (e, t, n) => {
            n(67294), n(32981), n(46326), n(90922), n(12752)
        },
        18133: (e, t, n) => {
            n(67294), n(32981), n(46326), n(90922), n(12752)
        },
        37549: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(87462),
                a = n(67294),
                o = n(89250);
            const c = function(e) {
                return function(t) {
                    var n = (0, o.TH)(),
                        c = (0, o.s0)(),
                        l = (0, o.UO)();
                    return a.createElement(e, (0, r.Z)({}, t, {
                        router: {
                            location: n,
                            navigate: c,
                            params: l
                        }
                    }))
                }
            }
        },
        62876: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(4942),
                a = n(15861),
                o = n(15671),
                c = n(43144),
                l = n(60136),
                i = n(82963),
                s = n(61120),
                u = n(64687),
                m = n.n(u),
                p = n(65780),
                d = n.n(p),
                f = n(67294),
                E = (n(32981), n(83505), n(14411), n(34984)),
                v = n(97878),
                Z = n(9669),
                y = n.n(Z),
                g = n(17228),
                h = n(69523),
                w = n(67947);
            n(43862), n(47716), n(37549);

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, s.Z)(e);
                    if (t) {
                        var a = (0, s.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, i.Z)(this, n)
                }
            }
            v.Z.adminChangeName, f.Component;
            const S = function() {
                return []
            }
        }
    }
]);
//# sourceMappingURL=7cbce8acd8ac20704fa002ecda738991ef6a7c7556694ef0445d1e9839ebdeca.js.map