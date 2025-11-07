"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7556], {
        98353: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(15671),
                a = n(43144),
                l = n(60136),
                i = n(82963),
                o = n(61120),
                s = n(68099),
                c = n(67294),
                u = n(32981),
                d = n(46326),
                m = n(43862),
                p = n(18436),
                f = n(9669),
                v = n.n(f),
                h = function(e) {
                    var t = e.userId;
                    return {
                        type: "LOAD_MODREPORT_USER",
                        payload: v().get(window.apiUrl("/api/1/users/".concat(t)), {
                            headers: {
                                "Cache-Control": "no-cache"
                            }
                        })
                    }
                };

            function g(e) {
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
                    var n, r = (0, o.Z)(e);
                    if (t) {
                        var a = (0, o.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, i.Z)(this, n)
                }
            }
            var b = function(e) {
                    (0, l.Z)(n, e);
                    var t = g(n);

                    function n() {
                        return (0, r.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, a.Z)(n, [{
                        key: "userObject",
                        value: function() {
                            return this.props.preloadUser || this.props.userObject
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            null == this.props.preloadUser && this.props.dispatch(h({
                                userId: this.props.userId
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            null == this.props.preloadUser && (this.props.error || this.props.loading || this.props.userObject && this.props.userObject.id === this.props.userId || this.props.dispatch(h({
                                userId: this.props.userId
                            })))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.dispatch({
                                type: "CLEAR_MODREPORT_DATA"
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.userObject();
                            return e ? c.createElement(d.Z, {
                                src: e,
                                theme: "greenscreen"
                            }) : c.createElement(m.Z, null)
                        }
                    }]), n
                }(c.Component),
                x = (0, u.$j)((function(e) {
                    return {
                        userObject: e.modReport.userObject,
                        loading: e.modReport.loading,
                        error: e.modReport.error
                    }
                }))(b);
            const E = (0, u.$j)((function(e) {
                return {
                    isMod: e.currentUser.isMod
                }
            }))((function(e) {
                var t = e.isMod,
                    n = e.userId,
                    r = e.userObject,
                    a = e.tiny;
                return t && c.createElement(p.Z, {
                    icon: s.YH,
                    tiny: a
                }, c.createElement(x, {
                    userId: n,
                    preloadUser: r
                }))
            }))
        },
        18436: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(15671),
                a = n(43144),
                l = n(97326),
                i = n(60136),
                o = n(82963),
                s = n(61120),
                c = n(59545),
                u = n(67294),
                d = n(34698),
                m = n(69699),
                p = n(60766),
                f = n(86646);

            function v(e) {
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
                    return (0, o.Z)(this, n)
                }
            }
            const h = function(e) {
                (0, i.Z)(n, e);
                var t = v(n);

                function n(e) {
                    var a;
                    return (0, r.Z)(this, n), (a = t.call(this, e)).state = {
                        modalOpen: !1
                    }, a.toggleModal = a.toggleModal.bind((0, l.Z)(a)), a
                }
                return (0, a.Z)(n, [{
                    key: "toggleModal",
                    value: function() {
                        this.props.clearModal && this.state.modalOpen && this.props.clearModal(), this.setState({
                            modalOpen: !this.state.modalOpen
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = void 0 === t ? "" : t,
                            r = e.buttonClassName,
                            a = void 0 === r ? "" : r,
                            l = e.outline,
                            i = e.color,
                            o = e.tiny,
                            s = " ".concat(this.props.title || "");
                        return u.createElement("div", {
                            className: n
                        }, u.createElement(d.Z, {
                            "aria-label": this.props.title || "Open Modal",
                            onClick: this.toggleModal,
                            className: "info-button ".concat(a, " text-white"),
                            outline: l,
                            color: i,
                            size: o ? "sm" : "md"
                        }, u.createElement(f.Z, {
                            icon: this.props.icon,
                            color: "white",
                            size: o ? "xs" : "1x"
                        }), s), this.state.modalOpen && u.createElement(m.Z, {
                            isOpen: this.state.modalOpen,
                            size: "lg",
                            toggle: this.toggleModal
                        }, u.createElement("div", {
                            className: "modal-header"
                        }, u.createElement("h4", {
                            className: "modal-title"
                        }, u.createElement(f.Z, {
                            icon: this.props.icon
                        }), "  ", this.props.title), u.createElement(d.Z, {
                            "aria-label": "Close Modal",
                            className: "close",
                            onClick: this.toggleModal
                        }, u.createElement(f.Z, {
                            icon: c.NB
                        }))), u.createElement(p.Z, null, this.props.children)))
                    }
                }]), n
            }(u.Component)
        },
        47716: (e, t, n) => {
            n.d(t, {
                Z: () => pe
            });
            var r = n(4965),
                a = n(26433),
                l = n(96427),
                i = n(67294),
                o = n(83505),
                s = n(30381),
                c = n.n(s),
                u = n(79655),
                d = n(39886),
                m = n(35773),
                p = n(95305),
                f = n(58877),
                v = n(96985),
                h = n(43862),
                g = n(54546),
                b = n(32981),
                x = n(25062),
                E = n(34698),
                w = n(9669),
                y = n.n(w),
                k = function(e) {
                    var t = e.userId,
                        n = e.bioLinks.map((function(e) {
                            return e || ""
                        }));
                    return {
                        type: "UPDATE_BIO_LINKS",
                        payload: y().put(window.apiUrl("/api/1/users/".concat(t)), {
                            bioLinks: n
                        })
                    }
                },
                Z = n(65847),
                N = n(95168),
                I = n(62437),
                U = n(22202),
                z = n(5513);
            const C = function(e) {
                var t, n, r, a, l = e.userId,
                    s = (0, I.GR)(l),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, N.pc)(), (0, U.XC)().data),
                    m = (0, b.I0)(),
                    p = (null == d ? void 0 : d.id) === l,
                    f = i.useState(null !== (t = null == c || null === (n = c.bio) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
                    v = (0, g.Z)(f, 2),
                    h = v[0],
                    w = v[1],
                    k = i.useState(!1),
                    C = (0, g.Z)(k, 2),
                    O = C[0],
                    S = C[1],
                    _ = i.useState(null !== (r = null == c ? void 0 : c.bio) && void 0 !== r ? r : ""),
                    L = (0, g.Z)(_, 2),
                    j = L[0],
                    R = L[1],
                    A = i.useState(null !== (a = null == c ? void 0 : c.bio) && void 0 !== a ? a : ""),
                    M = (0, g.Z)(A, 2),
                    T = M[0],
                    D = M[1],
                    P = i.useState(!1),
                    B = (0, g.Z)(P, 2),
                    G = B[0],
                    $ = B[1],
                    q = i.useRef(null);
                i.useEffect((function() {
                    var e = q.current;
                    if (e) {
                        var t = e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
                        G !== t && $(t)
                    }
                }), [j]), i.useEffect((function() {
                    var e, t, n, r;
                    R(null !== (e = null == c ? void 0 : c.bio) && void 0 !== e ? e : ""), D(null !== (t = null == c ? void 0 : c.bio) && void 0 !== t ? t : ""), $(!1), w(null !== (n = null == c || null === (r = c.bio) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0), S(!1)
                }), [c]);
                if (p) {
                    var H = h > 512,
                        K = j.split("\n"),
                        W = (0, o.iv)("&{font-size:11pt;overflow:auto;}@media all and (min-width: 1700px){&{width:", G ? "32em" : "31em", ";height:17.4em;", O ? (0, o.iv)({
                            name: "3pim0v",
                            styles: "overflow:inherit;margin-bottom:2em"
                        }) : "", ";}textarea{width:", G ? "32em" : "31em", ";font-size:11pt;line-height:140%;height:16.9em;}}@media all and (max-width: 1700px){&{font-size:8pt;width:32em;height:17.6em;", O ? (0, o.iv)({
                            name: "1mz3b0m",
                            styles: "overflow:inherit;margin-bottom:4em"
                        }) : "", ";}textarea{font-size:8pt;line-height:140%;}}", ""),
                        F = i.createElement("div", null, K.map((function(e, t) {
                            return i.createElement("p", {
                                key: "bio-line-".concat(t)
                            }, e || i.createElement("span", null, " "))
                        })));
                    return O ? i.createElement("div", {
                        className: W,
                        ref: q
                    }, i.createElement("textarea", {
                        onChange: function(e) {
                            var t = e.target.value;
                            R(void 0 === t ? "" : t)
                        },
                        onKeyUp: function(e) {
                            var t = e.target.value;
                            w((void 0 === t ? "" : t).length)
                        },
                        className: "form-control ".concat((0, o.iv)({
                            name: "utehjx",
                            styles: "resize:none"
                        })),
                        value: null != j ? j : "Tell us about yourself"
                    }), i.createElement(x.Z, {
                        color: H ? "danger" : "info",
                        className: "float-right"
                    }, h, " / ", 512), " ", i.createElement(E.Z, {
                        onClick: function() {
                            S(!1), R(T)
                        }
                    }, "Cancel"), i.createElement(E.Z, {
                        onClick: function() {
                            var e = (0, Z.Nw)(j, {
                                allowNewlines: !0
                            });
                            m(p ? (0, z._W)({
                                userId: l,
                                data: {
                                    bio: e
                                }
                            }) : function(e) {
                                var t = e.userId,
                                    n = e.bio;
                                return {
                                    type: "UPDATE_BIO",
                                    payload: y().put(window.apiUrl("/api/1/users/".concat(t)), {
                                        bio: n
                                    })
                                }
                            }({
                                userId: l,
                                bio: e
                            })), S(!1), R(e), D(e), u()
                        },
                        disabled: H,
                        color: "primary"
                    }, "Ok")) : i.createElement("div", {
                        tabIndex: "-1",
                        role: "button",
                        className: "btn btn-outline-light btn-block text-start ".concat(W),
                        style: {
                            whiteSpace: "normal"
                        },
                        onClick: function() {
                            S(!0)
                        },
                        ref: q
                    }, F)
                }
                var X = j.split("\n"),
                    Q = i.createElement("div", null, X.map((function(e, t) {
                        return i.createElement("p", {
                            key: "bio-line-".concat(t)
                        }, e || i.createElement("span", null, " "))
                    })));
                return i.createElement("div", {
                    className: (0, o.iv)({
                        name: "xpha89",
                        styles: "&{max-height:20em;width:30em;overflow-y:auto;}"
                    }),
                    ref: q
                }, Q)
            };
            var O = n(15861),
                S = n(64687),
                _ = n.n(S),
                L = n(25402);
            const j = function(e) {
                var t, n, r, a, l = e.userId,
                    o = e.index,
                    s = (0, I.GR)(l),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, N.pc)(), (0, U.XC)().data),
                    m = (null == d ? void 0 : d.id) === l,
                    p = (0, b.I0)(),
                    v = i.useState(null !== (t = null == c || null === (n = c.bioLinks) || void 0 === n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    h = (0, g.Z)(v, 2),
                    x = h[0],
                    w = h[1],
                    y = i.useState(!1),
                    Z = (0, g.Z)(y, 2),
                    z = Z[0],
                    C = Z[1],
                    S = i.useState(x),
                    j = (0, g.Z)(S, 2),
                    R = j[0],
                    A = j[1],
                    M = i.useState(!0),
                    T = (0, g.Z)(M, 2),
                    D = T[0],
                    P = T[1],
                    B = null !== (r = null == c ? void 0 : c.bioLinks) && void 0 !== r ? r : [],
                    G = function() {
                        C(!0), P(!1)
                    },
                    $ = function() {
                        var e = (0, O.Z)(_().mark((function e() {
                            var t;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(B))[o] = x, e.next = 4, p(k({
                                            userId: l,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        C(!1), A(x), u();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    q = function() {
                        var e = (0, O.Z)(_().mark((function e() {
                            var t;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(B))[o] = "", e.next = 4, p(k({
                                            userId: l,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        C(!1), w(""), A(""), u();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return m ? z ? i.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, i.createElement("div", {
                    className: "input-group"
                }, i.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return w(""), void P(!1);
                        try {
                            var r = new URL(n);
                            w(n), P("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            w(n), P(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === D && $()
                    },
                    className: "form-control",
                    value: x
                }), i.createElement("div", {
                    className: "input-group-append"
                }, i.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, i.createElement(L.QZ, {
                    url: x,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), i.createElement(E.Z, {
                    onClick: function() {
                        C(!1), w(R)
                    }
                }, "Cancel"), i.createElement(E.Z, {
                    onClick: $,
                    disabled: D,
                    color: "primary"
                }, "Ok")) : o > 0 && null == B[o - 1] ? i.createElement("div", null) : !(o > 0) || "" !== B[o] && null != B[o] || "" !== B[o - 1] && null != B[o - 1] ? null == B[o] || "" === B[o] ? i.createElement("div", null, i.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, i.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: G
                }, "Link"))) : i.createElement("div", {
                    style: {
                        width: "285px"
                    }
                }, i.createElement(f.Z, {
                    className: "p-2 w-100 p-l-0"
                }, i.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: G
                }, B[o]), i.createElement(E.Z, {
                    className: "btn btn-outline-danger",
                    "aria-label": "Close",
                    onClick: q
                }, i.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : i.createElement("div", null) : null == B[o] || "" === B[o] ? null : i.createElement("button", {
                    type: "button",
                    className: "btn btn-secondary mt-2 me-2",
                    onClick: (a = B[o], function() {
                        var e;
                        null === (e = window.open(a, "_blank")) || void 0 === e || e.focus()
                    })
                }, i.createElement(L.QZ, {
                    url: B[o],
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                }))
            };
            var R = n(37858),
                A = n(17219),
                M = n(21464),
                T = n(39758),
                D = n(8256),
                P = n(28055),
                B = n(38824),
                G = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "ADD_LANGUAGE_TAGS",
                        payload: y().post(window.apiUrl("/api/1/users/".concat(t, "/addTags")), {
                            tags: n
                        })
                    }
                },
                $ = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "DELETE_LANGUAGE_TAGS",
                        payload: y().post(window.apiUrl("/api/1/users/".concat(t, "/removeTags")), {
                            tags: n
                        })
                    }
                },
                q = "language_";
            const H = function(e) {
                var t, n, r, a = e.userId,
                    l = (0, I.GR)(a),
                    s = l.data,
                    c = l.refetch,
                    u = (0, A.y)().data,
                    d = ((0, N.pc)(), (0, U.XC)().data),
                    m = (0, b.I0)(),
                    p = (null == d ? void 0 : d.id) === a,
                    v = null !== (t = null == u || null === (n = u.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : M.O,
                    h = i.useState(!1),
                    x = (0, g.Z)(h, 2),
                    w = x[0],
                    y = x[1],
                    k = i.useState(!1),
                    Z = (0, g.Z)(k, 2),
                    z = Z[0],
                    C = Z[1],
                    S = i.useState(null),
                    L = (0, g.Z)(S, 2),
                    j = L[0],
                    R = L[1],
                    H = function(e) {
                        var t = e.target.value;
                        R(t)
                    },
                    K = function(e) {
                        return e = e.replace(q, ""), "[ ".concat(e, " ] ").concat(v[e])
                    },
                    W = function() {
                        R(null), y(!1)
                    },
                    F = function() {
                        var e = (0, O.Z)(_().mark((function e() {
                            var t;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = q + j, e.next = 3, m(G({
                                            userId: a,
                                            tags: [t]
                                        }));
                                    case 3:
                                        W(), c();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function() {
                        var e = (0, O.Z)(_().mark((function e(t) {
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m($({
                                            userId: a,
                                            tags: [t]
                                        }));
                                    case 2:
                                        W(), c();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = (null !== (r = null == s ? void 0 : s.tags) && void 0 !== r ? r : []).filter((function(e) {
                        return e.indexOf(q) >= 0
                    })),
                    J = Q.length < 3;
                if (!p) return i.createElement("div", {
                    className: "user-languages"
                }, Q.length > 0 && i.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), i.createElement("div", null, Q.map((function(e, t) {
                    return i.createElement("div", {
                        key: "public-tags-".concat(t)
                    }, i.createElement("div", {
                        className: "p-2"
                    }, i.createElement("div", {
                        className: "language-display-public"
                    }, K(e))))
                }))));
                var Y = i.createElement("div", null, Q.map((function(e, t) {
                        return i.createElement("div", {
                            key: "stored-tags-".concat(t)
                        }, i.createElement(f.Z, {
                            className: "p-2 ".concat((0, o.iv)({
                                name: "1d3w5wq",
                                styles: "width:100%"
                            }))
                        }, i.createElement("div", {
                            className: "btn btn-outline-light"
                        }, K(e)), i.createElement(E.Z, {
                            className: "btn btn-outline-danger ".concat((0, o.iv)({
                                name: "14djdxm",
                                styles: "max-width:2em"
                            })),
                            "aria-label": "Close",
                            onClick: function() {
                                return X(e)
                            }
                        }, i.createElement("span", {
                            "aria-hidden": "true"
                        }, "×"))))
                    }))),
                    V = i.createElement("div", {
                        className: "btn-group w-100 p-2"
                    }, i.createElement("div", {
                        role: "button",
                        tabIndex: -1,
                        className: "btn btn-outline-light btn-block",
                        style: {
                            whiteSpace: "normal",
                            width: "285px"
                        },
                        onClick: function() {
                            y(!0)
                        }
                    }, "Add Language")),
                    ee = i.createElement("div", null, i.createElement("div", {
                        className: "w-100 p-2"
                    }, i.createElement(T.Z, {
                        drop: "right",
                        className: "mb-2 w-100",
                        isOpen: z,
                        toggle: function() {
                            C(!z)
                        }
                    }, i.createElement(E.Z, {
                        color: "light",
                        id: "caret"
                    }, j && K(j) || "Select Language"), i.createElement(D.Z, {
                        caret: !0,
                        color: "secondary"
                    }), i.createElement(P.Z, {
                        flip: !0,
                        color: "light",
                        style: {
                            overflowY: "scroll",
                            maxHeight: "300px"
                        }
                    }, Object.keys(v).map((function(e, t) {
                        return i.createElement(B.Z, {
                            key: "dropdown-langs".concat(t),
                            value: e,
                            onClick: H
                        }, K(e))
                    })))), i.createElement("div", {
                        className: "d-flex flex-row justify-content-between"
                    }, i.createElement(E.Z, {
                        onClick: W
                    }, "Cancel"), i.createElement(E.Z, {
                        onClick: F,
                        className: "px-4",
                        color: "primary"
                    }, "Ok"))));
                return i.createElement("div", {
                    className: "user-languages"
                }, i.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), Y, w && J && ee, !w && J && V)
            };
            var K = n(30751);
            const W = function(e) {
                var t = e.status;
                return null == t ? i.createElement("div", null) : i.createElement("span", {
                    className: (0, o.iv)({
                        name: "aqta49",
                        styles: "& span{width:15px;height:15px;border-radius:25px;margin-top:2px;margin-right:5px;display:inline-block;}& .active{background-color:var(--status-online);}& .join-me{background-color:var(--status-joinme);}& .busy{background-color:var(--status-busy);}& .ask-me{background-color:var(--status-askme);}& .offline{background-color:grey;}"
                    })
                }, i.createElement("span", {
                    className: t.replace(" ", "-"),
                    title: t
                }))
            };
            var F = n(98353),
                X = n(72528),
                Q = n(42619);
            const J = function(e) {
                var t, n = e.user,
                    r = (0, N.v$)().fetchUser,
                    a = (0, b.I0)(),
                    l = (0, i.useState)(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""),
                    o = (0, g.Z)(l, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, i.useState)(!1),
                    d = (0, g.Z)(u, 2),
                    m = d[0],
                    p = d[1],
                    f = (0, i.useRef)(null),
                    v = (0, b.v9)((function(e) {
                        return e.currentUser.addNote.isRejected
                    })),
                    h = (0, b.v9)((function(e) {
                        return e.currentUser.addNote.error
                    }));
                (0, i.useEffect)((function() {
                    f.current.style.height = "0px";
                    var e = f.current.scrollHeight;
                    f.current.style.height = "".concat(e, "px")
                }), [s]);
                var x = function() {
                        var e = (0, O.Z)(_().mark((function e(t) {
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (m) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return f.current.blur(), t && t.stopPropagation(), p(!1), e.next = 7, a((0, z.AL)({
                                            targetUserId: n.id,
                                            note: s
                                        }));
                                    case 7:
                                        return e.next = 9, r();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = function() {
                        var e = (0, O.Z)(_().mark((function e() {
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f.current.blur(), c(""), e.next = 4, a((0, z.lj)({
                                            targetUserId: n.id
                                        }));
                                    case 4:
                                        return e.next = 6, r();
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
                    w = function() {
                        var e = (0, O.Z)(_().mark((function e() {
                            var t;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!v) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, r();
                                    case 3:
                                        return e.abrupt("return", c(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""));
                                    case 4:
                                        return e.abrupt("return", x());
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return i.createElement(Y, null, i.createElement(ee, {
                    onClick: function(e) {
                        m || (e.stopPropagation(), p(!0), setTimeout((function() {
                            f.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Note",
                    tabIndex: 0
                }, i.createElement(ne, {
                    contenteditable: !0,
                    ref: f,
                    value: s,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 256 || c(n)
                    },
                    onBlur: w,
                    onKeyPress: function(e) {
                        if ("Enter" !== e.key || e.shiftKey) {
                            var t = f.current.scrollHeight > 80;
                            "Enter" === e.key && e.shiftKey && t && e.preventDefault()
                        } else x(e)
                    },
                    placeholder: "Click to add a note!",
                    "aria-label": "Note input field"
                }), "" !== s && m && i.createElement(V, null, s.length, "/256"), i.createElement(re, {
                    onClick: E,
                    size: "1x",
                    icon: Q.$,
                    "aria-label": "delete note"
                })), v && i.createElement(te, null, "Note Changes Failed: ", i.createElement("br", null), h))
            };
            var Y = (0, r.Z)("div", {
                    target: "e2hlwbc5"
                })({
                    name: "j9ove5",
                    styles: "margin-bottom:22px"
                }),
                V = (0, r.Z)("p", {
                    target: "e2hlwbc4"
                })({
                    name: "whd8lt",
                    styles: "position:relative;right:-10px;transition:all 0.2s ease-in-out;color:white"
                }),
                ee = (0, r.Z)(v.X2, {
                    target: "e2hlwbc3"
                })({
                    name: "1r4d6h9",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                te = (0, r.Z)("p", {
                    target: "e2hlwbc2"
                })({
                    name: "f2dkex",
                    styles: "max-width:250px;color:red"
                }),
                ne = (0, r.Z)("textarea", {
                    target: "e2hlwbc1"
                })({
                    name: "1ce6mw9",
                    styles: "background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);border:none;color:#fff;display:flex;flex-grow:1;margin:0;outline:none!important;padding:0;&:hover{color:#fff;}&::placeholder{color:rgba(255, 255, 255, 0.5);}"
                }),
                re = (0, r.Z)(v.$1, {
                    target: "e2hlwbc0"
                })("color:white;cursor:pointer;position:relative;right:-100px;transition:all 0.2s ease-in-out;&:hover{color:", (function(e) {
                    return "check" === e.name ? "var(--note-online)" : "var(--bs-cyan)"
                }), ";}"),
                ae = n(12227),
                le = n(7371),
                ie = n(68055);
            n(34984);
            const oe = function(e) {
                var t, n = e.user,
                    r = e.isEditable,
                    a = (0, N.Tu)(),
                    l = (a._, a.fetchUser),
                    o = (0, b.I0)(),
                    s = i.useState(null !== (t = null == n ? void 0 : n.statusDescription) && void 0 !== t ? t : ""),
                    c = (0, g.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    m = i.useState(!1),
                    p = (0, g.Z)(m, 2),
                    f = p[0],
                    v = p[1],
                    h = i.useRef(null),
                    x = ((0, b.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })), i.useCallback((function(e) {
                        var t, r, a;
                        null !== (t = h.current) && void 0 !== t && t.contains(e.target) || (null === (r = h.current) || void 0 === r || r.blur(), d(null !== (a = null == n ? void 0 : n.statusDescription) && void 0 !== a ? a : ""), v(!1))
                    }), [h.current]));
                i.useEffect((function() {
                    return f ? window.addEventListener("click", x) : window.removeEventListener("click", x),
                        function() {
                            window.removeEventListener("click", x)
                        }
                }), [f]), i.useEffect((function() {
                    var e;
                    d(null !== (e = null == n ? void 0 : n.statusDescription) && void 0 !== e ? e : "")
                }), [null == n ? void 0 : n.statusDescription]);
                var E = function() {
                    var e = (0, O.Z)(_().mark((function e(t) {
                        return _().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (f) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    h.current.blur(), t.stopPropagation(), v(!1), e.next = 10;
                                    break;
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12, o((0, z._W)({
                                        userId: n.id,
                                        data: {
                                            statusDescription: u
                                        }
                                    }));
                                case 12:
                                    return e.next = 14, l();
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return r ? i.createElement(se, {
                    onClick: function(e) {
                        f || (e.stopPropagation(), v(!0), setTimeout((function() {
                            h.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Status",
                    tabIndex: 0
                }, f ? i.createElement(ce, {
                    ref: h,
                    value: u,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 32 || d(n)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && E(e)
                    },
                    placeholder: "Set a new status!"
                }) : i.createElement("div", null, u.length > 0 ? u : i.createElement(ue, null, "Set a status")), i.createElement(de, {
                    onClick: E,
                    size: "1x",
                    icon: f ? ie.LE : le.Iw
                })) : i.createElement("p", {
                    className: "statusDescription"
                }, i.createElement("small", null, n ? n.statusDescription : ""))
            };
            var se = (0, r.Z)(v.X2, {
                    target: "e16hr4le3"
                })({
                    name: "8boqxq",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;cursor:pointer;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                ce = (0, r.Z)("input", {
                    target: "e16hr4le2"
                })({
                    name: "1so83ik",
                    styles: "background:transparent;padding:0;margin:0;border:none;outline:none!important;color:#fff;display:flex;flex-grow:1;border-bottom:1px solid rgba(255, 255, 255, 0.5)"
                }),
                ue = (0, r.Z)("span", {
                    target: "e16hr4le1"
                })({
                    name: "1n4zmb4",
                    styles: "color:rgba(255, 255, 255, 0.5)"
                }),
                de = (0, r.Z)(v.$1, {
                    target: "e16hr4le0"
                })("position:relative;right:-100px;transition:all 0.2s ease-in-out;color:white;&:hover{color:", (function(e) {
                    return "check" === e.name ? "var(--status-online)" : "var(--bs-cyan)"
                }), ";}");
            var me = (0, r.Z)("div", {
                target: "ek6wv4d0"
            })("margin:", (function(e) {
                return "huge" === e.size ? "auto" : "auto 0px auto 60px"
            }), ";pointer-events:none;");
            const pe = function(e) {
                var t, n = e.userId,
                    r = e.size,
                    s = e.showLocation,
                    g = e.showExtras,
                    b = e.showInvalid,
                    x = e.isUserHidden,
                    E = e.openLinksInNewTab,
                    w = void 0 !== E && E,
                    y = (0, I.GR)(n),
                    k = y.data,
                    Z = y.isFetching,
                    z = y.isError,
                    O = y.error,
                    S = (0, U.IB)().data,
                    _ = (0, N.pc)(),
                    L = (0, N.JZ)().playerModerations,
                    A = L.mute.users,
                    M = L.block.users;
                if (!n) return null;
                if (b && z) return i.createElement(d.Z, {
                    className: (0, o.iv)({
                        name: "1flzyeq",
                        styles: "padding:10px 20px;border:2px solid var(--level-visitor)"
                    })
                }, i.createElement(m.Z, null, i.createElement("h6", null, "ID: ", n)), i.createElement(m.Z, null, O.status, ":", null === (t = O.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message));
                if (!k || Z) return i.createElement(h.Z, null);
                var T = (0, ae.FR)({
                        tags: k.tags
                    }),
                    D = k.isFriend,
                    P = new Set(k.tags).has("admin_moderator"),
                    B = n === (null == S ? void 0 : S.id),
                    G = new Set(M).has(n),
                    $ = new Set(A).has(n),
                    q = ["usercard"];
                q.push("friend-".concat(D)), q.push("size-".concat(r)), q.push("state-".concat(k.state)), q.push("level-".concat(T));
                var Q = "Offline";
                if ("active" === k.state && (Q = "Active"), "online" === k.state && (Q = "In-World"), "traveling" === k.location && (Q = "Loading a world"), null != k.error) return i.createElement("div", null);
                var Y = k.profilePicOverride || k.currentAvatarThumbnailImageUrl;
                return i.createElement("div", {
                    className: (0, o.iv)({
                        name: "irlerg",
                        styles: "&{text-align:left;}& .usercard{padding:10px;margin-bottom:5px;}& .card{background:#242a31;}& .card .user-img{float:left;margin:7px;}& .muteIcons{position:absolute;top:0;left:0;}& .muteIcons .btn{font-size:xx-small;}& .user-info{max-width:calc(100% - 120px);min-width:100px;}& .user-img{max-width:calc(100% - 14px);}& .info-button{position:absolute;top:5px;right:5px;}& h4{margin-bottom:2px;}& a{font-weight:bold;}& p{margin-bottom:0.2em;}& .p-l-0{padding-left:0px!important;padding-right:0px!important;}& .level-administrator,& .level-moderator{border:2px solid var(--developer);}& .level-visitor{border:2px solid var(--level-visitor);}& .level-new{border:2px solid var(--level-new);}& .level-user{border:2px solid var(--level-user);}& .level-known{border:2px solid var(--level-known);}& .level-trusted{border:2px solid var(--level-trusted);}& .state-online .user-img{border:2px solid var(--bs-green);}& .state-active .user-img{border:2px solid var(--bs-yellow);}& .state-active{opacity:0.9;}& .state-offline{opacity:0.7;}& .size-huge .user-img{width:285px;height:calc(285px * 0.75);}& .size-huge .muteIcons{display:none;}& .size-huge .user-bio,& .size-huge .user-bio-links{width:285px;}& .size-huge .user-bio textarea{min-height:200px;}& .size-slim .user-info{max-width:100%;width:100%;margin-left:10px;margin-right:10px;}& .size-wide .muteIcons{top:17px;left:4px;}& .size-wide{padding-top:2px;padding-bottom:2px;}& .size-wide .user-img{width:60px;height:calc(60px * 0.75);margin-left:115px;}& .size-wide .user-info{margin-left:0.7em;}& .size-wide .statusDescription,& .size-wide .offlineOrOnlineOrWhatever{display:none;}& .size-wide .user-info{margin:auto 0;h6,p{margin-bottom:0;}}& .user-languages{width:100%;}& .language-display-public{width:100%;text-align:center;vertical-align:middle;padding:0.5rem 0.75rem;border-radius:0.25rem;border-color:#f8f9fa;border:1px solid;}& .profile-link{margin-left:-7px;margin-right:-7px;padding-top:0.5rem;}& .extra-margin{margin-left:10px!important;}@media (max-width: 921px){.large-display-only{display:none;}}@media (max-width: 991px) and (min-width: 921px){.small-display-only{display:none;}}@media (max-width: 1578px) and (min-width: 992px){.large-display-only-2{display:none;}}@media (min-width: 1579px){.small-display-only-2{display:none;}}.ribbon{height:70px;left:-2px;overflow:hidden;position:absolute;text-align:right;top:-5px;width:75px;z-index:1;}.ribbon span{background:#8f0808;background:linear-gradient(#f70505 0%, #8f0808 100%);box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);color:#fff;display:block;font-size:0.8rem;font-weight:bold;left:-25px;left:-29px;line-height:22px;position:absolute;text-align:center;text-transform:uppercase;top:17px;transform:rotate(315deg);width:100px;}.ribbon span::before{border-bottom:3px solid transparent;border-left:3px solid #8f0808;border-right:3px solid transparent;border-top:3px solid #8f0808;content:'';left:0px;top:100%;position:absolute;z-index:-1;}.ribbon span::after{border-bottom:3px solid transparent;border-left:3px solid transparent;border-right:3px solid #8f0808;border-top:3px solid #8f0808;content:'';position:absolute;right:0%;top:100%;z-index:-1;}.ribbon--huge{height:93px;left:-7px;top:-7px;width:93px;}.ribbon--huge span{font-size:16px;left:-29px;line-height:32px;width:125px;}"
                    })
                }, i.createElement(d.Z, {
                    className: q.join(" ")
                }, _ && x && i.createElement("div", {
                    className: "ribbon ".concat("huge" === r ? "ribbon--huge" : "")
                }, i.createElement("span", null, "Hidden")), i.createElement(m.Z, {
                    className: "mx-0 ".concat("slim" === r && "flex-column")
                }, i.createElement(p.Z, {
                    md: "slim" === r ? 12 : 3,
                    className: "".concat("slim" === r && "px-0")
                }, "huge" === r && i.createElement(p.Z, {
                    md: 12
                }, i.createElement(m.Z, null, i.createElement(p.Z, {
                    className: "p-0"
                }, _ && x && i.createElement("div", {
                    className: "d-flex align-items-center position-absolute w-100 h-100"
                }, i.createElement(me, {
                    size: r
                }, i.createElement(v.$1, {
                    icon: l.Aq,
                    size: "5x"
                }))), i.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    title: k.state,
                    target: w ? "_blank" : void 0
                }, i.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: Y
                })), i.createElement("div", {
                    className: "muteIcons"
                }, (!D || G || $) && i.createElement(f.Z, null, i.createElement(K.Z, {
                    visible: !P && !_ && !B,
                    userId: n,
                    showText: !1
                }), i.createElement(R.Z, {
                    visible: !P && !_ && !B,
                    userId: n,
                    showText: !1
                }))))), "huge" === r && i.createElement(m.Z, {
                    className: "large-display-only large-display-only-2"
                }, i.createElement(p.Z, {
                    className: "p-0",
                    md: "12"
                }, i.createElement("div", null, i.createElement(H, {
                    userId: n
                }))))), !("huge" === r) && i.createElement("div", null, _ && x && i.createElement("div", {
                    className: "d-flex align-items-center position-absolute h-100"
                }, i.createElement(me, {
                    size: r
                }, i.createElement(v.$1, {
                    icon: l.Aq,
                    size: "2x"
                }))), i.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    title: k.state,
                    target: w ? "_blank" : void 0
                }, i.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: Y
                })), i.createElement("div", {
                    className: "muteIcons"
                }, (!D || G || $) && i.createElement(f.Z, null, i.createElement(K.Z, {
                    visible: !P && !_ && !B,
                    userId: n,
                    showText: !1
                }), i.createElement(R.Z, {
                    visible: !P && !_ && !B,
                    userId: n,
                    showText: !1
                }))))), i.createElement(p.Z, {
                    md: "slim" === r ? 12 : 8,
                    className: "user-info ".concat((0, o.iv)({
                        name: "182ot4e",
                        styles: "margin-left:1.5em"
                    }))
                }, i.createElement("h6", null, i.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    target: w ? "_blank" : void 0
                }, i.createElement(W, {
                    status: k.status
                }), k.displayName)), i.createElement("p", {
                    className: "offlineOrOnlineOrWhatever"
                }, i.createElement("em", null, Q)), "huge" === r && i.createElement(m.Z, {
                    className: "small-display-only small-display-only-2"
                }, i.createElement(p.Z, {
                    className: "p-0",
                    md: "12"
                }, i.createElement("div", null, i.createElement(H, {
                    userId: n
                })))), "huge" === r && i.createElement("div", null, i.createElement("div", {
                    className: "user-bio p-l-0"
                }, i.createElement(C, {
                    userId: n
                })), i.createElement("div", {
                    className: "user-bio-links p-2 p-l-0"
                }, i.createElement(j, {
                    userId: n,
                    index: 0
                }), i.createElement(j, {
                    userId: n,
                    index: 1
                }), i.createElement(j, {
                    userId: n,
                    index: 2
                }))), "offline" === k.state && k.last_login && i.createElement("p", {
                    className: "lastLogin"
                }, i.createElement("small", null, c()(k.last_login).fromNow())), "huge" === r && i.createElement(i.Fragment, null, i.createElement(oe, {
                    user: k,
                    isEditable: B || !1
                }), i.createElement("br", null), i.createElement("h4", null, "Note"), i.createElement("br", null), i.createElement(J, {
                    user: k,
                    isEditable: !0
                }))), i.createElement(p.Z, {
                    md: "slim" === r ? 12 : 1
                }, i.createElement(F.Z, {
                    userId: n
                }))), "online" === k.state && s && i.createElement("div", null, k.location && i.createElement(X.Z, {
                    location: k.location,
                    userId: n,
                    currentUser: S,
                    size: "normal"
                })), B && g && i.createElement("div", {
                    className: "profile-link"
                }, i.createElement(u.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    target: w ? "_blank" : void 0
                }, i.createElement(v.$1, {
                    icon: a.b7
                }), "  Profile"))))
            }
        },
        72528: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(46357),
                a = n(67294),
                l = n(32981),
                i = n(83505),
                o = n(79655),
                s = n(39886),
                c = n(25062),
                u = n(35773),
                d = n(96985),
                m = n(9669),
                p = n.n(m),
                f = function(e) {
                    var t = e.worldId;
                    return "private" !== t && "offline" !== t && "traveling" !== t ? {
                        type: "LOAD_LOCATION",
                        payload: p().get(window.apiUrl("/api/1/worlds/".concat(t)))
                    } : null
                },
                v = n(75123),
                h = n(64358),
                g = n(73170),
                b = n(43862),
                x = n(47716);
            const E = function(e) {
                var t = e.location,
                    n = e.showUsers,
                    m = e.showDetails,
                    p = e.size,
                    E = e.occupants,
                    w = e.capacity,
                    y = e.userId,
                    k = e.currentUser,
                    Z = (0, l.I0)(),
                    N = (0, l.v9)((function(e) {
                        return e.worlds.worlds
                    })),
                    I = (0, l.v9)((function(e) {
                        return e.friends.locations
                    })),
                    U = (0, l.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    z = (0, l.v9)((function(e) {
                        return e.friends.users
                    })),
                    C = (0, l.v9)((function(e) {
                        return e.friends.friendIds
                    }));
                a.useEffect((function() {
                    if ("private" !== t && "offline" !== t && "traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == N[e] && "private" !== e) {
                            var n = f({
                                worldId: e
                            });
                            n && Z(n)
                        }
                    }
                }), []), a.useEffect((function() {
                    if ("traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == N[e] && "private" !== e) {
                            var n = f({
                                worldId: e
                            });
                            n && Z(n)
                        }
                    }
                }), [t]);
                var O = function(e) {
                    return null !== e && (!1 === e.private && !(!1 !== e.friends && !C.includes(e.friends)))
                };
                if (null === t || "offline" === t) return null;
                var S = t.split(":")[0],
                    _ = t.split(":")[1],
                    L = _ ? (0, v.ee)(_) : null,
                    j = a.createElement(s.Z, {
                        className: (0, i.iv)({
                            name: "1aan4pj",
                            styles: "margin:5px;padding:10px;text-align:left;background:transparent;& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}"
                        })
                    }, a.createElement("img", {
                        className: "img-thumbnail location-img",
                        alt: "location-thumbnail",
                        style: {
                            width: "90px",
                            height: "68px"
                        },
                        src: "https://assets.vrchat.com/www/images/default_private_image.png"
                    })),
                    R = a.createElement(s.Z, {
                        className: (0, i.iv)({
                            name: "1aan4pj",
                            styles: "margin:5px;padding:10px;text-align:left;background:transparent;& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}"
                        })
                    }, a.createElement("img", {
                        className: "img-thumbnail location-img",
                        alt: "location-thumbnail",
                        style: {
                            width: "90px",
                            height: "68px"
                        },
                        src: "https://assets.vrchat.com/www/images/default_between_image.png"
                    }));
                if ("private" === t || "private" === S) return j;
                if ("traveling" === t) return R;
                if (U && y && y !== k.id) {
                    if (!L) return j;
                    if (!z[y]) return j;
                    if (!C.includes(y)) return j;
                    if (!["join me", "active"].includes(z[y].status)) return j;
                    if (!O(L)) return j
                }
                if (!L) return null;
                var A = N[S],
                    M = I[t],
                    T = (0, h.aF)(_);
                if (null == A) return a.createElement(b.Z, null);
                var D = [""];
                D.push("location-card"), D.push("size-".concat(p));
                var P = (null == M ? void 0 : M.users) || [];
                if (U && (P = P.filter((function(e) {
                        return z[e] && ["join me", "active"].includes(z[e].status)
                    })), !y)) {
                    if (!O(L)) return null;
                    if (!P.length && (null == E || !1 !== L.hidden || !1 !== L.friends || !1 !== L.private)) return null
                }
                var B = P.map((function(e) {
                        return a.createElement("div", {
                            className: "card-container",
                            key: "location-".concat(e)
                        }, a.createElement(x.Z, {
                            userId: e,
                            size: "wide"
                        }))
                    })),
                    G = _.match(/region\((us|use|eu|jp)\)/),
                    $ = "us";
                return G && G.length > 1 && ($ = G[1]), a.createElement("div", {
                    className: (0, i.iv)({
                        name: "1p96q4l",
                        styles: "& .location-card{margin:5px;padding:10px;text-align:left;background:#333c46;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .location-title a{color:white;}& .size-large{padding:20px;}& .size-large .location-title{font-weight:bold;}& .size-large .location-img{width:160px;height:calc(160px * 0.75);}& .size-large .location-users,.size-medium .location-users{margin-top:20px;margin-left:12px;margin-right:12px;}& .size-normal h6 a{font-weight:normal;}& .size-slim .location-img{width:100%;max-width:120px;height:auto;}& .size-slim .location-title{background-color:black;font-weight:normal;padding:2px;position:absolute;top:0px;width:100%;}& .location-users>div{display:grid;}& .location-users .usercard .img-thumbnail{margin:5px 5px 5px 0;}& .card-container{margin:0 3px;}& .location-users .usercard .user-info>h6{margin-bottom:0;}& .location-users .usercard .info-button{top:10px;}@media (min-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(4, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(3, 1fr);}}@media (max-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(3, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(2, 1fr);}}@media (max-width: 1900px){.location-card.size-large .location-users>div{grid-template-columns:repeat(2, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(1, 1fr);}}@media (max-width: 1500px){.location-card.size-large .location-users>div{grid-template-columns:repeat(1, 1fr);}}"
                    })
                }, a.createElement(s.Z, {
                    className: D.join(" ")
                }, a.createElement("div", null, a.createElement(o.rU, {
                    to: "/home/launch?worldId=".concat(A.id, "&instanceId=").concat(_),
                    title: A.name,
                    target: "_blank"
                }, a.createElement("img", {
                    className: "img-thumbnail location-img",
                    src: (0, h.cq)(A),
                    alt: A.name
                })), a.createElement("h6", {
                    className: "location-title"
                }, null != M && a.createElement(c.Z, null, P.length, " ", a.createElement(d.$1, {
                    icon: r.FV,
                    title: "Number of friends in instance"
                }), " "), null != E && a.createElement(c.Z, null, E, "/", w), " ", a.createElement(o.rU, {
                    to: "/home/launch?worldId=".concat(A.id, "&instanceId=").concat(_),
                    title: A.name,
                    target: "_blank"
                }, A.name, " : ", a.createElement(g.Z, {
                    region: $,
                    imageSize: "16px"
                }), " ", T, "  ")), m && a.createElement("div", null, a.createElement("p", null, a.createElement("small", null, A.description))), a.createElement("div", {
                    className: "clearfix"
                }), n && a.createElement("div", {
                    className: "location-users"
                }, a.createElement(u.Z, null, B)))))
            }
        },
        37858: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(54546),
                a = (n(4965), n(3163)),
                l = n(67294),
                i = n(34698),
                o = n(96985),
                s = n(74792),
                c = n(95168),
                u = n(68800);
            const d = function(e) {
                var t = e.userId,
                    n = e.visible,
                    d = e.showText,
                    m = (0, u.HM)(),
                    p = (0, r.Z)(m, 1)[0],
                    f = (0, u.Qq)(),
                    v = (0, r.Z)(f, 1)[0],
                    h = (0, c.JZ)().playerModerations,
                    g = (void 0 === h ? {} : h).block,
                    b = (void 0 === g ? {} : g).users,
                    x = !1;
                return new Set(b).has(t) && (x = !0), null === t || !1 === n ? l.createElement("div", null) : x ? l.createElement(i.Z, {
                    color: "danger",
                    title: "Unblock User",
                    "aria-label": "Unblock User",
                    onClick: function() {
                        v({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, l.createElement(o.$1, {
                    icon: a.U7,
                    color: "white",
                    "aria-hidden": "true"
                }), d && l.createElement("span", null, " Unblock")) : l.createElement(i.Z, {
                    color: "secondary",
                    title: "Block User",
                    "aria-label": "Block User",
                    onClick: function() {
                        p({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, l.createElement(o.$1, {
                    icon: a.U7,
                    color: "white",
                    "aria-hidden": "true"
                }), d && l.createElement("span", null, " Block"))
            }
        },
        30751: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(54546),
                a = (n(4965), n(65322)),
                l = n(89148),
                i = n(67294),
                o = n(34698),
                s = n(96985),
                c = n(74792),
                u = n(95168),
                d = n(68800);
            const m = function(e) {
                var t = e.userId,
                    n = e.visible,
                    m = e.showText,
                    p = void 0 !== m && m,
                    f = (0, d.HM)(),
                    v = (0, r.Z)(f, 1)[0],
                    h = (0, d.Qq)(),
                    g = (0, r.Z)(h, 1)[0],
                    b = (0, u.JZ)().playerModerations,
                    x = (void 0 === b ? {} : b).mute,
                    E = (void 0 === x ? {} : x).users,
                    w = !1;
                return new Set(E).has(t) && (w = !0), null === t || !1 === n ? i.createElement("div", null) : w ? i.createElement(o.Z, {
                    color: "warning",
                    title: "Unmute User",
                    "aria-label": "Unmute User",
                    onClick: function() {
                        g({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, i.createElement(s.$1, {
                    icon: l.Ek,
                    color: "white",
                    "aria-hidden": "true"
                }), p && i.createElement("span", null, " Unmute")) : i.createElement(o.Z, {
                    color: "secondary",
                    title: "Mute User",
                    "aria-label": "Mute User",
                    onClick: function() {
                        v({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, i.createElement(s.$1, {
                    icon: a.UO,
                    color: "white",
                    "aria-hidden": "true"
                }), p && i.createElement("span", null, " Mute"))
            }
        }
    }
]);
//# sourceMappingURL=780b4b780accbdfa2591ad7cc6a493fc57e253a0d98f98f6f0295f963c8a0e41.js.map