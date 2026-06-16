"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2996], {
        12996(e, t, a) {
            a.d(t, {
                A: () => D
            });
            var n = a(64467),
                r = a(10467),
                s = a(23029),
                i = a(92901),
                o = a(9417),
                l = a(85501),
                c = a(34441),
                u = a(53954),
                m = a(59221),
                h = a(6077),
                d = a(54756),
                p = a.n(d),
                f = a(96540),
                v = a(72505),
                A = a.n(v),
                g = a(5826),
                y = a(39704),
                E = a(30104),
                b = a(21247),
                x = a(15033),
                k = a(10272),
                w = a(75255),
                C = a(47486);

            function O(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(a), !0).forEach(function(t) {
                        (0, n.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function I(e) {
                var t = N();
                return function() {
                    var a, n = (0, u.A)(e);
                    if (t) {
                        var r = (0, u.A)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, c.A)(this, a)
                }
            }

            function N() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (N = function() {
                    return !!e
                })()
            }
            var M = function(e) {
                (0, l.A)(u, e);
                var t, a, n, c = I(u);

                function u(e) {
                    var t;
                    return (0, s.A)(this, u), (t = c.call(this, e)).state = {
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
                    }, t.toggleCollapse = t.toggleCollapse.bind((0, o.A)(t)), t.buildQuery = t.buildQuery.bind((0, o.A)(t)), t.loadMoreAvatars = t.loadMoreAvatars.bind((0, o.A)(t)), t.showConfirmPrivateAll = t.showConfirmPrivateAll.bind((0, o.A)(t)), t.showConfirmHideAll = t.showConfirmHideAll.bind((0, o.A)(t)), t.confirmPrivateAll = t.confirmPrivateAll.bind((0, o.A)(t)), t.confirmHideAll = t.confirmHideAll.bind((0, o.A)(t)), t.cancelAvatarConfirm = t.cancelAvatarConfirm.bind((0, o.A)(t)), t.removeAvatarCallback = t.removeAvatarCallback.bind((0, o.A)(t)), t
                }
                return (0, i.A)(u, [{
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
                        }, function() {
                            t.loadMoreAvatars()
                        }))
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
                    value: (n = (0, r.A)(p().mark(function e() {
                        return p().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        confirming: ""
                                    }), e.next = 3, this.props.dispatchPrivateAll();
                                case 3:
                                    this.setState({
                                        avatars: this.state.avatars.map(function(e) {
                                            return S(S({}, e), {}, {
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
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "confirmHideAll",
                    value: (a = (0, r.A)(p().mark(function e() {
                        return p().wrap(function(e) {
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
                        }, e, this)
                    })), function() {
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
                            avatars: this.state.avatars.filter(function(t) {
                                return t.id !== e
                            })
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
                    value: (t = (0, r.A)(p().mark(function e() {
                        var t, a, n = this;
                        return p().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.buildQuery(), this.setState({
                                        loading: !0
                                    }), e.next = 4, A().get(t);
                                case 4:
                                    200 === (a = e.sent).status ? 0 === a.data.length ? setTimeout(function() {
                                        n.setState({
                                            moreAvatars: !1,
                                            loading: !1
                                        })
                                    }, 250) : (this.setState({
                                        avatars: this.state.avatars.concat(a.data),
                                        offset: this.state.offset + this.state.n,
                                        moreAvatars: a.data.length >= this.state.n - 1
                                    }), setTimeout(function() {
                                        n.setState({
                                            loading: !1
                                        })
                                    }, 250)) : console.error(a);
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
                            t = this.props.isMod,
                            a = this.state.avatars.map(function(a, n) {
                                var r;
                                return e.state.licenses.length > 0 && (r = e.state.licenses.find(function(e) {
                                    return e.forId === a.id
                                })), f.createElement(k.A, {
                                    avatar: a,
                                    hideAuthor: e.state.hideAuthor,
                                    license: r,
                                    isMod: t,
                                    removeAvatar: e.removeAvatarCallback,
                                    key: "".concat(a.id, "_").concat(n),
                                    slim: e.state.slim
                                })
                            });
                        return this.state.avatars.length > 0 ? f.createElement("div", null, f.createElement("h3", null, f.createElement(E.A, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && f.createElement(x.M2, {
                            icon: h.Ip
                        }), !this.state.collapseOpen && f.createElement(x.M2, {
                            icon: m.OQ
                        })), " ", this.state.title), f.createElement(b.A, {
                            isOpen: this.state.collapseOpen
                        }, "privateAll" === this.state.confirming && f.createElement(C.A, {
                            prompt: "Are you sure you want to private all avatars belonging to this user?",
                            confirmLink: this.confirmPrivateAll,
                            cancelLink: this.cancelAvatarConfirm
                        }), "hideAll" === this.state.confirming && f.createElement(C.A, {
                            prompt: "Are you sure you want to DELETE all avatars belonging to this user? THIS CANNOT BE UNDONE!!!",
                            confirmLink: this.confirmHideAll,
                            cancelLink: this.cancelAvatarConfirm
                        }), !1, f.createElement(g.A, null, a, f.createElement(y.A, {
                            md: "3",
                            className: "text-center"
                        }, f.createElement(w.A, {
                            onClick: this.loadMoreAvatars,
                            loading: this.state.loading,
                            hidden: !this.state.moreAvatars,
                            color: "primary"
                        }, "Load More Avatars")))), f.createElement("hr", null)) : f.createElement("div", null)
                    }
                }]), u
            }(f.Component);
            const D = M
        },
        10272(e, t, a) {
            a.d(t, {
                A: () => x
            });
            var n = a(10467),
                r = a(82544),
                s = a(38275),
                i = a(34496),
                o = a(12378),
                l = a(67256),
                c = a(54756),
                u = a.n(c),
                m = a(96540),
                h = a(84976),
                d = a(5826),
                p = a(39704),
                f = a(30104),
                v = a(56822),
                A = a(72505),
                g = a.n(A),
                y = a(91069),
                E = a(15033),
                b = a(2525);
            const x = function(e) {
                var t = e.avatar,
                    a = e.slim,
                    c = e.hideAuthor,
                    A = e.showFavoriteButton,
                    x = e.isMod,
                    k = e.license,
                    w = e.removeAvatar,
                    C = (t.tags ? Array.from(t.tags) : []).concat([t.releaseStatus, "search-container"]),
                    O = (0, m.useState)(!1),
                    S = (0, r.A)(O, 2),
                    I = S[0],
                    N = S[1],
                    M = (0, m.useState)(function() {
                        return function() {}
                    }),
                    D = (0, r.A)(M, 2),
                    P = D[0],
                    j = D[1],
                    H = (0, m.useState)(""),
                    z = (0, r.A)(H, 2),
                    _ = z[0],
                    U = z[1],
                    L = (0, m.useState)(""),
                    T = (0, r.A)(L, 2),
                    V = T[0],
                    Q = T[1],
                    B = "private" === t.releaseStatus,
                    R = "hidden" === t.releaseStatus,
                    W = 12;
                a && (W = 4, C.push("slim"));
                return m.createElement(p.A, {
                    xs: W,
                    className: (0, v.AH)({
                        name: "1o3w9m7",
                        styles: "& .search-container{border:1px solid teal;box-shadow:10px 10px 8px 10px #111;margin:20px;padding:20px;}& .search-container.slim{margin:5px;padding:10px;}& .search-container.private{border:1px solid grey;}& .search-container.hidden{border:1px solid grey;}& .search-container a{color:white;}& .search-container img{border-radius:5px;max-height:200px;max-width:200px;}"
                    })
                }, m.createElement(E.uo, {
                    headerText: _,
                    bodyText: V,
                    confirmCallback: P,
                    cancelCallback: function() {
                        return N(!1)
                    },
                    isOpen: I
                }), m.createElement("div", {
                    className: C.join(" ")
                }, a && m.createElement(d.A, null, m.createElement(p.A, {
                    xs: "12"
                }, m.createElement("h6", null, m.createElement(h.N_, {
                    to: "/home/avatar/".concat(t.id)
                }, t.name, B && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", m.createElement(E.M2, {
                    icon: o.DW
                }), " "), R && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", m.createElement(E.M2, {
                    icon: i.zp
                }), " ")), !c && m.createElement("span", null, " ", m.createElement("small", null, "—  ", m.createElement(h.N_, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName))))), m.createElement(p.A, {
                    xs: "12"
                }, m.createElement(h.N_, {
                    to: "/home/avatar/".concat(t.id)
                }, m.createElement("img", {
                    className: "w-100",
                    src: t.thumbnailImageUrl,
                    title: t.name,
                    alt: t.name
                })), x && m.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, m.createElement(f.A, {
                    "aria-label": "Copy ID",
                    onClick: (0, y.Dk)(t.id),
                    size: "sm"
                }, m.createElement(E.M2, {
                    icon: l.jP,
                    className: "me-2"
                }), "ID")))), !a && m.createElement(d.A, null, m.createElement(p.A, {
                    xs: "12",
                    md: "4"
                }, m.createElement(h.N_, {
                    to: "/home/avatar/".concat(t.id)
                }, m.createElement("img", {
                    className: "w-100",
                    src: t.thumbnailImageUrl,
                    title: t.name,
                    alt: t.name
                })), x && m.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, m.createElement(f.A, {
                    "aria-label": "Copy ID",
                    onClick: (0, y.Dk)(t.id),
                    size: "sm"
                }, m.createElement(E.M2, {
                    icon: l.jP,
                    className: "me-2"
                }), "ID"))), m.createElement(p.A, {
                    xs: "12",
                    md: "5"
                }, m.createElement("h4", null, m.createElement(h.N_, {
                    to: "/home/avatar/".concat(t.id)
                }, t.name), !c && m.createElement("span", null, " ", m.createElement("small", null, "—  ", m.createElement(h.N_, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName)))), B && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, m.createElement(E.M2, {
                    icon: o.DW
                }), " Private", " "), R && m.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, m.createElement(E.M2, {
                    icon: i.zp
                }), " Deleted!", " "), m.createElement("p", null, t.description)), A && m.createElement(p.A, {
                    xs: "12",
                    md: "3",
                    style: {
                        textAlign: "right"
                    }
                }, m.createElement(b.A, {
                    thing: t,
                    type: "avatar"
                })), k && !k.productId && m.createElement(p.A, {
                    xs: "12",
                    md: "3",
                    style: {
                        textAlign: "right"
                    }
                }, m.createElement(f.A, {
                    color: "primary",
                    title: "Remove Avatar",
                    onClick: function() {
                        Q("Are you sure you want to delete this avatar?"), U("Delete Avatar?"), j(function() {
                            return (0, n.A)(u().mark(function e() {
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (N(!1), !k) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, g().delete(window.apiUrl("/api/1/licenses/".concat(k.id)));
                                        case 4:
                                            200 === e.sent.status && w(t.id);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))
                        }), N(!0)
                    }
                }, m.createElement(E.M2, {
                    icon: s.yL
                }), "Delete Avatar")))))
            }
        }
    }
]);
//# sourceMappingURL=0aad9a1bf6cf23bfbca2d461cfa46099e31f798e8af17fd104244abe3fdd5849.js.map