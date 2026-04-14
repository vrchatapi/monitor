"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9651], {
        66770: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(87462),
                a = n(45697),
                i = n.n(a),
                o = n(67294),
                l = n(80988),
                s = n(21538),
                c = function(e) {
                    var t, n, a, i = !("hidden" === (null === (t = e.data) || void 0 === t ? void 0 : t.releaseStatus)),
                        c = (0, s.LQ)({
                            avatarId: null === (n = e.data) || void 0 === n ? void 0 : n.id
                        }, {
                            skip: i
                        }).data;
                    return o.createElement(l.uW, (0, r.Z)({}, e, {
                        fieldsList: ["updated_at"],
                        contentType: "avatar",
                        showAuthor: !0,
                        data: null !== (a = null != c ? c : e.avatar) && void 0 !== a ? a : e.data
                    }))
                };
            c.propTypes = {
                data: i().shape({
                    id: i().string,
                    authorName: i().string,
                    authorId: i().string,
                    name: i().string,
                    releaseStatus: i().oneOf(["public", "private", "hidden"]),
                    updated_at: i().string,
                    tags: i().arrayOf(i().string),
                    unityPackages: i().arrayOf(i().shape({
                        platform: i().string
                    }))
                }).isRequired,
                fieldsList: i().arrayOf(i().string)
            };
            const u = c
        },
        49651: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => fe
            });
            var r = n(42138),
                a = n(54546),
                i = n(4965),
                o = n(29841),
                l = n(71858),
                s = n(68871),
                c = n(9998),
                u = n(42619),
                m = n(80988),
                d = n(50141),
                f = n(48313),
                p = n(83807),
                v = n(751),
                w = n(27484),
                g = n.n(w),
                b = n(67294),
                h = n(89250),
                x = n(50146),
                y = n(85327),
                E = n(74392),
                N = n(66770),
                k = n(77267),
                C = n(89182),
                S = n(15861),
                Z = n(64687),
                F = n.n(Z),
                G = n(45697),
                I = n.n(G),
                T = n(64258),
                z = n(13271),
                M = n(32981),
                R = n(96273),
                L = function(e) {
                    var t = e.isOpen,
                        n = e.onCloseCallback,
                        r = e.group;
                    if (!r) return null;
                    var i = (0, p.Tu)().user,
                        o = r.visibility,
                        l = (0, R.Gf)({
                            group: r,
                            type: r.type
                        }),
                        s = b.useState(l || ""),
                        c = (0, a.Z)(s, 2),
                        u = c[0],
                        d = c[1],
                        f = b.useState(o || "private"),
                        v = (0, a.Z)(f, 2),
                        w = v[0],
                        g = v[1],
                        h = b.useState(!1),
                        x = (0, a.Z)(h, 2),
                        y = x[0],
                        E = x[1],
                        N = b.useState(""),
                        k = (0, a.Z)(N, 2),
                        C = k[0],
                        Z = k[1],
                        G = (0, z.qP)(),
                        I = (0, a.Z)(G, 1)[0],
                        L = (0, z.CN)(),
                        j = (0, a.Z)(L, 1)[0],
                        V = (0, M.I0)();
                    b.useEffect((function() {
                        r && (d(l || ""), g(r.visibility || "private"), Z(""))
                    }), [r]);
                    var q = function(e) {
                            return e.trim() ? e.length > 20 ? "List name cannot exceed 20 characters" : "" : "List name cannot be empty"
                        },
                        X = function() {
                            d(l || ""), g((null == r ? void 0 : r.visibility) || "private"), E(!1), Z("")
                        };
                    return b.createElement(m.u_, {
                        title: "Edit Favorite List",
                        onClose: function() {
                            X(), n()
                        },
                        isVisible: t,
                        width: "750px",
                        centered: !1,
                        overflow: "auto",
                        className: ""
                    }, b.createElement(m.sm, {
                        isOpen: y,
                        confirmCallback: (0, S.Z)(F().mark((function e() {
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, I({
                                            type: r.type,
                                            name: r.name,
                                            userId: null == i ? void 0 : i.id
                                        });
                                    case 3:
                                        V((0, T.d)({
                                            title: "Favorite List Cleared",
                                            message: "The favorite list has been cleared.",
                                            color: "success",
                                            icon: "success",
                                            timeout: 5e3
                                        })), X(), n(), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), V((0, T.d)({
                                            title: "Failed To Clear Favorite List",
                                            message: "The favorite list could not be cleared.",
                                            color: "danger",
                                            icon: "error",
                                            timeout: 5e3
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))),
                        cancelCallback: function() {
                            return E(!1)
                        },
                        headerText: "Clear List ?",
                        bodyText: "Are you sure you want to clear this list? This is NOT reversible.",
                        confirmText: "Clear List",
                        type: "danger"
                    }), b.createElement("div", {
                        className: "tw-flex tw-flex-col tw-items-center tw-justify-between tw-w-full"
                    }, b.createElement("div", {
                        className: "tw-w-full"
                    }, b.createElement("div", {
                        className: "tw-mb-2"
                    }, b.createElement("label", {
                        className: "tw-block tw-text-sm tw-font-medium tw-text-white tw-mb-2 tw-w-full",
                        htmlFor: "listName"
                    }, "List Name (Max 20 characters)"), b.createElement(m.II, {
                        type: "text",
                        value: u,
                        onChange: function(e) {
                            var t = e.target.value;
                            d(t), Z(q(t))
                        },
                        placeholder: "Enter list name",
                        className: "tw-w-full",
                        id: "listName",
                        maxLength: 20
                    }), C && b.createElement("div", {
                        className: "tw-text-red tw-text-sm tw-mt-1"
                    }, C)), b.createElement("div", null, b.createElement("label", {
                        className: "tw-block tw-text-sm tw-font-medium tw-text-white tw-mb-3",
                        htmlFor: "visibility"
                    }, "Visibility"), b.createElement("div", {
                        className: "tw-space-y-2"
                    }, ["private", "friends", "public"].map((function(e) {
                        return b.createElement("label", {
                            key: e,
                            className: "tw-flex tw-items-center tw-cursor-pointer"
                        }, b.createElement("input", {
                            type: "radio",
                            name: "visibility",
                            value: e,
                            checked: w === e,
                            onChange: function(e) {
                                return g(e.target.value)
                            },
                            className: "tw-mr-3 tw-text-blue-500",
                            id: "visibility-".concat(e)
                        }), b.createElement("span", {
                            className: "tw-text-white tw-capitalize",
                            htmlFor: "visibility-".concat(e)
                        }, e))
                    }))))), b.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-full tw-mt-6 tw-pt-4 tw-border-t tw-border-gray-600"
                    }, b.createElement("div", {
                        className: "tw-flex tw-gap-3"
                    }, b.createElement(m.zx, {
                        onClick: function() {
                            X(), n()
                        },
                        outline: !0,
                        neutral: !0
                    }, "Cancel"), b.createElement(m.zx, {
                        onClick: function() {
                            return E(!0)
                        },
                        outline: !0,
                        danger: !0
                    }, "Clear List")), b.createElement("div", {
                        className: "tw-flex tw-space-x-3"
                    }, b.createElement(m.zx, {
                        onClick: (0, S.Z)(F().mark((function e() {
                            var t;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t = q(u))) {
                                            e.next = 4;
                                            break
                                        }
                                        return Z(t), e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, j({
                                            type: r.type,
                                            name: r.name,
                                            userId: null == i ? void 0 : i.id,
                                            displayName: u,
                                            visibility: w
                                        });
                                    case 7:
                                        X(), n(), V((0, T.d)({
                                            title: "Favorite List Updated",
                                            message: "The favorite list has been updated.",
                                            color: "success",
                                            icon: "success",
                                            timeout: 5e3
                                        })), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(4), V((0, T.d)({
                                            title: "Failed To Update Favorite List",
                                            message: "The favorite list could not be update.",
                                            color: "danger",
                                            icon: "error",
                                            timeout: 5e3
                                        }));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 12]
                            ])
                        }))),
                        color: "primary",
                        disabled: !!C
                    }, "Save Changes")))))
                };
            L.propTypes = {
                isOpen: I().bool,
                onCloseCallback: I().func
            };
            const j = L;
            var V = n(68055),
                q = n(59545),
                X = n(6811),
                O = n(76553),
                P = n(7080);
            var D = b.memo((function(e) {
                var t = e.onSelect,
                    n = e.type,
                    r = e.isSelected,
                    i = e.currentGroup,
                    o = e.favoriteGroups,
                    l = e.favoriteId,
                    s = e.noMoveButton,
                    d = (0, M.I0)(),
                    f = (0, v.zZ)(),
                    p = (0, a.Z)(f, 2),
                    w = p[0],
                    g = p[1].isLoading,
                    h = (0, v.Xc)(),
                    y = (0, a.Z)(h, 2),
                    E = y[0],
                    N = y[1].isLoading,
                    k = b.useState(i),
                    C = (0, a.Z)(k, 2),
                    Z = C[0],
                    G = C[1],
                    I = b.useState(!1),
                    z = (0, a.Z)(I, 2),
                    L = z[0],
                    j = z[1],
                    D = b.useState(!1),
                    U = (0, a.Z)(D, 2),
                    B = U[0],
                    Y = U[1],
                    W = b.useMemo((function() {
                        var e;
                        return null == o || null === (e = o.find((function(e) {
                            return e.name === Z
                        }))) || void 0 === e ? void 0 : e.isVrcPlus
                    }), [o, Z]),
                    J = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    },
                    Q = function() {
                        var e = (0, S.Z)(F().mark((function e(t) {
                            var r, a, s;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (J(t), Z !== i) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (!((r = o.find((function(e) {
                                                return e.name === Z
                                            }))).count >= r.limit)) {
                                            e.next = 7;
                                            break
                                        }
                                        return d((0, T.d)({
                                            title: "Cannot save to a full collection",
                                            icon: O.eH,
                                            message: "You will need to make space before you can add more favorites to this collection",
                                            color: "warning",
                                            timeout: 7e3
                                        })), e.abrupt("return");
                                    case 7:
                                        return e.prev = 7, e.next = 10, w({
                                            id: l,
                                            favoriteId: l,
                                            type: W ? R.N4[n] : n,
                                            oldGroupName: i,
                                            newGroupName: Z
                                        }).unwrap();
                                    case 10:
                                        d((0, T.d)({
                                            title: "Favorite Moved to ".concat(o.find((function(e) {
                                                return e.name === Z
                                            })).displayName),
                                            icon: X.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 17;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(7), console.error("Failed to move favorite", e.t0), d((0, T.d)({
                                            title: "Failed to move favorite",
                                            icon: O.eH,
                                            message: null !== (a = null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 17:
                                        j(!1), G(i);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 13]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = (0, S.Z)(F().mark((function e(t) {
                            var r, a, o;
                            return F().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return J(t), e.next = 3, E({
                                            id: l,
                                            type: W ? R.N4[n] : n,
                                            groupName: i
                                        }).unwrap();
                                    case 3:
                                        (r = e.sent).error ? (console.error("Failed to delete favorite", r.error), d((0, T.d)({
                                            title: "Failed to delete favorite",
                                            icon: O.eH,
                                            message: null !== (a = null === (o = r.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }))) : d((0, T.d)({
                                            title: "Favorite Removed",
                                            icon: X.f8,
                                            color: "success",
                                            timeout: 3e3
                                        })), Y(!1);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return L && !g ? b.createElement(m.X2, {
                    className: "align-items-center justify-content-between tw-flex-1",
                    "aria-label": "Select Move Target",
                    role: "group",
                    onClick: J
                }, b.createElement(A, {
                    className: "tw-w-full"
                }, b.createElement(P.Z, {
                    favoriteGroups: o,
                    selectedGroup: Z,
                    onGroupClick: function(e) {
                        G(e)
                    },
                    type: n,
                    className: "tw-max-w-none"
                })), b.createElement(_, {
                    className: "justify-content-end"
                }, b.createElement(m.zx, {
                    title: "Confirm",
                    onClick: Q,
                    className: "me-1 px-2",
                    positive: !0,
                    expand: !0
                }, b.createElement(m.$1, {
                    width: 15,
                    icon: V.LE,
                    color: "fff"
                })), b.createElement(m.zx, {
                    title: "Cancel",
                    onClick: function(e) {
                        J(e), j(!1)
                    },
                    className: "px-2",
                    neutral: !0,
                    expand: !0
                }, b.createElement(m.$1, {
                    width: 15,
                    icon: q.NB,
                    color: "fff"
                })))) : L && g ? b.createElement(m.X2, {
                    className: "align-items-center justify-content-between",
                    onClick: J
                }, b.createElement(m.zx, {
                    className: "px-2",
                    loading: !0,
                    disabled: !0,
                    expand: !0
                }, "Moving...")) : B && !N ? b.createElement(m.X2, {
                    className: "align-items-center justify-content-between",
                    "aria-label": "Favorite Deletion Confirmation",
                    role: "group",
                    onClick: J
                }, b.createElement(m.zx, {
                    title: "Confirm",
                    onClick: K,
                    className: "me-1 px-2",
                    danger: !0,
                    expand: !0
                }, "Delete"), b.createElement(m.zx, {
                    title: "Cancel",
                    onClick: function(e) {
                        J(e), Y(!1)
                    },
                    className: "px-2",
                    neutral: !0,
                    expand: !0
                }, "Cancel")) : B && N ? b.createElement(m.X2, {
                    className: "align-items-center justify-content-between",
                    onClick: J
                }, b.createElement(m.zx, {
                    className: "me-1 px-2",
                    loading: !0,
                    disabled: !0,
                    expand: !0
                }, "Deleting...")) : b.createElement($, {
                    role: "button",
                    tabIndex: -1,
                    "aria-label": "Add to Selection",
                    onClick: function(e) {
                        J(e), t && t(l)
                    }
                }, b.createElement(m.X2, {
                    role: "checkbox",
                    "aria-checked": r,
                    className: "align-items-center"
                }, b.createElement(H, {
                    isSelected: r
                }, b.createElement(m.$1, {
                    icon: V.LE,
                    color: "var(--bs-primary)",
                    size: "sm"
                })), b.createElement("div", {
                    className: "ms-2"
                }, "Add to Selection")), b.createElement(m.X2, {
                    className: "align-items-center"
                }, b.createElement(m.zx, {
                    title: "Unfavorite",
                    onClick: function(e) {
                        J(e), Y(!0)
                    },
                    className: "px-2 me-1",
                    id: "Tooltip-Unfavorite-".concat(l),
                    danger: !0
                }, b.createElement(m.$1, {
                    icon: u.$,
                    color: "fff"
                })), b.createElement(x.Z, {
                    placement: "bottom",
                    target: "Tooltip-Unfavorite-".concat(l)
                }, "Unfavorite"), !s && b.createElement(b.Fragment, null, b.createElement(m.zx, {
                    title: "Move",
                    onClick: function(e) {
                        J(e), j(!0), G(i)
                    },
                    className: "px-2 ms-1",
                    id: "Tooltip-Move-".concat(l)
                }, b.createElement(m.$1, {
                    icon: c.Zh,
                    color: "fff"
                })), b.createElement(x.Z, {
                    placement: "bottom",
                    target: "Tooltip-Move-".concat(l)
                }, "Move"))))
            }));
            D.propTypes = {
                currentGroup: I().string.isRequired,
                favoriteGroups: I().arrayOf(I().shape({
                    name: I().string.isRequired,
                    displayName: I().string.isRequired,
                    isVrcPlus: I().bool,
                    isDisabled: I().bool,
                    numFavorites: I().number,
                    maxFavoritesPerGroup: I().number
                })).isRequired,
                favoriteId: I().string.isRequired,
                isSelected: I().bool.isRequired,
                onSelect: I().func.isRequired,
                type: I().oneOf(["world", "avatar", "friend"]).isRequired,
                noMoveButton: I().bool
            };
            const U = D;
            var $ = (0, i.Z)(m.X2, {
                    target: "e10vjnwi4"
                })({
                    name: "17xzav4",
                    styles: "flex-grow:1;align-items:center;justify-content:space-between;padding:0 0.5rem;input{margin-top:0!important;}"
                }),
                A = (0, i.Z)(m.X2, {
                    target: "e10vjnwi3"
                })({
                    name: "3q9szp",
                    styles: "width:70%;max-width:70%;align-items:center"
                }),
                _ = (0, i.Z)(m.X2, {
                    target: "e10vjnwi2"
                })({
                    name: "b4p1ds",
                    styles: "width:28%;max-width:28%;align-items:center"
                }),
                B = {
                    name: "3ix1vd",
                    styles: "opacity:1"
                },
                H = (0, i.Z)((0, i.Z)("div", {
                    target: "e10vjnwi0"
                })(""), {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e10vjnwi1"
                })("display:flex;align-items:center;justify-content:center;width:20px;height:20px;background-color:hsl(0, 0%, 30%);border:2px solid;border-color:", (function(e) {
                    return e.isSelected ? "var(--bs-primary)" : "var(--bs-gray)"
                }), ";transition:border-color 150 ease-in-out;border-radius:4px;&:hover{border-color:var(--bs-primary);}svg{opacity:0;transition:opacity 150 ease-in-out;", (function(e) {
                    return e.isSelected ? B : ""
                }), ";}"),
                Y = n(11788);

            function W(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return J(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
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

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Q = function(e) {
                var t = e.type,
                    n = e.isVisible,
                    r = e.onVisibilityChange,
                    i = e.onDeleteStart,
                    o = e.onDeleteEnd,
                    l = e.selectedItems,
                    s = e.currentGroup,
                    c = (0, M.I0)(),
                    u = (0, v.Xc)(),
                    d = (0, a.Z)(u, 1)[0],
                    f = (0, v.oy)(),
                    p = (0, a.Z)(f, 1)[0],
                    w = b.useState(!1),
                    g = (0, a.Z)(w, 2),
                    h = g[0],
                    x = g[1],
                    y = b.useState(!1),
                    E = (0, a.Z)(y, 2),
                    N = E[0],
                    k = E[1],
                    C = b.useState(0),
                    Z = (0, a.Z)(C, 2),
                    G = Z[0],
                    I = Z[1],
                    z = b.useState(0),
                    L = (0, a.Z)(z, 2),
                    j = L[0],
                    V = L[1],
                    q = b.useRef(!0);
                b.useEffect((function() {
                    q.current = !0
                }), [s]), b.useEffect((function() {
                    x(n), !n && N && (q.current = !0)
                }), [n]);
                var P = function() {
                    var e = (0, S.Z)(F().mark((function e() {
                        var n, a, u, m, f, v, w, g;
                        return F().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    x(!1), k(!0), i && i(), n = 1, I(1), V(l.length), q.current = !1, a = document.title, u = W(l), e.prev = 9, u.s();
                                case 11:
                                    if ((m = u.n()).done) {
                                        e.next = 33;
                                        break
                                    }
                                    if (f = m.value, !q.current) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("break", 33);
                                case 15:
                                    if (document.title = "Deleting ".concat(n, " of ").concat(l.length, "... - VRChat"), f) {
                                        e.next = 20;
                                        break
                                    }
                                    return n++, I(n), e.abrupt("continue", 31);
                                case 20:
                                    if (!(f === R.G$)) {
                                        e.next = 25;
                                        break
                                    }
                                    return n++, I(n), e.abrupt("continue", 31);
                                case 25:
                                    return e.next = 27, d({
                                        id: f,
                                        type: t,
                                        groupName: s
                                    }).unwrap();
                                case 27:
                                    (v = e.sent).error && c((0, T.d)({
                                        title: "Failed to delete favorite ".concat(n, " out of ").concat(l.length),
                                        icon: O.eH,
                                        message: null !== (w = null === (g = v.error.data) || void 0 === g || null === (g = g.error) || void 0 === g ? void 0 : g.message) && void 0 !== w ? w : "Something went wrong",
                                        color: "danger",
                                        timeout: 5e3
                                    })), n++, I(n);
                                case 31:
                                    e.next = 11;
                                    break;
                                case 33:
                                    e.next = 38;
                                    break;
                                case 35:
                                    e.prev = 35, e.t0 = e.catch(9), u.e(e.t0);
                                case 38:
                                    return e.prev = 38, u.f(), e.finish(38);
                                case 41:
                                    if (p({
                                            type: t
                                        }), o && o(), r && r(!1), document.title = a, !q.current) {
                                        e.next = 48;
                                        break
                                    }
                                    return k(!1), e.abrupt("return");
                                case 48:
                                    k(!1), c((0, T.d)({
                                        title: "Favorites Removed",
                                        icon: X.f8,
                                        color: "success",
                                        messages: "Removed ".concat(l.length, " favorites"),
                                        timeout: 3e3
                                    }));
                                case 50:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [9, 35, 38, 41]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return h && !N ? b.createElement(m.qX, {
                    type: "warn",
                    title: "Deleting Favorites",
                    hideIcon: !0
                }, b.createElement(m.X2, null, "You are about to delete", " ", b.createElement("b", null, l.length, " favorite", l.length > 1 ? "s" : ""), ". This cannot be undone. Are you sure?"), b.createElement(m.X2, {
                    className: "mt-2"
                }, b.createElement(m.zx, {
                    onClick: P,
                    className: "me-0 me-sm-2",
                    danger: !0,
                    expand: !0
                }, "Yes, Remove Favorites"), b.createElement(m.zx, {
                    onClick: function() {
                        r && r(!1), x(!1)
                    },
                    neutral: !0,
                    expand: !0
                }, "No, Keep them"))) : N ? b.createElement(m.qX, {
                    type: "dark",
                    title: "Deleting Favorites",
                    hideIcon: !0
                }, b.createElement(ee, {
                    value: G,
                    max: j
                }, "Deleting ", G, " of ", j), b.createElement(m.zx, {
                    className: "mt-2",
                    onClick: function() {
                        q.current = !0
                    },
                    danger: !0,
                    expand: !0
                }, "Cancel Deletion")) : null
            };
            Q.propTypes = {
                type: I().oneOf(["world", "avatar", "friend"]).isRequired,
                isVisible: I().bool.isRequired,
                onVisibilityChange: I().func,
                onDeleteStart: I().func,
                onDeleteEnd: I().func,
                currentGroup: I().string
            };
            const K = Q;
            var ee = (0, i.Z)(Y.Z, {
                target: "edie9xa0"
            })({
                name: "wm7wuv",
                styles: "margin-top:0.75rem;.progress-bar{font-size:0.85rem;font-weight:bold;}"
            });

            function te(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return ne(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ne(e, t)
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

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var re = function(e) {
                var t = e.type,
                    n = e.isVisible,
                    r = e.onVisibilityChange,
                    i = e.onMoveStart,
                    o = e.onMoveEnd,
                    l = e.selectedItems,
                    s = e.favoriteGroups,
                    c = e.currentGroup,
                    u = e.favoriteList,
                    d = (0, M.I0)(),
                    f = (0, v.zZ)(),
                    p = (0, a.Z)(f, 1)[0],
                    w = (0, v.oy)(),
                    g = (0, a.Z)(w, 1)[0],
                    h = b.useState(!1),
                    x = (0, a.Z)(h, 2),
                    y = x[0],
                    E = x[1],
                    N = b.useState(c),
                    k = (0, a.Z)(N, 2),
                    C = k[0],
                    Z = k[1],
                    G = b.useState(!1),
                    I = (0, a.Z)(G, 2),
                    z = I[0],
                    L = I[1],
                    j = b.useState(0),
                    V = (0, a.Z)(j, 2),
                    q = V[0],
                    D = V[1],
                    U = b.useState(0),
                    $ = (0, a.Z)(U, 2),
                    A = $[0],
                    _ = $[1],
                    B = b.useRef(!0);
                b.useEffect((function() {
                    Z(c), r && r(!1), E(!1), B.current = !0
                }), [c]);
                var H = b.useMemo((function() {
                    var e = null == s ? void 0 : s.find((function(e) {
                        return e.name === C
                    }));
                    return !!e && (null == e ? void 0 : e.numFavorites) + l.length > (null == e ? void 0 : e.maxFavoritesPerGroup)
                }), [s, C, l]);
                b.useEffect((function() {
                    E(n), !n && z && (B.current = !0)
                }), [n]);
                var Y = function() {
                    var e = (0, S.Z)(F().mark((function e() {
                        var n, a, m, f, v, w;
                        return F().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!H) {
                                        e.next = 3;
                                        break
                                    }
                                    return d((0, T.d)({
                                        title: "Cannot save to a full group",
                                        icon: O.eH,
                                        message: "You will need to make space before you can add more favorites to this group",
                                        color: "warning",
                                        timeout: 7e3
                                    })), e.abrupt("return");
                                case 3:
                                    E(!1), L(!0), i && i(), n = 1, D(1), _(l.length), B.current = !1, a = document.title, m = te(l), e.prev = 12, v = F().mark((function e() {
                                        var t, r, a, i, o, m;
                                        return F().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a = f.value, !B.current) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.abrupt("return", 0);
                                                case 3:
                                                    if (document.title = "Moving ".concat(n, " of ").concat(l.length, "... - VRChat"), a) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    return n++, D(n), e.abrupt("return", 1);
                                                case 8:
                                                    if (!("private" === (null == u || null === (t = u.find((function(e) {
                                                            return e.id === a
                                                        }))) || void 0 === t ? void 0 : t.releaseStatus) || a === R.G$)) {
                                                        e.next = 13;
                                                        break
                                                    }
                                                    return n++, D(n), e.abrupt("return", 1);
                                                case 13:
                                                    return e.next = 15, p({
                                                        id: a,
                                                        favoriteId: a,
                                                        type: null === (r = s.find((function(e) {
                                                            return e.name === C
                                                        }))) || void 0 === r ? void 0 : r.type,
                                                        currentGroup: c,
                                                        newGroupName: C,
                                                        silent: !0
                                                    }).unwrap();
                                                case 15:
                                                    (i = e.sent).error && (console.error("Failed to move favorite", i.error), d((0, T.d)({
                                                        title: "Failed to move favorite ".concat(n, " out of ").concat(l.length),
                                                        icon: O.eH,
                                                        message: null !== (o = null === (m = i.error.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message) && void 0 !== o ? o : "Something went wrong",
                                                        color: "danger",
                                                        timeout: 5e3
                                                    }))), n++, D(n);
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })), m.s();
                                case 15:
                                    if ((f = m.n()).done) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.delegateYield(v(), "t0", 17);
                                case 17:
                                    if (0 !== (w = e.t0)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("break", 24);
                                case 20:
                                    if (1 !== w) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("continue", 22);
                                case 22:
                                    e.next = 15;
                                    break;
                                case 24:
                                    e.next = 29;
                                    break;
                                case 26:
                                    e.prev = 26, e.t1 = e.catch(12), m.e(e.t1);
                                case 29:
                                    return e.prev = 29, m.f(), e.finish(29);
                                case 32:
                                    if (g({
                                            type: t
                                        }), o && o(), r && r(!1), document.title = a, !B.current) {
                                        e.next = 39;
                                        break
                                    }
                                    return L(!1), e.abrupt("return");
                                case 39:
                                    L(!1), d((0, T.d)({
                                        title: "Favorites Moved to ".concat(s.find((function(e) {
                                            return e.name === C
                                        })).displayName),
                                        icon: X.f8,
                                        color: "success",
                                        message: "Moved ".concat(l.length, " favorites"),
                                        timeout: 3e3
                                    }));
                                case 41:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [12, 26, 29, 32]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return z ? b.createElement(m.qX, {
                    type: "dark",
                    title: "Moving Favorites",
                    hideIcon: !0
                }, b.createElement(ie, {
                    value: q,
                    max: A
                }, "Moving ", q, " of ", A), b.createElement(m.zx, {
                    className: "mt-2",
                    onClick: function() {
                        B.current = !0
                    },
                    danger: !0,
                    expand: !0
                }, "Cancel Move")) : y && !z ? b.createElement(m.qX, {
                    type: "dark",
                    title: "Moving Favorites",
                    hideIcon: !0
                }, b.createElement(m.X2, {
                    className: "mb-1"
                }, "Select a collection to move to"), b.createElement(P.Z, {
                    favoriteGroups: s,
                    selectedGroup: C,
                    onGroupClick: function(e) {
                        Z(e)
                    },
                    type: t,
                    className: "tw-w-full tw-max-w-full"
                }), H && b.createElement(m.qX, {
                    type: "warn",
                    title: "Collection Full",
                    message: "That collection will not fit all of the items to be moved",
                    slim: !0
                }), b.createElement(m.X2, {
                    className: "mt-2"
                }, b.createElement(m.zx, {
                    onClick: Y,
                    className: "me-0 me-sm-2",
                    positive: !0,
                    expand: !0,
                    disabled: H
                }, "Move Favorites"), b.createElement(m.zx, {
                    onClick: function() {
                        r && r(!1), E(!1), Z(c)
                    },
                    neutral: !0,
                    expand: !0,
                    disabled: H
                }, "Cancel"))) : null
            };
            re.propTypes = {
                type: I().oneOf(["world", "avatar", "friend"]).isRequired,
                isVisible: I().bool.isRequired,
                onVisibilityChange: I().func,
                onMoveStart: I().func,
                onMoveEnd: I().func,
                selectedItems: I().arrayOf(I().shape({
                    id: I().string,
                    favoriteId: I().string
                })).isRequired,
                favoriteGroups: I().arrayOf(I().shape({
                    name: I().string.isRequired,
                    displayName: I().string.isRequired,
                    maxFavoritesPerGroup: I().number.isRequired,
                    numFavorites: I().number.isRequired
                })),
                currentGroup: I().string
            };
            const ae = re;
            var ie = (0, i.Z)(Y.Z, {
                    target: "eb32cby0"
                })({
                    name: "wm7wuv",
                    styles: "margin-top:0.75rem;.progress-bar{font-size:0.85rem;font-weight:bold;}"
                }),
                oe = function(e) {
                    var t = e.type,
                        n = {
                            world: {
                                title: "Expand Your World Collection",
                                description: "Love discovering new worlds? Unblock 400 extra favorite slots with 4 new lists to save and revisit your discoveries."
                            }
                        };
                    return n[t] ? b.createElement("div", {
                        className: "tw-w-full tw-flex tw-items-center tw-justify-between tw-bg-grey tw-p-8"
                    }, b.createElement("div", {
                        className: "tw-flex tw-flex-col tw-w-2/3 tw-items-start tw-justify-center"
                    }, b.createElement("h3", {
                        style: {
                            fontWeight: "bold"
                        },
                        className: " heading tw-bg-gradient-to-b tw-from-[#FFE729] tw-via-[#FFE729] tw-to-[#FF810D] tw-bg-clip-text tw-text-transparent tw-text-3xl "
                    }, n[t].title), b.createElement("p", {
                        className: "tw-mb-0"
                    }, n[t].description)), b.createElement("a", {
                        href: "https://hello.vrchat.com/vrchatplus?utm_source=vrchatwebapp&utm_medium=favorites_upsell",
                        className: " tw-ml-2 tw-px-10 tw-bg-white tw-border-white tw-rounded-md tw-py-2 tw-text-center tw-text-grey tw-no-underline ",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Join VRC+")) : null
                };
            oe.propTypes = {
                type: I().string.isRequired
            };
            const le = oe;
            var se = n(91158),
                ce = function(e) {
                    var t, n, r = e.type,
                        a = (0, h.s0)(),
                        i = {
                            world: {
                                label: "Browse Worlds",
                                onClick: function() {
                                    a("/home/worlds")
                                }
                            }
                        };
                    return b.createElement("div", {
                        className: "tw-bg-grey tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-12 tw-text-center tw-rounded-lg tw-mt-4"
                    }, b.createElement(m.$1, {
                        icon: se.default,
                        className: "tw-text-7xl tw-mb-8 tw-text-light-grey"
                    }), b.createElement("p", {
                        className: "tw-text-lg tw-text-lighter-grey tw-font-bold tw-mb-0"
                    }, "No favorites here yet."), b.createElement("p", {
                        className: "tw-text-lg tw-text-lighter-grey tw-font-bold tw-mb-2"
                    }, "Explore VRChat and add some ", r, " to favorites to get started!"), i[r] && b.createElement(m.zx, {
                        className: "tw-capitalize tw-mt-5 tw-px-5",
                        onClick: null === (t = i[r]) || void 0 === t ? void 0 : t.onClick
                    }, null === (n = i[r]) || void 0 === n ? void 0 : n.label))
                };
            ce.propTypes = {
                type: I().string.isRequired
            };
            const ue = ce;
            var me = ["world", "avatar", "friend"],
                de = [{
                    label: "Favorite Added",
                    value: "added"
                }, {
                    label: "Last Updated",
                    value: "updated"
                }];
            const fe = function() {
                var e, t, n, i, w, S, Z, F = (0, h.s0)(),
                    G = (0, p.dD)(),
                    I = (0, h.UO)(),
                    T = I.type,
                    z = I.name,
                    M = (0, E.c)(),
                    L = M.currentUser,
                    V = M.isLoading,
                    q = (M.isSuccess, M.isVrcPlusUser, M.isChurnedVrcPlusUser),
                    X = M.isNeverHadVrcPlusUser,
                    O = (0, y.r)(T),
                    D = O.favoriteGroups,
                    $ = O.isLoading,
                    A = (O.freeFavoriteGroupsIsLoading, O.vrcPlusFavoriteGroupsIsLoading, O.freeFavoriteGroupsIsFetching),
                    _ = O.vrcPlusFavoriteGroupsIsFetching,
                    B = (O.freeFavoriteGroupsIsError, O.freeFavoriteGroupsError, R.N4[T] && (null == z ? void 0 : z.startsWith(R.N4[T]))),
                    H = (0, v.FT)({
                        type: B ? R.N4[T] : T,
                        groupName: z
                    }, {
                        skip: !z
                    }),
                    Y = H.data,
                    W = (H.isSuccess, H.isLoading),
                    J = H.isFetching,
                    Q = b.useState(null != z ? z : null),
                    ee = (0, a.Z)(Q, 2),
                    te = ee[0],
                    ne = ee[1],
                    re = b.useRef(null),
                    ie = (0, p.t4)(),
                    oe = ie.friends,
                    se = ie.loading,
                    ce = b.useState("added"),
                    fe = (0, a.Z)(ce, 2),
                    xe = fe[0],
                    ke = fe[1],
                    Ce = b.useState(""),
                    Se = (0, a.Z)(Ce, 2),
                    Ze = Se[0],
                    Fe = Se[1],
                    Ge = b.useState(Ze),
                    Ie = (0, a.Z)(Ge, 2),
                    Te = Ie[0],
                    ze = Ie[1],
                    Me = b.useMemo((function() {
                        return null == D ? void 0 : D.find((function(e) {
                            return e.name === te
                        }))
                    }), [D, te]),
                    Re = b.useState(!1),
                    Le = (0, a.Z)(Re, 2),
                    je = Le[0],
                    Ve = Le[1],
                    qe = b.useState([]),
                    Xe = (0, a.Z)(qe, 2),
                    Oe = Xe[0],
                    Pe = Xe[1],
                    De = b.useState(!1),
                    Ue = (0, a.Z)(De, 2),
                    $e = Ue[0],
                    Ae = Ue[1],
                    _e = b.useState(!1),
                    Be = (0, a.Z)(_e, 2),
                    He = Be[0],
                    Ye = Be[1],
                    We = b.useState(!1),
                    Je = (0, a.Z)(We, 2),
                    Qe = Je[0],
                    Ke = Je[1],
                    et = b.useState(!1),
                    tt = (0, a.Z)(et, 2),
                    nt = tt[0],
                    rt = tt[1],
                    at = b.useState(!1),
                    it = (0, a.Z)(at, 2),
                    ot = it[0],
                    lt = it[1],
                    st = null !== (e = null == Y ? void 0 : Y.favorites) && void 0 !== e ? e : [],
                    ct = se && "friend" === T,
                    ut = null !== (t = null === (n = {
                        friend: d.Z,
                        world: C.Z,
                        avatar: N.Z
                    }) || void 0 === n ? void 0 : n[T]) && void 0 !== t ? t : b.createElement("div", null);
                b.useEffect((function() {
                    !((null == D ? void 0 : D.length) > 0) || z && null != D && D.find((function(e) {
                        return e.name === z
                    })) || (F("/home/favorites/".concat(T, "/").concat(D[0].name), {
                        replace: !0
                    }), ne(D[0].name))
                }), [D, T]), b.useEffect((function() {
                    null != te && (Fe(""), b.startTransition((function() {
                        ze(""), Ae(!1), Ye(!1), Pe([]), Ve(!1)
                    })))
                }), [te, T]);
                var mt = function(e) {
                        Oe.includes(e) ? Pe(Oe.filter((function(t) {
                            return t !== e
                        }))) : Pe([].concat((0, r.Z)(Oe), [e]))
                    },
                    dt = function() {
                        Ke(!0)
                    },
                    ft = function() {
                        Ke(!1), Pe([])
                    },
                    pt = b.useMemo((function() {
                        if (0 === st.length) return [];
                        var e = st.filter((function(e) {
                                var t, n;
                                return "private" !== (null === (t = e[T]) || void 0 === t ? void 0 : t.releaseStatus) && (null === (n = e[T]) || void 0 === n ? void 0 : n.id) !== R.G$
                            })),
                            t = st.filter((function(e) {
                                var t, n;
                                return "private" === (null === (t = e[T]) || void 0 === t ? void 0 : t.releaseStatus) || (null === (n = e[T]) || void 0 === n ? void 0 : n.id) === R.G$
                            })),
                            n = (0, r.Z)(e);
                        return "updated" === xe && n.sort((function(e, t) {
                            var n, r;
                            return g()(null == t || null === (n = t[T]) || void 0 === n ? void 0 : n.updated_at).diff(g()(null == e || null === (r = e[T]) || void 0 === r ? void 0 : r.updated_at))
                        })), [].concat((0, r.Z)(n), (0, r.Z)(t))
                    }), [st, xe]),
                    vt = b.useMemo((function() {
                        if (Te.length < 2) return pt;
                        try {
                            var e = new RegExp(Te, "i");
                            if ("friend" !== T || ct || !oe) return (0, R.Dc)(pt, e, T);
                            var t = (0, R.Ob)(oe, e);
                            return (0, R.Pj)(pt, t)
                        } catch (e) {
                            return console.error("Filter error:", e), pt
                        }
                    }), [pt, Te, oe, ct, T]);
                b.useEffect((function() {
                    var e, t, n = null !== (e = null === (t = Te.length > 1 ? vt : pt) || void 0 === t ? void 0 : t.map((function(e) {
                            return e.favoriteId
                        }))) && void 0 !== e ? e : [],
                        r = Oe.filter((function(e) {
                            return n.includes(e)
                        }));
                    Pe(r)
                }), [te, Te, null == vt ? void 0 : vt.length, null == pt ? void 0 : pt.length, T]);
                var wt = b.useMemo((function() {
                        var e;
                        return null !== (e = vt.map((function(e) {
                            var t = e.id === R.G$,
                                n = "friend" === T,
                                r = e.tags[0],
                                a = n ? e : e[T];
                            return b.createElement(ut, {
                                key: e.favoriteId,
                                className: "mb-0",
                                data: a,
                                userId: null == a ? void 0 : a.favoriteId,
                                editMode: je,
                                editModeContent: b.createElement(U, {
                                    currentGroup: r,
                                    favoriteGroups: D,
                                    favoriteId: e.favoriteId,
                                    isSelected: Oe.includes(e.favoriteId),
                                    onSelect: mt,
                                    type: T,
                                    noMoveButton: t
                                }),
                                compact: nt,
                                isCard: !nt,
                                isDisabled: q && (null == Me ? void 0 : Me.isVrcPlus)
                            })
                        }))) && void 0 !== e ? e : null
                    }), [vt, je, nt, te, Oe, T, null == L ? void 0 : L.id]),
                    gt = 0 === (null == Me ? void 0 : Me.numFavorites) || (null == Me ? void 0 : Me.isFakeGroup),
                    bt = Te.length > 1,
                    ht = V || ct && bt || Qe || $ || A || W || J || _,
                    xt = Oe.length === vt.length ? "Deselect All" : "Select All",
                    yt = bt && 0 === vt.length && !ht,
                    Et = (0, R.Gf)({
                        group: Me,
                        type: T
                    });
                if (!me.includes(T)) return b.createElement(m.qX, {
                    type: "warn",
                    title: "Failed to load favorites"
                }, '"', T, '" is not a valid favorites type');
                var Nt = "Favorite ".concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1), "s");
                return b.createElement(m.JX, {
                    className: "pb-5"
                }, b.createElement(m.$4, null, Nt), b.createElement(m.X2, null, b.createElement(we, null, Nt)), b.createElement("fieldset", {
                    className: "tw-w-full tw-flex tw-flex-col sm:tw-flex-row",
                    "aria-label": "Search Bar"
                }, b.createElement(he, {
                    type: "text",
                    "aria-label": "Search Favorites",
                    name: "input-search-favorites",
                    placeholder: "Search ".concat(T, " favorites in ").concat(null == D || null === (i = D.find((function(e) {
                        return e.name === te
                    }))) || void 0 === i ? void 0 : i.displayName),
                    className: "mb-2 mb-sm-0 me-md-1",
                    value: Ze,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        Fe(n), b.startTransition((function() {
                            ze(n)
                        }))
                    }
                }), "friend" !== T && b.createElement(ye, {
                    className: "mb-2 mb-sm-0 me-md-1",
                    label: "Sort",
                    value: xe,
                    options: de,
                    onChange: ke
                }), b.createElement(P.Z, {
                    favoriteGroups: D,
                    selectedGroup: te,
                    onGroupClick: function(e) {
                        e !== te && (F("/home/favorites/".concat(T, "/").concat(e), {
                            replace: !0
                        }), ne(e))
                    },
                    type: T,
                    ignoreDisable: !0,
                    className: "tw-flex-3 sm:tw-max-w-[30%]"
                })), ht ? b.createElement(m.UU, {
                    "aria-label": "Loading Favorites",
                    width: "100%",
                    height: "45px",
                    className: "mt-3"
                }) : b.createElement(b.Fragment, null, X && b.createElement(m.X2, {
                    className: "w-100 flex-column flex-sm-row tw-mt-4"
                }, b.createElement(le, {
                    type: T
                })), b.createElement(pe, {
                    className: "flex-column flex-md-row"
                }, b.createElement(m.X2, {
                    className: "tw-flex tw-items-center",
                    ref: re
                }, b.createElement(we, null, bt ? "Search Results" : Et, " ", (null == Me ? void 0 : Me.isVrcPlus) && b.createElement(f.Z, {
                    className: "tw-ml-2"
                })), !bt && b.createElement(b.Fragment, null, te && !(null != D && null !== (w = D.find((function(e) {
                    return e.name === te
                }))) && void 0 !== w && w.isFakeGroup) && b.createElement(Ne, {
                    className: "ms-2",
                    "aria-label": "Edit Collection",
                    onClick: function() {
                        lt(!0)
                    }
                }, b.createElement(m.$1, {
                    icon: s.faPencil
                })), b.createElement(ge, {
                    "aria-label": "Group Item Count",
                    className: "ms-2"
                }, b.createElement("div", null, null !== (S = null == pt ? void 0 : pt.length) && void 0 !== S ? S : 0), b.createElement("div", {
                    className: "mx-1"
                }, "/"), b.createElement("div", null, null !== (Z = null == Me ? void 0 : Me.maxFavoritesPerGroup) && void 0 !== Z ? Z : R.Sf)))), b.createElement(m.X2, {
                    className: "align-items-center justify-content-center justify-content-md-end flex-column flex-md-row flex-1"
                }, Oe.length > 0 && b.createElement(ve, {
                    className: "me-0 me-md-1 mt-3 mt-md-0 order-2 order-md-0"
                }, b.createElement("div", {
                    className: "text-nowrap"
                }, "Selected: ", Oe.length), b.createElement(m.zx, {
                    title: "Unfavorite Selected",
                    onClick: function() {
                        Ae(!0)
                    },
                    id: "Tooltip-BulkDelete",
                    className: "px-2 ms-3 me-1",
                    danger: !0
                }, b.createElement(m.$1, {
                    icon: u.$,
                    color: "fff"
                })), b.createElement(x.Z, {
                    placement: "bottom",
                    target: "Tooltip-BulkDelete"
                }, "Unfavorite Selected"), b.createElement(m.zx, {
                    title: "Move Selected",
                    onClick: function() {
                        Ye(!0)
                    },
                    id: "Tooltip-BulkMove",
                    className: "px-2"
                }, b.createElement(m.$1, {
                    icon: c.Zh,
                    color: "fff"
                })), b.createElement(x.Z, {
                    placement: "bottom",
                    target: "Tooltip-BulkMove"
                }, "Move Selected")), je && b.createElement(m.zx, {
                    className: "flex-row d-flex align-items-center px-3 me-1 mt-2 mt-md-0 text-nowrap",
                    onClick: function() {
                        Oe.length !== vt.length ? Pe(vt.map((function(e) {
                            return e.favoriteId
                        }))) : Pe([])
                    },
                    containerStyles: be
                }, xt), !gt && 0 !== (null == vt ? void 0 : vt.length) && (!(null != Me && Me.isVrcPlus) || (null == Me ? void 0 : Me.isVrcPlus) && !q) && b.createElement(b.Fragment, null, b.createElement(m.zx, {
                    onClick: function() {
                        je ? (Pe([]), Ve(!1), Ye(!1), Ae(!1)) : Ve(!0)
                    },
                    className: "flex-row d-flex align-items-center px-3 me-1 text-nowrap"
                }, b.createElement("div", {
                    className: "me-3"
                }, "Edit Mode"), b.createElement(m.$1, {
                    icon: s.faPencil,
                    color: je ? "#fff" : "#ffffff5f"
                })), b.createElement(m.zx, {
                    onClick: function() {
                        return rt(!nt)
                    },
                    id: "Tooltip-Compact",
                    "aria-label": "Card Size Toggle",
                    className: "d-flex d-md-block flex-row align-items-center mt-2 mt-md-0 tw-mb-4 md:tw-mb-0"
                }, b.createElement("div", {
                    className: "d-flex d-md-none me-2"
                }, nt ? "Small Cards" : "Large Cards"), b.createElement(m.$1, {
                    icon: nt ? l.Zr : o.QR,
                    width: 20,
                    color: "#6ae3f9"
                })), !G && b.createElement(x.Z, {
                    placement: "bottom",
                    target: "Tooltip-Compact"
                }, nt ? "Switch To Grid View" : "Switch To List View"))))), q && (null == Me ? void 0 : Me.isVrcPlus) && b.createElement("div", {
                    className: "tw-w-full flex-column flex-sm-row tw-mt-4"
                }, b.createElement(k.Z, {
                    title: "This list is temporarily locked",
                    description: "Your worlds are saved, but you'll need to resubscribe to VRC+ to instantly restore."
                })), b.createElement(K, {
                    type: null == Me ? void 0 : Me.type,
                    isVisible: $e,
                    onVisibilityChange: function(e) {
                        Ae(e)
                    },
                    onDeleteStart: dt,
                    onDeleteEnd: ft,
                    selectedItems: Oe
                }), b.createElement(ae, {
                    type: null == Me ? void 0 : Me.type,
                    isVisible: He,
                    onVisibilityChange: function(e) {
                        Ye(e)
                    },
                    onMoveStart: dt,
                    onMoveEnd: ft,
                    selectedItems: Oe,
                    favoriteGroups: D,
                    currentGroup: te,
                    favoriteList: st
                }), ht && b.createElement(m.UU, {
                    width: "100%",
                    height: "300px",
                    className: "mt-3",
                    radius: 4
                }), te && !ht && b.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-grid-flow-row tw-gap-4"
                }, wt), yt && b.createElement(Ee, null, "No favorite ", T, 's matching "', Te, '"'), !ht && !bt && gt && b.createElement(ue, {
                    type: T
                }), ht && b.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-w-full tw-mt-5"
                }, b.createElement("p", {
                    className: "tw-text-center"
                }, "This may take a moment depending on the number of ", T, "s in your favorites.")), b.createElement(j, {
                    isOpen: ot,
                    onCloseCallback: function() {
                        lt(!1)
                    },
                    group: Me
                }))
            };
            var pe = (0, i.Z)(m.X2, {
                    target: "ehpw5k311"
                })({
                    name: "rsh0am",
                    styles: "justify-content:space-between;align-items:center;margin-top:1rem"
                }),
                ve = (0, i.Z)(m.X2, {
                    target: "ehpw5k310"
                })({
                    name: "1kibs1n",
                    styles: "align-items:center;font-weight:bold"
                }),
                we = (0, i.Z)("h2", {
                    target: "ehpw5k39"
                })({
                    name: "w9ziq0",
                    styles: "display:flex;margin-bottom:0;align-items:center;height:50px;text-overflow:ellipsis;white-space:nowrap"
                }),
                ge = (0, i.Z)(m.X2, {
                    target: "ehpw5k38"
                })({
                    name: "maz251",
                    styles: "background:hsl(0, 0%, 21%);border-radius:4px;padding:0.25rem 0.75rem;align-items:center;font-weight:bold;font-size:1.1rem;color:hsl(0, 0%, 90%)"
                }),
                be = {
                    name: "18f5jw6",
                    styles: "order:1;@media (min-width: 768px){order:unset;}"
                },
                he = (0, i.Z)(m.II, {
                    target: "ehpw5k36"
                })({
                    name: "1pnvmye",
                    styles: "@media screen and (min-width: 576px){flex:6;}"
                }),
                xe = (0, i.Z)(m.Lt, {
                    target: "ehpw5k35"
                })({
                    name: "1pw80k8",
                    styles: "z-index:20;@media screen and (min-width: 576px){flex:3;max-width:30%;}"
                }),
                ye = (0, i.Z)(xe, {
                    target: "ehpw5k33"
                })({
                    name: "s3oxtx",
                    styles: "z-index:5"
                }),
                Ee = (0, i.Z)(m.oI, {
                    target: "ehpw5k32"
                })({
                    name: "1r9i0uh",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem"
                }),
                Ne = (0, i.Z)("button", {
                    target: "ehpw5k30"
                })("background:none;border:none;cursor:pointer;padding:0;margin:0;outline:none!important;opacity:0.5;transition:opacity 150ms ease;color:#fff;", (function(e) {
                    return e.isEditing && "opacity: 1;"
                }), " &:hover{opacity:1;}")
        },
        77267: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(68055),
                a = n(609),
                i = n(80988),
                o = n(50048),
                l = n(45697),
                s = n.n(l),
                c = n(67294),
                u = n(79655),
                m = function(e) {
                    var t = e.title,
                        n = e.description;
                    return c.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                    }, c.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, c.createElement(i.$1, {
                        icon: a.by,
                        size: "1x",
                        className: "tw-text-orange tw-mt-1 tw-mr-2"
                    }), c.createElement("div", {
                        className: "tw-flex tw-flex-col tw-justify-start tw-items-start"
                    }, c.createElement("h2", {
                        className: "tw-text-xl"
                    }, t), c.createElement("p", {
                        className: "tw-mb-0 tw-text-base"
                    }, n))), c.createElement("div", {
                        className: "tw-h-full tw-flex tw-flex-col tw-justify-center tw-mt-4 sm:tw-mt-0"
                    }, c.createElement(u.rU, {
                        to: "https://hello.vrchat.com/vrchatplus",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c.createElement(o.ZP, {
                        icon: r.LE,
                        className: "tw-bg-white tw-border-white tw-text-[#1A2026] tw-px-4"
                    }, "Subscribe to VRC+"))))
                };
            m.propTypes = {
                title: s().string,
                description: s().string
            };
            const d = m
        },
        89182: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(87462),
                a = n(45697),
                i = n.n(a),
                o = n(67294),
                l = n(80988),
                s = function(e) {
                    var t;
                    return o.createElement(l.uW, (0, r.Z)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            s.propTypes = {
                world: i().shape({
                    id: i().string,
                    name: i().string,
                    releaseStatus: i().oneOf(["public", "private"]),
                    occupants: i().number,
                    favorites: i().number,
                    visits: i().number,
                    updated_at: i().string,
                    created_at: i().string,
                    tags: i().arrayOf(i().string),
                    unityPackages: i().arrayOf(i().shape({
                        platform: i().string
                    }))
                }).isRequired,
                fieldsList: i().arrayOf(i().string)
            };
            const c = s
        }
    }
]);
//# sourceMappingURL=98414e39229523ea0edc1f6a49d3fe110389078fb85b95632ab0b8eb6333fa2c.js.map