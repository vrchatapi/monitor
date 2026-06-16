"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1730], {
        78479(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var r = n(58168),
                a = n(80045),
                l = n(19179),
                s = n(81617),
                c = n(96540),
                i = n(6324),
                o = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.A)(e, o);
                return null === n ? null : n ? c.createElement(i.A, (0, r.A)({
                    icon: s.e6,
                    size: m,
                    className: "text-success"
                }, d)) : c.createElement(i.A, (0, r.A)({
                    icon: l.GR,
                    size: m,
                    className: "text-warning"
                }, d))
            };
            n.dn(u)
        },
        20089(e, t, n) {
            n.d(t, {
                A: () => p
            });
            var r = n(17225),
                a = n(96540),
                l = n(5556),
                s = n.n(l),
                c = (n(72505), n(30104)),
                i = n(74758),
                o = n(6324),
                u = n(59040),
                m = n(71602),
                d = function(e) {
                    var t = e.query,
                        n = (0, m.HV)({
                            queryURL: t
                        }),
                        l = n.data,
                        s = n.isFetching,
                        d = n.isSuccess,
                        p = n.isError,
                        h = n.refetch;
                    return a.createElement(i.A, null, a.createElement("h6", {
                        className: "p-1"
                    }, a.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), d && a.createElement(u.A, {
                        src: l
                    }), s && "Loading...", p && "Error loading ".concat(t), a.createElement("hr", null), a.createElement(c.A, {
                        onClick: function() {
                            return h()
                        },
                        className: "text-white"
                    }, a.createElement(o.A, {
                        icon: r.ye,
                        color: "white"
                    }), " Refresh"))
                };
            d.propTypes = {
                query: s().string.isRequired
            };
            const p = d
        },
        71730(e, t, n) {
            n.r(t), n.d(t, {
                default: () => Gn
            });
            var r = n(10467),
                a = n(82544),
                l = n(70129),
                s = (n(31226), n(7514), n(54756)),
                c = n.n(s),
                i = n(56822),
                o = n(95093),
                u = n.n(o),
                m = n(96540),
                d = n(6376),
                p = n(47767),
                h = n(85052),
                f = n(5826),
                E = n(39704),
                A = n(77365),
                g = n(30104),
                v = n(45662),
                b = n(37438),
                y = (n(74303), n(50779)),
                x = (n(12996), n(15033)),
                w = n(7563),
                k = (n(47213), n(20089), n(71853)),
                N = n(25538),
                S = (n(70312), n(8367), n(99664), n(59221)),
                I = n(6077),
                C = n(21247),
                M = n(10272),
                T = n(44741),
                O = n(4157);
            const R = function(e) {
                var t = e.userId,
                    n = e.isMod,
                    r = e.group,
                    l = e.collapseOpen,
                    s = e.filter,
                    c = (0, d.wA)(),
                    i = m.useState(l || !1),
                    o = (0, a.A)(i, 2),
                    u = o[0],
                    p = o[1],
                    h = (0, d.d4)(function(e) {
                        return t && n ? e.user.favorites.assets.avatar : e.favorites.assets.avatar
                    });
                m.useEffect(function() {
                    c((0, T.F2)({
                        group: r.name
                    }))
                }, [r.id]), m.useEffect(function() {
                    p(l)
                }, [l]);
                return null == r.total ? null : m.createElement("div", {
                    style: {
                        padding: "0em 1.5em 0em 1.5em"
                    }
                }, m.createElement("h3", null, m.createElement(g.A, {
                    onClick: function() {
                        p(!u)
                    },
                    color: u ? "primary" : "secondary"
                }, u && m.createElement(x.M2, {
                    icon: I.Ip
                }), !u && m.createElement(x.M2, {
                    icon: S.OQ
                })), " ", r.displayName, " (", r.total, ")"), m.createElement(C.A, {
                    isOpen: u
                }, m.createElement(f.A, null, h[r.name].filter(function(e) {
                    return function(e, t) {
                        return 0 === t.length || new RegExp(t, "gi").test([e.name, e.id, e.authorName, e.authorId, e.favoriteId].join(""))
                    }(e, s)
                }).map(function(e, t) {
                    return m.createElement(M.A, {
                        avatar: e,
                        showFavoriteButton: !0,
                        key: "".concat(e.favoriteId, "_").concat(r.id, "_").concat(t),
                        isMod: n && !1
                    })
                }))))
            };
            n.dn(R);
            const U = function(e) {
                var t = e.userId,
                    n = e.isMod,
                    r = e.collapseOpen,
                    l = (0, d.wA)(),
                    s = (0, d.d4)(function(e) {
                        return t && n ? e.user.favorites.groups.avatar : e.favorites.groups.avatar
                    }) || [],
                    c = m.useState(!1),
                    i = (0, a.A)(c, 2),
                    o = i[0],
                    u = (i[1], m.useState("")),
                    p = (0, a.A)(u, 2),
                    h = p[0],
                    f = (p[1], m.useState(!0)),
                    E = (0, a.A)(f, 2),
                    A = E[0],
                    g = E[1];
                return m.useEffect(function() {
                    l((0, T.Wm)({
                        type: "avatar"
                    }))
                }, [t]), m.useEffect(function() {
                    A && s.length > 0 && g(!1)
                }, [s]), 0 === s.length || A ? null : m.createElement(w.A, {
                    title: "Favorite Avatars",
                    collapseOpen: r || !1
                }, !1, s.map(function(e) {
                    return m.createElement(R, {
                        userId: t,
                        isMod: n,
                        filter: h,
                        group: e,
                        key: e.id,
                        collapseOpen: o
                    })
                }))
            };
            n.dn(U);
            var D = n(35936);
            const _ = function(e) {
                var t = e.userId,
                    n = e.isMod,
                    r = e.group,
                    l = e.collapseOpen,
                    s = e.filter,
                    c = (0, d.wA)(),
                    i = m.useState(l || !1),
                    o = (0, a.A)(i, 2),
                    u = o[0],
                    p = o[1],
                    h = (0, d.d4)(function(e) {
                        return t && n ? e.user.favorites.assets.world : e.favorites.assets.world
                    });
                m.useEffect(function() {
                    c((0, T.Uf)({
                        group: r.name
                    }))
                }, [r.id]), m.useEffect(function() {
                    p(l)
                }, [l]);
                return null == r.total ? null : m.createElement("div", {
                    style: {
                        padding: "0em 1.5em 0em 1.5em"
                    }
                }, m.createElement("h3", null, m.createElement(g.A, {
                    onClick: function() {
                        p(!u)
                    },
                    color: u ? "primary" : "secondary"
                }, u && m.createElement(x.M2, {
                    icon: I.Ip
                }), !u && m.createElement(x.M2, {
                    icon: S.OQ
                })), " ", r.displayName, " (", r.total, ")"), m.createElement(C.A, {
                    isOpen: u
                }, m.createElement(f.A, null, h[r.name].filter(function(e) {
                    return function(e, t) {
                        return 0 === t.length || new RegExp(t, "gi").test([e.name, e.id, e.authorName, e.authorId, e.favoriteId].join(""))
                    }(e, s)
                }).map(function(e, t) {
                    return m.createElement(D.A, {
                        world: e,
                        showFavoriteButton: !0,
                        key: "".concat(e.favoriteId, "_").concat(r.id, "_").concat(t)
                    })
                }))))
            };
            n.dn(_);
            const F = function(e) {
                var t = e.userId,
                    n = e.isMod,
                    r = e.collapseOpen,
                    l = (0, d.wA)(),
                    s = (0, d.d4)(function(e) {
                        return t && n ? e.user.favorites.groups.world : e.favorites.groups.world
                    }) || [],
                    c = m.useState(!1),
                    i = (0, a.A)(c, 2),
                    o = i[0],
                    u = (i[1], m.useState("")),
                    p = (0, a.A)(u, 2),
                    h = p[0],
                    f = (p[1], m.useState(!0)),
                    E = (0, a.A)(f, 2),
                    A = E[0],
                    g = E[1];
                return m.useEffect(function() {
                    l((0, T.Wm)({
                        type: "world"
                    }))
                }, [t]), m.useEffect(function() {
                    A && s.length > 0 && g(!1)
                }, [s]), 0 === s.length || A ? null : m.createElement(w.A, {
                    title: "Favorite Worlds",
                    collapseOpen: r || !1
                }, !1, s.map(function(e) {
                    return m.createElement(_, {
                        userId: t,
                        isMod: n,
                        filter: h,
                        group: e,
                        key: e.id,
                        collapseOpen: o
                    })
                }))
            };
            n.dn(F);
            var P = n(23029),
                j = n(92901),
                q = n(9417),
                z = n(85501),
                B = n(34441),
                L = n(53954),
                Y = n(64467),
                H = n(61145),
                G = n(72505),
                W = n.n(G),
                V = n(23935),
                $ = n(48210),
                Q = n(75255),
                J = n(67256),
                K = n(84976),
                Z = n(74758);

            function X(e) {
                var t = ee();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function ee() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (ee = function() {
                    return !!e
                })()
            }
            const te = function(e) {
                (0, z.A)(n, e);
                var t = X(n);

                function n(e) {
                    var a;
                    return (0, P.A)(this, n), a = t.call(this, e), (0, Y.A)((0, q.A)(a), "timeout", null), (0, Y.A)((0, q.A)(a), "copyText", (0, r.A)(c().mark(function e() {
                        var t;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.props.user.id, e.next = 3, navigator.clipboard.writeText(t);
                                case 3:
                                    a.setState({
                                        copied: !0
                                    }), a.timeout = setTimeout(function() {
                                        a.setState({
                                            copied: !1
                                        })
                                    }, 1e3);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))), a.state = {
                        copied: !1
                    }, a
                }
                return (0, j.A)(n, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.timeout && clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.user,
                            t = e.username,
                            n = e.displayName,
                            r = e.id;
                        return m.createElement(f.A, {
                            md: "12",
                            className: "mb-2 mx-0"
                        }, m.createElement(Z.A, {
                            className: "w-100",
                            body: !0
                        }, m.createElement(E.A, {
                            className: "mx-0"
                        }, m.createElement(f.A, {
                            className: "justify-content-between"
                        }, m.createElement(E.A, {
                            md: "8",
                            className: "mx-0"
                        }, m.createElement("h4", null, m.createElement(K.N_, {
                            to: "/home/user/".concat(r)
                        }, n, " "))), m.createElement(E.A, {
                            md: "4",
                            className: "mx-0 justify-content-end d-flex"
                        }, m.createElement(g.A, {
                            size: "sm",
                            onClick: this.copyText,
                            className: "text-white",
                            color: this.state.copied ? "success" : "secondary"
                        }, m.createElement(x.M2, {
                            icon: J.jP,
                            color: "white",
                            className: "me-2"
                        }), this.state.copied ? "Copied" : "Copy ID"))), m.createElement(E.A, {
                            className: "mx-0 px-3"
                        }, !!t && m.createElement(f.A, null, "Username: ", t), m.createElement(f.A, {
                            className: "align-items-center"
                        }, "ID: ", r)))))
                    }
                }]), n
            }(m.Component);

            function ne(e) {
                var t = re();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function re() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (re = function() {
                    return !!e
                })()
            }
            var ae = function(e) {
                (0, z.A)(n, e);
                var t = ne(n);

                function n(e) {
                    var a;
                    return (0, P.A)(this, n), a = t.call(this, e), (0, Y.A)((0, q.A)(a), "loadMoreFriends", (0, r.A)(c().mark(function e() {
                        var t, n, r;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.buildQuery(), a.setState({
                                        loading: !0
                                    }), e.next = 4, W().get(t);
                                case 4:
                                    200 === (n = e.sent).status ? 0 === n.data.length ? setTimeout(function() {
                                        a.setState({
                                            moreFriends: !1,
                                            loading: !1
                                        })
                                    }, 250) : (r = a.state.realFriendCount, n.data.length < a.state.n && (r -= a.state.n - n.data.length), a.setState({
                                        friends: a.state.friends.concat(n.data),
                                        offset: a.state.offset + a.state.n,
                                        realFriendCount: r,
                                        moreFriends: a.state.offset + a.state.n < r
                                    }), setTimeout(function() {
                                        a.setState({
                                            loading: !1
                                        })
                                    }, 250)) : console.error(n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))), (0, Y.A)((0, q.A)(a), "loadById", function() {
                        var e = (0, r.A)(c().mark(function e(t) {
                            var n, r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = "/api/1/users/".concat(t), e.next = 3, W().get(window.apiUrl(n));
                                    case 3:
                                        if (200 !== (r = e.sent).status) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 6:
                                        return console.error(r), e.abrupt("return", null);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), (0, Y.A)((0, q.A)(a), "toggleCollapse", (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a.state.collapseOpen || 0 !== a.state.friends.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, a.loadMoreFriends();
                                case 3:
                                    a.setState({
                                        collapseOpen: !a.state.collapseOpen
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))), (0, Y.A)((0, q.A)(a), "handleSearchChange", function() {
                        var e = (0, r.A)(c().mark(function e(t) {
                            var n, r;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.target.value, r = void 0 === n ? "" : n, a.setState({
                                                search: r
                                            }), !(r.length > 0)) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 5, a.searchById(r);
                                    case 5:
                                        return e.abrupt("return");
                                    case 6:
                                        a.setState({
                                            foundFriend: null
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), (0, Y.A)((0, q.A)(a), "handleSearchClick", (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== a.state.search.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, a.searchById(a.state.search);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))), (0, Y.A)((0, q.A)(a), "searchById", function() {
                        var e = (0, r.A)(c().mark(function e(t) {
                            var n;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.props.currentUser.friends.find(function(e) {
                                                return e === t
                                            })) {
                                            e.next = 3;
                                            break
                                        }
                                        return a.setState({
                                            foundFriend: null
                                        }), e.abrupt("return");
                                    case 3:
                                        if (a.state.friends.find(function(e) {
                                                return e.id === t
                                            })) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 6, a.loadById(t);
                                    case 6:
                                        if (null != (n = e.sent)) {
                                            e.next = 10;
                                            break
                                        }
                                        return a.setState({
                                            foundFriend: {
                                                id: t,
                                                displayName: "User is in the list but it doesnt exist anymore"
                                            }
                                        }), e.abrupt("return");
                                    case 10:
                                        return a.setState({
                                            foundFriend: n
                                        }), e.abrupt("return");
                                    case 12:
                                        a.setState({
                                            foundFriend: a.state.friends.find(function(e) {
                                                return e.id === t
                                            }) || null
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), a.state = {
                        title: e.title,
                        friends: [],
                        collapseOpen: !1,
                        search: "",
                        foundFriend: null,
                        userId: e.userId,
                        offset: 0,
                        n: e.n || 100,
                        loading: !1,
                        realFriendCount: e.currentUser.friends.length,
                        moreFriends: e.currentUser.friends.length > (e.n || 100)
                    }, a
                }
                return (0, j.A)(n, [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        e.userId !== this.props.userId && this.setState({
                            friends: [],
                            offset: 0,
                            userId: this.props.userId
                        }, function() {
                            t.loadMoreFriends()
                        })
                    }
                }, {
                    key: "buildQuery",
                    value: function() {
                        var e = "";
                        return null != this.state.n && (e = "".concat(e, "n=").concat(this.state.n, "&")), null != this.state.offset && (e = "".concat(e, "offset=").concat(this.state.offset)), window.apiUrl(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.currentUser,
                            t = (void 0 === e ? {} : e).friends,
                            n = this.state.friends.map(function(e) {
                                return m.createElement(te, {
                                    user: e,
                                    key: e.id
                                })
                            });
                        return this.props.loading ? m.createElement(x.fy, {
                            width: "100%",
                            height: "200px",
                            className: "mt-2 mb-4"
                        }) : t.length > 0 ? m.createElement("div", null, m.createElement("h3", null, m.createElement(g.A, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && m.createElement(x.M2, {
                            icon: I.Ip
                        }), !this.state.collapseOpen && m.createElement(x.M2, {
                            icon: S.OQ
                        })), " ", this.state.title, " [", t.length, "]"), m.createElement(C.A, {
                            isOpen: this.state.collapseOpen
                        }, m.createElement(E.A, {
                            className: "px-1"
                        }, m.createElement(f.A, {
                            className: "mb-2 mx-0"
                        }, m.createElement(V.A, {
                            className: "px-0"
                        }, m.createElement($.A, {
                            placeholder: "User ID",
                            value: this.state.search,
                            onChange: this.handleSearchChange
                        }), m.createElement(g.A, {
                            onClick: this.handleSearchClick
                        }, m.createElement(x.M2, {
                            icon: H.Mj
                        })))), this.state.search.length > 0 && null === this.state.foundFriend && m.createElement(f.A, {
                            className: "mx-0"
                        }, "UserID ", this.state.search, " is not in the friends list"), this.state.foundFriend && m.createElement(te, {
                            user: this.state.foundFriend
                        }), 0 === this.state.search.length && m.createElement(m.Fragment, null, m.createElement(E.A, {
                            className: "px-0"
                        }, n), m.createElement(E.A, {
                            md: "3",
                            className: "text-center px-0"
                        }, m.createElement(Q.A, {
                            onClick: this.loadMoreFriends,
                            loading: this.state.loading,
                            hidden: !this.state.moreFriends,
                            color: "primary"
                        }, "Load More Friends"))))), m.createElement("hr", null)) : m.createElement("div", null)
                    }
                }]), n
            }(m.Component);
            (0, d.Ng)(function(e) {
                return {
                    currentUser: e.user.databaseUser,
                    loading: e.user.loading
                }
            })(ae);
            var le = n(59362),
                se = n(19179),
                ce = n(6913),
                ie = n(1871),
                oe = n(81617),
                ue = n(35532),
                me = n(8436),
                de = n(43702),
                pe = n(84994),
                he = n(62672),
                fe = n(90128),
                Ee = n.n(fe),
                Ae = n(55606),
                ge = n(74353),
                ve = n.n(ge),
                be = n(83826),
                ye = n.n(be);
            ve().extend(ye());
            var xe = {
                    hardban: "red",
                    ban: "red",
                    banpubliconly: "red",
                    kick: "orange",
                    note: "blue",
                    warn: "yellow",
                    hardNotice: "yellow"
                },
                we = {
                    hardban: he.faBan,
                    ban: he.faBan,
                    banpubliconly: he.faBan,
                    kick: pe.zm,
                    note: de.jy,
                    warn: me.tU,
                    hardNotice: ue.bx
                };
            const ke = function(e) {
                var t = e.moderation,
                    n = e.deleteModeration,
                    r = t.active && ve()(t.expires).isAfter(ve()()) || t.isPermanent;
                return m.createElement(Se, {
                    key: t.id,
                    className: "w-100 mb-1"
                }, m.createElement(Z.A, {
                    className: "w-100"
                }, m.createElement(Me, {
                    color: xe[t.type],
                    isActive: r
                }), m.createElement(Ae.A, {
                    className: "p-2 ps-3 d-flex align-items-center"
                }, m.createElement(Se, {
                    className: (0, i.cx)("flex-grow-1", r && "pe-5")
                }, m.createElement(Ne, {
                    className: "flex-grow-1"
                }, m.createElement(Se, {
                    className: "w-100 justify-content-between"
                }, m.createElement(Se, {
                    className: "align-items-center"
                }, m.createElement(x.M2, {
                    icon: we[t.type],
                    className: "pe-2"
                }), m.createElement("div", {
                    "aria-label": "Moderation Type"
                }, Ee()(t.type)), m.createElement(Ie, {
                    icon: r ? oe.e6 : ie.a$,
                    isActive: r,
                    className: "ps-2 pe-3",
                    title: r ? "Active" : "Inactive"
                }), m.createElement("div", null, "by"), m.createElement(K.N_, {
                    to: "/home/user/".concat(t.moderatorUserId),
                    className: "mx-1",
                    "aria-label": "Moderated By"
                }, t.moderatorDisplayName)), m.createElement(Se, {
                    className: "align-items-center"
                }, m.createElement("div", {
                    title: ve().utc(t.created).format("ddd, MMM DD YYYY, hh:mm:ss a"),
                    className: "pe-1",
                    "aria-label": "Moderated On"
                }, ve().utc(t.created).format("MMM DD YYYY"), " -"), t.isPermanent ? m.createElement("div", null, "Forever") : m.createElement("div", {
                    title: ve().utc(t.expires).format("ddd, MMM DD YYYY, hh:mm:ss a"),
                    className: "pe-2",
                    "aria-label": "Moderation Expires On"
                }, ve().utc(t.expires).format("MMM DD YYYY")))), "N/A" !== t.reason && m.createElement(Se, {
                    className: "align-items-center mt-1"
                }, m.createElement(Se, {
                    className: "me-2 align-items-center"
                }, m.createElement(Ce, {
                    icon: ce.iW,
                    className: "pe-2"
                }), m.createElement("div", null, "Reason:")), m.createElement(Te, {
                    "aria-label": "Moderation Reason"
                }, t.reason))), r && m.createElement(Oe, {
                    onClick: function() {
                        return n(t.id)
                    },
                    title: "Delete Moderation"
                }, m.createElement(x.M2, {
                    icon: se.GR
                }))))))
            };
            var Ne = (0, l.A)("div", {
                    target: "exts1av6"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                Se = (0, l.A)("div", {
                    target: "exts1av5"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                Ie = (0, l.A)(x.M2, {
                    shouldForwardProp: function(e) {
                        return "isActive" !== e
                    },
                    target: "exts1av4"
                })("color:var(--bs-", function(e) {
                    return e.isActive ? "success" : "gray"
                }, ");"),
                Ce = (0, l.A)(x.M2, {
                    target: "exts1av3"
                })({
                    name: "xv8zy",
                    styles: "color:var(--bs-gray)"
                }),
                Me = (0, l.A)("div", {
                    target: "exts1av2"
                })("position:absolute;left:0;top:0;width:4px;height:100%;background-color:var(--bs-", function(e) {
                    return e.color
                }, ");opacity:", function(e) {
                    return e.isActive ? 1 : .5
                }, ";border-top-left-radius:4px;border-bottom-left-radius:4px;"),
                Te = (0, l.A)("div", {
                    target: "exts1av1"
                })({
                    name: "1u7pwvo",
                    styles: "font-size:0.9rem"
                }),
                Oe = (0, l.A)("button", {
                    target: "exts1av0"
                })({
                    name: "j7l6bz",
                    styles: "display:flex;align-items:center;justify-content:center;position:absolute;right:0;top:0;width:40px;height:100%;border:none;color:white;border-top-right-radius:4px;border-bottom-right-radius:4px;background-color:var(--secondary);transition:background-color 0.2s ease-in-out;outline:none!important;&:hover{background-color:var(--red);}&:active{background-color:var(--dark);}"
                }),
                Re = m.memo(function(e) {
                    var t = e.userId,
                        n = function(e) {
                            var t = (0, d.wA)(),
                                n = (0, d.d4)(function(e) {
                                    return e.moderation.activeModerations
                                }) || [],
                                a = m.useCallback(function() {
                                    t((0, b.M3)({
                                        userId: e
                                    }))
                                }, [e]),
                                l = m.useCallback(function() {
                                    var n = (0, r.A)(c().mark(function n(r) {
                                        return c().wrap(function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, t((0, b.YM)({
                                                        userId: e,
                                                        moderationId: r
                                                    }));
                                                case 2:
                                                    return n.next = 4, t((0, b.M3)({
                                                        userId: e
                                                    }));
                                                case 4:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }, n)
                                    }));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }());
                            return {
                                activeModerations: n,
                                fetchModerations: a,
                                deleteModeration: l
                            }
                        }(t),
                        l = n.activeModerations,
                        s = l.list,
                        i = l.loading,
                        o = n.fetchModerations,
                        u = n.deleteModeration,
                        p = m.useState([]),
                        h = (0, a.A)(p, 2),
                        f = h[0],
                        E = h[1],
                        A = m.useRef(0),
                        g = m.useState(!1),
                        v = (0, a.A)(g, 2),
                        y = v[0],
                        x = v[1],
                        k = m.useState(""),
                        S = (0, a.A)(k, 2),
                        I = S[0],
                        C = S[1];
                    m.useEffect(function() {
                        o()
                    }, [t]), m.useEffect(function() {
                        y && A.current !== s.length && (A.current = s.length, E(s.filter(function(e) {
                            return "votekick" !== e.type
                        })))
                    }, [y, s]);
                    var M = function() {
                            return x(!y)
                        },
                        T = function(e) {
                            A.current = 0, u(e)
                        },
                        O = m.useMemo(function() {
                            if (!y) return [];
                            if (0 === I.length) return f;
                            var e = new RegExp("");
                            try {
                                e = new RegExp(I, "ig")
                            } catch (e) {
                                console.error("invalid regular expression", e)
                            }
                            return f.filter(function(e) {
                                return function(t) {
                                    return "".concat(t.type, " ").concat(t.moderatorUserId, " ").concat(t.moderatorDisplayName, " ").concat(t.reason, " ").concat(t.created, " ").concat(t.expires, " ").concat(t.active ? "active" : "inactive", " ").concat(t.isPermanent ? "permanent" : "").match(e)
                                }
                            }(e))
                        }, [y, s, f, I]);
                    return i ? m.createElement("div", null, m.createElement(w.A, {
                        title: "Current Moderations",
                        collapseOpen: y,
                        toggle: M
                    }, m.createElement(N.A, null))) : m.createElement("div", null, m.createElement(w.A, {
                        title: "Current Moderations",
                        collapseOpen: y,
                        toggle: M
                    }, m.createElement($.A, {
                        placeholder: "Search by Moderator ID / Type / Date / Active state / Reason (supports regex)",
                        value: I,
                        onChange: function(e) {
                            var t = e.target.value;
                            C(void 0 === t ? "" : t)
                        },
                        className: "mb-2"
                    }), !1, y && O.map(function(e) {
                        return m.createElement(ke, {
                            moderation: e,
                            key: e.id,
                            deleteModeration: T
                        })
                    })))
                });
            Re.displayName = "CurrentModerations";
            var Ue = n(38221),
                De = n.n(Ue),
                _e = (n(74818), n(82284), n(53463)),
                Fe = n(86420),
                Pe = n(56967),
                je = n(900),
                qe = n(62285),
                ze = n(77276),
                Be = n(91069);
            he.faBan, ze.$z, qe.A5, je.pS, Pe.k6, Fe.Z8, _e.o6;
            var Le = n(6723),
                Ye = n(35169),
                He = n(86878),
                Ge = n(64173),
                We = n(99731),
                Ve = n(94035),
                $e = n(20432),
                Qe = n(68547),
                Je = n(61336),
                Ke = n(48995),
                Ze = n(13342),
                Xe = n(69266);
            const et = {};

            function tt(e) {
                var t = nt();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function nt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (nt = function() {
                    return !!e
                })()
            }
            var rt = et.deleteUserSubscription,
                at = function(e) {
                    (0, z.A)(n, e);
                    var t = tt(n);

                    function n(e) {
                        var a;
                        return (0, P.A)(this, n), a = t.call(this, e), (0, Y.A)((0, q.A)(a), "deleteSubscription", function(e) {
                            return (0, r.A)(c().mark(function t() {
                                return c().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, a.props.dispatch(rt({
                                                transactionId: e,
                                                store: "steam"
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }))
                        }), (0, Y.A)((0, q.A)(a), "clearDeleteModal", (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a.props.dispatch((0, O.d_)());
                                    case 2:
                                        a.props.refresh && a.props.refresh();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))), a.state = {
                            activeTab: "1"
                        }, a
                    }
                    return (0, j.A)(n, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.transaction,
                                r = t.index,
                                a = t.updateError,
                                l = t.complete,
                                s = t.statusCode,
                                c = function(e) {
                                    return "NIL" === e ? "None" : u()(e).format("ll")
                                },
                                o = n.id,
                                d = n.status,
                                p = n.subscription,
                                h = n.isGift,
                                A = n.targetUserId,
                                v = n.steam,
                                b = n.agreement,
                                y = n.sandbox,
                                w = n.error,
                                k = n.log;
                            return "failed" === d || "expired" === d ? null : m.createElement("div", null, m.createElement(Z.A, {
                                className: "m-3 shadow-lg steam-card",
                                style: {
                                    width: "18rem"
                                }
                            }, m.createElement(We.A, {
                                top: !0,
                                className: "mt-4 mb-1",
                                src: "https://assets.vrchat.com/misc/steam_logo.svg"
                            }), m.createElement(Ae.A, {
                                className: "p-3"
                            }, m.createElement(Ve.A, {
                                className: "mb-3",
                                tabs: !0
                            }, m.createElement($e.A, null, m.createElement(Qe.A, {
                                className: (0, i.cx)({
                                    active: "1" === this.state.activeTab
                                }),
                                onClick: function() {
                                    return t = "1", void e.setState({
                                        activeTab: t
                                    });
                                    var t
                                }
                            }, "Subscription")), !1, !1), m.createElement(Je.A, {
                                activeTab: this.state.activeTab
                            }, m.createElement(Ke.A, {
                                tabId: "1"
                            }, m.createElement("h6", null, " ", h && m.createElement(x.M2, {
                                icon: Le.C9
                            }), " ", p.description), m.createElement(f.A, null, m.createElement(E.A, null, "Status:"), m.createElement(E.A, null, " ", d)), m.createElement(f.A, null, m.createElement(E.A, null, "Period:"), m.createElement(E.A, null, p.period)), m.createElement(f.A, null, m.createElement(E.A, null, "Price:"), m.createElement(E.A, null, "$ ", p.amount / 100, " USD")), h && m.createElement("div", {
                                className: "mt-2"
                            }, m.createElement("br", null), m.createElement("h5", null, " Gift Recipient "), m.createElement(f.A, null, m.createElement(E.A, null, m.createElement(le.A, {
                                userId: A,
                                size: "wide"
                            }))))), m.createElement(Ke.A, {
                                tabId: "2"
                            }, m.createElement("div", null, m.createElement(f.A, null, m.createElement(E.A, null, m.createElement("small", null, o))), m.createElement("br", null), m.createElement("h6", null, " Steam Agreement Info"), y && m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "Sandbox"), m.createElement(E.A, null, m.createElement(x.M2, {
                                icon: oe.e6
                            }))), m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "ItemId:"), m.createElement(E.A, null, p.steamItemId)), m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "Steam ID:"), m.createElement(E.A, null, v.steamId)), m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "Order ID:"), m.createElement(E.A, null, v.orderId)), m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "TransID:"), m.createElement(E.A, null, v.transId)), w && m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "4"
                            }, "Error:"), m.createElement(E.A, null, w))), b && m.createElement("div", null, m.createElement("br", null), m.createElement("h6", null, " Steam Agreement Info"), m.createElement(f.A, null, m.createElement(E.A, null, "agreementId:"), m.createElement(E.A, null, b.agreementId)), m.createElement(f.A, null, m.createElement(E.A, null, "Steam Status:"), m.createElement(E.A, null, b.status)), m.createElement(f.A, null, m.createElement(E.A, null, "Subscribed Since:"), m.createElement(E.A, null, c(b.timeCreated))), m.createElement(f.A, null, m.createElement(E.A, null, "Start Date:"), m.createElement(E.A, null, c(b.startDate))), m.createElement(f.A, null, m.createElement(E.A, null, "Last Payment:"), m.createElement(E.A, null, c(b.lastPayment))), m.createElement(f.A, null, m.createElement(E.A, null, "Next Payment:"), m.createElement(E.A, null, c(b.nextPayment))), m.createElement(f.A, null, m.createElement(E.A, null, "Failed Payments:"), m.createElement(E.A, null, b.failedAttempts)), m.createElement(f.A, null, m.createElement(E.A, null, "Unpaid Balance:"), m.createElement(E.A, null, " ", b.outstanding)), m.createElement("br", null)), "chargeback" === d && m.createElement("div", {
                                className: "mt-3"
                            }, m.createElement("h6", null, "Actions"), m.createElement(f.A, null, m.createElement(E.A, null, m.createElement(Xe.A, {
                                title: "Clear Chargeback",
                                clearModal: this.clearDeleteModal,
                                outline: !0,
                                color: "warning",
                                buttonClassName: "w-100"
                            }, l && m.createElement("div", null, "Chargeback Cleared ", m.createElement(x.M2, {
                                icon: Ge.Wc
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, s)), m.createElement("pre", null, m.createElement("code", null, a))), !l && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", o), m.createElement("br", null), m.createElement("div", null, "Are you sure you want to fail this Steam transaction? Doing so will enable the user to make new purchases."), m.createElement("br", null), m.createElement(g.A, {
                                onClick: this.deleteSubscription(o)
                            }, "Confirm Chargeback Clear"))))))), m.createElement(Ke.A, {
                                tabId: "3"
                            }, m.createElement("div", null, m.createElement("h6", null, "Logs And Payment History "), m.createElement("br", null), k && m.createElement(Ze.A, {
                                borderless: !0,
                                striped: !0,
                                size: "sm"
                            }, m.createElement("thead", null, m.createElement("tr", null, m.createElement("th", null, "status"), m.createElement("th", null, "dateTime"))), m.createElement("tbody", null, k.map(function(e, t) {
                                return function(e, t, n) {
                                    var r = "";
                                    return e.agreement ? e.message.includes("status and agreement change") ? r = e.status : e.agreement.failedAttempts && e.agreement.failedAttempts > 0 ? r = "failed payment" : c(e.agreement.lastPayment) === c(e.dateTime) && (r = "recurred") : r = e.status || e.message, r ? m.createElement("tr", {
                                        key: "".concat(t, "_log_").concat(n)
                                    }, m.createElement("td", null, r), m.createElement("td", null, c(e.dateTime))) : null
                                }(e, r, t)
                            })))))))))
                        }
                    }]), n
                }(m.Component);
            const lt = (0, d.Ng)(function(e) {
                return {
                    user: e.user.databaseUser,
                    error: e.user.transactions.error,
                    statusCode: e.user.transactions.statusCode,
                    loading: e.user.transactions.loading,
                    updateError: e.user.updatedSubscriptionError,
                    complete: e.user.updatedSubscription
                }
            })(at);
            const st = function(e) {
                var t = e.transaction,
                    n = (0, m.useState)("1"),
                    r = (0, a.A)(n, 2),
                    l = r[0],
                    s = r[1],
                    c = function(e) {
                        return "NIL" === e ? "None" : u()(e).format("ll")
                    },
                    o = t.id,
                    d = t.status,
                    p = (t.ip, t.country, t.updated_at, t.created_at, t.isGift),
                    h = t.targetUserId,
                    A = t.subscription,
                    g = t.oculus,
                    v = t.log;
                return m.createElement("div", null, m.createElement(Z.A, {
                    className: "m-3 shadow-lg oculus-card",
                    style: {
                        width: "18rem"
                    }
                }, m.createElement(We.A, {
                    top: !0,
                    className: "ms-3 oculus-img",
                    src: "https://assets.vrchat.com/misc/oculus-logo.png"
                }), m.createElement(Ae.A, {
                    className: "p-3"
                }, m.createElement(Ve.A, {
                    className: "mb-3",
                    tabs: !0
                }, m.createElement($e.A, null, m.createElement(Qe.A, {
                    className: (0, i.cx)({
                        active: "1" === l
                    }),
                    onClick: function() {
                        return s("1")
                    }
                }, "Subscription")), !1, !1), m.createElement(Je.A, {
                    activeTab: l
                }, m.createElement(Ke.A, {
                    tabId: "1"
                }, m.createElement("h6", null, " ", p && m.createElement(x.M2, {
                    icon: Le.C9
                }), " ", A.description), m.createElement(f.A, null, m.createElement(E.A, null, "Status:"), m.createElement(E.A, {
                    className: "expired" === d && "text-warning"
                }, " ", d)), m.createElement(f.A, null, m.createElement(E.A, null, "Period:"), m.createElement(E.A, null, A.period)), m.createElement(f.A, null, m.createElement(E.A, null, "Price:"), m.createElement(E.A, null, "$ ", A.amount / 100, " USD")), m.createElement("br", null), m.createElement(f.A, null, m.createElement(E.A, null, "Starts"), m.createElement(E.A, null, c(g.period_start_time))), m.createElement(f.A, null, m.createElement(E.A, null, "Ends"), m.createElement(E.A, null, c(g.period_end_time))), !p && g.next_renewal_time && m.createElement(f.A, null, m.createElement(E.A, null, "Next Renewal"), m.createElement(E.A, null, c(g.next_renewal_time))), !p && g.cancellation_time && m.createElement(f.A, null, m.createElement(E.A, null, "Canceled"), m.createElement(E.A, null, c(g.cancellation_time))), p && m.createElement("div", {
                    className: "mt-2"
                }, m.createElement("br", null), m.createElement("h5", null, " Gift Recipient "), m.createElement(f.A, null, m.createElement(E.A, null, m.createElement(le.A, {
                    userId: h,
                    size: "wide"
                }))))), m.createElement(Ke.A, {
                    tabId: "2"
                }, m.createElement("div", null, m.createElement(f.A, null, m.createElement(E.A, null, m.createElement("small", null, o))), m.createElement("br", null), m.createElement("h6", null, " Oculus Info"), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Sku:"), m.createElement(E.A, null, g.sku)), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Owner ID:"), m.createElement(E.A, null, g.owner.id)), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Is Active"), m.createElement(E.A, null, String(g.is_active))), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Is Trial"), m.createElement(E.A, null, String(g.is_trial))), m.createElement("br", null), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Starts"), m.createElement(E.A, null, c(g.period_start_time))), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Ends"), m.createElement(E.A, null, c(g.period_end_time))), m.createElement(f.A, null, m.createElement(E.A, {
                    xs: "4"
                }, "Canceled"), m.createElement(E.A, null, c(g.period_start_time))))), m.createElement(Ke.A, {
                    tabId: "3"
                }, m.createElement("div", null, m.createElement("h6", null, "Logs And Payment History "), m.createElement("br", null), v && m.createElement(Ze.A, {
                    borderless: !0,
                    striped: !0,
                    size: "sm"
                }, m.createElement("thead", null, m.createElement("tr", null, m.createElement("th", null, "status"), m.createElement("th", null, "isActive"), m.createElement("th", null, "endTime"))), m.createElement("tbody", null, v.map(function(e, t) {
                    return p ? function(e, t) {
                        return m.createElement("tr", {
                            key: "oculus_".concat(t, "_log}")
                        }, m.createElement("td", null, e.status), m.createElement("td", null, String("active" === e.status)), m.createElement("td", null, c(e.dateTime)))
                    }(e, t) : function(e, t) {
                        var n, r, a = "reactivated" === e.message ? e.message : e.status;
                        return m.createElement("tr", {
                            key: "oculus_".concat(t, "_log}")
                        }, m.createElement("td", null, a), m.createElement("td", null, String(null === (n = e.oculus) || void 0 === n ? void 0 : n.is_active)), m.createElement("td", null, c(null === (r = e.oculus) || void 0 === r ? void 0 : r.period_end_time)))
                    }(e, t)
                })))))))))
            };
            const ct = function(e) {
                var t = e.transaction,
                    n = (0, m.useState)("1"),
                    r = (0, a.A)(n, 2),
                    l = r[0],
                    s = r[1],
                    c = (t.id, t.status, t.ip, t.country, t.expiry),
                    o = t.subscription;
                t.adminUserId;
                return m.createElement("div", null, m.createElement(Z.A, {
                    className: "m-3 shadow-lg",
                    style: {
                        width: "18rem"
                    }
                }, m.createElement(We.A, {
                    top: !0,
                    className: "ms-3 vrchat-img",
                    src: "https://assets.vrchat.com/www/favicons/android-chrome-512x512.png"
                }), m.createElement(Ae.A, {
                    className: "p-3"
                }, m.createElement(Ve.A, {
                    className: "mb-3",
                    tabs: !0
                }, m.createElement($e.A, null, m.createElement(Qe.A, {
                    className: (0, i.cx)({
                        active: "1" === l
                    }),
                    onClick: function() {
                        return s("1")
                    }
                }, "Subscription"))), m.createElement(Je.A, {
                    activeTab: l
                }, m.createElement(Ke.A, {
                    tabId: "1"
                }, m.createElement("h6", null, " ", o.description), m.createElement(f.A, null, m.createElement(E.A, null, "Period:"), m.createElement(E.A, null, o.period)), m.createElement(f.A, null, m.createElement(E.A, null, "Price:"), m.createElement(E.A, null, "$ ", o.amount / 100, " USD")), m.createElement("br", null), m.createElement(f.A, null, m.createElement(E.A, null, "Expires:"), m.createElement(E.A, null, u()(c).fromNow())))))))
            };

            function it(e) {
                var t = ot();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function ot() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (ot = function() {
                    return !!e
                })()
            }
            var ut = et.loadAdminTransactions,
                mt = function(e) {
                    (0, z.A)(n, e);
                    var t = it(n);

                    function n(e) {
                        var r;
                        return (0, P.A)(this, n), (r = t.call(this, e)).state = {
                            isCollapsed: !1,
                            activeTab: "1"
                        }, r
                    }
                    return (0, j.A)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e;
                            null !== (e = this.props.router.params) && void 0 !== e && e.userId && (this.props.dispatch((0, O.cm)({
                                userId: this.props.router.params.userId
                            })), this.props.dispatch((0, O.rQ)({
                                userId: this.props.router.params.userId,
                                includeOutgoingGifts: !0
                            })), this.props.dispatch(ut({
                                userId: this.props.router.params.userId
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.steam,
                                r = t.oculus,
                                a = t.admin,
                                l = t.loading,
                                s = t.error,
                                c = t.oculusError,
                                o = (this.props.subscriptions || []).map(function(e) {
                                    return e.transactionId
                                }),
                                u = r && (null === (e = Object.keys(r)) || void 0 === e ? void 0 : e.length) > 0,
                                d = [],
                                p = [];
                            null == n || n.forEach(function(e) {
                                "failed" !== e.status && "expired" !== e.status && (e.isGift ? d.push(e) : (o.includes(e.id) || "chargeback" === e.status) && p.push(e))
                            }), null == r || r.forEach(function(e) {
                                e.isGift ? d.push(e) : (o.includes(e.id) || "chargeback" === e.status) && p.push(e)
                            });
                            var h = c && "Not Found" !== c;
                            return l ? m.createElement("div", null, "loading...") : m.createElement(Ye.A, (0, Y.A)({
                                className: "mt-2"
                            }, "className", (0, i.AH)({
                                name: "yz9kv1",
                                styles: "& .location-card{margin:5px;padding:10px;text-align:left;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .size-wide .user-img{margin-left:5px;}& .steam-card{background-color:#171a21;background-image:linear-gradient(50deg, #184053, #1b2838, #000000f5);}& .oculus-card{background-color:#1c1e21;}& .steam-card img{height:70px;margin-left:20px;}& .vrchat-img{margin-top:0.5rem;margin-bottom:-30px;width:90%;}& .oculus-img{margin-top:1rem;margin-bottom:-12px;width:87%;}& .nav-link:hover{cursor:pointer;}& .table-striped tbody tr:nth-of-type(odd){background-color:rgba(0, 0, 0, 0.5);}"
                            })), h && m.createElement("div", null, "there has been an error loading the Oculus transactions= ", c), s && m.createElement("div", null, "there has been an error loading the subscription info: ", s), m.createElement(f.A, null, m.createElement("h4", null, "Recurring Subs")), m.createElement("div", {
                                className: "card-container d-flex flex-wrap"
                            }, 0 === p.length && !u && 0 === (null == a ? void 0 : a.length) && m.createElement("div", null, "None ._."), a && a.map(function(e, t) {
                                return m.createElement(ct, {
                                    transaction: e,
                                    key: "recur-card-".concat(t)
                                })
                            }), p.map(function(e, t) {
                                return e.oculus ? m.createElement(st, {
                                    transaction: e
                                }) : m.createElement(lt, {
                                    transaction: e,
                                    index: t,
                                    key: "recur-card-".concat(t)
                                })
                            })), d.length > 0 && m.createElement("div", null, m.createElement(f.A, {
                                className: "mt-2"
                            }, m.createElement("h4", null, "Gift Purchases  ", m.createElement(x.M2, {
                                icon: Le.C9
                            }))), m.createElement("div", {
                                className: "card-container d-flex flex-wrap"
                            }, d.map(function(e, t) {
                                return e.oculus ? m.createElement(st, {
                                    transaction: e
                                }) : m.createElement(lt, {
                                    transaction: e,
                                    index: t,
                                    key: "gift-card-".concat(t)
                                })
                            }))))
                        }
                    }]), n
                }(m.Component);
            (0, He.A)((0, d.Ng)(function(e) {
                return {
                    steam: e.user.transactions.steam,
                    oculus: e.user.transactions.oculus,
                    admin: e.user.transactions.admin,
                    subscriptions: e.user.subscriptions,
                    error: e.user.transactions.error,
                    statusCode: e.user.transactions.statusCode,
                    loading: e.user.transactions.loading
                }
            })(mt));
            var dt = n(66911),
                pt = (n(19616), n(34496), new RegExp("^/api/\\d+/(?<fileType>file|image)/(?<fileId>file_".concat("[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}", ")/(?<versionNumber>\\d+)")), n(558), n(13951)),
                ht = (n(6559), n(194));
            n(34736);
            n(56136);
            var ft = n(71957),
                Et = n(60188),
                At = n(46708);
            var gt = m.memo(function() {
                (0, d.wA)();
                var e = (0, p.g)().userId,
                    t = m.useState(e),
                    n = (0, a.A)(t, 2),
                    r = n[0],
                    l = n[1],
                    s = (0, ft.vf)(r),
                    c = s.data,
                    o = s.isLoading,
                    u = s.isFetching,
                    h = (0, pt.p$)().data,
                    f = m.useState(0),
                    E = (0, a.A)(f, 2),
                    A = E[0],
                    g = E[1],
                    v = (0, ht.Om)(),
                    b = r === (null == h ? void 0 : h.id),
                    y = b || v,
                    w = m.useState(y),
                    k = (0, a.A)(w, 2),
                    N = k[0],
                    S = k[1],
                    I = m.useState(!1),
                    C = (0, a.A)(I, 2),
                    M = C[0],
                    T = (C[1], m.useState(!1)),
                    O = (0, a.A)(T, 2),
                    R = (O[0], O[1], m.useState(!1)),
                    U = (0, a.A)(R, 2),
                    D = (U[0], U[1], m.useState([])),
                    _ = (0, a.A)(D, 2),
                    F = _[0],
                    P = _[1];
                m.useEffect(function() {
                    g(0), P([]), S(e === (null == h ? void 0 : h.id) || v), l(e)
                }, [e, h, v, y]);
                var j = (0, Et.Pk)({
                        userId: r,
                        offset: A,
                        sort: "updated",
                        order: "descending",
                        n: 50,
                        releaseStatus: N ? "all" : "public"
                    }, {
                        skip: r !== (null == c ? void 0 : c.id)
                    }),
                    q = j.data,
                    z = void 0 === q ? [] : q,
                    B = j.isFetching,
                    L = j.isSuccess;
                m.useEffect(function() {
                    z.length && P(function(e) {
                        return [].concat((0, dt.A)(e), (0, dt.A)(z))
                    })
                }, [z]);
                var Y = m.useMemo(function() {
                    var e = [];
                    return N ? e = [].concat((0, dt.A)([].concat(F.filter(function(e) {
                        return "public" === e.releaseStatus
                    })).sort(function(e, t) {
                        return ve()(e.updated_at).isBefore(ve()(t.updated_at)) ? 1 : -1
                    })), (0, dt.A)(F.filter(function(e) {
                        return "public" !== e.releaseStatus
                    }))) : (e = [].concat(F)).sort(function(e, t) {
                        return ve()(e.updated_at).isBefore(ve()(t.updated_at)) ? 1 : -1
                    }), e
                }, [F, N]);
                return (o || 0 === F.length && B) && !M ? m.createElement(bt, null, o ? m.createElement(x.fy, {
                    className: "mb-2",
                    width: "100%",
                    height: "50px"
                }) : m.createElement(xt, null, c.displayName, "'s Worlds"), m.createElement(wt, {
                    role: "grid",
                    title: "Worlds Loading"
                }, m.createElement(x.fy, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }))) : m.createElement(bt, {
                    className: (0, i.cx)(!M && "pb-5")
                }, m.createElement(yt, {
                    className: "justify-content-between align-items-center"
                }, m.createElement(yt, {
                    className: "align-items-center"
                }, v && !1, u ? m.createElement(x.fy, {
                    className: "m-2",
                    width: "100%",
                    height: "80px"
                }) : m.createElement(xt, null, c.displayName, "'s Worlds")), m.createElement(yt, {
                    className: "align-items-center"
                }, y && m.createElement(kt, {
                    role: "checkbox",
                    "aria-checked": N,
                    onClick: function() {
                        (v || b) && (S(!N), g(0), P([]))
                    }
                }, m.createElement(Nt, null, "Show Private Worlds"), m.createElement(x.M2, {
                    width: 20,
                    icon: oe.e6,
                    disabled: !N
                })))), !M && v && !1, L && 0 === z.length && 0 === F.length && !M && m.createElement(St, {
                    role: "note"
                }, "There are no Worlds here... yet"), m.createElement(wt, {
                    id: "WorldGrid"
                }, (M ? [] : Y).map(function(e) {
                    return m.createElement(At.A, {
                        key: e.id,
                        world: e
                    })
                }), !M && B && m.createElement(m.Fragment, null, m.createElement(x.fy, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.fy, {
                    width: "auto",
                    height: "420px"
                }))), !M && F.length - A === 50 && m.createElement(x.$n, {
                    onClick: function() {
                        B || g(A + 50)
                    }
                }, "Load More Worlds"))
            });
            const vt = gt;
            var bt = (0, l.A)("div", {
                    target: "eazcmqq6"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                yt = (0, l.A)("div", {
                    target: "eazcmqq5"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                xt = (0, l.A)("h2", {
                    target: "eazcmqq4"
                })(""),
                wt = (0, l.A)("div", {
                    target: "eazcmqq3"
                })({
                    name: "mtvm74",
                    styles: "margin-top:10px;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                }),
                kt = (0, l.A)(x.$n, {
                    target: "eazcmqq2"
                })({
                    name: "3zych9",
                    styles: "display:flex;align-items:center;min-height:2.5rem"
                }),
                Nt = (0, l.A)("div", {
                    target: "eazcmqq1"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                St = (0, l.A)("div", {
                    target: "eazcmqq0"
                })({
                    name: "bpc6lh",
                    styles: "width:100%;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#54b5c5;background-color:#252a30;border-radius:8px;font-size:2rem;text-align:center;margin-top:1rem"
                });
            var It = n(57132);

            function Ct(e) {
                var t = Mt();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Mt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Mt = function() {
                    return !!e
                })()
            }
            var Tt = function(e) {
                (0, z.A)(a, e);
                var t, n = Ct(a);

                function a(e) {
                    var t;
                    return (0, P.A)(this, a), (t = n.call(this, e)).state = {
                        subscriptions: !1
                    }, t.loadSubscriptions = t.loadSubscriptions.bind((0, q.A)(t)), t.changeSubscription = t.changeSubscription.bind((0, q.A)(t)), t
                }
                return (0, j.A)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.loadSubscriptions().catch(function(e) {
                            console.error(e)
                        })
                    }
                }, {
                    key: "loadSubscriptions",
                    value: (t = (0, r.A)(c().mark(function e() {
                        var t;
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, W().get(window.apiUrl("/api/1/subscriptions?gifts=true&recurring=true"));
                                case 2:
                                    t = e.sent, this.setState({
                                        subscriptions: t.data
                                    }), this.props.onChange && this.props.onChange(t.data[0].id);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "changeSubscription",
                    value: function(e) {
                        this.props.onChange && this.props.onChange(e.target.value)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return m.createElement("div", null, this.state.subscriptions && m.createElement("div", null, m.createElement("select", {
                            className: "custom-select",
                            onChange: this.changeSubscription
                        }, this.state.subscriptions.map(function(e) {
                            return m.createElement("option", {
                                value: e.id
                            }, e.id, " — ", e.description)
                        }))))
                    }
                }]), a
            }(m.Component);
            const Ot = Tt;

            function Rt(e) {
                var t = Ut();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Ut() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Ut = function() {
                    return !!e
                })()
            }
            var Dt = function(e) {
                (0, z.A)(n, e);
                var t = Rt(n);

                function n(e) {
                    var r;
                    (0, P.A)(this, n), r = t.call(this, e);
                    var a = e.timeOptions || ["hour", "day", "week", "month", "year"];
                    return r.state = {
                        number: 1,
                        span: a[0],
                        timeOptions: a
                    }, r.changeNumber = r.changeNumber.bind((0, q.A)(r)), r.changeSpan = r.changeSpan.bind((0, q.A)(r)), null != r.props.onChange && r.props.onChange("1_".concat(r.state.span)), r
                }
                return (0, j.A)(n, [{
                    key: "changeNumber",
                    value: function(e) {
                        isNaN(parseInt(e.target.value)) || (this.setState({
                            number: e.target.value
                        }), this.props.onChange && this.props.onChange("".concat(parseInt(e.target.value), "_").concat(this.state.span)))
                    }
                }, {
                    key: "changeSpan",
                    value: function(e) {
                        this.setState({
                            span: e.target.value
                        }), this.props.onChange && this.props.onChange("".concat(this.state.number, "_").concat(e.target.value))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return m.createElement("div", {
                            className: "input-group"
                        }, m.createElement("input", {
                            className: "form-control",
                            type: "text",
                            onChange: this.changeNumber,
                            placeholder: 1
                        }), m.createElement("select", {
                            className: "custom-select",
                            onChange: this.changeSpan
                        }, this.state.timeOptions.map(function(e) {
                            return m.createElement("option", {
                                value: e
                            }, e, "s")
                        })))
                    }
                }]), n
            }(m.Component);
            const _t = Dt;

            function Ft(e) {
                var t = Pt();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Pt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Pt = function() {
                    return !!e
                })()
            }
            var jt = et.clearAdminSubscription,
                qt = et.createAdminSubscription,
                zt = function(e) {
                    (0, z.A)(n, e);
                    var t = Ft(n);

                    function n(e) {
                        var r;
                        return (0, P.A)(this, n), (r = t.call(this, e)).state = {
                            subscriptionId: "",
                            expiry: "1_hour"
                        }, r.createAdminSubscriptionHandler = r.createAdminSubscriptionHandler.bind((0, q.A)(r)), r.changeSubscription = r.changeSubscription.bind((0, q.A)(r)), r.changeTimespan = r.changeTimespan.bind((0, q.A)(r)), r.props.dispatch(jt()), r
                    }
                    return (0, j.A)(n, [{
                        key: "createAdminSubscriptionHandler",
                        value: function() {
                            this.props.dispatch(qt({
                                userId: this.props.userId,
                                subscriptionId: this.state.subscriptionId,
                                expiry: "".concat(this.state.expiry, "_ahead")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.complete && this.props.dispatch((0, O.RS)({
                                userId: this.props.userId
                            }))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "changeSubscription",
                        value: function(e) {
                            this.setState({
                                subscriptionId: e
                            })
                        }
                    }, {
                        key: "changeTimespan",
                        value: function(e) {
                            this.setState({
                                expiry: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.displayName,
                                n = e.loading,
                                r = e.statusCode,
                                a = e.error,
                                l = e.complete,
                                s = "" !== this.state.timespan && "" !== this.state.subscriptionId;
                            return n ? m.createElement("div", null, " loading ... ") : l ? m.createElement("div", null, " ", "u did it ", m.createElement(x.M2, {
                                icon: Ge.Wc
                            })) : a ? m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r), " oh no"), m.createElement("pre", null, m.createElement("code", null, a))) : m.createElement("div", null, m.createElement("div", null, t), m.createElement("br", null), m.createElement(Ot, {
                                onChange: this.changeSubscription
                            }), m.createElement("br", null), m.createElement(_t, {
                                onChange: this.changeTimespan
                            }), m.createElement("br", null), m.createElement(g.A, {
                                onClick: this.createAdminSubscriptionHandler,
                                disabled: !s
                            }, "Create"))
                        }
                    }]), n
                }(m.Component);
            (0, d.Ng)(function(e) {
                return {
                    userId: e.user.databaseUser.id,
                    displayName: e.user.databaseUser.displayName,
                    loading: e.createAdminSubscription.loading,
                    statusCode: e.createAdminSubscription.statusCode,
                    error: e.createAdminSubscription.error,
                    complete: e.createAdminSubscription.complete
                }
            })(zt);
            var Bt = n(84777),
                Lt = n(64035),
                Yt = n(49205),
                Ht = n(42217),
                Gt = n(61087),
                Wt = n(65279),
                Vt = n(62328),
                $t = n.n(Vt),
                Qt = n(83616);

            function Jt(e) {
                var t = Kt();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Kt() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Kt = function() {
                    return !!e
                })()
            }
            var Zt = Qt.A.runMergeDiagnostic,
                Xt = Qt.A.repairMerge,
                en = function(e) {
                    (0, z.A)(l, e);
                    var t, n, a = Jt(l);

                    function l(e) {
                        var t;
                        return (0, P.A)(this, l), (t = a.call(this, e)).state = {
                            diagnosticTooltipOpen: !1,
                            repairTooltipOpen: !1
                        }, t.handleRunMergeDiagnostic = t.handleRunMergeDiagnostic.bind((0, q.A)(t)), t.handleRepairMerge = t.handleRepairMerge.bind((0, q.A)(t)), t
                    }
                    return (0, j.A)(l, [{
                        key: "handleRunMergeDiagnostic",
                        value: (n = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.props.dispatch(Zt({
                                            userId: this.props.userId
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "handleRepairMerge",
                        value: (t = (0, r.A)(c().mark(function e(t) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch(Xt({
                                            targetUserId: this.props.userId,
                                            sourceUserId: t
                                        }));
                                    case 2:
                                        return e.next = 4, $t()(1e3);
                                    case 4:
                                        return e.next = 6, this.props.dispatch(Zt({
                                            userId: this.props.userId,
                                            autoRefresh: !0
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "toggle",
                        value: function(e) {
                            this.setState((0, Y.A)({}, e, !this.state[e]))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.accounts,
                                r = t.loading,
                                a = t.diagnosticStatusCode,
                                l = t.diagnosticError,
                                s = t.diagnosticComplete,
                                c = t.repairStatusCode,
                                i = t.repairError,
                                o = t.repairComplete,
                                u = Object.keys(n).length;
                            return m.createElement(Ye.A, {
                                className: "pt-3"
                            }, m.createElement(f.A, null, m.createElement(g.A, {
                                onClick: this.handleRunMergeDiagnostic
                            }, m.createElement(x.M2, {
                                icon: Gt.ij
                            }), "  Run Diagnostic"), m.createElement("span", {
                                className: "ps-4 pe-4",
                                id: "diagnosticTooltip"
                            }, m.createElement(x.M2, {
                                icon: Bt.kt
                            }), m.createElement(Wt.A, {
                                placement: "right",
                                isOpen: this.state.diagnosticTooltipOpen,
                                target: "diagnosticTooltip",
                                toggle: function() {
                                    return e.toggle("diagnosticTooltipOpen")
                                }
                            }, "In this diagnostic we will compare this user to any previously merged source (external) accounts."))), m.createElement("hr", null), m.createElement(f.A, null, m.createElement(k.A, {
                                loading: r
                            }), l && m.createElement("div", null, m.createElement("h6", {
                                className: "text-danger"
                            }, " An error occurred while trying to diagnose merge "), m.createElement("pre", null, m.createElement("code", null, " ", a, " ", l, " "))), i && m.createElement("div", null, m.createElement("h6", {
                                className: "text-danger"
                            }, " An error occurred during merge repair "), m.createElement("pre", null, m.createElement("code", null, " ", c, " ", i, " "))), s && m.createElement(Ye.A, {
                                className: "pt-3"
                            }, m.createElement(f.A, null, m.createElement(E.A, {
                                className: "p-0"
                            }, Object.values(n).map(function(t, n) {
                                var r = t.errors,
                                    a = t.criticalErrors,
                                    l = t.sourceType,
                                    s = t.sourceId,
                                    c = t.targetId,
                                    i = r.length > 0,
                                    u = a.length > 0;
                                return m.createElement(Ye.A, {
                                    key: "".concat(l, "-results-").concat(n)
                                }, l && m.createElement(f.A, null, m.createElement("h4", null, l.toTitleCase(), "  ", !i && m.createElement(x.M2, {
                                    icon: Ht.SG,
                                    className: "text-success"
                                }), i && m.createElement(x.M2, {
                                    icon: me.tU,
                                    className: "text-danger"
                                }))), m.createElement(f.A, null, m.createElement(x.M2, {
                                    icon: Yt._q
                                }), "  ", s && m.createElement("h6", null, " Merged from user ", s), c && m.createElement("h6", null, " Merged into user ", c)), i && m.createElement("div", null, m.createElement(f.A, {
                                    className: "center-block text-center justify-content-center"
                                }, !o && m.createElement("h4", {
                                    className: "text-danger"
                                }, "Merge errors detected!"), o && m.createElement("h4", {
                                    className: "text-danger"
                                }, "If you just repaired, we might not be done yet! ", m.createElement("br", null), "Please wait a few minutes and run the diagnostic again")), m.createElement(f.A, null, m.createElement("ul", null, r.map(function(e, t) {
                                    return m.createElement("li", {
                                        key: "".concat(l, "-error-").concat(t)
                                    }, e)
                                }))), !o && !u && m.createElement(f.A, {
                                    className: "center-block text-center justify-content-center"
                                }, m.createElement(g.A, {
                                    color: "danger",
                                    placement: "right",
                                    onClick: function() {
                                        return e.handleRepairMerge(s)
                                    }
                                }, m.createElement(x.M2, {
                                    icon: Lt.Ot
                                }), "  Repair ", l.toTitleCase(), " Merge"), m.createElement("span", {
                                    className: "ps-4 pe-4",
                                    id: "repairTooltip"
                                }, m.createElement(x.M2, {
                                    icon: Bt.kt
                                }), m.createElement(Wt.A, {
                                    placement: "right",
                                    isOpen: e.state.repairTooltipOpen,
                                    target: "repairTooltip",
                                    toggle: function() {
                                        return e.toggle("repairTooltipOpen")
                                    }
                                }, "We will attempt to automatically fix merge discrepancies between these two accounts.")))), u && m.createElement("div", null, m.createElement(f.A, null, m.createElement("h4", {
                                    className: "text-danger"
                                }, "The diagnostic can't continue!")), m.createElement(f.A, null, m.createElement("ul", null, a.map(function(e, t) {
                                    return m.createElement("li", {
                                        key: "criticalError-".concat(t)
                                    }, e)
                                })))), c && m.createElement(f.A, null, m.createElement("h6", {
                                    className: "text-danger"
                                }, "Please diagnose issues from the merge target")), m.createElement("hr", null))
                            }), !u && m.createElement("h6", null, "No merge information found"))))))
                        }
                    }]), l
                }(m.Component);
            (0, d.Ng)(function(e) {
                return {
                    userId: e.user.databaseUser.id,
                    accounts: e.user.mergeDiagnostic.accounts,
                    diagnosticStatusCode: e.user.mergeDiagnostic.statusCode,
                    diagnosticError: e.user.mergeDiagnostic.error,
                    repairStatusCode: e.user.mergeRepair.statusCode,
                    repairError: e.user.mergeRepair.error,
                    diagnosticComplete: e.user.mergeDiagnostic.complete,
                    repairComplete: e.user.mergeRepair.complete,
                    loading: e.user.mergeDiagnostic.loading || e.user.mergeRepair.loading
                }
            })(en);
            n(6324);
            var tn = n(78479),
                nn = (n(89524), n(71602), n(44034));
            De()(function(e, t, n, r) {
                W().get(window.apiUrl("/api/1/auth/exists?username=".concat(encodeURIComponent(e), "&displayName=").concat(encodeURIComponent(t), "&excludeUserId=").concat(n))).then(function(e) {
                    r(e.data.userExists)
                })
            }, 1e3, {
                leading: !1,
                trailing: !0
            });
            var rn = n(7612),
                an = n(33673),
                ln = n(1700),
                sn = n(96704),
                cn = n(69517),
                on = n.n(cn),
                un = n(79772);

            function mn(e) {
                var t = dn();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function dn() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (dn = function() {
                    return !!e
                })()
            }
            var pn = Qt.A.adminChangeEmail,
                hn = De()(function(e, t, n) {
                    W().get(window.apiUrl("/api/1/auth/exists?email=".concat(encodeURIComponent(e), "&excludeUserId=").concat(t))).then(function(e) {
                        n(e.data.userExists)
                    })
                }, 1e3),
                fn = function(e) {
                    (0, z.A)(n, e);
                    var t = mn(n);

                    function n(e) {
                        var r;
                        return (0, P.A)(this, n), (r = t.call(this, e)).state = {
                            email: "",
                            emailOk: null,
                            emailTaken: !1,
                            emailError: !1,
                            ready: !1,
                            forceVerify: !1,
                            scramblePassword: !1
                        }, r.handleEmailChange = r.handleEmailChange.bind((0, q.A)(r)), r.handleSubmit = r.handleSubmit.bind((0, q.A)(r)), r.handleForceVerifyChange = r.handleForceVerifyChange.bind((0, q.A)(r)), r.handleScramblePasswordChanged = r.handleScramblePasswordChanged.bind((0, q.A)(r)), r
                    }
                    return (0, j.A)(n, [{
                        key: "handleEmailChange",
                        value: function(e) {
                            var t = this,
                                n = e.target.value;
                            this.setState({
                                email: n,
                                emailOk: null,
                                emailTaken: null,
                                emailError: !1,
                                ready: !1
                            }), hn(n, this.props.user.id, function(e) {
                                var r = on()(n) && !(0, un.X)(n),
                                    a = (null == n || "" === n || !r) && "That's an invalid email";
                                t.setState({
                                    emailTaken: e,
                                    emailError: a,
                                    emailOk: !e && !a,
                                    ready: !e && !a
                                })
                            }), e.preventDefault()
                        }
                    }, {
                        key: "handleScramblePasswordChanged",
                        value: function(e) {
                            var t = e.target.checked;
                            this.setState({
                                scramblePassword: t,
                                ready: !0
                            })
                        }
                    }, {
                        key: "handleForceVerifyChange",
                        value: function(e) {
                            var t = e.target.checked;
                            this.setState({
                                forceVerify: t,
                                ready: !0
                            })
                        }
                    }, {
                        key: "handleSubmit",
                        value: function(e) {
                            var t = this;
                            this.props.dispatch(pn({
                                userId: this.props.user.id,
                                email: this.state.email,
                                verified: this.state.forceVerify,
                                scramblePassword: this.state.scramblePassword
                            })).then(function() {
                                t.setState({
                                    email: "",
                                    emailOk: null,
                                    emailTaken: !1,
                                    emailError: !1,
                                    ready: !1,
                                    forceVerify: !1,
                                    scramblePassword: !1
                                }), t.props.dispatch((0, O.vA)({
                                    userId: t.props.user.id
                                }))
                            }).then(function() {
                                t.props.router.navigate.push("/home/user/".concat(t.props.user.id))
                            }), e.preventDefault()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.email,
                                n = e.user;
                            return m.createElement("div", {
                                className: "center-panel"
                            }, m.createElement("form", {
                                onSubmit: this.handleSubmit
                            }, m.createElement(f.A, null, m.createElement(E.A, {
                                xs: "1",
                                style: {
                                    textAlign: "right"
                                }
                            }, m.createElement(x.M2, {
                                icon: sn.Hz,
                                size: "2x"
                            })), m.createElement(E.A, {
                                xs: "10"
                            }, m.createElement(f.A, null, m.createElement("input", {
                                type: "text",
                                id: "email",
                                name: "email",
                                className: "form-control",
                                value: this.state.email,
                                placeholder: n.obfuscatedEmail,
                                onChange: this.handleEmailChange,
                                onKeyUp: this.handleEmailChange
                            }), this.state.emailError && m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(x.M2, {
                                icon: ln.$f
                            }), " ", this.state.emailError), this.state.emailTaken && m.createElement(h.A, {
                                color: "warning"
                            }, m.createElement(x.M2, {
                                icon: an.W6
                            }), " That email is already in use."), n.hasPendingEmail && m.createElement(h.A, {
                                color: "info"
                            }, m.createElement(x.M2, {
                                icon: ce.iW
                            }), " An email change is pending verification: ", n.obfuscatedPendingEmail)), m.createElement(E.A, {
                                xs: "8"
                            }, m.createElement(nn.A, {
                                id: "forceVerify",
                                defaultChecked: this.state.forceVerify,
                                onChange: this.handleForceVerifyChange,
                                label: "Mark email verified (don't send confirmation email)",
                                htmlFor: "forceVerify"
                            })), m.createElement(E.A, {
                                xs: "8"
                            }, m.createElement(nn.A, {
                                id: "scramblePassword",
                                defaultChecked: this.state.scramblePassword,
                                onChange: this.handleScramblePasswordChanged,
                                label: "Scramble password and log out all sessions",
                                htmlFor: "scramblePassword"
                            })), m.createElement(f.A, null, m.createElement(E.A, {
                                xs: {
                                    size: 4,
                                    offset: 8
                                }
                            }, m.createElement(g.A, {
                                disabled: !this.state.ready && !t.changing,
                                color: "primary",
                                block: !0,
                                id: "email-change-submit",
                                name: "email-change-submit",
                                value: "update"
                            }, "Change Email")))), m.createElement(E.A, {
                                xs: "1",
                                style: {
                                    textAlign: "left"
                                }
                            }, null == this.state.emailTaken && m.createElement(x.M2, {
                                icon: rn.z1,
                                spin: !0,
                                size: "2x"
                            }), m.createElement(tn.A, {
                                ok: this.state.emailOk
                            })))))
                        }
                    }]), n
                }(m.Component);
            (0, He.A)((0, d.Ng)(function(e, t) {
                return {
                    email: e.user.email,
                    user: ft.Ay.endpoints.getUser.select(t.userId)(e).data
                }
            })(fn));
            n(62278);
            var En = n(63952);
            Qt.A.runSteamDiagnostic;
            var An = n(3385),
                gn = n(34985);
            var vn = function(e) {
                    var t = e.cancelFriendRequestLink,
                        n = e.disabled,
                        r = e.friendLink,
                        a = e.friendship,
                        l = e.unfriendLink;
                    if (!e.visible) return null;
                    if (null != a) {
                        if (a.loading) return m.createElement(g.A, {
                            color: "primary",
                            disabled: !0
                        }, m.createElement(x.M2, {
                            icon: An.yy
                        }), "  ...");
                        if (a.isFriend) return m.createElement(g.A, {
                            "aria-label": "Unfriend",
                            color: "primary",
                            onClick: l
                        }, m.createElement(x.M2, {
                            icon: gn.uA,
                            "aria-hidden": "true"
                        }), " Unfriend");
                        if (a.incomingRequest) return m.createElement(g.A, {
                            "aria-label": "Accept Friend Request",
                            color: "primary",
                            onClick: r
                        }, " ", m.createElement(x.M2, {
                            icon: An.yy,
                            "aria-hidden": "true",
                            color: "success"
                        }), "  Accept Friend Request", " ");
                        if (a.outgoingRequest) return m.createElement(g.A, {
                            "aria-label": "Cancel Friend Request",
                            color: "primary",
                            onClick: t
                        }, m.createElement(x.M2, {
                            icon: An.yy,
                            "aria-hidden": "true"
                        }), "  Cancel Friend Request")
                    }
                    return m.createElement(g.A, {
                        "aria-label": "Add Friend",
                        color: "primary",
                        onClick: r,
                        disabled: n
                    }, m.createElement(x.M2, {
                        icon: An.yy,
                        "aria-hidden": "true"
                    }), " Add Friend")
                },
                bn = n(33031),
                yn = n.n(bn),
                xn = n(73444),
                wn = n(68808),
                kn = n(49822),
                Nn = n(82290),
                Sn = n(21571),
                In = n.n(Sn);

            function Cn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Mn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Cn(Object(n), !0).forEach(function(t) {
                        (0, Y.A)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Tn = function(e) {
                    return (null != e ? e : "").replace("::ffff:", "")
                },
                On = function(e) {
                    return "".concat(e.recorded.format("ddd, MMM DD YYYY, hh:mm:ss a"), " UTC ").concat(e.country, " ").concat(Tn(e.ip))
                };
            const Rn = function(e) {
                var t = e.user,
                    n = t.id,
                    r = t.last_ip,
                    l = t.last_sessions,
                    s = m.useState(""),
                    c = (0, a.A)(s, 2),
                    o = c[0],
                    u = c[1],
                    d = m.useMemo(function() {
                        var e = l.map(function(e) {
                            return Mn(Mn({}, e), {}, {
                                recorded: In().utc(e.recorded)
                            })
                        });
                        return yn()(e, function(e) {
                            return -e.recorded.format("x")
                        }).filter(function(e) {
                            return 0 === o.length || new RegExp(o, "gi").test(On(e))
                        })
                    }, [l, o]),
                    p = function(e) {
                        return m.createElement(g.A, {
                            size: "sm",
                            onClick: (0, Be.Dk)(e),
                            className: "d-flex flex-row",
                            style: {
                                top: 2,
                                position: "relative"
                            }
                        }, m.createElement(x.M2, {
                            icon: J.jP,
                            size: "1x",
                            className: "pe-2",
                            color: "white"
                        }), m.createElement("span", {
                            className: "text-white"
                        }, "ID"))
                    };
                return r ? m.createElement(x.fI, {
                    className: "mx-2 d-flex align-items-center"
                }, p(n), m.createElement(xn.A, {
                    size: "sm"
                }, m.createElement(wn.A, {
                    caret: l.length > 0,
                    disabled: 0 === l.length,
                    className: "ms-2 text-white"
                }, Tn(r)), m.createElement(kn.A, {
                    className: (0, i.AH)({
                        name: "1lkml1x",
                        styles: "background-color:#506070"
                    })
                }, m.createElement(Nn.A, {
                    header: !0,
                    className: "text-primary d-flex align-items-center"
                }, "Last IPs", m.createElement("input", {
                    type: "text",
                    placeholder: "Filter by Time, Country or IP",
                    value: o,
                    onChange: function(e) {
                        var t = e.target,
                            n = (void 0 === t ? "" : t).value;
                        u(n)
                    },
                    className: "ms-2 flex-grow-1 px-2 py-1 ".concat((0, i.AH)({
                        name: "15jqor",
                        styles: "border-radius:4px;border:none"
                    }))
                })), m.createElement(Nn.A, {
                    header: !0,
                    className: "text-primary d-flex align-items-center"
                }, m.createElement("div", {
                    className: (0, i.AH)({
                        name: "v98gpl",
                        styles: "min-width:325px"
                    })
                }, "Time"), m.createElement("div", {
                    className: (0, i.AH)({
                        name: "1edorjh",
                        styles: "min-width:80px"
                    })
                }, "Country"), m.createElement("div", null, "IP")), d.map(function(e) {
                    var t, n = Tn(e.ip),
                        r = e.recorded.format("ddd, MMM DD YYYY, hh:mm:ss a [UTC]");
                    return m.createElement(Nn.A, {
                        key: "session-".concat(e.recorded.format("x")),
                        title: e.recorded.fromNow(),
                        onClick: (0, Be.Dk)(On(e)),
                        className: (0, i.AH)({
                            name: "3jalo3",
                            styles: "color:white;display:flex;align-items:center;&:hover{color:var(--bs-gray-dark)!important;}"
                        })
                    }, m.createElement(x.M2, {
                        icon: J.jP,
                        size: "sm",
                        className: "pe-2 ".concat((0, i.AH)({
                            name: "1x3sxtc",
                            styles: "width:20px"
                        }))
                    }), m.createElement("div", {
                        className: "text-monospace"
                    }, r), m.createElement("div", {
                        className: "ps-3 ".concat((0, i.AH)({
                            name: "1edorjh",
                            styles: "min-width:80px"
                        }))
                    }, null !== (t = null == e ? void 0 : e.country) && void 0 !== t ? t : ""), m.createElement("code", {
                        className: "ps-3 ".concat((0, i.AH)({
                            name: "bqbhx",
                            styles: "min-width:130px"
                        }))
                    }, n))
                })))) : m.createElement(x.fI, {
                    className: "mx-2 align-items-center"
                }, p(n))
            };

            function Un(e) {
                var t = Dn();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Dn() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Dn = function() {
                    return !!e
                })()
            }
            n.dn(Rn);
            var _n = et.deleteUserSubscription,
                Fn = {
                    Admin: ["hour", "day", "week", "month", "year"],
                    Steam: ["day", "week", "month", "year"]
                },
                Pn = ["Admin", "Steam"],
                jn = ["Admin", "Steam"],
                qn = ["Oculus", "Steam"],
                zn = function(e) {
                    (0, z.A)(o, e);
                    var t, n, a, l, s = Un(o);

                    function o(e) {
                        var t;
                        return (0, P.A)(this, o), (t = s.call(this, e)).state = {
                            transactionId: e.transactionId,
                            transactionType: e.transactionType,
                            expiry: "Steam" === e.transactionType ? "1_day" : "1_hour",
                            isActive: e.active
                        }, t.addTime = t.addTime.bind((0, q.A)(t)), t.clearAddSubModal = t.clearAddSubModal.bind((0, q.A)(t)), t.clearDeleteModal = t.clearDeleteModal.bind((0, q.A)(t)), t.changeTimespan = t.changeTimespan.bind((0, q.A)(t)), t.deleteSubscription = t.deleteSubscription.bind((0, q.A)(t)), t
                    }
                    return (0, j.A)(o, [{
                        key: "addTime",
                        value: (l = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return parseInt(this.state.expiry.split("_")[0]), this.state.expiry.split("_")[1], e.next = 4, this.props.dispatch((0, O.RS)({
                                            userId: this.props.user.id
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "deleteSubscription",
                        value: (a = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch(_n({
                                            transactionId: this.state.transactionId,
                                            store: this.props.transactionType.toLowerCase()
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "clearAddSubModal",
                        value: (n = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch((0, O.T5)());
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "clearDeleteModal",
                        value: (t = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch((0, O.d_)());
                                    case 2:
                                        this.props.refresh && this.props.refresh();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "changeTimespan",
                        value: function(e) {
                            this.setState({
                                expiry: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.transactionId,
                                n = e.complete,
                                r = e.statusCode,
                                a = e.error,
                                l = Fn[this.state.transactionType],
                                s = qn.includes(this.props.transactionType) && this.props.isGift,
                                c = "Admin" === this.props.transactionType ? "Remove Subscription" : "Cancel Subscription";
                            s && (c = "Delete Gift Subscription");
                            var o = "" !== this.state.timespan && "" !== this.state.transactionId;
                            return m.createElement("div", {
                                className: (0, i.AH)({
                                    name: "1yyg8et",
                                    styles: ".modal-button{max-width:13em;margin-top:0.5em;}button{width:100%;}"
                                })
                            }, this.state.isActive && Pn.includes(this.state.transactionType) && m.createElement(Xe.A, {
                                className: "modal-button",
                                icon: ie.a$,
                                title: "Add Time To Subscription",
                                clearModal: this.clearAddSubModal
                            }, n && m.createElement("div", null, "Time Successfully Added ", m.createElement(x.M2, {
                                icon: Ge.Wc
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r), " oh no"), m.createElement("pre", null, m.createElement("code", null, a))), !n && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", t), m.createElement("br", null), m.createElement(_t, {
                                timeOptions: l,
                                onChange: this.changeTimespan
                            }), m.createElement("br", null), m.createElement(g.A, {
                                onClick: this.addTime,
                                disabled: !o
                            }, "Extend"))), this.state.isActive && "canceled" !== this.props.status && (jn.includes(this.props.transactionType) || s) && m.createElement(Xe.A, {
                                className: "modal-button",
                                icon: se.GR,
                                title: c,
                                clearModal: this.clearDeleteModal
                            }, n && m.createElement("div", null, "Subscription Successfully Terminated ", m.createElement(x.M2, {
                                icon: Ge.Wc
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r)), m.createElement("pre", null, m.createElement("code", null, a))), !n && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", t), m.createElement("br", null), m.createElement("div", null, "Are you sure you want to delete this ", this.state.transactionType, " ", s ? "Gift" : "", " subscription?"), m.createElement("br", null), m.createElement(g.A, {
                                onClick: this.deleteSubscription,
                                disabled: !o
                            }, "Delete"))))
                        }
                    }]), o
                }(m.Component);
            (0, d.Ng)(function(e) {
                return {
                    user: e.user.databaseUser,
                    subscriptions: e.user.subscriptions,
                    statusCode: e.user.updatedSubscriptionStatusCode,
                    error: e.user.updatedSubscriptionError,
                    complete: e.user.updatedSubscription
                }
            })(zn);

            function Bn(e) {
                var t = Ln();
                return function() {
                    var n, r = (0, L.A)(e);
                    if (t) {
                        var a = (0, L.A)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, B.A)(this, n)
                }
            }

            function Ln() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (Ln = function() {
                    return !!e
                })()
            }
            var Yn = function(e) {
                (0, z.A)(a, e);
                var t, n = Bn(a);

                function a(e) {
                    var t;
                    return (0, P.A)(this, a), (t = n.call(this, e)).refreshSubscriptions = t.refreshSubscriptions.bind((0, q.A)(t)), t
                }
                return (0, j.A)(a, [{
                    key: "refreshSubscriptions",
                    value: (t = (0, r.A)(c().mark(function e() {
                        return c().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.props.dispatch((0, O.RS)({
                                        userId: this.props.user.id
                                    }));
                                case 1:
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
                        var e = this.props,
                            t = e.subscriptions,
                            n = e.loadingState,
                            r = (0, dt.A)(t).sort(function(e, t) {
                                return t.created_at === e.created_at ? 0 : t.created_at < e.created_at ? -1 : 1
                            });
                        return n.loading ? m.createElement(x.fy, {
                            width: "100%",
                            height: "200px",
                            className: "my-2"
                        }) : m.createElement(Ye.A, null, m.createElement(f.A, null, m.createElement("h4", null, "Subscriptions")), 0 === r.length ? m.createElement(f.A, null, m.createElement(E.A, null, "None.")) : r.map(function(e) {
                            var t = e.store,
                                n = e.transactionId;
                            e.id, e.description, e.active, e.status, e.expires, e.created_at, e.isGift, e.giftedBy, e.steamItemId, e.amount, "".concat(t, ":").concat(n)
                        }))
                    }
                }]), a
            }(m.Component);
            (0, d.Ng)(function(e) {
                return {
                    user: e.user.databaseUser,
                    subscriptions: e.user.subscriptions,
                    loadingState: e.user.loadSubscriptions
                }
            })(Yn);
            n(88771);
            var Hn = n(46078);
            n(65950), n(54445), n(55);
            Qt.A.forceLogout, Qt.A.remove2fa, Qt.A.updateElasticsearchUser, Qt.A.cancelAccountDeletion;
            const Gn = (0, d.Ng)(function(e) {
                return {
                    loadedUserId: !e.currentUser.fetching && e.currentUser.databaseUser.id,
                    isUserHiddenByAdmin: e.user.isHiddenByAdmin,
                    isUserMod: e.user.isMod,
                    isSelf: e.currentUser.databaseUser.id === e.user.databaseUser.id,
                    currentUser: e.currentUser.databaseUser,
                    user: e.user.databaseUser,
                    blocks: e.user.blocks,
                    emailAddresses: e.user.emailAddresses,
                    ip: e.user.ip,
                    aliases: e.user.aliases,
                    error: e.user.error,
                    moderation: e.user.moderation,
                    statusCode: e.user.statusCode,
                    loading: e.user.loading,
                    scrolling: e.user.scrolling,
                    endOfAliases: e.user.endOfAliases,
                    worldInfo: e.user.worldInfo,
                    isLoaded: e.user.isLoaded,
                    friendRequests: e.user.friendRequests
                }
            })(function(e) {
                e.aliases;
                var t = e.dispatch,
                    n = (e.emailAddresses, e.endOfResults, e.isSelf),
                    l = e.isUserHiddenByAdmin,
                    s = e.isUserMod,
                    o = e.moderation,
                    u = (e.scrolling, e.friendRequests, (0, p.Zp)()),
                    d = (0, p.g)().userId,
                    g = (0, ft.vf)(d),
                    b = g.data,
                    w = void 0 === b ? {} : b,
                    N = g.isLoading,
                    S = (g.refetch, (0, m.useState)(!1)),
                    I = (0, a.A)(S, 2),
                    C = (I[0], I[1]),
                    M = (0, Hn.qd)(d),
                    T = M.data,
                    R = M.refetch,
                    U = ((0, y.G)().data, w.accountDeletionDate, w.displayName),
                    D = (w.pastDisplayNames, w.tags, w.twoFactorAuthEnabled, w.username),
                    _ = (0, ht.Om)(),
                    F = !1,
                    P = void 0 !== (null == w ? void 0 : w.displayName),
                    j = (0, m.useState)(e.error),
                    q = (0, a.A)(j, 2),
                    z = q[0],
                    B = q[1],
                    L = (0, m.useState)(!1),
                    Y = (0, a.A)(L, 2),
                    H = Y[0],
                    G = Y[1],
                    W = (0, m.useState)(function() {
                        return function() {}
                    }),
                    V = (0, a.A)(W, 2),
                    $ = V[0],
                    Q = V[1],
                    J = (0, m.useState)(""),
                    K = (0, a.A)(J, 2),
                    Z = K[0],
                    X = K[1],
                    ee = (0, m.useState)(""),
                    te = (0, a.A)(ee, 2),
                    ne = te[0],
                    re = te[1],
                    ae = (0, m.useState)(!1),
                    se = (0, a.A)(ae, 2),
                    ce = (se[0], se[1], (0, ht.a$)().user),
                    ie = function() {
                        var e = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t((0, O.YW)({
                                            userId: d
                                        }));
                                    case 3:
                                        e.next = 14;
                                        break;
                                    case 5:
                                        if (e.prev = 5, e.t0 = e.catch(0), 404 !== e.t0.response.status) {
                                            e.next = 11;
                                            break
                                        }
                                        return B("User not found"), console.error(e.t0), e.abrupt("return");
                                    case 11:
                                        return B("Problem with loading the user"), console.error(e.t0), e.abrupt("return");
                                    case 14:
                                        e.next = 31;
                                        break;
                                    case 17:
                                        return e.next = 19, t((0, O.K6)({
                                            userId: d
                                        }));
                                    case 19:
                                        return e.next = 21, t((0, O.Jn)({
                                            userId: d
                                        }));
                                    case 21:
                                        return e.prev = 21, e.next = 24, t((0, O.RS)({
                                            userId: d
                                        }));
                                    case 24:
                                        e.next = 29;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t1 = e.catch(21), console.error("there was an error loading this user's subscriptions");
                                    case 29:
                                        return e.next = 31, t((0, O.Rd)({
                                            userId: d
                                        }));
                                    case 31:
                                        return e.next = 33, R({
                                            userId: d
                                        });
                                    case 33:
                                        C(!1);
                                    case 34:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 5],
                                [21, 26]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, m.useEffect)(function() {
                    void 0 === d ? u("/home/user/".concat(ce.id), {
                        replace: !0
                    }) : (C(!0), ie())
                }, [d]), (0, m.useEffect)(function() {
                    var e;
                    document.title = "".concat(null !== (e = null == w ? void 0 : w.displayName) && void 0 !== e ? e : "User", " - VRChat")
                }, [w]);
                var oe = function() {
                        var e = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, O.GU)({
                                            userId: d
                                        }));
                                    case 2:
                                        R({
                                            userId: d
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ue = function() {
                        var e = (0, r.A)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, O.eY)({
                                            userId: d
                                        }));
                                    case 2:
                                        R({
                                            userId: d
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!P) return m.createElement(k.A, {
                    loading: N
                }, m.createElement(v.A, null, "User"), m.createElement(Wn, null, m.createElement("span", null, "This user doesn't exist 🥺")));
                window.apiUrl("/a/admin/user/".concat(w.id));
                return m.createElement(k.A, {
                    loading: N
                }, m.createElement(v.A, null, null != U ? U : "User"), m.createElement("div", {
                    className: "old-layout ".concat((0, i.AH)({
                        name: "at64zg",
                        styles: "& ul{list-style-type:none;padding:0;margin:0;}& .higher-element{z-index:1;position:relative;}"
                    }))
                }, function(e) {
                    var t = e.errorAlert,
                        n = e.moderation,
                        r = e.user;
                    return null !== t && "" !== t ? m.createElement(h.A, {
                        color: "warning"
                    }, t) : n.clear ? m.createElement(h.A, {
                        color: "success"
                    }, "All moderation(s) against ", null == r ? void 0 : r.displayName, " have been cleared") : null
                }({
                    errorAlert: z,
                    moderation: o,
                    user: w
                }), m.createElement(x.uo, {
                    bodyText: ne,
                    cancelCallback: function() {
                        return G(!1)
                    },
                    confirmCallback: $,
                    headerText: Z,
                    isOpen: H
                }), F, F, P && m.createElement(f.A, {
                    className: "mb-4"
                }, m.createElement(E.A, {
                    md: "12"
                }, m.createElement("h2", null, U), m.createElement("h3", {
                    className: "subheader"
                }, m.createElement(f.A, {
                    className: "mx-0align-items-center"
                }, D && m.createElement(E.A, {
                    md: 5
                }, D), m.createElement(E.A, {
                    md: 7
                }, m.createElement("div", {
                    className: "d-flex flex-row align-items-center"
                }, F)))))), m.createElement(f.A, {
                    className: "mb-4 higher-element"
                }, m.createElement(E.A, {
                    md: "9",
                    style: {
                        paddingRight: "0"
                    }
                }, m.createElement(le.A, {
                    userId: d,
                    showLocation: !0,
                    size: "huge",
                    isUserHidden: l
                })), m.createElement(E.A, {
                    md: "3",
                    className: (0, i.AH)({
                        name: "rqhlr5",
                        styles: "padding-left:1em;.btn-group-vertical .btn:first-of-type{border-radius:5px 5px 0 0;}.btn-group-vertical .btn:last-of-type{border-radius:0 0 5px 5px;}.btn{text-align:left;}.fa{width:1.5em;}"
                    })
                }, m.createElement(p.BV, null, m.createElement(p.qh, {
                    exact: !0,
                    path: "/",
                    element: m.createElement(A.A, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100",
                        "aria-label": "User Action Group"
                    }, m.createElement(vn, {
                        visible: !n,
                        friendship: T,
                        friendLink: oe,
                        cancelFriendRequestLink: ue,
                        unfriendLink: function() {
                            Q(function() {
                                return (0, r.A)(c().mark(function e() {
                                    return c().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, t((0, O.zb)({
                                                    userId: d
                                                }));
                                            case 3:
                                                t(Hn.Ay.util.updateQueryData("getFriendStatus", d, function(e) {
                                                    e.isFriend = !1, e.incomingRequest = !1, e.outgoingRequest = !1
                                                })), e.next = 9;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), console.error(e.t0);
                                            case 9:
                                                return G(!1), e.next = 12, new Promise(function(e) {
                                                    return setTimeout(e, 1e4)
                                                });
                                            case 12:
                                                ie();
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, null, [
                                        [0, 6]
                                    ])
                                }))
                            }), X("Remove Friend"), re("Are you sure you want to remove ".concat(U, " as your friend?")), G(!0)
                        },
                        disabled: !w.id
                    }), F, m.createElement(En.A, {
                        visible: !_ && !n && !s,
                        showText: !0,
                        userId: w.id
                    }), m.createElement(It.A, {
                        visible: !_ && !n && !s,
                        showText: !0,
                        userId: w.id
                    }))
                })))), F, m.createElement(f.A, null, F, F, m.createElement(E.A, {
                    md: "12"
                }, m.createElement(vt, null)), F, F, F, F, F, F, F, F, F, F, F, F, F)))
            });
            var Wn = (0, l.A)("div", {
                target: "e1pj8mi20"
            })({
                name: "1nxag3m",
                styles: "padding:25px;margin:25px;font-size:large;text-align:center;span{background-color:rgba(0, 0, 0, 0.15);padding:25px;}"
            })
        },
        46708(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(58168),
                a = n(5556),
                l = n.n(a),
                s = n(96540),
                c = n(15033),
                i = function(e) {
                    var t;
                    return s.createElement(c.mI, (0, r.A)({
                        fieldsList: ["occupants", "visits", "favorites", "updated_at"],
                        contentType: "world",
                        data: null !== (t = e.world) && void 0 !== t ? t : e.data
                    }, e))
                };
            i.propTypes = {
                world: l().shape({
                    id: l().string,
                    name: l().string,
                    releaseStatus: l().oneOf(["public", "private"]),
                    occupants: l().number,
                    favorites: l().number,
                    visits: l().number,
                    updated_at: l().string,
                    created_at: l().string,
                    tags: l().arrayOf(l().string),
                    unityPackages: l().arrayOf(l().shape({
                        platform: l().string
                    }))
                }).isRequired,
                fieldsList: l().arrayOf(l().string)
            };
            const o = i
        },
        71602(e, t, n) {
            n.d(t, {
                HV: () => s
            });
            var r = n(89483),
                a = {};
            var l = r.m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            adminChangeDisplayName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.displayName,
                                        r = e.lock;
                                    return {
                                        url: a.forcename,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: n,
                                            lock: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "User",
                                        id: n.userId
                                    }]
                                }
                            }),
                            adminChangeUserName: e.mutation({
                                query: function(e) {
                                    var t = e.userId,
                                        n = e.displayName,
                                        r = e.username;
                                    return {
                                        url: a.forceUsername,
                                        method: "PUT",
                                        body: {
                                            userid: t,
                                            displayname: n,
                                            username: r
                                        }
                                    }
                                },
                                invalidatesTags: function(e, t, n) {
                                    return [{
                                        type: "User",
                                        id: n.userId
                                    }]
                                }
                            }),
                            jsonEndpoint: e.query({
                                query: function(e) {
                                    return {
                                        url: e.queryURL
                                    }
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["GlobalConfig"]
                }),
                s = (l.useAdminChangeDisplayNameMutation, l.useAdminChangeUserNameMutation, l.useJsonEndpointQuery)
        }
    }
]);
//# sourceMappingURL=34fe1c9b830fab2cb7f2d74f60ff4239ea9beb5e82d3bc443bd6bedf2948dafd.js.map