"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2340], {
        86878(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(58168),
                a = n(96540),
                l = n(47767);
            const o = function(e) {
                return function(t) {
                    var n = (0, l.zy)(),
                        o = (0, l.Zp)(),
                        c = (0, l.g)();
                    return a.createElement(e, (0, r.A)({}, t, {
                        router: {
                            location: n,
                            navigate: o,
                            params: c
                        }
                    }))
                }
            }
        },
        82340(e, t, n) {
            n.r(t), n.d(t, {
                default: () => j
            });
            var r = n(10467),
                a = n(23029),
                l = n(92901),
                o = n(9417),
                c = n(85501),
                s = n(34441),
                i = n(53954),
                u = n(64467),
                m = n(70129),
                h = n(54756),
                d = n.n(h),
                p = n(96540),
                f = n(6376),
                g = n(35169),
                A = n(5826),
                E = n(39704),
                v = n(72505),
                b = n.n(v),
                y = n(15033),
                O = n(59362),
                w = n(82030),
                k = n(13951),
                x = n(86878);

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach(function(t) {
                        (0, u.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function C(e) {
                var t = P();
                return function() {
                    var n, r = (0, i.A)(e);
                    if (t) {
                        var a = (0, i.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, s.A)(this, n)
                }
            }

            function P() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (P = function() {
                    return !!e
                })()
            }
            var U = function(e) {
                (0, c.A)(s, e);
                var t, n = C(s);

                function s(e) {
                    var t;
                    return (0, a.A)(this, s), t = n.call(this, e), (0, u.A)((0, o.A)(t), "goToLogin", function() {
                        t.props.router.navigate("/home/login", {
                            state: {
                                logout: !0,
                                redirectTo: t.props.router.location.pathname + t.props.router.location.search
                            }
                        })
                    }), t.state = {
                        loading: !0,
                        error: !1,
                        oAuthVendor: {
                            name: "???"
                        }
                    }, t.handleAuthorize = t.handleAuthorize.bind((0, o.A)(t)), t.handleCancel = t.handleCancel.bind((0, o.A)(t)), t.loadOAuthInfo = t.loadOAuthInfo.bind((0, o.A)(t)), t.changeUser = t.changeUser.bind((0, o.A)(t)), t
                }
                return (0, l.A)(s, [{
                    key: "componentDidMount",
                    value: function(e) {
                        var t, n = this;
                        null !== (t = this.props) && void 0 !== t && null !== (t = t.currentUser) && void 0 !== t && null !== (t = t.data) && void 0 !== t && t.id ? this.loadOAuthInfo(e).catch(function(e) {
                            console.error(e), n.setState({
                                error: !0
                            })
                        }) : setTimeout(this.goToLogin)
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
                    value: (t = (0, r.A)(d().mark(function e() {
                        var t, n, r, a, l, o, c, s, i, u, m, h, p;
                        return d().wrap(function(e) {
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
                                    return c = !1, e.next = 13, b().get(window.apiUrl("/api/1/oauth/".concat(r))).catch(function(e) {
                                        c = e, console.error(e)
                                    });
                                case 13:
                                    return s = e.sent, e.next = 16, b().get(window.apiUrl("/api/1/oauth/redirectCode")).catch(function(e) {
                                        c = e, console.error(e)
                                    });
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
                                    u = s.data, m = i.data.code, h = l.split(/[,\s]+/g), p = h.map(function(e) {
                                        return N({
                                            scopeName: e
                                        }, u.scopes[e])
                                    }), this.setState({
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
                        }, e, this)
                    })), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "renderContents",
                    value: function() {
                        var e, t = this.props.currentUser,
                            n = (void 0 === t ? {} : t).data;
                        return !0 === this.state.loading ? p.createElement(y.fy, {
                            height: "320px"
                        }) : !1 !== this.state.error ? p.createElement(p.Fragment, null, p.createElement(y.N3, null, p.createElement(y.Qc, null, "Invalid OAuth"), p.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Invalid OAuth")), p.createElement(y.BW, null, p.createElement(A.A, {
                            className: "mb-2"
                        }, p.createElement("p", null, "One or more of the ", p.createElement("strong", null, "OAuth Parameters"), " supplied to this page has been invalid."), p.createElement("div", null, p.createElement("ul", null, p.createElement("li", null, p.createElement("code", null, "response_type"), " — only 'code' is supported"), p.createElement("li", null, p.createElement("code", null, "client_id"), " — the ID of your OAuth Vendor record"), p.createElement("li", null, p.createElement("code", null, "scope"), " — the requested level of access"), p.createElement("li", null, p.createElement("code", null, "state"), " — this can be anything"), p.createElement("li", null, p.createElement("code", null, "redirect_uri"), " — this must match the ", p.createElement("code", null, "endpoint"), " in your OAuth Vendor record")))))) : p.createElement(p.Fragment, null, p.createElement(y.N3, null, p.createElement(y.Qc, null, "Authorize ", this.state.oAuthVendor.name), p.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Authorize ", this.state.oAuthVendor.name)), p.createElement(y.BW, null, p.createElement(A.A, {
                            className: "mb-2"
                        }, p.createElement(E.A, {
                            sm: "4",
                            md: "4"
                        }, p.createElement(O.A, {
                            size: "slim",
                            userId: n.id
                        }), p.createElement("small", null, p.createElement(D, {
                            type: "button",
                            onClick: this.changeUser
                        }, "That's not me!"))), p.createElement(E.A, {
                            sm: "8",
                            md: "7"
                        }, p.createElement(A.A, {
                            className: "mb-2"
                        }, p.createElement(E.A, {
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
                        }), p.createElement("div", null, p.createElement("strong", null, this.state.oAuthVendor.name), p.createElement("br", null), "by ", p.createElement("strong", null, this.state.oAuthVendor.company)))), p.createElement(A.A, null, p.createElement(E.A, null, p.createElement("p", null, p.createElement("strong", null, this.state.oAuthVendor.name), " wants to:"), (null === (e = this.state.scopeDefinitions) || void 0 === e ? void 0 : e.length) && p.createElement("ul", null, this.state.scopeDefinitions.map(function(e) {
                            return p.createElement("li", {
                                key: e.scopeName
                            }, p.createElement("b", null, e.description))
                        })))))), p.createElement(A.A, null, p.createElement(E.A, {
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
                        }, p.createElement(w.UZ, {
                            neutral: !0,
                            onClick: this.handleCancel
                        }, "Cancel")), p.createElement("div", {
                            className: "mx-1",
                            style: {
                                flex: "1 1 45px"
                            }
                        }, p.createElement(w.py, {
                            disabled: this.state.error,
                            onClick: this.handleAuthorize
                        }, "Authorize")))), p.createElement(A.A, null, p.createElement(E.A, {
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
                        return p.createElement(g.A, null, p.createElement(E.A, {
                            lg: {
                                offset: 3,
                                size: 6
                            },
                            style: {
                                marginTop: "50px"
                            }
                        }, p.createElement(A.A, {
                            className: "justify-content-center"
                        }, p.createElement(w.gu, {
                            href: "https://vrchat.com",
                            target: "_blank"
                        })), this.renderContents()))
                    }
                }]), s
            }(p.Component);
            const j = (0, x.A)((0, f.Ng)(function(e) {
                return {
                    currentUser: k.Ay.endpoints.getCurrentUser.select()(e)
                }
            })(U));
            var D = (0, m.A)("button", {
                target: "elvryc20"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            })
        }
    }
]);
//# sourceMappingURL=afccdc69a0352242fee2599769ded1e31cc140efb07049e0de0b0a66a8a8ced9.js.map