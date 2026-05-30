"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4002], {
        5256(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(58168),
                a = n(5556),
                i = n.n(a),
                o = n(96540),
                l = n(15033),
                s = n(95583),
                c = function(e) {
                    var t, n, a, i = !("hidden" === (null === (t = e.data) || void 0 === t ? void 0 : t.releaseStatus)),
                        c = (0, s.RR)({
                            avatarId: null === (n = e.data) || void 0 === n ? void 0 : n.id
                        }, {
                            skip: i
                        }).data;
                    return o.createElement(l.mI, (0, r.A)({}, e, {
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
        34002(e, t, n) {
            n.r(t), n.d(t, {
                default: () => pe
            });
            var r = n(15184),
                a = n(15902),
                i = n(70129),
                o = n(30901),
                l = n(41141),
                s = n(52160),
                c = n(50573),
                u = n(38275),
                m = n(15033),
                d = n(93930),
                f = n(48169),
                p = n(194),
                v = n(77948),
                w = n(74353),
                g = n.n(w),
                b = n(96540),
                h = n(47767),
                y = n(98302),
                x = n(59416),
                E = n(39343),
                k = n(5256),
                N = n(71391),
                A = n(46708),
                S = n(10467),
                C = n(54756),
                F = n.n(C),
                I = n(5556),
                M = n.n(I),
                T = n(65950),
                G = n(97071),
                R = n(99385),
                L = n(6376),
                j = n(11634),
                V = function(e) {
                    var t = e.isOpen,
                        n = e.onCloseCallback,
                        r = e.group;
                    if (!r) return null;
                    var i = (0, p.a$)().user,
                        o = r.visibility,
                        l = (0, j.Mn)({
                            group: r,
                            type: r.type
                        }),
                        s = b.useState(l || ""),
                        c = (0, a.A)(s, 2),
                        u = c[0],
                        d = c[1],
                        f = b.useState(o || "private"),
                        v = (0, a.A)(f, 2),
                        w = v[0],
                        g = v[1],
                        h = b.useState(!1),
                        y = (0, a.A)(h, 2),
                        x = y[0],
                        E = y[1],
                        k = b.useState(""),
                        N = (0, a.A)(k, 2),
                        A = N[0],
                        C = N[1],
                        I = (0, R.Lx)(),
                        M = (0, a.A)(I, 1)[0],
                        V = (0, R.hF)(),
                        $ = (0, a.A)(V, 1)[0],
                        q = (0, L.wA)(),
                        D = (0, G.DF)();
                    b.useEffect(function() {
                        r && (d(l || ""), g(r.visibility || "private"), C(""))
                    }, [r]);
                    var P = function(e) {
                            return e.trim() ? e.length > 20 ? "List name cannot exceed 20 characters" : "" : "List name cannot be empty"
                        },
                        z = function() {
                            d(l || ""), g((null == r ? void 0 : r.visibility) || "private"), E(!1), C("")
                        };
                    return b.createElement(m.aF, {
                        title: "Edit Favorite List",
                        onClose: function() {
                            z(), n()
                        },
                        isVisible: t,
                        width: "750px",
                        centered: !1,
                        overflow: "auto",
                        className: ""
                    }, b.createElement(m.uo, {
                        isOpen: x,
                        confirmCallback: (0, S.A)(F().mark(function e() {
                            return F().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, M({
                                            type: r.type,
                                            name: r.name,
                                            userId: null == i ? void 0 : i.id
                                        });
                                    case 3:
                                        q((0, T.X)({
                                            title: "Favorite List Cleared",
                                            message: "The favorite list has been cleared.",
                                            color: "success",
                                            icon: "success",
                                            timeout: 5e3
                                        })), z(), n(), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), q((0, T.X)({
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
                            }, e, null, [
                                [0, 8]
                            ])
                        })),
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
                    }, "List Name (Max 20 characters)"), b.createElement(m.pd, {
                        type: "text",
                        value: u,
                        onChange: function(e) {
                            var t = e.target.value;
                            d(t), C(P(t))
                        },
                        placeholder: "Enter list name",
                        className: "tw-w-full",
                        id: "listName",
                        maxLength: 20
                    }), A && b.createElement("div", {
                        className: "tw-text-red tw-text-sm tw-mt-1"
                    }, A)), b.createElement("div", null, b.createElement("label", {
                        className: "tw-block tw-text-sm tw-font-medium tw-text-white tw-mb-3",
                        htmlFor: "visibility"
                    }, "Visibility"), b.createElement("div", {
                        className: "tw-space-y-2"
                    }, ["private", "friends", "public"].map(function(e) {
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
                    })))), b.createElement("div", {
                        className: "tw-flex tw-justify-between tw-w-full tw-mt-6 tw-pt-4 tw-border-t tw-border-gray-600"
                    }, b.createElement("div", {
                        className: "tw-flex tw-gap-3"
                    }, b.createElement(m.$n, {
                        onClick: function() {
                            z(), n()
                        },
                        outline: !0,
                        neutral: !0
                    }, "Cancel"), b.createElement(m.$n, {
                        onClick: function() {
                            return E(!0)
                        },
                        outline: !0,
                        danger: !0
                    }, "Clear List")), b.createElement("div", {
                        className: "tw-flex tw-space-x-3"
                    }, b.createElement(m.$n, {
                        onClick: (0, S.A)(F().mark(function e() {
                            var t;
                            return F().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t = P(u))) {
                                            e.next = 4;
                                            break
                                        }
                                        return C(t), e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, $({
                                            type: r.type,
                                            name: r.name,
                                            userId: null == i ? void 0 : i.id,
                                            displayName: u,
                                            visibility: w
                                        }).unwrap();
                                    case 7:
                                        z(), n(), q((0, T.X)({
                                            title: "Favorite List Updated",
                                            message: "The favorite list has been updated.",
                                            color: "success",
                                            icon: "success",
                                            timeout: 5e3
                                        })), e.next = 17;
                                        break;
                                    case 12:
                                        if (e.prev = 12, e.t0 = e.catch(4), !D({
                                                error: e.t0
                                            })) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 16:
                                        q((0, T.X)({
                                            title: "Failed To Update Favorite List",
                                            message: "The favorite list could not be update.",
                                            color: "danger",
                                            icon: "error",
                                            timeout: 5e3
                                        }));
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 12]
                            ])
                        })),
                        color: "primary",
                        disabled: !!A
                    }, "Save Changes")))))
                };
            V.propTypes = {
                isOpen: M().bool,
                onCloseCallback: M().func
            };
            const $ = V;
            var q = n(81617),
                D = n(19179),
                P = n(42217),
                z = n(34496),
                O = n(77761);
            var U = b.memo(function(e) {
                var t = e.onSelect,
                    n = e.type,
                    r = e.isSelected,
                    i = e.currentGroup,
                    o = e.favoriteGroups,
                    l = e.favoriteId,
                    s = e.noMoveButton,
                    d = (0, L.wA)(),
                    f = (0, v.il)(),
                    p = (0, a.A)(f, 2),
                    w = p[0],
                    g = p[1].isLoading,
                    h = (0, v.mu)(),
                    x = (0, a.A)(h, 2),
                    E = x[0],
                    k = x[1].isLoading,
                    N = b.useState(i),
                    A = (0, a.A)(N, 2),
                    C = A[0],
                    I = A[1],
                    M = b.useState(!1),
                    G = (0, a.A)(M, 2),
                    R = G[0],
                    V = G[1],
                    $ = b.useState(!1),
                    U = (0, a.A)($, 2),
                    _ = U[0],
                    W = U[1],
                    Z = b.useMemo(function() {
                        var e;
                        return null == o || null === (e = o.find(function(e) {
                            return e.name === C
                        })) || void 0 === e ? void 0 : e.isVrcPlus
                    }, [o, C]),
                    J = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    },
                    K = function() {
                        var e = (0, S.A)(F().mark(function e(t) {
                            var r, a, s;
                            return F().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (J(t), C !== i) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (!((r = o.find(function(e) {
                                                return e.name === C
                                            })).count >= r.limit)) {
                                            e.next = 7;
                                            break
                                        }
                                        return d((0, T.X)({
                                            title: "Cannot save to a full collection",
                                            icon: z.zp,
                                            message: "You will need to make space before you can add more favorites to this collection",
                                            color: "warning",
                                            timeout: 7e3
                                        })), e.abrupt("return");
                                    case 7:
                                        return e.prev = 7, e.next = 10, w({
                                            id: l,
                                            favoriteId: l,
                                            type: Z ? j.w6[n] : n,
                                            oldGroupName: i,
                                            newGroupName: C
                                        }).unwrap();
                                    case 10:
                                        d((0, T.X)({
                                            title: "Favorite Moved to ".concat(o.find(function(e) {
                                                return e.name === C
                                            }).displayName),
                                            icon: P.SG,
                                            color: "success",
                                            timeout: 3e3
                                        })), e.next = 17;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(7), console.error("Failed to move favorite", e.t0), d((0, T.X)({
                                            title: "Failed to move favorite",
                                            icon: z.zp,
                                            message: null !== (a = null === (s = e.t0.data) || void 0 === s || null === (s = s.error) || void 0 === s ? void 0 : s.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "danger",
                                            timeout: 3e3
                                        }));
                                    case 17:
                                        V(!1), I(i);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [7, 13]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        var e = (0, S.A)(F().mark(function e(t) {
                            var r, a, o;
                            return F().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return J(t), e.next = 3, E({
                                            id: l,
                                            type: Z ? j.w6[n] : n,
                                            groupName: i
                                        }).unwrap();
                                    case 3:
                                        (r = e.sent).error ? (console.error("Failed to delete favorite", r.error), d((0, T.X)({
                                            title: "Failed to delete favorite",
                                            icon: z.zp,
                                            message: null !== (a = null === (o = r.error.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }))) : d((0, T.X)({
                                            title: "Favorite Removed",
                                            icon: P.SG,
                                            color: "success",
                                            timeout: 3e3
                                        })), W(!1);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return R && !g ? b.createElement(m.fI, {
                    className: "align-items-center justify-content-between tw-flex-1",
                    "aria-label": "Select Move Target",
                    role: "group",
                    onClick: J
                }, b.createElement(B, {
                    className: "tw-w-full"
                }, b.createElement(O.A, {
                    favoriteGroups: o,
                    selectedGroup: C,
                    onGroupClick: function(e) {
                        I(e)
                    },
                    type: n,
                    className: "tw-max-w-none"
                })), b.createElement(Y, {
                    className: "justify-content-end"
                }, b.createElement(m.$n, {
                    title: "Confirm",
                    onClick: K,
                    className: "me-1 px-2",
                    positive: !0,
                    expand: !0
                }, b.createElement(m.M2, {
                    width: 15,
                    icon: q.e6,
                    color: "fff"
                })), b.createElement(m.$n, {
                    title: "Cancel",
                    onClick: function(e) {
                        J(e), V(!1)
                    },
                    className: "px-2",
                    neutral: !0,
                    expand: !0
                }, b.createElement(m.M2, {
                    width: 15,
                    icon: D.GR,
                    color: "fff"
                })))) : R && g ? b.createElement(m.fI, {
                    className: "align-items-center justify-content-between",
                    onClick: J
                }, b.createElement(m.$n, {
                    className: "px-2",
                    loading: !0,
                    disabled: !0,
                    expand: !0
                }, "Moving...")) : _ && !k ? b.createElement(m.fI, {
                    className: "align-items-center justify-content-between",
                    "aria-label": "Favorite Deletion Confirmation",
                    role: "group",
                    onClick: J
                }, b.createElement(m.$n, {
                    title: "Confirm",
                    onClick: Q,
                    className: "me-1 px-2",
                    danger: !0,
                    expand: !0
                }, "Delete"), b.createElement(m.$n, {
                    title: "Cancel",
                    onClick: function(e) {
                        J(e), W(!1)
                    },
                    className: "px-2",
                    neutral: !0,
                    expand: !0
                }, "Cancel")) : _ && k ? b.createElement(m.fI, {
                    className: "align-items-center justify-content-between",
                    onClick: J
                }, b.createElement(m.$n, {
                    className: "me-1 px-2",
                    loading: !0,
                    disabled: !0,
                    expand: !0
                }, "Deleting...")) : b.createElement(X, {
                    role: "button",
                    tabIndex: -1,
                    "aria-label": "Add to Selection",
                    onClick: function(e) {
                        J(e), t && t(l)
                    }
                }, b.createElement(m.fI, {
                    role: "checkbox",
                    "aria-checked": r,
                    className: "align-items-center"
                }, b.createElement(H, {
                    isSelected: r
                }, b.createElement(m.M2, {
                    icon: q.e6,
                    color: "var(--bs-primary)",
                    size: "sm"
                })), b.createElement("div", {
                    className: "ms-2"
                }, "Add to Selection")), b.createElement(m.fI, {
                    className: "align-items-center"
                }, b.createElement(m.$n, {
                    title: "Unfavorite",
                    onClick: function(e) {
                        J(e), W(!0)
                    },
                    className: "px-2 me-1",
                    id: "Tooltip-Unfavorite-".concat(l),
                    danger: !0
                }, b.createElement(m.M2, {
                    icon: u.yL,
                    color: "fff"
                })), b.createElement(y.A, {
                    placement: "bottom",
                    target: "Tooltip-Unfavorite-".concat(l)
                }, "Unfavorite"), !s && b.createElement(b.Fragment, null, b.createElement(m.$n, {
                    title: "Move",
                    onClick: function(e) {
                        J(e), V(!0), I(i)
                    },
                    className: "px-2 ms-1",
                    id: "Tooltip-Move-".concat(l)
                }, b.createElement(m.M2, {
                    icon: c.Sy,
                    color: "fff"
                })), b.createElement(y.A, {
                    placement: "bottom",
                    target: "Tooltip-Move-".concat(l)
                }, "Move"))))
            });
            U.propTypes = {
                currentGroup: M().string.isRequired,
                favoriteGroups: M().arrayOf(M().shape({
                    name: M().string.isRequired,
                    displayName: M().string.isRequired,
                    isVrcPlus: M().bool,
                    isDisabled: M().bool,
                    numFavorites: M().number,
                    maxFavoritesPerGroup: M().number
                })).isRequired,
                favoriteId: M().string.isRequired,
                isSelected: M().bool.isRequired,
                onSelect: M().func.isRequired,
                type: M().oneOf(["world", "avatar", "friend"]).isRequired,
                noMoveButton: M().bool
            };
            const _ = U;
            var X = (0, i.A)(m.fI, {
                    target: "e10vjnwi4"
                })({
                    name: "17xzav4",
                    styles: "flex-grow:1;align-items:center;justify-content:space-between;padding:0 0.5rem;input{margin-top:0!important;}"
                }),
                B = (0, i.A)(m.fI, {
                    target: "e10vjnwi3"
                })({
                    name: "3q9szp",
                    styles: "width:70%;max-width:70%;align-items:center"
                }),
                Y = (0, i.A)(m.fI, {
                    target: "e10vjnwi2"
                })({
                    name: "b4p1ds",
                    styles: "width:28%;max-width:28%;align-items:center"
                }),
                W = {
                    name: "3ix1vd",
                    styles: "opacity:1"
                },
                H = (0, i.A)((0, i.A)("div", {
                    target: "e10vjnwi0"
                })(""), {
                    shouldForwardProp: function(e) {
                        return "isSelected" !== e
                    },
                    target: "e10vjnwi1"
                })("display:flex;align-items:center;justify-content:center;width:20px;height:20px;background-color:hsl(0, 0%, 30%);border:2px solid;border-color:", function(e) {
                    return e.isSelected ? "var(--bs-primary)" : "var(--bs-gray)"
                }, ";transition:border-color 150 ease-in-out;border-radius:4px;&:hover{border-color:var(--bs-primary);}svg{opacity:0;transition:opacity 150 ease-in-out;", function(e) {
                    return e.isSelected ? W : ""
                }, ";}"),
                Z = n(51283);

            function J(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return K(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? K(e, t) : void 0
                            }
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

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
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
                    c = (0, L.wA)(),
                    u = (0, v.mu)(),
                    d = (0, a.A)(u, 1)[0],
                    f = (0, v.Pf)(),
                    p = (0, a.A)(f, 1)[0],
                    w = b.useState(!1),
                    g = (0, a.A)(w, 2),
                    h = g[0],
                    y = g[1],
                    x = b.useState(!1),
                    E = (0, a.A)(x, 2),
                    k = E[0],
                    N = E[1],
                    A = b.useState(0),
                    C = (0, a.A)(A, 2),
                    I = C[0],
                    M = C[1],
                    G = b.useState(0),
                    R = (0, a.A)(G, 2),
                    V = R[0],
                    $ = R[1],
                    q = b.useRef(!0);
                b.useEffect(function() {
                    q.current = !0
                }, [s]), b.useEffect(function() {
                    y(n), !n && k && (q.current = !0)
                }, [n]);
                var D = function() {
                    var e = (0, S.A)(F().mark(function e() {
                        var n, a, u, m, f, v, w, g;
                        return F().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    y(!1), N(!0), i && i(), n = 1, M(1), $(l.length), q.current = !1, a = document.title, u = J(l), e.prev = 9, u.s();
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
                                    return n++, M(n), e.abrupt("continue", 31);
                                case 20:
                                    if (!(f === j.Ie)) {
                                        e.next = 25;
                                        break
                                    }
                                    return n++, M(n), e.abrupt("continue", 31);
                                case 25:
                                    return e.next = 27, d({
                                        id: f,
                                        type: t,
                                        groupName: s
                                    }).unwrap();
                                case 27:
                                    (v = e.sent).error && c((0, T.X)({
                                        title: "Failed to delete favorite ".concat(n, " out of ").concat(l.length),
                                        icon: z.zp,
                                        message: null !== (w = null === (g = v.error.data) || void 0 === g || null === (g = g.error) || void 0 === g ? void 0 : g.message) && void 0 !== w ? w : "Something went wrong",
                                        color: "danger",
                                        timeout: 5e3
                                    })), n++, M(n);
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
                                    return N(!1), e.abrupt("return");
                                case 48:
                                    N(!1), c((0, T.X)({
                                        title: "Favorites Removed",
                                        icon: P.SG,
                                        color: "success",
                                        messages: "Removed ".concat(l.length, " favorites"),
                                        timeout: 3e3
                                    }));
                                case 50:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [9, 35, 38, 41]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return h && !k ? b.createElement(m.$T, {
                    type: "warn",
                    title: "Deleting Favorites",
                    hideIcon: !0
                }, b.createElement(m.fI, null, "You are about to delete", " ", b.createElement("b", null, l.length, " favorite", l.length > 1 ? "s" : ""), ". This cannot be undone. Are you sure?"), b.createElement(m.fI, {
                    className: "mt-2"
                }, b.createElement(m.$n, {
                    onClick: D,
                    className: "me-0 me-sm-2",
                    danger: !0,
                    expand: !0
                }, "Yes, Remove Favorites"), b.createElement(m.$n, {
                    onClick: function() {
                        r && r(!1), y(!1)
                    },
                    neutral: !0,
                    expand: !0
                }, "No, Keep them"))) : k ? b.createElement(m.$T, {
                    type: "dark",
                    title: "Deleting Favorites",
                    hideIcon: !0
                }, b.createElement(te, {
                    value: I,
                    max: V
                }, "Deleting ", I, " of ", V), b.createElement(m.$n, {
                    className: "mt-2",
                    onClick: function() {
                        q.current = !0
                    },
                    danger: !0,
                    expand: !0
                }, "Cancel Deletion")) : null
            };
            Q.propTypes = {
                type: M().oneOf(["world", "avatar", "friend"]).isRequired,
                isVisible: M().bool.isRequired,
                onVisibilityChange: M().func,
                onDeleteStart: M().func,
                onDeleteEnd: M().func,
                currentGroup: M().string
            };
            const ee = Q;
            var te = (0, i.A)(Z.A, {
                target: "edie9xa0"
            })({
                name: "wm7wuv",
                styles: "margin-top:0.75rem;.progress-bar{font-size:0.85rem;font-weight:bold;}"
            });

            function ne(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return re(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? re(e, t) : void 0
                            }
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

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ae = function(e) {
                var t = e.type,
                    n = e.isVisible,
                    r = e.onVisibilityChange,
                    i = e.onMoveStart,
                    o = e.onMoveEnd,
                    l = e.selectedItems,
                    s = e.favoriteGroups,
                    c = e.currentGroup,
                    u = e.favoriteList,
                    d = (0, L.wA)(),
                    f = (0, v.il)(),
                    p = (0, a.A)(f, 1)[0],
                    w = (0, v.Pf)(),
                    g = (0, a.A)(w, 1)[0],
                    h = b.useState(!1),
                    y = (0, a.A)(h, 2),
                    x = y[0],
                    E = y[1],
                    k = b.useState(c),
                    N = (0, a.A)(k, 2),
                    A = N[0],
                    C = N[1],
                    I = b.useState(!1),
                    M = (0, a.A)(I, 2),
                    G = M[0],
                    R = M[1],
                    V = b.useState(0),
                    $ = (0, a.A)(V, 2),
                    q = $[0],
                    D = $[1],
                    U = b.useState(0),
                    _ = (0, a.A)(U, 2),
                    X = _[0],
                    B = _[1],
                    Y = b.useRef(!0);
                b.useEffect(function() {
                    C(c), r && r(!1), E(!1), Y.current = !0
                }, [c]);
                var W = b.useMemo(function() {
                    var e = null == s ? void 0 : s.find(function(e) {
                        return e.name === A
                    });
                    return !!e && (null == e ? void 0 : e.numFavorites) + l.length > (null == e ? void 0 : e.maxFavoritesPerGroup)
                }, [s, A, l]);
                b.useEffect(function() {
                    E(n), !n && G && (Y.current = !0)
                }, [n]);
                var H = function() {
                    var e = (0, S.A)(F().mark(function e() {
                        var n, a, m, f, v, w;
                        return F().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!W) {
                                        e.next = 3;
                                        break
                                    }
                                    return d((0, T.X)({
                                        title: "Cannot save to a full group",
                                        icon: z.zp,
                                        message: "You will need to make space before you can add more favorites to this group",
                                        color: "warning",
                                        timeout: 7e3
                                    })), e.abrupt("return");
                                case 3:
                                    E(!1), R(!0), i && i(), n = 1, D(1), B(l.length), Y.current = !1, a = document.title, m = ne(l), e.prev = 12, v = F().mark(function e() {
                                        var t, r, a, i, o, m;
                                        return F().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a = f.value, !Y.current) {
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
                                                    if (!("private" === (null == u || null === (t = u.find(function(e) {
                                                            return e.id === a
                                                        })) || void 0 === t ? void 0 : t.releaseStatus) || a === j.Ie)) {
                                                        e.next = 13;
                                                        break
                                                    }
                                                    return n++, D(n), e.abrupt("return", 1);
                                                case 13:
                                                    return e.next = 15, p({
                                                        id: a,
                                                        favoriteId: a,
                                                        type: null === (r = s.find(function(e) {
                                                            return e.name === A
                                                        })) || void 0 === r ? void 0 : r.type,
                                                        currentGroup: c,
                                                        newGroupName: A,
                                                        silent: !0
                                                    }).unwrap();
                                                case 15:
                                                    (i = e.sent).error && (console.error("Failed to move favorite", i.error), d((0, T.X)({
                                                        title: "Failed to move favorite ".concat(n, " out of ").concat(l.length),
                                                        icon: z.zp,
                                                        message: null !== (o = null === (m = i.error.data) || void 0 === m || null === (m = m.error) || void 0 === m ? void 0 : m.message) && void 0 !== o ? o : "Something went wrong",
                                                        color: "danger",
                                                        timeout: 5e3
                                                    }))), n++, D(n);
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    }), m.s();
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
                                        }), o && o(), r && r(!1), document.title = a, !Y.current) {
                                        e.next = 39;
                                        break
                                    }
                                    return R(!1), e.abrupt("return");
                                case 39:
                                    R(!1), d((0, T.X)({
                                        title: "Favorites Moved to ".concat(s.find(function(e) {
                                            return e.name === A
                                        }).displayName),
                                        icon: P.SG,
                                        color: "success",
                                        message: "Moved ".concat(l.length, " favorites"),
                                        timeout: 3e3
                                    }));
                                case 41:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [12, 26, 29, 32]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return G ? b.createElement(m.$T, {
                    type: "dark",
                    title: "Moving Favorites",
                    hideIcon: !0
                }, b.createElement(oe, {
                    value: q,
                    max: X
                }, "Moving ", q, " of ", X), b.createElement(m.$n, {
                    className: "mt-2",
                    onClick: function() {
                        Y.current = !0
                    },
                    danger: !0,
                    expand: !0
                }, "Cancel Move")) : x && !G ? b.createElement(m.$T, {
                    type: "dark",
                    title: "Moving Favorites",
                    hideIcon: !0
                }, b.createElement(m.fI, {
                    className: "mb-1"
                }, "Select a collection to move to"), b.createElement(O.A, {
                    favoriteGroups: s,
                    selectedGroup: A,
                    onGroupClick: function(e) {
                        C(e)
                    },
                    type: t,
                    className: "tw-w-full tw-max-w-full"
                }), W && b.createElement(m.$T, {
                    type: "warn",
                    title: "Collection Full",
                    message: "That collection will not fit all of the items to be moved",
                    slim: !0
                }), b.createElement(m.fI, {
                    className: "mt-2"
                }, b.createElement(m.$n, {
                    onClick: H,
                    className: "me-0 me-sm-2",
                    positive: !0,
                    expand: !0,
                    disabled: W
                }, "Move Favorites"), b.createElement(m.$n, {
                    onClick: function() {
                        r && r(!1), E(!1), C(c)
                    },
                    neutral: !0,
                    expand: !0,
                    disabled: W
                }, "Cancel"))) : null
            };
            ae.propTypes = {
                type: M().oneOf(["world", "avatar", "friend"]).isRequired,
                isVisible: M().bool.isRequired,
                onVisibilityChange: M().func,
                onMoveStart: M().func,
                onMoveEnd: M().func,
                selectedItems: M().arrayOf(M().shape({
                    id: M().string,
                    favoriteId: M().string
                })).isRequired,
                favoriteGroups: M().arrayOf(M().shape({
                    name: M().string.isRequired,
                    displayName: M().string.isRequired,
                    maxFavoritesPerGroup: M().number.isRequired,
                    numFavorites: M().number.isRequired
                })),
                currentGroup: M().string
            };
            const ie = ae;
            var oe = (0, i.A)(Z.A, {
                    target: "eb32cby0"
                })({
                    name: "wm7wuv",
                    styles: "margin-top:0.75rem;.progress-bar{font-size:0.85rem;font-weight:bold;}"
                }),
                le = function(e) {
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
            le.propTypes = {
                type: M().string.isRequired
            };
            const se = le;
            var ce = n(86797),
                ue = function(e) {
                    var t, n, r = e.type,
                        a = (0, h.Zp)(),
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
                    }, b.createElement(m.M2, {
                        icon: ce.default,
                        className: "tw-text-7xl tw-mb-8 tw-text-light-grey"
                    }), b.createElement("p", {
                        className: "tw-text-lg tw-text-lighter-grey tw-font-bold tw-mb-0"
                    }, "No favorites here yet."), b.createElement("p", {
                        className: "tw-text-lg tw-text-lighter-grey tw-font-bold tw-mb-2"
                    }, "Explore VRChat and add some ", r, " to favorites to get started!"), i[r] && b.createElement(m.$n, {
                        className: "tw-capitalize tw-mt-5 tw-px-5",
                        onClick: null === (t = i[r]) || void 0 === t ? void 0 : t.onClick
                    }, null === (n = i[r]) || void 0 === n ? void 0 : n.label))
                };
            ue.propTypes = {
                type: M().string.isRequired
            };
            const me = ue;
            var de = ["world", "avatar", "friend"],
                fe = [{
                    label: "Favorite Added",
                    value: "added"
                }, {
                    label: "Last Updated",
                    value: "updated"
                }];
            const pe = function() {
                var e, t, n, i, w, S, C, F = (0, h.Zp)(),
                    I = (0, p.al)(),
                    M = (0, h.g)(),
                    T = M.type,
                    G = M.name,
                    R = (0, E.T)(),
                    L = R.currentUser,
                    V = R.isLoading,
                    q = (R.isSuccess, R.isVrcPlusUser, R.isChurnedVrcPlusUser),
                    D = R.isNeverHadVrcPlusUser,
                    P = (0, x.m)(T),
                    z = P.favoriteGroups,
                    U = P.isLoading,
                    X = (P.freeFavoriteGroupsIsLoading, P.vrcPlusFavoriteGroupsIsLoading, P.freeFavoriteGroupsIsFetching),
                    B = P.vrcPlusFavoriteGroupsIsFetching,
                    Y = (P.freeFavoriteGroupsIsError, P.freeFavoriteGroupsError, j.w6[T] && (null == G ? void 0 : G.startsWith(j.w6[T]))),
                    W = (0, v.Fs)({
                        type: Y ? j.w6[T] : T,
                        groupName: G
                    }, {
                        skip: !G
                    }),
                    H = W.data,
                    Z = (W.isSuccess, W.isLoading),
                    J = W.isFetching,
                    K = b.useState(null != G ? G : null),
                    Q = (0, a.A)(K, 2),
                    te = Q[0],
                    ne = Q[1],
                    re = b.useRef(null),
                    ae = (0, p.Hj)(),
                    oe = ae.friends,
                    le = ae.loading,
                    ce = b.useState("added"),
                    ue = (0, a.A)(ce, 2),
                    pe = ue[0],
                    xe = ue[1],
                    Ae = b.useState(""),
                    Se = (0, a.A)(Ae, 2),
                    Ce = Se[0],
                    Fe = Se[1],
                    Ie = b.useState(Ce),
                    Me = (0, a.A)(Ie, 2),
                    Te = Me[0],
                    Ge = Me[1],
                    Re = b.useMemo(function() {
                        return null == z ? void 0 : z.find(function(e) {
                            return e.name === te
                        })
                    }, [z, te]),
                    Le = b.useState(!1),
                    je = (0, a.A)(Le, 2),
                    Ve = je[0],
                    $e = je[1],
                    qe = b.useState([]),
                    De = (0, a.A)(qe, 2),
                    Pe = De[0],
                    ze = De[1],
                    Oe = b.useState(!1),
                    Ue = (0, a.A)(Oe, 2),
                    _e = Ue[0],
                    Xe = Ue[1],
                    Be = b.useState(!1),
                    Ye = (0, a.A)(Be, 2),
                    We = Ye[0],
                    He = Ye[1],
                    Ze = b.useState(!1),
                    Je = (0, a.A)(Ze, 2),
                    Ke = Je[0],
                    Qe = Je[1],
                    et = b.useState(!1),
                    tt = (0, a.A)(et, 2),
                    nt = tt[0],
                    rt = tt[1],
                    at = b.useState(!1),
                    it = (0, a.A)(at, 2),
                    ot = it[0],
                    lt = it[1],
                    st = null !== (e = null == H ? void 0 : H.favorites) && void 0 !== e ? e : [],
                    ct = le && "friend" === T,
                    ut = null !== (t = null === (n = {
                        friend: d.A,
                        world: A.A,
                        avatar: k.A
                    }) || void 0 === n ? void 0 : n[T]) && void 0 !== t ? t : b.createElement("div", null);
                b.useEffect(function() {
                    !((null == z ? void 0 : z.length) > 0) || G && null != z && z.find(function(e) {
                        return e.name === G
                    }) || (F("/home/favorites/".concat(T, "/").concat(z[0].name), {
                        replace: !0
                    }), ne(z[0].name))
                }, [z, T]), b.useEffect(function() {
                    null != te && (Fe(""), b.startTransition(function() {
                        Ge(""), Xe(!1), He(!1), ze([]), $e(!1)
                    }))
                }, [te, T]);
                var mt = function(e) {
                        Pe.includes(e) ? ze(Pe.filter(function(t) {
                            return t !== e
                        })) : ze([].concat((0, r.A)(Pe), [e]))
                    },
                    dt = function() {
                        Qe(!0)
                    },
                    ft = function() {
                        Qe(!1), ze([])
                    },
                    pt = b.useMemo(function() {
                        if (0 === st.length) return [];
                        var e = st.filter(function(e) {
                                var t, n;
                                return "private" !== (null === (t = e[T]) || void 0 === t ? void 0 : t.releaseStatus) && (null === (n = e[T]) || void 0 === n ? void 0 : n.id) !== j.Ie
                            }),
                            t = st.filter(function(e) {
                                var t, n;
                                return "private" === (null === (t = e[T]) || void 0 === t ? void 0 : t.releaseStatus) || (null === (n = e[T]) || void 0 === n ? void 0 : n.id) === j.Ie
                            }),
                            n = (0, r.A)(e);
                        return "updated" === pe && n.sort(function(e, t) {
                            var n, r;
                            return g()(null == t || null === (n = t[T]) || void 0 === n ? void 0 : n.updated_at).diff(g()(null == e || null === (r = e[T]) || void 0 === r ? void 0 : r.updated_at))
                        }), [].concat((0, r.A)(n), (0, r.A)(t))
                    }, [st, pe]),
                    vt = b.useMemo(function() {
                        if (Te.length < 2) return pt;
                        try {
                            var e = new RegExp(Te, "i");
                            if ("friend" !== T || ct || !oe) return (0, j.Mw)(pt, e, T);
                            var t = (0, j.q1)(oe, e);
                            return (0, j.ER)(pt, t)
                        } catch (e) {
                            return console.error("Filter error:", e), pt
                        }
                    }, [pt, Te, oe, ct, T]);
                b.useEffect(function() {
                    var e, t, n = null !== (e = null === (t = Te.length > 1 ? vt : pt) || void 0 === t ? void 0 : t.map(function(e) {
                            return e.favoriteId
                        })) && void 0 !== e ? e : [],
                        r = Pe.filter(function(e) {
                            return n.includes(e)
                        });
                    ze(r)
                }, [te, Te, null == vt ? void 0 : vt.length, null == pt ? void 0 : pt.length, T]);
                var wt = b.useMemo(function() {
                        var e;
                        return null !== (e = vt.map(function(e) {
                            var t = e.id === j.Ie,
                                n = "friend" === T,
                                r = e.tags[0],
                                a = n ? e : e[T];
                            return b.createElement(ut, {
                                key: e.favoriteId,
                                className: "mb-0",
                                data: a,
                                userId: null == a ? void 0 : a.favoriteId,
                                editMode: Ve,
                                editModeContent: b.createElement(_, {
                                    currentGroup: r,
                                    favoriteGroups: z,
                                    favoriteId: e.favoriteId,
                                    isSelected: Pe.includes(e.favoriteId),
                                    onSelect: mt,
                                    type: T,
                                    noMoveButton: t
                                }),
                                compact: nt,
                                isCard: !nt,
                                isDisabled: q && (null == Re ? void 0 : Re.isVrcPlus)
                            })
                        })) && void 0 !== e ? e : null
                    }, [vt, Ve, nt, te, Pe, T, null == L ? void 0 : L.id]),
                    gt = 0 === (null == Re ? void 0 : Re.numFavorites) || (null == Re ? void 0 : Re.isFakeGroup),
                    bt = Te.length > 1,
                    ht = V || ct && bt || Ke || U || X || Z || J || B,
                    yt = Pe.length === vt.length ? "Deselect All" : "Select All",
                    xt = bt && 0 === vt.length && !ht,
                    Et = (0, j.Mn)({
                        group: Re,
                        type: T
                    });
                if (!de.includes(T)) return b.createElement(m.$T, {
                    type: "warn",
                    title: "Failed to load favorites"
                }, '"', T, '" is not a valid favorites type');
                var kt = "Favorite ".concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1), "s");
                return b.createElement(m.fv, {
                    className: "pb-5"
                }, b.createElement(m.Qc, null, kt), b.createElement(m.fI, null, b.createElement(ge, null, kt)), b.createElement("fieldset", {
                    className: "tw-w-full tw-flex tw-flex-col sm:tw-flex-row",
                    "aria-label": "Search Bar"
                }, b.createElement(ye, {
                    type: "text",
                    "aria-label": "Search Favorites",
                    name: "input-search-favorites",
                    placeholder: "Search ".concat(T, " favorites in ").concat(null == z || null === (i = z.find(function(e) {
                        return e.name === te
                    })) || void 0 === i ? void 0 : i.displayName),
                    className: "mb-2 mb-sm-0 me-md-1",
                    value: Ce,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        Fe(n), b.startTransition(function() {
                            Ge(n)
                        })
                    }
                }), "friend" !== T && b.createElement(Ee, {
                    className: "mb-2 mb-sm-0 me-md-1",
                    label: "Sort",
                    value: pe,
                    options: fe,
                    onChange: xe
                }), b.createElement(O.A, {
                    favoriteGroups: z,
                    selectedGroup: te,
                    onGroupClick: function(e) {
                        e !== te && (F("/home/favorites/".concat(T, "/").concat(e), {
                            replace: !0
                        }), ne(e))
                    },
                    type: T,
                    ignoreDisable: !0,
                    className: "tw-flex-3 sm:tw-max-w-[30%]"
                })), ht ? b.createElement(m.fy, {
                    "aria-label": "Loading Favorites",
                    width: "100%",
                    height: "45px",
                    className: "mt-3"
                }) : b.createElement(b.Fragment, null, D && b.createElement(m.fI, {
                    className: "w-100 flex-column flex-sm-row tw-mt-4"
                }, b.createElement(se, {
                    type: T
                })), b.createElement(ve, {
                    className: "flex-column flex-md-row"
                }, b.createElement(m.fI, {
                    className: "tw-flex tw-items-center",
                    ref: re
                }, b.createElement(ge, null, bt ? "Search Results" : Et, " ", (null == Re ? void 0 : Re.isVrcPlus) && b.createElement(f.A, {
                    className: "tw-ml-2"
                })), !bt && b.createElement(b.Fragment, null, te && !(null != z && null !== (w = z.find(function(e) {
                    return e.name === te
                })) && void 0 !== w && w.isFakeGroup) && b.createElement(Ne, {
                    className: "ms-2",
                    "aria-label": "Edit Collection",
                    onClick: function() {
                        lt(!0)
                    }
                }, b.createElement(m.M2, {
                    icon: s.faPencil
                })), b.createElement(be, {
                    "aria-label": "Group Item Count",
                    className: "ms-2"
                }, b.createElement("div", null, null !== (S = null == pt ? void 0 : pt.length) && void 0 !== S ? S : 0), b.createElement("div", {
                    className: "mx-1"
                }, "/"), b.createElement("div", null, null !== (C = null == Re ? void 0 : Re.maxFavoritesPerGroup) && void 0 !== C ? C : j.jT)))), b.createElement(m.fI, {
                    className: "align-items-center justify-content-center justify-content-md-end flex-column flex-md-row flex-1"
                }, Pe.length > 0 && b.createElement(we, {
                    className: "me-0 me-md-1 mt-3 mt-md-0 order-2 order-md-0"
                }, b.createElement("div", {
                    className: "text-nowrap"
                }, "Selected: ", Pe.length), b.createElement(m.$n, {
                    title: "Unfavorite Selected",
                    onClick: function() {
                        Xe(!0)
                    },
                    id: "Tooltip-BulkDelete",
                    className: "px-2 ms-3 me-1",
                    danger: !0
                }, b.createElement(m.M2, {
                    icon: u.yL,
                    color: "fff"
                })), b.createElement(y.A, {
                    placement: "bottom",
                    target: "Tooltip-BulkDelete"
                }, "Unfavorite Selected"), b.createElement(m.$n, {
                    title: "Move Selected",
                    onClick: function() {
                        He(!0)
                    },
                    id: "Tooltip-BulkMove",
                    className: "px-2"
                }, b.createElement(m.M2, {
                    icon: c.Sy,
                    color: "fff"
                })), b.createElement(y.A, {
                    placement: "bottom",
                    target: "Tooltip-BulkMove"
                }, "Move Selected")), Ve && b.createElement(m.$n, {
                    className: "flex-row d-flex align-items-center px-3 me-1 mt-2 mt-md-0 text-nowrap",
                    onClick: function() {
                        Pe.length !== vt.length ? ze(vt.map(function(e) {
                            return e.favoriteId
                        })) : ze([])
                    },
                    containerStyles: he
                }, yt), !gt && 0 !== (null == vt ? void 0 : vt.length) && (!(null != Re && Re.isVrcPlus) || (null == Re ? void 0 : Re.isVrcPlus) && !q) && b.createElement(b.Fragment, null, b.createElement(m.$n, {
                    onClick: function() {
                        Ve ? (ze([]), $e(!1), He(!1), Xe(!1)) : $e(!0)
                    },
                    className: "flex-row d-flex align-items-center px-3 me-1 text-nowrap"
                }, b.createElement("div", {
                    className: "me-3"
                }, "Edit Mode"), b.createElement(m.M2, {
                    icon: s.faPencil,
                    color: Ve ? "#fff" : "#ffffff5f"
                })), b.createElement(m.$n, {
                    onClick: function() {
                        return rt(!nt)
                    },
                    id: "Tooltip-Compact",
                    "aria-label": "Card Size Toggle",
                    className: "d-flex d-md-block flex-row align-items-center mt-2 mt-md-0 tw-mb-4 md:tw-mb-0"
                }, b.createElement("div", {
                    className: "d-flex d-md-none me-2"
                }, nt ? "Small Cards" : "Large Cards"), b.createElement(m.M2, {
                    icon: nt ? l.IT : o.Mb,
                    width: 20,
                    color: "#6ae3f9"
                })), !I && b.createElement(y.A, {
                    placement: "bottom",
                    target: "Tooltip-Compact"
                }, nt ? "Switch To Grid View" : "Switch To List View"))))), q && (null == Re ? void 0 : Re.isVrcPlus) && b.createElement("div", {
                    className: "tw-w-full flex-column flex-sm-row tw-mt-4"
                }, b.createElement(N.A, {
                    title: "This list is temporarily locked",
                    description: "Your worlds are saved, but you'll need to resubscribe to VRC+ to instantly restore."
                })), b.createElement(ee, {
                    type: null == Re ? void 0 : Re.type,
                    isVisible: _e,
                    onVisibilityChange: function(e) {
                        Xe(e)
                    },
                    onDeleteStart: dt,
                    onDeleteEnd: ft,
                    selectedItems: Pe
                }), b.createElement(ie, {
                    type: null == Re ? void 0 : Re.type,
                    isVisible: We,
                    onVisibilityChange: function(e) {
                        He(e)
                    },
                    onMoveStart: dt,
                    onMoveEnd: ft,
                    selectedItems: Pe,
                    favoriteGroups: z,
                    currentGroup: te,
                    favoriteList: st
                }), ht && b.createElement(m.fy, {
                    width: "100%",
                    height: "300px",
                    className: "mt-3",
                    radius: 4
                }), te && !ht && b.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-grid-flow-row tw-gap-4"
                }, wt), xt && b.createElement(ke, null, "No favorite ", T, 's matching "', Te, '"'), !ht && !bt && gt && b.createElement(me, {
                    type: T
                }), ht && b.createElement("div", {
                    className: "tw-flex tw-flex-row tw-justify-center tw-w-full tw-mt-5"
                }, b.createElement("p", {
                    className: "tw-text-center"
                }, "This may take a moment depending on the number of ", T, "s in your favorites.")), b.createElement($, {
                    isOpen: ot,
                    onCloseCallback: function() {
                        lt(!1)
                    },
                    group: Re
                }))
            };
            var ve = (0, i.A)(m.fI, {
                    target: "ehpw5k311"
                })({
                    name: "rsh0am",
                    styles: "justify-content:space-between;align-items:center;margin-top:1rem"
                }),
                we = (0, i.A)(m.fI, {
                    target: "ehpw5k310"
                })({
                    name: "1kibs1n",
                    styles: "align-items:center;font-weight:bold"
                }),
                ge = (0, i.A)("h2", {
                    target: "ehpw5k39"
                })({
                    name: "w9ziq0",
                    styles: "display:flex;margin-bottom:0;align-items:center;height:50px;text-overflow:ellipsis;white-space:nowrap"
                }),
                be = (0, i.A)(m.fI, {
                    target: "ehpw5k38"
                })({
                    name: "maz251",
                    styles: "background:hsl(0, 0%, 21%);border-radius:4px;padding:0.25rem 0.75rem;align-items:center;font-weight:bold;font-size:1.1rem;color:hsl(0, 0%, 90%)"
                }),
                he = {
                    name: "18f5jw6",
                    styles: "order:1;@media (min-width: 768px){order:unset;}"
                },
                ye = (0, i.A)(m.pd, {
                    target: "ehpw5k36"
                })({
                    name: "1pnvmye",
                    styles: "@media screen and (min-width: 576px){flex:6;}"
                }),
                xe = (0, i.A)(m.ms, {
                    target: "ehpw5k35"
                })({
                    name: "1pw80k8",
                    styles: "z-index:20;@media screen and (min-width: 576px){flex:3;max-width:30%;}"
                }),
                Ee = (0, i.A)(xe, {
                    target: "ehpw5k33"
                })({
                    name: "s3oxtx",
                    styles: "z-index:5"
                }),
                ke = (0, i.A)(m.N3, {
                    target: "ehpw5k32"
                })({
                    name: "1r9i0uh",
                    styles: "border-radius:6px;text-align:center;font-size:1.2rem;font-weight:bold;justify-content:center;align-items:center;padding:3rem 1rem"
                }),
                Ne = (0, i.A)("button", {
                    target: "ehpw5k30"
                })("background:none;border:none;cursor:pointer;padding:0;margin:0;outline:none!important;opacity:0.5;transition:opacity 150ms ease;color:#fff;", function(e) {
                    return e.isEditing && "opacity: 1;"
                }, " &:hover{opacity:1;}")
        },
        71391(e, t, n) {
            n.d(t, {
                A: () => d
            });
            var r = n(81617),
                a = n(12378),
                i = n(15033),
                o = n(97963),
                l = n(5556),
                s = n.n(l),
                c = n(96540),
                u = n(84976),
                m = function(e) {
                    var t = e.title,
                        n = e.description;
                    return c.createElement("div", {
                        className: "tw-flex tw-flex-col sm:tw-flex-row tw-bg-warning-bg tw-rounded-lg tw-border-orange tw-border-solid tw-border-0 tw-border-l-4 tw-mb-4 tw-p-3 tw-justify-between tw-items-center"
                    }, c.createElement("div", {
                        className: "tw-flex tw-flex-row"
                    }, c.createElement(i.M2, {
                        icon: a.DW,
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
                    }, c.createElement(u.N_, {
                        to: "https://hello.vrchat.com/vrchatplus",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c.createElement(o.Ay, {
                        icon: r.e6,
                        className: "tw-bg-white tw-border-white tw-text-[#1A2026] tw-px-4"
                    }, "Subscribe to VRC+"))))
                };
            m.propTypes = {
                title: s().string,
                description: s().string
            };
            const d = m
        },
        46708(e, t, n) {
            n.d(t, {
                A: () => c
            });
            var r = n(58168),
                a = n(5556),
                i = n.n(a),
                o = n(96540),
                l = n(15033),
                s = function(e) {
                    var t;
                    return o.createElement(l.mI, (0, r.A)({
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
//# sourceMappingURL=a3cfa7c5d8a508f042742c63de82d4360bc8ab594a5e4052dfc79247c78a645b.js.map