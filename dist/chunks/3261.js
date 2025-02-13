"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [3261], {
        93261: (r, e, t) => {
            t.d(e, {
                A4: () => F,
                Aw: () => P,
                CL: () => S,
                DU: () => Z,
                E8: () => R,
                Eg: () => T,
                FW: () => g,
                G_: () => z,
                HT: () => yr,
                LA: () => W,
                M7: () => ur,
                MQ: () => sr,
                Pi: () => _,
                Pt: () => h,
                Pv: () => rr,
                QA: () => G,
                Rx: () => ar,
                Sp: () => Q,
                V3: () => O,
                VF: () => L,
                VR: () => V,
                Vc: () => J,
                WG: () => m,
                XK: () => k,
                _n: () => D,
                ci: () => lr,
                d3: () => w,
                dZ: () => j,
                dj: () => C,
                dl: () => y,
                dt: () => v,
                ek: () => gr,
                gx: () => M,
                hE: () => cr,
                hg: () => H,
                i2: () => f,
                jP: () => E,
                l5: () => or,
                mA: () => dr,
                mN: () => q,
                mm: () => I,
                mt: () => N,
                nm: () => tr,
                nz: () => Y,
                pI: () => ir,
                r5: () => x,
                rq: () => Gr,
                rw: () => $,
                t$: () => b,
                tN: () => l,
                uX: () => pr,
                v5: () => U,
                vb: () => X,
                w$: () => A,
                xI: () => K,
                xS: () => er,
                xm: () => B,
                zv: () => nr
            });
            var u = t(4942),
                o = t(15861),
                n = t(64687),
                a = t.n(n),
                s = t(64358),
                i = t(61509);

            function p(r, e) {
                var t = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(r);
                    e && (u = u.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.push.apply(t, u)
                }
                return t
            }

            function d(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(t), !0).forEach((function(e) {
                        (0, u.Z)(r, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return r
            }
            var c = i.S.injectEndpoints({
                    endpoints: function(r) {
                        return {
                            createGroup: r.mutation({
                                queryFn: (t = (0, o.Z)(a().mark((function r(e, t, u, o) {
                                    var n, s, i, p, c, l, g, y, G, v, m, f, I, b, T, q, M, h, P, R, E, k, S;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (i = e.banner, p = void 0 === i ? null : i, c = e.bannerId, l = void 0 === c ? null : c, g = e.icon, y = void 0 === g ? null : g, G = e.iconId, v = void 0 === G ? null : G, m = e.tag, f = void 0 === m ? "gallery" : m, I = e.name, b = e.description, T = void 0 === b ? "" : b, q = e.joinState, M = e.privacy, h = e.shortCode, P = e.roleTemplate, R = void 0 === P ? "default" : P, !p) {
                                                    r.next = 7;
                                                    break
                                                }
                                                return r.next = 4, o({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: (t = void 0, t = new FormData, t.append("file", p), t.append("tag", f), t)
                                                });
                                            case 4:
                                                r.t0 = r.sent, r.next = 8;
                                                break;
                                            case 7:
                                                r.t0 = null;
                                            case 8:
                                                if (null == (E = r.t0) || !E.error) {
                                                    r.next = 11;
                                                    break
                                                }
                                                return r.abrupt("return", {
                                                    error: E.error
                                                });
                                            case 11:
                                                if (!y) {
                                                    r.next = 17;
                                                    break
                                                }
                                                return r.next = 14, o({
                                                    url: "file/image",
                                                    method: "POST",
                                                    body: function() {
                                                        var r = new FormData;
                                                        return r.append("file", y), r.append("tag", f), r
                                                    }()
                                                });
                                            case 14:
                                                r.t1 = r.sent, r.next = 18;
                                                break;
                                            case 17:
                                                r.t1 = null;
                                            case 18:
                                                if (null == (k = r.t1) || !k.error) {
                                                    r.next = 21;
                                                    break
                                                }
                                                return r.abrupt("return", {
                                                    error: k.error
                                                });
                                            case 21:
                                                return r.next = 23, o({
                                                    url: "groups",
                                                    method: "POST",
                                                    body: {
                                                        bannerId: E ? null == E || null === (n = E.data) || void 0 === n ? void 0 : n.id : l,
                                                        iconId: k ? null == k || null === (s = k.data) || void 0 === s ? void 0 : s.id : v,
                                                        name: I,
                                                        description: T,
                                                        joinState: q,
                                                        privacy: M,
                                                        shortCode: h,
                                                        roleTemplate: R
                                                    }
                                                });
                                            case 23:
                                                if (null == (S = r.sent) || !S.error) {
                                                    r.next = 26;
                                                    break
                                                }
                                                return r.abrupt("return", {
                                                    error: S.error
                                                });
                                            case 26:
                                                return r.abrupt("return", {
                                                    data: d(d({
                                                        group: S.data
                                                    }, (null == E ? void 0 : E.data) && {
                                                        banner: E.data
                                                    }), (null == k ? void 0 : k.data) && {
                                                        icon: k.data
                                                    })
                                                });
                                            case 27:
                                            case "end":
                                                return r.stop()
                                        }
                                        var t
                                    }), r)
                                }))), function(r, e, u, o) {
                                    return t.apply(this, arguments)
                                }),
                                invalidatesTags: function(r, e, t) {
                                    var u = t.tag;
                                    return [{
                                        type: "Groups"
                                    }, {
                                        type: "Group",
                                        id: r.group.id
                                    }, {
                                        type: "FilesForTag",
                                        id: "PARTIAL-LIST:".concat(u)
                                    }, {
                                        type: "UserGalleryPictures",
                                        id: r.group.ownerId
                                    }]
                                }
                            }),
                            getGroupById: r.query({
                                queryFn: function(r, e, t, u) {
                                    return (0, o.Z)(a().mark((function e() {
                                        var t, n, s, i, p, c, l, g, y, G, v;
                                        return a().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = r.groupId, n = r.includeRoles, s = void 0 === n || n, i = r.purpose, p = void 0 === i ? "other" : i, e.next = 3, u({
                                                        url: "/groups/".concat(t),
                                                        params: {
                                                            includeRoles: s,
                                                            purpose: p
                                                        }
                                                    });
                                                case 3:
                                                    if (!(c = e.sent).error) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", {
                                                        error: c.error
                                                    });
                                                case 6:
                                                    return l = c.data, g = "softdeleted" === l.membershipStatus, y = 3 === Object.keys(l).length, G = function() {
                                                        var r = (0, o.Z)(a().mark((function r() {
                                                            var e, t;
                                                            return a().wrap((function(r) {
                                                                for (;;) switch (r.prev = r.next) {
                                                                    case 0:
                                                                        if (!y) {
                                                                            r.next = 2;
                                                                            break
                                                                        }
                                                                        return r.abrupt("return", null);
                                                                    case 2:
                                                                        return r.next = 4, u("users/".concat(l.ownerId));
                                                                    case 4:
                                                                        if (!(e = r.sent).error) {
                                                                            r.next = 7;
                                                                            break
                                                                        }
                                                                        return r.abrupt("return", {
                                                                            error: e.error
                                                                        });
                                                                    case 7:
                                                                        return t = e.data, r.abrupt("return", d(d({}, t), {}, {
                                                                            joinedAt: l.createdAt
                                                                        }));
                                                                    case 9:
                                                                    case "end":
                                                                        return r.stop()
                                                                }
                                                            }), r)
                                                        })));
                                                        return function() {
                                                            return r.apply(this, arguments)
                                                        }
                                                    }(), v = function() {
                                                        var r;
                                                        return null != l && l.myMember && null != l && l.roles ? null == l || null === (r = l.roles) || void 0 === r ? void 0 : r.map((function(r) {
                                                            var e;
                                                            return null != l && null !== (e = l.myMember) && void 0 !== e && null !== (e = e.roleIds) && void 0 !== e && e.includes(r.id) ? r.order : Number.MAX_SAFE_INTEGER
                                                        })).sort((function(r, e) {
                                                            return r - e
                                                        }))[0] : Number.MAX_SAFE_INTEGER
                                                    }, e.t0 = d, e.t1 = d({}, l), e.t2 = {}, e.t3 = g, e.t4 = y, e.t5 = v(), e.next = 19, G();
                                                case 19:
                                                    return e.t6 = e.sent, e.t7 = {
                                                        isSoftDeleted: e.t3,
                                                        isSoftDeleting: e.t4,
                                                        memberRank: e.t5,
                                                        ownerData: e.t6
                                                    }, e.t8 = (0, e.t0)(e.t1, e.t2, e.t7), e.abrupt("return", {
                                                        data: e.t8
                                                    });
                                                case 23:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))()
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "Group",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupsForUser: r.query({
                                query: function(r) {
                                    var e = r.userId;
                                    return "/users/".concat(e, "/groups")
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "UserGroups",
                                        id: t.userId
                                    }]
                                }
                            }),
                            getGroupPosts: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.n,
                                        u = r.pageValue,
                                        o = r.publicOnly;
                                    return {
                                        url: "/groups/".concat(e, "/posts"),
                                        method: "GET",
                                        params: d(d({}, (0, s.ue)({
                                            n: t,
                                            pageValue: u
                                        })), {}, {
                                            publicOnly: o
                                        })
                                    }
                                },
                                transformResponse: function(r, e, t) {
                                    var u, o = t.pageValue,
                                        n = t.n;
                                    return d(d({}, r), {}, {
                                        offset: (0, s.ue)({
                                            n,
                                            pageValue: o
                                        }).offset,
                                        isLastPage: (0, s.L6)({
                                            n,
                                            pageResultsLength: null === (u = r.posts) || void 0 === u ? void 0 : u.length,
                                            pageValue: o,
                                            total: r.total
                                        })
                                    })
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupPosts",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            createGroupPost: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.text,
                                        u = r.title,
                                        o = r.imageId,
                                        n = r.sendNotification,
                                        a = void 0 === n || n,
                                        s = r.roleIds,
                                        i = void 0 === s ? [] : s,
                                        p = r.visibility,
                                        d = void 0 === p ? "group" : p;
                                    return {
                                        url: "/groups/".concat(e, "/posts"),
                                        method: "POST",
                                        body: {
                                            text: t,
                                            title: u,
                                            imageId: o,
                                            sendNotification: a,
                                            roleIds: i,
                                            visibility: d
                                        }
                                    }
                                },
                                invalidatesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupPosts",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            deleteGroupPost: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.postId;
                                    return {
                                        url: "/groups/".concat(e, "/posts/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupPosts",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupActiveInstances: r.query({
                                query: function(r) {
                                    var e = r.groupId;
                                    return "/groups/".concat(e, "/instances")
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupActiveInstances",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupsPermissions: r.query({
                                query: function(r) {
                                    var e = r.groupId;
                                    return "/groups/".concat(e, "/permissions")
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupPermissions",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getAllUserGroupsPermissions: r.query({
                                query: function(r) {
                                    var e = r.userId;
                                    return "/users/".concat(e, "/groups/permissions")
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "UserGroupsPermissions",
                                        id: t.userId
                                    }]
                                }
                            }),
                            getGroupReports: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/users/".concat(t, "/feedback?contentId=").concat(e, "&metadata=true")
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupFeedback",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            createGroupReports: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.reasons,
                                        u = r.locations,
                                        o = r.description;
                                    return {
                                        url: "/feedbacks/group/".concat(e),
                                        method: "POST",
                                        body: {
                                            type: "report",
                                            reasons: t,
                                            locations: u,
                                            description: o
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    return [{
                                        type: "GroupFeedback",
                                        id: r.groupId
                                    }]
                                }))
                            }),
                            updateGroupTags: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.tags;
                                    return {
                                        url: "/groups/".concat(e),
                                        method: "PUT",
                                        body: {
                                            tags: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }]
                                }))
                            }),
                            removeGroupIconAndBanner: r.mutation({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e),
                                        method: "PUT",
                                        body: {
                                            bannerId: null,
                                            iconId: null
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }]
                                }))
                            }),
                            updateGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.data;
                                    return {
                                        url: "/groups/".concat(e),
                                        method: "PUT",
                                        body: d({}, t)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }]
                                }))
                            }),
                            deleteGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.hardDelete,
                                        u = void 0 !== t && t;
                                    return {
                                        url: "/groups/".concat(e),
                                        method: "DELETE",
                                        params: {
                                            hardDelete: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Groups"
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }, {
                                        type: "UserGroups"
                                    }, {
                                        type: "UserListings"
                                    }, {
                                        type: "UserProducts"
                                    }]
                                }))
                            }),
                            getGroupMembers: r.query({
                                queryFn: function(r, e, t, u) {
                                    return (0, o.Z)(a().mark((function e() {
                                        var t, o, n, s, i, p, c, l, g, y, G;
                                        return a().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = r.groupId, o = r.perPage, n = void 0 === o ? 25 : o, s = r.page, i = void 0 === s ? 0 : s, p = r.roleId, c = void 0 === p ? null : p, l = r.sort, g = void 0 === l ? null : l, e.next = 3, u({
                                                        url: "/groups/".concat(t, "/members"),
                                                        params: {
                                                            n,
                                                            offset: i * n,
                                                            roleId: null !== c ? c : void 0,
                                                            sort: null !== g ? g : void 0
                                                        }
                                                    });
                                                case 3:
                                                    if (!(y = e.sent).error) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", {
                                                        error: y.error
                                                    });
                                                case 6:
                                                    return G = {
                                                        members: y.data,
                                                        isLastPage: y.data.length < n
                                                    }, e.abrupt("return", {
                                                        data: d({
                                                            page: i
                                                        }, G)
                                                    });
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))()
                                },
                                providesTags: function(r, e, t) {
                                    var u = t.groupId;
                                    return [{
                                        type: "GroupMembers",
                                        id: u
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(u, "-").concat(null == r ? void 0 : r.page)
                                    }]
                                }
                            }),
                            getSearchGroupMembers: r.query({
                                query: function(r) {
                                    return {
                                        url: "/groups/".concat(r.groupId, "/members/search"),
                                        params: (0, s.Ld)(r)
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    t.groupId;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }]
                                },
                                transformResponse: function(r, e, t) {
                                    var u, o = t.pageValue,
                                        n = t.n;
                                    return d(d({}, r), {}, {
                                        isLastPage: (0, s.L6)({
                                            n,
                                            pageResultsLength: null === (u = r.results) || void 0 === u ? void 0 : u.length,
                                            pageValue: o,
                                            total: r.total
                                        })
                                    })
                                }
                            }),
                            joinGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.inviteId,
                                        u = r.confirmOverrideBlock,
                                        o = void 0 !== u && u;
                                    return {
                                        url: "/groups/".concat(e, "/join?confirmOverrideBlock=").concat(o),
                                        method: "POST",
                                        body: {
                                            inviteId: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupMembers",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "UserGroups:invited"
                                    }]
                                }))
                            }),
                            cancelGroupJoinRequest: r.mutation({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/requests"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    return [{
                                        type: "Group",
                                        id: r.groupId
                                    }]
                                }))
                            }),
                            getGroupMemberByUserId: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t)
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    var u = t.groupId,
                                        o = t.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: u + (void 0 === o ? "" : o)
                                    }]
                                }
                            }),
                            getGroupBannedMembers: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.perPage,
                                        u = void 0 === t ? 100 : t,
                                        o = r.offset,
                                        n = void 0 === o ? 0 : o;
                                    return {
                                        url: "/groups/".concat(e, "/bans"),
                                        params: {
                                            n: u,
                                            offset: n
                                        }
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupBannedMembers",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            banGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/bans"),
                                        method: "POST",
                                        body: {
                                            userId: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId,
                                        u = void 0 === t ? "" : t,
                                        o = r.fromPage;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: e
                                    }, {
                                        type: "GroupMember",
                                        id: e + u
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(e, "-").concat(o)
                                    }]
                                }))
                            }),
                            unbanGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/bans/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return [{
                                        type: "GroupMembers",
                                        id: e
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: e
                                    }, {
                                        type: "GroupMember",
                                        id: e + (void 0 === t ? "" : t)
                                    }]
                                }))
                            }),
                            kickGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId,
                                        u = void 0 === t ? "" : t,
                                        o = r.fromPage;
                                    return [{
                                        type: "GroupMembersSearch"
                                    }, {
                                        type: "GroupMember",
                                        id: e + u
                                    }, {
                                        type: "GroupMemberPage",
                                        id: "".concat(e, "-").concat(o)
                                    }]
                                }))
                            }),
                            unblockGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "UserGroups:userblocked"
                                    }, {
                                        type: "GroupJoinRequests",
                                        id: e
                                    }]
                                }))
                            }),
                            blockGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/block"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    return [{
                                        type: "Group",
                                        id: r.groupId
                                    }, {
                                        type: "UserGroups:userblocked"
                                    }]
                                }))
                            }),
                            leaveGroup: r.mutation({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/leave"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return [{
                                        type: "GroupMembers",
                                        id: e
                                    }, {
                                        type: "GroupMember",
                                        id: e + (void 0 === t ? "" : t)
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }))
                            }),
                            deleteGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t),
                                        method: "DELETE"
                                    }
                                }
                            }),
                            getGroupInvites: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.perPage,
                                        u = void 0 === t ? 100 : t,
                                        o = r.offset,
                                        n = void 0 === o ? 0 : o;
                                    return {
                                        url: "/groups/".concat(e, "/invites"),
                                        params: {
                                            n: u,
                                            offset: n
                                        }
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupInvites",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            inviteGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/invites"),
                                        method: "POST",
                                        body: {
                                            userId: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupInvites",
                                        id: e
                                    }, {
                                        type: "GroupJoinRequests",
                                        id: e
                                    }]
                                }))
                            }),
                            deleteGroupInvite: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/invites/").concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    return [{
                                        type: "GroupInvites",
                                        id: r.groupId
                                    }]
                                }))
                            }),
                            getGroupJoinRequests: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.perPage,
                                        u = void 0 === t ? 100 : t,
                                        o = r.offset,
                                        n = void 0 === o ? 0 : o,
                                        a = r.blocked,
                                        s = void 0 !== a && a;
                                    return {
                                        url: "/groups/".concat(e, "/requests"),
                                        params: {
                                            n: u,
                                            offset: n,
                                            blocked: s
                                        }
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            acceptGroupJoinRequest: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/requests/").concat(t),
                                        method: "PUT",
                                        body: {
                                            action: "accept"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: e
                                    }, {
                                        type: "GroupMembers",
                                        id: e
                                    }]
                                }))
                            }),
                            rejectGroupJoinRequest: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/requests/").concat(t),
                                        method: "PUT",
                                        body: {
                                            action: "reject"
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: e
                                    }, {
                                        type: "GroupMembers",
                                        id: e
                                    }]
                                }))
                            }),
                            blockGroupJoinRequest: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/requests/").concat(t),
                                        method: "PUT",
                                        body: {
                                            action: "reject",
                                            block: !0
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: e
                                    }, {
                                        type: "GroupMembers",
                                        id: e
                                    }]
                                }))
                            }),
                            banUserFromGroupJoinRequest: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return {
                                        url: "/groups/".concat(e, "/bans"),
                                        method: "POST",
                                        body: {
                                            userId: t
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupJoinRequests",
                                        id: e
                                    }, {
                                        type: "GroupBannedMembers",
                                        id: e
                                    }]
                                }))
                            }),
                            getGroupMembershipStatus: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.perPage,
                                        u = void 0 === t ? 100 : t,
                                        o = r.offset,
                                        n = void 0 === o ? 0 : o,
                                        a = r.membershipStatus,
                                        s = void 0 === a ? "invited" : a;
                                    return {
                                        url: "/groups/".concat(e, "/").concat(s),
                                        params: {
                                            n: u,
                                            offset: n
                                        }
                                    }
                                }
                            }),
                            getGroupRoles: r.query({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/roles")
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupRoles",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            createGroupRole: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.data;
                                    return {
                                        url: "/groups/".concat(e, "/roles"),
                                        method: "POST",
                                        body: d({}, t)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupRoles",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }, "Stores", "Store", "UserListings", "UserProducts"]
                                }))
                            }),
                            updateGroupRole: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.roleId,
                                        u = r.data;
                                    return {
                                        url: "/groups/".concat(e, "/roles/").concat(t),
                                        method: "PUT",
                                        body: d({}, u)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupRoles",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }]
                                }))
                            }),
                            updateGroupRolewithProduct: r.mutation({
                                queryFn: (e = (0, o.Z)(a().mark((function r(e, t, u, o) {
                                    var n, s, i, p, c, l, g;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (n = e.groupId, s = e.roleId, i = e.productId, p = e.roleData, !(c = e.productData) || !i) {
                                                    r.next = 7;
                                                    break
                                                }
                                                return r.next = 4, o({
                                                    url: "products/".concat(i),
                                                    method: "PUT",
                                                    body: d({}, c)
                                                });
                                            case 4:
                                                r.t0 = r.sent, r.next = 8;
                                                break;
                                            case 7:
                                                r.t0 = null;
                                            case 8:
                                                if (null == (l = r.t0) || !l.error) {
                                                    r.next = 11;
                                                    break
                                                }
                                                return r.abrupt("return", {
                                                    error: l.error
                                                });
                                            case 11:
                                                return r.next = 13, o({
                                                    url: "/groups/".concat(n, "/roles/").concat(s),
                                                    method: "PUT",
                                                    body: d({}, p)
                                                });
                                            case 13:
                                                if (!(g = r.sent).error) {
                                                    r.next = 16;
                                                    break
                                                }
                                                return r.abrupt("return", {
                                                    error: g.error
                                                });
                                            case 16:
                                                return r.abrupt("return", {
                                                    data: d({
                                                        role: g.data
                                                    }, (null == l ? void 0 : l.data) && {
                                                        product: l.data
                                                    })
                                                });
                                            case 17:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                }))), function(r, t, u, o) {
                                    return e.apply(this, arguments)
                                }),
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "Product",
                                        id: r.productId
                                    }, "UserProducts", {
                                        type: "GroupRoles",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }]
                                }))
                            }),
                            deleteGroupRole: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.roleId,
                                        u = r.confirm;
                                    return {
                                        url: "/groups/".concat(e, "/roles/").concat(t),
                                        method: "DELETE",
                                        params: {
                                            confirm: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupRoles",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }, {
                                        type: "GroupAuditLogs",
                                        id: e
                                    }, {
                                        type: "UserListings"
                                    }, {
                                        type: "Store"
                                    }, "Stores", "UserProducts"]
                                }))
                            }),
                            updateGroupMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId,
                                        u = r.visibility,
                                        o = r.isSubscribedToPosts,
                                        n = r.managerNotes;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t),
                                        method: "PUT",
                                        body: {
                                            visibility: u,
                                            isSubscribedToAnnouncements: o,
                                            managerNotes: n
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: e + (void 0 === t ? "" : t)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            addRoleToMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId,
                                        u = r.roleId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t, "/roles/").concat(u),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: e + (void 0 === t ? "" : t)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            removeRoleFromMember: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.userId,
                                        u = r.roleId;
                                    return {
                                        url: "/groups/".concat(e, "/members/").concat(t, "/roles/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId,
                                        t = r.userId;
                                    return [{
                                        type: "GroupMember",
                                        id: e + (void 0 === t ? "" : t)
                                    }, {
                                        type: "GroupMembersSearch"
                                    }]
                                }))
                            }),
                            getGroupAuditLogTypes: r.query({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/auditLogTypes")
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupAuditLogTypes",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupAuditLogs: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.eventTypes,
                                        u = void 0 === t ? [] : t,
                                        o = r.perPage,
                                        n = void 0 === o ? 1 : o,
                                        a = r.offset,
                                        s = r.startDate,
                                        i = r.endDate;
                                    return {
                                        url: "/groups/".concat(e, "/auditLogs"),
                                        params: {
                                            n,
                                            offset: a,
                                            startDate: s,
                                            endDate: i,
                                            eventTypes: u
                                        }
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupAuditLogs",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupGalleries: r.query({
                                query: function(r) {
                                    var e = r.groupId;
                                    return {
                                        url: "/groups/".concat(e, "/galleries")
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupGalleries",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getGroupGalleryImages: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.galleryId,
                                        u = r.n,
                                        o = r.page,
                                        n = void 0 === o ? 1 : o;
                                    return {
                                        url: "/groups/".concat(e, "/galleries/").concat(t),
                                        params: {
                                            v: 2,
                                            n: u,
                                            offset: (n - 1) * u
                                        }
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: t.groupId + t.galleryId
                                    }]
                                }
                            }),
                            createGroupGallery: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.name,
                                        u = r.description,
                                        o = r.membersOnly;
                                    return {
                                        url: "/groups/".concat(e, "/galleries"),
                                        method: "POST",
                                        body: {
                                            name: t,
                                            description: u,
                                            membersOnly: o
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupGalleries",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }))
                            }),
                            updateGroupGallery: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.galleryId,
                                        u = r.data;
                                    return {
                                        url: "/groups/".concat(e, "/galleries/").concat(t),
                                        method: "PUT",
                                        body: d({}, u)
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: e + r.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }))
                            }),
                            deleteGroupGallery: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.galleryId,
                                        u = r.confirm;
                                    return {
                                        url: "/groups/".concat(e, "/galleries/").concat(t, "?confirm=").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: e + r.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }
                            }),
                            deleteGroupGalleryImage: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.galleryId,
                                        u = r.imageId;
                                    return {
                                        url: "/groups/".concat(e, "/galleries/").concat(t, "/images/").concat(u),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: e + r.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }))
                            }),
                            submitGroupGalleryImage: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.galleryId,
                                        u = r.fileId;
                                    return {
                                        url: "/groups/".concat(e, "/galleries/").concat(t, "/images"),
                                        method: "POST",
                                        body: {
                                            fileId: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    var e = r.groupId;
                                    return [{
                                        type: "GroupGalleryImages",
                                        id: e + r.galleryId
                                    }, {
                                        type: "GroupGalleries",
                                        id: e
                                    }, {
                                        type: "Group",
                                        id: e
                                    }]
                                }))
                            }),
                            getGroupRoleTemplates: r.query({
                                query: function() {
                                    return {
                                        url: "/groups/roleTemplates"
                                    }
                                }
                            }),
                            searchGroups: r.query({
                                query: function(r) {
                                    return {
                                        url: "/groups",
                                        params: {
                                            query: r.query,
                                            n: 100
                                        }
                                    }
                                }
                            }),
                            createGroupInstance: r.mutation({
                                query: function(r) {
                                    return {
                                        url: "/instances",
                                        method: "POST",
                                        body: {
                                            worldId: r.worldId,
                                            ownerId: r.groupId,
                                            type: r.instanceType,
                                            groupAccessType: r.groupAccessType,
                                            region: r.region,
                                            queueEnabled: r.queueEnabled,
                                            ageGate: r.ageGate,
                                            roleIds: r.roleIds || []
                                        }
                                    }
                                },
                                invalidatesTags: function(r, e, t) {
                                    return [{
                                        type: "Group",
                                        id: t.groupId
                                    }]
                                }
                            }),
                            getUserGroupsByMembershipStatus: r.query({
                                query: function(r) {
                                    var e = r.userId,
                                        t = r.membershipStatus;
                                    return {
                                        url: "/users/".concat(e, "/groups/").concat(t)
                                    }
                                },
                                providesTags: function(r, e, t) {
                                    var u = t.membershipStatus;
                                    return [{
                                        type: "UserGroups:".concat(u)
                                    }]
                                }
                            }),
                            declineGroupInvite: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.block,
                                        u = void 0 !== t && t;
                                    return {
                                        url: "groups/".concat(e, "/invites"),
                                        method: "PUT",
                                        body: {
                                            block: u
                                        }
                                    }
                                },
                                invalidatesTags: (0, i.T)((function(r) {
                                    return [{
                                        type: "UserGroups:invited"
                                    }, {
                                        type: "Group",
                                        id: r.groupId
                                    }]
                                }))
                            }),
                            getTransferGroupValidity: r.query({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.transferTargetId;
                                    return {
                                        url: "groups/".concat(e, "/transfer"),
                                        method: "GET",
                                        params: {
                                            transferTargetId: t
                                        }
                                    }
                                },
                                providesTags: function(r) {
                                    return [{
                                        type: "GroupTransfer",
                                        id: r.groupId
                                    }]
                                }
                            }),
                            acceptGroupTransfer: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.transferTargetId;
                                    return {
                                        url: "groups/".concat(e, "/transfer"),
                                        method: "POST",
                                        body: {
                                            transferTargetId: t
                                        }
                                    }
                                },
                                invalidatesTags: function(r, e, t) {
                                    var u = t.groupId;
                                    return [{
                                        type: "Group",
                                        id: u
                                    }, {
                                        type: "GroupTransfer",
                                        id: u
                                    }]
                                }
                            }),
                            deleteGroupTransfer: r.mutation({
                                query: function(r) {
                                    var e = r.groupId,
                                        t = r.transferTargetId;
                                    return {
                                        url: "groups/".concat(e, "/transfer"),
                                        method: "DELETE",
                                        body: {
                                            transferTargetId: t
                                        }
                                    }
                                },
                                invalidatesTags: function(r, e, t) {
                                    var u = t.groupId;
                                    return [{
                                        type: "Group",
                                        id: u
                                    }, {
                                        type: "GroupTransfer",
                                        id: u
                                    }]
                                }
                            })
                        };
                        var e, t
                    }
                }).enhanceEndpoints({
                    addTagTypes: ["Group", "GroupActiveInstances", "GroupPost", "GroupAuditLogs", "GroupAuditLogTypes", "GroupBannedMembers", "GroupFeedback", "GroupInvites", "GroupJoinRequests", "GroupMember", "GroupMembersSearch", "GroupPermissions", "GroupRoles", "UserGroups:userblocked", "UserGroups:invited", "UserGroups", "UserGroupsPermissions"]
                }),
                l = c.useAcceptGroupJoinRequestMutation,
                g = c.useAddRoleToMemberMutation,
                y = c.useBanGroupMemberMutation,
                G = c.useBanUserFromGroupJoinRequestMutation,
                v = c.useBlockGroupJoinRequestMutation,
                m = c.useBlockGroupMutation,
                f = c.useCancelGroupJoinRequestMutation,
                I = c.useCreateGroupMutation,
                b = c.useCreateGroupPostMutation,
                T = c.useCreateGroupGalleryMutation,
                q = c.useCreateGroupInstanceMutation,
                M = c.useCreateGroupReportsMutation,
                h = c.useCreateGroupRoleMutation,
                P = c.useDeleteGroupPostMutation,
                R = c.useDeleteGroupGalleryImageMutation,
                E = c.useDeleteGroupGalleryMutation,
                k = c.useDeleteGroupInviteMutation,
                S = (c.useDeleteGroupMemberMutation, c.useDeleteGroupMutation),
                L = c.useDeleteGroupRoleMutation,
                U = c.useGetAllUserGroupsPermissionsQuery,
                A = c.useGetGroupActiveInstancesQuery,
                D = c.useGetGroupPostsQuery,
                O = c.useGetGroupBannedMembersQuery,
                x = c.useGetGroupByIdQuery,
                w = (c.useGetGroupGalleriesQuery, c.useGetGroupGalleryImagesQuery),
                Q = c.useGetGroupInvitesQuery,
                j = c.useGetGroupJoinRequestsQuery,
                B = c.useGetGroupMemberByUserIdQuery,
                F = (c.useGetGroupMembershipStatusQuery, c.useGetGroupReportsQuery),
                J = c.useGetGroupRolesQuery,
                V = c.useGetGroupRoleTemplatesQuery,
                C = c.useGetGroupsForUserQuery,
                N = c.useGetGroupsPermissionsQuery,
                _ = c.useGetSearchGroupMembersQuery,
                z = c.useGetUserGroupsByMembershipStatusQuery,
                Z = c.useDeclineGroupInviteMutation,
                X = c.useInviteGroupMemberMutation,
                K = c.useJoinGroupMutation,
                W = c.useKickGroupMemberMutation,
                $ = c.useGetGroupAuditLogTypesQuery,
                H = c.useLazyGetGroupAuditLogsQuery,
                Y = c.useLazyGetGroupByIdQuery,
                rr = c.useLazyGetGroupMembersQuery,
                er = (c.useLazyGetGroupRolesQuery, c.useLazySearchGroupsQuery),
                tr = c.useLeaveGroupMutation,
                ur = c.useRejectGroupJoinRequestMutation,
                or = (c.useRemoveGroupIconAndBannerMutation, c.useRemoveRoleFromMemberMutation),
                nr = c.useSubmitGroupGalleryImageMutation,
                ar = c.useUnbanGroupMemberMutation,
                sr = c.useUnblockGroupMutation,
                ir = c.useUpdateGroupGalleryMutation,
                pr = c.useUpdateGroupMemberMutation,
                dr = c.useUpdateGroupMutation,
                cr = c.useUpdateGroupRoleMutation,
                lr = (c.useUpdateGroupTagsMutation, c.useUpdateGroupRolewithProductMutation),
                gr = c.useGetTransferGroupValidityQuery,
                yr = c.useAcceptGroupTransferMutation,
                Gr = c.useDeleteGroupTransferMutation
        }
    }
]);
//# sourceMappingURL=aefdfea31cf4987c61bc95465dbbc7a4a968a870df4ceb45117eda65bc30d64f.js.map