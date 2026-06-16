"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4790], {
        62573(e, t) {
            var r = "fire",
                n = [128293],
                s = "f06d",
                o = "M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z";
            t.mw = {
                prefix: "fas",
                iconName: r,
                icon: [448, 512, n, s, o]
            }, t.kN = t.mw
        },
        70414(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "temperature-empty",
                n = ["temperature-0", "thermometer-0", "thermometer-empty"],
                s = "f2cb",
                o = "M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L112 112zM160 0C98.1 0 48 50.2 48 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L272 112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
            t.definition = {
                prefix: "fas",
                iconName: r,
                icon: [320, 512, n, s, o]
            }, t.faTemperatureEmpty = t.definition, t.prefix = "fas", t.iconName = r, t.width = 320, t.height = 512, t.ligatures = n, t.unicode = s, t.svgPathData = o, t.aliases = n
        },
        26948(e, t, r) {
            var n = r(70414);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.zf = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        48645(e, t, r) {
            var n = r(82628);
            t.mw = {
                prefix: n.prefix,
                iconName: n.iconName,
                icon: [n.width, n.height, n.aliases, n.unicode, n.svgPathData]
            }, t.QJ = t.mw, n.prefix, n.iconName, n.width, n.height, n.aliases, n.unicode, n.svgPathData, n.aliases
        },
        96426(e, t, r) {
            r.r(t), r.d(t, {
                default: () => L
            });
            var n = r(10467),
                s = r(82544),
                o = r(48645),
                a = r(54756),
                i = r.n(a),
                l = r(96540),
                c = r(6376),
                u = r(5826),
                d = r(39704),
                p = r(15033),
                h = (r(59040), r(89140), r(64467)),
                f = r(23029),
                m = r(92901),
                g = r(9417),
                b = r(85501),
                y = r(34441),
                v = r(53954),
                w = r(59221),
                A = r(6077),
                O = r(72505),
                E = r.n(O),
                P = r(30104),
                C = r(21247),
                S = r(35936),
                j = r(75255),
                M = r(47486);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach(function(t) {
                        (0, h.A)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function T(e) {
                var t = x();
                return function() {
                    var r, n = (0, v.A)(e);
                    if (t) {
                        var s = (0, v.A)(this).constructor;
                        r = Reflect.construct(n, arguments, s)
                    } else r = n.apply(this, arguments);
                    return (0, y.A)(this, r)
                }
            }

            function x() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (x = function() {
                    return !!e
                })()
            }
            var W = function(e) {
                (0, b.A)(a, e);
                var t, r, s, o = T(a);

                function a(e) {
                    var t;
                    return (0, f.A)(this, a), (t = o.call(this, e)).state = {
                        collapseOpen: e.collapseOpen || !1,
                        worlds: [],
                        showModTags: e.showModTags,
                        title: e.title,
                        unityVersion: e.unityVersion,
                        minUnityVersion: e.minUnityVersion,
                        releaseStatus: e.releaseStatus || "public",
                        organization: e.organization || "vrchat",
                        sort: e.sort || "shuffle",
                        featured: e.featured,
                        tag: e.tag,
                        notag: e.notag,
                        order: e.order || "descending",
                        user: e.user,
                        userId: e.userId,
                        n: e.n || 20,
                        offset: e.offset || 0,
                        moreWorlds: !0,
                        loading: !1,
                        slim: e.slim || !1,
                        hideAuthor: e.hideAuthor || !1,
                        confirming: ""
                    }, t.toggleCollapse = t.toggleCollapse.bind((0, g.A)(t)), t.buildQuery = t.buildQuery.bind((0, g.A)(t)), t.loadMoreWorlds = t.loadMoreWorlds.bind((0, g.A)(t)), t.showConfirmPrivateAll = t.showConfirmPrivateAll.bind((0, g.A)(t)), t.showConfirmHideAll = t.showConfirmHideAll.bind((0, g.A)(t)), t.confirmPrivateAll = t.confirmPrivateAll.bind((0, g.A)(t)), t.confirmHideAll = t.confirmHideAll.bind((0, g.A)(t)), t.cancelWorldConfirm = t.cancelWorldConfirm.bind((0, g.A)(t)), t
                }
                return (0, m.A)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.n = 20, this.offset = 0, this.loadMoreWorlds()
                    }
                }, {
                    key: "toggleCollapse",
                    value: function() {
                        this.setState({
                            collapseOpen: !this.state.collapseOpen
                        })
                    }
                }, {
                    key: "showConfirmPrivateAll",
                    value: function() {
                        this.setState({
                            confirming: "privateAll"
                        })
                    }
                }, {
                    key: "showConfirmHideAll",
                    value: function() {
                        this.setState({
                            confirming: "hideAll"
                        })
                    }
                }, {
                    key: "confirmPrivateAll",
                    value: (s = (0, n.A)(i().mark(function e() {
                        return i().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchPrivateAll();
                                case 3:
                                    this.setState({
                                        worlds: this.state.worlds.map(function(e) {
                                            return N(N({}, e), {}, {
                                                releaseStatus: "private"
                                            })
                                        })
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "confirmHideAll",
                    value: (r = (0, n.A)(i().mark(function e() {
                        return i().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchHideAll();
                                case 3:
                                    this.setState({
                                        worlds: []
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "cancelWorldConfirm",
                    value: function() {
                        this.setState({
                            confirming: ""
                        })
                    }
                }, {
                    key: "buildQuery",
                    value: function() {
                        var e = "/api/1/worlds?";
                        return null != this.state.unityVersion && (e = "".concat(e, "&maxUnityVersion=").concat(this.state.unityVersion, "&")), null != this.state.releaseStatus && (e = "".concat(e, "releaseStatus=").concat(this.state.releaseStatus, "&")), null != this.state.organization && (e = "".concat(e, "organization=").concat(this.state.organization, "&")), null != this.state.sort && (e = "".concat(e, "sort=").concat(this.state.sort, "&")), null != this.state.featured && (e = "".concat(e, "featured=").concat(this.state.featured, "&")), null != this.state.tag && (e = "".concat(e, "tag=").concat(this.state.tag, "&")), null != this.state.notag && (e = "".concat(e, "notag=").concat(this.state.notag, "&")), null != this.state.order && (e = "".concat(e, "order=").concat(this.state.order, "&")), null != this.state.user && (e = "".concat(e, "user=").concat(this.state.user, "&")), null != this.state.userId && (e = "".concat(e, "userId=").concat(this.state.userId, "&")), null != this.state.n && (e = "".concat(e, "n=").concat(this.state.n, "&")), null != this.state.offset && (e = "".concat(e, "offset=").concat(this.state.offset)), window.apiUrl(e)
                    }
                }, {
                    key: "loadMoreWorlds",
                    value: (t = (0, n.A)(i().mark(function e() {
                        var t, r, n = this;
                        return i().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.buildQuery(), this.setState({
                                        loading: !0
                                    }), e.next = 4, E().get(t);
                                case 4:
                                    200 === (r = e.sent).status ? 0 === r.data.length ? setTimeout(function() {
                                        n.setState({
                                            moreWorlds: !1,
                                            loading: !1
                                        })
                                    }, 250) : (this.setState({
                                        worlds: this.state.worlds.concat(r.data),
                                        offset: this.state.offset + this.state.n,
                                        moreWorlds: r.data.length >= this.state.n - 1
                                    }), setTimeout(function() {
                                        n.setState({
                                            loading: !1
                                        })
                                    }, 250)) : console.error(r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = (this.props.isMod, this.state.worlds.map(function(t, r) {
                                return l.createElement(S.A, {
                                    world: t,
                                    key: "".concat(t.id, "_").concat(r),
                                    showModTags: e.state.showModTags,
                                    slim: e.state.slim,
                                    hideAuthor: e.state.hideAuthor
                                })
                            }));
                        return this.state.worlds.length > 0 ? l.createElement("div", null, l.createElement("h3", null, l.createElement(P.A, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && l.createElement(p.M2, {
                            icon: A.Ip
                        }), !this.state.collapseOpen && l.createElement(p.M2, {
                            icon: w.OQ
                        })), " ", this.state.title), l.createElement(C.A, {
                            isOpen: this.state.collapseOpen
                        }, "privateAll" === this.state.confirming && l.createElement(M.A, {
                            prompt: "Are you sure you want to private all worlds belonging to this user?",
                            confirmLink: this.confirmPrivateAll,
                            cancelLink: this.cancelWorldConfirm
                        }), "hideAll" === this.state.confirming && l.createElement(M.A, {
                            prompt: "Are you sure you want to DELETE all worlds belonging to this user? THIS CANNOT BE UNDONE!!!",
                            confirmLink: this.confirmHideAll,
                            cancelLink: this.cancelWorldConfirm
                        }), !1, l.createElement(u.A, null, t, l.createElement(d.A, {
                            md: "3",
                            className: "text-center"
                        }, l.createElement(j.A, {
                            onClick: this.loadMoreWorlds,
                            loading: this.state.loading,
                            hidden: !this.state.moreWorlds,
                            color: "primary"
                        }, "Load More Worlds")))), l.createElement("hr", null)) : l.createElement("div", null)
                    }
                }]), a
            }(l.Component);
            const D = W;
            r(7563), r(70312), r(54445), r(47213), r(62278);
            var V = r(50779),
                _ = r(194);
            const L = function() {
                (0, c.wA)();
                var e = l.useState(""),
                    t = (0, s.A)(e, 2),
                    r = (t[0], t[1], (0, V.G)().data),
                    n = void 0 === r ? {} : r,
                    a = (0, _.Om)(),
                    i = ((0, c.d4)(function(e) {
                        return e.miscellaneous
                    }), n.sdkUnityVersion);
                return a ? l.createElement(u.A, {
                    className: "center-block text-center justify-content-center mb-4"
                }, l.createElement(d.A, {
                    xs: "12"
                }, l.createElement("h2", null, "Mod Tools"), !1, !1, l.createElement(D, {
                    title: "New To The Labs",
                    releaseStatus: "public",
                    sort: "labsPublicationDate",
                    tag: "system_labs",
                    notag: "admin_approved",
                    order: "descending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "High Report Score",
                    releaseStatus: "public",
                    sort: "reportScore",
                    notag: "admin_approved",
                    order: "descending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Most Reported Worlds",
                    releaseStatus: "public",
                    sort: "reportCount",
                    notag: "admin_approved",
                    order: "descending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Untrusted Worlds",
                    releaseStatus: "public",
                    sort: "trust",
                    notag: "admin_approved",
                    order: "ascending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Recently Updated",
                    releaseStatus: "public",
                    sort: "shuffle",
                    tag: "system_updated_recently",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Most Reported Admin Approved Worlds",
                    releaseStatus: "public",
                    sort: "reportCount",
                    tag: "admin_approved",
                    order: "descending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Untrusted Admin Approved Worlds",
                    releaseStatus: "public",
                    sort: "trust",
                    tag: "admin_approved",
                    order: "ascending",
                    unityVersion: i,
                    showModTags: !0
                }), l.createElement(D, {
                    title: "Failed Worlds",
                    releaseStatus: "private",
                    sort: "labsPublicationDate",
                    tag: "system_troll",
                    order: "ascending",
                    unityVersion: i,
                    showModTags: !0
                }))) : l.createElement(u.A, null, l.createElement(d.A, null, l.createElement("div", {
                    role: "alert"
                }, l.createElement(p.M2, {
                    icon: o.QJ
                }), l.createElement("p", null, "You're not supposed to be here! INTERLOPER!"))))
            }
        },
        85052(e, t, r) {
            r.d(t, {
                A: () => y
            });
            var n = r(96540),
                s = r(5556),
                o = r.n(s),
                a = r(32485),
                i = r.n(a),
                l = r(56331),
                c = r(60014),
                u = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, d.apply(this, arguments)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach(function(t) {
                        f(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function m(e, t) {
                if (null == e) return {};
                var r, n, s = function(e, t) {
                    if (null == e) return {};
                    var r, n, s = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                }
                return s
            }
            var g = {
                children: o().node,
                className: o().string,
                closeClassName: o().string,
                closeAriaLabel: o().string,
                color: o().string,
                cssModule: o().object,
                fade: o().bool,
                innerRef: o().oneOfType([o().object, o().string, o().func]),
                isOpen: o().bool,
                tag: l.Wx,
                toggle: o().func,
                transition: o().shape(c.A.propTypes)
            };

            function b(e) {
                var t = e.className,
                    r = e.closeClassName,
                    s = e.closeAriaLabel,
                    o = void 0 === s ? "Close" : s,
                    a = e.cssModule,
                    p = e.tag,
                    f = void 0 === p ? "div" : p,
                    g = e.color,
                    b = void 0 === g ? "success" : g,
                    y = e.isOpen,
                    v = void 0 === y || y,
                    w = e.toggle,
                    A = e.children,
                    O = e.transition,
                    E = void 0 === O ? h(h({}, c.A.defaultProps), {}, {
                        unmountOnExit: !0
                    }) : O,
                    P = e.fade,
                    C = void 0 === P || P,
                    S = e.innerRef,
                    j = m(e, u),
                    M = (0, l.qO)(i()(t, "alert", "alert-".concat(b), {
                        "alert-dismissible": w
                    }), a),
                    k = (0, l.qO)(i()("btn-close", r), a),
                    N = h(h(h({}, c.A.defaultProps), E), {}, {
                        baseClass: C ? E.baseClass : "",
                        timeout: C ? E.timeout : 0
                    });
                return n.createElement(c.A, d({}, j, N, {
                    tag: f,
                    className: M,
                    in: v,
                    role: "alert",
                    innerRef: S
                }), w ? n.createElement("button", {
                    type: "button",
                    className: k,
                    "aria-label": o,
                    onClick: w
                }) : null, A)
            }
            b.propTypes = g;
            const y = b
        }
    }
]);
//# sourceMappingURL=b02cd8a618cdcfabf0fb4990085591cae02af7679dcb0147631bc815c3ce9c0b.js.map