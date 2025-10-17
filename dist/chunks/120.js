"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [120], {
        20821: (e, t) => {
            var n = "fire",
                r = [128293],
                s = "f06d",
                a = "M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z";
            t.DF = {
                prefix: "fas",
                iconName: n,
                icon: [448, 512, r, s, a]
            }, t.Rp = t.DF
        },
        39109: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "temperature-empty",
                r = ["temperature-0", "thermometer-0", "thermometer-empty"],
                s = "f2cb",
                a = "M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L112 112zM160 0C98.1 0 48 50.2 48 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L272 112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [320, 512, r, s, a]
            }, t.faTemperatureEmpty = t.definition, t.prefix = "fas", t.iconName = n, t.width = 320, t.height = 512, t.ligatures = r, t.unicode = s, t.svgPathData = a, t.aliases = r
        },
        5147: (e, t, n) => {
            var r = n(39109);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.$c = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        21707: (e, t, n) => {
            var r = n(53359);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.e7 = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        28565: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => V
            });
            var r = n(15861),
                s = n(54546),
                a = n(21707),
                o = n(64687),
                i = n.n(o),
                l = n(67294),
                c = n(32981),
                u = n(35773),
                d = n(95305),
                h = n(96985),
                p = (n(46326), n(90922), n(4942)),
                f = n(15671),
                m = n(43144),
                g = n(97326),
                y = n(60136),
                v = n(82963),
                w = n(61120),
                b = n(45573),
                E = n(27003),
                S = n(9669),
                A = n.n(S),
                C = n(34698),
                O = n(65706),
                Z = n(88874),
                M = n(12611),
                k = n(11e3);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function x(e) {
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
                    var n, r = (0, w.Z)(e);
                    if (t) {
                        var s = (0, w.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return (0, v.Z)(this, n)
                }
            }
            const D = function(e) {
                (0, y.Z)(o, e);
                var t, n, s, a = x(o);

                function o(e) {
                    var t;
                    return (0, f.Z)(this, o), (t = a.call(this, e)).state = {
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
                    }, t.toggleCollapse = t.toggleCollapse.bind((0, g.Z)(t)), t.buildQuery = t.buildQuery.bind((0, g.Z)(t)), t.loadMoreWorlds = t.loadMoreWorlds.bind((0, g.Z)(t)), t.showConfirmPrivateAll = t.showConfirmPrivateAll.bind((0, g.Z)(t)), t.showConfirmHideAll = t.showConfirmHideAll.bind((0, g.Z)(t)), t.confirmPrivateAll = t.confirmPrivateAll.bind((0, g.Z)(t)), t.confirmHideAll = t.confirmHideAll.bind((0, g.Z)(t)), t.cancelWorldConfirm = t.cancelWorldConfirm.bind((0, g.Z)(t)), t
                }
                return (0, m.Z)(o, [{
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
                    value: (s = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchPrivateAll();
                                case 3:
                                    this.setState({
                                        worlds: this.state.worlds.map((function(e) {
                                            return T(T({}, e), {}, {
                                                releaseStatus: "private"
                                            })
                                        }))
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "confirmHideAll",
                    value: (n = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
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
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
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
                    value: (t = (0, r.Z)(i().mark((function e() {
                        var t, n, r = this;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.buildQuery(), this.setState({
                                        loading: !0
                                    }), e.next = 4, A().get(t);
                                case 4:
                                    200 === (n = e.sent).status ? 0 === n.data.length ? setTimeout((function() {
                                        r.setState({
                                            moreWorlds: !1,
                                            loading: !1
                                        })
                                    }), 250) : (this.setState({
                                        worlds: this.state.worlds.concat(n.data),
                                        offset: this.state.offset + this.state.n,
                                        moreWorlds: n.data.length >= this.state.n - 1
                                    }), setTimeout((function() {
                                        r.setState({
                                            loading: !1
                                        })
                                    }), 250)) : console.error(n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = (this.props.isMod, this.state.worlds.map((function(t, n) {
                                return l.createElement(Z.Z, {
                                    world: t,
                                    key: "".concat(t.id, "_").concat(n),
                                    showModTags: e.state.showModTags,
                                    slim: e.state.slim,
                                    hideAuthor: e.state.hideAuthor
                                })
                            })));
                        return this.state.worlds.length > 0 ? l.createElement("div", null, l.createElement("h3", null, l.createElement(C.Z, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && l.createElement(h.$1, {
                            icon: E.uM
                        }), !this.state.collapseOpen && l.createElement(h.$1, {
                            icon: b.Kt
                        })), " ", this.state.title), l.createElement(O.Z, {
                            isOpen: this.state.collapseOpen
                        }, "privateAll" === this.state.confirming && l.createElement(k.Z, {
                            prompt: "Are you sure you want to private all worlds belonging to this user?",
                            confirmLink: this.confirmPrivateAll,
                            cancelLink: this.cancelWorldConfirm
                        }), "hideAll" === this.state.confirming && l.createElement(k.Z, {
                            prompt: "Are you sure you want to DELETE all worlds belonging to this user? THIS CANNOT BE UNDONE!!!",
                            confirmLink: this.confirmHideAll,
                            cancelLink: this.cancelWorldConfirm
                        }), !1, l.createElement(u.Z, null, t, l.createElement(d.Z, {
                            md: "3",
                            className: "text-center"
                        }, l.createElement(M.Z, {
                            onClick: this.loadMoreWorlds,
                            loading: this.state.loading,
                            hidden: !this.state.moreWorlds,
                            color: "primary"
                        }, "Load More Worlds")))), l.createElement("hr", null)) : l.createElement("div", null)
                    }
                }]), o
            }(l.Component);
            n(37599), n(18133), n(88439), n(20916), n(62876);
            var W = n(17219),
                N = n(17383);
            const V = function() {
                (0, c.I0)();
                var e = l.useState(""),
                    t = (0, s.Z)(e, 2),
                    n = (t[0], t[1], (0, W.y)().data),
                    r = void 0 === n ? {} : n,
                    o = (0, N.pc)(),
                    i = ((0, c.v9)((function(e) {
                        return e.miscellaneous
                    })), r.sdkUnityVersion);
                return o ? l.createElement(u.Z, {
                    className: "center-block text-center justify-content-center mb-4"
                }, l.createElement(d.Z, {
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
                }))) : l.createElement(u.Z, null, l.createElement(d.Z, null, l.createElement("div", {
                    role: "alert"
                }, l.createElement(h.$1, {
                    icon: a.e7
                }), l.createElement("p", null, "You're not supposed to be here! INTERLOPER!"))))
            }
        }
    }
]);
//# sourceMappingURL=17363d088b35575c0fc98bea69d9311b2aca1b4ec1e1c845dd39ceff766f6dbf.js.map