"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5039], {
        8860: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(87462),
                a = n(45987),
                l = n(59545),
                s = n(68055),
                c = n(67294),
                i = n(86646),
                o = ["ok", "size"];
            const u = function(e) {
                var t = e.ok,
                    n = void 0 === t ? null : t,
                    u = e.size,
                    m = void 0 === u ? "2x" : u,
                    d = (0, a.Z)(e, o);
                return null === n ? null : n ? c.createElement(i.Z, (0, r.Z)({
                    icon: s.LE,
                    size: m,
                    className: "text-success"
                }, d)) : c.createElement(i.Z, (0, r.Z)({
                    icon: l.NB,
                    size: m,
                    className: "text-warning"
                }, d))
            }
        },
        81362: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(67294),
                a = n(53637),
                l = n(95305);
            const s = function(e) {
                var t = e.error,
                    n = e.statusCode;
                null == t && (t = "Something bad happened!"), "string" != typeof t && (console.error(t), t = t.message);
                var s = ["😭", "😿", "🙀", "😢", "🐸", "💔", "😖", "😣", "🐉", "🐦", "🤒", "🤕"];
                return r.createElement(a.Z, null, r.createElement(l.Z, {
                    xs: {
                        size: 4,
                        offset: 4
                    }
                }, r.createElement("h2", null, "VRChat"), r.createElement("p", null, "An error has occurred. To continue: "), r.createElement("p", null, "Press the F5 to refresh the website, or "), r.createElement("p", null, "Press the back button to leave the website, or "), r.createElement("p", null, "Check our ", r.createElement("a", {
                    href: "https://twitter.com/VRChat"
                }, "twitter"), "?", " "), r.createElement("p", null, "If issues persist, please close all open tabs of the website and try again! (", ["please don't hate us", "we're super sorry", "oops", "uh-oh", "whoopsie", "GAME-OVER!", "you hate to see it happen", "aw jeez", "not like this", "where did it all go wrong?", "we're trying our best", "no cap, on god", "we still love you!!"][Math.floor(Math.random() * s.length)], "! ", s[Math.floor(Math.random() * s.length)], ")"), r.createElement("code", null, n, " ", t)))
            }
        },
        49567: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(26778),
                a = n(67294),
                l = n(45697),
                s = n.n(l),
                c = (n(9669), n(39886)),
                i = n(34698),
                o = n(86646),
                u = n(46326),
                m = n(83541),
                d = function(e) {
                    var t = e.query,
                        n = (0, m.Gu)({
                            queryURL: t
                        }),
                        l = n.data,
                        s = n.isFetching,
                        d = n.isSuccess,
                        p = n.isError,
                        h = n.refetch;
                    return a.createElement(c.Z, null, a.createElement("h6", {
                        className: "p-1"
                    }, a.createElement("a", {
                        href: window.apiUrl("/api/1/".concat(t)),
                        target: "_blank",
                        rel: "noreferrer"
                    }, t)), d && a.createElement(u.Z, {
                        src: l
                    }), s && "Loading...", p && "Error loading ".concat(t), a.createElement("hr", null), a.createElement(i.Z, {
                        onClick: function() {
                            return h()
                        },
                        className: "text-white"
                    }, a.createElement(o.Z, {
                        icon: r.XS,
                        color: "white"
                    }), " Refresh"))
                };
            d.propTypes = {
                query: s().string.isRequired
            };
            const p = d
        },
        98185: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(67294),
                a = n(81362),
                l = n(43862);
            const s = function(e) {
                var t = e.reducer,
                    n = e.loading,
                    s = e.loadingList,
                    c = e.error,
                    i = e.statusCode,
                    o = e.children,
                    u = e.className,
                    m = !1;
                return s && s.forEach((function(e) {
                    e && (m = !0)
                })), null != i && 200 !== i && "200" !== i ? r.createElement(a.Z, {
                    error: c,
                    statusCode: i
                }) : null != t && null != t.statusCode && 200 !== t.statusCode && "200" !== t.statusCode ? r.createElement(a.Z, {
                    error: t.error,
                    statusCode: t.statusCode
                }) : c ? r.createElement(a.Z, {
                    error: c
                }) : null != t && t.error ? r.createElement(a.Z, {
                    error: t.error
                }) : n || m || null != t && t.fetching || null != t && t.loading ? r.createElement(l.Z, {
                    className: "tw-mx-auto"
                }) : r.createElement("div", {
                    className: u
                }, o)
            }
        },
        65039: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => dn
            });
            var r = n(15861),
                a = n(54546),
                l = n(4965),
                s = (n(41145), n(47947), n(64687)),
                c = n.n(s),
                i = n(83505),
                o = n(30381),
                u = n.n(o),
                m = n(67294),
                d = n(32981),
                p = n(89250),
                h = n(23138),
                f = n(35773),
                E = n(95305),
                g = n(58877),
                Z = n(34698),
                v = n(85533),
                b = n(17228),
                y = (n(12227), n(17219)),
                x = (n(7826), n(14411)),
                w = n(37599),
                k = (n(20916), n(49567), n(98185)),
                S = n(43862),
                C = (n(18133), n(44483), n(90346), n(45573)),
                N = n(27003),
                I = n(65706),
                R = (n(29449), n(411), n(34984));
            n(88874);
            var U = n(15671),
                T = n(43144),
                M = n(97326),
                A = n(60136),
                D = n(82963),
                O = n(61120),
                P = n(4942),
                _ = n(95337),
                F = n(9669),
                B = n.n(F),
                $ = n(60994),
                q = n(87261),
                z = n(12611),
                L = n(2909),
                j = n(79655),
                G = n(39886);

            function Y(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            const V = function(e) {
                (0, A.Z)(n, e);
                var t = Y(n);

                function n(e) {
                    var a;
                    return (0, U.Z)(this, n), a = t.call(this, e), (0, P.Z)((0, M.Z)(a), "timeout", null), (0, P.Z)((0, M.Z)(a), "copyText", (0, r.Z)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.props.user.id, e.next = 3, navigator.clipboard.writeText(t);
                                case 3:
                                    a.setState({
                                        copied: !0
                                    }), a.timeout = setTimeout((function() {
                                        a.setState({
                                            copied: !1
                                        })
                                    }), 1e3);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))), a.state = {
                        copied: !1
                    }, a
                }
                return (0, T.Z)(n, [{
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
                        return m.createElement(f.Z, {
                            md: "12",
                            className: "mb-2 mx-0"
                        }, m.createElement(G.Z, {
                            className: "w-100",
                            body: !0
                        }, m.createElement(E.Z, {
                            className: "mx-0"
                        }, m.createElement(f.Z, {
                            className: "justify-content-between"
                        }, m.createElement(E.Z, {
                            md: "8",
                            className: "mx-0"
                        }, m.createElement("h4", null, m.createElement(j.rU, {
                            to: "/home/user/".concat(r)
                        }, n, " "))), m.createElement(E.Z, {
                            md: "4",
                            className: "mx-0 justify-content-end d-flex"
                        }, m.createElement(Z.Z, {
                            size: "sm",
                            onClick: this.copyText,
                            className: "text-white",
                            color: this.state.copied ? "success" : "secondary"
                        }, m.createElement(x.$1, {
                            icon: L.kZ,
                            color: "white",
                            className: "me-2"
                        }), this.state.copied ? "Copied" : "Copy ID"))), m.createElement(E.Z, {
                            className: "mx-0 px-3"
                        }, !!t && m.createElement(f.Z, null, "Username: ", t), m.createElement(f.Z, {
                            className: "align-items-center"
                        }, "ID: ", r)))))
                    }
                }]), n
            }(m.Component);

            function W(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var H = function(e) {
                (0, A.Z)(n, e);
                var t = W(n);

                function n(e) {
                    var a;
                    return (0, U.Z)(this, n), a = t.call(this, e), (0, P.Z)((0, M.Z)(a), "loadMoreFriends", (0, r.Z)(c().mark((function e() {
                        var t, n, r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.buildQuery(), a.setState({
                                        loading: !0
                                    }), e.next = 4, B().get(t);
                                case 4:
                                    200 === (n = e.sent).status ? 0 === n.data.length ? setTimeout((function() {
                                        a.setState({
                                            moreFriends: !1,
                                            loading: !1
                                        })
                                    }), 250) : (r = a.state.realFriendCount, n.data.length < a.state.n && (r -= a.state.n - n.data.length), a.setState({
                                        friends: a.state.friends.concat(n.data),
                                        offset: a.state.offset + a.state.n,
                                        realFriendCount: r,
                                        moreFriends: a.state.offset + a.state.n < r
                                    }), setTimeout((function() {
                                        a.setState({
                                            loading: !1
                                        })
                                    }), 250)) : console.error(n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))), (0, P.Z)((0, M.Z)(a), "loadById", function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = "/api/1/users/".concat(t), e.next = 3, B().get(window.apiUrl(n));
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
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), (0, P.Z)((0, M.Z)(a), "toggleCollapse", (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
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
                        }), e)
                    })))), (0, P.Z)((0, M.Z)(a), "handleSearchChange", function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n, r;
                            return c().wrap((function(e) {
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
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), (0, P.Z)((0, M.Z)(a), "handleSearchClick", (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
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
                        }), e)
                    })))), (0, P.Z)((0, M.Z)(a), "searchById", function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a.props.currentUser.friends.find((function(e) {
                                                return e === t
                                            }))) {
                                            e.next = 3;
                                            break
                                        }
                                        return a.setState({
                                            foundFriend: null
                                        }), e.abrupt("return");
                                    case 3:
                                        if (a.state.friends.find((function(e) {
                                                return e.id === t
                                            }))) {
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
                                            foundFriend: a.state.friends.find((function(e) {
                                                return e.id === t
                                            })) || null
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
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
                return (0, T.Z)(n, [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        e.userId !== this.props.userId && this.setState({
                            friends: [],
                            offset: 0,
                            userId: this.props.userId
                        }, (function() {
                            t.loadMoreFriends()
                        }))
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
                            n = this.state.friends.map((function(e) {
                                return m.createElement(V, {
                                    user: e,
                                    key: e.id
                                })
                            }));
                        return this.props.loading ? m.createElement(x.UU, {
                            width: "100%",
                            height: "200px",
                            className: "mt-2 mb-4"
                        }) : t.length > 0 ? m.createElement("div", null, m.createElement("h3", null, m.createElement(Z.Z, {
                            onClick: this.toggleCollapse,
                            color: this.state.collapseOpen ? "primary" : "secondary"
                        }, this.state.collapseOpen && m.createElement(x.$1, {
                            icon: N.uM
                        }), !this.state.collapseOpen && m.createElement(x.$1, {
                            icon: C.Kt
                        })), " ", this.state.title, " [", t.length, "]"), m.createElement(I.Z, {
                            isOpen: this.state.collapseOpen
                        }, m.createElement(E.Z, {
                            className: "px-1"
                        }, m.createElement(f.Z, {
                            className: "mb-2 mx-0"
                        }, m.createElement($.Z, {
                            className: "px-0"
                        }, m.createElement(q.Z, {
                            placeholder: "User ID",
                            value: this.state.search,
                            onChange: this.handleSearchChange
                        }), m.createElement(Z.Z, {
                            onClick: this.handleSearchClick
                        }, m.createElement(x.$1, {
                            icon: _.wn
                        })))), this.state.search.length > 0 && null === this.state.foundFriend && m.createElement(f.Z, {
                            className: "mx-0"
                        }, "UserID ", this.state.search, " is not in the friends list"), this.state.foundFriend && m.createElement(V, {
                            user: this.state.foundFriend
                        }), 0 === this.state.search.length && m.createElement(m.Fragment, null, m.createElement(E.Z, {
                            className: "px-0"
                        }, n), m.createElement(E.Z, {
                            md: "3",
                            className: "text-center px-0"
                        }, m.createElement(z.Z, {
                            onClick: this.loadMoreFriends,
                            loading: this.state.loading,
                            hidden: !this.state.moreFriends,
                            color: "primary"
                        }, "Load More Friends"))))), m.createElement("hr", null)) : m.createElement("div", null)
                    }
                }]), n
            }(m.Component);
            (0, d.$j)((function(e) {
                return {
                    currentUser: e.user.databaseUser,
                    loading: e.user.loading
                }
            }))(H);
            var J = n(47716),
                Q = n(59545),
                K = n(82414),
                X = n(42137),
                ee = n(68055),
                te = n(44814),
                ne = n(20702),
                re = n(27009),
                ae = n(91435),
                le = n(35117),
                se = n(18029),
                ce = n.n(se),
                ie = n(54610),
                oe = n(27484),
                ue = n.n(oe),
                me = n(70178),
                de = n.n(me);
            ue().extend(de());
            var pe = {
                    hardban: "red",
                    ban: "red",
                    banpubliconly: "red",
                    kick: "orange",
                    note: "blue",
                    warn: "yellow",
                    hardNotice: "yellow"
                },
                he = {
                    hardban: le.faBan,
                    ban: le.faBan,
                    banpubliconly: le.faBan,
                    kick: ae.BD,
                    note: re.L4,
                    warn: ne.RL,
                    hardNotice: te.WV
                };
            const fe = function(e) {
                var t = e.moderation,
                    n = e.deleteModeration,
                    r = t.active && ue()(t.expires).isAfter(ue()()) || t.isPermanent;
                return m.createElement(ge, {
                    key: t.id,
                    className: "w-100 mb-1"
                }, m.createElement(G.Z, {
                    className: "w-100"
                }, m.createElement(be, {
                    color: pe[t.type],
                    isActive: r
                }), m.createElement(ie.Z, {
                    className: "p-2 ps-3 d-flex align-items-center"
                }, m.createElement(ge, {
                    className: (0, i.cx)("flex-grow-1", r && "pe-5")
                }, m.createElement(Ee, {
                    className: "flex-grow-1"
                }, m.createElement(ge, {
                    className: "w-100 justify-content-between"
                }, m.createElement(ge, {
                    className: "align-items-center"
                }, m.createElement(x.$1, {
                    icon: he[t.type],
                    className: "pe-2"
                }), m.createElement("div", {
                    "aria-label": "Moderation Type"
                }, ce()(t.type)), m.createElement(Ze, {
                    icon: r ? ee.LE : X.SZ,
                    isActive: r,
                    className: "ps-2 pe-3",
                    title: r ? "Active" : "Inactive"
                }), m.createElement("div", null, "by"), m.createElement(j.rU, {
                    to: "/home/user/".concat(t.moderatorUserId),
                    className: "mx-1",
                    "aria-label": "Moderated By"
                }, t.moderatorDisplayName)), m.createElement(ge, {
                    className: "align-items-center"
                }, m.createElement("div", {
                    title: ue().utc(t.created).format("ddd, MMM DD YYYY, hh:mm:ss a"),
                    className: "pe-1",
                    "aria-label": "Moderated On"
                }, ue().utc(t.created).format("MMM DD YYYY"), " -"), t.isPermanent ? m.createElement("div", null, "Forever") : m.createElement("div", {
                    title: ue().utc(t.expires).format("ddd, MMM DD YYYY, hh:mm:ss a"),
                    className: "pe-2",
                    "aria-label": "Moderation Expires On"
                }, ue().utc(t.expires).format("MMM DD YYYY")))), "N/A" !== t.reason && m.createElement(ge, {
                    className: "align-items-center mt-1"
                }, m.createElement(ge, {
                    className: "me-2 align-items-center"
                }, m.createElement(ve, {
                    icon: K.sq,
                    className: "pe-2"
                }), m.createElement("div", null, "Reason:")), m.createElement(ye, {
                    "aria-label": "Moderation Reason"
                }, t.reason))), r && m.createElement(xe, {
                    onClick: function() {
                        return n(t.id)
                    },
                    title: "Delete Moderation"
                }, m.createElement(x.$1, {
                    icon: Q.NB
                }))))))
            };
            var Ee = (0, l.Z)("div", {
                    target: "exts1av6"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                ge = (0, l.Z)("div", {
                    target: "exts1av5"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                Ze = (0, l.Z)(x.$1, {
                    shouldForwardProp: function(e) {
                        return "isActive" !== e
                    },
                    target: "exts1av4"
                })("color:var(--bs-", (function(e) {
                    return e.isActive ? "success" : "gray"
                }), ");"),
                ve = (0, l.Z)(x.$1, {
                    target: "exts1av3"
                })({
                    name: "xv8zy",
                    styles: "color:var(--bs-gray)"
                }),
                be = (0, l.Z)("div", {
                    target: "exts1av2"
                })("position:absolute;left:0;top:0;width:4px;height:100%;background-color:var(--bs-", (function(e) {
                    return e.color
                }), ");opacity:", (function(e) {
                    return e.isActive ? 1 : .5
                }), ";border-top-left-radius:4px;border-bottom-left-radius:4px;"),
                ye = (0, l.Z)("div", {
                    target: "exts1av1"
                })({
                    name: "1u7pwvo",
                    styles: "font-size:0.9rem"
                }),
                xe = (0, l.Z)("button", {
                    target: "exts1av0"
                })({
                    name: "j7l6bz",
                    styles: "display:flex;align-items:center;justify-content:center;position:absolute;right:0;top:0;width:40px;height:100%;border:none;color:white;border-top-right-radius:4px;border-bottom-right-radius:4px;background-color:var(--secondary);transition:background-color 0.2s ease-in-out;outline:none!important;&:hover{background-color:var(--red);}&:active{background-color:var(--dark);}"
                }),
                we = m.memo((function(e) {
                    var t = e.userId,
                        n = function(e) {
                            var t = (0, d.I0)(),
                                n = (0, d.v9)((function(e) {
                                    return e.moderation.activeModerations
                                })) || [],
                                a = m.useCallback((function() {
                                    t((0, b.m6)({
                                        userId: e
                                    }))
                                }), [e]),
                                l = m.useCallback(function() {
                                    var n = (0, r.Z)(c().mark((function n(r) {
                                        return c().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, t((0, b.bu)({
                                                        userId: e,
                                                        moderationId: r
                                                    }));
                                                case 2:
                                                    return n.next = 4, t((0, b.m6)({
                                                        userId: e
                                                    }));
                                                case 4:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
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
                        h = (0, a.Z)(p, 2),
                        f = h[0],
                        E = h[1],
                        g = m.useRef(0),
                        Z = m.useState(!1),
                        v = (0, a.Z)(Z, 2),
                        y = v[0],
                        x = v[1],
                        k = m.useState(""),
                        C = (0, a.Z)(k, 2),
                        N = C[0],
                        I = C[1];
                    m.useEffect((function() {
                        o()
                    }), [t]), m.useEffect((function() {
                        y && g.current !== s.length && (g.current = s.length, E(s.filter((function(e) {
                            return "votekick" !== e.type
                        }))))
                    }), [y, s]);
                    var R = function() {
                            return x(!y)
                        },
                        U = function(e) {
                            g.current = 0, u(e)
                        },
                        T = m.useMemo((function() {
                            if (!y) return [];
                            if (0 === N.length) return f;
                            var e = new RegExp("");
                            try {
                                e = new RegExp(N, "ig")
                            } catch (e) {
                                console.error("invalid regular expression", e)
                            }
                            return f.filter(function(e) {
                                return function(t) {
                                    return "".concat(t.type, " ").concat(t.moderatorUserId, " ").concat(t.moderatorDisplayName, " ").concat(t.reason, " ").concat(t.created, " ").concat(t.expires, " ").concat(t.active ? "active" : "inactive", " ").concat(t.isPermanent ? "permanent" : "").match(e)
                                }
                            }(e))
                        }), [y, s, f, N]);
                    return i ? m.createElement("div", null, m.createElement(w.Z, {
                        title: "Current Moderations",
                        collapseOpen: y,
                        toggle: R
                    }, m.createElement(S.Z, null))) : m.createElement("div", null, m.createElement(w.Z, {
                        title: "Current Moderations",
                        collapseOpen: y,
                        toggle: R
                    }, m.createElement(q.Z, {
                        placeholder: "Search by Moderator ID / Type / Date / Active state / Reason (supports regex)",
                        value: N,
                        onChange: function(e) {
                            var t = e.target.value;
                            I(void 0 === t ? "" : t)
                        },
                        className: "mb-2"
                    }), !1, y && T.map((function(e) {
                        return m.createElement(fe, {
                            moderation: e,
                            key: e.id,
                            deleteModeration: U
                        })
                    }))))
                }));
            we.displayName = "CurrentModerations";
            var ke = n(23279),
                Se = n.n(ke),
                Ce = (n(74792), n(71002), n(53405)),
                Ne = n(80794),
                Ie = n(96427),
                Re = n(20446),
                Ue = n(65322),
                Te = n(89148);
            n(64358);
            le.faBan, Te.Ek, Ue.UO, Re.Md, Ie.Aq, Ne.yO, Ce.zt;
            var Me = n(75969),
                Ae = n(53637),
                De = n(37549),
                Oe = n(59895),
                Pe = n(47911),
                _e = n(79862),
                Fe = n(35510),
                Be = n(81051),
                $e = n(81780),
                qe = n(33073),
                ze = n(4991),
                Le = n(18436);
            const je = {};

            function Ge(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var Ye = je.deleteUserSubscription,
                Ve = function(e) {
                    (0, A.Z)(n, e);
                    var t = Ge(n);

                    function n(e) {
                        var a;
                        return (0, U.Z)(this, n), a = t.call(this, e), (0, P.Z)((0, M.Z)(a), "deleteSubscription", (function(e) {
                            return (0, r.Z)(c().mark((function t() {
                                return c().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, a.props.dispatch(Ye({
                                                transactionId: e,
                                                store: "steam"
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        })), (0, P.Z)((0, M.Z)(a), "clearDeleteModal", (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a.props.dispatch((0, R.wd)());
                                    case 2:
                                        a.props.refresh && a.props.refresh();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), a.state = {
                            activeTab: "1"
                        }, a
                    }
                    return (0, T.Z)(n, [{
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
                                g = n.targetUserId,
                                v = n.steam,
                                b = n.agreement,
                                y = n.sandbox,
                                w = n.error,
                                k = n.log;
                            return "failed" === d || "expired" === d ? null : m.createElement("div", null, m.createElement(G.Z, {
                                className: "m-3 shadow-lg steam-card",
                                style: {
                                    width: "18rem"
                                }
                            }, m.createElement(Pe.Z, {
                                top: !0,
                                className: "mt-4 mb-1",
                                src: "https://assets.vrchat.com/misc/steam_logo.svg"
                            }), m.createElement(ie.Z, {
                                className: "p-3"
                            }, m.createElement(_e.Z, {
                                className: "mb-3",
                                tabs: !0
                            }, m.createElement(Fe.Z, null, m.createElement(Be.Z, {
                                className: (0, i.cx)({
                                    active: "1" === this.state.activeTab
                                }),
                                onClick: function() {
                                    return t = "1", void e.setState({
                                        activeTab: t
                                    });
                                    var t
                                }
                            }, "Subscription")), !1, !1), m.createElement($e.Z, {
                                activeTab: this.state.activeTab
                            }, m.createElement(qe.Z, {
                                tabId: "1"
                            }, m.createElement("h6", null, " ", h && m.createElement(x.$1, {
                                icon: Me.Cl
                            }), " ", p.description), m.createElement(f.Z, null, m.createElement(E.Z, null, "Status:"), m.createElement(E.Z, null, " ", d)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Period:"), m.createElement(E.Z, null, p.period)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Price:"), m.createElement(E.Z, null, "$ ", p.amount / 100, " USD")), h && m.createElement("div", {
                                className: "mt-2"
                            }, m.createElement("br", null), m.createElement("h5", null, " Gift Recipient "), m.createElement(f.Z, null, m.createElement(E.Z, null, m.createElement(J.Z, {
                                userId: g,
                                size: "wide"
                            }))))), m.createElement(qe.Z, {
                                tabId: "2"
                            }, m.createElement("div", null, m.createElement(f.Z, null, m.createElement(E.Z, null, m.createElement("small", null, o))), m.createElement("br", null), m.createElement("h6", null, " Steam Agreement Info"), y && m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "Sandbox"), m.createElement(E.Z, null, m.createElement(x.$1, {
                                icon: ee.LE
                            }))), m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "ItemId:"), m.createElement(E.Z, null, p.steamItemId)), m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "Steam ID:"), m.createElement(E.Z, null, v.steamId)), m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "Order ID:"), m.createElement(E.Z, null, v.orderId)), m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "TransID:"), m.createElement(E.Z, null, v.transId)), w && m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "4"
                            }, "Error:"), m.createElement(E.Z, null, w))), b && m.createElement("div", null, m.createElement("br", null), m.createElement("h6", null, " Steam Agreement Info"), m.createElement(f.Z, null, m.createElement(E.Z, null, "agreementId:"), m.createElement(E.Z, null, b.agreementId)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Steam Status:"), m.createElement(E.Z, null, b.status)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Subscribed Since:"), m.createElement(E.Z, null, c(b.timeCreated))), m.createElement(f.Z, null, m.createElement(E.Z, null, "Start Date:"), m.createElement(E.Z, null, c(b.startDate))), m.createElement(f.Z, null, m.createElement(E.Z, null, "Last Payment:"), m.createElement(E.Z, null, c(b.lastPayment))), m.createElement(f.Z, null, m.createElement(E.Z, null, "Next Payment:"), m.createElement(E.Z, null, c(b.nextPayment))), m.createElement(f.Z, null, m.createElement(E.Z, null, "Failed Payments:"), m.createElement(E.Z, null, b.failedAttempts)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Unpaid Balance:"), m.createElement(E.Z, null, " ", b.outstanding)), m.createElement("br", null)), "chargeback" === d && m.createElement("div", {
                                className: "mt-3"
                            }, m.createElement("h6", null, "Actions"), m.createElement(f.Z, null, m.createElement(E.Z, null, m.createElement(Le.Z, {
                                title: "Clear Chargeback",
                                clearModal: this.clearDeleteModal,
                                outline: !0,
                                color: "warning",
                                buttonClassName: "w-100"
                            }, l && m.createElement("div", null, "Chargeback Cleared ", m.createElement(x.$1, {
                                icon: Oe.u8
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, s)), m.createElement("pre", null, m.createElement("code", null, a))), !l && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", o), m.createElement("br", null), m.createElement("div", null, "Are you sure you want to fail this Steam transaction? Doing so will enable the user to make new purchases."), m.createElement("br", null), m.createElement(Z.Z, {
                                onClick: this.deleteSubscription(o)
                            }, "Confirm Chargeback Clear"))))))), m.createElement(qe.Z, {
                                tabId: "3"
                            }, m.createElement("div", null, m.createElement("h6", null, "Logs And Payment History "), m.createElement("br", null), k && m.createElement(ze.Z, {
                                borderless: !0,
                                striped: !0,
                                size: "sm"
                            }, m.createElement("thead", null, m.createElement("tr", null, m.createElement("th", null, "status"), m.createElement("th", null, "dateTime"))), m.createElement("tbody", null, k.map((function(e, t) {
                                return function(e, t, n) {
                                    var r = "";
                                    return e.agreement ? e.message.includes("status and agreement change") ? r = e.status : e.agreement.failedAttempts && e.agreement.failedAttempts > 0 ? r = "failed payment" : c(e.agreement.lastPayment) === c(e.dateTime) && (r = "recurred") : r = e.status || e.message, r ? m.createElement("tr", {
                                        key: "".concat(t, "_log_").concat(n)
                                    }, m.createElement("td", null, r), m.createElement("td", null, c(e.dateTime))) : null
                                }(e, r, t)
                            }))))))))))
                        }
                    }]), n
                }(m.Component);
            const We = (0, d.$j)((function(e) {
                return {
                    user: e.user.databaseUser,
                    error: e.user.transactions.error,
                    statusCode: e.user.transactions.statusCode,
                    loading: e.user.transactions.loading,
                    updateError: e.user.updatedSubscriptionError,
                    complete: e.user.updatedSubscription
                }
            }))(Ve);
            const He = function(e) {
                var t = e.transaction,
                    n = (0, m.useState)("1"),
                    r = (0, a.Z)(n, 2),
                    l = r[0],
                    s = r[1],
                    c = function(e) {
                        return "NIL" === e ? "None" : u()(e).format("ll")
                    },
                    o = t.id,
                    d = t.status,
                    p = (t.ip, t.country, t.updated_at, t.created_at, t.isGift),
                    h = t.targetUserId,
                    g = t.subscription,
                    Z = t.oculus,
                    v = t.log;
                return m.createElement("div", null, m.createElement(G.Z, {
                    className: "m-3 shadow-lg oculus-card",
                    style: {
                        width: "18rem"
                    }
                }, m.createElement(Pe.Z, {
                    top: !0,
                    className: "ms-3 oculus-img",
                    src: "https://assets.vrchat.com/misc/oculus-logo.png"
                }), m.createElement(ie.Z, {
                    className: "p-3"
                }, m.createElement(_e.Z, {
                    className: "mb-3",
                    tabs: !0
                }, m.createElement(Fe.Z, null, m.createElement(Be.Z, {
                    className: (0, i.cx)({
                        active: "1" === l
                    }),
                    onClick: function() {
                        return s("1")
                    }
                }, "Subscription")), !1, !1), m.createElement($e.Z, {
                    activeTab: l
                }, m.createElement(qe.Z, {
                    tabId: "1"
                }, m.createElement("h6", null, " ", p && m.createElement(x.$1, {
                    icon: Me.Cl
                }), " ", g.description), m.createElement(f.Z, null, m.createElement(E.Z, null, "Status:"), m.createElement(E.Z, {
                    className: "expired" === d && "text-warning"
                }, " ", d)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Period:"), m.createElement(E.Z, null, g.period)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Price:"), m.createElement(E.Z, null, "$ ", g.amount / 100, " USD")), m.createElement("br", null), m.createElement(f.Z, null, m.createElement(E.Z, null, "Starts"), m.createElement(E.Z, null, c(Z.period_start_time))), m.createElement(f.Z, null, m.createElement(E.Z, null, "Ends"), m.createElement(E.Z, null, c(Z.period_end_time))), !p && Z.next_renewal_time && m.createElement(f.Z, null, m.createElement(E.Z, null, "Next Renewal"), m.createElement(E.Z, null, c(Z.next_renewal_time))), !p && Z.cancellation_time && m.createElement(f.Z, null, m.createElement(E.Z, null, "Canceled"), m.createElement(E.Z, null, c(Z.cancellation_time))), p && m.createElement("div", {
                    className: "mt-2"
                }, m.createElement("br", null), m.createElement("h5", null, " Gift Recipient "), m.createElement(f.Z, null, m.createElement(E.Z, null, m.createElement(J.Z, {
                    userId: h,
                    size: "wide"
                }))))), m.createElement(qe.Z, {
                    tabId: "2"
                }, m.createElement("div", null, m.createElement(f.Z, null, m.createElement(E.Z, null, m.createElement("small", null, o))), m.createElement("br", null), m.createElement("h6", null, " Oculus Info"), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Sku:"), m.createElement(E.Z, null, Z.sku)), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Owner ID:"), m.createElement(E.Z, null, Z.owner.id)), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Is Active"), m.createElement(E.Z, null, String(Z.is_active))), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Is Trial"), m.createElement(E.Z, null, String(Z.is_trial))), m.createElement("br", null), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Starts"), m.createElement(E.Z, null, c(Z.period_start_time))), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Ends"), m.createElement(E.Z, null, c(Z.period_end_time))), m.createElement(f.Z, null, m.createElement(E.Z, {
                    xs: "4"
                }, "Canceled"), m.createElement(E.Z, null, c(Z.period_start_time))))), m.createElement(qe.Z, {
                    tabId: "3"
                }, m.createElement("div", null, m.createElement("h6", null, "Logs And Payment History "), m.createElement("br", null), v && m.createElement(ze.Z, {
                    borderless: !0,
                    striped: !0,
                    size: "sm"
                }, m.createElement("thead", null, m.createElement("tr", null, m.createElement("th", null, "status"), m.createElement("th", null, "isActive"), m.createElement("th", null, "endTime"))), m.createElement("tbody", null, v.map((function(e, t) {
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
                }))))))))))
            };
            const Je = function(e) {
                var t = e.transaction,
                    n = (0, m.useState)("1"),
                    r = (0, a.Z)(n, 2),
                    l = r[0],
                    s = r[1],
                    c = (t.id, t.status, t.ip, t.country, t.expiry),
                    o = t.subscription;
                t.adminUserId;
                return m.createElement("div", null, m.createElement(G.Z, {
                    className: "m-3 shadow-lg",
                    style: {
                        width: "18rem"
                    }
                }, m.createElement(Pe.Z, {
                    top: !0,
                    className: "ms-3 vrchat-img",
                    src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-background.png"
                }), m.createElement(ie.Z, {
                    className: "p-3"
                }, m.createElement(_e.Z, {
                    className: "mb-3",
                    tabs: !0
                }, m.createElement(Fe.Z, null, m.createElement(Be.Z, {
                    className: (0, i.cx)({
                        active: "1" === l
                    }),
                    onClick: function() {
                        return s("1")
                    }
                }, "Subscription"))), m.createElement($e.Z, {
                    activeTab: l
                }, m.createElement(qe.Z, {
                    tabId: "1"
                }, m.createElement("h6", null, " ", o.description), m.createElement(f.Z, null, m.createElement(E.Z, null, "Period:"), m.createElement(E.Z, null, o.period)), m.createElement(f.Z, null, m.createElement(E.Z, null, "Price:"), m.createElement(E.Z, null, "$ ", o.amount / 100, " USD")), m.createElement("br", null), m.createElement(f.Z, null, m.createElement(E.Z, null, "Expires:"), m.createElement(E.Z, null, u()(c).fromNow())))))))
            };

            function Qe(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var Ke = je.loadAdminTransactions,
                Xe = function(e) {
                    (0, A.Z)(n, e);
                    var t = Qe(n);

                    function n(e) {
                        var r;
                        return (0, U.Z)(this, n), (r = t.call(this, e)).state = {
                            isCollapsed: !1,
                            activeTab: "1"
                        }, r
                    }
                    return (0, T.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e;
                            null !== (e = this.props.router.params) && void 0 !== e && e.userId && (this.props.dispatch((0, R.sW)({
                                userId: this.props.router.params.userId
                            })), this.props.dispatch((0, R.sU)({
                                userId: this.props.router.params.userId,
                                includeOutgoingGifts: !0
                            })), this.props.dispatch(Ke({
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
                                o = (this.props.subscriptions || []).map((function(e) {
                                    return e.transactionId
                                })),
                                u = r && (null === (e = Object.keys(r)) || void 0 === e ? void 0 : e.length) > 0,
                                d = [],
                                p = [];
                            null == n || n.forEach((function(e) {
                                "failed" !== e.status && "expired" !== e.status && (e.isGift ? d.push(e) : (o.includes(e.id) || "chargeback" === e.status) && p.push(e))
                            })), null == r || r.forEach((function(e) {
                                e.isGift ? d.push(e) : (o.includes(e.id) || "chargeback" === e.status) && p.push(e)
                            }));
                            var h = c && "Not Found" !== c;
                            return l ? m.createElement("div", null, "loading...") : m.createElement(Ae.Z, (0, P.Z)({
                                className: "mt-2"
                            }, "className", (0, i.iv)({
                                name: "yz9kv1",
                                styles: "& .location-card{margin:5px;padding:10px;text-align:left;}& .location-img{float:left;margin-right:10px;width:90px;height:calc(90px * 0.75);}& .size-wide .user-img{margin-left:5px;}& .steam-card{background-color:#171a21;background-image:linear-gradient(50deg, #184053, #1b2838, #000000f5);}& .oculus-card{background-color:#1c1e21;}& .steam-card img{height:70px;margin-left:20px;}& .vrchat-img{margin-top:0.5rem;margin-bottom:-30px;width:90%;}& .oculus-img{margin-top:1rem;margin-bottom:-12px;width:87%;}& .nav-link:hover{cursor:pointer;}& .table-striped tbody tr:nth-of-type(odd){background-color:rgba(0, 0, 0, 0.5);}"
                            })), h && m.createElement("div", null, "there has been an error loading the Oculus transactions= ", c), s && m.createElement("div", null, "there has been an error loading the subscription info: ", s), m.createElement(f.Z, null, m.createElement("h4", null, "Recurring Subs")), m.createElement("div", {
                                className: "card-container d-flex flex-wrap"
                            }, 0 === p.length && !u && 0 === (null == a ? void 0 : a.length) && m.createElement("div", null, "None ._."), a && a.map((function(e, t) {
                                return m.createElement(Je, {
                                    transaction: e,
                                    key: "recur-card-".concat(t)
                                })
                            })), p.map((function(e, t) {
                                return e.oculus ? m.createElement(He, {
                                    transaction: e
                                }) : m.createElement(We, {
                                    transaction: e,
                                    index: t,
                                    key: "recur-card-".concat(t)
                                })
                            }))), d.length > 0 && m.createElement("div", null, m.createElement(f.Z, {
                                className: "mt-2"
                            }, m.createElement("h4", null, "Gift Purchases  ", m.createElement(x.$1, {
                                icon: Me.Cl
                            }))), m.createElement("div", {
                                className: "card-container d-flex flex-wrap"
                            }, d.map((function(e, t) {
                                return e.oculus ? m.createElement(He, {
                                    transaction: e
                                }) : m.createElement(We, {
                                    transaction: e,
                                    index: t,
                                    key: "gift-card-".concat(t)
                                })
                            })))))
                        }
                    }]), n
                }(m.Component);
            (0, De.Z)((0, d.$j)((function(e) {
                return {
                    steam: e.user.transactions.steam,
                    oculus: e.user.transactions.oculus,
                    admin: e.user.transactions.admin,
                    subscriptions: e.user.subscriptions,
                    error: e.user.transactions.error,
                    statusCode: e.user.transactions.statusCode,
                    loading: e.user.transactions.loading
                }
            }))(Xe));
            var et = n(42138),
                tt = (n(2723), n(76553), new RegExp("^/api/\\d+/(?<fileType>file|image)/(?<fileId>file_".concat("[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}", ")/(?<versionNumber>\\d+)")), n(5513), n(22202)),
                nt = (n(23797), n(12752));
            n(39908);
            n(67947);
            var rt = n(62437),
                at = n(1208),
                lt = n(89182);
            var st = m.memo((function() {
                (0, d.I0)();
                var e = (0, p.UO)().userId,
                    t = m.useState(e),
                    n = (0, a.Z)(t, 2),
                    r = n[0],
                    l = n[1],
                    s = (0, rt.GR)(r),
                    c = s.data,
                    o = s.isLoading,
                    u = s.isFetching,
                    h = (0, tt.IB)().data,
                    f = m.useState(0),
                    E = (0, a.Z)(f, 2),
                    g = E[0],
                    Z = E[1],
                    v = (0, nt.pc)(),
                    b = r === (null == h ? void 0 : h.id),
                    y = b || v,
                    w = m.useState(y),
                    k = (0, a.Z)(w, 2),
                    S = k[0],
                    C = k[1],
                    N = m.useState(!1),
                    I = (0, a.Z)(N, 2),
                    R = I[0],
                    U = (I[1], m.useState(!1)),
                    T = (0, a.Z)(U, 2),
                    M = (T[0], T[1], m.useState(!1)),
                    A = (0, a.Z)(M, 2),
                    D = (A[0], A[1], m.useState([])),
                    O = (0, a.Z)(D, 2),
                    P = O[0],
                    _ = O[1];
                m.useEffect((function() {
                    Z(0), _([]), C(e === (null == h ? void 0 : h.id) || v), l(e)
                }), [e, h, v, y]);
                var F = (0, at.g9)({
                        userId: r,
                        offset: g,
                        sort: "updated",
                        order: "descending",
                        n: 50,
                        releaseStatus: S ? "all" : "public"
                    }, {
                        skip: r !== (null == c ? void 0 : c.id)
                    }),
                    B = F.data,
                    $ = void 0 === B ? [] : B,
                    q = F.isFetching,
                    z = F.isSuccess;
                m.useEffect((function() {
                    $.length && _((function(e) {
                        return [].concat((0, et.Z)(e), (0, et.Z)($))
                    }))
                }), [$]);
                var L = m.useMemo((function() {
                    var e = [];
                    return S ? e = [].concat((0, et.Z)([].concat(P.filter((function(e) {
                        return "public" === e.releaseStatus
                    }))).sort((function(e, t) {
                        return ue()(e.updated_at).isBefore(ue()(t.updated_at)) ? 1 : -1
                    }))), (0, et.Z)(P.filter((function(e) {
                        return "public" !== e.releaseStatus
                    })))) : (e = [].concat(P)).sort((function(e, t) {
                        return ue()(e.updated_at).isBefore(ue()(t.updated_at)) ? 1 : -1
                    })), e
                }), [P, S]);
                return (o || 0 === P.length && q) && !R ? m.createElement(it, null, o ? m.createElement(x.UU, {
                    className: "mb-2",
                    width: "100%",
                    height: "50px"
                }) : m.createElement(ut, null, c.displayName, "'s Worlds"), m.createElement(mt, {
                    role: "grid",
                    title: "Worlds Loading"
                }, m.createElement(x.UU, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    className: "mb-2",
                    width: "auto",
                    height: "420px"
                }))) : m.createElement(it, {
                    className: (0, i.cx)(!R && "pb-5")
                }, m.createElement(ot, {
                    className: "justify-content-between align-items-center"
                }, m.createElement(ot, {
                    className: "align-items-center"
                }, v && !1, u ? m.createElement(x.UU, {
                    className: "m-2",
                    width: "100%",
                    height: "80px"
                }) : m.createElement(ut, null, c.displayName, "'s Worlds")), m.createElement(ot, {
                    className: "align-items-center"
                }, y && m.createElement(dt, {
                    role: "checkbox",
                    "aria-checked": S,
                    onClick: function() {
                        (v || b) && (C(!S), Z(0), _([]))
                    }
                }, m.createElement(pt, null, "Show Private Worlds"), m.createElement(x.$1, {
                    width: 20,
                    icon: ee.LE,
                    disabled: !S
                })))), !R && v && !1, z && 0 === $.length && 0 === P.length && !R && m.createElement(ht, {
                    role: "note"
                }, "There are no Worlds here... yet"), m.createElement(mt, {
                    id: "WorldGrid"
                }, (R ? [] : L).map((function(e) {
                    return m.createElement(lt.Z, {
                        key: e.id,
                        world: e
                    })
                })), !R && q && m.createElement(m.Fragment, null, m.createElement(x.UU, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    width: "auto",
                    height: "420px"
                }), m.createElement(x.UU, {
                    width: "auto",
                    height: "420px"
                }))), !R && P.length - g == 50 && m.createElement(x.zx, {
                    onClick: function() {
                        q || Z(g + 50)
                    }
                }, "Load More Worlds"))
            }));
            const ct = st;
            var it = (0, l.Z)("div", {
                    target: "eazcmqq6"
                })({
                    name: "1fttcpj",
                    styles: "display:flex;flex-direction:column"
                }),
                ot = (0, l.Z)("div", {
                    target: "eazcmqq5"
                })({
                    name: "zjik7",
                    styles: "display:flex"
                }),
                ut = (0, l.Z)("h2", {
                    target: "eazcmqq4"
                })(""),
                mt = (0, l.Z)("div", {
                    target: "eazcmqq3"
                })({
                    name: "mtvm74",
                    styles: "margin-top:10px;display:grid;column-gap:0.5rem;grid-template-columns:repeat(1, 1fr);@media (min-width: 576px){grid-template-columns:repeat(2, 1fr);}@media (min-width: 992px){grid-template-columns:repeat(3, 1fr);}@media (min-width: 1920px){grid-template-columns:repeat(4, 1fr);}@media (min-width: 2300px){grid-template-columns:repeat(5, 1fr);}"
                }),
                dt = (0, l.Z)(x.zx, {
                    target: "eazcmqq2"
                })({
                    name: "3zych9",
                    styles: "display:flex;align-items:center;min-height:2.5rem"
                }),
                pt = (0, l.Z)("div", {
                    target: "eazcmqq1"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                }),
                ht = (0, l.Z)("div", {
                    target: "eazcmqq0"
                })({
                    name: "bpc6lh",
                    styles: "width:100%;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#54b5c5;background-color:#252a30;border-radius:8px;font-size:2rem;text-align:center;margin-top:1rem"
                });
            var ft = n(37858);

            function Et(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            const gt = function(e) {
                (0, A.Z)(a, e);
                var t, n = Et(a);

                function a(e) {
                    var t;
                    return (0, U.Z)(this, a), (t = n.call(this, e)).state = {
                        subscriptions: !1
                    }, t.loadSubscriptions = t.loadSubscriptions.bind((0, M.Z)(t)), t.changeSubscription = t.changeSubscription.bind((0, M.Z)(t)), t
                }
                return (0, T.Z)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.loadSubscriptions().catch((function(e) {
                            console.error(e)
                        }))
                    }
                }, {
                    key: "loadSubscriptions",
                    value: (t = (0, r.Z)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, B().get(window.apiUrl("/api/1/subscriptions?gifts=true&recurring=true"));
                                case 2:
                                    t = e.sent, this.setState({
                                        subscriptions: t.data
                                    }), this.props.onChange && this.props.onChange(t.data[0].id);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
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
                        }, this.state.subscriptions.map((function(e) {
                            return m.createElement("option", {
                                value: e.id
                            }, e.id, " — ", e.description)
                        })))))
                    }
                }]), a
            }(m.Component);

            function Zt(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var vt = function(e) {
                (0, A.Z)(n, e);
                var t = Zt(n);

                function n(e) {
                    var r;
                    (0, U.Z)(this, n), r = t.call(this, e);
                    var a = e.timeOptions || ["hour", "day", "week", "month", "year"];
                    return r.state = {
                        number: 1,
                        span: a[0],
                        timeOptions: a
                    }, r.changeNumber = r.changeNumber.bind((0, M.Z)(r)), r.changeSpan = r.changeSpan.bind((0, M.Z)(r)), null != r.props.onChange && r.props.onChange("1_".concat(r.state.span)), r
                }
                return (0, T.Z)(n, [{
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
                        }, this.state.timeOptions.map((function(e) {
                            return m.createElement("option", {
                                value: e
                            }, e, "s")
                        }))))
                    }
                }]), n
            }(m.Component);
            const bt = vt;

            function yt(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var xt = je.clearAdminSubscription,
                wt = je.createAdminSubscription,
                kt = function(e) {
                    (0, A.Z)(n, e);
                    var t = yt(n);

                    function n(e) {
                        var r;
                        return (0, U.Z)(this, n), (r = t.call(this, e)).state = {
                            subscriptionId: "",
                            expiry: "1_hour"
                        }, r.createAdminSubscriptionHandler = r.createAdminSubscriptionHandler.bind((0, M.Z)(r)), r.changeSubscription = r.changeSubscription.bind((0, M.Z)(r)), r.changeTimespan = r.changeTimespan.bind((0, M.Z)(r)), r.props.dispatch(xt()), r
                    }
                    return (0, T.Z)(n, [{
                        key: "createAdminSubscriptionHandler",
                        value: function() {
                            this.props.dispatch(wt({
                                userId: this.props.userId,
                                subscriptionId: this.state.subscriptionId,
                                expiry: "".concat(this.state.expiry, "_ahead")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.complete && this.props.dispatch((0, R.i)({
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
                            return n ? m.createElement("div", null, " loading ... ") : l ? m.createElement("div", null, " ", "u did it ", m.createElement(x.$1, {
                                icon: Oe.u8
                            })) : a ? m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r), " oh no"), m.createElement("pre", null, m.createElement("code", null, a))) : m.createElement("div", null, m.createElement("div", null, t), m.createElement("br", null), m.createElement(gt, {
                                onChange: this.changeSubscription
                            }), m.createElement("br", null), m.createElement(bt, {
                                onChange: this.changeTimespan
                            }), m.createElement("br", null), m.createElement(Z.Z, {
                                onClick: this.createAdminSubscriptionHandler,
                                disabled: !s
                            }, "Create"))
                        }
                    }]), n
                }(m.Component);
            (0, d.$j)((function(e) {
                return {
                    userId: e.user.databaseUser.id,
                    displayName: e.user.databaseUser.displayName,
                    loading: e.createAdminSubscription.loading,
                    statusCode: e.createAdminSubscription.statusCode,
                    error: e.createAdminSubscription.error,
                    complete: e.createAdminSubscription.complete
                }
            }))(kt);
            var St = n(68099),
                Ct = n(35104),
                Nt = n(77007),
                It = n(6811),
                Rt = n(753),
                Ut = n(65061),
                Tt = n(65780),
                Mt = n.n(Tt),
                At = n(97878);

            function Dt(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var Ot = At.Z.runMergeDiagnostic,
                Pt = At.Z.repairMerge,
                _t = function(e) {
                    (0, A.Z)(l, e);
                    var t, n, a = Dt(l);

                    function l(e) {
                        var t;
                        return (0, U.Z)(this, l), (t = a.call(this, e)).state = {
                            diagnosticTooltipOpen: !1,
                            repairTooltipOpen: !1
                        }, t.handleRunMergeDiagnostic = t.handleRunMergeDiagnostic.bind((0, M.Z)(t)), t.handleRepairMerge = t.handleRepairMerge.bind((0, M.Z)(t)), t
                    }
                    return (0, T.Z)(l, [{
                        key: "handleRunMergeDiagnostic",
                        value: (n = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.props.dispatch(Ot({
                                            userId: this.props.userId
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "handleRepairMerge",
                        value: (t = (0, r.Z)(c().mark((function e(t) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch(Pt({
                                            targetUserId: this.props.userId,
                                            sourceUserId: t
                                        }));
                                    case 2:
                                        return e.next = 4, Mt()(1e3);
                                    case 4:
                                        return e.next = 6, this.props.dispatch(Ot({
                                            userId: this.props.userId,
                                            autoRefresh: !0
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "toggle",
                        value: function(e) {
                            this.setState((0, P.Z)({}, e, !this.state[e]))
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
                            return m.createElement(Ae.Z, {
                                className: "pt-3"
                            }, m.createElement(f.Z, null, m.createElement(Z.Z, {
                                onClick: this.handleRunMergeDiagnostic
                            }, m.createElement(x.$1, {
                                icon: Rt.zc
                            }), "  Run Diagnostic"), m.createElement("span", {
                                className: "ps-4 pe-4",
                                id: "diagnosticTooltip"
                            }, m.createElement(x.$1, {
                                icon: St.YH
                            }), m.createElement(Ut.Z, {
                                placement: "right",
                                isOpen: this.state.diagnosticTooltipOpen,
                                target: "diagnosticTooltip",
                                toggle: function() {
                                    return e.toggle("diagnosticTooltipOpen")
                                }
                            }, "In this diagnostic we will compare this user to any previously merged source (external) accounts."))), m.createElement("hr", null), m.createElement(f.Z, null, m.createElement(k.Z, {
                                loading: r
                            }), l && m.createElement("div", null, m.createElement("h6", {
                                className: "text-danger"
                            }, " An error occurred while trying to diagnose merge "), m.createElement("pre", null, m.createElement("code", null, " ", a, " ", l, " "))), i && m.createElement("div", null, m.createElement("h6", {
                                className: "text-danger"
                            }, " An error occurred during merge repair "), m.createElement("pre", null, m.createElement("code", null, " ", c, " ", i, " "))), s && m.createElement(Ae.Z, {
                                className: "pt-3"
                            }, m.createElement(f.Z, null, m.createElement(E.Z, {
                                className: "p-0"
                            }, Object.values(n).map((function(t, n) {
                                var r = t.errors,
                                    a = t.criticalErrors,
                                    l = t.sourceType,
                                    s = t.sourceId,
                                    c = t.targetId,
                                    i = r.length > 0,
                                    u = a.length > 0;
                                return m.createElement(Ae.Z, {
                                    key: "".concat(l, "-results-").concat(n)
                                }, l && m.createElement(f.Z, null, m.createElement("h4", null, l.toTitleCase(), "  ", !i && m.createElement(x.$1, {
                                    icon: It.f8,
                                    className: "text-success"
                                }), i && m.createElement(x.$1, {
                                    icon: ne.RL,
                                    className: "text-danger"
                                }))), m.createElement(f.Z, null, m.createElement(x.$1, {
                                    icon: Nt.Ss
                                }), "  ", s && m.createElement("h6", null, " Merged from user ", s), c && m.createElement("h6", null, " Merged into user ", c)), i && m.createElement("div", null, m.createElement(f.Z, {
                                    className: "center-block text-center justify-content-center"
                                }, !o && m.createElement("h4", {
                                    className: "text-danger"
                                }, "Merge errors detected!"), o && m.createElement("h4", {
                                    className: "text-danger"
                                }, "If you just repaired, we might not be done yet! ", m.createElement("br", null), "Please wait a few minutes and run the diagnostic again")), m.createElement(f.Z, null, m.createElement("ul", null, r.map((function(e, t) {
                                    return m.createElement("li", {
                                        key: "".concat(l, "-error-").concat(t)
                                    }, e)
                                })))), !o && !u && m.createElement(f.Z, {
                                    className: "center-block text-center justify-content-center"
                                }, m.createElement(Z.Z, {
                                    color: "danger",
                                    placement: "right",
                                    onClick: function() {
                                        return e.handleRepairMerge(s)
                                    }
                                }, m.createElement(x.$1, {
                                    icon: Ct.d8
                                }), "  Repair ", l.toTitleCase(), " Merge"), m.createElement("span", {
                                    className: "ps-4 pe-4",
                                    id: "repairTooltip"
                                }, m.createElement(x.$1, {
                                    icon: St.YH
                                }), m.createElement(Ut.Z, {
                                    placement: "right",
                                    isOpen: e.state.repairTooltipOpen,
                                    target: "repairTooltip",
                                    toggle: function() {
                                        return e.toggle("repairTooltipOpen")
                                    }
                                }, "We will attempt to automatically fix merge discrepancies between these two accounts.")))), u && m.createElement("div", null, m.createElement(f.Z, null, m.createElement("h4", {
                                    className: "text-danger"
                                }, "The diagnostic can't continue!")), m.createElement(f.Z, null, m.createElement("ul", null, a.map((function(e, t) {
                                    return m.createElement("li", {
                                        key: "criticalError-".concat(t)
                                    }, e)
                                }))))), c && m.createElement(f.Z, null, m.createElement("h6", {
                                    className: "text-danger"
                                }, "Please diagnose issues from the merge target")), m.createElement("hr", null))
                            })), !u && m.createElement("h6", null, "No merge information found"))))))
                        }
                    }]), l
                }(m.Component);
            (0, d.$j)((function(e) {
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
            }))(_t);
            n(86646);
            var Ft = n(8860),
                Bt = (n(65847), n(83541), n(18461));
            Se()((function(e, t, n, r) {
                B().get(window.apiUrl("/api/1/auth/exists?username=".concat(encodeURIComponent(e), "&displayName=").concat(encodeURIComponent(t), "&excludeUserId=").concat(n))).then((function(e) {
                    r(e.data.userExists)
                }))
            }), 1e3, {
                leading: !1,
                trailing: !0
            });
            var $t = n(92332),
                qt = n(52926),
                zt = n(22081),
                Lt = n(56811),
                jt = n(83868),
                Gt = n.n(jt),
                Yt = n(69690);

            function Vt(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var Wt = At.Z.adminChangeEmail,
                Ht = Se()((function(e, t, n) {
                    B().get(window.apiUrl("/api/1/auth/exists?email=".concat(encodeURIComponent(e), "&excludeUserId=").concat(t))).then((function(e) {
                        n(e.data.userExists)
                    }))
                }), 1e3),
                Jt = function(e) {
                    (0, A.Z)(n, e);
                    var t = Vt(n);

                    function n(e) {
                        var r;
                        return (0, U.Z)(this, n), (r = t.call(this, e)).state = {
                            email: "",
                            emailOk: null,
                            emailTaken: !1,
                            emailError: !1,
                            ready: !1,
                            forceVerify: !1,
                            scramblePassword: !1
                        }, r.handleEmailChange = r.handleEmailChange.bind((0, M.Z)(r)), r.handleSubmit = r.handleSubmit.bind((0, M.Z)(r)), r.handleForceVerifyChange = r.handleForceVerifyChange.bind((0, M.Z)(r)), r.handleScramblePasswordChanged = r.handleScramblePasswordChanged.bind((0, M.Z)(r)), r
                    }
                    return (0, T.Z)(n, [{
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
                            }), Ht(n, this.props.user.id, (function(e) {
                                var r = Gt()(n) && !(0, Yt.T)(n),
                                    a = (null == n || "" === n || !r) && "That's an invalid email";
                                t.setState({
                                    emailTaken: e,
                                    emailError: a,
                                    emailOk: !e && !a,
                                    ready: !e && !a
                                })
                            })), e.preventDefault()
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
                            this.props.dispatch(Wt({
                                userId: this.props.user.id,
                                email: this.state.email,
                                verified: this.state.forceVerify,
                                scramblePassword: this.state.scramblePassword
                            })).then((function() {
                                t.setState({
                                    email: "",
                                    emailOk: null,
                                    emailTaken: !1,
                                    emailError: !1,
                                    ready: !1,
                                    forceVerify: !1,
                                    scramblePassword: !1
                                }), t.props.dispatch((0, R.vP)({
                                    userId: t.props.user.id
                                }))
                            })).then((function() {
                                t.props.router.navigate.push("/home/user/".concat(t.props.user.id))
                            })), e.preventDefault()
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
                            }, m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: "1",
                                style: {
                                    textAlign: "right"
                                }
                            }, m.createElement(x.$1, {
                                icon: Lt.IB,
                                size: "2x"
                            })), m.createElement(E.Z, {
                                xs: "10"
                            }, m.createElement(f.Z, null, m.createElement("input", {
                                type: "text",
                                id: "email",
                                name: "email",
                                className: "form-control",
                                value: this.state.email,
                                placeholder: n.obfuscatedEmail,
                                onChange: this.handleEmailChange,
                                onKeyUp: this.handleEmailChange
                            }), this.state.emailError && m.createElement(h.Z, {
                                color: "warning"
                            }, m.createElement(x.$1, {
                                icon: zt.lE
                            }), " ", this.state.emailError), this.state.emailTaken && m.createElement(h.Z, {
                                color: "warning"
                            }, m.createElement(x.$1, {
                                icon: qt.B1
                            }), " That email is already in use."), n.hasPendingEmail && m.createElement(h.Z, {
                                color: "info"
                            }, m.createElement(x.$1, {
                                icon: K.sq
                            }), " An email change is pending verification: ", n.obfuscatedPendingEmail)), m.createElement(E.Z, {
                                xs: "8"
                            }, m.createElement(Bt.Z, {
                                id: "forceVerify",
                                defaultChecked: this.state.forceVerify,
                                onChange: this.handleForceVerifyChange,
                                label: "Mark email verified (don't send confirmation email)",
                                htmlFor: "forceVerify"
                            })), m.createElement(E.Z, {
                                xs: "8"
                            }, m.createElement(Bt.Z, {
                                id: "scramblePassword",
                                defaultChecked: this.state.scramblePassword,
                                onChange: this.handleScramblePasswordChanged,
                                label: "Scramble password and log out all sessions",
                                htmlFor: "scramblePassword"
                            })), m.createElement(f.Z, null, m.createElement(E.Z, {
                                xs: {
                                    size: 4,
                                    offset: 8
                                }
                            }, m.createElement(Z.Z, {
                                disabled: !this.state.ready && !t.changing,
                                color: "primary",
                                block: !0,
                                id: "email-change-submit",
                                name: "email-change-submit",
                                value: "update"
                            }, "Change Email")))), m.createElement(E.Z, {
                                xs: "1",
                                style: {
                                    textAlign: "left"
                                }
                            }, null == this.state.emailTaken && m.createElement(x.$1, {
                                icon: $t.LM,
                                spin: !0,
                                size: "2x"
                            }), m.createElement(Ft.Z, {
                                ok: this.state.emailOk
                            })))))
                        }
                    }]), n
                }(m.Component);
            (0, De.Z)((0, d.$j)((function(e, t) {
                return {
                    email: e.user.email,
                    user: rt.ZP.endpoints.getUser.select(t.userId)(e).data
                }
            }))(Jt));
            n(62876);
            var Qt = n(30751);
            At.Z.runSteamDiagnostic;
            var Kt = n(13461),
                Xt = n(12478);
            var en = function(e) {
                var t = e.cancelFriendRequestLink,
                    n = e.disabled,
                    r = e.friendLink,
                    a = e.friendship,
                    l = e.unfriendLink;
                if (!e.visible) return null;
                if (null != a) {
                    if (a.loading) return m.createElement(Z.Z, {
                        color: "primary",
                        disabled: !0
                    }, m.createElement(x.$1, {
                        icon: Kt.T
                    }), "  ...");
                    if (a.isFriend) return m.createElement(Z.Z, {
                        "aria-label": "Unfriend",
                        color: "primary",
                        onClick: l
                    }, m.createElement(x.$1, {
                        icon: Xt.a1,
                        "aria-hidden": "true"
                    }), " Unfriend");
                    if (a.incomingRequest) return m.createElement(Z.Z, {
                        "aria-label": "Accept Friend Request",
                        color: "primary",
                        onClick: r
                    }, " ", m.createElement(x.$1, {
                        icon: Kt.T,
                        "aria-hidden": "true",
                        color: "success"
                    }), "  Accept Friend Request", " ");
                    if (a.outgoingRequest) return m.createElement(Z.Z, {
                        "aria-label": "Cancel Friend Request",
                        color: "primary",
                        onClick: t
                    }, m.createElement(x.$1, {
                        icon: Kt.T,
                        "aria-hidden": "true"
                    }), "  Cancel Friend Request")
                }
                return m.createElement(Z.Z, {
                    "aria-label": "Add Friend",
                    color: "primary",
                    onClick: r,
                    disabled: n
                }, m.createElement(x.$1, {
                    icon: Kt.T,
                    "aria-hidden": "true"
                }), " Add Friend")
            };
            n(89734), n(58589), n(8256), n(28055), n(38824), n(94606);

            function tn(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var nn = je.deleteUserSubscription,
                rn = {
                    Admin: ["hour", "day", "week", "month", "year"],
                    Steam: ["day", "week", "month", "year"]
                },
                an = ["Admin", "Steam"],
                ln = ["Admin", "Steam"],
                sn = ["Oculus", "Steam"],
                cn = function(e) {
                    (0, A.Z)(o, e);
                    var t, n, a, l, s = tn(o);

                    function o(e) {
                        var t;
                        return (0, U.Z)(this, o), (t = s.call(this, e)).state = {
                            transactionId: e.transactionId,
                            transactionType: e.transactionType,
                            expiry: "Steam" === e.transactionType ? "1_day" : "1_hour",
                            isActive: e.active
                        }, t.addTime = t.addTime.bind((0, M.Z)(t)), t.clearAddSubModal = t.clearAddSubModal.bind((0, M.Z)(t)), t.clearDeleteModal = t.clearDeleteModal.bind((0, M.Z)(t)), t.changeTimespan = t.changeTimespan.bind((0, M.Z)(t)), t.deleteSubscription = t.deleteSubscription.bind((0, M.Z)(t)), t
                    }
                    return (0, T.Z)(o, [{
                        key: "addTime",
                        value: (l = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return parseInt(this.state.expiry.split("_")[0]), this.state.expiry.split("_")[1], e.next = 4, this.props.dispatch((0, R.i)({
                                            userId: this.props.user.id
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "deleteSubscription",
                        value: (a = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch(nn({
                                            transactionId: this.state.transactionId,
                                            store: this.props.transactionType.toLowerCase()
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "clearAddSubModal",
                        value: (n = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch((0, R.uv)());
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "clearDeleteModal",
                        value: (t = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.dispatch((0, R.wd)());
                                    case 2:
                                        this.props.refresh && this.props.refresh();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
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
                                l = rn[this.state.transactionType],
                                s = sn.includes(this.props.transactionType) && this.props.isGift,
                                c = "Admin" === this.props.transactionType ? "Remove Subscription" : "Cancel Subscription";
                            s && (c = "Delete Gift Subscription");
                            var o = "" !== this.state.timespan && "" !== this.state.transactionId;
                            return m.createElement("div", {
                                className: (0, i.iv)({
                                    name: "1yyg8et",
                                    styles: ".modal-button{max-width:13em;margin-top:0.5em;}button{width:100%;}"
                                })
                            }, this.state.isActive && an.includes(this.state.transactionType) && m.createElement(Le.Z, {
                                className: "modal-button",
                                icon: X.SZ,
                                title: "Add Time To Subscription",
                                clearModal: this.clearAddSubModal
                            }, n && m.createElement("div", null, "Time Successfully Added ", m.createElement(x.$1, {
                                icon: Oe.u8
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r), " oh no"), m.createElement("pre", null, m.createElement("code", null, a))), !n && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", t), m.createElement("br", null), m.createElement(bt, {
                                timeOptions: l,
                                onChange: this.changeTimespan
                            }), m.createElement("br", null), m.createElement(Z.Z, {
                                onClick: this.addTime,
                                disabled: !o
                            }, "Extend"))), this.state.isActive && "canceled" !== this.props.status && (ln.includes(this.props.transactionType) || s) && m.createElement(Le.Z, {
                                className: "modal-button",
                                icon: Q.NB,
                                title: c,
                                clearModal: this.clearDeleteModal
                            }, n && m.createElement("div", null, "Subscription Successfully Terminated ", m.createElement(x.$1, {
                                icon: Oe.u8
                            }), m.createElement("br", null), m.createElement("br", null), m.createElement("br", null)), a && m.createElement("div", null, m.createElement("h6", null, m.createElement("strong", null, r)), m.createElement("pre", null, m.createElement("code", null, a))), !n && !a && m.createElement("div", null, m.createElement("div", null, "For subscription: ", t), m.createElement("br", null), m.createElement("div", null, "Are you sure you want to delete this ", this.state.transactionType, " ", s ? "Gift" : "", " subscription?"), m.createElement("br", null), m.createElement(Z.Z, {
                                onClick: this.deleteSubscription,
                                disabled: !o
                            }, "Delete"))))
                        }
                    }]), o
                }(m.Component);
            (0, d.$j)((function(e) {
                return {
                    user: e.user.databaseUser,
                    subscriptions: e.user.subscriptions,
                    statusCode: e.user.updatedSubscriptionStatusCode,
                    error: e.user.updatedSubscriptionError,
                    complete: e.user.updatedSubscription
                }
            }))(cn);

            function on(e) {
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
                    var n, r = (0, O.Z)(e);
                    if (t) {
                        var a = (0, O.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, D.Z)(this, n)
                }
            }
            var un = function(e) {
                (0, A.Z)(a, e);
                var t, n = on(a);

                function a(e) {
                    var t;
                    return (0, U.Z)(this, a), (t = n.call(this, e)).refreshSubscriptions = t.refreshSubscriptions.bind((0, M.Z)(t)), t
                }
                return (0, T.Z)(a, [{
                    key: "refreshSubscriptions",
                    value: (t = (0, r.Z)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.props.dispatch((0, R.i)({
                                        userId: this.props.user.id
                                    }));
                                case 1:
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
                        var e = this.props,
                            t = e.subscriptions,
                            n = e.loadingState,
                            r = (0, et.Z)(t).sort((function(e, t) {
                                return t.created_at === e.created_at ? 0 : t.created_at < e.created_at ? -1 : 1
                            }));
                        return n.loading ? m.createElement(x.UU, {
                            width: "100%",
                            height: "200px",
                            className: "my-2"
                        }) : m.createElement(Ae.Z, null, m.createElement(f.Z, null, m.createElement("h4", null, "Subscriptions")), 0 === r.length ? m.createElement(f.Z, null, m.createElement(E.Z, null, "None.")) : r.map((function(e) {
                            var t = e.store,
                                n = e.transactionId;
                            e.id, e.description, e.active, e.status, e.expires, e.created_at, e.isGift, e.giftedBy, e.steamItemId, e.amount, "".concat(t, ":").concat(n)
                        })))
                    }
                }]), a
            }(m.Component);
            (0, d.$j)((function(e) {
                return {
                    user: e.user.databaseUser,
                    subscriptions: e.user.subscriptions,
                    loadingState: e.user.loadSubscriptions
                }
            }))(un);
            n(69523);
            var mn = n(69677);
            n(64258), n(88439), n(31358);
            At.Z.forceLogout, At.Z.remove2fa, At.Z.updateElasticsearchUser, At.Z.cancelAccountDeletion;
            const dn = (0, d.$j)((function(e) {
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
            }))((function(e) {
                e.aliases;
                var t = e.dispatch,
                    n = (e.emailAddresses, e.endOfResults, e.isSelf),
                    l = e.isUserHiddenByAdmin,
                    s = e.isUserMod,
                    o = e.moderation,
                    u = (e.scrolling, e.friendRequests, (0, p.s0)()),
                    d = (0, p.UO)().userId,
                    Z = (0, rt.GR)(d),
                    b = Z.data,
                    w = void 0 === b ? {} : b,
                    S = Z.isLoading,
                    C = (Z.refetch, (0, m.useState)(!1)),
                    N = (0, a.Z)(C, 2),
                    I = (N[0], N[1]),
                    U = (0, mn.ge)(d),
                    T = U.data,
                    M = U.refetch,
                    A = ((0, y.y)().data, w.accountDeletionDate, w.displayName),
                    D = (w.pastDisplayNames, w.tags, w.twoFactorAuthEnabled, w.username),
                    O = (0, nt.pc)(),
                    P = !1,
                    _ = void 0 !== (null == w ? void 0 : w.displayName),
                    F = (0, m.useState)(e.error),
                    B = (0, a.Z)(F, 2),
                    $ = B[0],
                    q = B[1],
                    z = (0, m.useState)(!1),
                    L = (0, a.Z)(z, 2),
                    j = L[0],
                    G = L[1],
                    Y = (0, m.useState)((function() {
                        return function() {}
                    })),
                    V = (0, a.Z)(Y, 2),
                    W = V[0],
                    H = V[1],
                    Q = (0, m.useState)(""),
                    K = (0, a.Z)(Q, 2),
                    X = K[0],
                    ee = K[1],
                    te = (0, m.useState)(""),
                    ne = (0, a.Z)(te, 2),
                    re = ne[0],
                    ae = ne[1],
                    le = (0, m.useState)(!1),
                    se = (0, a.Z)(le, 2),
                    ce = (se[0], se[1], (0, nt.Tu)().user),
                    ie = function() {
                        var e = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t((0, R.II)({
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
                                        return q("User not found"), console.error(e.t0), e.abrupt("return");
                                    case 11:
                                        return q("Problem with loading the user"), console.error(e.t0), e.abrupt("return");
                                    case 14:
                                        e.next = 31;
                                        break;
                                    case 17:
                                        return e.next = 19, t((0, R.BJ)({
                                            userId: d
                                        }));
                                    case 19:
                                        return e.next = 21, t((0, R.fW)({
                                            userId: d
                                        }));
                                    case 21:
                                        return e.prev = 21, e.next = 24, t((0, R.i)({
                                            userId: d
                                        }));
                                    case 24:
                                        e.next = 29;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t1 = e.catch(21), console.error("there was an error loading this user's subscriptions");
                                    case 29:
                                        return e.next = 31, t((0, R.yR)({
                                            userId: d
                                        }));
                                    case 31:
                                        return e.next = 33, M({
                                            userId: d
                                        });
                                    case 33:
                                        I(!1);
                                    case 34:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5],
                                [21, 26]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, m.useEffect)((function() {
                    void 0 === d ? u("/home/user/".concat(ce.id), {
                        replace: !0
                    }) : (I(!0), ie())
                }), [d]), (0, m.useEffect)((function() {
                    var e;
                    document.title = "".concat(null !== (e = null == w ? void 0 : w.displayName) && void 0 !== e ? e : "User", " - VRChat")
                }), [w]);
                var oe = function() {
                        var e = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, R.SK)({
                                            userId: d
                                        }));
                                    case 2:
                                        M({
                                            userId: d
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ue = function() {
                        var e = (0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t((0, R.J3)({
                                            userId: d
                                        }));
                                    case 2:
                                        M({
                                            userId: d
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                if (!_) return m.createElement(k.Z, {
                    loading: S
                }, m.createElement(v.Z, null, "User"), m.createElement(pn, null, m.createElement("span", null, "This user doesn't exist 🥺")));
                window.apiUrl("/a/admin/user/".concat(w.id));
                return m.createElement(k.Z, {
                    loading: S
                }, m.createElement(v.Z, null, null != A ? A : "User"), m.createElement("div", {
                    className: "old-layout ".concat((0, i.iv)({
                        name: "at64zg",
                        styles: "& ul{list-style-type:none;padding:0;margin:0;}& .higher-element{z-index:1;position:relative;}"
                    }))
                }, function(e) {
                    var t = e.errorAlert,
                        n = e.moderation,
                        r = e.user;
                    return null !== t && "" !== t ? m.createElement(h.Z, {
                        color: "warning"
                    }, t) : n.clear ? m.createElement(h.Z, {
                        color: "success"
                    }, "All moderation(s) against ", null == r ? void 0 : r.displayName, " have been cleared") : null
                }({
                    errorAlert: $,
                    moderation: o,
                    user: w
                }), m.createElement(x.sm, {
                    bodyText: re,
                    cancelCallback: function() {
                        return G(!1)
                    },
                    confirmCallback: W,
                    headerText: X,
                    isOpen: j
                }), P, P, _ && m.createElement(f.Z, {
                    className: "mb-4"
                }, m.createElement(E.Z, {
                    md: "12"
                }, m.createElement("h2", null, A), m.createElement("h3", {
                    className: "subheader"
                }, m.createElement(f.Z, {
                    className: "mx-0align-items-center"
                }, D && m.createElement(E.Z, {
                    md: 5
                }, D), m.createElement(E.Z, {
                    md: 7
                }, m.createElement("div", {
                    className: "d-flex flex-row align-items-center"
                }, P)))))), m.createElement(f.Z, {
                    className: "mb-4 higher-element"
                }, m.createElement(E.Z, {
                    md: "9",
                    style: {
                        paddingRight: "0"
                    }
                }, m.createElement(J.Z, {
                    userId: d,
                    showLocation: !0,
                    size: "huge",
                    isUserHidden: l
                })), m.createElement(E.Z, {
                    md: "3",
                    className: (0, i.iv)({
                        name: "rqhlr5",
                        styles: "padding-left:1em;.btn-group-vertical .btn:first-of-type{border-radius:5px 5px 0 0;}.btn-group-vertical .btn:last-of-type{border-radius:0 0 5px 5px;}.btn{text-align:left;}.fa{width:1.5em;}"
                    })
                }, m.createElement(p.Z5, null, m.createElement(p.AW, {
                    exact: !0,
                    path: "/",
                    element: m.createElement(g.Z, {
                        vertical: !0,
                        size: "lg",
                        className: "w-100",
                        "aria-label": "User Action Group"
                    }, m.createElement(en, {
                        visible: !n,
                        friendship: T,
                        friendLink: oe,
                        cancelFriendRequestLink: ue,
                        unfriendLink: function() {
                            H((function() {
                                return (0, r.Z)(c().mark((function e() {
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, t((0, R.tJ)({
                                                    userId: d
                                                }));
                                            case 3:
                                                t(mn.ZP.util.updateQueryData("getFriendStatus", d, (function(e) {
                                                    e.isFriend = !1, e.incomingRequest = !1, e.outgoingRequest = !1
                                                }))), e.next = 9;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), console.error(e.t0);
                                            case 9:
                                                return G(!1), e.next = 12, new Promise((function(e) {
                                                    return setTimeout(e, 1e4)
                                                }));
                                            case 12:
                                                ie();
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 6]
                                    ])
                                })))
                            })), ee("Remove Friend"), ae("Are you sure you want to remove ".concat(A, " as your friend?")), G(!0)
                        },
                        disabled: !w.id
                    }), P, m.createElement(Qt.Z, {
                        visible: !O && !n && !s,
                        showText: !0,
                        userId: w.id
                    }), m.createElement(ft.Z, {
                        visible: !O && !n && !s,
                        showText: !0,
                        userId: w.id
                    }))
                })))), P, m.createElement(f.Z, null, P, P, m.createElement(E.Z, {
                    md: "12"
                }, m.createElement(ct, null)), P, P, P, P, P, P, P, P, P, P, P, P, P)))
            }));
            var pn = (0, l.Z)("div", {
                target: "e1pj8mi20"
            })({
                name: "1nxag3m",
                styles: "padding:25px;margin:25px;font-size:large;text-align:center;span{background-color:rgba(0, 0, 0, 0.15);padding:25px;}"
            })
        },
        89182: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(87462),
                a = n(45697),
                l = n.n(a),
                s = n(67294),
                c = n(14411),
                i = function(e) {
                    var t;
                    return s.createElement(c.uW, (0, r.Z)({
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
        83541: (e, t, n) => {
            n.d(t, {
                Gu: () => s
            });
            var r = n(61509),
                a = {};
            var l = r.S.injectEndpoints({
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
//# sourceMappingURL=47e1ef489b44fda6d8f7c74ad18f1d4f22c8780ee3ac07af87e6a60767462c17.js.map