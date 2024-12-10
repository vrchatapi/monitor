"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8482], {
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
                Dy: () => l,
                MF: () => o,
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
                    p = e.size,
                    m = void 0 === p ? "md" : p,
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
                    size: m,
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
                }, d), "sm" !== m && c.createElement("br", null))
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
        20916: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(54546),
                a = n(59895),
                o = n(34359),
                c = n(42138),
                l = n(15861),
                i = n(64687),
                s = n.n(i),
                u = n(61509).S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllPermissions: e.query({
                                queryFn: (t = (0, l.Z)(s().mark((function e(t, n, r, a) {
                                    var o, l, i, u;
                                    return s().wrap((function(e) {
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
                                                if (o.push.apply(o, (0, c.Z)(u.data)), l += i, u.data.length !== i) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return e.abrupt("continue", 3);
                                            case 14:
                                                return e.abrupt("break", 17);
                                            case 17:
                                                return o.sort((function(e, t) {
                                                    return e.name.localeCompare(t.name)
                                                })), e.abrupt("return", {
                                                    data: o
                                                });
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, n, r, a) {
                                    return t.apply(this, arguments)
                                })
                            })
                        };
                        var t
                    }
                }).useGetAllPermissionsQuery,
                p = n(67294),
                m = n(32981),
                d = n(23138),
                f = n(21442),
                E = n(89163),
                v = n(3126),
                Z = n(95305),
                y = n(87261),
                g = n(34698),
                h = n(90922),
                b = n(12752),
                w = n(86646),
                I = n(18436),
                O = ["seconds", "minutes", "hours", "days", "months", "years", "forever"],
                A = {
                    for: ["avatar", "licenseGroup", "permission", "product"],
                    to: ["wear", "have"]
                };
            const S = function(e) {
                var t, n = e.userId,
                    c = (0, m.I0)(),
                    l = (0, m.v9)((function(e) {
                        return e.miscellaneous
                    })),
                    i = u().data,
                    s = (0, m.v9)((function(e) {
                        return e.miscellaneous.licenseGroups
                    })),
                    S = (0, b.pc)(),
                    C = (0, p.useState)(""),
                    k = (0, r.Z)(C, 2),
                    x = k[0],
                    D = k[1],
                    N = (0, p.useState)("permission"),
                    L = (0, r.Z)(N, 2),
                    T = L[0],
                    _ = L[1],
                    R = (0, p.useState)("have"),
                    U = (0, r.Z)(R, 2),
                    P = U[0],
                    j = U[1],
                    z = (0, p.useState)(n || ""),
                    M = (0, r.Z)(z, 2),
                    G = M[0],
                    H = M[1],
                    F = (0, p.useState)("forever"),
                    V = (0, r.Z)(F, 2),
                    q = V[0],
                    K = V[1],
                    B = (0, p.useState)([]),
                    Q = (0, r.Z)(B, 2),
                    W = Q[0],
                    X = Q[1],
                    Y = (0, p.useState)("Granted via website"),
                    $ = (0, r.Z)(Y, 2),
                    J = $[0],
                    ee = $[1];
                (0, p.useEffect)((function() {
                    c((0, h.Dy)({}))
                }), []);
                var te = {
                        forId: x,
                        forType: T,
                        forAction: P,
                        licenseHolderId: G,
                        untilDate: q,
                        tags: W,
                        notes: J
                    },
                    ne = "permission" === T ? i : s,
                    re = "avatar" === T || "product" === T;
                return S ? p.createElement(I.Z, {
                    title: "Grant License",
                    icon: o.sS
                }, (null === (t = l.error) || void 0 === t ? void 0 : t.error) && p.createElement(d.Z, {
                    className: "alert-danger"
                }, p.createElement("h6", {
                    className: "alert-heading"
                }, " Error Granting License"), p.createElement("hr", null), p.createElement("strong", null, l.statusCode), "  ", l.error.error), l.complete && p.createElement(d.Z, {
                    className: "alert-success"
                }, p.createElement("h6", {
                    className: "alert-heading"
                }, "Success!"), p.createElement("hr", null), "License Granted! ", p.createElement(w.Z, {
                    icon: a.u8,
                    color: "success"
                })), l.loading && p.createElement("div", null, "Loading..."), p.createElement(f.Z, null, p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "forType"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: T,
                    onChange: function(e) {
                        return _(e.target.value)
                    }
                }, A.for.map((function(e, t) {
                    return p.createElement("option", {
                        key: "forType-".concat(t),
                        value: e
                    }, e)
                }))))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    sm: "2"
                }, "forId"), re && p.createElement(Z.Z, {
                    sm: "10"
                }, p.createElement(y.Z, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "_id of the avatar or product",
                    value: x,
                    onChange: function(e) {
                        return D(e.target.value)
                    }
                })), !re && p.createElement(Z.Z, {
                    sm: "10"
                }, p.createElement(y.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: x,
                    onChange: function(e) {
                        return D(e.target.value)
                    }
                }, p.createElement("option", {
                    value: "",
                    disabled: !0
                }, "-- Select Option --"), null == ne ? void 0 : ne.map((function(e, t) {
                    return p.createElement("option", {
                        key: "".concat(T, "-forId-").concat(t),
                        value: e.id
                    }, e.name)
                }))))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "forAction"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: P,
                    onChange: function(e) {
                        return j(e.target.value)
                    }
                }, A.to.map((function(e, t) {
                    return p.createElement("option", {
                        key: "forAction-".concat(t),
                        value: e
                    }, e)
                }))))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "licenseHolderId"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "text",
                    bsSize: "sm",
                    placeholder: "User Id of user this license will be granted for",
                    value: G,
                    onChange: function(e) {
                        return H(e.target.value)
                    }
                }))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "untilDate"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "select",
                    bsSize: "sm",
                    value: q,
                    onChange: function(e) {
                        return K(e.target.value)
                    }
                }, O.map((function(e, t) {
                    return p.createElement("option", {
                        key: "time-".concat(t),
                        value: e
                    }, e)
                }))))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "tags"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "text",
                    bgsize: "small",
                    value: W,
                    onChange: function(e) {
                        return X([e.target.value])
                    }
                }))), p.createElement(E.Z, {
                    row: !0
                }, p.createElement(v.Z, {
                    xs: "2"
                }, "notes"), p.createElement(Z.Z, {
                    xs: "10"
                }, p.createElement(y.Z, {
                    type: "text",
                    bgsize: "small",
                    value: J,
                    onChange: function(e) {
                        return ee(e.target.value)
                    }
                }))), p.createElement(g.Z, {
                    onClick: function() {
                        return c((0, h.t1)(te))
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
                    p = e.disabled;
                return a.createElement(o.Z, {
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
                Z: () => A
            });
            var r = n(4942),
                a = n(15861),
                o = n(15671),
                c = n(43144),
                l = n(60136),
                i = n(82963),
                s = n(61120),
                u = n(64687),
                p = n.n(u),
                m = n(65780),
                d = n.n(m),
                f = n(67294),
                E = (n(32981), n(83505), n(14411), n(34984)),
                v = n(97878),
                Z = n(9669),
                y = n.n(Z),
                g = n(17228),
                h = n(69523),
                b = n(67947);
            n(43862), n(47716), n(37549);

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
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
            const A = function() {
                return []
            }
        }
    }
]);
//# sourceMappingURL=b2ab7a23d36fea6b32fd11ed64d38e01c06474bab8ef132f0742fd4e0abac439.js.map