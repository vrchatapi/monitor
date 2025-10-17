"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [6939], {
        37549: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(87462),
                a = n(67294),
                l = n(89250);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.TH)(),
                        o = (0, l.s0)(),
                        c = (0, l.UO)();
                    return a.createElement(e, (0, r.Z)({}, t, {
                        router: {
                            location: n,
                            navigate: o,
                            params: c
                        }
                    }))
                }
            }
        },
        76939: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => U
            });
            var r = n(15861),
                a = n(15671),
                l = n(43144),
                o = n(97326),
                c = n(60136),
                s = n(82963),
                i = n(61120),
                u = n(4942),
                m = n(4965),
                h = n(64687),
                d = n.n(h),
                p = n(67294),
                f = n(32981),
                g = n(35773),
                E = n(95305),
                b = n(53637),
                v = n(9669),
                y = n.n(v),
                Z = n(96985),
                O = n(47716),
                w = n(41400),
                A = n(22202),
                k = n(37549);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function C(e) {
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
                    var n, r = (0, i.Z)(e);
                    if (t) {
                        var a = (0, i.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var P = function(e) {
                (0, c.Z)(s, e);
                var t, n = C(s);

                function s(e) {
                    var t;
                    return (0, a.Z)(this, s), t = n.call(this, e), (0, u.Z)((0, o.Z)(t), "goToLogin", (function() {
                        t.props.router.navigate("/home/login", {
                            state: {
                                logout: !0,
                                redirectTo: t.props.router.location.pathname + t.props.router.location.search
                            }
                        })
                    })), t.state = {
                        loading: !0,
                        error: !1,
                        oAuthVendor: {
                            name: "???"
                        }
                    }, t.handleAuthorize = t.handleAuthorize.bind((0, o.Z)(t)), t.handleCancel = t.handleCancel.bind((0, o.Z)(t)), t.loadOAuthInfo = t.loadOAuthInfo.bind((0, o.Z)(t)), t.changeUser = t.changeUser.bind((0, o.Z)(t)), t
                }
                return (0, l.Z)(s, [{
                    key: "componentDidMount",
                    value: function(e) {
                        var t, n = this;
                        null !== (t = this.props) && void 0 !== t && null !== (t = t.currentUser) && void 0 !== t && null !== (t = t.data) && void 0 !== t && t.id ? this.loadOAuthInfo(e).catch((function(e) {
                            console.error(e), n.setState({
                                error: !0
                            })
                        })) : setTimeout(this.goToLogin)
                    }
                }, {
                    key: "handleAuthorize",
                    value: function(e) {
                        e.preventDefault(), window.location.assign(window.apiUrl("/api/1/oauth/redirect?redirect_code=".concat(this.state.redirectCode) + "&response_type=".concat(this.state.response_type) + "&client_id=".concat(this.state.client_id) + "&scope=".concat(this.state.scope) + "&redirect_uri=".concat(this.state.redirect_uri) + "&state=".concat(this.state.state)))
                    }
                }, {
                    key: "handleCancel",
                    value: function() {
                        this.props.router.navigate("/home")
                    }
                }, {
                    key: "changeUser",
                    value: function(e) {
                        e.preventDefault(), this.goToLogin()
                    }
                }, {
                    key: "loadOAuthInfo",
                    value: (t = (0, r.Z)(d().mark((function e() {
                        var t, n, r, a, l, o, c, s, i, u, m, h, p;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (console.warn("LOAD OAUTH INFO"), t = new URL(window.location.href), n = t.searchParams.get("response_type"), r = t.searchParams.get("client_id"), a = t.searchParams.get("redirect_uri"), l = t.searchParams.get("scope"), o = t.searchParams.get("state"), null != n && null != r && null != o && null != a) {
                                        e.next = 10;
                                        break
                                    }
                                    return this.setState({
                                        loading: !1,
                                        error: "Invalid arguments"
                                    }), e.abrupt("return");
                                case 10:
                                    return c = !1, e.next = 13, y().get(window.apiUrl("/api/1/oauth/".concat(r))).catch((function(e) {
                                        c = e, console.error(e)
                                    }));
                                case 13:
                                    return s = e.sent, e.next = 16, y().get(window.apiUrl("/api/1/oauth/redirectCode")).catch((function(e) {
                                        c = e, console.error(e)
                                    }));
                                case 16:
                                    if (i = e.sent, !c) {
                                        e.next = 20;
                                        break
                                    }
                                    return this.setState({
                                        loading: !1,
                                        error: c
                                    }), e.abrupt("return");
                                case 20:
                                    u = s.data, m = i.data.code, h = l.split(/[,\s]+/g), p = h.map((function(e) {
                                        return _({
                                            scopeName: e
                                        }, u.scopes[e])
                                    })), this.setState({
                                        loading: !1,
                                        response_type: n,
                                        scope: l,
                                        state: o,
                                        client_id: r,
                                        redirect_uri: a,
                                        scopeDefinitions: p,
                                        oAuthVendor: u,
                                        redirectCode: m
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "renderContents",
                    value: function() {
                        var e, t = this.props.currentUser,
                            n = (void 0 === t ? {} : t).data;
                        return !0 === this.state.loading ? p.createElement(Z.UU, {
                            height: "320px"
                        }) : !1 !== this.state.error ? p.createElement(p.Fragment, null, p.createElement(Z.oI, null, p.createElement(Z.$4, null, "Invalid OAuth"), p.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Invalid OAuth")), p.createElement(Z.Ao, null, p.createElement(g.Z, {
                            className: "mb-2"
                        }, p.createElement("p", null, "One or more of the ", p.createElement("strong", null, "OAuth Parameters"), " supplied to this page has been invalid."), p.createElement("div", null, p.createElement("ul", null, p.createElement("li", null, p.createElement("code", null, "response_type"), " — only 'code' is supported"), p.createElement("li", null, p.createElement("code", null, "client_id"), " — the ID of your OAuth Vendor record"), p.createElement("li", null, p.createElement("code", null, "scope"), " — the requested level of access"), p.createElement("li", null, p.createElement("code", null, "state"), " — this can be anything"), p.createElement("li", null, p.createElement("code", null, "redirect_uri"), " — this must match the ", p.createElement("code", null, "endpoint"), " in your OAuth Vendor record")))))) : p.createElement(p.Fragment, null, p.createElement(Z.oI, null, p.createElement(Z.$4, null, "Authorize ", this.state.oAuthVendor.name), p.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Authorize ", this.state.oAuthVendor.name)), p.createElement(Z.Ao, null, p.createElement(g.Z, {
                            className: "mb-2"
                        }, p.createElement(E.Z, {
                            sm: "4",
                            md: "4"
                        }, p.createElement(O.Z, {
                            size: "slim",
                            userId: n.id
                        }), p.createElement("small", null, p.createElement(N, {
                            type: "button",
                            onClick: this.changeUser
                        }, "That's not me!"))), p.createElement(E.Z, {
                            sm: "8",
                            md: "7"
                        }, p.createElement(g.Z, {
                            className: "mb-2"
                        }, p.createElement(E.Z, {
                            className: "d-flex align-items-center"
                        }, p.createElement("img", {
                            className: "img-thumbnail",
                            style: {
                                width: 80,
                                height: 80,
                                objectFit: "contain",
                                marginRight: ".75em"
                            },
                            alt: this.state.oAuthVendor.name,
                            src: this.state.oAuthVendor.thumbnail
                        }), p.createElement("div", null, p.createElement("strong", null, this.state.oAuthVendor.name), p.createElement("br", null), "by ", p.createElement("strong", null, this.state.oAuthVendor.company)))), p.createElement(g.Z, null, p.createElement(E.Z, null, p.createElement("p", null, p.createElement("strong", null, this.state.oAuthVendor.name), " wants to:"), (null === (e = this.state.scopeDefinitions) || void 0 === e ? void 0 : e.length) && p.createElement("ul", null, this.state.scopeDefinitions.map((function(e) {
                            return p.createElement("li", {
                                key: e.scopeName
                            }, p.createElement("b", null, e.description))
                        }))))))), p.createElement(g.Z, null, p.createElement(E.Z, {
                            className: "d-flex",
                            style: {
                                margin: "0 -0.25rem",
                                width: "auto",
                                maxWidth: "none"
                            }
                        }, p.createElement("div", {
                            className: "mx-1",
                            style: {
                                flex: "1 1 45px"
                            }
                        }, p.createElement(w.Gh, {
                            neutral: !0,
                            onClick: this.handleCancel
                        }, "Cancel")), p.createElement("div", {
                            className: "mx-1",
                            style: {
                                flex: "1 1 45px"
                            }
                        }, p.createElement(w.p, {
                            disabled: this.state.error,
                            onClick: this.handleAuthorize
                        }, "Authorize")))), p.createElement(g.Z, null, p.createElement(E.Z, {
                            className: "m-2 text-center",
                            style: {
                                width: "auto",
                                maxWidth: "none"
                            }
                        }, p.createElement("small", null, "You are authorizing ", this.state.oAuthVendor.company, " to process and share your data pursuant to its policies.")))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return p.createElement(b.Z, null, p.createElement(E.Z, {
                            lg: {
                                offset: 3,
                                size: 6
                            },
                            style: {
                                marginTop: "50px"
                            }
                        }, p.createElement(g.Z, {
                            className: "justify-content-center"
                        }, p.createElement(w.TR, {
                            href: "https://vrchat.com",
                            target: "_blank"
                        })), this.renderContents()))
                    }
                }]), s
            }(p.Component);
            const U = (0, k.Z)((0, f.$j)((function(e) {
                return {
                    currentUser: A.ZP.endpoints.getCurrentUser.select()(e)
                }
            }))(P));
            var N = (0, m.Z)("button", {
                target: "elvryc20"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            })
        }
    }
]);
//# sourceMappingURL=f3044e9264047cc2168006542a2046070d02737b3d3889e8c5b408b7826f91c5.js.map