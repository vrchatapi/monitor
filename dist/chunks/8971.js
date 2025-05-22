(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8971], {
        37549: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(87462),
                o = r(67294),
                a = r(89250);
            const c = function(e) {
                return function(t) {
                    var r = (0, a.TH)(),
                        c = (0, a.s0)(),
                        l = (0, a.UO)();
                    return o.createElement(e, (0, n.Z)({}, t, {
                        router: {
                            location: r,
                            navigate: c,
                            params: l
                        }
                    }))
                }
            }
        },
        76939: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => C
            });
            var n = r(15861),
                o = r(15671),
                a = r(43144),
                c = r(97326),
                l = r(60136),
                s = r(82963),
                i = r(61120),
                u = r(4942),
                p = r(4965),
                h = r(64687),
                m = r.n(h),
                d = r(67294),
                f = r(32981),
                b = r(35773),
                y = r(95305),
                v = r(53637),
                g = r(9669),
                E = r.n(g),
                j = r(37463),
                A = r(47716),
                x = r(41400),
                O = r(22202),
                Z = r(37549);

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, u.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function U(e) {
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
                    var r, n = (0, i.Z)(e);
                    if (t) {
                        var o = (0, i.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, s.Z)(this, r)
                }
            }
            var _ = function(e) {
                (0, l.Z)(s, e);
                var t, r = U(s);

                function s(e) {
                    var t;
                    return (0, o.Z)(this, s), t = r.call(this, e), (0, u.Z)((0, c.Z)(t), "goToLogin", (function() {
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
                    }, t.handleAuthorize = t.handleAuthorize.bind((0, c.Z)(t)), t.handleCancel = t.handleCancel.bind((0, c.Z)(t)), t.loadOAuthInfo = t.loadOAuthInfo.bind((0, c.Z)(t)), t.changeUser = t.changeUser.bind((0, c.Z)(t)), t
                }
                return (0, a.Z)(s, [{
                    key: "componentDidMount",
                    value: function(e) {
                        var t, r = this;
                        null !== (t = this.props) && void 0 !== t && null !== (t = t.currentUser) && void 0 !== t && null !== (t = t.data) && void 0 !== t && t.id ? this.loadOAuthInfo(e).catch((function(e) {
                            console.error(e), r.setState({
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
                    value: (t = (0, n.Z)(m().mark((function e() {
                        var t, r, n, o, a, c, l, s, i, u, p, h, d;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (console.warn("LOAD OAUTH INFO"), t = new URL(window.location.href), r = t.searchParams.get("response_type"), n = t.searchParams.get("client_id"), o = t.searchParams.get("redirect_uri"), a = t.searchParams.get("scope"), c = t.searchParams.get("state"), null != r && null != n && null != c && null != o) {
                                        e.next = 10;
                                        break
                                    }
                                    return this.setState({
                                        loading: !1,
                                        error: "Invalid arguments"
                                    }), e.abrupt("return");
                                case 10:
                                    return l = !1, e.next = 13, E().get(window.apiUrl("/api/1/oauth/".concat(n))).catch((function(e) {
                                        l = e, console.error(e)
                                    }));
                                case 13:
                                    return s = e.sent, e.next = 16, E().get(window.apiUrl("/api/1/oauth/redirectCode")).catch((function(e) {
                                        l = e, console.error(e)
                                    }));
                                case 16:
                                    if (i = e.sent, !l) {
                                        e.next = 20;
                                        break
                                    }
                                    return this.setState({
                                        loading: !1,
                                        error: l
                                    }), e.abrupt("return");
                                case 20:
                                    u = s.data, p = i.data.code, h = a.split(/[,\s]+/g), d = h.map((function(e) {
                                        return k({
                                            scopeName: e
                                        }, u.scopes[e])
                                    })), this.setState({
                                        loading: !1,
                                        response_type: r,
                                        scope: a,
                                        state: c,
                                        client_id: n,
                                        redirect_uri: o,
                                        scopeDefinitions: d,
                                        oAuthVendor: u,
                                        redirectCode: p
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
                            r = (void 0 === t ? {} : t).data;
                        return !0 === this.state.loading ? d.createElement(j.UU, {
                            height: "320px"
                        }) : !1 !== this.state.error ? d.createElement(d.Fragment, null, d.createElement(j.oI, null, d.createElement(j.$4, null, "Invalid OAuth"), d.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Invalid OAuth")), d.createElement(j.Ao, null, d.createElement(b.Z, {
                            className: "mb-2"
                        }, d.createElement("p", null, "One or more of the ", d.createElement("strong", null, "OAuth Parameters"), " supplied to this page has been invalid."), d.createElement("div", null, d.createElement("ul", null, d.createElement("li", null, d.createElement("code", null, "response_type"), " — only 'code' is supported"), d.createElement("li", null, d.createElement("code", null, "client_id"), " — the ID of your OAuth Vendor record"), d.createElement("li", null, d.createElement("code", null, "scope"), " — the requested level of access"), d.createElement("li", null, d.createElement("code", null, "state"), " — this can be anything"), d.createElement("li", null, d.createElement("code", null, "redirect_uri"), " — this must match the ", d.createElement("code", null, "endpoint"), " in your OAuth Vendor record")))))) : d.createElement(d.Fragment, null, d.createElement(j.oI, null, d.createElement(j.$4, null, "Authorize ", this.state.oAuthVendor.name), d.createElement("h4", {
                            className: "fw-normal mb-0"
                        }, "Authorize ", this.state.oAuthVendor.name)), d.createElement(j.Ao, null, d.createElement(b.Z, {
                            className: "mb-2"
                        }, d.createElement(y.Z, {
                            sm: "4",
                            md: "5"
                        }, d.createElement(A.Z, {
                            size: "slim",
                            userId: r.id
                        }), d.createElement("small", null, d.createElement(P, {
                            type: "button",
                            onClick: this.changeUser
                        }, "That's not me!"))), d.createElement(y.Z, {
                            sm: "8",
                            md: "7"
                        }, d.createElement(b.Z, {
                            className: "mb-2"
                        }, d.createElement(y.Z, {
                            className: "d-flex align-items-center"
                        }, d.createElement("img", {
                            className: "img-thumbnail",
                            style: {
                                width: 80,
                                height: 80,
                                objectFit: "contain",
                                marginRight: ".75em"
                            },
                            alt: this.state.oAuthVendor.name,
                            src: this.state.oAuthVendor.thumbnail
                        }), d.createElement("div", null, d.createElement("strong", null, this.state.oAuthVendor.name), d.createElement("br", null), "by ", d.createElement("strong", null, this.state.oAuthVendor.company)))), d.createElement(b.Z, null, d.createElement(y.Z, null, d.createElement("p", null, d.createElement("strong", null, this.state.oAuthVendor.name), " wants to:"), (null === (e = this.state.scopeDefinitions) || void 0 === e ? void 0 : e.length) && d.createElement("ul", null, this.state.scopeDefinitions.map((function(e) {
                            return d.createElement("li", {
                                key: e.scopeName
                            }, d.createElement("b", null, e.description))
                        }))))))), d.createElement(b.Z, null, d.createElement(y.Z, {
                            className: "d-flex",
                            style: {
                                margin: "0 -0.25rem",
                                width: "auto",
                                maxWidth: "none"
                            }
                        }, d.createElement("div", {
                            className: "mx-1",
                            style: {
                                flex: "1 1 45px"
                            }
                        }, d.createElement(x.Gh, {
                            neutral: !0,
                            onClick: this.handleCancel
                        }, "Cancel")), d.createElement("div", {
                            className: "mx-1",
                            style: {
                                flex: "1 1 45px"
                            }
                        }, d.createElement(x.p, {
                            disabled: this.state.error,
                            onClick: this.handleAuthorize
                        }, "Authorize")))), d.createElement(b.Z, null, d.createElement(y.Z, {
                            className: "m-2 text-center",
                            style: {
                                width: "auto",
                                maxWidth: "none"
                            }
                        }, d.createElement("small", null, "You are authorizing ", this.state.oAuthVendor.company, " to process and share your data pursuant to its policies.")))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.createElement(v.Z, null, d.createElement(y.Z, {
                            lg: {
                                offset: 3,
                                size: 6
                            },
                            style: {
                                marginTop: "50px"
                            }
                        }, d.createElement(b.Z, {
                            className: "justify-content-center"
                        }, d.createElement(x.TR, {
                            href: "https://vrchat.com",
                            target: "_blank"
                        })), this.renderContents()))
                    }
                }]), s
            }(d.Component);
            const C = (0, Z.Z)((0, f.$j)((function(e) {
                return {
                    currentUser: O.ZP.endpoints.getCurrentUser.select()(e)
                }
            }))(_));
            var P = (0, p.Z)("button", {
                target: "elvryc20"
            })({
                name: "9xa7nk",
                styles: "background-color:transparent;border:none;color:rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));padding:0;&:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb);text-decoration:underline;}"
            })
        },
        14636: (e, t, r) => {
            var n = r(22545),
                o = r(35694),
                a = r(1469),
                c = r(44144),
                l = r(65776),
                s = r(36719),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = a(e),
                    u = !r && o(e),
                    p = !r && !u && c(e),
                    h = !r && !u && !p && s(e),
                    m = r || u || p || h,
                    d = m ? n(e.length, String) : [],
                    f = d.length;
                for (var b in e) !t && !i.call(e, b) || m && ("length" == b || p && ("offset" == b || "parent" == b) || h && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || l(b, f)) || d.push(b);
                return d
            }
        },
        29932: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                return o
            }
        },
        94311: (e, t, r) => {
            var n = r(69877);
            e.exports = function(e) {
                var t = e.length;
                return t ? e[n(0, t - 1)] : void 0
            }
        },
        38749: (e, t, r) => {
            var n = r(44239),
                o = r(41780),
                a = r(37005),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, e.exports = function(e) {
                return a(e) && o(e.length) && !!c[n(e)]
            }
        },
        280: (e, t, r) => {
            var n = r(25726),
                o = r(86916),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return o(e);
                var t = [];
                for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        69877: e => {
            var t = Math.floor,
                r = Math.random;
            e.exports = function(e, n) {
                return e + t(r() * (n - e + 1))
            }
        },
        84992: (e, t, r) => {
            var n = r(94311),
                o = r(61312);
            e.exports = function(e) {
                return n(o(e))
            }
        },
        22545: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
            }
        },
        7518: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        47415: (e, t, r) => {
            var n = r(29932);
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return e[t]
                }))
            }
        },
        25726: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t)
            }
        },
        86916: (e, t, r) => {
            var n = r(5569)(Object.keys, Object);
            e.exports = n
        },
        31167: (e, t, r) => {
            e = r.nmd(e);
            var n = r(31957),
                o = t && !t.nodeType && t,
                a = o && e && !e.nodeType && e,
                c = a && a.exports === o && n.process,
                l = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || c && c.binding && c.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        5569: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        },
        44144: (e, t, r) => {
            e = r.nmd(e);
            var n = r(55639),
                o = r(95062),
                a = t && !t.nodeType && t,
                c = a && e && !e.nodeType && e,
                l = c && c.exports === a ? n.Buffer : void 0,
                s = (l ? l.isBuffer : void 0) || o;
            e.exports = s
        },
        36719: (e, t, r) => {
            var n = r(38749),
                o = r(7518),
                a = r(31167),
                c = a && a.isTypedArray,
                l = c ? o(c) : n;
            e.exports = l
        },
        3674: (e, t, r) => {
            var n = r(14636),
                o = r(280),
                a = r(98612);
            e.exports = function(e) {
                return a(e) ? n(e) : o(e)
            }
        },
        95534: (e, t, r) => {
            var n = r(94311),
                o = r(84992),
                a = r(1469);
            e.exports = function(e) {
                return (a(e) ? n : o)(e)
            }
        },
        95062: e => {
            e.exports = function() {
                return !1
            }
        },
        61312: (e, t, r) => {
            var n = r(47415),
                o = r(3674);
            e.exports = function(e) {
                return null == e ? [] : n(e, o(e))
            }
        }
    }
]);
//# sourceMappingURL=4c0706eb486bfdf5283a108c3d971358ef0d7e5fc97a35bd5cfaf88bbc41ffec.js.map