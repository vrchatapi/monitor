"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7556], {
        43862: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var a = n(45987),
                r = n(92332),
                i = n(67294),
                l = n(86646),
                o = ["hidden", "size"];
            const s = function(e) {
                var t = e.hidden,
                    n = e.size,
                    s = void 0 === n ? "2x" : n,
                    c = (0, a.Z)(e, o);
                return i.createElement("div", c, i.createElement(l.Z, {
                    icon: r.LM,
                    size: s,
                    hidden: t,
                    spin: !0,
                    pulse: !0
                }))
            }
        },
        98353: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var a = n(15671),
                r = n(43144),
                i = n(60136),
                l = n(82963),
                o = n(61120),
                s = n(68099),
                c = n(67294),
                u = n(32981),
                d = n(46326),
                m = n(43862),
                p = n(18436),
                g = n(9669),
                f = n.n(g),
                h = function(e) {
                    var t = e.userId;
                    return {
                        type: "LOAD_MODREPORT_USER",
                        payload: f().get(window.apiUrl("/api/1/users/".concat(t)), {
                            headers: {
                                "Cache-Control": "no-cache"
                            }
                        })
                    }
                };

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
                    var n, a = (0, o.Z)(e);
                    if (t) {
                        var r = (0, o.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var E = function(e) {
                    (0, i.Z)(n, e);
                    var t = v(n);

                    function n() {
                        return (0, a.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, r.Z)(n, [{
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
                b = (0, u.$j)((function(e) {
                    return {
                        userObject: e.modReport.userObject,
                        loading: e.modReport.loading,
                        error: e.modReport.error
                    }
                }))(E);
            const x = (0, u.$j)((function(e) {
                return {
                    isMod: e.currentUser.isMod
                }
            }))((function(e) {
                var t = e.isMod,
                    n = e.userId,
                    a = e.userObject,
                    r = e.tiny;
                return t && c.createElement(p.Z, {
                    icon: s.YH,
                    tiny: r
                }, c.createElement(b, {
                    userId: n,
                    preloadUser: a
                }))
            }))
        },
        18436: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var a = n(15671),
                r = n(43144),
                i = n(97326),
                l = n(60136),
                o = n(82963),
                s = n(61120),
                c = n(59545),
                u = n(67294),
                d = n(34698),
                m = n(69699),
                p = n(60766),
                g = n(86646);

            function f(e) {
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
                    var n, a = (0, s.Z)(e);
                    if (t) {
                        var r = (0, s.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, o.Z)(this, n)
                }
            }
            const h = function(e) {
                (0, l.Z)(n, e);
                var t = f(n);

                function n(e) {
                    var r;
                    return (0, a.Z)(this, n), (r = t.call(this, e)).state = {
                        modalOpen: !1
                    }, r.toggleModal = r.toggleModal.bind((0, i.Z)(r)), r
                }
                return (0, r.Z)(n, [{
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
                            a = e.buttonClassName,
                            r = void 0 === a ? "" : a,
                            i = e.outline,
                            l = e.color,
                            o = e.tiny,
                            s = " ".concat(this.props.title || "");
                        return u.createElement("div", {
                            className: n
                        }, u.createElement(d.Z, {
                            "aria-label": this.props.title || "Open Modal",
                            onClick: this.toggleModal,
                            className: "info-button ".concat(r, " text-white"),
                            outline: i,
                            color: l,
                            size: o ? "sm" : "md"
                        }, u.createElement(g.Z, {
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
                        }, u.createElement(g.Z, {
                            icon: this.props.icon
                        }), "  ", this.props.title), u.createElement(d.Z, {
                            "aria-label": "Close Modal",
                            className: "close",
                            onClick: this.toggleModal
                        }, u.createElement(g.Z, {
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
            var a = n(4965),
                r = n(26433),
                i = n(96427),
                l = n(67294),
                o = n(83505),
                s = n(30381),
                c = n.n(s),
                u = n(79655),
                d = n(39886),
                m = n(35773),
                p = n(95305),
                g = n(58877),
                f = n(37463),
                h = n(43862),
                v = n(54546),
                E = n(32981),
                b = n(25062),
                x = n(34698),
                w = n(9669),
                F = n.n(w),
                C = function(e) {
                    var t = e.userId,
                        n = e.bioLinks.map((function(e) {
                            return e || ""
                        }));
                    return {
                        type: "UPDATE_BIO_LINKS",
                        payload: F().put(window.apiUrl("/api/1/users/".concat(t)), {
                            bioLinks: n
                        })
                    }
                },
                y = n(65847),
                A = n(17383),
                k = n(62437),
                B = n(22202),
                D = n(5513);
            const Z = function(e) {
                var t, n, a, r, i = e.userId,
                    s = (0, k.GR)(i),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, A.pc)(), (0, B.XC)().data),
                    m = (0, E.I0)(),
                    p = (null == d ? void 0 : d.id) === i,
                    g = l.useState(null !== (t = null == c || null === (n = c.bio) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
                    f = (0, v.Z)(g, 2),
                    h = f[0],
                    w = f[1],
                    C = l.useState(!1),
                    Z = (0, v.Z)(C, 2),
                    N = Z[0],
                    I = Z[1],
                    z = l.useState(null !== (a = null == c ? void 0 : c.bio) && void 0 !== a ? a : ""),
                    U = (0, v.Z)(z, 2),
                    O = U[0],
                    S = U[1],
                    L = l.useState(null !== (r = null == c ? void 0 : c.bio) && void 0 !== r ? r : ""),
                    j = (0, v.Z)(L, 2),
                    R = j[0],
                    _ = j[1],
                    M = l.useState(!1),
                    T = (0, v.Z)(M, 2),
                    P = T[0],
                    K = T[1],
                    G = l.useRef(null);
                l.useEffect((function() {
                    var e = G.current;
                    if (e) {
                        var t = e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
                        P !== t && K(t)
                    }
                }), [O]), l.useEffect((function() {
                    var e, t, n, a;
                    S(null !== (e = null == c ? void 0 : c.bio) && void 0 !== e ? e : ""), _(null !== (t = null == c ? void 0 : c.bio) && void 0 !== t ? t : ""), K(!1), w(null !== (n = null == c || null === (a = c.bio) || void 0 === a ? void 0 : a.length) && void 0 !== n ? n : 0), I(!1)
                }), [c]);
                if (p) {
                    var H = h > 512,
                        $ = O.split("\n"),
                        J = (0, o.iv)("&{font-size:11pt;overflow:auto;}@media all and (min-width: 1700px){&{width:", P ? "32em" : "31em", ";height:17.4em;", N ? (0, o.iv)({
                            name: "3pim0v",
                            styles: "overflow:inherit;margin-bottom:2em"
                        }) : "", ";}textarea{width:", P ? "32em" : "31em", ";font-size:11pt;line-height:140%;height:16.9em;}}@media all and (max-width: 1700px){&{font-size:8pt;width:32em;height:17.6em;", N ? (0, o.iv)({
                            name: "1mz3b0m",
                            styles: "overflow:inherit;margin-bottom:4em"
                        }) : "", ";}textarea{font-size:8pt;line-height:140%;}}", ""),
                        q = l.createElement("div", null, $.map((function(e, t) {
                            return l.createElement("p", {
                                key: "bio-line-".concat(t)
                            }, e || l.createElement("span", null, " "))
                        })));
                    return N ? l.createElement("div", {
                        className: J,
                        ref: G
                    }, l.createElement("textarea", {
                        onChange: function(e) {
                            var t = e.target.value;
                            S(void 0 === t ? "" : t)
                        },
                        onKeyUp: function(e) {
                            var t = e.target.value;
                            w((void 0 === t ? "" : t).length)
                        },
                        className: "form-control ".concat((0, o.iv)({
                            name: "utehjx",
                            styles: "resize:none"
                        })),
                        value: null != O ? O : "Tell us about yourself"
                    }), l.createElement(b.Z, {
                        color: H ? "danger" : "info",
                        className: "float-right"
                    }, h, " / ", 512), " ", l.createElement(x.Z, {
                        onClick: function() {
                            I(!1), S(R)
                        }
                    }, "Cancel"), l.createElement(x.Z, {
                        onClick: function() {
                            var e = (0, y.Nw)(O, {
                                allowNewlines: !0
                            });
                            m(p ? (0, D._W)({
                                userId: i,
                                data: {
                                    bio: e
                                }
                            }) : function(e) {
                                var t = e.userId,
                                    n = e.bio;
                                return {
                                    type: "UPDATE_BIO",
                                    payload: F().put(window.apiUrl("/api/1/users/".concat(t)), {
                                        bio: n
                                    })
                                }
                            }({
                                userId: i,
                                bio: e
                            })), I(!1), S(e), _(e), u()
                        },
                        disabled: H,
                        color: "primary"
                    }, "Ok")) : l.createElement("div", {
                        tabIndex: "-1",
                        role: "button",
                        className: "btn btn-outline-light btn-block text-start ".concat(J),
                        style: {
                            whiteSpace: "normal"
                        },
                        onClick: function() {
                            I(!0)
                        },
                        ref: G
                    }, q)
                }
                var W = O.split("\n"),
                    X = l.createElement("div", null, W.map((function(e, t) {
                        return l.createElement("p", {
                            key: "bio-line-".concat(t)
                        }, e || l.createElement("span", null, " "))
                    })));
                return l.createElement("div", {
                    className: (0, o.iv)({
                        name: "xpha89",
                        styles: "&{max-height:20em;width:30em;overflow-y:auto;}"
                    }),
                    ref: G
                }, X)
            };
            var N = n(15861),
                I = n(64687),
                z = n.n(I),
                U = n(25402);
            const O = function(e) {
                var t, n, a, r, i = e.userId,
                    o = e.index,
                    s = (0, k.GR)(i),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, A.pc)(), (0, B.XC)().data),
                    m = (null == d ? void 0 : d.id) === i,
                    p = (0, E.I0)(),
                    f = l.useState(null !== (t = null == c || null === (n = c.bioLinks) || void 0 === n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    h = (0, v.Z)(f, 2),
                    b = h[0],
                    w = h[1],
                    F = l.useState(!1),
                    y = (0, v.Z)(F, 2),
                    D = y[0],
                    Z = y[1],
                    I = l.useState(b),
                    O = (0, v.Z)(I, 2),
                    S = O[0],
                    L = O[1],
                    j = l.useState(!0),
                    R = (0, v.Z)(j, 2),
                    _ = R[0],
                    M = R[1],
                    T = null !== (a = null == c ? void 0 : c.bioLinks) && void 0 !== a ? a : [],
                    P = function() {
                        Z(!0), M(!1)
                    },
                    K = function() {
                        var e = (0, N.Z)(z().mark((function e() {
                            var t;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(T))[o] = b, e.next = 4, p(C({
                                            userId: i,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        Z(!1), L(b), u();
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
                    G = function() {
                        var e = (0, N.Z)(z().mark((function e() {
                            var t;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(T))[o] = "", e.next = 4, p(C({
                                            userId: i,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        Z(!1), w(""), L(""), u();
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
                return m ? D ? l.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, l.createElement("div", {
                    className: "input-group"
                }, l.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return w(""), void M(!1);
                        try {
                            var a = new URL(n);
                            w(n), M("https:" !== a.protocol && "http:" !== a.protocol)
                        } catch (e) {
                            w(n), M(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === _ && K()
                    },
                    className: "form-control",
                    value: b
                }), l.createElement("div", {
                    className: "input-group-append"
                }, l.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, l.createElement(U.QZ, {
                    url: b,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), l.createElement(x.Z, {
                    onClick: function() {
                        Z(!1), w(S)
                    }
                }, "Cancel"), l.createElement(x.Z, {
                    onClick: K,
                    disabled: _,
                    color: "primary"
                }, "Ok")) : o > 0 && null == T[o - 1] ? l.createElement("div", null) : !(o > 0) || "" !== T[o] && null != T[o] || "" !== T[o - 1] && null != T[o - 1] ? null == T[o] || "" === T[o] ? l.createElement("div", null, l.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, l.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: P
                }, "Link"))) : l.createElement("div", {
                    style: {
                        width: "285px"
                    }
                }, l.createElement(g.Z, {
                    className: "p-2 w-100 p-l-0"
                }, l.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: P
                }, T[o]), l.createElement(x.Z, {
                    className: "btn btn-outline-danger",
                    "aria-label": "Close",
                    onClick: G
                }, l.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : l.createElement("div", null) : null == T[o] || "" === T[o] ? null : l.createElement("button", {
                    type: "button",
                    className: "btn btn-secondary mt-2 me-2",
                    onClick: (r = T[o], function() {
                        var e;
                        null === (e = window.open(r, "_blank")) || void 0 === e || e.focus()
                    })
                }, l.createElement(U.QZ, {
                    url: T[o],
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                }))
            };
            var S = n(37858),
                L = n(17219),
                j = n(21464),
                R = n(39758),
                _ = n(8256),
                M = n(28055),
                T = n(38824),
                P = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "ADD_LANGUAGE_TAGS",
                        payload: F().post(window.apiUrl("/api/1/users/".concat(t, "/addTags")), {
                            tags: n
                        })
                    }
                },
                K = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "DELETE_LANGUAGE_TAGS",
                        payload: F().post(window.apiUrl("/api/1/users/".concat(t, "/removeTags")), {
                            tags: n
                        })
                    }
                },
                G = "language_";
            const H = function(e) {
                var t, n, a, r = e.userId,
                    i = (0, k.GR)(r),
                    s = i.data,
                    c = i.refetch,
                    u = (0, L.y)().data,
                    d = ((0, A.pc)(), (0, B.XC)().data),
                    m = (0, E.I0)(),
                    p = (null == d ? void 0 : d.id) === r,
                    f = null !== (t = null == u || null === (n = u.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : j.O,
                    h = l.useState(!1),
                    b = (0, v.Z)(h, 2),
                    w = b[0],
                    F = b[1],
                    C = l.useState(!1),
                    y = (0, v.Z)(C, 2),
                    D = y[0],
                    Z = y[1],
                    I = l.useState(null),
                    U = (0, v.Z)(I, 2),
                    O = U[0],
                    S = U[1],
                    H = function(e) {
                        var t = e.target.value;
                        S(t)
                    },
                    $ = function(e) {
                        return e = e.replace(G, ""), "[ ".concat(e, " ] ").concat(f[e])
                    },
                    J = function() {
                        S(null), F(!1)
                    },
                    q = function() {
                        var e = (0, N.Z)(z().mark((function e() {
                            var t;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = G + O, e.next = 3, m(P({
                                            userId: r,
                                            tags: [t]
                                        }));
                                    case 3:
                                        J(), c();
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
                    W = function() {
                        var e = (0, N.Z)(z().mark((function e(t) {
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m(K({
                                            userId: r,
                                            tags: [t]
                                        }));
                                    case 2:
                                        J(), c();
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
                    X = (null !== (a = null == s ? void 0 : s.tags) && void 0 !== a ? a : []).filter((function(e) {
                        return e.indexOf(G) >= 0
                    })),
                    Q = X.length < 3;
                if (!p) return l.createElement("div", {
                    className: "user-languages"
                }, X.length > 0 && l.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), l.createElement("div", null, X.map((function(e, t) {
                    return l.createElement("div", {
                        key: "public-tags-".concat(t)
                    }, l.createElement("div", {
                        className: "p-2"
                    }, l.createElement("div", {
                        className: "language-display-public"
                    }, $(e))))
                }))));
                var Y = l.createElement("div", null, X.map((function(e, t) {
                        return l.createElement("div", {
                            key: "stored-tags-".concat(t)
                        }, l.createElement(g.Z, {
                            className: "p-2 ".concat((0, o.iv)({
                                name: "1d3w5wq",
                                styles: "width:100%"
                            }))
                        }, l.createElement("div", {
                            className: "btn btn-outline-light"
                        }, $(e)), l.createElement(x.Z, {
                            className: "btn btn-outline-danger ".concat((0, o.iv)({
                                name: "14djdxm",
                                styles: "max-width:2em"
                            })),
                            "aria-label": "Close",
                            onClick: function() {
                                return W(e)
                            }
                        }, l.createElement("span", {
                            "aria-hidden": "true"
                        }, "×"))))
                    }))),
                    V = l.createElement("div", {
                        className: "btn-group w-100 p-2"
                    }, l.createElement("div", {
                        role: "button",
                        tabIndex: -1,
                        className: "btn btn-outline-light btn-block",
                        style: {
                            whiteSpace: "normal",
                            width: "285px"
                        },
                        onClick: function() {
                            F(!0)
                        }
                    }, "Add Language")),
                    ee = l.createElement("div", null, l.createElement("div", {
                        className: "w-100 p-2"
                    }, l.createElement(R.Z, {
                        drop: "right",
                        className: "mb-2 w-100",
                        isOpen: D,
                        toggle: function() {
                            Z(!D)
                        }
                    }, l.createElement(x.Z, {
                        color: "light",
                        id: "caret"
                    }, O && $(O) || "Select Language"), l.createElement(_.Z, {
                        caret: !0,
                        color: "secondary"
                    }), l.createElement(M.Z, {
                        flip: !0,
                        color: "light",
                        style: {
                            overflowY: "scroll",
                            maxHeight: "300px"
                        }
                    }, Object.keys(f).map((function(e, t) {
                        return l.createElement(T.Z, {
                            key: "dropdown-langs".concat(t),
                            value: e,
                            onClick: H
                        }, $(e))
                    })))), l.createElement("div", {
                        className: "d-flex flex-row justify-content-between"
                    }, l.createElement(x.Z, {
                        onClick: J
                    }, "Cancel"), l.createElement(x.Z, {
                        onClick: q,
                        className: "px-4",
                        color: "primary"
                    }, "Ok"))));
                return l.createElement("div", {
                    className: "user-languages"
                }, l.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), Y, w && Q && ee, !w && Q && V)
            };
            var $ = n(30751);
            const J = function(e) {
                var t = e.status;
                return null == t ? l.createElement("div", null) : l.createElement("span", {
                    className: (0, o.iv)({
                        name: "aqta49",
                        styles: "& span{width:15px;height:15px;border-radius:25px;margin-top:2px;margin-right:5px;display:inline-block;}& .active{background-color:var(--status-online);}& .join-me{background-color:var(--status-joinme);}& .busy{background-color:var(--status-busy);}& .ask-me{background-color:var(--status-askme);}& .offline{background-color:grey;}"
                    })
                }, l.createElement("span", {
                    className: t.replace(" ", "-"),
                    title: t
                }))
            };
            var q = n(98353),
                W = n(72528),
                X = n(42619);
            const Q = function(e) {
                var t, n = e.user,
                    a = (0, A.v$)().fetchUser,
                    r = (0, E.I0)(),
                    i = (0, l.useState)(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""),
                    o = (0, v.Z)(i, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, l.useState)(!1),
                    d = (0, v.Z)(u, 2),
                    m = d[0],
                    p = d[1],
                    g = (0, l.useRef)(null),
                    f = (0, E.v9)((function(e) {
                        return e.currentUser.addNote.isRejected
                    })),
                    h = (0, E.v9)((function(e) {
                        return e.currentUser.addNote.error
                    }));
                (0, l.useEffect)((function() {
                    g.current.style.height = "0px";
                    var e = g.current.scrollHeight;
                    g.current.style.height = "".concat(e, "px")
                }), [s]);
                var b = function() {
                        var e = (0, N.Z)(z().mark((function e(t) {
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (m) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return g.current.blur(), t && t.stopPropagation(), p(!1), e.next = 7, r((0, D.AL)({
                                            targetUserId: n.id,
                                            note: s
                                        }));
                                    case 7:
                                        return e.next = 9, a();
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
                    x = function() {
                        var e = (0, N.Z)(z().mark((function e() {
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return g.current.blur(), c(""), e.next = 4, r((0, D.lj)({
                                            targetUserId: n.id
                                        }));
                                    case 4:
                                        return e.next = 6, a();
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
                        var e = (0, N.Z)(z().mark((function e() {
                            var t;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!f) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, a();
                                    case 3:
                                        return e.abrupt("return", c(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""));
                                    case 4:
                                        return e.abrupt("return", b());
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
                return l.createElement(Y, null, l.createElement(ee, {
                    onClick: function(e) {
                        m || (e.stopPropagation(), p(!0), setTimeout((function() {
                            g.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Note",
                    tabIndex: 0
                }, l.createElement(ne, {
                    contenteditable: !0,
                    ref: g,
                    value: s,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 256 || c(n)
                    },
                    onBlur: w,
                    onKeyPress: function(e) {
                        if ("Enter" !== e.key || e.shiftKey) {
                            var t = g.current.scrollHeight > 80;
                            "Enter" === e.key && e.shiftKey && t && e.preventDefault()
                        } else b(e)
                    },
                    placeholder: "Click to add a note!",
                    "aria-label": "Note input field"
                }), "" !== s && m && l.createElement(V, null, s.length, "/256"), l.createElement(ae, {
                    onClick: x,
                    size: "1x",
                    icon: X.$,
                    "aria-label": "delete note"
                })), f && l.createElement(te, null, "Note Changes Failed: ", l.createElement("br", null), h))
            };
            var Y = (0, a.Z)("div", {
                    target: "e2hlwbc5"
                })({
                    name: "j9ove5",
                    styles: "margin-bottom:22px"
                }),
                V = (0, a.Z)("p", {
                    target: "e2hlwbc4"
                })({
                    name: "whd8lt",
                    styles: "position:relative;right:-10px;transition:all 0.2s ease-in-out;color:white"
                }),
                ee = (0, a.Z)(f.X2, {
                    target: "e2hlwbc3"
                })({
                    name: "1r4d6h9",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                te = (0, a.Z)("p", {
                    target: "e2hlwbc2"
                })({
                    name: "f2dkex",
                    styles: "max-width:250px;color:red"
                }),
                ne = (0, a.Z)("textarea", {
                    target: "e2hlwbc1"
                })({
                    name: "1ce6mw9",
                    styles: "background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);border:none;color:#fff;display:flex;flex-grow:1;margin:0;outline:none!important;padding:0;&:hover{color:#fff;}&::placeholder{color:rgba(255, 255, 255, 0.5);}"
                }),
                ae = (0, a.Z)(f.$1, {
                    target: "e2hlwbc0"
                })("color:white;cursor:pointer;position:relative;right:-100px;transition:all 0.2s ease-in-out;&:hover{color:", (function(e) {
                    return "check" === e.name ? "var(--note-online)" : "var(--bs-cyan)"
                }), ";}"),
                re = n(12227),
                ie = n(7371),
                le = n(68055);
            n(34984);
            const oe = function(e) {
                var t, n = e.user,
                    a = e.isEditable,
                    r = (0, A.Tu)(),
                    i = (r._, r.fetchUser),
                    o = (0, E.I0)(),
                    s = l.useState(null !== (t = null == n ? void 0 : n.statusDescription) && void 0 !== t ? t : ""),
                    c = (0, v.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    m = l.useState(!1),
                    p = (0, v.Z)(m, 2),
                    g = p[0],
                    f = p[1],
                    h = l.useRef(null),
                    b = ((0, E.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })), l.useCallback((function(e) {
                        var t, a, r;
                        null !== (t = h.current) && void 0 !== t && t.contains(e.target) || (null === (a = h.current) || void 0 === a || a.blur(), d(null !== (r = null == n ? void 0 : n.statusDescription) && void 0 !== r ? r : ""), f(!1))
                    }), [h.current]));
                l.useEffect((function() {
                    return g ? window.addEventListener("click", b) : window.removeEventListener("click", b),
                        function() {
                            window.removeEventListener("click", b)
                        }
                }), [g]), l.useEffect((function() {
                    var e;
                    d(null !== (e = null == n ? void 0 : n.statusDescription) && void 0 !== e ? e : "")
                }), [null == n ? void 0 : n.statusDescription]);
                var x = function() {
                    var e = (0, N.Z)(z().mark((function e(t) {
                        return z().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (g) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    h.current.blur(), t.stopPropagation(), f(!1), e.next = 10;
                                    break;
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12, o((0, D._W)({
                                        userId: n.id,
                                        data: {
                                            statusDescription: u
                                        }
                                    }));
                                case 12:
                                    return e.next = 14, i();
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
                return a ? l.createElement(se, {
                    onClick: function(e) {
                        g || (e.stopPropagation(), f(!0), setTimeout((function() {
                            h.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Status",
                    tabIndex: 0
                }, g ? l.createElement(ce, {
                    ref: h,
                    value: u,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 32 || d(n)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && x(e)
                    },
                    placeholder: "Set a new status!"
                }) : l.createElement("div", null, u.length > 0 ? u : l.createElement(ue, null, "Set a status")), l.createElement(de, {
                    onClick: x,
                    size: "1x",
                    icon: g ? le.LE : ie.Iw
                })) : l.createElement("p", {
                    className: "statusDescription"
                }, l.createElement("small", null, n ? n.statusDescription : ""))
            };
            var se = (0, a.Z)(f.X2, {
                    target: "e16hr4le3"
                })({
                    name: "8boqxq",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;cursor:pointer;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                ce = (0, a.Z)("input", {
                    target: "e16hr4le2"
                })({
                    name: "1so83ik",
                    styles: "background:transparent;padding:0;margin:0;border:none;outline:none!important;color:#fff;display:flex;flex-grow:1;border-bottom:1px solid rgba(255, 255, 255, 0.5)"
                }),
                ue = (0, a.Z)("span", {
                    target: "e16hr4le1"
                })({
                    name: "1n4zmb4",
                    styles: "color:rgba(255, 255, 255, 0.5)"
                }),
                de = (0, a.Z)(f.$1, {
                    target: "e16hr4le0"
                })("position:relative;right:-100px;transition:all 0.2s ease-in-out;color:white;&:hover{color:", (function(e) {
                    return "check" === e.name ? "var(--status-online)" : "var(--bs-cyan)"
                }), ";}");
            var me = (0, a.Z)("div", {
                target: "ek6wv4d0"
            })("margin:", (function(e) {
                return "huge" === e.size ? "auto" : "auto 0px auto 60px"
            }), ";pointer-events:none;");
            const pe = function(e) {
                var t, n = e.userId,
                    a = e.size,
                    s = e.showLocation,
                    v = e.showExtras,
                    E = e.showInvalid,
                    b = e.isUserHidden,
                    x = e.openLinksInNewTab,
                    w = void 0 !== x && x,
                    F = (0, k.GR)(n),
                    C = F.data,
                    y = F.isFetching,
                    D = F.isError,
                    N = F.error,
                    I = (0, B.IB)().data,
                    z = (0, A.pc)(),
                    U = (0, A.JZ)().playerModerations,
                    L = U.mute.users,
                    j = U.block.users;
                if (!n) return null;
                if (E && D) return l.createElement(d.Z, {
                    className: (0, o.iv)({
                        name: "1flzyeq",
                        styles: "padding:10px 20px;border:2px solid var(--level-visitor)"
                    })
                }, l.createElement(m.Z, null, l.createElement("h6", null, "ID: ", n)), l.createElement(m.Z, null, N.status, ":", null === (t = N.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message));
                if (!C || y) return l.createElement(h.Z, null);
                var R = (0, re.FR)({
                        tags: C.tags
                    }),
                    _ = C.isFriend,
                    M = new Set(C.tags).has("admin_moderator"),
                    T = n === (null == I ? void 0 : I.id),
                    P = new Set(j).has(n),
                    K = new Set(L).has(n),
                    G = ["usercard"];
                G.push("friend-".concat(_)), G.push("size-".concat(a)), G.push("state-".concat(C.state)), G.push("level-".concat(R));
                var X = "Offline";
                if ("active" === C.state && (X = "Active"), "online" === C.state && (X = "In-World"), "traveling" === C.location && (X = "Loading a world"), null != C.error) return l.createElement("div", null);
                var Y = C.profilePicOverride || C.currentAvatarThumbnailImageUrl;
                return l.createElement("div", {
                    className: (0, o.iv)({
                        name: "irlerg",
                        styles: "&{text-align:left;}& .usercard{padding:10px;margin-bottom:5px;}& .card{background:#242a31;}& .card .user-img{float:left;margin:7px;}& .muteIcons{position:absolute;top:0;left:0;}& .muteIcons .btn{font-size:xx-small;}& .user-info{max-width:calc(100% - 120px);min-width:100px;}& .user-img{max-width:calc(100% - 14px);}& .info-button{position:absolute;top:5px;right:5px;}& h4{margin-bottom:2px;}& a{font-weight:bold;}& p{margin-bottom:0.2em;}& .p-l-0{padding-left:0px!important;padding-right:0px!important;}& .level-administrator,& .level-moderator{border:2px solid var(--developer);}& .level-visitor{border:2px solid var(--level-visitor);}& .level-new{border:2px solid var(--level-new);}& .level-user{border:2px solid var(--level-user);}& .level-known{border:2px solid var(--level-known);}& .level-trusted{border:2px solid var(--level-trusted);}& .state-online .user-img{border:2px solid var(--bs-green);}& .state-active .user-img{border:2px solid var(--bs-yellow);}& .state-active{opacity:0.9;}& .state-offline{opacity:0.7;}& .size-huge .user-img{width:285px;height:calc(285px * 0.75);}& .size-huge .muteIcons{display:none;}& .size-huge .user-bio,& .size-huge .user-bio-links{width:285px;}& .size-huge .user-bio textarea{min-height:200px;}& .size-slim .user-info{max-width:100%;width:100%;margin-left:10px;margin-right:10px;}& .size-wide .muteIcons{top:17px;left:4px;}& .size-wide{padding-top:2px;padding-bottom:2px;}& .size-wide .user-img{width:60px;height:calc(60px * 0.75);margin-left:115px;}& .size-wide .user-info{margin-left:0.7em;}& .size-wide .statusDescription,& .size-wide .offlineOrOnlineOrWhatever{display:none;}& .size-wide .user-info{margin:auto 0;h6,p{margin-bottom:0;}}& .user-languages{width:100%;}& .language-display-public{width:100%;text-align:center;vertical-align:middle;padding:0.5rem 0.75rem;border-radius:0.25rem;border-color:#f8f9fa;border:1px solid;}& .profile-link{margin-left:-7px;margin-right:-7px;padding-top:0.5rem;}& .extra-margin{margin-left:10px!important;}@media (max-width: 921px){.large-display-only{display:none;}}@media (max-width: 991px) and (min-width: 921px){.small-display-only{display:none;}}@media (max-width: 1578px) and (min-width: 992px){.large-display-only-2{display:none;}}@media (min-width: 1579px){.small-display-only-2{display:none;}}.ribbon{height:70px;left:-2px;overflow:hidden;position:absolute;text-align:right;top:-5px;width:75px;z-index:1;}.ribbon span{background:#8f0808;background:linear-gradient(#f70505 0%, #8f0808 100%);box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);color:#fff;display:block;font-size:0.8rem;font-weight:bold;left:-25px;left:-29px;line-height:22px;position:absolute;text-align:center;text-transform:uppercase;top:17px;transform:rotate(315deg);width:100px;}.ribbon span::before{border-bottom:3px solid transparent;border-left:3px solid #8f0808;border-right:3px solid transparent;border-top:3px solid #8f0808;content:'';left:0px;top:100%;position:absolute;z-index:-1;}.ribbon span::after{border-bottom:3px solid transparent;border-left:3px solid transparent;border-right:3px solid #8f0808;border-top:3px solid #8f0808;content:'';position:absolute;right:0%;top:100%;z-index:-1;}.ribbon--huge{height:93px;left:-7px;top:-7px;width:93px;}.ribbon--huge span{font-size:16px;left:-29px;line-height:32px;width:125px;}"
                    })
                }, l.createElement(d.Z, {
                    className: G.join(" ")
                }, z && b && l.createElement("div", {
                    className: "ribbon ".concat("huge" === a ? "ribbon--huge" : "")
                }, l.createElement("span", null, "Hidden")), l.createElement(m.Z, {
                    className: "mx-0 ".concat("slim" === a && "flex-column")
                }, l.createElement(p.Z, {
                    md: "slim" === a ? 12 : 3,
                    className: "".concat("slim" === a && "px-0")
                }, "huge" === a && l.createElement(p.Z, {
                    md: 12
                }, l.createElement(m.Z, null, l.createElement(p.Z, {
                    className: "p-0"
                }, z && b && l.createElement("div", {
                    className: "d-flex align-items-center position-absolute w-100 h-100"
                }, l.createElement(me, {
                    size: a
                }, l.createElement(f.$1, {
                    icon: i.Aq,
                    size: "5x"
                }))), l.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    title: C.state,
                    target: w ? "_blank" : void 0
                }, l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: Y
                })), l.createElement("div", {
                    className: "muteIcons"
                }, (!_ || P || K) && l.createElement(g.Z, null, l.createElement($.Z, {
                    visible: !M && !z && !T,
                    userId: n,
                    showText: !1
                }), l.createElement(S.Z, {
                    visible: !M && !z && !T,
                    userId: n,
                    showText: !1
                }))))), "huge" === a && l.createElement(m.Z, {
                    className: "large-display-only large-display-only-2"
                }, l.createElement(p.Z, {
                    className: "p-0",
                    md: "12"
                }, l.createElement("div", null, l.createElement(H, {
                    userId: n
                }))))), !("huge" === a) && l.createElement("div", null, z && b && l.createElement("div", {
                    className: "d-flex align-items-center position-absolute h-100"
                }, l.createElement(me, {
                    size: a
                }, l.createElement(f.$1, {
                    icon: i.Aq,
                    size: "2x"
                }))), l.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    title: C.state,
                    target: w ? "_blank" : void 0
                }, l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: Y
                })), l.createElement("div", {
                    className: "muteIcons"
                }, (!_ || P || K) && l.createElement(g.Z, null, l.createElement($.Z, {
                    visible: !M && !z && !T,
                    userId: n,
                    showText: !1
                }), l.createElement(S.Z, {
                    visible: !M && !z && !T,
                    userId: n,
                    showText: !1
                }))))), l.createElement(p.Z, {
                    md: "slim" === a ? 12 : 8,
                    className: "user-info ".concat((0, o.iv)({
                        name: "182ot4e",
                        styles: "margin-left:1.5em"
                    }))
                }, l.createElement("h6", null, l.createElement(u.rU, {
                    to: "/home/user/".concat(n),
                    target: w ? "_blank" : void 0
                }, l.createElement(J, {
                    status: C.status
                }), C.displayName)), l.createElement("p", {
                    className: "offlineOrOnlineOrWhatever"
                }, l.createElement("em", null, X)), "huge" === a && l.createElement(m.Z, {
                    className: "small-display-only small-display-only-2"
                }, l.createElement(p.Z, {
                    className: "p-0",
                    md: "12"
                }, l.createElement("div", null, l.createElement(H, {
                    userId: n
                })))), "huge" === a && l.createElement("div", null, l.createElement("div", {
                    className: "user-bio p-l-0"
                }, l.createElement(Z, {
                    userId: n
                })), l.createElement("div", {
                    className: "user-bio-links p-2 p-l-0"
                }, l.createElement(O, {
                    userId: n,
                    index: 0
                }), l.createElement(O, {
                    userId: n,
                    index: 1
                }), l.createElement(O, {
                    userId: n,
                    index: 2
                }))), "offline" === C.state && C.last_login && l.createElement("p", {
                    className: "lastLogin"
                }, l.createElement("small", null, c()(C.last_login).fromNow())), "huge" === a && l.createElement(l.Fragment, null, l.createElement(oe, {
                    user: C,
                    isEditable: T || !1
                }), l.createElement("br", null), l.createElement("h4", null, "Note"), l.createElement("br", null), l.createElement(Q, {
                    user: C,
                    isEditable: !0
                }))), l.createElement(p.Z, {
                    md: "slim" === a ? 12 : 1
                }, l.createElement(q.Z, {
                    userId: n
                }))), "online" === C.state && s && l.createElement("div", null, C.location && l.createElement(W.Z, {
                    location: C.location,
                    userId: n,
                    currentUser: I,
                    size: "normal"
                })), T && v && l.createElement("div", {
                    className: "profile-link"
                }, l.createElement(u.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    target: w ? "_blank" : void 0
                }, l.createElement(f.$1, {
                    icon: r.b7
                }), "  Profile"))))
            }
        },
        72528: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var a = n(46357),
                r = n(67294),
                i = n(32981),
                l = n(83505),
                o = n(79655),
                s = n(39886),
                c = n(25062),
                u = n(35773),
                d = n(37463),
                m = n(9669),
                p = n.n(m),
                g = function(e) {
                    var t = e.worldId;
                    return "private" !== t && "offline" !== t && "traveling" !== t ? {
                        type: "LOAD_LOCATION",
                        payload: p().get(window.apiUrl("/api/1/worlds/".concat(t)))
                    } : null
                },
                f = n(75123),
                h = n(64358),
                v = n(73170),
                E = n(43862),
                b = n(47716);
            const x = function(e) {
                var t = e.location,
                    n = e.showUsers,
                    m = e.showDetails,
                    p = e.size,
                    x = e.occupants,
                    w = e.capacity,
                    F = e.userId,
                    C = e.currentUser,
                    y = (0, i.I0)(),
                    A = (0, i.v9)((function(e) {
                        return e.worlds.worlds
                    })),
                    k = (0, i.v9)((function(e) {
                        return e.friends.locations
                    })),
                    B = (0, i.v9)((function(e) {
                        return e.currentUser.isMod
                    })),
                    D = (0, i.v9)((function(e) {
                        return e.friends.users
                    })),
                    Z = (0, i.v9)((function(e) {
                        return e.friends.friendIds
                    }));
                r.useEffect((function() {
                    if ("private" !== t && "offline" !== t && "traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == A[e] && "private" !== e) {
                            var n = g({
                                worldId: e
                            });
                            n && y(n)
                        }
                    }
                }), []), r.useEffect((function() {
                    if ("traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == A[e] && "private" !== e) {
                            var n = g({
                                worldId: e
                            });
                            n && y(n)
                        }
                    }
                }), [t]);
                var N = function(e) {
                    return null !== e && (!1 === e.private && !(!1 !== e.friends && !Z.includes(e.friends)))
                };
                if (null === t || "offline" === t) return null;
                var I = t.split(":")[0],
                    z = t.split(":")[1],
                    U = z ? (0, f.ee)(z) : null,
                    O = r.createElement(s.Z, {
                        className: (0, l.iv)({
                            name: "1aan4pj",
                            styles: "margin:5px;padding:10px;text-align:left;background:transparent;& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}"
                        })
                    }, r.createElement("img", {
                        className: "img-thumbnail location-img",
                        alt: "location-thumbnail",
                        style: {
                            width: "90px",
                            height: "68px"
                        },
                        src: "https://assets.vrchat.com/www/images/default_private_image.png"
                    })),
                    S = r.createElement(s.Z, {
                        className: (0, l.iv)({
                            name: "1aan4pj",
                            styles: "margin:5px;padding:10px;text-align:left;background:transparent;& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}"
                        })
                    }, r.createElement("img", {
                        className: "img-thumbnail location-img",
                        alt: "location-thumbnail",
                        style: {
                            width: "90px",
                            height: "68px"
                        },
                        src: "https://assets.vrchat.com/www/images/default_between_image.png"
                    }));
                if ("private" === t || "private" === I) return O;
                if ("traveling" === t) return S;
                if (B && F && F !== C.id) {
                    if (!U) return O;
                    if (!D[F]) return O;
                    if (!Z.includes(F)) return O;
                    if (!["join me", "active"].includes(D[F].status)) return O;
                    if (!N(U)) return O
                }
                if (!U) return null;
                var L = A[I],
                    j = k[t],
                    R = (0, h.aF)(z);
                if (null == L) return r.createElement(E.Z, null);
                var _ = [""];
                _.push("location-card"), _.push("size-".concat(p));
                var M = (null == j ? void 0 : j.users) || [];
                if (B && (M = M.filter((function(e) {
                        return D[e] && ["join me", "active"].includes(D[e].status)
                    })), !F)) {
                    if (!N(U)) return null;
                    if (!M.length && (null == x || !1 !== U.hidden || !1 !== U.friends || !1 !== U.private)) return null
                }
                var T = M.map((function(e) {
                        return r.createElement("div", {
                            className: "card-container",
                            key: "location-".concat(e)
                        }, r.createElement(b.Z, {
                            userId: e,
                            size: "wide"
                        }))
                    })),
                    P = z.match(/region\((us|use|eu|jp)\)/),
                    K = "us";
                return P && P.length > 1 && (K = P[1]), r.createElement("div", {
                    className: (0, l.iv)({
                        name: "1p96q4l",
                        styles: "& .location-card{margin:5px;padding:10px;text-align:left;background:#333c46;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .location-title a{color:white;}& .size-large{padding:20px;}& .size-large .location-title{font-weight:bold;}& .size-large .location-img{width:160px;height:calc(160px * 0.75);}& .size-large .location-users,.size-medium .location-users{margin-top:20px;margin-left:12px;margin-right:12px;}& .size-normal h6 a{font-weight:normal;}& .size-slim .location-img{width:100%;max-width:120px;height:auto;}& .size-slim .location-title{background-color:black;font-weight:normal;padding:2px;position:absolute;top:0px;width:100%;}& .location-users>div{display:grid;}& .location-users .usercard .img-thumbnail{margin:5px 5px 5px 0;}& .card-container{margin:0 3px;}& .location-users .usercard .user-info>h6{margin-bottom:0;}& .location-users .usercard .info-button{top:10px;}@media (min-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(4, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(3, 1fr);}}@media (max-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(3, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(2, 1fr);}}@media (max-width: 1900px){.location-card.size-large .location-users>div{grid-template-columns:repeat(2, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(1, 1fr);}}@media (max-width: 1500px){.location-card.size-large .location-users>div{grid-template-columns:repeat(1, 1fr);}}"
                    })
                }, r.createElement(s.Z, {
                    className: _.join(" ")
                }, r.createElement("div", null, r.createElement(o.rU, {
                    to: "/home/launch?worldId=".concat(L.id, "&instanceId=").concat(z),
                    title: L.name,
                    target: "_blank"
                }, r.createElement("img", {
                    className: "img-thumbnail location-img",
                    src: (0, h.cq)(L),
                    alt: L.name
                })), r.createElement("h6", {
                    className: "location-title"
                }, null != j && r.createElement(c.Z, null, M.length, " ", r.createElement(d.$1, {
                    icon: a.FV,
                    title: "Number of friends in instance"
                }), " "), null != x && r.createElement(c.Z, null, x, "/", w), " ", r.createElement(o.rU, {
                    to: "/home/launch?worldId=".concat(L.id, "&instanceId=").concat(z),
                    title: L.name,
                    target: "_blank"
                }, L.name, " : ", r.createElement(v.Z, {
                    region: K,
                    imageSize: "16px"
                }), " ", R, "  ")), m && r.createElement("div", null, r.createElement("p", null, r.createElement("small", null, L.description))), r.createElement("div", {
                    className: "clearfix"
                }), n && r.createElement("div", {
                    className: "location-users"
                }, r.createElement(u.Z, null, T)))))
            }
        },
        37858: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var a = n(54546),
                r = (n(4965), n(3163)),
                i = n(67294),
                l = n(34698),
                o = n(37463),
                s = n(74792),
                c = n(17383),
                u = n(68800);
            const d = function(e) {
                var t = e.userId,
                    n = e.visible,
                    d = e.showText,
                    m = (0, u.HM)(),
                    p = (0, a.Z)(m, 1)[0],
                    g = (0, u.Qq)(),
                    f = (0, a.Z)(g, 1)[0],
                    h = (0, c.JZ)().playerModerations,
                    v = (void 0 === h ? {} : h).block,
                    E = (void 0 === v ? {} : v).users,
                    b = !1;
                return new Set(E).has(t) && (b = !0), null === t || !1 === n ? i.createElement("div", null) : b ? i.createElement(l.Z, {
                    color: "danger",
                    title: "Unblock User",
                    "aria-label": "Unblock User",
                    onClick: function() {
                        f({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, i.createElement(o.$1, {
                    icon: r.U7,
                    color: "white",
                    "aria-hidden": "true"
                }), d && i.createElement("span", null, " Unblock")) : i.createElement(l.Z, {
                    color: "secondary",
                    title: "Block User",
                    "aria-label": "Block User",
                    onClick: function() {
                        p({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, i.createElement(o.$1, {
                    icon: r.U7,
                    color: "white",
                    "aria-hidden": "true"
                }), d && i.createElement("span", null, " Block"))
            }
        },
        30751: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var a = n(54546),
                r = (n(4965), n(65322)),
                i = n(89148),
                l = n(67294),
                o = n(34698),
                s = n(37463),
                c = n(74792),
                u = n(17383),
                d = n(68800);
            const m = function(e) {
                var t = e.userId,
                    n = e.visible,
                    m = e.showText,
                    p = void 0 !== m && m,
                    g = (0, d.HM)(),
                    f = (0, a.Z)(g, 1)[0],
                    h = (0, d.Qq)(),
                    v = (0, a.Z)(h, 1)[0],
                    E = (0, u.JZ)().playerModerations,
                    b = (void 0 === E ? {} : E).mute,
                    x = (void 0 === b ? {} : b).users,
                    w = !1;
                return new Set(x).has(t) && (w = !0), null === t || !1 === n ? l.createElement("div", null) : w ? l.createElement(o.Z, {
                    color: "warning",
                    title: "Unmute User",
                    "aria-label": "Unmute User",
                    onClick: function() {
                        v({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, l.createElement(s.$1, {
                    icon: i.Ek,
                    color: "white",
                    "aria-hidden": "true"
                }), p && l.createElement("span", null, " Unmute")) : l.createElement(o.Z, {
                    color: "secondary",
                    title: "Mute User",
                    "aria-label": "Mute User",
                    onClick: function() {
                        f({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, l.createElement(s.$1, {
                    icon: r.UO,
                    color: "white",
                    "aria-hidden": "true"
                }), p && l.createElement("span", null, " Mute"))
            }
        },
        65847: (e, t, n) => {
            n.d(t, {
                Nw: () => v
            });
            var a = n(85564),
                r = n.n(a),
                i = (n(85067), n(58814), n(56125), n(32299));
            const l = JSON.parse('{"characterAllowList":[{"name":"Basic Latin","ranges":["000A","000D","0020-007E"]},{"name":"Latin-1 Supplement","ranges":["00A1-00FF"]},{"name":"Latin Extended-A","ranges":["0100-017F"]},{"name":"Latin Extended-B","ranges":["0180-024F"]},{"name":"IPA Extensions","ranges":["0250-02AF"]},{"name":"Spacing Modifier Letters","ranges":["02B0-02FF"]},{"name":"Combining Diacritical Marks","ranges":["0300-036F"]},{"name":"Greek and Coptic","ranges":["0370-0377","037A-037F","0384-038A","038C","028E-03A1","03A3-03FF"]},{"name":"Cyrillic","ranges":["0400-04FF"]},{"name":"Cyrillic Supplementary","ranges":["0500-052F"]},{"name":"Armenian","ranges":["0531-0556","0559-055F","0561-0587","0589-058A","058D-058F"]},{"name":"Hebrew","ranges":["0591-05C7","05D0-05EA","05EF-05F4"]},{"name":"Arabic","ranges":["0600-061B","061E-06FF"]},{"name":"Devanagari","ranges":["0900-097F"]},{"name":"Bengali","ranges":["0980-0983","0985-098C","098F-0990","0993-09A8","09AA-09B0","09B2","09B6-09B9","09BC-09C4","09C7-09C8","09CB-09CE","09D7","09DC-09DD","09DF-09E3","09E6-09FB"]},{"name":"Gurmukhi","ranges":["0A01-0A03","0A05-0A0A","0A0F-0A10","0A13-0A28","0A2A-0A30","0A32-0A33","0A35-0A36","0A38-0A39","0A3C","0A3E-0A42","0A47-0A48","0A4B-0A4D","0A51","0A59-0A5C","0A5E","0A66-0A75"]},{"name":"Gujarati","ranges":["0A81-0A83","0A85-0A8D","0A8F-0A91","0A93-0AA8","0AAA-0AB0","0AB2-0AB3","0AB5-0AB9","0ABC-0AC5","0AC7-0AC9","0ACB-0ACD","0AD0","0AE0-0AE3","0AE6-0AF1"]},{"name":"Oriya","ranges":["0B01-0B03","0B05-0B0C","0B0F-0B10","0B13-0B28","0B2A-0B30","0B32-0B33","0B35-0B39","0B3C-0B44","0B47-0B48","0B4B-0B4D","0B56-0B57","0B5C-0B5D","0B5F-0B63","0B66-0B77"]},{"name":"Tamil","ranges":["0B82-0B83","0B85-0B8A","0B8E-0B90","0B92-0B95","0B99-0B9A","0B9C","0B9E-0B9F","0BA3-0BA4","0BA8-0BAA","0BAE-0BB9","0BBE-0BC2","0BC6-0BC8","0BCA-0BCD","0BD0","0BD7","0BE6-0BFA"]},{"name":"Telugu","ranges":["0C00-0C03","0C05-0C0C","0C0E-0C10","0C12-0C28","0C2A-0C39","0C3D-0C44","0C46-0C48","0C4A-0C4D","0C55-0C56","0C58-0C59","0C60-0C63","0C66-0C6F","0C78-0C7F"]},{"name":"Kannada","ranges":["0C81-0C83","0C85-0C8C","0C8E-0C90","0C92-0CA8","0CAA-0CB3","0CB5-0CB9","0CBC-0CC4","0CC6-0CC8","0CCA-0CCD","0CD5-0CD6","0CDE","0CE0-0CE3","0CE6-0CEF","0CF1-0CF2"]},{"name":"Malayalam","ranges":["0D01-0D03","0D05-0D0C","0D0E-0D10","0D12-0D3A","0D3D-0D44","0D46-0D48","0D4A-0D4E","0D57","0D60-0D63","0D66-0D75","0D79-0D7F"]},{"name":"Sinhala","ranges":["0D82-0D83","0D85-0D96","0D9A-0DB1","0DB3-0DBB","0DBD","0DC0-0DC6","0DCA","0DCF-0DD4","0DD6","0DD8-0DDF","0DE6-0DEF","0DF2-0DF4"]},{"name":"Thai","ranges":["0E01-0E3A","0E3F-0E5B"]},{"name":"Lao","ranges":["0E81-0E82","0E84","0E87-0E88","0E8A","0E8D","0E94-0E97","0E99-0E9F","0EA1-0EA3","0EA5","0EA7","0EAA-0EAB","0EAD-0EB9","0EBB-0EBD","0EC0-0EC4","0EC6","0EC8-0ECD","0ED0-0ED9","0EDC-0EDF"]},{"name":"Tibetan","ranges":["0F00-0F47","0F49-0F6C","0F71-0F97","0F99-0FBC","0FBE-0FCC","0FCE-0FD4","0FD9-0FDA"]},{"name":"Georgian","ranges":["10A0-10C5","10C7","10CD","10D0-10FF"]},{"name":"Hangul Jamo","ranges":["1100-115E","1161-11FF"]},{"name":"Phonetic Extensions","ranges":["1D00-1D7F"]},{"name":"Latin Extended Additional","ranges":["1E00-1EFF"]},{"name":"Greek Extended","ranges":["1F00-1F15","1F18-1F1D","1F20-1F45","1F48-1F4D","1F50-1F57","1F59","1F5B","1F5D","1F5F-1F7D","1F80-1FB4","1FB6-1FC4","1FC6-1FD3","1FD6-1FDB","1FDD-1FEF","1FF2-1FF4","1FF6-1FFE"]},{"name":"General Punctuation","ranges":["201A","2024","201A","2044"]},{"name":"Currency Symbols","ranges":["20A0-20BF"]},{"name":"Mathematical Operators","ranges":["2217","227A","227B"]},{"name":"CJK Radicals Supplement","ranges":["2E80-2E99","2E9B-2EF3"]},{"name":"Kangxi Radicals","ranges":["2F00-2FD5"]},{"name":"CJK Symbols and Punctuation","ranges":["3001-303D"]},{"name":"Hiragana","ranges":["3041-3096","3099-309F"]},{"name":"Katakana","ranges":["30A0-30FF"]},{"name":"Bopomofo","ranges":["3105-312D"]},{"name":"Hangul Compatibility Jamo","ranges":["3131-3163","3165-318E"]},{"name":"Kanbun","ranges":["3190-319F"]},{"name":"Bopomofo Extended","ranges":["31A0-31B7"]},{"name":"Katakana Phonetic Extensions","ranges":["31F0-31FF"]},{"name":"CJK Compatibility","ranges":["3300-3376","337B-33FE"]},{"name":"CJK Unified Ideographs Extension A","ranges":["3400-4DB5"]},{"name":"CJK Unified Ideographs","ranges":["4E00-534C","534E-534F","5351-9FD5"]},{"name":"Hangul Syllables","ranges":["AC00-D7A3"]},{"name":"CJK Compatibility Ideographs","ranges":["F900-FA6D"]},{"name":"Alphabetic Presentation Forms","ranges":["FB00-FB06","FB13-FB17","FB1D-FB36","FB38-FB3C","FB3E","FB40-FB41","FB43-FB44","FB46-FB4F"]},{"name":"Arabic Presentation Forms-A","ranges":["FB50-FBC1","FBD3-FD3F","FD50-FD8F","FD92-FDC7","FDF0-FDFC"]},{"name":"Combining Half Marks","ranges":["FE20-FE23"]},{"name":"CJK Compatibility Forms","ranges":["FE30-FE4F"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Arabic Presentation Forms-B","ranges":["FE70-FE74","FE76-FEFC"]},{"name":"Halfwidth and Fullwidth Forms","ranges":["FF01-FF9F","FFA1-FFBE","FFC2-FFC7","FFCA-FFCF","FFD2-FFD7","FFDA-FFDC","FFE0-FFE6","FFE8"]}]}');
            var o, s, c = {
                    "@": "＠",
                    "#": "＃",
                    $: "＄",
                    "%": "％",
                    "&": "＆",
                    "=": "＝",
                    "+": "＋",
                    "/": "⁄",
                    "\\": "＼",
                    ";": ";",
                    ":": "˸",
                    ",": "‚",
                    "?": "?",
                    "!": "ǃ",
                    '"': "＂",
                    "<": "≺",
                    ">": "≻",
                    ".": "․",
                    "^": "＾",
                    "{": "｛",
                    "}": "｝",
                    "[": "［",
                    "]": "］",
                    "(": "（",
                    ")": "）",
                    "|": "｜",
                    "*": "∗"
                },
                u = Object.keys(c).map((function(e) {
                    return "\\u".concat(e.charCodeAt(0).toString(16).padStart(4, "0"))
                })).join(""),
                d = new RegExp("[".concat(u, "]"), "g"),
                m = (new RegExp("[^".concat(u, "]"), "g"), Object.keys(c).map((function(e) {
                    return "\\u".concat(c[e].charCodeAt(0).toString(16).padStart(4, "0"))
                })).join("")),
                p = (new RegExp("[".concat(m, "]"), "g"), new RegExp("[^".concat(m, "]"), "g"), o = l, s = r()(o.characterAllowList.map((function(e) {
                    return e.ranges
                }))).map((function(e) {
                    return e.split("-").map((function(e) {
                        return "\\u".concat(e)
                    })).join("-")
                })), new RegExp("[^".concat(m).concat(s.join(""), "]"), "g")),
                g = function(e) {
                    var t = e;
                    return t = (t = (t = (t = (t = (t = t.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\n\t\b]/g, " ")).replace(i.ansiEscapeCodes, "")).replace(i.zeroWidthCharacters, "")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                f = function(e) {
                    var t = e;
                    return t = (t = (t = (t = (t = t.replace(/[\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000\u3164\t\b]/g, " ")).replace(/\n{3,}/g, "\n\n")).replace(/ +/g, " ")).replace(/^(\s)*/g, "")).replace(/(\s)*$/g, "")
                },
                h = function(e, t) {
                    var n = null != t && !0 === t.allowNewlines ? f : g,
                        a = n(function(e) {
                            return e.replace(d, (function(e) {
                                return c.hasOwnProperty(e) ? c[e] : ""
                            }))
                        }(function(e) {
                            return e.replace(p, "")
                        }(n(e))));
                    if ((a.match(/fuck/gi) || []).length > 0) {
                        var r = (new Error).stack;
                        console.warn('Profanity somehow slipped through in sanitize.js! [original: "'.concat(e, '", sanitized: "').concat(a, '", options: "').concat(JSON.stringify(t), '"] ').concat(r))
                    }
                    return a
                },
                v = function(e, t) {
                    return Array.isArray(e) ? e.map((function(e) {
                        return h(e, t)
                    })) : h(e, t)
                }
        }
    }
]);
//# sourceMappingURL=dffc05e17ee32c23420b418b509e203ffe7784a2ddf98dd75e71237c6a566b8c.js.map