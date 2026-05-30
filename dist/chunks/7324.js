"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7324], {
        24834(e, t, n) {
            n.d(t, {
                A: () => w
            });
            var r = n(23029),
                a = n(92901),
                l = n(85501),
                i = n(34441),
                o = n(53954),
                s = n(84777),
                c = n(96540),
                u = n(6376),
                d = n(59040),
                m = n(25538),
                p = n(69266),
                f = n(72505),
                h = n.n(f),
                g = function(e) {
                    var t = e.userId;
                    return {
                        type: "LOAD_MODREPORT_USER",
                        payload: h().get(window.apiUrl("/api/1/users/".concat(t)), {
                            headers: {
                                "Cache-Control": "no-cache"
                            }
                        })
                    }
                };

            function v(e) {
                var t = b();
                return function() {
                    var n, r = (0, o.A)(e);
                    if (t) {
                        var a = (0, o.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, i.A)(this, n)
                }
            }

            function b() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (b = function() {
                    return !!e
                })()
            }
            var x = function(e) {
                    (0, l.A)(n, e);
                    var t = v(n);

                    function n() {
                        return (0, r.A)(this, n), t.apply(this, arguments)
                    }
                    return (0, a.A)(n, [{
                        key: "userObject",
                        value: function() {
                            return this.props.preloadUser || this.props.userObject
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            null == this.props.preloadUser && this.props.dispatch(g({
                                userId: this.props.userId
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            null == this.props.preloadUser && (this.props.error || this.props.loading || this.props.userObject && this.props.userObject.id === this.props.userId || this.props.dispatch(g({
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
                            return e ? c.createElement(d.A, {
                                src: e,
                                theme: "greenscreen"
                            }) : c.createElement(m.A, null)
                        }
                    }]), n
                }(c.Component),
                E = (0, u.Ng)(function(e) {
                    return {
                        userObject: e.modReport.userObject,
                        loading: e.modReport.loading,
                        error: e.modReport.error
                    }
                })(x);
            const w = (0, u.Ng)(function(e) {
                return {
                    isMod: e.currentUser.isMod
                }
            })(function(e) {
                var t = e.isMod,
                    n = e.userId,
                    r = e.userObject,
                    a = e.tiny;
                return t && c.createElement(p.A, {
                    icon: s.kt,
                    tiny: a
                }, c.createElement(E, {
                    userId: n,
                    preloadUser: r
                }))
            })
        },
        69266(e, t, n) {
            n.d(t, {
                A: () => v
            });
            var r = n(23029),
                a = n(92901),
                l = n(9417),
                i = n(85501),
                o = n(34441),
                s = n(53954),
                c = n(19179),
                u = n(96540),
                d = n(30104),
                m = n(25423),
                p = n(17535),
                f = n(6324);

            function h(e) {
                var t = g();
                return function() {
                    var n, r = (0, s.A)(e);
                    if (t) {
                        var a = (0, s.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, o.A)(this, n)
                }
            }

            function g() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (g = function() {
                    return !!e
                })()
            }
            const v = function(e) {
                (0, i.A)(n, e);
                var t = h(n);

                function n(e) {
                    var a;
                    return (0, r.A)(this, n), (a = t.call(this, e)).state = {
                        modalOpen: !1
                    }, a.toggleModal = a.toggleModal.bind((0, l.A)(a)), a
                }
                return (0, a.A)(n, [{
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
                        }, u.createElement(d.A, {
                            "aria-label": this.props.title || "Open Modal",
                            onClick: this.toggleModal,
                            className: "info-button ".concat(a, " text-white"),
                            outline: l,
                            color: i,
                            size: o ? "sm" : "md"
                        }, u.createElement(f.A, {
                            icon: this.props.icon,
                            color: "white",
                            size: o ? "xs" : "1x"
                        }), s), this.state.modalOpen && u.createElement(m.A, {
                            isOpen: this.state.modalOpen,
                            size: "lg",
                            toggle: this.toggleModal
                        }, u.createElement("div", {
                            className: "modal-header"
                        }, u.createElement("h4", {
                            className: "modal-title"
                        }, u.createElement(f.A, {
                            icon: this.props.icon
                        }), "  ", this.props.title), u.createElement(d.A, {
                            "aria-label": "Close Modal",
                            className: "close",
                            onClick: this.toggleModal
                        }, u.createElement(f.A, {
                            icon: c.GR
                        }))), u.createElement(p.A, null, this.props.children)))
                    }
                }]), n
            }(u.Component)
        },
        59362(e, t, n) {
            n.d(t, {
                A: () => pe
            });
            var r = n(70129),
                a = n(14190),
                l = n(56967),
                i = n(96540),
                o = n(56822),
                s = n(95093),
                c = n.n(s),
                u = n(84976),
                d = n(74758),
                m = n(5826),
                p = n(39704),
                f = n(77365),
                h = n(15033),
                g = n(25538),
                v = n(15902),
                b = n(6376),
                x = n(16477),
                E = n(30104),
                w = n(72505),
                A = n.n(w),
                y = function(e) {
                    var t = e.userId,
                        n = e.bioLinks.map(function(e) {
                            return e || ""
                        });
                    return {
                        type: "UPDATE_BIO_LINKS",
                        payload: A().put(window.apiUrl("/api/1/users/".concat(t)), {
                            bioLinks: n
                        })
                    }
                },
                k = n(89524),
                N = n(194),
                I = n(71957),
                z = n(13951),
                C = n(558);
            const U = function(e) {
                var t, n, r, a, l = e.userId,
                    s = (0, I.vf)(l),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, N.Om)(), (0, z.P2)().data),
                    m = (0, b.wA)(),
                    p = (null == d ? void 0 : d.id) === l,
                    f = i.useState(null !== (t = null == c || null === (n = c.bio) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
                    h = (0, v.A)(f, 2),
                    g = h[0],
                    w = h[1],
                    y = i.useState(!1),
                    U = (0, v.A)(y, 2),
                    O = U[0],
                    _ = U[1],
                    S = i.useState(null !== (r = null == c ? void 0 : c.bio) && void 0 !== r ? r : ""),
                    M = (0, v.A)(S, 2),
                    L = M[0],
                    j = M[1],
                    T = i.useState(null !== (a = null == c ? void 0 : c.bio) && void 0 !== a ? a : ""),
                    D = (0, v.A)(T, 2),
                    H = D[0],
                    R = D[1],
                    P = i.useState(!1),
                    B = (0, v.A)(P, 2),
                    G = B[0],
                    K = B[1],
                    W = i.useRef(null);
                i.useEffect(function() {
                    var e = W.current;
                    if (e) {
                        var t = e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
                        G !== t && K(t)
                    }
                }, [L]), i.useEffect(function() {
                    var e, t, n, r;
                    j(null !== (e = null == c ? void 0 : c.bio) && void 0 !== e ? e : ""), R(null !== (t = null == c ? void 0 : c.bio) && void 0 !== t ? t : ""), K(!1), w(null !== (n = null == c || null === (r = c.bio) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0), _(!1)
                }, [c]);
                if (p) {
                    var q = g > 512,
                        F = L.split("\n"),
                        $ = (0, o.AH)("&{font-size:11pt;overflow:auto;}@media all and (min-width: 1700px){&{width:", G ? "32em" : "31em", ";height:17.4em;", O ? (0, o.AH)({
                            name: "3pim0v",
                            styles: "overflow:inherit;margin-bottom:2em"
                        }) : "", ";}textarea{width:", G ? "32em" : "31em", ";font-size:11pt;line-height:140%;height:16.9em;}}@media all and (max-width: 1700px){&{font-size:8pt;width:32em;height:17.6em;", O ? (0, o.AH)({
                            name: "1mz3b0m",
                            styles: "overflow:inherit;margin-bottom:4em"
                        }) : "", ";}textarea{font-size:8pt;line-height:140%;}}", ""),
                        Y = i.createElement("div", null, F.map(function(e, t) {
                            return i.createElement("p", {
                                key: "bio-line-".concat(t)
                            }, e || i.createElement("span", null, " "))
                        }));
                    return O ? i.createElement("div", {
                        className: $,
                        ref: W
                    }, i.createElement("textarea", {
                        onChange: function(e) {
                            var t = e.target.value;
                            j(void 0 === t ? "" : t)
                        },
                        onKeyUp: function(e) {
                            var t = e.target.value;
                            w((void 0 === t ? "" : t).length)
                        },
                        className: "form-control ".concat((0, o.AH)({
                            name: "utehjx",
                            styles: "resize:none"
                        })),
                        value: null != L ? L : "Tell us about yourself"
                    }), i.createElement(x.A, {
                        color: q ? "danger" : "info",
                        className: "float-right"
                    }, g, " / ", 512), " ", i.createElement(E.A, {
                        onClick: function() {
                            _(!1), j(H)
                        }
                    }, "Cancel"), i.createElement(E.A, {
                        onClick: function() {
                            var e = (0, k.aj)(L, {
                                allowNewlines: !0
                            });
                            m(p ? (0, C.vv)({
                                userId: l,
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
                                userId: l,
                                bio: e
                            })), _(!1), j(e), R(e), u()
                        },
                        disabled: q,
                        color: "primary"
                    }, "Ok")) : i.createElement("div", {
                        tabIndex: "-1",
                        role: "button",
                        className: "btn btn-outline-light btn-block text-start ".concat($),
                        style: {
                            whiteSpace: "normal"
                        },
                        onClick: function() {
                            _(!0)
                        },
                        ref: W
                    }, Y)
                }
                var Q = L.split("\n"),
                    J = i.createElement("div", null, Q.map(function(e, t) {
                        return i.createElement("p", {
                            key: "bio-line-".concat(t)
                        }, e || i.createElement("span", null, " "))
                    }));
                return i.createElement("div", {
                    className: (0, o.AH)({
                        name: "xpha89",
                        styles: "&{max-height:20em;width:30em;overflow-y:auto;}"
                    }),
                    ref: W
                }, J)
            };
            var O = n(10467),
                _ = n(54756),
                S = n.n(_),
                M = n(30678);
            const L = function(e) {
                var t, n, r, a, l = e.userId,
                    o = e.index,
                    s = (0, I.vf)(l),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, N.Om)(), (0, z.P2)().data),
                    m = (null == d ? void 0 : d.id) === l,
                    p = (0, b.wA)(),
                    h = i.useState(null !== (t = null == c || null === (n = c.bioLinks) || void 0 === n ? void 0 : n[o]) && void 0 !== t ? t : ""),
                    g = (0, v.A)(h, 2),
                    x = g[0],
                    w = g[1],
                    A = i.useState(!1),
                    k = (0, v.A)(A, 2),
                    C = k[0],
                    U = k[1],
                    _ = i.useState(x),
                    L = (0, v.A)(_, 2),
                    j = L[0],
                    T = L[1],
                    D = i.useState(!0),
                    H = (0, v.A)(D, 2),
                    R = H[0],
                    P = H[1],
                    B = null !== (r = null == c ? void 0 : c.bioLinks) && void 0 !== r ? r : [],
                    G = function() {
                        U(!0), P(!1)
                    },
                    K = function() {
                        var e = (0, O.A)(S().mark(function e() {
                            var t;
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(B))[o] = x, e.next = 4, p(y({
                                            userId: l,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        U(!1), T(x), u();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    W = function() {
                        var e = (0, O.A)(S().mark(function e() {
                            var t;
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(B))[o] = "", e.next = 4, p(y({
                                            userId: l,
                                            bioLinks: t
                                        }));
                                    case 4:
                                        U(!1), w(""), T(""), u();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return m ? C ? i.createElement("div", {
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
                        13 === e.keyCode && !1 === R && K()
                    },
                    className: "form-control",
                    value: x
                }), i.createElement("div", {
                    className: "input-group-append"
                }, i.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, i.createElement(M.b6, {
                    url: x,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), i.createElement(E.A, {
                    onClick: function() {
                        U(!1), w(j)
                    }
                }, "Cancel"), i.createElement(E.A, {
                    onClick: K,
                    disabled: R,
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
                }, i.createElement(f.A, {
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
                }, B[o]), i.createElement(E.A, {
                    className: "btn btn-outline-danger",
                    "aria-label": "Close",
                    onClick: W
                }, i.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : i.createElement("div", null) : null == B[o] || "" === B[o] ? null : i.createElement("button", {
                    type: "button",
                    className: "btn btn-secondary mt-2 me-2",
                    onClick: (a = B[o], function() {
                        var e;
                        null === (e = window.open(a, "_blank")) || void 0 === e || e.focus()
                    })
                }, i.createElement(M.b6, {
                    url: B[o],
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                }))
            };
            var j = n(57132),
                T = n(50779),
                D = n(40223),
                H = n(85805),
                R = n(68808),
                P = n(49822),
                B = n(82290),
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
                K = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "DELETE_LANGUAGE_TAGS",
                        payload: A().post(window.apiUrl("/api/1/users/".concat(t, "/removeTags")), {
                            tags: n
                        })
                    }
                },
                W = "language_";
            const q = function(e) {
                var t, n, r, a = e.userId,
                    l = (0, I.vf)(a),
                    s = l.data,
                    c = l.refetch,
                    u = (0, T.G)().data,
                    d = ((0, N.Om)(), (0, z.P2)().data),
                    m = (0, b.wA)(),
                    p = (null == d ? void 0 : d.id) === a,
                    h = null !== (t = null == u || null === (n = u.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : D.RY,
                    g = i.useState(!1),
                    x = (0, v.A)(g, 2),
                    w = x[0],
                    A = x[1],
                    y = i.useState(!1),
                    k = (0, v.A)(y, 2),
                    C = k[0],
                    U = k[1],
                    _ = i.useState(null),
                    M = (0, v.A)(_, 2),
                    L = M[0],
                    j = M[1],
                    q = function(e) {
                        var t = e.target.value;
                        j(t)
                    },
                    F = function(e) {
                        return e = e.replace(W, ""), "[ ".concat(e, " ] ").concat(h[e])
                    },
                    $ = function() {
                        j(null), A(!1)
                    },
                    Y = function() {
                        var e = (0, O.A)(S().mark(function e() {
                            var t;
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = W + L, e.next = 3, m(G({
                                            userId: a,
                                            tags: [t]
                                        }));
                                    case 3:
                                        $(), c();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function() {
                        var e = (0, O.A)(S().mark(function e(t) {
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m(K({
                                            userId: a,
                                            tags: [t]
                                        }));
                                    case 2:
                                        $(), c();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = (null !== (r = null == s ? void 0 : s.tags) && void 0 !== r ? r : []).filter(function(e) {
                        return e.indexOf(W) >= 0
                    }),
                    V = J.length < 3;
                if (!p) return i.createElement("div", {
                    className: "user-languages"
                }, J.length > 0 && i.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), i.createElement("div", null, J.map(function(e, t) {
                    return i.createElement("div", {
                        key: "public-tags-".concat(t)
                    }, i.createElement("div", {
                        className: "p-2"
                    }, i.createElement("div", {
                        className: "language-display-public"
                    }, F(e))))
                })));
                var X = i.createElement("div", null, J.map(function(e, t) {
                        return i.createElement("div", {
                            key: "stored-tags-".concat(t)
                        }, i.createElement(f.A, {
                            className: "p-2 ".concat((0, o.AH)({
                                name: "1d3w5wq",
                                styles: "width:100%"
                            }))
                        }, i.createElement("div", {
                            className: "btn btn-outline-light"
                        }, F(e)), i.createElement(E.A, {
                            className: "btn btn-outline-danger ".concat((0, o.AH)({
                                name: "14djdxm",
                                styles: "max-width:2em"
                            })),
                            "aria-label": "Close",
                            onClick: function() {
                                return Q(e)
                            }
                        }, i.createElement("span", {
                            "aria-hidden": "true"
                        }, "×"))))
                    })),
                    Z = i.createElement("div", {
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
                            A(!0)
                        }
                    }, "Add Language")),
                    ee = i.createElement("div", null, i.createElement("div", {
                        className: "w-100 p-2"
                    }, i.createElement(H.A, {
                        drop: "right",
                        className: "mb-2 w-100",
                        isOpen: C,
                        toggle: function() {
                            U(!C)
                        }
                    }, i.createElement(E.A, {
                        color: "light",
                        id: "caret"
                    }, L && F(L) || "Select Language"), i.createElement(R.A, {
                        caret: !0,
                        color: "secondary"
                    }), i.createElement(P.A, {
                        flip: !0,
                        color: "light",
                        style: {
                            overflowY: "scroll",
                            maxHeight: "300px"
                        }
                    }, Object.keys(h).map(function(e, t) {
                        return i.createElement(B.A, {
                            key: "dropdown-langs".concat(t),
                            value: e,
                            onClick: q
                        }, F(e))
                    }))), i.createElement("div", {
                        className: "d-flex flex-row justify-content-between"
                    }, i.createElement(E.A, {
                        onClick: $
                    }, "Cancel"), i.createElement(E.A, {
                        onClick: Y,
                        className: "px-4",
                        color: "primary"
                    }, "Ok"))));
                return i.createElement("div", {
                    className: "user-languages"
                }, i.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), X, w && V && ee, !w && V && Z)
            };
            var F = n(63952),
                $ = n(42482),
                Y = n(24834),
                Q = n(489),
                J = n(38275);
            const V = function(e) {
                var t, n = e.user,
                    r = (0, N.P_)().fetchUser,
                    a = (0, b.wA)(),
                    l = (0, i.useState)(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""),
                    o = (0, v.A)(l, 2),
                    s = o[0],
                    c = o[1],
                    u = (0, i.useState)(!1),
                    d = (0, v.A)(u, 2),
                    m = d[0],
                    p = d[1],
                    f = (0, i.useRef)(null),
                    h = (0, b.d4)(function(e) {
                        return e.currentUser.addNote.isRejected
                    }),
                    g = (0, b.d4)(function(e) {
                        return e.currentUser.addNote.error
                    });
                (0, i.useEffect)(function() {
                    f.current.style.height = "0px";
                    var e = f.current.scrollHeight;
                    f.current.style.height = "".concat(e, "px")
                }, [s]);
                var x = function() {
                        var e = (0, O.A)(S().mark(function e(t) {
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (m) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return f.current.blur(), t && t.stopPropagation(), p(!1), e.next = 7, a((0, C.gp)({
                                            targetUserId: n.id,
                                            note: s
                                        }));
                                    case 7:
                                        return e.next = 9, r();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = function() {
                        var e = (0, O.A)(S().mark(function e() {
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f.current.blur(), c(""), e.next = 4, a((0, C.Pr)({
                                            targetUserId: n.id
                                        }));
                                    case 4:
                                        return e.next = 6, r();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    w = function() {
                        var e = (0, O.A)(S().mark(function e() {
                            var t;
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!h) {
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
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return i.createElement(X, null, i.createElement(ee, {
                    onClick: function(e) {
                        m || (e.stopPropagation(), p(!0), setTimeout(function() {
                            f.current.focus()
                        }))
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
                }), "" !== s && m && i.createElement(Z, null, s.length, "/256"), i.createElement(re, {
                    onClick: E,
                    size: "1x",
                    icon: J.yL,
                    "aria-label": "delete note"
                })), h && i.createElement(te, null, "Note Changes Failed: ", i.createElement("br", null), g))
            };
            n.dn(V);
            var X = (0, r.A)("div", {
                    target: "e2hlwbc5"
                })({
                    name: "j9ove5",
                    styles: "margin-bottom:22px"
                }),
                Z = (0, r.A)("p", {
                    target: "e2hlwbc4"
                })({
                    name: "whd8lt",
                    styles: "position:relative;right:-10px;transition:all 0.2s ease-in-out;color:white"
                }),
                ee = (0, r.A)(h.fI, {
                    target: "e2hlwbc3"
                })({
                    name: "1r4d6h9",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                te = (0, r.A)("p", {
                    target: "e2hlwbc2"
                })({
                    name: "f2dkex",
                    styles: "max-width:250px;color:red"
                }),
                ne = (0, r.A)("textarea", {
                    target: "e2hlwbc1"
                })({
                    name: "1ce6mw9",
                    styles: "background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);border:none;color:#fff;display:flex;flex-grow:1;margin:0;outline:none!important;padding:0;&:hover{color:#fff;}&::placeholder{color:rgba(255, 255, 255, 0.5);}"
                }),
                re = (0, r.A)(h.M2, {
                    target: "e2hlwbc0"
                })("color:white;cursor:pointer;position:relative;right:-100px;transition:all 0.2s ease-in-out;&:hover{color:", function(e) {
                    return "check" === e.name ? "var(--note-online)" : "var(--bs-cyan)"
                }, ";}"),
                ae = n(74303),
                le = n(38066),
                ie = n(81617);
            n(4157);
            const oe = function(e) {
                var t, n = e.user,
                    r = e.isEditable,
                    a = (0, N.a$)(),
                    l = (a._, a.fetchUser),
                    o = (0, b.wA)(),
                    s = i.useState(null !== (t = null == n ? void 0 : n.statusDescription) && void 0 !== t ? t : ""),
                    c = (0, v.A)(s, 2),
                    u = c[0],
                    d = c[1],
                    m = i.useState(!1),
                    p = (0, v.A)(m, 2),
                    f = p[0],
                    h = p[1],
                    g = i.useRef(null),
                    x = ((0, b.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }), i.useCallback(function(e) {
                        var t, r, a;
                        null !== (t = g.current) && void 0 !== t && t.contains(e.target) || (null === (r = g.current) || void 0 === r || r.blur(), d(null !== (a = null == n ? void 0 : n.statusDescription) && void 0 !== a ? a : ""), h(!1))
                    }, [g.current]));
                i.useEffect(function() {
                    return f ? window.addEventListener("click", x) : window.removeEventListener("click", x),
                        function() {
                            window.removeEventListener("click", x)
                        }
                }, [f]), i.useEffect(function() {
                    var e;
                    d(null !== (e = null == n ? void 0 : n.statusDescription) && void 0 !== e ? e : "")
                }, [null == n ? void 0 : n.statusDescription]);
                var E = function() {
                    var e = (0, O.A)(S().mark(function e(t) {
                        return S().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (f) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    g.current.blur(), t.stopPropagation(), h(!1), e.next = 10;
                                    break;
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    return e.next = 12, o((0, C.vv)({
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
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return r ? i.createElement(se, {
                    onClick: function(e) {
                        f || (e.stopPropagation(), h(!0), setTimeout(function() {
                            g.current.focus()
                        }))
                    },
                    role: "button",
                    title: "Edit Status",
                    tabIndex: 0
                }, f ? i.createElement(ce, {
                    ref: g,
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
                    icon: f ? ie.e6 : le.hp
                })) : i.createElement("p", {
                    className: "statusDescription"
                }, i.createElement("small", null, n ? n.statusDescription : ""))
            };
            n.dn(oe);
            var se = (0, r.A)(h.fI, {
                    target: "e16hr4le3"
                })({
                    name: "8boqxq",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;cursor:pointer;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                ce = (0, r.A)("input", {
                    target: "e16hr4le2"
                })({
                    name: "1so83ik",
                    styles: "background:transparent;padding:0;margin:0;border:none;outline:none!important;color:#fff;display:flex;flex-grow:1;border-bottom:1px solid rgba(255, 255, 255, 0.5)"
                }),
                ue = (0, r.A)("span", {
                    target: "e16hr4le1"
                })({
                    name: "1n4zmb4",
                    styles: "color:rgba(255, 255, 255, 0.5)"
                }),
                de = (0, r.A)(h.M2, {
                    target: "e16hr4le0"
                })("position:relative;right:-100px;transition:all 0.2s ease-in-out;color:white;&:hover{color:", function(e) {
                    return "check" === e.name ? "var(--status-online)" : "var(--bs-cyan)"
                }, ";}");
            var me = (0, r.A)("div", {
                target: "ek6wv4d0"
            })("margin:", function(e) {
                return "huge" === e.size ? "auto" : "auto 0px auto 60px"
            }, ";pointer-events:none;");
            const pe = function(e) {
                var t, n = e.userId,
                    r = e.size,
                    s = e.showLocation,
                    v = e.showExtras,
                    b = e.showInvalid,
                    x = e.isUserHidden,
                    E = e.openLinksInNewTab,
                    w = void 0 !== E && E,
                    A = (0, I.vf)(n),
                    y = A.data,
                    k = A.isFetching,
                    C = A.isError,
                    O = A.error,
                    _ = (0, z.p$)().data,
                    S = (0, N.Om)(),
                    M = (0, N.CT)().playerModerations,
                    T = M.mute.users,
                    D = M.block.users;
                if (!n) return null;
                if (b && C) return i.createElement(d.A, {
                    className: (0, o.AH)({
                        name: "1flzyeq",
                        styles: "padding:10px 20px;border:2px solid var(--level-visitor)"
                    })
                }, i.createElement(m.A, null, i.createElement("h6", null, "ID: ", n)), i.createElement(m.A, null, O.status, ":", null === (t = O.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message));
                if (!y || k) return i.createElement(g.A, null);
                var H = (0, ae.Q_)({
                        tags: y.tags
                    }),
                    R = y.isFriend,
                    P = new Set(y.tags).has("admin_moderator"),
                    B = n === (null == _ ? void 0 : _.id),
                    G = new Set(D).has(n),
                    K = new Set(T).has(n),
                    W = ["usercard"];
                W.push("friend-".concat(R)), W.push("size-".concat(r)), W.push("state-".concat(y.state)), W.push("level-".concat(H));
                var J = "Offline";
                if ("active" === y.state && (J = "Active"), "online" === y.state && (J = "In-World"), "traveling" === y.location && (J = "Loading a world"), null != y.error) return i.createElement("div", null);
                var X = y.profilePicOverride || y.currentAvatarThumbnailImageUrl;
                return i.createElement("div", {
                    className: (0, o.AH)({
                        name: "irlerg",
                        styles: "&{text-align:left;}& .usercard{padding:10px;margin-bottom:5px;}& .card{background:#242a31;}& .card .user-img{float:left;margin:7px;}& .muteIcons{position:absolute;top:0;left:0;}& .muteIcons .btn{font-size:xx-small;}& .user-info{max-width:calc(100% - 120px);min-width:100px;}& .user-img{max-width:calc(100% - 14px);}& .info-button{position:absolute;top:5px;right:5px;}& h4{margin-bottom:2px;}& a{font-weight:bold;}& p{margin-bottom:0.2em;}& .p-l-0{padding-left:0px!important;padding-right:0px!important;}& .level-administrator,& .level-moderator{border:2px solid var(--developer);}& .level-visitor{border:2px solid var(--level-visitor);}& .level-new{border:2px solid var(--level-new);}& .level-user{border:2px solid var(--level-user);}& .level-known{border:2px solid var(--level-known);}& .level-trusted{border:2px solid var(--level-trusted);}& .state-online .user-img{border:2px solid var(--bs-green);}& .state-active .user-img{border:2px solid var(--bs-yellow);}& .state-active{opacity:0.9;}& .state-offline{opacity:0.7;}& .size-huge .user-img{width:285px;height:calc(285px * 0.75);}& .size-huge .muteIcons{display:none;}& .size-huge .user-bio,& .size-huge .user-bio-links{width:285px;}& .size-huge .user-bio textarea{min-height:200px;}& .size-slim .user-info{max-width:100%;width:100%;margin-left:10px;margin-right:10px;}& .size-wide .muteIcons{top:17px;left:4px;}& .size-wide{padding-top:2px;padding-bottom:2px;}& .size-wide .user-img{width:60px;height:calc(60px * 0.75);margin-left:115px;}& .size-wide .user-info{margin-left:0.7em;}& .size-wide .statusDescription,& .size-wide .offlineOrOnlineOrWhatever{display:none;}& .size-wide .user-info{margin:auto 0;h6,p{margin-bottom:0;}}& .user-languages{width:100%;}& .language-display-public{width:100%;text-align:center;vertical-align:middle;padding:0.5rem 0.75rem;border-radius:0.25rem;border-color:#f8f9fa;border:1px solid;}& .profile-link{margin-left:-7px;margin-right:-7px;padding-top:0.5rem;}& .extra-margin{margin-left:10px!important;}@media (max-width: 921px){.large-display-only{display:none;}}@media (max-width: 991px) and (min-width: 921px){.small-display-only{display:none;}}@media (max-width: 1578px) and (min-width: 992px){.large-display-only-2{display:none;}}@media (min-width: 1579px){.small-display-only-2{display:none;}}.ribbon{height:70px;left:-2px;overflow:hidden;position:absolute;text-align:right;top:-5px;width:75px;z-index:1;}.ribbon span{background:#8f0808;background:linear-gradient(#f70505 0%, #8f0808 100%);box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);color:#fff;display:block;font-size:0.8rem;font-weight:bold;left:-25px;left:-29px;line-height:22px;position:absolute;text-align:center;text-transform:uppercase;top:17px;transform:rotate(315deg);width:100px;}.ribbon span::before{border-bottom:3px solid transparent;border-left:3px solid #8f0808;border-right:3px solid transparent;border-top:3px solid #8f0808;content:'';left:0px;top:100%;position:absolute;z-index:-1;}.ribbon span::after{border-bottom:3px solid transparent;border-left:3px solid transparent;border-right:3px solid #8f0808;border-top:3px solid #8f0808;content:'';position:absolute;right:0%;top:100%;z-index:-1;}.ribbon--huge{height:93px;left:-7px;top:-7px;width:93px;}.ribbon--huge span{font-size:16px;left:-29px;line-height:32px;width:125px;}"
                    })
                }, i.createElement(d.A, {
                    className: W.join(" ")
                }, S && x && i.createElement("div", {
                    className: "ribbon ".concat("huge" === r ? "ribbon--huge" : "")
                }, i.createElement("span", null, "Hidden")), i.createElement(m.A, {
                    className: "mx-0 ".concat("slim" === r && "flex-column")
                }, i.createElement(p.A, {
                    md: "slim" === r ? 12 : 3,
                    className: "".concat("slim" === r && "px-0")
                }, "huge" === r && i.createElement(p.A, {
                    md: 12
                }, i.createElement(m.A, null, i.createElement(p.A, {
                    className: "p-0"
                }, S && x && i.createElement("div", {
                    className: "d-flex align-items-center position-absolute w-100 h-100"
                }, i.createElement(me, {
                    size: r
                }, i.createElement(h.M2, {
                    icon: l.k6,
                    size: "5x"
                }))), i.createElement(u.N_, {
                    to: "/home/user/".concat(n),
                    title: y.state,
                    target: w ? "_blank" : void 0
                }, i.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: X
                })), i.createElement("div", {
                    className: "muteIcons"
                }, (!R || G || K) && i.createElement(f.A, null, i.createElement(F.A, {
                    visible: !P && !S && !B,
                    userId: n,
                    showText: !1
                }), i.createElement(j.A, {
                    visible: !P && !S && !B,
                    userId: n,
                    showText: !1
                }))))), "huge" === r && i.createElement(m.A, {
                    className: "large-display-only large-display-only-2"
                }, i.createElement(p.A, {
                    className: "p-0",
                    md: "12"
                }, i.createElement("div", null, i.createElement(q, {
                    userId: n
                }))))), !("huge" === r) && i.createElement("div", null, S && x && i.createElement("div", {
                    className: "d-flex align-items-center position-absolute h-100"
                }, i.createElement(me, {
                    size: r
                }, i.createElement(h.M2, {
                    icon: l.k6,
                    size: "2x"
                }))), i.createElement(u.N_, {
                    to: "/home/user/".concat(n),
                    title: y.state,
                    target: w ? "_blank" : void 0
                }, i.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: X
                })), i.createElement("div", {
                    className: "muteIcons"
                }, (!R || G || K) && i.createElement(f.A, null, i.createElement(F.A, {
                    visible: !P && !S && !B,
                    userId: n,
                    showText: !1
                }), i.createElement(j.A, {
                    visible: !P && !S && !B,
                    userId: n,
                    showText: !1
                }))))), i.createElement(p.A, {
                    md: "slim" === r ? 12 : 8,
                    className: "user-info ".concat((0, o.AH)({
                        name: "182ot4e",
                        styles: "margin-left:1.5em"
                    }))
                }, i.createElement("h6", null, i.createElement(u.N_, {
                    to: "/home/user/".concat(n),
                    target: w ? "_blank" : void 0
                }, i.createElement($.A, {
                    status: y.status
                }), y.displayName)), i.createElement("p", {
                    className: "offlineOrOnlineOrWhatever"
                }, i.createElement("em", null, J)), "huge" === r && i.createElement(m.A, {
                    className: "small-display-only small-display-only-2"
                }, i.createElement(p.A, {
                    className: "p-0",
                    md: "12"
                }, i.createElement("div", null, i.createElement(q, {
                    userId: n
                })))), "huge" === r && i.createElement("div", null, i.createElement("div", {
                    className: "user-bio p-l-0"
                }, i.createElement(U, {
                    userId: n
                })), i.createElement("div", {
                    className: "user-bio-links p-2 p-l-0"
                }, i.createElement(L, {
                    userId: n,
                    index: 0
                }), i.createElement(L, {
                    userId: n,
                    index: 1
                }), i.createElement(L, {
                    userId: n,
                    index: 2
                }))), "offline" === y.state && y.last_login && i.createElement("p", {
                    className: "lastLogin"
                }, i.createElement("small", null, c()(y.last_login).fromNow())), "huge" === r && i.createElement(i.Fragment, null, i.createElement(oe, {
                    user: y,
                    isEditable: B || !1
                }), i.createElement("br", null), i.createElement("h4", null, "Note"), i.createElement("br", null), i.createElement(V, {
                    user: y,
                    isEditable: !0
                }))), i.createElement(p.A, {
                    md: "slim" === r ? 12 : 1
                }, i.createElement(Y.A, {
                    userId: n
                }))), "online" === y.state && s && i.createElement("div", null, y.location && i.createElement(Q.A, {
                    location: y.location,
                    userId: n,
                    currentUser: _,
                    size: "normal"
                })), B && v && i.createElement("div", {
                    className: "profile-link"
                }, i.createElement(u.N_, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    target: w ? "_blank" : void 0
                }, i.createElement(h.M2, {
                    icon: a.dB
                }), "  Profile"))))
            }
        },
        42482(e, t, n) {
            n.d(t, {
                A: () => i
            });
            var r = n(56822),
                a = n(96540),
                l = n(74303);
            const i = function(e) {
                var t = e.status,
                    n = e.customStatus,
                    i = e.withLabel,
                    o = void 0 !== i && i,
                    s = e.isOffline,
                    c = void 0 !== s && s;
                if (null == t) return a.createElement("div", null);
                var u = (0, l.CD)(c ? "offline" : t),
                    d = n || (0, l.CD)(c ? "offline" : t, !0);
                return a.createElement("div", {
                    className: "tw-flex tw-items-center tw-gap-[6px]"
                }, a.createElement("span", {
                    className: (0, r.cx)("tw-w-2 tw-h-2 tw-rounded-full tw-inline-block", "online" === u && "tw-bg-status-online", "joinme" === u && "tw-bg-status-join-me", "busy" === u && "tw-bg-status-busy", "askme" === u && "tw-bg-status-ask-me", (c || "offline" === u) && "tw-bg-status-offline"),
                    title: d
                }), o && a.createElement("span", {
                    className: "tw-text-sm tw-text-white tw-font-medium tw-max-w-[32ch] tw-m-0",
                    title: d
                }, d))
            }
        },
        489(e, t, n) {
            n.d(t, {
                A: () => E
            });
            var r = n(39281),
                a = n(96540),
                l = n(6376),
                i = n(56822),
                o = n(84976),
                s = n(74758),
                c = n(16477),
                u = n(5826),
                d = n(15033),
                m = n(72505),
                p = n.n(m),
                f = function(e) {
                    var t = e.worldId;
                    return "private" !== t && "offline" !== t && "traveling" !== t ? {
                        type: "LOAD_LOCATION",
                        payload: p().get(window.apiUrl("/api/1/worlds/".concat(t)))
                    } : null
                },
                h = n(74771),
                g = n(91069),
                v = n(26577),
                b = n(25538),
                x = n(59362);
            const E = function(e) {
                var t = e.location,
                    n = e.showUsers,
                    m = e.showDetails,
                    p = e.size,
                    E = e.occupants,
                    w = e.capacity,
                    A = e.userId,
                    y = e.currentUser,
                    k = (0, l.wA)(),
                    N = (0, l.d4)(function(e) {
                        return e.worlds.worlds
                    }),
                    I = (0, l.d4)(function(e) {
                        return e.friends.locations
                    }),
                    z = (0, l.d4)(function(e) {
                        return e.currentUser.isMod
                    }),
                    C = (0, l.d4)(function(e) {
                        return e.friends.users
                    }),
                    U = (0, l.d4)(function(e) {
                        return e.friends.friendIds
                    });
                a.useEffect(function() {
                    if ("private" !== t && "offline" !== t && "traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == N[e] && "private" !== e) {
                            var n = f({
                                worldId: e
                            });
                            n && k(n)
                        }
                    }
                }, []), a.useEffect(function() {
                    if ("traveling" !== t) {
                        var e = t.split(":")[0];
                        if (null == N[e] && "private" !== e) {
                            var n = f({
                                worldId: e
                            });
                            n && k(n)
                        }
                    }
                }, [t]);
                var O = function(e) {
                    return null !== e && (!1 === e.private && !(!1 !== e.friends && !U.includes(e.friends)))
                };
                if (null === t || "offline" === t) return null;
                var _ = t.split(":")[0],
                    S = t.split(":")[1],
                    M = S ? (0, h.LW)(S) : null,
                    L = a.createElement(s.A, {
                        className: (0, i.AH)({
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
                    j = a.createElement(s.A, {
                        className: (0, i.AH)({
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
                if ("private" === t || "private" === _) return L;
                if ("traveling" === t) return j;
                if (z && A && A !== y.id) {
                    if (!M) return L;
                    if (!C[A]) return L;
                    if (!U.includes(A)) return L;
                    if (!["join me", "active"].includes(C[A].status)) return L;
                    if (!O(M)) return L
                }
                if (!M) return null;
                var T = N[_],
                    D = I[t],
                    H = (0, g.e2)(S);
                if (null == T) return a.createElement(b.A, null);
                var R = [""];
                R.push("location-card"), R.push("size-".concat(p));
                var P = (null == D ? void 0 : D.users) || [];
                if (z && (P = P.filter(function(e) {
                        return C[e] && ["join me", "active"].includes(C[e].status)
                    }), !A)) {
                    if (!O(M)) return null;
                    if (!P.length && (null == E || !1 !== M.hidden || !1 !== M.friends || !1 !== M.private)) return null
                }
                var B = P.map(function(e) {
                        return a.createElement("div", {
                            className: "card-container",
                            key: "location-".concat(e)
                        }, a.createElement(x.A, {
                            userId: e,
                            size: "wide"
                        }))
                    }),
                    G = S.match(/region\((us|use|eu|jp)\)/),
                    K = "us";
                return G && G.length > 1 && (K = G[1]), a.createElement("div", {
                    className: (0, i.AH)({
                        name: "1p96q4l",
                        styles: "& .location-card{margin:5px;padding:10px;text-align:left;background:#333c46;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .location-title a{color:white;}& .size-large{padding:20px;}& .size-large .location-title{font-weight:bold;}& .size-large .location-img{width:160px;height:calc(160px * 0.75);}& .size-large .location-users,.size-medium .location-users{margin-top:20px;margin-left:12px;margin-right:12px;}& .size-normal h6 a{font-weight:normal;}& .size-slim .location-img{width:100%;max-width:120px;height:auto;}& .size-slim .location-title{background-color:black;font-weight:normal;padding:2px;position:absolute;top:0px;width:100%;}& .location-users>div{display:grid;}& .location-users .usercard .img-thumbnail{margin:5px 5px 5px 0;}& .card-container{margin:0 3px;}& .location-users .usercard .user-info>h6{margin-bottom:0;}& .location-users .usercard .info-button{top:10px;}@media (min-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(4, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(3, 1fr);}}@media (max-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(3, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(2, 1fr);}}@media (max-width: 1900px){.location-card.size-large .location-users>div{grid-template-columns:repeat(2, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(1, 1fr);}}@media (max-width: 1500px){.location-card.size-large .location-users>div{grid-template-columns:repeat(1, 1fr);}}"
                    })
                }, a.createElement(s.A, {
                    className: R.join(" ")
                }, a.createElement("div", null, a.createElement(o.N_, {
                    to: "/home/launch?worldId=".concat(T.id, "&instanceId=").concat(S),
                    title: T.name,
                    target: "_blank"
                }, a.createElement("img", {
                    className: "img-thumbnail location-img",
                    src: (0, g.C_)(T),
                    alt: T.name
                })), a.createElement("h6", {
                    className: "location-title"
                }, null != D && a.createElement(c.A, null, P.length, " ", a.createElement(d.M2, {
                    icon: r.gd,
                    title: "Number of friends in instance"
                }), " "), null != E && a.createElement(c.A, null, E, "/", w), " ", a.createElement(o.N_, {
                    to: "/home/launch?worldId=".concat(T.id, "&instanceId=").concat(S),
                    title: T.name,
                    target: "_blank"
                }, T.name, " : ", a.createElement(v.A, {
                    region: K,
                    imageSize: "16px"
                }), " ", H, "  ")), m && a.createElement("div", null, a.createElement("p", null, a.createElement("small", null, T.description))), a.createElement("div", {
                    className: "clearfix"
                }), n && a.createElement("div", {
                    className: "location-users"
                }, a.createElement(u.A, null, B)))))
            }
        },
        57132(e, t, n) {
            n.d(t, {
                A: () => d
            });
            var r = n(15902),
                a = (n(70129), n(83697)),
                l = n(96540),
                i = n(30104),
                o = n(15033),
                s = n(74818),
                c = n(194),
                u = n(9527);
            const d = function(e) {
                var t = e.userId,
                    n = e.visible,
                    d = e.showText,
                    m = (0, u.pk)(),
                    p = (0, r.A)(m, 1)[0],
                    f = (0, u.c_)(),
                    h = (0, r.A)(f, 1)[0],
                    g = (0, c.CT)().playerModerations,
                    v = (void 0 === g ? {} : g).block,
                    b = (void 0 === v ? {} : v).users,
                    x = !1;
                return new Set(b).has(t) && (x = !0), null === t || !1 === n ? l.createElement("div", null) : x ? l.createElement(i.A, {
                    color: "danger",
                    title: "Unblock User",
                    "aria-label": "Unblock User",
                    onClick: function() {
                        h({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, l.createElement(o.M2, {
                    icon: a.im,
                    color: "white",
                    "aria-hidden": "true"
                }), d && l.createElement("span", null, " Unblock")) : l.createElement(i.A, {
                    color: "secondary",
                    title: "Block User",
                    "aria-label": "Block User",
                    onClick: function() {
                        p({
                            userId: t,
                            type: s.BLOCK
                        })
                    }
                }, l.createElement(o.M2, {
                    icon: a.im,
                    color: "white",
                    "aria-hidden": "true"
                }), d && l.createElement("span", null, " Block"))
            }
        },
        63952(e, t, n) {
            n.d(t, {
                A: () => m
            });
            var r = n(15902),
                a = (n(70129), n(62285)),
                l = n(77276),
                i = n(96540),
                o = n(30104),
                s = n(15033),
                c = n(74818),
                u = n(194),
                d = n(9527);
            const m = function(e) {
                var t = e.userId,
                    n = e.visible,
                    m = e.showText,
                    p = void 0 !== m && m,
                    f = (0, d.pk)(),
                    h = (0, r.A)(f, 1)[0],
                    g = (0, d.c_)(),
                    v = (0, r.A)(g, 1)[0],
                    b = (0, u.CT)().playerModerations,
                    x = (void 0 === b ? {} : b).mute,
                    E = (void 0 === x ? {} : x).users,
                    w = !1;
                return new Set(E).has(t) && (w = !0), null === t || !1 === n ? i.createElement("div", null) : w ? i.createElement(o.A, {
                    color: "warning",
                    title: "Unmute User",
                    "aria-label": "Unmute User",
                    onClick: function() {
                        v({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, i.createElement(s.M2, {
                    icon: l.$z,
                    color: "white",
                    "aria-hidden": "true"
                }), p && i.createElement("span", null, " Unmute")) : i.createElement(o.A, {
                    color: "secondary",
                    title: "Mute User",
                    "aria-label": "Mute User",
                    onClick: function() {
                        h({
                            userId: t,
                            type: c.MUTE
                        })
                    }
                }, i.createElement(s.M2, {
                    icon: a.A5,
                    color: "white",
                    "aria-hidden": "true"
                }), p && i.createElement("span", null, " Mute"))
            }
        }
    }
]);
//# sourceMappingURL=47956c884fcb9a87c1da42d33bc4b4494313f430bdc1b0a5533ac84b25423963.js.map