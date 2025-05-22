"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7826], {
        7826: (e, t, a) => {
            a.d(t, {
                Z: () => I
            });
            var n = a(4942),
                r = a(15861),
                s = a(15671),
                i = a(43144),
                o = a(97326),
                l = a(60136),
                c = a(82963),
                u = a(61120),
                m = a(45573),
                h = a(27003),
                d = a(64687),
                p = a.n(d),
                f = a(67294),
                v = a(9669),
                g = a.n(v),
                y = a(34698),
                E = a(65706),
                A = a(35773),
                b = a(95305),
                Z = a(37463),
                x = a(29449),
                k = a(12611),
                w = a(11e3);

            function C(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function S(e) {
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
                    var a, n = (0, u.Z)(e);
                    if (t) {
                        var r = (0, u.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, c.Z)(this, a)
                }
            }
            const I = function(e) {
                (0, l.Z)(u, e);
                var t, a, n, c = S(u);

                function u(e) {
                    var t;
                    return (0, s.Z)(this, u), (t = c.call(this, e)).state = {
                        collapseOpen: e.collapseOpen || !1,
                        avatars: [],
                        title: e.title,
                        unityVersion: e.unityVersion,
                        releaseStatus: e.releaseStatus || "public",
                        organization: e.organization || "vrchat",
                        sort: e.sort || "updated",
                        order: e.order || "descending",
                        featured: e.featured,
                        tag: e.tag,
                        notag: e.notag,
                        user: e.user,
                        userId: e.userId,
                        n: e.n || 20,
                        offset: e.offset || 0,
                        moreAvatars: !0,
                        loading: !1,
                        slim: e.slim || !1,
                        hideAuthor: e.hideAuthor || !1,
                        confirming: "",
                        licenses: e.licenses || []
                    }, t.toggleCollapse = t.toggleCollapse.bind((0, o.Z)(t)), t.buildQuery = t.buildQuery.bind((0, o.Z)(t)), t.loadMoreAvatars = t.loadMoreAvatars.bind((0, o.Z)(t)), t.showConfirmPrivateAll = t.showConfirmPrivateAll.bind((0, o.Z)(t)), t.showConfirmHideAll = t.showConfirmHideAll.bind((0, o.Z)(t)), t.confirmPrivateAll = t.confirmPrivateAll.bind((0, o.Z)(t)), t.confirmHideAll = t.confirmHideAll.bind((0, o.Z)(t)), t.cancelAvatarConfirm = t.cancelAvatarConfirm.bind((0, o.Z)(t)), t.removeAvatarCallback = t.removeAvatarCallback.bind((0, o.Z)(t)), t
                }
                return (0, i.Z)(u, [{
                    key: "componentDidMount",
                    value: function() {
                        this.n = 20, this.offset = 0, this.loadMoreAvatars()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        e.userId !== this.props.userId && (this.n = 20, this.offset = 0, this.setState({
                            avatars: [],
                            moreAvatars: !0,
                            n: 20,
                            offset: 0,
                            userId: this.props.userId
                        }, (function() {
                            t.loadMoreAvatars()
                        })))
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
                    value: (n = (0, r.Z)(p().mark((function e() {
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchPrivateAll();
                                case 3:
                                    this.setState({
                                        avatars: this.state.avatars.map((function(e) {
                                            return O(O({}, e), {}, {
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
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "confirmHideAll",
                    value: (a = (0, r.Z)(p().mark((function e() {
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchHideAll();
                                case 3:
                                    this.setState({
                                        avatars: []
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "cancelAvatarConfirm",
                    value: function() {
                        this.setState({
                            confirming: ""
                        })
                    }
                }, {
                    key: "removeAvatarCallback",
                    value: function(e) {
                        this.setState({
                            avatars: this.state.avatars.filter((function(t) {
                                return t.id !== e
                            }))
                        })
                    }
                }, {
                    key: "buildQuery",
                    value: function() {
                        var e = "/api/1/avatars";
                        return this.state.licenses.length > 0 && (e += "/licensed"), e += "?", null != this.state.unityVersion && (e = "".concat(e, "minUnityVersion=").concat(this.state.unityVersion, "&maxUnityVersion=").concat(this.state.unityVersion, "&")), null != this.state.releaseStatus && (e = "".concat(e, "releaseStatus=").concat(this.state.releaseStatus, "&")), null != this.state.organization && (e = "".concat(e, "organization=").concat(this.state.organization, "&")), null != this.state.sort && (e = "".concat(e, "sort=").concat(this.state.sort, "&")), null != this.state.featured && (e = "".concat(e, "featured=").concat(this.state.featured, "&")), null != this.state.tag && (e = "".concat(e, "tag=").concat(this.state.tag, "&")), null != this.state.notag && (e = "".concat(e, "notag=").concat(this.state.notag, "&")), null != this.state.order && (e = "".concat(e, "order=").concat(this.state.order, "&")), null != this.state.user && (e = "".concat(e, "user=").concat(this.state.user, "&")), null != this.state.userId && (e = "".concat(e, "userId=").concat(this.state.userId, "&")), null != this.state.n && (e = "".concat(e, "n=").concat(this.state.n, "&")), null != this.state.offset && (e = "".concat(e, "offset=").concat(this.state.offset)), window.apiUrl(e)
                    }
                }, {
                    key: "loadMoreAvatars",
                    value: (t = (0, r.Z)(p().mark((function e() {
                        var t, a, n = this;
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.buildQuery(), this.setState({
                                        loading: !0
                                    }), e.next = 4, g().get(t);
                                case 4:
                                    200 === (a = e.sent).status ? 0 === a.data.length ? setTimeout((function() {
                                        n.setState({
                                            moreAvatars: !1,
                                            loading: !1
                                        })
                                    }), 250) : (this.setState({
                                        avatars: this.state.avatars.concat(a.data),
                                        offset: this.state.offset + this.state.n,
                                        moreAvatars: a.data.length >= this.state.n - 1
                                    }), setTimeout((function() {
                                        n.setState({
                                            loading: !1
                                        })
                                    }), 250)) : console.error(a);
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
                            t = this.props.isMod,
                            a = this.state.avatars.map((function(a, n) {
                                var r;
                                return e.state.licenses.length > 0 && (r = e.state.licenses.find((function(e) {
                                    return e.forId === a.id
                                }))), f.createElement(x.Z, {
                                    avatar: a,
                                    hideAuthor: e.state.hideAuthor,
                                    license: r,
                                    isMod: t,
                                    removeAvatar: e.removeAvatarCallback,
                                    key: "".concat(a.id, "_").concat(n),
                                    slim: e.state.slim
                                })
                            }));
                        return this.state.avatars.length > 0 ? f.createElement("div", null, f.createElement("h3", null, f.createElement(y.Z, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && f.createElement(Z.$1, {
                            icon: h.uM
                        }), !this.state.collapseOpen && f.createElement(Z.$1, {
                            icon: m.Kt
                        })), " ", this.state.title), f.createElement(E.Z, {
                            isOpen: this.state.collapseOpen
                        }, "privateAll" === this.state.confirming && f.createElement(w.Z, {
                            prompt: "Are you sure you want to private all avatars belonging to this user?",
                            confirmLink: this.confirmPrivateAll,
                            cancelLink: this.cancelAvatarConfirm
                        }), "hideAll" === this.state.confirming && f.createElement(w.Z, {
                            prompt: "Are you sure you want to DELETE all avatars belonging to this user? THIS CANNOT BE UNDONE!!!",
                            confirmLink: this.confirmHideAll,
                            cancelLink: this.cancelAvatarConfirm
                        }), !1, f.createElement(A.Z, null, a, f.createElement(b.Z, {
                            md: "3",
                            className: "text-center"
                        }, f.createElement(k.Z, {
                            onClick: this.loadMoreAvatars,
                            loading: this.state.loading,
                            hidden: !this.state.moreAvatars,
                            color: "primary"
                        }, "Load More Avatars")))), f.createElement("hr", null)) : f.createElement("div", null)
                    }
                }]), u
            }(f.Component)
        },
        29449: (e, t, a) => {
            a.d(t, {
                Z: () => Z
            });
            var n = a(15861),
                r = a(54546),
                s = a(42619),
                i = a(76553),
                o = a(609),
                l = a(2909),
                c = a(64687),
                u = a.n(c),
                m = a(67294),
                h = a(79655),
                d = a(95305),
                p = a(35773),
                f = a(34698),
                v = a(83505),
                g = a(9669),
                y = a.n(g),
                E = a(64358),
                A = a(37463),
                b = a(55694);
            const Z = function(e) {
                var t = e.avatar,
                    a = e.slim,
                    c = e.hideAuthor,
                    g = e.showFavoriteButton,
                    Z = e.isMod,
                    x = e.license,
                    k = e.removeAvatar,
                    w = (t.tags ? Array.from(t.tags) : []).concat([t.releaseStatus, "search-container"]),
                    C = (0, m.useState)(!1),
                    O = (0, r.Z)(C, 2),
                    S = O[0],
                    I = O[1],
                    P = (0, m.useState)((function() {
                        return function() {}
                    })),
                    D = (0, r.Z)(P, 2),
                    N = D[0],
                    j = D[1],
                    U = (0, m.useState)(""),
                    M = (0, r.Z)(U, 2),
                    H = M[0],
                    $ = M[1],
                    z = (0, m.useState)(""),
                    T = (0, r.Z)(z, 2),
                    V = T[0],
                    L = T[1],
                    R = "private" === t.releaseStatus,
                    B = "hidden" === t.releaseStatus,
                    Q = 12;
                a && (Q = 4, w.push("slim"));
                return m.createElement(d.Z, {
                    xs: Q,
                    className: (0, v.iv)({
                        name: "1o3w9m7",
                        styles: "& .search-container{border:1px solid teal;box-shadow:10px 10px 8px 10px #111;margin:20px;padding:20px;}& .search-container.slim{margin:5px;padding:10px;}& .search-container.private{border:1px solid grey;}& .search-container.hidden{border:1px solid grey;}& .search-container a{color:white;}& .search-container img{border-radius:5px;max-height:200px;max-width:200px;}"
                    })
                }, m.createElement(A.sm, {
                    headerText: H,
                    bodyText: V,
                    confirmCallback: N,
                    cancelCallback: function() {
                        return I(!1)
                    },
                    isOpen: S
                }), m.createElement("div", {
                    className: w.join(" ")
                }, a && m.createElement(p.Z, null, m.createElement(d.Z, {
                    xs: "12"
                }, m.createElement("h6", null, m.createElement(h.rU, {
                    to: "/home/avatar/".concat(t.id)
                }, t.name, R && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", m.createElement(A.$1, {
                    icon: o.by
                }), " "), B && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", m.createElement(A.$1, {
                    icon: i.eH
                }), " ")), !c && m.createElement("span", null, " ", m.createElement("small", null, "—  ", m.createElement(h.rU, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName))))), m.createElement(d.Z, {
                    xs: "12"
                }, m.createElement(h.rU, {
                    to: "/home/avatar/".concat(t.id)
                }, m.createElement("img", {
                    className: "w-100",
                    src: t.thumbnailImageUrl,
                    title: t.name,
                    alt: t.name
                })), Z && m.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, m.createElement(f.Z, {
                    "aria-label": "Copy ID",
                    onClick: (0, E.zp)(t.id),
                    size: "sm"
                }, m.createElement(A.$1, {
                    icon: l.kZ,
                    className: "me-2"
                }), "ID")))), !a && m.createElement(p.Z, null, m.createElement(d.Z, {
                    xs: "12",
                    md: "4"
                }, m.createElement(h.rU, {
                    to: "/home/avatar/".concat(t.id)
                }, m.createElement("img", {
                    className: "w-100",
                    src: t.thumbnailImageUrl,
                    title: t.name,
                    alt: t.name
                })), Z && m.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, m.createElement(f.Z, {
                    "aria-label": "Copy ID",
                    onClick: (0, E.zp)(t.id),
                    size: "sm"
                }, m.createElement(A.$1, {
                    icon: l.kZ,
                    className: "me-2"
                }), "ID"))), m.createElement(d.Z, {
                    xs: "12",
                    md: "5"
                }, m.createElement("h4", null, m.createElement(h.rU, {
                    to: "/home/avatar/".concat(t.id)
                }, t.name), !c && m.createElement("span", null, " ", m.createElement("small", null, "—  ", m.createElement(h.rU, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName)))), R && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, m.createElement(A.$1, {
                    icon: o.by
                }), " Private", " "), B && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, m.createElement(A.$1, {
                    icon: i.eH
                }), " Deleted!", " "), m.createElement("p", null, t.description)), g && m.createElement(d.Z, {
                    xs: "12",
                    md: "3",
                    style: {
                        textAlign: "right"
                    }
                }, m.createElement(b.Z, {
                    thing: t,
                    type: "avatar"
                })), x && !x.productId && m.createElement(d.Z, {
                    xs: "12",
                    md: "3",
                    style: {
                        textAlign: "right"
                    }
                }, m.createElement(f.Z, {
                    color: "primary",
                    title: "Remove Avatar",
                    onClick: function() {
                        L("Are you sure you want to delete this avatar?"), $("Delete Avatar?"), j((function() {
                            return (0, n.Z)(u().mark((function e() {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (I(!1), !x) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, y().delete(window.apiUrl("/api/1/licenses/".concat(x.id)));
                                        case 4:
                                            200 === e.sent.status && k(t.id);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        })), I(!0)
                    }
                }, m.createElement(A.$1, {
                    icon: s.$
                }), "Delete Avatar")))))
            }
        }
    }
]);
//# sourceMappingURL=74365a326b4cc99c00ddab999cda9bb7542adb79a4c65e9a588988593303408a.js.map