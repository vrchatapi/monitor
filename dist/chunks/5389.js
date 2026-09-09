"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5389], {
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
        26973(e, t, n) {
            n.d(t, {
                A: () => Ce
            });
            var r = n(64467),
                a = n(70129),
                l = n(14190),
                i = n(56967),
                o = n(96540),
                s = n(56822),
                c = n(95093),
                u = n.n(c),
                d = n(84976),
                m = n(74758),
                p = n(5826),
                f = n(39704),
                h = n(77365),
                g = n(71661),
                v = n(25538),
                b = n(10467),
                x = n(82544),
                E = n(54756),
                w = n.n(E),
                A = n(16477),
                y = n(30104),
                k = n(78502),
                N = n(13951),
                I = n(46078),
                O = n(89524);
            const z = function(e) {
                var t, n, r, a, l = e.userId,
                    i = (0, I.M7)({
                        userId: l
                    }),
                    c = i.data,
                    u = i.refetch,
                    d = ((0, k.Om)(), (0, N.P2)().data),
                    m = (0, I.ik)(),
                    p = (0, x.A)(m, 1)[0],
                    f = (null == d ? void 0 : d.id) === l,
                    h = o.useState(null !== (t = null == c || null === (n = c.bio) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
                    g = (0, x.A)(h, 2),
                    v = g[0],
                    E = g[1],
                    z = o.useState(!1),
                    C = (0, x.A)(z, 2),
                    U = C[0],
                    _ = C[1],
                    j = o.useState(null !== (r = null == c ? void 0 : c.bio) && void 0 !== r ? r : ""),
                    S = (0, x.A)(j, 2),
                    M = S[0],
                    L = S[1],
                    D = o.useState(null !== (a = null == c ? void 0 : c.bio) && void 0 !== a ? a : ""),
                    T = (0, x.A)(D, 2),
                    P = T[0],
                    H = T[1],
                    R = o.useState(!1),
                    G = (0, x.A)(R, 2),
                    B = G[0],
                    K = G[1],
                    W = o.useRef(null);
                o.useEffect(function() {
                    var e = W.current;
                    if (e) {
                        var t = e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
                        B !== t && K(t)
                    }
                }, [M]), o.useEffect(function() {
                    var e, t, n, r;
                    L(null !== (e = null == c ? void 0 : c.bio) && void 0 !== e ? e : ""), H(null !== (t = null == c ? void 0 : c.bio) && void 0 !== t ? t : ""), K(!1), E(null !== (n = null == c || null === (r = c.bio) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0), _(!1)
                }, [c]);
                var q = function() {
                    var e = (0, b.A)(w().mark(function e() {
                        var t;
                        return w().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, O.aj)(M, {
                                        allowNewlines: !0
                                    }), e.prev = 1, e.next = 4, p({
                                        userId: l,
                                        updates: {
                                            bio: t
                                        }
                                    }).unwrap();
                                case 4:
                                    _(!1), L(t), H(t), u(), e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(1), console.error("Error updating bio:", e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [1, 10]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                if (f) {
                    var F = v > 512,
                        $ = M.split("\n"),
                        Y = (0, s.AH)("&{font-size:11pt;overflow:auto;}@media all and (min-width: 1700px){&{width:", B ? "32em" : "31em", ";height:17.4em;", U ? (0, s.AH)({
                            name: "3pim0v",
                            styles: "overflow:inherit;margin-bottom:2em"
                        }) : "", ";}textarea{width:", B ? "32em" : "31em", ";font-size:11pt;line-height:140%;height:16.9em;}}@media all and (max-width: 1700px){&{font-size:8pt;width:32em;height:17.6em;", U ? (0, s.AH)({
                            name: "1mz3b0m",
                            styles: "overflow:inherit;margin-bottom:4em"
                        }) : "", ";}textarea{font-size:8pt;line-height:140%;}}", ""),
                        Q = o.createElement("div", null, $.map(function(e, t) {
                            return o.createElement("p", {
                                key: "bio-line-".concat(t)
                            }, e || o.createElement("span", null, " "))
                        }));
                    return U ? o.createElement("div", {
                        className: Y,
                        ref: W
                    }, o.createElement("textarea", {
                        onChange: function(e) {
                            var t = e.target.value;
                            L(void 0 === t ? "" : t)
                        },
                        onKeyUp: function(e) {
                            var t = e.target.value;
                            E((void 0 === t ? "" : t).length)
                        },
                        className: "form-control ".concat((0, s.AH)({
                            name: "utehjx",
                            styles: "resize:none"
                        })),
                        value: null != M ? M : "Tell us about yourself"
                    }), o.createElement(A.A, {
                        color: F ? "danger" : "info",
                        className: "float-right"
                    }, v, " / ", 512), " ", o.createElement(y.A, {
                        onClick: function() {
                            _(!1), L(P)
                        }
                    }, "Cancel"), o.createElement(y.A, {
                        onClick: q,
                        disabled: F,
                        color: "primary"
                    }, "Ok")) : o.createElement("div", {
                        tabIndex: "-1",
                        role: "button",
                        className: "btn btn-outline-light btn-block text-start ".concat(Y),
                        style: {
                            whiteSpace: "normal"
                        },
                        onClick: function() {
                            _(!0)
                        },
                        ref: W
                    }, Q)
                }
                var J = M.split("\n"),
                    V = o.createElement("div", null, J.map(function(e, t) {
                        return o.createElement("p", {
                            key: "bio-line-".concat(t)
                        }, e || o.createElement("span", null, " "))
                    }));
                return o.createElement("div", {
                    className: (0, s.AH)({
                        name: "xpha89",
                        styles: "&{max-height:20em;width:30em;overflow-y:auto;}"
                    }),
                    ref: W
                }, V)
            };
            var C = n(30678);
            const U = function(e) {
                var t, n, r, a, l = e.userId,
                    i = e.index,
                    s = (0, I.M7)({
                        userId: l
                    }),
                    c = s.data,
                    u = s.refetch,
                    d = ((0, k.Om)(), (0, N.P2)().data),
                    m = (null == d ? void 0 : d.id) === l,
                    p = (0, I.ik)(),
                    f = (0, x.A)(p, 1)[0],
                    g = o.useState(null !== (t = null == c || null === (n = c.bioLinks) || void 0 === n ? void 0 : n[i]) && void 0 !== t ? t : ""),
                    v = (0, x.A)(g, 2),
                    E = v[0],
                    A = v[1],
                    O = o.useState(!1),
                    z = (0, x.A)(O, 2),
                    U = z[0],
                    _ = z[1],
                    j = o.useState(E),
                    S = (0, x.A)(j, 2),
                    M = S[0],
                    L = S[1],
                    D = o.useState(!0),
                    T = (0, x.A)(D, 2),
                    P = T[0],
                    H = T[1],
                    R = null !== (r = null == c ? void 0 : c.bioLinks) && void 0 !== r ? r : [],
                    G = function() {
                        _(!0), H(!1)
                    },
                    B = function() {
                        var e = (0, b.A)(w().mark(function e() {
                            var t;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(R))[i] = E, e.prev = 2, e.next = 5, f({
                                            userId: l,
                                            updates: {
                                                bioLinks: t
                                            }
                                        }).unwrap();
                                    case 5:
                                        _(!1), L(E), u(), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), console.error("Error updating bio links:", e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 10]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = (0, b.A)(w().mark(function e() {
                            var t;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = [].concat(R))[i] = "", e.prev = 2, e.next = 5, f({
                                            userId: l,
                                            updates: {
                                                bioLinks: t
                                            }
                                        }).unwrap();
                                    case 5:
                                        _(!1), A(""), L(""), u(), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.error("Error deleting bio link:", e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 11]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return m ? U ? o.createElement("div", {
                    className: "w-100 p-2 p-l-0"
                }, o.createElement("div", {
                    className: "input-group"
                }, o.createElement("input", {
                    placeholder: "https://",
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        if ("" === n) return A(""), void H(!1);
                        try {
                            var r = new URL(n);
                            A(n), H("https:" !== r.protocol && "http:" !== r.protocol)
                        } catch (e) {
                            A(n), H(!0)
                        }
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && !1 === P && B()
                    },
                    className: "form-control",
                    value: E
                }), o.createElement("div", {
                    className: "input-group-append"
                }, o.createElement("span", {
                    className: "input-group-text",
                    id: "basic-addon1"
                }, o.createElement(C.b6, {
                    url: E,
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                })))), o.createElement(y.A, {
                    onClick: function() {
                        _(!1), A(M)
                    }
                }, "Cancel"), o.createElement(y.A, {
                    onClick: B,
                    disabled: P,
                    color: "primary"
                }, "Ok")) : i > 0 && null == R[i - 1] ? o.createElement("div", null) : !(i > 0) || "" !== R[i] && null != R[i] || "" !== R[i - 1] && null != R[i - 1] ? null == R[i] || "" === R[i] ? o.createElement("div", null, o.createElement("div", {
                    className: "btn-group w-100 p-2 p-l-0"
                }, o.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light btn-block",
                    style: {
                        whiteSpace: "normal"
                    },
                    onClick: G
                }, "Link"))) : o.createElement("div", {
                    style: {
                        width: "285px"
                    }
                }, o.createElement(h.A, {
                    className: "p-2 w-100 p-l-0"
                }, o.createElement("div", {
                    role: "button",
                    tabIndex: -1,
                    className: "btn btn-outline-light",
                    style: {
                        width: "255px",
                        overflow: "hidden"
                    },
                    onClick: G
                }, R[i]), o.createElement(y.A, {
                    className: "btn btn-outline-danger",
                    "aria-label": "Close",
                    onClick: K
                }, o.createElement("span", {
                    "aria-hidden": "true"
                }, "×")))) : o.createElement("div", null) : null == R[i] || "" === R[i] ? null : o.createElement("button", {
                    type: "button",
                    className: "btn btn-secondary mt-2 me-2",
                    onClick: (a = R[i], function() {
                        var e;
                        null === (e = window.open(a, "_blank")) || void 0 === e || e.focus()
                    })
                }, o.createElement(C.b6, {
                    url: R[i],
                    style: {
                        height: "20px",
                        width: "20px"
                    },
                    target: "_blank"
                }))
            };
            var _ = n(57132),
                j = n(6376),
                S = n(50779),
                M = n(40223),
                L = n(85805),
                D = n(68808),
                T = n(49822),
                P = n(82290),
                H = n(72505),
                R = n.n(H),
                G = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "ADD_LANGUAGE_TAGS",
                        payload: R().post(window.apiUrl("/api/1/users/".concat(t, "/addTags")), {
                            tags: n
                        })
                    }
                },
                B = function(e) {
                    var t = e.userId,
                        n = e.tags;
                    return {
                        type: "DELETE_LANGUAGE_TAGS",
                        payload: R().post(window.apiUrl("/api/1/users/".concat(t, "/removeTags")), {
                            tags: n
                        })
                    }
                },
                K = "language_",
                W = n(71957);
            const q = function(e) {
                var t, n, r, a = e.userId,
                    l = (0, W.vf)(a),
                    i = l.data,
                    c = l.refetch,
                    u = (0, S.G)().data,
                    d = ((0, k.Om)(), (0, N.P2)().data),
                    m = (0, j.wA)(),
                    p = (null == d ? void 0 : d.id) === a,
                    f = null !== (t = null == u || null === (n = u.constants) || void 0 === n || null === (n = n.LANGUAGE) || void 0 === n ? void 0 : n.SPOKEN_LANGUAGE_OPTIONS) && void 0 !== t ? t : M.RY,
                    g = o.useState(!1),
                    v = (0, x.A)(g, 2),
                    E = v[0],
                    A = v[1],
                    I = o.useState(!1),
                    O = (0, x.A)(I, 2),
                    z = O[0],
                    C = O[1],
                    U = o.useState(null),
                    _ = (0, x.A)(U, 2),
                    H = _[0],
                    R = _[1],
                    q = function(e) {
                        var t = e.target.value;
                        R(t)
                    },
                    F = function(e) {
                        return e = e.replace(K, ""), "[ ".concat(e, " ] ").concat(f[e])
                    },
                    $ = function() {
                        R(null), A(!1)
                    },
                    Y = function() {
                        var e = (0, b.A)(w().mark(function e() {
                            var t;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = K + H, e.next = 3, m(G({
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
                        var e = (0, b.A)(w().mark(function e(t) {
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m(B({
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
                    J = (null !== (r = null == i ? void 0 : i.tags) && void 0 !== r ? r : []).filter(function(e) {
                        return e.indexOf(K) >= 0
                    }),
                    V = J.length < 3;
                if (!p) return o.createElement("div", {
                    className: "user-languages"
                }, J.length > 0 && o.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), o.createElement("div", null, J.map(function(e, t) {
                    return o.createElement("div", {
                        key: "public-tags-".concat(t)
                    }, o.createElement("div", {
                        className: "p-2"
                    }, o.createElement("div", {
                        className: "language-display-public"
                    }, F(e))))
                })));
                var X = o.createElement("div", null, J.map(function(e, t) {
                        return o.createElement("div", {
                            key: "stored-tags-".concat(t)
                        }, o.createElement(h.A, {
                            className: "p-2 ".concat((0, s.AH)({
                                name: "1d3w5wq",
                                styles: "width:100%"
                            }))
                        }, o.createElement("div", {
                            className: "btn btn-outline-light"
                        }, F(e)), o.createElement(y.A, {
                            className: "btn btn-outline-danger ".concat((0, s.AH)({
                                name: "14djdxm",
                                styles: "max-width:2em"
                            })),
                            "aria-label": "Close",
                            onClick: function() {
                                return Q(e)
                            }
                        }, o.createElement("span", {
                            "aria-hidden": "true"
                        }, "×"))))
                    })),
                    Z = o.createElement("div", {
                        className: "btn-group w-100 p-2"
                    }, o.createElement("div", {
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
                    ee = o.createElement("div", null, o.createElement("div", {
                        className: "w-100 p-2"
                    }, o.createElement(L.A, {
                        drop: "right",
                        className: "mb-2 w-100",
                        isOpen: z,
                        toggle: function() {
                            C(!z)
                        }
                    }, o.createElement(y.A, {
                        color: "light",
                        id: "caret"
                    }, H && F(H) || "Select Language"), o.createElement(D.A, {
                        caret: !0,
                        color: "secondary"
                    }), o.createElement(T.A, {
                        flip: !0,
                        color: "light",
                        style: {
                            overflowY: "scroll",
                            maxHeight: "300px"
                        }
                    }, Object.keys(f).map(function(e, t) {
                        return o.createElement(P.A, {
                            key: "dropdown-langs".concat(t),
                            value: e,
                            onClick: q
                        }, F(e))
                    }))), o.createElement("div", {
                        className: "d-flex flex-row justify-content-between"
                    }, o.createElement(y.A, {
                        onClick: $
                    }, "Cancel"), o.createElement(y.A, {
                        onClick: Y,
                        className: "px-4",
                        color: "primary"
                    }, "Ok"))));
                return o.createElement("div", {
                    className: "user-languages"
                }, o.createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, " Languages "), X, E && V && ee, !E && V && Z)
            };
            var F = n(63952),
                $ = n(42482),
                Y = n(23029),
                Q = n(92901),
                J = n(85501),
                V = n(34441),
                X = n(53954),
                Z = n(84777),
                ee = n(59040),
                te = n(69266),
                ne = function(e) {
                    var t = e.userId;
                    return {
                        type: "LOAD_MODREPORT_USER",
                        payload: R().get(window.apiUrl("/api/1/users/".concat(t)), {
                            headers: {
                                "Cache-Control": "no-cache"
                            }
                        })
                    }
                };

            function re(e) {
                var t = ae();
                return function() {
                    var n, r = (0, X.A)(e);
                    if (t) {
                        var a = (0, X.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, V.A)(this, n)
                }
            }

            function ae() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (ae = function() {
                    return !!e
                })()
            }
            var le = function(e) {
                    (0, J.A)(n, e);
                    var t = re(n);

                    function n() {
                        return (0, Y.A)(this, n), t.apply(this, arguments)
                    }
                    return (0, Q.A)(n, [{
                        key: "userObject",
                        value: function() {
                            return this.props.preloadUser || this.props.userObject
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            null == this.props.preloadUser && this.props.dispatch(ne({
                                userId: this.props.userId
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            null == this.props.preloadUser && (this.props.error || this.props.loading || this.props.userObject && this.props.userObject.id === this.props.userId || this.props.dispatch(ne({
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
                            return e ? o.createElement(ee.A, {
                                src: e,
                                theme: "greenscreen"
                            }) : o.createElement(v.A, null)
                        }
                    }]), n
                }(o.Component),
                ie = (0, j.Ng)(function(e) {
                    return {
                        userObject: e.modReport.userObject,
                        loading: e.modReport.loading,
                        error: e.modReport.error
                    }
                })(le);
            const oe = (0, j.Ng)(function(e) {
                return {
                    isMod: e.currentUser.isMod
                }
            })(function(e) {
                var t = e.isMod,
                    n = e.userId,
                    r = e.userObject,
                    a = e.tiny;
                return t && o.createElement(te.A, {
                    icon: Z.kt,
                    tiny: a
                }, o.createElement(ie, {
                    userId: n,
                    preloadUser: r
                }))
            });
            var se = n(489),
                ce = n(38275),
                ue = n(558);
            const de = function(e) {
                var t, n = e.user,
                    r = (0, k.P_)().fetchUser,
                    a = (0, j.wA)(),
                    l = (0, o.useState)(null !== (t = null == n ? void 0 : n.note) && void 0 !== t ? t : ""),
                    i = (0, x.A)(l, 2),
                    s = i[0],
                    c = i[1],
                    u = (0, o.useState)(!1),
                    d = (0, x.A)(u, 2),
                    m = d[0],
                    p = d[1],
                    f = (0, o.useRef)(null),
                    h = (0, j.d4)(function(e) {
                        return e.currentUser.addNote.isRejected
                    }),
                    g = (0, j.d4)(function(e) {
                        return e.currentUser.addNote.error
                    });
                (0, o.useEffect)(function() {
                    f.current.style.height = "0px";
                    var e = f.current.scrollHeight;
                    f.current.style.height = "".concat(e, "px")
                }, [s]);
                var v = function() {
                        var e = (0, b.A)(w().mark(function e(t) {
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (m) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return f.current.blur(), t && t.stopPropagation(), p(!1), e.next = 7, a((0, ue.gp)({
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
                        var e = (0, b.A)(w().mark(function e() {
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f.current.blur(), c(""), e.next = 4, a((0, ue.Pr)({
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
                    A = function() {
                        var e = (0, b.A)(w().mark(function e() {
                            var t;
                            return w().wrap(function(e) {
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
                                        return e.abrupt("return", v());
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
                return o.createElement(me, null, o.createElement(fe, {
                    onClick: function(e) {
                        m || (e.stopPropagation(), p(!0), setTimeout(function() {
                            f.current.focus()
                        }))
                    },
                    role: "button",
                    title: "Edit Note",
                    tabIndex: 0
                }, o.createElement(ge, {
                    contenteditable: !0,
                    ref: f,
                    value: s,
                    onChange: function(e) {
                        var t = e.target.value,
                            n = void 0 === t ? "" : t;
                        n.length > 256 || c(n)
                    },
                    onBlur: A,
                    onKeyPress: function(e) {
                        if ("Enter" !== e.key || e.shiftKey) {
                            var t = f.current.scrollHeight > 80;
                            "Enter" === e.key && e.shiftKey && t && e.preventDefault()
                        } else v(e)
                    },
                    placeholder: "Click to add a note!",
                    "aria-label": "Note input field"
                }), "" !== s && m && o.createElement(pe, null, s.length, "/256"), o.createElement(ve, {
                    onClick: E,
                    size: "1x",
                    icon: ce.yL,
                    "aria-label": "delete note"
                })), h && o.createElement(he, null, "Note Changes Failed: ", o.createElement("br", null), g))
            };
            n.dn(de);
            var me = (0, a.A)("div", {
                    target: "e2hlwbc5"
                })({
                    name: "j9ove5",
                    styles: "margin-bottom:22px"
                }),
                pe = (0, a.A)("p", {
                    target: "e2hlwbc4"
                })({
                    name: "whd8lt",
                    styles: "position:relative;right:-10px;transition:all 0.2s ease-in-out;color:white"
                }),
                fe = (0, a.A)(g.fI, {
                    target: "e2hlwbc3"
                })({
                    name: "1r4d6h9",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                he = (0, a.A)("p", {
                    target: "e2hlwbc2"
                })({
                    name: "f2dkex",
                    styles: "max-width:250px;color:red"
                }),
                ge = (0, a.A)("textarea", {
                    target: "e2hlwbc1"
                })({
                    name: "1ce6mw9",
                    styles: "background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.5);border:none;color:#fff;display:flex;flex-grow:1;margin:0;outline:none!important;padding:0;&:hover{color:#fff;}&::placeholder{color:rgba(255, 255, 255, 0.5);}"
                }),
                ve = (0, a.A)(g.M2, {
                    target: "e2hlwbc0"
                })("color:white;cursor:pointer;position:relative;right:-100px;transition:all 0.2s ease-in-out;&:hover{color:", function(e) {
                    return "check" === e.name ? "var(--note-online)" : "var(--bs-cyan)"
                }, ";}"),
                be = n(74303),
                xe = n(38066),
                Ee = n(81617);
            n(4157);
            const we = function(e) {
                var t, n = e.user,
                    r = e.isEditable,
                    a = (0, k.a$)(),
                    l = (a._, a.fetchUser),
                    i = (0, j.wA)(),
                    s = o.useState(null !== (t = null == n ? void 0 : n.statusDescription) && void 0 !== t ? t : ""),
                    c = (0, x.A)(s, 2),
                    u = c[0],
                    d = c[1],
                    m = o.useState(!1),
                    p = (0, x.A)(m, 2),
                    f = p[0],
                    h = p[1],
                    g = o.useRef(null),
                    v = ((0, j.d4)(function(e) {
                        return e.currentUser.databaseUser
                    }), o.useCallback(function(e) {
                        var t, r, a;
                        null !== (t = g.current) && void 0 !== t && t.contains(e.target) || (null === (r = g.current) || void 0 === r || r.blur(), d(null !== (a = null == n ? void 0 : n.statusDescription) && void 0 !== a ? a : ""), h(!1))
                    }, [g.current]));
                o.useEffect(function() {
                    return f ? window.addEventListener("click", v) : window.removeEventListener("click", v),
                        function() {
                            window.removeEventListener("click", v)
                        }
                }, [f]), o.useEffect(function() {
                    var e;
                    d(null !== (e = null == n ? void 0 : n.statusDescription) && void 0 !== e ? e : "")
                }, [null == n ? void 0 : n.statusDescription]);
                var E = function() {
                    var e = (0, b.A)(w().mark(function e(t) {
                        return w().wrap(function(e) {
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
                                    return e.next = 12, i((0, ue.vv)({
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
                return r ? o.createElement(Ae, {
                    onClick: function(e) {
                        f || (e.stopPropagation(), h(!0), setTimeout(function() {
                            g.current.focus()
                        }))
                    },
                    role: "button",
                    title: "Edit Status",
                    tabIndex: 0
                }, f ? o.createElement(ye, {
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
                }) : o.createElement("div", null, u.length > 0 ? u : o.createElement(ke, null, "Set a status")), o.createElement(Ne, {
                    onClick: E,
                    size: "1x",
                    icon: f ? Ee.e6 : xe.hp
                })) : o.createElement("p", {
                    className: "statusDescription"
                }, o.createElement("small", null, n ? n.statusDescription : ""))
            };
            n.dn(we);
            var Ae = (0, a.A)(g.fI, {
                    target: "e16hr4le3"
                })({
                    name: "8boqxq",
                    styles: "display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;background-color:#798897;border-radius:3px;padding:0.3rem 2rem 0.3rem 0.5rem;transition:background-color 0.2s ease-in-out;cursor:pointer;overflow-x:hidden;font-size:13px;&:hover{background-color:#1a2026;input{color:var(--bs-primary);}svg{right:-1.5rem;}}"
                }),
                ye = (0, a.A)("input", {
                    target: "e16hr4le2"
                })({
                    name: "1so83ik",
                    styles: "background:transparent;padding:0;margin:0;border:none;outline:none!important;color:#fff;display:flex;flex-grow:1;border-bottom:1px solid rgba(255, 255, 255, 0.5)"
                }),
                ke = (0, a.A)("span", {
                    target: "e16hr4le1"
                })({
                    name: "1n4zmb4",
                    styles: "color:rgba(255, 255, 255, 0.5)"
                }),
                Ne = (0, a.A)(g.M2, {
                    target: "e16hr4le0"
                })("position:relative;right:-100px;transition:all 0.2s ease-in-out;color:white;&:hover{color:", function(e) {
                    return "check" === e.name ? "var(--status-online)" : "var(--bs-cyan)"
                }, ";}");

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(n), !0).forEach(function(t) {
                        (0, r.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ze = (0, a.A)("div", {
                target: "ek6wv4d0"
            })("margin:", function(e) {
                return "huge" === e.size ? "auto" : "auto 0px auto 60px"
            }, ";pointer-events:none;");
            const Ce = function(e) {
                var t, n = e.userId,
                    r = e.size,
                    a = e.showLocation,
                    c = e.showExtras,
                    b = e.showInvalid,
                    x = e.isUserHidden,
                    E = e.openLinksInNewTab,
                    w = void 0 !== E && E,
                    A = (0, W.vf)(n),
                    y = A.data,
                    O = A.isFetching,
                    C = A.isError,
                    j = A.error,
                    S = (0, I.M7)({
                        userId: n
                    }, {
                        skip: !n
                    }).data,
                    M = (0, I.jf)(n, {
                        skip: !n
                    }).data,
                    L = (0, N.p$)().data,
                    D = (0, k.Om)(),
                    T = (0, k.CT)().playerModerations,
                    P = T.mute.users,
                    H = T.block.users;
                if (!n) return null;
                if (b && C) return o.createElement(m.A, {
                    className: (0, s.AH)({
                        name: "1flzyeq",
                        styles: "padding:10px 20px;border:2px solid var(--level-visitor)"
                    })
                }, o.createElement(p.A, null, o.createElement("h6", null, "ID: ", n)), o.createElement(p.A, null, j.status, ":", null === (t = j.data) || void 0 === t || null === (t = t.error) || void 0 === t ? void 0 : t.message));
                if (!y || O) return o.createElement(v.A, null);
                var R = (0, be.Q_)({
                        tags: y.tags
                    }),
                    G = y.isFriend,
                    B = new Set(y.tags).has("admin_moderator"),
                    K = n === (null == L ? void 0 : L.id),
                    Y = new Set(H).has(n),
                    Q = new Set(P).has(n),
                    J = ["usercard"];
                J.push("friend-".concat(G)), J.push("size-".concat(r)), J.push("state-".concat(y.state)), J.push("level-".concat(R));
                var V = "Offline";
                if ("active" === y.state && (V = "Active"), "online" === y.state && (V = "In-World"), "traveling" === y.location && (V = "Loading a world"), null != y.error) return o.createElement("div", null);
                var X = null == S ? void 0 : S.iconUrl;
                return o.createElement("div", {
                    className: (0, s.AH)({
                        name: "irlerg",
                        styles: "&{text-align:left;}& .usercard{padding:10px;margin-bottom:5px;}& .card{background:#242a31;}& .card .user-img{float:left;margin:7px;}& .muteIcons{position:absolute;top:0;left:0;}& .muteIcons .btn{font-size:xx-small;}& .user-info{max-width:calc(100% - 120px);min-width:100px;}& .user-img{max-width:calc(100% - 14px);}& .info-button{position:absolute;top:5px;right:5px;}& h4{margin-bottom:2px;}& a{font-weight:bold;}& p{margin-bottom:0.2em;}& .p-l-0{padding-left:0px!important;padding-right:0px!important;}& .level-administrator,& .level-moderator{border:2px solid var(--developer);}& .level-visitor{border:2px solid var(--level-visitor);}& .level-new{border:2px solid var(--level-new);}& .level-user{border:2px solid var(--level-user);}& .level-known{border:2px solid var(--level-known);}& .level-trusted{border:2px solid var(--level-trusted);}& .state-online .user-img{border:2px solid var(--bs-green);}& .state-active .user-img{border:2px solid var(--bs-yellow);}& .state-active{opacity:0.9;}& .state-offline{opacity:0.7;}& .size-huge .user-img{width:285px;height:calc(285px * 0.75);}& .size-huge .muteIcons{display:none;}& .size-huge .user-bio,& .size-huge .user-bio-links{width:285px;}& .size-huge .user-bio textarea{min-height:200px;}& .size-slim .user-info{max-width:100%;width:100%;margin-left:10px;margin-right:10px;}& .size-wide .muteIcons{top:17px;left:4px;}& .size-wide{padding-top:2px;padding-bottom:2px;}& .size-wide .user-img{width:60px;height:calc(60px * 0.75);margin-left:115px;}& .size-wide .user-info{margin-left:0.7em;}& .size-wide .statusDescription,& .size-wide .offlineOrOnlineOrWhatever{display:none;}& .size-wide .user-info{margin:auto 0;h6,p{margin-bottom:0;}}& .user-languages{width:100%;}& .language-display-public{width:100%;text-align:center;vertical-align:middle;padding:0.5rem 0.75rem;border-radius:0.25rem;border-color:#f8f9fa;border:1px solid;}& .profile-link{margin-left:-7px;margin-right:-7px;padding-top:0.5rem;}& .extra-margin{margin-left:10px!important;}@media (max-width: 921px){.large-display-only{display:none;}}@media (max-width: 991px) and (min-width: 921px){.small-display-only{display:none;}}@media (max-width: 1578px) and (min-width: 992px){.large-display-only-2{display:none;}}@media (min-width: 1579px){.small-display-only-2{display:none;}}.ribbon{height:70px;left:-2px;overflow:hidden;position:absolute;text-align:right;top:-5px;width:75px;z-index:1;}.ribbon span{background:#8f0808;background:linear-gradient(#f70505 0%, #8f0808 100%);box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);color:#fff;display:block;font-size:0.8rem;font-weight:bold;left:-25px;left:-29px;line-height:22px;position:absolute;text-align:center;text-transform:uppercase;top:17px;transform:rotate(315deg);width:100px;}.ribbon span::before{border-bottom:3px solid transparent;border-left:3px solid #8f0808;border-right:3px solid transparent;border-top:3px solid #8f0808;content:'';left:0px;top:100%;position:absolute;z-index:-1;}.ribbon span::after{border-bottom:3px solid transparent;border-left:3px solid transparent;border-right:3px solid #8f0808;border-top:3px solid #8f0808;content:'';position:absolute;right:0%;top:100%;z-index:-1;}.ribbon--huge{height:93px;left:-7px;top:-7px;width:93px;}.ribbon--huge span{font-size:16px;left:-29px;line-height:32px;width:125px;}"
                    })
                }, o.createElement(m.A, {
                    className: J.join(" ")
                }, D && x && o.createElement("div", {
                    className: "ribbon ".concat("huge" === r ? "ribbon--huge" : "")
                }, o.createElement("span", null, "Hidden")), o.createElement(p.A, {
                    className: "mx-0 ".concat("slim" === r && "flex-column")
                }, o.createElement(f.A, {
                    md: "slim" === r ? 12 : 3,
                    className: "".concat("slim" === r && "px-0")
                }, "huge" === r && o.createElement(f.A, {
                    md: 12
                }, o.createElement(p.A, null, o.createElement(f.A, {
                    className: "p-0"
                }, D && x && o.createElement("div", {
                    className: "d-flex align-items-center position-absolute w-100 h-100"
                }, o.createElement(ze, {
                    size: r
                }, o.createElement(g.M2, {
                    icon: i.k6,
                    size: "5x"
                }))), o.createElement(d.N_, {
                    to: "/home/user/".concat(n),
                    title: y.state,
                    target: w ? "_blank" : void 0
                }, o.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: X
                })), o.createElement("div", {
                    className: "muteIcons"
                }, (!G || Y || Q) && o.createElement(h.A, null, o.createElement(F.A, {
                    visible: !B && !D && !K,
                    userId: n,
                    showText: !1
                }), o.createElement(_.A, {
                    visible: !B && !D && !K,
                    userId: n,
                    showText: !1
                }))))), "huge" === r && o.createElement(p.A, {
                    className: "large-display-only large-display-only-2"
                }, o.createElement(f.A, {
                    className: "p-0",
                    md: "12"
                }, o.createElement("div", null, o.createElement(q, {
                    userId: n
                }))))), !("huge" === r) && o.createElement("div", null, D && x && o.createElement("div", {
                    className: "d-flex align-items-center position-absolute h-100"
                }, o.createElement(ze, {
                    size: r
                }, o.createElement(g.M2, {
                    icon: i.k6,
                    size: "2x"
                }))), o.createElement(d.N_, {
                    to: "/home/user/".concat(n),
                    title: y.state,
                    target: w ? "_blank" : void 0
                }, o.createElement("img", {
                    alt: "profile",
                    className: "img-thumbnail user-img tw-object-cover tw-aspect-[3/2]",
                    src: X
                })), o.createElement("div", {
                    className: "muteIcons"
                }, (!G || Y || Q) && o.createElement(h.A, null, o.createElement(F.A, {
                    visible: !B && !D && !K,
                    userId: n,
                    showText: !1
                }), o.createElement(_.A, {
                    visible: !B && !D && !K,
                    userId: n,
                    showText: !1
                }))))), o.createElement(f.A, {
                    md: "slim" === r ? 12 : 8,
                    className: "user-info ".concat((0, s.AH)({
                        name: "182ot4e",
                        styles: "margin-left:1.5em"
                    }))
                }, o.createElement("h6", null, o.createElement(d.N_, {
                    to: "/home/user/".concat(n),
                    target: w ? "_blank" : void 0
                }, o.createElement($.A, {
                    status: y.status
                }), y.displayName)), o.createElement("p", {
                    className: "offlineOrOnlineOrWhatever"
                }, o.createElement("em", null, V)), "huge" === r && o.createElement(p.A, {
                    className: "small-display-only small-display-only-2"
                }, o.createElement(f.A, {
                    className: "p-0",
                    md: "12"
                }, o.createElement("div", null, o.createElement(q, {
                    userId: n
                })))), "huge" === r && o.createElement("div", null, o.createElement("div", {
                    className: "user-bio p-l-0"
                }, o.createElement(z, {
                    userId: n
                })), o.createElement("div", {
                    className: "user-bio-links p-2 p-l-0"
                }, o.createElement(U, {
                    userId: n,
                    index: 0
                }), o.createElement(U, {
                    userId: n,
                    index: 1
                }), o.createElement(U, {
                    userId: n,
                    index: 2
                }))), "offline" === y.state && y.last_login && o.createElement("p", {
                    className: "lastLogin"
                }, o.createElement("small", null, u()(y.last_login).fromNow())), "huge" === r && o.createElement(o.Fragment, null, o.createElement(we, {
                    user: y,
                    isEditable: K || !1
                }), o.createElement("br", null), o.createElement("h4", null, "Note"), o.createElement("br", null), o.createElement(de, {
                    user: Oe(Oe({}, y), {}, {
                        note: null == M ? void 0 : M.note
                    }),
                    isEditable: !0
                }))), o.createElement(f.A, {
                    md: "slim" === r ? 12 : 1
                }, o.createElement(oe, {
                    userId: n
                }))), "online" === y.state && a && o.createElement("div", null, y.location && o.createElement(se.A, {
                    location: y.location,
                    userId: n,
                    currentUser: L,
                    size: "normal"
                })), K && c && o.createElement("div", {
                    className: "profile-link"
                }, o.createElement(d.N_, {
                    to: "/home/profile",
                    className: "btn btn-outline-primary d-block",
                    target: w ? "_blank" : void 0
                }, o.createElement(g.M2, {
                    icon: l.dB
                }), "  Profile"))))
            }
        },
        42482(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(40223),
                a = n(56822),
                l = n(96540),
                i = n(74303);
            const o = function(e) {
                var t = e.status,
                    n = e.customStatus,
                    o = e.withLabel,
                    s = void 0 !== o && o,
                    c = e.isOffline,
                    u = void 0 !== c && c,
                    d = e.className,
                    m = e.isInActive,
                    p = void 0 !== m && m;
                if (null == t) return l.createElement("div", null);
                var f = (0, r.CD)(t) || {},
                    h = f.colorClass,
                    g = f.color,
                    v = n || (0, i.j$)(u ? "offline" : t, !0);
                return l.createElement("div", {
                    className: (0, a.cx)("tw-flex tw-items-center tw-gap-[6px]", d),
                    "aria-label": "User Status"
                }, l.createElement("span", {
                    className: (0, a.cx)("tw-w-2.5 tw-h-2.5 tw-rounded-full tw-flex-shrink-0 tw-border-solid tw-border-2", p ? "tw-bg-transparent" : "tw-bg-".concat(h) || 0),
                    style: {
                        borderColor: g
                    },
                    title: v
                }), s && l.createElement("span", {
                    className: "tw-text-sm tw-font-medium tw-max-w-[32ch] tw-m-0",
                    title: v
                }, v))
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
                d = n(71661),
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
                x = n(26973);
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
                    O = (0, l.d4)(function(e) {
                        return e.currentUser.isMod
                    }),
                    z = (0, l.d4)(function(e) {
                        return e.friends.users
                    }),
                    C = (0, l.d4)(function(e) {
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
                var U = function(e) {
                    return null !== e && (!1 === e.private && !(!1 !== e.friends && !C.includes(e.friends)))
                };
                if (null === t || "offline" === t) return null;
                var _ = t.split(":")[0],
                    j = t.split(":")[1],
                    S = j ? (0, h.LW)(j) : null,
                    M = a.createElement(s.A, {
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
                        src: "https://assets.vrchat.com/www/images/default_between_image.png"
                    }));
                if ("private" === t || "private" === _) return M;
                if ("traveling" === t) return L;
                if (O && A && A !== y.id) {
                    if (!S) return M;
                    if (!z[A]) return M;
                    if (!C.includes(A)) return M;
                    if (!["join me", "active"].includes(z[A].status)) return M;
                    if (!U(S)) return M
                }
                if (!S) return null;
                var D = N[_],
                    T = I[t],
                    P = (0, g.e2)(j);
                if (null == D) return a.createElement(b.A, null);
                var H = [""];
                H.push("location-card"), H.push("size-".concat(p));
                var R = (null == T ? void 0 : T.users) || [];
                if (O && (R = R.filter(function(e) {
                        return z[e] && ["join me", "active"].includes(z[e].status)
                    }), !A)) {
                    if (!U(S)) return null;
                    if (!R.length && (null == E || !1 !== S.hidden || !1 !== S.friends || !1 !== S.private)) return null
                }
                var G = R.map(function(e) {
                        return a.createElement("div", {
                            className: "card-container",
                            key: "location-".concat(e)
                        }, a.createElement(x.A, {
                            userId: e,
                            size: "wide"
                        }))
                    }),
                    B = j.match(/region\((us|use|eu|jp)\)/),
                    K = "us";
                return B && B.length > 1 && (K = B[1]), a.createElement("div", {
                    className: (0, i.AH)({
                        name: "1p96q4l",
                        styles: "& .location-card{margin:5px;padding:10px;text-align:left;background:#333c46;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .location-title a{color:white;}& .size-large{padding:20px;}& .size-large .location-title{font-weight:bold;}& .size-large .location-img{width:160px;height:calc(160px * 0.75);}& .size-large .location-users,.size-medium .location-users{margin-top:20px;margin-left:12px;margin-right:12px;}& .size-normal h6 a{font-weight:normal;}& .size-slim .location-img{width:100%;max-width:120px;height:auto;}& .size-slim .location-title{background-color:black;font-weight:normal;padding:2px;position:absolute;top:0px;width:100%;}& .location-users>div{display:grid;}& .location-users .usercard .img-thumbnail{margin:5px 5px 5px 0;}& .card-container{margin:0 3px;}& .location-users .usercard .user-info>h6{margin-bottom:0;}& .location-users .usercard .info-button{top:10px;}@media (min-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(4, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(3, 1fr);}}@media (max-width: 2735px){.location-card.size-large .location-users>div{grid-template-columns:repeat(3, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(2, 1fr);}}@media (max-width: 1900px){.location-card.size-large .location-users>div{grid-template-columns:repeat(2, 1fr);}.location-card.size-medium .location-users>div{grid-template-columns:repeat(1, 1fr);}}@media (max-width: 1500px){.location-card.size-large .location-users>div{grid-template-columns:repeat(1, 1fr);}}"
                    })
                }, a.createElement(s.A, {
                    className: H.join(" ")
                }, a.createElement("div", null, a.createElement(o.N_, {
                    to: "/home/launch?worldId=".concat(D.id, "&instanceId=").concat(j),
                    title: D.name,
                    target: "_blank"
                }, a.createElement("img", {
                    className: "img-thumbnail location-img",
                    src: (0, g.C_)(D),
                    alt: D.name
                })), a.createElement("h6", {
                    className: "location-title"
                }, null != T && a.createElement(c.A, null, R.length, " ", a.createElement(d.M2, {
                    icon: r.gd,
                    title: "Number of friends in instance"
                }), " "), null != E && a.createElement(c.A, null, E, "/", w), " ", a.createElement(o.N_, {
                    to: "/home/launch?worldId=".concat(D.id, "&instanceId=").concat(j),
                    title: D.name,
                    target: "_blank"
                }, D.name, " : ", a.createElement(v.A, {
                    region: K,
                    imageSize: "16px"
                }), " ", P, "  ")), m && a.createElement("div", null, a.createElement("p", null, a.createElement("small", null, D.description))), a.createElement("div", {
                    className: "clearfix"
                }), n && a.createElement("div", {
                    className: "location-users"
                }, a.createElement(u.A, null, G)))))
            }
        },
        57132(e, t, n) {
            n.d(t, {
                A: () => d
            });
            var r = n(82544),
                a = (n(70129), n(83697)),
                l = n(96540),
                i = n(30104),
                o = n(71661),
                s = n(74818),
                c = n(78502),
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
            var r = n(82544),
                a = (n(70129), n(62285)),
                l = n(77276),
                i = n(96540),
                o = n(30104),
                s = n(71661),
                c = n(74818),
                u = n(78502),
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
//# sourceMappingURL=c121fe6ef2c9aebec38add940c3cb27b3bce14862a233c247ffe22ede05b0d87.js.map