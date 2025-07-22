"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [8874], {
        411: (e, t, n) => {
            n.d(t, {
                U$: () => c,
                Vj: () => i,
                dt: () => l,
                rS: () => s
            });
            var a = n(9669),
                r = n.n(a),
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
                c = function(e) {
                    var t = e.group;
                    return {
                        type: "LOAD_FAVORITE_WORLDS",
                        payload: r().get(window.apiUrl("/api/1/worlds/favorites?tag=".concat(t)), {}),
                        meta: {
                            group: t
                        }
                    }
                },
                s = function(e) {
                    var t = e.favoriteId,
                        n = e.type,
                        a = e.group;
                    return {
                        type: "REMOVE_FAVORITE",
                        payload: r().delete(window.apiUrl("/api/1/favorites/".concat(t)), {}),
                        meta: {
                            favoriteId: t,
                            type: n,
                            group: a
                        }
                    }
                }
        },
        44483: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var a = n(54546),
                r = n(4965),
                l = n(42619),
                i = n(59545),
                c = n(34327),
                s = n(81264),
                o = n(67294),
                d = n(79655),
                p = (n(83505), n(25062)),
                m = n(86646),
                u = n(60006),
                h = n(28213);
            const E = function(e) {
                var t, n = e.onDeleteClicked,
                    r = e.tag,
                    m = e.hideDescription,
                    E = e.preventSearch,
                    f = e.editable,
                    y = (e.isMod, (0, o.useState)(!1)),
                    v = (0, a.Z)(y, 2),
                    _ = v[0],
                    Z = v[1],
                    w = (0, o.useState)(!1),
                    b = (0, a.Z)(w, 2),
                    x = b[0],
                    A = b[1],
                    C = (0, o.useState)(!1),
                    k = (0, a.Z)(C, 2),
                    S = k[0],
                    R = k[1],
                    D = (0, o.useState)(!1),
                    $ = (0, a.Z)(D, 2),
                    I = ($[0], $[1]),
                    N = f,
                    T = E || !1,
                    U = s.ol,
                    O = r,
                    L = "secondary";
                if (null == r) return null;
                if ("string" != typeof r) return console.error("Malformed tag."), null;
                (r.startsWith("admin") || r.startsWith("system")) && (U = c.LE), r.startsWith("author_tag") && (U = c.LE, O = r.replace("author_tag_", ""));
                var W = h.w.filter((function(e) {
                    return e.tag === r
                }));
                W[0] && (U = W[0].icon, O = W[0].description), _ && (U = i.NB), x && S && (L = "danger"), S && (t = o.createElement(g, {
                    icon: l.$,
                    title: "Delete this tag",
                    onMouseLeave: function() {
                        I(!1)
                    },
                    onMouseEnter: function() {
                        I(!0)
                    },
                    onClick: function() {
                        n && N && n(r)
                    }
                }));
                var P = "/home/search/".concat(O);
                return o.createElement(p.Z, {
                    "aria-label": "tag",
                    className: "tag-badge me-2 d-flex",
                    onMouseEnter: function() {
                        N && Z(!0)
                    },
                    onMouseLeave: function() {
                        N && (Z(!1), R(!1))
                    },
                    color: L
                }, o.createElement(u.X2, {
                    onMouseEnter: function() {
                        N && A(!0)
                    },
                    onMouseLeave: function() {
                        N && A(!1)
                    },
                    className: "me-2"
                }, o.createElement(g, {
                    icon: U,
                    title: O,
                    className: "me-1",
                    onClick: function() {
                        N && R(!S)
                    }
                }), t), T ? o.createElement("span", null, O) : o.createElement(d.rU, {
                    to: P
                }, !m && o.createElement("span", null, O)))
            };
            var g = (0, r.Z)(m.Z, {
                target: "ec3rnp40"
            })({
                name: "1fqcuui",
                styles: "filter:brightness(1);cursor:pointer;transition:filter 150ms ease;&:hover{filter:brightness(0.3);}"
            })
        },
        90346: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var a = n(54546),
                r = n(68055),
                l = n(40098),
                i = n(59545),
                c = n(67294),
                s = n(83505),
                o = n(25062),
                d = n(86646);
            var p = "Add a new tag";
            const m = function(e) {
                var t = e.onTagAdded,
                    n = (0, c.useState)(p),
                    m = (0, a.Z)(n, 2),
                    u = m[0],
                    h = m[1],
                    E = (0, c.useState)(!1),
                    g = (0, a.Z)(E, 2),
                    f = g[0],
                    y = g[1],
                    v = (0, c.useState)(""),
                    _ = (0, a.Z)(v, 2),
                    Z = (_[0], _[1]),
                    w = function() {
                        u !== p && (t && u && t(u), h(p), y(!1))
                    },
                    b = c.createElement("span", null, f ? u : p);
                return f && (b = c.createElement("input", {
                    "aria-label": "Add tag input",
                    type: "text",
                    onChange: function(e) {
                        h(e.target.value)
                    },
                    onKeyUp: function(e) {
                        13 === (e.keyCode || e.charCode) && w()
                    },
                    placeholder: p,
                    className: "transparent-input"
                })), c.createElement(o.Z, {
                    className: "tag-badge text-black",
                    color: "success",
                    "aria-label": "Add Tag"
                }, c.createElement("div", {
                    className: (0, s.iv)({
                        name: "flqggv",
                        styles: "float:left;padding:0!important;cursor:pointer"
                    })
                }, c.createElement(d.Z, {
                    icon: f ? i.NB : l.r8,
                    className: "me-1",
                    title: f ? "Cancel adding tag" : "Add a new tag",
                    onClick: function() {
                        y(!f), h(p), Z("".concat(13, "ch"))
                    },
                    "aria-label": f ? "Cancel tag button" : "Add tag button"
                }), f && c.createElement(d.Z, {
                    icon: r.LE,
                    title: "Add this new tag",
                    onClick: w
                })), b)
            }
        },
        55694: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var a = n(15671),
                r = n(43144),
                l = n(97326),
                i = n(60136),
                c = n(82963),
                s = n(61120),
                o = n(42619),
                d = n(67294),
                p = n(32981),
                m = n(34698),
                u = n(46382),
                h = n(411);

            function E(e) {
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
                    var n, a = (0, s.Z)(e);
                    if (t) {
                        var r = (0, s.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var g = function(e) {
                (0, i.Z)(n, e);
                var t = E(n);

                function n(e) {
                    var r;
                    return (0, a.Z)(this, n), (r = t.call(this, e)).unFavorite = r.unFavorite.bind((0, l.Z)(r)), r
                }
                return (0, r.Z)(n, [{
                    key: "unFavorite",
                    value: function() {
                        this.props.dispatch((0, h.rS)({
                            favoriteId: this.props.thing.favoriteId,
                            type: this.props.type,
                            group: this.props.thing.favoriteGroup
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.thing,
                            a = t.type,
                            r = t.assets;
                        try {
                            e = r[a][n.favoriteGroup].filter((function(e) {
                                return e.id === n.id || e.favoriteId === n.favoriteId
                            })).length > 0
                        } catch (t) {
                            console.error(t), e = !1
                        }
                        return e ? d.createElement(m.Z, {
                            color: "primary",
                            title: "Remove Favorite",
                            onClick: this.unFavorite
                        }, d.createElement(u.$1, {
                            icon: o.$
                        }), " Remove Favorite") : null
                    }
                }]), n
            }(d.Component);
            const f = (0, p.$j)((function(e) {
                return {
                    assets: e.favorites.assets
                }
            }))(g)
        },
        88874: (e, t, n) => {
            n.d(t, {
                Z: () => H
            });
            var a = n(76553),
                r = n(609),
                l = n(17726),
                i = n(2909),
                c = n(67294),
                s = n(79655),
                o = n(83505),
                d = n(95305),
                p = n(35773),
                m = n(34698),
                u = n(46382),
                h = n(15671),
                E = n(43144),
                g = n(97326),
                f = n(60136),
                y = n(82963),
                v = n(61120),
                _ = n(47947),
                Z = n(40767),
                w = n(76409),
                b = n(34601),
                x = n(30856),
                A = n(46357),
                C = n(48590),
                k = n(32099),
                S = n(20446),
                R = n(20821),
                D = n(5147),
                $ = n(13461),
                I = n(11298),
                N = n(27879),
                T = n(32981),
                U = n(25062),
                O = n(94606),
                L = n.n(O),
                W = n(44483),
                P = (n(90346), n(67947));

            function F(e) {
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
                    var n, a = (0, v.Z)(e);
                    if (t) {
                        var r = (0, v.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, y.Z)(this, n)
                }
            }
            var V = function(e) {
                (0, f.Z)(n, e);
                var t = F(n);

                function n(e) {
                    var a;
                    return (0, h.Z)(this, n), (a = t.call(this, e)).handleDeleteTag = a.handleDeleteTag.bind((0, g.Z)(a)), a.handleAddTag = a.handleAddTag.bind((0, g.Z)(a)), a
                }
                return (0, E.Z)(n, [{
                    key: "handleDeleteTag",
                    value: function(e) {
                        this.props.dispatch((0, P.tc)({
                            worldId: this.props.worldId,
                            tagList: e
                        }))
                    }
                }, {
                    key: "handleAddTag",
                    value: function(e) {
                        this.props.dispatch((0, P._U)({
                            worldId: this.props.worldId,
                            tagList: e
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.narrow,
                            n = this.props.publicOccupants,
                            a = this.props.privateOccupants,
                            r = this.props.favorites,
                            i = this.props.isMod,
                            s = this.props.popularity,
                            o = this.props.heat,
                            m = this.props.visits,
                            h = this.props.isOwner,
                            E = this.props.reportCount,
                            g = this.props.reportWeight,
                            f = this.props.trust,
                            y = this.props.capacity,
                            v = this.props.createdDate,
                            T = this.props.lastUpdateDate,
                            O = this.props.labsDate,
                            P = this.props.publicDate,
                            F = this.props.reportReasons,
                            V = this.props.worldId,
                            M = this.props.bops,
                            j = void 0 === M ? null : M,
                            B = (i || h) && null !== j,
                            H = this.props.editableTags,
                            q = this.props.tags;
                        H && (q = this.props.databaseWorld.tags);
                        var G = 3;
                        return t && (G = 2), c.createElement(p.Z, null, null != n && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: N.IL
                        }), " ", !t && "Players"), c.createElement("span", null, n)), null != a && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: I.BC
                        }), " ", !t && "Privates"), c.createElement("span", null, a)), null != r && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: $.T
                        }), " ", !t && "Favorites"), c.createElement("span", null, r)), i && null != s && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: R.Rp
                        }), " ", !t && "Pop/Heat"), c.createElement("span", null, s, c.createElement("strong", null, "—"), o)), !i && null != o && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: D.$c
                        }), " ", !t && "Heat"), c.createElement("span", null, o < 10 && Array.from(Array(o).keys()).map((function(e) {
                            return c.createElement(u.$1, {
                                icon: R.Rp,
                                key: e
                            })
                        }))), 0 === o && c.createElement("span", null, "0")), null != m && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: S.Md
                        }), " ", !t && "Visits"), c.createElement("span", null, m)), (i || h) && null != E && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: _.JH
                        }), " ", !t && "Reports"), c.createElement("span", null, E)), i && null != g && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: k.DL
                        }), " ", !t && "Report Weight"), c.createElement("span", null, g)), i && null != f && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: C.O7
                        }), " ", !t && "Trust"), c.createElement("span", null, f)), !t && null != y && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: A.FV
                        }), "  ", !t && "Capacity"), c.createElement("span", null, y)), null != v && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: x.CP
                        }), "  Created"), c.createElement("span", null, L()(v, L().ISO_8601).calendar())), null != T && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: b.r6
                        }), "   Last Update"), c.createElement("span", null, L()(T, L().ISO_8601).calendar())), null != O && L()(O, L().ISO_8601).isValid() && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: l.jZ,
                            title: "favorites"
                        }), "  Labs'd"), c.createElement("span", null, L()(O, L().ISO_8601).calendar())), null != P && L()(P).isValid() && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: "3"
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: w.Ac,
                            title: "favorites"
                        }), "  Published"), c.createElement("span", null, L()(P, L().ISO_8601).calendar())), B && c.createElement(d.Z, {
                            xs: "4",
                            sm: "3",
                            md: G
                        }, c.createElement("h6", null, c.createElement(u.$1, {
                            icon: _.JH
                        }), " ", !t && "Bops"), c.createElement("span", null, c.createElement("a", {
                            download: !0,
                            href: window.apiUrl("/api/1/worlds/".concat(V, "/analytics"))
                        }, j, " ", c.createElement(u.$1, {
                            icon: Z.q7
                        })))), q && c.createElement(d.Z, {
                            xs: "12",
                            sm: "6",
                            md: t ? "4" : "6"
                        }, c.createElement("div", {
                            className: "tags mt-2 d-flex flex-row flex-wrap"
                        }, q.map((function(t, n) {
                            return c.createElement("div", {
                                key: t + n,
                                className: "mb-2"
                            }, c.createElement(W.Z, {
                                tag: t,
                                onDeleteClicked: e.handleDeleteTag,
                                editable: H
                            }))
                        })), !1, null != F && F.map((function(e, t) {
                            return c.createElement(U.Z, null, c.createElement("span", {
                                key: e + t,
                                className: "warning"
                            }, c.createElement(u.$1, {
                                icon: _.JH
                            }), " ", e, " "))
                        })))))
                    }
                }]), n
            }(c.Component);
            const M = (0, T.$j)((function(e, t) {
                return {
                    databaseWorld: e.world.databaseWorld
                }
            }))(V);
            var j = n(55694),
                B = n(64358);
            const H = function(e) {
                var t = e.world,
                    n = e.showModTags,
                    h = e.slim,
                    E = e.hideAuthor,
                    g = e.showFavoriteButton,
                    f = t.tags ? Array.from(t.tags) : [],
                    y = f.concat([t.releaseStatus, "search-container"]),
                    v = new Set(f).has("system_labs"),
                    _ = "private" === t.releaseStatus,
                    Z = "hidden" === t.releaseStatus;
                n || (f = (f = f.filter((function(e) {
                    return !e.startsWith("admin_")
                }))).filter((function(e) {
                    return !e.startsWith("system_")
                })));
                var w = 12;
                return h && (w = 4, y.push("slim")), c.createElement(d.Z, {
                    xs: w,
                    className: (0, o.iv)({
                        name: "1efq825",
                        styles: "& .search-container{border:1px solid teal;box-shadow:10px 10px 8px 10px #111;margin:20px;padding:20px;}& .search-container.slim{margin:5px;padding:10px;}& .search-container.system_labs{border:1px solid yellow;}& .search-container.private{border:1px solid grey;}& .search-container.hidden{border:1px solid grey;}& .search-container a{color:white;}& .search-container img{border-radius:5px;max-height:200px;max-width:200px;}"
                    })
                }, c.createElement("div", {
                    className: y.join(" ")
                }, h && c.createElement(p.Z, null, c.createElement(d.Z, {
                    xs: "12"
                }, c.createElement("h6", null, c.createElement(s.rU, {
                    to: "/home/world/".concat(t.id)
                }, t.name, v && c.createElement("span", null, "  ", c.createElement(u.$1, {
                    icon: l.jZ
                }), " "), _ && c.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, "  ", c.createElement(u.$1, {
                    icon: r.by
                }), " ")), !E && c.createElement("span", null, " ", c.createElement("small", null, "—  ", c.createElement(s.rU, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName))))), c.createElement(d.Z, {
                    xs: "12"
                }, c.createElement(s.rU, {
                    to: "/home/world/".concat(t.id)
                }, c.createElement("img", {
                    className: "w-100",
                    src: (0, B.cq)(t),
                    title: t.displayName,
                    alt: t.displayName
                })), n && c.createElement("div", {
                    className: "d-flex justify-content-between mt-2"
                }, c.createElement(m.Z, {
                    "aria-label": "Copy ID",
                    onClick: (0, B.zp)(t.id),
                    size: "sm"
                }, c.createElement(u.$1, {
                    icon: i.kZ,
                    className: "me-2"
                }), "ID")))), !h && c.createElement(p.Z, null, c.createElement(d.Z, {
                    xs: "12",
                    md: "4"
                }, c.createElement(s.rU, {
                    to: "/home/world/".concat(t.id)
                }, c.createElement("img", {
                    className: "w-100",
                    src: (0, B.cq)(t),
                    title: t.displayName,
                    alt: t.displayName
                }))), c.createElement(d.Z, {
                    xs: "12",
                    md: "8"
                }, c.createElement(p.Z, null, c.createElement(d.Z, {
                    xs: "12",
                    md: "8"
                }, c.createElement("h4", null, c.createElement(s.rU, {
                    to: "/home/world/".concat(t.id)
                }, t.name, v && c.createElement("span", null, "  ", c.createElement(u.$1, {
                    icon: l.jZ
                }), " ")), !E && c.createElement("span", null, " ", c.createElement("small", null, "— ", c.createElement(s.rU, {
                    to: "/home/user/".concat(t.authorId)
                }, t.authorName)))), _ && c.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, c.createElement(u.$1, {
                    icon: r.by
                }), " Private", " "), Z && c.createElement("span", {
                    style: {
                        color: "red"
                    }
                }, c.createElement(u.$1, {
                    icon: a.eH
                }), " Deleted!", " ")), c.createElement(d.Z, {
                    xs: "12",
                    md: "4",
                    style: {
                        textAlign: "right"
                    }
                }, g && c.createElement(j.Z, {
                    thing: t,
                    type: "world"
                }))), c.createElement(p.Z, null, c.createElement(d.Z, null, c.createElement(M, {
                    worldId: t.id,
                    isMod: n,
                    narrow: n,
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
                    tags: f,
                    editableTags: !1
                })))))))
            }
        },
        28213: (e, t, n) => {
            n.d(t, {
                w: () => R
            });
            var a = n(95819),
                r = n(92728),
                l = n(76409),
                i = n(51193),
                c = n(68335),
                s = n(54228),
                o = n(85322),
                d = n(54326),
                p = n(68055),
                m = n(17726),
                u = n(16995),
                h = n(66007),
                E = n(59895),
                g = n(42137),
                f = n(34604),
                y = n(23778),
                v = n(88673),
                _ = n(26128),
                Z = n(47420),
                w = n(29167),
                b = n(92221),
                x = n(88302),
                A = n(46450),
                C = n(609),
                k = n(84176),
                S = n(75213),
                R = [{
                    tag: "admin_moderator",
                    icon: n(2335).fG,
                    description: "VRChat Team"
                }, {
                    tag: "admin_scripting_access",
                    icon: S.dT,
                    description: "Scripting Access"
                }, {
                    tag: "admin_avatar_access",
                    icon: k.DD,
                    description: "Forced Avatar Access"
                }, {
                    tag: "admin_world_access",
                    icon: k.DD,
                    description: "Forced World Access"
                }, {
                    tag: "admin_lock_tags",
                    icon: C.by,
                    description: "Locked Tags"
                }, {
                    tag: "admin_lock_level",
                    icon: C.by,
                    description: "Locked Level"
                }, {
                    tag: "admin_can_grant_licenses",
                    icon: A.mG,
                    description: "Can Grant Licenses"
                }, {
                    tag: "system_world_access",
                    icon: x.kl,
                    description: "SDK World Access"
                }, {
                    tag: "system_avatar_access",
                    icon: x.kl,
                    description: "SDK Avatar Access"
                }, {
                    tag: "system_feedback_access",
                    icon: l.Ac,
                    description: "Feedback Access"
                }, {
                    tag: "system_trust_basic",
                    icon: b.rv,
                    description: "New User"
                }, {
                    tag: "system_trust_known",
                    icon: w.C7,
                    description: "User"
                }, {
                    tag: "system_trust_trusted",
                    icon: Z.yS,
                    description: "Known User"
                }, {
                    tag: "system_trust_veteran",
                    icon: _.jA,
                    description: "Trusted User"
                }, {
                    tag: "system_probable_troll",
                    icon: v.I7,
                    description: "Probable Nuisance"
                }, {
                    tag: "system_troll",
                    icon: y.c7,
                    description: "Nuisance"
                }, {
                    tag: "system_supporter",
                    icon: f.m6,
                    description: "VRC+ Subscriber"
                }, {
                    tag: "system_early_adopter",
                    icon: g.SZ,
                    description: "Early VRC+ Adopter"
                }, {
                    tag: "admin_approved",
                    icon: E.u8,
                    description: "Approved"
                }, {
                    tag: "admin_featured",
                    icon: r.QY,
                    description: "Featured"
                }, {
                    tag: "admin_community_spotlight",
                    icon: r.QY,
                    description: "Community Spotlight"
                }, {
                    tag: "admin_avatar_world",
                    icon: h.KC,
                    description: "Avatar World"
                }, {
                    tag: "admin_hidden",
                    icon: u.Ps,
                    description: "Won't Appear in Search"
                }, {
                    tag: "admin_hide_active",
                    icon: u.Ps,
                    description: "Won't Appear in Active"
                }, {
                    tag: "admin_hide_new",
                    icon: u.Ps,
                    description: "Won't Appear in New"
                }, {
                    tag: "admin_hide_popular",
                    icon: u.Ps,
                    description: "Won't Appear in Popular"
                }, {
                    tag: "system_labs",
                    icon: m.jZ,
                    description: "System Labs"
                }, {
                    tag: "system_approved",
                    icon: p.LE,
                    description: "Approved"
                }, {
                    tag: "system_updated_recently",
                    icon: d.IV,
                    description: "Updated Recently"
                }, {
                    tag: "system_created_recently",
                    icon: o.fT,
                    description: "Created Recently"
                }, {
                    tag: "system_published_recently",
                    icon: o.fT,
                    description: "Published Recently"
                }, {
                    tag: "admin_halloween_2018",
                    icon: i.dC,
                    description: "Halloween 2018"
                }, {
                    tag: "admin_halloween_2019",
                    icon: i.dC,
                    description: "Halloween 2019"
                }, {
                    tag: "admin_christmas_2018",
                    icon: s.mb,
                    description: "Christmas 2018"
                }, {
                    tag: "admin_christmas_2019",
                    icon: s.mb,
                    description: "Christmas 2019"
                }, {
                    tag: "admin_spookality_2020_winner",
                    icon: i.dC,
                    description: "Spookality 2020 Winner"
                }, {
                    tag: "admin_vket_summer_2023",
                    icon: c.vJ,
                    description: "Vket 2023 Summer"
                }, {
                    tag: "admin_eternally_cursed",
                    icon: i.dC,
                    description: "Eternally Cursed"
                }, {
                    tag: "admin_canny_access",
                    icon: l.Ac,
                    description: "Canny Access Override"
                }, {
                    tag: "admin_spotlight_pc",
                    icon: r.QY,
                    description: "Spotlight: PC"
                }, {
                    tag: "admin_spotlight_quest",
                    icon: r.QY,
                    description: "Spotlight: Quest"
                }, {
                    tag: "admin_spotlight_xplat",
                    icon: r.QY,
                    description: "Spotlight: Cross-Platform"
                }, {
                    tag: "admin_internal_world",
                    icon: a.U,
                    description: "Internal World"
                }]
        }
    }
]);
//# sourceMappingURL=65246e200827e09acb5914cb2ac15b58074f93f5b0eeb8745fd2e2a9bb74badc.js.map