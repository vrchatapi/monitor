"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5936], {
        44741(e, t, a) {
            a.d(t, {
                F2: () => i,
                IO: () => c,
                Uf: () => s,
                Wm: () => l
            });
            var n = a(72505),
                r = a.n(n),
                l = function(e) {
                    var t = e.type;
                    return {
                        type: "LOAD_FAVORITE_GROUP_TYPE",
                        payload: r().get(window.apiUrl("/api/1/favorite/groups?n=50&type=".concat(t)), {}),
                        meta: {
                            type: t
                        }
                    }
                },
                i = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_AVATARS",
                        payload: r().get(window.apiUrl("/api/1/avatars/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                s = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_WORLDS",
                        payload: r().get(window.apiUrl("/api/1/worlds/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                c = function(e) {
                    var t = e.favoriteId,
                        a = e.type,
                        n = e.group;
                    return {
                        type: "REMOVE_FAVORITE",
                        payload: r().delete(window.apiUrl("/api/1/favorites/".concat(t)), {}),
                        meta: {
                            favoriteId: t,
                            type: a,
                            group: n
                        }
                    }
                }
        },
        8367(e, t, a) {
            a.d(t, {
                A: () => E
            });
            var n = a(15902),
                r = a(70129),
                l = a(38275),
                i = a(19179),
                s = a(1705),
                c = a(31709),
                o = a(96540),
                p = a(84976),
                d = a(16477),
                m = a(6324),
                u = a(24751),
                h = a(33515);
            const E = function(e) {
                var t, a = e.onDeleteClicked,
                    r = e.tag,
                    m = e.contentType,
                    E = e.hideDescription,
                    v = e.preventSearch,
                    _ = e.editable,
                    A = (e.isMod, (0, o.useState)(!1)),
                    y = (0, n.A)(A, 2),
                    f = y[0],
                    w = y[1],
                    b = (0, o.useState)(!1),
                    x = (0, n.A)(b, 2),
                    k = x[0],
                    C = x[1],
                    M = (0, o.useState)(!1),
                    N = (0, n.A)(M, 2),
                    D = N[0],
                    I = N[1],
                    S = (0, o.useState)(!1),
                    R = (0, n.A)(S, 2),
                    W = (R[0], R[1]),
                    O = _,
                    T = !m || v || !1,
                    L = c.CY,
                    F = r,
                    U = "secondary";
                if (null == r) return null;
                if ("string" != typeof r) return console.error("Malformed tag."), null;
                (r.startsWith("admin") || r.startsWith("system")) && (L = s._2), r.startsWith("author_tag") && (L = s._2, F = r.replace("author_tag_", ""));
                var P = h.D.filter(function(e) {
                    return e.tag === r
                });
                P[0] && (L = P[0].icon, F = P[0].description), f && (L = i.GR), k && D && (U = "danger"), D && (t = o.createElement(g, {
                    icon: l.yL,
                    title: "Delete this tag",
                    onMouseLeave: function() {
                        W(!1)
                    },
                    onMouseEnter: function() {
                        W(!0)
                    },
                    onClick: function() {
                        a && O && a(r)
                    }
                }));
                var V = "/home/search/".concat(m, "/").concat(F);
                return o.createElement(d.A, {
                    "aria-label": "tag",
                    className: "tag-badge me-2 d-flex",
                    onMouseEnter: function() {
                        O && w(!0)
                    },
                    onMouseLeave: function() {
                        O && (w(!1), I(!1))
                    },
                    color: U
                }, o.createElement(u.fI, {
                    onMouseEnter: function() {
                        O && C(!0)
                    },
                    onMouseLeave: function() {
                        O && C(!1)
                    },
                    className: "me-2"
                }, o.createElement(g, {
                    icon: L,
                    title: F,
                    className: "me-1",
                    onClick: function() {
                        O && I(!D)
                    }
                }), t), T ? o.createElement("span", null, F) : o.createElement(p.N_, {
                    to: V
                }, !E && o.createElement("span", null, F)))
            };
            var g = (0, r.A)(m.A, {
                target: "ec3rnp40"
            })({
                name: "1fqcuui",
                styles: "filter:brightness(1);cursor:pointer;transition:filter 150ms ease;&:hover{filter:brightness(0.3);}"
            })
        },
        99664(e, t, a) {
            a.d(t, {
                A: () => m
            });
            var n = a(15902),
                r = a(81617),
                l = a(28045),
                i = a(19179),
                s = a(96540),
                c = a(56822),
                o = a(16477),
                p = a(6324);
            var d = "Add a new tag";
            const m = function(e) {
                var t = e.onTagAdded,
                    a = (0, s.useState)(d),
                    m = (0, n.A)(a, 2),
                    u = m[0],
                    h = m[1],
                    E = (0, s.useState)(!1),
                    g = (0, n.A)(E, 2),
                    v = g[0],
                    _ = g[1],
                    A = (0, s.useState)(""),
                    y = (0, n.A)(A, 2),
                    f = (y[0], y[1]),
                    w = function() {
                        u !== d && (t && u && t(u), h(d), _(!1))
                    },
                    b = s.createElement("span", null, v ? u : d);
                return v && (b = s.createElement("input", {
                    "aria-label": "Add tag input",
                    type: "text",
                    onChange: function(e) {
                        h(e.target.value)
                    },
                    onKeyUp: function(e) {
                        13 === (e.keyCode || e.charCode) && w()
                    },
                    placeholder: d,
                    className: "transparent-input"
                })), s.createElement(o.A, {
                    className: "tag-badge text-black",
                    color: "success",
                    "aria-label": "Add Tag"
                }, s.createElement("div", {
                    className: (0, c.AH)({
                        name: "flqggv",
                        styles: "float:left;padding:0!important;cursor:pointer"
                    })
                }, s.createElement(p.A, {
                    icon: v ? i.GR : l.QL,
                    className: "me-1",
                    title: v ? "Cancel adding tag" : "Add a new tag",
                    onClick: function() {
                        _(!v), h(d), f("".concat(13, "ch"))
                    },
                    "aria-label": v ? "Cancel tag button" : "Add tag button"
                }), v && s.createElement(p.A, {
                    icon: r.e6,
                    title: "Add this new tag",
                    onClick: w
                })), b)
            }
        },
        2525(e, t, a) {
            a.d(t, {
                A: () => _
            });
            var n = a(23029),
                r = a(92901),
                l = a(9417),
                i = a(85501),
                s = a(34441),
                c = a(53954),
                o = a(38275),
                p = a(96540),
                d = a(6376),
                m = a(30104),
                u = a(15033),
                h = a(44741);

            function E(e) {
                var t = g();
                return function() {
                    var a, n = (0, c.A)(e);
                    if (t) {
                        var r = (0, c.A)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, s.A)(this, a)
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
            var v = function(e) {
                (0, i.A)(a, e);
                var t = E(a);

                function a(e) {
                    var r;
                    return (0, n.A)(this, a), (r = t.call(this, e)).unFavorite = r.unFavorite.bind((0, l.A)(r)), r
                }
                return (0, r.A)(a, [{
                    key: "unFavorite",
                    value: function() {
                        this.props.dispatch((0, h.IO)({
                            favoriteId: this.props.thing.favoriteId,
                            type: this.props.type,
                            group: this.props.thing.favoriteGroup
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            a = t.thing,
                            n = t.type,
                            r = t.assets;
                        try {
                            e = r[n][a.favoriteGroup].filter(function(e) {
                                return e.id === a.id || e.favoriteId === a.favoriteId
                            }).length > 0
                        } catch (t) {
                            console.error(t), e = !1
                        }
                        return e ? p.createElement(m.A, {
                            color: "primary",
                            title: "Remove Favorite",
                            onClick: this.unFavorite
                        }, p.createElement(u.M2, {
                            icon: o.yL
                        }), " Remove Favorite") : null
                    }
                }]), a
            }(p.Component);
            const _ = (0, d.Ng)(function(e) {
                return {
                    assets: e.favorites.assets
                }
            })(v)
        },
        35936(e, t, a) {
            a.d(t, {
                A: () => K
            });
            var n = a(34496),
                r = a(12378),
                l = a(22294),
                i = a(67256),
                s = a(96540),
                c = a(84976),
                o = a(56822),
                p = a(39704),
                d = a(5826),
                m = a(30104),
                u = a(15033),
                h = a(23029),
                E = a(92901),
                g = a(9417),
                v = a(85501),
                _ = a(34441),
                A = a(53954),
                y = a(7514),
                f = a(80961),
                w = a(42357),
                b = a(40990),
                x = a(61362),
                k = a(39281),
                C = a(96720),
                M = a(48887),
                N = a(900),
                D = a(62573),
                I = a(26948),
                S = a(3385),
                R = a(89110),
                W = a(64850),
                O = a(6376),
                T = a(16477),
                L = a(21571),
                F = a.n(L),
                U = a(8367),
                P = (a(99664), a(56136));

            function V(e) {
                var t = B();
                return function() {
                    var a, n = (0, A.A)(e);
                    if (t) {
                        var r = (0, A.A)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, _.A)(this, a)
                }
            }

            function B() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (B = function() {
                    return !!e
                })()
            }
            var G = function(e) {
                (0, v.A)(a, e);
                var t = V(a);

                function a(e) {
                    var n;
                    return (0, h.A)(this, a), (n = t.call(this, e)).handleDeleteTag = n.handleDeleteTag.bind((0, g.A)(n)), n.handleAddTag = n.handleAddTag.bind((0, g.A)(n)), n
                }
                return (0, E.A)(a, [{
                    key: "handleDeleteTag",
                    value: function(e) {
                        this.props.dispatch((0, P.b4)({
                            worldId: this.props.worldId,
                            tagList: e
                        }))
                    }
                }, {
                    key: "handleAddTag",
                    value: function(e) {
                        this.props.dispatch((0, P.Ap)({
                            worldId: this.props.worldId,
                            tagList: e
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.narrow,
                            a = this.props.publicOccupants,
                            n = this.props.privateOccupants,
                            r = this.props.favorites,
                            i = this.props.isMod,
                            c = this.props.popularity,
                            o = this.props.heat,
                            m = this.props.visits,
                            h = this.props.isOwner,
                            E = this.props.reportCount,
                            g = this.props.reportWeight,
                            v = this.props.trust,
                            _ = this.props.capacity,
                            A = this.props.createdDate,
                            O = this.props.lastUpdateDate,
                            L = this.props.labsDate,
                            P = this.props.publicDate,
                            V = this.props.reportReasons,
                            B = this.props.worldId,
                            G = this.props.bops,
                            H = void 0 === G ? null : G,
                            j = (i || h) && null !== H,
                            q = this.props.editableTags,
                            K = this.props.tags;
                        q && (K = this.props.databaseWorld.tags);
                        var z = 3;
                        return t && (z = 2), s.createElement(d.A, null, null != a && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: W.X4
                        }), " ", !t && "Players"), s.createElement("span", null, a)), null != n && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: R.Lk
                        }), " ", !t && "Privates"), s.createElement("span", null, n)), null != r && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: S.yy
                        }), " ", !t && "Favorites"), s.createElement("span", null, r)), i && null != c && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: D.kN
                        }), " ", !t && "Pop/Heat"), s.createElement("span", null, c, s.createElement("strong", null, "—"), o)), !i && null != o && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: I.zf
                        }), " ", !t && "Heat"), s.createElement("span", null, o < 10 && Array.from(Array(o).keys()).map(function(e) {
                            return s.createElement(u.M2, {
                                icon: D.kN,
                                key: e
                            })
                        })), 0 === o && s.createElement("span", null, "0")), null != m && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: N.pS
                        }), " ", !t && "Visits"), s.createElement("span", null, m)), (i || h) && null != E && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: y.pn
                        }), " ", !t && "Reports"), s.createElement("span", null, E)), i && null != g && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: M.GR
                        }), " ", !t && "Report Weight"), s.createElement("span", null, g)), i && null != v && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: C.LP
                        }), " ", !t && "Trust"), s.createElement("span", null, v)), !t && null != _ && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: k.gd
                        }), "  ", !t && "Capacity"), s.createElement("span", null, _)), null != A && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: x.jk
                        }), "  Created"), s.createElement("span", null, F()(A, F().ISO_8601).calendar())), null != O && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: b.rO
                        }), "   Last Update"), s.createElement("span", null, F()(O, F().ISO_8601).calendar())), null != L && F()(L, F().ISO_8601).isValid() && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: l.rI,
                            title: "favorites"
                        }), "  Labs'd"), s.createElement("span", null, F()(L, F().ISO_8601).calendar())), null != P && F()(P).isValid() && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: w.e4,
                            title: "favorites"
                        }), "  Published"), s.createElement("span", null, F()(P, F().ISO_8601).calendar())), j && s.createElement(p.A, {
                            xs: "4",
                            sm: "3",
                            md: z
                        }, s.createElement("h6", null, s.createElement(u.M2, {
                            icon: y.pn
                        }), " ", !t && "Bops"), s.createElement("span", null, s.createElement("a", {
                            download: !0,
                            href: window.apiUrl("/api/1/worlds/".concat(B, "/analytics"))
                        }, H, " ", s.createElement(u.M2, {
                            icon: f.cb
                        })))), K && s.createElement(p.A, {
                            xs: "12",
                            sm: "6",
                            md: t ? "4" : "6"
                        }, s.createElement("div", {
                            className: "tags mt-2 d-flex flex-row flex-wrap"
                        }, K.map(function(t, a) {
                            return s.createElement("div", {
                                key: t + a,
                                className: "mb-2"
                            }, s.createElement(U.A, {
                                tag: t,
                                contentType: "worlds",
                                onDeleteClicked: e.handleDeleteTag,
                                editable: q
                            }))
                        }), !1, null != V && V.map(function(e, t) {
                            return s.createElement(T.A, null, s.createElement("span", {
                                key: e + t,
                                className: "warning"
                            }, s.createElement(u.M2, {
                                icon: y.pn
                            }), " ", e, " "))
                        }))))
                    }
                }]), a
            }(s.Component);
            const H = (0, O.Ng)(function(e, t) {
                return {
                    databaseWorld: e.world.databaseWorld
                }
            })(G);
            var j = a(2525),
                q = a(91069);
            const K = function(e) {
                var t = e.world,
                    a = e.showModTags,
                    h = e.slim,
                    E = e.hideAuthor,
                    g = e.showFavoriteButton,
                    v = t.tags ? Array.from(t.tags) : [],
                    _ = v.concat([t.releaseStatus, "search-container"]),
                    A = new Set(v).has("system_labs"),
                    y = "private" === t.releaseStatus,
                    f = "hidden" === t.releaseStatus;
                a || (v = (v = v.filter(function(e) {
                    return !e.startsWith("admin_")
                })).filter(function(e) {
                    return !e.startsWith("system_")
                }));
                var w = 12;
                return h && (w = 4, _.push("slim")), s.createElement(p.A, {
                    xs: w,
                    className: (0, o.AH)({
                        name: "1efq825",
                        styles: "& .search-container{border:1px solid teal;box-shadow:10px 10px 8px 10px #111;margin:20px;padding:20px;}& .search-container.slim{margin:5px;padding:10px;}& .search-container.system_labs{border:1px solid yellow;}& .search-container.private{border:1px solid grey;}& .search-container.hidden{border:1px solid grey;}& .search-container a{color:white;}& .search-container img{border-radius:5px;max-height:200px;max-width:200px;}"
                    })
                }, s.createElement("div", {
                    className: _.join(" ")
                }, h && s.createElement(d.A, null, s.createElement(p.A, {
                    xs: "12"
                }, s.createElement("h6", null, s.createElement(c.N_, {
                    to: "/home/world/".concat(t.id)
                }, t.name, A && s.createElement("span", null, "  ", s.createElement(u.M2, {
                    icon: l.rI
                }), " "), y && s.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", s.createElement(u.M2, {
                    icon: r.DW
                }), " ")), !E && s.createElement("span", null, " ", s.createElement("small", null, "—  ", s.createElement(c.N_, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName))))), s.createElement(p.A, {
                    xs: "12"
                }, s.createElement(c.N_, {
                    to: "/home/world/".concat(t.id)
                }, s.createElement("img", {
                    className: "w-100",
                    src: (0, q.C_)(t),
                    title: t.displayName,
                    alt: t.displayName
                })), a && s.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, s.createElement(m.A, {
                    "aria-label": "Copy ID",
                    onClick: (0, q.Dk)(t.id),
                    size: "sm"
                }, s.createElement(u.M2, {
                    icon: i.jP,
                    className: "me-2"
                }), "ID")))), !h && s.createElement(d.A, null, s.createElement(p.A, {
                    xs: "12",
                    md: "4"
                }, s.createElement(c.N_, {
                    to: "/home/world/".concat(t.id)
                }, s.createElement("img", {
                    className: "w-100",
                    src: (0, q.C_)(t),
                    title: t.displayName,
                    alt: t.displayName
                }))), s.createElement(p.A, {
                    xs: "12",
                    md: "8"
                }, s.createElement(d.A, null, s.createElement(p.A, {
                    xs: "12",
                    md: "8"
                }, s.createElement("h4", null, s.createElement(c.N_, {
                    to: "/home/world/".concat(t.id)
                }, t.name, A && s.createElement("span", null, "  ", s.createElement(u.M2, {
                    icon: l.rI
                }), " ")), !E && s.createElement("span", null, " ", s.createElement("small", null, "— ", s.createElement(c.N_, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName)))), y && s.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, s.createElement(u.M2, {
                    icon: r.DW
                }), " Private", " "), f && s.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, s.createElement(u.M2, {
                    icon: n.zp
                }), " Deleted!", " ")), s.createElement(p.A, {
                    xs: "12",
                    md: "4",
                    style: {
                        textAlign: "right"
                    }
                }, g && s.createElement(j.A, {
                    thing: t,
                    type: "world"
                }))), s.createElement(d.A, null, s.createElement(p.A, null, s.createElement(H, {
                    worldId: t.id,
                    isMod: a,
                    narrow: a,
                    isOwner: !1,
                    publicOccupants: t.occupants,
                    favorites: t.favorites,
                    popularity: t.popularity,
                    heat: t.heat,
                    visits: t.visits,
                    reportCount: t.rawReportCount,
                    reportWeight: t.rawReportScore,
                    trust: t.level,
                    capacity: t.capacity,
                    createdDate: t.created_at,
                    lastUpdateDate: t.updatedAt,
                    labsDate: t.labsPublicationDate,
                    publicDate: t.publicationDate,
                    tags: v,
                    editableTags: !1
                })))))))
            }
        },
        33515(e, t, a) {
            a.d(t, {
                D: () => D
            });
            var n = a(47034),
                r = a(24556),
                l = a(42357),
                i = a(84014),
                s = a(78244),
                c = a(7573),
                o = a(83159),
                p = a(97840),
                d = a(81617),
                m = a(22294),
                u = a(52169),
                h = a(68415),
                E = a(64173),
                g = a(1871),
                v = a(53021),
                _ = a(54488),
                A = a(97028),
                y = a(64034),
                f = a(511),
                w = a(66988),
                b = a(52699),
                x = a(4588),
                k = a(69482),
                C = a(12378),
                M = a(32110),
                N = a(25848),
                D = [{
                    tag: "admin_moderator",
                    icon: a(76638).R7,
                    description: "VRChat Team"
                }, {
                    tag: "admin_scripting_access",
                    icon: N.jT,
                    description: "Scripting Access"
                }, {
                    tag: "admin_avatar_access",
                    icon: M.bM,
                    description: "Forced Avatar Access"
                }, {
                    tag: "admin_world_access",
                    icon: M.bM,
                    description: "Forced World Access"
                }, {
                    tag: "admin_lock_tags",
                    icon: C.DW,
                    description: "Locked Tags"
                }, {
                    tag: "admin_lock_level",
                    icon: C.DW,
                    description: "Locked Level"
                }, {
                    tag: "admin_can_grant_licenses",
                    icon: k.Fn,
                    description: "Can Grant Licenses"
                }, {
                    tag: "system_world_access",
                    icon: x.h6,
                    description: "SDK World Access"
                }, {
                    tag: "system_avatar_access",
                    icon: x.h6,
                    description: "SDK Avatar Access"
                }, {
                    tag: "system_feedback_access",
                    icon: l.e4,
                    description: "Feedback Access"
                }, {
                    tag: "system_trust_basic",
                    icon: b.WV,
                    description: "New User"
                }, {
                    tag: "system_trust_known",
                    icon: w.NC,
                    description: "User"
                }, {
                    tag: "system_trust_trusted",
                    icon: f.Wr,
                    description: "Known User"
                }, {
                    tag: "system_trust_veteran",
                    icon: y.BN,
                    description: "Trusted User"
                }, {
                    tag: "system_probable_troll",
                    icon: A.Be,
                    description: "Probable Nuisance"
                }, {
                    tag: "system_troll",
                    icon: _.HZ,
                    description: "Nuisance"
                }, {
                    tag: "system_supporter",
                    icon: v.qc,
                    description: "VRC+ Subscriber"
                }, {
                    tag: "system_early_adopter",
                    icon: g.a$,
                    description: "Early VRC+ Adopter"
                }, {
                    tag: "admin_approved",
                    icon: E.Wc,
                    description: "Approved"
                }, {
                    tag: "admin_featured",
                    icon: r.Be,
                    description: "Featured"
                }, {
                    tag: "admin_community_spotlight",
                    icon: r.Be,
                    description: "Community Spotlight"
                }, {
                    tag: "admin_avatar_world",
                    icon: h.yV,
                    description: "Avatar World"
                }, {
                    tag: "admin_hidden",
                    icon: u.Ev,
                    description: "Won't Appear in Search"
                }, {
                    tag: "admin_hide_active",
                    icon: u.Ev,
                    description: "Won't Appear in Active"
                }, {
                    tag: "admin_hide_new",
                    icon: u.Ev,
                    description: "Won't Appear in New"
                }, {
                    tag: "admin_hide_popular",
                    icon: u.Ev,
                    description: "Won't Appear in Popular"
                }, {
                    tag: "system_labs",
                    icon: m.rI,
                    description: "System Labs"
                }, {
                    tag: "system_approved",
                    icon: d.e6,
                    description: "Approved"
                }, {
                    tag: "system_updated_recently",
                    icon: p.BE,
                    description: "Updated Recently"
                }, {
                    tag: "system_created_recently",
                    icon: o.ok,
                    description: "Created Recently"
                }, {
                    tag: "system_published_recently",
                    icon: o.ok,
                    description: "Published Recently"
                }, {
                    tag: "admin_halloween_2018",
                    icon: i.r2,
                    description: "Halloween 2018"
                }, {
                    tag: "admin_halloween_2019",
                    icon: i.r2,
                    description: "Halloween 2019"
                }, {
                    tag: "admin_christmas_2018",
                    icon: c.aG,
                    description: "Christmas 2018"
                }, {
                    tag: "admin_christmas_2019",
                    icon: c.aG,
                    description: "Christmas 2019"
                }, {
                    tag: "admin_spookality_2020_winner",
                    icon: i.r2,
                    description: "Spookality 2020 Winner"
                }, {
                    tag: "admin_vket_summer_2023",
                    icon: s.H3,
                    description: "Vket 2023 Summer"
                }, {
                    tag: "admin_eternally_cursed",
                    icon: i.r2,
                    description: "Eternally Cursed"
                }, {
                    tag: "admin_canny_access",
                    icon: l.e4,
                    description: "Canny Access Override"
                }, {
                    tag: "admin_spotlight_pc",
                    icon: r.Be,
                    description: "Spotlight: PC"
                }, {
                    tag: "admin_spotlight_quest",
                    icon: r.Be,
                    description: "Spotlight: Quest"
                }, {
                    tag: "admin_spotlight_xplat",
                    icon: r.Be,
                    description: "Spotlight: Cross-Platform"
                }, {
                    tag: "admin_internal_world",
                    icon: n.fm,
                    description: "Internal World"
                }]
        }
    }
]);
//# sourceMappingURL=e0ff1e5d8bc5aa4b7de6e056a8fd587fbc43d3d08b7f32efd3e9c1011d94c1af.js.map