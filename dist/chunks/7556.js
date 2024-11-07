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
                m = n(46326),
                d = n(43862),
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
                            return e ? c.createElement(m.Z, {
                                src: e,
                                theme: "greenscreen"
                            }) : c.createElement(d.Z, null)
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
                m = n(34698),
                d = n(69699),
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
                        }, u.createElement(m.Z, {
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
                        }), s), this.state.modalOpen && u.createElement(d.Z, {
                            isOpen: this.state.modalOpen,
                            size: "lg",
                            toggle: this.toggleModal
                        }, u.createElement("div", {
                            className: "modal-header"
                        }, u.createElement("h4", {
                            className: "modal-title"
                        }, u.createElement(g.Z, {
                            icon: this.props.icon
                        }), "  ", this.props.title), u.createElement(m.Z, {
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
                o = n(32981),
                s = n(79655),
                c = n(83505),
                u = n(30381),
                m = n.n(u),
                d = n(39886),
                p = n(35773),
                g = n(95305),
                f = n(58877),
                h = n(34226),
                v = (n(42963), n(43862));
            const E = function(e) {
                var t = e.status;
                return null == t ? l.createElement("div", null) : l.createElement("span", {
                    className: (0, c.iv)({
                        name: "aqta49",
                        styles: "& span{width:15px;height:15px;border-radius:25px;margin-top:2px;margin-right:5px;display:inline-block;}& .active{background-color:var(--status-online);}& .join-me{background-color:var(--status-joinme);}& .busy{background-color:var(--status-busy);}& .ask-me{background-color:var(--status-askme);}& .offline{background-color:grey;}"
                    })
                }, l.createElement("span", {
                    className: t.replace(" ", "-"),
                    title: t
                }))
            };
            var b = n(30751),
                x = n(37858),
                w = n(54546),
                F = n(25062),
                C = n(34698),
                y = n(9669),
                A = n.n(y),
                k = function(e) {
                    var t = e.userId,
                        n = e.bioLinks.map((function(e) {
                            return e || ""
                        }));
                    return {
                        type: "UPDATE_BIO_LINKS",
                        payload: A().put(window.apiUrl("/api/1/users/".concat(t)), {
                            bioLinks: n
                        })
                    }
                },
                B = n(65847),
                D = n(80873),
                Z = n(62437),
                N = n(22202),
                I = n(5513);
            const z = function(e) {
                var t, n, a, r, i = e.userId,
                    s = (0, Z.GR)(i),
                    u = s.data,
                    m = s.refetch,
                    d = ((0, D.pc)(), (0, N.XC)().data),
                    p = (0, o.I0)(),
                    g = (null == d ? void 0 : d.id) === i,
                    f = l.useState(null !== (t = null == u || null === (n = u.bio) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
                    h = (0, w.Z)(f, 2),
                    v = h[0],
                    E = h[1],
                    b = l.useState(!1),
                    x = (0, w.Z)(b, 2),
                    y = x[0],
                    k = x[1],
                    z = l.useState(null !== (a = null == u ? void 0 : u.bio) && void 0 !== a ? a : ""),
                    U = (0, w.Z)(z, 2),
                    O = U[0],
                    S = U[1],
                    L = l.useState(null !== (r = null == u ? void 0 : u.bio) && void 0 !== r ? r : ""),
                    j = (0, w.Z)(L, 2),
                    R = j[0],
                    _ = j[1],
                    M = l.useState(!1),
                    T = (0, w.Z)(M, 2),
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
                    S(null !== (e = null == u ? void 0 : u.bio) && void 0 !== e ? e : ""), _(null !== (t = null == u ? void 0 : u.bio) && void 0 !== t ? t : ""), K(!1), E(null !== (n = null == u || null === (a = u.bio) || void 0 === a ? void 0 : a.length) && void 0 !== n ? n : 0), k(!1)
                }), [u]);
                if (g) {
                    var H = v > 512,
                        $ = O.split("\n"),
                        J = (0, c.iv)("&{font-size:11pt;overflow:auto;}@media all and (min-width: 1700px){&{width:", P ? "32em" : "31em", ";height:17.4em;", y ? (0, c.iv)({
                            name: "3pim0v",
                            styles: "overflow:inherit;margin-bottom:2em"
                        }) : "", ";}textarea{width:", P ? "32em" : "31em", ";font-size:11pt;line-height:140%;height:16.9em;}}@media all and (max-width: 1700px){&{font-size:8pt;width:32em;height:17.6em;", y ? (0, c.iv)({
                            name: "1mz3b0m",
                            styles: "overflow:inherit;margin-bottom:4em"
                        }) : "", ";}textarea{font-size:8pt;line-height:140%;}}", ""),
                        q = l.createElement("div", null, $.map((function(e, t) {
                            return l.createElement("p", {
                                key: "bio-line-".concat(t)
                            }, e || l.createElement("span", null, " "))
                        })));
                    return y ? l.createElement("div", {
                        className: J,
                        ref: G
                    }, l.createElement("textarea", {
                        onChange: function(e) {
                            var t = e.target.value;
                            S(void 0 === t ? "" : t)
                        },
                        onKeyUp: function(e) {
                            var t = e.target.value;
                            E((void 0 === t ? "" : t).length)
                        },
                        className: "form-control ".concat((0, c.iv)({
                            name: "utehjx",
                            styles: "resize:none"
                        })),
                        value: null != O ? O : "Tell us about yourself"
                    }), l.createElement(F.Z, {
                        color: H ? "danger" : "info",
                        className: "float-right"
                    }, v, " / ", 512), " ", l.createElement(C.Z, {
                        onClick: function() {
                            k(!1), S(R)
                        }
                    }, "Cancel"), l.createElement(C.Z, {
                        onClick: function() {
                            var e = (0, B.Nw)(O, {
                                allowNewlines: !0
                            });
                            p(g ? (0, I._W)({
                                userId: i,
                                data: {
                                    bio: e
                                }
                            }) : function(e) {
                                var t = e.userId,
                                    n = e.bio;
                                return {
                                    type: "UPDATE_BIO",
                                    payload: A().put(window.apiUrl("/api/1/users/".concat(t)), {
                                        bio: n
                                    })
                                }
                            }({
                                userId: i,
                                bio: e
                            })), k(!1), S(e), _(e), m()
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
                            k(!0)
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
                    className: (0, c.iv)({
                        name: "xpha89",
                        styles: "&{max-height:20em;width:30em;overflow-y:auto;}"
                    }),
                    ref: G
                }, X)
            };
            var U = n(15861),
                O = n(64687),
                S = n.n(O),
                L = n(25402);
            const j = function(e) {
                var t, n, a, r, i = e.userId,
                    s = e.index,
                    c = (0, Z.GR)(i),
                    u = c.data,
                    m = c.refetch,
                    d = ((0, D.pc)(), (0, N.XC)().data),
                    p = (null == d ? void 0 : d.id) === i,
                    g = (0, o.I0)(),
                    h = l.useState(null !== (t = null == u || null === (n = u.bioLinks) || void 0 === n ? void 0 : n[s]) && void 0 !== t ? t : ""),
                    v = (0, w.Z)(h, 2),
                    E = v[0],
                    b = v[1],
                    x = l.useState(!1),
                    F = (0, w.Z)(x, 2),
                    y = F[0],
                    A = F[1],
                    B = l.useState(E),
                    I = (0, w.Z)(B, 2),
                    z = I[0],
                    O = I[1],
                    j = l.useState(!0),
                    R = (0, w.Z)(j, 2),
                    _ = R[0],
                    M = R[1],
                    T = null !== (a = null == u ? void 0 : u.bioLinks) && void 0 !== a ? a : [],
                    P = function() {
                        A(!0), M(!1)
                    },
                    K = function() {
                        var e = (0, U.Z)(S().mark((function e() {
                            var t;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(T))[s] = E, e.next = 4, g(k({
                                            userId: i,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        A(!1), O(E), m();
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
                        var e = (0, U.Z)(S().mark((function e() {
                            var t;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(T))[s] = "", e.next = 4, g(k({
                                            userId: i,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        A(!1), b(""), O(""), m();
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
                return p ? y ? l.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, l.createElement("div", {
                    className: "input-group"
                }, l.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return b(""), void M(!1);
                        try {
                            var a = new URL(n);
                            b(n), M("https:" !== a.protocol && "http:" !== a.protocol)
                        } catch (e) {
                            b(n), M(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === _ && K()
                    },
                    className: "form-control",
                    value: E
                }), l.createElement("div", {
                    className: "input-group-append"
                }, l.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, l.createElement(L.QZ, {
                    url: E,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), l.createElement(C.Z, {
                    onClick: function() {
                        A(!1), b(z)
                    }
                }, "Cancel"), l.createElement(C.Z, {
                    onClick: K,
                    disabled: _,
                    color: "primary"
                }, "Ok")) : s > 0 && null == T[s - 1] ? l.createElement("div", null) : !(s > 0) || "" !== T[s] && null != T[s] || "" !== T[s - 1] && null != T[s - 1] ? null == T[s] || "" === T[s] ? l.createElement("div", null, l.createElement("div", {
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
                }, l.createElement(f.Z, {
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
                }, T[s]), l.createElement(C.Z, {
                    className: "btn btn-outline-danger",
                    "aria-label": "Close",
                    onClick: G
                }, l.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : l.createElement("div", null) : null == T[s] || "" === T[s] ? null : l.createElement("button", {
                    type: "button",
                    className: "btn btn-secondary mt-2 me-2",
                    onClick: (r = T[s], function() {
                        var e;
                        null === (e = window.open(r, "_blank")) || void 0 === e || e.focus()
                    })
                }, l.createElement(L.QZ, {
                    url: T[s],
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                }))
            };
            var R = n(17219),
                _ = n(21464),
                M = n(39758),
                T = n(8256),
                P = n(28055),
                K = n(38824),
                G = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "ADD_LANGUAGE_TAGS",
                        payload: A().post(window.apiUrl("/api/1/users/".concat(t, "/addTags")), {
                            tags: n
                        })
                    }
                },
                H = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "DELETE_LANGUAGE_TAGS",
                        payload: A().post(window.apiUrl("/api/1/users/".concat(t, "/removeTags")), {
                            tags: n
                        })
                    }
                },
                $ = "language_";
            const J = function(e) {
                var t, n, a, r = e.userId,
                    i = (0, Z.GR)(r),
                    s = i.data,
                    u = i.refetch,
                    m = (0, R.y)().data,
                    d = ((0, D.pc)(), (0, N.XC)().data),
                    p = (0, o.I0)(),
                    g = (null == d ? void 0 : d.id) === r,
                    h = null !== (t = null == m || null === (n = m.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : _.O,
                    v = l.useState(!1),
                    E = (0, w.Z)(v, 2),
                    b = E[0],
                    x = E[1],
                    F = l.useState(!1),
                    y = (0, w.Z)(F, 2),
                    A = y[0],
                    k = y[1],
                    B = l.useState(null),
                    I = (0, w.Z)(B, 2),
                    z = I[0],
                    O = I[1],
                    L = function(e) {
                        var t = e.target.value;
                        O(t)
                    },
                    j = function(e) {
                        return e = e.replace($, ""), "[ ".concat(e, " ] ").concat(h[e])
                    },
                    J = function() {
                        O(null), x(!1)
                    },
                    q = function() {
                        var e = (0, U.Z)(S().mark((function e() {
                            var t;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = $ + z, e.next = 3, p(G({
                                            userId: r,
                                            tags: [t]
                                        }));
                                    case 3:
                                        J(), u();
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
                        var e = (0, U.Z)(S().mark((function e(t) {
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, p(H({
                                            userId: r,
                                            tags: [t]
                                        }));
                                    case 2:
                                        J(), u();
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
                        return e.indexOf($) >= 0
                    })),
                    Q = X.length < 3;
                if (!g) return l.createElement("div", {
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
                    }, j(e))))
                }))));
                var Y = l.createElement("div", null, X.map((function(e, t) {
                        return l.createElement("div", {
                            key: "stored-tags-".concat(t)
                        }, l.createElement(f.Z, {
                            className: "p-2 ".concat((0, c.iv)({
                                name: "1d3w5wq",
                                styles: "width:100%"
                            }))
                        }, l.createElement("div", {
                            className: "btn btn-outline-light"
                        }, j(e)), l.createElement(C.Z, {
                            className: "btn btn-outline-danger ".concat((0, c.iv)({
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
                            x(!0)
                        }
                    }, "Add Language")),
                    ee = l.createElement("div", null, l.createElement("div", {
                        className: "w-100 p-2"
                    }, l.createElement(M.Z, {
                        drop: "right",
                        className: "mb-2 w-100",
                        isOpen: A,
                        toggle: function() {
                            k(!A)
                        }
                    }, l.createElement(C.Z, {
                        color: "light",
                        id: "caret"
                    }, z && j(z) || "Select Language"), l.createElement(T.Z, {
                        caret: !0,
                        color: "secondary"
                    }), l.createElement(P.Z, {
                        flip: !0,
                        color: "light",
                        style: {
                            overflowY: "scroll",
                            maxHeight: "300px"
                        }
                    }, Object.keys(h).map((function(e, t) {
                        return l.createElement(K.Z, {
                            key: "dropdown-langs".concat(t),
                            value: e,
                            onClick: L
                        }, j(e))
                    })))), l.createElement("div", {
                        className: "d-flex flex-row justify-content-between"
                    }, l.createElement(C.Z, {
                        onClick: J
                    }, "Cancel"), l.createElement(C.Z, {
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
                }, " Languages "), Y, b && Q && ee, !b && Q && V)
            };
            var q = n(72528),
                W = n(98353),
                X = n(42619);
            const Q = function(e) {
                var t, n = e.user,
                    a = (0, D.v$)().fetchUser,
                    r = (0, o.I0)(),
                    i = (0, l.useState)(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""),
                    s = (0, w.Z)(i, 2),
                    c = s[0],
                    u = s[1],
                    m = (0, l.useState)(!1),
                    d = (0, w.Z)(m, 2),
                    p = d[0],
                    g = d[1],
                    f = (0, l.useRef)(null),
                    h = (0, o.v9)((function(e) {
                        return e.currentUser.addNote.isRejected
                    })),
                    v = (0, o.v9)((function(e) {
                        return e.currentUser.addNote.error
                    }));
                (0, l.useEffect)((function() {
                    f.current.style.height = "0px";
                    var e = f.current.scrollHeight;
                    f.current.style.height = "".concat(e, "px")
                }), [c]);
                var E = function() {
                        var e = (0, U.Z)(S().mark((function e(t) {
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (p) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return f.current.blur(), t && t.stopPropagation(), g(!1), e.next = 7, r((0, I.AL)({
                                            targetUserId: n.id,
                                            note: c
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
                    b = function() {
                        var e = (0, U.Z)(S().mark((function e() {
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f.current.blur(), u(""), e.next = 4, r((0, I.lj)({
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
                    x = function() {
                        var e = (0, U.Z)(S().mark((function e() {
                            var t;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!h) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, a();
                                    case 3:
                                        return e.abrupt("return", u(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""));
                                    case 4:
                                        return e.abrupt("return", E());
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
                        p || (e.stopPropagation(), g(!0), setTimeout((function() {
                            f.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Note",
                    tabIndex: 0
                }, l.createElement(ne, {
                    contenteditable: !0,
                    ref: f,
                    value: c,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 256 || u(n)
                    },
                    onBlur: x,
                    onKeyPress: function(e) {
                        if ("Enter" !== e.key || e.shiftKey) {
                            var t = f.current.scrollHeight > 80;
                            "Enter" === e.key && e.shiftKey && t && e.preventDefault()
                        } else E(e)
                    },
                    placeholder: "Click to add a note!",
                    "aria-label": "Note input field"
                }), "" !== c && p && l.createElement(V, null, c.length, "/256"), l.createElement(ae, {
                    onClick: b,
                    size: "1x",
                    icon: X.$,
                    "aria-label": "delete note"
                })), h && l.createElement(te, null, "Note Changes Failed: ", l.createElement("br", null), v))
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
                ee = (0, a.Z)(h.X2, {
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
                ae = (0, a.Z)(h.$1, {
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
                    r = (0, D.Tu)(),
                    i = (r._, r.fetchUser),
                    s = (0, o.I0)(),
                    c = l.useState(null !== (t = null == n ? void 0 : n.statusDescription) && void 0 !== t ? t : ""),
                    u = (0, w.Z)(c, 2),
                    m = u[0],
                    d = u[1],
                    p = l.useState(!1),
                    g = (0, w.Z)(p, 2),
                    f = g[0],
                    h = g[1],
                    v = l.useRef(null),
                    E = ((0, o.v9)((function(e) {
                        return e.currentUser.databaseUser
                    })), l.useCallback((function(e) {
                        var t, a, r;
                        null !== (t = v.current) && void 0 !== t && t.contains(e.target) || (null === (a = v.current) || void 0 === a || a.blur(), d(null !== (r = null == n ? void 0 : n.statusDescription) && void 0 !== r ? r : ""), h(!1))
                    }), [v.current]));
                l.useEffect((function() {
                    return f ? window.addEventListener("click", E) : window.removeEventListener("click", E),
                        function() {
                            window.removeEventListener("click", E)
                        }
                }), [f]), l.useEffect((function() {
                    var e;
                    d(null !== (e = null == n ? void 0 : n.statusDescription) && void 0 !== e ? e : "")
                }), [null == n ? void 0 : n.statusDescription]);
                var b = function() {
                    var e = (0, U.Z)(S().mark((function e(t) {
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (f) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    v.current.blur(), t.stopPropagation(), h(!1), e.next = 10;
                                    break;
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12, s((0, I._W)({
                                        userId: n.id,
                                        data: {
                                            statusDescription: m
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
                        f || (e.stopPropagation(), h(!0), setTimeout((function() {
                            v.current.focus()
                        })))
                    },
                    role: "button",
                    title: "Edit Status",
                    tabIndex: 0
                }, f ? l.createElement(ce, {
                    ref: v,
                    value: m,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 32 || d(n)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && b(e)
                    },
                    placeholder: "Set a new status!"
                }) : l.createElement("div", null, m.length > 0 ? m : l.createElement(ue, null, "Set a status")), l.createElement(me, {
                    onClick: b,
                    size: "1x",
                    icon: f ? le.LE : ie.Iw
                })) : l.createElement("p", {
                    className: "statusDescription"
                }, l.createElement("small", null, n ? n.statusDescription : ""))
            };
            var se = (0, a.Z)(h.X2, {
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
                me = (0, a.Z)(h.$1, {
                    target: "e16hr4le0"
                })("position:relative;right:-100px;transition:all 0.2s ease-in-out;color:white;&:hover{color:", (function(e) {
                    return "check" === e.name ? "var(--status-online)" : "var(--bs-cyan)"
                }), ";}");
            var de = (0, a.Z)("div", {
                target: "ek6wv4d0"
            })("margin:", (function(e) {
                return "huge" === e.size ? "auto" : "auto 0px auto 60px"
            }), ";pointer-events:none;");
            const pe = function(e) {
                var t, n = e.userId,
                    a = e.size,
                    o = e.showLocation,
                    u = e.showExtras,
                    w = e.showInvalid,
                    F = e.isUserHidden,
                    C = e.openLinksInNewTab,
                    y = void 0 !== C && C,
                    A = (0, Z.GR)(n),
                    k = A.data,
                    B = A.isFetching,
                    I = A.isError,
                    U = A.error,
                    O = (0, N.IB)().data,
                    S = (0, D.pc)(),
                    L = (0, D.JZ)().playerModerations,
                    R = L.mute.users,
                    _ = L.block.users;
                if (!n) return null;
                if (w && I) return l.createElement(d.Z, {
                    className: (0, c.iv)({
                        name: "1flzyeq",
                        styles: "padding:10px 20px;border:2px solid var(--level-visitor)"
                    })
                }, l.createElement(p.Z, null, l.createElement("h6", null, "ID: ", n)), l.createElement(p.Z, null, U.status, ":", null === (t = U.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message));
                if (!k || B) return l.createElement(v.Z, null);
                var M = (0, re.FR)({
                        tags: k.tags
                    }),
                    T = k.isFriend,
                    P = new Set(k.tags).has("admin_moderator"),
                    K = n === (null == O ? void 0 : O.id),
                    G = new Set(_).has(n),
                    H = new Set(R).has(n),
                    $ = ["usercard"];
                $.push("friend-".concat(T)), $.push("size-".concat(a)), $.push("state-".concat(k.state)), $.push("level-".concat(M));
                var X = "Offline";
                if ("active" === k.state && (X = "Active"), "online" === k.state && (X = "In-World"), "traveling" === k.location && (X = "Loading a world"), null != k.error) return l.createElement("div", null);
                var Y = !!k.profilePicOverride,
                    V = k.profilePicOverride || k.currentAvatarThumbnailImageUrl;
                return l.createElement("div", {
                    className: (0, c.iv)({
                        name: "ung7df",
                        styles: "&{text-align:left;}& .usercard{padding:10px;margin-bottom:5px;}& .card{background:#242a31;}& .card .user-img{float:left;margin:7px;}& .muteIcons{position:absolute;top:0;left:0;}& .muteIcons .btn{font-size:xx-small;}& .user-info{max-width:calc(100% - 120px);min-width:100px;}& .user-img{width:90px;height:68px;max-width:100%;}& .size-wide .user-img-16x9{margin-top:0.3em;margin-bottom:0.3em;}& .user-img-16x9{width:128px;height:calc(128px * (9 / 16));max-width:100%;}& .info-button{position:absolute;top:5px;right:5px;}& h4{margin-bottom:2px;}& a{font-weight:bold;}& p{margin-bottom:0.2em;}& .p-l-0{padding-left:0px!important;padding-right:0px!important;}& .level-administrator,& .level-moderator{border:2px solid var(--developer);}& .level-visitor{border:2px solid var(--level-visitor);}& .level-new{border:2px solid var(--level-new);}& .level-user{border:2px solid var(--level-user);}& .level-known{border:2px solid var(--level-known);}& .level-trusted{border:2px solid var(--level-trusted);}& .state-online .user-img{border:2px solid var(--bs-green);}& .state-active .user-img{border:2px solid var(--bs-yellow);}& .state-online .user-img-16x9{border:2px solid var(--bs-green);}& .state-active .user-img-16x9{border:2px solid var(--bs-yellow);}& .state-active{opacity:0.9;}& .state-offline{opacity:0.7;}& .size-huge .user-img{width:285px;height:calc(285px * 0.75);}& .size-huge .user-img-16x9{width:288px;height:calc(288px * (9 / 16));}& .size-huge .muteIcons{display:none;}& .size-huge .user-bio,& .size-huge .user-bio-links{width:285px;}& .size-huge .user-bio textarea{min-height:200px;}& .size-slim .user-info{max-width:100%;width:100%;margin-left:10px;margin-right:10px;}& .size-slim .user-img-16x9{width:176px;height:calc(176px * (9 / 16));margin-bottom:0.5em;}& .size-wide .muteIcons{top:17px;left:4px;}& .size-wide{padding-top:2px;padding-bottom:2px;}& .size-wide .user-img{width:60px;height:calc(60px * 0.75);margin-left:115px;}& .size-wide .user-img-16x9{width:calc(45px * (16 / 9));height:45px;margin-left:95px;}& .size-wide .user-info{margin-left:0.7em;}& .size-wide .statusDescription,& .size-wide .offlineOrOnlineOrWhatever{display:none;}& .size-wide .user-info{margin:auto 0;h6,p{margin-bottom:0;}}& .user-languages{width:100%;}& .language-display-public{width:100%;text-align:center;vertical-align:middle;padding:0.5rem 0.75rem;border-radius:0.25rem;border-color:#f8f9fa;border:1px solid;}& .profile-link{margin-left:-7px;margin-right:-7px;padding-top:0.5rem;}& .extra-margin{margin-left:10px!important;}@media (max-width: 921px){.large-display-only{display:none;}}@media (max-width: 991px) and (min-width: 921px){.small-display-only{display:none;}}@media (max-width: 1578px) and (min-width: 992px){.large-display-only-2{display:none;}}@media (min-width: 1579px){.small-display-only-2{display:none;}}.ribbon{height:70px;left:-2px;overflow:hidden;position:absolute;text-align:right;top:-5px;width:75px;z-index:1;}.ribbon span{background:#8f0808;background:linear-gradient(#f70505 0%, #8f0808 100%);box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);color:#fff;display:block;font-size:0.8rem;font-weight:bold;left:-25px;left:-29px;line-height:22px;position:absolute;text-align:center;text-transform:uppercase;top:17px;transform:rotate(315deg);width:100px;}.ribbon span::before{border-bottom:3px solid transparent;border-left:3px solid #8f0808;border-right:3px solid transparent;border-top:3px solid #8f0808;content:'';left:0px;top:100%;position:absolute;z-index:-1;}.ribbon span::after{border-bottom:3px solid transparent;border-left:3px solid transparent;border-right:3px solid #8f0808;border-top:3px solid #8f0808;content:'';position:absolute;right:0%;top:100%;z-index:-1;}.ribbon--huge{height:93px;left:-7px;top:-7px;width:93px;}.ribbon--huge span{font-size:16px;left:-29px;line-height:32px;width:125px;}"
                    })
                }, l.createElement(d.Z, {
                    className: $.join(" ")
                }, S && F && l.createElement("div", {
                    className: "ribbon ".concat("huge" === a ? "ribbon--huge" : "")
                }, l.createElement("span", null, "Hidden")), l.createElement(p.Z, {
                    className: "mx-0 ".concat("slim" === a && "flex-column")
                }, l.createElement(g.Z, {
                    md: "slim" === a ? 12 : 3,
                    className: "".concat("slim" === a && "px-0")
                }, "huge" === a && l.createElement(g.Z, {
                    md: 12
                }, l.createElement(p.Z, null, l.createElement(g.Z, {
                    className: "p-0"
                }, S && F && l.createElement("div", {
                    className: "d-flex align-items-center position-absolute w-100 h-100"
                }, l.createElement(de, {
                    size: a
                }, l.createElement(h.$1, {
                    icon: i.Aq,
                    size: "5x"
                }))), l.createElement(s.rU, {
                    to: "/home/user/".concat(n),
                    title: k.state,
                    target: y ? "_blank" : void 0
                }, Y ? l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img-16x9 ".concat((0, c.iv)({
                        name: "mzj02v",
                        styles: "margin-left:0.5em;margin-right:0.5em"
                    })),
                    src: V
                }) : l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img",
                    src: V
                })), l.createElement("div", {
                    className: "muteIcons"
                }, (!T || G || H) && l.createElement(f.Z, null, l.createElement(b.Z, {
                    visible: !P && !S && !K,
                    userId: n,
                    showText: !1
                }), l.createElement(x.Z, {
                    visible: !P && !S && !K,
                    userId: n,
                    showText: !1
                }))))), "huge" === a && l.createElement(p.Z, {
                    className: "large-display-only large-display-only-2"
                }, l.createElement(g.Z, {
                    className: "p-0",
                    md: "12"
                }, l.createElement("div", null, l.createElement(J, {
                    userId: n
                }))))), !("huge" === a) && l.createElement("div", null, S && F && l.createElement("div", {
                    className: "d-flex align-items-center position-absolute h-100"
                }, l.createElement(de, {
                    size: a
                }, l.createElement(h.$1, {
                    icon: i.Aq,
                    size: "2x"
                }))), l.createElement(s.rU, {
                    to: "/home/user/".concat(n),
                    title: k.state,
                    target: y ? "_blank" : void 0
                }, Y ? l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img-16x9 ".concat("slim" !== a && (0, c.iv)({
                        name: "mzj02v",
                        styles: "margin-left:0.5em;margin-right:0.5em"
                    })),
                    src: V
                }) : l.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img",
                    src: V
                })), l.createElement("div", {
                    className: "muteIcons"
                }, (!T || G || H) && l.createElement(f.Z, null, l.createElement(b.Z, {
                    visible: !P && !S && !K,
                    userId: n,
                    showText: !1
                }), l.createElement(x.Z, {
                    visible: !P && !S && !K,
                    userId: n,
                    showText: !1
                }))))), l.createElement(g.Z, {
                    md: "slim" === a ? 12 : 8,
                    className: "user-info ".concat((0, c.iv)({
                        name: "182ot4e",
                        styles: "margin-left:1.5em"
                    }))
                }, l.createElement("h6", null, l.createElement(s.rU, {
                    to: "/home/user/".concat(n),
                    target: y ? "_blank" : void 0
                }, l.createElement(E, {
                    status: k.status
                }), k.displayName)), l.createElement("p", {
                    className: "offlineOrOnlineOrWhatever"
                }, l.createElement("em", null, X)), "huge" === a && l.createElement(p.Z, {
                    className: "small-display-only small-display-only-2"
                }, l.createElement(g.Z, {
                    className: "p-0",
                    md: "12"
                }, l.createElement("div", null, l.createElement(J, {
                    userId: n
                })))), "huge" === a && l.createElement("div", null, l.createElement("div", {
                    className: "user-bio p-l-0"
                }, l.createElement(z, {
                    userId: n
                })), l.createElement("div", {
                    className: "user-bio-links p-2 p-l-0"
                }, l.createElement(j, {
                    userId: n,
                    index: 0
                }), l.createElement(j, {
                    userId: n,
                    index: 1
                }), l.createElement(j, {
                    userId: n,
                    index: 2
                }))), "offline" === k.state && k.last_login && l.createElement("p", {
                    className: "lastLogin"
                }, l.createElement("small", null, m()(k.last_login).fromNow())), "huge" === a && l.createElement(l.Fragment, null, l.createElement(oe, {
                    user: k,
                    isEditable: K || !1
                }), l.createElement("br", null), l.createElement("h4", null, "Note"), l.createElement("br", null), l.createElement(Q, {
                    user: k,
                    isEditable: !0
                }))), l.createElement(g.Z, {
                    md: "slim" === a ? 12 : 1
                }, l.createElement(W.Z, {
                    userId: n
                }))), "online" === k.state && o && l.createElement("div", null, k.location && l.createElement(q.Z, {
                    location: k.location,
                    userId: n,
                    currentUser: O,
                    size: "normal"
                })), K && u && l.createElement("div", {
                    className: "profile-link"
                }, l.createElement(s.rU, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    target: y ? "_blank" : void 0
                }, l.createElement(h.$1, {
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
                m = n(34226),
                d = n(9669),
                p = n.n(d),
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
                    d = e.showDetails,
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
                }, null != j && r.createElement(c.Z, null, M.length, " ", r.createElement(m.$1, {
                    icon: a.FV,
                    title: "Number of friends in instance"
                }), " "), null != x && r.createElement(c.Z, null, x, "/", w), " ", r.createElement(o.rU, {
                    to: "/home/launch?worldId=".concat(L.id, "&instanceId=").concat(z),
                    title: L.name,
                    target: "_blank"
                }, L.name, " : ", r.createElement(v.Z, {
                    region: K,
                    imageSize: "16px"
                }), " ", R, "  ")), d && r.createElement("div", null, r.createElement("p", null, r.createElement("small", null, L.description))), r.createElement("div", {
                    className: "clearfix"
                }), n && r.createElement("div", {
                    className: "location-users"
                }, r.createElement(u.Z, null, T)))))
            }
        },
        37858: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var a = n(54546),
                r = (n(4965), n(3163)),
                i = n(67294),
                l = n(34698),
                o = n(34226),
                s = n(74792),
                c = n(80873),
                u = n(68800);
            const m = function(e) {
                var t = e.userId,
                    n = e.visible,
                    m = e.showText,
                    d = (0, u.HM)(),
                    p = (0, a.Z)(d, 1)[0],
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
                }), m && i.createElement("span", null, " Unblock")) : i.createElement(l.Z, {
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
                }), m && i.createElement("span", null, " Block"))
            }
        },
        30751: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var a = n(54546),
                r = (n(4965), n(65322)),
                i = n(89148),
                l = n(67294),
                o = n(34698),
                s = n(34226),
                c = n(74792),
                u = n(80873),
                m = n(68800);
            const d = function(e) {
                var t = e.userId,
                    n = e.visible,
                    d = e.showText,
                    p = void 0 !== d && d,
                    g = (0, m.HM)(),
                    f = (0, a.Z)(g, 1)[0],
                    h = (0, m.Qq)(),
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
                m = new RegExp("[".concat(u, "]"), "g"),
                d = (new RegExp("[^".concat(u, "]"), "g"), Object.keys(c).map((function(e) {
                    return "\\u".concat(c[e].charCodeAt(0).toString(16).padStart(4, "0"))
                })).join("")),
                p = (new RegExp("[".concat(d, "]"), "g"), new RegExp("[^".concat(d, "]"), "g"), o = l, s = r()(o.characterAllowList.map((function(e) {
                    return e.ranges
                }))).map((function(e) {
                    return e.split("-").map((function(e) {
                        return "\\u".concat(e)
                    })).join("-")
                })), new RegExp("[^".concat(d).concat(s.join(""), "]"), "g")),
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
                            return e.replace(m, (function(e) {
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
//# sourceMappingURL=f25cefa05a3ae67dbb1a8fdcf11824f57feaf7105a38afc5dc51a580d214ff31.js.map